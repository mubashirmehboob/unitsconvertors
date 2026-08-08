import { useState, useEffect, useCallback } from "react";
import { categoriesData } from "../data/convertersData";
import { engineeringCalculatorsData, getCategorySlugForDiscipline } from "../data/calculatorsData";

export interface RouteState {
  page: string;
  category: string;
  fromUnit: string;
  toUnit: string;
}

export function useNavigation() {
  const [route, setRoute] = useState<RouteState>({
    page: "home",
    category: "",
    fromUnit: "",
    toUnit: "",
  });

  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname;
      if (!path || path === "/") {
        setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        return;
      }

      const segments = path.split("/").filter(Boolean);
      if (segments.length === 0) {
        setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        return;
      }

      const first = segments[0];
      const supportPages = [
        "about",
        "contact",
        "privacy",
        "privacy-policy",
        "terms",
        "disclaimer",
        "sitemap",
        "favorites",
        "validator",
        "converters",
      ];

      if (first === "calculators" || first === "engineering-calculators") {
        if (segments.length === 1) {
          setRoute({ page: "engineering-calculators", category: "", fromUnit: "", toUnit: "" });
        } else if (segments.length === 2) {
          const second = segments[1];
          const catSlug = getCategorySlugForDiscipline(second);
          const matchedDisc = engineeringCalculatorsData.find(d => 
            d.id === second || getCategorySlugForDiscipline(d.id) === catSlug || d.id.replace("-calc", "") === second.replace("-calc", "")
          );
          if (matchedDisc) {
            setRoute({ page: "engineering-category", category: matchedDisc.id, fromUnit: "", toUnit: "" });
          } else {
            setRoute({ page: "engineering-calculators", category: "", fromUnit: "", toUnit: "" });
          }
        } else if (segments.length >= 3) {
          const second = segments[1];
          const third = segments[2];
          const catSlug = getCategorySlugForDiscipline(second);
          const matchedDisc = engineeringCalculatorsData.find(d => 
            d.id === second || getCategorySlugForDiscipline(d.id) === catSlug || d.id.replace("-calc", "") === second.replace("-calc", "")
          );
          if (matchedDisc) {
            const matchedTool = matchedDisc.tools.find(t => t.slug === third || t.id === third);
            setRoute({ 
              page: "engineering-category", 
              category: matchedDisc.id, 
              fromUnit: matchedTool ? matchedTool.id : third, 
              toUnit: "" 
            });
          } else {
            setRoute({ page: "engineering-calculators", category: "", fromUnit: "", toUnit: "" });
          }
        }
      } else if (supportPages.includes(first)) {
        setRoute({ page: first, category: "", fromUnit: "", toUnit: "" });
      } else {
        const cat = categoriesData.find((c) => c.id === first);
        if (cat) {
          if (segments.length > 1) {
            const pairSegment = segments[1];
            const parts = pairSegment.split("-to-");
            if (parts.length === 2) {
              setRoute({
                page: "converter",
                category: first,
                fromUnit: parts[0],
                toUnit: parts[1],
              });
            } else {
              setRoute({ page: "category", category: first, fromUnit: "", toUnit: "" });
            }
          } else {
            setRoute({ page: "category", category: first, fromUnit: "", toUnit: "" });
          }
        } else {
          setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        }
      }
    };

    window.addEventListener("popstate", parsePath);
    parsePath();

    return () => window.removeEventListener("popstate", parsePath);
  }, []);

  const navigate = useCallback(
    (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => {
      let targetPath = "/";
      if (extraPage) {
        if (category === "calculators" || category === "engineering-calculators") {
          const catSlug = getCategorySlugForDiscipline(extraPage);
          targetPath = `/calculators/${catSlug}`;
        } else {
          targetPath = `/${extraPage}`;
        }
      } else if (category === "home") {
        targetPath = "/";
      } else if (category === "calculators" || category === "engineering-calculators") {
        if (fromUnit && toUnit) {
          const catSlug = getCategorySlugForDiscipline(fromUnit);
          targetPath = `/calculators/${catSlug}/${toUnit}`;
        } else if (fromUnit) {
          const catSlug = getCategorySlugForDiscipline(fromUnit);
          targetPath = `/calculators/${catSlug}`;
        } else {
          targetPath = "/calculators";
        }
      } else {
        const matchedDisc = engineeringCalculatorsData.find(d => 
          d.id === category || getCategorySlugForDiscipline(d.id) === getCategorySlugForDiscipline(category)
        );
        if (matchedDisc) {
          const catSlug = getCategorySlugForDiscipline(matchedDisc.id);
          if (fromUnit) {
            const matchedTool = matchedDisc.tools.find(t => t.id === fromUnit || t.slug === fromUnit);
            const toolSlug = matchedTool ? matchedTool.slug : fromUnit;
            targetPath = `/calculators/${catSlug}/${toolSlug}`;
          } else {
            targetPath = `/calculators/${catSlug}`;
          }
        } else if (fromUnit && toUnit) {
          targetPath = `/${category}/${fromUnit}-to-${toUnit}`;
        } else {
          targetPath = `/${category}`;
        }
      }

      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, "", targetPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  return { route, navigate };
}
