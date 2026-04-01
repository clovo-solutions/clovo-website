import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesDetail from "./ServicesDetail";

export const metadata: Metadata = {
  title: "Our Services | Clovo Solutions",
  description:
    "From high-converting websites to automated booking systems and client acquisition — explore the full range of digital growth services at Clovo Solutions.",
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
