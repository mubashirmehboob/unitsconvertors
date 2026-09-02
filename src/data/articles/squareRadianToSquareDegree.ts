import { CustomArticleData } from "./types";

export const squareRadianToSquareDegreeArticle: CustomArticleData = {
  fromUnitId: "square-radian",
  toUnitId: "square-degree",
  seoTitle: "Square Radian to Square Degree Converter (rad² to deg²) - UnitsConvertors",
  metaDescription: "Convert square radians to square degrees (rad² to deg²) accurately. Master the conversion formula (deg² = rad² × (180/π)²), worked astrophysics examples, tables, and FAQs.",
  h1: "Square Radian to Square Degree Converter",
  introduction: [
    "Converting square radians (rad²) to square degrees (deg² or sq deg) translates solid angles expressed in pure mathematical calculus coordinates into the practical degree-based angular area units used by observational astronomers and optical engineers.",
    "Because 1 radian corresponds to 180 / π degrees (approximately 57.29578°), 1 square radian spans (180 / π)² square degrees (approximately 3,282.80635 deg²). Because 1 square radian is dimensionally and physically identical to 1 steradian, this calculation shares the exact same conversion factor as steradians to square degrees.",
    "This reference explains the mathematical derivation, provides step-by-step conversion examples for optics and sky surveys, provides a comprehensive lookup table, and answers common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert square radians (rad²) to square degrees (deg²), multiply the square radian value by (180 / π)², which is approximately 3,282.80635. For example, 0.5 square radians equals approximately 1,641.40 square degrees.",
    formulaDisplay: "Square Degrees (deg²) = Square Radians (rad²) × (180 ÷ π)²",
    subtext: "1 rad² ≈ 3,282.80635 deg² (1 deg² ≈ 0.0003046174 rad²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) is the geometric solid-angle unit representing a two-dimensional angular area of 1 radian by 1 radian on a sphere. Dimensionally equal to the steradian (1 rad² = 1 sr), it represents the natural unit resulting from spherical integration (dΩ = sin θ dθ dφ) in physics and calculus."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a non-SI unit of solid angle corresponding to a 1° by 1° square patch on a spherical surface. It is universally used in observational astronomy to quantify constellation boundaries, deep sky survey coverage, and telescope detector fields of view."
  },
  relationship: "One square radian equals exactly 32,400 / π² square degrees (≈ 3,282.80635 deg²). A complete sphere (4π rad²) contains exactly 129,600 / π square degrees (≈ 41,252.96125 deg²). A hemisphere (2π rad²) contains approximately 20,626.48 square degrees.",
  relationshipTitle: "Square Radian to Degree-Based Solid Angle Scaling",
  relationshipItems: [
    { label: "1 rad²", value: "≈ 3,282.806 deg² (1 steradian)" },
    { label: "0.1 rad²", value: "≈ 328.281 deg²" },
    { label: "π rad² (≈ 3.14159 rad²)", value: "≈ 10,313.240 deg² (Quarter sphere)" },
    { label: "2π rad² (≈ 6.28319 rad²)", value: "≈ 20,626.481 deg² (Hemisphere)" },
    { label: "4π rad² (≈ 12.56637 rad²)", value: "≈ 41,252.961 deg² (Full sphere / 1 Spat)" }
  ],
  formula: {
    text: "Multiply the solid angle in square radians by (180 / π)², or 32,400 / π² (approximately 3,282.80635001), to calculate square degrees.",
    math: "\\text{deg}^2 = \\text{rad}^2 \\times \\left(\\frac{180}{\\pi}\\right)^2 = \\text{rad}^2 \\times \\frac{32,400}{\\pi^2} \\approx \\text{rad}^2 \\times 3,282.80635",
    subtext: "Where (180 / π)² ≈ 3282.806350011744."
  },
  practicalTip: {
    title: "Exact Fraction for Programming",
    text: "In Python, MATLAB, or C++, use the expression rad2 * (180.0 / math.pi)**2 rather than hardcoded floats like 3282.8 to maintain 64-bit floating-point precision."
  },
  expertNote: {
    title: "Equivalence to Steradian Calculations",
    text: "Because 1 rad² is identically 1 sr, any equation or conversion tool designed for steradians applies identically to square radians."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.1 Square Radians to Square Degrees",
        subtitle: "Convert a medium optical cone aperture into square degrees.",
        steps: [
          "Identify solid angle in square radians: 0.1 rad².",
          "Apply conversion formula: deg² = 0.1 × (180 / π)².",
          "Calculate multiplier: (180 / 3.14159265)² ≈ 3,282.80635.",
          "Compute product: 0.1 × 3,282.80635 = 328.2806 deg².",
          "Result: 0.1 square radians equals approximately 328.28 square degrees."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (2π rad²)",
        subtitle: "Convert a 2π solid angle into astronomical square degrees.",
        steps: [
          "Identify solid angle: 2π rad² ≈ 6.2831853 rad².",
          "Apply formula: deg² = 2π × (32,400 / π²).",
          "Simplify algebraically: deg² = 64,800 / π ≈ 20,626.4806 deg².",
          "Result: 2π square radians equals approximately 20,626.48 square degrees."
        ]
      },
      {
        title: "Example 3: Small Laser Divergence Cone (0.002 rad²)",
        subtitle: "Convert a narrow beam solid angle to square degrees.",
        steps: [
          "Identify beam angle: 0.002 rad².",
          "Apply formula: deg² = 0.002 × 3,282.80635.",
          "Calculate: 0.002 × 3,282.80635 = 6.56561 deg².",
          "Result: 0.002 square radians equals approximately 6.57 square degrees."
        ]
      }
    ]
  },
  table: {
    title: "Square Radian to Square Degree Conversion Table",
    headers: ["Square Radians (rad²)", "Square Degrees (deg²)", "Exact Form", "Physical / Sky Benchmark"],
    rows: [
      { fromVal: "0.001 rad²", toVal: "3.2828 deg²", extra: "32.4 / π² deg²", extra2: "Narrow telescope field" },
      { fromVal: "0.01 rad²", toVal: "32.828 deg²", extra: "324 / π² deg²", extra2: "Medium detector mosaic" },
      { fromVal: "0.05 rad²", toVal: "164.14 deg²", extra: "1,620 / π² deg²", extra2: "Small constellation" },
      { fromVal: "0.10 rad²", toVal: "328.28 deg²", extra: "3,240 / π² deg²", extra2: "Medium constellation (Scorpius: 497 deg²)" },
      { fromVal: "0.50 rad²", toVal: "1,641.40 deg²", extra: "16,200 / π² deg²", extra2: "Large constellation (Hydra: 1,303 deg²)" },
      { fromVal: "1.00 rad²", toVal: "3,282.81 deg²", extra: "32,400 / π² deg²", extra2: "Unit Solid Angle (1 sr)" },
      { fromVal: "3.14159 rad² (π)", toVal: "10,313.24 deg²", extra: "32,400 / π deg²", extra2: "Quarter of full sphere (25%)" },
      { fromVal: "6.28319 rad² (2π)", toVal: "20,626.48 deg²", extra: "64,800 / π deg²", extra2: "Visible sky hemisphere (50%)" },
      { fromVal: "12.56637 rad² (4π)", toVal: "41,252.96 deg²", extra: "129,600 / π deg²", extra2: "Complete sphere (100% / 1 Spat)" }
    ]
  },
  applications: {
    title: "Applications of Square Radian to Square Degree Conversion",
    items: [
      {
        title: "Observational Astronomy and Telescope Sizing",
        text: "Translating detector solid angles derived from spherical optics formulas (rad²) into square degrees to compare against sky catalog footprints."
      },
      {
        title: "Optical Engineering & Sensor FOV Mapping",
        text: "Converting theoretical angular emission cones into square degrees for mechanical baffling and stray light suppression modeling."
      },
      {
        title: "Radar and Radio Telescope Beam Analysis",
        text: "Relating main-beam solid angle Ω_A (rad²) to antenna half-power beamwidth coverage areas in square degrees."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting rad² to deg²",
    items: [
      "Multiplying by 57.2958 instead of (57.2958)²: 57.2958 is the 1D planar conversion factor (deg/rad). Solid angle requires the square: (180/π)² ≈ 3,282.806.",
      "Confusing square degrees with square arcminutes: 1 square radian contains over 11.8 million square arcminutes, whereas it contains 3,282.81 square degrees.",
      "Assuming a sphere has 360 square degrees: A full sphere contains 41,252.96 square degrees (129,600/π), not 360 or 360²."
    ]
  },
  faqs: [
    {
      question: "How do I convert square radians to square degrees?",
      answer: "Multiply the solid angle in square radians by (180 / π)², which is approximately 3,282.80635."
    },
    {
      question: "How many square degrees are in 1 square radian?",
      answer: "There are approximately 3,282.80635 square degrees in 1 square radian (exact: 32,400 / π² deg²)."
    },
    {
      question: "Why is 1 rad² equal to (180/π)² deg²?",
      answer: "Because 1 radian equals 180 / π degrees. When creating a 2D angular area, squaring both sides yields (180 / π)² ≈ 3,282.80635 deg²."
    },
    {
      question: "Is converting square radians to square degrees the same as steradians to square degrees?",
      answer: "Yes, exactly. Because 1 square radian equals exactly 1 steradian, both conversions use the identical multiplier of (180 / π)² ≈ 3,282.80635."
    },
    {
      question: "How many square degrees are in a full sphere of 4π square radians?",
      answer: "A full sphere of 4π square radians contains exactly 129,600 / π square degrees, which is approximately 41,252.96 square degrees."
    },
    {
      question: "How do I convert square degrees back to square radians?",
      answer: "Multiply the square degree value by (π / 180)², or approximately 0.0003046174 (or divide by 3,282.80635)."
    },
    {
      question: "How many square degrees are in a hemisphere (2π rad²)?",
      answer: "A hemisphere has a solid angle of 2π square radians, which equals approximately 20,626.48 square degrees (64,800 / π deg²)."
    },
    {
      question: "What is the solid angle of a 10° by 10° square patch in square radians?",
      answer: "A 10° by 10° patch has an area of 100 square degrees. Converting to square radians: 100 ÷ 3,282.80635 ≈ 0.030462 rad² (or 0.030462 steradians)."
    }
  ],
  relatedList: [
    { label: "Square Degree to Square Radian", from: "square-degree", to: "square-radian" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" },
    { label: "Square Radian to Spat", from: "square-radian", to: "spat" },
    { label: "Square Radian to Square Arcminute", from: "square-radian", to: "square-arcmin" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Solid Angle Units",
    "International Astronomical Union (IAU) — Standards of Fundamental Astronomy",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
