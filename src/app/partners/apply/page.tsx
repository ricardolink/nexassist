"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const SERVICES = [
  "Exotic Car Rental",
  "Chauffeur Services",
  "Car Sales",
  "Private Jets",
  "Luxury Villas",
  "Superyachts",
  "Fine Watches",
  "Designer Bags",
  "Luxury Travel",
  "Custom Experiences",
];

export default function PartnerApply() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    description: "",
  });
  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (services.length === 0) {
      setError("Please select at least one service you can offer.");
      return;
    }

    setLoading(true);

    // Check if this email already applied
    const { data: existing } = await supabase
      .from("partner_applications")
      .select("id, status")
      .eq("email", form.email.toLowerCase().trim())
      .maybeSingle();

    if (existing) {
      if (existing.status === "approved") {
        setError("This email is already approved as a partner. Please sign in at the partner login page.");
      } else if (existing.status === "pending") {
        setError("We already have an application from this email. It's currently under review.");
      } else {
        setError("An application with this email already exists in our system.");
      }
      setLoading(false);
      return;
    }

    const { error: err } = await supabase.from("partner_applications").insert({
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.toLowerCase().trim(),
      phone: form.phone.trim() || null,
      website: form.website.trim() || null,
      city: form.city.trim() || null,
      services,
      description: form.description.trim(),
    });

    if (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } else {
      setSubmitted(true);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-[#080d18] min-h-screen flex flex-col items-center justify-center px-5 py-16">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#C9A962]/5 blur-[120px]" />
        </div>
        <div className="relative w-full max-w-sm text-center">
          {/* Animated checkmark */}
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-24 h-24 rounded-full bg-[#C9A962]/8 animate-ping-slow" />
            <div className="relative w-20 h-20 rounded-full border border-[#C9A962]/40 bg-[#C9A962]/10 flex items-center justify-center">
              <svg className="w-9 h-9 text-[#C9A962]" viewBox="0 0 36 36" fill="none">
                <path d="M7 18l7 7L29 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-3">Application Received</p>
          <h1 className="font-playfair text-3xl font-bold text-white mb-4 leading-tight">
            We'll be in touch.
          </h1>
          <p className="text-white/35 text-sm leading-relaxed mb-8">
            Your application has been submitted. Our team reviews every partner personally — we'll contact you at <span className="text-white/60">{form.email}</span> within 48 hours.
          </p>

          <div className="bg-[#0c1222] border border-[#C9A962]/15 rounded-sm p-5 mb-8">
            <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-3">What happens next</p>
            <div className="space-y-3 text-left">
              {[
                ["Review", "Our team reviews your application and services"],
                ["Approval", "You receive an email confirming you're approved"],
                ["Access", "Sign in at the partner portal to start receiving requests"],
              ].map(([step, desc], i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#C9A962] text-[8px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-medium">{step}</p>
                    <p className="text-white/30 text-[11px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link href="/" className="text-white/25 hover:text-white/50 text-xs tracking-wider uppercase transition-colors">
            ← Back to NexAssist
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080d18] min-h-screen px-5 py-16">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#C9A962]/4 blur-[120px]" />
      </div>

      <div className="relative max-w-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 mb-10 group w-fit">
          <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
            <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
            <polygon points="18,7 31,18 18,29 5,18" stroke="#C9A962" strokeWidth="0.4" strokeOpacity="0.3" />
            <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
          <div className="flex flex-col leading-none gap-[2px]">
            <span className="font-playfair text-[15px] font-bold tracking-[0.22em] text-white group-hover:text-[#C9A962] transition-colors uppercase">
              Nex<span className="text-[#C9A962]">Assist</span>
            </span>
            <span className="text-[7px] tracking-[0.55em] text-white/25 uppercase font-light">Partner Portal</span>
          </div>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-3">Become a Partner</p>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Join the network.
          </h1>
          <p className="text-white/35 text-sm leading-relaxed">
            NexAssist connects high-net-worth clients with trusted luxury providers. Fill out the form below and we'll review your application personally.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-[#0c1222] border border-[#C9A962]/15 rounded-sm overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8 space-y-6">

            {/* Personal info */}
            <div>
              <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase mb-4">Your information</p>
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">Full name <span className="text-[#C9A962]">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="John Smith"
                      required
                      className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">Company name <span className="text-[#C9A962]">*</span></label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Prestige Rentals LLC"
                      required
                      className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">Business email <span className="text-[#C9A962]">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">Phone <span className="text-white/15 normal-case tracking-normal text-[9px]">— optional</span></label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">City / Country <span className="text-white/15 normal-case tracking-normal text-[9px]">— optional</span></label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => set("city", e.target.value)}
                      placeholder="Miami, USA"
                      className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-1.5">Website <span className="text-white/15 normal-case tracking-normal text-[9px]">— optional</span></label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => set("website", e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase mb-1.5">Services you offer <span className="text-[#C9A962]">*</span></p>
              <p className="text-white/20 text-[11px] mb-4">Select all categories that apply to your business</p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`px-3 py-2 rounded-sm text-xs tracking-[0.08em] transition-all duration-150 border ${
                      services.includes(s)
                        ? "bg-[#C9A962]/15 border-[#C9A962]/50 text-[#C9A962]"
                        : "border-white/10 text-white/35 hover:border-white/20 hover:text-white/55"
                    }`}
                  >
                    {services.includes(s) && "✓ "}{s}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-white/30 text-[9px] tracking-[0.35em] uppercase block mb-1.5">Tell us about your services <span className="text-[#C9A962]">*</span></label>
              <p className="text-white/20 text-[11px] mb-3">What makes you exceptional? What do you offer that others don't?</p>
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="We specialize in exotic car rentals in Miami with a fleet of 40+ vehicles including Lamborghini, Ferrari, and Bugatti. Same-day delivery available, white-glove service, fully insured..."
                rows={4}
                required
                className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/18 focus:outline-none resize-none transition-colors leading-relaxed"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-500/8 border border-red-500/20 rounded-sm px-3 py-3">
                <svg className="w-3.5 h-3.5 text-red-400/70 mt-0.5 shrink-0" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4.5v3M7 9.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <p className="text-red-400/80 text-xs leading-relaxed">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !form.name || !form.company || !form.email || !form.description}
              className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                  Submitting application...
                </span>
              ) : (
                "Submit Application →"
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-white/20 text-xs text-center">
          Already approved?{" "}
          <Link href="/partners/login" className="text-[#C9A962]/45 hover:text-[#C9A962] transition-colors">
            Sign in to your partner account →
          </Link>
        </p>
      </div>
    </div>
  );
}
