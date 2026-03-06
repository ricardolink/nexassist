"use client";
import { useState, useRef } from "react";
import PhoneInput from "@/components/PhoneInput";
import AuthModal from "@/components/AuthModal";
import { countries, defaultCountry, type Country } from "@/lib/countries";
import { saveRequest, updateRequest, type SavedRequest } from "@/lib/requests";
import { supabase } from "@/lib/supabase";

const serviceTypes = [
  "Exotic Car Rental", "Chauffeur Services", "Car Sales", "Private Jets",
  "Luxury Villas", "Superyachts", "Fine Watches", "Designer Bags",
  "Luxury Travel", "Other",
];

export default function RequestModal({
  onClose,
  onSuccess,
  prefill,
  editId,
}: {
  onClose: () => void;
  onSuccess: () => void;
  prefill?: Partial<SavedRequest>;
  editId?: string; // if set, we're editing an existing request
}) {
  const [selected, setSelected] = useState(prefill?.serviceType ?? "");
  const [description, setDescription] = useState(prefill?.description ?? "");
  const [dateNeeded, setDateNeeded] = useState(prefill?.dateNeeded ?? "");
  const [city, setCity] = useState(prefill?.city ?? "");
  const [budget, setBudget] = useState(prefill?.budget ?? "");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(prefill?.photoPreview ?? null);
  const [name, setName] = useState(prefill?.name ?? "");
  const [email, setEmail] = useState(prefill?.email ?? "");
  const [phone, setPhone] = useState(prefill?.phone ?? "");
  const [country, setCountry] = useState<Country>(
    prefill?.countryCode
      ? (countries.find((c) => c.code === prefill.countryCode) ?? defaultCountry)
      : defaultCountry
  );
  const [submitting, setSubmitting] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

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

  async function persistRequest(authedEmail?: string) {
    setSubmitting(true);
    const payload = {
      serviceType: selected,
      description,
      dateNeeded,
      city,
      budget,
      photoPreview,
      name: name || authedEmail?.split("@")[0] || "",
      email: email || authedEmail || "",
      phone,
      countryDial: country.dial,
      countryFlag: country.flag,
      countryCode: country.code,
    };

    // Save to localStorage
    if (editId) {
      updateRequest(editId, { ...payload, status: "pending" });
    } else {
      saveRequest(payload);
    }

    // Also save to Supabase if user is logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const dbPayload = {
        user_id: session.user.id,
        service_type: selected,
        description,
        date_needed: dateNeeded,
        city,
        budget,
        phone,
        country_dial: country.dial,
        country_flag: country.flag,
        client_name: payload.name,
        client_email: payload.email,
        status: "pending",
      };
      if (editId) {
        // Try to find matching Supabase record by description+email and update
        await supabase.from("requests").upsert(dbPayload);
      } else {
        await supabase.from("requests").insert(dbPayload);
      }
    }

    setSubmitting(false);
    onSuccess();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Check if logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // Show auth modal, then submit after login
      setPendingSubmit(true);
      setShowAuth(true);
      return;
    }
    await persistRequest(session.user.email);
  }

  return (
    <>
    {showAuth && (
      <AuthModal
        onClose={() => { setShowAuth(false); setPendingSubmit(false); }}
        onSuccess={async (authedEmail) => {
          setShowAuth(false);
          if (pendingSubmit) {
            setPendingSubmit(false);
            await persistRequest(authedEmail);
          }
        }}
      />
    )}
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.6)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-slide-up">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

        <div className="px-6 py-7 sm:px-8 sm:py-8 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-7">
            <div>
              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-1.5">
                {editId ? "Edit Request" : "Your Personal Assistant"}
              </p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                {editId ? (
                  <>Update your<br /><span className="text-gold-gradient">request.</span></>
                ) : (
                  <>What can we arrange<br /><span className="text-gold-gradient">for you?</span></>
                )}
              </h2>
            </div>
            <button onClick={onClose} className="text-white/30 hover:text-white transition-colors ml-4 mt-1 text-xl leading-none" aria-label="Close">
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                placeholder="I need a Ferrari SF90 delivered to Beverly Hills for this weekend..."
                required
                rows={3}
                className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Date · City · Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Your budget</p>
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

            {/* Photo */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">Reference photo</p>
                <span className="text-white/22 text-[9px] tracking-wider uppercase">Optional</span>
              </div>

              {photoPreview ? (
                <div className="relative rounded-sm overflow-hidden border border-[#C9A962]/20 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photoPreview} alt="Preview" className="w-full h-36 object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button type="button" onClick={removePhoto} className="bg-[#080d18]/90 border border-white/20 text-white/70 hover:text-white text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-colors">
                      Remove
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#080d18]/80 border border-[#C9A962]/20 text-[#C9A962] text-[9px] tracking-wider uppercase px-2 py-1 rounded-sm">
                    {photo?.name?.slice(0, 20) ?? "Photo"}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-5 cursor-pointer transition-all group">
                    <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">Upload photo</span>
                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handlePhotoFile(e.target.files?.[0] ?? null)} />
                  </label>
                  <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-5 cursor-pointer transition-all group">
                    <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">Take photo</span>
                    <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => handlePhotoFile(e.target.files?.[0] ?? null)} />
                  </label>
                </div>
              )}
            </div>

            {/* Contact info */}
            {!isLoggedIn() && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Your name</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First name" required className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-2">Phone number</p>
                  <PhoneInput value={phone} onChange={setPhone} selectedCountry={country} onCountryChange={setCountry} required />
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
              ) : editId ? (
                "Save Changes →"
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
  </>
  );
}
