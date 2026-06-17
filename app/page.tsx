import type { Metadata } from 'next'
import { SiteShell } from '@/src/components/layout/SiteShell'
import { About } from '@/src/components/sections/About'
import { EventsSection } from '@/src/components/sections/EventsSection'
import { FAQ } from '@/src/components/sections/FAQ'
import { FoodGuide } from '@/src/components/sections/FoodGuide'
import { Hero } from '@/src/components/sections/Hero'
import { InstagramSection } from '@/src/components/sections/InstagramSection'
import { PrayerSection } from '@/src/components/sections/PrayerSection'
import { ResourcesSection } from '@/src/components/sections/ResourcesSection'
import { TeamSection } from '@/src/components/sections/TeamSection'

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
  return (
    <SiteShell>
      <Hero />
      <About />
      <PrayerSection />
      <EventsSection />
      <TeamSection />
      <ResourcesSection />
      <InstagramSection />
      <FoodGuide />
      <FAQ />
    </SiteShell>
  )
}
