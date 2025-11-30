import Image from "next/image"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function SportJournalRatingList({ sites }: RatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const StarRating = ({ rating }: { rating: number }) => {
    // Convert rating from 10-point scale to 5-star scale
    const starRating = (rating / 10) * 5

    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fillPercentage = Math.min(Math.max((starRating - star + 1) * 100, 0), 100)

          return (
            <div key={star} className="relative w-4 h-4">
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  // </CHANGE>

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-journal-white border-2 border-yellow-400 shadow-lg shadow-yellow-400/50",
        badge: "bg-yellow-400 text-black font-bold",
        rankText: "Najbolji Izbor",
        accentBorder: "border-yellow-400",
      }
    } else if (index === 1) {
      return {
        container: "bg-journal-white border-2 border-journal-navy shadow-md",
        badge: "bg-journal-navy text-journal-white font-semibold",
        rankText: "Preporučeno",
        accentBorder: "border-journal-navy",
      }
    } else if (index === 2) {
      return {
        container: "bg-journal-white border-2 border-journal-green shadow-md",
        badge: "bg-journal-green text-journal-white font-semibold",
        rankText: "Popularno",
        accentBorder: "border-journal-green",
      }
    } else {
      return {
        container: "bg-journal-white border border-journal-border shadow-sm hover:shadow-md transition-shadow",
        badge: "bg-journal-gray text-journal-white",
        rankText: `#${index + 1}`,
        accentBorder: "border-journal-gray",
      }
    }
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="grid gap-6">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all ${cardStyle.container} rounded-sm`}
              >
                {showBadge && (
                  <div className="absolute -top-3 left-6 z-10">
                    <div className={`${cardStyle.badge} px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider`}>
                      {cardStyle.rankText}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block cursor-pointer group"
                >
                  <div className="grid grid-cols-[200px_1fr_160px_180px] items-center gap-6 p-6">
                    <div className="flex items-center justify-center bg-black rounded-sm p-4 h-24 border border-journal-border">
                      <div className="relative h-full w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center px-4">
                      <p className="text-[10px] font-sans uppercase tracking-widest text-journal-gray mb-1.5">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="font-serif font-bold text-journal-navy leading-tight text-2xl">{site.bonus}</h3>
                      {site.dopBonus && (
                        <p className="font-medium mt-1 text-journal-charcoal text-xl">{site.dopBonus}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 border-l border-journal-border">
                      <div className="text-4xl font-serif font-bold text-journal-navy mb-1">
                        {site.rating.toFixed(1)}
                      </div>
                      <StarRating rating={site.rating} />
                      {/* End of added star rating display */}
                      <p className="text-[10px] text-journal-gray mt-1.5">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="flex flex-col items-stretch gap-2 px-4">
                      <div className="hover:bg-journal-navy transition-colors font-bold py-3 px-6 text-center uppercase tracking-wider text-xs rounded-sm bg-yellow-400 text-popover-foreground">
                        Preuzmi Bonus
                      </div>
                      <span className="text-journal-gray text-[10px] text-center uppercase tracking-wide">
                        Posjeti stranicu
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-journal-border px-6 py-2.5 bg-journal-paper/50">
                    <p className="text-journal-gray text-[10px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Tablet Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block lg:hidden cursor-pointer group"
                >
                  <div className="grid grid-cols-[1fr_auto]">
                    <div className="p-6 flex flex-col items-center justify-center border-r border-journal-border">
                      <div className="relative h-20 w-40 mb-4 bg-black rounded-sm p-3 border border-journal-border">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="text-3xl font-serif font-bold text-journal-navy mb-1">
                        {site.rating.toFixed(1)}
                      </div>
                      <StarRating rating={site.rating} />
                      {/* End of added star rating display */}
                      <p className="text-[10px] text-journal-gray mt-1.5">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="p-6 flex flex-col items-center justify-center min-w-[220px]">
                      <p className="text-[10px] font-sans uppercase tracking-wider text-journal-gray mb-2">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-journal-navy text-lg font-serif font-bold text-center mb-1">{site.bonus}</h3>
                      {site.dopBonus && (
                        <p className="text-journal-charcoal text-sm font-medium mb-4">{site.dopBonus}</p>
                      )}
                      <div className="w-full bg-journal-terracotta hover:bg-journal-navy transition-colors text-journal-white font-bold py-3 px-6 text-center uppercase tracking-wider text-xs rounded-sm mb-2">
                        Preuzmi Bonus
                      </div>
                      <span className="text-journal-gray text-[10px] uppercase tracking-wide">Posjeti stranicu</span>
                    </div>
                  </div>

                  <div className="bg-journal-paper/50 px-6 py-2.5 border-t border-journal-border">
                    <p className="text-journal-gray text-[10px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden block cursor-pointer"
                >
                  <div className="grid grid-cols-[40%_60%] gap-0">
                    <div className="p-4 flex flex-col items-center justify-center border-r border-journal-border">
                      <div className="relative h-18 w-32 mb-3 bg-black rounded-sm p-2 border border-journal-border">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="text-2xl font-serif font-bold text-journal-navy mb-0.5">
                        {site.rating.toFixed(1)}
                      </div>
                      <div className="scale-90">
                        <StarRating rating={site.rating} />
                      </div>
                      {/* End of added star rating display */}
                      <p className="text-[9px] text-journal-gray mt-1">({formatNumber(site.reviews)})</p>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-center">
                      <p className="text-[9px] font-sans uppercase tracking-wider text-journal-gray mb-2">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-journal-navy text-base font-serif font-bold text-center mb-1">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && (
                        <p className="text-journal-charcoal text-xs font-medium mb-3">{site.dopBonus}</p>
                      )}
                      <div className="w-full bg-journal-terracotta text-journal-white font-bold py-2.5 px-3 text-center uppercase tracking-wide text-[10px] mb-1.5 rounded-sm">
                        Preuzmi Bonus
                      </div>
                      <span className="text-journal-gray text-[9px] uppercase tracking-wide">Posjeti stranicu</span>
                    </div>
                  </div>

                  <div className="bg-journal-paper/50 px-3 py-2 border-t border-journal-border">
                    <p className="text-journal-gray text-[9px] leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
