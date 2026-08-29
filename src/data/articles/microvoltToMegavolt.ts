import { CustomArticleData } from "./types";

export const microvoltToMegavolt: CustomArticleData = {
  fromUnitId: "microvolt",
  toUnitId: "megavolt",
  seoTitle: "Microvolt to Megavolt Converter (µV to MV)",
  metaDescription: "Convert Microvolts to Megavolts (µV to MV) with live calculations, exact 10⁻¹² ratio formula, ultra-high-voltage telemetry scaling, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/microvolt-to-megavolt",
  h1: "Microvolt to Megavolt Converter",
  introduction: [
    "Electrical physics and high-voltage grid telemetry encompass an extreme potential span—from sub-microvolt (µV) quantum noise floors and electrophysiological potentials up to megavolt (MV) ultra-high-voltage (UHV) power transmission networks. Converting Microvolts (µV) to Megavolts (MV) translates micro-electronic sensor readings and insulation leakage signals directly across twelve decimal orders of magnitude (10¹²).",
    "Under the International System of Units (SI), the prefixes 'micro' (10⁻⁶) and 'mega' (10⁶) define this ratio. One microvolt is one-millionth of a volt (10⁻⁶ V), while one megavolt is one million volts (10⁶ V). The ratio between these two units is 10⁶ ÷ 10⁻⁶ = 10¹² (one trillion). Converting microvolts to megavolts requires dividing the microvolt value by 1,000,000,000,000 (or multiplying by 10⁻¹²).",
    "This technical guide explains the conversion mathematics, provides step-by-step worked examples from high-voltage laboratory impulse testing and optical sensor telemetry, includes an engineering reference table, and outlines key metrology principles."
  ],
  quickAnswer: {
    text: "To convert Microvolts to Megavolts, divide the potential value in Microvolts by 1,000,000,000,000 (10¹²) or multiply by 10⁻¹². For example, 1,000,000,000,000 µV equals 1.0 MV, and 500,000,000,000 µV equals 0.5 MV.",
    formulaDisplay: "MV = µV ÷ 1,000,000,000,000",
    subtext: "1 Microvolt (µV) is equal to exactly 0.000000000001 Megavolts (10⁻¹² MV)."
  },
  aboutSourceUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple equal to 10⁻⁶ volts (0.000001 V). Microvolts are the standard unit for recording ultra-sensitive electrical phenomena, including biological nerve impulses, thermocouple Seebeck voltages, RF antenna inputs, and partial discharge noise in high-voltage dielectric insulators."
  },
  aboutTargetUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts are utilized in long-distance bulk power transmission grids (e.g., ±800 kV and 1,100 kV UHV lines), high-energy electrostatic particle accelerators (such as Van de Graaff generators), and synthetic lightning simulation test facilities."
  },
  relationship: "The metric scaling ratio between microvolts and megavolts spans twelve decimal orders of magnitude: 1 MV = 1,000,000,000,000 µV (10¹² µV), and 1 µV = 10⁻¹² MV (0.000000000001 MV).",
  relationshipTitle: "Microvolt vs Megavolt Magnitude Scales",
  relationshipItems: [
    { label: "1 µV", value: "10⁻¹² MV (RF receiver noise floor)" },
    { label: "1,000,000 µV", value: "0.000001 MV (1.0 Volt SI base standard)" },
    { label: "1,000,000,000 µV", value: "0.001 MV (1.0 Kilovolt distribution level)" },
    { label: "500,000,000,000 µV", value: "0.5 MV (500 kV EHV power corridor)" },
    { label: "1,000,000,000,000 µV", value: "1.0 MV (1.0 Megavolt UHV grid benchmark)" }
  ],
  formula: {
    text: "Divide the electric potential in Microvolts by 1,000,000,000,000 (or multiply by 10⁻¹²) to compute Megavolts.",
    math: "MV = µV / 1000000000000",
    subtext: "To convert megavolts back to microvolts, multiply the megavolt value by 1,000,000,000,000."
  },
  formulaTitle: "Microvolt to Megavolt Mathematical Formula",
  practicalTip: {
    title: "Scientific Notation & Decimal Shift Rule",
    text: "Because the conversion spans 12 orders of magnitude, use scientific notation in engineering calculations: MV = µV × 10⁻¹². For manual calculations, shift the decimal point twelve positions to the left."
  },
  expertNote: {
    title: "Electro-Optic Voltage Transducer (EOVT) Scaling",
    text: "Modern 1.1 MV UHV substations use electro-optic Pockels cell sensors to monitor high-voltage lines. The sensor modulates a laser beam that optical receiver diodes convert into microvolt-level photodiode voltages, enabling full-scale digital telemetry across 12 orders of magnitude."
  },
  examples: {
    title: "Step-by-Step Microvolt to Megavolt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Grid Potential",
        subtitle: "Convert a 765,000,000,000 Microvolt power line measurement into Megavolts.",
        steps: [
          "Identify voltage in Microvolts: 765,000,000,000 µV (7.65 × 10¹¹ µV).",
          "Apply conversion formula: MV = (7.65 × 10¹¹) ÷ 10¹².",
          "Perform calculation: 7.65 × 10¹¹ × 10⁻¹² = 0.765.",
          "Result: 765,000,000,000 Microvolts equals 0.765 Megavolts (or 765 kV)."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Transmission Line",
        subtitle: "Convert 1,100,000,000,000 Microvolts into Megavolts.",
        steps: [
          "Identify potential: 1,100,000,000,000 µV.",
          "Divide by 1,000,000,000,000: 1.1 × 10¹² ÷ 10¹² = 1.1.",
          "Result: 1,100,000,000,000 Microvolts equals 1.1 Megavolts."
        ]
      },
      {
        title: "Example 3: Van de Graaff Electrostatic Accelerator",
        subtitle: "Convert a 25,000,000,000 Microvolt terminal voltage into Megavolts.",
        steps: [
          "Identify value: 25,000,000,000 µV (2.5 × 10¹⁰ µV).",
          "Apply division: MV = (2.5 × 10¹⁰) ÷ 10¹².",
          "Compute result: 2.5 × 10⁻² = 0.025.",
          "Result: 25,000,000,000 Microvolts equals 0.025 Megavolts (or 25 kV)."
        ]
      }
    ]
  },
  table: {
    title: "Microvolt to Megavolt Conversion Reference Table",
    headers: ["Microvolts (µV)", "Megavolts (MV)", "High-Voltage & Power System Context"],
    rows: [
      { fromVal: "1,000,000,000 µV", toVal: "0.001 MV", extra: "1 kV medium-voltage distribution floor" },
      { fromVal: "13,800,000,000 µV", toVal: "0.0138 MV", extra: "13.8 kV municipal distribution feeder" },
      { fromVal: "69,000,000,000 µV", toVal: "0.069 MV", extra: "69 kV sub-transmission line" },
      { fromVal: "115,000,000,000 µV", toVal: "0.115 MV", extra: "115 kV regional transmission grid" },
      { fromVal: "230,000,000,000 µV", toVal: "0.23 MV", extra: "230 kV primary utility transmission" },
      { fromVal: "345,000,000,000 µV", toVal: "0.345 MV", extra: "345 kV extra-high-voltage (EHV) line" },
      { fromVal: "500,000,000,000 µV", toVal: "0.5 MV", extra: "500 kV EHV bulk power backbone" },
      { fromVal: "765,000,000,000 µV", toVal: "0.765 MV", extra: "765 kV ultra-capacity AC grid" },
      { fromVal: "1,000,000,000,000 µV", toVal: "1.0 MV", extra: "1.0 Megavolt UHV milestone potential" },
      { fromVal: "1,100,000,000,000 µV", toVal: "1.1 MV", extra: "1,100 kV UHV direct-current line" }
    ]
  },
  applications: {
    title: "Applications of Microvolt to Megavolt Conversion",
    items: [
      {
        title: "SCADA Power Grid Telemetry & Transducers",
        text: "Grid automation systems utilize capacitive and optical voltage transformers to step down 500 kV–1.1 MV transmission lines into microvolt-level ADC inputs for digital energy metering and protection relays."
      },
      {
        title: "Lightning Impulse Generator Calibration",
        text: "Marx impulse generators producing 2 to 5 MV simulate lightning strikes on high-voltage substation insulators, recording attenuated output voltage waveforms calibrated in microvolts on high-speed digitizers."
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
      "Confusing Megavolts (MV, 10⁶ V) with Microvolts (µV, 10⁻⁶ V): The capitalization and prefix designate a 10¹² difference; confusing the two reverses the physical scale.",
      "Miscounting zeros across 12 decimal places: Ensure 10¹² (one trillion) is used as the divisor rather than 10⁶ or 10⁹.",
      "Loss of numerical precision in 32-bit floating point systems: Storing 10⁻¹² numbers in standard single-precision floats causes truncation; always use double precision (64-bit IEEE 754)."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Megavolt?",
      answer: "There are exactly 1,000,000,000,000 (one trillion) Microvolts in 1 Megavolt (1 MV = 10¹² µV)."
    },
    {
      question: "What is the formula to convert Microvolts to Megavolts?",
      answer: "The formula is: Megavolts = Microvolts ÷ 1,000,000,000,000 (or MV = µV × 10⁻¹²)."
    },
    {
      question: "How do I convert 500,000,000,000 µV to Megavolts?",
      answer: "Divide 500,000,000,000 by 1,000,000,000,000 to get 0.5 Megavolts (equivalent to 500 kV)."
    },
    {
      question: "What is 1,000,000,000,000 µV in Megavolts?",
      answer: "1,000,000,000,000 Microvolts equals exactly 1.0 Megavolt."
    },
    {
      question: "Why does the conversion span 12 decimal orders of magnitude?",
      answer: "Micro is 10⁻⁶ (one-millionth) and Mega is 10⁶ (one million). The ratio between them is 10⁶ ÷ 10⁻⁶ = 10¹² (one trillion)."
    },
    {
      question: "How do I convert Megavolts back to Microvolts?",
      answer: "Multiply the Megavolt value by 1,000,000,000,000. For example, 1.1 MV × 10¹² = 1,100,000,000,000 µV."
    },
    {
      question: "What is the difference in unit symbols between microvolt and megavolt?",
      answer: "Microvolt is written as µV (Greek mu), while Megavolt is written with a capital 'M' as MV."
    },
    {
      question: "Where are Megavolt voltages used in power engineering?",
      answer: "Megavolt levels occur in ultra-high-voltage (UHV) AC and DC long-distance transmission grids (500 kV to 1.1 MV) and high-energy physics particle accelerators."
    }
  ],
  relatedList: [
    { label: "Megavolt to Microvolt", from: "megavolt", to: "microvolt" },
    { label: "Microvolt to Volt", from: "microvolt", to: "volt" },
    { label: "Microvolt to Kilovolt", from: "microvolt", to: "kilovolt" },
    { label: "Millivolt to Megavolt", from: "millivolt", to: "megavolt" },
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60060-1: High-voltage test techniques - General definitions and test requirements."
  ]
};
