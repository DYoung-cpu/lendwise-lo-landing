'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimatedBackgroundProps {
  variant?: 'dark' | 'light' | 'green' | 'royal' | 'gold';
  intensity?: 'subtle' | 'medium' | 'strong';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedBackground({
  variant = 'dark',
  intensity = 'medium',
  children,
  className = '',
  id,
}: AnimatedBackgroundProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const bgLayer = section.querySelector('[data-parallax-bg]');
    const contentLayer = section.querySelector('[data-parallax-content]');

    if (bgLayer && contentLayer) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      tl.fromTo(
        bgLayer,
        { yPercent: -30 },
        { yPercent: 30, ease: 'none' },
        0
      );

      tl.fromTo(
        contentLayer,
        { yPercent: -8 },
        { yPercent: 8, ease: 'none' },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  const opacityMultiplier = intensity === 'subtle' ? 0.5 : intensity === 'strong' ? 1.5 : 1;

  if (variant === 'dark') {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`relative overflow-hidden bg-slate-950 ${className}`}
      >
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />

        <div data-parallax-bg className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(6,182,212,${0.25 * opacityMultiplier}) 0%, rgba(6,182,212,${0.1 * opacityMultiplier}) 30%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(20,184,166,${0.15 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(212,175,55,${0.12 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(6,182,212,${0.12 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />

        <div data-parallax-content className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  if (variant === 'green') {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`relative overflow-hidden ${className}`}
        style={{ backgroundColor: '#041f1a' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #041f1a, transparent)' }}
        />

        <div data-parallax-bg className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(16,185,129,${0.3 * opacityMultiplier}) 0%, rgba(5,150,105,${0.15 * opacityMultiplier}) 30%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(34,197,94,${0.18 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(212,175,55,${0.15 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(16,185,129,${0.15 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(6,78,59,${0.25 * opacityMultiplier}) 0%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #041f1a, transparent)' }}
        />

        <div data-parallax-content className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  if (variant === 'gold') {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`relative overflow-hidden ${className}`}
        style={{ backgroundColor: '#1a1000' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #1a1000, transparent)' }}
        />

        <div data-parallax-bg className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(212,175,55,${0.3 * opacityMultiplier}) 0%, rgba(180,140,40,${0.15 * opacityMultiplier}) 30%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(245,158,11,${0.18 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(161,98,7,${0.2 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(212,175,55,${0.15 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(120,80,10,${0.25 * opacityMultiplier}) 0%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #1a1000, transparent)' }}
        />

        <div data-parallax-content className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  if (variant === 'royal') {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`relative overflow-hidden ${className}`}
        style={{ backgroundColor: '#0a1a4a' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0a1a4a, transparent)' }}
        />

        <div data-parallax-bg className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(30,64,175,${0.4 * opacityMultiplier}) 0%, rgba(37,99,235,${0.2 * opacityMultiplier}) 30%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(59,130,246,${0.2 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(212,175,55,${0.12 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(30,64,175,${0.2 * opacityMultiplier}) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(ellipse, rgba(17,24,115,${0.3 * opacityMultiplier}) 0%, transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0a1a4a, transparent)' }}
        />

        <div data-parallax-content className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  const isWhiteBg = className.includes('bg-white');
  const bgColor = isWhiteBg ? 'white' : 'rgb(249,250,251)';

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-24 z-20 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${bgColor}, transparent)` }}
      />

      <div data-parallax-bg className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(6,182,212,${0.15 * opacityMultiplier}) 0%, rgba(6,182,212,${0.06 * opacityMultiplier}) 30%, transparent 60%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(212,175,55,${0.1 * opacityMultiplier}) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(ellipse, rgba(20,184,166,${0.08 * opacityMultiplier}) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${bgColor}, transparent)` }}
      />

      <div data-parallax-content className="relative z-10">
        {children}
      </div>
    </section>
  );
}
