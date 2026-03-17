import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = { ...m, title: { absolute: 'Exotic Car Sales Los Angeles | Buy & Sell Ferrari · Lamborghini · Rolls-Royce | NexAssist' } };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": 'How do I buy an exotic car through NexAssist in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Send NexAssist the make, model, year, and specification you want. Your concierge searches the private network for matching vehicles, provides condition reports, and arranges private viewings or delivery. Off-market and pre-sale access is standard.' } },
    { "@type": "Question", "name": 'How do I sell my exotic car through NexAssist in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Contact NexAssist with your vehicle details. We provide a current market valuation, connect you with qualified buyers from our private network, and manage the transaction discreetly. No public listings, no time-wasters — only serious buyers who are actively looking for your specific car.' } },
    { "@type": "Question", "name": 'What exotic and luxury cars can NexAssist source in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, Bugatti, Koenigsegg, Pagani, Mercedes-AMG, BMW M, Aston Martin, and more. New, pre-owned, collector, and limited production vehicles all available through our network.' } },
    { "@type": "Question", "name": 'Can NexAssist find off-market exotic cars in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. Many of the best exotic car sales in Los Angeles never appear publicly. Our network of private collectors, dealers, and estate managers surfaces off-market opportunities that buyers with open cash can access before anyone else sees the car.' } },
    { "@type": "Question", "name": 'How much does a used Ferrari cost in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'A Ferrari Roma starts around $180,000–$220,000. A Ferrari SF90 Stradale is $550,000–$700,000+. Pre-owned 488 GTB and 488 Pista models range from $200,000–$350,000 depending on mileage and specification. Market pricing changes quickly — contact NexAssist for current valuations.' } },
    { "@type": "Question", "name": 'Can NexAssist import exotic cars to Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. We have sourced and imported vehicles from Europe, Japan, and the Middle East for Los Angeles clients. Grey market, JDM, and right-hand-drive imports handled through our specialist partners.' } },
    { "@type": "Question", "name": 'Do you offer consignment services for exotic cars in Los Angeles?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. NexAssist manages exotic car consignment discreetly. Your vehicle is presented to qualified buyers in our private network at the right price. We handle all communication and paperwork — you just hand over the keys when the deal closes.' } },
    { "@type": "Question", "name": 'Can NexAssist find limited production and one-off exotic cars?', "acceptedAnswer": { "@type": "Answer", "text": 'Yes. We specialize in sourcing limited production vehicles — Ferrari Icona series, Lamborghini SC editions, McLaren MSO, Bugatti Chiron variants, Koenigsegg, and one-off creations. Our network reaches into collections that are not publicly accessible.' } },
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
