import { CustomArticleData } from "./types";

export const millisecondToCentury: CustomArticleData = {
  fromUnitId: "millisecond",
  toUnitId: "century",
  seoTitle: "Millisecond to Century Converter (ms to cent) - UnitsConvertors",
  metaDescription: "Convert milliseconds to centuries (ms to cent) accurately. Master the 3,153,600,000,000 division formula, Gregorian vs Julian epochs, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millisecond-to-century",
  h1: "Millisecond to Century Converter",
  introduction: [
    "Converting milliseconds to centuries bridges micro-temporal electronics and operating system timestamp telemetry with hundred-year human history, civil architecture lifecycles, and deep astronomical calculations. In computing, standard 64-bit systems measure high-precision time in elapsed milliseconds since January 1, 1970 UTC, an interval that computer scientists and long-term archivists periodically project across centuries of digital preservation.",
    "A standard common century consists of 100 common calendar years, containing 36,500 days, 876,000 hours, 52,560,000 minutes, and 3,153,600,000 seconds. Because each second contains 1,000 milliseconds, exactly 3,153,600,000,000 milliseconds make up one common century (3.1536 trillion ms). In astronomical measurements, a standard Julian century spans 36,525 days (3,155,760,000,000 milliseconds), while an average Gregorian century contains 36,524.25 days (3,155,695,200,000 milliseconds). To convert milliseconds to common centuries, divide the millisecond count by 3,153,600,000,000.",
    "This technical guide details the mathematical principles connecting sub-second ticks to century-scale durations, outlines real-world use cases in deep-time data retention, provides worked examples, and presents a comprehensive benchmark reference table."
  ],
  quickAnswer: {
    text: "To convert milliseconds to standard common centuries, divide the millisecond total by 3,153,600,000,000 (3.1536 trillion). For example, 1,576,800,000,000 milliseconds equals exactly 0.5 centuries (50 common years), and 1 trillion milliseconds corresponds to approximately 0.3171 centuries.",
    formulaDisplay: "cent = ms ÷ 3,153,600,000,000",
    subtext: "1 common century (36,500 d) = 3,153,600,000,000 ms | 1 Julian century (36,525 d) = 3,155,760,000,000 ms"
  },
  aboutSourceUnit: {
    title: "Understanding the Millisecond (ms)",
    text: "A millisecond is a decimal fraction of the SI base second, equal to one-thousandth of a second ($10^{-3}$ s). It serves as the standard unit for recording software execution latencies, database transaction durations, web ping responses, and POSIX epoch timestamp clocks across modern operating systems."
  },
  aboutTargetUnit: {
    title: "Understanding the Century (cent)",
    text: "A century is a macro-unit of calendar and astronomical time spanning 100 consecutive years (10 decades). Used widely in historical chronology, climatology, geological sedimentation studies, and civil infrastructure planning, centuries describe broad human eras and multi-generational institutional timelines."
  },
  relationship: "One common century encompasses 100 common years of 365 days, yielding 36,500 days, 876,000 hours, 52,560,000 minutes, 3,153,600,000 seconds, and 3,153,600,000,000 milliseconds. Dividing any quantity of milliseconds by 3,153,600,000,000 converts that duration into standard common centuries.",
  relationshipTitle: "Millisecond to Century Milestone Equivalents",
  relationshipItems: [
    { label: "1 Billion Milliseconds (10⁹ ms)", value: "~0.000317 cent (~11.57 days)" },
    { label: "1 Trillion Milliseconds (10¹² ms)", value: "~0.31710 cent (~31.71 years)" },
    { label: "Quarter Century (25 years)", value: "788,400,000,000 ms (0.25 cent)" },
    { label: "Half Century (50 years)", value: "1,576,800,000,000 ms (0.50 cent)" },
    { label: "1 Common Century (100 common yr)", value: "3,153,600,000,000 ms (1.00 cent)" },
    { label: "1 Julian Century (36,525 days)", value: "3,155,760,000,000 ms (~1.00069 cent)" }
  ],
  formula: {
    text: "Divide the millisecond value by 3,153,600,000,000 to find the equivalent common centuries (or multiply by approximately 3.170979 × 10⁻¹³).",
    math: "\\text{cent} = \\frac{\\text{ms}}{3,153,600,000,000} = \\text{ms} \\times 3.170979 \\times 10^{-13}",
    subtext: "To convert centuries back into milliseconds, multiply the century value by 3,153,600,000,000."
  },
  formulaTitle: "Millisecond to Century Mathematical Formula",
  practicalTip: {
    title: "Days-to-Years Shortcut",
    text: "To approximate manually: divide the millisecond count by 86,400,000 to find total days. Then divide total days by 36,500 (or 36,525 for calendar accuracy) to calculate centuries."
  },
  expertNote: {
    title: "64-Bit Integer Epoch Longevity",
    text: "While legacy 32-bit signed integer timestamps will overflow on January 19, 2038 (the Year 2038 problem, spanning ~68 years from 1970), modern 64-bit integer millisecond timestamps will not overflow for over 292 million years (2,920,000 centuries), guaranteeing astronomical stability."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Monumental Dam Design Lifespan",
        subtitle: "A hydroelectric gravity dam is engineered for an operating design lifecycle of 3,784,320,000,000 milliseconds. Convert this duration to centuries.",
        steps: [
          "State starting millisecond duration: 3,784,320,000,000 ms.",
          "Apply formula: cent = ms ÷ 3,153,600,000,000.",
          "Calculate: 3,784,320,000,000 ÷ 3,153,600,000,000 = 1.2.",
          "Result: 3,784,320,000,000 milliseconds equals exactly 1.2 common centuries (120 common years)."
        ]
      },
      {
        title: "Example 2: 1 Trillion Milliseconds in Centuries",
        subtitle: "Determine the fraction of a century represented by 1,000,000,000,000 ms ($10^{12}$ ms).",
        steps: [
          "Identify milliseconds: 1,000,000,000,000 ms.",
          "Divide by common century factor: 1,000,000,000,000 ÷ 3,153,600,000,000 ≈ 0.317098.",
          "Result: 1 trillion milliseconds corresponds to approximately 0.3171 centuries (about 31 years and 259 days)."
        ]
      },
      {
        title: "Example 3: Nuclear Repository Waste Containment",
        subtitle: "A deep geological repository monitoring system tracks a primary containment barrier seal rated for 7,884,000,000,000 milliseconds. Convert this duration to centuries.",
        steps: [
          "State the value: 7,884,000,000,000 ms.",
          "Divide by 3,153,600,000,000: 7,884,000,000,000 ÷ 3,153,600,000,000 = 2.5.",
          "Result: 7,884,000,000,000 milliseconds equals exactly 2.5 common centuries (250 common years)."
        ]
      }
    ]
  },
  table: {
    title: "Millisecond to Century Reference Table",
    headers: ["Milliseconds (ms)", "Centuries (cent)", "Equivalent Years (yr)", "Contextual Milestone"],
    rows: [
      { fromVal: "315,360,000,000 ms", toVal: "0.1000 cent", extra: "10 yr", extra2: "1 common decade (10 years)" },
      { fromVal: "630,720,000,000 ms", toVal: "0.2000 cent", extra: "20 yr", extra2: "2 common decades (generation interval)" },
      { fromVal: "788,400,000,000 ms", toVal: "0.2500 cent", extra: "25 yr", extra2: "Quarter century (silver jubilee)" },
      { fromVal: "1,000,000,000,000 ms", toVal: "0.3171 cent", extra: "31.71 yr", extra2: "1 trillion milliseconds (10¹² ms)" },
      { fromVal: "1,576,800,000,000 ms", toVal: "0.5000 cent", extra: "50 yr", extra2: "Half century (golden jubilee)" },
      { fromVal: "2,365,200,000,000 ms", toVal: "0.7500 cent", extra: "75 yr", extra2: "Three-quarters of a century" },
      { fromVal: "3,153,600,000,000 ms", toVal: "1.0000 cent", extra: "100 yr", extra2: "1 common century (100 common years)" },
      { fromVal: "4,730,400,000,000 ms", toVal: "1.5000 cent", extra: "150 yr", extra2: "Sesquicentennial milestone" },
      { fromVal: "6,307,200,000,000 ms", toVal: "2.0000 cent", extra: "200 yr", extra2: "Bicentennial milestone (2 centuries)" },
      { fromVal: "9,460,800,000,000 ms", toVal: "3.0000 cent", extra: "300 yr", extra2: "Tercentenary milestone (3 centuries)" },
      { fromVal: "15,768,000,000,000 ms", toVal: "5.0000 cent", extra: "500 yr", extra2: "Quincentenary (half millennium)" },
      { fromVal: "31,536,000,000,000 ms", toVal: "10.0000 cent", extra: "1,000 yr", extra2: "1 millennium (10 centuries)" }
    ]
  },
  applications: {
    title: "Industry Applications of ms to cent Conversion",
    items: [
      {
        title: "Digital Preservation & National Archives",
        text: "National heritage libraries and digital preservation consortia specify archive format longevity by calculating media degradation and verification schedules in centuries from epoch milliseconds."
      },
      {
        title: "Astronomical Ephemeris Calculations",
        text: "Astronomers compute planetary orbital perturbations and precession rates expressed per Julian century, translating high-frequency radiotelescope timecode logs into century coefficients."
      },
      {
        title: "Civil Infrastructure & Bridge Engineering",
        text: "Design codes for monumental suspension bridges, subterranean transit tunnels, and sea wall barriers require modeling corrosion and structural fatigue over design lifespans spanning one to two centuries."
      },
      {
        title: "Climatology & Ice Core Stratigraphy",
        text: "Climate modeling software interpolates annual carbon dioxide and oxygen isotope records from high-resolution micro-chronological data into century-averaged climate trends."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing decades with centuries: A decade is 10 years (315.36 billion ms), whereas a century is 100 years (3.1536 trillion ms). Dividing by 315,360,000,000 yields decades, not centuries.",
      "Omitting leap centuries in long projections: Over a Gregorian century, there are usually 24 leap years (or 25 if the century year is divisible by 400, such as the year 2000). A mean Gregorian century equals 3,155,695,200,000 ms, about 2.095 billion ms longer than a common century.",
      "Floating-point rounding error: Standard IEEE 754 64-bit double-precision floats maintain 53 bits of mantissa (approx. 15–17 decimal digits), which comfortably accommodates trillion-level millisecond values without truncation.",
      "Confusing Julian centuries with calendar centuries: Astronomers define a Julian century as exactly 36,525 ephemeris days (3,155,760,000,000 ms), whereas civil legal definitions often reference 100 calendar years."
    ]
  },
  faqs: [
    {
      question: "How do you convert milliseconds to centuries?",
      answer: "Divide the total number of milliseconds by 3,153,600,000,000: cent = ms ÷ 3,153,600,000,000."
    },
    {
      question: "How many milliseconds are in one common century?",
      answer: "There are exactly 3,153,600,000,000 milliseconds (3.1536 trillion ms) in one common 100-year century (100 × 365 × 86,400,000 ms)."
    },
    {
      question: "How many milliseconds are in an astronomical Julian century?",
      answer: "An astronomical Julian century contains exactly 36,525 days, which equals 3,155,760,000,000 milliseconds (3.15576 trillion ms)."
    },
    {
      question: "What is 1 trillion milliseconds in centuries?",
      answer: "1,000,000,000,000 milliseconds divided by 3,153,600,000,000 equals approximately 0.3171 centuries (about 31 years and 259 days)."
    },
    {
      question: "What is half a century in milliseconds?",
      answer: "Half a century (50 common years) equals exactly 1,576,800,000,000 milliseconds (1.5768 trillion ms)."
    },
    {
      question: "How many decades are in one century?",
      answer: "There are exactly 10 decades in one century."
    },
    {
      question: "How do you convert centuries back to milliseconds?",
      answer: "Multiply the century value by 3,153,600,000,000: ms = cent × 3,153,600,000,000."
    },
    {
      question: "How many milliseconds have elapsed since the Unix epoch (1970)?",
      answer: "As of the mid-2020s, approximately 1.75 to 1.80 trillion milliseconds have elapsed since January 1, 1970 UTC, representing roughly 0.56 centuries (56 years)."
    },
    {
      question: "What is the difference between a century and a millennium?",
      answer: "A century is 100 years (3.1536 trillion ms), whereas a millennium is 1,000 years (31.536 trillion ms), which is 10 times larger."
    },
    {
      question: "Why do scientists use Julian centuries?",
      answer: "Julian centuries provide an invariant, fixed baseline of exactly 36,525 standard days of 86,400 SI seconds, eliminating calendar irregularities for astronomical and orbital mechanics calculations."
    }
  ],
  relatedList: [
    { label: "Millisecond to Decade", from: "millisecond", to: "decade" },
    { label: "Millisecond to Year", from: "millisecond", to: "year" },
    { label: "Millisecond to Fortnight", from: "millisecond", to: "fortnight" },
    { label: "Century to Year", from: "century", to: "year" },
    { label: "Century to Millisecond", from: "century", to: "millisecond" }
  ],
  references: [
    "International Astronomical Union (IAU) — Recommendations on Astronomical Constants and Time Scales",
    "BIPM — The International System of Units (SI) Guide to Time",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units"
  ]
};
