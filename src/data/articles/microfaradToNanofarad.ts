import { CustomArticleData } from "./types";

export const microfaradToNanofarad: CustomArticleData = {
  fromUnitId: "microfarad",
  toUnitId: "nanofarad",
  seoTitle: "Microfarad to Nanofarad Converter - µF to nF",
  metaDescription: "Convert microfarads to nanofarads (µF to nF) instantly. Learn the 1,000x multiplication formula, schematic conversion conventions, and worked examples.",
  h1: "Microfarad to Nanofarad Converter",
  introduction: [
    "Converting microfarads (µF) to nanofarads (nF) is one of the most frequent calculations in analog circuit design, printed circuit board (PCB) layout, and electronics repair. Both units belong to the International System of Units (SI) metric hierarchy, separated by exactly three orders of magnitude.",
    "Engineers and hobbyists frequently encounter this conversion when reading regional schematics. While European engineering documentation standardizes on the nanofarad scale (such as 100 nF or 47 nF), North American diagrams often represent the identical component as 0.1 µF or 0.047 µF. This converter eliminates ambiguity and ensures proper capacitor sourcing."
  ],
  quickAnswer: {
    text: "To convert microfarads to nanofarads, multiply your microfarad value by 1,000. For example, a standard 0.1 µF IC bypass capacitor equals exactly 100 nF.",
    formulaDisplay: "1 µF = 1,000 nF",
    subtext: "Shift the decimal point three positions to the right to obtain nanofarads from microfarads."
  },
  aboutSourceUnit: {
    title: "About the Microfarad (µF)",
    text: "The microfarad (symbol: µF or occasionally uF in plain ASCII) represents one-millionth of a farad (10⁻⁶ F). Named after English scientist Michael Faraday, the microfarad is the baseline unit for general-purpose electronic filtering. It is commonly implemented across aluminum electrolytic, tantalum, and high-capacitance multi-layer ceramic capacitors (MLCCs) found in DC-DC converters, power distribution networks, and audio coupling stages."
  },
  aboutTargetUnit: {
    title: "About the Nanofarad (nF)",
    text: "The nanofarad (symbol: nF) represents one-billionth of a farad (10⁻⁹ F). It bridges the gap between microfarads and picofarads, commonly spanning the range from 1 nF to 999 nF. Nanofarad-rated capacitors typically use plastic film (polyester, polypropylene) or Class 1 and Class 2 ceramic dielectrics (such as C0G/NP0 and X7R). They are widely used in analog audio filters, timing networks, and electromagnetic interference (EMI) suppression."
  },
  relationship: "The mathematical relationship between microfarads and nanofarads is defined by metric decimal prefixes. Since 'micro-' denotes 10⁻⁶ and 'nano-' denotes 10⁻⁹, one microfarad contains exactly 1,000 nanofarads.",
  relationshipTitle: "Conversion Relationship & Prefix Scaling",
  relationshipItems: [
    { label: "Microfarads (µF) to Nanofarads (nF)", value: "Multiply by 1,000" },
    { label: "Nanofarads (nF) to Microfarads (µF)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Base SI Unit Relationship", value: "1 µF = 10⁻⁶ F | 1 nF = 10⁻⁹ F" },
    { label: "Ratio", value: "1 µF : 1,000 nF (10³)" }
  ],
  formula: {
    text: "To convert any capacitance expressed in microfarads into nanofarads, multiply the numeric quantity by 1,000.",
    math: "Capacitance (nF) = Capacitance (µF) × 1,000",
    subtext: "Alternatively: nF = µF × 10³"
  },
  formulaTitle: "Mathematical Derivation of the Conversion Formula",
  practicalTip: {
    title: "Regional Schematic Nomenclature",
    text: "If you see '100n' or '47n' marked on a European schematic without a unit letter suffix, the 'n' serves as both the unit multiplier (nanofarads) and the decimal point. For example, '4n7' indicates 4.7 nF, which equals 0.0047 µF. This notation prevents decimal points from being lost during photocopying or printing."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Digital Microcontroller Decoupling Capacitor",
        subtitle: "A bill of materials specifies a 0.1 µF ceramic capacitor placed adjacent to each VDD pin of an STM32 microcontroller. Convert this value to nanofarads.",
        steps: [
          "Identify the given value in microfarads: C = 0.1 µF.",
          "Apply the standard conversion formula: nF = µF × 1,000.",
          "Calculate: 0.1 × 1,000 = 100.",
          "Conclusion: 0.1 µF is equal to exactly 100 nF (commonly labeled with EIA code '104')."
        ]
      },
      {
        title: "Example 2: Sallen-Key Active Low-Pass Audio Filter",
        subtitle: "An analog equalization stage specifies a feedback capacitor of 0.022 µF. Express this capacitance in nanofarads for component procurement.",
        steps: [
          "State the initial capacitance: C = 0.022 µF.",
          "Multiply by the scale factor of 1,000: 0.022 × 1,000 = 22.",
          "Conclusion: 0.022 µF is identical to 22 nF (often coded as '223' on film capacitors)."
        ]
      },
      {
        title: "Example 3: Switch-Mode Snubber Network",
        subtitle: "A flyback converter RC snubber circuit uses a 0.0047 µF high-voltage film capacitor across the primary MOSFET. Convert this rating to nanofarads.",
        steps: [
          "Note the starting capacitance: C = 0.0047 µF.",
          "Apply the conversion formula: 0.0047 × 1,000 = 4.7.",
          "Conclusion: 0.0047 µF equals 4.7 nF (or '4n7' in IEC notation)."
        ]
      }
    ]
  },
  table: {
    title: "Microfarad to Nanofarad Reference Table",
    headers: ["Microfarads (µF)", "Nanofarads (nF)", "EIA 3-Digit Code", "Common Circuit Application"],
    rows: [
      { fromVal: "0.001 µF", toVal: "1 nF", extra: "EIA 102 | High-frequency noise suppression" },
      { fromVal: "0.0022 µF", toVal: "2.2 nF", extra: "EIA 222 | Switched-mode power snubber" },
      { fromVal: "0.0047 µF", toVal: "4.7 nF", extra: "EIA 472 | Audio amplifier feedback damping" },
      { fromVal: "0.01 µF", toVal: "10 nF", extra: "EIA 103 | Op-amp intermediate RF bypass" },
      { fromVal: "0.022 µF", toVal: "22 nF", extra: "EIA 223 | Electric guitar tone potentiometer" },
      { fromVal: "0.047 µF", toVal: "47 nF", extra: "EIA 473 | Sallen-Key active crossover filter" },
      { fromVal: "0.1 µF", toVal: "100 nF", extra: "EIA 104 | Universal digital logic IC decoupling" },
      { fromVal: "0.22 µF", toVal: "220 nF", extra: "EIA 224 | Charge pump voltage multiplier" },
      { fromVal: "0.47 µF", toVal: "470 nF", extra: "EIA 474 | Class-D audio amplifier output filter" },
      { fromVal: "1.0 µF", toVal: "1,000 nF", extra: "EIA 105 | Low-dropout (LDO) regulator stabilizer" }
    ]
  },
  expertNote: {
    title: "Understanding EIA Three-Digit Capacitor Marking Codes",
    text: "Small ceramic and film capacitors cannot fit long text markings on their packages. Manufacturers use a three-digit EIA code where the first two digits represent significant figures and the third digit denotes the multiplier in picofarads (10ⁿ pF). For example, code '104' equals 10 × 10⁴ pF = 100,000 pF = 100 nF = 0.1 µF."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Integrated Circuit High-Frequency Decoupling",
        text: "Digital integrated circuits create rapid current transients as their internal transistors switch states. Placing 0.1 µF (100 nF) surface-mount MLCCs directly between VDD and ground provides localized low-impedance charge reservoirs that suppress voltage droop and radio-frequency noise."
      },
      {
        title: "Active Analog Filter Synthesis",
        text: "In audio processing and biosignal acquisition (such as ECG and EMG monitors), multi-pole Butterworth and Chebyshev filters require precise resistor-capacitor pairs. Engineering calculations frequently convert between µF and nF to align design equations with standard E12/E24 capacitor production values."
      },
      {
        title: "Instrumentation and Timing Oscillators",
        text: "Precision timer circuits, including 555-based monostable multivibrators and relaxation oscillators, utilize nanofarad capacitors to achieve microsecond to millisecond pulse widths without demanding impractically large timing resistors."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Because a microfarad is 1,000 times larger than a nanofarad, converting from µF to nF must always yield a larger numerical value.",
      "Misinterpreting decimal placement in printed schematics: A faded photocopied schematic may make '0.01 µF' look like '0.1 µF', leading to a 10x error in filter cutoff frequency. Comparing against the European nF notation clarifies intent.",
      "Confusing nanofarads with picofarads: Remembering that 1 µF = 1,000 nF = 1,000,000 pF avoids accidentally purchasing capacitors that are off by a factor of 1,000.",
      "Overlooking DC voltage bias derating: High-dielectric Class II MLCCs (such as X5R and X7R) can lose up to 70% of their rated capacitance when operating near their rated DC working voltage."
    ]
  },
  faqs: [
    {
      question: "How do I convert microfarads to nanofarads?",
      answer: "To convert microfarads (µF) to nanofarads (nF), multiply the capacitance value by 1,000. For instance, 0.047 µF multiplied by 1,000 equals 47 nF."
    },
    {
      question: "How many nanofarads are in 1 microfarad?",
      answer: "There are exactly 1,000 nanofarads in 1 microfarad. This follows from the SI metric prefixes micro (10⁻⁶) and nano (10⁻⁹)."
    },
    {
      question: "What is 0.1 µF in nanofarads?",
      answer: "0.1 µF equals exactly 100 nF. This is one of the most widely used capacitor values in modern electronics, primarily utilized as a local power supply bypass capacitor for digital logic chips."
    },
    {
      question: "What is 0.01 µF in nanofarads?",
      answer: "0.01 µF is equal to 10 nF. In component coding systems, this corresponds to the EIA three-digit mark '103' (10,000 pF)."
    },
    {
      question: "Why do some schematics use µF while others use nF?",
      answer: "This difference is largely regional and historical. American electronics manufacturers traditionally standardized on microfarads (µF) and picofarads (pF), avoiding nanofarads entirely. European and international standards (IEC 60062) embrace nanofarads (nF) to avoid leading zeros and messy decimal points."
    },
    {
      question: "How do I convert nanofarads back to microfarads?",
      answer: "To convert from nanofarads to microfarads, divide the nanofarad figure by 1,000. For example, 470 nF divided by 1,000 equals 0.47 µF."
    },
    {
      question: "What does a capacitor marked '104' mean in µF and nF?",
      answer: "A capacitor marked '104' represents 10 followed by four zeros in picofarads, which is 100,000 pF. Converting this value yields 100 nF or 0.1 µF."
    },
    {
      question: "What is the R-C-D schematic notation like '4n7'?",
      answer: "In the IEC 60062 component marking code, the prefix letter replaces the decimal point. Thus, '4n7' means 4.7 nF (0.0047 µF), and '47n' means 47 nF (0.047 µF)."
    },
    {
      question: "Can I replace a 100 nF capacitor with a 0.1 µF capacitor?",
      answer: "Yes, absolutely. 100 nF and 0.1 µF are identical capacitance values. Provided the replacement has an equal or higher voltage rating and appropriate dielectric characteristics (such as temperature coefficient and ESR), they are completely interchangeable."
    }
  ],
  relatedList: [
    { label: "Microfarad to Picofarad", from: "microfarad", to: "picofarad" },
    { label: "Microfarad to Farad", from: "microfarad", to: "farad" },
    { label: "Nanofarad to Microfarad", from: "nanofarad", to: "microfarad" },
    { label: "Nanofarad to Picofarad", from: "nanofarad", to: "picofarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "International Electrotechnical Commission (IEC). <em>IEC 60062: Marking codes for resistors and capacitors</em>."
  ]
};
