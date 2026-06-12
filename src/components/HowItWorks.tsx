"use client";

import AnimatedSection from "./AnimatedSection";
import ContactCta from "./ContactCta";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and pain points. In 30 minutes we'll map out exactly what you need to start converting more clients.",
    detail: "Free — no strings attached",
  },
  {
    number: "02",
    title: "Build & Launch",
    description:
      "We design and build your website, your booking system, and your automatic reminders — all matched to your brand and ready to bring in clients.",
    detail: "Delivered in 1–4 weeks",
  },
  {
    number: "03",
    title: "Watch the Bookings Come In",
    description:
      "Once everything is live, clients book on their own and new enquiries come in week after week. You focus on your work — the website does the rest.",
    detail: "Ongoing support included",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Three Steps to{" "}
            <span className="gradient-text">Effortless Growth</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            No complexity and no jargon. Just a clear path from where you are
            now to where you want to be.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative group">
                  {/* Card */}
                  <div className="relative p-8 sm:p-10 rounded-2xl border border-white/[0.04] bg-dark-800/50 hover:border-accent/15 transition-all duration-500">
                    {/* Step number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                        {step.number}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.04]" />
                    </div>

                    <h3 className="font-display text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/30 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Detail pill */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/[0.06] text-accent/60 text-xs font-mono">
                      <span className="w-1 h-1 rounded-full bg-accent/40" />
                      {step.detail}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <AnimatedSection className="text-center mt-14">
          <p className="text-sm text-white/35 mb-5">
            Step 1 is free and takes 30 minutes.
          </p>
          <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]">
            Book Your Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ContactCta>
        </AnimatedSection>
      </div>
    </section>
  );
}
