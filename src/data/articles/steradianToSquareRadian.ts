import { CustomArticleData } from "./types";

export const steradianToSquareRadianArticle: CustomArticleData = {
  fromUnitId: "steradian",
  toUnitId: "square-radian",
  seoTitle: "Steradian to Square Radian Converter (sr to rad²) - UnitsConvertors",
  metaDescription: "Convert steradians to square radians (sr to rad²) with exact 1:1 identity. Learn the dimensional SI derivation, physical meaning, formulas, and FAQs.",
  h1: "Steradian to Square Radian Converter",
  introduction: [
    "Converting steradians (sr) to square radians (rad²) involves an exact one-to-one mathematical identity. The steradian is the SI derived unit of solid angle, defined as the solid angle subtended at the center of a sphere of radius r by a surface area equal to r².",
    "Because 1 steradian is dimensionally and numerically identical to 1 square radian (1 sr = 1 rad²), the conversion factor between the two units is exactly 1. While 'steradian' is the standardized SI name, 'square radian' is often used in mathematical physics and spherical calculus when evaluating double integrals over angular coordinates.",
    "This reference explains the mathematical connection between steradians and square radians, demonstrates calculation examples, provides a numerical reference table, and answers common questions on solid-angle geometry."
  ],
  quickAnswer: {
    text: "Steradians (sr) and square radians (rad²) are identical in magnitude (1 sr = 1 rad²). To convert steradians to square radians, multiply by 1.",
    formulaDisplay: "Square Radians (rad²) = Steradians (sr) × 1",
    subtext: "1 sr = 1 rad² (Exact 1:1 SI Identity)."
  },
  aboutSourceUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. It is a dimensionless derived unit (m² / m²) adopted by the General Conference on Weights and Measures (CGPM) to quantify solid angles in geometry and radiometry."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) expresses solid angle directly as the square of the SI planar angle unit (the radian). Because a differential solid angle on a sphere can be written as dΩ = sin(θ) dθ dϕ with both angles in radians, the resulting unit is naturally expressed as rad²."
  },
  relationship: "The steradian and square radian represent the exact same physical magnitude: 1 steradian equals exactly 1 square radian (1 sr = 1 rad²).",
  relationshipTitle: "Steradian to Square Radian 1:1 Identity",
  relationshipItems: [
    { label: "1 sr", value: "= 1.00 rad² (Exact 1:1)" },
    { label: "π sr (≈ 3.14159 sr)", value: "= π rad² (≈ 3.14159 rad²)" },
    { label: "2π sr (≈ 6.28319 sr)", value: "= 2π rad² (Hemisphere)" },
    { label: "4π sr (≈ 12.56637 sr)", value: "= 4π rad² (Full Sphere / 1 Spat)" }
  ],
  formula: {
    text: "Multiply the solid angle in steradians by 1 to express the value in square radians.",
    math: "\\text{rad}^2 = \\text{sr} \\times 1",
    subtext: "1 sr \\equiv 1\\text{ rad}^2 \\equiv 1\\text{ m}^2/\\text{m}^2"
  },
  practicalTip: {
    title: "Dimensional Verification",
    text: "In dimensional analysis, substituting 'sr' with 'rad²' or 1 (dimensionless) verifies that radiant intensity in W/sr integrates across solid angle to total radiant flux in Watts (W)."
  },
  expertNote: {
    title: "SI Terminology",
    text: "The BIPM established 'steradian' as a distinct named unit to avoid ambiguity between 2D planar angles (radians) and 3D solid angles (steradians)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 1 Steradian to Square Radians",
        subtitle: "Convert the standard SI unit of 1 sr to square radians.",
        steps: [
          "Identify known solid angle: 1.0 sr.",
          "Apply conversion identity: rad² = sr × 1.",
          "Calculate: 1.0 × 1 = 1.0 rad².",
          "Result: 1 steradian equals exactly 1 square radian."
        ]
      },
      {
        title: "Example 2: Hemispherical Solid Angle (2π sr)",
        subtitle: "Express the solid angle of a hemisphere in square radians.",
        steps: [
          "Identify known solid angle: 2π sr ≈ 6.2831853 sr.",
          "Apply conversion identity: rad² = 2π × 1.",
          "Calculate: 6.2831853 × 1 = 6.2831853 rad².",
          "Result: 2π steradians equals exactly 2π square radians."
        ]
      },
      {
        title: "Example 3: Optical Cone Divergence (0.0025 sr)",
        subtitle: "Convert a solid angle of 0.0025 sr into square radians.",
        steps: [
          "Identify known solid angle: 0.0025 sr.",
          "Apply conversion identity: rad² = 0.0025 × 1.",
          "Calculate: 0.0025 × 1 = 0.0025 rad².",
          "Result: 0.0025 steradian equals exactly 0.0025 square radian."
        ]
      }
    ]
  },
  table: {
    title: "Steradian to Square Radian Conversion Reference Table",
    headers: ["Steradians (sr)", "Square Radians (rad²)", "Sphere Fraction", "Geometric Description"],
    rows: [
      { fromVal: "0.01 sr", toVal: "0.01 rad²", extra: "1 / 1,257 of sphere", extra2: "Narrow solid angle" },
      { fromVal: "0.1 sr", toVal: "0.10 rad²", extra: "1 / 125.7 of sphere", extra2: "Directional cone" },
      { fromVal: "0.5 sr", toVal: "0.50 rad²", extra: "1 / 25.13 of sphere", extra2: "Intermediate cone" },
      { fromVal: "1.0 sr", toVal: "1.00 rad²", extra: "1 / 12.57 of sphere", extra2: "Unit solid angle" },
      { fromVal: "3.14159 sr (π)", toVal: "3.14159 rad²", extra: "1/4 of sphere", extra2: "One quadrant" },
      { fromVal: "6.28319 sr (2π)", toVal: "6.28319 rad²", extra: "1/2 of sphere", extra2: "Hemisphere" },
      { fromVal: "12.56637 sr (4π)", toVal: "12.56637 rad²", extra: "Full sphere", extra2: "Complete sphere (1 spat)" }
    ]
  },
  applications: {
    title: "Applications of Steradians & Square Radians",
    items: [
      {
        title: "Mathematical Physics & Double Integrals",
        text: "Using square radian notation when setting up surface integrals over spherical domains."
      },
      {
        title: "Radiometry & Optical Modeling",
        text: "Expressing radiant intensity and flux density across solid angles."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Verifying dimensional equivalences between SI and mathematical formulations."
      }
    ]
  },
  pitfalls: {
    title: "Common Clarifications & Distinctions",
    items: [
      "Assuming a numerical difference: 1 steradian is exactly 1 square radian (conversion multiplier = 1.0).",
      "Confusing radian with square radian: The radian (rad) is a 1D plane angle, whereas the square radian (rad²) is a 2D solid angle.",
      "Dimensional status: In SI, solid angle is a dimensionless derived unit (m² / m² = 1), but using named units prevents confusion between planar and spatial angles."
    ]
  },
  faqs: [
    {
      question: "Is a steradian the same as a square radian?",
      answer: "Yes. 1 steradian is mathematically and physically identical to 1 square radian (1 sr = 1 rad²)."
    },
    {
      question: "What is the formula to convert steradians to square radians?",
      answer: "The formula is: rad² = sr × 1."
    },
    {
      question: "Why does the name 'steradian' exist if it equals a square radian?",
      answer: "The BIPM established 'steradian' as a distinct SI name to distinguish 3D solid angles from 2D plane angles (radians) in scientific notation."
    },
    {
      question: "How many square radians are in a complete sphere?",
      answer: "A complete sphere contains 4π square radians (approximately 12.56637 rad²), which is equal to 4π steradians or 1 spat."
    },
    {
      question: "How many square radians are in a hemisphere?",
      answer: "A hemisphere contains 2π square radians (approximately 6.283185 rad²)."
    },
    {
      question: "Are steradians and square radians dimensionless?",
      answer: "Yes. In the SI system, solid angle is defined as surface area divided by radius squared (m² / m²), making it formally a dimensionless derived quantity."
    },
    {
      question: "Can I use 'rad²' interchangeably with 'sr' in physics equations?",
      answer: "Yes. In mathematical derivations and differential calculus, dΩ is often expanded as sin(θ) dθ dϕ rad², which integrates directly to steradians."
    },
    {
      question: "How do I convert square radians to square degrees?",
      answer: "Multiply square radians by (180 / π)² ≈ 3,282.80635 to calculate square degrees."
    }
  ],
  relatedList: [
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" },
    { label: "Steradian to Spat", from: "steradian", to: "spat" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Spat to Square Radian", from: "spat", to: "square-radian" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian as a dimensionless derived unit (m²/m²)",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
