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

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Professional Chauffeur Service in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">Los Angeles is a city defined by its relationship with vehicles — but navigating it well requires more than a great car. It requires a professional driver who knows the city intimately, can adapt to traffic in real time, and delivers an experience that matches the quality of every other part of your day. NexAssist provides professional chauffeur service across all of Los Angeles, from Beverly Hills and Bel Air to Downtown, Santa Monica, and Orange County.</p>
          <p className="mb-4 leading-relaxed">Unlike rideshare apps and standard black car services, NexAssist is a personal concierge service. Your chauffeur is sourced specifically for your requirements — professional, discrete, and briefed on your schedule. One message is all it takes. Your concierge handles everything.</p>
          <p className="leading-relaxed">Whether you need a single airport transfer or a full-time driver for a week-long visit to Los Angeles, we have the vehicle and the professional to match.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Airport Transfers — LAX, Burbank & Van Nuys</h2>
          <p className="mb-4 leading-relaxed">Airport transfers are the most common chauffeur request in Los Angeles, and the standard matters. NexAssist arranges professional airport transfers from all major LA-area airports:</p>
          <ul className="space-y-3 list-none">
            <li><span className="text-[#C9A962] font-semibold">LAX (Los Angeles International)</span> — Our most-requested transfer. Your driver monitors your flight in real time, adjusts for delays, and has your vehicle ready at the terminal the moment you land. No waiting, no circling. Escalade, S-Class, or Rolls-Royce Ghost.</li>
            <li><span className="text-[#C9A962] font-semibold">Van Nuys (VNY)</span> — The preferred arrival point for private jet passengers in LA. We coordinate directly with FBO staff and have your vehicle on the tarmac when the stairs come down.</li>
            <li><span className="text-[#C9A962] font-semibold">Burbank (BUR)</span> — A faster, more relaxed alternative to LAX for passengers arriving from domestic destinations. We serve all terminals.</li>
            <li><span className="text-[#C9A962] font-semibold">Long Beach (LGB)</span> — Compact, efficient, and increasingly popular for business travelers. NexAssist covers all Long Beach Airport arrivals and departures.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Our Chauffeur Fleet in Los Angeles</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Cadillac Escalade</h3><p className="leading-relaxed">The most popular chauffeur vehicle in Los Angeles. The Escalade delivers commanding presence, exceptional comfort, and enough space for luggage after long flights. Available in standard and extended wheelbase configurations. Preferred for airport transfers, executive travel, and group transportation.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Rolls-Royce Ghost &amp; Phantom</h3><p className="leading-relaxed">The definitive choice for red carpet arrivals, high-profile meetings, and occasions where arrival matters as much as destination. The Rolls-Royce Ghost and Phantom offer a level of refinement that no other vehicle matches. Popular for film premieres, award shows, and luxury hotel transfers in Beverly Hills.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Mercedes-Benz Maybach S-Class</h3><p className="leading-relaxed">The Maybach S-Class redefines what a rear seat can be. Reclining massaging seats, panoramic roof, dedicated rear entertainment — for the passenger who expects the absolute best in ground transportation in Los Angeles.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Mercedes Sprinter (Group Transport)</h3><p className="leading-relaxed">For groups of 8–14, the executive Sprinter van provides a private lounge on wheels. Popular for corporate groups, wedding parties, and multi-stop itineraries across Los Angeles and Orange County.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Chauffeur Service for Corporate &amp; Events in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">NexAssist is the preferred chauffeur service for corporate clients, production companies, and event coordinators across Los Angeles. Our corporate clients rely on us for:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Executive roadshows</strong> — Multi-stop business schedules managed by your personal concierge. Your driver knows the schedule and the client.</li>
            <li><strong className="text-white">Film and TV productions</strong> — On-set vehicle coordination, talent transportation, and production logistics managed with precision.</li>
            <li><strong className="text-white">Conference and incentive travel</strong> — Groups of any size transferred between venues, hotels, and airports across the LA area.</li>
            <li><strong className="text-white">VIP client entertainment</strong> — Impress your most important clients with a Rolls-Royce or Maybach from hotel to restaurant to venue.</li>
          </ul>
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
