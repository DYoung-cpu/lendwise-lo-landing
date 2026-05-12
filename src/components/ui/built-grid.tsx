"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { companyProfile } from "@/config/company-profile";

type Card = { icon: string; title: string; desc: string };

export function BuiltGrid() {
  const m = companyProfile.marketing;

  return (
    <AnimatedBackground variant="green" intensity="medium" id="built" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Master section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[3px] text-white/60 mb-3">What We've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Two engines, one mission: keep you closing.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            One side built for the loan in front of you. The other built for the borrowers you
            haven&apos;t talked to in months.
          </p>
        </motion.div>

        {/* Subgroup 1 — FOR LOANS (emerald) */}
        <SubgroupHeader eyebrow="FOR LOANS" accentClass="text-emerald-400" />
        <CardGrid cards={companyProfile.built as Card[]} accent="emerald" />

        {/* Visual separator between subgroups */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-16 max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Subgroup 2 — FOR MARKETING (cyan) */}
        <SubgroupHeader eyebrow="FOR MARKETING" accentClass="text-cyan-400" sub={m.headline} subDesc={m.subhead} />
        <CardGrid cards={m.cards as Card[]} accent="cyan" />
      </div>
    </AnimatedBackground>
  );
}

function SubgroupHeader({
  eyebrow,
  accentClass,
  sub,
  subDesc,
}: {
  eyebrow: string;
  accentClass: string;
  sub?: string;
  subDesc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <p className={`text-xs uppercase tracking-[4px] ${accentClass} font-bold mb-2`}>
        {eyebrow}
      </p>
      {sub && (
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{sub}</h3>
      )}
      {subDesc && (
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">{subDesc}</p>
      )}
    </motion.div>
  );
}

function CardGrid({ cards, accent }: { cards: Card[]; accent: "emerald" | "cyan" }) {
  // Tailwind needs full class strings to be statically resolvable
  const palette =
    accent === "emerald"
      ? {
          iconBg: "bg-emerald-500/15",
          iconBorder: "border-emerald-400/30",
          iconBgHover: "group-hover:bg-emerald-500/25",
          cardHoverBorder: "hover:border-emerald-400/40",
          cardHoverShadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]",
        }
      : {
          iconBg: "bg-cyan-500/15",
          iconBorder: "border-cyan-400/30",
          iconBgHover: "group-hover:bg-cyan-500/25",
          cardHoverBorder: "hover:border-cyan-400/40",
          cardHoverShadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
        };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-7 hover:bg-white/10 transition-all ${palette.cardHoverBorder} ${palette.cardHoverShadow}`}
        >
          <div className="flex gap-4">
            <div className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center transition-all ${palette.iconBg} ${palette.iconBorder} ${palette.iconBgHover}`}>
              <Image src={card.icon} alt="" width={32} height={32} className="opacity-95" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
