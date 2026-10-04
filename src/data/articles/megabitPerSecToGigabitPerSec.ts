import { CustomArticleData } from "./types";

export const mbpsToGbpsArticle: CustomArticleData = {
  fromUnitId: "Mbps",
  toUnitId: "Gbps",
  seoTitle: "Mbps to Gbps Converter (Megabits/sec to Gigabits/sec) | UnitsConvertors.com",
  metaDescription: "Convert megabits per second to gigabits per second (Mbps to Gbps) accurately. Learn the exact divide-by-1,000 formula, fiber broadband benchmarks, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/data-transfer/mbps-to-gbps",
  h1: "Mbps to Gbps Converter",
  introduction: [
    "Converting megabits per second (Mbps or Mb/s) to gigabits per second (Gbps or Gb/s) bridges consumer-grade broadband speed testing with enterprise-grade fiber networking and data center interconnects. While residential internet plans, Wi-Fi 5 routers, and single-stream media applications routinely benchmark performance in hundreds of megabits per second, enterprise switches, 10G optical uplinks, and hyperscale cloud networks specify throughput in gigabits per second.",
    "Under international data transmission standards (SI decimal metric prefixes and IEC 80000-13), the prefix mega denotes one million ($10^6$) and giga denotes one billion ($10^9$). Because both units measure binary bits transmitted per second, their relationship is governed by an exact factor of 1,000: exactly one thousand megabits per second constitute one gigabit per second. Converting between these units requires dividing by 1,000, enabling network administrators and IT planners to accurately size backbone circuits, calculate switch backplane load, and verify ISP service-level agreements."
  ],
  quickAnswer: {
    text: "To convert megabits per second (Mbps) to gigabits per second (Gbps), divide the Mbps value by 1,000 (or multiply by 0.001). For instance, a 1,000 Mbps fiber connection equals exactly 1 Gbps.",
    formulaDisplay: "Rate (Gbps) = Rate (Mbps) / 1,000 = Rate (Mbps) × 0.001",
    subtext: "1 Gbps = 1,000 Mbps = 1,000,000 Kbps = 125 MB/s | 1 Mbps = 0.001 Gbps"
  },
  aboutSourceUnit: {
    title: "About Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps or Mb/s) is a standard unit of digital transmission bandwidth representing 1,000,000 bits transferred per second. It is the primary metric for consumer broadband advertising, mobile 4G/5G performance benchmarking, and video streaming bitrate specifications."
  },
  aboutTargetUnit: {
    title: "About Gigabits per Second (Gbps)",
    text: "Gigabits per second (symbol: Gbps or Gb/s) is a metric unit representing 1,000,000,000 bits (one billion bits) transferred per second. It is the standard rating for Gigabit Ethernet (1000BASE-T), optical fiber transceivers (10G/40G/100G SFP+/QSFP), enterprise campus backbones, and high-performance server network interface cards (NICs)."
  },
  relationship: "Both units belong to the international metric transmission hierarchy defined by the ITU-T and IEC 80000-13. Mega represents $10^6$ bits per second and giga represents $10^9$ bits per second. The ratio of $10^9$ to $10^6$ is precisely $1,000$. Therefore, 1 Gbps contains exactly 1,000 Mbps, and 1 Mbps equals exactly 0.001 Gbps with zero rounding error.",
  relationshipTitle: "Exact 1,000-to-1 Metric Bandwidth Ratio",
  relationshipItems: [
    { label: "1 Gbps in Mbps", value: "1,000 Mbps (exact: 10³)" },
    { label: "1 Mbps in Gbps", value: "0.001 Gbps (10⁻³)" },
    { label: "100 Mbps (Fast Ethernet)", value: "0.1 Gbps" },
    { label: "500 Mbps (Broadband)", value: "0.5 Gbps" },
    { label: "1,000 Mbps (Gigabit Plan)", value: "1.0 Gbps" },
    { label: "2,500 Mbps (2.5G Port)", value: "2.5 Gbps" },
    { label: "10,000 Mbps (10GbE)", value: "10.0 Gbps" }
  ],
  formula: {
    text: "To convert megabits per second into gigabits per second, divide the Mbps value by 1,000, or multiply by 0.001.",
    math: "Rate (Gbps) = Rate (Mbps) / 1,000",
    subtext: "Inverse formula: Rate (Mbps) = Rate (Gbps) × 1,000"
  },
  formulaTitle: "Mbps to Gbps Conversion Formula",
  practicalTip: {
    title: "Network Switch Uplink Planning Tip",
    text: "When aggregating multiple 100 Mbps or 250 Mbps department subnet feeds into a core switch, sum the peak megabit loads. If aggregate peak traffic exceeds 800 Mbps, deploy a 10 Gbps (10,000 Mbps) optical SFP+ uplink rather than a standard 1 Gbps port to prevent buffer bloat and packet queuing delays during peak hours."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Residential Fiber Broadband Provisioning",
        subtitle: "A homeowner subscribes to an internet tier advertised as 1,000 Mbps download speed. Express this throughput in Gbps.",
        steps: [
          "State the starting line rate: 1,000 Mbps.",
          "Identify the conversion formula: Rate (Gbps) = Rate (Mbps) ÷ 1,000.",
          "Perform calculation: 1,000 ÷ 1,000 = 1.0 Gbps.",
          "Conclude: The 1,000 Mbps subscription delivers true 1.0 Gbps (Gigabit Internet) bandwidth."
        ]
      },
      {
        title: "Example 2: 2.5G Multi-Gigabit Ethernet Port",
        subtitle: "A modern Wi-Fi 6 router features a WAN port rated at 2,500 Mbps. Calculate the equivalent capacity in Gbps.",
        steps: [
          "Identify the port throughput: 2,500 Mbps.",
          "Divide by the scale factor: 2,500 ÷ 1,000.",
          "Compute result: 2.5 Gbps.",
          "Final Result: The port operates at 2.5 Gbps (2.5GBASE-T standard)."
        ]
      },
      {
        title: "Example 3: Enterprise Cloud Direct Connect Link",
        subtitle: "An organization aggregates 350 branch office VPN tunnels averaging 20 Mbps each (totaling 7,000 Mbps). Convert this traffic demand into Gbps.",
        steps: [
          "Calculate total aggregate load: 350 × 20 Mbps = 7,000 Mbps.",
          "Apply the conversion factor: 7,000 ÷ 1,000.",
          "Calculate: exactly 7.0 Gbps.",
          "Result: The cloud interconnect requires at least a 10 Gbps physical link to support the 7 Gbps baseline load."
        ]
      }
    ]
  },
  table: {
    title: "Mbps to Gbps Conversion Reference Table",
    headers: ["Megabits/sec (Mbps)", "Gigabits/sec (Gbps)", "Bits/sec (bps)", "Megabytes/sec (MB/s)"],
    rows: [
      { fromVal: "10 Mbps", toVal: "0.01 Gbps", extra: "10,000,000 bps", extra2: "1.25 MB/s" },
      { fromVal: "50 Mbps", toVal: "0.05 Gbps", extra: "50,000,000 bps", extra2: "6.25 MB/s" },
      { fromVal: "100 Mbps", toVal: "0.10 Gbps", extra: "100,000,000 bps", extra2: "12.50 MB/s" },
      { fromVal: "200 Mbps", toVal: "0.20 Gbps", extra: "200,000,000 bps", extra2: "25.00 MB/s" },
      { fromVal: "300 Mbps", toVal: "0.30 Gbps", extra: "300,000,000 bps", extra2: "37.50 MB/s" },
      { fromVal: "500 Mbps", toVal: "0.50 Gbps", extra: "500,000,000 bps", extra2: "62.50 MB/s" },
      { fromVal: "750 Mbps", toVal: "0.75 Gbps", extra: "750,000,000 bps", extra2: "93.75 MB/s" },
      { fromVal: "1,000 Mbps", toVal: "1.00 Gbps", extra: "1,000,000,000 bps", extra2: "125.00 MB/s" },
      { fromVal: "2,000 Mbps", toVal: "2.00 Gbps", extra: "2,000,000,000 bps", extra2: "250.00 MB/s" },
      { fromVal: "2,500 Mbps", toVal: "2.50 Gbps", extra: "2,500,000,000 bps", extra2: "312.50 MB/s" },
      { fromVal: "5,000 Mbps", toVal: "5.00 Gbps", extra: "5,000,000,000 bps", extra2: "625.00 MB/s" },
      { fromVal: "10,000 Mbps", toVal: "10.00 Gbps", extra: "10,000,000,000 bps", extra2: "1,250.00 MB/s (1.25 GB/s)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Broadband Tier Upgrades & Speed Verification",
        text: "Translating speed test measurements from Ookla, Fast.com, or Google Fiber between Mbps readouts and Gigabit service tier tiers."
      },
      {
        title: "Enterprise LAN / WAN Architecture",
        text: "Designing campus core switch backbones where hundreds of 100 Mbps client access drops aggregate into multi-gigabit (1G, 10G, 25G) switch uplinks."
      },
      {
        title: "Cloud Interconnect & Direct Peering",
        text: "Provisioning dedicated cloud interconnect circuits (AWS Direct Connect, Microsoft ExpressRoute, Google Cloud Interconnect) which are sold in 1 Gbps or 10 Gbps increments based on forecasted aggregate Mbps traffic."
      },
      {
        title: "Data Storage Area Network (SAN) Throughput",
        text: "Comparing iSCSI or NVMe-over-Fabrics network links against storage controller transfer limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Mbps to Gbps",
    items: [
      "Dividing by 1,024 instead of 1,000: Network engineering strictly follows decimal SI prefixes ($1\\text{ Gbps} = 1,000\\text{ Mbps}$), not binary memory equivalents (gibibits, Gib).",
      "Multiplying instead of dividing: Converting from a smaller unit (megabits) to a larger unit (gigabits) requires division, resulting in a numerically smaller value.",
      "Confusing megabits per second with megabytes per second: 1,000 Mbps is not 1,000 MB/s; because 8 bits equal 1 byte, 1,000 Mbps equals 125 MB/s.",
      "Overlooking protocol overhead: A 1 Gbps physical Ethernet line delivers roughly 940 to 950 Mbps of usable TCP payload throughput after deducting framing, IP, and TCP headers."
    ]
  },
  faqs: [
    {
      question: "How many Gbps is 1,000 Mbps?",
      answer: "1,000 Mbps is equal to exactly 1.0 Gbps (one gigabit per second). This is why internet service providers market 1,000 Mbps fiber plans as 'Gigabit Internet'."
    },
    {
      question: "What is the formula to convert Mbps to Gbps?",
      answer: "The formula is: Rate (Gbps) = Rate (Mbps) ÷ 1,000. Alternatively, multiply the Mbps value by 0.001."
    },
    {
      question: "Is 100 Mbps equal to 0.1 Gbps?",
      answer: "Yes, exactly. Dividing 100 by 1,000 gives 0.1 Gbps. Fast Ethernet ports operate at this speed."
    },
    {
      question: "How many Mbps are in 1 Gbps?",
      answer: "There are exactly 1,000 megabits per second in 1 gigabit per second under international SI and IEEE networking conventions."
    },
    {
      question: "What is 500 Mbps in Gbps?",
      answer: "500 Mbps equals 0.5 Gbps (half a gigabit per second), calculated as 500 ÷ 1,000."
    },
    {
      question: "What is 2,500 Mbps in Gbps?",
      answer: "2,500 Mbps equals 2.5 Gbps. This corresponds to the modern 2.5GBASE-T Ethernet standard found on gaming motherboards and Wi-Fi 6/7 routers."
    },
    {
      question: "Why do network engineers use 1,000 instead of 1,024 for Gbps?",
      answer: "Telecommunications and data networking standards (IEC 80000-13, IEEE 802.3, and ITU-T) standardize transmission rates using decimal SI prefixes where mega is $10^6$ and giga is $10^9$. Binary powers of two ($1,024$) are restricted to memory architecture under IEC prefixes like mebibits (Mib) and gibibits (Gib)."
    },
    {
      question: "How many megabytes per second does 1 Gbps equal?",
      answer: "1 Gbps equals 125 megabytes per second (MB/s). Because there are 8 bits in a byte, divide 1,000 Mbps by 8 to get 125 MB/s."
    },
    {
      question: "Can I download a 50 GB file in 50 seconds on a 1 Gbps connection?",
      answer: "No. A 1 Gbps connection downloads at a maximum theoretical rate of 125 MB/s. Transferring 50,000 MB (50 GB) takes approximately 400 seconds (roughly 6.7 minutes), not accounting for network overhead."
    },
    {
      question: "What is 10,000 Mbps in Gbps?",
      answer: "10,000 Mbps equals exactly 10 Gbps (10 Gigabit Ethernet or 10GbE), widely used for data center uplinks and enterprise virtualization servers."
    }
  ],
  relatedList: [
    { label: "Gbps to Mbps", from: "Gbps", to: "Mbps" },
    { label: "Mbps to Kbps", from: "Mbps", to: "kbps" },
    { label: "Mbps to Tbps", from: "Mbps", to: "Tbps" },
    { label: "Mbps to Byte/sec", from: "Mbps", to: "Bps" },
    { label: "Mbps to MB/s", from: "Mbps", to: "MBps" }
  ],
  references: [
    "IEEE 802.3: Standard for Ethernet Physical Layer and Management Parameters.",
    "IEC 80000-13: Quantities and units — Part 13: Information science and technology.",
    "ITU-T Recommendation B.12: Use of prefix terms for binary and decimal multiples in telecommunication."
  ]
};
