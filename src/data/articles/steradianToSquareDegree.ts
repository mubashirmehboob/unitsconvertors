import { CustomArticleData } from "./types";

export const steradianToSquareDegreeArticle: CustomArticleData = {
  fromUnitId: "steradian",
  toUnitId: "square-degree",
  seoTitle: "Steradian to Square Degree Converter (sr to deg²) - UnitsConvertors",
  metaDescription: "Convert steradians to square degrees (sr to deg²) accurately. Learn the solid angle formula (deg² = sr × (180/π)²), calculation steps, tables, and FAQs.",
  h1: "Steradian to Square Degree Converter",
  introduction: [
    "Converting steradians (sr) to square degrees (deg² or sq deg) translates standard SI solid angles into the angular-area units widely used in observational astronomy and sensor field-of-view specifications.",
    "Because 1 radian equals 180 / π degrees (approximately 57.29578°), 1 steradian (which corresponds dimensionally to 1 square radian) is equal to (180 / π)² square degrees (approximately 3,282.80635 deg²). Converting steradians to square degrees requires multiplying the steradian value by (180 / π)².",
    "This reference explains the mathematical derivation connecting steradians to square degrees, provides step-by-step conversion examples, offers a conversion lookup table, and answers common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert steradians (sr) to square degrees (deg²), multiply the steradian value by (180 / π)², which is approximately 3,282.80635. For example, 1 steradian equals approximately 3,282.81 square degrees.",
    formulaDisplay: "Square Degrees (deg²) = Steradians (sr) × (180 ÷ π)²",
    subtext: "1 sr ≈ 3,282.80635 deg² (1 deg² ≈ 0.0003046174 sr)."
  },
  aboutSourceUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a surface area of r². It provides the standard foundation for radiometry and photometry."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Degree (deg² or sq deg)",
    text: "The square degree (deg² or sq deg) is a non-SI unit of solid angle corresponding to a square angular patch of 1 degree by 1 degree. It is widely used in astronomy to describe telescope fields of view and regional sky areas."
  },
  relationship: "One steradian equals (180/π)² square degrees (≈ 3,282.80635 deg²). A complete sphere contains 4π steradians, which equals exactly 129,600/π square degrees (≈ 41,252.96125 deg²).",
  relationshipTitle: "Steradian to Square Degree Scaling",
  relationshipItems: [
    { label: "1 sr", value: "≈ 3,282.806 deg²" },
    { label: "π sr (≈ 3.14159 sr)", value: "≈ 10,313.240 deg² (1/4 sphere)" },
    { label: "2π sr (≈ 6.28319 sr)", value: "≈ 20,626.481 deg² (Hemisphere)" },
    { label: "4π sr (≈ 12.56637 sr)", value: "≈ 41,252.961 deg² (Full sphere)" }
  ],
  formula: {
    text: "Multiply the solid angle in steradians by (180 / π)², or 32,400 / π² (approximately 3,282.80635), to calculate square degrees.",
    math: "\\text{deg}^2 = \\text{sr} \\times \\left(\\frac{180}{\\pi}\\right)^2 = \\text{sr} \\times \\frac{32,400}{\\pi^2} \\approx \\text{sr} \\times 3,282.80635",
    subtext: "Where (180 / π)² ≈ 3282.806350011744."
  },
  practicalTip: {
    title: "Hemisphere Benchmark",
    text: "An unobstructed hemispherical view (2π steradians) corresponds to approximately 20,626.48 square degrees, which is exactly half of the full 41,252.96 square degree sphere."
  },
  expertNote: {
    title: "Exact Rational Form",
    text: "In analytical calculations, using the exact expression sr × (32,400 / π²) prevents decimal rounding errors across multiple steps."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 1 Steradian to Square Degrees",
        subtitle: "Convert the standard SI unit of 1 steradian to square degrees.",
        steps: [
          "Identify solid angle: 1.0 sr.",
          "Apply conversion multiplier: deg² = 1.0 × (180 / π)².",
          "Compute (180 / 3.14159265)² = 32,400 / 9.8696044 ≈ 3,282.80635.",
          "Result: 1 steradian equals approximately 3,282.81 square degrees."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (2π sr)",
        subtitle: "Convert the solid angle of a hemisphere (2π steradians) into square degrees.",
        steps: [
          "Identify solid angle: 2π sr ≈ 6.2831853 sr.",
          "Apply conversion formula: deg² = 2π × (32,400 / π²).",
          "Simplify algebraically: deg² = 64,800 / π ≈ 20,626.48.",
          "Result: 2π steradians equals approximately 20,626.48 square degrees."
        ]
      },
      {
        title: "Example 3: Optical Cone (0.005 sr)",
        subtitle: "Convert a small solid angle of 0.005 steradians to square degrees.",
        steps: [
          "Identify solid angle: 0.005 sr.",
          "Apply conversion formula: deg² = 0.005 × 3,282.80635.",
          "Calculate: 0.005 × 3,282.80635 = 16.41403 deg².",
          "Result: 0.005 steradian equals approximately 16.41 square degrees."
        ]
      }
    ]
  },
  table: {
    title: "Steradian to Square Degree Conversion Table",
    headers: ["Steradians (sr)", "Square Degrees (deg²)", "Exact Value (deg²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.001 sr", toVal: "3.2828 deg²", extra: "32.4 / π² deg²", extra2: "Small sensor field" },
      { fromVal: "0.01 sr", toVal: "32.828 deg²", extra: "324 / π² deg²", extra2: "Intermediate field" },
      { fromVal: "0.1 sr", toVal: "328.28 deg²", extra: "3,240 / π² deg²", extra2: "Wide angular field" },
      { fromVal: "0.5 sr", toVal: "1,641.40 deg²", extra: "16,200 / π² deg²", extra2: "Broad emission sector" },
      { fromVal: "1.0 sr", toVal: "3,282.81 deg²", extra: "32,400 / π² deg²", extra2: "SI solid angle unit (1 rad²)" },
      { fromVal: "3.14159 sr (π)", toVal: "10,313.24 deg²", extra: "32,400 / π deg²", extra2: "One quadrant (25% of sphere)" },
      { fromVal: "6.28319 sr (2π)", toVal: "20,626.48 deg²", extra: "64,800 / π deg²", extra2: "Hemisphere (50% of sphere)" },
      { fromVal: "12.56637 sr (4π)", toVal: "41,252.96 deg²", extra: "129,600 / π deg²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Steradian to Square Degree Conversion",
    items: [
      {
        title: "Observational Astronomy",
        text: "Converting sensor solid angles from SI steradians into square degrees to evaluate sky survey coverage."
      },
      {
        title: "Optical Instrument Specifications",
        text: "Relating detector solid angles to angular fields of view in degrees."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting between SI radiometric units and standard astronomical angular area coordinates."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting sr to deg²",
    items: [
      "Multiplying by 57.2958 instead of (57.2958)²: 57.2958 is the 1D planar angle conversion (degrees per radian). For 2D solid angle, the factor must be squared: (180/π)² ≈ 3,282.806.",
      "Confusing square degrees with spherical surface area in meters squared: Square degrees measure angular solid area on a sphere regardless of physical radius.",
      "Confusing square degrees with square arcminutes: 1 square degree equals exactly 3,600 square arcminutes (60 × 60)."
    ]
  },
  faqs: [
    {
      question: "How many square degrees are in 1 steradian?",
      answer: "There are approximately 3,282.80635 square degrees in 1 steradian (exact formula: 32,400 / π² deg²)."
    },
    {
      question: "What is the formula to convert steradians to square degrees?",
      answer: "The formula is: deg² = sr × (180 / π)² ≈ sr × 3,282.80635."
    },
    {
      question: "How many square degrees are in a full sphere?",
      answer: "A full sphere (4π steradians) contains approximately 41,252.96 square degrees (exact formula: 129,600 / π deg²)."
    },
    {
      question: "How many square degrees make up a visible hemisphere?",
      answer: "A hemisphere (2π steradians) contains approximately 20,626.48 square degrees (64,800 / π deg²)."
    },
    {
      question: "Why is 1 steradian equal to (180/π)² square degrees?",
      answer: "Because 1 steradian is 1 square radian (1 rad²), and 1 radian equals 180 / π degrees. Squaring both sides yields 1 rad² = (180 / π)² deg² ≈ 3,282.80635 deg²."
    },
    {
      question: "How do I convert square degrees back to steradians?",
      answer: "To convert square degrees to steradians, divide by (180 / π)², or multiply by (π / 180)² ≈ 0.0003046174 (sr = deg² ÷ 3,282.80635)."
    },
    {
      question: "What is the largest constellation in square degrees?",
      answer: "Hydra is the largest official constellation, covering approximately 1,303 square degrees (about 0.3969 steradians)."
    },
    {
      question: "Is the square degree an official SI unit?",
      answer: "No. The square degree is a non-SI unit widely accepted in astronomy, whereas the steradian is the official SI unit for solid angle."
    }
  ],
  relatedList: [
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" },
    { label: "Steradian to Spat", from: "steradian", to: "spat" },
    { label: "Steradian to Square Radian", from: "steradian", to: "square-radian" },
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomical unit representations including steradian and degree",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
