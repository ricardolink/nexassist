"use client";
import { useState } from "react";
import Link from "next/link";

const steps = ["Business Info", "Services", "Coverage", "Review"];

const serviceOptions = [
  "Exotic Car Rental", "Chauffeur Services", "Car Sales",
  "Private Jet Charter", "Luxury Villa Rental",
  "Yacht Charter", "Helicopter Charter", "Luxury Hotel Bookings",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    services: [] as string[],
    areas: "",
    bio: "",
  });
  const [done, setDone] = useState(false);

  function toggleService(s: string) {
    setData((d) => ({
      ...d,
      services: d.services.includes(s)
        ? d.services.filter((x) => x !== s)
        : [...d.services, s],
    }));
  }

  function next() { setStep((s) => Math.min(s + 1, steps.length - 1)); }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 text-center">
        <div>
          <div className="text-6xl mb-6">✨</div>
          <h1 className="font-playfair text-4xl font-bold text-white mb-4">Application Submitted!</h1>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            We&apos;ll review your application and get back to you within 24–48 hours.
          </p>
          <Link href="/" className="bg-[#C9A962] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1628] px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Link href="/" className="font-playfair text-3xl font-bold text-[#C9A962]">NexAssist</Link>
          <h1 className="text-2xl font-bold text-white mt-4">Partner Onboarding</h1>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex flex-col items-center ${i <= step ? "opacity-100" : "opacity-40"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  i < step ? "bg-[#C9A962] border-[#C9A962] text-[#0A1628]" :
                  i === step ? "border-[#C9A962] text-[#C9A962]" :
                  "border-white/30 text-white/30"
                }`}>
                  {i < step ? "✓" : i + 1}
                </div>
                <span className="text-xs mt-1 text-white/60 hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-1 ${i < step ? "bg-[#C9A962]" : "bg-white/20"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8">
          {/* Step 0: Business Info */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">Business Information</h2>
              {[
                ["Business Name", "businessName", "Ricco Exotics LA", "text"],
                ["Your Name", "contactName", "Ricardo Jimenez", "text"],
                ["Email", "email", "partner@example.com", "email"],
                ["Phone", "phone", "+1 (213) 000-0000", "tel"],
                ["Website", "website", "https://yoursite.com", "url"],
              ].map(([label, field, placeholder, type]) => (
                <div key={field}>
                  <label className="block text-white/70 text-sm mb-2">{label}</label>
                  <input
                    type={type}
                    value={(data as unknown as Record<string, string>)[field]}
                    onChange={(e) => setData((d) => ({ ...d, [field]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Services */}
          {step === 1 && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">Services Offered</h2>
              <p className="text-white/50 text-sm mb-6">Select all that apply</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                      data.services.includes(s)
                        ? "border-[#C9A962] bg-[#C9A962]/10 text-[#C9A962]"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Coverage */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">Coverage Areas</h2>
              <div>
                <label className="block text-white/70 text-sm mb-2">Cities / Regions you serve</label>
                <textarea
                  value={data.areas}
                  onChange={(e) => setData((d) => ({ ...d, areas: e.target.value }))}
                  placeholder="e.g. Los Angeles, Miami, Las Vegas, New York"
                  rows={3}
                  className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30 resize-none"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Tell us about your business</label>
                <textarea
                  value={data.bio}
                  onChange={(e) => setData((d) => ({ ...d, bio: e.target.value }))}
                  placeholder="Briefly describe your experience, fleet, or offerings..."
                  rows={5}
                  className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30 resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-6">Review & Submit</h2>
              <div className="space-y-4">
                {[
                  ["Business", data.businessName || "—"],
                  ["Contact", data.contactName || "—"],
                  ["Email", data.email || "—"],
                  ["Services", data.services.join(", ") || "—"],
                  ["Areas", data.areas || "—"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-white/50">{label}</span>
                    <span className="text-white text-right max-w-xs">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={back}
              disabled={step === 0}
              className="border border-white/20 text-white/60 px-6 py-3 rounded-lg hover:border-white/40 transition-colors disabled:opacity-30"
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="bg-[#C9A962] text-[#0A1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setDone(true)}
                className="bg-[#C9A962] text-[#0A1628] px-8 py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
