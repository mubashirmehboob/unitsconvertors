import { CustomArticleData } from "./types";

export const jouleToBtu: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "btu",
  seoTitle: "Joule to BTU Converter (J to BTU)",
  metaDescription: "Convert Joules to British Thermal Units (J to BTU) accurately. Learn the 1,055.056 J factor, conversion formula, step-by-step examples, tables, and FAQs.",
  h1: "Joule to BTU Converter",
  introduction: [
    "The Joule (J) and the British Thermal Unit (BTU) are widely used units for measuring heat energy, mechanical work, and fuel heat output. The Joule is the universal unit of energy in the metric International System of Units (SI), whereas the BTU is the standard unit in North America for sizing HVAC equipment, furnaces, boilers, and natural gas heat capacity.",
    "Converting Joules to BTUs connects metric scientific measurements with traditional imperial heating standards. By international ISO definition (ISO 31-4 / ISO 80000-5 IT standard), one British Thermal Unit equals approximately 1,055.05585 Joules. Therefore, converting Joules to BTUs requires dividing the energy value in Joules by 1,055.05585.",
    "This reference guide explains the definition of both units, provides the step-by-step conversion formula, presents HVAC and heating calculation examples, offers a comprehensive conversion table, and resolves common thermal engineering questions."
  ],
  quickAnswer: {
    text: "To convert Joules to British Thermal Units (BTUs), divide the energy value in Joules by 1,055.05585. For example, 105,506 Joules equals approximately 100 BTUs, and 1,055,056 Joules equals approximately 1,000 BTUs.",
    formulaDisplay: "BTU = J ÷ 1,055.05585",
    subtext: "One Joule is equal to approximately 0.000947817 BTUs."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the fundamental SI derived unit of energy, named after physicist James Prescott Joule. Defined as one Newton of force moving through one meter (1 J = 1 N·m), or one Watt of electrical power flowing for one second (1 W·s), the Joule provides a unified measure across mechanical, thermal, electrical, and chemical physics."
  },
  aboutTargetUnit: {
    title: "Understanding the British Thermal Unit (BTU)",
    text: "The British Thermal Unit (symbol: BTU or Btu) is a traditional imperial unit of heat energy. Originally defined as the heat required to raise the temperature of one pound of liquid water by 1°F at sea level, the International Table (IT) BTU is standardized today as 1,055.05585 Joules. It remains the dominant unit in North American heating, ventilation, air conditioning (HVAC), and fossil fuel markets."
  },
  relationship: "The relationship between Joules and BTUs is established by international standard: 1 BTU ≈ 1,055.05585 J (approx. 1.0551 kJ). Conversely, 1 J ≈ 0.00094781712 BTU.",
  relationshipTitle: "Joule vs BTU Scale Comparison",
  relationshipItems: [
    { label: "1 J", value: "0.0009478 BTU (Minimal heat energy)" },
    { label: "1,055.06 J", value: "1 BTU (Heat from burning 1 wooden matchstick)" },
    { label: "10,550.6 J", value: "10 BTU (Small candle heat release)" },
    { label: "1,055,056 J", value: "1,000 BTU (Small space heater 1-minute output)" },
    { label: "12,660,670 J", value: "12,000 BTU (1 Ton of Air Conditioning refrigeration per hour)" }
  ],
  formula: {
    text: "Divide the heat energy in Joules by 1,055.05585 to compute the equivalent value in BTUs.",
    math: "BTU = J / 1055.05585",
    subtext: "To convert BTUs back to Joules, multiply the BTU value by 1,055.05585."
  },
  formulaTitle: "Joule to BTU Conversion Formula",
  practicalTip: {
    title: "Kilojoule Shortcut",
    text: "For quick estimations, 1 BTU is roughly equal to 1.055 kilojoules (kJ). Divide kJ by 1.055 to estimate BTUs quickly."
  },
  expertNote: {
    title: "HVAC Rating Context",
    text: "Air conditioner and heater capacities are often quoted in 'BTUs', which actually refers to BTUs per hour (BTU/h). 1 Watt = 3.41214 BTU/h."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Air Conditioner Heat Extraction",
        subtitle: "Convert 5,275,280 Joules of extracted heat energy into BTUs.",
        steps: [
          "Identify the energy in Joules: 5,275,280 J.",
          "Apply the formula: BTU = 5,275,280 ÷ 1,055.05585.",
          "Calculate: 5,275,280 ÷ 1,055.05585 = 5,000.",
          "Result: 5,275,280 Joules equals exactly 5,000 BTUs."
        ]
      },
      {
        title: "Example 2: Natural Gas Furnace Output",
        subtitle: "Convert 52,752,800 Joules of natural gas combustion heat to BTUs.",
        steps: [
          "Identify the energy: 52,752,800 J.",
          "Divide by 1,055.05585: 52,752,800 ÷ 1,055.05585 = 50,000.",
          "Result: 52,752,800 J equals 50,000 BTUs."
        ]
      },
      {
        title: "Example 3: Electric Kettle Heat Output",
        subtitle: "Convert 316,517 Joules of heat transferred into water into BTUs.",
        steps: [
          "Identify the energy: 316,517 J.",
          "Divide by 1,055.05585: 316,517 ÷ 1,055.05585 = 300.",
          "Result: 316,517 J equals 300 BTUs."
        ]
      }
    ]
  },
  table: {
    title: "Joule to BTU Conversion Table",
    headers: ["Joules (J)", "British Thermal Units (BTU)", "Real-World Thermal Context"],
    rows: [
      { fromVal: "1 J", toVal: "0.000948 BTU", extra: "0.001 Kilojoules" },
      { fromVal: "100 J", toVal: "0.094782 BTU", extra: "0.1 Kilojoules" },
      { fromVal: "1,000 J", toVal: "0.947817 BTU", extra: "1 Kilojoule (~0.95 BTU)" },
      { fromVal: "1,055.06 J", toVal: "1.000000 BTU", extra: "Heat released by burning 1 wooden match" },
      { fromVal: "5,275.28 J", toVal: "5.000000 BTU", extra: "5 BTUs of heat" },
      { fromVal: "10,550.56 J", toVal: "10.00000 BTU", extra: "10.55 Kilojoules" },
      { fromVal: "105,505.6 J", toVal: "100.0000 BTU", extra: "Heat to warm 100 lbs water by 1°F" },
      { fromVal: "1,055,056 J", toVal: "1,000.000 BTU", extra: "1 Megajoule (~1.055 MJ)" },
      { fromVal: "12,660,670 J", toVal: "12,000.00 BTU", extra: "1 Ton of AC cooling capacity per hour" },
      { fromVal: "105,505,585 J", toVal: "100,000.0 BTU", extra: "1 Therm of natural gas (~105.5 MJ)" }
    ]
  },
  applications: {
    title: "Applications of J to BTU Conversion",
    items: [
      {
        title: "HVAC Sizing & Thermal Load Calculation",
        text: "Building performance simulation software outputs solar heat gain in Joules, which mechanical engineers convert to BTUs or BTU/h to select appropriately sized furnaces and chillers."
      },
      {
        title: "Fossil Fuel & Natural Gas Billing",
        text: "Energy utilities measure gas pipeline energy flow using ultrasonic sensors calibrated in Joules, converting total delivered energy into therms (100,000 BTUs) for billing."
      },
      {
        title: "Thermal Power Plant Efficiency",
        text: "Power generation engineers compare boiler heat input in BTUs against electrical generator energy output in Joules to evaluate overall thermal efficiency."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing BTU energy with BTU/h power rate: A BTU is total heat energy, whereas BTU/h is the rate of heat flow per hour.",
      "Using different BTU definitions: The International Table (IT) BTU is 1,055.05585 J, while the thermochemical BTU is 1,054.35 J. Ensure you use the IT standard factor for general engineering.",
      "Dividing in the wrong direction: Since 1 BTU is approximately 1,055 Joules, the BTU numerical value will always be much smaller than the Joule value."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 BTU?",
      answer: "There are approximately 1,055.05585 Joules in 1 British Thermal Unit (IT standard)."
    },
    {
      question: "What is the formula to convert J to BTU?",
      answer: "The formula is: BTU = J ÷ 1,055.05585."
    },
    {
      question: "How many BTUs are in 1 Megajoule (MJ)?",
      answer: "There are approximately 947.817 BTUs in 1 Megajoule (1,000,000 ÷ 1,055.05585)."
    },
    {
      question: "How do I convert BTUs back to Joules?",
      answer: "Multiply the BTU value by 1,055.05585 (e.g., 500 BTU × 1,055.05585 = 527,527.9 J)."
    },
    {
      question: "What is 1 Ton of AC cooling in Joules?",
      answer: "1 Ton of cooling equals 12,000 BTU per hour, which corresponds to 12,660,670 Joules per hour (or 3,516.85 Watts)."
    },
    {
      question: "What is a Therm of gas in BTUs and Joules?",
      answer: "One therm equals 100,000 BTUs, which converts to approximately 105,505,585 Joules (approx. 105.5 Megajoules)."
    }
  ],
  relatedList: [
    { label: "Joule to Kilowatt Hour", from: "joule", to: "kilowatt-hour" },
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" }
  ],
  references: [
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ASHRAE Handbook - Fundamentals: Thermal Units and Conversions."
  ]
};
