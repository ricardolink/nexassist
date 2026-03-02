"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const brands = [
  "Rolls-Royce", "Lamborghini", "NetJets", "Four Seasons", "Bugatti",
  "Ferrari", "Aston Martin", "Bentley", "Ritz-Carlton", "Gulfstream",
  "Porsche", "McLaren", "One&Only", "Aman Resorts", "Maybach",
  "Bombardier", "Sunseeker", "Quintessentially",
];

const services = [
  { icon: "✈️", title: "Private Aviation", desc: "Charter world-class aircraft. Light jets to ultra-long-range wide-body — your schedule, your route." },
  { icon: "🚗", title: "Exotic Automobiles", desc: "Ferraris, Lamborghinis, Rolls-Royces delivered to your door. Daily, weekly, or extended." },
  { icon: "🏡", title: "Luxury Villas", desc: "Curated private residences across the world's most coveted destinations, fully staffed." },
  { icon: "⛵", title: "Yacht Charters", desc: "Sail the Mediterranean or Caribbean in style. From superyachts to intimate sailing vessels." },
  { icon: "🎭", title: "VIP Access", desc: "Front-row seats, backstage access, exclusive galas, sporting events, and private showcases." },
  { icon: "🍽️", title: "Fine Dining", desc: "Reservations at the world's most exclusive restaurants — including fully booked Michelin stars." },
];

const steps = [
  { num: "01", title: "Request", desc: "Tell us exactly what you want. Details, dates, budget, preferences — in text. We listen." },
  { num: "02", title: "Match", desc: "Our network connects you with verified luxury partners within hours. No guesswork." },
  { num: "03", title: "Experience", desc: "Everything is arranged to perfection. You simply arrive and enjoy." },
];

const stats = [
  { value: "500+", label: "Vetted Partners" },
  { value: "48h", label: "Avg. Response" },
  { value: "30+", label: "Countries Covered" },
  { value: "100%", label: "Discreet" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch { setStatus("error"); }
  }

  return (
    <div className="bg-grid">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 glow-gold pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A962]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 fade-up">
            <div className="w-8 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962] text-xs tracking-[0.35em] uppercase font-medium">Members Only Concierge</span>
            <div className="w-8 h-px bg-[#C9A962]/60" />
          </div>

          <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-[1.05] mb-6 fade-up-delay-1">
            <span className="text-white">Life Is Short.</span>
            <br />
            <span className="shimmer-gold">Live Exceptionally.</span>
          </h1>

          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-up-delay-2">
            One request connects you to private jets, exotic cars, luxury villas, and world-class experiences — arranged with discretion and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up-delay-3">
            <Link href="/signup" className="btn-gold px-10 py-4 rounded-sm text-sm">
              Request Access
            </Link>
            <Link href="/#how-it-works" className="px-10 py-4 rounded-sm text-sm border border-white/20 text-white/70 hover:border-[#C9A962]/50 hover:text-white transition-all tracking-widest uppercase">
              Discover More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A962]/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-[#C9A962]/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-playfair text-4xl font-bold text-gold-gradient mb-1">{s.value}</div>
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 bg-[#C9A962]/5 overflow-hidden border-y border-[#C9A962]/08">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="mx-14 text-white/25 text-xs tracking-[0.3em] uppercase font-medium">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">The Process</span>
              <div className="w-6 h-px bg-[#C9A962]/50" />
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white">Effortlessly Simple</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative p-10 text-center group">
                {i < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#C9A962]/20 to-transparent" />}
                <div className="font-playfair text-7xl font-bold text-[#C9A962]/08 mb-4 group-hover:text-[#C9A962]/15 transition-colors leading-none">{step.num}</div>
                <div className="w-10 h-px bg-[#C9A962]/40 mx-auto mb-5" />
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">What We Arrange</span>
              <div className="w-6 h-px bg-[#C9A962]/50" />
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white">Every Desire, <span className="text-gold-gradient">Fulfilled</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A962]/08">
            {services.map((s) => (
              <div key={s.title} className="bg-[#0A1628] p-10 group hover:bg-[#0D1F3C] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/0 to-[#C9A962]/0 group-hover:from-[#C9A962]/03 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl mb-6">{s.icon}</div>
                  <div className="w-8 h-px bg-[#C9A962]/40 mb-5" />
                  <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#C9A962] transition-colors">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#C9A962]/60 text-xs tracking-[0.15em] uppercase group-hover:text-[#C9A962] transition-colors">
                    <span>Enquire</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-sm border border-[#C9A962]/20 p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/06 via-transparent to-[#C9A962]/03" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#C9A962]/50" />
                <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">For Providers</span>
                <div className="w-6 h-px bg-[#C9A962]/50" />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Join Our Partner Network</h2>
              <p className="text-white/45 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Connect with high-net-worth clients actively seeking premium experiences. Vetted, exclusive, and discreet.
              </p>
              <Link href="/partner/onboarding" className="btn-gold px-10 py-4 rounded-sm text-sm inline-block">
                Apply as a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#C9A962]/50" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Coming Soon</span>
            <div className="w-6 h-px bg-[#C9A962]/50" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">The NexAssist App</h2>
          <p className="text-white/40 text-base mb-10 leading-relaxed">
            Request anything, from anywhere. iOS & Android — launching soon. Join the private waitlist.
          </p>

          {status === "done" ? (
            <div className="flex items-center justify-center gap-3 text-[#C9A962]">
              <span className="text-lg">✓</span>
              <span className="font-playfair text-xl">You&apos;re on the list.</span>
            </div>
          ) : (
            <form onSubmit={joinWaitlist} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-[#C9A962]/25 rounded-sm overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent text-white placeholder-white/30 px-5 py-4 text-sm focus:outline-none border-r border-[#C9A962]/20"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold px-6 py-4 text-xs disabled:opacity-50"
              >
                {status === "loading" ? "..." : "Join"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#C9A962]/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded border border-[#C9A962]/50 flex items-center justify-center">
              <span className="text-[#C9A962] text-xs font-bold">N</span>
            </div>
            <span className="font-playfair text-lg font-bold text-white/80">NexAssist</span>
          </div>
          <p className="text-white/25 text-xs tracking-wider">© {new Date().getFullYear()} NexAssist. All rights reserved.</p>
          <div className="flex gap-6 text-xs tracking-[0.15em] uppercase text-white/30">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="hover:text-[#C9A962] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
