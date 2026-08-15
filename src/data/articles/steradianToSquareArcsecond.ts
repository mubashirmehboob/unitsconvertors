import { CustomArticleData } from "./types";

export const steradianToSquareArcsecondArticle: CustomArticleData = {
  fromUnitId: "steradian",
  toUnitId: "square-arcsec",
  seoTitle: "Steradian to Square Arcsecond Converter (sr to arcsec²) - UnitsConvertors",
  metaDescription: "Convert steradians to square arcseconds (sr to arcsec²) accurately. Learn the solid angle formula (arcsec² = sr × 4.25452 × 10¹⁰), steps, tables, and FAQs.",
  h1: "Steradian to Square Arcsecond Converter",
  introduction: [
    "Converting steradians (sr) to square arcseconds (arcsec² or sq arcsec) connects standard SI solid angle units with the fine angular units used in astronomical imaging, telescope pixel scales, and surface brightness measurements.",
    "Because 1 degree contains 3,600 arcseconds, 1 square degree contains 12,960,000 square arcseconds (3,600 × 3,600). Since 1 steradian contains (180 / π)² square degrees (approximately 3,282.80635 deg²), 1 steradian corresponds to exactly 419,904,000,000 / π² square arcseconds (approximately 42,545,170,296.15 arcsec²).",
    "This reference explains the mathematical derivation connecting steradians to square arcseconds, demonstrates step-by-step calculations, provides a numerical reference table, and answers common questions regarding solid-angle units."
  ],
  quickAnswer: {
    text: "To convert steradians (sr) to square arcseconds (arcsec²), multiply the steradian value by (648,000 / π)², which is approximately 42,545,170,296.15. For example, 1 microsteradian (10⁻⁶ sr) equals approximately 42,545.17 square arcseconds.",
    formulaDisplay: "Square Arcseconds (arcsec²) = Steradians (sr) × (648,000 ÷ π)²",
    subtext: "1 sr ≈ 4.254517 × 10¹⁰ arcsec² (1 arcsec² ≈ 2.350443 × 10⁻¹¹ sr)."
  },
  aboutSourceUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the standard SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a surface area equal to r². It forms the baseline unit for radiometry and physical optics."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcsecond (arcsec² or sq arcsec)",
    text: "A square arcsecond (arcsec²) is a unit of solid angle corresponding to a square angular area of 1 arcsecond by 1 arcsecond (1/3,600 of a degree per side). It is commonly used in astronomy for telescope detector pixel scales and surface brightness measurements."
  },
  relationship: "One steradian equals (648,000/π)² square arcseconds (≈ 4.254517 × 10¹⁰ arcsec²). Conversely, one square arcsecond equals approximately 2.350443 × 10⁻¹¹ steradians.",
  relationshipTitle: "Steradian to Square Arcsecond Scaling",
  relationshipItems: [
    { label: "1 sr", value: "≈ 42,545,170,296 arcsec² (4.255 × 10¹⁰)" },
    { label: "0.001 sr (1 msr)", value: "≈ 42,545,170 arcsec² (4.255 × 10⁷)" },
    { label: "1 µsr (10⁻⁶ sr)", value: "≈ 42,545.17 arcsec²" },
    { label: "1 nsr (10⁻⁹ sr)", value: "≈ 42.55 arcsec²" }
  ],
  formula: {
    text: "Multiply the solid angle in steradians by 419,904,000,000 / π² (approximately 42,545,170,296.15) to calculate square arcseconds.",
    math: "\\text{arcsec}^2 = \\text{sr} \\times \\left(\\frac{648,000}{\\pi}\\right)^2 = \\text{sr} \\times \\frac{419,904,000,000}{\\pi^2} \\approx \\text{sr} \\times 4.25451703 \\times 10^{10}",
    subtext: "Where 648,000 / π is the number of arcseconds in 1 radian (≈ 206,264.80625 arcsec)."
  },
  practicalTip: {
    title: "Detector Pixel Benchmark",
    text: "A detector pixel measuring 0.2 arcseconds by 0.2 arcseconds covers an angular area of 0.04 arcsec². In SI steradians, this single pixel subtends approximately 9.40 × 10⁻¹³ steradians."
  },
  expertNote: {
    title: "Exact Numerical Factor",
    text: "Because 1 radian contains 648,000 / π arcseconds, 1 steradian (which equals 1 square radian) contains (648,000 / π)² = 419,904,000,000 / π² ≈ 42,545,170,296.15 square arcseconds."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 1 Microsteradian (1 µsr) to Square Arcseconds",
        subtitle: "Convert 10⁻⁶ steradians to square arcseconds.",
        steps: [
          "Identify solid angle: 10⁻⁶ sr (0.000001 sr).",
          "Apply conversion formula: arcsec² = 10⁻⁶ × 4.25451703 × 10¹⁰.",
          "Calculate: 10⁻⁶ × 42,545,170,296.15 = 42,545.1703.",
          "Result: 1 microsteradian equals approximately 42,545.17 square arcseconds."
        ]
      },
      {
        title: "Example 2: Small Beam Solid Angle (5 × 10⁻⁸ sr)",
        subtitle: "Convert 5 × 10⁻⁸ steradians to square arcseconds.",
        steps: [
          "Identify solid angle: 5 × 10⁻⁸ sr.",
          "Apply conversion formula: arcsec² = (5 × 10⁻⁸) × (4.25451703 × 10¹⁰).",
          "Calculate: 5 × 425.4517 = 2,127.2585.",
          "Result: 5 × 10⁻⁸ steradian equals approximately 2,127.26 square arcseconds."
        ]
      },
      {
        title: "Example 3: Converting 1 Steradian to Square Arcseconds",
        subtitle: "Calculate the exact number of square arcseconds in 1 steradian.",
        steps: [
          "Identify solid angle: 1.0 sr.",
          "Compute (648,000 / π)² = 419,904,000,000 / 9.8696044 ≈ 42,545,170,296.15.",
          "Result: 1 steradian equals approximately 42.545 billion square arcseconds (4.25452 × 10¹⁰ arcsec²)."
        ]
      }
    ]
  },
  table: {
    title: "Steradian to Square Arcsecond Conversion Table",
    headers: ["Steradians (sr)", "Square Arcseconds (arcsec²)", "Square Arcminutes Equivalent", "Sphere Fraction"],
    rows: [
      { fromVal: "10⁻¹¹ sr", toVal: "0.4255 arcsec²", extra: "0.000118 arcmin²", extra2: "1 / 1.257 × 10¹² of sphere" },
      { fromVal: "10⁻⁹ sr", toVal: "42.55 arcsec²", extra: "0.011818 arcmin²", extra2: "1 / 1.257 × 10¹⁰ of sphere" },
      { fromVal: "10⁻⁷ sr", toVal: "4,254.52 arcsec²", extra: "1.181810 arcmin²", extra2: "1 / 1.257 × 10⁸ of sphere" },
      { fromVal: "10⁻⁶ sr (1 µsr)", toVal: "42,545.17 arcsec²", extra: "11.818103 arcmin²", extra2: "1 / 12,566,371 of sphere" },
      { fromVal: "10⁻⁴ sr", toVal: "4,254,517.03 arcsec²", extra: "1,181.810286 arcmin²", extra2: "1 / 125,664 of sphere" },
      { fromVal: "0.001 sr (1 msr)", toVal: "42,545,170.30 arcsec²", extra: "11,818.102860 arcmin²", extra2: "1 / 12,566 of sphere" },
      { fromVal: "1.0 sr", toVal: "42,545,170,296.15 arcsec²", extra: "11,818,102.86 arcmin²", extra2: "1 / 12.57 of sphere" },
      { fromVal: "12.56637 sr (4π)", toVal: "534,638,377,792.47 arcsec²", extra: "148,510,660.50 arcmin²", extra2: "Full sphere (1 spat)" }
    ]
  },
  applications: {
    title: "Applications of Steradian to Square Arcsecond Conversion",
    items: [
      {
        title: "Telescope Pixel Scale Calibration",
        text: "Relating detector pixel solid angles to square arcseconds for flux and sensitivity modeling."
      },
      {
        title: "Surface Brightness Calculations",
        text: "Converting between physical radiance in W/(m²·sr) and observed surface brightness per square arcsecond."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting between SI solid-angle units and high-resolution astronomical area metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing 1D angular resolution with 2D solid angle: An angular diameter in arcseconds must be integrated over area (e.g., π × r² for circular apertures) to determine solid angle.",
      "Using the 1D planar conversion factor without squaring: 1 radian equals 206,264.8 arcseconds, so 1 steradian equals (206,264.8)² ≈ 4.25452 × 10¹⁰ arcsec².",
      "Rounding intermediate factors too early: Because the conversion factor is large (~4.25 × 10¹⁰), rounding π or intermediate values can introduce noticeable discrepancies."
    ]
  },
  faqs: [
    {
      question: "How many square arcseconds are in 1 steradian?",
      answer: "There are approximately 42,545,170,296.15 square arcseconds in 1 steradian (exact formula: 419,904,000,000 / π² arcsec²)."
    },
    {
      question: "What is the formula to convert steradians to square arcseconds?",
      answer: "The formula is: arcsec² = sr × (648,000 / π)² ≈ sr × 4.25451703 × 10¹⁰."
    },
    {
      question: "How many square arcseconds are in a full sphere?",
      answer: "A full sphere (4π steradians) contains approximately 534,638,377,792.47 square arcseconds (exact formula: 1,679,616,000,000 / π arcsec²)."
    },
    {
      question: "How do I convert square arcseconds back to steradians?",
      answer: "To convert square arcseconds to steradians, divide by 42,545,170,296.15, or multiply by approximately 2.35044305 × 10⁻¹¹ (sr = arcsec² × 2.35044305 × 10⁻¹¹)."
    },
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "There are exactly 12,960,000 square arcseconds in 1 square degree (3,600 × 3,600 = 12,960,000 arcsec²)."
    },
    {
      question: "What is the solid angle of 1 square arcsecond in steradians?",
      answer: "1 square arcsecond equals approximately 2.350443 × 10⁻¹¹ steradians."
    },
    {
      question: "Why do astronomers measure surface brightness in square arcseconds?",
      answer: "Because distant astronomical targets like galaxies and nebulae have light distributed over tiny angular areas, square arcseconds provide a convenient, standardized resolution unit."
    },
    {
      question: "How many square arcseconds is 1 microsteradian (10⁻⁶ sr)?",
      answer: "1 microsteradian equals approximately 42,545.17 square arcseconds."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Spat to Square Arcsecond", from: "spat", to: "square-arcsec" },
    { label: "Square Arcsecond to Steradian", from: "square-arcsec", to: "steradian" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomical unit representations including steradian and arcsecond",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
