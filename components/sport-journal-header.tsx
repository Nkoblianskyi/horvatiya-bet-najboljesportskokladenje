"use client"
import { SportJournalLogo } from "./sport-journal-logo"

export function SportJournalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-journal-white/95 backdrop-blur-sm border-b border-journal-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-18 items-center justify-center relative">
          <SportJournalLogo />
        </div>
      </div>
    </header>
  )
}
