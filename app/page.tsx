import type { Metadata } from 'next'
import App from '@/src/App'

const title = 'UVic Muslim Students’ Association'
const description = 'Prayer, events, community, resources, and student life for Muslim students at the University of Victoria.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
    description,
  },
}

export default function HomePage() {
  return <App />
}
