import { CustomArticleData } from "./types";

export const kilojouleToErg: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "erg",
  seoTitle: "Kilojoule to Erg Converter (kJ to erg)",
  metaDescription: "Convert kilojoules to ergs (kJ to erg) with exact CGS metric precision. Learn the conversion formula, calculation steps, lookup tables, and scientific FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-erg",
  h1: "Kilojoule to Erg Converter",
  introduction: [
    "The kilojoule (kJ) and the erg (erg) are metric units of energy originating from two historical branches of physical measurement: the modern SI (meter-kilogram-second) system and the classical CGS (centimeter-gram-second) system. While the kilojoule is standard in modern mechanical and thermal engineering, the erg remains active in astrophysics, stellar mechanics, seismology, and relativistic astrophysics.",
    "Converting kilojoules to ergs is an exact decimal scaling operation. In CGS mechanics, one erg represents the work done by a force of one dyne acting over a displacement of one centimeter (1 dyne·cm = 10⁻⁷ Joules). Because one Joule contains 10,000,000 ergs (10⁷ erg), one kilojoule (1,000 Joules) equals exactly 10,000,000,000 ergs (10¹⁰ erg or 10 billion ergs).",
    "This technical article details the exact conversion formula, provides step-by-step calculation examples, presents an astrophysics and geophysics conversion table, explains practical scientific use cases, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to ergs, multiply the kilojoule value by 10,000,000,000 (10¹⁰). For example, 5 kilojoules equals exactly 50,000,000,000 ergs (5 × 10¹⁰ erg).",
    formulaDisplay: "erg = kJ × 10,000,000,000 = kJ × 10¹⁰",
    subtext: "1 kilojoule is equal to exactly 10,000,000,000 ergs (10¹⁰ ergs)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an official decimal multiple of the SI unit Joule, representing 1,000 Joules (10³ J). Widely utilized across all branches of engineering, chemistry, and environmental science, one kilojoule represents 1,000 Newtons of force exerted across one meter, or 1 kilowatt of electrical power sustained for one second."
  },
  aboutTargetUnit: {
    title: "Understanding the Erg (erg)",
    text: "The erg (symbol: erg) is the base derived unit of energy and mechanical work in the centimeter-gram-second (CGS) system of units, proposed by the British Association for the Advancement of Science in 1873. Defined as 1 gram·centimeter squared per second squared (1 g·cm²/s² = 1 dyne·cm = 10⁻⁷ J), the erg is widely used to express astronomical luminosity, supernova energy outputs, and seismic wave energy."
  },
  relationship: "By exact mathematical definition: 1 erg = 10⁻⁷ Joules. Since 1 kilojoule = 10³ Joules, we have 1 kJ = 10³ / 10⁻⁷ = 10¹⁰ ergs (exactly 10 billion ergs). The conversion is purely an integer power of ten.",
  relationshipTitle: "Kilojoule to Erg Scaling Relationship",
  relationshipItems: [
    { label: "10⁻¹⁰ kJ", value: "1 erg (work of a mosquito taking flight)" },
    { label: "10⁻³ kJ", value: "10⁷ erg (1 Joule / 10 million ergs)" },
    { label: "1 kJ", value: "10¹⁰ erg (10 billion ergs)" },
    { label: "1,000 kJ", value: "10¹³ erg (1 Megajoule)" },
    { label: "1,000,000 kJ", value: "10¹⁶ erg (1 Gigajoule / moderate lightning strike)" }
  ],
  formula: {
    text: "Multiply the energy in kilojoules by 10¹⁰ (10 billion) to determine the exact equivalent in ergs.",
    math: "erg = kJ * 10000000000",
    subtext: "Scientific notation: erg = kJ × 10¹⁰"
  },
  formulaTitle: "Kilojoule to Erg Conversion Formula",
  practicalTip: {
    title: "Scientific Exponent Shortcut",
    text: "When working in scientific notation, simply add 10 to the exponent of the kilojoule value. For example: 3.5 × 10² kJ becomes 3.5 × 10¹² erg."
  },
  expertNote: {
    title: "Astrophysical Tradition",
    text: "Astrophysicists frequently measure solar luminosity in ergs per second (L☉ ≈ 3.828 × 10³³ erg/s). To convert this to SI metric, 10³³ erg/s equals 10²³ kJ/s (or 3.828 × 10²⁶ Watts)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Impact Kinetic Energy",
        subtitle: "Convert a mechanical impact of 0.45 kilojoules into ergs.",
        steps: [
          "Identify the kilojoule value: 0.45 kJ.",
          "Apply the formula: erg = 0.45 × 10¹⁰.",
          "Calculate: 0.45 × 10,000,000,000 = 4,500,000,000 erg.",
          "Result: 0.45 kJ equals exactly 4.5 × 10⁹ ergs (4.5 billion ergs)."
        ]
      },
      {
        title: "Example 2: Seismic Wave Energy Micro-Tremor",
        subtitle: "Convert 250 kilojoules of seismic ground motion into ergs.",
        steps: [
          "Identify energy in kJ: 250 kJ.",
          "Multiply by 10¹⁰: 250 × 10¹⁰ = 2.5 × 10¹² erg.",
          "Result: 250 kJ equals 2.5 × 10¹² ergs (2.5 trillion ergs)."
        ]
      },
      {
        title: "Example 3: Chemical Combustion Enthalpy",
        subtitle: "Convert 18 kilojoules into ergs.",
        steps: [
          "Identify energy: 18 kJ.",
          "Calculate: 18 × 10¹⁰ = 1.8 × 10¹¹ erg.",
          "Result: 18 kJ equals 180 billion ergs (1.8 × 10¹¹ erg)."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Erg Conversion Table",
    headers: ["Kilojoules (kJ)", "Ergs (erg)", "Scientific Notation", "Physical Benchmark"],
    rows: [
      { fromVal: "10⁻¹⁰ kJ", toVal: "1 erg", extra: "1.0 × 10⁰ erg", extra2: "Energy to flick a speck of dust" },
      { fromVal: "10⁻⁷ kJ", toVal: "1,000 erg", extra: "1.0 × 10³ erg", extra2: "Ant climbing 1 centimeter" },
      { fromVal: "10⁻⁴ kJ", toVal: "1,000,000 erg", extra: "1.0 × 10⁶ erg", extra2: "0.1 Joule mechanical work" },
      { fromVal: "0.001 kJ", toVal: "10,000,000 erg", extra: "1.0 × 10⁷ erg", extra2: "1 Joule (base SI energy unit)" },
      { fromVal: "0.01 kJ", toVal: "100,000,000 erg", extra: "1.0 × 10⁸ erg", extra2: "10 Joules" },
      { fromVal: "0.1 kJ", toVal: "1,000,000,000 erg", extra: "1.0 × 10⁹ erg", extra2: "100 Joules (1 Giga-erg)" },
      { fromVal: "1.0 kJ", toVal: "10,000,000,000 erg", extra: "1.0 × 10¹⁰ erg", extra2: "Base 1 kilojoule unit (10 billion ergs)" },
      { fromVal: "5.0 kJ", toVal: "50,000,000,000 erg", extra: "5.0 × 10¹⁰ erg", extra2: "50 billion ergs" },
      { fromVal: "10.0 kJ", toVal: "100,000,000,000 erg", extra: "1.0 × 10¹¹ erg", extra2: "100 billion ergs" },
      { fromVal: "100.0 kJ", toVal: "1,000,000,000,000 erg", extra: "1.0 × 10¹² erg", extra2: "1 Tera-erg (10¹² erg)" },
      { fromVal: "1,000.0 kJ", toVal: "10,000,000,000,000 erg", extra: "1.0 × 10¹³ erg", extra2: "1 Megajoule (10¹³ erg)" },
      { fromVal: "1,000,000.0 kJ", toVal: "10,000,000,000,000,000 erg", extra: "1.0 × 10¹⁶ erg", extra2: "1 Gigajoule (10¹⁶ erg)" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to Erg Conversion",
    items: [
      {
        title: "Astrophysics and Stellar Luminosity",
        text: "Astronomers convert solar energetic outputs and stellar flare emissions between SI kilowatt-hours/kilojoules and classical CGS erg/s ratings."
      },
      {
        title: "Seismological Energy Formulation",
        text: "The Gutenberg-Richter magnitude-energy equation (log₁₀ E = 11.8 + 1.5M) calculates earthquake seismic radiated energy E in ergs. Seismologists convert this to kilojoules and Megajoules for civil engineering damage assessments."
      },
      {
        title: "Fluid Mechanics and Capillary Action",
        text: "Surface tension and interfacial energy calculations in physical chemistry laboratories bridge CGS dynes/cm and ergs with SI Joules and kilojoules."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 10¹⁰ instead of multiplying: Because ergs are tiny fractions of a Joule (10⁻⁷ J), the numeric value in ergs is always ten orders of magnitude larger.",
      "Miscounting zeros: Ensure exactly ten zeros (10,000,000,000) are added when converting from kJ to ergs.",
      "Confusing ergs with dynes: The dyne is a unit of force (g·cm/s²), while the erg is a unit of energy (dyne·cm)."
    ]
  },
  faqs: [
    {
      question: "How many ergs are in 1 kilojoule?",
      answer: "There are exactly 10,000,000,000 ergs (10¹⁰ ergs, or 10 billion ergs) in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kilojoules to ergs?",
      answer: "The formula is: erg = kilojoules × 10,000,000,000 (or erg = kJ × 10¹⁰)."
    },
    {
      question: "How many kilojoules are in 1 erg?",
      answer: "There are exactly 10⁻¹⁰ kilojoules (0.0000000001 kJ) in 1 erg."
    },
    {
      question: "Why does the erg have such an exact conversion factor to the kilojoule?",
      answer: "Both the SI and CGS systems are decimal metric systems based on centimeters, grams, meters, and kilograms. By definition, 1 dyne = 10⁻⁵ N and 1 cm = 10⁻² m, so 1 erg = 10⁻⁷ J = 10⁻¹⁰ kJ exactly."
    },
    {
      question: "How do I convert 1,000,000 ergs to kJ?",
      answer: "Divide 1,000,000 by 10¹⁰: 1,000,000 ÷ 10,000,000,000 = 0.0001 kJ (or 0.1 J)."
    },
    {
      question: "Is the erg an SI unit?",
      answer: "No. The erg is the energy unit of the older Gaussian/CGS metric system. The official derived SI unit of energy is the Joule."
    },
    {
      question: "How many ergs are in 1 Joule?",
      answer: "There are exactly 10,000,000 ergs (10⁷ ergs) in 1 Joule."
    },
    {
      question: "How do I convert ergs back to kilojoules?",
      answer: "Divide the erg value by 10¹⁰ (or multiply by 10⁻¹⁰)."
    }
  ],
  relatedList: [
    { label: "Erg to Kilojoule", from: "erg", to: "kilojoule" },
    { label: "Kilojoule to Electron Volt", from: "kilojoule", to: "electron-volt" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Foot-Pound", from: "kilojoule", to: "foot-pound" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "International Astronomical Union (IAU) Recommendations on Astronomical Constants and Units."
  ]
};
