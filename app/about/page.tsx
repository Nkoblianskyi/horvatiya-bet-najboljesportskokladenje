export default function AboutPage() {
  return (
    <div className="min-h-screen bg-journal-paper">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-journal-navy/10 via-journal-white to-journal-terracotta/10 py-16 md:py-24 border-b border-journal-border">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-journal-white border border-journal-navy/20 mb-6 shadow-sm">
              <span className="text-xs md:text-sm font-semibold text-journal-navy uppercase tracking-wide">
                O Portalu
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-journal-navy mb-6 leading-tight text-balance">
              Hrvatski Sportski Portal s Transparentnim Informacijama
            </h1>
            <p className="text-lg md:text-xl text-journal-text leading-relaxed max-w-3xl mx-auto">
              Objektivne sportske vijesti, detaljne analize i stručne recenzije kladionica u Hrvatskoj - sve na jednom
              mjestu
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* Mission Statement */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-6 leading-tight">
                Transparentnost. Stručnost. Pouzdanost.
              </h2>
              <p className="text-lg text-journal-text leading-relaxed mb-4">
                Hrvatska Sportske Stranice je nastao iz potrebe za iskrenim i objektivnim izvorom sportskih informacija
                u Hrvatskoj. Nudimo vam najnovije sportske vijesti, detaljne analize utakmica i stručne recenzije
                kladionica.
              </p>
              <p className="text-lg text-journal-text leading-relaxed">
                Naš cilj je jednostavan: pružiti vam kvalitetan sportski sadržaj i pomoći pronaći kladionicu koja
                odgovara vašim potrebama. Sve recenzije temelje se na objektivnim kriterijima i stvarnom testiranju.
              </p>
            </div>
            <div className="bg-journal-white rounded-2xl p-8 border border-journal-border shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-navy/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-navy">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-charcoal">Temeljito Testiranje</h3>
                    <p className="text-journal-text text-sm">
                      Svaka kladionica prolazi detaljan proces provjere prije objave recenzije
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-green/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-green">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-charcoal">Ažurne Informacije</h3>
                    <p className="text-journal-text text-sm">
                      Redovito pratimo promjene kvota, bonusa i sportskih događaja
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-journal-terracotta">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-journal-charcoal">Odgovoran Pristup</h3>
                    <p className="text-journal-text text-sm">
                      Promoviranje odgovornog klađenja i sigurnih praksi među korisnicima
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-4">
              Što Nudimo Našim Čitateljima
            </h2>
            <p className="text-xl text-journal-text max-w-3xl mx-auto">
              Kompletan sportski sadržaj i vodič za klađenje - sve na jednom mjestu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-journal-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-navy/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-charcoal">Stručne Recenzije</h3>
              <p className="text-journal-text leading-relaxed">
                Detaljne analize licenciranih kladionica u Hrvatskoj. Testiramo sve aspekte - od registracije do isplate
                dobitaka.
              </p>
            </div>

            <div className="bg-journal-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-green/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-charcoal">Sportske Vijesti</h3>
              <p className="text-journal-text leading-relaxed">
                Dnevne sportske vijesti iz Hrvatske i svijeta. Pratimo nogomet, košarku, tenis, Formulu 1 i druge
                popularne sportove.
              </p>
            </div>

            <div className="bg-journal-white rounded-xl border border-journal-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-journal-terracotta/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-journal-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-journal-charcoal">Analize i Statistike</h3>
              <p className="text-journal-text leading-relaxed">
                Usporedbe kvota za popularne utakmice, statistike timova i igrača, te savjeti za informirano klađenje.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-20 bg-journal-white rounded-2xl p-8 md:p-12 border border-journal-border shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-4">
              Kako Ocjenjujemo Kladionice
            </h2>
            <p className="text-lg text-journal-text max-w-3xl mx-auto">
              Naš sustav ocjenjivanja temelji se na objektivnim kriterijima i stvarnim testiranjima. Svaka recenzija
              prolazi kroz rigorozan proces provjere.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-journal-navy/5 rounded-lg">
              <div className="text-4xl font-bold text-journal-navy mb-2">40%</div>
              <div className="font-bold text-sm mb-1 text-journal-charcoal">Sigurnost</div>
              <p className="text-xs text-journal-text">Licence i zaštita korisnika</p>
            </div>
            <div className="text-center p-4 bg-journal-green/5 rounded-lg">
              <div className="text-4xl font-bold text-journal-green mb-2">25%</div>
              <div className="font-bold text-sm mb-1 text-journal-charcoal">Sportska Ponuda</div>
              <p className="text-xs text-journal-text">Sportovi i tržišta</p>
            </div>
            <div className="text-center p-4 bg-journal-terracotta/5 rounded-lg">
              <div className="text-4xl font-bold text-journal-terracotta mb-2">20%</div>
              <div className="font-bold text-sm mb-1 text-journal-charcoal">Kvote</div>
              <p className="text-xs text-journal-text">Konkurentnost</p>
            </div>
            <div className="text-center p-4 bg-journal-gold/5 rounded-lg">
              <div className="text-4xl font-bold text-journal-gold mb-2">10%</div>
              <div className="font-bold text-sm mb-1 text-journal-charcoal">Korisničko Iskustvo</div>
              <p className="text-xs text-journal-text">Dizajn i brzina</p>
            </div>
            <div className="text-center p-4 bg-journal-gray/5 rounded-lg">
              <div className="text-4xl font-bold text-journal-gray mb-2">5%</div>
              <div className="font-bold text-sm mb-1 text-journal-charcoal">Bonusi</div>
              <p className="text-xs text-journal-text">Uvjeti korištenja</p>
            </div>
          </div>
        </div>

        {/* Responsible Gambling */}
        <div className="bg-gradient-to-br from-journal-red/10 to-journal-terracotta/10 rounded-2xl p-8 md:p-12 border border-journal-red/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-journal-white flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-journal-red/20">
              <span className="text-journal-red font-bold text-2xl">18+</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-6">
              Odgovorno Klađenje je Prioritet
            </h2>
            <p className="text-lg text-journal-text leading-relaxed mb-6">
              Klađenje je zabava, ali može postati problem. Hrvatska Sportske Stranice aktivno promovira odgovorno
              klađenje i sigurne prakse. Kladite se samo novcem koji možete priuštiti izgubiti. Postavite limite.
              Tražite pomoć ako osjećate da gubite kontrolu.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-6 py-3 bg-journal-white rounded-lg shadow-sm text-sm font-semibold text-journal-charcoal border border-journal-border">
                Samo 18+
              </span>
              <span className="px-6 py-3 bg-journal-white rounded-lg shadow-sm text-sm font-semibold text-journal-charcoal border border-journal-border">
                Postavi Limite
              </span>
              <span className="px-6 py-3 bg-journal-white rounded-lg shadow-sm text-sm font-semibold text-journal-charcoal border border-journal-border">
                Traži Pomoć
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
