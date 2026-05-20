'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '../../data/types'
import { cn } from '../../lib/cn'

type AccordionProps = {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        const panelId = `faq-panel-${index}`
        const triggerId = `faq-trigger-${index}`

        return (
          <div className="rounded-[1.75rem] border border-white/75 bg-white/72 p-2 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06]" key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 rounded-[1.2rem] px-5 py-5 text-left text-base font-medium text-deep transition-colors duration-300 hover:bg-white/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:text-ivory dark:hover:bg-white/[0.08]"
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn('h-5 w-5 flex-none text-deep/70 transition-transform duration-300 dark:text-ivory/80', isOpen && 'rotate-180')}
              />
            </button>
            <div
              aria-labelledby={triggerId}
              className={cn(
                'grid overflow-hidden px-5 transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
              hidden={!isOpen}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden pr-10 text-sm leading-7 text-body/80 dark:text-ivory/90 sm:text-base">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
