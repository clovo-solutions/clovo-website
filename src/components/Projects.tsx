"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";

const projects = [
  {
    title: "Physiotherapy Clinic",
    image: "/physio.jpg",
    tags: ["Web Development", "Booking System", "Local SEO"],
    stats: { label: "", value: "" },
    location: "Limassol",
    href: "https://liasides-physio.vercel.app/",
  },
  {
    title: "Davtain Dental Clinic.",
    image: "/dental.jpg",
    tags: ["Web Development", "SEO", "Booking System"],
    stats: { label: "", value: "" },
    location: "Limassol",
    href: "https://mariam-davtian-clinic.vercel.app/",
  },
  {
    title: "Boutique Hotel",
    image: "/projects/hotel.png",
    tags: ["Web Development", "Local SEO"],
    stats: { label: "", value: "Coming Soon" },
    // stats: { label: "Direct bookings", value: "+150%" },
    location: "Paphos",
    href: "#",
  },
//   {
//     title: "Wellness Centre Growth System",
//     image: "/projects/wellness.png",
//     tags: ["Web Design", "CRM", "Booking System"],
//     stats: { label: "Patient enquiries", value: "3x" },
//     location: "Nicosia",
//     href: "#",
//   },
//   {
//     title: "Consulting Firm Lead Engine",
//     image: "/projects/consulting.png",
//     tags: ["Automation", "Lead Generation", "Analytics"],
//     stats: { label: "Less ad spend", value: "40%" },
//     location: "Limassol",
//     href: "#",
//   },
//   {
//     title: "Dental Practice Online System",
//     image: "/projects/dental.png",
//     tags: ["Web Development", "Booking System", "Local SEO"],
//     stats: { label: "Online bookings/wk", value: "30+" },
//     location: "Larnaca",
//     href: "#",
//   },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
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
          className="text-center mb-16 sm:mb-20"
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease,
              }}
              className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-accent/20 cursor-pointer block"
            >
              {/* Screenshot area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-800">
                {/* Placeholder gradient (replace with real images) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(1,217,87,${
                      0.03 + i * 0.008
                    }) 0%, rgba(5,5,5,0.95) 60%, rgba(10,10,10,1) 100%)`,
                  }}
                />

{project.image.startsWith("/projects/") ? (
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(135deg, rgba(1,217,87,0.03) 0%, rgba(5,5,5,0.95) 60%, rgba(10,10,10,1) 100%)",
    }}
  />
) : (
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
)}


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

                {/* Click indicator (appears on hover) */}
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

                {/* Stat badge (top right of image) */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-900/80 backdrop-blur-sm border border-white/[0.06]">
                  <span className="text-accent font-display font-bold text-xs leading-none">
                    {project.stats.value}
                  </span>
                  <span className="text-white/30 text-[8px] font-mono uppercase tracking-wider">
                    {project.stats.label}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Location + title */}
                <span className="text-[10px] font-mono text-white/20 tracking-[0.15em] uppercase">
                  {project.location}
                </span>
                <h3 className="font-display text-base font-semibold text-white mt-1.5 mb-3 group-hover:text-accent/90 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tags */}
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
            </motion.a>
          ))}
        </div>

        {/* CTA */}
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