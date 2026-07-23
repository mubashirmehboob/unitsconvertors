import { CustomArticleData } from "./types";

export const secondToMinute: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "minute",
  seoTitle: "Second to Minute Converter (s to min)",
  metaDescription: "Convert seconds to minutes (s to min) quickly. Learn the division formula (s / 60), calculation steps, decimal vs remainder methods, and conversion tables.",
  h1: "Second to Minute Converter",
  introduction: [
    "Converting seconds to minutes is one of the most frequent time conversions in daily life, exercise routines, cooking, media production, and project scheduling. Because standard timekeeping uses a sexagesimal (base-60) system, exactly 60 seconds make up 1 minute.",
    "Converting seconds to minutes requires dividing the total number of seconds by 60. This guide explains the calculation formula, step-by-step examples for both decimal minutes and minutes-and-seconds remainders, and practical reference tables."
  ],
  quickAnswer: {
    text: "To convert seconds to minutes, divide the number of seconds by 60. For example, 120 seconds equals 2 minutes, and 90 seconds equals 1.5 minutes (or 1 minute 30 seconds).",
    formulaDisplay: "min = s / 60",
    subtext: "Sixty seconds equal one standard minute."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the foundational unit of time in the International System of Units (SI). Derived from atomic caesium resonance transitions, seconds provide precise measurement for short durations, sports split times, and scientific observations."
  },
  aboutTargetUnit: {
    title: "Understanding the Minute (min)",
    text: "A minute is a unit of time equal to 60 seconds or 1/60th of an hour. Although not an official SI base unit, the minute is accepted for use alongside SI units in civil timekeeping, sports, transport schedules, and audio track durations."
  },
  relationship: "The relationship between seconds and minutes is strictly sexagesimal: 1 minute = 60 seconds. To convert from seconds to minutes, divide by 60. To convert from minutes to seconds, multiply by 60.",
  relationshipTitle: "Second vs Minute Scale Comparison",
  relationshipItems: [
    { label: "15 Seconds", value: "0.25 min (1/4 minute)" },
    { label: "30 Seconds", value: "0.5 min (1/2 minute)" },
    { label: "45 Seconds", value: "0.75 min (3/4 minute)" },
    { label: "60 Seconds", value: "1.0 min (1 full minute)" },
    { label: "300 Seconds", value: "5.0 min" }
  ],
  formula: {
    text: "Divide the total duration in seconds by 60 to calculate the time in minutes.",
    math: "min = s / 60",
    subtext: "For remainders: Whole minutes = floor(s / 60); Remaining seconds = s mod 60."
  },
  formulaTitle: "Second to Minute Formula",
  practicalTip: {
    title: "Decimal to Seconds Remainder Trick",
    text: "When a division gives a decimal (e.g., 150 / 60 = 2.5 min), multiply the decimal portion (0.5) by 60 to find the remaining seconds (0.5 × 60 = 30 seconds -> 2 minutes 30 seconds)."
  },
  expertNote: {
    title: "Leap Seconds",
    text: "While civil minutes almost universally contain 60 seconds, International Earth Rotation and Reference Systems Service (IERS) occasionally adds a 'leap second' (61 seconds) to align UTC with Earth's rotation speed."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Running Workout Interval (180 seconds)",
        subtitle: "Convert an athletic interval sprint duration of 180 seconds to minutes.",
        steps: [
          "Identify duration in seconds: 180 s.",
          "Apply the formula: min = s / 60.",
          "Calculate: 180 / 60 = 3.",
          "Result: 180 seconds equals 3 minutes."
        ]
      },
      {
        title: "Example 2: Cooking Countdown Timer (210 seconds)",
        subtitle: "Convert a recipe step duration of 210 seconds to minutes and seconds.",
        steps: [
          "Divide 210 by 60: 210 / 60 = 3.5 minutes.",
          "Identify whole minutes: 3 minutes.",
          "Calculate remaining seconds: 0.5 × 60 = 30 seconds.",
          "Result: 210 seconds is 3.5 minutes (or 3 minutes 30 seconds)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Minute Quick Reference Table",
    headers: ["Seconds (s)", "Decimal Minutes (min)", "Minutes & Seconds Format"],
    rows: [
      { fromVal: "15 s", toVal: "0.25 min", extra: "0 min 15 s" },
      { fromVal: "30 s", toVal: "0.5 min", extra: "0 min 30 s" },
      { fromVal: "45 s", toVal: "0.75 min", extra: "0 min 45 s" },
      { fromVal: "60 s", toVal: "1.0 min", extra: "1 min 0 s" },
      { fromVal: "90 s", toVal: "1.5 min", extra: "1 min 30 s" },
      { fromVal: "120 s", toVal: "2.0 min", extra: "2 min 0 s" },
      { fromVal: "180 s", toVal: "3.0 min", extra: "3 min 0 s" },
      { fromVal: "300 s", toVal: "5.0 min", extra: "5 min 0 s" },
      { fromVal: "600 s", toVal: "10.0 min", extra: "10 min 0 s" },
      { fromVal: "3,600 s", toVal: "60.0 min", extra: "1 hour (60 min 0 s)" }
    ]
  },
  applications: {
    title: "Practical Applications of Second to Minute Conversions",
    items: [
      {
        title: "Fitness & High-Intensity Interval Training (HIIT)",
        text: "Athletes and personal trainers convert workout timer logs from seconds to minutes for session analysis and rest period tracking."
      },
      {
        title: "Audio & Video Post-Production",
        text: "Video editors convert raw clip durations in seconds into minutes and seconds for timeline layout and podcast formatting."
      },
      {
        title: "Customer Support & Call Center Metrics",
        text: "Call centers log average handling time (AHT) in seconds and convert figures to minutes for management productivity reporting."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 100 seconds equal 1 minute (mistaking base-60 time for base-10 decimals).",
      "Confusing decimal minutes with seconds (e.g., assuming 2.5 minutes is 2 minutes 5 seconds instead of 2 minutes 30 seconds).",
      "Multiplying by 60 instead of dividing when converting seconds to minutes."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to minutes?",
      answer: "Divide the number of seconds by 60."
    },
    {
      question: "What is 90 seconds in minutes?",
      answer: "90 seconds is equal to 1.5 minutes (or 1 minute 30 seconds)."
    },
    {
      question: "What is 120 seconds in minutes?",
      answer: "120 seconds is equal to 2 minutes."
    },
    {
      question: "What is 180 seconds in minutes?",
      answer: "180 seconds is equal to 3 minutes."
    },
    {
      question: "What is 300 seconds in minutes?",
      answer: "300 seconds is equal to 5 minutes."
    },
    {
      question: "How do you convert decimal minutes to seconds?",
      answer: "Multiply the decimal fraction by 60. For example, 0.25 minutes × 60 = 15 seconds."
    },
    {
      question: "What is 45 seconds in minutes?",
      answer: "45 seconds is equal to 0.75 minutes."
    }
  ],
  relatedList: [
    { label: "Second to Hour", from: "second", to: "hour" },
    { label: "Second to Millisecond", from: "second", to: "millisecond" },
    { label: "Minute to Second", from: "minute", to: "second" }
  ],
  references: [
    "BIPM - Non-SI Units Accepted for Use with SI",
    "ISO 8601 - Representations of Dates and Times"
  ]
};
