"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "websites",
    tag: "Design & Development",
    title: "High-Converting Websites",
    description:
      "We don't just build pretty pages — we engineer conversion machines. Every element is designed to guide visitors toward taking action.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first responsive layouts",
      "Lightning-fast load times (sub-2s)",
      "SEO-optimized from day one",
      "Built-in analytics tracking",
      "Ongoing maintenance & updates",
    ],
  },
  {
    id: "bookings",
    tag: "Automation",
    title: "Booking System Integration",
    description:
      "Let your clients book appointments 24/7 without the back-and-forth. We integrate seamless booking flows directly into your website.",
    features: [
      "Online scheduling embedded in your site",
      "Automated email & SMS confirmations",
      "Customizable availability rules",
      "Payment integration at checkout",
      "Multi-service & multi-staff support",
      "Waitlist & cancellation management",
    ],
  },
  {
    id: "calendar",
    tag: "Integration",
    title: "Calendar Synchronization",
    description:
      "Keep everything in sync. We connect your booking system to Google Calendar, Outlook, Apple Calendar, and more — in real time.",
    features: [
      "Two-way calendar sync",
      "Conflict detection & prevention",
      "Team calendar coordination",
      "Time zone handling",
      "Buffer time between appointments",
      "Custom calendar views & dashboards",
    ],
  },
  {
    id: "acquisition",
    tag: "Growth",
    title: "Automated Client Acquisition",
    description:
      "Stop chasing leads. We set up the systems that attract new enquiries and turn them into paying clients — without you lifting a finger.",
    features: [
      "Lead capture forms & landing pages",
      "Automated follow-up sequences",
      "Email & SMS nurture campaigns",
      "CRM integration & lead scoring",
      "Retargeting & remarketing setup",
      "Performance tracking & optimization",
    ],
  },
];

export default function ServicesDetail() {
  return (
    <section className="relative pt-36 pb-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Services
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            What We <span className="gradient-text">Build For You</span>
          </h1>
          <p className="text-white/35 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to attract clients, simplify your day-to-day,
            and grow — built and managed by one team.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <div className="relative p-8 sm:p-10 lg:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-accent/10 transition-all duration-500 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                      {service.tag}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-accent/90 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-white/30 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-white/40"
                        >
                          <div className="w-4 h-4 rounded-full bg-accent/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M1.5 4l1.75 1.75L6.5 2.5"
                                stroke="#01D957"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-20">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]"
          >
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
