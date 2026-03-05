"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
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
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Calculate position from trigger button
  function calcPosition() {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + 6,
      left: rect.left,
      width: 300,
    });
  }

  function handleOpen() {
    calcPosition();
    setOpen(true);
  }

  // Close on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      const target = e.target as Node;
      const dropdown = document.getElementById("phone-dropdown-portal");
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        dropdown &&
        !dropdown.contains(target)
      ) {
        setOpen(false);
        setSearch("");
      }
    }
    if (open) {
      document.addEventListener("mousedown", onOutside);
      setTimeout(() => searchRef.current?.focus(), 60);
    }
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (open && isMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reposition on scroll/resize
  useEffect(() => {
    if (!open) return;
    const onScroll = () => calcPosition();
    const onResize = () => calcPosition();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const filtered = search.trim()
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const handleSelect = useCallback(
    (c: Country) => {
      onCountryChange(c);
      setOpen(false);
      setSearch("");
    },
    [onCountryChange]
  );

  const formatPhone = (raw: string) => raw.replace(/\D/g, "").slice(0, 15);

  // ── Dropdown content shared between mobile sheet and desktop portal ──
  const dropdownContent = (
    <div className="flex flex-col overflow-hidden h-full">
      {/* Mobile header */}
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
        <div className="flex items-center gap-2.5 bg-white/5 rounded-sm px-3 py-2">
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
              className="text-white/25 hover:text-white/60 transition-colors leading-none"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto flex-1">
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-center text-white/25 text-sm">
            No results for &quot;{search}&quot;
          </div>
        ) : (
          filtered.map((c) => (
            <button
              key={c.code}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); handleSelect(c); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/6 ${
                c.code === selectedCountry.code
                  ? "bg-[#C9A962]/10 text-[#C9A962]"
                  : "text-white/65"
              }`}
            >
              <span className="text-xl leading-none w-7 text-center">{c.flag}</span>
              <span className="flex-1 text-sm truncate">{c.name}</span>
              <span
                className={`text-xs font-medium tabular-nums shrink-0 ${
                  c.code === selectedCountry.code ? "text-[#C9A962]" : "text-white/30"
                }`}
              >
                {c.dial}
              </span>
              {c.code === selectedCountry.code && (
                <svg className="w-3 h-3 text-[#C9A962] shrink-0" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* ── Input row ── */}
      <div className="flex border border-white/10 focus-within:border-[#C9A962]/45 rounded-sm overflow-visible transition-colors">
        {/* Country trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={handleOpen}
          className="flex items-center gap-2 px-3 sm:px-3.5 py-3 border-r border-white/10 bg-white/2 hover:bg-white/5 transition-colors shrink-0 group"
          aria-label="Select country code"
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="text-white/55 text-xs font-medium group-hover:text-white/80 transition-colors">
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

        {/* Phone number */}
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
      {open && mounted && (
        <>
          {/* Mobile: bottom sheet */}
          <div className="sm:hidden">
            <div className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[300]" />
            <div
              className="fixed bottom-0 left-0 right-0 z-[301] bg-[#0c1425] border-t border-[#C9A962]/20 rounded-t-xl flex flex-col animate-slide-up"
              style={{ maxHeight: "72vh" }}
            >
              {dropdownContent}
            </div>
          </div>

          {/* Desktop: fixed portal dropdown */}
          {createPortal(
            <div
              id="phone-dropdown-portal"
              className="hidden sm:flex flex-col bg-[#0c1425] border border-[#C9A962]/20 rounded-sm shadow-[0_16px_60px_rgba(0,0,0,0.8)] z-[500]"
              style={{
                position: "fixed",
                top: dropdownPos.top,
                left: dropdownPos.left,
                width: dropdownPos.width,
                maxHeight: "320px",
              }}
            >
              {dropdownContent}
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
}
