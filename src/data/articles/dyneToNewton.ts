import { CustomArticleData } from "./types";

export const dyneToNewton: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "newton",
  seoTitle: "Dyne to Newton Converter (dyn to N) | UnitsConvertors.com",
  metaDescription: "Convert Dynes to Newtons (dyn to N) accurately. Learn the exact CGS to SI unit conversion factor, physics formulas, worked examples, and reference tables.",
  h1: "Dyne to Newton Converter",
  introduction: [
    "The dyne (dyn) and the newton (N) are standard physical units of force originating from two foundational scientific measurement frameworks: the centimeter-gram-second (CGS) system and the modern International System of Units (SI).",
    "While the newton is the globally accepted standard in modern physics and engineering, the dyne remains widely referenced in fluid interfacial science, surface tension measurements, and classical scientific literature.",
    "To convert a force reading from dynes to newtons, multiply the dyne value by 0.00001 (or divide by 100,000), since 1 dyn equals exactly 10⁻⁵ N. This guide outlines the formal derivation, step-by-step calculation examples, common pitfalls, and a comprehensive conversion table."
  ],
  quickAnswer: {
    text: "To convert dynes to newtons, multiply the value by 0.00001 (10⁻⁵) or divide by 100,000. For example, 250,000 dynes equals exactly 2.5 newtons.",
    formulaDisplay: "N = dyn × 0.00001 = dyn / 100,000",
    subtext: "1 Dyne = 0.00001 Newtons (10⁻⁵ N); 1 Newton = 100,000 Dynes (10⁵ dyn)."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the coherent unit of force in the centimeter-gram-second (CGS) metric system, originally introduced in 1873 by a committee of the British Association for the Advancement of Science. Defined by Newton's second law (F = ma), one dyne is the force needed to accelerate a mass of one gram at a rate of one centimeter per second squared (1 dyn = 1 g·cm/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the official derived unit of force in the International System of Units (SI), named after Sir Isaac Newton. It is defined as the force required to accelerate a one-kilogram mass at a rate of one meter per second squared (1 N = 1 kg·m/s²). Because 1 kg equals 1,000 g and 1 m equals 100 cm, 1 N equals exactly 100,000 dyn."
  },
  relationship: "The relationship between dynes and newtons derives directly from the definitions of mass and length in CGS and SI: 1 N = (1,000 g) × (100 cm/s²) = 100,000 g·cm/s² = 10⁵ dyn. Consequently, 1 dyn = 10⁻⁵ N = 0.00001 N.",
  relationshipTitle: "Dyne vs Newton Relationship Comparison",
  relationshipItems: [
    { label: "1 Dyne (dyn)", value: "0.00001 N (10⁻⁵ N)" },
    { label: "10 Dynes", value: "0.0001 N" },
    { label: "100 Dynes", value: "0.001 N (1 mN)" },
    { label: "100,000 Dynes", value: "1.0 N" },
    { label: "1,000,000 Dynes (1 Megadyne)", value: "10.0 N" }
  ],
  formula: {
    text: "Divide the force in dynes by 100,000, or multiply by 0.00001 (10⁻⁵), to find the equivalent force in newtons.",
    math: "\\text{N} = \\text{dyn} \\times 10^{-5} = \\frac{\\text{dyn}}{100{,}000}",
    subtext: "Inverse formula: dyn = N × 100,000"
  },
  formulaTitle: "Dyne to Newton Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "When converting dynes to newtons, move the decimal point five places to the left. For example, 75,000 dyn becomes 0.75 N."
  },
  expertNote: {
    title: "Surface Tension Equivalency",
    text: "In surface chemistry, surface tension is frequently stated in dyn/cm. Because 1 dyn = 10⁻⁵ N and 1 cm = 10⁻² m, 1 dyn/cm = 10⁻³ N/m = 1 mN/m. For instance, water at 20°C has a surface tension of 72.8 dyn/cm, which equals 0.0728 N/m."
  },
  examples: {
    title: "Step-by-Step dyn to N Worked Examples",
    items: [
      {
        title: "Example 1: Surface Tension Pull Force",
        subtitle: "Convert a laboratory tensiometer pull force of 45,000 dynes into newtons.",
        steps: [
          "State the given force in dynes: F = 45,000 dyn.",
          "Apply the conversion formula: N = dyn × 0.00001.",
          "Compute: 45,000 × 0.00001 = 0.45.",
          "Final Result: 45,000 dynes equals 0.45 Newtons (0.45 N)."
        ]
      },
      {
        title: "Example 2: Acoustic Radiation Force",
        subtitle: "An acoustic transducer generates a radiation pressure force of 850 dynes. Express this in newtons.",
        steps: [
          "Identify the input value: 850 dyn.",
          "Divide by 100,000: 850 / 100,000 = 0.0085.",
          "Final Result: 850 dynes corresponds to 0.0085 N (8.5 mN)."
        ]
      },
      {
        title: "Example 3: Micro-Mechanical Spring Test",
        subtitle: "Convert a micro-spring tension load of 1,200,000 dynes to newtons.",
        steps: [
          "Identify the force: 1,200,000 dyn.",
          "Perform calculation: 1,200,000 × 10⁻⁵ = 12.",
          "Final Result: 1,200,000 dynes equals 12 Newtons (12 N)."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Newton Quick Reference Table",
    headers: ["Dynes (dyn)", "Newtons (N)", "Scientific Notation", "Physical Equivalent / Context"],
    rows: [
      { fromVal: "1 dyn", toVal: "0.00001 N", extra: "1.0 × 10⁻⁵ N", extra2: "Weight of ~1.02 mg mass" },
      { fromVal: "10 dyn", toVal: "0.0001 N", extra: "1.0 × 10⁻⁴ N", extra2: "100 µN (micro-actuator load)" },
      { fromVal: "100 dyn", toVal: "0.001 N", extra: "1.0 × 10⁻³ N", extra2: "1 mN (millinewton)" },
      { fromVal: "500 dyn", toVal: "0.005 N", extra: "5.0 × 10⁻³ N", extra2: "Capillary rise force" },
      { fromVal: "1,000 dyn", toVal: "0.01 N", extra: "1.0 × 10⁻² N", extra2: "Weight of ~1.02 g mass (1 gf)" },
      { fromVal: "5,000 dyn", toVal: "0.05 N", extra: "5.0 × 10⁻² N", extra2: "Turntable needle tracking force" },
      { fromVal: "10,000 dyn", toVal: "0.1 N", extra: "1.0 × 10⁻¹ N", extra2: "Weight of ~10.2 g mass" },
      { fromVal: "50,000 dyn", toVal: "0.5 N", extra: "5.0 × 10⁻¹ N", extra2: "Light switch toggle resistance" },
      { fromVal: "100,000 dyn", toVal: "1.0 N", extra: "1.0 × 10⁰ N", extra2: "1 Newton (weight of ~102 g)" },
      { fromVal: "500,000 dyn", toVal: "5.0 N", extra: "5.0 × 10⁰ N", extra2: "Hand push button force" },
      { fromVal: "1,000,000 dyn", toVal: "10.0 N", extra: "1.0 × 10¹ N", extra2: "1 Megadyne (weight of ~1.02 kg)" }
    ]
  },
  applications: {
    title: "Practical Applications of Dyne to Newton Conversions",
    items: [
      {
        title: "Interfacial Chemistry & Tensiometry",
        text: "Scientists measuring surface and interfacial tensions convert historical CGS dyn/cm data into modern SI N/m or mN/m units."
      },
      {
        title: "Audiology & Acoustic Engineering",
        text: "Sound pressure and acoustic impedance were historically formulated in dynes per square centimeter (microbars); converting to pascals and newtons standardizes acoustic modeling."
      },
      {
        title: "Historical Scientific Data Analysis",
        text: "Engineers reviewing physics literature, fluid dynamics papers, and patents from the 19th and 20th centuries convert CGS force values into standard SI newtons."
      },
      {
        title: "Precision Micro-Mechanical Calibration",
        text: "Small force gauges, torsion balances, and galvanic meters calibrated in dynes are converted to newtons for compliance with ISO/IEC 17025 standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Newton Conversions",
    items: [
      "Multiplying by 100,000 instead of dividing by 100,000 when converting from dynes to newtons.",
      "Miscounting the number of zeros when moving decimals (remember: exactly 5 decimal places).",
      "Confusing the dyne with the poundal (1 pdl ≈ 13,825 dyn).",
      "Confusing dyne (force) with erg (energy, 1 erg = 1 dyn·cm = 10⁻⁷ J)."
    ]
  },
  faqs: [
    {
      question: "How many newtons are in 1 dyne?",
      answer: "There are exactly 0.00001 newtons (10⁻⁵ N) in 1 dyne."
    },
    {
      question: "What is the formula to convert dynes to newtons?",
      answer: "The formula is: Newtons (N) = Dynes (dyn) / 100,000, or N = dyn × 0.00001."
    },
    {
      question: "How do I convert 500,000 dynes to newtons?",
      answer: "Divide 500,000 by 100,000: 500,000 / 100,000 = 5 N."
    },
    {
      question: "Why is 1 newton equal to 100,000 dynes?",
      answer: "Because 1 newton is 1 kg·m/s² and 1 dyne is 1 g·cm/s². Since 1 kg = 1,000 g and 1 m = 100 cm, multiplying 1,000 × 100 gives 100,000."
    },
    {
      question: "What is the official symbol for dyne?",
      answer: "The official symbol for dyne is dyn (all lowercase)."
    },
    {
      question: "How does a dyne compare to a millinewton?",
      answer: "1 millinewton (mN) equals 100 dynes. Therefore, 1 dyne equals 0.01 millinewtons."
    },
    {
      question: "What mass has a weight of 1 dyne on Earth?",
      answer: "Under standard gravity (9.80665 m/s²), a mass of approximately 1.0197 milligrams exerts a gravitational force of 1 dyne."
    },
    {
      question: "Is the dyne still used today?",
      answer: "While modern engineering uses the SI newton, the dyne is still referenced in surface chemistry (surface tension in dyn/cm), audiology, and historical scientific papers."
    }
  ],
  relatedList: [
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Dyne to Pound-force", from: "dyne", to: "pound-force" },
    { label: "Dyne to Kilogram-force", from: "dyne", to: "kilogram-force" },
    { label: "Dyne to Poundal", from: "dyne", to: "poundal" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition, 2019).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "British Association for the Advancement of Science: Report on the Selection and Nomenclature of Dynamical and Electrical Units (1873)."
  ]
};
