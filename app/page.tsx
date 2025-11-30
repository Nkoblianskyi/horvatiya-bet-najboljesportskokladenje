"use client"

import { bettingSites } from "@/types"
import { SportJournalHero } from "@/components/sport-journal-hero"
import { SportJournalRatingList } from "@/components/sport-journal-rating-list"
import { SportJournalTopOffersModal } from "@/components/sport-journal-top-offers-modal"
import { SportJournalOurChoice } from "@/components/sport-journal-our-choice"
import { SportJournalResponsibleGambling } from "@/components/sport-journal-responsible-gambling"
import { SportJournalSportsNews } from "@/components/sport-journal-sports-news"
import { SportJournalFAQ } from "@/components/sport-journal-faq"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NajboljeSportskoKlađenje",
  url: "https://najboljesportskokladenje.com",
  description: "Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj",
  inLanguage: "hr",
  publisher: {
    "@type": "Organization",
    name: "NajboljeSportskoKlađenje",
    url: "https://najboljesportskokladenje.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-journal-paper">
      <main className="mx-auto">
        <SportJournalHero />
        <SportJournalRatingList sites={bettingSites} />
        <SportJournalResponsibleGambling />
        <SportJournalSportsNews />
        <SportJournalOurChoice sites={bettingSites} />
        <SportJournalFAQ />
      </main>
      <SportJournalTopOffersModal sites={bettingSites} />
    </div>
  )
}
