"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "luxury-travel-los-angeles",
  serviceType: "Luxury Travel",
  badge: "Los Angeles · Worldwide Destinations",
  heroImg: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
  heroTagline: "Luxury Travel",
  heroTitle: "Luxury Travel Planning",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Bespoke itineraries, private villa getaways, five-star hotels, yacht cruises, and private jet travel. Designed entirely around you — from Los Angeles to anywhere in the world.",

  gridTitle: "Luxury Travel Experiences Available Through NexAssist",
  gridSubtitle: "Every trip curated by your personal concierge. From weekend escapes to world tours.",
  items: [
    {
      name: "Private Villa Escapes",
      sub: "Cabo · Tuscany · Santorini · Maldives",
      tags: ["Chef Included", "Private Pool", "Fully Staffed"],
      img: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Five-Star Hotel Suites",
      sub: "Four Seasons · Aman · Rosewood · COMO",
      tags: ["Presidential Suites", "Private Access", "Worldwide"],
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      color: "#f59e0b",
    },
    {
      name: "Private Jet Getaways",
      sub: "Fly private to any destination",
      tags: ["Same Day", "No Lines", "Fully Catered"],
      img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Yacht Voyages",
      sub: "Mediterranean · Caribbean · Pacific",
      tags: ["Full Crew", "Island Hopping", "Custom Route"],
      img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      color: "#34d399",
    },
    {
      name: "Exclusive Experiences",
      sub: "Safari · Ski · Cultural · F1 Hospitality",
      tags: ["Once in a Lifetime", "VIP Access", "Curated"],
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      color: "#f97316",
    },
    {
      name: "VIP Events & Access",
      sub: "F1 Paddock · Coachella VIP · Super Bowl · Cannes",
      tags: ["Premium Tickets", "Hospitality", "Worldwide"],
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      color: "#a78bfa",
    },
  ],
  itemsFooter: "Anywhere in the world — your concierge builds the perfect itinerary around your interests, dates, and style.",

  stepsTitle: "Planning a Luxury Trip from Los Angeles — Effortless",
  steps: [
    { n: "01", title: "Share Your Dream", body: "Where do you want to go? What do you want to experience? Dates, budget, who's coming — tell us everything." },
    { n: "02", title: "We Design Your Trip", body: "Your concierge crafts a personalized itinerary — flights, hotels, villas, experiences, reservations, transfers." },
    { n: "03", title: "Travel Carefree", body: "Every detail is handled before you leave LA. You travel, we manage everything behind the scenes." },
  ],

  areasTitle: "Popular Destinations from Los Angeles",
  areas: ["Cabo San Lucas", "Maldives", "Santorini", "Tuscany", "Paris", "Dubai", "Tokyo", "Aspen", "New York", "Miami", "Hawaii", "Bali"],
  areasNote: "Anywhere in the world. If you can dream it, we can arrange it.",

  whyTitle: "The Best Luxury Travel Concierge in Los Angeles",
  why: [
    { icon: "✈️", title: "All Travel Arranged", body: "Private jets, first-class flights, yacht transfers, helicopter connections — all in one place." },
    { icon: "🏨", title: "Best-in-Class Hotels", body: "Presidential suites at Four Seasons, Aman, Rosewood, COMO, and the most exclusive properties worldwide." },
    { icon: "🍽️", title: "Impossible Reservations", body: "Noma, Le Bernardin, Sublimotion, Ultraviolet — we secure the restaurants the world can't get into." },
    { icon: "🎫", title: "VIP Event Access", body: "F1 paddock passes, Cannes Film Festival, Super Bowl suites, Coachella artist area — we get you in." },
    { icon: "🗺️", title: "Fully Custom Itineraries", body: "No packages, no templates. Every trip built from scratch around your preferences." },
    { icon: "🔒", title: "24/7 On-Trip Support", body: "Your concierge is available throughout your trip for any changes, requests, or emergencies." },
  ],

  faqTitle: "Luxury Travel from Los Angeles — Common Questions",
  faqs: [
    { q: "What kinds of luxury trips does NexAssist plan from Los Angeles?", a: "Everything — private villa escapes, five-star hotel stays, private jet getaways, yacht charters, safari expeditions, F1 hospitality, and fully bespoke multi-country itineraries." },
    { q: "Can you arrange everything — flights, hotels, and activities?", a: "Yes. Your concierge handles every element of the trip: private jets or first-class flights, hotel suites, villa rentals, restaurant reservations, airport transfers, activities, and on-trip support." },
    { q: "Can you get us into sold-out hotels or events?", a: "That's what we're known for. We have relationships with the world's best hotels, restaurants, and event organizers to access experiences that aren't publicly available." },
    { q: "Do you plan honeymoons and anniversary trips?", a: "Yes. We specialize in romantic luxury travel — Maldives overwater villas, Santorini cliff suites, private beach dinners, and once-in-a-lifetime experiences for couples." },
    { q: "Can you plan a luxury ski trip from LA?", a: "Yes. Aspen, Vail, Whistler, Verbier, Zermatt — we arrange private chalets, ski-in/ski-out access, private instructors, and helicopter transfers." },
    { q: "Is NexAssist available to help during the trip?", a: "Yes. Your concierge is available 24/7 throughout your trip for any changes, requests, restaurant add-ons, or last-minute arrangements." },
  ],

  ctaTitle: "Where in the World Do You Want to Go?",
  ctaSubtitle: "Every luxury trip begins with one message to NexAssist. Cabo, Maldives, F1 Monaco, Antarctica — we'll get you there in style.",
  ctaNote: "Available 24/7 · Based in Los Angeles · Worldwide Reach",
};

export default function Page() {
  return <ServiceLandingPage cfg={cfg} />;
}
