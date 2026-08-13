import { CustomArticleData } from "./types";

export const BpsToKbpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "kbps",
  seoTitle: "Byte/sec to Kbps Converter (B/s to kbps) - UnitsConvertors",
  metaDescription: "Convert bytes per second to kilobits per second (B/s to kbps) instantly. Formula: (B/s × 8) ÷ 1,000. Calculation steps, charts, and telecom FAQs.",
  h1: "Byte/sec to Kbps Converter",
  introduction: [
    "Converting bytes per second (B/s) to kilobits per second (kbps) links operating system file transfer speeds to telecom network transmission rates. Software installers, database loggers, and local file transfers measure throughput in bytes per second, whereas VoIP phone codecs, audio streams, and radio links measure speed in kilobits per second (kbps).",
    "Because 1 byte contains 8 bits, and 1 kilobit per second equals 1,000 bits per second, converting B/s to kbps requires multiplying by 8 and dividing by 1,000 (which simplifies to multiplying by 0.008 or dividing by 125). For example, a transfer rate of 8,000 B/s equals 64 kbps.",
    "This technical guide details the conversion between B/s and kbps, provides worked calculation examples, features a quick-lookup conversion table, and addresses common streaming and telecom questions."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to kilobits per second (kbps), multiply by 8 and divide by 1,000 (or divide B/s by 125). For example, 16,000 B/s equals 128 kbps (16,000 ÷ 125 = 128 kbps).",
    formulaDisplay: "Kilobits per second (kbps) = (Bytes per second × 8) ÷ 1,000",
    subtext: "1 B/s = 0.008 kbps (1 kbps = 125 B/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) measures storage processing and memory transfer rates over time. One byte comprises 8 bits. File write operations, database transactions, and disk backups express throughput in bytes per second."
  },
  aboutTargetUnit: {
    title: "Understanding Kilobits per Second (kbps)",
    text: "Kilobits per second (symbol: kbps) represents 1,000 bits per second under SI decimal standards. Telecommunications, audio codecs (MP3/AAC), and internet voice channels measure streaming bandwidth in kbps."
  },
  relationship: "Because 1 B/s equals 8 bits per second, and 1 kbps equals 1,000 bits per second, 1 kbps equals 125 B/s (1,000 ÷ 8 = 125). Converting B/s to kbps scales the numerical value by 8/1000 (0.008).",
  relationshipTitle: "Byte/sec to Kbps Rate Comparison",
  relationshipItems: [
    { label: "1 B/s", value: "= 0.008 kbps" },
    { label: "125 B/s", value: "= 1.0 kbps" },
    { label: "1,000 B/s", value: "= 8.0 kbps" },
    { label: "8,000 B/s", value: "= 64.0 kbps" },
    { label: "16,000 B/s", value: "= 128.0 kbps" }
  ],
  formula: {
    text: "Multiply the bytes per second rate by 8 and divide by 1,000 (or divide by 125).",
    math: "kbps = B/s ÷ 125",
    subtext: "Equivalently: kbps = B/s × 0.008."
  },
  formulaTitle: "Byte/sec to Kbps Conversion Formula",
  practicalTip: {
    title: "Audio Streaming Calculation Tip",
    text: "If an audio encoder generates a file stream at 40,000 B/s, multiplying by 8 gives 320,000 bps, which equals 320 kbps (high-quality MP3 audio)."
  },
  expertNote: {
    title: "Decimal SI vs Binary Prefixes",
    text: "Under SI standards, 1 kbps equals 1,000 bits per second (125 bytes per second). Binary Kibps (kibibits/sec) uses 1,024 bits per second (128 bytes per second)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Voice Over IP (VoIP) Codec",
        subtitle: "A digital phone channel transfers 8,000 bytes per second. Calculate the network bandwidth in kbps.",
        steps: [
          "Identify byte rate: 8,000 B/s.",
          "Apply conversion formula: kbps = 8,000 ÷ 125.",
          "Calculate: 8,000 ÷ 125 = 64.",
          "Result: 8,000 B/s equals 64 kbps."
        ]
      },
      {
        title: "Example 2: High-Quality Audio Stream",
        subtitle: "A web radio stream sends 40,000 bytes per second. Convert this payload throughput to kbps.",
        steps: [
          "Identify byte rate: 40,000 B/s.",
          "Apply conversion formula: kbps = 40,000 ÷ 125.",
          "Calculate: 40,000 ÷ 125 = 320.",
          "Result: 40,000 B/s equals 320 kbps."
        ]
      },
      {
        title: "Example 3: IoT Sensor Data Log",
        subtitle: "An industrial data logger records 1,000 bytes per second. Convert this throughput to kbps.",
        steps: [
          "Identify byte rate: 1,000 B/s.",
          "Apply conversion formula: kbps = 1,000 ÷ 125.",
          "Calculate: 1,000 ÷ 125 = 8.",
          "Result: 1,000 B/s equals 8 kbps."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to Kbps Conversion Table",
    headers: ["Bytes per Second (B/s)", "Kilobits per Second (kbps)", "Common Application"],
    rows: [
      { fromVal: "125 B/s", toVal: "1 kbps", extra: "Telemetry beacon" },
      { fromVal: "250 B/s", toVal: "2 kbps", extra: "Low-rate sensor" },
      { fromVal: "1,000 B/s", toVal: "8 kbps", extra: "G.729 VoIP codec" },
      { fromVal: "2,000 B/s", toVal: "16 kbps", extra: "Compressed voice" },
      { fromVal: "4,000 B/s", toVal: "32 kbps", extra: "Low-bitrate audio" },
      { fromVal: "7,000 B/s", toVal: "56 kbps", extra: "Dial-up modem rate" },
      { fromVal: "8,000 B/s", toVal: "64 kbps", extra: "G.711 ISDN voice" },
      { fromVal: "16,000 B/s", toVal: "128 kbps", extra: "Standard MP3 audio" },
      { fromVal: "40,000 B/s", toVal: "320 kbps", extra: "High-quality music" },
      { fromVal: "125,000 B/s", toVal: "1,000 kbps", extra: "1 Mbps broadband" }
    ]
  },
  applications: {
    title: "Applications of Byte/sec to Kbps Conversion",
    items: [
      {
        title: "VoIP Telephony Architecture",
        text: "Sizing network bandwidth for voice codecs based on audio payload byte generation rates."
      },
      {
        title: "Streaming Media Servers",
        text: "Configuring audio server output profiles from file write rates in bytes per second."
      },
      {
        title: "Industrial Automation",
        text: "Calculating SCADA network link requirements from field sensor log bytes."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 125 instead of dividing: Multiplying by 125 produces a huge error.",
      "Confusing kbps (kilobits/sec) with KB/s (kilobytes/sec): 1 KB/s = 8 kbps.",
      "Ignoring packet headers: UDP and IP protocol headers add overhead on top of payload bytes."
    ]
  },
  faqs: [
    {
      question: "How many kbps is 125 bytes per second?",
      answer: "125 bytes per second equals exactly 1 kbps."
    },
    {
      question: "What is the formula to convert B/s to kbps?",
      answer: "The formula is kbps = B/s ÷ 125 (or kbps = B/s × 0.008)."
    },
    {
      question: "How many kbps is 8,000 B/s?",
      answer: "8,000 B/s divided by 125 equals 64 kbps."
    },
    {
      question: "What is the difference between kbps and KB/s?",
      answer: "kbps measures network transmission speed in kilobits per second, while KB/s measures file download speed in kilobytes per second. 1 KB/s = 8 kbps."
    },
    {
      question: "Why do we divide B/s by 125 to get kbps?",
      answer: "Because B/s × 8 = bps, and bps ÷ 1,000 = kbps. Combining these gives B/s × (8/1000) = B/s ÷ 125."
    },
    {
      question: "How many bytes per second is 320 kbps?",
      answer: "320 kbps multiplied by 125 equals 40,000 bytes per second."
    },
    {
      question: "How many B/s is 1 kbps?",
      answer: "1 kbps equals 125 bytes per second."
    },
    {
      question: "How do I convert kbps back to B/s?",
      answer: "Multiply the kbps value by 125 (B/s = kbps × 125)."
    }
  ],
  relatedList: [
    { label: "Byte/sec to Bit/sec", from: "Bps", to: "bps" },
    { label: "Byte/sec to KB/s", from: "Bps", to: "KBps" },
    { label: "Byte/sec to Mbps", from: "Bps", to: "Mbps" },
    { label: "Bit/sec to Kbps", from: "bps", to: "kbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "ITU-T Recommendation G.711 — Pulse code modulation (PCM) of voice frequencies",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
