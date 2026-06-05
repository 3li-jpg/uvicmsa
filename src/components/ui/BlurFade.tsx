'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from 'motion/react'

type MarginType = UseInViewOptions['margin']

interface BlurFadeProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: {
    hidden: { y?: number; x?: number; filter?: string; opacity?: number }
    visible: { y?: number; x?: number; filter?: string; opacity?: number }
  }
  duration?: number
  delay?: number
  offset?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

const getFilter = (v: Variants[string]) =>
  typeof v === 'function' ? undefined : v.filter

const normalizeSeconds = (value: number) => (value > 10 ? value / 1000 : value)

const mobileMotionQuery = '(max-width: 767px)'

function useMobileMotionPreference() {
  const [shouldUseMobileMotion, setShouldUseMobileMotion] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(mobileMotionQuery).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMotionQuery)
    const updatePreference = () => setShouldUseMobileMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return shouldUseMobileMotion
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const shouldUseMobileMotion = useMobileMotionPreference()
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult

  const defaultVariants: Variants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']:
        direction === 'right' || direction === 'down' ? -offset : offset,
      opacity: 0,
      filter: shouldUseMobileMotion ? 'blur(0px)' : `blur(${blur})`,
    },
    visible: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
  }
  const combinedVariants = variant ?? defaultVariants

  const hiddenFilter = getFilter(combinedVariants.hidden)
  const visibleFilter = getFilter(combinedVariants.visible)

  const shouldTransitionFilter =
    !shouldUseMobileMotion &&
    hiddenFilter != null &&
    visibleFilter != null &&
    hiddenFilter !== visibleFilter

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + normalizeSeconds(delay),
        duration: normalizeSeconds(duration),
        ease: 'easeOut',
        ...(shouldTransitionFilter
          ? { filter: { duration: normalizeSeconds(duration) } }
          : {}),
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
