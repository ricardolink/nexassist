import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog | NexAssist",
  description: "The NexAssist Journal — stories, insights, and inspiration from the world of luxury living. Coming soon.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 py-24">
        <div className="text-center max-w-lg mx-auto">

          {/* Diamond ornament */}
          <div className="inline-flex items-center justify-center mb-10">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border border-[#C9A962]/25 rotate-45 rounded-sm" />
              <div className="absolute inset-[6px] border border-[#C9A962]/15 rotate-45 rounded-sm" />
              <svg
                viewBox="0 0 36 36"
                fill="none"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d="M18 8 L28 18 L18 28 L8 18 Z"
                  stroke="#C9A962"
                  strokeWidth="0.6"
                  strokeOpacity="0.4"
                />
                <path
                  d="M12 24.5V11.5L24 24.5V11.5"
                  stroke="#C9A962"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                  strokeOpacity="0.7"
                />
              </svg>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#C9A962]/40" />
            <span className="text-[#C9A962]/60 text-[9px] tracking-[0.4em] uppercase">Coming Soon</span>
            <div className="w-5 h-px bg-[#C9A962]/40" />
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            The NexAssist<br />
            <span className="shimmer-gold">Journal</span>
          </h1>

          <p className="text-white/30 text-sm leading-relaxed max-w-sm mx-auto mb-12">
            Stories, insights, and inspiration from the world of luxury living.
            <br />Coming soon.
          </p>

          {/* Subtle divider */}
          <div className="w-12 h-px bg-[#C9A962]/20 mx-auto mb-10" />

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/25 hover:text-[#C9A962]/70 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
          >
            ← Back to Home
          </Link>
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
