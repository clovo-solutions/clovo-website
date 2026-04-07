import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoWebDevContent from "./SeoWebDevContent";

export const metadata: Metadata = {
  title: "SEO Website Development in Cyprus",
  description:
    "Websites built to rank and convert. Clovo Solutions combines web development with technical SEO so your site drives organic traffic and generates leads from day one.",
  alternates: {
    canonical: "https://clovo-solutions.com/seo-website-development",
  },
  openGraph: {
    title: "SEO Website Development in Cyprus | Clovo Solutions",
    description:
      "Custom websites with SEO built into the code — not bolted on after. Technical SEO, fast performance, and conversion-focused design for Cyprus businesses.",
    url: "https://clovo-solutions.com/seo-website-development",
  },
};

export default function SeoWebDevPage() {
  return (
    <>
      <Navbar />
      <main>
        <SeoWebDevContent />
      </main>
      <Footer />
    </>
  );
}
