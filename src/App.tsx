import { SiteShell } from './components/layout/SiteShell'
import { About } from './components/sections/About'
import { EventsSection } from './components/sections/EventsSection'
import { FAQ } from './components/sections/FAQ'
import { FoodGuide } from './components/sections/FoodGuide'
import { Hero } from './components/sections/Hero'
import { InstagramSection } from './components/sections/InstagramSection'
import { PrayerSection } from './components/sections/PrayerSection'
import { ResourcesSection } from './components/sections/ResourcesSection'
import { TeamSection } from './components/sections/TeamSection'

function App() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <PrayerSection />
      <EventsSection />
      <FoodGuide />
      <TeamSection />
      <ResourcesSection />
      <InstagramSection />
      <FAQ />
    </SiteShell>
  )
}

export default App
