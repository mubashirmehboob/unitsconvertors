import { CustomArticleData } from "./types";

export const microfaradToFarad: CustomArticleData = {
  fromUnitId: "microfarad",
  toUnitId: "farad",
  seoTitle: "Microfarad to Farad Converter - µF to F",
  metaDescription: "Easily convert Microfarads to Farads (µF to F). Learn the basic math formula, read practical guidelines on capacitor ESR, and explore real-world applications.",
  h1: "Microfarad to Farad Converter",
  introduction: [
    "Converting Microfarads (µF) to Farads (F) is an essential skill in electrical engineering, circuit simulation, and physics. While the microfarad is the most common unit of measurement for physical capacitors found in real-world devices, theoretical equations and SPICE simulation engines require raw Farad values to prevent scale errors.",
    "This calculator provides a high-precision, instantaneous way to convert Microfarads to Farads. Below, we outline the exact math behind the six-digit decimal shift, walk through worked examples, and discuss common electronic designs where these values are critical."
  ],
  quickAnswer: {
    text: "To convert Microfarads to Farads, divide the Microfarad value by 1,000,000 (one million). For example, a 10,000 µF reservoir capacitor is equivalent to exactly 0.01 Farads of capacitance.",
    formulaDisplay: "1 µF = 0.000001 F",
    subtext: "Simply divide the capacitance by 1,000,000 or shift the decimal point six places to the left."
  },
  aboutSourceUnit: {
    title: "Understanding the Microfarad",
    text: "The Microfarad (symbol: µF or uF) is a standard metric subdivision of the Farad. Representing exactly one-millionth of a Farad (10⁻⁶ F), it is the most popular unit of measurement for physical capacitors used in power supplies, line filters, audio coupling networks, and motor start circuits."
  },
  aboutTargetUnit: {
    title: "About the Farad",
    text: "The Farad (symbol: F) is the SI base unit of capacitance, named in honor of the pioneer of electromagnetism Michael Faraday. It measures a device's ability to store an electric charge. One Farad represents a huge capacity, traditionally rare in consumer electronics before the development of supercapacitors."
  },
  relationship: "The relationship between Microfarads and Farads is absolute and governed by standard metric prefixes. Because the prefix 'micro-' denotes one-millionth, a single Farad is made up of exactly one million microfarads.",
  relationshipTitle: "Sizing Up Microfarads vs Farads",
  relationshipItems: [
    { label: "Microfarads (µF) to Farads (F)", value: "Divide by 1,000,000" },
    { label: "Farads (F) to Microfarads (µF)", value: "Multiply by 1,000,000" }
  ],
  formula: {
    text: "To calculate Farads from Microfarads manually, divide your starting microfarad value by one million. This scales the smaller metric subdivision into the primary base unit.",
    math: "Capacitance in F = Capacitance in µF ÷ 1,000,000",
    subtext: "For manual conversions, shift the decimal point six places to the left."
  },
  formulaTitle: "The Conversion Equation",
  practicalTip: {
    title: "Bypass ESR Considerations",
    text: "When dealing with high-capacitance electrolytic capacitors in the microfarad range, Equivalent Series Resistance (ESR) is just as critical as the nominal capacity. High ESR causes self-heating in high-power switching regulators, which can degrade components and lead to early device failure."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: DC Filter smoothing bank",
        subtitle: "A massive switching power supply uses a smoothing bank rated at 22,000 Microfarads. Express this in Farads.",
        steps: [
          "Identify the capacitance in Microfarads: 22,000 µF.",
          "Write the conversion formula: F = µF ÷ 1,000,000.",
          "Divide the value: 22,000 ÷ 1,000,000 = 0.022.",
          "Conclude the calculation: 22,000 Microfarads is exactly equal to 0.022 F."
        ]
      },
      {
        title: "Example 2: DC Power Decoupling Node",
        subtitle: "A digital processor board specifies a total power decoupling capacitance of 150 Microfarads. Convert this value to Farads.",
        steps: [
          "Identify the capacitance in Microfarads: 150 µF.",
          "Apply the division factor: 150 ÷ 1,000,000 = 0.00015.",
          "Conclude the calculation: 150 Microfarads is equivalent to 0.00015 F."
        ]
      }
    ]
  },
  table: {
    title: "Microfarad to Farad Reference Table",
    headers: ["Microfarads (µF)", "Farads (F)", "Common Use Contexts"],
    rows: [
      { fromVal: "1", toVal: "0.000001", extra: "Precision timing & ceramic bypass" },
      { fromVal: "10", toVal: "0.00001", extra: "Low-voltage power rail decoupling" },
      { fromVal: "100", toVal: "0.0001", extra: "Consumer power supply filtering" },
      { fromVal: "470", toVal: "0.00047", extra: "Switching regulator output smoothing" },
      { fromVal: "1,000", toVal: "0.001", extra: "AC-DC converter rectifiers" },
      { fromVal: "10,000", toVal: "0.01", extra: "High-power amplifier reservoirs" },
      { fromVal: "100,000", toVal: "0.1", extra: "Heavy industrial power filters" },
      { fromVal: "1,000,000", toVal: "1", extra: "Base SI unit equivalent / Supercap" }
    ]
  },
  expertNote: {
    title: "Supercapacitors vs Electrolytics",
    text: "While modern supercapacitors easily reach values of 1 Farad or higher in compact formats, they usually have low voltage limits (typically 2.7V). High-capacitance electrolytic capacitors in the microfarad range are physically larger but can withstand hundreds of volts."
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
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying by 1,000,000 instead of dividing: Since a Microfarad is a smaller unit than a Farad, your converted value in F must always be smaller than your starting value in µF.",
      "Symbol confusion: Do not confuse Millifarads (mF) with Microfarads (µF). One millifarad is equal to 1,000 microfarads. Misinterpreting this symbol on a schematic can lead to selecting a capacitor that is 1,000 times too small."
    ]
  },
  faqs: [
    {
      question: "How do I convert Microfarads to Farads?",
      answer: "To convert Microfarads to Farads, divide the Microfarad value by 1,000,000. For example, 470 µF divided by 1,000,000 equals 0.00047 F."
    },
    {
      question: "What is the difference between uF and µF?",
      answer: "There is no difference. The Greek letter 'µ' (mu) is the official SI symbol for micro, but because it is not always available on standard keyboards, the letter 'u' is commonly substituted in electronic documentation."
    },
    {
      question: "What is the formula to convert µF to F?",
      answer: "The formula is: F = µF ÷ 1,000,000. Simply divide your Microfarad measurement by one million."
    },
    {
      question: "Does 1,000,000 Microfarads equal 1 Farad?",
      answer: "Yes, exactly. One Farad contains precisely 1,000,000 microfarads."
    },
    {
      question: "How many Farads are in half a Microfarad?",
      answer: "There are exactly 0.0000005 Farads in 0.5 Microfarads (0.5 ÷ 1,000,000)."
    },
    {
      question: "Why are capacitors rarely labeled in raw Farads?",
      answer: "Because a Farad is such an enormous unit, most physical capacitors used in typical consumer electronics are so small that their ratings in Farads would require several leading zeros (e.g., 0.00001 F instead of 10 µF)."
    },
    {
      question: "How do I convert Farads back to Microfarads?",
      answer: "To perform the reverse conversion, multiply the Farad value by 1,000,000. For instance, 0.0022 F multiplied by one million is 2,200 µF."
    },
    {
      question: "Can I convert decimal Microfarad values to Farads?",
      answer: "Yes, the exact same division factor applies. For example, 4.7 µF divided by 1,000,000 is 0.0000047 F."
    }
  ],
  relatedList: [
    { label: "Farad to Microfarad", from: "farad", to: "microfarad" },
    { label: "Microfarad to Millifarad", from: "microfarad", to: "millifarad" },
    { label: "Millifarad to Microfarad", from: "millifarad", to: "microfarad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>.",
    "IEEE Standards Association. <em>Standard Symbols for Electrical and Electronics Engineering</em>."
  ]
};
