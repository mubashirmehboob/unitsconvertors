import { CustomArticleData } from "./types";

export const dyneToKilogramForce: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "kilogram-force",
  seoTitle: "Dyne to Kilogram-force Converter (dyn to kgf) | UnitsConvertors.com",
  metaDescription: "Convert Dynes to Kilogram-force (dyn to kgf) accurately. Explore the CGS to gravitational metric conversion factor, formulas, worked examples, and tables.",
  h1: "Dyne to Kilogram-force Converter",
  introduction: [
    "The dyne (dyn) and the kilogram-force (kgf, also called the kilopond) are two metric force units originating from different historical engineering traditions: the dynamic centimeter-gram-second (CGS) system and the gravitational metric system (MKpS).",
    "While the dyne is defined through absolute mass acceleration (1 g·cm/s²), the kilogram-force represents the gravitational pull on a one-kilogram mass under standard Earth gravity (9.80665 m/s²).",
    "To convert from dynes to kilogram-force, divide the dyne value by 980,665 (or multiply by approximately 1.019716 × 10⁻⁶). This guide explains the exact gravitational derivation, conversion formulas, practical step-by-step examples, and complete engineering reference tables."
  ],
  quickAnswer: {
    text: "To convert dynes to kilogram-force, divide the value by 980,665 or multiply by 1.019716 × 10⁻⁶. For instance, 1,000,000 dynes (1 megadyne) equals approximately 1.0197 kgf.",
    formulaDisplay: "kgf = dyn / 980,665 = dyn × 1.019716 × 10⁻⁶",
    subtext: "1 Kilogram-force = 980,665 Dynes; 1 Dyne ≈ 0.0000010197 Kilogram-force."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the primary unit of force in the CGS metric system. Formulated by the British Association for the Advancement of Science in 1873, one dyne is defined as the force required to accelerate a one-gram mass at a rate of one centimeter per second squared (1 dyn = 1 g·cm/s²). In SI units, 1 dyn equals exactly 10⁻⁵ newtons (0.00001 N)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilogram-force (kgf)",
    text: "The kilogram-force (symbol: kgf), also known in Germany and Northern Europe as the kilopond (kp), is a non-SI gravitational metric unit of force. It equals the magnitude of the force exerted on one kilogram of mass in a standard gravitational field of 9.80665 m/s² (980.665 cm/s²). Exactly, 1 kgf equals 9.80665 Newtons."
  },
  relationship: "Because standard gravity is exactly 980.665 cm/s² and 1 kilogram is 1,000 grams, 1 kgf = 1,000 g × 980.665 cm/s² = 980,665 dynes. Therefore, converting from dynes to kilogram-force requires dividing by 980,665 (1 dyn ≈ 1.019716213 × 10⁻⁶ kgf).",
  relationshipTitle: "Dyne vs Kilogram-force Scale Comparison",
  relationshipItems: [
    { label: "1 Dyne (dyn)", value: "1.019716 × 10⁻⁶ kgf" },
    { label: "980.665 Dynes (1 gf)", value: "0.001 kgf" },
    { label: "100,000 Dynes (1 N)", value: "0.101972 kgf" },
    { label: "980,665 Dynes", value: "1.000000 kgf" },
    { label: "1,000,000 Dynes (1 Mdyn)", value: "1.019716 kgf" }
  ],
  formula: {
    text: "Divide the force in dynes by 980,665, or multiply by 1.019716 × 10⁻⁶, to determine the force in kilogram-force.",
    math: "\\text{kgf} = \\frac{\\text{dyn}}{980{,}665} = \\text{dyn} \\times 1.019716213 \\times 10^{-6}",
    subtext: "Inverse formula: dyn = kgf × 980,665"
  },
  formulaTitle: "Dyne to Kilogram-force Conversion Formula",
  practicalTip: {
    title: "1-to-1 Megadyne Rule of Thumb",
    text: "Because 1 kgf is 980,665 dynes (roughly 1 million dynes), 1 megadyne (1,000,000 dyn) is almost exactly 1.02 kgf (differing by less than 2%)."
  },
  expertNote: {
    title: "Gram-Force vs Kilogram-Force",
    text: "In small-scale laboratory measurements, 1 gram-force (gf) equals exactly 980.665 dynes. Converting dynes to kilogram-force is equivalent to converting dynes to gram-force (dyn / 980.665) and then dividing by 1,000."
  },
  examples: {
    title: "Step-by-Step dyn to kgf Worked Examples",
    items: [
      {
        title: "Example 1: Materials Tensile Yield Test",
        subtitle: "Convert a measured polymer yield force of 2,450,000 dynes to kilogram-force.",
        steps: [
          "Identify the force in dynes: F = 2,450,000 dyn.",
          "Apply the conversion factor: kgf = 2,450,000 / 980,665.",
          "Perform division: 2,450,000 / 980,665 = 2.498305.",
          "Final Result: 2,450,000 dynes equals approximately 2.498 kgf."
        ]
      },
      {
        title: "Example 2: Precision Balance Load Calibration",
        subtitle: "A micro-load cell records 490,332.5 dynes. Convert this reading to kilogram-force.",
        steps: [
          "Identify the input force: 490,332.5 dyn.",
          "Divide by 980,665: 490,332.5 / 980,665 = 0.500000.",
          "Final Result: 490,332.5 dynes equals exactly 0.5 kgf (500 gf)."
        ]
      },
      {
        title: "Example 3: Hydraulic Pressure Actuator Thrust",
        subtitle: "Convert an actuator output force of 15,000,000 dynes into kilogram-force.",
        steps: [
          "State the force: 15,000,000 dyn (15 megadynes).",
          "Multiply by factor: 15,000,000 × 1.019716 × 10⁻⁶ = 15.29574.",
          "Final Result: 15,000,000 dynes equals approximately 15.30 kgf."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Kilogram-force Quick Reference Table",
    headers: ["Dynes (dyn)", "Kilogram-force (kgf)", "Gram-force (gf)", "Newtons (N)"],
    rows: [
      { fromVal: "980.665 dyn", toVal: "0.00100 kgf", extra: "1.00 gf", extra2: "0.00981 N" },
      { fromVal: "10,000 dyn", toVal: "0.01020 kgf", extra: "10.20 gf", extra2: "0.1000 N" },
      { fromVal: "50,000 dyn", toVal: "0.05099 kgf", extra: "50.99 gf", extra2: "0.5000 N" },
      { fromVal: "100,000 dyn", toVal: "0.10197 kgf", extra: "101.97 gf", extra2: "1.0000 N" },
      { fromVal: "490,333 dyn", toVal: "0.50000 kgf", extra: "500.00 gf", extra2: "4.9033 N" },
      { fromVal: "980,665 dyn", toVal: "1.00000 kgf", extra: "1,000.00 gf", extra2: "9.8067 N" },
      { fromVal: "1,000,000 dyn", toVal: "1.01972 kgf", extra: "1,019.72 gf", extra2: "10.000 N" },
      { fromVal: "2,000,000 dyn", toVal: "2.03943 kgf", extra: "2,039.43 gf", extra2: "20.000 N" },
      { fromVal: "5,000,000 dyn", toVal: "5.09858 kgf", extra: "5,098.58 gf", extra2: "50.000 N" },
      { fromVal: "10,000,000 dyn", toVal: "10.1972 kgf", extra: "10,197.16 gf", extra2: "100.00 N" }
    ]
  },
  applications: {
    title: "Practical Applications of Dyne to Kilogram-force Conversions",
    items: [
      {
        title: "Mechanical & Hardness Testing",
        text: "Hardness testing machines (such as Vickers and Rockwell testers) and spring test benches calibrated in kgf or kp utilize dyne conversions when translating micro-scale test data."
      },
      {
        title: "Hydraulic & Pneumatic Press Specifications",
        text: "Legacy European engineering documentation specifying cylinder thrust in kilogram-force is translated from research dynamometer readings recorded in dynes."
      },
      {
        title: "Materials Quality Control & Tensile Testing",
        text: "Quality assurance engineers convert high-precision force sensor measurements from dynes into standard kilogram-force ratings for manufacturing acceptance."
      },
      {
        title: "Physics Education & Historical Mechanics",
        text: "Educators illustrate the distinction between dynamic coherent systems (CGS dynes) and gravitational systems (MKpS kilogram-force) in mechanics coursework."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Kilogram-force Conversions",
    items: [
      "Multiplying by 980,665 instead of dividing when converting from dynes to kilogram-force.",
      "Confusing kilogram-force (kgf, force) with kilograms (kg, mass).",
      "Using local gravity instead of standard standard gravity ($g_0 = 9.80665\\text{ m/s}^2$) for exact unit definition.",
      "Confusing kilogram-force (kgf) with gram-force (gf), which differs by a factor of 1,000."
    ]
  },
  faqs: [
    {
      question: "How many kilogram-force are in 1 dyne?",
      answer: "There are approximately 1.019716 × 10⁻⁶ kilogram-force in 1 dyne (about 0.00000102 kgf)."
    },
    {
      question: "How many dynes are in 1 kilogram-force?",
      answer: "There are exactly 980,665 dynes in 1 kilogram-force."
    },
    {
      question: "What is the formula to convert dynes to kilogram-force?",
      answer: "The formula is: Kilogram-force (kgf) = Dynes (dyn) / 980,665, or kgf = dyn × 1.019716 × 10⁻⁶."
    },
    {
      question: "How do I convert 1,000,000 dynes to kgf?",
      answer: "Divide 1,000,000 by 980,665: 1,000,000 / 980,665 ≈ 1.0197 kgf."
    },
    {
      question: "What is the difference between kilogram-force and newton?",
      answer: "A newton is the SI unit of force (1 kg·m/s² = 100,000 dyn), while a kilogram-force is the weight of 1 kg under standard gravity (9.80665 N = 980,665 dyn). Therefore, 1 kgf ≈ 9.80665 N."
    },
    {
      question: "Is kilopond the same as kilogram-force?",
      answer: "Yes, kilopond (kp) is an alternate name for kilogram-force (kgf) used primarily in European technical literature."
    },
    {
      question: "What is 1 gram-force in dynes?",
      answer: "1 gram-force (gf) equals exactly 980.665 dynes (1 kgf = 1,000 gf = 980,665 dyn)."
    },
    {
      question: "Why is 1 kgf equal to 980,665 dynes?",
      answer: "Because 1 kg = 1,000 g and standard gravity $g_0 = 980.665\\text{ cm/s}^2$. Multiplying 1,000 g × 980.665 cm/s² yields exactly 980,665 g·cm/s² (dynes)."
    }
  ],
  relatedList: [
    { label: "Dyne to Newton", from: "dyne", to: "newton" },
    { label: "Dyne to Pound-force", from: "dyne", to: "pound-force" },
    { label: "Dyne to Gram-force", from: "dyne", to: "gram-force" },
    { label: "Kilogram-force to Newton", from: "kilogram-force", to: "newton" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition, 2019).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "DIN 1305: Mass, Weight Value, Force, Weight Force, Weight, Terms and Concepts (German Institute for Standardization)."
  ]
};
