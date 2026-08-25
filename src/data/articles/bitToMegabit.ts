import { CustomArticleData } from "./types";

export const bitToMegabit: CustomArticleData = {
  fromUnitId: "bit",
  toUnitId: "megabit",
  seoTitle: "Bit to Megabit Converter (b to Mb) - UnitsConvertors",
  metaDescription: "Convert bits to megabits (b to Mb) instantly. Learn the decimal conversion formula (1 Mb = 1,000,000 b), broadband & video streaming bitrate tables, and FAQs.",
  h1: "Bit to Megabit Converter",
  introduction: [
    "Converting digital data transmission and capacity from bits to megabits is an essential calculation in broadband telecommunications, network infrastructure design, video streaming optimization, and cloud bandwidth provisioning. Internet Service Providers (ISPs), cellular networks, and media streaming platforms universally rate bandwidth, throughput, and encoding bitrates in megabits (Mb) and megabits per second (Mbps).",
    "In accordance with standard International System of Units (SI) decimal metric prefixes, 1 megabit (Mb) represents exactly 1,000,000 bits (10⁶ bits, or 1,000 kilobits). To convert any digital quantity from bits to megabits, divide the number of bits by 1,000,000 (or multiply by 0.000001). For instance, a 25,000,000-bit-per-second 4K ultra-high-definition video stream transmits at exactly 25 Mbps.",
    "This technical guide explains the mathematics of the megabit, clarifies the distinction between megabits (Mb) and megabytes (MB), demonstrates step-by-step conversions, and provides real-world networking lookup tables."
  ],
  quickAnswer: {
    text: "To convert bits to megabits, divide the number of bits by 1,000,000 (or multiply by 0.000001). For example, 1,000,000 bits equals exactly 1 megabit (1 Mb), and 100,000,000 bits equals 100 Mb.",
    formulaDisplay: "Megabits (Mb) = Bits (b) ÷ 1,000,000",
    subtext: "1 Megabit (Mb) = 1,000,000 Bits = 1,000 Kilobits = 125,000 Bytes (125 KB)."
  },
  aboutSourceUnit: {
    title: "Understanding the Bit (b)",
    text: "A bit (symbol: b, binary digit) is the atomic, indivisible building block of all digital computation and communications. Representing binary states (0 or 1), bits are pulsed sequentially as light, voltage, or radio waves across physical transmission media."
  },
  aboutTargetUnit: {
    title: "Understanding the Megabit (Mb)",
    text: "A megabit (symbol: Mb or Mbit) is a decimal metric multiple of the bit equal to 1,000,000 bits (10⁶ b). It is the universal standard metric used globally to specify consumer broadband speeds (Mbps), Wi-Fi connection rates, and digital video streaming bitrates."
  },
  relationship: "Following the SI metric decimal system, the prefix 'mega-' denotes a factor of one million (10⁶). 1 megabit equals 1,000 kilobits, which equals 1,000,000 bits. Conversely, 1 bit represents one-millionth (0.000001) of a megabit.",
  relationshipTitle: "Bit to Megabit Scaling Hierarchy",
  relationshipItems: [
    { label: "1 Bit (b)", value: "= 0.000001 Mb" },
    { label: "1,000 Bits (1 kb)", value: "= 0.001000 Mb" },
    { label: "1,000,000 Bits (b)", value: "= 1.000000 Mb" },
    { label: "5,000,000 Bits (1080p stream)", value: "= 5.000000 Mb" },
    { label: "25,000,000 Bits (4K HDR stream)", value: "= 25.000000 Mb" },
    { label: "100,000,000 Bits (Fast Ethernet)", value: "= 100.000000 Mb" }
  ],
  formula: {
    text: "Divide the bit value by 1,000,000 to convert to decimal megabits.",
    math: "Quantity (Mb) = Quantity (b) ÷ 1,000,000",
    subtext: "Alternative formula: Quantity (Mb) = Quantity (b) × 0.000001"
  },
  formulaTitle: "Bit to Megabit Conversion Formula",
  practicalTip: {
    title: "Video Streaming Bandwidth Rule",
    text: "Video streaming platforms recommend connection speeds based on megabits per second (Mbps): Standard Definition (SD) requires ~3 Mbps, 1080p Full HD requires ~5 Mbps, and 4K Ultra HD requires ~25 Mbps."
  },
  expertNote: {
    title: "Megabit (Mb) vs Megabyte (MB)",
    text: "1 Megabit (Mb) = 1,000,000 bits. 1 Megabyte (MB) = 1,000,000 bytes = 8,000,000 bits. 1 Megabyte is exactly 8 times larger than 1 Megabit. Lowercase 'b' always denotes bits, while uppercase 'B' denotes bytes."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Broadband Speedtest Throughput Calculation",
        subtitle: "A network speedtest measures a total data transfer of 150,000,000 bits over a one-second test interval. Calculate the speed in Mbps.",
        steps: [
          "State the bit count: 150,000,000 b.",
          "Apply the conversion formula: Mb = 150,000,000 ÷ 1,000,000.",
          "Calculate: 150,000,000 ÷ 1,000,000 = 150.00 Mb.",
          "Result: 150,000,000 bits per second equals exactly 150 Mbps."
        ]
      },
      {
        title: "Example 2: 4K Video Camera Recording Bitrate",
        subtitle: "A digital cinema camera records video at a raw data rate of 100,000,000 bits per second. Express this bitrate in megabits per second.",
        steps: [
          "State raw bit rate: 100,000,000 b/s.",
          "Divide by 1,000,000: 100,000,000 ÷ 1,000,000 = 100.00 Mbps.",
          "Result: The recording bitrate is 100 Mbps (equivalent to 12.5 MB/s)."
        ]
      },
      {
        title: "Example 3: Cellular 5G Data Burst",
        subtitle: "A 5G mobile base station transfers a burst packet of 750,000,000 bits to a client device. Convert this packet burst to megabits.",
        steps: [
          "Identify bits: 750,000,000 b.",
          "Apply equation: Mb = 750,000,000 ÷ 1,000,000.",
          "Calculate: 750,000,000 ÷ 1,000,000 = 750.00 Mb.",
          "Result: 750,000,000 bits equals 750 Mb (or 0.75 Gb)."
        ]
      }
    ]
  },
  table: {
    title: "Bit to Megabit Conversion Table",
    headers: ["Bits (b)", "Megabits (Mb)", "Megabytes (MB)", "Networking & Media Streaming Context"],
    rows: [
      { fromVal: "1,000,000 b", toVal: "1.000 Mb", extra: "0.125 MB", extra2: "Base decimal megabit unit (10⁶ bits)" },
      { fromVal: "3,000,000 b", toVal: "3.000 Mb", extra: "0.375 MB", extra2: "Standard definition (480p) video stream bitrate" },
      { fromVal: "5,000,000 b", toVal: "5.000 Mb", extra: "0.625 MB", extra2: "High-definition (1080p 30fps) video stream bitrate" },
      { fromVal: "10,000,000 b", toVal: "10.000 Mb", extra: "1.250 MB", extra2: "Full HD 1080p 60fps high-bitrate live stream" },
      { fromVal: "15,000,000 b", toVal: "15.000 Mb", extra: "1.875 MB", extra2: "4K UHD basic streaming platform minimum" },
      { fromVal: "25,000,000 b", toVal: "25.000 Mb", extra: "3.125 MB", extra2: "4K HDR Netflix / YouTube recommended stream speed" },
      { fromVal: "50,000,000 b", toVal: "50.000 Mb", extra: "6.250 MB", extra2: "Standard VDSL2 / basic fiber residential broadband" },
      { fromVal: "100,000,000 b", toVal: "100.000 Mb", extra: "12.500 MB", extra2: "Fast Ethernet (100BASE-TX) full link throughput" },
      { fromVal: "300,000,000 b", toVal: "300.000 Mb", extra: "37.500 MB", extra2: "Mid-tier residential fiber broadband speed" },
      { fromVal: "500,000,000 b", toVal: "500.000 Mb", extra: "62.500 MB", extra2: "High-speed residential cable DOCSIS 3.1 speed" },
      { fromVal: "1,000,000,000 b", toVal: "1,000.000 Mb", extra: "125.000 MB", extra2: "1 Gigabit (1 Gb / Gigabit Ethernet / 10⁹ bits)" }
    ]
  },
  applications: {
    title: "Practical Applications of Bit to Megabit Conversion",
    items: [
      {
        title: "Internet Service Provider (ISP) Bandwidth Sizing",
        text: "Network architects calculate bandwidth provisioning across residential and enterprise links in Mbps to meet customer SLA requirements."
      },
      {
        title: "Digital Video Streaming & OTT Platforms",
        text: "Video compression engineers configure adaptive bitrate (ABR) ladders in H.264, HEVC, and AV1 video streams in whole megabits per second."
      },
      {
        title: "Wireless & Wi-Fi Network Engineering",
        text: "Wireless network planners convert raw physical layer (PHY) bit signaling rates into megabits per second (Mbps) application throughput."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing megabits (Mb) with megabytes (MB): Megabytes are 8 times larger (1 MB = 8 Mb). Confusing the two causes an 8x error in download time estimation.",
      "Dividing by 1,048,576: Dividing by 1,048,576 computes binary mebibits (Mib), NOT standard decimal megabits (Mb).",
      "Ignoring network framing overhead: Usable application throughput in Mbps is typically 5-10% lower than raw physical bit link rate."
    ]
  },
  faqs: [
    {
      question: "How many bits are in 1 megabit (Mb)?",
      answer: "There are exactly 1,000,000 bits in 1 decimal megabit (10⁶ bits or 1,000 kilobits)."
    },
    {
      question: "What is the formula to convert bits to megabits?",
      answer: "The formula is: Megabits (Mb) = Bits (b) ÷ 1,000,000 (or Bits × 0.000001)."
    },
    {
      question: "What is the difference between a megabit (Mb) and a megabyte (MB)?",
      answer: "A megabit (Mb) contains 1,000,000 bits. A megabyte (MB) contains 1,000,000 bytes (8,000,000 bits). 1 megabyte is exactly 8 times larger than 1 megabit."
    },
    {
      question: "How many bytes are in 1 megabit?",
      answer: "1 megabit (1,000,000 bits) divided by 8 equals exactly 125,000 bytes (125 KB)."
    },
    {
      question: "How many megabits are in 1 gigabit (Gb)?",
      answer: "There are exactly 1,000 megabits (Mb) in 1 gigabit (Gb)."
    },
    {
      question: "How many bits are transferred per second on a 100 Mbps connection?",
      answer: "A 100 Mbps connection transfers 100,000,000 bits per second (equivalent to 12.5 MB/s)."
    },
    {
      question: "What is the difference between Mb and Mib?",
      answer: "Mb (megabit) is decimal (10⁶ = 1,000,000 bits). Mib (mebibit) is binary (2²⁰ = 1,048,576 bits)."
    },
    {
      question: "What is the symbol for megabit?",
      answer: "The official symbol for megabit is 'Mb' or 'Mbit'."
    }
  ],
  relatedList: [
    { label: "Bit to Byte", from: "bit", to: "byte" },
    { label: "Bit to Megabyte (decimal)", from: "bit", to: "megabyte" },
    { label: "Bit to Gigabit", from: "bit", to: "gigabit" },
    { label: "Bit to Kilobit", from: "bit", to: "kilobit" },
    { label: "Byte to Megabit", from: "byte", to: "megabit" }
  ],
  references: [
    "ISO/IEC 80000-13: Information Science and Technology — Telecommunications",
    "IEEE Std 1541-2002: Prefixes for Binary Multiples and Metric Multiples",
    "ITU-T Telecommunication Standardization Bureau Guidelines"
  ]
};
