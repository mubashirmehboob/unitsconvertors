import { CustomArticleData } from "./types";

export const steradianToSquareArcminuteArticle: CustomArticleData = {
  fromUnitId: "steradian",
  toUnitId: "square-arcmin",
  seoTitle: "Steradian to Square Arcminute Converter (sr to arcmin²) - UnitsConvertors",
  metaDescription: "Convert steradians to square arcminutes (sr to arcmin²) accurately. Learn the solid angle formula (arcmin² = sr × 1.18181 × 10⁷), calculation steps, tables, and FAQs.",
  h1: "Steradian to Square Arcminute Converter",
  introduction: [
    "Converting steradians (sr) to square arcminutes (arcmin² or sq arcmin) expresses SI solid angles in the intermediate angular-area units commonly used in observational astronomy and telescope sensor modeling.",
    "Because 1 degree equals 60 arcminutes, 1 square degree contains 3,600 square arcminutes (60 × 60). Since 1 steradian equals (180 / π)² square degrees (approximately 3,282.80635 deg²), 1 steradian corresponds to exactly 116,640,000 / π² square arcminutes (approximately 11,818,102.86 arcmin²).",
    "This reference explains the mathematical derivation connecting steradians to square arcminutes, details step-by-step conversion calculations, provides a numerical lookup table, and answers common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert steradians (sr) to square arcminutes (arcmin²), multiply the steradian value by 116,640,000 / π² (approximately 11,818,102.86). For example, 0.001 steradian equals approximately 11,818.10 square arcminutes.",
    formulaDisplay: "Square Arcminutes (arcmin²) = Steradians (sr) × (10,800 ÷ π)²",
    subtext: "1 sr ≈ 11,818,102.86 arcmin² (1 arcmin² ≈ 8.461595 × 10⁻⁸ sr)."
  },
  aboutSourceUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a surface patch of area r². It forms the baseline unit for radiometric and photometric measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcminute (arcmin² or sq arcmin)",
    text: "The square arcminute (arcmin² or sq arcmin) is a unit of solid angle corresponding to a square angular patch measuring 1 arcminute by 1 arcminute (1/60 of a degree per side). It is commonly used in astronomy to express telescope fields of view and the apparent angular sizes of celestial bodies."
  },
  relationship: "One steradian equals (10,800/π)² square arcminutes (≈ 11,818,102.86 arcmin²). A complete sphere (4π steradians) equals approximately 148,510,660.50 square arcminutes.",
  relationshipTitle: "Steradian to Square Arcminute Scaling",
  relationshipItems: [
    { label: "1 sr", value: "≈ 11,818,103 arcmin² (1.182 × 10⁷)" },
    { label: "0.001 sr (1 msr)", value: "≈ 11,818.10 arcmin²" },
    { label: "0.0001 sr", value: "≈ 1,181.81 arcmin²" },
    { label: "4π sr (Full Sphere)", value: "≈ 148,510,661 arcmin² (1.485 × 10⁸)" }
  ],
  formula: {
    text: "Multiply the solid angle in steradians by 116,640,000 / π² (approximately 11,818,102.86) to obtain square arcminutes.",
    math: "\\text{arcmin}^2 = \\text{sr} \\times \\left(\\frac{10,800}{\\pi}\\right)^2 = \\text{sr} \\times \\frac{116,640,000}{\\pi^2} \\approx \\text{sr} \\times 11,818,102.86",
    subtext: "Where 10,800 / π is the number of arcminutes in 1 radian."
  },
  practicalTip: {
    title: "Lunar Disk Benchmark",
    text: "The angular disk of the full Moon subtends approximately 700 to 750 square arcminutes on the celestial vault. In SI steradians, this corresponds to approximately 6 × 10⁻⁵ steradians."
  },
  expertNote: {
    title: "Derivation from Radians",
    text: "Because 1 radian contains 10,800 / π arcminutes (≈ 3,437.75 arcmin), 1 steradian (which equals 1 square radian) contains (10,800 / π)² = 116,640,000 / π² ≈ 11,818,102.86 square arcminutes."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.001 Steradians to Square Arcminutes",
        subtitle: "Convert 1 millisteradian (0.001 sr) to square arcminutes.",
        steps: [
          "Identify known solid angle: 0.001 sr.",
          "Apply conversion multiplier: arcmin² = 0.001 × 11,818,102.86.",
          "Calculate: 0.001 × 11,818,102.86 = 11,818.10286.",
          "Result: 0.001 steradian equals approximately 11,818.10 square arcminutes."
        ]
      },
      {
        title: "Example 2: Optical Sensor Field (0.00025 sr)",
        subtitle: "Convert a solid angle of 0.00025 sr to square arcminutes.",
        steps: [
          "Identify known solid angle: 0.00025 sr.",
          "Apply conversion formula: arcmin² = 0.00025 × 11,818,102.86.",
          "Calculate: 0.00025 × 11,818,102.86 = 2,954.5257.",
          "Result: 0.00025 steradian equals approximately 2,954.53 square arcminutes."
        ]
      },
      {
        title: "Example 3: Converting 1 Steradian to Square Arcminutes",
        subtitle: "Calculate the exact number of square arcminutes in 1 steradian.",
        steps: [
          "Identify solid angle: 1.0 sr.",
          "Compute (10,800 / π)² = 116,640,000 / 9.8696044 ≈ 11,818,102.86.",
          "Result: 1 steradian equals approximately 11,818,102.86 square arcminutes (1.18181 × 10⁷ arcmin²)."
        ]
      }
    ]
  },
  table: {
    title: "Steradian to Square Arcminute Conversion Table",
    headers: ["Steradians (sr)", "Square Arcminutes (arcmin²)", "Square Degrees Equivalent (deg²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.00001 sr", toVal: "118.18 arcmin²", extra: "0.032828 deg²", extra2: "1 / 1,256,637 of sphere" },
      { fromVal: "0.0001 sr", toVal: "1,181.81 arcmin²", extra: "0.328281 deg²", extra2: "1 / 125,664 of sphere" },
      { fromVal: "0.001 sr", toVal: "11,818.10 arcmin²", extra: "3.282806 deg²", extra2: "1 / 12,566 of sphere" },
      { fromVal: "0.01 sr", toVal: "118,181.03 arcmin²", extra: "32.828064 deg²", extra2: "1 / 1,257 of sphere" },
      { fromVal: "0.1 sr", toVal: "1,181,810.29 arcmin²", extra: "328.280635 deg²", extra2: "1 / 125.7 of sphere" },
      { fromVal: "1.0 sr", toVal: "11,818,102.86 arcmin²", extra: "3,282.806350 deg²", extra2: "1 / 12.57 of sphere" },
      { fromVal: "12.56637 sr (4π)", toVal: "148,510,660.50 arcmin²", extra: "41,252.961249 deg²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Steradian to Square Arcminute Conversion",
    items: [
      {
        title: "Telescope Field of View Modeling",
        text: "Relating solid angles in steradians to square arcminutes when calculating sensor frame coverage."
      },
      {
        title: "Photometric Brightness Conversion",
        text: "Translating surface brightness measurements between physical radiant units (W/sr) and angular coordinates."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting between SI radiometric metrics and standard astronomical angular area measurements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 60 instead of 3,600 when converting from square degrees: 1 degree contains 60 arcminutes, but 1 square degree contains (60 × 60) = 3,600 square arcminutes.",
      "Confusing plane arcminutes with square arcminutes: Linear angular diameter (arcminutes) must be converted using area geometry before matching solid angles.",
      "Confusing square arcminutes with square arcseconds: 1 square arcminute equals 3,600 square arcseconds."
    ]
  },
  faqs: [
    {
      question: "How many square arcminutes are in 1 steradian?",
      answer: "There are approximately 11,818,102.86 square arcminutes in 1 steradian (exact formula: 116,640,000 / π² arcmin²)."
    },
    {
      question: "What is the formula to convert steradians to square arcminutes?",
      answer: "The formula is: arcmin² = sr × (10,800 / π)² ≈ sr × 11,818,102.86."
    },
    {
      question: "How many square arcminutes are in a full sphere?",
      answer: "A full sphere (4π steradians) contains approximately 148,510,660.50 square arcminutes (466,560,000 / π arcmin²)."
    },
    {
      question: "How do I convert square arcminutes back to steradians?",
      answer: "To convert square arcminutes to steradians, divide by 11,818,102.86, or multiply by π² / 116,640,000 ≈ 8.461595 × 10⁻⁸ (sr = arcmin² × 8.461595 × 10⁻⁸)."
    },
    {
      question: "What is the approximate solid angle of the full Moon in square arcminutes?",
      answer: "The full Moon subtends approximately 700 to 750 square arcminutes on the sky, which corresponds to approximately 6 × 10⁻⁵ steradians."
    },
    {
      question: "How many square arcminutes are in 1 square degree?",
      answer: "There are exactly 3,600 square arcminutes in 1 square degree (60 × 60 = 3,600 arcmin²)."
    },
    {
      question: "Why do astronomers use square arcminutes?",
      answer: "Square arcminutes provide a convenient scale for measuring intermediate celestial fields of view and extended objects such as nebulae and star clusters."
    },
    {
      question: "How many square arcminutes is 1 millisteradian (0.001 sr)?",
      answer: "0.001 steradian equals approximately 11,818.10 square arcminutes."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" },
    { label: "Spat to Square Arcminute", from: "spat", to: "square-arcmin" },
    { label: "Square Arcminute to Steradian", from: "square-arcmin", to: "steradian" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "IVOA — VOUnits (IVOA Recommendation), for astronomical unit representations including steradian and arcminute",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
