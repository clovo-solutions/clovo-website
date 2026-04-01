"use client";

import AnimatedSection from "./AnimatedSection";

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
      "Our team designs and develops your digital ecosystem — website, booking flows, automations — tailored to your brand and ready to convert.",
    detail: "Delivered in 2–4 weeks",
  },
  {
    number: "03",
    title: "Grow on Autopilot",
    description:
      "Your systems are live. Clients book themselves, calendars sync, and leads flow in automatically. You focus on delivering — we handle the rest.",
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
            No complexity, no jargon — just a clear path from where you are now
            to where you want to be.
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
      </div>
    </section>
  );
}
