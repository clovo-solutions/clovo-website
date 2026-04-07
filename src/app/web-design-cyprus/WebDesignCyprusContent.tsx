"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const services = [
  {
    title: "Business Websites",
    desc: "Not a template with your logo slapped on it. We design and build every page around your specific business, your customers, and the actions you want people to take. The result is a site that feels like yours and actually does something useful.",
  },
  {
    title: "E-Commerce & Online Stores",
    desc: "If you sell products, your store needs to load fast, look trustworthy, and make checkout painless. We build online stores that handle payments, inventory, and shipping without the headaches that come with most off-the-shelf platforms.",
  },
  {
    title: "SEO That Works From Day One",
    desc: "Every site we build comes with proper technical SEO baked in. That means clean code, fast load times, structured data, mobile optimisation, and metadata that actually tells Google what your pages are about. No afterthought SEO bolted on later.",
  },
  {
    title: "Booking & Lead Capture Systems",
    desc: "For service businesses across Cyprus, we integrate booking systems that let clients schedule directly through your site. Calendar sync, automated reminders, CRM connections. Your website becomes the thing that fills your calendar, not just a page people look at.",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Websites need attention after launch. Security patches, content updates, performance tweaks. We offer monthly plans so your site stays fast, secure, and up to date without you having to think about it.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "We talk",
    desc: "A 30-minute call where we figure out what your business actually needs. Not a sales pitch. Just a straightforward conversation about your goals, your audience, and what a good website looks like for you.",
  },
  {
    num: "02",
    title: "We plan and design",
    desc: "We map out the structure, write the content strategy, and design the look and feel. You see everything before we start building. If something feels off, we fix it now, not after the site is half-built.",
  },
  {
    num: "03",
    title: "We build it",
    desc: "Custom code, not drag-and-drop. We use Next.js and React, which means your site will be significantly faster and more secure than most WordPress builds in Cyprus. You get a staging link so you can follow progress the whole way.",
  },
  {
    num: "04",
    title: "We launch and keep improving",
    desc: "Go-live day is not the finish line. We set up analytics, submit your sitemap, monitor performance, and make adjustments based on how real visitors actually use your site. Your website gets better over time.",
  },
];

