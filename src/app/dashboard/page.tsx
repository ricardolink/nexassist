"use client";
import { useState } from "react";
import Link from "next/link";

const serviceTypes = [
  "Private Jet Charter",
  "Exotic Car Rental",
  "Luxury Villa",
  "Yacht Charter",
  "VIP Event Access",
  "Fine Dining Reservation",
  "Helicopter Charter",
  "Luxury Hotel Suite",
  "Supercar Experience",
  "Other / Custom Request",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $500,000",
  "$500,000+",
  "Flexible / Open Budget",
];

const guestCounts = ["Just me", "2 guests", "3–5 guests", "6–10 guests", "10–20 guests", "20+ guests"];

const recommendations = [
  { icon: "✈️", title: "Private Aviation", desc: "500+ aircraft on standby", tag: "Popular" },
  { icon: "🚗", title: "Exotic Cars", desc: "Ferrari, Lambo, Rolls & more", tag: "Trending" },
  { icon: "🏡", title: "Luxury Villas", desc: "Staffed estates, 80+ countries", tag: "New" },
  { icon: "⛵", title: "Yacht Charters", desc: "Mediterranean specialists", tag: "" },
  { icon: "🎭", title: "VIP Events", desc: "Front-row access, globally", tag: "" },
  { icon: "🍽️", title: "Fine Dining", desc: "Michelin-starred bookings", tag: "" },
];

const mockRequests = [
  { id: 1, service: "Exotic Car Rental", status: "matched", date: "Mar 5, 2026", detail: "Ferrari 488 · Beverly Hills · 3 days" },
  { id: 2, service: "Private Jet", status: "pending", date: "Mar 12, 2026", detail: "LA → Miami · 4 pax · One way" },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  pending: { label: "Pending Review", color: "text-amber-400 bg-amber-400/08 border-amber-400/25" },
  matched: { label: "Partner Matched", color: "text-emerald-400 bg-emerald-400/08 border-emerald-400/25" },
  confirmed: { label: "Confirmed", color: "text-sky-400 bg-sky-400/08 border-sky-400/25" },
  completed: { label: "Completed", color: "text-white/40 bg-white/05 border-white/15" },
};

