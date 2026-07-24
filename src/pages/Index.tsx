import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CapabilityMarquee from "@/components/home/CapabilityMarquee";
import Mission from "@/components/home/Mission";
import WhatWeDo from "@/components/home/WhatWeDo";
import Process from "@/components/home/Process";
import TrustBar from "@/components/home/TrustBar";
import CoursesPreview from "@/components/home/CoursesPreview";
import FeaturedProgram from "@/components/home/FeaturedProgram";
import OrganisationCta from "@/components/home/OrganisationCta";
import Mentors from "@/components/home/Mentors";
import Testimonials from "@/components/home/Testimonials";
import YoutubeSection from "@/components/home/YoutubeSection";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <CapabilityMarquee />
      <Mission />
      <WhatWeDo />
      <Process />
      <TrustBar />
      <CoursesPreview />
      <FeaturedProgram />
      <OrganisationCta />
      <Mentors />
      <Testimonials />
      <YoutubeSection />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
