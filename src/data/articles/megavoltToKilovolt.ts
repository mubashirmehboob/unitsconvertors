import { CustomArticleData } from "./types";

export const megavoltToKilovolt: CustomArticleData = {
  fromUnitId: "megavolt",
  toUnitId: "kilovolt",
  seoTitle: "Megavolt to Kilovolt Converter (MV to kV)",
  metaDescription: "Convert Megavolts to Kilovolts (MV to kV) with instant calculations, exact ×1,000 formula, power transmission scaling steps, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megavolt-to-kilovolt",
  h1: "Megavolt to Kilovolt Converter",
  introduction: [
    "High-voltage electrical power transmission, substation design, and utility network modeling frequently require converting between Megavolts (MV) and Kilovolts (kV). While Megavolts classify bulk ultra-high-voltage (UHV) transmission backbones (such as 1.0 MV and 1.1 MV corridors), Kilovolts represent standard high-voltage (HV) and extra-high-voltage (EHV) grid ratings (such as 115 kV, 230 kV, 345 kV, 500 kV, and 765 kV).",
    "Under the International System of Units (SI), decimal prefixes establish a direct 1,000-to-1 relationship. One megavolt represents one million volts (10⁶ V), whereas one kilovolt equals one thousand volts (10³ V). Dividing 10⁶ by 10³ shows that one megavolt contains exactly 1,000 kilovolts. Converting megavolts to kilovolts requires multiplying the megavolt value by 1,000.",
    "This technical guide explains the conversion mathematics, provides step-by-step worked examples from grid transmission corridors and high-voltage test laboratories, presents an authoritative reference table, and clarifies practical grid engineering principles."
  ],
  quickAnswer: {
    text: "To convert Megavolts to Kilovolts, multiply the potential value in Megavolts by 1,000. For example, 0.5 MV equals 500 kV, 0.765 MV equals 765 kV, and 1.1 MV equals 1,100 kV.",
    formulaDisplay: "kV = MV × 1,000",
    subtext: "1 Megavolt (MV) is equal to exactly 1,000 Kilovolts (kV)."
  },
  aboutSourceUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts are utilized in long-distance bulk power transmission grids (e.g., 1.1 MV UHV DC transmission lines), electrostatic particle accelerators (Van de Graaff generators), and synthetic lightning impulse test generators."
  },
  aboutTargetUnit: {
    title: "Understanding Kilovolts (kV)",
    text: "The Kilovolt (symbol: kV) is an SI decimal multiple equal to 10³ volts (1,000 V). Kilovolts are universally used across electric utility systems—from medium-voltage distribution feeders (13.8 kV, 34.5 kV) to extra-high-voltage transmission lines (230 kV, 500 kV, 765 kV) and medical diagnostic X-ray generators (40–150 kV)."
  },
  relationship: "The metric scaling ratio between megavolts and kilovolts is fixed at 1 to 1,000: 1 MV = 1,000 kV (10³ kV), and 1 kV = 0.001 MV (10⁻³ MV).",
  relationshipTitle: "Megavolt vs Kilovolt Magnitude Scales",
  relationshipItems: [
    { label: "0.001 MV", value: "1 kV (Medium-voltage distribution threshold)" },
    { label: "0.0345 MV", value: "34.5 kV (Regional distribution line)" },
    { label: "0.115 MV", value: "115 kV (High-voltage transmission line)" },
    { label: "0.5 MV", value: "500 kV (Extra-high-voltage grid backbone)" },
    { label: "1.0 MV", value: "1,000 kV (1.0 Megavolt UHV standard)" }
  ],
  formula: {
    text: "Multiply the electric potential in Megavolts by 1,000 to obtain Kilovolts.",
    math: "kV = MV * 1000",
    subtext: "To convert kilovolts back to megavolts, divide the kilovolt value by 1,000."
  },
  formulaTitle: "Megavolt to Kilovolt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert megavolts to kilovolts mentally, shift the decimal point three positions to the right. For example, 0.765 MV becomes 765 kV, and 0.23 MV becomes 230 kV."
  },
  expertNote: {
    title: "Substation Transformer Step-Down Systems",
    text: "Bulk transmission substations deploy autotransformers to step down extra-high voltages such as 0.765 MV (765 kV) to regional transmission levels of 0.345 MV (345 kV) and 0.138 MV (138 kV), enabling efficient inter-regional grid synchronization."
  },
  examples: {
    title: "Step-by-Step Megavolt to Kilovolt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Power Transmission",
        subtitle: "Convert a 0.5 Megavolt transmission line rating into Kilovolts.",
        steps: [
          "Identify source potential in Megavolts: 0.5 MV.",
          "Apply conversion formula: kV = 0.5 × 1,000.",
          "Perform multiplication: 0.5 × 1,000 = 500.",
          "Result: 0.5 Megavolts equals 500 Kilovolts."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Line Rating",
        subtitle: "Convert an 1.1 Megavolt intercontinental line rating into Kilovolts.",
        steps: [
          "Identify potential: 1.1 MV.",
          "Multiply by 1,000: kV = 1.1 × 1,000.",
          "Compute product: 1.1 × 1,000 = 1,100.",
          "Result: 1.1 Megavolts equals 1,100 Kilovolts (1,100 kV UHV DC)."
        ]
      },
      {
        title: "Example 3: High-Capacity Grid Backbone Feeder",
        subtitle: "Convert a 0.765 Megavolt utility grid specification into Kilovolts.",
        steps: [
          "Identify value: 0.765 MV.",
          "Apply conversion formula: kV = 0.765 × 1,000.",
          "Calculate: 0.765 × 1,000 = 765.",
          "Result: 0.765 Megavolts equals 765 Kilovolts."
        ]
      }
    ]
  },
  table: {
    title: "Megavolt to Kilovolt Conversion Reference Table",
    headers: ["Megavolts (MV)", "Kilovolts (kV)", "Power Grid & Transmission Context"],
    rows: [
      { fromVal: "0.001 MV", toVal: "1 kV", extra: "1 kV medium-voltage baseline" },
      { fromVal: "0.0138 MV", toVal: "13.8 kV", extra: "13.8 kV municipal distribution feeder" },
      { fromVal: "0.0345 MV", toVal: "34.5 kV", extra: "34.5 kV regional distribution standard" },
      { fromVal: "0.069 MV", toVal: "69 kV", extra: "69 kV sub-transmission line" },
      { fromVal: "0.115 MV", toVal: "115 kV", extra: "115 kV regional transmission grid" },
      { fromVal: "0.23 MV", toVal: "230 kV", extra: "230 kV primary utility transmission line" },
      { fromVal: "0.345 MV", toVal: "345 kV", extra: "345 kV extra-high-voltage (EHV) grid" },
      { fromVal: "0.5 MV", toVal: "500 kV", extra: "500 kV EHV long-distance backbone" },
      { fromVal: "0.765 MV", toVal: "765 kV", extra: "765 kV ultra-capacity AC grid" },
      { fromVal: "1.0 MV", toVal: "1,000 kV", extra: "1,000 kV UHV transmission milestone" }
    ]
  },
  applications: {
    title: "Applications of Megavolt to Kilovolt Conversion",
    items: [
      {
        title: "Power Transmission Grid Planning & SCADA",
        text: "Grid dispatchers and power flow simulation programs convert megavolt regional intertie values into kilovolt bus ratings to calculate phase angles, active power flows, and reactive power compensation."
      },
      {
        title: "Substation Switchgear & Bushing Insulation Testing",
        text: "High-voltage test engineers calculate dielectric insulation margins for circuit breakers and transformer bushings rated for 0.5 MV to 0.765 MV by scaling BIL (Basic Impulse Level) ratings in kilovolts."
      },
      {
        title: "HVDC Converter Station Engineering",
        text: "High-Voltage Direct Current (HVDC) converter stations convert AC megavolts from generation plants into ±800 kV or ±1,100 kV direct current for long-distance subsea or cross-country transmission."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying: Because kilovolts are smaller than megavolts, the numerical value must increase by 1,000 (e.g., 0.5 MV becomes 500 kV, not 0.0005 kV).",
      "Confusing Megavolts (MV) with Millivolts (mV): MV is 10⁶ V while mV is 10⁻³ V; mixing up case letters results in a 10⁹ magnitude error.",
      "Overlooking line-to-line vs line-to-ground values: Ensure power system specifications clearly differentiate between 3-phase line-to-line kV and phase-to-ground kV."
    ]
  },
  faqs: [
    {
      question: "How many Kilovolts are in 1 Megavolt?",
      answer: "There are exactly 1,000 Kilovolts in 1 Megavolt (1 MV = 1,000 kV)."
    },
    {
      question: "What is the formula to convert Megavolts to Kilovolts?",
      answer: "The formula is: Kilovolts = Megavolts × 1,000 (or kV = MV × 1,000)."
    },
    {
      question: "How do I convert 0.5 MV to Kilovolts?",
      answer: "Multiply 0.5 by 1,000 to get 500 Kilovolts (0.5 MV × 1,000 = 500 kV)."
    },
    {
      question: "What is 1.1 MV in Kilovolts?",
      answer: "1.1 Megavolts equals 1,100 Kilovolts (1.1 × 1,000 = 1,100 kV)."
    },
    {
      question: "Why do we multiply by 1,000 when converting MV to kV?",
      answer: "The prefix 'mega' equals 10⁶ and 'kilo' equals 10³. The ratio is 10⁶ ÷ 10³ = 10³ = 1,000, meaning one megavolt is 1,000 times larger than a kilovolt."
    },
    {
      question: "How do I convert Kilovolts back to Megavolts?",
      answer: "Divide the Kilovolt value by 1,000. For example, 765 kV ÷ 1,000 = 0.765 MV."
    },
    {
      question: "What is 0.0345 MV in Kilovolts?",
      answer: "0.0345 Megavolts equals 34.5 Kilovolts (34.5 kV), a common utility distribution voltage."
    },
    {
      question: "What is the difference between MV and kV?",
      answer: "A megavolt (MV) is 1,000,000 volts, while a kilovolt (kV) is 1,000 volts. 1 MV contains exactly 1,000 kV."
    }
  ],
  relatedList: [
    { label: "Kilovolt to Megavolt", from: "kilovolt", to: "megavolt" },
    { label: "Megavolt to Volt", from: "megavolt", to: "volt" },
    { label: "Megavolt to Millivolt", from: "megavolt", to: "millivolt" },
    { label: "Kilovolt to Volt", from: "kilovolt", to: "volt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60038: IEC standard voltages."
  ]
};
