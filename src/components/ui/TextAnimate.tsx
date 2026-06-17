import type { CSSProperties, HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type TextTag = 'article' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'p' | 'section' | 'span'

type TextAnimateProps = HTMLAttributes<HTMLElement> & {
  children: string
  delay?: number
  duration?: number
  as?: TextTag
  by?: 'text' | 'word' | 'character' | 'line'
  animation?: string
  accessible?: boolean
  segmentClassName?: string
  startOnView?: boolean
  once?: boolean
  variants?: unknown
}

export function TextAnimate({
  children,
  className,
  delay = 0,
  duration = 0.4,
  as: Component = 'p',
  by: _by,
  animation: _animation,
  accessible: _accessible,
  segmentClassName: _segmentClassName,
  startOnView: _startOnView,
  once: _once,
  variants: _variants,
  style,
  ...props
}: TextAnimateProps) {
  return (
    <Component
      className={cn('reveal whitespace-pre-wrap', className)}
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
