import { CustomArticleData } from "./types";

export const microhenryToMillihenry: CustomArticleData = {
  fromUnitId: "microhenry",
  toUnitId: "millihenry",
  seoTitle: "Microhenry to Millihenry Converter - µH to mH",
  metaDescription: "Convert Microhenrys to Millihenrys (µH to mH). Learn why automotive Class-D amplifiers scale down filter chokes to avoid AM radio interference.",
  h1: "Microhenry to Millihenry Converter",
  introduction: [
    "Scaling inductance parameters from Microhenrys (µH) to Millihenrys (mH) is common in audio, analog power stage design, and noise suppression systems. While modern high-speed switching power ICs calculate filter sizes in microhenrys, traditional audio crossover databases and circuit boards are designed in millihenrys.",
    "This calculator provides instantaneous conversions from Microhenrys to Millihenrys. Below, we explain the scaling math, share tips on component self-resonance, and highlight how modern automotive amplifiers optimize filter sizing."
  ],
  quickAnswer: {
    text: "To convert Microhenrys to Millihenrys, divide the Microhenry value by 1,000. For example, a 4,700 µH power supply choke contains exactly 4.7 mH of inductance.",
    formulaDisplay: "1 µH = 0.001 mH",
    subtext: "Simply divide the inductance by 1,000 or shift the decimal point three places to the left."
  },
  aboutSourceUnit: {
    title: "About the Microhenry (µH)",
    text: "The Microhenry (symbol: µH) represents one-millionth of a Henry. Because switching converters operate at high frequencies (up to 3 MHz), they use smaller microhenry-range chips to save space on motherboards and graphic cards."
  },
  aboutTargetUnit: {
    title: "Millihenry Basics",
    text: "The Millihenry (symbol: mH) represents one-thousandth of a Henry. Millihenry coils are larger and suited for lower frequency bands, making them popular in speaker crossovers, power line filters, and motor controllers."
  },
  relationship: "The metric prefixes 'milli-' and 'micro-' have a scale difference of exactly 1,000. Because a microhenry is smaller than a millihenry, you will always get a smaller numerical value in millihenrys when scaling your measurements up.",
  relationshipTitle: "Sizing Up Microhenrys vs Millihenrys",
  relationshipItems: [
    { label: "Microhenry (µH) to Millihenry (mH)", value: "Divide by 1,000" },
    { label: "Millihenry (mH) to Microhenry (µH)", value: "Multiply by 1,000" }
  ],
  formula: {
    text: "To mathematically translate Microhenrys to Millihenrys, divide the microhenry value by 1,000. This converts the micro-subunit into its larger milli- equivalent.",
    math: "Millihenrys (mH) = Microhenrys (µH) ÷ 1,000",
    subtext: "Shift the decimal point three places to the left for manual calculations."
  },
  formulaTitle: "Under the Hood: The Scaling Factor",
  practicalTip: {
    title: "Self-Resonant Frequency (SRF) Pro-Tip",
    text: "Every inductor has an internal parasitic winding capacitance that forms a parallel resonant circuit. At higher frequencies, this causes the inductor to hit its Self-Resonant Frequency (SRF) and act as an open circuit. Microhenry-range parts have much higher SRFs than millihenry coils, making them critical for filtering megahertz switching noise."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Audio Component Matching",
        subtitle: "A speaker design catalog lists an SMD inductor rated at 3,300 µH. Convert this to Millihenrys to check compatibility with a crossover design.",
        steps: [
          "Identify the starting value in microhenrys: 3,300 µH.",
          "Write the conversion formula: mH = µH ÷ 1,000.",
          "Perform the division: 3,300 ÷ 1,000 = 3.3.",
          "Conclude: The component is equivalent to exactly 3.3 mH."
        ]
      },
      {
        title: "Example 2: DC Power Supply Choke",
        subtitle: "Convert a buck filter choke rated at 150 µH to Millihenrys.",
        steps: [
          "Identify the starting value: 150 µH.",
          "Apply the division factor: 150 ÷ 1,000.",
          "Calculate: 150 ÷ 1,000 = 0.15.",
          "Conclude: The inductor is rated at 0.15 mH."
        ]
      }
    ]
  },
  table: {
    title: "Microhenry to Millihenry Conversion Table",
    headers: ["Microhenrys (µH)", "Millihenrys (mH)", "SMD Component Stamped Codes"],
    rows: [
      { fromVal: "10", toVal: "0.01", extra: "'100' (10 µH)" },
      { fromVal: "47", toVal: "0.047", extra: "'470' (47 µH)" },
      { fromVal: "100", toVal: "0.1", extra: "'101' (100 µH)" },
      { fromVal: "220", toVal: "0.22", extra: "'221' (220 µH)" },
      { fromVal: "470", toVal: "0.47", extra: "'471' (470 µH)" },
      { fromVal: "1,000", toVal: "1", extra: "'102' (1,000 µH / 1 mH)" },
      { fromVal: "10,000", toVal: "10", extra: "'103' (10,000 µH / 10 mH)" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Class-D Output Sizing)",
    text: "Automotive infotainment audio amplifiers operate at 2.1 MHz to avoid interfering with the AM radio band. This high switching speed allows them to downscale output filters from large 1.0 mH coils to tiny 10 µH surface-mount chips, reducing board area by over 80%."
  },
  applications: {
    title: "Microhenry to Millihenry Applications",
    items: [
      {
        title: "Automotive Sound Systems",
        text: "Class-D infotainment amplifiers switch at megahertz speeds. Engineers convert tiny microhenry simulator chokes to equivalent millihenry metrics to compare sound dispersion rates."
      },
      {
        title: "Power Substation Monitoring",
        text: "Telemetry chips monitor transformer voltage. These modules use microhenry-range components to filter grid noise, with designers evaluating specifications in both mH and µH."
      },
      {
        title: "Compact Audio Decoders",
        text: "Home theater receivers decode audio streams using high-frequency digital filters. Miniature microhenry chip inductors isolate speaker outputs from ambient RF noise."
      }
    ]
  },
  pitfalls: {
    title: "Common Component Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (µH) to a larger unit (mH) requires division. Multiplying by mistake will result in ordering a part that is 1,000,000 times too large.",
      "Ignoring Current Ratings: Microhenry inductors are physically smaller and handle less current than large wire-wound millihenry coils. Always check the peak saturation current (Isat) before downscaling a component size."
    ]
  },
  faqs: [
    {
      question: "How do I convert Microhenrys to Millihenrys?",
      answer: "Divide the Microhenry value by 1,000. For example, 250 µH divided by 1,000 equals 0.25 mH."
    },
    {
      question: "How many microhenrys make 1 millihenry?",
      answer: "There are exactly 1,000 microhenrys in 1 millihenry."
    },
    {
      question: "What is the formula to convert uH to mH?",
      answer: "The formula is: mH = µH ÷ 1,000. Simply divide your microhenry value by 1,000."
    },
    {
      question: "Is microhenry smaller than millihenry?",
      answer: "Yes, 1 microhenry (µH) is 1,000 times smaller than 1 millihenry (mH)."
    },
    {
      question: "How do I convert 100 uH to mH?",
      answer: "Divide 100 by 1,000 to get exactly 0.1 mH."
    }
  ],
  relatedList: [
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "National Institute of Standards and Technology. <em>SI Submultiple Prefix Standards</em>.",
    "IEEE Transactions on Industry Applications. <em>Class-D Filter Design Guidelines</em>."
  ]
};
