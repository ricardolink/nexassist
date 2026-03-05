"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { countries, defaultCountry, type Country } from "@/lib/countries";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
  required?: boolean;
}

export default function PhoneInput({
  value,
  onChange,
  selectedCountry,
  onCountryChange,
  required,
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    if (open) {
      document.addEventListener("mousedown", onOutside);
      // Focus search after open
      setTimeout(() => searchRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  // Lock body scroll when dropdown open on mobile
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const filtered = search.trim()
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const handleSelect = useCallback((c: Country) => {
    onCountryChange(c);
    setOpen(false);
    setSearch("");
  }, [onCountryChange]);

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 15);
    return digits;
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Input row */}
      <div className="flex border border-white/10 focus-within:border-[#C9A962]/45 rounded-sm overflow-visible transition-colors">
        {/* Country trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 sm:px-3.5 py-3 border-r border-white/10 bg-white/2 hover:bg-white/4 transition-colors shrink-0 group"
          aria-label="Select country code"
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="text-white/55 text-xs font-medium group-hover:text-white/80 transition-colors hidden sm:block">
            {selectedCountry.dial}
          </span>
          <span className="text-white/55 text-xs font-medium group-hover:text-white/80 transition-colors sm:hidden">
            {selectedCountry.dial}
          </span>
          <svg
            className={`w-3 h-3 text-white/25 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 10 6"
            fill="none"
          >
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Phone number input */}
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(formatPhone(e.target.value))}
          placeholder="000 000 0000"
          required={required}
          className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-white/22 focus:outline-none"
        />
      </div>

      {/* ── Dropdown ── */}
      {open && (
        <>
          {/* Mobile: full-screen overlay backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] sm:hidden" />

          {/* Mobile: bottom sheet / Desktop: floating dropdown */}
          <div
            className={`
              z-[201] bg-[#0c1425] border border-[#C9A962]/18
              sm:absolute sm:top-full sm:left-0 sm:mt-1.5 sm:w-80 sm:rounded-sm sm:shadow-[0_16px_60px_rgba(0,0,0,0.7)]
              fixed bottom-0 left-0 right-0 rounded-t-xl sm:rounded-sm
              flex flex-col overflow-hidden
              animate-slide-up sm:animate-none
            `}
            style={{ maxHeight: "72vh" }}
          >
            {/* Header (mobile) */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/8 sm:hidden">
              <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Select Country</span>
              <button
                type="button"
                onClick={() => { setOpen(false); setSearch(""); }}
                className="text-white/35 hover:text-white transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Search */}
            <div className="px-3 py-2.5 border-b border-white/8">
              <div className="flex items-center gap-2.5 bg-white/4 rounded-sm px-3 py-2">
                <svg className="w-3.5 h-3.5 text-white/30 shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search country or code..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/25 focus:outline-none"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-white/25 hover:text-white/60 transition-colors text-base leading-none"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Country list */}
            <div className="overflow-y-auto flex-1 py-1">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-white/25 text-sm">
                  No results for &quot;{search}&quot;
                </div>
              ) : (
                filtered.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleSelect(c)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5 ${
                      c.code === selectedCountry.code
                        ? "bg-[#C9A962]/8 text-[#C9A962]"
                        : "text-white/65"
                    }`}
                  >
                    <span className="text-xl leading-none w-7 text-center">{c.flag}</span>
                    <span className="flex-1 text-sm truncate">{c.name}</span>
                    <span
                      className={`text-xs font-medium tabular-nums ${
                        c.code === selectedCountry.code ? "text-[#C9A962]" : "text-white/30"
                      }`}
                    >
                      {c.dial}
                    </span>
                    {c.code === selectedCountry.code && (
                      <svg className="w-3.5 h-3.5 text-[#C9A962] shrink-0" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
