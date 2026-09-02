import { CustomArticleData } from "./types";

export const squareDegreeToSquareArcminuteArticle: CustomArticleData = {
  fromUnitId: "square-degree",
  toUnitId: "square-arcmin",
  seoTitle: "Square Degree to Square Arcminute Converter (deg² to arcmin²) - UnitsConvertors",
  metaDescription: "Convert square degrees to square arcminutes (deg² to arcmin²) with exact formulas (1 deg² = 3,600 arcmin²), worked astronomy examples, lookup tables, and FAQs.",
  h1: "Square Degree to Square Arcminute Converter",
  introduction: [
    "Converting square degrees (deg² or sq deg) to square arcminutes (arcmin² or sq arcmin) scales wide-field astronomical regions down into the standard units used for individual deep-sky objects, nebulae, galaxies, and lunar observations.",
    "Because 1 angular degree is divided into exactly 60 arcminutes (60'), a square area measuring 1 degree by 1 degree contains exactly 60 × 60 = 3,600 square arcminutes. Converting square degrees to square arcminutes is an exact integer multiplication by 3,600.",
    "This reference explains the sexagesimal angular area relationship, provides step-by-step conversion examples for astronomical targets, includes an exact lookup table, and addresses common observational astronomy questions."
  ],
  quickAnswer: {
    text: "To convert square degrees (deg²) to square arcminutes (arcmin²), multiply the square degree value by 3,600. For example, 2.5 square degrees equals exactly 9,000 square arcminutes.",
    formulaDisplay: "Square Arcminutes (arcmin²) = Square Degrees (deg²) × 3,600",
    subtext: "1 deg² = 3,600 arcmin² (exact integer relationship)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a non-SI unit of solid angle representing an angular area of 1° by 1° on the celestial sphere. It serves as the standard unit for surveying large sky regions, specifying constellation boundaries, and sizing wide-field astronomical survey cameras."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcminute (arcmin²)",
    text: "The square arcminute (arcmin² or sq arcmin) is a subdivision of angular area equal to a square patch measuring 1 arcminute (1/60th of a degree) on each side. It is the primary solid-angle unit used by observational astronomers to describe the apparent size of galaxies, globular clusters, diffuse nebulae, and solar system bodies."
  },
  relationship: "One square degree equals exactly 3,600 square arcminutes. One square arcminute equals 1 / 3,600 square degrees (≈ 0.00027778 deg²). A complete celestial sphere (41,252.96125 deg²) contains exactly 466,560,000 / π square arcminutes (≈ 148,510,660.5 arcmin²).",
  relationshipTitle: "Exact Sexagesimal Angular Scaling",
  relationshipItems: [
    { label: "1 deg²", value: "= 3,600 arcmin² (Exact)" },
    { label: "5 deg²", value: "= 18,000 arcmin²" },
    { label: "10 deg²", value: "= 36,000 arcmin²" },
    { label: "100 deg²", value: "= 360,000 arcmin²" },
    { label: "1 sr", value: "≈ 11,818,102.86 arcmin²" },
    { label: "Full Sphere", value: "≈ 148,510,660.5 arcmin²" }
  ],
  formula: {
    text: "Multiply the solid angle in square degrees by 3,600 to find square arcminutes.",
    math: "\\text{arcmin}^2 = \\text{deg}^2 \\times 3,600 = \\text{deg}^2 \\times 60^2",
    subtext: "Exact conversion factor based on 1° = 60 arcminutes."
  },
  practicalTip: {
    title: "Telescope Sensor Sizing",
    text: "Most amateur and professional astrophotography cameras have sensor fields quoted in arcminutes (e.g., 40' × 30' = 1,200 arcmin²). Dividing by 3,600 gives the exact field of view in square degrees (0.333 deg²)."
  },
  expertNote: {
    title: "Zero Rounding Error",
    text: "Unlike conversions involving radians or steradians which require irrational factors like π, converting between square degrees and square arcminutes uses an exact integer factor (3,600), preserving absolute numerical precision."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.5 Square Degrees to Square Arcminutes",
        subtitle: "Convert the approximate apparent area of a wide-field telescope camera.",
        steps: [
          "Identify solid angle in square degrees: 0.5 deg².",
          "Apply conversion formula: arcmin² = 0.5 × 3,600.",
          "Calculate: 0.5 × 3,600 = 1,800 arcmin².",
          "Result: 0.5 square degrees equals exactly 1,800 square arcminutes."
        ]
      },
      {
        title: "Example 2: Andromeda Galaxy Apparent Area (approx. 3.17 deg²)",
        subtitle: "Convert the extended disk of Messier 31 (approx. 190' × 60') to square arcminutes.",
        steps: [
          "Identify area in square degrees: 3.17 deg².",
          "Apply formula: arcmin² = 3.17 × 3,600.",
          "Compute: 3.17 × 3,600 = 11,412 arcmin².",
          "Result: 3.17 square degrees equals exactly 11,412 square arcminutes."
        ]
      },
      {
        title: "Example 3: Vera Rubin Observatory Single Exposure (9.6 deg²)",
        subtitle: "Convert the large focal plane coverage of the LSST camera to square arcminutes.",
        steps: [
          "Identify area: 9.6 deg².",
          "Apply formula: arcmin² = 9.6 × 3,600.",
          "Calculate: 9.6 × 3,600 = 34,560 arcmin².",
          "Result: 9.6 square degrees equals exactly 34,560 square arcminutes."
        ]
      }
    ]
  },
  table: {
    title: "Square Degree to Square Arcminute Conversion Table",
    headers: ["Square Degrees (deg²)", "Square Arcminutes (arcmin²)", "Exact Formula", "Astronomical Reference"],
    rows: [
      { fromVal: "0.01 deg²", toVal: "36 arcmin²", extra: "0.01 × 3,600", extra2: "Small planetary nebula" },
      { fromVal: "0.05 deg²", toVal: "180 arcmin²", extra: "0.05 × 3,600", extra2: "Globular cluster (M13)" },
      { fromVal: "0.20 deg²", toVal: "720 arcmin²", extra: "0.20 × 3,600", extra2: "Full Moon disc (≈ 706.9 arcmin²)" },
      { fromVal: "0.50 deg²", toVal: "1,800 arcmin²", extra: "0.50 × 3,600", extra2: "Medium emission nebula" },
      { fromVal: "1.00 deg²", toVal: "3,600 arcmin²", extra: "1.00 × 3,600", extra2: "Standard 1° × 1° sky tile" },
      { fromVal: "2.00 deg²", toVal: "7,200 arcmin²", extra: "2.00 × 3,600", extra2: "Large open cluster (Pleiades M45)" },
      { fromVal: "5.00 deg²", toVal: "18,000 arcmin²", extra: "5.00 × 3,600", extra2: "Wide Schmidt field" },
      { fromVal: "10.00 deg²", toVal: "36,000 arcmin²", extra: "10.00 × 3,600", extra2: "Very wide survey mosaic" },
      { fromVal: "50.00 deg²", toVal: "180,000 arcmin²", extra: "50.00 × 3,600", extra2: "Small constellation boundary" },
      { fromVal: "100.00 deg²", toVal: "360,000 arcmin²", extra: "100.00 × 3,600", extra2: "Medium constellation (Canis Major: 380 deg²)" }
    ]
  },
  applications: {
    title: "Applications of Square Degree to Square Arcminute Conversion",
    items: [
      {
        title: "Deep-Sky Astrophotography & Framing",
        text: "Astrophotographers convert camera sensor areas into square arcminutes to evaluate target framing for extended nebulae and nearby galaxies."
      },
      {
        title: "Astronomical Source Catalogues",
        text: "Database engines convert wide-field sky survey tiles (deg²) into arcmin² for localized surface brightness and object source density queries."
      },
      {
        title: "Telescope Optical Specifications",
        text: "Optical designers specify eyepiece unvignetted field stops and spectrograph slit spatial geometries in square arcminutes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting deg² to arcmin²",
    items: [
      "Multiplying by 60 instead of 3,600: 60 is the linear angle conversion (arcminutes per degree). For angular area, the ratio must be squared: 60² = 3,600.",
      "Confusing square arcminutes with square arcseconds: 1 square arcminute equals 3,600 square arcseconds (or 1 deg² = 12,960,000 arcsec²).",
      "Assuming circular angular areas equal square angular areas: A circular field of diameter 1° covers π × (0.5)² ≈ 0.7854 deg² = 2,827.43 arcmin², not 3,600 arcmin²."
    ]
  },
  faqs: [
    {
      question: "How do I convert square degrees to square arcminutes?",
      answer: "Multiply the solid angle in square degrees by 3,600. For example, 1.5 deg² × 3,600 = 5,400 arcmin²."
    },
    {
      question: "How many square arcminutes are in 1 square degree?",
      answer: "There are exactly 3,600 square arcminutes in 1 square degree (60 × 60 = 3,600)."
    },
    {
      question: "Why is 1 deg² equal to 3,600 arcmin² instead of 60?",
      answer: "A square degree is a two-dimensional area measuring 1 degree by 1 degree. Since each degree equals 60 arcminutes, the area is 60 arcmin × 60 arcmin = 3,600 arcmin²."
    },
    {
      question: "How do I convert square arcminutes back to square degrees?",
      answer: "Divide the value in square arcminutes by 3,600 (or multiply by 0.00027778)."
    },
    {
      question: "What is the angular area of the full Moon in square arcminutes?",
      answer: "The full Moon has an angular diameter of approximately 30 arcminutes (radius = 15'), yielding an area of π × 15² ≈ 706.86 square arcminutes (about 0.196 deg²)."
    },
    {
      question: "How many square arcminutes are in a full sphere?",
      answer: "A complete celestial sphere (41,252.96 deg²) contains approximately 148,510,660.5 square arcminutes (exact: 466,560,000 / π arcmin²)."
    },
    {
      question: "How many square arcminutes are in 1 steradian?",
      answer: "One steradian contains approximately 11,818,102.86 square arcminutes (3,282.80635 deg² × 3,600)."
    },
    {
      question: "Is square arcminute a metric unit?",
      answer: "No. The square arcminute is part of the traditional sexagesimal (base-60) system of angular subdivision derived from ancient Babylonian astronomy."
    }
  ],
  relatedList: [
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Degree to Square Arcsecond", from: "square-degree", to: "square-arcsec" },
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" },
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" },
    { label: "Square Radian to Square Arcminute", from: "square-radian", to: "square-arcmin" }
  ],
  references: [
    "International Astronomical Union (IAU) — Standards and Units for Observational Astronomy",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "Astronomical Algorithms by Jean Meeus — Angular Measurements and Coordinates"
  ]
};
