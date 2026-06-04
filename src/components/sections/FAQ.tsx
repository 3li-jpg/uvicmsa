import { faqItems } from '../../content/faq'
import { Accordion } from '../ui/Accordion'
import { Container } from '../ui/Container'
import { BlurFade } from '../ui/BlurFade'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  return (
    <section className="py-12 sm:py-24 lg:py-28" id="faq">
      <Container>
        <BlurFade inView delay={0.04}>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to the questions students ask most often."
            description="From Jummah details to prayer room access and volunteer opportunities, here are the essentials in one place."
          />
        </BlurFade>

        <BlurFade inView delay={0.1}>
          <div className="mt-8 sm:mt-12">
            <Accordion items={faqItems} />
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
