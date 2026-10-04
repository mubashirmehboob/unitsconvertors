import { CustomArticleData } from "./types";

export const mbpsToKbpsArticle: CustomArticleData = {
  fromUnitId: "Mbps",
  toUnitId: "kbps",
  seoTitle: "Mbps to Kbps Converter (Megabits/sec to Kilobits/sec) | UnitsConvertors.com",
  metaDescription: "Convert megabits per second to kilobits per second (Mbps to Kbps) instantly. Learn the exact 1 Mbps = 1,000 Kbps formula, streaming video encoder examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/data-transfer/mbps-to-kbps",
  h1: "Mbps to Kbps Converter",
  introduction: [
    "Converting megabits per second (Mbps or Mb/s) to kilobits per second (Kbps or kb/s) is one of the most frequent calculations in live video broadcasting, multimedia encoding, and network bandwidth management. While internet service providers (ISPs) advertise residential and commercial bandwidth in megabits per second, video streaming encoders (such as OBS Studio, FFmpeg, and hardware capture cards) and audio codecs require bitrate parameters to be configured in kilobits per second.",
    "Under international data transmission standards (IEC 80000-13 and SI decimal prefixes), the mega prefix represents one million ($10^6$) and the kilo prefix represents one thousand ($10^3$). Because both units measure binary bits per second, their relationship is governed by an exact factor of 1,000: exactly one thousand kilobits per second make up one megabit per second. Mastering this conversion ensures seamless broadcast streaming, crisp video quality, and zero dropped frames."
  ],
  quickAnswer: {
    text: "To convert megabits per second (Mbps) to kilobits per second (Kbps), multiply the Mbps value by 1,000. For example, a 6 Mbps video stream equals exactly 6,000 Kbps in your streaming encoder settings.",
    formulaDisplay: "Rate (Kbps) = Rate (Mbps) × 1,000",
    subtext: "1 Mbps = 1,000 Kbps = 1,000,000 bps = 125 KB/s | 1 Kbps = 0.001 Mbps"
  },
  aboutSourceUnit: {
    title: "About Megabits per Second (Mbps)",
    text: "Megabits per second (symbol: Mbps or Mb/s) is a metric unit of digital transmission bandwidth representing 1,000,000 bits transferred per second. It is the international standard for consumer internet packages, mobile 4G/5G connections, and Wi-Fi throughput benchmarks."
  },
  aboutTargetUnit: {
    title: "About Kilobits per Second (Kbps)",
    text: "Kilobits per second (symbol: kbps or kb/s) is a metric unit representing 1,000 bits transferred per second. It is the prevailing standard for configuring digital video encoders (H.264, HEVC, AV1), live streaming bitrates, VoIP telephony, and digital audio feeds."
  },
  relationship: "Both units use standard SI decimal prefixes where mega denotes $10^6$ and kilo denotes $10^3$. Dividing $10^6$ by $10^3$ yields exactly $1,000$. Because both units quantify bits (not bytes), the conversion factor is exactly 1,000 with zero approximation error.",
  relationshipTitle: "Exact 1,000-to-1 Metric Relationship",
  relationshipItems: [
    { label: "1 Mbps in Kbps", value: "1,000 Kbps (exact: 10³)" },
    { label: "1 Kbps in Mbps", value: "0.001 Mbps (10⁻³)" },
    { label: "2.5 Mbps (720p HD)", value: "2,500 Kbps" },
    { label: "6 Mbps (1080p Stream)", value: "6,000 Kbps" },
    { label: "25 Mbps (4K UHD)", value: "25,000 Kbps" },
    { label: "100 Mbps (Broadband)", value: "100,000 Kbps" }
  ],
  formula: {
    text: "To convert megabits per second into kilobits per second, multiply the Mbps value by 1,000.",
    math: "Rate (Kbps) = Rate (Mbps) × 1,000",
    subtext: "Inverse formula: Rate (Mbps) = Rate (Kbps) / 1,000"
  },
  formulaTitle: "Mbps to Kbps Conversion Formula",
  practicalTip: {
    title: "OBS Streaming Encoder Setting Tip",
    text: "Streaming platforms like Twitch and YouTube Live recommend upload bitrates in Kbps, while your home internet plan advertises upload speed in Mbps. If your upload speed is 10 Mbps, set your OBS video bitrate to no more than 6,000 Kbps (6 Mbps) to leave 40% headroom for audio packets, gaming traffic, and network fluctuations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: 1080p 60fps Live Streaming Bitrate",
        subtitle: "A video gamer has an available upload speed of 8 Mbps and wants to allocate 6 Mbps for a Twitch broadcast. Convert to Kbps.",
        steps: [
          "State the target bitrate: 6 Mbps.",
          "Identify the conversion formula: Rate (Kbps) = Rate (Mbps) × 1,000.",
          "Multiply 6 by 1,000: 6 × 1,000.",
          "Perform calculation: exactly 6,000 Kbps.",
          "Conclude: Configure the video encoder to 6,000 Kbps."
        ]
      },
      {
        title: "Example 2: 4K HDR Video Encoding",
        subtitle: "A video editor exports a 4K video stream specified at 25 Mbps. Calculate the equivalent bitrate in Kbps.",
        steps: [
          "State bitrate: 25 Mbps.",
          "Apply the formula: 25 × 1,000.",
          "Compute product: 25,000 Kbps.",
          "Final Result: The 4K video stream requires a bitrate of 25,000 Kbps."
        ]
      },
      {
        title: "Example 3: Home Broadband Speed Test",
        subtitle: "An internet speed test reports a download speed of 150 Mbps. Convert this speed into Kbps.",
        steps: [
          "Identify speed: 150 Mbps.",
          "Multiply by 1,000: 150 × 1,000 = 150,000 Kbps.",
          "Result: The broadband line delivers 150,000 kilobits per second."
        ]
      }
    ]
  },
  table: {
    title: "Mbps to Kbps Conversion Reference Table",
    headers: ["Megabits/sec (Mbps)", "Kilobits/sec (Kbps)", "Bits/sec (bps)", "Kilobytes/sec (KB/s)"],
    rows: [
      { fromVal: "0.5 Mbps", toVal: "500 Kbps", extra: "500,000 bps", extra2: "62.5 KB/s" },
      { fromVal: "1 Mbps", toVal: "1,000 Kbps", extra: "1,000,000 bps", extra2: "125.0 KB/s" },
      { fromVal: "2 Mbps", toVal: "2,000 Kbps", extra: "2,000,000 bps", extra2: "250.0 KB/s" },
      { fromVal: "3 Mbps", toVal: "3,000 Kbps", extra: "3,000,000 bps", extra2: "375.0 KB/s" },
      { fromVal: "4 Mbps", toVal: "4,000 Kbps", extra: "4,000,000 bps", extra2: "500.0 KB/s" },
      { fromVal: "5 Mbps", toVal: "5,000 Kbps", extra: "5,000,000 bps", extra2: "625.0 KB/s" },
      { fromVal: "6 Mbps", toVal: "6,000 Kbps", extra: "6,000,000 bps", extra2: "750.0 KB/s" },
      { fromVal: "8 Mbps", toVal: "8,000 Kbps", extra: "8,000,000 bps", extra2: "1,000.0 KB/s (1 MB/s)" },
      { fromVal: "10 Mbps", toVal: "10,000 Kbps", extra: "10,000,000 bps", extra2: "1,250.0 KB/s" },
      { fromVal: "25 Mbps", toVal: "25,000 Kbps", extra: "25,000,000 bps", extra2: "3,125.0 KB/s" },
      { fromVal: "50 Mbps", toVal: "50,000 Kbps", extra: "50,000,000 bps", extra2: "6,250.0 KB/s" },
      { fromVal: "100 Mbps", toVal: "100,000 Kbps", extra: "100,000,000 bps", extra2: "12,500.0 KB/s" },
      { fromVal: "1,000 Mbps (1 Gbps)", toVal: "1,000,000 Kbps", extra: "1,000,000,000 bps", extra2: "125,000.0 KB/s" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Live Video Streaming & Broadcasting",
        text: "Configuring streaming software (OBS Studio, Streamlabs, vMix) video bitrate inputs specified in Kbps based on upload bandwidth measured in Mbps."
      },
      {
        title: "Video On-Demand (VOD) Transcoding Profiles",
        text: "Setting up multi-bitrate adaptive bitrate (ABR) profiles (HLS/DASH) for 360p, 480p, 720p, 1080p, and 4K video deliveries."
      },
      {
        title: "Quality of Service (QoS) Router Rate Limiting",
        text: "Configuring router bandwidth traffic shaping rules in Kbps per client device to prevent network congestion."
      },
      {
        title: "Telecommunications Speed Verification",
        text: "Comparing legacy DSL or T1 lines (traditionally rated in Kbps) against modern fiber-to-the-home broadband packages (rated in Mbps)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Mbps to Kbps",
    items: [
      "Multiplying by 1,024 instead of 1,000: In data communications and telecommunications, decimal prefixes are standardized ($1\\text{ Mbps} = 1,000\\text{ Kbps}$), not binary memory multipliers ($1,024$).",
      "Dividing instead of multiplying: Because a megabit is 1,000 times larger than a kilobit, converting from Mbps to Kbps must increase the numerical value.",
      "Confusing megabits with megabytes: Ensure you are converting Mbps (megabits) and not MB/s (megabytes). 1 MB/s equals 8,000 Kbps, whereas 1 Mbps equals 1,000 Kbps.",
      "Configuring 100% of upload bandwidth in streaming software: If your ISP provides 10 Mbps upload, never configure OBS to 10,000 Kbps; allocate at most 70% to 75% (e.g., 7,000 Kbps) to avoid frame drops."
    ]
  },
  faqs: [
    {
      question: "How many Kbps are in 1 Mbps?",
      answer: "There are exactly 1,000 kilobits per second in 1 megabit per second. This is because the SI prefix 'mega' ($10^6$) is 1,000 times larger than 'kilo' ($10^3$)."
    },
    {
      question: "What is the formula to convert Mbps to Kbps?",
      answer: "The formula is: Rate (Kbps) = Rate (Mbps) × 1,000. To reverse the conversion, divide Kbps by 1,000."
    },
    {
      question: "What is 5 Mbps in Kbps?",
      answer: "5 Mbps equals $5 \\times 1,000 = 5,000\\text{ Kbps}$."
    },
    {
      question: "What is 10 Mbps in Kbps?",
      answer: "10 Mbps equals $10 \\times 1,000 = 10,000\\text{ Kbps}$."
    },
    {
      question: "What is 25 Mbps in Kbps?",
      answer: "25 Mbps equals $25 \\times 1,000 = 25,000\\text{ Kbps}$."
    },
    {
      question: "What is 100 Mbps in Kbps?",
      answer: "100 Mbps equals $100 \\times 1,000 = 100,000\\text{ Kbps}$."
    },
    {
      question: "Why is 1 Mbps equal to 1,000 Kbps instead of 1,024 Kbps?",
      answer: "Telecommunications and networking standards (ITU-T and IEC 80000-13) strictly use decimal base-10 prefixes ($1,000$). The binary multiplier ($1,024$) applies to computer memory (RAM) and uses the prefix kibibit (Kib)."
    },
    {
      question: "How do I convert Kbps back to Mbps?",
      answer: "Divide the Kbps figure by 1,000. For example, 6,000 Kbps divided by 1,000 equals 6 Mbps."
    },
    {
      question: "What bitrate should I set in OBS if I have 10 Mbps upload?",
      answer: "With a 10 Mbps upload speed ($10,000\\text{ Kbps}$), set your video bitrate between 5,000 Kbps and 6,500 Kbps for smooth 1080p 60fps streaming, leaving sufficient headroom for audio and game traffic."
    },
    {
      question: "What is the difference between Kbps and KB/s?",
      answer: "Kbps (kilobits per second, lowercase 'b') measures network line rate. KB/s (kilobytes per second, uppercase 'B') measures file size transfer. 1 KB/s equals 8 Kbps."
    }
  ],
  relatedList: [
    { label: "Kbps to Mbps", from: "kbps", to: "Mbps" },
    { label: "Mbps to Gbps", from: "Mbps", to: "Gbps" },
    { label: "Mbps to Bit/sec", from: "Mbps", to: "bps" },
    { label: "Mbps to Byte/sec", from: "Mbps", to: "Bps" },
    { label: "Mbps to KB/s", from: "Mbps", to: "KBps" }
  ],
  references: [
    "IEC 80000-13: Quantities and units — Part 13: Information science and technology.",
    "ITU-T Recommendation B.12: Use of prefix terms for binary and decimal multiples in telecommunication.",
    "OBS Project: Recommended Streaming Bitrates and Encoders Guide."
  ]
};
