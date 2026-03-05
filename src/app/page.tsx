"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PhoneInput from "@/components/PhoneInput";
import { defaultCountry, type Country } from "@/lib/countries";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    title: "Exotic Cars",
    sub: "Ferrari · Lamborghini · Rolls-Royce",
    photo: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=85",
    wide: true,
  },
  {
    title: "Private Jets",
    sub: "Your schedule. Your route.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=85",
    wide: false,
  },
  {
    title: "Luxury Villas",
    sub: "Fully staffed. Perfectly curated.",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=85",
    wide: false,
  },
  {
    title: "Superyachts",
    sub: "Mediterranean · Caribbean · Pacific",
    photo: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=85",
    wide: true,
  },
  {
    title: "Fine Watches",
    sub: "Rolex · Patek Philippe · AP",
    photo: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=85",
    wide: false,
  },
  {
    title: "Designer Bags",
    sub: "Hermès · Chanel · Louis Vuitton",
    photo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85",
    wide: false,
  },
  {
    title: "Fine Dining",
    sub: "Tables that don't exist. Until now.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    wide: false,
  },
  {
    title: "VIP Events",
    sub: "Front row. Always.",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85",
    wide: false,
  },
  {
    title: "Luxury Travel",
    sub: "Five-star. Everywhere.",
    photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=85",
    wide: false,
  },
];

const serviceTypes = [
  "Exotic Cars", "Private Jets", "Luxury Villas", "Superyachts",
  "Fine Watches", "Designer Bags", "Fine Dining", "VIP Events",
  "Luxury Travel", "Other",
];

const steps = [
  {
    num: "01",
    title: "Tell your assistant",
    desc: "A message. A voice note. Whatever feels natural. Your assistant listens.",
  },
  {
    num: "02",
    title: "We handle everything",
    desc: "Partners, logistics, negotiations — all invisible to you. Done within hours.",
  },
  {
    num: "03",
    title: "You simply arrive",
    desc: "No searching. No waiting. No compromise. Just the experience you imagined.",
  },
];

/* ─────────────────────────────────────────
   INTERSECTION OBSERVER HOOK
───────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────
   MODALS
───────────────────────────────────────── */

