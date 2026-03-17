import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = m;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I charter a yacht in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Send NexAssist a message with your date, number of guests, and what experience you're looking for. Your concierge will present yacht options, handle all bookings, and coordinate crew, catering, and itinerary." } },
    { "@type": "Question", "name": "Where do yacht charters depart from in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "We arrange departures from Marina del Rey, Newport Beach, Malibu, Long Beach, and San Pedro. Your concierge will recommend the best marina based on your destination and itinerary." } },
    { "@type": "Question", "name": "How much does a yacht charter in Los Angeles cost?", "acceptedAnswer": { "@type": "Answer", "text": "Day charters for a smaller motor yacht start around $1,500–$3,000. Superyacht charters typically start from $10,000/day. Pricing depends on vessel size, crew, duration, and itinerary. Contact NexAssist for exact pricing." } },
    { "@type": "Question", "name": "Can I charter a yacht to Catalina Island from Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Catalina Island day trips are one of our most popular charters. We arrange the full itinerary including anchorage, tender service, and onshore dining reservations." } },
    { "@type": "Question", "name": "Do you offer yacht charters for corporate events in LA?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in private corporate yacht events — product launches, client entertainment, and team outings. Catering, AV equipment, and branding are all coordinated through your concierge." } },
    { "@type": "Question", "name": "Can I charter a yacht overnight from Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Overnight and multi-day charters are available. We arrange full crew, provisioning, and itinerary from LA along the California coast, Channel Islands, or down to Baja Mexico." } },
    { "@type": "Question", "name": "What types of yachts are available for charter in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Our network includes motor yachts (40–80 ft), superyachts (80–200+ ft), sailing yachts, sport yachts, catamarans, and mega yachts. Every vessel comes crewed and ready." } },
    { "@type": "Question", "name": "Do yacht charters in LA include a crew and captain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every charter through NexAssist includes an experienced captain and crew. Private chef and catering services are also available upon request." } },
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
