"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "chauffeur-service-los-angeles",
  serviceType: "Chauffeur Services",
  badge: "Los Angeles · 24/7 Concierge",
  heroImg: "https://images.unsplash.com/photo-1611005680285-7a50b0b0ca2c?w=1600&q=80",
  heroTagline: "Chauffeur Service",
  heroTitle: "Private Chauffeur Service",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Cadillac Escalade. Mercedes-Maybach. Rolls-Royce Ghost. Professional chauffeurs — airport transfers, meetings, events, and city tours across LA.",

  gridTitle: "Luxury Chauffeur Fleet in Los Angeles",
  gridSubtitle: "Every vehicle immaculate, every driver vetted. Arrive anywhere in LA in comfort and style.",
  items: [
    {
      name: "Cadillac Escalade",
      sub: "The ultimate executive SUV",
      tags: ["Airport Transfers", "Corporate", "Events"],
      img: "/cars/escalade.png",
      color: "#C9A962",
    },
    {
      name: "Mercedes-Maybach",
      sub: "S-Class · GLS · Pullman",
      tags: ["VIP Transfer", "Business", "Gala Events"],
      img: "/cars/maybach-s680.jpg",
      color: "#a78bfa",
    },
    {
      name: "Rolls-Royce",
      sub: "Phantom · Ghost · Cullinan",
      tags: ["Weddings", "Red Carpet", "VIP"],
      img: "/cars/cullinan.jpg",
      color: "#C9A962",
    },
    {
      name: "Mercedes S-Class",
      sub: "AMG S63 · S580 · EQS",
      tags: ["Business Travel", "Airport", "Corporate"],
      img: "/cars/mercedes-s580.jpg",
      color: "#60a5fa",
    },
    {
      name: "BMW 7 Series",
      sub: "760i · Alpina B7 · i7",
      tags: ["Executive", "Meetings", "City Tours"],
      img: "/cars/bmw-740i.jpg",
      color: "#3b82f6",
    },
    {
      name: "Land Rover",
      sub: "SV Autobiography · Long Wheelbase",
      tags: ["Group Travel", "Comfort", "Events"],
      img: "/cars/land-rover.jpg",
      color: "#10b981",
    },
  ],
  itemsFooter: "Need a party bus, sprinter van, or multi-vehicle convoy? Just ask your concierge.",

  stepsTitle: "Professional Chauffeur Service in LA Made Effortless",
  steps: [
    { n: "01", title: "Tell Us Your Itinerary", body: "Send your pickup location, destination, date and time. Airport, hotel, meeting — anywhere in LA." },
    { n: "02", title: "We Assign Your Driver", body: "A vetted, professional chauffeur is assigned. You receive confirmation with driver details." },
    { n: "03", title: "Arrive in Style", body: "Your chauffeur meets you on time, every time. Relax while we handle the rest." },
  ],

  areasTitle: "Chauffeur Service Across All of Los Angeles",
  areas: ["LAX Airport", "Burbank Airport", "Beverly Hills", "Malibu", "West Hollywood", "Santa Monica", "Bel Air", "Century City", "Downtown LA", "Irvine", "Newport Beach", "Orange County"],
  areasNote: "Long distance? We cover San Diego, Las Vegas, and beyond. Just ask.",

  whyTitle: "Why Choose NexAssist for Chauffeur Service in LA",
  why: [
    { icon: "⏱️", title: "Always On Time", body: "Flight tracking, real-time traffic monitoring — your driver is there before you are." },
    { icon: "🎩", title: "Professional Drivers", body: "Background-checked, licensed, professionally trained. Not a rideshare app." },
    { icon: "✈️", title: "Airport Specialists", body: "LAX, Burbank, Long Beach, SNA — we handle all LA-area airports, meet & greet included." },
    { icon: "📋", title: "By-the-Hour or Fixed Route", body: "Hourly chauffeur packages or point-to-point. Flexible to your schedule." },
    { icon: "🎬", title: "Events & Red Carpet", body: "Award shows, film premieres, galas — we manage multi-vehicle event logistics across LA." },
    { icon: "🔒", title: "Fully Confidential", body: "Celebrity clients, executives, private individuals. Discretion guaranteed." },
  ],

  faqTitle: "Chauffeur Service Los Angeles — Common Questions",
  faqs: [
    { q: "How do I book a chauffeur in Los Angeles?", a: "Send NexAssist a message with your pickup location, destination, date and time. Your concierge handles the rest — vehicle selection, driver assignment, and confirmation." },
    { q: "Do you offer airport transfers in LA?", a: "Yes. We provide professional chauffeur airport transfers to and from LAX, Burbank (BUR), Long Beach (LGB), John Wayne (SNA), and all LA-area airports. Meet & greet service available." },
    { q: "What vehicles are available for chauffeur service?", a: "Cadillac Escalade, Mercedes-Maybach, Rolls-Royce Ghost, BMW 7 Series, Mercedes S-Class, Range Rover, and more. We match the vehicle to your occasion." },
    { q: "Can I hire a chauffeur for a full day?", a: "Absolutely. Hourly, half-day, and full-day packages are available. Your chauffeur stays with you for your entire itinerary." },
    { q: "Do you provide chauffeur service for events and weddings?", a: "Yes. We specialize in multi-vehicle event logistics — weddings, corporate events, film premieres, award shows, and private galas across Los Angeles." },
    { q: "Is chauffeur service available 24/7 in Los Angeles?", a: "NexAssist operates 24/7. Early morning airport runs, late-night event pickups — we're always available." },
  ],

  ctaTitle: "Your Personal Chauffeur is Ready.",
  ctaSubtitle: "Professional, discreet, on time — every time. The finest chauffeur service in Los Angeles.",
  ctaNote: "Available 24/7 · LAX · Beverly Hills · Malibu · All of LA",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
