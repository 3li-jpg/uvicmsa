import { About } from './components/sections/About'
import { EventsSection } from './components/sections/EventsSection'
import { FAQ } from './components/sections/FAQ'
import { FoodGuide } from './components/sections/FoodGuide'
import { Hero } from './components/sections/Hero'
import { InstagramSection } from './components/sections/InstagramSection'
import { PrayerSection } from './components/sections/PrayerSection'
import { ResourcesSection } from './components/sections/ResourcesSection'
import { TeamSection } from './components/sections/TeamSection'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'

function App() {
  return (
    <div className="relative overflow-x-clip bg-ivory text-body">
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
        <Hero />
        <About />
        <PrayerSection />
        <EventsSection />
        <FoodGuide />
        <TeamSection />
        <ResourcesSection />
        <InstagramSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
