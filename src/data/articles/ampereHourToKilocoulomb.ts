import { CustomArticleData } from "./types";

export const ampereHourToKilocoulomb: CustomArticleData = {
  fromUnitId: "ampere-hour",
  toUnitId: "kilocoulomb",
  seoTitle: "Ampere-hour to Kilocoulomb Converter (Ah to kC)",
  metaDescription: "Convert Ampere-hours to Kilocoulombs (Ah to kC) with exact electric charge formulas, worked battery and electrochemical calculations, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/ampere-hour-to-kilocoulomb",
  h1: "Ampere-hour to Kilocoulomb Converter",
  introduction: [
    "Translating practical battery capacity ratings into metric SI base multiples is a foundational step in power electronics modeling, electric vehicle powertrain simulation, and industrial electrochemical processing.",
    "The Ampere-hour (Ah) is the global standard for expressing energy storage capacity in batteries and capacitor modules, representing one ampere flowing for one hour (3,600 seconds). The Kilocoulomb (kC) is the decimal multiple of the SI coherent derived unit of electric charge (1 kC = 1,000 C).",
    "This converter provides exact mathematical conversions between Ampere-hours and Kilocoulombs, worked battery capacity examples, reference lookup tables, and scientific conversion guidelines."
  ],
  quickAnswer: {
    text: "To convert Ampere-hours to Kilocoulombs, multiply the value in Ampere-hours by 3.6. For example, a 10.0 Ah electric scooter battery holds exactly 36.0 Kilocoulombs (kC), and a 1.0 Ah cell holds 3.6 kC.",
    formulaDisplay: "kC = Ah × 3.6",
    subtext: "1 Ampere-hour is equal to exactly 3.6 Kilocoulombs (3.6 kC = 3,600 C)."
  },
  aboutSourceUnit: {
    title: "Understanding Ampere-hours (Ah)",
    text: "An Ampere-hour (symbol: Ah or A·h) is a non-SI unit of electric charge widely used in electrical engineering and battery manufacturing. It denotes the quantity of electric charge transferred by a steady current of one ampere flowing for one full hour (3,600 seconds). One ampere-hour equals exactly 3,600 coulombs."
  },
  aboutTargetUnit: {
    title: "What is a Kilocoulomb (kC)?",
    text: "A Kilocoulomb (symbol: kC) is a decimal multiple of the coulomb based on the SI prefix 'kilo-' (10³). One kilocoulomb represents one thousand coulombs (1 kC = 1,000 C = 1,000 A·s). Kilocoulombs provide a clean, metric scale for representing intermediate-to-large quantities of electric charge in electroplating, utility capacitors, and battery modeling."
  },
  relationship: "The relationship between ampere-hours and kilocoulombs is derived from the conversion of time and the kilo- prefix: 1 Ah = 3,600 C = 3.6 × 10³ C = 3.6 kC. Therefore, multiplying any Ampere-hour rating by 3.6 directly yields its value in Kilocoulombs.",
  relationshipTitle: "Ampere-hour to Kilocoulomb Common Benchmark Values",
  relationshipItems: [
    { label: "0.5 Ah", value: "1.8 kC (Smartwatch Li-ion cell)" },
    { label: "1.0 Ah", value: "3.6 kC (Fundamental unit conversion factor)" },
    { label: "5.0 Ah", value: "18.0 kC (Power tool battery pack)" },
    { label: "50.0 Ah", value: "180.0 kC (Automotive 12V starter battery)" },
    { label: "100.0 Ah", value: "360.0 kC (Solar deep-cycle LiFePO4 battery)" }
  ],
  formula: {
    text: "Multiply the capacity in Ampere-hours by 3.6 to calculate the equivalent electric charge in Kilocoulombs.",
    math: "Q_{(kC)} = Q_{(Ah)} \\times 3.6 = \\frac{Q_{(Ah)} \\times 3600}{1000}",
    subtext: "To convert kilocoulombs back to ampere-hours, divide the kilocoulomb value by 3.6 (or multiply by ~0.277778)."
  },
  formulaTitle: "Ampere-hour to Kilocoulomb Mathematical Formula",
  practicalTip: {
    title: "Multiply by 3.6 Rule",
    text: "To convert Ah to kC mentally, multiply the Ah number by 3, then add 60% of the original number. For example, for 20 Ah: (20 × 3) + (20 × 0.6) = 60 + 12 = 72 kC."
  },
  expertNote: {
    title: "Electrochemical Modeling Coherence",
    text: "Physics-based battery simulation tools (such as PyBaMM or COMSOL Multiphysics) solve partial differential equations using SI units (Coulombs or Kilocoulombs). Converting manufacturer Ah datasheets to kC ensures seamless dimensional consistency in simulation scripts."
  },
  examples: {
    title: "Step-by-Step Ah to kC Worked Calculations",
    items: [
      {
        title: "Example 1: Electric Scooter Battery Charge",
        subtitle: "A 36V electric scooter battery has a rated capacity of 7.5 Ah. Convert this capacity to Kilocoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 7.5 Ah.",
          "Apply conversion formula: Q_(kC) = 7.5 × 3.6.",
          "Perform calculation: 7.5 × 3.6 = 27.0.",
          "Result: 7.5 Ah equals exactly 27.0 Kilocoulombs (kC)."
        ]
      },
      {
        title: "Example 2: Commercial Marine Battery Bank",
        subtitle: "A 24V marine house battery bank has a capacity of 250.0 Ah. Convert this to Kilocoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 250.0 Ah.",
          "Apply conversion formula: Q_(kC) = 250.0 × 3.6.",
          "Perform calculation: 250.0 × 3.6 = 900.0.",
          "Result: 250.0 Ah equals exactly 900.0 Kilocoulombs (kC)."
        ]
      },
      {
        title: "Example 3: Portable Wi-Fi Hotspot Battery",
        subtitle: "A portable LTE router battery is rated at 3.0 Ah. Convert this to Kilocoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 3.0 Ah.",
          "Apply conversion formula: Q_(kC) = 3.0 × 3.6.",
          "Perform calculation: 3.0 × 3.6 = 10.8.",
          "Result: 3.0 Ah equals exactly 10.8 Kilocoulombs (kC)."
        ]
      }
    ]
  },
  table: {
    title: "Ampere-hour to Kilocoulomb Conversion Table",
    headers: ["Capacity (Ampere-hours, Ah)", "Charge (Kilocoulombs, kC)", "Charge (Coulombs, C)"],
    rows: [
      { fromVal: "0.5 Ah", toVal: "1.8 kC", extra: "1,800 C" },
      { fromVal: "1.0 Ah", toVal: "3.6 kC", extra: "3,600 C" },
      { fromVal: "2.0 Ah", toVal: "7.2 kC", extra: "7,200 C" },
      { fromVal: "3.0 Ah", toVal: "10.8 kC", extra: "10,800 C" },
      { fromVal: "4.0 Ah", toVal: "14.4 kC", extra: "14,400 C" },
      { fromVal: "5.0 Ah", toVal: "18.0 kC", extra: "18,000 C" },
      { fromVal: "10.0 Ah", toVal: "36.0 kC", extra: "36,000 C" },
      { fromVal: "20.0 Ah", toVal: "72.0 kC", extra: "72,000 C" },
      { fromVal: "50.0 Ah", toVal: "180.0 kC", extra: "180,000 C" },
      { fromVal: "100.0 Ah", toVal: "360.0 kC", extra: "360,000 C" },
      { fromVal: "200.0 Ah", toVal: "720.0 kC", extra: "720,000 C" },
      { fromVal: "500.0 Ah", toVal: "1,800.0 kC", extra: "1,800,000 C (1.8 MC)" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Electric Vehicle Powertrain Simulation",
        text: "EV simulation software translates battery cell ratings from Ah into kC to compute finite-element thermal and electrochemical degradation models."
      },
      {
        title: "Supercapacitor Charge Buffer Sizing",
        text: "Automotive stop-start systems integrate supercapacitors rated in Farads with battery modules (Ah). Expressing both in Kilocoulombs streamlines charge-sharing calculations."
      },
      {
        title: "Industrial Battery Charger Programmable Calibration",
        text: "High-power industrial chargers calibrate current integration shunts in kC before displaying cumulative charge delivery in Ah to service technicians."
      },
      {
        title: "Electrochemical Synthesis & Refining",
        text: "Electroplating and electro-winning plants monitor total charge in Kilocoulombs per shift to verify exact metal deposition against theoretical stoichiometry."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting 10 Ah to kC requires multiplying by 3.6 (36 kC), not dividing into 2.78 kC.",
      "Confusing kC with Coulombs (C): Forgetting the 1,000× kilo prefix results in a 1,000× underestimation of stored charge.",
      "Symbol formatting errors: Writing 'KC' or 'kc' instead of the standardized SI symbol 'kC'.",
      "Assuming 1 Ah = 1 kC: 1 Ah is 3.6 kC (3,600 Coulombs), not 1.0 kC."
    ]
  },
  faqs: [
    {
      question: "How many Kilocoulombs are in one Ampere-hour?",
      answer: "There are exactly 3.6 Kilocoulombs in one Ampere-hour (1 Ah = 3,600 C = 3.6 kC)."
    },
    {
      question: "What is the formula to convert Ah to kC?",
      answer: "The formula is: Charge in kC = Capacity in Ah × 3.6. For example, 20 Ah × 3.6 = 72 kC."
    },
    {
      question: "How many Kilocoulombs are in a 100 Ah battery?",
      answer: "A 100 Ah battery holds 360.0 Kilocoulombs of electric charge (100 × 3.6 = 360 kC)."
    },
    {
      question: "How do I convert Kilocoulombs back to Ampere-hours?",
      answer: "Divide the Kilocoulomb value by 3.6: Capacity in Ah = Charge in kC ÷ 3.6. For example, 18 kC ÷ 3.6 = 5.0 Ah."
    },
    {
      question: "What is the difference between kC and Ah?",
      answer: "Both measure electric charge. The Kilocoulomb (kC) is a decimal multiple of the SI coherent unit (Coulomb), while the Ampere-hour (Ah) is a practical commercial unit based on the hour (3,600 seconds)."
    },
    {
      question: "How many electrons are in 1 Kilocoulomb?",
      answer: "One Kilocoulomb (1,000 C) contains approximately 6.2415 × 10²¹ electrons."
    },
    {
      question: "How does a Kilocoulomb relate to a Megacoulomb?",
      answer: "One Megacoulomb (MC) equals 1,000 Kilocoulombs (1 MC = 1,000 kC). Therefore, 1 kC = 0.001 MC."
    },
    {
      question: "Why do scientists use kC while battery makers use Ah?",
      answer: "Scientists use kC for dimensional coherence within SI formulas (like Q = C·V and F = I·t). Battery manufacturers use Ah because it intuitively tells a user how many amperes the battery can supply for one hour."
    }
  ],
  relatedList: [
    { label: "Kilocoulomb to Ampere-hour", from: "kilocoulomb", to: "ampere-hour" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" },
    { label: "Ampere-hour to Megacoulomb", from: "ampere-hour", to: "megacoulomb" },
    { label: "Ampere-hour to Milliampere-hour", from: "ampere-hour", to: "milliampere-hour" },
    { label: "Ampere-hour to Faraday", from: "ampere-hour", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "ISO 80000-6 - Quantities and units — Part 6: Electromagnetism",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV)"
  ]
};
