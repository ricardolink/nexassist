"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"google" | "apple" | null>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, role: "client" } },
    });
    if (error) { setError(error.message); setLoading(false); }
    else router.push("/dashboard");
  }

  async function handleOAuth(provider: "google" | "apple") {
    setOauthLoading(provider);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) { setError(error.message); setOauthLoading(null); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0A1628] bg-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A962]/04 blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded border border-[#C9A962]/50 flex items-center justify-center group-hover:border-[#C9A962] transition-colors">
              <span className="text-[#C9A962] text-xs font-bold">N</span>
            </div>
            <span className="font-playfair text-2xl font-bold text-white">NexAssist</span>
          </Link>
          <p className="text-white/35 text-sm mt-3 tracking-wide">Request exclusive access</p>
        </div>

        <div className="border border-[#C9A962]/15 rounded-sm overflow-hidden bg-[#0D1F3C]/60 backdrop-blur-xl">
          <div className="p-8">

            {/* OAuth */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleOAuth("google")}
                disabled={!!oauthLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-sm border border-white/12 bg-white/04 hover:bg-white/08 hover:border-white/20 transition-all text-white/80 text-sm disabled:opacity-50"
              >
                {oauthLoading === "google" ? (
                  <span className="text-white/50 text-xs tracking-widest">Connecting…</span>
                ) : (
                  <>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Sign up with Google</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleOAuth("apple")}
                disabled={!!oauthLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-sm border border-white/12 bg-white/04 hover:bg-white/08 hover:border-white/20 transition-all text-white/80 text-sm disabled:opacity-50"
              >
                {oauthLoading === "apple" ? (
                  <span className="text-white/50 text-xs tracking-widest">Connecting…</span>
                ) : (
                  <>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>Sign up with Apple</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/08" />
              <span className="text-white/25 text-xs tracking-widest uppercase">or</span>
              <div className="flex-1 h-px bg-white/08" />
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-white/45 text-xs tracking-[0.15em] uppercase mb-2">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                  placeholder="Ricardo Jimenez"
                  className="w-full input-luxury px-4 py-3 rounded-sm text-sm" />
              </div>
              <div>
                <label className="block text-white/45 text-xs tracking-[0.15em] uppercase mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  placeholder="you@example.com"
                  className="w-full input-luxury px-4 py-3 rounded-sm text-sm" />
              </div>
              <div>
                <label className="block text-white/45 text-xs tracking-[0.15em] uppercase mb-2">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                  minLength={8} placeholder="Min. 8 characters"
                  className="w-full input-luxury px-4 py-3 rounded-sm text-sm" />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs bg-red-400/06 border border-red-400/20 rounded-sm px-3 py-2.5">
                  <span>⚠</span><span>{error}</span>
                </div>
              )}

              <button type="submit" disabled={loading}
                className="w-full btn-gold py-3.5 rounded-sm text-xs mt-2 disabled:opacity-50">
                {loading ? "Creating account…" : "Create Account"}
              </button>
            </form>
          </div>

          <div className="border-t border-white/06 px-8 py-4 text-center">
            <p className="text-white/30 text-xs">
              Already have an account?{" "}
              <Link href="/login" className="text-[#C9A962] hover:text-[#E2C98A] transition-colors">Sign in</Link>
            </p>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-6 leading-relaxed">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-white/40 hover:text-white/60">Terms</Link> and{" "}
          <Link href="/privacy" className="text-white/40 hover:text-white/60">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
