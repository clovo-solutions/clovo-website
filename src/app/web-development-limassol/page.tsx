import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevLimassolContent from "./WebDevLimassolContent";

export const metadata: Metadata = {
  title: "Website Development Company in Limassol",
  description:
    "Clovo Solutions builds high-converting websites for businesses in Limassol. Custom design, SEO, booking systems & CRM integration. Book a free strategy call.",
  alternates: {
    canonical: "https://clovo-solutions.com/web-development-limassol",
  },
  openGraph: {
    title: "Website Development Company in Limassol | Clovo Solutions",
    description:
      "Custom websites built to generate leads, not just look good. Web design, SEO, and business automation for Limassol businesses.",
    url: "https://clovo-solutions.com/web-development-limassol",
  },
};

export default function WebDevLimassolPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebDevLimassolContent />
      </main>
      <Footer />
    </>
  );
}
