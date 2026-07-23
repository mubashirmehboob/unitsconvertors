import { CustomArticleData } from "./types";

export const henryToNanohenry: CustomArticleData = {
  fromUnitId: "henry",
  toUnitId: "nanohenry",
  seoTitle: "Henry to Nanohenry Converter - H to nH",
  metaDescription: "Convert Henrys to Nanohenrys (H to nH). Learn how trace parasitic inductance affects high-frequency PCB layouts and silicon chip designs.",
  h1: "Henry to Nanohenry Converter",
  introduction: [
    "The physical span between the base SI unit of inductance, the Henry (H), and its nanometric counterpart, the Nanohenry (nH), is immense—representing nine orders of magnitude. While Henrys are useful for industrial transformers, nanohenry measurements are critical in modern high-frequency telecommunications, RF antenna matching, and microchip engineering.",
    "This calculator provides instant, precise conversion from Henrys to Nanohenrys. Below, we explain the conversion mathematics, highlight the challenges of board-level parasitic inductance, and provide a clear quick-reference conversion table."
  ],
  quickAnswer: {
    text: "One Henry is equal to exactly one billion Nanohenrys. The metric prefix 'nano-' represents one-billionth, so converting requires shifting the decimal point nine places to the right.",
    formulaDisplay: "1 H = 1,000,000,000 nH",
    subtext: "Multiply the Henry value by 1,000,000,000 to convert to Nanohenrys."
  },
  aboutSourceUnit: {
    title: "About the Henry (H)",
    text: "The Henry (H) is the international unit of inductance. It measures how much magnetic flux is created per unit of electrical current. Because one Henry is a very large amount of energy storage, it is generally restricted to power grid reactors, fluorescent ballasts, and main power filter designs."
  },
  aboutTargetUnit: {
    title: "Nanohenry Basics",
    text: "The Nanohenry (nH) represents one-billionth of a Henry (10⁻⁹ H). In high-speed and radio-frequency electronic designs, circuits operate at gigahertz frequencies where even tiny fractions of a Henry would prevent proper signal transmission."
  },
  relationship: "The metric system defines nano- as a factor of 10⁻⁹. Consequently, converting Henrys to Nanohenrys requires multiplying by one billion. The physical property remains exactly the same, but the numerical scale is adjusted for miniature high-frequency circuit traces.",
  relationshipTitle: "Comparing Henrys and Nanohenrys",
  relationshipItems: [
    { label: "Henry (H) to Nanohenry (nH)", value: "Multiply by 1,000,000,000" },
    { label: "Nanohenry (nH) to Henry (H)", value: "Divide by 1,000,000,000" }
  ],
  formula: {
    text: "To mathematically translate Henrys into Nanohenrys, use the following multiplication formula. The factor of one billion scales the standard unit down to the nano-domain.",
    math: "Nanohenrys (nH) = Henrys (H) × 1,000,000,000",
    subtext: "Move the decimal point nine places to the right for quick mental calculations."
  },
  formulaTitle: "The Mathematics Behind the Conversion",
  practicalTip: {
    title: "Parasitic Inductance Warning",
    text: "At the nanohenry (nH) scale, even a straight piece of copper trace on a printed circuit board has significant parasitic inductance (roughly 1 nH per millimeter). When designing high-speed digital or RF circuits, the copper traces themselves act as unrequested inductors, which can alter your simulated circuit behavior."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Frequency Filter Simulation",
        subtitle: "An RF circuit simulation outputs an ideal inductor value of 0.000000015 Henrys. Convert this to Nanohenrys.",
        steps: [
          "Identify the starting value: 0.000000015 H.",
          "Write the conversion formula: nH = H × 1,000,000,000.",
          "Multiply the value: 0.000000015 × 1,000,000,000 = 15.",
          "Conclude the calculation: The simulation value represents exactly 15 nH."
        ]
      },
      {
        title: "Example 2: Small Antenna Matching Network",
        subtitle: "Convert a source inductor rated at 0.0000001 Henrys to Nanohenrys.",
        steps: [
          "Identify the value in Henrys: 0.0000001 H.",
          "Multiply by the scale factor of one billion: 1,000,000,000.",
          "Calculate: 0.0000001 × 1,000,000,000 = 100.",
          "Conclude: The inductor is rated at exactly 100 nH."
        ]
      }
    ]
  },
  table: {
    title: "Henry to Nanohenry Quick-Reference Table",
    headers: ["Henrys (H)", "Nanohenrys (nH)", "High-Frequency Roles"],
    rows: [
      { fromVal: "0.000000001", toVal: "1", extra: "RF transceiver on-chip spirals" },
      { fromVal: "0.00000001", toVal: "10", extra: "Wi-Fi router antenna match filters" },
      { fromVal: "0.00000005", toVal: "50", extra: "Mobile cellular band bypass filters" },
      { fromVal: "0.0000001", toVal: "100", extra: "High-speed memory line decoupling" },
      { fromVal: "0.000001", toVal: "1,000", extra: "Small high-speed switching coils" },
      { fromVal: "0.0001", toVal: "100,000", extra: "Switching regulator power modules" },
      { fromVal: "1", toVal: "1,000,000,000", extra: "Base SI unit equivalent" }
    ]
  },
  expertNote: {
    title: "Did You Know? (RF Chip Design)",
    text: "On-chip silicon inductors used in mobile RF chips are so tiny they are measured in fraction-nanohenry values (e.g., 0.5 nH to 5 nH). These are fabricated directly into the copper metal layers of the silicon wafer using a spiral shape."
  },
  applications: {
    title: "Nanohenry Inductance Applications",
    items: [
      {
        title: "Radio Frequency (RF) Tuners",
        text: "Cellular phones, Wi-Fi antennas, and satellite receivers use nanohenry inductors in LC filters. These filters reject adjacent-channel interference and keep incoming voice or data signals crystal clear."
      },
      {
        title: "High-Speed Processor Decoupling",
        text: "Computer CPUs draw massive power pulses at gigahertz rates. Low-inductance decoupling capacitors are mounted next to the chip, where nanohenry parasitic inductances are minimized to keep voltages stable."
      },
      {
        title: "Automotive Radar Systems",
        text: "Collision avoidance radars operating at 77 GHz require extremely precise, tiny inductor loops. These loops are printed directly onto specialized high-frequency ceramic board substrates."
      }
    ]
  },
  pitfalls: {
    title: "Common Measurement Pitfalls",
    items: [
      "Ignoring Lead Inductance: Physical test probes have their own inductance. Trying to measure a 5 nH inductor with standard test leads will result in massive errors because the leads themselves add more inductance than the component.",
      "Decimal Zeros Misplacement: Moving the decimal point nine places can lead to mistakes. Counting zeros carefully or using our converter is essential for accurate calculations."
    ]
  },
  faqs: [
    {
      question: "How do I convert Henrys to Nanohenrys?",
      answer: "Multiply the Henry value by 1,000,000,000 (one billion). For example, 0.000000005 H equals 5 nH."
    },
    {
      question: "Why do RF circuits require nanohenry inductors?",
      answer: "Radio frequency circuits operate at very high speeds. At these frequencies, large inductors block the signals completely. Only tiny nanohenry-range coils can filter the high frequencies without damping the signal."
    },
    {
      question: "What is the abbreviation for nanohenry?",
      answer: "The abbreviation for nanohenry is 'nH', with a lowercase 'n' for nano and a capital 'H' for Henry."
    },
    {
      question: "How many nanohenrys are in one Henry?",
      answer: "One Henry contains exactly 1,000,000,000 (one billion) nanohenrys."
    },
    {
      question: "What is board trace inductance?",
      answer: "Board trace inductance is the unintended inductance created by copper traces on a circuit board. At high speeds, even 1 millimeter of copper trace has roughly 1 nH of parasitic inductance, which must be accounted for in circuit design."
    }
  ],
  relatedList: [
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "Bureau International des Poids et Mesures. <em>The International System of Units (SI)</em>.",
    "IEEE Transactions on Microwave Theory and Techniques. <em>Parasitic Inductance Modeling</em>."
  ]
};
