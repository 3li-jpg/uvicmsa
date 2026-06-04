import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[2rem] border border-white/75 bg-white/72 shadow-soft backdrop-blur-md transition-all duration-300 transform-gpu will-change-transform',
        className,
      )}
      {...props}
    />
  )
}
