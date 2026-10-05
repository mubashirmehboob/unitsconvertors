import { CustomArticleData } from "./types";

export const squareArcminuteToSpatArticle: CustomArticleData = {
  fromUnitId: "square-arcmin",
  toUnitId: "spat",
  seoTitle: "Square Arcminute to Spat Converter (arcmin² to sp) | UnitsConvertors.com",
  metaDescription: "Convert square arcminutes to spats (arcmin² to sp) with astronomical accuracy. Learn the full-sphere solid angle formula, celestial survey fraction examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcmin-to-spat",
  h1: "Square Arcminute to Spat Converter",
  introduction: [
    "Converting square arcminutes (arcmin² or sq arcmin) to spats (sp) expresses localized angular celestial areas as exact fractional portions of the entire spherical sky. While astronomical surveys, deep-field telescope imaging programs, and planetary observations measure targeted sky patches in square arcminutes, the spat serves as the non-SI unit representing the complete $4\\pi$ solid angle of a closed sphere (one complete spherical shell).",
    "Because a complete sphere encompasses $4\\pi$ steradians and one steradian equals $116,640,000/\\pi^2$ square arcminutes, one spat equals exactly $466,560,000/\\pi$ square arcminutes (approximately 148,510,660.50 arcmin²). Converting square arcminutes to spats requires multiplying by $\\pi / 466,560,000$ (approximately $6.733606 \\times 10^{-9}\\text{ sp}$). This calculation enables cosmologists and observatory mission planners to quantify the exact fraction of the universe surveyed by space-based instruments such as Hubble, Euclid, and the Nancy Grace Roman Space Telescope."
  ],
  quickAnswer: {
    text: "To convert square arcminutes (arcmin²) to spats (sp), divide the square arcminute value by 466,560,000 / π (approximately 148,510,661), or multiply by 6.733606 × 10⁻⁹. For example, 1,000,000 square arcminutes equals approximately 0.006734 spats (0.6734% of the entire sky).",
    formulaDisplay: "Solid Angle (sp) = Area (arcmin²) × (π / 466,560,000) ≈ Area (arcmin²) × 6.733606 × 10⁻⁹",
    subtext: "1 spat = 4π sr ≈ 148,510,660.50 arcmin² ≈ 41,252.96 deg² | 1 arcmin² ≈ 6.733606 × 10⁻⁹ sp"
  },
  aboutSourceUnit: {
    title: "About the Square Arcminute (arcmin²)",
    text: "The square arcminute (symbol: arcmin² or sq arcmin) is an angular area unit representing a square region of sky spanning 1 arcminute by 1 arcminute (1/60 of a degree on each side). It is the customary measurement standard in observational astronomy for specifying telescope instrument fields of view, galactic nuclei, and planetary nebulae."
  },
  aboutTargetUnit: {
    title: "About the Spat (sp)",
    text: "The spat (symbol: sp) is a unit of solid angle corresponding to a full sphere, equal to exactly $4\\pi$ steradians (approximately 12.56637 sr or 41,252.96 square degrees). A hemisphere equals 0.5 spats (2π sr), and an octant equals 0.125 spats (0.5π sr)."
  },
  relationship: "A complete spherical surface subtends $4\\pi$ steradians. Given that 1 steradian contains $(10,800/\\pi)^2 = 116,640,000/\\pi^2$ square arcminutes, multiplying by $4\\pi$ establishes that 1 spat equals $466,560,000/\\pi$ square arcminutes (≈ 148,510,660.50 arcmin²). Conversely, each square arcminute represents exactly $\\pi / 466,560,000 \\approx 6.733606 \\times 10^{-9}$ spats of the total sky.",
  relationshipTitle: "Spherical Proportion & Exact Scaling",
  relationshipItems: [
    { label: "1 spat (Entire Sky)", value: "≈ 148,510,661 arcmin²" },
    { label: "0.5 spat (Hemisphere)", value: "≈ 74,255,330 arcmin²" },
    { label: "1 arcmin² in spat", value: "≈ 6.733606 × 10⁻⁹ sp" },
    { label: "1,000,000 arcmin²", value: "≈ 0.006734 sp (0.673% sky)" }
  ],
  formula: {
    text: "Multiply the area in square arcminutes by π / 466,560,000 (or divide by 148,510,660.5) to determine the equivalent solid angle in spats.",
    math: "\\Omega\\text{ (sp)} = \\text{Area (arcmin}^2\\text{)} \\times \\frac{\\pi}{466,560,000} = \\frac{\\text{Area (arcmin}^2\\text{)}}{148,510,660.50}",
    subtext: "Inverse formula: Area (arcmin²) = Ω (sp) × (466,560,000 / π)"
  },
  formulaTitle: "Square Arcminute to Spat Conversion Formula",
  practicalTip: {
    title: "Cosmological Sky Coverage Metric",
    text: "When space missions report sky survey statistics, multiplying the spat value by 100 yields the exact percentage of the entire observable universe surveyed. For example, a wide-area extragalactic survey covering 1,485,107 square arcminutes equals exactly 0.01 spats, or exactly 1.0% of the entire celestial vault."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hubble Deep Field Survey Patch",
        subtitle: "An ultra-deep field exposure spans approximately 11.5 square arcminutes. Calculate what fraction of a spat this represents.",
        steps: [
          "State given area: 11.5 arcmin².",
          "Identify conversion factor: 1 arcmin² ≈ 6.733606 × 10⁻⁹ sp.",
          "Multiply: 11.5 × 6.733606 × 10⁻⁹ sp.",
          "Calculate product: 7.7436 × 10⁻⁸ sp.",
          "Conclude: The deep field exposure covers 7.7436 × 10⁻⁸ spats of the total sky."
        ]
      },
      {
        title: "Example 2: Wide-Field Astronomical Camera Footprint",
        subtitle: "A ground-based observatory camera tile spans 14,400 square arcminutes (4 square degrees). Express this in spats.",
        steps: [
          "State area: 14,400 arcmin².",
          "Divide by full-sphere constant: 14,400 ÷ 148,510,660.50.",
          "Compute: 0.00009696 sp (or 9.696 × 10⁻⁵ sp).",
          "Result: The camera footprint covers roughly 0.0097% of the entire sky."
        ]
      },
      {
        title: "Example 3: Major Constellation Area",
        subtitle: "The constellation Ursa Major spans roughly 4,608,000 square arcminutes (1,280 square degrees). Convert to spats.",
        steps: [
          "State area: 4,608,000 arcmin².",
          "Multiply by conversion factor: 4,608,000 × 6.733606 × 10⁻⁹.",
          "Calculate: 0.031028 sp.",
          "Result: Ursa Major covers approximately 0.0310 spats (about 3.10% of the celestial sphere)."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcminute to Spat Conversion Reference Table",
    headers: ["Square Arcminutes (arcmin²)", "Spats (sp)", "Fraction of Sky", "Square Degrees (deg²)"],
    rows: [
      { fromVal: "100 arcmin²", toVal: "0.00000000067 sp", extra: "0.000000067%", extra2: "0.0278 deg²" },
      { fromVal: "1,000 arcmin²", toVal: "0.00000000673 sp", extra: "0.000000673%", extra2: "0.2778 deg²" },
      { fromVal: "3,600 arcmin² (1 deg²)", toVal: "0.00002424036 sp", extra: "0.002424%", extra2: "1.0000 deg²" },
      { fromVal: "10,000 arcmin²", toVal: "0.00006733606 sp", extra: "0.006734%", extra2: "2.7778 deg²" },
      { fromVal: "50,000 arcmin²", toVal: "0.00033668028 sp", extra: "0.033668%", extra2: "13.8889 deg²" },
      { fromVal: "100,000 arcmin²", toVal: "0.00067336056 sp", extra: "0.067336%", extra2: "27.7778 deg²" },
      { fromVal: "500,000 arcmin²", toVal: "0.00336680280 sp", extra: "0.336680%", extra2: "138.8889 deg²" },
      { fromVal: "1,000,000 arcmin²", toVal: "0.00673360560 sp", extra: "0.673361%", extra2: "277.7778 deg²" },
      { fromVal: "3,600,000 arcmin² (1,000 deg²)", toVal: "0.02424036000 sp", extra: "2.424036%", extra2: "1,000.0000 deg²" },
      { fromVal: "14,851,066 arcmin² (10% Sky)", toVal: "0.10000000000 sp", extra: "10.000000%", extra2: "4,125.2961 deg²" },
      { fromVal: "74,255,330 arcmin² (Hemisphere)", toVal: "0.50000000000 sp", extra: "50.000000%", extra2: "20,626.4806 deg²" },
      { fromVal: "148,510,661 arcmin² (Full Sphere)", toVal: "1.00000000000 sp", extra: "100.000000%", extra2: "41,252.9612 deg²" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "All-Sky Survey Mission Progress Tracking",
        text: "Measuring survey completeness for space observatories (e.g., Gaia, Planck, eROSITA) comparing accumulated square arcminutes of observation to the 1-spat total celestial sphere."
      },
      {
        title: "Cosmic Microwave Background (CMB) Masking",
        text: "Quantifying the fraction of the celestial sphere obscured by Galactic plane dust emission masks in cosmological power spectrum calculations."
      },
      {
        title: "Asteroid Search Swath Coverage",
        text: "Calculating the planetary defense survey area scanned per night in square arcminutes and expressing it as a fraction of the visible night hemisphere."
      },
      {
        title: "Astrophysical Population Synthesis Modeling",
        text: "Scaling observed galaxy counts from square-arcminute pencil-beam surveys to full-sky (1 spat) cosmological volume totals."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcmin² to sp",
    items: [
      "Confusing spat with steradian: 1 spat equals 4π steradians (≈ 12.56637 sr). Forgetting the 4π multiplier results in values that are off by a factor of 12.57.",
      "Omitting the squared angle factor: Calculating linear arcminutes divided by full circumference (21,600 arcmin) instead of area divided by full spherical solid angle (148,510,661 arcmin²).",
      "Treating celestial sphere as flat area: For survey areas spanning thousands of square degrees, planar approximations fail and true spherical trigonometry must be applied.",
      "Scientific notation exponent errors: Because 1 arcmin² represents ~6.73 × 10⁻⁹ spats, inadvertent truncation of negative exponents leads to catastrophic scale errors."
    ]
  },
  faqs: [
    {
      question: "How many spats are in 1 square arcminute?",
      answer: "There are approximately 6.733606 × 10⁻⁹ spats in 1 square arcminute (or exactly π / 466,560,000 sp)."
    },
    {
      question: "How many square arcminutes are in 1 spat?",
      answer: "One spat contains exactly 466,560,000 / π square arcminutes, which is approximately 148,510,660.50 square arcminutes."
    },
    {
      question: "What is a spat in measurement?",
      answer: "A spat (symbol: sp) is a unit of solid angle corresponding to a complete closed sphere, equal to 4π steradians or approximately 41,252.96 square degrees."
    },
    {
      question: "What is the formula to convert arcmin² to spats?",
      answer: "The formula is: Solid Angle (sp) = Area (arcmin²) × (π / 466,560,000), or Area (arcmin²) ÷ 148,510,660.50."
    },
    {
      question: "What percentage of the sky is 1,000,000 square arcminutes?",
      answer: "1,000,000 square arcminutes represents approximately 0.006734 spats, which equals roughly 0.6734% of the entire celestial sphere."
    },
    {
      question: "How many spats is the observable hemisphere from Earth?",
      answer: "The visible hemisphere from the horizon to zenith spans exactly 0.5 spats (2π steradians), which equals approximately 74,255,330 square arcminutes."
    },
    {
      question: "How many square arcminutes are in 1 square degree?",
      answer: "One square degree contains exactly 3,600 square arcminutes ($60 \\times 60 = 3,600$)."
    },
    {
      question: "Why do scientists use the unit spat?",
      answer: "The spat provides an intuitive dimensionless measure of fractional spherical coverage, where 1 spat equals 100% of a sphere, eliminating awkward factors of 4π."
    },
    {
      question: "How do I convert spats back to square arcminutes?",
      answer: "Multiply the spat value by 466,560,000 / π (approximately 148,510,660.50)."
    },
    {
      question: "Is the spat an official SI unit?",
      answer: "No, the spat is a non-SI unit of solid angle. The sole coherent SI unit of solid angle is the steradian (sr)."
    }
  ],
  relatedList: [
    { label: "Spat to Square Arcminute", from: "spat", to: "square-arcmin" },
    { label: "Square Arcminute to Steradian", from: "square-arcmin", to: "steradian" },
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Arcminute to Square Arcsecond", from: "square-arcmin", to: "square-arcsec" },
    { label: "Square Arcminute to Square Radian", from: "square-arcmin", to: "square-radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Units for Solid Angle.",
    "International Astronomical Union (IAU): Sky Survey Standards and Geometrical Formulations.",
    "Weisstein, Eric W.: 'Solid Angle', MathWorld — A Wolfram Web Resource."
  ]
};
