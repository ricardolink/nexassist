import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "NexAssist | Your Personal Luxury Concierge",
  description:
    "NexAssist connects you with premium concierge services — private jets, exotic cars, luxury villas, yacht charters, VIP events, and fine dining. Experience luxury, redefined.",
  keywords: [
    "luxury concierge",
    "private jet",
    "exotic car rental",
    "luxury villa",
    "yacht charter",
    "VIP services",
    "NexAssist",
  ],
  openGraph: {
    title: "NexAssist | Your Personal Luxury Concierge",
    description:
      "Premium concierge services for the discerning few. Private jets, exotic cars, luxury villas and more.",
    type: "website",
    url: "https://nexassist.com",
    siteName: "NexAssist",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexAssist | Your Personal Luxury Concierge",
    description: "Premium concierge services for the discerning few.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: "auto" }}>
      <body className="bg-[#080d18] text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
