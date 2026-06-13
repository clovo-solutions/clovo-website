"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const faqs = [
  {
    q: "How do I choose the best website development company in Limassol?",
    a: "Look at three things. First, their own website. If it's slow, poorly designed, or doesn't rank on Google, that tells you everything. Second, ask what technology they build with. If the answer is WordPress with a premium theme, that limits how fast, secure, and SEO-friendly your site can be. Third, ask for specific results. Not vague testimonials, but actual numbers. How much did traffic increase? How many leads came through the site? Any good agency should be able to answer that.",
  },
  {
    q: "How much does a website cost in Limassol?",
    a: "A properly built business website in Limassol starts around €2,000. That gets you custom design, mobile-first development, SEO foundations, and fast hosting. Sites with booking systems and CRM integration typically run €4,000 to €5,000. Full growth systems with automation and ongoing SEO go beyond that. We have a detailed breakdown on our website cost Cyprus page if you want the full picture.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website takes 2 to 3 weeks. More complex builds with booking systems, CRM integration, and multiple landing pages usually take 3 to 4 weeks. We give you a clear timeline before work starts, and you can follow progress on a staging link throughout the build.",
  },
  {
    q: "Do you only work with businesses in Limassol?",
    a: "Limassol is our home base and where most of our clients are, but we work with businesses across Cyprus and internationally. The process is entirely remote-friendly. We've built sites for clients in Nicosia, Paphos, and overseas without any issues. If we can get on a video call, we can work together.",
  },
  {
    q: "What technology do you use?",
    a: "We build with Next.js and React. These are the same frameworks used by companies like Netflix, Nike, and Notion. They produce faster, more secure, and significantly more SEO-friendly websites than WordPress or page builders. Our average PageSpeed score is 95+. That matters because Google uses page speed as a ranking factor.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every site we build includes technical SEO from day one. That means proper meta tags, structured data, XML sitemaps, fast load times, mobile optimisation, and clean code that Google can crawl easily. Those are the foundations. For competitive keyword targeting and ongoing SEO, we offer that as part of our Growth and Scale packages.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Every project includes 30 days of post-launch support at no extra cost. After that, we offer monthly support plans for ongoing updates, optimisation, and maintenance. Most of our clients stay with us long-term because the relationship keeps delivering value.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. A lot of our clients come to us with an existing site that looks dated or isn't performing. We can either redesign specific sections or do a full rebuild depending on what makes sense for your situation and budget. We'll be honest about which approach will get you the best results.",
  },
];

