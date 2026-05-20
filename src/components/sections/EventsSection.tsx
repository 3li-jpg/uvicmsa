import { events } from '../../content/events'
import { Badge } from '../ui/Badge'
import { BlurFade } from '../ui/BlurFade'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function EventsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28" id="events">
      <Container>
        <BlurFade inView offset={18}>
          <SectionHeading
            eyebrow="Events"
            title="Regular programs and community events."
            description="Jummah, halaqas, Ramadan programming, socials, and support-focused events."
          />
        </BlurFade>

        <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <BlurFade className="h-full" delay={index * 0.08} duration={0.52} inView key={event.title} offset={18}>
              <Card className="group flex h-full flex-col justify-between p-5 hover:-translate-y-1 hover:bg-white/72 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] sm:p-7">
                <div>
                  <Badge>{event.tone}</Badge>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.05em] text-deep dark:text-ivory">{event.title}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-body/50 dark:text-ivory/80">{event.schedule}</p>
                  <p className="mt-5 text-sm leading-7 text-body/80 dark:text-ivory/90 sm:text-base">{event.description}</p>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  )
}
