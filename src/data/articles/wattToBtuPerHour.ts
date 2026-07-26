import { CustomArticleData } from "./types";

export const wattToBtuPerHour: CustomArticleData = {
  fromUnitId: "watt",
  toUnitId: "btu-per-hour",
  seoTitle: "Watt to BTU per Hour Converter (W to BTU/h)",
  metaDescription: "Convert Watts to BTU per Hour (W to BTU/h) instantly. Learn the 3.41214 conversion factor, HVAC heat load formulas, calculation examples, and FAQs.",
  h1: "Watt to BTU per Hour Converter",
  introduction: [
    "The Watt (W) and British Thermal Unit per hour (BTU/h or BTU/hr) are standard thermal power units used extensively in heating, ventilation, air conditioning (HVAC), refrigeration, and electronics cooling design. The Watt is the universal SI unit of power, representing energy transfer at a rate of one Joule per second.",
    "The BTU per hour is the primary imperial heating and cooling capacity unit in North America, used to rate air conditioners, space heaters, gas furnaces, and computer server room heat loads. Converting Watts to BTU per hour connects metric electrical power input or heat dissipation with imperial thermal load equipment sizing.",
    "By international ISO thermodynamic definition (IT standard), 1 Watt equals approximately 3.412141633 BTU per hour (derived from 3,600 Joules/hour ÷ 1,055.05585 Joules/BTU). Converting Watts to BTU per hour requires multiplying the wattage by 3.41214. This comprehensive guide covers the exact formula, step-by-step HVAC calculation examples, heat load conversion tables, and server room thermal management principles."
  ],
  quickAnswer: {
    text: "To convert Watts to BTU per Hour (BTU/h), multiply the power value in Watts by 3.41214. For example, a 1,000 Watt (1 kW) electric heater outputs approximately 3,412.14 BTU/h.",
    formulaDisplay: "BTU/h = W × 3.41214",
    subtext: "1 Watt is equal to approximately 3.4121416 BTU per hour."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the SI unit of power, defined as one Joule per second (1 J/s). In thermal systems, all electrical energy consumed by a resistive heater or electronic component is converted 100% into heat energy at a rate of 1 W."
  },
  aboutTargetUnit: {
    title: "Understanding BTU per Hour (BTU/h)",
    text: "BTU per hour (symbol: BTU/h or Btu/h) is an imperial unit of power measuring heat transfer rate. One BTU/h represents the heat rate required to raise the temperature of one pound of liquid water by 1°F over one hour. It is the dominant metric for North American HVAC sizing."
  },
  relationship: "The mathematical relationship between watts and BTU/h is derived from energy equivalents: 1 W = 3,600 J/h. Dividing 3,600 J/h by 1,055.05585 J/BTU gives 1 W ≈ 3.412141633 BTU/h. Conversely, 1 BTU/h ≈ 0.29307107 W.",
  relationshipTitle: "Watt vs BTU/h Capacity Scale",
  relationshipItems: [
    { label: "1 W", value: "3.412 BTU/h (Minimal electronics heat output)" },
    { label: "100 W", value: "341.2 BTU/h (Average human body rest heat emission)" },
    { label: "1,000 W", value: "3,412.1 BTU/h (1 kW electric space heater)" },
    { label: "3,517 W", value: "12,000 BTU/h (1 Ton of Air Conditioning refrigeration capacity)" },
    { label: "10,000 W", value: "34,121.4 BTU/h (Commercial server rack thermal dissipation)" }
  ],
  formula: {
    text: "Multiply the power in Watts by 3.41214 to calculate the equivalent thermal capacity in BTU per Hour.",
    math: "BTU/h = W * 3.41214",
    subtext: "To convert BTU per hour back to Watts, divide the BTU/h value by 3.41214 (or multiply by 0.293071)."
  },
  formulaTitle: "Watt to BTU per Hour Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb Shortcut",
    text: "For quick mental estimation, multiply Watts by 3.4 to estimate BTU/h (e.g. 500 W × 3.4 = 1,700 BTU/h)."
  },
  expertNote: {
    title: "Server Room Cooling Rule",
    text: "Every 1,000 Watts of computer IT equipment load generates roughly 3,412 BTU/h of heat that must be extracted by precision air conditioning (CRAC) units."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Electric Space Heater Output",
        subtitle: "Convert a 1,500 Watt portable electric heater rating into BTU per hour.",
        steps: [
          "Identify electrical power: 1,500 W.",
          "Apply formula: BTU/h = 1,500 × 3.41214.",
          "Calculate: 1,500 × 3.41214 = 5,118.21.",
          "Result: A 1,500 Watt heater produces approximately 5,118 BTU/h of heat."
        ]
      },
      {
        title: "Example 2: Data Center Server Thermal Dissipation",
        subtitle: "Convert 12,000 Watts of server cabinet power draw to BTU per hour.",
        steps: [
          "Identify power: 12,000 W.",
          "Multiply by 3.41214: 12,000 × 3.41214 = 40,945.68.",
          "Result: 12,000 Watts equals approximately 40,946 BTU/h of cooling load."
        ]
      },
      {
        title: "Example 3: LED Lighting Heat Gain",
        subtitle: "Convert 800 Watts of commercial LED lighting power to BTU per hour.",
        steps: [
          "Identify power: 800 W.",
          "Multiply by 3.41214: 800 × 3.41214 = 2,729.71.",
          "Result: 800 Watts of lighting generates approximately 2,730 BTU/h."
        ]
      }
    ]
  },
  table: {
    title: "Watt to BTU per Hour Conversion Table",
    headers: ["Watts (W)", "BTU per Hour (BTU/h)", "HVAC & Thermal Context"],
    rows: [
      { fromVal: "1 W", toVal: "3.41 BTU/h", extra: "0.001 kW" },
      { fromVal: "100 W", toVal: "341.21 BTU/h", extra: "Heat emission of 1 seated adult at rest" },
      { fromVal: "300 W", toVal: "1,023.64 BTU/h", extra: "Gaming PC under full load" },
      { fromVal: "500 W", toVal: "1,706.07 BTU/h", extra: "Halogen floodlight / small appliance" },
      { fromVal: "1,000 W", toVal: "3,412.14 BTU/h", extra: "1 kW electric heater rating" },
      { fromVal: "1,500 W", toVal: "5,118.21 BTU/h", extra: "Standard US plug-in space heater" },
      { fromVal: "2,000 W", toVal: "6,824.28 BTU/h", extra: "2 kW baseboard electric heater" },
      { fromVal: "3,517 W", toVal: "12,000.00 BTU/h", extra: "1 Ton of AC cooling (12,000 BTU/h)" },
      { fromVal: "7,034 W", toVal: "24,000.00 BTU/h", extra: "2 Tons of AC cooling capacity" },
      { fromVal: "10,551 W", toVal: "36,000.00 BTU/h", extra: "3 Tons of residential central AC" }
    ]
  },
  applications: {
    title: "Applications of W to BTU/h Conversion",
    items: [
      {
        title: "HVAC Cooling Load Calculations",
        text: "Building engineers calculate internal heat gain from electrical appliances, computers, and lighting in Watts, converting total wattage to BTU/h to size air conditioning tonnage."
      },
      {
        title: "Data Center Thermal Management",
        text: "IT managers convert server power consumption in Watts directly to BTU/h to specify computer room air conditioner (CRAC) capacity and prevent thermal throttling."
      },
      {
        title: "Electric Baseboard & Space Heater Sizing",
        text: "Heater manufacturers specify heating performance in both Watts and BTU/h so consumers can match room square footage requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 3.412 instead of multiplying: Watts are smaller power units than BTU/h, so the BTU/h numerical value is always roughly 3.4 times larger than the Watt value.",
      "Confusing BTU energy with BTU/h power: BTU is total thermal energy; BTU/h is the rate of heat flow per hour.",
      "Ignoring HVAC efficiency ratings (SEER / COP): 1 W of heat output requires 1 W of electrical input, but 1 W of air conditioning cooling input removes 3+ W of heat due to refrigeration heat pump efficiency."
    ]
  },
  faqs: [
    {
      question: "How many BTU per hour are in 1 Watt?",
      answer: "There are approximately 3.41214 BTU per hour in 1 Watt."
    },
    {
      question: "What is the formula to convert Watts to BTU/h?",
      answer: "The formula is: BTU/h = Watts × 3.41214."
    },
    {
      question: "How many BTU/h is 1,000 Watts (1 kW)?",
      answer: "1,000 Watts equals approximately 3,412.14 BTU per hour."
    },
    {
      question: "How many Watts equal 1 Ton of AC cooling?",
      answer: "1 Ton of cooling equals 12,000 BTU/h, which corresponds to approximately 3,516.85 Watts (3.517 kW) of cooling capacity."
    },
    {
      question: "How many BTU/h is a 1,500 Watt space heater?",
      answer: "A 1,500 Watt heater produces approximately 5,118.21 BTU per hour of heat output."
    },
    {
      question: "How do I convert BTU/h back to Watts?",
      answer: "Divide the BTU/h value by 3.41214 (or multiply by 0.293071). For example, 12,000 BTU/h ÷ 3.41214 = 3,516.85 W."
    },
    {
      question: "Why do computer equipment heat loads use BTU/h?",
      answer: "HVAC engineers design building cooling in BTU/h or AC tons, so computer power draw in Watts must be converted to BTU/h for air conditioning design."
    },
    {
      question: "What is 10,000 BTU/h in Watts?",
      answer: "10,000 BTU/h equals approximately 2,930.71 Watts (2.93 kW)."
    }
  ],
  relatedList: [
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" },
    { label: "Watt to Calorie per Second", from: "watt", to: "calorie-per-second" },
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" }
  ],
  references: [
    "ASHRAE Handbook - Fundamentals: Thermal Units and Conversions.",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
