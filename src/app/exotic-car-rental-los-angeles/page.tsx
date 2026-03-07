"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "exotic-car-rental-los-angeles",
  serviceType: "Exotic Car Rental",
  badge: "Los Angeles · 24/7 Concierge",
  heroImg: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80",
  heroTagline: "Exotic Car Rental",
  heroTitle: "Exotic Car Rental",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Ferrari. Lamborghini. Rolls-Royce. McLaren. One text to your personal concierge — same-day delivery anywhere in LA.",

  gridTitle: "Exotic & Luxury Cars Available in LA",
  gridSubtitle: "Every car sourced through vetted partners. Delivered to your door — Beverly Hills, Malibu, or anywhere in Los Angeles.",
  items: [
    {
      name: "Ferrari",
      tags: ["Roma", "SF90 Stradale", "296 GTB", "Portofino M"],
      img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
      color: "#e53e3e",
    },
    {
      name: "Lamborghini",
      tags: ["Huracán EVO", "Urus Performante", "Revuelto"],
      img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
      color: "#f59e0b",
    },
    {
      name: "Rolls-Royce",
      tags: ["Ghost", "Cullinan", "Spectre", "Wraith"],
      img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "McLaren",
      tags: ["720S", "Artura", "GT", "765LT"],
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      color: "#f97316",
    },
    {
      name: "Bentley",
      tags: ["Continental GT", "Bentayga", "Flying Spur"],
      img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
      color: "#34d399",
    },
    {
      name: "Porsche",
      tags: ["911 Turbo S", "Taycan Turbo", "Cayenne Turbo GT"],
      img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "BMW",
      tags: ["M8 Competition", "M5 CS", "XM Label", "i7 M70"],
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      color: "#3b82f6",
    },
    {
      name: "Mercedes-Benz",
      tags: ["AMG GT 63", "S-Class", "G63 AMG", "EQS AMG"],
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      color: "#a78bfa",
    },
    {
      name: "Land Rover",
      tags: ["Range Rover SV", "Defender 110", "Range Rover Sport"],
      img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
      color: "#10b981",
    },
  ],
  itemsFooter: "Looking for something else? Aston Martin, Bugatti, Koenigsegg, Maybach — just ask.",

  stepsTitle: "Renting an Exotic Car in LA Has Never Been Simpler",
  steps: [
    { n: "01", title: "Send One Message", body: "Tell your concierge what car you want, when, and where in LA. That's it." },
    { n: "02", title: "We Handle Everything", body: "Your concierge sources the car, handles the paperwork, and arranges delivery anywhere in Los Angeles." },
    { n: "03", title: "Drive Your Dream Car", body: "The car arrives at your location — Beverly Hills, Malibu, your hotel, or anywhere across LA." },
  ],

  areasTitle: "Exotic Car Delivery Across All of Los Angeles",
  areas: ["Beverly Hills", "Malibu", "West Hollywood", "Santa Monica", "Hollywood Hills", "Bel Air", "Brentwood", "Century City", "Downtown LA", "Irvine", "Newport Beach", "Orange County"],
  areasNote: "+ All surrounding areas. Don't see your city? Just ask — we'll get there.",

  whyTitle: "The Smartest Way to Rent an Exotic Car in Los Angeles",
  why: [
    { icon: "⚡", title: "Same-Day Available", body: "Request in the morning, drive by afternoon. Available 24/7 across LA." },
    { icon: "🤝", title: "Vetted Partners Only", body: "Every car in our network is maintained to the highest standard. No surprises." },
    { icon: "📍", title: "Delivered to You", body: "Your hotel, home, or office — we bring the car to you anywhere in Los Angeles." },
    { icon: "💬", title: "One Point of Contact", body: "No phone trees, no apps. One concierge handles everything start to finish." },
    { icon: "🎬", title: "Photoshoots & Events", body: "Music videos, brand activations, weddings. We handle exotic car logistics for LA's biggest events." },
    { icon: "🔒", title: "100% Confidential", body: "Your privacy matters. Every request handled with complete discretion." },
  ],

  faqTitle: "Exotic Car Rental in Los Angeles — Questions Answered",
  faqs: [
    { q: "How do I rent an exotic car in Los Angeles?", a: "Send NexAssist a message with the car you want, your date, and pickup location. Your personal concierge handles everything — sourcing, paperwork, and delivery directly to you. Most requests are confirmed the same day." },
    { q: "What exotic cars are available in LA?", a: "Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, BMW M-Series, Mercedes-AMG, Land Rover, and more. If you have a specific car in mind, let us know — we'll find it." },
    { q: "Do you deliver to Beverly Hills, Malibu, and other LA areas?", a: "Yes. We deliver to Beverly Hills, Malibu, West Hollywood, Santa Monica, Hollywood Hills, Bel Air, Downtown LA, Irvine, Newport Beach, and anywhere else in the greater LA area." },
    { q: "How fast can you get me an exotic car?", a: "NexAssist is 24/7. Same-day delivery is available for most requests across Los Angeles. For peak weekends or rare vehicles, we recommend 48 hours notice." },
    { q: "Do I need a special license to rent an exotic car?", a: "A valid driver's license and proof of insurance are required. Your concierge will walk you through any requirements specific to the vehicle you choose." },
    { q: "Can I rent an exotic car for a photoshoot or event?", a: "Absolutely. We regularly arrange exotic car rentals for photoshoots, music videos, weddings, corporate events, and brand activations across Los Angeles." },
  ],

  ctaTitle: "Your Next Exotic Car is One Message Away.",
  ctaSubtitle: "Los Angeles's most exclusive concierge for exotic car rentals. Ferrari, Lamborghini, Rolls-Royce, and more — delivered to you.",
  ctaNote: "Available 24/7 · Beverly Hills · Malibu · Hollywood · All of LA",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
