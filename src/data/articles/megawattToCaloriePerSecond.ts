import { CustomArticleData } from "./types";

export const megawattToCaloriePerSecond: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "calorie-per-second",
  seoTitle: "Megawatt to Calorie per Second Converter (MW to cal/s)",
  metaDescription: "Convert megawatts to calories per second (MW to cal/s). Learn the thermochemical conversion factor, calculation steps, lookup tables, and engineering FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-calorie-per-second",
  h1: "Megawatt to Calorie per Second Converter",
  introduction: [
    "The megawatt (MW) and the calorie per second (cal/s) quantify the rate of thermal and mechanical energy transfer across vastly different scales. While the megawatt represents the standard International System of Units (SI) metric for utility power grids, industrial power generation, and thermodynamic turbines, the calorie per second originates from classical calorimetry and thermochemistry.",
    "Bridging megawatts and calories per second is essential when comparing thermodynamic heat dissipation, cooling tower ratings, and chemical combustion rates against International System metrics. By international thermochemical definition, one calorie equals exactly 4.184 Joules. Because one megawatt equals one million Joules per second (1,000,000 J/s), one megawatt equals exactly 1,000,000 ÷ 4.184 ≈ 239,005.74 calories per second (approx. 239 kcal/s).",
    "This technical guide explains the mathematical relationship between megawatts and calories per second, outlines exact formulas, walks through practical industrial thermal examples, presents an engineering reference table, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert megawatts (MW) to calories per second (cal/s), multiply the megawatt value by 239,005.736 (or divide by 4.184 × 10⁻⁶). For example, a 2 MW industrial cooling loop transfers approximately 478,011.47 cal/s (478.01 kcal/s).",
    formulaDisplay: "cal/s = MW × 239,005.736",
    subtext: "1 megawatt equals exactly 1,000,000 J/s, which converts to approximately 239,005.74 thermochemical calories per second."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an SI decimal multiple of the watt, denoting one million watts or 1,000,000 Joules per second (1 MJ/s). It is the universal standard for rating electrical utility generators, industrial furnaces, locomotive propulsion systems, and nuclear reactor thermal output."
  },
  aboutTargetUnit: {
    title: "Understanding Calorie per Second (cal/s)",
    text: "The calorie per second (symbol: cal/s) is a metric unit of heat rate indicating the transfer of one thermochemical calorie (4.184 Joules) each second. It is historically prominent in physical chemistry, thermodynamic rate equations, and laboratory heat transfer studies."
  },
  relationship: "Because 1 megawatt equals 1,000,000 Joules per second and 1 thermochemical calorie equals 4.184 Joules, 1 MW = 1,000,000 ÷ 4.184 ≈ 239,005.736 cal/s (239.006 kcal/s). Conversely, 1 cal/s = 4.184 × 10⁻⁶ MW = 0.000004184 MW.",
  relationshipTitle: "Megawatt to Calorie per Second Ratio",
  relationshipItems: [
    { label: "0.004184 MW", value: "1,000 cal/s (1 kcal/s heat transfer rate)" },
    { label: "0.01 MW", value: "2,390.06 cal/s (Small boiler thermal release)" },
    { label: "0.1 MW", value: "23,900.57 cal/s (Commercial furnace duty)" },
    { label: "1.0 MW", value: "239,005.74 cal/s (239.01 kcal/s baseline unit)" },
    { label: "10.0 MW", value: "2,390,057.36 cal/s (2.39 Mcal/s district heating plant)" }
  ],
  formula: {
    text: "Multiply the power in megawatts by 239,005.736 to obtain calories per second.",
    math: "cal_per_sec = MW * 239005.736",
    subtext: "For kilocalories per second: kcal/s = MW × 239.005736"
  },
  formulaTitle: "Megawatt to Calorie per Second Formula",
  practicalTip: {
    title: "Quick 240 Rule for Rapid Mental Estimation",
    text: "For fast field estimates, multiply megawatts by 240 to get kilocalories per second (kcal/s). For instance, 5 MW is roughly 1,200 kcal/s (exact: 1,195.03 kcal/s), providing an error under 0.4%."
  },
  expertNote: {
    title: "Thermochemical Calorie vs International Table Calorie",
    text: "Standard engineering uses the thermochemical calorie (1 cal = 4.184 J). If using the International Table calorie (1 cal_IT = 4.1868 J), 1 MW equals 238,845.90 cal_IT/s. The difference is less than 0.07%, but high-precision thermodynamic balance sheets should specify which standard applies."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Cooling Tower Thermal Duty",
        subtitle: "Convert a 3.5 MW cooling tower heat rejection capacity to calories per second.",
        steps: [
          "State the heat rejection power: 3.5 MW.",
          "Apply the conversion factor: cal/s = 3.5 × 239,005.736.",
          "Multiply: 3.5 × 239,005.736 = 836,520.08 cal/s.",
          "Convert to kcal/s for convenience: 836,520.08 ÷ 1,000 = 836.52 kcal/s.",
          "Result: 3.5 MW equals approximately 836,520 cal/s (836.52 kcal/s)."
        ]
      },
      {
        title: "Example 2: Biomass Gasifier Output",
        subtitle: "Calculate the heat release in cal/s for a 0.75 MW biomass thermal gasifier.",
        steps: [
          "Identify the power: 0.75 MW.",
          "Use the formula: cal/s = 0.75 × 239,005.736.",
          "Compute: 0.75 × 239,005.736 = 179,254.30 cal/s.",
          "Result: 0.75 MW corresponds to 179,254.3 cal/s."
        ]
      },
      {
        title: "Example 3: Electric Arc Furnace Power Rating",
        subtitle: "Determine the instantaneous calorie dissipation of a 15 MW electric furnace.",
        steps: [
          "Identify furnace electrical power: 15 MW.",
          "Multiply by 239,005.736: 15 × 239,005.736 = 3,585,086.04 cal/s.",
          "Express in megacalories per second: 3,585,086.04 ÷ 1,000,000 ≈ 3.585 Mcal/s.",
          "Result: 15 MW equals approximately 3,585,086 cal/s (3.585 Mcal/s)."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Calorie per Second Conversion Table",
    headers: ["Megawatts (MW)", "Calories per Second (cal/s)", "Kilocalories per Second (kcal/s)", "Context / Industrial Application"],
    rows: [
      { fromVal: "0.01 MW", toVal: "2,390.06 cal/s", extra: "2.39 kcal/s", extra2: "Commercial space heating burner" },
      { fromVal: "0.05 MW", toVal: "11,950.29 cal/s", extra: "11.95 kcal/s", extra2: "Small industrial fluid heater" },
      { fromVal: "0.10 MW", toVal: "23,900.57 cal/s", extra: "23.90 kcal/s", extra2: "Medium greenhouse heating plant" },
      { fromVal: "0.25 MW", toVal: "59,751.43 cal/s", extra: "59.75 kcal/s", extra2: "Hospital backup diesel generator thermal load" },
      { fromVal: "0.50 MW", toVal: "119,502.87 cal/s", extra: "119.50 kcal/s", extra2: "Food processing retort autoclave steam demand" },
      { fromVal: "1.00 MW", toVal: "239,005.74 cal/s", extra: "239.01 kcal/s", extra2: "1 MW base thermal energy baseline" },
      { fromVal: "2.00 MW", toVal: "478,011.47 cal/s", extra: "478.01 kcal/s", extra2: "District heating pumping station duty" },
      { fromVal: "5.00 MW", toVal: "1,195,028.68 cal/s", extra: "1,195.03 kcal/s", extra2: "Chemical reactor exotherm dissipation system" },
      { fromVal: "10.00 MW", toVal: "2,390,057.36 cal/s", extra: "2,390.06 kcal/s", extra2: "Utility gas turbine auxiliary heat exchanger" },
      { fromVal: "25.00 MW", toVal: "5,975,143.40 cal/s", extra: "5,975.14 kcal/s", extra2: "Pulp mill liquor recovery heat system" },
      { fromVal: "50.00 MW", toVal: "11,950,286.81 cal/s", extra: "11,950.29 kcal/s", extra2: "Combined-cycle heat recovery steam generator" },
      { fromVal: "100.00 MW", toVal: "23,900,573.61 cal/s", extra: "23,900.57 kcal/s", extra2: "Subcritical thermal power plant condenser loop" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to cal/s Conversion",
    items: [
      {
        title: "Calorimetric Verification of Turbines",
        text: "Thermal efficiency testing teams convert mechanical and electrical megawatts to calorimetric heat rates to confirm turbine energy balance equations."
      },
      {
        title: "Chemical Process Heat Exchange",
        text: "Petrochemical process engineers convert high-energy flare and furnace duties between SI megawatts and calorie-based heat transfer rates for legacy plant manuals."
      },
      {
        title: "Nuclear Reactor Core Heat Balance",
        text: "Nuclear physicists calculate core fission heat output in megawatts thermal (MWth) and translate values into calorie flow rates for coolant mass flow calibrations."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 MW is an enormous amount of power, so the calorie per second number must always be in the hundreds of thousands.",
      "Confusing calories per second with calories per hour: Multiplying by 3,600 converts per-second rates to per-hour rates. Ensure time units are aligned.",
      "Confusing food calories (kcal) with small calories: A dietary calorie is 1,000 small gram calories (1 kcal = 4,184 J). Make sure not to mix up cal/s and kcal/s."
    ]
  },
  faqs: [
    {
      question: "How many calories per second are in 1 megawatt?",
      answer: "1 megawatt contains approximately 239,005.74 thermochemical calories per second (or about 239.01 kilocalories per second)."
    },
    {
      question: "What is the formula to convert megawatts to calories per second?",
      answer: "The formula is: cal/s = megawatts × 239,005.736. Alternatively, cal/s = (MW × 1,000,000) ÷ 4.184."
    },
    {
      question: "How do I convert calories per second back to megawatts?",
      answer: "Multiply the calories per second by 4.184 and divide by 1,000,000, or divide cal/s directly by 239,005.736."
    },
    {
      question: "How many kilocalories per second are in 1 megawatt?",
      answer: "1 megawatt equals approximately 239.006 kilocalories per second (kcal/s)."
    },
    {
      question: "Why is 4.184 used in the conversion?",
      answer: "The factor 4.184 is the exact definition of one thermochemical calorie in Joules. Because 1 MW equals 1,000,000 Joules per second, dividing 1,000,000 by 4.184 gives 239,005.736 cal/s."
    },
    {
      question: "What is 5 MW in calories per second?",
      answer: "5 MW × 239,005.736 = 1,195,028.68 cal/s (approx. 1,195 kcal/s)."
    },
    {
      question: "How does cal/s relate to BTU per hour?",
      answer: "Both measure thermal power. 1 cal/s equals approximately 14.286 BTU/h. Therefore, 239,005.74 cal/s in 1 MW corresponds to approximately 3,412,142 BTU/h."
    },
    {
      question: "Is this based on the thermochemical or international table calorie?",
      answer: "This calculation is based on the thermochemical calorie (4.184 J). Under the International Table definition (4.1868 J), 1 MW equals 238,845.90 cal/s."
    }
  ],
  relatedList: [
    { label: "Calorie per Second to Megawatt", from: "calorie-per-second", to: "megawatt" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to BTU per Hour", from: "megawatt", to: "btu-per-hour" },
    { label: "Kilowatt to Calorie per Second", from: "kilowatt", to: "calorie-per-second" }
  ],
  references: [
    "BIPM (Bureau International des Poids et Mesures) - The International System of Units (SI).",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
