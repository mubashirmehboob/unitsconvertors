import { CustomArticleData } from "./types";

export const millihenryToPicohenry: CustomArticleData = {
  fromUnitId: "millihenry",
  toUnitId: "picohenry",
  seoTitle: "Millihenry to Picohenry Converter - mH to pH",
  metaDescription: "Convert millihenrys to picohenrys (mH to pH) with precision. Learn the 10⁹ conversion factor, wideband filter impedance, and step-by-step calculation examples.",
  h1: "Millihenry to Picohenry Converter",
  introduction: [
    "Converting millihenrys (mH) to picohenrys (pH) traverses nine orders of magnitude (10⁹) across the SI inductance hierarchy. While millihenrys are standard in audio crossover networks, electromagnetic relays, and switch-mode power supply filter chokes, picohenrys govern the microscopic world of semiconductor interconnects, package parasitics, and superconducting quantum logic.",
    "Hardware engineers, RF designers, and electromagnetic simulation specialists rely on this conversion when modeling broad-spectrum electromagnetic interference (EMI) filters or analyzing high-frequency parasitic behavior across discrete inductors. This guide and calculator provides the mathematical formulas, conversion tables, and real-world design principles."
  ],
  quickAnswer: {
    text: "To convert millihenrys to picohenrys, multiply the millihenry value by 1,000,000,000 (one billion or 10⁹). For example, 0.000001 mH (which is 1 µH or 1,000 nH) equals exactly 1,000,000 picohenrys.",
    formulaDisplay: "1 mH = 1,000,000,000 pH (10⁹ pH)",
    subtext: "Shift the decimal point nine places to the right to convert millihenrys directly into picohenrys."
  },
  aboutSourceUnit: {
    title: "About the Millihenry (mH)",
    text: "The millihenry (symbol: mH) is an SI decimal submultiple representing one-thousandth of a henry (10⁻³ H). It is the most common unit for low-to-medium frequency inductive components, including passive audio speaker crossovers, guitar pickup coils, switch-mode power factor correction (PFC) chokes, and automotive sensor coils. Typical inductors in this range are wound around ferrite or powdered iron toroidal cores."
  },
  aboutTargetUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) is an SI submultiple representing one-trillionth of a henry (10⁻¹² H) or one-millionth of a microhenry. Picohenry inductances arise primarily as parasitic package inductances in integrated circuits, through-silicon vias (TSVs), multi-layer ceramic capacitor (MLCC) termination geometry, and superconducting Josephson junction loops in quantum computing."
  },
  relationship: "The relationship between millihenrys and picohenrys is governed by metric prefix mathematics. Because 'milli-' indicates 10⁻³ and 'pico-' indicates 10⁻¹², dividing 10⁻³ by 10⁻¹² yields 10⁹ (one billion). Therefore, one millihenry equals exactly one billion picohenrys.",
  relationshipTitle: "Prefix Ratio and Metric Scaling",
  relationshipItems: [
    { label: "Millihenrys (mH) to Picohenrys (pH)", value: "Multiply by 1,000,000,000 (10⁹)" },
    { label: "Picohenrys (pH) to Millihenrys (mH)", value: "Divide by 1,000,000,000 (or multiply by 10⁻⁹)" },
    { label: "Decade Difference", value: "9 orders of magnitude (10⁹)" },
    { label: "Intermediate Equivalents", value: "1 mH = 1,000 µH = 1,000,000 nH = 1,000,000,000 pH" }
  ],
  formula: {
    text: "To convert inductance from millihenrys into picohenrys, multiply the millihenry measurement by one billion.",
    math: "Inductance (pH) = Inductance (mH) × 1,000,000,000 = Inductance (mH) × 10⁹",
    subtext: "In scientific notation: pH = mH × 10⁹"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Two-Step Mental Conversion via Microhenrys",
    text: "When converting mentally across nine orders of magnitude, it is easiest to pass through microhenrys: first multiply millihenrys by 1,000 to obtain microhenrys (µH), then multiply microhenrys by 1,000,000 to get picohenrys (pH). For example, 0.005 mH → 5 µH → 5,000,000 pH."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Frequency Choke Parasitic Comparison",
        subtitle: "A power rail contains a 2.5 mH common-mode choke. High-frequency parasitic coupling across the terminal pads introduces 500 pH of unintended bypass inductance. Express the choke's nominal inductance in picohenrys to compute its dynamic range.",
        steps: [
          "State nominal value: L = 2.5 mH.",
          "Apply conversion: pH = 2.5 × 1,000,000,000.",
          "Calculate: 2,500,000,000 pH.",
          "Conclusion: 2.5 mH equals 2,500,000,000 pH, which is 5,000,000 times larger than the 500 pH parasitic coupling."
        ]
      },
      {
        title: "Example 2: SPICE Sub-circuit Component Conversion",
        subtitle: "A power filter schematic specifies a 0.00004 mH (40 nH) surface-mount bead inductor. Convert this rating to picohenrys for an electromagnetic package simulation.",
        steps: [
          "Identify value: L = 0.00004 mH (4 × 10⁻⁵ mH).",
          "Multiply by 10⁹: (4 × 10⁻⁵) × 10⁹ = 40,000.",
          "Conclusion: 0.00004 mH equals 40,000 pH (40 nH)."
        ]
      },
      {
        title: "Example 3: Miniature SMD Inductor Conversion",
        subtitle: "Convert 0.001 mH (1 µH) into picohenrys.",
        steps: [
          "Identify value: 0.001 mH.",
          "Calculate: 0.001 × 1,000,000,000 = 1,000,000.",
          "Conclusion: 0.001 mH equals 1,000,000 pH (1 million pH)."
        ]
      }
    ]
  },
  table: {
    title: "Millihenry to Picohenry Quick Reference Table",
    headers: ["Millihenrys (mH)", "Picohenrys (pH)", "Microhenry Equivalent", "Typical Application"],
    rows: [
      { fromVal: "0.000000001 mH", toVal: "1 pH", extra: "0.000001 µH (0.001 nH)", extra2: "On-chip metal interconnect via" },
      { fromVal: "0.00000001 mH", toVal: "10 pH", extra: "0.00001 µH (0.01 nH)", extra2: "SQUID quantum magnetometer loop" },
      { fromVal: "0.0000001 mH", toVal: "100 pH", extra: "0.0001 µH (0.1 nH)", extra2: "BGA solder ball parasitic loop" },
      { fromVal: "0.000001 mH", toVal: "1,000 pH", extra: "0.001 µH (1 nH)", extra2: "1 mm printed circuit board trace" },
      { fromVal: "0.00001 mH", toVal: "10,000 pH", extra: "0.01 µH (10 nH)", extra2: "Surface-mount chip inductor" },
      { fromVal: "0.0001 mH", toVal: "100,000 pH", extra: "0.1 µH (100 nH)", extra2: "High-frequency RF choke" },
      { fromVal: "0.001 mH", toVal: "1,000,000 pH", extra: "1.0 µH", extra2: "Buck converter switching inductor" },
      { fromVal: "0.01 mH", toVal: "10,000,000 pH", extra: "10.0 µH", extra2: "DC-DC boost converter choke" },
      { fromVal: "0.1 mH", toVal: "100,000,000 pH", extra: "100.0 µH", extra2: "Mains input EMI line filter" },
      { fromVal: "1.0 mH", toVal: "1,000,000,000 pH", extra: "1,000.0 µH", extra2: "Audio crossover inductor coil" }
    ]
  },
  expertNote: {
    title: "Self-Resonant Frequency (SRF) across Nine Decades",
    text: "In high-frequency power electronics, every physical millihenry inductor possesses parasitic inter-winding capacitance (typically 1 to 10 pF) and termination lead inductance (100 to 500 pH). Beyond its self-resonant frequency, the component ceases to act as an inductor and becomes capacitive, allowing high-frequency noise spikes to pass unattenuated."
  },
  applications: {
    title: "Real-World Engineering Scenarios",
    items: [
      {
        title: "Broadband EMI Filter Design",
        text: "Switching power supplies incorporate 1 mH to 10 mH common-mode chokes to satisfy automotive EMC compliance (CISPR 25). Designers model parasitic lead and via inductances in hundreds of picohenrys to predict high-frequency leakage above 100 MHz."
      },
      {
        title: "Automated RF & Microwave Test Fixtures",
        text: "Automated test equipment (ATE) testing multi-band wireless modules switches measurement ranges between millihenry power chokes and picohenry fixture interconnect parasitics on the same load board."
      },
      {
        title: "Precision Analog Instrumentation",
        text: "Low-noise sensor amplifiers utilize millihenry magnetic shielding beads. Understanding picohenry board parasitic coupling helps prevent high-frequency self-oscillation in high-gain op-amp loops."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Because millihenrys are nine orders of magnitude larger than picohenrys, converting mH to pH must always result in a much larger number.",
      "Losing count of zeros: Moving the decimal point 9 places requires careful tracking; 0.001 mH is 1,000,000 pH, not 100,000 pH.",
      "Confusing 'mH' (millihenry) with 'µH' (microhenry): A millihenry is 1,000 times larger than a microhenry. Using the wrong prefix creates a three-decade calculation error.",
      "Overlooking core saturation: While picohenry parasitics are linear air-core phenomena, physical millihenry inductors suffer from magnetic core saturation at elevated DC currents."
    ]
  },
  faqs: [
    {
      question: "How do I convert millihenrys to picohenrys?",
      answer: "To convert millihenrys (mH) to picohenrys (pH), multiply the millihenry value by 1,000,000,000 (one billion or 10⁹). For example, 0.001 mH multiplied by 10⁹ equals 1,000,000 pH."
    },
    {
      question: "How many picohenrys are in 1 millihenry?",
      answer: "There are exactly 1,000,000,000 (one billion) picohenrys in a single millihenry."
    },
    {
      question: "What is 0.01 mH in picohenrys?",
      answer: "0.01 mH is equal to 10,000,000 pH (10 million picohenrys or 10 µH)."
    },
    {
      question: "What is 1 mH in picohenrys?",
      answer: "1 mH is equal to 1,000,000,000 pH (one billion picohenrys)."
    },
    {
      question: "How do I convert picohenrys back to millihenrys?",
      answer: "To convert picohenrys back to millihenrys, divide the picohenry value by 1,000,000,000 or multiply by 10⁻⁹. For instance, 50,000,000 pH divided by 10⁹ equals 0.05 mH."
    },
    {
      question: "What is 0.000001 mH in picohenrys?",
      answer: "0.000001 mH equals exactly 1,000 pH (which is also equal to 1 nH or 0.001 µH)."
    },
    {
      question: "Why would an engineer need to convert mH to pH?",
      answer: "Engineers convert mH to pH when performing wideband frequency analysis, comparing macroscopic energy-storage chokes with sub-nanosecond packaging parasitics in SPICE simulation models."
    },
    {
      question: "What is the difference between mH, µH, nH, and pH?",
      answer: "Each prefix represents a 1,000-fold difference: 1 mH = 1,000 µH = 1,000,000 nH = 1,000,000,000 pH."
    },
    {
      question: "Can an inductor rated in millihenrys operate at gigahertz frequencies?",
      answer: "No. A millihenry inductor will self-resonate at kilohertz or low megahertz frequencies due to its inter-winding capacitance. At gigahertz frequencies, only nanohenry and picohenry inductors can function effectively."
    }
  ],
  relatedList: [
    { label: "Henry to Picohenry", from: "henry", to: "picohenry" },
    { label: "Microhenry to Picohenry", from: "microhenry", to: "picohenry" },
    { label: "Nanohenry to Picohenry", from: "nanohenry", to: "picohenry" },
    { label: "Picohenry to Millihenry", from: "picohenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Paul, Clayton R. <em>Introduction to Electromagnetic Compatibility</em>. Wiley-Interscience."
  ]
};
