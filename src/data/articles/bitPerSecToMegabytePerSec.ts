import { CustomArticleData } from "./types";

export const bpsToMBpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "MBps",
  seoTitle: "Bit/sec to MB/s Converter (bps to MB/s) - UnitsConvertors",
  metaDescription: "Convert bits per second to megabytes per second (bps to MB/s) instantly. Formula: bps ÷ 8,000,000. Includes worked examples, conversion tables, and download speed FAQs.",
  h1: "Bit/sec to MB/s Converter",
  introduction: [
    "Converting bits per second (bps) to megabytes per second (MB/s) directly connects raw internet clock speeds to file download rates. Internet Service Providers advertise bandwidth in bits per second (e.g., 100 Mbps = 100,000,000 bps), while operating systems, game launchers, and web browsers express file download progress in megabytes per second (MB/s).",
    "Under international metric standards, 1 Megabyte equals 1,000,000 bytes, and each byte contains 8 bits. Thus, 1 MB/s equals 8,000,000 bits per second (8,000,000 bps). Converting from bps to MB/s requires dividing the bitrate in bps by 8,000,000. For instance, an 80,000,000 bps connection yields 10 MB/s file download speed.",
    "This technical guide explains the conversion between bps and MB/s, provides step-by-step worked calculation examples, presents a quick-reference conversion table, and addresses common download speed questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to megabytes per second (MB/s), divide the value by 8,000,000. For example, 40,000,000 bps equals 5 MB/s (40,000,000 ÷ 8,000,000 = 5 MB/s).",
    formulaDisplay: "Megabytes per second (MB/s) = Bits per second (bps) ÷ 8,000,000",
    subtext: "1 bps = 1.25 × 10⁻⁷ MB/s (1 MB/s = 8,000,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the foundational physical metric for data transmission capacity. It specifies the number of binary signals (0 or 1) transmitted across a telecommunication link every second."
  },
  aboutTargetUnit: {
    title: "Understanding Megabytes per Second (MB/s)",
    text: "Megabytes per second (symbol: MB/s or MBps) measures file storage write and transfer speeds over time. One megabyte represents 1,000,000 bytes (8,000,000 bits). Operating systems, SSD benchmarks, and steam game downloads use MB/s."
  },
  relationship: "Because 1 MB/s equals 1,000,000 bytes per second, and each byte comprises 8 bits, 1 MB/s equals 8,000,000 bps. Converting bps to MB/s scales down the numerical value by a factor of 8,000,000.",
  relationshipTitle: "Bit/sec to MB/s Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.000000125 MB/s" },
    { label: "8,000,000 bps", value: "= 1.0 MB/s" },
    { label: "80,000,000 bps", value: "= 10.0 MB/s" },
    { label: "100,000,000 bps", value: "= 12.5 MB/s" },
    { label: "1,000,000,000 bps", value: "= 125.0 MB/s" }
  ],
  formula: {
    text: "Divide the bits per second value by 8,000,000 to convert to megabytes per second.",
    math: "MB/s = bps ÷ 8,000,000",
    subtext: "Equivalently: MB/s = (bps ÷ 1,000,000) ÷ 8 = Mbps ÷ 8."
  },
  formulaTitle: "Bit/sec to MB/s Conversion Formula",
  practicalTip: {
    title: "Calculating Download Times",
    text: "To estimate file download duration: divide your connection speed in Mbps by 8 to find MB/s. On a 100 Mbps (100,000,000 bps) line, download speed is 12.5 MB/s. A 1,000 MB (1 GB) file will download in approximately 80 seconds (1,000 ÷ 12.5)."
  },
  expertNote: {
    title: "Broadband Advertised Speeds",
    text: "ISPs advertise network connections in Mbps (bits per second). Users often expect download managers to show the same number, but download software displays MB/s (bytes per second), which is numerically 8 times smaller."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Home Fiber Internet Line",
        subtitle: "An optical line operates at 50,000,000 bps. Convert this bandwidth into MB/s.",
        steps: [
          "Identify bitrate in bps: 50,000,000 bps.",
          "Apply conversion formula: MB/s = 50,000,000 ÷ 8,000,000.",
          "Perform calculation: 50,000,000 ÷ 8,000,000 = 6.25.",
          "Result: 50,000,000 bps equals 6.25 MB/s."
        ]
      },
      {
        title: "Example 2: Fast Ethernet Port",
        subtitle: "A 100BASE-TX Fast Ethernet port transfers 100,000,000 bps. Calculate speed in MB/s.",
        steps: [
          "Identify bitrate in bps: 100,000,000 bps.",
          "Apply conversion formula: MB/s = 100,000,000 ÷ 8,000,000.",
          "Perform calculation: 100,000,000 ÷ 8,000,000 = 12.5.",
          "Result: 100,000,000 bps equals 12.5 MB/s."
        ]
      },
      {
        title: "Example 3: Gigabit Connection Benchmark",
        subtitle: "A Gigabit network connection streams 1,000,000,000 bps. Convert this value to MB/s.",
        steps: [
          "Identify bitrate in bps: 1,000,000,000 bps.",
          "Apply conversion formula: MB/s = 1,000,000,000 ÷ 8,000,000.",
          "Perform calculation: 1,000,000,000 ÷ 8,000,000 = 125.",
          "Result: 1,000,000,000 bps equals 125 MB/s."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to MB/s Conversion Table",
    headers: ["Bits per Second (bps)", "Megabytes per Second (MB/s)", "Equivalent Mbps Speed"],
    rows: [
      { fromVal: "8,000,000 bps", toVal: "1 MB/s", extra: "8 Mbps broadband" },
      { fromVal: "16,000,000 bps", toVal: "2 MB/s", extra: "16 Mbps broadband" },
      { fromVal: "25,000,000 bps", toVal: "3.125 MB/s", extra: "25 Mbps 4K streaming" },
      { fromVal: "40,000,000 bps", toVal: "5 MB/s", extra: "40 Mbps VDSL" },
      { fromVal: "50,000,000 bps", toVal: "6.25 MB/s", extra: "50 Mbps home fiber" },
      { fromVal: "80,000,000 bps", toVal: "10 MB/s", extra: "80 Mbps cable internet" },
      { fromVal: "100,000,000 bps", toVal: "12.5 MB/s", extra: "100 Mbps Fast Ethernet" },
      { fromVal: "300,000,000 bps", toVal: "37.5 MB/s", extra: "300 Mbps fiber line" },
      { fromVal: "500,000,000 bps", toVal: "62.5 MB/s", extra: "500 Mbps mid-tier fiber" },
      { fromVal: "1,000,000,000 bps", toVal: "125 MB/s", extra: "1,000 Mbps (1 Gbps) Gigabit" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to MB/s Conversion",
    items: [
      {
        title: "File Transfer & Download Software",
        text: "Translating raw router bitrates into real-time file download speed indicators."
      },
      {
        title: "Media Server & Video Streaming",
        text: "Matching video bitrates with disk cache write performance requirements."
      },
      {
        title: "Network Storage (NAS) Sizing",
        text: "Ensuring local storage write speeds exceed network line rate throughputs."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000,000 instead of 8,000,000: Dividing by 1,000,000 gives Mbps (Megabits/sec), not MB/s (Megabytes/sec).",
      "Confusing MB/s with MiB/s: Decimal MB/s uses 1,000,000 bytes, while binary MiB/s uses 1,048,576 bytes.",
      "Overlooking TCP/IP header overhead: Actual file download speed will be roughly 5-10% below theoretical maximum."
    ]
  },
  faqs: [
    {
      question: "How many MB/s is 8,000,000 bps?",
      answer: "8,000,000 bps equals exactly 1 MB/s."
    },
    {
      question: "What is the formula to convert bps to MB/s?",
      answer: "The formula is MB/s = bps ÷ 8,000,000."
    },
    {
      question: "How many MB/s is 100,000,000 bps?",
      answer: "100,000,000 bps divided by 8,000,000 equals 12.5 MB/s."
    },
    {
      question: "Why is my 100 Mbps download speed showing as 12.5 MB/s?",
      answer: "Because 100 Mbps is in megabits per second, and download managers show megabytes per second. Dividing 100 by 8 equals 12.5 MB/s."
    },
    {
      question: "How many bits per second is 10 MB/s?",
      answer: "10 MB/s multiplied by 8,000,000 equals 80,000,000 bits per second (80 Mbps)."
    },
    {
      question: "What MB/s speed does a Gigabit (1,000,000,000 bps) internet connection deliver?",
      answer: "A Gigabit internet connection delivers a maximum theoretical transfer rate of 125 MB/s."
    },
    {
      question: "What is the difference between Mbps and MB/s?",
      answer: "Mbps stands for Megabits per second (network connection speed), while MB/s stands for Megabytes per second (file storage download speed)."
    },
    {
      question: "How do I convert MB/s back to bps?",
      answer: "Multiply the MB/s value by 8,000,000."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Bit/sec to Mbps", from: "bps", to: "Mbps" },
    { label: "Bit/sec to GB/s", from: "bps", to: "GBps" },
    { label: "Byte/sec to MB/s", from: "Bps", to: "MBps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "IEEE Standard 1541-2002 — Prefixes for Binary Multiples"
  ]
};
