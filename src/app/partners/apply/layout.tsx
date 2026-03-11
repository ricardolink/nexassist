import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with NexAssist | Luxury Concierge Los Angeles",
  description: "Apply to become a NexAssist partner — hotels, concierges, and luxury businesses offering exotic cars and premium services to high-end clients in Los Angeles.",
  alternates: { canonical: "https://usenexassist.com/partners/apply" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
