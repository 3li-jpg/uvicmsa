import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { TextAnimate } from './TextAnimate'

type SectionHeadingProps = {
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="eyebrow dark:text-ivory/80">{eyebrow}</p>
      {typeof title === 'string' ? (
        <TextAnimate
          animation="blurInUp"
          as="h2"
          by="word"
          className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.055em] text-deep dark:text-ivory sm:text-4xl lg:text-5xl lg:leading-[0.95]"
          duration={0.65}
          once
        >
          {title}
        </TextAnimate>
      ) : (
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.055em] text-deep dark:text-ivory sm:text-4xl lg:text-5xl lg:leading-[0.95]">
          {title}
        </h2>
      )}
      <p className="mt-5 max-w-2xl text-base leading-7 text-body/80 dark:text-ivory/90 sm:text-lg sm:leading-8">{description}</p>
    </div>
  )
}
