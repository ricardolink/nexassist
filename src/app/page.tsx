"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const brands = [
  "Rolls-Royce", "Lamborghini", "NetJets", "Four Seasons", "Bugatti",
  "Ferrari", "Aston Martin", "Bentley", "Ritz-Carlton", "Gulfstream",
  "Porsche", "McLaren", "One&Only", "Aman Resorts", "Virgin Galactic",
];

const services = [
  {
    icon: "✈️",
    title: "Private Jets",
    desc: "Charter world-class aircraft for seamless global travel. Your schedule, your route, your terms.",
  },
  {
    icon: "🚗",
    title: "Exotic Cars",
    desc: "Drive the world's most coveted supercars. Ferraris, Lamborghinis, Rolls-Royces — delivered to you.",
  },
  {
    icon: "🏡",
    title: "Luxury Villas",
    desc: "Exclusive private residences in the world's most sought-after destinations.",
  },
  {
    icon: "⛵",
    title: "Yacht Charters",
    desc: "Set sail in style. From Mediterranean escapes to Caribbean adventures.",
  },
  {
    icon: "🎭",
    title: "VIP Events",
    desc: "Front-row access to premier events, galas, sporting fixtures and exclusive parties.",
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    desc: "Reservations at the world's most exclusive restaurants, curated for your palate.",
  },
];

const steps = [
  {
    num: "01",
    title: "Request",
    desc: "Tell us what you need — by text or voice. Destination, dates, budget, preferences.",
  },
  {
    num: "02",
    title: "Match",
    desc: "Our AI and curated partner network find the perfect fit within hours.",
  },
  {
    num: "03",
    title: "Experience",
    desc: "Sit back. Everything is arranged. All you have to do is show up.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWaitlistStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setWaitlistStatus("done");
        setEmail("");
      } else {
        setWaitlistStatus("error");
      }
    } catch {
      setWaitlistStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0D1F3C]/50 to-[#0A1628] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-6 font-inter">
            Premium Concierge Services
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Personal{" "}
            <span className="text-gold-gradient">Luxury Concierge</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            One request. Infinite possibilities. Private jets, exotic cars, luxury villas — all arranged for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-[#C9A962] text-[#0A1628] px-8 py-4 rounded font-semibold text-lg hover:bg-[#E2C98A] transition-colors"
            >
              Start Your Experience
            </Link>
            <Link
              href="/#how-it-works"
              className="border border-[#C9A962] text-[#C9A962] px-8 py-4 rounded font-semibold text-lg hover:bg-[#C9A962]/10 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-10 border-y border-[#C9A962]/20 overflow-hidden bg-[#0D1F3C]/40">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="mx-12 text-white/50 text-sm tracking-widest uppercase font-inter">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-3">The Process</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center group">
              <div className="text-5xl font-playfair font-bold text-[#C9A962]/30 mb-4 group-hover:text-[#C9A962]/60 transition-colors">
                {step.num}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-[#0D1F3C]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#112040] border border-[#C9A962]/20 rounded-xl p-8 hover:border-[#C9A962]/60 hover:bg-[#0D1F3C] transition-all group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#C9A962] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-[#112040] border border-[#C9A962]/30 rounded-2xl p-12">
          <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-4">For Providers</p>
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            List your luxury services and connect with high-net-worth clients actively seeking premium experiences.
          </p>
          <Link
            href="/partner/onboarding"
            className="bg-[#C9A962] text-[#0A1628] px-8 py-4 rounded font-semibold text-lg hover:bg-[#E2C98A] transition-colors inline-block"
          >
            Apply as a Partner
          </Link>
        </div>
      </section>

      {/* Mobile App Waitlist */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0D1F3C]/40 to-[#0A1628]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-3">Coming Soon</p>
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">The NexAssist App</h2>
          <p className="text-white/60 text-lg mb-8">
            Request anything, anywhere. iOS and Android launching soon. Join the waitlist for early access.
          </p>
          {waitlistStatus === "done" ? (
            <div className="text-[#C9A962] text-xl font-playfair">
              ✓ You&apos;re on the list. We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={joinWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-[#112040] border border-[#C9A962]/30 text-white placeholder-white/40 px-4 py-3 rounded focus:outline-none focus:border-[#C9A962]"
              />
              <button
                type="submit"
                disabled={waitlistStatus === "loading"}
                className="bg-[#C9A962] text-[#0A1628] px-6 py-3 rounded font-semibold hover:bg-[#E2C98A] transition-colors disabled:opacity-60"
              >
                {waitlistStatus === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
          {waitlistStatus === "error" && (
            <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/20 py-10 px-6 text-center text-white/40 text-sm">
        <p className="font-playfair text-[#C9A962] text-xl mb-4">NexAssist</p>
        <p>© {new Date().getFullYear()} NexAssist. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
        </div>
      </footer>
    </>
  );
}
