import type { Metadata } from "next";
import { CITY_MAP } from "@/lib/cities";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = CITY_MAP[city];
  if (!data) return {};
  return {
    title: {
      absolute: `Luxury Concierge ${data.name} | Exotic Cars · Private Jets · Yachts | NexAssist`,
    },
    description: `NexAssist luxury concierge in ${data.name} — exotic car rentals, private jets, yacht charters, chauffeur service & luxury villas. 24/7 personal concierge serving ${data.name} and all of ${data.region}.`,
    alternates: {
      canonical: `https://usenexassist.com/luxury-concierge/${city}`,
    },
    openGraph: {
      title: `Luxury Concierge ${data.name} | NexAssist`,
      description: `Your personal luxury concierge in ${data.name}. Exotic cars, private jets, yachts, chauffeur service — available 24/7.`,
      url: `https://usenexassist.com/luxury-concierge/${city}`,
      type: "website",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
