import { CustomArticleData } from "./types";

export const milliampereHourToAmpereHour: CustomArticleData = {
  fromUnitId: "milliampere-hour",
  toUnitId: "ampere-hour",
  seoTitle: "Milliampere-hour to Ampere-hour Converter - mAh to Ah",
  metaDescription: "Convert milliampere-hours to ampere-hours (mAh to Ah) with precision. Learn the 1,000 division rule, battery C-rate calculations, and worked engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/milliampere-hour-to-ampere-hour",
  h1: "Milliampere-hour to Ampere-hour Converter",
  introduction: [
    "Battery charge capacity is denoted in two primary metric forms: milliampere-hours (mAh) for compact consumer electronics like smartphones, drones, and wearable sensors, and ampere-hours (Ah) for larger systems including electric vehicles, solar storage banks, and marine power packs.",
    "Converting between milliampere-hours and ampere-hours is one of the most common everyday calculations in electronics design, battery pack assembly, and consumer hardware benchmarking. This converter and technical guide explains the metric relationship, battery C-rate calculations, pack configuration math, and practical worked examples."
  ],
  quickAnswer: {
    text: "To convert milliampere-hours to ampere-hours, divide the milliampere-hour value by 1,000, or shift the decimal point three places to the left. For example, a 5,000 mAh smartphone battery equals exactly 5.0 Ah.",
    formulaDisplay: "Capacity (Ah) = Capacity (mAh) ÷ 1,000",
    subtext: "1 milliampere-hour is equal to 0.001 ampere-hours (10⁻³ Ah)."
  },
  aboutSourceUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The milliampere-hour (symbol: mAh or mA·h) is a metric submultiple equal to one-thousandth of an ampere-hour (10⁻³ Ah). It denotes the amount of electric charge delivered by a continuous current of one milliampere (0.001 A) sustained over one hour (3,600 seconds), equivalent to 3.6 coulombs. Manufacturers use mAh to provide convenient integer ratings for compact batteries (e.g., 2,500 mAh instead of 2.5 Ah)."
  },
  aboutTargetUnit: {
    title: "About the Ampere-hour (Ah)",
    text: "The ampere-hour (symbol: Ah or A·h) is the standard commercial unit of electric charge capacity in electrical engineering. One ampere-hour represents the charge transferred by a steady current of one ampere flowing for one hour (3,600 seconds), corresponding to exactly 3,600 coulombs. It is used to rate lead-acid starter batteries, lithium iron phosphate (LiFePO4) solar storage cells, and electric vehicle battery packs."
  },
  relationship: "The relationship between milliampere-hours and ampere-hours is defined by the metric prefix 'milli-', which denotes a factor of one-thousandth (10⁻³). There are exactly 1,000 milliampere-hours in one ampere-hour.",
  relationshipTitle: "Metric Prefix Ratio and Equivalence",
  relationshipItems: [
    { label: "Milliampere-hours (mAh) to Ampere-hours (Ah)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Ampere-hours (Ah) to Milliampere-hours (mAh)", value: "Multiply by 1,000" },
    { label: "Decimal Shift", value: "3 places to the left" },
    { label: "Standard Benchmark", value: "1,000 mAh = 1.0 Ah = 3,600 C" }
  ],
  formula: {
    text: "To convert any battery capacity or electric charge value from milliampere-hours to ampere-hours, divide the milliampere-hour measurement by 1,000.",
    math: "Capacity (Ah) = Capacity (mAh) ÷ 1,000 = Capacity (mAh) × 0.001",
    subtext: "To convert ampere-hours back to milliampere-hours: Capacity (mAh) = Capacity (Ah) × 1,000"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Three-Digit Shift Shortcut",
    text: "Because dividing by 1,000 simply shifts the decimal point three places to the left, you can quickly convert any mAh rating by replacing the last three zeros with a decimal point: 3,000 mAh → 3.0 Ah, 4,500 mAh → 4.5 Ah, and 12,000 mAh → 12.0 Ah."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Smartphone Battery Capacity Translation",
        subtitle: "A flagship smartphone specification sheet lists a 4,850 mAh internal lithium battery. Convert this value to ampere-hours.",
        steps: [
          "State the capacity in milliampere-hours: Q = 4,850 mAh.",
          "Apply the conversion formula: Ah = mAh ÷ 1,000.",
          "Calculate: 4,850 ÷ 1,000 = 4.85.",
          "Conclusion: The smartphone battery capacity is 4.85 Ah."
        ]
      },
      {
        title: "Example 2: Drone Flight Battery Pack Modeling",
        subtitle: "A quadcopter drone uses a 4S LiPo battery pack rated at 6,500 mAh. Express this capacity in ampere-hours to determine operating time at a continuous 26 A hover draw.",
        steps: [
          "Convert capacity to Ah: 6,500 ÷ 1,000 = 6.5 Ah.",
          "Calculate hover time: Time (h) = Capacity (Ah) ÷ Current (A) = 6.5 Ah ÷ 26 A = 0.25 hours.",
          "Convert to minutes: 0.25 hours × 60 minutes = 15 minutes.",
          "Conclusion: The 6,500 mAh (6.5 Ah) pack sustains 15 minutes of continuous 26 A hover."
        ]
      },
      {
        title: "Example 3: Portable USB-C Power Bank Rating",
        subtitle: "A portable travel power bank is labeled 26,800 mAh. What is its capacity in ampere-hours?",
        steps: [
          "Identify the mAh rating: Q = 26,800 mAh.",
          "Divide by 1,000: 26,800 ÷ 1,000 = 26.8.",
          "Conclusion: The power bank has a capacity of 26.8 Ah (at the internal cell nominal voltage of 3.7 V)."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere-hour to Ampere-hour Quick Reference Table",
    headers: ["Milliampere-hours (mAh)", "Ampere-hours (Ah)", "Coulombs (C)", "Typical Hardware Application"],
    rows: [
      { fromVal: "250 mAh", toVal: "0.25 Ah", extra: "900 C", extra2: "Smartwatch / fitness band" },
      { fromVal: "500 mAh", toVal: "0.5 Ah", extra: "1,800 C", extra2: "RC mini helicopter" },
      { fromVal: "1,000 mAh", toVal: "1.0 Ah", extra: "3,600 C", extra2: "Small tactical flashlight" },
      { fromVal: "2,000 mAh", toVal: "2.0 Ah", extra: "7,200 C", extra2: "Standard 18650 cell" },
      { fromVal: "3,000 mAh", toVal: "3.0 Ah", extra: "10,800 C", extra2: "High-drain 18650 or compact phone" },
      { fromVal: "4,000 mAh", toVal: "4.0 Ah", extra: "14,400 C", extra2: "Cordless drill 18V battery pack" },
      { fromVal: "5,000 mAh", toVal: "5.0 Ah", extra: "18,000 C", extra2: "21700 cell / Flagship smartphone" },
      { fromVal: "10,000 mAh", toVal: "10.0 Ah", extra: "36,000 C", extra2: "Everyday pocket power bank" },
      { fromVal: "20,000 mAh", toVal: "20.0 Ah", extra: "72,000 C", extra2: "Laptop portable charger" },
      { fromVal: "50,000 mAh", toVal: "50.0 Ah", extra: "180,000 C", extra2: "Portable camping power station cell" }
    ]
  },
  expertNote: {
    title: "Understanding Battery C-Rate and Current Capabilities",
    text: "Battery discharge capability is specified in terms of its C-rate, where 1C represents a discharge current numerically equal to the battery capacity in ampere-hours. For example, a 3,000 mAh battery (3.0 Ah) discharging at 1C draws 3.0 A and empties in 1 hour; discharging at 5C draws 15.0 A (5 × 3.0 A) and depletes in 12 minutes. Converting mAh to Ah is the foundational first step in calculating discharge currents."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Battery Pack Parallel Sizing",
        text: "When configuring multi-cell battery packs for light electric vehicles, engineers calculate total pack capacity by multiplying individual cell capacities: connecting four 2,500 mAh cells in parallel produces a 10,000 mAh module, which is documented as 10.0 Ah for system schematics."
      },
      {
        title: "Airline Travel Power Bank Regulation Compliance",
        text: "Aviation safety rules (FAA and TSA) restrict carry-on lithium-ion batteries based on watt-hours (typically 100 Wh max). Travelers determine compliance by converting power bank mAh to Ah, then multiplying by nominal cell voltage (3.7 V): e.g., 20,000 mAh = 20 Ah × 3.7 V = 74 Wh, safely below the 100 Wh threshold."
      },
      {
        title: "Solar Off-Grid Charging Estimation",
        text: "Sizing solar charge controllers requires matching panel current output in amperes to battery bank capacity in ampere-hours. Converting device battery ratings from mAh to Ah enables direct calculation of required daily amp-hour replenishment."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (mAh) to a larger unit (Ah) must yield a smaller numeric value.",
      "Confusing milliampere-hours (mAh) with watt-hours (Wh): Comparing power banks purely on mAh ignores cell voltage. A 10,000 mAh 3.7 V pack stores 37 Wh, whereas a 10,000 mAh 11.1 V drone battery stores 111 Wh—three times the actual energy.",
      "Assuming nominal capacity equals usable capacity: Operating batteries at freezing temperatures or high discharge rates reduces usable capacity below the nominal Ah rating.",
      "Miscalibrating series vs. parallel cell arrangements: Placing cells in series increases pack voltage while capacity remains unchanged in Ah; placing cells in parallel increases capacity in Ah while voltage remains constant."
    ]
  },
  faqs: [
    {
      question: "How do I convert milliampere-hours to ampere-hours?",
      answer: "To convert milliampere-hours (mAh) to ampere-hours (Ah), divide the milliampere-hour value by 1,000. For example, 4,000 mAh divided by 1,000 equals 4.0 Ah."
    },
    {
      question: "How many ampere-hours is 1,000 mAh?",
      answer: "1,000 mAh is equal to exactly 1.0 Ah."
    },
    {
      question: "What is 5,000 mAh in Ah?",
      answer: "5,000 mAh equals 5.0 Ah."
    },
    {
      question: "What is 20,000 mAh in Ah?",
      answer: "20,000 mAh equals 20.0 Ah."
    },
    {
      question: "How do I convert ampere-hours back to milliampere-hours?",
      answer: "To convert ampere-hours back to milliampere-hours, multiply the ampere-hour value by 1,000. For instance, 2.5 Ah multiplied by 1,000 equals 2,500 mAh."
    },
    {
      question: "Why do phone batteries use mAh instead of Ah?",
      answer: "Phone manufacturers use milliampere-hours because small consumer electronics have capacities between 1 and 6 Ah. Expressing them in thousands (e.g., 3,500 mAh to 5,000 mAh) avoids cumbersome decimal numbers on packaging and technical specification sheets."
    },
    {
      question: "What is 500 mAh in Ah?",
      answer: "500 mAh equals 0.5 Ah."
    },
    {
      question: "How do I calculate watt-hours (Wh) from mAh?",
      answer: "First convert mAh to Ah by dividing by 1,000, then multiply by the battery's nominal voltage: Wh = (mAh ÷ 1,000) × Voltage. For a 4,000 mAh 3.7 V battery: 4.0 Ah × 3.7 V = 14.8 Wh."
    },
    {
      question: "Does a 10 Ah battery last longer than a 10,000 mAh battery?",
      answer: "At the same operating voltage, they last exactly the same amount of time because 10 Ah is identical to 10,000 mAh (10 × 1,000 = 10,000)."
    }
  ],
  relatedList: [
    { label: "Ampere-hour to Milliampere-hour", from: "ampere-hour", to: "milliampere-hour" },
    { label: "Milliampere-hour to Coulomb", from: "milliampere-hour", to: "coulomb" },
    { label: "Milliampere-hour to Kilocoulomb", from: "milliampere-hour", to: "kilocoulomb" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "Plett, Gregory L. <em>Battery Management Systems, Volume I: Battery Modeling</em>. Artech House."
  ]
};
