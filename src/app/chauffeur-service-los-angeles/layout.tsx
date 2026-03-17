import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Chauffeur Service Los Angeles | Escalade · Rolls-Royce · Maybach | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I book a chauffeur in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist a message with your pickup location, destination, date, and time. Your concierge confirms the vehicle and driver — usually within minutes. Vehicles are available 24/7 across all of Los Angeles.' } },
    { "@type": "Question", "name": 'What vehicles are available for chauffeur service in LA?', "acceptedAnswer": { "@type": "Answer", "text": 'Our fleet includes Cadillac Escalade, Rolls-Royce Ghost and Phantom, Mercedes-Benz S-Class, BMW 7 Series, Maybach S-Class, and Mercedes Sprinter for groups. Your concierge recommends the right vehicle for your occasion.' } },
    { "@type": "Question", "name": 'Do you offer airport transfers from LAX?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. LAX airport transfers are one of our most-requested services. We monitor your flight, adjust for delays, and have your vehicle waiting at the terminal when you land. We also serve Burbank (BUR), Van Nuys (VNY), and Long Beach (LGB).' } },
    { "@type": "Question", "name": 'How much does a chauffeur in Los Angeles cost?', "acceptedAnswer": { "@type": "Answer", "text": 'Rates typically start at $150–$250 per hour for an Escalade or S-Class. Rolls-Royce and Maybach rates begin around $350/hour. Point-to-point transfers are also available — contact NexAssist for exact pricing.' } },
    { "@type": "Question", "name": 'Can I hire a chauffeur for a full day in LA?', "acceptedAnswer": { "@type": "Answer", "text": 'Absolutely. Full-day chauffeur service in Los Angeles is available from 4 to 12+ hours. Your driver stays with you throughout the day for business meetings, events, shopping, or any combination. All-inclusive hourly rate with no hidden fees.' } },
    { "@type": "Question", "name": 'Do you offer chauffeur service for corporate clients in LA?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist is the preferred concierge service for executives and corporate clients in Los Angeles. We offer ongoing corporate accounts, roadshow support, airport meet-and-greet, and discretion at every level.' } },
    { "@type": "Question", "name": 'Is the chauffeur service confidential?', "acceptedAnswer": { "@type": "Answer", "text": 'Complete confidentiality is standard. All drivers are vetted, professional, and bound to strict privacy protocols. We regularly serve entertainment industry professionals, executives, and high-net-worth individuals.' } },
    { "@type": "Question", "name": 'Can I book a chauffeur for a wedding or event in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. We arrange chauffeur-driven vehicles for weddings, premieres, award shows, galas, and private events throughout Los Angeles. Multi-vehicle coordination and precise timing are handled by your NexAssist concierge.' } },
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
