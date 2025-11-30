export function SportJournalSportsNews() {
  return (
    <section className="py-12 px-4 bg-journal-paper">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-charcoal mb-2">
            Zašto Pratiti Sportske Vijesti?
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-journal-teal to-journal-coral rounded-full"></div>
        </div>

        <div className="space-y-5">
          <div className="bg-journal-white p-5 rounded-xl border border-journal-border shadow-sm">
            <h3 className="text-lg font-bold text-journal-charcoal mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-journal-coral/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-journal-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              Informirani Kladilac je Uspješniji Kladilac
            </h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Uspješno sportsko klađenje zahtijeva više od sreće. Praćenje forme momčadi, ozljeda igrača, povijesti
              međusobnih susreta i aktualnih vijesti može značajno utjecati na kvalitetu vaših odluka. Informacije su
              ključ - znajte što se događa prije nego postavite ulog.
            </p>
          </div>

          <div className="bg-gradient-to-r from-journal-teal/10 to-journal-coral/10 p-5 rounded-xl border border-journal-teal/20">
            <h4 className="font-bold text-journal-charcoal mb-2">Savjet stručnjaka</h4>
            <p className="text-sm text-journal-text leading-relaxed">
              Nemojte se oslanjati samo na intuiciju ili navijačku pristranost. Uložite vrijeme u istraživanje,
              usporedite kvote kod različitih kladionica i donesite informiranu odluku. Kvalitetna priprema je temelj
              uspješnog klađenja.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
