import { CustomArticleData } from "./types";

export const millivoltToMegavolt: CustomArticleData = {
  fromUnitId: "millivolt",
  toUnitId: "megavolt",
  seoTitle: "Millivolt to Megavolt Converter (mV to MV)",
  metaDescription: "Convert Millivolts to Megavolts (mV to MV) instantly. Learn the 1,000,000,000 ratio division formula, grid telemetry scaling, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millivolt-to-megavolt",
  h1: "Millivolt to Megavolt Converter",
  introduction: [
    "Electrical engineering spans staggering dynamic ranges of electric potential—from millivolt (mV) sensor signals captured in control rooms to megavolt (MV) extra-high-voltage (EHV) and ultra-high-voltage (UHV) power transmission corridors. Converting Millivolts (mV) to Megavolts (MV) translates micro-electronic telemetry inputs and current-shunt drops directly into bulk transmission network potential ratings.",
    "Under the International System of Units (SI), standard decimal prefixes establish this relationship. One millivolt represents one-thousandth of a volt (10⁻³ V), while one megavolt equals one million volts (10⁶ V). As a result, there are exactly one billion millivolts in one megavolt (10⁹ mV = 1 MV). Converting millivolts to megavolts requires dividing the millivolt potential by 1,000,000,000.",
    "This technical guide explains the conversion mathematics, provides step-by-step worked examples from grid monitoring and lightning impulse testing, delivers an engineering reference table, and clarifies common high-voltage telemetry pitfalls."
  ],
  quickAnswer: {
    text: "To convert Millivolts to Megavolts, divide the potential value in Millivolts by 1,000,000,000 (or multiply by 10⁻⁹). For example, 500,000,000 mV equals 0.5 MV, and 1,000,000,000 mV equals 1.0 MV.",
    formulaDisplay: "MV = mV ÷ 1,000,000,000",
    subtext: "1 Millivolt is equal to exactly 0.000000001 Megavolts (10⁻⁹ MV)."
  },
  aboutSourceUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is an SI decimal submultiple equal to 10⁻³ volts (0.001 V). Millivolts are the standard unit for analog instrumentation signals, thermocouple outputs, current-sensing shunt resistor drop voltages, and analog-to-digital converter (ADC) reference rails."
  },
  aboutTargetUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts are utilized in long-distance bulk power transmission grids (e.g., 1.1 MV UHV DC transmission lines in China and Europe), high-energy particle accelerators (like Van de Graaff generators), and laboratory lightning impulse simulation systems."
  },
  relationship: "The metric scaling ratio between millivolts and megavolts spans nine decimal orders of magnitude: 1 MV = 1,000,000,000 mV (10⁹ mV), and 1 mV = 10⁻⁹ MV (0.000000001 MV).",
  relationshipTitle: "Millivolt vs Megavolt Magnitude Scales",
  relationshipItems: [
    { label: "1 mV", value: "10⁻⁹ MV (Single thermocouple resolution point)" },
    { label: "1,000 mV", value: "0.000001 MV (1.0 Volt baseline potential)" },
    { label: "1,000,000 mV", value: "0.001 MV (1.0 Kilovolt distribution level)" },
    { label: "500,000,000 mV", value: "0.5 MV (500 kV EHV transmission line)" },
    { label: "1,000,000,000 mV", value: "1.0 MV (1.0 Megavolt UHV grid benchmark)" }
  ],
  formula: {
    text: "Divide the electric potential in Millivolts by 1,000,000,000 (or multiply by 10⁻⁹) to compute Megavolts.",
    math: "MV = mV / 1000000000",
    subtext: "To convert megavolts back to millivolts, multiply the megavolt value by 1,000,000,000."
  },
  formulaTitle: "Millivolt to Megavolt Mathematical Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Megavolts",
    text: "To convert millivolts to megavolts manually, shift the decimal point nine places to the left. For example, 765,000,000 mV becomes 0.765 MV (765 kV)."
  },
  expertNote: {
    title: "Optical Fiber Voltage Sensors in UHV Substations",
    text: "In 1 MV substations, conventional copper wire instrumentation cannot bridge the insulation barrier safely. Modern UHV installations use electro-optic Pockels cell sensors that convert megavolt line fields into millivolt optical receiver voltages across dielectric fiber links."
  },
  examples: {
    title: "Step-by-Step Millivolt to Megavolt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Transmission Line",
        subtitle: "Convert a 765,000,000 Millivolt power corridor potential into Megavolts.",
        steps: [
          "Identify voltage in Millivolts: 765,000,000 mV.",
          "Apply conversion formula: MV = 765,000,000 ÷ 1,000,000,000.",
          "Perform division: 765,000,000 ÷ 10⁹ = 0.765.",
          "Result: 765,000,000 Millivolts equals 0.765 Megavolts (or 765 kV)."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Line Telemetry",
        subtitle: "Convert 1,100,000,000 Millivolts into Megavolts.",
        steps: [
          "Identify voltage: 1,100,000,000 mV.",
          "Divide by 1,000,000,000: 1,100,000,000 ÷ 1,000,000,000 = 1.1.",
          "Result: 1,100,000,000 Millivolts equals 1.1 Megavolts."
        ]
      },
      {
        title: "Example 3: Particle Accelerator Terminal Voltage",
        subtitle: "Convert a 25,000,000 Millivolt electrostatic beam potential to Megavolts.",
        steps: [
          "Identify source potential: 25,000,000 mV.",
          "Divide by 1,000,000,000: 25,000,000 ÷ 10⁹ = 0.025.",
          "Result: 25,000,000 Millivolts equals 0.025 Megavolts (or 25 kV)."
        ]
      }
    ]
  },
  table: {
    title: "Millivolt to Megavolt Conversion Reference Table",
    headers: ["Millivolts (mV)", "Megavolts (MV)", "Power & Physics System Context"],
    rows: [
      { fromVal: "1,000,000 mV", toVal: "0.001 MV", extra: "1 kV medium-voltage distribution lower limit" },
      { fromVal: "10,000,000 mV", toVal: "0.01 MV", extra: "10 kV industrial feeder line voltage" },
      { fromVal: "34,500,000 mV", toVal: "0.0345 MV", extra: "34.5 kV regional distribution standard" },
      { fromVal: "115,000,000 mV", toVal: "0.115 MV", extra: "115 kV high-voltage sub-transmission grid" },
      { fromVal: "230,000,000 mV", toVal: "0.23 MV", extra: "230 kV primary regional transmission line" },
      { fromVal: "345,000,000 mV", toVal: "0.345 MV", extra: "345 kV extra-high-voltage (EHV) line" },
      { fromVal: "500,000,000 mV", toVal: "0.5 MV", extra: "500 kV EHV long-distance backbone" },
      { fromVal: "765,000,000 mV", toVal: "0.765 MV", extra: "765 kV high-capacity bulk AC grid" },
      { fromVal: "1,000,000,000 mV", toVal: "1.0 MV", extra: "1.0 MV UHV transmission milestone" },
      { fromVal: "1,100,000,000 mV", toVal: "1.1 MV", extra: "1,100 kV ultra-high-voltage DC transmission" }
    ]
  },
  applications: {
    title: "Applications of Millivolt to Megavolt Conversion",
    items: [
      {
        title: "SCADA Grid Telemetry & Transducer Calibration",
        text: "Supervisory Control and Data Acquisition (SCADA) systems use capacitive voltage transformers (CVTs) that attenuate 500 kV–1.1 MV transmission lines to millivolt signals for digital energy meters."
      },
      {
        title: "Lightning Impulse Generator Testing",
        text: "High-voltage laboratories discharge Marx impulse generators capable of producing 2 to 5 MV to simulate lightning strikes on transformer bushings, capturing output divider curves calibrated in millivolts."
      },
      {
        title: "Nuclear & Particle Physics Beamline Telemetry",
        text: "Tandem Van de Graaff and linear particle accelerators translate control console millivolt setpoint commands into multi-megavolt electrostatic potential wells for ion acceleration."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Confusing Megavolts (MV, 10⁶ V) with Millivolts (mV, 10⁻³ V): Capital 'M' designates mega (million), whereas lowercase 'm' designates milli (thousandth)—a 10⁹ difference.",
      "Losing significant digits during decimal shift: Dividing across nine decimal places requires tracking trailing zeros or utilizing scientific notation (e.g., 7.65 × 10⁸ mV = 0.765 MV).",
      "Multiplying instead of dividing: Converting from the smaller unit (mV) to the vastly larger unit (MV) must decrease the numerical magnitude."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts are in 1 Megavolt?",
      answer: "There are exactly 1,000,000,000 (one billion) Millivolts in 1 Megavolt (1 MV = 10⁹ mV)."
    },
    {
      question: "What is the formula to convert Millivolts to Megavolts?",
      answer: "The formula is: Megavolts = Millivolts ÷ 1,000,000,000 (or MV = mV × 10⁻⁹)."
    },
    {
      question: "How do I convert 500,000,000 mV to Megavolts?",
      answer: "Divide 500,000,000 by 1,000,000,000 to get 0.5 MV (equivalent to 500 kV)."
    },
    {
      question: "What is 1,000,000,000 mV in Megavolts?",
      answer: "1,000,000,000 Millivolts equals exactly 1 Megavolt (1.0 MV)."
    },
    {
      question: "Why does the conversion span nine decimal places?",
      answer: "Milli is 10⁻³ and Mega is 10⁶. The ratio between them is 10⁶ ÷ 10⁻³ = 10⁹ (one billion)."
    },
    {
      question: "What is the symbol difference between millivolt and megavolt?",
      answer: "Millivolt is abbreviated with a lowercase 'm' (mV), whereas Megavolt is abbreviated with an uppercase 'M' (MV)."
    },
    {
      question: "How do I convert Megavolts back to Millivolts?",
      answer: "Multiply the Megavolt value by 1,000,000,000. For example, 0.765 MV × 10⁹ = 765,000,000 mV."
    },
    {
      question: "Where are Megavolt voltages encountered in industry?",
      answer: "Megavolts are found in extra-high-voltage (EHV) and ultra-high-voltage (UHV) power transmission lines (500 kV to 1.1 MV), high-energy particle physics facilities, and lightning impulse test labs."
    }
  ],
  relatedList: [
    { label: "Megavolt to Millivolt", from: "megavolt", to: "millivolt" },
    { label: "Millivolt to Kilovolt", from: "millivolt", to: "kilovolt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" },
    { label: "Kilovolt to Megavolt", from: "kilovolt", to: "megavolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60060-1: High-voltage test techniques - General definitions and test requirements."
  ]
};
