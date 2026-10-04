import { CustomArticleData } from "./types";

export const mbpsToBytePerSecArticle: CustomArticleData = {
  fromUnitId: "Mbps",
  toUnitId: "Bps",
  seoTitle: "Mbps to Byte/sec Converter (Megabits/sec to Bytes/sec) | UnitsConvertors.com",
  metaDescription: "Convert megabits per second to bytes per second (Mbps to B/s) accurately. Learn the 1 Mbps = 125,000 B/s formula, socket buffer examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/data-transfer/mbps-to-bps-byte",
  h1: "Mbps to Byte/sec Converter",
  introduction: [
    "Converting megabits per second (Mbps) to bytes per second (B/s or Bps) bridges the gap between high-level telecommunication network speeds and low-level system socket data ingestion. While internet service providers (ISPs), cellular networks, and Wi-Fi routers rate bandwidth in megabits per second, operating system kernels, network socket buffers, and low-level C/C++ network drivers quantify data flows directly in raw bytes per second.",
    "Because digital computing defines exactly eight bits per byte ($1\\text{ Byte} = 8\\text{ bits}$) and one million bits per megabit under international standards, one megabit per second equals exactly 125,000 bytes per second. Understanding this conversion enables software developers, DevOps engineers, and network administrators to size kernel socket buffers, configure TCP window sizes, and calculate streaming payload delivery."
  ],
  quickAnswer: {
    text: "To convert megabits per second (Mbps) to bytes per second (B/s), multiply the Mbps value by 125,000 (or multiply by 1,000,000 and divide by 8). For example, a 10 Mbps stream transfers exactly 1,250,000 bytes per second.",
    formulaDisplay: "Rate (B/s) = Rate (Mbps) × 125,000 = (Rate (Mbps) × 1,000,000) / 8",
    subtext: "1 Mbps = 125,000 B/s = 125 KB/s = 0.125 MB/s | 1 B/s = 0.000008 Mbps (8 × 10⁻⁶ Mbps)"
  },
  aboutSourceUnit: {
    title: "About Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps or Mb/s) is a metric unit of digital transmission bandwidth representing 1,000,000 bits transferred per second. It is the primary measurement for residential broadband internet subscriptions, mobile cellular data throughput (4G/5G), and streaming video delivery rates."
  },
  aboutTargetUnit: {
    title: "About Bytes per Second (B/s)",
    text: "Bytes per second (symbol: B/s or Bps) is the foundational base unit of computer storage transfer velocity, representing 1 byte (8 bits) transferred per second. The capital 'B' denotes bytes. It is the core metric used by operating system network socket APIs, microcontroller serial buffers, and filesystem I/O counters."
  },
  relationship: "One megabit per second equals 1,000,000 bits per second according to SI decimal prefix standards. Because every byte contains exactly 8 bits, dividing 1,000,000 bits by 8 bits per byte yields exactly 125,000 bytes per second. Therefore, each 1 Mbps of bandwidth provides a maximum theoretical payload delivery of exactly 125,000 B/s.",
  relationshipTitle: "The 125,000-to-1 Mathematical Ratio",
  relationshipItems: [
    { label: "1 Mbps in B/s", value: "125,000 B/s (exact: 1,000,000 / 8)" },
    { label: "1 B/s in Mbps", value: "0.000008 Mbps (8 × 10⁻⁶)" },
    { label: "10 Mbps Connection", value: "1,250,000 B/s" },
    { label: "100 Mbps Fast Ethernet", value: "12,500,000 B/s" },
    { label: "1,000 Mbps Gigabit Link", value: "125,000,000 B/s" }
  ],
  formula: {
    text: "To convert megabits per second into bytes per second, multiply the Mbps value by 125,000, or multiply by 1,000,000 and divide by 8.",
    math: "Rate (B/s) = Rate (Mbps) × 125,000",
    subtext: "Inverse formula: Rate (Mbps) = Rate (B/s) / 125,000 = (Rate (B/s) × 8) / 1,000,000"
  },
  formulaTitle: "Mbps to Byte/sec Conversion Formula",
  practicalTip: {
    title: "TCP/IP Overhead Deduction",
    text: "Multiplying Mbps by 125,000 gives the theoretical physical line capacity. In real-world TCP/IP networking, packet headers (Ethernet, IP, TCP) consume roughly 3% to 6% of the raw bitstream. For real application payload throughput, multiply Mbps by 118,000 to 120,000 B/s."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Definition Video Stream Ingestion",
        subtitle: "A web server streams an HD video encoded at 6 Mbps. Calculate the byte write throughput to network sockets.",
        steps: [
          "State known bitrate: 6 Mbps.",
          "Identify conversion formula: Rate (B/s) = Rate (Mbps) × 125,000.",
          "Multiply 6 by 125,000: 6 × 125,000.",
          "Perform calculation: exactly 750,000 B/s.",
          "Conclude: The video server delivers 750,000 bytes per second (750 KB/s)."
        ]
      },
      {
        title: "Example 2: 100 Mbps Fast Ethernet File Transfer",
        subtitle: "A local area network link runs at full 100 Mbps Fast Ethernet capacity. Determine transfer rate in bytes per second.",
        steps: [
          "State network bandwidth: 100 Mbps.",
          "Apply the formula: 100 × 125,000.",
          "Compute product: 12,500,000 B/s.",
          "Final Result: The theoretical maximum transfer speed is 12,500,000 bytes per second (12.5 MB/s)."
        ]
      },
      {
        title: "Example 3: Low-Bitrate IoT Gateway Backhaul",
        subtitle: "A multi-sensor cellular gateway uploads consolidated data at 0.5 Mbps. Calculate bytes transferred per second.",
        steps: [
          "Identify rate: 0.5 Mbps.",
          "Multiply by 125,000: 0.5 × 125,000 = 62,500 B/s.",
          "Result: The gateway writes 62,500 bytes per second to the remote socket."
        ]
      }
    ]
  },
  table: {
    title: "Mbps to Byte/sec Conversion Reference Table",
    headers: ["Megabits/sec (Mbps)", "Bytes/sec (B/s)", "Kilobytes/sec (KB/s)", "Megabytes/sec (MB/s)"],
    rows: [
      { fromVal: "0.1 Mbps", toVal: "12,500 B/s", extra: "12.5 KB/s", extra2: "0.0125 MB/s" },
      { fromVal: "0.5 Mbps", toVal: "62,500 B/s", extra: "62.5 KB/s", extra2: "0.0625 MB/s" },
      { fromVal: "1 Mbps", toVal: "125,000 B/s", extra: "125.0 KB/s", extra2: "0.1250 MB/s" },
      { fromVal: "2 Mbps", toVal: "250,000 B/s", extra: "250.0 KB/s", extra2: "0.2500 MB/s" },
      { fromVal: "5 Mbps", toVal: "625,000 B/s", extra: "625.0 KB/s", extra2: "0.6250 MB/s" },
      { fromVal: "10 Mbps", toVal: "1,250,000 B/s", extra: "1,250.0 KB/s", extra2: "1.2500 MB/s" },
      { fromVal: "20 Mbps", toVal: "2,500,000 B/s", extra: "2,500.0 KB/s", extra2: "2.5000 MB/s" },
      { fromVal: "50 Mbps", toVal: "6,250,000 B/s", extra: "6,250.0 KB/s", extra2: "6.2500 MB/s" },
      { fromVal: "100 Mbps", toVal: "12,500,000 B/s", extra: "12,500.0 KB/s", extra2: "12.500 MB/s" },
      { fromVal: "250 Mbps", toVal: "31,250,000 B/s", extra: "31,250.0 KB/s", extra2: "31.250 MB/s" },
      { fromVal: "500 Mbps", toVal: "62,500,000 B/s", extra: "62,500.0 KB/s", extra2: "62.500 MB/s" },
      { fromVal: "1,000 Mbps (1 Gbps)", toVal: "125,000,000 B/s", extra: "125,000.0 KB/s", extra2: "125.00 MB/s" },
      { fromVal: "10,000 Mbps (10 Gbps)", toVal: "1,250,000,000 B/s", extra: "1,250,000.0 KB/s", extra2: "1,250.0 MB/s (1.25 GB/s)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Linux & Unix Kernel Socket Buffer Sizing",
        text: "Configuring the `SO_SNDBUF` and `SO_RCVBUF` kernel parameters in bytes to match high-speed network interfaces rated in Mbps."
      },
      {
        title: "Web Server (Nginx / Apache) Bandwidth Throttling",
        text: "Setting per-connection download rate limits configured in bytes per second (`limit_rate` in bytes/sec) based on subscriber tier limits in Mbps."
      },
      {
        title: "Database Replication Stream Monitoring",
        text: "Translating network connection bandwidth into binary transaction log ingestion velocities measured in bytes per second."
      },
      {
        title: "Embedded Microcontroller Serial Over Ethernet",
        text: "Calculating circular buffer capacities for IoT microcontrollers bridging SPI or UART hardware with Ethernet transceivers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Mbps to B/s",
    items: [
      "Multiplying only by 1,000,000 and forgetting to divide by 8: Multiplying by 1,000,000 calculates bits per second (bps), not bytes per second (B/s). Forgetting the byte divisor produces an eightfold (800%) overestimation.",
      "Confusing lowercase 'b' (bits) with uppercase 'B' (bytes): 'Mbps' is megabits; 'B/s' is bytes. Always remember that 1 Byte = 8 bits.",
      "Dividing instead of multiplying: Because a megabit per second is far larger than a byte per second, converting from Mbps to B/s must produce a much larger number.",
      "Assuming 100 Mbps means 100 Megabytes per second: A 100 Mbps internet connection does NOT download 100 megabytes per second. It delivers a maximum of 12.5 MB/s (12,500,000 B/s)."
    ]
  },
  faqs: [
    {
      question: "How many bytes per second are in 1 Mbps?",
      answer: "There are exactly 125,000 bytes per second in 1 megabit per second. This is calculated as $1,000,000\\text{ bits} / 8 = 125,000\\text{ bytes}$."
    },
    {
      question: "What is the formula to convert Mbps to bytes per second?",
      answer: "The formula is: Rate (B/s) = Rate (Mbps) × 125,000. Alternatively: Rate (B/s) = (Rate (Mbps) × 1,000,000) / 8."
    },
    {
      question: "How many bytes per second is a 100 Mbps connection?",
      answer: "A 100 Mbps connection delivers exactly $100 \\times 125,000 = 12,500,000\\text{ bytes per second}$ (12.5 MB/s)."
    },
    {
      question: "How many bytes per second is 50 Mbps?",
      answer: "50 Mbps equals $50 \\times 125,000 = 6,250,000\\text{ bytes per second}$ (6.25 MB/s)."
    },
    {
      question: "How many bytes per second is 10 Mbps?",
      answer: "10 Mbps equals $10 \\times 125,000 = 1,250,000\\text{ bytes per second}$ (1.25 MB/s)."
    },
    {
      question: "Why do you multiply by 125,000 to convert Mbps to B/s?",
      answer: "Because 1 megabit has 1,000,000 bits, and 1 byte contains 8 bits. Dividing 1,000,000 by 8 equals 125,000."
    },
    {
      question: "How do I convert bytes per second back to Mbps?",
      answer: "Divide the bytes per second figure by 125,000 (or multiply by 8 and divide by 1,000,000). For example, 1,250,000 B/s divided by 125,000 equals 10 Mbps."
    },
    {
      question: "What is 1 Gigabit per second (1,000 Mbps) in bytes per second?",
      answer: "1,000 Mbps equals $1,000 \\times 125,000 = 125,000,000\\text{ bytes per second}$ (125 MB/s)."
    },
    {
      question: "Does this factor include network protocol headers?",
      answer: "No. 125,000 B/s represents raw physical layer payload equivalence. Real-world applications typically see 92% to 95% of this rate due to TCP/IP packet framing."
    },
    {
      question: "What is the difference between Bps and bps?",
      answer: "Bps (with a capital 'B') stands for Bytes per second. bps (with a lowercase 'b') stands for bits per second. 1 Bps is 8 times larger than 1 bps."
    }
  ],
  relatedList: [
    { label: "Mbps to Bit/sec", from: "Mbps", to: "bps" },
    { label: "Mbps to KB/s", from: "Mbps", to: "KBps" },
    { label: "Mbps to MB/s", from: "Mbps", to: "MBps" },
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Kbps to Byte/sec", from: "kbps", to: "Bps" }
  ],
  references: [
    "IEC 80000-13: Quantities and units — Information science and technology.",
    "W. Richard Stevens: TCP/IP Illustrated, Volume 1: The Protocols.",
    "IEEE Standard 802.3: Ethernet MAC and Physical Layer Specifications."
  ]
};
