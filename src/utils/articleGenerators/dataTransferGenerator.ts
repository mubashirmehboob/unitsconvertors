import { Category, Unit } from "../../types";
import {
  FormatOptions,
  SEOArticle,
  formatUnitValue,
  performConversion,
  getStringHash
} from "../conversionEngine";

/**
 * High-Precision, Domain-Specific Generator for Data Transfer Bandwidth & Speed Converters
 */
export function generateDataTransferContent(
  category: Category,
  fromUnit: Unit,
  toUnit: Unit,
  formatOpts: FormatOptions = { precision: 9, useSigFigs: false, notation: "auto" }
): SEOArticle {
  const fromName = fromUnit.name;
  const fromPlural = fromUnit.plural;
  const fromSym = fromUnit.symbol;
  const toName = toUnit.name;
  const toPlural = toUnit.plural;
  const toSym = toUnit.symbol;

  const pairKey = `${fromUnit.id}-to-${toUnit.id}`;
  const hash = getStringHash(pairKey);

  const isFromByte = fromSym.includes("B") || fromSym.includes("/s") && !fromSym.includes("bps") && !fromSym.includes("kbps") && !fromSym.includes("Mbps") && !fromSym.includes("Gbps") && !fromSym.includes("Tbps");
  const isToByte = toSym.includes("B") || toSym.includes("/s") && !toSym.includes("bps") && !toSym.includes("kbps") && !toSym.includes("Mbps") && !toSym.includes("Gbps") && !toSym.includes("Tbps");

  // Exact 1-unit conversion ratio calculated through conversionEngine
  const unitRatio = performConversion(1, fromUnit, toUnit, category);
  const formattedRatio = formatUnitValue(unitRatio, formatOpts).html;
  const reverseRatio = performConversion(1, toUnit, fromUnit, category);
  const formattedReverseRatio = formatUnitValue(reverseRatio, formatOpts).html;

  // SEO Title & Meta Description
  const title = `Free ${fromName} to ${toName} Converter - ${fromSym} to ${toSym} Data Rate`;
  const metaDescription = `Convert ${fromPlural.toLowerCase()} to ${toPlural.toLowerCase()} (${fromSym} to ${toSym}) accurately. Explore network bandwidth formulas, bit vs byte distinctions, worked examples, and transmission rate tables.`;

  // Rich, Human-Grade Technical Introduction
  // MANDATORY: Use HTML <strong>...</strong> for bold emphasis. Never use Markdown **...** syntax.
  const introParagraphs = [
    `In modern telecommunications, computer networking, and storage engineering, calculating accurate data transfer rates is essential for evaluating network bandwidth, cloud synchronization throughput, and storage interface performance. Translating <strong>${fromPlural}</strong> (${fromSym}) to <strong>${toPlural}</strong> (${toSym}) bridges the critical boundary between hardware transmission metrics and software data processing rates.`,
    `A common point of confusion in data rate calculations is the fundamental distinction between bit-oriented measurements and byte-oriented measurements. Telecommunications standards, internet service providers (ISPs), Wi-Fi protocols, and optical fiber interfaces universally express line rates in <strong>bits per second</strong> (using a lowercase 'b', such as ${fromSym.includes("b") ? fromSym : "bps, kbps, Mbps, Gbps"}). Conversely, operating systems, file download managers, and storage buses measure transferred payload volume in <strong>bytes per second</strong> (using an uppercase 'B', such as ${toSym.includes("B") ? toSym : "B/s, KB/s, MB/s, GB/s"}), where exactly 1 byte equals 8 bits.`,
    `Furthermore, all standard data transfer rate units follow the International System of Units (SI) decimal standard, where prefixes scale by powers of 1,000 (1 kbps = 1,000 bps, 1 Mbps = 1,000,000 bps, 1 Gbps = 1,000,000,000 bps), in accordance with IEEE 802.3 and ITU-T telecommunication standards. This guide provides the exact algebraic conversion formula, a step-by-step mathematical breakdown for 10 ${fromSym}, a verified reference conversion matrix, and practical networking context accounting for real-world protocol packet overhead.`
  ];
  const introduction = introParagraphs.join("\n\n");

  // Mathematical Formula Section
  const formulaHeadings = [
    `Data Transfer Conversion Formula: ${fromSym} to ${toSym}`,
    `How to Calculate ${toPlural} from ${fromPlural}`,
    `Mathematical Equation for ${fromSym} to ${toSym} Data Rates`,
    `Bandwidth Scaling Formula: ${fromName} to ${toName}`
  ];
  const formulaSectionHeading = formulaHeadings[hash % formulaHeadings.length];

  let formulaExplanation = "";
  if (!isFromByte && isToByte) {
    formulaExplanation = `To convert from a bit-oriented transmission rate (${fromSym}) to a byte-oriented storage throughput (${toSym}), the calculation accounts for the 8-to-1 bit-to-byte ratio (dividing by 8) alongside the decimal SI prefix factor. Multiplying by ${formattedRatio} transforms ${fromPlural} directly into ${toPlural}. In practical networking, note that effective application throughput is typically 5% to 10% lower due to TCP/IP packet header and framing overhead.`;
  } else if (isFromByte && !isToByte) {
    formulaExplanation = `To convert from a byte-oriented data rate (${fromSym}) to a bit-oriented network bandwidth (${toSym}), the calculation multiplies by 8 (accounting for 8 bits per byte) and scales by the relative decimal magnitude factor. Multiplying by ${formattedRatio} converts ${fromPlural} directly into ${toPlural}.`;
  } else {
    formulaExplanation = `Because both ${fromName} (${fromSym}) and ${toName} (${toSym}) operate on the same ${isFromByte ? "byte" : "bit"} base unit, the conversion is a pure decimal SI magnitude scaling by a power of 1,000. Multiply the input value by ${formattedRatio} to obtain the exact equivalent in ${toPlural}.`;
  }

  const formulaMath = `1 ${fromSym} = ${formattedRatio} ${toSym}`;

  // Step-by-Step Solver for 10 units
  const testInput = 10;
  const baseBpsVal = testInput * fromUnit.factor;
  const finalConvertedVal = performConversion(testInput, fromUnit, toUnit, category);
  const formattedTestInput = formatUnitValue(testInput, formatOpts).html;
  const formattedBaseBps = formatUnitValue(baseBpsVal, formatOpts).html;
  const formattedFinalVal = formatUnitValue(finalConvertedVal, formatOpts).html;

  const stepByStep: string[] = [
    `Start with the initial bandwidth measurement: ${formattedTestInput} ${fromSym}.`,
    `Convert ${fromPlural} to the universal base unit of Bits per Second (bps) using the source factor (${fromUnit.factor} bps/${fromSym}): ${formattedTestInput} × ${fromUnit.factor} = ${formattedBaseBps} bps.`,
    `Convert from the base unit (bps) to the target unit (${toPlural}) by dividing by the target factor (${toUnit.factor} bps/${toSym}): ${formattedBaseBps} / ${toUnit.factor} = ${formattedFinalVal} ${toSym}.`,
    `Real-World Transmission Context: A continuous raw stream of ${formattedTestInput} ${fromSym} delivers an equivalent nominal throughput of ${formattedFinalVal} ${toSym}. Accounting for standard Ethernet and TCP/IP protocol headers (~5%–10% overhead), the net user data transfer rate is approximately ${formatUnitValue(finalConvertedVal * 0.93, formatOpts).html} ${toSym}.`,
    `Final Result: ${formattedTestInput} ${fromSym} is exactly equal to ${formattedFinalVal} ${toSym}.`
  ];

  // Worked Examples
  const exampleValues = [1, 10, 100, 1000];
  const exampleHeadings = [
    `Practical Data Transfer Rate Examples`,
    `Real-World Bandwidth Conversion Scenarios`,
    `Sample Bandwidth Calculations: ${fromSym} to ${toSym}`,
    `Step-by-Step Solved Transmission Examples`
  ];
  const examplesHeading = exampleHeadings[hash % exampleHeadings.length];

  const exampleDescriptions: Record<number, string> = {
    1: `Baseline single-unit rate (useful for sensor telemetry, heartbeats, or micro-controller telemetry channels).`,
    10: `Low-to-medium bandwidth link (typical for compressed VoIP voice streams, standard mobile messaging, or basic telemetry feeds).`,
    100: `Standard broadband / Fast Ethernet threshold (typical of consumer broadband tiers, 4K UHD video streaming, and office LANs).`,
    1000: `High-capacity backbone connection (representative of Gigabit Ethernet, commercial fiber uplinks, or cloud storage replication).`
  };

  const exampleItems = exampleValues.map(val => {
    const converted = performConversion(val, fromUnit, toUnit, category);
    const formattedConverted = formatUnitValue(converted, formatOpts).html;
    return {
      input: val,
      output: formattedConverted,
      explanation: `${val} ${fromSym} × ${formattedRatio} = ${formattedConverted} ${toSym}. ${exampleDescriptions[val] || ""}`
    };
  });

  // Conversion Table with Domain-Specific Networking Contexts
  const tableValues = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];
  const dataTransferContexts: Record<number, string> = {
    1: "Low-power IoT sensor heartbeat / Smart utility meter signal",
    2: "High-quality compressed audio stream (FLAC / AAC 256kbps+)",
    5: "Standard HD 720p video streaming / Basic remote desktop session",
    10: "Full HD 1080p video stream (60 fps) / Standard 4G LTE cellular",
    25: "4K Ultra-HD HDR streaming requirement (Netflix / YouTube 4K)",
    50: "High-speed residential broadband / Multi-stream video conferencing",
    100: "Fast Ethernet (100BASE-TX) / Mid-tier commercial fiber link",
    250: "High-performance home fiber / Rapid game & ISO image downloads",
    500: "Ultra-fast symmetric fiber / Multi-user enterprise branch link",
    1000: "Gigabit Ethernet (1000BASE-T) / Data center server interconnect"
  };

  const conversionTable = tableValues.map(val => {
    const converted = performConversion(val, fromUnit, toUnit, category);
    return {
      value: val,
      converted: formatUnitValue(converted, formatOpts).html,
      context: dataTransferContexts[val] || "Standard bandwidth reference benchmark"
    };
  });

  // Historical and Technical Background Section
  const historyHeadings = [
    `Evolution of Data Transfer Metrics & Networking Standards`,
    `History of Bandwidth Measurement: From Telegraphs to Terabits`,
    `Understanding Bits, Bytes, and Network Transmission Speeds`,
    `The Engineering Principles Behind Data Rate Standards`
  ];
  const historyHeading = historyHeadings[hash % historyHeadings.length];

  const historyText = `The measurement of data transmission rates originated in 19th-century telegraphy, where transmission speed was gauged in words per minute or baud (named after French engineer Émile Baudot, inventor of the Baudot code). 

In 1948, American mathematician Claude Shannon published his seminal work *A Mathematical Theory of Communication*, formalizing the binary digit—coined "bit" by John Tukey—as the fundamental unit of information. In 1956, computer scientist Werner Buchholz coined the term "byte" during the design of the IBM 7030 Stretch supercomputer, standardizing an 8-bit group capable of encoding an alphanumeric character.

With the development of Ethernet by Robert Metcalfe in 1973 and the expansion of the Internet Protocol suite (TCP/IP), the telecommunications and networking industries standardized transmission rates using decimal SI prefixes (1 kbps = 10³ bps, 1 Mbps = 10⁶ bps, 1 Gbps = 10⁹ bps). In contrast, computer memory architectures historically adopted binary powers of two (1 KiB = 1,024 bytes). This divergence explains why a 100 Mbps internet connection transfers a maximum theoretical payload of 12.5 MB/s, with actual throughput slightly reduced by packet headers, TCP acknowledgments, and error-correction protocols.`;

  // Specialized, Non-Generic Data Transfer FAQs
  const faqs: { question: string; answer: string }[] = [
    {
      question: `What is the difference between bits per second (${fromSym.includes("b") ? fromSym : "bps"}) and bytes per second (${toSym.includes("B") ? toSym : "B/s"})?`,
      answer: `The primary difference lies in the unit scale: 1 byte is composed of exactly 8 bits. In networking terminology, a lowercase 'b' denotes bits (the individual 1s and 0s sent over physical wires or radio frequencies), whereas an uppercase 'B' denotes bytes (groups of 8 bits used by software to store characters and files). Therefore, a data rate in bytes per second is always 8 times smaller than the same speed expressed in bits per second.`
    },
    {
      question: `Why do Internet Service Providers (ISPs) advertise speeds in Mbps instead of MB/s?`,
      answer: `Telecommunications hardware, network switches, and modems transmit serial streams of raw bits across copper, fiber-optic, or wireless channels. Because physical layers transmit one bit at a time, network bandwidth has historically been measured in bits per second (e.g., Mbps or Gbps). Additionally, expressing speeds in bits yields a number 8 times larger, making it a standard convention for broadband marketing.`
    },
    {
      question: `How long will it take to download a 1 GB file at ${testInput} ${fromSym}?`,
      answer: `At an exact rate of ${testInput} ${fromSym} (${formattedFinalVal} ${toSym}), downloading a 1 Gigabyte (1,000 Megabytes) file requires dividing 1,000 MB by the transfer rate in MB/s. After accounting for typical 5% to 10% TCP/IP network protocol overhead, the actual download duration is closely estimated by dividing total file size in bits by your connection bandwidth in bits per second.`
    },
    {
      question: `How does network protocol overhead affect actual download and upload speeds?`,
      answer: `Every piece of data sent across the internet is encapsulated in network packets containing metadata headers, including Ethernet frames (14–18 bytes), IPv4/IPv6 headers (20–40 bytes), TCP headers (20–60 bytes), and TLS/SSL encryption wrappers. Furthermore, TCP requires acknowledgment (ACK) packets and retransmissions when packets drop. This protocol overhead typically consumes 5% to 10% of gross bandwidth, meaning usable file transfer throughput is slightly lower than line rate.`
    },
    {
      question: `Are data transfer rate prefixes calculated using decimal (1,000) or binary (1,024) multipliers?`,
      answer: `In data transmission and telecommunications (such as kbps, Mbps, Gbps, KB/s, MB/s), standard SI decimal prefixes based on powers of 10 (1,000) are universally used. This aligns with standards defined by the IEEE, ITU, and ISO. Binary prefixes (such as Kibibits/KiB based on 1,024) are primarily used for random-access memory (RAM) and operating system file storage allocations.`
    },
    {
      question: `What is the exact conversion formula to convert ${fromName} to ${toName}?`,
      answer: `The formula is: Value in ${toPlural} = Value in ${fromPlural} × ${formattedRatio}. To reverse the conversion from ${toName} back to ${fromName}, divide by ${formattedRatio} (or multiply by ${formattedReverseRatio}).`
    },
    {
      question: `What is the difference between network bandwidth and real-world throughput?`,
      answer: `Bandwidth is the theoretical maximum data carrying capacity of a transmission medium (such as a 1 Gbps fiber link). Throughput is the actual volume of successful payload data transferred over the network in a given timeframe, which is constrained by latency, server bottlenecks, Wi-Fi interference, packet loss, and protocol overhead.`
    },
    {
      question: `How does network latency (ping) impact data transfer rates?`,
      answer: `While bandwidth determines how much data can pass through a pipe each second, latency determines how quickly data packets travel from source to destination. Due to the TCP sliding window mechanism, high latency increases the time required for acknowledgment packets to return, which can throttle transmission speed on high-bandwidth connections unless TCP window scaling is optimized.`
    },
    {
      question: `Is ${fromName} faster or larger than ${toName}?`,
      answer: unitRatio > 1
        ? `Yes, 1 ${fromName} (${fromSym}) is larger than 1 ${toName} (${toSym}). Specifically, 1 ${fromSym} is equal to ${formattedRatio} ${toSym}, meaning it represents a higher transmission rate.`
        : unitRatio < 1
        ? `No, 1 ${fromName} (${fromSym}) is smaller than 1 ${toName} (${toSym}). You need ${formattedReverseRatio} ${fromPlural} to equal a single ${toName} (${toSym}).`
        : `Both units are identical in magnitude, with 1 ${fromSym} equaling exactly 1 ${toSym}.`
    },
    {
      question: `Why do Wi-Fi and mobile data speeds fluctuate during active transfers?`,
      answer: `Wireless data transfer speeds fluctuate due to radio frequency interference, physical distance from the router or cell tower, dynamic modulation and coding schemes (MCS index changes), channel contention with neighboring devices, and thermal throttling of modem transceivers.`
    }
  ];

  return {
    title,
    metaDescription,
    introduction,
    formulaSection: {
      heading: formulaSectionHeading,
      text: formulaExplanation,
      formula: formulaMath
    },
    stepByStep,
    examples: {
      heading: examplesHeading,
      items: exampleItems
    },
    conversionTable,
    faqs,
    historySection: {
      heading: historyHeading,
      text: historyText
    }
  };
}
