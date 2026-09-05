import { CustomArticleData } from "./types";

export const microfaradToPicofarad: CustomArticleData = {
  fromUnitId: "microfarad",
  toUnitId: "picofarad",
  seoTitle: "Microfarad to Picofarad Converter - µF to pF",
  metaDescription: "Convert microfarads to picofarads (µF to pF) with our precision engineering calculator. Explore the 1,000,000x formula, EIA codes, and worked examples.",
  h1: "Microfarad to Picofarad Converter",
  introduction: [
    "Converting microfarads (µF) to picofarads (pF) bridges six orders of magnitude in electrical capacitance. While microfarads quantify bulk charge storage in power supply filters and audio circuits, picofarads measure minuscule electrostatic charges across radio frequency (RF) circuits, quartz crystal oscillators, and semiconductor junction capacitances.",
    "This conversion is crucial when interpreting component marking codes, deciphering vintage schematics that use archaic terminology such as 'micromicrofarads' (µµF or mmfd), and calculating high-frequency impedance. Our guide walks through the exact mathematical conversion, practical circuit examples, and standard component codes."
  ],
  quickAnswer: {
    text: "To convert microfarads to picofarads, multiply the microfarad value by 1,000,000 (one million). For example, a 0.001 µF film capacitor equals exactly 1,000 pF.",
    formulaDisplay: "1 µF = 1,000,000 pF",
    subtext: "Shift the decimal point six places to the right to convert microfarads directly into picofarads."
  },
  aboutSourceUnit: {
    title: "About the Microfarad (µF)",
    text: "The microfarad (symbol: µF) is an SI-derived unit of capacitance equal to one-millionth of a farad (10⁻⁶ F). Microfarad-range capacitors are universally employed in power management, AC line rectification, audio signal coupling, and motor start systems. Common dielectric technologies in this range include multi-layer ceramic (MLCC), aluminum electrolytic, tantalum, and metallized polyester film."
  },
  aboutTargetUnit: {
    title: "About the Picofarad (pF)",
    text: "The picofarad (symbol: pF) is an SI metric submultiple representing one-trillionth of a farad (10⁻¹² F). Picofarad values are the standard unit of measurement in RF communications, wireless antennas, tuning circuits, and high-speed PCB signal integrity analysis. Ceramic disc, silver mica, and surface-mount C0G/NP0 capacitors dominate this range due to their superior high-frequency stability and ultra-low dielectric losses."
  },
  relationship: "The relationship between microfarads and picofarads is governed by the metric prefix scale. One microfarad represents 10⁻⁶ farads, while one picofarad represents 10⁻¹² farads. Consequently, there are exactly one million (10⁶) picofarads in a single microfarad.",
  relationshipTitle: "Prefix Scaling and Mathematical Relationship",
  relationshipItems: [
    { label: "Microfarads (µF) to Picofarads (pF)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Picofarads (pF) to Microfarads (µF)", value: "Divide by 1,000,000 (or multiply by 10⁻⁶)" },
    { label: "Prefix Order of Magnitude", value: "Micro (10⁻⁶) to Pico (10⁻¹²): 6 decimal places" },
    { label: "Vintage Schematic Equivalence", value: "1 pF = 1 µµF = 1 mmfd" }
  ],
  formula: {
    text: "To convert microfarads into picofarads, multiply the microfarad figure by one million.",
    math: "Capacitance (pF) = Capacitance (µF) × 1,000,000",
    subtext: "In scientific notation: pF = µF × 10⁶"
  },
  formulaTitle: "The Conversion Equation",
  practicalTip: {
    title: "Historical 'mmfd' and 'µµF' Markings",
    text: "When restoring vintage electronics manufactured before the 1970s—such as antique tube radios, ham radio transceivers, and classic guitar amplifiers—you will often see capacitors marked with 'mmfd' or 'µµF' (micromicrofarads). These terms are historically synonymous with modern picofarads (1 mmfd = 1 pF). If a schematic lists 0.005 µF, converting to 5,000 pF allows you to source modern replacement components effortlessly."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: High-Frequency RF Snubber Capacitor",
        subtitle: "A high-speed switching supply uses an RC snubber network with a specified capacitance of 0.00047 µF. Express this capacitance in picofarads.",
        steps: [
          "Record the starting capacitance: C = 0.00047 µF.",
          "Apply the conversion formula: pF = µF × 1,000,000.",
          "Multiply: 0.00047 × 1,000,000 = 470.",
          "Result: 0.00047 µF equals 470 pF (marked with EIA code '471')."
        ]
      },
      {
        title: "Example 2: Audio Treble Bleed Circuit",
        subtitle: "An electric guitar volume potentiometer is modified with a 0.001 µF capacitor to retain high frequencies at lower volumes. Find the picofarad equivalent.",
        steps: [
          "State the microfarad value: C = 0.001 µF.",
          "Apply the scale factor: 0.001 × 1,000,000 = 1,000.",
          "Result: 0.001 µF is exactly 1,000 pF (or 1 nF, EIA code '102')."
        ]
      },
      {
        title: "Example 3: Universal Digital Bypass Capacitor",
        subtitle: "Convert a common 0.1 µF ceramic MLCC bypass capacitor to picofarads to interpret its three-digit package code.",
        steps: [
          "Identify the starting capacitance: C = 0.1 µF.",
          "Calculate: 0.1 × 1,000,000 = 100,000 pF.",
          "Formulate EIA code: 10 followed by 4 zeros is '104'.",
          "Result: 0.1 µF equals 100,000 pF."
        ]
      }
    ]
  },
  table: {
    title: "Microfarad to Picofarad Conversion Reference Table",
    headers: ["Microfarads (µF)", "Picofarads (pF)", "EIA 3-Digit Code", "Common Circuit Application"],
    rows: [
      { fromVal: "0.00001 µF", toVal: "10 pF", extra: "EIA 100 | Quartz crystal load capacitor" },
      { fromVal: "0.000047 µF", toVal: "47 pF", extra: "EIA 470 | High-frequency RF antenna tank" },
      { fromVal: "0.0001 µF", toVal: "100 pF", extra: "EIA 101 | Op-amp phase compensation" },
      { fromVal: "0.00022 µF", toVal: "220 pF", extra: "EIA 221 | Audio power amplifier Miller cap" },
      { fromVal: "0.00047 µF", toVal: "470 pF", extra: "EIA 471 | High-speed digital signal damping" },
      { fromVal: "0.001 µF", toVal: "1,000 pF", extra: "EIA 102 | Switched-mode power snubber (1 nF)" },
      { fromVal: "0.0047 µF", toVal: "4,700 pF", extra: "EIA 472 | Tone control filter circuit (4.7 nF)" },
      { fromVal: "0.01 µF", toVal: "10,000 pF", extra: "EIA 103 | Radio IF stage coupling (10 nF)" },
      { fromVal: "0.047 µF", toVal: "47,000 pF", extra: "EIA 473 | Active bandpass filter (47 nF)" },
      { fromVal: "0.1 µF", toVal: "100,000 pF", extra: "EIA 104 | Universal logic decoupling (100 nF)" },
      { fromVal: "1.0 µF", toVal: "1,000,000 pF", extra: "EIA 105 | Bulk voltage rail stabilizer (1,000 nF)" }
    ]
  },
  expertNote: {
    title: "Dielectric Selection Across the Transition Range",
    text: "When selecting capacitors in the range between 100 pF and 100,000 pF (0.0001 µF to 0.1 µF), dielectric choice dictates circuit stability. For precision filters and RF oscillators, specify C0G/NP0 ceramic capacitors because their capacitance remains rock-solid across temperature and voltage. For non-critical power supply decoupling, X7R or X5R ceramics provide higher volumetric density at lower cost."
  },
  applications: {
    title: "Where Microfarad to Picofarad Conversions Matter",
    items: [
      {
        title: "RF Tuned Resonant Tanks & Matching",
        text: "LC resonant circuits operating in the high-frequency (HF) and very-high-frequency (VHF) spectrums calculate inductive and capacitive reactances using base farads. Converting between fractional microfarads and integer picofarads simplifies tuning calculations for inductors and transmission line stubs."
      },
      {
        title: "Microcontroller Oscillator Load Capacitance",
        text: "Microcontrollers utilize external quartz crystal resonators requiring load capacitors (typically 12 pF to 22 pF). Sourcing or computing equivalent capacitance formulas requires seamless conversions between fractional microfarads and whole picofarads."
      },
      {
        title: "Vintage Audio and Radio Restoration",
        text: "Schematics from early audio amplifiers, vacuum tube communication receivers, and phonographs frequently list capacitors as fractions of a microfarad (e.g., 0.00025 µF). Converting these values to picofarads (250 pF) allows technicians to replace leaky waxed paper caps with modern mica or film components."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in µF to pF Conversions",
    items: [
      "Decimal shifting errors: Converting across six decimal places makes manual counting prone to errors. Using our converter or scientific notation (10⁶) prevents 10x or 100x component rating blunders.",
      "Misidentifying three-digit EIA codes: Confusing the multiplier digit with a direct value (for example, reading '471' as 471 µF rather than 47 × 10¹ pF = 470 pF).",
      "Overlooking parasitic capacitance: In sensitive RF systems, stray PCB trace capacitance (typically 1 pF to 5 pF per inch) can represent a significant percentage of small picofarad capacitors.",
      "Neglecting voltage ratings: Picofarad-rated high-frequency ceramic disc capacitors often have voltage ratings from 50V to 3kV, whereas miniature surface-mount microfarad capacitors often carry low ratings (6.3V to 25V)."
    ]
  },
  faqs: [
    {
      question: "How do I convert microfarads to picofarads?",
      answer: "To convert microfarads (µF) to picofarads (pF), multiply the microfarad value by 1,000,000. For instance, 0.0047 µF multiplied by 1,000,000 gives 4,700 pF."
    },
    {
      question: "How many picofarads are in one microfarad?",
      answer: "There are exactly 1,000,000 (one million) picofarads in one microfarad. In mathematical notation, 1 µF = 10⁶ pF."
    },
    {
      question: "What is 0.001 µF in picofarads?",
      answer: "0.001 µF is equal to 1,000 pF (which is also equal to 1 nF). On ceramic disc or film capacitors, this is marked with the code '102'."
    },
    {
      question: "What is 0.01 µF in picofarads?",
      answer: "0.01 µF equals 10,000 pF (or 10 nF). Its standard EIA three-digit package code is '103'."
    },
    {
      question: "What does 'mmfd' mean on an antique radio schematic?",
      answer: "'mmfd' stands for micromicrofarads, an obsolete American term for picofarads. 1 mmfd is exactly equal to 1 pF."
    },
    {
      question: "How do I convert picofarads back to microfarads?",
      answer: "To convert picofarads to microfarads, divide the picofarad value by 1,000,000. For example, 220 pF divided by 1,000,000 equals 0.00022 µF."
    },
    {
      question: "What is 0.1 µF in picofarads?",
      answer: "0.1 µF is equal to 100,000 pF (or 100 nF). On three-digit capacitor markings, it is designated by '104'."
    },
    {
      question: "Why are capacitors labeled in pF, nF, and µF instead of just Farads?",
      answer: "A one-farad capacitor is an enormous amount of electrostatic capacitance. Practical discrete circuit components hold millionths (µF), billionths (nF), or trillionths (pF) of a farad. Metric prefixes keep schematic values manageable without writing long strings of leading zeros."
    },
    {
      question: "What is the difference between a ceramic disc capacitor and an electrolytic capacitor?",
      answer: "Ceramic disc capacitors generally provide low capacitance (1 pF to 100,000 pF), are non-polarized, and excel at high frequencies. Electrolytic capacitors provide higher capacitance (0.1 µF to thousands of µF), are polarized, and excel at low-frequency DC voltage filtering."
    }
  ],
  relatedList: [
    { label: "Microfarad to Nanofarad", from: "microfarad", to: "nanofarad" },
    { label: "Microfarad to Farad", from: "microfarad", to: "farad" },
    { label: "Picofarad to Microfarad", from: "picofarad", to: "microfarad" },
    { label: "Nanofarad to Picofarad", from: "nanofarad", to: "picofarad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units (SI)</em>.",
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>.",
    "Electronic Industries Alliance (EIA). <em>EIA-198: Ceramic Dielectric Capacitors Classes I, II, III and IV</em>."
  ]
};
