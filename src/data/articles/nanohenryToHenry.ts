import { CustomArticleData } from "./types";

export const nanohenryToHenry: CustomArticleData = {
  fromUnitId: "nanohenry",
  toUnitId: "henry",
  seoTitle: "Nanohenry to Henry Converter - nH to H",
  metaDescription: "Convert Nanohenrys to Henrys (nH to H). Scale high-frequency circuit parameters back to base SI units for SPICE simulation files.",
  h1: "Nanohenry to Henry Converter",
  introduction: [
    "Scaling inductance values from Nanohenrys (nH) to the primary SI unit, the Henry (H), is an essential step when transitioning hardware designs into mathematical models. While high-frequency RF components and silicon chips are cataloged in nanohenrys, standard simulation software calculates electromagnetic circuit physics exclusively in full Henrys.",
    "This calculator translates nanohenrys back to Henrys instantly. Below, we explain the division mathematics, provide a critical RF simulation tip, and look at how modern integrated silicon circuits incorporate miniature inductors."
  ],
  quickAnswer: {
    text: "To convert Nanohenrys to Henrys, divide the Nanohenry value by 1,000,000,000 (one billion). For example, a 100,000 nH decoupling filter contains exactly 0.0001 Henrys.",
    formulaDisplay: "1 nH = 10⁻⁹ H",
    subtext: "Simply divide the inductance by one billion or shift the decimal point nine places to the left."
  },
  aboutSourceUnit: {
    title: "Nanohenry Basics",
    text: "The Nanohenry (symbol: nH) represents one-billionth of a Henry. Nanohenry inductors are standard in high-speed processors, gigahertz communication chips, and Wi-Fi transceivers where fast electrical cycle times require low-inductance components."
  },
  aboutTargetUnit: {
    title: "Understanding the Henry (H)",
    text: "The Henry (symbol: H) is the base SI unit of inductance. It represents the capacity to induce a potential of one volt when current changes by one ampere per second. Full Henry ratings are typically limited to massive power grid reactors and mains-frequency filter chokes."
  },
  relationship: "The metric system defines 'nano-' as exactly 10⁻⁹ of a base unit. This represents nine orders of magnitude difference. To convert from the tiny nanohenry subunit to the large base Henry unit, you must divide your starting value by one billion, shifting the decimal point nine places to the left.",
  relationshipTitle: "Sizing Up Nanohenrys vs Henrys",
  relationshipItems: [
    { label: "Nanohenry (nH) to Henry (H)", value: "Divide by 1,000,000,000" },
    { label: "Henry (H) to Nanohenry (nH)", value: "Multiply by 1,000,000,000" }
  ],
  formula: {
    text: "To convert inductance from Nanohenrys to Henrys, divide the nanohenry value by 1,000,000,000. This scales the nano-subunit up to the primary SI base unit.",
    math: "Inductance in Henrys (H) = Inductance in nH ÷ 1,000,000,000",
    subtext: "For manual conversions, shift the decimal point nine places to the left."
  },
  formulaTitle: "Under the Hood: The Scaling Factor",
  practicalTip: {
    title: "RF Circuit Simulation Tip",
    text: "When modeling ultra-high frequency RF circuits in SPICE simulators, you must define inductances in standard Henrys (H), but real component catalogs express values in nanohenrys (nH). Be extremely careful when dividing by 1,000,000,000; misplacing even a single decimal zero will shift your filter's simulated frequency cutoff and yield completely wrong predictions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: RF Filter Parameter Sizing",
        subtitle: "A smartphone antenna catalog specifies a 47 nH matching inductor. Convert this to Henrys to run a SPICE simulation.",
        steps: [
          "Identify the starting value in nanohenrys: 47 nH.",
          "Write the conversion formula: H = nH ÷ 1,000,000,000.",
          "Perform the division: 47 ÷ 1,000,000,000 = 0.000000047.",
          "Conclude: The inductor value to enter is exactly 0.000000047 H (or 4.7 × 10⁻⁸ H)."
        ]
      },
      {
        title: "Example 2: Signal Suppressor Module",
        subtitle: "Convert a high-speed noise suppressor rated at 10,000 nH to Henrys.",
        steps: [
          "Identify the starting value: 10,000 nH.",
          "Apply the division factor of one billion.",
          "Calculate: 10,000 ÷ 1,000,000,000 = 0.00001.",
          "Conclude: The suppressor is rated at exactly 0.00001 H (or 10 µH)."
        ]
      }
    ]
  },
  table: {
    title: "Nanohenry to Henry Conversion Table",
    headers: ["Nanohenrys (nH)", "Henrys (H)", "Typical High-Frequency Circuit Uses"],
    rows: [
      { fromVal: "1", toVal: "0.000000001", extra: "On-chip silicon spiral inductors" },
      { fromVal: "10", toVal: "0.00000001", extra: "Antenna tuning for Wi-Fi routers" },
      { fromVal: "100", toVal: "0.0000001", extra: "Cellular radio band filters" },
      { fromVal: "1,000", toVal: "0.000001", extra: "High-speed memory line decoupling" },
      { fromVal: "10,000", toVal: "0.00001", extra: "Small high-frequency switching coils" },
      { fromVal: "100,000", toVal: "0.0001", extra: "Power supply ripple filtering chokes" },
      { fromVal: "1,000,000,000", toVal: "1", extra: "Standard primary unit equivalent" }
    ]
  },
  expertNote: {
    title: "Did You Know? (On-Silicon Integrated Inductors)",
    text: "On-chip silicon inductors (used in radio receivers) have values of less than 10 nH. These are printed as spirals using thick copper layers. Modeling their behavioral properties requires translating these tiny nH values to H to calculate high-frequency parasitics and losses."
  },
  applications: {
    title: "Practical Inductance Scaling",
    items: [
      {
        title: "RF Telecommunication Filters",
        text: "Broadcasting chips utilize nanohenry inductors to lock onto carrier waves. Engineers convert these values to Henrys (H) to compute the transceiver's overall magnetic flux."
      },
      {
        title: "Automotive Radar Systems",
        text: "ADAS vehicle collision systems operate at 77 GHz. Printed nanohenry trace loops are modeled in Henrys to ensure voltage spikes are suppressed without slowing down the sensor."
      },
      {
        title: "Broadband Satellite Receivers",
        text: "Commercial satellite dishes receive high-power streams. Low-noise amplification cards use tiny inductors to shield receivers, with layout teams balancing units in both H and nH."
      }
    ]
  },
  pitfalls: {
    title: "Common Modeling Pitfalls",
    items: [
      "Multiplying instead of dividing: Dividing by one billion is required because a nanohenry is vastly smaller than a Henry. Multiplying will result in ordering a part that is 10¹⁸ times too large, which is physically impossible.",
      "Losing track of decimal zeros: Counting nine places to the left is prone to typographical error. Always verify your calculations using a converter to ensure your decimal point is positioned correctly."
    ]
  },
  faqs: [
    {
      question: "How do I convert Nanohenrys to Henrys?",
      answer: "Divide the Nanohenry value by 1,000,000,000 (one billion). For example, 150 nH divided by 1,000,000,000 equals 0.00000015 H."
    },
    {
      question: "How many Henrys are in 1 Nanohenry?",
      answer: "One Nanohenry contains exactly 0.000000001 Henry (10⁻⁹ H)."
    },
    {
      question: "What is the formula to calculate H from nH?",
      answer: "The formula is: H = nH ÷ 1,000,000,000. Simply divide your nanohenry value by one billion."
    },
    {
      question: "Why does SPICE require Henrys for RF models?",
      answer: "Simulation mathematical solvers use fundamental SI unit standards. Specifying variables in Henrys (H) ensures that simulated voltages and phase changes are calculated correctly."
    },
    {
      question: "How do I convert 1,000,000 nH to Henrys?",
      answer: "Divide 1,000,000 by 1,000,000,000 to get exactly 0.001 H (which is also 1 mH)."
    }
  ],
  relatedList: [
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>The International System of Units (SI) Booklet</em>.",
    "IEEE Transactions on Microwave Theory and Techniques. <em>On-Chip Silicon Spiral Inductors</em>."
  ]
};
