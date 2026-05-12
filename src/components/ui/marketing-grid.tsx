"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { companyProfile } from "@/config/company-profile";

export function MarketingGrid() {
  const m = companyProfile.marketing;

  return (
    <AnimatedBackground variant="green" intensity="medium" id="marketing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">{m.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{m.headline}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">{m.subhead}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {m.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-7
                         hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                         transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/25 transition-all">
                  <Image src={card.icon} alt="" width={32} height={32} className="opacity-95" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
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
    </AnimatedBackground>
  );
}
