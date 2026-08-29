import { CustomArticleData } from "./types";

export const megavoltToVolt: CustomArticleData = {
  fromUnitId: "megavolt",
  toUnitId: "volt",
  seoTitle: "Megavolt to Volt Converter (MV to V)",
  metaDescription: "Convert Megavolts to Volts (MV to V) instantly. Learn the ×1,000,000 multiplication formula, high-voltage transmission scaling, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megavolt-to-volt",
  h1: "Megavolt to Volt Converter",
  introduction: [
    "Electrical power system engineering, high-energy particle physics, and electrical insulation research regularly deal with electric potentials at the megavolt (MV) level. Converting Megavolts (MV) to Volts (V) translates bulk transmission line ratings, substation bus potentials, and lightning simulator outputs into base SI volts used in electrical circuit analysis and equipment specifications.",
    "Under the International System of Units (SI), the metric prefix 'mega' (symbol: M) designates a multiplying factor of 10⁶ (one million). Therefore, one megavolt equals exactly 1,000,000 volts. Converting megavolts to volts requires multiplying the potential in megavolts by 1,000,000.",
    "This guide explains the mathematical conversion between MV and V, provides worked engineering examples from utility power grids and electrostatic accelerators, presents an authoritative reference table, and reviews practical safety and measurement principles."
  ],
  quickAnswer: {
    text: "To convert Megavolts to Volts, multiply the potential value in Megavolts by 1,000,000. For example, 0.5 MV equals 500,000 V, and 1.1 MV equals 1,100,000 V.",
    formulaDisplay: "V = MV × 1,000,000",
    subtext: "1 Megavolt (MV) is equal to exactly 1,000,000 Volts (V)."
  },
  aboutSourceUnit: {
    title: "Understanding Megavolts (MV)",
    text: "The Megavolt (symbol: MV) is an SI decimal multiple equal to 10⁶ volts (1,000,000 V or 1,000 kV). Megavolts are standard in extra-high-voltage (EHV) and ultra-high-voltage (UHV) electric power transmission corridors, electrostatic Van de Graaff accelerators, and synthetic impulse test generators."
  },
  aboutTargetUnit: {
    title: "Understanding Volts (V)",
    text: "The Volt (symbol: V) is the SI base derived unit of electric potential difference and electromotive force. Defined as one joule per coulomb (1 V = 1 J/C = 1 W/A), the volt is the universal foundation for circuit design, battery ratings, logic gates, and electrical code compliance."
  },
  relationship: "The metric scaling ratio between megavolts and volts is 1 to 1,000,000: 1 MV = 1,000,000 V (10⁶ V), and 1 V = 0.000001 MV (10⁻⁶ MV).",
  relationshipTitle: "Megavolt vs Volt Magnitude Scales",
  relationshipItems: [
    { label: "0.001 MV", value: "1,000 V (1.0 Kilovolt distribution threshold)" },
    { label: "0.0345 MV", value: "34,500 V (34.5 kV regional utility feeder)" },
    { label: "0.115 MV", value: "115,000 V (115 kV high-voltage sub-transmission line)" },
    { label: "0.5 MV", value: "500,000 V (500 kV EHV power transmission backbone)" },
    { label: "1.0 MV", value: "1,000,000 V (1.0 Megavolt UHV grid benchmark)" }
  ],
  formula: {
    text: "Multiply the electric potential in Megavolts by 1,000,000 to obtain Volts.",
    math: "V = MV * 1000000",
    subtext: "To convert volts back to megavolts, divide the volt value by 1,000,000."
  },
  formulaTitle: "Megavolt to Volt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert megavolts to volts mentally, move the decimal point six positions to the right. For example, 0.765 MV becomes 765,000 V."
  },
  expertNote: {
    title: "Transmission Line Power Capability ($P \\propto V^2$)",
    text: "Power transmission capacity scales with the square of voltage ($P = V^2 / Z_c$). Stepping up transmission voltage from 0.23 MV (230 kV) to 0.765 MV (765 kV) increases power transfer capability by a factor of $(765 / 230)^2 \\approx 11$, drastically reducing line $I^2R$ resistive heating losses."
  },
  examples: {
    title: "Step-by-Step Megavolt to Volt Worked Examples",
    items: [
      {
        title: "Example 1: Extra-High-Voltage (EHV) Backbone Transmission",
        subtitle: "Convert a 0.5 Megavolt power corridor potential into Volts.",
        steps: [
          "Identify source potential: 0.5 MV.",
          "Apply conversion formula: V = 0.5 × 1,000,000.",
          "Calculate: 0.5 × 10⁶ = 500,000.",
          "Result: 0.5 Megavolts equals 500,000 Volts (or 500 kV)."
        ]
      },
      {
        title: "Example 2: Ultra-High-Voltage (UHV) DC Line Potential",
        subtitle: "Convert an 1.1 Megavolt line rating to Volts.",
        steps: [
          "Identify voltage: 1.1 MV.",
          "Multiply by 1,000,000: V = 1.1 × 1,000,000.",
          "Compute result: 1.1 × 10⁶ = 1,100,000.",
          "Result: 1.1 Megavolts equals 1,100,000 Volts (or 1,100 kV)."
        ]
      },
      {
        title: "Example 3: High-Voltage Laboratory Test Transformer",
        subtitle: "Convert a 0.23 Megavolt test potential into Volts.",
        steps: [
          "Identify value: 0.23 MV.",
          "Apply multiplication: V = 0.23 × 1,000,000.",
          "Calculate: 0.23 × 1,000,000 = 230,000.",
          "Result: 0.23 Megavolts equals 230,000 Volts (230 kV)."
        ]
      }
    ]
  },
  table: {
    title: "Megavolt to Volt Conversion Reference Table",
    headers: ["Megavolts (MV)", "Volts (V)", "Power Grid & Physics Context"],
    rows: [
      { fromVal: "0.001 MV", toVal: "1,000 V", extra: "1 kV medium-voltage baseline" },
      { fromVal: "0.0138 MV", toVal: "13,800 V", extra: "13.8 kV municipal distribution feeder" },
      { fromVal: "0.0345 MV", toVal: "34,500 V", extra: "34.5 kV regional distribution standard" },
      { fromVal: "0.069 MV", toVal: "69,000 V", extra: "69 kV sub-transmission line" },
      { fromVal: "0.115 MV", toVal: "115,000 V", extra: "115 kV regional transmission grid" },
      { fromVal: "0.23 MV", toVal: "230,000 V", extra: "230 kV primary utility transmission line" },
      { fromVal: "0.345 MV", toVal: "345,000 V", extra: "345 kV extra-high-voltage (EHV) grid" },
      { fromVal: "0.5 MV", toVal: "500,000 V", extra: "500 kV EHV long-distance backbone" },
      { fromVal: "0.765 MV", toVal: "765,000 V", extra: "765 kV ultra-capacity AC grid" },
      { fromVal: "1.0 MV", toVal: "1,000,000 V", extra: "1.0 Megavolt UHV milestone benchmark" }
    ]
  },
  applications: {
    title: "Applications of Megavolt to Volt Conversion",
    items: [
      {
        title: "Power System Transmission Line Modeling",
        text: "Electrical grid engineers model per-unit impedance, corona discharge inception, and surge impedance loading (SIL) by converting megavolt line ratings to base volts for load-flow simulation software."
      },
      {
        title: "Substation Transformer Step-Down Ratios",
        text: "Utility planning teams calculate transformer turns ratios ($N_1/N_2 = V_1/V_2$) to step down 0.5 MV (500,000 V) transmission voltage to 13,800 V distribution feeders and 480 V/120 V end-user services."
      },
      {
        title: "High-Energy Physics & Particle Accelerators",
        text: "Nuclear physicists calculate kinetic energy gains of charged ions ($\Delta E = q \cdot V$) in particle accelerators by converting megavolt terminal potentials to base volts."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting from a larger unit (MV) to a smaller unit (V) requires multiplying by 1,000,000.",
      "Confusing Megavolts (MV) with Millivolts (mV): 1 MV = 10⁶ V, whereas 1 mV = 10⁻³ V; mixing up the capital 'M' with lowercase 'm' causes a 10⁹ error.",
      "Overlooking line-to-line vs line-to-neutral voltages: In 3-phase systems, 0.5 MV represents the line-to-line RMS voltage; the phase-to-ground voltage is $500,000 / \\sqrt{3} \\approx 288,675\\text{ V}$."
    ]
  },
  faqs: [
    {
      question: "How many Volts make 1 Megavolt?",
      answer: "There are exactly 1,000,000 (one million) Volts in 1 Megavolt (1 MV = 10⁶ V)."
    },
    {
      question: "What is the formula to convert Megavolts to Volts?",
      answer: "The formula is: Volts = Megavolts × 1,000,000 (or V = MV × 10⁶)."
    },
    {
      question: "How do I convert 0.5 MV to Volts?",
      answer: "Multiply 0.5 by 1,000,000 to get 500,000 Volts (0.5 MV × 10⁶ = 500,000 V or 500 kV)."
    },
    {
      question: "What is 1.1 MV in Volts?",
      answer: "1.1 Megavolts equals 1,100,000 Volts (1,100 kV)."
    },
    {
      question: "Why is the conversion factor 1,000,000?",
      answer: "The SI prefix 'mega' signifies 10⁶ (one million). Therefore, 1 MV equals exactly 1,000,000 base volts."
    },
    {
      question: "How do I convert Volts back to Megavolts?",
      answer: "Divide the Volt value by 1,000,000. For example, 765,000 V ÷ 1,000,000 = 0.765 MV."
    },
    {
      question: "What is the difference between MV and kV?",
      answer: "A megavolt (MV) is 1,000,000 V, while a kilovolt (kV) is 1,000 V. Therefore, 1 MV equals exactly 1,000 kV."
    },
    {
      question: "What is 0.0138 MV in Volts?",
      answer: "0.0138 Megavolts equals 13,800 Volts (13.8 kV), standard for municipal distribution lines."
    }
  ],
  relatedList: [
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" },
    { label: "Megavolt to Kilovolt", from: "megavolt", to: "kilovolt" },
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
