import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDesignLimassolContent from "./WebDesignLimassolContent";

export const metadata: Metadata = {
  title: "Web Design Limassol | Modern Websites That Convert | Clovo Solutions",
  description:
    "Leading web design agency in Limassol, Cyprus. We build fast, modern, mobile-first websites that turn visitors into customers. Get a free website audit today.",
  keywords: [
    "web design Limassol",
    "web designers Limassol",
    "website design Cyprus",
    "web development Limassol",
    "Limassol web agency",
  ],
  alternates: {
    canonical: "https://clovo-solutions.com/web-design-limassol",
  },
  openGraph: {
    title: "Web Design Limassol | Clovo Solutions",
    description:
      "Premium web design in Limassol. Fast, conversion-focused websites for businesses that want to grow online.",
    url: "https://clovo-solutions.com/web-design-limassol",
    siteName: "Clovo Solutions",
    locale: "en_CY",
    type: "website",
  },
};

export default function WebDesignLimassolPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebDesignLimassolContent />
      </main>
      <Footer />
    </>
  );
}
