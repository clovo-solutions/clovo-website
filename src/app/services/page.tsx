import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesDetail from "./ServicesDetail";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From high-converting websites to automated booking systems and client acquisition — explore the full range of digital growth services at Clovo Solutions.",
  alternates: {
    canonical: "https://clovo-solutions.com/services",
  },
  openGraph: {
    title: "Our Services | Clovo Solutions",
    description:
      "Websites, booking systems, calendar sync, and automated client acquisition — everything your business needs to grow.",
    url: "https://clovo-solutions.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesDetail />
      </main>
      <Footer />
    </>
  );
}
