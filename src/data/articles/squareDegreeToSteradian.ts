import { CustomArticleData } from "./types";

export const squareDegreeToSteradianArticle: CustomArticleData = {
  fromUnitId: "square-degree",
  toUnitId: "steradian",
  seoTitle: "Square Degree to Steradian Converter (deg² to sr) - UnitsConvertors",
  metaDescription: "Convert square degrees to steradians (deg² to sr) with exact solid angle formulas, manual step-by-step calculations, precision tables, and practical astronomy examples.",
  h1: "Square Degree to Steradian Converter",
  introduction: [
    "Converting square degrees (deg² or sq deg) to steradians (sr) translates astronomical sky coverage and camera field-of-view measurements into the standard International System of Units (SI) measure of solid angle.",
    "Because 1 degree equals π / 180 radians, 1 square degree corresponds to (π / 180)² square radians, which is dimensionally equal to (π / 180)² steradians (approximately 0.0003046174 sr). Conversely, 1 steradian encompasses approximately 3,282.80635 square degrees.",
    "This guide explains the mathematical relationship between square degrees and steradians, details the exact conversion factor, provides realistic worked examples from astrophysics and optical sensor engineering, and includes a quick conversion table alongside frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert square degrees (deg²) to steradians (sr), multiply the square degree value by (π / 180)², which is approximately 0.0003046174 (or divide by 3,282.80635). For example, 1,000 square degrees equals approximately 0.304617 steradians.",
    formulaDisplay: "Steradians (sr) = Square Degrees (deg²) × (π ÷ 180)²",
    subtext: "1 deg² ≈ 0.0003046174 sr (1 sr ≈ 3,282.80635 deg²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a non-SI unit of solid angle representing the angular area subtended by a square patch measuring 1 degree on each side on a spherical surface. Although not an official SI base or derived unit, it is universally used in observational astronomy to quantify telescope fields of view, constellation boundaries, and wide-field sky survey footprints."
  },
  aboutTargetUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle (dimensionless ratio m²/m²). Defined as the solid angle subtended at the center of a unit sphere by a surface area equal to the square of the sphere's radius (r²), steradians serve as the primary unit across radiometric flux calculations, photometric intensity specifications (lumens per steradian = candela), and 3D computer graphics."
  },
  relationship: "One square degree equals exactly π² / 32,400 steradians (≈ 0.0003046174198 sr). A full celestial sphere encloses 4π steradians (≈ 12.56637 sr), which corresponds to exactly 129,600 / π square degrees (≈ 41,252.96125 deg²).",
  relationshipTitle: "Square Degree to Steradian Angular Scaling",
  relationshipItems: [
    { label: "1 deg²", value: "≈ 0.000304617 sr (3.04617 × 10⁻⁴ sr)" },
    { label: "100 deg²", value: "≈ 0.0304617 sr" },
    { label: "1,000 deg²", value: "≈ 0.3046174 sr" },
    { label: "3,282.806 deg²", value: "= 1.0 sr (1 square radian)" },
    { label: "20,626.481 deg²", value: "= 2π sr (Hemisphere)" },
    { label: "41,252.961 deg²", value: "= 4π sr (Full Sphere)" }
  ],
  formula: {
    text: "Multiply the solid angle in square degrees by (π / 180)², or π² / 32,400 (approximately 0.0003046174198), to determine steradians.",
    math: "\\text{sr} = \\text{deg}^2 \\times \\left(\\frac{\\pi}{180}\\right)^2 = \\text{deg}^2 \\times \\frac{\\pi^2}{32,400} = \\frac{\\text{deg}^2}{3,282.80635}",
    subtext: "Where π² / 32,400 ≈ 0.0003046174197867086."
  },
  practicalTip: {
    title: "Celestial Sphere Check",
    text: "When auditing sky survey metrics, remember that the entire celestial sphere contains 41,252.96 deg² or 4π (12.56637) sr. Any sky patch fraction can be quickly cross-checked by verifying its percentage of these total spherical limits."
  },
  expertNote: {
    title: "Analytical Accuracy",
    text: "When writing radiometric code or sensor integration pipelines, using the exact fraction π² / 32,400 rather than truncated floating-point constants prevents floating-point drift across large spherical harmonic expansions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 100 Square Degrees to Steradians",
        subtitle: "Convert a medium-sized astronomical survey patch into SI solid angle.",
        steps: [
          "Identify the solid angle value: 100 deg².",
          "Apply the conversion formula: sr = 100 × (π / 180)².",
          "Evaluate the conversion constant: π² / 32,400 ≈ 0.0003046174.",
          "Compute the product: 100 × 0.0003046174 = 0.03046174 sr.",
          "Result: 100 square degrees equals approximately 0.030462 steradians."
        ]
      },
      {
        title: "Example 2: The Constellation Hydra (1,303 deg²)",
        subtitle: "Convert the largest official constellation boundary to steradians.",
        steps: [
          "Identify Hydra's celestial area: 1,303 deg².",
          "Apply the formula: sr = 1,303 × (π² / 32,400).",
          "Calculate: 1,303 × 0.0003046174198 ≈ 0.3969165 sr.",
          "Result: The constellation Hydra covers approximately 0.3969 steradians (about 3.16% of the full sphere)."
        ]
      },
      {
        title: "Example 3: Wide-Field Survey Camera Field (9.6 deg²)",
        subtitle: "Convert a Rubin Observatory / LSST single-exposure camera footprint to steradians.",
        steps: [
          "Identify field of view: 9.6 deg².",
          "Apply the formula: sr = 9.6 ÷ 3,282.80635.",
          "Calculate: 9.6 ÷ 3,282.80635 ≈ 0.00292433 sr.",
          "Result: 9.6 square degrees equals approximately 0.002924 steradians (2.924 × 10⁻³ sr)."
        ]
      }
    ]
  },
  table: {
    title: "Square Degree to Steradian Conversion Table",
    headers: ["Square Degrees (deg²)", "Steradians (sr)", "Scientific Notation (sr)", "Spherical Benchmark"],
    rows: [
      { fromVal: "0.1 deg²", toVal: "0.00003046 sr", extra: "3.0462 × 10⁻⁵ sr", extra2: "Narrow telescope field" },
      { fromVal: "1 deg²", toVal: "0.00030462 sr", extra: "3.0462 × 10⁻⁴ sr", extra2: "Unit square degree" },
      { fromVal: "5 deg²", toVal: "0.00152309 sr", extra: "1.5231 × 10⁻³ sr", extra2: "Standard Schmidt survey field" },
      { fromVal: "25 deg²", toVal: "0.00761544 sr", extra: "7.6154 × 10⁻³ sr", extra2: "Wide-field imaging detector" },
      { fromVal: "100 deg²", toVal: "0.03046174 sr", extra: "3.0462 × 10⁻² sr", extra2: "Medium asterism boundary" },
      { fromVal: "500 deg²", toVal: "0.15230871 sr", extra: "1.5231 × 10⁻¹ sr", extra2: "Major constellation (e.g., Orion: 594 deg²)" },
      { fromVal: "1,000 deg²", toVal: "0.30461742 sr", extra: "3.0462 × 10⁻¹ sr", extra2: "Large constellation" },
      { fromVal: "3,282.81 deg²", toVal: "1.00000000 sr", extra: "1.0000 × 10⁰ sr", extra2: "Exact 1 Steradian (1 rad²)" },
      { fromVal: "10,000 deg²", toVal: "3.04617420 sr", extra: "3.0462 × 10⁰ sr", extra2: "Quarter-sky survey tier" },
      { fromVal: "20,626.48 deg²", toVal: "6.28318531 sr", extra: "2π sr", extra2: "Visible sky hemisphere (50% sphere)" },
      { fromVal: "41,252.96 deg²", toVal: "12.56637061 sr", extra: "4π sr", extra2: "Full 4π sphere (100% celestial area)" }
    ]
  },
  applications: {
    title: "Applications of Square Degree to Steradian Conversion",
    items: [
      {
        title: "Observational Astronomy and Sky Surveys",
        text: "Astronomers convert catalogue survey footprints quoted in square degrees (such as SDSS or DES) into steradians to compute volumetric galaxy density and cosmic background radiance."
      },
      {
        title: "Radiometry and Optical Power Budgeting",
        text: "Optical engineers convert square-degree detector acceptance angles into steradians to apply radiance equations (Watts per steradian per square meter) in camera sensor design."
      },
      {
        title: "Spacecraft Star Tracker Specifications",
        text: "Attitude determination systems convert camera field-of-view solid angles to calculate spatial star availability and sensor sensitivity thresholds."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting deg² to sr",
    items: [
      "Dividing by 57.2958 instead of (57.2958)²: 57.2958 is the 1D planar angle conversion (degrees per radian). For solid angles, the conversion factor must be squared: (180/π)² ≈ 3,282.806.",
      "Confusing square degrees with spherical coordinate increments: A patch of 1° in right ascension by 1° in declination only covers 1 deg² along the equator; off the equator it shrinks by cos(dec).",
      "Confusing steradians with square arcminutes: 1 square degree equals 3,600 square arcminutes, whereas 1 steradian equals over 11.8 million square arcminutes."
    ]
  },
  faqs: [
    {
      question: "How do I convert square degrees to steradians?",
      answer: "Multiply the solid angle in square degrees by (π / 180)², which equals approximately 0.0003046174, or divide the square degree value by 3,282.80635."
    },
    {
      question: "How many steradians are in 1 square degree?",
      answer: "One square degree contains approximately 0.0003046174 steradians (exact: π² / 32,400 sr)."
    },
    {
      question: "How many square degrees are in 1 steradian?",
      answer: "One steradian contains approximately 3,282.80635 square degrees (exact: 32,400 / π² deg²)."
    },
    {
      question: "How many square degrees are in the entire sky?",
      answer: "The entire celestial sphere (4π steradians) contains exactly 129,600 / π square degrees, which is approximately 41,252.96 square degrees."
    },
    {
      question: "Why is the conversion factor squared?",
      answer: "Solid angle is a two-dimensional angular area. Since 1 radian equals 180 / π degrees in 1D, the 2D conversion is (180 / π)² ≈ 3,282.80635 deg²/sr, or (π / 180)² ≈ 0.0003046174 sr/deg²."
    },
    {
      question: "How do I convert square degrees to square radians?",
      answer: "One square radian is identical to one steradian. Therefore, the conversion factor from square degrees to square radians is the same: multiply by (π / 180)² ≈ 0.0003046174."
    },
    {
      question: "What is the solid angle of the Moon in square degrees and steradians?",
      answer: "The full Moon has an angular diameter of approximately 0.5 degrees, subtending a solid angle of about 0.20 square degrees or approximately 6.0 × 10⁻⁵ steradians."
    },
    {
      question: "Is the square degree an SI unit?",
      answer: "No. The square degree is a non-SI unit used in astronomy, whereas the steradian is the official SI derived unit of solid angle."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Square Degree to Spat", from: "square-degree", to: "spat" },
    { label: "Square Degree to Square Radian", from: "square-degree", to: "square-radian" },
    { label: "Square Degree to Square Arcminute", from: "square-degree", to: "square-arcmin" },
    { label: "Square Degree to Square Arcsecond", from: "square-degree", to: "square-arcsec" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Solid Angle Units",
    "International Astronomical Union (IAU) — Recommendations for Astronomical Units and Constants",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
