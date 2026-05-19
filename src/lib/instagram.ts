import { externalLinks } from '../content/site'

const INSTAGRAM_HEADERS = {
  'User-Agent': 'Mozilla/5.0',
  'X-Requested-With': 'XMLHttpRequest',
} as const

const APP_ID_PATTERN = /appId":"(\d+)"/
const CSRF_PATTERN = /"csrf_token":"([^"]+)"/

type InstagramFeedItem = {
  id: string
  code: string
  caption: string
  imageUrl: string
  link: string
}

async function getInstagramProfileHtml() {
  const response = await fetch(externalLinks.instagram, {
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
  const response = await fetch('https://www.instagram.com/api/v1/feed/user/uvicmsa/username/?count=6', {
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

  return response.json() as Promise<{
    items?: Array<{
      id: string
      code: string
      media_type?: number
      caption?: { text?: string }
      image_versions2?: { candidates?: Array<{ url?: string }> }
      product_type?: string
    }>
  }>
}

function buildPostLink(item: { code: string; product_type?: string }) {
  const kind = item.product_type === 'clips' ? 'reel' : 'p'
  return `https://www.instagram.com/${kind}/${item.code}/`
}

export async function getLatestInstagramPosts(): Promise<InstagramFeedItem[]> {
  try {
    const html = await getInstagramProfileHtml()
    const { appId, csrfToken } = extractAuthTokens(html)
    const timeline = await fetchTimelineItems(appId, csrfToken)

    return (timeline.items ?? [])
      .filter((item) => item.code && item.image_versions2?.candidates?.[0]?.url)
      .slice(0, 3)
      .map((item) => ({
        id: item.id,
        code: item.code,
        caption: item.caption?.text?.trim() || 'Latest post from @uvicmsa',
        imageUrl: item.image_versions2!.candidates![0].url!,
        link: buildPostLink(item),
      }))
  } catch {
    return []
  }
}
