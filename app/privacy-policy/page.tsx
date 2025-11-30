export default function PrivacyPolicyPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <article className="bg-journal-white rounded-xl shadow-sm border border-journal-border p-6 md:p-10">
          <header className="text-center pb-6 border-b border-journal-border mb-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-3 text-balance">
              Politika Privatnosti
            </h1>
            <p className="text-journal-gray text-sm">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">
                Naša Predanost Privatnosti
              </h2>
              <p className="text-journal-text leading-relaxed mb-3 text-sm">
                NajboljeSportskoKlađenje (najboljesportskokladenje.com) se obvezuje na zaštitu vaše privatnosti. Ova
                politika objašnjava kako prikupljamo, koristimo i štitimo vaše podatke.
              </p>
              <p className="text-journal-text leading-relaxed text-sm">
                Naša praksa je usklađena s Općom uredbom o zaštiti podataka (GDPR) i hrvatskim zakonodavstvom.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">
                Koje Podatke Prikupljamo
              </h2>
              <ul className="space-y-3 text-journal-text text-sm">
                {[
                  { title: "Identifikacijski podaci", desc: "Ime ili pseudonim prilikom kontaktiranja" },
                  { title: "Kontakt informacije", desc: "Email adresa za komunikaciju" },
                  { title: "Tehnički podaci", desc: "IP adresa, tip uređaja, preglednik" },
                  { title: "Podaci o korištenju", desc: "Stranice koje posjećujete, vrijeme na portalu" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">•</span>
                    <span>
                      <strong className="text-journal-charcoal">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 bg-journal-teal/5 border-l-4 border-journal-teal p-4 rounded-r-lg">
              <h2 className="text-xl font-serif font-bold text-journal-charcoal mb-3">Kako Koristimo Podatke</h2>
              <ul className="space-y-2 text-journal-text text-sm">
                {[
                  "Pružanje i održavanje funkcionalnosti portala",
                  "Komunikacija o važnim ažuriranjima",
                  "Poboljšanje kvalitete sadržaja",
                  "Zaštita sigurnosti platforme",
                  "Analiza za poboljšanje korisničkog iskustva",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-journal-teal mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">
                Sigurnost Podataka
              </h2>
              <ul className="space-y-2 text-journal-text text-sm">
                {[
                  "SSL/TLS enkripcija za sve prijenose",
                  "Redovite sigurnosne revizije",
                  "Ograničen pristup osobnim podacima",
                  "Automatsko praćenje sumnjive aktivnosti",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-journal-green mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-journal-charcoal mb-3">Vaša GDPR Prava</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "Pravo na pristup", desc: "Zatražite kopiju svojih podataka" },
                  { title: "Pravo na ispravak", desc: "Ispravite netočne podatke" },
                  { title: "Pravo na brisanje", desc: "Zatražite brisanje podataka" },
                  { title: "Pravo na prigovor", desc: "Prigovorite obradi podataka" },
                  { title: "Pravo na prenosivost", desc: "Prijenos podataka drugom pružatelju" },
                  { title: "Pravo na ograničenje", desc: "Ograničite obradu podataka" },
                ].map((item, i) => (
                  <div key={i} className="bg-journal-paper p-4 rounded-lg border border-journal-border">
                    <h4 className="font-bold text-journal-charcoal text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-journal-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-journal-paper border border-journal-teal/20 p-5 rounded-xl">
              <h2 className="text-lg font-serif font-bold text-journal-charcoal mb-3">Kontakt</h2>
              <p className="text-journal-text mb-3 text-sm">Za pitanja o privatnosti ili ostvarivanje prava:</p>
              <p className="text-journal-charcoal font-medium text-sm">
                <a href="mailto:info@najboljesportskokladenje.com" className="text-journal-teal hover:underline">
                  info@najboljesportskokladenje.com
                </a>
              </p>
              <p className="text-xs text-journal-text mt-3 pt-3 border-t border-journal-border">
                Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
