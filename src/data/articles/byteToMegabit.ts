import { CustomArticleData } from "./types";

export const byteToMegabit: CustomArticleData = {
  fromUnitId: "byte",
  toUnitId: "megabit",
  seoTitle: "Byte to Megabit Converter (B to Mb) - UnitsConvertors",
  metaDescription: "Convert bytes to megabits (B to Mb) accurately. Learn the exact calculation formula (1 Byte = 0.000008 Mb), network bandwidth examples, tables, and verified FAQs.",
  h1: "Byte to Megabit Converter",
  introduction: [
    "Converting bytes to megabits is a crucial calculation when evaluating internet connection speeds, streaming media bitrates, server network interface throughput, and cloud data transfer costs. While computer storage capacities are measured in bytes (B), communication networks transmit data in megabits per second (Mb/s or Mbps).",
    "Under the International System of Units (SI) decimal standard, 1 megabit (Mb) equals 1,000,000 bits. Because 1 byte contains 8 bits, 1 megabit equals 125,000 bytes (1,000,000 ÷ 8). Consequently, 1 byte equals 0.000008 megabits. To convert bytes to megabits, divide the byte count by 125,000 (or multiply by 0.000008).",
    "This technical guide details the exact mathematical relationship between bytes and megabits, explains network throughput calculations, provides step-by-step worked examples, offers lookup tables, and answers common networking FAQs."
  ],
  quickAnswer: {
    text: "To convert bytes to megabits, divide the number of bytes by 125,000 (or multiply by 0.000008). For example, 1,000,000 bytes equals 8 megabits (1,000,000 B ÷ 125,000 = 8 Mb).",
    formulaDisplay: "Megabits (Mb) = Bytes (B) ÷ 125,000",
    subtext: "1 Megabit = 125,000 Bytes (1 B = 0.000008 Mb)."
  },
  aboutSourceUnit: {
    title: "Understanding the Byte (B)",
    text: "A byte (symbol: B) is the standard unit of digital storage, consisting of 8 contiguous bits. Bytes quantify memory allocation, disk storage, and file sizes in modern operating systems."
  },
  aboutTargetUnit: {
    title: "Understanding the Megabit (Mb)",
    text: "A megabit (symbol: Mb) is a SI decimal multiple of the binary bit, equal to 1,000,000 bits (10⁶ bits) or 125,000 bytes. Megabits are the standard unit used to express ISP broadband speeds, cellular network throughput, and video encoding bitrates."
  },
  relationship: "Because 1 megabit contains 1,000,000 bits and 1 byte contains 8 bits, 1 megabit equals 125,000 bytes. Converting bytes to megabits scales the numerical value down by a factor of 125,000.",
  relationshipTitle: "Byte to Megabit Quantity Comparison",
  relationshipItems: [
    { label: "125,000 Bytes (B)", value: "= 1 Megabit (1 Mb)" },
    { label: "250,000 Bytes (B)", value: "= 2 Megabits (2 Mb)" },
    { label: "500,000 Bytes (B)", value: "= 4 Megabits (4 Mb)" },
    { label: "1,000,000 Bytes (1 MB)", value: "= 8 Megabits (8 Mb)" },
    { label: "12,500,000 Bytes (12.5 MB)", value: "= 100 Megabits (100 Mb)" }
  ],
  formula: {
    text: "Divide the byte quantity by 125,000 (or multiply by 0.000008) to calculate the equivalent volume in megabits.",
    math: "Megabits (Mb) = Bytes (B) ÷ 125,000",
    subtext: "Alternatively: Megabits (Mb) = (Bytes (B) × 8) ÷ 1,000,000."
  },
  formulaTitle: "Byte to Megabit Conversion Formula",
  practicalTip: {
    title: "Video Streaming Bitrate Tip",
    text: "A 4K Ultra HD video stream running at 25 Mbps transmits 25 megabits per second, which equals 3,125,000 bytes (3.125 MB) of data per second."
  },
  expertNote: {
    title: "Megabit (Mb) vs Megabyte (MB)",
    text: "A common telecommunications source of confusion is mixing up Megabits (lowercase b) and Megabytes (uppercase B). Since 1 byte = 8 bits, 1 Megabyte (1 MB) equals 8 Megabits (8 Mb)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Web Page Payload Transfer",
        subtitle: "A web page including images totals 2,500,000 bytes. Convert this payload size to megabits.",
        steps: [
          "Identify byte count: 2,500,000 B.",
          "Apply formula: Megabits = 2,500,000 ÷ 125,000.",
          "Calculate: 2,500,000 ÷ 125,000 = 20.",
          "Result: 2,500,000 bytes equals 20 megabits (20 Mb)."
        ]
      },
      {
        title: "Example 2: Software Update Download",
        subtitle: "An application update payload is 50,000,000 bytes. Calculate its size in megabits.",
        steps: [
          "Identify byte count: 50,000,000 B.",
          "Apply formula: Megabits = 50,000,000 ÷ 125,000.",
          "Calculate: 50,000,000 ÷ 125,000 = 400.",
          "Result: 50,000,000 bytes equals 400 megabits (400 Mb)."
        ]
      },
      {
        title: "Example 3: Server Log Buffer",
        subtitle: "A server flushes a log batch of 625,000 bytes across a network socket. Convert to megabits.",
        steps: [
          "Identify byte count: 625,000 B.",
          "Apply formula: Megabits = 625,000 ÷ 125,000.",
          "Calculate: 625,000 ÷ 125,000 = 5.",
          "Result: 625,000 bytes equals 5 megabits (5 Mb)."
        ]
      }
    ]
  },
  table: {
    title: "Byte to Megabit Conversion Table",
    headers: ["Bytes (B)", "Megabits (Mb)", "Total Bits (b)"],
    rows: [
      { fromVal: "1 B", toVal: "0.000008 Mb", extra: "8 bits" },
      { fromVal: "10,000 B", toVal: "0.08 Mb", extra: "80,000 bits" },
      { fromVal: "125,000 B", toVal: "1 Mb", extra: "1,000,000 bits" },
      { fromVal: "250,000 B", toVal: "2 Mb", extra: "2,000,000 bits" },
      { fromVal: "500,000 B", toVal: "4 Mb", extra: "4,000,000 bits" },
      { fromVal: "1,000,000 B", toVal: "8 Mb", extra: "8,000,000 bits" },
      { fromVal: "2,500,000 B", toVal: "20 Mb", extra: "20,000,000 bits" },
      { fromVal: "5,000,000 B", toVal: "40 Mb", extra: "40,000,000 bits" },
      { fromVal: "12,500,000 B", toVal: "100 Mb", extra: "100,000,000 bits" },
      { fromVal: "125,000,000 B", toVal: "1,000 Mb", extra: "1,000,000,000 bits (1 Gb)" }
    ]
  },
  applications: {
    title: "Practical Applications of Byte to Megabit Conversion",
    items: [
      {
        title: "Broadband Performance Testing",
        text: "Translating downloaded byte counts from speed tests into broadband megabit per second (Mbps) figures."
      },
      {
        title: "Video Encoding & Transcoding",
        text: "Calculating target file sizes for video encoders based on specified bitrates in Mb/s."
      },
      {
        title: "Cloud Network Egress Planning",
        text: "Converting cloud storage backup byte volumes into network interface bandwidth requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Megabits (Mb) with Megabytes (MB): Dividing by 1,000,000 instead of 125,000 results in an 8x calculation error.",
      "Assuming 1 Megabit is 1,048,576 bits: In telecommunications, 1 Megabit is strictly 1,000,000 bits (10⁶ bits)."
    ]
  },
  faqs: [
    {
      question: "How many megabits are in 1 byte?",
      answer: "1 byte equals 0.000008 megabits (8 × 10⁻⁶ Mb)."
    },
    {
      question: "How many bytes are in 1 megabit?",
      answer: "1 megabit equals 125,000 bytes (1,000,000 bits ÷ 8)."
    },
    {
      question: "What is the formula to convert bytes to megabits?",
      answer: "The formula is Megabits = Bytes ÷ 125,000 (or Bytes × 0.000008)."
    },
    {
      question: "How many megabits is 1,000,000 bytes (1 MB)?",
      answer: "1,000,000 bytes equals 8 megabits (1,000,000 ÷ 125,000 = 8 Mb)."
    },
    {
      question: "Why does my 100 Mbps internet connection download files at 12.5 MB/s?",
      answer: "Because 1 byte = 8 bits, a 100 Mbps connection transfers up to 100 ÷ 8 = 12.5 Megabytes per second."
    },
    {
      question: "How do I convert megabits back to bytes?",
      answer: "To convert megabits to bytes, multiply the megabit value by 125,000."
    },
    {
      question: "How many megabits is 500,000 bytes?",
      answer: "500,000 bytes equals 4 megabits (500,000 ÷ 125,000 = 4 Mb)."
    },
    {
      question: "What is the difference between Mb and Mib?",
      answer: "1 Megabit (Mb) equals 1,000,000 bits, whereas 1 Mebibit (Mib) equals 1,048,576 bits (1024² bits)."
    }
  ],
  relatedList: [
    { label: "Byte to Bit", from: "byte", to: "bit" },
    { label: "Byte to Kilobit", from: "byte", to: "kilobit" },
    { label: "Byte to Kilobyte", from: "byte", to: "kilobyte" },
    { label: "Byte to Megabyte", from: "byte", to: "megabyte" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE Std 1541-2002 — Standard for Prefixes for Binary Multiples"
  ]
};
