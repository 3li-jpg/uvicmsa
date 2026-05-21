import { Clock3, MapPin } from 'lucide-react'
import { heroContent } from '../../content/site'
import { BlurFade } from '../ui/BlurFade'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { TextAnimate } from '../ui/TextAnimate'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-glow pb-12 pt-[calc(7rem+env(safe-area-inset-top)+0.75rem)] dark:bg-[radial-gradient(circle_at_top,rgba(110,143,182,0.22),transparent_36%),radial-gradient(circle_at_18%_18%,rgba(53,66,86,0.64),transparent_28%),linear-gradient(180deg,rgba(16,26,42,0.96)_0%,rgba(22,34,53,0.98)_100%)] sm:pt-28 lg:pb-20 lg:pt-40" id="home">
      <Container>
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch lg:gap-12">
          <BlurFade className="relative mx-auto flex max-w-3xl flex-col items-center justify-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left" inView offset={18}>
            <p className="eyebrow dark:text-ivory/80">{heroContent.eyebrow}</p>
            <TextAnimate
              as="h1"
              animation="blurInUp"
              by="word"
              className="mt-3 max-w-4xl font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.035em] text-deep dark:text-ivory sm:mt-6 sm:text-6xl sm:font-bold sm:leading-[0.9] sm:tracking-[-0.075em] lg:text-7xl xl:text-[5.4rem] xl:leading-[0.9]"
              duration={0.7}
              once
              startOnView={false}
            >
              {heroContent.title}
            </TextAnimate>
            <p className="mt-4 max-w-xl text-base leading-7 text-body/80 dark:text-ivory/90 sm:mt-7 sm:max-w-2xl sm:text-xl sm:leading-8">
              {heroContent.description}
            </p>

            <div className="mt-6 grid w-full max-w-sm grid-cols-1 gap-3 sm:mt-10 sm:max-w-md sm:grid-cols-[1.2fr_1fr] sm:gap-4 lg:flex lg:w-auto lg:max-w-none lg:justify-start">
              <Button className="min-h-11 w-full whitespace-nowrap rounded-full px-5 py-3 text-sm leading-tight sm:px-6" href="#contact">
                {heroContent.primaryCta}
              </Button>
              <Button className="min-h-11 w-full whitespace-nowrap rounded-full px-5 py-3 text-sm leading-tight sm:px-6" href="#prayer" variant="secondary">
                {heroContent.secondaryCta}
              </Button>
            </div>
          </BlurFade>

          <BlurFade className="relative hidden h-full lg:block" delay={0.12} duration={0.56} inView offset={24}>
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-lavender/20 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-36 w-36 rounded-full bg-sage/40 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/30 bg-[linear-gradient(160deg,rgba(31,43,61,0.96),rgba(110,143,182,0.78))] p-5 text-ivory shadow-[0_24px_80px_rgba(93,123,162,0.24)] sm:rounded-[2rem] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,230,242,0.24),transparent_34%)]" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/12 blur-3xl animate-drift" />
              <div className="absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-gold/25 blur-3xl animate-pulse-soft" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.26em] text-ivory/70">A home on campus</p>
                <div className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-4">
                      <Clock3 className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/70">Jummah</p>
                        <p className="mt-2 font-display text-xl font-bold tracking-[-0.04em] text-ivory sm:text-2xl sm:tracking-[-0.05em]">Fridays at 1:30 PM</p>
                        <p className="mt-2 font-display text-lg font-bold tracking-[-0.04em] text-ivory">UVic Multifaith Centre</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/70">Prayer spaces</p>
                        <p className="mt-2 font-display text-lg font-bold tracking-[-0.04em] text-ivory">Sedgewick Room C125</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-sm text-ivory/90 sm:mt-8">
                  <span>Spiritual support, student life, and meaningful connection.</span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  )
}
