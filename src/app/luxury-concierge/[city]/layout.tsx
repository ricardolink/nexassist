import type { Metadata } from "next";
import { CITIES, CITY_MAP } from "@/lib/cities";

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = CITY_MAP[params.city];
  if (!city) return {};

  return {
    title: `Luxury Concierge ${city.name} | Exotic Cars · Private Jets · Yachts | NexAssist`,
    description: `NexAssist is ${city.name}'s 24/7 personal luxury concierge — exotic car rental, chauffeur service, private jets, yacht charter, luxury villas, and more. One message. Same-day service throughout ${city.county}.`,
    keywords: [
      `luxury concierge ${city.name}`,
      `exotic car rental ${city.name}`,
      `chauffeur service ${city.name}`,
      `private jet charter ${city.name}`,
      `luxury services ${city.name}`,
      `personal concierge ${city.name}`,
      `NexAssist ${city.name}`,
      `luxury concierge ${city.county}`,
    ],
    alternates: {
      canonical: `https://usenexassist.com/luxury-concierge/${city.slug}`,
    },
    openGraph: {
      title: `Luxury Concierge ${city.name} | NexAssist`,
      description: `Exotic cars, private jets, yachts, villas & more in ${city.name}. Your personal NexAssist concierge is available 24/7.`,
      url: `https://usenexassist.com/luxury-concierge/${city.slug}`,
      type: "website",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
