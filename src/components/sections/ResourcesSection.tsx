import { ArrowUpRight, Camera, Globe, Link as LinkIcon, MessageCircle, MessageCircleMore } from 'lucide-react'
import { externalLinks } from '../../content/site'
import { ruhContent } from '../../content/ruh'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const quickLinks = [
  {
    title: 'Discord',
    description: 'Join the server for updates, reminders, and community announcements.',
    href: externalLinks.discord,
    label: 'Join Discord',
    icon: MessageCircleMore,
  },
  {
    title: 'Instagram',
    description: 'Follow @uvicmsa for the latest posts, announcements, and event updates.',
    href: externalLinks.instagram,
    label: 'Open Instagram',
    icon: Camera,
  },
  {
    title: 'WhatsApp',
    description: 'Join the WhatsApp group to stay in touch with the community directly.',
    href: externalLinks.whatsapp,
    label: 'Open WhatsApp',
    icon: MessageCircle,
  },
  {
    title: 'Facebook',
    description: 'See updates and posts from the UVic MSA Facebook page.',
    href: externalLinks.facebook,
    label: 'Open Facebook',
    icon: Globe,
  },
  {
    title: 'Linktree',
    description: 'Find the main UVic MSA links in one place.',
    href: externalLinks.linktree,
    label: 'Open Linktree',
    icon: LinkIcon,
  },
]

export function ResourcesSection() {
  return (
    <section className="py-24 sm:py-28" id="resources">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Important links for UVic MSA students."
          description="Quick access to mental health support, community links, and student updates."
        />

        <Card className="mt-12 overflow-hidden border-white/30 bg-[linear-gradient(145deg,rgba(31,43,61,0.94),rgba(110,143,182,0.78))] p-7 text-ivory shadow-[0_24px_80px_rgba(93,123,162,0.2)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-ivory/60">{ruhContent.eyebrow}</p>
              <h3 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-[-0.05em] text-ivory sm:text-4xl">
                {ruhContent.title}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/80">{ruhContent.description}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ivory/72 sm:text-base">{ruhContent.detail}</p>
            </div>

            <div className="lg:pb-1">
              <Button href={ruhContent.href} rel="noreferrer" target="_blank">
                {ruhContent.ctaLabel}
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((resource) => {
            const Icon = resource.icon
            return (
              <Card className="group flex h-full flex-col justify-between p-6 hover:-translate-y-1 hover:bg-white/72 sm:p-7" key={resource.title}>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-deep shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.05em] text-deep">{resource.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-body/80">{resource.description}</p>
                </div>
                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors duration-300 hover:text-forest"
                  href={resource.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {resource.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
