import { HeartHandshake, MoonStar, Users } from 'lucide-react'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const values = [
  {
    icon: MoonStar,
    title: 'Faith',
    description: 'A place for Muslim students to stay connected to prayer and faith on campus.',
  },
  {
    icon: HeartHandshake,
    title: 'Community',
    description: 'A welcoming space to build brotherhood, sisterhood, and support.',
  },
  {
    icon: Users,
    title: 'Campus dialogue',
    description: 'Open to students of all faiths through learning, events, and respectful dialogue.',
  },
]

export function About() {
  return (
    <section className="py-24 sm:py-28" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <SectionHeading
            description="We support Muslim students and welcome people of all faiths through community, education, and dialogue at UVic."
            eyebrow="Who are we?"
            title="The official Muslim Students’ Association at UVic."
          />

          <div className="space-y-5">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card className="group p-6 hover:-translate-y-1 hover:bg-white/72 sm:p-7" key={value.title}>
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-deep text-ivory shadow-[0_18px_40px_rgba(93,123,162,0.16)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.03em] text-deep">{value.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-body/80 sm:text-base">{value.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
