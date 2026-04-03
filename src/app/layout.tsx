import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BASE_URL = "https://clovo-solutions.com";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Clovo Solutions | Digital Growth for Modern Businesses",
    template: "%s | Clovo Solutions",
  },
  description:
    "Clovo Solutions helps small-to-medium businesses build high-converting websites, automate bookings, sync calendars, and streamline client acquisition. Book a free strategy call today.",
  keywords: [
    "digital agency",
    "web development",
    "web design",
    "booking automation",
    "client acquisition",
    "business automation",
    "website design",
    "booking system",
    "calendar sync",
    "lead generation",
    "small business website",
    "Clovo Solutions",
    "Cyprus digital agency",
  ],

  // Canonical
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Clovo Solutions",
    title: "Clovo Solutions | Digital Growth for Modern Businesses",
    description:
      "Build high-converting websites, automate bookings, and grow your business on autopilot. Book a free strategy call.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clovo Solutions - Digital Growth for Modern Businesses",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Clovo Solutions | Digital Growth for Modern Businesses",
    description:
      "Build high-converting websites, automate bookings, and grow your business on autopilot.",
    images: ["/og-image.png"],
    // creator: "@clovosolutions", // Uncomment when you have a Twitter handle
  },

  // Favicons & App Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/manifest.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification — fill these in after registering
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   // yandex: "YOUR_YANDEX_CODE",
  // },

  // Additional
  category: "technology",
  creator: "Clovo Solutions",
  publisher: "Clovo Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark overflow-x-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <body className="noise-overlay bg-dark-900 text-white antialiased overflow-x-hidden">
        <StructuredData />
        <GoogleAnalytics />
        <div className="overflow-hidden w-full">{children}</div>
        <CookieConsent />
      </body>
    </html>
  );
}
