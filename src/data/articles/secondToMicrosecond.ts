import { CustomArticleData } from "./types";

export const secondToMicrosecond: CustomArticleData = {
  fromUnitId: "second",
  toUnitId: "microsecond",
  seoTitle: "Second to Microsecond Converter (s to µs)",
  metaDescription: "Convert seconds to microseconds (s to µs) accurately. Learn the metric conversion formula (s × 1,000,000), step-by-step examples, and scientific timekeeping data.",
  h1: "Second to Microsecond Converter",
  introduction: [
    "Converting seconds to microseconds is a vital time metric calculation used across microelectronics, high-frequency telecommunications, computer hardware profiling, and physics research. The metric prefix 'micro-' denotes one-millionth of a base unit, meaning exactly 1,000,000 microseconds make up 1 standard second.",
    "Converting seconds to microseconds requires multiplying the number of seconds by 1,000,000 (or 10⁶). This guide explains the metric formula, practical step-by-step calculations, hardware benchmarks, and quick reference conversion tables."
  ],
  quickAnswer: {
    text: "To convert seconds to microseconds, multiply the duration in seconds by 1,000,000. For example, 0.001 seconds (1 millisecond) equals 1,000 microseconds.",
    formulaDisplay: "µs = s × 1,000,000",
    subtext: "One microsecond is 1/1,000,000th of a second (10⁻⁶ s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Second (s)",
    text: "The second is the foundational unit of time in the International System of Units (SI). Derived from the atomic transition frequencies of caesium-133, it anchors scientific timekeeping across global navigation systems, astronomical clocks, and network synchronization protocols."
  },
  aboutTargetUnit: {
    title: "Understanding the Microsecond (µs)",
    text: "A microsecond is a sub-unit of time equal to one-millionth of a second (10⁻⁶ s). Symbolized by 'µs' (or 'us' in ASCII text), microseconds measure camera flash durations, microprocessor clock cycles, ultrasonic wave propagation, and network packet transit times."
  },
  relationship: "Because microseconds use the metric system powers of ten, 1 second equals 1,000,000 microseconds. To convert seconds to microseconds, shift the decimal point six places to the right.",
  relationshipTitle: "Second vs Microsecond Scale Comparison",
  relationshipItems: [
    { label: "1 Microsecond", value: "0.000001 s" },
    { label: "Camera Studio Strobe", value: "0.0001 s = 100 µs" },
    { label: "1 Millisecond", value: "0.001 s = 1,000 µs" },
    { label: "1 Second", value: "1,000,000 µs" }
  ],
  formula: {
    text: "Multiply the duration in seconds by 1,000,000 to find the equivalent time in microseconds.",
    math: "µs = s × 1,000,000",
    subtext: "To convert microseconds back to seconds, divide by 1,000,000 (or multiply by 10⁻⁶)."
  },
  formulaTitle: "Second to Microsecond Formula",
  practicalTip: {
    title: "Scientific Notation Shortcut",
    text: "When working with small fractional seconds, express the number in scientific notation and add 6 to the exponent (e.g., 2.5 × 10⁻³ s becomes 2.5 × 10³ µs = 2,500 µs)."
  },
  expertNote: {
    title: "High-Frequency Trading & Network Ping",
    text: "In algorithmic financial markets, trade execution speed advantage is measured in single-digit microseconds, where a delay of 10 µs can determine whether an arbitrage order executes."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Camera Flash (0.00025 seconds)",
        subtitle: "Convert a camera strobe duration of 0.00025 seconds into microseconds.",
        steps: [
          "Identify the duration in seconds: 0.00025 s.",
          "Apply the formula: µs = s × 1,000,000.",
          "Calculate: 0.00025 × 1,000,000 = 250.",
          "Result: 0.00025 seconds equals 250 µs."
        ]
      },
      {
        title: "Example 2: CPU RAM Memory Access (0.00000008 seconds)",
        subtitle: "Convert a system RAM latency time of 0.00000008 seconds to microseconds.",
        steps: [
          "Identify the time in seconds: 0.00000008 s.",
          "Multiply by 1,000,000: 0.00000008 × 1,000,000 = 0.08.",
          "Result: 0.00000008 seconds equals 0.08 µs (or 80 nanoseconds)."
        ]
      }
    ]
  },
  table: {
    title: "Second to Microsecond Reference Table",
    headers: ["Seconds (s)", "Microseconds (µs)", "Physical / Technical Event"],
    rows: [
      { fromVal: "0.000001 s", toVal: "1 µs", extra: "1 microsecond benchmark" },
      { fromVal: "0.00001 s", toVal: "10 µs", extra: "Speed of sound distance across 3.4 mm" },
      { fromVal: "0.0001 s", toVal: "100 µs", extra: "High-speed camera xenon flash pulse" },
      { fromVal: "0.001 s", toVal: "1,000 µs", extra: "1 millisecond" },
      { fromVal: "0.01 s", toVal: "10,000 µs", extra: "10 milliseconds" },
      { fromVal: "0.1 s", toVal: "100,000 µs", extra: "100 milliseconds" },
      { fromVal: "0.5 s", toVal: "500,000 µs", extra: "Half second" },
      { fromVal: "1 s", toVal: "1,000,000 µs", extra: "1 full second" },
      { fromVal: "5 s", toVal: "5,000,000 µs", extra: "5 seconds" }
    ]
  },
  applications: {
    title: "Technical Applications of Second to Microsecond Conversions",
    items: [
      {
        title: "Microcontroller Interrupts & Embedded Systems",
        text: "Engineers writing C/C++ microchip drivers calculate hardware pulse-width modulation (PWM) timer intervals in microseconds."
      },
      {
        title: "Medical Ultrasound Imaging",
        text: "Ultrasound diagnostic machines calculate tissue boundary depths by measuring sound wave reflections returning in microseconds."
      },
      {
        title: "Telecommunications & Fiber Optics",
        text: "Light travels approximately 300 meters per microsecond in a vacuum (and ~200 meters inside fiber optic cable glass)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing microseconds (µs) with milliseconds (ms, 1,000 µs) or nanoseconds (ns, 0.001 µs).",
      "Counting 5 zeros instead of 6 when multiplying by 1,000,000.",
      "Writing 'us' in formal scientific documents where the official Greek symbol 'µs' is required."
    ]
  },
  faqs: [
    {
      question: "How do you convert seconds to microseconds?",
      answer: "Multiply the duration in seconds by 1,000,000."
    },
    {
      question: "How many microseconds are in 1 second?",
      answer: "There are exactly 1,000,000 microseconds in 1 second."
    },
    {
      question: "What is the symbol for microsecond?",
      answer: "The official SI symbol is 'µs' (using the Greek letter mu). In standard ASCII computing contexts, 'us' is commonly accepted."
    },
    {
      question: "How many microseconds are in 1 millisecond?",
      answer: "There are 1,000 microseconds in 1 millisecond."
    },
    {
      question: "What is 0.01 seconds in microseconds?",
      answer: "0.01 seconds is equal to 10,000 microseconds."
    },
    {
      question: "How far does light travel in 1 microsecond?",
      answer: "In a vacuum, light travels approximately 299.79 meters (about 983 feet) in 1 microsecond."
    },
    {
      question: "What is 0.005 seconds in microseconds?",
      answer: "0.005 seconds equals 5,000 microseconds."
    }
  ],
  relatedList: [
    { label: "Second to Millisecond", from: "second", to: "millisecond" },
    { label: "Second to Nanosecond", from: "second", to: "nanosecond" },
    { label: "Second to Minute", from: "second", to: "minute" }
  ],
  references: [
    "BIPM - Metric Prefixes & SI Derived Units",
    "NIST Handbook 44 - Units and Systems of Measurement"
  ]
};
