import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClinicsContent from "./ClinicsContent";

export const metadata: Metadata = {
  title: "Website Development for Clinics in Cyprus",
  description:
    "We build websites for clinics and medical practices in Cyprus. Online booking, patient enquiries, Google visibility. Built to bring patients through the door.",
  alternates: {
    canonical:
      "https://clovo-solutions.com/website-development-clinics-cyprus",
  },
  openGraph: {
    title: "Website Development for Clinics in Cyprus | Clovo Solutions",
    description:
      "Clinic websites that rank on Google and let patients book online. Custom medical website design for physiotherapists, dentists, and specialists across Cyprus.",
    url: "https://clovo-solutions.com/website-development-clinics-cyprus",
  },
};

export default function ClinicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ClinicsContent />
      </main>
      <Footer />
    </>
  );
}
