'use client'

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

function seconds(value: number) {
  return value > 10 ? value / 1000 : value
}

type BlurFadeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  duration?: number
  delay?: number
  offset?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '0px 0px -10% 0px',
  blur = '6px',
  style,
  ...props
}: BlurFadeProps) {
  const { ref, phase } = useRevealOnScroll<HTMLDivElement>(inView, inViewMargin)
  const distance = `${direction === 'right' || direction === 'down' ? -offset : offset}px`

  return (
    <div
      className={[phase === 'pending' ? 'reveal-pending' : 'reveal', 'mobile-filter-reset', className]
        .filter(Boolean)
        .join(' ')}
      ref={ref}
      style={{
        '--reveal-delay': `${0.04 + seconds(delay)}s`,
        '--reveal-duration': `${seconds(duration)}s`,
        '--reveal-blur': blur,
        '--reveal-x': direction === 'left' || direction === 'right' ? distance : '0px',
        '--reveal-y': direction === 'up' || direction === 'down' ? distance : '0px',
        ...style,
      } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}
