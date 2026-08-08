import { CustomArticleData } from "./types";

export const abampereToMicroampere: CustomArticleData = {
  fromUnitId: "abampere",
  toUnitId: "microampere",
  seoTitle: "Abampere to Microampere Converter (abA to µA)",
  metaDescription: "Convert Abamperes to Microamperes (abA to µA) instantly. Learn the 10,000,000 scale multiplication formula, cgs-emu physics history, tables, and FAQs.",
  h1: "Abampere to Microampere Converter",
  introduction: [
    "The Abampere (abA or Biot) and Microampere (µA) quantify electric current in two distinct physics measurement systems: the centimeter-gram-second electromagnetic (cgs-emu) system and the International System of Units (SI). While cgs electrodynamics formulas use abamperes, semiconductor gate leakage and photodiode signals use microamperes.",
    "Because 1 abampere equals 10 base amperes, and 1 ampere contains 1,000,000 microamperes, 1 abampere equals exactly 10,000,000 microamperes (10⁷ µA). Converting abamperes to microamperes requires multiplying the abampere value by 10,000,000.",
    "This technical conversion guide details the 10⁷ scale factor, cgs electromagnetic definitions, step-by-step conversion examples, reference tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Abamperes to Microamperes, multiply the current in abamperes by 10,000,000. For instance, 1 abA equals 10,000,000 µA, and 0.1 abA converts to 1,000,000 µA.",
    formulaDisplay: "µA = abA × 10,000,000",
    subtext: "1 Abampere is equal to exactly 10,000,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is an Abampere (abA / Biot)?",
    text: "The Abampere (symbol: abA or Bi) is the cgs-emu unit of electric current. Defined by the magnetic force between parallel conductors, 1 abampere produces a force of 2 dynes per centimeter across parallel conductors separated by 1 cm in a vacuum."
  },
  aboutTargetUnit: {
    title: "Understanding Microamperes (µA)",
    text: "The Microampere (symbol: µA) is an SI decimal submultiple equal to one-millionth of an ampere (10⁻⁶ A). Microamperes measure transistor off-state leakage, optical sensor light currents, real-time clock battery standby currents, and biosensor signals."
  },
  relationship: "The exact metric scale factor between abamperes and microamperes spans seven decimal orders of magnitude: 1 abA = 10,000,000 µA, and 1 µA = 0.0000001 abA (10⁻⁷ abA).",
  relationshipTitle: "Abampere to Microampere Scale Comparisons",
  relationshipItems: [
    { label: "0.001 abA", value: "10,000 µA (Status LED indicator current)" },
    { label: "0.01 abA", value: "100,000 µA (Small DC fan supply current)" },
    { label: "0.1 abA", value: "1,000,000 µA (1 Ampere base SI unit)" },
    { label: "1.0 abA", value: "10,000,000 µA (cgs-emu unit baseline threshold)" },
    { label: "10.0 abA", value: "100,000,000 µA (Industrial arc welder operating current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Abamperes by 10,000,000 to determine the equivalent current in Microamperes.",
    math: "µA = abA × 10000000",
    subtext: "To convert microamperes back to abamperes, divide the microampere value by 10,000,000."
  },
  formulaTitle: "Abampere to Microampere Formula",
  practicalTip: {
    title: "Scientific Exponential Conversion",
    text: "Because converting abamperes to microamperes introduces seven zeros, express values using exponential notation (e.g., 0.25 abA = 2.5 × 10⁶ µA) to avoid digit counting errors."
  },
  expertNote: {
    title: "Plasma Physics & Astrophysics Modeling",
    text: "In classical astrophysics and plasma physics, current densities are evaluated in cgs abamperes. Converting these theoretical parameters into microamperes allows experimental comparison with micro-channel plate photodetector outputs."
  },
  examples: {
    title: "Step-by-Step abA to µA Worked Examples",
    items: [
      {
        title: "Example 1: High-Precision Magnetometer Circuit",
        subtitle: "Convert 0.25 Abamperes to Microamperes.",
        steps: [
          "Identify current in Abamperes: 0.25 abA.",
          "Apply conversion formula: µA = 0.25 × 10,000,000.",
          "Calculate: 0.25 × 10,000,000 = 2,500,000.",
          "Result: 0.25 Abamperes equals 2,500,000 Microamperes."
        ]
      },
      {
        title: "Example 2: Bench Power Supply Baseline",
        subtitle: "Convert 0.1 Abamperes into Microamperes.",
        steps: [
          "Identify current: 0.1 abA.",
          "Multiply by 10,000,000: 0.1 × 10,000,000 = 1,000,000.",
          "Result: 0.1 Abamperes equals 1,000,000 µA."
        ]
      },
      {
        title: "Example 3: Low-Power Sensor Test Circuit",
        subtitle: "Convert 0.005 Abamperes to Microamperes.",
        steps: [
          "Identify current: 0.005 abA.",
          "Multiply by 10,000,000: 0.005 × 10,000,000 = 50,000.",
          "Result: 0.005 Abamperes equals 50,000 µA."
        ]
      }
    ]
  },
  table: {
    title: "Abampere to Microampere Conversion Reference Table",
    headers: ["Abamperes (abA)", "Microamperes (µA)", "Physical Application Context"],
    rows: [
      { fromVal: "0.0001 abA", toVal: "1,000 µA", extra: "1 Milliampere baseline threshold" },
      { fromVal: "0.001 abA", toVal: "10,000 µA", extra: "Status LED indicator forward current" },
      { fromVal: "0.01 abA", toVal: "100,000 µA", extra: "Small DC cooling fan current draw" },
      { fromVal: "0.05 abA", toVal: "500,000 µA", extra: "Standard USB 2.0 port power ceiling" },
      { fromVal: "0.1 abA", toVal: "1,000,000 µA", extra: "1 Ampere bench power supply baseline" },
      { fromVal: "0.25 abA", toVal: "2,500,000 µA", extra: "Tablet fast charger rating" },
      { fromVal: "0.5 abA", toVal: "5,000,000 µA", extra: "High-density LED driver channel" },
      { fromVal: "1.0 abA", toVal: "10,000,000 µA", extra: "Fundamental cgs-emu unit baseline" },
      { fromVal: "2.5 abA", toVal: "25,000,000 µA", extra: "Residential appliance branch circuit" },
      { fromVal: "10.0 abA", toVal: "100,000,000 µA", extra: "Industrial DC welding arc current" }
    ]
  },
  applications: {
    title: "Practical Applications of abA to µA Conversion",
    items: [
      {
        title: "Classical Electrodynamics Research",
        text: "Physicists working with classical cgs electromagnetic field equations convert theoretical currents in abamperes into microamperes to interface with modern optical sensor instrumentation."
      },
      {
        title: "Space Physics & Plasma Diagnostics",
        text: "Plasma sensor data recorded in cgs abamperes are converted to microamperes for telemetry transmission and digital signal processing."
      },
      {
        title: "Physics Educational Demonstrations",
        text: "University physics labs convert absolute electrometer measurements in abamperes to microamperes to compare with digital micro-multimeters."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Abamperes to Microamperes",
    items: [
      "Dividing by 10,000,000 instead of multiplying: Converting from abamperes to microamperes requires multiplying by 10,000,000 because abamperes are seven orders of magnitude larger.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system, whereas statamperes belong to the electrostatic cgs system.",
      "Miscounting zeros in scientific notation: Ensure 0.1 abA converts to 1,000,000 µA (10⁶ µA)."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Abampere?",
      answer: "There are exactly 10,000,000 Microamperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Abamperes to Microamperes?",
      answer: "The formula is: Microamperes = Abamperes × 10,000,000."
    },
    {
      question: "How many Microamperes is 0.1 abA?",
      answer: "0.1 Abamperes equals 1,000,000 Microamperes (0.1 × 10,000,000 = 1,000,000 µA)."
    },
    {
      question: "What is 1 abA in Microamperes?",
      answer: "1 Abampere equals 10,000,000 Microamperes."
    },
    {
      question: "Why does 1 abA equal 10,000,000 µA?",
      answer: "Because 1 abA = 10 A, and 1 A = 1,000,000 µA; 10 × 1,000,000 = 10,000,000 µA."
    },
    {
      question: "How do I convert 0.05 abA to µA?",
      answer: "Multiply 0.05 by 10,000,000 to obtain 500,000 Microamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is a recognized alternative name for the abampere in cgs-emu physics."
    },
    {
      question: "How do I convert Microamperes back to Abamperes?",
      answer: "Divide the current in microamperes by 10,000,000 to obtain abamperes."
    }
  ],
  relatedList: [
    { label: "Microampere to Abampere", from: "microampere", to: "abampere" },
    { label: "Abampere to Ampere", from: "abampere", to: "ampere" },
    { label: "Abampere to Milliampere", from: "abampere", to: "milliampere" },
    { label: "Abampere to Kiloampere", from: "abampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
