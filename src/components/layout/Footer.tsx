import Link from 'next/link'
import { ArrowUpRight, Clock3, DoorOpen } from 'lucide-react'
import { externalLinks, navItems } from '../../content/site'
import { Container } from '../ui/Container'

type SocialIconProps = {
  className?: string
}

function DiscordIcon({ className }: SocialIconProps) {
  return (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.77-.552 1.116a18.27 18.27 0 0 0-6.666 0A11.64 11.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.432 1.369C.879 8.58.117 12.686.498 16.736a19.9 19.9 0 0 0 5.993 3.026c.483-.665.91-1.37 1.278-2.108-.705-.265-1.378-.597-2.015-.99.169-.123.334-.251.494-.382 3.885 1.824 8.099 1.824 11.938 0 .161.131.326.259.494.382-.638.394-1.313.726-2.019.992.368.737.795 1.442 1.278 2.107a19.86 19.86 0 0 0 5.995-3.026c.456-4.695-.78-8.763-3.622-12.368ZM9.667 14.333c-1.17 0-2.128-1.08-2.128-2.407 0-1.327.939-2.407 2.128-2.407 1.189 0 2.148 1.08 2.128 2.407 0 1.327-.939 2.407-2.128 2.407Zm4.666 0c-1.17 0-2.128-1.08-2.128-2.407 0-1.327.939-2.407 2.128-2.407 1.189 0 2.148 1.08 2.128 2.407 0 1.327-.939 2.407-2.128 2.407Z" />
    </svg>
  )
}

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.875 1.313a1.063 1.063 0 1 1 0 2.124 1.063 1.063 0 0 1 0-2.124ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.506 5.506 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.754 3.754 0 0 0 12 8.25Z" />
    </svg>
  )
}

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 22v-8.25h2.773L16.688 10.5H13.5V8.43c0-.94.276-1.58 1.625-1.58h1.737V4.02c-.301-.04-1.335-.12-2.538-.12-2.512 0-4.232 1.533-4.232 4.348v2.252H7.25v3.25h2.842V22h3.408Z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: SocialIconProps) {
  return (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a9.94 9.94 0 0 0-8.598 14.942L2 22l5.214-1.369A9.999 9.999 0 1 0 12 2Zm0 18.182a8.14 8.14 0 0 1-4.145-1.132l-.297-.176-3.093.812.826-3.017-.194-.309A8.182 8.182 0 1 1 12 20.182Zm4.487-6.155c-.246-.123-1.455-.717-1.68-.799-.225-.082-.389-.123-.553.124-.164.246-.635.799-.778.963-.143.164-.287.184-.533.061-.246-.123-1.04-.383-1.981-1.222-.732-.652-1.226-1.458-1.369-1.705-.143-.246-.015-.379.108-.501.111-.11.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.553-1.332-.758-1.824-.199-.478-.402-.412-.553-.42l-.471-.008a.904.904 0 0 0-.656.307c-.225.246-.861.84-.861 2.049 0 1.209.881 2.377 1.004 2.541.123.164 1.734 2.648 4.201 3.713.587.253 1.045.404 1.401.517.589.187 1.125.161 1.549.098.472-.071 1.455-.594 1.66-1.168.205-.574.205-1.066.143-1.168-.062-.103-.226-.164-.472-.287Z" />
    </svg>
  )
}

function LinktreeIcon({ className }: SocialIconProps) {
  return (
    <svg aria-hidden className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <path d="m7.5 7.5 4.5-4.5 4.5 4.5" />
      <path d="m5 11 7-7 7 7" />
      <path d="M7 21h10" />
      <path d="m9 18 3 3 3-3" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Discord', href: externalLinks.discord, icon: DiscordIcon },
  { label: 'Instagram', href: externalLinks.instagram, icon: InstagramIcon },
  { label: 'Facebook', href: externalLinks.facebook, icon: FacebookIcon },
  { label: 'WhatsApp', href: externalLinks.whatsapp, icon: WhatsAppIcon },
  { label: 'Linktree', href: externalLinks.linktree, icon: LinktreeIcon },
] as const

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,rgba(31,43,61,0.98),rgba(43,61,87,1))] py-16 text-ivory sm:py-20" id="contact">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/12" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.5fr)_minmax(260px,0.7fr)] lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-ivory/55">UVic MSA</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.06em] text-ivory sm:text-5xl">
              UVic Muslim Students’ Association
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/80">
              Prayer info, student resources, and ways to stay connected.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    aria-label={link.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-ivory/90 transition-colors duration-300 hover:bg-white/10 hover:text-ivory"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                    title={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-ivory/50">Navigation</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-ivory" href={item.href}>
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-ivory/50">Key details</p>
            <dl className="mt-5 space-y-6">
              <div className="border-b border-white/10 pb-6">
                <dt className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-ivory/55">
                  <Clock3 className="h-4 w-4 text-gold" />
                  Jummah
                </dt>
                <dd className="mt-3 font-display text-2xl font-bold tracking-[-0.05em] text-ivory">Every Friday · 1:30 PM</dd>
                <dd className="mt-2 text-sm leading-7 text-ivory/80">UVic Multifaith Centre</dd>
              </div>
              <div>
                <dt className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-ivory/55">
                  <DoorOpen className="h-4 w-4 text-gold" />
                  Prayer room
                </dt>
                <dd className="mt-3 font-display text-2xl font-bold tracking-[-0.05em] text-ivory">Sedgewick Room C125</dd>
                <dd className="mt-2 text-sm leading-7 text-ivory/80">
                  Contact the MSA through Discord or Instagram for the door code.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </footer>
  )
}
