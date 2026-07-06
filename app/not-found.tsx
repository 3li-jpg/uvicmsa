import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteShell } from '@/src/components/layout/SiteShell'
import { Button } from '@/src/components/ui/Button'
import { Container } from '@/src/components/ui/Container'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[70svh] items-center pb-16 pt-40">
        <Container>
          <p className="eyebrow dark:text-ivory/80">404</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.055em] text-deep dark:text-ivory sm:text-6xl">
            This page doesn’t exist.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-body/80 dark:text-ivory/90 sm:text-lg">
            The link may be outdated or mistyped. Everything the MSA offers — prayer info, events, resources, and the
            food guide — lives on the homepage.
          </p>
          <Button className="mt-8" href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to the homepage
          </Button>
        </Container>
      </section>
    </SiteShell>
  )
}
