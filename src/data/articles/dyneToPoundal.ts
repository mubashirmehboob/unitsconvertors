import { CustomArticleData } from "./types";

export const dyneToPoundal: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "poundal",
  seoTitle: "Dyne to Poundal Converter (dyn to pdl) | UnitsConvertors.com",
  metaDescription: "Convert Dynes to Poundals (dyn to pdl) accurately. Learn the absolute CGS to FPS unit relationship, exact derivation formulas, examples, and tables.",
  h1: "Dyne to Poundal Converter",
  introduction: [
    "The dyne (dyn) and the poundal (pdl) share a unique scientific relationship: both are absolute, non-gravitational units of mechanical force derived from first principles in classical physics.",
    "While the dyne is the absolute force unit in the metric centimeter-gram-second (CGS) system, the poundal is the absolute force unit in the British foot-pound-second (FPS) system. Neither unit depends on standard Earth gravity.",
    "To convert from dynes to poundals, divide the dyne value by 13,825.4954 (or multiply by approximately 7.233014 × 10⁻⁵). This guide details the mathematical derivation, step-by-step calculation examples, common pitfalls, and reference conversion tables."
  ],
  quickAnswer: {
    text: "To convert dynes to poundals, divide the force in dynes by 13,825.4954 or multiply by 7.233014 × 10⁻⁵. For example, 100,000 dynes (1 newton) equals approximately 7.233 poundals.",
    formulaDisplay: "pdl = dyn / 13,825.4954 = dyn × 7.233014 × 10⁻⁵",
    subtext: "1 Poundal = 13,825.4954 Dynes (0.138255 N); 1 Dyne ≈ 0.0000723301 Poundals."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the absolute unit of force in the CGS metric system, defined by the British Association for the Advancement of Science in 1873. By Newton's second law (F = ma), one dyne is the force required to accelerate a mass of one gram at a rate of one centimeter per second squared (1 dyn = 1 g·cm/s² = 10⁻⁵ N)."
  },
  aboutTargetUnit: {
    title: "Understanding the Poundal (pdl)",
    text: "The poundal is the absolute derived unit of force in the foot-pound-second (FPS) system of units, introduced in 1877 by British physicist and mathematician James Thomson. One poundal is defined as the force needed to accelerate a mass of one avoirdupois pound (0.45359237 kg) at a rate of one foot per second squared (1 pdl = 1 lb·ft/s² ≈ 0.138255 N)."
  },
  relationship: "Because 1 avoirdupois pound equals exactly 453.59237 grams and 1 foot equals exactly 30.48 centimeters, one poundal is precisely: 1 pdl = 453.59237 g × 30.48 cm/s² = 13,825.4954376 g·cm/s² = 13,825.4954376 dynes. Conversely, 1 dyne = 1 / 13,825.4954376 ≈ 7.233013851 × 10⁻⁵ poundals.",
  relationshipTitle: "Dyne vs Poundal Scale Comparison",
  relationshipItems: [
    { label: "1 Dyne (dyn)", value: "0.00007233 pdl (7.233 × 10⁻⁵ pdl)" },
    { label: "1,000 Dynes", value: "0.072330 pdl" },
    { label: "13,825.5 Dynes", value: "1.000000 pdl" },
    { label: "100,000 Dynes (1 N)", value: "7.233014 pdl" },
    { label: "1,000,000 Dynes (1 Mdyn)", value: "72.330139 pdl" }
  ],
  formula: {
    text: "Divide the force in dynes by 13,825.4954, or multiply by 7.233014 × 10⁻⁵, to determine the force in poundals.",
    math: "\\text{pdl} = \\frac{\\text{dyn}}{13{,}825.4954} = \\text{dyn} \\times 7.233013851 \\times 10^{-5}",
    subtext: "Inverse formula: dyn = pdl × 13,825.4954"
  },
  formulaTitle: "Dyne to Poundal Conversion Formula",
  practicalTip: {
    title: "Absolute Units Benefit",
    text: "Because both dynes and poundals are absolute units (defined without reference to gravitational acceleration 'g'), conversions between dynes and poundals remain identical regardless of whether calculations occur on Earth, the Moon, or in orbital space."
  },
  expertNote: {
    title: "Poundal vs Pound-force",
    text: "A poundal is not a pound-force. Under standard gravity (g = 32.17405 ft/s²), 1 pound-force (lbf) equals approximately 32.17405 poundals (444,822 dynes). 1 poundal equals approximately 0.03108 lbf (13,825.5 dynes)."
  },
  examples: {
    title: "Step-by-Step dyn to pdl Worked Examples",
    items: [
      {
        title: "Example 1: Aerodynamic Boundary Layer Shear Force",
        subtitle: "Convert a boundary layer shear test reading of 250,000 dynes into poundals.",
        steps: [
          "State the given force in dynes: F = 250,000 dyn.",
          "Apply the conversion formula: pdl = 250,000 / 13,825.4954.",
          "Compute the division: 250,000 / 13,825.4954 = 18.08253.",
          "Final Result: 250,000 dynes equals approximately 18.083 poundals (18.083 pdl)."
        ]
      },
      {
        title: "Example 2: Small Caliber Ballistic Recoil Force",
        subtitle: "Convert an impulse dynamic force of 65,000 dynes to poundals.",
        steps: [
          "Identify the force: 65,000 dyn.",
          "Multiply by factor: 65,000 × (7.233014 × 10⁻⁵) = 4.70146.",
          "Final Result: 65,000 dynes corresponds to approximately 4.701 poundals."
        ]
      },
      {
        title: "Example 3: High-Torque Precision Galvanometer",
        subtitle: "A torque balance produces 5,000 dynes of tangential force. Express this in poundals.",
        steps: [
          "Identify the input: 5,000 dyn.",
          "Divide by 13,825.4954: 5,000 / 13,825.4954 = 0.36165.",
          "Final Result: 5,000 dynes equals approximately 0.362 poundals."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Poundal Quick Reference Table",
    headers: ["Dynes (dyn)", "Poundals (pdl)", "Newtons (N)", "Pounds-force (lbf)"],
    rows: [
      { fromVal: "1,000 dyn", toVal: "0.07233 pdl", extra: "0.0100 N", extra2: "0.00225 lbf" },
      { fromVal: "5,000 dyn", toVal: "0.36165 pdl", extra: "0.0500 N", extra2: "0.01124 lbf" },
      { fromVal: "10,000 dyn", toVal: "0.72330 pdl", extra: "0.1000 N", extra2: "0.02248 lbf" },
      { fromVal: "13,825.5 dyn", toVal: "1.00000 pdl", extra: "0.1383 N", extra2: "0.03108 lbf" },
      { fromVal: "50,000 dyn", toVal: "3.61651 pdl", extra: "0.5000 N", extra2: "0.11240 lbf" },
      { fromVal: "100,000 dyn", toVal: "7.23301 pdl", extra: "1.0000 N", extra2: "0.22481 lbf" },
      { fromVal: "250,000 dyn", toVal: "18.0825 pdl", extra: "2.5000 N", extra2: "0.56202 lbf" },
      { fromVal: "500,000 dyn", toVal: "36.1651 pdl", extra: "5.0000 N", extra2: "1.12404 lbf" },
      { fromVal: "1,000,000 dyn", toVal: "72.3301 pdl", extra: "10.000 N", extra2: "2.24809 lbf" },
      { fromVal: "5,000,000 dyn", toVal: "361.651 pdl", extra: "50.000 N", extra2: "11.2404 lbf" }
    ]
  },
  applications: {
    title: "Practical Applications of Dyne to Poundal Conversions",
    items: [
      {
        title: "Historical Physics & Ballistics Literature",
        text: "Researchers studying 19th- and 20th-century British dynamics, ballistics, and mechanics treatises convert between CGS dynes and FPS poundals."
      },
      {
        title: "Aerospace & Fluid Dynamic Modeling",
        text: "Converting absolute shear forces and aerodynamic coefficients across historical imperial wind tunnel data sets into metric dynamic formats."
      },
      {
        title: "Classical Mechanics Education",
        text: "Physics professors demonstrate dimensional analysis and the distinction between coherent absolute systems (CGS, FPS) and gravitational systems (MKpS, BG)."
      },
      {
        title: "Acoustic & Vibration Engineering",
        text: "Translating dynamic acoustic pressures and structural damping coefficients between metric and imperial absolute frameworks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Poundal Conversions",
    items: [
      "Confusing poundals (pdl) with pounds-force (lbf), which differs by a factor of 32.174.",
      "Multiplying by 13,825.5 instead of dividing when converting from dynes to poundals.",
      "Assuming the poundal depends on local gravity (it is an absolute coherent mass-acceleration unit).",
      "Confusing the poundal (force) with the slug (mass unit in the gravitational British engineering system)."
    ]
  },
  faqs: [
    {
      question: "How many poundals are in 1 dyne?",
      answer: "There are approximately 7.233014 × 10⁻⁵ poundals in 1 dyne (about 0.00007233 pdl)."
    },
    {
      question: "How many dynes are in 1 poundal?",
      answer: "There are exactly 13,825.4954376 dynes in 1 poundal."
    },
    {
      question: "What is the formula to convert dynes to poundals?",
      answer: "The formula is: Poundals (pdl) = Dynes (dyn) / 13,825.4954, or pdl = dyn × 7.233014 × 10⁻⁵."
    },
    {
      question: "How do I convert 100,000 dynes to poundals?",
      answer: "Divide 100,000 by 13,825.4954: 100,000 / 13,825.4954 ≈ 7.233 poundals."
    },
    {
      question: "What is a poundal?",
      answer: "A poundal (pdl) is the absolute unit of force in the foot-pound-second (FPS) system, defined as the force required to accelerate a 1-pound mass at 1 ft/s²."
    },
    {
      question: "What is the difference between a poundal and a pound-force?",
      answer: "A poundal is an absolute unit (accelerates 1 lb at 1 ft/s², ~13,825 dyn), while a pound-force is a gravitational unit (weight of 1 lb under Earth gravity, ~444,822 dyn). 1 lbf ≈ 32.174 pdl."
    },
    {
      question: "What is the official symbol for poundal?",
      answer: "The standard symbol for poundal is pdl."
    },
    {
      question: "Why do dyne and poundal have an exact mathematical relationship?",
      answer: "Because 1 lb is defined as exactly 453.59237 grams and 1 foot is defined as exactly 30.48 centimeters, their product gives the exact conversion: 453.59237 × 30.48 = 13,825.4954376."
    }
  ],
  relatedList: [
    { label: "Dyne to Newton", from: "dyne", to: "newton" },
    { label: "Dyne to Pound-force", from: "dyne", to: "pound-force" },
    { label: "Newton to Poundal", from: "newton", to: "poundal" },
    { label: "Poundal to Newton", from: "poundal", to: "newton" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "Thomson, James: 'On Metric Units of Force and Energy', British Association for the Advancement of Science (1877)."
  ]
};
