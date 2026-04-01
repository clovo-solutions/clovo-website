"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/[0.04] bg-white/[0.01] overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] -translate-y-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 p-8 sm:p-12 lg:p-16">
            {/* Left: CTA copy */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-6">
                Get Started
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Ready to Put Your
                <br />
                Growth on{" "}
                <span className="gradient-text text-glow">Autopilot?</span>
              </h2>
              <p className="text-white/35 text-base leading-relaxed mb-8 max-w-md">
                Book a free 30-minute strategy call. We&apos;ll map out exactly how
                to automate your client acquisition and scale your business — no
                obligations, no pressure.
              </p>

              {/* Quick benefits */}
              <div className="space-y-3">
                {[
                  "Free strategy session — no commitment",
                  "Custom growth plan for your business",
                  "See projected ROI before you invest",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke="#01D957"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-white/40">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Calendly embed placeholder */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl border border-white/[0.06] bg-dark-800/60 backdrop-blur-sm overflow-hidden h-full min-h-[480px] flex flex-col">
                {/* Calendly placeholder header */}
                <div className="p-6 border-b border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#01D957"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <rect x="2" y="3" width="12" height="12" rx="1.5" />
                        <path d="M11 1.5v3" />
                        <path d="M5 1.5v3" />
                        <path d="M2 7h12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70">
                        Schedule a Call
                      </p>
                      <p className="text-xs text-white/25">
                        30 min — Free Strategy Session
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendly embed area */}
                <div className="flex-1 flex items-center justify-center p-8">
                  {/*
                    CALENDLY INTEGRATION:
                    Replace the placeholder below with your Calendly embed.

                    Option 1 — Inline embed:
                    <iframe
                      src="https://calendly.com/YOUR_LINK"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                    />

                    Option 2 — Calendly React widget:
                    npm install react-calendly
                    import { InlineWidget } from "react-calendly";
                    <InlineWidget url="https://calendly.com/YOUR_LINK" />
                  */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/[0.06] border border-accent/10 flex items-center justify-center mx-auto mb-5">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#01D957"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4" />
                        <path d="M8 2v4" />
                        <path d="M3 10h18" />
                        <path d="M9 16l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-white/30 text-sm mb-1">
                      Pick a time that works for you
                    </p>
                    <p className="text-white/15 text-xs mb-6">
                      Calendly widget loads here
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark-900 text-sm font-semibold rounded-full hover:shadow-[0_0_30px_rgba(1,217,87,0.3)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      Book Your Free Call
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1 7h12m0 0L8 2m5 5L8 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
