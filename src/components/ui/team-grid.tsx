"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { companyProfile } from "@/config/company-profile";

export function TeamGrid() {
  if (!companyProfile.team || companyProfile.team.length === 0) return null;

  return (
    <AnimatedBackground variant="dark" intensity="medium" id="team" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">In-House Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real people. Real ops. Real shop.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Operations, processing, marketing, and IT — all in-house, all reachable. You're not
            calling a 1-800 number when a deal needs to close.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {companyProfile.team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#C9A227]/40 hover:border-[#C9A227] transition-all shadow-[0_0_30px_rgba(201,162,39,0.2)]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-white font-semibold text-sm">{member.name}</p>
              <p className="text-xs text-slate-300">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}
