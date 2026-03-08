"use client";
import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function BlogFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border-b transition-colors duration-300 ${
            open === i ? "border-[#C9A962]/25" : "border-white/08"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          >
            <span
              className={`font-playfair text-base font-medium leading-snug transition-colors duration-200 ${
                open === i
                  ? "text-[#C9A962]"
                  : "text-white/75 group-hover:text-white"
              }`}
            >
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                open === i
                  ? "border-[#C9A962]/50 bg-[#C9A962]/08 text-[#C9A962]"
                  : "border-white/12 text-white/30 group-hover:border-white/25"
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d={open === i ? "M2 5h6" : "M5 2v6M2 5h6"}
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-72 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-white/40 text-sm leading-relaxed pr-10">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
