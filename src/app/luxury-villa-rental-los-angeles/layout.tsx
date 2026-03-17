import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Luxury Villa Rental Los Angeles | Malibu · Beverly Hills · Hollywood Hills | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I rent a luxury villa in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist your dates, number of guests, preferred neighborhood (Malibu, Beverly Hills, Hollywood Hills), and any specific requirements. Your concierge presents curated villa options with full details and arranges private viewings or direct booking.' } },
    { "@type": "Question", "name": 'What is the best area to rent a luxury villa in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Malibu offers unmatched beachfront estates on the Pacific. Beverly Hills is ideal for privacy, prestige, and proximity to the city. Hollywood Hills provides dramatic canyon views and iconic hillside architecture. Your concierge will match you with the right neighborhood for your stay.' } },
    { "@type": "Question", "name": 'How much does it cost to rent a luxury villa in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Short-term luxury villa rentals in Los Angeles range from $2,000/night for a well-appointed Beverly Hills estate to $25,000+/night for a fully staffed Malibu beachfront compound. NexAssist provides exact pricing based on your dates and requirements.' } },
    { "@type": "Question", "name": 'Do the villas come with staff?', "acceptedAnswer": { "@type": "Answer", "text": 'Many of our estate rentals include full or partial staff — housekeeping, a private chef, security, and a property manager. Your concierge will confirm which staffing options are available for your specific villa and arrange additional services as needed.' } },
    { "@type": "Question", "name": 'Can I rent a villa with a pool in Beverly Hills?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes — almost all of our Beverly Hills and Bel Air estate rentals include private pools, often with heated options, full pool decks, and outdoor entertainment areas. Many also feature tennis courts, home theaters, and wine cellars.' } },
    { "@type": "Question", "name": 'Are short-term luxury villa rentals available in Malibu?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist sources short-term Malibu villa rentals — from long weekends to multi-week stays. Beachfront properties, oceanview estates, and private canyon retreats are all available. Contact your concierge with your dates for current availability.' } },
    { "@type": "Question", "name": 'Can NexAssist arrange catering and events at the villa?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Your concierge coordinates private chef services, catered events, pool parties, and intimate dinners at your villa. We also arrange florals, entertainment, valet parking, and any other services to complete your experience.' } },
    { "@type": "Question", "name": 'Do you have off-market villas not listed publicly?', "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many of our most exclusive estate rentals are not publicly advertised. NexAssist's private network includes properties belonging to entertainment industry professionals, executives, and private families that are available selectively through referral only." } },
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
