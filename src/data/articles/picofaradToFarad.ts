import { CustomArticleData } from "./types";

export const picofaradToFarad: CustomArticleData = {
  fromUnitId: "picofarad",
  toUnitId: "farad",
  seoTitle: "Picofarad to Farad Converter - pF to F",
  metaDescription: "Convert picofarads to farads (pF to F) instantly. Discover the 10⁻¹² conversion formula, RF impedance calculations, scientific notation, and worked examples.",
  h1: "Picofarad to Farad Converter",
  introduction: [
    "Converting picofarads (pF) to base farads (F) spans twelve orders of magnitude (10⁻¹²). While commercially manufactured radio-frequency (RF) capacitors, crystal load capacitors, and semiconductor junction capacitances are rated in picofarads, standard physical equations require capacitance to be expressed in fundamental SI farads.",
    "Whether you are calculating capacitive reactance at gigahertz frequencies, simulating high-speed printed circuit board (PCB) traces in SPICE, or computing the resonant frequency of an LC tank, converting picofarads into farads is a mandatory computational step. This converter ensures precision across all twelve decimal places."
  ],
  quickAnswer: {
    text: "To convert picofarads to farads, multiply your picofarad value by 10⁻¹² (one-trillionth), or divide by 1,000,000,000,000. For instance, a 10 pF crystal load capacitor equals 0.00000000001 F (1 × 10⁻¹¹ F).",
    formulaDisplay: "1 pF = 0.000000000001 F (10⁻¹² F)",
    subtext: "Shift the decimal point twelve places to the left to obtain farads from picofarads."
  },
  aboutSourceUnit: {
    title: "About the Picofarad (pF)",
    text: "The picofarad (symbol: pF) is an SI metric submultiple representing one-trillionth of a farad (10⁻¹² F). Historically termed the 'micromicrofarad' (µµF or mmfd), the picofarad is the fundamental unit of measurement in radio frequency (RF) engineering, microwave circuit design, and quartz crystal oscillator design. Capacitors in this range typically feature ultra-stable C0G/NP0 ceramic or silver mica dielectrics with zero voltage coefficient."
  },
  aboutTargetUnit: {
    title: "About the Farad (F)",
    text: "The farad (symbol: F) is the SI base unit of electrical capacitance, named in honor of British scientist Michael Faraday. One farad is defined as the capacitance of a dielectric medium across which a potential difference of one volt produces an electric charge of one coulomb (1 F = 1 C/V). Standard physics and electrical formulas are formulated strictly in base farads."
  },
  relationship: "The relationship between picofarads and farads is defined by the SI metric prefix 'pico-', which represents 10⁻¹². One farad contains exactly one trillion (1,000,000,000,000 or 10¹²) picofarads.",
  relationshipTitle: "Prefix Scaling and Fundamental SI Relationship",
  relationshipItems: [
    { label: "Picofarads (pF) to Farads (F)", value: "Multiply by 10⁻¹² (or divide by 10¹²)" },
    { label: "Farads (F) to Picofarads (pF)", value: "Multiply by 1,000,000,000,000 (10¹²)" },
    { label: "Prefix Magnitude", value: "Pico (10⁻¹²) to Base Farad (10⁰) = 12 decimal places" },
    { label: "Historical Notation", value: "1 pF = 1 µµF = 1 mmfd = 10⁻¹² F" }
  ],
  formula: {
    text: "To convert any capacitance expressed in picofarads into base farads, multiply the number of picofarads by 10⁻¹².",
    math: "Capacitance (F) = Capacitance (pF) × 10⁻¹² = Capacitance (pF) ÷ 1,000,000,000,000",
    subtext: "In scientific notation: F = pF × 10⁻¹²"
  },
  formulaTitle: "The Governing Mathematical Formula",
  practicalTip: {
    title: "Entering Values into Engineering Calculators & Software",
    text: "Never attempt to enter eleven leading zeros into a hand calculator when solving equations like Xc = 1 / (2πfC). Instead, use your calculator's exponent key: enter 15 pF as '15e-12'. In SPICE simulators (LTspice, PSpice), you can simply write '15p', and the solver automatically substitutes 15 × 10⁻¹² F."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Quartz Crystal Oscillator Load Capacitance",
        subtitle: "A 16 MHz microcontroller crystal oscillator circuit requires load capacitors of 18 pF. Convert 18 pF to farads for inclusion in a circuit simulation netlist.",
        steps: [
          "State the picofarad value: C = 18 pF.",
          "Apply the conversion formula: F = pF × 10⁻¹².",
          "Calculate: 18 × 10⁻¹² = 1.8 × 10⁻¹¹ F.",
          "In decimal format: 0.000000000018 F."
        ]
      },
      {
        title: "Example 2: High-Frequency LC Tank Resonant Frequency",
        subtitle: "An FM radio front-end uses an LC tank circuit with an inductance of 100 nH and a tuning capacitor of 47 pF. Express 47 pF in farads to compute the resonant frequency (f0 = 1 / [2π√(LC)]).",
        steps: [
          "Given capacitance: C = 47 pF.",
          "Multiply by 10⁻¹²: 47 × 10⁻¹² F = 4.7 × 10⁻¹¹ F.",
          "Calculate resonant frequency: f0 = 1 / (2 × π × √(100e-9 × 47e-12)) ≈ 73.4 MHz."
        ]
      },
      {
        title: "Example 3: RF Snubber Capacitive Reactance",
        subtitle: "Find the reactance of a 100 pF capacitor at an operating frequency of 100 MHz.",
        steps: [
          "Convert 100 pF to farads: 100 × 10⁻¹² F = 1.0 × 10⁻¹⁰ F.",
          "Apply the reactance formula: Xc = 1 / (2 × π × f × C).",
          "Calculate: Xc = 1 / (2 × π × 100,000,000 × 1.0 × 10⁻¹⁰) ≈ 15.92 Ω."
        ]
      }
    ]
  },
  table: {
    title: "Picofarad to Farad Reference Table",
    headers: ["Picofarads (pF)", "Farads (F)", "Scientific Notation", "Common Application"],
    rows: [
      { fromVal: "1 pF", toVal: "0.000000000001 F", extra: "1.0 × 10⁻¹² F | Microwave parasitic capacitance" },
      { fromVal: "4.7 pF", toVal: "0.0000000000047 F", extra: "4.7 × 10⁻¹² F | UHF antenna matching network" },
      { fromVal: "10 pF", toVal: "0.00000000001 F", extra: "1.0 × 10⁻¹¹ F | Crystal oscillator load capacitor" },
      { fromVal: "22 pF", toVal: "0.000000000022 F", extra: "2.2 × 10⁻¹¹ F | Standard microcontroller clock crystal" },
      { fromVal: "47 pF", toVal: "0.000000000047 F", extra: "4.7 × 10⁻¹¹ F | High-frequency RF tank capacitor" },
      { fromVal: "100 pF", toVal: "0.0000000001 F", extra: "1.0 × 10⁻¹⁰ F | Op-amp phase margin stabilization" },
      { fromVal: "220 pF", toVal: "0.00000000022 F", extra: "2.2 × 10⁻¹⁰ F | Audio amplifier Miller compensation" },
      { fromVal: "470 pF", toVal: "0.00000000047 F", extra: "4.7 × 10⁻¹⁰ F | High-speed digital edge damping" },
      { fromVal: "1,000 pF", toVal: "0.000000001 F", extra: "1.0 × 10⁻⁹ F | SMPS snubber capacitor (1 nF)" },
      { fromVal: "10,000 pF", toVal: "0.00000001 F", extra: "1.0 × 10⁻⁸ F | Radio IF stage coupling (10 nF)" }
    ]
  },
  expertNote: {
    title: "Parasitic Capacitance in High-Speed PCB Layout",
    text: "At picofarad levels, parasitic capacitance from circuit board traces, via pads, and component leads cannot be ignored. A standard 50-ohm microstrip trace on FR4 fiberglass substrate contributes approximately 3 pF per inch. In multi-gigahertz systems, this stray capacitance can rival the value of intentional picofarad tuning components."
  },
  applications: {
    title: "Practical Scenarios Requiring Farads",
    items: [
      {
        title: "Radio Frequency (RF) Impedance Matching",
        text: "Impedance matching networks (L-networks, Pi-networks) transform complex antenna impedances to standard 50-ohm transmission lines. S-parameter analysis and Smith chart tools convert picofarads to base farads to evaluate admittance vectors."
      },
      {
        title: "Crystal Oscillator Loop Gain Analysis",
        text: "The Pierce oscillator topology uses two external load capacitors (CL1, CL2) in the 10 pF to 33 pF range to establish negative resistance. Circuit stability equations require load capacitance in farads to compute negative resistance margins."
      },
      {
        title: "Electrostatic Discharge (ESD) Protection Modeling",
        text: "Human Body Model (HBM) ESD testing simulates static discharge using a 100 pF capacitor charged to several kilovolts. Calculating stored energy (E = ½CV²) requires converting 100 pF into 1.0 × 10⁻¹⁰ farads."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from picofarads to farads requires moving the decimal point twelve places to the left. Multiplying by 10¹² overstates capacitance by 24 orders of magnitude.",
      "Miscounting decimal places: 1 pF has eleven zeros between the decimal point and the digit 1 (0.000000000001 F). Always favor scientific notation (1e-12 F) to eliminate human counting errors.",
      "Syntax errors in SPICE simulators: Entering '10F' instead of '10p' in a simulation creates a 10-farad monster capacitor, resulting in convergence errors or non-functional frequency responses.",
      "Ignoring dielectric absorption and ESR: While pF-range C0G ceramic capacitors have near-ideal characteristics, cheap disc capacitors can introduce frequency-dependent drift."
    ]
  },
  faqs: [
    {
      question: "How do I convert picofarads to farads?",
      answer: "To convert picofarads (pF) to farads (F), divide the picofarad value by 1,000,000,000,000 (one trillion), or multiply by 10⁻¹². For example, 22 pF equals 22 × 10⁻¹² F (2.2 × 10⁻¹¹ F)."
    },
    {
      question: "How many farads is 1 picofarad?",
      answer: "1 picofarad is exactly 0.000000000001 farads (1 × 10⁻¹² F). One farad contains one trillion picofarads."
    },
    {
      question: "What is 100 pF in farads?",
      answer: "100 pF is equal to 0.0000000001 farads, or 1.0 × 10⁻¹⁰ F. In nanofarads, 100 pF is equal to 0.1 nF."
    },
    {
      question: "What is 1,000 pF in farads?",
      answer: "1,000 pF equals 0.000000001 farads (1.0 × 10⁻⁹ F). This is exactly equal to 1 nanofarad (1 nF) or 0.001 microfarads (0.001 µF)."
    },
    {
      question: "Why must capacitance be in farads for physical equations?",
      answer: "Physical equations such as capacitive reactance (Xc = 1 / [2πfC]) and resonant frequency (f0 = 1 / [2π√(LC)]) are derived using SI coherent base units (amperes, seconds, kilograms, meters). Supplying capacitance in picofarads would cause answers to be off by a factor of 10¹²."
    },
    {
      question: "What does '10p' mean in electronic circuit simulators?",
      answer: "In SPICE circuit netlists (such as LTspice), the suffix 'p' represents pico (10⁻¹²). Writing '10p' assigns a capacitance of 10 picofarads (10 × 10⁻¹² F)."
    },
    {
      question: "What is the difference between a picofarad and a farad in physical reality?",
      answer: "A picofarad is a tiny electrostatic value found in small surface-mount chips measuring 1 mm across or between adjacent PCB copper traces. A one-farad capacitor is an energy-storage supercapacitor capable of illuminating an LED for minutes."
    },
    {
      question: "How do I enter 22 pF in scientific notation?",
      answer: "22 pF is written as 22 × 10⁻¹² F or in normalized scientific notation as 2.2 × 10⁻¹¹ F."
    },
    {
      question: "What is 47 pF in farads?",
      answer: "47 pF is equal to 4.7 × 10⁻¹¹ F (0.000000000047 F)."
    }
  ],
  relatedList: [
    { label: "Picofarad to Microfarad", from: "picofarad", to: "microfarad" },
    { label: "Picofarad to Nanofarad", from: "picofarad", to: "nanofarad" },
    { label: "Farad to Picofarad", from: "farad", to: "picofarad" },
    { label: "Nanofarad to Farad", from: "nanofarad", to: "farad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "IEEE Standards Association. <em>IEEE Std 280: Standard Letter Symbols for Quantities Used in Electrical Science and Electrical Engineering</em>."
  ]
};
