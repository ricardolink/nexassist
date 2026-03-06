"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

const ADMIN_PASSWORD = "nexadmin2024";

const SERVICE_CATEGORIES = [
  "Exotic Cars", "Private Jets", "Luxury Villas", "Superyachts",
  "Fine Watches", "Designer Bags", "Fine Dining", "VIP Events",
  "Luxury Travel", "Custom Experiences",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Exotic Cars":        "#f59e0b",
  "Private Jets":       "#38bdf8",
  "Luxury Villas":      "#34d399",
  "Superyachts":        "#60a5fa",
  "Fine Watches":       "#a78bfa",
  "Designer Bags":      "#f472b6",
  "Fine Dining":        "#fb923c",
  "VIP Events":         "#e879f9",
  "Luxury Travel":      "#2dd4bf",
  "Custom Experiences": "#C9A962",
};

interface Application {
  id: string; name: string; company: string; email: string;
  phone: string | null; website: string | null; city: string | null;
  services: string[]; description: string;
  status: "pending" | "approved" | "rejected";
  admin_notes: string | null; created_at: string; reviewed_at: string | null;
}
interface Request {
  id: string; service_type: string; description: string; city: string;
  date_needed: string; budget: string; client_name: string; client_email: string; status: string; created_at: string;
}
interface Offer {
  id: string; request_id: string; partner_email: string; partner_company: string;
  price: string; status: string; created_at: string;
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const STATUS_STYLES: Record<string, string> = {
  pending:  "text-amber-400 border-amber-400/30 bg-amber-400/8",
  approved: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  rejected: "text-red-400 border-red-400/25 bg-red-400/6",
};

// ── Stat Card ──────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, color = "#C9A962" }: {
  label: string; value: string | number; sub?: string; color?: string;
}) {
  return (
    <div className="bg-[#0c1222] border border-white/8 rounded-sm p-5">
      <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-2">{label}</p>
      <p className="font-playfair text-3xl font-bold mb-1" style={{ color }}>{value}</p>
      {sub && <p className="text-white/25 text-[10px]">{sub}</p>}
    </div>
  );
}

