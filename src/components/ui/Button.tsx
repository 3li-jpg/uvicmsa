import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'primary' | 'secondary'
}

export function Button({ className, href, variant = 'primary', children, ...props }: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-ivory dark:focus-visible:ring-offset-[#101a2a]',
    variant === 'primary'
      ? 'bg-deep text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-[#2b3d57] dark:bg-white/10 dark:text-ivory dark:hover:bg-white/16'
      : 'border border-white/70 bg-white/76 text-deep shadow-[0_14px_34px_rgba(93,123,162,0.12)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/90 dark:border-white/20 dark:bg-white/[0.04] dark:text-ivory dark:hover:bg-white/[0.1]',
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
