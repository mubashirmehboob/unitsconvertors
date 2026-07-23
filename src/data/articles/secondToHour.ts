import { CustomArticleData } from "./types";

export const secondToHour: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "hour",
  seoTitle: "Second to Hour Converter (s to h)",
  metaDescription: "Convert seconds to hours (s to h) easily. Learn the division formula (s / 3,600), step-by-step examples, decimal hours to minutes breakdown, and conversion tables.",
  h1: "Second to Hour Converter",
  introduction: [
    "Converting seconds to hours is a routine calculation required in employee time tracking, flight duration analysis, server uptime logs, sports endurance events, and scientific data analysis. Because 1 hour contains 60 minutes and each minute contains 60 seconds, 1 hour equals exactly 3,600 seconds.",
    "Converting seconds to hours requires dividing the duration in seconds by 3,600. This guide explains the step-by-step mathematical conversion, methods for formatting decimal hours into hours, minutes, and seconds, and reference benchmark tables."
  ],
  quickAnswer: {
    text: "To convert seconds to hours, divide the total seconds by 3,600. For example, 7,200 seconds equals 2 hours, and 5,400 seconds equals 1.5 hours (or 1 hour 30 minutes).",
    formulaDisplay: "h = s / 3,600",
    subtext: "Exactly 3,600 seconds make up one standard hour."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the official base unit of time in the International System of Units (SI). Atomically anchored by caesium frequency standards, it provides fine-grained resolution for measuring physical phenomena, digital execution times, and human activity."
  },
  aboutTargetUnit: {
    title: "Understanding the Hour (h)",
    text: "An hour is a unit of time equal to 60 minutes or 3,600 seconds, representing 1/24th of a standard Earth solar day. Recognized by SI standards for civil and commercial usage, the hour is the primary metric for work shifts, transport schedules, and battery runtime ratings."
  },
  relationship: "Because there are 60 seconds in a minute and 60 minutes in an hour, 60 × 60 = 3,600 seconds per hour. Dividing seconds by 3,600 converts seconds into hours.",
  relationshipTitle: "Second vs Hour Scale Comparison",
  relationshipItems: [
    { label: "900 Seconds", value: "0.25 h (15 minutes)" },
    { label: "1,800 Seconds", value: "0.5 h (30 minutes)" },
    { label: "2,700 Seconds", value: "0.75 h (45 minutes)" },
    { label: "3,600 Seconds", value: "1.0 h (1 full hour)" },
    { label: "86,400 Seconds", value: "24.0 h (1 full day)" }
  ],
  formula: {
    text: "Divide the duration in seconds by 3,600 to obtain the time in hours.",
    math: "h = s / 3,600",
    subtext: "To convert hours back to seconds, multiply by 3,600."
  },
  formulaTitle: "Second to Hour Formula",
  practicalTip: {
    title: "Converting Decimal Hours to Minutes",
    text: "When a calculation yields a decimal like 2.25 hours (8,100 / 3,600 = 2.25), multiply the decimal portion (0.25) by 60 to convert it into minutes (0.25 × 60 = 15 minutes -> 2 hours 15 minutes)."
  },
  expertNote: {
    title: "Payroll & Job Costing Standards",
    text: "Human resource and payroll software typically records work hours in decimal fractions (e.g., 7.5 hours rather than 7 hours 30 minutes) to streamline wage multiplications."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Marathon Race Finishing Time (12,600 seconds)",
        subtitle: "Convert an amateur runner's marathon time of 12,600 seconds into hours.",
        steps: [
          "Identify duration in seconds: 12,600 s.",
          "Apply formula: h = s / 3,600.",
          "Calculate: 12,600 / 3,600 = 3.5.",
          "Result: 12,600 seconds equals 3.5 hours (or 3 hours 30 minutes)."
        ]
      },
      {
        title: "Example 2: Work Shift Duration (28,800 seconds)",
        subtitle: "Convert a standard 8-hour workday duration of 28,800 seconds to hours.",
        steps: [
          "Identify seconds: 28,800 s.",
          "Divide by 3,600: 28,800 / 3,600 = 8.",
          "Result: 28,800 seconds equals exactly 8 hours."
        ]
      }
    ]
  },
  table: {
    title: "Second to Hour Quick Reference Table",
    headers: ["Seconds (s)", "Decimal Hours (h)", "Formatted Hours & Minutes"],
    rows: [
      { fromVal: "900 s", toVal: "0.25 h", extra: "0 h 15 min" },
      { fromVal: "1,800 s", toVal: "0.5 h", extra: "0 h 30 min" },
      { fromVal: "2,700 s", toVal: "0.75 h", extra: "0 h 45 min" },
      { fromVal: "3,600 s", toVal: "1.0 h", extra: "1 h 0 min" },
      { fromVal: "5,400 s", toVal: "1.5 h", extra: "1 h 30 min" },
      { fromVal: "7,200 s", toVal: "2.0 h", extra: "2 h 0 min" },
      { fromVal: "10,800 s", toVal: "3.0 h", extra: "3 h 0 min" },
      { fromVal: "18,000 s", toVal: "5.0 h", extra: "5 h 0 min" },
      { fromVal: "28,800 s", toVal: "8.0 h", extra: "8 h 0 min (standard shift)" },
      { fromVal: "86,400 s", toVal: "24.0 h", extra: "1 full day (24 h 0 min)" }
    ]
  },
  applications: {
    title: "Real-World Applications of Second to Hour Conversions",
    items: [
      {
        title: "Aviation & Commercial Flight Tracking",
        text: "Flight navigation equipment records airborne flight duration in seconds and converts values to decimal hours for fuel consumption and pilot logbooks."
      },
      {
        title: "IT Operations & Server Uptime Logging",
        text: "System administrators analyze cloud server uptime logs stored as Unix epoch timestamp seconds and format them into operational hours."
      },
      {
        title: "Energy & Battery Capacity Ratings",
        text: "Battery runtime tests measure continuous discharge durations in seconds before expressing device longevity in operating hours."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 60 instead of 3,600 (which yields minutes rather than hours).",
      "Treating decimal hour remainders as minutes directly (e.g., assuming 1.5 hours means 1 hour 5 minutes instead of 1 hour 30 minutes).",
      "Multiplying by 3,600 when converting seconds to hours instead of dividing."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to hours?",
      answer: "Divide the number of seconds by 3,600."
    },
    {
      question: "How many seconds are in 1 hour?",
      answer: "There are exactly 3,600 seconds in 1 hour."
    },
    {
      question: "What is 3,600 seconds in hours?",
      answer: "3,600 seconds is equal to 1 hour."
    },
    {
      question: "What is 7,200 seconds in hours?",
      answer: "7,200 seconds is equal to 2 hours."
    },
    {
      question: "What is 18,000 seconds in hours?",
      answer: "18,000 seconds is equal to 5 hours."
    },
    {
      question: "What is 86,400 seconds in hours?",
      answer: "86,400 seconds is equal to 24 hours (1 full day)."
    },
    {
      question: "How do you convert 0.75 hours into minutes?",
      answer: "Multiply 0.75 by 60 to get 45 minutes."
    }
  ],
  relatedList: [
    { label: "Second to Minute", from: "second", to: "minute" },
    { label: "Second to Day", from: "second", to: "day" },
    { label: "Hour to Second", from: "hour", to: "second" }
  ],
  references: [
    "BIPM - Units Outside the SI Accepted for Use",
    "NIST Handbook 44 - Time & Frequency Measurements"
  ]
};
