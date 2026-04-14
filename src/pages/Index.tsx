import IGHeroLanding from "@/components/landing/IGHeroLanding";
import SeoHead from "@/components/seo/SeoHead";
import { RECOVERY_GUIDE_SEO } from "@/seo/routes";
import { buildRecoveryGuideSchema } from "@/seo/schema";

const Index = () => {
  return (
    <>
      <SeoHead seo={RECOVERY_GUIDE_SEO} schema={buildRecoveryGuideSchema(RECOVERY_GUIDE_SEO)} />
      <IGHeroLanding />
    </>
  );
};

export default Index;
