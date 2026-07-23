import { CustomArticleData } from "./types";

export const faradToPicofarad: CustomArticleData = {
  fromUnitId: "farad",
  toUnitId: "picofarad",
  seoTitle: "Farad to Picofarad Converter - F to pF",
  metaDescription: "Easily convert Farads to Picofarads (F to pF). Understand the mathematical relationship, see step-by-step calculations, and review common applications.",
  h1: "Farad to Picofarad Converter",
  introduction: [
    "Converting Farads (F) to Picofarads (pF) represents one of the widest unit conversions in electronic design. Because a Farad is the base SI unit of capacitance, and a picofarad represents a tiny fraction of a Farad, this conversion spans twelve orders of magnitude.",
    "This calculator provides an instantaneous, highly precise way to convert Farads to Picofarads. Below, we explain the conversion mathematics, provide worked calculation examples, and discuss the primary high-frequency circuits where these ultra-small capacitors are found."
  ],
  quickAnswer: {
    text: "To convert Farads to Picofarads, multiply the Farad value by 1,000,000,000,000 (one trillion). For example, a 0.0000000001 Farad capacitor contains exactly 100 Picofarads of capacitance.",
    formulaDisplay: "1 F = 1,000,000,000,000 pF",
    subtext: "Multiply by one trillion or shift the decimal point twelve places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Farad",
    text: "The Farad (symbol: F) is the SI base unit of electrical capacitance. A capacitor with a value of one Farad stores one coulomb of electrical charge when a potential difference of one volt is applied across its terminal plates. Because this stores an enormous amount of electrostatic field energy, full-scale Farads are usually associated with heavy power grids or supercapacitors."
  },
  aboutTargetUnit: {
    title: "About the Picofarad",
    text: "The Picofarad (symbol: pF) is a metric subunit representing exactly one-trillionth of a Farad (10⁻¹² F). In early electronic engineering documentation, it was sometimes referred to as a 'micro-microfarad' (µµF). It is the standard unit of measurement for ultra-small capacitors used in high-frequency RF transmission, oscillator circuits, and digital microchips."
  },
  relationship: "The relationship between Farads and Picofarads is defined by metric standards. Since 'pico-' denotes a factor of 10⁻¹², one Farad is equivalent to exactly one trillion picofarads.",
  relationshipTitle: "Understanding the Scale",
  relationshipItems: [
    { label: "Farads (F) to Picofarads (pF)", value: "Multiply by 1,000,000,000,000" },
    { label: "Picofarads (pF) to Farads (F)", value: "Divide by 1,000,000,000,000" }
  ],
  formula: {
    text: "To perform this calculation yourself, use this simple multiplication formula. Multiplying by 10¹² scales the massive base Farad down to the tiny picofarad level.",
    math: "Capacitance in pF = Capacitance in F × 1,000,000,000,000",
    subtext: "For manual conversions, shift the decimal point twelve places to the right."
  },
  formulaTitle: "Why the Formula Works",
  practicalTip: {
    title: "Parasitic Capacitance",
    text: "When working in the picofarad range, keep in mind that even the copper traces on a printed circuit board (PCB) have a small amount of parasitic capacitance (typically 1 to 2 pF per inch). At very high frequencies, this stray capacitance can interfere with your circuit's tuning, so PCB layouts must be carefully designed."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: RF Receiver Tuning Cap",
        subtitle: "A radio-frequency synthesizer relies on a ceramic tuning capacitor rated at 0.000000000022 Farads. Convert this value to Picofarads.",
        steps: [
          "Identify the capacitance in Farads: 0.000000000022 F.",
          "Write down the formula: pF = F × 1,000,000,000,000.",
          "Multiply the value: 0.000000000022 × 10¹² = 22.",
          "Conclude the calculation: 0.000000000022 Farads is exactly equal to 22 pF."
        ]
      },
      {
        title: "Example 2: Crystal Oscillator Load",
        subtitle: "A microprocessor clock crystal circuit requires a load capacitor of 0.000000000015 Farads. Convert this to Picofarads.",
        steps: [
          "Identify the capacitance in Farads: 0.000000000015 F.",
          "Apply the multiplier: 0.000000000015 × 1,000,000,000,000 = 15.",
          "Verify the calculation: 0.000000000015 Farads is equivalent to 15 pF."
        ]
      }
    ]
  },
  table: {
    title: "Farad to Picofarad Reference Table",
    headers: ["Farads (F)", "Picofarads (pF)", "Common Electronic Functions"],
    rows: [
      { fromVal: "0.000000000001", toVal: "1", extra: "RF parasitic trace matching" },
      { fromVal: "0.00000000001", toVal: "10", extra: "Quartz crystal load stability" },
      { fromVal: "0.000000000022", toVal: "22", extra: "Microcontroller clock oscillation" },
      { fromVal: "0.0000000001", toVal: "100", extra: "RF high-frequency coupling" },
      { fromVal: "0.00000000047", toVal: "470", extra: "Medium frequency noise suppression" },
      { fromVal: "0.000000001", toVal: "1,000", extra: "High-speed digital signal lines" },
      { fromVal: "0.00000001", toVal: "10,000", extra: "Audio filter tone control blocks" },
      { fromVal: "0.0000001", toVal: "100,000", extra: "Power rail decoupling filters" }
    ]
  },
  expertNote: {
    title: "Vintage Schematic Markings",
    text: "In historical electronics documents from the early 20th century, you may encounter the symbol 'mmF' or 'µµF' (micro-microfarads). These are obsolete terms for the modern picofarad. Standardizing these historic values to pF simplifies restoring vintage radios."
  },
  applications: {
    title: "High-Frequency Capacitance Applications",
    items: [
      {
        title: "Quartz Crystal Oscillators",
        text: "Every digital microcontroller relies on a quartz crystal oscillator to keep time. These circuits require tiny picofarad-range capacitors to balance the load and maintain a stable clock frequency."
      },
      {
        title: "Radio Frequency (RF) Antennas",
        text: "RF transmitters and receivers use picofarad-range capacitors to tune LC circuits to specific frequencies, allowing devices like Wi-Fi routers and smartphones to transmit clear data."
      },
      {
        title: "Microchip Internal Gates",
        text: "Modern silicon microchips contain billions of tiny transistors. The physical gates inside these chips have internal capacitances measured in femtofarads or picofarads, which limits their maximum switching speed."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Typographical decimal errors: Writing twelve decimal places manually on a bill of materials is highly prone to mistakes. A single missing zero can render an entire manufacturing run useless. Always verify with an online tool.",
      "Stray probe capacitance: Be aware that standard oscilloscope probes introduce roughly 10 to 15 pF of capacitance into a circuit during measurement, which can detune delicate high-frequency oscillator circuits."
    ]
  },
  faqs: [
    {
      question: "How do I convert Farads to Picofarads?",
      answer: "To convert Farads to Picofarads, multiply the Farad value by 1,000,000,000,000 (one trillion). For example, 0.00000000001 F multiplied by one trillion equals 10 pF."
    },
    {
      question: "What does the abbreviation pF stand for?",
      answer: "The abbreviation pF stands for Picofarad, which is a metric submultiple representing one-trillionth (10⁻¹²) of a Farad."
    },
    {
      question: "What is the old term for picofarad?",
      answer: "The historical term is the 'micro-microfarad', which was abbreviated as µµF or mmF. Modern SI standards replaced this with the simpler term picofarad."
    },
    {
      question: "How many picofarads are in 1 Farad?",
      answer: "There are exactly 1,000,000,000,000 (one trillion) picofarads in a single Farad."
    },
    {
      question: "How do I convert Picofarads back to Farads?",
      answer: "To perform the reverse conversion, divide the Picofarad value by 1,000,000,000,000. For instance, 100 pF divided by one trillion is 0.0000000001 F."
    },
    {
      question: "Is pF larger than nF?",
      answer: "No. A picofarad is smaller than a nanofarad. One nanofarad contains exactly 1,000 picofarads."
    },
    {
      question: "How many picofarads are in half a Farad?",
      answer: "There are exactly 500,000,000,000 (500 billion) picofarads in 0.5 Farads."
    },
    {
      question: "Can I convert decimal Farads to Picofarads?",
      answer: "Yes. For example, 0.00000000047 F multiplied by one trillion is exactly 470 pF."
    }
  ],
  relatedList: [
    { label: "Picofarad to Farad", from: "picofarad", to: "farad" },
    { label: "Farad to Millifarad", from: "farad", to: "millifarad" },
    { label: "Farad to Microfarad", from: "farad", to: "microfarad" },
    { label: "Farad to Nanofarad", from: "farad", to: "nanofarad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>.",
    "IEEE Standards Association. <em>Standard Symbols for Electrical and Electronics Engineering</em>."
  ]
};
