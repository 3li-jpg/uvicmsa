import { faqItems } from '../../content/faq'
import { Accordion } from '../ui/Accordion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  return (
    <section className="py-24 sm:py-28" id="faq">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions students ask most often."
          description="From Jummah details to prayer room access and volunteer opportunities, here are the essentials in one place."
        />

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}
