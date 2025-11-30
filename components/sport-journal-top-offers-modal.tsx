"use client"

import { useState, useEffect } from "react"
import { X, Star, ExternalLink } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function SportJournalTopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState<BettingSite | null>(null)

  useEffect(() => {
    if (sites.length > 0) {
      setTopSite(sites[0])
    }
  }, [sites])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!topSite) return null

  const stars = topSite.stars

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[92vw] max-w-[400px] p-0 bg-transparent border-none shadow-none overflow-visible">
        {/* Card container with gradient border effect */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-journal-teal via-journal-coral to-journal-gold p-[2px] rounded-2xl">
            <div className="absolute inset-[2px] bg-journal-white rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Header with pattern */}
            <div className="relative bg-gradient-to-r from-journal-charcoal to-journal-charcoal/90 px-5 py-5 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="modal-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#modal-grid)" />
                </svg>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all z-10"
                aria-label="Zatvori"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header content */}
              <div className="relative text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-journal-gold text-journal-charcoal text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                  <span>Ekskluzivno</span>
                </div>
                <h2 className="text-xl font-serif font-bold text-white">Najbolja Ponuda Dana</h2>
              </div>
            </div>

            {/* Body */}
            <div className="bg-journal-white px-5 py-5">
              {/* Logo card */}
              <div className="relative bg-gradient-to-br from-journal-paper to-journal-white rounded-xl p-4 mb-4 border border-journal-border">
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-0.5 px-2 py-0.5 bg-journal-teal/10 rounded-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < stars ? "text-journal-gold fill-journal-gold" : "text-journal-gray/30"
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-journal-teal ml-1">{topSite.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-18">
                  <div className="relative h-18 w-full max-w-[200px] bg-black">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs text-journal-gray">{topSite.reviews.toLocaleString()} recenzija</div>
                </div>
              </div>

              {/* Bonus highlight */}
              <div className="relative bg-gradient-to-r from-journal-coral/10 via-journal-coral/5 to-journal-gold/10 rounded-xl p-4 mb-4 border border-journal-coral/20">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 bg-journal-coral text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    Bonus
                  </span>
                </div>
                <div className="text-center pt-1">
                  <div className="text-xl font-bold text-journal-charcoal leading-tight">{topSite.bonus}</div>
                  {topSite.dopBonus && (
                    <div className="text-sm text-journal-teal font-medium mt-1">{topSite.dopBonus}</div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={topSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-journal-teal to-journal-teal/90 hover:from-journal-teal/90 hover:to-journal-teal text-white text-base font-bold rounded-xl text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                onClick={() => setIsOpen(false)}
              >
                <span>Preuzmi Bonus</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Terms */}
              <div className="mt-4 pt-3 border-t border-journal-border">
                <p className="text-[10px] text-journal-gray leading-relaxed text-center">{topSite.terms}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
