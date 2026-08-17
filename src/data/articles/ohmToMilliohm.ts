import { CustomArticleData } from "./types";

export const ohmToMilliohm: CustomArticleData = {
  fromUnitId: "ohm",
  toUnitId: "milliohm",
  seoTitle: "Ohm to Milliohm Converter (Ω to mΩ)",
  metaDescription: "Convert Ohms to Milliohms (Ω to mΩ) with exact electrical resistance formulas, worked current-sense shunt examples, Kelvin 4-wire testing tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/ohm-to-milliohm",
  h1: "Ohm to Milliohm Converter",
  introduction: [
    "In power electronics, battery management systems (BMS), switch-mode power supplies, and printed circuit board (PCB) trace routing, low-resistance conductors and current-sensing components operate in the sub-ohm regime.",
    "The Ohm (Ω) is the standard SI unit of resistance, while the Milliohm (mΩ) represents one-thousandth of an ohm (10⁻³ Ω). Components such as power MOSFET on-state resistance (Rds(on)), current shunt resistors, fuse ratings, and PCB copper traces are universally specified in milliohms to minimize I²R thermal dissipation and voltage drop.",
    "This converter provides exact conversions between Ohms and Milliohms, 4-wire Kelvin sensing calculation examples, power dissipation tables, and practical layout recommendations for power electronics designers."
  ],
  quickAnswer: {
    text: "To convert Ohms to Milliohms, multiply the resistance value in Ohms by 1,000. For example, a 0.05 Ω current sense resistor equals 50 mΩ, and 0.005 Ω equals 5 mΩ.",
    formulaDisplay: "mΩ = Ω × 1,000",
    subtext: "1 Ohm is equal to exactly 1,000 Milliohms (10³ mΩ)."
  },
  aboutSourceUnit: {
    title: "What is an Ohm (Ω)?",
    text: "The Ohm (symbol: Ω) is the SI base derived unit for electrical resistance. Defined by Georg Ohm, one ohm represents the resistance between two points where a potential difference of 1 volt drives a steady current of 1 ampere (1 Ω = 1 V / 1 A). In dimensional base units, 1 Ω = 1 kg·m²·s⁻³·A⁻²."
  },
  aboutTargetUnit: {
    title: "Understanding Milliohms (mΩ)",
    text: "The Milliohm (symbol: mΩ) is a fractional decimal submultiple of the ohm equal to 0.001 ohms (10⁻³ Ω). It is the premier unit for measuring parasitic series resistance (ESR in capacitors, DCR in inductors), power transistor conduction resistance (Rds(on)), automotive fuse boxes, and lithium-ion battery internal impedance."
  },
  relationship: "The relationship between ohms and milliohms is direct and metric: 1 Ω = 1,000 mΩ, and 1 mΩ = 0.001 Ω (10⁻³ Ω). The conversion is exact.",
  relationshipTitle: "Ohm to Milliohm Sub-Ohm Benchmarks",
  relationshipItems: [
    { label: "0.001 Ω", value: "1 mΩ (High-current battery shunt)" },
    { label: "0.005 Ω", value: "5 mΩ (Power MOSFET Rds(on))" },
    { label: "0.010 Ω", value: "10 mΩ (SMD 2512 current sense resistor)" },
    { label: "0.050 Ω", value: "50 mΩ (18650 Li-ion internal resistance)" },
    { label: "0.100 Ω", value: "100 mΩ (100 mΩ / 0.1R power limiter)" }
  ],
  formula: {
    text: "Multiply the resistance in Ohms by 1,000 to determine the equivalent resistance in Milliohms.",
    math: "R_{(m\\Omega)} = R_{(\\Omega)} \\times 1000 = R_{(\\Omega)} \\times 10^{3}",
    subtext: "To convert milliohms back to ohms, divide the milliohm value by 1,000."
  },
  formulaTitle: "Ohm to Milliohm Conversion Formula",
  practicalTip: {
    title: "3-Decimal Right Shift Rule",
    text: "To convert ohms to milliohms mentally, shift the decimal point three positions to the right. For example, 0.025 Ω becomes 25 mΩ, and 0.002 Ω becomes 2 mΩ."
  },
  expertNote: {
    title: "Kelvin 4-Wire Sensing Requirement",
    text: "When measuring sub-ohm resistances in the milliohm range, standard 2-wire multimeter lead resistance (typically 50 mΩ to 200 mΩ) introduces huge percentage errors. Precision milliohm measurements require 4-wire Kelvin connections separating current excitation and voltage sensing."
  },
  examples: {
    title: "Step-by-Step Ω to mΩ Worked Calculations",
    items: [
      {
        title: "Example 1: Battery Management Current Shunt",
        subtitle: "Convert a 0.005 Ohm shunt resistor to milliohms.",
        steps: [
          "Identify value in Ohms: R = 0.005 Ω.",
          "Apply conversion formula: R_(mΩ) = 0.005 × 1,000.",
          "Calculate: 0.005 × 1,000 = 5.0.",
          "Result: 0.005 Ω equals 5 mΩ."
        ]
      },
      {
        title: "Example 2: MOSFET On-State Conduction Resistance",
        subtitle: "A datasheet specifies Rds(on) = 0.018 Ω. Convert to milliohms.",
        steps: [
          "Identify value in Ohms: R = 0.018 Ω.",
          "Apply conversion formula: R_(mΩ) = 0.018 × 1,000.",
          "Calculate: 0.018 × 1,000 = 18.0.",
          "Result: 0.018 Ω equals 18 mΩ."
        ]
      },
      {
        title: "Example 3: PCB Ground Plane Trace Resistance",
        subtitle: "Trace resistance calculator estimates 0.0023 Ω. Convert to milliohms.",
        steps: [
          "Identify value in Ohms: R = 0.0023 Ω.",
          "Apply conversion formula: R_(mΩ) = 0.0023 × 1,000.",
          "Calculate: 0.0023 × 1,000 = 2.3.",
          "Result: 0.0023 Ω equals 2.3 mΩ."
        ]
      }
    ]
  },
  table: {
    title: "Ohm to Milliohm Conversion & Power Loss Table",
    headers: ["Resistance (Ω)", "Resistance (mΩ)", "Power Loss at 10A (P = I²R)"],
    rows: [
      { fromVal: "0.0005 Ω", toVal: "0.5 mΩ", extra: "0.05 Watts (50 mW)" },
      { fromVal: "0.001 Ω", toVal: "1.0 mΩ", extra: "0.10 Watts (100 mW)" },
      { fromVal: "0.002 Ω", toVal: "2.0 mΩ", extra: "0.20 Watts (200 mW)" },
      { fromVal: "0.005 Ω", toVal: "5.0 mΩ", extra: "0.50 Watts (500 mW)" },
      { fromVal: "0.010 Ω", toVal: "10.0 mΩ", extra: "1.00 Watts" },
      { fromVal: "0.020 Ω", toVal: "20.0 mΩ", extra: "2.00 Watts" },
      { fromVal: "0.050 Ω", toVal: "50.0 mΩ", extra: "5.00 Watts" },
      { fromVal: "0.075 Ω", toVal: "75.0 mΩ", extra: "7.50 Watts" },
      { fromVal: "0.100 Ω", toVal: "100.0 mΩ", extra: "10.00 Watts" },
      { fromVal: "0.250 Ω", toVal: "250.0 mΩ", extra: "25.00 Watts" },
      { fromVal: "0.500 Ω", toVal: "500.0 mΩ", extra: "50.00 Watts" },
      { fromVal: "1.000 Ω", toVal: "1,000.0 mΩ", extra: "100.00 Watts" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Current Sensing & Power Telemetry",
        text: "Low-side and high-side current monitoring circuits place 1 mΩ to 50 mΩ precision metal-foil resistors in series with power rails to generate measurable millivolt drops without excessive heating."
      },
      {
        title: "Lithium Battery Internal Resistance (DCIR & ACIR)",
        text: "Healthy 18650 and 21700 lithium-ion battery cells exhibit internal impedance between 15 mΩ and 40 mΩ. Deteriorating cells rise into hundreds of milliohms, causing thermal runaway risks."
      },
      {
        title: "Switch-Mode Power Supply (SMPS) Synchronous Rectifiers",
        text: "Modern GaN and silicon MOSFETs feature Rds(on) values as low as 1.5 mΩ, enabling DC-DC conversion efficiencies exceeding 98% in server VRMs."
      },
      {
        title: "Automotive Wiring Harnesses & Busbars",
        text: "Electric vehicle (EV) battery interconnect busbars are engineered for contact resistances under 0.1 mΩ (100 µΩ) to withstand hundreds of continuous charging amperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting 0.05 Ω to mΩ requires multiplying by 1,000 (50 mΩ), not dividing into 0.00005 mΩ.",
      "Ignoring lead wire resistance in multimeters: Measuring a 10 mΩ shunt with standard probe leads adds 100 mΩ to 300 mΩ of lead resistance, resulting in a 1,000%+ measurement error without 4-wire Kelvin sensing.",
      "Thermal drift in low-value resistors: Resistors in the milliohm range can shift resistance significantly if temperature coefficient of resistance (TCR in ppm/°C) is neglected under high current load.",
      "Case sensitivity: Confusing lowercase 'm' (milliohm = 10⁻³ Ω) with uppercase 'M' (megohm = 10⁶ Ω)."
    ]
  },
  faqs: [
    {
      question: "How many Milliohms are in an Ohm?",
      answer: "There are exactly 1,000 Milliohms in 1 Ohm (1 Ω = 1,000 mΩ). Conversely, 1 Milliohm equals 0.001 Ohms (10⁻³ Ω)."
    },
    {
      question: "What is the formula to convert Ohms to Milliohms?",
      answer: "The formula is: Resistance in mΩ = Resistance in Ω × 1,000. For example, 0.02 Ω × 1,000 = 20 mΩ."
    },
    {
      question: "Why are current shunt resistors measured in milliohms?",
      answer: "Shunt resistors must introduce negligible voltage drop and power loss into the host circuit. A 5 mΩ shunt carrying 20 Amperes drops only 0.1V (100 mV) and dissipates 2 Watts of heat, making it safe and efficient."
    },
    {
      question: "What is a 4-wire Kelvin resistance measurement?",
      answer: "A 4-wire Kelvin measurement uses two wires to pass a known test current through the component and two separate high-impedance sense wires to measure voltage drop directly across the component terminals, completely eliminating test lead resistance."
    },
    {
      question: "How do I convert 0.01 ohms to milliohms?",
      answer: "Multiply 0.01 by 1,000: 0.01 × 1,000 = 10 mΩ (ten milliohms, also marked as R010 on SMD components)."
    },
    {
      question: "What does R005 mean on an SMD resistor?",
      answer: "R005 indicates a 0.005 Ohm (5 mΩ) resistor. In SMD marking codes, 'R' represents the decimal point in ohms, so R005 = 0.005 Ω = 5 mΩ."
    },
    {
      question: "What is typical internal resistance for a healthy 12V car battery?",
      answer: "A healthy 12V lead-acid car starter battery has an internal resistance of approximately 2 mΩ to 5 mΩ (0.002 Ω to 0.005 Ω), enabling it to deliver 500+ Amps during engine cranking."
    },
    {
      question: "How does copper PCB trace thickness affect milliohms?",
      answer: "Resistance is inversely proportional to cross-sectional area. A 1 oz copper trace (35 µm thick) that is 1 mm wide and 25 mm long has approximately 12 mΩ of resistance; increasing copper thickness to 2 oz (70 µm) halves the resistance to 6 mΩ."
    }
  ],
  relatedList: [
    { label: "Ohm to Microohm", from: "ohm", to: "microohm" },
    { label: "Kilohm to Milliohm", from: "kilohm", to: "milliohm" },
    { label: "Ohm to Kilohm", from: "ohm", to: "kilohm" },
    { label: "Ohm to Megohm", from: "ohm", to: "megohm" },
    { label: "Kilohm to Ohm", from: "kilohm", to: "ohm" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IPC-2152 - Standard for Determining Current-Carrying Capacity in Printed Board Design",
    "IEC 60062 - Marking codes for resistors and capacitors"
  ]
};
