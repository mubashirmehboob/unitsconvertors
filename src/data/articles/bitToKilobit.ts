import { CustomArticleData } from "./types";

export const bitToKilobit: CustomArticleData = {
  fromUnitId: "bit",
  toUnitId: "kilobit",
  seoTitle: "Bit to Kilobit Converter (b to kb) - UnitsConvertors",
  metaDescription: "Convert bits to kilobits (b to kb) instantly. Learn the decimal conversion formula (1 kb = 1,000 b), audio streaming bitrate calculations, tables, and FAQs.",
  h1: "Bit to Kilobit Converter",
  introduction: [
    "Converting digital data and transmission rates from raw bits to kilobits is a foundational calculation across telecommunications, audio streaming engineering, serial communications, and digital signal processing. While single bits represent individual binary logic states, digital communication protocols aggregate bits into kilobits (kb) to express data transfer rates, stream quality bitrates, and packet payloads.",
    "Under standard International System of Units (SI) decimal metric conventions, 1 kilobit (kb) represents exactly 1,000 bits (10³ bits). Consequently, to convert bits to kilobits, divide the number of bits by 1,000 (or multiply by 0.001). For instance, a legacy 56,000-bit-per-second dialup stream transmits at exactly 56 kbps.",
    "This reference explains the decimal mathematics of the kilobit, clarifies the distinction between kilobits (kb) and kibibits (Kib), provides step-by-step bitrate calculations, and presents audio and serial communication reference tables."
  ],
  quickAnswer: {
    text: "To convert bits to kilobits, divide the number of bits by 1,000 (or multiply by 0.001). For example, 1,000 bits equals exactly 1 kilobit (1 kb), and 128,000 bits equals 128 kb.",
    formulaDisplay: "Kilobits (kb) = Bits (b) ÷ 1,000",
    subtext: "1 Kilobit (kb) = 1,000 Bits (1 b = 0.001 kb). Note: 1 kb = 125 Bytes."
  },
  aboutSourceUnit: {
    title: "Understanding the Bit (b)",
    text: "A bit (symbol: b, binary digit) is the atomic unit of digital computing and communications, holding either a binary 0 or 1. It forms the base signaling element transmitted across physical copper wires, fiber-optic cables, and radio frequency channels."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilobit (kb)",
    text: "A kilobit (symbol: kb or kbit) is a decimal metric multiple of the bit equal to 1,000 bits (10³ b). Commonly used in telecommunications and audio engineering, the kilobit measures streaming bitrates (e.g., kbps) and serial data transmission rates."
  },
  relationship: "In accordance with SI standards, the metric prefix 'kilo-' denotes a factor of 1,000. 1 kilobit contains exactly 1,000 bits (equivalent to 125 bytes). Inversely, 1 bit represents 0.001 kilobits.",
  relationshipTitle: "Bit to Kilobit Metric Scale",
  relationshipItems: [
    { label: "1 Bit (b)", value: "= 0.001 kb" },
    { label: "8 Bits (1 Byte)", value: "= 0.008 kb" },
    { label: "1,000 Bits (b)", value: "= 1.000 kb" },
    { label: "1,024 Bits (1 Kibibit)", value: "= 1.024 kb" },
    { label: "64,000 Bits (ISDN B-channel)", value: "= 64.000 kb" },
    { label: "1,000,000 Bits (1 Megabit)", value: "= 1,000.000 kb" }
  ],
  formula: {
    text: "Divide the bit value by 1,000 to convert to decimal kilobits.",
    math: "Quantity (kb) = Quantity (b) ÷ 1,000",
    subtext: "Alternative formula: Quantity (kb) = Quantity (b) × 0.001"
  },
  formulaTitle: "Bit to Kilobit Conversion Formula",
  practicalTip: {
    title: "Audio Streaming Bitrate Tip",
    text: "When configuring audio encoders (e.g., MP3 or Opus), bitrates expressed in kbps (such as 128 kbps or 320 kbps) represent 128,000 and 320,000 bits per second respectively. Dividing by 8 gives the byte consumption per second (e.g., 128 kbps = 16 KB/s)."
  },
  expertNote: {
    title: "Decimal Kilobit (kb) vs Binary Kibibit (Kib)",
    text: "1 Kilobit (kb) = 1,000 bits (SI standard, used in networking and telecom). 1 Kibibit (Kib) = 1,024 bits (IEC standard, used in semiconductor memory and FPGA cache buffers). A binary Kibibit is 2.4% larger than a decimal Kilobit."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Serial UART Baud Rate Calculation",
        subtitle: "A serial microcontroller communicates at a raw rate of 115,200 bits per second. Express this rate in kilobits per second (kbps).",
        steps: [
          "State the bit rate: 115,200 b/s.",
          "Apply conversion formula: kbps = 115,200 ÷ 1,000.",
          "Calculate: 115,200 ÷ 1,000 = 115.20 kbps.",
          "Result: 115,200 bits per second equals 115.2 kbps."
        ]
      },
      {
        title: "Example 2: Digital Voice Channel Bitrate",
        subtitle: "A standard uncompressed pulse-code modulation (G.711 PCM) voice channel transmits 64,000 bits per second. Convert this to kilobits.",
        steps: [
          "State bit rate: 64,000 b.",
          "Divide by 1,000: 64,000 ÷ 1,000 = 64.00 kb.",
          "Result: 64,000 bits equals exactly 64 kb (or 64 kbps)."
        ]
      },
      {
        title: "Example 3: High-Fidelity Audio Stream",
        subtitle: "A 320,000-bit audio stream packet arrives over a websocket. Determine the packet size in kilobits.",
        steps: [
          "Identify bits: 320,000 b.",
          "Apply formula: kb = 320,000 ÷ 1,000.",
          "Calculate: 320,000 ÷ 1,000 = 320.00 kb.",
          "Result: 320,000 bits equals exactly 320 kb."
        ]
      }
    ]
  },
  table: {
    title: "Bit to Kilobit Conversion Table",
    headers: ["Bits (b)", "Kilobits (kb)", "Bytes Equivalent (B)", "Telecommunications Context"],
    rows: [
      { fromVal: "1,000 b", toVal: "1.000 kb", extra: "125 B", extra2: "Base decimal kilobit unit (10³ bits)" },
      { fromVal: "9,600 b", toVal: "9.600 kb", extra: "1,200 B", extra2: "Standard industrial RS-232 serial telemetry rate" },
      { fromVal: "19,200 b", toVal: "19.200 kb", extra: "2,400 B", extra2: "Modbus RTU industrial protocol baud rate" },
      { fromVal: "38,400 b", toVal: "38.400 kb", extra: "4,800 B", extra2: "Marine NMEA 0183 AIS high-speed transponder" },
      { fromVal: "56,000 b", toVal: "56.000 kb", extra: "7,000 B", extra2: "V.90 / V.92 standard dial-up analog modem rate" },
      { fromVal: "64,000 b", toVal: "64.000 kb", extra: "8,000 B", extra2: "ISDN B-channel / G.711 standard voice call" },
      { fromVal: "115,200 b", toVal: "115.200 kb", extra: "14,400 B", extra2: "Standard embedded microcontroller UART debugging rate" },
      { fromVal: "128,000 b", toVal: "128.000 kb", extra: "16,000 B", extra2: "Standard MP3 streaming music quality bitrate" },
      { fromVal: "256,000 b", toVal: "256.000 kb", extra: "32,000 B", extra2: "AAC premium podcast / streaming audio quality" },
      { fromVal: "320,000 b", toVal: "320.000 kb", extra: "40,000 B", extra2: "Maximum quality MP3 encoder bitrate" },
      { fromVal: "1,000,000 b", toVal: "1,000.000 kb", extra: "125,000 B", extra2: "1 Megabit (1 Mb / 10⁶ bits)" }
    ]
  },
  applications: {
    title: "Practical Applications of Bit to Kilobit Conversion",
    items: [
      {
        title: "Audio Codec Sizing & Media Streaming",
        text: "Sound engineers configure streaming codecs (Opus, AAC, MP3) in kbps based on bit-per-second sampling calculations."
      },
      {
        title: "Serial & Embedded Microcontroller Interfaces",
        text: "IoT engineers convert raw baud clock bits per second into kbps to calculate interface bus loading across I2C, SPI, and CAN bus networks."
      },
      {
        title: "Cellular & Satellite Telemetry Channels",
        text: "Satellite modem operators quantify narrow telemetry bandwidth links in kbps to optimize remote device transmission costs."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing kilobits (kb) with kilobytes (kB): 1 kilobit is 1,000 bits (125 bytes), whereas 1 kilobyte is 1,000 bytes (8,000 bits). A kilobyte is 8 times larger.",
      "Dividing by 1,024: Dividing by 1,024 calculates binary kibibits (Kib), not standard decimal kilobits (kb).",
      "Case sensitivity errors: Lowercase 'kb' represents kilobits; uppercase 'KB' represents kilobytes."
    ]
  },
  faqs: [
    {
      question: "How many bits are in 1 kilobit (kb)?",
      answer: "There are exactly 1,000 bits in 1 decimal kilobit (10³ bits)."
    },
    {
      question: "What is the formula to convert bits to kilobits?",
      answer: "The formula is: Kilobits (kb) = Bits (b) ÷ 1,000 (or Bits × 0.001)."
    },
    {
      question: "What is the difference between a kilobit (kb) and a kilobyte (KB)?",
      answer: "A kilobit (kb) contains 1,000 bits, while a kilobyte (KB) contains 1,000 bytes (8,000 bits). 1 kilobyte equals exactly 8 kilobits."
    },
    {
      question: "How many bytes are in 1 kilobit?",
      answer: "1 kilobit (1,000 bits) divided by 8 equals exactly 125 bytes."
    },
    {
      question: "How many kilobits are in 1 megabit?",
      answer: "There are exactly 1,000 kilobits (kb) in 1 megabit (Mb)."
    },
    {
      question: "How many kilobits is a 128 kbps audio stream in bits per second?",
      answer: "A 128 kbps stream equals 128,000 bits per second (16,000 bytes per second)."
    },
    {
      question: "What is the difference between kb and Kib?",
      answer: "A kilobit (kb) is 1,000 bits (decimal SI), while a kibibit (Kib) is 1,024 bits (binary IEC)."
    },
    {
      question: "What is the symbol for kilobit?",
      answer: "The standard international symbol for kilobit is 'kb' or 'kbit'."
    }
  ],
  relatedList: [
    { label: "Bit to Byte", from: "bit", to: "byte" },
    { label: "Bit to Kilobyte (decimal)", from: "bit", to: "kilobyte" },
    { label: "Bit to Megabit", from: "bit", to: "megabit" },
    { label: "Bit to Gigabit", from: "bit", to: "gigabit" },
    { label: "Byte to Kilobit", from: "byte", to: "kilobit" }
  ],
  references: [
    "ISO/IEC 80000-13: Information Science and Technology — Telecommunications Units",
    "ITU-T Recommendation B.17: Letters and Symbols for Telecommunications",
    "NIST: Metric Prefixes in Computing"
  ]
};