// ── Request Modal ──
function RequestModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [submitting, setSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  function handlePhotoFile(file: File | null) {
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = (e) => setPhotoPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  }

  const isLoggedIn = () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("nexassist_session");
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    onSuccess();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slides up on mobile, centered on desktop */}
      <div className="relative w-full sm:max-w-lg bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.6)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-slide-up">
        {/* Top gold line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

        <div className="px-6 py-7 sm:px-8 sm:py-8 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-7">
            <div>
              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-1.5">Your Personal Assistant</p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                What can we arrange<br />
                <span className="text-gold-gradient">for you?</span>
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/30 hover:text-white transition-colors ml-4 mt-1 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Service type pills */}
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
                placeholder="I need a Ferrari SF90 delivered to Beverly Hills for this weekend..."
                required
                rows={3}
                className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Date · City · Budget row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Date needed */}
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Date needed</p>
                <input
                  type="date"
                  value={dateNeeded}
                  onChange={(e) => setDateNeeded(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white/80 focus:outline-none transition-colors appearance-none [color-scheme:dark]"
                />
              </div>

              {/* City */}
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

              {/* Budget */}
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Your budget</p>
                <div className="flex border border-white/10 focus-within:border-[#C9A962]/40 rounded-sm overflow-hidden transition-colors">
                  <span className="flex items-center px-3 border-r border-white/10 bg-white/2 text-white/35 text-sm font-medium">
                    $
                  </span>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => {
                      // Allow digits, commas, dots
                      const cleaned = e.target.value.replace(/[^0-9.,]/g, "");
                      setBudget(cleaned);
                    }}
                    placeholder="25,000"
                    className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-white/22 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Photo upload — optional */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
                  Reference photo
                </p>
                <span className="text-white/22 text-[9px] tracking-wider uppercase">Optional</span>
              </div>

              {photoPreview ? (
                /* Preview */
                <div className="relative rounded-sm overflow-hidden border border-[#C9A962]/20 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="bg-[#080d18]/90 border border-white/20 text-white/70 hover:text-white text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#080d18]/80 border border-[#C9A962]/20 text-[#C9A962] text-[9px] tracking-wider uppercase px-2 py-1 rounded-sm">
                    {photo?.name?.slice(0, 20) ?? "Photo"}
                  </div>
                </div>
              ) : (
                /* Upload zone */
                <div className="grid grid-cols-2 gap-2">
                  {/* Upload from gallery */}
                  <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-5 cursor-pointer transition-all group">
                    <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">
                      Upload photo
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handlePhotoFile(e.target.files?.[0] ?? null)}
                    />
                  </label>

                  {/* Take a photo (camera) */}
                  <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-5 cursor-pointer transition-all group">
                    <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">
                      Take photo
                    </span>
                    <input
                      ref={cameraInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={(e) => handlePhotoFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Contact info (if not logged in) */}
            {!isLoggedIn() && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
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
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || !description}
              className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40 transition-all mt-1"
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
              100% private · Response within minutes
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Success Modal ──
function SuccessModal({
  onClose,
  onAnother,
}: {
  onClose: () => void;
  onAnother: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full sm:max-w-md bg-[#080d18] sm:rounded-sm overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.7)] sm:shadow-[0_20px_80px_rgba(201,169,98,0.12)] animate-slide-up">
        {/* Top gold line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#C9A962]/10 blur-[60px] pointer-events-none" />

        <div className="relative px-7 py-10 sm:px-10 sm:py-12 text-center">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-5 text-white/25 hover:text-white transition-colors text-xl leading-none"
          >
            ×
          </button>

          {/* Animated check circle */}
          <div className="inline-flex w-16 h-16 rounded-full border border-[#C9A962]/40 items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-[#C9A962]/8 animate-ping-slow" />
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M4.5 11.5L9 16L17.5 7"
                stroke="#C9A962"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Message */}
          <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-3">Request Received</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
            Your assistant is<br />
            <span className="text-gold-gradient">on it.</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto mb-8">
            We&apos;re reviewing your request right now. Expect to hear from your personal concierge
            within the next few minutes.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-[#C9A962]/25 mx-auto mb-8" />

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={onAnother}
              className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold"
            >
              Submit Another Request
            </button>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-sm text-xs tracking-[0.15em] uppercase border border-white/10 text-white/35 hover:text-white/60 hover:border-white/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Home() {
  const [showRequest, setShowRequest] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);

  const statement = useInView(0.2);
  const svcSection = useInView(0.05);
  const howIt = useInView(0.12);
  const accessSection = useInView(0.15);

  useEffect(() => {
    const timer = setTimeout(() => setLineWidth(100), 400);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (showRequest || showSuccess) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showRequest, showSuccess]);

  const openRequest = () => setShowRequest(true);
  const handleSuccess = () => {
    setShowRequest(false);
    setShowSuccess(true);
  };
  const handleAnother = () => {
    setShowSuccess(false);
    setShowRequest(true);
  };

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar onRequestClick={openRequest} />

      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-24 pb-16 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full bg-[#C9A962]/6 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#C9A962]/3 blur-[100px]" />
        </div>

        {/* Gold line sweep */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent transition-all duration-[2.5s] ease-out"
            style={{ width: `${lineWidth}%` }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10 fade-up">
            <div className="w-8 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962]/75 text-[9px] tracking-[0.45em] uppercase font-medium">
              Exclusively Yours · 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair font-bold leading-[1.04] mb-6 fade-up-delay-1">
            <span className="block text-white/85 text-[11px] sm:text-sm tracking-[0.35em] uppercase font-light mb-3">
              For the first time,
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
              the world is yours
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl shimmer-gold">
              to command.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white/40 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-10 fade-up-delay-2">
            Meet your personal assistant — always on call, exclusively for you.
            Exotic cars, private jets, luxury villas, superyachts, designer pieces, Michelin tables.
            Whatever you need. Whenever you need it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-up-delay-3">
            <button
              onClick={openRequest}
              className="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
            >
              Submit Your Request
              <span className="ml-1">→</span>
            </button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-[11px] border border-white/12 text-white/45 hover:border-[#C9A962]/35 hover:text-white/70 transition-all tracking-[0.15em] uppercase"
            >
              Explore Services
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 sm:mt-14 flex items-center gap-5 fade-up-delay-3">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((n) => (
                <div
                  key={n}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9A962]/30 to-[#C9A962]/10 border border-[#C9A962]/25 flex items-center justify-center"
                >
                  <span className="text-[#C9A962] text-[8px] font-bold">{n}</span>
                </div>
              ))}
            </div>
            <p className="text-white/25 text-[10px] tracking-wide">
              <span className="text-white/50 font-medium">200+ members</span> live differently
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="text-white text-[8px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ─────────── STATEMENT ─────────── */}
      <section
        ref={statement.ref}
        className={`py-20 sm:py-32 px-5 sm:px-8 border-y border-[#C9A962]/08 transition-all duration-1000 ${
          statement.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-white/80 leading-[1.2]">
            Imagine having someone who handles{" "}
            <span className="text-gold-gradient">everything.</span>
            <br />
            <span className="text-white/30 text-xl sm:text-3xl md:text-4xl font-normal">
              No searching. No waiting. No compromise.
            </span>
          </p>
          <div className="mt-8 w-16 h-px bg-[#C9A962]/35" />
          <p className="mt-5 text-white/30 text-sm max-w-lg leading-relaxed">
            NexAssist is not an app. It&apos;s a privilege — the world&apos;s first 24/7 personal concierge
            dedicated exclusively to your lifestyle, available with a single message.
          </p>
        </div>
      </section>

      {/* ─────────── SERVICES GRID ─────────── */}
      <section
        id="services"
        ref={svcSection.ref}
        className={`py-16 sm:py-24 px-3 sm:px-5 transition-all duration-1000 ${
          svcSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 px-2 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#C9A962]/50" />
                <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">Your Assistant Arranges</span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Every desire,{" "}
                <span className="text-gold-gradient">fulfilled.</span>
              </h2>
            </div>
            <button
              onClick={openRequest}
              className="hidden sm:flex items-center gap-2 text-[#C9A962]/50 text-[10px] tracking-[0.15em] uppercase hover:text-[#C9A962] transition-colors"
            >
              Request anything <span>→</span>
            </button>
          </div>

          {/* Mobile: single column stacked */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={openRequest}
                className={`service-card relative overflow-hidden group text-left ${
                  i === 0
                    ? "lg:col-span-2 h-[52vw] sm:h-[300px] lg:h-[360px]"
                    : i === 3
                    ? "lg:col-span-2 h-[52vw] sm:h-[260px] lg:h-[320px]"
                    : "h-[52vw] sm:h-[240px] lg:h-[280px]"
                }`}
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${s.photo})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/95 via-[#080d18]/35 to-[#080d18]/08 group-hover:from-[#080d18]/85 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/04 transition-all duration-500" />
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]/0 group-hover:bg-[#C9A962]/50 transition-all duration-300" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="w-5 h-px bg-[#C9A962]/50 mb-2.5 group-hover:w-8 transition-all duration-300" />
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-0.5 group-hover:text-[#C9A962] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-[10px] sm:text-xs tracking-wide group-hover:text-white/60 transition-colors duration-300">
                    {s.sub}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[#C9A962]/0 group-hover:text-[#C9A962]/75 transition-all duration-300 text-[10px] tracking-[0.15em] uppercase">
                    <span>Request</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section
        id="how-it-works"
        ref={howIt.ref}
        className={`py-20 sm:py-32 px-5 sm:px-8 border-t border-[#C9A962]/08 transition-all duration-1000 ${
          howIt.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">The Experience</span>
              <div className="w-5 h-px bg-[#C9A962]/50" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Simple, by design.
            </h2>
          </div>

          {/* Steps — stacked on mobile, row on desktop */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-0 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden sm:block absolute top-8 left-[18%] right-[18%] h-px bg-gradient-to-r from-[#C9A962]/20 via-[#C9A962]/20 to-[#C9A962]/20" />
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col sm:items-center sm:text-center px-4 sm:px-8">
                {/* Mobile: horizontal layout */}
                <div className="flex sm:flex-col items-start sm:items-center gap-5 sm:gap-0">
                  <div className="relative flex-shrink-0 inline-flex w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#C9A962]/30 items-center justify-center bg-[#080d18] sm:mb-7">
                    <span className="font-playfair text-sm font-bold text-[#C9A962]/70">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed sm:max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 sm:mt-16 text-center">
            <button
              onClick={openRequest}
              className="btn-gold inline-flex items-center gap-2 px-10 sm:px-12 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
            >
              Submit Your Request →
            </button>
          </div>
        </div>
      </section>

      {/* ─────────── APP STORE ─────────── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 border-t border-[#C9A962]/08">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#C9A962]/40" />
            <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">Coming Soon</span>
            <div className="w-5 h-px bg-[#C9A962]/40" />
          </div>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white mb-3">
            The NexAssist App
          </h2>
          <p className="text-white/30 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
            Your personal assistant in your pocket. Request anything, from anywhere, anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* App Store badge */}
            <div className="flex items-center gap-3.5 border border-[#C9A962]/20 hover:border-[#C9A962]/45 rounded-sm px-5 py-3.5 transition-all duration-300 cursor-not-allowed group min-w-[180px]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white/60 group-hover:text-white/80 transition-colors flex-shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              <div className="text-left">
                <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Soon on</p>
                <p className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors tracking-wide">App Store</p>
              </div>
            </div>

            {/* Google Play badge */}
            <div className="flex items-center gap-3.5 border border-[#C9A962]/20 hover:border-[#C9A962]/45 rounded-sm px-5 py-3.5 transition-all duration-300 cursor-not-allowed group min-w-[180px]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white/60 group-hover:text-white/80 transition-colors flex-shrink-0">
                <path d="M3.18 23.76a2 2 0 0 0 2.17-.4l.08-.06 12.09-6.98-2.64-2.65zm17.12-10.2L17.76 12l-2.93 2.92 2.93 2.93 2.55-1.47a1.43 1.43 0 0 0 0-2.82zM3.03.85a1.43 1.43 0 0 0-.53 1.12v19.95a1.43 1.43 0 0 0 .53 1.13L3.15 23 14.84 11.3v-.27zm10.42 13.47L3.03.85z"/>
              </svg>
              <div className="text-left">
                <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Soon on</p>
                <p className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors tracking-wide">Google Play</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-white/18 text-[9px] tracking-[0.25em] uppercase">
            iOS & Android · Launching soon · Members get early access
          </p>
        </div>
      </section>

      {/* ─────────── ACCESS SECTION ─────────── */}
      <section
        ref={accessSection.ref}
        className={`py-20 sm:py-32 px-4 sm:px-8 border-t border-[#C9A962]/08 transition-all duration-1000 ${
          accessSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/06 via-[#080d18]/95 to-[#080d18]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/20 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#C9A962]/30 via-transparent to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-[#C9A962]/30 via-transparent to-transparent" />

            <div className="relative px-7 sm:px-16 py-16 sm:py-20 text-center">
              <div className="inline-flex items-center gap-3 mb-7">
                <div className="w-5 h-px bg-[#C9A962]/50" />
                <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">Not For Everyone</span>
                <div className="w-5 h-px bg-[#C9A962]/50" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                This isn&apos;t an app.
                <br />
                <span className="text-gold-gradient">It&apos;s a privilege.</span>
              </h2>
              <p className="text-white/35 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10">
                NexAssist members don&apos;t search. They don&apos;t wait. They simply ask —
                and the world rearranges itself around their needs.
              </p>
              <button
                onClick={openRequest}
                className="btn-gold inline-flex items-center gap-2 px-10 sm:px-14 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
              >
                Submit Your Request →
              </button>
              <p className="mt-5 text-white/18 text-[9px] tracking-widest uppercase">
                Private waitlist · No spam · Invite only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PARTNER CTA ─────────── */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#C9A962]/08">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-2.5">For Providers</p>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
              Are you a luxury service provider?
            </h3>
            <p className="text-white/30 text-sm mt-1.5 max-w-sm leading-relaxed">
              Connect with high-net-worth clients who are ready to buy. Vetted, discreet, exclusive.
            </p>
          </div>
          <Link
            href="/partner/onboarding"
            className="shrink-0 border border-[#C9A962]/30 text-[#C9A962]/70 hover:text-[#C9A962] hover:border-[#C9A962]/60 px-8 py-3.5 rounded-sm text-[10px] tracking-[0.15em] uppercase transition-all duration-300"
          >
            Apply as a Partner →
          </Link>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="border-t border-[#C9A962]/10 py-10 sm:py-12 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
              <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.6" />
              <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            <span className="font-playfair text-base font-bold text-white/70 tracking-wide">
              Nex<span className="text-[#C9A962]">Assist</span>
            </span>
          </div>
          <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
            © {new Date().getFullYear()} NexAssist · Personal Concierge
          </p>
          <div className="flex gap-6 text-[9px] tracking-[0.2em] uppercase text-white/22">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="hover:text-[#C9A962] transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* ─────────── MODALS ─────────── */}
      {showRequest && (
        <RequestModal
          onClose={() => setShowRequest(false)}
          onSuccess={handleSuccess}
        />
      )}
      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
          onAnother={handleAnother}
        />
      )}
    </div>
  );
}
