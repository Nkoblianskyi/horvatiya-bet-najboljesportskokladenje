"use client"

import Link from "next/link"
import Image from "next/image"

export function SportJournalLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-2">
        {/* Sports ball icon */}
        <Image src="/favicon.ico" alt="NajboljeSportskoKlađenje" width={30} height={30} />
        <div className="flex flex-col">
          <div className="font-serif font-bold text-lg md:text-xl leading-none">
            <span className="text-journal-teal">Najbolje</span>
            <span className="text-journal-charcoal">Sportsko</span>
          </div>
          <span className="text-xs text-journal-coral font-semibold uppercase tracking-wider">Klađenje</span>
        </div>
      </div>
    </Link>
  )
}
