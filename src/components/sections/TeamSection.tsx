import { team } from '../../content/team'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TeamSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-28" id="team">
      <Container>
        <SectionHeading
          eyebrow="Current team"
          title="Current UVic MSA executive team."
          description="Updated from the previous MSA website."
        />

        <ul className="mt-8 sm:mt-12 divide-y divide-white/70 overflow-hidden rounded-[2rem] border border-white/75 bg-white/72 shadow-soft backdrop-blur-md dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
          {team.map((member) => (
            <li className="px-6 py-5 sm:px-8" key={member.name}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-2xl font-bold tracking-[-0.05em] text-deep dark:text-ivory">{member.name}</h3>
                <p className="text-sm font-medium text-body/70 dark:text-ivory/80 sm:text-right">{member.role}</p>
              </div>
              {member.bio ? <p className="mt-3 max-w-3xl text-sm leading-7 text-body/80 dark:text-ivory/90">{member.bio}</p> : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
