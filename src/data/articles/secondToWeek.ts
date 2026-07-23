import { CustomArticleData } from "./types";

export const secondToWeek: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "week",
  seoTitle: "Second to Week Converter (s to wk)",
  metaDescription: "Convert seconds to weeks (s to wk) instantly. Learn the division formula (s / 604,800), step-by-step examples, decimal breakdowns, and conversion tables.",
  h1: "Second to Week Converter",
  introduction: [
    "Converting seconds to weeks is a helpful time unit calculation used in project management, software development sprints, long-term scientific experiments, medical gestation tracking, and equipment maintenance scheduling. Because 1 week contains 7 days, 168 hours, or 10,080 minutes, 1 full week equals exactly 604,800 seconds.",
    "Converting seconds to weeks requires dividing the total number of seconds by 604,800. This guide provides the exact conversion formula, step-by-step calculation examples, decimal week conversions, and reference lookup tables."
  ],
  quickAnswer: {
    text: "To convert seconds to weeks, divide the total number of seconds by 604,800. For example, 1,209,600 seconds equals 2 weeks, and 302,400 seconds equals 0.5 weeks (3.5 days).",
    formulaDisplay: "wk = s / 604,800",
    subtext: "Exactly 604,800 seconds make up one standard 7-day week."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the core base unit of time in the International System of Units (SI). Derived from caesium atomic vibrations, seconds provide the foundation for measuring human time, scientific experiments, and telecommunication network signals."
  },
  aboutTargetUnit: {
    title: "Understanding the Week (wk)",
    text: "A week is a calendar unit of time equal to 7 consecutive days, 168 hours, or 604,800 seconds. Rooted in ancient astronomical cycles, the 7-day week is universally accepted across international commerce, school schedules, and work routines."
  },
  relationship: "Because there are 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day, and 7 days in a week, 60 × 60 × 24 × 7 = 604,800 seconds per week. Dividing seconds by 604,800 converts time into weeks.",
  relationshipTitle: "Second vs Week Scale Comparison",
  relationshipItems: [
    { label: "86,400 Seconds", value: "0.1428 wk (1 day)" },
    { label: "302,400 Seconds", value: "0.5 wk (3.5 days)" },
    { label: "604,800 Seconds", value: "1.0 wk (1 full week)" },
    { label: "1,209,600 Seconds", value: "2.0 wk (2 weeks)" },
    { label: "2,419,200 Seconds", value: "4.0 wk (28 days)" }
  ],
  formula: {
    text: "Divide the total duration in seconds by 604,800 to obtain the equivalent duration in weeks.",
    math: "wk = s / 604,800",
    subtext: "To convert weeks back to seconds, multiply by 604,800."
  },
  formulaTitle: "Second to Week Formula",
  practicalTip: {
    title: "Converting Decimal Weeks to Days",
    text: "When a calculation gives decimal weeks (e.g., 2.5 weeks), multiply the decimal portion (0.5) by 7 to convert it into days (0.5 × 7 = 3.5 days -> 2 weeks 3 days 12 hours)."
  },
  expertNote: {
    title: "Fortnights & Sprint Cycles",
    text: "In Agile software development, a standard 2-week iteration or 'sprint' lasts exactly 1,209,600 seconds (also historically referred to as a fortnight)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Software Sprint Duration (1,209,600 seconds)",
        subtitle: "Convert a 2-week agile software development iteration of 1,209,600 seconds into weeks.",
        steps: [
          "Identify seconds: 1,209,600 s.",
          "Apply formula: wk = s / 604,800.",
          "Calculate: 1,209,600 / 604,800 = 2.",
          "Result: 1,209,600 seconds equals exactly 2 weeks."
        ]
      },
      {
        title: "Example 2: Equipment Test Run (1,814,400 seconds)",
        subtitle: "Convert an industrial endurance testing period of 1,814,400 seconds into weeks.",
        steps: [
          "Identify seconds: 1,814,400 s.",
          "Divide by 604,800: 1,814,400 / 604,800 = 3.",
          "Result: 1,814,400 seconds equals exactly 3 weeks."
        ]
      }
    ]
  },
  table: {
    title: "Second to Week Quick Reference Table",
    headers: ["Seconds (s)", "Decimal Weeks (wk)", "Days & Hours Breakdown"],
    rows: [
      { fromVal: "86,400 s", toVal: "0.143 wk", extra: "1 day" },
      { fromVal: "259,200 s", toVal: "0.429 wk", extra: "3 days" },
      { fromVal: "302,400 s", toVal: "0.5 wk", extra: "3.5 days (3 days 12 hours)" },
      { fromVal: "604,800 s", toVal: "1.0 wk", extra: "7 days (1 full week)" },
      { fromVal: "1,209,600 s", toVal: "2.0 wk", extra: "14 days (2 weeks)" },
      { fromVal: "1,814,400 s", toVal: "3.0 wk", extra: "21 days (3 weeks)" },
      { fromVal: "2,419,200 s", toVal: "4.0 wk", extra: "28 days (4 weeks)" },
      { fromVal: "3,024,000 s", toVal: "5.0 wk", extra: "35 days (5 weeks)" },
      { fromVal: "6,048,000 s", toVal: "10.0 wk", extra: "70 days (10 weeks)" },
      { fromVal: "31,536,000 s", toVal: "52.14 wk", extra: "1 common calendar year" }
    ]
  },
  applications: {
    title: "Industry Applications of Second to Week Conversions",
    items: [
      {
        title: "Project Management & Agile Sprints",
        text: "Project managers format engineering task time estimates into weeks for roadmap planning and stakeholder progress reporting."
      },
      {
        title: "Medical & Obstetrics Gestation Tracking",
        text: "Clinical pregnancy logs calculate fetal development milestones in weeks based on continuous chronological timestamps."
      },
      {
        title: "Industrial Plant Maintenance Schedules",
        text: "Automated machinery usage logs trigger preventive maintenance overhauls after set operational hours converted into weeks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 86,400 instead of 604,800 (which yields days instead of weeks).",
      "Assuming a month is exactly 4 weeks (most calendar months are ~4.345 weeks).",
      "Treating decimal week remainders as days directly (e.g., 1.2 weeks is 1 week 1.4 days, not 1 week 2 days)."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to weeks?",
      answer: "Divide the total number of seconds by 604,800."
    },
    {
      question: "How many seconds are in 1 week?",
      answer: "There are exactly 604,800 seconds in 1 week."
    },
    {
      question: "What is 604,800 seconds in weeks?",
      answer: "604,800 seconds is equal to 1 week."
    },
    {
      question: "What is 1,209,600 seconds in weeks?",
      answer: "1,209,600 seconds is equal to 2 weeks."
    },
    {
      question: "What is 1,000,000 seconds in weeks?",
      answer: "1,000,000 seconds is equal to approximately 1.6534 weeks (1 week 4 days 13 hours)."
    },
    {
      question: "How do you convert decimal weeks to days?",
      answer: "Multiply the decimal portion by 7. For example, 0.5 weeks × 7 = 3.5 days."
    },
    {
      question: "How many weeks are in 1 year?",
      answer: "A common year of 365 days contains 52 weeks and 1 day (approximately 52.143 weeks)."
    }
  ],
  relatedList: [
    { label: "Second to Day", from: "second", to: "day" },
    { label: "Second to Month", from: "second", to: "month" },
    { label: "Week to Second", from: "week", to: "second" }
  ],
  references: [
    "BIPM - Time Units in International Standards",
    "ISO 8601 - Week Date Formatting Standards"
  ]
};
