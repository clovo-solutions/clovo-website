"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const faqs = [
  {
    q: "How much does a basic business website cost in Cyprus?",
    a: "A properly built business website in Cyprus typically starts around €2,000. That gets you a custom design, mobile-first development, SEO foundations, and fast hosting. If you're seeing quotes for €300 or €500, those are almost always template-based sites with minimal customisation and no real SEO work. They might look okay at first glance, but they rarely perform well on Google or convert visitors into actual enquiries.",
  },
  {
    q: "Why is there such a big price range for websites?",
    a: "Because \"a website\" can mean wildly different things. A 5-page brochure site for a local tradesperson is a very different project from a booking platform for a clinic with CRM integration and automated reminders. The price difference comes down to how many pages you need, how complex the functionality is, whether you need a booking system or e-commerce, how much custom design work is involved, and whether SEO and analytics are included. A good agency will break this down clearly before you commit.",
  },
  {
    q: "Is it worth paying more for a custom website?",
    a: "In most cases, yes. Template websites are cheaper upfront but they come with real limitations. They load slower because of bloated code, they look like a hundred other sites, they're harder to rank on Google, and they're difficult to customise as your business grows. A custom-built website costs more initially but performs better, converts better, and saves you from having to rebuild in a year or two when the template stops working for you.",
  },
  {
    q: "Do I have to pay for hosting and maintenance separately?",
    a: "Usually, yes. Hosting typically runs between €50 and €200 per year depending on the provider and server type. Maintenance (updates, security patches, small changes) is either billed monthly or included in a support plan. Some agencies bundle the first year of hosting into the project price. We include hosting setup and 30 days of post-launch support with every project, so you're covered from the start.",
  },
  {
    q: "How much does SEO cost on top of the website?",
    a: "If you work with us, technical SEO is built into the website price. That means your site launches with proper meta tags, structured data, sitemaps, fast load times, and mobile optimisation already in place. Ongoing SEO work like content creation, keyword targeting, and link building is a separate service and typically starts around €500 per month. But the technical foundation is always included because a website without it is basically invisible to Google.",
  },
  {
    q: "Can I start small and add features later?",
    a: "Absolutely. That's actually what we recommend for most businesses. Start with a strong foundation, a well-designed site with SEO and maybe a contact form, then add booking systems, CRM integration, or automation later as your needs grow. The key is making sure the initial build is done properly so that adding features later doesn't require a full rebuild. That's the difference between starting cheap and starting smart.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website takes about 2 to 3 weeks. More complex projects with booking systems, CRM integration, and multiple landing pages usually take 3 to 4 weeks. E-commerce builds can take longer depending on the number of products and integrations. We give you a clear timeline before any work starts and you can follow progress on a staging link throughout the build.",
  },
  {
    q: "What's the difference between a freelancer and an agency?",
    a: "Freelancers tend to be cheaper but they're often juggling multiple clients and may not have expertise across design, development, and SEO. Agencies cost more but typically deliver a more complete package with dedicated project management, broader skill sets, and ongoing support. We sit somewhere in between. Small enough to be responsive and personal, experienced enough to deliver the full package without cutting corners.",
  },
];

