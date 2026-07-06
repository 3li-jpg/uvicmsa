import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Atkinson_Hyperlegible, Inter } from 'next/font/google'
import { ThemeProvider } from '../src/components/ui/ThemeProvider'
import { externalLinks } from '../src/content/site'
import { absoluteUrl, siteUrl } from '../src/lib/siteUrl'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
})

const title = 'UVic Muslim Students’ Association'
const description = 'The Muslim Students’ Association at the University of Victoria: prayer, events, community, student resources, and support.'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: '%s | UVic MSA',
  },
  description,
  applicationName: 'UVic MSA',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'UVic MSA',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UVic Muslim Students’ Association',
  alternateName: 'UVic MSA',
  url: absoluteUrl('/'),
  logo: absoluteUrl('/uvic-msa-logo-mark.png'),
  sameAs: [
    externalLinks.instagram,
    externalLinks.facebook,
    externalLinks.discord,
    externalLinks.linktree,
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable} ${atkinson.variable}`} lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          type="application/ld+json"
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
