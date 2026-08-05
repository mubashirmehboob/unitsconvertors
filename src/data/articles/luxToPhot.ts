import { CustomArticleData } from "./types";

export const luxToPhot: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "phot",
  seoTitle: "Lux to Phot Converter (lx to ph) | UnitsConvertors.com",
  metaDescription: "Convert Lux to Phots (lx to ph) with CGS precision. Understand metric illuminance definitions, 10,000 scale factors, photolithography standards, and worked examples.",
  h1: "Lux to Phot Converter",
  introduction: [
    "The Lux (lx) and Phot (ph) are metric units of illuminance used to quantify luminous flux density hitting a target surface. Lux is the standard International System of Units (SI) measure, defined as one lumen per square meter (1 lx = 1 lm/m²). The Phot is the historic CGS (centimeter-gram-second) unit, defined as one lumen per square centimeter (1 ph = 1 lm/cm²).",
    "Because one square meter contains exactly 10,000 square centimeters (100 cm × 100 cm), one phot represents an illuminance density 10,000 times greater than one lux (1 ph = 10,000 lx). To convert lux into phots, divide the illuminance value in lux by 10,000 (or multiply by 0.0001).",
    "This conversion is a Type A direct unit conversion between two metric flux density units sharing an exact decimal power relationship. This guide details the historical CGS origins, semiconductor photolithography applications, step-by-step calculations, and reference conversion tables."
  ],
  quickAnswer: {
    text: "To convert Lux to Phots, divide the illuminance reading in Lux by 10,000 (ph = lx ÷ 10,000). For example, 10,000 lux of indirect daylight equals exactly 1.0 Phot (or 1,000 milliphots).",
    formulaDisplay: "ph = lx ÷ 10,000",
    subtext: "1 Phot equals exactly 10,000 Lux (1 lx = 0.0001 ph)."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance. It expresses light intensity received at a surface area, where 1 lux equals 1 lumen per square meter (1 lx = 1 lm/m²). It is the universal standard in architecture, agriculture, optics, and workplace ergonomic regulations."
  },
  aboutTargetUnit: {
    title: "Understanding the Phot (ph)",
    text: "The Phot (symbol: ph) is a CGS metric unit of illuminance proposed by French engineer André-Eugène Blondel in 1921. Defined as one lumen per square centimeter (1 ph = 1 lm/cm² = 10,000 lm/m² = 10,000 lx), its submultiple—the milliphot (1 mph = 10 lx)—was widely used in legacy optical physics."
  },
  relationship: "The relationship between lux and phot is defined by metric decimal prefix area scaling (1 m² = 10,000 cm²). Thus, 1 ph = 10,000 lx, and 1 lx = 0.0001 ph (10⁻⁴ ph).",
  relationshipTitle: "Lux vs Phot Scale Ratio",
  relationshipItems: [
    { label: "1 lx", value: "0.0001 ph (10⁻⁴ ph - Full moon night ambient illumination)" },
    { label: "10 lx", value: "0.0010 ph (1 milliphot / mph - Twilight outdoor threshold)" },
    { label: "500 lx", value: "0.0500 ph (Standard office desk task lighting level)" },
    { label: "10,000 lx", value: "1.0000 ph (1 Phot - Open outdoor daylight in shade)" },
    { label: "100,000 lx", value: "10.0000 ph (Direct peak summer tropical sunlight)" }
  ],
  formula: {
    text: "Divide the illuminance value in Lux by 10,000 to derive the value in Phots.",
    math: "ph = lx / 10000",
    subtext: "To convert Phots back to Lux, multiply by 10,000."
  },
  formulaTitle: "Lux to Phot Conversion Formula",
  practicalTip: {
    title: "The Milliphot (mph) Shortcut",
    text: "In classical optics literature, 1 milliphot (mph = 0.001 ph) equals exactly 10 lux. To convert lux directly to milliphots without decimal confusion, simply divide by 10 (e.g., 500 lx = 50 mph)."
  },
  expertNote: {
    title: "Legacy CGS Standards in Semiconductor Physics",
    text: "Although modern ISO 80000-7 standards deprecate CGS phot units in favor of SI lux, legacy photolithography wafer exposure documentation and early 20th-century optics patents still specify phot density limits."
  },
  examples: {
    title: "Step-by-Step lx to ph Worked Examples",
    items: [
      {
        title: "Example 1: Open-Sky Daylight Measurement",
        subtitle: "Convert an outdoor daylight reading of 10,000 Lux into Phots.",
        steps: [
          "Identify initial illuminance: 10,000 lx.",
          "Apply conversion formula: ph = 10,000 ÷ 10,000.",
          "Perform calculation: 10,000 ÷ 10,000 = 1.0.",
          "Final Result: 10,000 Lux equals 1.0 Phot."
        ]
      },
      {
        title: "Example 2: Semiconductor Cleanroom Wafer Stepper Target",
        subtitle: "Convert an ultraviolet lithography illuminance of 50,000 Lux to Phots.",
        steps: [
          "Identify UV illuminance: 50,000 lx.",
          "Apply conversion formula: ph = 50,000 ÷ 10,000.",
          "Perform calculation: 50,000 ÷ 10,000 = 5.0.",
          "Final Result: 50,000 Lux equals 5.0 Phots."
        ]
      },
      {
        title: "Example 3: Indoor Commercial Workspace",
        subtitle: "Convert a desk illuminance level of 500 Lux into Phots.",
        steps: [
          "Identify desktop illuminance: 500 lx.",
          "Divide by 10,000: 500 ÷ 10,000 = 0.05.",
          "Final Result: 500 Lux equals 0.05 Phots (or 50 milliphots)."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Phot Metric Reference Table",
    headers: ["Lux (lx)", "Phots (ph)", "Milliphots (mph)", "Environmental Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.0001 ph", extra: "0.1 mph", extra2: "Full moon clear sky ambient night" },
      { fromVal: "10 lx", toVal: "0.0010 ph", extra: "1.0 mph", extra2: "Streetlight walkway minimum threshold" },
      { fromVal: "50 lx", toVal: "0.0050 ph", extra: "5.0 mph", extra2: "Residential living room relaxation lighting" },
      { fromVal: "100 lx", toVal: "0.0100 ph", extra: "10.0 mph", extra2: "Industrial warehouse storage aisles" },
      { fromVal: "300 lx", toVal: "0.0300 ph", extra: "30.0 mph", extra2: "University lecture hall workspace" },
      { fromVal: "500 lx", toVal: "0.0500 ph", extra: "50.0 mph", extra2: "Standard commercial office desktop" },
      { fromVal: "1,000 lx", toVal: "0.1000 ph", extra: "100.0 mph", extra2: "Precision electronic component assembly" },
      { fromVal: "10,000 lx", toVal: "1.0000 ph", extra: "1,000.0 mph", extra2: "Full indirect daylight in open shade" },
      { fromVal: "100,000 lx", toVal: "10.0000 ph", extra: "10,000.0 mph", extra2: "Direct summer noon solar illuminance" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Phot Conversions",
    items: [
      {
        title: "Semiconductor Wafer Photolithography",
        text: "Microelectronics process engineers convert optical exposure data from historic European equipment specs (phots) to SI lux for modern automated fab tools."
      },
      {
        title: "Astronomical Sky Brightness Archives",
        text: "Astrophysicists analyzing historic photographic plate catalogues convert milliphot illuminance logs into modern SI lux units."
      },
      {
        title: "Optical Metrology & Sensor Calibration",
        text: "Metrology labs cross-reference CGS sensor standards against modern SI radiometers to verify photometer linearity."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Lux to Phots",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (lux) to a larger unit (phot) requires dividing by 10,000.",
      "Confusing Phot (illuminance) with Lambert (luminance): Phot measures flux hitting a surface (lm/cm²); Lambert measures flux emitted/reflected from a surface.",
      "Confusing Phot with Photon: The Phot is a unit of photometric illuminance; a photon is an elementary quantum particle of light."
    ]
  },
  faqs: [
    {
      question: "How many Phots are in 1 Lux?",
      answer: "1 Lux is equal to exactly 0.0001 Phots (10⁻⁴ ph)."
    },
    {
      question: "What is the formula to convert Lux to Phots?",
      answer: "The formula is: Phots = Lux ÷ 10,000."
    },
    {
      question: "How many Lux is 1 Phot?",
      answer: "1 Phot equals exactly 10,000 Lux."
    },
    {
      question: "What is a Milliphot?",
      answer: "A Milliphot (mph) is one-thousandth of a phot (0.001 ph). Exactly 1 Milliphot = 10 Lux."
    },
    {
      question: "Why is 1 Phot 10,000 times larger than 1 Lux?",
      answer: "Because 1 Phot is 1 lumen per square centimeter, and 1 Lux is 1 lumen per square meter. There are 10,000 cm² in 1 m²."
    },
    {
      question: "Is Phot an official SI unit?",
      answer: "No, the phot is a non-SI CGS metric unit. The official SI unit of illuminance is the Lux (lx)."
    },
    {
      question: "How do I convert Phots back to Lux?",
      answer: "Multiply the Phot value by 10,000."
    },
    {
      question: "How many Phots equal 500 Lux?",
      answer: "500 Lux ÷ 10,000 = 0.05 Phots (or 50 milliphots)."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Stilb", from: "lux", to: "stilb" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "ISO 80000-7: Quantities and Units — Part 7: Light and Radiation.",
    "BIPM SI Brochure (9th Edition): Non-SI units accepted for use.",
    "CIE e-ILV: International Lighting Vocabulary (CIE S 017/E:2020)."
  ]
};
