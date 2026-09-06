import { CustomArticleData } from "./types";

export const kilocoulombToCoulomb: CustomArticleData = {
  fromUnitId: "kilocoulomb",
  toUnitId: "coulomb",
  seoTitle: "Kilocoulomb to Coulomb Converter - kC to C",
  metaDescription: "Convert kilocoulombs to coulombs (kC to C) with exact SI formulas. Learn the 1,000 multiplier rule, lightning discharge physics, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/kilocoulomb-to-coulomb",
  h1: "Kilocoulomb to Coulomb Converter",
  introduction: [
    "The kilocoulomb (kC) and the coulomb (C) are direct decimal multiples within the International System of Units (SI) for measuring electric charge. While laboratory physics experiments and electronics circuits manage charge in fractions of a coulomb, heavy power systems, industrial electrolysis plants, and atmospheric electrical events involve thousands of coulombs.",
    "Converting from kilocoulombs to coulombs represents a simple three-decade metric scaling calculation. This technical engineering guide and converter provides the exact mathematical formulas, physical definitions under the 2019 SI redefinition, and practical worked examples."
  ],
  quickAnswer: {
    text: "To convert kilocoulombs to coulombs, multiply the kilocoulomb value by 1,000 (or shift the decimal point three places to the right). For example, 5 kilocoulombs equals exactly 5,000 coulombs.",
    formulaDisplay: "Charge (C) = Charge (kC) × 1,000",
    subtext: "1 kilocoulomb is equal to exactly 1,000 coulombs (10³ C)."
  },
  aboutSourceUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The kilocoulomb (symbol: kC) is a decimal multiple of the SI base derived unit of electric charge, equal to one thousand coulombs (10³ C). It represents the charge transferred by a continuous current of 1,000 amperes flowing for one second (1,000 A·s), or 1 ampere flowing for 1,000 seconds. It is used in electrochemistry, battery pack capacity modeling, and heavy industrial DC electrical engineering."
  },
  aboutTargetUnit: {
    title: "About the Coulomb (C)",
    text: "The coulomb (symbol: C) is the coherent SI derived unit of electric charge, named in honour of French physicist Charles-Augustin de Coulomb. Under the 2019 redefinition of the SI, the coulomb is defined by fixing the elementary charge e to exactly 1.602176634 × 10⁻¹⁹ C. Consequently, one coulomb represents the aggregate electric charge of approximately 6.241509 × 10¹⁸ electrons or protons, equal to one ampere-second (1 C = 1 A·s)."
  },
  relationship: "The relationship between kilocoulombs and coulombs is defined by the standard SI metric prefix 'kilo-', which denotes an exact factor of one thousand (10³). Therefore, one kilocoulomb contains exactly 1,000 coulombs.",
  relationshipTitle: "Metric Prefix Ratio and Equivalence",
  relationshipItems: [
    { label: "Kilocoulombs (kC) to Coulombs (C)", value: "Multiply by 1,000" },
    { label: "Coulombs (C) to Kilocoulombs (kC)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Decimal Shift", value: "3 places to the right" },
    { label: "Ampere-Second Equivalence", value: "1 kC = 1,000 A·s" }
  ],
  formula: {
    text: "To convert any electric charge value from kilocoulombs to coulombs, multiply the kilocoulomb value by 1,000.",
    math: "Charge (C) = Charge (kC) × 1,000",
    subtext: "To convert coulombs back to kilocoulombs: Charge (kC) = Charge (C) ÷ 1,000"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "The Three-Zero Addition Rule",
    text: "Because the conversion factor is an exact power of ten (10³), simply add three zeros to whole numbers or move the decimal point three places to the right: 2.5 kC becomes 2,500 C; 18 kC becomes 18,000 C; and 0.36 kC becomes 360 C."
  },
  examples: {
    title: "Step-by-Step Worked Calculation Examples",
    items: [
      {
        title: "Example 1: Industrial Electroplating Charge Integration",
        subtitle: "An industrial chrome-plating bath operates under an integrated charge of 8.4 kilocoulombs. Express this charge in coulombs for electrochemical yield calculations.",
        steps: [
          "Identify the charge: Q = 8.4 kC.",
          "Apply conversion formula: C = kC × 1,000.",
          "Calculate: 8.4 × 1,000 = 8,400.",
          "Conclusion: 8.4 kC is equal to 8,400 coulombs."
        ]
      },
      {
        title: "Example 2: Supercapacitor Bank Total Charge",
        subtitle: "A high-voltage backup capacitor bank stores 15.0 kC of charge at rated voltage. Calculate the stored charge in coulombs.",
        steps: [
          "State value: Q = 15.0 kC.",
          "Multiply by 1,000: 15.0 × 1,000 = 15,000.",
          "Conclusion: The bank stores 15,000 C."
        ]
      },
      {
        title: "Example 3: Severe Lightning Stroke Charge Estimation",
        subtitle: "A positive cloud-to-ground superbolt transfers approximately 0.35 kC of charge. Express this quantity in coulombs.",
        steps: [
          "Given value: Q = 0.35 kC.",
          "Calculate: 0.35 × 1,000 = 350.",
          "Conclusion: The lightning flash transfers 350 coulombs."
        ]
      }
    ]
  },
  table: {
    title: "Kilocoulomb to Coulomb Quick Reference Table",
    headers: ["Kilocoulombs (kC)", "Coulombs (C)", "Ampere-hours (Ah)", "Physical / Engineering Context"],
    rows: [
      { fromVal: "0.1 kC", toVal: "100 C", extra: "0.0278 Ah", extra2: "Typical negative lightning return stroke" },
      { fromVal: "0.36 kC", toVal: "360 C", extra: "0.10 Ah", extra2: "Small wearable sensor battery" },
      { fromVal: "1.0 kC", toVal: "1,000 C", extra: "0.2778 Ah", extra2: "Base 1,000 A·s benchmark" },
      { fromVal: "3.6 kC", toVal: "3,600 C", extra: "1.0 Ah", extra2: "Exactly 1.0 ampere-hour (1,000 mAh)" },
      { fromVal: "7.2 kC", toVal: "7,200 C", extra: "2.0 Ah", extra2: "18650 cylindrical battery cell" },
      { fromVal: "18.0 kC", toVal: "18,000 C", extra: "5.0 Ah", extra2: "Flagship 5,000 mAh smartphone battery" },
      { fromVal: "36.0 kC", toVal: "36,000 C", extra: "10.0 Ah", extra2: "Portable USB power bank" },
      { fromVal: "72.0 kC", toVal: "72,000 C", extra: "20.0 Ah", extra2: "Electric scooter battery pack" },
      { fromVal: "100.0 kC", toVal: "100,000 C", extra: "27.78 Ah", extra2: "Industrial DC motor starting charge" },
      { fromVal: "360.0 kC", toVal: "360,000 C", extra: "100.0 Ah", extra2: "12V automotive lead-acid battery" }
    ]
  },
  expertNote: {
    title: "Electrochemical Charge Transport at Scale",
    text: "In industrial chlor-alkali electrolysis, plants consume thousands of amperes continuously to produce chlorine gas and sodium hydroxide. At 50,000 A, a cell line transfers 50 kC (50,000 C) every single second. Process instrumentation records both cumulative coulombs and kilocoulombs to track Faradaic current efficiency against theoretical chemical yields."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Atmospheric Lightning Protection Engineering",
        text: "Lightning protection standards (such as IEC 62305) classify lightning flashes by peak current and total transferred charge. Converting lightning strike data from kilocoulombs to coulombs allows engineers to calculate thermal melting energy on metal lightning rods."
      },
      {
        title: "Industrial Electrolysis Monitoring",
        text: "In electrolytic refining of copper and zinc, rectifiers deliver high direct currents over days. Converting integrated charge from kilocoulombs to coulombs enables precise calculation of deposited metal mass using Faraday's laws."
      },
      {
        title: "Pulsed DC Power Systems",
        text: "High-energy physics facilities and electromagnetic launchers utilize massive capacitor banks. Converting charge specs between kC and C helps verify switch ratings and energy discharge profiles (E = ½ Q·V)."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Converting from a larger unit (kC) to a smaller base unit (C) must result in a 1,000-fold larger numeric value.",
      "Confusing charge with current: Coulombs and kilocoulombs quantify the total quantity of charge (electrons), whereas amperes quantify the rate of charge flow per second.",
      "Overlooking energy dependency on voltage: A charge of 10 kC stored at 10 V represents 100 kJ of energy, while 10 kC stored at 1,000 V represents 10 MJ.",
      "Mixing up kC (kilocoulomb) with kc (unstandardized / lowercase): SI rules require lowercase 'k' for kilo and uppercase 'C' for coulomb."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilocoulombs to coulombs?",
      answer: "To convert kilocoulombs (kC) to coulombs (C), multiply the kilocoulomb value by 1,000. For example, 3.6 kC × 1,000 = 3,600 C."
    },
    {
      question: "How many coulombs are in 1 kilocoulomb?",
      answer: "There are exactly 1,000 coulombs in 1 kilocoulomb (1 kC = 1,000 C)."
    },
    {
      question: "What is 3.6 kC in coulombs?",
      answer: "3.6 kC equals exactly 3,600 coulombs, which is the exact charge of 1.0 ampere-hour (1,000 mAh)."
    },
    {
      question: "How do I convert coulombs back to kilocoulombs?",
      answer: "To convert coulombs back to kilocoulombs, divide the coulomb figure by 1,000. For instance, 18,000 C ÷ 1,000 = 18 kC."
    },
    {
      question: "How many electrons are in 1 kilocoulomb?",
      answer: "Since one coulomb contains approximately 6.2415 × 10¹⁸ electrons, one kilocoulomb contains approximately 6.2415 × 10²¹ electrons."
    },
    {
      question: "What is 10 kC in coulombs?",
      answer: "10 kC equals 10,000 coulombs."
    },
    {
      question: "How does a kilocoulomb relate to ampere-hours?",
      answer: "One ampere-hour (Ah) equals 3,600 coulombs, which is 3.6 kilocoulombs. Therefore, 1 kC equals approximately 0.2778 Ah."
    },
    {
      question: "Why do scientists use kilocoulombs instead of coulombs?",
      answer: "When dealing with large electrochemical processes, battery packs, or lightning discharges where charges exceed thousands of coulombs, the kilocoulomb provides a more compact and readable number."
    },
    {
      question: "Is kilocoulomb an official SI metric unit?",
      answer: "Yes, the kilocoulomb is an official SI multiple consisting of the derived base unit coulomb (C) with the decimal prefix kilo- (10³)."
    }
  ],
  relatedList: [
    { label: "Coulomb to Kilocoulomb", from: "coulomb", to: "kilocoulomb" },
    { label: "Kilocoulomb to Ampere-hour", from: "kilocoulomb", to: "ampere-hour" },
    { label: "Kilocoulomb to Milliampere-hour", from: "kilocoulomb", to: "milliampere-hour" },
    { label: "Kilocoulomb to Megacoulomb", from: "kilocoulomb", to: "megacoulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>.",
    "Rakov, Vladimir A., and Martin A. Uman. <em>Lightning: Physics and Effects</em>. Cambridge University Press."
  ]
};
