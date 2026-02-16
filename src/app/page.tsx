"use client";

import { motion } from "framer-motion";
import LumaBar from "@/components/ui/luma-bar";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { AnimatedBackground } from "@/components/ui/animated-background";
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

export default function DavidYoungPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-center px-6 py-3">
            <a href="#hero">
              <Image
                src="/images/lendwise-hero-logo.png"
                alt="LendWise"
                width={200}
                height={88}
                className="h-16 w-auto drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]"
              />
            </a>
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
            <p className="text-gold text-sm font-medium mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why Work With Me
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              As CMO and Partner at LendWise Mortgage, I combine decades of industry
              experience with cutting-edge technology to deliver a mortgage experience
              that&apos;s faster, smarter, and built around you. When you work with me,
              you&apos;re working directly with an owner who&apos;s invested in your success.
            </p>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-[calc(50%-144px)]">
            {[
              {
                icon: UserCheck,
                title: "Direct Access",
                desc: "Work directly with a partner, not a call center. I'm personally invested in getting your loan closed right.",
              },
              {
                icon: Cpu,
                title: "Technology Forward",
                desc: "AI-powered lending with Odin, our intelligent mortgage assistant. Faster approvals, smarter processing.",
              },
              {
                icon: Globe,
                title: "Nationwide Reach",
                desc: "Licensed and lending across multiple states. Bringing modern mortgage solutions wherever you are.",
              },
              {
                icon: Heart,
                title: "Personal Touch",
                desc: "I know my clients by name, not number. Your biggest investment deserves care and precision.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="flex-shrink-0 w-72 bg-white/5 backdrop-blur p-6 rounded-2xl text-center border border-white/10 snap-center"
                whileHover={{ scale: 1.02 }}
              >
                <card.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 3: Loan Programs */}
      <AnimatedBackground variant="light" intensity="subtle" id="programs" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-medium mb-2 text-center">
            Products
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Loan Programs
          </h2>
          <p className="text-gray-600 text-center mb-12">
            The right loan for every borrower.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Home, title: "Conventional", desc: "Traditional financing" },
              { icon: Castle, title: "Jumbo", desc: "Beyond conforming limits" },
              { icon: Landmark, title: "FHA", desc: "Low down payment" },
              { icon: Medal, title: "VA", desc: "Veterans & service members" },
              { icon: BarChart3, title: "DSCR", desc: "Investment properties" },
              { icon: ClipboardList, title: "Bank Statement", desc: "Self-employed" },
              { icon: Hammer, title: "Fix & Flip", desc: "Short-term investor" },
              { icon: Key, title: "First Time Buyer", desc: "New homeowners" },
              { icon: Wallet, title: "HELOCs", desc: "Home equity access" },
            ].map((program, i) => (
              <motion.div
                key={program.title}
                className="bg-gray-50 p-6 rounded-2xl text-center"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <program.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{program.title}</h3>
                <p className="text-sm text-gray-500">{program.desc}</p>
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
            Odin
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
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-4">
            {[
              { icon: Zap, title: "Instant Pre-Approvals", desc: "Get your pre-approval letter in seconds, not days." },
              { icon: TrendingUp, title: "Smart Rate Tracking", desc: "Odin monitors the market 24/7 for savings opportunities." },
              { icon: MapPinned, title: "Real-Time Tracking", desc: "Always know where your loan is in the process." },
              { icon: FileText, title: "Document Intelligence", desc: "Upload once, never be asked twice." },
              { icon: MessageSquare, title: "Talk Your Way", desc: "Text, email, or chat - Odin remembers." },
              { icon: Bell, title: "Proactive Updates", desc: "Know what's needed before you ask." },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                className="flex-shrink-0 w-72 bg-white/5 backdrop-blur p-6 rounded-2xl snap-center"
                whileHover={{ scale: 1.02 }}
              >
                <feature.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Section 5: Reviews / Social Proof */}
      <AnimatedBackground variant="light" intensity="subtle" id="reviews" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-medium mb-2 text-center">
            Testimonials
          </p>
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
        <p className="text-gold text-sm font-medium mb-2">Get Started</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Pre-Approved?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Start your application in minutes. I&apos;ll personally guide you through every step.
        </p>
        <a
          href="https://lendwisemtg.mymortgage-online.com/borrower-app/registration/?workFlowId=223023&action=login&dest=/loan-app/&siteId=1956469515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors mb-8"
        >
          Apply Now
        </a>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm text-gray-400 mb-6">
          <a href="tel:+18189177740" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            (818) 917-7740
          </a>
          <a href="mailto:david@lendwisemtg.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            david@lendwisemtg.com
          </a>
        </div>

        <div className="flex gap-8 justify-center text-sm text-gray-500">
          <span>NMLS #2436537</span>
          <span>Company NMLS #2581507</span>
        </div>
      </AnimatedBackground>

      {/* Section 7: Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-center pb-32 md:pb-12">
        <p className="text-2xl font-semibold mb-2">
          <span className="text-gold">L</span>end
          <span className="text-gold">W</span>ise
        </p>
        <p className="text-sm text-gray-600 mb-4">David Young | CMO &amp; Partner</p>
        <p className="text-gray-500 text-sm mb-4">
          LendWise Mortgage Corporation | NMLS #2581507
          <br />
          21800 Oxnard Street, Woodland Hills, CA 91367
          <br />
          Equal Housing Lender
        </p>
        <div className="flex gap-6 justify-center text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Licensing</a>
          <a href="mailto:david@lendwisemtg.com" className="hover:text-gray-700">Contact</a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2025 LendWise Mortgage Corporation. All rights reserved.
        </p>
      </footer>

      {/* Section 8: Mobile Tab Bar */}
      <LumaBar />
    </main>
  );
}
