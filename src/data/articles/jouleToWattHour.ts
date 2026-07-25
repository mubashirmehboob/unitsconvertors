import { CustomArticleData } from "./types";

export const jouleToWattHour: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "watt-hour",
  seoTitle: "Joule to Watt Hour Converter (J to Wh)",
  metaDescription: "Convert Joules to Watt hours (J to Wh) easily. Learn the exact 3,600 J factor, conversion formula, step-by-step examples, tables, and FAQs.",
  h1: "Joule to Watt Hour Converter",
  introduction: [
    "The Joule (J) and the Watt hour (Wh) are standard units used to measure work, electrical energy, and power consumption over time. While the Joule is the base SI unit of energy (1 J = 1 Watt-second), the Watt hour is a practical unit widely used in battery ratings, electronics engineering, and energy storage capacity specifications.",
    "Converting Joules to Watt hours is straightforward because both units directly relate electrical power to time. Since 1 Watt hour represents a power rate of 1 Watt maintained continuously for 3,600 seconds (1 hour), one Watt hour contains exactly 3,600 Joules. Therefore, converting Joules to Watt hours requires dividing the energy value in Joules by 3,600.",
    "This comprehensive guide details the mathematical relationship, provides step-by-step calculation examples, presents a clear conversion reference table, explores practical engineering applications, and resolves common conversion errors."
  ],
  quickAnswer: {
    text: "To convert Joules to Watt hours, divide the energy in Joules by 3,600. For example, 7,200 Joules equals exactly 2 Watt hours, and 36,000 Joules equals 10 Watt hours.",
    formulaDisplay: "Wh = J ÷ 3,600",
    subtext: "One Joule is equal to exactly 1/3,600 Watt hour (approx. 0.00027778 Wh)."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the SI unit of energy and work. In electrical physics, one Joule is defined as the work done by a power flow of one Watt for a duration of one second (1 J = 1 W·s). It measures transient energy discharges, heat transfer, and mechanical work in scientific laboratories."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt hour (symbol: Wh) is a non-SI unit of energy equal to one Watt of power sustained over one hour (60 minutes × 60 seconds = 3,600 seconds). It is the standard unit used to measure battery capacities (such as lithium-ion smartphone or power-bank batteries), small solar generator storage, and portable device consumption."
  },
  relationship: "The relationship between Joules and Watt hours is strictly derived from time units: 1 Wh = 3,600 W·s = 3,600 J. Conversely, 1 J = 1 / 3,600 Wh ≈ 0.0002777778 Wh.",
  relationshipTitle: "Joule vs Watt Hour Scale Comparison",
  relationshipItems: [
    { label: "1 J", value: "0.0002778 Wh (1 Watt running for 1 second)" },
    { label: "60 J", value: "0.01667 Wh (1 Watt running for 1 minute)" },
    { label: "3,600 J", value: "1 Wh (1 Watt running for 1 hour)" },
    { label: "36,000 J", value: "10 Wh (Typical smartphone battery charge)" },
    { label: "3,600,000 J", value: "1,000 Wh = 1 kWh (1 Kilowatt hour)" }
  ],
  formula: {
    text: "Divide the energy value in Joules by 3,600 to get the capacity in Watt hours.",
    math: "Wh = J / 3600",
    subtext: "To convert Watt hours back to Joules, multiply the Wh value by 3,600."
  },
  formulaTitle: "Joule to Watt Hour Conversion Formula",
  practicalTip: {
    title: "Seconds to Hours Conversion",
    text: "Remember that 1 Wh = 1 W × 3,600 s. Dividing Joules by 3,600 converts second-based energy into hour-based energy."
  },
  expertNote: {
    title: "Battery Capacity Rating",
    text: "Battery manufacturers state capacity in Ampere-hours (Ah) or Watt-hours (Wh). Multiply Ah by nominal voltage (V) to get Wh, or multiply Wh by 3,600 to obtain total energy storage in Joules."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Power Bank Energy Audit",
        subtitle: "Convert a battery storage measurement of 18,000 Joules into Watt hours.",
        steps: [
          "Identify the energy in Joules: 18,000 J.",
          "Apply the formula: Wh = 18,000 ÷ 3,600.",
          "Calculate: 18,000 ÷ 3,600 = 5.",
          "Result: 18,000 Joules equals exactly 5 Watt hours."
        ]
      },
      {
        title: "Example 2: LED Light Bulb Consumption",
        subtitle: "Convert 108,000 Joules consumed by an 8W LED bulb into Watt hours.",
        steps: [
          "Identify the energy: 108,000 J.",
          "Divide by 3,600: 108,000 ÷ 3,600 = 30.",
          "Result: 108,000 J equals 30 Wh (representing 3.75 hours of runtime)."
        ]
      },
      {
        title: "Example 3: Solar Cell Energy Yield",
        subtitle: "Convert 900 Joules captured by a small solar collector into Watt hours.",
        steps: [
          "Identify the energy: 900 J.",
          "Divide by 3,600: 900 ÷ 3,600 = 0.25.",
          "Result: 900 J equals 0.25 Wh."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Watt Hour Conversion Table",
    headers: ["Joules (J)", "Watt Hours (Wh)", "Practical Real-World Context"],
    rows: [
      { fromVal: "1 J", toVal: "0.000278 Wh", extra: "1 Watt sustained for 1 second" },
      { fromVal: "10 J", toVal: "0.002778 Wh", extra: "Micro-controller sleep cycle" },
      { fromVal: "100 J", toVal: "0.027778 Wh", extra: "Camera LED burst flash" },
      { fromVal: "500 J", toVal: "0.138889 Wh", extra: "Kinetic energy of a heavy flywheel" },
      { fromVal: "1,000 J", toVal: "0.277778 Wh", extra: "1 Kilojoule (kJ)" },
      { fromVal: "3,600 J", toVal: "1.0000 Wh", extra: "1 Watt sustained for exactly 1 hour" },
      { fromVal: "18,000 J", toVal: "5.0000 Wh", extra: "Small earbud charging case capacity" },
      { fromVal: "36,000 J", toVal: "10.000 Wh", extra: "Standard smartphone battery capacity" },
      { fromVal: "180,000 J", toVal: "50.000 Wh", extra: "Laptop computer battery capacity" },
      { fromVal: "360,000 J", toVal: "100.00 Wh", extra: "Max airline lithium-ion carry-on limit" },
      { fromVal: "3,600,000 J", toVal: "1,000.0 Wh", extra: "1 Kilowatt hour (1 kWh)" }
    ]
  },
  applications: {
    title: "Applications of J to Wh Conversion",
    items: [
      {
        title: "Electronics & Battery Design",
        text: "Engineers calculate component dissipation in Joules (W·s) during circuit simulations, then aggregate energy draw into Watt hours to specify battery pack size."
      },
      {
        title: "Renewable Energy Systems",
        text: "Micro-hydro and solar sensor arrays log instantaneous energy harvests in Joules, converting total daily generation into Watt hours or Kilowatt hours for user dashboards."
      },
      {
        title: "Aviation & Transport Regulations",
        text: "Airline safety codes restrict carry-on lithium batteries to 100 Wh (360,000 J). Laboratory crash tests evaluate battery physical damage energy limits in Joules before certifying Wh ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Watts with Watt hours: Watts measure instantaneous power rate, while Watt hours measure total energy accumulated.",
      "Dividing by 60 instead of 3,600: There are 3,600 seconds in an hour, so dividing by 60 gives Watt-minutes, not Watt-hours.",
      "Confusing Watt hours (Wh) with Kilowatt hours (kWh): 1 kWh equals 1,000 Wh (3,600,000 Joules)."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 Watt hour?",
      answer: "There are exactly 3,600 Joules in 1 Watt hour (1 W × 3,600 seconds)."
    },
    {
      question: "What is the formula to convert J to Wh?",
      answer: "The formula is: Wh = J ÷ 3,600."
    },
    {
      question: "Is 1 Watt hour equal to 3,600 Joules?",
      answer: "Yes, exactly. Since 1 Watt = 1 Joule per second, 1 Watt hour = 1 Joule/second × 3,600 seconds = 3,600 Joules."
    },
    {
      question: "How do I convert Watt hours back to Joules?",
      answer: "To convert Watt hours to Joules, multiply by 3,600 (e.g., 10 Wh × 3,600 = 36,000 J)."
    },
    {
      question: "What is the difference between a Watt hour and a Kilowatt hour?",
      answer: "A Kilowatt hour (kWh) is 1,000 Watt hours (Wh). 1 Wh = 3,600 J, whereas 1 kWh = 3,600,000 J."
    },
    {
      question: "How do I convert Amp hours (Ah) to Joules?",
      answer: "Multiply Amp hours by nominal Voltage to get Watt hours (Wh = Ah × V), then multiply by 3,600 to get Joules (J = Wh × 3,600)."
    }
  ],
  relatedList: [
    { label: "Joule to Kilowatt Hour", from: "joule", to: "kilowatt-hour" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to BTU", from: "joule", to: "btu" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" }
  ],
  references: [
    "IEC 60050 - International Electrotechnical Vocabulary: Power and Energy Units.",
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Standard 260.1: Letter Symbols for Units of Measurement."
  ]
};
