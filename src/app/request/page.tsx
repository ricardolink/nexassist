"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PhoneInput from "@/components/PhoneInput";
import { countries, defaultCountry, type Country } from "@/lib/countries";
import { saveRequest } from "@/lib/requests";
import { supabase } from "@/lib/supabase";

const serviceTypes = [
  "Exotic Car Rental", "Chauffeur Services", "Car Sales", "Private Jets",
  "Luxury Villas", "Superyachts", "Fine Watches", "Designer Bags",
  "Luxury Travel", "Other",
];

const placeholders: Record<string, string> = {
  "Exotic Car Rental":  "I need a Lamborghini Huracán delivered to Beverly Hills this Saturday...",
  "Chauffeur Services": "I need a Cadillac Escalade with a driver for an LAX pickup Friday at 8pm...",
  "Car Sales":          "I'm looking to buy a Ferrari SF90 Stradale, Rosso Corsa, under 2,000 miles...",
  "Private Jets":       "I need a private jet from Van Nuys to Miami for 4 passengers Thursday evening...",
  "Luxury Villas":      "Looking for a Malibu beachfront villa for 8 guests, 3 nights starting July 4th...",
  "Superyachts":        "Sunset cruise to Catalina Island for 10 guests this Saturday, 60ft+...",
  "Fine Watches":       "Looking for a Rolex Daytona Panda dial, stainless steel, unworn. Budget $50K...",
  "Designer Bags":      "Looking for a Hermès Birkin 30 in gold with gold hardware...",
  "Luxury Travel":      "10-day Italy trip — private jets, five-star hotels Rome & Amalfi, yacht day...",
  "Other":              "Tell us what you need and we'll make it happen...",
};

export default function RequestPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePhoto(file: File | null) {
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = (e) => setPhotoPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      serviceType: selected || "Other",
      description,
      dateNeeded,
      city,
      budget,
      name,
      email,
      phone,
      countryDial: country.dial,
      countryFlag: country.flag,
      countryCode: country.code,
      photoPreview,
    };

    // Save to localStorage
    saveRequest(payload);

    // Save to Supabase if logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase.from("requests").insert({
        user_id: session.user.id,
        service_type: payload.serviceType,
        description,
        date_needed: dateNeeded,
        city,
        budget,
        phone,
        country_dial: country.dial,
        country_flag: country.flag,
        client_name: name,
        client_email: email,
        status: "pending",
      });
    }

    // Notify Rick
    fetch("/api/notify-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    setSubmitting(false);
    router.push("/thank-you");
  }

  return (
    <div className="min-h-screen bg-[#080d18] text-white relative">

      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cars/huracan.jpg')" }}
      />
      {/* Dark overlay — heavy top + bottom, lighter middle */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#080d18]/95 via-[#080d18]/70 to-[#080d18]/97" />
      {/* Right vignette */}
      <div className="fixed inset-0 bg-gradient-to-l from-[#080d18]/60 via-transparent to-transparent" />

      {/* All content sits above the background */}
      <div className="relative z-10">

      {/* Top gold bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      {/* Minimal nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
            <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="1" strokeOpacity="0.9"/>
            <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.7" strokeLinecap="square"/>
          </svg>
          <span className="font-playfair text-lg font-bold text-white/85 tracking-wide">
            Nex<span className="text-[#C9A962]">Assist</span>
          </span>
        </Link>
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A962]/50 border border-[#C9A962]/15 px-3 py-1.5">
          Personal Concierge · 24/7
        </span>
      </nav>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-6 pb-20 pt-4">
        <div className="mb-10">
          <p className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase mb-3">Your Personal Assistant</p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold leading-[1.05]">
            What can we arrange<br />
            <span className="text-[#C9A962]">for you?</span>
          </h1>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            Describe your request below. We'll respond within minutes — no fees, no hassle.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-7">

          {/* Service type */}
          <div>
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-3">Service type</p>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelected(s)}
                  className={`px-3.5 py-1.5 rounded-sm text-[10px] tracking-[0.15em] uppercase transition-all duration-200 ${
                    selected === s
                      ? "bg-[#C9A962] text-[#080d18] font-bold"
                      : "border border-white/12 text-white/40 hover:border-[#C9A962]/40 hover:text-white/70"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Describe your request</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={placeholders[selected] ?? "Tell us what you need and we'll make it happen..."}
              required
              rows={4}
              className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Date · City · Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Date needed</p>
              <input
                type="date"
                value={dateNeeded}
                onChange={(e) => setDateNeeded(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white/80 focus:outline-none transition-colors [color-scheme:dark]"
              />
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">City</p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Beverly Hills"
                className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Budget</p>
              <div className="flex border border-white/10 focus-within:border-[#C9A962]/40 rounded-sm overflow-hidden transition-colors">
                <span className="flex items-center px-3 border-r border-white/10 bg-white/2 text-white/35 text-sm">$</span>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="25,000"
                  className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-white/22 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Your name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                  required
                  className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex-1">
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Phone number</p>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                selectedCountry={country}
                onCountryChange={setCountry}
                required
              />
            </div>
          </div>

          {/* Photo upload */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">Reference photo</p>
              <span className="text-white/22 text-[9px] tracking-wider uppercase">Optional</span>
            </div>
            {photoPreview ? (
              <div className="relative rounded-sm overflow-hidden border border-[#C9A962]/20 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoPreview} alt="Preview" className="w-full h-36 object-cover" />
                <button
                  type="button"
                  onClick={() => { setPhoto(null); setPhotoPreview(null); }}
                  className="absolute top-2 right-2 bg-[#080d18]/90 border border-white/20 text-white/70 hover:text-white text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm transition-colors"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-6 cursor-pointer transition-all group">
                <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">
                  Upload a reference photo
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handlePhoto(e.target.files?.[0] ?? null)}
                />
              </label>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !description}
            className="btn-gold w-full py-5 rounded-sm text-[#080d18] text-xs tracking-[0.18em] uppercase font-bold disabled:opacity-40 transition-all"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/40 border-t-[#080d18] animate-spin" />
                Sending to your assistant...
              </span>
            ) : (
              "Submit My Request →"
            )}
          </button>

          <p className="text-white/20 text-[9px] tracking-wider text-center">
            100% private · No fees · Response within minutes
          </p>
        </form>
      </main>
      </div>{/* end z-10 wrapper */}
    </div>
  );
}
