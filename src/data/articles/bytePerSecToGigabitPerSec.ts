import { CustomArticleData } from "./types";

export const BpsToGbpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "Gbps",
  seoTitle: "Byte/sec to Gbps Converter (B/s to Gbps) - UnitsConvertors",
  metaDescription: "Convert bytes per second to gigabits per second (B/s to Gbps) instantly. Formula: B/s ÷ 125,000,000. Calculation steps, tables, and fiber network FAQs.",
  h1: "Byte/sec to Gbps Converter",
  introduction: [
    "Converting bytes per second (B/s) to gigabits per second (Gbps) bridges storage array throughput and high-speed enterprise fiber optic link capacities. Datacenter SAN storage arrays, NVMe SSD clusters, and memory buses measure file write speeds in bytes per second, whereas Gigabit Ethernet ports, optical backbones, and PCIe cards specify bandwidth in gigabits per second (Gbps).",
    "Because 1 byte contains 8 bits, and 1 Gigabit per second equals 1,000,000,000 bits per second, converting B/s to Gbps requires multiplying by 8 and dividing by 1,000,000,000. This simplifies to dividing B/s by 125,000,000. For instance, a storage bus throughput of 125,000,000 B/s equals 1 Gbps.",
    "This technical guide explains the conversion between bytes per second and gigabits per second, provides step-by-step worked calculation examples, presents a quick-reference conversion table, and addresses common high-speed networking questions."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to gigabits per second (Gbps), divide the B/s value by 125,000,000. For example, 1,250,000,000 B/s equals 10 Gbps (1,250,000,000 ÷ 125,000,000 = 10 Gbps).",
    formulaDisplay: "Gigabits per second (Gbps) = Bytes per second (B/s) ÷ 125,000,000",
    subtext: "1 B/s = 8 × 10⁻⁹ Gbps (1 Gbps = 125,000,000 B/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) measures storage write speed and memory bus throughput. One byte consists of 8 bits. Operating systems, file managers, and NVMe SSD benchmark applications log throughput in bytes per second."
  },
  aboutTargetUnit: {
    title: "Understanding Gigabits per Second (Gbps)",
    text: "Gigabits per second (symbol: Gbps) represents 1,000,000,000 bits per second under SI decimal standards. Fiber optic networks, enterprise switches, USB4 interfaces, and PCIe bus lanes quantify throughput in Gbps."
  },
  relationship: "Because 1 B/s equals 8 bits per second, and 1 Gbps equals 1,000,000,000 bits per second, 1 Gbps equals 125,000,000 B/s (1,000,000,000 ÷ 8 = 125,000,000). Converting B/s to Gbps divides the value by 125,000,000.",
  relationshipTitle: "Byte/sec to Gbps Rate Comparison",
  relationshipItems: [
    { label: "1 B/s", value: "= 0.000000008 Gbps" },
    { label: "125,000,000 B/s", value: "= 1.0 Gbps" },
    { label: "1,250,000,000 B/s", value: "= 10.0 Gbps" },
    { label: "5,000,000,000 B/s", value: "= 40.0 Gbps" },
    { label: "12,500,000,000 B/s", value: "= 100.0 Gbps" }
  ],
  formula: {
    text: "Divide the bytes per second rate by 125,000,000 to convert to gigabits per second.",
    math: "Gbps = B/s ÷ 125,000,000",
    subtext: "Equivalently: Gbps = (B/s × 8) ÷ 1,000,000,000."
  },
  formulaTitle: "Byte/sec to Gbps Conversion Formula",
  practicalTip: {
    title: "SAN Network Sizing",
    text: "When connecting a high-speed NVMe flash array capable of writing 5,000,000,000 B/s (5 GB/s) to a network fabric: dividing 5,000,000,000 by 125,000,000 reveals that you need a 40 Gbps network connection to prevent bottlenecking."
  },
  expertNote: {
    title: "SI Decimal vs Binary Prefixes",
    text: "Network Gbps uses decimal SI multipliers (1 Gbps = 1,000,000,000 bits/sec = 125,000,000 bytes/sec). Operating systems using binary IEC gibibytes per second (GiB/s = 1,073,741,824 bytes/sec) will show ~7.4% lower numerical rates."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Enterprise SSD Array Benchmark",
        subtitle: "A cloud storage controller logs write throughput of 1,250,000,000 bytes per second. Convert this to Gbps.",
        steps: [
          "Identify byte rate: 1,250,000,000 B/s.",
          "Apply conversion formula: Gbps = 1,250,000,000 ÷ 125,000,000.",
          "Perform division: 1,250,000,000 ÷ 125,000,000 = 10.",
          "Result: 1,250,000,000 B/s equals 10 Gbps."
        ]
      },
      {
        title: "Example 2: PCIe Gen4 SSD Bus Speed",
        subtitle: "An M.2 NVMe SSD reads data at 7,500,000,000 bytes per second. Calculate bandwidth in Gbps.",
        steps: [
          "Identify byte rate: 7,500,000,000 B/s.",
          "Apply conversion formula: Gbps = 7,500,000,000 ÷ 125,000,000.",
          "Perform division: 7,500,000,000 ÷ 125,000,000 = 60.",
          "Result: 7,500,000,000 B/s equals 60 Gbps."
        ]
      },
      {
        title: "Example 3: Optical Switch Port Payload",
        subtitle: "A data center core link transfers 12,500,000,000 bytes per second. Convert this rate to Gbps.",
        steps: [
          "Identify byte rate: 12,500,000,000 B/s.",
          "Apply conversion formula: Gbps = 12,500,000,000 ÷ 125,000,000.",
          "Perform division: 12,500,000,000 ÷ 125,000,000 = 100.",
          "Result: 12,500,000,000 B/s equals 100 Gbps."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to Gbps Conversion Table",
    headers: ["Bytes per Second (B/s)", "Gigabits per Second (Gbps)", "Hardware Interface Standard"],
    rows: [
      { fromVal: "125,000,000 B/s", toVal: "1 Gbps", extra: "Gigabit Ethernet (1000BASE-T)" },
      { fromVal: "312,500,000 B/s", toVal: "2.5 Gbps", extra: "2.5G NBase-T Ethernet" },
      { fromVal: "625,000,000 B/s", toVal: "5 Gbps", extra: "USB 3.2 Gen 1 (5 Gbps)" },
      { fromVal: "1,250,000,000 B/s", toVal: "10 Gbps", extra: "10G Ethernet / USB 3.2 Gen 2" },
      { fromVal: "2,500,000,000 B/s", toVal: "20 Gbps", extra: "USB 3.2 Gen 2x2" },
      { fromVal: "3,125,000,000 B/s", toVal: "25 Gbps", extra: "25G Ethernet SFP28" },
      { fromVal: "5,000,000,000 B/s", toVal: "40 Gbps", extra: "Thunderbolt 4 / 40G Ethernet" },
      { fromVal: "10,000,000,000 B/s", toVal: "80 Gbps", extra: "USB4 80G" },
      { fromVal: "12,500,000,000 B/s", toVal: "100 Gbps", extra: "100G Ethernet QSFP28" },
      { fromVal: "50,000,000,000 B/s", toVal: "400 Gbps", extra: "400G Optical Core Switch" }
    ]
  },
  applications: {
    title: "Applications of Byte/sec to Gbps Conversion",
    items: [
      {
        title: "Enterprise SAN & NAS Sizing",
        text: "Determining network link speed requirements to match high-speed NVMe flash array throughputs."
      },
      {
        title: "Datacenter Interconnect Planning",
        text: "Sizing high-capacity optical fiber transceivers based on database storage write logs."
      },
      {
        title: "High-Performance Computing (HPC)",
        text: "Benchmarking GPU cluster interconnects against system memory write rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 125,000,000 instead of dividing: Multiplying produces a massive calculation error.",
      "Confusing Gbps (Gigabits/sec) with GB/s (Gigabytes/sec): 1 GB/s = 8 Gbps.",
      "Ignoring PCIe encoding overhead: 8b/10b and 128b/130b bus encoding reduces effective user data throughput."
    ]
  },
  faqs: [
    {
      question: "How many Gbps is 125,000,000 bytes per second?",
      answer: "125,000,000 bytes per second equals exactly 1 Gbps."
    },
    {
      question: "What is the formula to convert B/s to Gbps?",
      answer: "The formula is Gbps = B/s ÷ 125,000,000."
    },
    {
      question: "How many Gbps is 1,250,000,000 B/s?",
      answer: "1,250,000,000 B/s divided by 125,000,000 equals 10 Gbps."
    },
    {
      question: "What is the difference between Gbps and GB/s?",
      answer: "Gbps measures network bitrate in gigabits per second, whereas GB/s measures file transfer speed in gigabytes per second. 1 GB/s = 8 Gbps."
    },
    {
      question: "Why do we divide B/s by 125,000,000 to get Gbps?",
      answer: "Because B/s × 8 = bps, and bps ÷ 1,000,000,000 = Gbps. Combining these yields B/s ÷ (1,000,000,000 / 8) = B/s ÷ 125,000,000."
    },
    {
      question: "How many bytes per second is 10 Gbps?",
      answer: "10 Gbps multiplied by 125,000,000 equals 1,250,000,000 bytes per second (1.25 GB/s)."
    },
    {
      question: "What line rate in Gbps does a 5 GB/s (5,000,000,000 B/s) SSD require?",
      answer: "A 5 GB/s SSD requires a 40 Gbps network or bus link to transmit data without bottlenecking."
    },
    {
      question: "How do I convert Gbps back to B/s?",
      answer: "Multiply the Gbps value by 125,000,000 (B/s = Gbps × 125,000,000)."
    }
  ],
  relatedList: [
    { label: "Byte/sec to Bit/sec", from: "Bps", to: "bps" },
    { label: "Byte/sec to Mbps", from: "Bps", to: "Mbps" },
    { label: "Byte/sec to GB/s", from: "Bps", to: "GBps" },
    { label: "Bit/sec to Gbps", from: "bps", to: "Gbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "PCI-SIG Express Base Specification",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
