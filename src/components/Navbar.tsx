"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "services", label: "Services", num: "01" },
  { href: "how-it-works", label: "How It Works", num: "02" },
  { href: "benefits", label: "Benefits", num: "03" },
  { href: "pricing", label: "Pricing", num: "04" },
  { href: "testimonials", label: "Testimonials", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `/#${sectionId}`);
      }
    } else {
      router.push("/");
      const waitAndScroll = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", `/#${sectionId}`);
        } else {
          requestAnimationFrame(waitAndScroll);
        }
      };
      setTimeout(waitAndScroll, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "/#contact");
      }
    } else {
      router.push("/");
      const waitAndScroll = () => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", "/#contact");
        } else {
          requestAnimationFrame(waitAndScroll);
        }
      };
      setTimeout(waitAndScroll, 100);
    }
  };

  return (
    <>
      {/* iOS status bar background fill */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[env(safe-area-inset-top)] bg-[#050505]"
        aria-hidden="true"
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${
          scrolled
            ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group relative z-[60]"
            aria-label="Clovo Solutions — home"
          >
            <div className="h-8 md:h-10 flex items-center overflow-visible">
              <Image
                src="/logo.svg"
                alt=""
                width={64}
                height={64}
                className="h-full w-full transition-transform duration-300 group-hover:scale-[1.1]"
                priority
                aria-hidden="true"
              />
            </div>
            <span className="font-display font-semibold text-xl md:text-2xl tracking-tight text-white">
              Clovo
              <span className="text-accent" aria-hidden="true">
                .
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              onClick={handleCtaClick}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-dark-900 text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,217,87,0.3)]"
            >
              Book a Call
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7h12m0 0L8 2m5 5L8 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl z-[60]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-4" aria-hidden="true">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 7, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute top-0 left-0 h-[1.5px] bg-white/80 block origin-center"
                  style={{ width: "100%" }}
                />
                <motion.span
                  animate={
                    mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute top-[7px] left-0 w-3/4 h-[1.5px] bg-white/80 block"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -7, width: "100%" }
                      : { rotate: 0, y: 0, width: "60%" }
                  }
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute bottom-0 left-0 h-[1.5px] bg-white/80 block origin-center"
                  style={{ width: "60%" }}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-xs bg-dark-800/98 backdrop-blur-2xl border-l border-white/[0.04] md:hidden flex flex-col"
            >
              {/* Decorative accent line */}
              <div
                className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-accent/20 via-accent/5 to-transparent"
                aria-hidden="true"
              />

              {/* Drawer header */}
              <div className="h-20 flex-shrink-0 flex items-center justify-end px-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 4L4 12M4 4l8 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{
                        delay: 0.05 + i * 0.06,
                        duration: 0.4,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                    >
                      <a
                        href={`/#${link.href}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-center gap-4 py-4 border-b border-white/[0.03] transition-colors"
                      >
                        <span
                          className="font-mono text-[10px] text-accent/60 group-hover:text-accent transition-colors tracking-wider"
                          aria-hidden="true"
                        >
                          {link.num}
                        </span>
                        <span className="text-lg font-display font-medium text-white/70 group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                          className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-300"
                        >
                          <path
                            d="M2 6h8m0 0L7 3m3 3L7 9"
                            stroke="#01D957"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.4,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="mt-10"
                >
                  <a
                    href="/#contact"
                    onClick={handleCtaClick}
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-accent text-dark-900 text-base font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,217,87,0.3)]"
                  >
                    Book a Call
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Drawer footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-8 pb-10 flex-shrink-0"
              >
                <div className="pt-6 border-t border-white/[0.04]">
                  <p className="text-[11px] text-white/45 font-mono tracking-wider">
                    © 2026 Clovo Solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
