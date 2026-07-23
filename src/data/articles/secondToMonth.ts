import { CustomArticleData } from "./types";

export const secondToMonth: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "month",
  seoTitle: "Second to Month Converter (s to mo)",
  metaDescription: "Convert seconds to months (s to mo) accurately. Learn the average month division formula (s / 2,629,746), step-by-step examples, calendar variations, and conversion tables.",
  h1: "Second to Month Converter",
  introduction: [
    "Converting seconds to months is a useful calculation used in subscription billing, financial forecasting, lease contract calculations, equipment warranty periods, and long-term scientific data tracking. Because calendar month lengths vary from 28 to 31 days, standard international metric calculations adopt an average month length of 30.436875 days (2,629,746 seconds).",
    "Converting seconds to months requires dividing the duration in seconds by 2,629,746 (for average Gregorian months) or by 2,592,000 (for exact 30-day commercial months). This guide details the calculation formula, step-by-step examples, calendar nuances, and reference tables."
  ],
  quickAnswer: {
    text: "To convert seconds to average months, divide the total number of seconds by 2,629,746 (based on 30.436875 days per month). For example, 7,889,238 seconds equals approximately 3 months.",
    formulaDisplay: "mo = s / 2,629,746",
    subtext: "An average Gregorian calendar month contains approximately 2,629,746 seconds."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the core base unit of time in the International System of Units (SI). Derived from atomic caesium transition frequencies, the second forms the standard for measuring physical time across digital systems, telecommunications, and science."
  },
  aboutTargetUnit: {
    title: "Understanding the Month (mo)",
    text: "A month is a unit of time aligned with the lunar orbital period and integrated into calendar civil organization. In the Gregorian calendar, month durations vary between 28, 29, 30, and 31 days. In standard time conversion, an average month equals 1/12th of a 365.2425-day year (30.436875 days)."
  },
  relationship: "A standard 30-day month equals 2,592,000 seconds (30 × 86,400). However, taking the full Gregorian calendar year average (365.2425 / 12 = 30.436875 days), one average month equals exactly 2,629,746 seconds.",
  relationshipTitle: "Second vs Month Scale Comparison",
  relationshipItems: [
    { label: "1 Day", value: "86,400 s (~0.0328 mo)" },
    { label: "1 Week", value: "604,800 s (~0.230 mo)" },
    { label: "30-Day Commercial Month", value: "2,592,000 s" },
    { label: "Average Gregorian Month", value: "2,629,746 s" },
    { label: "1 Year (12 Months)", value: "31,536,000 s" }
  ],
  formula: {
    text: "Divide the total duration in seconds by 2,629,746 to find the equivalent duration in average Gregorian calendar months.",
    math: "mo = s / 2,629,746",
    subtext: "For exact 30-day commercial accounting months, divide by 2,592,000 (30 × 86,400)."
  },
  formulaTitle: "Second to Month Formula",
  practicalTip: {
    title: "Commercial Accounting vs Astronomical Month",
    text: "In financial banking and interest calculations, a 30-day month convention (2,592,000 seconds) is frequently used, whereas scientific applications use the average Gregorian month (2,629,746 seconds)."
  },
  expertNote: {
    title: "Variations Across Specific Calendar Months",
    text: "Exact month conversions depend on the specific month: February (28 days) = 2,419,200 s; 30-day months = 2,592,000 s; 31-day months = 2,678,400 s."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Product Warranty Duration (7,889,238 seconds)",
        subtitle: "Convert a manufacturer product testing duration of 7,889,238 seconds into average months.",
        steps: [
          "Identify duration in seconds: 7,889,238 s.",
          "Apply formula: mo = s / 2,629,746.",
          "Calculate: 7,889,238 / 2,629,746 = 3.",
          "Result: 7,889,238 seconds equals exactly 3 average months."
        ]
      },
      {
        title: "Example 2: Cloud Server Subscription (15,778,476 seconds)",
        subtitle: "Convert a cloud hosting reservation time of 15,778,476 seconds to months.",
        steps: [
          "Identify seconds: 15,778,476 s.",
          "Divide by 2,629,746: 15,778,476 / 2,629,746 = 6.",
          "Result: 15,778,476 seconds equals exactly 6 average months."
        ]
      }
    ]
  },
  table: {
    title: "Second to Month Quick Reference Table",
    headers: ["Seconds (s)", "Average Months (mo)", "30-Day Commercial Months"],
    rows: [
      { fromVal: "86,400 s", toVal: "0.0329 mo", extra: "1 day" },
      { fromVal: "604,800 s", toVal: "0.230 mo", extra: "1 week (7 days)" },
      { fromVal: "2,592,000 s", toVal: "0.9856 mo", extra: "30-day commercial month" },
      { fromVal: "2,629,746 s", toVal: "1.0 mo", extra: "1 average Gregorian month" },
      { fromVal: "5,259,492 s", toVal: "2.0 mo", extra: "2 average months" },
      { fromVal: "7,889,238 s", toVal: "3.0 mo", extra: "3 average months (1 quarter)" },
      { fromVal: "15,778,476 s", toVal: "6.0 mo", extra: "6 average months (half year)" },
      { fromVal: "23,667,714 s", toVal: "9.0 mo", extra: "9 average months" },
      { fromVal: "31,556,952 s", toVal: "12.0 mo", extra: "12 average months (1 year)" }
    ]
  },
  applications: {
    title: "Practical Applications of Second to Month Conversions",
    items: [
      {
        title: "Subscription Billing & SaaS Revenue",
        text: "Software companies track user session activity in seconds before aggregating metrics into monthly active user (MAU) billing cohorts."
      },
      {
        title: "Financial Loan & Lease Calculations",
        text: "Mortgage and commercial equipment lease interest rates convert continuous time terms into monthly amortization schedules."
      },
      {
        title: "Environmental & Climate Change Data",
        text: "Meteorological stations log sensor readings every second and aggregate monthly mean temperature and precipitation averages."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming all months have 30 days (which undercounts 31-day months and overcounts February).",
      "Confusing commercial 30-day months (2,592,000 s) with average Gregorian calendar months (2,629,746 s).",
      "Dividing by 604,800 (weeks) instead of the monthly conversion factor."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to months?",
      answer: "Divide the duration in seconds by 2,629,746 for average calendar months, or by 2,592,000 for 30-day commercial months."
    },
    {
      question: "How many seconds are in an average month?",
      answer: "An average Gregorian month contains approximately 2,629,746 seconds."
    },
    {
      question: "How many seconds are in a 30-day month?",
      answer: "A 30-day month contains exactly 2,592,000 seconds (30 × 86,400)."
    },
    {
      question: "How many seconds are in February (28 days)?",
      answer: "A 28-day February contains 2,419,200 seconds (2,505,600 seconds in a leap year of 29 days)."
    },
    {
      question: "How many seconds are in a 31-day month?",
      answer: "A 31-day month contains exactly 2,678,400 seconds."
    },
    {
      question: "What is 10,000,000 seconds in months?",
      answer: "10,000,000 seconds is equal to approximately 3.803 average months (about 3 months and 24 days)."
    }
  ],
  relatedList: [
    { label: "Second to Week", from: "second", to: "week" },
    { label: "Second to Year", from: "second", to: "year" },
    { label: "Month to Second", from: "month", to: "second" }
  ],
  references: [
    "NIST Special Publication 811 - Time Measurements",
    "ISO 8601 - Calendar Date & Time Standards"
  ]
};
