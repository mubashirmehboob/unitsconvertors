import { CustomArticleData } from "./types";

export const wattToKilowatt: CustomArticleData = {
  fromUnitId: "watt",
  toUnitId: "kilowatt",
  seoTitle: "Watt to Kilowatt Converter (W to kW)",
  metaDescription: "Convert Watts to Kilowatts (W to kW) instantly. Learn the exact 1,000 ratio formula, real-world electrical examples, conversion tables, and FAQs.",
  h1: "Watt to Kilowatt Converter",
  introduction: [
    "The Watt (W) and Kilowatt (kW) are standard metric units used to measure electrical power and thermal energy transfer rates across residential, commercial, and industrial power systems. The Watt represents the basic International System of Units (SI) unit for power, equal to one Joule of energy consumed per second. When electrical loads reach higher capacities, power is expressed in kilowatts to simplify monitoring and billing.",
    "Converting Watts to Kilowatts is a straightforward decimal scale shift governed by the metric prefix kilo, which signifies a factor of one thousand. Because one kilowatt equals exactly 1,000 watts, converting watts into kilowatts requires dividing the power rating in watts by 1,000.",
    "This reference guide provides the exact formula for converting watts to kilowatts, step-by-step calculation examples for home appliances, comprehensive conversion tables, practical engineering context, and answers to common energy questions."
  ],
  quickAnswer: {
    text: "To convert Watts to Kilowatts, divide the power value in Watts by 1,000. For example, a 1,500 W space heater converts to 1.5 kW, and a 250 W solar panel equals 0.25 kW.",
    formulaDisplay: "kW = W ÷ 1,000",
    subtext: "1 Watt is equal to exactly 0.001 Kilowatts."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the SI derived unit of power, named after Scottish engineer James Watt. One Watt is defined as the rate at which work is done when one Ampere of electric current flows through an electrical potential difference of one Volt (1 W = 1 V × 1 A), or one Joule of energy expended over one second (1 W = 1 J/s)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The Kilowatt (symbol: kW) is a multiple of the watt equal to 1,000 watts. It is the primary unit used worldwide by electric power utilities, electrical engineers, and equipment manufacturers to specify appliance ratings, generator outputs, motor power, and electric vehicle charging speeds."
  },
  relationship: "The metric relationship between watts and kilowatts is exact and fixed by SI standards: 1 kW = 1,000 W, and 1 W = 0.001 kW (10⁻³ kW).",
  relationshipTitle: "Watt vs Kilowatt Scale Comparison",
  relationshipItems: [
    { label: "1 W", value: "0.001 kW (Small LED indicator light)" },
    { label: "60 W", value: "0.06 kW (Standard household light bulb)" },
    { label: "1,000 W", value: "1.0 kW (Standard microwave oven rating)" },
    { label: "1,500 W", value: "1.5 kW (Portable electric space heater)" },
    { label: "7,200 W", value: "7.2 kW (Level 2 Electric Vehicle home charger)" }
  ],
  formula: {
    text: "Divide the electrical power in Watts by 1,000 to obtain the equivalent power in Kilowatts.",
    math: "kW = W / 1000",
    subtext: "To convert kilowatts back to watts, multiply the kilowatt value by 1,000."
  },
  formulaTitle: "Watt to Kilowatt Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert Watts to Kilowatts mentally, shift the decimal point three positions to the left. For instance, 2,400.0 W becomes 2.4 kW."
  },
  expertNote: {
    title: "Power vs. Energy Distinction",
    text: "A Kilowatt (kW) measures instantaneous power rate, whereas a Kilowatt-hour (kWh) measures total energy consumed over time. Running a 1 kW appliance for 1 hour consumes 1 kWh of electricity."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Air Conditioner Consumption",
        subtitle: "Convert a 3,500 Watt air conditioner rating into Kilowatts.",
        steps: [
          "Identify power in Watts: 3,500 W.",
          "Apply formula: kW = 3,500 ÷ 1,000.",
          "Calculate: 3,500 ÷ 1,000 = 3.5.",
          "Result: 3,500 Watts equals 3.5 Kilowatts."
        ]
      },
      {
        title: "Example 2: Rooftop Solar Panel Array",
        subtitle: "Convert a 400 Watt solar module output to Kilowatts.",
        steps: [
          "Identify power: 400 W.",
          "Divide by 1,000: 400 ÷ 1,000 = 0.4.",
          "Result: 400 Watts equals 0.4 kW."
        ]
      },
      {
        title: "Example 3: Hair Dryer Appliance Rating",
        subtitle: "Convert an 1,875 Watt hair dryer rating into Kilowatts.",
        steps: [
          "Identify power: 1,875 W.",
          "Divide by 1,000: 1,875 ÷ 1,000 = 1.875.",
          "Result: 1,875 Watts equals 1.875 kW."
        ]
      }
    ]
  },
  table: {
    title: "Watt to Kilowatt Conversion Table",
    headers: ["Watts (W)", "Kilowatts (kW)", "Common Household / Technical Load"],
    rows: [
      { fromVal: "1 W", toVal: "0.001 kW", extra: "Standby smart plug power draw" },
      { fromVal: "10 W", toVal: "0.01 kW", extra: "Energy-efficient LED bulb" },
      { fromVal: "100 W", toVal: "0.1 kW", extra: "Desktop computer under light load" },
      { fromVal: "500 W", toVal: "0.5 kW", extra: "Food processor or blender" },
      { fromVal: "1,000 W", toVal: "1.0 kW", extra: "Kitchen toaster or microwave" },
      { fromVal: "1,500 W", toVal: "1.5 kW", extra: "Electric space heater or iron" },
      { fromVal: "2,000 W", toVal: "2.0 kW", extra: "Electric water kettle" },
      { fromVal: "5,000 W", toVal: "5.0 kW", extra: "Residential clothes dryer" },
      { fromVal: "10,000 W", toVal: "10.0 kW", extra: "Whole-house backup generator" },
      { fromVal: "50,000 W", toVal: "50.0 kW", extra: "DC fast charger for electric vehicles" }
    ]
  },
  applications: {
    title: "Applications of W to kW Conversion",
    items: [
      {
        title: "Residential Electric Bill Estimations",
        text: "Utility companies measure consumption using kilowatt-hours. Appliance wattage must be converted to kilowatts before multiplying by operating hours to estimate electricity costs."
      },
      {
        title: "Solar PV System Sizing",
        text: "Individual solar photovoltaic panels are rated in Watts (e.g., 400 W), but system capacities are specified in Kilowatts (e.g., 8 kW system comprising 20 panels)."
      },
      {
        title: "Electrical Circuit Capacity Planning",
        text: "Electricians convert cumulative wattage loads on a circuit breaker into kilowatts to ensure safe current handling within panel limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Errors",
    items: [
      "Confusing kW with kWh: Kilowatt (kW) is power capacity at a specific moment; kilowatt-hour (kWh) is total energy delivered over time.",
      "Multiplying by 1,000 instead of dividing: Moving from a smaller unit (W) to a larger unit (kW) requires division by 1,000.",
      "Ignoring power factor in AC circuits: Apparent power in Volt-Amperes (VA) equals real power in Watts only when the power factor is 1.0."
    ]
  },
  faqs: [
    {
      question: "How many Watts make 1 Kilowatt?",
      answer: "There are exactly 1,000 Watts in 1 Kilowatt."
    },
    {
      question: "What is the formula to convert Watts to Kilowatts?",
      answer: "The formula is: Kilowatts = Watts ÷ 1,000."
    },
    {
      question: "How many Kilowatts is 1,500 Watts?",
      answer: "1,500 Watts equals 1.5 Kilowatts (1,500 ÷ 1,000 = 1.5 kW)."
    },
    {
      question: "Why do power bills use kW and kWh instead of W?",
      answer: "Kilowatts keep numerical values manageable for household and industrial billing, avoiding excessively large numbers in millions of watts."
    },
    {
      question: "How do I calculate Kilowatt-hours from Watts?",
      answer: "First convert Watts to Kilowatts by dividing by 1,000, then multiply by the number of hours the device operates (kWh = [W ÷ 1,000] × hours)."
    },
    {
      question: "Is 1 kW equal to 1,000 Joules per second?",
      answer: "Yes. Since 1 Watt equals 1 Joule per second, 1 Kilowatt equals 1,000 Joules per second."
    },
    {
      question: "How many Kilowatts is a 2,000-Watt toaster?",
      answer: "A 2,000-Watt toaster consumes 2 Kilowatts of power during operation."
    },
    {
      question: "What is the difference between kW and MW?",
      answer: "One Megawatt (MW) equals 1,000 Kilowatts (kW), or 1,000,000 Watts."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Watt to Megawatt", from: "watt", to: "megawatt" },
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" },
    { label: "Watt to BTU per Hour", from: "watt", to: "btu-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Standard 268: Metric Practice."
  ]
};
