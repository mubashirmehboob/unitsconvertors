import { CustomArticleData } from "./types";

export const jouleToCalorie: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "calorie",
  seoTitle: "Joule to Calorie Converter (J to cal)",
  metaDescription: "Convert Joules to calories (J to cal) accurately. Learn the thermochemical factor 4.184, conversion formula, step-by-step examples, tables, and FAQs.",
  h1: "Joule to Calorie Converter",
  introduction: [
    "The Joule (J) and the calorie (cal) are two fundamental units used to quantify heat, mechanical work, and thermodynamic energy. The Joule is the standard metric unit defined by the International System of Units (SI), whereas the calorie is a historical thermal unit based on the specific heat capacity of water.",
    "Converting Joules to calories is widely necessary in physical chemistry, thermodynamics, thermal engineering, and biology. By international agreement, one thermochemical calorie is defined as exactly 4.184 Joules. Consequently, converting Joules to calories requires dividing the Joule value by 4.184 (or multiplying by approximately 0.2390057).",
    "This guide explains the scientific definition of both units, provides the exact conversion formula, walks through manual calculation steps, presents a reference conversion table, and answers key questions about energy measurement."
  ],
  quickAnswer: {
    text: "To convert Joules to calories (gram calories), divide the energy value in Joules by 4.184. For instance, 10 Joules equals approximately 2.39 calories, and 100 Joules equals approximately 23.90 calories.",
    formulaDisplay: "cal = J ÷ 4.184",
    subtext: "One Joule is equal to approximately 0.2390057 gram calories."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the coherent derived SI unit of energy. Defined in mechanics as one Newton-meter (1 N·m), it represents the energy expended when applying a force of one Newton over a displacement of one meter. In electrical systems, one Joule equals the energy released by one Watt of electrical power flowing for one second (1 W·s)."
  },
  aboutTargetUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie or gram calorie (symbol: cal) was originally defined as the heat required to raise the temperature of 1 gram of liquid water by 1°C at standard atmospheric pressure. Because water's heat capacity varies slightly with temperature, standardizing bodies established the thermochemical calorie, defined strictly as 4.184 Joules. Note that the small calorie (cal) is 1/1000th of a food Calorie (kcal or Cal)."
  },
  relationship: "The exact relationship between Joules and small calories is governed by the thermochemical constant: 1 cal = 4.184 J exactly. Conversely, 1 J = 1 / 4.184 cal ≈ 0.239005736 cal.",
  relationshipTitle: "Joule vs Gram Calorie Energy Scale",
  relationshipItems: [
    { label: "1 J", value: "0.23901 cal (Energy to heat 1g water by 0.239°C)" },
    { label: "4.184 J", value: "1 cal (Heat needed to raise 1g water by 1°C)" },
    { label: "10 J", value: "2.3901 cal (Energy delivered by 10 Watts for 1 second)" },
    { label: "100 J", value: "23.9006 cal (Work to lift 10 kg by 1 meter)" },
    { label: "1,000 J", value: "239.0057 cal (1 Kilojoule)" }
  ],
  formula: {
    text: "Divide the energy value in Joules by 4.184 to get the result in small calories.",
    math: "cal = J / 4.184",
    subtext: "To convert small calories back to Joules, multiply the calorie value by 4.184."
  },
  formulaTitle: "Joule to Calorie Formula",
  practicalTip: {
    title: "Quick Estimation Tip",
    text: "To quickly estimate calories from Joules in your head, multiply by 0.24 (e.g., 20 J × 0.24 = 4.8 cal, very close to the exact 4.78 cal)."
  },
  expertNote: {
    title: "Gram Calorie vs Food Calorie",
    text: "Always distinguish between the small gram calorie (cal) used in physics and chemistry, and the large food Calorie (kcal or Cal) used on dietary labels. 1 kcal = 1,000 cal = 4,184 J."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Heat Measurement",
        subtitle: "Convert a chemical reaction energy release of 250 Joules to small calories.",
        steps: [
          "Identify the energy in Joules: 250 J.",
          "Apply the formula: cal = 250 ÷ 4.184.",
          "Calculate: 250 ÷ 4.184 = 59.7514.",
          "Result: 250 Joules is equal to approximately 59.75 calories."
        ]
      },
      {
        title: "Example 2: Laser Pulse Energy",
        subtitle: "Convert a laser emission of 50 Joules to calories.",
        steps: [
          "Identify the energy: 50 J.",
          "Divide by 4.184: 50 ÷ 4.184 = 11.9502.",
          "Result: 50 J equals approximately 11.95 cal."
        ]
      },
      {
        title: "Example 3: Electric Heating Element Output",
        subtitle: "Convert 1,000 Joules of resistor heat into small calories.",
        steps: [
          "Identify the energy: 1,000 J.",
          "Divide by 4.184: 1,000 ÷ 4.184 = 239.0057.",
          "Result: 1,000 J equals approximately 239.01 cal."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Calorie Conversion Table",
    headers: ["Joules (J)", "Calories (cal)", "Equivalent Measurement"],
    rows: [
      { fromVal: "1 J", toVal: "0.2390 cal", extra: "0.239°C temperature rise in 1g water" },
      { fromVal: "2 J", toVal: "0.4780 cal", extra: "2 Watt-seconds of electrical energy" },
      { fromVal: "4.184 J", toVal: "1.0000 cal", extra: "Exactly 1 thermochemical gram calorie" },
      { fromVal: "10 J", toVal: "2.3901 cal", extra: "10 Newton-meters of physical work" },
      { fromVal: "25 J", toVal: "5.9751 cal", extra: "Work to lift 2.5 kg by 1 meter" },
      { fromVal: "50 J", toVal: "11.9503 cal", extra: "Heat capacity of small micro-reaction" },
      { fromVal: "100 J", toVal: "23.9006 cal", extra: "Kinetic energy of a thrown baseball" },
      { fromVal: "250 J", toVal: "59.7514 cal", extra: "Energy in a small camera flash burst" },
      { fromVal: "500 J", toVal: "119.5029 cal", extra: "0.5 Kilojoules" },
      { fromVal: "1,000 J", toVal: "239.0057 cal", extra: "1 Kilojoule (kJ)" },
      { fromVal: "4,184 J", toVal: "1,000.0 cal", extra: "1 Kilocalorie (kcal or dietary Calorie)" }
    ]
  },
  applications: {
    title: "Practical Applications of J to cal Conversion",
    items: [
      {
        title: "Physical Chemistry & Calorimetry",
        text: "Thermochemistry laboratories use bomb calorimeters that yield data in Joules. Researchers convert these values to calories when comparing historical thermochemical literature."
      },
      {
        title: "Biochemical Energetics",
        text: "Enzymatic hydrolysis and ATP turnover calculations are documented in both Joules and calories across metabolic research papers."
      },
      {
        title: "Thermal Physics Demonstrations",
        text: "Physics classrooms convert electrical work (Joules) measured across a heating coil into liquid water temperature rise (calories) to demonstrate the mechanical equivalent of heat."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing small calories (cal) with food Calories (kcal/Cal): 1 food Calorie equals 1,000 small calories (4,184 J).",
      "Using the 15°C or IT calorie factor by mistake: Standard thermochemical conversions use 4.184 J, whereas the International Table (IT) calorie uses 4.1868 J.",
      "Dividing in the wrong direction: Remember 1 calorie is bigger than 1 Joule, so the number in calories must be smaller than the number in Joules."
    ]
  },
  faqs: [
    {
      question: "How many calories are in 1 Joule?",
      answer: "There are approximately 0.2390057 calories in 1 Joule (specifically, 1 ÷ 4.184 cal)."
    },
    {
      question: "What is the exact conversion factor between Joules and calories?",
      answer: "By international thermochemical definition, 1 calorie equals exactly 4.184 Joules."
    },
    {
      question: "What is the formula to convert J to cal?",
      answer: "The formula is: cal = J ÷ 4.184."
    },
    {
      question: "Is 4.184 Joules equal to 1 calorie?",
      answer: "Yes, 4.184 Joules equals exactly 1 thermochemical gram calorie."
    },
    {
      question: "What is the difference between cal and kcal?",
      answer: "A small calorie (cal) is the energy needed to heat 1 gram of water by 1°C. A kilocalorie (kcal or dietary Calorie) is 1,000 small calories, enough to heat 1 kilogram (1 liter) of water by 1°C."
    },
    {
      question: "How do I convert calories back to Joules?",
      answer: "To convert calories to Joules, multiply the calorie value by 4.184 (e.g., 50 cal × 4.184 = 209.2 J)."
    },
    {
      question: "Why does water require 4.184 Joules per gram per degree Celsius?",
      answer: "Water has a high specific heat capacity due to strong intermolecular hydrogen bonding, making 4.184 J/g·°C the fundamental thermal constant of liquid water."
    }
  ],
  relatedList: [
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" },
    { label: "Joule to BTU", from: "joule", to: "btu" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "IUPAC Compendium of Chemical Terminology (Gold Book) - Calorie Definition."
  ]
};
