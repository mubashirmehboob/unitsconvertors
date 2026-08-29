import { CustomArticleData } from "./types";

export const megavoltToMillivolt: CustomArticleData = {
  fromUnitId: "megavolt",
  toUnitId: "millivolt",
  seoTitle: "Megavolt to Millivolt Converter (MV to mV)",
  metaDescription: "Convert Megavolts to Millivolts (MV to mV) instantly. Learn the 10⁹ multiplication formula, high-voltage sensor scaling, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megavolt-to-millivolt",
  h1: "Megavolt to Millivolt Converter",
  introduction: [
    "Electrical power grid instrumentation, lightning impulse testing, and electrostatic particle physics span huge ranges of electric potential. Converting Megavolts (MV) to Millivolts (mV) translates bulk transmission line voltages and high-energy physics potentials across nine decimal orders of magnitude (10⁹) into millivolt levels suitable for sensor data acquisition and digital control systems.",
    "Under the International System of Units (SI), standard decimal prefixes define the conversion. One megavolt represents one million volts (10⁶ V), whereas one millivolt represents one-thousandth of a volt (10⁻³ V). Dividing 10⁶ by 10⁻³ gives 10⁹ (one billion). Therefore, one megavolt equals exactly 1,000,000,000 millivolts. Converting megavolts to millivolts requires multiplying the megavolt value by 1,000,000,000.",
    "This technical guide details the 10⁹ conversion mathematics, provides step-by-step worked examples from grid monitoring and laboratory impulse calibration, presents an engineering reference table, and reviews practical telemetry design tips."
  ],
  quickAnswer: {
    text: "To convert Megavolts to Millivolts, multiply the potential value in Megavolts by 1,000,000,000 (10⁹). For example, 0.5 MV equals 500,000,000 mV, and 1.0 MV equals 1,000,000,000 mV.",
    formulaDisplay: "mV = MV × 1,000,000,000",
    subtext: "1 Megavolt (MV) is equal to exactly 1,000,000,000 Millivolts (mV)."
  },
  aboutSourceUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts classify ultra-high-voltage (UHV) power transmission corridors (e.g., 1.1 MV DC lines), industrial lightning test generators, and electrostatic nuclear physics accelerators."
  },
  aboutTargetUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is an SI decimal submultiple equal to 10⁻³ volts (0.001 V). Millivolts are the standard unit for analog instrumentation inputs, thermocouple thermal voltages, current-shunt drops, and analog-to-digital converter (ADC) reference rails."
  },
  relationship: "The metric scaling ratio between megavolts and millivolts spans nine decimal orders of magnitude: 1 MV = 1,000,000,000 mV (10⁹ mV), and 1 mV = 10⁻⁹ MV (0.000000001 MV).",
  relationshipTitle: "Megavolt vs Millivolt Magnitude Scales",
  relationshipItems: [
    { label: "0.000001 MV", value: "1,000 mV (1.0 Volt SI base reference)" },
    { label: "0.001 MV", value: "1,000,000 mV (1.0 Kilovolt distribution level)" },
    { label: "0.0345 MV", value: "34,500,000 mV (34.5 kV regional utility line)" },
    { label: "0.5 MV", value: "500,000,000 mV (500 kV EHV transmission line)" },
    { label: "1.0 MV", value: "1,000,000,000 mV (1.0 Megavolt UHV grid benchmark)" }
  ],
  formula: {
    text: "Multiply the electric potential in Megavolts by 1,000,000,000 (or 10⁹) to compute Millivolts.",
    math: "mV = MV * 1000000000",
    subtext: "To convert millivolts back to megavolts, divide the millivolt value by 1,000,000,000."
  },
  formulaTitle: "Megavolt to Millivolt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert megavolts to millivolts manually, shift the decimal point nine places to the right. For example, 0.765 MV becomes 765,000,000 mV."
  },
  expertNote: {
    title: "Optical Fiber Voltage Sensor Scaling",
    text: "In modern 1.1 MV UHV substations, electro-optic voltage sensors use fiber optic isolation to scale megavolt line fields down to millivolt receiver signals, protecting low-voltage control room electronics while maintaining precision."
  },
  examples: {
    title: "Step-by-Step Megavolt to Millivolt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Transmission Line",
        subtitle: "Convert a 0.5 Megavolt transmission potential into Millivolts.",
        steps: [
          "Identify source potential: 0.5 MV.",
          "Apply conversion formula: mV = 0.5 × 1,000,000,000.",
          "Perform multiplication: 0.5 × 10⁹ = 500,000,000.",
          "Result: 0.5 Megavolts equals 500,000,000 Millivolts."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Line Rating",
        subtitle: "Convert 1.1 Megavolts into Millivolts.",
        steps: [
          "Identify potential: 1.1 MV.",
          "Multiply by 1,000,000,000: mV = 1.1 × 10⁹.",
          "Compute result: 1.1 × 10⁹ = 1,100,000,000.",
          "Result: 1.1 Megavolts equals 1,100,000,000 Millivolts."
        ]
      },
      {
        title: "Example 3: Substation Sub-Transmission Voltage",
        subtitle: "Convert a 0.069 Megavolt (69 kV) line into Millivolts.",
        steps: [
          "Identify value: 0.069 MV.",
          "Apply multiplication: mV = 0.069 × 1,000,000,000.",
          "Calculate: 0.069 × 10⁹ = 69,000,000.",
          "Result: 0.069 Megavolts equals 69,000,000 Millivolts."
        ]
      }
    ]
  },
  table: {
    title: "Megavolt to Millivolt Conversion Reference Table",
    headers: ["Megavolts (MV)", "Millivolts (mV)", "Power System & Physics Context"],
    rows: [
      { fromVal: "0.001 MV", toVal: "1,000,000 mV", extra: "1 kV medium-voltage baseline" },
      { fromVal: "0.0138 MV", toVal: "13,800,000 mV", extra: "13.8 kV municipal distribution feeder" },
      { fromVal: "0.0345 MV", toVal: "34,500,000 mV", extra: "34.5 kV regional distribution line" },
      { fromVal: "0.069 MV", toVal: "69,000,000 mV", extra: "69 kV high-voltage sub-transmission" },
      { fromVal: "0.115 MV", toVal: "115,000,000 mV", extra: "115 kV regional transmission grid" },
      { fromVal: "0.23 MV", toVal: "230,000,000 mV", extra: "230 kV primary utility transmission" },
      { fromVal: "0.345 MV", toVal: "345,000,000 mV", extra: "345 kV extra-high-voltage (EHV) line" },
      { fromVal: "0.5 MV", toVal: "500,000,000 mV", extra: "500 kV EHV bulk power backbone" },
      { fromVal: "0.765 MV", toVal: "765,000,000 mV", extra: "765 kV ultra-capacity AC grid" },
      { fromVal: "1.0 MV", toVal: "1,000,000,000 mV", extra: "1.0 Megavolt UHV milestone benchmark" }
    ]
  },
  applications: {
    title: "Applications of Megavolt to Millivolt Conversion",
    items: [
      {
        title: "SCADA Grid Telemetry & Transducer Calibration",
        text: "Supervisory Control and Data Acquisition (SCADA) systems use capacitive voltage transformers (CVTs) to attenuate 500 kV–1.1 MV transmission line potentials into millivolt ADC inputs for digital energy metering."
      },
      {
        title: "Lightning Impulse Test Waveform Recording",
        text: "High-voltage laboratories discharge Marx impulse generators (producing 1 to 3 MV) while capturing attenuated output divider waveforms calibrated in millivolts on high-speed oscilloscopes."
      },
      {
        title: "Electrostatic Particle Accelerator Telemetry",
        text: "Control systems for Van de Graaff accelerators scale multi-megavolt terminal charging voltages down to millivolt feedback loops to regulate beam acceleration stability."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting from a larger unit (MV) to a smaller unit (mV) requires multiplying by 1,000,000,000.",
      "Confusing Megavolts (MV, 10⁶ V) with Millivolts (mV, 10⁻³ V): Capital 'M' designates mega, whereas lowercase 'm' designates milli—a 10⁹ difference in scale.",
      "Miscounting zeros across nine decimal places: Ensure one billion (10⁹) is applied rather than one million (10⁶)."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts are in 1 Megavolt?",
      answer: "There are exactly 1,000,000,000 (one billion) Millivolts in 1 Megavolt (1 MV = 10⁹ mV)."
    },
    {
      question: "What is the formula to convert Megavolts to Millivolts?",
      answer: "The formula is: Millivolts = Megavolts × 1,000,000,000 (or mV = MV × 10⁹)."
    },
    {
      question: "How do I convert 0.5 MV to Millivolts?",
      answer: "Multiply 0.5 by 1,000,000,000 to get 500,000,000 Millivolts (500 million mV)."
    },
    {
      question: "What is 1.0 MV in Millivolts?",
      answer: "1.0 Megavolt equals exactly 1,000,000,000 Millivolts (one billion mV)."
    },
    {
      question: "Why does the conversion span nine decimal places?",
      answer: "Because 'mega' is 10⁶ and 'milli' is 10⁻³. The ratio is 10⁶ ÷ 10⁻³ = 10⁹ (one billion)."
    },
    {
      question: "How do I convert Millivolts back to Megavolts?",
      answer: "Divide the Millivolt value by 1,000,000,000. For example, 765,000,000 mV ÷ 10⁹ = 0.765 MV."
    },
    {
      question: "What is the symbol difference between megavolt and millivolt?",
      answer: "Megavolt uses an uppercase 'M' (MV), while millivolt uses a lowercase 'm' (mV)."
    },
    {
      question: "What is 0.0345 MV in Millivolts?",
      answer: "0.0345 Megavolts equals 34,500,000 Millivolts (34.5 kV)."
    }
  ],
  relatedList: [
    { label: "Millivolt to Megavolt", from: "millivolt", to: "megavolt" },
    { label: "Megavolt to Volt", from: "megavolt", to: "volt" },
    { label: "Megavolt to Kilovolt", from: "megavolt", to: "kilovolt" },
    { label: "Megavolt to Microvolt", from: "megavolt", to: "microvolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60060-1: High-voltage test techniques - General definitions and test requirements."
  ]
};
