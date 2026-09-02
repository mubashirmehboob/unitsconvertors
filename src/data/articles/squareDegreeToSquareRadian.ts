import { CustomArticleData } from "./types";

export const squareDegreeToSquareRadianArticle: CustomArticleData = {
  fromUnitId: "square-degree",
  toUnitId: "square-radian",
  seoTitle: "Square Degree to Square Radian Converter (deg² to rad²) - UnitsConvertors",
  metaDescription: "Convert square degrees to square radians (deg² to rad²) accurately. Learn the mathematical relationship (rad² = deg² × (π/180)²), worked examples, lookup tables, and FAQs.",
  h1: "Square Degree to Square Radian Converter",
  introduction: [
    "Converting square degrees (deg² or sq deg) to square radians (rad²) translates degree-based angular area measurements into the fundamental mathematical unit of solid angle.",
    "Because 1 radian equals 180 / π degrees (approximately 57.29578°), a square radian represents the solid angle subtended by a 1-radian by 1-radian surface patch, containing exactly (180 / π)² square degrees (approximately 3,282.80635 deg²). Dimensionally and physically, 1 square radian is identical to 1 steradian (1 rad² = 1 sr).",
    "This article explains the geometry connecting square degrees to square radians, presents step-by-step conversion methods, provides worked astrophysics and optics examples, and supplies a reference lookup table."
  ],
  quickAnswer: {
    text: "To convert square degrees (deg²) to square radians (rad²), multiply the square degree value by (π / 180)², which is approximately 0.0003046174 (or divide by 3,282.80635). For example, 100 square degrees equals approximately 0.030462 square radians.",
    formulaDisplay: "Square Radians (rad²) = Square Degrees (deg²) × (π ÷ 180)²",
    subtext: "1 deg² ≈ 0.0003046174 rad² (1 rad² = 1 sr ≈ 3,282.80635 deg²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a traditional unit of solid angle representing an area of 1 degree by 1 degree on the surface of a unit sphere. It is predominantly used in observational astronomy to characterize the field of view of telescopes, astronomical surveys, and constellation boundaries across the sky."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) is the geometric solid-angle representation of two orthogonal radian dimensions. Because the steradian is defined as surface area divided by radius squared (A/r² = m²/m² = rad²), 1 square radian is identically equivalent to 1 steradian (sr). It forms the natural coordinate basis in vector calculus, spherical trigonometry, and theoretical physics."
  },
  relationship: "One square degree equals exactly π² / 32,400 square radians (≈ 0.0003046174198 rad²). One square radian equals exactly 32,400 / π² square degrees (≈ 3,282.80635 deg²). A complete sphere encompasses 4π square radians (≈ 12.56637 rad²).",
  relationshipTitle: "Square Degree to Square Radian Proportions",
  relationshipItems: [
    { label: "1 deg²", value: "≈ 0.000304617 rad²" },
    { label: "100 deg²", value: "≈ 0.0304617 rad²" },
    { label: "1,000 deg²", value: "≈ 0.3046174 rad²" },
    { label: "3,282.806 deg²", value: "= 1.0 rad² (1 steradian)" },
    { label: "20,626.481 deg²", value: "= 2π rad² (Hemisphere)" },
    { label: "41,252.961 deg²", value: "= 4π rad² (Full Sphere)" }
  ],
  formula: {
    text: "Multiply the solid angle in square degrees by (π / 180)², or π² / 32,400 (approximately 0.0003046174198), to determine square radians.",
    math: "\\text{rad}^2 = \\text{deg}^2 \\times \\left(\\frac{\\pi}{180}\\right)^2 = \\text{deg}^2 \\times \\frac{\\pi^2}{32,400} = \\frac{\\text{deg}^2}{3,282.80635}",
    subtext: "Where (π / 180)² ≈ 0.0003046174197867086."
  },
  practicalTip: {
    title: "Equivalence to Steradians",
    text: "Remember that 1 square radian (rad²) is exactly 1 steradian (sr). If your calculation software requires steradians, your converted square radian numerical value is directly usable without additional adjustments."
  },
  expertNote: {
    title: "Mathematical Purity",
    text: "In theoretical physics and wave equations on spherical manifolds, using rad² explicitly denotes that the angular integration was conducted using natural dimensionless radian measures rather than arbitrary sexagesimal degree divisions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 50 Square Degrees to Square Radians",
        subtitle: "Convert a telescope field coverage area into square radians.",
        steps: [
          "Identify the solid angle: 50 deg².",
          "Apply conversion formula: rad² = 50 × (π / 180)².",
          "Calculate multiplier: (3.14159265 / 180)² ≈ 0.0003046174.",
          "Compute product: 50 × 0.0003046174 = 0.01523087 rad².",
          "Result: 50 square degrees equals approximately 0.015231 square radians."
        ]
      },
      {
        title: "Example 2: Wide-Field Sky Survey (5,000 deg²)",
        subtitle: "Convert a 5,000 square degree sky area into natural square radians.",
        steps: [
          "Identify solid angle: 5,000 deg².",
          "Apply formula: rad² = 5,000 ÷ 3,282.80635.",
          "Compute: 5,000 ÷ 3,282.80635 ≈ 1.523087 rad².",
          "Result: 5,000 square degrees equals approximately 1.5231 square radians."
        ]
      },
      {
        title: "Example 3: Constellation Ursa Major (1,280 deg²)",
        subtitle: "Convert the constellation area of the Great Bear into square radians.",
        steps: [
          "Identify area: 1,280 deg².",
          "Apply formula: rad² = 1,280 × (π² / 32,400).",
          "Calculate: 1,280 × 0.0003046174198 ≈ 0.3899103 rad².",
          "Result: 1,280 square degrees equals approximately 0.3899 square radians."
        ]
      }
    ]
  },
  table: {
    title: "Square Degree to Square Radian Conversion Table",
    headers: ["Square Degrees (deg²)", "Square Radians (rad²)", "Equivalent in Steradians (sr)", "Sky Region"],
    rows: [
      { fromVal: "1 deg²", toVal: "0.00030462 rad²", extra: "0.00030462 sr", extra2: "Small sensor sector" },
      { fromVal: "10 deg²", toVal: "0.00304617 rad²", extra: "0.00304617 sr", extra2: "Wide telescope field" },
      { fromVal: "50 deg²", toVal: "0.01523087 rad²", extra: "0.01523087 sr", extra2: "Small constellation (Crux: 68 deg²)" },
      { fromVal: "100 deg²", toVal: "0.03046174 rad²", extra: "0.03046174 sr", extra2: "Medium asterism" },
      { fromVal: "500 deg²", toVal: "0.15230871 rad²", extra: "0.15230871 sr", extra2: "Moderate constellation (Orion: 594 deg²)" },
      { fromVal: "1,000 deg²", toVal: "0.30461742 rad²", extra: "0.30461742 sr", extra2: "Large constellation (Ursa Major: 1,280 deg²)" },
      { fromVal: "3,282.81 deg²", toVal: "1.00000000 rad²", extra: "1.00000000 sr", extra2: "Unit Solid Angle (1 rad² = 1 sr)" },
      { fromVal: "10,000 deg²", toVal: "3.04617420 rad²", extra: "3.04617420 sr", extra2: "Deep space multi-band survey" },
      { fromVal: "20,626.48 deg²", toVal: "6.28318531 rad²", extra: "2π sr (6.28319 sr)", extra2: "Hemisphere (50% of sphere)" },
      { fromVal: "41,252.96 deg²", toVal: "12.56637061 rad²", extra: "4π sr (12.56637 sr)", extra2: "Complete Sphere (100% of sky)" }
    ]
  },
  applications: {
    title: "Applications of Square Degree to Square Radian Conversion",
    items: [
      {
        title: "Mathematical Physics and Differential Geometry",
        text: "Converting degree-based sky coordinates into square radians simplifies integration over spheres where differential solid angle dΩ = sin(θ) dθ dφ naturally outputs in rad²."
      },
      {
        title: "Computer Graphics and Radiosity",
        text: "Global illumination rendering engines evaluate hemispherical form factors in square radians for light transport simulations."
      },
      {
        title: "Electromagnetic Radiation & Antenna Patterns",
        text: "RF engineers convert antenna beamwidths from square degrees into square radians to directly compute antenna directivity D = 4π / Ω_A."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting deg² to rad²",
    items: [
      "Forgetting to square the conversion factor: Multiplying by (π / 180) instead of (π / 180)² results in a linear planar angle rather than a two-dimensional solid angle.",
      "Assuming square radians differ from steradians: 1 square radian is mathematically identical to 1 steradian; they are two different names for the same dimensional quantity.",
      "Confusing square radians with steradians in flat planar coordinates: Solid angle applies exclusively to spherical geometry; planar areas in flat Cartesian systems follow different rules."
    ]
  },
  faqs: [
    {
      question: "How do I convert square degrees to square radians?",
      answer: "Multiply the value in square degrees by (π / 180)², which is approximately 0.0003046174, or divide by 3,282.80635."
    },
    {
      question: "Is 1 square radian equal to 1 steradian?",
      answer: "Yes, exactly. Dimensionally and geometrically, 1 square radian (rad²) equals exactly 1 steradian (sr)."
    },
    {
      question: "How many square degrees are in 1 square radian?",
      answer: "There are approximately 3,282.80635 square degrees in 1 square radian (exact: 32,400 / π² deg²)."
    },
    {
      question: "How many square radians are in a full sphere?",
      answer: "A full sphere contains 4π square radians, which is approximately 12.56637 rad² (or 41,252.96 deg²)."
    },
    {
      question: "Why does 1 rad² equal (180/π)² deg²?",
      answer: "Because 1 radian equals 180 / π degrees. Squaring both sides to represent a two-dimensional angular area yields (180 / π)² ≈ 3,282.80635 deg²."
    },
    {
      question: "What is the difference between steradians and square radians?",
      answer: "Steradian is the official SI named unit of solid angle, while square radian is the geometric description (rad × rad). They have identical numerical values and physical dimensions."
    },
    {
      question: "How do I convert square radians back to square degrees?",
      answer: "Multiply the square radian value by (180 / π)², or approximately 3,282.80635."
    },
    {
      question: "How many square radians make up a hemisphere?",
      answer: "A hemisphere contains 2π square radians, which is approximately 6.283185 rad² (or 20,626.48 deg²)."
    }
  ],
  relatedList: [
    { label: "Square Radian to Square Degree", from: "square-radian", to: "square-degree" },
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" },
    { label: "Square Degree to Spat", from: "square-degree", to: "spat" },
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" },
    { label: "Square Radian to Spat", from: "square-radian", to: "spat" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Angular Measurements",
    "ISO 80000-3: Quantities and Units — Part 3: Space and Time",
    "NIST Special Publication 330 — The International System of Units (SI)"
  ]
};
