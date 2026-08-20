import { CustomArticleData } from "./types";

export const literToBarrel: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "barrel",
  seoTitle: "Liter to Oil Barrel Converter - L to bbl (Oil)",
  metaDescription: "Convert liters to standard oil barrels (L to bbl). Exact petroleum conversion formula, step-by-step calculations, refinery batch tables, and industry standards.",
  h1: "Liter to Oil Barrel Converter",
  introduction: [
    "In the global energy sector, petroleum refining, crude oil trading, and petrochemical logistics, translating volume between metric liters and standard oil barrels is an indispensable daily calculation. While retail fuel distribution, maritime bunker metering, and domestic energy consumption across Europe, Asia, and Latin America are accounted for in liters and cubic meters, international crude oil pricing benchmarks (such as Brent Crude and West Texas Intermediate) and OPEC production quotas are denominated strictly in oil barrels (bbl).",
    "A standard oil barrel is legally standardized at exactly 42 US gallons (158.987294928 liters). Because industrial petroleum shipments involve millions of liters, accurate conversion between liters and barrels is paramount for commercial contracts, refinery yield calculations, and pipeline custody transfer. This guide explains the exact conversion formula, calculation techniques, refinery benchmarks, conversion tables, and real-world petroleum engineering applications."
  ],
  quickAnswer: {
    text: "To convert liters to standard oil barrels, divide the volume in liters by 158.987 (or multiply by 0.00628981). For example, 1,000 liters of crude oil equals approximately 6.29 oil barrels.",
    formulaDisplay: "1 Oil Barrel (bbl) = 158.987295 L | 1 L ≈ 0.00628981 bbl",
    subtext: "One standard oil barrel equals exactly 42 US liquid gallons (9,702 cubic inches or 158.987294928 liters). Dividing 1 by 158.9873 yields 0.00628981 barrels per liter."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (dm³), 1,000 milliliters (mL), or 0.001 cubic meters (m³). Widely used in retail gasoline pumps, chemical processing, laboratory assays, and environmental fluid monitoring, it provides fine-scale metric volume measurement."
  },
  aboutTargetUnit: {
    title: "Understanding the Oil Barrel (bbl)",
    text: "The standard oil barrel (symbol: bbl) is a unit of volume in the petroleum industry established in the 1860s in Pennsylvania and codified by the American Petroleum Institute (API). Defined as exactly 42 US liquid gallons (approximately 158.987 liters or 0.158987 cubic meters), it is the global trading currency for crude oil output, refinery feedstock throughput, and strategic petroleum reserves."
  },
  relationship: "One standard oil barrel equals exactly 42 US liquid gallons. Since one US liquid gallon is defined as 3.785411784 liters, multiplying 42 by 3.785411784 yields exactly 158.987294928 liters per barrel. Therefore, dividing any volume in liters by 158.987295 converts it directly into oil barrels. Inversely, 1 liter represents approximately 0.00628981 barrels.",
  relationshipTitle: "Petroleum Volume Scale: Liters vs Oil Barrels",
  relationshipItems: [
    { label: "1 Standard Oil Barrel (bbl)", value: "exactly 42 US Gallons (158.987295 L)" },
    { label: "1 Liter (L)", value: "approx. 0.00628981 Oil Barrels (bbl)" },
    { label: "1 Cubic Meter (m³ / 1,000 L)", value: "approx. 6.28981 Oil Barrels" },
    { label: "100 Barrels (bbl)", value: "15,898.73 Liters (15.899 m³)" }
  ],
  formula: {
    text: "Divide the volume in liters by 158.987295 to obtain standard oil barrels, or multiply by 0.0062898108.",
    math: "Volume in Barrels (bbl) = Volume in Liters (L) / 158.987294928",
    subtext: "Alternatively: Volume in Barrels (bbl) = Volume in Liters (L) × 0.0062898108"
  },
  formulaTitle: "Liter to Oil Barrel Conversion Formula",
  practicalTip: {
    title: "The 160 Liters Quick Estimation Rule",
    text: "For fast field estimates, divide the number of liters by 160 (or multiply by 6.3 per 1,000 liters) and add 0.6%. For example, 16,000 liters / 160 = 100 barrels; adding 0.6 bbl gives 100.6 barrels (exact: 100.64 bbl)."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Bulk Tanker Truck Fuel Delivery",
        subtitle: "A fuel transport tanker unloads 32,000 liters of diesel at a commercial distribution terminal. Calculate this volume in standard oil barrels.",
        steps: [
          "Identify the given volume: Volume = 32,000 L.",
          "Apply the conversion formula: Volume (bbl) = Volume (L) / 158.987295.",
          "Substitute the value: Volume (bbl) = 32,000 / 158.987294928.",
          "Perform the division: Volume (bbl) = 201.2739 bbl.",
          "Conclude: The tanker cargo represents approximately 201.27 standard oil barrels."
        ]
      },
      {
        title: "Example 2: Offshore Platform Daily Testing Sample",
        subtitle: "An offshore oil production test separator processes 8,500 liters of light crude oil during a 2-hour flow test. Express this volume in barrels.",
        steps: [
          "State the initial volume: Volume = 8,500 L.",
          "Multiply by the factor: 8,500 × 0.0062898108.",
          "Calculate the product: 8,500 × 0.0062898108 = 53.4634 bbl.",
          "Conclude: The test separator captured approximately 53.46 oil barrels."
        ]
      },
      {
        title: "Example 3: Refinery Storage Tank Inflow",
        subtitle: "A crude distillation unit (CDU) receives 750,000 liters of crude feedstock per hour. Find the hourly feedstock rate in barrels.",
        steps: [
          "State the given volume: Volume = 750,000 L.",
          "Set up the equation: Volume (bbl) = 750,000 / 158.987294928.",
          "Perform the calculation: 750,000 / 158.987294928 = 4,717.358 bbl.",
          "Conclude: The refinery processes approximately 4,717.36 barrels of crude oil per hour."
        ]
      }
    ]
  },
  table: {
    title: "Liter to Oil Barrel Conversion Table",
    headers: ["Liters (L)", "Oil Barrels (bbl)", "US Gallons (gal)", "Petroleum Industry Benchmark"],
    rows: [
      { fromVal: "158.99 L", toVal: "1.000 bbl", extra: "42.0 gal", extra2: "Exact definition of 1 standard oil barrel (42 US gal)" },
      { fromVal: "500 L", toVal: "3.145 bbl", extra: "132.1 gal", extra2: "Small industrial lubricant drum cluster" },
      { fromVal: "1,000 L", toVal: "6.290 bbl", extra: "264.2 gal", extra2: "Standard 1 m³ Intermediate Bulk Container (IBC tote)" },
      { fromVal: "5,000 L", toVal: "31.449 bbl", extra: "1,320.9 gal", extra2: "Local commercial fuel station underground refill batch" },
      { fromVal: "10,000 L", toVal: "62.898 bbl", extra: "2,641.7 gal", extra2: "Small bobtail fuel delivery truck" },
      { fromVal: "25,000 L", toVal: "157.245 bbl", extra: "6,604.3 gal", extra2: "Standard ISO tank container capacity" },
      { fromVal: "50,000 L", toVal: "314.491 bbl", extra: "13,208.6 gal", extra2: "Large articulated highway fuel tanker" },
      { fromVal: "100,000 L", toVal: "628.981 bbl", extra: "26,417.2 gal", extra2: "Railway tank car volume (DOT-111 / DOT-117)" },
      { fromVal: "500,000 L", toVal: "3,144.905 bbl", extra: "132,086 gal", extra2: "Intermediate coastal bunker fuel barge" },
      { fromVal: "1,000,000 L", toVal: "6,289.811 bbl", extra: "264,172 gal", extra2: "1,000 m³ (1 Megaliter) refinery storage tank layer" }
    ]
  },
  applications: {
    title: "Energy Trading, Refining & Petrochemical Applications",
    items: [
      {
        title: "Crude Oil Trading & Commodity Index Settlement",
        text: "Global commodity traders purchase crude contracts priced in USD per barrel (bbl) while importing nations measure offloaded tanker cargo in liters or metric tons. Accurate volume conversion ensures precise invoice reconciliation."
      },
      {
        title: "Refinery Yield Optimization & Material Balance",
        text: "Process engineers calculate distillation yields (gasoline, jet fuel, diesel, asphalt) from crude barrel inputs, converting intermediate stream sensor readings recorded in liters per minute into standard barrels per stream day (BPSD)."
      },
      {
        title: "Bunker Fueling & Maritime Marine Logistics",
        text: "International commercial vessels record marine gas oil (MGO) and heavy fuel oil (HFO) bunkering deliveries in metric liters or tons, which must be converted to barrels for charter party chartering logs and fuel performance auditing."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing oil barrels (42 gal) with beer/fluid barrels (31 or 31.5 gal): A standard oil barrel is 42 US gallons (158.987 L), whereas a US beer barrel is 31 US gallons (117.348 L) and a US fluid barrel is 31.5 gallons (119.24 L).",
      "Confusing the 55-gallon industrial steel drum with an oil barrel: Standard blue shipping drums hold 55 US gallons (208.2 L), but the oil barrel trading unit is strictly 42 US gallons (158.987 L).",
      "Ignoring temperature correction (API 60°F / 15°C standard): Crude oil expands with heat. In commercial custody transfer, volumes in liters measured at field temperature must be corrected using ASTM/API volume correction factors (VCF) to standard 60°F (15°C) before final barrel settlement."
    ]
  },
  faqs: [
    {
      question: "How many liters are in 1 standard oil barrel?",
      answer: "There are exactly 158.987294928 liters in 1 standard oil barrel (commonly rounded to 158.99 liters or 159 liters in casual industry discussions)."
    },
    {
      question: "How many oil barrels are in 1,000 liters (1 cubic meter)?",
      answer: "One thousand liters (1 m³) is equal to approximately 6.28981 oil barrels (roughly 6.29 bbl)."
    },
    {
      question: "What is the formula to convert liters to oil barrels?",
      answer: "The formula is: Volume in Barrels (bbl) = Volume in Liters (L) / 158.987295 (or Volume in Liters × 0.0062898108)."
    },
    {
      question: "Why does an oil barrel equal 42 US gallons?",
      answer: "In the 1860s, early Pennsylvania oil producers used standard 40-gallon whiskey barrels but added an extra 2 gallons (total 42 gallons) to compensate for spillage, evaporation, and leaking during horse-drawn transit."
    },
    {
      question: "Is a 55-gallon oil drum the same as an oil barrel?",
      answer: "No. The physical steel drum commonly used for chemical and lubricant shipping holds 55 US gallons (~208 liters), whereas the standard oil trading unit (bbl) is strictly 42 US gallons (~159 liters)."
    },
    {
      question: "What is the abbreviation for an oil barrel?",
      answer: "The standard industry abbreviation for oil barrel is 'bbl' (historically originating from 'blue barrel' used by Standard Oil, or 'barrel')."
    },
    {
      question: "How do I convert oil barrels back to liters?",
      answer: "To convert oil barrels to liters, multiply the barrel count by 158.987295 (for example, 10 bbl × 158.9873 = 1,589.87 L)."
    },
    {
      question: "How many gallons are in 1 oil barrel?",
      answer: "There are exactly 42 US liquid gallons in one standard oil barrel (equal to 336 US liquid pints or 5,376 US fluid ounces)."
    }
  ],
  relatedList: [
    { label: "Oil Barrel to Liter", from: "barrel", to: "liter" },
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Cubic Meter", from: "liter", to: "cubic-meter" },
    { label: "Cubic Meter to Oil Barrel", from: "cubic-meter", to: "barrel" }
  ],
  references: [
    "American Petroleum Institute (API) — Manual of Petroleum Measurement Standards (MPMS)",
    "ASTM D1250 / IP 200 — Petroleum Measurement Tables: Volume Correction Factors",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
