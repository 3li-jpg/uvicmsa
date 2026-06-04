const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return 'http://localhost:3000'
  }

  const url = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`
  return new URL(url).origin
}

export const siteOrigin = normalizeSiteUrl(configuredSiteUrl)
export const siteUrl = new URL(siteOrigin)

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}
