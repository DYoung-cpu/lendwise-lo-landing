"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyProfile } from "@/config/company-profile";

export function ProgramsAndInvestors() {
  return (
    <section id="programs" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">Products & Investors</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Close the deals you couldn't before
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Full agency stack plus deep Non-QM, DSCR, bank-statement, and HELOC investor
            relationships. If your borrower has a story, we have a lender for it.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-20">
          {companyProfile.programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C9A227]/40 group-hover:bg-[#C9A227]/5 transition-all">
                <Image src={p.img} alt={p.title} width={32} height={32} className="opacity-80 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-semibold text-white">{p.title}</span>
              <span className="text-[10px] text-slate-500 leading-tight">{p.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Investor wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-[3px] text-slate-500 mb-2">A few of our investors</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {companyProfile.investors.map((inv, i) => (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-center justify-center h-16 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#C9A227]/20 transition-all p-3"
              title={inv.name}
            >
              {/* If logo file is missing, show name as text fallback */}
              <div className="text-slate-400 text-xs font-medium text-center grayscale hover:grayscale-0 transition-all">
                {inv.name}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-600 mt-6">
          Plus 15+ additional wholesale and correspondent partners. Full list shared on the call.
        </p>
      </div>
    </section>
  );
}
