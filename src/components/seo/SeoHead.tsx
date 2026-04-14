import { useEffect } from "react";
import type { SeoConfig } from "@/seo/routes";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

interface SeoHeadProps {
  seo: SeoConfig;
  schema?: unknown;
}

export default function SeoHead({ seo, schema }: SeoHeadProps) {
  useEffect(() => {
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: seo.robots || "index, follow" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: seo.ogLocale || "en_US" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: seo.ogType || "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "IG HERO" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonical });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: seo.twitterCard || "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });

    if (seo.twitterSite) {
      upsertMeta('meta[name="twitter:site"]', { name: "twitter:site", content: seo.twitterSite });
    }

    if (seo.image?.url) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: seo.image.url });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: seo.image.url });
    }

    if (seo.image?.alt) {
      upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: seo.image.alt });
      upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: seo.image.alt });
    }

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: seo.canonical });
    upsertLink('link[rel="icon"]', { rel: "icon", href: "/us/favicon.webp", type: "image/webp" });

    document.head.querySelectorAll('link[data-seo-alt="true"]').forEach((node) => node.remove());
    (seo.alternates || []).forEach((alternate) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", alternate.hrefLang);
      link.setAttribute("href", alternate.href);
      link.setAttribute("data-seo-alt", "true");
      document.head.appendChild(link);
    });

    let script = document.head.querySelector('script[data-schema="page"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "page");
      document.head.appendChild(script);
    }
    script.textContent = schema ? JSON.stringify(schema) : "";
  }, [schema, seo]);

  return null;
}
