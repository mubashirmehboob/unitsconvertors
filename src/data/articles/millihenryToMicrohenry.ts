import { CustomArticleData } from "./types";

export const millihenryToMicrohenry: CustomArticleData = {
  fromUnitId: "millihenry",
  toUnitId: "microhenry",
  seoTitle: "Millihenry to Microhenry Converter - mH to µH",
  metaDescription: "Convert Millihenrys to Microhenrys (mH to µH). Find SMD component codes and design compact Class-D audio output filters easily.",
  h1: "Millihenry to Microhenry Converter",
  introduction: [
    "Moving between Millihenrys (mH) and Microhenrys (µH) is one of the most frequent tasks in board-level electronics design. These two subunits bridge the gap between medium-frequency systems, like audio crossovers, and high-frequency power regulators, allowing engineers to size components accurately.",
    "This calculator translates your millihenry measurements to microhenrys instantly. Below, we explain the simple multiplier relationship, share practical tips for reading surface-mount inductor component codes, and outline Class-D amplifier filter requirements."
  ],
  quickAnswer: {
    text: "To convert Millihenrys to Microhenrys, multiply the Millihenry value by 1,000. For instance, a 2.2 mH inductor contains exactly 2,200 Microhenrys.",
    formulaDisplay: "1 mH = 1,000 µH",
    subtext: "Simply multiply the inductance by 1,000 or shift the decimal point three places to the right."
  },
  aboutSourceUnit: {
    title: "Millihenry Basics",
    text: "The Millihenry (symbol: mH) represents one-thousandth (10⁻³) of a Henry. Millihenry-range coils are common in lower frequency electronics, including speaker networks, analog signal processing circuits, and motor power lines."
  },
  aboutTargetUnit: {
    title: "Understanding Microhenrys",
    text: "The Microhenry (symbol: µH) represents one-millionth (10⁻⁶) of a Henry. Because switching power converters operate at high frequencies, they use smaller energy-storage elements, making microhenry-scale components the industry standard on computer motherboards."
  },
  relationship: "The metric system defines 'milli-' as 10⁻³ and 'micro-' as 10⁻⁶. This represents a difference of exactly three orders of magnitude. Because a microhenry is smaller than a millihenry, you will always have a larger numerical value in microhenrys than in millihenrys for the same physical component.",
  relationshipTitle: "Why These Units Are Related",
  relationshipItems: [
    { label: "Millihenry (mH) to Microhenry (µH)", value: "Multiply by 1,000" },
    { label: "Microhenry (µH) to Millihenry (mH)", value: "Divide by 1,000" }
  ],
  formula: {
    text: "To convert from Millihenrys to Microhenrys, multiply your starting value by the conversion factor of 1,000. This converts the larger milli- subunit into the smaller micro- equivalent.",
    math: "Microhenrys (µH) = Millihenrys (mH) × 1,000",
    subtext: "To do this manually, shift the decimal point three places to the right."
  },
  formulaTitle: "Converting by the Numbers",
  practicalTip: {
    title: "SMD Inductor Code Identification Pro-Tip",
    text: "Many surface-mount (SMD) power inductors are marked with a three-digit code indicating their value in microhenrys (µH). For example, a code of '101' represents 100 µH, not 101 µH. If you have calculated a value of 0.1 mH, convert it to 100 µH to search for SMD parts stamped with '101'!"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Class-D Amplifier Filter Design",
        subtitle: "A design spec calls for a low-pass filter inductor rated at 0.022 mH. Convert this to Microhenrys to find a manufacturer part.",
        steps: [
          "Identify the starting inductance: 0.022 mH.",
          "State the conversion equation: µH = mH × 1,000.",
          "Perform the multiplication: 0.022 × 1,000 = 22.",
          "Conclude: The component catalog part value is exactly 22 µH."
        ]
      },
      {
        title: "Example 2: DC Filter Choke Sizing",
        subtitle: "Convert a filter inductor rated at 4.7 mH to Microhenrys.",
        steps: [
          "Identify the starting value: 4.7 mH.",
          "Multiply the value by 1,000.",
          "Calculate: 4.7 × 1,000 = 4,700.",
          "Conclude: The equivalent inductance is 4,700 µH."
        ]
      }
    ]
  },
  table: {
    title: "Millihenry to Microhenry Reference Table",
    headers: ["Millihenrys (mH)", "Microhenrys (µH)", "Common SMD Part Stamped Codes"],
    rows: [
      { fromVal: "0.01", toVal: "10", extra: "'100' (10 µH)" },
      { fromVal: "0.022", toVal: "22", extra: "'220' (22 µH)" },
      { fromVal: "0.047", toVal: "47", extra: "'470' (47 µH)" },
      { fromVal: "0.1", toVal: "100", extra: "'101' (100 µH)" },
      { fromVal: "0.22", toVal: "220", extra: "'221' (220 µH)" },
      { fromVal: "0.47", toVal: "470", extra: "'471' (470 µH)" },
      { fromVal: "1", toVal: "1,000", extra: "'102' (1,000 µH)" },
      { fromVal: "10", toVal: "10,000", extra: "'103' (10,000 µH)" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Class-D Amplifier Filters)",
    text: "Class-D audio amplifiers use low-pass LC filters on their speaker outputs to strip away high-frequency switching noise. These output filter inductors usually fall between 0.01 mH and 0.22 mH. Designers convert these to microhenrys (10 µH to 220 µH) to source compact molded shielded inductors."
  },
  applications: {
    title: "Real-World Inductance Scaling",
    items: [
      {
        title: "High-Frequency Speaker Amplifiers",
        text: "Class-D audio circuits use inductors to block switching noise. Converting calculated system values from mH to µH is necessary to buy standard shielded SMD chip components."
      },
      {
        title: "Automotive Sensor Filters",
        text: "Engine compartment diagnostic sensors require shielding from alternator ignition noise. Designers use compact microhenry chip coils to block high-frequency engine electrical buzz."
      },
      {
        title: "Medical Patient Monitors",
        text: "Heart-rate monitoring units use tiny microhenry-range choke filters on electrode inputs to strip away electrostatic noise, ensuring patient signals are captured cleanly."
      }
    ]
  },
  pitfalls: {
    title: "Common Sizing Pitfalls",
    items: [
      "Confusing mH and µH: A millihenry is 1,000 times larger than a microhenry. If you order a 10 mH coil instead of a 10 µH coil, the part will be physically too large and its inductance too high, disabling your circuit.",
      "Ignoring Current Derating: Smaller microhenry-scale SMD parts have lower current limits than larger millihenry wire coils. Always check the saturation current (Isat) rating when downscaling."
    ]
  },
  faqs: [
    {
      question: "How do I convert Millihenrys to Microhenrys?",
      answer: "Multiply the Millihenry value by 1,000. For example, 0.47 mH multiplied by 1,000 is 470 µH."
    },
    {
      question: "How many microhenrys are in 1 millihenry?",
      answer: "There are exactly 1,000 microhenrys in 1 millihenry."
    },
    {
      question: "What is the formula for mH to uH?",
      answer: "The formula is: µH = mH × 1,000. Simply multiply your millihenry value by 1,000."
    },
    {
      question: "Why do SMD inductors use three-digit codes?",
      answer: "SMD chips are too small to print full numbers with units. They use a standard code where the first two digits are the value and the third digit is the number of zeros. The code expresses the inductance in microhenrys (µH)."
    },
    {
      question: "How do I convert 0.1 mH to microhenrys?",
      answer: "Multiply 0.1 by 1,000 to get exactly 100 µH."
    }
  ],
  relatedList: [
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" }
  ],
  references: [
    "International Electrotechnical Commission (IEC). <em>Inductor Marking Codes for Surface Mount Devices</em>.",
    "Audio Engineering Society Journal. <em>Output Filter Design for Class-D Amplifiers</em>."
  ]
};
