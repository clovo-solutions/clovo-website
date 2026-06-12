"use client";

import AnimatedSection from "./AnimatedSection";

const GOOGLE_REVIEWS_URL = "https://share.google/IuXIVnXy9qrd0n1oe";

const testimonials = [
  {
    quote:
      "I needed a website for my small business but honestly had no clue where to begin. Clovo Solutions took care of everything and made the whole process feel really easy. The design turned out clean and modern. Exactly what I had in mind. Really happy with the result!",
    name: "Markos Christodoulou",
    role: "Small business owner",
    initials: "MC",
  },
  {
    quote:
      "I didn't really have a proper system before, just messages and spreadsheets. The new site made things much more professional, and people can actually sign up without me going back and forth with them. It's saved me a lot of time.",
    name: "Dr. Andreas Petrou",
    role: "Clinic — Cyprus",
    initials: "AP",
  },
  {
    quote:
      "I used to spend a lot of time going back and forth with clients just to schedule appointments. Now everything is more organized and runs automatically, which has made things much easier to manage.",
    name: "Anastasia B.",
    role: "Service business — Cyprus",
    initials: "AB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Trusted by <span className="gradient-text">Growing Businesses</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped scale.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.12} className="h-full">
              <div className="relative h-full p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-accent/10 transition-all duration-500 group flex flex-col">
                {/* Quote mark */}
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="mb-6 text-accent/15 group-hover:text-accent/25 transition-colors duration-300 flex-shrink-0"
                >
                  <path
                    d="M0 24V14.4C0 11.7333 0.533333 9.28 1.6 7.04C2.70667 4.76 4.16 2.88 5.96 1.4L10.44 4.2C9.08 5.48 8.01333 6.86667 7.24 8.36C6.50667 9.81333 6.09333 11.4 6 13.12H12V24H0ZM20 24V14.4C20 11.7333 20.5333 9.28 21.6 7.04C22.7067 4.76 24.16 2.88 25.96 1.4L30.44 4.2C29.08 5.48 28.0133 6.86667 27.24 8.36C26.5067 9.81333 26.0933 11.4 26 13.12H32V24H20Z"
                    fill="currentColor"
                  />
                </svg>

                <p className="text-white/45 text-sm leading-relaxed mb-8 flex-1">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-accent/[0.08] border border-accent/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-accent/60">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/25">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Google reviews link */}
        <AnimatedSection className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-accent">★</span> 5.0 on Google — read all our
            reviews →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
