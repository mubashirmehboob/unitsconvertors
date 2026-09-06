import { CustomArticleData } from "./types";

export const milliampereHourToKilocoulomb: CustomArticleData = {
  fromUnitId: "milliampere-hour",
  toUnitId: "kilocoulomb",
  seoTitle: "Milliampere-hour to Kilocoulomb Converter - mAh to kC",
  metaDescription: "Convert milliampere-hours to kilocoulombs (mAh to kC) with precision. Learn the 0.0036 conversion factor, battery charge scaling, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/milliampere-hour-to-kilocoulomb",
  h1: "Milliampere-hour to Kilocoulomb Converter",
  introduction: [
    "Battery capacities for portable gadgets, medical wearables, and embedded controllers are almost universally labeled in milliampere-hours (mAh). However, macroscopic charge transport calculations, high-capacity electrical modeling, and scientific simulations frequently group electric charge into kilocoulombs (kC)—thousands of coulombs.",
    "Because one ampere-hour equals 3.6 kilocoulombs, converting milliampere-hours to kilocoulombs scales electric charge between consumer hardware ratings and standard SI engineering units. This technical guide outlines the mathematical derivation, decimal scaling shortcuts, and real-world calculation examples."
  ],
  quickAnswer: {
    text: "To convert milliampere-hours to kilocoulombs, multiply the milliampere-hour value by 0.0036 (or divide by 277.78). For example, a 5,000 mAh smartphone battery stores exactly 18 kilocoulombs (18 kC).",
    formulaDisplay: "Charge (kC) = Charge (mAh) × 0.0036",
    subtext: "1,000 milliampere-hours (1 Ah) is equal to exactly 3.6 kilocoulombs."
  },
  aboutSourceUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The milliampere-hour (symbol: mAh or mA·h) is a unit of electric charge equivalent to one-thousandth of an ampere-hour (10⁻³ Ah). It represents the total charge transferred by a steady current of one milliampere (0.001 A) sustained for one hour (3,600 seconds), which equals exactly 3.6 coulombs. It is the primary metric used worldwide to specify the capacity of small batteries."
  },
  aboutTargetUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The kilocoulomb (symbol: kC) is a decimal multiple of the SI unit of electric charge, representing one thousand coulombs (10³ C). One kilocoulomb corresponds to the transfer of 1,000 amperes of current flowing for one second (1,000 A·s), or approximately 6.2415 × 10²¹ elementary charges. Kilocoulombs are frequently used in electrochemistry, battery pack modeling, and industrial DC power systems."
  },
  relationship: "The relationship between milliampere-hours and kilocoulombs derives from the definitions of both units: 1 mAh = 3.6 C. Since 1 kC = 1,000 C, dividing 3.6 C by 1,000 gives 0.0036 kC. Therefore, 1 mAh = 0.0036 kC, and 1,000 mAh = 3.6 kC.",
  relationshipTitle: "Prefix Ratio and Conversion Factors",
  relationshipItems: [
    { label: "Milliampere-hours (mAh) to Kilocoulombs (kC)", value: "Multiply by 0.0036 (or divide by 277.778)" },
    { label: "Kilocoulombs (kC) to Milliampere-hours (mAh)", value: "Divide by 0.0036 (or multiply by ~277.778)" },
    { label: "Baseline Benchmark", value: "1,000 mAh = 1.0 Ah = 3.6 kC = 3,600 C" },
    { label: "Inverse Equivalence", value: "1 kC ≈ 277.78 mAh" }
  ],
  formula: {
    text: "To convert any electric charge value from milliampere-hours into kilocoulombs, multiply the number of milliampere-hours by 0.0036.",
    math: "Charge (kC) = Charge (mAh) × 0.0036 = Charge (mAh) ÷ 277.778",
    subtext: "To convert kilocoulombs back to milliampere-hours: Charge (mAh) = Charge (kC) ÷ 0.0036"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Two-Step Mental Calculation",
    text: "To convert mAh to kC easily without a calculator: first divide by 1,000 to get ampere-hours (Ah), then multiply by 3.6. For example, for 2,500 mAh: 2,500 ÷ 1,000 = 2.5 Ah; then 2.5 × 3.6 = 9.0 kC."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Smartphone Cell Stored Charge",
        subtitle: "A smartphone battery is labeled 4,000 mAh. Convert this capacity into kilocoulombs.",
        steps: [
          "State given value: Q = 4,000 mAh.",
          "Apply conversion formula: kC = mAh × 0.0036.",
          "Calculate: 4,000 × 0.0036 = 14.4.",
          "Conclusion: 4,000 mAh equals exactly 14.4 kC (14,400 C)."
        ]
      },
      {
        title: "Example 2: USB-C Power Bank Sizing",
        subtitle: "A high-capacity travel power bank has a rating of 20,000 mAh. Calculate its total charge capacity in kilocoulombs.",
        steps: [
          "Identify value: Q = 20,000 mAh.",
          "Convert through Ah: 20,000 mAh = 20 Ah.",
          "Multiply by 3.6: 20 × 3.6 = 72.0.",
          "Conclusion: A 20,000 mAh power bank stores 72 kC of electric charge."
        ]
      },
      {
        title: "Example 3: IoT Sensor Battery Evaluation",
        subtitle: "A medical patch battery is rated at 350 mAh. What is this value in kilocoulombs?",
        steps: [
          "State value: Q = 350 mAh.",
          "Calculate: 350 × 0.0036 = 1.26.",
          "Conclusion: 350 mAh equals 1.26 kC."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere-hour to Kilocoulomb Quick Reference Table",
    headers: ["Milliampere-hours (mAh)", "Kilocoulombs (kC)", "Coulomb Equivalent", "Engineering Context"],
    rows: [
      { fromVal: "100 mAh", toVal: "0.36 kC", extra: "360 C", extra2: "Fitness tracker lithium cell" },
      { fromVal: "500 mAh", toVal: "1.8 kC", extra: "1,800 C", extra2: "Handheld barcode scanner battery" },
      { fromVal: "1,000 mAh", toVal: "3.6 kC", extra: "3,600 C", extra2: "1.0 Ah standard reference" },
      { fromVal: "2,000 mAh", toVal: "7.2 kC", extra: "7,200 C", extra2: "Standard 18650 Li-ion cell" },
      { fromVal: "3,000 mAh", toVal: "10.8 kC", extra: "10,800 C", extra2: "High-drain vape / compact phone" },
      { fromVal: "4,500 mAh", toVal: "16.2 kC", extra: "16,200 C", extra2: "Modern 5G smartphone" },
      { fromVal: "5,000 mAh", toVal: "18.0 kC", extra: "18,000 C", extra2: "High-capacity 21700 cell" },
      { fromVal: "10,000 mAh", toVal: "36.0 kC", extra: "36,000 C", extra2: "Compact pocket power bank" },
      { fromVal: "25,000 mAh", toVal: "90.0 kC", extra: "90,000 C", extra2: "Airline-maximum carry-on bank" },
      { fromVal: "50,000 mAh", toVal: "180.0 kC", extra: "180,000 C", extra2: "Field telemetry battery pack" }
    ]
  },
  expertNote: {
    title: "Coulomb Accumulator Precision in Embedded Systems",
    text: "In microcontrollers managing battery packs, raw 32-bit registers frequently accumulate microampere-seconds or milliampere-seconds directly. When transmitting state-of-charge data over industrial CAN or Modbus telemetry networks, developers often scale charge values into kilocoulombs to avoid integer overflow while preserving decimal resolution."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Battery Management System (BMS) Telemetry",
        text: "Automotive and industrial BMS hardware transmits accumulated charge data to master controllers. Converting module ratings from mAh to kC provides compact telemetry packets compatible with standard SI metrics."
      },
      {
        title: "Electrochemical Rate of Reaction Modeling",
        text: "Chemical engineers modeling cathode degradation in lithium batteries use reaction rate equations scaled in coulombs and kilocoulombs. Translating commercial test-bench mAh curves into kC aligns laboratory data with physical chemistry models."
      },
      {
        title: "Pulsed Power Storage Comparison",
        text: "Engineers comparing hybrid energy storage systems (such as batteries paired with ultracapacitors) convert the battery's mAh capacity into kilocoulombs to evaluate charge transfer rates during short-duration high-current discharge pulses."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Confusing the factor 3.6 with 0.0036: 1 Ah = 3.6 kC, but 1 mAh = 0.0036 kC because a milliampere-hour is 1,000 times smaller than an ampere-hour.",
      "Inverting the conversion: Multiplying kC by 0.0036 instead of dividing when converting back to mAh yields an erroneously microscopic number.",
      "Neglecting operating voltage: Kilocoulombs and milliampere-hours quantify electric charge. Stored energy (in kilojoules or watt-hours) requires multiplying charge by operating voltage.",
      "Ignoring temperature-dependent capacity loss: A 5,000 mAh battery delivers fewer kilocoulombs at sub-zero temperatures due to increased internal electrolyte impedance."
    ]
  },
  faqs: [
    {
      question: "How do I convert milliampere-hours to kilocoulombs?",
      answer: "To convert milliampere-hours (mAh) to kilocoulombs (kC), multiply the milliampere-hour value by 0.0036, or divide by 1,000 to get ampere-hours and then multiply by 3.6. For example, 5,000 mAh × 0.0036 = 18 kC."
    },
    {
      question: "How many kilocoulombs is 1,000 mAh?",
      answer: "1,000 mAh (which equals 1.0 Ah) is equal to exactly 3.6 kilocoulombs (3,600 C)."
    },
    {
      question: "What is 5,000 mAh in kilocoulombs?",
      answer: "5,000 mAh is equal to exactly 18.0 kC (18,000 C)."
    },
    {
      question: "What is 10,000 mAh in kilocoulombs?",
      answer: "10,000 mAh equals 36.0 kC (36,000 C)."
    },
    {
      question: "How do I convert kilocoulombs back to milliampere-hours?",
      answer: "To convert kilocoulombs back to milliampere-hours, divide the kilocoulomb figure by 0.0036, or multiply by 277.778. For example, 18 kC ÷ 0.0036 = 5,000 mAh."
    },
    {
      question: "Why is the factor 0.0036 used?",
      answer: "One milliampere-hour equals 3.6 coulombs. Because one kilocoulomb contains 1,000 coulombs, dividing 3.6 by 1,000 gives 0.0036 kC per mAh."
    },
    {
      question: "How many mAh are in 1 kilocoulomb?",
      answer: "One kilocoulomb contains approximately 277.78 milliampere-hours (1,000 ÷ 3.6 ≈ 277.778 mAh)."
    },
    {
      question: "What is 20,000 mAh in kilocoulombs?",
      answer: "20,000 mAh equals exactly 72.0 kC."
    },
    {
      question: "Is kilocoulomb an official SI unit?",
      answer: "Yes, the kilocoulomb is a standard decimal multiple of the coulomb (the SI derived unit of electric charge), combining the SI base unit with the metric prefix 'kilo-' (10³)."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Coulomb", from: "milliampere-hour", to: "coulomb" },
    { label: "Milliampere-hour to Ampere-hour", from: "milliampere-hour", to: "ampere-hour" },
    { label: "Kilocoulomb to Milliampere-hour", from: "kilocoulomb", to: "milliampere-hour" },
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>.",
    "Tarascon, J. M., and M. Armand. <em>Issues and challenges facing rechargeable lithium batteries</em>. Nature."
  ]
};
