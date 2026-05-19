import { Quote } from 'lucide-react'
import { testimonials } from '../../content/testimonials'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28" id="testimonials">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Student voices"
          title="What belonging can feel like on campus."
          description="The most meaningful part of any MSA is not only the programming — it is the feeling of being supported, remembered, and welcomed back each week."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card className="h-full p-6 dark:border-white/10 dark:bg-white/[0.06] sm:p-7" key={item.quote}>
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-6 text-lg leading-8 tracking-[-0.02em] text-deep dark:text-ivory">
                “{item.quote}”
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-body/45 dark:text-ivory/80">{item.attribution}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
