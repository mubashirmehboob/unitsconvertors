import { CustomArticleData } from "./types";

export const kilojouleToCalorie: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "calorie",
  seoTitle: "Kilojoule to Calorie Converter (kJ to cal)",
  metaDescription: "Convert kilojoules to small calories (kJ to cal) with exact thermochemical precision. Learn the conversion formula, calculation steps, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-calorie",
  h1: "Kilojoule to Calorie Converter",
  introduction: [
    "The kilojoule (kJ) and the gram calorie (cal) are two widely recognized units used to measure heat, mechanical work, and chemical energy. While the kilojoule is an official International System of Units (SI) metric measure, the small calorie remains common in chemistry laboratories, thermodynamic research, and specific scientific thermal experiments.",
    "Converting kilojoules to calories involves calculating the equivalent amount of heat required to raise the temperature of water. Under the internationally standardized thermochemical definition, one small calorie equals exactly 4.184 Joules. Therefore, one kilojoule (1,000 Joules) contains approximately 239.0057 small calories.",
    "This guide provides the exact mathematical conversion formula, step-by-step calculation examples, an expansive conversion reference table, practical industrial applications, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to calories (small/gram calories), multiply the kilojoule value by 1,000 and divide by 4.184 (or multiply by approximately 239.0057). For example, 2 kJ equals approximately 478.01 cal.",
    formulaDisplay: "cal = (kJ × 1,000) ÷ 4.184 = kJ × 239.005736",
    subtext: "1 kilojoule is equal to approximately 239.0057 small calories (thermochemical)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is a decimal multiple of the derived SI unit of energy, the Joule. One kilojoule represents 1,000 Joules of energy, equivalent to the force of 1,000 Newtons acting across a distance of one meter, or 1 kilowatt of electrical power sustained for one second. It is the primary legal unit of food energy and thermal work across Europe, Australia, and international scientific organizations."
  },
  aboutTargetUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The calorie (symbol: cal), often referred to as the small calorie or gram calorie, is defined as the amount of thermal energy required to raise the temperature of one gram of air-free water by one degree Celsius at standard atmospheric pressure. Under the modern thermochemical convention, it is defined as exactly 4.184 Joules. Note that 1 small calorie (cal) equals 0.001 food Calories (kcal/Cal)."
  },
  relationship: "Because 1 thermochemical calorie is exactly 4.184 Joules and 1 kilojoule equals 1,000 Joules, the conversion factor is 1,000 / 4.184 = 239.005736... calories per kilojoule.",
  relationshipTitle: "Kilojoule to Calorie Relationship",
  relationshipItems: [
    { label: "0.004184 kJ", value: "1 cal (energy to heat 1g water by 1°C)" },
    { label: "1 kJ", value: "239.0057 cal (approx. 0.239 kcal)" },
    { label: "4.184 kJ", value: "1,000 cal (1 kilocalorie / 1 food Calorie)" },
    { label: "10 kJ", value: "2,390.057 cal" },
    { label: "100 kJ", value: "23,900.57 cal" }
  ],
  formula: {
    text: "Multiply the energy in kilojoules by 1,000 to convert to Joules, then divide by 4.184 to obtain small calories.",
    math: "cal = (kJ * 1000) / 4.184",
    subtext: "Alternatively: cal = kJ × 239.005736"
  },
  formulaTitle: "Kilojoule to Calorie Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation",
    text: "For a quick estimate, multiply the kilojoule value by 240. For instance, 5 kJ × 240 = 1,200 cal (actual exact value: 1,195.03 cal, less than 0.5% difference)."
  },
  expertNote: {
    title: "Small Calorie vs Large Food Calorie",
    text: "Always confirm whether your target metric is the small gram calorie (cal, 4.184 J) or the dietary food Calorie (kcal, 4,184 J). One food Calorie contains 1,000 small calories."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Calorimeter Heat Release",
        subtitle: "Convert 3.5 kilojoules of combustion heat into small calories.",
        steps: [
          "Start with the measured energy: 3.5 kJ.",
          "Convert to Joules: 3.5 × 1,000 = 3,500 J.",
          "Divide by the calorie constant (4.184): 3,500 ÷ 4.184 = 836.52 cal.",
          "Result: 3.5 kJ equals approximately 836.52 calories."
        ]
      },
      {
        title: "Example 2: Specific Heat Water Heating",
        subtitle: "Convert 12 kilojoules into small calories.",
        steps: [
          "Identify the value in kilojoules: 12 kJ.",
          "Apply the multiplier: 12 × 239.005736 = 2,868.07 cal.",
          "Result: 12 kJ equals approximately 2,868.07 small calories."
        ]
      },
      {
        title: "Example 3: Chemical Reaction Activation Energy",
        subtitle: "Convert 0.25 kilojoules into calories.",
        steps: [
          "Identify the input: 0.25 kJ.",
          "Multiply by 1,000: 250 J.",
          "Divide by 4.184: 250 ÷ 4.184 = 59.75 cal.",
          "Result: 0.25 kJ equals approximately 59.75 calories."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Calorie Conversion Table",
    headers: ["Kilojoules (kJ)", "Calories (cal)", "Equivalent Food kcal", "Practical Context"],
    rows: [
      { fromVal: "0.004184 kJ", toVal: "1 cal", extra: "0.001 kcal", extra2: "Energy to heat 1g water 1°C" },
      { fromVal: "0.01 kJ", toVal: "2.39 cal", extra: "0.00239 kcal", extra2: "Small chemical micro-reaction" },
      { fromVal: "0.1 kJ", toVal: "23.90 cal", extra: "0.0239 kcal", extra2: "Human blink mechanical energy" },
      { fromVal: "0.5 kJ", toVal: "119.50 cal", extra: "0.1195 kcal", extra2: "Low-power LED lamp in 50s" },
      { fromVal: "1 kJ", toVal: "239.01 cal", extra: "0.239 kcal", extra2: "Base 1 kilojoule unit" },
      { fromVal: "2 kJ", toVal: "478.01 cal", extra: "0.478 kcal", extra2: "Finger tapping keyboard 1 hour" },
      { fromVal: "4.184 kJ", toVal: "1,000 cal", extra: "1.000 kcal", extra2: "Exactly 1 dietary Calorie" },
      { fromVal: "5 kJ", toVal: "1,195.03 cal", extra: "1.195 kcal", extra2: "Moderate physical exertion" },
      { fromVal: "10 kJ", toVal: "2,390.06 cal", extra: "2.390 kcal", extra2: "1 minute of stationary cycling" },
      { fromVal: "20 kJ", toVal: "4,780.11 cal", extra: "4.780 kcal", extra2: "Heat released burning 0.5g sucrose" },
      { fromVal: "50 kJ", toVal: "11,950.29 cal", extra: "11.95 kcal", extra2: "Sprint interval burst" },
      { fromVal: "100 kJ", toVal: "23,900.57 cal", extra: "23.90 kcal", extra2: "Boiling ~40g of water" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to cal Conversion",
    items: [
      {
        title: "Thermodynamic Bomb Calorimetry",
        text: "Calorimetry equipment measures heat output in Joules and kilojoules. Physical chemists convert these figures to calories to interface with legacy thermodynamic literature."
      },
      {
        title: "Biochemical Reaction Modeling",
        text: "Enzymatic reaction enthalpies and ATP hydrolysis energy are frequently referenced in small calorie units in micro-calorimetry modeling."
      },
      {
        title: "Educational Physics and Chemistry",
        text: "University physics and chemistry curricula routinely require students to convert between SI metric kilojoules and traditional calorie units when studying specific heat capacity."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Kilojoule to Calorie Calculations",
    items: [
      "Confusing small gram calories (cal) with dietary kilocalories (kcal or Cal): 1 kJ = 239.01 cal, but only 0.239 kcal.",
      "Using the International Table calorie (4.1868 J) instead of the thermochemical calorie (4.184 J) when thermochemical precision is required.",
      "Forgetting to multiply by 1,000 before dividing by 4.184 when converting from kilojoules instead of Joules.",
      "Rounding the factor 239.0057 prematurely in high-precision laboratory datasets."
    ]
  },
  faqs: [
    {
      question: "How many calories are in 1 kilojoule?",
      answer: "There are approximately 239.0057 small calories (gram calories) in 1 kilojoule under the thermochemical standard."
    },
    {
      question: "What is the formula to convert kilojoules to calories?",
      answer: "The exact conversion formula is: calories = (kilojoules × 1,000) ÷ 4.184."
    },
    {
      question: "Is a calorie the same as a food Calorie?",
      answer: "No. A small calorie (cal) is the energy to heat 1 gram of water by 1°C. A dietary food Calorie (with a capital C or kcal) equals 1,000 small calories (4.184 kJ)."
    },
    {
      question: "How many kilojoules are equal to 1,000 calories?",
      answer: "1,000 small calories equal exactly 4.184 kilojoules (which is also 1 dietary kilocalorie)."
    },
    {
      question: "Why are there different types of calories?",
      answer: "Historically, calories were defined at specific water temperatures (e.g., 15°C calorie = 4.1855 J, 20°C calorie = 4.182 J). Today, the thermochemical calorie (4.184 J) and International Table calorie (4.1868 J) are the primary recognized standards."
    },
    {
      question: "How do I convert 500 kJ to calories?",
      answer: "Multiply 500 by 239.005736: 500 × 239.005736 = 119,502.87 calories (or 119.50 kcal)."
    },
    {
      question: "Can I convert calories back to kilojoules easily?",
      answer: "Yes. To convert calories back to kilojoules, multiply the calorie value by 4.184 and divide by 1,000 (kJ = cal × 0.004184)."
    },
    {
      question: "What is 1 kJ in terms of everyday energy?",
      answer: "One kilojoule is roughly the energy required to lift a 100 kg weight by 1 meter, or the thermal energy dissipated by a resting adult in about 10 seconds."
    }
  ],
  relatedList: [
    { label: "Calorie to Kilojoule", from: "calorie", to: "kilojoule" },
    { label: "Kilojoule to Kilocalorie", from: "kilojoule", to: "kilocalorie" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
