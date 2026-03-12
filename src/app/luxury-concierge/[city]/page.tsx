"use client";
import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import RequestModal from "@/components/RequestModal";
import { CITIES, CITY_MAP } from "@/lib/cities";

const SERVICES = [
  {
    label: "Exotic Car Rental",
    href: "/exotic-car-rental-los-angeles",
    badge: "Fleet",
    desc: "Ferrari · Lamborghini · Rolls-Royce · McLaren",
    photo: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=900&q=80",
  },
  {
    label: "Chauffeur Service",
    href: "/chauffeur-service-los-angeles",
    badge: "On Demand",
    desc: "Escalade · Maybach · Airport Transfers",
    photo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80",
  },
  {
    label: "Private Jets",
    href: "/private-jet-charter-los-angeles",
    badge: "Charter",
    desc: "Same-day charter · Any aircraft · Worldwide",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80",
  },
  {
    label: "Yacht Charter",
    href: "/yacht-charter-los-angeles",
    badge: "Pacific",
    desc: "Day charters · Superyachts · Pacific voyages",
    photo: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80",
  },
  {
    label: "Luxury Villas",
    href: "/luxury-villa-rental-los-angeles",
    badge: "Estates",
    desc: "Beachfront · Beverly Hills · Staffed estates",
    photo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
  },
  {
    label: "Car Sales",
    href: "/car-sales-los-angeles",
    badge: "Private Network",
    desc: "Buy or sell · Private network · Any make",
    photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
  },
  {
    label: "Fine Watches",
    href: "/luxury-watches-los-angeles",
    badge: "Horology",
    desc: "Rolex · Patek Philippe · AP · Richard Mille",
    photo: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80",
  },
  {
    label: "Designer Bags",
    href: "/designer-bags-los-angeles",
    badge: "Couture",
    desc: "Hermès Birkin · Chanel · Louis Vuitton",
    photo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
  },
  {
    label: "Luxury Travel",
    href: "/luxury-travel-los-angeles",
    badge: "Worldwide",
    desc: "Bespoke itineraries · 5-star · Worldwide",
    photo: "https://images.unsplash.com/photo-1540541338537-1220e2be1afe?w=900&q=80",
  },
];

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = use(params);
  const city = CITY_MAP[citySlug];
  if (!city) notFound();

  const [showRequest, setShowRequest] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nearbyFull = city.nearby
    .map((s) => CITY_MAP[s])
    .filter(Boolean);

  const faqs = [
    {
      q: `Does NexAssist serve ${city.name}?`,
      a: `Yes. NexAssist provides full luxury concierge services throughout ${city.name} and all of ${city.county}. Whether you need an exotic car, private jet, yacht, luxury villa, or any other premium service — your personal concierge handles everything.`,
    },
    {
      q: `What exotic cars can I rent in ${city.name}?`,
      a: `Through NexAssist you can rent Ferrari, Lamborghini, Rolls-Royce, McLaren, Bentley, Porsche, BMW M-Series, Mercedes-AMG, and more in ${city.name}. Same-day delivery available.`,
    },
    {
      q: `Can I get a chauffeur in ${city.name}?`,
      a: `Yes. NexAssist arranges professional chauffeur service in ${city.name} 24/7 — airport transfers to ${city.county === "Orange County" ? "John Wayne (SNA)" : "LAX or Burbank"}, corporate travel, events, and city-wide transport in Cadillac Escalade, Rolls-Royce, or Mercedes-Maybach.`,
    },
    {
      q: `How quickly can NexAssist arrange a service in ${city.name}?`,
      a: `Most requests in ${city.name} are confirmed the same day. Send one message to your personal concierge — they'll handle sourcing, logistics, and delivery directly to you.`,
    },
    {
      q: `Can NexAssist source a luxury villa or estate near ${city.name}?`,
      a: `Yes. We source private estates, luxury villas, and off-market properties throughout ${city.name} and the surrounding ${city.county} area — staffed and ready for short or extended stays.`,
    },
  ];

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${city.heroImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/65 via-[#080d18]/55 to-[#080d18]" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24">
          <p className="text-[#C9A962] text-[9px] tracking-[0.55em] uppercase mb-4">{city.county} · 24/7 Personal Concierge</p>
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Luxury Concierge<br />
            <span className="text-[#C9A962]">{city.name}</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed italic font-playfair">{city.tagline}</p>
          <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">{city.about}</p>
          <button
            onClick={() => setShowRequest(true)}
            className="btn-gold px-10 py-4 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold"
          >
            Request a Service →
          </button>
          <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
            {["24/7 Available", "Same-Day Service", "All of " + city.county, "Confidential"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/30 text-[11px] tracking-wider">
                <div className="w-1 h-1 rounded-full bg-[#C9A962]/60" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Landmarks / Area ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-white/25 text-[9px] tracking-[0.4em] uppercase mb-4">Serving</p>
        <div className="flex flex-wrap justify-center gap-2">
          {city.landmarks.map((l) => (
            <span key={l} className="border border-[#C9A962]/15 bg-[#C9A962]/4 text-white/55 text-xs px-4 py-2 rounded-sm">{l}</span>
          ))}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#060911]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/18 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#C9A962] text-[9px] tracking-[0.55em] uppercase mb-4">Every Category</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              What NexAssist<br />Provides in <span className="text-[#C9A962]">{city.name}</span>
            </h2>
            <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
              One concierge. Every luxury category. Available 24/7 throughout {city.name} and {city.county}.
            </p>
            <div className="w-10 h-px bg-[#C9A962]/35 mx-auto mt-6" />
          </div>

          {/* Photo Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative h-[340px] overflow-hidden rounded-sm block"
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.07]"
                  style={{ backgroundImage: `url(${s.photo})` }}
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/55 to-[#060911]/10 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060911]/40 via-transparent to-transparent" />
                {/* Hover gold border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A962]/28 transition-colors duration-500 rounded-sm pointer-events-none" />

                {/* Top: badge */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.38em] uppercase text-[#C9A962]/75 bg-[#060911]/65 backdrop-blur-sm border border-[#C9A962]/18 px-3 py-1.5 rounded-sm">
                    {s.badge}
                  </span>
                  {/* Arrow appears on hover */}
                  <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0 bg-[#060911]/50 backdrop-blur-sm">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 9l7-7M9 9V2H2" stroke="#C9A962" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bottom: content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-playfair text-xl font-bold text-white mb-1.5 leading-tight">{s.label}</h3>
                  <p className="text-white/38 text-[12px] leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2.5 text-[#C9A962]/55 group-hover:text-[#C9A962] transition-colors duration-400">
                    <div className="h-px bg-current transition-all duration-400 w-4 group-hover:w-7" />
                    <span className="text-[10px] tracking-[0.22em] uppercase">In {city.name}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Custom Request card */}
            <div
              onClick={() => setShowRequest(true)}
              className="group relative h-[340px] overflow-hidden rounded-sm cursor-pointer bg-[#0b1020] border border-[#C9A962]/10 hover:border-[#C9A962]/30 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center"
            >
              {/* Subtle radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full border border-[#C9A962]/18 group-hover:border-[#C9A962]/45 flex items-center justify-center mx-auto mb-5 transition-colors duration-400">
                  <span className="text-[#C9A962]/60 group-hover:text-[#C9A962] text-2xl transition-colors duration-400">✦</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Custom Request</h3>
                <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-[210px] mx-auto">
                  Something else in mind? Your concierge handles any luxury request in {city.name}.
                </p>
                <div className="flex items-center justify-center gap-2.5 text-[#C9A962]/50 group-hover:text-[#C9A962] transition-colors duration-400">
                  <div className="h-px bg-current w-4 group-hover:w-6 transition-all duration-400" />
                  <span className="text-[10px] tracking-[0.25em] uppercase">Ask Your Concierge</span>
                  <div className="h-px bg-current w-4 group-hover:w-6 transition-all duration-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-t border-white/6 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">How It Works</p>
          <h2 className="font-playfair text-3xl font-bold text-white mb-12">
            Luxury Concierge in {city.name} — Effortless
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Send One Message", body: `Tell your NexAssist concierge what you need in ${city.name}. Car, jet, yacht, villa — anything.` },
              { n: "02", title: "We Handle Everything", body: "Your concierge sources, books, and arranges every detail. You don't lift a finger." },
              { n: "03", title: "Delivered to You", body: `Your request arrives at your door in ${city.name}. Exactly as requested, on time, every time.` },
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
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0f1e] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">FAQ</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
              NexAssist in {city.name} — Common Questions
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/8 rounded-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white/80 text-sm font-medium leading-snug">{faq.q}</span>
                  <svg className={`w-4 h-4 text-[#C9A962]/50 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-white/45 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Cities ── */}
      {nearbyFull.length > 0 && (
        <section className="py-14 px-4 sm:px-6 border-t border-white/6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Also Serving</p>
            <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-8">
              Nearby Areas We Cover
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {nearbyFull.map((c) => (
                <Link
                  key={c.slug}
                  href={`/luxury-concierge/${c.slug}`}
                  className="border border-white/10 hover:border-[#C9A962]/40 text-white/45 hover:text-white/80 text-sm px-5 py-2.5 rounded-sm transition-all"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All Services Links ── */}
      <section className="border-t border-white/6 bg-[#080d18] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-2">NexAssist Services</p>
          <h2 className="text-center font-playfair text-xl sm:text-2xl font-bold text-white mb-8">
            Every Luxury Service. One Concierge.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href}
                className="flex flex-col items-center gap-2 border border-white/8 hover:border-[#C9A962]/30 bg-[#0c1222] hover:bg-[#C9A962]/5 rounded-sm px-3 py-4 transition-all group text-center">
                <span className="text-white/50 group-hover:text-white/80 text-[10px] tracking-[0.1em] leading-snug transition-colors">{s.label}</span>
              </Link>
            ))}
            <Link href="/" className="flex flex-col items-center gap-2 border border-[#C9A962]/15 hover:border-[#C9A962]/40 bg-[#C9A962]/5 rounded-sm px-3 py-4 transition-all group text-center">
              <span className="text-[#C9A962]/60 group-hover:text-[#C9A962] text-[10px] tracking-[0.1em] leading-snug transition-colors">✦ All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 border-t border-[#C9A962]/10 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-4">Ready?</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Concierge in {city.name} is Ready.
          </h2>
          <p className="text-white/35 text-sm mb-8 max-w-md mx-auto">
            Any luxury request, handled in {city.name}. One message. Same-day service. 24/7.
          </p>
          <button onClick={() => setShowRequest(true)} className="btn-gold px-12 py-4 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold">
            Request Now →
          </button>
        </div>
      </section>

      <div className="border-t border-white/6 py-6 px-4 text-center">
        <Link href="/" className="text-white/25 hover:text-[#C9A962] text-[10px] tracking-[0.2em] uppercase transition-colors">← Back to NexAssist</Link>
      </div>

      {showRequest && (
        <RequestModal onClose={() => setShowRequest(false)} onSuccess={() => setShowRequest(false)} />
      )}
    </div>
  );
}
