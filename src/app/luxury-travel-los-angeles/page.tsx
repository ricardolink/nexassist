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

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Bespoke Luxury Travel from Los Angeles</h2>
          <p className="mb-4 leading-relaxed">The difference between a luxury trip and a truly extraordinary one is the depth of the details. The suite that was not available until someone called in a favour. The private guide who takes you somewhere the other guests never see. The dinner reservation at the restaurant that says it has been booked for three months — until the right person asks. NexAssist operates in that gap between what is publicly available and what is actually possible.</p>
          <p className="mb-4 leading-relaxed">From Los Angeles, the world is genuinely accessible. A private jet to Cabo San Lucas takes two hours. The Maldives is 20 hours by private or commercial air, with a seaplane transfer to a private island that might as well be another planet. East Africa by private charter puts you at a remote camp in Botswana where the only guests are your group. NexAssist designs these experiences end-to-end — private jet, accommodation, transfers, guides, restaurants, and every detail in between.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Popular Luxury Travel Destinations from Los Angeles</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Maldives</h3><p className="leading-relaxed">The Maldives remains the definitive luxury escape. Overwater villas, bioluminescent lagoons, and house reef diving unlike anywhere on earth. NexAssist sources exclusive-use villa arrangements at Soneva Jani, Velaa Private Island, Cheval Blanc Randheli, and other properties that match your specific definition of perfection. Private seaplane transfers from Malé coordinated as part of the itinerary.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Amalfi Coast &amp; Positano</h3><p className="leading-relaxed">Southern Italy in summer is one of the great pleasures of being alive. NexAssist arranges villa rentals above Positano with private boats, dinner at Le Sirenuse, day trips to Capri, and sunset aperitivo on terraces that justify every superlative ever written about the Amalfi Coast.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">St. Barts</h3><p className="leading-relaxed">The Caribbean&apos;s most sophisticated island. December through April, St. Barts fills with a genuinely global crowd of people who have seen everywhere else and keep coming back. NexAssist sources villa rentals, yacht charters for inter-island day trips, and restaurant reservations at Eden Rock and Le Sereno for the peak season when nothing is available without the right connection.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">East Africa Safari</h3><p className="leading-relaxed">A private safari in Kenya&apos;s Masai Mara, Tanzania&apos;s Serengeti, or Botswana&apos;s Okavango Delta is a transformative experience. NexAssist arranges private bush planes between camps, exclusive-use tented camps that accommodate only your group, and expert naturalist guides who make the difference between a good safari and an exceptional one.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">End-to-End Luxury Travel — What NexAssist Handles</h2>
          <p className="mb-4 leading-relaxed">NexAssist manages the complete travel experience from Los Angeles. Your concierge coordinates private jet charter from Van Nuys or LAX, five-star hotel and villa reservations with VIP status and room upgrades, private car and boat transfers at the destination, restaurant reservations at sold-out tables, private guides and exclusive experiences, and the return journey home. One contact. Total coverage.</p>
          <p className="leading-relaxed">We also handle the inevitable — delays, changed plans, a better option that appears mid-trip. Your concierge is available 24/7 throughout the journey. If something changes, we adapt. That&apos;s the difference between a travel agent and a personal concierge.</p>
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
