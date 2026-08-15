import { CustomArticleData } from "./types";

export const spatToSquareArcminuteArticle: CustomArticleData = {
  fromUnitId: "spat",
  toUnitId: "square-arcmin",
  seoTitle: "Spat to Square Arcminute Converter (sp to arcmin²) - UnitsConvertors",
  metaDescription: "Convert spats to square arcminutes (sp to arcmin²) accurately. Learn the solid angle formula (arcmin² = sp × 466,560,000/π), calculation steps, tables, and FAQs.",
  h1: "Spat to Square Arcminute Converter",
  introduction: [
    "Converting spats to square arcminutes expresses a solid angle relative to the full-sphere definition of one spat.",
    "A full sphere encompasses a solid angle of 1 spat, which equals exactly 4π steradians. Because 1 square degree contains 3,600 square arcminutes (60 × 60) and 1 full spat equals 129,600 / π square degrees, 1 complete spat equals exactly 466,560,000 / π square arcminutes (approximately 148,510,660.50 arcmin²).",
    "This reference explains the mathematical derivation linking spats to square arcminutes, provides step-by-step conversion examples, provides a numerical reference table, and answers common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert spats (sp) to square arcminutes (arcmin²), multiply the spat value by 466,560,000 / π (approximately 148,510,660.50). For example, 1 spat equals approximately 148,510,660.50 square arcminutes.",
    formulaDisplay: "Square Arcminutes (arcmin²) = Spats (sp) × (466,560,000 ÷ π)",
    subtext: "1 sp ≈ 1.485107 × 10⁸ arcmin² (1 arcmin² ≈ 6.733523 × 10⁻⁹ sp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. It is primarily used in geometric analysis and theoretical physics to represent complete spherical boundaries or whole-sky solid angles."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcminute (arcmin² or sq arcmin)",
    text: "A square arcminute (arcmin²) is a unit of solid angle based on the square of the arcminute angular measure. It is commonly used in astronomy to describe small areas of the sky."
  },
  relationship: "One spat represents a full sphere and equals exactly 466,560,000/π square arcminutes (≈ 148,510,660.50 arcmin²). A hemisphere (0.5 sp) equals 233,280,000/π square arcminutes (≈ 74,255,330.25 arcmin²).",
  relationshipTitle: "Spat to Square Arcminute Scaling",
  relationshipItems: [
    { label: "0.01 sp (1% of Sky)", value: "≈ 1,485,107 arcmin²" },
    { label: "0.25 sp (1/4 Sphere)", value: "≈ 37,127,665 arcmin²" },
    { label: "0.50 sp (Hemisphere)", value: "≈ 74,255,330 arcmin²" },
    { label: "1.00 sp (Full Sphere)", value: "≈ 148,510,661 arcmin² (1.485 × 10⁸)" }
  ],
  formula: {
    text: "Multiply the solid angle in spats by 466,560,000 / π (approximately 148,510,660.50) to calculate square arcminutes.",
    math: "\\text{arcmin}^2 = \\text{sp} \\times \\frac{466,560,000}{\\pi} \\approx \\text{sp} \\times 148,510,660.50",
    subtext: "Where 466,560,000 / π = 4π × (10,800 / π)²."
  },
  practicalTip: {
    title: "Exact Derivation from Square Degrees",
    text: "Because 1 spat equals 129,600 / π square degrees, and each square degree contains (60 × 60) = 3,600 square arcminutes, multiplying (129,600 / π) × 3,600 yields the exact constant 466,560,000 / π square arcminutes."
  },
  expertNote: {
    title: "Geometric Precision & Planar Subtense",
    text: "While an arcminute is a planar angular measure (1/60 of a degree), solid angle in square arcminutes represents the square of this angular metric on the celestial sphere, relating directly to steradians via 1 arcmin² = (π / 10,800)² sr."
  },
  examples: {
    title: "Step-by-Step Spat to Square Arcminute Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Spat to Square Arcminutes",
        subtitle: "Convert 1 full celestial sphere into square arcminutes.",
        steps: [
          "Identify solid angle: 1.0 sp.",
          "Apply conversion multiplier: arcmin² = 1.0 × (466,560,000 / π).",
          "Compute 466,560,000 ÷ 3.1415926536 ≈ 148,510,660.50.",
          "Result: 1 spat equals approximately 148,510,660.50 square arcminutes (1.48511 × 10⁸ arcmin²)."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (0.5 sp)",
        subtitle: "Convert the visible sky hemisphere (0.5 spat) into square arcminutes.",
        steps: [
          "Identify solid angle: 0.5 sp.",
          "Apply conversion formula: arcmin² = 0.5 × (466,560,000 / π).",
          "Calculate: 233,280,000 ÷ 3.1415926536 ≈ 74,255,330.25.",
          "Result: 0.5 spat equals approximately 74,255,330.25 square arcminutes."
        ]
      },
      {
        title: "Example 3: Fractional Patch (0.001 sp)",
        subtitle: "Convert 0.001 spat into square arcminutes.",
        steps: [
          "Identify solid angle: 0.001 sp.",
          "Apply conversion formula: arcmin² = 0.001 × 148,510,660.50.",
          "Calculate: 0.001 × 148,510,660.50 = 148,510.66 arcmin².",
          "Result: 0.001 spat equals approximately 148,510.66 square arcminutes (about 41.25 square degrees)."
        ]
      }
    ]
  },
  table: {
    title: "Spat to Square Arcminute Conversion Reference Table",
    headers: ["Spats (sp)", "Square Arcminutes (arcmin²)", "Square Degrees Equivalent (deg²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.0001 sp", toVal: "14,851.07 arcmin²", extra: "4.125296 deg²", extra2: "1 / 10,000 of sphere" },
      { fromVal: "0.001 sp", toVal: "148,510.66 arcmin²", extra: "41.252961 deg²", extra2: "1 / 1,000 of sphere" },
      { fromVal: "0.01 sp", toVal: "1,485,106.61 arcmin²", extra: "412.529612 deg²", extra2: "1% of sphere" },
      { fromVal: "0.05 sp", toVal: "7,425,533.03 arcmin²", extra: "2,062.648063 deg²", extra2: "5% of sphere" },
      { fromVal: "0.10 sp", toVal: "14,851,066.05 arcmin²", extra: "4,125.296125 deg²", extra2: "10% of sphere" },
      { fromVal: "0.25 sp", toVal: "37,127,665.13 arcmin²", extra: "10,313.240312 deg²", extra2: "One quadrant (25%)" },
      { fromVal: "0.50 sp", toVal: "74,255,330.25 arcmin²", extra: "20,626.480625 deg²", extra2: "Hemisphere (50%)" },
      { fromVal: "1.00 sp", toVal: "148,510,660.50 arcmin²", extra: "41,252.961249 deg²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Spat to Square Arcminute Conversion",
    items: [
      {
        title: "Astronomical Field-of-View Scaling",
        text: "Relating large celestial areas or hemispherical sky regions to square arcminutes when calculating angular area coverage."
      },
      {
        title: "Observational Survey Mapping",
        text: "Expressing whole-sky or wide-field astronomical survey limits in terms of square arcminutes."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting between different solid-angle units used in geometry and astronomy."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Spat to Square Arcminute Conversion",
    items: [
      "Multiplying by 60 instead of 3,600 when converting from square degrees: 1 square degree contains 3,600 square arcminutes (60 × 60), not 60.",
      "Dividing instead of multiplying: To convert spats to square arcminutes, multiply by 466,560,000 / π. Division is used only for the reverse conversion from square arcminutes to spats.",
      "Confusing square arcminutes with square arcseconds: 1 square arcminute equals 3,600 square arcseconds."
    ]
  },
  faqs: [
    {
      question: "How many square arcminutes are in 1 spat?",
      answer: "There are approximately 148,510,660.50 square arcminutes in 1 spat. The exact mathematical value is 466,560,000 / π square arcminutes."
    },
    {
      question: "What is the formula to convert spats to square arcminutes?",
      answer: "The formula is: arcmin² = sp × (466,560,000 / π) ≈ sp × 148,510,660.50."
    },
    {
      question: "How many square arcminutes are in a hemisphere (0.5 spat)?",
      answer: "A hemisphere (0.5 spat) equals approximately 74,255,330.25 square arcminutes (233,280,000 / π arcmin²)."
    },
    {
      question: "How do I convert square arcminutes back to spats?",
      answer: "To convert square arcminutes to spats, divide by 148,510,660.50, or multiply by π / 466,560,000 ≈ 6.733523 × 10⁻⁹ (sp = arcmin² ÷ 148,510,660.50)."
    },
    {
      question: "How many square arcminutes are in 0.25 spat (one quadrant)?",
      answer: "0.25 spat (one quadrant of a sphere) equals exactly 116,640,000 / π square arcminutes, which is approximately 37,127,665.13 arcmin²."
    },
    {
      question: "How many square arcminutes are in 0.01 spat (1% of the sphere)?",
      answer: "0.01 spat equals approximately 1,485,106.61 square arcminutes (about 412.53 square degrees)."
    },
    {
      question: "Why is 1 spat equal to 466,560,000 / π arcmin²?",
      answer: "Because 1 spat = 129,600 / π square degrees, and 1 square degree contains 3,600 square arcminutes. Multiplying (129,600 / π) × 3,600 yields exactly 466,560,000 / π arcmin²."
    },
    {
      question: "What is the difference between a square arcminute and a square degree?",
      answer: "A square degree is exactly 3,600 times larger than a square arcminute (1 deg² = 3,600 arcmin²)."
    }
  ],
  relatedList: [
    { label: "Spat to Square Arcsecond", from: "spat", to: "square-arcsec" },
    { label: "Spat to Square Degree", from: "spat", to: "square-degree" },
    { label: "Spat to Steradian", from: "spat", to: "steradian" },
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomy-related unit representations including steradian and arcminute",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
