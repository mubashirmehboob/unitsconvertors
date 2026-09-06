import { CustomArticleData } from "./types";

export const microhenryToPicohenry: CustomArticleData = {
  fromUnitId: "microhenry",
  toUnitId: "picohenry",
  seoTitle: "Microhenry to Picohenry Converter - µH to pH",
  metaDescription: "Convert microhenrys to picohenrys (µH to pH) with precision. Learn the 1,000,000 multiplication factor, power inductor modeling, and practical examples.",
  h1: "Microhenry to Picohenry Converter",
  introduction: [
    "Converting microhenrys (µH) to picohenrys (pH) bridges six orders of magnitude (10⁶) across the metric inductance scale. In modern electronics, microhenrys are the universal benchmark for power conversion—utilized in DC-DC buck and boost regulators, switch-mode power supplies, and radio chokes—while picohenrys quantify package-level interconnects, capacitor equivalent series inductance (ESL), and semiconductor die parasitics.",
    "Hardware design engineers and signal integrity specialists regularly convert between these units when setting up SPICE netlists, modeling multi-gigahertz decoupling networks, and analyzing switching transients. This interactive calculator and engineering guide explains the mathematical conversion, component markings, and practical circuit design methods."
  ],
  quickAnswer: {
    text: "To convert microhenrys to picohenrys, multiply the microhenry value by 1,000,000 (one million or 10⁶). For example, a 1 µH buck converter inductor equals exactly 1,000,000 picohenrys.",
    formulaDisplay: "1 µH = 1,000,000 pH (10⁶ pH)",
    subtext: "Shift the decimal point six places to the right to convert microhenrys directly into picohenrys."
  },
  aboutSourceUnit: {
    title: "About the Microhenry (µH)",
    text: "The microhenry (symbol: µH or uH) represents one-millionth of a henry (10⁻⁶ H). It is the most prevalent unit of inductance in contemporary electronics. Switched-mode power supplies (SMPS), automotive voltage regulators, class-D audio output filters, and intermediate-frequency radio receivers rely on inductors rated between 0.1 µH and 1,000 µH, typically wound with copper wire around ferrite or metal composite cores."
  },
  aboutTargetUnit: {
    title: "About the Picohenry (pH)",
    text: "The picohenry (symbol: pH) represents one-trillionth of a henry (10⁻¹² H) or one-millionth of a microhenry. In high-speed printed circuit boards and integrated circuit packaging, picohenry inductances arise from solder bumps, package pin leads, ground plane vias, and capacitor internal terminations. In superconducting physics, picohenrys quantify the inductance of Josephson junctions in quantum processors."
  },
  relationship: "The relationship between microhenrys and picohenrys is governed by SI metric prefixes: 'micro-' denotes 10⁻⁶, and 'pico-' denotes 10⁻¹². Dividing 10⁻⁶ by 10⁻¹² gives 10⁶ (one million). Therefore, one microhenry contains exactly one million picohenrys.",
  relationshipTitle: "Prefix Ratio and Decimal Scale",
  relationshipItems: [
    { label: "Microhenrys (µH) to Picohenrys (pH)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Picohenrys (pH) to Microhenrys (µH)", value: "Divide by 1,000,000 (or multiply by 10⁻⁶)" },
    { label: "Decimal Shift", value: "6 places to the right" },
    { label: "Intermediary Ratio", value: "1 µH = 1,000 nH = 1,000,000 pH" }
  ],
  formula: {
    text: "To convert any inductance value from microhenrys to picohenrys, multiply the microhenry quantity by 1,000,000.",
    math: "Inductance (pH) = Inductance (µH) × 1,000,000 = Inductance (µH) × 10⁶",
    subtext: "In scientific notation: pH = µH × 10⁶"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert microhenrys to picohenrys mentally, simply move the decimal point six places to the right: 0.001 µH becomes 1,000 pH (1 nH); 0.047 µH becomes 47,000 pH (47 nH); and 2.2 µH becomes 2,200,000 pH."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Frequency Ferrite Bead Modeling",
        subtitle: "A high-speed power rail uses a multi-layer ferrite bead with a nominal low-frequency inductance of 0.08 µH. Express this inductance in picohenrys for high-frequency package modeling.",
        steps: [
          "State starting value: L = 0.08 µH.",
          "Apply conversion formula: pH = µH × 1,000,000.",
          "Calculate: 0.08 × 1,000,000 = 80,000.",
          "Conclusion: 0.08 µH equals 80,000 pH (or 80 nH)."
        ]
      },
      {
        title: "Example 2: DC-DC Buck Converter Switching Inductor",
        subtitle: "A synchronous buck regulator uses a 4.7 µH shielded inductor. Express this value in picohenrys.",
        steps: [
          "Identify value: L = 4.7 µH.",
          "Multiply by one million: 4.7 × 1,000,000 = 4,700,000.",
          "Conclusion: 4.7 µH equals 4,700,000 pH."
        ]
      },
      {
        title: "Example 3: RF Choke Inductance Translation",
        subtitle: "Convert 0.0005 µH into picohenrys.",
        steps: [
          "Identify value: L = 0.0005 µH (5 × 10⁻⁴ µH).",
          "Calculate: 0.0005 × 1,000,000 = 500.",
          "Conclusion: 0.0005 µH equals exactly 500 pH (or 0.5 nH)."
        ]
      }
    ]
  },
  table: {
    title: "Microhenry to Picohenry Quick Reference Table",
    headers: ["Microhenrys (µH)", "Picohenrys (pH)", "Nanohenry Equivalent", "Circuit Context"],
    rows: [
      { fromVal: "0.0001 µH", toVal: "100 pH", extra: "0.1 nH", extra2: "Flip-chip BGA solder ball loop" },
      { fromVal: "0.0005 µH", toVal: "500 pH", extra: "0.5 nH", extra2: "PCB ground via transition" },
      { fromVal: "0.001 µH", toVal: "1,000 pH", extra: "1.0 nH", extra2: "1 mm surface-mount trace" },
      { fromVal: "0.0047 µH", toVal: "4,700 pH", extra: "4.7 nH", extra2: "RF matching inductor" },
      { fromVal: "0.01 µH", toVal: "10,000 pH", extra: "10.0 nH", extra2: "High-frequency choke bead" },
      { fromVal: "0.047 µH", toVal: "47,000 pH", extra: "47.0 nH", extra2: "VHF band tuning inductor" },
      { fromVal: "0.1 µH", toVal: "100,000 pH", extra: "100.0 nH", extra2: "Point-of-load decoupling inductor" },
      { fromVal: "0.47 µH", toVal: "470,000 pH", extra: "470.0 nH", extra2: "High-current multi-phase buck inductor" },
      { fromVal: "1.0 µH", toVal: "1,000,000 pH", extra: "1,000.0 nH", extra2: "Standard 12V-to-1V buck converter" },
      { fromVal: "10.0 µH", toVal: "10,000,000 pH", extra: "10,000.0 nH", extra2: "Automotive input filter choke" }
    ]
  },
  expertNote: {
    title: "Decoupling Capacitor ESL vs. Power Inductor Value",
    text: "A common task in power distribution network (PDN) design is contrasting the discrete buck inductor (e.g., 1 µH = 1,000,000 pH) with the equivalent series inductance of the local ceramic bypass capacitors (e.g., 200 pH). The million-fold difference explains why the bypass capacitor shunts gigahertz switching noise to ground while the main inductor forces current into the load."
  },
  applications: {
    title: "Engineering Applications Involving µH and pH",
    items: [
      {
        title: "Power Distribution Network (PDN) Optimization",
        text: "Engineers design switching voltage regulators with microhenry power inductors while simultaneously placing low-ESL capacitors with tens of picohenrys of loop inductance near the processor die to prevent voltage collapse during transient loads."
      },
      {
        title: "Switch-Mode Converter Parasitic Ringing Analysis",
        text: "In silicon-carbide (SiC) and gallium-nitride (GaN) fast-switching bridges, microhenry filtering inductors interact with hundreds of picohenrys of PCB trace parasitic inductance, creating multi-megahertz ringing that must be mitigated with snubber circuits."
      },
      {
        title: "Automotive EMC Choke Specification",
        text: "Automotive battery lines incorporate 10 µH filter inductors. Design verification requires converting parasitic PCB via connections (e.g., 800 pH per via) to evaluate high-frequency attenuation up to 1 GHz."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Because microhenrys are 1,000,000 times larger than picohenrys, converting µH to pH must always yield a vastly larger number.",
      "Misidentifying metric prefixes: Confusing microhenrys (µH = 10⁻⁶ H) with millihenrys (mH = 10⁻³ H) produces a 1,000x error.",
      "Overlooking parasitic capacitance: Microhenry inductors have self-resonant frequencies (SRF) typically below 100 MHz, beyond which they behave capacitively.",
      "Neglecting DC bias derating: High-current composite core microhenry inductors lose inductance as DC load current increases."
    ]
  },
  faqs: [
    {
      question: "How do I convert microhenrys to picohenrys?",
      answer: "To convert microhenrys (µH) to picohenrys (pH), multiply the microhenry value by 1,000,000 (one million or 10⁶). For example, 0.47 µH multiplied by 1,000,000 equals 470,000 pH."
    },
    {
      question: "How many picohenrys are in 1 microhenry?",
      answer: "There are exactly 1,000,000 (one million) picohenrys in 1 microhenry."
    },
    {
      question: "What is 0.1 µH in picohenrys?",
      answer: "0.1 µH equals 100,000 pH (which is also equal to 100 nH)."
    },
    {
      question: "What is 10 µH in picohenrys?",
      answer: "10 µH equals 10,000,000 pH (10 million picohenrys)."
    },
    {
      question: "How do I convert picohenrys back to microhenrys?",
      answer: "To convert picohenrys to microhenrys, divide the picohenry value by 1,000,000 or multiply by 10⁻⁶. For instance, 250,000 pH divided by 1,000,000 equals 0.25 µH."
    },
    {
      question: "What is 0.001 µH in picohenrys?",
      answer: "0.001 µH equals exactly 1,000 pH (which is equal to 1 nH)."
    },
    {
      question: "What is 4.7 µH in picohenrys?",
      answer: "4.7 µH equals 4,700,000 pH (4.7 million picohenrys)."
    },
    {
      question: "What is the relationship between µH, nH, and pH?",
      answer: "1 µH = 1,000 nH = 1,000,000 pH. Each step down scales by a factor of 1,000."
    },
    {
      question: "Why do chip designers care about picohenrys when using microhenry power inductors?",
      answer: "While the microhenry inductor filters DC energy, tiny picohenry parasitics in the package leads cause high-frequency voltage spikes (V = L · di/dt) during rapid current switching."
    }
  ],
  relatedList: [
    { label: "Henry to Picohenry", from: "henry", to: "picohenry" },
    { label: "Millihenry to Picohenry", from: "millihenry", to: "picohenry" },
    { label: "Nanohenry to Picohenry", from: "nanohenry", to: "picohenry" },
    { label: "Picohenry to Microhenry", from: "picohenry", to: "microhenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "Ott, Henry W. <em>Electromagnetic Compatibility Engineering</em>. John Wiley & Sons."
  ]
};
