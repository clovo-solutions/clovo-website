import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import ClovoCarousel from "@/components/ClovoCarousel";
import SeoPages from "@/components/SeoPages";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Projects />
        {/* <ClovoCarousel /> */}
        <Contact />
        <SeoPages />
      </main>
      <Footer />
    </>
  );
}
