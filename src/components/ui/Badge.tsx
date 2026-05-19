import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.08em] text-deep/75 shadow-[0_8px_22px_rgba(23,51,40,0.06)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}
