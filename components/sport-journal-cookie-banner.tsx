"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function SportJournalCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-journal-white border-t-2 border-journal-teal shadow-2xl">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-journal-charcoal font-serif font-bold text-lg mb-2">Koristimo kolačiće</h3>
            <p className="text-journal-text text-sm leading-relaxed">
              Kolačići nam pomažu poboljšati vaše iskustvo na stranici. Prihvaćanjem pristajete na našu{" "}
              <Link href="/cookie-policy" className="text-journal-teal hover:underline font-medium">
                Politiku kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="text-journal-teal hover:underline font-medium">
                Politiku privatnosti
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-5 py-2.5 bg-journal-white hover:bg-journal-paper border border-journal-border text-journal-charcoal font-medium rounded-lg transition-colors text-sm"
            >
              Odbij
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-5 py-2.5 bg-journal-teal hover:bg-journal-teal/90 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Prihvati
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