export default function DashboardPage() {
  const [form, setForm] = useState({
    serviceType: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    guests: "",
    budget: "",
    requirements: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field: string, val: string) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ serviceType: "", destination: "", departureDate: "", returnDate: "", guests: "", budget: "", requirements: "", additionalInfo: "" });
    }, 800);
  }

  const selectClass = "w-full input-luxury px-4 py-3 rounded-sm text-sm appearance-none";
  const inputClass = "w-full input-luxury px-4 py-3 rounded-sm text-sm";

  return (
    <div className="min-h-screen bg-[#0A1628] bg-grid">
      {/* Top bar */}
      <nav className="border-b border-[#C9A962]/12 px-6 lg:px-10 py-4 flex items-center justify-between bg-[#0A1628]/90 backdrop-blur-xl sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded border border-[#C9A962]/50 flex items-center justify-center">
            <span className="text-[#C9A962] text-xs font-bold">N</span>
          </div>
          <span className="font-playfair text-lg font-bold text-white">NexAssist</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/admin" className="text-white/30 text-xs tracking-widest uppercase hover:text-white/60 transition-colors">Admin</Link>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A962] to-[#A8893D] flex items-center justify-center text-[#0A1628] font-bold text-xs">R</div>
            <span className="text-white/60 text-sm hidden sm:block">Ricardo</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">

        {/* Welcome */}
        <div className="mb-12">
          <p className="text-[#C9A962] text-xs tracking-[0.3em] uppercase mb-2">Member Dashboard</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">Good morning, Ricardo.</h1>
          <div className="w-12 h-px bg-[#C9A962]/40 mt-4" />
        </div>

        {/* ── New Request Form ── */}
        <div className="card-luxury rounded-sm p-8 md:p-10 mb-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white">New Request</h2>
              <p className="text-white/35 text-sm mt-1">Tell us exactly what you need</p>
            </div>
            <div className="w-8 h-8 rounded border border-[#C9A962]/30 flex items-center justify-center text-[#C9A962] text-lg">+</div>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-3 border border-emerald-400/20 bg-emerald-400/06 rounded-sm px-5 py-4">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-400 text-sm">Request submitted — we&apos;ll match you with a partner within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Service Type *</label>
                <select value={form.serviceType} onChange={(e) => handleChange("serviceType", e.target.value)} required className={selectClass + " bg-[#0A1628]"}>
                  <option value="" className="bg-[#0A1628]">Select a service…</option>
                  {serviceTypes.map((s) => <option key={s} value={s} className="bg-[#0A1628]">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Destination / Location *</label>
                <input
                  type="text"
                  value={form.destination}
                  onChange={(e) => handleChange("destination", e.target.value)}
                  placeholder="e.g. Miami, Amalfi Coast, Dubai…"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Start Date *</label>
                <input type="date" value={form.departureDate} onChange={(e) => handleChange("departureDate", e.target.value)} required className={inputClass + " [color-scheme:dark]"} />
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">End Date</label>
                <input type="date" value={form.returnDate} onChange={(e) => handleChange("returnDate", e.target.value)} className={inputClass + " [color-scheme:dark]"} />
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Number of Guests *</label>
                <select value={form.guests} onChange={(e) => handleChange("guests", e.target.value)} required className={selectClass + " bg-[#0A1628]"}>
                  <option value="" className="bg-[#0A1628]">Select…</option>
                  {guestCounts.map((g) => <option key={g} value={g} className="bg-[#0A1628]">{g}</option>)}
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Budget Range *</label>
                <select value={form.budget} onChange={(e) => handleChange("budget", e.target.value)} required className={selectClass + " bg-[#0A1628]"}>
                  <option value="" className="bg-[#0A1628]">Select a range…</option>
                  {budgetRanges.map((b) => <option key={b} value={b} className="bg-[#0A1628]">{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Specific Requirements</label>
                <input
                  type="text"
                  value={form.requirements}
                  onChange={(e) => handleChange("requirements", e.target.value)}
                  placeholder="e.g. Pet-friendly, specific model, halal catering…"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Additional Details</label>
              <textarea
                value={form.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                rows={4}
                placeholder="Share anything else that would help us find the perfect match — preferences, past experiences, special occasions…"
                className={inputClass + " resize-none leading-relaxed"}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-white/25 text-xs">Fields marked * are required</p>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold px-10 py-3.5 rounded-sm text-xs disabled:opacity-50"
              >
                {loading ? "Submitting…" : "Submit Request"}
              </button>
            </div>
          </form>
        </div>

        {/* ── Active Requests ── */}
        {mockRequests.length > 0 && (
          <div className="mb-10">
            <h2 className="font-playfair text-xl font-bold text-white mb-5">Active Requests</h2>
            <div className="space-y-3">
              {mockRequests.map((req) => (
                <div key={req.id} className="card-luxury rounded-sm px-6 py-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-white font-semibold text-sm">{req.service}</span>
                        <span className={`text-xs border px-2.5 py-0.5 rounded-full ${statusConfig[req.status].color}`}>
                          {statusConfig[req.status].label}
                        </span>
                      </div>
                      <p className="text-white/35 text-xs">{req.detail}</p>
                    </div>
                  </div>
                  <span className="text-white/30 text-xs">{req.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Recommendations ── */}
        <div>
          <h2 className="font-playfair text-xl font-bold text-white mb-5">Explore</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A962]/08">
            {recommendations.map((r) => (
              <div key={r.title} className="bg-[#0A1628] p-7 group hover:bg-[#0D1F3C] transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{r.icon}</span>
                  {r.tag && <span className="text-xs text-[#C9A962]/70 border border-[#C9A962]/20 px-2 py-0.5 rounded-full">{r.tag}</span>}
                </div>
                <div className="w-6 h-px bg-[#C9A962]/30 mb-3" />
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-[#C9A962] transition-colors">{r.title}</h3>
                <p className="text-white/35 text-xs">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
