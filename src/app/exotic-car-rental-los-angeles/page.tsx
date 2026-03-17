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
      img: "/cars/huracan.jpg",
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
      img: "/cars/mclaren.png",
      color: "#f97316",
    },
    {
      name: "Bentley",
      tags: ["Continental GT", "Bentayga", "Flying Spur"],
      img: "/cars/bentley.jpg",
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
      img: "/cars/bmw-x6m.png",
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
      img: "/cars/land-rover.jpg",
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

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Exotic Car Rental in Los Angeles — The Complete Guide</h2>
          <p className="mb-4 leading-relaxed">Los Angeles is one of the few cities in the world where renting an exotic car isn&apos;t just a luxury — it&apos;s a rite of passage. From the winding curves of Mulholland Drive to the Pacific Coast Highway at sunset, LA was built for driving. Whether you&apos;re visiting for a weekend, hosting a client, or simply want to experience what it feels like to pilot a Ferrari through Beverly Hills, NexAssist makes it effortless.</p>
          <p className="mb-4 leading-relaxed">Unlike traditional car rental agencies, NexAssist is a personal concierge service. You don&apos;t browse a website and pick from whatever&apos;s in stock. You tell us what you want — the car, the date, the location — and your dedicated concierge sources it, handles all the paperwork, and delivers it directly to you. No rental counter. No waiting. No surprises.</p>
          <p className="leading-relaxed">Our network spans the full range of exotic and luxury vehicles available in Los Angeles, from everyday supercars like the Porsche 911 Turbo S and Lamborghini Huracán to one-of-a-kind machines like the Bugatti Chiron or Koenigsegg Agera. Whatever you have in mind, we can get it.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Popular Exotic Cars to Rent in Los Angeles</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Ferrari Rental Los Angeles</h3>
              <p className="leading-relaxed">The Ferrari Roma, 296 GTB, and SF90 Stradale are consistently our most requested vehicles in LA. There&apos;s nothing quite like the sound of a Ferrari V8 echoing through the canyons above Malibu or cruising down Rodeo Drive. Same-day Ferrari rentals are available throughout Beverly Hills, West Hollywood, and the greater LA area.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Lamborghini Rental Los Angeles</h3>
              <p className="leading-relaxed">The Lamborghini Huracán EVO and Urus Performante are two of the most-photographed cars in Los Angeles — and for good reason. Whether you want the raw excitement of the Huracán on an open highway or the commanding presence of the Urus through Beverly Hills, NexAssist delivers both to your door.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Rolls-Royce Rental Los Angeles</h3>
              <p className="leading-relaxed">For those who prefer to arrive rather than drive, the Rolls-Royce Ghost and Cullinan represent the pinnacle of automotive luxury. Our Rolls-Royce rentals in Los Angeles are popular for weddings, red carpet events, business meetings, and airport arrivals. Complete confidentiality guaranteed.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">McLaren Rental Los Angeles</h3>
              <p className="leading-relaxed">The McLaren 720S and 765LT are engineering masterpieces that reward the driver at every speed. McLaren rentals in LA are a favorite among automotive enthusiasts who want a track-capable supercar with real-world usability. Available for day rentals, track days, and weekend getaways.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Bentley Rental Los Angeles</h3>
              <p className="leading-relaxed">The Bentley Continental GT and Bentayga strike the perfect balance between sporting performance and grand touring comfort. Whether you&apos;re heading up the coast to Santa Barbara or need the most refined SUV in Los Angeles, the Bentley delivers every time.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Best Drives for an Exotic Car in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">Renting an exotic car in LA is only half the experience. Knowing where to drive it makes all the difference. Here are the routes our clients love most:</p>
          <ul className="space-y-3 list-none">
            <li><span className="text-[#C9A962] font-semibold">Mulholland Drive</span> — The classic LA canyon run. The winding road between the Hollywood Hills and the Santa Monica Mountains is one of the most exhilarating drives in Southern California.</li>
            <li><span className="text-[#C9A962] font-semibold">Pacific Coast Highway (PCH)</span> — Malibu to Santa Barbara along the Pacific Ocean. Best in the morning with a Ferrari or open-top Bentley. Spectacular year-round.</li>
            <li><span className="text-[#C9A962] font-semibold">Rodeo Drive, Beverly Hills</span> — For those who want to see and be seen. Cruise Rodeo Drive in a Lamborghini or Rolls-Royce and you&apos;re part of LA&apos;s iconic luxury landscape.</li>
            <li><span className="text-[#C9A962] font-semibold">Angeles Crest Highway</span> — For the serious driver. The 66-mile mountain road through the San Gabriel Mountains is a real-world test of any supercar&apos;s capabilities.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Exotic Car Rentals for Special Events in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">NexAssist handles exotic car logistics for some of LA&apos;s biggest events and productions. Our event clients include:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Music video productions</strong> — We&apos;ve sourced fleets of Ferraris, Lamborghinis, and custom vehicles for music video shoots across Los Angeles.</li>
            <li><strong className="text-white">Weddings and proposals</strong> — Arrive in a Rolls-Royce Phantom or Bentley Flying Spur. We coordinate timing, decor, and the full arrival experience.</li>
            <li><strong className="text-white">Corporate events and client entertainment</strong> — Impress clients with a day driving experience or arrange a fleet for a corporate event in Beverly Hills.</li>
            <li><strong className="text-white">Brand activations and photoshoots</strong> — We source and position vehicles for commercial shoots, brand campaigns, and influencer content throughout LA.</li>
            <li><strong className="text-white">Red carpet and premieres</strong> — Hollywood premieres, award shows, and film festivals. Arrive in a vehicle that commands attention.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Why Choose NexAssist for Exotic Car Rentals in Los Angeles?</h2>
          <p className="mb-4 leading-relaxed">There are several companies offering exotic car rentals in Los Angeles. Here&apos;s what makes NexAssist different:</p>
          <p className="mb-4 leading-relaxed"><strong className="text-white">One contact, total concierge.</strong> You don&apos;t deal with multiple companies or navigate complex rental agreements. One message to your NexAssist concierge handles everything — sourcing, delivery, paperwork, and any special requests. It&apos;s genuinely effortless.</p>
          <p className="mb-4 leading-relaxed"><strong className="text-white">Access to vehicles that aren&apos;t publicly listed.</strong> Our partner network includes private collectors and exclusive dealers who don&apos;t advertise their inventory. If you want something rare — a specific color Ferrari, a one-off Bugatti, a Koenigsegg — we can often source it when nobody else can.</p>
          <p className="mb-4 leading-relaxed"><strong className="text-white">Total discretion.</strong> We understand that privacy matters. Our clients include entertainment industry professionals, business executives, and high-net-worth individuals who require complete confidentiality. Your rental details are never shared.</p>
          <p className="leading-relaxed"><strong className="text-white">Available 24/7 across all of Los Angeles.</strong> Whether you need a Ferrari in Beverly Hills at 7 AM or a Lamborghini delivered to your Malibu rental at midnight, we operate around the clock across every neighborhood in greater Los Angeles.</p>
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
