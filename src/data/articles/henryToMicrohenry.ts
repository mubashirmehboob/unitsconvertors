import { CustomArticleData } from "./types";

export const henryToMicrohenry: CustomArticleData = {
  fromUnitId: "henry",
  toUnitId: "microhenry",
  seoTitle: "Henry to Microhenry Converter - H to µH",
  metaDescription: "Convert Henrys to Microhenrys (H to µH) with high precision. Learn why switching regulators are labeled in microhenrys and how to calculate core saturation points.",
  h1: "Henry to Microhenry Converter",
  introduction: [
    "Transitioning from the primary unit of inductance, the Henry (H), to the tiny Microhenry (µH) is one of the most common tasks in RF, analog circuit design, and high-frequency power electronics. While large filter chokes require Henry-scale storage, everyday microcontroller decoupling circuits and switching power supplies operate strictly in the microhenry domain.",
    "This calculator makes converting Henrys to Microhenrys instant and accurate. Read on to learn the physical scaling relationship, explore step-by-step conversion examples, and understand how core saturation affects microhenry-range components in high-speed regulators."
  ],
  quickAnswer: {
    text: "One Henry is equal to exactly one million Microhenrys. Because the metric prefix 'micro-' represents one-millionth, converting from the primary unit requires a scale shift of six decimal places.",
    formulaDisplay: "1 H = 1,000,000 µH",
    subtext: "Multiply the Henry value by 1,000,000 to convert to Microhenrys."
  },
  aboutSourceUnit: {
    title: "Henry Basics",
    text: "The Henry (symbol: H) is the SI base unit of inductance. It represents the physical capacity of a wire loop or magnetic coil to induce a potential of one volt when the underlying electric current shifts by one ampere per second. Full Henry ratings are typically found in large electrical grid reactors and mains-frequency filter chokes."
  },
  aboutTargetUnit: {
    title: "Microhenry Explained",
    text: "The Microhenry (symbol: µH) represents one-millionth (10⁻⁶) of a Henry. Because high-frequency circuits require components to respond rapidly to switching cycles, microhenry inductors are standard in radio transmitters, switching buck/boost converters, and telecommunications equipment."
  },
  relationship: "Converting Henrys to Microhenrys represents a change of six orders of magnitude. Because a Microhenry is a vastly smaller unit of measurement, any inductance value in Henrys will result in a significantly larger numerical value in Microhenrys.",
  relationshipTitle: "Understanding the Conversion Ratio",
  relationshipItems: [
    { label: "Henry (H) to Microhenry (µH)", value: "Multiply by 1,000,000" },
    { label: "Microhenry (µH) to Henry (H)", value: "Divide by 1,000,000" }
  ],
  formula: {
    text: "To mathematically translate Henrys to Microhenrys, multiply the base value by one million. This scales the large SI unit down to the micro-level.",
    math: "Microhenrys (µH) = Henrys (H) × 1,000,000",
    subtext: "Alternatively, move the decimal point six places to the right to perform the calculation."
  },
  formulaTitle: "How the Mathematical Formula is Derived",
  practicalTip: {
    title: "Switching Regulator Selection Pro-Tip",
    text: "Most commercially available inductors used in switching regulators are labeled in microhenrys (µH). When modeling your converter loop in full Henrys (H) in Spice simulations, keep an eye on core saturation. A coil that saturates too quickly will lose its inductance, causing massive current spikes."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Switching Choke",
        subtitle: "A simulation indicates an ideal buck inductor value of 0.000022 Henrys. Convert this to Microhenrys to find a catalog part.",
        steps: [
          "Identify the starting inductance: 0.000022 H.",
          "State the calculation formula: µH = H × 1,000,000.",
          "Multiply: 0.000022 × 1,000,000 = 22.",
          "Conclude: The equivalent catalog inductance is exactly 22 µH."
        ]
      },
      {
        title: "Example 2: Small Filter Design",
        subtitle: "An engineer uses an old 0.004 Henry inductor. Convert this to Microhenrys.",
        steps: [
          "Identify the starting value: 0.004 H.",
          "Multiply by the conversion multiplier of 1,000,000.",
          "Perform the calculation: 0.004 × 1,000,000 = 4,000.",
          "Conclude: The inductor is rated at 4,000 µH (which is also 4 mH)."
        ]
      }
    ]
  },
  table: {
    title: "Henry to Microhenry Conversion Table",
    headers: ["Henrys (H)", "Microhenrys (µH)", "Typical Circuit Roles"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "RF tuning and antenna impedance matchers" },
      { fromVal: "0.00001", toVal: "10", extra: "High-frequency buck regulator coils" },
      { fromVal: "0.000047", toVal: "47", extra: "DC-DC switching power converter stages" },
      { fromVal: "0.0001", toVal: "100", extra: "Analog audio signal decoders" },
      { fromVal: "0.001", toVal: "1,000", extra: "Medium frequency decoupling filters" },
      { fromVal: "0.01", toVal: "10,000", extra: "Passive crossover filter modules" },
      { fromVal: "0.1", toVal: "100,000", extra: "Mains noise suppression chokes" },
      { fromVal: "1", toVal: "1,000,000", extra: "Base SI unit scale" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Aerospace Core Materials)",
    text: "High-reliability aerospace power filters use microhenry-range inductors wound on specialized powder cores (like Kool Mu or Sendust). These materials maintain constant permeability over high temperatures, ensuring the microhenry conversion holds stable in extreme environments."
  },
  applications: {
    title: "Microhenry Inductor Applications",
    items: [
      {
        title: "Switching Power Converters",
        text: "Buck and boost regulators convert voltages using inductors. These circuits switch at hundreds of kilohertz, requiring fast microhenry-range components to limit internal electrical ripples."
      },
      {
        title: "Medical Diagnostic Equipment",
        text: "Ultra-low-noise magnetic sensor circuits in MRI machines utilize precise microhenry filtering. These filters isolate small biological signals while blocking high-frequency electrical noise."
      },
      {
        title: "Industrial Robotics Controllers",
        text: "Motor drive cards in multi-axis industrial robots use microhenry inductors. These coils dampen current spikes caused by PWM drive signals, protecting delicate motor windings."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Decimal Point Shifting Errors: Shifting by six places is prone to error when counting zeros. Always double-check your work with an online calculator to prevent placing an inductor that is off by a factor of 10 or 100.",
      "Symbol Misinterpretations: The Greek letter mu (µ) represents micro. In plain text files or database fields, this is often written as 'uH'. Never confuse 'uH' with 'mH' (millihenrys), which is 1,000 times larger."
    ]
  },
  faqs: [
    {
      question: "How do I convert Henrys to Microhenrys manually?",
      answer: "Multiply the Henry value by 1,000,000. You can also shift the decimal point exactly six places to the right. For example, 0.000047 H is 47 µH."
    },
    {
      question: "Why do switching regulators use microhenry values?",
      answer: "Switching regulators operate at high frequencies (usually 100 kHz to 3 MHz). Because the switching period is so short, a small microhenry-range inductor is sufficient to store energy between cycles, allowing the power supply to remain compact."
    },
    {
      question: "What is the relation between H and uH?",
      answer: "One Henry (H) is equal to exactly 1,000,000 microhenrys (uH or µH)."
    },
    {
      question: "Is microhenry abbreviated as uH or µH?",
      answer: "Both are acceptable. 'µH' uses the official Greek letter mu (µ), whereas 'uH' is the common plain-text abbreviation used in engineering spreadsheets, simulations, and schematics."
    },
    {
      question: "How many microhenrys are in 0.1 Henry?",
      answer: "There are exactly 100,000 microhenrys in 0.1 Henry (0.1 × 1,000,000)."
    },
    {
      question: "What is the difference between a millihenry and a microhenry?",
      answer: "A millihenry (mH) is one-thousandth of a Henry, while a microhenry (µH) is one-millionth. Therefore, one millihenry contains exactly 1,000 microhenrys."
    }
  ],
  relatedList: [
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" }
  ],
  references: [
    "International Electrotechnical Commission. <em>IEC 60050 - International Electrotechnical Vocabulary</em>.",
    "Institute of Electrical and Electronics Engineers (IEEE). <em>Standard Letter Symbols for Units of Measurement</em>."
  ]
};
