"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (email: string) => void;
  mode?: "client" | "partner";
  partnerOnly?: boolean; // if true, rejects emails not in partners table
}

export default function AuthModal({ onClose, onSuccess, mode = "client", partnerOnly = false }: AuthModalProps) {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (partnerOnly) {
      // Check if this email is an approved partner
      const { data } = await supabase
        .from("partners")
        .select("id, verified")
        .eq("email", email.toLowerCase().trim())
        .single();
      if (!data) {
        setError("This email isn't registered as a partner. Apply first at nexassist.vercel.app/partner/onboarding");
        setLoading(false);
        return;
      }
    }

    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.toLowerCase().trim(),
      options: {
        shouldCreateUser: !partnerOnly,
        emailRedirectTo: undefined,
      },
    });

    if (err) {
      setError(err.message);
    } else {
      setStep("code");
    }
    setLoading(false);
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: err } = await supabase.auth.verifyOtp({
      email: email.toLowerCase().trim(),
      token: code.trim(),
      type: "email",
    });

    if (err || !data.session) {
      setError("Invalid or expired code. Check your email and try again.");
    } else {
      // If partner mode, update their profile role
      if (mode === "partner") {
        await supabase
          .from("profiles")
          .upsert({ id: data.user!.id, email: data.user!.email!, role: "partner" }, { onConflict: "id" });
      }
      onSuccess(email);
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-sm bg-[#080d18] border border-[#C9A962]/20 sm:rounded-sm overflow-hidden animate-slide-up shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#C9A962]/8 blur-[50px] pointer-events-none" />

        <div className="relative px-7 py-8">
          <button onClick={onClose} className="absolute top-4 right-5 text-white/25 hover:text-white transition-colors text-xl">×</button>

          {step === "email" ? (
            <>
              {/* Diamond logo */}
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
                  <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
                  <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </div>

              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase text-center mb-2">
                {partnerOnly ? "Partner Login" : "One Step Away"}
              </p>
              <h2 className="font-playfair text-2xl font-bold text-white text-center mb-1">
                {partnerOnly ? "Welcome back." : "Save your request."}
              </h2>
              <p className="text-white/35 text-sm text-center mb-7 leading-relaxed">
                {partnerOnly
                  ? "Enter the email you used when applying as a partner."
                  : "Enter your email — we'll send a quick code to confirm it's you."}
              </p>

              <form onSubmit={sendCode} className="flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    autoFocus
                    className="w-full bg-white/3 border border-white/12 focus:border-[#C9A962]/45 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                  />
                </div>
                {error && <p className="text-red-400/80 text-xs leading-relaxed">{error}</p>}
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                      Sending code...
                    </span>
                  ) : "Send Confirmation Code →"}
                </button>
                <p className="text-white/18 text-[9px] tracking-wider text-center">No password needed · One-time code</p>
              </form>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full border border-[#C9A962]/30 flex items-center justify-center bg-[#C9A962]/6">
                  <svg className="w-5 h-5 text-[#C9A962]/70" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase text-center mb-2">Check your inbox</p>
              <h2 className="font-playfair text-xl font-bold text-white text-center mb-1">Enter the code</h2>
              <p className="text-white/35 text-sm text-center mb-7">
                We sent a 6-digit code to<br />
                <span className="text-white/60">{email}</span>
              </p>

              <form onSubmit={verifyCode} className="flex flex-col gap-4">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  required
                  autoFocus
                  className="w-full bg-white/3 border border-white/12 focus:border-[#C9A962]/45 rounded-sm px-4 py-4 text-2xl text-white placeholder-white/20 focus:outline-none text-center tracking-[0.5em] font-mono transition-colors"
                />
                {error && <p className="text-red-400/80 text-xs text-center leading-relaxed">{error}</p>}
                <button
                  type="submit"
                  disabled={loading || code.length < 6}
                  className="btn-gold w-full py-4 rounded-sm text-[#080d18] text-xs tracking-[0.15em] uppercase font-bold disabled:opacity-40"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border border-[#080d18]/50 border-t-[#080d18] animate-spin" />
                      Verifying...
                    </span>
                  ) : "Confirm & Continue →"}
                </button>
                <button
                  type="button"
                  onClick={() => { setStep("email"); setCode(""); setError(""); }}
                  className="text-white/25 hover:text-white/50 text-xs tracking-wider uppercase transition-colors text-center"
                >
                  ← Use a different email
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
