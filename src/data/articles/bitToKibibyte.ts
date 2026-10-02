import { CustomArticleData } from "./types";

export const bitToKibibyte: CustomArticleData = {
  fromUnitId: "bit",
  toUnitId: "kibibyte",
  seoTitle: "Bit to Kibibyte Converter (b to KiB) - Binary Storage",
  metaDescription: "Convert bits to binary kibibytes (b to KiB) with exact IEC accuracy. Learn the 8,192 bits formula, microcontroller memory math, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/bit-to-kibibyte",
  h1: "Bit to Kibibyte Converter",
  introduction: [
    "Converting digital data from individual binary bits to kibibytes (KiB) is an essential low-level calculation in embedded systems programming, microcontroller firmware development, operating system kernel memory management, and compiler architecture. While decimal metric prefixes scale by powers of 10, digital memory chips, registers, and cache lines are structured fundamentally in powers of two.",
    "To resolve historical confusion between decimal prefixes (where kilo = 1,000) and binary computing conventions (where 1,024 was used), the International Electrotechnical Commission (IEC) established the binary prefix 'kibi-' (contraction of 'kilo-binary') in 1998 under IEC 60027-2 (now IEC 80000-13). One kibibyte equals exactly 2¹⁰ bytes, which is 1,024 bytes. Because every byte contains 8 bits, one kibibyte contains exactly 1,024 × 8 = 8,192 bits.",
    "This technical guide explains the binary conversion formula, provides a microcontroller memory and packet lookup table, walks through step-by-step worked calculations, clarifies the difference between KiB and KB, and answers common low-level computing questions."
  ],
  quickAnswer: {
    text: "To convert bits to kibibytes (KiB), divide the number of bits by 8,192 (or multiply by 0.0001220703125). For example, 8,192 bits equal exactly 1 KiB, 16,384 bits equal 2 KiB, and 65,536 bits equal 8 KiB.",
    formulaDisplay: "Kibibytes (KiB) = Bits (b) ÷ 8,192",
    subtext: "1 Kibibyte (KiB) = 1,024 Bytes = 8,192 Bits = 2¹³ Bits. Exactly 2.4% larger than a decimal kilobyte (KB)."
  },
  aboutSourceUnit: {
    title: "Understanding the Bit (b)",
    text: "A bit (symbol: b, contraction of binary digit) is the atomic, indivisible foundation of digital electronics and communications. It represents the smallest logical binary unit (0 or 1), encoded in hardware via semiconductor transistor gate states, magnetic polarity, or optical pulses."
  },
  aboutTargetUnit: {
    title: "Understanding the Kibibyte (KiB)",
    text: "The kibibyte (symbol: KiB) is an IEC standard binary unit of digital information equal to 2¹⁰ bytes (1,024 bytes). Standardized by the IEC and IEEE, it describes memory allocations that naturally align with binary addressing architectures (such as SRAM, EEPROM, and CPU L1 cache)."
  },
  relationship: "Because 1 byte contains 8 bits and 1 kibibyte contains 1,024 bytes (2¹⁰ B), multiplying 1,024 by 8 shows that exactly 8,192 bits make up 1 kibibyte (2¹³ bits). Inversely, 1 bit represents 1 ÷ 8,192 ≈ 0.0001220703125 KiB.",
  relationshipTitle: "Bit to Kibibyte Binary Scaling Hierarchy",
  relationshipItems: [
    { label: "1 Bit (b)", value: "= 0.000122070 KiB (1 ÷ 8,192 KiB)" },
    { label: "8 Bits (1 Byte)", value: "= 0.0009765625 KiB (1 ÷ 1,024 KiB)" },
    { label: "1,024 Bits (128 Bytes)", value: "= 0.125 KiB (1/8 KiB)" },
    { label: "8,192 Bits (2¹³ b)", value: "= 1.000 KiB (1,024 Bytes)" },
    { label: "16,384 Bits", value: "= 2.000 KiB (2,048 Bytes)" },
    { label: "65,536 Bits (2¹⁶ b)", value: "= 8.000 KiB (8,192 Bytes - Microcontroller SRAM)" }
  ],
  formula: {
    text: "Divide the bit value by 8,192 (or divide by 8 to get bytes, then divide by 1,024) to find kibibytes.",
    math: "KiB = bits / 8192",
    subtext: "Alternative formula: KiB = bits × 0.0001220703125"
  },
  formulaTitle: "Bit to Kibibyte (Binary) Conversion Formula",
  practicalTip: {
    title: "The 8K Bit Mental Shortcut",
    text: "Remember that 1 KiB is roughly 8,000 bits (exact: 8,192 bits). For fast estimations in firmware reviews, dividing the bit count by 8,000 gives an estimate accurate to within 2.4%."
  },
  expertNote: {
    title: "Kibibyte (KiB) vs Kilobyte (KB)",
    text: "Always distinguish binary kibibytes (KiB) from decimal kilobytes (KB). 1 KB = 10³ bytes = 1,000 bytes = 8,000 bits. 1 KiB = 2¹⁰ bytes = 1,024 bytes = 8,192 bits. A kibibyte is exactly 24 bytes (192 bits, or 2.4%) larger than a decimal kilobyte."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Microcontroller EEPROM Capacity",
        subtitle: "An automotive sensor microcontroller specifies 262,144 bits of non-volatile EEPROM memory. Convert this to kibibytes.",
        steps: [
          "State the bit count: 262,144 bits.",
          "Apply the formula: KiB = 262,144 ÷ 8,192.",
          "Calculate: 262,144 ÷ 8,192 = 32 KiB.",
          "Result: 262,144 bits equals exactly 32 kibibytes (32 KiB, or 32,768 bytes)."
        ]
      },
      {
        title: "Example 2: CPU L1 Instruction Cache Size",
        subtitle: "A micro-architecture execution core has an L1 instruction cache holding 524,288 bits. Convert to KiB.",
        steps: [
          "State the bit count: 524,288 bits.",
          "Divide by 8,192: 524,288 ÷ 8,192 = 64 KiB.",
          "Result: 524,288 bits equals exactly 64 kibibytes (65,536 bytes)."
        ]
      },
      {
        title: "Example 3: Ethernet Frame Buffer Memory",
        subtitle: "Convert 131,072 bits of router packet buffer memory into kibibytes.",
        steps: [
          "State the count: 131,072 bits.",
          "Calculate: 131,072 ÷ 8,192 = 16 KiB.",
          "Result: 131,072 bits equals exactly 16 kibibytes."
        ]
      }
    ]
  },
  table: {
    title: "Bit to Kibibyte (Binary) Conversion Table",
    headers: ["Bits (b)", "Kibibytes (KiB)", "Bytes (B)", "Embedded & Hardware Context"],
    rows: [
      { fromVal: "1,024 b", toVal: "0.125 KiB", extra: "128 B", extra2: "Small sensor serial buffer" },
      { fromVal: "2,048 b", toVal: "0.250 KiB", extra: "256 B", extra2: "Standard I2C EEPROM device" },
      { fromVal: "4,096 b", toVal: "0.500 KiB", extra: "512 B", extra2: "Classic disk sector size" },
      { fromVal: "8,192 b", toVal: "1.000 KiB", extra: "1,024 B", extra2: "1 Kibibyte baseline (2¹⁰ bytes)" },
      { fromVal: "16,384 b", toVal: "2.000 KiB", extra: "2,048 B", extra2: "Arduino Uno internal SRAM capacity" },
      { fromVal: "32,768 b", toVal: "4.000 KiB", extra: "4,096 B", extra2: "Standard x86 virtual memory page size" },
      { fromVal: "65,536 b", toVal: "8.000 KiB", extra: "8,192 B", extra2: "8 KiB MCU flash block" },
      { fromVal: "131,072 b", toVal: "16.000 KiB", extra: "16,384 B", extra2: "ARM Cortex-M0+ cache line" },
      { fromVal: "262,144 b", toVal: "32.000 KiB", extra: "32,768 B", extra2: "L1 data cache in modern CPU cores" },
      { fromVal: "524,288 b", toVal: "64.000 KiB", extra: "65,536 B", extra2: "High-performance microchip SRAM" },
      { fromVal: "1,048,576 b", toVal: "128.000 KiB", extra: "131,072 B", extra2: "Bootloader flash memory partition" },
      { fromVal: "8,388,608 b", toVal: "1,024.000 KiB", extra: "1,048,576 B", extra2: "1 Mebibyte (1 MiB binary benchmark)" }
    ]
  },
  applications: {
    title: "Practical Applications of Bit to KiB Conversion",
    items: [
      {
        title: "Embedded Firmware and Microcontroller Memory Budgeting",
        text: "Firmware engineers convert memory allocation specs from register bit counts into kibibytes to ensure code fits within strict on-chip SRAM and flash limits."
      },
      {
        title: "Operating System Kernel Page Allocation",
        text: "Kernel developers calculate virtual memory page table entries by converting bitfield sizes into 4 KiB or 2 MiB page sizes."
      },
      {
        title: "Digital Signal Processing (DSP) Buffer Design",
        text: "Audio DSP programmers calculate raw PCM sample bit buffers to verify memory alignment with binary hardware DMA (Direct Memory Access) channels."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing by 8,000 instead of 8,192: Dividing by 8,000 yields decimal kilobytes (KB), not binary kibibytes (KiB). This introduces a 2.4% error that can cause memory buffer overflows.",
      "Forgetting to divide by 8: Dividing only by 1,024 converts bits to kibibits (Kib), not kibibytes (KiB). A kibibyte is 8 times larger than a kibibit.",
      "Confusing KiB and KB symbols: KiB (with an 'i') is binary 1,024 bytes, while KB is decimal 1,000 bytes. Standard IEC terminology prevents ambiguous engineering specifications."
    ]
  },
  faqs: [
    {
      question: "How many bits are in 1 kibibyte (KiB)?",
      answer: "There are exactly 8,192 bits in 1 kibibyte (1,024 bytes × 8 bits per byte = 8,192 bits, or 2¹³ bits)."
    },
    {
      question: "What is the formula to convert bits to kibibytes?",
      answer: "The formula is: kibibytes = bits ÷ 8,192 (or KiB = bits × 0.0001220703125)."
    },
    {
      question: "How do I convert kibibytes back to bits?",
      answer: "Multiply the kibibyte value by 8,192. For example, 4 KiB × 8,192 = 32,768 bits."
    },
    {
      question: "What is the difference between a kilobyte (KB) and a kibibyte (KiB)?",
      answer: "A kilobyte (KB) is decimal (10³ = 1,000 bytes = 8,000 bits), while a kibibyte (KiB) is binary (2¹⁰ = 1,024 bytes = 8,192 bits). A kibibyte is exactly 2.4% larger than a kilobyte."
    },
    {
      question: "How many kibibytes is 65,536 bits?",
      answer: "65,536 bits ÷ 8,192 = 8 kibibytes (8 KiB, or 8,192 bytes)."
    },
    {
      question: "Why was the kibibyte created by the IEC?",
      answer: "The IEC introduced 'kibibyte' in 1998 to eliminate confusion caused by using the SI decimal prefix 'kilo-' (1,000) for binary multiples (1,024)."
    },
    {
      question: "How many bytes are in 1 KiB?",
      answer: "There are exactly 1,024 bytes in 1 kibibyte (2¹⁰ bytes)."
    },
    {
      question: "How many kibibytes are in 1 mebibyte (MiB)?",
      answer: "There are exactly 1,024 kibibytes in 1 mebibyte (1 MiB = 1,024 KiB = 1,048,576 bytes)."
    }
  ],
  relatedList: [
    { label: "Kibibyte to Bit", from: "kibibyte", to: "bit" },
    { label: "Bit to Kilobyte", from: "bit", to: "kilobyte" },
    { label: "Bit to Mebibyte", from: "bit", to: "mebibyte" },
    { label: "Bit to Byte", from: "bit", to: "byte" },
    { label: "Kibibyte to Kilobyte", from: "kibibyte", to: "kilobyte" }
  ],
  references: [
    "IEC 80000-13:2008 Quantities and units — Part 13: Information science and technology.",
    "IEEE Std 1541-2002 - Standards for Prefixes for Binary Multiples.",
    "NIST Reference on Constants, Units, and Uncertainty: Prefixes for Binary Multiples."
  ]
};
