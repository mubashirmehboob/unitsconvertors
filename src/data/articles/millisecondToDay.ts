import { CustomArticleData } from "./types";

export const millisecondToDay: CustomArticleData = {
  fromUnitId: "millisecond",
  toUnitId: "day",
  seoTitle: "Millisecond to Day Converter (ms to d)",
  metaDescription: "Convert milliseconds to days (ms to d) accurately. Learn the 86,400,000 division formula, Unix epoch conversion, calculation steps, and lookup tables.",
  h1: "Millisecond to Day Converter",
  introduction: [
    "Converting milliseconds to days links atomic computer timestamp counters with astronomical calendar cycles and human daily schedules. In database systems, web analytics, session cookie expirations, and financial account settlement cycles, high-resolution millisecond timestamps are converted into standard 24-hour calendar days.",
    "Because 1 standard solar day contains 24 hours, 1,440 minutes, and 86,400 seconds, exactly 86,400,000 milliseconds constitute one standard day (86,400 × 1,000). Converting milliseconds into days requires dividing the millisecond value by 86,400,000. This technical guide outlines the conversion formula, step-by-step examples, software development patterns, and reference tables."
  ],
  quickAnswer: {
    text: "To convert milliseconds to days, divide the total number of milliseconds by 86,400,000. For example, 172,800,000 milliseconds equals exactly 2.0 days, and 43,200,000 milliseconds equals 0.5 days (12 hours).",
    formulaDisplay: "d = ms / 86,400,000",
    subtext: "1 day = 24 hours = 1,440 minutes = 86,400 seconds = 86,400,000 milliseconds."
  },
  aboutSourceUnit: {
    title: "Understanding the Millisecond (ms)",
    text: "A millisecond represents one-thousandth of a second ($10^{-3}$ s). It is the standard unit used by operating system kernels, modern web browser timing APIs, database query profilers, and Unix epoch timestamp implementations."
  },
  aboutTargetUnit: {
    title: "Understanding the Day (d)",
    text: "The day is an accepted non-SI civil unit of time defined as exactly 86,400 SI seconds (24 hours of 3,600 seconds each). It forms the fundamental building block for calendars, business accounting cycles, orbital ephemeris, and human biological circadian rhythms."
  },
  relationship: "One standard day contains 24 hours, which equals 86,400 seconds or 86,400,000 milliseconds. Dividing any duration in milliseconds by 86,400,000 yields the equivalent time in decimal days.",
  relationshipTitle: "Millisecond to Day Key Durations",
  relationshipItems: [
    { label: "3,600,000 ms (1 h)", value: "~0.04167 d" },
    { label: "21,600,000 ms (6 h)", value: "0.25 d" },
    { label: "43,200,000 ms (12 h)", value: "0.5 d" },
    { label: "86,400,000 ms (24 h)", value: "1.0 d" },
    { label: "604,800,000 ms (7 d)", value: "7.0 d (1 week)" }
  ],
  formula: {
    text: "Divide the duration in milliseconds by 86,400,000 to determine the equivalent duration in standard days.",
    math: "d = ms / 86,400,000",
    subtext: "To convert days back into milliseconds, multiply the day value by 86,400,000."
  },
  formulaTitle: "Millisecond to Day Calculation Formula",
  practicalTip: {
    title: "The Unix Epoch Days Shortcut",
    text: "To compute the total number of days that have elapsed since the Unix epoch (January 1, 1970 UTC) in software code, execute: `const days = Math.floor(Date.now() / (1000 * 60 * 60 * 24))`."
  },
  expertNote: {
    title: "Leap Seconds & UTC Days",
    text: "Standard civil systems assume exactly 86,400,000 ms per day. However, when the International Earth Rotation and Reference Systems Service (IERS) inserts a leap second, an official UTC day contains 86,401,000 ms."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Web Browser Session Token Expiration (259,200,000 ms)",
        subtitle: "Convert a session cookie TTL of 259,200,000 milliseconds into days.",
        steps: [
          "State input value: 259,200,000 ms.",
          "Apply formula: d = ms / 86,400,000.",
          "Calculate: 259,200,000 / 86,400,000 = 3.0.",
          "Result: 259,200,000 milliseconds equals exactly 3 days."
        ]
      },
      {
        title: "Example 2: Data Center Backup Window (129,600,000 ms)",
        subtitle: "Convert a batch data migration runtime of 129,600,000 milliseconds into days.",
        steps: [
          "Identify milliseconds: 129,600,000 ms.",
          "Divide by 86,400,000: 129,600,000 / 86,400,000 = 1.5.",
          "Result: 129,600,000 milliseconds equals 1.5 days (36 hours or 1 day and 12 hours)."
        ]
      }
    ]
  },
  table: {
    title: "Millisecond to Day Reference Table",
    headers: ["Milliseconds (ms)", "Days (d)", "Equivalent Human Duration"],
    rows: [
      { fromVal: "3,600,000 ms", toVal: "0.0417 d", extra: "1 hour" },
      { fromVal: "21,600,000 ms", toVal: "0.2500 d", extra: "6 hours (quarter day)" },
      { fromVal: "43,200,000 ms", toVal: "0.5000 d", extra: "12 hours (half day)" },
      { fromVal: "86,400,000 ms", toVal: "1.0000 d", extra: "1 full standard day (24 hours)" },
      { fromVal: "172,800,000 ms", toVal: "2.0000 d", extra: "2 full days (48 hours)" },
      { fromVal: "259,200,000 ms", toVal: "3.0000 d", extra: "3 full days (72 hours)" },
      { fromVal: "432,000,000 ms", toVal: "5.0000 d", extra: "5 days (standard business work week)" },
      { fromVal: "604,800,000 ms", toVal: "7.0000 d", extra: "1 full week (7 days)" },
      { fromVal: "1,209,600,000 ms", toVal: "14.0000 d", extra: "1 fortnight (14 days / 2 weeks)" },
      { fromVal: "2,592,000,000 ms", toVal: "30.0000 d", extra: "30 days (standard month period)" },
      { fromVal: "31,536,000,000 ms", toVal: "365.0000 d", extra: "1 common year (365 days)" }
    ]
  },
  applications: {
    title: "Key Industry Applications of ms to d Conversion",
    items: [
      {
        title: "Authentication Tokens & Cache Management",
        text: "OAuth access tokens, JWT refresh expiration windows, and Redis cache time-to-live (TTL) counters specified in milliseconds are converted to days for administrative dashboards."
      },
      {
        title: "Scientific Clinical Trials & Drug Half-Life",
        text: "Pharmacokinetic models log biological drug clearance curves in milliseconds before converting elimination rates into patient therapy treatment days."
      },
      {
        title: "Satellite Orbits & Space Mission Telemetry",
        text: "Orbital flight dynamics software converts ground-station telemetry tracking stamps recorded in milliseconds into mission elapsed days."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3,600,000 (which yields hours rather than days).",
      "Treating decimal days directly as hours (e.g., 1.5 days is 1 day and 12 hours, not 1 day and 5 hours).",
      "Ignoring daylight saving time (DST) transitions when converting calendar dates rather than absolute durations."
    ]
  },
  faqs: [
    {
      question: "How do you convert milliseconds to days?",
      answer: "Divide the total duration in milliseconds by 86,400,000 (e.g., 172,800,000 ms / 86,400,000 = 2 days)."
    },
    {
      question: "How many milliseconds are in 1 day?",
      answer: "There are exactly 86,400,000 milliseconds in 1 standard day (24 hours × 60 min × 60 s × 1,000 ms)."
    },
    {
      question: "What is 43,200,000 milliseconds in days?",
      answer: "43,200,000 milliseconds equals 0.5 days (exactly 12 hours)."
    },
    {
      question: "How many milliseconds are in a 7-day week?",
      answer: "A 7-day week contains 604,800,000 milliseconds (7 × 86,400,000)."
    },
    {
      question: "What is 100 million milliseconds in days?",
      answer: "100,000,000 milliseconds equals approximately 1.1574 days (1 day, 3 hours, 46 minutes, and 40 seconds)."
    },
    {
      question: "How do you convert decimal days into days, hours, and minutes?",
      answer: "The whole number represents days. Multiply the decimal remainder by 24 to find hours, and multiply any remaining fractional hour by 60 to find minutes (e.g., 2.75 days = 2 days and 0.75 × 24 = 18 hours)."
    },
    {
      question: "How many milliseconds are in 1 common year?",
      answer: "A common 365-day year contains 31,536,000,000 milliseconds (365 × 86,400,000)."
    },
    {
      question: "How do you convert days back to milliseconds?",
      answer: "Multiply the number of days by 86,400,000 (e.g., 5 days × 86,400,000 = 432,000,000 ms)."
    }
  ],
  relatedList: [
    { label: "Millisecond to Hour", from: "millisecond", to: "hour" },
    { label: "Millisecond to Week", from: "millisecond", to: "week" },
    { label: "Day to Millisecond", from: "day", to: "millisecond" }
  ],
  references: [
    "BIPM - SI Units: Time (Day definition)",
    "IETF RFC 3339 - Date and Time on the Internet: Timestamps"
  ]
};
