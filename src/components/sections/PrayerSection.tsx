import { Clock3, DoorOpen, KeyRound, MapPin, MoveRight } from 'lucide-react'
import { prayerInfo } from '../../content/prayer'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function PrayerSection() {
  return (
    <section className="py-24 sm:py-28" id="prayer">
      <Container>
        <SectionHeading
          eyebrow="Prayer at UVic"
          title="A calm, central place for prayer and gathering throughout the week."
          description="Prayer is at the heart of the UVic MSA experience. This section brings together Jummah details, prayer room access, and the key information students need most often."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <Card className="overflow-hidden bg-[linear-gradient(155deg,rgba(23,51,40,0.96),rgba(47,90,70,0.9))] p-8 text-ivory shadow-[0_28px_90px_rgba(23,51,40,0.24)] sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-ivory/60">{prayerInfo.jummahTitle}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Jummah Prayer</h3>
              </div>
              <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-ivory/80 backdrop-blur-xl">
                {prayerInfo.frequency}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                <Clock3 className="h-5 w-5 text-gold" />
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-ivory/60">Time</p>
                <p className="mt-2 text-2xl font-medium tracking-[-0.04em]">{prayerInfo.time}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-ivory/60">Location</p>
                <p className="mt-2 text-2xl font-medium tracking-[-0.04em]">{prayerInfo.location}</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-ivory/78">{prayerInfo.weeklyNote}</p>
          </Card>

          <div className="grid gap-6">
            <Card className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
                  <DoorOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="eyebrow !text-body/45">Prayer room</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-deep">{prayerInfo.prayerRoomTitle}</h3>
                  <p className="mt-3 text-lg text-body/80">{prayerInfo.room}</p>
                  <p className="mt-4 text-sm leading-7 text-body/78">A quiet campus space for daily prayer, reflection, and moments of stillness between classes.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-deep shadow-soft">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <p className="eyebrow !text-body/45">Access note</p>
                  <p className="mt-3 text-base leading-8 text-body/82">{prayerInfo.accessNote}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {prayerInfo.sections.map((item) => (
            <Card className="group p-6 hover:-translate-y-1 hover:bg-white/72" key={item.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.03em] text-deep">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-body/78">{item.description}</p>
                </div>
                <MoveRight className="mt-1 h-5 w-5 text-deep/35 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
