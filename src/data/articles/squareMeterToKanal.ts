import { CustomArticleData } from "./types";

export const squareMeterToKanal: CustomArticleData = {
  fromUnitId: "square-meter",
  toUnitId: "kanal",
  seoTitle: "Square Meter to Kanal Converter - m² to kanal",
  metaDescription: "Convert square meters to kanals (m² to kanal) with accurate land measurement formulas, clear step-by-step calculations, conversion tables, and regional standards.",
  h1: "Square Meter to Kanal Converter",
  introduction: [
    "Navigating real estate transactions, agricultural boundary surveys, and property deeds across South Asia frequently requires translating modern international metric measurements into traditional land units. While municipal city planning and modern architectural blueprints specify areas in square meters, property listings and revenue records in Pakistan, Northern India, and parts of the broader region remain deeply rooted in the kanal system.",
    "Understanding how to convert square meters to kanals ensures accurate property valuation, transparent deed registration, and seamless communication with local revenue authorities. This guide delivers the exact mathematical relationship, practical calculation steps, worked examples, and comprehensive reference data to help you convert any land plot with complete confidence."
  ],
  quickAnswer: {
    text: "To convert square meters to kanals, divide the area in square meters by 505.857 (or multiply by 0.00197684). For instance, a residential plot measuring 1,000 square meters is approximately equal to 1.977 kanals.",
    formulaDisplay: "1 m² ≈ 0.00197684 kanal | 1 kanal = 505.857 m²",
    subtext: "Standard revenue records define 1 kanal as exactly 20 marlas (5,445 square feet or 505.857 square meters under the standard imperial-revenue system)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Meter (m²)",
    text: "The square meter (symbol: m²) is the primary coherent SI unit of area, defined as the area enclosed within a square with sides exactly one meter in length. Standardized worldwide by the International Bureau of Weights and Measures (BIPM), the square meter is the legal standard for scientific research, international engineering, architectural design, and modern civil engineering surveys."
  },
  aboutTargetUnit: {
    title: "Understanding the Kanal",
    text: "The kanal is a traditional unit of land area widely used throughout Pakistan and Northern India (predominantly in Punjab, Khyber Pakhtunkhwa, Jammu & Kashmir, and Haryana). In the standard British-era revenue settlement system, one kanal is defined as 20 marlas, 605 square yards, or 5,445 square feet (equivalent to 505.857 square meters). It is the customary benchmark for suburban residential plots, commercial layouts, and agricultural holdings."
  },
  relationship: "Under the standard land revenue framework, one kanal contains exactly 5,445 square feet. Converting this to metric dimensions (with 1 foot = 0.3048 m) establishes that 1 kanal equals 505.857 square meters. Therefore, one square meter represents approximately 0.00197684 kanals.",
  relationshipTitle: "Conversion Relationship: m² to Kanal",
  relationshipItems: [
    { label: "1 Square Meter (m²)", value: "approx. 0.00197684 Kanal" },
    { label: "1 Kanal", value: "exactly 505.857 Square Meters (m²)" },
    { label: "1 Kanal", value: "20 Marlas (605 sq yd / 5,445 sq ft)" },
    { label: "1 Acre", value: "8 Kanals (4,046.856 m²)" }
  ],
  formula: {
    text: "To convert square meters to kanals, divide the square meter area by the standard conversion factor of 505.857, or multiply by the decimal multiplier 0.001976843.",
    math: "Area in Kanals = Area in Square Meters (m²) / 505.857",
    subtext: "Alternatively: Area in Kanals = Area in Square Meters (m²) × 0.00197684"
  },
  formulaTitle: "Square Meter to Kanal Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For rapid on-site estimates, divide the square meter value by 500. For example, a 2,500 m² parcel divided by 500 gives 5 kanals, which is within 1.2% of the exact value of 4.94 kanals."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Suburban Residential Plot",
        subtitle: "A luxury residential housing society lists a corner villa plot measuring 506 square meters. Convert this plot size into kanals.",
        steps: [
          "Identify the given area: Area = 506 m².",
          "Apply the standard formula: Kanals = Area (m²) / 505.857.",
          "Substitute the value: Kanals = 506 / 505.857.",
          "Perform the division: Kanals = 1.00028.",
          "Conclude: The residential plot represents exactly 1 kanal (20 marlas)."
        ]
      },
      {
        title: "Example 2: Commercial Warehouse Complex",
        subtitle: "A logistics company plans a regional storage depot covering 4,500 square meters of ground surface. Find the equivalent area in kanals.",
        steps: [
          "Identify the given area: Area = 4,500 m².",
          "Apply the formula: Kanals = 4,500 / 505.857.",
          "Perform the calculation: 4,500 × 0.00197684 = 8.8958 kanals.",
          "Convert decimal portion to marlas (0.8958 × 20 = 17.92 marlas).",
          "Conclude: The depot spans approximately 8.90 kanals (8 kanals and 18 marlas)."
        ]
      },
      {
        title: "Example 3: Agricultural Orchard Parcel",
        subtitle: "A citrus farm expansion encompasses 12,000 square meters. Calculate the land area in kanals.",
        steps: [
          "Identify the initial area: 12,000 m².",
          "Apply the conversion factor: Kanals = 12,000 / 505.857.",
          "Calculate the result: Kanals = 23.722.",
          "Determine the equivalent acres (23.722 / 8 = 2.965 acres).",
          "Conclude: The orchard parcel covers approximately 23.72 kanals."
        ]
      }
    ]
  },
  table: {
    title: "Square Meter to Kanal Conversion Table",
    headers: ["Square Meters (m²)", "Kanals", "Marlas (Approx.)", "Typical Practical Use"],
    rows: [
      { fromVal: "25 m²", toVal: "0.049 kanal", extra: "1 Marla", extra2: "Small urban commercial shop" },
      { fromVal: "126 m²", toVal: "0.249 kanal", extra: "5 Marlas", extra2: "Standard urban townhouse plot" },
      { fromVal: "253 m²", toVal: "0.500 kanal", extra: "10 Marlas", extra2: "Medium detached residential house" },
      { fromVal: "506 m²", toVal: "1.000 kanal", extra: "20 Marlas", extra2: "Standard 1-kanal executive villa" },
      { fromVal: "1,000 m²", toVal: "1.977 kanals", extra: "39.5 Marlas", extra2: "Large luxury estate or commercial building" },
      { fromVal: "2,023 m²", toVal: "4.000 kanals", extra: "80 Marlas", extra2: "Half-acre agricultural orchard" },
      { fromVal: "4,047 m²", toVal: "8.000 kanals", extra: "160 Marlas", extra2: "One standard agricultural acre" },
      { fromVal: "10,000 m²", toVal: "19.768 kanals", extra: "395.4 Marlas", extra2: "One metric hectare of farmland" },
      { fromVal: "50,000 m²", toVal: "98.842 kanals", extra: "1,976.8 Marlas", extra2: "Master-planned residential development" }
    ]
  },
  applications: {
    title: "Practical Real-World Applications",
    items: [
      {
        title: "Real Estate Development & Plot Sizing",
        text: "Urban housing societies and gated communities in South Asia lay out residential land in 5-marla, 10-marla, and 1-kanal plots. Translating civil engineering drawings from square meters to kanals is essential for municipal approvals and client brochures."
      },
      {
        title: "Cadastral Surveys & Revenue Record Verification",
        text: "Government patwaris and land registries record land ownership in kanals and marlas. When private surveyors measure boundaries using modern GPS total stations (which report in square meters), converting to kanals ensures statutory compliance."
      },
      {
        title: "Agricultural Crop Planning & Irrigation Quotas",
        text: "Canal water allocations, fertilizer dosage guidelines, and agricultural subsidy disbursements are calculated on a per-kanal or per-acre basis across Northern agricultural belts."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Ignoring regional variation in marla definitions: While standard revenue records define 1 kanal as 20 marlas (5,445 sq ft / 505.857 m²), some private city developers historically used smaller 225 sq ft marlas (450 sq ft / ~418 m² per kanal). Always verify the baseline definition used in the specific deed.",
      "Confusing linear and square dimensions: Never apply linear foot-to-meter multipliers to area measurements. Always square the conversion ratio.",
      "Truncating intermediate decimals: Rounding 505.857 to 500 in legal contracts can create significant discrepancies over large multi-acre parcels."
    ]
  },
  faqs: [
    {
      question: "How many square meters are in 1 kanal?",
      answer: "Under the standard revenue system, 1 kanal is equal to exactly 505.857 square meters (5,445 square feet or 605 square yards)."
    },
    {
      question: "How do I convert square meters to kanals?",
      answer: "To convert square meters to kanals, divide your square meter area by 505.857. For example, 2,000 m² / 505.857 = 3.953 kanals."
    },
    {
      question: "How many marlas are in a kanal?",
      answer: "There are 20 marlas in 1 kanal. In standard revenue records, 1 marla equals 272.25 square feet (25.293 square meters)."
    },
    {
      question: "How many kanals are in one acre?",
      answer: "There are exactly 8 kanals in one standard acre (4,046.856 square meters / 505.857 square meters per kanal = 8 kanals)."
    },
    {
      question: "How many kanals are in one hectare?",
      answer: "One metric hectare (10,000 square meters) equals approximately 19.768 kanals."
    },
    {
      question: "What is the difference between a kanal and a bigha?",
      answer: "Both are traditional South Asian land units, but a bigha is significantly larger. In standard metric conversion, 1 bigha equals 2,529.285 square meters, which is exactly equal to 5 kanals."
    },
    {
      question: "Why do some private housing schemes use different kanal sizes?",
      answer: "Historically, some private developers adopted a non-standard 225 sq ft marla (making 1 kanal = 4,500 sq ft ≈ 418.06 m²) for urban housing. Official government revenue records in Pakistan and India use the standard 272.25 sq ft marla (1 kanal = 5,445 sq ft = 505.857 m²)."
    },
    {
      question: "Can I convert square yards to kanals directly?",
      answer: "Yes. Since 1 kanal equals 605 square yards, divide your square yard figure by 605 to obtain the equivalent area in kanals."
    }
  ],
  relatedList: [
    { label: "Kanal to Square Meter", from: "kanal", to: "square-meter" },
    { label: "Square Meter to Bigha", from: "square-meter", to: "bigha" },
    { label: "Square Meter to Acre", from: "square-meter", to: "acre" },
    { label: "Square Meter to Hectare", from: "square-meter", to: "hectare" }
  ],
  references: [
    "Survey of Pakistan / Land Revenue Act — Standardized Land Measurement Units",
    "National Institute of Standards and Technology (NIST) — Special Publication 811: Guide for the Use of the International System of Units",
    "Punjab Land Revenue Manual — Cadastral Mapping and Area Standards"
  ]
};
