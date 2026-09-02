import { CustomArticleData } from "./types";

export const BpsToGBpsArticle: CustomArticleData = {
  fromUnitId: "Bps",
  toUnitId: "GBps",
  seoTitle: "Byte/sec to GB/s Converter (B/s to Gigabytes/sec) | UnitsConvertors.com",
  metaDescription: "Convert bytes per second to gigabytes per second (B/s to GB/s) accurately. Learn the exact 1/1,000,000,000 formula, datacenter worked examples, and rate tables.",
  h1: "Byte/sec to GB/s Converter",
  introduction: [
    "Converting bytes per second (B/s or Byte/sec) to gigabytes per second (GB/s) bridges the gap between individual byte-level stream telemetry and high-capacity interconnect, memory bus, and datacenter throughput metrics.",
    "A byte per second (B/s) represents the unscaled rate of transferring 8-bit binary bytes per second. A gigabyte per second (GB/s), compliant with the International System of Units (SI) decimal standard (IEC 80000-13), represents one billion bytes ($1,000,000,000\\text{ bytes}$ or $10^9\\text{ B}$) transmitted in one second.",
    "Because one gigabyte contains exactly $1,000,000,000$ bytes under SI decimal standards, converting bytes per second to gigabytes per second requires dividing the B/s value by $1,000,000,000$ (or multiplying by $10^{-9}$). For instance, an enterprise fiber-optic pipe moving $2,500,000,000\\text{ B/s}$ delivers a sustained throughput of $2.5\\text{ GB/s}$ (equivalent to $20\\text{ Gbps}$). This guide details exact mathematical formulas, datacenter SAN fabric worked examples, comprehensive conversion tables, and common calculation pitfalls."
  ],
  quickAnswer: {
    text: "To convert bytes per second (B/s) to decimal gigabytes per second (GB/s), divide the byte rate by 1,000,000,000 (or multiply by 10⁻⁹). For example, 5,000,000,000 B/s equals exactly 5.0 GB/s.",
    formulaDisplay: "\\text{Gigabytes per second (GB/s)} = \\frac{\\text{Bytes per second (B/s)}}{1,000,000,000} = \\text{B/s} \\times 10^{-9}",
    subtext: "1 GB/s = 1,000,000,000 B/s = 1,000 MB/s = 8 Gbps | 1 B/s = 10⁻⁹ GB/s"
  },
  aboutSourceUnit: {
    title: "Understanding Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) is the foundational base rate for recording digital information flow over time. One byte consists of 8 binary bits. B/s expresses the direct, unscaled volume of binary bytes processed, read, or transmitted across a hardware bus or communication socket in one second."
  },
  aboutTargetUnit: {
    title: "Understanding Gigabytes per Second (GB/s)",
    text: "Gigabytes per second (symbol: GB/s or GBps) represents one billion bytes ($10^9\\text{ B}$) of digital throughput per second. It is the standard unit used to specify memory bandwidth (DDR5 RAM), PCIe interconnect throughput (PCIe 4.0 / 5.0 / 6.0), high-performance computing (HPC) interconnects, and enterprise SAN storage fabrics."
  },
  relationship: "Under SI decimal prefix definitions (IEC 80000-13), 1 gigabyte per second (GB/s) equals exactly 1,000 megabytes per second (MB/s), 1,000,000 kilobytes per second (KB/s), or 1,000,000,000 bytes per second (B/s). Dividing bytes per second by 1,000,000,000 shifts the decimal point nine places to the left to find decimal GB/s.",
  relationshipTitle: "Byte/sec to GB/s Throughput Scale Comparison",
  relationshipItems: [
    { label: "1,000,000 B/s (1 MB/s)", value: "0.001 GB/s" },
    { label: "100,000,000 B/s (100 MB/s)", value: "0.100 GB/s" },
    { label: "500,000,000 B/s (500 MB/s)", value: "0.500 GB/s" },
    { label: "1,000,000,000 B/s", value: "1.000 GB/s" },
    { label: "10,000,000,000 B/s", value: "10.000 GB/s" },
    { label: "64,000,000,000 B/s", value: "64.000 GB/s" }
  ],
  formula: {
    text: "Divide the rate in bytes per second by 1,000,000,000, or multiply by 0.000000001 (10⁻⁹).",
    math: "\\text{Rate (GB/s)} = \\frac{\\text{Rate (B/s)}}{1,000,000,000} = \\text{Rate (B/s)} \\times 10^{-9}",
    subtext: "Inverse formula: Rate (B/s) = Rate (GB/s) × 1,000,000,000"
  },
  formulaTitle: "Byte/sec to GB/s Conversion Formula",
  practicalTip: {
    title: "Decimal (GB/s) vs Binary Gibibytes (GiB/s)",
    text: "Decimal gigabytes per second ($1\\text{ GB/s} = 10^9\\text{ B/s}$) follow SI standards, whereas binary gibibytes per second ($1\\text{ GiB/s} = 2^{30}\\text{ B/s} = 1,073,741,824\\text{ B/s}$) follow IEC binary standards. A rate of 10,000,000,000 B/s equals exactly 10.0 GB/s in decimal, but approximately 9.313 GiB/s in binary (a ~6.87% difference)."
  },
  expertNote: {
    title: "Gigabits (Gbps) Line Rate vs Gigabytes (GB/s) Data Rate",
    text: "Telecommunications and datacenter switches quote network bandwidth in gigabits per second (Gbps, lowercase 'b'), while system architects measure payload and memory throughput in gigabytes per second (GB/s, uppercase 'B'). Because 1 byte = 8 bits, a 100 Gbps network connection yields a maximum theoretical data throughput of 12.5 GB/s ($100 \\div 8$)."
  },
  examples: {
    title: "Step-by-Step Practical Conversion Examples",
    items: [
      {
        title: "Example 1: PCIe 4.0 NVMe SSD RAID Array",
        subtitle: "An enterprise all-flash NVMe array transfers data at an aggregate rate of 7,000,000,000 bytes per second. Convert this rate to decimal gigabytes per second.",
        steps: [
          "State given byte rate: 7,000,000,000 B/s.",
          "Apply conversion formula: Rate (GB/s) = 7,000,000,000 ÷ 1,000,000,000.",
          "Perform calculation: 7,000,000,000 ÷ 1,000,000,000 = 7.0 GB/s.",
          "Final Result: The array throughput is exactly 7.0 GB/s (7,000 MB/s)."
        ]
      },
      {
        title: "Example 2: DDR5 Memory Bus Throughput",
        subtitle: "A dual-channel DDR5-6400 memory subsystem achieves a measured burst rate of 51,200,000,000 bytes per second. Express this throughput in GB/s.",
        steps: [
          "State byte rate: 51,200,000,000 B/s.",
          "Divide by 1,000,000,000: 51,200,000,000 ÷ 1,000,000,000 = 51.2 GB/s.",
          "Final Result: The memory bandwidth is 51.2 GB/s."
        ]
      },
      {
        title: "Example 3: Datacenter 400G Optical Transceiver",
        subtitle: "An optical switch port operating at 400 Gbps transmits 50,000,000,000 bytes per second. Determine the rate in GB/s.",
        steps: [
          "State byte rate: 50,000,000,000 B/s.",
          "Divide by 1,000,000,000: 50,000,000,000 ÷ 1,000,000,000 = 50.0 GB/s.",
          "Final Result: The 400G port delivers 50.0 GB/s of data throughput."
        ]
      }
    ]
  },
  table: {
    title: "Byte/sec to GB/s Conversion Reference Table",
    headers: ["Bytes per Second (B/s)", "Gigabytes per Second (GB/s)", "Megabytes per Second (MB/s)", "Equivalent Network Rate (Gbps)", "Hardware Benchmark"],
    rows: [
      { fromVal: "10,000,000 B/s", toVal: "0.010 GB/s", extra: "10 MB/s", extra2: "0.08 Gbps", extra3: "Fast Ethernet link" },
      { fromVal: "125,000,000 B/s", toVal: "0.125 GB/s", extra: "125 MB/s", extra2: "1.00 Gbps", extra3: "1 Gbps Gigabit Ethernet" },
      { fromVal: "500,000,000 B/s", toVal: "0.500 GB/s", extra: "500 MB/s", extra2: "4.00 Gbps", extra3: "SATA III SSD read limit" },
      { fromVal: "1,000,000,000 B/s", toVal: "1.000 GB/s", extra: "1,000 MB/s", extra2: "8.00 Gbps", extra3: "PCIe 3.0 x1 lane bandwidth" },
      { fromVal: "1,250,000,000 B/s", toVal: "1.250 GB/s", extra: "1,250 MB/s", extra2: "10.00 Gbps", extra3: "10 GbE network interface" },
      { fromVal: "3,500,000,000 B/s", toVal: "3.500 GB/s", extra: "3,500 MB/s", extra2: "28.00 Gbps", extra3: "PCIe 3.0 x4 NVMe SSD" },
      { fromVal: "7,000,000,000 B/s", toVal: "7.000 GB/s", extra: "7,000 MB/s", extra2: "56.00 Gbps", extra3: "PCIe 4.0 x4 NVMe SSD" },
      { fromVal: "12,500,000,000 B/s", toVal: "12.500 GB/s", extra: "12,500 MB/s", extra2: "100.00 Gbps", extra3: "100 GbE datacenter uplink" },
      { fromVal: "32,000,000,000 B/s", toVal: "32.000 GB/s", extra: "32,000 MB/s", extra2: "256.00 Gbps", extra3: "PCIe 4.0 x16 graphics slot" },
      { fromVal: "64,000,000,000 B/s", toVal: "64.000 GB/s", extra: "64,000 MB/s", extra2: "512.00 Gbps", extra3: "PCIe 5.0 x16 expansion bus" },
      { fromVal: "100,000,000,000 B/s", toVal: "100.000 GB/s", extra: "100,000 MB/s", extra2: "800.00 Gbps", extra3: "800G optical AI cluster interconnect" }
    ]
  },
  applications: {
    title: "High-Performance Computing, Memory Architecture, & Datacenters",
    items: [
      {
        title: "Memory System & GPU VRAM Bandwidth",
        text: "Converting unscaled memory bus byte transfers into gigabytes per second to benchmark High Bandwidth Memory (HBM3) and GDDR6X architectures."
      },
      {
        title: "PCIe Bus & Interconnect Engineering",
        text: "Calculating lane throughput and aggregate interconnect bandwidth across PCIe 4.0, 5.0, and CXL (Compute Express Link) protocols."
      },
      {
        title: "AI Training Cluster Interconnects",
        text: "Analyzing massive InfiniBand and RoCE (RDMA over Converged Ethernet) fabric communication speeds between GPU accelerators in GB/s."
      },
      {
        title: "Enterprise Storage Area Networks (SAN)",
        text: "Converting fiber channel throughput telemetry into gigabytes per second to monitor high-density database volume replications."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Byte/sec to GB/s Conversions",
    items: [
      "Dividing by 1,073,741,824 (2³⁰) instead of 1,000,000,000 (10⁹) when calculating standard SI decimal gigabytes per second.",
      "Confusing gigabytes per second (GB/s) with gigabits per second (Gbps); remember that 1 GB/s equals exactly 8 Gbps.",
      "Dividing by 1,000,000 instead of 1,000,000,000, which converts to megabytes per second (MB/s) rather than gigabytes per second (GB/s).",
      "Ignoring encoding overhead (such as 8b/10b or 128b/130b line coding) on physical hardware buses when converting raw clock cycles to usable payload GB/s."
    ]
  },
  faqs: [
    {
      question: "How do I convert bytes per second to gigabytes per second?",
      answer: "Divide the rate in bytes per second by 1,000,000,000 (or multiply by 10⁻⁹). For instance, 14,000,000,000 B/s divided by 1,000,000,000 equals 14 GB/s."
    },
    {
      question: "How many bytes per second are in 1 GB/s?",
      answer: "Under the international decimal SI standard, there are exactly 1,000,000,000 bytes per second in 1 GB/s. In binary (1 GiB/s), there are 1,073,741,824 bytes per second."
    },
    {
      question: "What is the difference between GB/s and Gbps?",
      answer: "GB/s (Gigabytes per second, capital 'B') measures byte data transfer where 1 Byte = 8 bits, standard for storage and RAM. Gbps (Gigabits per second, lowercase 'b') measures network bandwidth. 1 GB/s equals 8 Gbps."
    },
    {
      question: "How many GB/s is a 100 Gbps network connection?",
      answer: "A 100 Gbps network connection has a theoretical maximum throughput of 12.5 GB/s (100 ÷ 8 = 12.5 GB/s, or 12,500,000,000 B/s)."
    },
    {
      question: "How many MB/s is 1 GB/s?",
      answer: "One gigabyte per second (GB/s) equals exactly 1,000 megabytes per second (MB/s) in decimal SI units."
    },
    {
      question: "What is the formula to convert GB/s back to B/s?",
      answer: "To convert gigabytes per second back to bytes per second, multiply by 1,000,000,000 (B/s = GB/s × 1,000,000,000)."
    },
    {
      question: "How do I convert bytes per second to binary GiB/s?",
      answer: "To convert bytes per second to binary gibibytes per second (GiB/s), divide the B/s value by 1,073,741,824 (1,024³)."
    },
    {
      question: "How fast is PCIe 5.0 x16 in GB/s and bytes per second?",
      answer: "A PCIe 5.0 x16 slot provides approximately 64 GB/s of bidirectional bandwidth, which equals 64,000,000,000 bytes per second."
    }
  ],
  relatedList: [
    { label: "Byte/sec to MB/s", from: "Bps", to: "MBps" },
    { label: "Byte/sec to Gbps", from: "Bps", to: "Gbps" },
    { label: "Byte/sec to KB/s", from: "Bps", to: "KBps" },
    { label: "Bit/sec to GB/s", from: "bps", to: "GBps" }
  ],
  references: [
    "IEC 80000-13:2008: Quantities and Units — Information Science and Technology.",
    "PCI-SIG: PCI Express Base Specification Revision 5.0.",
    "JEDEC Standard JESD79-5: DDR5 SDRAM Specification."
  ]
};
