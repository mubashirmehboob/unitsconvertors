import { CustomArticleData } from "./types";

export const spatToSquareArcsecondArticle: CustomArticleData = {
  fromUnitId: "spat",
  toUnitId: "square-arcsec",
  seoTitle: "Spat to Square Arcsecond Converter (sp to arcsec²) - UnitsConvertors",
  metaDescription: "Convert spats to square arcseconds (sp to arcsec²) accurately. Learn the solid angle formula (arcsec² = sp × 1.6796 × 10¹²/π), steps, tables, and FAQs.",
  h1: "Spat to Square Arcsecond Converter",
  introduction: [
    "Converting spats (sp) to square arcseconds (arcsec² or sq arcsec) provides a direct way to express a whole-sphere solid angle in the much smaller angular-area units commonly used in astronomical measurements.",
    "A full sphere encompasses a solid angle of 1 spat, which equals exactly 4π steradians. Because one arcsecond corresponds to π / 648,000 radians, one square arcsecond is equal to (π / 648,000)² steradians. Dividing 4π steradians by (π / 648,000)² steradians yields exactly 1,679,616,000,000 / π square arcseconds (approximately 534,638,377,792.47 arcsec²).",
    "This reference explains the mathematical derivation connecting spats to square arcseconds, demonstrates step-by-step conversion calculations, provides a numerical reference table, and answers common questions regarding solid-angle geometry."
  ],
  quickAnswer: {
    text: "To convert spats (sp) to square arcseconds (arcsec²), multiply the spat value by 1,679,616,000,000 / π (approximately 534,638,377,792.47). For example, 1 spat equals approximately 5.34638 × 10¹¹ square arcseconds.",
    formulaDisplay: "Square Arcseconds (arcsec²) = Spats (sp) × (1,679,616,000,000 ÷ π)",
    subtext: "1 sp ≈ 5.346384 × 10¹¹ arcsec² (1 arcsec² ≈ 1.870423 × 10⁻¹² sp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. The spat is an uncommon unit of solid angle used mainly as a convenient way to represent a complete spherical solid angle."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcsecond (arcsec² or sq arcsec)",
    text: "A square arcsecond (arcsec²) is a solid-angle unit corresponding to the angular area associated with one arcsecond by one arcsecond (1/3,600 of a degree per side). It is commonly used in astronomy for small fields of view, detector pixel scales, and surface brightness measurements."
  },
  relationship: "One spat represents a full sphere and equals exactly 1,679,616,000,000/π square arcseconds (≈ 5.346384 × 10¹¹ arcsec²). A hemisphere (0.5 sp) equals approximately 2.673192 × 10¹¹ square arcseconds.",
  relationshipTitle: "Spat to Square Arcsecond Scaling",
  relationshipItems: [
    { label: "0.001 sp (0.1% of Sky)", value: "≈ 534,638,378 arcsec²" },
    { label: "0.01 sp (1% of Sky)", value: "≈ 5,346,383,778 arcsec² (5.346 × 10⁹)" },
    { label: "0.50 sp (Hemisphere)", value: "≈ 267,319,188,896 arcsec² (2.673 × 10¹¹)" },
    { label: "1.00 sp (Full Sphere)", value: "≈ 534,638,377,793 arcsec² (5.346 × 10¹¹)" }
  ],
  formula: {
    text: "Multiply the solid angle in spats by 1,679,616,000,000 / π (approximately 534,638,377,792.47) to calculate square arcseconds.",
    math: "\\text{arcsec}^2 = \\text{sp} \\times \\frac{1,679,616,000,000}{\\pi} \\approx \\text{sp} \\times 5.34638378 \\times 10^{11}",
    subtext: "Where 1,679,616,000,000 / π = 4π ÷ (π / 648,000)²."
  },
  practicalTip: {
    title: "All-Sky Angular Pixel Benchmark",
    text: "As an idealized benchmark, dividing the full-sky solid angle (1 spat) by 1 arcsec² gives approximately 534.6 billion angular pixels (534.6 gigapixels)."
  },
  expertNote: {
    title: "Surface Brightness Photometry",
    text: "Expressing angular areas in square arcseconds can be useful when working with astronomical surface-brightness measurements reported per square arcsecond across broad regions of the sky."
  },
  examples: {
    title: "Step-by-Step Spat to Square Arcsecond Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Spat to Square Arcseconds",
        subtitle: "Express the entire 1 spat celestial sphere in square arcseconds.",
        steps: [
          "Identify solid angle: 1.0 sp.",
          "Apply conversion multiplier: arcsec² = 1.0 × (1,679,616,000,000 / π).",
          "Compute 1,679,616,000,000 ÷ 3.1415926536 ≈ 534,638,377,792.47.",
          "Result: 1 spat equals approximately 534.64 billion square arcseconds (5.34638 × 10¹¹ arcsec²)."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (0.5 sp)",
        subtitle: "Convert the visible sky hemisphere (0.5 spat) to square arcseconds.",
        steps: [
          "Identify solid angle: 0.5 sp.",
          "Apply conversion formula: arcsec² = 0.5 × (1,679,616,000,000 / π).",
          "Calculate: 0.5 × 534,638,377,792.47 = 267,319,188,896.24.",
          "Result: 0.5 spat equals approximately 267.32 billion square arcseconds."
        ]
      },
      {
        title: "Example 3: Fractional Celestial Patch (0.0001 sp)",
        subtitle: "Convert 0.0001 spat into square arcseconds.",
        steps: [
          "Identify solid angle: 0.0001 sp.",
          "Apply conversion formula: arcsec² = 0.0001 × 534,638,377,792.47.",
          "Calculate: 0.0001 × 534,638,377,792.47 = 53,463,837.78.",
          "Result: 0.0001 spat equals approximately 53,463,838 square arcseconds."
        ]
      }
    ]
  },
  table: {
    title: "Spat to Square Arcsecond Conversion Reference Table",
    headers: ["Spats (sp)", "Square Arcseconds (arcsec²)", "Square Degrees Equivalent (deg²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.00001 sp", toVal: "5,346,383.78 arcsec²", extra: "0.412530 deg²", extra2: "1 / 100,000 of full sphere" },
      { fromVal: "0.0001 sp", toVal: "53,463,837.78 arcsec²", extra: "4.125296 deg²", extra2: "1 / 10,000 of full sphere" },
      { fromVal: "0.001 sp", toVal: "534,638,377.79 arcsec²", extra: "41.252961 deg²", extra2: "1 / 1,000 of full sphere" },
      { fromVal: "0.01 sp", toVal: "5,346,383,777.93 arcsec²", extra: "412.529612 deg²", extra2: "1% of full sphere" },
      { fromVal: "0.10 sp", toVal: "53,463,837,779.25 arcsec²", extra: "4,125.296125 deg²", extra2: "10% of full sphere" },
      { fromVal: "0.25 sp", toVal: "133,659,594,448.12 arcsec²", extra: "10,313.240312 deg²", extra2: "One quadrant (25% of sphere)" },
      { fromVal: "0.50 sp", toVal: "267,319,188,896.24 arcsec²", extra: "20,626.480625 deg²", extra2: "Hemisphere (50% of sphere)" },
      { fromVal: "1.00 sp", toVal: "534,638,377,792.47 arcsec²", extra: "41,252.961249 deg²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Spat to Square Arcsecond Conversion",
    items: [
      {
        title: "Astronomical Surface Brightness",
        text: "Expressing angular areas in square arcseconds can be useful when working with astronomical surface-brightness measurements reported per square arcsecond."
      },
      {
        title: "Theoretical All-Sky Angular Sampling",
        text: "Comparing full-sky spherical boundaries with fine angular grids and detector pixel solid angles in theoretical models."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting between spherical solid-angle units (spat, steradian) and small angular area units (square arcsecond) in optical physics calculations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Spat to Square Arcsecond Conversions",
    items: [
      "Rounding too early: Because the conversion factor contains π, rounding it too aggressively can reduce accuracy. Keep sufficient precision during intermediate calculations and round only the final displayed result.",
      "Confusing linear arcseconds with square arcseconds: The arcsecond is a unit of plane angle (1D), whereas the square arcsecond is a unit of solid angle (2D).",
      "Dividing instead of multiplying: To convert spats to square arcseconds, multiply by 1,679,616,000,000 / π. Division is only used for the reverse conversion from square arcseconds to spats."
    ]
  },
  faqs: [
    {
      question: "How many square arcseconds are in 1 spat?",
      answer: "There are approximately 534,638,377,792.47 square arcseconds in 1 spat. The exact mathematical value is 1,679,616,000,000 / π square arcseconds."
    },
    {
      question: "What is the formula to convert spats to square arcseconds?",
      answer: "The formula is: arcsec² = sp × (1,679,616,000,000 / π) ≈ sp × 5.34638378 × 10¹¹."
    },
    {
      question: "How many square arcseconds are in a hemisphere (0.5 spat)?",
      answer: "A hemisphere (0.5 spat) equals approximately 267,319,188,896.24 square arcseconds (839,808,000,000 / π arcsec²)."
    },
    {
      question: "How do I convert square arcseconds back to spats?",
      answer: "To convert square arcseconds to spats, divide by 534,638,377,792.47, or multiply by π / 1,679,616,000,000 (sp = arcsec² ÷ 534,638,377,792.47)."
    },
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "There are exactly 12,960,000 square arcseconds in 1 square degree (3,600 × 3,600 = 12,960,000 arcsec²)."
    },
    {
      question: "How many square arcseconds are in 0.01 spat (1% of the sphere)?",
      answer: "0.01 spat equals approximately 5,346,383,777.93 square arcseconds (about 412.53 square degrees)."
    },
    {
      question: "Why is 1 spat equal to 1,679,616,000,000 / π arcsec²?",
      answer: "Because 1 spat = 4π steradians, and 1 steradian = (648,000 / π)² square arcseconds. Multiplying 4π × (648,000 / π)² gives 1,679,616,000,000 / π square arcseconds."
    },
    {
      question: "What is the difference between an arcsecond and a square arcsecond?",
      answer: "An arcsecond is a unit of 1D planar angle (1/3,600 of a degree), whereas a square arcsecond is a unit of 2D solid angle representing angular area."
    }
  ],
  relatedList: [
    { label: "Spat to Square Arcminute", from: "spat", to: "square-arcmin" },
    { label: "Spat to Square Degree", from: "spat", to: "square-degree" },
    { label: "Spat to Steradian", from: "spat", to: "steradian" },
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomical unit representations including steradian and arcsecond",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
