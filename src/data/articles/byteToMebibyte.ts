import { CustomArticleData } from "./types";

export const byteToMebibyte: CustomArticleData = {
  fromUnitId: "byte",
  toUnitId: "mebibyte",
  seoTitle: "Byte to Mebibyte Converter (B to MiB) - UnitsConvertors",
  metaDescription: "Convert bytes to mebibytes (B to MiB) instantly. Learn the binary formula (1 MiB = 1,048,576 B), RAM allocation tables, worked examples, and verified FAQs.",
  h1: "Byte to Mebibyte Converter",
  introduction: [
    "Converting digital memory capacity from bytes to mebibytes is an essential task in systems programming, Linux memory sizing, CPU cache design, cloud virtual machine provisioning, and software engineering. Computer architectures address volatile random-access memory (RAM) using binary address lines, causing memory modules to scale in powers of two rather than base-10 decimal units.",
    "Formally defined by the International Electrotechnical Commission (IEC 60027-2), 1 mebibyte (MiB) equals exactly 2²⁰ or 1,048,576 bytes (which equals 1,024 kibibytes). To convert bytes to mebibytes, divide the total number of bytes by 1,048,576. For instance, a 16,777,216-byte memory allocation equals exactly 16 MiB.",
    "This comprehensive reference clarifies the mathematical difference between binary mebibytes (MiB) and decimal megabytes (MB), demonstrates step-by-step calculations, and provides memory reference tables for developers and system architects."
  ],
  quickAnswer: {
    text: "To convert bytes to mebibytes, divide the number of bytes by 1,048,576 (or multiply by 9.536743 × 10⁻⁷). For example, 1,048,576 bytes equals exactly 1 MiB, and 104,857,600 bytes equals exactly 100 MiB.",
    formulaDisplay: "Mebibytes (MiB) = Bytes (B) ÷ 1,048,576",
    subtext: "1 Mebibyte (MiB) = 1,048,576 Bytes = 1,024 KiB = 8,388,608 Bits."
  },
  aboutSourceUnit: {
    title: "Understanding the Byte (B)",
    text: "A byte (symbol: B) is the fundamental unit of digital data in modern computer systems, consisting of 8 binary digits (bits). It serves as the baseline addressing unit for software variables, processor registers, file systems, and network communication buffers."
  },
  aboutTargetUnit: {
    title: "Understanding the Mebibyte (MiB)",
    text: "A mebibyte (symbol: MiB) is a binary data storage unit equal to 2²⁰ (1,048,576) bytes. Created by the IEC in 1998, the prefix 'mebi' represents 'mega-binary'. It is the standard unit for expressing physical RAM capacity, GPU VRAM sizes, and OS kernel buffer pools."
  },
  relationship: "Because binary computer memory doubles with every address bit added, memory units scale by powers of 1,024 (2¹⁰). 1 mebibyte contains 1,024 kibibytes, which equals 1,048,576 bytes. Conversely, 1 byte represents 1/1,048,576 ≈ 0.000000953674 MiB. A binary mebibyte is approximately 4.86% larger than a decimal megabyte (1,000,000 bytes).",
  relationshipTitle: "Binary Storage Multiples Comparison",
  relationshipItems: [
    { label: "1 Byte (B)", value: "= 8 Bits (b)" },
    { label: "1,024 Bytes (1 KiB)", value: "= 0.00097656 MiB" },
    { label: "1,000,000 Bytes (1 MB)", value: "= 0.953674 MiB" },
    { label: "1,048,576 Bytes (2²⁰ B)", value: "= 1.000000 MiB" },
    { label: "16,777,216 Bytes (16 × 2²⁰ B)", value: "= 16.000000 MiB" },
    { label: "1,073,741,824 Bytes (1 GiB)", value: "= 1,024.000000 MiB" }
  ],
  formula: {
    text: "Divide the byte quantity by 1,048,576 to convert to binary mebibytes.",
    math: "Capacity (MiB) = Capacity (B) ÷ 1,048,576",
    subtext: "Equivalent: Capacity (MiB) = Capacity (B) ÷ (1,024 × 1,024)"
  },
  formulaTitle: "Byte to Mebibyte Conversion Formula",
  practicalTip: {
    title: "Linux Memory Sizing Convention",
    text: "In Linux system utilities (such as 'free -m', 'top', or /proc/meminfo), memory amounts are calculated using binary multiples (dividing by 1,048,576). Even when labeled as 'MB', Linux utilities report true binary mebibytes (MiB)."
  },
  expertNote: {
    title: "The 4.86% Gap Between MiB and MB",
    text: "1 Megabyte (MB) = 1,000,000 bytes (SI decimal). 1 Mebibyte (MiB) = 1,048,576 bytes (IEC binary). This 48,576-byte difference (4.86%) causes an apparent loss of capacity when operating systems report a 100 MB decimal file as 95.37 MiB."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: CPU Level 3 (L3) Cache Calculation",
        subtitle: "A high-performance workstation processor contains an L3 cache buffer of 33,554,432 bytes. Convert this cache size to mebibytes.",
        steps: [
          "Identify the given byte size: 33,554,432 B.",
          "Apply the conversion formula: MiB = 33,554,432 ÷ 1,048,576.",
          "Perform calculation: 33,554,432 ÷ 1,048,576 = 32.00 MiB.",
          "Result: 33,554,432 bytes corresponds to exactly 32 MiB of CPU cache."
        ]
      },
      {
        title: "Example 2: Java Virtual Machine (JVM) Heap Allocation",
        subtitle: "A developer allocates a maximum heap space of 536,870,912 bytes for a microservice container. Express this in MiB.",
        steps: [
          "State the byte allocation: 536,870,912 B.",
          "Divide by 1,048,576: 536,870,912 ÷ 1,048,576 = 512.00 MiB.",
          "Result: The microservice heap is allocated 512 MiB (equivalent to 0.5 GiB)."
        ]
      },
      {
        title: "Example 3: Converting a 100-Million-Byte Media File",
        subtitle: "A video file measures exactly 100,000,000 bytes on a storage drive. Convert this size to mebibytes.",
        steps: [
          "State the decimal byte size: 100,000,000 B (100 MB).",
          "Apply formula: MiB = 100,000,000 ÷ 1,048,576.",
          "Calculate: 100,000,000 ÷ 1,048,576 = 95.36743 MiB.",
          "Result: A 100 MB file occupies approximately 95.37 MiB in binary storage."
        ]
      }
    ]
  },
  table: {
    title: "Byte to Mebibyte Conversion Table",
    headers: ["Bytes (B)", "Mebibytes (MiB)", "Decimal Megabytes (MB)", "Computing & Architecture Example"],
    rows: [
      { fromVal: "1,048,576 B", toVal: "1.000 MiB", extra: "1.049 MB", extra2: "Base binary mebibyte unit (2²⁰ bytes)" },
      { fromVal: "2,097,152 B", toVal: "2.000 MiB", extra: "2.097 MB", extra2: "Linux 'HugePages' standard memory page size" },
      { fromVal: "4,194,304 B", toVal: "4.000 MiB", extra: "4.194 MB", extra2: "Standard BIOS / UEFI firmware flash chip size" },
      { fromVal: "8,388,608 B", toVal: "8.000 MiB", extra: "8.389 MB", extra2: "Level 3 CPU cache block per core group" },
      { fromVal: "16,777,216 B", toVal: "16.000 MiB", extra: "16.777 MB", extra2: "Legacy 24-bit direct memory addressing limit" },
      { fromVal: "33,554,432 B", toVal: "32.000 MiB", extra: "33.554 MB", extra2: "Modern high-end desktop CPU shared L3 cache" },
      { fromVal: "67,108,864 B", toVal: "64.000 MiB", extra: "67.109 MB", extra2: "Embedded router volatile system RAM" },
      { fromVal: "134,217,728 B", toVal: "128.000 MiB", extra: "134.218 MB", extra2: "Standard cloud serverless function memory limit" },
      { fromVal: "268,435,456 B", toVal: "256.000 MiB", extra: "268.435 MB", extra2: "Typical Docker container base memory quota" },
      { fromVal: "536,870,912 B", toVal: "512.000 MiB", extra: "536.871 MB", extra2: "0.5 GiB / half-gigabyte RAM stick capacity" },
      { fromVal: "1,073,741,824 B", toVal: "1,024.000 MiB", extra: "1,073.742 MB", extra2: "1 Gibibyte (1 GiB / 2³⁰ bytes)" }
    ]
  },
  applications: {
    title: "Practical Applications of Byte to Mebibyte Conversion",
    items: [
      {
        title: "Cloud Infrastructure & Container Quotas",
        text: "Kubernetes pod manifests and AWS Lambda configurations require memory requests and limits expressed in mebibytes (Mi) to allocate node RAM accurately."
      },
      {
        title: "System Performance Profiling",
        text: "Database administrators configure buffer cache pools (e.g., PostgreSQL shared_buffers, MySQL innodb_buffer_pool_size) in MiB based on total physical memory bytes."
      },
      {
        title: "Firmware and Graphics Buffer Design",
        text: "Graphics software engineers allocate frame buffers and texture memory in discrete mebibyte chunks to match GPU memory architecture."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming 1 MB equals 1 MiB: 1 MB is 1,000,000 bytes, while 1 MiB is 1,048,576 bytes. Confusing them introduces a 4.86% error.",
      "Dual division omission: Converting bytes to KiB requires dividing by 1,024; converting bytes to MiB requires dividing by 1,024 twice (1,048,576).",
      "Network bandwidth vs memory storage: Network speeds quoted in Mbps (megabits per second) must be divided by 8 to get MB/s, and then converted to MiB/s."
    ]
  },
  faqs: [
    {
      question: "How many bytes are in 1 mebibyte (MiB)?",
      answer: "There are exactly 1,048,576 bytes in 1 mebibyte (equal to 2²⁰ bytes or 1,024 kibibytes)."
    },
    {
      question: "What is the formula to convert bytes to mebibytes?",
      answer: "The formula is: Mebibytes (MiB) = Bytes (B) ÷ 1,048,576."
    },
    {
      question: "How does a mebibyte (MiB) differ from a megabyte (MB)?",
      answer: "A megabyte (MB) is a decimal unit equal to 1,000,000 bytes (10⁶ B). A mebibyte (MiB) is a binary unit equal to 1,048,576 bytes (2²⁰ B). 1 MiB is approximately 4.86% larger than 1 MB."
    },
    {
      question: "How many mebibytes are in 1,000,000,000 bytes (1 GB)?",
      answer: "1,000,000,000 bytes divided by 1,048,576 equals approximately 953.67 MiB."
    },
    {
      question: "Why do operating systems show less memory than advertised?",
      answer: "Storage manufacturers label drives using decimal gigabytes (1 GB = 1,000,000,000 bytes), but operating systems like Windows calculate capacity in binary GiB/MiB (dividing by 1,048,576)."
    },
    {
      question: "How many mebibytes make 1 gibibyte (GiB)?",
      answer: "There are exactly 1,024 mebibytes (MiB) in 1 gibibyte (GiB), which equals 1,073,741,824 bytes."
    },
    {
      question: "How many kibibytes are in one mebibyte?",
      answer: "There are exactly 1,024 kibibytes (KiB) in 1 mebibyte (MiB)."
    },
    {
      question: "What is the symbol for a mebibyte?",
      answer: "The official IEC and IEEE symbol for a mebibyte is 'MiB'."
    }
  ],
  relatedList: [
    { label: "Byte to Kibibyte", from: "byte", to: "kibibyte" },
    { label: "Byte to Gibibyte", from: "byte", to: "gibibyte" },
    { label: "Byte to Megabyte (decimal)", from: "byte", to: "megabyte" },
    { label: "Byte to Kilobyte (decimal)", from: "byte", to: "kilobyte" },
    { label: "Byte to Tebibyte", from: "byte", to: "tebibyte" }
  ],
  references: [
    "IEC 60027-2: Letter Symbols to be Used in Electrical Technology — Binary Multiples",
    "IEEE Std 1541-2002: Standard for Prefixes for Binary Multiples",
    "NIST: The International System of Units (SI) — Binary Prefixes"
  ]
};
