"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCta from "@/components/ContactCta";

const faqs = [
  {
    q: "How much does a clinic website cost in Cyprus?",
    a: "A professional clinic website typically starts around €2,000 for a clean, SEO-ready site with service pages, a contact form, and Google Maps integration. If you need online booking with calendar sync and automated patient reminders, expect €4,000 to €6,000. Full systems with CRM, multi-practitioner scheduling, and analytics go higher. We give you a clear fixed quote before any work begins. You can see our full pricing breakdown on our website cost Cyprus page.",
  },
  {
    q: "Can patients book appointments directly through the website?",
    a: "Yes. That's actually one of the most common requests we get from clinic owners. We integrate online scheduling that lets patients pick a time slot, book instantly, and receive automatic confirmations via email or SMS. The system syncs with your Google Calendar or Outlook so you never get double-booked. Automated reminders go out before the appointment to reduce no-shows.",
  },
  {
    q: "How long does it take to build a clinic website?",
    a: "A standard clinic website with 5 to 10 pages takes about 2 to 3 weeks. If you need booking integration, multi-practitioner scheduling, and CRM setup, it's closer to 3 to 4 weeks. You get a staging link so you can follow progress throughout the build. No surprises at the end.",
  },
  {
    q: "Will my clinic website show up on Google?",
    a: "Every site we build includes technical SEO from the start. That means proper page structure, meta tags, structured data, fast load times, mobile optimisation, and XML sitemaps. For local search, we set up your Google Business Profile connection and add location-specific schema markup. Most of our clinic clients start appearing in local search results within a few weeks of launch.",
  },
  {
    q: "Do I need a separate website if I'm already on social media?",
    a: "Social media is great for awareness but it doesn't replace a website. You don't own your Facebook or Instagram page. The algorithm decides who sees your posts. A website is the one piece of digital real estate you fully control. It ranks on Google, it works 24/7, patients can book directly, and it builds credibility in a way a social profile never will. Most patients will Google your clinic before booking. If they find nothing, or find a slow outdated page, they'll book with someone else.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "The sites we build are managed by our team, which means you don't need to worry about technical updates, security, or maintenance. If you need content changes, like updating opening hours, adding a new practitioner, or changing service descriptions, you send us a message and we handle it. Most changes are done within 24 hours. This way you focus on running your practice and we keep your site running smoothly.",
  },
  {
    q: "What if I already have a website but it's not working?",
    a: "That's actually the situation for most clinic owners who contact us. They have a site that was built a few years ago, it loads slowly, it doesn't show up on Google, and it generates almost zero enquiries. We can either do a targeted redesign of the key sections or rebuild the whole thing from scratch depending on what makes sense. We'll be straight with you about which approach will actually get results.",
  },
  {
    q: "Do you work with all types of clinics?",
    a: "We've worked with physiotherapy clinics, dental practices, dermatology centres, wellness studios, psychology practices, and specialist medical offices. The specifics change but the core challenge is the same: patients need to find you, trust you, and book with minimal friction. We understand how that works for healthcare better than a general web agency would.",
  },
];

