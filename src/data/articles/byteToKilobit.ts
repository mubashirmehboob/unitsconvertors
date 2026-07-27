import { CustomArticleData } from "./types";

export const byteToKilobit: CustomArticleData = {
  fromUnitId: "byte",
  toUnitId: "kilobit",
  seoTitle: "Byte to Kilobit Converter (B to kb) - UnitsConvertors",
  metaDescription: "Convert bytes to kilobits (B to kb) easily. Learn the exact formula (1 Byte = 0.008 kb), calculation steps, comparison tables, and verified FAQs.",
  h1: "Byte to Kilobit Converter",
  introduction: [
    "Converting digital data from bytes to kilobits is essential when calculating network packet transmission speeds, telecommunication throughput, and audio bitrates. While file storage is expressed in bytes (B), transmission channels are often specified in kilobits per second (kb/s or kbps).",
    "In the International System of Units (SI) decimal standard, 1 kilobit (kb) equals 1,000 bits. Since 1 byte consists of 8 bits, 1 kilobit equals 125 bytes (1,000 ÷ 8). Consequently, 1 byte equals 0.008 kilobits. To convert bytes to kilobits, divide the byte count by 125 (or multiply by 0.008).",
    "This technical guide explains the relationship between bytes and kilobits, details calculation formulas with worked examples, presents quick lookup tables, and provides answers to common networking questions."
  ],
  quickAnswer: {
    text: "To convert bytes to kilobits, divide the number of bytes by 125 (or multiply by 0.008). For example, 1,000 bytes equals 8 kilobits (1,000 B ÷ 125 = 8 kb).",
    formulaDisplay: "Kilobits (kb) = Bytes (B) ÷ 125",
    subtext: "1 Kilobit = 125 Bytes (1 B = 0.008 kb)."
  },
  aboutSourceUnit: {
    title: "Understanding the Byte (B)",
    text: "A byte (symbol: B) is the standard unit of digital data storage, consisting of 8 contiguous bits. Bytes measure memory allocation, file sizes, and hardware storage capacities across computing platforms."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilobit (kb)",
    text: "A kilobit (symbol: kb) is a decimal multiple of the binary bit, equal to 1,000 bits or 125 bytes. Kilobits are widely used in telecommunications to measure data transfer rates, voice audio streams, and network bandwidth."
  },
  relationship: "Because 1 kilobit contains 1,000 bits and 1 byte contains 8 bits, 1 kilobit equals 125 bytes. Converting bytes to kilobits scales the numerical value down by a factor of 125 (equivalent to multiplying by 0.008).",
  relationshipTitle: "Byte to Kilobit Conversion Scale",
  relationshipItems: [
    { label: "125 Bytes (B)", value: "= 1 Kilobit (1 kb)" },
    { label: "250 Bytes (B)", value: "= 2 Kilobits (2 kb)" },
    { label: "500 Bytes (B)", value: "= 4 Kilobits (4 kb)" },
    { label: "1,000 Bytes (B)", value: "= 8 Kilobits (8 kb)" },
    { label: "12,500 Bytes (B)", value: "= 100 Kilobits (100 kb)" }
  ],
  formula: {
    text: "Divide the volume in bytes by 125 (or multiply by 0.008) to calculate the equivalent quantity in decimal kilobits.",
    math: "Kilobits (kb) = Bytes (B) ÷ 125",
    subtext: "Alternatively: Kilobits (kb) = Bytes (B) × 0.008."
  },
  formulaTitle: "Byte to Kilobit Conversion Formula",
  practicalTip: {
    title: "Audio Bitrate Quick Check",
    text: "A standard 128 kbps MP3 audio stream transfers 128 kilobits per second, which equals 16,000 bytes (16 KB) per second of audio playback."
  },
  expertNote: {
    title: "Decimal Kilobit (kb) vs Binary Kibibit (Kib)",
    text: "Under IEC 80000-13 standards, 1 kilobit (kb) is strictly 1,000 bits (125 B), whereas 1 kibibit (Kib) is 1,024 bits (128 B). Telecommunication bitrates strictly adhere to the 1,000-bit decimal system."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Voice Payload Transfer",
        subtitle: "A VoIP phone system transmits a speech packet of 250 bytes. Convert this payload to kilobits.",
        steps: [
          "Identify byte count: 250 B.",
          "Apply formula: Kilobits = 250 ÷ 125.",
          "Calculate: 250 ÷ 125 = 2.",
          "Result: 250 bytes equals 2 kilobits (2 kb)."
        ]
      },
      {
        title: "Example 2: Sensor Telemetry Buffer",
        subtitle: "An IoT device uploads 5,000 bytes of telemetry data over a cellular connection. Convert to kilobits.",
        steps: [
          "Identify byte count: 5,000 B.",
          "Apply formula: Kilobits = 5,000 ÷ 125.",
          "Calculate: 5,000 ÷ 125 = 40.",
          "Result: 5,000 bytes equals 40 kilobits (40 kb)."
        ]
      },
      {
        title: "Example 3: Web Page Asset Size",
        subtitle: "A compressed CSS file is 12,500 bytes. Calculate its size in kilobits.",
        steps: [
          "Identify byte count: 12,500 B.",
          "Apply formula: Kilobits = 12,500 ÷ 125.",
          "Calculate: 12,500 ÷ 125 = 100.",
          "Result: 12,500 bytes equals 100 kilobits (100 kb)."
        ]
      }
    ]
  },
  table: {
    title: "Byte to Kilobit Conversion Table",
    headers: ["Bytes (B)", "Kilobits (kb)", "Total Bits (b)"],
    rows: [
      { fromVal: "1 B", toVal: "0.008 kb", extra: "8 bits" },
      { fromVal: "125 B", toVal: "1 kb", extra: "1,000 bits" },
      { fromVal: "250 B", toVal: "2 kb", extra: "2,000 bits" },
      { fromVal: "500 B", toVal: "4 kb", extra: "4,000 bits" },
      { fromVal: "1,000 B", toVal: "8 kb", extra: "8,000 bits" },
      { fromVal: "2,000 B", toVal: "16 kb", extra: "16,000 bits" },
      { fromVal: "5,000 B", toVal: "40 kb", extra: "40,000 bits" },
      { fromVal: "10,000 B", toVal: "80 kb", extra: "80,000 bits" },
      { fromVal: "12,500 B", toVal: "100 kb", extra: "100,000 bits" },
      { fromVal: "125,000 B", toVal: "1,000 kb", extra: "1,000,000 bits (1 Mb)" }
    ]
  },
  applications: {
    title: "Practical Applications of Byte to Kilobit Conversion",
    items: [
      {
        title: "Audio & Telecom Streaming",
        text: "Evaluating compressed audio file sizes against stream bitrate caps (e.g. 64 kbps, 128 kbps, 320 kbps)."
      },
      {
        title: "Serial Communication Protocols",
        text: "Calculating transmission times for micro-controller byte arrays across RS-232, CAN bus, or LoRa networks."
      },
      {
        title: "Network Traffic Monitoring",
        text: "Translating byte counters from router network interfaces into line bitrate metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Kilobits (kb) with Kilobytes (KB): 1 KB equals 8 kb; confusing them causes an 8x error in network throughput calculations.",
      "Assuming 1 kilobit is 1,024 bits: In standard networking, prefixes follow the SI decimal system (1 kb = 1,000 bits = 125 bytes)."
    ]
  },
  faqs: [
    {
      question: "How many kilobits are in 1 byte?",
      answer: "1 byte equals 0.008 kilobits."
    },
    {
      question: "How many bytes are in 1 kilobit?",
      answer: "1 kilobit equals 125 bytes (1,000 bits ÷ 8)."
    },
    {
      question: "What is the formula to convert bytes to kilobits?",
      answer: "The formula is Kilobits = Bytes ÷ 125 (or Bytes × 0.008)."
    },
    {
      question: "How many kilobits is 1,000 bytes?",
      answer: "1,000 bytes equals 8 kilobits (1,000 ÷ 125 = 8 kb)."
    },
    {
      question: "What is the difference between kb and KB?",
      answer: "Lowercase 'kb' stands for kilobits (1,000 bits), while uppercase 'KB' stands for kilobytes (1,000 bytes or 8,000 bits)."
    },
    {
      question: "How do I convert kilobits back to bytes?",
      answer: "Multiply the kilobit value by 125 to calculate the equivalent byte count."
    },
    {
      question: "Is a kilobit decimal or binary?",
      answer: "Under SI and IEC specifications, the prefix 'kilo-' represents 10³ (1,000). Binary 1,024 bits is officially named a kibibit (Kib)."
    },
    {
      question: "How many kilobits is 500 bytes?",
      answer: "500 bytes equals 4 kilobits (500 ÷ 125 = 4 kb)."
    }
  ],
  relatedList: [
    { label: "Byte to Bit", from: "byte", to: "bit" },
    { label: "Byte to Kilobyte", from: "byte", to: "kilobyte" },
    { label: "Byte to Megabit", from: "byte", to: "megabit" },
    { label: "Byte to Megabyte", from: "byte", to: "megabyte" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE Std 1541-2002 — Standard for Prefixes for Binary Multiples"
  ]
};
