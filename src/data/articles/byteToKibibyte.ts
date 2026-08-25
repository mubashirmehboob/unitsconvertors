import { CustomArticleData } from "./types";

export const byteToKibibyte: CustomArticleData = {
  fromUnitId: "byte",
  toUnitId: "kibibyte",
  seoTitle: "Byte to Kibibyte Converter (B to KiB) - UnitsConvertors",
  metaDescription: "Convert bytes to kibibytes (B to KiB) accurately. Learn the binary conversion formula (1 KiB = 1,024 B), OS memory allocation tables, and FAQs.",
  h1: "Byte to Kibibyte Converter",
  introduction: [
    "Converting digital storage capacity from bytes to kibibytes is a fundamental calculation in operating system memory management, CPU cache sizing, filesystem cluster allocation, and low-level software engineering. While metric decimal units like kilobytes (1,000 bytes) are widely used in network engineering and storage marketing, computer architecture relies natively on powers of two, making the kibibyte (1,024 bytes) the precise binary standard.",
    "Formally established by the International Electrotechnical Commission (IEC 60027-2) in 1998 and ratified by IEEE 1541, 1 kibibyte (KiB) represents exactly 2¹⁰ or 1,024 bytes. To convert bytes to kibibytes, divide the total byte count by 1,024 (or multiply by 0.0009765625). For example, a 4,096-byte disk sector equals exactly 4 KiB.",
    "This guide explains the binary mathematics of the kibibyte, clarifies the critical distinction between IEC kibibytes (KiB) and SI kilobytes (KB), provides step-by-step worked calculations, and presents memory allocation reference tables."
  ],
  quickAnswer: {
    text: "To convert bytes to kibibytes, divide the number of bytes by 1,024 (or multiply by 0.0009765625). For example, 2,048 bytes equals exactly 2 KiB, and 4,096 bytes equals exactly 4 KiB.",
    formulaDisplay: "Kibibytes (KiB) = Bytes (B) ÷ 1,024",
    subtext: "1 Kibibyte (KiB) = 1,024 Bytes = 8,192 Bits (1 B = 0.0009765625 KiB)."
  },
  aboutSourceUnit: {
    title: "Understanding the Byte (B)",
    text: "A byte (symbol: B) is the standard fundamental unit of digital information in computer systems, composed of 8 contiguous bits. Originally sized to encode a single ASCII character, the byte represents the smallest addressable unit of memory in modern computer microarchitectures."
  },
  aboutTargetUnit: {
    title: "Understanding the Kibibyte (KiB)",
    text: "A kibibyte (symbol: KiB) is a binary unit of digital information capacity equal to 2¹⁰ or exactly 1,024 bytes (8,192 bits). The prefix 'kibi' is a portmanteau of 'kilo' and 'binary', standardized by the IEC to unambiguously distinguish binary increments (1,024) from decimal metric prefixes (1,000)."
  },
  relationship: "Because computer hardware addresses memory via binary addressing lines, memory structures grow in powers of two (2¹⁰ = 1,024). 1 kibibyte contains exactly 1,024 bytes. Inversely, 1 byte represents 1/1,024 ≈ 0.0009765625 kibibytes. This 2.4% difference distinguishes binary kibibytes from decimal kilobytes (1,000 bytes).",
  relationshipTitle: "Binary Memory Scale Hierarchy",
  relationshipItems: [
    { label: "1 Byte (B)", value: "= 8 Bits (b)" },
    { label: "512 Bytes (legacy disk sector)", value: "= 0.5 KiB (512 B)" },
    { label: "1,024 Bytes (2¹⁰ B)", value: "= 1.00 KiB" },
    { label: "4,096 Bytes (modern 4K sector)", value: "= 4.00 KiB" },
    { label: "65,536 Bytes (64 KB / 16-bit space)", value: "= 64.00 KiB" },
    { label: "1,048,576 Bytes (2²⁰ B)", value: "= 1,024 KiB = 1 MiB" }
  ],
  formula: {
    text: "Divide the total number of bytes by 1,024 to determine the equivalent capacity in kibibytes.",
    math: "Capacity (KiB) = Capacity (B) ÷ 1,024",
    subtext: "Alternative formula: Capacity (KiB) = Capacity (B) × 0.0009765625"
  },
  formulaTitle: "Byte to Kibibyte Conversion Formula",
  practicalTip: {
    title: "The 4K Sector and Page Rule",
    text: "In modern operating systems (Linux, Windows, macOS), the standard virtual memory page size and Advanced Format hard drive sector size is 4,096 bytes, which corresponds to exactly 4 KiB. Multiples of 4,096 always divide cleanly into whole kibibytes."
  },
  expertNote: {
    title: "Kibibyte (KiB) vs Kilobyte (KB)",
    text: "Always distinguish between the two standards: 1 Kilobyte (KB) = 1,000 Bytes (decimal SI standard, used in networking and disk marketing), whereas 1 Kibibyte (KiB) = 1,024 Bytes (binary IEC standard, used in RAM architectures and operating system memory allocations). 1 KiB is 2.4% larger than 1 KB."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Operating System Page Size Allocation",
        subtitle: "A microkernel allocates a memory page buffer of 16,384 bytes. Convert this buffer size to kibibytes.",
        steps: [
          "State the given byte capacity: Capacity = 16,384 B.",
          "Apply the conversion formula: KiB = 16,384 ÷ 1,024.",
          "Perform the division: 16,384 ÷ 1,024 = 16.00 KiB.",
          "Result: 16,384 bytes equals exactly 16 KiB (equivalent to four 4 KiB memory pages)."
        ]
      },
      {
        title: "Example 2: Embedded Microcontroller SRAM Capacity",
        subtitle: "An ARM Cortex-M0 microcontroller has an integrated SRAM size of 32,768 bytes. Express this in kibibytes.",
        steps: [
          "State the initial byte count: Capacity = 32,768 B.",
          "Divide by 1,024: 32,768 ÷ 1,024 = 32.00 KiB.",
          "Result: 32,768 bytes equals exactly 32 KiB of RAM."
        ]
      },
      {
        title: "Example 3: Ethernet Frame MTU Buffer",
        subtitle: "A standard Ethernet network interface uses a Maximum Transmission Unit (MTU) of 1,500 bytes. Find its capacity in KiB.",
        steps: [
          "State the given byte size: MTU = 1,500 B.",
          "Apply the equation: KiB = 1,500 ÷ 1,024.",
          "Calculate: 1,500 ÷ 1,024 = 1.46484375 KiB.",
          "Result: 1,500 bytes equals approximately 1.465 KiB (or exactly 1.5 KB decimal)."
        ]
      }
    ]
  },
  table: {
    title: "Byte to Kibibyte Conversion Table",
    headers: ["Bytes (B)", "Kibibytes (KiB)", "Decimal Kilobytes (KB)", "Computing Hardware Context"],
    rows: [
      { fromVal: "512 B", toVal: "0.50 KiB", extra: "0.512 KB", extra2: "Legacy Master Boot Record (MBR) / disk sector" },
      { fromVal: "1,000 B", toVal: "0.977 KiB", extra: "1.000 KB", extra2: "1 decimal Kilobyte (SI metric standard)" },
      { fromVal: "1,024 B", toVal: "1.000 KiB", extra: "1.024 KB", extra2: "1 binary Kibibyte (2¹⁰ bytes)" },
      { fromVal: "2,048 B", toVal: "2.000 KiB", extra: "2.048 KB", extra2: "Standard optical CD-ROM sector data payload" },
      { fromVal: "4,096 B", toVal: "4.000 KiB", extra: "4.096 KB", extra2: "Standard x86 virtual memory page & 4Kn drive sector" },
      { fromVal: "8,192 B", toVal: "8.000 KiB", extra: "8.192 KB", extra2: "Database block size (PostgreSQL default page)" },
      { fromVal: "16,384 B", toVal: "16.000 KiB", extra: "16.384 KB", extra2: "Level 1 (L1) CPU data cache buffer" },
      { fromVal: "32,768 B", toVal: "32.000 KiB", extra: "32.768 KB", extra2: "Standard L1 instruction cache size per core" },
      { fromVal: "65,536 B", toVal: "64.000 KiB", extra: "65.536 KB", extra2: "Maximum payload of a standard IPv4 packet" },
      { fromVal: "1,048,576 B", toVal: "1,024.000 KiB", extra: "1,048.58 KB", extra2: "1 binary Mebibyte (1 MiB / 2²⁰ bytes)" }
    ]
  },
  applications: {
    title: "Practical Applications of Byte to Kibibyte Conversion",
    items: [
      {
        title: "Operating System Kernel & Memory Management",
        text: "Kernel engineers calculate page table allocations and stack memory boundaries in whole kibibyte increments based on byte-aligned CPU architectures."
      },
      {
        title: "Filesystem & Storage Block Formatting",
        text: "System administrators formatting NTFS, ext4, or ZFS volumes specify cluster and record sizes in KiB (e.g., 4 KiB, 64 KiB, 128 KiB) to optimize disk I/O throughput."
      },
      {
        title: "Embedded Firmware & Microcontroller Programming",
        text: "Firmware developers optimize flash memory sectors and heap allocations against strict microcontroller byte limits expressed in KiB."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of 1,024: Using the decimal factor calculates decimal Kilobytes (KB) rather than binary Kibibytes (KiB), creating a 2.4% discrepancy.",
      "Confusing bits and bytes: A byte has 8 bits. Dividing raw bits by 1,024 yields kibibits (Kib), not kibibytes (KiB).",
      "Ambiguous OS labeling: Microsoft Windows traditionally displays 'KB' in File Explorer while mathematically dividing by 1,024 (calculating KiB)."
    ]
  },
  faqs: [
    {
      question: "How many bytes are in 1 kibibyte (KiB)?",
      answer: "There are exactly 1,024 bytes in 1 kibibyte (equal to 2¹⁰ bytes or 8,192 bits)."
    },
    {
      question: "What is the formula to convert bytes to kibibytes?",
      answer: "The formula is: Kibibytes (KiB) = Bytes (B) ÷ 1,024 (or Bytes × 0.0009765625)."
    },
    {
      question: "What is the difference between a kilobyte (KB) and a kibibyte (KiB)?",
      answer: "A kilobyte (KB) is based on the decimal metric system and equals 1,000 bytes (10³ B). A kibibyte (KiB) is based on the binary system and equals 1,024 bytes (2¹⁰ B). 1 KiB is exactly 2.4% larger than 1 KB."
    },
    {
      question: "Why do computers use 1,024 instead of 1,000?",
      answer: "Computers use binary logic (base-2) where memory addressing occurs in powers of 2. 2¹⁰ equals 1,024, which is the closest binary power to 1,000."
    },
    {
      question: "How many kibibytes are in 4,096 bytes?",
      answer: "4,096 bytes divided by 1,024 equals exactly 4 KiB (a standard OS memory page and disk cluster size)."
    },
    {
      question: "How many kibibytes make 1 mebibyte (MiB)?",
      answer: "There are exactly 1,024 kibibytes (KiB) in 1 mebibyte (MiB), which equals 1,048,576 bytes."
    },
    {
      question: "How many KiB is 1,000 bytes?",
      answer: "1,000 bytes divided by 1,024 equals approximately 0.97656 KiB."
    },
    {
      question: "What does KiB stand for?",
      answer: "KiB stands for 'kibibyte', which is short for 'kilo-binary byte', standardized by the IEC in 1998."
    }
  ],
  relatedList: [
    { label: "Byte to Mebibyte", from: "byte", to: "mebibyte" },
    { label: "Byte to Kilobyte (decimal)", from: "byte", to: "kilobyte" },
    { label: "Byte to Bit", from: "byte", to: "bit" },
    { label: "Byte to Gibibyte", from: "byte", to: "gibibyte" },
    { label: "Byte to Megabyte (decimal)", from: "byte", to: "megabyte" }
  ],
  references: [
    "IEC 60027-2: Letter Symbols to be Used in Electrical Technology — Telecommunications and Electronics",
    "IEEE Std 1541-2002: Standard for Prefixes for Binary Multiples",
    "NIST Reference on Constants, Units, and Uncertainty: Prefixes for Binary Multiples"
  ]
};
