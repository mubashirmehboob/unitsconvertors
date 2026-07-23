import { CustomArticleData } from "./types";

export const microhenryToNanohenry: CustomArticleData = {
  fromUnitId: "microhenry",
  toUnitId: "nanohenry",
  seoTitle: "Microhenry to Nanohenry Converter - µH to nH",
  metaDescription: "Convert Microhenrys to Nanohenrys (µH to nH). Learn why microstrip traces require nanohenry compensation in wireless Qi chargers.",
  h1: "Microhenry to Nanohenry Converter",
  introduction: [
    "Translating inductance values from Microhenrys (µH) to Nanohenrys (nH) is a critical step when transitioning layouts from raw power switching to high-speed RF communication. While power supply filters are designed and cataloged in microhenrys, matching networks for Wi-Fi, Bluetooth, and cellular antennas operate strictly in the nanohenry domain.",
    "This calculator provides instantaneous conversions from Microhenrys to Nanohenrys. Below, we discuss the mathematical relationship, explore high-frequency stripline physics, and highlight how wireless Qi chargers utilize both measurement scales."
  ],
  quickAnswer: {
    text: "To convert Microhenrys to Nanohenrys, multiply the Microhenry value by 1,000. For instance, a 1.2 µH power filter choke contains exactly 1,200 Nanohenrys.",
    formulaDisplay: "1 µH = 1,000 nH",
    subtext: "Simply multiply the inductance by 1,000 or shift the decimal point three places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding Microhenrys",
    text: "The Microhenry (symbol: µH) represents one-millionth (10⁻⁶) of a Henry. Microhenry-range coils are standard for medium-frequency electronics, switching buck/boost converters, and desktop computer power regulators."
  },
  aboutTargetUnit: {
    title: "Nanohenry Basics",
    text: "The Nanohenry (symbol: nH) represents one-billionth (10⁻⁹) of a Henry. Components in this scale are essential for gigahertz-speed communication circuits, radio filters, and antennas where large inductances would block high-frequency signals."
  },
  relationship: "The conversion between Microhenrys and Nanohenrys is defined by the metric system prefix scale. Because 'micro-' is 10⁻⁶ and 'nano-' is 10⁻⁹, there is exactly a 1,000-fold difference between the two units. Multiplying your microhenry rating by 1,000 yields the equivalent nanohenry value.",
  relationshipTitle: "Sizing Up Microhenrys vs Nanohenrys",
  relationshipItems: [
    { label: "Microhenry (µH) to Nanohenry (nH)", value: "Multiply by 1,000" },
    { label: "Nanohenry (nH) to Microhenry (µH)", value: "Divide by 1,000" }
  ],
  formula: {
    text: "To convert inductance from Microhenrys to Nanohenrys, multiply the microhenry value by 1,000. This scales the micro-scale unit down to the nano-equivalent.",
    math: "Nanohenrys (nH) = Microhenrys (µH) × 1,000",
    subtext: "For quick calculations, shift the decimal point three places to the right."
  },
  formulaTitle: "Converting by the Numbers",
  practicalTip: {
    title: "RF Stripline Impedance Match Pro-Tip",
    text: "At the high speeds where nanohenry (nH) scales dominate, the geometry of your circuit board traces is critical. A copper trace over a ground plane forms a transmission line. Designing a microstrip line with a characteristic impedance of 50 ohms often requires compensating for trace nanohenrys, so matching your µH power line calculations with your nH antenna calculations is vital."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: RF Antennas Decoupling",
        subtitle: "A power rail decoupling inductor is rated at 0.15 µH. Convert this value to Nanohenrys to check its performance in an RF simulator.",
        steps: [
          "Identify the starting inductance: 0.15 µH.",
          "Write the conversion formula: nH = µH × 1,000.",
          "Multiply the value by 1,000: 0.15 × 1,000 = 150.",
          "Conclude: The inductor represents exactly 150 nH."
        ]
      },
      {
        title: "Example 2: DC Power Filter Component",
        subtitle: "Convert a buck converter choke rated at 10 µH to Nanohenrys.",
        steps: [
          "Identify the starting value: 10 µH.",
          "Multiply by the scale factor: 1,000.",
          "Calculate: 10 × 1,000 = 10,000.",
          "Conclude: The choke is rated at exactly 10,000 nH."
        ]
      }
    ]
  },
  table: {
    title: "Microhenry to Nanohenry Conversion Table",
    headers: ["Microhenrys (µH)", "Nanohenrys (nH)", "Typical Component Roles"],
    rows: [
      { fromVal: "0.01", toVal: "10", extra: "Gigahertz microwave resonators" },
      { fromVal: "0.047", toVal: "47", extra: "5.8 GHz Wi-Fi antenna networks" },
      { fromVal: "0.1", toVal: "100", extra: "2.4 GHz Bluetooth matchers" },
      { fromVal: "0.47", toVal: "470", extra: "High-speed memory bus filters" },
      { fromVal: "1", toVal: "1,000", extra: "Standard µH threshold equivalent" },
      { fromVal: "10", toVal: "10,000", extra: "Desktop computer regulator chokes" },
      { fromVal: "47", toVal: "47,000", extra: "Heavy switching power supply chokes" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Wireless Charging Resonance)",
    text: "Qi-standard wireless charging pads operate near 110 kHz using coils rated at roughly 24 µH. Mobile devices, however, use high-frequency sub-decoders tuned to nanohenry levels to receive telemetry data during the power transfer, requiring engineers to translate between these scales simultaneously."
  },
  applications: {
    title: "Practical Inductance Scaling Applications",
    items: [
      {
        title: "Qi Wireless Charging Pads",
        text: "Charging pads utilize 24 µH copper transmitter coils. Telemetry decoders printed on the same board use nanohenry coils to detect feedback signals from the phone."
      },
      {
        title: "Satellite Navigation Receivers",
        text: "GPS transceivers isolate noise using microhenry filter stages. These filters are connected to nanohenry antenna matching circuits printed directly on high-performance ceramic boards."
      },
      {
        title: "Smart Utility Meters",
        text: "Automatic power grid meters transmit cellular usage data. They use tiny microhenry inductors for power conversion and nanohenry chokes to stabilize RF broadcasting."
      }
    ]
  },
  pitfalls: {
    title: "High-Frequency Circuit Pitfalls",
    items: [
      "Ignoring Track Parasitic Inductance: At high speeds, simple board traces have substantial inductance (about 1 nH per millimeter). If you ignore this trace inductance, your matched circuit will fail, regardless of how perfectly you scaled your microhenry values.",
      "Misplacing Decimals: Shifting decimal units is easy to get wrong. Always verify your work to ensure your inductor order is not off by a factor of 10."
    ]
  },
  faqs: [
    {
      question: "How do I convert Microhenrys to Nanohenrys?",
      answer: "Multiply your Microhenry value by 1,000. For example, 0.47 µH multiplied by 1,000 equals 470 nH."
    },
    {
      question: "How many nanohenrys are in 1 microhenry?",
      answer: "There are exactly 1,000 nanohenrys in 1 microhenry."
    },
    {
      question: "What is the formula to convert uH to nH?",
      answer: "The formula is: nH = µH × 1,000. Simply multiply your microhenry value by 1,000."
    },
    {
      question: "Is microhenry larger than nanohenry?",
      answer: "Yes, 1 microhenry (µH) is exactly 1,000 times larger than 1 nanohenry (nH)."
    },
    {
      question: "How do I convert 1.5 uH to nanohenrys?",
      answer: "Multiply 1.5 by 1,000 to get exactly 1,500 nH."
    }
  ],
  relatedList: [
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>SI Prefix Reference Sheet</em>.",
    "Wireless Power Consortium. <em>Qi Wireless Power Transfer System Specifications</em>."
  ]
};
