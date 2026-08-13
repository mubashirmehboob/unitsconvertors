import { CustomArticleData } from "./types";

export const bpsToGBpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "GBps",
  seoTitle: "Bit/sec to GB/s Converter (bps to GB/s) - UnitsConvertors",
  metaDescription: "Convert bits per second to gigabytes per second (bps to GB/s) instantly. Formula: bps ÷ 8,000,000,000. Examples, conversion tables, and high-speed data FAQs.",
  h1: "Bit/sec to GB/s Converter",
  introduction: [
    "Converting bits per second (bps) to gigabytes per second (GB/s) bridges raw telecommunication bitrates with high-performance storage and memory throughput metrics. Multi-gigabit fiber connections, NVMe SSD arrays, PCI Express slots, and DDR5 RAM channels measure sustained data throughput in gigabytes per second (GB/s).",
    "Under international SI decimal standards, 1 Gigabyte equals 1,000,000,000 bytes, and each byte consists of 8 bits. Consequently, 1 GB/s equals 8,000,000,000 bits per second (8,000,000,000 bps). Converting from bps to GB/s requires dividing the bitrate in bps by 8,000,000,000. For instance, a 10,000,000,000 bps (10 Gbps) network link transfers 1.25 GB/s.",
    "This technical guide details the mathematical relationship between bits per second and gigabytes per second, provides step-by-step worked calculation examples, presents a quick-reference conversion table, and answers common high-speed memory and storage questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to gigabytes per second (GB/s), divide the value by 8,000,000,000. For example, 40,000,000,000 bps equals 5 GB/s (40,000,000,000 ÷ 8,000,000,000 = 5 GB/s).",
    formulaDisplay: "Gigabytes per second (GB/s) = Bits per second (bps) ÷ 8,000,000,000",
    subtext: "1 bps = 1.25 × 10⁻¹⁰ GB/s (1 GB/s = 8,000,000,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the base metric for measuring telecommunication transmission rates. It quantifies the number of binary 0s and 1s physically flowing across a network interface or optical line per second."
  },
  aboutTargetUnit: {
    title: "Understanding Gigabytes per Second (GB/s)",
    text: "Gigabytes per second (symbol: GB/s or GBps) measures massive file storage transfer and system memory bus bandwidth over time. One gigabyte equals 1,000,000,000 bytes (8,000,000,000 bits). PCIe 5.0 SSDs, Graphics RAM, and enterprise SAN storage measure performance in GB/s."
  },
  relationship: "Because 1 GB/s equals 1,000,000,000 bytes per second, and each byte comprises 8 bits, 1 GB/s represents 8,000,000,000 bps. Converting bps to GB/s scales down the numerical value by a factor of 8,000,000,000.",
  relationshipTitle: "Bit/sec to GB/s Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.000000000125 GB/s" },
    { label: "8,000,000,000 bps", value: "= 1.0 GB/s" },
    { label: "10,000,000,000 bps", value: "= 1.25 GB/s" },
    { label: "40,000,000,000 bps", value: "= 5.0 GB/s" },
    { label: "100,000,000,000 bps", value: "= 12.5 GB/s" }
  ],
  formula: {
    text: "Divide the bits per second value by 8,000,000,000 to convert to gigabytes per second.",
    math: "GB/s = bps ÷ 8,000,000,000",
    subtext: "Equivalently: GB/s = (bps ÷ 1,000,000,000) ÷ 8 = Gbps ÷ 8."
  },
  formulaTitle: "Bit/sec to GB/s Conversion Formula",
  practicalTip: {
    title: "PCIe and SSD Speed Context",
    text: "To convert network card speeds (Gbps) to SSD or memory write speeds (GB/s): divide by 8. A 10 Gbps network connection matches a 1.25 GB/s disk transfer rate. A 100 Gbps network interface matches a 12.5 GB/s storage bus rate."
  },
  expertNote: {
    title: "Decimal (GB/s) vs Binary (GiB/s)",
    text: "Decimal GB/s uses 10⁹ (1,000,000,000 bytes/sec). Operating systems using binary IEC GiB/s (1,073,741,824 bytes/sec) will show a slightly lower numerical value (~7.4% lower)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: 10G Ethernet Optical Link",
        subtitle: "An optical switch port transfers 10,000,000,000 bps. Convert this bandwidth into GB/s.",
        steps: [
          "Identify bitrate in bps: 10,000,000,000 bps.",
          "Apply conversion formula: GB/s = 10,000,000,000 ÷ 8,000,000,000.",
          "Perform calculation: 10,000,000,000 ÷ 8,000,000,000 = 1.25.",
          "Result: 10,000,000,000 bps equals 1.25 GB/s."
        ]
      },
      {
        title: "Example 2: Thunderbolt 4 Connection",
        subtitle: "A Thunderbolt 4 cable operates at 40,000,000,000 bps. Calculate maximum file speed in GB/s.",
        steps: [
          "Identify bitrate in bps: 40,000,000,000 bps.",
          "Apply conversion formula: GB/s = 40,000,000,000 ÷ 8,000,000,000.",
          "Perform calculation: 40,000,000,000 ÷ 8,000,000,000 = 5.",
          "Result: 40,000,000,000 bps equals 5 GB/s."
        ]
      },
      {
        title: "Example 3: 100G Data Center Backbone",
        subtitle: "A cloud datacenter trunk transmits 100,000,000,000 bps. Convert this value to GB/s.",
        steps: [
          "Identify bitrate in bps: 100,000,000,000 bps.",
          "Apply conversion formula: GB/s = 100,000,000,000 ÷ 8,000,000,000.",
          "Perform calculation: 100,000,000,000 ÷ 8,000,000,000 = 12.5.",
          "Result: 100,000,000,000 bps equals 12.5 GB/s."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to GB/s Conversion Table",
    headers: ["Bits per Second (bps)", "Gigabytes per Second (GB/s)", "Hardware / Protocol Example"],
    rows: [
      { fromVal: "1,000,000,000 bps", toVal: "0.125 GB/s", extra: "1 Gbps Gigabit Ethernet" },
      { fromVal: "2,500,000,000 bps", toVal: "0.3125 GB/s", extra: "2.5G NBase-T Ethernet" },
      { fromVal: "5,000,000,000 bps", toVal: "0.625 GB/s", extra: "USB 3.2 Gen 1 (5 Gbps)" },
      { fromVal: "8,000,000,000 bps", toVal: "1 GB/s", extra: "1 Gigabyte/sec baseline" },
      { fromVal: "10,000,000,000 bps", toVal: "1.25 GB/s", extra: "10 Gbps Ethernet / USB 3.2 Gen 2" },
      { fromVal: "20,000,000,000 bps", toVal: "2.5 GB/s", extra: "USB 3.2 Gen 2x2 (20 Gbps)" },
      { fromVal: "40,000,000,000 bps", toVal: "5 GB/s", extra: "Thunderbolt 4 / PCIe 3.0 x4" },
      { fromVal: "80,000,000,000 bps", toVal: "10 GB/s", extra: "PCIe 4.0 x5 / USB4 80G" },
      { fromVal: "100,000,000,000 bps", toVal: "12.5 GB/s", extra: "100G Ethernet QSFP28" },
      { fromVal: "400,000,000,000 bps", toVal: "50 GB/s", extra: "400G Data Center Core Switch" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to GB/s Conversion",
    items: [
      {
        title: "Storage Area Networks (SAN)",
        text: "Designing high-performance Fibre Channel or iSCSI SAN fabric links to match NVMe flash storage."
      },
      {
        title: "High-Performance Computing & AI",
        text: "Sizing GPU cluster interconnects and High Bandwidth Memory (HBM) interfaces."
      },
      {
        title: "System Hardware Benchmarking",
        text: "Comparing motherboard PCI Express bus slot bandwidth with optical network card capabilities."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Gbps with GB/s: 1 Gbps is only 0.125 GB/s (125 MB/s).",
      "Dividing by 1,000,000,000 instead of 8,000,000,000: Dividing by 1,000,000,000 yields Gbps (gigabits/sec), not GB/s (gigabytes/sec).",
      "Neglecting bus encoding overhead: Protocols like 8b/10b or 128b/130b reduce actual user payload bandwidth."
    ]
  },
  faqs: [
    {
      question: "How many GB/s is 8,000,000,000 bps?",
      answer: "8,000,000,000 bps equals exactly 1 GB/s."
    },
    {
      question: "What is the formula to convert bps to GB/s?",
      answer: "The formula is GB/s = bps ÷ 8,000,000,000."
    },
    {
      question: "How many GB/s is 10,000,000,000 bps (10 Gbps)?",
      answer: "10,000,000,000 bps divided by 8,000,000,000 equals 1.25 GB/s."
    },
    {
      question: "What is the difference between Gbps and GB/s?",
      answer: "Gbps stands for Gigabits per second (network communication line speed), whereas GB/s stands for Gigabytes per second (file storage and RAM transfer speed). 1 GB/s = 8 Gbps."
    },
    {
      question: "How many bits per second is 5 GB/s?",
      answer: "5 GB/s multiplied by 8,000,000,000 equals 40,000,000,000 bits per second (40 Gbps)."
    },
    {
      question: "How many MB/s are in 1 GB/s?",
      answer: "There are 1,000 MB/s in 1 GB/s under standard SI decimal definitions."
    },
    {
      question: "What GB/s speed does a 100 Gbps network link yield?",
      answer: "A 100 Gbps network link yields a theoretical maximum throughput of 12.5 GB/s."
    },
    {
      question: "How do I convert GB/s back to bps?",
      answer: "Multiply the GB/s value by 8,000,000,000."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Bit/sec to Gbps", from: "bps", to: "Gbps" },
    { label: "Bit/sec to MB/s", from: "bps", to: "MBps" },
    { label: "Byte/sec to GB/s", from: "Bps", to: "GBps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "PCI-SIG Express Base Specification",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
