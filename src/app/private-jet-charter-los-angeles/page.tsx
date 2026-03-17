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

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Private Jet Charter from Los Angeles — How It Works</h2>
          <p className="mb-4 leading-relaxed">Los Angeles is one of the most active private aviation markets in the world. Van Nuys Airport (VNY) — just 25 minutes from Beverly Hills — is the busiest private jet airport in the United States by operations. NexAssist arranges private jet charters from Van Nuys, Santa Monica, Burbank, Long Beach, and LAX for international departures.</p>
          <p className="mb-4 leading-relaxed">The process is straightforward. Send your concierge a message: where, when, how many passengers. Within hours you have aircraft options and pricing. NexAssist handles the rest — booking, ground transportation to the FBO, catering preferences, and any special requests. You arrive, clear private security in minutes, and board. No terminals, no queues, no schedule compromises.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Popular Private Jet Routes from Los Angeles</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Los Angeles to Las Vegas</h3><p className="leading-relaxed">The most popular private jet route in America. 45 minutes door-to-FBO from Van Nuys. NexAssist arranges same-day charter on this route regularly — often with only a few hours notice. Light jets (Citation CJ3, Phenom 300) are perfectly suited. Hotel suite coordination and table reservations included on request.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Los Angeles to New York</h3><p className="leading-relaxed">Coast-to-coast in approximately 5 hours. Super-midsize jets (Challenger 350, Citation X) handle this route comfortably for groups of 6–9. For larger groups or maximum comfort, large cabin jets offer full stand-up cabins, separate sleeping areas, and galley service. Teterboro (TEB) or White Plains (HPN) for Manhattan access.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Los Angeles to Miami</h3><p className="leading-relaxed">Approximately 4.5 hours non-stop. A large cabin jet makes this route feel like a private flying club — plenty of space for meetings, rest, and meals. Opa-locka Executive Airport for South Beach access; Fort Lauderdale for the Broward area.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Los Angeles to Cabo San Lucas</h3><p className="leading-relaxed">Just 2 hours from Van Nuys to Los Cabos International. A midsize jet handles this comfortably. NexAssist coordinates villa transfers, yacht charters, and resort arrivals on both ends. A weekend in Cabo has never been easier to arrange.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">International — London, Tokyo, Dubai, Paris</h3><p className="leading-relaxed">Ultra-long-range aircraft like the Gulfstream G700, G650, or Bombardier Global 7500 connect Los Angeles to Europe, Asia, and the Middle East non-stop. Business jet terminals at LAX handle international departures with dedicated customs facilities. NexAssist manages international charters with the same ease as domestic routes.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Empty Leg Flights from Los Angeles</h2>
          <p className="mb-4 leading-relaxed">An empty leg is a repositioning flight — the aircraft needs to fly from Point A to Point B with no passengers, so it is offered at a steep discount. Empty legs from Van Nuys and other LA airports are frequently available and can save 50–75% off standard charter rates.</p>
          <p className="leading-relaxed">The catch: empty leg availability is real-time and can change quickly. NexAssist monitors the market continuously and will alert you when relevant empty legs appear on routes you travel regularly. If your schedule has flexibility, empty legs are one of the best ways to access private aviation at a fraction of the cost.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Private Jet vs First Class — Why Charter Wins</h2>
          <p className="mb-4 leading-relaxed">The comparison between first class and private aviation is straightforward when you account for the full picture. In first class, you depart when the airline decides, from the terminal they assign, and land at the hub they serve. In a private jet from Van Nuys, you depart when you want, skip security entirely, and land at the airport closest to your actual destination.</p>
          <p className="leading-relaxed">For a group of 4 traveling LA to New York, the per-person cost of a super-midsize charter often approaches or matches business class on a legacy carrier — with a completely private cabin, custom catering, pets welcome, and zero schedule inflexibility. NexAssist will give you the honest comparison for your specific route.</p>
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
