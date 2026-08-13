import { CustomArticleData } from "./types";

export const bpsToGbpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "Gbps",
  seoTitle: "Bit/sec to Gbps Converter (bps to Gbps) - UnitsConvertors",
  metaDescription: "Convert bits per second to gigabits per second (bps to Gbps) instantly. Formula: bps ÷ 1,000,000,000. Worked examples, tables, and fiber optic FAQs.",
  h1: "Bit/sec to Gbps Converter",
  introduction: [
    "Converting bits per second (bps) to gigabits per second (Gbps) bridges fundamental hardware clock cycles to enterprise fiber optic and data center throughput metrics. Ultra-fast Gigabit fiber broadband, Wi-Fi 6/7 networks, PCI Express interconnects, and 10G/40G/100G Ethernet switches measure capacity in Gbps.",
    "Under standard International System of Units (SI) telecommunications metrics, 1 Gigabit per second equals 1,000,000,000 bits per second (10⁹ bps). Converting from bps to Gbps requires dividing the rate in bps by 1,000,000,000. For instance, 10,000,000,000 bps converts to 10 Gbps.",
    "This guide presents the decimal mathematical conversion between bps and Gbps, provides step-by-step worked examples, offers a reference table, and answers common high-speed networking questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to gigabits per second (Gbps), divide the bps value by 1,000,000,000. For example, 2,500,000,000 bps equals 2.5 Gbps (2,500,000,000 ÷ 1,000,000,000 = 2.5 Gbps).",
    formulaDisplay: "Gigabits per second (Gbps) = Bits per second (bps) ÷ 1,000,000,000",
    subtext: "1 bps = 10⁻⁹ Gbps (1 Gbps = 1,000,000,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the foundational unit of physical-layer transmission throughput. It quantifies the number of discrete binary bits (0s and 1s) passing through a communication link every second."
  },
  aboutTargetUnit: {
    title: "Understanding Gigabits per Second (Gbps)",
    text: "Gigabits per second (symbol: Gbps) represents 1,000,000,000 bits per second. It is the global benchmark for fiber optic backbones, high-performance data centers, USB4 interface speeds, and multi-gigabit consumer fiber."
  },
  relationship: "Because 'giga' signifies 1,000,000,000 in SI decimal notation, 1 Gbps equals 1,000,000,000 bps. Converting bps to Gbps shifts the decimal point 9 positions to the left.",
  relationshipTitle: "Bit/sec to Gbps Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.000000001 Gbps" },
    { label: "1,000,000 bps", value: "= 0.001 Gbps (1 Mbps)" },
    { label: "100,000,000 bps", value: "= 0.1 Gbps (100 Mbps)" },
    { label: "1,000,000,000 bps", value: "= 1.0 Gbps" },
    { label: "10,000,000,000 bps", value: "= 10.0 Gbps" }
  ],
  formula: {
    text: "Divide the bits per second value by 1,000,000,000 to convert to gigabits per second.",
    math: "Gbps = bps ÷ 1,000,000,000",
    subtext: "Equivalently: Gbps = bps × 10⁻⁹."
  },
  formulaTitle: "Bit/sec to Gbps Conversion Formula",
  practicalTip: {
    title: "Fiber Optic Line Rates",
    text: "Standard Gigabit Ethernet operates at 1,000,000,000 bps (1 Gbps). Enterprise data centers routinely deploy 10,000,000,000 bps (10 Gbps), 25,000,000,000 bps (25 Gbps), and 100,000,000,000 bps (100 Gbps) fiber links."
  },
  expertNote: {
    title: "Gbps vs GB/s",
    text: "Always distinguish Gbps (Gigabits per second) from GB/s (Gigabytes per second). A 10 Gbps network connection translates to a theoretical file transfer rate of 1.25 GB/s (10 ÷ 8)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Multi-Gigabit Fiber Connection",
        subtitle: "A cloud access line registers 2,500,000,000 bps. Convert this bandwidth into Gbps.",
        steps: [
          "Identify rate in bps: 2,500,000,000 bps.",
          "Apply conversion formula: Gbps = 2,500,000,000 ÷ 1,000,000,000.",
          "Calculate: 2,500,000,000 ÷ 1,000,000,000 = 2.5.",
          "Result: 2,500,000,000 bps equals 2.5 Gbps."
        ]
      },
      {
        title: "Example 2: 10G Data Center Switch Port",
        subtitle: "A server optical port transmits at 10,000,000,000 bps. Convert this value to Gbps.",
        steps: [
          "Identify rate in bps: 10,000,000,000 bps.",
          "Apply conversion formula: Gbps = 10,000,000,000 ÷ 1,000,000,000.",
          "Calculate: 10,000,000,000 ÷ 1,000,000,000 = 10.",
          "Result: 10,000,000,000 bps equals 10 Gbps."
        ]
      },
      {
        title: "Example 3: High-Speed PCIe Lane",
        subtitle: "A PCIe bus lane transfers 32,000,000,000 bps. Determine its bandwidth in Gbps.",
        steps: [
          "Identify rate in bps: 32,000,000,000 bps.",
          "Apply conversion formula: Gbps = 32,000,000,000 ÷ 1,000,000,000.",
          "Calculate: 32,000,000,000 ÷ 1,000,000,000 = 32.",
          "Result: 32,000,000,000 bps equals 32 Gbps."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to Gbps Conversion Table",
    headers: ["Bits per Second (bps)", "Gigabits per Second (Gbps)", "Industry Standard / Usage"],
    rows: [
      { fromVal: "10,000,000 bps", toVal: "0.01 Gbps", extra: "10 Mbps Fast Ethernet" },
      { fromVal: "100,000,000 bps", toVal: "0.1 Gbps", extra: "100 Mbps Fast Ethernet" },
      { fromVal: "1,000,000,000 bps", toVal: "1 Gbps", extra: "1000BASE-T Gigabit Ethernet" },
      { fromVal: "2,500,000,000 bps", toVal: "2.5 Gbps", extra: "2.5GBASE-T NBase-T Wi-Fi 6" },
      { fromVal: "5,000,000,000 bps", toVal: "5 Gbps", extra: "USB 3.2 Gen 1 (USB 3.0)" },
      { fromVal: "10,000,000,000 bps", toVal: "10 Gbps", extra: "10GBASE-T / USB 3.2 Gen 2" },
      { fromVal: "25,000,000,000 bps", toVal: "25 Gbps", extra: "25G Ethernet SFP28" },
      { fromVal: "40,000,000,000 bps", toVal: "40 Gbps", extra: "40G Ethernet QSFP+ / Thunderbolt 4" },
      { fromVal: "100,000,000,000 bps", toVal: "100 Gbps", extra: "100G Ethernet QSFP28" },
      { fromVal: "400,000,000,000 bps", toVal: "400 Gbps", extra: "400G Optical Core Switch" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to Gbps Conversion",
    items: [
      {
        title: "High-Performance Data Centers",
        text: "Configuring multi-gigabit switch fabric ports and server network interface cards (NICs)."
      },
      {
        title: "Fiber Optic Telecommunications",
        text: "Designing dense wavelength-division multiplexing (DWDM) optical backbone links."
      },
      {
        title: "Computer Peripheral Interfaces",
        text: "Benchmarking USB4, Thunderbolt 4, and PCI Express bus throughput capacities."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Gbps (Gigabits per second) with GB/s (Gigabytes per second): Divide Gbps by 8 to get GB/s file transfer speeds.",
      "Dividing by binary 1,073,741,824 instead of SI decimal 1,000,000,000: Telecom standards use decimal 10⁹.",
      "Mismatched capitalization: 'b' is bits, 'B' is bytes."
    ]
  },
  faqs: [
    {
      question: "How many Gbps is 1,000,000,000 bps?",
      answer: "1,000,000,000 bps equals exactly 1 Gbps."
    },
    {
      question: "What is the formula to convert bps to Gbps?",
      answer: "The formula is Gbps = bps ÷ 1,000,000,000."
    },
    {
      question: "How many Gbps is 10,000,000,000 bps?",
      answer: "10,000,000,000 bps divided by 1,000,000,000 equals 10 Gbps."
    },
    {
      question: "What is the difference between Gbps and GB/s?",
      answer: "Gbps measures network bitrate in gigabits per second, while GB/s measures file storage write speed in gigabytes per second. 1 GB/s = 8 Gbps."
    },
    {
      question: "How many Mbps are in 1 Gbps?",
      answer: "There are 1,000 Mbps in 1 Gbps."
    },
    {
      question: "How many bits per second is 10 Gbps?",
      answer: "10 Gbps multiplied by 1,000,000,000 equals 10,000,000,000 bits per second."
    },
    {
      question: "What file download rate does a 1 Gbps internet connection yield?",
      answer: "A 1 Gbps internet connection yields a maximum theoretical download rate of 125 MB/s (0.125 GB/s)."
    },
    {
      question: "Why do network interfaces use Gbps instead of bps?",
      answer: "Gbps simplifies large number reporting by scaling 1,000,000,000 bps down to 1 Gbps."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Mbps", from: "bps", to: "Mbps" },
    { label: "Bit/sec to Tbps", from: "bps", to: "Tbps" },
    { label: "Bit/sec to GB/s", from: "bps", to: "GBps" },
    { label: "Byte/sec to Gbps", from: "Bps", to: "Gbps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "IEEE 802.3 Ethernet Working Group Standards",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
