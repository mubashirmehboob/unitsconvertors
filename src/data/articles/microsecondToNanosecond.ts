import { CustomArticleData } from "./types";

export const microsecondToNanosecond: CustomArticleData = {
  fromUnitId: "microsecond",
  toUnitId: "nanosecond",
  seoTitle: "Microsecond to Nanosecond Converter (µs to ns) - UnitsConvertors",
  metaDescription: "Convert microseconds to nanoseconds (µs to ns) accurately. Master the 1,000 multiplication formula, CPU clock cycles, LiDAR time-of-flight, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/microsecond-to-nanosecond",
  h1: "Microsecond to Nanosecond Converter",
  introduction: [
    "Converting microseconds to nanoseconds moves down the SI time scale into the ultra-fast world of semiconductor physics, microprocessor cycle timing, LiDAR distance measurement, and fiber-optic photon propagation. At this sub-microsecond scale, engineers analyze the propagation delay of individual logic gates, DRAM memory access times, and atomic clock synchronization jitter.",
    "Both units are metric decimal submultiples of the SI base second. A microsecond (µs) represents one-millionth ($10^{-6}$) of a second, while a nanosecond (ns) represents one-billionth ($10^{-9}$) of a second. Because there are exactly 1,000 nanoseconds in one microsecond, converting from microseconds to nanoseconds simply requires multiplying the microsecond value by 1,000. For example, 1.5 microseconds equals 1,500 nanoseconds, and 0.05 microseconds equals 50 nanoseconds.",
    "This technical guide explains the conversion principles connecting microseconds and nanoseconds, provides practical hardware and networking calculation examples, explores real-world computing applications, and features a detailed reference table."
  ],
  quickAnswer: {
    text: "To convert microseconds to nanoseconds, multiply the microsecond value by 1,000 (or move the decimal point 3 places to the right). For example, 2.5 µs equals 2,500 ns, and 0.1 µs equals 100 ns.",
    formulaDisplay: "ns = µs × 1,000",
    subtext: "1 microsecond = 1,000 nanoseconds | 1 nanosecond = 0.001 microseconds (10⁻³ µs)"
  },
  aboutSourceUnit: {
    title: "Understanding the Microsecond (µs)",
    text: "A microsecond is an SI unit of time equal to one-millionth of a second ($10^{-6}$ s). Denoted by the Greek letter mu (µs) or ASCII 'us', it represents the typical timescale for operating system task context switches, solid-state drive read operations, and ultrasonic transducer pulses."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanosecond (ns)",
    text: "A nanosecond is an SI unit of time equal to one-billionth of a second ($10^{-9}$ s). Denoted by the symbol 'ns', it is the baseline timescale for microprocessor internal clock cycles (e.g., a 3.0 GHz CPU performs one clock cycle in roughly 0.33 ns), DDR memory bus latencies, and laser pulse durations."
  },
  relationship: "One microsecond equals exactly 1,000 nanoseconds. Conversely, one nanosecond equals exactly 0.001 microseconds ($10^{-3}$ µs). Multiplying any microsecond value by 1,000 converts that duration into nanoseconds.",
  relationshipTitle: "Microsecond to Nanosecond Key Milestones",
  relationshipItems: [
    { label: "0.001 Microseconds", value: "1 ns (light travels ~30 cm in vacuum)" },
    { label: "0.010 Microseconds", value: "10 ns (CPU L3 cache lookup)" },
    { label: "0.050 Microseconds", value: "50 ns (DRAM memory access latency)" },
    { label: "0.100 Microseconds", value: "100 ns (solid-state optocoupler delay)" },
    { label: "1.000 Microsecond", value: "1,000 ns (1 µs milestone)" },
    { label: "10.000 Microseconds", value: "10,000 ns (PCIe Gen5 packet transit)" }
  ],
  formula: {
    text: "Multiply the duration in microseconds by 1,000 to determine nanoseconds.",
    math: "\\text{ns} = \\mu\\text{s} \\times 1,000 = \\mu\\text{s} \\times 10^3",
    subtext: "To convert nanoseconds back into microseconds, divide the nanosecond value by 1,000."
  },
  formulaTitle: "Microsecond to Nanosecond Mathematical Formula",
  practicalTip: {
    title: "Three-Place Decimal Shift Right",
    text: "To convert microseconds to nanoseconds mentally, shift the decimal point 3 positions to the right. For example, 0.45 µs becomes 450 ns."
  },
  expertNote: {
    title: "LiDAR Time-of-Flight & Distance Measurement",
    text: "Autonomous vehicle LiDAR sensors emit laser pulses and measure the round-trip return time. Because light travels approximately 0.2998 meters (about 1 foot) per nanosecond in air, an echo delay of 0.2 microseconds (200 nanoseconds) corresponds to a total round-trip distance of 60 meters, placing the detected obstacle exactly 30 meters away."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: DDR5 Memory Controller Latency",
        subtitle: "A memory controller datasheet specifies a CAS latency delay of 0.014 microseconds. Convert this timing into nanoseconds.",
        steps: [
          "State starting value: 0.014 µs.",
          "Apply formula: ns = µs × 1,000.",
          "Calculate: 0.014 × 1,000 = 14.0.",
          "Result: 0.014 microseconds equals exactly 14 nanoseconds (14 ns)."
        ]
      },
      {
        title: "Example 2: Precision Time Protocol (PTP) Jitter",
        subtitle: "A network switch hardware clock synchronizer reports a synchronization jitter of 0.35 microseconds. Convert this offset into nanoseconds.",
        steps: [
          "Identify microseconds: 0.35 µs.",
          "Multiply by 1,000: 0.35 × 1,000 = 350.",
          "Result: 0.35 microseconds equals exactly 350 nanoseconds."
        ]
      },
      {
        title: "Example 3: Fiber-Optic Propagation Delay",
        subtitle: "An optical signal transiting a 400-meter local fiber link requires 1.96 microseconds. Convert this duration to nanoseconds.",
        steps: [
          "State the value: 1.96 µs.",
          "Multiply by 1,000: 1.96 × 1,000 = 1,960.",
          "Result: 1.96 microseconds equals exactly 1,960 nanoseconds."
        ]
      }
    ]
  },
  table: {
    title: "Microsecond to Nanosecond Reference Table",
    headers: ["Microseconds (µs)", "Nanoseconds (ns)", "Seconds (s)", "Physical & Hardware Context"],
    rows: [
      { fromVal: "0.001 µs", toVal: "1 ns", extra: "1.0 × 10⁻⁹ s", extra2: "Light travels ~30 cm in vacuum" },
      { fromVal: "0.005 µs", toVal: "5 ns", extra: "5.0 × 10⁻⁹ s", extra2: "Fast logic gate propagation" },
      { fromVal: "0.010 µs", toVal: "10 ns", extra: "1.0 × 10⁻⁸ s", extra2: "Processor L2/L3 cache access" },
      { fromVal: "0.050 µs", toVal: "50 ns", extra: "5.0 × 10⁻⁸ s", extra2: "Main memory DRAM bus access" },
      { fromVal: "0.100 µs", toVal: "100 ns", extra: "1.0 × 10⁻⁷ s", extra2: "High-speed network interface buffer" },
      { fromVal: "0.250 µs", toVal: "250 ns", extra: "2.5 × 10⁻⁷ s", extra2: "LiDAR 37.5-meter target reflection" },
      { fromVal: "0.500 µs", toVal: "500 ns", extra: "5.0 × 10⁻⁷ s", extra2: "Flash memory charge pump cycle" },
      { fromVal: "1.000 µs", toVal: "1,000 ns", extra: "1.0 × 10⁻⁶ s", extra2: "1 microsecond milestone" },
      { fromVal: "2.000 µs", toVal: "2,000 ns", extra: "2.0 × 10⁻⁶ s", extra2: "Solid-state relay switching speed" },
      { fromVal: "5.000 µs", toVal: "5,000 ns", extra: "5.0 × 10⁻⁶ s", extra2: "High-frequency trade execution window" },
      { fromVal: "10.000 µs", toVal: "10,000 ns", extra: "1.0 × 10⁻⁵ s", extra2: "Fast PCIe packet interrupt delay" },
      { fromVal: "100.000 µs", toVal: "100,000 ns", extra: "1.0 × 10⁻⁴ s", extra2: "NAND flash memory page read" }
    ]
  },
  applications: {
    title: "Engineering Applications of µs to ns Conversion",
    items: [
      {
        title: "Microprocessor & VLSI Circuit Design",
        text: "Semiconductor engineers converting timing constraints from simulation clock period microseconds into nanosecond logic-path propagation delays to verify setup and hold times."
      },
      {
        title: "LiDAR & Time-of-Flight (ToF) Sensing",
        text: "Robotics and autonomous navigation algorithms convert receiver photodiode trigger times from microseconds to nanoseconds to resolve millimeter-level obstacle mapping."
      },
      {
        title: "Precision Time Protocol (IEEE 1588 PTP)",
        text: "Financial exchanges and 5G cellular base stations synchronize distributed clocks using PTP, converting microsecond network jitter into sub-nanosecond timestamp corrections."
      },
      {
        title: "Ultrafast Laser Spectroscopy",
        text: "Chemical and quantum physicists measuring fluorescent decay and electron transition states convert pulse delays from microseconds to nanoseconds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Because a nanosecond is a smaller unit than a microsecond, you must multiply by 1,000. Dividing by 1,000 yields milliseconds.",
      "Confusing ns ($10^{-9}$ s) with ps ($10^{-12}$ s): Picoseconds are another factor of 1,000 smaller. 1 microsecond equals 1,000,000 picoseconds, not 1,000.",
      "Losing significant digits in string formatting: When displaying nanoseconds in software, avoid parsing floating-point representations that might truncate fractional nanoseconds in high-precision benchmarks.",
      "Assuming all CPU instructions take 1 nanosecond: Modern processors execute multiple instructions per nanosecond via pipelining and superscalar execution, while memory stall cycles can take 50 to 100 nanoseconds."
    ]
  },
  faqs: [
    {
      question: "How do you convert microseconds to nanoseconds?",
      answer: "Multiply the number of microseconds by 1,000: ns = µs × 1,000."
    },
    {
      question: "How many nanoseconds are in one microsecond?",
      answer: "There are exactly 1,000 nanoseconds in one microsecond."
    },
    {
      question: "What is 1 nanosecond in microseconds?",
      answer: "1 nanosecond equals 0.001 microseconds ($10^{-3}$ µs)."
    },
    {
      question: "What is 0.5 microseconds in nanoseconds?",
      answer: "0.5 microseconds multiplied by 1,000 equals 500 nanoseconds."
    },
    {
      question: "What is 10 microseconds in nanoseconds?",
      answer: "10 microseconds multiplied by 1,000 equals 10,000 nanoseconds."
    },
    {
      question: "Which unit is smaller, microsecond or nanosecond?",
      answer: "A nanosecond is smaller. It is 1,000 times smaller than a microsecond (one-billionth vs one-millionth of a second)."
    },
    {
      question: "How far does light travel in one nanosecond?",
      answer: "In a vacuum, light travels approximately 29.98 centimeters (about 11.8 inches, or roughly one foot) in one nanosecond."
    },
    {
      question: "How do you convert nanoseconds back into microseconds?",
      answer: "Divide the number of nanoseconds by 1,000: µs = ns ÷ 1,000."
    },
    {
      question: "How many nanoseconds are in a millisecond?",
      answer: "There are exactly 1,000,000 nanoseconds in one millisecond (1,000 µs × 1,000 ns)."
    },
    {
      question: "How many nanoseconds are in one second?",
      answer: "There are exactly 1,000,000,000 nanoseconds (1 billion ns) in one second."
    }
  ],
  relatedList: [
    { label: "Microsecond to Millisecond", from: "microsecond", to: "millisecond" },
    { label: "Microsecond to Second", from: "microsecond", to: "second" },
    { label: "Nanosecond to Microsecond", from: "nanosecond", to: "microsecond" },
    { label: "Nanosecond to Millisecond", from: "nanosecond", to: "millisecond" },
    { label: "Nanosecond to Second", from: "nanosecond", to: "second" }
  ],
  references: [
    "BIPM — The International System of Units (SI) Metric Prefixes",
    "IEEE Standard 1588 — Precision Clock Synchronization Protocol",
    "NIST Special Publication 330 — The International System of Units (SI)"
  ]
};
