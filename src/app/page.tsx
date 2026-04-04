"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { StarButton } from "@/components/ui/star-button";
import { recruitConfig } from "@/config/recruit-config";
import Image from "next/image";
import {
  Zap,
  Target,
  DollarSign,
  Cpu,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  CheckCircle,
  Play,
  MapPin,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Target,
  DollarSign,
  Cpu,
  Users,
  TrendingUp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function RecruitPage() {
  const { hero, valueProps, stats, contact, company, social, demo } =
    recruitConfig;

  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* ── Nav Bar ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/owl-logo.png"
              alt="LendWise"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-semibold tracking-tight">
              LendWise Mortgage
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contact.phone}
            </a>
            <StarButton
              lightColor="#10b981"
              backgroundColor="#0f172a"
              duration={7}
              className="h-9 px-5 text-sm"
              href={hero.ctaUrl}
              target="_blank"
            >
              {hero.ctaText}
            </StarButton>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────────── */}
      <AnimatedBackground variant="green" intensity="strong">
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
                <Zap className="w-4 h-4" />
                Now Recruiting Loan Officers
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {hero.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <StarButton
                lightColor="#10b981"
                backgroundColor="#0f172a"
                duration={5}
                className="h-14 px-10 text-lg"
                href={hero.ctaUrl}
                target="_blank"
              >
                Schedule a Conversation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </StarButton>
              <a
                href="#demo"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Play className="w-4 h-4" />
                Watch the Demo
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
          </motion.div>
        </section>
      </AnimatedBackground>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <section className="relative border-y border-white/5 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Value Props ────────────────────────────────────── */}
      <AnimatedBackground variant="dark" intensity="subtle">
        <section className="py-24" id="why">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Top Originators Choose{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  LendWise
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We built the platform we wished existed when we were
                originating. Everything here is designed to help you close more
                loans with less friction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop, i) => {
                const Icon = iconMap[prop.icon] || Zap;
                return (
                  <motion.div
                    key={prop.title}
                    className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── Demo Section ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#0a0f1a] border-y border-white/5"
        id="demo"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {demo.headline}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {demo.subheadline}
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl shadow-emerald-500/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {/* Video placeholder — replace with actual video embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                <Play className="w-10 h-10 text-emerald-400 ml-1" />
              </div>
              <p className="text-lg font-semibold mb-2">
                Pre-Approval Demo
              </p>
              <p className="text-sm text-gray-400">
                Text to approval in minutes — no phone calls needed
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <AnimatedBackground variant="dark" intensity="subtle">
        <section className="py-24" id="how">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Joining Looks Like
              </h2>
              <p className="text-gray-400">
                Simple, transparent, no games.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "We Have a Conversation",
                  desc: "No pressure, no pitch. We learn about your business, you learn about ours. If there's alignment, we move forward.",
                },
                {
                  step: "02",
                  title: "Choose Your Structure",
                  desc: "W-2 or 1099 — whichever fits your business model. We'll walk through comp, splits, and what the platform provides.",
                },
                {
                  step: "03",
                  title: "Onboard in Days, Not Weeks",
                  desc: "Your branded landing page, marketing assets, CRM, and AI tools are set up before your first day. Hit the ground running.",
                },
                {
                  step: "04",
                  title: "Close More, Stress Less",
                  desc: "Focus on relationships and closing deals. Let the technology handle the rest — pre-approvals, marketing, follow-ups, all automated.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="flex gap-6 items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── CTA / Contact Section ──────────────────────────── */}
      <section className="py-24 bg-[#0a0f1a] border-t border-white/5" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Make a Move?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Whether you're exploring or ready to go, I'd love to hear about
              your business and tell you about ours.
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                  DY
                </div>
                <div>
                  <div className="font-semibold text-lg">{contact.name}</div>
                  <div className="text-sm text-gray-400">{contact.title}</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{contact.email}</span>
                </a>
                <a
                  href={contact.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">Schedule a Call</span>
                </a>
              </div>

              <StarButton
                lightColor="#10b981"
                backgroundColor="#0f172a"
                duration={5}
                className="w-full h-14 text-lg"
                href={contact.calendarUrl}
                target="_blank"
              >
                Book a Confidential Conversation
              </StarButton>

              <p className="text-xs text-gray-500 text-center mt-4">
                All conversations are confidential. No obligation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#030712]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/owl-logo.png"
                alt="LendWise"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-semibold">{company.name}</span>
            </div>

            <div className="flex items-center gap-6">
              {Object.entries(social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {company.address}
              </div>
              <div className="flex items-center gap-4">
                <span>NMLS# {company.nmls}</span>
                <span>DRE# {company.dre}</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
              <Shield className="w-3 h-3" />
              Equal Housing Lender
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
