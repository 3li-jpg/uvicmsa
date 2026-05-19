import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { heroContent } from '../../content/site'
import { BlurFade } from '../ui/BlurFade'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { TextAnimate } from '../ui/TextAnimate'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-glow pb-10 pt-28 dark:bg-[radial-gradient(circle_at_top,rgba(110,143,182,0.22),transparent_36%),radial-gradient(circle_at_18%_18%,rgba(53,66,86,0.64),transparent_28%),linear-gradient(180deg,rgba(16,26,42,0.96)_0%,rgba(22,34,53,0.98)_100%)] sm:min-h-screen sm:pb-20 sm:pt-40" id="home">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-12">
          <BlurFade className="relative" inView offset={18}>
            <p className="eyebrow dark:text-ivory/80">{heroContent.eyebrow}</p>
            <TextAnimate
              as="h1"
              animation="blurInUp"
              by="word"
              className="mt-5 max-w-4xl font-display text-[3.25rem] font-bold leading-[0.9] tracking-[-0.075em] text-deep dark:text-ivory sm:mt-6 sm:text-6xl lg:text-7xl xl:text-[5.4rem] xl:leading-[0.9]"
              duration={0.7}
              once
              startOnView={false}
            >
              {heroContent.title}
            </TextAnimate>
            <p className="mt-5 max-w-xl text-base leading-8 text-body/80 dark:text-ivory/90 sm:mt-7 sm:max-w-2xl sm:text-xl">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button href="#contact">{heroContent.primaryCta}</Button>
              <Button href="#prayer" variant="secondary">
                {heroContent.secondaryCta}
              </Button>
            </div>
          </BlurFade>

          <BlurFade className="relative" delay={0.12} duration={0.56} inView offset={24}>
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-lavender/20 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-36 w-36 rounded-full bg-sage/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-[linear-gradient(160deg,rgba(31,43,61,0.96),rgba(110,143,182,0.78))] p-6 text-ivory shadow-[0_24px_80px_rgba(93,123,162,0.24)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,230,242,0.24),transparent_34%)]" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/12 blur-3xl animate-drift" />
              <div className="absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-gold/25 blur-3xl animate-pulse-soft" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.26em] text-ivory/70">A home on campus</p>
                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-4">
                      <Clock3 className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/70">Jummah</p>
                        <p className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-ivory">Fridays at 1:30 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/70">Prayer spaces</p>
                        <p className="mt-2 font-display text-lg font-bold tracking-[-0.04em] text-ivory">UVic Multifaith Centre · Sedgewick Room C125</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-ivory/90 sm:mt-8">
                  <span>Spiritual support, student life, and meaningful connection.</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  )
}
