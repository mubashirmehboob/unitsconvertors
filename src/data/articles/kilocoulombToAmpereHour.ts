import { CustomArticleData } from "./types";

export const kilocoulombToAmpereHour: CustomArticleData = {
  fromUnitId: "kilocoulomb",
  toUnitId: "ampere-hour",
  seoTitle: "Kilocoulomb to Ampere-hour Converter - kC to Ah",
  metaDescription: "Convert kilocoulombs to ampere-hours (kC to Ah) with precision. Learn the 3.6 division rule, battery capacity calculations, and worked engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/kilocoulomb-to-ampere-hour",
  h1: "Kilocoulomb to Ampere-hour Converter",
  introduction: [
    "Electrical engineers, battery designers, and electrochemical modelers constantly convert electric charge between kilocoulombs (kC)—thousands of coulombs—and ampere-hours (Ah), the global commercial standard for battery capacity.",
    "Because an ampere-hour represents one ampere flowing for 3,600 seconds, one ampere-hour contains exactly 3.6 kilocoulombs. Converting between these units allows engineers to translate physical coulomb-counting data directly into commercial battery runtime ratings. This guide provides the mathematical formula, decimal conversion shortcuts, and practical engineering examples."
  ],
  quickAnswer: {
    text: "To convert kilocoulombs to ampere-hours, divide the kilocoulomb value by 3.6, or multiply by approximately 0.277778. For example, 36 kilocoulombs equals exactly 10 ampere-hours (10 Ah).",
    formulaDisplay: "Capacity (Ah) = Charge (kC) ÷ 3.6",
    subtext: "Exactly 3.6 kilocoulombs is equal to 1.0 ampere-hour (3,600 C)."
  },
  aboutSourceUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The kilocoulomb (symbol: kC) is a decimal multiple of the SI unit of electric charge, equal to one thousand coulombs (10³ C). It represents the charge transferred by a continuous current of 1,000 amperes flowing for one second (1,000 A·s), or 1 ampere flowing for 1,000 seconds. It is widely used in electrochemistry, physics simulations, and industrial DC power equipment."
  },
  aboutTargetUnit: {
    title: "About the Ampere-hour (Ah)",
    text: "The ampere-hour (symbol: Ah or A·h) is the standard commercial unit of electric charge capacity in electrical engineering. One ampere-hour represents the charge transferred by a steady current of one ampere flowing for one hour (3,600 seconds), corresponding to exactly 3,600 coulombs or 3.6 kilocoulombs. It is used to rate lead-acid automotive batteries, lithium iron phosphate (LiFePO4) solar storage cells, and electric vehicle battery packs."
  },
  relationship: "The relationship between kilocoulombs and ampere-hours is determined by the number of seconds in one hour: 1 hour = 3,600 seconds. Since 1 Ah = 3,600 coulombs and 1 kC = 1,000 coulombs, dividing 3,600 by 1,000 gives exactly 3.6 kC per Ah. Dividing any value in kilocoulombs by 3.6 yields its exact equivalent in ampere-hours.",
  relationshipTitle: "Mathematical Derivation and Conversion Ratio",
  relationshipItems: [
    { label: "Kilocoulombs (kC) to Ampere-hours (Ah)", value: "Divide by 3.6 (or multiply by ~0.277778)" },
    { label: "Ampere-hours (Ah) to Kilocoulombs (kC)", value: "Multiply by 3.6" },
    { label: "Baseline Equivalence", value: "3.6 kC = 1.0 Ah = 1,000 mAh = 3,600 C" },
    { label: "Inverse Factor", value: "1 kC ≈ 0.2778 Ah (277.78 mAh)" }
  ],
  formula: {
    text: "To convert any electric charge value from kilocoulombs into ampere-hours, divide the number of kilocoulombs by 3.6.",
    math: "Capacity (Ah) = Charge (kC) ÷ 3.6 = Charge (kC) × 0.277778",
    subtext: "To convert ampere-hours back to kilocoulombs: Charge (kC) = Capacity (Ah) × 3.6"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "The 3.6 Rule of Thumb",
    text: "Whenever converting between kC and Ah, the master constant is 3.6. Since ampere-hours are larger units than kilocoulombs, always divide kC by 3.6 to get Ah: 18 kC ÷ 3.6 = 5 Ah; 72 kC ÷ 3.6 = 20 Ah; and 360 kC ÷ 3.6 = 100 Ah."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Automotive Battery Charge Conversion",
        subtitle: "A vehicle telemetry log records an accumulated alternator charge of 216 kilocoulombs delivered to a 12V starter battery. Calculate the equivalent capacity in ampere-hours.",
        steps: [
          "State the value: Q = 216 kC.",
          "Apply conversion formula: Ah = kC ÷ 3.6.",
          "Calculate: 216 ÷ 3.6 = 60.",
          "Conclusion: 216 kC corresponds to exactly 60 Ah."
        ]
      },
      {
        title: "Example 2: Lithium-Ion Battery Module Capacity",
        subtitle: "A lithium-ion battery pack testing station measures a total discharge capacity of 54 kilocoulombs. Express this capacity in ampere-hours.",
        steps: [
          "Given: Q = 54 kC.",
          "Apply formula: 54 ÷ 3.6 = 15.",
          "Conclusion: The battery pack capacity is 15.0 Ah (15,000 mAh)."
        ]
      },
      {
        title: "Example 3: Electric Bike Pack Charge Translation",
        subtitle: "Convert 50.4 kC into ampere-hours.",
        steps: [
          "State value: Q = 50.4 kC.",
          "Calculate: 50.4 ÷ 3.6 = 14.",
          "Conclusion: 50.4 kC equals exactly 14.0 Ah."
        ]
      }
    ]
  },
  table: {
    title: "Kilocoulomb to Ampere-hour Quick Reference Table",
    headers: ["Kilocoulombs (kC)", "Ampere-hours (Ah)", "Milliampere-hours (mAh)", "Typical Engineering Application"],
    rows: [
      { fromVal: "0.36 kC", toVal: "0.10 Ah", extra: "100 mAh", extra2: "Fitness tracker wearable cell" },
      { fromVal: "1.8 kC", toVal: "0.50 Ah", extra: "500 mAh", extra2: "Wireless gaming mouse battery" },
      { fromVal: "3.6 kC", toVal: "1.00 Ah", extra: "1,000 mAh", extra2: "1.0 Ah standard reference unit" },
      { fromVal: "7.2 kC", toVal: "2.00 Ah", extra: "2,000 mAh", extra2: "Standard 18650 Li-ion cell" },
      { fromVal: "10.8 kC", toVal: "3.00 Ah", extra: "3,000 mAh", extra2: "High-drain cordless drill battery" },
      { fromVal: "18.0 kC", toVal: "5.00 Ah", extra: "5,000 mAh", extra2: "21700 cell / Flagship smartphone" },
      { fromVal: "36.0 kC", toVal: "10.00 Ah", extra: "10,000 mAh", extra2: "Electric scooter battery module" },
      { fromVal: "72.0 kC", toVal: "20.00 Ah", extra: "20,000 mAh", extra2: "Solar street light battery pack" },
      { fromVal: "180.0 kC", toVal: "50.00 Ah", extra: "50,000 mAh", extra2: "Light electric vehicle (LEV) battery" },
      { fromVal: "360.0 kC", toVal: "100.00 Ah", extra: "100,000 mAh", extra2: "Standard 12V automotive battery" }
    ]
  },
  expertNote: {
    title: "Coulomb Counting in Electric Vehicle Battery Management Systems",
    text: "In electric vehicle Battery Management Systems (BMS), high-precision current transducers sample pack current at rates up to 10 kHz. The microcontroller integrates these measurements in coulombs and kilocoulombs to track the chemical state of charge (SoC). Dividing total accumulated kilocoulombs by 3.6 yields ampere-hours, which the vehicle cluster displays as remaining battery capacity."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Electric Vehicle State-of-Charge (SoC) Algorithms",
        text: "EV battery algorithms integrate sensor currents over time, yielding kilocoulombs. Converting this running total into ampere-hours allows the dashboard computer to calculate remaining driving range based on vehicle energy consumption."
      },
      {
        title: "Battery Cycler Test Data Post-Processing",
        text: "Automated laboratory battery cyclers often log raw charge throughput in coulombs or kilocoulombs. Test engineers convert these datasets to ampere-hours to verify manufacturer datasheet ratings and plot degradation curves."
      },
      {
        title: "Solar Off-Grid Storage System Auditing",
        text: "Energy auditors inspect solar charge controllers that report daily cumulative charge throughput in kilocoulombs. Dividing by 3.6 gives the exact daily amp-hour yield delivered into the battery bank."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from kilocoulombs to ampere-hours requires dividing by 3.6; multiplying yields an error of nearly 13x.",
      "Confusing ampere-hours (Ah) with kilowatt-hours (kWh): Ah measures electric charge, while kWh measures energy. To find energy, multiply Ah by battery voltage and divide by 1,000.",
      "Assuming 100% round-trip efficiency: The ampere-hours retrieved during discharge are always slightly less than the kilocoulombs injected during charging due to internal resistance and chemical losses.",
      "Overlooking C-rate discharge effects: High discharge currents cause internal voltage drop, resulting in fewer usable ampere-hours than the nominal kilocoulomb rating suggests."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilocoulombs to ampere-hours?",
      answer: "To convert kilocoulombs (kC) to ampere-hours (Ah), divide the kilocoulomb value by 3.6. For example, 18 kC ÷ 3.6 = 5 Ah."
    },
    {
      question: "How many ampere-hours is 1 kilocoulomb?",
      answer: "1 kilocoulomb is equal to approximately 0.2778 ampere-hours (1 ÷ 3.6 ≈ 0.277778 Ah, or 277.78 mAh)."
    },
    {
      question: "What is 3.6 kC in ampere-hours?",
      answer: "3.6 kC is equal to exactly 1.0 Ah (1,000 mAh or 3,600 C)."
    },
    {
      question: "What is 360 kC in ampere-hours?",
      answer: "360 kC equals exactly 100 Ah (a standard rating for deep-cycle marine and automotive batteries)."
    },
    {
      question: "How do I convert ampere-hours back to kilocoulombs?",
      answer: "To convert ampere-hours back to kilocoulombs, multiply the ampere-hour value by 3.6. For instance, 10 Ah × 3.6 = 36 kC."
    },
    {
      question: "Why is the conversion factor 3.6?",
      answer: "One hour has 3,600 seconds. An ampere-hour equals 3,600 ampere-seconds (coulombs). Because a kilocoulomb is 1,000 coulombs, 3,600 ÷ 1,000 = 3.6 kC per Ah."
    },
    {
      question: "What is 72 kC in ampere-hours?",
      answer: "72 kC equals exactly 20 Ah (72 ÷ 3.6 = 20)."
    },
    {
      question: "Can I convert kC to milliampere-hours (mAh)?",
      answer: "Yes. First divide kC by 3.6 to get Ah, then multiply by 1,000 to get mAh: mAh = (kC ÷ 3.6) × 1,000 = kC × 277.778."
    },
    {
      question: "Is ampere-hour an SI unit?",
      answer: "The ampere-hour is not a coherent SI unit, but it is officially accepted for use with the SI because it is directly derived from the SI base unit ampere and the recognized non-SI unit hour."
    }
  ],
  relatedList: [
    { label: "Ampere-hour to Kilocoulomb", from: "ampere-hour", to: "kilocoulomb" },
    { label: "Kilocoulomb to Milliampere-hour", from: "kilocoulomb", to: "milliampere-hour" },
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>.",
    "Linden, David, and Thomas B. Reddy. <em>Handbook of Batteries</em>. McGraw-Hill."
  ]
};
