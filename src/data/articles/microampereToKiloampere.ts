import { CustomArticleData } from "./types";

export const microampereToKiloampere: CustomArticleData = {
  fromUnitId: "microampere",
  toUnitId: "kiloampere",
  seoTitle: "Microampere to Kiloampere Converter (µA to kA)",
  metaDescription: "Convert Microamperes to Kiloamperes (µA to kA) accurately. Learn the 1,000,000,000 scale ratio, physics formulas, conversion tables, and FAQs.",
  h1: "Microampere to Kiloampere Converter",
  introduction: [
    "The Microampere (µA) and Kiloampere (kA) represent extreme boundaries of electric current flow. Microamperes measure tiny microscopic currents in semiconductor gates and biosensors, whereas kiloamperes measure high-energy industrial arc currents, power substation faults, and atmospheric lightning discharges.",
    "Because 'micro' represents 10⁻⁶ and 'kilo' represents 10³, the conversion factor between microamperes and kiloamperes is one billion (10⁹). One kiloampere equals exactly 1,000,000,000 microamperes. Converting microamperes to kiloamperes is calculated by dividing the microampere value by 1,000,000,000.",
    "This technical guide covers the 10⁻⁹ scientific conversion formula, multi-scale power system analysis, comparison tables, scientific notation rules, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Microamperes to Kiloamperes, divide the current in microamperes by 1,000,000,000. For example, 1,000,000,000 µA equals 1 kA, and 500,000,000 µA converts to 0.5 kA.",
    formulaDisplay: "kA = µA / 1,000,000,000",
    subtext: "1 Kiloampere is equal to exactly 1,000,000,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is a Microampere (µA)?",
    text: "The Microampere (symbol: µA) is an SI decimal submultiple equal to one-millionth of an ampere (10⁻⁶ A). It is used to express gate leakage, optical photodiode current, and bio-potential signals."
  },
  aboutTargetUnit: {
    title: "Understanding Kiloamperes (kA)",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes measure heavy electrical power transmission currents, transformer short-circuit withstand levels, and lightning surge protection capacities."
  },
  relationship: "The metric scaling ratio between microamperes and kiloamperes spans nine decimal orders of magnitude: 1 kA = 1,000,000,000 µA, and 1 µA = 0.000000001 kA (10⁻⁹ kA).",
  relationshipTitle: "Microampere to Kiloampere Scale Comparisons",
  relationshipItems: [
    { label: "1,000,000 µA", value: "0.001 kA (1 Ampere baseline current)" },
    { label: "100,000,000 µA", value: "0.1 kA (100 Amperes main panel service feed)" },
    { label: "1,000,000,000 µA", value: "1 kA (Commercial building main power bus)" },
    { label: "10,000,000,000 µA", value: "10 kA (Substation fault current capacity)" },
    { label: "30,000,000,000 µA", value: "30 kA (Average atmospheric lightning stroke)" }
  ],
  formula: {
    text: "Divide the electric current value in Microamperes by 1,000,000,000 to obtain the equivalent current in Kiloamperes.",
    math: "kA = µA / 1000000000",
    subtext: "To convert kiloamperes back to microamperes, multiply the kiloampere value by 1,000,000,000."
  },
  formulaTitle: "Microampere to Kiloampere Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "Because converting microamperes to kiloamperes involves 9 decimal positions, using scientific notation (e.g., 5,000 µA = 5 × 10⁻⁶ kA) prevents zero-counting errors."
  },
  expertNote: {
    title: "Multi-Scale Simulation Modeling",
    text: "Power grid simulation software analyzes high-voltage transformers by modeling microampere insulation degradation leakage currents alongside kiloampere short-circuit fault capabilities."
  },
  examples: {
    title: "Step-by-Step µA to kA Worked Examples",
    items: [
      {
        title: "Example 1: High-Current Industrial Electrolysis Load",
        subtitle: "Convert 5,000,000,000 Microamperes to Kiloamperes.",
        steps: [
          "Identify current in Microamperes: 5,000,000,000 µA.",
          "Apply conversion formula: kA = 5,000,000,000 / 1,000,000,000.",
          "Calculate: 5,000,000,000 / 1,000,000,000 = 5.",
          "Result: 5,000,000,000 Microamperes equals 5 Kiloamperes."
        ]
      },
      {
        title: "Example 2: Substation Bus Short-Circuit Current",
        subtitle: "Convert 22,000,000,000 Microamperes into Kiloamperes.",
        steps: [
          "Identify current: 22,000,000,000 µA.",
          "Divide by 1,000,000,000: 22,000,000,000 / 1,000,000,000 = 22.",
          "Result: 22,000,000,000 Microamperes equals 22 kA."
        ]
      },
      {
        title: "Example 3: Main Breaker Continuous Feed",
        subtitle: "Convert 800,000,000 Microamperes to Kiloamperes.",
        steps: [
          "Identify current: 800,000,000 µA.",
          "Divide by 1,000,000,000: 800,000,000 / 1,000,000,000 = 0.8.",
          "Result: 800,000,000 Microamperes equals 0.8 kA."
        ]
      }
    ]
  },
  table: {
    title: "Microampere to Kiloampere Conversion Reference Table",
    headers: ["Microamperes (µA)", "Kiloamperes (kA)", "Electrical Scale Context"],
    rows: [
      { fromVal: "1,000,000 µA", toVal: "0.001 kA", extra: "1 Ampere baseline load" },
      { fromVal: "10,000,000 µA", toVal: "0.01 kA", extra: "10 Amperes residential branch circuit" },
      { fromVal: "100,000,000 µA", toVal: "0.1 kA", extra: "100 Amperes residential panel main feed" },
      { fromVal: "500,000,000 µA", toVal: "0.5 kA", extra: "500 Amperes industrial motor drive feed" },
      { fromVal: "1,000,000,000 µA", toVal: "1.0 kA", extra: "1 Kiloampere commercial building busbar" },
      { fromVal: "5,000,000,000 µA", toVal: "5.0 kA", extra: "Medium-voltage transformer secondary current" },
      { fromVal: "10,000,000,000 µA", toVal: "10.0 kA", extra: "Residential breaker interrupting rating limit" },
      { fromVal: "25,000,000,000 µA", toVal: "25.0 kA", extra: "Substation short-circuit fault current" },
      { fromVal: "50,000,000,000 µA", toVal: "50.0 kA", extra: "High-voltage transmission line fault level" },
      { fromVal: "100,000,000,000 µA", toVal: "100.0 kA", extra: "Electric arc furnace smelting operating current" }
    ]
  },
  applications: {
    title: "Practical Applications of µA to kA Conversion",
    items: [
      {
        title: "High-Voltage Insulation Telemetry",
        text: "Insulation testing equipment monitors microampere leakage currents across megavolt insulators while referencing system grid short-circuit capacities in kiloamperes."
      },
      {
        title: "Surge Protection Component Analysis",
        text: "Surge arrester datasheets compare microampere continuous standby leakage currents against rated impulse discharge capacities in kiloamperes."
      },
      {
        title: "Physics Simulation Software",
        text: "Particle accelerator modeling tools normalize current parameters across 9 orders of magnitude between beam microamperes and magnet coil kiloamperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Microamperes to Kiloamperes",
    items: [
      "Multiplying by 1,000,000,000 instead of dividing: Converting from microamperes to kiloamperes requires division by 10⁹.",
      "Losing precision due to fixed-point rounding: Use double-precision floating-point numbers when computing microampere-to-kiloampere ratios in software.",
      "Confusing kiloamperes (kA) with kilovolts (kV): Kiloamperes measure current, whereas kilovolts measure electrical potential."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000,000,000 Microamperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Microamperes to Kiloamperes?",
      answer: "The formula is: Kiloamperes = Microamperes / 1,000,000,000."
    },
    {
      question: "How many Kiloamperes is 1,000,000,000 µA?",
      answer: "1,000,000,000 Microamperes equals exactly 1 Kiloampere."
    },
    {
      question: "What is 500,000,000 µA in kA?",
      answer: "500,000,000 Microamperes equals 0.5 Kiloamperes."
    },
    {
      question: "Why does the conversion factor equal 10⁹?",
      answer: "Micro represents 10⁻⁶ and Kilo represents 10³, creating a difference of 10³ - (-10⁻⁶) = 10⁹ (1 billion)."
    },
    {
      question: "How do I convert 100,000,000 µA to kA?",
      answer: "Divide 100,000,000 by 1,000,000,000 to get 0.1 Kiloamperes."
    },
    {
      question: "Is kA a standard SI unit?",
      answer: "Yes, the kiloampere is a standard metric multiple combining 'kilo-' with 'ampere'."
    },
    {
      question: "How do I convert Kiloamperes back to Microamperes?",
      answer: "Multiply the current in kiloamperes by 1,000,000,000 to obtain microamperes."
    }
  ],
  relatedList: [
    { label: "Kiloampere to Microampere", from: "kiloampere", to: "microampere" },
    { label: "Microampere to Ampere", from: "microampere", to: "ampere" },
    { label: "Microampere to Milliampere", from: "microampere", to: "milliampere" },
    { label: "Microampere to Abampere", from: "microampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Std 1584: Guide for Performing Arc-Flash Hazard Calculations.",
    "BIPM SI Brochure Documentation."
  ]
};
