import type { SeoConfig } from "./routes";

export function buildRecoveryGuideSchema(seo: SeoConfig) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ig-hero.com/#organization",
        name: "IG HERO",
        url: "https://www.ig-hero.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://global.ig-hero.com/us/ig-hero-logo.webp",
        },
        sameAs: ["https://www.crunchbase.com/organization/ig-hero"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "5101 Santa Monica Blvd Ste 8, #1111",
          addressLocality: "Los Angeles",
          postalCode: "90029",
          addressCountry: "US",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ig-hero.com/#website",
        url: "https://www.ig-hero.com/",
        name: "IG HERO",
        publisher: {
          "@id": "https://www.ig-hero.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: seo.title,
        isPartOf: {
          "@id": "https://www.ig-hero.com/#website",
        },
        about: {
          "@id": "https://www.ig-hero.com/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: seo.image?.url,
          caption: seo.image?.alt,
        },
        description: seo.description,
        inLanguage: "en-US",
      },
      {
        "@type": "Article",
        "@id": `${seo.canonical}#article`,
        mainEntityOfPage: {
          "@id": `${seo.canonical}#webpage`,
        },
        headline: seo.title,
        description: seo.description,
        image: {
          "@type": "ImageObject",
          url: seo.image?.url,
        },
        author: {
          "@type": "Organization",
          name: "IG HERO",
          url: "https://www.ig-hero.com/",
        },
        publisher: {
          "@id": "https://www.ig-hero.com/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };
}
