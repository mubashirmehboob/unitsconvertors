import { CustomArticleData } from "./types";

export const luxToFootCandle: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "foot-candle",
  seoTitle: "Lux to Foot-candle Converter (lx to fc) | UnitsConvertors.com",
  metaDescription: "Convert Lux to Foot-candles (lx to fc) with exact scientific precision. Understand SI vs US Customary illuminance, IESNA standards, formulas, and worked examples.",
  h1: "Lux to Foot-candle Converter",
  introduction: [
    "The Lux (lx) and Foot-candle (fc) are the two primary international units used to measure illuminance—the surface density of luminous flux arriving at a target plane. Lux is the standard metric unit defined within the International System of Units (SI) as one lumen per square meter (1 lx = 1 lm/m²). The foot-candle is the non-SI customary unit defined as one lumen per square foot (1 fc = 1 lm/ft²).",
    "Because one square meter contains approximately 10.76391 square feet, luminous flux striking a one-square-foot surface is more concentrated than flux spread over a full square meter. Consequently, 1 foot-candle equals exactly 10.76391 lux. To convert an illuminance value from lux to foot-candles, divide the lux reading by 10.76391 (or multiply by 0.09290304).",
    "This conversion represents a Type A direct unit conversion because both units quantify the exact same physical dimension (luminous flux per unit area) with a constant geometric area scale factor. This guide provides comprehensive mathematical details, architectural building code benchmarks, step-by-step calculations, and practical engineering examples."
  ],
  quickAnswer: {
    text: "To convert Lux to Foot-candles, divide the illuminance value in lux by 10.76391 (or multiply by 0.09290304). For example, a recommended office desktop light level of 500 lux equals approximately 46.45 foot-candles.",
    formulaDisplay: "fc = lx ÷ 10.76391",
    subtext: "1 Foot-candle equals exactly 10.76391 Lux (1 lx ≈ 0.092903 fc)."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI derived unit of illuminance. It measures how much luminous flux (lumens) falls on a flat surface of one square meter. Officially defined as 1 lx = 1 lm/m², it is the universal illuminance metric specified in ISO 8995-1, CIBSE codes, and European/Asian architectural standards."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot-candle (fc)",
    text: "The Foot-candle (symbol: fc or lm/ft²) is an imperial and US customary unit of illuminance. It represents the light density on a one-square-foot surface situated one foot away from a uniform point source of one candela. It remains the dominant unit in North American commercial building codes published by the Illuminating Engineering Society (IES)."
  },
  relationship: "The relationship between lux and foot-candles derives entirely from the geometric conversion between square meters and square feet (1 m² = 10.7639104167 ft²). Therefore, 1 fc = 10.76391 lx, and 1 lx ≈ 0.092903 fc.",
  relationshipTitle: "Lux vs Foot-candle Ratio Scale",
  relationshipItems: [
    { label: "1 lx", value: "0.0929 fc (Overcast full moon outdoor illumination)" },
    { label: "10.76 lx", value: "1.000 fc (Minimum emergency corridor egress lighting requirement)" },
    { label: "100 lx", value: "9.290 fc (Industrial warehouse aisle & circulation path)" },
    { label: "500 lx", value: "46.452 fc (IESNA recommended commercial office desktop workspace)" },
    { label: "1,000 lx", value: "92.903 fc (Precision electronics inspection & drafting table)" }
  ],
  formula: {
    text: "Divide the illuminance value in Lux by 10.76391 to calculate the equivalent illuminance in Foot-candles.",
    math: "fc = lx / 10.76391",
    subtext: "Alternatively: fc = lx × 0.09290304."
  },
  formulaTitle: "Lux to Foot-candle Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly approximate foot-candles from lux in the field without a calculator, divide the lux value by 10 and subtract 7%. For example: 500 lx ÷ 10 = 50 fc; 50 - 3.5 = 46.5 fc (extremely close to the exact 46.45 fc value)."
  },
  expertNote: {
    title: "Bridging IESNA and ISO 8995 Architectural Standards",
    text: "International architectural drawings often mix metric and customary specifications. While US building blueprints reference IESNA targets in foot-candles, European and Asian sub-contractors use ISO 8995 lux values. Maintaining exact precision avoids costly fixture over-specification."
  },
  examples: {
    title: "Step-by-Step lx to fc Worked Engineering Examples",
    items: [
      {
        title: "Example 1: Open-Plan Office Workspace",
        subtitle: "Convert a target desktop illuminance of 500 Lux into Foot-candles.",
        steps: [
          "Identify initial illuminance: 500 lx.",
          "Apply conversion formula: fc = 500 ÷ 10.76391.",
          "Perform calculation: 500 ÷ 10.76391 = 46.45152.",
          "Final Result: 500 Lux corresponds to 46.45 Foot-candles."
        ]
      },
      {
        title: "Example 2: Hospital Operating Theater Overhead Task Lamp",
        subtitle: "Convert an intensive surgical illuminance level of 20,000 Lux to Foot-candles.",
        steps: [
          "Identify surgical illuminance: 20,000 lx.",
          "Apply formula: fc = 20,000 ÷ 10.76391.",
          "Perform calculation: 20,000 ÷ 10.76391 = 1,858.06.",
          "Final Result: 20,000 Lux corresponds to 1,858.06 Foot-candles."
        ]
      },
      {
        title: "Example 3: Art Museum Oil Painting Gallery Wall",
        subtitle: "Convert a conservation threshold limit of 150 Lux to Foot-candles.",
        steps: [
          "Identify maximum safe illuminance: 150 lx.",
          "Divide by conversion factor: 150 ÷ 10.76391 = 13.9355.",
          "Final Result: 150 Lux equals 13.94 Foot-candles."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Foot-candle Engineering Reference Table",
    headers: ["Lux (lx)", "Foot-candles (fc)", "Typical Architectural & Environmental Context"],
    rows: [
      { fromVal: "0.25 lx", toVal: "0.023 fc", extra: "Clear night sky under quarter moon" },
      { fromVal: "1 lx", toVal: "0.093 fc", extra: "Full moon under clear tropical sky" },
      { fromVal: "10 lx", toVal: "0.929 fc", extra: "Commercial building parking deck walkway baseline" },
      { fromVal: "50 lx", toVal: "4.645 fc", extra: "Residential corridor and hotel guest room evening ambient" },
      { fromVal: "100 lx", toVal: "9.290 fc", extra: "Heavy industrial warehouse storage rack aisles" },
      { fromVal: "300 lx", toVal: "27.871 fc", extra: "High school classroom lecture hall and retail sales floor" },
      { fromVal: "500 lx", toVal: "46.452 fc", extra: "Standard commercial office computer desk workspace" },
      { fromVal: "750 lx", toVal: "69.677 fc", extra: "Technical drafting & CAD design review workspace" },
      { fromVal: "1,000 lx", toVal: "92.903 fc", extra: "SMD electronic component micro-assembly station" },
      { fromVal: "10,000 lx", toVal: "929.030 fc", extra: "Overcast outdoor daylight in open field" },
      { fromVal: "100,000 lx", toVal: "9,290.304 fc", extra: "Direct clear summer noon sunlight" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Foot-candle Conversions",
    items: [
      {
        title: "Architectural Lighting & Building Compliance",
        text: "Lighting designers convert illuminance metrics when reconciling US IESNA standards with European ISO 8995-1 guidelines for multinational corporate headquarters."
      },
      {
        title: "Museum & Fine Art Conservation",
        text: "Curators measure illuminance on light-sensitive oil paintings and historic paper manuscripts to ensure exposure stays under strict lux/fc preservation limits."
      },
      {
        title: "Commercial Real Estate & OSHA Safety Inspections",
        text: "Facility managers audit emergency stairwell egress pathways to verify compliance with 1 fc (approx. 10.76 lx) minimum safety requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Lux to Foot-candles",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (lux) to a larger unit (foot-candle) requires dividing by 10.76391.",
      "Confusing illuminance with luminous intensity: Lux and foot-candles measure surface flux density, not light source candela intensity.",
      "Neglecting sensor calibration: Light meter cosine receptors must be correctly oriented to measure true horizontal plane illuminance."
    ]
  },
  faqs: [
    {
      question: "How many Foot-candles are equal to 1 Lux?",
      answer: "1 Lux is equal to approximately 0.092903 Foot-candles (1 ÷ 10.76391)."
    },
    {
      question: "What is the exact conversion factor between Lux and Foot-candles?",
      answer: "The exact relationship is based on 1 meter = 3.280839895013 feet, yielding 1 foot-candle = 10.7639104167 lux."
    },
    {
      question: "How do I convert 500 Lux to Foot-candles?",
      answer: "Divide 500 by 10.76391 to get approximately 46.45 foot-candles."
    },
    {
      question: "Why is a Foot-candle larger than a Lux?",
      answer: "Because a square meter is roughly 10.76 square feet. Spreading 1 lumen over a square foot creates a denser concentration of light than spreading 1 lumen over a square meter."
    },
    {
      question: "What is the recommended light level for office desks in Foot-candles?",
      answer: "The IESNA recommends between 30 and 50 foot-candles (approx. 300 to 500 lux) for standard office tasks."
    },
    {
      question: "Is Foot-candle an SI unit?",
      answer: "No, the foot-candle is a US Customary / Imperial unit. The official SI unit for illuminance is the Lux (lx)."
    },
    {
      question: "How do I convert Foot-candles back to Lux?",
      answer: "Multiply the foot-candle value by 10.76391."
    },
    {
      question: "Does light color temperature affect lx to fc conversion?",
      answer: "No. Lux and foot-candles are photopically weighted illuminance metrics, so the physical area conversion factor remains 10.76391 regardless of correlated color temperature (CCT)."
    }
  ],
  relatedList: [
    { label: "Lux to Phot", from: "lux", to: "phot" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America.",
    "ISO 8995-1:2002 / CIE S 008/E:2001 - Lighting of Work Places - Part 1: Indoor.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
