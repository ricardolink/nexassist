"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type EmailStep = "email" | "checking" | "code";
type GateState = "ok" | "pending" | "rejected" | "not_found";

export default function PartnerLogin() {
  const [step, setStep] = useState<EmailStep>("email");
  const [gate, setGate] = useState<GateState>("ok");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);
  // Application data, used to populate profile on first login
  const [appData, setAppData] = useState<{ company: string } | null>(null);

  // Redirect if already logged in as partner
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        const { data } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();
        if (data?.role === "partner") {
          window.location.href = "/partners/dashboard";
          return;
        }
      }
      setChecking(false);
    });
  }, []);

  // Step 1: Check if email is approved, then send OTP
  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStep("checking");

    const normalEmail = email.toLowerCase().trim();

    // Check partner_applications table
    const { data: app } = await supabase
      .from("partner_applications")
      .select("status, company")
      .eq("email", normalEmail)
      .maybeSingle();

    if (!app) {
      setGate("not_found");
      setStep("email");
      return;
    }

    if (app.status === "pending") {
      setGate("pending");
      setStep("email");
      return;
    }

    if (app.status === "rejected") {
      setGate("rejected");
      setStep("email");
      return;
    }

    // status === "approved" → send OTP
    setAppData({ company: app.company });
    const { error: err } = await supabase.auth.signInWithOtp({
      email: normalEmail,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "https://nexassist.vercel.app/partners/login",
      },
    });

    if (err) {
      setError(err.message);
      setStep("email");
    } else {
      setGate("ok");
      setStep("code");
    }
  }

  // Step 2: Verify OTP code
  async function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: err } = await supabase.auth.verifyOtp({
      email: email.toLowerCase().trim(),
      token: code.trim(),
      type: "email",
    });

    if (err || !data.session) {
      setError("Invalid or expired code. Please check your email and try again.");
      setLoading(false);
      return;
    }

    // Upsert profile as partner with company from application
    await supabase.from("profiles").upsert(
      {
        id: data.user!.id,
        email: data.user!.email!,
        name: data.user!.email!.split("@")[0],
        role: "partner",
        company_name: appData?.company || null,
      },
      { onConflict: "id" }
    );

    window.location.href = "/partners/dashboard";
  }

  if (checking) {
    return (
      <div className="bg-[#080d18] min-h-screen flex items-center justify-center">
        <div className="w-7 h-7 rounded-full border border-[#C9A962]/30 border-t-[#C9A962] animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-[#080d18] min-h-screen flex flex-col items-center justify-center px-5 py-16">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#C9A962]/5 blur-[120px]" />
      </div>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10 group">
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
          <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
          <polygon points="18,7 31,18 18,29 5,18" stroke="#C9A962" strokeWidth="0.4" strokeOpacity="0.3" />
          <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <div className="flex flex-col leading-none gap-[2px]">
          <span className="font-playfair text-[15px] font-bold tracking-[0.22em] text-white group-hover:text-[#C9A962] transition-colors uppercase">
            Nex<span className="text-[#C9A962]">Assist</span>
          </span>
          <span className="text-[7px] tracking-[0.55em] text-white/25 uppercase font-light">Partner Portal</span>
        </div>
      </Link>

      {/* Card */}
      <div className="relative w-full max-w-sm">
        <div className="bg-[#0c1222] border border-[#C9A962]/18 rounded-sm overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />

          <div className="px-7 py-9">
            {/* ── EMAIL STEP ── */}
            {(step === "email" || step === "checking") && (
              <>
                <div className="flex justify-center mb-7">
                  <div className="w-14 h-14 rounded-full border border-[#C9A962]/25 bg-[#C9A962]/6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#C9A962]/60" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase text-center mb-2">Partner Login</p>
                <h1 className="font-playfair text-2xl font-bold text-white text-center mb-2">Welcome back.</h1>
                <p className="text-white/30 text-sm text-center mb-8 leading-relaxed">
                  Enter the email you used when you applied.
                </p>

                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/35 text-[9px] tracking-[0.3em] uppercase block mb-2">Partner email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setGate("ok"); setError(""); }}
                      placeholder="your@company.com"
                      required
                      autoFocus
                      className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/22 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Gate messages */}
                  {gate === "not_found" && (
                    <div className="bg-amber-500/6 border border-amber-500/20 rounded-sm px-3 py-3">
                      <p className="text-amber-400/80 text-xs leading-relaxed mb-2">
                        No partner application found for this email.
                      </p>
                      <Link href="/partners/apply" className="text-[#C9A962]/70 hover:text-[#C9A962] text-xs underline underline-offset-2 transition-colors">
                        Apply to become a partner →
                      </Link>
                    </div>
                  )}
                  {gate === "pending" && (
                    <div className="bg-amber-500/6 border border-amber-500/20 rounded-sm px-3 py-3">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-3.5 h-3.5 text-amber-400/70 shrink-0" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M7 4v3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                          <circle cx="7" cy="10" r="0.5" fill="currentColor"/>
                        </svg>
                        <p className="text-amber-400/80 text-xs font-medium">Application under review</p>
                      </div>
                      <p className="text-white/30 text-[11px] leading-relaxed pl-5">
                        Your application is still being reviewed. We'll contact you at this email within 48 hours once approved.
                      </p>
                    </div>
                  )}
                  {gate === "rejected" && (
                    <div className="bg-red-500/6 border border-red-500/20 rounded-sm px-3 py-3">
                      <p className="text-red-400/75 text-xs leading-relaxed">
                        Unfortunately your application was not approved. If you think this is a mistake, please contact us.
                      </p>
                    </div>
                  )}
                  {error && (
                    <div className="flex items-start gap-2 bg-red-500/8 border border-red-500/20 rounded-sm px-3 py-2.5">
                      <p className="text-red-400/80 text-xs leading-relaxed">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={step === "checking" || !email || gate === "rejected"}
                    className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40 mt-1"
                  >
                    {step === "checking" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                        Checking...
                      </span>
                    ) : "Continue →"}
                  </button>
                </form>
              </>
            )}

            {/* ── CODE STEP ── */}
            {step === "code" && (
              <>
                <div className="flex justify-center mb-7">
                  <div className="w-14 h-14 rounded-full border border-[#C9A962]/25 bg-[#C9A962]/6 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-[#C9A962]/6 animate-ping-slow" />
                    <svg className="w-6 h-6 text-[#C9A962]/60 relative" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase text-center mb-2">Check your inbox</p>
                <h1 className="font-playfair text-2xl font-bold text-white text-center mb-2">Enter the code</h1>
                <p className="text-white/30 text-sm text-center mb-7 leading-relaxed">
                  We sent a 6-digit code to<br />
                  <span className="text-white/55">{email}</span>
                </p>

                <form onSubmit={handleCodeSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    inputMode="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    maxLength={8}
                    value={code}
                    onChange={(e) => setCode(e.target.value.trim().slice(0, 8))}
                    placeholder="······"
                    required
                    autoFocus
                    className="w-full bg-white/3 border border-white/10 focus:border-[#C9A962]/45 rounded-sm px-4 py-4 text-2xl text-white placeholder-white/20 focus:outline-none text-center tracking-[0.6em] font-mono transition-colors"
                  />

                  {error && (
                    <div className="flex items-start gap-2 bg-red-500/8 border border-red-500/20 rounded-sm px-3 py-2.5">
                      <p className="text-red-400/80 text-xs leading-relaxed">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || code.length < 6 || code.length > 8}
                    className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                        Verifying...
                      </span>
                    ) : "Confirm & Enter Dashboard →"}
                  </button>

                  <button
                    type="button"
                    onClick={() => { setStep("email"); setCode(""); setError(""); }}
                    className="text-white/22 hover:text-white/45 text-xs tracking-wider uppercase transition-colors text-center py-1"
                  >
                    ← Use a different email
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <p className="mt-6 text-white/20 text-xs text-center">
          Not a partner yet?{" "}
          <Link href="/partners/apply" className="text-[#C9A962]/45 hover:text-[#C9A962] transition-colors">
            Apply here →
          </Link>
        </p>
      </div>
    </div>
  );
}
