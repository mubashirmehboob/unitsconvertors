import { CustomArticleData } from "./types";

export const newtonToGramForce: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "gram-force",
  seoTitle: "Newton to Gram-force Converter (N to gf)",
  metaDescription: "Convert newtons to grams-force (N to gf) accurately. Gravitational conversion factor, formula, step-by-step examples, and precision load tables.",
  h1: "Newton to Gram-force Converter",
  introduction: [
    "The newton (N) and gram-force (gf, sometimes called pond) are important units of force used across science, precision engineering, and material testing.",
    "While the newton is the official SI unit of force, the gram-force is commonly used in laboratory testing, textile yarn strength measurements, thin film peel tests, and micro-load cell calibrations.",
    "One gram-force represents the gravitational weight force on a 1-gram mass under Earth's standard gravity (9.80665 m/s²). Consequently, 1 newton equals approximately 101.97162 grams-force."
  ],
  quickAnswer: {
    text: "To convert newtons to grams-force, multiply the value by 101.9716213 (or divide by 0.00980665). For example, 1 N equals approximately 101.97 gf.",
    formulaDisplay: "gf = N × 101.97162",
    subtext: "1 gram-force equals 0.00980665 newtons (or 9.80665 mN)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the coherent SI unit of force, named in honor of Sir Isaac Newton. It is defined as the force required to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Gram-force (gf)",
    text: "The gram-force (gf), also called the pond (p) in older European literature, is a metric gravitational unit of force. It equals the force exerted by standard Earth gravity (9.80665 m/s²) on a 1-gram mass, yielding exactly 0.00980665 newtons (9.80665 millinewtons)."
  },
  relationship: "Because 1 kgf = 1,000 gf and 1 kgf = 9.80665 N, 1 N equals 1,000 / 9.80665 ≈ 101.9716213 gf. Expressed conversely, 1 gf = 9.80665 / 1,000 = 0.00980665 N.",
  relationshipTitle: "Newton vs Gram-force Scale Comparison",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 101.97162 gf" },
    { label: "1 Gram-force (gf)", value: "0.00980665 N (9.80665 mN)" },
    { label: "1 Kilogram-force (kgf)", value: "1,000 gf (9.80665 N)" },
    { label: "1 Millinewton (mN)", value: "≈ 0.1019716 gf" }
  ],
  formula: {
    text: "Multiply the force in newtons by 101.9716213 to obtain force in grams-force.",
    math: "gf = N × 101.9716213",
    subtext: "Exact formula: gf = (N / 9.80665) × 1,000."
  },
  formulaTitle: "Newton to Gram-force Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate grams-force from newtons quickly in your head, multiply the newton value by 100. For example, 5 N × 100 = 500 gf (exact answer: 509.86 gf, error ~2%)."
  },
  expertNote: {
    title: "Textile & Wire Testing Context",
    text: "Textile fiber strength (tenacity) is often reported in grams per denier (g/denier), where grams refers to grams-force. Converting newtons from modern digital tensile machines to gf ensures consistency with legacy textile specifications."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.5 Newtons",
        subtitle: "Convert a light spring tension of 0.5 N into grams-force.",
        steps: [
          "Identify the force in newtons: 0.5 N.",
          "Apply the conversion factor: gf = 0.5 × 101.97162.",
          "Perform the calculation: 0.5 × 101.97162 = 50.98581.",
          "Result: 0.5 N is equal to approximately 50.99 gf."
        ]
      },
      {
        title: "Example 2: Sensor Calibration (10 Newtons)",
        subtitle: "Convert a 10 N load sensor output to grams-force.",
        steps: [
          "Identify the force value: 10 N.",
          "Multiply by 101.97162: 10 × 101.97162 = 1,019.7162.",
          "Result: 10 N corresponds to 1,019.72 gf (or ~1.02 kgf)."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Gram-force Quick Reference Table",
    headers: ["Newtons (N)", "Grams-force (gf)", "Millinewtons (mN)", "Practical Context"],
    rows: [
      { fromVal: "0.01 N", toVal: "1.020 gf", extra: "10 mN", extra2: "Micro-balance stylus force" },
      { fromVal: "0.05 N", toVal: "5.099 gf", extra: "50 mN", extra2: "Optical switch actuation force" },
      { fromVal: "0.10 N", toVal: "10.197 gf", extra: "100 mN", extra2: "Featherweight contact probe" },
      { fromVal: "0.50 N", toVal: "50.986 gf", extra: "500 mN", extra2: "Keyboard key switch press force" },
      { fromVal: "1.00 N", toVal: "101.972 gf", extra: "1,000 mN", extra2: "Weight of 102 grams on Earth" },
      { fromVal: "2.00 N", toVal: "203.943 gf", extra: "2,000 mN", extra2: "Small spring tension" },
      { fromVal: "5.00 N", toVal: "509.858 gf", extra: "5,000 mN", extra2: "Tape peel test force" },
      { fromVal: "9.80665 N", toVal: "1,000.000 gf", extra: "9,806.65 mN", extra2: "Exactly 1 kilogram-force (1 kgf)" },
      { fromVal: "20.00 N", toVal: "2,039.432 gf", extra: "20,000 mN", extra2: "Light cable pull force" },
      { fromVal: "50.00 N", toVal: "5,098.581 gf", extra: "50,000 mN", extra2: "5 kgf benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of N to gf Conversion",
    items: [
      {
        title: "Textile & Yarn Tensile Testing",
        text: "Yarn breaking tenacity, thread strength, and fabric tear resistance are routinely expressed in grams-force (gf) or cN/tex."
      },
      {
        title: "Electronic Switch & Keyboard Design",
        text: "Mechanical keyboard switch manufacturer specifications state key actuation force in grams-force (e.g., Cherry MX Red = 45 gf)."
      },
      {
        title: "Adhesive Tape Peel Testing",
        text: "FINAT and PSTC standards for adhesive tape peel adhesion measure peel force in gf per 25 mm width."
      },
      {
        title: "Precision Micro-Load Cell Calibration",
        text: "Medical balances, jewelers' scales, and pharmaceutical force gauges convert raw load cell newton readings into gf for display."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing gram-mass (g) with gram-force (gf); gram-mass is static matter, whereas gram-force is a force unit equal to m × g.",
      "Confusing gram-force (gf) with grain-force or dyne.",
      "Using rounded gravity (10 m/s²) in precision laboratory tests where 9.80665 m/s² is required."
    ]
  },
  faqs: [
    {
      question: "How many grams-force are in 1 newton?",
      answer: "One newton equals approximately 101.97162 grams-force (gf)."
    },
    {
      question: "How many newtons are in 1 gram-force?",
      answer: "One gram-force equals exactly 0.00980665 newtons (or 9.80665 millinewtons)."
    },
    {
      question: "What is the difference between g and gf?",
      answer: "Gram (g) measures mass, whereas gram-force (gf) measures force or weight under Earth's standard gravity."
    },
    {
      question: "Why is 1 N roughly equal to 102 gf?",
      answer: "Because Earth's gravity is ~9.81 m/s², 1 N supports ~1/9.81 kg = 0.10197 kg = 101.97 grams of weight."
    },
    {
      question: "Is gram-force the same as pond (p)?",
      answer: "Yes, in older European literature, 1 gram-force was called 1 pond (p)."
    },
    {
      question: "How do I convert N to gf in mechanical keyboard testing?",
      answer: "Multiply the newton reading by 101.97. For example, 0.45 N = 0.45 × 101.97 = 45.89 gf."
    },
    {
      question: "How many grams-force make 1 kilogram-force?",
      answer: "There are exactly 1,000 grams-force in 1 kilogram-force (kgf)."
    },
    {
      question: "Is gf an official SI unit?",
      answer: "No, gf is a non-SI gravitational metric unit. The official SI unit for small forces is the millinewton (mN)."
    }
  ],
  relatedList: [
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Ounce-force", from: "newton", to: "ounce-force" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Poundal", from: "newton", to: "poundal" }
  ],
  references: [
    "BIPM SI Brochure: Non-SI units accepted for use with SI",
    "ISO 80000-4: Quantities and units — Mechanics",
    "ASTM D2256: Standard Test Method for Tensile Properties of Yarns by the Single-Strand Method"
  ]
};
