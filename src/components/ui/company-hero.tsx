"use client";

import { motion } from "framer-motion";
import { companyProfile } from "@/config/company-profile";

export function CompanyHero() {
  const h = companyProfile.hero;

  return (
    <section
      id="hero"
      className="relative bg-slate-950 flex flex-col items-center justify-start px-6 pb-12 md:pb-20"
    >
      {/* Background glow orbs (same chassis as ParallaxHero) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,162,39,0.22) 0%, rgba(201,162,39,0.08) 30%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 50%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 50%)",
          }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto pt-44 md:pt-60 lg:pt-72 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {h.headline}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-[1.7] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {h.subhead}
        </motion.p>

        <motion.a
          href={h.primaryCtaTarget}
          className="inline-block rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C158] hover:from-[#D4AF37] hover:to-[#F0CC68] text-slate-950 font-bold py-4 px-8 text-sm uppercase tracking-[3px] transition-all shadow-[0_0_40px_rgba(201,162,39,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {h.primaryCtaLabel}
        </motion.a>
      </div>
    </section>
  );
}
