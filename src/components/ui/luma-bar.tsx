"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Grid3X3, Sparkles, TrendingUp, Star, FileText, Phone, Mail, MessageSquare } from "lucide-react";
import { loProfile } from "@/config/lo-profile";

interface NavItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  href?: string;
  action?: string;
}

const items: NavItem[] = [
  { id: 0, icon: <Home size={24} />, label: "Home", href: "#hero" },
  { id: 1, icon: <Phone size={24} />, label: "Contact", action: "contact" },
  { id: 2, icon: <Grid3X3 size={24} />, label: "Loans", href: "#programs" },
  { id: 3, icon: <Sparkles size={24} />, label: "AI", href: "#odin" },
  { id: 4, icon: <TrendingUp size={24} />, label: "Rates", href: "#rate-tracker" },
  { id: 5, icon: <Star size={24} />, label: "Reviews", href: "#reviews" },
  { id: 6, icon: <FileText size={24} />, label: "Apply", href: "#apply" },
];

const BUTTON_WIDTH = 52;
const GAP = 4;
const PADDING = 12;

const LumaBar = () => {
  const [active, setActive] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const sectionItems = items.filter(item => item.href);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sectionItems.forEach((item) => {
        if (!item.href) return;
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const index = items.findIndex(i => i.id === item.id);
            setActive(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close contact popup when tapping outside
  useEffect(() => {
    if (!contactOpen) return;
    const handleTap = (e: TouchEvent | MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-contact-popup]") && !target.closest("[data-contact-btn]")) {
        setContactOpen(false);
      }
    };
    document.addEventListener("touchstart", handleTap);
    document.addEventListener("mousedown", handleTap);
    return () => {
      document.removeEventListener("touchstart", handleTap);
      document.removeEventListener("mousedown", handleTap);
    };
  }, [contactOpen]);

  const handleClick = (index: number, item: NavItem) => {
    if (item.action === "contact") {
      setContactOpen(!contactOpen);
      return;
    }
    setContactOpen(false);
    setActive(index);
    if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const lampX = PADDING + (active * (BUTTON_WIDTH + GAP)) + (BUTTON_WIDTH / 2);

  return (
    <>
      {/* Contact popup */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            data-contact-popup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] md:hidden"
          >
            <div className="bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] min-w-[220px]">
              <a
                href={`tel:${loProfile.phoneRaw}`}
                className="flex items-center gap-3 px-5 py-4 text-white active:bg-white/10 transition-colors border-b border-white/10"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Call {loProfile.phone}</span>
              </a>
              <a
                href={`sms:${loProfile.smsRaw}`}
                className="flex items-center gap-3 px-5 py-4 text-white active:bg-white/10 transition-colors border-b border-white/10"
              >
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Text Me</span>
              </a>
              <a
                href={`mailto:${loProfile.email}`}
                className="flex items-center gap-3 px-5 py-4 text-white active:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Email Me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom nav bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-center pb-2 pt-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent">
        <div className="relative flex items-center justify-center gap-1 bg-slate-950 backdrop-blur-2xl rounded-full px-3 py-3 shadow-xl border border-slate-800 overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute pointer-events-none"
              style={{ left: lampX, top: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative flex items-center justify-center isolate z-0">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3.5rem" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    backgroundImage: `conic-gradient(from 70deg at center top, #06b6d4, transparent, transparent)`,
                  }}
                  className="absolute h-12 -translate-x-1/2 overflow-visible"
                >
                  <div className="absolute w-full left-0 bg-slate-950 h-6 bottom-0 z-20" style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
                  <div className="absolute w-5 h-full left-0 bg-slate-950 bottom-0 z-20" style={{ maskImage: 'linear-gradient(to right, white, transparent)' }} />
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3.5rem" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, #06b6d4)`,
                  }}
                  className="absolute h-12 translate-x-1/2 overflow-visible"
                >
                  <div className="absolute w-5 h-full right-0 bg-slate-950 bottom-0 z-20" style={{ maskImage: 'linear-gradient(to left, white, transparent)' }} />
                  <div className="absolute w-full right-0 bg-slate-950 h-6 bottom-0 z-20" style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "5rem" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute z-50 h-6 -translate-y-1 rounded-full opacity-70"
                  style={{ backgroundColor: '#06b6d4', filter: 'blur(40px)' }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute z-30 h-6 -translate-y-1 rounded-full"
                  style={{ backgroundColor: '#22d3ee', filter: 'blur(24px)' }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3.5rem" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute z-50 h-0.5 -translate-y-2"
                  style={{ backgroundColor: '#22d3ee' }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {items.map((item, index) => {
            const isActive = item.action === "contact" ? contactOpen : index === active;
            return (
              <motion.div key={item.id} className="relative flex flex-col items-center group">
                <button
                  data-contact-btn={item.action === "contact" ? "" : undefined}
                  onClick={() => handleClick(index, item)}
                  className="flex items-center justify-center w-[52px] h-[38px] text-slate-400 hover:text-cyan-400 relative z-10"
                >
                  <span className={isActive ? "text-cyan-400" : ""}>{item.icon}</span>
                </button>

                <span className={`text-[11px] font-medium transition-colors ${
                  isActive ? "text-cyan-400" : "text-slate-500"
                }`}>
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LumaBar;
