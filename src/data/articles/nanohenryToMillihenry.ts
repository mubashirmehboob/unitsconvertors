import { CustomArticleData } from "./types";

export const nanohenryToMillihenry: CustomArticleData = {
  fromUnitId: "nanohenry",
  toUnitId: "millihenry",
  seoTitle: "Nanohenry to Millihenry Converter - nH to mH",
  metaDescription: "Convert Nanohenrys to Millihenrys (nH to mH). Learn how self-resonant frequency limits affect RF chokes and low-frequency crossovers.",
  h1: "Nanohenry to Millihenry Converter",
  introduction: [
    "Transitioning inductance parameters from Nanohenrys (nH) to Millihenrys (mH) is common in high-frequency circuit boards, RF transceivers, and filter networks. While radio-frequency antenna matchers operate in the nanohenry domain, traditional analog decoupling loops and speaker crossovers are sized in millihenrys.",
    "This calculator provides instantaneous conversions from Nanohenrys to Millihenrys. Below, we discuss the mathematical scale factor, explore the benefits of zero-loss air-core coils, and share tips on avoiding self-resonance in high-frequency chokes."
  ],
  quickAnswer: {
    text: "To convert Nanohenrys to Millihenrys, divide the Nanohenry value by 1,000,000. For example, a 10,000,000 nH filter choke contains exactly 10 mH of inductance.",
    formulaDisplay: "1 nH = 0.000001 mH",
    subtext: "Simply divide the inductance by one million or shift the decimal point six places to the left."
  },
  aboutSourceUnit: {
    title: "About the Nanohenry (nH)",
    text: "The Nanohenry (symbol: nH) represents one-billionth of a Henry. Components in this scale are standard in gigahertz communication systems, cell phone transmitters, and CPU power bypass loops where fast cycles require low inductance."
  },
  aboutTargetUnit: {
    title: "Understanding Millihenrys",
    text: "The Millihenry (symbol: mH) represents one-thousandth of a Henry. Millihenry chokes are physically larger and suited for lower frequency bands, such as passive audio crossovers, DC-DC converter filters, and motor speed controls."
  },
  relationship: "The metric prefixes 'milli-' and 'nano-' have a scale difference of exactly one million. Because a nanohenry is vastly smaller than a millihenry, you will always get a significantly smaller numerical value when converting your measurements up.",
  relationshipTitle: "Sizing Up Nanohenrys vs Millihenrys",
  relationshipItems: [
    { label: "Nanohenry (nH) to Millihenry (mH)", value: "Divide by 1,000,000" },
    { label: "Millihenry (mH) to Nanohenry (nH)", value: "Multiply by 1,000,000" }
  ],
  formula: {
    text: "To mathematically translate Nanohenrys to Millihenrys, divide the nanohenry value by 1,000,000. This converts the nano-scale subunit into its larger milli- equivalent.",
    math: "Millihenrys (mH) = Nanohenrys (nH) ÷ 1,000,000",
    subtext: "Shift the decimal point six places to the left for manual calculations."
  },
  formulaTitle: "Under the Hood: The Scaling Factor",
  practicalTip: {
    title: "Self-Resonance in RF Chokes Pro-Tip",
    text: "When replacing a nanohenry (nH) choke with a larger millihenry (mH) inductor, keep in mind that the mH part has far higher parasitic winding capacitance. This lower self-resonant frequency (SRF) can cause your high-frequency signal to short-circuit to ground. Always keep RF lines decoupled with tiny nH air-core coils, and reserve mH coils for DC ripple filtering."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Analog Crossover Sizing",
        subtitle: "A high-speed amplifier feedback loop simulation specifies a bypass inductor of 150,000 nH. Convert this to Millihenrys to find a board-level component.",
        steps: [
          "Identify the starting value in nanohenrys: 150,000 nH.",
          "Write the conversion formula: mH = nH ÷ 1,000,000.",
          "Perform the division: 150,000 ÷ 1,000,000 = 0.15.",
          "Conclude: The equivalent board-level inductor value is exactly 0.15 mH."
        ]
      },
      {
        title: "Example 2: Signal Suppressor Filter",
        subtitle: "Convert a suppressor coil rated at 2,200,000 nH to Millihenrys.",
        steps: [
          "Identify the starting value: 2,200,000 nH.",
          "Apply the division factor: 2,200,000 ÷ 1,000,000.",
          "Calculate: 2,200,000 ÷ 1,000,000 = 2.2.",
          "Conclude: The inductor is rated at 2.2 mH."
        ]
      }
    ]
  },
  table: {
    title: "Nanohenry to Millihenry Conversion Table",
    headers: ["Nanohenrys (nH)", "Millihenrys (mH)", "SMD Component Stamped Codes"],
    rows: [
      { fromVal: "10,000", toVal: "0.01", extra: "'100' (10,000 nH / 10 µH)" },
      { fromVal: "47,000", toVal: "0.047", extra: "'470' (47,000 nH / 47 µH)" },
      { fromVal: "100,000", toVal: "0.1", extra: "'101' (100,000 nH / 100 µH)" },
      { fromVal: "220,000", toVal: "0.22", extra: "'221' (220,000 nH / 220 µH)" },
      { fromVal: "470,000", toVal: "0.47", extra: "'471' (470,000 nH / 470 µH)" },
      { fromVal: "1,000,000", toVal: "1", extra: "'102' (1,000,000 nH / 1 mH)" },
      { fromVal: "10,000,000", toVal: "10", extra: "'103' (10,000,000 nH / 10 mH)" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Air-Core Performance)",
    text: "Unlike millihenry coils that use ferrite cores, nanohenry coils in GHz transmitters are often air-core loops. Since air has zero magnetic core losses and cannot saturate under high current, these nH air-coils offer incredible Q-factors and absolute linearity at extreme frequencies."
  },
  applications: {
    title: "Nanohenry to Millihenry Applications",
    items: [
      {
        title: "Broadband Wi-Fi Transceivers",
        text: "Wi-Fi routers utilize 4.7 nH ceramic chip coils. Designers scale system metrics to millihenry equivalents to ensure antenna filters do not pick up ambient household line noise."
      },
      {
        title: "Automotive Sensor Filters",
        text: "Diagnostic engine-block sensors use microhenry components to block engine noise. The layouts are simulated in millihenrys (mH) but manufactured using nanohenry (nH) shielding traces."
      },
      {
        title: "Medical Imaging Equipment",
        text: "Patient monitoring devices use low-loss air-core coils to track biological data. High-frequency filters translate these tiny nH signals to equivalent mH fields to align ECG waveforms."
      }
    ]
  },
  pitfalls: {
    title: "Common Sizing Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (nH) to a larger unit (mH) requires division. Multiplying by mistake will result in ordering a part that is 10¹² times too large.",
      "Ignoring Lead Resistance: Smaller nanohenry inductors are physically tiny and have negligible copper wire lengths. As you scale up to millihenry ratings, internal direct current resistance (DCR) increases and must be accounted for in circuit simulators."
    ]
  },
  faqs: [
    {
      question: "How do I convert Nanohenrys to Millihenrys?",
      answer: "Divide your Nanohenry value by 1,000,000. For example, 15,000,000 nH divided by 1,000,000 equals 15 mH."
    },
    {
      question: "How many nanohenrys are in 1 millihenry?",
      answer: "There are exactly 1,000,000 nanohenrys in 1 millihenry."
    },
    {
      question: "What is the formula to convert nH to mH?",
      answer: "The formula is: mH = nH ÷ 1,000,000. Simply divide your nanohenry value by one million."
    },
    {
      question: "Is nanohenry smaller than millihenry?",
      answer: "Yes, 1 nanohenry (nH) is exactly one million times smaller than 1 millihenry (mH)."
    },
    {
      question: "How do I convert 500,000 nH to mH?",
      answer: "Divide 500,000 by 1,000,000 to get exactly 0.5 mH (which is also 500 µH)."
    }
  ],
  relatedList: [
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" }
  ],
  references: [
    "National Institute of Standards and Technology. <em>The International System of Units (SI)</em>.",
    "IEEE Transactions on Components and Packaging. <em>RF Inductor Characterization and Modeling</em>."
  ]
};
