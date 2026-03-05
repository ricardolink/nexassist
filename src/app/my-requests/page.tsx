"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RequestModal from "@/components/RequestModal";
import {
  getRequests,
  cancelRequest,
  deleteRequest,
  formatDate,
  statusLabel,
  statusColor,
  type SavedRequest,
  type RequestStatus,
} from "@/lib/requests";

const FILTERS: { label: string; value: RequestStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

// ── Share helpers ──────────────────────────────────────────
function buildShareText(r: SavedRequest) {
  const parts = [`🖤 Just requested ${r.serviceType} through NexAssist — the world's first 24/7 personal concierge.`];
  if (r.city) parts.push(`📍 ${r.city}`);
  if (r.dateNeeded) parts.push(`📅 ${formatDate(r.dateNeeded)}`);
  parts.push("nexassist.vercel.app");
  return parts.join("\n");
}

async function shareRequest(r: SavedRequest) {
  const text = buildShareText(r);
  if (navigator.share) {
    try {
      await navigator.share({ title: `My ${r.serviceType} via NexAssist`, text });
      return;
    } catch { /* fallback below */ }
  }
  await navigator.clipboard.writeText(text);
  return "copied";
}

// ── Detail Modal ───────────────────────────────────────────
function DetailModal({ req, onClose, onRequestAgain, onEdit, onCancel }: {
  req: SavedRequest;
  onClose: () => void;
  onRequestAgain: () => void;
  onEdit: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden animate-slide-up shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

        {/* Photo banner */}
        {req.photoPreview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={req.photoPreview} alt="" className="w-full h-40 object-cover" />
        )}

        <div className="px-6 py-6 sm:px-8 sm:py-7 max-h-[85vh] overflow-y-auto">
          <div className="flex items-start justify-between mb-5">
            <div>
              <span className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase border rounded-sm px-2.5 py-1 mb-3 ${statusColor(req.status)}`}>
                <span className="w-1 h-1 rounded-full bg-current" />
                {statusLabel(req.status)}
              </span>
              <h2 className="font-playfair text-2xl font-bold text-white">{req.serviceType || "Request"}</h2>
              <p className="text-white/35 text-[10px] tracking-wider mt-0.5">
                Submitted {formatDate(req.submittedAt)}
              </p>
            </div>
            <button onClick={onClose} className="text-white/25 hover:text-white transition-colors text-xl ml-4 mt-1">×</button>
          </div>

          {/* Description */}
          <div className="mb-5">
            <p className="text-[#C9A962] text-[9px] tracking-[0.3em] uppercase mb-2">Request Details</p>
            <p className="text-white/65 text-sm leading-relaxed">{req.description || "—"}</p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Date Needed", value: formatDate(req.dateNeeded) },
              { label: "City", value: req.city || "—" },
              { label: "Budget", value: req.budget ? `$${req.budget}` : "—" },
              { label: "Name", value: req.name || "—" },
              { label: "Phone", value: req.phone ? `${req.countryFlag} ${req.countryDial} ${req.phone}` : "—" },
              { label: "Email", value: req.email || "—" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-white/30 text-[9px] tracking-[0.25em] uppercase mb-1">{label}</p>
                <p className="text-white/70 text-xs truncate">{value}</p>
              </div>
            ))}
          </div>

          <div className="h-px bg-[#C9A962]/10 mb-5" />

          {/* Actions */}
          <div className="flex flex-col gap-2.5">
            <button onClick={onRequestAgain} className="btn-gold w-full py-3.5 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold">
              Request Again →
            </button>
            {(req.status === "pending" || req.status === "in-progress") && (
              <button onClick={onEdit} className="w-full py-3 rounded-sm text-[11px] border border-[#C9A962]/25 text-[#C9A962]/70 hover:border-[#C9A962]/50 hover:text-[#C9A962] transition-all tracking-[0.15em] uppercase">
                Edit Request
              </button>
            )}
            {(req.status === "pending" || req.status === "in-progress") && (
              <button onClick={onCancel} className="w-full py-3 rounded-sm text-[11px] border border-red-500/20 text-red-400/50 hover:border-red-500/40 hover:text-red-400/80 transition-all tracking-[0.15em] uppercase">
                Cancel Request
              </button>
            )}
            <button onClick={onClose} className="w-full py-3 rounded-sm text-[11px] border border-white/8 text-white/25 hover:text-white/45 hover:border-white/15 transition-all tracking-[0.15em] uppercase">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Confirm Cancel Modal ───────────────────────────────────
function ConfirmCancelModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-sm bg-[#080d18] border border-white/12 sm:rounded-sm overflow-hidden animate-slide-up shadow-[0_-20px_60px_rgba(0,0,0,0.7)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        <div className="px-6 py-7 text-center">
          <div className="inline-flex w-12 h-12 rounded-full border border-red-500/25 bg-red-500/8 items-center justify-center mb-4">
            <svg className="w-5 h-5 text-red-400/70" viewBox="0 0 20 20" fill="none">
              <path d="M10 6v4M10 14h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
          <h3 className="font-playfair text-lg font-bold text-white mb-2">Cancel this request?</h3>
          <p className="text-white/35 text-sm mb-7 max-w-xs mx-auto">This will mark the request as cancelled. You can still view it in your history.</p>
          <div className="flex gap-2.5">
            <button onClick={onClose} className="flex-1 py-3 rounded-sm text-[11px] border border-white/10 text-white/40 hover:text-white/60 hover:border-white/20 transition-all tracking-[0.15em] uppercase">
              Keep it
            </button>
            <button onClick={onConfirm} className="flex-1 py-3 rounded-sm text-[11px] bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/22 hover:border-red-500/50 transition-all tracking-[0.15em] uppercase font-medium">
              Yes, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Request Card ───────────────────────────────────────────
function RequestCard({ req, onRequestAgain, onView, onEdit, onCancel }: {
  req: SavedRequest;
  onRequestAgain: (r: SavedRequest) => void;
  onView: (r: SavedRequest) => void;
  onEdit: (r: SavedRequest) => void;
  onCancel: (r: SavedRequest) => void;
}) {
  const [shareMsg, setShareMsg] = useState("");

  async function handleShare() {
    const result = await shareRequest(req);
    if (result === "copied") {
      setShareMsg("Copied!");
      setTimeout(() => setShareMsg(""), 2000);
    }
  }

  return (
    <div className="relative bg-[#0c1222] border border-[#C9A962]/10 hover:border-[#C9A962]/25 rounded-sm overflow-hidden transition-all duration-300 group flex flex-col">
      {/* Top status bar */}
      <div className={`h-px w-full ${
        req.status === "pending" ? "bg-[#C9A962]/50" :
        req.status === "in-progress" ? "bg-sky-400/50" :
        "bg-emerald-400/50"
      }`} />

      {/* Photo (if exists) */}
      {req.photoPreview && (
        <div className="relative h-36 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={req.photoPreview} alt="" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222]/80 to-transparent" />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {req.serviceType && (
                <span className="text-[#C9A962] text-[9px] tracking-[0.25em] uppercase border border-[#C9A962]/30 bg-[#C9A962]/6 px-2 py-0.5 rounded-sm">
                  {req.serviceType}
                </span>
              )}
              <span className={`text-[9px] tracking-[0.2em] uppercase border rounded-sm px-2 py-0.5 flex items-center gap-1 ${statusColor(req.status)}`}>
                <span className="w-1 h-1 rounded-full bg-current" />
                {statusLabel(req.status)}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-snug line-clamp-2">
              {req.description || "No description"}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {req.city && (
            <span className="flex items-center gap-1.5 text-white/35 text-[10px]">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 6.5-3.5 6.5S2.5 7 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1" />
                <circle cx="6" cy="4.5" r="1" fill="currentColor" />
              </svg>
              {req.city}
            </span>
          )}
          {req.dateNeeded && (
            <span className="flex items-center gap-1.5 text-white/35 text-[10px]">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1" />
                <path d="M1 5h10M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              {formatDate(req.dateNeeded)}
            </span>
          )}
          {req.budget && (
            <span className="flex items-center gap-1 text-white/35 text-[10px]">
              <span className="text-[#C9A962]/50">$</span>
              {req.budget}
            </span>
          )}
          <span className="text-white/20 text-[10px] ml-auto">
            {formatDate(req.submittedAt)}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-white/5 mb-4" />

        {/* Actions — 2×2 grid + share full-width */}
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            {/* Details */}
            <button onClick={() => onView(req)} className="flex items-center justify-center gap-1.5 py-2.5 rounded-sm border border-white/8 hover:border-[#C9A962]/30 hover:bg-[#C9A962]/4 transition-all group/btn">
              <svg className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-[#C9A962]/70 transition-colors" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="text-white/30 group-hover/btn:text-white/55 text-[9px] tracking-[0.15em] uppercase transition-colors">Details</span>
            </button>

            {/* Request again */}
            <button onClick={() => onRequestAgain(req)} className="flex items-center justify-center gap-1.5 py-2.5 rounded-sm border border-white/8 hover:border-[#C9A962]/40 hover:bg-[#C9A962]/6 transition-all group/btn">
              <svg className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-[#C9A962]/70 transition-colors" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M9 2h4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white/30 group-hover/btn:text-white/55 text-[9px] tracking-[0.15em] uppercase transition-colors">Again</span>
            </button>

            {/* Edit — only if not cancelled/completed */}
            {(req.status === "pending" || req.status === "in-progress") && (
              <button onClick={() => onEdit(req)} className="flex items-center justify-center gap-1.5 py-2.5 rounded-sm border border-white/8 hover:border-[#C9A962]/40 hover:bg-[#C9A962]/6 transition-all group/btn">
                <svg className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-[#C9A962]/70 transition-colors" viewBox="0 0 16 16" fill="none">
                  <path d="M11.5 2.5l2 2L5 13H3v-2L11.5 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <span className="text-white/30 group-hover/btn:text-white/55 text-[9px] tracking-[0.15em] uppercase transition-colors">Edit</span>
              </button>
            )}

            {/* Cancel — only if not already cancelled/completed */}
            {(req.status === "pending" || req.status === "in-progress") && (
              <button onClick={() => onCancel(req)} className="flex items-center justify-center gap-1.5 py-2.5 rounded-sm border border-white/8 hover:border-red-500/30 hover:bg-red-500/5 transition-all group/btn">
                <svg className="w-3.5 h-3.5 text-white/25 group-hover/btn:text-red-400/70 transition-colors" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-white/25 group-hover/btn:text-red-400/70 text-[9px] tracking-[0.15em] uppercase transition-colors">Cancel</span>
              </button>
            )}
          </div>

          {/* Share — full width */}
          <button onClick={handleShare} className="flex items-center justify-center gap-1.5 py-2.5 rounded-sm border border-white/8 hover:border-[#C9A962]/40 hover:bg-[#C9A962]/6 transition-all group/btn relative w-full">
            {shareMsg ? (
              <span className="text-[#C9A962] text-[9px] tracking-[0.15em] uppercase font-medium">{shareMsg}</span>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-[#C9A962]/70 transition-colors" viewBox="0 0 16 16" fill="none">
                  <circle cx="13" cy="3" r="1.8" stroke="currentColor" strokeWidth="1.1" />
                  <circle cx="13" cy="13" r="1.8" stroke="currentColor" strokeWidth="1.1" />
                  <circle cx="3" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M4.7 7.1L11.3 4M4.7 8.9L11.3 12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
                <span className="text-white/30 group-hover/btn:text-white/55 text-[9px] tracking-[0.15em] uppercase transition-colors">Share</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Share Social Panel ─────────────────────────────────────
function SharePanel({ req, onClose }: { req: SavedRequest; onClose: () => void }) {
  const text = encodeURIComponent(buildShareText(req));
  const [copied, setCopied] = useState(false);

  const platforms = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: `https://wa.me/?text=${text}`,
      color: "hover:border-green-500/40 hover:text-green-400",
    },
    {
      name: "X / Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${text}`,
      color: "hover:border-sky-400/40 hover:text-sky-400",
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=https://nexassist.vercel.app&quote=${text}`,
      color: "hover:border-blue-500/40 hover:text-blue-400",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-sm bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden animate-slide-up shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />
        <div className="px-6 py-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[#C9A962] text-[9px] tracking-[0.35em] uppercase mb-1">Share</p>
              <h3 className="font-playfair text-xl font-bold text-white">Tell the world</h3>
            </div>
            <button onClick={onClose} className="text-white/25 hover:text-white transition-colors text-xl">×</button>
          </div>

          {/* Preview */}
          <div className="bg-white/3 border border-white/8 rounded-sm px-4 py-3 mb-5 text-white/50 text-xs leading-relaxed whitespace-pre-line">
            {buildShareText(req)}
          </div>

          {/* Platform buttons */}
          <div className="flex gap-2 mb-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex flex-col items-center gap-2 py-3.5 border border-white/10 rounded-sm text-white/35 transition-all duration-200 ${p.color}`}
              >
                {p.icon}
                <span className="text-[9px] tracking-[0.15em] uppercase">{p.name}</span>
              </a>
            ))}
          </div>

          {/* Copy link */}
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(buildShareText(req));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className={`w-full py-3 rounded-sm text-[11px] border transition-all tracking-[0.15em] uppercase ${
              copied
                ? "border-[#C9A962]/50 text-[#C9A962]"
                : "border-white/10 text-white/35 hover:border-white/20 hover:text-white/55"
            }`}
          >
            {copied ? "✓ Copied to clipboard" : "Copy text"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────
export default function MyRequests() {
  const [requests, setRequests] = useState<SavedRequest[]>([]);
  const [filter, setFilter] = useState<RequestStatus | "all">("all");
  const [detail, setDetail] = useState<SavedRequest | null>(null);
  const [shareReq, setShareReq] = useState<SavedRequest | null>(null);
  const [showRequest, setShowRequest] = useState(false);
  const [prefill, setPrefill] = useState<Partial<SavedRequest> | undefined>(undefined);
  const [editId, setEditId] = useState<string | undefined>(undefined);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState<SavedRequest | null>(null);

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  function handleRequestAgain(r: SavedRequest) {
    setPrefill(r);
    setEditId(undefined);
    setDetail(null);
    setShowRequest(true);
  }

  function handleEdit(r: SavedRequest) {
    setPrefill(r);
    setEditId(r.id);
    setDetail(null);
    setShowRequest(true);
  }

  function handleCancelConfirm(r: SavedRequest) {
    setConfirmCancel(r);
    setDetail(null);
  }

  function doCancel() {
    if (!confirmCancel) return;
    cancelRequest(confirmCancel.id);
    setConfirmCancel(null);
    setRequests(getRequests());
  }

  function handleSuccess() {
    setShowRequest(false);
    setEditId(undefined);
    setShowSuccess(editId === undefined); // only show success popup for new requests
    setRequests(getRequests());
  }

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C9A962]/50" />
            <span className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase">Your History</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div>
              <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-1">
                My Requests
              </h1>
              <p className="text-white/30 text-sm">
                {requests.length} {requests.length === 1 ? "request" : "requests"} total
              </p>
            </div>
            <button
              onClick={() => { setPrefill(undefined); setShowRequest(true); }}
              className="btn-gold shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
            >
              New Request →
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1.5 mb-8 flex-wrap">
          {FILTERS.map((f) => {
            const count = f.value === "all"
              ? requests.length
              : requests.filter((r) => r.status === f.value).length;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] tracking-[0.2em] uppercase transition-all ${
                  filter === f.value
                    ? "bg-[#C9A962]/12 border border-[#C9A962]/40 text-[#C9A962]"
                    : "border border-white/8 text-white/35 hover:border-white/15 hover:text-white/55"
                }`}
              >
                {f.label}
                {count > 0 && (
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-sm ${
                    filter === f.value ? "bg-[#C9A962]/20" : "bg-white/8"
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid / Empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full border border-[#C9A962]/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#C9A962]/30" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-playfair text-xl text-white/40 mb-2">No requests yet</p>
            <p className="text-white/20 text-sm mb-8 max-w-xs">
              {filter === "all"
                ? "Your requests will appear here after you submit them."
                : `No ${filter} requests at the moment.`}
            </p>
            {filter === "all" && (
              <button
                onClick={() => { setPrefill(undefined); setShowRequest(true); }}
                className="btn-gold px-8 py-3.5 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold"
              >
                Submit Your First Request →
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((req) => (
              <RequestCard
                key={req.id}
                req={req}
                onView={setDetail}
                onRequestAgain={handleRequestAgain}
                onEdit={handleEdit}
                onCancel={handleCancelConfirm}
              />
            ))}
          </div>
        )}
      </div>

      {/* Back to home */}
      <div className="border-t border-[#C9A962]/08 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-white/25 hover:text-[#C9A962] text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
            ← Back to NexAssist
          </Link>
        </div>
      </div>

      {/* Modals */}
      {detail && (
        <DetailModal
          req={detail}
          onClose={() => setDetail(null)}
          onRequestAgain={() => handleRequestAgain(detail)}
          onEdit={() => handleEdit(detail)}
          onCancel={() => handleCancelConfirm(detail)}
        />
      )}
      {shareReq && (
        <SharePanel req={shareReq} onClose={() => setShareReq(null)} />
      )}
      {confirmCancel && (
        <ConfirmCancelModal
          onConfirm={doCancel}
          onClose={() => setConfirmCancel(null)}
        />
      )}
      {showRequest && (
        <RequestModal
          onClose={() => { setShowRequest(false); setEditId(undefined); }}
          onSuccess={handleSuccess}
          prefill={prefill}
          editId={editId}
        />
      )}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="relative w-full sm:max-w-md bg-[#080d18] sm:rounded-sm overflow-hidden animate-slide-up border-t sm:border border-[#C9A962]/20 shadow-[0_-20px_60px_rgba(201,169,98,0.1)]">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#C9A962]/8 blur-[50px] pointer-events-none" />
            <div className="relative px-7 py-10 text-center">
              <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-5 text-white/25 hover:text-white text-xl">×</button>
              <div className="inline-flex w-14 h-14 rounded-full border border-[#C9A962]/40 items-center justify-center mb-5 relative">
                <div className="absolute inset-0 rounded-full bg-[#C9A962]/8 animate-ping-slow" />
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path d="M4.5 11.5L9 16L17.5 7" stroke="#C9A962" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-2">Request Received</p>
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">Your assistant is on it.</h2>
              <p className="text-white/35 text-sm mb-7 max-w-xs mx-auto">Expect to hear from your personal concierge within the next few minutes.</p>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => { setShowSuccess(false); setPrefill(undefined); setShowRequest(true); }} className="btn-gold w-full py-3.5 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold">Submit Another Request</button>
                <button onClick={() => setShowSuccess(false)} className="w-full py-3 rounded-sm text-[11px] border border-white/10 text-white/35 hover:text-white/55 transition-all tracking-[0.15em] uppercase">Done</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
