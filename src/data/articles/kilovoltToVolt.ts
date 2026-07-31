import { CustomArticleData } from "./types";

export const kilovoltToVolt: CustomArticleData = {
  fromUnitId: "kilovolt",
  toUnitId: "volt",
  seoTitle: "Kilovolt to Volt Converter (kV to V)",
  metaDescription: "Convert Kilovolts to Volts (kV to V) instantly. Learn the 1,000 ratio multiplication formula, transformer calculations, reference tables, and technical FAQs.",
  h1: "Kilovolt to Volt Converter",
  introduction: [
    "Electrical power systems, industrial plant operations, and substation maintenance teams routinely convert electrical potential values from Kilovolts (kV) to standard Volts (V). When stepping down high transmission voltages to low-voltage equipment specifications, converting kilovolts to volts ensures accurate circuit calculations.",
    "The kilovolt is a metric multiple of the SI base derived unit for electrical potential difference, the volt. Because the prefix 'kilo' represents 1,000, one kilovolt equals exactly 1,000 volts. To convert kilovolts to volts, multiply the kilovolt value by 1,000.",
    "This technical guide provides the mathematical formula for converting kV to V, step-by-step transformer calculation examples, reference tables, safety recommendations, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Kilovolts to Volts, multiply the voltage value by 1,000. For example, 13.8 kV equals 13,800 V, and 0.48 kV equals 480 V.",
    formulaDisplay: "V = kV × 1,000",
    subtext: "1 Kilovolt is equal to exactly 1,000 Volts."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilovolt (kV)",
    text: "The Kilovolt (symbol: kV) is a metric multiple of the volt equal to 1,000 volts (10³ V). Kilovolts are the primary unit used by utility engineers to rate transmission lines, substation transformers, high-voltage circuit breakers, and industrial distribution feeders."
  },
  aboutTargetUnit: {
    title: "Understanding the Volt (V)",
    text: "The Volt (symbol: V) is the SI derived unit of electrical potential difference, electromotive force, and voltage. Named after Alessandro Volta, one volt drives a current of one ampere through a one-ohm resistor (1 V = 1 A × 1 Ω)."
  },
  relationship: "The relationship between kilovolts and volts is fixed by SI metric standards: 1 kV = 1,000 V, and 1 V = 0.001 kV (10⁻³ kV).",
  relationshipTitle: "Kilovolt vs Volt Scale Ratio",
  relationshipItems: [
    { label: "0.12 kV", value: "120 V (North American residential outlet rating)" },
    { label: "0.48 kV", value: "480 V (Industrial 3-phase commercial service)" },
    { label: "4.16 kV", value: "4,160 V (Medium-voltage industrial motor feed)" },
    { label: "13.8 kV", value: "13,800 V (Primary distribution line step-down voltage)" },
    { label: "115 kV", value: "115,000 V (High-voltage regional transmission grid)" }
  ],
  formula: {
    text: "Multiply the potential difference in Kilovolts by 1,000 to determine the voltage in Volts.",
    math: "V = kV × 1000",
    subtext: "To convert volts back to kilovolts, divide the volt value by 1,000."
  },
  formulaTitle: "Kilovolt to Volt Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Shortcut",
    text: "To convert kilovolts to volts mentally, move the decimal point three positions to the right. For example, 2.4 kV becomes 2,400 V."
  },
  expertNote: {
    title: "Substation Step-Down Transformers",
    text: "Substation distribution transformers step down high feeder voltages (e.g., 13.8 kV) to low service voltages (e.g., 480 V or 120/240 V). Calculating turns ratios and winding turns requires converting both values into the same voltage unit."
  },
  examples: {
    title: "Step-by-Step Kilovolt to Volt Worked Examples",
    items: [
      {
        title: "Example 1: Primary Distribution Feeder",
        subtitle: "Convert a 13.8 kV utility feeder line rating into Volts.",
        steps: [
          "Identify voltage in Kilovolts: 13.8 kV.",
          "Apply formula: V = 13.8 × 1,000.",
          "Calculate: 13.8 × 1,000 = 13,800.",
          "Result: 13.8 Kilovolts equals 13,800 Volts."
        ]
      },
      {
        title: "Example 2: Industrial Motor Supply",
        subtitle: "Convert a 4.16 kV industrial drive supply line to Volts.",
        steps: [
          "Identify voltage: 4.16 kV.",
          "Multiply by 1,000: 4.16 × 1,000 = 4,160.",
          "Result: 4.16 Kilovolts equals 4,160 Volts."
        ]
      },
      {
        title: "Example 3: Sub-Transmission Substation Line",
        subtitle: "Convert a 34.5 kV substation inlet to Volts.",
        steps: [
          "Identify voltage: 34.5 kV.",
          "Multiply by 1,000: 34.5 × 1,000 = 34,500.",
          "Result: 34.5 Kilovolts equals 34,500 Volts."
        ]
      }
    ]
  },
  table: {
    title: "Kilovolt to Volt Conversion Reference Table",
    headers: ["Kilovolts (kV)", "Volts (V)", "Power System Context"],
    rows: [
      { fromVal: "0.12 kV", toVal: "120 V", extra: "US residential wall receptacle voltage" },
      { fromVal: "0.24 kV", toVal: "240 V", extra: "US residential split-phase service (dryer/HVAC)" },
      { fromVal: "0.48 kV", toVal: "480 V", extra: "3-Phase industrial building service entry" },
      { fromVal: "1.0 kV", toVal: "1,000 V", extra: "Low voltage / medium voltage international boundary" },
      { fromVal: "2.4 kV", toVal: "2,400 V", extra: "Commercial building medium-voltage distribution line" },
      { fromVal: "4.16 kV", toVal: "4,160 V", extra: "Heavy industrial pump motor rating" },
      { fromVal: "13.8 kV", toVal: "13,800 V", extra: "Standard urban power distribution line" },
      { fromVal: "34.5 kV", toVal: "34,500 V", extra: "Regional sub-transmission loop" },
      { fromVal: "115.0 kV", toVal: "115,000 V", extra: "High-voltage transmission line" },
      { fromVal: "500.0 kV", toVal: "500,000 V", extra: "Extra-high-voltage bulk grid line" }
    ]
  },
  applications: {
    title: "Applications of kV to V Conversion",
    items: [
      {
        title: "Transformer Winding & Turn Ratio Design",
        text: "Engineers convert primary line ratings (e.g., 13.8 kV = 13,800 V) and secondary ratings (e.g., 480 V) into Volts to compute precise primary-to-secondary turns ratios."
      },
      {
        title: "High-Voltage Equipment Insulation Testing",
        text: "Dielectric insulation testers (Meggers) output test signals rated in kilovolts (e.g., 2.5 kV = 2,500 V), which technicians compare against insulation leakage currents in volts and microamperes."
      },
      {
        title: "Arc Flash Safety Calculations",
        text: "NFPA 70E arc flash risk analysis requires converting utility supply voltages from kilovolts to volts when determining incident energy levels and Personal Protective Equipment (PPE) boundaries."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Converting from a larger unit (kV) to a smaller unit (V) requires multiplying by 1,000.",
      "Conflating Line-to-Line with Line-to-Neutral Voltage: In 3-phase systems, 13.8 kV line-to-line equals 13,800 V L-L, but line-to-neutral voltage is 13,800 / √3 ≈ 7,967 V.",
      "Confusing kV with kVA: Kilovolts (kV) measure electric potential, whereas Kilovolt-Amperes (kVA) measure apparent electrical power."
    ]
  },
  faqs: [
    {
      question: "How many Volts are in 1 Kilovolt?",
      answer: "There are exactly 1,000 Volts in 1 Kilovolt."
    },
    {
      question: "What is the formula to convert Kilovolts to Volts?",
      answer: "The formula is: Volts = Kilovolts × 1,000."
    },
    {
      question: "How many Volts is 13.8 kV?",
      answer: "13.8 Kilovolts equals 13,800 Volts (13.8 × 1,000 = 13,800 V)."
    },
    {
      question: "What is 0.48 kV in Volts?",
      answer: "0.48 Kilovolts equals 480 Volts (0.48 × 1,000 = 480 V)."
    },
    {
      question: "Is 1 kV equal to 1,000 Volts?",
      answer: "Yes. The prefix 'kilo-' denotes 1,000, so 1 kV is equal to 1,000 V."
    },
    {
      question: "How do I convert 0.12 kV to Volts?",
      answer: "Multiply 0.12 by 1,000 to get 120 Volts."
    },
    {
      question: "What is 115 kV in Volts?",
      answer: "115 Kilovolts equals 115,000 Volts."
    },
    {
      question: "Why do utility companies list voltages in kV?",
      answer: "Using Kilovolts reduces numerical digits on equipment nameplates and single-line diagrams for high-voltage power networks."
    }
  ],
  relatedList: [
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" },
    { label: "Kilovolt to Millivolt", from: "kilovolt", to: "millivolt" },
    { label: "Kilovolt to Microvolt", from: "kilovolt", to: "microvolt" },
    { label: "Kilovolt to Megavolt", from: "kilovolt", to: "megavolt" }
  ],
  references: [
    "IEEE Std 141: IEEE Recommended Practice for Electric Power Distribution for Industrial Plants.",
    "NFPA 70E: Standard for Electrical Safety in the Workplace.",
    "ANSI C84.1: Electric Power Systems and Equipment - Voltage Ratings."
  ]
};
