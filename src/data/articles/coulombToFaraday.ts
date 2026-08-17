import { CustomArticleData } from "./types";

export const coulombToFaraday: CustomArticleData = {
  fromUnitId: "coulomb",
  toUnitId: "faraday",
  seoTitle: "Coulomb to Faraday Converter (C to F)",
  metaDescription: "Convert Coulombs to Faradays (C to F) with exact electrochemical charge formulas, Faraday's laws of electrolysis calculations, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/coulomb-to-faraday",
  h1: "Coulomb to Faraday Converter",
  introduction: [
    "Electrochemistry establishes a direct quantitative connection between the passage of electric charge and the mass of chemical substances reacted or deposited at electrodes.",
    "The Coulomb (C) is the coherent SI unit of electric charge (1 C = 1 A·s), whereas the Faraday (symbol: F, or chemical Faraday) is an electrochemical unit of charge representing the magnitude of electric charge carried by one mole of electrons (approximately 96,485.33 Coulombs per mole).",
    "This converter provides exact electrochemical conversions between Coulombs and Faradays, step-by-step electrolysis stoichiometric calculations, reference lookup tables, and fundamental constants according to current CODATA standards."
  ],
  quickAnswer: {
    text: "To convert Coulombs to Faradays, divide the electric charge in Coulombs by 96,485.332 (the Faraday constant F = e × N_A). For example, 96,485.33 Coulombs equals exactly 1.0 Faraday, and 192,970.66 C equals 2.0 Faradays.",
    formulaDisplay: "Faradays = C ÷ 96,485.33212",
    subtext: "1 Coulomb is equal to approximately 1.036427 × 10⁻⁵ Faraday (0.000010364 F)."
  },
  aboutSourceUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C) is the SI base derived unit of electric charge. Under the 2019 SI redefinition, the elementary charge e is fixed at exactly 1.602176634 × 10⁻¹⁹ C. One coulomb corresponds to the charge transported by a constant direct current of one ampere flowing for exactly one second (1 C = 1 A·s), representing approximately 6.241509 × 10¹⁸ individual electrons."
  },
  aboutTargetUnit: {
    title: "Understanding the Faraday Unit (F)",
    text: "The Faraday (symbol: F, named in honor of British scientist Michael Faraday) is a specialized unit of electric charge used in electrochemistry. By definition, one Faraday is the total electric charge possessed by one mole (6.02214076 × 10²³ entities) of single-valence electrons: 1 Faraday = e × N_A = (1.602176634 × 10⁻¹⁹ C) × (6.02214076 × 10²³ mol⁻¹) ≈ 96,485.33212 C. (Note: Do not confuse the Faraday unit of charge with the Farad, which is the SI unit of electrical capacitance)."
  },
  relationship: "The relationship between Coulombs and Faradays is dictated by the Faraday constant F = 96,485.33212 C/mol. Passing 1 Faraday of electric charge through an electrolytic solution deposits or liberates exactly one equivalent weight (one mole of monovalent ions, half a mole of divalent ions, etc.) of a chemical element.",
  relationshipTitle: "Coulomb to Faraday Common Benchmark Values",
  relationshipItems: [
    { label: "9,648.53 C", value: "0.1 Faraday (0.1 mole of electrons transferred)" },
    { label: "48,242.67 C", value: "0.5 Faraday (Deposits 0.25 mol of Cu²⁺ metal)" },
    { label: "96,485.33 C", value: "1.0 Faraday (Deposits exactly 1.0 mol of Ag⁺ silver)" },
    { label: "192,970.66 C", value: "2.0 Faradays (Liberates 1.0 mol of H₂ gas from water)" },
    { label: "289,456.00 C", value: "3.0 Faradays (Deposits 1.0 mol of Al³⁺ aluminum)" }
  ],
  formula: {
    text: "Divide the electric charge in Coulombs by 96,485.33212 to obtain the equivalent electric charge in Faradays.",
    math: "Q_{(F)} = \\frac{Q_{(C)}}{96485.33212} = Q_{(C)} \\times 1.036427 \\times 10^{-5}",
    subtext: "To convert Faradays back to Coulombs, multiply the Faraday value by 96,485.33212."
  },
  formulaTitle: "Coulomb to Faraday Mathematical Formula",
  practicalTip: {
    title: "Electrochemical Stoichiometry Rule",
    text: "In electrolytic reactions, the number of Faradays of charge passed directly equals the moles of electrons exchanged: n_e = Q (in Faradays). For an ion with valence z, the moles of product formed equals Q (in Faradays) ÷ z."
  },
  expertNote: {
    title: "Faraday (Charge) vs. Farad (Capacitance)",
    text: "Take care not to confuse the Faraday (unit of electric charge in chemistry, 1 F ≈ 96,485 C) with the Farad (SI unit of capacitance in physics, 1 F = 1 C/V). The Faraday unit represents charge, whereas the Farad represents charge storage ability per volt."
  },
  examples: {
    title: "Step-by-Step C to F Worked Calculations",
    items: [
      {
        title: "Example 1: Silver Electroplating Cell",
        subtitle: "A silver electroplating bath passes 19,297 Coulombs of charge. Calculate the charge transferred in Faradays.",
        steps: [
          "Identify the charge in Coulombs: Q = 19,297 C.",
          "Apply conversion formula: Q_(F) = 19,297 ÷ 96,485.332.",
          "Perform calculation: 19,297 ÷ 96,485.332 ≈ 0.20.",
          "Result: 19,297 C equals exactly 0.20 Faraday (depositing 0.2 mol of Ag, or 21.57 grams)."
        ]
      },
      {
        title: "Example 2: Water Electrolysis for Hydrogen Production",
        subtitle: "A commercial water electrolyzer passes 482,427 Coulombs of electric charge. Convert this to Faradays.",
        steps: [
          "Identify the charge in Coulombs: Q = 482,427 C.",
          "Apply conversion formula: Q_(F) = 482,427 ÷ 96,485.332.",
          "Perform calculation: 482,427 ÷ 96,485.332 = 5.0.",
          "Result: 482,427 C equals exactly 5.0 Faradays (producing 2.5 mol of H₂ gas)."
        ]
      },
      {
        title: "Example 3: Copper Electro-Refining Tank",
        subtitle: "An industrial copper refining cell operates with 964,853 Coulombs of charge. Convert this to Faradays.",
        steps: [
          "Identify the charge in Coulombs: Q = 964,853 C.",
          "Apply conversion formula: Q_(F) = 964,853 ÷ 96,485.332.",
          "Perform calculation: 964,853 ÷ 96,485.332 = 10.0.",
          "Result: 964,853 C equals 10.0 Faradays (yielding 5.0 mol of pure Cu)."
        ]
      }
    ]
  },
  table: {
    title: "Coulomb to Faraday Conversion Table",
    headers: ["Charge (Coulombs, C)", "Charge (Faradays, F)", "Chemical Yield (Monovalent Ion: z = 1)"],
    rows: [
      { fromVal: "9,648.53 C", toVal: "0.10 F", extra: "0.10 mol deposited (e.g., 10.79 g Silver)" },
      { fromVal: "24,121.33 C", toVal: "0.25 F", extra: "0.25 mol deposited (e.g., 5.75 g Sodium)" },
      { fromVal: "48,242.67 C", toVal: "0.50 F", extra: "0.50 mol deposited (e.g., 19.55 g Potassium)" },
      { fromVal: "96,485.33 C", toVal: "1.00 F", extra: "1.00 mol deposited (e.g., 107.87 g Silver)" },
      { fromVal: "192,970.66 C", toVal: "2.00 F", extra: "2.00 mol monovalent (or 1.00 mol divalent Cu²⁺)" },
      { fromVal: "289,456.00 C", toVal: "3.00 F", extra: "3.00 mol monovalent (or 1.00 mol trivalent Al³⁺)" },
      { fromVal: "482,426.66 C", toVal: "5.00 F", extra: "5.00 mol monovalent electrons transferred" },
      { fromVal: "964,853.32 C", toVal: "10.00 F", extra: "10.00 mol of electrons transferred" },
      { fromVal: "1,929,706.64 C", toVal: "20.00 F", extra: "20.00 mol of electrons transferred" },
      { fromVal: "4,824,266.61 C", toVal: "50.00 F", extra: "50.00 mol of electrons transferred" },
      { fromVal: "9,648,533.21 C", toVal: "100.00 F", extra: "100.00 mol of electrons transferred" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Industrial Electroplating & Metal Finishing",
        text: "Electroplating engineers use Faraday units to calculate exact bath run-times and current levels needed to achieve specified plating thicknesses (microns) of gold, nickel, chrome, or zinc."
      },
      {
        title: "Electrowinning & Metal Extraction",
        text: "Primary metallurgical smelters calculate electricity consumption per metric ton of aluminum or copper produced using Faraday's constant and Faraday units."
      },
      {
        title: "Chlor-Alkali Chemical Synthesis",
        text: "Membrane cell plants generating chlorine, hydrogen, and sodium hydroxide track Faraday efficiency (current efficiency) by comparing theoretical Faradays needed against actual Coulombs consumed."
      },
      {
        title: "Coulometric Titration in Analytical Chemistry",
        text: "High-precision analytical labs generate titrant reagents in situ using constant current, determining analyte concentrations directly from Faradays of charge consumed."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Confusing Faraday (charge) with Farad (capacitance): The Faraday is ~96,485 C of charge; the Farad is 1 C/V of capacitance.",
      "Ignoring ion valence (z): Depositing 1 mole of divalent copper (Cu²⁺) or lead (Pb²⁺) requires 2 Faradays of charge, not 1 Faraday.",
      "Assuming 100% current efficiency: Real electrolytic cells lose fractional Faradays to side reactions (such as parasite hydrogen evolution or heat dissipation).",
      "Using outdated Faraday constant values: Modern SI standards define the Faraday constant exactly as e × N_A = 96,485.3321233... C/mol."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in one Faraday?",
      answer: "There are approximately 96,485.332 Coulombs in one Faraday (1 F ≈ 96,485.33212 C). This value represents the elementary charge (1.602176634 × 10⁻¹⁹ C) multiplied by Avogadro's constant (6.02214076 × 10²³ mol⁻¹)."
    },
    {
      question: "What is the formula to convert Coulombs to Faradays?",
      answer: "The formula is: Charge in Faradays = Charge in Coulombs ÷ 96,485.332. For example, 192,970.66 C ÷ 96,485.332 = 2.0 Faradays."
    },
    {
      question: "What is the difference between a Faraday and a Farad?",
      answer: "A Faraday is an electrochemical unit of electric charge (1 Faraday ≈ 96,485 C). A Farad (symbol: F) is the SI unit of electrical capacitance (1 Farad = 1 Coulomb per Volt)."
    },
    {
      question: "How many Ampere-hours are in one Faraday?",
      answer: "One Faraday equals approximately 26.8015 Ampere-hours (96,485.332 C ÷ 3,600 s/h ≈ 26.8015 Ah)."
    },
    {
      question: "How do Faradays relate to Faraday's First Law of Electrolysis?",
      answer: "Faraday's First Law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the amount of electric charge passed. Passing 1 Faraday of charge transfers exactly 1 mole of electrons."
    },
    {
      question: "How many Faradays are needed to deposit 1 mole of Aluminum (Al³⁺)?",
      answer: "Aluminum ions have a valence of +3 (Al³⁺ + 3e⁻ → Al). Therefore, reducing 1 mole of aluminum requires exactly 3 Faradays of charge (289,456 Coulombs)."
    },
    {
      question: "What is current efficiency in Faraday calculations?",
      answer: "Current efficiency (or Faraday efficiency) is the percentage of total electric charge that successfully drives the desired electrochemical reaction versus parasitic side reactions."
    },
    {
      question: "Is the Faraday unit part of the official SI unit system?",
      answer: "No, the Faraday is a non-SI unit accepted for use in electrochemistry and physical chemistry. The official SI unit of electric charge is the Coulomb."
    }
  ],
  relatedList: [
    { label: "Faraday to Coulomb", from: "faraday", to: "coulomb" },
    { label: "Ampere-hour to Faraday", from: "ampere-hour", to: "faraday" },
    { label: "Coulomb to Ampere-hour", from: "coulomb", to: "ampere-hour" },
    { label: "Coulomb to Kilocoulomb", from: "coulomb", to: "kilocoulomb" },
    { label: "Coulomb to Megacoulomb", from: "coulomb", to: "megacoulomb" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST CODATA Recommended Values of the Fundamental Physical Constants",
    "IUPAC Compendium of Chemical Terminology (Gold Book) - Faraday Constant",
    "Handbook of Electrochemistry - Cynthia G. Zoski (Elsevier)"
  ]
};
