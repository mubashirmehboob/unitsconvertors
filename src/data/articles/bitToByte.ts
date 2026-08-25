import { CustomArticleData } from "./types";

export const bitToByte: CustomArticleData = {
  fromUnitId: "bit",
  toUnitId: "byte",
  seoTitle: "Bit to Byte Converter (b to B) - UnitsConvertors",
  metaDescription: "Convert bits to bytes (b to B) instantly. Learn the exact conversion formula (1 Byte = 8 Bits), network bandwidth to file size math, tables, and FAQs.",
  h1: "Bit to Byte Converter",
  introduction: [
    "Converting digital data from bits to bytes is the most foundational mathematical operation in computer science, telecommunications, networking, and software engineering. While telecommunications providers specify broadband speeds and network bandwidth in bits (or bits per second, bps), computer operating systems, storage devices, and software applications measure file sizes and memory capacities in bytes (B).",
    "By international computing standards, 1 byte consists of exactly 8 bits. Therefore, to convert any digital measurement from bits to bytes, divide the number of bits by 8 (or multiply by 0.125). For example, a 64-bit processor register holds exactly 8 bytes of data, and an 800-megabit data transfer equals 100 megabytes.",
    "This comprehensive guide details the mathematical relationship between bits and bytes, explains lowercase 'b' versus uppercase 'B' notation, walks through step-by-step calculations, and provides handy reference tables for network throughput and file storage."
  ],
  quickAnswer: {
    text: "To convert bits to bytes, divide the number of bits by 8 (or multiply by 0.125). For example, 8 bits equals 1 byte, 64 bits equals 8 bytes, and 1,000 bits equals 125 bytes.",
    formulaDisplay: "Bytes (B) = Bits (b) ÷ 8",
    subtext: "1 Bit (b) = 0.125 Bytes (B). 1 Byte (B) = 8 Bits (b)."
  },
  aboutSourceUnit: {
    title: "Understanding the Bit (b)",
    text: "A bit (symbol: b, short for 'binary digit') is the most basic, indivisible unit of information in digital computing. It can assume one of two distinct binary states, represented logically as 0 or 1, off or on, or low and high electrical voltages."
  },
  aboutTargetUnit: {
    title: "Understanding the Byte (B)",
    text: "A byte (symbol: B) is a unit of digital information composed of 8 contiguous bits (also known as an octet in telecommunications). The byte is the standard addressable memory unit in computer microarchitectures and the universal baseline for file sizes and storage capacity."
  },
  relationship: "Because 1 byte is defined as exactly 8 bits, converting bits to bytes reduces the numerical quantity by a factor of 8. Inversely, each individual bit represents one-eighth (0.125) of a full byte.",
  relationshipTitle: "Bit to Byte Quantity Comparison",
  relationshipItems: [
    { label: "1 Bit (b)", value: "= 0.125 Bytes (B)" },
    { label: "8 Bits (b)", value: "= 1.000 Byte (1 B)" },
    { label: "16 Bits (b)", value: "= 2.000 Bytes (2 B)" },
    { label: "32 Bits (b)", value: "= 4.000 Bytes (4 B)" },
    { label: "64 Bits (b)", value: "= 8.000 Bytes (8 B)" },
    { label: "128 Bits (b)", value: "= 16.000 Bytes (16 B)" }
  ],
  formula: {
    text: "Divide the total number of bits by 8 to determine the exact number of bytes.",
    math: "Bytes (B) = Bits (b) ÷ 8",
    subtext: "Alternative formula: Bytes (B) = Bits (b) × 0.125"
  },
  formulaTitle: "Bit to Byte Conversion Formula",
  practicalTip: {
    title: "Internet Download Speed Rule",
    text: "To determine how fast your internet connection will download a file, divide your advertised speed in Megabits per second (Mbps) by 8: a 100 Mbps internet connection downloads at a theoretical maximum speed of 12.5 Megabytes per second (MB/s)."
  },
  expertNote: {
    title: "The Capitalization Rule (b vs B)",
    text: "In all technical literature and IEEE standards, lowercase 'b' strictly represents bits, whereas uppercase 'B' strictly represents bytes. Conflating the two creates an 8x calculation error in network bandwidth and storage planning."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Microprocessor Register Word Size",
        subtitle: "A modern 64-bit CPU register holds 64 binary digits. How many bytes does this register contain?",
        steps: [
          "State the given bit count: 64 b.",
          "Apply conversion formula: Bytes = 64 ÷ 8.",
          "Calculate: 64 ÷ 8 = 8.00 B.",
          "Result: A 64-bit register contains exactly 8 bytes of memory."
        ]
      },
      {
        title: "Example 2: Network Packet Payload Sizing",
        subtitle: "A telecommunications stream transmits a data payload of 12,000 bits. Convert this payload into bytes.",
        steps: [
          "State given bits: 12,000 b.",
          "Apply formula: Bytes = 12,000 ÷ 8.",
          "Calculate: 12,000 ÷ 8 = 1,500 B.",
          "Result: 12,000 bits equals 1,500 bytes (1.5 KB)."
        ]
      },
      {
        title: "Example 3: Audio Sample Bit Depth",
        subtitle: "High-resolution studio audio records samples at a bit depth of 24 bits per sample. Convert 24 bits to bytes.",
        steps: [
          "Identify bit depth: 24 b.",
          "Divide by 8: 24 ÷ 8 = 3.00 B.",
          "Result: Each 24-bit audio sample occupies exactly 3 bytes of raw memory."
        ]
      }
    ]
  },
  table: {
    title: "Bit to Byte Conversion Table",
    headers: ["Bits (b)", "Bytes (B)", "Binary State Space (2ⁿ)", "Computer Architecture Context"],
    rows: [
      { fromVal: "1 b", toVal: "0.125 B", extra: "2 states (0 or 1)", extra2: "Single binary bit (boolean flag)" },
      { fromVal: "4 b", toVal: "0.500 B", extra: "16 states (0–15)", extra2: "1 Nibble (half-byte / single hexadecimal digit)" },
      { fromVal: "8 b", toVal: "1.000 B", extra: "256 states (0–255)", extra2: "1 Byte (standard ASCII character / octet)" },
      { fromVal: "16 b", toVal: "2.000 B", extra: "65,536 states", extra2: "16-bit Halfword (Unicode UTF-16 basic unit)" },
      { fromVal: "24 b", toVal: "3.000 B", extra: "16,777,216 states", extra2: "24-bit TrueColor RGB pixel / Studio audio sample" },
      { fromVal: "32 b", toVal: "4.000 B", extra: "4,294,967,296 states", extra2: "32-bit Word (IPv4 address / standard integer)" },
      { fromVal: "64 b", toVal: "8.000 B", extra: "1.84 × 10¹⁹ states", extra2: "64-bit Doubleword (x86-64 pointer / double float)" },
      { fromVal: "128 b", toVal: "16.000 B", extra: "3.40 × 10³⁸ states", extra2: "128-bit Quadword (IPv6 address / AES-128 key)" },
      { fromVal: "256 b", toVal: "32.000 B", extra: "1.15 × 10⁷⁷ states", extra2: "256-bit AVX register / SHA-256 cryptographic hash" },
      { fromVal: "512 b", toVal: "64.000 B", extra: "1.34 × 10¹⁵⁴ states", extra2: "512-bit AVX-512 vector / SHA-512 digest" },
      { fromVal: "1,024 b", toVal: "128.000 B", extra: "2¹⁰²⁴ states", extra2: "1 Kibibit (Kib) / 128 Bytes" }
    ]
  },
  applications: {
    title: "Practical Applications of Bit to Byte Conversion",
    items: [
      {
        title: "Internet Bandwidth to File Download Time",
        text: "Network engineers and consumers convert Internet service provider bandwidth (Mbps/Gbps) into file transfer rates (MB/s or GB/s) by dividing by 8."
      },
      {
        title: "Computer Processor & Memory Architecture",
        text: "Software developers configure memory data types (char = 1 byte, short = 2 bytes, int = 4 bytes, long = 8 bytes) based on underlying bit depths."
      },
      {
        title: "Data Serialization & Network Protocols",
        text: "Protocol designers packing binary bit-fields into TCP/IP headers compute required buffer allocations in whole bytes."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 8 instead of dividing: Converting bits to bytes requires division by 8 (e.g., 64 b ÷ 8 = 8 B, NOT 512 B).",
      "Confusing lowercase 'b' (bits) with uppercase 'B' (bytes): Treating a 1 Gbps connection as 1 GB/s creates an eight-fold overestimation.",
      "Ignoring network protocol overhead: Raw byte download throughput typically achieves 90-95% of theoretical bit rate due to TCP/IP header packets."
    ]
  },
  faqs: [
    {
      question: "How many bytes are in 1 bit?",
      answer: "There is exactly 0.125 (1/8) of a byte in 1 bit."
    },
    {
      question: "What is the formula to convert bits to bytes?",
      answer: "The formula is: Bytes (B) = Bits (b) ÷ 8 (or Bits × 0.125)."
    },
    {
      question: "Why are there 8 bits in a byte?",
      answer: "In the 1960s, computer pioneer Werner Buchholz and IBM standardized on 8 bits to encode 256 alphanumeric characters and control codes (such as EBCDIC and extended ASCII)."
    },
    {
      question: "How many bytes are in 100 megabits (100 Mb)?",
      answer: "100 megabits divided by 8 equals exactly 12.5 megabytes (12.5 MB)."
    },
    {
      question: "What is the difference between b and B?",
      answer: "Lowercase 'b' is the standard symbol for bits (binary digits), while uppercase 'B' is the standard symbol for bytes (groups of 8 bits)."
    },
    {
      question: "How many bytes are in a 64-bit integer?",
      answer: "64 bits divided by 8 equals exactly 8 bytes."
    },
    {
      question: "What is a 4-bit unit called?",
      answer: "A 4-bit group is called a 'nibble' (or nybble) and represents half of a byte (0.5 bytes)."
    },
    {
      question: "How many bytes are in 1 gigabit?",
      answer: "1 gigabit (1,000,000,000 bits) divided by 8 equals 125,000,000 bytes (125 MB)."
    }
  ],
  relatedList: [
    { label: "Byte to Bit", from: "byte", to: "bit" },
    { label: "Bit to Kilobit", from: "bit", to: "kilobit" },
    { label: "Bit to Kilobyte (decimal)", from: "bit", to: "kilobyte" },
    { label: "Bit to Megabit", from: "bit", to: "megabit" },
    { label: "Bit to Megabyte (decimal)", from: "bit", to: "megabyte" }
  ],
  references: [
    "IEEE Std 260.1-2004: Standard Letter Symbols for Units of Measurement",
    "ISO/IEC 80000-13: Quantities and Units — Information Science and Technology",
    "Buchholz, Werner: 'The System/360: Memory and Data Formats' (IBM)"
  ]
};
