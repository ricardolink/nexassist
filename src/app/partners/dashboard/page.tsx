"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// ─── Types ────────────────────────────────────────────────
interface ClientRequest {
  id: string;
  service_type: string;
  description: string;
  city: string;
  date_needed: string;
  budget: string;
  client_name: string;
  client_email: string;
  country_flag: string;
  status: string;
  created_at: string;
  photo_url?: string;
  _offerSent?: boolean;
}

const EXTRAS_OPTIONS = [
  "Delivery included",
  "White glove service",
  "24/7 availability",
  "Complimentary extras",
  "Airport pickup",
  "Personal assistant on-site",
  "Fully insured",
  "Customisation available",
];

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function formatDate(s: string) {
  if (!s) return "—";
  return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ─── Offer Panel ──────────────────────────────────────────
function OfferPanel({ req, partnerEmail, partnerCompany, onSent, onClose }: {
  req: ClientRequest;
  partnerEmail: string;
  partnerCompany: string;
  onSent: () => void;
  onClose: () => void;
}) {
  const [hasItem, setHasItem] = useState(true);
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function toggleExtra(ex: string) {
    setExtras((prev) => prev.includes(ex) ? prev.filter((e) => e !== ex) : [...prev, ex]);
  }

  function handlePhoto(file: File | null) {
    if (!file) return;
    setPhotoFile(file);
    const r = new FileReader();
    r.onload = (e) => setPhotoPreview(e.target?.result as string);
    r.readAsDataURL(file);
  }

  async function sendOffer() {
    setSending(true);
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("partner_offers").insert({
      request_id: req.id,
      partner_id: session?.user.id,
      partner_email: partnerEmail,
      partner_company: partnerCompany,
      has_item: hasItem,
      price,
      message,
      extras,
      status: "sent",
    });
    if (!error) {
      setSent(true);
      setTimeout(() => { onSent(); onClose(); }, 1200);
    }
    setSending(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden animate-slide-up shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

        <div className="px-6 py-6 sm:px-7 sm:py-7 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-1">Send an Offer</p>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                {req.service_type || "Request"}
              </h2>
              <p className="text-white/30 text-xs mt-0.5">{req.city} · {formatDate(req.date_needed)} · Budget: {req.budget ? `$${req.budget}` : "Open"}</p>
            </div>
            <button onClick={onClose} className="text-white/25 hover:text-white text-xl ml-4 mt-1">×</button>
          </div>

          {/* Quick declaration */}
          <div className="mb-5">
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-3">Quick action</p>
            <button
              onClick={() => setHasItem(!hasItem)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-sm border transition-all duration-200 text-left ${
                hasItem
                  ? "border-[#C9A962]/50 bg-[#C9A962]/8 text-white"
                  : "border-white/10 text-white/35 hover:border-white/20"
              }`}
            >
              <div className={`w-5 h-5 rounded-sm border flex-shrink-0 flex items-center justify-center transition-all ${hasItem ? "bg-[#C9A962] border-[#C9A962]" : "border-white/20"}`}>
                {hasItem && <svg className="w-3 h-3 text-[#080d18]" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <div>
                <p className="text-sm font-medium">I have exactly what you need ✓</p>
                <p className="text-white/35 text-xs mt-0.5">This confirms you can fulfill this request</p>
              </div>
            </button>
          </div>

          {/* Photo */}
          <div className="mb-5">
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2">Upload a photo <span className="text-white/20 normal-case tracking-normal text-[9px]">— optional</span></p>
            {photoPreview ? (
              <div className="relative rounded-sm overflow-hidden border border-[#C9A962]/20 group h-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoPreview} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => { setPhotoFile(null); setPhotoPreview(null); }}
                  className="absolute top-2 right-2 bg-[#080d18]/80 border border-white/15 text-white/60 hover:text-white text-xs px-2 py-1 rounded-sm"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-white/12 hover:border-[#C9A962]/35 rounded-sm py-5 cursor-pointer transition-all group">
                <svg className="w-5 h-5 text-white/25 group-hover:text-[#C9A962]/60 transition-colors" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/30 group-hover:text-white/55 text-[10px] tracking-[0.15em] uppercase transition-colors">Add photo of your product/service</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handlePhoto(e.target.files?.[0] ?? null)} />
              </label>
            )}
          </div>

          {/* Price */}
          <div className="mb-5">
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2">Your quote</p>
            <div className="flex border border-white/10 focus-within:border-[#C9A962]/40 rounded-sm overflow-hidden transition-colors">
              <span className="flex items-center px-3 border-r border-white/10 bg-white/2 text-white/35 text-sm">$</span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/[^0-9.,]/g, ""))}
                placeholder="Enter your price"
                className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-white/22 focus:outline-none"
              />
            </div>
          </div>

          {/* Extras */}
          <div className="mb-5">
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2">What's included <span className="text-white/20 normal-case tracking-normal text-[9px]">— select all that apply</span></p>
            <div className="flex flex-wrap gap-2">
              {EXTRAS_OPTIONS.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => toggleExtra(ex)}
                  className={`px-3 py-1.5 rounded-sm text-[10px] tracking-[0.1em] transition-all duration-150 ${
                    extras.includes(ex)
                      ? "bg-[#C9A962]/15 border border-[#C9A962]/50 text-[#C9A962]"
                      : "border border-white/10 text-white/35 hover:border-white/20 hover:text-white/55"
                  }`}
                >
                  {extras.includes(ex) && "✓ "}{ex}
                </button>
              ))}
            </div>
          </div>

          {/* Personal message */}
          <div className="mb-6">
            <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2">Personal message</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell the client what makes your offer special..."
              rows={3}
              className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/40 rounded-sm px-4 py-3 text-sm text-white placeholder-white/22 focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Send */}
          {sent ? (
            <div className="flex items-center justify-center gap-2 py-4 text-[#C9A962]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-sm font-medium">Offer sent!</span>
            </div>
          ) : (
            <button
              onClick={sendOffer}
              disabled={sending}
              className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40"
            >
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                  Sending offer...
                </span>
              ) : "Send Offer to Client →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Request Card ─────────────────────────────────────────
function RequestCard({ req, onOffer }: { req: ClientRequest; onOffer: (r: ClientRequest) => void }) {
  const serviceColors: Record<string, string> = {
    "Exotic Cars": "text-amber-400/70 border-amber-400/25 bg-amber-400/6",
    "Private Jets": "text-sky-400/70 border-sky-400/25 bg-sky-400/6",
    "Luxury Villas": "text-emerald-400/70 border-emerald-400/25 bg-emerald-400/6",
    "Superyachts": "text-blue-400/70 border-blue-400/25 bg-blue-400/6",
    "Fine Watches": "text-violet-400/70 border-violet-400/25 bg-violet-400/6",
    "Designer Bags": "text-pink-400/70 border-pink-400/25 bg-pink-400/6",
  };
  const color = serviceColors[req.service_type] || "text-[#C9A962]/70 border-[#C9A962]/25 bg-[#C9A962]/6";

  return (
    <div className={`relative bg-[#0c1222] border rounded-sm overflow-hidden transition-all duration-300 group flex flex-col ${req._offerSent ? "border-[#C9A962]/20" : "border-white/8 hover:border-[#C9A962]/20"}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/15 to-transparent" />

      <div className="p-5 flex flex-col flex-1">
        {/* Top */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {req.service_type && (
                <span className={`text-[9px] tracking-[0.2em] uppercase border rounded-sm px-2 py-0.5 ${color}`}>
                  {req.service_type}
                </span>
              )}
              {req._offerSent && (
                <span className="text-[9px] tracking-[0.2em] uppercase border rounded-sm px-2 py-0.5 text-[#C9A962] border-[#C9A962]/30 bg-[#C9A962]/8">
                  ✓ Offer sent
                </span>
              )}
            </div>
            <p className="text-white/75 text-sm leading-snug line-clamp-3">
              {req.description || "No description"}
            </p>
          </div>
          <span className="text-white/20 text-[10px] shrink-0">{timeAgo(req.created_at)}</span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {req.city && (
            <span className="flex items-center gap-1.5 text-white/35 text-[10px]">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M6 1a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 6.5-3.5 6.5S2.5 7 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1"/><circle cx="6" cy="4.5" r="1" fill="currentColor"/></svg>
              {req.city}
            </span>
          )}
          {req.date_needed && (
            <span className="flex items-center gap-1.5 text-white/35 text-[10px]">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1"/><path d="M1 5h10M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
              {formatDate(req.date_needed)}
            </span>
          )}
          {req.budget && (
            <span className="flex items-center gap-1 text-white/35 text-[10px]">
              <span className="text-[#C9A962]/50">$</span>{req.budget}
            </span>
          )}
        </div>

        {/* Client (masked) */}
        <div className="flex items-center gap-2 p-3 bg-white/3 rounded-sm mb-4 border border-white/5">
          <div className="w-7 h-7 rounded-full bg-[#C9A962]/15 flex items-center justify-center text-[#C9A962] text-xs font-bold shrink-0">
            {req.client_name?.[0]?.toUpperCase() ?? "?"}
          </div>
          <div>
            <p className="text-white/55 text-xs">{req.client_name || "Anonymous"}</p>
            <p className="text-white/22 text-[10px]">Contact visible after offer accepted</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* CTA */}
        <button
          onClick={() => onOffer(req)}
          disabled={req._offerSent}
          className={`w-full py-3.5 rounded-sm text-xs tracking-[0.15em] uppercase font-bold transition-all ${
            req._offerSent
              ? "border border-[#C9A962]/20 text-[#C9A962]/40 cursor-default"
              : "btn-gold text-[#080d18]"
          }`}
        >
          {req._offerSent ? "✓ Offer Sent" : "Send an Offer →"}
        </button>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────
export default function PartnerDashboard() {
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [sentOffers, setSentOffers] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ email: string; company: string } | null>(null);
  const [activeOffer, setActiveOffer] = useState<ClientRequest | null>(null);
  const [filter, setFilter] = useState("All");

  const serviceFilters = ["All", "Exotic Cars", "Chauffeur Services", "Car Sales", "Private Jets", "Luxury Villas", "Superyachts", "Fine Watches", "Designer Bags", "Luxury Travel"];

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { window.location.href = "/partners/login"; return; }

      // Check partner role
      const { data: profile } = await supabase.from("profiles").select("role, company_name").eq("id", session.user.id).single();
      if (!profile || profile.role !== "partner") {
        window.location.href = "/partners/login";
        return;
      }

      setUser({ email: session.user.email!, company: profile.company_name || session.user.email!.split("@")[0] });

      // Fetch all open requests
      const { data: reqs } = await supabase
        .from("requests")
        .select("*")
        .in("status", ["pending", "matched"])
        .order("created_at", { ascending: false });

      // Fetch partner's sent offers
      const { data: offers } = await supabase
        .from("partner_offers")
        .select("request_id")
        .eq("partner_id", session.user.id);

      const sentIds = new Set((offers || []).map((o: { request_id: string }) => o.request_id));
      setSentOffers(sentIds);
      setRequests((reqs || []).map((r) => ({ ...r, _offerSent: sentIds.has(r.id) })));
      setLoading(false);
    }
    init();
  }, []);

  const filtered = filter === "All" ? requests : requests.filter((r) => r.service_type === filter);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = "/partners/login";
  }

  if (loading) {
    return (
      <div className="bg-[#080d18] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-[#C9A962]/30 border-t-[#C9A962] animate-spin" />
          <p className="text-white/30 text-xs tracking-widest uppercase">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      {/* Partner Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d18]/95 backdrop-blur-xl border-b border-[#C9A962]/12">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
              <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
              <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            <div>
              <span className="font-playfair text-sm font-bold text-white">Nex<span className="text-[#C9A962]">Assist</span></span>
              <span className="hidden sm:inline text-white/25 text-[9px] tracking-[0.3em] uppercase ml-2">Partner Portal</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-white/50 text-xs">{user?.company}</p>
              <p className="text-white/25 text-[10px]">{user?.email}</p>
            </div>
            <button onClick={handleSignOut} className="text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-white/55 transition-colors border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-sm">
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#C9A962]/50" />
            <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">Live Requests</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-1">Client Requests</h1>
          <p className="text-white/30 text-sm">
            {requests.length} open {requests.length === 1 ? "request" : "requests"} · {sentOffers.size} offers sent
          </p>
        </div>

        {/* Service filters */}
        <div className="flex gap-1.5 mb-8 overflow-x-auto pb-1 scrollbar-hide">
          {serviceFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-sm text-[9px] tracking-[0.2em] uppercase transition-all ${
                filter === f
                  ? "bg-[#C9A962]/12 border border-[#C9A962]/40 text-[#C9A962]"
                  : "border border-white/8 text-white/30 hover:border-white/15 hover:text-white/50"
              }`}
            >
              {f}
              {f !== "All" && ` (${requests.filter((r) => r.service_type === f).length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-full border border-[#C9A962]/15 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-[#C9A962]/25" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.3" />
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-playfair text-xl text-white/35 mb-2">No requests here yet</p>
            <p className="text-white/20 text-sm">{filter === "All" ? "New client requests will appear here." : `No open ${filter} requests right now.`}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((req) => (
              <RequestCard
                key={req.id}
                req={req}
                onOffer={setActiveOffer}
              />
            ))}
          </div>
        )}
      </div>

      {/* Offer panel */}
      {activeOffer && (
        <OfferPanel
          req={activeOffer}
          partnerEmail={user?.email ?? ""}
          partnerCompany={user?.company ?? ""}
          onSent={() => {
            setSentOffers((prev) => new Set([...prev, activeOffer.id]));
            setRequests((prev) => prev.map((r) => r.id === activeOffer.id ? { ...r, _offerSent: true } : r));
          }}
          onClose={() => setActiveOffer(null)}
        />
      )}
    </div>
  );
}
