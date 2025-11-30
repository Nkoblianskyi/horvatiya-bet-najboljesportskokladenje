import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SportJournalHeader } from "@/components/sport-journal-header"
import { SportJournalFooter } from "@/components/sport-journal-footer"
import { SportJournalCookieBanner } from "@/components/sport-journal-cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "NajboljeSportskoKlađenje - Vodič za Sportsko Klađenje 2025",
  description:
    "Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj. Detaljne recenzije kladionica, savjeti za klađenje i najnovije sportske vijesti.",
  keywords: [
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "top kladionice Hrvatska",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
    "najbolje kladionice Hrvatska",
    "sportsko klađenje savjeti",
    "klađenje aplikacije Hrvatska",
    "mobilno klađenje",
    "eSports klađenje",
    "virtualni sportovi klađenje",
    "klađenje na nogometne lige",
    "klađenje na teniske turnire",
    "klađenje na košarkaške utakmice",
    "ekskluzivni bonusi za nove korisnike",
    "promocije kladionica",
    "isplate dobitaka klađenje",
    "korisnička podrška kladionica",
    "zakonski okvir klađenja Hrvatska",
    "porezi na dobitke od klađenja",
    "kladionica",
    "sportska kladionica",
    "online kladionica",
    "klađenje uživo",
    "online klađenje",
    "kladionica uzivo",
    "online casino Hrvatska",
    "najbolji online casino",
    "casino bonusi",
    "casino igre Hrvatska",
    "casino Croatia",
    "online casino games",
    "casino bonuses"
  ],
  authors: [{ name: "NajboljeSportskoKlađenje" }],
  creator: "NajboljeSportskoKlađenje",
  publisher: "NajboljeSportskoKlađenje",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://najboljesportskokladenje.com",
    siteName: "NajboljeSportskoKlađenje",
    title: "NajboljeSportskoKlađenje - Vodič za Sportsko Klađenje",
    description: "Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj s detaljnim recenzijama i savjetima.",
    images: [
      {
        url: "https://najboljesportskokladenje.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NajboljeSportskoKlađenje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NajboljeSportskoKlađenje - Vodič za Sportsko Klađenje",
    description: "Vaš pouzdani vodič za sportsko klađenje u Hrvatskoj.",
    images: ["https://najboljesportskokladenje.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://najboljesportskokladenje.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F5F3EF" />
        <link rel="canonical" href="https://najboljesportskokladenje.com" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <SportJournalHeader />
        {children}
        <SportJournalFooter />
        <SportJournalCookieBanner />
      </body>
    </html>
  )
}
