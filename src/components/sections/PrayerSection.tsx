import { Clock3, DoorOpen, KeyRound, MapPin } from 'lucide-react'
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
          <Card className="overflow-hidden border-white/30 bg-[linear-gradient(155deg,rgba(31,43,61,0.96),rgba(110,143,182,0.82))] p-8 text-ivory shadow-[0_28px_90px_rgba(93,123,162,0.24)] sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-ivory/60">{prayerInfo.jummahTitle}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.06em] sm:text-4xl">Jummah Prayer</h3>
              </div>
              <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-ivory/80 backdrop-blur-xl">
                {prayerInfo.frequency}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                <Clock3 className="h-5 w-5 text-gold" />
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-ivory/60">Time</p>
                <p className="mt-2 font-display text-2xl font-bold tracking-[-0.05em]">{prayerInfo.time}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-ivory/60">Location</p>
                <p className="mt-2 font-display text-2xl font-bold tracking-[-0.05em]">{prayerInfo.location}</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-ivory/78">{prayerInfo.weeklyNote}</p>
          </Card>

          <div className="grid gap-6">
            <Card className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
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
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-sage text-deep shadow-soft">
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

      </Container>
    </section>
  )
}
