"use client";

import { motion } from "framer-motion";
import { companyProfile } from "@/config/company-profile";

const STATE_NAMES: Record<string, string> = {
  CA: "California",
  CO: "Colorado",
  FL: "Florida",
  TX: "Texas",
};

export function TrustBand() {
  const t = companyProfile.trustBand;
  return (
    <section className="relative bg-slate-950 border-y border-white/10 py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A227]/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 text-center">
          <Stat label="Licensed in" value={t.statesLicensed.join(" · ")} sub={t.statesLicensed.map((s) => STATE_NAMES[s] || s).join(", ")} />
          <Divider />
          <Stat label="Corporate NMLS" value={`#${t.nmls}`} />
          <Divider />
          <Stat label="CA DRE" value={`#${t.dre}`} />
          <Divider />
          <Stat label="Investors" value={`${t.investorCount}+`} />
          <Divider />
          <Stat label="Programs" value={`${t.programCount}+`} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <span className="text-xs uppercase tracking-[2px] text-slate-400 mb-1">{label}</span>
      <span className="text-lg md:text-xl font-semibold text-[#C9A227]">{value}</span>
      {sub && <span className="text-xs text-slate-500 mt-0.5">{sub}</span>}
    </motion.div>
  );
}

function Divider() {
  return <div className="hidden md:block w-px h-10 bg-white/10" />;
}
