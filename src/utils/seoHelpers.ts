import { Category, Unit } from "../types";

export function updatePageMeta(title: string, description: string, canonicalUrl?: string) {
  if (typeof document === "undefined") return;

  // Title
  document.title = title;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", description);

  // Canonical URL
  if (canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }
}

export function updateRobotsTag(indexable = true) {
  if (typeof document === "undefined") return;

  let robotsTag = document.querySelector('meta[name="robots"]');
  if (!robotsTag) {
    robotsTag = document.createElement("meta");
    robotsTag.setAttribute("name", "robots");
    document.head.appendChild(robotsTag);
  }
  robotsTag.setAttribute("content", indexable ? "index, follow" : "noindex, follow");
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebApplicationSchema(categoryName: string, fromUnit: Unit, toUnit: Unit) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${fromUnit.name} to ${toUnit.name} Converter`,
    url: `https://unitsconvertors.com/${categoryName.toLowerCase()}/${fromUnit.id}-to-${toUnit.id}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: `Free high-precision ${fromUnit.name} to ${toUnit.name} online conversion calculator tool.`,
  };
}
