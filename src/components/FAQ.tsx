"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ContactCta from "./ContactCta";

const WHATSAPP_URL = "https://wa.me/35797457001";

const faqs = [
  {
    q: "How much does a website actually cost?",
    a: "Most of our projects start at €2,000 for a complete website, and €5,000 if you want online bookings and automation included. You'll know the exact price after the free call — before you commit to anything. No hidden fees, no surprise invoices.",
  },
  {
    q: "Couldn't I just use Wix or have my nephew build it?",
    a: "You could — and for some businesses that's genuinely enough. The difference is what happens after launch: showing up on Google, loading fast on phones, and turning visitors into bookings. That's the part DIY sites usually miss. If we think a simple DIY site is all you need, we'll tell you that on the call.",
  },
  {
    q: "I'm not technical. Will I be able to manage it?",
    a: "Yes — that's the point. Bookings, reminders, and updates run on their own. If you can use WhatsApp, you can use what we build. And we stay available after launch; you're never left alone with it.",
  },
  {
    q: "I already have a website. Do I need a new one?",
    a: "Maybe not. Sometimes a few fixes are enough. Send us your current site and we'll tell you honestly on the call whether it needs replacing or just improving.",
  },
  {
    q: "How long does it take?",
    a: "A complete website: 1–2 weeks. With bookings and automation: up to 4 weeks. You'll see the design before anything goes live.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything You&apos;re <span className="gradient-text">Wondering</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:border-accent/10 transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white/85">
                    {faq.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-shrink-0 text-accent/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-6 text-sm text-white/40 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/35 mb-6">
            Have a different question? Ask us — no obligation.
          </p>
          <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]">
            Book a Free Call
          </ContactCta>
          <div className="mt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 underline underline-offset-2 hover:text-white/70 transition-colors"
            >
              or WhatsApp us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
