import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://usenexassist.com";
  const now = new Date();

  const seoPages = [
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

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...seoPages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    { url: `${base}/my-requests`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/partners/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
