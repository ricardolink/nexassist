"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "yacht-charter-los-angeles",
  serviceType: "Superyachts",
  badge: "Marina del Rey · Newport Beach · Malibu",
  heroImg: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80",
  heroTagline: "Yacht Charter",
  heroTitle: "Superyacht Charter",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "From day charters to week-long voyages. Malibu, Catalina Island, or the Mexican Riviera — your private yacht awaits.",

  gridTitle: "Yachts & Superyachts Available in LA",
  gridSubtitle: "Day charters, weekend getaways, corporate events, and extended voyages. Every vessel crewed and ready.",
  items: [
    {
      name: "Motor Yacht",
      sub: "40–80 ft · 2–20 guests",
      tags: ["Day Charter", "Sunset Cruise", "Catalina Island"],
      img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Superyacht",
      sub: "80–200+ ft · Full crew",
      tags: ["Week Charter", "Luxury Cabins", "Pacific Coast"],
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Sailing Yacht",
      sub: "50–120 ft · 6–14 guests",
      tags: ["Sunrise Sail", "Malibu Coast", "Weekend"],
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
      color: "#34d399",
    },
    {
      name: "Sport Yacht",
      sub: "35–60 ft · Performance",
      tags: ["High Speed", "Day Trip", "Watersports"],
      img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
      color: "#f97316",
    },
    {
      name: "Catamaran",
      sub: "45–100 ft · Stable platform",
      tags: ["Groups", "Events", "Corporate"],
      img: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&q=80",
      color: "#f59e0b",
    },
    {
      name: "Mega Yacht",
      sub: "200 ft+ · Private ship",
      tags: ["Extended Voyages", "Full Crew", "Helicopter Pad"],
      img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
      color: "#a78bfa",
    },
  ],
  itemsFooter: "Need a floating venue for a corporate event or product launch? We specialize in private yacht events in LA.",

  stepsTitle: "Chartering a Yacht in Los Angeles is This Easy",
  steps: [
    { n: "01", title: "Tell Us Your Vision", body: "Date, number of guests, duration, and departure point — Marina del Rey, Newport Beach, or Malibu." },
    { n: "02", title: "We Find Your Vessel", body: "Your concierge matches you with the perfect yacht and crew. You approve the itinerary." },
    { n: "03", title: "All Aboard", body: "Step onto your private yacht. The crew handles everything — navigation, catering, activities." },
  ],

  areasTitle: "Yacht Charter Departure Points in Southern California",
  areas: ["Marina del Rey", "Newport Beach", "Malibu", "Long Beach", "San Pedro", "Redondo Beach", "Catalina Island", "Santa Barbara", "San Diego"],
  areasNote: "Extended charters available along the full Pacific Coast, Baja Mexico, and beyond.",

  whyTitle: "The Best Yacht Charter Experience in Los Angeles",
  why: [
    { icon: "⚓", title: "Crewed & Ready", body: "Every charter comes with an experienced captain and full crew. You just enjoy." },
    { icon: "🍾", title: "Full Catering Options", body: "Private chefs, premium spirits, custom menus. Everything arranged through your concierge." },
    { icon: "🤿", title: "Watersports & Activities", body: "Jet skis, paddleboards, snorkeling gear, fishing — we arrange all water activities on board." },
    { icon: "🎉", title: "Events & Celebrations", body: "Birthday parties, bachelorettes, corporate events — LA's most memorable private venue is on the water." },
    { icon: "🌅", title: "Catalina & Beyond", body: "Day trips to Catalina Island, overnight to Santa Barbara, or week-long Pacific Coast voyages." },
    { icon: "🔒", title: "Total Privacy", body: "No crowds. No paparazzi. Just you, your guests, and the open ocean." },
  ],

  faqTitle: "Yacht Charter Los Angeles — Common Questions",
  faqs: [
    { q: "How do I charter a yacht in Los Angeles?", a: "Send NexAssist a message with your date, number of guests, and what type of experience you're looking for. Your concierge will present options and handle all bookings." },
    { q: "Where do yacht charters depart from in LA?", a: "We arrange departures from Marina del Rey, Newport Beach, Malibu, Long Beach, and San Pedro. We'll pick the best marina for your itinerary." },
    { q: "How much does a yacht charter in LA cost?", a: "Day charters start around $1,500–$3,000 for a smaller motor yacht. Superyacht charters run from $10,000/day and up. Your concierge will provide exact pricing for your needs." },
    { q: "Can I go to Catalina Island on a charter?", a: "Yes — Catalina Island day trips are one of our most popular requests. We arrange the full itinerary including anchorage, tender service, and onshore dining." },
    { q: "Do you offer yacht charters for corporate events?", a: "Absolutely. We specialize in private yacht corporate events in LA — product launches, client entertainment, team outings. Catering, AV, and branding all arranged." },
    { q: "Can I charter a yacht overnight?", a: "Yes. Overnight and multi-day yacht charters are available. We arrange full crew, provisioning, and itinerary from LA along the California coast or down to Mexico." },
  ],

  ctaTitle: "Set Sail from Los Angeles. Your Yacht is Waiting.",
  ctaSubtitle: "Day charters, sunset cruises, Catalina Island getaways, and week-long Pacific voyages. One message to your concierge.",
  ctaNote: "Marina del Rey · Newport Beach · Malibu · Catalina Island",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
