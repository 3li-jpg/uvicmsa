'use client'

import { useEffect, useRef, useState } from 'react'

type RevealPhase = 'initial' | 'pending' | 'revealed'

/**
 * Drives reveal-on-scroll animations. Server-rendered markup stays visible
 * (phase 'initial'), so content is never hidden without JavaScript. After
 * hydration, offscreen elements move to 'pending' (hidden) and then
 * 'revealed' (animated) once they intersect the viewport.
 */
export function useRevealOnScroll<T extends HTMLElement>(enabled: boolean, margin = '0px 0px -10% 0px') {
  const ref = useRef<T | null>(null)
  const [phase, setPhase] = useState<RevealPhase>('initial')

  useEffect(() => {
    if (!enabled) {
      return
    }

    const element = ref.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase('revealed')
          observer.disconnect()
        } else {
          setPhase((current) => (current === 'initial' ? 'pending' : current))
        }
      },
      { rootMargin: margin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [enabled, margin])

  return { ref, phase }
}
