"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SportJournalAdvertiserModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SportJournalAdvertiserModal({ isOpen, onClose }: SportJournalAdvertiserModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-journal-white border-2 border-journal-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-journal-navy">
            Naša Uređivačka Transparentnost
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-journal-text">
          <p className="leading-relaxed">
            SportKlađenje Hrvatska je nezavisni sportski portal posvećen pružanju objektivnih informacija o sportskom
            klađenju u Hrvatskoj.
          </p>
          <div className="bg-journal-paper p-6 rounded-lg border border-journal-border">
            <h3 className="font-bold text-journal-navy mb-3">Kako funkcioniramo:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-journal-navy mt-1">•</span>
                <span>Detaljno testiramo i analiziramo svaku platformu prema istim kriterijima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-journal-navy mt-1">•</span>
                <span>Možemo primati affiliate naknade kada se korisnici registriraju putem naših poveznica</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-journal-navy mt-1">•</span>
                <span>Affiliate odnosi ne utječu na naše ocjene i recenzije</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-journal-navy mt-1">•</span>
                <span>Sve informacije se redovito ažuriraju i provjeravaju</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-journal-gray">
            Naš glavni cilj je educirati korisnike i promovirati odgovorno klađenje. Sve recenzije temelje se na
            stručnim analizama i stvarnim korisničkim iskustvima.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
