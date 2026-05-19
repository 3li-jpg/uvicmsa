import { ArrowUpRight, Camera, Link as LinkIcon, MessageCircleMore, ShieldCheck } from 'lucide-react'
import { externalLinks } from '../../content/site'
import { ruhContent } from '../../content/ruh'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const resources = [
  {
    title: ruhContent.title,
    description: ruhContent.description,
    href: ruhContent.href,
    label: 'Open Ruh',
    icon: ShieldCheck,
  },
  {
    title: 'Linktree',
    description: 'A quick place for students to find the main UVic MSA links.',
    href: externalLinks.linktree,
    label: 'Open Linktree',
    icon: LinkIcon,
  },
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <Card className="group flex h-full flex-col justify-between p-6 hover:-translate-y-1 hover:bg-white/72 sm:p-7" key={resource.title}>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-deep">{resource.title}</h3>
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
