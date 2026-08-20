import { CustomArticleData } from "./types";

export const secondToFortnight: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "fortnight",
  seoTitle: "Second to Fortnight Converter (s to fn)",
  metaDescription: "Convert seconds to fortnights (s to fn) accurately. Learn the 1,209,600-second conversion factor, step-by-step calculations, history, and lookup tables.",
  h1: "Second to Fortnight Converter",
  introduction: [
    "Converting seconds to fortnights translates the fundamental SI base unit of time into a traditional two-week interval widely used in payroll cycles, sprint planning, British civil scheduling, and physics humor (the FFF system: furlong-firkin-fortnight). Exactly fourteen standard days comprise one fortnight.",
    "Because each standard solar day contains 86,400 seconds, one full fortnight comprises precisely 1,209,600 seconds (14 × 86,400). Converting seconds into fortnights requires dividing the duration in seconds by 1,209,600. This guide provides the mathematical formula, worked conversion examples, practical context, and quick-lookup reference tables."
  ],
  quickAnswer: {
    text: "To convert seconds to fortnights, divide the total number of seconds by 1,209,600. For example, 2,419,200 seconds equals exactly 2.0 fortnights (4 weeks).",
    formulaDisplay: "fn = s / 1,209,600",
    subtext: "1 fortnight = 14 days = 336 hours = 20,160 minutes = 1,209,600 seconds."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the international base unit of time defined by the hyperfine transition frequency of caesium-133 atoms in ground state. It serves as the baseline for global standard time (UTC), telemetry data logging, and scientific instrumentation."
  },
  aboutTargetUnit: {
    title: "Understanding the Fortnight (fn)",
    text: "The fortnight is a historical unit of time equal to fourteen days (two weeks), originating from the Old English phrase 'fēowertīene niht' meaning fourteen nights. It remains a standard civil and commercial scheduling unit across the United Kingdom, Australia, New Zealand, and India for bi-weekly wages and municipal rental periods."
  },
  relationship: "One fortnight equals 2 weeks, which equals 14 days, 336 hours, 20,160 minutes, or 1,209,600 seconds. Dividing any duration in seconds by 1,209,600 yields the equivalent time in fortnights.",
  relationshipTitle: "Second to Fortnight Conversions at a Glance",
  relationshipItems: [
    { label: "1 Minute", value: "60 s (~0.0000496 fn)" },
    { label: "1 Hour", value: "3,600 s (~0.002976 fn)" },
    { label: "1 Day (24 h)", value: "86,400 s (~0.07143 fn)" },
    { label: "1 Week (7 d)", value: "604,800 s (0.5 fn)" },
    { label: "1 Fortnight (14 d)", value: "1,209,600 s (1.0 fn)" }
  ],
  formula: {
    text: "Divide the duration in seconds by 1,209,600 to find the equivalent time in fortnights.",
    math: "fn = s / 1,209,600",
    subtext: "To convert fortnights back to seconds, multiply by 1,209,600."
  },
  formulaTitle: "Second to Fortnight Formula",
  practicalTip: {
    title: "Mental Math Two-Step Technique",
    text: "To estimate fortnights quickly from seconds: first divide seconds by 86,400 to get days, then divide the resulting number of days by 14."
  },
  expertNote: {
    title: "The FFF Humor System of Units",
    text: "In computer science and physics circles, the Furlong-Firkin-Fortnight (FFF) system humorously uses the fortnight as the base unit of time. Under this system, 1 knot is approximately 1.689 furlongs per fortnight, and the speed of light is roughly 1.8026 × 10¹² furlongs per fortnight."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 3,628,800 Seconds to Fortnights",
        subtitle: "Determine how many fortnights are contained in 3,628,800 seconds.",
        steps: [
          "State input value: 3,628,800 seconds.",
          "Apply formula: fn = s / 1,209,600.",
          "Calculate: 3,628,800 / 1,209,600 = 3.0.",
          "Result: 3,628,800 seconds equals exactly 3 fortnights (6 weeks or 42 days)."
        ]
      },
      {
        title: "Example 2: 1 Million Seconds in Fortnights",
        subtitle: "Convert a standard milestone of 1,000,000 seconds into fortnights.",
        steps: [
          "Identify seconds: 1,000,000 s.",
          "Divide by fortnight factor: 1,000,000 / 1,209,600 = 0.82672.",
          "Result: 1,000,000 seconds equals approximately 0.8267 fortnights (about 11.57 days)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Fortnight Reference Table",
    headers: ["Seconds (s)", "Fortnights (fn)", "Equivalent Duration"],
    rows: [
      { fromVal: "86,400 s", toVal: "0.0714 fn", extra: "1 day" },
      { fromVal: "302,400 s", toVal: "0.2500 fn", extra: "3.5 days (half week)" },
      { fromVal: "604,800 s", toVal: "0.5000 fn", extra: "1 week (7 days)" },
      { fromVal: "1,000,000 s", toVal: "0.8267 fn", extra: "11.57 days" },
      { fromVal: "1,209,600 s", toVal: "1.0000 fn", extra: "1 fortnight (14 days)" },
      { fromVal: "2,419,200 s", toVal: "2.0000 fn", extra: "2 fortnights (28 days / 4 weeks)" },
      { fromVal: "3,628,800 s", toVal: "3.0000 fn", extra: "3 fortnights (42 days)" },
      { fromVal: "6,048,000 s", toVal: "5.0000 fn", extra: "5 fortnights (70 days / 10 weeks)" },
      { fromVal: "12,096,000 s", toVal: "10.0000 fn", extra: "10 fortnights (140 days)" },
      { fromVal: "31,536,000 s", toVal: "26.0714 fn", extra: "1 standard calendar year (365 days)" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Use Cases",
    items: [
      {
        title: "Corporate Payroll & Bi-Weekly Billing",
        text: "Automated enterprise resource planning (ERP) systems track hourly employee time logs in seconds before aggregating them into bi-weekly (fortnightly) pay cycles."
      },
      {
        title: "Agile & Scrum Sprint Durations",
        text: "Software development engineering teams commonly timebox two-week development sprints (1.2096 million seconds) to plan issue backlogs and feature deliverables."
      },
      {
        title: "International Rental & Tenancy Agreements",
        text: "Tenancy contracts in Australia, New Zealand, and the UK calculate recurring lease obligations on a strict fortnightly schedule."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing a fortnight (14 days = 1,209,600 s) with a calendar month (~30.44 days = 2,629,746 s).",
      "Dividing by 604,800 (which gives weeks rather than fortnights).",
      "Assuming a month has exactly two fortnights (a month averages ~2.17 fortnights)."
    ]
  },
  faqs: [
    {
      question: "How many seconds are in a fortnight?",
      answer: "There are exactly 1,209,600 seconds in a fortnight (14 days × 24 hours/day × 3,600 seconds/hour)."
    },
    {
      question: "How do you convert seconds to fortnights?",
      answer: "Divide the total duration in seconds by 1,209,600."
    },
    {
      question: "How many fortnights are in 1 million seconds?",
      answer: "1 million seconds equals approximately 0.8267 fortnights (about 11 days, 13 hours, and 46 minutes)."
    },
    {
      question: "How many fortnights are in a standard year?",
      answer: "A standard 365-day year contains exactly 26.0714 fortnights (or 26 fortnights plus 1 day)."
    },
    {
      question: "What does the word 'fortnight' literally mean?",
      answer: "The word fortnight comes from the Old English 'fēowertīene niht', literally meaning 'fourteen nights'."
    },
    {
      question: "Is a fortnight the same as two weeks?",
      answer: "Yes, a fortnight is universally defined as a period of fourteen consecutive days, which equals exactly two weeks."
    },
    {
      question: "How many fortnights are in 1 billion seconds?",
      answer: "1 billion seconds contains approximately 826.72 fortnights (roughly 31.71 calendar years)."
    },
    {
      question: "How do you convert fortnights back into seconds?",
      answer: "Multiply the number of fortnights by 1,209,600 (e.g., 2 fortnights × 1,209,600 = 2,419,200 seconds)."
    }
  ],
  relatedList: [
    { label: "Second to Week", from: "second", to: "week" },
    { label: "Second to Day", from: "second", to: "day" },
    { label: "Fortnight to Second", from: "fortnight", to: "second" }
  ],
  references: [
    "Oxford English Dictionary - Etymology and Historical Usage of Fortnight",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI)"
  ]
};
