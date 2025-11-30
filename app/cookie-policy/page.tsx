export default function CookiePolicyPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <article className="bg-journal-white rounded-xl shadow-sm border border-journal-border p-8 md:p-12">
          <header className="text-center pb-8 border-b border-journal-border mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-journal-navy mb-4 text-balance">
              Politika Kolačića
            </h1>
            <p className="text-journal-gray font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">Uvod u Kolačiće</h2>
              <p className="text-journal-text leading-relaxed mb-4">
                Kolačići (cookies) su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj tijekom
                pregledavanja. Omogućavaju nam da zapamtimo vaše postavke i pružimo personalizirano iskustvo.
              </p>
              <p className="text-journal-text leading-relaxed">
                NajboljeSportskoKlađenje (najboljesportskokladenje.com) koristi kolačiće za poboljšanje funkcionalnosti
                i kvalitete usluge.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Svrha Korištenja Kolačića
              </h2>
              <ul className="space-y-3 text-journal-text">
                {[
                  "Održavanje sigurnosti i integriteta sportskog portala",
                  "Pamćenje vaših jezičnih i regionalnih postavki",
                  "Analiza ponašanja korisnika radi poboljšanja sadržaja",
                  "Personalizacija sportskog sadržaja prema vašim interesima",
                  "Praćenje učinkovitosti naših analitičkih članaka",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-6">Vrste Kolačića</h2>

              <div className="space-y-6">
                {[
                  {
                    color: "journal-navy",
                    title: "Nužni Kolačići",
                    desc: "Ovi kolačići su kritični za osnovne funkcije stranice. Omogućavaju navigaciju, pristup sigurnim područjima i osnovnu funkcionalnost portala. Bez njih platforma ne može funkcionirati pravilno.",
                  },
                  {
                    color: "journal-green",
                    title: "Analitički Kolačići",
                    desc: "Prikupljamo agregirane podatke o tome kako posjetitelji koriste naš sportski portal. Ovi podaci nam pomažu razumjeti koje sportske teme su najzanimljivije i kako možemo poboljšati sadržaj. Svi podaci su anonimizirani.",
                  },
                  {
                    color: "journal-terracotta",
                    title: "Funkcionalni Kolačići",
                    desc: "Omogućavaju platformi da zapamti vaše izbore (kao što su preferirana liga ili sport) i pruži personalizirane značajke koje poboljšavaju vaše iskustvo čitanja sportskih vijesti.",
                  },
                  {
                    color: "journal-gold",
                    title: "Marketinški Kolačići",
                    desc: "Koriste se za praćenje posjetitelja kroz različite web stranice. Cilj je prikazati relevantne oglase i promocije vezane uz sportski sadržaj koji vas zanima.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`border-l-4 border-${item.color} pl-6 bg-${item.color}/5 py-4 rounded-r`}>
                    <h3 className="font-bold text-xl mb-3 text-journal-charcoal">{item.title}</h3>
                    <p className="text-journal-text leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Kontrola nad Kolačićima
              </h2>
              <p className="text-journal-text leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima. Većina web preglednika automatski prihvaća kolačiće, ali možete
                promijeniti postavke vašeg preglednika kako biste:
              </p>
              <ul className="space-y-2 text-journal-text mb-6">
                {[
                  "Blokirali sve kolačiće",
                  "Prihvatili samo kolačiće s određenih stranica",
                  "Brisali kolačiće nakon zatvaranja preglednika",
                  "Primali obavijest svaki put kad stranica pokuša postaviti kolačić",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-journal-text leading-relaxed text-sm bg-journal-paper p-4 rounded-lg border border-journal-border">
                <strong>Napomena:</strong> Blokiranje kolačića može utjecati na funkcionalnost stranice. Neke značajke
                možda neće raditi ispravno bez kolačića.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Kolačići Trećih Strana
              </h2>
              <p className="text-journal-text leading-relaxed mb-4">
                Na našem portalu možda ćete naići na kolačiće koje postavljaju treće strane, kao što su:
              </p>
              <ul className="space-y-2 text-journal-text">
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">→</span>
                  <span>Analitički servisi (Google Analytics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">→</span>
                  <span>Društvene mreže (Facebook, Twitter, Instagram)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">→</span>
                  <span>Oglašivački partneri</span>
                </li>
              </ul>
            </section>

            <section className="bg-journal-paper border-2 border-journal-navy/20 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-journal-navy mb-4">Kontakt i Pitanja</h2>
              <p className="text-journal-text mb-3">
                Za sva pitanja o našoj upotrebi kolačića ili za dodatne informacije:
              </p>
              <p className="text-journal-charcoal font-semibold">
                <a href="mailto:info@najboljesportskokladenje.com" className="text-journal-navy hover:underline">
                  info@najboljesportskokladenje.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
