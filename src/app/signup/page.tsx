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

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, role: "client" } },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0A1628]">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-playfair text-3xl font-bold text-[#C9A962]">NexAssist</Link>
          <p className="text-white/50 mt-2">Create your account</p>
        </div>
        <div className="bg-[#112040] border border-[#C9A962]/20 rounded-2xl p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-white/70 text-sm mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30"
                placeholder="Ricardo Jimenez"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full bg-[#0D1F3C] border border-[#C9A962]/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A962] placeholder-white/30"
                placeholder="Min. 8 characters"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A962] text-[#0A1628] py-3 rounded-lg font-semibold hover:bg-[#E2C98A] transition-colors disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
          <p className="text-center text-white/50 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#C9A962] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
