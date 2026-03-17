import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Designer Bags Los Angeles | Hermès Birkin · Chanel · Louis Vuitton | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I buy a Hermès Birkin in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist the size, color, and leather you want. Our concierge searches the private market for your specification and arranges authentication and delivery. Birkin and Kelly bags are regularly sourced through our network — no waitlist required.' } },
    { "@type": "Question", "name": 'Can NexAssist source a Chanel Classic Flap in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Chanel Classic Flap, Boy Bag, and 19 bags in all colorways and leathers are regularly sourced through our private network. We also source limited editions and seasonal pieces that are not available in boutiques.' } },
    { "@type": "Question", "name": 'How are designer bags authenticated through NexAssist?', "acceptedAnswer": { "@type": "Answer", "text": 'Every bag is authenticated by certified luxury goods experts before delivery. We verify stitching, hardware, date codes, serial numbers, and materials against known-authentic examples. Full authentication documentation provided with every bag.' } },
    { "@type": "Question", "name": 'Can I sell my designer bags through NexAssist in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist operates a private resale market for Hermès, Chanel, Louis Vuitton, and other luxury bags. We assess, value, and connect your pieces with qualified buyers through our network — discreetly and efficiently.' } },
    { "@type": "Question", "name": 'What is the most popular designer bag in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Hermès Birkin 25 and 30 in Togo and Epsom leather are consistently our most requested pieces. Chanel Classic Flap in black caviar with gold hardware is perennially popular. Louis Vuitton limited editions and Bottega Veneta Intrecciato pieces are also frequently requested.' } },
    { "@type": "Question", "name": 'Do you source limited edition and special order bags?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Special order Hermès bags (Horseshoe, two-tone, exotic skins), limited Chanel seasonal releases, and brand collaboration pieces are regularly sourced through our private dealer network. If it exists, we can find it.' } },
    { "@type": "Question", "name": 'How much does a Hermès Birkin cost in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Hermès Birkin pricing varies significantly by size, leather, hardware, and rarity. A standard Birkin 30 in Togo leather currently trades in the $15,000–$25,000 range on the private market. Exotic skins (crocodile, ostrich) command $40,000–$150,000+. Rare colorways and special orders carry additional premiums.' } },
    { "@type": "Question", "name": 'Can NexAssist deliver a designer bag anywhere in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Fully insured, discreet delivery throughout Los Angeles — Beverly Hills, Bel Air, Malibu, Brentwood, and beyond. White-glove delivery available for high-value pieces.' } },
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
