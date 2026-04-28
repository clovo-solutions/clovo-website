"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "High-Converting Websites",
    description:
      "Custom-built websites designed to turn visitors into paying customers. Fast, responsive, and optimized for conversions.",
    tag: "Design & Dev",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Booking System Integration",
    description:
      "Seamless booking flows that let your clients schedule appointments 24/7 without back-and-forth emails.",
    tag: "Automation",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M2 12h20" />
        <path d="M12 2v20" />
      </svg>
    ),
    title: "Calendar Sync",
    description:
      "Automatic calendar synchronization across Google Calendar, Outlook, and more. Never double-book again.",
    tag: "Integration",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Client Acquisition",
    description:
      "Automated lead generation pipelines that bring qualified prospects to your doorstep consistently.",
    tag: "Growth",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Analytics & Optimization",
    description:
      "Data-driven insights to continuously improve performance. Track conversions, identify bottlenecks, and grow faster.",
    tag: "Analytics",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Save Time & Costs",
    description:
      "Eliminate repetitive manual tasks. Our automations save you hours every week and reduce operational overhead.",
    tag: "Efficiency",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-0 sm:py-0 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Everything You Need to{" "}
            <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-white/35 text-lg max-w-2xl mx-auto leading-relaxed">
            From your first website to a fully automated client acquisition
            engine — we build the systems that scale your business.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent/10 transition-all duration-500 cursor-default">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-5">
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/[0.08] text-accent mb-5 group-hover:bg-accent/[0.12] transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-accent/90 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/30 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
