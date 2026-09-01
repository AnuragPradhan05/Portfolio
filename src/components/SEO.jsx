import { useEffect } from "react";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://anuragsite-five.vercel.app").replace(/\/$/, "");
const DEFAULT_TITLE = "Anurag Pradhan | Full-Stack Web & Software Developer Portfolio";
const DEFAULT_DESCRIPTION = "Explore Anurag Pradhan's developer portfolio featuring full-stack web applications, React, Angular, Spring Boot, FastAPI projects, skills, and interactive UI experiences.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/pic2.jpg`;

/**
 * Helper to update or create standard meta tags in document head
 */
const updateMetaTag = (selector, attributeName, attributeValue, content) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

/**
 * Helper to update or create canonical link tag
 */
const updateCanonicalLink = (href) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

/**
 * Helper to inject or update JSON-LD structured data script
 */
const updateJsonLd = (schema) => {
  let element = document.querySelector('script[type="application/ld+json"]#seo-jsonld');
  if (!schema) {
    if (element) element.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    element.setAttribute("id", "seo-jsonld");
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema, null, 2);
};

export default function SEO({
  title,
  description,
  path = "",
  ogType = "website",
  ogImage,
  noindex = false,
  schema = null,
}) {
  useEffect(() => {
    // 1. Title
    const finalTitle = title ? `${title} | Anurag Pradhan` : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Meta description
    const finalDescription = description || DEFAULT_DESCRIPTION;
    updateMetaTag('meta[name="description"]', "name", "description", finalDescription);

    // 3. Canonical URL
    const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    updateCanonicalLink(canonicalUrl);

    // 4. Robots meta tag
    const robotsContent = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
    updateMetaTag('meta[name="robots"]', "name", "robots", robotsContent);

    // 5. Open Graph tags
    updateMetaTag('meta[property="og:title"]', "property", "og:title", finalTitle);
    updateMetaTag('meta[property="og:description"]', "property", "og:description", finalDescription);
    updateMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    updateMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    updateMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Anurag Pradhan Portfolio");

    const finalOgImage = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `${SITE_URL}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`
      : DEFAULT_OG_IMAGE;
    updateMetaTag('meta[property="og:image"]', "property", "og:image", finalOgImage);

    // 6. Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", finalTitle);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", finalDescription);
    updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", finalOgImage);

    // 7. Structured Data (JSON-LD)
    updateJsonLd(schema);

  }, [title, description, path, ogType, ogImage, noindex, schema]);

  return null;
}
