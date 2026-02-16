'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarButton } from './star-button';

export function ParallaxHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6"
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-28 md:pt-32">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#C9A227] shadow-[0_0_60px_rgba(201,162,39,0.4)]">
            <Image
              src="/images/team/david-young.jpg"
              alt="David Young"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          David Young
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg text-gold font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          CMO / Partner
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-base text-cyan-400 uppercase tracking-[3px] font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Mortgage. My Mission.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-slate-400 max-w-[500px] mx-auto leading-[1.7] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          I believe getting a mortgage should be{' '}
          <span className="text-cyan-400">transparent</span>,{' '}
          <span className="text-emerald-400">fast</span>, and{' '}
          <span className="text-amber-400">personal</span>.
          {' '}Let me put my experience and technology to work for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StarButton
            href="#apply"
            lightColor="#d4af37"
            backgroundColor="#0f172a"
            duration={6}
          >
            Apply Now
          </StarButton>
          <StarButton
            href="#about"
            lightColor="#06b6d4"
            backgroundColor="#0f172a"
            duration={7}
          >
            Contact Me
          </StarButton>
        </motion.div>

        {/* LendWise branding */}
        <motion.p
          className="mt-10 text-sm text-slate-500 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Powered by <span className="text-gold">LendWise</span> Mortgage
        </motion.p>
      </div>
    </section>
  );
}
