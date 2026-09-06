import { CustomArticleData } from "./types";

export const picohenryToNanohenry: CustomArticleData = {
  fromUnitId: "picohenry",
  toUnitId: "nanohenry",
  seoTitle: "Picohenry to Nanohenry Converter - pH to nH",
  metaDescription: "Convert picohenrys to nanohenrys (pH to nH) with precision. Learn the 1,000 division rule, RF circuit tuning, PCB via modeling, and worked calculation examples.",
  h1: "Picohenry to Nanohenry Converter",
  introduction: [
    "Converting picohenrys (pH) to nanohenrys (nH) is an everyday calculation for radio-frequency (RF) designers, signal integrity engineers, and high-speed printed circuit board (PCB) layout specialists. Operating across adjacent metric decades separated by a factor of 1,000, these units quantify the subtle inductive characteristics of microstrip traces, package pins, and decoupling components.",
    "While high-frequency electromagnetic field solvers and wafer-level test equipment often report results in picohenrys, component catalogues and RF schematics traditionally specify values in nanohenrys. This engineering converter and guide details the mathematical relationship, decimal scaling rules, and real-world high-frequency design insights."
  ],
  quickAnswer: {
    text: "To convert picohenrys to nanohenrys, divide the picohenry value by 1,000, or multiply by 0.001. For example, 500 picohenrys equals exactly 0.5 nanohenrys.",
    formulaDisplay: "1 pH = 0.001 nH (10⁻³ nH)",
    subtext: "Shift the decimal point three positions to the left to convert picohenrys into nanohenrys."
  },
  aboutSourceUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H) or one-thousandth of a nanohenry. It is the primary unit used to characterize sub-millimeter electromagnetic effects: flip-chip package micro-bumps, through-silicon vias (TSVs), the equivalent series inductance (ESL) of ultra-low-inductance capacitors, and superconducting Josephson junctions in quantum computing."
  },
  aboutTargetUnit: {
    title: "About the Nanohenry (nH)",
    text: "The nanohenry (symbol: nH) represents one-billionth of a henry (10⁻⁹ H). It is the standard unit of measurement in RF circuit design, wireless antenna matching networks, high-frequency PCB traces (typically 0.6 to 1.0 nH per millimeter), and surface-mount chip inductors."
  },
  relationship: "The relationship between picohenrys and nanohenrys is governed by SI metric prefixes: 'pico-' indicates 10⁻¹², and 'nano-' indicates 10⁻⁹. Dividing 10⁻¹² by 10⁻⁹ yields 10⁻³ (0.001). Therefore, one picohenry equals 0.001 nanohenrys, and 1,000 picohenrys equal one nanohenry.",
  relationshipTitle: "Prefix Ratio and Metric Scaling",
  relationshipItems: [
    { label: "Picohenrys (pH) to Nanohenrys (nH)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Nanohenrys (nH) to Picohenrys (pH)", value: "Multiply by 1,000" },
    { label: "Decimal Shift", value: "3 places to the left" },
    { label: "Ratio", value: "1,000 pH : 1 nH" }
  ],
  formula: {
    text: "To convert any inductance value from picohenrys into nanohenrys, divide the number of picohenrys by 1,000.",
    math: "Inductance (nH) = Inductance (pH) ÷ 1,000 = Inductance (pH) × 0.001",
    subtext: "In scientific notation: nH = pH × 10⁻³"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Three-Digit Decimal Shift Rule",
    text: "Because the conversion factor is exactly 1,000, simply shift the decimal point three places to the left: 200 pH becomes 0.2 nH; 750 pH becomes 0.75 nH; and 2,200 pH becomes 2.2 nH."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Ground Return Via Parasitic Extraction",
        subtitle: "A 3D electromagnetic field solver extracts a ground via loop inductance of 850 picohenrys. Express this value in nanohenrys for an RF circuit simulation.",
        steps: [
          "State starting value: L = 850 pH.",
          "Apply conversion formula: nH = pH ÷ 1,000.",
          "Calculate: 850 ÷ 1,000 = 0.85.",
          "Conclusion: 850 pH equals exactly 0.85 nH."
        ]
      },
      {
        title: "Example 2: Decoupling Capacitor ESL Verification",
        subtitle: "A high-performance decoupling capacitor has an ESL of 240 picohenrys. Convert this to nanohenrys.",
        steps: [
          "Identify value: L = 240 pH.",
          "Multiply by 0.001: 240 × 0.001 = 0.24.",
          "Conclusion: 240 pH is equal to 0.24 nH."
        ]
      },
      {
        title: "Example 3: RF Matching Coil Inductance",
        subtitle: "Convert 3,900 pH into nanohenrys.",
        steps: [
          "State value: L = 3,900 pH.",
          "Divide by 1,000: 3,900 ÷ 1,000 = 3.9.",
          "Conclusion: 3,900 pH equals 3.9 nH (a standard E24 inductor value)."
        ]
      }
    ]
  },
  table: {
    title: "Picohenry to Nanohenry Quick Reference Table",
    headers: ["Picohenrys (pH)", "Nanohenrys (nH)", "Microhenry Equivalent", "Engineering Context"],
    rows: [
      { fromVal: "20 pH", toVal: "0.02 nH", extra: "0.00002 µH", extra2: "Advanced flip-chip micro-bump" },
      { fromVal: "50 pH", toVal: "0.05 nH", extra: "0.00005 µH", extra2: "Interdigitated capacitor (IDC) ESL" },
      { fromVal: "100 pH", toVal: "0.1 nH", extra: "0.0001 µH", extra2: "Through-Silicon Via (TSV) transition" },
      { fromVal: "250 pH", toVal: "0.25 nH", extra: "0.00025 µH", extra2: "0201 SMD capacitor package ESL" },
      { fromVal: "500 pH", toVal: "0.5 nH", extra: "0.0005 µH", extra2: "0.5 mm PCB trace parasitic" },
      { fromVal: "1,000 pH", toVal: "1.0 nH", extra: "0.001 µH", extra2: "1.0 mm PCB microstrip trace" },
      { fromVal: "2,200 pH", toVal: "2.2 nH", extra: "0.0022 µH", extra2: "2.4 GHz Wi-Fi antenna tuning coil" },
      { fromVal: "4,700 pH", toVal: "4.7 nH", extra: "0.0047 µH", extra2: "VHF/UHF RF choke" },
      { fromVal: "10,000 pH", toVal: "10.0 nH", extra: "0.01 µH", extra2: "Wire-bond package loop" },
      { fromVal: "100,000 pH", toVal: "100.0 nH", extra: "0.1 µH", extra2: "Broadband ferrite bead" }
    ]
  },
  expertNote: {
    title: "Skin Effect and Inductance Reduction at Multi-GHz Frequencies",
    text: "In copper conductors at frequencies above 1 GHz, skin effect restricts current flow to the outer perimeter of the conductor. This reduces the internal magnetic field, causing internal inductance to drop by up to 50 pH to 100 pH (0.05 nH to 0.1 nH). High-frequency field solvers account for this frequency-dependent effect when converting pH to nH."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "High-Speed SerDes Discontinuity Compensation",
        text: "Signal integrity engineers convert via parasitics extracted in picohenrys (e.g., 650 pH) to nanohenrys (0.65 nH) to configure lumped transmission line compensation networks in 112 Gbps PAM4 channels."
      },
      {
        title: "RF Front-End Matching Network Design",
        text: "Matching networks on 5G sub-6 GHz power amplifiers require tuning inductances between 1 nH and 15 nH. Converting field solver parasitic results from pH to nH allows direct correlation with vendor S-parameter libraries."
      },
      {
        title: "Power Distribution Network (PDN) Impedance Modeling",
        text: "Decoupling capacitor loop inductance is minimized by optimizing PCB pad geometries. Converting loop inductance from picohenrys (e.g., 350 pH) to nanohenrys (0.35 nH) ensures accurate target impedance verification up to 1 GHz."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Because picohenrys are 1,000 times smaller than nanohenrys, converting pH to nH must always produce a smaller number.",
      "Misplacing leading zeros: 50 pH is 0.05 nH, not 0.5 nH. Shifting three decimal places requires careful placement of zeros.",
      "Confusing 'pH' with 'pF': Mixing up picohenrys (inductance) and picofarads (capacitance) in high-frequency LC resonance calculations.",
      "Ignoring pad layout parasitics: Adding a 1.0 nH inductor on poorly laid-out PCB pads can inadvertently add 300 pH (0.3 nH) of parasitic trace inductance."
    ]
  },
  faqs: [
    {
      question: "How do I convert picohenrys to nanohenrys?",
      answer: "To convert picohenrys (pH) to nanohenrys (nH), divide the picohenry value by 1,000, or multiply by 0.001. For instance, 2,200 pH divided by 1,000 equals 2.2 nH."
    },
    {
      question: "How many nanohenrys is 1 picohenry?",
      answer: "1 picohenry is equal to 0.001 nanohenrys (1.0 × 10⁻³ nH). One nanohenry contains exactly 1,000 picohenrys."
    },
    {
      question: "What is 1,000 pH in nanohenrys?",
      answer: "1,000 pH is equal to exactly 1.0 nH (which is also equal to 0.001 µH)."
    },
    {
      question: "What is 100 pH in nanohenrys?",
      answer: "100 pH equals 0.1 nH."
    },
    {
      question: "How do I convert nanohenrys back to picohenrys?",
      answer: "To convert nanohenrys back to picohenrys, multiply the nanohenry value by 1,000. For example, 4.7 nH multiplied by 1,000 equals 4,700 pH."
    },
    {
      question: "What is 50 pH in nanohenrys?",
      answer: "50 pH equals 0.05 nH."
    },
    {
      question: "What is 10,000 pH in nanohenrys?",
      answer: "10,000 pH equals 10.0 nH."
    },
    {
      question: "Why do RF engineers use both pH and nH?",
      answer: "RF engineers specify discrete chip inductors and filter components in nanohenrys, while 3D field solvers and silicon packaging tools extract parasitic loop inductances in picohenrys."
    },
    {
      question: "How much inductance does a 1 mm PCB trace have in nH?",
      answer: "A 1 mm surface-mount microstrip trace typically has approximately 0.8 nH to 1.0 nH of inductance, which equals 800 pH to 1,000 pH."
    }
  ],
  relatedList: [
    { label: "Nanohenry to Picohenry", from: "nanohenry", to: "picohenry" },
    { label: "Picohenry to Microhenry", from: "picohenry", to: "microhenry" },
    { label: "Picohenry to Henry", from: "picohenry", to: "henry" },
    { label: "Picohenry to Millihenry", from: "picohenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Pozar, David M. <em>Microwave Engineering</em>. John Wiley & Sons."
  ]
};
