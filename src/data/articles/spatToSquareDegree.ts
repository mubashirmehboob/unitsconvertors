import { CustomArticleData } from "./types";

export const spatToSquareDegreeArticle: CustomArticleData = {
  fromUnitId: "spat",
  toUnitId: "square-degree",
  seoTitle: "Spat to Square Degree Converter (sp to deg²) - UnitsConvertors",
  metaDescription: "Convert spats to square degrees (sp to deg²) accurately. Learn the solid angle formula (deg² = sp × 129,600/π), calculation steps, tables, and FAQs.",
  h1: "Spat to Square Degree Converter",
  introduction: [
    "Converting spats (sp) to square degrees (deg² or sq deg) translates whole-sphere solid angles into the angular-area units widely used to describe fields of view and celestial sky coverage.",
    "A full sphere encompasses a solid angle of 1 spat, which equals exactly 4π steradians. Because 1 radian equals 180 / π degrees, 1 steradian equals (180 / π)² square degrees (approximately 3,282.80635 deg²). Multiplying 4π steradians by (180 / π)² yields exactly 129,600 / π square degrees (approximately 41,252.96125 deg²).",
    "This reference provides the exact mathematical relationship between spats and square degrees, worked step-by-step calculation examples, a conversion reference table, and answers to common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert spats (sp) to square degrees (deg²), multiply the spat value by 129,600 / π (approximately 41,252.96). For example, 1 spat equals approximately 41,252.96 square degrees.",
    formulaDisplay: "Square Degrees (deg²) = Spats (sp) × (129,600 ÷ π)",
    subtext: "1 sp ≈ 41,252.96125 deg² (1 deg² ≈ 0.0000242407 sp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. It represents the full 3D angular space surrounding a central point."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Degree (deg² or sq deg)",
    text: "A square degree (deg² or sq deg) is a non-SI unit of solid angle corresponding to the angular area of one degree by one degree (π / 180 radians per side). It is commonly used in astronomy to express large angular regions across the sky."
  },
  relationship: "One spat represents a full sphere and contains exactly 129,600/π square degrees (≈ 41,252.96125 deg²). A hemisphere (0.5 sp) equals 64,800/π square degrees (≈ 20,626.4806 deg²).",
  relationshipTitle: "Spat to Square Degree Scaling",
  relationshipItems: [
    { label: "0.10 sp (10% of Sky)", value: "≈ 4,125.296 deg²" },
    { label: "0.25 sp (1/4 Sphere)", value: "≈ 10,313.240 deg² (32,400/π)" },
    { label: "0.50 sp (Hemisphere)", value: "≈ 20,626.481 deg² (64,800/π)" },
    { label: "1.00 sp (Full Sphere)", value: "≈ 41,252.961 deg² (129,600/π)" }
  ],
  formula: {
    text: "Multiply the solid angle in spats by 129,600 / π (approximately 41,252.96125) to calculate square degrees.",
    math: "\\text{deg}^2 = \\text{sp} \\times \\frac{129,600}{\\pi} \\approx \\text{sp} \\times 41,252.96125",
    subtext: "Where 129,600 / π = 4π × (180 / π)²."
  },
  practicalTip: {
    title: "Constellation Area Benchmark",
    text: "The 88 standard astronomical constellations recognized by the International Astronomical Union (IAU) collectively cover the entire celestial sphere (1 spat), summing to approximately 41,253 square degrees."
  },
  expertNote: {
    title: "Exact Fraction Representation",
    text: "Because π is an irrational number, expressing the conversion factor as the exact fraction 129,600 / π maintains full numerical accuracy throughout intermediate steps."
  },
  examples: {
    title: "Step-by-Step Spat to Square Degree Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Spat to Square Degrees",
        subtitle: "Convert the full celestial sphere (1 spat) into square degrees.",
        steps: [
          "Identify solid angle: 1.0 sp.",
          "Apply conversion multiplier: deg² = 1.0 × (129,600 / π).",
          "Compute 129,600 ÷ 3.1415926536 ≈ 41,252.96125.",
          "Result: 1 spat equals approximately 41,252.96 square degrees."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (0.5 sp)",
        subtitle: "Convert an unobstructed sky hemisphere (0.5 spat) to square degrees.",
        steps: [
          "Identify solid angle: 0.5 sp.",
          "Apply conversion formula: deg² = 0.5 × (129,600 / π).",
          "Calculate: 64,800 ÷ 3.1415926536 ≈ 20,626.4806.",
          "Result: 0.5 spat equals approximately 20,626.48 square degrees."
        ]
      },
      {
        title: "Example 3: Celestial Fraction (0.025 sp)",
        subtitle: "Convert 0.025 spat (2.5% of a sphere) into square degrees.",
        steps: [
          "Identify solid angle: 0.025 sp.",
          "Apply conversion formula: deg² = 0.025 × 41,252.96125.",
          "Calculate: 0.025 × 41,252.96125 = 1,031.324 deg².",
          "Result: 0.025 spat equals approximately 1,031.32 square degrees."
        ]
      }
    ]
  },
  table: {
    title: "Spat to Square Degree Conversion Reference Table",
    headers: ["Spats (sp)", "Square Degrees (deg²)", "Exact Value (deg²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.01 sp", toVal: "412.53 deg²", extra: "1,296 / π deg²", extra2: "1% of sphere" },
      { fromVal: "0.05 sp", toVal: "2,062.65 deg²", extra: "6,480 / π deg²", extra2: "5% of sphere" },
      { fromVal: "0.10 sp", toVal: "4,125.30 deg²", extra: "12,960 / π deg²", extra2: "10% of sphere" },
      { fromVal: "0.25 sp", toVal: "10,313.24 deg²", extra: "32,400 / π deg²", extra2: "One quadrant (25%)" },
      { fromVal: "0.50 sp", toVal: "20,626.48 deg²", extra: "64,800 / π deg²", extra2: "Hemisphere (50%)" },
      { fromVal: "0.75 sp", toVal: "30,939.72 deg²", extra: "97,200 / π deg²", extra2: "Three-quarters of sphere (75%)" },
      { fromVal: "1.00 sp", toVal: "41,252.96 deg²", extra: "129,600 / π deg²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Spat to Square Degree Conversion",
    items: [
      {
        title: "Sky Coverage & Survey Planning",
        text: "Translating spherical solid angles into square degrees when assessing wide-angle observational coverage."
      },
      {
        title: "Constellation & Coordinate Area Mapping",
        text: "Relating celestial sphere quadrants and hemisphere regions to square degree measurements."
      },
      {
        title: "Optical Field of View Calculations",
        text: "Comparing wide-angle instrument angular coverage against total spherical solid angle."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Spat to Square Degree Conversions",
    items: [
      "Multiplying by 360 instead of (180/π)²: 360 degrees is a 1D circumference angle. For 2D spherical solid angle, 1 spat contains 129,600 / π deg² (≈ 41,253 deg²), not 360 deg².",
      "Dividing instead of multiplying: To convert spats to square degrees, multiply by 129,600 / π. Division is used only for the reverse conversion from square degrees to spats.",
      "Confusing square degrees with square arcminutes: 1 square degree contains 3,600 square arcminutes."
    ]
  },
  faqs: [
    {
      question: "How many square degrees are in 1 spat?",
      answer: "There are approximately 41,252.96125 square degrees in 1 spat. The exact mathematical formula is 129,600 / π square degrees."
    },
    {
      question: "What is the formula to convert spats to square degrees?",
      answer: "The formula is: deg² = sp × (129,600 / π) ≈ sp × 41,252.96125."
    },
    {
      question: "How many square degrees are in 0.5 spat (a hemisphere)?",
      answer: "0.5 spat equals approximately 20,626.48 square degrees (64,800 / π deg²)."
    },
    {
      question: "Why is the total area of the celestial sphere 41,253 square degrees?",
      answer: "Because a full sphere encompasses 4π steradians, and 1 steradian equals (180 / π)² square degrees. Multiplying 4π × (180 / π)² gives 129,600 / π ≈ 41,252.96 deg²."
    },
    {
      question: "How many square degrees is 0.25 spat?",
      answer: "0.25 spat equals approximately 10,313.24 square degrees (32,400 / π deg²)."
    },
    {
      question: "How do I convert square degrees back to spats?",
      answer: "To convert square degrees to spats, divide by 41,252.96125, or multiply by π / 129,600 ≈ 0.0000242407 (sp = deg² ÷ 41,252.96125)."
    },
    {
      question: "What percentage of the sky is 1,000 square degrees?",
      answer: "1,000 square degrees represents 1,000 ÷ 41,252.96 ≈ 0.02424 spat (approximately 2.42% of the entire celestial sphere)."
    },
    {
      question: "How many constellations cover the 1 spat celestial sphere?",
      answer: "The 88 official constellations recognized by the International Astronomical Union (IAU) divide the full 1 spat (41,252.96 deg²) sphere into contiguous regions."
    }
  ],
  relatedList: [
    { label: "Spat to Steradian", from: "spat", to: "steradian" },
    { label: "Spat to Square Arcminute", from: "spat", to: "square-arcmin" },
    { label: "Spat to Square Arcsecond", from: "spat", to: "square-arcsec" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Square Degree to Spat", from: "square-degree", to: "spat" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomical unit representations including steradian and degree",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
