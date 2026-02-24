"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import LumaBar from "@/components/ui/luma-bar";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { StarButton } from "@/components/ui/star-button";
import Image from "next/image";
import {
  Home,
  Castle,
  Landmark,
  Medal,
  BarChart3,
  ClipboardList,
  Hammer,
  Key,
  Wallet,
  Zap,
  TrendingUp,
  MapPinned,
  FileText,
  MessageSquare,
  Bell,
  UserCheck,
  Cpu,
  Globe,
  Heart,
  Star,
  Phone,
  Mail,
} from "lucide-react";

function RateTrackerSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log("Rate Tracker submission:", data);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  const inputClass =
    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-colors";

  return (
    <AnimatedBackground variant="green" intensity="medium" id="rate-tracker" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-400 text-lg font-semibold mb-2">Rate Tracker</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Let Odin Watch the Market for You
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Enter your current loan details and Odin will monitor national rate
              movements around the clock. When rates drop enough to save you real
              money on a refinance, we&apos;ll reach out — no guesswork, no
              obsessive rate-checking.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  text: "24/7 rate monitoring powered by Odin AI",
                },
                {
                  icon: Bell,
                  text: "Instant alerts when refinancing makes sense",
                },
                {
                  icon: Wallet,
                  text: "Know exactly how much you could save each month",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-gray-200">
                  <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-gray-300">
                  Odin will notify you when rates drop below your current rate.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="propertyAddress"
                    placeholder="Property Address"
                    required
                    className={inputClass}
                  />
                  <input
                    type="number"
                    name="currentRate"
                    placeholder="Current Rate (%)"
                    step="0.125"
                    min="0"
                    max="20"
                    required
                    className={inputClass}
                  />
                  <input
                    type="number"
                    name="loanAmount"
                    placeholder="Current Loan Amount ($)"
                    min="0"
                    required
                    className={inputClass}
                  />
                  <input
                    type="number"
                    name="propertyValue"
                    placeholder="Estimated Property Value ($)"
                    min="0"
                    required
                    className={inputClass}
                  />
                  <select
                    name="creditScore"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Estimated Credit Score
                    </option>
                    <option value="740+">Excellent (740+)</option>
                    <option value="700-739">Good (700-739)</option>
                    <option value="660-699">Fair (660-699)</option>
                    <option value="below-660">Below 660</option>
                  </select>
                  <select
                    name="occupancyType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Occupancy Type
                    </option>
                    <option value="owner-occupied">Owner Occupied</option>
                    <option value="investment">Investment Property</option>
                    <option value="second-home">Second Home</option>
                  </select>
                  <select
                    name="currentLoanProgram"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Current Loan Program
                    </option>
                    <option value="conventional">Conventional</option>
                    <option value="fha">FHA</option>
                    <option value="va">VA</option>
                    <option value="jumbo">Jumbo</option>
                    <option value="usda">USDA</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors mt-2"
                >
                  Start Tracking My Rate
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default function DavidYoungPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="relative bg-slate-950/80 backdrop-blur-xl">
          <div className="relative flex items-center justify-end px-6 h-44">
            {/* Logo — absolutely centered, immune to button width */}
            <motion.a
              href="#hero"
              className="absolute left-1/2 block overflow-hidden h-44"
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/lendwise-hero-logo.png"
                alt="LendWise"
                width={250}
                height={110}
                className="h-[264px] w-auto -mt-9 drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]"
              />
            </motion.a>
            <motion.div
              className="flex gap-3 pr-4 self-end pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StarButton
                href="#apply"
                lightColor="#d4af37"
                backgroundColor="#0f172a"
                duration={6}
                className="h-10 px-5 text-sm"
              >
                Apply Now
              </StarButton>
              <StarButton
                href="#about"
                lightColor="#06b6d4"
                backgroundColor="#0f172a"
                duration={7}
                className="h-10 px-5 text-sm"
              >
                Contact Me
              </StarButton>
              <StarButton
                href="#rate-tracker"
                lightColor="#10b981"
                backgroundColor="#0f172a"
                duration={8}
                className="h-10 px-5 text-sm"
              >
                Rate Tracker
              </StarButton>
            </motion.div>
          </div>
          {/* Lamp beam at bottom edge of header */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <div className="relative flex justify-center h-0">
              {/* Wide soft glow - full width, only downward */}
              <motion.div
                initial={{ width: "8rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 0.6 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-2.5 bg-cyan-500 blur-lg"
              />
              {/* Tighter glow - full width, only downward */}
              <motion.div
                initial={{ width: "6rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 0.97 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-px bg-cyan-400 blur-md"
              />
              {/* Thin bright line at top edge - full width */}
              <motion.div
                initial={{ width: "10rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-px bg-cyan-400 opacity-50"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Parallax Hero */}
      <ParallaxHero />

      {/* Section 2: About */}
      <AnimatedBackground variant="green" intensity="medium" id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why Work With Me
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I&apos;ve spent over 25 years in the mortgage industry, and I still
              take pride in what real customer service means — staying ahead of
              every new program, rate, and advantage that can benefit my clients.
              I&apos;ve owned several successful mortgage businesses serving
              different markets, but with LendWise, I&apos;ve built something
              I&apos;ve always wanted: every program under one roof, powered by
              the best pricing and technology in the business. Having funded
              hundreds of millions in loans, I understand the weight of the
              decisions homeowners face. Your home is your most trusted asset,
              and that gravity is never lost on me. When you work with me,
              you&apos;re working directly with an owner — no receptionist, no
              middleman. I&apos;m always a phone call, text, or email away.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                img: "/images/icons/person-check.png",
                title: "Direct Access",
                desc: "Work directly with a partner, not a call center. I'm personally invested in getting your loan closed right.",
              },
              {
                img: "/images/icons/chip.png",
                title: "Technology Forward",
                desc: "AI-powered lending with Odin, our intelligent mortgage assistant. Faster approvals, smarter processing.",
              },
              {
                img: "/images/icons/globe.png",
                title: "Nationwide Reach",
                desc: "Licensed and lending across multiple states. Bringing modern mortgage solutions wherever you are.",
              },
              {
                img: "/images/icons/chip-dark.png",
                title: "Personal Touch",
                desc: "I know my clients by name, not number. Your biggest investment deserves care and precision.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="bg-white/5 backdrop-blur p-6 rounded-2xl text-center border border-[rgba(201,162,39,0.25)] shadow-[0_0_20px_rgba(201,162,39,0.12)]"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image src={card.img} alt={card.title} width={48} height={48} className="w-12 h-12 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 3: Loan Programs */}
      <AnimatedBackground variant="royal" intensity="medium" id="programs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
            Loan Programs
          </h2>
          <p className="text-gray-300 text-center mb-12">
            The right loan for every borrower.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "/images/icons/programs/conventional.png", title: "Conventional", desc: "Traditional financing" },
              { img: "/images/icons/programs/jumbo.png", title: "Jumbo", desc: "Beyond conforming limits" },
              { img: "/images/icons/programs/fha.png", title: "FHA", desc: "Low down payment" },
              { img: "/images/icons/programs/va.png", title: "VA", desc: "Veterans & service members" },
              { img: "/images/icons/programs/dscr.png", title: "DSCR", desc: "Investment properties" },
              { img: "/images/icons/programs/bank-statement.png", title: "Bank Statement", desc: "Self-employed" },
              { img: "/images/icons/programs/fix-flip.png", title: "Fix & Flip", desc: "Short-term investor" },
              { img: "/images/icons/programs/first-time-buyer.png", title: "First Time Buyer", desc: "New homeowners" },
              { img: "/images/icons/programs/heloc.png", title: "HELOCs", desc: "Home equity access" },
            ].map((program, i) => (
              <motion.div
                key={program.title}
                className="bg-white/5 backdrop-blur p-6 rounded-2xl text-center border border-white/10"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Image src={program.img} alt={program.title} width={48} height={48} className="w-12 h-12 mx-auto mb-3 object-contain" />
                <h3 className="font-semibold mb-1 text-white">{program.title}</h3>
                <p className="text-sm text-gray-400">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 4: Odin AI */}
      <AnimatedBackground variant="dark" intensity="medium" id="odin" className="py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-medium mb-2">Introducing</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gold mb-4">
            Odin AI
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your AI mortgage assistant. Instant pre-approvals, real-time
            tracking, smart rate monitoring. Your loan moves while you sleep.
          </p>

          {/* Owl Video */}
          <div className="w-44 h-44 mx-auto mb-12 rounded-full overflow-hidden border-2 border-[#C9A227] shadow-[0_0_60px_rgba(201,162,39,0.4)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/wisr-owl.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Features Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "/images/icons/odin/instant-preapproval.png", title: "Instant Pre-Approvals", desc: "Get your pre-approval letter in seconds, not days." },
              { img: "/images/icons/odin/smart-rate.png", title: "Smart Rate Tracking", desc: "Odin monitors the market 24/7 for savings opportunities." },
              { img: "/images/icons/odin/realtime-tracking.png", title: "Real-Time Loan Tracking", desc: "Always know where your loan is in the process." },
              { img: "/images/icons/odin/document-intelligence.png", title: "Document Intelligence", desc: "Upload once, never be asked twice." },
              { img: "/images/icons/odin/talk-your-way.png", title: "Talk Your Way", desc: "Text, email, or chat - Odin remembers." },
              { img: "/images/icons/odin/proactive-updates.png", title: "Proactive Updates", desc: "Know what's needed before you ask." },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur p-6 rounded-2xl text-center border border-white/10"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {'img' in feature && feature.img ? (
                  <Image src={feature.img} alt={feature.title} width={40} height={40} className="w-10 h-10 object-contain mb-4 mx-auto" />
                ) : (
                  'icon' in feature && feature.icon ? <feature.icon className="w-10 h-10 text-gold mb-4 mx-auto" /> : null
                )}
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 5: Rate Tracker */}
      <RateTrackerSection />

      {/* Section 6: Reviews / Social Proof */}
      <AnimatedBackground variant="light" intensity="subtle" id="reviews" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Real experiences from real homeowners.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                text: "David made our first home purchase feel effortless. He was available at every step and got us an incredible rate.",
                rating: 5,
              },
              {
                name: "James & Lisa R.",
                text: "We refinanced with David and saved over $400/month. His tech-forward approach made the paperwork painless.",
                rating: 5,
              },
              {
                name: "Michael T.",
                text: "As a self-employed borrower, I thought getting a mortgage would be impossible. David found the perfect program for me.",
                rating: 5,
              },
            ].map((review) => (
              <motion.div
                key={review.name}
                className="bg-white p-6 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold text-sm text-gray-900">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 6: Contact & Apply CTA */}
      <AnimatedBackground variant="dark" intensity="strong" id="apply" className="py-20 px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Pre-Approved?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Start your application in minutes. I&apos;ll personally guide you through every step.
        </p>
        <div className="mb-8">
          <StarButton
            href="https://lendwisemtg.mymortgage-online.com/borrower-app/registration/?workFlowId=223023&action=login&dest=/loan-app/&siteId=1956469515"
            lightColor="#d4af37"
            backgroundColor="#0f172a"
            duration={6}
            className="h-12 px-8 text-base"
          >
            Apply Now
          </StarButton>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm text-gray-400 mb-6">
          <a href="tel:+13109547772" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            (310) 954-7772
          </a>
          <a href="mailto:david@lendwisemtg.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            david@lendwisemtg.com
          </a>
        </div>

        <div className="flex gap-8 justify-center text-sm text-gray-500">
          <span>NMLS #62043</span>
          <span>DRE #01371572</span>
        </div>
      </AnimatedBackground>

      {/* Section 7: Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-center pb-32 md:pb-12">
        <Image
          src="/images/lendwise-text-only.png"
          alt="LendWise Mortgage"
          width={200}
          height={49}
          className="mx-auto mb-4"
        />
        <p className="text-gray-500 text-sm mb-4">
          21800 Oxnard Street #220
          <br />
          Woodland Hills, CA 91367
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Phone: <a href="tel:+18184771073" className="hover:text-gray-700">(818) 477-1073</a>
          <br />
          Email: <a href="mailto:support@lendwisemtg.com" className="hover:text-gray-700">support@lendwisemtg.com</a>
        </p>
        <p className="text-gray-500 text-sm mb-4">
          NMLS ID: #2702455 | DRE ID: #02282825
          <br />
          Equal Housing Lender
        </p>
        <div className="flex gap-6 justify-center text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Licensing</a>
          <a href="mailto:support@lendwisemtg.com" className="hover:text-gray-700">Contact</a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2026 LendWise Mortgage Corporation. All rights reserved.
        </p>
      </footer>

      {/* Section 8: Mobile Tab Bar */}
      <LumaBar />
    </main>
  );
}
