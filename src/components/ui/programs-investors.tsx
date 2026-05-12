"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { InvestorMarquee } from "@/components/ui/investor-marquee";
import { companyProfile } from "@/config/company-profile";

export function ProgramsAndInvestors() {
  return (
    <AnimatedBackground variant="royal" intensity="medium" id="programs" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">Products & Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Close the deals you couldn't before
          </h2>
        </motion.div>

        {/* IN-HOUSE UNDERWRITING — the recruiting hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl mb-14 rounded-2xl border-2 border-[#C9A227]/50 bg-gradient-to-br from-[#C9A227]/10 via-[#C9A227]/5 to-transparent p-6 md:p-8 shadow-[0_0_60px_rgba(201,162,39,0.25)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A227] flex items-center justify-center text-slate-950 text-2xl font-black">
              ★
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[3px] text-[#C9A227] font-bold mb-2">
                Every Loan Underwritten In-House
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                FHA · VA · Conventional · Jumbo · Non-QM
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Quick turn-around times on your loans. No wholesale runaround, no broker-channel
                handoffs. Your underwriter is on Slack, not in a queue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Programs grid with IN-HOUSE pill on every tile */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-20">
          {companyProfile.programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* IN-HOUSE pill */}
              <span className="absolute -top-1 -right-1 z-10 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-slate-950 bg-[#C9A227] rounded-full shadow-md">
                In-House
              </span>
              <div className="w-14 h-14 mb-2 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10 transition-all">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={32}
                  height={32}
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <span className="text-xs font-semibold text-white">{p.title}</span>
              <span className="text-[10px] text-slate-300 leading-tight">{p.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Investor marquee — two opposing lanes, ~45s loop, hover pauses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-[3px] text-slate-400 mb-1">A few of our partners</p>
        </motion.div>
        <InvestorMarquee />
        <p className="text-center text-xs text-slate-300 mt-6">
          Full partner stack — wholesale &amp; correspondent — walked through on your call.
        </p>
      </div>
    </AnimatedBackground>
  );
}
