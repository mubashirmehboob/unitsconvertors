import { CustomArticleData } from "./types";

export const bpsToMbpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "Mbps",
  seoTitle: "Bit/sec to Mbps Converter (bps to Mbps) - UnitsConvertors",
  metaDescription: "Convert bits per second to megabits per second (bps to Mbps) instantly. Formula: bps ÷ 1,000,000. Includes worked examples, conversion tables, and broadband FAQs.",
  h1: "Bit/sec to Mbps Converter",
  introduction: [
    "Converting bits per second (bps) to megabits per second (Mbps) translates fundamental signal clock rates into standard Internet speed benchmarks. Modern residential broadband broadband, Wi-Fi networks, HD video streams, and enterprise connectivity are universally advertised in megabits per second.",
    "By international SI telecommunications standards, 1 Megabit per second equals 1,000,000 bits per second. Converting bits per second to megabits per second requires dividing the rate in bps by 1,000,000. For instance, a 100,000,000 bps optical link delivers 100 Mbps.",
    "This guide explains the decimal scale between bps and Mbps, provides step-by-step conversion examples, features a quick-lookup conversion table, and addresses frequent broadband questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to megabits per second (Mbps), divide the bps value by 1,000,000. For example, 50,000,000 bps equals 50 Mbps (50,000,000 ÷ 1,000,000 = 50 Mbps).",
    formulaDisplay: "Megabits per second (Mbps) = Bits per second (bps) ÷ 1,000,000",
    subtext: "1 bps = 0.000001 Mbps (1 Mbps = 1,000,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the fundamental unit of data transmission rate. It specifies the number of binary 1s and 0s physically transmitted across a communication medium in one second."
  },
  aboutTargetUnit: {
    title: "Understanding Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps) represents 1,000,000 bits per second. It is the international benchmark for measuring broadband Internet connection speeds, Wi-Fi router throughput, and streaming video bitrates."
  },
  relationship: "Because 'mega' designates 1,000,000 in decimal SI standards, 1 Mbps equals 1,000,000 bps. Converting bps to Mbps shifts the decimal point 6 places to the left.",
  relationshipTitle: "Bit/sec to Mbps Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.000001 Mbps" },
    { label: "1,000,000 bps", value: "= 1.0 Mbps" },
    { label: "10,000,000 bps", value: "= 10.0 Mbps" },
    { label: "100,000,000 bps", value: "= 100.0 Mbps" },
    { label: "1,000,000,000 bps", value: "= 1,000.0 Mbps (1 Gbps)" }
  ],
  formula: {
    text: "Divide the bits per second value by 1,000,000 to convert to megabits per second.",
    math: "Mbps = bps ÷ 1,000,000",
    subtext: "Equivalently: Mbps = bps × 10⁻⁶."
  },
  formulaTitle: "Bit/sec to Mbps Conversion Formula",
  practicalTip: {
    title: "Video Streaming Bandwidth Requirements",
    text: "Standard Definition (SD) streaming requires ~3,000,000 bps (3 Mbps), High Definition (1080p HD) requires ~8,000,000 bps (8 Mbps), and 4K Ultra HD streaming requires at least 25,000,000 bps (25 Mbps)."
  },
  expertNote: {
    title: "Net Throughput vs File Download Speed",
    text: "Do not confuse Mbps (Megabits per second) with MB/s (Megabytes per second). A 100 Mbps internet connection yields a theoretical maximum file download speed of 12.5 MB/s (100 ÷ 8)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Broadband Line Benchmark",
        subtitle: "A network router interface reports 25,000,000 bps raw throughput. Convert this speed to Mbps.",
        steps: [
          "Identify rate in bps: 25,000,000 bps.",
          "Apply conversion formula: Mbps = 25,000,000 ÷ 1,000,000.",
          "Calculate: 25,000,000 ÷ 1,000,000 = 25.",
          "Result: 25,000,000 bps equals 25 Mbps."
        ]
      },
      {
        title: "Example 2: Fast Ethernet Link",
        subtitle: "A Fast Ethernet port transmits at 100,000,000 bps. Determine its equivalent rate in Mbps.",
        steps: [
          "Identify rate in bps: 100,000,000 bps.",
          "Apply conversion formula: Mbps = 100,000,000 ÷ 1,000,000.",
          "Calculate: 100,000,000 ÷ 1,000,000 = 100.",
          "Result: 100,000,000 bps equals 100 Mbps."
        ]
      },
      {
        title: "Example 3: HD Camera Video Feed",
        subtitle: "An IP surveillance camera outputs a stream of 6,500,000 bps. Convert this value to Mbps.",
        steps: [
          "Identify rate in bps: 6,500,000 bps.",
          "Apply conversion formula: Mbps = 6,500,000 ÷ 1,000,000.",
          "Calculate: 6,500,000 ÷ 1,000,000 = 6.5.",
          "Result: 6,500,000 bps equals 6.5 Mbps."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to Mbps Conversion Table",
    headers: ["Bits per Second (bps)", "Megabits per Second (Mbps)", "Application Context"],
    rows: [
      { fromVal: "100,000 bps", toVal: "0.1 Mbps", extra: "100 kbps legacy audio" },
      { fromVal: "1,000,000 bps", toVal: "1 Mbps", extra: "Basic DSL connection" },
      { fromVal: "3,000,000 bps", toVal: "3 Mbps", extra: "SD Video Stream" },
      { fromVal: "8,000,000 bps", toVal: "8 Mbps", extra: "1080p HD Video Stream" },
      { fromVal: "10,000,000 bps", toVal: "10 Mbps", extra: "Legacy 10BASE-T Ethernet" },
      { fromVal: "25,000,000 bps", toVal: "25 Mbps", extra: "4K UHD Video Stream" },
      { fromVal: "50,000,000 bps", toVal: "50 Mbps", extra: "Standard Home Fiber/VDSL" },
      { fromVal: "100,000,000 bps", toVal: "100 Mbps", extra: "Fast Ethernet (100BASE-TX)" },
      { fromVal: "300,000,000 bps", toVal: "300 Mbps", extra: "Wi-Fi 4 (802.11n) dual-stream" },
      { fromVal: "1,000,000,000 bps", toVal: "1,000 Mbps", extra: "Gigabit Ethernet (1 Gbps)" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to Mbps Conversion",
    items: [
      {
        title: "Broadband Service Planning",
        text: "Evaluating home internet connection tiers and network interface capacity."
      },
      {
        title: "Video Streaming Compression",
        text: "Configuring encoder output bitrates for OTT media platforms."
      },
      {
        title: "Network Switch Monitoring",
        text: "Converting packet byte hardware counters into SNMP monitoring charts."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Mbps (Megabits per second) with MB/s (Megabytes per second): Divide Mbps by 8 to find file transfer MB/s.",
      "Dividing by 1,048,576 instead of 1,000,000: SI telecom standard Mbps uses 10⁶ (1,000,000), not binary 2²⁰.",
      "Uppercase vs lowercase symbols: 'b' is bits, 'B' is bytes."
    ]
  },
  faqs: [
    {
      question: "How many Mbps is 1,000,000 bps?",
      answer: "1,000,000 bps equals exactly 1 Mbps."
    },
    {
      question: "What is the formula to convert bps to Mbps?",
      answer: "The formula is Mbps = bps ÷ 1,000,000."
    },
    {
      question: "How many Mbps is 100,000,000 bps?",
      answer: "100,000,000 bps divided by 1,000,000 equals 100 Mbps."
    },
    {
      question: "What is the difference between Mbps and MB/s?",
      answer: "Mbps measures megabits per second (network connection speed), whereas MB/s measures megabytes per second (file download/storage speed). 1 MB/s = 8 Mbps."
    },
    {
      question: "Why do we divide by 1,000,000 to convert bps to Mbps?",
      answer: "We divide by 1,000,000 because the SI decimal prefix 'mega' represents 10⁶ or 1,000,000."
    },
    {
      question: "How many bits per second is 25 Mbps?",
      answer: "25 Mbps multiplied by 1,000,000 equals 25,000,000 bits per second."
    },
    {
      question: "What download speed do I get with 100 Mbps internet?",
      answer: "With 100 Mbps internet speed, your maximum theoretical file download rate is 12.5 MB/s (100 ÷ 8)."
    },
    {
      question: "How many bps is 1000 Mbps?",
      answer: "1,000 Mbps equals 1,000,000,000 bps (1 Gbps)."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Bit/sec to Kbps", from: "bps", to: "kbps" },
    { label: "Bit/sec to Gbps", from: "bps", to: "Gbps" },
    { label: "Bit/sec to MB/s", from: "bps", to: "MBps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE 802.3 Standard for Ethernet"
  ]
};
