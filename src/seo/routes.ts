export interface SeoImage {
  url: string;
  alt?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: string;
  ogLocale?: string;
  twitterCard?: string;
  twitterSite?: string;
  image?: SeoImage;
  alternates?: { hrefLang: string; href: string }[];
}

export const RECOVERY_GUIDE_SEO: SeoConfig = {
  title: "Disabled, Hacked or Locked Out of Instagram? | IG Recovery",
  description:
    "Disabled, hacked or locked out of Instagram? Waiting too long can cost you your followers, your content, and your business. Get the proven recovery guide people use when they can’t afford to lose their account.",
  canonical: "https://www.ig-hero.com/us/instagram-recovery-guide",
  robots: "index, follow",
  ogType: "article",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterSite: "@ighero_official",
  image: {
    url: "https://global.ig-hero.com/us/featured-recover-instagram-account-2026.webp",
    alt: "Recover disabled hacked locked out instagram account - comprehensive guide 2026",
  },
  alternates: [
    { hrefLang: "en-us", href: "https://www.ig-hero.com/us/instagram-recovery-guide" },
    {
      hrefLang: "zh-tw",
      href: "https://www.ig-hero.com/%E6%89%BE%E5%9B%9E%E8%A2%AB%E5%81%9C%E7%94%A8%E7%9A%84ig%E8%B3%AC%E8%99%9F/",
    },
    { hrefLang: "x-default", href: "https://www.ig-hero.com/us/instagram-recovery-guide" },
  ],
};
