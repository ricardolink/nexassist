"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";

export default function PartnerLogin() {
  // If already logged in as partner, redirect
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) return;
      const { data } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (data?.role === "partner") window.location.href = "/partners/dashboard";
    });
  }, []);

  async function handleSuccess(email: string) {
    // Mark profile as partner
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase.from("profiles").upsert(
        { id: session.user.id, email: session.user.email!, role: "partner" },
        { onConflict: "id" }
      );
    }
    window.location.href = "/partners/dashboard";
  }

  return (
    <div className="bg-[#080d18] min-h-screen flex flex-col items-center justify-center px-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10">
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
          <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" strokeWidth="0.9" strokeOpacity="0.8" />
          <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <span className="font-playfair text-xl font-bold text-white">Nex<span className="text-[#C9A962]">Assist</span></span>
      </Link>

      {/* Auth modal rendered inline (no backdrop close) */}
      <div className="w-full max-w-sm bg-[#080d18] border border-[#C9A962]/20 rounded-sm overflow-hidden shadow-[0_20px_80px_rgba(201,169,98,0.08)]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />
        <div className="px-7 py-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full border border-[#C9A962]/30 flex items-center justify-center bg-[#C9A962]/6">
              <svg className="w-5 h-5 text-[#C9A962]/70" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
          <p className="text-[#C9A962] text-[9px] tracking-[0.4em] uppercase text-center mb-1.5">Partner Portal</p>
          <h2 className="font-playfair text-2xl font-bold text-white text-center mb-2">Welcome back.</h2>
          <p className="text-white/30 text-sm text-center mb-8 leading-relaxed">
            Sign in with the email you used when applying as a NexAssist partner.
          </p>
          <AuthModal
            onClose={() => window.location.href = "/"}
            onSuccess={handleSuccess}
            mode="partner"
            partnerOnly={false}
          />
        </div>
      </div>

      <p className="mt-6 text-white/20 text-xs text-center">
        Not a partner yet?{" "}
        <Link href="/partner/onboarding" className="text-[#C9A962]/50 hover:text-[#C9A962] transition-colors">
          Apply here →
        </Link>
      </p>
    </div>
  );
}
