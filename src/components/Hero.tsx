"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg animate-grid-fade" />

      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] w-2 h-2 bg-accent/40 rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-accent/30 rounded-full blur-[2px]"
      />
      <motion.div
        animate={{ y: [-10, 15, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-accent/50 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 sm:pt-0">
        {/* Badge - CSS animation, no initial hidden state */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
          style={{
            animation: "heroFadeUp 0.6s ease-out 0.2s both",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-accent/80 tracking-wider uppercase">
            Automating Business Growth
          </span>
        </div>

        {/* Headline - NO animation, fully visible immediately for LCP */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-white">We Build Systems</span>
          <br />
          <span className="text-white">That Bring You </span>
          <span className="gradient-text text-glow">Clients</span>
        </h1>

        {/* Subheadline - CSS animation */}
        <p
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{
            animation: "heroFadeUp 0.7s ease-out 0.3s both",
          }}
        >
          High-converting websites and smart systems that help you bring in
          clients, so you can focus on your work while everything else runs
          smoothly.
        </p>

        {/* CTAs - CSS animation */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            animation: "heroFadeUp 0.7s ease-out 0.45s both",
          }}
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Free Strategy Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
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
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 text-white/50 hover:text-white text-base transition-colors duration-300"
          >
            See What We Do
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Social Proof strip - CSS animation */}
        <div
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-white/25"
          style={{
            animation: "heroFadeIn 1s ease-out 0.8s both",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
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
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#01D957"
                  className="opacity-60"
                >
                  <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1-3-2.9 4.2-.7L7 1z" />
                </svg>
              ))}
            </div>
            <span>4.9 average rating</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
