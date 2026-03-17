import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DishesSection from "@/components/DishesSection";
import ServicesSection from "@/components/ServicesSection";
import HoursSection from "@/components/HoursSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <DishesSection />
      <ServicesSection />
      <HoursSection />
      <ReviewsSection />
      <LocationSection />
      <FacilitiesSection />
    </main>
    <Footer />
  </div>
);

export default Index;
