"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Booking Systems", href: "#services" },
      { label: "Automations", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Book a Call", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.svg"
                alt="Clovo Solutions"
                width={32}
                height={32}
              />
              <span className="font-display font-semibold text-lg tracking-tight text-white">
                Clovo<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-white/25 leading-relaxed max-w-xs mb-6">
              We build digital systems that bring you clients on autopilot.
              Websites, bookings, automations — everything a modern business
              needs to grow.
            </p>
            <div className="flex items-center gap-3">
              {/* Social icons placeholder */}
              {["X", "Li", "Ig"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/25 hover:text-accent hover:border-accent/20 transition-all duration-300 text-xs font-mono"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/25 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} Clovo Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/15 hover:text-white/30 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/15 hover:text-white/30 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
