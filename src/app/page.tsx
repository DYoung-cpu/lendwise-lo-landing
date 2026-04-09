"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import LumaBar from "@/components/ui/luma-bar";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { StarButton } from "@/components/ui/star-button";
import { loProfile } from "@/config/lo-profile";
import Image from "next/image";
import {
  Wallet,
  TrendingUp,
  MessageSquare,
  Bell,
  Star,
  Phone,
  Mail,
  Download,
  Smartphone,
  QrCode,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <StarButton
        lightColor="#06b6d4"
        backgroundColor="#0f172a"
        duration={7}
        className="h-10 px-5 text-sm"
        onClick={() => setOpen(!open)}
      >
        Contact Me
      </StarButton>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-0 bg-slate-900 border border-white/15 rounded-xl overflow-hidden shadow-xl min-w-[180px] z-50"
        >
          <a
            href={`tel:${loProfile.phoneRaw}`}
            className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            {loProfile.phone}
          </a>
          <a
            href={`mailto:${loProfile.email}`}
            className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            Email Me
          </a>
          <a
            href={`sms:${loProfile.smsRaw}`}
            className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            Text Me
          </a>
        </motion.div>
      )}
    </div>
  );
}

function VCardDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const vcardPath = `/${loProfile.firstName.toLowerCase()}-${loProfile.lastName.toLowerCase()}.vcf`;

  function downloadVCard() {
    const link = document.createElement("a");
    link.href = vcardPath;
    link.download = `${loProfile.fullName}.vcf`;
    link.click();
    setOpen(false);
  }

  function generateQRCode() {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(window.location.origin + vcardPath)}`;
    window.open(qrUrl, "_blank");
    setOpen(false);
  }

  const itemClass = "flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors w-full text-left";

  return (
    <div ref={ref} className="relative">
      <StarButton
        lightColor="#8b5cf6"
        backgroundColor="#0f172a"
        duration={7}
        className="h-10 px-5 text-sm"
        onClick={() => setOpen(!open)}
      >
        Download vCard
      </StarButton>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-0 bg-slate-900 border border-white/15 rounded-xl overflow-hidden shadow-xl min-w-[240px] z-50"
        >
          <button onClick={downloadVCard} className={itemClass}>
            <Download className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="font-medium">Save Contact</div>
              <div className="text-xs text-gray-400">Works with all devices & email apps</div>
            </div>
          </button>
          <button onClick={generateQRCode} className={itemClass}>
            <QrCode className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="font-medium">QR Code</div>
              <div className="text-xs text-gray-400">Scan to add contact</div>
            </div>
          </button>
        </motion.div>
      )}
    </div>
  );
}


function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loProfile.reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white p-6 rounded-2xl shadow-sm min-w-[300px] max-w-[320px] flex-shrink-0 snap-start"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
            <p className="font-semibold text-sm text-gray-900">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StyledSelect({
  name,
  placeholder,
  options,
  required,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-colors flex items-center justify-between"
      >
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 bottom-full mb-1 left-0 right-0 bg-emerald-950/95 backdrop-blur-xl border border-emerald-400/25 rounded-xl overflow-hidden shadow-[0_-4px_30px_rgba(16,185,129,0.15)] max-h-60 overflow-y-auto"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                value === opt.value
                  ? "bg-emerald-500/30 text-emerald-300 font-medium"
                  : "text-emerald-100 hover:bg-emerald-500/15 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function RateTrackerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [creditScore, setCreditScore] = useState("");
  const [occupancyType, setOccupancyType] = useState("");
  const [currentLoanProgram, setCurrentLoanProgram] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setSubmitting(true);

    try {
      await fetch("/api/rate-tracker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Silently handle — show success regardless
    }

    setSubmitting(false);
    setSubmitted(true);
    form.reset();
    setCreditScore("");
    setOccupancyType("");
    setCurrentLoanProgram("");
    setTimeout(() => setSubmitted(false), 5000);
  }

  const inputClass =
    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-colors";

  return (
    <AnimatedBackground variant="green" intensity="medium" id="rate-tracker" className="py-12 md:py-20 px-6">
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
              I Watch the Market So You Don&apos;t Have To
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With the help of Odin AI, I can monitor live rate adjustments around
              the clock and determine if an improvement will actually benefit you.
              Enter your current loan details and I&apos;ll reach out the moment
              refinancing makes real financial sense — no guesswork, no obsessive
              rate-checking.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  text: "24/7 AI-powered rate monitoring on your behalf",
                },
                {
                  icon: Bell,
                  text: "I\u2019ll contact you when refinancing makes sense",
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
                  I&apos;ll notify you personally when rates drop below your current rate.
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
                  <StyledSelect
                    name="creditScore"
                    placeholder="Estimated Credit Score"
                    required
                    value={creditScore}
                    onChange={setCreditScore}
                    options={[
                      { value: "740+", label: "Excellent (740+)" },
                      { value: "700-739", label: "Good (700-739)" },
                      { value: "660-699", label: "Fair (660-699)" },
                      { value: "below-660", label: "Below 660" },
                    ]}
                  />
                  <StyledSelect
                    name="occupancyType"
                    placeholder="Occupancy Type"
                    required
                    value={occupancyType}
                    onChange={setOccupancyType}
                    options={[
                      { value: "owner-occupied", label: "Owner Occupied" },
                      { value: "investment", label: "Investment Property" },
                      { value: "second-home", label: "Second Home" },
                    ]}
                  />
                  <StyledSelect
                    name="currentLoanProgram"
                    placeholder="Current Loan Program"
                    required
                    value={currentLoanProgram}
                    onChange={setCurrentLoanProgram}
                    options={[
                      { value: "conventional", label: "Conventional" },
                      { value: "fha", label: "FHA" },
                      { value: "va", label: "VA" },
                      { value: "jumbo", label: "Jumbo" },
                      { value: "usda", label: "USDA" },
                      { value: "other", label: "Other / Not Sure" },
                    ]}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors mt-2"
                >
                  {submitting ? "Submitting..." : "Start Tracking My Rate"}
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
          <div className="relative flex items-center justify-end px-6 h-24 md:h-44">
            {/* Logo — absolutely centered, immune to button width */}
            <motion.a
              href="#hero"
              className="absolute left-1/2 block overflow-hidden h-24 md:h-44"
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={loProfile.company.heroLogoPath}
                alt={loProfile.company.shortName}
                width={250}
                height={110}
                className="h-[160px] md:h-[264px] w-auto -mt-6 md:-mt-9 drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]"
              />
            </motion.a>
            <motion.div
              className="hidden md:flex gap-3 pr-4 self-end pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StarButton
                href={loProfile.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                lightColor="#d4af37"
                backgroundColor="#0f172a"
                duration={6}
                className="h-10 px-5 text-sm"
              >
                Apply Now
              </StarButton>
              <ContactDropdown />
              <VCardDropdown />
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
      <AnimatedBackground variant="green" intensity="medium" id="about" className="py-12 md:py-20 px-6">
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
            <div className="text-gray-300 max-w-2xl mx-auto leading-relaxed space-y-4">
              {loProfile.aboutBio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loProfile.aboutCards.map((card) => (
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
      <AnimatedBackground variant="royal" intensity="medium" id="programs" className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
            Loan Programs
          </h2>
          <p className="text-gray-300 text-center mb-12">
            The right loan for every borrower.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {loProfile.programs.map((program, i) => (
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
      <AnimatedBackground variant="dark" intensity="medium" id="odin" className="py-12 md:py-20 px-6 text-white">
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
              <source src="/videos/owl-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Features Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "/images/icons/odin/instant-preapproval.png", title: "Instant Pre-Approvals", desc: "Get your pre-approval letter in seconds, not days." },
              { img: "/images/icons/odin/smart-rate.png", title: "Smart Rate Tracking", desc: "AI monitors the market 24/7 so I can act on savings opportunities for you." },
              { img: "/images/icons/odin/realtime-tracking.png", title: "Real-Time Loan Tracking", desc: "Always know where your loan is in the process." },
              { img: "/images/icons/odin/document-intelligence.png", title: "Document Intelligence", desc: "Upload once, never be asked twice." },
              { img: "/images/icons/odin/talk-your-way.png", title: "Talk Your Way", desc: "Text, email, or chat \u2014 your preference, always remembered." },
              { img: "/images/icons/odin/proactive-updates.png", title: "Proactive Updates", desc: "Know what\u2019s needed before you ask." },
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
                <Image src={feature.img} alt={feature.title} width={40} height={40} className="w-10 h-10 object-contain mb-4 mx-auto" />
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
      <AnimatedBackground variant="light" intensity="subtle" id="reviews" className="py-12 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Real experiences from real homeowners.
          </p>
          <ReviewCarousel />
        </div>
      </AnimatedBackground>

      {/* Section 7: Contact & Apply CTA */}
      <AnimatedBackground variant="dark" intensity="strong" id="apply" className="py-12 md:py-20 px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Pre-Approved?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Start your application in minutes. I&apos;ll personally guide you through every step.
        </p>
        <div className="mb-8">
          <StarButton
            href={loProfile.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            lightColor="#d4af37"
            backgroundColor="#0f172a"
            duration={6}
            className="h-12 px-8 text-base"
          >
            Apply Now
          </StarButton>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm text-gray-400 mb-6">
          <a href={`tel:${loProfile.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            {loProfile.phone}
          </a>
          <a href={`mailto:${loProfile.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            {loProfile.email}
          </a>
        </div>

        <div className="flex gap-8 justify-center text-sm text-gray-500">
          <span>NMLS #{loProfile.nmls}</span>
          {loProfile.dre && <span>DRE #{loProfile.dre}</span>}
        </div>
      </AnimatedBackground>

      {/* Section 8: Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-center pb-32 md:pb-12">
        <Image
          src={loProfile.company.footerLogoPath}
          alt={loProfile.company.shortName}
          width={200}
          height={49}
          className="mx-auto mb-4"
        />
        <p className="text-gray-500 text-sm mb-4">
          {loProfile.company.address}
          <br />
          {loProfile.company.city}, {loProfile.company.state} {loProfile.company.zip}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Phone: <a href={`tel:${loProfile.company.phoneRaw}`} className="hover:text-gray-700">{loProfile.company.phone}</a>
          <br />
          Email: <a href={`mailto:${loProfile.company.email}`} className="hover:text-gray-700">{loProfile.company.email}</a>
        </p>
        <p className="text-gray-500 text-sm mb-4">
          NMLS ID: #{loProfile.company.nmls} | DRE ID: #{loProfile.company.dre}
          <br />
          Equal Housing Lender
        </p>
        <div className="flex gap-6 justify-center text-sm text-gray-500 mb-4">
          <a href="https://lendwisemtg.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Privacy</a>
          <a href="https://lendwisemtg.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Terms</a>
          <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2702455" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Licensing</a>
          <a href={`mailto:${loProfile.company.email}`} className="hover:text-gray-700">Contact</a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {loProfile.company.name}. All rights reserved.
        </p>
      </footer>

      {/* Section 9: Mobile Tab Bar */}
      <LumaBar />
    </main>
  );
}
