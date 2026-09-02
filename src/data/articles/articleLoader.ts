import { CustomArticleData } from "./types";
import slugToExportJson from "./slugToExport.json";

// Safely obtain Vite import.meta.glob in browser and build environments
const modules: Record<string, () => Promise<any>> = 
  typeof import.meta !== "undefined" && typeof (import.meta as any).glob === "function"
    ? (import.meta as any).glob("./*.ts")
    : {};

const slugToExport = slugToExportJson as Record<string, { file: string; varName: string }>;

// In-memory cache for ultra-fast repeat conversions
const articleCache = new Map<string, CustomArticleData>();

/**
 * Dynamically loads a single custom article on-demand.
 * This eliminates the 5.5MB monolithic bundle and delivers instant FCP and LCP.
 */
export async function getCustomArticle(slug: string): Promise<CustomArticleData | null> {
  if (!slug) return null;
  
  if (articleCache.has(slug)) {
    return articleCache.get(slug)!;
  }

  const entry = slugToExport[slug];
  if (!entry || !entry.file) {
    return null;
  }

  const filePath = `./${entry.file}.ts`;
  const loader = modules[filePath];
  if (!loader) {
    return null;
  }

  try {
    const mod = await loader();
    const article = (mod[entry.varName] || mod.default || mod) as CustomArticleData;
    if (article && article.h1) {
      articleCache.set(slug, article);
      return article;
    }
  } catch (err) {
    console.error(`[UnitsConvertors] Failed to dynamically load article for slug "${slug}":`, err);
  }

  return null;
}

/**
 * Preload an article for smooth instantaneous navigation
 */
export function preloadArticle(slug: string): void {
  const entry = slugToExport[slug];
  if (entry && entry.file && !articleCache.has(slug)) {
    const filePath = `./${entry.file}.ts`;
    const loader = modules[filePath];
    if (loader) {
      loader().then(mod => {
        const article = (mod[entry.varName] || mod.default || mod) as CustomArticleData;
        if (article && article.h1) {
          articleCache.set(slug, article);
        }
      }).catch(() => {});
    }
  }
}
