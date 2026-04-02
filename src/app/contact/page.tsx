import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Clovo Solutions. Book a free 30-minute strategy call or send us a message — we'd love to hear about your project and goals.",
  alternates: {
    canonical: "https://clovo-solutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | Clovo Solutions",
    description:
      "Book a free strategy call or send us a message. Let's talk about growing your business.",
    url: "https://clovo-solutions.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
