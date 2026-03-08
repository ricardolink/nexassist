"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "car-sales-los-angeles",
  serviceType: "Car Sales",
  badge: "Los Angeles · Nationwide Sourcing",
  heroImg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80",
  heroTagline: "Exotic Car Sales",
  heroTitle: "Buy or Sell Exotic Cars",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Ferrari, Lamborghini, Rolls-Royce, Porsche, AMG. We source any car you want — or sell yours for maximum value. Private, fast, and hassle-free.",

  gridTitle: "Exotic & Luxury Cars Available to Purchase",
  gridSubtitle: "Access to private collections, dealer networks, and auction inventory nationwide. Any make, any spec, any color.",
  items: [
    {
      name: "Ferrari",
      sub: "SF90 · Roma · 296 GTB · F8",
      tags: ["New & Pre-owned", "Factory Order", "Nationwide"],
      img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
      color: "#e53e3e",
    },
    {
      name: "Lamborghini",
      sub: "Urus · Huracán · Revuelto",
      tags: ["New & CPO", "Custom Spec", "Nationwide"],
      img: "/cars/huracan.jpg",
      color: "#f59e0b",
    },
    {
      name: "Rolls-Royce",
      sub: "Ghost · Cullinan · Spectre · Phantom",
      tags: ["Bespoke Orders", "Pre-owned", "Private Sales"],
      img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Porsche",
      sub: "911 GT3 RS · Taycan · Panamera Turbo",
      tags: ["Allocation Access", "Track Spec", "CPO"],
      img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Mercedes-AMG",
      sub: "GT 63 S · G63 · SL63 · EQS AMG",
      tags: ["New", "Pre-owned", "Private Collection"],
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      color: "#a78bfa",
    },
    {
      name: "BMW",
      sub: "M8 Competition · XM · M5 CS",
      tags: ["Custom Order", "New", "CPO"],
      img: "/cars/bmw-x6m.png",
      color: "#3b82f6",
    },
  ],
  itemsFooter: "McLaren, Bentley, Aston Martin, Bugatti, Koenigsegg — if it exists, we can find it.",

  stepsTitle: "Buying Your Dream Car in LA — Simplified",
  steps: [
    { n: "01", title: "Tell Us What You Want", body: "Make, model, spec, color, budget. Or just describe your dream car — we'll handle the rest." },
    { n: "02", title: "We Source It", body: "Your concierge taps our dealer and private seller network to find the exact vehicle, at the best price." },
    { n: "03", title: "Delivered to Your Door", body: "Paperwork handled, inspection done. Your new car arrives wherever you are in LA." },
  ],

  areasTitle: "Serving Car Buyers Across Los Angeles",
  areas: ["Beverly Hills", "Bel Air", "Malibu", "Hollywood Hills", "Calabasas", "Newport Beach", "Orange County", "Downtown LA", "Santa Monica", "Irvine"],
  areasNote: "We source vehicles nationwide and ship anywhere in the US. International delivery available.",

  whyTitle: "The Smarter Way to Buy or Sell an Exotic Car in LA",
  why: [
    { icon: "🔍", title: "Find Any Car", body: "Impossible-to-find allocations, private collections, auction vehicles — our network covers it all." },
    { icon: "💰", title: "Best Price Guaranteed", body: "We negotiate on your behalf. No dealer markup games. You pay a fair price, every time." },
    { icon: "📋", title: "All Paperwork Handled", body: "Title, registration, transport — everything is taken care of. You just sign once." },
    { icon: "🔧", title: "Pre-Purchase Inspection", body: "Every pre-owned vehicle goes through a full inspection before you commit. No surprises." },
    { icon: "📦", title: "Sell Your Car", body: "Want to sell? We market your car to qualified buyers through our private network for maximum value." },
    { icon: "🔒", title: "Private Transactions", body: "Discreet, off-market deals. No public listings, no unwanted attention." },
  ],

  faqTitle: "Exotic Car Sales Los Angeles — Common Questions",
  faqs: [
    { q: "Can you help me find a specific exotic car in Los Angeles?", a: "Yes. Tell NexAssist the exact car you want — make, model, year, color, spec. Your concierge will source it through our dealer, private seller, and auction network." },
    { q: "Do you have access to hard-to-find allocations?", a: "Yes. We have relationships with dealerships nationwide that can secure allocations for high-demand vehicles like the Ferrari SF90, Lamborghini Revuelto, and Porsche GT3 RS." },
    { q: "Can you help me sell my exotic car?", a: "Absolutely. We list your vehicle privately through our buyer network, handle all inquiries, and manage the transaction from start to finish for maximum privacy and value." },
    { q: "Do you handle pre-purchase inspections?", a: "Yes. All pre-owned vehicles go through a professional inspection before purchase. We can also arrange independent PPI by a marque specialist." },
    { q: "Do you ship cars outside of Los Angeles?", a: "Yes. We arrange enclosed transport nationwide and international shipping to Canada, Europe, the Middle East, and beyond." },
    { q: "Can I trade in my current car?", a: "Yes. We handle trade-ins as part of the purchase process, appraising your current vehicle and applying its value toward your new purchase." },
  ],

  ctaTitle: "Find Your Perfect Car. Anywhere in the World.",
  ctaSubtitle: "The most private, efficient way to buy or sell an exotic car in Los Angeles. One message to your concierge.",
  ctaNote: "Ferrari · Lamborghini · Rolls-Royce · Porsche · AMG · BMW M",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
