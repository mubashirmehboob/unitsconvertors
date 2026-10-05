import { CustomArticleData } from "./types";

export const squareArcsecondToSquareDegreeArticle: CustomArticleData = {
  fromUnitId: "square-arcsec",
  toUnitId: "square-degree",
  seoTitle: "Square Arcsecond to Square Degree Converter (arcsec² to deg²) | UnitsConvertors.com",
  metaDescription: "Convert square arcseconds to square degrees (arcsec² to deg²) instantly. Learn the exact 1 deg² = 12,960,000 arcsec² formula, telescope FOV examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcsec-to-square-degree",
  h1: "Square Arcsecond to Square Degree Converter",
  introduction: [
    "Converting square arcseconds (arcsec² or sq arcsec) to square degrees (deg² or sq deg) scales fine astronomical spatial resolution up to macroscopic celestial survey dimensions. While high-resolution imaging sensors, diffraction-limited optics, and spectroscopic slits measure apertures in square arcseconds, all-sky astronomical catalogs, wide-field surveys, and constellation boundaries measure sky coverage in square degrees.",
    "Because standard sexagesimal geometry defines sixty arcminutes in a degree and sixty arcseconds in an arcminute, one degree spans exactly 3,600 arcseconds ($1^\\circ = 3,600^{\\prime\\prime}$). Squaring this linear conversion establishes that one square degree contains exactly $3,600 \\times 3,600 = 12,960,000$ square arcseconds. Converting square arcseconds to square degrees therefore requires dividing by 12,960,000 (or multiplying by $1/12,960,000 \\approx 7.716049 \\times 10^{-8}$). Because this conversion is derived purely from integer sexagesimal definitions, it is exact with zero mathematical approximation."
  ],
  quickAnswer: {
    text: "To convert square arcseconds (arcsec²) to square degrees (deg²), divide the square arcsecond value by 12,960,000 (or multiply by 7.716049 × 10⁻⁸). For example, 1,296,000 square arcseconds equals exactly 0.1 square degrees.",
    formulaDisplay: "Area (deg²) = Area (arcsec²) / 12,960,000 = Area (arcsec²) × (1 / 12,960,000)",
    subtext: "1 deg² = 12,960,000 arcsec² (exact) | 1 arcsec² = 1/12,960,000 deg² ≈ 7.716049 × 10⁻⁸ deg²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (symbol: arcsec² or sq arcsec) is an angular area unit defined as a square measuring 1 arcsecond by 1 arcsecond (1/3,600 of a degree on each side). It is the premier standard in optical astronomy for pixel scales, angular resolving power limits, and surface brightness specifications."
  },
  aboutTargetUnit: {
    title: "About the Square Degree (deg²)",
    text: "The square degree (symbol: deg² or sq deg) is a non-SI unit of solid angle representing the area of a square measuring 1 degree on each side on the celestial sphere. One square degree equals $(\\pi / 180)^2 \\approx 0.000304617$ steradians. The entire celestial sphere encompasses approximately 41,252.96 square degrees."
  },
  relationship: "One degree equals 3,600 arcseconds. Squaring both sides produces $1\\text{ deg}^2 = (3,600\\text{ arcsec})^2 = 12,960,000\\text{ arcsec}^2$. Conversely, 1 square arcsecond represents exactly $1/12,960,000$ of a square degree ($7.716049 \\times 10^{-8}\\text{ deg}^2$). This integer relationship enables seamless scaling across microscopic detector pixels and massive wide-field surveys.",
  relationshipTitle: "Exact 12,960,000-to-1 Sexagesimal Geometric Scale",
  relationshipItems: [
    { label: "1 deg² in arcsec²", value: "12,960,000 arcsec² (exact: 3,600²)" },
    { label: "1 arcsec² in deg²", value: "1/12,960,000 deg² (≈ 7.716 × 10⁻⁸ deg²)" },
    { label: "1 arcmin² in arcsec²", value: "3,600 arcsec²" },
    { label: "1 arcmin² in deg²", value: "1/3,600 deg²" }
  ],
  formula: {
    text: "Divide the area in square arcseconds by 12,960,000 to determine the equivalent area in square degrees.",
    math: "\\text{Area (deg}^2\\text{)} = \\frac{\\text{Area (arcsec}^2\\text{)}}{12,960,000}",
    subtext: "Inverse formula: Area (arcsec²) = Area (deg²) × 12,960,000"
  },
  formulaTitle: "Square Arcsecond to Square Degree Conversion Formula",
  practicalTip: {
    title: "Mega-Pixel Sensor Tile Sizing",
    text: "Modern astronomical cameras with 100-megapixel sensors and a pixel pitch of 0.2 arcseconds cover an instantaneous field of $10^8 \\times 0.04 = 4,000,000\\text{ arcsec}^2$. To determine how many square degrees this footprint covers, divide by 12,960,000: $4,000,000 \\div 12,960,000 \\approx 0.3086\\text{ deg}^2$."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Deep Sky Galaxy Survey Tile",
        subtitle: "An imaging survey mosaic spans 6,480,000 square arcseconds. Calculate the area in square degrees.",
        steps: [
          "State starting area: 6,480,000 arcsec².",
          "Identify conversion formula: Area (deg²) = Area (arcsec²) ÷ 12,960,000.",
          "Calculate: 6,480,000 ÷ 12,960,000 = 0.5 deg².",
          "Conclude: The survey mosaic spans exactly 0.5 square degrees (half a square degree)."
        ]
      },
      {
        title: "Example 2: Full Moon Apparent Disk",
        subtitle: "The full Moon has an apparent disk area of approximately 2,592,000 square arcseconds. Convert to square degrees.",
        steps: [
          "Identify area: 2,592,000 arcsec².",
          "Divide by 12,960,000: 2,592,000 ÷ 12,960,000.",
          "Compute result: exactly 0.20 deg².",
          "Final Result: The Moon disk covers exactly 0.2 square degrees (one-fifth of a square degree)."
        ]
      },
      {
        title: "Example 3: Telescope Sub-Aperture",
        subtitle: "A small optical aperture covers 129,600 square arcseconds. Express in square degrees.",
        steps: [
          "State area: 129,600 arcsec².",
          "Divide: 129,600 ÷ 12,960,000 = 0.01 deg².",
          "Result: 129,600 square arcseconds equals exactly 0.01 square degrees (one-hundredth of a square degree)."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcsecond to Square Degree Conversion Reference Table",
    headers: ["Square Arcseconds (arcsec²)", "Square Degrees (deg²)", "Fractional Degree", "Steradians (sr)"],
    rows: [
      { fromVal: "36,000 arcsec² (10 arcmin²)", toVal: "0.002778 deg²", extra: "1/360 deg²", extra2: "8.462 × 10⁻⁷ sr" },
      { fromVal: "129,600 arcsec²", toVal: "0.010000 deg²", extra: "1/100 deg²", extra2: "3.046 × 10⁻⁶ sr" },
      { fromVal: "648,000 arcsec²", toVal: "0.050000 deg²", extra: "1/20 deg²", extra2: "1.523 × 10⁻⁵ sr" },
      { fromVal: "1,296,000 arcsec²", toVal: "0.100000 deg²", extra: "1/10 deg²", extra2: "3.046 × 10⁻⁵ sr" },
      { fromVal: "2,592,000 arcsec² (Moon)", toVal: "0.200000 deg²", extra: "1/5 deg²", extra2: "6.092 × 10⁻⁵ sr" },
      { fromVal: "3,240,000 arcsec²", toVal: "0.250000 deg²", extra: "1/4 deg²", extra2: "7.615 × 10⁻⁵ sr" },
      { fromVal: "6,480,000 arcsec²", toVal: "0.500000 deg²", extra: "1/2 deg²", extra2: "1.523 × 10⁻⁴ sr" },
      { fromVal: "9,720,000 arcsec²", toVal: "0.750000 deg²", extra: "3/4 deg²", extra2: "2.285 × 10⁻⁴ sr" },
      { fromVal: "12,960,000 arcsec²", toVal: "1.000000 deg²", extra: "1 deg²", extra2: "3.046 × 10⁻⁴ sr" },
      { fromVal: "25,920,000 arcsec²", toVal: "2.000000 deg²", extra: "2 deg²", extra2: "6.092 × 10⁻⁴ sr" },
      { fromVal: "64,800,000 arcsec²", toVal: "5.000000 deg²", extra: "5 deg²", extra2: "1.523 × 10⁻³ sr" },
      { fromVal: "129,600,000 arcsec²", toVal: "10.000000 deg²", extra: "10 deg²", extra2: "3.046 × 10⁻³ sr" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Wide-Field Survey Mosaic Assembly",
        text: "Converting accumulated camera exposures from square arcseconds into square degrees to evaluate survey area completeness."
      },
      {
        title: "Large Synoptic Survey Telescope (Vera Rubin LSST)",
        text: "Mapping 3.2-gigapixel camera exposures from arcsec² per pixel to total square degrees of sky imaged per night."
      },
      {
        title: "Astronomical Source Density Estimation",
        text: "Converting star count densities from stars per square arcsecond to stars per square degree."
      },
      {
        title: "Solar Coronal Mass Ejection Expansion",
        text: "Modeling the projected celestial area of solar flares as they expand from arcsecond scales to degree scales."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcsec² to deg²",
    items: [
      "Dividing by 3,600 instead of 12,960,000: Dividing by 3,600 converts square arcseconds to square arcminutes, not square degrees. You must divide by $3,600^2 = 12,960,000$.",
      "Multiplying instead of dividing: Converting from a small unit (square arcseconds) to a large unit (square degrees) requires division.",
      "Losing significant digits in floating-point calculations: Using single-precision floats can round off small square-degree values.",
      "Assuming 1 square degree = 3,600 square arcseconds: One linear degree is 3,600 linear arcseconds, but a square degree is $3,600 \\times 3,600 = 12,960,000$ square arcseconds."
    ]
  },
  faqs: [
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "There are exactly 12,960,000 square arcseconds in 1 square degree ($3,600 \\times 3,600 = 12,960,000$)."
    },
    {
      question: "What is the formula to convert square arcseconds to square degrees?",
      answer: "The formula is: Area (deg²) = Area (arcsec²) ÷ 12,960,000. To reverse the conversion, multiply square degrees by 12,960,000."
    },
    {
      question: "How many square degrees is 12,960,000 square arcseconds?",
      answer: "12,960,000 square arcseconds equals exactly 1.0 square degree."
    },
    {
      question: "What is 6,480,000 square arcseconds in square degrees?",
      answer: "6,480,000 square arcseconds equals exactly 0.5 square degrees (half a square degree)."
    },
    {
      question: "How many square arcseconds is the full Moon?",
      answer: "The disk of the full Moon spans approximately 2,592,000 square arcseconds, which equals exactly 0.20 square degrees."
    },
    {
      question: "Is the conversion factor 12,960,000 exact?",
      answer: "Yes, exactly 12,960,000. Because 1 degree is defined as precisely 3,600 arcseconds, the squared factor $3,600^2 = 12,960,000$ contains no fractional or rounding approximations."
    },
    {
      question: "What is 1,000,000 square arcseconds in square degrees?",
      answer: "1,000,000 square arcseconds equals $1,000,000 \\div 12,960,000 \\approx 0.07716\\text{ square degrees}$."
    },
    {
      question: "How do I convert square arcseconds to square arcminutes?",
      answer: "Divide square arcseconds by 3,600 ($60^2$). For example, 7,200 square arcseconds equals 2 square arcminutes."
    },
    {
      question: "How many square degrees are in the entire sky?",
      answer: "The entire celestial sphere encompasses approximately 41,252.96 square degrees (exactly $129,600 / \\pi\\text{ deg}^2$)."
    },
    {
      question: "Why do astronomers use square degrees instead of square arcseconds for large surveys?",
      answer: "A single wide-field survey tile covers thousands of square degrees. Expressing such vast regions in square arcseconds would require numbers in the tens of billions."
    }
  ],
  relatedList: [
    { label: "Square Degree to Square Arcsecond", from: "square-degree", to: "square-arcsec" },
    { label: "Square Arcsecond to Square Arcminute", from: "square-arcsec", to: "square-arcmin" },
    { label: "Square Arcsecond to Steradian", from: "square-arcsec", to: "steradian" },
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Arcsecond to Spat", from: "square-arcsec", to: "spat" }
  ],
  references: [
    "International Astronomical Union (IAU): Recommendations on Astronomical Units and Constants.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "Carroll, B. W., & Ostlie, D. A.: 'An Introduction to Modern Astrophysics', Cambridge University Press."
  ]
};
