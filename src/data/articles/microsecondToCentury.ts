import { CustomArticleData } from "./types";

export const microsecondToCentury: CustomArticleData = {
  fromUnitId: "microsecond",
  toUnitId: "century",
  seoTitle: "Microsecond to Century Converter (µs to cent) - UnitsConvertors",
  metaDescription: "Convert microseconds to centuries (µs to cent) with scientific precision. Master the 3,153,600,000,000,000 division formula, geochronology metrics, and tables.",
  canonicalUrl: "https://unitsconvertors.com/microsecond-to-century",
  h1: "Microsecond to Century Converter",
  introduction: [
    "Converting microseconds to centuries connects sub-millisecond atomic and electronic timing with secular historical epochs and geochronological timescales. In physics research, nuclear dating, relativistic celestial mechanics, and optical lattice clock stability analysis, scientists routinely reconcile microsecond physical observations against century-long intervals.",
    "A standard century spans exactly 100 calendar years. Under conventional unit standards using 365-day common years, a century contains 36,500 days, 876,000 hours, 52,560,000 minutes, or 3,153,600,000 seconds. Because each second contains 1,000,000 microseconds, one standard common century corresponds to exactly 3,153,600,000,000,000 microseconds (3.1536 quadrillion µs). In the Gregorian calendar, accounting for 24 leap years yields 36,524 days (3,155,673,600,000,000 µs), while an astronomical Julian century (36,525 days) equals exactly 3,155,760,000,000,000 microseconds.",
    "This reference explains the mathematical conversion between microseconds and centuries, explores scientific and astronomical applications, provides worked calculation examples, and includes an extensive lookup table."
  ],
  quickAnswer: {
    text: "To convert microseconds to standard centuries, divide the microsecond duration by 3,153,600,000,000,000 (or multiply by 3.170979 × 10⁻¹⁶). For example, 1,576,800,000,000,000 µs equals exactly 0.5 centuries (50 common years), and 3,153,600,000,000,000 µs equals exactly 1.0 century.",
    formulaDisplay: "cent = µs ÷ 3,153,600,000,000,000",
    subtext: "1 standard century = 100 common years = 36,500 days = 3,153,600,000 seconds = 3,153,600,000,000,000 microseconds."
  },
  aboutSourceUnit: {
    title: "Understanding the Microsecond (µs)",
    text: "The microsecond is an SI fraction of time equal to one-millionth (10⁻⁶) of a second. Symbolized as µs, it represents the operational timescale of microchip instruction pipelining, ultrasound imaging wave propagation, optical network packet routing, and camera strobe bursts."
  },
  aboutTargetUnit: {
    title: "Understanding the Century (cent)",
    text: "A century is a macro-scale unit of time equal to 100 consecutive calendar years (approximately 36,524.25 days in the Gregorian calendar or 36,500 days in common-year conversion metrics). It serves as the primary benchmark in historical eras, long-term climate modeling, radioactive waste storage protocols, and astronomical precession measurements."
  },
  relationship: "One standard common century contains exactly 3,153,600,000,000,000 microseconds (3.1536 quadrillion µs). One microsecond is equal to approximately 3.170979 × 10⁻¹⁶ centuries. Dividing any microsecond value by 3.1536 quadrillion converts that figure into standard centuries.",
  relationshipTitle: "Century Milestone Benchmarks in Microseconds",
  relationshipItems: [
    { label: "1 Microsecond (1 µs)", value: "3.1710 × 10⁻¹⁶ cent" },
    { label: "1 Common Year (365 days)", value: "31,536,000,000,000 µs (0.010000 cent)" },
    { label: "1 Decade (10 common years)", value: "315,360,000,000,000 µs (0.100000 cent)" },
    { label: "Quarter Century (25 common years)", value: "788,400,000,000,000 µs (0.250000 cent)" },
    { label: "Half Century (50 common years)", value: "1,576,800,000,000,000 µs (0.500000 cent)" },
    { label: "1 Common Century (100 common years)", value: "3,153,600,000,000,000 µs (1.000000 cent)" },
    { label: "1 Julian Astronomical Century (36,525 days)", value: "3,155,760,000,000,000 µs (~1.000685 cent)" }
  ],
  formula: {
    text: "Divide the duration in microseconds by 3,153,600,000,000,000 to obtain standard common centuries.",
    math: "\\text{cent} = \\frac{\\mu\\text{s}}{3,153,600,000,000,000} = \\mu\\text{s} \\times 3.170979 \\times 10^{-16}",
    subtext: "For an exact Julian astronomical century (36,525 days), divide by 3,155,760,000,000,000."
  },
  formulaTitle: "Microsecond to Century Mathematical Formula",
  practicalTip: {
    title: "Handling Quadrillion Divisors",
    text: "When performing calculations in code, avoid integer overflow by using floating-point scientific notation: express 3,153,600,000,000,000 as 3.1536e15."
  },
  expertNote: {
    title: "Optical Lattice Clocks and Century Drift",
    text: "State-of-the-art optical lattice clocks using strontium or ytterbium atoms exhibit systematic fractional frequency uncertainties below 10⁻¹⁸, which equates to an accumulated timing deviation of less than 100 microseconds over an entire century (3.15 × 10¹⁵ µs)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 6.3 Quadrillion Microseconds to Centuries",
        subtitle: "A radioactive isotope decay experiment records 6,307,200,000,000,000 microseconds of continuous background emissions. Convert this interval to centuries.",
        steps: [
          "State starting value: 6,307,200,000,000,000 µs.",
          "Apply conversion formula: cent = µs ÷ 3,153,600,000,000,000.",
          "Calculate: 6,307,200,000,000,000 ÷ 3,153,600,000,000,000 = 2.0.",
          "Result: 6,307,200,000,000,000 microseconds equals exactly 2.0 common centuries (200 common years)."
        ]
      },
      {
        title: "Example 2: Converting 788.4 Trillion Microseconds",
        subtitle: "An oceanic geological core sample indicates a sediment deposition layer corresponding to 788,400,000,000,000 microseconds. Determine the century fraction.",
        steps: [
          "State input value: 788,400,000,000,000 µs.",
          "Apply formula: cent = µs ÷ 3,153,600,000,000,000.",
          "Calculate: 788,400,000,000,000 ÷ 3,153,600,000,000,000 = 0.25.",
          "Result: 788,400,000,000,000 microseconds equals exactly 0.25 centuries (25 common years, or a quarter-century)."
        ]
      },
      {
        title: "Example 3: Converting 1 Quadrillion Microseconds",
        subtitle: "A high-performance computing cluster logs 1,000,000,000,000,000 microseconds (10¹⁵ µs) of cumulative CPU core runtime. Express this in centuries.",
        steps: [
          "State starting value: 1,000,000,000,000,000 µs.",
          "Divide by 3,153,600,000,000,000: 1,000,000,000,000,000 ÷ 3,153,600,000,000,000 ≈ 0.317098.",
          "Result: 1 quadrillion microseconds corresponds to approximately 0.3171 centuries (about 31.71 common years)."
        ]
      }
    ]
  },
  table: {
    title: "Microsecond to Century Reference Table",
    headers: ["Microseconds (µs)", "Centuries (cent)", "Equivalent Span", "Physical or Civil Context"],
    rows: [
      { fromVal: "31,536,000,000,000 µs", toVal: "0.010000 cent", extra: "1 common year", extra2: "Annual cycle" },
      { fromVal: "157,680,000,000,000 µs", toVal: "0.050000 cent", extra: "5 common years", extra2: "Half decade" },
      { fromVal: "315,360,000,000,000 µs", toVal: "0.100000 cent", extra: "10 common years", extra2: "1 full decade" },
      { fromVal: "788,400,000,000,000 µs", toVal: "0.250000 cent", extra: "25 common years", extra2: "Quarter century" },
      { fromVal: "1,576,800,000,000,000 µs", toVal: "0.500000 cent", extra: "50 common years", extra2: "Half century (golden jubilee)" },
      { fromVal: "2,365,200,000,000,000 µs", toVal: "0.750000 cent", extra: "75 common years", extra2: "Three-quarter century" },
      { fromVal: "3,153,600,000,000,000 µs", toVal: "1.000000 cent", extra: "100 common years", extra2: "1 full common century" },
      { fromVal: "3,155,760,000,000,000 µs", toVal: "1.000685 cent", extra: "100 Julian years", extra2: "Julian astronomical century" },
      { fromVal: "6,307,200,000,000,000 µs", toVal: "2.000000 cent", extra: "200 common years", extra2: "Two centuries (bicentennial)" },
      { fromVal: "15,768,000,000,000,000 µs", toVal: "5.000000 cent", extra: "500 common years", extra2: "Half millennium (5 centuries)" },
      { fromVal: "31,536,000,000,000,000 µs", toVal: "10.000000 cent", extra: "1,000 common years", extra2: "One millennium (10 centuries)" }
    ]
  },
  applications: {
    title: "Industry Applications of Microsecond to Century Conversion",
    items: [
      {
        title: "Relativistic Geodesy & Astronomy",
        text: "Astronomers measuring Earth's rotational deceleration caused by tidal friction calculate day-length variations on the order of 1.7 milliseconds per century, translating microsecond adjustments into celestial coordinate systems."
      },
      {
        title: "Primary Frequency Metrology",
        text: "Metrologists at the BIPM and NIST verify that atomic frequency standards achieve stability over century-long projections, defining the physical boundary of temporal measurement precision."
      },
      {
        title: "Long-Term Radioactive Waste Containment",
        text: "Nuclear containment engineers model fission isotope decay curves spanning centuries, reconciling microsecond detector counts with regulatory multi-century isolation benchmarks."
      },
      {
        title: "Geomagnetic Secular Variation",
        text: "Geophysicists track reversals and excursions in Earth's magnetic field, scaling continuous microsecond sensor sampling rates into multi-century geomagnetic drift models."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Leap years across centuries: Under the Gregorian calendar, century years are only leap years if divisible by 400 (e.g., 2000 was a leap year, but 1900 and 2100 are not). A Gregorian century contains either 24 or 25 leap days.",
      "Astronomical Julian centuries vs civil centuries: The Julian century is defined as exactly 36,525 days (31,557,600,000,000,000 µs) and is universally used in celestial mechanics formulas (such as planetary precession J2000.0). Do not confuse it with 100 common years (31,536,000,000,000,000 µs).",
      "Floating-point representation errors: Working with numbers in the 10¹⁵ range requires 64-bit IEEE 754 double precision (which supports up to 9 × 10¹⁵ without loss of integer precision). Single-precision floats will round and corrupt low-order digits.",
      "Conflating centuries with millenniums: A century is 100 years (3.1536 × 10¹⁵ µs), while a millennium is 1,000 years (3.1536 × 10¹⁶ µs)."
    ]
  },
  faqs: [
    {
      question: "How many microseconds are in one common century?",
      answer: "A standard century of 100 common years contains exactly 3,153,600,000,000,000 microseconds (3.1536 quadrillion µs)."
    },
    {
      question: "How many microseconds are in an astronomical Julian century?",
      answer: "An astronomical Julian century (36,525 days) contains exactly 3,155,760,000,000,000 microseconds."
    },
    {
      question: "What is the formula to convert microseconds to standard centuries?",
      answer: "The formula is: centuries = microseconds ÷ 3,153,600,000,000,000. Alternatively, multiply microseconds by 3.170979 × 10⁻¹⁶."
    },
    {
      question: "How many microseconds are in half a century?",
      answer: "Half a common century (50 common years) contains exactly 1,576,800,000,000,000 microseconds (1.5768 quadrillion µs)."
    },
    {
      question: "What is 1 microsecond in centuries expressed in scientific notation?",
      answer: "One microsecond is approximately 3.170979 × 10⁻¹⁶ common centuries."
    },
    {
      question: "How do you convert 1 quadrillion microseconds to centuries?",
      answer: "Divide 1,000,000,000,000,000 by 3,153,600,000,000,000, which yields approximately 0.3171 centuries (about 31.71 common years)."
    },
    {
      question: "Why do astronomers use the Julian century?",
      answer: "The Julian century of 36,525 days provides a constant, uniform unit of time independent of calendar fluctuations, standardizing planetary ephemerides and astronomical constants."
    },
    {
      question: "How many microseconds make up one millennium?",
      answer: "One millennium (1,000 common years) contains exactly 31,536,000,000,000,000 microseconds (31.536 quadrillion µs)."
    },
    {
      question: "How do you convert centuries back into microseconds?",
      answer: "Multiply the number of centuries by 3,153,600,000,000,000: microseconds = centuries × 3,153,600,000,000,000."
    },
    {
      question: "What is the standard abbreviation for century?",
      answer: "Century is commonly abbreviated as 'cent' or 'c' in temporal unit tables."
    }
  ],
  relatedList: [
    { label: "Microsecond to Decade", from: "microsecond", to: "decade" },
    { label: "Microsecond to Year", from: "microsecond", to: "year" },
    { label: "Microsecond to Month", from: "microsecond", to: "month" },
    { label: "Microsecond to Second", from: "microsecond", to: "second" },
    { label: "Millisecond to Century", from: "millisecond", to: "century" }
  ],
  references: [
    "BIPM — The International System of Units (SI): Metric Time Dimensions",
    "IAU — International Astronomical Union: Astronomical Constants and Julian Epoch Standards",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units"
  ]
};
