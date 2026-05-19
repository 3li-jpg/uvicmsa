import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { heroContent } from '../../content/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pb-20 pt-36 sm:pt-40" id="home">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="relative">
            <p className="eyebrow">{heroContent.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-deep sm:text-6xl lg:text-7xl xl:text-[5.4rem] xl:leading-[0.95]">
              {heroContent.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-body/80 sm:text-xl">
              {heroContent.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">{heroContent.primaryCta}</Button>
              <Button href="#prayer" variant="secondary">
                {heroContent.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroContent.highlights.map((highlight) => (
                <span
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/65 px-4 py-2 text-sm text-deep/80 shadow-soft backdrop-blur-xl"
                  key={highlight}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-gold/25 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-36 w-36 rounded-full bg-sage/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(23,51,40,0.96),rgba(47,90,70,0.88))] p-7 text-ivory shadow-[0_24px_80px_rgba(23,51,40,0.28)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.2),transparent_34%)]" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-drift" />
              <div className="absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.26em] text-ivory/65">A home on campus</p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <Clock3 className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/55">Jummah</p>
                        <p className="mt-2 text-2xl font-medium tracking-[-0.04em]">Fridays at 1:30 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ivory/55">Prayer spaces</p>
                        <p className="mt-2 text-lg font-medium tracking-[-0.03em]">UVic Multifaith Centre · Sedgewick Room C125</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-ivory/70">
                  <span>Spiritual support, student life, and meaningful connection.</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