const caseStudies = [
  {
    location: "Nicosia",
    industry: "Legal Services",
    company: "A mid-size law firm",
    result: "4x more consultation requests in 8 weeks",
    desc: "Their old site was built on WordPress five years ago and hadn't been touched since. We rebuilt it from scratch with clear service pages, a simple contact flow, and local SEO targeting. Within two months they were getting four times the inbound enquiries they had before.",
    stats: [
      { value: "4x", label: "more enquiries" },
      { value: "8", label: "weeks to results" },
    ],
  },
  {
    location: "Limassol",
    industry: "Healthcare",
    company: "Physiotherapy clinic",
    result: "20+ online bookings per week from zero",
    desc: "They relied entirely on phone calls and walk-ins. We built a conversion-focused site with an integrated booking system, automated reminders, and SEO targeting patients in Limassol. Online bookings went from nothing to over 20 per week in the first month.",
    stats: [
      { value: "20+", label: "weekly bookings" },
      { value: "70%", label: "fewer scheduling calls" },
    ],
  },
  {
    location: "Paphos",
    industry: "Tourism & Hospitality",
    company: "Boutique hotel",
    result: "Direct bookings up 150%, less reliance on OTAs",
    desc: "They were paying huge commissions to booking platforms. We designed a site with a direct booking engine, virtual room tours, and SEO for travel-related keywords in the Paphos area. Direct bookings jumped 150% and their OTA dependency dropped significantly.",
    stats: [
      { value: "150%", label: "more direct bookings" },
      { value: "40%", label: "less OTA spend" },
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "€1,500",
    description:
      "For small businesses and solo operators who need a proper online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form with email notifications",
      "Basic SEO setup",
      "1 month post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "€3,000",
    description:
      "For businesses that need their website to actively generate leads.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS for easy content updates",
      "Advanced SEO and analytics",
      "Performance optimisation",
      "3 months post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Growth System",
    price: "Custom",
    description:
      "For companies that want a complete digital system, not just a website.",
    features: [
      "Unlimited pages",
      "Booking system integration",
      "CRM and automation setup",
      "E-commerce functionality",
      "Priority support",
      "Dedicated project manager",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How much does web design cost in Cyprus?",
    a: "It depends on what you need, but we try to keep things transparent. A starter business site begins at €1,500. Most of our clients invest somewhere between €2,000 and €5,000 for a site that genuinely drives results. We always give you a clear quote before any work starts, so there are no surprises.",
    link: {
      href: "/website-cost-cyprus",
      text: "See our full breakdown of website costs in Cyprus",
    },
  },
  {
    q: "How long does it take to build a website?",
    a: "Typically 3 to 6 weeks, depending on complexity. A straightforward business site can be done in under two weeks. Larger projects with booking systems, e-commerce, or custom functionality take a bit longer. We give you a clear timeline upfront and stick to it.",
  },
  {
    q: "Do you work with businesses outside Limassol?",
    a: "Yes. We work with businesses across Cyprus, including Nicosia, Paphos, Larnaca, and everywhere in between. Everything is done remotely so your location doesn't matter. We also take on international clients, though our local knowledge of the Cyprus market is a big advantage if you're targeting customers here.",
    link: {
      href: "/web-development-limassol",
      text: "Learn about our Limassol-specific services",
    },
  },
  {
    q: "Why don't you use WordPress?",
    a: "We build with Next.js and React. It's the same technology behind sites like Netflix and Notion. The difference you'll notice is speed. Our sites consistently score 95+ on Google PageSpeed, which most WordPress sites in Cyprus can't match. Faster sites rank better, convert better, and feel better to use.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every site includes technical SEO foundations: proper meta tags, semantic HTML, fast load times, structured data, and a mobile-first approach. That gives Google everything it needs to find and rank your pages. For businesses that want to actively compete for competitive keywords, we offer ongoing SEO as a separate service.",
  },
  {
    q: "What if I already have a website that isn't working?",
    a: "That's actually the situation for most of our clients. They have a site that looks okay but doesn't generate any leads. We'll audit what you have, figure out where visitors are dropping off, and either redesign specific sections or rebuild the whole thing, whichever makes more sense for your budget.",
    link: {
      href: "/web-design-limassol",
      text: "See how we approach redesigns for Limassol businesses",
    },
  },
  {
    q: "Do you offer support after the site launches?",
    a: "Every project includes 30 days of post-launch support at no extra cost. After that, we have monthly plans for ongoing maintenance, updates, and optimisation. A lot of our clients stick around because the ongoing work keeps delivering value.",
  },
];

export default function WebDesignCyprusContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* ── Hero ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Web Design Cyprus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Web Design in Cyprus{" "}
            <span className="gradient-text text-glow">
              That Actually Brings You Business
            </span>
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Here's the thing about most websites in Cyprus: they exist, and
            that's about it. They load slowly, they look like every other site
            in the same industry, and they don't do anything to turn a visitor
            into a paying client.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            We're Clovo Solutions, a web design agency based in Cyprus. We build
            websites that are fast, look genuinely good, and are structured
            around one goal: getting you more clients. Not just pretty pages.
            Actual systems that bring in enquiries, bookings, and sales while
            you focus on the work you're good at.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Whether you're running a clinic in Limassol, a law firm in Nicosia,
            a hotel in Paphos, or a shop in Larnaca, the approach is the same.
            We figure out what your customers need to see, and we build a site
            that gives it to them clearly and quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ContactCta className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
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
            <Link
              href="/website-cost-cyprus"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/[0.08] text-white/60 text-base font-medium hover:border-white/20 hover:text-white/80 transition-all duration-300"
            >
              See What It Costs
            </Link>
          </div>
        </AnimatedSection>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/25 mb-16 py-6 border-y border-white/[0.04]">
          <div className="flex items-center gap-2">
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
          </div>
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
            <span>4.9 average rating</span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* ── Services ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Website Design Services Across Cyprus
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We don't do template sites. Every project is built around your
            business, your audience, and the specific outcomes you're after.
            Here's what that looks like in practice. If you're specifically
            looking for{" "}
            <Link
              href="/web-development-limassol"
              className="text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              development services in Limassol
            </Link>
            , we have a dedicated team for that too.
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

        {/* ── Why Us ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Why Clovo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What Makes Us Different From Other Web Designers in Cyprus
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Your site is built to convert, not just to look nice
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                A website that looks great but doesn't generate enquiries is a
                waste of money. Every layout decision, every button placement,
                every line of copy on your site is there because it helps move
                visitors closer to becoming clients. That's the difference
                between a brochure and a business tool.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We use modern technology, not five-year-old templates
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most web design companies in Cyprus still rely on WordPress with
                pre-made themes. We build with Next.js and React. Same tech
                stack as Netflix, Notion, and Nike. What that means for you:
                faster load times, better security, higher Google rankings. Our
                average PageSpeed score is 95+. Ask your current web designer
                what theirs is.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                You get a complete system, not just some pages
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                We connect everything: your booking tool, your CRM, your email
                automations, your analytics. When someone lands on your site and
                takes action, you know exactly where they came from and what
                they did. Your website stops being a static thing and starts
                being the engine behind your client acquisition.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Fixed pricing, fast timelines, no games
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                You'll know the exact cost before we start. No hourly billing
                that spirals. No vague estimates that double halfway through. We
                quote a fixed price, agree on a timeline, and deliver. If you
                want to know what to budget, check our{" "}
                <Link
                  href="/website-cost-cyprus"
                  className="text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
                >
                  transparent pricing for Cyprus businesses
                </Link>
                .
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* ── Process ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Simple Process. No Wasted Time.
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Most projects go from first call to live website in 3 to 6 weeks.
            Here's what happens in between.
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
              Start With a Free Call
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

        {/* ── Case Studies ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Real Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What This Looks Like for Businesses Across Cyprus
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            These are real projects with real outcomes. Different industries,
            different cities, same approach: build something that works.
          </p>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase">
                    {study.industry}
                  </span>
                  <span className="text-white/10">·</span>
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.1em] uppercase">
                    {study.location}
                  </span>
                </div>
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

        {/* ── Pricing ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Web Design Pricing for Cyprus Businesses
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We believe you should know what something costs before you commit.
            Every project is different, but these are realistic starting points
            based on what most Cyprus businesses need.
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
            All pricing is project-based. Fixed quote, 50% deposit, balance on
            completion. Want a more detailed breakdown?{" "}
            <Link
              href="/website-cost-cyprus"
              className="text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              Our website cost guide covers everything
            </Link>
          </p>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* ── Cities ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Where We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Web Design for Every City in Cyprus
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            We're based in Cyprus and we know this market. We work with
            businesses in every major city, and because our process is fully
            remote, location never gets in the way.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { city: "Limassol", link: "/web-design-limassol" },
              { city: "Nicosia", link: null },
              { city: "Paphos", link: null },
              { city: "Larnaca", link: null },
            ].map((item, i) =>
              item.link ? (
                <Link
                  key={i}
                  href={item.link}
                  className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500 text-center"
                >
                  <span className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
                    {item.city}
                  </span>
                  <span className="block text-[10px] text-accent/40 mt-1">
                    View services →
                  </span>
                </Link>
              ) : (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center"
                >
                  <span className="text-sm font-semibold text-white/40">
                    {item.city}
                  </span>
                  <span className="block text-[10px] text-white/15 mt-1">
                    Coming soon
                  </span>
                </div>
              )
            )}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* ── FAQ ── */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Questions About Website Design in Cyprus
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

        {/* ── Related Pages ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <Link
            href="/web-design-limassol"
            className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
          >
            <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase">
              Limassol
            </span>
            <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors">
              Web designers in Limassol →
            </p>
          </Link>
          <Link
            href="/web-development-limassol"
            className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
          >
            <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase">
              Development
            </span>
            <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors">
              Website development in Limassol →
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

        {/* ── Final CTA ── */}
        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Let's Build Something That Works
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Book a free 30-minute call. We'll look at what you have now,
                talk about what you actually need, and give you an honest
                recommendation. If we're a good fit, great. If not, you'll still
                walk away with useful feedback.
              </p>
              <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
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
                No commitment. No awkward sales pitch. Just a conversation.
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
              "Web design agency in Cyprus. Custom websites, e-commerce, SEO, and booking system integration for businesses across Cyprus.",
            url: "https://clovo-solutions.com/web-design-cyprus",
            areaServed: [
              { "@type": "City", name: "Limassol" },
              { "@type": "City", name: "Nicosia" },
              { "@type": "City", name: "Paphos" },
              { "@type": "City", name: "Larnaca" },
              { "@type": "Country", name: "Cyprus" },
            ],
            serviceType: [
              "Web Design",
              "Website Development",
              "E-Commerce",
              "SEO",
              "Booking System Integration",
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
