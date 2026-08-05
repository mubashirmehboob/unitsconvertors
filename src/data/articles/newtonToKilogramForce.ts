import { CustomArticleData } from "./types";

export const newtonToKilogramForce: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "kilogram-force",
  seoTitle: "Newton to Kilogram-force Converter (N to kgf)",
  metaDescription: "Convert newtons to kilograms-force (N to kgf) accurately. Exact gravitational factor (9.80665), formula, worked calculation examples, and comparison table.",
  h1: "Newton to Kilogram-force Converter",
  introduction: [
    "The newton (N) and kilogram-force (kgf, also called kilopond or kp) are key units of force. While the newton is the official standard unit in the International System of Units (SI), the kilogram-force remains common in legacy engineering, material testing, and structural stress specifications.",
    "One kilogram-force represents the gravitational pull on a 1-kilogram mass at Earth's standard acceleration of gravity (9.80665 m/s²). Consequently, 1 kgf equals exactly 9.80665 newtons.",
    "Converting newtons to kilograms-force requires dividing by 9.80665 (or multiplying by approximately 0.10197162). This guide outlines the exact conversion math, physical foundations, practical examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert newtons to kilograms-force, divide the value by 9.80665 (or multiply by 0.1019716). For example, 98.0665 N equals exactly 10 kgf.",
    formulaDisplay: "kgf = N / 9.80665",
    subtext: "1 kgf is the weight force exerted by 1 kg of mass under standard acceleration of gravity (g = 9.80665 m/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the coherent SI derived unit of force. Defined by Sir Isaac Newton's second law of motion (F = ma), 1 newton equals the force needed to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²). It is independent of local gravity."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilogram-force (kgf)",
    text: "The kilogram-force (kgf), also known in Europe as the kilopond (kp), is a gravitational metric unit of force. It is defined as the force exerted by standard Earth gravity (9.80665 m/s²) on a mass of one kilogram. Therefore, 1 kgf = 1 kg × 9.80665 m/s² = 9.80665 N."
  },
  relationship: "Because 1 kgf equals 9.80665 N by international agreement, converting from newtons to kilograms-force is simply the inverse: 1 N = 1 / 9.80665 kgf ≈ 0.1019716213 kgf. A 10 N force is nearly equal to 1.02 kgf.",
  relationshipTitle: "Newton vs Kilogram-force Scale Benchmark",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 0.1019716 kgf" },
    { label: "1 Kilogram-force (kgf)", value: "9.80665 N (exact)" },
    { label: "1 Kilonewton (kN)", value: "≈ 101.9716 kgf" },
    { label: "1 Gram-force (gf)", value: "0.001 kgf" }
  ],
  formula: {
    text: "Divide the force in newtons by the standard acceleration of gravity (9.80665 m/s²).",
    math: "kgf = N / 9.80665",
    subtext: "Alternatively: kgf = N × 0.1019716213."
  },
  formulaTitle: "Newton to Kilogram-force Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For a quick estimate, divide the newton value by 10 (or multiply by 0.1). For example, 100 N is roughly 10 kgf (exact answer: 10.197 kgf, error under 2%)."
  },
  expertNote: {
    title: "Kilopond (kp) Equivalence",
    text: "In older German and European engineering literature, the kilogram-force was called the kilopond (kp). 1 kilopond is identical to 1 kilogram-force (1 kp = 1 kgf = 9.80665 N)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 500 Newtons",
        subtitle: "Convert a load force of 500 N into kilograms-force.",
        steps: [
          "Identify the starting force in newtons: 500 N.",
          "Apply the standard gravity factor: kgf = 500 / 9.80665.",
          "Calculate: 500 / 9.80665 = 50.9858.",
          "Result: 500 N equals approximately 50.99 kgf."
        ]
      },
      {
        title: "Example 2: Tension Load of 98.1 Newtons",
        subtitle: "Convert a cable tension reading of 98.1 N to kgf.",
        steps: [
          "Identify the force value: 98.1 N.",
          "Divide by 9.80665: 98.1 / 9.80665 = 10.0034.",
          "Result: 98.1 N is virtually identical to 10 kgf."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Kilogram-force Quick Reference Table",
    headers: ["Newtons (N)", "Kilograms-force (kgf)", "Kiloponds (kp)", "Engineering Context"],
    rows: [
      { fromVal: "1 N", toVal: "0.102 kgf", extra: "0.102 kp", extra2: "Weight of ~102 grams on Earth" },
      { fromVal: "9.80665 N", toVal: "1.000 kgf", extra: "1.000 kp", extra2: "Exact gravitational pull on 1 kg" },
      { fromVal: "20 N", toVal: "2.039 kgf", extra: "2.039 kp", extra2: "Small tension spring" },
      { fromVal: "50 N", toVal: "5.099 kgf", extra: "5.099 kp", extra2: "Light mechanical press" },
      { fromVal: "100 N", toVal: "10.197 kgf", extra: "10.197 kp", extra2: "Standard load cell benchmark" },
      { fromVal: "250 N", toVal: "25.493 kgf", extra: "25.493 kp", extra2: "Industrial clamp force" },
      { fromVal: "500 N", toVal: "50.986 kgf", extra: "50.986 kp", extra2: "Tensile coupon test load" },
      { fromVal: "1,000 N (1 kN)", toVal: "101.972 kgf", extra: "101.972 kp", extra2: "Structural tie-down capacity" },
      { fromVal: "5,000 N (5 kN)", toVal: "509.858 kgf", extra: "509.858 kp", extra2: "Hydraulic actuator thrust" },
      { fromVal: "9,806.65 N", toVal: "1,000.000 kgf", extra: "1,000.000 kp", extra2: "1 metric ton-force (tonf)" }
    ]
  },
  applications: {
    title: "Practical Applications of N to kgf Conversion",
    items: [
      {
        title: "Material Tensile Testing & Hardness Testing",
        text: "Vickers and Rockwell hardness testers often measure indentation forces in kgf (e.g., HV30 = 30 kgf), requiring conversions to newtons for electronic load cell calibration."
      },
      {
        title: "Legacy Machinery & Crane Specifications",
        text: "European and Asian industrial machinery manuals often quote hoisting limits or brake torque in kgf or kgf·m."
      },
      {
        title: "Bicycle Component & Torque Specs",
        text: "Spoke tension meters and structural bicycle test rigs frequently list spoke tension targets in kgf alongside newtons."
      },
      {
        title: "Aero Structural Testing",
        text: "Converting structural proof loads between SI newtons and kgf assists multi-national engineering compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing kilogram-mass (kg) with kilogram-force (kgf); mass is static matter, whereas force accounts for gravitational acceleration.",
      "Using rounded gravity values like 9.8 or 10 in high-precision structural certifications where 9.80665 is required.",
      "Treating kgf as an official SI unit; kgf is deprecated in modern SI standards, which strictly favor newtons."
    ]
  },
  faqs: [
    {
      question: "How many kilograms-force are in 1 newton?",
      answer: "One newton equals approximately 0.10197162 kilograms-force (kgf)."
    },
    {
      question: "How many newtons are in 1 kilogram-force?",
      answer: "One kilogram-force equals exactly 9.80665 newtons by international definition."
    },
    {
      question: "What is the difference between kg and kgf?",
      answer: "Kg (kilogram) is a unit of mass, whereas kgf (kilogram-force) is a unit of force representing the weight of 1 kg mass under standard gravity."
    },
    {
      question: "Is kilopond (kp) the same as kilogram-force (kgf)?",
      answer: "Yes, 1 kilopond (kp) is completely identical to 1 kilogram-force (kgf)."
    },
    {
      question: "How can I quickly convert N to kgf in my head?",
      answer: "Divide by 10. 100 N divided by 10 gives 10 kgf (actual exact value is 10.197 kgf)."
    },
    {
      question: "Why is the factor 9.80665 used?",
      answer: "9.80665 m/s² is the standard acceleration of free fall established by the 3rd General Conference on Weights and Measures (CGPM)."
    },
    {
      question: "Why is kgf deprecated in modern SI standards?",
      answer: "Because kgf depends on gravitational acceleration, which varies slightly depending on altitude and latitude, whereas the newton is absolute."
    },
    {
      question: "How do I convert kilonewtons (kN) to kgf?",
      answer: "Multiply the value in kN by 101.97162. For example, 1 kN equals 101.97 kgf."
    }
  ],
  relatedList: [
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" },
    { label: "Newton to Ton-force Metric", from: "newton", to: "ton-force-metric" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" }
  ],
  references: [
    "CGPM Resolution 2 of 1901: Definition of standard acceleration due to gravity",
    "BIPM SI Brochure: Non-SI units accepted for use with SI",
    "ISO 80000-4: Quantities and units — Mechanics"
  ]
};
