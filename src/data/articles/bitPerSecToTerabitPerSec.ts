import { CustomArticleData } from "./types";

export const bpsToTbpsArticle: CustomArticleData = {
  fromUnitId: "bps",
  toUnitId: "Tbps",
  seoTitle: "Bit/sec to Tbps Converter (bps to Tbps) - UnitsConvertors",
  metaDescription: "Convert bits per second to terabits per second (bps to Tbps) instantly. Formula: bps ÷ 1,000,000,000,000. Step-by-step calculations, tables, and backbone network FAQs.",
  h1: "Bit/sec to Tbps Converter",
  introduction: [
    "Converting bits per second (bps) to terabits per second (Tbps) scales base-level digital signal counters into the highest order telecommunication throughput metrics. Subsea fiber optic cables, global Internet exchange backbones, supercomputing interconnects, and cloud network cores measure aggregate capacity in Terabits per second.",
    "Following standard International System of Units (SI) metric prefixes, 1 Terabit per second equals 1,000,000,000,000 bits per second (10¹² bps). Converting from bps to Tbps requires dividing the bitrate in bps by 1,000,000,000,000. For example, 5,000,000,000,000 bps converts to 5 Tbps.",
    "This technical guide details the mathematical relationship between bits per second and terabits per second, provides step-by-step worked calculation examples, presents a global bandwidth comparison table, and addresses frequent high-capacity network questions."
  ],
  quickAnswer: {
    text: "To convert bits per second (bps) to terabits per second (Tbps), divide the bps value by 1,000,000,000,000. For example, 10,000,000,000,000 bps equals 10 Tbps (10,000,000,000,000 ÷ 1,000,000,000,000 = 10 Tbps).",
    formulaDisplay: "Terabits per second (Tbps) = Bits per second (bps) ÷ 1,000,000,000,000",
    subtext: "1 bps = 10⁻¹² Tbps (1 Tbps = 1,000,000,000,000 bps)."
  },
  aboutSourceUnit: {
    title: "Understanding Bits per Second (bps)",
    text: "Bits per second (symbol: bps) is the SI base unit measuring physical transmission rate over telecommunication links. It represents the count of binary bits (0 or 1) transferred across a signal medium in one second."
  },
  aboutTargetUnit: {
    title: "Understanding Terabits per Second (Tbps)",
    text: "Terabits per second (symbol: Tbps) represents 1,000,000,000,000 bits per second. It is the primary metric for transoceanic subsea fiber cables, tier-1 ISP peering backbones, and hyper-scale cloud data center cross-connects."
  },
  relationship: "Because 'tera' denotes 10¹² (1,000,000,000,000) in decimal SI standards, 1 Tbps equals 1,000,000,000,000 bps. Converting bps to Tbps shifts the decimal point 12 places to the left.",
  relationshipTitle: "Bit/sec to Tbps Rate Comparison",
  relationshipItems: [
    { label: "1 bps", value: "= 0.000000000001 Tbps" },
    { label: "1,000,000,000 bps", value: "= 0.001 Tbps (1 Gbps)" },
    { label: "100,000,000,000 bps", value: "= 0.1 Tbps (100 Gbps)" },
    { label: "1,000,000,000,000 bps", value: "= 1.0 Tbps" },
    { label: "20,000,000,000,000 bps", value: "= 20.0 Tbps" }
  ],
  formula: {
    text: "Divide the bits per second value by 1,000,000,000,000 to convert to terabits per second.",
    math: "Tbps = bps ÷ 1,000,000,000,000",
    subtext: "Equivalently: Tbps = bps × 10⁻¹²."
  },
  formulaTitle: "Bit/sec to Tbps Conversion Formula",
  practicalTip: {
    title: "Global Subsea Cable Infrastructure",
    text: "Modern transatlantic optical subsea cables (such as MAREA or Dunant) utilize dense wavelength-division multiplexing (DWDM) over fiber pairs to achieve aggregate capacities exceeding 200 Terabits per second (200,000,000,000,000 bps)."
  },
  expertNote: {
    title: "Tbps vs TB/s",
    text: "Always distinguish Terabits per second (Tbps) from Terabytes per second (TB/s). 1 Terabyte per second equal 8 Terabits per second (1 TB/s = 8 Tbps)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Transoceanic Fiber Cable",
        subtitle: "A subsea fiber system provides 16,000,000,000,000 bps capacity. Convert this throughput to Tbps.",
        steps: [
          "Identify rate in bps: 16,000,000,000,000 bps.",
          "Apply conversion formula: Tbps = 16,000,000,000,000 ÷ 1,000,000,000,000.",
          "Calculate: 16,000,000,000,000 ÷ 1,000,000,000,000 = 16.",
          "Result: 16,000,000,000,000 bps equals 16 Tbps."
        ]
      },
      {
        title: "Example 2: Global IXP Peak Traffic",
        subtitle: "A major Internet Exchange Point logs peak traffic of 32,500,000,000,000 bps. Convert this value to Tbps.",
        steps: [
          "Identify rate in bps: 32,500,000,000,000 bps.",
          "Apply conversion formula: Tbps = 32,500,000,000,000 ÷ 1,000,000,000,000.",
          "Calculate: 32,500,000,000,000 ÷ 1,000,000,000,000 = 32.5.",
          "Result: 32,500,000,000,000 bps equals 32.5 Tbps."
        ]
      },
      {
        title: "Example 3: AI Supercomputer Fabric",
        subtitle: "An AI training cluster interconnect delivers 800,000,000,000 bps. Convert this rate to Tbps.",
        steps: [
          "Identify rate in bps: 800,000,000,000 bps.",
          "Apply conversion formula: Tbps = 800,000,000,000 ÷ 1,000,000,000,000.",
          "Calculate: 800,000,000,000 ÷ 1,000,000,000,000 = 0.8.",
          "Result: 800,000,000,000 bps equals 0.8 Tbps (800 Gbps)."
        ]
      }
    ]
  },
  table: {
    title: "Bit/sec to Tbps Conversion Table",
    headers: ["Bits per Second (bps)", "Terabits per Second (Tbps)", "Infrastructure Example"],
    rows: [
      { fromVal: "100,000,000,000 bps", toVal: "0.1 Tbps", extra: "100 Gbps Core Trunk" },
      { fromVal: "400,000,000,000 bps", toVal: "0.4 Tbps", extra: "400G Optical Interface" },
      { fromVal: "800,000,000,000 bps", toVal: "0.8 Tbps", extra: "800G Data Center Interconnect" },
      { fromVal: "1,000,000,000,000 bps", toVal: "1.0 Tbps", extra: "1 Terabit/sec Gateway" },
      { fromVal: "5,000,000,000,000 bps", toVal: "5.0 Tbps", extra: "Regional IXP Peak Traffic" },
      { fromVal: "10,000,000,000,000 bps", toVal: "10.0 Tbps", extra: "Tier-1 ISP Backbone Link" },
      { fromVal: "20,000,000,000,000 bps", toVal: "20.0 Tbps", extra: "Subsea Cable Pair Capacity" },
      { fromVal: "50,000,000,000,000 bps", toVal: "50.0 Tbps", extra: "DE-CIX Aggregate Peak Traffic" },
      { fromVal: "100,000,000,000,000 bps", toVal: "100.0 Tbps", extra: "Next-Gen Transoceanic System" },
      { fromVal: "250,000,000,000,000 bps", toVal: "250.0 Tbps", extra: "Dunant Subsea Cable System" }
    ]
  },
  applications: {
    title: "Applications of Bit/sec to Tbps Conversion",
    items: [
      {
        title: "Subsea Optical Cable Engineering",
        text: "Sizing optical spectrum allocation and DWDM transceiver capacities across oceans."
      },
      {
        title: "Tier-1 Network Core Architecture",
        text: "Planning global transit capacity and DDoS mitigation scrubbing center throughput."
      },
      {
        title: "AI & High-Performance Computing",
        text: "Designing ultra-low latency optical fabrics for massive distributed model training."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Tbps (Terabits per second) with TB/s (Terabytes per second): Divide Tbps by 8 to obtain TB/s storage transfer rate.",
      "Dividing by binary 1,099,511,627,776 instead of SI 1,000,000,000,000: Telecommunications uses decimal 10¹².",
      "Losing precision when writing large zeros: Use scientific notation (10¹² bps = 1 Tbps)."
    ]
  },
  faqs: [
    {
      question: "How many Tbps is 1,000,000,000,000 bps?",
      answer: "1,000,000,000,000 bps equals exactly 1 Tbps."
    },
    {
      question: "What is the formula to convert bps to Tbps?",
      answer: "The formula is Tbps = bps ÷ 1,000,000,000,000."
    },
    {
      question: "How many Gbps are in 1 Tbps?",
      answer: "There are 1,000 Gbps in 1 Tbps."
    },
    {
      question: "What is the difference between Tbps and TB/s?",
      answer: "Tbps measures network transmission bandwidth in terabits per second, while TB/s measures data storage write speed in terabytes per second. 1 TB/s = 8 Tbps."
    },
    {
      question: "How many bits per second is 20 Tbps?",
      answer: "20 Tbps multiplied by 1,000,000,000,000 equals 20,000,000,000,000 bits per second."
    },
    {
      question: "What is 800 Gbps in Tbps?",
      answer: "800 Gbps equals 0.8 Tbps."
    },
    {
      question: "Why are subsea optical cables measured in Tbps?",
      answer: "Subsea optical cables multiplex hundreds of wavelengths carrying billions of bits per second, yielding aggregate throughputs best expressed in Tbps."
    },
    {
      question: "How do I convert Tbps back to bps?",
      answer: "Multiply the Tbps value by 1,000,000,000,000."
    }
  ],
  relatedList: [
    { label: "Bit/sec to Gbps", from: "bps", to: "Gbps" },
    { label: "Bit/sec to Mbps", from: "bps", to: "Mbps" },
    { label: "Byte/sec to Tbps", from: "Bps", to: "Tbps" },
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" }
  ],
  references: [
    "IEC 80000-13:2008 — Quantities and Units: Information Science and Technology",
    "ITU-T Optical Transport Network (OTN) Standards",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
