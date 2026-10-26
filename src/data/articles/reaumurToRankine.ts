import { CustomArticleData } from "./types";

export const reaumurToRankine: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "rankine",
  seoTitle: "Réaumur to Rankine (Re to R) Temperature Converter",
  metaDescription: "Convert Réaumur to Rankine (°Ré to °R) with mathematical precision. Learn the exact formula °R = (°Ré × 2.25) + 491.67, thermodynamic zero offsets, and tables.",
  h1: "Réaumur to Rankine Converter",
  introduction: [
    "Converting temperature from Réaumur to Rankine bridges an 18th-century French empirical scale with the absolute thermodynamic temperature scale used in English engineering thermodynamics. Named after Scottish civil engineer and physicist William John Macquorn Rankine, the Rankine scale (°R) is to Fahrenheit what Kelvin is to Celsius.",
    "While the Réaumur scale spans 80 degrees between the freezing and boiling points of water (0 °Ré to 80 °Ré), the Rankine scale spans 180 degrees between the exact same physical milestones (491.67 °R to 671.67 °R). This establishes an exact ratio of 180 / 80 = 2.25 (or 9/4) Rankine degrees per Réaumur degree. Combining this with the water-freezing zero offset produces the exact formula: <strong>°R = (°Ré × 2.25) + 491.67</strong>. This guide explains the derivation, worked examples, formulas, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Rankine, multiply the Réaumur temperature by 2.25 (or 9/4) and then add 491.67. For example, 0 °Ré equals 491.67 °R, and 80 °Ré equals 671.67 °R.",
    formulaDisplay: "°R = (°Ré × 2.25) + 491.67",
    subtext: "Combines the 9/4 degree step ratio (180 / 80) with the water-freezing point in the absolute Rankine scale (491.67 °R)."
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Introduced in 1730 by René Antoine Ferchault de Réaumur, the Réaumur scale calibrated 0 °Ré at the freezing point of water and 80 °Ré at the boiling point of water. It was widely used for industrial temperature measurement in continental Europe, European confectionery, and cheesemaking for over 150 years."
  },
  aboutTargetUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish physicist William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale utilizing degree intervals identical in size to Fahrenheit degrees (°F). Zero degrees Rankine (0 °R) represents absolute zero (-459.67 °F), making it standard in American aerospace and combustion thermodynamics where US customary units are used."
  },
  relationship: "Water freezes at 0 °Ré and 491.67 °R. Water boils at 80 °Ré and 671.67 °R. Because 80 Réaumur degrees cover the same physical span as 180 Rankine degrees, 1 °Ré = 180 / 80 °R = 2.25 °R (9/4 °R). To shift the baseline origin from water's freezing point to absolute zero, add 491.67 after multiplying by 2.25.",
  relationshipTitle: "Degree Ratio and Absolute Offset",
  relationshipItems: [
    { label: "0 °Ré", value: "491.67 °R (Water freezing point at 1 atm)" },
    { label: "16 °Ré", value: "527.67 °R (Standard room temperature 68 °F)" },
    { label: "29.6 °Ré", value: "558.27 °R (Human body temperature 98.6 °F)" },
    { label: "80 °Ré", value: "671.67 °R (Water boiling point at 1 atm)" },
    { label: "-218.52 °Ré", value: "0 °R (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Réaumur by 2.25 (or 9/4) and add 491.67 to obtain the temperature in degrees Rankine.",
    math: "°R = (°Ré × 2.25) + 491.67",
    subtext: "To convert Rankine back to Réaumur, subtract 491.67 first, then divide by 2.25 (or multiply by 4/9): °Ré = (°R - 491.67) / 2.25."
  },
  formulaTitle: "Réaumur to Rankine Formula",
  practicalTip: {
    title: "Fractional Calculation Shortcut",
    text: "To convert manually, multiply the Réaumur value by 9, divide by 4, and add 491.67. For example, for 20 °Ré: 20 × 9 = 180; 180 / 4 = 45; 45 + 491.67 = 536.67 °R."
  },
  expertNote: {
    title: "Engineering Thermodynamics Context",
    text: "Rankine is used in thermodynamic calculations (such as the Carnot efficiency η = 1 - T_C/T_H and heat engine cycles) within US engineering contexts where enthalpy is tabulated in BTU per pound. When referencing historical European heat engine trials recorded in °Ré, engineers convert directly to °R."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °Ré)",
        subtitle: "Convert the freezing temperature of pure water to Rankine.",
        steps: [
          "Identify temperature: 0 °Ré.",
          "Apply formula: °R = (0 × 2.25) + 491.67.",
          "Calculate: 0 + 491.67 = 491.67 °R.",
          "Result: 0 °Ré equals exactly 491.67 °R."
        ]
      },
      {
        title: "Example 2: Typical Room Temperature (16 °Ré)",
        subtitle: "Convert a comfortable room temperature of 16 °Ré (20 °C / 68 °F) to Rankine.",
        steps: [
          "Identify temperature: 16 °Ré.",
          "Multiply by 2.25: 16 × 2.25 = 36.",
          "Add 491.67: 36 + 491.67 = 527.67 °R.",
          "Result: 16 °Ré equals exactly 527.67 °R."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (80 °Ré)",
        subtitle: "Convert the boiling temperature of pure water to Rankine.",
        steps: [
          "Identify temperature: 80 °Ré.",
          "Multiply: 80 × 2.25 = 180.",
          "Add 491.67: 180 + 491.67 = 671.67 °R.",
          "Result: 80 °Ré equals exactly 671.67 °R."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Rankine Conversion Table",
    headers: ["Réaumur (°Ré)", "Rankine (°R)", "Physical Context"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "0.00 °R", extra: "Absolute zero (complete absence of thermal energy)" },
      { fromVal: "-100.00 °Ré", toVal: "266.67 °R", extra: "Cryogenic liquefied gases" },
      { fromVal: "-40.00 °Ré", toVal: "401.67 °R", extra: "Deep subzero winter condition (-58 °F)" },
      { fromVal: "-16.00 °Ré", toVal: "455.67 °R", extra: "Freezer storage (-4 °F)" },
      { fromVal: "0.00 °Ré", toVal: "491.67 °R", extra: "Pure water freezing point (32 °F)" },
      { fromVal: "10.00 °Ré", toVal: "514.17 °R", extra: "Chilly morning temperature (54.5 °F)" },
      { fromVal: "16.00 °Ré", toVal: "527.67 °R", extra: "Standard room temperature (68 °F)" },
      { fromVal: "20.00 °Ré", toVal: "536.67 °R", extra: "Warm indoor temperature (77 °F)" },
      { fromVal: "29.60 °Ré", toVal: "558.27 °R", extra: "Normal human core body temperature (98.6 °F)" },
      { fromVal: "40.00 °Ré", toVal: "581.67 °R", extra: "Hot summer weather / warm bath (122 °F)" },
      { fromVal: "60.00 °Ré", toVal: "626.67 °R", extra: "Milk pasteurization heat (167 °F)" },
      { fromVal: "80.00 °Ré", toVal: "671.67 °R", extra: "Water boiling point at sea level (212 °F)" }
    ]
  },
  applications: {
    title: "Practical Applications of Réaumur to Rankine Conversions",
    items: [
      {
        title: "Comparative History of Thermodynamics",
        text: "Historians of technology convert experimental data from early French steam engine prototypes (recorded in °Ré) into Rankine to compare thermodynamic cycle performance against British Watt engines."
      },
      {
        title: "Combustion & Furnace Retrofit Modeling",
        text: "Engineers studying historical European industrial kilns, metallurgical furnaces, and glassworks convert legacy Réaumur annealing temperatures into Rankine for US imperial heat-transfer simulation software."
      },
      {
        title: "Academic Metrology & Teaching",
        text: "Thermodynamics courses use the Réaumur-to-Rankine conversion to teach students how affine transformations reconcile both different zero origins and different degree step sizes."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding 459.67 instead of 491.67 (459.67 is the Fahrenheit zero-offset, whereas pure water freezes at 491.67 °R).",
      "Confusing Rankine (°R) with Réaumur (°Ré or °Re), which share similar letter abbreviations but are completely different scales.",
      "Multiplying by 1.8 instead of 2.25 (1.8 is the ratio between Celsius and Fahrenheit; between Réaumur and Rankine the ratio is 180/80 = 2.25)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Rankine?",
      answer: "Multiply the Réaumur value by 2.25 (or 9/4) and then add 491.67: °R = (°Ré × 2.25) + 491.67."
    },
    {
      question: "What is 0 °Ré in Rankine?",
      answer: "0 °Ré is the freezing point of water, which corresponds to exactly 491.67 °R."
    },
    {
      question: "What is 80 °Ré in Rankine?",
      answer: "80 °Ré is the boiling point of water at 1 atm, which corresponds to exactly 671.67 °R."
    },
    {
      question: "Why is the conversion multiplier 2.25?",
      answer: "The span between water freezing and boiling covers 80 degrees on the Réaumur scale and 180 degrees on the Rankine scale. Dividing 180 by 80 yields exactly 2.25 (or 9/4)."
    },
    {
      question: "What is absolute zero on the Réaumur scale in Rankine?",
      answer: "Absolute zero is 0 °R, which corresponds to approximately -218.52 °Ré."
    },
    {
      question: "What is room temperature (16 °Ré) in Rankine?",
      answer: "16 °Ré (equivalent to 20 °C or 68 °F) equals exactly 527.67 °R ((16 × 2.25) + 491.67)."
    },
    {
      question: "How do you convert Rankine back to Réaumur?",
      answer: "Subtract 491.67 from the Rankine temperature and divide the result by 2.25 (or multiply by 4/9): °Ré = (°R - 491.67) / 2.25."
    },
    {
      question: "Are degree symbols used for Rankine?",
      answer: "Yes, standard convention uses the degree symbol for Rankine (°R), distinguishing it from relative Fahrenheit (°F) and absolute Kelvin (K)."
    }
  ],
  relatedList: [
    { label: "Rankine to Réaumur", from: "rankine", to: "reaumur" },
    { label: "Réaumur to Fahrenheit", from: "reaumur", to: "fahrenheit" },
    { label: "Réaumur to Kelvin", from: "reaumur", to: "kelvin" }
  ],
  references: [
    "William J. M. Rankine - A Manual of Applied Mechanics (1858)",
    "BIPM - SI Brochure: History of Thermodynamic Scales",
    "ASME - Performance Test Codes on Temperature Measurement"
  ]
};
