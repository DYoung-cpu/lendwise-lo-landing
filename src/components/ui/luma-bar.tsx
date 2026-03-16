"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Grid3X3, Sparkles, TrendingUp, Star, FileText } from "lucide-react";

interface NavItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const items: NavItem[] = [
  { id: 0, icon: <Home size={20} />, label: "Home", href: "#hero" },
  { id: 1, icon: <User size={20} />, label: "About", href: "#about" },
  { id: 2, icon: <Grid3X3 size={20} />, label: "Loans", href: "#programs" },
  { id: 3, icon: <Sparkles size={20} />, label: "AI", href: "#odin" },
  { id: 4, icon: <TrendingUp size={20} />, label: "Rates", href: "#rate-tracker" },
  { id: 5, icon: <Star size={20} />, label: "Reviews", href: "#reviews" },
  { id: 6, icon: <FileText size={20} />, label: "Apply", href: "#apply" },
];

const BUTTON_WIDTH = 44;
const GAP = 4;
const PADDING = 10;

const LumaBar = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActive(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index: number, href: string) => {
    setActive(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lampX = PADDING + (active * (BUTTON_WIDTH + GAP)) + (BUTTON_WIDTH / 2);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-center pb-2 pt-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent">
      <div className="relative flex items-center justify-center gap-1 bg-slate-950 backdrop-blur-2xl rounded-full px-2.5 py-2 shadow-xl border border-slate-800 overflow-hidden">

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
          const isActive = index === active;
          return (
            <motion.div key={item.id} className="relative flex flex-col items-center group">
              <motion.button
                onClick={() => handleClick(index, item.href)}
                whileHover={{ scale: 1.1 }}
                animate={{ scale: isActive ? 1.1 : 1 }}
                className="flex items-center justify-center w-[44px] h-[32px] text-slate-400 hover:text-cyan-400 relative z-10"
              >
                <span className={isActive ? "text-cyan-400" : ""}>{item.icon}</span>
              </motion.button>

              <span className={`text-[10px] transition-colors ${
                isActive ? "text-cyan-400" : "text-slate-500"
              }`}>
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LumaBar;
