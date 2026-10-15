import { CustomArticleData } from "./types";

export const megacoulombToFaraday: CustomArticleData = {
  fromUnitId: "megacoulomb",
  toUnitId: "faraday",
  seoTitle: "Megacoulomb to Faraday Converter (MC to F) | UnitsConvertors",
  metaDescription: "Convert Megacoulombs to Faradays (MC to F) with scientific accuracy. Learn Faraday's constant, electrolysis stoichiometry, formulas, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/megacoulomb-to-faraday",
  h1: "Megacoulomb to Faraday Converter",
  introduction: [
    "Industrial electrochemists, chemical process engineers, and metallurgical specialists constantly translate between macro-scale electrical measurements and chemical stoichiometry. While industrial power monitors, DC bus totalizers, and utility power meters record electric charge in Megacoulombs (MC), chemical reaction yields at electrodes are fundamentally governed by moles of electrons, quantified in Faradays (F).",
    "One Faraday represents the total electric charge carried by exactly one mole of electrons, defined by Faraday's constant (approximately 96,485.332 Coulombs). Converting Megacoulombs to Faradays allows process engineers to directly calculate how many moles of hydrogen, chlorine, or refined copper an electrochemical cell will yield. This guide details the fundamental constant derivation, exact conversion formulas, worked industrial examples, and reference tables."
  ],
  quickAnswer: {
    text: "One Megacoulomb equals approximately 10.36427 Faradays (F). To convert Megacoulombs to Faradays, multiply the megacoulomb value by 1,000,000 and divide by 96,485.332, or multiply by 10.36427.",
    formulaDisplay: "1 MC = 1,000,000 C ÷ 96,485.332 C/F ≈ 10.36427 F",
    subtext: "Multiply Megacoulombs by 10.36427 to calculate equivalent Faradays."
  },
  aboutSourceUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The Megacoulomb (symbol: MC) is an SI metric decimal multiple representing one million coulombs (10⁶ C). One megacoulomb is equivalent to the charge transferred by a continuous direct current of one million amperes for one second, or 1,000 amperes sustained for 1,000 seconds. It is standardly used to express charge throughput in multi-megawatt electrolysis plants, grid battery energy storage systems, and heavy industrial smelting facilities."
  },
  aboutTargetUnit: {
    title: "About the Faraday (F)",
    text: "The Faraday (symbol: F, also written as Fd to avoid confusion with the farad of capacitance) is an electrochemical unit of electric charge named in honour of English scientist Michael Faraday. It represents the magnitude of electric charge carried by exactly one mole of electrons. Under the 2019 SI redefinition of fundamental constants, F = N_A × e = (6.02214076 × 10²³ mol⁻¹) × (1.602176634 × 10⁻¹⁹ C) ≈ 96,485.33212 Coulombs."
  },
  relationship: "Because one Faraday equals approximately 96,485.332 Coulombs, one Megacoulomb (1,000,000 Coulombs) contains roughly 10.36427 Faradays. Converting from MC to F translates macroscopic electrical charge into chemical electron moles.",
  relationshipTitle: "Fundamental Constant & Scaling Equivalence",
  relationshipItems: [
    { label: "Megacoulomb (MC) to Faraday (F)", value: "Multiply by 10.36427 (or divide by 0.09648533)" },
    { label: "Faraday (F) to Megacoulomb (MC)", value: "Multiply by 0.09648533 (or divide by 10.36427)" },
    { label: "Exact Constant Definition", value: "F = N_A × e ≈ 96,485.33212 C/mol" },
    { label: "1 Faraday Reference", value: "1 F ≈ 0.096485 MC = 96.485 kC = 26.8015 Ah" }
  ],
  formula: {
    text: "To convert Megacoulombs (MC) to Faradays (F), multiply by 1,000,000 to convert to coulombs, then divide by Faraday's constant (96,485.332 C/F).",
    math: "Charge (F) = (Charge (MC) × 1,000,000) ÷ 96,485.33212",
    subtext: "Simplified multiplier: Charge (F) ≈ Charge (MC) × 10.36427"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Industrial Electrolysis",
    text: "For quick mental estimation on the plant floor, multiply the Megacoulomb reading by 10.36 (or multiply by 10 and add ~3.6%): 1 MC yields roughly 10.36 moles of electrons; 5 MC yields approximately 51.8 Faradays."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Hydrogen Electrolyzer Yield",
        subtitle: "A multi-megawatt alkaline water electrolysis plant consumes 1.93 Megacoulombs of electric charge during a production shift. How many Faradays of charge were transferred?",
        steps: [
          "Identify the starting charge: Q = 1.93 MC.",
          "Convert to coulombs: 1.93 × 1,000,000 = 1,930,000 C.",
          "Divide by Faraday's constant: 1,930,000 ÷ 96,485.332 ≈ 20.003 F.",
          "Conclusion: The electrolyzer processed approximately 20.00 Faradays (which generates 10.0 moles of H₂ gas, since 2 F are required per mole of H₂)."
        ]
      },
      {
        title: "Example 2: Commercial Copper Electro-Refining Tankhouse",
        subtitle: "An automated copper refining cell transfers 0.4824 Megacoulombs. Determine the charge in Faradays.",
        steps: [
          "State the given charge: 0.4824 MC.",
          "Apply the conversion factor: 0.4824 × 10.36427 ≈ 4.9997 F.",
          "Round to significant figures: approximately 5.00 Faradays.",
          "Conclusion: 0.4824 MC corresponds to exactly 5.00 Faradays (depositing 2.5 moles of Cu²⁺, or roughly 158.8 grams of pure copper)."
        ]
      },
      {
        title: "Example 3: Aluminum Smelting Hall-Héroult Potline",
        subtitle: "An aluminum smelting cell operates over a scheduled run, transferring 5.789 Megacoulombs of charge. Convert this to Faradays.",
        steps: [
          "State the given value: 5.789 MC.",
          "Calculate coulombs: 5,789,000 C.",
          "Divide by 96,485.332: 5,789,000 ÷ 96,485.332 ≈ 60.00 F.",
          "Conclusion: The reduction cell transferred exactly 60.00 Faradays."
        ]
      }
    ]
  },
  table: {
    title: "Megacoulomb to Faraday Conversion Table",
    headers: ["Megacoulombs (MC)", "Faradays (F)", "Coulomb Equivalent (C)", "Electrochemical Meaning"],
    rows: [
      { fromVal: "0.01", toVal: "0.1036", extra: "10,000 C", extra2: "Laboratory bench-scale electrolysis" },
      { fromVal: "0.05", toVal: "0.5182", extra: "50,000 C", extra2: "Pilot scale electro-organic synthesis" },
      { fromVal: "0.09649", toVal: "1.0000", extra: "96,485 C", extra2: "Exactly 1.0 mole of electrons (1 F)" },
      { fromVal: "0.1930", toVal: "2.0000", extra: "192,971 C", extra2: "Theoretical 1 mole of H₂ production" },
      { fromVal: "0.5", toVal: "5.1821", extra: "500,000 C", extra2: "Commercial electroplating batch run" },
      { fromVal: "0.9649", toVal: "10.0000", extra: "964,853 C", extra2: "10 moles of electrons chemical standard" },
      { fromVal: "1.0", toVal: "10.3643", extra: "1,000,000 C", extra2: "1 MC macro-scale electrical baseline" },
      { fromVal: "2.0", toVal: "20.7285", extra: "2,000,000 C", extra2: "Electrolytic chlor-alkali cell daily run" },
      { fromVal: "5.0", toVal: "51.8214", extra: "5,000,000 C", extra2: "Industrial zinc winning cell block cycle" },
      { fromVal: "9.6485", toVal: "100.0000", extra: "9,648,533 C", extra2: "100 Faradays stoichiometric reference" }
    ]
  },
  expertNote: {
    title: "Faraday's Law of Electrolysis in Metallurgy",
    text: "According to Faraday's first law of electrolysis, the mass m of a substance deposited or liberated at an electrode is given by m = (Q × M) / (z × F), where Q is electric charge in coulombs, M is molar mass, z is the electron valency, and F is Faraday's constant. When Q is measured in Megacoulombs, converting first to Faradays simplifies the equation to m = (Charge in Faradays × M) / z."
  },
  applications: {
    title: "Industrial & Chemical Engineering Contexts",
    items: [
      {
        title: "Green Hydrogen Production (Water Electrolysis)",
        text: "Water splitting requires two Faradays of charge to produce one mole of diatomic hydrogen gas (2 H⁺ + 2 e⁻ → H₂). Converting plant power meter megacoulombs to Faradays allows direct calculation of cubic meters of hydrogen generated under standard conditions."
      },
      {
        title: "Chlor-Alkali Synthesis (Cl₂ and NaOH)",
        text: "Brine electrolysis facilities consume hundreds of megacoulombs of electric charge. Converting this charge to Faradays establishes stoichiometric yields for chlorine gas at the anode and caustic soda at the cathode."
      },
      {
        title: "Electrolytic Metal Refining (Copper, Zinc, Nickel)",
        text: "Tankhouses refine impure anode metal into pure cathode sheets. Converting megacoulomb energy logs to Faradays allows metallurgists to evaluate current efficiency (Faradaic efficiency) against real physical metal weights."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the Faraday with the Farad: The Faraday (F) is a unit of electric charge (96,485.33 C), whereas the Farad (F) is the SI unit of electrical capacitance (Coulombs per Volt). Although they share the same symbol 'F', they measure entirely distinct physical quantities.",
      "Neglecting Ion Valency (z): One Faraday deposits one mole of a univalent ion (such as Ag⁺ or Na⁺), but half a mole of a bivalent ion (such as Cu²⁺ or Zn²⁺) and one-third of a mole of a trivalent ion (such as Al³⁺).",
      "Using Obsolete Historical Constants: Prior to the 2019 SI redefinition, older literature listed slightly different values for Faraday's constant (e.g. 96,487 or 96,500 C). For modern scientific accuracy, use 96,485.332 C."
    ]
  },
  faqs: [
    {
      question: "How many Faradays are in 1 Megacoulomb?",
      answer: "One Megacoulomb equals approximately 10.36427 Faradays (1,000,000 C ÷ 96,485.332 C/F)."
    },
    {
      question: "What is the formula to convert Megacoulombs to Faradays?",
      answer: "The formula is: Faradays = (Megacoulombs × 1,000,000) ÷ 96,485.332, or Faradays ≈ Megacoulombs × 10.36427."
    },
    {
      question: "What is the physical meaning of 1 Faraday?",
      answer: "One Faraday represents the magnitude of electric charge carried by exactly one mole of electrons (6.02214076 × 10²³ electrons), equal to approximately 96,485.33 Coulombs."
    },
    {
      question: "How many Megacoulombs equal 1 Faraday?",
      answer: "One Faraday equals approximately 0.09648533 Megacoulombs (96.48533 Kilocoulombs or 96,485.33 Coulombs)."
    },
    {
      question: "What is the difference between a Faraday and a Farad?",
      answer: "A Faraday is an electrochemical unit of electric charge (≈ 96,485 C), while a Farad is the SI unit of electrical capacitance (1 F = 1 C/V)."
    },
    {
      question: "How many Faradays are in 0.096485 MC?",
      answer: "0.096485 MC equals exactly 1.0 Faraday of electric charge."
    },
    {
      question: "Why is the Faraday important in electrolysis?",
      answer: "Because chemical reactions transfer electrons in integer stoichiometric ratios, knowing the charge in Faradays directly tells chemists how many moles of reactant will be transformed."
    },
    {
      question: "How many Ampere-hours are in 1 Faraday?",
      answer: "One Faraday equals approximately 26.8015 Ampere-hours (96,485.33 C ÷ 3,600 s/h)."
    }
  ],
  relatedList: [
    { label: "Faraday to Megacoulomb", from: "faraday", to: "megacoulomb" },
    { label: "Faraday to Coulomb", from: "faraday", to: "coulomb" },
    { label: "Faraday to Ampere-hour", from: "faraday", to: "ampere-hour" },
    { label: "Megacoulomb to Coulomb", from: "megacoulomb", to: "coulomb" },
    { label: "Megacoulomb to Kilocoulomb", from: "megacoulomb", to: "kilocoulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "IUPAC. <em>Quantities, Units and Symbols in Physical Chemistry</em> (The Green Book), 3rd edition.",
    "CODATA Recommended Values of the Fundamental Physical Constants: 2018/2022."
  ]
};
