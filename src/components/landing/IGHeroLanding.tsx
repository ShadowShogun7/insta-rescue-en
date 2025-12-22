import HeroNavigation from "./HeroNavigation";
import HeroContent from "./HeroContent";
import FloatingPhoneCard from "./FloatingPhoneCard";
import MarqueeTrustBar from "./MarqueeTrustBar";
import SocialProofSection from "./SocialProofSection";
import PainPointsSection from "./PainPointsSection";
import HowItWorksSection from "./HowItWorksSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";

const IGHeroLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <HeroNavigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right - Floating Phone Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
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

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default IGHeroLanding;
