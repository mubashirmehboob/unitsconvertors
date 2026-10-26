import { CustomArticleData } from "./types";

export const nanosecondToMicrosecond: CustomArticleData = {
  fromUnitId: "nanosecond",
  toUnitId: "microsecond",
  seoTitle: "Nanosecond to Microsecond Converter (ns to µs) - UnitsConvertors",
  metaDescription: "Convert nanoseconds to microseconds (ns to µs) accurately. Master the 1,000 division formula, CPU cache latency, memory timing benchmarks, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/nanosecond-to-microsecond",
  h1: "Nanosecond to Microsecond Converter",
  introduction: [
    "Converting nanoseconds to microseconds is one of the most fundamental calculations in modern computer systems engineering, semiconductor design, and high-speed photonics. Within microprocessors, transistor gates switch in fractions of a nanosecond, while level-3 cache queries, system bus transactions, and flash storage reads operate on the order of microseconds.",
    "Both units are consecutive metric submultiples of the SI second: a microsecond is one-millionth (10⁻⁶) of a second, and a nanosecond is one-billionth (10⁻⁹) of a second. Because there are exactly three orders of magnitude between them, one microsecond contains exactly 1,000 nanoseconds (10³ ns). To convert nanoseconds into microseconds, divide the nanosecond count by 1,000 (or multiply by 0.001). For instance, 4,500 nanoseconds equals exactly 4.5 microseconds.",
    "This technical guide explains the conversion between nanoseconds and microseconds, details computer architecture memory hierarchy benchmarks, provides practical calculation examples, and includes an extensive reference lookup table."
  ],
  quickAnswer: {
    text: "To convert nanoseconds to microseconds, divide the nanosecond value by 1,000 (or move the decimal point 3 places to the left). For example, 2,500 ns equals 2.5 µs, and 500 ns equals 0.5 µs.",
    formulaDisplay: "µs = ns ÷ 1,000",
    subtext: "1 microsecond = 1,000 nanoseconds | 1 nanosecond = 0.001 microseconds (10⁻³ µs)."
  },
  aboutSourceUnit: {
    title: "Understanding the Nanosecond (ns)",
    text: "A nanosecond is an SI fraction of time equal to one-billionth (10⁻⁹) of a second. Symbolized as ns, it represents the speed of fundamental electronic and optical processes. A 3.2 GHz processor completes a full clock cycle in approximately 0.31 nanoseconds, and light travels roughly 30 centimeters (about 1 foot) in a vacuum in 1 nanosecond."
  },
  aboutTargetUnit: {
    title: "Understanding the Microsecond (µs)",
    text: "A microsecond is an SI fraction of time equal to one-millionth (10⁻⁶) of a second. Symbolized as µs (or 'us' in ASCII text), it is the primary benchmark for measuring RAM read/write access times, PCIe bus serialization, flash memory NAND cell reads, and medical ultrasound pulse intervals."
  },
  relationship: "One microsecond contains exactly 1,000 nanoseconds. Conversely, one nanosecond equals exactly 0.001 microseconds (10⁻³ µs). Dividing any duration in nanoseconds by 1,000 converts it directly into microseconds.",
  relationshipTitle: "Nanosecond to Microsecond Hardware Hierarchy Benchmarks",
  relationshipItems: [
    { label: "1 Nanosecond (1 ns)", value: "0.001 µs (1 GHz CPU clock cycle)" },
    { label: "10 Nanoseconds (10 ns)", value: "0.010 µs (L3 cache reference)" },
    { label: "50 Nanoseconds (50 ns)", value: "0.050 µs (DDR5 RAM access delay)" },
    { label: "100 Nanoseconds (100 ns)", value: "0.100 µs (cross-socket CPU bus ping)" },
    { label: "500 Nanoseconds (500 ns)", value: "0.500 µs (half a microsecond)" },
    { label: "1,000 Nanoseconds (1,000 ns)", value: "1.000 µs (1 full microsecond)" },
    { label: "10,000 Nanoseconds (10,000 ns)", value: "10.000 µs (NVMe SSD flash block read)" }
  ],
  formula: {
    text: "Divide the duration in nanoseconds by 1,000 (or multiply by 0.001) to obtain microseconds.",
    math: "\\mu\\text{s} = \\frac{\\text{ns}}{1,000} = \\text{ns} \\times 10^{-3}",
    subtext: "To convert microseconds back into nanoseconds, multiply the microsecond value by 1,000."
  },
  formulaTitle: "Nanosecond to Microsecond Mathematical Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert nanoseconds to microseconds quickly in your head, shift the decimal point 3 places to the left. For example, 1,750 ns becomes 1.75 µs."
  },
  expertNote: {
    title: "Latency Numbers Every Computer Engineer Should Know",
    text: "In Jeff Dean's famous computer architecture taxonomy: an L1 cache reference takes ~0.5 ns (0.0005 µs), branch misprediction takes ~5 ns (0.005 µs), L2 cache reference takes ~7 ns (0.007 µs), main memory (RAM) access takes ~100 ns (0.1 µs), and reading 1 MB sequentially from memory takes ~250,000 ns (250 µs)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Networking Buffer Delay",
        subtitle: "A 100 Gbps network switch logs an ingress packet buffer queue delay of 12,400 nanoseconds. Convert this delay to microseconds.",
        steps: [
          "State starting value: 12,400 ns.",
          "Apply conversion formula: µs = ns ÷ 1,000.",
          "Calculate: 12,400 ÷ 1,000 = 12.4.",
          "Result: 12,400 nanoseconds equals exactly 12.4 microseconds."
        ]
      },
      {
        title: "Example 2: Laser Eye Surgery Pulse Width",
        subtitle: "A medical excimer laser emits an ultraviolet corneal pulse lasting 350 nanoseconds. Convert this pulse duration to microseconds.",
        steps: [
          "State input value: 350 ns.",
          "Apply formula: µs = ns ÷ 1,000.",
          "Calculate: 350 ÷ 1,000 = 0.35.",
          "Result: 350 nanoseconds corresponds to exactly 0.35 microseconds."
        ]
      },
      {
        title: "Example 3: RAM Memory Page Fault Latency",
        subtitle: "A virtual memory management unit incurs an address translation delay of 85 nanoseconds. Express this duration in microseconds.",
        steps: [
          "State starting value: 85 ns.",
          "Divide by 1,000: 85 ÷ 1,000 = 0.085.",
          "Result: 85 nanoseconds equals exactly 0.085 microseconds."
        ]
      }
    ]
  },
  table: {
    title: "Nanosecond to Microsecond Reference Table",
    headers: ["Nanoseconds (ns)", "Microseconds (µs)", "Scientific Notation", "Hardware Operational Context"],
    rows: [
      { fromVal: "1 ns", toVal: "0.001 µs", extra: "1.0 × 10⁻³ µs", extra2: "1 GHz CPU clock period" },
      { fromVal: "10 ns", toVal: "0.010 µs", extra: "1.0 × 10⁻² µs", extra2: "L3 CPU cache lookup" },
      { fromVal: "50 ns", toVal: "0.050 µs", extra: "5.0 × 10⁻² µs", extra2: "DRAM chip cell access" },
      { fromVal: "100 ns", toVal: "0.100 µs", extra: "1.0 × 10⁻¹ µs", extra2: "Main memory access latency" },
      { fromVal: "250 ns", toVal: "0.250 µs", extra: "2.5 × 10⁻¹ µs", extra2: "Quarter microsecond" },
      { fromVal: "500 ns", toVal: "0.500 µs", extra: "5.0 × 10⁻¹ µs", extra2: "Half a microsecond" },
      { fromVal: "1,000 ns", toVal: "1.000 µs", extra: "1.0 × 10⁰ µs", extra2: "1 full microsecond (µs)" },
      { fromVal: "2,500 ns", toVal: "2.500 µs", extra: "2.5 × 10⁰ µs", extra2: "Fast context switch" },
      { fromVal: "5,000 ns", toVal: "5.000 µs", extra: "5.0 × 10⁰ µs", extra2: "5 microseconds" },
      { fromVal: "10,000 ns", toVal: "10.000 µs", extra: "1.0 × 10¹ µs", extra2: "NVMe SSD flash read" },
      { fromVal: "50,000 ns", toVal: "50.000 µs", extra: "5.0 × 10¹ µs", extra2: "Microcontroller interrupt cycle" },
      { fromVal: "100,000 ns", toVal: "100.000 µs", extra: "1.0 × 10² µs", extra2: "High-speed camera strobe pulse" }
    ]
  },
  applications: {
    title: "Practical Applications of Nanosecond to Microsecond Conversion",
    items: [
      {
        title: "Computer Architecture Memory Hierarchy",
        text: "Hardware architects measure L1/L2/L3 CPU cache latencies in nanoseconds and evaluate how cache misses impact microsecond memory access and system bus throughput."
      },
      {
        title: "High-Frequency Trading (HFT) Execution",
        text: "Trading algorithmic models calculate networking wire flight times in nanoseconds, aggregating trade confirmations into microseconds to comply with exchange latency regulations."
      },
      {
        title: "Semiconductor Lithography & Photolithography",
        text: "Laser exposure heads in semiconductor fabrication plants pulse at nanosecond intervals, synchronizing beam delivery across microsecond wafer translation steps."
      },
      {
        title: "Radar & Sonar Echo Processing",
        text: "Radar receivers process electromagnetic return wave intervals in nanoseconds, converting flight time differences into microsecond pulse intervals to determine target velocity."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000,000 instead of 1,000: Dividing by one million converts nanoseconds to milliseconds, not microseconds. There are only 1,000 nanoseconds in one microsecond.",
      "Symbol confusion between µs and ms: Remember that µs is microsecond (10⁻⁶ s) and ms is millisecond (10⁻³ s). Dividing by 1,000 gets you to microseconds (µs).",
      "Using ASCII 'u' instead of Greek 'µ': While 'us' is accepted in plaintext programming contexts, standard documentation and academic papers require the official SI Greek symbol 'µs'.",
      "Assuming light travels 1 meter per nanosecond: Light travels roughly 30 cm (1 foot) in 1 nanosecond in a vacuum, and about 20 cm in copper or silica glass. It requires approximately 3.33 nanoseconds to travel 1 meter in a vacuum."
    ]
  },
  faqs: [
    {
      question: "How do you convert nanoseconds to microseconds?",
      answer: "Divide the number of nanoseconds by 1,000 (or multiply by 0.001): microseconds = nanoseconds ÷ 1,000."
    },
    {
      question: "How many nanoseconds are in one microsecond?",
      answer: "There are exactly 1,000 nanoseconds in one microsecond (1 µs = 1,000 ns)."
    },
    {
      question: "What is 1 nanosecond in microseconds?",
      answer: "1 nanosecond equals exactly 0.001 microseconds (10⁻³ µs)."
    },
    {
      question: "What is 500 nanoseconds in microseconds?",
      answer: "500 nanoseconds divided by 1,000 equals 0.5 microseconds (half a microsecond)."
    },
    {
      question: "What is 2,500 nanoseconds in microseconds?",
      answer: "2,500 nanoseconds divided by 1,000 equals 2.5 microseconds."
    },
    {
      question: "How do you convert microseconds back into nanoseconds?",
      answer: "Multiply the number of microseconds by 1,000: nanoseconds = microseconds × 1,000."
    },
    {
      question: "What is the difference between a nanosecond and a microsecond?",
      answer: "A microsecond is 10⁻⁶ seconds (one-millionth of a second), whereas a nanosecond is 10⁻⁹ seconds (one-billionth of a second). One microsecond is exactly 1,000 times longer than a nanosecond."
    },
    {
      question: "How far does light travel in one microsecond compared to one nanosecond?",
      answer: "In a vacuum, light travels approximately 30 centimeters (about 1 foot) in 1 nanosecond, and approximately 300 meters (about 984 feet) in 1 microsecond."
    },
    {
      question: "What is the official symbol for nanosecond and microsecond?",
      answer: "The official SI symbol for nanosecond is 'ns', and for microsecond is 'µs'."
    },
    {
      question: "How many nanoseconds are in 1 millisecond?",
      answer: "There are 1,000,000 nanoseconds in 1 millisecond (which equals 1,000 microseconds)."
    }
  ],
  relatedList: [
    { label: "Nanosecond to Millisecond", from: "nanosecond", to: "millisecond" },
    { label: "Nanosecond to Second", from: "nanosecond", to: "second" },
    { label: "Microsecond to Nanosecond", from: "microsecond", to: "nanosecond" },
    { label: "Microsecond to Millisecond", from: "microsecond", to: "millisecond" },
    { label: "Nanosecond to Minute", from: "nanosecond", to: "minute" }
  ],
  references: [
    "BIPM — The International System of Units (SI): Time Prefixes and Relations",
    "NIST — Computer Science and Telecommunications: Time Metrology and Precision Standards",
    "ISO 80000-3:2019 — Space and Time Quantities"
  ]
};
