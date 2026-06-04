import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type SiteShellProps = {
  children: ReactNode
  className?: string
}

const defaultClassName = 'landing-page relative overflow-x-clip bg-ivory text-body dark:bg-transparent dark:text-ivory/95'

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className={cn(defaultClassName, className)}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient-orb left-[-8rem] top-[-5rem] h-[20rem] w-[20rem] bg-sage/60" />
        <div className="ambient-orb right-[-6rem] top-[12rem] h-[26rem] w-[26rem] bg-gold/35" />
        <div className="ambient-orb bottom-[-8rem] left-[10%] h-[24rem] w-[24rem] bg-forest/25" />
      </div>

      <Navbar />

      <main className="relative z-10" id="main-content">
        {children}
      </main>

      <Footer />
    </div>
  )
}
