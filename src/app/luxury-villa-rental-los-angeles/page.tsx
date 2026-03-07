"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "luxury-villa-rental-los-angeles",
  serviceType: "Luxury Villas",
  badge: "Los Angeles · Malibu · Beverly Hills · Hollywood Hills",
  heroImg: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
  heroTagline: "Luxury Villa Rental",
  heroTitle: "Luxury Villa Rental",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Malibu beachfront estates, Beverly Hills mansions, Hollywood Hills retreats. Private pools, staff, and concierge — all arranged for you.",

  gridTitle: "Luxury Villas Available Across LA",
  gridSubtitle: "Curated private estates for short stays, extended rentals, events, and productions.",
  items: [
    {
      name: "Malibu Beachfront",
      sub: "Pacific Coast Highway estates",
      tags: ["Ocean Views", "Private Beach", "Celebrity Row"],
      img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Beverly Hills Mansion",
      sub: "Trousdale · Flats · Summit",
      tags: ["Infinity Pool", "Home Theater", "Full Staff"],
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Hollywood Hills",
      sub: "Bird Streets · Mulholland · Laurel Canyon",
      tags: ["City Views", "Pool", "Private"],
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      color: "#f97316",
    },
    {
      name: "Bel Air Estate",
      sub: "Gated · Ultra-private · Full compound",
      tags: ["Tennis Court", "Guest House", "24/7 Security"],
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      color: "#34d399",
    },
    {
      name: "Calabasas Compound",
      sub: "Gated community · Mountain views",
      tags: ["Family", "Privacy", "Extended Stay"],
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      color: "#a78bfa",
    },
    {
      name: "Newport Beach Villa",
      sub: "Bayfront · Harbor views",
      tags: ["Boat Dock", "OC Location", "Yacht Access"],
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      color: "#f59e0b",
    },
  ],
  itemsFooter: "Looking for a villa for a film production, brand shoot, or private event? We handle specialty requests.",

  stepsTitle: "Booking a Luxury Villa in LA Has Never Been Easier",
  steps: [
    { n: "01", title: "Share Your Vision", body: "Location preference, dates, number of guests, must-haves. Malibu? Beverly Hills? Hills or beach?" },
    { n: "02", title: "We Curate Options", body: "Your concierge presents hand-selected villas that match your criteria, budget, and lifestyle." },
    { n: "03", title: "Move In", body: "Keys, staff, and concierge support on arrival. Everything is ready before you walk in the door." },
  ],

  areasTitle: "Luxury Villas Across Greater Los Angeles",
  areas: ["Malibu", "Beverly Hills", "Hollywood Hills", "Bel Air", "Brentwood", "Pacific Palisades", "Calabasas", "Hidden Hills", "Trousdale Estates", "Newport Beach", "Laguna Beach", "Santa Barbara"],
  areasNote: "International villas also available — Cabo, Aspen, Miami, the Hamptons, Europe. Ask your concierge.",

  whyTitle: "The Finest Luxury Villa Rental Concierge in Los Angeles",
  why: [
    { icon: "🏡", title: "Off-Market Access", body: "We access private, off-market estates not listed publicly. The best properties stay quiet." },
    { icon: "👨‍🍳", title: "Private Chef & Staff", body: "Private chef, housekeeper, butler, security — all arranged by your concierge." },
    { icon: "🛡️", title: "Vetted Properties Only", body: "Every villa personally vetted. No surprises on arrival — what you see is what you get." },
    { icon: "🎬", title: "Film & Production Ready", body: "We specialize in securing estates for film shoots, music videos, and brand productions." },
    { icon: "🎉", title: "Event Villas", body: "Private dinners, birthday parties, launch events — we source the perfect LA estate and handle the event logistics." },
    { icon: "🔒", title: "Complete Privacy", body: "High-profile guests, NDAs, security arrangements — we manage everything with total discretion." },
  ],

  faqTitle: "Luxury Villa Rental Los Angeles — Common Questions",
  faqs: [
    { q: "How do I rent a luxury villa in Los Angeles?", a: "Send NexAssist a message with your dates, location preference, number of guests, and any must-haves. Your concierge will present curated options within 24 hours." },
    { q: "Can I rent a villa in Malibu for a week?", a: "Yes. We arrange short-term luxury villa rentals in Malibu, Beverly Hills, Hollywood Hills, and across LA from a minimum of 2 nights to extended multi-month stays." },
    { q: "Do luxury villas in LA come with staff?", a: "We can arrange private chef, housekeeping, security, and concierge services for your villa. Just let us know what you need." },
    { q: "Can I rent a Beverly Hills mansion for a party or event?", a: "Yes. We secure event-ready private estates across LA for parties, dinners, brand activations, and celebrations. Event planning support also available." },
    { q: "Do you have access to off-market properties?", a: "Yes. Many of our most exclusive listings are not publicly listed. NexAssist's partner network includes private owners and estate managers across LA." },
    { q: "Can you arrange a villa for a film production?", a: "Absolutely. We frequently source locations for film, TV, music video, and brand productions across Los Angeles." },
  ],

  ctaTitle: "Your Private Estate in LA Awaits.",
  ctaSubtitle: "Malibu beachfront, Beverly Hills mansion, Hollywood Hills retreat — one message to your concierge.",
  ctaNote: "Malibu · Beverly Hills · Hollywood Hills · Bel Air · Newport Beach",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
