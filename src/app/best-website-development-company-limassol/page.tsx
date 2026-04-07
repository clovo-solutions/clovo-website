import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BestLimassolContent from "./BestLimassolContent";

export const metadata: Metadata = {
  title: "Best Website Development Company Limassol",
  description:
    "Looking for the best web agency in Limassol? Clovo Solutions builds fast, SEO-optimised websites that generate leads. Modern code, transparent pricing, real results.",
  alternates: {
    canonical:
      "https://clovo-solutions.com/best-website-development-company-limassol",
  },
  openGraph: {
    title: "Best Website Development Company in Limassol | Clovo Solutions",
    description:
      "Custom websites built to rank and convert. Not templates. Not WordPress. Modern, fast, SEO-ready sites for Limassol businesses.",
    url: "https://clovo-solutions.com/best-website-development-company-limassol",
  },
};

export default function BestLimassolPage() {
  return (
    <>
      <Navbar />
      <main>
        <BestLimassolContent />
      </main>
      <Footer />
    </>
  );
}
