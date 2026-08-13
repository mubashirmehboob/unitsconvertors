import { CustomArticleData } from "./types";

export const bpsToKbpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "kbps",
  seoTitle: "Bit/sec to Kbps Converter (bps to kbps) - UnitsConvertors",
  metaDescription: "Convert bits per second to kilobits per second (bps to kbps) instantly. Formula: bps ÷ 1000. Step-by-step calculations, conversion charts, and networking FAQs.",
  h1: "Bit/sec to Kbps Converter",
  introduction: [
    "Converting bits per second (bps) to kilobits per second (kbps) scales basic bit-level transfer rates into standard decimal metric units. In data communications, audio streaming, and voice-over-IP (VoIP) telephony, bandwidth requirements are expressed in kbps to keep numbers manageable.",
    "Following standard International System of Units (SI) metric prefixes, 1 kilobit per second equals exactly 1,000 bits per second. Converting from bps to kbps requires dividing the rate in bits per second by 1,000. For instance, 64,000 bps converts to 64 kbps.",
    "This guide explains the SI decimal conversion between bps and kbps, provides worked calculation examples, features a quick-reference conversion table, and answers common telecom questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to kilobits per second (kbps), divide by 1,000. For example, 128,000 bps equals 128 kbps (128,000 ÷ 1,000 = 128 kbps).",
    formulaDisplay: "Kilobits per second (kbps) = Bits per second (bps) ÷ 1,000",
    subtext: "1 bps = 0.001 kbps (1 kbps = 1,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the base metric for measuring transmission rate over electronic communications channels. It specifies the total number of binary digits (0s and 1s) passing through a network node or interface in one second."
  },
  aboutTargetUnit: {
    title: "Understanding Kilobits per Second (kbps)",
    text: "Kilobits per second (symbol: kbps) represents 1,000 bits per second. It is widely used to quantify audio bitrates (e.g., MP3 audio at 320 kbps), phone call codecs (e.g., G.711 at 64 kbps), and IoT sensor network speeds."
  },
  relationship: "Because 'kilo' denotes 1,000 in SI decimal notation, 1 kbps equals 1,000 bps. Converting bps to kbps shifts the decimal place 3 positions to the left.",
  relationshipTitle: "Bit/sec to Kbps Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.001 kbps" },
    { label: "1,000 bps", value: "= 1.0 kbps" },
    { label: "9,600 bps", value: "= 9.6 kbps" },
    { label: "64,000 bps", value: "= 64.0 kbps" },
    { label: "128,000 bps", value: "= 128.0 kbps" }
  ],
  formula: {
    text: "Divide the bits per second value by 1,000 to convert to kilobits per second.",
    math: "kbps = bps ÷ 1,000",
    subtext: "Equivalently: kbps = bps × 0.001."
  },
  formulaTitle: "Bit/sec to Kbps Conversion Formula",
  practicalTip: {
    title: "Audio Bitrate Context",
    text: "Voice calls over VoIP typically require 64,000 bps (64 kbps) uncompressed or 8,000 bps (8 kbps) with high-efficiency codecs like G.729. High-quality music streaming uses 320,000 bps (320 kbps)."
  },
  expertNote: {
    title: "Decimal (1000) vs Binary (1024) Prefixes",
    text: "Under IEC standards, 1 kbps (kilobit per second) is defined as 1,000 bps using standard SI decimal notation. Kibibits per second (Kibps or KiB/s) uses binary 1,024 factors."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Legacy Serial Port",
        subtitle: "A modem connection operates at 56,000 bps. Convert this bandwidth to kbps.",
        steps: [
          "Identify rate in bps: 56,000 bps.",
          "Apply conversion formula: kbps = 56,000 ÷ 1,000.",
          "Calculate: 56,000 ÷ 1,000 = 56.",
          "Result: 56,000 bps equals 56 kbps."
        ]
      },
      {
        title: "Example 2: ISDN Channel Rate",
        subtitle: "A digital voice channel streams at 64,000 bps. Determine its rate in kbps.",
        steps: [
          "Identify rate in bps: 64,000 bps.",
          "Apply conversion formula: kbps = 64,000 ÷ 1,000.",
          "Calculate: 64,000 ÷ 1,000 = 64.",
          "Result: 64,000 bps equals 64 kbps."
        ]
      },
      {
        title: "Example 3: Audio Streaming Stream",
        subtitle: "A compressed audio stream sends 320,000 bps. Convert this value to kbps.",
        steps: [
          "Identify rate in bps: 320,000 bps.",
          "Apply conversion formula: kbps = 320,000 ÷ 1,000.",
          "Calculate: 320,000 ÷ 1,000 = 320.",
          "Result: 320,000 bps equals 320 kbps."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to Kbps Conversion Table",
    headers: ["Bits per Second (bps)", "Kilobits per Second (kbps)", "Common Use Case"],
    rows: [
      { fromVal: "100 bps", toVal: "0.1 kbps", extra: "Telemetry sensor" },
      { fromVal: "1,000 bps", toVal: "1 kbps", extra: "Basic beacon" },
      { fromVal: "2,400 bps", toVal: "2.4 kbps", extra: "V.22 modem" },
      { fromVal: "9,600 bps", toVal: "9.6 kbps", extra: "RS-232 serial" },
      { fromVal: "19,200 bps", toVal: "19.2 kbps", extra: "Industrial serial" },
      { fromVal: "56,000 bps", toVal: "56 kbps", extra: "V.90 dial-up" },
      { fromVal: "64,000 bps", toVal: "64 kbps", extra: "ISDN B-channel / Voice PCM" },
      { fromVal: "128,000 bps", toVal: "128 kbps", extra: "Standard MP3 audio" },
      { fromVal: "320,000 bps", toVal: "320 kbps", extra: "HQ AAC/MP3 audio stream" },
      { fromVal: "1,000,000 bps", toVal: "1,000 kbps", extra: "1 Mbps broadband" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to Kbps Conversion",
    items: [
      {
        title: "VoIP & Telecom Engineering",
        text: "Sizing voice bandwidth channels and managing audio compression codecs."
      },
      {
        title: "Audio Streaming Services",
        text: "Configuring streaming media servers for adaptive bitrate playback."
      },
      {
        title: "IoT Data Logging",
        text: "Calculating bandwidth consumption for low-power wireless networks like Zigbee and LoRaWAN."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,024 instead of 1,000: Standard networking kbps uses decimal 1,000, not binary 1,024.",
      "Confusing kbps (kilobits/sec) with KB/s (kilobytes/sec): 64 kbps is only 8 KB/s.",
      "Uppercase 'K' vs lowercase 'k': SI prefix for 1,000 is lowercase 'k'."
    ]
  },
  faqs: [
    {
      question: "How many kbps is 1,000 bps?",
      answer: "1,000 bps equals exactly 1 kbps."
    },
    {
      question: "What is the formula to convert bps to kbps?",
      answer: "The formula is kbps = bps ÷ 1,000."
    },
    {
      question: "How many kbps is 56,000 bps?",
      answer: "56,000 bps divided by 1,000 equals 56 kbps."
    },
    {
      question: "What is the difference between kbps and KB/s?",
      answer: "kbps measures kilobits per second (network bitrate), while KB/s measures kilobytes per second (file download rate). 1 KB/s equals 8 kbps."
    },
    {
      question: "Why do we divide by 1,000 to convert bps to kbps?",
      answer: "We divide by 1,000 because the SI metric prefix 'kilo' means 1,000."
    },
    {
      question: "How many bits per second is 320 kbps?",
      answer: "320 kbps multiplied by 1,000 equals 320,000 bits per second."
    },
    {
      question: "Is kbps the same as Kibps?",
      answer: "No. kbps uses 1,000 (decimal SI standard), whereas Kibps (kibibits per second) uses 1,024 (binary IEC standard)."
    },
    {
      question: "What is 1,000,000 bps in kbps?",
      answer: "1,000,000 bps divided by 1,000 equals 1,000 kbps (1 Mbps)."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Bit/sec to Mbps", from: "bps", to: "Mbps" },
    { label: "Bit/sec to KB/s", from: "bps", to: "KBps" },
    { label: "Byte/sec to Kbps", from: "Bps", to: "kbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "ITU-T Recommendation G.711 — Pulse code modulation (PCM) of voice frequencies"
  ]
};
