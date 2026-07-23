import { CustomArticleData } from "./types";

export const henryToMillihenry: CustomArticleData = {
  fromUnitId: "henry",
  toUnitId: "millihenry",
  seoTitle: "Henry to Millihenry Converter - H to mH",
  metaDescription: "Easily convert Henrys to Millihenrys (H to mH). Understand the core scaling math, read practical tips on inductor DCR, and explore real-world power engineering applications.",
  h1: "Henry to Millihenry Converter",
  introduction: [
    "Inductance measures an electrical component's ability to resist changes in the flow of electric current by storing energy in its surrounding magnetic field. While the Henry (H) is the fundamental unit of measurement defined by international standards, practical electrical engineering often deals with smaller circuit boards and component sizes where the Millihenry (mH) is much more convenient.",
    "This calculator provides instantaneous conversions from Henrys to Millihenrys. Below, we explain the conversion math, explore typical real-world applications in loudspeaker crossovers and power supplies, and share practical design tips that standard textbook formulas often leave out."
  ],
  quickAnswer: {
    text: "To convert Henrys to Millihenrys, multiply the Henry value by 1,000. For example, a 1.5 Henry filter inductor contains exactly 1,500 Millihenrys.",
    formulaDisplay: "1 H = 1,000 mH",
    subtext: "Simply multiply the inductance by 1,000 or shift the decimal point three places to the right."
  },
  aboutSourceUnit: {
    title: "Millihenry Basics",
    text: "The Henry (H) represents the amount of inductance that generates an electromotive force of one volt when the current changes at a rate of one ampere per second. It is a large unit, meaning full Henry ratings are primarily seen in industrial transformer coils, fluorescent lamp ballasts, and AC mains filtering networks."
  },
  aboutTargetUnit: {
    title: "What is a Millihenry?",
    text: "A Millihenry (mH) represents one-thousandth of a Henry (0.001 H). It is the standard unit of measurement for medium-frequency electronic applications, passive audio crossovers, and smaller switching regulators where full-size Henry coils would be physically impractical."
  },
  relationship: "The conversion scale between Henrys and Millihenrys is fixed and based entirely on standard metric system prefixes. Because 'milli-' means one-thousandth, one Henry contains precisely one thousand Millihenrys.",
  relationshipTitle: "Sizing Up Henrys vs Millihenrys",
  relationshipItems: [
    { label: "Base Unit (H) to Subunit (mH)", value: "Multiply by 1,000" },
    { label: "Subunit (mH) to Base Unit (H)", value: "Divide by 1,000" }
  ],
  formula: {
    text: "To perform this calculation yourself, use this simple multiplication formula. Multiplying by 1,000 converts the larger primary metric unit into its smaller milli- equivalent.",
    math: "Inductance in mH = Inductance in H × 1,000",
    subtext: "For manual conversions, simply shift the decimal point three places to the right."
  },
  formulaTitle: "Why the Formula Works",
  practicalTip: {
    title: "Practical Component Selection Tip",
    text: "When selecting a physical inductor for an audio crossover or filter circuit, never look only at the inductance. Physical coils have an internal Direct Current Resistance (DCR) because of the copper wire. High DCR will reduce the circuit's efficiency and shift the frequency cutoff point, regardless of how perfectly you converted the inductance."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Audio Crossover Coil",
        subtitle: "A speaker designer requires an inductor rated at 0.0047 Henrys. Convert this value to Millihenrys.",
        steps: [
          "Identify the inductance value in Henrys: 0.0047 H.",
          "Write down the conversion formula: mH = H × 1,000.",
          "Multiply the value by 1,000: 0.0047 × 1,000 = 4.7.",
          "Conclude the calculation: 0.0047 Henrys is exactly equal to 4.7 mH."
        ]
      },
      {
        title: "Example 2: DC Power Ripple Choke",
        subtitle: "An industrial DC filter utilizes a choke rated at 2.2 Henrys. Convert this to Millihenrys.",
        steps: [
          "Identify the inductance: 2.2 H.",
          "Use the conversion factor of 1,000.",
          "Multiply: 2.2 × 1,000 = 2,200.",
          "Conclude the calculation: 2.2 Henrys is equivalent to 2,200 mH."
        ]
      }
    ]
  },
  table: {
    title: "Henry to Millihenry Reference Table",
    headers: ["Henrys (H)", "Millihenrys (mH)", "Common Application Scales"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "Compact high-pass crossovers" },
      { fromVal: "0.005", toVal: "5", extra: "Mid-range audio crossover networks" },
      { fromVal: "0.01", toVal: "10", extra: "Passive noise suppression circuits" },
      { fromVal: "0.05", toVal: "50", extra: "DC-DC power converter filters" },
      { fromVal: "0.1", toVal: "100", extra: "Small mains transient suppressors" },
      { fromVal: "0.5", toVal: "500", extra: "Medium AC ripple filters" },
      { fromVal: "1", toVal: "1,000", extra: "Base SI unit equivalent" },
      { fromVal: "5", toVal: "5,000", extra: "Heavy industrial power filters" },
      { fromVal: "10", toVal: "10,000", extra: "Substation reactive power compensation" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Heavy Power Industry Standards)",
    text: "In utility-scale power grids, substation shunt reactors operate at several Henrys (H) to offset capacitive currents in transmission lines. Engineers use millihenrys in computer simulation algorithms, but physical equipment nameplates are always labeled in full Henrys (H)."
  },
  applications: {
    title: "Real-World Inductance Applications",
    items: [
      {
        title: "Loudspeaker Crossover Networks",
        text: "Audio speakers rely on inductors in passive crossover circuits. Coils rated in millihenrys block high frequencies from reaching large woofer cones, ensuring clean sound reproduction without distortion."
      },
      {
        title: "Electric Vehicle (EV) Chargers",
        text: "High-power EV charging modules use heavy-duty filter inductors to convert raw AC power to stable DC. These power stages are simulated in Henrys (H) but constructed using physical coils labeled in Millihenrys (mH)."
      },
      {
        title: "Industrial Solar Inverters",
        text: "Solar power systems use grid-tie inverters to convert solar panel output into clean mains AC. Large filter inductors absorb switching ripple, ensuring the injected power meets utility-grid harmonics standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Remember that a Henry is a larger unit than a Millihenry. Your converted value in mH must always be larger than your starting value in H.",
      "Symbol Capitalization Errors: The abbreviation for Henry is a capital 'H', while the milli- prefix is lowercase 'm'. Writing 'MH' means Megahenrys (one million Henrys), which is a catastrophic unit scale error."
    ]
  },
  faqs: [
    {
      question: "How do I convert Henrys to Millihenrys?",
      answer: "To convert Henrys to Millihenrys, multiply the value by 1,000. For example, 0.25 H multiplied by 1,000 equals 250 mH."
    },
    {
      question: "Why are speaker crossover coils labeled in mH instead of H?",
      answer: "Speaker crossovers typically require very small inductance values. Writing '4.7 mH' is much easier to read and less prone to decimal typos than '0.0047 H' on a manufacturing floor."
    },
    {
      question: "What is the formula to calculate mH from H?",
      answer: "The formula is: mH = H × 1,000. Simply multiply your Henry measurement by 1,000."
    },
    {
      question: "Is 1 Henry larger than 1 Millihenry?",
      answer: "Yes, 1 Henry is exactly 1,000 times larger than 1 Millihenry."
    },
    {
      question: "Can I convert decimal Henry values to Millihenrys?",
      answer: "Yes. Decimal values convert the same way. Simply multiply by 1,000 or shift the decimal point three places to the right. For example, 0.012 H becomes 12 mH."
    },
    {
      question: "What does the symbol mH stand for?",
      answer: "The symbol mH stands for Millihenry, where 'm' is the metric prefix for milli (one-thousandth) and 'H' is the unit symbol for Henry."
    },
    {
      question: "Does converting inductance from H to mH change its value?",
      answer: "No, the physical inductance remains identical. You are only representing the measurement in a different unit scale, similar to converting meters to millimeters."
    },
    {
      question: "How do I convert Millihenrys back to Henrys?",
      answer: "To perform the reverse conversion, divide the Millihenry value by 1,000. For instance, 450 mH divided by 1,000 equals 0.45 H."
    }
  ],
  relatedList: [
    { label: "Millihenry to Henry", from: "millihenry", to: "henry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>."
  ]
};
