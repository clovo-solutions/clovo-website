"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const faqs = [
  {
    q: "What is SEO website development?",
    a: "It means building a website where search engine optimisation is baked into the technical foundation from day one, not slapped on as an afterthought. Think semantic HTML, fast load times, clean URL structures, schema markup, proper metadata, mobile responsiveness, and easy crawlability. The end result is a site Google can actually understand, index, and rank. That gives you a real structural edge over competitors running patched-up templates.",
  },
  {
    q: "Can't I just add SEO to my existing website?",
    a: "You can try, but there are limits. If the underlying code is slow, bloated, or poorly structured (which is extremely common with WordPress themes and page builders), no amount of keyword work is going to fix that. Google weighs page speed, Core Web Vitals, and mobile experience pretty heavily. In a lot of cases, rebuilding on a modern framework with proper SEO foundations actually gets you results faster than trying to patch a broken structure.",
  },
  {
    q: "How long before I see SEO results?",
    a: "The technical stuff like faster load times, proper indexing, and structured data kicks in within days of Google recrawling your site. Ranking improvements for competitive keywords usually start showing up around the 4 to 8 week mark. Real, meaningful organic traffic growth tends to build over 3 to 6 months depending on your industry and competition. We set honest expectations upfront. SEO compounds over time, it's not an overnight switch.",
  },
  {
    q: "Do you offer SEO services separately from development?",
    a: "Our main focus is building SEO-friendly websites from scratch. If you already have a solid site that just needs SEO strategy and ongoing work, we can handle that through our Growth and Scale packages. But if your current site has deep technical problems, we'll be straight with you about whether optimisation alone will make a difference or whether a rebuild is the smarter move.",
  },
  {
    q: "What makes your approach different from other SEO agencies in Cyprus?",
    a: "Most SEO agencies here work on top of websites they didn't build. They're stuck working around someone else's technical decisions. We build the website and the SEO strategy together as one system. That means proper URL structures, fast code, clean crawl paths, and structured data are all in place before any content goes live. You're not paying two separate teams to fight each other's limitations.",
  },
  {
    q: "How much does an SEO-optimised website cost?",
    a: "Our projects start from €2,000 for a business site with full technical SEO foundations. Bigger builds that include ongoing SEO, content strategy, booking systems, and CRM integration typically land between €4,000 and €6,000. Every project is scoped based on your goals and competitive landscape. We give you a clear quote after our free discovery call so there are no surprises.",
  },
  {
    q: "Will you help me rank for specific keywords?",
    a: "Absolutely. During discovery we do keyword research specific to your business and location. Then we build the entire site architecture around those keywords. Dedicated landing pages for high-intent search terms, proper internal linking, optimised metadata, and content structured to capture the traffic that actually converts into clients. For Limassol-based clients, that usually includes local SEO targeting for their service area too.",
  },
];

