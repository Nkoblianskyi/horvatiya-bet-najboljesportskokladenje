export function SportJournalFAQ() {
  return (
    <section className="py-12 px-4 bg-journal-white border-t border-journal-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-charcoal mb-2">Česta Pitanja</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-journal-teal to-journal-coral rounded-full"></div>
        </div>

        <div className="space-y-4">
          <div className="bg-journal-paper border border-journal-border rounded-xl p-5 hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-journal-charcoal mb-2">
              Je li online klađenje legalno u Hrvatskoj?
            </h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Da, online klađenje je legalno u Hrvatskoj uz uvjet da koristite platforme s licencom Ministarstva
              financija. Licencirane kladionice jamče sigurnost sredstava i poštene uvjete. Uvijek provjerite ima li
              kladionica valjanu hrvatsku licencu.
            </p>
          </div>

          <div className="bg-journal-paper border border-journal-border rounded-xl p-5 hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-journal-charcoal mb-2">Kako odabrati pravu kladionicu?</h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Ključni faktori su: licenca i sigurnost, kvaliteta kvota, širina sportske ponude, brzina isplate,
              kvaliteta korisničke podrške i uvjeti bonusa. Usporedite nekoliko opcija prije nego se odlučite.
            </p>
          </div>

          <div className="bg-journal-paper border border-journal-border rounded-xl p-5 hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-journal-charcoal mb-2">Kako funkcioniraju bonusi dobrodošlice?</h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Bonus dobrodošlice obično zahtijeva registraciju i prvi depozit. Pažljivo pročitajte uvjete - posebno
              zahtjeve za promet (wagering), minimalne kvote i vremensko ograničenje. Realni bonus je onaj čije uvjete
              možete ispuniti.
            </p>
          </div>

          <div className="bg-journal-paper border border-journal-border rounded-xl p-5 hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-journal-charcoal mb-2">Koje metode plaćanja su dostupne?</h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Većina kladionica nudi: kreditne/debitne kartice (Visa, Mastercard), e-novčanike (Skrill, Neteller),
              bankovne transfere i lokalne metode. Depoziti su obično trenutni, dok isplate mogu trajati od nekoliko
              sati do nekoliko dana.
            </p>
          </div>

          <div className="bg-gradient-to-r from-journal-teal/10 to-journal-coral/10 border-l-4 border-journal-teal p-5 rounded-r-xl">
            <h3 className="text-base font-bold text-journal-charcoal mb-2">Trebate dodatnu pomoć?</h3>
            <p className="text-journal-text leading-relaxed text-sm">
              Kontaktirajte korisničku podršku odabrane kladionice - sve licencirane platforme nude podršku na hrvatskom
              jeziku putem live chata, e-maila ili telefona.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
