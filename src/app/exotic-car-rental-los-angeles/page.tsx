"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RequestModal from "@/components/RequestModal";

// Note: metadata is exported from a separate layout or via generateMetadata in a parent.
// For client components, add metadata in the nearest server parent or use next-seo patterns.

const CARS = [
  { make: "Ferrari", models: ["Roma", "SF90 Stradale", "296 GTB", "Portofino M"], img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80", color: "#e53e3e" },
  { make: "Lamborghini", models: ["Huracán EVO", "Urus Performante", "Revuelto"], img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", color: "#f59e0b" },
  { make: "Rolls-Royce", models: ["Ghost", "Cullinan", "Spectre", "Wraith"], img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80", color: "#C9A962" },
  { make: "McLaren", models: ["720S", "Artura", "GT", "765LT"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", color: "#f97316" },
  { make: "Bentley", models: ["Continental GT", "Bentayga", "Flying Spur"], img: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80", color: "#34d399" },
  { make: "Porsche", models: ["911 Turbo S", "Taycan", "Cayenne Turbo GT"], img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", color: "#60a5fa" },
];

const AREAS = [
  "Beverly Hills", "Malibu", "West Hollywood", "Santa Monica",
  "Hollywood Hills", "Bel Air", "Brentwood", "Century City",
  "Downtown LA", "Irvine", "Newport Beach", "Orange County",
];

const FAQS = [
  {
    q: "How do I rent an exotic car in Los Angeles?",
    a: "Send NexAssist a message with the car you want, your date, and pickup location. Your personal concierge handles everything — sourcing, paperwork, and delivery directly to you. Most requests are confirmed the same day.",
  },
  {
    q: "What exotic cars are available in LA?",
    a: "Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, Mercedes-AMG, Aston Martin, and more. If you have a specific car in mind, let us know — we'll find it.",
  },
  {
    q: "Do you deliver to Beverly Hills, Malibu, and other LA areas?",
    a: "Yes. We deliver to Beverly Hills, Malibu, West Hollywood, Santa Monica, Hollywood Hills, Bel Air, Downtown LA, Irvine, Newport Beach, and anywhere else in the greater LA area.",
  },
  {
    q: "How fast can you get me an exotic car?",
    a: "NexAssist is 24/7. Same-day delivery is available for most requests across Los Angeles. For peak weekends or rare vehicles, we recommend 48 hours notice.",
  },
  {
    q: "Do I need a special license to rent an exotic car?",
    a: "A valid driver's license and proof of insurance are required. Your concierge will walk you through any requirements specific to the vehicle you choose.",
  },
  {
    q: "Can I rent an exotic car for a photoshoot or event?",
    a: "Absolutely. We regularly arrange exotic car rentals for photoshoots, music videos, weddings, corporate events, and brand activations across Los Angeles.",
  },
];

export default function ExoticCarRentalLA() {
  const [showRequest, setShowRequest] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/70 via-[#080d18]/60 to-[#080d18]" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24">
          <p className="text-[#C9A962] text-[9px] tracking-[0.55em] uppercase mb-5">Los Angeles · 24/7 Concierge</p>
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Exotic Car Rental<br />
            <span className="text-[#C9A962]">Los Angeles</span>
          </h1>
          <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Ferrari. Lamborghini. Rolls-Royce. McLaren. One text to your personal concierge — same-day delivery anywhere in LA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setShowRequest(true)}
              className="btn-gold px-10 py-4 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold"
            >
              Request a Car →
            </button>
            <a href="tel:" className="px-8 py-4 rounded-sm text-sm tracking-[0.15em] uppercase border border-white/15 text-white/50 hover:border-[#C9A962]/40 hover:text-white/80 transition-all">
              Call Us Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
            {["24/7 Available", "Same-Day Delivery", "Beverly Hills · Malibu · LA", "No Hidden Fees"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/30 text-[11px] tracking-wider">
                <div className="w-1 h-1 rounded-full bg-[#C9A962]/60" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">The Fleet</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
            Exotic & Luxury Cars Available in LA
          </h2>
          <p className="text-white/35 text-sm max-w-xl mx-auto">
            Every car sourced through vetted partners. Delivered to your door — Beverly Hills, Malibu, or anywhere in Los Angeles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARS.map((car) => (
            <div
              key={car.make}
              className="relative rounded-sm overflow-hidden group cursor-pointer border border-white/6 hover:border-[#C9A962]/25 transition-all duration-300"
              onClick={() => setShowRequest(true)}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={car.img} alt={`${car.make} rental Los Angeles`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 bg-[#0c1222]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: car.color }} />
                  <h3 className="font-playfair text-xl font-bold text-white">{car.make}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {car.models.map((m) => (
                    <span key={m} className="text-[9px] tracking-[0.1em] text-white/40 border border-white/8 rounded-sm px-2 py-0.5">{m}</span>
                  ))}
                </div>
                <button className="text-[10px] tracking-[0.2em] uppercase text-[#C9A962]/60 hover:text-[#C9A962] transition-colors">
                  Request this car →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/25 text-sm mb-4">Looking for something else? Aston Martin, Mercedes-AMG, Bugatti, Koenigsegg — just ask.</p>
          <button onClick={() => setShowRequest(true)} className="text-[#C9A962]/70 hover:text-[#C9A962] text-[11px] tracking-[0.2em] uppercase border border-[#C9A962]/20 hover:border-[#C9A962]/50 px-6 py-3 rounded-sm transition-all">
            Request Any Car →
          </button>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-t border-white/6 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">How It Works</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-14">
            Renting an Exotic Car in LA Has Never Been Simpler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Send One Message", body: "Tell your concierge what car you want, when, and where in LA. That's it." },
              { n: "02", title: "We Handle Everything", body: "Your concierge sources the car, handles the paperwork, and arranges delivery anywhere in Los Angeles." },
              { n: "03", title: "Drive Your Dream Car", body: "The car arrives at your location — Beverly Hills, Malibu, your hotel, or anywhere across LA." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="inline-flex w-12 h-12 rounded-full border border-[#C9A962]/20 items-center justify-center mb-4">
                  <span className="font-playfair text-[#C9A962] text-sm font-bold">{s.n}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setShowRequest(true)} className="btn-gold mt-12 px-10 py-4 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold">
            Get Started →
          </button>
        </div>
      </section>

      {/* ── LA Areas we serve ── */}
      <section className="bg-[#0a0f1e] py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Delivery Areas</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
            Exotic Car Delivery Across All of Los Angeles
          </h2>
          <p className="text-white/35 text-sm mb-10 max-w-xl mx-auto">
            We deliver exotic and luxury car rentals to every corner of LA — from the Hollywood Hills to the Malibu coast.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {AREAS.map((area) => (
              <div key={area} className="flex items-center gap-2 border border-[#C9A962]/15 bg-[#C9A962]/4 rounded-sm px-4 py-2">
                <div className="w-1 h-1 rounded-full bg-[#C9A962]/50" />
                <span className="text-white/55 text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-6">+ All surrounding areas. Don't see your city? Just ask — we'll get there.</p>
        </div>
      </section>

      {/* ── Why NexAssist ── */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Why NexAssist</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              The Smartest Way to Rent an Exotic Car in Los Angeles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "⚡", title: "Same-Day Available", body: "Request in the morning, drive by afternoon. Available 24/7 across LA." },
              { icon: "🤝", title: "Vetted Partners Only", body: "Every car in our network is maintained to the highest standard. No surprises." },
              { icon: "📍", title: "Delivered to You", body: "Your hotel, home, or office — we bring the car to you anywhere in Los Angeles." },
              { icon: "💬", title: "One Point of Contact", body: "No phone trees, no apps. One concierge handles everything start to finish." },
              { icon: "🎬", title: "Photoshoots & Events", body: "Music videos, brand activations, weddings. We handle exotic car logistics for LA's biggest events." },
              { icon: "🔒", title: "100% Confidential", body: "Your privacy matters. Every request handled with complete discretion." },
            ].map((f) => (
              <div key={f.title} className="bg-[#0c1222] border border-white/8 rounded-sm p-6 hover:border-[#C9A962]/20 transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0f1e] py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">FAQ</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              Exotic Car Rental in Los Angeles — Questions Answered
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-white/8 rounded-sm overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white/80 text-sm font-medium leading-snug">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-[#C9A962]/50 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-white/45 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6 border-t border-[#C9A962]/10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-4">Ready?</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Next Exotic Car<br />is One Message Away.
          </h2>
          <p className="text-white/35 text-sm mb-10 max-w-md mx-auto">
            Los Angeles's most exclusive concierge for exotic car rentals. Ferrari, Lamborghini, Rolls-Royce, and more — delivered to you.
          </p>
          <button
            onClick={() => setShowRequest(true)}
            className="btn-gold px-12 py-5 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold"
          >
            Request Your Car Now →
          </button>
          <p className="text-white/20 text-xs mt-4">Available 24/7 · Beverly Hills · Malibu · Hollywood · All of LA</p>
        </div>
      </section>

      {/* Footer link */}
      <div className="border-t border-white/6 py-8 px-4 text-center">
        <Link href="/" className="text-white/25 hover:text-[#C9A962] text-[10px] tracking-[0.2em] uppercase transition-colors">
          ← Back to NexAssist
        </Link>
      </div>

      {/* Request modal */}
      {showRequest && (
        <RequestModal
          onClose={() => setShowRequest(false)}
          onSuccess={() => setShowRequest(false)}
          prefill={{ serviceType: "Exotic Car Rental" }}
        />
      )}
    </div>
  );
}
