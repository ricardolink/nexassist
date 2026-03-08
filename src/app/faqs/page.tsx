"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    q: "How does NexAssist work?",
    a: "Simply submit a request through our website or reach out directly. Your personal concierge will respond within minutes to confirm details and handle everything from there — no searching, no waiting.",
  },
  {
    q: "What services do you offer?",
    a: "Exotic car rentals, chauffeur services, private jets, luxury villas, superyachts, fine watches, designer bags, luxury travel, car sales, and more. If you can dream it, we can arrange it.",
  },
  {
    q: "How quickly can you fulfill a request?",
    a: "Most requests are handled within a few hours. For same-day exotic car rentals in Los Angeles, we can often deliver within 1–2 hours depending on availability and location.",
  },
  {
    q: "Is there a membership fee?",
    a: "NexAssist is currently in private access. Submit a request and our team will reach out to discuss access and pricing tailored to your lifestyle.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Los Angeles and serve Beverly Hills, Malibu, West Hollywood, Santa Monica, Orange County, and the greater LA area. We also arrange services nationwide and internationally.",
  },
  {
    q: "How do I reach my concierge?",
    a: "Once you submit a request, your concierge will contact you directly via text or call at (213) 312-5175. You can also reach us through the Contact page.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b border-white/08 transition-all duration-300 ${open ? "border-[#C9A962]/20" : ""}`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-playfair text-base sm:text-lg font-medium transition-colors duration-200 ${open ? "text-[#C9A962]" : "text-white/80 group-hover:text-white"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "border-[#C9A962]/50 bg-[#C9A962]/08 text-[#C9A962]" : "border-white/12 text-white/30 group-hover:border-white/25"}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d={open ? "M2 5h6" : "M5 2v6M2 5h6"}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 pb-5" : "max-h-0"}`}>
        <p className="text-white/40 text-sm leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar onRequestClick={() => {}} />

      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      <main className="pt-28 pb-24 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962]/75 text-[9px] tracking-[0.4em] uppercase font-medium">FAQ</span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Frequently Asked<br />
            <span className="shimmer-gold">Questions</span>
          </h1>
          <p className="text-white/30 text-sm leading-relaxed mb-14 max-w-md">
            Everything you need to know about the NexAssist experience.
          </p>

          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 relative overflow-hidden rounded-sm border border-[#C9A962]/20 px-7 py-8">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent" />
            <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-2">Still have questions?</p>
            <h3 className="font-playfair text-xl font-bold text-white mb-2">We&apos;re here to help.</h3>
            <p className="text-white/35 text-sm mb-5 leading-relaxed">
              Reach out directly and your concierge will respond promptly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#C9A962]/30 text-[#C9A962]/70 hover:text-[#C9A962] hover:border-[#C9A962]/60 px-6 py-2.5 rounded-sm text-[10px] tracking-[0.15em] uppercase transition-all duration-300"
            >
              Contact Us →
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-8 px-5 sm:px-8 text-center">
        <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} NexAssist · Personal Concierge
        </p>
      </footer>
    </div>
  );
}
