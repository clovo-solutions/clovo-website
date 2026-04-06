import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDesignCyprusContent from "./WebDesignCyprusContent";

export const metadata: Metadata = {
  title:
    "Web Design Cyprus | Websites That Actually Bring You Clients | Clovo Solutions",
  description:
    "Web design agency in Cyprus building fast, modern websites for businesses that want more clients. No templates. No fluff. Just sites that convert. Free audit available.",
  keywords: [
    "web design Cyprus",
    "website design Cyprus",
    "web designers Cyprus",
    "Cyprus web agency",
    "website development Cyprus",
  ],
  alternates: {
    canonical: "https://clovo-solutions.com/web-design-cyprus",
  },
  openGraph: {
    title: "Web Design Cyprus | Clovo Solutions",
    description:
      "We build websites for Cyprus businesses that actually generate leads. Modern design, fast performance, SEO built in from day one.",
    url: "https://clovo-solutions.com/web-design-cyprus",
    siteName: "Clovo Solutions",
    locale: "en_CY",
    type: "website",
  },
};

export default function WebDesignCyprusPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebDesignCyprusContent />
      </main>
      <Footer />
    </>
  );
}
