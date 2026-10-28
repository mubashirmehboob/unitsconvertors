import { CustomArticleData } from "./types";

export const kilocalorieToErg: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "erg",
  seoTitle: "Kilocalorie to Erg Converter (kcal to erg)",
  metaDescription: "Convert kilocalories to ergs (kcal to erg) with exact conversion factors. Learn CGS-to-MKS relationships, scientific notation examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-erg",
  h1: "Kilocalorie to Erg Converter",
  introduction: [
    "The kilocalorie (kcal) and the erg represent two distinct historical lineages of physical measurement. While the kilocalorie emerged from engineering thermodynamics and nutritional metabolic calorimetry, the erg is the foundational energy unit of the centimeter-gram-second (CGS) electrostatic and electromagnetic systems.",
    "Transitioning calculations between CGS physics literature and thermal calorie data requires scaling across ten orders of magnitude. Under modern SI thermochemical standards, one kilocalorie is defined as exactly 4,184 Joules. Because one Joule equals exactly 10,000,000 ergs (10⁷ erg), one kilocalorie contains exactly 41,840,000,000 ergs (4.184 × 10¹⁰ erg).",
    "This reference explains the mathematical derivation connecting kilocalories and ergs, provides step-by-step worked calculations in standard and scientific notation, details astrophysics and laboratory applications, and supplies a comprehensive lookup table."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to ergs (erg), multiply the kilocalorie value by 41,840,000,000 (or 4.184 × 10¹⁰). For example, 1 kcal equals exactly 4.184 × 10¹⁰ ergs.",
    formulaDisplay: "erg = kcal × 4,184 × 10⁷ = kcal × 4.184 × 10¹⁰",
    subtext: "1 kilocalorie = 4.184 × 10¹⁰ ergs; 1 erg ≈ 2.390057 × 10⁻¹¹ kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), or large calorie, is the thermal energy needed to raise the temperature of one kilogram of water by one degree Celsius under standard atmospheric pressure. Standardized by NIST and IUPAC as exactly 4,184 Joules (4.184 kJ), it is the global standard for nutritional energy, combustion calorimetry, and heating engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Erg (erg)",
    text: "The erg (symbol: erg) is the base unit of energy and mechanical work in the centimeter-gram-second (CGS) system of physical units. Defined as the work done by a force of one dyne acting over a displacement of one centimeter (1 dyne·cm = 1 g·cm²/s²), one erg equals exactly 10⁻⁷ Joules (0.1 microjoule). Although largely superseded by the SI Joule, the erg remains prevalent in astrophysics, seismology, and stellar mechanics."
  },
  relationship: "The relationship between kilocalories and ergs is exact by definition through the SI Joule: 1 kcal = 4,184 J, and 1 J = 10,000,000 ergs (10⁷ erg). Multiplying 4,184 by 10⁷ yields exactly 41,840,000,000 ergs per kilocalorie (4.184 × 10¹⁰ erg). Conversely, 1 erg equals approximately 2.390057 × 10⁻¹¹ kcal.",
  relationshipTitle: "Kilocalorie to Erg Equivalence Values",
  relationshipItems: [
    { label: "1 kcal", value: "4.184 × 10¹⁰ ergs (41.84 billion ergs)" },
    { label: "0.001 kcal (1 cal)", value: "4.184 × 10⁷ ergs (41.84 million ergs)" },
    { label: "10 kcal", value: "4.184 × 10¹¹ ergs" },
    { label: "100 kcal", value: "4.184 × 10¹² ergs" },
    { label: "1,000 kcal", value: "4.184 × 10¹³ ergs" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 4,184 to convert to Joules, then multiply by 10,000,000 (10⁷) to convert to ergs.",
    math: "erg = kcal * 4184 * 1e7",
    subtext: "Direct scientific multiplier: erg = kcal × 4.184 × 10¹⁰."
  },
  formulaTitle: "Kilocalorie to Erg Conversion Formula",
  practicalTip: {
    title: "Handling Large Exponents Easily",
    text: "Because an erg is one ten-millionth of a Joule, energy values in ergs scale rapidly into high powers of ten. Always keep calculations in scientific notation: 1 kcal is 4.184 × 10¹⁰ erg; 2 kcal is 8.368 × 10¹⁰ erg; 10 kcal is 4.184 × 10¹¹ erg."
  },
  expertNote: {
    title: "CGS System Persistence in Astrophysics",
    text: "Astrophysicists frequently measure stellar radiation luminosity, supernova shockwave kinetics, and solar flare yields in ergs (e.g., a typical solar flare releases 10²⁹ to 10³² ergs). Converting solar energetic particles and planetary thermal radiation into kilocalories enables direct comparison with Earth atmospheric heating budgets."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Daily Food Energy in CGS Units",
        subtitle: "Convert a 2,000 kcal dietary intake into ergs.",
        steps: [
          "State the energy value: 2,000 kcal.",
          "Multiply by the conversion factor: 2,000 × (4.184 × 10¹⁰) = 8.368 × 10¹³ ergs.",
          "Write in verbal form: 83.68 trillion ergs.",
          "Result: 2,000 kcal equals 8.368 × 10¹³ ergs."
        ]
      },
      {
        title: "Example 2: Small Chemical Reaction Exotherm",
        subtitle: "Convert 0.25 kcal of heat released in a test tube to ergs.",
        steps: [
          "State the input: 0.25 kcal (250 cal).",
          "Convert to Joules: 0.25 × 4,184 = 1,046 J.",
          "Convert Joules to ergs: 1,046 × 10⁷ = 1.046 × 10¹⁰ ergs.",
          "Result: 0.25 kcal equals 1.046 × 10¹⁰ ergs (10.46 billion ergs)."
        ]
      },
      {
        title: "Example 3: Workout Calorie Burn in CGS Mechanical Work",
        subtitle: "Convert 500 kcal expended during exercise into ergs.",
        steps: [
          "State the input: 500 kcal.",
          "Multiply: 500 × 4.184 × 10¹⁰ = 2.092 × 10¹³ ergs.",
          "Result: 500 kcal equals 2.092 × 10¹³ ergs (20.92 trillion ergs)."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to Erg Conversion Table",
    headers: ["Kilocalories (kcal)", "Ergs (erg)", "Joules (J)", "Kilowatt Hours (kWh)"],
    rows: [
      { fromVal: "0.001 kcal", toVal: "4.184 × 10⁷ erg", extra: "4.184 J", extra2: "1.162 × 10⁻⁶ kWh" },
      { fromVal: "0.01 kcal", toVal: "4.184 × 10⁸ erg", extra: "41.84 J", extra2: "1.162 × 10⁻⁵ kWh" },
      { fromVal: "0.1 kcal", toVal: "4.184 × 10⁹ erg", extra: "418.4 J", extra2: "1.162 × 10⁻⁴ kWh" },
      { fromVal: "0.5 kcal", toVal: "2.092 × 10¹⁰ erg", extra: "2,092 J", extra2: "5.811 × 10⁻⁴ kWh" },
      { fromVal: "1 kcal", toVal: "4.184 × 10¹⁰ erg", extra: "4,184 J", extra2: "0.001162 kWh" },
      { fromVal: "2 kcal", toVal: "8.368 × 10¹⁰ erg", extra: "8,368 J", extra2: "0.002324 kWh" },
      { fromVal: "5 kcal", toVal: "2.092 × 10¹¹ erg", extra: "20,920 J", extra2: "0.005811 kWh" },
      { fromVal: "10 kcal", toVal: "4.184 × 10¹¹ erg", extra: "41,840 J", extra2: "0.011622 kWh" },
      { fromVal: "50 kcal", toVal: "2.092 × 10¹² erg", extra: "209,200 J", extra2: "0.058111 kWh" },
      { fromVal: "100 kcal", toVal: "4.184 × 10¹² erg", extra: "418,400 J", extra2: "0.116222 kWh" },
      { fromVal: "500 kcal", toVal: "2.092 × 10¹³ erg", extra: "2,092,000 J", extra2: "0.581111 kWh" },
      { fromVal: "1,000 kcal", toVal: "4.184 × 10¹³ erg", extra: "4,184,000 J", extra2: "1.162222 kWh" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to Erg Conversion",
    items: [
      {
        title: "Astrophysical Radiation and Planetary Budgets",
        text: "Astronomers convert solar energetic particle flux, coronal mass ejection shock energies, and stellar luminosity calculated in ergs into kilocalories to compare with atmospheric thermal models."
      },
      {
        title: "Plasma Physics and Spectroscopy",
        text: "Research laboratories analyzing high-energy plasma discharge pulses transition between spectroscopic CGS energy terms (in ergs) and macroscopic cooling fluid heat absorptions (in kcal)."
      },
      {
        title: "Geophysics and Micro-Seismology",
        text: "Seismologists convert seismic moment wave energies (measured in ergs according to Gutenberg-Richter relationships) into equivalent thermal explosion energies in kilocalories and tons of TNT."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small gram calories with kilocalories: 1 small calorie equals 4.184 × 10⁷ ergs, whereas 1 kilocalorie equals 4.184 × 10¹⁰ ergs (a difference of three orders of magnitude).",
      "Confusing ergs with Joules: 1 Joule contains 10,000,000 ergs. Forgetting the factor of 10⁷ is a frequent computational error.",
      "Rounding in high powers of ten: Truncating scientific notation prematurely can lead to significant cumulative errors when scaling up to millions of kilocalories."
    ]
  },
  faqs: [
    {
      question: "How many ergs are in 1 kilocalorie?",
      answer: "One kilocalorie equals exactly 41,840,000,000 ergs (4.184 × 10¹⁰ ergs)."
    },
    {
      question: "How many kilocalories are in 1 erg?",
      answer: "One erg equals approximately 2.390057 × 10⁻¹¹ kilocalories (or 2.390057 × 10⁻⁸ small calories)."
    },
    {
      question: "What is the formula to convert kcal to erg?",
      answer: "erg = kcal × 4,184 × 10⁷ = kcal × 4.184 × 10¹⁰."
    },
    {
      question: "What is an erg in simple terms?",
      answer: "An erg is a tiny unit of energy in the CGS system equal to one ten-millionth of a Joule (0.1 microjoule), roughly the work done by a fly doing one push-up."
    },
    {
      question: "How many ergs are in 2,000 food Calories?",
      answer: "2,000 kcal × 4.184 × 10¹⁰ = 8.368 × 10¹³ ergs (83.68 trillion ergs)."
    },
    {
      question: "Why do scientists use ergs?",
      answer: "While the SI system uses Joules, theoretical astrophysicists, cosmologists, and plasma physicists continue using ergs because the CGS-Gaussian unit system simplifies several electromagnetic equations."
    },
    {
      question: "How many ergs are in 100 kcal?",
      answer: "100 kcal × 4.184 × 10¹⁰ = 4.184 × 10¹² ergs (4.184 trillion ergs)."
    },
    {
      question: "Is the conversion factor between kcal and erg exact?",
      answer: "Yes, under the thermochemical standard, 1 kcal = 4,184 J exactly, and 1 J = 10⁷ erg exactly, making 1 kcal = 4.184 × 10¹⁰ ergs an exact definition."
    }
  ],
  relatedList: [
    { label: "Erg to Kilocalorie", from: "erg", to: "kilocalorie" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Erg to Joule", from: "erg", to: "joule" },
    { label: "Kilocalorie to Electron Volt", from: "kilocalorie", to: "electron-volt" },
    { label: "Calorie to Erg", from: "calorie", to: "erg" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th edition).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Astrophysical Formulae: Radiation, Gas Processes, and High Energy Astrophysics (Springer)."
  ]
};
