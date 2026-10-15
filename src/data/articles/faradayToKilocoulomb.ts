import { CustomArticleData } from "./types";

export const faradayToKilocoulomb: CustomArticleData = {
  fromUnitId: "faraday",
  toUnitId: "kilocoulomb",
  seoTitle: "Faraday to Kilocoulomb Converter (F to kC) | UnitsConvertors",
  metaDescription: "Convert Faradays to Kilocoulombs (F to kC) with precision. Learn the 96.4853 multiplier rule, industrial electrochemistry formulas, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/faraday-to-kilocoulomb",
  h1: "Faraday to Kilocoulomb Converter",
  introduction: [
    "In industrial electrochemical engineering, chlor-alkali synthesis, and large-scale battery manufacturing, electric charge is continuously tracked across both atomic and operational engineering scales. Chemical equations define the reduction or oxidation of materials based on electron moles—measured in Faradays (F)—while industrial DC power supplies, energy monitors, and digital coulometers record charge in Kilocoulombs (kC).",
    "One Faraday represents the electric charge carried by exactly one mole of electrons (approximately 96,485.332 Coulombs). Because one Kilocoulomb equals exactly 1,000 Coulombs, one Faraday corresponds to approximately 96.48533 Kilocoulombs. This guide provides exact formulas, worked calculation problems, electrochemical plant applications, and comprehensive conversion tables."
  ],
  quickAnswer: {
    text: "One Faraday equals approximately 96.48533 Kilocoulombs (kC). To convert Faradays to Kilocoulombs, multiply the Faraday value by 96.48533.",
    formulaDisplay: "1 F = 96,485.33212 C ÷ 1,000 C/kC ≈ 96.48533 kC",
    subtext: "Multiply by 96.48533 to convert Faradays directly into Kilocoulombs."
  },
  aboutSourceUnit: {
    title: "About the Faraday (F)",
    text: "The Faraday (symbol: F, or Fd) is an electrochemical unit of charge equal to the electric charge carried by one mole of electrons. Named in honour of English scientist Michael Faraday, it is defined under the 2019 SI redefinition by the fundamental constant product F = N_A × e ≈ 96,485.33212 Coulombs. It is the fundamental constant governing electrolytic stoichiometry."
  },
  aboutTargetUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The Kilocoulomb (symbol: kC) is a decimal multiple of the SI coherent derived unit of electric charge, equal to one thousand coulombs (10³ C). It represents the charge transferred by a continuous current of 1,000 amperes flowing for one second (1,000 A·s), or 1 ampere sustained for 1,000 seconds. It is standardly used in traction battery telemetry, electroplating plant totalizers, and power electronics."
  },
  relationship: "Because one Faraday equals 96,485.33212 Coulombs and one Kilocoulomb equals 1,000 Coulombs, dividing by 1,000 yields exactly 96.48533212 Kilocoulombs per Faraday.",
  relationshipTitle: "Faraday to Kilocoulomb Conversion Baseline",
  relationshipItems: [
    { label: "Faradays (F) to Kilocoulombs (kC)", value: "Multiply by 96.48533 (or divide by 0.0103643)" },
    { label: "Kilocoulombs (kC) to Faradays (F)", value: "Divide by 96.48533 (or multiply by 0.0103643)" },
    { label: "Exact Scientific Ratio", value: "1 F = 96.48533212 kC" },
    { label: "Ampere-hour Equivalence", value: "1 F ≈ 96.4853 kC ≈ 26.8015 Ah" }
  ],
  formula: {
    text: "To convert electric charge from Faradays (F) to Kilocoulombs (kC), multiply the Faraday value by 96.485332.",
    math: "Charge (kC) = Charge (F) × 96.48533212",
    subtext: "Inverse formula: Charge (F) = Charge (kC) ÷ 96.48533212"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "The ~96.5 Rule of Thumb",
    text: "In industrial operations, operators frequently multiply Faradays by 96.5 for rapid field estimation: 2 Faradays ≈ 193 kC; 5 Faradays ≈ 482.5 kC; 10 Faradays ≈ 965 kC. For official metallurgical reports and billing, always use the 96.48533 value."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Electrolysis Hydrogen Production",
        subtitle: "A commercial PEM water electrolyzer requires 4.0 Faradays of charge to produce two moles of hydrogen gas. What is the required charge in Kilocoulombs?",
        steps: [
          "Identify the given value: 4.0 F.",
          "Apply the conversion formula: kC = F × 96.485332.",
          "Multiply: 4.0 × 96.485332 = 385.9413 kC.",
          "Conclusion: The electrolyzer requires approximately 385.94 Kilocoulombs of electric charge."
        ]
      },
      {
        title: "Example 2: Industrial Zinc Electro-Winning Tank",
        subtitle: "A zinc electro-winning cell passes 12.5 Faradays during a test run. Express this in Kilocoulombs for data acquisition logging.",
        steps: [
          "State the value: 12.5 F.",
          "Multiply: 12.5 × 96.485332 = 1,206.0667 kC.",
          "Conclusion: The test run consumed 1,206.07 Kilocoulombs (approximately 1.206 Megacoulombs)."
        ]
      },
      {
        title: "Example 3: Copper Electroplating Shift Log",
        subtitle: "An automated copper plating bath consumes 0.75 Faradays of charge. Calculate the charge in Kilocoulombs.",
        steps: [
          "Identify the starting charge: 0.75 F.",
          "Calculate: 0.75 × 96.485332 = 72.3640 kC.",
          "Conclusion: The bath consumed 72.36 Kilocoulombs (equal to 20.10 Ampere-hours)."
        ]
      }
    ]
  },
  table: {
    title: "Faraday to Kilocoulomb Conversion Table",
    headers: ["Faradays (F)", "Kilocoulombs (kC)", "Coulombs (C)", "Electrochemical Reaction Context"],
    rows: [
      { fromVal: "0.05", toVal: "4.8243", extra: "4,824 C", extra2: "Small-scale coulometric titration" },
      { fromVal: "0.1", toVal: "9.6485", extra: "9,649 C", extra2: "0.1 mole electron reduction" },
      { fromVal: "0.25", toVal: "24.1213", extra: "24,121 C", extra2: "Laboratory metal deposition sample" },
      { fromVal: "0.5", toVal: "48.2427", extra: "48,243 C", extra2: "Quarter-cell redox benchmark" },
      { fromVal: "1.0", toVal: "96.4853", extra: "96,485 C", extra2: "1 mole of electrons (Faraday constant)" },
      { fromVal: "2.0", toVal: "192.9707", extra: "192,971 C", extra2: "1 mole H₂ production from water" },
      { fromVal: "3.0", toVal: "289.4560", extra: "289,456 C", extra2: "1 mole Al reduction from Al³⁺" },
      { fromVal: "5.0", toVal: "482.4267", extra: "482,427 C", extra2: "Pilot electrochemical reactor batch" },
      { fromVal: "10.0", toVal: "964.8533", extra: "964,853 C", extra2: "Industrial cell line hourly throughput" },
      { fromVal: "25.0", toVal: "2,412.1333", extra: "2,412,133 C", extra2: "Commercial chlor-alkali cell run" }
    ]
  },
  expertNote: {
    title: "Current-Time Integration in SCADA Systems",
    text: "Modern electrochemical process controllers continuously sample current sensors at millisecond intervals. Integrating current I in amperes across time in seconds produces raw coulombs. Plant SCADA systems divide by 1,000 to display kilocoulombs on operator screens, which process engineers then divide by 96.4853 to calculate real-time chemical production."
  },
  applications: {
    title: "Industrial & Laboratory Engineering Applications",
    items: [
      {
        title: "Chlor-Alkali Electrolysis Operations",
        text: "Membrane cell chlor-alkali facilities consume thousands of amperes of DC electricity. Plant engineers convert chemical production quotas (moles of Cl₂ and NaOH, measured in Faradays) into kilocoulombs to program automated DC rectifiers."
      },
      {
        title: "Metal Extraction & Electro-Refining",
        text: "Facilities extracting copper, nickel, or cobalt from leach solutions evaluate cell line performance by comparing theoretical Faradays needed against kilocoulombs measured by electrical sub-meters to track current efficiency."
      },
      {
        title: "Industrial Electroplating & Anodizing",
        text: "Quality assurance specifications define plating thickness based on coulombs per unit surface area. Plating chemists calculate theoretical Faradaic requirements and convert them into kilocoulomb rectifier setpoints."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing Kilocoulombs (kC) with Megacoulombs (MC): Kilocoulombs are 10³ C, whereas Megacoulombs are 10⁶ C. Confusing the two introduces a factor of 1,000 error.",
      "Confusing Faraday with Farad: The Faraday is a unit of electrical charge (≈ 96.485 kC), while the Farad is a unit of capacitance (C/V). Never use capacitor formulas when analyzing charge transport.",
      "Omitting Valency (z): When calculating product mass via Faraday's law, remember that divalent ions (like Cu²⁺, Zn²⁺) require 2 Faradays (192.97 kC) per mole of metal, not 1 Faraday."
    ]
  },
  faqs: [
    {
      question: "How many Kilocoulombs are in 1 Faraday?",
      answer: "One Faraday equals approximately 96.48533 Kilocoulombs (96,485.332 C ÷ 1,000)."
    },
    {
      question: "What is the formula to convert Faradays to Kilocoulombs?",
      answer: "The formula is: Kilocoulombs = Faradays × 96.48533 (or kC = F × 96.485332)."
    },
    {
      question: "How do I convert 2 Faradays to Kilocoulombs?",
      answer: "Multiply 2 by 96.48533: 2 × 96.48533 = 192.9707 Kilocoulombs."
    },
    {
      question: "How many Faradays are in 96.485 kC?",
      answer: "96.485 kC equals approximately 1.0 Faraday of electric charge."
    },
    {
      question: "What is 0.5 Faradays in Kilocoulombs?",
      answer: "0.5 Faradays equals approximately 48.2427 Kilocoulombs (48,242.67 Coulombs)."
    },
    {
      question: "How many Ampere-hours is 96.485 kC?",
      answer: "96.485 kC equals approximately 26.8015 Ampere-hours (96,485.33 C ÷ 3,600 s/h)."
    },
    {
      question: "Why divide by 1,000 to get Kilocoulombs?",
      answer: "The metric prefix 'kilo-' denotes 1,000. Therefore, dividing 96,485.33 Coulombs by 1,000 yields 96.48533 Kilocoulombs."
    },
    {
      question: "What is 10 Faradays in Kilocoulombs?",
      answer: "10 Faradays equals approximately 964.8533 Kilocoulombs (964,853.3 Coulombs)."
    }
  ],
  relatedList: [
    { label: "Kilocoulomb to Faraday", from: "kilocoulomb", to: "faraday" },
    { label: "Faraday to Coulomb", from: "faraday", to: "coulomb" },
    { label: "Faraday to Ampere-hour", from: "faraday", to: "ampere-hour" },
    { label: "Faraday to Megacoulomb", from: "faraday", to: "megacoulomb" },
    { label: "Faraday to Milliampere-hour", from: "faraday", to: "milliampere-hour" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "IUPAC. <em>Quantities, Units and Symbols in Physical Chemistry</em> (The Green Book), 3rd edition.",
    "NIST Special Publication 330: <em>The International System of Units (SI)</em>."
  ]
};
