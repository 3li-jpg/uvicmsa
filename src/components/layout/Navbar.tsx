'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { externalLinks, navItems } from '../../content/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'
import { AnimatedThemeToggler } from '../ui/AnimatedThemeToggler'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
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
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',')

    const getFocusableElements = () => {
      const menuElements = mobileMenuRef.current
        ? Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>(focusableSelector))
        : []
      return [menuButtonRef.current, ...menuElements].filter((element): element is HTMLElement => Boolean(element))
    }

    const focusFirstMenuItem = window.requestAnimationFrame(() => {
      getFocusableElements()[1]?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = getFocusableElements()
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFirstMenuItem)
      document.removeEventListener('keydown', onKeyDown)
      menuButtonRef.current?.focus()
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <Container>
        <div
          className={cn(
            'mx-auto flex w-full items-center justify-between rounded-full border border-white/80 bg-white/72 px-4 py-3 shadow-glow backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-[#162235]/78 dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:px-6',
            isScrolled && 'bg-white/84 dark:bg-[#162235]/88',
          )}
        >
          <Link
            className="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold tracking-[0.12em] text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:text-ivory"
            href="/#home"
          >
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/80 p-1 shadow-soft dark:bg-white/90">
              <Image alt="UVic MSA logo mark" className="h-full w-full object-contain" height={40} src="/uvic-msa-logo-mark.png" width={40} />
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHomePage && item.sectionId !== undefined && activeSection === item.sectionId
              return (
                <Link
                  className={cn(
                    'rounded-full px-4 py-2 text-sm text-deep/78 transition-all duration-300 hover:bg-white/82 hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:text-ivory/90 dark:hover:bg-white/10 dark:hover:text-ivory',
                    isActive && 'bg-white/88 text-deep shadow-[0_10px_24px_rgba(93,123,162,0.12)] dark:bg-white/12 dark:text-ivory dark:shadow-none',
                  )}
                  href={item.href}
                  key={item.id}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <AnimatedThemeToggler variant="circle" />
            <Button href={externalLinks.discord} rel="noreferrer" target="_blank">
              Join MSA
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <AnimatedThemeToggler variant="circle" />
            <button
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/75 bg-white/72 text-deep shadow-soft transition-all duration-300 hover:bg-white/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:border-white/10 dark:bg-white/10 dark:text-ivory dark:hover:bg-white/16"
              onClick={() => setIsOpen((open) => !open)}
              ref={menuButtonRef}
              type="button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-40 h-dvh overflow-y-auto overscroll-contain bg-[linear-gradient(180deg,rgba(248,245,239,0.95),rgba(238,243,248,0.98))] px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-24 transition-all duration-500 dark:bg-[linear-gradient(180deg,rgba(16,26,42,0.95),rgba(22,34,53,0.98))] sm:px-6 sm:pt-28 lg:hidden',
          isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
      >
        <Container className="flex min-h-full flex-col gap-6 px-0">
          <nav aria-label="Mobile" className="space-y-2 sm:space-y-3">
            {navItems.map((item, index) => (
              <Link
                className={cn(
                  'block rounded-[1.5rem] border border-white/80 bg-white/72 px-5 py-4 font-display text-xl font-bold tracking-[-0.04em] text-deep shadow-soft backdrop-blur-md transition-all duration-500 dark:border-white/10 dark:bg-white/8 dark:text-ivory sm:rounded-[1.75rem] sm:py-5 sm:text-2xl',
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                )}
                href={item.href}
                key={item.id}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${index * 60}ms` : '0ms' }}
                tabIndex={isOpen ? undefined : -1}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/8 sm:rounded-[2rem] sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-body/55 dark:text-ivory/80">Get connected</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-body/78 dark:text-ivory/90">
              Join Jummah, message the team for prayer room access, and stay close to the community through the year.
            </p>
            <Button
              className="mt-5 w-full sm:mt-6"
              href={externalLinks.discord}
              onClick={() => setIsOpen(false)}
              rel="noreferrer"
              tabIndex={isOpen ? undefined : -1}
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