export default function WebsiteCostContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Hero / Intro */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Pricing Guide 2026
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Website Cost in Cyprus
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            If you&apos;re googling how much a website costs in Cyprus,
            you&apos;ve probably already noticed that the answers are all over
            the place. Some agencies quote €300, others quote €10,000, and
            nobody really explains why. That makes it nearly impossible to
            figure out what a reasonable budget actually looks like for your
            business.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            This page is our honest attempt to fix that. We&apos;re going to
            break down what websites actually cost in Cyprus in 2026, what
            drives the price up or down, what you should expect at each price
            point, and where most businesses end up overpaying or underspending.
            No vague ranges, no marketing fluff. Just real numbers from a team
            that builds these things every day.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We&apos;re{" "}
            <Link
              href="/"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              Clovo Solutions
            </Link>
            , a{" "}
            <Link
              href="/web-development-limassol"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              web development company based in Cyprus
            </Link>
            . We build conversion-focused websites for small and medium
            businesses. Here&apos;s what we&apos;ve learned about pricing in
            this market.
          </p>

          {/* CTA 1 */}
          <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
            Get a Free Quote for Your Project
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

        {/* Pricing Breakdown */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            The Real Numbers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Web Design Pricing in Cyprus: What to Expect
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            These are realistic prices based on what professional agencies in
            Cyprus are charging in 2026. Not the cheapest quotes you&apos;ll
            find, and not the most expensive. This is the range where you get
            quality work that actually performs.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Business Website
                  </h3>
                  <p className="text-xs font-mono text-accent/40 tracking-wider uppercase mt-1">
                    Most common for local businesses
                  </p>
                </div>
                <span className="font-display text-xl font-bold text-accent whitespace-nowrap">
                  €2,000 &ndash; €4,000
                </span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                This is the sweet spot for most small businesses in Cyprus.
                You get a custom-designed, mobile-first website with 5 to 10
                pages, proper SEO foundations, fast hosting, and a contact
                form or basic lead capture. It&apos;s enough to establish a
                credible online presence and start getting found on Google.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Custom design", "Mobile-first", "SEO setup", "5-10 pages", "Fast hosting", "Contact form"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.04] text-[11px] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-accent/10 bg-accent/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Website + Booking &amp; Lead Generation
                  </h3>
                  <p className="text-xs font-mono text-accent/50 tracking-wider uppercase mt-1">
                    Best ROI for service businesses
                  </p>
                </div>
                <span className="font-display text-xl font-bold text-accent whitespace-nowrap">
                  €4,000 &ndash; €6,000
                </span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                Everything in the business website plus systems that actually
                generate revenue. Online booking that syncs with your calendar,
                automated appointment reminders to cut no-shows, a CRM
                connection so you can track every lead, and an analytics
                dashboard to see where your clients are coming from. This is
                where the cost of a website in Cyprus starts paying for itself
                pretty quickly.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Everything above", "Booking system", "Calendar sync", "CRM integration", "Auto reminders", "Analytics"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent/[0.06] border border-accent/[0.08] text-[11px] text-accent/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Full Growth System
                  </h3>
                  <p className="text-xs font-mono text-white/30 tracking-wider uppercase mt-1">
                    For businesses scaling aggressively
                  </p>
                </div>
                <span className="font-display text-xl font-bold text-white/60 whitespace-nowrap">
                  €5,000+
                </span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A complete digital growth engine. Multiple keyword-targeted
                landing pages, advanced automation workflows, email follow-up
                sequences, A/B testing, conversion tracking, and a dedicated
                strategist doing monthly reporting and optimisation. This
                isn&apos;t a website anymore, it&apos;s a client acquisition
                system that runs on its own.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Everything above", "Landing pages", "Email automation", "A/B testing", "Monthly reporting", "Dedicated strategist"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    E-Commerce Website
                  </h3>
                  <p className="text-xs font-mono text-white/25 tracking-wider uppercase mt-1">
                    For online stores
                  </p>
                </div>
                <span className="font-display text-xl font-bold text-white/60 whitespace-nowrap">
                  €4,000 &ndash; €8,000+
                </span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                The cost depends heavily on how many products you&apos;re
                selling, which payment gateways you need, and how complex the
                checkout flow is. A simple shop with 20 products is very
                different from a multi-category store with inventory
                management, shipping calculations, and discount codes. We
                scope each e-commerce project individually because
                cookie-cutter pricing doesn&apos;t work here.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Product catalog", "Payment gateway", "Inventory mgmt", "Shipping", "Order management", "Custom checkout"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.04] text-[11px] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-white/25 mt-8 leading-relaxed">
            All our pricing is project-based with a fixed quote. No hourly
            billing, no surprise fees. 50% deposit to start, balance on
            completion. 30 days of post-launch support included with every
            project.
          </p>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* What Affects Cost */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Price Factors
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What Actually Drives the Cost of a Website in Cyprus
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            The reason quotes vary so much is that &quot;a website&quot; can
            mean completely different things. Here&apos;s what actually moves
            the price up or down:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Custom design vs. templates",
                desc: "A template-based website is faster and cheaper to produce. A custom design takes longer because it's built specifically for your brand, your audience, and your goals. Templates work for some businesses, but if you want to stand out in a competitive market, custom design is worth the investment. The price difference is typically €500 to €2,000.",
              },
              {
                title: "Number of pages and content",
                desc: "A 5-page brochure site costs less than a 15-page site with dedicated service pages, a blog setup, and keyword-targeted landing pages. More content means more design, more development, and more SEO work. But it also means more opportunities to rank on Google, so it's not just a cost, it's an investment in visibility.",
              },
              {
                title: "Functionality and integrations",
                desc: "A contact form is simple. A booking system with calendar sync, automated reminders, payment processing, and CRM integration is not. Every additional feature adds development time. The key is being honest about what you actually need now versus what you might need in six months. Build the essentials first, add complexity later.",
              },
              {
                title: "SEO preparation",
                desc: "A website built with proper SEO foundations (structured data, meta tags, fast load times, clean code, sitemaps) costs more than one thrown together without any thought for search engines. But the alternative is paying for SEO fixes later, which almost always costs more than doing it right from the start. We include technical SEO in every project because we think it's irresponsible not to.",
              },
              {
                title: "Multilingual requirements",
                desc: "Many Cyprus businesses need their site in English and Greek, sometimes Russian too. Each language needs to be properly structured for SEO with its own URLs, metadata, and hreflang tags. It's not just translation, it's duplication of the entire site architecture. Budget roughly 30 to 50% extra per additional language.",
              },
              {
                title: "Who builds it",
                desc: "A freelancer working from their living room charges less than a full-service agency. That's expected. The difference shows up in project management, breadth of skills, reliability, and ongoing support. We're a small team, which means you get the personal attention of a freelancer with the professionalism and skill range of an agency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-accent/10 transition-all duration-500"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* What You Get With Us */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What&apos;s Included
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What You Get When You Work With Clovo Solutions
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Pricing only makes sense when you know what&apos;s actually
            included. Here&apos;s what comes standard with every project we
            take on, regardless of which tier you choose:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Custom design tailored to your brand",
              "Mobile-first responsive development",
              "Technical SEO built into the code",
              "Fast hosting setup on Vercel",
              "SSL certificate (HTTPS)",
              "Google Search Console setup",
              "Google Analytics integration",
              "Sitemap and robots.txt generation",
              "Structured data (JSON-LD schema)",
              "Cookie consent banner (GDPR)",
              "30 days post-launch support",
              "Training on how to request updates",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <div className="w-5 h-5 rounded-full bg-accent/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5.5l2 2L8 3"
                      stroke="#01D957"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-white/40">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Cheap vs Right */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Real Talk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            The Real Cost of Going Cheap
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-6">
            We get it. When you&apos;re starting out or running on a tight
            budget, a €500 website sounds a lot more appealing than a €4,000
            one. But here&apos;s what we see happen over and over again:
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-6">
            The cheap site goes live. It looks kind of okay. But it loads
            slowly, Google can&apos;t index it properly, it doesn&apos;t
            appear in search results, it doesn&apos;t convert visitors, and
            within 6 to 12 months the business owner is back to square one,
            looking for someone to rebuild it properly. That &quot;cheap&quot;
            website ends up costing more than just doing it right the first
            time.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-6">
            We&apos;re not saying you need to spend €10,000. For most
            small businesses in Cyprus, a well-built site in the €2,000 to
            €4,000 range is more than enough to establish credibility, get
            found on Google, and start generating enquiries. The key is
            spending that money with someone who builds for performance, not
            just appearance.
          </p>
          <p className="text-white/40 text-base leading-relaxed">
            If you want to understand what that looks like technically,
            our{" "}
            <Link
              href="/seo-website-development"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              SEO website development
            </Link>{" "}
            page goes deeper into why the code behind your site matters just
            as much as how it looks.
          </p>
        </AnimatedSection>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* CTA 2 */}
        <AnimatedSection className="mb-16">
          <div className="p-8 rounded-2xl border border-accent/10 bg-accent/[0.02]">
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              Not sure what you need?
            </h3>
            <p className="text-sm text-white/35 leading-relaxed mb-6">
              Most of our clients don&apos;t know exactly what they need when
              they first reach out. That&apos;s completely fine. We offer a
              free 30-minute discovery call where we learn about your business,
              discuss your goals, and give you an honest recommendation with a
              clear price. No obligation, no pressure, no hard sell.
            </p>
            <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
              Book a Free Discovery Call
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

        {/* FAQ */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Common Questions About Website Costs in Cyprus
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
                Get an Honest Quote for Your Website
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Tell us what you need and we&apos;ll give you a clear, fixed
                price. No hourly billing, no hidden costs, no guessing. Just
                a straightforward number you can budget around.
              </p>
              <ContactCta className="inline-flex items-center justify-center text-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
                Get Your Free Quote
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
                30-minute call. No commitment. We&apos;ll be straight with
                you even if we&apos;re not the right fit.
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
              "Transparent website development pricing for businesses in Cyprus. Custom web design starting from €2,000 with SEO, hosting, and ongoing support included.",
            url: "https://clovo-solutions.com/website-cost-cyprus",
            areaServed: [
              { "@type": "Country", name: "Cyprus" },
              { "@type": "City", name: "Limassol" },
              { "@type": "City", name: "Nicosia" },
              { "@type": "City", name: "Paphos" },
            ],
            serviceType: [
              "Website Development",
              "Web Design",
              "SEO",
              "E-Commerce Development",
            ],
            priceRange: "€€",
          }),
        }}
      />
    </article>
  );
}
