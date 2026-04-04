import HeroNavigation from "./HeroNavigation";
import HeroContent from "./HeroContent";
import FloatingPhoneCard from "./FloatingPhoneCard";
import MarqueeTrustBar from "./MarqueeTrustBar";
import SocialProofSection from "./SocialProofSection";
import ProblemSection from "./ProblemSection";
import HowItWorksSection from "./HowItWorksSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import VideoTestimonialSection from "./VideoTestimonialSection";
import ChatWidget from "@/components/chat/ChatWidget";

const IGHeroLanding = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <HeroNavigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <HeroContent />
          </div>

          {/* Right - Floating Phone Card */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <FloatingPhoneCard />
          </div>
        </div>
      </main>

      {/* Trust Marquee Bar */}
      <div className="mt-12 md:mt-20">
        <MarqueeTrustBar />
      </div>

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Video Testimonial Section */}
      <VideoTestimonialSection />

      {/* Live Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default IGHeroLanding;
