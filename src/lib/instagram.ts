import { externalLinks } from '../content/site'

const INSTAGRAM_HEADERS = {
  'User-Agent': 'Mozilla/5.0',
  'X-Requested-With': 'XMLHttpRequest',
} as const

const APP_ID_PATTERN = /appId":"(\d+)"/
const CSRF_PATTERN = /"csrf_token":"([^"]+)"/
const INSTAGRAM_TIMEOUT_MS = 6500

type InstagramFeedItem = {
  id: string
  code: string
  caption: string
  imageUrl: string
  link: string
}

type InstagramCandidate = {
  height?: number
  url?: string
  width?: number
}

type InstagramTimelineItem = {
  id?: string
  code?: string
  media_type?: number
  caption?: { text?: string }
  image_versions2?: { candidates?: InstagramCandidate[] }
  product_type?: string
}

type InstagramTimelineResponse = {
  items?: InstagramTimelineItem[]
}

type InstagramFetchOptions = RequestInit & {
  next?: { revalidate: number }
}

async function fetchWithTimeout(url: string, options: InstagramFetchOptions) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), INSTAGRAM_TIMEOUT_MS)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeout)
  }
}

async function getInstagramProfileHtml() {
  const response = await fetchWithTimeout(externalLinks.instagram, {
    headers: INSTAGRAM_HEADERS,
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`Instagram profile request failed: ${response.status}`)
  }

  return response.text()
}

function extractAuthTokens(html: string) {
  const appId = html.match(APP_ID_PATTERN)?.[1]
  const csrfToken = html.match(CSRF_PATTERN)?.[1]

  if (!appId || !csrfToken) {
    throw new Error('Could not extract Instagram public auth tokens')
  }

  return { appId, csrfToken }
}

async function fetchTimelineItems(appId: string, csrfToken: string) {
  const response = await fetchWithTimeout('https://www.instagram.com/api/v1/feed/user/uvicmsa/username/?count=6', {
    headers: {
      ...INSTAGRAM_HEADERS,
      Referer: externalLinks.instagram,
      'X-IG-App-ID': appId,
      'X-CSRFToken': csrfToken,
    },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`Instagram timeline request failed: ${response.status}`)
  }

  const timeline = (await response.json()) as InstagramTimelineResponse
  return Array.isArray(timeline.items) ? timeline.items : []
}

function buildPostLink(item: { code: string; product_type?: string }) {
  const kind = item.product_type === 'clips' ? 'reel' : 'p'
  return `https://www.instagram.com/${kind}/${item.code}/`
}

function getBestImageUrl(candidates: InstagramCandidate[] | undefined) {
  return candidates
    ?.filter((candidate) => candidate.url)
    .sort((a, b) => (b.width ?? 0) - (a.width ?? 0))[0]
    ?.url
}

function normalizePost(item: InstagramTimelineItem): InstagramFeedItem | undefined {
  if (!item.id || !item.code) {
    return undefined
  }

  const imageUrl = getBestImageUrl(item.image_versions2?.candidates)

  if (!imageUrl) {
    return undefined
  }

  return {
    id: item.id,
    code: item.code,
    caption: item.caption?.text?.trim() || 'Latest post from @uvicmsa',
    imageUrl,
    link: buildPostLink({ code: item.code, product_type: item.product_type }),
  }
}

export async function getLatestInstagramPosts(): Promise<InstagramFeedItem[]> {
  try {
    const html = await getInstagramProfileHtml()
    const { appId, csrfToken } = extractAuthTokens(html)
    const timelineItems = await fetchTimelineItems(appId, csrfToken)

    return timelineItems
      .map(normalizePost)
      .filter((post): post is InstagramFeedItem => Boolean(post))
      .slice(0, 3)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Unable to load Instagram posts', error instanceof Error ? error.message : error)
    }

    return []
  }
}
