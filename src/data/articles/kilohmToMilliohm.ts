import { CustomArticleData } from "./types";

export const kilohmToMilliohm: CustomArticleData = {
  fromUnitId: "kilohm",
  toUnitId: "milliohm",
  seoTitle: "Kilohm to Milliohm Converter (kΩ to mΩ)",
  metaDescription: "Convert Kilohms to Milliohms (kΩ to mΩ) with exact electrical resistance formulas, worked sensor and shunt calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/kilohm-to-milliohm",
  h1: "Kilohm to Milliohm Converter",
  introduction: [
    "Electrical circuits frequently bridge components with vastly different impedance regimes. Precision current-measuring circuits, for instance, compare high-impedance kilohm-scale operational amplifier inputs against milliohm-scale series shunt resistors.",
    "The Kilohm (kΩ) represents one thousand ohms (10³ Ω), while the Milliohm (mΩ) represents one-thousandth of an ohm (10⁻³ Ω). Because these units differ by six orders of magnitude (10⁶), one kilohm is equal to exactly one million milliohms.",
    "This converter provides exact mathematical conversions between Kilohms and Milliohms, circuit bridge examples, comparative resistance tables, and practical calculation guidance for power and instrumentation engineers."
  ],
  quickAnswer: {
    text: "To convert Kilohms to Milliohms, multiply the resistance value in Kilohms by 1,000,000 (or multiply by 10⁶). For example, a 1.0 kΩ resistor equals 1,000,000 mΩ, and 0.05 kΩ (50 Ω) equals 50,000 mΩ.",
    formulaDisplay: "mΩ = kΩ × 1,000,000",
    subtext: "1 Kilohm is equal to exactly 1,000,000 Milliohms (10⁶ mΩ)."
  },
  aboutSourceUnit: {
    title: "What is a Kilohm (kΩ)?",
    text: "The Kilohm (symbol: kΩ) is an SI decimal multiple of the ohm equal to 1,000 ohms (10³ Ω). Resistors in the kilohm range are ubiquitous in low-power signal conditioning, pull-up/pull-down networks, RC timing circuits, and operational amplifier gain stages."
  },
  aboutTargetUnit: {
    title: "Understanding Milliohms (mΩ)",
    text: "The Milliohm (symbol: mΩ) is an SI decimal submultiple of the ohm equal to 0.001 ohms (10⁻³ Ω). Milliohms quantify low-resistance circuit parameters such as power MOSFET channel resistance (Rds(on)), current sensing shunts, capacitor equivalent series resistance (ESR), and PCB copper trace impedance."
  },
  relationship: "The metric relationship between kilohms and milliohms spans a factor of one million: 1 kΩ = 1,000 Ω = 1,000,000 mΩ (10⁶ mΩ). Conversely, 1 mΩ = 0.000001 kΩ (10⁻⁶ kΩ).",
  relationshipTitle: "Kilohm to Milliohm Resistance Scale",
  relationshipItems: [
    { label: "0.001 kΩ (1 Ω)", value: "1,000 mΩ (1.0 Ohm power resistor)" },
    { label: "0.010 kΩ (10 Ω)", value: "10,000 mΩ (10 Ohm gate damping resistor)" },
    { label: "0.100 kΩ (100 Ω)", value: "100,000 mΩ (100 Ohm line termination)" },
    { label: "1.000 kΩ (1,000 Ω)", value: "1,000,000 mΩ (1.0 kΩ standard resistor)" },
    { label: "10.000 kΩ (10,000 Ω)", value: "10,000,000 mΩ (10.0 kΩ logic pull-up)" }
  ],
  formula: {
    text: "Multiply the resistance in Kilohms by 1,000,000 to determine the equivalent resistance in Milliohms.",
    math: "R_{(m\\Omega)} = R_{(k\\Omega)} \\times 1000000 = R_{(k\\Omega)} \\times 10^{6}",
    subtext: "To convert milliohms back to kilohms, divide the milliohm value by 1,000,000."
  },
  formulaTitle: "Kilohm to Milliohm Conversion Formula",
  practicalTip: {
    title: "6-Decimal Right Shift Rule",
    text: "To convert kilohms to milliohms mentally, shift the decimal point six places to the right. For example, 0.0047 kΩ becomes 4,700 mΩ (4.7 Ω)."
  },
  expertNote: {
    title: "Current Sense Amplifier Impedance Ratios",
    text: "A typical high-side current monitor pairs a 10 mΩ (0.00001 kΩ) sensing shunt with internal input bias resistors of 10 kΩ (10,000,000 mΩ). Maintaining a 1,000,000:1 ratio ensures less than 0.0001% circuit loading error."
  },
  examples: {
    title: "Step-by-Step kΩ to mΩ Worked Examples",
    items: [
      {
        title: "Example 1: Low-Resistance Damping Network",
        subtitle: "Convert a 0.047 kΩ (47 Ω) series resistor into milliohms.",
        steps: [
          "Identify value in Kilohms: R = 0.047 kΩ.",
          "Apply conversion formula: R_(mΩ) = 0.047 × 1,000,000.",
          "Calculate: 0.047 × 1,000,000 = 47,000.",
          "Result: 0.047 kΩ equals 47,000 mΩ."
        ]
      },
      {
        title: "Example 2: 1k Resistor in Milliohms",
        subtitle: "Convert a 1.0 kΩ resistor to milliohms.",
        steps: [
          "Identify value in Kilohms: R = 1.0 kΩ.",
          "Apply conversion formula: R_(mΩ) = 1.0 × 1,000,000.",
          "Calculate: 1.0 × 1,000,000 = 1,000,000.",
          "Result: 1.0 kΩ equals 1,000,000 mΩ."
        ]
      },
      {
        title: "Example 3: Sub-Kilohm Shunt Calibration",
        subtitle: "Convert 0.005 kΩ into milliohms.",
        steps: [
          "Identify value in Kilohms: R = 0.005 kΩ.",
          "Apply conversion formula: R_(mΩ) = 0.005 × 1,000,000.",
          "Calculate: 0.005 × 1,000,000 = 5,000.",
          "Result: 0.005 kΩ equals 5,000 mΩ (5 Ω)."
        ]
      }
    ]
  },
  table: {
    title: "Kilohm to Milliohm Resistance Conversion Table",
    headers: ["Resistance (kΩ)", "Resistance (mΩ)", "Resistance (Ω)", "Circuit Application"],
    rows: [
      { fromVal: "0.001 kΩ", toVal: "1,000 mΩ", extra: "1 Ω", extra2: "Power amplifier emitter degeneration" },
      { fromVal: "0.005 kΩ", toVal: "5,000 mΩ", extra: "5 Ω", extra2: "Snubber circuit damping resistor" },
      { fromVal: "0.010 kΩ", toVal: "10,000 mΩ", extra: "10 Ω", extra2: "Power MOSFET gate driver series resistor" },
      { fromVal: "0.022 kΩ", toVal: "22,000 mΩ", extra: "22 Ω", extra2: "USB 2.0 full-speed series termination" },
      { fromVal: "0.050 kΩ", toVal: "50,000 mΩ", extra: "50 Ω", extra2: "RF coaxial characteristic impedance" },
      { fromVal: "0.100 kΩ", toVal: "100,000 mΩ", extra: "100 Ω", extra2: "Ethernet differential pair termination" },
      { fromVal: "0.220 kΩ", toVal: "220,000 mΩ", extra: "220 Ω", extra2: "Standard LED current limiting resistor" },
      { fromVal: "0.470 kΩ", toVal: "470,000 mΩ", extra: "470 Ω", extra2: "Optocoupler input current limiter" },
      { fromVal: "1.000 kΩ", toVal: "1,000,000 mΩ", extra: "1,000 Ω", extra2: "1k standard bias resistor" },
      { fromVal: "4.700 kΩ", toVal: "4,700,000 mΩ", extra: "4,700 Ω", extra2: "I2C bus pull-up resistor" },
      { fromVal: "10.000 kΩ", toVal: "10,000,000 mΩ", extra: "10,000 Ω", extra2: "Digital microcontroller pull-up" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Multi-Range Meter & Bridge Design",
        text: "Precision Wheatstone and Kelvin bridges switch between kilohm balancing arms and milliohm test sections, requiring rapid unit conversion during calibration."
      },
      {
        title: "Current-Sense Amplifier Network Modeling",
        text: "Modeling the feedback network of a current-shunt monitor requires scaling the milliohm sense resistor (e.g. 5 mΩ) and kilohm gain-setting resistors (e.g. 10 kΩ) in the same simulation domain."
      },
      {
        title: "Automotive Electrical Distribution",
        text: "Engine control units (ECUs) interface high-resistance sensor inputs (10 kΩ = 10,000,000 mΩ) alongside low-resistance actuator wiring (50 mΩ), verifying circuit safety margins."
      },
      {
        title: "Audio Power Amplifier Output Impedance",
        text: "Audio power stages feature damping factors calculated from the ratio of speaker load impedance (8,000 mΩ) to amplifier output resistance (20 mΩ), contrasted against kilohm input stages."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Mixing prefix scales: Forgetting that 1 kΩ = 1,000,000 mΩ (10⁶ ratio), not 1,000 mΩ (which is 1 Ω).",
      "Case confusion between 'm' and 'M': Confusing 1 mΩ (milliohm = 10⁻³ Ω) with 1 MΩ (megohm = 10⁶ Ω) creates a 10⁹ error.",
      "Decimal placement in fractional kilohms: 0.001 kΩ equals 1,000 mΩ (1 Ω), not 1 mΩ.",
      "Attempting to measure milliohms with standard 2-wire multimeter ranges designed for kilohms."
    ]
  },
  faqs: [
    {
      question: "How many Milliohms are in a Kilohm?",
      answer: "There are exactly 1,000,000 Milliohms in 1 Kilohm (1 kΩ = 1,000,000 mΩ = 10⁶ mΩ). Conversely, 1 Milliohm equals 0.000001 Kilohms (10⁻⁶ kΩ)."
    },
    {
      question: "What is the formula to convert Kilohms to Milliohms?",
      answer: "The formula is: Resistance in mΩ = Resistance in kΩ × 1,000,000 (or R in kΩ × 10⁶). For example, 0.05 kΩ × 1,000,000 = 50,000 mΩ."
    },
    {
      question: "How many milliohms is a 1k resistor?",
      answer: "A 1k (1 kΩ) resistor is equal to exactly 1,000,000 Milliohms (one million milliohms or 1,000 ohms)."
    },
    {
      question: "How do I convert 0.1 kΩ to milliohms?",
      answer: "Multiply 0.1 by 1,000,000: 0.1 × 1,000,000 = 100,000 mΩ (100 ohms)."
    },
    {
      question: "What is the difference between kΩ and mΩ?",
      answer: "kΩ (kilohm) equals 1,000 ohms (10³ Ω), used for signal circuits. mΩ (milliohm) equals 0.001 ohms (10⁻³ Ω), used for current shunts and power traces. They differ by a factor of 1,000,000."
    },
    {
      question: "How do I convert 10 kΩ to milliohms?",
      answer: "Multiply 10 by 1,000,000: 10 × 1,000,000 = 10,000,000 mΩ (ten million milliohms)."
    },
    {
      question: "Why do engineers use milliohms instead of kilohms for shunts?",
      answer: "Shunt resistors must carry high currents without dissipating excessive power. A 5 mΩ shunt at 10A generates only 0.5W, whereas a 5 kΩ resistor at 10A would theoretically require 500 kW of power."
    },
    {
      question: "What does 0.001 kΩ mean?",
      answer: "0.001 kΩ is 1 Ohm, which equals 1,000 Milliohms (1,000 mΩ)."
    }
  ],
  relatedList: [
    { label: "Ohm to Milliohm", from: "ohm", to: "milliohm" },
    { label: "Kilohm to Ohm", from: "kilohm", to: "ohm" },
    { label: "Kilohm to Microohm", from: "kilohm", to: "microohm" },
    { label: "Kilohm to Megohm", from: "kilohm", to: "megohm" },
    { label: "Ohm to Kilohm", from: "ohm", to: "kilohm" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IEEE Std 280 - Standard Letter Symbols for Quantities Used in Electrical Science and Electrical Engineering",
    "IEC 60062 - Marking codes for resistors and capacitors"
  ]
};
