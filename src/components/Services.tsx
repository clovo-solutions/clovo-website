"use client";

import AnimatedSection from "./AnimatedSection";
import ContactCta from "./ContactCta";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "A Website That Wins You Clients",
    description:
      "A professional website built to make visitors call, book, or buy — not just look nice. Fast, mobile-first, and yours to keep.",
    bullets: ["Custom design", "Works perfectly on phones", "Ready in 1–2 weeks"],
    tag: "Websites",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Get Found on Google",
    description:
      "When someone in Cyprus searches for what you do, you show up — and that turns into enquiries.",
    bullets: [
      "Local SEO",
      "Google Maps & reviews",
      "Simple monthly report showing visitors and bookings",
    ],
    tag: "Google & SEO",
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
    title: "Online Booking That Runs Itself",
    description:
      "Clients book their own appointments, day or night. Automatic confirmations and reminders mean fewer no-shows and no more phone tag.",
    bullets: ["24/7 self-booking", "Syncs with your calendar", "Automatic reminders"],
    tag: "Bookings",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Three Things. <span className="gradient-text">Done Properly.</span>
          </h2>
          <p className="text-white/35 text-lg max-w-2xl mx-auto leading-relaxed">
            From your first website to online bookings and automatic reminders —
            everything you need to win clients online.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <p className="text-sm text-white/30 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 10 10"
                          fill="none"
                          aria-hidden="true"
                          className="flex-shrink-0 mt-1"
                        >
                          <path
                            d="M2 5.5l2 2L8 3"
                            stroke="#01D957"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs text-white/40 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Section CTA */}
        <AnimatedSection className="text-center mt-14 pt-10 border-t border-white/[0.04]">
          <p className="text-white/35 mb-6">
            Not sure which one you need? That&apos;s normal — most of our clients
            weren&apos;t either.
          </p>
          <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02] active:scale-[0.98]">
            Book a Free Call — We&apos;ll Tell You Honestly
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
