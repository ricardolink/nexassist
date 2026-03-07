import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

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
    { url: `${base}/my-requests`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/partners/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
