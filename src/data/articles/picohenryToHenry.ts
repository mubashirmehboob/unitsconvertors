import { CustomArticleData } from "./types";

export const picohenryToHenry: CustomArticleData = {
  fromUnitId: "picohenry",
  toUnitId: "henry",
  seoTitle: "Picohenry to Henry Converter - pH to H",
  metaDescription: "Convert picohenrys to henrys (pH to H) with precision. Learn the 10⁻¹² conversion factor, inductive reactance equations, and practical circuit examples.",
  h1: "Picohenry to Henry Converter",
  introduction: [
    "Converting picohenrys (pH) to the SI base unit of inductance, the henry (H), bridges twelve orders of magnitude (10⁻¹²). While sub-micron integrated circuits and quantum computing devices measure parasitic loop inductances in picohenrys, foundational electrical equations—including inductive reactance, LC resonance, and magnetic energy storage—require inputs expressed strictly in base henrys.",
    "This precision converter and engineering guide details the mathematical relationship, decimal scaling rules, and analytical applications across electromagnetic field modeling, SPICE netlist syntax, and high-frequency RF systems."
  ],
  quickAnswer: {
    text: "To convert picohenrys to henrys, divide the picohenry value by 1,000,000,000,000 (one trillion), or multiply by 10⁻¹². For example, 100 picohenrys equals 0.0000000001 henrys (1.0 × 10⁻¹⁰ H).",
    formulaDisplay: "1 pH = 0.000000000001 H (10⁻¹² H)",
    subtext: "Shift the decimal point twelve places to the left to convert picohenrys into base henrys."
  },
  aboutSourceUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) is an SI decimal submultiple representing one-trillionth of a henry (10⁻¹² H). It is the standard metric unit for measuring microscopic inductance phenomena, such as flip-chip package solder bumps, through-silicon vias (TSVs), on-chip interconnects, low-ESL capacitor geometries, and superconducting Josephson junctions in quantum processors."
  },
  aboutTargetUnit: {
    title: "About the Henry (H)",
    text: "The henry (symbol: H) is the coherent SI base unit of electrical inductance. By definition, a circuit element has an inductance of one henry when an electric current changing at a rate of one ampere per second produces an electromotive force of one volt across its terminals (1 H = 1 V·s/A = 1 Wb/A). It is the fundamental parameter in all classical electromagnetic field equations."
  },
  relationship: "The relationship between picohenrys and henrys is defined by the SI metric prefix 'pico-', representing 10⁻¹². Because one henry contains one trillion (10¹²) picohenrys, converting from picohenrys to henrys requires multiplying by 10⁻¹² or dividing by 1,000,000,000,000.",
  relationshipTitle: "Prefix Ratio and Metric Hierarchy",
  relationshipItems: [
    { label: "Picohenrys (pH) to Henrys (H)", value: "Divide by 1,000,000,000,000 (or multiply by 10⁻¹²)" },
    { label: "Henrys (H) to Picohenrys (pH)", value: "Multiply by 1,000,000,000,000 (10¹²)" },
    { label: "Decimal Shift", value: "12 places to the left" },
    { label: "Ratio", value: "1 pH = 10⁻¹² H" }
  ],
  formula: {
    text: "To convert any inductance value from picohenrys into henrys, divide the number of picohenrys by one trillion (10¹²).",
    math: "Inductance (H) = Inductance (pH) ÷ 1,000,000,000,000 = Inductance (pH) × 10⁻¹²",
    subtext: "In scientific notation: H = pH × 10⁻¹²"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Entering Values into Analytical Physics Formulas",
    text: "Fundamental formulas like inductive reactance (X_L = 2πfL) or LC resonant frequency (f = 1 / (2π√LC)) require inductance in base henrys. If your capacitor has an ESL of 200 pH, always input L = 200 × 10⁻¹² H (2.0 × 10⁻¹⁰ H) to prevent errors of twelve orders of magnitude."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Inductive Reactance of a 50 pH Interconnect at 28 GHz",
        subtitle: "A 5G millimeter-wave flip-chip interconnect exhibits 50 pH of parasitic inductance. Convert this value to henrys to compute its inductive reactance at 28 GHz.",
        steps: [
          "State starting value: L = 50 pH.",
          "Apply conversion formula: H = 50 × 10⁻¹².",
          "Express in scientific notation: 5.0 × 10⁻¹¹ H.",
          "Calculate reactance: X_L = 2 × π × (28 × 10⁹ Hz) × (5.0 × 10⁻¹¹ H) ≈ 8.80 ohms.",
          "Conclusion: At 28 GHz, 50 pH introduces approximately 8.8 ohms of series impedance."
        ]
      },
      {
        title: "Example 2: Resonant Frequency of a Superconducting LC Resonator",
        subtitle: "A quantum superconducting circuit integrates a 120 pH Josephson inductance with a 0.5 pF shunting capacitor. Convert the inductance to henrys to find the resonance frequency.",
        steps: [
          "Convert 120 pH to henrys: 120 × 10⁻¹² H = 1.2 × 10⁻¹⁰ H.",
          "Convert 0.5 pF to farads: 0.5 × 10⁻¹² F = 5.0 × 10⁻¹³ F.",
          "Compute LC product: (1.2 × 10⁻¹⁰) × (5.0 × 10⁻¹³) = 6.0 × 10⁻²³.",
          "Calculate f₀ = 1 / (2π√(6.0 × 10⁻²³)) ≈ 20.55 GHz."
        ]
      },
      {
        title: "Example 3: Low-ESL Ceramic Decoupling Capacitor",
        subtitle: "Convert a 350 pH equivalent series inductance (ESL) into base henrys.",
        steps: [
          "Identify value: L = 350 pH.",
          "Multiply by 10⁻¹²: 350 × 10⁻¹² = 3.5 × 10⁻¹⁰ H.",
          "Conclusion: 350 pH equals 0.00000000035 H."
        ]
      }
    ]
  },
  table: {
    title: "Picohenry to Henry Quick Reference Table",
    headers: ["Picohenrys (pH)", "Henrys (H)", "Scientific Notation", "Engineering Context"],
    rows: [
      { fromVal: "1 pH", toVal: "0.000000000001 H", extra: "1.0 × 10⁻¹² H | On-chip metallization via" },
      { fromVal: "10 pH", toVal: "0.00000000001 H", extra: "1.0 × 10⁻¹¹ H | Superconducting SQUID junction loop" },
      { fromVal: "25 pH", toVal: "0.000000000025 H", extra: "2.5 × 10⁻¹¹ H | Flip-chip micro-bump interconnect" },
      { fromVal: "50 pH", toVal: "0.00000000005 H", extra: "5.0 × 10⁻¹¹ H | Interdigitated capacitor (IDC) ESL" },
      { fromVal: "100 pH", toVal: "0.0000000001 H", extra: "1.0 × 10⁻¹⁰ H | 0.1 nH | BGA package ball loop" },
      { fromVal: "250 pH", toVal: "0.00000000025 H", extra: "2.5 × 10⁻¹⁰ H | 0.25 nH | Through-silicon via (TSV)" },
      { fromVal: "500 pH", toVal: "0.0000000005 H", extra: "5.0 × 10⁻¹⁰ H | 0.5 nH | 0.5 mm PCB trace parasitic" },
      { fromVal: "1,000 pH", toVal: "0.000000001 H", extra: "1.0 × 10⁻⁹ H | 1.0 nH | 1 mm surface-mount trace" },
      { fromVal: "10,000 pH", toVal: "0.00000001 H", extra: "1.0 × 10⁻⁸ H | 10.0 nH | Wire-bond interconnect loop" },
      { fromVal: "100,000 pH", toVal: "0.0000001 H", extra: "1.0 × 10⁻⁷ H | 100.0 nH | Surface-mount chip inductor" }
    ]
  },
  expertNote: {
    title: "SPICE Simulation Format Syntax",
    text: "In standard Berkeley SPICE, HSPICE, and LTspice, inductors can be specified directly with metric suffixes (e.g., 'L1 in out 50p' for 50 picohenrys). However, when netlists are generated automatically by 3D field solvers without suffix formatting, values are written in base scientific notation ('L1 in out 5.0e-11'). Understanding the pH-to-H translation prevents syntax mismatches."
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Electromagnetic Field Solver Model Extraction",
        text: "3D quasi-static field extraction tools calculate partial inductance matrices in base henrys. Converting these small floating-point numbers into picohenrys makes package models human-readable and easier to verify against physical geometries."
      },
      {
        title: "High-Frequency Self-Resonant Frequency (SRF) Calculations",
        text: "Calculating the SRF of an ultra-high-frequency decoupling capacitor requires plugging both the capacitance (in farads) and the ESL (converted from picohenrys to henrys) into the Thompson resonance formula."
      },
      {
        title: "Josephson Quantum Circuits and RSFQ Logic",
        text: "Superconducting electronics utilize magnetic flux quanta (Φ₀ = 2.0678 × 10⁻¹⁵ Wb). Converting junction inductances from picohenrys to henrys is essential for calculating stored flux (Φ = L · I) in cryogenic quantum circuits."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from picohenrys to base henrys must result in a much smaller number. Multiplying by 10¹² results in a catastrophic error.",
      "Miscounting zeros in standard decimal format: Writing twelve decimal places by hand easily leads to off-by-ten errors; scientific notation (e.g., 5.0e-11 H) is much safer.",
      "Confusing 'pH' with 'pF': In fast-paced schematic reviews, picohenrys (inductance) and picofarads (capacitance) are sometimes accidentally swapped.",
      "Assuming zero package inductance: Neglecting even 20 pH of package lead inductance can cause simulations of 56 Gbps transceivers to fail eye-diagram compliance."
    ]
  },
  faqs: [
    {
      question: "How do I convert picohenrys to henrys?",
      answer: "To convert picohenrys (pH) to henrys (H), divide the picohenry value by 1,000,000,000,000 (one trillion) or multiply by 10⁻¹². For example, 500 pH divided by 10¹² equals 0.0000000005 H (5.0 × 10⁻¹⁰ H)."
    },
    {
      question: "How many henrys is 1 picohenry?",
      answer: "1 picohenry is equal to 0.000000000001 henrys (1.0 × 10⁻¹² H)."
    },
    {
      question: "What is 1,000 pH in henrys?",
      answer: "1,000 pH is equal to 0.000000001 H (1.0 × 10⁻⁹ H, which is also 1 nanohenry)."
    },
    {
      question: "What is 100 pH in henrys?",
      answer: "100 pH is equal to 0.0000000001 H (1.0 × 10⁻¹⁰ H, or 0.1 nH)."
    },
    {
      question: "How do I convert henrys back to picohenrys?",
      answer: "To convert henrys back to picohenrys, multiply the value in henrys by 1,000,000,000,000. For instance, 2.5 × 10⁻¹¹ H multiplied by 10¹² equals 25 pH."
    },
    {
      question: "Why is converting pH to H necessary in circuit design?",
      answer: "Standard physics and electrical formulas—such as reactance (X = 2πfL) and time constants—require values in base SI units (henrys). Entering values in picohenrys directly into these equations causes massive calculation errors."
    },
    {
      question: "What is 50 pH in henrys?",
      answer: "50 pH equals 0.00000000005 H (5.0 × 10⁻¹¹ H)."
    },
    {
      question: "Can an inductance of 1 pH physically exist?",
      answer: "Yes. In advanced semiconductor nodes (such as 3nm or 2nm processes), a tiny through-silicon via or sub-micron metal line has an inductance on the order of 1 to 5 picohenrys."
    },
    {
      question: "What SPICE symbol represents picohenrys?",
      answer: "In SPICE simulators, the suffix 'p' represents pico (10⁻¹²). Writing 'L1 n1 n2 75p' assigns 75 picohenrys (7.5 × 10⁻¹¹ H) to inductor L1."
    }
  ],
  relatedList: [
    { label: "Henry to Picohenry", from: "henry", to: "picohenry" },
    { label: "Picohenry to Nanohenry", from: "picohenry", to: "nanohenry" },
    { label: "Picohenry to Microhenry", from: "picohenry", to: "microhenry" },
    { label: "Picohenry to Millihenry", from: "picohenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "Halliday, David, Robert Resnick, and Jearl Walker. <em>Fundamentals of Physics</em>. John Wiley & Sons."
  ]
};
