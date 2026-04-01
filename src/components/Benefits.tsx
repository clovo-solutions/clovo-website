"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    stat: "3x",
    label: "More Bookings",
    description: "Clients book online 24/7 — no phone tag, no missed leads.",
  },
  {
    stat: "10+",
    label: "Hours Saved Weekly",
    description: "Automations handle scheduling, reminders, and follow-ups.",
  },
  {
    stat: "40%",
    label: "Lower No-Show Rate",
    description: "Automated reminders keep your calendar full and reliable.",
  },
  {
    stat: "2x",
    label: "Faster Growth",
    description: "Systematic client acquisition outperforms random marketing.",
  },
];

function StatCounter({ stat }: { stat: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="font-display text-5xl sm:text-6xl font-bold gradient-text text-glow"
    >
      {stat}
    </motion.span>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 sm:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Results That Matter
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Built for{" "}
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            Our clients don&apos;t just get a website — they get a growth engine
            that delivers real, trackable results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center group hover:border-accent/10 transition-all duration-500">
                <div className="mb-3">
                  <StatCounter stat={benefit.stat} />
                </div>
                <h3 className="font-display text-base font-semibold text-white/80 mb-2">
                  {benefit.label}
                </h3>
                <p className="text-xs text-white/25 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
