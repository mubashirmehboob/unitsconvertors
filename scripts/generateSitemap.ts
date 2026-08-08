import fs from "fs";
import path from "path";
import { categoriesData } from "../src/data/convertersData";
import { engineeringCalculatorsData, engineeringCalculatorRegistry } from "../src/data/calculatorsData";
import { articleRegistry } from "../src/data/articles";
import { ENGINEERING_INDEXABLE } from "../src/utils/classificationEngine";

const BASE_URL = "https://www.unitsconvertors.com";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function generateSitemap() {
  console.log("=== DYNAMIC SITEMAP GENERATOR ===");
  console.log(`ENGINEERING_INDEXABLE feature flag: ${ENGINEERING_INDEXABLE}`);
  console.log("Generating fully automated, registry-driven sitemap.xml...");

  const currentDate = new Date().toISOString().split("T")[0]; // e.g. "2026-08-03"

  const urlMap = new Map<string, SitemapEntry>();
  const duplicateUrls: string[] = [];

  function addEntry(entry: SitemapEntry) {
    if (urlMap.has(entry.url)) {
      duplicateUrls.push(entry.url);
    } else {
      urlMap.set(entry.url, entry);
    }
  }

  // A. Static Pages
  const staticPages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "about", priority: "0.8", changefreq: "weekly" },
    { path: "contact", priority: "0.8", changefreq: "weekly" },
    { path: "privacy", priority: "0.8", changefreq: "weekly" },
    { path: "terms", priority: "0.8", changefreq: "weekly" },
    { path: "disclaimer", priority: "0.8", changefreq: "weekly" },
    { path: "sitemap", priority: "0.8", changefreq: "weekly" },
    { path: "validator", priority: "0.8", changefreq: "weekly" },
    { path: "directory", priority: "0.8", changefreq: "weekly" },
    { path: "converters", priority: "0.9", changefreq: "daily" },
    ...(ENGINEERING_INDEXABLE ? [{ path: "engineering-calculators", priority: "0.9", changefreq: "weekly" }] : [])
  ];

  let staticCount = 0;
  for (const p of staticPages) {
    const url = p.path ? `${BASE_URL}/${p.path}` : `${BASE_URL}/`;
    addEntry({
      url,
      lastmod: currentDate,
      changefreq: p.changefreq,
      priority: p.priority
    });
    staticCount++;
  }

  // B. Unit Converter Categories (32)
  let converterCategoryCount = 0;
  for (const cat of categoriesData) {
    addEntry({
      url: `${BASE_URL}/${cat.id}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    });
    converterCategoryCount++;
  }

  // C. Converter Pair Pages (All pairwise combinations)
  let converterPairCount = 0;
  let bespokeArticleCount = 0;

  for (const cat of categoriesData) {
    for (const unitA of cat.units) {
      for (const unitB of cat.units) {
        if (unitA.id === unitB.id) continue;

        const pairKey = `${unitA.id}-to-${unitB.id}`;

        converterPairCount++;
        const metadata = articleRegistry[pairKey];

        let priority = "0.7";
        let lastmod = currentDate;

        if (metadata) {
          bespokeArticleCount++;
          if (metadata.updatedAt) lastmod = metadata.updatedAt;
          if (typeof metadata.priority === "number") {
            priority = metadata.priority.toFixed(1);
          } else {
            priority = "0.9";
          }
        }

        addEntry({
          url: `${BASE_URL}/${cat.id}/${pairKey}`,
          lastmod,
          changefreq: "weekly",
          priority
        });
      }
    }
  }

  // D. Engineering Calculator Disciplines (11)
  let engineeringDisciplineCount = 0;
  if (ENGINEERING_INDEXABLE) {
    for (const disc of engineeringCalculatorsData) {
      addEntry({
        url: `${BASE_URL}/engineering-calculators/${disc.id}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.8"
      });
      engineeringDisciplineCount++;
    }
  }

  // E. Engineering Calculator Pages (182)
  let engineeringCalculatorCount = 0;
  if (ENGINEERING_INDEXABLE) {
    for (const tool of engineeringCalculatorRegistry) {
      const route = tool.route || `/engineering-calculators/${tool.disciplineId}/${tool.slug}`;
      const cleanRoute = route.startsWith("/") ? route : `/${route}`;
      addEntry({
        url: `${BASE_URL}${cleanRoute}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.8"
      });
      engineeringCalculatorCount++;
    }
  }

  // Sort entries deterministically by URL
  const allEntries = Array.from(urlMap.values()).sort((a, b) => a.url.localeCompare(b.url));

  // Build XML Content
  const xmlEntries = allEntries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

  // Write to public/sitemap.xml
  const publicPath = path.resolve(process.cwd(), "public/sitemap.xml");
  fs.writeFileSync(publicPath, sitemapXml, "utf8");
  console.log(`Successfully written sitemap to: ${publicPath}`);

  // Also write to dist/sitemap.xml if dist directory exists
  const distDir = path.resolve(process.cwd(), "dist");
  if (fs.existsSync(distDir)) {
    const distPath = path.resolve(distDir, "sitemap.xml");
    fs.writeFileSync(distPath, sitemapXml, "utf8");
    console.log(`Successfully written sitemap to: ${distPath}`);
  }

  console.log("\n=== DYNAMIC SITEMAP GENERATION SUMMARY ===");
  console.log(`Static Pages:                   ${staticCount}`);
  console.log(`Converter Category Pages:       ${converterCategoryCount}`);
  console.log(`Converter Pair URLs Generated:  ${converterPairCount}`);
  console.log(`Bespoke Articles Indexed:       ${bespokeArticleCount}`);
  console.log(`Engineering Discipline Pages:   ${engineeringDisciplineCount}`);
  console.log(`Engineering Calculator Pages:   ${engineeringCalculatorCount}`);
  console.log(`-------------------------------------------`);
  console.log(`Total URLs in Sitemap:          ${allEntries.length}`);
  console.log(`Duplicate URLs Found:           ${duplicateUrls.length}`);
  console.log(`Sitemap Generation Status:      PASS`);
}

generateSitemap();

