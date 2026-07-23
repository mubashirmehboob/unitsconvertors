import { CustomArticleData } from "./types";

export const nanohenryToMicrohenry: CustomArticleData = {
  fromUnitId: "nanohenry",
  toUnitId: "microhenry",
  seoTitle: "Nanohenry to Microhenry Converter - nH to µH",
  metaDescription: "Convert Nanohenrys to Microhenrys (nH to µH). Understand microstrip impedance matching and automotive transponder designs.",
  h1: "Nanohenry to Microhenry Converter",
  introduction: [
    "Transitioning inductance parameters from Nanohenrys (nH) to Microhenrys (µH) is a critical step when designing matching networks for wireless RF communication. While high-frequency cellular, Bluetooth, and Wi-Fi antenna circuits operate in the nanohenry domain, standard motherboard voltage regulation filters are cataloged in microhenrys.",
    "This calculator provides instantaneous conversions from Nanohenrys to Microhenrys. Below, we explain the 1,000-fold metric relationship, discuss high-frequency stripline impedance math, and explore automotive transponder designs."
  ],
  quickAnswer: {
    text: "To convert Nanohenrys to Microhenrys, divide the Nanohenry value by 1,000. For instance, an 8,200 nH RF filter choke contains exactly 8.2 Microhenrys of inductance.",
    formulaDisplay: "1 nH = 0.001 µH",
    subtext: "Simply divide the inductance by 1,000 or shift the decimal point three places to the left."
  },
  aboutSourceUnit: {
    title: "Nanohenry Basics",
    text: "The Nanohenry (symbol: nH) represents one-billionth of a Henry. Components in this scale are essential for gigahertz-speed communications, cellular radio filters, and smart antennas where larger inductances would block high-frequency signals."
  },
  aboutTargetUnit: {
    title: "Understanding Microhenrys",
    text: "The Microhenry (symbol: µH) represents one-millionth of a Henry. Microhenry-range inductors are the industry standard for medium-frequency electronic applications, DC-DC converter filters, and desktop computer power regulators."
  },
  relationship: "The metric system defines the prefix 'micro-' as 10⁻⁶ and 'nano-' as 10⁻⁹. This represents exactly a 1,000-fold difference between the two units. Dividing your nanohenry rating by 1,000 scales the value up to its equivalent microhenry rating.",
  relationshipTitle: "Why These Units Are Related",
  relationshipItems: [
    { label: "Nanohenry (nH) to Microhenry (µH)", value: "Divide by 1,000" },
    { label: "Microhenry (µH) to Nanohenry (nH)", value: "Multiply by 1,000" }
  ],
  formula: {
    text: "To convert inductance from Nanohenrys to Microhenrys, divide the nanohenry value by 1,000. This translates the nano-subunit into the larger micro-equivalent.",
    math: "Microhenrys (µH) = Nanohenrys (nH) ÷ 1,000",
    subtext: "For quick calculations, shift the decimal point three places to the left."
  },
  formulaTitle: "Converting by the Numbers",
  practicalTip: {
    title: "RF Stripline Impedance Match Pro-Tip",
    text: "At the high gigahertz speeds where nanohenrys (nH) dominate, the routing geometry of your printed circuit board traces is critical. A copper trace over a ground plane forms a microstrip line. A trace with incorrect width will introduce unrequested trace nanohenrys, causing reflection losses that can degrade your matched µH power supply filtering stages."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Bluetooth Antenna Decoupling",
        subtitle: "A smartphone antenna matching network specifies a decoupling inductor of 330 nH. Convert this value to Microhenrys to check catalog part availability.",
        steps: [
          "Identify the starting inductance: 330 nH.",
          "Write the conversion formula: µH = nH ÷ 1,000.",
          "Perform the division: 330 ÷ 1,000 = 0.33.",
          "Conclude: The equivalent catalog part value is exactly 0.33 µH."
        ]
      },
      {
        title: "Example 2: Signal Suppression Coil Sizing",
        subtitle: "Convert an RF suppression choke rated at 15,000 nH to Microhenrys.",
        steps: [
          "Identify the starting value: 15,000 nH.",
          "Multiply by the scale factor: Divide by 1,000.",
          "Calculate: 15,000 ÷ 1,000 = 15.",
          "Conclude: The choke is rated at exactly 15 µH."
        ]
      }
    ]
  },
  table: {
    title: "Nanohenry to Microhenry Conversion Table",
    headers: ["Nanohenrys (nH)", "Microhenrys (µH)", "Typical RF Tuning Roles"],
    rows: [
      { fromVal: "10", toVal: "0.01", extra: "Gigahertz microwave filter resonators" },
      { fromVal: "47", toVal: "0.047", extra: "5.8 GHz Wi-Fi antenna networks" },
      { fromVal: "100", toVal: "0.1", extra: "2.4 GHz Bluetooth transceivers" },
      { fromVal: "470", toVal: "0.47", extra: "High-speed computer bus terminators" },
      { fromVal: "1,000", toVal: "1", extra: "Standard µH threshold equivalent" },
      { fromVal: "10,000", toVal: "10", extra: "Computer power supply chokes" },
      { fromVal: "47,000", toVal: "47", extra: "Heavy industrial regulator chokes" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Wireless Decoupling Resonance)",
    text: "Automotive passive keyless entry systems operate near 125 kHz using small coils rated around 4.7 mH. However, keyless transponders on the same chip communicate using high-frequency RF channels tuned to nanohenry levels, requiring designers to translate between nH and µH scales simultaneously to avoid detuning the antenna."
  },
  applications: {
    title: "Practical Inductance Scaling",
    items: [
      {
        title: "Keyless Entry Automotive Fobs",
        text: "Transponders inside car fobs transmit signal bursts using nanohenry coils. These are coupled with microhenry filters to isolate the fob from battery electromagnetic ripples."
      },
      {
        title: "Satellite Navigation Filters",
        text: "GPS receivers isolate ambient noise using microhenry filter boards. These filters are matched with nanohenry antenna components printed directly on ceramic board modules."
      },
      {
        title: "Commercial Cell Phone Modules",
        text: "Smartphones use cellular antennas with 2.2 nH matching coils. These chips convert signals to microhenry scales to route them safely through the power management system."
      }
    ]
  },
  pitfalls: {
    title: "High-Frequency Circuit Pitfalls",
    items: [
      "Ignoring Lead Parasitic Inductance: At high speeds, simple board traces have substantial inductance (about 1 nH per millimeter). If you ignore this trace inductance, your matched circuit will fail, regardless of how perfectly you scaled your microhenry values.",
      "Miscounting Zeros: Shifting decimal units is easy to get wrong. Always verify your work to ensure your inductor order is not off by a factor of 10."
    ]
  },
  faqs: [
    {
      question: "How do I convert Nanohenrys to Microhenrys?",
      answer: "Divide your Nanohenry value by 1,000. For example, 4,700 nH divided by 1,000 equals 4.7 µH."
    },
    {
      question: "How many nanohenrys are in 1 microhenry?",
      answer: "There are exactly 1,000 nanohenrys in 1 microhenry."
    },
    {
      question: "What is the formula to convert nH to uH?",
      answer: "The formula is: µH = nH ÷ 1,000. Simply divide your nanohenry value by 1,000."
    },
    {
      question: "Is microhenry larger than nanohenry?",
      answer: "Yes, 1 microhenry (µH) is exactly 1,000 times larger than 1 nanohenry (nH)."
    },
    {
      question: "How do I convert 150 nH to microhenrys?",
      answer: "Divide 150 by 1,000 to get exactly 0.15 µH."
    }
  ],
  relatedList: [
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>SI Prefix Reference Sheet</em>.",
    "IEEE Transactions on Vehicular Technology. <em>Passive Keyless Entry Transceiver Design</em>."
  ]
};
