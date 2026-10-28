import { CustomArticleData } from "./types";

export const wattHourToJoule: CustomArticleData = {
  fromUnitId: "watt-hour",
  toUnitId: "joule",
  seoTitle: "Watt Hour to Joule Converter (Wh to J)",
  metaDescription: "Convert Watt Hours to Joules (Wh to J) with exact conversion factors. Discover formulas, battery energy calculations, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/watt-hour-to-joule",
  h1: "Watt Hour to Joule Converter",
  introduction: [
    "The Watt Hour (Wh) and the Joule (J) are fundamental metrics of physical work and energy in electrical engineering, electronics, and classical physics. While the Joule is the coherent derived unit of energy in the International System of Units (SI), the Watt Hour is universally employed across commercial electronics, renewable energy storage, and battery specifications.",
    "Because the Watt is explicitly defined as one Joule per second and one hour contains exactly 3,600 seconds, the conversion between Watt Hours and Joules is mathematically exact: one Watt Hour equals exactly 3,600 Joules (3.6 kJ). There is zero measurement approximation involved.",
    "This reference explains the fundamental derivation of the Watt Hour, demonstrates step-by-step conversions for small microelectronics and large battery banks, provides a detailed conversion lookup table, and addresses common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Watt Hours (Wh) to Joules (J), multiply the Watt Hour value by exactly 3,600. For example, a 50 Wh laptop battery stores exactly 180,000 Joules (180 kJ) of energy.",
    formulaDisplay: "J = Wh × 3,600",
    subtext: "1 Watt Hour = exactly 3,600 Joules; 1 Joule ≈ 0.000277778 Watt Hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is an energy unit representing the work performed by a continuous power flow of one Watt maintained for an interval of one hour. Because 1 Watt equals 1 Joule per second (1 J/s) and one hour contains 3,600 seconds, 1 Wh = 1 W × 3,600 s = 3,600 Joules. It is the international standard for rating portable consumer batteries, power tools, and distributed solar generation."
  },
  aboutTargetUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the base derived unit of energy, work, and heat in the International System of Units (SI). Named in honor of English physicist James Prescott Joule, it is defined as the work done by a force of one Newton exerted over a displacement of one meter (1 N·m = 1 kg·m²/s²), or the electrical energy transferred when a current of one ampere passes through an electrical resistance of one ohm for one second."
  },
  relationship: "The relationship between the Watt Hour and the Joule is defined with mathematical exactness: 1 Wh = 3,600 J (3.6 kJ). Inversely, 1 Joule represents exactly 1/3,600 of a Watt Hour, which evaluates to approximately 0.000277778 Wh (or 0.277778 milliwatt hours).",
  relationshipTitle: "Watt Hour to Joule Equivalence Values",
  relationshipItems: [
    { label: "1 Wh", value: "3,600 J (exactly 3.6 kJ)" },
    { label: "5 Wh", value: "18,000 J (18 kJ)" },
    { label: "10 Wh", value: "36,000 J (36 kJ)" },
    { label: "100 Wh", value: "360,000 J (360 kJ)" },
    { label: "1,000 Wh (1 kWh)", value: "3,600,000 J (exactly 3.6 MJ)" }
  ],
  formula: {
    text: "Multiply the energy in Watt Hours by 3,600 to find the equivalent energy in Joules.",
    math: "J = Wh * 3600",
    subtext: "Inverse calculation: Wh = J ÷ 3,600 (or Wh = J × 0.000277778)."
  },
  formulaTitle: "Watt Hour to Joule Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Kilojoules",
    text: "To quickly compute kilojoules (kJ) from Watt Hours, multiply by 3.6 directly. For example, a 20 Wh smartphone battery has 20 × 3.6 = 72 kJ of stored chemical energy."
  },
  expertNote: {
    title: "Airline FAA/TSA Battery Limits in Joules",
    text: "Commercial aviation regulations limit lithium-ion batteries in carry-on baggage to 100 Watt Hours without airline approval. In fundamental SI units, this maximum threshold is exactly 100 × 3,600 = 360,000 Joules (360 kJ). Secondary approval permits up to 160 Wh, which equals 576,000 Joules."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Smartphone Battery Energy Capacity",
        subtitle: "Convert a smartphone battery rated at 15.48 Wh (e.g., 4,000 mAh at 3.87 V) into Joules.",
        steps: [
          "State the energy in Watt Hours: 15.48 Wh.",
          "Multiply by the exact conversion factor: 15.48 × 3,600 = 55,728 J.",
          "Express in kilojoules: 55.73 kJ.",
          "Result: A 15.48 Wh phone battery stores 55,728 Joules of energy."
        ]
      },
      {
        title: "Example 2: Electric Scooter Battery Pack",
        subtitle: "Convert a 280 Wh electric scooter battery pack into Joules.",
        steps: [
          "State the battery capacity: 280 Wh.",
          "Multiply by 3,600: 280 × 3,600 = 1,008,000 J.",
          "Convert to megajoules: 1,008,000 ÷ 1,000,000 = 1.008 MJ.",
          "Result: 280 Wh equals exactly 1,008,000 Joules (1.008 MJ)."
        ]
      },
      {
        title: "Example 3: Small IoT Sensor Consumption",
        subtitle: "Convert 0.25 Wh consumed by an environmental telemetry sensor into Joules.",
        steps: [
          "State the sensor consumption: 0.25 Wh (250 mWh).",
          "Calculate: 0.25 × 3,600 = 900 J.",
          "Result: 0.25 Wh equals exactly 900 Joules."
        ]
      }
    ]
  },
  table: {
    title: "Watt Hour to Joule Conversion Table",
    headers: ["Watt Hours (Wh)", "Joules (J)", "Kilojoules (kJ)", "Calories (cal)"],
    rows: [
      { fromVal: "0.1 Wh", toVal: "360 J", extra: "0.36 kJ", extra2: "86.04 cal" },
      { fromVal: "0.5 Wh", toVal: "1,800 J", extra: "1.80 kJ", extra2: "430.2 cal" },
      { fromVal: "1 Wh", toVal: "3,600 J", extra: "3.60 kJ", extra2: "860.4 cal" },
      { fromVal: "2 Wh", toVal: "7,200 J", extra: "7.20 kJ", extra2: "1,720.8 cal" },
      { fromVal: "5 Wh", toVal: "18,000 J", extra: "18.00 kJ", extra2: "4,302.1 cal" },
      { fromVal: "10 Wh", toVal: "36,000 J", extra: "36.00 kJ", extra2: "8,604.2 cal" },
      { fromVal: "20 Wh", toVal: "72,000 J", extra: "72.00 kJ", extra2: "17,208 cal" },
      { fromVal: "50 Wh", toVal: "180,000 J", extra: "180.0 kJ", extra2: "43,021 cal" },
      { fromVal: "100 Wh", toVal: "360,000 J", extra: "360.0 kJ", extra2: "86,042 cal" },
      { fromVal: "250 Wh", toVal: "900,000 J", extra: "900.0 kJ", extra2: "215,105 cal" },
      { fromVal: "500 Wh", toVal: "1,800,000 J", extra: "1,800 kJ (1.8 MJ)", extra2: "430,210 cal" },
      { fromVal: "1,000 Wh", toVal: "3,600,000 J", extra: "3,600 kJ (3.6 MJ)", extra2: "860,421 cal" }
    ]
  },
  applications: {
    title: "Practical Applications of Wh to J Conversion",
    items: [
      {
        title: "Battery Testing and Thermal Modeling",
        text: "Electrochemists measuring battery charge-discharge kinetics translate battery ratings (in Wh) into Joules to calculate heat dissipation during internal short-circuit simulation."
      },
      {
        title: "Capacitor Pulse Discharges",
        text: "Pulsed power engineers compare energy storage in supercapacitors (frequently specified in Joules via E = ½CV²) against electrochemical cell capacities specified in Watt Hours."
      },
      {
        title: "Defibrillators and Biomedical Devices",
        text: "Medical equipment delivers therapeutic cardiac shocks measured strictly in Joules (e.g., 150 to 360 J), which medical designers verify against rechargeable backup battery banks rated in Watt Hours."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing power (Watts) with energy (Watt Hours): A 60 W light bulb draws power at 60 J/s; running it for 1 hour consumes 60 Wh (216,000 J). Watts do not directly equal Joules without multiplying by time in seconds.",
      "Multiplying by 60 instead of 3,600: Forgetting that an hour contains 60 minutes × 60 seconds = 3,600 seconds leads to a factor-of-60 error.",
      "Confusing amp-hours (Ah) with Watt Hours: Amp-hours represent electrical charge, not energy. You must multiply Ah by nominal battery voltage before converting to Joules."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 Watt Hour?",
      answer: "One Watt Hour equals exactly 3,600 Joules (3.6 kilojoules)."
    },
    {
      question: "How many Watt Hours are in 1 Joule?",
      answer: "One Joule equals exactly 1/3,600 of a Watt Hour, or approximately 0.000277778 Watt Hours."
    },
    {
      question: "What is the formula to convert Wh to Joules?",
      answer: "Joules = Watt Hours × 3,600."
    },
    {
      question: "Why does 1 Wh equal 3,600 Joules?",
      answer: "One Watt is defined as 1 Joule per second. Since one hour contains 3,600 seconds (60 seconds × 60 minutes), 1 Watt sustained for 1 hour delivers 1 × 3,600 = 3,600 Joules."
    },
    {
      question: "How many Joules are in a 100 Wh laptop battery?",
      answer: "100 Wh × 3,600 = 360,000 Joules (360 kJ or 0.36 MJ)."
    },
    {
      question: "How do you convert 1,000 Joules into Watt Hours?",
      answer: "1,000 J ÷ 3,600 ≈ 0.2778 Watt Hours (277.8 milliwatt hours)."
    },
    {
      question: "Is Watt Hour an SI unit?",
      answer: "The Watt Hour is not an official base or derived SI unit (the Joule is the sole coherent SI energy unit), but it is accepted for use with SI units due to widespread electrical metering adoption."
    },
    {
      question: "How many Joules are in 50 Wh?",
      answer: "50 Wh × 3,600 = 180,000 Joules (180 kJ)."
    }
  ],
  relatedList: [
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" },
    { label: "Watt Hour to Kilojoule", from: "watt-hour", to: "kilojoule" },
    { label: "Watt Hour to Kilowatt Hour", from: "watt-hour", to: "kilowatt-hour" },
    { label: "Watt Hour to Calorie", from: "watt-hour", to: "calorie" },
    { label: "Watt Hour to Kilocalorie", from: "watt-hour", to: "kilocalorie" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th edition).",
    "IEC 60050: International Electrotechnical Vocabulary — Electromagnetism.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
