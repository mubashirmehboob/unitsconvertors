import { CustomArticleData } from "./types";

export const jouleToErg: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "erg",
  seoTitle: "Joule to Erg Converter (J to erg)",
  metaDescription: "Convert Joules to ergs (J to erg) with CGS mechanical precision. Learn the exact 10,000,000 factor, formula, step-by-step calculations, tables, and FAQs.",
  h1: "Joule to Erg Converter",
  introduction: [
    "The Joule (J) and the erg (erg) are classical units of work, heat, and kinetic energy. The Joule is the modern standard energy unit in the metric International System of Units (SI, based on meter-kilogram-second), while the erg is the legacy unit of energy in the CGS (centimeter-gram-second) system of units.",
    "Converting Joules to ergs bridges standard SI physics with specialized CGS calculations still used in astrophysics, stellar astronomy, plasma mechanics, and surface chemistry. By definition, one Joule equals exactly 10,000,000 ergs (10⁷ ergs). Therefore, converting Joules to ergs simply requires multiplying the energy value in Joules by 10,000,000.",
    "This reference guide breaks down the CGS and SI definitions, provides step-by-step conversion calculations, presents a complete reference lookup table, explores scientific applications, and resolves common measurement questions."
  ],
  quickAnswer: {
    text: "To convert Joules to ergs, multiply the energy value in Joules by 10,000,000 (10⁷). For example, 1 Joule equals exactly 10,000,000 ergs, and 5 Joules equals 50,000,000 ergs.",
    formulaDisplay: "erg = J × 10,000,000",
    subtext: "One Joule is equal to exactly 10,000,000 ergs (10⁷ erg)."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the base derived SI unit of energy. Defined mechanically as 1 Newton applied across 1 meter (1 J = 1 N·m = 1 kg·m²/s²), it provides a universal metric measure across all physical sciences. In CGS terms, a force of 1 Newton equals 100,000 dynes and a distance of 1 meter equals 100 centimeters, yielding 100,000 × 100 = 10,000,000 ergs."
  },
  aboutTargetUnit: {
    title: "Understanding the Erg (erg)",
    text: "The erg (symbol: erg) is the fundamental unit of work and energy in the centimeter-gram-second (CGS) system, introduced by the British Association for the Advancement of Science in 1873. Derived from the Greek word 'ergon' meaning work, one erg is defined as the work done by a force of one dyne acting over a distance of one centimeter (1 erg = 1 dyne·cm = 1 g·cm²/s²)."
  },
  relationship: "The relationship between Joules and ergs is exact by physical definition: 1 J = 10,000,000 erg (10⁷ erg) exactly. Conversely, 1 erg = 0.0000001 J (10⁻⁷ J) exactly.",
  relationshipTitle: "Joule vs Erg Scale Comparison",
  relationshipItems: [
    { label: "1 erg", value: "0.0000001 J (10⁻⁷ J / energy of a crawling fly leg stroke)" },
    { label: "10 ergs", value: "0.000001 J (10⁻⁶ J / 1 microjoule)" },
    { label: "1,000 ergs", value: "0.0001 J (10⁻⁴ J / microscopic acoustic vibration)" },
    { label: "1,000,000 ergs", value: "0.1 J (Energy of a falling raindrop)" },
    { label: "10,000,000 ergs", value: "1 J (Lifting 100 grams up by 1 meter)" }
  ],
  formula: {
    text: "Multiply the energy in Joules by 10,000,000 (or 10⁷) to determine the equivalent in ergs.",
    math: "erg = J * 10000000",
    subtext: "To convert ergs back to Joules, divide the erg value by 10,000,000 (or multiply by 10⁻⁷)."
  },
  formulaTitle: "Joule to Erg Conversion Formula",
  practicalTip: {
    title: "Exponent Rule",
    text: "In scientific notation, add 7 to the exponent of the Joule value to get ergs (e.g., 3.5 × 10⁻³ J becomes 3.5 × 10⁴ erg)."
  },
  expertNote: {
    title: "CGS Unit Usage in Astrophysics",
    text: "Astrophysicists frequently measure solar flare energy outputs, supernovae luminosity, and cosmic ray fluxes in ergs (e.g., a solar flare releasing 10³2 ergs)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Acoustic Sensor Vibration Energy",
        subtitle: "Convert a micro-vibration energy of 0.005 Joules into ergs.",
        steps: [
          "Identify the energy in Joules: 0.005 J.",
          "Apply the formula: erg = 0.005 × 10,000,000.",
          "Calculate: 0.005 × 10,000,000 = 50,000.",
          "Result: 0.005 Joules equals exactly 50,000 ergs (5 × 10⁴ erg)."
        ]
      },
      {
        title: "Example 2: Solar Luminosity Measurement",
        subtitle: "Convert 250 Joules of captured solar radiation into ergs.",
        steps: [
          "Identify the energy: 250 J.",
          "Multiply by 10,000,000: 250 × 10,000,000 = 2,500,000,000.",
          "Result: 250 J equals 2,500,000,000 ergs (2.5 × 10⁹ erg)."
        ]
      },
      {
        title: "Example 3: Surface Tension Energy",
        subtitle: "Convert 0.00007 Joules of liquid film surface work into ergs.",
        steps: [
          "Identify the energy: 0.00007 J.",
          "Multiply by 10,000,000: 0.00007 × 10,000,000 = 700.",
          "Result: 0.00007 J equals 700 ergs."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Erg Conversion Table",
    headers: ["Joules (J)", "Ergs (erg)", "Scientific Notation", "Physical Equivalent"],
    rows: [
      { fromVal: "0.0000001 J", toVal: "1 erg", extra: "1 × 10⁰ erg", extra2: "1 dyne · 1 cm work" },
      { fromVal: "0.000001 J", toVal: "10 ergs", extra: "1 × 10¹ erg", extra2: "1 microjoule (µJ)" },
      { fromVal: "0.00001 J", toVal: "100 ergs", extra: "1 × 10² erg", extra2: "10 microjoules" },
      { fromVal: "0.0001 J", toVal: "1,000 ergs", extra: "1 × 10³ erg", extra2: "Small ultrasonic pulse" },
      { fromVal: "0.001 J", toVal: "10,000 ergs", extra: "1 × 10⁴ erg", extra2: "1 millijoule (mJ)" },
      { fromVal: "0.01 J", toVal: "100,000 ergs", extra: "1 × 10⁵ erg", extra2: "10 millijoules" },
      { fromVal: "0.1 J", toVal: "1,000,000 ergs", extra: "1 × 10⁶ erg", extra2: "Energy of a falling raindrop" },
      { fromVal: "1 J", toVal: "10,000,000 ergs", extra: "1 × 10⁷ erg", extra2: "1 Newton-meter (SI base)" },
      { fromVal: "10 J", toVal: "100,000,000 ergs", extra: "1 × 10⁸ erg", extra2: "10 Joules" },
      { fromVal: "100 J", toVal: "1,000,000,000 ergs", extra: "1 × 10⁹ erg", extra2: "100 Joules" }
    ]
  },
  applications: {
    title: "Applications of J to Erg Conversion",
    items: [
      {
        title: "Astrophysics & Solar Physics",
        text: "Astronomers express stellar energy outputs, coronal mass ejections, and gamma-ray burst total energies in ergs (e.g., the Sun's luminosity is 3.828 × 10³³ erg/s)."
      },
      {
        title: "Surface Chemistry & Fluid Dynamics",
        text: "Interfacial surface tension in CGS units is expressed in ergs per square centimeter (erg/cm²), requiring conversion from SI surface energy in Joules per square meter (J/m²)."
      },
      {
        title: "Theoretical Physics & Legacy Literature",
        text: "Classics in quantum mechanics and electrodynamics written prior to SI standardization use Gaussian CGS units (ergs and statcoulombs), requiring students to convert values into Joules."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing instead of multiplying: 1 Joule is a large amount of ergs (10,000,000), so the erg number must be much larger than the Joule number.",
      "Miscounting zeros: Ensure you use 7 zeros (10,000,000) when converting J to erg.",
      "Confusing dyne with erg: Dyne is the CGS unit of force; erg is the CGS unit of energy."
    ]
  },
  faqs: [
    {
      question: "How many ergs are in 1 Joule?",
      answer: "There are exactly 10,000,000 ergs (10⁷ ergs) in 1 Joule."
    },
    {
      question: "What is the formula to convert J to erg?",
      answer: "The formula is: erg = J × 10,000,000."
    },
    {
      question: "What does the word 'erg' mean?",
      answer: "The word 'erg' originates from the Greek word 'ergon' (ἔργον), which means work."
    },
    {
      question: "Is erg an SI unit?",
      answer: "No. The erg is the energy unit of the CGS (centimeter-gram-second) system. The Joule is the official SI unit."
    },
    {
      question: "How do I convert ergs back to Joules?",
      answer: "To convert ergs to Joules, divide by 10,000,000 or multiply by 10⁻⁷ (e.g., 50,000,000 ergs ÷ 10,000,000 = 5 Joules)."
    },
    {
      question: "Why do astronomers still use ergs?",
      answer: "Astrophysical formulas developed in the 19th and 20th centuries were written in Gaussian CGS units. Astrophysicists retain ergs to maintain consistency across stellar literature."
    }
  ],
  relatedList: [
    { label: "Joule to Electron Volt", from: "joule", to: "electron-volt" },
    { label: "Joule to Foot-Pound", from: "joule", to: "foot-pound" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" }
  ],
  references: [
    "British Association for the Advancement of Science (1873) - CGS System Committee Reports.",
    "BIPM SI Brochure: Non-SI units and CGS system comparison.",
    "NIST Special Publication 811: Units for Mechanical and Electromagnetic Energy."
  ]
};
