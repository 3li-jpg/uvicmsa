import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'primary' | 'secondary'
}

export function Button({ className, href, variant = 'primary', children, ...props }: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory',
    variant === 'primary'
      ? 'bg-deep text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-forest'
      : 'border border-white/50 bg-white/55 text-deep shadow-[0_12px_30px_rgba(23,51,40,0.08)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/75',
    className,
  )

  if (href.startsWith('http') || href.startsWith('#')) {
    return (
      <a className={styles} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link className={styles} href={href} {...props}>
      {children}
    </Link>
  )
}
