"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyProfile } from "@/config/company-profile";

export function BuiltGrid() {
  return (
    <section id="built" className="relative bg-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">What We've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The unfair advantage on day one
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            You don't get a desk and a CRM login. You get a tech stack purpose-built for closing
            loans — and the team behind it answers when you call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyProfile.built.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 hover:border-[#C9A227]/40 hover:shadow-[0_0_30px_rgba(201,162,39,0.15)] transition-all"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-white/5 flex items-center justify-center">
                <Image src={card.icon} alt="" width={28} height={28} className="opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
