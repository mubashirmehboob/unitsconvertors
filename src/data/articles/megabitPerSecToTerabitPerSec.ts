import { CustomArticleData } from "./types";

export const mbpsToTbpsArticle: CustomArticleData = {
  fromUnitId: "Mbps",
  toUnitId: "Tbps",
  seoTitle: "Mbps to Tbps Converter (Megabits/sec to Terabits/sec) | UnitsConvertors.com",
  metaDescription: "Convert megabits per second to terabits per second (Mbps to Tbps) with high precision. Learn the divide-by-1,000,000 formula, IXP exchange traffic benchmarks, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/data-transfer/mbps-to-tbps",
  h1: "Mbps to Tbps Converter",
  introduction: [
    "Converting megabits per second (Mbps or Mb/s) to terabits per second (Tbps or Tb/s) bridges the performance scale between individual user broadband speeds and continental internet infrastructure. While home internet users and local office networks operate in tens or hundreds of megabits per second, global tier-1 internet exchanges (such as DE-CIX, AMS-IX, and LINX), subsea optical fiber cables, and hyperscale cloud networks measure aggregated throughput in terabits per second.",
    "Under international data transmission standards governed by SI decimal prefixes and IEC 80000-13, mega represents one million ($10^6$) and tera represents one trillion ($10^{12}$). Because both units measure binary bits transmitted per second, the scaling ratio between them spans exactly six orders of magnitude: exactly one million megabits per second equal one terabit per second. Converting megabits per second to terabits per second requires dividing the Mbps figure by 1,000,000 (or multiplying by $10^{-6}$), allowing telecom planners, cybersecurity engineers, and network architects to model peak internet exchange loads and volumetric DDoS mitigation capacities."
  ],
  quickAnswer: {
    text: "To convert megabits per second (Mbps) to terabits per second (Tbps), divide the Mbps value by 1,000,000 (or multiply by 10⁻⁶). For example, 500,000 Mbps equals exactly 0.5 Tbps (or 500 Gbps).",
    formulaDisplay: "Rate (Tbps) = Rate (Mbps) / 1,000,000 = Rate (Mbps) × 10⁻⁶",
    subtext: "1 Tbps = 1,000,000 Mbps = 1,000 Gbps = 125,000 MB/s | 1 Mbps = 10⁻⁶ Tbps"
  },
  aboutSourceUnit: {
    title: "About Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps or Mb/s) is a metric unit of digital transmission bandwidth representing 1,000,000 bits transferred per second. It is the international standard for consumer broadband speeds, 4G/5G mobile connectivity, and local network Wi-Fi benchmark metrics."
  },
  aboutTargetUnit: {
    title: "About Terabits per Second (Tbps)",
    text: "Terabits per second (symbol: Tbps or Tb/s) is a massive unit of digital data transmission representing one trillion bits (10¹² bits or 1,000,000,000,000 bits) transferred per second. It serves as the primary metric for transoceanic submarine cable systems, national core transport backbones, and top-tier internet exchange points (IXPs)."
  },
  relationship: "Both units rely on standard SI metric prefixes adopted by the ITU-T and IEC. The mega prefix denotes $10^6$ and the tera prefix denotes $10^{12}$. The mathematical ratio between tera and mega is $10^{12} / 10^6 = 10^6$ (one million). Consequently, exactly 1,000,000 Mbps make up 1 Tbps, and 1 Mbps equals $0.000001\\text{ Tbps}$ ($10^{-6}\\text{ Tbps}$) with exact precision.",
  relationshipTitle: "Exact 1,000,000-to-1 Metric Bandwidth Scale",
  relationshipItems: [
    { label: "1 Tbps in Mbps", value: "1,000,000 Mbps (one million)" },
    { label: "1 Mbps in Tbps", value: "0.000001 Tbps (10⁻⁶)" },
    { label: "1,000 Mbps (1 Gbps)", value: "0.001 Tbps" },
    { label: "10,000 Mbps (10 Gbps)", value: "0.01 Tbps" },
    { label: "100,000 Mbps (100 Gbps)", value: "0.1 Tbps" },
    { label: "500,000 Mbps (500 Gbps)", value: "0.5 Tbps" },
    { label: "1,000,000 Mbps (1 Tbps)", value: "1.0 Tbps" }
  ],
  formula: {
    text: "To convert megabits per second into terabits per second, divide the Mbps value by 1,000,000, or multiply by 0.000001 (10⁻⁶).",
    math: "Rate (Tbps) = Rate (Mbps) / 1,000,000",
    subtext: "Inverse formula: Rate (Mbps) = Rate (Tbps) × 1,000,000"
  },
  formulaTitle: "Mbps to Tbps Conversion Formula",
  practicalTip: {
    title: "DDoS Attack Mitigation Sizing Tip",
    text: "When evaluating cloud web application firewall (WAF) and scrubbing center capacities against volumetric distributed denial-of-service (DDoS) attacks, translate attack telemetry reported in Mbps into Tbps. Record-setting modern botnet attacks exceed 3,500,000 Mbps (3.5 Tbps). Ensure your DDoS scrubbing provider advertises global multi-terabit capacity to prevent transit pipe saturation."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Regional Internet Exchange Peak Traffic",
        subtitle: "A metropolitan internet exchange point reports peak traffic of 350,000 Mbps during a major sports streaming event. Convert this throughput to Tbps.",
        steps: [
          "State starting traffic: 350,000 Mbps.",
          "Identify conversion formula: Rate (Tbps) = Rate (Mbps) ÷ 1,000,000.",
          "Perform calculation: 350,000 ÷ 1,000,000 = 0.35 Tbps.",
          "Conclude: The exchange point handled peak traffic of 0.35 Tbps (equivalent to 350 Gbps)."
        ]
      },
      {
        title: "Example 2: Metro Fiber Optical Transport Ring",
        subtitle: "A telecommunications provider provisions forty 100-Gbps dense wavelength division multiplexing (DWDM) channels, yielding 4,000,000 Mbps. Calculate the capacity in Tbps.",
        steps: [
          "Identify aggregate throughput: 4,000,000 Mbps.",
          "Divide by the scale factor: 4,000,000 ÷ 1,000,000.",
          "Compute result: 4.0 Tbps.",
          "Final Result: The DWDM fiber transport ring delivers 4.0 Tbps total transmission capacity."
        ]
      },
      {
        title: "Example 3: Broadband ISP Customer Aggregation",
        subtitle: "An ISP services 50,000 concurrent residential customers each utilizing an average downstream bandwidth of 15 Mbps (totaling 750,000 Mbps). Convert this upstream load to Tbps.",
        steps: [
          "Calculate total megabit demand: 50,000 × 15 Mbps = 750,000 Mbps.",
          "Apply conversion: 750,000 ÷ 1,000,000.",
          "Calculate: exactly 0.75 Tbps.",
          "Result: The ISP requires at least 0.75 Tbps (750 Gbps) of upstream transit peering to support customer demand."
        ]
      }
    ]
  },
  table: {
    title: "Mbps to Tbps Conversion Reference Table",
    headers: ["Megabits/sec (Mbps)", "Terabits/sec (Tbps)", "Gigabits/sec (Gbps)", "Gigabytes/sec (GB/s)"],
    rows: [
      { fromVal: "1,000 Mbps", toVal: "0.001 Tbps", extra: "1 Gbps", extra2: "0.125 GB/s" },
      { fromVal: "5,000 Mbps", toVal: "0.005 Tbps", extra: "5 Gbps", extra2: "0.625 GB/s" },
      { fromVal: "10,000 Mbps", toVal: "0.010 Tbps", extra: "10 Gbps", extra2: "1.25 GB/s" },
      { fromVal: "25,000 Mbps", toVal: "0.025 Tbps", extra: "25 Gbps", extra2: "3.125 GB/s" },
      { fromVal: "50,000 Mbps", toVal: "0.050 Tbps", extra: "50 Gbps", extra2: "6.25 GB/s" },
      { fromVal: "100,000 Mbps", toVal: "0.100 Tbps", extra: "100 Gbps", extra2: "12.50 GB/s" },
      { fromVal: "250,000 Mbps", toVal: "0.250 Tbps", extra: "250 Gbps", extra2: "31.25 GB/s" },
      { fromVal: "500,000 Mbps", toVal: "0.500 Tbps", extra: "500 Gbps", extra2: "62.50 GB/s" },
      { fromVal: "750,000 Mbps", toVal: "0.750 Tbps", extra: "750 Gbps", extra2: "93.75 GB/s" },
      { fromVal: "1,000,000 Mbps", toVal: "1.000 Tbps", extra: "1,000 Gbps", extra2: "125.00 GB/s" },
      { fromVal: "2,000,000 Mbps", toVal: "2.000 Tbps", extra: "2,000 Gbps", extra2: "250.00 GB/s" },
      { fromVal: "5,000,000 Mbps", toVal: "5.000 Tbps", extra: "5,000 Gbps", extra2: "625.00 GB/s" },
      { fromVal: "10,000,000 Mbps", toVal: "10.000 Tbps", extra: "10,000 Gbps", extra2: "1,250.00 GB/s" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Global Internet Exchange Point (IXP) Monitoring",
        text: "Analyzing traffic statistics published by exchange operators (DE-CIX Frankfurt, AMS-IX Amsterdam, Equinix) where traffic spikes from millions of Mbps are aggregated into multi-terabit readouts."
      },
      {
        title: "Subsea Transoceanic Fiber Cable Engineering",
        text: "Designing wavelength-division multiplexed (WDM) transatlantic and transpacific optical cables with aggregate capacities rated in hundreds of Tbps."
      },
      {
        title: "Hyperscale Cloud Data Center Fabrics",
        text: "Sizing spine-and-leaf network fabrics in hyperscale availability zones linking thousands of servers, each with 25 Gbps or 100 Gbps interfaces."
      },
      {
        title: "Telecommunications Capacity Planning",
        text: "Aggregating millions of subscriber mobile 5G and home fiber Mbps data streams into core optical transport pipelines."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Mbps to Tbps",
    items: [
      "Dividing by 1,000 instead of 1,000,000: Dividing Mbps by 1,000 yields Gbps (gigabits), not Tbps (terabits). Tbps requires dividing by one million.",
      "Using binary tebibits ($1,024^2$): Digital communications strictly employ SI decimal prefixes ($10^6$ to $10^{12}$). The binary prefix is tebibit (Tib).",
      "Confusing terabits (Tbps) with terabytes (TB/s): 1 Tbps equals 0.125 TB/s (125 gigabytes per second). Always distinguish lowercase 'b' (bits) from uppercase 'B' (bytes).",
      "Losing precision when writing small decimal values: 100 Mbps equals 0.0001 Tbps ($10^{-4}$ Tbps); avoid prematurely truncating trailing zeros in network planning spreadsheets."
    ]
  },
  faqs: [
    {
      question: "How many Mbps make up 1 Tbps?",
      answer: "There are exactly 1,000,000 megabits per second in 1 terabit per second. This is because tera ($10^{12}$) is one million times larger than mega ($10^6$)."
    },
    {
      question: "What is the formula to convert Mbps to Tbps?",
      answer: "The formula is: Rate (Tbps) = Rate (Mbps) ÷ 1,000,000. Alternatively, multiply the Mbps value by 0.000001 ($10^{-6}$)."
    },
    {
      question: "What is 1,000 Mbps in Tbps?",
      answer: "1,000 Mbps (1 Gbps) equals 0.001 Tbps (one-thousandth of a terabit per second)."
    },
    {
      question: "What is 100,000 Mbps in Tbps?",
      answer: "100,000 Mbps equals 0.1 Tbps (or 100 Gbps), calculated as 100,000 ÷ 1,000,000."
    },
    {
      question: "What is 500,000 Mbps in Tbps?",
      answer: "500,000 Mbps equals 0.5 Tbps (or 500 Gbps)."
    },
    {
      question: "How many gigabits per second are in a terabit per second?",
      answer: "There are exactly 1,000 Gbps in 1 Tbps. Converting from Mbps to Tbps is equivalent to dividing by 1,000 twice."
    },
    {
      question: "Why do optical networks use decimal prefixes rather than binary?",
      answer: "Telecommunications standards bodies (ITU-T, IEEE, and IEC 80000-13) mandate decimal powers of ten for physical signaling frequencies, clock rates, and data transmission. Binary powers of two apply only to addressable semiconductor memory (RAM)."
    },
    {
      question: "How many megabytes per second can 1 Tbps transfer?",
      answer: "1 Tbps equals 125,000 megabytes per second (MB/s) or 125 gigabytes per second (GB/s), because each byte contains exactly 8 bits."
    },
    {
      question: "How many concurrent 4K Netflix streams can 1 Tbps sustain?",
      answer: "A 4K UHD video stream requires approximately 25 Mbps. Dividing 1,000,000 Mbps by 25 Mbps shows that 1 Tbps can sustain 40,000 concurrent 4K streams simultaneously."
    },
    {
      question: "How do I convert Tbps back to Mbps?",
      answer: "Multiply the Tbps value by 1,000,000. For example, 2.5 Tbps × 1,000,000 = 2,500,000 Mbps."
    }
  ],
  relatedList: [
    { label: "Tbps to Mbps", from: "Tbps", to: "Mbps" },
    { label: "Mbps to Gbps", from: "Mbps", to: "Gbps" },
    { label: "Mbps to Kbps", from: "Mbps", to: "kbps" },
    { label: "Gbps to Tbps", from: "Gbps", to: "Tbps" },
    { label: "Mbps to Byte/sec", from: "Mbps", to: "Bps" }
  ],
  references: [
    "IEC 80000-13: Quantities and units — Part 13: Information science and technology.",
    "ITU-T Recommendation B.12: Use of prefix terms for binary and decimal multiples in telecommunication.",
    "DE-CIX Internet Exchange: Global Traffic Statistics and Peering Architecture."
  ]
};
