"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur border-b border-[#C9A962]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl font-bold text-[#C9A962]">
          NexAssist
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="/#services" className="hover:text-[#C9A962] transition-colors">Services</Link>
          <Link href="/#how-it-works" className="hover:text-[#C9A962] transition-colors">How It Works</Link>
          <Link href="/partner" className="hover:text-[#C9A962] transition-colors">Partners</Link>
          <Link href="/login" className="hover:text-[#C9A962] transition-colors">Login</Link>
          <Link
            href="/signup"
            className="bg-[#C9A962] text-[#0A1628] px-5 py-2 rounded font-semibold hover:bg-[#E2C98A] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1F3C] border-t border-[#C9A962]/20 px-6 py-4 flex flex-col gap-4">
          <Link href="/#services" className="text-white/80 hover:text-[#C9A962]" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#how-it-works" className="text-white/80 hover:text-[#C9A962]" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/partner" className="text-white/80 hover:text-[#C9A962]" onClick={() => setOpen(false)}>Partners</Link>
          <Link href="/login" className="text-white/80 hover:text-[#C9A962]" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/signup" className="bg-[#C9A962] text-[#0A1628] px-5 py-2 rounded font-semibold text-center" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
