"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar onRequestClick={() => {}} />

      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      <main className="pt-28 pb-24 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962]/75 text-[9px] tracking-[0.4em] uppercase font-medium">Contact Us</span>
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Get in <span className="shimmer-gold">Touch</span>
          </h1>
          <p className="text-white/35 text-sm leading-relaxed mb-12 max-w-md">
            Have a question or a special request? Reach out and your concierge will respond promptly.
          </p>

          {success ? (
            /* Success state */
            <div className="relative overflow-hidden rounded-sm border border-[#C9A962]/25 px-8 py-12 text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />
              <div className="absolute inset-0 bg-[#C9A962]/03 pointer-events-none" />
              <div className="inline-flex w-14 h-14 rounded-full border border-[#C9A962]/40 items-center justify-center mb-5 relative">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path d="M4.5 11.5L9 16L17.5 7" stroke="#C9A962" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-3">Message Sent</h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                We received your message and will be in touch shortly.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-[#C9A962]/60 hover:text-[#C9A962] text-[10px] tracking-[0.2em] uppercase transition-colors">
                ← Back to Home
              </Link>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-white/35 mb-2">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A962]/40 transition-colors"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-white/35 mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A962]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[9px] tracking-[0.3em] uppercase text-white/35 mb-2">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A962]/40 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[9px] tracking-[0.3em] uppercase text-white/35 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help…"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A962]/40 transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400/80 text-xs">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm text-[#080d18] text-[11px] tracking-[0.15em] uppercase font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-8 px-5 sm:px-8 text-center">
        <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} NexAssist · Personal Concierge
        </p>
      </footer>
    </div>
  );
}
