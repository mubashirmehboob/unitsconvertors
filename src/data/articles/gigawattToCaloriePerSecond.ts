import { CustomArticleData } from "./types";

export const gigawattToCaloriePerSecond: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "calorie-per-second",
  seoTitle: "Gigawatt to Calorie per Second Converter (GW to cal/s)",
  metaDescription: "Convert gigawatts to calories per second (GW to cal/s) with thermodynamic precision. Nuclear heat rates, conversion formulas, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-calorie-per-second",
  h1: "Gigawatt to Calorie per Second Converter",
  introduction: [
    "The gigawatt (GW) and the calorie per second (cal/s) represent rates of energy transfer and heat release at opposite extremes of scientific practice. While the gigawatt is the global metric for regional electricity grids, nuclear power stations, and continental renewable production, the calorie per second is rooted in fundamental calorimetry, physical chemistry, and classical thermodynamics.",
    "Connecting gigawatts to calories per second is critical in reactor core thermal analysis, high-energy plasma physics, and large-scale industrial heat dissipation. By international thermochemical standard, one calorie equals exactly 4.184 Joules. Because one gigawatt represents one billion Joules per second (1,000,000,000 J/s), one gigawatt equals 1,000,000,000 ÷ 4.184 ≈ 239,005,736.14 calories per second (approximately 239.01 megacalories per second).",
    "This technical guide details the mathematical conversion, outlines step-by-step nuclear and thermodynamic calculations, provides an exhaustive engineering reference table, reviews practical use cases, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to calories per second (cal/s), multiply the gigawatt value by 239,005,736.14 (or divide by 4.184 × 10⁻⁹). For example, a 1 GW nuclear core transfers approximately 239,005,736 cal/s (239.01 Mcal/s) of heat into the primary coolant loop.",
    formulaDisplay: "cal/s = GW × 239,005,736.14",
    subtext: "1 gigawatt represents approximately 239 million calories per second (approx. 239,006 kcal/s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an SI decimal multiple equal to one billion watts (10⁹ W or 1,000,000,000 Joules per second). It serves as the primary metric for national grid capacities, major hydroelectric dams, and nuclear reactor thermal output ratings."
  },
  aboutTargetUnit: {
    title: "Understanding Calorie per Second (cal/s)",
    text: "The calorie per second (symbol: cal/s) is a metric unit of heat transfer indicating the dissipation of one thermochemical calorie (4.184 Joules) per second. Large values are commonly expressed in kilocalories per second (kcal/s) or megacalories per second (Mcal/s)."
  },
  relationship: "Because 1 GW equals 1,000,000,000 Joules per second and 1 thermochemical calorie equals 4.184 Joules, 1 GW = 10⁹ ÷ 4.184 ≈ 239,005,736.14 cal/s (239,005.74 kcal/s). Conversely, 1 cal/s = 4.184 × 10⁻⁹ GW = 0.000000004184 GW.",
  relationshipTitle: "Gigawatt to Calorie per Second Equivalence",
  relationshipItems: [
    { label: "0.000004184 GW", value: "1,000 cal/s (1 kcal/s laboratory thermal rate)" },
    { label: "0.001 GW", value: "239,005.74 cal/s (1 MW industrial heat dissipation)" },
    { label: "0.1 GW", value: "23,900,573.61 cal/s (100 MW district heating loop)" },
    { label: "0.5 GW", value: "119,502,868.07 cal/s (500 MW thermal turbine condenser heat)" },
    { label: "1.0 GW", value: "239,005,736.14 cal/s (1 GW base thermal generation benchmark)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 239,005,736.14 to calculate calories per second.",
    math: "cal_per_sec = GW * 239005736.14",
    subtext: "For megacalories per second: Mcal/s = GW × 239.005736"
  },
  formulaTitle: "Gigawatt to Calorie per Second Conversion Formula",
  practicalTip: {
    title: "The 239 Mcal/s Rule",
    text: "To rapidly estimate grid-scale heat transfer, remember that 1 GW is approximately 239 megacalories per second (Mcal/s). Multiply gigawatts by 239 to obtain Mcal/s instantly."
  },
  expertNote: {
    title: "Primary Coolant Mass Flow Sizing",
    text: "Nuclear engineers calculate primary reactor coolant circulation by dividing heat release in calories per second by the specific heat of water (1 cal/g·°C) and the design temperature rise (ΔT in °C), directly yielding required coolant mass flow in grams per second."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Nuclear Reactor Core Thermal Output",
        subtitle: "Convert a 3.4 GW thermal (GWth) pressurized water reactor core rating to calories per second.",
        steps: [
          "Identify the thermal rating in gigawatts: 3.4 GW.",
          "Apply the formula: cal/s = 3.4 × 239,005,736.14.",
          "Multiply: 3.4 × 239,005,736.14 = 812,619,502.88 cal/s.",
          "Express in megacalories per second: 812,619,502.88 ÷ 1,000,000 = 812.62 Mcal/s.",
          "Result: 3.4 GW equals approximately 812,619,503 cal/s (812.62 Mcal/s)."
        ]
      },
      {
        title: "Example 2: District Energy Thermal Network",
        subtitle: "Convert 0.25 GW of municipal waste-to-energy district heat to cal/s.",
        steps: [
          "State the capacity: 0.25 GW.",
          "Calculate: 0.25 × 239,005,736.14 = 59,751,434.04 cal/s.",
          "Result: 0.25 GW equals approximately 59,751,434 cal/s (59.75 Mcal/s)."
        ]
      },
      {
        title: "Example 3: Fusion Tokamak Divertor Heat Flux",
        subtitle: "Convert 0.05 GW of instantaneous divertor heat exhaust in an experimental fusion tokamak to cal/s.",
        steps: [
          "Identify the power: 0.05 GW.",
          "Compute: 0.05 × 239,005,736.14 = 11,950,286.81 cal/s.",
          "Result: 0.05 GW equals approximately 11,950,287 cal/s (11.95 Mcal/s)."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to Calorie per Second Conversion Table",
    headers: ["Gigawatts (GW)", "Calories per Second (cal/s)", "Megacalories/s (Mcal/s)", "Thermal Infrastructure Scale"],
    rows: [
      { fromVal: "0.001 GW", toVal: "239,005.74 cal/s", extra: "0.24 Mcal/s", extra2: "Small industrial fluid furnace" },
      { fromVal: "0.005 GW", toVal: "1,195,028.68 cal/s", extra: "1.20 Mcal/s", extra2: "Campus auxiliary hot water boiler" },
      { fromVal: "0.01 GW", toVal: "2,390,057.36 cal/s", extra: "2.39 Mcal/s", extra2: "Commercial district heating plant" },
      { fromVal: "0.05 GW", toVal: "11,950,286.81 cal/s", extra: "11.95 Mcal/s", extra2: "Petrochemical process heater" },
      { fromVal: "0.10 GW", toVal: "23,900,573.61 cal/s", extra: "23.90 Mcal/s", extra2: "Industrial cogeneration facility" },
      { fromVal: "0.25 GW", toVal: "59,751,434.04 cal/s", extra: "59.75 Mcal/s", extra2: "Combined-cycle heat recovery block" },
      { fromVal: "0.50 GW", toVal: "119,502,868.07 cal/s", extra: "119.50 Mcal/s", extra2: "Subcritical coal boiler thermal duty" },
      { fromVal: "1.00 GW", toVal: "239,005,736.14 cal/s", extra: "239.01 Mcal/s", extra2: "Standard nuclear reactor electric output" },
      { fromVal: "1.21 GW", toVal: "289,196,940.73 cal/s", extra: "289.20 Mcal/s", extra2: "Iconic cinematic power reference" },
      { fromVal: "2.00 GW", toVal: "478,011,472.28 cal/s", extra: "478.01 Mcal/s", extra2: "Large dual-unit generating station" },
      { fromVal: "3.00 GW", toVal: "717,017,208.42 cal/s", extra: "717.02 Mcal/s", extra2: "Commercial nuclear core thermal heat" },
      { fromVal: "5.00 GW", toVal: "1,195,028,680.70 cal/s", extra: "1,195.03 Mcal/s", extra2: "Mega-scale power generation complex" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to cal/s Conversion",
    items: [
      {
        title: "Nuclear Reactor Thermal Hydraulics",
        text: "Safety systems engineers convert core fission power in gigawatts to calories per second to verify emergency core cooling system (ECCS) water injection requirements during loss-of-coolant incidents."
      },
      {
        title: "Astrophysical and Atmospheric Energy Modeling",
        text: "Meteorologists and atmospheric scientists evaluate extreme storm heat release and solar irradiance in gigawatts and translate to calorie flux across ocean surfaces."
      },
      {
        title: "High-Temperature Metallurgical Arc Furnaces",
        text: "Metallurgists convert electric power feed in fractional gigawatts to calories per second to model molten steel slag temperature progression and heat loss."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 GW produces roughly 239 million calories per second; division produces an erroneously minute quantity.",
      "Confusing calories per second with calories per hour: Multiplying by 3,600 converts per-second values to per-hour values. Keep time bases consistent.",
      "Confusing small gram calories with dietary Calories (kcal): 1 dietary Calorie equals 1,000 gram calories. 1 GW equals 239,005.74 kcal/s, not 239,005,736 kcal/s."
    ]
  },
  faqs: [
    {
      question: "How many calories per second are in 1 gigawatt?",
      answer: "There are approximately 239,005,736.14 thermochemical calories per second (or about 239.01 megacalories per second) in 1 gigawatt."
    },
    {
      question: "What is the formula to convert gigawatts to calories per second?",
      answer: "The formula is: cal/s = gigawatts × 239,005,736.14 (or cal/s = GW × 10⁹ ÷ 4.184)."
    },
    {
      question: "How do I convert calories per second back to gigawatts?",
      answer: "Divide the calories per second by 239,005,736.14 (or multiply cal/s by 4.184 × 10⁻⁹)."
    },
    {
      question: "How many kilocalories per second are in 1 gigawatt?",
      answer: "1 gigawatt equals approximately 239,005.74 kilocalories per second (kcal/s)."
    },
    {
      question: "What is 1.21 GW in calories per second?",
      answer: "1.21 GW equals approximately 289,196,941 calories per second (289.20 Mcal/s)."
    },
    {
      question: "Why is 4.184 used in this conversion?",
      answer: "4.184 is the exact Joule equivalent of one thermochemical calorie. Because 1 GW equals 1,000,000,000 Joules per second, dividing 1,000,000,000 by 4.184 gives 239,005,736.14 cal/s."
    },
    {
      question: "What is 0.5 GW in calories per second?",
      answer: "0.5 GW equals approximately 119,502,868 cal/s (119.50 Mcal/s)."
    },
    {
      question: "Does this differ under the International Table (IT) calorie standard?",
      answer: "Yes, using the International Table calorie (1 cal_IT = 4.1868 J), 1 GW equals 238,845,896.63 cal_IT/s—a minor 0.07% difference."
    }
  ],
  relatedList: [
    { label: "Calorie per Second to Gigawatt", from: "calorie-per-second", to: "gigawatt" },
    { label: "Megawatt to Calorie per Second", from: "megawatt", to: "calorie-per-second" },
    { label: "Gigawatt to BTU per Hour", from: "gigawatt", to: "btu-per-hour" },
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" }
  ],
  references: [
    "BIPM - SI Brochure: The International System of Units (9th Edition).",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
