import Navbar from "@/components/Navbar";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import LocalTrust from "@/components/LocalTrust";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SeoPages from "@/components/SeoPages";
import Footer from "@/components/Footer";
// REMOVED FROM HOMEPAGE — moved to /services (reusable there if needed):
// import SystemArchitecture from "@/components/SystemArchitecture";
// import Benefits from "@/components/Benefits";
// import ClovoCarousel from "@/components/ClovoCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyMobileCTA />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <Services />
        <Projects />
        <HowItWorks />
        <LocalTrust />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <SeoPages />
      </main>
      <Footer />
    </>
  );
}
