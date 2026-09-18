import { CustomArticleData } from "./types";

export const calorieToErg: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "erg",
  seoTitle: "Calorie to Erg Converter (cal to erg)",
  metaDescription: "Convert small calories to ergs (cal to erg). Learn the exact CGS thermodynamic conversion factor, formulas, step-by-step calculations, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-erg",
  h1: "Calorie to Erg Converter",
  introduction: [
    "The small calorie (cal) and the erg represent two foundational units of energy derived from historical metric measurement traditions. The small calorie originated in classical French chemistry and thermodynamics to measure the thermal heat capacity of liquid water, while the erg was introduced by the British Association for the Advancement of Science as the fundamental energy unit in the centimetre–gram–second (CGS) mechanical system.",
    "Converting calories to ergs connects thermal calorimetry directly to CGS dynamics, astrophysics, and fluid mechanics. Under the internationally standardized thermochemical definition, one small calorie equals exactly 4.184 Joules. Because one Joule contains exactly ten million ergs (10⁷ erg), one small calorie equals exactly 41,840,000 ergs.",
    "This comprehensive guide explains the exact mathematical equivalence between calories and ergs, provides step-by-step calculation examples, features an extensive lookup table, covers practical scientific applications, and addresses frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert small calories (cal) to ergs, multiply the calorie value by 41,840,000 (or 4.184 × 10⁷). For example, 1 small calorie equals exactly 41,840,000 ergs, and 5 small calories equal 209,200,000 ergs.",
    formulaDisplay: "erg = cal × 41,840,000 = cal × 4.184 × 10⁷",
    subtext: "1 small calorie = 41,840,000 ergs exactly; 1 erg ≈ 2.39006 × 10⁻⁸ small calories."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, represents the thermal energy required to elevate the temperature of one gram of air-free water by one degree Celsius under standard atmospheric pressure (101.325 kPa). Standardized internationally at exactly 4.184 Joules under the thermochemical convention, the calorie is commonly employed in chemical reaction thermodynamics, laboratory calorimetry, and biochemistry."
  },
  aboutTargetUnit: {
    title: "Understanding the Erg (erg)",
    text: "The erg (symbol: erg) is the base unit of energy and mechanical work in the centimetre–gram–second (CGS) system of physical units. Derived from the Greek word ergon ('work'), one erg is the amount of work done by a force of one dyne exerted through a distance of one centimetre (1 erg = 1 dyn·cm = 1 g·cm²/s²). One erg equals exactly 10⁻⁷ Joules (0.1 microjoule). The erg remains widely used in astrophysics, geophysics, and plasma physics."
  },
  relationship: "Because both the calorie and the erg have exact integer and decimal definitions linked to the SI Joule (1 cal = 4.184 J and 1 J = 10,000,000 ergs), their conversion factor is mathematically exact: 1 cal = 41,840,000 ergs. In reverse, 1 erg = 1 / 41,840,000 cal ≈ 2.390057 × 10⁻⁸ cal.",
  relationshipTitle: "Exact Calorie to Erg Equivalence Ratios",
  relationshipItems: [
    { label: "1 cal", value: "41,840,000 erg (4.184 × 10⁷ erg)" },
    { label: "10 cal", value: "418,400,000 erg (4.184 × 10⁸ erg)" },
    { label: "100 cal", value: "4,184,000,000 erg (4.184 × 10⁹ erg)" },
    { label: "1,000 cal (1 kcal)", value: "41,840,000,000 erg (4.184 × 10¹⁰ erg)" },
    { label: "10,000 cal", value: "418,400,000,000 erg (4.184 × 10¹¹ erg)" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 41,840,000 (or 4.184 × 10⁷) to obtain the exact value in ergs.",
    math: "erg = cal * 41840000",
    subtext: "Scientific notation: erg = cal × 4.184 × 10⁷."
  },
  formulaTitle: "Calorie to Erg Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To quickly approximate ergs from calories, multiply the calorie number by 4.2 and append seven zeros (or multiply by 10⁷). For example, 3 cal × 4.2 × 10⁷ gives approximately 1.26 × 10⁸ ergs (exact: 1.2552 × 10⁸ ergs)."
  },
  expertNote: {
    title: "Why CGS Units Persist in Astrophysics",
    text: "Although modern engineering uses the SI system (Joules), astrophysicists routinely publish stellar luminosities, supernova energetics, and cosmic ray fluxes in ergs per second (erg/s) or ergs. When converting stellar thermal emissions calculated from gas enthalpies (in calories), the exact factor of 4.184 × 10⁷ bridges metric chemistry with CGS astrophysics."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Micro-Calorimetric Dissolution Heat",
        subtitle: "Convert 25 small calories of chemical solution heat into ergs.",
        steps: [
          "State the small calorie value: 25 cal.",
          "Apply the exact multiplier: 25 × 41,840,000.",
          "Calculate: 25 × 41,840,000 = 1,046,000,000 ergs.",
          "Conclusion: 25 cal equals exactly 1.046 × 10⁹ ergs (1.046 gigarergs)."
        ]
      },
      {
        title: "Example 2: Biochemical ATP Hydrolysis Equivalent",
        subtitle: "Convert 7.3 calories of experimental biochemical energy to ergs.",
        steps: [
          "State the input: 7.3 cal.",
          "Multiply: 7.3 × 4.184 × 10⁷ = 3.05432 × 10⁸ ergs.",
          "Conclusion: 7.3 calories equals 305,432,000 ergs."
        ]
      },
      {
        title: "Example 3: Dietary Calorie (1 kcal) in CGS Units",
        subtitle: "Convert 1,000 small calories (1 dietary kcal) into ergs.",
        steps: [
          "Identify calorie count: 1,000 cal.",
          "Multiply by 41,840,000: 1,000 × 41,840,000 = 41,840,000,000 ergs.",
          "Conclusion: 1 food Calorie equals exactly 4.184 × 10¹⁰ ergs (41.84 gigaergs)."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Erg Conversion Table",
    headers: ["Calories (cal)", "Ergs (erg)", "Joules (J)", "Physical Context / Laboratory Benchmark"],
    rows: [
      { fromVal: "0.1 cal", toVal: "4,184,000 erg", extra: "0.4184 J", extra2: "Micro-droplet surface energy" },
      { fromVal: "0.5 cal", toVal: "20,920,000 erg", extra: "2.092 J", extra2: "Small crystal dissolution heat" },
      { fromVal: "1 cal", toVal: "41,840,000 erg", extra: "4.184 J", extra2: "Base thermochemical calorie standard" },
      { fromVal: "2 cal", toVal: "83,680,000 erg", extra: "8.368 J", extra2: "Heat to warm 2g water by 1°C" },
      { fromVal: "5 cal", toVal: "209,200,000 erg", extra: "20.92 J", extra2: "Combustion of ~1 mg hydrocarbon" },
      { fromVal: "10 cal", toVal: "418,400,000 erg", extra: "41.84 J", extra2: "Small exothermic precipitation" },
      { fromVal: "25 cal", toVal: "1,046,000,000 erg", extra: "104.6 J", extra2: "1.046 gigarergs" },
      { fromVal: "50 cal", toVal: "2,092,000,000 erg", extra: "209.2 J", extra2: "Work done lifting 21.3 kg by 1 meter" },
      { fromVal: "100 cal", toVal: "4,184,000,000 erg", extra: "418.4 J", extra2: "Heat to warm 100 ml water by 1°C" },
      { fromVal: "250 cal", toVal: "10,460,000,000 erg", extra: "1,046 J", extra2: "Approx. 1 kilojoule in CGS units" },
      { fromVal: "500 cal", toVal: "20,920,000,000 erg", extra: "2,092 J", extra2: "Combustion of 0.1g organic test specimen" },
      { fromVal: "1,000 cal", toVal: "41,840,000,000 erg", extra: "4,184 J", extra2: "1 food Calorie (1 kcal)" },
      { fromVal: "10,000 cal", toVal: "418,400,000,000 erg", extra: "41,840 J", extra2: "418.4 gigaergs" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to Erg Conversion",
    items: [
      {
        title: "Astrophysics and Stellar Thermodynamics",
        text: "Theoreticians modeling stellar core nucleosynthesis convert reaction enthalpies and gas combustion rates calculated in calories per gram into CGS ergs per second to match radiative transport models."
      },
      {
        title: "Shock Wave and Explosion Dynamics",
        text: "Geophysicists and planetary scientists measuring blast wave pressure fronts translate explosive chemical energy (often calibrated in calories per gram of TNT equivalent) into CGS ergs to calculate crater excavation volumes."
      },
      {
        title: "Surface Chemistry and Interfacial Mechanics",
        text: "Physical chemists studying surface tension, wetting dynamics, and monolayer adsorption translate thermal hydration heats from calories into ergs per square centimetre (erg/cm²)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Forgetting the factor of 10⁷: Writing 4.184 ergs instead of 41,840,000 ergs creates a seven-order-of-magnitude error. Remember that 1 Joule is 10,000,000 ergs, not 1 erg.",
      "Confusing small calories with food Calories: 1 food Calorie (1 kcal) is 4.184 × 10¹⁰ ergs, which is 1,000 times larger than 1 small calorie.",
      "Conflating dyne and erg: The dyne is a unit of force (g·cm/s²), while the erg is a unit of energy (dyn·cm = g·cm²/s²)."
    ]
  },
  faqs: [
    {
      question: "How many ergs are in one small calorie?",
      answer: "There are exactly 41,840,000 ergs (4.184 × 10⁷ ergs) in one small thermochemical calorie."
    },
    {
      question: "How many calories are in one erg?",
      answer: "One erg is equal to approximately 2.390057 × 10⁻⁸ small calories."
    },
    {
      question: "What is the formula to convert calories to ergs?",
      answer: "Ergs = calories × 41,840,000 (or ergs = calories × 4.184 × 10⁷)."
    },
    {
      question: "How many ergs are in 1 food Calorie (kcal)?",
      answer: "One food Calorie contains 1,000 small calories, which equals exactly 41,840,000,000 ergs (4.184 × 10¹⁰ ergs)."
    },
    {
      question: "Is the conversion between calories and ergs exact?",
      answer: "Yes. Under the thermochemical definition, 1 calorie is defined as exactly 4.184 Joules, and 1 Joule is defined as exactly 10,000,000 ergs. Therefore, 1 cal = 41,840,000 ergs is mathematically exact."
    },
    {
      question: "Why are ergs still used if the Joule is the SI unit?",
      answer: "Ergs remain popular in astrophysics, solar astronomy, and plasma physics because many foundational theoretical equations and planetary constants were formulated in CGS units."
    },
    {
      question: "How do you convert 100 calories to ergs?",
      answer: "Multiply 100 by 41,840,000 to get exactly 4,184,000,000 ergs (4.184 × 10⁹ ergs)."
    },
    {
      question: "What does 'erg' stand for?",
      answer: "Erg is not an abbreviation; it is derived from the Greek noun 'ergon', meaning 'work'."
    }
  ],
  relatedList: [
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Calorie to Electron Volt", from: "calorie", to: "electron-volt" },
    { label: "Joule to Erg", from: "joule", to: "erg" },
    { label: "Kilojoule to Erg", from: "kilojoule", to: "erg" },
    { label: "Calorie to Kilocalorie", from: "calorie", to: "kilocalorie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
