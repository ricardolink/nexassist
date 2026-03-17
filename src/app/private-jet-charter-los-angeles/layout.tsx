import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Private Jet Charter Los Angeles | Same-Day Flights from Van Nuys & LAX | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I charter a private jet from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist a message with your departure date, destination, number of passengers, and any preferences. Your concierge presents aircraft options and pricing, then handles all booking, ground transportation, and catering. Most same-day charters are confirmed within hours.' } },
    { "@type": "Question", "name": 'Which airport do private jets use in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Van Nuys Airport (VNY) is the most popular departure point for private jets in LA — faster, quieter, and more exclusive than LAX. We also operate from Santa Monica (SMO), Burbank (BUR), Long Beach (LGB), and LAX for international departures.' } },
    { "@type": "Question", "name": 'How much does a private jet charter from Los Angeles cost?', "acceptedAnswer": { "@type": "Answer", "text": 'Light jets (LA to Las Vegas, Phoenix) start around $5,000–$8,000 one-way. Midsize jets for LA to NYC or Miami typically run $20,000–$35,000. Large cabin jets and ultra-long-range aircraft vary widely. Contact NexAssist for exact pricing on your route.' } },
    { "@type": "Question", "name": 'Can I charter a private jet from LA to Las Vegas same day?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes — LA to Las Vegas is one of our most popular same-day requests. The flight is approximately 45 minutes from Van Nuys. We can typically have a light jet ready within 2–4 hours of your request.' } },
    { "@type": "Question", "name": 'What types of private jets are available from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Our network covers light jets (6 passengers), midsize jets (8 passengers), super-midsize, large cabin jets, ultra-long-range (Boeing Business Jet, Gulfstream G700), and turboprops for shorter hops. Your concierge recommends the right aircraft for your route and group size.' } },
    { "@type": "Question", "name": 'Are empty leg flights available from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Empty leg flights from LA offer significant discounts — sometimes 50–75% off charter rates. NexAssist monitors available empty legs from Van Nuys and other LA airports. Ask your concierge about current availability.' } },
    { "@type": "Question", "name": 'Can I bring pets on a private jet from Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. One of the key advantages of private aviation is that pets travel with you in the cabin. No cargo holds, no separation. Your concierge confirms pet policies for your specific aircraft.' } },
    { "@type": "Question", "name": 'What is included in a private jet charter from NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'Your charter includes the aircraft and crew, ground transportation coordination, catering (custom menus available), and dedicated concierge support from booking to landing. Customs and immigration handling is included for international flights.' } },
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
