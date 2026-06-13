"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";

const projects = [
  {
    title: "Davtian Dental Clinic",
    image: "/dental.jpg",
    tags: ["Web Development", "SEO", "Booking System"],
    fact: "Booking system included",
    location: "Limassol",
    href: "https://mariam-davtian-clinic.vercel.app/",
  },
  {
    title: "Liva Architectural Studio",
    image: "/liva-studio.png",
    tags: ["Web Development", "Local SEO"],
    fact: "Live at liva-studio.com",
    location: "Larnaca",
    href: "https://liva-studio.com/",
  },
  {
    title: "Milkbar Café · Kitchen · Bar",
    image: "/milkbar.png",
    tags: ["Web Development", "Local SEO"],
    fact: "Local SEO optimised",
    location: "Limassol",
    href: "https://milkbar-lilac.vercel.app/",
  },
  {
    title: "La Veranda Restaurant",
    image: "/la-veranda.png",
    tags: ["Web Development", "Local SEO"],
    fact: "Local SEO optimised",
    location: "Limassol",
    href: "https://la-veranda.vercel.app",
  },
  {
    title: "Auto Cyprus Car Dealership",
    image: "/auto-cyprus.png",
    tags: ["Web Development", "Local SEO"],
    fact: "Local SEO optimised",
    location: "Limassol",
    href: "https://auto-cyprus.vercel.app",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* Aligns the carousel's left edge with the max-w-7xl (80rem) content column,
   while letting cards bleed to the viewport's right edge. */
const trackPadding =
  "pl-6 pr-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]";
const trackSnapPadding =
  "scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))]";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) return;
    const first = cards[0].offsetLeft;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - first - track.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });
  };

  const atStart = active === 0;
  const atEnd = active === projects.length - 1;

  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.015]" />
      <div
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(1,217,87,0.025) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(1,217,87,0.02) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/15 bg-accent/[0.04] mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent opacity-60"
              aria-hidden
            />
            <span className="text-[11px] font-mono text-accent/60 tracking-[0.18em] uppercase">
              Our Work
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            Projects That Drive{" "}
            <span className="gradient-text">Results</span>
          </h2>

          <p className="text-base sm:text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
            Real systems we built for real businesses. Every project is measured
            by one thing: did it bring in more clients.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Our work"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden md:block w-16 lg:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden md:block w-16 lg:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <motion.div
          ref={trackRef}
          onScroll={handleScroll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease }}
          className={`flex gap-4 sm:gap-5 overflow-x-auto overscroll-x-contain touch-pan-x snap-x snap-mandatory pb-2 ${trackPadding} ${trackSnapPadding} [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
        >
          {projects.map((project, i) => {
            // Only link out to real production domains — vercel.app previews
            // read as demos and leak visitors mid-funnel.
            const isLive = !project.href.includes("vercel.app");
            const cardClass = `group relative flex-none snap-start w-[min(84vw,340px)] sm:w-[400px] lg:w-[420px] rounded-2xl border border-white/[0.04] bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-accent/20 block ${
              isLive ? "cursor-pointer" : "cursor-default"
            }`;

            const cardInner = (
              <>
                {/* Screenshot area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-800">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(1,217,87,${
                        0.03 + i * 0.008
                      }) 0%, rgba(5,5,5,0.95) 60%, rgba(10,10,10,1) 100%)`,
                    }}
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 84vw, 420px"
                  />

                  {/* Faint grid inside screenshot area */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(1,217,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(1,217,87,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Green hover overlay */}
                  <div className="absolute inset-0 bg-accent/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Click indicator (appears on hover, live sites only) */}
                  {isLive && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/90 backdrop-blur-sm shadow-[0_0_30px_rgba(1,217,87,0.3)] scale-90 group-hover:scale-100 transition-transform duration-500">
                        <span className="text-dark-900 text-sm font-semibold">
                          View Project
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path
                            d="M1 7h12m0 0L8 2m5 5L8 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5">
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.15em] uppercase">
                    {project.location}
                  </span>
                  <h3 className="font-display text-base font-semibold text-white mt-1.5 mb-2 group-hover:text-accent/90 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="flex items-center gap-1.5 text-[11px] text-accent/70 mb-3">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 5.5l2 2L8 3"
                        stroke="#01D957"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {project.fact}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.04] text-[10px] font-mono text-white/25 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom border glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            );

            return isLive ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — view live site (${i + 1} of ${projects.length})`}
                className={cardClass}
              >
                {cardInner}
              </a>
            ) : (
              <div
                key={project.title}
                aria-label={`${project.title} (${i + 1} of ${projects.length})`}
                className={cardClass}
              >
                {cardInner}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls: counter / progress / arrows */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-8 sm:mt-10 flex items-center gap-5 sm:gap-8"
      >
        <span className="font-mono text-[11px] text-white/30 tracking-[0.18em] tabular-nums whitespace-nowrap">
          {String(active + 1).padStart(2, "0")}
          <span className="text-white/15"> / {String(projects.length).padStart(2, "0")}</span>
        </span>

        {/* Progress line */}
        <div className="relative flex-1 h-px bg-white/[0.06] overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent/40 to-accent transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(progress * 100, 4)}%` }}
          />
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={atStart}
            aria-label="Previous project"
            className="flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(1,217,87,0.12)] active:scale-95 disabled:opacity-25 disabled:pointer-events-none"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3m0 0l4-4M3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={atEnd}
            aria-label="Next project"
            className="flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(1,217,87,0.12)] active:scale-95 disabled:opacity-25 disabled:pointer-events-none"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-sm text-white/25 mb-6">
            Every project starts with a conversation about what you actually
            need.
          </p>
          <ContactCta className="group relative inline-flex items-center gap-2.5 px-9 py-[18px] bg-accent text-dark-900 font-semibold rounded-full text-[15px] transition-all duration-500 hover:shadow-[0_0_50px_rgba(1,217,87,0.25)] hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <span className="relative">Start Your Project</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="relative transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ContactCta>
        </motion.div>
      </div>
    </section>
  );
}
