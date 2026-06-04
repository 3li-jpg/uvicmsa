export type SectionId =
  | 'home'
  | 'about'
  | 'prayer'
  | 'events'
  | 'food'
  | 'team'
  | 'resources'
  | 'faq'
  | 'contact'

export type NavItem = {
  id: string
  label: string
  href: string
  sectionId?: SectionId
}

export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export type PrayerInfo = {
  jummahTitle: string
  frequency: string
  time: string
  location: string
  room: string
  accessNote: string
  weeklyNote: string
  prayerRoomTitle: string
}

export type EventItem = {
  title: string
  schedule: string
  description: string
  tone: string
}

export type FoodPlace = {
  name: string
  category: 'Restaurant' | 'Market'
  mapUrl: string
}

export type TeamProfile = {
  name: string
  role: string
  bio?: string
}

export type FAQItem = {
  question: string
  answer: string
}
