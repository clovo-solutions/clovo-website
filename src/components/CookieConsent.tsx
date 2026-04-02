"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "clovo_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash immediately on load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
    // If you add analytics later, initialize them here:
    // e.g. initGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/[0.06] bg-dark-800/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_-8px_40px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-accent/[0.08] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-accent"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="6" cy="7" r="1" fill="currentColor" />
                  <circle cx="11" cy="6" r="1.25" fill="currentColor" />
                  <circle cx="8" cy="11" r="1" fill="currentColor" />
                  <circle cx="12" cy="10.5" r="0.75" fill="currentColor" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/50 leading-relaxed">
                  We use essential third-party services (fonts, booking tools)
                  that may process basic data. No tracking or advertising
                  cookies are used.{" "}
                  <Link
                    href="/privacy"
                    className="text-accent/60 hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm text-white/30 hover:text-white/50 rounded-lg hover:bg-white/[0.04] transition-all duration-300"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-5 py-2 text-sm font-semibold bg-accent text-dark-900 rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
