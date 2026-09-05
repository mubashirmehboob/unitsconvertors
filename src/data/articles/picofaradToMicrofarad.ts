import { CustomArticleData } from "./types";

export const picofaradToMicrofarad: CustomArticleData = {
  fromUnitId: "picofarad",
  toUnitId: "microfarad",
  seoTitle: "Picofarad to Microfarad Converter - pF to µF",
  metaDescription: "Convert picofarads to microfarads (pF to µF) instantly. Master the 1,000,000 division rule, EIA codes (104, 103, 102), and vintage schematic conversion.",
  h1: "Picofarad to Microfarad Converter",
  introduction: [
    "Converting picofarads (pF) to microfarads (µF) is a core skill for electronics engineers, circuit repair technicians, and DIY audio enthusiasts. Because physical capacitor packaging uses the three-digit Electronic Industries Alliance (EIA) code based in picofarads, while circuit schematics and bills of materials often specify capacitance in microfarads, translating between these units is an everyday necessity.",
    "A microfarad is exactly one million times larger than a picofarad. This engineering guide and calculator allows you to convert seamlessly across six orders of magnitude, decode component markings, and interpret vintage schematics with complete confidence."
  ],
  quickAnswer: {
    text: "To convert picofarads to microfarads, divide the picofarad value by 1,000,000 (one million), or multiply by 10⁻⁶. For example, a 100,000 pF ceramic capacitor (code '104') equals exactly 0.1 µF.",
    formulaDisplay: "1 pF = 0.000001 µF (10⁻⁶ µF)",
    subtext: "Shift the decimal point six places to the left to convert picofarads into microfarads."
  },
  aboutSourceUnit: {
    title: "About the Picofarad (pF)",
    text: "The picofarad (symbol: pF) represents one-trillionth of a farad (10⁻¹² F). It is the standard unit of capacitance for high-frequency radio systems, crystal clock resonators, antenna tuning networks, and semiconductor junction models. Capacitors rated in picofarads typically feature temperature-compensating Class 1 ceramic dielectrics (C0G/NP0) or silver mica, offering tight tolerances and negligible dielectric losses."
  },
  aboutTargetUnit: {
    title: "About the Microfarad (µF)",
    text: "The microfarad (symbol: µF or uF) represents one-millionth of a farad (10⁻⁶ F). It is the industry-standard baseline unit for general electronic circuit design, including power supply smoothing, audio coupling, DC-DC buck conversion, and motor start circuits. Common technologies include multi-layer ceramic (MLCC), tantalum, and aluminum electrolytic capacitors."
  },
  relationship: "The relationship between picofarads and microfarads is governed by the metric prefix scale. One microfarad contains 10⁻⁶ farads, while one picofarad contains 10⁻¹² farads. Dividing 10⁻¹² by 10⁻⁶ gives 10⁻⁶, meaning one picofarad is exactly one-millionth of a microfarad.",
  relationshipTitle: "Prefix Ratio and Mathematical Hierarchy",
  relationshipItems: [
    { label: "Picofarads (pF) to Microfarads (µF)", value: "Divide by 1,000,000 (or multiply by 10⁻⁶)" },
    { label: "Microfarads (µF) to Picofarads (pF)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Decimal Shift", value: "6 places to the left" },
    { label: "Ratio", value: "1,000,000 pF : 1 µF" }
  ],
  formula: {
    text: "To convert any capacitance expressed in picofarads into microfarads, divide the number of picofarads by 1,000,000.",
    math: "Capacitance (µF) = Capacitance (pF) ÷ 1,000,000 = Capacitance (pF) × 10⁻⁶",
    subtext: "In scientific notation: µF = pF × 10⁻⁶"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Rapid Mental Conversion using EIA Codes",
    text: "When reading small ceramic or film capacitors, decode the 3-digit EIA mark directly to microfarads: 102 = 1,000 pF = 0.001 µF; 103 = 10,000 pF = 0.01 µF; 104 = 100,000 pF = 0.1 µF; 105 = 1,000,000 pF = 1.0 µF. Notice that the third digit (multiplier) tracks the number of zeros in picofarads, allowing you to convert to microfarads in seconds."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Digital Logic Bypass Capacitor (Code 104)",
        subtitle: "A multi-layer ceramic chip capacitor is stamped with code '104'. Convert its picofarad rating into microfarads for schematic cross-referencing.",
        steps: [
          "Decode EIA mark: 10 followed by 4 zeros = 100,000 pF.",
          "Apply the conversion formula: µF = pF ÷ 1,000,000.",
          "Calculate: 100,000 ÷ 1,000,000 = 0.1.",
          "Conclusion: 100,000 pF equals exactly 0.1 µF."
        ]
      },
      {
        title: "Example 2: Sallen-Key Low-Pass Filter Capacitor (Code 473)",
        subtitle: "An audio equalizer schematic calls for a capacitor marked '473'. Determine the value in microfarads.",
        steps: [
          "Decode EIA mark: 47 followed by 3 zeros = 47,000 pF.",
          "Apply the formula: 47,000 ÷ 1,000,000 = 0.047.",
          "Conclusion: 47,000 pF is equal to 0.047 µF (or 47 nF)."
        ]
      },
      {
        title: "Example 3: Switch-Mode Snubber Capacitor (Code 102)",
        subtitle: "Convert a 1,000 pF snubber capacitor into microfarads.",
        steps: [
          "Given value: C = 1,000 pF.",
          "Calculate: 1,000 × 10⁻⁶ = 0.001.",
          "Conclusion: 1,000 pF equals 0.001 µF (or 1 nF)."
        ]
      }
    ]
  },
  table: {
    title: "Picofarad to Microfarad Quick Reference Table",
    headers: ["Picofarads (pF)", "Microfarads (µF)", "Nanofarad Equivalent", "EIA 3-Digit Code"],
    rows: [
      { fromVal: "100 pF", toVal: "0.0001 µF", extra: "0.1 nF", extra2: "EIA 101" },
      { fromVal: "220 pF", toVal: "0.00022 µF", extra: "0.22 nF", extra2: "EIA 221" },
      { fromVal: "470 pF", toVal: "0.00047 µF", extra: "0.47 nF", extra2: "EIA 471" },
      { fromVal: "1,000 pF", toVal: "0.001 µF", extra: "1.0 nF", extra2: "EIA 102" },
      { fromVal: "2,200 pF", toVal: "0.0022 µF", extra: "2.2 nF", extra2: "EIA 222" },
      { fromVal: "4,700 pF", toVal: "0.0047 µF", extra: "4.7 nF", extra2: "EIA 472" },
      { fromVal: "10,000 pF", toVal: "0.01 µF", extra: "10 nF", extra2: "EIA 103" },
      { fromVal: "22,000 pF", toVal: "0.022 µF", extra: "22 nF", extra2: "EIA 223" },
      { fromVal: "47,000 pF", toVal: "0.047 µF", extra: "47 nF", extra2: "EIA 473" },
      { fromVal: "100,000 pF", toVal: "0.1 µF", extra: "100 nF", extra2: "EIA 104" },
      { fromVal: "1,000,000 pF", toVal: "1.0 µF", extra: "1,000 nF", extra2: "EIA 105" }
    ]
  },
  expertNote: {
    title: "Restoring Vintage Radios and Tube Amplifiers",
    text: "Before the 1970s, American schematics from companies like Fender, Gibson, and RCA frequently marked capacitors in fractional microfarads (e.g., .02 µF or .005 µF) or in micromicrofarads (µµF or mmfd). Remember that 1 mmfd = 1 µµF = 1 pF. A schematic listing 5,000 mmfd translates to 5,000 pF or 0.005 µF, simplifying component replacement with modern film caps."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Component Sourcing and Cross-Referencing",
        text: "Distributor inventories from DigiKey, Mouser, or element14 index capacitors by microfarad values, while package labels and tape-and-reel packages print EIA picofarad codes. Translating pF to µF eliminates ordering errors on production lines."
      },
      {
        title: "High-Frequency Decoupling and Signal Conditioning",
        text: "Designing power rails for high-speed FPGAs requires pairing 100,000 pF (0.1 µF) bypass capacitors with 1,000 pF (0.001 µF) high-frequency suppressors to ensure low impedance across multiple decades of noise frequencies."
      },
      {
        title: "Audio Tone Stacks and Guitar Circuitry",
        text: "Classic guitar amplifiers utilize passive treble, middle, and bass networks where capacitor values range from 250 pF (0.00025 µF) for treble bleed to 47,000 pF (0.047 µF) for bass roll-off. Engineers constantly convert between pF and µF when tuning frequency responses."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from a small unit (pF) to a larger unit (µF) must yield a smaller numeric value. Multiplying by 1,000,000 creates a massive error.",
      "Misplacing leading zeros: 1,000 pF is 0.001 µF, not 0.01 µF. Shifting six decimal places requires careful counting of zeros.",
      "Reading code '104' as 104 pF: Code '104' means 10 × 10⁴ pF = 100,000 pF = 0.1 µF.",
      "Ignoring dielectric voltage rating: When replacing vintage high-voltage tubular capacitors (often rated at 400V or 600V) with modern ceramic or film capacitors, ensure the new part meets or exceeds the required working DC voltage."
    ]
  },
  faqs: [
    {
      question: "How do I convert picofarads to microfarads?",
      answer: "To convert picofarads (pF) to microfarads (µF), divide the picofarad value by 1,000,000 or multiply by 10⁻⁶. For instance, 47,000 pF divided by 1,000,000 equals 0.047 µF."
    },
    {
      question: "What is 100,000 pF in microfarads?",
      answer: "100,000 pF is equal to exactly 0.1 µF. In nanofarads, this equals 100 nF, and on capacitor markings it is coded as '104'."
    },
    {
      question: "What is 1,000 pF in microfarads?",
      answer: "1,000 pF equals 0.001 µF (or 1 nF). Its standard three-digit EIA package marking is '102'."
    },
    {
      question: "What is 10,000 pF in microfarads?",
      answer: "10,000 pF equals 0.01 µF (or 10 nF). It is designated by the code '103'."
    },
    {
      question: "How many microfarads are in 1 picofarad?",
      answer: "There are 0.000001 microfarads (1 × 10⁻⁶ µF) in 1 picofarad. Conversely, 1 microfarad contains 1,000,000 picofarads."
    },
    {
      question: "What does '104' mean on a small ceramic capacitor?",
      answer: "The marking '104' is an EIA code representing 10 followed by 4 zeros in picofarads, which equals 100,000 pF. In microfarads, this is 0.1 µF (or 100 nF)."
    },
    {
      question: "What does 'mmfd' mean on old schematics?",
      answer: "'mmfd' stands for micromicrofarads, an archaic term for picofarads. 1 mmfd is exactly 1 pF, which equals 0.000001 µF."
    },
    {
      question: "What is 4,700 pF in microfarads?",
      answer: "4,700 pF equals 0.0047 µF (or 4.7 nF, marked as '472')."
    },
    {
      question: "Can I replace a 0.022 µF capacitor with a 22,000 pF capacitor?",
      answer: "Yes. 0.022 µF and 22,000 pF are identical capacitance values (also known as 22 nF or code '223')."
    }
  ],
  relatedList: [
    { label: "Microfarad to Picofarad", from: "microfarad", to: "picofarad" },
    { label: "Picofarad to Nanofarad", from: "picofarad", to: "nanofarad" },
    { label: "Picofarad to Farad", from: "picofarad", to: "farad" },
    { label: "Nanofarad to Microfarad", from: "nanofarad", to: "microfarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "Electronic Industries Alliance (EIA). <em>EIA-198: Standard for Ceramic Capacitors</em>."
  ]
};
