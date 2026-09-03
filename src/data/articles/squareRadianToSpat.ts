import { CustomArticleData } from "./types";

export const squareRadianToSpatArticle: CustomArticleData = {
  fromUnitId: "square-radian",
  toUnitId: "spat",
  seoTitle: "Square Radian to Spat Converter (rad² to sp) - UnitsConvertors",
  metaDescription: "Convert square radians to spats (rad² to sp) accurately. Discover the full-sphere solid angle formula (sp = rad² / 4π), worked physics examples, tables, and FAQs.",
  h1: "Square Radian to Spat Converter",
  introduction: [
    "Converting square radians (rad²) to spats (sp) expresses three-dimensional solid angles calculated in calculus and physics as a direct fraction of a complete closed sphere.",
    "A spat represents the total solid angle of an entire sphere, which encompasses exactly 4π steradians (or 4π square radians, approximately 12.56637 rad²). Because 1 square radian is dimensionally equal to 1 steradian, converting square radians to spats involves dividing by 4π (or multiplying by 1 / 4π ≈ 0.0795775).",
    "This guide explains the solid-angle sphere geometry, details the exact fraction formulas, provides realistic worked examples from antenna theory and theoretical physics, and includes a comprehensive conversion table."
  ],
  quickAnswer: {
    text: "To convert square radians (rad²) to spats (sp), divide the square radian value by 4π (approximately 12.56637), or multiply by 1 / 4π ≈ 0.0795775. For example, 1 square radian equals approximately 0.07958 spats (about 7.96% of a complete sphere).",
    formulaDisplay: "Spats (sp) = Square Radians (rad²) ÷ 4π",
    subtext: "1 rad² ≈ 0.0795775 sp (1 sp = 4π rad² ≈ 12.56637 rad²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) is a dimensional representation of solid angle equivalent to the steradian (1 rad² = 1 sr). While mathematical calculus and double integrals across spherical coordinates frequently write the unit dimensionally as rad², the official SI coherent derived unit name is the steradian."
  },
  aboutTargetUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (symbol: sp) is a non-SI unit of solid angle representing the complete enclosed solid angle of an entire sphere (4π steradians, approximately 12.56637 sr). It is an uncommon unit primarily of theoretical or historical interest; modern astrophysics, optics, and radiometry rely almost exclusively on steradians and square degrees."
  },
  relationship: "One spat equals exactly 4π square radians (≈ 12.56637 rad²). Conversely, 1 square radian equals exactly 1 / (4π) spats (≈ 0.07957747 sp or 7.95775% of a full sphere). A hemisphere (2π rad²) equals exactly 0.5 spats.",
  relationshipTitle: "Square Radian to Full-Sphere Fractional Scaling",
  relationshipItems: [
    { label: "1 rad²", value: "≈ 0.0795775 sp (7.95775% sphere)" },
    { label: "2 rad²", value: "≈ 0.1591549 sp" },
    { label: "π rad² (≈ 3.14159 rad²)", value: "= 0.25 sp (1/4 sphere / 1 quadrant)" },
    { label: "2π rad² (≈ 6.28319 rad²)", value: "= 0.50 sp (Hemisphere)" },
    { label: "3π rad² (≈ 9.42478 rad²)", value: "= 0.75 sp (3/4 sphere)" },
    { label: "4π rad² (≈ 12.56637 rad²)", value: "= 1.00 sp (Full Sphere)" }
  ],
  formula: {
    text: "Divide the solid angle in square radians by 4π (approximately 12.5663706), or multiply by 1 / (4π) (approximately 0.0795774715), to determine spats.",
    math: "\\text{sp} = \\frac{\\text{rad}^2}{4\\pi} = \\text{rad}^2 \\times \\frac{1}{4\\pi} \\approx \\text{rad}^2 \\times 0.0795774715",
    subtext: "Where 1 / (4π) ≈ 0.07957747154594767."
  },
  practicalTip: {
    title: "Antenna Directivity Formulation",
    text: "Antenna directivity is defined as D = 4π / Ω_A, where Ω_A is beam solid angle in square radians. Notice that Ω_A / 4π is simply the beam solid angle in spats; directivity is the reciprocal of the beam solid angle in spats (D = 1 / sp)."
  },
  expertNote: {
    title: "Exact Analytical Fractions",
    text: "When solid angles are expressed in multiples of π (such as π, 2π, or π/2 rad²), converting to spats yields exact rational fractions (1/4, 1/2, or 1/8 spats), simplifying theoretical derivations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 1 Square Radian to Spats",
        subtitle: "Find the spherical fraction represented by 1 unit solid angle.",
        steps: [
          "Identify solid angle: 1.0 rad².",
          "Apply conversion formula: sp = 1.0 / (4π).",
          "Evaluate constant: 1 / (4 × 3.14159265) ≈ 0.0795775.",
          "Compute: 1.0 × 0.0795775 = 0.0795775 sp.",
          "Result: 1 square radian equals approximately 0.07958 spats (about 7.96% of a sphere)."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (2π rad²)",
        subtitle: "Convert the solid angle of an unobstructed horizon to spats.",
        steps: [
          "Identify solid angle: 2π rad².",
          "Apply formula: sp = 2π / (4π).",
          "Simplify algebraically: 2π / 4π = 1 / 2 = 0.5 sp.",
          "Result: 2π square radians equals exactly 0.5 spats."
        ]
      },
      {
        title: "Example 3: Optical Sensor Acceptance Cone (0.4 rad²)",
        subtitle: "Convert an optical detector cone into a fraction of a full sphere.",
        steps: [
          "Identify solid angle: 0.4 rad².",
          "Apply formula: sp = 0.4 / (4π).",
          "Calculate: 0.4 × 0.07957747 ≈ 0.031831 sp.",
          "Result: 0.4 square radians equals approximately 0.03183 spats (about 3.18% of the sphere)."
        ]
      }
    ]
  },
  table: {
    title: "Square Radian to Spat Conversion Table",
    headers: ["Square Radians (rad²)", "Spats (sp)", "Exact Expression", "Spherical Percentage"],
    rows: [
      { fromVal: "0.1 rad²", toVal: "0.00795775 sp", extra: "1 / (40π) sp", extra2: "0.79577% of sphere" },
      { fromVal: "0.5 rad²", toVal: "0.03978874 sp", extra: "1 / (8π) sp", extra2: "3.97887% of sphere" },
      { fromVal: "1.0 rad²", toVal: "0.07957747 sp", extra: "1 / (4π) sp", extra2: "7.95775% of sphere" },
      { fromVal: "1.57080 rad² (π/2)", toVal: "0.12500000 sp", extra: "1/8 sp", extra2: "12.50000% (Octant)" },
      { fromVal: "2.0 rad²", toVal: "0.15915494 sp", extra: "1 / (2π) sp", extra2: "15.91549% of sphere" },
      { fromVal: "3.14159 rad² (π)", toVal: "0.25000000 sp", extra: "1/4 sp", extra2: "25.00000% (Quadrant)" },
      { fromVal: "6.28319 rad² (2π)", toVal: "0.50000000 sp", extra: "1/2 sp", extra2: "50.00000% (Hemisphere)" },
      { fromVal: "9.42478 rad² (3π)", toVal: "0.75000000 sp", extra: "3/4 sp", extra2: "75.00000% (Three-quarters)" },
      { fromVal: "12.56637 rad² (4π)", toVal: "1.00000000 sp", extra: "1 sp", extra2: "100.00000% (Full Sphere)" }
    ]
  },
  applications: {
    title: "Applications of Square Radian to Spat Conversion",
    items: [
      {
        title: "Antenna Directivity and Beam Efficiency",
        text: "RF engineers calculate the fraction of power radiated into a specific solid angle by converting main-beam solid angle (rad²) into spats."
      },
      {
        title: "Astrophysical Flux Integration",
        text: "Cosmologists integrate isotropic diffuse radiation fields by normalizing square-radian detector apertures against 1 spat."
      },
      {
        title: "Acoustic and Ultrasonic Transducer Modeling",
        text: "Acoustic engineers convert directional sound beam apertures into spherical fractions to evaluate omnidirectional sound power levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting rad² to sp",
    items: [
      "Multiplying by 4π instead of dividing: 1 spat is larger than 1 square radian (1 sp = 4π rad² ≈ 12.57 rad²), so converting rad² to sp requires dividing by 4π.",
      "Confusing planar angle with solid angle: A planar circle is 2π radians, but a 3D sphere is 4π steradians (4π rad² = 1 spat).",
      "Confusing spat with steradian: 1 spat = 4π steradians (≈ 12.566 sr)."
    ]
  },
  faqs: [
    {
      question: "How do I convert square radians to spats?",
      answer: "Divide the solid angle in square radians by 4π (approximately 12.56637), or multiply by 0.0795775."
    },
    {
      question: "How many spats are in 1 square radian?",
      answer: "There are approximately 0.0795775 spats in 1 square radian (exact: 1 / 4π sp)."
    },
    {
      question: "How many square radians are in 1 spat?",
      answer: "There are exactly 4π square radians (approximately 12.56637 rad²) in 1 spat."
    },
    {
      question: "What is 1 spat?",
      answer: "A spat (sp) is the solid angle of a complete closed sphere, equal to 4π steradians (or 4π square radians)."
    },
    {
      question: "How many spats is a hemisphere?",
      answer: "A hemisphere has a solid angle of 2π square radians, which is exactly 0.5 spats (half of a full sphere)."
    },
    {
      question: "How do I convert spats back to square radians?",
      answer: "Multiply the spat value by 4π (approximately 12.56637 rad²/sp)."
    },
    {
      question: "Is square radian equivalent to steradian when converting to spats?",
      answer: "Yes. Because 1 square radian equals exactly 1 steradian, converting either to spats uses the exact same formula: divide by 4π."
    },
    {
      question: "What percentage of a sphere is 1 square radian?",
      answer: "One square radian represents approximately 7.95775% of the total surface area of a sphere."
    }
  ],
  relatedList: [
    { label: "Spat to Square Radian", from: "spat", to: "square-radian" },
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" },
    { label: "Square Radian to Square Degree", from: "square-radian", to: "square-degree" },
    { label: "Steradian to Spat", from: "steradian", to: "spat" },
    { label: "Square Degree to Spat", from: "square-degree", to: "spat" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Solid Angle Quantities",
    "IEEE Standard Definitions of Terms for Antennas (IEEE Std 145-2013)",
    "CRC Handbook of Chemistry and Physics — Units and Conversion Constants"
  ]
};
