import { CustomArticleData } from "./types";

export const squareKilometerToBigha: CustomArticleData = {
  fromUnitId: "square-kilometer",
  toUnitId: "bigha",
  seoTitle: "Square Kilometer to Bigha Converter - km² to bigha",
  metaDescription: "Convert square kilometers to bigha (km² to bigha). Learn the standard conversion formula, regional state benchmarks, step-by-step calculations, and tables.",
  h1: "Square Kilometer to Bigha Converter",
  introduction: [
    "Across India, Nepal, and Bangladesh, rural land records, agricultural acquisitions, and traditional property deeds are recorded in bighas. However, modern geographic information systems (GIS), satellite cadastral surveys, and national highway infrastructure projects calculate land area in metric square kilometers. Converting large regional territories from square kilometers to bighas is essential for government land acquisition officers, civil contractors, agricultural cooperatives, and property developers.",
    "Because the bigha has regional variations across different Indian states, understanding both the standard metric benchmark and state-specific equivalents is critical for legal accuracy and smooth property transactions. This guide explains the mathematical conversion formula, provides step-by-step worked examples, presents clear conversion tables, and details regional bigha standards to ensure reliable conversions."
  ],
  quickAnswer: {
    text: "Under the standard metric land revenue benchmark, 1 square kilometer is equal to approximately 395.37 bighas (based on 1 standard bigha = 2,529.285 m² or 27,225 sq ft / 5/8 acre).",
    formulaDisplay: "1 km² ≈ 395.36867 Bigha | 1 Bigha = 2,529.285 m²",
    subtext: "To convert square kilometers to standard bighas, multiply the square kilometer value by 395.3687 (or multiply by 1,000,000 and divide by 2,529.285)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is the official large-scale SI derived unit of surface area. Corresponding to the area of a square measuring exactly 1,000 meters on each side (1,000,000 square meters), it is the global standard for geographic cartography, national census reporting, satellite topography, and environmental modeling."
  },
  aboutTargetUnit: {
    title: "Understanding the Bigha",
    text: "The bigha is a traditional unit of land area widely used in agricultural and rural real estate across South Asia (including India, Nepal, and Bangladesh). While historically determined by local custom, the standard pucca bigha established in land revenue records equals 20 biswas, 27,225 square feet, 3,025 square yards, or 2,529.285 square meters (exactly 0.625 acres or 5/8 of an acre). It remains the customary unit for rural farm valuations and ancestral land partition deeds."
  },
  relationship: "In standard land revenue records, one standard bigha comprises 27,225 square feet (2,529.285 square meters). Because one square kilometer contains exactly 1,000,000 square meters, dividing 1,000,000 by 2,529.285 gives approximately 395.368673 standard bighas per square kilometer.",
  relationshipTitle: "Conversion Relationship: km² vs Standard Bigha",
  relationshipItems: [
    { label: "1 Square Kilometer (km²)", value: "approx. 395.3687 Standard Bighas" },
    { label: "1 Standard Bigha", value: "exactly 2,529.285 Square Meters (m²)" },
    { label: "1 Standard Bigha", value: "20 Biswas (27,225 sq ft / 3,025 sq yd)" },
    { label: "1 Standard Bigha", value: "0.625 Acres (5/8 acre)" }
  ],
  formula: {
    text: "To convert square kilometers to standard bighas, multiply the square kilometer value by 395.3686733, or multiply the square meter area (km² × 1,000,000) and divide by 2,529.285.",
    math: "Area in Bighas = Area in Square Kilometers (km²) × 395.3686733",
    subtext: "Alternatively: Area in Bighas = (Area in km² × 1,000,000) / 2,529.285"
  },
  formulaTitle: "Square Kilometer to Bigha Conversion Formula",
  practicalTip: {
    title: "The 400 Bighas Mental Estimate Rule",
    text: "For fast on-site estimation, multiply the square kilometer value by 400 and subtract 1.15%. For example, 2 km² × 400 = 800 bighas; subtracting 9 gives 791 bighas (exact: 790.74 bighas)."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Expressway Corridor Land Acquisition",
        subtitle: "A national highway authority acquires a 2.40 square kilometer linear corridor for a multi-lane expressway. Calculate the total land area in standard bighas for compensation disbursement.",
        steps: [
          "State the initial area: Area = 2.40 km².",
          "Apply the standard conversion formula: Area (bigha) = Area (km²) × 395.36867.",
          "Substitute the value: Area (bigha) = 2.40 × 395.3686733.",
          "Perform the multiplication: Area (bigha) = 948.8848 bighas.",
          "Conclude: The expressway corridor requires approximately 948.88 standard bighas."
        ]
      },
      {
        title: "Example 2: Sugar Cane Farming Cooperative",
        subtitle: "An agricultural federation manages a consolidated watershed territory of 5.75 square kilometers. Find the total farm area in bighas.",
        steps: [
          "Identify the given area: Area = 5.75 km².",
          "Multiply by the standard factor: 5.75 × 395.36867.",
          "Calculate the product: 5.75 × 395.3686733 = 2,273.3699 bighas.",
          "Conclude: The cooperative manages approximately 2,273.37 bighas."
        ]
      },
      {
        title: "Example 3: Solar Park Land Lease",
        subtitle: "A renewable energy corporation leases 0.85 square kilometers of rural terrain. Express this lease area in standard bighas.",
        steps: [
          "State the initial value: Area = 0.85 km².",
          "Set up the equation: Area (bigha) = 0.85 × 395.3686733.",
          "Compute the result: 0.85 × 395.3686733 = 336.0634 bighas.",
          "Conclude: The solar park lease spans roughly 336.06 standard bighas."
        ]
      }
    ]
  },
  table: {
    title: "Square Kilometer to Bigha Conversion Table",
    headers: ["Square Kilometers (km²)", "Standard Bighas", "Acres (Approx.)", "Hectares (ha)"],
    rows: [
      { fromVal: "0.01 km²", toVal: "3.954 bighas", extra: "2.471 ac", extra2: "1 ha" },
      { fromVal: "0.05 km²", toVal: "19.768 bighas", extra: "12.355 ac", extra2: "5 ha" },
      { fromVal: "0.10 km²", toVal: "39.537 bighas", extra: "24.711 ac", extra2: "10 ha" },
      { fromVal: "0.25 km²", toVal: "98.842 bighas", extra: "61.776 ac", extra2: "25 ha" },
      { fromVal: "0.50 km²", toVal: "197.684 bighas", extra: "123.553 ac", extra2: "50 ha" },
      { fromVal: "1.00 km²", toVal: "395.369 bighas", extra: "247.105 ac", extra2: "100 ha" },
      { fromVal: "2.00 km²", toVal: "790.737 bighas", extra: "494.211 ac", extra2: "200 ha" },
      { fromVal: "5.00 km²", toVal: "1,976.843 bighas", extra: "1,235.527 ac", extra2: "500 ha" },
      { fromVal: "10.00 km²", toVal: "3,953.687 bighas", extra: "2,471.054 ac", extra2: "1,000 ha" }
    ]
  },
  applications: {
    title: "Practical Applications & Regional Variations",
    items: [
      {
        title: "National Infrastructure & Highway Land Compensation",
        text: "When government agencies acquire land for railways, pipelines, and highways mapped in metric GIS datasets (km²), compensation awards and gazette notifications are published in local bigha units for affected landowners."
      },
      {
        title: "Understanding Regional State Variations in India",
        text: "While the standard pucca bigha is 2,529.285 m² (395.37 bigha/km² in Uttar Pradesh, Punjab, Haryana, and Rajasthan), other states use different historical definitions: in West Bengal, 1 bigha = 1,333.33 m² (~750 bigha/km²); in Assam, 1 bigha = 1,337.8 m² (~747.5 bigha/km²); in Gujarat, 1 bigha = 1,618.7 m² (~617.8 bigha/km²). Always verify the specific state revenue manual."
      },
      {
        title: "Agricultural Consolidation & Micro-Irrigation Schemes",
        text: "Rural development banks, crop insurance agencies, and drip irrigation subsidies calculate credit limits and water discharge volumes per bigha based on total catchment areas measured in square kilometers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming all bighas are identical across India: As noted, bigha definitions vary by state. The standard revenue bigha used in general calculators is the standard 2,529.285 m² pucca bigha. Always clarify the state-specific factor in legal deeds.",
      "Confusing bighas with acres: 1 standard bigha is 0.625 acres (5/8 of an acre). 1 acre contains 1.6 standard bighas.",
      "Rounding the conversion factor excessively: Rounding 395.369 to 400 introduces a 1.17% error, which creates an error of nearly 12 bighas on a 10 km² project."
    ]
  },
  faqs: [
    {
      question: "How many bighas are in 1 square kilometer?",
      answer: "In the standard revenue system, 1 square kilometer is equal to approximately 395.3687 bighas (roughly 395.37 bighas)."
    },
    {
      question: "What is the formula to convert km² to bighas?",
      answer: "The standard formula is: Area in Bighas = Area in km² × 395.3686733 (or Area in km² × 1,000,000 / 2,529.285)."
    },
    {
      question: "How many square meters are in 1 standard bigha?",
      answer: "One standard pucca bigha contains exactly 2,529.285 square meters (27,225 square feet or 3,025 square yards)."
    },
    {
      question: "How many bighas are in one hectare?",
      answer: "One hectare (10,000 square meters) equals approximately 3.9537 standard bighas (10,000 / 2,529.285 ≈ 3.9537 bighas)."
    },
    {
      question: "How many bighas are in one acre?",
      answer: "There are exactly 1.6 standard bighas in one acre (4,046.856 m² / 2,529.285 m² = 1.6 bighas)."
    },
    {
      question: "Why do bigha measurements differ in West Bengal, Assam, and Gujarat?",
      answer: "Before metric standardization, princely states and British presidencies established local customary rod and chain lengths. Bengal established a 14,400 sq ft bigha (1,333.33 m²), while northern states established the 27,225 sq ft standard bigha."
    },
    {
      question: "How many biswas are in one bigha?",
      answer: "In northern India, one standard bigha is divided into 20 biswas (or 20 kathas in eastern India)."
    },
    {
      question: "How do I convert bighas back to square kilometers?",
      answer: "To convert bighas to square kilometers, divide the number of bighas by 395.36867 (or multiply by 0.002529285)."
    }
  ],
  relatedList: [
    { label: "Bigha to Square Kilometer", from: "bigha", to: "square-kilometer" },
    { label: "Square Meter to Bigha", from: "square-meter", to: "bigha" },
    { label: "Square Kilometer to Acre", from: "square-kilometer", to: "acre" },
    { label: "Square Kilometer to Hectare", from: "square-kilometer", to: "hectare" }
  ],
  references: [
    "Ministry of Rural Development, Government of India — National Land Records Modernization Programme (NLRMP)",
    "State Land Revenue Acts and Survey Manuals (Punjab, Haryana, Uttar Pradesh, Rajasthan)",
    "Survey of India — Standards of Land Measurement"
  ]
};
