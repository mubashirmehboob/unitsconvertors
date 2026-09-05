import { CustomArticleData } from "./types";

export const nanofaradToMillifarad: CustomArticleData = {
  fromUnitId: "nanofarad",
  toUnitId: "millifarad",
  seoTitle: "Nanofarad to Millifarad Converter - nF to mF",
  metaDescription: "Convert nanofarads to millifarads (nF to mF) with ease. Understand the 10⁻⁶ scaling ratio, power distribution bypass networks, and worked examples.",
  h1: "Nanofarad to Millifarad Converter",
  introduction: [
    "Converting nanofarads (nF) to millifarads (mF) transitions between two widely divergent domains of electronic capacitance. While nanofarads quantify compact components used for high-frequency signal shaping, timing, and RF decoupling, millifarads measure massive energy storage capacitors deployed in DC power supplies, motor inverters, and audio power amplifiers.",
    "Because a millifarad is one thousand times larger than a microfarad and one million times larger than a nanofarad, navigating between them requires shifting six decimal places. This engineering converter ensures quick and accurate conversion, helping you model power distribution networks and multi-stage filter systems with precision."
  ],
  quickAnswer: {
    text: "To convert nanofarads to millifarads, divide your nanofarad value by 1,000,000 (one million), or multiply by 10⁻⁶. For instance, a 100,000 nF capacitor (equivalent to 100 µF) equals 0.1 mF.",
    formulaDisplay: "1 nF = 0.000001 mF (10⁻⁶ mF)",
    subtext: "Shift the decimal point six places to the left to convert nanofarads into millifarads."
  },
  aboutSourceUnit: {
    title: "About the Nanofarad (nF)",
    text: "The nanofarad (symbol: nF) represents one-billionth of a farad (10⁻⁹ F). It is the standard metric designation for mid-range electrostatic capacitance, predominantly served by multi-layer ceramic capacitors (MLCCs) and metallized plastic film capacitors. Nanofarad devices offer exceptional stability across megahertz frequencies, low parasitic inductance, and tight tolerances, making them ideal for signal filtering, resonant tanks, and transient damping."
  },
  aboutTargetUnit: {
    title: "About the Millifarad (mF)",
    text: "The millifarad (symbol: mF) represents one-thousandth of a farad (10⁻³ F) or 1,000 microfarads (µF). Millifarad-range components are almost exclusively aluminum electrolytic or electric double-layer capacitors designed for high volumetric energy density. They serve as primary ripple filters in AC-to-DC rectifiers, uninterruptible power supplies (UPS), and pulsed power drivers."
  },
  relationship: "The relationship between nanofarads and millifarads is established by the SI prefixes 'nano-' (10⁻⁹) and 'milli-' (10⁻³). The difference between their exponents is 10⁶, meaning one millifarad contains exactly one million nanofarads.",
  relationshipTitle: "Prefix Ratio and Decimal Hierarchy",
  relationshipItems: [
    { label: "Nanofarads (nF) to Millifarads (mF)", value: "Divide by 1,000,000 (or multiply by 10⁻⁶)" },
    { label: "Millifarads (mF) to Nanofarads (nF)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Intermediary Unit", value: "1 mF = 1,000 µF = 1,000,000 nF" },
    { label: "Decimal Shift", value: "6 places to the left" }
  ],
  formula: {
    text: "To convert a capacitance value from nanofarads to millifarads, divide the number of nanofarads by 1,000,000.",
    math: "Capacitance (mF) = Capacitance (nF) ÷ 1,000,000 = Capacitance (nF) × 10⁻⁶",
    subtext: "In scientific notation: mF = nF × 10⁻⁶"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Parallel Decoupling Across Multiple Decades",
    text: "High-performance power distribution networks (PDNs) never rely on bulk millifarad capacitors alone. Because large electrolytic capacitors exhibit high equivalent series inductance (ESL) and resistance (ESR), designers place small ceramic nanofarad capacitors (e.g., 100 nF = 0.0001 mF) directly in parallel. The millifarad capacitor handles low-frequency current surges, while the nanofarad capacitor shunts high-frequency switching spikes to ground."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Bulk Decoupling Cap Bank Modeling",
        subtitle: "A high-current microcontroller motherboard specifies a secondary filter block containing five parallel 100,000 nF ceramic capacitors. Express the total capacitance of this block in millifarads.",
        steps: [
          "Calculate total capacitance in nanofarads: 5 × 100,000 nF = 500,000 nF.",
          "Apply the conversion formula: mF = nF ÷ 1,000,000.",
          "Calculate: 500,000 ÷ 1,000,000 = 0.5 mF.",
          "Conclusion: The 500,000 nF capacitor array provides 0.5 mF (500 µF) of localized charge reservoir."
        ]
      },
      {
        title: "Example 2: Universal High-Frequency Bypass Sizing",
        subtitle: "Convert a standard 1,000 nF (1 µF) ceramic bypass capacitor into millifarads for a system-level power budget spreadsheet.",
        steps: [
          "Note the given value: C = 1,000 nF.",
          "Divide by one million: 1,000 ÷ 1,000,000 = 0.001 mF.",
          "Conclusion: 1,000 nF is equal to 0.001 mF (or 1 µF)."
        ]
      },
      {
        title: "Example 3: Analog Audio Power Supply Rail Filter",
        subtitle: "An engineer is comparing a 47,000 nF film snubber capacitor with a 10 mF main reservoir capacitor. Express the snubber in millifarads to compare orders of magnitude.",
        steps: [
          "State the snubber capacitance: C = 47,000 nF.",
          "Calculate: 47,000 × 10⁻⁶ = 0.047 mF.",
          "Conclusion: The 47,000 nF capacitor equals 0.047 mF (47 µF), representing roughly 0.47% of the main reservoir capacitor."
        ]
      }
    ]
  },
  table: {
    title: "Nanofarad to Millifarad Conversion Reference Table",
    headers: ["Nanofarads (nF)", "Millifarads (mF)", "Microfarad Equivalent", "Common Circuit Role"],
    rows: [
      { fromVal: "100 nF", toVal: "0.0001 mF", extra: "0.1 µF | Universal logic IC high-frequency bypass" },
      { fromVal: "470 nF", toVal: "0.00047 mF", extra: "0.47 µF | Switched-mode power supply snubber" },
      { fromVal: "1,000 nF", toVal: "0.001 mF", extra: "1 µF | LDO regulator output capacitor" },
      { fromVal: "4,700 nF", toVal: "0.0047 mF", extra: "4.7 µF | Audio preamplifier DC blocking capacitor" },
      { fromVal: "10,000 nF", toVal: "0.01 mF", extra: "10 µF | Tantalum point-of-load decoupling" },
      { fromVal: "47,000 nF", toVal: "0.047 mF", extra: "47 µF | DC-DC buck converter output stage" },
      { fromVal: "100,000 nF", toVal: "0.1 mF", extra: "100 µF | Linear regulator bulk smoothing" },
      { fromVal: "470,000 nF", toVal: "0.47 mF", extra: "470 µF | Audio power amplifier rail decoupling" },
      { fromVal: "1,000,000 nF", toVal: "1.0 mF", extra: "1,000 µF | Standard full-wave bridge rectifier filter" },
      { fromVal: "10,000,000 nF", toVal: "10.0 mF", extra: "10,000 µF | High-power linear bench power supply" }
    ]
  },
  expertNote: {
    title: "Watch Out for 'mF' vs 'µF' Typography",
    text: "In many older American electronics catalogs and schematics, 'mF' or 'MFD' was occasionally used as a shorthand for microfarads rather than true millifarads. Today, modern international engineering standards reserve 'mF' strictly for millifarads (10⁻³ F) and 'µF' (or 'uF') for microfarads (10⁻⁶ F). Always check whether a circuit calls for a large bulk capacitor (mF) or an ordinary bypass capacitor (µF)."
  },
  applications: {
    title: "Practical System-Level Scenarios",
    items: [
      {
        title: "Power Distribution Network (PDN) Impedance Profiling",
        text: "Modern microprocessor power planes must maintain a flat impedance profile from DC up to gigahertz frequencies. Modeling this impedance curve requires aggregating bulk millifarad storage capacitors with intermediate and high-speed nanofarad MLCCs on a unified mathematical basis."
      },
      {
        title: "Switch-Mode Inverter DC-Link Optimization",
        text: "Electric vehicle traction inverters employ large multi-millifarad DC-link film or electrolytic capacitor banks to absorb switching ripple from high-power IGBT/SiC modules, paired with nanofarad snubber capacitors to quench high-voltage inductive ringing."
      },
      {
        title: "Audio Crossover and Power Stage Design",
        text: "High-fidelity audio equipment combines heavy millifarad transformer filter banks for hum suppression with delicate nanofarad film capacitors in the active crossover tone shaping circuits."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Nanofarads are six orders of magnitude smaller than millifarads. Dividing by 1,000,000 is required when moving from nF to mF.",
      "Conflating 'mF' (millifarad) with 'µF' (microfarad): 1 mF equals 1,000 µF. An order of magnitude error of 1,000x can lead to disastrous instability or severe component over-sizing.",
      "Assuming high ESR in nanofarad ranges: Unlike millifarad electrolytic capacitors, nanofarad ceramic capacitors feature negligible ESR, making them suitable for high-frequency bypass.",
      "Misplacing the decimal point: Shifting six positions requires attention to leading zeros; 470 nF becomes 0.00047 mF, not 0.0047 mF."
    ]
  },
  faqs: [
    {
      question: "How do I convert nanofarads to millifarads?",
      answer: "To convert nanofarads (nF) to millifarads (mF), divide the nanofarad value by 1,000,000 or multiply by 10⁻⁶. For instance, 500,000 nF divided by 1,000,000 equals 0.5 mF."
    },
    {
      question: "How many millifarads is 1 nanofarad?",
      answer: "1 nanofarad equals exactly 0.000001 millifarads (1 × 10⁻⁶ mF). One millifarad contains precisely one million nanofarads."
    },
    {
      question: "What is 1,000,000 nF in millifarads?",
      answer: "1,000,000 nF is exactly 1 mF. This value is also equivalent to 1,000 µF or 0.001 F, which is a common value for a power supply filter capacitor."
    },
    {
      question: "What is 100 nF in millifarads?",
      answer: "100 nF equals 0.0001 mF (or 0.1 µF). In scientific notation, this is 1 × 10⁻⁴ mF."
    },
    {
      question: "How do I convert millifarads back to nanofarads?",
      answer: "To convert millifarads to nanofarads, multiply the millifarad value by 1,000,000. For example, 2.2 mF multiplied by 1,000,000 equals 2,200,000 nF (or 2,200 µF)."
    },
    {
      question: "Why is the millifarad unit less common on small capacitor packages?",
      answer: "Physical capacitor manufacturing traditionally branded small-to-medium parts in microfarads (µF) and picofarads (pF). The millifarad has grown increasingly popular as supercapacitors and high-density electrolytic capacitors have become widespread."
    },
    {
      question: "What is the relationship between nF, µF, and mF?",
      answer: "The three units step by factors of 1,000: 1,000 nF = 1 µF, and 1,000 µF = 1 mF. Therefore, 1,000,000 nF = 1 mF."
    },
    {
      question: "Can I replace a 0.001 mF capacitor with a 1,000 nF capacitor?",
      answer: "Yes. 0.001 mF and 1,000 nF represent identical capacitance (1 µF). Ensure the replacement matches or exceeds the required working voltage and frequency response."
    },
    {
      question: "What is 47,000 nF in mF?",
      answer: "47,000 nF is equal to 0.047 mF, which is also equivalent to 47 µF."
    }
  ],
  relatedList: [
    { label: "Nanofarad to Microfarad", from: "nanofarad", to: "microfarad" },
    { label: "Nanofarad to Picofarad", from: "nanofarad", to: "picofarad" },
    { label: "Nanofarad to Farad", from: "nanofarad", to: "farad" },
    { label: "Millifarad to Nanofarad", from: "millifarad", to: "nanofarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "IEC 60384: <em>Fixed capacitors for use in electronic equipment</em>."
  ]
};
