"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT } from "@/components/CookieConsent";

const GA_ID = "G-QFBCYC8NWF";

// ─── Type augment so TS knows about window.gtag ──────────────────────────────
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// ─── Conversion helpers — import these wherever you need them ─────────────────
export function trackLead(label = "Strategy Call Form") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "generate_lead", {
    event_category: "Contact",
    event_label: label,
  });
}

export function trackCTA(label = "Hero CTA") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "click_cta", {
    event_category: "Engagement",
    event_label: label,
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Returning visitors — already consented in a previous session
    const existing = localStorage.getItem("clovo_cookie_consent");
    if (existing === "accepted") {
      setHasConsent(true);
      return;
    }

    // New visitors — listen for consent granted in this session
    const handleConsent = () => {
      const updated = localStorage.getItem("clovo_cookie_consent");
      if (updated === "accepted") setHasConsent(true);
    };

    window.addEventListener(CONSENT_EVENT, handleConsent);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsent);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}