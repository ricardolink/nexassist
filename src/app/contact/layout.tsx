import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NexAssist Luxury Concierge Los Angeles",
  description: "Get in touch with NexAssist — submit a request for exotic car rentals, chauffeur service, private jets, yachts, and more in Los Angeles.",
  alternates: { canonical: "https://usenexassist.com/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
