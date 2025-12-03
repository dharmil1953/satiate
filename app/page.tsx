import Navbar from "@/components/common/Navbar";
import HomeHero from "@/components/HomeSections/HomeHero";
import AboutSection from "@/components/HomeSections/AboutSection";
import PillarsSection from "@/components/HomeSections/PillarsSection";
import ExpertsSection from "@/components/HomeSections/ExpertsSection";
import TestimonialsSection from "@/components/HomeSections/TestimonialsSection";
import CTASection from "@/components/HomeSections/CTASection";
import Footer from "@/components/common/Footer";
import OurServices from "@/components/HomeSections/ourServices";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-robotoCondensed">
      <Navbar />
      <HomeHero />
      <AboutSection />
      <PillarsSection />
      <TestimonialsSection />
      <ExpertsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
