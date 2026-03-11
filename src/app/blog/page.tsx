import Link from "next/link";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "The NexAssist Journal | Luxury Lifestyle & Exotic Cars Los Angeles",
  description: "Stories, guides, and inspiration from the world of luxury living in Los Angeles — exotic cars, private yachts, Malibu drives, and more.",
  alternates: {
    canonical: "https://usenexassist.com/blog",
  },
};

const [featured, ...rest] = blogPosts;

export default function BlogPage() {
  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      {/* ─── JOURNAL HEADER ─── */}
      <header className="pt-28 pb-16 sm:pb-20 px-5 sm:px-8 border-b border-[#C9A962]/08">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A962]/60" />
              <span className="text-[#C9A962]/70 text-[9px] tracking-[0.4em] uppercase">The NexAssist</span>
            </div>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-none">
              Journal
            </h1>
            <p className="mt-4 text-white/30 text-sm max-w-md leading-relaxed">
              Stories, guides, and inspiration from the world of luxury living.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/20 text-[9px] tracking-[0.3em] uppercase">
            <span>{blogPosts.length} articles</span>
            <span className="w-px h-3 bg-white/15" />
            <span>Los Angeles</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">

        {/* ─── FEATURED POST ─── */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12 sm:mb-16">
          <div className="relative overflow-hidden rounded-sm h-[55vw] sm:h-[420px] lg:h-[500px]">
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.heroImage})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/50 to-transparent" />
            <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/04 transition-all duration-500" />
            {/* Top border on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]/0 group-hover:bg-[#C9A962]/50 transition-all duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C9A962] text-[8px] tracking-[0.35em] uppercase border border-[#C9A962]/35 px-2.5 py-1 rounded-sm">
                  {featured.category}
                </span>
                <span className="text-white/25 text-[9px] tracking-wide">{featured.readTime}</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 max-w-2xl group-hover:text-[#C9A962] transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-5 hidden sm:block">
                {featured.subtitle}
              </p>
              <div className="flex items-center gap-2 text-[#C9A962]/60 group-hover:text-[#C9A962] transition-colors text-[10px] tracking-[0.2em] uppercase">
                <span>Read Article</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* ─── DIVIDER ─── */}
        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <div className="flex-1 h-px bg-[#C9A962]/10" />
          <span className="text-[#C9A962]/35 text-[8px] tracking-[0.35em] uppercase">More Articles</span>
          <div className="flex-1 h-px bg-[#C9A962]/10" />
        </div>

        {/* ─── POST GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-sm h-48 sm:h-44 mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 via-[#080d18]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/06 transition-all duration-500" />
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]/0 group-hover:bg-[#C9A962]/50 transition-all duration-300" />
                {/* Category pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[#C9A962] text-[7px] tracking-[0.3em] uppercase border border-[#C9A962]/30 bg-[#080d18]/70 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/22 text-[8px] tracking-wide">{post.date}</span>
                  <span className="w-px h-2.5 bg-white/12" />
                  <span className="text-white/22 text-[8px] tracking-wide">{post.readTime}</span>
                </div>
                <h3 className="font-playfair text-base font-bold text-white/85 leading-snug group-hover:text-[#C9A962] transition-colors duration-200 mb-2 flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[#C9A962]/40 group-hover:text-[#C9A962]/70 transition-colors text-[9px] tracking-[0.15em] uppercase mt-2">
                  <span>Read</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* CTA */}
      <section className="border-t border-[#C9A962]/08 py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#C9A962]/40" />
            <span className="text-[#C9A962]/60 text-[9px] tracking-[0.4em] uppercase">Ready to Experience It?</span>
            <div className="w-5 h-px bg-[#C9A962]/40" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Don&apos;t just read about it.
          </h2>
          <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            One message gets you a Ferrari, a private yacht, or anything else the day calls for.
          </p>
          <Link
            href="/"
            className="btn-gold inline-flex items-center gap-2 px-10 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
          >
            Submit Your Request →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-8 px-5 sm:px-8 text-center">
        <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} NexAssist · Personal Concierge
        </p>
      </footer>
    </div>
  );
}
