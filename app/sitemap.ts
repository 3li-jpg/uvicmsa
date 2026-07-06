import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/src/lib/siteUrl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/counselling'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
