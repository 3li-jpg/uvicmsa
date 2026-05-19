import { MapPinned, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { foodGuide, halalDisclaimer } from '../../content/food-guide'
import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const restaurants = foodGuide.filter((place) => place.category === 'Restaurant')
const markets = foodGuide.filter((place) => place.category === 'Market')

export function FoodGuide() {
  return (
    <section className="py-24 sm:py-28" id="food">
      <Container>
        <SectionHeading
          eyebrow="Halal food around UVic"
          title="Nearby spots that help students eat well, gather easily, and feel more at home."
          description="This guide brings together a selection of restaurants and markets students may find useful around UVic and the wider area."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
                <UtensilsCrossed className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow !text-body/45">Restaurants</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-deep">Places to eat and gather</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {restaurants.map((place) => (
                <div className="rounded-[1.35rem] border border-white/75 bg-white/78 px-4 py-4 text-sm text-deep shadow-[0_10px_24px_rgba(93,123,162,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92" key={place.name}>
                  {place.name}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-deep shadow-soft">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow !text-body/45">Markets</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-deep">Grocery and pantry options</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-3">
              {markets.map((place) => (
                <div className="rounded-[1.35rem] border border-white/75 bg-white/78 px-4 py-4 text-sm text-deep shadow-[0_10px_24px_rgba(93,123,162,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92" key={place.name}>
                  {place.name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-6 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
              <MapPinned className="h-5 w-5" />
            </div>
            <p className="max-w-3xl text-sm leading-7 text-body/78 sm:text-base">{halalDisclaimer}</p>
          </div>
        </Card>
      </Container>
    </section>
  )
}
