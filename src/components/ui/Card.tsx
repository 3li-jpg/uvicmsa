import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[2rem] border border-white/50 bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300',
        className,
      )}
      {...props}
    />
  )
}
