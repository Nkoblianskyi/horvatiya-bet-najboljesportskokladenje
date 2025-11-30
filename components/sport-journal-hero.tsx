"use client"

import { useState } from "react"
import { SportJournalAdvertiserModal } from "./sport-journal-advertiser-modal"

export function SportJournalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Stadium background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/green-football-stadium-field-from-above-aerial-vie.jpg')`,
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-journal-charcoal/80 via-journal-charcoal/60 to-journal-charcoal/90" />

      {/* Animated field lines pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]"
          viewBox="0 0 800 500"
          fill="none"
        >
          {/* Field outline */}
          <rect
            x="50"
            y="50"
            width="700"
            height="400"
            rx="0"
            stroke="white"
            strokeWidth="2"
            className="animate-draw-line"
          />
          {/* Center line */}
          <line x1="400" y1="50" x2="400" y2="450" stroke="white" strokeWidth="2" />
          {/* Center circle */}
          <circle cx="400" cy="250" r="60" stroke="white" strokeWidth="2" fill="none" className="animate-draw-circle" />
          {/* Penalty areas */}
          <rect x="50" y="150" width="100" height="200" stroke="white" strokeWidth="2" fill="none" />
          <rect x="650" y="150" width="100" height="200" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Subtle static decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-white/10 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-white/10 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-white/10 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-white/10 rounded-br-lg" />
      </div>

      <div className="container mx-auto sm:max-w-[1200px] relative z-10 px-4 py-10 md:py-14">
        <div className="flex flex-col items-center justify-center gap-4 text-center">

          {/* Main heading */}
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 leading-tight text-balance text-white drop-shadow-lg">
              Vaš Sportski <span className="text-journal-gold">Kladioničarski</span> Vodič
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow">
              Stručne recenzije, najbolje kvote i savjeti za pametno klađenje u Hrvatskoj
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-journal-green/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-journal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white">Licencirane kladionice</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-journal-teal/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-journal-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-white">Sigurno klađenje</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-journal-coral/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-journal-coral">18+</span>
              </div>
              <span className="text-xs font-medium text-white">Samo za odrasle</span>
            </div>
          </div>

          {/* Footer meta */}
          <div className="flex items-center justify-center gap-3 text-xs text-white/70 mt-1">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-white transition-colors underline decoration-dotted underline-offset-2"
            >
              O metodologiji
            </button>
            <span className="text-white/40">|</span>
            <span>Ažurirano: Siječanj 2025</span>
          </div>
        </div>
      </div>

      <SportJournalAdvertiserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
