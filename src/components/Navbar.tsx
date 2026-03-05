"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ onRequestClick }: { onRequestClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
            <Link href="#services" className="hover:text-[#C9A962] transition-colors">Services</Link>
            <Link href="#how-it-works" className="hover:text-[#C9A962] transition-colors">How It Works</Link>
            <Link href="/my-requests" className="hover:text-[#C9A962] transition-colors">My Requests</Link>
            <Link href="/partners/login" className="hover:text-[#C9A962] transition-colors">Partners</Link>
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
        <div className="bg-[#080d18]/98 border-t border-[#C9A962]/10 px-5 py-6 flex flex-col gap-5">
          {[
            { href: "#services", label: "Services" },
            { href: "#how-it-works", label: "How It Works" },
            { href: "/my-requests", label: "My Requests" },
            { href: "/partners/login", label: "Partners" },
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
