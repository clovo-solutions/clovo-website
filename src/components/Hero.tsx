"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackCTA } from "./GoogleAnalytics";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg animate-grid-fade" />

      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      {/* Floating orbs */}
      {[
        // LEFT SIDE
        {
          className: "top-[20%] left-[10%] w-2 h-2 bg-accent/40 blur-[1px]",
          anim: { y: [-20, 20, -20], x: [-10, 10, -10] },
          duration: 8,
        },
        {
          className: "top-[35%] left-[5%] w-1.5 h-1.5 bg-accent/50",
          anim: { y: [-15, 10, -15], x: [-5, 5, -5] },
          duration: 7,
        },
        {
          className: "bottom-[25%] left-[15%] w-3 h-3 bg-accent/30 blur-[2px]",
          anim: { y: [10, -15, 10], x: [8, -8, 8] },
          duration: 10,
        },
        {
          className: "top-[50%] left-[20%] w-1 h-1 bg-accent/60",
          anim: { y: [-8, 12, -8] },
          duration: 6,
        },

        // RIGHT SIDE
        {
          className: "bottom-[30%] right-[20%] w-3 h-3 bg-accent/30 blur-[2px]",
          anim: { y: [15, -15, 15], x: [10, -10, 10] },
          duration: 10,
        },
        {
          className: "top-[40%] right-[10%] w-1.5 h-1.5 bg-accent/50",
          anim: { y: [-10, 15, -10] },
          duration: 7,
        },
        {
          className: "top-[25%] right-[15%] w-2 h-2 bg-accent/40 blur-[1px]",
          anim: { y: [-12, 18, -12], x: [-6, 6, -6] },
          duration: 9,
        },

        // CENTER FLOATERS (subtle depth)
        {
          className: "top-[60%] left-[45%] w-1.5 h-1.5 bg-accent/40",
          anim: { y: [-10, 10, -10] },
          duration: 8,
        },
        {
          className: "top-[30%] left-[55%] w-1 h-1 bg-accent/50",
          anim: { y: [8, -8, 8] },
          duration: 6,
        },
      ].map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ ...orb.anim, opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: orb.duration + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${orb.className}`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 sm:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
          aria-label="For clinics, restaurants and service businesses in Cyprus"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
            aria-hidden="true"
          />
<span className="text-xs font-mono text-accent tracking-wider uppercase">
  For clinics, restaurants &amp; service businesses in Cyprus
</span>
        </motion.div>

        {/* Headline */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.35 }}
  className="font-display text-5xl sm:text-6xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tight mb-6"
>
  <span className="text-white">Web Design &</span>
  <br />
  <span className="text-white">Development in </span>
  <span className="gradient-text text-glow">Cyprus</span>
</motion.h1>

        {/* Subheadline */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
>
  We build websites that rank on Google, load fast, and turn visitors
  into paying clients. For service businesses, clinics, and SMEs
  across Cyprus.
</motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex flex-col items-center gap-2.5">
            <Link
              href="#contact"
              onClick={() => trackCTA("Hero CTA")}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Free Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <p className="text-xs text-white/40">
              30 minutes · no obligation · honest advice
            </p>
          </div>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white text-base transition-colors duration-300"
          >
            See Our Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 2v10m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Social Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-white/55"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-dark-900 bg-dark-400"
                  style={{
                    background: `linear-gradient(135deg, hsl(${
                      150 + i * 20
                    }, 60%, ${25 + i * 5}%) 0%, hsl(${150 + i * 20}, 40%, ${
                      15 + i * 5
                    }%) 100%)`,
                  }}
                />
              ))}
            </div>
            <span>15+ businesses launched</span>
          </div>
          <div
            className="hidden sm:block w-px h-4 bg-white/10"
            aria-hidden="true"
          />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-label="5 star rating" role="img">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#01D957"
                  aria-hidden="true"
                >
                  <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1-3-2.9 4.2-.7L7 1z" />
                </svg>
              ))}
            </div>
            <a href="https://share.google/IuXIVnXy9qrd0n1oe" target="_blank" className="text-white/70 hover:text-white">5.0 average rating</a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"
        aria-hidden="true"
      />
      {/* Scroll indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-0"
>
  <motion.div
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col items-center"
  >
    <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-accent/30 to-accent/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_8px_rgba(1,217,87,0.4)]" />
  </motion.div>
  <div className="w-0.5 h-6 bg-gradient-to-b from-accent/20 to-transparent" />
</motion.div>
    </section>
  );
}