// ── Category Bar ───────────────────────────────────────────────────────────
function CategoryBar({ label, count, max, color }: {
  label: string; count: number; max: number; color: string;
}) {
  const pct = max > 0 ? Math.max(4, (count / max) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 sm:w-36 shrink-0 text-right">
        <span className="text-white/45 text-[10px] truncate block">{label}</span>
      </div>
      <div className="flex-1 h-5 bg-white/4 rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-all duration-700 flex items-center justify-end pr-2"
          style={{ width: `${pct}%`, backgroundColor: color + "40", borderRight: `2px solid ${color}` }}
        >
        </div>
      </div>
      <div className="w-7 text-right">
        <span className="font-mono text-xs" style={{ color }}>{count}</span>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState<"overview" | "clients" | "applications" | "partners" | "requests">("overview");

  // Data
  const [applications, setApplications] = useState<Application[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  // Applications UI
  const [activeAppTab, setActiveAppTab] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [noteInput, setNoteInput] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    const [appsRes, reqsRes, offersRes] = await Promise.all([
      supabase.from("partner_applications").select("*").order("created_at", { ascending: false }),
      supabase.from("requests").select("*").order("created_at", { ascending: false }),
      supabase.from("partner_offers").select("*").order("created_at", { ascending: false }),
    ]);
    setApplications((appsRes.data as Application[]) || []);
    setRequests((reqsRes.data as Request[]) || []);
    setOffers((offersRes.data as Offer[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("nex_admin") === "1") setAuthed(true);
  }, []);
  useEffect(() => { if (authed) loadAll(); }, [authed, loadAll]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) { sessionStorage.setItem("nex_admin", "1"); setAuthed(true); }
    else { setPwError(true); setTimeout(() => setPwError(false), 1500); }
  }

  async function updateStatus(app: Application, status: "approved" | "rejected") {
    setSaving(app.id);
    const { error } = await supabase.from("partner_applications").update({
      status, admin_notes: noteInput[app.id] || app.admin_notes || null, reviewed_at: new Date().toISOString(),
    }).eq("id", app.id);
    if (!error) setApplications((prev) => prev.map((a) => a.id === app.id ? { ...a, status } : a));
    setSaving(null);
  }

  // ── Client analytics ──────────────────────────────────────────────────
  const uniqueClientEmails = [...new Set(requests.map((r) => r.client_email).filter(Boolean))];
  const totalClients = uniqueClientEmails.length;

  // Budget helpers
  const parseBudget = (b: string) => { const n = parseFloat((b || "").replace(/[^0-9.]/g, "")); return isNaN(n) ? 0 : n; };
  const reqsWithBudget = requests.filter((r) => parseBudget(r.budget) > 0);
  const totalPipeline  = reqsWithBudget.reduce((s, r) => s + parseBudget(r.budget), 0);
  const avgBudget      = reqsWithBudget.length > 0 ? totalPipeline / reqsWithBudget.length : 0;

  // Monthly trend — last 6 months
  const now = new Date();
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const yr = d.getFullYear(), mo = d.getMonth();
    const monthReqs = requests.filter((r) => { const rd = new Date(r.created_at); return rd.getFullYear() === yr && rd.getMonth() === mo; });
    const newClients = uniqueClientEmails.filter((email) => {
      const first = requests.filter((r) => r.client_email === email).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())[0];
      if (!first) return false;
      const fd = new Date(first.created_at);
      return fd.getFullYear() === yr && fd.getMonth() === mo;
    }).length;
    return { label: d.toLocaleDateString("en-US", { month: "short" }), requests: monthReqs.length, newClients };
  });
  const thisMonthData = monthlyData[5];
  const lastMonthData = monthlyData[4];
  const momGrowth = lastMonthData.newClients > 0
    ? Math.round(((thisMonthData.newClients - lastMonthData.newClients) / lastMonthData.newClients) * 100)
    : thisMonthData.newClients > 0 ? 100 : 0;
  const momReqGrowth = lastMonthData.requests > 0
    ? Math.round(((thisMonthData.requests - lastMonthData.requests) / lastMonthData.requests) * 100)
    : thisMonthData.requests > 0 ? 100 : 0;

  // Returning clients
  const returningClients = uniqueClientEmails.filter((e) => requests.filter((r) => r.client_email === e).length > 1).length;
  const retentionRate = totalClients > 0 ? Math.round((returningClients / totalClients) * 100) : 0;

  // Top cities
  const cityMap: Record<string, number> = {};
  requests.forEach((r) => { if (r.city) cityMap[r.city] = (cityMap[r.city] || 0) + 1; });
  const topCities = Object.entries(cityMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxCityCount = topCities[0]?.[1] || 1;

  // Budget range distribution
  const budgetRanges = [
    { label: "Under $1K",    min: 0,     max: 1000   },
    { label: "$1K – $5K",    min: 1000,  max: 5000   },
    { label: "$5K – $20K",   min: 5000,  max: 20000  },
    { label: "$20K – $50K",  min: 20000, max: 50000  },
    { label: "$50K+",        min: 50000, max: Infinity },
  ].map((range) => ({
    ...range,
    count: reqsWithBudget.filter((r) => { const b = parseBudget(r.budget); return b >= range.min && b < range.max; }).length,
  }));
  const maxBudgetCount = Math.max(...budgetRanges.map((r) => r.count), 1);

  // Per-client stats
  const clientStats = uniqueClientEmails.map((email) => {
    const cr = requests.filter((r) => r.client_email === email);
    const budgets = cr.filter((r) => parseBudget(r.budget) > 0).map((r) => parseBudget(r.budget));
    const lastReq = cr.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
    return {
      email,
      name: lastReq?.client_name || email,
      requestCount: cr.length,
      totalBudget: budgets.reduce((s, b) => s + b, 0),
      lastActivity: lastReq?.created_at || "",
      categories: [...new Set(cr.map((r) => r.service_type).filter(Boolean))],
    };
  }).sort((a, b) => b.requestCount - a.requestCount);

  // Max monthly bar heights
  const maxMonthlyReqs = Math.max(...monthlyData.map((m) => m.requests), 1);

  // ── Derived analytics ─────────────────────────────────────────────────
  const approvedPartners = applications.filter((a) => a.status === "approved");
  const pendingApps      = applications.filter((a) => a.status === "pending");

  // Requests by category
  const reqByCategory = SERVICE_CATEGORIES.map((cat) => ({
    cat, count: requests.filter((r) => r.service_type === cat).length,
  })).sort((a, b) => b.count - a.count);
  const maxReqCount = Math.max(...reqByCategory.map((r) => r.count), 1);

  // Partners by category (from approved applications)
  const partnersByCategory = SERVICE_CATEGORIES.map((cat) => ({
    cat, count: approvedPartners.filter((p) => p.services?.includes(cat)).length,
  })).filter((x) => x.count > 0).sort((a, b) => b.count - a.count);
  const maxPartnerCount = Math.max(...partnersByCategory.map((r) => r.count), 1);

  // Offer stats
  const liveQuotes   = offers.filter((o) => o.status === "sent").length;
  const acceptedOffers = offers.filter((o) => o.status === "accepted").length;
  const conversionRate = offers.length > 0 ? Math.round((acceptedOffers / offers.length) * 100) : 0;

  // Per-partner stats
  const partnerStats = approvedPartners.map((p) => {
    const partnerOffers = offers.filter((o) => o.partner_email === p.email);
    const accepted = partnerOffers.filter((o) => o.status === "accepted").length;
    return { ...p, totalOffers: partnerOffers.length, accepted, liveQuotes: partnerOffers.filter((o) => o.status === "sent").length };
  }).sort((a, b) => b.totalOffers - a.totalOffers);

  // Requests by status
  const pendingReqs   = requests.filter((r) => r.status === "pending").length;
  const matchedReqs   = requests.filter((r) => r.status === "matched").length;
  const completedReqs = requests.filter((r) => r.status === "completed").length;

  // Recent activity (last 6 of each)
  const recentRequests = requests.slice(0, 6);
  const recentOffers   = offers.slice(0, 6);

  // ── Login gate ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="bg-[#080d18] min-h-screen flex items-center justify-center px-5">
        <div className="w-full max-w-xs">
          <div className="text-center mb-8">
            <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-2">Admin</p>
            <h1 className="font-playfair text-2xl font-bold text-white">NexAssist Control</h1>
          </div>
          <form onSubmit={login} className="space-y-4">
            <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Admin password" autoFocus
              className={`w-full bg-white/3 border rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${pwError ? "border-red-500/50" : "border-white/10 focus:border-[#C9A962]/45"}`} />
            {pwError && <p className="text-red-400/70 text-xs text-center">Incorrect password</p>}
            <button type="submit" className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold">Enter →</button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────
  return (
    <div className="bg-[#080d18] text-white min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#080d18]/95 backdrop-blur-xl border-b border-[#C9A962]/12 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
            <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
            <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
          <div>
            <span className="font-playfair text-sm font-bold text-white">Nex<span className="text-[#C9A962]">Assist</span></span>
            <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase ml-2">Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={loadAll} disabled={loading} className="text-[10px] tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors flex items-center gap-1.5 border border-white/10 px-3 py-1.5 rounded-sm disabled:opacity-30">
            <svg className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} viewBox="0 0 12 12" fill="none">
              <path d="M10.5 6A4.5 4.5 0 1 1 6 1.5a4.5 4.5 0 0 1 3.18 1.32M10.5 1.5v3h-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Refresh
          </button>
          <button onClick={() => { sessionStorage.removeItem("nex_admin"); setAuthed(false); }}
            className="text-[10px] tracking-wider uppercase text-white/25 hover:text-white/50 transition-colors border border-white/10 px-3 py-1.5 rounded-sm">
            Sign Out
          </button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="border-b border-white/6 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex gap-0 overflow-x-auto scrollbar-hide">
          {([
            { id: "overview",     label: "Overview" },
            { id: "clients",      label: `Clients · ${totalClients}` },
            { id: "applications", label: `Applications${pendingApps.length > 0 ? ` · ${pendingApps.length}` : ""}` },
            { id: "partners",     label: `Partners · ${approvedPartners.length}` },
            { id: "requests",     label: `Requests · ${requests.length}` },
          ] as const).map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-5 py-4 text-[11px] tracking-[0.15em] uppercase transition-all border-b-2 whitespace-nowrap ${
                tab === t.id ? "border-[#C9A962] text-[#C9A962]" : "border-transparent text-white/30 hover:text-white/55"
              }`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20">

        {/* ════════════════════════════════════════
            TAB: OVERVIEW
        ════════════════════════════════════════ */}
        {tab === "overview" && (
          <div className="space-y-8">
            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Approved Partners"  value={approvedPartners.length} sub={`${pendingApps.length} pending review`} />
              <StatCard label="Client Requests"    value={requests.length} sub={`${pendingReqs} open · ${completedReqs} completed`} color="#38bdf8" />
              <StatCard label="Live Quotes"         value={liveQuotes} sub="Offers awaiting client response" color="#f59e0b" />
              <StatCard label="Conversion Rate"    value={`${conversionRate}%`} sub={`${acceptedOffers} of ${offers.length} offers accepted`} color="#34d399" />
            </div>

            {/* Secondary KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Total Offers Sent"  value={offers.length}       sub="Across all partners"           color="#a78bfa" />
              <StatCard label="Accepted Offers"    value={acceptedOffers}      sub="Deals successfully matched"    color="#34d399" />
              <StatCard label="In Progress"        value={matchedReqs}         sub="Actively being fulfilled"      color="#f472b6" />
              <StatCard label="Total Applications" value={applications.length} sub={`${applications.filter(a=>a.status==="rejected").length} rejected`} color="rgba(255,255,255,0.4)" />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Requests by Category */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Client Demand</p>
                    <h3 className="text-white font-medium text-sm">Requests by Category</h3>
                  </div>
                  <span className="text-white/20 text-xs">{requests.length} total</span>
                </div>
                <div className="space-y-3">
                  {reqByCategory.filter(r => r.count > 0).length === 0 ? (
                    <p className="text-white/20 text-sm text-center py-6">No requests yet</p>
                  ) : (
                    reqByCategory.map(({ cat, count }) => (
                      <CategoryBar key={cat} label={cat} count={count} max={maxReqCount} color={CATEGORY_COLORS[cat] || "#C9A962"} />
                    ))
                  )}
                </div>
              </div>

              {/* Partners by Category */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Network Coverage</p>
                    <h3 className="text-white font-medium text-sm">Partners by Category</h3>
                  </div>
                  <span className="text-white/20 text-xs">{approvedPartners.length} partners</span>
                </div>
                <div className="space-y-3">
                  {partnersByCategory.length === 0 ? (
                    <p className="text-white/20 text-sm text-center py-6">No approved partners yet</p>
                  ) : (
                    partnersByCategory.map(({ cat, count }) => (
                      <CategoryBar key={cat} label={cat} count={count} max={maxPartnerCount} color={CATEGORY_COLORS[cat] || "#C9A962"} />
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Coverage gap alert */}
            {(() => {
              const uncovered = SERVICE_CATEGORIES.filter(
                (cat) => requests.some((r) => r.service_type === cat) && !approvedPartners.some((p) => p.services?.includes(cat))
              );
              if (uncovered.length === 0) return null;
              return (
                <div className="bg-amber-500/6 border border-amber-500/20 rounded-sm p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-400/70 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L14.5 13H1.5L8 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M8 6v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <p className="text-amber-400/80 text-xs font-medium mb-1">Coverage Gap — {uncovered.length} categories have requests but no partner</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {uncovered.map((cat) => (
                          <span key={cat} className="text-[9px] tracking-[0.1em] border border-amber-500/25 text-amber-400/60 rounded-sm px-2 py-0.5 bg-amber-500/6">{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Requests */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm">
                <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
                  <h3 className="text-white text-sm font-medium">Recent Requests</h3>
                  <button onClick={() => setTab("requests")} className="text-[#C9A962]/40 hover:text-[#C9A962] text-[10px] tracking-wider uppercase transition-colors">View all →</button>
                </div>
                <div className="divide-y divide-white/4">
                  {recentRequests.length === 0 ? (
                    <p className="text-white/20 text-sm text-center py-8">No requests yet</p>
                  ) : recentRequests.map((r) => (
                    <div key={r.id} className="px-5 py-3 flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[8px] tracking-[0.15em] uppercase border rounded-sm px-1.5 py-0.5" style={{ color: CATEGORY_COLORS[r.service_type] + "aa", borderColor: CATEGORY_COLORS[r.service_type] + "35", backgroundColor: CATEGORY_COLORS[r.service_type] + "10" }}>
                            {r.service_type || "—"}
                          </span>
                          <span className="text-white/20 text-[10px]">{timeAgo(r.created_at)}</span>
                        </div>
                        <p className="text-white/55 text-xs truncate">{r.description || "No description"}</p>
                        <p className="text-white/25 text-[10px]">{r.city || "—"} {r.budget ? `· $${r.budget}` : ""}</p>
                      </div>
                      <span className={`text-[8px] tracking-[0.15em] uppercase border rounded-sm px-2 py-0.5 shrink-0 ${
                        r.status === "completed" ? "text-emerald-400/70 border-emerald-400/25 bg-emerald-400/6" :
                        r.status === "matched"   ? "text-[#C9A962]/70 border-[#C9A962]/25 bg-[#C9A962]/6" :
                        "text-white/30 border-white/10"}`}>
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Offers */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm">
                <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
                  <h3 className="text-white text-sm font-medium">Recent Partner Offers</h3>
                  <span className="text-white/20 text-[10px]">{offers.length} total</span>
                </div>
                <div className="divide-y divide-white/4">
                  {recentOffers.length === 0 ? (
                    <p className="text-white/20 text-sm text-center py-8">No offers yet</p>
                  ) : recentOffers.map((o) => (
                    <div key={o.id} className="px-5 py-3 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#C9A962]/12 border border-[#C9A962]/20 flex items-center justify-center shrink-0 text-[#C9A962] text-[10px] font-bold">
                        {o.partner_company?.[0]?.toUpperCase() || "?"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/65 text-xs font-medium truncate">{o.partner_company || o.partner_email}</p>
                        <p className="text-white/25 text-[10px]">{o.price ? `$${o.price}` : "No price"} · {timeAgo(o.created_at)}</p>
                      </div>
                      <span className={`text-[8px] tracking-[0.15em] uppercase border rounded-sm px-2 py-0.5 shrink-0 ${
                        o.status === "accepted" ? "text-emerald-400/70 border-emerald-400/25 bg-emerald-400/6" :
                        o.status === "declined" ? "text-red-400/60 border-red-400/20 bg-red-400/5" :
                        "text-amber-400/70 border-amber-400/25 bg-amber-400/6"}`}>
                        {o.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════
            TAB: CLIENTS
        ════════════════════════════════════════ */}
        {tab === "clients" && (
          <div className="space-y-8">

            {/* KPI Row 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Total Clients"     value={totalClients}   sub={`${returningClients} returning`}              color="#C9A962"  />
              <StatCard label="New This Month"    value={thisMonthData.newClients} sub={momGrowth >= 0 ? `+${momGrowth}% vs last month` : `${momGrowth}% vs last month`} color={momGrowth >= 0 ? "#34d399" : "#f87171"} />
              <StatCard label="Retention Rate"    value={`${retentionRate}%`} sub={`${returningClients} made 2+ requests`}   color="#a78bfa"  />
              <StatCard label="Requests / Client" value={totalClients > 0 ? (requests.length / totalClients).toFixed(1) : "0"} sub="Average per client" color="#38bdf8" />
            </div>

            {/* KPI Row 2 — financial */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Pipeline Value"    value={totalPipeline > 0 ? `$${totalPipeline >= 1000000 ? (totalPipeline/1000000).toFixed(1)+"M" : totalPipeline >= 1000 ? (totalPipeline/1000).toFixed(0)+"K" : totalPipeline.toFixed(0)}` : "—"} sub="Sum of all stated budgets"  color="#f59e0b" />
              <StatCard label="Avg Budget / Req"  value={avgBudget > 0 ? `$${avgBudget >= 1000 ? (avgBudget/1000).toFixed(1)+"K" : avgBudget.toFixed(0)}` : "—"} sub={`From ${reqsWithBudget.length} requests with budgets`} color="#fb923c" />
              <StatCard label="Requests This Mo." value={thisMonthData.requests} sub={momReqGrowth >= 0 ? `+${momReqGrowth}% vs last month` : `${momReqGrowth}% vs last month`} color={momReqGrowth >= 0 ? "#34d399" : "#f87171"} />
              <StatCard label="Completion Rate"   value={requests.length > 0 ? `${Math.round((requests.filter(r=>r.status==="completed").length/requests.length)*100)}%` : "—"} sub={`${requests.filter(r=>r.status==="completed").length} of ${requests.length} fulfilled`} color="#2dd4bf" />
            </div>

            {/* Monthly trend + Budget distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Monthly bar chart */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Growth</p>
                    <h3 className="text-white font-medium text-sm">Request Volume — Last 6 Months</h3>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {monthlyData.map((m, i) => {
                    const h = maxMonthlyReqs > 0 ? Math.max(4, (m.requests / maxMonthlyReqs) * 100) : 4;
                    const isThisMonth = i === 5;
                    return (
                      <div key={m.label} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-white/30 text-[9px] font-mono">{m.requests > 0 ? m.requests : ""}</span>
                        <div className="w-full relative flex justify-center">
                          <div
                            className="w-full rounded-t-sm transition-all duration-700"
                            style={{
                              height: `${h * 0.8}px`,
                              minHeight: "4px",
                              backgroundColor: isThisMonth ? "#C9A962" : "#C9A962" + "30",
                              boxShadow: isThisMonth ? "0 0 8px #C9A96240" : "none",
                            }}
                          />
                        </div>
                        <span className={`text-[9px] ${isThisMonth ? "text-[#C9A962]" : "text-white/25"}`}>{m.label}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm bg-[#C9A962]" />
                    <span className="text-white/30 text-[10px]">This month</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm bg-[#C9A962]/30" />
                    <span className="text-white/30 text-[10px]">Past months</span>
                  </div>
                </div>
              </div>

              {/* Budget distribution */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="mb-5">
                  <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Spend Profile</p>
                  <h3 className="text-white font-medium text-sm">Budget Distribution</h3>
                </div>
                <div className="space-y-3">
                  {budgetRanges.map((range) => {
                    const pct = maxBudgetCount > 0 ? Math.max(range.count > 0 ? 4 : 0, (range.count / maxBudgetCount) * 100) : 0;
                    const pctOfTotal = reqsWithBudget.length > 0 ? Math.round((range.count / reqsWithBudget.length) * 100) : 0;
                    return (
                      <div key={range.label} className="flex items-center gap-3">
                        <div className="w-24 shrink-0 text-right">
                          <span className="text-white/40 text-[10px]">{range.label}</span>
                        </div>
                        <div className="flex-1 h-5 bg-white/4 rounded-sm overflow-hidden">
                          <div className="h-full rounded-sm transition-all duration-700 flex items-center justify-end pr-2"
                            style={{ width: `${pct}%`, backgroundColor: "#C9A96235", borderRight: range.count > 0 ? "2px solid #C9A962" : "none" }} />
                        </div>
                        <div className="w-14 text-right shrink-0">
                          <span className="text-[#C9A962] font-mono text-xs">{range.count}</span>
                          {pctOfTotal > 0 && <span className="text-white/20 text-[9px] ml-1">({pctOfTotal}%)</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {reqsWithBudget.length === 0 && (
                  <p className="text-white/20 text-sm text-center py-6">No budget data yet</p>
                )}
              </div>
            </div>

            {/* Geographic + Category preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Top cities */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="mb-5">
                  <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Geographic</p>
                  <h3 className="text-white font-medium text-sm">Top Client Cities</h3>
                </div>
                {topCities.length === 0 ? (
                  <p className="text-white/20 text-sm text-center py-6">No city data yet</p>
                ) : (
                  <div className="space-y-3">
                    {topCities.map(([city, count], i) => (
                      <div key={city} className="flex items-center gap-3">
                        <span className="text-white/15 text-[10px] font-mono w-4 shrink-0">#{i+1}</span>
                        <div className="w-28 shrink-0">
                          <span className="text-white/50 text-xs truncate block">{city}</span>
                        </div>
                        <div className="flex-1 h-4 bg-white/4 rounded-sm overflow-hidden">
                          <div className="h-full rounded-sm" style={{ width: `${(count/maxCityCount)*100}%`, background: "linear-gradient(to right, #C9A96230, #C9A96260)" }} />
                        </div>
                        <span className="text-[#C9A962] font-mono text-xs w-5 text-right shrink-0">{count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Category preferences */}
              <div className="bg-[#0c1222] border border-white/8 rounded-sm p-6">
                <div className="mb-5">
                  <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1">Demand</p>
                  <h3 className="text-white font-medium text-sm">What Clients Want Most</h3>
                </div>
                {requests.length === 0 ? (
                  <p className="text-white/20 text-sm text-center py-6">No requests yet</p>
                ) : (
                  <div className="space-y-3">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const count = requests.filter((r) => r.service_type === cat).length;
                      const pct = Math.round((count / requests.length) * 100);
                      if (count === 0) return null;
                      return (
                        <div key={cat} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: CATEGORY_COLORS[cat] }} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-white/50 text-[10px] truncate">{cat}</span>
                              <span className="text-white/25 text-[9px] ml-2 shrink-0">{pct}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: CATEGORY_COLORS[cat] + "70" }} />
                            </div>
                          </div>
                          <span className="font-mono text-xs shrink-0 w-5 text-right" style={{ color: CATEGORY_COLORS[cat] }}>{count}</span>
                        </div>
                      );
                    }).filter(Boolean)}
                  </div>
                )}
              </div>
            </div>

            {/* Top clients table */}
            <div className="bg-[#0c1222] border border-white/8 rounded-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium text-sm">Top Clients</h3>
                  <p className="text-white/25 text-xs mt-0.5">Ranked by number of requests</p>
                </div>
                <span className="text-white/20 text-xs">{totalClients} total</span>
              </div>
              {clientStats.length === 0 ? (
                <p className="text-white/20 text-sm text-center py-12">No client data yet</p>
              ) : (
                <div className="divide-y divide-white/4">
                  {clientStats.slice(0, 15).map((c, i) => (
                    <div key={c.email} className="px-5 py-3.5 flex items-center gap-4">
                      <span className="text-white/15 text-[10px] font-mono w-5 shrink-0">#{i + 1}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/40 text-xs font-bold">
                        {c.name?.[0]?.toUpperCase() || "?"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm font-medium truncate">{c.name}</p>
                        <p className="text-white/25 text-xs truncate">{c.email}</p>
                        {c.categories.length > 0 && (
                          <div className="flex gap-1 mt-1 flex-wrap">
                            {c.categories.slice(0, 3).map((cat) => (
                              <span key={cat} className="text-[8px] px-1.5 py-0.5 rounded-sm border" style={{ color: (CATEGORY_COLORS[cat] || "#C9A962") + "99", borderColor: (CATEGORY_COLORS[cat] || "#C9A962") + "30", backgroundColor: (CATEGORY_COLORS[cat] || "#C9A962") + "0d" }}>
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="hidden sm:flex items-center gap-6 shrink-0">
                        <div className="text-center">
                          <p className="text-white font-bold text-lg">{c.requestCount}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Requests</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[#C9A962] font-bold text-sm">{c.totalBudget > 0 ? `$${c.totalBudget >= 1000 ? (c.totalBudget/1000).toFixed(0)+"K" : c.totalBudget}` : "—"}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Budget</p>
                        </div>
                        <div className="text-center hidden lg:block">
                          <p className="text-white/40 text-sm">{c.lastActivity ? timeAgo(c.lastActivity) : "—"}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Last seen</p>
                        </div>
                      </div>
                      {i === 0 && <span className="text-[8px] tracking-widest uppercase text-[#C9A962]/50 border border-[#C9A962]/20 px-2 py-0.5 rounded-sm shrink-0 hidden sm:block">Top</span>}
                      {c.requestCount >= 2 && i > 0 && <span className="text-[8px] tracking-widest uppercase text-purple-400/50 border border-purple-400/20 px-2 py-0.5 rounded-sm shrink-0 hidden sm:block">VIP</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Insight callout */}
            {totalClients > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#0c1222] border border-[#C9A962]/12 rounded-sm p-5">
                  <p className="text-[#C9A962] text-[9px] tracking-[0.3em] uppercase mb-2">Insight</p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    <span className="text-white font-medium">{retentionRate}%</span> of clients come back for a second request — {retentionRate >= 30 ? "strong retention for a luxury concierge." : "focus on post-fulfillment follow-up to improve retention."}
                  </p>
                </div>
                <div className="bg-[#0c1222] border border-[#C9A962]/12 rounded-sm p-5">
                  <p className="text-[#C9A962] text-[9px] tracking-[0.3em] uppercase mb-2">Insight</p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {reqByCategory.filter(r => r.count > 0)[0] ? (
                      <><span className="text-white font-medium">{reqByCategory.filter(r => r.count > 0)[0].cat}</span> is your highest-demand category — prioritize onboarding more partners here.</>
                    ) : "No requests yet — run your first campaign to generate data."}
                  </p>
                </div>
                <div className="bg-[#0c1222] border border-[#C9A962]/12 rounded-sm p-5">
                  <p className="text-[#C9A962] text-[9px] tracking-[0.3em] uppercase mb-2">Insight</p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {avgBudget > 0 ? (
                      <><span className="text-white font-medium">${avgBudget >= 1000 ? (avgBudget/1000).toFixed(1)+"K" : avgBudget.toFixed(0)}</span> average budget confirms a high-value client base. Consider a minimum budget threshold for future requests.</>
                    ) : "Add budget data to unlock financial insights."}
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ════════════════════════════════════════
            TAB: APPLICATIONS
        ════════════════════════════════════════ */}
        {tab === "applications" && (
          <div>
            {/* Sub-tabs */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {(["pending", "approved", "rejected", "all"] as const).map((t) => {
                const counts = { pending: pendingApps.length, approved: approvedPartners.length, rejected: applications.filter(a=>a.status==="rejected").length, all: applications.length };
                return (
                  <button key={t} onClick={() => setActiveAppTab(t)}
                    className={`px-4 py-2 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all border ${
                      activeAppTab === t ? "bg-[#C9A962]/12 border-[#C9A962]/40 text-[#C9A962]" : "border-white/10 text-white/30 hover:border-white/20"
                    }`}>
                    {t} · {counts[t]}
                  </button>
                );
              })}
            </div>

            {loading ? (
              <div className="flex justify-center py-16"><div className="w-6 h-6 rounded-full border border-[#C9A962]/30 border-t-[#C9A962] animate-spin" /></div>
            ) : (
              <div className="space-y-3">
                {(activeAppTab === "all" ? applications : applications.filter(a => a.status === activeAppTab)).map((app) => (
                  <div key={app.id} className="bg-[#0c1222] border border-white/8 hover:border-[#C9A962]/18 rounded-sm overflow-hidden transition-all">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/12 to-transparent" />
                    <div className="px-5 py-4 flex items-center gap-4 cursor-pointer" onClick={() => setExpanded(expanded === app.id ? null : app.id)}>
                      <div className="w-10 h-10 rounded-full bg-[#C9A962]/12 border border-[#C9A962]/20 flex items-center justify-center shrink-0 text-[#C9A962] font-bold text-sm">
                        {app.name[0]?.toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-white font-medium text-sm">{app.name}</p>
                          <p className="text-white/30 text-xs">·</p>
                          <p className="text-white/50 text-sm">{app.company}</p>
                          <span className={`text-[8px] tracking-[0.2em] uppercase border rounded-sm px-2 py-0.5 ${STATUS_STYLES[app.status]}`}>{app.status}</span>
                        </div>
                        <p className="text-white/30 text-xs truncate">{app.email} {app.city ? `· ${app.city}` : ""}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-white/20 text-[10px]">{timeAgo(app.created_at)}</p>
                        <svg className={`w-3 h-3 text-white/20 ml-auto mt-1 transition-transform ${expanded === app.id ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    {expanded === app.id && (
                      <div className="px-5 pb-5 border-t border-white/6 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Services</p>
                            <div className="flex flex-wrap gap-1.5">
                              {(app.services || []).map((s) => (
                                <span key={s} className="text-[9px] tracking-[0.1em] border border-[#C9A962]/25 text-[#C9A962]/60 rounded-sm px-2 py-0.5 bg-[#C9A962]/6">{s}</span>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Contact</p>
                            <p className="text-white/55 text-xs">{app.email}</p>
                            {app.phone && <p className="text-white/35 text-xs">{app.phone}</p>}
                            {app.website && <a href={app.website} target="_blank" rel="noopener noreferrer" className="text-[#C9A962]/50 hover:text-[#C9A962] text-xs transition-colors truncate block">{app.website}</a>}
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">About their services</p>
                          <p className="text-white/55 text-sm leading-relaxed">{app.description}</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Internal note <span className="text-white/15 normal-case tracking-normal text-[9px]">— optional</span></p>
                          <textarea value={noteInput[app.id] ?? (app.admin_notes || "")} onChange={(e) => setNoteInput((prev) => ({ ...prev, [app.id]: e.target.value }))}
                            placeholder="Add a private note..." rows={2}
                            className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/35 rounded-sm px-3 py-2.5 text-xs text-white placeholder-white/18 focus:outline-none resize-none transition-colors" />
                        </div>
                        {app.status === "pending" && (
                          <div className="flex gap-2">
                            <button onClick={() => updateStatus(app, "approved")} disabled={saving === app.id}
                              className="flex-1 py-3 rounded-sm text-xs tracking-[0.15em] uppercase font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/22 transition-all disabled:opacity-40">
                              {saving === app.id ? "Saving..." : "✓ Approve Partner"}
                            </button>
                            <button onClick={() => updateStatus(app, "rejected")} disabled={saving === app.id}
                              className="flex-1 py-3 rounded-sm text-xs tracking-[0.15em] uppercase font-bold bg-red-500/8 border border-red-500/20 text-red-400/70 hover:bg-red-500/14 transition-all disabled:opacity-40">
                              Decline
                            </button>
                          </div>
                        )}
                        {app.status === "approved" && (
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-400/60 text-xs">✓ Approved — partner can sign in</span>
                            <button onClick={() => updateStatus(app, "rejected")} disabled={saving === app.id}
                              className="text-[10px] tracking-wider uppercase text-red-400/40 hover:text-red-400/70 transition-colors border border-red-400/15 px-3 py-1.5 rounded-sm">Revoke</button>
                          </div>
                        )}
                        {app.status === "rejected" && (
                          <div className="flex items-center justify-between">
                            <span className="text-red-400/50 text-xs">Application declined</span>
                            <button onClick={() => updateStatus(app, "approved")} disabled={saving === app.id}
                              className="text-[10px] tracking-wider uppercase text-emerald-400/50 hover:text-emerald-400 transition-colors border border-emerald-400/20 px-3 py-1.5 rounded-sm">Approve instead</button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                {(activeAppTab === "all" ? applications : applications.filter(a => a.status === activeAppTab)).length === 0 && (
                  <div className="text-center py-16 text-white/25">
                    <p className="font-playfair text-xl mb-2">No {activeAppTab} applications</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════
            TAB: PARTNERS
        ════════════════════════════════════════ */}
        {tab === "partners" && (
          <div className="space-y-6">
            {/* Per-category breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const count = approvedPartners.filter((p) => p.services?.includes(cat)).length;
                const catOffers = offers.filter((o) => approvedPartners.find((p) => p.email === o.partner_email && p.services?.includes(cat)));
                return (
                  <div key={cat} className="bg-[#0c1222] border border-white/8 rounded-sm p-4">
                    <div className="w-2 h-2 rounded-full mb-2" style={{ backgroundColor: CATEGORY_COLORS[cat] }} />
                    <p className="text-white/50 text-[10px] leading-tight mb-2">{cat}</p>
                    <p className="font-bold text-xl" style={{ color: CATEGORY_COLORS[cat] }}>{count}</p>
                    <p className="text-white/20 text-[9px]">{count === 1 ? "partner" : "partners"}</p>
                    {catOffers.length > 0 && <p className="text-white/20 text-[9px] mt-1">{catOffers.length} offers sent</p>}
                  </div>
                );
              })}
            </div>

            {/* Partner table */}
            <div className="bg-[#0c1222] border border-white/8 rounded-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-white/6">
                <h3 className="text-white font-medium text-sm">All Approved Partners</h3>
                <p className="text-white/25 text-xs mt-0.5">Sorted by activity — most offers sent first</p>
              </div>

              {partnerStats.length === 0 ? (
                <p className="text-white/20 text-sm text-center py-12">No approved partners yet</p>
              ) : (
                <div className="divide-y divide-white/4">
                  {partnerStats.map((p, i) => (
                    <div key={p.id} className="px-5 py-4 flex items-center gap-4">
                      <div className="w-7 text-center">
                        <span className="text-white/15 text-xs font-mono">#{i + 1}</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#C9A962]/12 border border-[#C9A962]/20 flex items-center justify-center shrink-0 text-[#C9A962] font-bold text-sm">
                        {p.name[0]?.toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/80 text-sm font-medium">{p.company}</p>
                        <p className="text-white/30 text-xs truncate">{p.name} · {p.email}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(p.services || []).slice(0, 3).map((s) => (
                            <span key={s} className="text-[8px] px-1.5 py-0.5 rounded-sm border" style={{ color: CATEGORY_COLORS[s] + "99", borderColor: CATEGORY_COLORS[s] + "30", backgroundColor: CATEGORY_COLORS[s] + "0d" }}>
                              {s}
                            </span>
                          ))}
                          {(p.services || []).length > 3 && <span className="text-[8px] text-white/20">+{p.services.length - 3}</span>}
                        </div>
                      </div>
                      <div className="hidden sm:grid grid-cols-3 gap-4 text-center shrink-0">
                        <div>
                          <p className="text-white font-bold text-lg">{p.totalOffers}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Offers</p>
                        </div>
                        <div>
                          <p className="text-amber-400 font-bold text-lg">{p.liveQuotes}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Live</p>
                        </div>
                        <div>
                          <p className="text-emerald-400 font-bold text-lg">{p.accepted}</p>
                          <p className="text-white/20 text-[9px] uppercase tracking-wider">Won</p>
                        </div>
                      </div>
                      {p.city && <p className="hidden lg:block text-white/20 text-xs shrink-0">{p.city}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════
            TAB: REQUESTS
        ════════════════════════════════════════ */}
        {tab === "requests" && (
          <div className="space-y-4">
            {/* Status summary */}
            <div className="grid grid-cols-3 gap-3 mb-2">
              <StatCard label="Open"      value={pendingReqs}   sub="Awaiting partner offers"   color="#f59e0b" />
              <StatCard label="Matched"   value={matchedReqs}   sub="Offer sent, in progress"   color="#C9A962" />
              <StatCard label="Completed" value={completedReqs} sub="Successfully fulfilled"     color="#34d399" />
            </div>

            {/* Requests list */}
            <div className="bg-[#0c1222] border border-white/8 rounded-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-white/6">
                <h3 className="text-white font-medium text-sm">All Client Requests</h3>
                <p className="text-white/25 text-xs mt-0.5">Most recent first</p>
              </div>
              {requests.length === 0 ? (
                <p className="text-white/20 text-sm text-center py-12">No requests yet</p>
              ) : (
                <div className="divide-y divide-white/4">
                  {requests.map((r) => {
                    const reqOffers = offers.filter((o) => o.request_id === r.id);
                    return (
                      <div key={r.id} className="px-5 py-4 flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[8px] tracking-[0.15em] uppercase border rounded-sm px-1.5 py-0.5" style={{ color: (CATEGORY_COLORS[r.service_type] || "#C9A962") + "aa", borderColor: (CATEGORY_COLORS[r.service_type] || "#C9A962") + "35", backgroundColor: (CATEGORY_COLORS[r.service_type] || "#C9A962") + "10" }}>
                              {r.service_type || "Uncategorised"}
                            </span>
                            <span className="text-white/20 text-[10px]">{timeAgo(r.created_at)}</span>
                            {r.city && <span className="text-white/20 text-[10px]">· {r.city}</span>}
                          </div>
                          <p className="text-white/65 text-sm leading-snug line-clamp-2">{r.description || "No description"}</p>
                          {r.budget && <p className="text-[#C9A962]/50 text-[10px] mt-1">Budget: ${r.budget}</p>}
                        </div>
                        <div className="shrink-0 text-right">
                          <span className={`text-[8px] tracking-[0.15em] uppercase border rounded-sm px-2 py-0.5 block mb-1 ${
                            r.status === "completed" ? "text-emerald-400/70 border-emerald-400/25 bg-emerald-400/6" :
                            r.status === "matched"   ? "text-[#C9A962]/70 border-[#C9A962]/25 bg-[#C9A962]/6" :
                            "text-white/30 border-white/10"}`}>
                            {r.status}
                          </span>
                          {reqOffers.length > 0 && (
                            <p className="text-white/20 text-[9px]">{reqOffers.length} {reqOffers.length === 1 ? "offer" : "offers"}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
