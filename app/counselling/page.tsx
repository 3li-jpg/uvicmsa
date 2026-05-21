import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Footer } from '@/src/components/layout/Footer'
import { Navbar } from '@/src/components/layout/Navbar'
import { Button } from '@/src/components/ui/Button'
import { Card } from '@/src/components/ui/Card'
import { Container } from '@/src/components/ui/Container'
import { ruhContent } from '@/src/content/ruh'

export const metadata: Metadata = {
  title: 'Ruh Mental Health Support | UVic MSA',
  description: 'Learn about UVic MSA’s partnership with Ruh for Muslim mental health support.',
}

const highlights = [
  {
    title: 'Muslim therapists',
    description: 'Connect with therapists who understand Muslim identity, family, faith, and cultural context.',
    icon: HeartHandshake,
  },
  {
    title: 'Student coverage',
    description: 'Use UVic student insurance benefits to make mental health support more accessible.',
    icon: ShieldCheck,
  },
  {
    title: 'Culturally informed care',
    description: 'Find support for stress, anxiety, transitions, relationships, grief, and student life.',
    icon: Sparkles,
  },
] as const

const steps = [
  'Visit the UVic MSA Ruh partner page.',
  'Review therapist options and choose support that fits your needs.',
  'Use your student insurance benefits when booking care through Ruh.',
] as const

export default function RuhPage() {
  return (
    <div className="relative overflow-x-clip bg-ivory text-body dark:bg-[#101a2a] dark:text-ivory/95">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient-orb left-[-8rem] top-[-5rem] h-[20rem] w-[20rem] bg-sage/60" />
        <div className="ambient-orb right-[-6rem] top-[12rem] h-[26rem] w-[26rem] bg-gold/35" />
        <div className="ambient-orb bottom-[-8rem] left-[10%] h-[24rem] w-[24rem] bg-forest/25" />
      </div>

      <Navbar />

      <main className="relative z-10" id="main-content">
        <section className="pb-6 pt-32 sm:pb-8 sm:pt-40 lg:pb-10 lg:pt-44">
          <Container>
            <Button className="mb-8" href="/#resources" variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to resources
            </Button>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.48fr)] lg:items-stretch">
              <Card className="overflow-hidden border-white/30 bg-[linear-gradient(145deg,rgba(31,43,61,0.96),rgba(110,143,182,0.78))] p-6 text-ivory shadow-[0_24px_80px_rgba(93,123,162,0.2)] sm:p-10 lg:p-12">
                <p className="text-sm uppercase tracking-[0.24em] text-ivory/60">{ruhContent.eyebrow}</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-[-0.06em] text-ivory sm:text-6xl lg:text-7xl">
                  Mental health support that understands Muslim students.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-ivory/80 sm:text-lg">{ruhContent.detail}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button className="w-full sm:w-64" href={ruhContent.href} rel="noreferrer" target="_blank">
                    {ruhContent.ctaLabel}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="w-full !border-white/30 !bg-white/[0.08] !text-ivory hover:!bg-white/[0.14] sm:w-64" href="/#resources" variant="secondary">
                    View student resources
                  </Button>
                </div>
              </Card>

              <Card className="border-white/10 bg-white/[0.06] p-6 text-ivory sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-ivory/70">How it works</p>
                <ol className="mt-6 space-y-5">
                  {steps.map((step, index) => (
                    <li className="flex gap-4" key={step}>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/12 text-base font-bold leading-8 text-ivory/80 sm:text-lg">
                        {index + 1}
                      </span>
                      <p className="text-base leading-8 text-ivory/80 sm:text-lg">{step}</p>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-24">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <Card className="border-white/10 bg-white/[0.06] p-6 text-ivory sm:p-7" key={item.title}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.12] text-ivory shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.05em] text-ivory">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-ivory/88">{item.description}</p>
                  </Card>
                )
              })}
            </div>

            <Card className="mt-6 border-white/10 bg-white/[0.06] p-6 text-ivory sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.12] text-ivory shadow-soft">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-ivory">Ready to connect with Ruh?</h2>
                  <p className="mt-3 text-sm leading-7 text-ivory/88">
                    Ruh can help you explore Muslim mental health support and understand how student coverage may apply.
                  </p>
                </div>
                <Button href={ruhContent.href} rel="noreferrer" target="_blank">
                  Visit Ruh
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
