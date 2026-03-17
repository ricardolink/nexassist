"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "luxury-watches-los-angeles",
  serviceType: "Fine Watches",
  badge: "Los Angeles · Worldwide Sourcing",
  heroImg: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600&q=80",
  heroTagline: "Fine Watches",
  heroTitle: "Luxury Watch Sourcing",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Rolex, Patek Philippe, Audemars Piguet, Richard Mille. Impossible-to-find references, investment pieces, and bespoke orders — sourced privately for you.",

  gridTitle: "Prestigious Watch Brands Available Through NexAssist",
  gridSubtitle: "Access to waitlisted, discontinued, and private-sale timepieces. Every watch authenticated and certified.",
  items: [
    {
      name: "Rolex",
      sub: "Daytona · Submariner · GMT-Master II · Day-Date",
      tags: ["Hard to Find Refs", "Sport & Dress", "New & Pre-owned"],
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Patek Philippe",
      sub: "Nautilus · Aquanaut · Grand Complications",
      tags: ["Investment Pieces", "Waitlisted Refs", "Collector Grade"],
      img: "/cars/patek.jpg",
      color: "#f59e0b",
    },
    {
      name: "Audemars Piguet",
      sub: "Royal Oak · Royal Oak Offshore · Concept",
      tags: ["New", "Pre-owned", "Limited Editions"],
      img: "/cars/audemars-piguet.jpg",
      color: "#60a5fa",
    },
    {
      name: "Richard Mille",
      sub: "RM 011 · RM 055 · RM 27 · Collaboration Pieces",
      tags: ["Ultra High-End", "Private Sales", "UHNW Collector"],
      img: "/cars/richard-mille.jpg",
      color: "#f97316",
    },
    {
      name: "AP, Cartier & More",
      sub: "Hublot · IWC · Breguet · A. Lange & Söhne",
      tags: ["Full Catalog", "New & Pre-owned", "Authenticated"],
      img: "/cars/cartier-santos.jpg",
      color: "#34d399",
    },
    {
      name: "Bespoke & Custom",
      sub: "Diamonds · Gem-set · Unique Dials",
      tags: ["One of a Kind", "Commission", "Investment Grade"],
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      color: "#a78bfa",
    },
  ],
  itemsFooter: "Can't find a specific reference? We source from private collectors, estate sales, and international auction houses.",

  stepsTitle: "Finding Your Dream Watch — Made Simple",
  steps: [
    { n: "01", title: "Tell Us What You Want", body: "Brand, reference, size, dial color, bracelet. Or just describe what you're looking for — we'll find it." },
    { n: "02", title: "We Source It Privately", body: "Your concierge contacts our global network of dealers, collectors, and auction specialists." },
    { n: "03", title: "Authenticated & Delivered", body: "Every watch is authenticated and certified. Delivered securely to your door in Los Angeles." },
  ],

  whyTitle: "The Best Way to Buy Luxury Watches in Los Angeles",
  why: [
    { icon: "🔍", title: "Access the Unobtainable", body: "Rolex Daytona, Patek Nautilus, RM timepieces — we find the references no one else can." },
    { icon: "✅", title: "100% Authenticated", body: "Every watch verified by certified watchmakers. Box, papers, service records confirmed." },
    { icon: "💰", title: "Sell Your Collection", body: "Looking to sell? We discreetly market your timepieces to qualified private buyers for maximum value." },
    { icon: "📦", title: "Insured & Secure Delivery", body: "All watches shipped fully insured via secure courier directly to you in LA." },
    { icon: "🌍", title: "Global Sourcing Network", body: "Geneva, Tokyo, Dubai, London — if a watch exists, we know where to find it." },
    { icon: "🔒", title: "Fully Confidential", body: "Private buying and selling. No public listings. Your collection is your business." },
  ],

  faqTitle: "Luxury Watch Sourcing Los Angeles — Common Questions",
  faqs: [
    { q: "Can you find a Rolex Daytona or Patek Nautilus in Los Angeles?", a: "Yes. These are the most sought-after references and we specialize in sourcing hard-to-find Rolex, Patek Philippe, and Audemars Piguet pieces through our private dealer and collector network." },
    { q: "Are the watches authentic?", a: "Absolutely. Every watch sourced through NexAssist is authenticated by certified watchmakers and verified against serial numbers and documentation." },
    { q: "Can I sell my luxury watch through NexAssist?", a: "Yes. We manage private sales of luxury timepieces discreetly and efficiently. We handle valuation, marketing to qualified buyers, and the full transaction." },
    { q: "Do you source Richard Mille watches?", a: "Yes. Richard Mille pieces are among the most exclusive watches in the world and we have access to private collections and dealer networks that carry them." },
    { q: "Can I get a watch delivered to Beverly Hills or elsewhere in LA?", a: "Yes. All watches are delivered fully insured via secure courier to any address in Los Angeles." },
    { q: "Do you offer watch investment advice?", a: "Yes. For clients interested in watches as investments, your concierge can advise on the most sought-after references with strong secondary market value." },
  ],

  ctaTitle: "Find the Watch You've Been Looking For.",
  ctaSubtitle: "Rolex, Patek, AP, Richard Mille — privately sourced, authenticated, and delivered to you in LA.",
  ctaNote: "Los Angeles · Beverly Hills · Private & Discreet",
};

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Luxury Watch Sourcing in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">Los Angeles has one of the most active luxury watch markets in the world. From the boutiques of Beverly Hills to private collectors in Bel Air, exceptional timepieces change hands in this city every day. The challenge is not the demand — it is access. The Rolex Daytona you want is not sitting in a display case waiting for you. The Patek Philippe Nautilus 5711 you have been searching for requires relationships that most buyers do not have.</p>
          <p className="leading-relaxed">NexAssist operates a private watch sourcing service in Los Angeles. One message to your concierge and we begin searching our network of vetted private dealers, collectors, and authorized relationships to locate the exact reference you want — authenticated, documented, and delivered to you.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Requested Luxury Watch Brands in Los Angeles</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Rolex</h3><p className="leading-relaxed">Rolex is the most requested brand in our Los Angeles watch network. The Daytona in stainless steel (116500LN), the GMT-Master II in two-tone and full steel (126710BLNR), and the Day-Date in platinum and yellow gold are our most-sourced references. We locate both new and pre-owned examples, all authenticated to NexAssist standards.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Patek Philippe</h3><p className="leading-relaxed">The Nautilus 5711 remains the most coveted sports watch in the world despite its official discontinuation. We source Nautilus references through our private network, as well as the Aquanaut 5167, Grand Complication pocket watches, and annual calendar models. Patek Philippe is a cornerstone of our Los Angeles watch market presence.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Audemars Piguet</h3><p className="leading-relaxed">The Royal Oak 15202 and 15500 are icons. We source AP Royal Oak in stainless steel, two-tone, and precious metals, as well as Royal Oak Offshore references and limited editions. Audemars Piguet is particularly popular among our entertainment and sports industry clients in Los Angeles.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Richard Mille</h3><p className="leading-relaxed">Richard Mille occupies a unique position in the watch world — technically radical, visually distinctive, and priced at a level that places it beyond most retail contexts. We regularly source RM 11-03, RM 27 series, RM 69, and collaboration models. If you are looking for a specific Richard Mille reference in Los Angeles, NexAssist is the right call.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Selling a Luxury Watch in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">NexAssist operates a discreet private market for watch sales and consignment in Los Angeles. Whether you are looking to sell a single reference or a collection, we provide an honest market valuation, source qualified buyers from our network, and manage the transaction with complete discretion.</p>
          <p className="leading-relaxed">Our watch sales clients value privacy above all. There are no public listings, no third-party platforms, and no unsolicited inquiries. Your collection is presented selectively to vetted buyers who are actively seeking your specific references.</p>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <ServiceLandingPage cfg={cfg} />
      <LongFormContent />
    </>
  );
}
