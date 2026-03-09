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

  const cityPages = CITIES.map((c) => ({
    url: `${base}/luxury-concierge/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...servicePages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...cityPages,
    // Blog
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Footer pages
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    // Other
    { url: `${base}/my-requests`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/partners/apply`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];
}
