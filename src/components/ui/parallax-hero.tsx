'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { loProfile } from '@/config/lo-profile';

export function ParallaxHero() {
  return (
    <section
      id="hero"
      className="relative bg-slate-950 flex flex-col items-center justify-start px-6 pb-12 md:pb-20"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0.1) 30%, transparent 60%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 50%)',
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 50%)',
          }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 50%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content - horizontal layout */}
      <div className="relative z-10 max-w-6xl w-full mx-auto pt-32 md:pt-56 lg:pt-64">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-0" style={{ columnGap: '150px' }}>
          {/* Left side - Text & Info */}
          <div className="max-w-xs md:max-w-[28rem] text-center md:text-left">
            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {loProfile.fullName}
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-lg text-gold font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {loProfile.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base text-cyan-400 uppercase tracking-[3px] font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {loProfile.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-slate-400 max-w-[500px] leading-[1.7] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Over <span className="text-cyan-400">{loProfile.heroExperience}</span> in the mortgage
              business and {loProfile.heroAchievement} — {loProfile.heroDescription}
            </motion.p>

          </div>

          {/* Right side - Photo in horizontal rectangle */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-[#C9A227] shadow-[0_0_60px_rgba(201,162,39,0.4)]">
              <Image
                src={loProfile.photoPath}
                alt={loProfile.fullName}
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
