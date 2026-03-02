"use client";
import Link from "next/link";

const stats = [
  { label: "Active Listings", value: "3" },
  { label: "Requests Received", value: "12" },
  { label: "Completed Jobs", value: "8" },
  { label: "Avg. Rating", value: "4.9 ⭐" },
];

const requests = [
  { id: 1, client: "Client #A4F2", service: "Exotic Car", date: "Mar 5", budget: "$3,500", status: "new" },
  { id: 2, client: "Client #B9C1", service: "Luxury Villa", date: "Mar 10–17", budget: "$12,000", status: "accepted" },
  { id: 3, client: "Client #D2E8", service: "Exotic Car", date: "Mar 3", budget: "$2,000", status: "completed" },
];

const statusColors: Record<string, string> = {
  new: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  accepted: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  completed: "text-white/50 bg-white/5 border-white/20",
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <nav className="border-b border-[#C9A962]/20 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl font-bold text-[#C9A962]">NexAssist</Link>
        <span className="text-[#C9A962] text-sm border border-[#C9A962]/30 px-3 py-1 rounded-full">Partner Portal</span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="font-playfair text-4xl font-bold text-white mb-1">Partner Dashboard</h1>
          <p className="text-white/50">Manage your listings and incoming requests</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#112040] border border-[#C9A962]/20 rounded-xl p-5 text-center">
              <div className="font-playfair text-3xl font-bold text-[#C9A962] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Requests */}
        <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8 mb-8">
          <h2 className="font-playfair text-2xl font-bold text-white mb-6">Incoming Requests</h2>
          <div className="space-y-4">
            {requests.map((r) => (
              <div key={r.id} className="bg-[#0D1F3C] rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white font-semibold">{r.service}</span>
                    <span className={`text-xs border px-2 py-0.5 rounded-full capitalize ${statusColors[r.status]}`}>
                      {r.status}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">{r.client} · {r.date} · Budget: {r.budget}</p>
                </div>
                {r.status === "new" && (
                  <div className="flex gap-2">
                    <button className="bg-[#C9A962] text-[#0A1628] px-4 py-2 rounded text-sm font-semibold hover:bg-[#E2C98A] transition-colors">
                      Accept
                    </button>
                    <button className="border border-white/20 text-white/60 px-4 py-2 rounded text-sm hover:border-white/40 transition-colors">
                      Decline
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Profile settings */}
        <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8">
          <h2 className="font-playfair text-2xl font-bold text-white mb-6">Profile Settings</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              ["Business Name", "Ricco Exotics LA"],
              ["Contact Email", "ricardolink@gmail.com"],
              ["Services", "Exotic Cars, Luxury Villas"],
              ["Coverage Areas", "Los Angeles, Miami, Las Vegas"],
            ].map(([label, val]) => (
              <div key={label}>
                <label className="block text-white/60 text-sm mb-2">{label}</label>
                <input
                  defaultValue={val}
                  className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962]"
                />
              </div>
            ))}
          </div>
          <button className="mt-6 bg-[#C9A962] text-[#0A1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
