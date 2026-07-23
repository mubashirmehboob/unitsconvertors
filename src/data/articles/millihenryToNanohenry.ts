import { CustomArticleData } from "./types";

export const millihenryToNanohenry: CustomArticleData = {
  fromUnitId: "millihenry",
  toUnitId: "nanohenry",
  seoTitle: "Millihenry to Nanohenry Converter - mH to nH",
  metaDescription: "Convert Millihenrys to Nanohenrys (mH to nH). Understand self-resonant frequency limits and design high-frequency RF decoupling circuits.",
  h1: "Millihenry to Nanohenry Converter",
  introduction: [
    "When scaling circuits up to radio frequencies (RF), translating passive inductance parameters from Millihenrys (mH) to Nanohenrys (nH) becomes essential. Because parasitic capacitances cause large coils to self-resonate and act as short circuits at gigahertz speeds, RF designers must replace large millihenry chokes with tiny, precise nanohenry-range components.",
    "This calculator converts Millihenrys to Nanohenrys with high precision. Below, we discuss the six orders of magnitude scaling relationship, highlight self-resonant frequency limits, and explore the benefits of magnetic air-core coils."
  ],
  quickAnswer: {
    text: "One Millihenry is equal to exactly one million Nanohenrys. Converting from milli- to nano- scale requires shifting the decimal point six places to the right.",
    formulaDisplay: "1 mH = 1,000,000 nH",
    subtext: "Multiply the Millihenry value by 1,000,000 to convert to Nanohenrys."
  },
  aboutSourceUnit: {
    title: "Understanding Millihenrys",
    text: "The Millihenry (symbol: mH) represents one-thousandth (10⁻³) of a Henry. Coils in this range are standard in low-frequency and medium-frequency electronics, such as passive audio crossovers, motor drives, and mains filters."
  },
  aboutTargetUnit: {
    title: "About the Nanohenry (nH)",
    text: "The Nanohenry (symbol: nH) represents one-billionth (10⁻⁹) of a Henry. Nanohenry-scale components are vital in high-frequency applications, including radio antenna matching, GHz-speed processors, and Wi-Fi transmitters."
  },
  relationship: "The metric prefixes define 'milli-' as 10⁻³ and 'nano-' as 10⁻⁹, which represents six orders of physical magnitude. Converting a value from mH to nH yields a significantly larger number, reflecting the extreme density of the smaller measurement scale.",
  relationshipTitle: "The Physical Connection",
  relationshipItems: [
    { label: "Millihenry (mH) to Nanohenry (nH)", value: "Multiply by 1,000,000" },
    { label: "Nanohenry (nH) to Millihenry (mH)", value: "Divide by 1,000,000" }
  ],
  formula: {
    text: "To convert inductance from Millihenrys to Nanohenrys, multiply the millihenry rating by one million. This scales the value down to the nano-domain.",
    math: "Nanohenrys (nH) = Millihenrys (mH) × 1,000,000",
    subtext: "For quick calculations, shift the decimal point six places to the right."
  },
  formulaTitle: "The Mathematics Behind the Conversion",
  practicalTip: {
    title: "RF Circuit Decoupling Pro-Tip",
    text: "When transitioning designs from low frequencies (audio/power) to high radio frequencies (RF), you must switch from larger mH decoupling chokes to tiny nH air-core inductors. Standard wire-wound mH chokes behave as capacitors at RF frequencies because of parasitic winding capacitance, so they will fail to block high-frequency noise."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Frequency Antenna Filter",
        subtitle: "Convert a small filter inductor rated at 0.00015 mH to Nanohenrys for an RF matching network.",
        steps: [
          "Identify the starting inductance: 0.00015 mH.",
          "Write the conversion formula: nH = mH × 1,000,000.",
          "Multiply: 0.00015 × 1,000,000 = 150.",
          "Conclude: The RF inductor has an equivalent value of exactly 150 nH."
        ]
      },
      {
        title: "Example 2: Signal Suppression Filter",
        subtitle: "Convert a 0.047 mH choke inductor to Nanohenrys.",
        steps: [
          "Identify the starting value: 0.047 mH.",
          "Multiply by the scale factor: 1,000,000.",
          "Calculate the product: 0.047 × 1,000,000 = 47,000.",
          "Conclude: The inductor is rated at 47,000 nH."
        ]
      }
    ]
  },
  table: {
    title: "Millihenry to Nanohenry Conversion Table",
    headers: ["Millihenrys (mH)", "Nanohenrys (nH)", "Typical RF Frequency Ranges"],
    rows: [
      { fromVal: "0.00001", toVal: "10", extra: "5.8 GHz Wi-Fi antenna coils" },
      { fromVal: "0.0001", toVal: "100", extra: "2.4 GHz Bluetooth matches" },
      { fromVal: "0.001", toVal: "1,000", extra: "433 MHz ISM band filters" },
      { fromVal: "0.01", toVal: "10,000", extra: "High-speed digital noise suppression" },
      { fromVal: "0.1", toVal: "100,000", extra: "Medium frequency RF amplifiers" },
      { fromVal: "1", toVal: "1,000,000", extra: "Standard mH equivalent scale" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Air-Core Inductors)",
    text: "Nanohenry inductors used in high-frequency RF transmitters are often simple air-core spring-like coils of wire. Since they do not have a ferrite or iron core, they have zero core losses and cannot saturate, making them ideal for high-power radio communications."
  },
  applications: {
    title: "Practical Inductance Scaling",
    items: [
      {
        title: "High-Frequency RF Transceivers",
        text: "Broadcasting modules require nanohenry inductors in tuning filters. Converting theoretical circuit values from mH to nH allows engineers to purchase standard surface-mount ceramic chip coils."
      },
      {
        title: "GPS Receiver Antennas",
        text: "Satellite navigation receivers capture faint signals at 1.5 GHz. Tiny nanohenry matching inductors isolate the signal from board electrical noise, improving positional tracking accuracy."
      },
      {
        title: "Military Jamming Gear",
        text: "Broadband transmitter amplifiers utilize zero-loss air-core nanohenry coils to handle massive high-frequency power pulses without core-saturation distortion."
      }
    ]
  },
  pitfalls: {
    title: "RF Layout Common Mistakes",
    items: [
      "Ignoring Self-Resonant Frequency (SRF): Coils are not ideal. Large mH chokes self-resonate at low frequencies because of internal winding capacitance. Attempting to use them in place of nH air-coils at high RF frequencies will short out your circuit.",
      "Miscounting Zeros: Shifting six places manually is easy to get wrong. Always verify your math with a converter to prevent placing an inductor that is 10 times too large."
    ]
  },
  faqs: [
    {
      question: "How do I convert Millihenrys to Nanohenrys?",
      answer: "Multiply your Millihenry value by 1,000,000. For example, 0.015 mH multiplied by 1,000,000 is 15,000 nH."
    },
    {
      question: "How many nanohenrys are in 1 millihenry?",
      answer: "There are exactly 1,000,000 (one million) nanohenrys in 1 millihenry."
    },
    {
      question: "What is the formula to calculate nH from mH?",
      answer: "The formula is: nH = mH × 1,000,000. Simply multiply your millihenry value by one million."
    },
    {
      question: "Why do wire-wound inductors fail at RF frequencies?",
      answer: "Wire-wound inductors have tiny gaps between their metal turns that act as capacitors. At high RF frequencies, these parasitic capacitors bypass the inductor entirely, turning it into a short-circuit. RF designs must use tiny, single-turn nanohenry air-coils instead."
    },
    {
      question: "How do I convert 0.001 mH to nanohenrys?",
      answer: "Multiply 0.001 by 1,000,000 to get exactly 1,000 nH (which is also 1 µH)."
    }
  ],
  relatedList: [
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>SI Prefix Factor Definitions</em>.",
    "Microwave Journal. <em>Inductor Selection and RF Decoupling Best Practices</em>."
  ]
};
