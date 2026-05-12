"use client";

import { motion } from "framer-motion";
import { companyProfile } from "@/config/company-profile";

export function CompSection() {
  const c = companyProfile.compensation;

  return (
    <section
      id="comp"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
      {/* Soft gold radial glow — signals "money section" without overpowering */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0.04) 30%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[3px] text-[#C9A227] mb-3">
            {c.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {c.headline}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">{c.subhead}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-slate-950 p-7 md:p-8
                         hover:border-[#C9A227]/60 hover:shadow-[0_0_40px_rgba(201,162,39,0.2)] transition-all"
            >
              <div className="flex gap-4">
                {/* Compact gold checkmark badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/50 flex items-center justify-center group-hover:bg-[#C9A227]/25 transition-all">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#C9A227]">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#C9A227] mb-2 leading-snug drop-shadow-[0_1px_4px_rgba(201,162,39,0.25)]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
