import { CustomArticleData } from "./types";

export const BpsToMbpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "Mbps",
  seoTitle: "Byte/sec to Mbps Converter (B/s to Mbps) - UnitsConvertors",
  metaDescription: "Convert bytes per second to megabits per second (B/s to Mbps) instantly. Formula: B/s ÷ 125,000. Calculation steps, charts, and bandwidth FAQs.",
  h1: "Byte/sec to Mbps Converter",
  introduction: [
    "Converting bytes per second (B/s) to megabits per second (Mbps) links operating system file transfer logs with network interface and broadband capacity metrics. File download software, database logging tools, and server write counters report speed in bytes per second, while ISPs, routers, and network switches specify speeds in megabits per second.",
    "Because 1 byte contains 8 bits, and 1 Megabit per second equals 1,000,000 bits per second, converting B/s to Mbps requires multiplying by 8 and dividing by 1,000,000. This simplifies to dividing B/s by 125,000. For instance, a file write rate of 12,500,000 B/s corresponds to 100 Mbps network throughput.",
    "This technical reference details the mathematical relationship between bytes per second and megabits per second, provides step-by-step conversion examples, features a quick-lookup conversion table, and addresses common networking questions."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to megabits per second (Mbps), divide the B/s value by 125,000. For example, 1,250,000 B/s equals 10 Mbps (1,250,000 ÷ 125,000 = 10 Mbps).",
    formulaDisplay: "Megabits per second (Mbps) = Bytes per second (B/s) ÷ 125,000",
    subtext: "1 B/s = 0.000008 Mbps (1 Mbps = 125,000 B/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) measures storage processing and file transfer rate over time. One byte comprises 8 bits. Operating systems, file managers, and SSD read/write logging utilities report throughput in bytes per second."
  },
  aboutTargetUnit: {
    title: "Understanding Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps) represents 1,000,000 bits per second under SI decimal standards. Broadband ISPs, Wi-Fi networks, and video streaming services measure transmission capacity in Mbps."
  },
  relationship: "Because 1 B/s equals 8 bits per second, and 1 Mbps equals 1,000,000 bits per second, 1 Mbps equals exactly 125,000 B/s (1,000,000 ÷ 8 = 125,000). Converting B/s to Mbps scales the value by dividing by 125,000.",
  relationshipTitle: "Byte/sec to Mbps Rate Comparison",
  relationshipItems: [
    { label: "1 B/s", value: "= 0.000008 Mbps" },
    { label: "125,000 B/s", value: "= 1.0 Mbps" },
    { label: "1,250,000 B/s", value: "= 10.0 Mbps" },
    { label: "6,250,000 B/s", value: "= 50.0 Mbps" },
    { label: "12,500,000 B/s", value: "= 100.0 Mbps" }
  ],
  formula: {
    text: "Divide the bytes per second rate by 125,000 to convert to megabits per second.",
    math: "Mbps = B/s ÷ 125,000",
    subtext: "Equivalently: Mbps = (B/s × 8) ÷ 1,000,000."
  },
  formulaTitle: "Byte/sec to Mbps Conversion Formula",
  practicalTip: {
    title: "Broadband Line Utilization Tip",
    text: "To determine what percentage of a 100 Mbps internet line a download is consuming: multiply your download speed in B/s by 8 to get bps, or divide B/s by 125,000 to find Mbps. A download at 6.25 MB/s (6,250,000 B/s) uses 50 Mbps (50% of 100 Mbps)."
  },
  expertNote: {
    title: "Decimal SI (125,000) vs Binary IEC",
    text: "Network Mbps uses standard decimal factors (1 Mbps = 1,000,000 bits/sec = 125,000 bytes/sec). Software using binary IEC mebibytes (MiB/s = 1,048,576 bytes/sec) will report slightly lower numerical values."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Broadband Download Rate",
        subtitle: "A browser logs a file downloading at 3,125,000 bytes per second. Convert this rate to Mbps.",
        steps: [
          "Identify byte rate: 3,125,000 B/s.",
          "Apply conversion formula: Mbps = 3,125,000 ÷ 125,000.",
          "Perform division: 3,125,000 ÷ 125,000 = 25.",
          "Result: 3,125,000 B/s equals 25 Mbps."
        ]
      },
      {
        title: "Example 2: Fast Ethernet Full-Duplex Link",
        subtitle: "A network socket streams 12,500,000 bytes per second. Determine the bandwidth in Mbps.",
        steps: [
          "Identify byte rate: 12,500,000 B/s.",
          "Apply conversion formula: Mbps = 12,500,000 ÷ 125,000.",
          "Perform division: 12,500,000 ÷ 125,000 = 100.",
          "Result: 12,500,000 B/s equals 100 Mbps."
        ]
      },
      {
        title: "Example 3: Video Stream Buffer Fill",
        subtitle: "A media player reads 1,000,000 bytes per second from a network socket. Convert to Mbps.",
        steps: [
          "Identify byte rate: 1,000,000 B/s.",
          "Apply conversion formula: Mbps = 1,000,000 ÷ 125,000.",
          "Perform division: 1,000,000 ÷ 125,000 = 8.",
          "Result: 1,000,000 B/s equals 8 Mbps."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to Mbps Conversion Table",
    headers: ["Bytes per Second (B/s)", "Megabits per Second (Mbps)", "Network Application"],
    rows: [
      { fromVal: "125,000 B/s", toVal: "1 Mbps", extra: "Basic DSL speed" },
      { fromVal: "375,000 B/s", toVal: "3 Mbps", extra: "SD Video Stream" },
      { fromVal: "1,000,000 B/s", toVal: "8 Mbps", extra: "1080p HD Video Stream" },
      { fromVal: "1,250,000 B/s", toVal: "10 Mbps", extra: "10BASE-T Ethernet" },
      { fromVal: "2,500,000 B/s", toVal: "20 Mbps", extra: "Standard VDSL" },
      { fromVal: "3,125,000 B/s", toVal: "25 Mbps", extra: "4K UHD Stream" },
      { fromVal: "6,250,000 B/s", toVal: "50 Mbps", extra: "50 Mbps Home Fiber" },
      { fromVal: "10,000,000 B/s", toVal: "80 Mbps", extra: "80 Mbps Cable Internet" },
      { fromVal: "12,500,000 B/s", toVal: "100 Mbps", extra: "Fast Ethernet (100BASE-TX)" },
      { fromVal: "125,000,000 B/s", toVal: "1,000 Mbps", extra: "Gigabit Ethernet (1 Gbps)" }
    ]
  },
  applications: {
    title: "Applications of Byte/sec to Mbps Conversion",
    items: [
      {
        title: "Network Capacity Management",
        text: "Translating server payload write speeds into network connection bandwidth usage."
      },
      {
        title: "Video Streaming Compression",
        text: "Determining required broadband connection speeds (Mbps) from video file render rates (B/s)."
      },
      {
        title: "Cloud Backup & Migration",
        text: "Calculating upload link utilization during large database migrations."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 125,000 instead of dividing: Multiplying yields an incorrect, astronomically large number.",
      "Confusing Mbps (Megabits/sec) with MB/s (Megabytes/sec): 1 MB/s = 8 Mbps.",
      "Overlooking protocol headers: Ethernet, IP, and TCP headers consume roughly 3-5% of raw line rate."
    ]
  },
  faqs: [
    {
      question: "How many Mbps is 125,000 bytes per second?",
      answer: "125,000 bytes per second equals exactly 1 Mbps."
    },
    {
      question: "What is the formula to convert B/s to Mbps?",
      answer: "The formula is Mbps = B/s ÷ 125,000."
    },
    {
      question: "How many Mbps is 12,500,000 B/s?",
      answer: "12,500,000 B/s divided by 125,000 equals 100 Mbps."
    },
    {
      question: "What is the difference between Mbps and MB/s?",
      answer: "Mbps measures megabits per second (network connection speed), while MB/s measures megabytes per second (file download speed). 1 MB/s = 8 Mbps."
    },
    {
      question: "Why do we divide B/s by 125,000 to get Mbps?",
      answer: "Because B/s × 8 = bps, and bps ÷ 1,000,000 = Mbps. Combining these yields B/s ÷ (1,000,000 / 8) = B/s ÷ 125,000."
    },
    {
      question: "How many bytes per second is 50 Mbps?",
      answer: "50 Mbps multiplied by 125,000 equals 6,250,000 bytes per second (6.25 MB/s)."
    },
    {
      question: "What download rate in B/s does a 100 Mbps line provide?",
      answer: "A 100 Mbps line provides a maximum theoretical rate of 12,500,000 B/s (12.5 MB/s)."
    },
    {
      question: "How do I convert Mbps back to B/s?",
      answer: "Multiply the Mbps value by 125,000 (B/s = Mbps × 125,000)."
    }
  ],
  relatedList: [
    { label: "Byte/sec to Bit/sec", from: "Bps", to: "bps" },
    { label: "Byte/sec to Kbps", from: "Bps", to: "kbps" },
    { label: "Byte/sec to Gbps", from: "Bps", to: "Gbps" },
    { label: "Bit/sec to Mbps", from: "bps", to: "Mbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE 802.3 Ethernet Standards"
  ]
};
