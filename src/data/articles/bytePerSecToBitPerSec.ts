import { CustomArticleData } from "./types";

export const BpsToBpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "bps",
  seoTitle: "Byte/sec to Bit/sec Converter (B/s to bps) - UnitsConvertors",
  metaDescription: "Convert bytes per second to bits per second (B/s to bps) instantly. Learn the 1:8 conversion formula (bps = B/s × 8), worked examples, charts, and networking FAQs.",
  h1: "Byte/sec to Bit/sec Converter",
  introduction: [
    "Converting bytes per second (B/s) to bits per second (bps) translates file system disk activity and memory transfer rates into hardware network bitrates. System utilities, file managers, and software download progress bars report write speeds in bytes per second, whereas network interfaces, switches, and ISPs specify bandwidth capacity in bits per second.",
    "By international computing and telecommunication standards, 1 byte is comprised of exactly 8 bits. Therefore, converting bytes per second to bits per second requires multiplying the value by 8. For instance, a file transfer rate of 100 bytes per second equals a network bitrate of 800 bits per second.",
    "This reference explains the mathematical relationship between bytes per second and bits per second, provides step-by-step conversion examples, features a quick-lookup conversion table, and addresses common network engineering questions."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to bits per second (bps), multiply the value by 8. For example, 125 B/s equals 1,000 bps (125 × 8 = 1,000 bps).",
    formulaDisplay: "Bits per second (bps) = Bytes per second (B/s) × 8",
    subtext: "1 B/s = 8 bps (1 bps = 0.125 B/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) measures data storage processing and transfer rates over time. A byte represents a group of 8 contiguous bits, sufficient to store a single ASCII character. Operating systems, file managers, and database logs record performance in bytes per second."
  },
  aboutTargetUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the foundational physical unit for data transmission rate. A bit is the most elementary binary unit (0 or 1). Network switches, serial communications, and modem hardware measure line signaling in bits per second."
  },
  relationship: "Because 1 byte equals 8 bits, data measured in bytes per second expands by a factor of 8 when expressed in bits per second. Converting B/s to bps scales the numerical rate up by 8.",
  relationshipTitle: "Byte/sec to Bit/sec Rate Comparison",
  relationshipItems: [
    { label: "1 B/s", value: "= 8 bps" },
    { label: "10 B/s", value: "= 80 bps" },
    { label: "100 B/s", value: "= 800 bps" },
    { label: "125 B/s", value: "= 1,000 bps (1 kbps)" },
    { label: "1,000 B/s", value: "= 8,000 bps (8 kbps)" }
  ],
  formula: {
    text: "Multiply the bytes per second value by 8 to obtain bits per second.",
    math: "bps = B/s × 8",
    subtext: "Equivalently: B/s = bps ÷ 8."
  },
  formulaTitle: "Byte/sec to Bit/sec Conversion Formula",
  practicalTip: {
    title: "Evaluating Network Interface Saturation",
    text: "If an operating system logs an application writing to a socket at 12,500 B/s, multiplying by 8 reveals a network load of 100,000 bps (100 kbps)."
  },
  expertNote: {
    title: "Capitalization Rules",
    text: "Uppercase 'B' signifies bytes (8 bits), while lowercase 'b' signifies bits (1/8 byte). Expressing 10 B/s as 10 bps introduces an 800% mathematical error."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Serial Data Buffer Rate",
        subtitle: "A micro-controller writes 1,200 bytes per second to an RS-232 serial interface. Calculate the bitrate in bps.",
        steps: [
          "Identify byte rate: 1,200 B/s.",
          "Apply conversion formula: bps = 1,200 × 8.",
          "Calculate: 1,200 × 8 = 9,600.",
          "Result: 1,200 B/s equals 9,600 bps."
        ]
      },
      {
        title: "Example 2: Web Server Log Throughput",
        subtitle: "An HTTP server logs output at 7,000 bytes per second. Convert this speed to bits per second.",
        steps: [
          "Identify byte rate: 7,000 B/s.",
          "Apply conversion formula: bps = 7,000 × 8.",
          "Calculate: 7,000 × 8 = 56,000.",
          "Result: 7,000 B/s equals 56,000 bps."
        ]
      },
      {
        title: "Example 3: Sensor Array Output",
        subtitle: "An industrial telemetry unit transmits 12,500 bytes per second. Calculate its speed in bits per second.",
        steps: [
          "Identify byte rate: 12,500 B/s.",
          "Apply conversion formula: bps = 12,500 × 8.",
          "Calculate: 12,500 × 8 = 100,000.",
          "Result: 12,500 B/s equals 100,000 bps (100 kbps)."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to Bit/sec Conversion Table",
    headers: ["Bytes per Second (B/s)", "Bits per Second (bps)", "Equivalent Notation"],
    rows: [
      { fromVal: "1 B/s", toVal: "8 bps", extra: "8 bits/sec" },
      { fromVal: "2 B/s", toVal: "16 bps", extra: "16 bits/sec" },
      { fromVal: "5 B/s", toVal: "40 bps", extra: "40 bits/sec" },
      { fromVal: "10 B/s", toVal: "80 bps", extra: "80 bits/sec" },
      { fromVal: "50 B/s", toVal: "400 bps", extra: "400 bits/sec" },
      { fromVal: "100 B/s", toVal: "800 bps", extra: "0.8 kbps" },
      { fromVal: "125 B/s", toVal: "1,000 bps", extra: "1 kbps" },
      { fromVal: "500 B/s", toVal: "4,000 bps", extra: "4 kbps" },
      { fromVal: "1,000 B/s", toVal: "8,000 bps", extra: "8 kbps" },
      { fromVal: "1,200 B/s", toVal: "9,600 bps", extra: "9.6 kbps RS-232" }
    ]
  },
  applications: {
    title: "Applications of Byte/sec to Bit/sec Conversion",
    items: [
      {
        title: "System Performance Tuning",
        text: "Translating kernel disk write metrics into network interface bandwidth demands."
      },
      {
        title: "Embedded Systems Firmware",
        text: "Converting byte buffer drain speeds into serial UART clock frequencies."
      },
      {
        title: "Network Switch Monitoring",
        text: "Correlating application payload byte rates with SNMP interface bit counters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 8 instead of multiplying: Dividing scales the value down 8x instead of up 8x.",
      "Confusing B/s (bytes/sec) with bps (bits/sec): Assuming 1 B/s = 1 bps understates line load by 87.5%.",
      "Ignoring framing overhead: Asynchronous serial transmission (RS-232) adds start and stop bits, making 1 byte take 10 line bits."
    ]
  },
  faqs: [
    {
      question: "How many bits per second is 1 byte per second?",
      answer: "1 byte per second equals exactly 8 bits per second."
    },
    {
      question: "What is the formula to convert B/s to bps?",
      answer: "The formula is bps = B/s × 8."
    },
    {
      question: "How many bits per second is 100 B/s?",
      answer: "100 B/s multiplied by 8 equals 800 bits per second."
    },
    {
      question: "Why do we multiply by 8 to convert bytes to bits?",
      answer: "We multiply by 8 because international computing standards define 1 byte as a sequence of 8 bits."
    },
    {
      question: "How many bytes per second is 1,000 bps?",
      answer: "1,000 bps divided by 8 equals 125 bytes per second."
    },
    {
      question: "What is the difference between B/s and bps?",
      answer: "B/s (uppercase B) measures bytes per second (storage/file rate), while bps (lowercase b) measures bits per second (network bitrate)."
    },
    {
      question: "How many bps is 125 bytes per second?",
      answer: "125 bytes per second multiplied by 8 equals 1,000 bps (1 kbps)."
    },
    {
      question: "How do I convert bits per second back to bytes per second?",
      answer: "Divide the bits per second value by 8."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Byte/sec to Kbps", from: "Bps", to: "kbps" },
    { label: "Byte/sec to KB/s", from: "Bps", to: "KBps" },
    { label: "Byte/sec to Mbps", from: "Bps", to: "Mbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE Standard 1541-2002 — Prefixes for Binary Multiples"
  ]
};
