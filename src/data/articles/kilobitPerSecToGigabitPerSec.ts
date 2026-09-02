import { CustomArticleData } from "./types";

export const kbpsToGbpsArticle: CustomArticleData = {
  fromUnitId: "kbps",
  toUnitId: "Gbps",
  seoTitle: "Kbps to Gbps Converter (Kilobits/sec to Gigabits/sec) | UnitsConvertors.com",
  metaDescription: "Convert kilobits per second to gigabits per second (Kbps to Gbps) accurately. Learn the exact 1/1,000,000 formula, ISP trunking examples, and conversion tables.",
  h1: "Kbps to Gbps Converter",
  introduction: [
    "Converting kilobits per second (Kbps or kb/s) to gigabits per second (Gbps or Gb/s) scales low-bandwidth voice, IoT, and telemetry rates into high-capacity fiber-optic backbone and enterprise telecommunication network metrics.",
    "A kilobit per second (Kbps) represents one thousand bits ($1,000\\text{ bits}$) per second, commonly used for individual voice channels, audio codecs, and smart sensor telemetry. A gigabit per second (Gbps) represents one billion bits ($1,000,000,000\\text{ bits}$) per second under standard International System of Units (SI) decimal prefix conventions.",
    "Because one gigabit equals exactly $1,000,000$ kilobits ($10^6\\text{ Kbps}$), converting kilobits per second to gigabits per second requires dividing the Kbps value by $1,000,000$ (or multiplying by $10^{-6}$). For example, an aggregate internet service provider trunk carrying $2,500,000\\text{ Kbps}$ of subscriber traffic operates at $2.5\\text{ Gbps}$. This guide provides exact mathematical formulas, telecom aggregation worked examples, comprehensive conversion tables, and common calculation mistakes."
  ],
  quickAnswer: {
    text: "To convert kilobits per second (Kbps) to gigabits per second (Gbps), divide the rate by 1,000,000 (or multiply by 0.000001). For example, 1,000,000 Kbps equals exactly 1.0 Gbps (1,000,000 ÷ 1,000,000 = 1 Gbps).",
    formulaDisplay: "\\text{Gigabits per second (Gbps)} = \\frac{\\text{Kilobits per second (Kbps)}}{1,000,000} = \\text{Kbps} \\times 10^{-6}",
    subtext: "1 Gbps = 1,000,000 Kbps = 1,000 Mbps = 125 MB/s | 1 Kbps = 0.000001 Gbps"
  },
  aboutSourceUnit: {
    title: "Understanding Kilobits per Second (Kbps)",
    text: "Kilobits per second (symbol: kbps or kb/s) represents 1,000 bits of digital throughput per second. It is the fundamental rate metric for audio streaming, VoIP voice telephony channels, narrowband radio communications, and IoT sensor networks."
  },
  aboutTargetUnit: {
    title: "Understanding Gigabits per Second (Gbps)",
    text: "Gigabits per second (symbol: Gbps or Gb/s) represents 1,000,000,000 bits transferred per second. It is the global standard for high-speed fiber-optic broadband, 5G cellular infrastructure backhaul, datacenter Ethernet switches (10GbE, 40GbE, 100GbE), and submarine internet cables."
  },
  relationship: "Under SI decimal prefix definitions (IEC 80000-13), 1 gigabit per second (Gbps) equals exactly 1,000 megabits per second (Mbps) or 1,000,000 kilobits per second (Kbps). Dividing Kbps by 1,000,000 shifts the decimal point six positions to the left, yielding the exact decimal Gbps rate.",
  relationshipTitle: "Kbps to Gbps Rate Scale Comparison",
  relationshipItems: [
    { label: "10,000 Kbps (10 Mbps)", value: "0.010 Gbps" },
    { label: "100,000 Kbps (100 Mbps)", value: "0.100 Gbps" },
    { label: "500,000 Kbps (500 Mbps)", value: "0.500 Gbps" },
    { label: "1,000,000 Kbps (1,000 Mbps)", value: "1.000 Gbps" },
    { label: "10,000,000 Kbps (10,000 Mbps)", value: "10.000 Gbps" },
    { label: "100,000,000 Kbps", value: "100.000 Gbps" }
  ],
  formula: {
    text: "Divide the rate in kilobits per second by 1,000,000, or multiply by 0.000001 (10⁻⁶).",
    math: "\\text{Rate (Gbps)} = \\frac{\\text{Rate (Kbps)}}{1,000,000} = \\text{Rate (Kbps)} \\times 10^{-6}",
    subtext: "Inverse formula: Rate (Kbps) = Rate (Gbps) × 1,000,000"
  },
  formulaTitle: "Kbps to Gbps Conversion Formula",
  practicalTip: {
    title: "Carrier Traffic Aggregation Sizing",
    text: "When aggregating thousands of individual client streams (such as 64 Kbps voice calls or 5,000 Kbps video streams) onto an optical trunk, sum the total Kbps and divide by 1,000,000 to determine whether a 1 Gbps, 10 Gbps, or 100 Gbps port is required."
  },
  expertNote: {
    title: "Gigabits (Gbps) vs Gigabytes (GB/s)",
    text: "Telecommunications optical carriers specify transmission capacity in gigabits per second (Gbps, lowercase 'b'), whereas file servers and computer architectures measure data in gigabytes per second (GB/s, uppercase 'B'). Because 1 byte contains 8 bits, 1 Gbps equals exactly 0.125 GB/s (125 MB/s)."
  },
  examples: {
    title: "Step-by-Step Practical Conversion Examples",
    items: [
      {
        title: "Example 1: Municipal ISP Fiber Aggregation",
        subtitle: "A regional fiber distribution hub aggregates 800,000 Kbps of customer traffic during peak hours. Convert this total rate to gigabits per second.",
        steps: [
          "Identify known aggregate rate: 800,000 Kbps.",
          "Apply conversion formula: Rate (Gbps) = 800,000 ÷ 1,000,000.",
          "Perform calculation: 800,000 ÷ 1,000,000 = 0.8 Gbps (800 Mbps).",
          "Final Result: The distribution hub carries 0.8 Gbps of traffic."
        ]
      },
      {
        title: "Example 2: Enterprise Campus Gigabit Uplink",
        subtitle: "A university campus connects to the national research network via a link provisioned for 10,000,000 Kbps. Express this capacity in Gbps.",
        steps: [
          "Identify known bandwidth: 10,000,000 Kbps.",
          "Divide by 1,000,000: 10,000,000 ÷ 1,000,000 = 10 Gbps.",
          "Final Result: The campus utilizes a 10.0 Gbps (10GbE) uplink."
        ]
      },
      {
        title: "Example 3: Concurrent VoIP Call Center Gateway",
        subtitle: "A cloud telecom gateway handles 50,000 simultaneous 64 Kbps voice calls, totaling 3,200,000 Kbps. Determine the required uplink bandwidth in Gbps.",
        steps: [
          "Identify total bit rate: 3,200,000 Kbps.",
          "Divide by 1,000,000: 3,200,000 ÷ 1,000,000 = 3.2 Gbps.",
          "Final Result: The VoIP gateway requires at least 3.2 Gbps of dedicated bandwidth."
        ]
      }
    ]
  },
  table: {
    title: "Kbps to Gbps Conversion Reference Table",
    headers: ["Kilobits per Second (Kbps)", "Gigabits per Second (Gbps)", "Megabits per Second (Mbps)", "Megabytes per Second (MB/s)", "Optical & Network Standard"],
    rows: [
      { fromVal: "10,000 Kbps", toVal: "0.010 Gbps", extra: "10 Mbps", extra2: "1.25 MB/s", extra3: "10BASE-T Ethernet legacy" },
      { fromVal: "100,000 Kbps", toVal: "0.100 Gbps", extra: "100 Mbps", extra2: "12.50 MB/s", extra3: "Fast Ethernet (100BASE-TX)" },
      { fromVal: "500,000 Kbps", toVal: "0.500 Gbps", extra: "500 Mbps", extra2: "62.50 MB/s", extra3: "Mid-tier commercial fiber" },
      { fromVal: "1,000,000 Kbps", toVal: "1.000 Gbps", extra: "1,000 Mbps", extra2: "125.00 MB/s", extra3: "Gigabit Ethernet (1000BASE-T)" },
      { fromVal: "2,500,000 Kbps", toVal: "2.500 Gbps", extra: "2,500 Mbps", extra2: "312.50 MB/s", extra3: "2.5GBASE-T multi-gigabit Wi-Fi 6" },
      { fromVal: "5,000,000 Kbps", toVal: "5.000 Gbps", extra: "5,000 Mbps", extra2: "625.00 MB/s", extra3: "5GBASE-T / USB 3.0 line rate" },
      { fromVal: "10,000,000 Kbps", toVal: "10.000 Gbps", extra: "10,000 Mbps", extra2: "1,250.00 MB/s (1.25 GB/s)", extra3: "10 Gigabit Ethernet (10GbE)" },
      { fromVal: "25,000,000 Kbps", toVal: "25.000 Gbps", extra: "25,000 Mbps", extra2: "3,125.00 MB/s (3.125 GB/s)", extra3: "25GbE datacenter server interconnect" },
      { fromVal: "40,000,000 Kbps", toVal: "40.000 Gbps", extra: "40,000 Mbps", extra2: "5,000.00 MB/s (5.00 GB/s)", extra3: "40GbE / Thunderbolt 3 & 4" },
      { fromVal: "100,000,000 Kbps", toVal: "100.000 Gbps", extra: "100,000 Mbps", extra2: "12,500.00 MB/s (12.50 GB/s)", extra3: "100GbE core enterprise backbone" },
      { fromVal: "400,000,000 Kbps", toVal: "400.000 Gbps", extra: "400,000 Mbps", extra2: "50,000.00 MB/s (50.00 GB/s)", extra3: "400GbE hyperscale optical transit" }
    ]
  },
  applications: {
    title: "Datacenter Core Switching, Telecom Backhaul, & Cloud Infrastructure",
    items: [
      {
        title: "Telecommunications Traffic Aggregation",
        text: "Converting hundreds of thousands of individual user voice and broadband sessions (Kbps) into total required optical backbone link capacity (Gbps)."
      },
      {
        title: "Cloud Provider Core Network Sizing",
        text: "Translating microservice inter-node throughput metrics into gigabits per second to size cross-region VPC peering links."
      },
      {
        title: "Submarine Fiber-Optic Cable Capacity Planning",
        text: "Analyzing trans-oceanic wavelength division multiplexing (WDM) capacities carrying billions of concurrent bitstreams in Gbps."
      },
      {
        title: "5G Cellular Base Station Backhaul Engineering",
        text: "Calculating aggregate mobile subscriber tower bandwidth requirements from individual handset bitrates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Kbps to Gbps Conversions",
    items: [
      "Dividing by 1,000 instead of 1,000,000, which converts to megabits per second (Mbps) rather than gigabits per second (Gbps).",
      "Dividing by 1,048,576 or 1,073,741,824 instead of 1,000,000; telecommunications standards universally use decimal SI factors ($10^6$).",
      "Confusing gigabits per second (Gbps) with gigabytes per second (GB/s); 1 Gbps equals 0.125 GB/s (divide by 8).",
      "Omitting optical encapsulation and Forward Error Correction (FEC) line coding overhead when sizing physical transceivers."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilobits per second to gigabits per second?",
      answer: "Divide the rate in kilobits per second (Kbps) by 1,000,000 (or multiply by 0.000001). For example, 5,000,000 Kbps divided by 1,000,000 equals 5 Gbps."
    },
    {
      question: "How many Kbps are in 1 Gbps?",
      answer: "There are exactly 1,000,000 Kbps in 1 Gbps under standard SI decimal definitions (1 Gbps = 1,000 Mbps = 1,000,000 Kbps = 1,000,000,000 bps)."
    },
    {
      question: "What is the difference between Gbps and GB/s?",
      answer: "Gbps (Gigabits per second, lowercase 'b') measures network bandwidth. GB/s (Gigabytes per second, uppercase 'B') measures data volume transfer where 1 Byte = 8 bits. 1 Gbps equals 0.125 GB/s (125 MB/s)."
    },
    {
      question: "How many Kbps is a 1 Gbps Gigabit Ethernet port?",
      answer: "A 1 Gbps Ethernet connection delivers 1,000,000 Kbps (which is 1,000 Mbps or 1,000,000,000 bits per second)."
    },
    {
      question: "How do I convert Gbps back to Kbps?",
      answer: "To convert gigabits per second back to kilobits per second, multiply by 1,000,000 (Kbps = Gbps × 1,000,000)."
    },
    {
      question: "How many MB/s can a 10 Gbps connection download?",
      answer: "10 Gbps equals 10,000,000 Kbps or 10,000 Mbps. Dividing by 8 gives a theoretical maximum download speed of 1,250 MB/s (1.25 GB/s)."
    },
    {
      question: "Why is 1 Gbps equal to 1,000,000 Kbps instead of 1,048,576?",
      answer: "Networking and telecommunications standards (ITU-T, IEEE, IETF) strictly follow the International System of Units (SI) decimal system, where 1 kilo = 10³ and 1 giga = 10⁹, meaning the conversion factor is exactly 10⁶ (1,000,000)."
    },
    {
      question: "How many 64 Kbps voice calls can a 1 Gbps link handle?",
      answer: "A 1 Gbps link equals 1,000,000 Kbps. Dividing by 64 Kbps yields a theoretical maximum of 15,625 simultaneous uncompressed voice channels (before protocol overhead)."
    }
  ],
  relatedList: [
    { label: "Kbps to Mbps", from: "kbps", to: "Mbps" },
    { label: "Kbps to Byte/sec", from: "kbps", to: "Bps" },
    { label: "Kbps to Bit/sec", from: "kbps", to: "bps" },
    { label: "Gbps to Kbps", from: "Gbps", to: "kbps" }
  ],
  references: [
    "IEC 80000-13:2008: Quantities and Units — Information Science and Technology.",
    "IEEE 802.3-2022: IEEE Standard for Ethernet.",
    "ITU-T Recommendation G.709: Interfaces for the optical transport network."
  ]
};
