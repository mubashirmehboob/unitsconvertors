import { CustomArticleData } from "./types";

export const voltToKilovolt: CustomArticleData = {
  fromUnitId: "volt",
  toUnitId: "kilovolt",
  seoTitle: "Volt to Kilovolt Converter (V to kV)",
  metaDescription: "Convert Volts to Kilovolts (V to kV) instantly. Learn the exact 1,000 ratio conversion formula, electrical grid examples, reference tables, and technical FAQs.",
  h1: "Volt to Kilovolt Converter",
  introduction: [
    "Electrical engineers, power grid operators, and substation technicians routinely convert voltage measurements between standard Volts (V) and Kilovolts (kV). While standard line voltage operates in the hundreds of volts, regional power transmission lines and industrial transformers handle tens or hundreds of kilovolts to minimize resistive line losses over vast distances.",
    "Converting volts to kilovolts is a straightforward metric scale shift defined by the International System of Units (SI). Because the prefix 'kilo' represents a factor of 1,000, one kilovolt equals exactly 1,000 volts. Converting any potential difference in volts to kilovolts requires dividing the voltage by 1,000.",
    "This guide covers the mathematical derivation of the V to kV ratio, step-by-step conversion examples for electrical distribution systems, conversion tables, practical engineering tips, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Volts to Kilovolts, divide the potential difference in Volts by 1,000. For example, 12,000 V equals 12 kV, and 480 V equals 0.48 kV.",
    formulaDisplay: "kV = V ÷ 1,000",
    subtext: "1 Volt is equal to exactly 0.001 Kilovolts."
  },
  aboutSourceUnit: {
    title: "Understanding the Volt (V)",
    text: "The Volt (symbol: V) is the SI derived unit of electrical potential difference, electromotive force (EMF), and electric potential. Named after Italian physicist Alessandro Volta, one volt is defined as the potential difference across a conductor when a current of one ampere dissipates one watt of power (1 V = 1 W / 1 A), or when one joule of work is performed per coulomb of electric charge (1 V = 1 J/C)."
  },
  aboutTargetUnit: {
    title: "Exploring the Kilovolt (kV)",
    text: "The Kilovolt (symbol: kV) is a multiple of the volt equal to 1,000 volts (10³ V). It is the standard unit for specifying high-voltage equipment, electrical substation transformers, commercial utility distribution lines, x-ray tube anode voltages, and insulation breakdown ratings."
  },
  relationship: "The relationship between volts and kilovolts is fixed by SI metric standards: 1 kV = 1,000 V, and 1 V = 0.001 kV (10⁻³ kV).",
  relationshipTitle: "Volt vs Kilovolt Voltage Scale Comparison",
  relationshipItems: [
    { label: "12 V", value: "0.012 kV (Standard automotive battery potential)" },
    { label: "120 V", value: "0.12 kV (US residential wall outlet)" },
    { label: "480 V", value: "0.48 kV (Industrial three-phase power supply)" },
    { label: "13,800 V", value: "13.8 kV (Standard municipal distribution line)" },
    { label: "115,000 V", value: "115 kV (High-voltage regional transmission line)" }
  ],
  formula: {
    text: "Divide the electrical potential in Volts by 1,000 to convert to Kilovolts.",
    math: "kV = V / 1000",
    subtext: "To convert kilovolts back to volts, multiply the kilovolt value by 1,000."
  },
  formulaTitle: "Volt to Kilovolt Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "Shift the decimal point three places to the left to convert volts to kilovolts. For instance, 4,160 V becomes 4.16 kV."
  },
  expertNote: {
    title: "High-Voltage Transmission Efficiency",
    text: "Utility companies transmit electric power across long distances at high voltage (e.g., 230 kV or 500 kV) because power loss due to wire resistance is proportional to the square of current (I²R). Raising voltage lowers current for the same power level, drastically reducing heat losses."
  },
  examples: {
    title: "Step-by-Step Volt to Kilovolt Calculations",
    items: [
      {
        title: "Example 1: Utility Distribution Substation",
        subtitle: "Convert a primary feeder line rating of 13,800 Volts into Kilovolts.",
        steps: [
          "Identify voltage in Volts: 13,800 V.",
          "Apply conversion formula: kV = 13,800 ÷ 1,000.",
          "Perform division: 13,800 ÷ 1,000 = 13.8.",
          "Result: 13,800 Volts equals 13.8 Kilovolts."
        ]
      },
      {
        title: "Example 2: Industrial Motor Supply",
        subtitle: "Convert a 4,160 Volt heavy-machinery line to Kilovolts.",
        steps: [
          "Identify voltage: 4,160 V.",
          "Divide by 1,000: 4,160 ÷ 1,000 = 4.16.",
          "Result: 4,160 Volts equals 4.16 kV."
        ]
      },
      {
        title: "Example 3: Medical X-Ray Anode Voltage",
        subtitle: "Convert a 75,000 Volt tube potential to Kilovolts peak (kVp).",
        steps: [
          "Identify voltage: 75,000 V.",
          "Divide by 1,000: 75,000 ÷ 1,000 = 75.",
          "Result: 75,000 Volts equals 75 kV."
        ]
      }
    ]
  },
  table: {
    title: "Volt to Kilovolt Reference Values",
    headers: ["Volts (V)", "Kilovolts (kV)", "Electrical Engineering Context"],
    rows: [
      { fromVal: "100 V", toVal: "0.1 kV", extra: "Japanese household single-phase outlet" },
      { fromVal: "240 V", toVal: "0.24 kV", extra: "UK residential or US split-phase dryer outlet" },
      { fromVal: "480 V", toVal: "0.48 kV", extra: "Commercial building HVAC three-phase power" },
      { fromVal: "1,000 V", toVal: "1.0 kV", extra: "International boundary between low and medium voltage" },
      { fromVal: "2,400 V", toVal: "2.4 kV", extra: "Medium-voltage commercial feeder line" },
      { fromVal: "4,160 V", toVal: "4.16 kV", extra: "Industrial pump and compressor motor supply" },
      { fromVal: "13,800 V", toVal: "13.8 kV", extra: "Standard neighborhood primary distribution line" },
      { fromVal: "34,500 V", toVal: "34.5 kV", extra: "Sub-transmission line feeding local substations" },
      { fromVal: "115,000 V", toVal: "115.0 kV", extra: "Regional high-voltage transmission grid" },
      { fromVal: "500,000 V", toVal: "500.0 kV", extra: "Extra-high-voltage (EHV) inter-state power grid" }
    ]
  },
  applications: {
    title: "Engineering Applications of V to kV Conversion",
    items: [
      {
        title: "Power Substation Engineering",
        text: "Designers configure transformer turn ratios that step down transmission voltages from 115 kV or 230 kV down to 13.8 kV and lower commercial voltage levels."
      },
      {
        title: "Dielectric Insulation Testing",
        text: "Electrical insulation testing (Hi-Pot testing) evaluates cable break-down thresholds in kilovolts to ensure safe operation under high-voltage surges."
      },
      {
        title: "Industrial Facility Management",
        text: "Facility managers track building service entry voltages in kilovolts when coordinating with utility providers on transformer capacity."
      }
    ]
  },
  pitfalls: {
    title: "Common Voltage Conversion Mistakes",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (V) to a larger unit (kV) requires division by 1,000.",
      "Confusing AC RMS voltage with Peak Voltage: In alternating current circuits, 13.8 kV RMS corresponds to a peak voltage of approximately 19.5 kV.",
      "Conflating Voltage (V) with Power (W): Voltage measures potential difference, whereas power (watts) depends on both voltage and current (P = V × I)."
    ]
  },
  faqs: [
    {
      question: "How many Volts are in 1 Kilovolt?",
      answer: "There are exactly 1,000 Volts in 1 Kilovolt."
    },
    {
      question: "What is the formula to convert Volts to Kilovolts?",
      answer: "The formula is: Kilovolts = Volts ÷ 1,000."
    },
    {
      question: "How many Kilovolts is 12,000 Volts?",
      answer: "12,000 Volts equals 12 Kilovolts (12,000 ÷ 1,000 = 12 kV)."
    },
    {
      question: "Why do power grids measure voltage in Kilovolts?",
      answer: "Using Kilovolts keeps numerical values manageable for utility operators and reflects high-voltage levels required for low-loss power transmission."
    },
    {
      question: "Is 480 V considered high voltage or medium voltage?",
      answer: "In electrical standards (such as ANSI C84.1), 480 V is classified as low voltage (under 1,000 V), equal to 0.48 kV."
    },
    {
      question: "How do I convert 13.8 kV to Volts?",
      answer: "Multiply 13.8 by 1,000 to get 13,800 Volts."
    },
    {
      question: "What is the threshold for high voltage in Kilovolts?",
      answer: "Under IEC and IEEE standards, high voltage typically starts above 1 kV (1,000 V) for AC systems."
    },
    {
      question: "How many Kilovolts is a 120 V household outlet?",
      answer: "A 120 V outlet equals 0.12 Kilovolts (120 ÷ 1,000 = 0.12 kV)."
    }
  ],
  relatedList: [
    { label: "Kilovolt to Volt", from: "kilovolt", to: "volt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "ANSI C84.1: Electric Power Systems and Equipment - Voltage Ratings (60 Hz)."
  ]
};
