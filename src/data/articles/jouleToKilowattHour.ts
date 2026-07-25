import { CustomArticleData } from "./types";

export const jouleToKilowattHour: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "kilowatt-hour",
  seoTitle: "Joule to Kilowatt Hour Converter (J to kWh)",
  metaDescription: "Convert Joules to kilowatt hours (J to kWh) accurately. Learn the 3,600,000 J factor, conversion formula, step-by-step examples, tables, and FAQs.",
  h1: "Joule to Kilowatt Hour Converter",
  introduction: [
    "The Joule (J) and the kilowatt hour (kWh) are fundamental units of energy used across physics, electrical engineering, and utility power metering. While the Joule is the base metric unit for measuring mechanical work, heat, and electrical discharge, the kilowatt hour is the standard commercial unit used globally to bill household and industrial electricity consumption.",
    "Converting Joules to kilowatt hours involves bridging time and power metrics. Because one kilowatt hour represents 1,000 Watts of power supplied continuously for 1 hour (3,600 seconds), one kilowatt hour equals exactly 3,600,000 Joules (or 3.6 Megajoules). Therefore, converting Joules to kilowatt hours requires dividing the Joule value by 3,600,000.",
    "This guide explains the exact mathematical conversion, provides step-by-step calculation examples, offers a reference table for household and industrial power scales, and addresses common questions regarding energy billing and power calculations."
  ],
  quickAnswer: {
    text: "To convert Joules to kilowatt hours, divide the energy value in Joules by 3,600,000. For example, 18,000,000 Joules equals exactly 5 kWh, and 36,000,000 Joules equals 10 kWh.",
    formulaDisplay: "kWh = J ÷ 3,600,000",
    subtext: "One Joule is equal to approximately 0.000000277778 kilowatt hours (2.7778 × 10⁻⁷ kWh)."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the base derived SI unit for energy, work, and heat. One Joule is defined as the work required to move a force of one Newton through one meter (1 J = 1 N·m), or the energy transferred by one Watt of electrical power running for one second (1 W·s). Because industrial energy consumption spans billions of Joules, utilities convert raw Joule totals into kilowatt hours for simplified billing."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt Hour (kWh)",
    text: "The kilowatt hour (symbol: kWh) is a non-SI unit of energy defined as one kilowatt (1,000 Watts) of electrical power consumed or generated continuously over a duration of one hour. Since there are 3,600 seconds in an hour, 1 kWh = 1,000 W × 3,600 s = 3,600,000 Joules (3.6 MJ). It is the universal billing unit used by electrical utility companies."
  },
  relationship: "The relationship between Joules and kilowatt hours is exact and fixed by definition: 1 kWh = 3,600,000 J (3.6 Megajoules). Conversely, 1 J = 1 / 3,600,000 kWh ≈ 2.7777777778 × 10⁻⁷ kWh.",
  relationshipTitle: "Joule vs Kilowatt Hour Scale Comparison",
  relationshipItems: [
    { label: "1 J", value: "0.000000278 kWh (1 Watt for 1 second)" },
    { label: "3,600 J", value: "0.001 kWh (1 Watt hour)" },
    { label: "360,000 J", value: "0.1 kWh (100 Watt hours / 0.36 Megajoules)" },
    { label: "3,600,000 J", value: "1 kWh (Running a 1,000W heater for 1 hour)" },
    { label: "36,000,000 J", value: "10 kWh (Daily energy draw of a small home)" }
  ],
  formula: {
    text: "Divide the total energy in Joules by 3,600,000 to obtain the equivalent in kilowatt hours.",
    math: "kWh = J / 3600000",
    subtext: "To convert kilowatt hours back to Joules, multiply the kWh value by 3,600,000."
  },
  formulaTitle: "Joule to Kilowatt Hour Conversion Formula",
  practicalTip: {
    title: "Megajoule Conversion Shortcut",
    text: "If your energy is given in Megajoules (MJ = 1,000,000 J), simply divide by 3.6 to get kilowatt hours (e.g., 18 MJ ÷ 3.6 = 5 kWh)."
  },
  expertNote: {
    title: "Commercial Power Accounting",
    text: "Electrical utilities record smart meter pulses in Joules or Watt-seconds. Central billing servers apply the 3.6 × 10⁶ constant to generate kWh invoices."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Solar System Energy Production",
        subtitle: "Convert a rooftop solar array output of 54,000,000 Joules into kilowatt hours.",
        steps: [
          "Identify the energy in Joules: 54,000,000 J.",
          "Apply the formula: kWh = 54,000,000 ÷ 3,600,000.",
          "Calculate: 54,000,000 ÷ 3,600,000 = 15.",
          "Result: 54,000,000 Joules equals exactly 15 kWh."
        ]
      },
      {
        title: "Example 2: Electric Vehicle Battery Charge",
        subtitle: "Convert 216,000,000 Joules transferred into an EV battery pack to kWh.",
        steps: [
          "Identify the energy: 216,000,000 J.",
          "Divide by 3,600,000: 216,000,000 ÷ 3,600,000 = 60.",
          "Result: 216,000,000 J equals 60 kWh."
        ]
      },
      {
        title: "Example 3: Home Appliance Consumption",
        subtitle: "Convert 7,200,000 Joules used by a washing machine into kilowatt hours.",
        steps: [
          "Identify the energy: 7,200,000 J.",
          "Divide by 3,600,000: 7,200,000 ÷ 3,600,000 = 2.",
          "Result: 7,200,000 J equals 2 kWh."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Kilowatt Hour Conversion Table",
    headers: ["Joules (J)", "Kilowatt Hours (kWh)", "Practical / Utility Context"],
    rows: [
      { fromVal: "1,000 J", toVal: "0.000278 kWh", extra: "1 Kilojoule (kJ)" },
      { fromVal: "3,600 J", toVal: "0.001000 kWh", extra: "1 Watt hour (Wh)" },
      { fromVal: "36,000 J", toVal: "0.010000 kWh", extra: "Energy in 1 smartphone battery charge" },
      { fromVal: "360,000 J", toVal: "0.100000 kWh", extra: "Running a 100W bulb for 1 hour" },
      { fromVal: "1,000,000 J", toVal: "0.277778 kWh", extra: "1 Megajoule (MJ)" },
      { fromVal: "3,600,000 J", toVal: "1.000000 kWh", extra: "1 kWh (Standard utility electricity unit)" },
      { fromVal: "7,200,000 J", toVal: "2.000000 kWh", extra: "Running an oven for 1 hour" },
      { fromVal: "18,000,000 J", toVal: "5.000000 kWh", extra: "Daily energy draw of a small refrigerator" },
      { fromVal: "36,000,000 J", toVal: "10.00000 kWh", extra: "Average daily electricity use of an apartment" },
      { fromVal: "180,000,000 J", toVal: "50.00000 kWh", extra: "Full charge of a mid-size Electric Vehicle" },
      { fromVal: "3,600,000,000 J", toVal: "1,000.00 kWh", extra: "1 Megawatt hour (MWh) / Monthly home usage" }
    ]
  },
  applications: {
    title: "Applications of J to kWh Conversion",
    items: [
      {
        title: "Electric Utility Metering & Invoicing",
        text: "Grid power monitors sum instantaneous load (Joules/sec) continuously over 30-day billing periods, converting total Joules into kWh for rate multiplication."
      },
      {
        title: "Electric Vehicle (EV) Engineering",
        text: "Battery management systems calculate regenerative braking kinetic energy absorption in Joules, displaying accumulated range recovery in kilowatt hours to drivers."
      },
      {
        title: "Industrial Facility Management",
        text: "Factories auditing heavy motor work output convert shaft mechanical work (Joules) to electrical energy (kWh) to evaluate total motor efficiency."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of 3,600,000: Dividing Joules by 1,000 gives kilojoules (kJ), not kilowatt hours (kWh).",
      "Confusing power (kW) with energy (kWh): Kilowatts measure rate of power, whereas kilowatt hours measure cumulative energy over time.",
      "Misplacing zeros in scientific notation: 1 J = 2.7778 × 10⁻⁷ kWh. Ensure zero counts match when converting small Joule values."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 kilowatt hour?",
      answer: "There are exactly 3,600,000 Joules (3.6 Megajoules) in 1 kilowatt hour."
    },
    {
      question: "What is the formula to convert Joules to kWh?",
      answer: "The formula is: kWh = J ÷ 3,600,000."
    },
    {
      question: "Is 3.6 Megajoules equal to 1 kWh?",
      answer: "Yes, exactly. 3,600,000 Joules = 3.6 Megajoules = 1 kWh."
    },
    {
      question: "How do I convert kWh back to Joules?",
      answer: "To convert kilowatt hours to Joules, multiply by 3,600,000 (e.g., 5 kWh × 3,600,000 = 18,000,000 J)."
    },
    {
      question: "Why do electricity bills use kWh instead of Joules?",
      answer: "Because a household consumes billions of Joules per month, kilowatt hours provide manageable, easy-to-read numbers (e.g., 500 kWh instead of 1,800,000,000 J)."
    },
    {
      question: "How do I convert Megajoules (MJ) to kWh?",
      answer: "Divide the value in Megajoules by 3.6 (e.g., 36 MJ ÷ 3.6 = 10 kWh)."
    }
  ],
  relatedList: [
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to BTU", from: "joule", to: "btu" },
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" }
  ],
  references: [
    "IEC 60050: International Electrotechnical Vocabulary - Energy Management.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "U.S. Energy Information Administration (EIA) - Units and Equivalents."
  ]
};
