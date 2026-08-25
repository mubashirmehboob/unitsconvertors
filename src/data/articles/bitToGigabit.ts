import { CustomArticleData } from "./types";

export const bitToGigabit: CustomArticleData = {
  fromUnitId: "bit",
  toUnitId: "gigabit",
  seoTitle: "Bit to Gigabit Converter (b to Gb) - UnitsConvertors",
  metaDescription: "Convert bits to gigabits (b to Gb) instantly. Learn the decimal conversion formula (1 Gb = 1,000,000,000 b), Gigabit Ethernet math, tables, and FAQs.",
  h1: "Bit to Gigabit Converter",
  introduction: [
    "Converting digital data transmission and capacity from raw bits to gigabits is a standard calculation in high-speed optical networking, cloud data center interconnects, fiber-to-the-home (FTTH) broadband engineering, and enterprise network design. As network backbones transition from megabit speeds to multi-gigabit throughput, telecommunications infrastructure and Ethernet standards (such as 1GbE, 10GbE, and 100GbE) express bandwidth in gigabits (Gb) and gigabits per second (Gbps).",
    "Under standard International System of Units (SI) decimal metric prefixes, 1 gigabit (Gb) represents exactly 1,000,000,000 bits (10⁹ bits, or 1,000 megabits). Consequently, to convert any bit quantity into decimal gigabits, divide the number of bits by 1,000,000,000 (or multiply by 10⁻⁹). For instance, a Gigabit Ethernet interface transmitting 1,000,000,000 bits per second achieves exactly 1 Gbps of physical line throughput.",
    "This technical reference explains the mathematics of the gigabit, clarifies the difference between gigabits (Gb) and gigabytes (GB), steps through worked calculations, and presents high-speed networking lookup tables."
  ],
  quickAnswer: {
    text: "To convert bits to gigabits, divide the number of bits by 1,000,000,000 (or multiply by 10⁻⁹). For example, 1,000,000,000 bits equals exactly 1 gigabit (1 Gb), and 10,000,000,000 bits equals 10 Gb.",
    formulaDisplay: "Gigabits (Gb) = Bits (b) ÷ 1,000,000,000",
    subtext: "1 Gigabit (Gb) = 1,000,000,000 Bits = 1,000 Megabits = 125,000,000 Bytes (125 MB)."
  },
  aboutSourceUnit: {
    title: "Understanding the Bit (b)",
    text: "A bit (symbol: b, short for binary digit) is the atomic, indivisible foundation of digital electronics and communications. It represents the smallest logical binary unit (0 or 1), transmitted across fiber-optic light pulses, high-frequency radio waves, and microchip traces."
  },
  aboutTargetUnit: {
    title: "Understanding the Gigabit (Gb)",
    text: "A gigabit (symbol: Gb or Gbit) is a decimal metric multiple of the bit equal to 1,000,000,000 bits (10⁹ b). Standardized by the SI system and IEEE, the gigabit is the universal metric for specifying fiber-optic broadband bandwidth, enterprise switch backplane capacity, and high-speed bus interfaces (such as PCIe and USB4)."
  },
  relationship: "Following the SI decimal prefix convention, 'giga-' represents a factor of one billion (10⁹). 1 gigabit contains 1,000 megabits, which equals 1,000,000,000 bits. Inversely, 1 bit represents one-billionth (0.000000001) of a gigabit.",
  relationshipTitle: "Bit to Gigabit Scaling Scale",
  relationshipItems: [
    { label: "1 Bit (b)", value: "= 0.000000001 Gb" },
    { label: "1,000,000 Bits (1 Mb)", value: "= 0.001000000 Gb" },
    { label: "100,000,000 Bits (Fast Ethernet)", value: "= 0.100000000 Gb" },
    { label: "1,000,000,000 Bits (1 Gb)", value: "= 1.000000000 Gb" },
    { label: "2,500,000,000 Bits (2.5GbE)", value: "= 2.500000000 Gb" },
    { label: "10,000,000,000 Bits (10GbE)", value: "= 10.000000000 Gb" }
  ],
  formula: {
    text: "Divide the bit value by 1,000,000,000 to convert to decimal gigabits.",
    math: "Quantity (Gb) = Quantity (b) ÷ 1,000,000,000",
    subtext: "Alternative formula: Quantity (Gb) = Quantity (b) × 10⁻⁹"
  },
  formulaTitle: "Bit to Gigabit Conversion Formula",
  practicalTip: {
    title: "Gigabit Fiber Download Speed Rule",
    text: "A 1 Gbps (Gigabit per second) residential fiber connection provides a theoretical maximum download rate of 125 Megabytes per second (125 MB/s). An entire 50 GB game can download in under 7 minutes on a full 1 Gbps link."
  },
  expertNote: {
    title: "Gigabit (Gb) vs Gigabyte (GB)",
    text: "1 Gigabit (Gb) = 1,000,000,000 bits = 125,000,000 bytes (0.125 GB). 1 Gigabyte (GB) = 1,000,000,000 bytes = 8,000,000,000 bits (8 Gb). A gigabyte is exactly 8 times larger than a gigabit."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Gigabit Ethernet Throughput Calculation",
        subtitle: "A network switch port transfers 5,000,000,000 bits of frame traffic over a 5-second sampling window. Express this total transfer in gigabits.",
        steps: [
          "State the bit count: 5,000,000,000 b.",
          "Apply conversion formula: Gb = 5,000,000,000 ÷ 1,000,000,000.",
          "Calculate: 5,000,000,000 ÷ 1,000,000,000 = 5.00 Gb.",
          "Result: 5,000,000,000 bits equals exactly 5 Gb (an average rate of 1 Gbps)."
        ]
      },
      {
        title: "Example 2: 10G Data Center Uplink Burst",
        subtitle: "An optical transceiver transmits a burst of 25,000,000,000 bits across a fiber link. Convert this burst to gigabits.",
        steps: [
          "State raw bits: 25,000,000,000 b.",
          "Divide by 1,000,000,000: 25,000,000,000 ÷ 1,000,000,000 = 25.00 Gb.",
          "Result: 25,000,000,000 bits equals exactly 25 Gb."
        ]
      },
      {
        title: "Example 3: PCIe 4.0 Lane Bandwidth",
        subtitle: "A single PCI Express 4.0 interconnect lane transfers 16,000,000,000 raw bit transitions per second (16 GT/s). Express this in gigabits per second.",
        steps: [
          "Identify bit rate: 16,000,000,000 b/s.",
          "Apply formula: Gbps = 16,000,000,000 ÷ 1,000,000,000.",
          "Calculate: 16,000,000,000 ÷ 1,000,000,000 = 16.00 Gbps.",
          "Result: The PCIe 4.0 lane transmits at 16 Gbps raw throughput."
        ]
      }
    ]
  },
  table: {
    title: "Bit to Gigabit Conversion Table",
    headers: ["Bits (b)", "Gigabits (Gb)", "Gigabytes (GB)", "High-Speed Networking Context"],
    rows: [
      { fromVal: "1,000,000,000 b", toVal: "1.000 Gb", extra: "0.125 GB", extra2: "Gigabit Ethernet (1000BASE-T) link throughput" },
      { fromVal: "2,000,000,000 b", toVal: "2.000 Gb", extra: "0.250 GB", extra2: "Dual-channel bonded gigabit broadband" },
      { fromVal: "2,500,000,000 b", toVal: "2.500 Gb", extra: "0.3125 GB", extra2: "2.5G Multi-Gigabit Ethernet (2.5GBASE-T)" },
      { fromVal: "5,000,000,000 b", toVal: "5.000 Gb", extra: "0.625 GB", extra2: "USB 3.0 (USB 3.2 Gen 1) 5 Gbps bus rate" },
      { fromVal: "10,000,000,000 b", toVal: "10.000 Gb", extra: "1.250 GB", extra2: "10G Optical Ethernet (10GBASE-LR) / USB 3.2 Gen 2" },
      { fromVal: "20,000,000,000 b", toVal: "20.000 Gb", extra: "2.500 GB", extra2: "USB 3.2 Gen 2x2 dual-lane link rate" },
      { fromVal: "25,000,000,000 b", toVal: "25.000 Gb", extra: "3.125 GB", extra2: "25GbE cloud datacenter server uplink" },
      { fromVal: "40,000,000,000 b", toVal: "40.000 Gb", extra: "5.000 GB", extra2: "Thunderbolt 3 / Thunderbolt 4 / 40GbE optical link" },
      { fromVal: "80,000,000,000 b", toVal: "80.000 Gb", extra: "10.000 GB", extra2: "Thunderbolt 5 / USB4 2.0 multi-lane speed" },
      { fromVal: "100,000,000,000 b", toVal: "100.000 Gb", extra: "12.500 GB", extra2: "100GbE data center core switch fabric" },
      { fromVal: "400,000,000,000 b", toVal: "400.000 Gb", extra: "50.000 GB", extra2: "400GbE hyper-scale cloud backbone trunk" }
    ]
  },
  applications: {
    title: "Practical Applications of Bit to Gigabit Conversion",
    items: [
      {
        title: "Enterprise Fiber & ISP Infrastructure",
        text: "Telecommunications engineers calculate trunk aggregation capacity in gigabits (Gbps) for DWDM fiber lines and dark fiber leases."
      },
      {
        title: "Data Center Switch Architecture",
        text: "Network architects calculate switch backplane switching capacity (Tbps/Gbps) from port serialization bit rates."
      },
      {
        title: "High-Speed Hardware Interconnects",
        text: "Computer hardware engineers specify PCIe, Thunderbolt, and HDMI bandwidth in gigabits per second based on differential clock rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing gigabits (Gb) with gigabytes (GB): 1 gigabit is 125 megabytes (0.125 GB), NOT 1 GB. Confusing Gb and GB leads to an 800% capacity error.",
      "Dividing by 1,073,741,824: Dividing by 1,073,741,824 computes binary gibibits (Gib), NOT decimal gigabits (Gb).",
      "Overlooking line encoding overhead: Protocols like 8b/10b or 128b/130b consume 2-20% of raw bit bandwidth for clock synchronization."
    ]
  },
  faqs: [
    {
      question: "How many bits are in 1 gigabit (Gb)?",
      answer: "There are exactly 1,000,000,000 bits in 1 decimal gigabit (10⁹ bits or 1,000 megabits)."
    },
    {
      question: "What is the formula to convert bits to gigabits?",
      answer: "The formula is: Gigabits (Gb) = Bits (b) ÷ 1,000,000,000 (or Bits × 10⁻⁹)."
    },
    {
      question: "What is the difference between a gigabit (Gb) and a gigabyte (GB)?",
      answer: "A gigabit (Gb) contains 1,000,000,000 bits (0.125 GB). A gigabyte (GB) contains 1,000,000,000 bytes (8,000,000,000 bits). 1 gigabyte is 8 times larger than 1 gigabit."
    },
    {
      question: "How many bytes are in 1 gigabit?",
      answer: "1 gigabit (1,000,000,000 bits) divided by 8 equals exactly 125,000,000 bytes (125 MB)."
    },
    {
      question: "How many gigabits are in 1 terabit (Tb)?",
      answer: "There are exactly 1,000 gigabits (Gb) in 1 terabit (Tb)."
    },
    {
      question: "How fast is a 1 Gbps Internet connection in megabytes per second?",
      answer: "A 1 Gbps connection transfers at a theoretical maximum speed of 125 MB/s (1,000 Mbps ÷ 8)."
    },
    {
      question: "What is the difference between Gb and Gib?",
      answer: "Gb (gigabit) is decimal (10⁹ = 1,000,000,000 bits). Gib (gibibit) is binary (2³⁰ = 1,073,741,824 bits)."
    },
    {
      question: "What is the symbol for gigabit?",
      answer: "The official symbol for gigabit is 'Gb' or 'Gbit'."
    }
  ],
  relatedList: [
    { label: "Bit to Byte", from: "bit", to: "byte" },
    { label: "Bit to Megabit", from: "bit", to: "megabit" },
    { label: "Bit to Kilobit", from: "bit", to: "kilobit" },
    { label: "Byte to Gigabit", from: "byte", to: "gigabit" },
    { label: "Bit to Megabyte (decimal)", from: "bit", to: "megabyte" }
  ],
  references: [
    "IEEE Std 802.3: IEEE Standard for Ethernet",
    "ISO/IEC 80000-13: Information Science and Technology",
    "PCI-SIG: PCI Express Base Specification"
  ]
};
