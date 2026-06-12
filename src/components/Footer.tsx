"use client";

import Link from "next/link";
import Image from "next/image";

const GOOGLE_REVIEWS_URL = "https://share.google/IuXIVnXy9qrd0n1oe";
const WHATSAPP_URL = "https://wa.me/35797457001";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Booking Systems", href: "/#services" },
      { label: "Automations", href: "/#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Book a Call", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
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
            <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-6">
              We build digital systems that help you bring in clients
              consistently. From websites to bookings and automations,
              everything is designed to support your growth.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-mono text-white/60 tracking-[0.15em] uppercase mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-mono text-white/60 tracking-[0.15em] uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a
                  href="mailto:clovosolutions@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  clovosolutions@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+35797457001"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +357 97 457 001
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  WhatsApp →
                </a>
              </li>
              <li>Limassol, Cyprus</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Clovo Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              <span className="text-accent">★</span> 5.0 on Google
            </a>
            <Link
              href="/privacy"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
