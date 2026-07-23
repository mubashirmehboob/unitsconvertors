import { CustomArticleData } from "./types";

export const secondToDay: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "day",
  seoTitle: "Second to Day Converter (s to d)",
  metaDescription: "Convert seconds to days (s to d) instantly. Learn the division formula (s / 86,400), step-by-step examples, astronomical standards, and conversion tables.",
  h1: "Second to Day Converter",
  introduction: [
    "Converting seconds to days is a standard time conversion used in astronomy, space mission planning, project management, server uptime tracking, and supply chain logistics. Because a standard calendar day contains 24 hours, with each hour containing 3,600 seconds, 1 full day equals exactly 86,400 seconds.",
    "Converting seconds to days requires dividing the duration in seconds by 86,400. This guide outlines the mathematical formula, practical calculation examples, decimal day conversions, and reference lookup tables."
  ],
  quickAnswer: {
    text: "To convert seconds to days, divide the total number of seconds by 86,400. For example, 172,800 seconds equals 2 days, and 43,200 seconds equals 0.5 days (12 hours).",
    formulaDisplay: "d = s / 86,400",
    subtext: "Exactly 86,400 seconds make up one standard 24-hour mean solar day."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the core base unit of time in the International System of Units (SI). Derived from caesium atomic clock vibrations, seconds measure microscopic processes, high-speed computer instructions, and baseline physical constants."
  },
  aboutTargetUnit: {
    title: "Understanding the Day (d)",
    text: "A day is a unit of time traditional to human civil organization, equal to 24 hours, 1,440 minutes, or 86,400 seconds. In astronomy, a standard SI day is defined as exactly 86,400 SI seconds."
  },
  relationship: "Because there are 60 seconds in a minute, 60 minutes in an hour, and 24 hours in a day, 60 × 60 × 24 = 86,400 seconds per day. Dividing seconds by 86,400 converts the time into days.",
  relationshipTitle: "Second vs Day Scale Comparison",
  relationshipItems: [
    { label: "21,600 Seconds", value: "0.25 d (6 hours)" },
    { label: "43,200 Seconds", value: "0.5 d (12 hours)" },
    { label: "86,400 Seconds", value: "1.0 d (1 full day)" },
    { label: "172,800 Seconds", value: "2.0 d (2 days)" },
    { label: "604,800 Seconds", value: "7.0 d (1 week)" }
  ],
  formula: {
    text: "Divide the total duration in seconds by 86,400 to obtain the equivalent duration in days.",
    math: "d = s / 86,400",
    subtext: "To convert days back to seconds, multiply by 86,400."
  },
  formulaTitle: "Second to Day Formula",
  practicalTip: {
    title: "Decimal Days to Hours Shortcut",
    text: "When a calculation gives decimal days (e.g., 1.25 days), multiply the decimal portion (0.25) by 24 to convert it into hours (0.25 × 24 = 6 hours -> 1 day 6 hours)."
  },
  expertNote: {
    title: "Astronomical Julian Days",
    text: "Astronomers express continuous solar system timelines in Julian Days (JD), measuring elapsed time continuously in decimal days since January 1, 4713 BC."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Server SLA Guarantee (259,200 seconds)",
        subtitle: "Convert a scheduled cloud maintenance downtime window of 259,200 seconds into days.",
        steps: [
          "Identify seconds: 259,200 s.",
          "Apply formula: d = s / 86,400.",
          "Calculate: 259,200 / 86,400 = 3.",
          "Result: 259,200 seconds equals exactly 3 days."
        ]
      },
      {
        title: "Example 2: Shipping Transit Duration (129,600 seconds)",
        subtitle: "Convert an express cargo delivery transit time of 129,600 seconds to days.",
        steps: [
          "Identify seconds: 129,600 s.",
          "Divide by 86,400: 129,600 / 86,400 = 1.5.",
          "Multiply 0.5 by 24 = 12 hours.",
          "Result: 129,600 seconds equals 1.5 days (or 1 day 12 hours)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Day Quick Reference Table",
    headers: ["Seconds (s)", "Decimal Days (d)", "Formatted Time Breakdown"],
    rows: [
      { fromVal: "21,600 s", toVal: "0.25 d", extra: "6 hours" },
      { fromVal: "43,200 s", toVal: "0.5 d", extra: "12 hours (half day)" },
      { fromVal: "64,800 s", toVal: "0.75 d", extra: "18 hours" },
      { fromVal: "86,400 s", toVal: "1.0 d", extra: "24 hours (1 full day)" },
      { fromVal: "129,600 s", toVal: "1.5 d", extra: "1 day 12 hours" },
      { fromVal: "172,800 s", toVal: "2.0 d", extra: "2 full days" },
      { fromVal: "259,200 s", toVal: "3.0 d", extra: "3 full days" },
      { fromVal: "432,000 s", toVal: "5.0 d", extra: "5 full days" },
      { fromVal: "604,800 s", toVal: "7.0 d", extra: "7 days (1 week)" },
      { fromVal: "2,592,000 s", toVal: "30.0 d", extra: "30 days (standard month)" }
    ]
  },
  applications: {
    title: "Practical Applications of Second to Day Conversions",
    items: [
      {
        title: "Server Uptime & Infrastructure Monitoring",
        text: "System administrators track server uptime counters stored in Unix timestamp seconds and convert them to operational days."
      },
      {
        title: "Spacecraft Navigation & Orbital Mechanics",
        text: "Mission planners at NASA and ESA measure planetary flyby trajectory timings in seconds before converting values into mission elapsed days."
      },
      {
        title: "Supply Chain & Logistics Lead Times",
        text: "Warehouse ERP software measures order processing and freight transit queues in seconds, converting figures into days for customer ETA tracking."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3,600 instead of 86,400 (which gives hours instead of days).",
      "Confusing decimal day remainders with hours (e.g., assuming 1.2 days is 1 day 2 hours instead of 1 day 4.8 hours).",
      "Forgetting daylight saving time shifts when converting real-world calendar dates."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to days?",
      answer: "Divide the number of seconds by 86,400."
    },
    {
      question: "How many seconds are in 1 day?",
      answer: "There are exactly 86,400 seconds in 1 standard 24-hour day."
    },
    {
      question: "What is 86,400 seconds in days?",
      answer: "86,400 seconds is equal to 1 day."
    },
    {
      question: "What is 172,800 seconds in days?",
      answer: "172,800 seconds is equal to 2 days."
    },
    {
      question: "What is 1,000,000 seconds in days?",
      answer: "1,000,000 seconds is equal to approximately 11.574 days (11 days, 13 hours, 46 minutes)."
    },
    {
      question: "How do you convert decimal days to hours?",
      answer: "Multiply the decimal fraction by 24. For example, 0.5 days × 24 = 12 hours."
    },
    {
      question: "What is 604,800 seconds in days?",
      answer: "604,800 seconds is equal to 7 days (1 full week)."
    }
  ],
  relatedList: [
    { label: "Second to Hour", from: "second", to: "hour" },
    { label: "Second to Week", from: "second", to: "week" },
    { label: "Day to Second", from: "day", to: "second" }
  ],
  references: [
    "BIPM - SI Brochure: Time Units",
    "IAU - International Astronomical Union Standards for Solar Days"
  ]
};
