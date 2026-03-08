import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogFAQ from "@/components/BlogFAQ";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import type { Section } from "@/lib/blog";

/* ── Static params for pre-rendering ── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.heroImage }],
    },
  };
}

/* ── Section renderer ── */
function RenderSection({ section }: { section: Section }) {
  switch (section.kind) {
    case "h2":
      return (
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 leading-tight">
          {section.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-white/55 text-[15px] sm:text-base leading-[1.85] mb-6">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-8 space-y-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              {section.numbered ? (
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#C9A962]/35 flex items-center justify-center text-[#C9A962] text-[11px] font-bold mt-0.5">
                  {i + 1}
                </span>
              ) : (
                <span className="flex-shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-[#C9A962]/60" />
              )}
              <span className="text-white/50 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "pullquote":
      return (
        <blockquote className="my-10 sm:my-12 relative pl-6 sm:pl-8">
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-[#C9A962]/70 via-[#C9A962]/40 to-transparent" />
          <p className="font-playfair text-xl sm:text-2xl font-bold text-white/80 leading-snug italic">
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      );
    case "service-cta":
      return (
        <div className="my-10 flex">
          <Link
            href={section.href}
            className="inline-flex items-center gap-2 border border-[#C9A962]/40 hover:border-[#C9A962] text-[#C9A962]/70 hover:text-[#C9A962] px-7 py-3.5 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            {section.label}
          </Link>
        </div>
      );
    case "divider":
      return <div className="my-10 w-12 h-px bg-[#C9A962]/25" />;
    default:
      return null;
  }
}

/* ── Page ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─── */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/60 to-[#080d18]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/40 to-transparent" />

        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pb-12 sm:pb-16 pt-28 w-full">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/25 text-[9px] tracking-[0.25em] uppercase mb-6">
            <Link href="/blog" className="hover:text-[#C9A962] transition-colors">Journal</Link>
            <span>/</span>
            <span className="text-[#C9A962]/60">{post.category}</span>
          </div>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[#C9A962] text-[8px] tracking-[0.35em] uppercase border border-[#C9A962]/40 px-2.5 py-1 rounded-sm">
              {post.category}
            </span>
            <span className="text-white/30 text-[9px] tracking-wide">{post.date}</span>
            <span className="text-white/18 text-[9px]">·</span>
            <span className="text-white/30 text-[9px] tracking-wide">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-2xl">
            {post.subtitle}
          </p>
        </div>
      </div>

      {/* ─── ARTICLE BODY ─── */}
      <article className="max-w-2xl mx-auto px-5 sm:px-8 py-12 sm:py-16">

        {/* Intro */}
        <p className="text-white/65 text-[16px] sm:text-lg leading-[1.85] mb-8 font-light">
          {post.intro}
        </p>

        {/* Gold divider */}
        <div className="w-10 h-px bg-[#C9A962]/40 mb-10" />

        {/* Sections */}
        {post.sections.map((section, i) => (
          <RenderSection key={i} section={section} />
        ))}

        {/* ─── FAQ ─── */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#C9A962]/12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-px bg-[#C9A962]/50" />
            <span className="text-[#C9A962]/60 text-[9px] tracking-[0.4em] uppercase">FAQ</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <BlogFAQ faqs={post.faqs} />
        </div>

        {/* ─── FINAL CTA ─── */}
        <div className="mt-16 sm:mt-20 relative overflow-hidden rounded-sm">
          {/* Gold borders */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/05 to-transparent" />

          <div className="relative px-7 sm:px-10 py-12 sm:py-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#C9A962]/40" />
              <span className="text-[#C9A962]/60 text-[8px] tracking-[0.4em] uppercase">Ready to Experience It?</span>
              <div className="w-4 h-px bg-[#C9A962]/40" />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Don&apos;t just read about it.
            </h3>
            <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
              One message gets you everything you just read about — arranged, delivered, done.
            </p>
            <Link
              href="/"
              className="btn-gold inline-flex items-center gap-2 px-10 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
            >
              Submit Your Request →
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 flex items-center">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-white/25 hover:text-[#C9A962]/70 text-[9px] tracking-[0.2em] uppercase transition-colors"
          >
            ← Back to the Journal
          </Link>
        </div>
      </article>

      {/* ─── RELATED POSTS ─── */}
      {related.length > 0 && (
        <section className="border-t border-[#C9A962]/08 py-14 sm:py-18 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962]/60 text-[9px] tracking-[0.4em] uppercase">More from the Journal</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex flex-col">
                  <div className="relative overflow-hidden rounded-sm h-44 mb-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${rp.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 via-[#080d18]/20 to-transparent" />
                    <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/06 transition-all duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]/0 group-hover:bg-[#C9A962]/50 transition-all duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[#C9A962] text-[7px] tracking-[0.3em] uppercase border border-[#C9A962]/30 bg-[#080d18]/70 px-2 py-0.5 rounded-sm">
                        {rp.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-white/20 text-[8px] tracking-wide mb-2">{rp.readTime}</span>
                  <h4 className="font-playfair text-base font-bold text-white/80 group-hover:text-[#C9A962] transition-colors duration-200 leading-snug">
                    {rp.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-8 px-5 sm:px-8 text-center">
        <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} NexAssist · Personal Concierge
        </p>
      </footer>
    </div>
  );
}