export default function SeoWebDevContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Hero / Intro */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Cyprus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            SEO Website Development
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Most websites get built first and then someone tries to make them
            rank on Google. That&apos;s backwards. And expensive. By the time an
            SEO specialist gets their hands on a finished site, the problems are
            already built into the foundation. Slow pages, bloated code, messy
            URL structures, missing schema markup, content that Google can
            barely make sense of. Fixing all of that after the fact costs more
            than just doing it right from the start.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            At Clovo Solutions, we build SEO-friendly websites where the
            technical SEO lives in the code itself, not in a plugin someone
            installed after launch. Every site we develop is engineered to load
            fast, index cleanly, and rank for the keywords that actually bring
            paying clients to your business. If you&apos;re running a business
            in Cyprus and you&apos;re tired of having a website that nobody
            finds, this is how we fix that.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We work with clinics, consultancies, service providers, and
            professional businesses across Cyprus, from{" "}
            <Link
              href="/web-development-limassol"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              website development in Limassol
            </Link>{" "}
            to nationwide coverage. The goal is always the same: a website that
            ranks, converts, and pays for itself.
          </p>

          {/* CTA 1 */}
          <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
            Book a Free SEO Strategy Call
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

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            SEO-Friendly Websites Built for Organic Growth
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-4">
            An SEO-friendly website isn&apos;t just a site with a few meta tags
            filled in. It&apos;s a site where every technical decision, from the
            framework choice to the URL structure to how images get loaded, is
            made with search engines and real users in mind. Here&apos;s what
            that looks like in practice:
          </p>

          <div className="space-y-6 mt-10">
            {[
              {
                title: "Technical SEO Architecture",
                desc: "Semantic HTML5 that search engines can parse without breaking a sweat. Proper heading hierarchy, landmark regions, structured data via JSON-LD, canonical tags, and XML sitemaps, all generated automatically. This is the technical foundation that most agencies skip entirely.",
              },
              {
                title: "Sub-2-Second Load Times",
                desc: "We build with Next.js and React, the same stack behind Netflix and Notion. Static generation, code splitting, lazy loading, and optimised asset delivery mean your pages load in under 2 seconds. Google rewards fast sites with better rankings. Our clients consistently score 95+ on PageSpeed Insights while most Cyprus agency sites struggle to crack 60.",
              },
              {
                title: "Mobile-First, Responsive Development",
                desc: "Over 70% of web traffic in Cyprus comes from mobile devices. Every site we build starts mobile-first and scales up from there. Not a desktop layout crammed into a phone screen, but a genuinely optimised mobile experience that Google's mobile-first indexing actually rewards.",
              },
              {
                title: "Keyword-Driven Site Architecture",
                desc: "We research the keywords your potential clients are actually searching for, then build the site structure around them. Dedicated landing pages for high-intent terms, proper internal linking to spread authority, and URL structures that signal relevance to Google before it even reads the content.",
              },
              {
                title: "Local SEO for Cyprus Businesses",
                desc: "Schema markup for local businesses, Google Business Profile optimisation guidance, location-specific landing pages, and consistent name/address/phone details across your digital presence. Whether your clients are in Limassol, Nicosia, Paphos, or anywhere else in Cyprus, we make sure Google puts your business in front of the right people.",
              },
              {
                title: "Conversion-Optimised Design",
                desc: "Ranking is meaningless if visitors don't take action. Every page is designed around clear user journeys, from search result to landing page to enquiry. Strategic CTA placement, trust signals, social proof, and friction reduction all working together to turn organic traffic into actual leads.",
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

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Process Section */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            How We Build Websites That Rank
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            SEO isn&apos;t a step in our process. It&apos;s woven into every
            step. From the first conversation to post-launch monitoring, search
            visibility drives every decision we make.
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "SEO Discovery & Keyword Research",
                desc: "We start by getting to know your business, your competitors, and the keywords your potential clients are actually typing into Google. This isn't guesswork. We use real search data to find the terms with the highest commercial intent and realistic ranking potential for your specific market in Cyprus.",
              },
              {
                num: "02",
                title: "Site Architecture & Content Strategy",
                desc: "Based on the keyword research, we map out the best site structure. Which pages you need, how they connect to each other, and what content each one needs to rank. Every URL, heading, and internal link gets planned before design even begins. This is the step most agencies skip, and it shows.",
              },
              {
                num: "03",
                title: "Design & Technical SEO Development",
                desc: "We design for real people and build for search engines at the same time. Clean code, structured data, optimised images, proper caching, minified assets, lazy loading. All of it gets implemented during development, not tacked on afterward. The result is a site that scores 95+ on PageSpeed the day it goes live.",
              },
              {
                num: "04",
                title: "Launch, Index & Monitor",
                desc: "On launch day we submit your sitemap to Google Search Console, check indexing is working, and start monitoring crawl behaviour. We track keyword positions, organic impressions, click-through rates, and conversion data from day one. Within the first few weeks, you'll have real data showing exactly how your site is performing.",
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

          {/* CTA 2 */}
          <div className="mt-12">
            <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
              Get a Free SEO Audit of Your Current Site
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

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Differentiation */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Why Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Why Businesses in Cyprus Choose Clovo for Technical SEO Development
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                SEO and development under one roof
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most businesses in Cyprus hire a{" "}
                <Link
                  href="/web-development-limassol"
                  className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
                >
                  web development company
                </Link>{" "}
                to build their site, then hire a completely separate SEO agency
                to try and make it rank. That&apos;s two teams, two invoices,
                and constant friction between what the designer built and what
                Google actually needs. We get rid of that problem entirely. Your
                website gets designed, developed, and optimised by the same
                team, so nothing slips through the cracks.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Modern code, not WordPress templates
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most web design agencies in Cyprus are still building on
                WordPress with off-the-shelf themes. Those themes load dozens of
                unused scripts, spit out messy HTML, and produce slow pages that
                Google actively penalises. We build with Next.js, a framework
                used by Vercel, Nike, and TikTok, which produces clean, fast,
                SEO-optimised code out of the box. The performance gap is huge
                and it&apos;s easy to measure.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Ranking is not the goal. Revenue is.
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Some SEO agencies will celebrate ranking you for keywords nobody
                actually searches, or sending you traffic that never converts.
                We focus on commercial-intent keywords, the ones people type
                when they&apos;re ready to buy, book, or enquire. Then we build
                pages designed specifically to turn that traffic into leads.
                Rankings without revenue is just a vanity metric. We don&apos;t
                do vanity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Transparent, measurable results
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Every client gets access to their Google Search Console and
                Analytics data from day one. You see exactly which keywords
                you&apos;re ranking for, how much organic traffic is coming in,
                and how many leads your website is generating. No mysterious
                reports, no vague metrics. Just clear data that shows whether
                the investment is working.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Pricing */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            SEO Website Development Pricing
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            Every project is different, but here&apos;s a realistic picture of
            what to expect. All pricing is project-based. No hourly billing, no
            hidden fees.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  SEO-Optimised Business Website
                </h3>
                <p className="text-sm text-white/30">
                  Custom design, technical SEO, mobile-first, fast hosting,
                  sitemap, schema markup
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €2,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  SEO Website + Lead Generation System
                </h3>
                <p className="text-sm text-white/30">
                  Everything above plus booking integration, CRM, analytics
                  dashboard, keyword-targeted pages
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €4,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Full SEO Growth System
                </h3>
                <p className="text-sm text-white/30">
                  Complete build with ongoing SEO, content strategy, monthly
                  reporting, A/B testing, automation
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-white/60 whitespace-nowrap">
                Custom
              </span>
            </div>
          </div>

          <p className="text-sm text-white/25 mt-6 leading-relaxed">
            50% deposit to start, balance on completion. 30 days of post-launch
            support included with every project.
          </p>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* FAQ */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Frequently Asked Questions About SEO Website Development
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

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Final CTA */}
        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Stop Paying for a Website Nobody Finds
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Book a free 30-minute strategy call. We&apos;ll look at your
                current site&apos;s SEO performance, figure out which keywords
                you should be ranking for, and lay out exactly what it would
                take to start getting organic leads. No commitment, no pressure.
              </p>
              <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
                Book Your Free SEO Strategy Call
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
                We&apos;ll give you an honest take, even if we&apos;re not the
                right fit.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-white/[0.04]">
          <Link
            href="/"
            className="text-sm text-accent/50 hover:text-accent transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Clovo Solutions",
            description:
              "SEO website development company in Cyprus. We build websites with technical SEO integrated into the code for higher rankings, faster performance, and more organic leads.",
            url: "https://clovo-solutions.com/seo-website-development",
            areaServed: [
              { "@type": "Country", name: "Cyprus" },
              { "@type": "City", name: "Limassol" },
              { "@type": "City", name: "Nicosia" },
            ],
            serviceType: [
              "SEO Website Development",
              "Technical SEO",
              "Web Design",
              "Search Engine Optimization",
            ],
            priceRange: "€€",
          }),
        }}
      />
    </article>
  );
}
