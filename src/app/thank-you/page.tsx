import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Submitted | NexAssist",
  description: "Your concierge request has been received. We'll be in touch within minutes.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#080d18] text-white flex flex-col">
      {/* Top gold bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
            <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="1" strokeOpacity="0.9"/>
            <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.7" strokeLinecap="square"/>
          </svg>
          <span className="font-playfair text-lg font-bold text-white/85 tracking-wide">
            Nex<span className="text-[#C9A962]">Assist</span>
          </span>
        </Link>
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-20">

        {/* Gold checkmark */}
        <div className="w-20 h-20 rounded-full border border-[#C9A962]/30 flex items-center justify-center mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#C9A962" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase mb-4">Request Received</p>

        <h1 className="font-playfair text-4xl sm:text-5xl font-bold leading-[1.05] mb-6 max-w-lg">
          Your assistant is<br />
          <span className="text-[#C9A962]">on it.</span>
        </h1>

        <p className="text-white/45 text-base leading-relaxed max-w-md mb-10">
          We&apos;ve received your request and your personal concierge will be in touch within minutes.
          Sit back — we handle everything from here.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Link
            href="/"
            className="flex-1 border border-white/12 hover:border-[#C9A962]/40 text-white/50 hover:text-white/80 text-[10px] tracking-[0.25em] uppercase py-4 rounded-sm transition-all text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/request"
            className="flex-1 btn-gold text-[#080d18] text-[10px] tracking-[0.25em] uppercase py-4 rounded-sm font-bold text-center"
          >
            Submit Another →
          </Link>
        </div>

        <p className="text-white/18 text-[9px] tracking-wider mt-10">
          100% private · No fees · usenexassist.com
        </p>
      </main>

      {/* Bottom gold bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
    </div>
  );
}
