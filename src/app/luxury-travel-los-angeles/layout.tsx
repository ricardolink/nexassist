import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Luxury Travel Los Angeles | Bespoke Trips · Private Jets · Five-Star Hotels | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I plan a luxury trip through NexAssist from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist your destination, travel dates, number of guests, and the style of experience you want. Your concierge designs a full itinerary — private jet, five-star accommodation, ground transfers, private guides, restaurant reservations, and any special experiences. You approve the itinerary and we execute everything.' } },
    { "@type": "Question", "name": 'What are the most popular luxury travel destinations from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Cabo San Lucas, Hawaii, the Maldives, Amalfi Coast, St. Barts, and the French Riviera are among our most-requested destinations. We also regularly plan extended itineraries through Southeast Asia, East Africa (safari), and the South Pacific.' } },
    { "@type": "Question", "name": 'Can NexAssist arrange a private island stay?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Private island rentals in the Maldives, Caribbean, and Pacific are among our most requested luxury travel experiences. We source private islands that include full staff, water sports, and exclusive use of the property for your group.' } },
    { "@type": "Question", "name": 'Does NexAssist book five-star hotels and resorts?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist has relationships with five-star properties worldwide — Aman Resorts, Four Seasons, Rosewood, Mandarin Oriental, and independent luxury properties. We secure preferred rates, room upgrades, and VIP arrivals as standard.' } },
    { "@type": "Question", "name": 'Can NexAssist plan a luxury safari from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. East Africa safaris — Kenya, Tanzania, Botswana — are a regular request. We arrange private jet access to remote airstrips, exclusive-use safari camps, and private guide arrangements that guarantee exceptional wildlife encounters without the crowds.' } },
    { "@type": "Question", "name": 'How far in advance do I need to book luxury travel through NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'It depends on the destination and time of year. For peak season Maldives or Amalfi Coast travel, 3–6 months is ideal. For US domestic or Caribbean travel, 2–4 weeks is usually sufficient. Last-minute luxury travel is also possible — we have arranged complete itineraries within 48 hours.' } },
    { "@type": "Question", "name": 'Does NexAssist arrange honeymoons and anniversaries?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Bespoke honeymoon and anniversary travel is a specialty. We design experiences that match the couple perfectly — whether that is a private villa in Tuscany, a superyacht charter in Greece, or a suite at Amangiri in Utah.' } },
    { "@type": "Question", "name": 'Can I combine a private jet charter with hotel and experience booking through NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist manages the complete travel experience end-to-end. Private jet from Van Nuys, five-star hotel arrival, private transfers, restaurant reservations, excursions, and return charter — all coordinated by one concierge with one point of contact.' } },
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
