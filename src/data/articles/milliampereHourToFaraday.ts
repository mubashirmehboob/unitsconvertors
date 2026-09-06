import { CustomArticleData } from "./types";

export const milliampereHourToFaraday: CustomArticleData = {
  fromUnitId: "milliampere-hour",
  toUnitId: "faraday",
  seoTitle: "Milliampere-hour to Faraday Converter - mAh to F",
  metaDescription: "Convert milliampere-hours to faradays (mAh to F) with high precision. Learn the electrochemical equivalent, molar charge calculations, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/milliampere-hour-to-faraday",
  h1: "Milliampere-hour to Faraday Converter",
  introduction: [
    "Battery engineers and electrochemists frequently translate practical battery capacity ratings expressed in milliampere-hours (mAh) into fundamental chemical equivalents measured in faradays (F). The faraday represents the magnitude of electric charge carried by exactly one mole of electrons.",
    "Connecting commercial battery capacities to the Faraday constant (F ≈ 96,485.33 C/mol) enables scientists to calculate theoretical cathode capacities, determine the mass of active material consumed during discharge, and evaluate electrochemical cell efficiencies. This engineering converter and guide details the mathematical relationship, molar charge principles, and worked calculation examples."
  ],
  quickAnswer: {
    text: "To convert milliampere-hours to faradays, divide the milliampere-hour value by 26,801.48 (or multiply by approximately 0.0000373114). For example, a 26,801.48 mAh battery corresponds to exactly 1 faraday of electron transfer.",
    formulaDisplay: "Charge (F) = Charge (mAh) ÷ 26,801.4811",
    subtext: "1 faraday equals approximately 26,801.48 milliampere-hours (26.8015 Ah) or 96,485.33 coulombs."
  },
  aboutSourceUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The milliampere-hour (symbol: mAh or mA·h) is a unit of electric charge representing one-thousandth of an ampere-hour (10⁻³ Ah). It corresponds to the total charge delivered by a current of one milliampere (0.001 A) sustained over one hour (3,600 seconds), equivalent to exactly 3.6 coulombs. It is the international standard for rating small rechargeable batteries."
  },
  aboutTargetUnit: {
    title: "About the Faraday (F)",
    text: "The faraday (symbol: F, named after English scientist Michael Faraday) is an electrochemical unit of charge equal to the electric charge carried by one mole of electrons. Based on the 2019 SI redefinition of fundamental physical constants, 1 faraday = N_A × e = (6.02214076 × 10²³ mol⁻¹) × (1.602176634 × 10⁻¹⁹ C) ≈ 96,485.33212 coulombs. It is universally applied in Faraday's laws of electrolysis and electrochemical thermodynamics."
  },
  relationship: "The relationship between milliampere-hours and faradays is established by physical chemistry: 1 mAh = 3.6 coulombs, and 1 faraday ≈ 96,485.33212 coulombs. Dividing 3.6 by 96,485.33212 gives approximately 0.0000373114 F per mAh. Conversely, 1 faraday contains 96,485.33212 ÷ 3.6 ≈ 26,801.4811 milliampere-hours (26.8015 Ah).",
  relationshipTitle: "Electrochemical Ratio and Physical Constants",
  relationshipItems: [
    { label: "Milliampere-hours (mAh) to Faradays (F)", value: "Divide by 26,801.4811 (or multiply by 3.73114 × 10⁻⁵)" },
    { label: "Faradays (F) to Milliampere-hours (mAh)", value: "Multiply by 26,801.4811" },
    { label: "One Faraday Benchmark", value: "1 F ≈ 96,485.33 C = 26.8015 Ah = 26,801.48 mAh" },
    { label: "Molar Relationship", value: "1 F = Charge of 1 mole of electrons (N_A × e)" }
  ],
  formula: {
    text: "To convert electric charge from milliampere-hours into faradays, divide the milliampere-hour measurement by 26,801.4811 (or multiply by 3.6 and divide by 96,485.33212).",
    math: "Charge (F) = \\frac{\\text{Charge (mAh)} \\times 3.6}{96,485.33212} = \\frac{\\text{Charge (mAh)}}{26,801.4811}",
    subtext: "To convert faradays back to milliampere-hours: Charge (mAh) = Charge (F) × 26,801.4811"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "The 26.8 Ah Mental Benchmark",
    text: "Remember that 1 faraday is approximately 26.8 ampere-hours (26,800 mAh). To quickly estimate faradays from a given mAh capacity, divide the capacity by 26,800: for a 53,600 mAh pack, 53,600 ÷ 26,800 ≈ 2.0 faradays (corresponding to 2 moles of transferred electrons)."
  },
  examples: {
    title: "Step-by-Step Worked Calculation Examples",
    items: [
      {
        title: "Example 1: Lithium-Ion Cell Molar Electron Transfer",
        subtitle: "A 5,000 mAh 21700 cylindrical battery cell is fully discharged. How many faradays of electric charge are transferred through the external circuit?",
        steps: [
          "State given value: Q = 5,000 mAh.",
          "Apply the conversion formula: F = mAh ÷ 26,801.4811.",
          "Calculate: 5,000 ÷ 26,801.4811 ≈ 0.186557.",
          "Conclusion: Discharging the 5,000 mAh cell transfers approximately 0.1866 faradays (0.1866 moles of electrons)."
        ]
      },
      {
        title: "Example 2: Theoretical Lithium Metal Consumption",
        subtitle: "In a lithium metal battery cell, 1 mole of lithium (6.941 g) yields 1 mole of electrons (1 faraday) upon oxidation (Li → Li⁺ + e⁻). Determine the mAh capacity generated by 1 faraday.",
        steps: [
          "Apply reverse formula: mAh = F × 26,801.4811.",
          "Calculate for 1 F: 1 × 26,801.4811 = 26,801.48 mAh.",
          "Compute specific capacity: 26,801.48 mAh ÷ 6.941 g ≈ 3,861 mAh/g.",
          "Conclusion: 1 faraday yields 26,801.48 mAh, demonstrating the theoretical specific capacity of pure lithium metal."
        ]
      },
      {
        title: "Example 3: Smartphone Battery Faradaic Evaluation",
        subtitle: "Convert a 3,350 mAh phone battery capacity into faradays.",
        steps: [
          "Given value: Q = 3,350 mAh.",
          "Calculate: 3,350 ÷ 26,801.4811 ≈ 0.1250.",
          "Conclusion: 3,350 mAh equals approximately 0.125 F (one-eighth of a faraday)."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere-hour to Faraday Quick Reference Table",
    headers: ["Milliampere-hours (mAh)", "Faradays (F)", "Coulomb Equivalent", "Electrochemical Context"],
    rows: [
      { fromVal: "1,000 mAh", toVal: "0.03731 F", extra: "3,600 C", extra2: "0.0373 moles of electrons" },
      { fromVal: "2,500 mAh", toVal: "0.09328 F", extra: "9,000 C", extra2: "Standard 18650 cell" },
      { fromVal: "5,000 mAh", toVal: "0.18656 F", extra: "18,000 C", extra2: "Flagship 21700 cell" },
      { fromVal: "10,000 mAh", toVal: "0.37311 F", extra: "36,000 C", extra2: "Compact power bank" },
      { fromVal: "13,401 mAh", toVal: "0.50000 F", extra: "48,243 C", extra2: "Exactly 0.5 moles of electrons" },
      { fromVal: "20,000 mAh", toVal: "0.74623 F", extra: "72,000 C", extra2: "High-capacity laptop charger" },
      { fromVal: "26,801 mAh", toVal: "1.00000 F", extra: "96,485 C", extra2: "Exactly 1.0 faraday (1 mole e⁻)" },
      { fromVal: "50,000 mAh", toVal: "1.86557 F", extra: "180,000 C", extra2: "Outdoor portable power station" },
      { fromVal: "53,603 mAh", toVal: "2.00000 F", extra: "192,971 C", extra2: "Exactly 2.0 faradays (2 moles e⁻)" },
      { fromVal: "100,000 mAh", toVal: "3.73114 F", extra: "360,000 C", extra2: "Electric moped battery module" }
    ]
  },
  expertNote: {
    title: "Theoretical Specific Capacity Calculation from the Faraday",
    text: "The theoretical capacity of any battery electrode material is directly derived using the faraday constant: C_theo = (n × F) / (3.6 × M), where n is the number of transferred electrons per reaction formula unit, F is 96,485.33 C/mol, 3.6 converts C to mAh, and M is the molecular weight in g/mol. For LiCoO₂ (M = 97.87 g/mol, n = 1), C_theo = (1 × 26,801.48) / 97.87 ≈ 273.8 mAh/g."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Battery Cathode Material Synthesis",
        text: "Materials scientists synthesize novel battery chemistries (e.g., NMC, LFP, solid-state) and convert experimental discharge capacities from mAh into faradays to determine the exact fraction of lithium intercalated per formula unit."
      },
      {
        title: "Electrolytic Plating and Refining",
        text: "Electrochemists calculate metal mass deposition using Faraday's law: m = (Q × M) / (n × F). Converting power supply logs recorded in ampere-hours or milliampere-hours directly into faradays simplifies molar mass calculations."
      },
      {
        title: "Fuel Cell Reagent Consumption",
        text: "In hydrogen fuel cells, each mole of H₂ gas delivers 2 moles of electrons (2 faradays). Converting device runtime requirements in mAh into faradays allows direct calculation of the volume of hydrogen fuel needed."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Confusing the faraday (unit of charge) with the farad (unit of capacitance): The faraday (F ≈ 96,485 C) measures electric charge, while the farad (also symbolized F, 1 F = 1 C/V) measures capacitance.",
      "Using outdated values of the Faraday constant: Under the 2019 SI redefinition, the elementary charge e and Avogadro constant N_A are exact fixed numbers, fixing 1 faraday at exactly 96,485.3321233... C.",
      "Ignoring valence (electron stoichiometry): In multivalent chemistries (such as zinc-air, n = 2, or aluminum-ion, n = 3), each mole of metal produces multiple faradays of charge per mole consumed.",
      "Assuming 100% Faradaic efficiency: Real-world battery cycling suffers from side reactions (SEI layer formation, gassing) that consume charge without contributing to usable capacity."
    ]
  },
  faqs: [
    {
      question: "How do I convert milliampere-hours to faradays?",
      answer: "To convert milliampere-hours (mAh) to faradays (F), divide the milliampere-hour value by 26,801.4811 (or multiply by 3.6 and divide by 96,485.33). For example, 5,000 mAh ÷ 26,801.4811 ≈ 0.1866 F."
    },
    {
      question: "How many milliampere-hours is 1 faraday?",
      answer: "1 faraday is equal to approximately 26,801.48 milliampere-hours (or 26.8015 ampere-hours)."
    },
    {
      question: "What is a faraday of electric charge?",
      answer: "A faraday is an electrochemical unit of charge equal to the total charge carried by one mole of electrons (approximately 6.022 × 10²³ electrons), which equals 96,485.33 coulombs."
    },
    {
      question: "Is the faraday the same as the farad?",
      answer: "No. The faraday (F) is an archaic unit of electric charge (96,485 C), whereas the farad (F) is the SI unit of electrical capacitance (1 F = 1 C/V). They share the letter F but represent entirely different physical quantities."
    },
    {
      question: "How do I convert faradays back to milliampere-hours?",
      answer: "To convert faradays back to milliampere-hours, multiply the faraday value by 26,801.4811. For instance, 0.5 F × 26,801.4811 ≈ 13,400.74 mAh."
    },
    {
      question: "What is 10,000 mAh in faradays?",
      answer: "10,000 mAh equals approximately 0.3731 faradays (10,000 ÷ 26,801.48 ≈ 0.3731 F)."
    },
    {
      question: "What is Faradaic efficiency?",
      answer: "Faradaic efficiency (coulombic efficiency) measures the ratio of usable electrons recovered during battery discharge compared to the electrons injected during charging."
    },
    {
      question: "How is the Faraday constant calculated in the revised SI?",
      answer: "The Faraday constant is calculated by multiplying the Avogadro constant (N_A = 6.02214076 × 10²³ mol⁻¹) by the elementary charge (e = 1.602176634 × 10⁻¹⁹ C), yielding exactly 96,485.3321233100184 C/mol."
    },
    {
      question: "Why do battery researchers use faradays?",
      answer: "Battery chemical reactions occur at the atomic and molecular level where electrons transfer in integer ratios. Expressing charge in faradays directly equates electrical capacity with chemical moles of reactant."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Coulomb", from: "milliampere-hour", to: "coulomb" },
    { label: "Milliampere-hour to Ampere-hour", from: "milliampere-hour", to: "ampere-hour" },
    { label: "Kilocoulomb to Faraday", from: "kilocoulomb", to: "faraday" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "Bard, Allen J., and Larry R. Faulkner. <em>Electrochemical Methods: Fundamentals and Applications</em>. John Wiley & Sons.",
    "National Institute of Standards and Technology (NIST). <em>Fundamental Physical Constants: Faraday Constant</em>."
  ]
};
