export default function AboutUsPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-journal-white rounded-xl shadow-sm border border-journal-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-journal-border mb-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-3 text-balance">
              O Nama
            </h1>
            <p className="text-journal-gray font-medium">Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">Tko Smo</h2>
              <p className="text-journal-text leading-relaxed mb-3 text-sm">
                NajboljeSportskoKlađenje je nezavisni informativni portal posvećen pružanju objektivnih recenzija i
                korisnih informacija o sportskom klađenju u Hrvatskoj. Naš tim čine iskusni analitičari s dugogodišnjim
                iskustvom u industriji sportskog klađenja.
              </p>
              <p className="text-journal-text leading-relaxed text-sm">
                Portal je nastao iz potrebe za pouzdanim i transparentnim izvorom informacija koji pomaže korisnicima
                donijeti informirane odluke pri odabiru kladionice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">Naša Misija</h2>
              <div className="bg-journal-paper border-l-4 border-journal-teal p-4 rounded-r-lg">
                <ul className="space-y-2 text-journal-text text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">•</span>
                    <span>Pružanje transparentnih i objektivnih recenzija kladionica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">•</span>
                    <span>Edukacija korisnika o odgovornom klađenju</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">•</span>
                    <span>Praćenje trendova i novosti iz svijeta sporta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">•</span>
                    <span>Promicanje samo licenciranih i sigurnih platformi</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">Naše Vrijednosti</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-journal-teal/5 p-4 rounded-lg border border-journal-teal/20">
                  <h3 className="font-bold text-base text-journal-charcoal mb-2">Transparentnost</h3>
                  <p className="text-xs text-journal-text">
                    Jasno objavljujemo naše metode i affiliate odnose. Vjerujemo u potpunu iskrenost.
                  </p>
                </div>
                <div className="bg-journal-green/5 p-4 rounded-lg border border-journal-green/20">
                  <h3 className="font-bold text-base text-journal-charcoal mb-2">Objektivnost</h3>
                  <p className="text-xs text-journal-text">
                    Sve recenzije temelje se na detaljnim testiranjima bez utjecaja komercijalnih interesa.
                  </p>
                </div>
                <div className="bg-journal-coral/5 p-4 rounded-lg border border-journal-coral/20">
                  <h3 className="font-bold text-base text-journal-charcoal mb-2">Odgovornost</h3>
                  <p className="text-xs text-journal-text">
                    Promičemo isključivo odgovorno klađenje i upozoravamo na rizike.
                  </p>
                </div>
                <div className="bg-journal-gold/5 p-4 rounded-lg border border-journal-gold/20">
                  <h3 className="font-bold text-base text-journal-charcoal mb-2">Stručnost</h3>
                  <p className="text-xs text-journal-text">
                    Naš tim posjeduje duboko znanje i konstantno prati nove trendove.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">Kako Ocjenjujemo</h2>
              <p className="text-journal-text leading-relaxed mb-4 text-sm">
                Svaka kladionica prolazi kroz temeljit proces evaluacije:
              </p>
              <ol className="space-y-3">
                {[
                  { title: "Registracija i verifikacija", desc: "Testiramo cijeli proces kao stvarni korisnici" },
                  { title: "Analiza ponude", desc: "Proučavamo sportove, kvote, bonuse i uvjete" },
                  { title: "Testiranje funkcionalnosti", desc: "Ispitujemo brzinu, aplikaciju i korisničku podršku" },
                  { title: "Provjera sigurnosti", desc: "Verificiramo licence i sigurnosne certifikate" },
                  { title: "Konačna ocjena", desc: "Sastavljamo sveobuhvatnu recenziju" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-journal-teal/10 flex items-center justify-center text-xs font-bold text-journal-teal">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="text-journal-charcoal text-sm">{item.title}</strong>
                      <p className="text-xs text-journal-text mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-journal-paper border border-journal-teal/20 p-5 rounded-xl">
              <h2 className="text-lg font-serif font-bold text-journal-charcoal mb-3">Kontakt</h2>
              <p className="text-journal-text mb-3 text-sm">
                Imate pitanja ili prijedloge? Slobodno nas kontaktirajte:
              </p>
              <p className="text-journal-charcoal font-medium text-sm">
                Email:{" "}
                <a href="mailto:info@najboljesportskokladenje.com" className="text-journal-teal hover:underline">
                  info@najboljesportskokladenje.com
                </a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-journal-border text-center">
              <p className="text-xs text-journal-text italic">
                Klađenje može izazvati ovisnost. Igrajte odgovorno.{" "}
                <span className="font-bold text-journal-coral">18+</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
