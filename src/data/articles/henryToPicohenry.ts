import { CustomArticleData } from "./types";

export const henryToPicohenry: CustomArticleData = {
  fromUnitId: "henry",
  toUnitId: "picohenry",
  seoTitle: "Henry to Picohenry Converter - H to pH",
  metaDescription: "Convert henrys to picohenrys (H to pH) instantly. Explore the 10¹² scaling factor, superconducting quantum circuits, IC packaging, and worked examples.",
  h1: "Henry to Picohenry Converter",
  introduction: [
    "Converting henrys (H) to picohenrys (pH) spans twelve orders of magnitude (10¹²) across the International System of Units (SI) electromagnetic spectrum. While the base henry quantifies macroscopic magnetic flux coupling in industrial power transformers and utility choke coils, the picohenry is the native unit for sub-micron semiconductor interconnects, flip-chip package balls, and superconducting quantum circuits.",
    "Engineers encounter this extreme scaling when translating fundamental electromagnetic field solver equations into ultra-fast integrated circuit models. This engineering converter and comprehensive guide breaks down the mathematical relationship, decimal scaling rules, and critical nanosecond transient behavior."
  ],
  quickAnswer: {
    text: "To convert henrys to picohenrys, multiply the henry value by 1,000,000,000,000 (one trillion or 10¹²). For example, an inductance of 0.00000000005 henrys equals exactly 50 picohenrys.",
    formulaDisplay: "1 H = 1,000,000,000,000 pH (10¹² pH)",
    subtext: "Shift the decimal point twelve positions to the right to convert henrys directly into picohenrys."
  },
  aboutSourceUnit: {
    title: "About the Henry (H)",
    text: "The henry (symbol: H) is the SI base unit of electrical inductance, named after American scientist Joseph Henry. An inductor possesses an inductance of one henry when an electric current changing at a rate of one ampere per second induces a potential difference of one volt across its terminals (1 H = 1 V·s/A = 1 Wb/A). Because one henry represents immense magnetic energy storage, macroscopic discrete inductors in this range are large wire-wound iron-core components found in mains electrical distribution."
  },
  aboutTargetUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H). It is the standard unit of measurement in ultra-high-frequency integrated circuits, terahertz waveguides, through-silicon vias (TSVs), and quantum computing hardware. In superconducting electronics, such as Rapid Single Flux Quantum (RSFQ) logic and SQUID magnetometers, Josephson junction loop inductances are designed in the range of 5 pH to 100 pH."
  },
  relationship: "The relationship between henrys and picohenrys is established by the SI metric prefix 'pico-', denoting 10⁻¹². One henry contains exactly one trillion (10¹²) picohenrys, meaning that one picohenry is one-trillionth (10⁻¹²) of a henry.",
  relationshipTitle: "SI Decimal Hierarchy and Scaling Ratio",
  relationshipItems: [
    { label: "Henrys (H) to Picohenrys (pH)", value: "Multiply by 1,000,000,000,000 (10¹²)" },
    { label: "Picohenrys (pH) to Henrys (H)", value: "Divide by 1,000,000,000,000 (or multiply by 10⁻¹²)" },
    { label: "Prefix Span", value: "Base (10⁰) to Pico (10⁻¹²) = 12 decimal places" },
    { label: "Intermediary Steps", value: "1 H = 1,000 mH = 10⁶ µH = 10⁹ nH = 10¹² pH" }
  ],
  formula: {
    text: "To convert any inductance expressed in henrys into picohenrys, multiply the numeric quantity by 10¹² (one trillion).",
    math: "Inductance (pH) = Inductance (H) × 1,000,000,000,000 = Inductance (H) × 10¹²",
    subtext: "In scientific notation: pH = H × 10¹²"
  },
  formulaTitle: "Mathematical Derivation of the Formula",
  practicalTip: {
    title: "Avoiding Calculator Rounding in SPICE Field Extractions",
    text: "Electromagnetic field solvers (such as Ansys Q3D or Cadence Clarity) output partial inductance matrices in base henrys (e.g., 2.5e-11 H). When entering these values into localized package simulation sub-circuits, converting directly to 25 pH prevents numerical truncation errors in simulators that misinterpret values smaller than 1e-15."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Flip-Chip Solder Bump Parasitic Inductance",
        subtitle: "A 3D electromagnetic extraction reveals that an advanced BGA package solder ball exhibits 0.000000000035 henrys of loop inductance. Express this in picohenrys.",
        steps: [
          "State the starting inductance: L = 0.000000000035 H (3.5 × 10⁻¹¹ H).",
          "Apply the conversion formula: pH = H × 10¹².",
          "Calculate: (3.5 × 10⁻¹¹ H) × 10¹² = 35.",
          "Conclusion: The solder bump exhibits exactly 35 pH of parasitic inductance."
        ]
      },
      {
        title: "Example 2: Superconducting SQUID Magnetometer Loop",
        subtitle: "A quantum interference device specifies a quantization loop inductance of 0.00000000012 henrys. Convert this value to picohenrys.",
        steps: [
          "Identify the given value: L = 1.2 × 10⁻¹⁰ H.",
          "Multiply by one trillion: 1.2 × 10⁻¹⁰ × 10¹² = 120.",
          "Conclusion: The SQUID loop inductance is 120 pH."
        ]
      },
      {
        title: "Example 3: Low-ESL Reverse-Geometry Decoupling Capacitor",
        subtitle: "An 0306 surface-mount ceramic capacitor data sheet lists an internal equivalent series inductance (ESL) of 0.00000000018 H. Convert this specification to picohenrys.",
        steps: [
          "Note the base inductance: L = 1.8 × 10⁻¹⁰ H.",
          "Calculate: 1.8 × 10⁻¹⁰ × 10¹² = 180 pH.",
          "Conclusion: The capacitor provides an ultra-low ESL of 180 pH."
        ]
      }
    ]
  },
  table: {
    title: "Henry to Picohenry Reference Table",
    headers: ["Henrys (H)", "Picohenrys (pH)", "Scientific Notation", "Engineering Context"],
    rows: [
      { fromVal: "0.000000000001 H", toVal: "1 pH", extra: "1.0 × 10⁻¹² H | Sub-micron on-chip metallization via" },
      { fromVal: "0.000000000005 H", toVal: "5 pH", extra: "5.0 × 10⁻¹² H | Superconducting Josephson weak link" },
      { fromVal: "0.000000000025 H", toVal: "25 pH", extra: "2.5 × 10⁻¹¹ H | Micro-pillar flip-chip bump" },
      { fromVal: "0.00000000005 H", toVal: "50 pH", extra: "5.0 × 10⁻¹¹ H | Interdigitated decoupling capacitor (IDC)" },
      { fromVal: "0.0000000001 H", toVal: "100 pH", extra: "1.0 × 10⁻¹⁰ H | 0.1 nH | High-speed BGA ball inductance" },
      { fromVal: "0.00000000025 H", toVal: "250 pH", extra: "2.5 × 10⁻¹⁰ H | 0.25 nH | Through-Silicon Via (TSV) array" },
      { fromVal: "0.0000000005 H", toVal: "500 pH", extra: "5.0 × 10⁻¹⁰ H | 0.5 nH | Short PCB ground via transition" },
      { fromVal: "0.000000001 H", toVal: "1,000 pH", extra: "1.0 × 10⁻⁹ H | 1 nH | 1 mm surface-mount trace" },
      { fromVal: "0.00000001 H", toVal: "10,000 pH", extra: "1.0 × 10⁻⁸ H | 10 nH | Wire-bond interconnect loop" },
      { fromVal: "0.000001 H", toVal: "1,000,000,000 pH", extra: "1.0 × 10⁻⁶ H | 1 µH | Switched-mode buck inductor" }
    ]
  },
  expertNote: {
    title: "Ground Bounce and L·(di/dt) in Modern Silicon",
    text: "At multi-gigahertz switching frequencies, digital IC output drivers transition in picoseconds. According to Faraday's law of induction (V = L · di/dt), a current transient of 2 amperes switching in 100 picoseconds across just 50 pH of package lead inductance generates a voltage spike of V = 50e-12 × (2 / 100e-12) = 1.0 volt! This demonstrates why minimizing inductance down to tens of picohenrys is paramount in chip design."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "High-Bandwidth Memory (HBM) and 2.5D Interposers",
        text: "In silicon interposers connecting GPUs to High-Bandwidth Memory stacks, micro-bumps and through-silicon vias must exhibit loop inductances below 30 pH to prevent power supply collapse during sudden clock gating events."
      },
      {
        title: "Superconducting Quantum Computing",
        text: "Quantum bits (qubits) based on transmon architectures and SQUID loops rely on magnetic flux quantization (Φ₀ = h / 2e). The exact Josephson junction inductance, engineered between 10 pH and 200 pH, determines the non-linear qubit resonance frequency."
      },
      {
        title: "Power Distribution Network (PDN) Impedance Optimization",
        text: "Microprocessor core power rails operate at under 0.8V while drawing over 200 amperes. Minimizing package capacitor loop inductance to under 100 pH is mandatory to maintain PDN impedance below 1 milliohm up to hundreds of megahertz."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Since the henry is twelve orders of magnitude larger than the picohenry, converting from H to pH must produce a vastly larger number.",
      "Confusion with unit symbols: Ensure the lowercase 'p' (pico, 10⁻¹²) is paired with uppercase 'H' (Henry). Writing 'PH' can lead to confusion with acidity ratings, while 'ph' is non-standard.",
      "Miscounting decimal places: Shifting 12 places requires careful verification of trailing zeros; 0.00000000001 H is 10 pH, not 1 pH.",
      "Ignoring mutual inductance: In dense IC packages, coupling between adjacent via pairs can add or subtract dozens of picohenrys depending on current direction."
    ]
  },
  faqs: [
    {
      question: "How do I convert henrys to picohenrys?",
      answer: "To convert henrys (H) to picohenrys (pH), multiply the value in henrys by 1,000,000,000,000 (one trillion or 10¹²). For example, 0.0000000001 H multiplied by 10¹² equals 100 pH."
    },
    {
      question: "How many picohenrys are in 1 henry?",
      answer: "There are exactly 1,000,000,000,000 (one trillion or 10¹²) picohenrys in a single henry."
    },
    {
      question: "What is 1 nanohenry in picohenrys?",
      answer: "1 nanohenry (1 nH = 10⁻⁹ H) is equal to exactly 1,000 picohenrys (1,000 pH)."
    },
    {
      question: "What is 1 microhenry in picohenrys?",
      answer: "1 microhenry (1 µH = 10⁻⁶ H) is equal to 1,000,000 picohenrys (one million pH)."
    },
    {
      question: "Where are picohenry inductances encountered in real life?",
      answer: "Picohenrys occur in microchip packaging, flip-chip solder bumps, semiconductor interconnects, low-ESL multi-layer ceramic capacitors, and superconducting quantum computers (SQUIDs and qubits)."
    },
    {
      question: "How do I convert picohenrys back to henrys?",
      answer: "To convert picohenrys back to henrys, divide the picohenry value by 1,000,000,000,000 or multiply by 10⁻¹². For example, 50 pH equals 50 × 10⁻¹² H (5 × 10⁻¹¹ H)."
    },
    {
      question: "What is 0.00000000005 H in picohenrys?",
      answer: "0.00000000005 H equals exactly 50 pH. This is a typical equivalent series inductance for an advanced surface-mount decoupling capacitor."
    },
    {
      question: "Why do engineers use picohenrys instead of scientific notation henrys?",
      answer: "Using picohenrys allows engineers to work with readable integers (such as 25 pH or 80 pH) rather than cumbersome floating-point numbers like 2.5 × 10⁻¹¹ H, reducing transcription errors in design reviews and simulation files."
    },
    {
      question: "Does trace length directly correlate to picohenrys?",
      answer: "Yes. In standard PCB manufacturing, a typical microstrip trace exhibits approximately 0.6 to 1.0 nanohenry per millimeter (600 to 1,000 picohenrys per mm). Extremely short vias and flip-chip solder bumps reduce this down to 20–50 pH."
    }
  ],
  relatedList: [
    { label: "Nanohenry to Picohenry", from: "nanohenry", to: "picohenry" },
    { label: "Microhenry to Picohenry", from: "microhenry", to: "picohenry" },
    { label: "Millihenry to Picohenry", from: "millihenry", to: "picohenry" },
    { label: "Picohenry to Henry", from: "picohenry", to: "henry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "IEEE Standards Association. <em>IEEE Std 280: Standard Letter Symbols for Quantities Used in Electrical Science and Electrical Engineering</em>."
  ]
};
