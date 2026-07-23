import fs from "fs";
import path from "path";
import { categoriesData } from "../src/data/convertersData";
import { isSeoReady, articleRegistry } from "../src/data/articles";

const BASE_URL = "https://www.unitsconvertors.com";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function generateSitemap() {
  console.log("Generating structured sitemap.xml with automated lastmod & Article Registry...");

  const currentDate = new Date().toISOString().split("T")[0]; // e.g. "2026-07-19"
  
  // Categorized dictionary to support XML Sitemap Split in the future easily
  const sitemapSections: Record<string, SitemapEntry[]> = {
    core: [],
    support: [],
    categories: [],
    converters: []
  };

  // 1. Core pages (Homepage)
  sitemapSections.core.push({
    url: `${BASE_URL}/`,
    lastmod: currentDate,
    changefreq: "daily",
    priority: "1.0"
  });

  // 2. Support pages with high quality content
  const supportPages = ["about", "contact", "privacy", "terms", "disclaimer", "sitemap"];
  for (const page of supportPages) {
    sitemapSections.support.push({
      url: `${BASE_URL}/${page}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    });
  }

  // 3. Category Dashboard pages
  for (const cat of categoriesData) {
    sitemapSections.categories.push({
      url: `${BASE_URL}/${cat.id}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    });
  }

  // 4. Converter pages ONLY if they contain complete, high-quality articles
  let completeCount = 0;
  let totalCount = 0;

  for (const cat of categoriesData) {
    for (const unitA of cat.units) {
      for (const unitB of cat.units) {
        if (unitA.id === unitB.id) continue;

        totalCount++;
        const pairKey = `${unitA.id}-to-${unitB.id}`;
        const hasCompleteArticle = isSeoReady(unitA.id, unitB.id);

        if (hasCompleteArticle) {
          // Fetch article metadata from our rich Article Metadata Registry
          const metadata = articleRegistry[pairKey];
          const lastUpdated = metadata?.updatedAt || currentDate;
          const articlePriority = metadata?.priority?.toFixed(1) || "0.6";

          sitemapSections.converters.push({
            url: `${BASE_URL}/${cat.id}/${pairKey}`,
            lastmod: lastUpdated,
            changefreq: "weekly",
            priority: articlePriority
          });
          completeCount++;
        }
      }
    }
  }

  // Combine all entries for our standard sitemap index file
  const allEntries: SitemapEntry[] = [
    ...sitemapSections.core,
    ...sitemapSections.support,
    ...sitemapSections.categories,
    ...sitemapSections.converters
  ];

  // Generate standard unified XML output
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

  const outputPath = path.resolve(process.cwd(), "public/sitemap.xml");
  fs.writeFileSync(outputPath, sitemapXml, "utf8");

  console.log(`Sitemap generated successfully at: ${outputPath}`);
  console.log(`Total converter pairs processed: ${totalCount}`);
  console.log(`Indexable converter pairs (complete articles from Article Registry): ${completeCount}`);

  // Future split architecture trace (Diagnostic/Log)
  console.log("--- Future Split Architecture Metrics ---");
  Object.entries(sitemapSections).forEach(([sectionName, entries]) => {
    console.log(`Section: [${sectionName}] contains ${entries.length} URLs`);
  });
}

generateSitemap();
