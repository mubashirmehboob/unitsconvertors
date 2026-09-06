import { CustomArticleData } from "./types";

export const nanohenryToPicohenry: CustomArticleData = {
  fromUnitId: "nanohenry",
  toUnitId: "picohenry",
  seoTitle: "Nanohenry to Picohenry Converter - nH to pH",
  metaDescription: "Convert nanohenrys to picohenrys (nH to pH) with precision. Master the 1,000x multiplier, PCB trace parasitic modeling, and high-frequency circuit calculations.",
  h1: "Nanohenry to Picohenry Converter",
  introduction: [
    "Converting nanohenrys (nH) to picohenrys (pH) is a daily calculation for radio frequency (RF) hardware engineers, microwave designers, and high-speed printed circuit board (PCB) layout specialists. Operating across adjacent metric decades separated by a factor of 1,000, these units quantify the subtle inductive properties of microstrip lines, semiconductor package leads, and surface-mount components.",
    "At frequencies in the multi-gigahertz and terahertz domains, a single millimeter of copper trace or a miniature via transition introduces nanohenry- and picohenry-level inductances that alter signal integrity. This interactive converter and guide provides the mathematical formulas, conversion tables, and real-world high-frequency design insights."
  ],
  quickAnswer: {
    text: "To convert nanohenrys to picohenrys, multiply the nanohenry value by 1,000. For example, a 1.2 nH PCB via inductance equals exactly 1,200 picohenrys.",
    formulaDisplay: "1 nH = 1,000 pH (10³ pH)",
    subtext: "Shift the decimal point three positions to the right to convert nanohenrys into picohenrys."
  },
  aboutSourceUnit: {
    title: "About the Nanohenry (nH)",
    text: "The nanohenry (symbol: nH) represents one-billionth of a henry (10⁻⁹ H). It is the standard engineering unit for RF choke inductors, high-speed printed circuit board traces (typically 0.6 to 1.0 nH per millimeter of length), wireless antenna matching networks, and decoupling capacitor loop inductances."
  },
  aboutTargetUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H) or one-thousandth of a nanohenry. Picohenrys are used to specify microscopic electromagnetic parameters: the internal equivalent series inductance (ESL) of low-inductance ceramic capacitors, flip-chip package micro-bumps, through-silicon vias (TSVs), and superconducting quantum Josephson junctions."
  },
  relationship: "The relationship between nanohenrys and picohenrys is governed by SI metric prefixes: 'nano-' represents 10⁻⁹, and 'pico-' represents 10⁻¹². Dividing 10⁻⁹ by 10⁻¹² yields exactly 1,000 (10³). Therefore, one nanohenry contains 1,000 picohenrys.",
  relationshipTitle: "Prefix Ratio and Metric Scaling",
  relationshipItems: [
    { label: "Nanohenrys (nH) to Picohenrys (pH)", value: "Multiply by 1,000" },
    { label: "Picohenrys (pH) to Nanohenrys (nH)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Decimal Shift", value: "3 places to the right" },
    { label: "Ratio", value: "1 nH : 1,000 pH" }
  ],
  formula: {
    text: "To convert any inductance value from nanohenrys to picohenrys, multiply the nanohenry figure by 1,000.",
    math: "Inductance (pH) = Inductance (nH) × 1,000",
    subtext: "In scientific notation: pH = nH × 10³"
  },
  formulaTitle: "Conversion Equation",
  practicalTip: {
    title: "PCB Trace Inductance Rule of Thumb",
    text: "A standard 50-ohm microstrip trace on FR4 has an inductance of approximately 0.8 nH to 1.0 nH per millimeter. Converting this directly to picohenrys (800 pH to 1,000 pH per mm) makes it easy to calculate the parasitic impact of short stub traces on 10 Gbps+ signal lines."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Ground Via Inductance",
        subtitle: "A 3D electromagnetic via extraction indicates that a through-hole ground via in a 6-layer board exhibits 0.75 nH of partial self-inductance. Express this in picohenrys.",
        steps: [
          "State the initial value: L = 0.75 nH.",
          "Apply the conversion formula: pH = nH × 1,000.",
          "Calculate: 0.75 × 1,000 = 750.",
          "Conclusion: The via exhibits an inductance of 750 pH."
        ]
      },
      {
        title: "Example 2: 0402 Decoupling Capacitor ESL Specification",
        subtitle: "A high-frequency capacitor data sheet lists an equivalent series inductance (ESL) of 0.42 nH. Convert this value to picohenrys.",
        steps: [
          "Identify value: L = 0.42 nH.",
          "Multiply by 1,000: 0.42 × 1,000 = 420.",
          "Conclusion: 0.42 nH is equal to 420 pH."
        ]
      },
      {
        title: "Example 3: RF Matching Coil Inductance",
        subtitle: "Convert a 2.7 nH wireless antenna tuning inductor into picohenrys.",
        steps: [
          "State value: L = 2.7 nH.",
          "Calculate: 2.7 × 1,000 = 2,700.",
          "Conclusion: 2.7 nH equals 2,700 pH."
        ]
      }
    ]
  },
  table: {
    title: "Nanohenry to Picohenry Quick Reference Table",
    headers: ["Nanohenrys (nH)", "Picohenrys (pH)", "Microhenry Equivalent", "High-Frequency Example"],
    rows: [
      { fromVal: "0.02 nH", toVal: "20 pH", extra: "0.00002 µH", extra2: "Advanced flip-chip micro-bump" },
      { fromVal: "0.05 nH", toVal: "50 pH", extra: "0.00005 µH", extra2: "Interdigitated capacitor (IDC) ESL" },
      { fromVal: "0.1 nH", toVal: "100 pH", extra: "0.0001 µH", extra2: "Through-Silicon Via (TSV) transition" },
      { fromVal: "0.25 nH", toVal: "250 pH", extra: "0.00025 µH", extra2: "0201 surface-mount capacitor ESL" },
      { fromVal: "0.5 nH", toVal: "500 pH", extra: "0.0005 µH", extra2: "0.5 mm PCB trace parasitic" },
      { fromVal: "1.0 nH", toVal: "1,000 pH", extra: "0.001 µH", extra2: "1.0 mm PCB microstrip trace" },
      { fromVal: "2.2 nH", toVal: "2,200 pH", extra: "0.0022 µH", extra2: "2.4 GHz Wi-Fi antenna matching coil" },
      { fromVal: "4.7 nH", toVal: "4,700 pH", extra: "0.0047 µH", extra2: "VHF/UHF band RF filter choke" },
      { fromVal: "10.0 nH", toVal: "10,000 pH", extra: "0.01 µH", extra2: "High-frequency wire-bond loop" },
      { fromVal: "100.0 nH", toVal: "100,000 pH", extra: "0.1 µH", extra2: "Broadband ferrite bead choke" }
    ]
  },
  expertNote: {
    title: "Mutual Inductance in Dense BGA Pin Fields",
    text: "When converting nanohenrys to picohenrys for BGA pin fields, note that mutual loop inductance between adjacent signal and return pins can either boost or cancel parasitic inductance. By interleaving ground return vias, engineers reduce net loop inductance from ~1.2 nH (1,200 pH) down to under 200 pH."
  },
  applications: {
    title: "Engineering Applications Involving nH and pH",
    items: [
      {
        title: "High-Speed SerDes Channel Modeling",
        text: "In 112 Gbps PAM4 SerDes channels, discontinuities at PCB vias, connector pins, and AC coupling capacitor pads are modeled as lumped L-C networks where inductances range from 50 pH to 800 pH (0.05 nH to 0.8 nH)."
      },
      {
        title: "RF Antenna Matching and Smith Chart Analysis",
        text: "Designing 5G millimeter-wave front-end modules requires adjusting tuning inductors in fractions of a nanohenry. Converting between nH and pH allows fine-grained precision on Smith chart impedance loci."
      },
      {
        title: "Superconducting Quantum Bit (Qubit) Design",
        text: "Quantum engineers model microwave resonators and Josephson junction loops where total loop inductance balances geometric trace inductance (in nH) with Josephson kinetic inductance (in pH)."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Nanohenrys are 1,000 times larger than picohenrys, so converting nH to pH must always yield a larger number.",
      "Ignoring pad layout parasitics: Placing a 1 nH (1,000 pH) chip inductor on long mounting pads can easily add 500 pH of unwanted trace inductance, altering the tuning frequency.",
      "Misplacing the decimal point: Moving the decimal three places must be done carefully (e.g., 0.05 nH is 50 pH, not 500 pH).",
      "Assuming high Q-factor at high frequencies: At multi-gigahertz frequencies, skin effect increases AC resistance, reducing the inductor's quality factor (Q)."
    ]
  },
  faqs: [
    {
      question: "How do I convert nanohenrys to picohenrys?",
      answer: "To convert nanohenrys (nH) to picohenrys (pH), multiply the nanohenry value by 1,000. For instance, 4.7 nH multiplied by 1,000 equals 4,700 pH."
    },
    {
      question: "How many picohenrys are in 1 nanohenry?",
      answer: "There are exactly 1,000 picohenrys in 1 nanohenry."
    },
    {
      question: "What is 0.5 nH in picohenrys?",
      answer: "0.5 nH equals exactly 500 pH."
    },
    {
      question: "What is 10 nH in picohenrys?",
      answer: "10 nH equals 10,000 pH."
    },
    {
      question: "How do I convert picohenrys back to nanohenrys?",
      answer: "To convert picohenrys to nanohenrys, divide the picohenry value by 1,000. For example, 250 pH divided by 1,000 equals 0.25 nH."
    },
    {
      question: "What is 0.1 nH in picohenrys?",
      answer: "0.1 nH is equal to 100 pH."
    },
    {
      question: "Why are nanohenrys and picohenrys so critical in high-speed design?",
      answer: "At gigahertz frequencies, even small inductances create high inductive reactance (X_L = 2πfL). A 1 nH (1,000 pH) inductance at 10 GHz presents over 62 ohms of impedance, which can severely distort high-speed digital signals."
    },
    {
      question: "What is 0.025 nH in picohenrys?",
      answer: "0.025 nH equals exactly 25 pH."
    },
    {
      question: "How much inductance does a standard PCB via have in pH?",
      answer: "A standard PCB through-hole via typically has between 0.6 nH and 1.2 nH of inductance, which equals 600 pH to 1,200 pH."
    }
  ],
  relatedList: [
    { label: "Picohenry to Nanohenry", from: "picohenry", to: "nanohenry" },
    { label: "Microhenry to Picohenry", from: "microhenry", to: "picohenry" },
    { label: "Millihenry to Picohenry", from: "millihenry", to: "picohenry" },
    { label: "Henry to Picohenry", from: "henry", to: "picohenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Bogatin, Eric. <em>Signal and Power Integrity - Simplified</em>. Prentice Hall."
  ]
};
