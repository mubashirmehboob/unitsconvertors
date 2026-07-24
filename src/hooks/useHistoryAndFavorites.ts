import { useState, useEffect, useCallback } from "react";
import { ConversionHistoryItem } from "../types";

export function useHistoryAndFavorites() {
  const [history, setHistory] = useState<ConversionHistoryItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("uc_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("uc_favs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("uc_history", JSON.stringify(history));
    } catch (e) {
      console.warn("Could not save history to localStorage", e);
    }
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem("uc_favs", JSON.stringify(favorites));
    } catch (e) {
      console.warn("Could not save favorites to localStorage", e);
    }
  }, [favorites]);

  const addHistory = useCallback((item: Omit<ConversionHistoryItem, "id" | "timestamp">) => {
    const newItem: ConversionHistoryItem = {
      ...item,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };
    setHistory((prev) => [
      newItem,
      ...prev.filter(
        (h) => !(h.category === item.category && h.fromUnit === item.fromUnit && h.toUnit === item.toUnit)
      ),
    ].slice(0, 10));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }, []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

  return {
    history,
    addHistory,
    clearHistory,
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
