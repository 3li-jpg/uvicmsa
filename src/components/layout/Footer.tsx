import Link from 'next/link'
import { ArrowUpRight, Camera, Clock3, DoorOpen, Link as LinkIcon, MessageCircleMore } from 'lucide-react'
import { externalLinks, navItems } from '../../content/site'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 bg-[linear-gradient(180deg,rgba(23,51,40,0.98),rgba(17,38,30,1))] py-16 text-ivory sm:py-20" id="contact">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ivory/55">UVic MSA</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              UVic Muslim Students’ Association
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/72">
              Prayer info, student resources, and ways to stay connected.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10" href={externalLinks.discord} rel="noreferrer" target="_blank">
                <div className="flex items-center gap-3 text-gold">
                  <MessageCircleMore className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-ivory/55">Discord</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ivory/75">Reach out for updates and prayer room access.</p>
              </a>
              <a className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10" href={externalLinks.instagram} rel="noreferrer" target="_blank">
                <div className="flex items-center gap-3 text-gold">
                  <Camera className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-ivory/55">Instagram</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ivory/75">Follow the latest posts and announcements.</p>
              </a>
              <a className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10" href={externalLinks.linktree} rel="noreferrer" target="_blank">
                <div className="flex items-center gap-3 text-gold">
                  <LinkIcon className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-ivory/55">Linktree</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ivory/75">Find the main UVic MSA links in one place.</p>
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-ivory/50">Navigation</p>
              <ul className="mt-5 space-y-3 text-sm text-ivory/72">
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

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-gold">
                  <Clock3 className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-ivory/55">Jummah</span>
                </div>
                <p className="mt-4 text-lg font-medium tracking-[-0.03em]">Every Friday · 1:30 PM</p>
                <p className="mt-2 text-sm text-ivory/70">UVic Multifaith Centre</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-gold">
                  <DoorOpen className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-ivory/55">Prayer Room</span>
                </div>
                <p className="mt-4 text-lg font-medium tracking-[-0.03em]">Sedgewick Room C125</p>
                <p className="mt-2 text-sm text-ivory/70">Contact the MSA through Discord or Instagram for the door code.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
