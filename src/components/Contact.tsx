"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";
import locale from "@/locales/en.json";

const t = locale.contact;

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
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
                {t.sectionTag}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {t.heading}
                <br />
                <span className="gradient-text text-glow">
                  {t.headingAccent}
                </span>
              </h2>
              <p className="text-white/35 text-base leading-relaxed mb-8 max-w-md">
                {t.description}
              </p>

              {/* Quick benefits */}
              <div className="space-y-3">
                {t.benefits.map((item, i) => (
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

            {/* Right: Contact form */}
            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
