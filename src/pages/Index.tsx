import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PillarsSection from "@/components/PillarsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FutureReadySection from "@/components/FutureReadySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustBar />
    <PillarsSection />
    <ServicesSection />
    <DifferentiatorSection />
    <HowItWorksSection />
    <FutureReadySection />
    <CaseStudiesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
