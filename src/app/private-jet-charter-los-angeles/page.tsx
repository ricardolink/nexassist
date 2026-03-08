"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "private-jet-charter-los-angeles",
  serviceType: "Private Jets",
  badge: "Los Angeles · Van Nuys · Burbank · LAX",
  heroImg: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80",
  heroTagline: "Private Jet Charter",
  heroTitle: "Private Jet Charter",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Light jets to ultra-long-range. Domestic or international. One message to your concierge — wheels up within hours from Van Nuys, Burbank, or LAX.",

  gridTitle: "Private Jet Fleet Available from LA",
  gridSubtitle: "From quick domestic hops to transatlantic flights — we source the right aircraft for every mission.",
  items: [
    {
      name: "Light Jet",
      sub: "Phenom 300 · Citation CJ4 · Learjet 75",
      tags: ["Up to 8 pax", "Vegas · SF · Phoenix", "Short Range"],
      img: "https://plus.unsplash.com/premium_photo-1674343088347-08316eff97a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#60a5fa",
    },
    {
      name: "Midsize Jet",
      sub: "Citation Latitude · Hawker 900XP",
      tags: ["Up to 9 pax", "Cross-country", "Stand-up cabin"],
      img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Super Midsize",
      sub: "Challenger 350 · Citation X · Falcon 2000",
      tags: ["Up to 10 pax", "NYC · Miami nonstop", "Full galley"],
      img: "https://plus.unsplash.com/premium_photo-1755736605126-9c749949cf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#f59e0b",
    },
    {
      name: "Heavy Jet",
      sub: "Gulfstream G550 · Falcon 7X · Global 6000",
      tags: ["Up to 14 pax", "Transatlantic", "Bedroom suites"],
      img: "https://plus.unsplash.com/premium_photo-1754214179012-f69f3d15f6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#34d399",
    },
    {
      name: "Ultra Long Range",
      sub: "Gulfstream G700 · Global 7500 · Falcon 8X",
      tags: ["Up to 19 pax", "LA to Dubai nonstop", "Full bedroom"],
      img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
      color: "#a78bfa",
    },
    {
      name: "VIP Airliner",
      sub: "Boeing BBJ · Airbus ACJ",
      tags: ["20–50+ pax", "Groups & Tours", "Custom interior"],
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      color: "#f97316",
    },
  ],
  itemsFooter: "Helicopter transfers, cargo flights, medical transport — we handle all aviation requests.",

  stepsTitle: "Private Jet Charter from Los Angeles Made Simple",
  steps: [
    { n: "01", title: "Tell Us Your Trip", body: "Where, when, how many passengers. Domestic or international — we handle it all." },
    { n: "02", title: "We Source the Aircraft", body: "Your concierge finds the best-value aircraft for your route and books it. You approve, we confirm." },
    { n: "03", title: "Board and Fly", body: "Arrive at the FBO — no TSA, no lines. Your aircraft is ready. Wheels up on your schedule." },
  ],

  areasTitle: "Departing from Los Angeles Airports",
  areas: ["Van Nuys (VNY)", "Burbank (BUR)", "LAX", "Long Beach (LGB)", "Hawthorne (HHR)", "Camarillo (CMA)", "Santa Monica (SMO)", "Orange County (SNA)"],
  areasNote: "We source aircraft across all Southern California FBOs. Ask about helicopter connections from any location.",

  whyTitle: "The Best Private Jet Concierge in Los Angeles",
  why: [
    { icon: "⚡", title: "Same-Day Departure", body: "Most charter requests confirmed within 2 hours. Emergency and last-minute flights available 24/7." },
    { icon: "✈️", title: "Access to 7,000+ Aircraft", body: "One of the largest networks of private aircraft available globally. Any size, any destination." },
    { icon: "🛃", title: "Skip the Airport Chaos", body: "Arrive 15 minutes before departure. No lines, no security theater, no crowds." },
    { icon: "🍽️", title: "Catering & Amenities", body: "Custom menus, premium spirits, WiFi, and anything else you need arranged in advance." },
    { icon: "🌍", title: "Anywhere in the World", body: "LA to New York, London, Dubai, Tokyo — wherever you're going, we get you there." },
    { icon: "🔒", title: "Complete Privacy", body: "No manifests shared. No public booking records. Full confidentiality guaranteed." },
  ],

  faqTitle: "Private Jet Charter from Los Angeles — Questions Answered",
  faqs: [
    { q: "How do I charter a private jet from Los Angeles?", a: "Send NexAssist a message with your departure date, destination, and number of passengers. Your concierge will source the right aircraft and have options ready within the hour." },
    { q: "Which LA airport do private jets use?", a: "Most private jets in LA use Van Nuys (VNY) or Burbank (BUR). We also arrange charters from LAX, Long Beach, Hawthorne, and Orange County (SNA)." },
    { q: "How much does a private jet charter from Los Angeles cost?", a: "Pricing depends on aircraft type, route, and availability. A light jet to Las Vegas starts around $5,000. A heavy jet to New York runs $50,000+. Your concierge will provide exact quotes." },
    { q: "Can I get a private jet the same day?", a: "Yes. NexAssist arranges same-day and last-minute private jet charters from Los Angeles 24/7. Most requests are confirmed within 2 hours." },
    { q: "Do you offer international private jet charters?", a: "Absolutely. We charter flights from LA to Europe, the Middle East, Asia, and anywhere else in the world. Ultra-long-range aircraft available for nonstop transatlantic and transpacific flights." },
    { q: "Can I bring pets on a private jet?", a: "Yes — one of the great advantages of private aviation. Pets fly in the cabin with you. Let your concierge know and we'll confirm pet-friendly aircraft." },
  ],

  ctaTitle: "Wheels Up from Los Angeles — Your Schedule.",
  ctaSubtitle: "The world's finest private jet concierge service. One message. Any aircraft, any destination.",
  ctaNote: "Available 24/7 · Van Nuys · Burbank · LAX · International",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
