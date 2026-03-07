import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://usenexassist.com"),
  title: {
    default: "NexAssist | Exotic Car Rental & Luxury Concierge Los Angeles",
    template: "%s | NexAssist Los Angeles",
  },
  description:
    "NexAssist is Los Angeles's #1 luxury concierge for exotic car rentals — Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley & more. One text. Same-day delivery. Beverly Hills, Malibu, Hollywood & all of LA.",
  keywords: [
    // Primary targets
    "exotic car rental Los Angeles",
    "luxury car rental Los Angeles",
    "sports car rental Los Angeles",
    "exotic car rental LA",
    // Car-specific
    "Ferrari rental Los Angeles",
    "Lamborghini rental Los Angeles",
    "Rolls-Royce rental Los Angeles",
    "McLaren rental Los Angeles",
    "Bentley rental Los Angeles",
    "Porsche rental Los Angeles",
    "Lamborghini Urus rental LA",
    "supercar rental Los Angeles",
    // Neighborhood targeting
    "exotic car rental Beverly Hills",
    "luxury car rental Malibu",
    "exotic car rental West Hollywood",
    "car rental Santa Monica luxury",
    "exotic car rental Orange County",
    "exotic car rental Irvine",
    // Concierge
    "luxury concierge Los Angeles",
    "personal concierge LA",
    "chauffeur service Los Angeles",
    "private jet charter Los Angeles",
    "yacht rental Los Angeles",
    "NexAssist",
  ],
  openGraph: {
    title: "NexAssist | Exotic Car Rental & Luxury Concierge Los Angeles",
    description:
      "One text gets you a Ferrari, Lamborghini, or Rolls-Royce delivered anywhere in LA. Beverly Hills · Malibu · Hollywood · Orange County.",
    type: "website",
    url: "https://usenexassist.com",
    siteName: "NexAssist",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NexAssist — Exotic Car Rental Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexAssist | Exotic Car Rental Los Angeles",
    description: "Ferrari · Lamborghini · Rolls-Royce · McLaren. One text. Same-day delivery in LA.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://usenexassist.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://usenexassist.com/#business",
      "name": "NexAssist",
      "description": "Los Angeles luxury concierge service specializing in exotic car rentals, chauffeur services, private jets, superyachts, and luxury villas.",
      "url": "https://usenexassist.com",
      "telephone": "",
      "priceRange": "$$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Credit Card",
      "areaServed": [
        { "@type": "City", "name": "Los Angeles" },
        { "@type": "City", "name": "Beverly Hills" },
        { "@type": "City", "name": "Malibu" },
        { "@type": "City", "name": "West Hollywood" },
        { "@type": "City", "name": "Santa Monica" },
        { "@type": "City", "name": "Irvine" },
        { "@type": "City", "name": "Orange County" },
        { "@type": "City", "name": "San Diego" },
      ],
      "serviceType": [
        "Exotic Car Rental",
        "Luxury Car Rental",
        "Chauffeur Service",
        "Private Jet Charter",
        "Yacht Charter",
        "Luxury Villa Rental",
        "Personal Concierge",
      ],
      "sameAs": [],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
      "image": "https://usenexassist.com/opengraph-image",
    },
    {
      "@type": "Service",
      "name": "Exotic Car Rental Los Angeles",
      "provider": { "@id": "https://usenexassist.com/#business" },
      "serviceType": "Exotic Car Rental",
      "areaServed": { "@type": "City", "name": "Los Angeles" },
      "description": "Rent a Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, or Porsche in Los Angeles with same-day delivery. One message to your personal concierge.",
      "url": "https://usenexassist.com/exotic-car-rental-los-angeles",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "description": "Exotic car rental starting rates in Los Angeles",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I rent an exotic car in Los Angeles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply send a message to NexAssist with your desired car, date, and location. Your personal concierge will arrange delivery anywhere in Los Angeles — Beverly Hills, Malibu, Hollywood, or anywhere in the LA area."
          }
        },
        {
          "@type": "Question",
          "name": "What exotic cars can I rent in Los Angeles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through NexAssist you can rent Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, and more exotic and luxury vehicles in Los Angeles."
          }
        },
        {
          "@type": "Question",
          "name": "Does NexAssist deliver exotic cars in Beverly Hills and Malibu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NexAssist delivers exotic car rentals to Beverly Hills, Malibu, West Hollywood, Santa Monica, and all areas across Los Angeles and Orange County."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I get an exotic car delivered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NexAssist operates 24/7. Same-day exotic car delivery is available throughout Los Angeles, often within a few hours of your request."
          }
        },
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: "auto" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080d18] text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