export default function BestLimassolContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Limassol, Cyprus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Best Website Development Company in Limassol
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            There are plenty of web agencies in Limassol. You&apos;ve probably
            looked at a few already. Most of them say the same things:
            &quot;professional team,&quot; &quot;creative solutions,&quot;
            &quot;beautiful designs.&quot; And that&apos;s fine. But when
            you&apos;re spending real money on a website for your business, you
            need more than nice words. You need a site that actually shows up on
            Google, loads fast on phones, and turns visitors into paying
            clients.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            That&apos;s where we come in. Clovo Solutions is a{" "}
            <Link
              href="/web-development-limassol"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              website development company in Limassol
            </Link>{" "}
            that builds websites differently. We don&apos;t use WordPress
            templates. We don&apos;t outsource the work. We build custom-coded,
            conversion-focused websites using the same technology stack behind
            Netflix and Notion. And every site comes with SEO baked into the
            code, not bolted on later.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            If you&apos;re searching for the best web agency in Limassol,
            here&apos;s what we think you should be looking for, and why we
            believe we fit the bill.
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

        {/* What to Look For */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            How to Choose
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What Makes a Web Agency in Limassol Actually Good
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            Before you look at portfolios or compare prices, there are a few
            things worth knowing about how the web development market in
            Limassol works. Not all agencies are built the same, and the
            differences matter more than most people realise.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "They build custom, not from templates",
                desc: "A lot of agencies in Limassol take a WordPress theme, change the colours and fonts, add your content, and call it custom. It's not. It's a reskin. A genuinely custom website is designed around your specific business, your audience, and the actions you want visitors to take. It loads faster, ranks better, and doesn't look like 50 other sites in your industry.",
              },
              {
                title: "Their own site actually performs well",
                desc: "This one's easy to check. Open the agency's own website on your phone. Is it fast? Is it easy to navigate? Does it rank for anything on Google? If their own site is slow, clunky, or nowhere to be found in search results, why would yours be any different? An agency's website is their best work. If that's not impressive, walk away.",
              },
              {
                title: "They talk about results, not just design",
                desc: "Good design matters, but it's not the point. The point is whether the website generates business. The best web agencies in Limassol can tell you how their work performed after launch. How much traffic increased, how many leads came through, how the booking rate changed. If all they show you is pretty screenshots with no outcomes attached, that's a red flag.",
              },
              {
                title: "SEO is included, not an upsell",
                desc: "Technical SEO should be standard in every website build in 2026. If an agency treats it as an add-on or a separate service, that means they're building sites that Google can't properly index out of the box. That's not acceptable. Every site should launch with proper metadata, structured data, sitemaps, fast load times, and mobile optimisation as a baseline.",
              },
              {
                title: "They're transparent about pricing",
                desc: "\"Contact us for a quote\" with no pricing guidance at all is frustrating and usually means they're figuring it out as they go. A good agency can give you realistic ranges upfront so you know whether it fits your budget before wasting anyone's time. We publish our pricing openly because we think that's how business should work.",
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

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* What We Do */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What We Build for Limassol Businesses
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We focus on a few things and do them really well. No generic
            packages, no one-size-fits-all templates. Every project is built
            around your specific goals.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Conversion-Focused Websites",
                desc: "Custom-designed, mobile-first websites built to generate leads and enquiries. Not just a nice-looking page, but a system designed around how your specific audience behaves. Clear value propositions, strategic CTA placement, fast load times, and trust signals where they matter.",
              },
              {
                title: "SEO-Ready from Launch",
                desc: "Every site we build includes technical SEO as standard. Semantic HTML, structured data, proper URL hierarchy, XML sitemaps, fast code, and mobile-first development. Your site is ready for Google the day it goes live. For deeper keyword targeting and ongoing optimisation, check out our SEO website development approach.",
              },
              {
                title: "Booking & Scheduling Systems",
                desc: "Online booking that syncs with your Google Calendar or Outlook, sends automatic confirmations to clients, and reduces no-shows with built-in reminders. Your clients can schedule appointments 24/7 without you lifting a finger.",
              },
              {
                title: "CRM & Analytics Integration",
                desc: "We connect your website to your CRM so every lead is tracked from first click to conversion. Plus Google Analytics and Search Console setup so you can see exactly where your traffic and enquiries are coming from. No guesswork, just data.",
              },
              {
                title: "Ongoing Growth & Optimisation",
                desc: "Launch isn't the end, it's the starting line. We offer monthly support plans that include performance monitoring, content updates, A/B testing, and continuous optimisation based on real visitor data. Your site gets better over time, not stale.",
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

        {/* Process */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Our Process: Simple, Fast, No Surprises
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We keep things straightforward. No months-long timelines, no endless
            revision loops, no scope creep. Here&apos;s how a typical project
            works:
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Free Discovery Call",
                desc: "30 minutes. We learn about your business, discuss your goals, and figure out what you actually need. By the end, you'll have a clear idea of the approach, timeline, and cost. No obligation.",
              },
              {
                num: "02",
                title: "Strategy & Design",
                desc: "We map out the site structure based on your goals and the keywords your audience is searching. Then we design the look and feel. You review everything and approve before we touch any code.",
              },
              {
                num: "03",
                title: "Build & Integrate",
                desc: "We develop the site with clean, modern code. Booking systems, CRM, analytics, SEO foundations, everything gets built and tested. You follow along on a staging link throughout so there are no surprises at the end.",
              },
              {
                num: "04",
                title: "Launch & Grow",
                desc: "We handle DNS, SSL, hosting, and submit your sitemap to Google. Then we monitor performance, track keyword rankings, and make refinements based on real data. Your site is live and working within 2 to 4 weeks of starting.",
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

        {/* Why Us */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Why Clovo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Why We Think We&apos;re the Right Choice
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-6">
            We&apos;re not going to tell you we&apos;re &quot;the best&quot; and
            leave it at that. Instead, here&apos;s what we actually do
            differently from the other top web agencies in Limassol, and you can
            decide for yourself.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We don&apos;t do WordPress
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most agencies in Limassol are still building on WordPress with
                pre-made themes. We build with Next.js and React. The difference
                isn&apos;t subtle. Our sites load 3 to 5 times faster, score 95+
                on Google PageSpeed consistently, and produce cleaner HTML that
                search engines can parse properly. It&apos;s a meaningful
                advantage that directly impacts your rankings and your bounce
                rate.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We build complete systems, not just pages
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                A website on its own doesn&apos;t do much. It needs to connect
                to your calendar, your CRM, your analytics, your email. We build
                all of that into one integrated system so everything talks to
                everything else. Leads get tracked, appointments get confirmed,
                no-shows get reduced, and you can see exactly where every client
                came from. That&apos;s what separates a website from a growth
                tool.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We&apos;re transparent about money
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Our{" "}
                <Link
                  href="/website-cost-cyprus"
                  className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
                >
                  website pricing
                </Link>{" "}
                is published openly. Business sites start from €2,000. Sites
                with booking and CRM start from €4,000. Full growth systems are
                custom quoted. Fixed project pricing, 50% deposit, balance on
                completion, 30 days of post-launch support included. No hourly
                billing, no surprise invoices, no awkward conversations about
                scope.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We care about what happens after launch
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                A lot of agencies in Limassol hand over the site and disappear.
                We think launch day is where the real work begins. We monitor
                performance, track how visitors are using the site, identify
                where people drop off, and continuously improve based on real
                data. Your website should get better over time, not sit there
                unchanged for two years.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Case Studies */}
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
                Physiotherapy Clinic, Limassol
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                Zero to 20+ online bookings per week
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A physio clinic in Limassol had an old single-page website with
                no booking capability. Patients could only book by phone during
                office hours. We built a conversion-focused site with integrated
                online scheduling, automated reminders, and local SEO targeting.
                Within the first month, they were getting over 20 online
                bookings per week and phone calls for scheduling dropped by 70%.
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
                    fewer phone calls
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                Consulting Firm, Limassol
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                3x qualified enquiries in 6 weeks
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A professional services firm had a dated website that generated
                almost no inbound leads. Everything came through referrals and
                cold outreach. We redesigned the site around their key services,
                added clear CTAs and CRM integration, and optimised for the
                search terms their target clients were actually using. Qualified
                enquiries tripled within six weeks of going live.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    3x
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    more leads
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    6 wks
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

        {/* Pricing */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What It Costs to Work With Us
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            We keep pricing simple and transparent. For a full breakdown of what
            affects{" "}
            <Link
              href="/website-cost-cyprus"
              className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
            >
              the cost of a website in Cyprus
            </Link>
            , we have a dedicated page for that. Here&apos;s the short version:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Business Website
                </h3>
                <p className="text-sm text-white/30">
                  Custom design, SEO, mobile-first, fast hosting
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €2,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-accent/10 bg-accent/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Website + Booking &amp; CRM
                </h3>
                <p className="text-sm text-white/30">
                  Everything above plus scheduling, reminders, analytics
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €4,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Full Growth System
                </h3>
                <p className="text-sm text-white/30">
                  Automation, ongoing SEO, monthly reporting, strategist
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-white/60 whitespace-nowrap">
                Custom
              </span>
            </div>
          </div>

          <p className="text-sm text-white/25 mt-6 leading-relaxed">
            Fixed project pricing. 50% deposit, balance on completion. 30 days
            of post-launch support included.
          </p>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* FAQ */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Questions About Hiring a Web Agency in Limassol
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

        {/* Final CTA */}
        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-white/[0.04] bg-white/[0.01] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                See If We&apos;re the Right Fit
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Book a free 30-minute call. No pitch, no pressure. We&apos;ll
                talk about your business, look at what you have now, and tell
                you honestly whether we can help and what it would cost. If
                we&apos;re not the right fit, we&apos;ll say so.
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
                Honest advice, even if we&apos;re not the right agency for you.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Clovo Solutions",
            description:
              "Website development company in Limassol, Cyprus. Custom web design, SEO, booking systems, CRM integration, and business automation for local businesses.",
            url: "https://clovo-solutions.com/best-website-development-company-limassol",
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
