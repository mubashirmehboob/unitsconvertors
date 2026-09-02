import { CustomArticleData } from "./types";

export const squareRadianToSteradianArticle: CustomArticleData = {
  fromUnitId: "square-radian",
  toUnitId: "steradian",
  seoTitle: "Square Radian to Steradian Converter (rad² to sr) - UnitsConvertors",
  metaDescription: "Convert square radians to steradians (rad² to sr) with exact 1:1 conversion explanations, geometric derivations, worked physics examples, and comprehensive FAQs.",
  h1: "Square Radian to Steradian Converter",
  introduction: [
    "Converting square radians (rad²) to steradians (sr) connects the geometric representation of two-dimensional angular product space with the official International System of Units (SI) measure of solid angle.",
    "Because the steradian is formally defined as the solid angle subtended at the center of a sphere of radius r by a spherical surface patch of area r² (A / r² = m² / m²), one square radian represents exactly one steradian. The conversion ratio between square radians and steradians is an exact 1:1 identity.",
    "This reference explains the dimensional equivalence between square radians and steradians, explores spherical coordinate calculus derivations, provides clear examples across optical physics and radiometry, and answers common conceptual questions."
  ],
  quickAnswer: {
    text: "To convert square radians (rad²) to steradians (sr), multiply by 1. One square radian is mathematically and dimensionally identical to exactly one steradian (1 rad² = 1 sr).",
    formulaDisplay: "Steradians (sr) = Square Radians (rad²) × 1",
    subtext: "1 rad² = 1 sr (exact 1:1 mathematical identity)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) represents the product of two orthogonal planar radian angles spanning a two-dimensional angular aperture. It arises naturally in vector calculus, differential geometry, and theoretical physics when integrating angular flux densities over spherical coordinates (dΩ = sin θ dθ dφ)."
  },
  aboutTargetUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. Formally dimensionless (m² / m²), it quantifies three-dimensional angular spread, serving as the core unit in radiometry (Watts per steradian), photometry (lumens per steradian = candela), astrophysics, and optical engineering."
  },
  relationship: "One square radian equals exactly one steradian (1 rad² = 1 sr). A complete sphere encompasses 4π square radians, which is identically equal to 4π steradians (≈ 12.56637 sr). A hemisphere covers 2π square radians = 2π steradians (≈ 6.28319 sr).",
  relationshipTitle: "Exact 1:1 Solid Angle Identity",
  relationshipItems: [
    { label: "1 rad²", value: "= 1 sr (Exact 1:1 identity)" },
    { label: "0.5 rad²", value: "= 0.5 sr" },
    { label: "π rad² (≈ 3.14159 rad²)", value: "= π sr (Quarter sphere)" },
    { label: "2π rad² (≈ 6.28319 rad²)", value: "= 2π sr (Hemisphere)" },
    { label: "4π rad² (≈ 12.56637 rad²)", value: "= 4π sr (Full sphere / 1 Spat)" },
    { label: "1 rad² in deg²", value: "≈ 3,282.80635 deg²" }
  ],
  formula: {
    text: "Because square radians and steradians represent the exact same physical and geometric quantity, the conversion factor is 1.",
    math: "\\text{sr} = \\text{rad}^2 \\times 1 = \\text{rad}^2",
    subtext: "1 steradian is defined identically as 1 square radian."
  },
  practicalTip: {
    title: "Direct Substitution in Software",
    text: "In engineering calculations and programming algorithms (MATLAB, Python NumPy, C++), numerical values in square radians can be directly assigned to steradian variables without mathematical transformation."
  },
  expertNote: {
    title: "Dimensional Nature of SI Units",
    text: "Under the BIPM SI Brochure (9th Edition), both radian and steradian are dimensionless derived units (m/m and m²/m²). The unit 'steradian' was created specifically to distinguish three-dimensional solid angles from two-dimensional planar angles."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.25 Square Radians to Steradians",
        subtitle: "Convert an optical cone solid angle into SI steradians.",
        steps: [
          "Identify solid angle in square radians: 0.25 rad².",
          "Apply conversion identity: sr = 0.25 × 1.",
          "Compute: 0.25 sr.",
          "Result: 0.25 square radians equals exactly 0.25 steradians."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (2π rad²)",
        subtitle: "Convert hemispherical solid angle into steradians.",
        steps: [
          "Identify solid angle: 2π rad² ≈ 6.2831853 rad².",
          "Apply identity: sr = 2π × 1.",
          "Compute: 6.2831853 sr.",
          "Result: 2π square radians equals exactly 2π steradians (approx. 6.2832 sr)."
        ]
      },
      {
        title: "Example 3: Antenna Beam Solid Angle (0.015 rad²)",
        subtitle: "Convert a radar antenna main-lobe beamwidth into steradians.",
        steps: [
          "Identify beam solid angle: 0.015 rad².",
          "Apply identity: sr = 0.015 × 1.",
          "Result: 0.015 square radians equals exactly 0.015 steradians."
        ]
      }
    ]
  },
  table: {
    title: "Square Radian to Steradian Conversion Table",
    headers: ["Square Radians (rad²)", "Steradians (sr)", "Equivalent in Square Degrees (deg²)", "Geometric Sphere Context"],
    rows: [
      { fromVal: "0.001 rad²", toVal: "0.001 sr", extra: "3.2828 deg²", extra2: "Narrow laser divergence cone" },
      { fromVal: "0.01 rad²", toVal: "0.01 sr", extra: "32.828 deg²", extra2: "Directional horn antenna" },
      { fromVal: "0.1 rad²", toVal: "0.1 sr", extra: "328.28 deg²", extra2: "Wide optical aperture" },
      { fromVal: "0.5 rad²", toVal: "0.5 sr", extra: "1,641.40 deg²", extra2: "Broad emission sector" },
      { fromVal: "1.0 rad²", toVal: "1.0 sr", extra: "3,282.81 deg²", extra2: "Unit solid angle (1 sr)" },
      { fromVal: "3.14159 rad² (π)", toVal: "3.14159 sr", extra: "10,313.24 deg²", extra2: "Quarter of full sphere (25%)" },
      { fromVal: "6.28319 rad² (2π)", toVal: "6.28319 sr", extra: "20,626.48 deg²", extra2: "Hemisphere (50% of sphere)" },
      { fromVal: "12.56637 rad² (4π)", toVal: "12.56637 sr", extra: "41,252.96 deg²", extra2: "Complete sphere (100% / 1 Spat)" }
    ]
  },
  applications: {
    title: "Applications of Square Radian to Steradian Conversion",
    items: [
      {
        title: "Calculus on Spherical Coordinate Systems",
        text: "When integrating double integrals in spherical coordinates ∫∫ sin(θ) dθ dφ, the result naturally produces square radians, which are directly read as steradians for radiometric calculations."
      },
      {
        title: "Radiometry and Photometric Standards",
        text: "Ensuring compatibility between theoretical physics formulations (rad²) and ISO/CIE radiometric standard nomenclature (sr)."
      },
      {
        title: "Electromagnetic Wave Propagation & Radar",
        text: "Converting antenna beam patterns calculated via angular integrals into standard steradians to compute antenna directivity."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting rad² to sr",
    items: [
      "Assuming a non-unity conversion multiplier: Some mistakenly look for a numerical constant; 1 rad² is exactly equal to 1 sr by definition.",
      "Confusing square radians with radians: Radians measure one-dimensional planar angles (m/m); steradians and square radians measure two-dimensional solid angles (m²/m²).",
      "Confusing square radians with square degrees: 1 square radian equals 3,282.81 square degrees, not 1 square degree."
    ]
  },
  faqs: [
    {
      question: "What is the conversion factor from square radians to steradians?",
      answer: "The conversion factor is exactly 1. One square radian (rad²) equals exactly one steradian (sr)."
    },
    {
      question: "Why is 1 square radian equal to 1 steradian?",
      answer: "A steradian is defined as the solid angle subtended by a spherical surface patch of area r² on a sphere of radius r. Since 1 radian subtends an arc of length r, a square patch of 1 rad by 1 rad covers an area of r², perfectly matching the definition of 1 steradian."
    },
    {
      question: "How many square degrees are in 1 square radian?",
      answer: "There are approximately 3,282.80635 square degrees in 1 square radian (or 1 steradian), calculated as (180 / π)² deg²."
    },
    {
      question: "How many square radians are in a full sphere?",
      answer: "A complete sphere contains 4π square radians, which is approximately 12.56637 rad² (equal to 4π steradians or 1 spat)."
    },
    {
      question: "Is square radian an official SI unit name?",
      answer: "No. The official SI named unit for solid angle is the steradian (sr). However, 'square radian' is dimensionally equivalent and mathematically accurate."
    },
    {
      question: "How many square radians are in a hemisphere?",
      answer: "A hemisphere contains 2π square radians, which is approximately 6.283185 rad² (or 2π steradians)."
    },
    {
      question: "What is the symbol for square radian and steradian?",
      answer: "The symbol for square radian is rad² (or sq rad), and the official SI symbol for steradian is sr."
    },
    {
      question: "How do I convert square radians to spats?",
      answer: "Divide the square radian value by 4π (approximately 12.56637) because 1 spat equals 4π steradians (4π rad²)."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Radian", from: "steradian", to: "square-radian" },
    { label: "Square Radian to Spat", from: "square-radian", to: "spat" },
    { label: "Square Radian to Square Degree", from: "square-radian", to: "square-degree" },
    { label: "Square Radian to Square Arcminute", from: "square-radian", to: "square-arcmin" },
    { label: "Square Radian to Square Arcsecond", from: "square-radian", to: "square-arcsec" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Solid Angle Units",
    "ISO 80000-3: Quantities and Units — Part 3: Space and Time",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
