import { CustomArticleData } from "./types";

export const milliampereHourToCoulomb: CustomArticleData = {
  fromUnitId: "milliampere-hour",
  toUnitId: "coulomb",
  seoTitle: "Milliampere-hour to Coulomb Converter - mAh to C",
  metaDescription: "Convert milliampere-hours to coulombs (mAh to C) with exact formulas. Learn the 3.6 multiplier, battery fuel gauging, coulomb counting, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/milliampere-hour-to-coulomb",
  h1: "Milliampere-hour to Coulomb Converter",
  introduction: [
    "Portable consumer electronics, smartphones, smartwatches, and Internet-of-Things (IoT) sensors specify battery capacities almost universally in milliampere-hours (mAh). However, physical simulations, electrostatic modeling, and electrochemical equations require electric charge expressed in coulombs (C), the coherent base unit of the International System of Units (SI).",
    "Because current is the rate of charge flow over time (I = Q / t), one milliampere flowing for one hour represents a precise quantity of physical charge. This engineering converter and guide details the mathematical derivation, battery fuel gauge coulomb counting, and practical step-by-step conversion examples."
  ],
  quickAnswer: {
    text: "To convert milliampere-hours to coulombs, multiply the milliampere-hour value by 3.6. For example, a 5,000 mAh smartphone battery stores exactly 18,000 coulombs (18 kC) of electric charge.",
    formulaDisplay: "Charge (C) = mAh × 3.6",
    subtext: "1 milliampere-hour is equal to exactly 3.6 coulombs."
  },
  aboutSourceUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The milliampere-hour (symbol: mAh or mA·h) is a metric submultiple of the ampere-hour, representing one-thousandth of an ampere-hour (10⁻³ Ah). It measures the total electric charge transferred by a steady current of one milliampere (0.001 A) flowing for one hour (3,600 seconds). It is the standard rating unit for lithium-ion and nickel-metal hydride (NiMH) cells in consumer electronics."
  },
  aboutTargetUnit: {
    title: "About the Coulomb (C)",
    text: "The coulomb (symbol: C) is the SI derived unit of electric charge, named after French physicist Charles-Augustin de Coulomb. Under the 2019 redefinition of SI base units, one coulomb is defined by fixing the elementary charge e to exactly 1.602176634 × 10⁻¹⁹ C, corresponding to approximately 6.241509 × 10¹⁸ elementary charges (electrons or protons). One coulomb equals one ampere-second (1 C = 1 A·s)."
  },
  relationship: "The relationship between milliampere-hours and coulombs is derived directly from the definitions of the units: 1 mAh = (10⁻³ A) × (3,600 s) = 3.6 A·s = 3.6 C. Consequently, multiplying any charge value in milliampere-hours by 3.6 yields its exact equivalent in coulombs.",
  relationshipTitle: "Conversion Ratio and Mathematical Basis",
  relationshipItems: [
    { label: "Milliampere-hours (mAh) to Coulombs (C)", value: "Multiply by 3.6" },
    { label: "Coulombs (C) to Milliampere-hours (mAh)", value: "Divide by 3.6 (or multiply by ~0.2778)" },
    { label: "Time Equivalence", value: "1 hour = 3,600 seconds" },
    { label: "Submultiple Scaling", value: "1 mAh = 0.001 Ah = 3.6 C = 0.0036 kC" }
  ],
  formula: {
    text: "To convert any electric charge value from milliampere-hours into coulombs, multiply the number of milliampere-hours by 3.6.",
    math: "Charge (C) = Charge (mAh) × 3.6",
    subtext: "To convert coulombs back to milliampere-hours: Charge (mAh) = Charge (C) ÷ 3.6"
  },
  formulaTitle: "The Conversion Equation",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To quickly estimate coulombs from milliampere-hours in your head, multiply the mAh value by 3 and add 20% of that result (since 3 + 0.6 = 3.6). For example: for 2,000 mAh, 2,000 × 3 = 6,000; 20% of 6,000 is 1,200; 6,000 + 1,200 = 7,200 C."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Smartphone Battery Total Charge",
        subtitle: "A modern smartphone contains a 4,500 mAh lithium-polymer battery. Calculate the total electric charge stored in coulombs.",
        steps: [
          "Identify the battery capacity: Q = 4,500 mAh.",
          "Apply the conversion formula: C = mAh × 3.6.",
          "Calculate: 4,500 × 3.6 = 16,200.",
          "Conclusion: The battery stores exactly 16,200 coulombs (16.2 kC)."
        ]
      },
      {
        title: "Example 2: Smartwatch Cell Charge Evaluation",
        subtitle: "A compact smartwatch battery is rated at 280 mAh. Express this capacity in coulombs for power-management chip simulation.",
        steps: [
          "Identify the rating: Q = 280 mAh.",
          "Multiply by 3.6: 280 × 3.6 = 1,008.",
          "Conclusion: A 280 mAh battery delivers 1,008 coulombs of electric charge."
        ]
      },
      {
        title: "Example 3: Low-Power IoT Coin Cell Capacity",
        subtitle: "A CR2032 lithium coin cell provides 220 mAh of usable capacity before cutoff. Calculate its charge capacity in coulombs.",
        steps: [
          "Given value: Q = 220 mAh.",
          "Calculate: 220 × 3.6 = 792.",
          "Conclusion: The CR2032 cell holds 792 coulombs."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere-hour to Coulomb Quick Reference Table",
    headers: ["Milliampere-hours (mAh)", "Coulombs (C)", "Kilocoulombs (kC)", "Typical Application"],
    rows: [
      { fromVal: "50 mAh", toVal: "180 C", extra: "0.18 kC", extra2: "Wireless Bluetooth earbuds" },
      { fromVal: "100 mAh", toVal: "360 C", extra: "0.36 kC", extra2: "Fitness tracker band" },
      { fromVal: "220 mAh", toVal: "792 C", extra: "0.792 kC", extra2: "CR2032 coin cell" },
      { fromVal: "500 mAh", toVal: "1,800 C", extra: "1.8 kC", extra2: "Drone remote controller battery" },
      { fromVal: "1,000 mAh", toVal: "3,600 C", extra: "3.6 kC", extra2: "1.0 Ah standard cell" },
      { fromVal: "2,500 mAh", toVal: "9,000 C", extra: "9.0 kC", extra2: "18650 cylindrical Li-ion cell" },
      { fromVal: "3,000 mAh", toVal: "10,800 C", extra: "10.8 kC", extra2: "Compact smartphone battery" },
      { fromVal: "5,000 mAh", toVal: "18,000 C", extra: "18.0 kC", extra2: "Flagship smartphone / power bank" },
      { fromVal: "10,000 mAh", toVal: "36,000 C", extra: "36.0 kC", extra2: "Portable USB-C power bank" },
      { fromVal: "20,000 mAh", toVal: "72,000 C", extra: "72.0 kC", extra2: "High-capacity laptop power bank" }
    ]
  },
  expertNote: {
    title: "Coulomb Counting in Battery Management ICs",
    text: "Integrated circuit fuel gauges (such as the Texas Instruments BQ series or Analog Devices MAX170xx) do not directly measure chemical state. Instead, an internal ADC samples current through a low-resistance shunt resistor thousands of times per second, integrates current over time to count coulombs (A·s), and divides by 3.6 to report remaining milliampere-hours to the operating system."
  },
  applications: {
    title: "Practical Engineering Applications",
    items: [
      {
        title: "Battery Fuel Gauge Calibration and Modeling",
        text: "Embedded software engineers configure battery management registers by converting nominal cell ratings in mAh into accumulated coulomb thresholds, ensuring accurate percentage readouts across discharge curves."
      },
      {
        title: "Supercapacitor vs. Battery Storage Comparison",
        text: "Evaluating supercapacitors alongside chemical batteries requires converting both to coulombs. A 100 F supercapacitor charged to 2.7 V holds Q = C·V = 270 C, which corresponds to 75 mAh."
      },
      {
        title: "Electrochemical Deposition and Electroplating",
        text: "In industrial plating processes, current integration in coulombs determines the exact mass of metal deposited on a cathode according to Faraday's law of electrolysis. Converting power supply ampere-hour/milliampere-hour logs into coulombs is critical for process quality control."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying by 3,600 instead of 3.6: 3,600 is the factor for ampere-hours (Ah) to coulombs. Because a milliampere is 1/1,000 of an ampere, the factor for milliampere-hours is 3.6.",
      "Confusing charge (mAh / C) with stored energy (Wh / J): Milliampere-hours measure electric charge, not energy. Total energy requires multiplying charge by average operating voltage: Energy (Wh) = (mAh × V) / 1,000.",
      "Ignoring Peukert's effect: High discharge currents reduce the usable capacity of a battery below its nominal mAh rating, altering the actual coulombs delivered.",
      "Overlooking self-discharge: Batteries lose stored charge over time through parasitic chemical reactions, decreasing the retrievable coulomb content during long storage periods."
    ]
  },
  faqs: [
    {
      question: "How do I convert milliampere-hours to coulombs?",
      answer: "To convert milliampere-hours (mAh) to coulombs (C), multiply the milliampere-hour value by 3.6. For example, 2,500 mAh multiplied by 3.6 equals 9,000 coulombs."
    },
    {
      question: "How many coulombs are in 1 milliampere-hour?",
      answer: "There are exactly 3.6 coulombs in 1 milliampere-hour (1 mAh = 3.6 C)."
    },
    {
      question: "What is 5,000 mAh in coulombs?",
      answer: "5,000 mAh is equal to exactly 18,000 coulombs (18 kC)."
    },
    {
      question: "What is 1,000 mAh in coulombs?",
      answer: "1,000 mAh (which equals 1 Ah) is equal to 3,600 coulombs."
    },
    {
      question: "How do I convert coulombs back to milliampere-hours?",
      answer: "To convert coulombs back to milliampere-hours, divide the coulomb figure by 3.6. For example, 10,800 coulombs divided by 3.6 equals 3,000 mAh."
    },
    {
      question: "Why is the conversion factor between mAh and C exactly 3.6?",
      answer: "A milliampere is 1/1,000 of an ampere (10⁻³ A), and an hour is 3,600 seconds. Multiplying 0.001 A by 3,600 s yields exactly 3.6 A·s, which is 3.6 coulombs."
    },
    {
      question: "What is 10,000 mAh in coulombs?",
      answer: "10,000 mAh equals 36,000 coulombs (36 kC)."
    },
    {
      question: "Can I convert mAh directly to joules?",
      answer: "Not without knowing the voltage. A coulomb multiplied by one volt equals one joule (1 J = 1 C·V). Therefore, energy in joules equals mAh × 3.6 × Voltage."
    },
    {
      question: "What is the difference between mAh and coulombs?",
      answer: "Both measure electric charge. Milliampere-hours are preferred in consumer electronics because they directly reflect runtime (current in mA × hours), while coulombs are the fundamental SI unit used in scientific and physics calculations."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Ampere-hour", from: "milliampere-hour", to: "ampere-hour" },
    { label: "Milliampere-hour to Kilocoulomb", from: "milliampere-hour", to: "kilocoulomb" },
    { label: "Coulomb to Milliampere-hour", from: "coulomb", to: "milliampere-hour" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "Linden, David, and Thomas B. Reddy. <em>Handbook of Batteries</em>. McGraw-Hill."
  ]
};
