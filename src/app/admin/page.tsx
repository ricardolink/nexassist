"use client";
import { useState } from "react";
import Link from "next/link";

const ADMIN_PASSWORD = "nexadmin2024";

const mockRequests = [
  { id: 1, client: "Ricardo J.", service: "Exotic Car", date: "Mar 5", budget: "$3,500", status: "matched" },
  { id: 2, client: "Sofia M.", service: "Private Jet", date: "Mar 12", budget: "$28,000", status: "pending" },
  { id: 3, client: "James K.", service: "Luxury Villa", date: "Mar 8–15", budget: "$15,000", status: "confirmed" },
];

const mockPartners = [
  { id: 1, name: "Ricco Exotics LA", services: "Exotic Cars, Villas", areas: "LA, Miami", verified: true },
  { id: 2, name: "SkyLux Jets", services: "Private Jets", areas: "Nationwide", verified: true },
  { id: 3, name: "Azure Yachts", services: "Yacht Charters", areas: "Miami, Caribbean", verified: false },
];

const mockWaitlist = [
  { id: 1, email: "alex@example.com", date: "Mar 1" },
  { id: 2, email: "priya@example.com", date: "Mar 1" },
  { id: 3, email: "marco@example.com", date: "Mar 2" },
];

type Tab = "requests" | "partners" | "waitlist";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("requests");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      setError("Incorrect password");
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Link href="/" className="font-playfair text-3xl font-bold text-[#C9A962]">NexAssist</Link>
            <p className="text-white/50 mt-2">Admin Access</p>
          </div>
          <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-white/70 text-sm mb-2">Admin Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962]"
                  placeholder="••••••••••••"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#C9A962] text-[#0A1628] py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Total Users", value: "142" },
    { label: "Partners", value: "23" },
    { label: "Total Requests", value: "89" },
    { label: "Waitlist", value: "317" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <nav className="border-b border-[#C9A962]/20 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl font-bold text-[#C9A962]">NexAssist</Link>
        <span className="text-[#C9A962] text-sm border border-[#C9A962]/30 px-3 py-1 rounded-full">Admin</span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-playfair text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#112040] border border-[#C9A962]/20 rounded-xl p-5 text-center">
              <div className="font-playfair text-3xl font-bold text-[#C9A962] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["requests", "partners", "waitlist"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                tab === t ? "bg-[#C9A962] text-[#0A1628]" : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Requests tab */}
        {tab === "requests" && (
          <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/50 px-6 py-4">Client</th>
                  <th className="text-left text-white/50 px-6 py-4">Service</th>
                  <th className="text-left text-white/50 px-6 py-4">Date</th>
                  <th className="text-left text-white/50 px-6 py-4">Budget</th>
                  <th className="text-left text-white/50 px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockRequests.map((r) => (
                  <tr key={r.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-4 text-white">{r.client}</td>
                    <td className="px-6 py-4 text-white/70">{r.service}</td>
                    <td className="px-6 py-4 text-white/70">{r.date}</td>
                    <td className="px-6 py-4 text-[#C9A962]">{r.budget}</td>
                    <td className="px-6 py-4">
                      <span className="capitalize text-xs border px-2 py-0.5 rounded-full text-white/70 border-white/30">{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Partners tab */}
        {tab === "partners" && (
          <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/50 px-6 py-4">Business</th>
                  <th className="text-left text-white/50 px-6 py-4">Services</th>
                  <th className="text-left text-white/50 px-6 py-4">Areas</th>
                  <th className="text-left text-white/50 px-6 py-4">Verified</th>
                </tr>
              </thead>
              <tbody>
                {mockPartners.map((p) => (
                  <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-4 text-white">{p.name}</td>
                    <td className="px-6 py-4 text-white/70">{p.services}</td>
                    <td className="px-6 py-4 text-white/70">{p.areas}</td>
                    <td className="px-6 py-4">
                      {p.verified
                        ? <span className="text-green-400 text-xs border border-green-400/30 px-2 py-0.5 rounded-full">Verified</span>
                        : <span className="text-yellow-400 text-xs border border-yellow-400/30 px-2 py-0.5 rounded-full">Pending</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Waitlist tab */}
        {tab === "waitlist" && (
          <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/50 px-6 py-4">#</th>
                  <th className="text-left text-white/50 px-6 py-4">Email</th>
                  <th className="text-left text-white/50 px-6 py-4">Joined</th>
                </tr>
              </thead>
              <tbody>
                {mockWaitlist.map((w) => (
                  <tr key={w.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-4 text-white/40">{w.id}</td>
                    <td className="px-6 py-4 text-white">{w.email}</td>
                    <td className="px-6 py-4 text-white/50">{w.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
