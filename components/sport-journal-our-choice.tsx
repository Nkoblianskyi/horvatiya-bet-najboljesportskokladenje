import type { BettingSite } from "@/types"
import { SportJournalRatingList } from "@/components/sport-journal-rating-list"

interface OurChoiceProps {
  sites: BettingSite[]
}

export function SportJournalOurChoice({ sites }: OurChoiceProps) {
  const topSite = sites.slice(0, 1)

  return (
    <section className="py-16 px-3 md:px-4 bg-journal-white border-t border-journal-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-journal-navy uppercase tracking-wider bg-journal-navy/10 px-4 py-2 rounded-full border border-journal-navy/20">
              Preporuka Urednika
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-journal-navy mb-4">Naš Izbor</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-journal-navy via-journal-terracotta to-journal-green mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-journal-text max-w-3xl mx-auto leading-relaxed">
            Nakon detaljne analize svih aspekata, ovo je naša glavna preporuka za kladionice u Hrvatskoj. Kombinacija
            izvrsnih kvota, širokog izbora sportova i pouzdane usluge čini ovu kladionicu najboljim izborom.
          </p>
        </div>

        <SportJournalRatingList sites={topSite} />

        <div className="text-center mt-8">
          <p className="text-sm text-journal-gray">
            Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
