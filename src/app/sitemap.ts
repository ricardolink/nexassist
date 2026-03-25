import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://usenexassist.com";
  const now = new Date();

  const servicePages = [
    "exotic-car-rental-los-angeles",
    "chauffeur-service-los-angeles",
    "private-jet-charter-los-angeles",
    "yacht-charter-los-angeles",
    "luxury-villa-rental-los-angeles",
    "car-sales-los-angeles",
    "luxury-watches-los-angeles",
    "designer-bags-los-angeles",
    "luxury-travel-los-angeles",
  ];

  // Priority tier 1 — flagship cities with highest search volume
  const tier1Cities = [
    "beverly-hills", "malibu", "west-hollywood", "santa-monica", "bel-air",
    "calabasas", "brentwood", "pacific-palisades", "newport-beach", "laguna-beach",
    "manhattan-beach", "pasadena", "irvine", "dana-point",
  ];

  // Priority tier 2 — secondary high-value cities
  const tier2Cities = [
    "studio-city", "sherman-oaks", "encino", "burbank", "glendale",
    "woodland-hills", "hidden-hills", "westlake-village", "venice", "marina-del-rey",
    "hermosa-beach", "redondo-beach", "palos-verdes-estates", "rancho-palos-verdes",
    "san-marino", "la-canada-flintridge", "arcadia", "long-beach",
    "laguna-niguel", "mission-viejo", "huntington-beach", "costa-mesa",
    "seal-beach", "yorba-linda",
  ];

  const cityPages = CITIES.map((c) => {
    const isT1 = tier1Cities.includes(c.slug);
    const isT2 = tier2Cities.includes(c.slug);
    return {
      url: `${base}/luxury-concierge/${c.slug}`,
      lastModified: now,
      changeFrequency: (isT1 ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: isT1 ? 0.9 : isT2 ? 0.8 : 0.7,
    };
  });

  return [
    // ── Core ──────────────────────────────────────────────────────────────
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // ── Service pages ─────────────────────────────────────────────────────
    ...servicePages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),

    // ── City concierge pages ──────────────────────────────────────────────
    ...cityPages,

    // ── Blog ──────────────────────────────────────────────────────────────
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),

    // ── Marketing / conversion pages ──────────────────────────────────────
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/partners/apply`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },

    // ── Legal ─────────────────────────────────────────────────────────────
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },

    // NOTE: /my-requests, /login, /signup, /dashboard, /admin, /thank-you
    // intentionally excluded — auth-gated or conversion pages, not for indexing
  ];
}
