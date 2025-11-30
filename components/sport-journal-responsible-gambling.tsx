export function SportJournalResponsibleGambling() {
  return (
    <section className="py-12 px-4 bg-journal-white border-t border-journal-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-charcoal mb-2">
            Sigurno i Odgovorno Klađenje
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-journal-teal to-journal-coral rounded-full"></div>
        </div>

        <div className="space-y-5">
          <div className="bg-journal-paper p-5 rounded-xl border border-journal-border">
            <h3 className="text-lg font-bold text-journal-charcoal mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-journal-teal/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-journal-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Što je Odgovorno Klađenje?
            </h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Odgovorno klađenje znači pristup sportskom klađenju kao zabavi, ne kao izvoru prihoda. Postavite budžet
              prije igranja, držite se svojih limita i nikada ne pokušavajte nadoknaditi gubitke povećanjem uloga.
              Klađenje ne smije utjecati na vaše svakodnevne obveze ili financijsku stabilnost.
            </p>
          </div>

          <div className="bg-journal-teal text-white p-6 rounded-xl text-center">
            <p className="text-3xl font-bold mb-1">18+</p>
            <p className="text-base mb-2">Klađenje je isključivo za punoljetne osobe</p>
            <p className="text-sm opacity-90">Ako osjećate da gubite kontrolu, potražite stručnu pomoć.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
