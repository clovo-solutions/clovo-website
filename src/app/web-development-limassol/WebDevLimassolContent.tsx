"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects launch within 2–4 weeks depending on complexity. A simple brochure site can be ready in under two weeks. More complex builds with booking systems, CRM integration, and custom functionality typically take 3–4 weeks. We give you a clear timeline before any work begins.",
  },
  {
    q: "How much does a website cost in Limassol?",
    a: "Our projects start from €2,000 for a conversion-focused business website. Larger builds with booking systems, CRM integration, and automation workflows typically range from €4,000–€6,000. Every project is scoped individually and we provide a detailed quote after our free discovery call so there are no surprises.",
  },
  {
    q: "Do you build WordPress websites?",
    a: "We build with modern frameworks like Next.js and React, which deliver significantly faster load times, better SEO performance, and stronger security than WordPress. Our sites score 95+ on Google PageSpeed consistently, something most WordPress sites struggle to achieve. That said, if your business specifically requires WordPress, we can discuss it.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Every website we build includes SEO foundations: proper meta tags, semantic HTML, fast load times, mobile optimization, schema markup, and sitemap generation. These are the technical fundamentals Google looks for. For businesses wanting to actively rank for competitive keywords, we offer ongoing SEO as part of our Growth and Scale packages.",
  },
  {
    q: "Can you add a booking system to my website?",
    a: "Yes. We integrate booking systems that let your clients schedule appointments directly through your website, 24/7. Bookings sync with your Google Calendar or Outlook, and automated confirmations and reminders are sent via email or SMS to reduce no-shows.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Every project includes 30 days of post-launch support at no extra cost. For ongoing maintenance, updates, and optimization, we offer monthly support plans. Many of our clients continue working with us long after launch because the relationship delivers consistent value.",
  },
  {
    q: "I already have a website but it doesn't generate leads. Can you help?",
    a: "Absolutely. A significant number of our clients come to us with existing websites that look decent but don't convert. We audit your current site, identify where visitors drop off, and either redesign specific sections or rebuild the site entirely, depending on what makes more sense for your budget and goals.",
  },
];

