"use client";

import { useEffect, useState } from "react";
import { trackCTA } from "./GoogleAnalytics";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [hiddenByContact, setHiddenByContact] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const contactEl = document.getElementById("contact");

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;

        // Show once the hero has scrolled out of view
        if (heroEl) {
          setVisible(y > heroEl.offsetTop + heroEl.offsetHeight - 80);
        }

        // Hide while the contact section is on screen
        if (contactEl) {
          setHiddenByContact(y + window.innerHeight > contactEl.offsetTop + 100);
        }

        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !hiddenByContact;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCTA("Sticky Mobile CTA");
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", "/#contact");
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-dark-900/90 backdrop-blur-xl border-t border-white/[0.06] transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a
        href="/#contact"
        onClick={handleClick}
        tabIndex={show ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 py-3.5 bg-accent text-dark-900 font-semibold rounded-full text-base shadow-[0_0_30px_rgba(1,217,87,0.2)] active:scale-[0.98] transition-transform"
      >
        Book a Free Call
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M1 7h12m0 0L8 2m5 5L8 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
