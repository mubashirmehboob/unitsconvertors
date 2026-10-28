import { CustomArticleData } from "./types";

export const kilocalorieToWattHour: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "watt-hour",
  seoTitle: "Kilocalorie to Watt Hour Converter (kcal to Wh)",
  metaDescription: "Convert kilocalories to Watt Hours (kcal to Wh) with exact conversion factors. Learn thermodynamic-to-electrical formulas, worked examples, and practical tables.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-watt-hour",
  h1: "Kilocalorie to Watt Hour Converter",
  introduction: [
    "The kilocalorie (kcal) and the Watt Hour (Wh) quantify energy across thermal physics, human metabolism, and electrical engineering. While the kilocalorie represents thermal heat capacity in chemistry and dietary nutrition, the Watt Hour measures electrical energy expenditure over time.",
    "Connecting chemical and biological energy to electrical units requires converting calories to standard Joules and then to Watt Hours. Under standard thermochemical conventions, one kilocalorie contains 4,184 Joules. Because one Watt Hour equals exactly 3,600 Joules, one kilocalorie equals 4,184 divided by 3,600, or approximately 1.162222 Watt Hours.",
    "This reference explains the derivation between kilocalories and Watt Hours, provides step-by-step conversion examples for small and large values, details common engineering pitfalls, and supplies an extensive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to Watt Hours (Wh), multiply the kilocalorie value by 1.162222 (or multiply by 4,184 and divide by 3,600). For example, 100 kcal equals approximately 116.22 Wh.",
    formulaDisplay: "Wh = kcal × (4,184 ÷ 3,600) ≈ kcal × 1.162222",
    subtext: "1 kilocalorie ≈ 1.162222 Watt Hours; 1 Watt Hour ≈ 0.860421 kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), often termed the large calorie or dietary Calorie (with a capital C), represents the thermal energy needed to raise the temperature of one kilogram of pure water by one degree Celsius under standard atmospheric pressure. Under the thermochemical definition adopted by NIST and IUPAC, 1 kcal equals exactly 4,184 Joules (4.184 kJ). It serves as the primary unit for nutritional energy labels and combustion calorimetry."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is a unit of energy quantifying one Watt of power expended continuously for one hour. Since one Watt equals one Joule per second and one hour contains 3,600 seconds, one Watt Hour equals exactly 3,600 Joules (3.6 kJ). Watt Hours commonly rate portable battery capacities, micro-electronics power budgets, and localized solar generation systems."
  },
  relationship: "Both units evaluate energy through base Joules: 1 kcal equals 4,184 J, while 1 Wh equals 3,600 J. Dividing 4,184 by 3,600 yields the conversion factor: 1 kcal ≈ 1.162222 Wh, and 1 Wh ≈ 0.860421 kcal.",
  relationshipTitle: "Kilocalorie to Watt Hour Equivalence Values",
  relationshipItems: [
    { label: "1 kcal", value: "≈ 1.16222 Wh" },
    { label: "10 kcal", value: "≈ 11.6222 Wh" },
    { label: "100 kcal", value: "≈ 116.222 Wh" },
    { label: "860.42 kcal", value: "1,000.00 Wh (1.00 kWh)" },
    { label: "2,000 kcal", value: "≈ 2,324.44 Wh (2.324 kWh)" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 4,184 to find total Joules, then divide by 3,600 to find Watt Hours.",
    math: "Wh = (kcal * 4184) / 3600",
    subtext: "Simplified multiplier: Wh = kcal × 1.162222."
  },
  formulaTitle: "Kilocalorie to Watt Hour Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Rapid Mental Calculations",
    text: "For quick approximations, add roughly 16% to the kilocalorie value to estimate Watt Hours (for instance, 500 kcal + 80 = 580 Wh; exact value is 581.1 Wh). Conversely, multiply Watt Hours by 0.86 to estimate kilocalories."
  },
  expertNote: {
    title: "Thermochemical vs. International Table Calories",
    text: "While the thermochemical kilocalorie (4,184 J) is standard in modern chemistry and American nutritional labeling, the International Steam Table kilocalorie (kcal_IT) equals 4,186.8 J. Under the IT definition, 1 kcal_IT = 1.163 Wh exactly. For general engineering and nutrition, the difference is only 0.067%."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Nutritional Intake to Battery Equivalent",
        subtitle: "Convert a daily human dietary intake of 2,200 kcal into Watt Hours.",
        steps: [
          "State the given energy: 2,200 kcal.",
          "Multiply by the conversion factor: 2,200 × 1.162222 = 2,556.888 Wh.",
          "Express in practical units: 2,556.9 Wh (or roughly 2.56 kWh).",
          "Result: A 2,200 kcal diet supplies energy equivalent to running a 100-watt device for 25.6 hours."
        ]
      },
      {
        title: "Example 2: Exercise Calorie Burn on a Stationary Bike",
        subtitle: "Convert 450 kcal burned during a workout into electrical Watt Hours.",
        steps: [
          "State the energy value: 450 kcal.",
          "Convert to Joules: 450 × 4,184 = 1,882,800 J.",
          "Convert Joules to Watt Hours: 1,882,800 ÷ 3,600 = 523.00 Wh.",
          "Result: 450 kcal equals 523.0 Watt Hours."
        ]
      },
      {
        title: "Example 3: Small Thermal Reaction in a Laboratory Calorimeter",
        subtitle: "Convert 12.5 kcal of dissolved salt enthalpy into Watt Hours.",
        steps: [
          "State the energy value: 12.5 kcal.",
          "Apply the direct multiplier: 12.5 × 1.162222 = 14.5278 Wh.",
          "Result: 12.5 kcal equals approximately 14.53 Watt Hours."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to Watt Hour Conversion Table",
    headers: ["Kilocalories (kcal)", "Watt Hours (Wh)", "Kilowatt Hours (kWh)", "Joules (J)"],
    rows: [
      { fromVal: "1 kcal", toVal: "1.1622 Wh", extra: "0.00116 kWh", extra2: "4,184 J" },
      { fromVal: "5 kcal", toVal: "5.8111 Wh", extra: "0.00581 kWh", extra2: "20,920 J" },
      { fromVal: "10 kcal", toVal: "11.622 Wh", extra: "0.01162 kWh", extra2: "41,840 J" },
      { fromVal: "25 kcal", toVal: "29.056 Wh", extra: "0.02906 kWh", extra2: "104,600 J" },
      { fromVal: "50 kcal", toVal: "58.111 Wh", extra: "0.05811 kWh", extra2: "209,200 J" },
      { fromVal: "100 kcal", toVal: "116.22 Wh", extra: "0.11622 kWh", extra2: "418,400 J" },
      { fromVal: "250 kcal", toVal: "290.56 Wh", extra: "0.29056 kWh", extra2: "1,046,000 J" },
      { fromVal: "500 kcal", toVal: "581.11 Wh", extra: "0.58111 kWh", extra2: "2,092,000 J" },
      { fromVal: "860.42 kcal", toVal: "1,000.0 Wh", extra: "1.00000 kWh", extra2: "3,600,000 J" },
      { fromVal: "1,000 kcal", toVal: "1,162.2 Wh", extra: "1.16222 kWh", extra2: "4,184,000 J" },
      { fromVal: "2,000 kcal", toVal: "2,324.4 Wh", extra: "2.32444 kWh", extra2: "8,368,000 J" },
      { fromVal: "5,000 kcal", toVal: "5,811.1 Wh", extra: "5.81111 kWh", extra2: "20,920,000 J" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to Wh Conversion",
    items: [
      {
        title: "Fitness Equipment and Ergonometric Testing",
        text: "Gym machines calculate mechanical work performed in Watt Hours and biological metabolic consumption in kilocalories, accounting for human muscular efficiency (typically 20% to 25%)."
      },
      {
        title: "Emergency Power and Energy Harvesting",
        text: "Engineers designing off-grid human-powered generators (hand cranks, pedal dynamos) calculate the metabolic food calories required to recharge portable electronics and battery packs."
      },
      {
        title: "Thermal Management and Enclosure Cooling",
        text: "Electrical and HVAC engineers convert heat dissipation ratings of chemical burners or biological occupants (in kcal/h) into electrical chiller loads (in Wh and kWh)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small gram calories (cal) with kilocalories (kcal): 1 kcal = 1,000 cal. Using small calories produces an answer 1,000 times smaller than the true physical energy.",
      "Inverting the conversion factor: Dividing by 1.16222 instead of multiplying results in an incorrect, smaller value.",
      "Ignoring human mechanical efficiency: Converting 100 kcal of burned food into electrical output yields only 20 to 25 Wh of electrical work because the human body radiates roughly 75% to 80% as waste heat."
    ]
  },
  faqs: [
    {
      question: "How many Watt Hours are in 1 kilocalorie?",
      answer: "One thermochemical kilocalorie equals approximately 1.162222 Watt Hours."
    },
    {
      question: "How many kilocalories are in 1 Watt Hour?",
      answer: "One Watt Hour contains approximately 0.860421 kilocalories (or 860.421 small calories)."
    },
    {
      question: "What is the formula to convert kcal to Wh?",
      answer: "The formula is Wh = (kcal × 4,184) ÷ 3,600, which simplifies to Wh = kcal × 1.162222."
    },
    {
      question: "How many Watt Hours are in 2,000 kcal (a standard daily diet)?",
      answer: "2,000 kilocalories equal 2,324.44 Watt Hours (or approximately 2.324 kilowatt-hours)."
    },
    {
      question: "What is the difference between a Calorie with a capital C and a kilocalorie?",
      answer: "There is no difference in magnitude. Nutritional labels use Calorie (with a capital C) as an alternate name for the kilocalorie (1,000 small calories)."
    },
    {
      question: "How many Watt Hours does 500 kcal equal?",
      answer: "500 kcal × 1.162222 = 581.11 Watt Hours."
    },
    {
      question: "Why does the conversion factor involve 4,184 and 3,600?",
      answer: "One kilocalorie equals 4,184 Joules, and one Watt Hour equals 3,600 Joules (1 Watt × 3,600 seconds). Dividing 4,184 by 3,600 yields 1.162222."
    },
    {
      question: "How many kilocalories are needed to produce 100 Watt Hours of energy?",
      answer: "100 Wh × 0.860421 = 86.04 kilocalories at 100% conversion efficiency."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Kilowatt Hour", from: "kilocalorie", to: "kilowatt-hour" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Kilocalorie to BTU", from: "kilocalorie", to: "btu" },
    { label: "Watt Hour to Kilocalorie", from: "watt-hour", to: "kilocalorie" },
    { label: "Calorie to Watt Hour", from: "calorie", to: "watt-hour" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "International Organization for Standardization (ISO) 80000-5: Quantities and Units — Part 5: Thermodynamics.",
    "BIPM: The International System of Units (SI Brochure, 9th edition)."
  ]
};
