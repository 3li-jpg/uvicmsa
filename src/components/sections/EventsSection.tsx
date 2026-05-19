import { events } from '../../content/events'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function EventsSection() {
  return (
    <section className="py-24 sm:py-28" id="events">
      <Container>
        <SectionHeading
          eyebrow="Events"
          title="Regular programs and community events."
          description="Jummah, halaqas, Ramadan programming, socials, and support-focused events."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <Card className="group flex h-full flex-col justify-between p-6 hover:-translate-y-1 hover:bg-white/72 sm:p-7" key={event.title}>
              <div>
                <Badge>{event.tone}</Badge>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.05em] text-deep">{event.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-body/50">{event.schedule}</p>
                <p className="mt-5 text-sm leading-7 text-body/80 sm:text-base">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
