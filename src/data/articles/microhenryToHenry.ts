import { CustomArticleData } from "./types";

export const microhenryToHenry: CustomArticleData = {
  fromUnitId: "microhenry",
  toUnitId: "henry",
  seoTitle: "Microhenry to Henry Converter - µH to H",
  metaDescription: "Convert Microhenrys to Henrys (µH to H). Scale high-frequency circuit values back to primary SI base units for Spice simulations.",
  h1: "Microhenry to Henry Converter",
  introduction: [
    "Translating measurements from the microhenry (µH) scale back to the primary SI unit, the Henry (H), is a routine necessity when aligning circuit boards with mathematical simulations. While catalog components for power systems are bought and sold in microhenrys, computer simulators evaluate loop physics exclusively using full Henry values.",
    "This calculator translates microhenrys back to Henrys instantly. Below, we explain the division mathematics, provide a practical SPICE modeling tip, and detail how industrial systems scale inductance parameters."
  ],
  quickAnswer: {
    text: "To convert Microhenrys to Henrys, divide the Microhenry value by 1,000,000. For example, a 10,000 µH filter choke contains exactly 0.01 Henrys.",
    formulaDisplay: "1 µH = 0.000001 H",
    subtext: "Simply divide the inductance by one million or shift the decimal point six places to the left."
  },
  aboutSourceUnit: {
    title: "Understanding Microhenrys",
    text: "The Microhenry (symbol: µH) represents one-millionth (10⁻⁶) of a Henry. Because high-frequency systems operate on short cycle times, microhenry inductors are standard in desktop computers, switching power supplies, and automotive electronics."
  },
  aboutTargetUnit: {
    title: "Understanding the Henry (H)",
    text: "The Henry (symbol: H) is the base SI unit of inductance. It represents the physical capacity to induce one volt across a conductor when the current changes at a rate of one ampere per second. Full Henry coils are mostly found in heavy industrial electrical grids and massive power line chokes."
  },
  relationship: "The metric system defines 'micro-' as exactly 10⁻⁶ of a base unit. Converting from the tiny microhenry subunit to the large base Henry unit requires dividing the numerical value by one million, moving the decimal point six places to the left.",
  relationshipTitle: "The Scaling Principle",
  relationshipItems: [
    { label: "Microhenry (µH) to Henry (H)", value: "Divide by 1,000,000" },
    { label: "Henry (H) to Microhenry (µH)", value: "Multiply by 1,000,000" }
  ],
  formula: {
    text: "To convert from Microhenrys to Henrys, divide the microhenry value by the scale factor of 1,000,000. This translates the micro-scale subunit into the primary SI unit.",
    math: "Inductance in Henrys (H) = Inductance in µH ÷ 1,000,000",
    subtext: "For manual conversions, move the decimal point six places to the left."
  },
  formulaTitle: "How the Mathematical Formula is Derived",
  practicalTip: {
    title: "Microhenry Simulation Alignment Tip",
    text: "When modeling motor windings or high-power transformers in SPICE, the simulator calculates inductance in full Henrys (H), but catalog parts are labeled in microhenrys (µH). Make sure to divide by 1,000,000 in your code, otherwise your simulation will run 1,000,000 times slower and predict massive, unrealistic power flows!"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Switching Power Supply Modeling",
        subtitle: "A power board uses a 47 µH filter inductor. Convert this value to Henrys to set up a Spice mathematical model.",
        steps: [
          "Identify the starting value in microhenrys: 47 µH.",
          "Write down the conversion formula: H = µH ÷ 1,000,000.",
          "Divide by 1,000,000: 47 ÷ 1,000,000 = 0.000047.",
          "Conclude: The inductor represents exactly 0.000047 Henrys."
        ]
      },
      {
        title: "Example 2: Noise Isolation Choke",
        subtitle: "Convert an isolation inductor rated at 2,200 µH to Henrys.",
        steps: [
          "Identify the starting value: 2,200 µH.",
          "Apply the division factor: 2,200 ÷ 1,000,000.",
          "Calculate: 2,200 ÷ 1,000,000 = 0.0022.",
          "Conclude: The coil contains exactly 0.0022 H of inductance (or 2.2 mH)."
        ]
      }
    ]
  },
  table: {
    title: "Microhenry to Henry Reference Table",
    headers: ["Microhenrys (µH)", "Henrys (H)", "Typical Circuit Applications"],
    rows: [
      { fromVal: "1", toVal: "0.000001", extra: "RF matching and cell phone filters" },
      { fromVal: "10", toVal: "0.00001", extra: "Motherboard switching regulator chokes" },
      { fromVal: "100", toVal: "0.0001", extra: "DC-DC power converters" },
      { fromVal: "1,000", toVal: "0.001", extra: "Medium frequency isolation filters" },
      { fromVal: "10,000", toVal: "0.01", extra: "Mid-range audio crossover networks" },
      { fromVal: "100,000", toVal: "0.1", extra: "Transient line filter suppression" },
      { fromVal: "1,000,000", toVal: "1", extra: "Standard primary unit equivalent" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Superconductive Magnets)",
    text: "Superconductive magnetic energy storage (SMES) coils operate at full Henry scales, but they are tested and tuned using microhenry pulse generators. Converting these small calibration pulses into equivalent Henry fields is vital to protect the superconductive liquid-helium cooling chamber."
  },
  applications: {
    title: "Microhenry to Henry Applications",
    items: [
      {
        title: "Automotive Switching Regulators",
        text: "Engine microcontrollers use 10 µH power coils. Engineers model these in Henrys to ensure the engine speed sensors do not experience voltage dips during cold starts."
      },
      {
        title: "Uninterruptible Power Supplies (UPS)",
        text: "Industrial backup battery systems use massive inductors to clean up inverter outputs, mapping calculations in Henrys while purchasing physical coils labeled in microhenrys."
      },
      {
        title: "Medical Defibrillators",
        text: "Emergency defibrillators release raw electrical pulses through filtering coils. These coils are modeled in Henrys to control the shape of the wave delivered to the patient."
      }
    ]
  },
  pitfalls: {
    title: "Common Modeling Pitfalls",
    items: [
      "Multiplying instead of dividing: Dividing by a million is required because microhenrys are much smaller than Henrys. If you multiply by mistake, your value will be off by twelve orders of magnitude.",
      "Decimal Point Counting: It is easy to lose track of zeros when writing decimals. Use our tool or write your numbers in scientific notation (e.g., 4.7 × 10⁻⁵ H) to avoid mistakes."
    ]
  },
  faqs: [
    {
      question: "How do I convert Microhenrys to Henrys?",
      answer: "Divide the Microhenry value by 1,000,000. For example, 150 µH divided by 1,000,000 is 0.00015 H."
    },
    {
      question: "How many Henrys are in 1 Microhenry?",
      answer: "One Microhenry contains exactly 0.000001 Henry (10⁻⁶ H)."
    },
    {
      question: "What is the formula to calculate H from uH?",
      answer: "The formula is: H = µH ÷ 1,000,000. Simply divide your microhenry value by one million."
    },
    {
      question: "Why do simulation models use Henrys instead of uH?",
      answer: "Simulation engines calculate physics equations using base SI units. Inputting values in Henrys (H) ensures that variables like volt-seconds and ampere-turns balance correctly."
    },
    {
      question: "How do I convert 1,000 uH to Henrys?",
      answer: "Divide 1,000 by 1,000,000 to get exactly 0.001 H (which is also 1 mH)."
    }
  ],
  relatedList: [
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>The International System of Units (SI)</em>.",
    "IEEE Journal of Solid-State Circuits. <em>On-Chip Inductor Design and Modeling</em>."
  ]
};