export default function ClinicsContent() {
  return (
    <article className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Healthcare &middot; Cyprus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Website Development for Clinics in Cyprus
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            Most clinic websites in Cyprus look like they were built five years
            ago. And honestly, a lot of them were. Slow pages, no online
            booking, no way for patients to schedule outside office hours, and
            invisible on Google. Meanwhile, the clinic down the road with a
            proper website is getting all the new patient enquiries.
          </p>
          <p className="text-white/45 text-lg leading-relaxed mb-6">
            If you run a clinic, medical practice, or healthcare business in
            Cyprus, your website should be doing two things: showing up when
            patients search for your services, and making it dead simple for
            them to book. That&apos;s it. Not fancy animations or stock photos
            of smiling doctors. Just a fast, credible site that converts
            visitors into patients.
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
              web development company in Cyprus
            </Link>{" "}
            that specialises in building clinic websites that actually generate
            appointments. Here&apos;s how we do it.
          </p>

          <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
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

        {/* What Clinics Need */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Medical Website Design That Brings Patients In
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            A clinic website has different needs than a regular business site.
            Patients are looking for specific information, they want to know if
            you treat their condition, and they want to book quickly without
            calling during lunch break. We build for all of that.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Online Appointment Booking",
                desc: "Patients pick a time, book instantly, and get automatic confirmations. No phone tag, no back-and-forth emails. The system syncs with your existing calendar (Google, Outlook, or iCal) and sends reminders before each appointment. Clinics we've worked with report a 40 to 70% drop in scheduling phone calls within the first month.",
              },
              {
                title: "Service Pages That Rank Locally",
                desc: 'Dedicated pages for each treatment or service you offer, written and structured so Google can connect them to the search terms patients actually use. "Physiotherapy Limassol," "Dentist Nicosia," "Dermatologist near me." Each page is optimised for one job: showing up when someone in your area needs what you do.',
              },
              {
                title: "Trust-Building Design",
                desc: 'Patients are making a healthcare decision. They need to trust you before they book. We design around that reality. Professional layouts, clear information about your team and qualifications, real testimonials, and a clean visual identity that says "we take this seriously." No generic stock photos, no cluttered pages.',
              },
              {
                title: "Mobile-First Experience",
                desc: "The majority of patients looking for a clinic in Cyprus are doing it from their phone. Usually while they're in pain or dealing with something urgent. Your site needs to load in under 2 seconds and make it obvious how to book or call within the first screen. We build mobile-first so the phone experience is the best experience, not an afterthought.",
              },
              {
                title: "Google Business Profile Integration",
                desc: "Your website and your Google Business Profile need to work together. We make sure your NAP details (name, address, phone) are consistent, your structured data matches your listing, and your site feeds authority back to your Google profile. This helps you appear in the local map pack when someone searches for clinics in your area.",
              },
              {
                title: "Multi-Practitioner Support",
                desc: "If your clinic has multiple doctors, therapists, or specialists, each one can have their own profile page and individual booking calendar. Patients can see who's available, read about their expertise, and book directly with the person they want to see. Everything stays organised on your end with a unified dashboard.",
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
            From First Call to Patients Booking Online
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            We know clinic owners are busy. The process is designed to take as
            little of your time as possible while making sure the end result
            actually works for your practice.
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Discovery Call (30 min, free)",
                desc: "We talk about your clinic, your patients, and what's not working with your current online presence. We'll ask about your services, your busiest channels, and where you're losing potential patients. By the end, you'll have a clear idea of what we'd build and what it would cost.",
              },
              {
                num: "02",
                title: "Site Structure & Design",
                desc: "We plan which pages you need based on your services and the keywords patients are searching. Then we design the layout, the booking flow, and the overall look. You approve everything before we start building. No surprises.",
              },
              {
                num: "03",
                title: "Build & Integrate",
                desc: "We develop the site, connect your booking system, set up calendar sync, configure automated reminders, and wire up analytics. You get a staging link to review in real time. Most builds take 2 to 4 weeks.",
              },
              {
                num: "04",
                title: "Launch & Monitor",
                desc: "We go live, submit your sitemap to Google, verify indexing, and start monitoring. Within the first few weeks you'll see real data on how patients are finding and using your new site. We include 30 days of post-launch support to fine-tune anything.",
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
            <ContactCta className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(1,217,87,0.35)] hover:scale-[1.02]">
              Book Your Free Discovery Call
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
            Why Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Why Clinics in Cyprus Choose Clovo
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                We understand the patient journey
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                A generic web agency builds you a nice-looking site. We build a
                site designed around how patients actually behave. They Google
                their symptoms, they compare clinics, they check reviews, and
                they want to book in under 60 seconds. Every element on your
                site is structured around that flow. If it doesn&apos;t help a
                patient book, it doesn&apos;t belong on the page.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Built on modern technology, not WordPress
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Most clinic websites in Cyprus are built on WordPress with a
                medical theme. They load slowly, they look like every other
                clinic site, and they&apos;re a maintenance headache. We build
                with Next.js, a framework used by companies like Nike and
                Netflix. The result is a site that loads in under 2 seconds,
                scores 95+ on Google PageSpeed, and is significantly easier for
                Google to crawl and rank.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                SEO is included, not extra
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                Every clinic website we build comes with{" "}
                <Link
                  href="/seo-website-development"
                  className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
                >
                  technical SEO
                </Link>{" "}
                as standard. Structured data for medical practices, local
                business schema, proper meta tags, XML sitemaps, and fast
                mobile-first code. Most agencies charge extra for this. We
                include it because a clinic website that doesn&apos;t show up on
                Google is pointless.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">
                Transparent pricing, no hourly billing
              </h3>
              <p className="text-white/40 text-base leading-relaxed">
                You get a{" "}
                <Link
                  href="/website-cost-cyprus"
                  className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
                >
                  clear fixed price
                </Link>{" "}
                before any work starts. No hourly rates, no surprise invoices,
                no scope creep. We quote the project, you approve it, we deliver
                it. Simple. You know exactly what you&apos;re paying and exactly
                what you&apos;re getting.
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
            Real Results From Clinic Websites We&apos;ve Built
          </h2>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <span className="inline-block text-[10px] font-mono text-accent/50 tracking-[0.15em] uppercase mb-4">
                Physiotherapy Clinic, Limassol
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                From phone-only bookings to 20+ online appointments per week
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                A busy physiotherapy practice was handling all appointments by
                phone. The receptionist was overwhelmed, patients calling
                outside hours were lost, and there was no way to track where new
                patients were coming from. We built a site with online booking,
                automated reminders, and local SEO targeting. Within the first
                month, online bookings passed 40 per week and scheduling phone
                calls dropped by 70%.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
                  <span className="text-accent font-display font-bold text-lg">
                    20+
                  </span>
                  <span className="text-accent/60 text-xs ml-2">
                    weekly online bookings
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
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* Pricing */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Clinic Website Pricing
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            Every clinic is different, but here are realistic ranges so you know
            what to budget before we even speak.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Clinic Brochure Website
                </h3>
                <p className="text-sm text-white/30">
                  Custom design, service pages, contact form, SEO, mobile-first
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €2,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-accent/10 bg-accent/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Clinic Website + Online Booking
                </h3>
                <p className="text-sm text-white/30">
                  Everything above plus scheduling, calendar sync, reminders,
                  analytics
                </p>
              </div>
              <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                From €4,000
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Multi-Practitioner Growth System
                </h3>
                <p className="text-sm text-white/30">
                  Full build with individual profiles, CRM, automation, ongoing
                  SEO
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

        {/* Clinic types */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Who This Is For
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Types of Clinics We Work With
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8">
            The specifics vary but the challenge is the same: patients need to
            find you, trust you, and book easily. We&apos;ve built websites for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Physiotherapy clinics",
              "Dental practices",
              "Dermatology centres",
              "Psychology and therapy practices",
              "Wellness and aesthetics clinics",
              "Specialist medical offices",
              "Paediatric clinics",
              "Chiropractic centres",
              "Ophthalmology practices",
              "General practitioner offices",
            ].map((type, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="w-5 h-5 rounded-full bg-accent/[0.08] flex items-center justify-center flex-shrink-0">
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
                <span className="text-sm text-white/40">{type}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* FAQ */}
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Questions About Clinic Websites in Cyprus
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
                Your Clinic Deserves a Website That Works as Hard as You Do
              </h2>
              <p className="text-white/35 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Book a free 30-minute call. We&apos;ll look at your current
                online presence, talk about where patients are finding you (and
                where they&apos;re not), and map out what a proper clinic
                website would look like for your practice. No commitment, no
                hard sell.
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
                We&apos;ll be honest about what you need, even if it&apos;s less
                than you think.
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
              "Website development for clinics and medical practices in Cyprus. Online booking integration, patient-focused design, local SEO, and healthcare website solutions.",
            url: "https://clovo-solutions.com/website-development-clinics-cyprus",
            areaServed: [
              { "@type": "Country", name: "Cyprus" },
              { "@type": "City", name: "Limassol" },
              { "@type": "City", name: "Nicosia" },
              { "@type": "City", name: "Paphos" },
            ],
            serviceType: [
              "Medical Website Design",
              "Clinic Website Development",
              "Healthcare Web Design",
              "Online Booking Integration",
            ],
            priceRange: "€€",
          }),
        }}
      />
    </article>
  );
}
