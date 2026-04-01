import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clovo Solutions | Digital Growth for Modern Businesses",
  description:
    "Clovo Solutions helps small-to-medium businesses build high-converting websites, automate bookings, and streamline client acquisition. Book a free strategy call today.",
  keywords: [
    "digital agency",
    "web development",
    "booking automation",
    "client acquisition",
    "business automation",
    "website design",
    "Clovo Solutions",
  ],
  openGraph: {
    title: "Clovo Solutions | Digital Growth for Modern Businesses",
    description:
      "Build high-converting websites, automate bookings, and grow your business on autopilot.",
    type: "website",
    locale: "en_US",
    siteName: "Clovo Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clovo Solutions | Digital Growth for Modern Businesses",
    description:
      "Build high-converting websites, automate bookings, and grow your business on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise-overlay bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
