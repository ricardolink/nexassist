import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service | NexAssist",
  description: "NexAssist Terms of Service — the terms and conditions governing use of our luxury concierge service.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      <main className="pt-28 pb-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962]/75 text-[9px] tracking-[0.4em] uppercase font-medium">Legal</span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            Terms of Service
          </h1>
          <p className="text-white/30 text-xs tracking-wide mb-12">Effective: March 2026</p>

          <div className="space-y-10 text-white/55 text-sm leading-relaxed">

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using NexAssist ("the Service"), you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our service. We reserve the right to update
                these terms at any time, and continued use of the Service constitutes acceptance of any changes.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">2. Service Description</h2>
              <p>
                NexAssist is a private luxury concierge service that arranges access to exotic car rentals, chauffeur
                services, private jets, luxury villas, superyachts, fine watches, designer goods, and other premium
                experiences on behalf of its members. NexAssist acts as an intermediary between members and service
                providers and does not directly own or operate the assets arranged.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">3. Availability of Services</h2>
              <p>
                NexAssist makes no guarantees regarding the availability of any specific vehicle, property, vessel,
                or other luxury asset at any given time. We will make every effort to fulfill your request, but
                availability is subject to third-party provider inventory and conditions beyond our control.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">4. Pricing and Payment</h2>
              <p>
                Pricing for all services is provided on a custom basis and will be communicated to you directly
                by your concierge prior to confirmation. All quotes are subject to change based on availability,
                timing, and third-party costs. Payment terms will be agreed upon at the time of booking.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">5. Member Responsibilities</h2>
              <p className="mb-3">As a NexAssist member or user, you agree to:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Provide accurate information when submitting requests",
                  "Comply with all applicable laws and third-party terms when using arranged services",
                  "Not misuse or abuse the concierge service",
                  "Accept responsibility for any damages or liabilities arising from your use of arranged services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A962]/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">6. Limitation of Liability</h2>
              <p>
                NexAssist shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of the Service or any arranged services. Our total liability to you for any
                claim shall not exceed the amount paid by you for the specific service in question. NexAssist is
                not responsible for the acts or omissions of third-party service providers.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the
                State of California, without regard to its conflict of law provisions. Any disputes shall be
                resolved in the courts of Los Angeles County, California.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">8. Contact</h2>
              <p>
                For questions about these Terms, please visit our{" "}
                <Link href="/contact" className="text-[#C9A962] hover:text-[#C9A962]/80 transition-colors">
                  Contact page
                </Link>{" "}
                and we will get back to you promptly.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-8 px-5 sm:px-8 text-center">
        <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} NexAssist · Personal Concierge
        </p>
      </footer>
    </div>
  );
}
