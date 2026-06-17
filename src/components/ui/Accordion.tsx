import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  items: Array<{
    question: string
    answer: string
  }>
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          className="group rounded-[1.75rem] border border-white/75 bg-white/72 p-2 shadow-soft backdrop-blur-md transition-all duration-300 open:shadow-[0_22px_60px_rgba(93,123,162,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:open:shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
          key={item.question}
          open={index === 0}
        >
          <summary className="flex w-full transform-gpu cursor-pointer list-none items-center justify-between gap-4 rounded-[1.2rem] px-5 py-5 text-left text-base font-medium text-deep transition-all duration-300 hover:bg-white/72 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:text-ivory dark:hover:bg-white/[0.08] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown className="h-5 w-5 flex-none text-deep/70 transition-transform duration-500 ease-out group-open:rotate-180 dark:text-ivory/80" />
          </summary>
          <div className="px-5 pb-5 pr-10 text-sm leading-7 text-body/80 dark:text-ivory/90 sm:text-base">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
