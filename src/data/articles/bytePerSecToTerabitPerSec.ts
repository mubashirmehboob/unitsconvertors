import { CustomArticleData } from "./types";

export const BpsToTbpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "Tbps",
  seoTitle: "Byte/sec to Tbps Converter (B/s to Tbps) - UnitsConvertors",
  metaDescription: "Convert bytes per second to terabits per second (B/s to Tbps) instantly. Formula: B/s ÷ 125,000,000,000. Calculation steps, tables, and backbone FAQs.",
  h1: "Byte/sec to Tbps Converter",
  introduction: [
    "Converting bytes per second (B/s) to terabits per second (Tbps) scales base-level memory write speeds into ultra-high-capacity transoceanic and global cloud backbone network metrics. Subsea fiber optic cables, tier-1 internet exchanges, and distributed supercomputer clusters process petabytes of storage, reporting aggregate communications in terabits per second (Tbps).",
    "Because 1 byte consists of 8 bits, and 1 Terabit per second equals 1,000,000,000,000 bits per second, converting B/s to Tbps requires multiplying by 8 and dividing by 1,000,000,000,000. This simplifies to dividing B/s by 125,000,000,000. For example, a global data migration streaming at 125,000,000,000 B/s consumes 1 Tbps of network bandwidth.",
    "This technical guide explains the mathematical relationship between bytes per second and terabits per second, provides step-by-step worked calculation examples, features a global bandwidth comparison table, and addresses frequent high-capacity telecom questions."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to terabits per second (Tbps), divide the B/s value by 125,000,000,000. For example, 1,250,000,000,000 B/s equals 10 Tbps (1,250,000,000,000 ÷ 125,000,000,000 = 10 Tbps).",
    formulaDisplay: "Terabits per second (Tbps) = Bytes per second (B/s) ÷ 125,000,000,000",
    subtext: "1 B/s = 8 × 10⁻¹² Tbps (1 Tbps = 125,000,000,000 B/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) measures storage processing and memory write rates over time. One byte comprises 8 bits. Enterprise storage controllers, file systems, and database loggers track IOPS and throughput in bytes per second."
  },
  aboutTargetUnit: {
    title: "Understanding Terabits per Second (Tbps)",
    text: "Terabits per second (symbol: Tbps) represents 1,000,000,000,000 bits per second under SI decimal standards. Subsea optical cables, global ISP peering points, and hyperscale cloud backbones quantify capacity in Tbps."
  },
  relationship: "Because 1 B/s equals 8 bits per second, and 1 Tbps equals 1,000,000,000,000 bits per second, 1 Tbps equals 125,000,000,000 B/s (1,000,000,000,000 ÷ 8 = 125,000,000,000). Converting B/s to Tbps divides the value by 125,000,000,000.",
  relationshipTitle: "Byte/sec to Tbps Rate Comparison",
  relationshipItems: [
    { label: "1 B/s", value: "= 0.000000000008 Tbps" },
    { label: "125,000,000,000 B/s", value: "= 1.0 Tbps" },
    { label: "1,250,000,000,000 B/s", value: "= 10.0 Tbps" },
    { label: "2,500,000,000,000 B/s", value: "= 20.0 Tbps" },
    { label: "12,500,000,000,000 B/s", value: "= 100.0 Tbps" }
  ],
  formula: {
    text: "Divide the bytes per second rate by 125,000,000,000 to convert to terabits per second.",
    math: "Tbps = B/s ÷ 125,000,000,000",
    subtext: "Equivalently: Tbps = (B/s × 8) ÷ 1,000,000,000,000."
  },
  formulaTitle: "Byte/sec to Tbps Conversion Formula",
  practicalTip: {
    title: "Global Data Center Migration Tip",
    text: "When replicating a 100 Terabyte database cluster per day across continents: converting the sustained storage transfer rate of ~1.15 GB/s (1,157,400,000 B/s) reveals a required dedicated network pipeline of approximately 0.009 Tbps (9.26 Gbps)."
  },
  expertNote: {
    title: "Tbps vs TB/s",
    text: "Always distinguish Terabits per second (Tbps) from Terabytes per second (TB/s). 1 Terabyte per second equals 8 Terabits per second (1 TB/s = 8 Tbps = 1,000 GB/s)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Transoceanic Fiber System Payload",
        subtitle: "A subsea fiber system logs aggregate storage data transfer of 2,500,000,000,000 bytes per second. Convert to Tbps.",
        steps: [
          "Identify byte rate: 2,500,000,000,000 B/s.",
          "Apply conversion formula: Tbps = 2,500,000,000,000 ÷ 125,000,000,000.",
          "Perform division: 2,500,000,000,000 ÷ 125,000,000,000 = 20.",
          "Result: 2,500,000,000,000 B/s equals 20 Tbps."
        ]
      },
      {
        title: "Example 2: Global Internet Exchange Log",
        subtitle: "An IXP logs peak aggregate throughput of 4,000,000,000,000 bytes per second. Convert this value to Tbps.",
        steps: [
          "Identify byte rate: 4,000,000,000,000 B/s.",
          "Apply conversion formula: Tbps = 4,000,000,000,000 ÷ 125,000,000,000.",
          "Perform division: 4,000,000,000,000 ÷ 125,000,000,000 = 32.",
          "Result: 4,000,000,000,000 B/s equals 32 Tbps."
        ]
      },
      {
        title: "Example 3: Next-Gen AI Supercomputer Interconnect",
        subtitle: "An AI supercomputer memory bus transfers 12,500,000,000,000 bytes per second. Convert this speed to Tbps.",
        steps: [
          "Identify byte rate: 12,500,000,000,000 B/s.",
          "Apply conversion formula: Tbps = 12,500,000,000,000 ÷ 125,000,000,000.",
          "Perform division: 12,500,000,000,000 ÷ 125,000,000,000 = 100.",
          "Result: 12,500,000,000,000 B/s equals 100 Tbps."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to Tbps Conversion Table",
    headers: ["Bytes per Second (B/s)", "Terabits per Second (Tbps)", "Infrastructure Benchmark"],
    rows: [
      { fromVal: "12,500,000,000 B/s", toVal: "0.1 Tbps", extra: "100 Gbps Core Trunk" },
      { fromVal: "50,000,000,000 B/s", toVal: "0.4 Tbps", extra: "400G Optical Interface" },
      { fromVal: "100,000,000,000 B/s", toVal: "0.8 Tbps", extra: "800G Data Center Interconnect" },
      { fromVal: "125,000,000,000 B/s", toVal: "1.0 Tbps", extra: "1 Terabit/sec Gateway" },
      { fromVal: "625,000,000,000 B/s", toVal: "5.0 Tbps", extra: "Regional IXP Peak Traffic" },
      { fromVal: "1,250,000,000,000 B/s", toVal: "10.0 Tbps", extra: "Tier-1 ISP Backbone Link" },
      { fromVal: "2,500,000,000,000 B/s", toVal: "20.0 Tbps", extra: "Subsea Cable Pair Capacity" },
      { fromVal: "6,250,000,000,000 B/s", toVal: "50.0 Tbps", extra: "DE-CIX Aggregate Peak Traffic" },
      { fromVal: "12,500,000,000,000 B/s", toVal: "100.0 Tbps", extra: "Next-Gen Optical Transoceanic Link" },
      { fromVal: "31,250,000,000,000 B/s", toVal: "250.0 Tbps", extra: "Dunant Subsea Cable System" }
    ]
  },
  applications: {
    title: "Applications of Byte/sec to Tbps Conversion",
    items: [
      {
        title: "Global Subsea Cable Management",
        text: "Sizing optical DWDM transceiver capacity based on transatlantic database replication throughputs."
      },
      {
        title: "Tier-1 ISP Peering Analytics",
        text: "Monitoring global traffic volume exchanges between international telecommunication carriers."
      },
      {
        title: "AI Model Training Infrastructure",
        text: "Designing high-bandwidth memory fabrics for massive distributed deep learning clusters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 125,000,000,000 instead of dividing: Dividing scales down to the correct fractional or integer Tbps rate.",
      "Confusing Tbps (Terabits/sec) with TB/s (Terabytes/sec): 1 TB/s = 8 Tbps.",
      "Scientific notation truncation errors: Keep track of all 11 zeros when carrying out calculations manually."
    ]
  },
  faqs: [
    {
      question: "How many Tbps is 125,000,000,000 bytes per second?",
      answer: "125,000,000,000 bytes per second equals exactly 1 Tbps."
    },
    {
      question: "What is the formula to convert B/s to Tbps?",
      answer: "The formula is Tbps = B/s ÷ 125,000,000,000."
    },
    {
      question: "How many Gbps are in 1 Tbps?",
      answer: "There are 1,000 Gbps in 1 Tbps."
    },
    {
      question: "What is the difference between Tbps and TB/s?",
      answer: "Tbps measures network transmission bandwidth in terabits per second, whereas TB/s measures file storage write speed in terabytes per second. 1 TB/s = 8 Tbps."
    },
    {
      question: "Why do we divide B/s by 125,000,000,000 to get Tbps?",
      answer: "Because B/s × 8 = bps, and bps ÷ 1,000,000,000,000 = Tbps. Combining these yields B/s ÷ (1,000,000,000,000 / 8) = B/s ÷ 125,000,000,000."
    },
    {
      question: "How many bytes per second is 10 Tbps?",
      answer: "10 Tbps multiplied by 125,000,000,000 equals 1,250,000,000,000 bytes per second (1.25 TB/s)."
    },
    {
      question: "How many B/s is 1 Gbps?",
      answer: "1 Gbps equals 125,000,000 bytes per second (0.001 Tbps)."
    },
    {
      question: "How do I convert Tbps back to B/s?",
      answer: "Multiply the Tbps value by 125,000,000,000."
    }
  ],
  relatedList: [
    { label: "Byte/sec to Bit/sec", from: "Bps", to: "bps" },
    { label: "Byte/sec to Gbps", from: "Bps", to: "Gbps" },
    { label: "Byte/sec to KB/s", from: "Bps", to: "KBps" },
    { label: "Bit/sec to Tbps", from: "bps", to: "Tbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "ITU-T Optical Transport Network (OTN) Standards",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