export default function WebDevLimassolContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Limassol, Cyprus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Website Development Company in Limassol
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Most websites in Limassol look fine but don&apos;t do anything. They
            sit there, costing money, while potential clients scroll past and
            book with someone else. If your website isn&apos;t actively bringing
            you business, it&apos;s not doing its job.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Clovo Solutions is a web development company based in Cyprus. We
            build websites that are designed around one goal: turning visitors
            into paying clients. Not just good-looking pages, but complete
            digital systems with booking integration, calendar sync, CRM
            connectivity, and the SEO foundations to make sure the right people
            find you.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Whether you&apos;re a clinic, a consultancy, a fitness studio, or a
            professional service — if you operate in Limassol and need a website
            that actually generates leads, this page will show you exactly how
            we do it.
          </p>

          <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
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
          </ContactCta>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Web Design &amp; Development That Drives Revenue
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We don&apos;t do template websites. Every project is custom-built
            around your business, your audience, and the specific actions you
            want visitors to take. Here&apos;s what that includes:
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Conversion-Focused Web Design",
                desc: "Every layout decision is driven by data and user behaviour — not trends. We structure your pages so visitors move naturally from awareness to action. Clear value propositions, strategic CTA placement, and trust signals where they matter most.",
              },
              {
                title: "High-Performance Development",
                desc: "Built with Next.js and React for speed, security, and SEO performance. Our sites consistently score 95+ on Google PageSpeed, which means faster load times, lower bounce rates, and better search rankings than the WordPress sites most Limassol agencies deliver.",
              },
              {
                title: "Booking System Integration",
                desc: "Let clients book appointments directly through your website, any time of day. We integrate scheduling tools that sync with your existing calendar, send automated confirmations, and reduce no-shows with built-in reminders.",
              },
              {
                title: "SEO That Gets You Found",
                desc: "Every site includes proper technical SEO: semantic HTML, structured data, optimized metadata, sitemap generation, and mobile-first design. For businesses wanting to rank for competitive terms in Limassol and across Cyprus, we offer ongoing SEO support.",
              },
              {
                title: "CRM & Analytics Integration",
                desc: "Know exactly where your leads come from. We connect your website to CRM tools and analytics dashboards so you can track enquiries, measure conversion rates, and make decisions based on real data and not guesswork.",
              },
              {
                title: "Ongoing Optimisation",
                desc: "Launch is just the beginning. We monitor performance, test variations, and continuously improve your site based on actual visitor behaviour. Your website gets better over time, not stale.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-accent/10 transition-all duration-500"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            From First Call to Launch in 2–4 Weeks
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We keep the process simple, transparent, and fast. No bloated
            timelines, no unnecessary meetings. Here&apos;s what to expect:
          </p>
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Discovery Call (30 min, free)",
                desc: "We learn about your business, your clients, and what you need your website to achieve. By the end of the call, you'll have a clear picture of the approach, timeline, and investment.",
              },
              {
                num: "02",
                title: "Strategy & Design",
                desc: "We map out the site structure, design the user journey, and create the visual direction. You review and approve before we write a single line of code. No surprises.",
              },
              {
                num: "03",
                title: "Development & Integration",
                desc: "We build your site with clean, modern code. Booking systems, CRM connections, analytics. Everything gets wired up and tested. You see progress on a staging link throughout.",
              },
              {
                num: "04",
                title: "Launch & Optimise",
                desc: "Your site goes live. We handle DNS, SSL, hosting setup, and submit your sitemap to Google. Then we monitor performance and make refinements based on real visitor data.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <span className="font-mono text-2xl font-bold text-accent/20 flex-shrink-0 pt-1">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
              Start With a Free Discovery Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ContactCta>
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Why Clovo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What Makes Us Different From Other Website Designers in Cyprus
          </h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We build for conversions, not awards
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                A beautiful website that doesn&apos;t convert is a liability.
                Every design decision we make is measured against a simple
                question: does this help the visitor take the next step? If it
                doesn&apos;t, it doesn&apos;t ship. Our clients consistently
                report measurable increases in enquiries within the first month
                of launch.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Modern technology, not outdated templates
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most web development companies in Limassol still build on
                WordPress with pre-made themes. We use Next.js and React, the
                same technology used by companies like Netflix, Nike, and
                Notion. The result is a faster, more secure, and significantly
                better-performing website. Our average PageSpeed score is 95+.
                Ask your current agency what theirs is.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Complete systems, not just pages
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                We don&apos;t just hand you a website and disappear. We
                integrate booking tools, connect your CRM, set up analytics,
                configure email automations, and make sure every piece works
                together as a single system. Your website becomes the engine
                that drives client acquisition and not just a digital brochure.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Transparent pricing and fast delivery
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                You&apos;ll know the exact cost and timeline before any work
                begins. No hourly billing, no scope creep, no surprise invoices.
                We quote a fixed price, deliver within the agreed timeframe, and
                include 30 days of post-launch support with every project.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            What This Looks Like in Practice
          </h2>
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                Physiotherapy Clinic — Limassol
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                From 0 to 20+ online bookings per week
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A physiotherapy clinic in Limassol was relying entirely on phone
                calls and walk-ins. Their old website was a single page with no
                booking capability and no SEO. We built a conversion-focused
                site with integrated online scheduling, automated appointment
                reminders, and local SEO targeting. Within the first month, they
                were receiving over 20 online bookings per weeks and phone calls
                for scheduling dropped by 70%.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    20+
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    weekly bookings
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    70%
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    fewer scheduling calls
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                Professional Services Firm — Limassol
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                3x increase in qualified enquiries
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A consulting firm had a visually outdated website that generated
                almost no inbound leads. We redesigned the site around their key
                service offerings, added clear calls-to-action throughout,
                implemented a contact form with CRM integration, and optimised
                the site for search terms their potential clients were actually
                using. Qualified enquiries tripled within six weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    3x
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    more enquiries
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    6 weeks
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    to results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Website Development Pricing in Limassol
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            We believe in transparent pricing. Every project is different, but
            here&apos;s a realistic guide so you know what to expect before we
            speak:
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Business Website
                </h3>
                <p className="text-sm text-white/30">
                  Custom design, mobile-first, SEO foundations, fast hosting
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €2,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Website + Booking System
                </h3>
                <p className="text-sm text-white/30">
                  Everything above plus scheduling, calendar sync, reminders
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €4,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Full Growth System
                </h3>
                <p className="text-sm text-white/30">
                  Complete build with CRM, automations, analytics, ongoing
                  support
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-white/60 whitespace-nowrap">
                Custom
              </span>
            </div>
          </div>
          <p className="text-sm text-white/25 mt-6 leading-relaxed">
            All pricing is project-based with a fixed quote and no hourly
            billing, no surprise fees. 50% deposit to start, balance on
            completion.
          </p>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Common Questions About Web Development in Limassol
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01]"
              >
                <h3 className="font-display text-base font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Ready to Build a Website That Actually Works?
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Book a free 30-minute strategy call. We&apos;ll discuss your
                business, audit your current online presence, and map out
                exactly what it would take to start generating leads through
                your website. No commitment, no pressure.
              </p>
              <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
                Book Your Free Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ContactCta>
              <p className="text-xs text-white/20 mt-6">
                No commitment required. We&apos;ll give you an honest assessment
                even if we&apos;re not the right fit.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 pt-6 border-t border-white/[0.04]">
          <Link
            href="/"
            className="text-sm text-accent/50 hover:text-accent transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Clovo Solutions",
            description:
              "Website development company in Limassol, Cyprus. Custom web design, SEO, booking system integration, and business automation.",
            url: "https://clovo-solutions.com/web-development-limassol",
            areaServed: [
              { "@type": "City", name: "Limassol" },
              { "@type": "Country", name: "Cyprus" },
            ],
            serviceType: [
              "Website Development",
              "Web Design",
              "SEO",
              "Booking System Integration",
              "CRM Integration",
            ],
            priceRange: "€€",
          }),
        }}
      />
    </article>
  );
}
