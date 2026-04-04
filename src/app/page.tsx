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
  Play,
  MapPin,
  Shield,
  CheckCircle,
  Building2,
  Briefcase,
  Headphones,
  Palette,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Target, DollarSign, Cpu, Users, TrendingUp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = parts.map((p) => p[0]).join("").slice(0, 2);
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-sm font-bold text-emerald-300">
      {initials}
    </div>
  );
}

function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/recruit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">We Got Your Request</h3>
        <p className="text-gray-400">Someone from our team will reach out shortly.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name *" required className={inputClass} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        <input type="text" placeholder="Last Name *" required className={inputClass} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      </div>
      <input type="email" placeholder="Email *" required className={inputClass} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Phone" className={inputClass} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <input type="text" placeholder="Current Company" className={inputClass} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
      <textarea placeholder="Tell us about your business..." rows={3} className={inputClass + " resize-none"} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg hover:from-emerald-400 hover:to-cyan-400 transition-all disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Request More Information"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Try again or call us directly.</p>
      )}
    </form>
  );
}

export default function RecruitPage() {
  const { hero, valueProps, stats, contact, company, social, demo, comp, programs, support, marketing, team } = recruitConfig;

  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="relative bg-slate-950/80 backdrop-blur-xl">
          <div className="relative flex items-center justify-center px-6 h-24 md:h-44">
            {/* Left-side buttons (3) */}
            <motion.div
              className="hidden md:flex gap-2 self-end pb-6 mr-auto ml-[5%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StarButton href="#comp" lightColor="#d4af37" backgroundColor="#0f172a" duration={8} className="h-10 px-4 text-sm">
                Compensation
              </StarButton>
              <StarButton href="#programs" lightColor="#d4af37" backgroundColor="#0f172a" duration={9} className="h-10 px-4 text-sm">
                Products
              </StarButton>
              <StarButton href="#marketing" lightColor="#d4af37" backgroundColor="#0f172a" duration={10} className="h-10 px-4 text-sm">
                Marketing
              </StarButton>
            </motion.div>
            {/* Center logo */}
            <motion.a
              href="#hero"
              className="absolute left-1/2 block overflow-hidden h-24 md:h-44"
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/lendwise-hero-logo.png"
                alt="LendWise Mortgage"
                width={250}
                height={110}
                className="h-[160px] md:h-[264px] w-auto -mt-6 md:-mt-9 drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]"
              />
            </motion.a>
            {/* Right-side buttons (3) */}
            <motion.div
              className="hidden md:flex gap-2 self-end pb-6 ml-auto mr-[5%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StarButton href="#team" lightColor="#d4af37" backgroundColor="#0f172a" duration={11} className="h-10 px-4 text-sm">
                Meet the Team
              </StarButton>
              <StarButton href="#contact" lightColor="#10b981" backgroundColor="#0f172a" duration={6} className="h-10 px-4 text-sm">
                Join the Team
              </StarButton>
              <StarButton href={`tel:${contact.phoneRaw}`} lightColor="#06b6d4" backgroundColor="#0f172a" duration={7} className="h-10 px-4 text-sm">
                {contact.phone}
              </StarButton>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <div className="relative flex justify-center h-0">
              <motion.div initial={{ width: "8rem", opacity: 0 }} animate={{ width: "100%", opacity: 0.6 }} transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }} className="absolute top-0 h-2.5 bg-cyan-500 blur-lg" />
              <motion.div initial={{ width: "6rem", opacity: 0 }} animate={{ width: "100%", opacity: 0.97 }} transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }} className="absolute top-0 h-px bg-cyan-400 blur-md" />
              <motion.div initial={{ width: "10rem", opacity: 0 }} animate={{ width: "100%", opacity: 1 }} transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }} className="absolute top-0 h-px bg-cyan-400 opacity-50" />
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <AnimatedBackground variant="green" intensity="strong">
        <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-44" id="hero">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
                <Zap className="w-4 h-4" />
                Now Recruiting Loan Officers
              </div>
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              {hero.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{line}</span> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              {hero.subheadline}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <StarButton lightColor="#10b981" backgroundColor="#0f172a" duration={5} className="h-14 px-10 text-lg" href="#contact">
                Talk to Our Team <ArrowRight className="w-5 h-5 ml-2 inline" />
              </StarButton>
              <a href="#demo" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Play className="w-4 h-4" /> Watch the Demo
              </a>
            </motion.div>
          </div>
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
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
            <motion.div key={stat.label} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why LendWise ───────────────────────────────────── */}
      <AnimatedBackground variant="dark" intensity="subtle">
        <section className="py-24" id="why">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Top Originators Choose <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">LendWise</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">We built the platform we wished existed when we were originating. Everything here is designed to help you close more loans with less friction.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop, i) => {
                const Icon = iconMap[prop.icon] || Zap;
                return (
                  <motion.div key={prop.title} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── Comp Plans ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0f1a] border-y border-white/5" id="comp">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
              <DollarSign className="w-4 h-4" /> Compensation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{comp.headline}</h2>
            <p className="text-gray-400 max-w-lg mx-auto">{comp.subheadline}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {comp.points.map((point, i) => (
              <motion.div key={point.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ───────────────────────────────────────── */}
      <AnimatedBackground variant="dark" intensity="subtle">
        <section className="py-24" id="programs">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
                <Briefcase className="w-4 h-4" /> Loan Programs
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{programs.headline}</h2>
              <p className="text-gray-400 max-w-lg mx-auto">{programs.subheadline}</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {programs.list.map((prog, i) => (
                <motion.div key={prog.name} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <div className="font-semibold mb-1">{prog.name}</div>
                  {prog.status === "coming" ? (
                    <span className="text-xs text-amber-400">Coming Soon</span>
                  ) : (
                    <span className="text-xs text-emerald-400">Available</span>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.p className="text-center text-sm text-gray-500" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-gray-400 font-medium">Investors:</span> {programs.investors}
            </motion.p>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── Marketing & Tech ───────────────────────────────── */}
      <AnimatedBackground variant="green" intensity="subtle">
        <section className="py-24" id="marketing">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
                <Palette className="w-4 h-4" /> Marketing & Technology
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{marketing.headline}</h2>
              <p className="text-gray-400 max-w-xl mx-auto">{marketing.subheadline}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketing.features.map((feat, i) => (
                <motion.div key={feat.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.p className="text-center text-gray-400 mt-12 text-lg font-medium" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              Concentrate on business. We handle the rest.
            </motion.p>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── Demo ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0f1a] border-y border-white/5" id="demo">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{demo.headline}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{demo.subheadline}</p>
          </motion.div>
          <motion.div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl shadow-emerald-500/5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                <Play className="w-10 h-10 text-emerald-400 ml-1" />
              </div>
              <p className="text-lg font-semibold mb-2">Pre-Approval Demo</p>
              <p className="text-sm text-gray-400">Text to approval in minutes — no phone calls needed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────── */}
      <AnimatedBackground variant="dark" intensity="subtle">
        <section className="py-24" id="team">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{team.headline}</h2>
              <p className="text-gray-400">Leadership, originators, and operations — all under one roof.</p>
            </motion.div>

            {/* Leadership */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Leadership
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.leadership.map((person, i) => (
                  <motion.div key={person.name} className="p-5 rounded-xl border border-white/5 bg-white/[0.02]" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                    <div className="flex items-center gap-4 mb-2">
                      <Initials name={person.name} />
                      <div>
                        <div className="font-semibold">{person.name}</div>
                        <div className="text-xs text-emerald-400">{person.title}</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 ml-16">{person.focus}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Originators */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Loan Officers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {team.originators.map((person, i) => (
                  <motion.div key={person.name} className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                    <div className="mx-auto mb-2 flex justify-center"><Initials name={person.name} /></div>
                    <div className="font-medium text-sm">{person.name}</div>
                    <div className="text-xs text-gray-500">{person.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Operations */}
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-6 flex items-center gap-2">
                <Headphones className="w-5 h-5" /> Operations & Support
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {team.operations.map((person, i) => (
                  <motion.div key={person.name} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                    <Initials name={person.name} />
                    <div>
                      <div className="font-medium text-sm">{person.name}</div>
                      <div className="text-xs text-gray-500">{person.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* ── Contact / Inquiry ──────────────────────────────── */}
      <section className="py-24 bg-[#0a0f1a] border-t border-white/5" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{contact.headline}</h2>
            <p className="text-gray-400 max-w-lg mx-auto">{contact.subheadline}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 className="text-lg font-semibold mb-6">Request Information</h3>
              <InquiryForm />
            </motion.div>
            <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold mb-6">Or Reach Out Directly</h3>
                <div className="space-y-4">
                  <a href={contact.calendarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-sm">Schedule a Call</div>
                      <div className="text-xs text-gray-400">Book a confidential conversation</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                  </a>
                  <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">{contact.phone}</span>
                  </a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">{contact.email}</span>
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {company.address}
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">All conversations are confidential. No obligation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#030712]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image src="/images/lendwise-text-only.png" alt="LendWise Mortgage" width={160} height={30} className="opacity-80" />
            <div className="flex items-center gap-6">
              {Object.entries(social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm capitalize">{platform}</a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2"><MapPin className="w-3 h-3" />{company.address}</div>
              <div className="flex items-center gap-4"><span>NMLS# {company.nmls}</span><span>DRE# {company.dre}</span></div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
              <Shield className="w-3 h-3" /> Equal Housing Lender
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
