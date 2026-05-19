'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { externalLinks, navItems } from '../../content/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const sectionIds = useMemo(
    () => navItems.flatMap((item) => (item.sectionId ? [item.sectionId] : [])),
    [],
  )
  const activeSection = useActiveSection(sectionIds, isHomePage)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <Container>
        <div
          className={cn(
            'mx-auto flex w-full items-center justify-between rounded-full border border-white/50 bg-white/65 px-4 py-3 shadow-glow backdrop-blur-2xl transition-all duration-300 sm:px-6',
            isScrolled && 'bg-white/78',
          )}
        >
          <Link
            className="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold tracking-[0.12em] text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            href="/#home"
          >
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-soft">
              <Image alt="UVic MSA logo" className="h-full w-full object-contain" height={36} src="/uvic-msa-logo.png" width={36} />
            </span>
            <span className="hidden text-xs uppercase sm:inline">UVic MSA</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHomePage && item.sectionId !== undefined && activeSection === item.sectionId
              return (
                <Link
                  className={cn(
                    'rounded-full px-4 py-2 text-sm text-deep/78 transition-all duration-300 hover:bg-white/75 hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                    isActive && 'bg-white/80 text-deep shadow-[0_10px_24px_rgba(23,51,40,0.08)]',
                  )}
                  href={item.href}
                  key={item.id}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={externalLinks.discord} rel="noreferrer" target="_blank">
              Join MSA
            </Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-deep shadow-soft transition-all duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(247,245,239,0.95),rgba(233,225,211,0.98))] px-6 pb-8 pt-28 transition-all duration-500 lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <Container className="flex h-full flex-col justify-between px-0">
          <nav aria-label="Mobile" className="space-y-3">
            {navItems.map((item, index) => (
              <Link
                className={cn(
                  'block rounded-[1.75rem] border border-white/55 bg-white/60 px-5 py-5 text-2xl font-medium tracking-[-0.04em] text-deep shadow-soft backdrop-blur-xl transition-all duration-500',
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                )}
                href={item.href}
                key={item.id}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="rounded-[2rem] border border-white/55 bg-white/55 p-6 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-body/55">Get connected</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-body/78">
              Join Jummah, message the team for prayer room access, and stay close to the community through the year.
            </p>
            <Button
              className="mt-6 w-full"
              href={externalLinks.discord}
              onClick={() => setIsOpen(false)}
              rel="noreferrer"
              target="_blank"
            >
              Join MSA
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
