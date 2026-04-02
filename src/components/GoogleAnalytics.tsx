"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-QFBCYC8NWF";

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("clovo_cookie_consent");
    if (consent === "accepted") {
      setHasConsent(true);
    }

    // Listen for consent changes (when user clicks Accept)
    const handleStorage = () => {
      const updated = localStorage.getItem("clovo_cookie_consent");
      if (updated === "accepted") {
        setHasConsent(true);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!hasConsent) {
    return null;
  }

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
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
