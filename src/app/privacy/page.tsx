import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | NexAssist",
  description: "NexAssist Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/30 text-xs tracking-wide mb-12">Last updated: March 2026</p>

          <div className="space-y-10 text-white/55 text-sm leading-relaxed">

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">1. Information We Collect</h2>
              <p>
                When you submit a request or contact us through NexAssist, we collect information you voluntarily provide,
                including your name, email address, phone number, and details about the service you are requesting.
                We may also collect usage data such as pages visited and device information to improve our service.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Fulfill and coordinate the services you have requested",
                  "Contact you to confirm details, provide updates, and follow up on your requests",
                  "Improve and personalize our concierge service",
                  "Respond to inquiries submitted through our contact form",
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
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">3. Third-Party Services</h2>
              <p>
                We use the following third-party services to operate NexAssist:
              </p>
              <ul className="space-y-2 list-none pl-0 mt-3">
                {[
                  "Supabase — for secure data storage and authentication",
                  "Resend — for email delivery and notifications",
                  "Vercel — for website hosting and infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A962]/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Each of these providers has their own privacy policies and data handling practices. We select partners who
                maintain strong security and privacy standards.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">4. We Do Not Sell Your Data</h2>
              <p>
                NexAssist does not sell, trade, or rent your personal information to third parties. Your information
                is used solely to deliver and improve our concierge service.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to fulfill your requests and comply with legal
                obligations. You may request deletion of your personal data at any time by contacting us.
              </p>
            </section>

            <div className="w-full h-px bg-[#C9A962]/08" />

            <section>
              <h2 className="font-playfair text-xl font-bold text-white/85 mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, please visit our{" "}
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
