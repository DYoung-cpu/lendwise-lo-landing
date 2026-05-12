"use client";

import { useState } from "react";
import Image from "next/image";
import { companyProfile } from "@/config/company-profile";

type Investor = {
  name: string;
  logo: string;
};

export function InvestorMarquee() {
  const all = companyProfile.investors as Investor[];
  // Hide tiles whose logo file 404s
  const [missing, setMissing] = useState<Set<string>>(new Set());
  const reportMissing = (logo: string) => {
    setMissing((prev) => {
      if (prev.has(logo)) return prev;
      const next = new Set(prev);
      next.add(logo);
      return next;
    });
  };

  const present = all.filter((inv) => !missing.has(inv.logo));
  if (present.length === 0) return null;

  const lane1 = present.filter((_, i) => i % 2 === 0);
  const lane2 = present.filter((_, i) => i % 2 === 1);

  return (
    <div className="marquee-track relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-2">
      <Lane direction="rtl" items={lane1} onError={reportMissing} />
      <div className="h-8" />
      <Lane direction="ltr" items={lane2} onError={reportMissing} />
    </div>
  );
}

function Lane({
  direction,
  items,
  onError,
}: {
  direction: "rtl" | "ltr";
  items: Investor[];
  onError: (logo: string) => void;
}) {
  if (items.length === 0) return null;
  const doubled = [...items, ...items];
  return (
    <div
      className={`flex gap-10 w-max items-center ${
        direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
      }`}
    >
      {doubled.map((inv, i) => (
        <Tile key={`${direction}-${i}-${inv.name}`} inv={inv} onError={onError} />
      ))}
    </div>
  );
}

function Tile({ inv, onError }: { inv: Investor; onError: (logo: string) => void }) {
  return (
    <div
      className="group relative flex items-center justify-center h-16 w-[160px] flex-shrink-0 px-3"
      title={inv.name}
    >
      <Image
        src={inv.logo}
        alt={inv.name}
        width={180}
        height={64}
        className="max-h-14 w-auto object-contain transition-all duration-300
                   [filter:brightness(0)_invert(1)_drop-shadow(0_0_8px_rgba(201,162,39,0.35))]
                   opacity-95
                   group-hover:[filter:none_drop-shadow(0_2px_10px_rgba(255,255,255,0.4))]
                   group-hover:opacity-100 group-hover:scale-110"
        unoptimized
        onError={() => onError(inv.logo)}
      />
      {/* Gold underline glow on hover */}
      <span
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#C9A227]
                   shadow-[0_0_12px_rgba(201,162,39,0.7)]
                   group-hover:w-3/4 transition-all duration-300"
      />
    </div>
  );
}
