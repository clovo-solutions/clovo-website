"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Foundation",
    tag: "Essential",
    bestFor:
      "New businesses, or anyone whose current website looks dated and brings in nothing.",
    description:
      "A high-performance website that establishes credibility and turns visitors into inquiries.",
    price: "Starting from €2,000",
    benefits: [
      "Custom-designed website that reflects your brand and builds trust instantly",
      "Mobile-first, lightning-fast pages that rank higher on Google",
      "Strong SEO foundations so your clients find you first, not your competitors.",
      "Clear calls-to-action engineered to generate leads from day one",
      "Professional launch within 1–2 weeks, ready to drive results",
    ],
    outcome: "Go from invisible online to a credible, client-ready presence.",
    cta: "Book a Call",
    featured: false,
    premium: false,
  },
  {
    name: "Growth",
    tag: "Most Popular",
    bestFor: "Clinics, salons, and any business that books appointments.",
    description:
      "Everything in Foundation — plus the systems that consistently bring new clients to your door.",
    price: "Starting from €5,000",
    benefits: [
      "Everything in Foundation, taken further with conversion optimization",
      "Integrated booking system so clients schedule themselves 24/7",
      "Appointment scheduling that runs on its own, with built-in confirmations and reminders to reduce no-shows.",
      "Lead capture connected to a CRM, so you can track, manage, and respond to every opportunity in one place.",
      "Analytics dashboard to see exactly where your growth is coming from",
      "Calendar sync across Google, Outlook, and your existing tools",
    ],
    outcome:
      "Stop chasing clients — your website books them for you, even after hours.",
    cta: "Book a Call",
    featured: true,
    premium: false,
  },
  {
    name: "Scale",
    tag: "Full Suite",
    bestFor: "Established businesses ready to grow across Cyprus.",
    description:
      "A complete package for businesses ready to systemize and multiply.",
    price: "Custom",
    benefits: [
      "Full Growth package plus advanced automation workflows",
      // "Multi-step client acquisition pipelines with CRM integration",
      "Automated follow-up sequences across email",
      "Performance optimization with A/B testing and conversion tracking",
      "Priority support with a dedicated growth strategist",
      "Monthly reporting with actionable insights to scale faster",
    ],
    outcome:
      "Your website becomes your best salesperson, working around the clock.",
    cta: "Book a Call",
    featured: false,
    premium: true,
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative group"
    >
      {/* Glow ring */}
      <div
        className={`absolute -inset-px rounded-[25px] transition-opacity duration-500 ${
          plan.featured
            ? "bg-gradient-to-b from-accent/30 via-accent/5 to-transparent opacity-60 group-hover:opacity-100"
            : plan.premium
            ? "bg-gradient-to-b from-white/20 via-white/[0.04] to-transparent opacity-30 group-hover:opacity-100"
            : "bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        className={`relative h-full flex flex-col rounded-3xl border p-8 sm:p-10 transition-all duration-500 ${
          plan.featured ? "lg:py-14 " : ""
        }${
          plan.featured
            ? "border-accent/20 bg-accent/[0.03]"
            : plan.premium
            ? "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.12]"
            : "border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]"
        }`}
      >
        {/* Tag */}
        <div className="flex items-center justify-between mb-6">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase ${
              plan.featured
                ? "bg-accent/[0.1] text-accent border border-accent/20"
                : plan.premium
                ? "bg-white/[0.06] text-white/60 border border-white/[0.08]"
                : "bg-white/[0.03] text-white/40 border border-white/[0.04]"
            }`}
          >
            {plan.featured && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            )}
            {plan.tag}
          </span>
        </div>

        {/* Plan name */}
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          {plan.name}
        </h3>

        {/* Best for */}
        <p className="text-xs text-white/45 leading-relaxed mb-3">
          <span className="font-semibold text-white/60">Best for:</span>{" "}
          {plan.bestFor}
        </p>

        {/* Description */}
        <p className="text-sm text-white/30 leading-relaxed mb-6">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <span
            className={`font-display text-lg font-semibold ${
              plan.featured
                ? "text-accent"
                : plan.premium
                ? "text-white/80"
                : "text-white/60"
            }`}
          >
            {plan.price}
          </span>
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-8 ${
            plan.featured
              ? "bg-gradient-to-r from-transparent via-accent/15 to-transparent"
              : plan.premium
              ? "bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
              : "bg-white/[0.04]"
          }`}
        />

        {/* Benefits */}
        <ul className="space-y-4 mb-10 flex-1">
          {plan.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  plan.featured
                    ? "bg-accent/[0.12]"
                    : plan.premium
                    ? "bg-white/[0.06]"
                    : "bg-white/[0.04]"
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5.5l2 2L8 3"
                    stroke={
                      plan.featured
                        ? "#01D957"
                        : plan.premium
                        ? "#ffffff80"
                        : "#ffffff50"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-white/40 leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* Outcome */}
        <div
          className={`rounded-xl p-4 mb-8 ${
            plan.featured
              ? "bg-accent/[0.04] border border-accent/[0.08]"
              : plan.premium
              ? "bg-white/[0.03] border border-white/[0.05]"
              : "bg-white/[0.02] border border-white/[0.03]"
          }`}
        >
          <p
            className={`text-xs leading-relaxed ${
              plan.featured
                ? "text-accent/70"
                : plan.premium
                ? "text-white/40"
                : "text-white/30"
            }`}
          >
            <span
              className={`font-semibold ${
                plan.featured
                  ? "text-accent/90"
                  : plan.premium
                  ? "text-white/60"
                  : "text-white/50"
              }`}
            >
              Outcome:
            </span>{" "}
            {plan.outcome}
          </p>
        </div>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#contact"
            className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              plan.featured
                ? "bg-accent text-dark-900 hover:shadow-[0_0_35px_rgba(1,217,87,0.3)]"
                : plan.premium
                ? "bg-white/[0.08] text-white/70 border border-white/[0.1] hover:bg-white/[0.12] hover:text-white hover:border-white/[0.15] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                : "bg-white/[0.05] text-white/60 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.1]"
            }`}
          >
            {plan.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12m0 0L8 2m5 5L8 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Invest in <span className="gradient-text">Predictable Growth</span>
          </h2>
          <p className="text-white/35 text-lg max-w-2xl mx-auto leading-relaxed">
            Every package is tailored to your business. Choose the level that
            fits where you are today and where you want to go next.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] max-w-2xl mx-auto"
        >
          <p className="font-display text-lg font-semibold text-white mb-2">
            Not sure which package fits?
          </p>
          <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-md mx-auto">
            That&apos;s exactly what the free call is for — we&apos;ll tell you
            honestly, even if the answer is &quot;the cheapest one.&quot;
          </p>
          <Link
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2.5 px-6 sm:px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Free 30-Minute Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="text-xs text-white/25 mt-4">
            No contract. No pressure. No hidden fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
