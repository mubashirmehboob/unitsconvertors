import { CustomArticleData } from "./types";

export const nanofaradToMicrofarad: CustomArticleData = {
  fromUnitId: "nanofarad",
  toUnitId: "microfarad",
  seoTitle: "Nanofarad to Microfarad Converter - nF to µF",
  metaDescription: "Convert nanofarads to microfarads (nF to µF) instantly. Master the 1,000 division rule, EIA capacitor codes (104, 103), and schematic conventions.",
  h1: "Nanofarad to Microfarad Converter",
  introduction: [
    "Converting nanofarads (nF) to microfarads (µF) is among the most frequent tasks in electronic circuit prototyping, PCB assembly, and schematic interpretation. Both units reside in adjacent metric decades separated by a factor of 1,000.",
    "This calculation frequently arises due to historical differences in schematic conventions. While European and international engineering standards specify values in nanofarads (such as 100 nF or 47 nF), North American designers and distributor catalogs often list the exact same components as 0.1 µF or 0.047 µF. This converter provides instantaneous, accurate translations between both formats."
  ],
  quickAnswer: {
    text: "To convert nanofarads to microfarads, divide the nanofarad value by 1,000, or multiply by 0.001. For example, a standard 100 nF decoupling capacitor equals exactly 0.1 µF.",
    formulaDisplay: "1 nF = 0.001 µF (10⁻³ µF)",
    subtext: "Shift the decimal point three positions to the left to convert nanofarads to microfarads."
  },
  aboutSourceUnit: {
    title: "About the Nanofarad (nF)",
    text: "The nanofarad (symbol: nF) represents one-billionth of a farad (10⁻⁹ F). It is the standard unit of capacitance for audio equalizers, tone stacks, timing networks, and high-frequency bypass circuits. Fabricated from multi-layer ceramic (MLCC) or plastic film dielectrics (such as metallized polyester and polypropylene), nanofarad capacitors provide stable capacitance with low dielectric absorption."
  },
  aboutTargetUnit: {
    title: "About the Microfarad (µF)",
    text: "The microfarad (symbol: µF or uF) represents one-millionth of a farad (10⁻⁶ F). It is the predominant unit for general-purpose electronic filtering, power supply smoothing, and signal coupling. Microfarad-rated capacitors encompass electrolytic, tantalum, and large MLCC formats, typically operating across the range from 0.001 µF up to tens of thousands of microfarads."
  },
  relationship: "The relationship between nanofarads and microfarads is governed by the metric prefix scale. One microfarad equals 10⁻⁶ farads, while one nanofarad equals 10⁻⁹ farads. Dividing 10⁻⁹ by 10⁻⁶ yields 10⁻³ (0.001), meaning 1 nanofarad contains exactly 0.001 microfarads.",
  relationshipTitle: "Conversion Ratio & Mathematical Relationship",
  relationshipItems: [
    { label: "Nanofarads (nF) to Microfarads (µF)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Microfarads (µF) to Nanofarads (nF)", value: "Multiply by 1,000" },
    { label: "Prefix Difference", value: "10⁻⁹ to 10⁻⁶ = 3 decimal places (10³)" },
    { label: "Ratio", value: "1,000 nF : 1 µF" }
  ],
  formula: {
    text: "To convert nanofarads into microfarads, divide the nanofarad figure by 1,000.",
    math: "Capacitance (µF) = Capacitance (nF) ÷ 1,000 = Capacitance (nF) × 0.001",
    subtext: "In scientific notation: µF = nF × 10⁻³"
  },
  formulaTitle: "The Governing Mathematical Formula",
  practicalTip: {
    title: "Decoding the Universal '104' Capacitor Marking",
    text: "The most widely used capacitor in digital electronics is the 100 nF ceramic bypass capacitor. On three-digit EIA packages, it is marked as '104'. This signifies 10 followed by four zeros in picofarads: 100,000 pF. Dividing 100,000 pF by 1,000 gives 100 nF; dividing by another 1,000 yields 0.1 µF. Recognizing that 104 = 100 nF = 0.1 µF saves hours of benchtop troubleshooting."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Microcontroller VDD Decoupling Capacitor",
        subtitle: "A modern schematic specifies a 100 nF ceramic capacitor placed adjacent to an MCU power pin. Convert this value to microfarads for procurement from a distributor listing in µF.",
        steps: [
          "Record the given value: C = 100 nF.",
          "Apply the conversion formula: µF = nF ÷ 1,000.",
          "Calculate: 100 ÷ 1,000 = 0.1.",
          "Conclusion: 100 nF is identical to 0.1 µF."
        ]
      },
      {
        title: "Example 2: Guitar Tone Control Potentiometer",
        subtitle: "A vintage electric guitar tone circuit utilizes a 47 nF 'orange drop' film capacitor. Express this value in microfarads.",
        steps: [
          "State the nanofarad value: C = 47 nF.",
          "Divide by 1,000: 47 ÷ 1,000 = 0.047.",
          "Conclusion: 47 nF equals 0.047 µF (often marked with EIA code '473')."
        ]
      },
      {
        title: "Example 3: Active Op-Amp Bandpass Filter",
        subtitle: "An instrumentation amplifier design specifies a feedback capacitor of 10 nF. Convert this to microfarads.",
        steps: [
          "Given value: C = 10 nF.",
          "Calculate: 10 × 0.001 = 0.01.",
          "Conclusion: 10 nF is equal to 0.01 µF (EIA code '103')."
        ]
      }
    ]
  },
  table: {
    title: "Nanofarad to Microfarad Quick Reference Table",
    headers: ["Nanofarads (nF)", "Microfarads (µF)", "EIA 3-Digit Code", "Common Circuit Application"],
    rows: [
      { fromVal: "1 nF", toVal: "0.001 µF", extra: "EIA 102 | High-frequency RF noise filter" },
      { fromVal: "2.2 nF", toVal: "0.0022 µF", extra: "EIA 222 | Switched-mode power snubber" },
      { fromVal: "4.7 nF", toVal: "0.0047 µF", extra: "EIA 472 | Audio amplifier feedback damping" },
      { fromVal: "10 nF", toVal: "0.01 µF", extra: "EIA 103 | Op-amp intermediate bypass" },
      { fromVal: "22 nF", toVal: "0.022 µF", extra: "EIA 223 | Electric guitar tone capacitor" },
      { fromVal: "47 nF", toVal: "0.047 µF", extra: "EIA 473 | Sallen-Key audio crossover" },
      { fromVal: "100 nF", toVal: "0.1 µF", extra: "EIA 104 | Universal digital logic decoupling" },
      { fromVal: "220 nF", toVal: "0.22 µF", extra: "EIA 224 | Charge pump voltage multiplier" },
      { fromVal: "470 nF", toVal: "0.47 µF", extra: "EIA 474 | Class-D audio amplifier output" },
      { fromVal: "1,000 nF", toVal: "1.0 µF", extra: "EIA 105 | LDO regulator stabilizer" }
    ]
  },
  expertNote: {
    title: "Regional Schematic Conventions",
    text: "The distinction between nF and µF is primarily regional. North American schematics avoid the nanofarad prefix, preferring 0.1 µF, 0.01 µF, and 0.001 µF. In contrast, European (DIN/IEC) and Asian schematics prefer whole numbers: 100 nF, 10 nF, and 1 nF. Converting to nanofarads prevents mistakes caused by missed decimal points on printed drawings."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "BOM Consolidation and Component Sourcing",
        text: "When compiling a Bill of Materials (BOM) for manufacturing, sourcing components across global vendors requires aligning part descriptions. Converting all schematic references into a uniform microfarad or nanofarad standard prevents purchasing duplicate or incorrect reels."
      },
      {
        title: "Analog Audio Equalizer Synthesis",
        text: "Parametric audio equalizers and crossover networks rely on precise RC networks. Sallen-Key and Multiple Feedback (MFB) filter topologies calculate capacitance using microfarads, requiring seamless translation from common commercial nanofarad film capacitors."
      },
      {
        title: "Printed Circuit Board Layout & Decoupling",
        text: "High-density digital circuit boards place 100 nF (0.1 µF) and 10 nF (0.01 µF) multi-layer ceramic capacitors as close as possible to IC power pins to suppress high-frequency switching noise and maintain signal integrity."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Since a microfarad is larger than a nanofarad, converting from nF to µF must produce a smaller number. Multiplying by 1,000 results in a catastrophic million-fold error.",
      "Losing the leading zero: Misreading '0.01 µF' as '0.1 µF' alters filter corner frequencies by a factor of 10. Using nanofarads (10 nF vs. 100 nF) makes the distinction obvious.",
      "Confusing EIA codes with microfarad values: Thinking that code '104' means 104 µF rather than 10 × 10⁴ pF = 100,000 pF = 0.1 µF.",
      "Ignoring dielectric DC bias voltage derating: When switching from film capacitors to small-case ceramic MLCCs, verify that DC voltage does not degrade effective capacitance."
    ]
  },
  faqs: [
    {
      question: "How do I convert nanofarads to microfarads?",
      answer: "To convert nanofarads (nF) to microfarads (µF), divide the nanofarad value by 1,000 or multiply it by 0.001. For example, 47 nF divided by 1,000 equals 0.047 µF."
    },
    {
      question: "What is 100 nF in microfarads?",
      answer: "100 nF is equal to exactly 0.1 µF. This is the most common bypass capacitor value used in modern digital electronics."
    },
    {
      question: "What is 10 nF in microfarads?",
      answer: "10 nF is equal to 0.01 µF. On standard three-digit capacitor markings, it is represented as '103'."
    },
    {
      question: "What is 1 nF in microfarads?",
      answer: "1 nF equals 0.001 µF. In picofarads, this is equivalent to 1,000 pF (EIA code '102')."
    },
    {
      question: "How many microfarads are in 1 nanofarad?",
      answer: "There are 0.001 microfarads (1 × 10⁻³ µF) in 1 nanofarad. Conversely, one microfarad contains 1,000 nanofarads."
    },
    {
      question: "Can I replace a 0.1 µF capacitor with a 100 nF capacitor?",
      answer: "Yes. 0.1 µF and 100 nF are completely identical values. As long as the replacement component matches or exceeds the required voltage rating and temperature tolerance, it can be swapped directly."
    },
    {
      question: "What does a capacitor marked '473' mean in nF and µF?",
      answer: "A capacitor marked '473' indicates 47 followed by three zeros in picofarads, which equals 47,000 pF. In nanofarads, this is 47 nF; in microfarads, it is 0.047 µF."
    },
    {
      question: "What is 1,000 nF in microfarads?",
      answer: "1,000 nF is equal to exactly 1.0 µF (marked as EIA code '105')."
    },
    {
      question: "Why do European schematics use nF while US schematics use µF?",
      answer: "European drafting standards (IEC 60062) avoid leading zeros and vulnerable decimal points (such as 0.01 µF) to eliminate transcription errors during printing, preferring whole integers like 10 nF. American tradition historically favored µF and pF."
    }
  ],
  relatedList: [
    { label: "Microfarad to Nanofarad", from: "microfarad", to: "nanofarad" },
    { label: "Nanofarad to Picofarad", from: "nanofarad", to: "picofarad" },
    { label: "Nanofarad to Farad", from: "nanofarad", to: "farad" },
    { label: "Nanofarad to Millifarad", from: "nanofarad", to: "millifarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "International Electrotechnical Commission (IEC). <em>IEC 60062: Marking codes for resistors and capacitors</em>."
  ]
};
