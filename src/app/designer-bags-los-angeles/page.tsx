"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "designer-bags-los-angeles",
  serviceType: "Designer Bags",
  badge: "Los Angeles · Worldwide Sourcing",
  heroImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&q=80",
  heroTagline: "Designer Bags",
  heroTitle: "Rare Designer Bags",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Hermès Birkin, Kelly, Chanel Classic Flap, Louis Vuitton. Waitlisted and impossible-to-find pieces sourced privately — no boutique queues, no compromises.",

  gridTitle: "Designer & Luxury Bags Available Through NexAssist",
  gridSubtitle: "Access to waitlisted, limited-edition, and private-sale luxury handbags. Every piece authenticated.",
  items: [
    {
      name: "Hermès",
      sub: "Birkin · Kelly · Constance · Picotin",
      tags: ["Waitlisted Sizes", "Exotic Leathers", "Private Source"],
      img: "/cars/hermes.jpg",
      color: "#C9A962",
    },
    {
      name: "Chanel",
      sub: "Classic Flap · Boy Bag · 19 · 22 Bag",
      tags: ["Seasonal Pieces", "Limited Editions", "Authenticated"],
      img: "/cars/chanel.jpg",
      color: "#f5f5f4",
    },
    {
      name: "Louis Vuitton",
      sub: "Neverfull · Speedy · Capucines · Coussin",
      tags: ["Collaboration Pieces", "Classic", "Limited Release"],
      img: "/cars/louis-vuitton.jpg",
      color: "#f59e0b",
    },
    {
      name: "Dior",
      sub: "Lady Dior · Saddle · 30 Montaigne · Book Tote",
      tags: ["New Season", "Custom Embroidery", "Private Sale"],
      img: "/cars/dior.jpg",
      color: "#60a5fa",
    },
    {
      name: "Prada",
      sub: "Re-Edition · Galleria · Cleo · Arqué",
      tags: ["Investment Pieces", "Nylon Icons", "Seasonal Colors"],
      img: "/cars/prada.jpg",
      color: "#f97316",
    },
    {
      name: "Balenciaga & More",
      sub: "Valentino · Givenchy · Fendi · Celine",
      tags: ["Full Catalog", "Men's & Women's", "New Season"],
      img: "/cars/balenciaga.jpg",
      color: "#a78bfa",
    },
  ],
  itemsFooter: "Looking for a specific piece — rare color, exotic skin, limited edition? We'll find it.",

  stepsTitle: "Sourcing Your Dream Bag — Zero Boutique Hassle",
  steps: [
    { n: "01", title: "Tell Us What You Want", body: "Brand, style, size, color, hardware. Or describe your ideal piece — we'll know exactly what to look for." },
    { n: "02", title: "We Find It Privately", body: "Your concierge contacts our global network of boutique contacts, resellers, and private collectors." },
    { n: "03", title: "Authenticated & Delivered", body: "Every piece is authenticated before purchase. Delivered securely to you in Los Angeles." },
  ],

  whyTitle: "The Best Way to Buy Designer Bags in Los Angeles",
  why: [
    { icon: "👜", title: "Access Waitlisted Pieces", body: "Hermès Birkin, Chanel Classic Flap, limited editions — we bypass boutique waitlists entirely." },
    { icon: "✅", title: "100% Authenticated", body: "Every bag authenticated by luxury goods specialists. Receipt, dustbag, box, and provenance confirmed." },
    { icon: "💰", title: "Sell Your Collection", body: "Want to sell a piece? We find qualified private buyers discretely for full market value." },
    { icon: "📦", title: "Secure Delivery in LA", body: "All pieces delivered fully insured via secure courier to your door in Los Angeles." },
    { icon: "🌍", title: "Global Network", body: "Paris, Milan, Dubai, Tokyo — our sourcing network is worldwide. No piece is out of reach." },
    { icon: "🔒", title: "Fully Discreet", body: "Private sourcing and selling. Your taste, your business." },
  ],

  faqTitle: "Designer Bags Los Angeles — Common Questions",
  faqs: [
    { q: "Can you source a Hermès Birkin in Los Angeles?", a: "Yes. The Birkin is one of the most requested pieces and we specialize in sourcing them through private networks — no boutique relationship or quota required." },
    { q: "Are the bags authentic?", a: "Every piece is authenticated by luxury goods specialists before purchase. We verify authenticity cards, receipts, hardware, stitching, and leather quality." },
    { q: "Can I sell my designer bags through NexAssist?", a: "Yes. We manage discreet private sales of luxury handbags, connecting you with qualified buyers for maximum value." },
    { q: "Do you carry limited edition and seasonal pieces?", a: "Yes. We track seasonal releases from Chanel, Dior, Louis Vuitton, Bottega Veneta, and others. Let us know what's on your wish list." },
    { q: "Can you find exotic leather Hermès bags?", a: "Yes. Crocodile, alligator, ostrich, and other exotic leather Hermès pieces can be sourced through our private network." },
    { q: "How long does sourcing take?", a: "Depending on the piece, 24 hours to a few days. Rare or custom pieces may take longer — your concierge will keep you updated throughout." },
  ],

  ctaTitle: "Your Wishlist Bag is One Message Away.",
  ctaSubtitle: "Hermès Birkin, Chanel Classic Flap, Louis Vuitton limited editions — sourced privately and delivered to you in LA.",
  ctaNote: "Los Angeles · Beverly Hills · Worldwide Sourcing",
};

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Designer Bag Sourcing in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">The most coveted designer bags in the world are not sitting on a shelf waiting for you. A Hermès Birkin in a specific color and leather requires a relationship — or access to the private market where these pieces actually trade. A limited Chanel release sells out before it reaches the floor. A Louis Vuitton collaboration disappears in hours. If you want these pieces in Los Angeles, you need someone who moves in the right circles.</p>
          <p className="leading-relaxed">NexAssist sources designer bags through a private network of authenticated dealers, estate sellers, and direct collectors in Los Angeles and globally. Send your concierge the specification — bag, size, color, leather, hardware — and we do the searching. Every piece fully authenticated before it reaches you.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Requested Designer Bags in Los Angeles</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Hermès Birkin &amp; Kelly</h3><p className="leading-relaxed">The Birkin remains the most recognizable luxury accessory in the world and the most actively traded piece in our Los Angeles network. We source Birkin 25, 30, 35, and 40 in all standard leathers — Togo, Epsom, Clemence, Swift — as well as exotic skins including Porosus Crocodile, Nilo Crocodile, and Ostrich. The Kelly 25, 28, and 32 are equally in demand, particularly in Sellier construction. Special order and Horseshoe pieces sourced on request.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Chanel</h3><p className="leading-relaxed">The Chanel Classic Flap in black caviar with gold or silver hardware is the definitive wardrobe piece. We source current season and vintage Classic Flaps, the Boy Bag in all sizes, the Chanel 19, and seasonal limited editions. Chanel&apos;s regular price increases have made authenticated pre-owned pieces an increasingly intelligent acquisition.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Louis Vuitton</h3><p className="leading-relaxed">Louis Vuitton limited releases — Virgil Abloh-era collaborations, artist editions, and seasonal runway pieces — are highly sought in our Los Angeles network. Core Monogram Canvas and Damier pieces are readily available. We also source the most coveted LV hard cases and trunks for collectors.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Bottega Veneta &amp; Others</h3><p className="leading-relaxed">Bottega Veneta Intrecciato in the Jodie, Cassette, and Arco silhouettes are consistently in demand among our LA clients. We also source Celine Box and Luggage pieces, Dior Saddle Bags, Saint Laurent Loulou, and Balenciaga City and Hourglass in all colorways.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Designer Bags as Investments — The Los Angeles Market</h2>
          <p className="mb-4 leading-relaxed">The secondary market for luxury bags has outperformed many traditional asset classes over the past decade. Hermès Birkin and Kelly bags have shown consistent appreciation of 10–15% annually. Patek Philippe — the watchmaking equivalent — tells the same story. Limited edition Chanel pieces often double in value within two years of release.</p>
          <p className="leading-relaxed">NexAssist clients increasingly approach designer bag acquisition with an investment lens. Your concierge provides honest market guidance — which pieces have the strongest appreciation history, which are oversupplied in the current market, and which represent genuine opportunity. Buying the right piece matters as much as buying the right brand.</p>
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
