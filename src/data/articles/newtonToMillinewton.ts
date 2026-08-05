import { CustomArticleData } from "./types";

export const newtonToMillinewton: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "millinewton",
  seoTitle: "Newton to Millinewton Converter (N to mN) | UnitsConvertors.com",
  metaDescription: "Convert Newtons to Millinewtons (N to mN) accurately. Learn the SI prefix scale factor, force measurement formulas, MEMS applications, and reference tables.",
  h1: "Newton to Millinewton Converter",
  introduction: [
    "The newton (N) is the standard International System of Units (SI) measure for mechanical force. However, in precision engineering, micro-electromechanical systems (MEMS), and surface science, macro-level force values in newtons are often too large for convenient recording.",
    "The millinewton (symbol: mN) represents one-thousandth of a newton (10⁻³ N). It is widely used to quantify delicate contact forces, micro-component friction, and surface tension dynamics.",
    "To convert a force value from newtons (N) to millinewtons (mN), multiply the newton value by 1,000 (mN = N × 1,000). This guide explains the SI metric prefix hierarchy, practical applications in micro-engineering, step-by-step examples, and complete reference tables."
  ],
  quickAnswer: {
    text: "To convert newtons to millinewtons, multiply the force in newtons by 1,000. For example, a force reading of 0.25 Newtons equals 250 Millinewtons.",
    formulaDisplay: "mN = N × 1,000",
    subtext: "1 Newton equals 1,000 Millinewtons; 1 Millinewton equals 0.001 Newtons."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the SI derived unit of force, named in honor of Sir Isaac Newton. Based on Newton's second law of motion (F = ma), 1 newton is the force required to accelerate a 1-kilogram mass at a rate of 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Millinewton (mN)",
    text: "The millinewton is a metric submultiple of the newton. Incorporating the standard SI prefix 'milli-' (signifying 10⁻³ or 1/1,000), 1 millinewton is the force required to accelerate a 1-gram mass at 1 meter per second squared, or a 1-kilogram mass at 1 millimeter per second squared."
  },
  relationship: "Because the millinewton is smaller than the newton by a factor of 1,000, converting from newtons to millinewtons shifts the decimal point three places to the right. Multiply newtons by 1,000 to obtain millinewtons.",
  relationshipTitle: "Newton vs Millinewton Scale Comparison",
  relationshipItems: [
    { label: "1.0 N", value: "1,000 mN" },
    { label: "0.1 N", value: "100 mN" },
    { label: "0.01 N", value: "10 mN" },
    { label: "0.001 N", value: "1 mN" },
    { label: "0.0001 N", value: "0.1 mN (100 µN)" }
  ],
  formula: {
    text: "Multiply the force in newtons by 1,000 to determine the force in millinewtons.",
    math: "\\text{mN} = \\text{N} \\times 1,000",
    subtext: "Alternatively: mN = N × 10³."
  },
  formulaTitle: "Newton to Millinewton Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "When converting newtons to millinewtons, simply move the decimal point three positions to the right (e.g., 0.045 N becomes 45 mN)."
  },
  expertNote: {
    title: "Surface Tension Unit Equivalency",
    text: "In surface tension physical chemistry, 1 millinewton per meter (mN/m) is exactly equal to 1 dyne per centimeter (dyn/cm), making millinewtons an important bridge between CGS and SI surface dynamics."
  },
  examples: {
    title: "Step-by-Step N to mN Worked Examples",
    items: [
      {
        title: "Example 1: Micro-Actuator Force Testing",
        subtitle: "Convert a micro-actuator output force of 0.085 Newtons to millinewtons.",
        steps: [
          "Identify the input force in newtons: 0.085 N.",
          "Apply the conversion factor: mN = 0.085 × 1,000.",
          "Perform calculation: 0.085 × 1,000 = 85.",
          "Final Result: 0.085 N equals 85 millinewtons (85 mN)."
        ]
      },
      {
        title: "Example 2: Precision Balance Calibration",
        subtitle: "Convert a calibration weight force of 0.0098 Newtons to millinewtons.",
        steps: [
          "Identify the input value: 0.0098 N.",
          "Multiply by 1,000: 0.0098 × 1,000 = 9.8.",
          "Final Result: 0.0098 N corresponds to 9.8 mN (equivalent to approximately 1 gram-force)."
        ]
      },
      {
        title: "Example 3: Medical Catheter Insertion Force",
        subtitle: "Convert an insertion resistance load of 1.25 Newtons to millinewtons.",
        steps: [
          "Identify force in newtons: 1.25 N.",
          "Multiply by 1,000: 1.25 × 1,000 = 1,250.",
          "Final Result: 1.25 N equals 1,250 mN."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Millinewton Quick Reference Table",
    headers: ["Newtons (N)", "Millinewtons (mN)", "Scientific Notation", "Engineering Context"],
    rows: [
      { fromVal: "0.0001 N", toVal: "0.1 mN", extra: "1.0 × 10⁻¹ mN", extra2: "Micro-electromechanical contact" },
      { fromVal: "0.001 N", toVal: "1 mN", extra: "1.0 × 10⁰ mN", extra2: "Delicate spring preload" },
      { fromVal: "0.005 N", toVal: "5 mN", extra: "5.0 × 10⁰ mN", extra2: "Insect leg attachment force" },
      { fromVal: "0.01 N", toVal: "10 mN", extra: "1.0 × 10¹ mN", extra2: "Optical pickup coil actuation" },
      { fromVal: "0.05 N", toVal: "50 mN", extra: "5.0 × 10¹ mN", extra2: "Stylus tracking force on vinyl" },
      { fromVal: "0.1 N", toVal: "100 mN", extra: "1.0 × 10² mN", extra2: "Keyboard key switch tactile bump" },
      { fromVal: "0.5 N", toVal: "500 mN", extra: "5.0 × 10² mN", extra2: "Light touch switch click" },
      { fromVal: "1.0 N", toVal: "1,000 mN", extra: "1.0 × 10³ mN", extra2: "Weight of a 102-gram mass" },
      { fromVal: "5.0 N", toVal: "5,000 mN", extra: "5.0 × 10³ mN", extra2: "Handheld push button load" },
      { fromVal: "10.0 N", toVal: "10,000 mN", extra: "1.0 × 10⁴ mN", extra2: "Small mechanical clamping force" }
    ]
  },
  applications: {
    title: "Practical Applications of N to mN Conversions",
    items: [
      {
        title: "MEMS & Micro-Robotics Design",
        text: "Engineers working on micro-electromechanical systems convert structural simulations from newtons to millinewtons to evaluate electrostatic beam bending."
      },
      {
        title: "Medical Device & Needle Insertion Testing",
        text: "Biomedical researchers quantify surgical tissue penetration force in millinewtons to optimize needle sharping geometries."
      },
      {
        title: "Surface Tension & Contact Angle Measurements",
        text: "Physical chemists record Wilhelmy plate and du Noüy ring forces in millinewtons to compute interfacial surface tension."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in N to mN Conversions",
    items: [
      "Dividing by 1,000 instead of multiplying by 1,000 when converting from newtons to millinewtons.",
      "Confusing millinewtons (mN, 10⁻³ N) with micronewtons (µN, 10⁻⁶ N) or meganewtons (MN, 10⁶ N).",
      "Forgetting that 1 mN is equal to 100 dynes.",
      "Misplacing the decimal point when converting sub-millinewton force values."
    ]
  },
  faqs: [
    {
      question: "How many millinewtons are in 1 newton?",
      answer: "There are exactly 1,000 millinewtons in 1 newton."
    },
    {
      question: "How do I convert 0.05 Newtons to millinewtons?",
      answer: "Multiply 0.05 by 1,000. The result is exactly 50 millinewtons."
    },
    {
      question: "What is the symbol for millinewton?",
      answer: "The official SI symbol for millinewton is mN (lowercase 'm', uppercase 'N')."
    },
    {
      question: "How does a millinewton relate to a dyne?",
      answer: "1 millinewton equals exactly 100 dynes (1 mN = 100 dyn)."
    },
    {
      question: "What mass under Earth gravity exerts 1 mN of weight force?",
      answer: "Under standard gravity (9.80665 m/s²), a mass of approximately 0.102 grams exerts 1 millinewton of gravitational force."
    },
    {
      question: "Why use millinewtons instead of newtons?",
      answer: "Millinewtons express small micro-engineering forces using convenient whole numbers rather than small decimal fractions."
    },
    {
      question: "What is 1 millinewton in micronewtons?",
      answer: "1 millinewton equals 1,000 micronewtons (1 mN = 1,000 µN)."
    },
    {
      question: "Is millinewton an official SI unit?",
      answer: "Yes, the millinewton is an official SI unit formed by combining the prefix 'milli-' with the SI derived unit newton."
    }
  ],
  relatedList: [
    { label: "Millinewton to Newton", from: "millinewton", to: "newton" },
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Micronewton", from: "newton", to: "micronewton" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" }
  ],
  references: [
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
