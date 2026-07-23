import { CustomArticleData } from "./types";

export const faradToMicrofarad: CustomArticleData = {
  fromUnitId: "farad",
  toUnitId: "microfarad",
  seoTitle: "Farad to Microfarad Converter - F to µF",
  metaDescription: "Convert Farads to Microfarads (F to µF) with ease. Read about capacitive reactance, worked calculations, and standard bypass capacitor roles.",
  h1: "Farad to Microfarad Converter",
  introduction: [
    "Converting Farads (F) to Microfarads (µF) is a fundamental skill in electrical engineering, design, and repair. Since the Farad is the primary SI base unit for electrical charge storage, but is physically massive, the vast majority of consumer electronics components are labeled in microfarads. Making this conversion accurately ensures you choose the correct electronic components and configure your hardware boards safely.",
    "This calculator provides instantaneous conversions from Farads to Microfarads. In this article, we outline the exact math behind the six-digit decimal shift, walk through worked examples, and discuss common circuit applications."
  ],
  quickAnswer: {
    text: "To convert Farads to Microfarads, multiply the Farad value by 1,000,000 (one million). For example, a 0.0001 Farad power filter contains exactly 100 Microfarads of capacitance.",
    formulaDisplay: "1 F = 1,000,000 µF",
    subtext: "Simply multiply the capacitance by 1,000,000 or shift the decimal point six places to the right."
  },
  aboutSourceUnit: {
    title: "About the Farad",
    text: "The Farad (F) represents the physical capacity to store an electric charge. Specifically, a capacitor has a capacitance of one Farad when one coulomb of electrical charge causes a potential difference of one volt across its conductive terminals. Because this represents a huge amount of charge, full-scale Farad ratings were traditionally rare before the advent of supercapacitors."
  },
  aboutTargetUnit: {
    title: "Microfarad Explained",
    text: "The Microfarad (µF or uF) is a standard metric subdivision of the Farad. It represents exactly one-millionth of a Farad (10⁻⁶ F). This is the most popular unit of measurement for everyday electronics, including power supply regulators, line filters, audio coupling networks, and timing circuits."
  },
  relationship: "The relationship between Farads and Microfarads is absolute and defined by the SI prefix system. Since 'micro-' denotes a factor of one-millionth, a single Farad is made up of exactly one million microfarads.",
  relationshipTitle: "Understanding Their Relationship",
  relationshipItems: [
    { label: "Farads (F) to Microfarads (µF)", value: "Multiply by 1,000,000" },
    { label: "Microfarads (µF) to Farads (F)", value: "Divide by 1,000,000" }
  ],
  formula: {
    text: "To compute this calculation manually, multiply your base value by one million. This scales the large Farad unit down to its micro- equivalent.",
    math: "Capacitance in µF = Capacitance in F × 1,000,000",
    subtext: "To perform this manually, move the decimal point six places to the right."
  },
  formulaTitle: "The Conversion Equation",
  practicalTip: {
    title: "Tolerance in Capacitor Values",
    text: "Keep in mind that standard electrolytic capacitors in the microfarad range often have loose manufacturing tolerances, sometimes as wide as -20% to +80%. If you calculate a precise filter cutoff using perfect conversion math, remember to account for these real-world component variations in your physical circuits."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Audio Signal Coupling Cap",
        subtitle: "A circuit designer requires a non-polarized capacitor rated at 0.0000047 Farads for high-pass audio coupling. Express this in Microfarads.",
        steps: [
          "Identify the capacitance in Farads: 0.0000047 F.",
          "Write down the formula: µF = F × 1,000,000.",
          "Multiply the value: 0.0000047 × 1,000,000 = 4.7.",
          "Conclude the calculation: 0.0000047 Farads is exactly equal to 4.7 µF."
        ]
      },
      {
        title: "Example 2: DC Power Decoupling Bank",
        subtitle: "A high-frequency DC voltage regulator specifies a filter capacitance of 0.0022 Farads. Convert this value to Microfarads.",
        steps: [
          "Identify the capacitance in Farads: 0.0022 F.",
          "Apply the multiplier: 0.0022 × 1,000,000 = 2,200.",
          "Conclude the calculation: 0.0022 Farads is equivalent to 2,200 µF."
        ]
      }
    ]
  },
  table: {
    title: "Farad to Microfarad Reference Table",
    headers: ["Farads (F)", "Microfarads (µF)", "Common Use Contexts"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "Precision timing & ceramic bypass" },
      { fromVal: "0.00001", toVal: "10", extra: "Low-voltage power rail decoupling" },
      { fromVal: "0.0001", toVal: "100", extra: "Consumer power supply filtering" },
      { fromVal: "0.00047", toVal: "470", extra: "Switching regulator output smoothing" },
      { fromVal: "0.001", toVal: "1,000", extra: "AC-DC converter rectifiers" },
      { fromVal: "0.01", toVal: "10,000", extra: "High-power amplifier reservoirs" },
      { fromVal: "0.1", toVal: "100,000", extra: "Heavy industrial power filters" },
      { fromVal: "1", toVal: "1,000,000", extra: "Base SI unit equivalent / Supercap" }
    ]
  },
  expertNote: {
    title: "Bypass & Decoupling Noise",
    text: "In digital circuits, microfarad-range capacitors are placed close to microchip power pins. This acts as a local reservoir to supply rapid currents when the chip switches states, suppressing voltage ripples on the power distribution network."
  },
  applications: {
    title: "Real-World Capacitance Scenarios",
    items: [
      {
        title: "Motor Start Capacitors",
        text: "Single-phase electric motors (like those in home air conditioners or refrigerators) require an initial phase shift to start spinning. This is achieved using specialized run and start capacitors rated in microfarads."
      },
      {
        title: "Switch-Mode Power Supplies (SMPS)",
        text: "SMPS units convert household AC electricity to steady DC for computers and televisions. Large input filter capacitors rated in microfarads smooth out the high-frequency rectified pulses."
      },
      {
        title: "Passive Audio Crossovers",
        text: "Loudspeaker crossover networks use microfarad-range non-polar capacitors to block low-frequency bass signals from reaching fragile high-frequency tweeter speakers."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Decimal point calculation errors: Because you are converting across six orders of magnitude, a single misplaced zero will throw your circuit design off by a factor of 10 or 100. Always double-check your calculations using this converter.",
      "Voltage rating neglect: Just because you converted your Farads to the correct Microfarad value does not mean any capacitor will work. Ensure the component's rated voltage exceeds the maximum peak voltage of your circuit."
    ]
  },
  faqs: [
    {
      question: "How do I convert Farads to Microfarads?",
      answer: "To convert Farads to Microfarads, multiply the Farad value by 1,000,000. For example, 0.00022 F multiplied by 1,000,000 equals 220 µF."
    },
    {
      question: "What is the difference between uF and µF?",
      answer: "There is no difference. The Greek letter 'µ' (mu) is the official SI symbol for micro, but because it is not always available on standard keyboards, the letter 'u' is commonly substituted in electronic documentation."
    },
    {
      question: "What is the formula for F to µF?",
      answer: "The formula is: µF = F × 1,000,000. Simply multiply your Farad measurement by one million."
    },
    {
      question: "Is 1 Farad equal to one million microfarads?",
      answer: "Yes, exactly. One Farad contains precisely 1,000,000 microfarads."
    },
    {
      question: "How do I convert Microfarads back to Farads?",
      answer: "To convert Microfarads to Farads, divide the Microfarad value by 1,000,000. For instance, 4,700 µF divided by 1,000,000 is 0.0047 F."
    },
    {
      question: "Why are capacitors rarely labeled in raw Farads?",
      answer: "Because a Farad is such an enormous unit, most physical capacitors used in typical consumer electronics are so small that their ratings in Farads would require several leading zeros (e.g., 0.00001 F instead of 10 µF)."
    },
    {
      question: "How many microfarads are in 0.1 Farad?",
      answer: "There are exactly 100,000 microfarads in 0.1 Farad (0.1 × 1,000,000)."
    },
    {
      question: "Does this conversion apply to supercapacitors?",
      answer: "Yes, the exact same mathematical scale applies. However, supercapacitors are usually labeled in Farads because they can hold extreme amounts of charge."
    }
  ],
  relatedList: [
    { label: "Microfarad to Farad", from: "microfarad", to: "farad" },
    { label: "Farad to Millifarad", from: "farad", to: "millifarad" },
    { label: "Farad to Nanofarad", from: "farad", to: "nanofarad" },
    { label: "Farad to Picofarad", from: "farad", to: "picofarad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>.",
    "IEEE Standards Association. <em>Standard Letters and Symbols for Electrical and Electronics Engineering</em>."
  ]
};
