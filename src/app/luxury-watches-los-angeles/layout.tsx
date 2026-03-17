import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Luxury Watch Sourcing Los Angeles | Rolex · Patek Philippe · AP · Richard Mille | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I buy a Rolex in Los Angeles through NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist the reference number or model you want. Your concierge searches the private network for availability, verifies authenticity, and arranges delivery or a private viewing in Los Angeles. We source waitlisted models that retail stores cannot provide.' } },
    { "@type": "Question", "name": 'Can NexAssist source Patek Philippe and Audemars Piguet in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": "Yes. Patek Philippe Nautilus, Aquanaut, and Grand Complications, as well as Audemars Piguet Royal Oak in all variations, are regularly sourced through NexAssist's private dealer network in Los Angeles. Waitlist models available." } },
    { "@type": "Question", "name": 'How are luxury watches authenticated through NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'Every watch sourced through NexAssist is authenticated by qualified horological experts before delivery. We verify serial numbers, movement condition, case authenticity, and original documentation. Full authentication paperwork provided with every transaction.' } },
    { "@type": "Question", "name": 'Can I sell my luxury watch through NexAssist in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist operates a private market for watch consignment and direct sales. We assess your watch, provide a market valuation, and connect you with qualified buyers in our network. Discreet, efficient, and priced correctly.' } },
    { "@type": "Question", "name": 'What is the best luxury watch to buy as an investment in 2026?', "acceptedAnswer": { "@type": "Answer", "text": 'Rolex Daytona, Patek Philippe Nautilus 5711, and Richard Mille sport models have historically shown strong appreciation. AP Royal Oak 15202 and limited Lange & Söhne pieces are also strong performers. Your NexAssist concierge can provide current market guidance.' } },
    { "@type": "Question", "name": 'Do you source Richard Mille watches in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Richard Mille models — including the RM 11-03, RM 27, RM 69, and limited collaborations — are sourced through our private dealer network. Richard Mille is among the most requested brands in our Los Angeles watch clientele.' } },
    { "@type": "Question", "name": 'Can NexAssist deliver a luxury watch anywhere in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Fully insured, discreet delivery of luxury timepieces throughout Los Angeles — Beverly Hills, Bel Air, Malibu, Hollywood Hills, and beyond. For high-value pieces, secure hand delivery by appointment is available.' } },
    { "@type": "Question", "name": 'What is the most popular luxury watch in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Rolex Daytona in stainless steel and precious metals, Audemars Piguet Royal Oak in 41mm, and Patek Philippe Nautilus are consistently our most requested pieces. Richard Mille models are particularly popular among entertainment industry clients.' } },
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
