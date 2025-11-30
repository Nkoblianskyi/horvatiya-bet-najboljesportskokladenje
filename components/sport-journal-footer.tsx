"use client"

import Link from "next/link"
import Image from "next/image"
import { SportJournalLogo } from "./sport-journal-logo"

export function SportJournalFooter() {
  return (
    <footer className="bg-journal-charcoal relative z-20">
      <div className="w-full h-1 bg-gradient-to-r from-journal-teal via-journal-coral to-journal-gold" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand section */}
          <div className="space-y-4">
            <SportJournalLogo />
            <p className="text-sm text-white/70 leading-relaxed">
              Vaš pouzdani vodič kroz svijet sportskog klađenja. Pružamo nezavisne recenzije, korisne savjete i aktualne
              informacije o licenciranim kladionicama u Hrvatskoj.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-journal-red/90 rounded">
              <span className="text-white font-bold text-xl">18+</span>
            </div>
          </div>

          {/* Navigation section */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-white/20 pb-2">Stranice</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-journal-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-journal-teal rounded-full" />
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-white/70 hover:text-journal-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-journal-teal rounded-full" />O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-journal-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-journal-teal rounded-full" />
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-white/70 hover:text-journal-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-journal-teal rounded-full" />
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible gambling section */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-white/20 pb-2">
              Odgovorno klađenje
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Klađenje treba biti zabava, ne obveza. Postavite limite, igrajte odgovorno i nikada ne riskirajte više
              nego što možete priuštiti.
            </p>
          </div>
        </div>

        {/* Support organizations */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <h4 className="font-serif text-base font-bold text-white mb-5 text-center">Organizacije za pomoć</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                <Image src="/hupis.png" alt="HUPIS" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-xs text-white/60 leading-relaxed text-center">
              <strong className="text-white/80">Napomena:</strong> NajboljeSportskoKlađenje
              (najboljesportskokladenje.com) je informativni portal. Ne pružamo usluge klađenja niti primamo uplate. Svi
              bonusi i uvjeti mogu se promijeniti. Provjerite aktualne uvjete na stranicama operatera.
            </p>
            <p className="text-xs text-white/60 text-center">
              Klađenje može izazvati ovisnost. Igrajte odgovorno.{" "}
              <span className="font-bold text-journal-coral">18+</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 pt-5">
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-journal-teal">najboljesportskokladenje.com</span> — Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
