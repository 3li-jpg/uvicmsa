'use client'

import type { CSSProperties, HTMLAttributes } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { cn } from '../../lib/cn'

type TextTag = 'article' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'p' | 'section' | 'span'

type TextAnimateProps = HTMLAttributes<HTMLElement> & {
  children: string
  delay?: number
  duration?: number
  as?: TextTag
  startOnView?: boolean
}

export function TextAnimate({
  children,
  className,
  delay = 0,
  duration = 0.4,
  as: Component = 'p',
  startOnView = true,
  style,
  ...props
}: TextAnimateProps) {
  const { ref, phase } = useRevealOnScroll<HTMLElement>(startOnView)

  return (
    <Component
      className={cn(phase === 'pending' ? 'reveal-pending' : 'reveal', 'whitespace-pre-wrap', className)}
      ref={ref as never}
      style={{
        '--reveal-delay': `${delay}s`,
        '--reveal-duration': `${duration}s`,
        ...style,
      } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  )
}
