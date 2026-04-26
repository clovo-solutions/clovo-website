"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const services = [
  {
    title: "Custom Website Design",
    desc: "Bespoke designs tailored to your Limassol business. No templates, no shortcuts — every pixel crafted for your brand and audience.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Online stores built for conversion. Secure payments, inventory management, and seamless checkout experiences for Cyprus-based businesses.",
  },
  {
    title: "SEO & Performance",
    desc: "Every site we build is optimised for Google from day one. Fast load times, clean code, and local SEO strategies to rank in Limassol searches.",
  },
  {
    title: "Website Maintenance",
    desc: "Ongoing support, security updates, and content changes. Your site stays fast, secure, and up to date — so you can focus on running your business.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn about your business, goals, and target audience in Limassol. No jargon — just a conversation about what you need.",
  },
  {
    num: "02",
    title: "Strategy & Wireframes",
    desc: "We map out the structure, user flow, and content strategy. You see the blueprint before we write a single line of code.",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "Your site comes to life with custom design, responsive development, and performance optimisation built into every page.",
  },
  {
    num: "04",
    title: "Launch & Growth",
    desc: "We launch, monitor, and refine. Post-launch support includes SEO tracking, analytics setup, and ongoing improvements.",
  },
];

const caseStudies = [
  {
    industry: "Healthcare",
    company: "Limassol Dental Clinic",
    result: "3x more appointment bookings within 90 days",
    desc: "Redesigned their outdated website with a modern booking system, mobile-first design, and local SEO targeting patients searching for dentists in Limassol.",
    stats: [
      { value: "3x", label: "more bookings" },
      { value: "90", label: "days to results" },
    ],
  },
  {
    industry: "Real Estate",
    company: "Marina Bay Properties",
    result: "180% increase in qualified leads",
    desc: "Built a property listing platform with advanced search, virtual tour integration, and lead capture forms optimised for the Cyprus property market.",
    stats: [
      { value: "180%", label: "more leads" },
      { value: "45%", label: "lower bounce rate" },
    ],
  },
  {
    industry: "Health & Fitness",
    company: "Coastal Fitness Studio",
    result: "Revenue doubled in 6 months",
    desc: "Created an online presence with class booking, membership management, and a content strategy that ranks for fitness-related searches in Limassol.",
    stats: [
      { value: "2x", label: "revenue" },
      { value: "6", label: "months" },
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "€2,000",
    description:
      "For small businesses and personal brands getting started online.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 month post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "€4,000",
    description:
      "For growing Limassol businesses that need a competitive edge online.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Advanced SEO & analytics",
      "Speed optimisation",
      "3 months post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For established companies with complex requirements and integrations.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "E-commerce functionality",
      "Priority support & SLA",
      "Dedicated project manager",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How much does web design in Limassol cost?",
    a: "Our projects start from €2,000 for a starter website and scale based on complexity. Most Limassol businesses invest between €2,000–€5,000 for a professional site that drives real results. We provide detailed quotes after understanding your specific needs.",
    link: {
      href: "/website-cost-cyprus",
      text: "See our full website pricing guide for Cyprus",
    },
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical project takes 4–8 weeks from kickoff to launch. Simpler sites can be ready in 1 week, while complex web applications may take 10–12 weeks. We provide a clear timeline during our discovery call.",
  },
  {
    q: "Do you only work with businesses in Limassol?",
    a: "While we specialise in serving Limassol and Cyprus-based businesses, we work with clients internationally. Our local expertise means we understand the Cyprus market, consumer behaviour, and regional SEO. A major advantage for businesses targeting local customers.",
  },
  {
    q: "Will my website be optimised for Google?",
    a: "Every website we build includes technical SEO foundations: fast load times, clean markup, mobile optimisation, structured data, and on-page SEO for your target keywords. We also offer ongoing SEO services for businesses that want to rank higher in Limassol search results.",
    link: {
      href: "/web-design-cyprus",
      text: "Learn about our SEO-first approach across Cyprus",
    },
  },
  {
    q: "Do you provide website maintenance after launch?",
    a: "Yes. All plans include post-launch support. We also offer monthly maintenance packages that cover security updates, content changes, performance monitoring, and technical support, so your site stays fast and secure long after launch.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Many of our Limassol clients come to us with outdated websites that need a modern refresh. We audit your current site, preserve what works, and rebuild everything else for better performance, design, and conversions.",
    link: {
      href: "/web-development-limassol",
      text: "See how our website development process works",
    },
  },
];

export default function WebDesignLimassolContent() {
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
            Web Design in Limassol{" "}
            <span className="gradient-text text-glow">
              That Turns Visitors Into Customers
            </span>
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Most websites in Limassol exist without purpose. They look
            acceptable, load slowly, and do nothing to convert the people who
            visit them. If your website isn&apos;t actively bringing you
            business, it&apos;s costing you business.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Clovo Solutions is a Limassol-based web design agency building fast,
            modern, conversion-focused websites for businesses across Cyprus. No
            templates. No generic designs. Just websites that actually work.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Whether you&apos;re a clinic, a consultancy, a fitness studio, or a
            professional service — if you operate in Limassol and need a website
            that generates leads, this page will show you exactly how we do it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ContactCta className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
              Get a Free Audit
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
            <Link
              href="/website-cost-cyprus"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/[0.08] text-white/60 text-base font-medium hover:border-white/20 hover:text-white/80 transition-all duration-300"
            >
              See Pricing
            </Link>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/25 mb-16 py-6 border-y border-white/[0.04]">
          {/* <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-dark-900"
                  style={{
                    background: `linear-gradient(135deg, hsl(${
                      150 + i * 20
                    }, 60%, ${25 + i * 5}%) 0%, hsl(${150 + i * 20}, 40%, ${
                      15 + i * 5
                    }%) 100%)`,
                  }}
                />
              ))}
            </div>
            <span>15+ businesses launched</span>
          </div> */}
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="#01D957"
                  className="opacity-60"
                >
                  <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1-3-2.9 4.2-.7L7 1z" />
                </svg>
              ))}
            </div>
            <span>5.0 average rating</span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Web Design Services for Limassol Businesses
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            From single-page sites to complex web applications, our Limassol web
            designers build everything your business needs to succeed online.
            See how our{" "}
            <Link
              href="/web-development-limassol"
              className="text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              full-stack development process
            </Link>{" "}
            works under the hood.
          </p>
          <div className="space-y-6">
            {services.map((service, i) => (
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
            From First Call to Launch Day
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            A clear, four-step process that keeps you informed and in control at
            every stage. No surprises, no scope creep.
          </p>
          <div className="space-y-8">
            {processSteps.map((step) => (
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
            <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
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
            Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Limassol Businesses We&apos;ve Helped Grow
          </h2>
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]"
              >
                <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                  {study.industry}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {study.company}
                </h3>
                <p className="text-sm text-accent/80 font-semibold mb-4">
                  {study.result}
                </p>
                <p className="text-sm text-white/35 leading-relaxed mb-4">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  {study.stats.map((stat, j) => (
                    <div
                      key={j}
                      className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]"
                    >
                      <span className="text-accent font-display font-bold text-lg">
                        {stat.value}
                      </span>
                      <span className="text-accent/60 text-xs ml-2">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Website Design Packages for Every Budget
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Transparent pricing with no hidden fees. Every package includes
            mobile-responsive design, SEO setup, and post-launch support.
          </p>
          <div className="space-y-4">
            {pricingTiers.map((plan, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-500 ${
                  plan.highlighted
                    ? "border-accent/20 bg-accent/[0.03]"
                    : "border-white/[0.04] bg-white/[0.01]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {plan.name}
                      </h3>
                      {plan.highlighted && (
                        <span className="text-[10px] font-mono font-semibold text-dark-900 bg-accent px-3 py-0.5 rounded-full tracking-wider uppercase">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/30">{plan.description}</p>
                  </div>
                  <span className="font-display text-2xl font-bold text-accent whitespace-nowrap">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-sm text-white/20 font-normal ml-1">
                        one-time
                      </span>
                    )}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path
                          d="M4 8l3 3 5-5"
                          stroke="#01D957"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-white/40">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/25 mt-6 leading-relaxed">
            Need something custom?{" "}
            <Link
              href="/website-cost-cyprus"
              className="text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              Explore our detailed website pricing for Cyprus
            </Link>
          </p>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Common Questions About Web Design in Limassol
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
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="inline-block mt-3 text-xs text-accent/40 hover:text-accent transition-colors underline underline-offset-2"
                  >
                    {faq.link.text} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <Link
            href="/web-development-limassol"
            className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
          >
            <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase">
              Development
            </span>
            <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors">
              Custom website development in Limassol →
            </p>
          </Link>
          <Link
            href="/web-design-cyprus"
            className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
          >
            <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase">
              Nationwide
            </span>
            <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors">
              Website design services across Cyprus →
            </p>
          </Link>
          <Link
            href="/website-cost-cyprus"
            className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
          >
            <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase">
              Pricing
            </span>
            <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors">
              How much does a website cost in Cyprus? →
            </p>
          </Link>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Ready for a Website That Actually Works?
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Join the Limassol businesses that stopped losing customers to
                outdated websites. Get a free audit and see exactly what&apos;s
                holding your site back.
              </p>
              <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
                Get Your Free Website Audit
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
                No commitment required. Just honest feedback on your website.
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
            name: "Clovo Solutions — Web Design Limassol",
            description:
              "Professional web design agency in Limassol, Cyprus. Custom websites, e-commerce, and SEO services for local businesses.",
            url: "https://clovo-solutions.com/web-design-limassol",
            areaServed: [
              { "@type": "City", name: "Limassol" },
              { "@type": "Country", name: "Cyprus" },
            ],
            serviceType: [
              "Web Design",
              "Website Development",
              "SEO",
              "E-Commerce",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Design Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Starter Website",
                  price: "1500",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Business Website",
                  price: "3000",
                  priceCurrency: "EUR",
                },
              ],
            },
            priceRange: "€€",
          }),
        }}
      />
    </article>
  );
}
