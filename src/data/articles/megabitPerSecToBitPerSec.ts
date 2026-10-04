import { CustomArticleData } from "./types";

export const mbpsToBitPerSecArticle: CustomArticleData = {
  fromUnitId: "Mbps",
  toUnitId: "bps",
  seoTitle: "Mbps to Bit/sec Converter (Megabits/sec to Bits/sec) | UnitsConvertors.com",
  metaDescription: "Convert megabits per second to bits per second (Mbps to bps) instantly. Learn the exact 1 Mbps = 1,000,000 bps formula, worked networking examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/data-transfer/mbps-to-bps",
  h1: "Mbps to Bit/sec Converter",
  introduction: [
    "Converting megabits per second (Mbps or Mb/s) to bits per second (bps or bit/s) translates modern high-speed broadband, cellular, and local area network specifications into the foundational base unit of digital information theory. While internet service providers (ISPs), streaming media platforms, and Wi-Fi standards quote bandwidth in megabits per second, hardware engineers, serial communication protocol designers, and digital signal processing (DSP) systems analyze raw physical layer bit clocks in bits per second.",
    "Under international data transmission standards (IEC 80000-13 and SI decimal prefixes), the mega prefix represents exactly one million ($10^6$). Therefore, one megabit per second equals exactly 1,000,000 bits per second. Understanding this direct relationship is fundamental when calculating packet transmission times, clock cycle frequencies, and low-level hardware buffer sizing."
  ],
  quickAnswer: {
    text: "To convert megabits per second (Mbps) to bits per second (bps), multiply the Mbps value by 1,000,000. For example, a 50 Mbps broadband connection transfers data at exactly 50,000,000 bits per second.",
    formulaDisplay: "Rate (bps) = Rate (Mbps) × 1,000,000",
    subtext: "1 Mbps = 1,000,000 bps = 1,000 Kbps = 125,000 B/s | 1 bps = 0.000001 Mbps (10⁻⁶)"
  },
  aboutSourceUnit: {
    title: "About Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps or Mb/s) is a standard telecommunications unit representing one million bits transferred per second. It is the primary metric for consumer broadband plans, 4G LTE/5G wireless data rates, and streaming video bitrates (e.g., 5 Mbps for HD, 25 Mbps for 4K)."
  },
  aboutTargetUnit: {
    title: "About Bits per Second (bps)",
    text: "Bits per second (symbol: bps or bit/s) is the fundamental coherent base unit of digital data transmission speed in telecommunications. One bit represents a single binary digit (0 or 1). Bits per second quantify physical line rates, embedded serial protocols (RS-232, I2C, SPI), and hardware clock signals."
  },
  relationship: "Under SI decimal prefix definitions, the prefix mega (M) denotes a multiplier of $10^6$ ($1,000,000$). Because both units operate strictly on binary bits rather than bytes, there is no factor of 8 involved. Exactly 1,000,000 bits per second compose one megabit per second with zero rounding error.",
  relationshipTitle: "Exact Decimal Multiplier: 1 Mbps = 1,000,000 bps",
  relationshipItems: [
    { label: "1 Mbps in bps", value: "1,000,000 bps (exact: 10⁶)" },
    { label: "1 bps in Mbps", value: "0.000001 Mbps (10⁻⁶)" },
    { label: "10 Mbps Ethernet", value: "10,000,000 bps" },
    { label: "100 Mbps Fast Ethernet", value: "100,000,000 bps" },
    { label: "1,000 Mbps Gigabit", value: "1,000,000,000 bps" }
  ],
  formula: {
    text: "To convert megabits per second into bits per second, multiply the Mbps value by 1,000,000.",
    math: "Rate (bps) = Rate (Mbps) × 1,000,000",
    subtext: "Inverse formula: Rate (Mbps) = Rate (bps) / 1,000,000"
  },
  formulaTitle: "Mbps to Bit/sec Conversion Formula",
  practicalTip: {
    title: "The Six-Zero Shift Rule",
    text: "Because the multiplier is exactly 1,000,000, converting Mbps to bps simply requires shifting the decimal point six positions to the right. For example, 3.5 Mbps becomes 3,500,000 bps."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Residential Fiber Broadband Connection",
        subtitle: "A residential internet subscriber signs up for a 300 Mbps download tier. Find the physical line rate in bits per second.",
        steps: [
          "Identify known bandwidth: 300 Mbps.",
          "Apply conversion formula: Rate (bps) = 300 × 1,000,000.",
          "Perform multiplication: 300,000,000 bps.",
          "Conclude: The 300 Mbps fiber link transfers 300,000,000 bits per second."
        ]
      },
      {
        title: "Example 2: 4K Ultra HD Video Stream",
        subtitle: "A 4K HDR movie stream streams at an average bitrate of 25 Mbps. Calculate the rate in bits per second.",
        steps: [
          "State bitrate: 25 Mbps.",
          "Multiply by 1,000,000: 25 × 1,000,000.",
          "Compute product: 25,000,000 bps.",
          "Final Result: The video stream delivers 25,000,000 bits per second."
        ]
      },
      {
        title: "Example 3: Fast Ethernet Network Interface",
        subtitle: "A legacy 100BASE-TX Fast Ethernet port operates at 100 Mbps. Calculate raw bit throughput.",
        steps: [
          "Identify rate: 100 Mbps.",
          "Multiply by 1,000,000: 100 × 1,000,000 = 100,000,000 bps.",
          "Result: Fast Ethernet transmits exactly 100,000,000 bits per second."
        ]
      }
    ]
  },
  table: {
    title: "Mbps to Bit/sec Conversion Reference Table",
    headers: ["Megabits/sec (Mbps)", "Bits/sec (bps)", "Kilobits/sec (Kbps)", "Bytes/sec (B/s)"],
    rows: [
      { fromVal: "0.1 Mbps", toVal: "100,000 bps", extra: "100 Kbps", extra2: "12,500 B/s" },
      { fromVal: "0.5 Mbps", toVal: "500,000 bps", extra: "500 Kbps", extra2: "62,500 B/s" },
      { fromVal: "1 Mbps", toVal: "1,000,000 bps", extra: "1,000 Kbps", extra2: "125,000 B/s" },
      { fromVal: "2 Mbps", toVal: "2,000,000 bps", extra: "2,000 Kbps", extra2: "250,000 B/s" },
      { fromVal: "5 Mbps", toVal: "5,000,000 bps", extra: "5,000 Kbps", extra2: "625,000 B/s" },
      { fromVal: "10 Mbps", toVal: "10,000,000 bps", extra: "10,000 Kbps", extra2: "1,250,000 B/s" },
      { fromVal: "25 Mbps", toVal: "25,000,000 bps", extra: "25,000 Kbps", extra2: "3,125,000 B/s" },
      { fromVal: "50 Mbps", toVal: "50,000,000 bps", extra: "50,000 Kbps", extra2: "6,250,000 B/s" },
      { fromVal: "100 Mbps", toVal: "100,000,000 bps", extra: "100,000 Kbps", extra2: "12,500,000 B/s" },
      { fromVal: "250 Mbps", toVal: "250,000,000 bps", extra: "250,000 Kbps", extra2: "31,250,000 B/s" },
      { fromVal: "500 Mbps", toVal: "500,000,000 bps", extra: "500,000 Kbps", extra2: "62,500,000 B/s" },
      { fromVal: "1,000 Mbps (1 Gbps)", toVal: "1,000,000,000 bps", extra: "1,000,000 Kbps", extra2: "125,000,000 B/s" },
      { fromVal: "10,000 Mbps (10 Gbps)", toVal: "10,000,000,000 bps", extra: "10,000,000 Kbps", extra2: "1,250,000,000 B/s" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Ethernet Physical Layer (PHY) Design",
        text: "Verifying oscillator clock frequencies and serial shift register speeds when converting Ethernet MAC interface rates into raw physical line bits per second."
      },
      {
        title: "Network Packet Transmission Delay Modeling",
        text: "Calculating the exact time required to serialize an Ethernet packet ($t = \\text{packet size in bits} / \\text{bps}$). A 1,500-byte frame (12,000 bits) on a 100 Mbps (100,000,000 bps) link takes exactly 0.12 milliseconds."
      },
      {
        title: "Telecommunications Regulatory Filings",
        text: "Reporting broadband speed coverage metrics to government authorities (such as the US FCC or UK Ofcom) in standardized bits per second."
      },
      {
        title: "Digital Video & Audio Broadcast Engineering",
        text: "Analyzing multiplex transport stream bit allocation across digital terrestrial and satellite TV transponders."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Mbps to bps",
    items: [
      "Multiplying by 1,048,576 instead of 1,000,000: Telecommunications bandwidth strictly follows decimal SI prefixes ($10^6 = 1,000,000$), NOT binary powers ($2^{20} = 1,048,576$). The binary unit is the mebibit per second (Mibps).",
      "Dividing by 8: Both units measure bits, so no byte conversion is necessary. Dividing by 8 would incorrectly yield bytes per second (B/s), not bits per second (bps).",
      "Dividing instead of multiplying: Because a megabit is one million times larger than a bit, the numerical figure in bps must be one million times greater.",
      "Confusing megabits (Mbps) with megabytes (MB/s): If you want to know how many bytes per second a 100 Mbps link delivers, multiply by 1,000,000 and then divide by 8 (yielding 12,500,000 B/s)."
    ]
  },
  faqs: [
    {
      question: "How many bits per second are in 1 Mbps?",
      answer: "There are exactly 1,000,000 bits per second in 1 megabit per second. This is because the SI prefix 'mega' represents $10^6$ ($1,000,000$)."
    },
    {
      question: "What is the formula to convert Mbps to bps?",
      answer: "The formula is: Rate (bps) = Rate (Mbps) × 1,000,000. To reverse the conversion, divide bits per second by 1,000,000."
    },
    {
      question: "How many bits per second is a 100 Mbps connection?",
      answer: "A 100 Mbps connection transfers exactly $100 \\times 1,000,000 = 100,000,000\\text{ bits per second}$."
    },
    {
      question: "How many bits per second is 50 Mbps?",
      answer: "50 Mbps equals $50 \\times 1,000,000 = 50,000,000\\text{ bits per second}$."
    },
    {
      question: "How many bits per second is 10 Mbps?",
      answer: "10 Mbps equals $10 \\times 1,000,000 = 10,000,000\\text{ bits per second}$ (10 million bps)."
    },
    {
      question: "Is 1 Mbps equal to 1,000,000 bps or 1,048,576 bps?",
      answer: "In telecommunications and computer networking, 1 Mbps is defined as exactly 1,000,000 bps. The value 1,048,576 represents a binary mebibit (Mib), which applies to computer memory (RAM)."
    },
    {
      question: "How do I convert bits per second back to Mbps?",
      answer: "Divide the bps figure by 1,000,000. For example, 25,000,000 bps divided by 1,000,000 equals 25 Mbps."
    },
    {
      question: "How many bytes per second is 1 Mbps?",
      answer: "Since 1 byte contains 8 bits, divide 1,000,000 bps by 8: $1,000,000 / 8 = 125,000\\text{ bytes per second}$ (125 KB/s)."
    },
    {
      question: "What is 1,000 Mbps in bits per second?",
      answer: "1,000 Mbps (often called Gigabit internet) equals exactly $1,000,000,000\\text{ bits per second}$ (1 Gbps)."
    },
    {
      question: "What is the serialization time of a packet at 100 Mbps?",
      answer: "To calculate serialization time, divide the packet size in bits by the link speed in bps. A standard 1,500-byte packet contains 12,000 bits. On a 100 Mbps (100,000,000 bps) link, transmission takes: $12,000 / 100,000,000 = 0.00012\\text{ seconds}$ (120 microseconds)."
    }
  ],
  relatedList: [
    { label: "Mbps to Byte/sec", from: "Mbps", to: "Bps" },
    { label: "Mbps to Kbps", from: "Mbps", to: "kbps" },
    { label: "Mbps to Gbps", from: "Mbps", to: "Gbps" },
    { label: "Bit/sec to Byte/sec", from: "bps", to: "Bps" },
    { label: "Kbps to Bit/sec", from: "kbps", to: "bps" }
  ],
  references: [
    "IEC 80000-13: Quantities and units — Part 13: Information science and technology.",
    "IEEE Standard 802.3: Carrier Sense Multiple Access with Collision Detection (CSMA/CD) Access Method and Physical Layer Specifications.",
    "ITU-T Recommendation B.12: Use of prefix terms in telecommunications."
  ]
};
