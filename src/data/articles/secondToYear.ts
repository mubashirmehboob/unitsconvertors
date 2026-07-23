import { CustomArticleData } from "./types";

export const secondToYear: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "year",
  seoTitle: "Second to Year Converter (s to yr)",
  metaDescription: "Convert seconds to years (s to yr) accurately. Learn the division formula (s / 31,536,000), calculation steps, leap year variations, and reference tables.",
  h1: "Second to Year Converter",
  introduction: [
    "Converting seconds to years is an essential time conversion calculation used in astronomy, geology, nuclear physics, financial compounding, computer epoch clock calculations, and space exploration. A common calendar year of 365 days contains exactly 31,536,000 seconds.",
    "Converting seconds to years requires dividing the number of seconds by 31,536,000 (for standard 365-day years) or by 31,556,952 (for average Gregorian leap-adjusted years). This guide explains the exact mathematical formula, step-by-step examples, calendar leap year adjustments, and quick reference lookup tables."
  ],
  quickAnswer: {
    text: "To convert seconds to standard years, divide the total number of seconds by 31,536,000. For example, 63,072,000 seconds equals exactly 2 years.",
    formulaDisplay: "yr = s / 31,536,000",
    subtext: "A standard 365-day year contains 31,536,000 seconds (31,622,400 seconds in a 366-day leap year)."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the foundational SI base unit of time. Defined atomically by the caesium-133 radiation frequency, seconds provide absolute precision for physics, global positioning satellites (GPS), and network time protocol (NTP) servers."
  },
  aboutTargetUnit: {
    title: "Understanding the Year (yr)",
    text: "A year is the time taken for Earth to complete one orbital Revolution around the Sun. In civil timekeeping, a common year contains 365 days (31,536,000 s) and a leap year contains 366 days (31,622,400 s). In astronomy, a Julian year is defined as exactly 365.25 days (31,557,600 s)."
  },
  relationship: "Because there are 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day, and 365 days in a common year: 60 × 60 × 24 × 365 = 31,536,000 seconds per common year.",
  relationshipTitle: "Second vs Year Scale Comparison",
  relationshipItems: [
    { label: "1 Day", value: "86,400 s (~0.00274 yr)" },
    { label: "1 Month (30 days)", value: "2,592,000 s (~0.0822 yr)" },
    { label: "Common Year (365 days)", value: "31,536,000 s" },
    { label: "Julian Year (365.25 days)", value: "31,557,600 s" },
    { label: "Leap Year (366 days)", value: "31,622,400 s" }
  ],
  formula: {
    text: "Divide the duration in seconds by 31,536,000 to find the equivalent time in standard 365-day calendar years.",
    math: "yr = s / 31,536,000",
    subtext: "To convert years back to seconds, multiply by 31,536,000."
  },
  formulaTitle: "Second to Year Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "Remember that 1 year is approximately 3.15 × 10⁷ seconds (or roughly π × 10⁷ seconds, since π ≈ 3.14159). This approximation is famous in astrophysics for fast order-of-magnitude calculations."
  },
  expertNote: {
    title: "Unix Epoch Clock & Year 2038 Problem",
    text: "32-bit Unix computer systems store time as seconds elapsed since January 1, 1970. On January 19, 2038 (at 2,147,483,647 seconds), 32-bit integer registers will overflow, requiring migration to 64-bit timestamps."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Decade Duration in Seconds (315,360,000 seconds)",
        subtitle: "Convert 315,360,000 seconds into standard calendar years.",
        steps: [
          "Identify seconds: 315,360,000 s.",
          "Apply formula: yr = s / 31,536,000.",
          "Calculate: 315,360,000 / 31,536,000 = 10.",
          "Result: 315,360,000 seconds equals exactly 10 years."
        ]
      },
      {
        title: "Example 2: 1 Billion Seconds (1,000,000,000 seconds)",
        subtitle: "Convert a milestone of 1 billion seconds into calendar years.",
        steps: [
          "Identify seconds: 1,000,000,000 s.",
          "Divide by 31,536,000: 1,000,000,000 / 31,536,000 = 31.7098.",
          "Result: 1 billion seconds equals approximately 31.71 years (or 31 years, 259 days)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Year Quick Reference Table",
    headers: ["Seconds (s)", "Standard Years (yr)", "Real-World Context"],
    rows: [
      { fromVal: "86,400 s", toVal: "0.00274 yr", extra: "1 day" },
      { fromVal: "2,592,000 s", toVal: "0.0822 yr", extra: "1 commercial month (30 days)" },
      { fromVal: "15,768,000 s", toVal: "0.5 yr", extra: "Half year (6 months)" },
      { fromVal: "31,536,000 s", toVal: "1.0 yr", extra: "1 common year (365 days)" },
      { fromVal: "31,622,400 s", toVal: "1.0027 yr", extra: "1 leap year (366 days)" },
      { fromVal: "63,072,000 s", toVal: "2.0 yr", extra: "2 common years" },
      { fromVal: "157,680,000 s", toVal: "5.0 yr", extra: "5 common years" },
      { fromVal: "315,360,000 s", toVal: "10.0 yr", extra: "1 decade (10 years)" },
      { fromVal: "1,000,000,000 s", toVal: "31.71 yr", extra: "1 billion seconds (~31.7 years)" },
      { fromVal: "3,153,600,000 s", toVal: "100.0 yr", extra: "1 century (100 years)" }
    ]
  },
  applications: {
    title: "Scientific & Financial Applications of Second to Year Conversions",
    items: [
      {
        title: "Nuclear Physics & Radioactive Half-Life",
        text: "Radiometric dating models calculate radioactive decay constants in seconds⁻¹ before converting rates to geological half-life years."
      },
      {
        title: "Astronomy & Light-Year Distances",
        text: "Astronomers convert light travel times across interstellar space into Julian years to determine distances in light-years."
      },
      {
        title: "Financial Investment & Compound Interest",
        text: "High-frequency trading platforms measure interest accrual compounding intervals in seconds before annualizing returns."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to include leap years when converting multi-year time spans.",
      "Dividing by 2,592,000 (months) or 604,800 (weeks) instead of 31,536,000.",
      "Mistaking a Julian year (365.25 days = 31,557,600 s) for a common year (365 days = 31,536,000 s)."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to years?",
      answer: "Divide the total number of seconds by 31,536,000 (for a standard 365-day year)."
    },
    {
      question: "How many seconds are in 1 year?",
      answer: "There are 31,536,000 seconds in a standard 365-day year (and 31,622,400 seconds in a 366-day leap year)."
    },
    {
      question: "How many seconds is 1 billion seconds?",
      answer: "1 billion seconds equals approximately 31.71 years (31 years, 259 days)."
    },
    {
      question: "How many seconds is 1 million seconds?",
      answer: "1 million seconds equals approximately 11.57 days (or 0.0317 years)."
    },
    {
      question: "Why is 1 year approximately π × 10⁷ seconds?",
      answer: "Because 31,536,000 is very close to 3.14159 × 10⁷ (31,415,926), making π × 10⁷ a useful physics rule-of-thumb estimate."
    },
    {
      question: "How many seconds are in 10 years?",
      answer: "In common years, 10 years contains 315,360,000 seconds (or 315,532,800 seconds including 2 leap years)."
    }
  ],
  relatedList: [
    { label: "Second to Month", from: "second", to: "month" },
    { label: "Second to Decade", from: "second", to: "decade" },
    { label: "Year to Second", from: "year", to: "second" }
  ],
  references: [
    "IAU - Nominal Calendar & Julian Year Definitions",
    "BIPM - Units of Time in the International System"
  ]
};
