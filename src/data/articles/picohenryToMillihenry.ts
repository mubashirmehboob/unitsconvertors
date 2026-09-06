import { CustomArticleData } from "./types";

export const picohenryToMillihenry: CustomArticleData = {
  fromUnitId: "picohenry",
  toUnitId: "millihenry",
  seoTitle: "Picohenry to Millihenry Converter - pH to mH",
  metaDescription: "Convert picohenrys to millihenrys (pH to mH) with precision. Learn the 10⁻⁹ scaling factor, dynamic impedance range analysis, and worked examples.",
  h1: "Picohenry to Millihenry Converter",
  introduction: [
    "Converting picohenrys (pH) to millihenrys (mH) traverses nine orders of magnitude (10⁻⁹) across the SI metric inductance spectrum. This calculation bridges the dimensional boundary between microscopic semiconductor interconnects and heavy macroscopic electromagnetic components.",
    "While high-frequency engineers measure package parasitics and quantum Josephson junctions in tens of picohenrys, power supply and audio engineers specify filter chokes, relays, and crossover inductors in millihenrys. This converter and technical guide details the mathematical relationship, decimal scaling rules, and mixed-signal circuit analysis techniques."
  ],
  quickAnswer: {
    text: "To convert picohenrys to millihenrys, divide the picohenry value by 1,000,000,000 (one billion), or multiply by 10⁻⁹. For example, 1,000,000,000 picohenrys equals exactly 1 millihenry.",
    formulaDisplay: "1 pH = 0.000000001 mH (10⁻⁹ mH)",
    subtext: "Shift the decimal point nine places to the left to convert picohenrys into millihenrys."
  },
  aboutSourceUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H). It is the standard unit for quantifying high-frequency parasitic inductances in integrated circuit packaging, flip-chip solder bumps, multi-layer ceramic capacitor (MLCC) terminations, and superconducting quantum logic circuits (such as RSFQ and SQUID devices)."
  },
  aboutTargetUnit: {
    title: "About the Millihenry (mH)",
    text: "The millihenry (symbol: mH) represents one-thousandth of a henry (10⁻³ H) or 1,000 microhenrys. Millihenry-range inductors are macroscopic wire-wound devices utilizing ferrite, iron powder, or laminated silicon steel cores. They serve as energy-storage elements in switched-mode power factor correction (PFC) stages, passive audio crossovers, and industrial noise filters."
  },
  relationship: "The relationship between picohenrys and millihenrys is established by the SI metric prefixes 'pico-' (10⁻¹²) and 'milli-' (10⁻³). Dividing 10⁻¹² by 10⁻³ produces 10⁻⁹ (one-billionth). Consequently, one millihenry contains exactly one billion (10⁹) picohenrys.",
  relationshipTitle: "Prefix Ratio and Decimal Scale",
  relationshipItems: [
    { label: "Picohenrys (pH) to Millihenrys (mH)", value: "Divide by 1,000,000,000 (or multiply by 10⁻⁹)" },
    { label: "Millihenrys (mH) to Picohenrys (pH)", value: "Multiply by 1,000,000,000 (10⁹)" },
    { label: "Decimal Shift", value: "9 places to the left" },
    { label: "Intermediary Steps", value: "1 mH = 1,000 µH = 1,000,000 nH = 1,000,000,000 pH" }
  ],
  formula: {
    text: "To convert any inductance value from picohenrys to millihenrys, divide the picohenry measurement by one billion.",
    math: "Inductance (mH) = Inductance (pH) ÷ 1,000,000,000 = Inductance (pH) × 10⁻⁹",
    subtext: "In scientific notation: mH = pH × 10⁻⁹"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Stepwise Conversion through Microhenrys",
    text: "When performing calculations without a scientific calculator, convert through microhenrys: first divide the picohenry value by 1,000,000 to get microhenrys (µH), then divide by 1,000 to get millihenrys (mH). For instance: 4,700,000,000 pH → 4,700 µH → 4.7 mH."
  },
  examples: {
    title: "Step-by-Step Practical Worked Examples",
    items: [
      {
        title: "Example 1: High-Inductance Choke Value Conversion",
        subtitle: "A simulation tool outputs an aggregated filter inductance of 2,200,000,000 picohenrys. Express this value in millihenrys for procurement.",
        steps: [
          "State the given value: L = 2,200,000,000 pH.",
          "Apply the formula: mH = pH ÷ 1,000,000,000.",
          "Calculate: 2,200,000,000 ÷ 1,000,000,000 = 2.2.",
          "Conclusion: 2,200,000,000 pH equals exactly 2.2 mH."
        ]
      },
      {
        title: "Example 2: Comparing Package Parasitics to Power Inductor",
        subtitle: "A power converter board incorporates a 1.0 mH common-mode choke. A PCB ground via transition contributes 800 pH of parasitic inductance. Convert 800 pH to millihenrys to determine their ratio.",
        steps: [
          "Convert 800 pH to millihenrys: 800 ÷ 1,000,000,000 = 0.0000008 mH (8.0 × 10⁻⁷ mH).",
          "Compute ratio: 1.0 mH ÷ (8.0 × 10⁻⁷ mH) = 1,250,000.",
          "Conclusion: The discrete filter choke provides 1.25 million times more inductance than the via parasitic."
        ]
      },
      {
        title: "Example 3: Audio Crossover Coil Value Translation",
        subtitle: "Convert 500,000,000 pH into millihenrys.",
        steps: [
          "State value: L = 500,000,000 pH.",
          "Divide by one billion: 500,000,000 ÷ 1,000,000,000 = 0.5.",
          "Conclusion: 500,000,000 pH is 0.5 mH (or 500 µH)."
        ]
      }
    ]
  },
  table: {
    title: "Picohenry to Millihenry Quick Reference Table",
    headers: ["Picohenrys (pH)", "Millihenrys (mH)", "Microhenry Equivalent", "Engineering Context"],
    rows: [
      { fromVal: "1,000 pH", toVal: "0.000001 mH", extra: "0.001 µH (1 nH)", extra2: "1 mm PCB microstrip trace" },
      { fromVal: "10,000 pH", toVal: "0.00001 mH", extra: "0.01 µH (10 nH)", extra2: "Wire-bond package loop" },
      { fromVal: "100,000 pH", toVal: "0.0001 mH", extra: "0.1 µH (100 nH)", extra2: "RF choke bead" },
      { fromVal: "1,000,000 pH", toVal: "0.001 mH", extra: "1.0 µH", extra2: "High-frequency buck inductor" },
      { fromVal: "10,000,000 pH", toVal: "0.01 mH", extra: "10.0 µH", extra2: "DC-DC boost converter choke" },
      { fromVal: "50,000,000 pH", toVal: "0.05 mH", extra: "50.0 µH", extra2: "Switched-mode power inductor" },
      { fromVal: "100,000,000 pH", toVal: "0.1 mH", extra: "100.0 µH", extra2: "Mains EMI line filter" },
      { fromVal: "500,000,000 pH", toVal: "0.5 mH", extra: "500.0 µH", extra2: "Audio crossover filter coil" },
      { fromVal: "1,000,000,000 pH", toVal: "1.0 mH", extra: "1,000.0 µH", extra2: "PFC energy storage inductor" },
      { fromVal: "10,000,000,000 pH", toVal: "10.0 mH", extra: "10,000.0 µH", extra2: "Common-mode power line choke" }
    ]
  },
  expertNote: {
    title: "Wideband Simulation Convergence in Mixed-Signal SPICE",
    text: "In switched-mode power supplies operating at 2 MHz, power chokes are rated in millihenrys, while PCB layout parasitics around the switching node are measured in hundreds of picohenrys. Entering both on the same schematic can cause matrix conditioning problems in SPICE simulators. Normalizing values and verifying unit suffixes prevents false convergence errors."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Mixed-Signal Hardware Architecture",
        text: "Automotive electronic control units (ECUs) combine heavy millihenry filter chokes on the battery input with advanced microprocessors whose package leads exhibit picohenry loop parasitics. Designers model both extremes when evaluating conducted immunity."
      },
      {
        title: "Automated Component Test Programming",
        text: "Automated LCR meters must test both heavy transformer windings in millihenrys and tiny parasitic lead inductances in picohenrys. Standardizing test vector units avoids range-overflow errors on production lines."
      },
      {
        title: "Electromagnetic Compatibility (EMC) Choke Modeling",
        text: "Analyzing high-frequency bypass across common-mode chokes requires comparing the nominal millihenry winding inductance with the sub-nanosecond picohenry parasitic pad-to-pad coupling."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a tiny unit (pH) to a large unit (mH) must always yield a vastly smaller number.",
      "Losing count of leading zeros: Shifting nine decimal places requires careful checking; 1,000,000 pH is 0.001 mH, not 0.01 mH.",
      "Confusing 'mH' (millihenry) with 'µH' (microhenry): Conflating these units leads to a 1,000x error in component sizing.",
      "Ignoring physical size differences: While a 100 pH parasitic takes up fractions of a square millimeter on silicon, a 10 mH power inductor can weigh hundreds of grams."
    ]
  },
  faqs: [
    {
      question: "How do I convert picohenrys to millihenrys?",
      answer: "To convert picohenrys (pH) to millihenrys (mH), divide the picohenry value by 1,000,000,000 (one billion) or multiply by 10⁻⁹. For instance, 10,000,000 pH divided by 1,000,000,000 equals 0.01 mH."
    },
    {
      question: "How many millihenrys is 1 picohenry?",
      answer: "1 picohenry is equal to 0.000000001 millihenrys (1.0 × 10⁻⁹ mH)."
    },
    {
      question: "What is 1,000,000,000 pH in millihenrys?",
      answer: "1,000,000,000 pH (one billion picohenrys) is equal to exactly 1.0 mH (which also equals 1,000 µH or 0.001 H)."
    },
    {
      question: "What is 1,000,000 pH in millihenrys?",
      answer: "1,000,000 pH equals 0.001 mH (which is also equal to 1.0 µH or 1,000 nH)."
    },
    {
      question: "How do I convert millihenrys back to picohenrys?",
      answer: "To convert millihenrys back to picohenrys, multiply the millihenry value by 1,000,000,000. For example, 4.7 mH multiplied by 10⁹ gives 4,700,000,000 pH."
    },
    {
      question: "Why is the difference between pH and mH so large?",
      answer: "Inductance spans vast physical scales. Picohenrys quantify the magnetic field in sub-micron semiconductor vias, whereas millihenrys measure the energy stored in coils containing hundreds of wire turns wrapped around iron cores."
    },
    {
      question: "What is 100,000,000 pH in millihenrys?",
      answer: "100,000,000 pH equals 0.1 mH (or 100 µH)."
    },
    {
      question: "What is 500 pH in millihenrys?",
      answer: "500 pH equals 0.0000005 mH (5.0 × 10⁻⁷ mH, or 0.5 nH)."
    },
    {
      question: "Can a single circuit board contain both pH and mH components?",
      answer: "Yes. High-performance computing motherboards feature millihenry power line filters at the power input and microprocessors with picohenry packaging parasitics on the same board."
    }
  ],
  relatedList: [
    { label: "Millihenry to Picohenry", from: "millihenry", to: "picohenry" },
    { label: "Picohenry to Microhenry", from: "picohenry", to: "microhenry" },
    { label: "Picohenry to Nanohenry", from: "picohenry", to: "nanohenry" },
    { label: "Picohenry to Henry", from: "picohenry", to: "henry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Grover, Frederick W. <em>Inductance Calculations: Working Formulas and Tables</em>. Dover Publications."
  ]
};
