import type { HeroContent, NavItem } from '../data/types'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/#home', sectionId: 'home' },
  { id: 'about', label: 'About', href: '/#about', sectionId: 'about' },
  { id: 'prayer', label: 'Prayer', href: '/#prayer', sectionId: 'prayer' },
  { id: 'events', label: 'Events', href: '/#events', sectionId: 'events' },
  { id: 'food', label: 'Food Guide', href: '/#food', sectionId: 'food' },
  { id: 'team', label: 'Current Team', href: '/#team', sectionId: 'team' },
  { id: 'resources', label: 'Resources', href: '/#resources', sectionId: 'resources' },
  { id: 'contact', label: 'Contact', href: '/#contact', sectionId: 'contact' },
]

export const externalLinks = {
  linktree: 'https://linktr.ee/uvicmsa',
  instagram: 'https://www.instagram.com/uvicmsa/',
  discord: 'https://discord.gg/ME7DwPN75X',
  whatsapp: 'https://chat.whatsapp.com/FhWuzUTAu3B8IyjIaTsj84',
  facebook: 'https://www.facebook.com/msauvic/',
  ruh: 'https://www.ruhcare.com/msa/victoria',
} as const

export const heroContent: HeroContent = {
  eyebrow: 'UVic Muslim Students’ Association',
  title: 'Faith, community, and student life at UVic.',
  description: 'Welcome to the official website of the Muslim Students’ Association at the University of Victoria.',
  primaryCta: 'Join the Community',
  secondaryCta: 'View Prayer Info',
}
