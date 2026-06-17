'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { useTheme } from 'next-themes'
import { cn } from '../../lib/cn'

type AnimatedThemeTogglerProps = React.ComponentPropsWithoutRef<'button'> & {
  duration?: number
}

export function AnimatedThemeToggler({ className, duration = 400, ...props }: AnimatedThemeTogglerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button || !mounted) {
      return
    }

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y))
    const nextTheme = isDark ? 'light' : 'dark'

    const applyTheme = () => {
      setTheme(nextTheme)
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      localStorage.setItem('theme', nextTheme)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    const root = document.documentElement
    root.dataset.magicuiThemeVt = 'active'
    root.style.setProperty('--magicui-theme-toggle-vt-duration', `${duration}ms`)
    root.style.setProperty('--magicui-theme-vt-clip-from', `circle(0px at ${x}px ${y}px)`)

    const cleanup = () => {
      delete root.dataset.magicuiThemeVt
      root.style.removeProperty('--magicui-theme-toggle-vt-duration')
      root.style.removeProperty('--magicui-theme-vt-clip-from')
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    void transition.finished.finally(cleanup)
    void transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`] },
        {
          duration,
          easing: 'ease-in-out',
          fill: 'forwards',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }, [duration, isDark, mounted, setTheme])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/75 bg-white/72 text-deep shadow-soft backdrop-blur-md transition-all duration-300 hover:bg-white/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:border-white/10 dark:bg-white/10 dark:text-ivory dark:hover:bg-white/16',
        className,
      )}
      {...props}
    >
      {mounted && isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
