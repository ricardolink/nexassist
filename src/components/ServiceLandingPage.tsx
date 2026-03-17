"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RequestModal from "@/components/RequestModal";

const ALL_SERVICES = [
  { label: "Exotic Car Rental",   href: "/exotic-car-rental-los-angeles",   icon: "🏎️" },
  { label: "Chauffeur Service",   href: "/chauffeur-service-los-angeles",    icon: "🎩" },
  { label: "Private Jets",        href: "/private-jet-charter-los-angeles",  icon: "✈️" },
  { label: "Yacht Charter",       href: "/yacht-charter-los-angeles",        icon: "⚓" },
  { label: "Luxury Villas",       href: "/luxury-villa-rental-los-angeles",  icon: "🏡" },
  { label: "Car Sales",           href: "/car-sales-los-angeles",            icon: "🔑" },
  { label: "Fine Watches",        href: "/luxury-watches-los-angeles",       icon: "⌚" },
  { label: "Designer Bags",       href: "/designer-bags-los-angeles",        icon: "👜" },
  { label: "Luxury Travel",       href: "/luxury-travel-los-angeles",        icon: "🌍" },
];

export interface ServiceItem {
  name: string;
  sub?: string;
  img: string;
  color?: string;
  tags?: string[];
}

export interface AreaItem {
  name: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface StepItem {
  n: string;
  title: string;
  body: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  body: string;
}

export interface ServiceLandingConfig {
  slug: string;                  // for the request modal prefill
  serviceType: string;           // matches RequestModal serviceType
  heroImg: string;
  heroTagline: string;
  heroTitle: string;             // HTML-safe, use <br> manually
  heroTitleGold: string;         // gold part
  heroSubtitle: string;
  badge: string;                 // e.g. "Los Angeles · 24/7 Concierge"
  gridTitle: string;
  gridSubtitle: string;
  items: ServiceItem[];
  itemsFooter?: string;          // optional "Looking for X?" text
  stepsTitle: string;
  steps: StepItem[];
  areasTitle?: string;
  areas?: string[];
  areasNote?: string;
  whyTitle: string;
  why: WhyItem[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaNote?: string;
}

export default function ServiceLandingPage({ cfg }: { cfg: ServiceLandingConfig }) {
  const [showRequest, setShowRequest] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cfg.heroImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/70 via-[#080d18]/60 to-[#080d18]" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24">
          <p className="text-[#C9A962] text-[9px] tracking-[0.55em] uppercase mb-5">{cfg.badge}</p>
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {cfg.heroTitle} <br />
            <span className="text-[#C9A962]">{cfg.heroTitleGold}</span>
          </h1>
          <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">{cfg.heroSubtitle}</p>
          <button
            onClick={() => setShowRequest(true)}
            className="btn-gold px-10 py-4 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold"
          >
            Request Now →
          </button>
          <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
            {["24/7 Available", "Same-Day Service", "Beverly Hills · Malibu · LA", "Confidential"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/30 text-[11px] tracking-wider">
                <div className="w-1 h-1 rounded-full bg-[#C9A962]/60" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Items Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Available Now</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">{cfg.gridTitle}</h2>
          <p className="text-white/35 text-sm max-w-xl mx-auto">{cfg.gridSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cfg.items.map((item) => (
            <div
              key={item.name}
              className="relative rounded-sm overflow-hidden group cursor-pointer border border-white/6 hover:border-[#C9A962]/25 transition-all duration-300"
              onClick={() => setShowRequest(true)}
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={`${item.name} ${cfg.serviceType} Los Angeles`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/30 to-transparent" />
              </div>
              <div className="p-5 bg-[#0c1222]">
                <div className="flex items-center gap-2 mb-1">
                  {item.color && <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />}
                  <h3 className="font-playfair text-xl font-bold text-white">{item.name}</h3>
                </div>
                {item.sub && <p className="text-white/35 text-xs mb-3">{item.sub}</p>}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[9px] tracking-[0.1em] text-white/40 border border-white/8 rounded-sm px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                )}
                <button className="text-[10px] tracking-[0.2em] uppercase text-[#C9A962]/60 hover:text-[#C9A962] transition-colors">
                  Request →
                </button>
              </div>
            </div>
          ))}
        </div>
        {cfg.itemsFooter && (
          <div className="text-center mt-8">
            <p className="text-white/25 text-sm mb-4">{cfg.itemsFooter}</p>
            <button onClick={() => setShowRequest(true)} className="text-[#C9A962]/70 hover:text-[#C9A962] text-[11px] tracking-[0.2em] uppercase border border-[#C9A962]/20 hover:border-[#C9A962]/50 px-6 py-3 rounded-sm transition-all">
              Request Anything →
            </button>
          </div>
        )}
      </section>

      {/* ── How it works ── */}
      <section className="border-t border-white/6 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">How It Works</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-14">{cfg.stepsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cfg.steps.map((s) => (
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

      {/* ── Areas ── */}
      {cfg.areas && cfg.areas.length > 0 && (
        <section className="bg-[#0a0f1e] py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Service Areas</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
              {cfg.areasTitle || "Serving All of Los Angeles"}
            </h2>
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {cfg.areas.map((area) => (
                <div key={area} className="flex items-center gap-2 border border-[#C9A962]/15 bg-[#C9A962]/4 rounded-sm px-4 py-2">
                  <div className="w-1 h-1 rounded-full bg-[#C9A962]/50" />
                  <span className="text-white/55 text-sm">{area}</span>
                </div>
              ))}
            </div>
            {cfg.areasNote && <p className="text-white/20 text-xs mt-6">{cfg.areasNote}</p>}
          </div>
        </section>
      )}

      {/* ── Why NexAssist ── */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-3">Why NexAssist</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">{cfg.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cfg.why.map((f) => (
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
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">{cfg.faqTitle}</h2>
          </div>
          <div className="space-y-2">
            {cfg.faqs.map((faq, i) => (
              <div key={i} className="border border-white/8 rounded-sm overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white/80 text-sm font-medium leading-snug">{faq.q}</span>
                  <svg className={`w-4 h-4 text-[#C9A962]/50 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-white/45 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>
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
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">{cfg.ctaTitle}</h2>
          <p className="text-white/35 text-sm mb-10 max-w-md mx-auto">{cfg.ctaSubtitle}</p>
          <button onClick={() => setShowRequest(true)} className="btn-gold px-12 py-5 rounded-sm text-[#080d18] text-sm tracking-[0.15em] uppercase font-bold">
            Request Now →
          </button>
          {cfg.ctaNote && <p className="text-white/20 text-xs mt-4">{cfg.ctaNote}</p>}
        </div>
      </section>

      {/* ── Internal service links — SEO silo ── */}
      <section className="border-t border-white/6 bg-[#080d18] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A962] text-[9px] tracking-[0.45em] uppercase mb-2">NexAssist Services</p>
          <h2 className="text-center font-playfair text-xl sm:text-2xl font-bold text-white mb-8">
            Every Luxury Service. One Concierge.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {ALL_SERVICES.filter((s) => s.href !== `/${cfg.slug}`).map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center gap-2 border border-white/8 hover:border-[#C9A962]/30 bg-[#0c1222] hover:bg-[#C9A962]/5 rounded-sm px-3 py-4 transition-all group text-center"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-white/50 group-hover:text-white/80 text-[10px] tracking-[0.1em] leading-snug transition-colors">{s.label}</span>
              </Link>
            ))}
            <Link
              href="/"
              className="flex flex-col items-center gap-2 border border-[#C9A962]/15 hover:border-[#C9A962]/40 bg-[#C9A962]/5 rounded-sm px-3 py-4 transition-all group text-center"
            >
              <span className="text-xl">✦</span>
              <span className="text-[#C9A962]/60 group-hover:text-[#C9A962] text-[10px] tracking-[0.1em] leading-snug transition-colors">All Services</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/6 py-6 px-4 text-center">
        <Link href="/" className="text-white/25 hover:text-[#C9A962] text-[10px] tracking-[0.2em] uppercase transition-colors">
          ← Back to NexAssist
        </Link>
      </div>

      {showRequest && (
        <RequestModal
          onClose={() => setShowRequest(false)}
          onSuccess={() => setShowRequest(false)}
          prefill={{ serviceType: cfg.serviceType }}
        />
      )}
    </div>
  );
}
