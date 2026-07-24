import { useState, useEffect, useCallback } from "react";
import { categoriesData } from "../data/convertersData";

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
        "terms",
        "disclaimer",
        "sitemap",
        "favorites",
        "validator",
      ];

      if (supportPages.includes(first)) {
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
        targetPath = `/${extraPage}`;
      } else if (category === "home") {
        targetPath = "/";
      } else if (fromUnit && toUnit) {
        targetPath = `/${category}/${fromUnit}-to-${toUnit}`;
      } else {
        targetPath = `/${category}`;
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
