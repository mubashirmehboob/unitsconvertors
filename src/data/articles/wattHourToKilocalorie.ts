import { CustomArticleData } from "./types";

export const wattHourToKilocalorie: CustomArticleData = {
  fromUnitId: "watt-hour",
  toUnitId: "kilocalorie",
  seoTitle: "Watt Hour to Kilocalorie Converter (Wh to kcal)",
  metaDescription: "Convert Watt Hours to kilocalories (Wh to kcal) with exact conversion factors. Learn electrical-to-thermal formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/watt-hour-to-kilocalorie",
  h1: "Watt Hour to Kilocalorie Converter",
  introduction: [
    "The Watt Hour (Wh) and the kilocalorie (kcal) represent the practical meeting point between electrical energy and thermal heat. While the Watt Hour measures electrical energy stored in batteries or consumed by appliances, the kilocalorie is the universal metric for heating systems, chemical reactions, and human nutritional metabolism.",
    "Evaluating how much electrical energy is needed to provide equivalent thermal heating or understanding how battery storage compares to human metabolic food energy requires an exact physical conversion. Because one Watt Hour equals 3,600 Joules and one thermochemical kilocalorie equals 4,184 Joules, one Watt Hour equals 3,600 divided by 4,184, or approximately 0.860421 kilocalories.",
    "This guide provides the mathematical formula, detailed step-by-step calculation examples, an expansive conversion table, and answers to common questions about thermal and electrical systems."
  ],
  quickAnswer: {
    text: "To convert Watt Hours (Wh) to kilocalories (kcal), multiply the Watt Hour value by 0.860421 (or multiply by 3,600 and divide by 4,184). For example, 100 Wh equals approximately 86.04 kcal.",
    formulaDisplay: "kcal = Wh × (3,600 ÷ 4,184) ≈ Wh × 0.860421",
    subtext: "1 Watt Hour ≈ 0.860421 kilocalories; 1 kilocalorie ≈ 1.162222 Watt Hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is an energy unit representing one Watt of power expended continuously for one hour. Since one Watt equals one Joule per second and one hour contains 3,600 seconds, one Watt Hour is equivalent to exactly 3,600 Joules (3.6 kJ). It is standard globally for rating power tool batteries, laptop power supplies, electric bike packs, and portable generators."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), also known as the large calorie or dietary Calorie (with an uppercase C), is defined as the heat required to raise the temperature of one kilogram of water by one degree Celsius under standard atmospheric pressure. Under the thermochemical definition accepted by NIST, one kilocalorie is defined as exactly 4,184 Joules (4.184 kJ). It is the primary unit of food energy and combustion heat."
  },
  relationship: "The relationship between Watt Hours and kilocalories is grounded in their SI definitions: 1 Wh = 3,600 J, and 1 kcal = 4,184 J. Dividing 3,600 by 4,184 establishes the conversion factor: 1 Wh ≈ 0.860421 kcal. Inversely, 1 kcal equals approximately 1.162222 Wh (roughly 1.16 Wh).",
  relationshipTitle: "Watt Hour to Kilocalorie Equivalence Values",
  relationshipItems: [
    { label: "1 Wh", value: "≈ 0.860421 kcal" },
    { label: "10 Wh", value: "≈ 8.60421 kcal" },
    { label: "50 Wh", value: "≈ 43.0210 kcal" },
    { label: "100 Wh", value: "≈ 86.0421 kcal" },
    { label: "1.1622 Wh", value: "1.00000 kcal (exactly 4,184 J)" },
    { label: "1,000 Wh (1 kWh)", value: "≈ 860.421 kcal" }
  ],
  formula: {
    text: "Multiply the energy in Watt Hours by 3,600 to find total Joules, then divide by 4,184 to calculate kilocalories.",
    math: "kcal = (Wh * 3600) / 4184",
    subtext: "Simplified multiplier: kcal = Wh × 0.860421."
  },
  formulaTitle: "Watt Hour to Kilocalorie Conversion Formula",
  practicalTip: {
    title: "Mental Math Rule of Thumb",
    text: "To quickly estimate kilocalories from Watt Hours, subtract roughly 14% from the Watt Hour value (or multiply by 0.86). For instance, 100 Wh minus 14 equals approximately 86 kcal (exact value is 86.04 kcal)."
  },
  expertNote: {
    title: "Thermodynamic Equivalence in Human Energy",
    text: "A 500 Wh electric bicycle battery holds about 430 kcal of chemical energy—equivalent to the nutritional energy in a single blueberry muffin. However, because electric motors achieve 85% to 90% efficiency while human muscles operate at only 20% to 25% efficiency, a 500 Wh battery can propel a cyclist significantly further than that same 430 kcal consumed as food."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: E-Bike Battery Energy to Nutritional Calories",
        subtitle: "Convert a 625 Wh electric bicycle battery pack into kilocalories.",
        steps: [
          "State the energy in Watt Hours: 625 Wh.",
          "Multiply by the conversion factor: 625 × 0.860421 = 537.763 kcal.",
          "Round to sensible precision: 537.8 kcal.",
          "Result: A 625 Wh battery pack stores roughly 538 kilocalories of potential energy."
        ]
      },
      {
        title: "Example 2: Immersion Water Heater Energy",
        subtitle: "Convert 150 Wh of electrical energy used to boil water into kilocalories.",
        steps: [
          "State the energy value: 150 Wh.",
          "Convert to Joules: 150 × 3,600 = 540,000 J.",
          "Convert Joules to kilocalories: 540,000 ÷ 4,184 = 129.063 kcal.",
          "Result: 150 Wh delivers approximately 129.1 kilocalories of heat."
        ]
      },
      {
        title: "Example 3: Laptop Battery Stored Energy",
        subtitle: "Convert a 70 Wh laptop battery capacity into kilocalories.",
        steps: [
          "State the battery capacity: 70 Wh.",
          "Calculate: 70 × 0.860421 = 60.229 kcal.",
          "Result: 70 Wh equals approximately 60.23 kilocalories."
        ]
      }
    ]
  },
  table: {
    title: "Watt Hour to Kilocalorie Conversion Table",
    headers: ["Watt Hours (Wh)", "Kilocalories (kcal)", "Kilojoules (kJ)", "BTU"],
    rows: [
      { fromVal: "1 Wh", toVal: "0.8604 kcal", extra: "3.6 kJ", extra2: "3.412 BTU" },
      { fromVal: "5 Wh", toVal: "4.3021 kcal", extra: "18.0 kJ", extra2: "17.06 BTU" },
      { fromVal: "10 Wh", toVal: "8.6042 kcal", extra: "36.0 kJ", extra2: "34.12 BTU" },
      { fromVal: "25 Wh", toVal: "21.511 kcal", extra: "90.0 kJ", extra2: "85.30 BTU" },
      { fromVal: "50 Wh", toVal: "43.021 kcal", extra: "180.0 kJ", extra2: "170.6 BTU" },
      { fromVal: "75 Wh", toVal: "64.532 kcal", extra: "270.0 kJ", extra2: "255.9 BTU" },
      { fromVal: "100 Wh", toVal: "86.042 kcal", extra: "360.0 kJ", extra2: "341.2 BTU" },
      { fromVal: "250 Wh", toVal: "215.11 kcal", extra: "900.0 kJ", extra2: "853.0 BTU" },
      { fromVal: "500 Wh", toVal: "430.21 kcal", extra: "1,800 kJ", extra2: "1,706 BTU" },
      { fromVal: "750 Wh", toVal: "645.32 kcal", extra: "2,700 kJ", extra2: "2,559 BTU" },
      { fromVal: "1,000 Wh (1 kWh)", toVal: "860.42 kcal", extra: "3,600 kJ", extra2: "3,412 BTU" },
      { fromVal: "2,000 Wh (2 kWh)", toVal: "1,720.8 kcal", extra: "7,200 kJ", extra2: "6,824 BTU" }
    ]
  },
  applications: {
    title: "Practical Applications of Wh to kcal Conversion",
    items: [
      {
        title: "Electric Water Heating and Boilers",
        text: "Plumbing and HVAC designers convert electrical power consumption in Watt Hours into thermal heating performance in kilocalories to evaluate recovery rates of electric hot water cylinders."
      },
      {
        title: "Human-Electric Transportation Comparisons",
        text: "Urban mobility analysts compare the energy efficiency of electric scooters (measured in Wh/km) against human walking or cycling (measured in kcal/km)."
      },
      {
        title: "Off-Grid Solar System Sizing",
        text: "Off-grid cabin planners convert thermal cooking and water heating energy requirements (specified in kcal/day) into solar battery storage capacities (in Wh and kWh)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small gram calories (cal) with kilocalories (kcal): 1 Wh equals 860.42 small calories, but only 0.8604 kilocalories. Omitting the kilo prefix produces a value 1,000 times too large.",
      "Inverting the conversion multiplier: Multiplying by 1.1622 instead of 0.8604 will calculate the energy backwards.",
      "Overlooking standby and inverter losses: Converting stored DC battery Watt Hours into AC heating kilocalories typically involves a 10% to 15% inverter conversion loss."
    ]
  },
  faqs: [
    {
      question: "How many kilocalories are in 1 Watt Hour?",
      answer: "One Watt Hour equals approximately 0.860421 kilocalories (or 860.421 small calories)."
    },
    {
      question: "How many Watt Hours are in 1 kilocalorie?",
      answer: "One kilocalorie equals approximately 1.162222 Watt Hours."
    },
    {
      question: "What is the formula to convert Wh to kcal?",
      answer: "kcal = Wh × (3,600 ÷ 4,184) ≈ Wh × 0.860421."
    },
    {
      question: "How many kilocalories are in 100 Watt Hours?",
      answer: "100 Wh × 0.860421 = 86.0421 kilocalories."
    },
    {
      question: "How many kilocalories are in 1 kilowatt-hour (1,000 Wh)?",
      answer: "1,000 Wh (1 kWh) contains approximately 860.421 kilocalories."
    },
    {
      question: "Why does 1 Wh equal roughly 0.86 kcal?",
      answer: "Because 1 Wh equals 3,600 Joules and 1 kcal equals 4,184 Joules. Dividing 3,600 by 4,184 gives 0.860421."
    },
    {
      question: "How many Watt Hours does it take to provide 1,000 kcal of heat?",
      answer: "1,000 kcal × 1.162222 = 1,162.22 Watt Hours (roughly 1.16 kWh) with 100% efficient electric resistance heating."
    },
    {
      question: "How many food Calories are in a 50 Wh laptop battery?",
      answer: "50 Wh × 0.860421 ≈ 43.02 food Calories (kcal)."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Watt Hour", from: "kilocalorie", to: "watt-hour" },
    { label: "Watt Hour to Calorie", from: "watt-hour", to: "calorie" },
    { label: "Kilowatt Hour to Kilocalorie", from: "kilowatt-hour", to: "kilocalorie" },
    { label: "Watt Hour to Joule", from: "watt-hour", to: "joule" },
    { label: "Watt Hour to Kilojoule", from: "watt-hour", to: "kilojoule" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Special Publication 811.",
    "International Organization for Standardization (ISO) 80000-5: Thermodynamics.",
    "BIPM: The International System of Units (SI Brochure, 9th edition)."
  ]
};
