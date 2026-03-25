"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV_SERVICES = [
  { label: "Exotic Car Rental", href: "/exotic-car-rental-los-angeles", icon: "🏎" },
  { label: "Chauffeur Service", href: "/chauffeur-service-los-angeles", icon: "🚘" },
  { label: "Private Jet Charter", href: "/private-jet-charter-los-angeles", icon: "✈️" },
  { label: "Yacht Charter", href: "/yacht-charter-los-angeles", icon: "⛵" },
  { label: "Luxury Villas", href: "/luxury-villa-rental-los-angeles", icon: "🏡" },
  { label: "Fine Watches", href: "/luxury-watches-los-angeles", icon: "⌚" },
  { label: "Designer Bags", href: "/designer-bags-los-angeles", icon: "👜" },
  { label: "Luxury Travel", href: "/luxury-travel-los-angeles", icon: "🌍" },
  { label: "Car Sales", href: "/car-sales-los-angeles", icon: "🔑" },
];

export default function Navbar({ onRequestClick }: { onRequestClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080d18]/95 backdrop-blur-xl border-b border-[#C9A962]/12 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Diamond mark */}
          <div className="relative w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              {/* Outer diamond */}
              <polygon
                points="18,1.5 34.5,18 18,34.5 1.5,18"
                stroke="#C9A962"
                strokeWidth="0.9"
                strokeOpacity="0.85"
              />
              {/* Inner diamond */}
              <polygon
                points="18,7 31,18 18,29 5,18"
                stroke="#C9A962"
                strokeWidth="0.45"
                strokeOpacity="0.3"
              />
              {/* N letterform */}
              <path
                d="M12 24.5V11.5L24 24.5V11.5"
                stroke="#C9A962"
                strokeWidth="1.6"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none gap-[2px]">
            <span className="font-playfair text-[15px] font-bold tracking-[0.22em] text-white group-hover:text-[#C9A962] transition-colors uppercase">
              Nex<span className="text-[#C9A962]">Assist</span>
            </span>
            <span className="text-[7px] tracking-[0.55em] text-white/25 uppercase font-light">
              Personal Concierge
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-7 text-[10px] tracking-[0.2em] uppercase text-white/50">

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-[#C9A962] transition-colors"
              >
                Services
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6" fill="none"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] bg-[#080d18] border border-[#C9A962]/15 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
                >
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent" />
                  <div className="grid grid-cols-3 gap-0">
                    {NAV_SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex flex-col items-start gap-1 px-4 py-3.5 hover:bg-[#C9A962]/5 border-b border-r border-white/5 last:border-r-0 transition-colors group"
                      >
                        <span className="text-base">{s.icon}</span>
                        <span className="text-white/60 group-hover:text-[#C9A962] text-[9px] tracking-[0.1em] leading-snug transition-colors normal-case font-normal">{s.label}</span>
                      </Link>
                    ))}
                    <Link
                      href="/blog"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col items-start gap-1 px-4 py-3.5 hover:bg-[#C9A962]/5 border-b border-white/5 transition-colors group"
                    >
                      <span className="text-base">📖</span>
                      <span className="text-white/60 group-hover:text-[#C9A962] text-[9px] tracking-[0.1em] leading-snug transition-colors normal-case font-normal">Blog & Guides</span>
                    </Link>
                  </div>
                  <div className="px-4 py-3 bg-[#060911] flex items-center justify-between">
                    <p className="text-white/20 text-[8px] tracking-[0.2em] uppercase">All services available 24/7 · No membership required</p>
                    <span className="text-[#C9A962]/40 text-[8px] tracking-wider">✦</span>
                  </div>
                </div>
              )}
            </div>

            <Link href="#how-it-works" className="hover:text-[#C9A962] transition-colors">How It Works</Link>
            <Link href="/my-requests" className="hover:text-[#C9A962] transition-colors">My Requests</Link>
            <Link href="/partners/apply" className="hover:text-[#C9A962] transition-colors">Partners</Link>
          </div>
          <div className="flex items-center gap-4 ml-2">
            <Link
              href="/login"
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <button
              onClick={onRequestClick}
              className="btn-gold px-5 py-2.5 rounded-sm text-[10px] tracking-[0.12em] uppercase"
            >
              Submit Request
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[1px] bg-white/80 transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-4 h-[1px] bg-white/40 transition-all duration-300 ${
              open ? "opacity-0 w-6" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-white/80 transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="bg-[#080d18]/98 border-t border-[#C9A962]/10 px-5 py-6 flex flex-col gap-4">
          {/* Mobile service grid */}
          <div>
            <p className="text-[8px] tracking-[0.35em] uppercase text-[#C9A962]/40 mb-3">Services</p>
            <div className="grid grid-cols-3 gap-2">
              {NAV_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-1 border border-white/8 rounded-sm p-2 hover:border-[#C9A962]/30 transition-colors"
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-white/40 text-[7px] tracking-wide text-center leading-tight">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="h-px bg-white/6" />
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "/my-requests", label: "My Requests" },
            { href: "/partners/apply", label: "Partners" },
            { href: "/blog", label: "Blog" },
            { href: "/login", label: "Sign In" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-[#C9A962] transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); onRequestClick?.(); }}
            className="btn-gold px-6 py-3.5 rounded-sm text-center text-[10px] tracking-[0.15em] uppercase w-full"
          >
            Submit Request
          </button>
        </div>
      </div>
    </nav>
  );
}
