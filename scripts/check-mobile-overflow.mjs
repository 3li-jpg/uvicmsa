import { readFileSync } from 'node:fs'

const textAnimate = readFileSync(new URL('../src/components/ui/TextAnimate.tsx', import.meta.url), 'utf8')

if (/inline-block whitespace-pre['"`]/.test(textAnimate)) {
  throw new Error('TextAnimate segments must allow wrapping on mobile; whitespace-pre makes whole headings overflow.')
}

console.log('mobile animated text can wrap')
