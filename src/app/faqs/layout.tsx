import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | NexAssist Luxury Concierge Los Angeles",
  description: "Frequently asked questions about NexAssist — exotic car rentals, chauffeur service, private jets, yachts, and luxury concierge in Los Angeles.",
  alternates: { canonical: "https://usenexassist.com/faqs" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
