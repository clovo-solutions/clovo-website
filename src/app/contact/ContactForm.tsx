"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Hook up to your form handler (Formspree, Netlify Forms, etc.)
    alert("Form submitted! Hook this up to your preferred form backend.");
  };

  return (
    <section className="relative pt-36 pb-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Let&apos;s <span className="gradient-text">Talk Growth</span>
          </h1>
          <p className="text-white/35 text-lg max-w-lg mx-auto">
            Tell us about your business and goals. We&apos;ll get back to you
            within 24 hours with a tailored plan.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative p-8 sm:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formState.business}
                  onChange={(e) =>
                    setFormState({ ...formState, business: e.target.value })
                  }
                  placeholder="Your Business"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2">
                  How can we help?
                </label>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell us about your goals, current challenges, or what you're looking to build..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.3)]"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>

            <p className="text-center text-xs text-white/15 mt-5">
              Or book directly via{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/40 hover:text-accent/60 underline transition-colors"
              >
                Calendly
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
