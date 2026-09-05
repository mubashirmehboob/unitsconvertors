import { CustomArticleData } from "./types";

export const milliohmToKilohm: CustomArticleData = {
  fromUnitId: "milliohm",
  toUnitId: "kilohm",
  seoTitle: "Milliohm to Kilohm Converter (mΩ to kΩ)",
  metaDescription: "Convert milliohms to kilohms (mΩ to kΩ) with exact SI metric formulas, six-decade impedance ratios, worked engineering examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/milliohm-to-kilohm",
  h1: "Milliohm to Kilohm Converter",
  introduction: [
    "Electrical engineers, electronic technicians, and system architects frequently compare ultra-low parasitic impedances with standard circuit biasing networks. Converting milliohms (mΩ) to kilohms (kΩ) spans six orders of magnitude (10⁶), bridging the gap between high-current power distribution and signal-level analog design.",
    "The milliohm represents one-thousandth of an ohm (10⁻³ Ω), commonly encountered in battery interconnects, power plane DC resistance, and current-sensing shunts. The kilohm represents one thousand ohms (10³ Ω), ubiquitous in operational amplifier feedback loops, pull-up resistors, and RC timing filters.",
    "Because the ratio between the milli (10⁻³) and kilo (10³) prefixes is exactly one million (10⁶), one kilohm contains precisely 1,000,000 milliohms. This technical guide provides the exact mathematical conversion formula, step-by-step worked calculations, practical circuit design guidelines, and reference tables."
  ],
  quickAnswer: {
    text: "To convert milliohms (mΩ) to kilohms (kΩ), divide the milliohm value by 1,000,000 (or multiply by 0.000001 / 10⁻⁶). For example, 100,000 mΩ equals 0.1 kΩ (100 Ω), and 1,000,000 mΩ equals 1 kΩ.",
    formulaDisplay: "\\text{k}\\Omega = \\frac{\\text{m}\\Omega}{1{,}000{,}000} = \\text{m}\\Omega \\times 10^{-6}",
    subtext: "1 Milliohm is equal to exactly 0.000001 Kilohm (1 mΩ = 10⁻⁶ kΩ)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliohm (mΩ)",
    text: "The milliohm (symbol: mΩ) is an SI submultiple equal to 0.001 ohms (10⁻³ Ω). It is standard in low-impedance power electronics, battery testing (internal ESR), transformer winding resistance, and PCB copper plane calculations, where resistance must remain negligible to prevent thermal loss."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilohm (kΩ)",
    text: "The kilohm (symbol: kΩ) is an SI decimal multiple equal to 1,000 ohms (10³ Ω). It is the workhorse unit of analog circuit design, utilized in voltage dividers, operational amplifier input biasing, passive RC filters, and digital bus pull-up resistors (such as 4.7 kΩ on I²C)."
  },
  relationship: "The relationship between milliohms and kilohms is defined by the prefix ratio 10⁻³ / 10³ = 10⁻⁶ = 0.000001. Exactly one million milliohms make up one kilohm: 1 kΩ = 1,000,000 mΩ. Inversely, 1 mΩ = 0.000001 kΩ (10⁻⁶ kΩ).",
  relationshipTitle: "Milliohm to Kilohm Scale Equivalences",
  relationshipItems: [
    { label: "1,000 mΩ", value: "0.001 kΩ (1.0 Ω baseline)" },
    { label: "10,000 mΩ", value: "0.010 kΩ (10 Ω power resistor)" },
    { label: "100,000 mΩ", value: "0.100 kΩ (100 Ω load resistor)" },
    { label: "470,000 mΩ", value: "0.470 kΩ (470 Ω LED current-limiting resistor)" },
    { label: "1,000,000 mΩ", value: "1.000 kΩ (Standard 1.0 kΩ pull-up)" },
    { label: "10,000,000 mΩ", value: "10.000 kΩ (Standard 10 kΩ bias resistor)" }
  ],
  formula: {
    text: "Divide the resistance in milliohms by 1,000,000 to determine the resistance in kilohms.",
    math: "R_{(\\text{k}\\Omega)} = \\frac{R_{(\\text{m}\\Omega)}}{1{,}000{,}000} = R_{(\\text{m}\\Omega)} \\times 10^{-6}",
    subtext: "To convert kilohms back to milliohms, multiply the kilohm value by 1,000,000."
  },
  formulaTitle: "mΩ to kΩ Conversion Formula",
  practicalTip: {
    title: "6-Decimal Left Shift Rule",
    text: "To convert milliohms to kilohms in your head, shift the decimal point six places to the left. For example, 2,500,000 mΩ becomes 2.5 kΩ, and 47,000 mΩ becomes 0.047 kΩ."
  },
  expertNote: {
    title: "Parasitic Impedance vs. Functional Circuit Resistance",
    text: "In precision mixed-signal hardware design, power supply copper plane resistance (typically 5 to 50 mΩ) must be evaluated against ground-referencing resistor dividers (typically 10 kΩ to 100 kΩ). A 50 mΩ trace carrying 10 A creates a 500 mV ground bounce, which will severely corrupt a 10 kΩ ADC reference network."
  },
  examples: {
    title: "Step-by-Step mΩ to kΩ Worked Calculations",
    items: [
      {
        title: "Example 1: Wirewound Power Resistor Conversion",
        subtitle: "A high-power ceramic resistor measures 220,000 mΩ. Express this value in kilohms.",
        steps: [
          "State the value in milliohms: R = 220,000 mΩ.",
          "Divide by 1,000,000: 220,000 ÷ 1,000,000.",
          "Compute: 220,000 ÷ 1,000,000 = 0.22.",
          "Result: 220,000 mΩ equals exactly 0.22 kΩ (220 Ω)."
        ]
      },
      {
        title: "Example 2: Pull-Up Resistor Scaling",
        subtitle: "A digital bus line uses a 4,700,000 mΩ pull-up resistor. What is this value in kilohms?",
        steps: [
          "Identify the value: R = 4,700,000 mΩ.",
          "Divide by 1,000,000: 4,700,000 ÷ 1,000,000.",
          "Compute: 4,700,000 ÷ 1,000,000 = 4.7.",
          "Result: 4,700,000 mΩ equals 4.7 kΩ (standard I²C bus value)."
        ]
      },
      {
        title: "Example 3: Precision Shunt Array",
        subtitle: "A precision laboratory current-viewing resistor array is calibrated at 50,000 mΩ. Convert this to kilohms.",
        steps: [
          "State the resistance: R = 50,000 mΩ.",
          "Divide by 1,000,000: 50,000 ÷ 1,000,000.",
          "Compute: 50,000 ÷ 1,000,000 = 0.05.",
          "Result: 50,000 mΩ equals 0.05 kΩ (50 Ω)."
        ]
      }
    ]
  },
  table: {
    title: "Milliohm to Kilohm Engineering Reference Table",
    headers: ["Milliohms (mΩ)", "Kilohms (kΩ)", "Electronic Application Context"],
    rows: [
      { fromVal: "1,000 mΩ", toVal: "0.001 kΩ", extra: "1.0 Ω wirewound power resistor" },
      { fromVal: "10,000 mΩ", toVal: "0.010 kΩ", extra: "10 Ω gate drive damping resistor" },
      { fromVal: "47,000 mΩ", toVal: "0.047 kΩ", extra: "47 Ω transmission line series termination" },
      { fromVal: "100,000 mΩ", toVal: "0.100 kΩ", extra: "100 Ω Ethernet differential termination" },
      { fromVal: "220,000 mΩ", toVal: "0.220 kΩ", extra: "220 Ω optocoupler input resistor" },
      { fromVal: "470,000 mΩ", toVal: "0.470 kΩ", extra: "470 Ω LED current-limiting resistor" },
      { fromVal: "1,000,000 mΩ", toVal: "1.000 kΩ", extra: "1.0 kΩ active filter feedback component" },
      { fromVal: "2,200,000 mΩ", toVal: "2.200 kΩ", extra: "2.2 kΩ transistor base bias resistor" },
      { fromVal: "4,700,000 mΩ", toVal: "4.700 kΩ", extra: "4.7 kΩ I²C communication bus pull-up" },
      { fromVal: "10,000,000 mΩ", toVal: "10.000 kΩ", extra: "10 kΩ standard microcontroller pull-up" },
      { fromVal: "47,000,000 mΩ", toVal: "47.000 kΩ", extra: "47 kΩ audio volume pre-amp stage" },
      { fromVal: "100,000,000 mΩ", toVal: "100.000 kΩ", extra: "100 kΩ operational amplifier feedback network" }
    ]
  },
  applications: {
    title: "Circuit Analysis & System Modeling Applications",
    items: [
      {
        title: "Simulation Netlist Normalization",
        text: "Circuit simulators normalize circuit matrix equations. Converting milliohm parasitic series resistances to kilohms allows engineers to verify that matrix condition numbers remain well-behaved without numerical singularity."
      },
      {
        title: "Signal Attenuation & Voltage Division Ratios",
        text: "Calculating voltage divider ratios between milliohm source impedances (such as low-dropout regulators with 20 mΩ output impedance) and kilohm loads (such as 10 kΩ ADC inputs) confirms negligible loading error."
      },
      {
        title: "Automated Test Equipment Scaling",
        text: "Mixed-signal ATE test benches map relay board contact resistances (measured in milliohms) against device-under-test (DUT) pull-up resistors (measured in kilohms) to calibrate measurement offsets."
      },
      {
        title: "Audio Cross-Talk & Ground Return Analysis",
        text: "High-fidelity audio systems evaluate ground return milliohms (typically 20 mΩ) against 10 kΩ amplifier input impedances to guarantee signal-to-noise ratios (SNR) exceeding 100 dB."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Scaling Traps",
    items: [
      "Prefix confusion: 'milli' is 10⁻³, while 'kilo' is 10³. The conversion factor is 1,000,000 (six orders of magnitude), not 1,000.",
      "Rounding small milliohm values prematurely: Converting 50 mΩ directly to kΩ yields 0.00005 kΩ. Truncating this to zero in calculation software discards crucial parasitic resistance in high-current paths.",
      "Case errors: Writing 'MΩ' (megohm) instead of 'mΩ' (milliohm) results in a catastrophic error factor of 10⁹.",
      "Measurement method discrepancy: You cannot verify a milliohm-level component using the kilohm range of a standard multimeter; 4-wire Kelvin sensing is required."
    ]
  },
  faqs: [
    {
      question: "How do you convert milliohms to kilohms?",
      answer: "Divide the milliohm value by 1,000,000, or multiply by 0.000001 (10⁻⁶). For example, 500,000 mΩ ÷ 1,000,000 = 0.5 kΩ."
    },
    {
      question: "How many milliohms are in one kilohm?",
      answer: "There are exactly 1,000,000 milliohms in 1 kilohm (1 kΩ = 1,000,000 mΩ = 10⁶ mΩ)."
    },
    {
      question: "How do you convert kilohms back to milliohms?",
      answer: "Multiply the kilohm value by 1,000,000. For example, 4.7 kΩ × 1,000,000 = 4,700,000 mΩ."
    },
    {
      question: "What is 1,000 mΩ in kilohms?",
      answer: "1,000 mΩ equals 1 Ω, which converts to exactly 0.001 kΩ."
    },
    {
      question: "What is 10,000,000 mΩ in kilohms?",
      answer: "10,000,000 mΩ divided by 1,000,000 equals exactly 10 kΩ."
    },
    {
      question: "Why do engineers use both mΩ and kΩ?",
      answer: "Milliohms describe parasitic trace resistance and current shunts where resistance must be minimal, while kilohms describe functional circuit components like pull-up resistors and op-amp bias networks where current must be limited."
    },
    {
      question: "What is the difference between mΩ, Ω, and kΩ?",
      answer: "1 kΩ equals 1,000 Ω, and 1 Ω equals 1,000 mΩ. Therefore, 1 kΩ equals 1,000,000 mΩ."
    },
    {
      question: "What is 100 mΩ in kΩ?",
      answer: "100 mΩ divided by 1,000,000 equals exactly 0.0001 kΩ (or 0.1 Ω)."
    }
  ],
  relatedList: [
    { label: "Milliohm to Ohm", from: "milliohm", to: "ohm" },
    { label: "Kilohm to Milliohm", from: "kilohm", to: "milliohm" },
    { label: "Milliohm to Microohm", from: "milliohm", to: "microohm" },
    { label: "Ohm to Kilohm", from: "ohm", to: "kilohm" },
    { label: "Kilohm to Ohm", from: "kilohm", to: "ohm" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI)",
    "IEC 60063 - Preferred number series for resistors and capacitors",
    "Horowitz & Hill - The Art of Electronics (3rd Edition), Cambridge University Press"
  ]
};
