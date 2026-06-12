"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";
import locale from "@/locales/en.json";

const t = locale.contact;

const WHATSAPP_URL = "https://wa.me/35797457001";

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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 p-4 sm:p-12 lg:p-16">
            {/* Left: CTA copy */}
            <AnimatedSection
              direction="left"
              className="h-full flex flex-col justify-between"
            >
              <div>
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
              </div>

              {/* What happens after you book */}
              <div className="mt-10">
                <p className="text-xs font-mono text-white/30 tracking-[0.15em] uppercase mb-4">
                  What happens after you book
                </p>
                <ol className="space-y-3">
                  {[
                    {
                      step: "1",
                      title: "We talk for 30 minutes",
                      desc: "You tell us about your business. We ask questions. No tech talk.",
                    },
                    {
                      step: "2",
                      title: "You get a plan within 48 hours",
                      desc: "What we'd build, what it costs, and what it gets you — in writing.",
                    },
                    {
                      step: "3",
                      title: "You decide. No pressure.",
                      desc: "Take it, shop it around, or do nothing. The plan is yours either way.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center font-medium">
                        {item.step}
                      </span>
                      <p className="leading-relaxed">
                        <span className="font-medium text-white/70">
                          {item.title}
                        </span>
                        <span className="text-white/40"> — {item.desc}</span>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct contact channels */}
              <div className="mt-10">
                <p className="text-xs font-mono text-white/30 tracking-[0.15em] uppercase mb-4">
                  Prefer to reach us directly?
                </p>
                <div className="space-y-3 max-w-md">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 p-4 rounded-xl bg-accent/[0.08] border border-accent/20 hover:bg-accent/[0.14] hover:border-accent/35 hover:shadow-[0_0_25px_rgba(1,217,87,0.12)] transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#01D957"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        WhatsApp us
                      </span>
                      <span className="block text-xs text-white/40">
                        Fastest way to reach us
                      </span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="flex-shrink-0 text-accent/60 transition-transform duration-300 group-hover:translate-x-1"
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

                  <a
                    href="tel:+35797457001"
                    className="group flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-white/60"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-white/85">
                        +357 97 457 001
                      </span>
                      <span className="block text-xs text-white/40">
                        Call us directly
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:clovosolutions@gmail.com"
                    className="group flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-white/60"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 6L2 7" />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-white/85 truncate">
                        clovosolutions@gmail.com
                      </span>
                      <span className="block text-xs text-white/40">
                        We reply within 24 hours
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Contact form */}
            <AnimatedSection direction="right" delay={0.2} className="h-full">
              <ContactForm className="h-full" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
