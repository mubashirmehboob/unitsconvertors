import { CustomArticleData } from "./types";

export const secondToCentury: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "century",
  seoTitle: "Second to Century Converter (s to cent)",
  metaDescription: "Convert seconds to centuries (s to cent) accurately. Discover the division formula, Julian vs common century comparisons, calculation steps, and conversion tables.",
  h1: "Second to Century Converter",
  introduction: [
    "Converting seconds to centuries bridges the fundamental unit of atomic timekeeping with multi-generational astronomical and historical epochs. While a single second measures transient physical occurrences, a century encompasses one hundred calendar years, spanning 3,153,600,000 seconds in common calendar time and 3,155,760,000 seconds in astronomical Julian time.",
    "This conversion is routinely applied in radiometric geochronology, nuclear waste containment modeling, long-term climate simulations, and deep-space trajectory planning. To convert seconds into centuries, divide the duration in seconds by 3,153,600,000 (for standard 100-year periods of 365 days) or by 3,155,760,000 for standard astronomical Julian centuries."
  ],
  quickAnswer: {
    text: "To convert seconds to standard calendar centuries, divide the total number of seconds by 3,153,600,000. For example, 6,307,200,000 seconds equals exactly 2.0 centuries.",
    formulaDisplay: "centuries = s / 3,153,600,000",
    subtext: "1 common calendar century (100 non-leap years) = 3,153,600,000 seconds. An astronomical Julian century (36,525 days) = 3,155,760,000 seconds."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the primary base unit of time in the International System of Units (SI). Defined via the unperturbed ground-state hyperfine transition frequency of the caesium-133 atom (9,192,631,770 Hz), the second provides universal accuracy for atomic clocks, satellite positioning, and quantum electrodynamics."
  },
  aboutTargetUnit: {
    title: "Understanding the Century (cent)",
    text: "A century represents a temporal duration of 100 consecutive calendar years. In modern Gregorian chronology, a century typically contains 36,524 days (accounting for century leap-year rules), whereas astronomers standardize on the Julian century of exactly 36,525 ephemeris days (86,400 SI seconds each) for calculating planetary orbital precession."
  },
  relationship: "A common year has 31,536,000 seconds (365 days × 24 hours × 3,600 seconds). Multiplying by 100 yields 3,153,600,000 seconds in a basic century. When accounting for the standard 24 or 25 leap days, the total duration ranges between 3,155,673,600 and 3,155,760,000 seconds.",
  relationshipTitle: "Second to Century Scale Milestones",
  relationshipItems: [
    { label: "1 Million Seconds", value: "~0.000000317 centuries (11.57 days)" },
    { label: "1 Billion Seconds", value: "~0.317 centuries (31.71 years)" },
    { label: "1 Standard Year", value: "0.01 centuries (31,536,000 s)" },
    { label: "1 Common Century (100 yr)", value: "3,153,600,000 seconds" },
    { label: "1 Julian Century (36,525 d)", value: "3,155,760,000 seconds" }
  ],
  formula: {
    text: "Divide the total number of seconds by 3,153,600,000 to obtain centuries based on standard common years, or by 3,155,760,000 for astronomical Julian centuries.",
    math: "cent = s / 3,153,600,000",
    subtext: "To convert centuries back into seconds, multiply the century count by 3,153,600,000."
  },
  formulaTitle: "Second to Century Calculation Formula",
  practicalTip: {
    title: "Order of Magnitude Shortcut",
    text: "For fast scientific estimation, remember that 1 century is roughly π × 10⁹ seconds (~3.1416 billion seconds). This approximation is widely used by astrophysicists for mental order-of-magnitude estimates."
  },
  expertNote: {
    title: "Gregorian vs. Julian Century in Orbital Mechanics",
    text: "The International Astronomical Union (IAU) defines the Julian century as exactly 36,525 days of 86,400 SI seconds (3,155,760,000 s). This eliminates calendar discrepancies when computing stellar proper motion and planetary ephemeris."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 15.768 Billion Seconds to Centuries",
        subtitle: "Calculate how many centuries correspond to 15,768,000,000 seconds.",
        steps: [
          "State given time: 15,768,000,000 seconds.",
          "Apply the standard formula: cent = s / 3,153,600,000.",
          "Perform division: 15,768,000,000 / 3,153,600,000 = 5.0.",
          "Result: 15,768,000,000 seconds equals exactly 5 centuries (500 years)."
        ]
      },
      {
        title: "Example 2: Nuclear Half-Life Conversion (7.884 × 10⁹ seconds)",
        subtitle: "Convert a radioactive decay interval of 7,884,000,000 seconds into centuries.",
        steps: [
          "Identify seconds: 7,884,000,000 s.",
          "Divide by common century factor: 7,884,000,000 / 3,153,600,000 = 2.5.",
          "Result: 7,884,000,000 seconds corresponds to exactly 2.5 centuries (250 years)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Century Conversion Reference Table",
    headers: ["Seconds (s)", "Centuries (cent)", "Equivalent Period"],
    rows: [
      { fromVal: "31,536,000 s", toVal: "0.01 cent", extra: "1 common year" },
      { fromVal: "315,360,000 s", toVal: "0.10 cent", extra: "1 decade (10 years)" },
      { fromVal: "788,400,000 s", toVal: "0.25 cent", extra: "Quarter century (25 years)" },
      { fromVal: "1,576,800,000 s", toVal: "0.50 cent", extra: "Half century (50 years)" },
      { fromVal: "3,153,600,000 s", toVal: "1.00 cent", extra: "1 common century (100 years)" },
      { fromVal: "6,307,200,000 s", toVal: "2.00 cent", extra: "2 centuries (200 years)" },
      { fromVal: "9,460,800,000 s", toVal: "3.00 cent", extra: "3 centuries (300 years)" },
      { fromVal: "15,768,000,000 s", toVal: "5.00 cent", extra: "5 centuries (500 years)" },
      { fromVal: "31,536,000,000 s", toVal: "10.00 cent", extra: "1 millennium (1,000 years)" },
      { fromVal: "315,360,000,000 s", toVal: "100.00 cent", extra: "10 millennia (10,000 years)" }
    ]
  },
  applications: {
    title: "Key Scientific & Engineering Applications",
    items: [
      {
        title: "Radiometric Dating & Geochronology",
        text: "Geochemists measure isotope decay half-lives in laboratory seconds before translating rates into geological centuries and millennia."
      },
      {
        title: "Civil Infrastructure & Nuclear Waste Storage",
        text: "Long-term barrier degradation models for subterranean waste repositories evaluate structural integrity over intervals exceeding tens of centuries."
      },
      {
        title: "Planetary Ephemeris & Astronomy",
        text: "Celestial mechanics equations utilize Julian centuries as standard time steps to quantify cumulative gravitational perturbations across orbital bodies."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Confusing a decade (315.36 million seconds) with a century (3.1536 billion seconds).",
      "Omitting leap years when calculating exact historical dates across century boundaries.",
      "Dividing by 31,536,000 (which yields years instead of centuries)."
    ]
  },
  faqs: [
    {
      question: "How many seconds are in 1 century?",
      answer: "In a standard common century (100 non-leap years of 365 days), there are exactly 3,153,600,000 seconds. An astronomical Julian century (36,525 days) contains exactly 3,155,760,000 seconds."
    },
    {
      question: "How do I convert seconds to centuries?",
      answer: "Divide the total number of seconds by 3,153,600,000 for standard calendar years, or by 3,155,760,000 for astronomical Julian centuries."
    },
    {
      question: "How many centuries is 1 billion seconds?",
      answer: "1 billion seconds (1,000,000,000 s) is approximately 0.3171 centuries, which equals 31.71 years (or about 31 years and 259 days)."
    },
    {
      question: "How many centuries is 3.1536 billion seconds?",
      answer: "3,153,600,000 seconds equals exactly 1.0 standard calendar century (100 common years)."
    },
    {
      question: "Why do astronomers use Julian centuries?",
      answer: "Julian centuries have a constant length of 36,525 ephemeris days (3,155,760,000 SI seconds), eliminating calendar irregularities caused by leap year omissions."
    },
    {
      question: "How many seconds are in 1 millennium?",
      answer: "One millennium (10 centuries) contains 31,536,000,000 seconds in common years (or approximately 31,557,600,000 seconds including leap years)."
    },
    {
      question: "What is the formula to convert centuries back to seconds?",
      answer: "Multiply the number of centuries by 3,153,600,000 (e.g., 0.5 centuries × 3,153,600,000 = 1,576,800,000 seconds)."
    },
    {
      question: "Does the Gregorian calendar have 24 or 25 leap years per century?",
      answer: "A standard Gregorian century typically has 24 leap years (e.g., 1900 was not a leap year), while centuries ending in years divisible by 400 (such as the year 2000) have 25 leap years."
    }
  ],
  relatedList: [
    { label: "Second to Decade", from: "second", to: "decade" },
    { label: "Second to Year", from: "second", to: "year" },
    { label: "Century to Second", from: "century", to: "second" }
  ],
  references: [
    "BIPM - SI Base Units of Time (Bureau International des Poids et Mesures)",
    "IAU Standards of Fundamental Astronomy - Time Scales and Planetary Ephemeris"
  ]
};
