import { CustomArticleData } from "./types";

export const kilocoulombToFaraday: CustomArticleData = {
  fromUnitId: "kilocoulomb",
  toUnitId: "faraday",
  seoTitle: "Kilocoulomb to Faraday Converter - kC to F",
  metaDescription: "Convert kilocoulombs to faradays (kC to F) with precision. Learn the 96.485 division rule, Faraday's electrolysis laws, and worked engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/kilocoulomb-to-faraday",
  h1: "Kilocoulomb to Faraday Converter",
  introduction: [
    "Industrial electrochemists, chemical process engineers, and battery researchers routinely convert electric charge between kilocoulombs (kC)—thousands of coulombs—and faradays (F), the unit representing the charge carried by one mole of electrons.",
    "Because electrochemical reactions transfer electrons in stoichiometric, mole-based ratios, converting kilocoulombs into faradays allows direct calculation of product yields in hydrogen water electrolysis, chlor-alkali synthesis, and metal electro-refining. This technical guide outlines the mathematical relationship, physical constants under the 2019 SI redefinition, and practical calculation examples."
  ],
  quickAnswer: {
    text: "To convert kilocoulombs to faradays, divide the kilocoulomb value by 96.485332 (or multiply by approximately 0.0103643). For example, 96.485 kilocoulombs equals exactly 1.0 faraday of electric charge.",
    formulaDisplay: "Charge (F) = Charge (kC) ÷ 96.485332",
    subtext: "1 faraday equals approximately 96.485 kilocoulombs (96,485.33 C) or 26.8015 ampere-hours."
  },
  aboutSourceUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The kilocoulomb (symbol: kC) is a decimal multiple of the SI base derived unit of electric charge, equal to one thousand coulombs (10³ C). It represents the charge transferred by a continuous current of 1,000 amperes flowing for one second (1,000 A·s), or 1 ampere flowing for 1,000 seconds. It is standardly used in electrochemistry, battery pack capacity modeling, and industrial DC power equipment."
  },
  aboutTargetUnit: {
    title: "About the Faraday (F)",
    text: "The faraday (symbol: F, named in honour of English scientist Michael Faraday) is an electrochemical unit of charge equal to the magnitude of electric charge carried by exactly one mole of electrons. Under the 2019 SI redefinition of fundamental constants, 1 faraday = N_A × e = (6.02214076 × 10²³ mol⁻¹) × (1.602176634 × 10⁻¹⁹ C) ≈ 96,485.33212 coulombs or 96.485332 kilocoulombs."
  },
  relationship: "The relationship between kilocoulombs and faradays is established by physical chemistry: 1 faraday equals approximately 96,485.33212 coulombs. Dividing by 1,000 coulombs per kilocoulomb yields exactly 96.48533212 kC per faraday. Dividing any electric charge value in kilocoulombs by 96.485332 gives its exact equivalent in faradays.",
  relationshipTitle: "Electrochemical Constants and Conversion Factor",
  relationshipItems: [
    { label: "Kilocoulombs (kC) to Faradays (F)", value: "Divide by 96.485332 (or multiply by ~0.0103643)" },
    { label: "Faradays (F) to Kilocoulombs (kC)", value: "Multiply by 96.485332" },
    { label: "1.0 Faraday Benchmark", value: "1 F ≈ 96.485 kC = 96,485.33 C = 26.8015 Ah" },
    { label: "Inverse Equivalence", value: "1 kC ≈ 0.0103643 F" }
  ],
  formula: {
    text: "To convert any electric charge value from kilocoulombs into faradays, divide the number of kilocoulombs by 96.485332.",
    math: "Charge (F) = \\frac{\\text{Charge (kC)}}{96.485332} = \\text{Charge (kC)} \\times 0.0103643",
    subtext: "To convert faradays back to kilocoulombs: Charge (kC) = Charge (F) × 96.485332"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "The ~96.5 Rule of Thumb",
    text: "For quick calculations in the field or laboratory without a scientific calculator, divide the kilocoulomb figure by 96.5 (or round to 100 for rough estimation and add ~3.5%): 193 kC ÷ 96.5 ≈ 2.0 faradays; 482.5 kC ÷ 96.5 ≈ 5.0 faradays."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Water Electrolysis Hydrogen Production",
        subtitle: "An industrial alkaline water electrolyzer transfers 385.94 kilocoulombs of electric charge. Calculate the number of faradays delivered to determine the moles of hydrogen gas produced.",
        steps: [
          "State the value: Q = 385.94 kC.",
          "Apply conversion formula: F = kC ÷ 96.485332.",
          "Calculate: 385.94 ÷ 96.485332 ≈ 4.00.",
          "Conclusion: 385.94 kC equals exactly 4.0 faradays (producing 2 moles of H₂ gas, since 2 F are required per mole of H₂)."
        ]
      },
      {
        title: "Example 2: Copper Refining Mass Deposition",
        subtitle: "A copper electrowinning cell consumes 289.46 kilocoulombs. How many faradays does this represent?",
        steps: [
          "State value: Q = 289.46 kC.",
          "Divide by 96.485332: 289.46 ÷ 96.485332 ≈ 3.00.",
          "Conclusion: 289.46 kC equals 3.0 faradays (corresponding to 1.5 moles of Cu²⁺ reduced to copper metal)."
        ]
      },
      {
        title: "Example 3: EV Battery Module Faradaic Evaluation",
        subtitle: "Convert 50 kilocoulombs into faradays.",
        steps: [
          "Given: Q = 50 kC.",
          "Calculate: 50 ÷ 96.485332 ≈ 0.5182.",
          "Conclusion: 50 kC equals approximately 0.5182 faradays."
        ]
      }
    ]
  },
  table: {
    title: "Kilocoulomb to Faraday Quick Reference Table",
    headers: ["Kilocoulombs (kC)", "Faradays (F)", "Coulomb Equivalent", "Electrochemical Stoichiometry"],
    rows: [
      { fromVal: "9.65 kC", toVal: "0.1000 F", extra: "9,649 C", extra2: "0.10 moles of electrons" },
      { fromVal: "24.12 kC", toVal: "0.2500 F", extra: "24,121 C", extra2: "0.25 moles of electrons" },
      { fromVal: "48.24 kC", toVal: "0.5000 F", extra: "48,243 C", extra2: "0.50 moles of electrons" },
      { fromVal: "96.49 kC", toVal: "1.0000 F", extra: "96,485 C", extra2: "1.00 mole of electrons (N_A × e)" },
      { fromVal: "192.97 kC", toVal: "2.0000 F", extra: "192,971 C", extra2: "Reduces 1 mole of H₂ or Cu²⁺" },
      { fromVal: "289.46 kC", toVal: "3.0000 F", extra: "289,456 C", extra2: "Reduces 1 mole of Al³⁺" },
      { fromVal: "385.94 kC", toVal: "4.0000 F", extra: "385,941 C", extra2: "Reduces 1 mole of O₂" },
      { fromVal: "482.43 kC", toVal: "5.0000 F", extra: "482,427 C", extra2: "5.0 moles of electrons" },
      { fromVal: "964.85 kC", toVal: "10.0000 F", extra: "964,853 C", extra2: "10.0 moles of electrons" },
      { fromVal: "1,929.71 kC", toVal: "20.0000 F", extra: "1,929,707 C", extra2: "20.0 moles of electrons" }
    ]
  },
  expertNote: {
    title: "Electrochemical Stoichiometry and Faraday's Law",
    text: "Faraday's first law of electrolysis states that the mass of substance altered at an electrode is directly proportional to the quantity of electricity transferred: m = (Q × M) / (z × F), where Q is charge in coulombs, M is molar mass, z is valence number, and F is the Faraday constant (96,485.33 C/mol). Converting electric charge from kilocoulombs directly to faradays simplifies the equation to: m = (Charge in Faradays × M) / z."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Industrial Green Hydrogen Generation",
        text: "Commercial water electrolyzer plants measure current integration in kilocoulombs. Converting total charge into faradays allows chemical process operators to immediately determine the exact standard cubic meters of hydrogen gas generated."
      },
      {
        title: "Chlor-Alkali Electrochemical Plants",
        text: "Facilities manufacturing chlorine and caustic soda track rectifier charge throughput in kilocoulombs. Converting to faradays calculates theoretical product yield per ton of brine feedstock."
      },
      {
        title: "Battery Anode Lithium Intercalation Modeling",
        text: "Electrochemists studying lithium-ion graphite anodes convert cycling test data from kilocoulombs into faradays to determine the exact degree of lithiation (x in Li_x C_6) per gram of active material."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Confusing the faraday (unit of charge) with the farad (unit of capacitance): Both use the symbol F, but the faraday (F ≈ 96.485 kC) measures charge, whereas the farad (F = 1 C/V) measures electrical capacitance.",
      "Dividing by 96,485 instead of 96.485: Remember that the value is in kilocoulombs, so the divisor is 96.485332, not 96,485 (which applies to coulombs).",
      "Ignoring side reactions (Faradaic losses): In real-world electrolyzers, parasitic side reactions (such as oxygen crossover) reduce the effective faradays contributing to the desired chemical product.",
      "Overlooking stoichiometric electron transfer numbers: Converting kC to faradays gives the moles of electrons transferred, not the moles of molecule produced. For diatomic gases like H₂ (z = 2) or O₂ (z = 4), divide faradays by z."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilocoulombs to faradays?",
      answer: "To convert kilocoulombs (kC) to faradays (F), divide the kilocoulomb value by 96.485332. For example, 192.97 kC ÷ 96.485332 ≈ 2.0 F."
    },
    {
      question: "How many kilocoulombs is 1 faraday?",
      answer: "1 faraday is equal to approximately 96.485 kilocoulombs (specifically 96.48533212 kC, or 96,485.33 coulombs)."
    },
    {
      question: "What is a faraday in terms of electrons?",
      answer: "A faraday is the total electric charge carried by one mole of electrons (Avogadro's number: approximately 6.02214 × 10²³ electrons)."
    },
    {
      question: "How do I convert faradays back to kilocoulombs?",
      answer: "To convert faradays back to kilocoulombs, multiply the faraday value by 96.485332. For instance, 5 F × 96.485332 ≈ 482.43 kC."
    },
    {
      question: "What is the difference between a faraday and a coulomb?",
      answer: "One coulomb is the SI derived unit of charge (1 A·s). One faraday equals 96,485.33 coulombs, representing the molar charge of electrons."
    },
    {
      question: "What is 48.24 kC in faradays?",
      answer: "48.24 kC equals approximately 0.5 faradays (one-half of a mole of electrons)."
    },
    {
      question: "How many ampere-hours is 1 faraday?",
      answer: "1 faraday equals approximately 26.8015 ampere-hours (96,485.33 ÷ 3,600 ≈ 26.8015 Ah)."
    },
    {
      question: "Is the Faraday constant exact in the SI?",
      answer: "Yes, under the 2019 revision of the SI, both the elementary charge e and Avogadro constant N_A have exact fixed numerical definitions, making the Faraday constant F = N_A × e exact."
    },
    {
      question: "Why do electrochemists use faradays instead of kilocoulombs?",
      answer: "Faradays directly correspond to chemical stoichiometry (moles of electrons), eliminating repetitive conversions between coulombs and Avogadro's number during chemical yield calculations."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Faraday", from: "milliampere-hour", to: "faraday" },
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" },
    { label: "Kilocoulomb to Ampere-hour", from: "kilocoulomb", to: "ampere-hour" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "Bard, Allen J., and Larry R. Faulkner. <em>Electrochemical Methods: Fundamentals and Applications</em>. John Wiley & Sons.",
    "National Institute of Standards and Technology (NIST). <em>Fundamental Physical Constants: Faraday Constant</em>."
  ]
};
