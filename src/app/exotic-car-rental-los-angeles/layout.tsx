import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Exotic Car Rental Los Angeles | Ferrari · Lamborghini · Rolls-Royce | NexAssist" },
  description:
    "Rent a Ferrari, Lamborghini, Rolls-Royce, McLaren, or Bentley in Los Angeles with same-day delivery. NexAssist is your 24/7 personal concierge for exotic car rentals in Beverly Hills, Malibu, Hollywood & all of LA.",
  keywords: [
    "exotic car rental Los Angeles",
    "luxury car rental Los Angeles",
    "Ferrari rental Los Angeles",
    "Lamborghini rental Los Angeles",
    "Rolls-Royce rental Los Angeles",
    "McLaren rental Los Angeles",
    "Bentley rental Los Angeles",
    "supercar rental LA",
    "exotic car rental Beverly Hills",
    "exotic car rental Malibu",
    "same day exotic car rental LA",
    "sports car rental Los Angeles",
  ],
  alternates: {
    canonical: "https://usenexassist.com/exotic-car-rental-los-angeles",
  },
  openGraph: {
    title: "Exotic Car Rental Los Angeles — Ferrari, Lamborghini, Rolls-Royce | NexAssist",
    description:
      "Same-day exotic car rentals in Los Angeles. One text to your personal concierge — Ferrari, Lamborghini, Rolls-Royce, McLaren delivered to you.",
    url: "https://usenexassist.com/exotic-car-rental-los-angeles",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I rent an exotic car in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Send NexAssist a message with the car you want, your date, and pickup location. Your personal concierge handles everything — sourcing, paperwork, and delivery directly to you in Beverly Hills, Malibu, or anywhere across LA. Most requests are confirmed the same day." } },
    { "@type": "Question", "name": "What exotic cars are available for rent in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, BMW M-Series, Mercedes-AMG, Land Rover, and more. If you have a specific car in mind — Aston Martin, Bugatti, Koenigsegg, Maybach — just ask and we'll find it." } },
    { "@type": "Question", "name": "Do you deliver exotic cars to Beverly Hills and Malibu?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We deliver to Beverly Hills, Malibu, West Hollywood, Santa Monica, Hollywood Hills, Bel Air, Downtown LA, Irvine, Newport Beach, and anywhere in the greater LA area." } },
    { "@type": "Question", "name": "How fast can I get an exotic car delivered in LA?", "acceptedAnswer": { "@type": "Answer", "text": "NexAssist is 24/7. Same-day delivery is available for most requests across Los Angeles. For peak weekends or rare vehicles, 48 hours notice is recommended." } },
    { "@type": "Question", "name": "Do I need special insurance to rent an exotic car?", "acceptedAnswer": { "@type": "Answer", "text": "A valid driver's license and proof of insurance are required. Your concierge will walk you through any specific requirements for the vehicle you choose." } },
    { "@type": "Question", "name": "Can I rent an exotic car for a photoshoot or music video in LA?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. NexAssist regularly arranges exotic car rentals for photoshoots, music videos, weddings, corporate events, and brand activations across Los Angeles." } },
    { "@type": "Question", "name": "How much does it cost to rent an exotic car in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing varies by vehicle. Sports cars like the Porsche 911 typically start around $500–$700/day. Supercars like Ferrari and Lamborghini range from $1,000–$2,500/day. Rolls-Royce and ultra-luxury vehicles vary. Contact NexAssist for exact pricing." } },
    { "@type": "Question", "name": "Is there a minimum rental period for exotic cars in LA?", "acceptedAnswer": { "@type": "Answer", "text": "Most rentals are available for a single day, with multi-day and weekly rates also available. Your concierge will find the best option for your schedule." } },
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
