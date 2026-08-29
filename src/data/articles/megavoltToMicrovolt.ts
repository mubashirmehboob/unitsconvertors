import { CustomArticleData } from "./types";

export const megavoltToMicrovolt: CustomArticleData = {
  fromUnitId: "megavolt",
  toUnitId: "microvolt",
  seoTitle: "Megavolt to Microvolt Converter (MV to µV)",
  metaDescription: "Convert Megavolts to Microvolts (MV to µV) instantly. Learn the 10¹² multiplication formula, UHV optical sensor telemetry steps, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megavolt-to-microvolt",
  h1: "Megavolt to Microvolt Converter",
  introduction: [
    "Electrical metrology and high-voltage power transmission encompass a dynamic range of twelve decimal orders of magnitude (10¹²). Converting Megavolts (MV) to Microvolts (µV) translates extra-high-voltage (EHV) and ultra-high-voltage (UHV) power grid potentials into microvolt-level sensor signals, optical transducer outputs, and low-level digital telemetry representations.",
    "Under the International System of Units (SI), metric prefixes define the scaling ratio. One megavolt represents one million volts (10⁶ V), whereas one microvolt represents one-millionth of a volt (10⁻⁶ V). Dividing 10⁶ by 10⁻⁶ gives 10¹² (one trillion). Therefore, one megavolt equals exactly 1,000,000,000,000 microvolts. Converting megavolts to microvolts requires multiplying the megavolt potential by 1,000,000,000,000.",
    "This technical guide explains the conversion mathematics, provides step-by-step worked examples from UHV grid telemetry and electrostatic accelerator systems, includes an engineering reference table, and details practical metrology standards."
  ],
  quickAnswer: {
    text: "To convert Megavolts to Microvolts, multiply the potential value in Megavolts by 1,000,000,000,000 (10¹²). For example, 0.5 MV equals 500,000,000,000 µV, and 1.0 MV equals 1,000,000,000,000 µV.",
    formulaDisplay: "µV = MV × 1,000,000,000,000",
    subtext: "1 Megavolt (MV) is equal to exactly 1,000,000,000,000 Microvolts (µV)."
  },
  aboutSourceUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts are utilized in long-distance bulk power transmission grids (e.g., 1.1 MV UHV DC transmission corridors), electrostatic particle accelerators (Van de Graaff generators), and synthetic lightning impulse test laboratories."
  },
  aboutTargetUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple equal to 10⁻⁶ volts (0.000001 V). Microvolts are the primary unit of measurement in low-noise operational amplifier drift specs, RF receiver antenna sensitivities, biological neural recordings, and optical transducer photodiode outputs."
  },
  relationship: "The metric scaling ratio between megavolts and microvolts spans twelve decimal orders of magnitude: 1 MV = 1,000,000,000,000 µV (10¹² µV), and 1 µV = 10⁻¹² MV (0.000000000001 MV).",
  relationshipTitle: "Megavolt vs Microvolt Magnitude Scales",
  relationshipItems: [
    { label: "0.000001 MV", value: "1,000,000 µV (1.0 Volt SI base reference)" },
    { label: "0.001 MV", value: "1,000,000,000 µV (1.0 Kilovolt distribution floor)" },
    { label: "0.115 MV", value: "115,000,000,000 µV (115 kV high-voltage line)" },
    { label: "0.5 MV", value: "500,000,000,000 µV (500 kV EHV transmission line)" },
    { label: "1.0 MV", value: "1,000,000,000,000 µV (1.0 Megavolt UHV grid benchmark)" }
  ],
  formula: {
    text: "Multiply the electric potential in Megavolts by 1,000,000,000,000 (or 10¹²) to obtain Microvolts.",
    math: "µV = MV * 1000000000000",
    subtext: "To convert microvolts back to megavolts, divide the microvolt value by 1,000,000,000,000."
  },
  formulaTitle: "Megavolt to Microvolt Mathematical Formula",
  practicalTip: {
    title: "Scientific Notation & Decimal Shift Rule",
    text: "In engineering calculations spanning 12 orders of magnitude, use scientific notation: µV = MV × 10¹². For manual calculations, shift the decimal point twelve positions to the right."
  },
  expertNote: {
    title: "Optical Transducer Scaling across 12 Orders of Magnitude",
    text: "In 1.1 MV UHV substations, electro-optic voltage sensors use laser light modulated by Pockels cells to scale megavolt line fields down to microvolt-level photodiode outputs across dielectric fiber links, completely isolating control electronics from hazardous line potentials."
  },
  examples: {
    title: "Step-by-Step Megavolt to Microvolt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Power Grid Potential",
        subtitle: "Convert a 0.5 Megavolt transmission potential into Microvolts.",
        steps: [
          "Identify source potential in Megavolts: 0.5 MV.",
          "Apply conversion formula: µV = 0.5 × 1,000,000,000,000.",
          "Calculate: 0.5 × 10¹² = 500,000,000,000 (5 × 10¹¹ µV).",
          "Result: 0.5 Megavolts equals 500,000,000,000 Microvolts."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Line Rating",
        subtitle: "Convert 1.1 Megavolts into Microvolts.",
        steps: [
          "Identify potential: 1.1 MV.",
          "Multiply by 1,000,000,000,000: µV = 1.1 × 10¹².",
          "Compute result: 1.1 × 10¹² = 1,100,000,000,000 µV.",
          "Result: 1.1 Megavolts equals 1,100,000,000,000 Microvolts."
        ]
      },
      {
        title: "Example 3: High-Voltage Grid Sub-Transmission Line",
        subtitle: "Convert a 0.115 Megavolt (115 kV) line potential into Microvolts.",
        steps: [
          "Identify value: 0.115 MV.",
          "Apply multiplication: µV = 0.115 × 10¹².",
          "Calculate: 0.115 × 10¹² = 115,000,000,000.",
          "Result: 0.115 Megavolts equals 115,000,000,000 Microvolts."
        ]
      }
    ]
  },
  table: {
    title: "Megavolt to Microvolt Conversion Reference Table",
    headers: ["Megavolts (MV)", "Microvolts (µV)", "Power Grid & Physics Context"],
    rows: [
      { fromVal: "0.001 MV", toVal: "1,000,000,000 µV", extra: "1 kV medium-voltage distribution floor" },
      { fromVal: "0.0138 MV", toVal: "13,800,000,000 µV", extra: "13.8 kV municipal distribution feeder" },
      { fromVal: "0.0345 MV", toVal: "34,500,000,000 µV", extra: "34.5 kV regional distribution line" },
      { fromVal: "0.069 MV", toVal: "69,000,000,000 µV", extra: "69 kV sub-transmission line" },
      { fromVal: "0.115 MV", toVal: "115,000,000,000 µV", extra: "115 kV regional transmission grid" },
      { fromVal: "0.23 MV", toVal: "230,000,000,000 µV", extra: "230 kV primary utility transmission" },
      { fromVal: "0.345 MV", toVal: "345,000,000,000 µV", extra: "345 kV extra-high-voltage (EHV) line" },
      { fromVal: "0.5 MV", toVal: "500,000,000,000 µV", extra: "500 kV EHV bulk power backbone" },
      { fromVal: "0.765 MV", toVal: "765,000,000,000 µV", extra: "765 kV ultra-capacity AC grid" },
      { fromVal: "1.0 MV", toVal: "1,000,000,000,000 µV", extra: "1.0 Megavolt UHV milestone benchmark" }
    ]
  },
  applications: {
    title: "Applications of Megavolt to Microvolt Conversion",
    items: [
      {
        title: "SCADA Power Grid Telemetry & Transducers",
        text: "Grid automation systems utilize capacitive and optical voltage transformers to step down 500 kV–1.1 MV transmission lines into microvolt-level ADC inputs for digital energy metering and protection relays."
      },
      {
        title: "Lightning Impulse Test Waveform Recording",
        text: "Marx impulse generators producing 1 to 3 MV simulate lightning strikes on high-voltage substation insulators, recording attenuated output divider waveforms calibrated in microvolts on high-speed digitizers."
      },
      {
        title: "Dielectric Insulation & Partial Discharge Testing",
        text: "High-voltage research laboratories apply 1 MV dielectric stress across gas-insulated switchgear (GIS) while monitoring high-frequency microvolt discharge pulses."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting from a larger unit (MV) to a smaller unit (µV) requires multiplying by 10¹².",
      "Confusing Megavolts (MV, 10⁶ V) with Microvolts (µV, 10⁻⁶ V): The capitalization and prefix designate a 10¹² difference in physical scale.",
      "Overlooking significant digit precision: In double-precision computations, ensure 10¹² scale factors are tracked properly to avoid roundoff errors."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Megavolt?",
      answer: "There are exactly 1,000,000,000,000 (one trillion) Microvolts in 1 Megavolt (1 MV = 10¹² µV)."
    },
    {
      question: "What is the formula to convert Megavolts to Microvolts?",
      answer: "The formula is: Microvolts = Megavolts × 1,000,000,000,000 (or µV = MV × 10¹²)."
    },
    {
      question: "How do I convert 0.5 MV to Microvolts?",
      answer: "Multiply 0.5 by 1,000,000,000,000 to get 500,000,000,000 Microvolts (500 billion µV)."
    },
    {
      question: "What is 1.0 MV in Microvolts?",
      answer: "1.0 Megavolt equals exactly 1,000,000,000,000 Microvolts (one trillion µV)."
    },
    {
      question: "Why does the conversion span 12 decimal places?",
      answer: "Mega is 10⁶ and Micro is 10⁻⁶. The ratio is 10⁶ ÷ 10⁻⁶ = 10¹² (one trillion)."
    },
    {
      question: "How do I convert Microvolts back to Megavolts?",
      answer: "Divide the Microvolt value by 1,000,000,000,000. For example, 765,000,000,000 µV ÷ 10¹² = 0.765 MV."
    },
    {
      question: "What is the difference in unit symbols between megavolt and microvolt?",
      answer: "Megavolt uses an uppercase 'M' (MV), while microvolt uses the Greek letter mu 'µ' (µV)."
    },
    {
      question: "Where are Megavolt voltages used in power engineering?",
      answer: "Megavolt voltages operate in extra-high-voltage (EHV) and ultra-high-voltage (UHV) power transmission lines (500 kV to 1.1 MV) and high-energy physics facilities."
    }
  ],
  relatedList: [
    { label: "Microvolt to Megavolt", from: "microvolt", to: "megavolt" },
    { label: "Megavolt to Volt", from: "megavolt", to: "volt" },
    { label: "Megavolt to Kilovolt", from: "megavolt", to: "kilovolt" },
    { label: "Megavolt to Millivolt", from: "megavolt", to: "millivolt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60060-1: High-voltage test techniques - General definitions and test requirements."
  ]
};
