"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#0A1628]/98 backdrop-blur-xl border-b border-[#C9A962]/15 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-[#C9A962]/60 flex items-center justify-center group-hover:border-[#C9A962] transition-colors">
            <span className="text-[#C9A962] text-xs font-bold tracking-wider">N</span>
          </div>
          <span className="font-playfair text-xl font-bold tracking-wide text-white group-hover:text-[#C9A962] transition-colors">
            NexAssist
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-white/60">
            <Link href="/#services" className="hover:text-[#C9A962] transition-colors">Services</Link>
            <Link href="/#how-it-works" className="hover:text-[#C9A962] transition-colors">How It Works</Link>
            <Link href="/partner" className="hover:text-[#C9A962] transition-colors">Partners</Link>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <Link href="/login" className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn-gold px-6 py-2.5 rounded-sm text-[#0A1628]">
              Get Access
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-px bg-white/60 transition-all duration-300 ${open ? "opacity-0 w-6" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-[#0A1628]/98 border-t border-[#C9A962]/10 px-6 py-6 flex flex-col gap-5">
          {["/#services", "/#how-it-works", "/partner", "/login"].map((href, i) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.15em] uppercase text-white/60 hover:text-[#C9A962] transition-colors"
              onClick={() => setOpen(false)}
            >
              {["Services", "How It Works", "Partners", "Sign In"][i]}
            </Link>
          ))}
          <Link href="/signup" className="btn-gold px-6 py-3 rounded-sm text-center" onClick={() => setOpen(false)}>
            Get Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
