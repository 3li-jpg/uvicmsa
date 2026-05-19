import { team } from '../../content/team'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function TeamSection() {
  return (
    <section className="py-24 sm:py-28" id="team">
      <Container>
        <SectionHeading
          eyebrow="Current team"
          title="Current UVic MSA executive team."
          description="Updated from the previous MSA website."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <Card className="group h-full p-6 hover:-translate-y-1 hover:bg-white/72 sm:p-7" key={member.name}>
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(23,51,40,0.98),rgba(145,166,139,0.82))] text-lg font-semibold tracking-[-0.04em] text-ivory shadow-[0_22px_48px_rgba(23,51,40,0.16)]">
                {member.initials}
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-deep">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-gold">{member.role}</p>
                {member.bio ? <p className="mt-4 text-sm leading-7 text-body/80">{member.bio}</p> : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
