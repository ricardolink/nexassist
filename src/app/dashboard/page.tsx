"use client";
import { useState } from "react";
import Link from "next/link";

const serviceTypes = [
  "Private Jet", "Exotic Car", "Luxury Villa", "Yacht Charter", "VIP Event", "Fine Dining",
];

const recommendations = [
  { icon: "✈️", title: "Private Jets", desc: "Charter from 500+ aircraft worldwide", tag: "Most Popular" },
  { icon: "🚗", title: "Exotic Cars", desc: "Lamborghini, Ferrari, Rolls-Royce & more", tag: "Top Rated" },
  { icon: "🏡", title: "Luxury Villas", desc: "Private residences in 80+ countries", tag: "New" },
  { icon: "⛵", title: "Yacht Charters", desc: "Mediterranean & Caribbean specialists", tag: "" },
  { icon: "🎭", title: "VIP Events", desc: "Front-row access, globally", tag: "" },
  { icon: "🍽️", title: "Fine Dining", desc: "Michelin-starred reservations", tag: "" },
];

const mockRequests = [
  { id: 1, service: "Exotic Car", status: "matched", date: "Mar 5, 2026", desc: "Ferrari 488 for weekend in Beverly Hills" },
  { id: 2, service: "Private Jet", status: "pending", date: "Mar 12, 2026", desc: "LA → Miami, 4 passengers" },
];

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  matched: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  confirmed: "text-green-400 bg-green-400/10 border-green-400/30",
  completed: "text-white/60 bg-white/5 border-white/20",
};

export default function DashboardPage() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setService(""); setDate(""); setBudget(""); setDescription("");
  }

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Top bar */}
      <nav className="border-b border-[#C9A962]/20 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl font-bold text-[#C9A962]">NexAssist</Link>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-white/50 text-sm hover:text-white/80">Admin</Link>
          <div className="w-9 h-9 rounded-full bg-[#C9A962] flex items-center justify-center text-[#0A1628] font-bold text-sm">R</div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-playfair text-4xl font-bold text-white mb-1">Good morning, Ricardo 👋</h1>
          <p className="text-white/50">What can we arrange for you today?</p>
        </div>

        {/* Request form */}
        <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8 mb-10">
          <h2 className="font-playfair text-2xl font-bold text-white mb-6">New Request</h2>
          {submitted && (
            <div className="bg-green-400/10 border border-green-400/30 text-green-400 rounded-lg px-4 py-3 mb-6">
              ✓ Request submitted! We&apos;ll match you within a few hours.
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-white/70 text-sm mb-2">Service Type</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962]"
              >
                <option value="" className="bg-[#0D1F3C]">Select a service...</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s} className="bg-[#0D1F3C]">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Budget</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  placeholder="e.g. 5,000"
                  className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white pl-8 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-white/70 text-sm mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={3}
                placeholder="Describe your ideal experience..."
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30 resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#C9A962] text-[#0A1628] px-8 py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Active requests */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl font-bold text-white mb-5">Active Requests</h2>
          <div className="space-y-4">
            {mockRequests.map((req) => (
              <div key={req.id} className="bg-[#112040] border border-[#C9A962]/20 rounded-xl px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white font-semibold">{req.service}</span>
                    <span className={`text-xs border px-2 py-0.5 rounded-full capitalize ${statusColors[req.status]}`}>
                      {req.status}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">{req.desc}</p>
                </div>
                <div className="text-white/40 text-sm text-right">{req.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="font-playfair text-2xl font-bold text-white mb-5">Explore Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendations.map((r) => (
              <div key={r.title} className="bg-[#112040] border border-[#C9A962]/20 rounded-xl p-6 hover:border-[#C9A962]/60 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{r.icon}</span>
                  {r.tag && (
                    <span className="text-xs text-[#C9A962] border border-[#C9A962]/40 px-2 py-0.5 rounded-full">{r.tag}</span>
                  )}
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A962] transition-colors">{r.title}</h3>
                <p className="text-white/50 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
