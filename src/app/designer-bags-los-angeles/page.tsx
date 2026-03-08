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

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
