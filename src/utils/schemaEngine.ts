import { categoriesData } from "../data/convertersData";
import { engineeringCalculatorsData } from "../data/calculatorsData";
import { generateEngineeringArticle } from "../data/engineeringArticlesEngine";
import { generateSEOContent } from "./conversionEngine";
import { HOME_FAQS } from "../components/FaqAccordion";

export interface SchemaRouteParams {
  page: string;
  category?: string;
  fromUnit?: string;
  toUnit?: string;
  toolId?: string;
}

const DOMAIN = "https://unitsconvertors.com";
const LOGO_URL = "https://unitsconvertors.com/icon.png";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UnitsConvertors.com",
  "url": DOMAIN,
  "logo": {
    "@type": "ImageObject",
    "url": LOGO_URL
  },
  "description": "Professional unit conversion and engineering calculator platform providing accurate SI and NIST standard mathematical tools."
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "UnitsConvertors.com",
  "url": DOMAIN,
  "description": "Convert length, weight, temperature, area, volume, pressure, energy, and hundreds of other units with fast, accurate, and easy-to-use online conversion tools.",
  "publisher": {
    "@type": "Organization",
    "name": "UnitsConvertors.com",
    "url": DOMAIN,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${DOMAIN}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

/**
 * Generates complete, valid, Google-compatible Schema.org structured data array for any route
 */
export function generatePageSchemas(params: SchemaRouteParams): any[] {
  const schemas: any[] = [];
  const { page, category, fromUnit, toUnit, toolId } = params;

  // 1. HOME PAGE
  if (page === "home") {
    schemas.push(ORGANIZATION_SCHEMA);
    schemas.push(WEBSITE_SCHEMA);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "UnitsConvertors.com | Free Online Unit Conversion Tools",
      "description": "Convert length, weight, temperature, area, volume, pressure, energy, and hundreds of other units with fast, accurate, and easy-to-use online conversion tools.",
      "url": `${DOMAIN}/`,
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "UnitsConvertors.com",
        "url": DOMAIN
      },
      "publisher": {
        "@type": "Organization",
        "name": "UnitsConvertors.com",
        "url": DOMAIN
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${DOMAIN}/`
        }
      ]
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": HOME_FAQS.map(f => ({
        "@type": "Question",
        "name": f.question.replace(/^\d+\.\s*/, ""),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
    return schemas;
  }

  // 2. CONVERTER CATEGORY PAGE
  if (page === "category" && category) {
    const catObj = categoriesData.find(c => c.id === category);
    if (catObj) {
      const canonicalUrl = `${DOMAIN}/${catObj.id}`;
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${catObj.name} Converters Studio | UnitsConvertors.com`,
        "description": catObj.description,
        "url": canonicalUrl,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": "UnitsConvertors.com",
          "url": DOMAIN
        },
        "publisher": {
          "@type": "Organization",
          "name": "UnitsConvertors.com",
          "url": DOMAIN
        }
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${catObj.name} Converters Studio | UnitsConvertors.com`,
        "description": catObj.description,
        "url": canonicalUrl,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": "UnitsConvertors.com",
          "url": DOMAIN
        }
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Unit Converters",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${catObj.name} Converters`,
            "item": canonicalUrl
          }
        ]
      });

      // Generate FAQs for Category Page using top unit pair
      if (catObj.units.length >= 2) {
        const sampleSeo = generateSEOContent(catObj, catObj.units[0], catObj.units[1]);
        if (sampleSeo && sampleSeo.faqs && sampleSeo.faqs.length > 0) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": sampleSeo.faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          });
        }
      }
      return schemas;
    }
  }

  // 3. CONVERTER TOOL PAGE
  if (page === "converter" && category && fromUnit && toUnit) {
    const catObj = categoriesData.find(c => c.id === category);
    const fromU = catObj?.units.find(u => u.id === fromUnit);
    const toU = catObj?.units.find(u => u.id === toUnit);

    if (catObj && fromU && toU) {
      const canonicalUrl = `${DOMAIN}/${catObj.id}/${fromU.id}-to-${toU.id}`;
      const toolName = `${fromU.name} to ${toU.plural} Converter`;
      const desc = `Free high-precision ${fromU.name} to ${toU.plural} online conversion calculator tool.`;

      // Calculator / WebApplication schema (Step 1 requirement)
      schemas.push({
        "@context": "https://schema.org",
        "@type": ["WebApplication", "SoftwareApplication"],
        "name": toolName,
        "description": desc,
        "url": canonicalUrl,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@type": "Organization",
          "name": "UnitsConvertors.com",
          "url": DOMAIN
        },
        "publisher": {
          "@type": "Organization",
          "name": "UnitsConvertors.com",
          "url": DOMAIN,
          "logo": {
            "@type": "ImageObject",
            "url": LOGO_URL
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "keywords": `${fromU.name}, ${toU.plural}, ${catObj.name}, Unit Converter`,
        "dateModified": "2026-08-03",
        "inLanguage": "en"
      });

      // WebPage schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${toolName} | UnitsConvertors.com`,
        "description": `Convert ${fromU.name} to ${toU.plural} with exact mathematical formulas, worked calculation examples, reference tables, and FAQs.`,
        "url": canonicalUrl,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": "UnitsConvertors.com",
          "url": DOMAIN
        }
      });

      // BreadcrumbList schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Unit Converters",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": catObj.name,
            "item": `${DOMAIN}/${catObj.id}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": toolName,
            "item": canonicalUrl
          }
        ]
      });

      // FAQPage schema
      const seoContent = generateSEOContent(catObj, fromU, toU);
      if (seoContent && seoContent.faqs && seoContent.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": seoContent.faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        });
      }
      return schemas;
    }
  }

  // 4. ENGINEERING CALCULATORS MAIN HUB PAGE
  if (page === "engineering-calculators" && !category) {
    const canonicalUrl = `${DOMAIN}/engineering-calculators`;
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Engineering Calculators Directory | UnitsConvertors.com",
      "description": "Explore comprehensive engineering calculators across electrical, mechanical, civil, physics, optics, thermodynamics, chemistry, and fluid mechanics disciplines.",
      "url": canonicalUrl,
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "UnitsConvertors.com",
        "url": DOMAIN
      },
      "publisher": {
        "@type": "Organization",
        "name": "UnitsConvertors.com",
        "url": DOMAIN
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Engineering Calculators Directory | UnitsConvertors.com",
      "description": "Professional engineering calculators and multi-variable physical equation models with governing equations, worked examples, and standards references.",
      "url": canonicalUrl,
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "UnitsConvertors.com",
        "url": DOMAIN
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${DOMAIN}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Engineering Calculators",
          "item": canonicalUrl
        }
      ]
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Engineering Calculators on UnitsConvertors.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engineering Calculators solve multi-variable physical equations (e.g., Ohm's Law, Beam Deflection, Reynolds Number) governed by fundamental laws of physics and engineering standards."
          }
        },
        {
          "@type": "Question",
          "name": "Are the engineering calculations validated against standard equations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every calculator uses peer-reviewed, industry-standard engineering formulas from NIST, IEEE, ASME, AISC, and ISO standards."
          }
        },
        {
          "@type": "Question",
          "name": "Do these calculators run on server or client side?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All calculations execute instantaneously in your browser using high-precision client-side JavaScript, ensuring 100% privacy and zero latency."
          }
        }
      ]
    });
    return schemas;
  }

  // 5. ENGINEERING DISCIPLINE PAGE or TOOL PAGE
  if (page === "engineering-category" || page === "engineering-calculators") {
    const disc = category 
      ? engineeringCalculatorsData.find(d => d.id === category || d.id === `${category}-calc` || d.id.replace("-calc", "") === category)
      : null;

    if (disc) {
      const discUrl = `${DOMAIN}/engineering-calculators/${disc.id}`;

      // Check if there is an active tool
      let activeTool = null;
      if (toolId) {
        activeTool = disc.tools.find(t => t.id === toolId || t.slug === toolId);
      }

      if (activeTool) {
        // --- ENGINEERING CALCULATOR TOOL PAGE ---
        const articleData = generateEngineeringArticle(activeTool, disc, engineeringCalculatorsData);
        const toolUrl = `${DOMAIN}/engineering-calculators/${disc.id}/${activeTool.id}`;

        // Calculator / WebApplication Schema (Step 1 requirement)
        schemas.push({
          "@context": "https://schema.org",
          "@type": ["WebApplication", "SoftwareApplication"],
          "name": activeTool.name,
          "description": activeTool.description,
          "url": toolUrl,
          "applicationCategory": "EngineeringCalculator",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@type": "Organization",
            "name": "UnitsConvertors.com",
            "url": DOMAIN
          },
          "publisher": {
            "@type": "Organization",
            "name": "UnitsConvertors.com",
            "url": DOMAIN,
            "logo": {
              "@type": "ImageObject",
              "url": LOGO_URL
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": toolUrl
          },
          "keywords": `${activeTool.name}, ${disc.name}, Governing Equation, Engineering Calculator`,
          "dateModified": "2026-08-03",
          "inLanguage": "en"
        });

        // Article Schema
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": articleData.title,
          "description": articleData.metaDescription,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": toolUrl
          },
          "author": {
            "@type": "Organization",
            "name": "UnitsConvertors.com Technical Editorial Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "UnitsConvertors.com",
            "logo": {
              "@type": "ImageObject",
              "url": LOGO_URL
            }
          }
        });

        // WebPage Schema
        schemas.push({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `${activeTool.name} | UnitsConvertors.com`,
          "description": activeTool.description,
          "url": toolUrl,
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UnitsConvertors.com",
            "url": DOMAIN
          }
        });

        // BreadcrumbList Schema
        schemas.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${DOMAIN}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Engineering Calculators",
              "item": `${DOMAIN}/engineering-calculators`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": disc.name,
              "item": discUrl
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": activeTool.name,
              "item": toolUrl
            }
          ]
        });

        // FAQPage Schema
        if (articleData.faqs && articleData.faqs.length > 0) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": articleData.faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          });
        }
        return schemas;

      } else {
        // --- ENGINEERING DISCIPLINE HUB PAGE ---
        schemas.push({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `${disc.name} Calculators | UnitsConvertors.com`,
          "description": disc.description,
          "url": discUrl,
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UnitsConvertors.com",
            "url": DOMAIN
          },
          "publisher": {
            "@type": "Organization",
            "name": "UnitsConvertors.com",
            "url": DOMAIN
          }
        });

        schemas.push({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `${disc.name} Calculators | UnitsConvertors.com`,
          "description": disc.description,
          "url": discUrl,
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UnitsConvertors.com",
            "url": DOMAIN
          }
        });

        schemas.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${DOMAIN}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Engineering Calculators",
              "item": `${DOMAIN}/engineering-calculators`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": disc.name,
              "item": discUrl
            }
          ]
        });

        // Discipline FAQs
        const discFaqs = [
          {
            question: `What calculators are included in the ${disc.name} discipline?`,
            answer: `The ${disc.name} suite includes ${disc.tools.length} calculators such as ${disc.tools.slice(0, 4).map(t => t.name).join(", ")}, and more.`
          },
          {
            question: `Are the formulas in ${disc.name} mathematically verified?`,
            answer: `Yes, all governing equations follow peer-reviewed ${disc.name.toLowerCase()} standards and physical laws.`
          },
          {
            question: `Can I use these ${disc.name} calculators on mobile?`,
            answer: `Yes, all calculation engines are fully responsive and optimized for mobile, tablet, and desktop browser use.`
          }
        ];

        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": discFaqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        });

        return schemas;
      }
    }
  }

  // 6. SUPPORT PAGES (about, contact, privacy, terms, disclaimer, sitemap, validator, favorites)
  const pageTitleMap: Record<string, string> = {
    about: "About Us",
    contact: "Contact Us",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Disclaimer",
    sitemap: "HTML Sitemap",
    validator: "Engine Validation Suite",
    favorites: "Bookmarked Converters"
  };

  const supportTitle = pageTitleMap[page] || page.charAt(0).toUpperCase() + page.slice(1);
  const supportUrl = `${DOMAIN}/${page}`;
  const webPageType = page === "about" ? "AboutPage" : page === "contact" ? "ContactPage" : "WebPage";

  schemas.push({
    "@context": "https://schema.org",
    "@type": webPageType,
    "name": `${supportTitle} | UnitsConvertors.com`,
    "description": `Learn more about UnitsConvertors.com on our ${supportTitle} page.`,
    "url": supportUrl,
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "UnitsConvertors.com",
      "url": DOMAIN
    },
    "publisher": {
      "@type": "Organization",
      "name": "UnitsConvertors.com",
      "url": DOMAIN
    }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${DOMAIN}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": supportTitle,
        "item": supportUrl
      }
    ]
  });

  return schemas;
}

/**
 * Injects/updates the dynamic <script id="global-schema-jsonld"> in document.head
 */
export function injectPageSchemas(params: SchemaRouteParams) {
  if (typeof document === "undefined") return;

  const schemas = generatePageSchemas(params);

  const scriptId = "global-schema-jsonld";
  let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.id = scriptId;
    scriptTag.type = "application/ld+json";
    document.head.appendChild(scriptTag);
  }

  scriptTag.text = JSON.stringify(schemas, null, 2);
}
