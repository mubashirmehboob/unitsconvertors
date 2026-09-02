import { CustomArticleData } from "./types";

export const squareRadianToSquareArcminuteArticle: CustomArticleData = {
  fromUnitId: "square-radian",
  toUnitId: "square-arcmin",
  seoTitle: "Square Radian to Square Arcminute Converter (rad² to arcmin²) - UnitsConvertors",
  metaDescription: "Convert square radians to square arcminutes (rad² to arcmin²) accurately. Discover the conversion formula (arcmin² = rad² × (10,800/π)²), worked astronomy examples, tables, and FAQs.",
  h1: "Square Radian to Square Arcminute Converter",
  introduction: [
    "Converting square radians (rad²) to square arcminutes (arcmin² or sq arcmin) translates mathematical solid-angle measures into the standard angular area units used to size nebulae, galaxies, and telescope optical apertures.",
    "Because 1 radian corresponds to 10,800 / π arcminutes (approximately 3,437.747'), 1 square radian spans (10,800 / π)² square arcminutes, which equals exactly 116,640,000 / π² (approximately 11,818,102.86 arcmin²). Because 1 square radian is identical to 1 steradian, this factor applies equally to steradian-to-arcminute conversions.",
    "This guide explains the mathematical conversion between radians and arcminutes, provides step-by-step examples from astronomical imaging and radiometry, supplies a reference conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert square radians (rad²) to square arcminutes (arcmin²), multiply the square radian value by (10,800 / π)², or approximately 11,818,102.86. For example, 0.001 square radians equals approximately 11,818.10 square arcminutes.",
    formulaDisplay: "Square Arcminutes (arcmin²) = Square Radians (rad²) × (10,800 ÷ π)²",
    subtext: "1 rad² ≈ 11,818,102.86 arcmin² (1 arcmin² ≈ 8.4616 × 10⁻⁸ rad²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) is the geometric solid-angle unit formed by two orthogonal 1-radian angular dimensions. Identical in physical dimension and value to the SI steradian (1 rad² = 1 sr), it represents the natural unit of solid angle produced by integrating spherical surface equations in physics and calculus."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcminute (arcmin²)",
    text: "The square arcminute (arcmin² or sq arcmin) is a sexagesimal angular area unit representing a square patch measuring 1 arcminute (1/60th of a degree) on each side. It is the primary solid-angle unit used by astronomers to describe the apparent size of deep-sky objects such as galaxies, planetary nebulae, and star clusters."
  },
  relationship: "One square radian contains exactly 116,640,000 / π² square arcminutes (≈ 11,818,102.86 arcmin²). One square arcminute equals π² / 116,640,000 square radians (≈ 8.461595 × 10⁻⁸ rad²). A full sphere of 4π square radians contains approximately 148,510,660.5 square arcminutes.",
  relationshipTitle: "Solid Angle to Fine-Scale Angular Area Scaling",
  relationshipItems: [
    { label: "1 rad²", value: "≈ 11,818,102.86 arcmin² (1.1818 × 10⁷ arcmin²)" },
    { label: "0.001 rad²", value: "≈ 11,818.10 arcmin²" },
    { label: "0.01 rad²", value: "≈ 118,181.03 arcmin²" },
    { label: "0.1 rad²", value: "≈ 1,181,810.29 arcmin²" },
    { label: "2π rad² (Hemisphere)", value: "≈ 74,255,330.24 arcmin²" },
    { label: "4π rad² (Full Sphere)", value: "≈ 148,510,660.48 arcmin²" }
  ],
  formula: {
    text: "Multiply the solid angle in square radians by (10,800 / π)², or 116,640,000 / π² (approximately 11,818,102.86), to calculate square arcminutes.",
    math: "\\text{arcmin}^2 = \\text{rad}^2 \\times \\left(\\frac{10,800}{\\pi}\\right)^2 = \\text{rad}^2 \\times \\frac{116,640,000}{\\pi^2} \\approx \\text{rad}^2 \\times 1.18181029 \\times 10^7",
    subtext: "Derived from 1 radian = 180/π degrees and 1 degree = 60 arcminutes."
  },
  practicalTip: {
    title: "Two-Step Cross Check",
    text: "To verify your calculation: first convert square radians to square degrees by multiplying by 3,282.80635, then multiply that result by 3,600 (the number of square arcminutes in a square degree)."
  },
  expertNote: {
    title: "Analytical Ratio Derivation",
    text: "Because 1 rad = 60 × 180 / π = 10,800 / π arcminutes, the 2D area scales as (10,800 / π)² = 116,640,000 / π² ≈ 11,818,102.860042. Using this exact fractional ratio prevents rounding drift."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.0005 Square Radians to Square Arcminutes",
        subtitle: "Convert a narrow optical detector solid angle into square arcminutes.",
        steps: [
          "Identify solid angle: 0.0005 rad².",
          "Apply conversion formula: arcmin² = 0.0005 × (116,640,000 / π²).",
          "Compute constant: 116,640,000 / 9.8696044 ≈ 11,818,102.86.",
          "Multiply: 0.0005 × 11,818,102.86 = 5,909.05 arcmin².",
          "Result: 0.0005 square radians equals approximately 5,909.05 square arcminutes."
        ]
      },
      {
        title: "Example 2: 1 Unit Square Radian (1 rad²)",
        subtitle: "Calculate the exact number of square arcminutes in 1 square radian.",
        steps: [
          "Identify solid angle: 1.0 rad².",
          "Apply formula: arcmin² = 1.0 × 11,818,102.86.",
          "Calculate: 11,818,102.86 arcmin².",
          "Result: 1 square radian equals approximately 11.82 million square arcminutes."
        ]
      },
      {
        title: "Example 3: Telescope Camera Field (0.000085 rad²)",
        subtitle: "Convert an astronomical imaging field of view into square arcminutes.",
        steps: [
          "Identify solid angle: 0.000085 rad².",
          "Apply formula: arcmin² = 0.000085 × 11,818,102.86.",
          "Calculate: 0.000085 × 11,818,102.86 ≈ 1,004.54 arcmin².",
          "Result: 0.000085 square radians equals approximately 1,004.54 square arcminutes (about 0.279 deg²)."
        ]
      }
    ]
  },
  table: {
    title: "Square Radian to Square Arcminute Conversion Table",
    headers: ["Square Radians (rad²)", "Square Arcminutes (arcmin²)", "Scientific Notation", "Astronomical Scale"],
    rows: [
      { fromVal: "0.00001 rad²", toVal: "118.18 arcmin²", extra: "1.1818 × 10² arcmin²", extra2: "Small emission nebula" },
      { fromVal: "0.00006 rad²", toVal: "709.09 arcmin²", extra: "7.0909 × 10² arcmin²", extra2: "Full Moon angular disc (≈ 706.9 arcmin²)" },
      { fromVal: "0.0001 rad²", toVal: "1,181.81 arcmin²", extra: "1.1818 × 10³ arcmin²", extra2: "Medium telescope camera FOV" },
      { fromVal: "0.001 rad²", toVal: "11,818.10 arcmin²", extra: "1.1818 × 10⁴ arcmin²", extra2: "Extended galaxy (Andromeda M31: ≈ 11,400 arcmin²)" },
      { fromVal: "0.01 rad²", toVal: "118,181.03 arcmin²", extra: "1.1818 × 10⁵ arcmin²", extra2: "Wide Schmidt field" },
      { fromVal: "0.1 rad²", toVal: "1,181,810.29 arcmin²", extra: "1.1818 × 10⁶ arcmin²", extra2: "Small constellation boundary" },
      { fromVal: "1.0 rad²", toVal: "11,818,102.86 arcmin²", extra: "1.1818 × 10⁷ arcmin²", extra2: "1 Unit Solid Angle (1 sr)" },
      { fromVal: "3.14159 rad² (π)", toVal: "37,127,665.12 arcmin²", extra: "3.7128 × 10⁷ arcmin²", extra2: "Quarter sphere (25%)" },
      { fromVal: "6.28319 rad² (2π)", toVal: "74,255,330.24 arcmin²", extra: "7.4255 × 10⁷ arcmin²", extra2: "Hemisphere (50% of sky)" },
      { fromVal: "12.56637 rad² (4π)", toVal: "148,510,660.48 arcmin²", extra: "1.4851 × 10⁸ arcmin²", extra2: "Full Sphere (100% / 1 Spat)" }
    ]
  },
  applications: {
    title: "Applications of Square Radian to Square Arcminute Conversion",
    items: [
      {
        title: "Observational Deep-Sky Astrometry",
        text: "Astronomers convert detector solid angles computed in theoretical physics (rad²) into square arcminutes to evaluate object resolving coverage and catalog spatial density."
      },
      {
        title: "Radiometry and Surface Brightness Calculations",
        text: "Translating radiance (W/sr/m²) into flux densities per square arcminute for extended nebular emission line measurements."
      },
      {
        title: "Optical Instrument Aperture Sizing",
        text: "Sizing astronomical spectrograph focal planes and focal reducer fields from theoretical radian calculations to arcminute detector footprints."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting rad² to arcmin²",
    items: [
      "Multiplying by 3,437.75 instead of (3,437.75)²: 3,437.75 is the 1D planar conversion factor (arcminutes per radian). Solid angle requires squaring: (10,800/π)² ≈ 1.1818 × 10⁷.",
      "Confusing square arcminutes with square arcseconds: 1 square arcminute equals 3,600 square arcseconds; multiplying by the arcsecond factor yields a result 3,600 times too large.",
      "Using truncated approximations: Using 1.18 × 10⁷ instead of 116,640,000/π² introduces substantial rounding error across multi-degree sky fields."
    ]
  },
  faqs: [
    {
      question: "How do I convert square radians to square arcminutes?",
      answer: "Multiply the solid angle in square radians by (10,800 / π)², which is approximately 11,818,102.86."
    },
    {
      question: "How many square arcminutes are in 1 square radian?",
      answer: "There are approximately 11,818,102.86 square arcminutes in 1 square radian (exact: 116,640,000 / π² arcmin²)."
    },
    {
      question: "Why is 1 rad² equal to approximately 11.82 million arcmin²?",
      answer: "Because 1 radian equals 10,800 / π ≈ 3,437.75 arcminutes. For a two-dimensional angular area, (3,437.75)² ≈ 11,818,102.86 arcmin²."
    },
    {
      question: "Is converting square radians to square arcminutes the same as steradians to square arcminutes?",
      answer: "Yes. Because 1 square radian equals exactly 1 steradian, both conversions use the exact same multiplier: 11,818,102.86 arcmin²/rad²."
    },
    {
      question: "How do I convert square arcminutes back to square radians?",
      answer: "Divide the square arcminute value by 11,818,102.86 (or multiply by 8.461595 × 10⁻⁸)."
    },
    {
      question: "How many square arcminutes are in a full sphere?",
      answer: "A full sphere (4π square radians) contains approximately 148,510,660.5 square arcminutes (exact: 466,560,000 / π arcmin²)."
    },
    {
      question: "How many square arcminutes are in a hemisphere?",
      answer: "A hemisphere (2π square radians) contains approximately 74,255,330.2 square arcminutes."
    },
    {
      question: "What is the angular area of the full Moon in square radians and square arcminutes?",
      answer: "The full Moon covers approximately 706.9 square arcminutes, which corresponds to approximately 0.0000598 square radians (5.98 × 10⁻⁵ rad²)."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" },
    { label: "Square Degree to Square Arcminute", from: "square-degree", to: "square-arcmin" },
    { label: "Square Radian to Square Arcsecond", from: "square-radian", to: "square-arcsec" },
    { label: "Square Radian to Square Degree", from: "square-radian", to: "square-degree" },
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Angular Units",
    "International Astronomical Union (IAU) — Astronomical Standards and Constants",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
