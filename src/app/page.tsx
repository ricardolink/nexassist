"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Exotic Cars",
    sub: "Ferrari · Lamborghini · Rolls-Royce",
    photo: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=85",
    span: "col-span-2",
  },
  {
    title: "Private Jets",
    sub: "Your schedule. Your route.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=85",
    span: "",
  },
  {
    title: "Luxury Villas",
    sub: "Fully staffed. Perfectly curated.",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=85",
    span: "",
  },
  {
    title: "Superyachts",
    sub: "Mediterranean · Caribbean · Pacific",
    photo: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=85",
    span: "col-span-2",
  },
  {
    title: "Fine Watches",
    sub: "Rolex · Patek Philippe · AP",
    photo: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=85",
    span: "",
  },
  {
    title: "Designer Bags",
    sub: "Hermès · Chanel · Louis Vuitton",
    photo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85",
    span: "",
  },
  {
    title: "Fine Dining",
    sub: "Tables that don't exist. Until now.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    span: "",
  },
  {
    title: "VIP Access",
    sub: "Front row. Always.",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85",
    span: "",
  },
  {
    title: "Luxury Travel",
    sub: "Five-star. Everywhere.",
    photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=85",
    span: "",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell your assistant",
    desc: "A message. A voice note. Whatever feels natural. Your assistant listens.",
  },
  {
    num: "02",
    title: "We handle everything",
    desc: "Partners, logistics, negotiations — all invisible to you. Done within hours.",
  },
  {
    num: "03",
    title: "You simply arrive",
    desc: "No searching. No waiting. No compromise. Just the experience you imagined.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [lineWidth, setLineWidth] = useState(0);
  const statement = useInView(0.3);
  const services1 = useInView(0.1);
  const howIt = useInView(0.15);
  const access = useInView(0.2);

  useEffect(() => {
    const timer = setTimeout(() => setLineWidth(100), 400);
    return () => clearTimeout(timer);
  }, []);

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch { setStatus("error"); }
  }

  return (
    <div className="bg-[#080d18] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden">
        {/* Ambient light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#C9A962]/6 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A962]/4 blur-[120px]" />
        </div>

        {/* Gold line sweep */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-transparent via-[#C9A962] to-transparent transition-all duration-[2.5s] ease-out"
            style={{ width: `${lineWidth}%` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-12 fade-up">
            <div className="w-12 h-px bg-[#C9A962]/60" />
            <span className="text-[#C9A962]/80 text-[10px] tracking-[0.45em] uppercase font-medium">
              Exclusively Yours · Available 24/7
            </span>
          </div>

          {/* Main headline */}
          <div className="mb-8">
            <p className="text-white/40 text-lg md:text-xl tracking-widest uppercase font-light mb-2 fade-up-delay-1">
              For the first time,
            </p>
            <h1 className="font-playfair font-bold leading-[1.02] fade-up-delay-1">
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90">
                the world is yours
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl shimmer-gold">
                to command.
              </span>
            </h1>
          </div>

          {/* Sub */}
          <p className="text-white/45 text-base md:text-lg max-w-2xl leading-relaxed mb-12 fade-up-delay-2">
            Meet your personal assistant — always on call, exclusively dedicated to you.
            Exotic cars, private jets, luxury villas, superyachts, designer pieces, Michelin tables.
            Whatever you need. Whenever you need it. Handled.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 fade-up-delay-3">
            <Link
              href="/signup"
              className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-sm text-[#0A1628] text-xs tracking-[0.15em] uppercase font-bold"
            >
              Request Access
              <span className="w-4 h-px bg-[#0A1628]/50" />
              <span>→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-sm text-xs border border-white/15 text-white/50 hover:border-[#C9A962]/40 hover:text-white/80 transition-all tracking-[0.15em] uppercase"
            >
              Explore Services
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center gap-6 fade-up-delay-3">
            <div className="flex -space-x-2">
              {["1", "2", "3", "4"].map((n) => (
                <div
                  key={n}
                  className="w-8 h-8 rounded-full bg-[#C9A962]/20 border border-[#C9A962]/30 flex items-center justify-center"
                >
                  <span className="text-[#C9A962] text-[9px] font-bold">{n}</span>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs tracking-wide">
              <span className="text-white/60 font-medium">200+ members</span> live differently
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
          <span className="text-white text-[9px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section
        ref={statement.ref}
        className={`py-32 px-6 border-y border-[#C9A962]/08 transition-all duration-1000 ${
          statement.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white/80 leading-[1.2]">
            Imagine having someone who handles{" "}
            <span className="text-gold-gradient">everything.</span>
            <br />
            <span className="text-white/35 text-2xl md:text-4xl lg:text-5xl font-normal">
              No searching. No waiting. No compromise.
            </span>
          </p>
          <div className="mt-10 w-20 h-px bg-[#C9A962]/40" />
          <p className="mt-6 text-white/35 text-base max-w-xl leading-relaxed">
            NexAssist is not an app. It&apos;s a privilege — the world&apos;s first 24/7 personal concierge
            dedicated exclusively to your lifestyle, available with a single message.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        id="services"
        ref={services1.ref}
        className={`py-24 px-4 md:px-6 transition-all duration-1000 ${
          services1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A962]/50" />
                <span className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase">Your Assistant Arranges</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                Every desire,{" "}
                <span className="text-gold-gradient">fulfilled.</span>
              </h2>
            </div>
            <Link
              href="/signup"
              className="hidden md:flex items-center gap-2 text-[#C9A962]/60 text-xs tracking-[0.15em] uppercase hover:text-[#C9A962] transition-colors"
            >
              Request anything <span>→</span>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`service-card relative overflow-hidden cursor-pointer group ${
                  i === 0 ? "lg:col-span-2 h-[360px]" :
                  i === 3 ? "lg:col-span-2 h-[320px]" :
                  "h-[300px]"
                }`}
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${s.photo})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/95 via-[#080d18]/40 to-[#080d18]/10 group-hover:from-[#080d18]/80 transition-all duration-500" />
                {/* Gold tint on hover */}
                <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/05 transition-all duration-500" />
                {/* Top gold border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]/0 group-hover:bg-[#C9A962]/60 transition-all duration-300" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="w-6 h-px bg-[#C9A962]/60 mb-3 group-hover:w-10 transition-all duration-300" />
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#C9A962] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-xs tracking-wide group-hover:text-white/70 transition-colors duration-300">
                    {s.sub}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#C9A962]/0 group-hover:text-[#C9A962]/80 transition-all duration-300 text-xs tracking-[0.15em] uppercase">
                    <span>Request</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        ref={howIt.ref}
        className={`py-32 px-6 border-t border-[#C9A962]/08 transition-all duration-1000 ${
          howIt.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase">The Experience</span>
              <div className="w-6 h-px bg-[#C9A962]/50" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Simple, by design.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-[#C9A962]/20 via-[#C9A962]/20 to-[#C9A962]/20" />
            {steps.map((step, i) => (
              <div key={step.num} className="relative px-8 py-10 text-center">
                {/* Step number circle */}
                <div className="relative inline-flex w-16 h-16 rounded-full border border-[#C9A962]/30 items-center justify-center mb-8 bg-[#080d18]">
                  <span className="font-playfair text-sm font-bold text-[#C9A962]/70">{step.num}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/38 text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/signup"
              className="btn-gold inline-flex items-center gap-3 px-12 py-4 rounded-sm text-[#0A1628] text-xs tracking-[0.15em] uppercase font-bold"
            >
              Start Your Request
            </Link>
          </div>
        </div>
      </section>

      {/* ── ACCESS SECTION ── */}
      <section
        ref={access.ref}
        className={`py-40 px-6 transition-all duration-1000 ${
          access.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-sm">
            {/* Background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/08 via-[#0d1628]/95 to-[#0d1628]/98" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/20 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#C9A962]/30 via-transparent to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-[#C9A962]/30 via-transparent to-transparent" />

            <div className="relative px-10 py-20">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[#C9A962]/50" />
                <span className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase">Not For Everyone</span>
                <div className="w-6 h-px bg-[#C9A962]/50" />
              </div>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                This isn&apos;t an app.
                <br />
                <span className="text-gold-gradient">It&apos;s a privilege.</span>
              </h2>
              <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
                NexAssist members don&apos;t search. They don&apos;t wait. They simply ask —
                and the world rearranges itself around their needs.
              </p>

              {/* Waitlist form */}
              {status === "done" ? (
                <div className="flex items-center justify-center gap-3 text-[#C9A962]">
                  <span className="w-4 h-px bg-[#C9A962]" />
                  <span className="font-playfair text-xl">You&apos;re on the list.</span>
                  <span className="w-4 h-px bg-[#C9A962]" />
                </div>
              ) : (
                <form
                  onSubmit={joinWaitlist}
                  className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto border border-[#C9A962]/25 rounded-sm overflow-hidden"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent text-white placeholder-white/25 px-5 py-4 text-sm focus:outline-none border-r border-[#C9A962]/15 tracking-wide"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold px-7 py-4 text-[10px] tracking-[0.2em] uppercase font-bold disabled:opacity-50"
                  >
                    {status === "loading" ? "···" : "Join"}
                  </button>
                </form>
              )}
              <p className="mt-4 text-white/20 text-[10px] tracking-widest uppercase">
                Private waitlist · No spam · Invite only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ── */}
      <section className="py-20 px-6 border-t border-[#C9A962]/08">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#C9A962] text-[10px] tracking-[0.4em] uppercase mb-3">For Providers</p>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Are you a luxury service provider?
            </h3>
            <p className="text-white/35 text-sm mt-2 max-w-md leading-relaxed">
              Connect with high-net-worth clients who are ready to buy. Vetted, discreet, and exclusive.
            </p>
          </div>
          <Link
            href="/partner/onboarding"
            className="shrink-0 border border-[#C9A962]/35 text-[#C9A962]/80 hover:text-[#C9A962] hover:border-[#C9A962]/70 px-10 py-4 rounded-sm text-xs tracking-[0.15em] uppercase transition-all duration-300"
          >
            Apply as a Partner →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#C9A962]/10 py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm border border-[#C9A962]/50 flex items-center justify-center">
              <span className="text-[#C9A962] text-xs font-bold font-playfair tracking-wider">N</span>
            </div>
            <span className="font-playfair text-lg font-bold text-white/80 tracking-wide">NexAssist</span>
          </div>
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} NexAssist · Personal Concierge
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-white/25">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="hover:text-[#C9A962] transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
