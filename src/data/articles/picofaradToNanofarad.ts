import { CustomArticleData } from "./types";

export const picofaradToNanofarad: CustomArticleData = {
  fromUnitId: "picofarad",
  toUnitId: "nanofarad",
  seoTitle: "Picofarad to Nanofarad Converter - pF to nF",
  metaDescription: "Convert picofarads to nanofarads (pF to nF) with our precision engineering calculator. Learn the 1,000 division rule, EIA code conversion, and worked examples.",
  h1: "Picofarad to Nanofarad Converter",
  introduction: [
    "Converting picofarads (pF) to nanofarads (nF) is an essential task for electronic hardware designers, radio frequency (RF) engineers, and electronics technicians. Because component marking codes on physical ceramic capacitors natively count picofarads, while international circuit schematics frequently specify values in nanofarads, converting between them is an everyday benchtop necessity.",
    "Both units reside in adjacent metric decades separated by a factor of 1,000. This precision converter and engineering guide details the mathematical conversion, component coding systems, and real-world circuit applications across audio, RF, and digital hardware."
  ],
  quickAnswer: {
    text: "To convert picofarads to nanofarads, divide the picofarad value by 1,000, or multiply by 0.001. For example, a 10,000 pF ceramic disc capacitor (code '103') equals exactly 10 nF.",
    formulaDisplay: "1 pF = 0.001 nF (10⁻³ nF)",
    subtext: "Shift the decimal point three positions to the left to convert picofarads into nanofarads."
  },
  aboutSourceUnit: {
    title: "About the Picofarad (pF)",
    text: "The picofarad (symbol: pF) is an SI metric submultiple representing one-trillionth of a farad (10⁻¹² F). It serves as the baseline measurement for radio-frequency tank circuits, crystal oscillator load networks, and high-speed printed circuit board parasitic capacitances. Capacitors in the picofarad realm are commonly made from ultra-stable Class 1 C0G/NP0 ceramics or silver mica."
  },
  aboutTargetUnit: {
    title: "About the Nanofarad (nF)",
    text: "The nanofarad (symbol: nF) represents one-billionth of a farad (10⁻⁹ F). It is the predominant unit for medium-frequency circuit elements, including active audio filters, tone controls, intermediate-frequency (IF) stages, and power supply bypass arrays. Nanofarad-range capacitors typically utilize multi-layer ceramic (MLCC) or plastic film dielectrics."
  },
  relationship: "The relationship between picofarads and nanofarads is defined by metric prefix scaling. Since 'pico-' denotes 10⁻¹² and 'nano-' denotes 10⁻⁹, dividing 10⁻¹² by 10⁻⁹ yields 10⁻³ (0.001). Therefore, one picofarad equals exactly 0.001 nanofarads, and 1,000 picofarads equal one nanofarad.",
  relationshipTitle: "Prefix Ratio and Mathematical Hierarchy",
  relationshipItems: [
    { label: "Picofarads (pF) to Nanofarads (nF)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Nanofarads (nF) to Picofarads (pF)", value: "Multiply by 1,000" },
    { label: "Decimal Shift", value: "3 places to the left" },
    { label: "Ratio", value: "1,000 pF : 1 nF" }
  ],
  formula: {
    text: "To convert any capacitance value from picofarads to nanofarads, divide the number of picofarads by 1,000.",
    math: "Capacitance (nF) = Capacitance (pF) ÷ 1,000 = Capacitance (pF) × 0.001",
    subtext: "In scientific notation: nF = pF × 10⁻³"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Quick Conversion of EIA Capacitor Codes to nF",
    text: "Most ceramic capacitors use 3-digit EIA codes where the base value is in picofarads. Converting directly to nanofarads is simple: 102 = 1,000 pF = 1 nF; 222 = 2,200 pF = 2.2 nF; 472 = 4,700 pF = 4.7 nF; 103 = 10,000 pF = 10 nF; 473 = 47,000 pF = 47 nF; 104 = 100,000 pF = 100 nF. Just drop the last three zeros from the picofarad value to get nanofarads."
  },
  examples: {
    title: "Step-by-Step Worked Calculation Examples",
    items: [
      {
        title: "Example 1: Op-Amp Audio Filter Capacitor",
        subtitle: "A high-fidelity preamplifier tone stage specifies a capacitor marked '222' (2,200 pF). Express this capacitance in nanofarads for an IEC-standard schematic.",
        steps: [
          "State the initial value: C = 2,200 pF.",
          "Apply the conversion formula: nF = pF ÷ 1,000.",
          "Calculate: 2,200 ÷ 1,000 = 2.2.",
          "Conclusion: 2,200 pF equals 2.2 nF (often written as '2n2' in European schematics)."
        ]
      },
      {
        title: "Example 2: Guitar Tone Control Circuit",
        subtitle: "An electric guitar tone stack uses a capacitor marked '473' (47,000 pF). Convert this value to nanofarads.",
        steps: [
          "Identify the picofarad figure: C = 47,000 pF.",
          "Divide by 1,000: 47,000 ÷ 1,000 = 47.",
          "Conclusion: 47,000 pF equals 47 nF (or 0.047 µF)."
        ]
      },
      {
        title: "Example 3: RF Snubber Network",
        subtitle: "Convert a 1,000 pF snubber capacitor into nanofarads.",
        steps: [
          "Given value: C = 1,000 pF.",
          "Calculate: 1,000 × 0.001 = 1.0.",
          "Conclusion: 1,000 pF is exactly 1 nF (EIA code '102')."
        ]
      }
    ]
  },
  table: {
    title: "Picofarad to Nanofarad Quick Reference Table",
    headers: ["Picofarads (pF)", "Nanofarads (nF)", "Microfarad Equivalent", "EIA 3-Digit Code"],
    rows: [
      { fromVal: "100 pF", toVal: "0.1 nF", extra: "0.0001 µF", extra2: "EIA 101" },
      { fromVal: "220 pF", toVal: "0.22 nF", extra: "0.00022 µF", extra2: "EIA 221" },
      { fromVal: "470 pF", toVal: "0.47 nF", extra: "0.00047 µF", extra2: "EIA 471" },
      { fromVal: "1,000 pF", toVal: "1.0 nF", extra: "0.001 µF", extra2: "EIA 102" },
      { fromVal: "2,200 pF", toVal: "2.2 nF", extra: "0.0022 µF", extra2: "EIA 222" },
      { fromVal: "4,700 pF", toVal: "4.7 nF", extra: "0.0047 µF", extra2: "EIA 472" },
      { fromVal: "10,000 pF", toVal: "10.0 nF", extra: "0.01 µF", extra2: "EIA 103" },
      { fromVal: "22,000 pF", toVal: "22.0 nF", extra: "0.022 µF", extra2: "EIA 223" },
      { fromVal: "47,000 pF", toVal: "47.0 nF", extra: "0.047 µF", extra2: "EIA 473" },
      { fromVal: "100,000 pF", toVal: "100.0 nF", extra: "0.1 µF", extra2: "EIA 104" }
    ]
  },
  expertNote: {
    title: "European R-C-D Notation",
    text: "In European schematics complying with IEC 60062, the unit letter is placed at the decimal position to prevent typographical errors. For example, 1,500 pF becomes 1.5 nF, printed as '1n5'. Similarly, 4,700 pF is written as '4n7', and 47,000 pF is written as '47n'. Understanding this notation allows seamless translation between pF package codes and international documentation."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Translating Component Markings to Schematics",
        text: "Assembly technicians use picofarad to nanofarad conversion when verifying reel components against schematic bills of materials. Correlating a reel labeled '473' (47,000 pF) to a BOM entry of '47 nF' ensures correct pick-and-place setup."
      },
      {
        title: "Phase-Locked Loop (PLL) Loop Filter Tuning",
        text: "Frequency synthesizers employ RC loop filters designed with nanofarad and picofarad capacitors to set the damping factor and loop bandwidth, controlling lock time and phase jitter."
      },
      {
        title: "Audio Tone Stacks and Active Equalizers",
        text: "Graphic equalizers, Baxandall tone controls, and guitar tone circuits use capacitor values between 1,000 pF (1 nF) and 100,000 pF (100 nF) to tailor specific audio frequency bands."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Because a picofarad is 1,000 times smaller than a nanofarad, converting from pF to nF must result in a smaller number. Multiplying by 1,000 results in a million-fold error.",
      "Misreading 3-digit EIA codes: Confusing code '103' (10,000 pF = 10 nF) with 103 pF.",
      "Overlooking tolerance ratings: High-k ceramic capacitors (such as Y5V) can vary by +20% / -80% with temperature. For critical filter frequencies, always specify C0G/NP0 or metallized film capacitors.",
      "Misidentifying leading zeros: 100 pF equals 0.1 nF, whereas 10 pF equals 0.01 nF."
    ]
  },
  faqs: [
    {
      question: "How do I convert picofarads to nanofarads?",
      answer: "To convert picofarads (pF) to nanofarads (nF), divide the picofarad value by 1,000, or multiply by 0.001. For example, 4,700 pF divided by 1,000 equals 4.7 nF."
    },
    {
      question: "What is 1,000 pF in nanofarads?",
      answer: "1,000 pF is equal to exactly 1 nF (marked with EIA code '102'). In microfarads, it equals 0.001 µF."
    },
    {
      question: "What is 10,000 pF in nanofarads?",
      answer: "10,000 pF is equal to 10 nF (EIA code '103'). In microfarads, this equals 0.01 µF."
    },
    {
      question: "What is 100,000 pF in nanofarads?",
      answer: "100,000 pF equals 100 nF (EIA code '104'). This is also identical to 0.1 µF."
    },
    {
      question: "How many nanofarads are in 1 picofarad?",
      answer: "There are 0.001 nanofarads (1 × 10⁻³ nF) in 1 picofarad. Conversely, one nanofarad contains 1,000 picofarads."
    },
    {
      question: "What does code '472' mean in nF?",
      answer: "Code '472' represents 47 followed by two zeros in picofarads, which is 4,700 pF. Dividing by 1,000 gives 4.7 nF (or '4n7')."
    },
    {
      question: "What is 100 pF in nanofarads?",
      answer: "100 pF equals 0.1 nF (EIA code '101')."
    },
    {
      question: "Can I replace a 10 nF capacitor with a 10,000 pF capacitor?",
      answer: "Yes. 10 nF and 10,000 pF represent the exact same capacitance. Provided the replacement has an appropriate voltage rating and dielectric characteristics, they are fully interchangeable."
    },
    {
      question: "What does '2n2' mean on a schematic?",
      answer: "'2n2' is the IEC 60062 notation for 2.2 nF. In picofarads, this equals 2,200 pF (marked as '222')."
    }
  ],
  relatedList: [
    { label: "Nanofarad to Picofarad", from: "nanofarad", to: "picofarad" },
    { label: "Picofarad to Microfarad", from: "picofarad", to: "microfarad" },
    { label: "Picofarad to Farad", from: "picofarad", to: "farad" },
    { label: "Microfarad to Nanofarad", from: "microfarad", to: "nanofarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "International Electrotechnical Commission (IEC). <em>IEC 60062: Marking codes for resistors and capacitors</em>."
  ]
};
