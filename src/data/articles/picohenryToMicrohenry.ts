import { CustomArticleData } from "./types";

export const picohenryToMicrohenry: CustomArticleData = {
  fromUnitId: "picohenry",
  toUnitId: "microhenry",
  seoTitle: "Picohenry to Microhenry Converter - pH to µH",
  metaDescription: "Convert picohenrys to microhenrys (pH to µH) with precision. Learn the 1,000,000 division rule, power converter parasitic modeling, and worked examples.",
  h1: "Picohenry to Microhenry Converter",
  introduction: [
    "Converting picohenrys (pH) to microhenrys (µH) spans six orders of magnitude (10⁶) across the metric inductance scale. While microhenrys represent the industry standard for switch-mode power converter inductors, RF filter chokes, and energy storage coils, picohenrys quantify package parasitics, capacitor equivalent series inductance (ESL), and semiconductor lead loop geometries.",
    "Engineers frequently convert between these units when evaluating high-frequency switching ringing, decoupling capacitor effectiveness, and power distribution network (PDN) impedance. This converter and comprehensive technical guide provides the conversion equations, practical reference tables, and real-world design examples."
  ],
  quickAnswer: {
    text: "To convert picohenrys to microhenrys, divide the picohenry value by 1,000,000 (one million), or multiply by 10⁻⁶. For example, 1,000,000 picohenrys equals exactly 1 microhenry.",
    formulaDisplay: "1 pH = 0.000001 µH (10⁻⁶ µH)",
    subtext: "Shift the decimal point six places to the left to convert picohenrys into microhenrys."
  },
  aboutSourceUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H) or one-millionth of a microhenry. In high-speed hardware engineering, picohenrys measure the parasitic inductance of printed circuit board vias, flip-chip package bumps, surface-mount component terminations, and superconducting Josephson junctions in quantum computing."
  },
  aboutTargetUnit: {
    title: "About the Microhenry (µH)",
    text: "The microhenry (symbol: µH or uH) represents one-millionth of a henry (10⁻⁶ H). It is the most common inductance unit in electronic engineering, universally specified for buck and boost DC-DC switching regulators, class-D audio filters, automotive electronics, and wireless charging transmitter coils."
  },
  relationship: "The relationship between picohenrys and microhenrys is governed by metric prefix scaling: 'pico-' indicates 10⁻¹², and 'micro-' indicates 10⁻⁶. Dividing 10⁻¹² by 10⁻⁶ yields 10⁻⁶ (one-millionth). Consequently, one microhenry contains exactly one million (10⁶) picohenrys.",
  relationshipTitle: "Prefix Ratio and Decimal Scale",
  relationshipItems: [
    { label: "Picohenrys (pH) to Microhenrys (µH)", value: "Divide by 1,000,000 (or multiply by 10⁻⁶)" },
    { label: "Microhenrys (µH) to Picohenrys (pH)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Decimal Shift", value: "6 places to the left" },
    { label: "Intermediary Steps", value: "1 µH = 1,000 nH = 1,000,000 pH" }
  ],
  formula: {
    text: "To convert any inductance value from picohenrys into microhenrys, divide the number of picohenrys by 1,000,000.",
    math: "Inductance (µH) = Inductance (pH) ÷ 1,000,000 = Inductance (pH) × 10⁻⁶",
    subtext: "In scientific notation: µH = pH × 10⁻⁶"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Mental Calculation via Nanohenrys",
    text: "Because shifting six decimal places can be cumbersome, break the conversion into two steps of three: first divide picohenrys by 1,000 to obtain nanohenrys (nH), then divide nanohenrys by 1,000 to get microhenrys (µH). For example: 47,000 pH → 47 nH → 0.047 µH."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Translating RF Choke Inductance",
        subtitle: "A simulation model lists a high-frequency choke inductance as 150,000 picohenrys. Express this value in microhenrys for component selection.",
        steps: [
          "State given value: L = 150,000 pH.",
          "Apply conversion formula: µH = pH ÷ 1,000,000.",
          "Calculate: 150,000 ÷ 1,000,000 = 0.15.",
          "Conclusion: 150,000 pH is exactly 0.15 µH (or 150 nH)."
        ]
      },
      {
        title: "Example 2: Comparing Capacitor ESL to Main Power Inductor",
        subtitle: "A DC-DC converter uses a 2.2 µH main inductor. Its output filter capacitor has an equivalent series inductance of 450 pH. Convert 450 pH to microhenrys to compare their magnitudes.",
        steps: [
          "Convert 450 pH to microhenrys: 450 ÷ 1,000,000 = 0.00045 µH.",
          "Compute ratio: 2.2 µH ÷ 0.00045 µH ≈ 4,888.",
          "Conclusion: The main power inductor is nearly 5,000 times larger than the capacitor's parasitic ESL."
        ]
      },
      {
        title: "Example 3: Switch-Mode Inductor Conversion",
        subtitle: "Convert 3,300,000 pH into microhenrys.",
        steps: [
          "State value: L = 3,300,000 pH.",
          "Divide by one million: 3,300,000 ÷ 1,000,000 = 3.3.",
          "Conclusion: 3,300,000 pH equals 3.3 µH."
        ]
      }
    ]
  },
  table: {
    title: "Picohenry to Microhenry Quick Reference Table",
    headers: ["Picohenrys (pH)", "Microhenrys (µH)", "Nanohenry Equivalent", "Typical Application"],
    rows: [
      { fromVal: "100 pH", toVal: "0.0001 µH", extra: "0.1 nH", extra2: "Flip-chip BGA solder ball" },
      { fromVal: "500 pH", toVal: "0.0005 µH", extra: "0.5 nH", extra2: "PCB through-hole via" },
      { fromVal: "1,000 pH", toVal: "0.001 µH", extra: "1.0 nH", extra2: "1 mm PCB microstrip trace" },
      { fromVal: "4,700 pH", toVal: "0.0047 µH", extra: "4.7 nH", extra2: "RF antenna matching coil" },
      { fromVal: "10,000 pH", toVal: "0.01 µH", extra: "10.0 nH", extra2: "High-frequency choke bead" },
      { fromVal: "47,000 pH", toVal: "0.047 µH", extra: "47.0 nH", extra2: "VHF band tuning inductor" },
      { fromVal: "100,000 pH", toVal: "0.1 µH", extra: "100.0 nH", extra2: "Point-of-load buck inductor" },
      { fromVal: "470,000 pH", toVal: "0.47 µH", extra: "470.0 nH", extra2: "Multi-phase CPU core inductor" },
      { fromVal: "1,000,000 pH", toVal: "1.0 µH", extra: "1,000.0 nH", extra2: "Standard 12V-to-3.3V buck inductor" },
      { fromVal: "10,000,000 pH", toVal: "10.0 µH", extra: "10,000.0 nH", extra2: "Automotive input filter choke" }
    ]
  },
  expertNote: {
    title: "High-Frequency Parasitic Bypass Modeling",
    text: "In switched-mode power supplies, power inductors are rated in microhenrys, but PCB layout parasitics around the switching node are measured in hundreds of picohenrys. Entering both on the same schematic can cause matrix conditioning problems in SPICE simulators. Normalizing values and verifying unit suffixes prevents false convergence errors."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "DC-DC Converter Layout Optimization",
        text: "Designers convert PCB trace loop parasitics (e.g., 1,500 pH) to microhenrys (0.0015 µH) to compare them with the main switching inductor (1 µH) and evaluate high-frequency voltage overshoot on switching MOSFETs."
      },
      {
        title: "Power Distribution Network (PDN) Simulation",
        text: "Modeling processor power delivery requires converting multi-layer ceramic capacitor (MLCC) parasitic ESL (typically 200 pH to 800 pH) into microhenrys to align with low-frequency power supply impedances."
      },
      {
        title: "Component Cataloging and Cross-Referencing",
        text: "Distributor parametric databases list surface-mount inductors in microhenrys, while electromagnetic simulation packages extract loop inductances in picohenrys. Converting between them prevents ordering errors."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a small unit (pH) to a larger unit (µH) must yield a smaller numeric value.",
      "Misplacing leading zeros: 1,000 pH is 0.001 µH, not 0.01 µH. Moving the decimal point six places requires careful checking.",
      "Confusing 'µH' (microhenry) with 'mH' (millihenry): Confusing micro- and milli- creates a 1,000-fold discrepancy.",
      "Ignoring self-resonant frequency: While a 1 µH (1,000,000 pH) inductor behaves inductively at low frequencies, its parasitic capacitance causes it to behave capacitively above its SRF."
    ]
  },
  faqs: [
    {
      question: "How do I convert picohenrys to microhenrys?",
      answer: "To convert picohenrys (pH) to microhenrys (µH), divide the picohenry value by 1,000,000 or multiply by 10⁻⁶. For example, 470,000 pH divided by 1,000,000 equals 0.47 µH."
    },
    {
      question: "How many microhenrys is 1 picohenry?",
      answer: "1 picohenry is equal to 0.000001 microhenrys (1.0 × 10⁻⁶ µH). One microhenry contains exactly 1,000,000 picohenrys."
    },
    {
      question: "What is 1,000,000 pH in microhenrys?",
      answer: "1,000,000 pH equals exactly 1.0 µH (which is also equal to 1,000 nH)."
    },
    {
      question: "What is 100,000 pH in microhenrys?",
      answer: "100,000 pH equals 0.1 µH (or 100 nH)."
    },
    {
      question: "How do I convert microhenrys back to picohenrys?",
      answer: "To convert microhenrys back to picohenrys, multiply the microhenry value by 1,000,000. For instance, 2.2 µH multiplied by 1,000,000 equals 2,200,000 pH."
    },
    {
      question: "What is 10,000 pH in microhenrys?",
      answer: "10,000 pH equals 0.01 µH (or 10 nH)."
    },
    {
      question: "What is 500 pH in microhenrys?",
      answer: "500 pH equals 0.0005 µH (or 0.5 nH)."
    },
    {
      question: "What is the relationship between pH, nH, and µH?",
      answer: "1,000,000 pH = 1,000 nH = 1 µH. Each step up represents a factor of 1,000."
    },
    {
      question: "Why do engineers convert pH to µH?",
      answer: "Engineers convert pH to µH to compare high-frequency package and layout parasitics directly with discrete inductors and filter components specified in microhenrys."
    }
  ],
  relatedList: [
    { label: "Microhenry to Picohenry", from: "microhenry", to: "picohenry" },
    { label: "Picohenry to Nanohenry", from: "picohenry", to: "nanohenry" },
    { label: "Picohenry to Henry", from: "picohenry", to: "henry" },
    { label: "Picohenry to Millihenry", from: "picohenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Montrose, Mark I. <em>Printed Circuit Board Design Techniques for EMC Compliance</em>. IEEE Press."
  ]
};
