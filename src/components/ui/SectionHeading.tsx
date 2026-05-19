import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.055em] text-deep sm:text-4xl lg:text-5xl lg:leading-[0.95]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-body/80 sm:text-lg">{description}</p>
    </div>
  )
}
