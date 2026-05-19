import { useEffect, useState } from 'react'
import type { SectionId } from '../data/types'

export function useActiveSection(sectionIds: SectionId[], enabled = true) {
  const [activeSection, setActiveSection] = useState<SectionId | undefined>(sectionIds[0])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.55, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [enabled, sectionIds])

  return activeSection
}
