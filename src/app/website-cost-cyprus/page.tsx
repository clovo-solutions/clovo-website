import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebsiteCostContent from "./WebsiteCostContent";

export const metadata: Metadata = {
  title: "Website Cost in Cyprus (2026 Guide)",
  description:
    "How much does a website cost in Cyprus? Honest pricing from €1,500 to €6,000+. No hidden fees. See what affects the price and what you actually get.",
  alternates: {
    canonical: "https://clovo-solutions.com/website-cost-cyprus",
  },
  openGraph: {
    title: "Website Cost in Cyprus (2026 Guide) | Clovo Solutions",
    description:
      "Transparent web design pricing for Cyprus businesses. From €1,500 for a business site to €6,000+ for full automation. See the real breakdown.",
    url: "https://clovo-solutions.com/website-cost-cyprus",
  },
};

export default function WebsiteCostCyprusPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebsiteCostContent />
      </main>
      <Footer />
    </>
  );
}
