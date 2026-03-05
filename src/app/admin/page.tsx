"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

const ADMIN_PASSWORD = "nexadmin2024";

interface Application {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string | null;
  website: string | null;
  city: string | null;
  services: string[];
  description: string;
  status: "pending" | "approved" | "rejected";
  admin_notes: string | null;
  created_at: string;
  reviewed_at: string | null;
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const STATUS_STYLES = {
  pending:  "text-amber-400 border-amber-400/30 bg-amber-400/8",
  approved: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  rejected: "text-red-400 border-red-400/25 bg-red-400/6",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "rejected" | "all">("pending");
  const [noteInput, setNoteInput] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<Record<string, "sending" | "sent" | "failed">>({});

  const loadApplications = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("partner_applications")
      .select("*")
      .order("created_at", { ascending: false });
    setApplications((data as Application[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Persist admin auth in sessionStorage
    if (typeof window !== "undefined" && sessionStorage.getItem("nex_admin") === "1") {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) loadApplications();
  }, [authed, loadApplications]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("nex_admin", "1");
      setAuthed(true);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1500);
    }
  }

  async function updateStatus(app: Application, status: "approved" | "rejected") {
    setSaving(app.id);
    const { error } = await supabase
      .from("partner_applications")
      .update({
        status,
        admin_notes: noteInput[app.id] || app.admin_notes || null,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", app.id);

    if (!error) {
      setApplications((prev) =>
        prev.map((a) =>
          a.id === app.id ? { ...a, status, admin_notes: noteInput[app.id] || a.admin_notes || null } : a
        )
      );

      // Send welcome email when approving
      if (status === "approved") {
        setEmailStatus((prev) => ({ ...prev, [app.id]: "sending" }));
        try {
          const res = await fetch("/api/partner-approved", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: app.email, name: app.name, company: app.company }),
          });
          setEmailStatus((prev) => ({
            ...prev,
            [app.id]: res.ok ? "sent" : "failed",
          }));
        } catch {
          setEmailStatus((prev) => ({ ...prev, [app.id]: "failed" }));
        }
      }
    }
    setSaving(null);
  }

  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    approved: applications.filter((a) => a.status === "approved").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  const filtered = activeTab === "all" ? applications : applications.filter((a) => a.status === activeTab);

  // ── Login gate ──────────────────────────────────────────
  if (!authed) {
    return (
      <div className="bg-[#080d18] min-h-screen flex items-center justify-center px-5">
        <div className="w-full max-w-xs">
          <div className="text-center mb-8">
            <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase mb-2">Admin</p>
            <h1 className="font-playfair text-2xl font-bold text-white">NexAssist Control</h1>
          </div>
          <form onSubmit={login} className="space-y-4">
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Admin password"
              autoFocus
              className={`w-full bg-white/3 border rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                pwError ? "border-red-500/50" : "border-white/10 focus:border-[#C9A962]/45"
              }`}
            />
            {pwError && <p className="text-red-400/70 text-xs text-center">Incorrect password</p>}
            <button
              type="submit"
              className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold"
            >
              Enter →
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ───────────────────────────────────────────
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
        <button
          onClick={() => { sessionStorage.removeItem("nex_admin"); setAuthed(false); }}
          className="text-[10px] tracking-wider uppercase text-white/25 hover:text-white/50 transition-colors border border-white/10 px-3 py-1.5 rounded-sm"
        >
          Sign Out
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {(["all", "pending", "approved", "rejected"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`p-4 rounded-sm border text-left transition-all ${
                activeTab === t
                  ? "border-[#C9A962]/35 bg-[#C9A962]/8"
                  : "border-white/8 hover:border-white/15 bg-[#0c1222]"
              }`}
            >
              <p className={`text-2xl font-bold mb-0.5 ${
                t === "pending" ? "text-amber-400" :
                t === "approved" ? "text-emerald-400" :
                t === "rejected" ? "text-red-400" : "text-white"
              }`}>{counts[t]}</p>
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">{t}</p>
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-playfair text-2xl font-bold text-white capitalize">
            {activeTab} Applications
          </h1>
          <button
            onClick={loadApplications}
            className="text-[10px] tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10.5 6A4.5 4.5 0 1 1 6 1.5a4.5 4.5 0 0 1 3.18 1.32M10.5 1.5v3h-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Refresh
          </button>
        </div>

        {/* List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-6 h-6 rounded-full border border-[#C9A962]/30 border-t-[#C9A962] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-white/25">
            <p className="font-playfair text-xl mb-2">No {activeTab} applications</p>
            <p className="text-sm">Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((app) => (
              <div
                key={app.id}
                className="bg-[#0c1222] border border-white/8 hover:border-[#C9A962]/18 rounded-sm overflow-hidden transition-all"
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/12 to-transparent" />

                {/* Summary row */}
                <div
                  className="px-5 py-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => setExpanded(expanded === app.id ? null : app.id)}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A962]/12 border border-[#C9A962]/20 flex items-center justify-center shrink-0 text-[#C9A962] font-bold text-sm">
                    {app.name[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-medium text-sm">{app.name}</p>
                      <p className="text-white/30 text-xs">·</p>
                      <p className="text-white/50 text-sm">{app.company}</p>
                      <span className={`text-[8px] tracking-[0.2em] uppercase border rounded-sm px-2 py-0.5 ${STATUS_STYLES[app.status]}`}>
                        {app.status}
                      </span>
                    </div>
                    <p className="text-white/30 text-xs truncate">{app.email} {app.city ? `· ${app.city}` : ""}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-white/20 text-[10px]">{timeAgo(app.created_at)}</p>
                    <svg
                      className={`w-3 h-3 text-white/20 ml-auto mt-1 transition-transform ${expanded === app.id ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12" fill="none"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Expanded details */}
                {expanded === app.id && (
                  <div className="px-5 pb-5 border-t border-white/6 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Services */}
                      <div>
                        <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Services</p>
                        <div className="flex flex-wrap gap-1.5">
                          {(app.services || []).map((s) => (
                            <span key={s} className="text-[9px] tracking-[0.1em] border border-[#C9A962]/25 text-[#C9A962]/60 rounded-sm px-2 py-0.5 bg-[#C9A962]/6">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Contact */}
                      <div className="space-y-1">
                        <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Contact</p>
                        <p className="text-white/55 text-xs">{app.email}</p>
                        {app.phone && <p className="text-white/35 text-xs">{app.phone}</p>}
                        {app.website && (
                          <a href={app.website} target="_blank" rel="noopener noreferrer" className="text-[#C9A962]/50 hover:text-[#C9A962] text-xs transition-colors truncate block">
                            {app.website}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">About their services</p>
                      <p className="text-white/55 text-sm leading-relaxed">{app.description}</p>
                    </div>

                    {/* Admin note */}
                    <div className="mb-4">
                      <p className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-2">Internal note <span className="text-white/15 normal-case tracking-normal text-[9px]">— optional</span></p>
                      <textarea
                        value={noteInput[app.id] ?? (app.admin_notes || "")}
                        onChange={(e) => setNoteInput((prev) => ({ ...prev, [app.id]: e.target.value }))}
                        placeholder="Add a private note about this application..."
                        rows={2}
                        className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/35 rounded-sm px-3 py-2.5 text-xs text-white placeholder-white/18 focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    {/* Action buttons */}
                    {app.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateStatus(app, "approved")}
                          disabled={saving === app.id}
                          className="flex-1 py-3 rounded-sm text-xs tracking-[0.15em] uppercase font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/22 transition-all disabled:opacity-40"
                        >
                          {saving === app.id ? "Saving..." : "✓ Approve Partner"}
                        </button>
                        <button
                          onClick={() => updateStatus(app, "rejected")}
                          disabled={saving === app.id}
                          className="flex-1 py-3 rounded-sm text-xs tracking-[0.15em] uppercase font-bold bg-red-500/8 border border-red-500/20 text-red-400/70 hover:bg-red-500/14 transition-all disabled:opacity-40"
                        >
                          Decline
                        </button>
                      </div>
                    )}

                    {app.status === "approved" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-emerald-400/60 text-xs">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                              <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Approved — partner can now sign in
                          </div>
                          <button
                            onClick={() => updateStatus(app, "rejected")}
                            disabled={saving === app.id}
                            className="text-[10px] tracking-wider uppercase text-red-400/40 hover:text-red-400/70 transition-colors border border-red-400/15 px-3 py-1.5 rounded-sm"
                          >
                            Revoke
                          </button>
                        </div>
                        {/* Email status */}
                        {emailStatus[app.id] === "sending" && (
                          <div className="flex items-center gap-1.5 text-white/30 text-[10px]">
                            <span className="w-2.5 h-2.5 rounded-full border border-white/30 border-t-white/60 animate-spin" />
                            Sending welcome email...
                          </div>
                        )}
                        {emailStatus[app.id] === "sent" && (
                          <div className="flex items-center gap-1.5 text-emerald-400/50 text-[10px]">
                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                            Welcome email sent to {app.email}
                          </div>
                        )}
                        {emailStatus[app.id] === "failed" && (
                          <div className="flex items-center gap-2 text-amber-400/50 text-[10px]">
                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/><path d="M6 3.5v3M6 8v.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
                            Email not sent (RESEND_API_KEY not configured) — notify partner manually
                            <button
                              onClick={async () => {
                                setEmailStatus((prev) => ({ ...prev, [app.id]: "sending" }));
                                const res = await fetch("/api/partner-approved", {
                                  method: "POST",
                                  headers: { "Content-Type": "application/json" },
                                  body: JSON.stringify({ email: app.email, name: app.name, company: app.company }),
                                });
                                setEmailStatus((prev) => ({ ...prev, [app.id]: res.ok ? "sent" : "failed" }));
                              }}
                              className="text-[#C9A962]/40 hover:text-[#C9A962]/70 underline transition-colors ml-1"
                            >
                              Retry
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {app.status === "rejected" && (
                      <div className="flex items-center justify-between">
                        <p className="text-red-400/50 text-xs">Application declined</p>
                        <button
                          onClick={() => updateStatus(app, "approved")}
                          disabled={saving === app.id}
                          className="text-[10px] tracking-wider uppercase text-emerald-400/50 hover:text-emerald-400 transition-colors border border-emerald-400/20 px-3 py-1.5 rounded-sm"
                        >
                          Approve instead
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
