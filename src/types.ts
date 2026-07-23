export interface Unit {
  id: string;
  name: string;
  plural: string;
  symbol: string;
  factor: number; // multiplier to go from base unit to this unit (or inverse, we will define base to unit)
  offset?: number; // for temperature or linear equations (e.g. y = mx + c)
}

export interface Category {
  id: string; // e.g. 'length'
  name: string; // e.g. 'Length'
  icon: string; // lucide icon name
  description: string;
  baseUnitId: string; // e.g. 'meter'
  units: Unit[];
  customFormula?: (value: number, from: string, to: string) => number; // for temperature / fuel economy
  customExplain?: (value: number, from: Unit, to: Unit) => string[]; // custom breakdown steps
}

export interface ConversionHistoryItem {
  id: string;
  timestamp: number;
  category: string;
  fromUnit: string;
  toUnit: string;
  fromVal: number;
  toVal: number;
}

export interface FavoriteTool {
  id: string; // e.g. 'length/meter-to-kilometer'
  category: string;
  fromUnit: string;
  toUnit: string;
}
