import { CustomArticleData } from "./types";

export const microohmToMilliohm: CustomArticleData = {
  fromUnitId: "microohm",
  toUnitId: "milliohm",
  seoTitle: "Microohm to Milliohm Converter (µΩ to mΩ) | UnitsConvertors.com",
  metaDescription: "Convert microohms to milliohms (µΩ to mΩ) with exact electrical resistance formulas, current shunt resistor examples, PCB trace tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/microohm-to-milliohm",
  h1: "Microohm to Milliohm Converter",
  introduction: [
    "In power electronics, battery management systems (BMS), and precision instrumentation, electrical engineers routinely transition between microohms (µΩ) and milliohms (mΩ). Whether designing high-efficiency DC-DC converters, evaluating MOSFET on-resistance (RDS(on)), or testing battery cell internal resistance (ESR), seamless conversion between these two adjacent SI submultiples is essential.",
    "The Microohm (µΩ) represents one-millionth of an ohm (10⁻⁶ Ω), while the Milliohm (mΩ) represents one-thousandth of an ohm (10⁻³ Ω). Because the two units differ by exactly three orders of magnitude (a factor of 1,000), converting from microohms to milliohms requires dividing the microohm value by 1,000 (or multiplying by 0.001).",
    "This technical guide explains the conversion relationship between microohms and milliohms, provides step-by-step engineering calculations for current-sensing shunts and semiconductor specifications, includes standard reference tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert microohms (µΩ) to milliohms (mΩ), divide by 1,000 (or multiply by 0.001). For example, a current-sensing shunt with a resistance of 750 µΩ equals exactly 0.75 mΩ.",
    formulaDisplay: "\\text{m}\\Omega = \\frac{\\mu\\Omega}{1{,}000} = \\mu\\Omega \\times 0.001",
    subtext: "1 Microohm equals exactly 0.001 Milliohm (10⁻³ mΩ). 1 Milliohm equals exactly 1,000 Microohms."
  },
  aboutSourceUnit: {
    title: "Understanding the Microohm (µΩ)",
    text: "The Microohm (symbol: µΩ) is an SI decimal submultiple representing 10⁻⁶ ohms (0.000001 Ω). It is the preferred unit for measuring low-resistance contact phenomena, including bolted busbar joints, switchgear contact resistance, and ultrasonic wire bonds in power modules."
  },
  aboutTargetUnit: {
    title: "Understanding the Milliohm (mΩ)",
    text: "The Milliohm (symbol: mΩ) represents 10⁻³ ohms (0.001 Ω). Resistors in the milliohm range are standard components in modern electronics, used primarily as precision current-sensing shunts, power inductor DC resistance (DCR) ratings, and lithium-ion battery equivalent series resistance (ESR) specifications."
  },
  relationship: "The relationship between microohms and milliohms is governed by standard SI metric prefixes. The prefix 'micro-' denotes 10⁻⁶, and 'milli-' denotes 10⁻³. The ratio between them is 10⁻³ / 10⁻⁶ = 1,000. Therefore, 1 milliohm contains exactly 1,000 microohms, and 1 microohm equals exactly 0.001 milliohms.",
  relationshipTitle: "Microohm to Milliohm Conversion Benchmarks",
  relationshipItems: [
    { label: "1 µΩ", value: "0.001 mΩ (Superconducting joint or solid copper block)" },
    { label: "50 µΩ", value: "0.050 mΩ (High-voltage SF6 breaker closed contact)" },
    { label: "100 µΩ", value: "0.100 mΩ (Heavy-duty 100 µΩ current shunt resistor)" },
    { label: "500 µΩ", value: "0.500 mΩ (Half-milliohm / high-power SMD current sensor)" },
    { label: "1,000 µΩ", value: "1.000 mΩ (Exact 1.0 Milliohm benchmark)" },
    { label: "2,500 µΩ", value: "2.500 mΩ (Typical high-current power MOSFET RDS(on))" },
    { label: "10,000 µΩ", value: "10.000 mΩ (10 Milliohms / lithium battery cell ESR)" }
  ],
  formula: {
    text: "Divide the resistance in microohms by 1,000 (or multiply by 0.001) to calculate milliohms.",
    math: "R_{(\\text{m}\\Omega)} = \\frac{R_{(\\mu\\Omega)}}{1{,}000} = R_{(\\mu\\Omega)} \\times 10^{-3}",
    subtext: "To convert milliohms back to microohms, multiply the milliohm value by 1,000."
  },
  formulaTitle: "Microohm to Milliohm Conversion Formula",
  practicalTip: {
    title: "Three-Place Decimal Shift to the Left",
    text: "Because the divisor is exactly 1,000, you can convert microohms to milliohms in your head by shifting the decimal point three places to the left. For example, 1,250 µΩ becomes 1.25 mΩ, and 85 µΩ becomes 0.085 mΩ."
  },
  expertNote: {
    title: "Current Sense Shunt Selection & Amplifier Offset",
    text: "When designing current sensing circuitry for motor drives or battery chargers, choosing between a 500 µΩ (0.5 mΩ) and a 1,000 µΩ (1.0 mΩ) shunt involves a trade-off. A lower resistance reduces I²R power loss (P = I² × R), but produces a smaller differential voltage (V = I × R), requiring low-offset operational amplifiers to avoid measurement errors."
  },
  examples: {
    title: "Step-by-Step Engineering Calculations",
    items: [
      {
        title: "Example 1: Precision Current Sense Shunt Resistor",
        subtitle: "A telemetry board uses an ultra-low-resistance current-sensing resistor rated at 350 µΩ. Convert this value to milliohms to check against the amplifier gain formula.",
        steps: [
          "Identify the measured value: R = 350 µΩ.",
          "Apply the conversion formula: R(mΩ) = 350 ÷ 1,000.",
          "Compute: 350 ÷ 1,000 = 0.35 mΩ.",
          "Result: 350 µΩ equals exactly 0.35 mΩ."
        ]
      },
      {
        title: "Example 2: Power MOSFET On-State Conduction Resistance",
        subtitle: "A semiconductor datasheet specifies a low-voltage trench MOSFET with an on-resistance RDS(on) of 1,600 µΩ at VGS = 10V. Express this resistance in milliohms.",
        steps: [
          "State the value: RDS(on) = 1,600 µΩ.",
          "Divide by 1,000: 1,600 ÷ 1,000 = 1.6 mΩ.",
          "Result: 1,600 µΩ equals exactly 1.6 mΩ (commonly listed as 1.6 mΩ in vendor parametric tables)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Microohm to Milliohm",
    headers: ["Resistance (µΩ)", "Resistance (mΩ)", "Fractional (mΩ)", "Power Electronics Application"],
    rows: [
      { fromVal: "10.0", toVal: "0.010", extra: "1/100 mΩ", extra2: "Heavy copper busbar segment" },
      { fromVal: "25.0", toVal: "0.025", extra: "1/40 mΩ", extra2: "Substation breaker contact acceptance limit" },
      { fromVal: "50.0", toVal: "0.050", extra: "1/20 mΩ", extra2: "Welded battery module interconnect" },
      { fromVal: "100.0", toVal: "0.100", extra: "1/10 mΩ", extra2: "100 A current monitoring shunt" },
      { fromVal: "200.0", toVal: "0.200", extra: "1/5 mΩ", extra2: "Automotive high-current fuse element" },
      { fromVal: "500.0", toVal: "0.500", extra: "1/2 mΩ", extra2: "Half-milliohm precision SMD shunt" },
      { fromVal: "1,000.0", toVal: "1.000", extra: "1 mΩ", extra2: "Standard 1 mΩ current sense resistor" },
      { fromVal: "2,000.0", toVal: "2.000", extra: "2 mΩ", extra2: "Server power supply synchronous rectifier MOSFET" },
      { fromVal: "5,000.0", toVal: "5.000", extra: "5 mΩ", extra2: "High-power inductor DC winding resistance (DCR)" },
      { fromVal: "10,000.0", toVal: "10.000", extra: "10 mΩ", extra2: "21700 lithium-ion battery cell internal resistance (ESR)" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Hardware Applications",
    items: [
      {
        title: "Battery Management Systems (BMS) Current Sensing",
        text: "Engineers convert shunt resistor values from microohms (e.g., 200 µΩ) to milliohms (0.2 mΩ) to match coulomb counter ADC register configurations in electric vehicles."
      },
      {
        title: "Power Semiconductor RDS(on) Benchmarking",
        text: "Silicon MOSFET and GaN FET datasheets express on-resistance in milliohms or microohms. Standardizing to milliohms facilitates conduction loss modeling in automotive inverters."
      },
      {
        title: "Printed Circuit Board (PCB) Trace Resistance Analysis",
        text: "PCB layout CAD tools calculate high-current polygon pour resistance in microohms, converting to milliohms to verify voltage drop budgets along 12V and 48V power distribution rails."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of dividing: Multiplying converts milliohms to microohms. Converting microohms to milliohms requires dividing by 1,000.",
      "Symbol capitalization confusion: Use lowercase 'm' for milliohm (mΩ) and lowercase 'µ' (or 'u') for microohm (µΩ). Uppercase 'M' denotes Megohm (MΩ), which is 1,000,000,000 times larger.",
      "Ignoring temperature rise in low-resistance shunts: Current shunts dissipate heat under load. Ensure calculations account for the temperature coefficient of resistance (TCR, typically ±20 to ±75 ppm/°C).",
      "Two-wire lead resistance errors: Measuring milliohms or microohms with two test probes introduces contact errors. Always use 4-wire Kelvin sensing."
    ]
  },
  faqs: [
    {
      question: "How do you convert microohms (µΩ) to milliohms (mΩ)?",
      answer: "Divide the resistance in microohms by 1,000, or multiply by 0.001. For example, 750 µΩ ÷ 1,000 = 0.75 mΩ."
    },
    {
      question: "What is 1 microohm in milliohms?",
      answer: "1 microohm equals exactly 0.001 milliohm (10⁻³ mΩ, or one-thousandth of a milliohm)."
    },
    {
      question: "How many microohms are in 1 milliohm?",
      answer: "There are exactly 1,000 microohms (µΩ) in 1 milliohm (mΩ)."
    },
    {
      question: "How do you convert milliohms back to microohms?",
      answer: "Multiply the milliohm value by 1,000. For example, 2.5 mΩ × 1,000 = 2,500 µΩ."
    },
    {
      question: "Why do engineers use both microohms and milliohms?",
      answer: "Both units describe low electrical resistance, but microohms are best suited for contact joints and heavy busbars (10 to 100 µΩ), while milliohms are standard for current shunts, MOSFETs, and battery internal resistance (1 to 50 mΩ)."
    },
    {
      question: "How many microohms is a 0.5 mΩ shunt resistor?",
      answer: "A 0.5 mΩ shunt resistor equals 0.5 × 1,000 = 500 µΩ (500 microohms, or 0.0005 Ω)."
    },
    {
      question: "What is typical for a lithium-ion battery internal resistance?",
      answer: "A healthy 18650 or 21700 cylindrical lithium-ion cell typically exhibits an internal DC resistance (ESR) between 10 mΩ and 25 mΩ (10,000 µΩ to 25,000 µΩ)."
    },
    {
      question: "What is the difference between µΩ and mΩ in terms of base Ohms?",
      answer: "1 µΩ equals 10⁻⁶ Ω (0.000001 Ω), whereas 1 mΩ equals 10⁻³ Ω (0.001 Ω). A milliohm is 1,000 times larger than a microohm."
    },
    {
      question: "What instrument is used to measure microohms and milliohms?",
      answer: "Both are measured with digital low resistance ohmmeters (DLROs) or precision LCR meters equipped with 4-wire Kelvin test clips to eliminate lead resistance."
    }
  ],
  relatedList: [
    { label: "Microohm to Ohm", from: "microohm", to: "ohm" },
    { label: "Milliohm to Microohm", from: "milliohm", to: "microohm" },
    { label: "Milliohm to Ohm", from: "milliohm", to: "ohm" },
    { label: "Microohm to Kilohm", from: "microohm", to: "kilohm" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "IEC 60062: Marking codes for resistors and capacitors",
    "IEEE Std 1188: IEEE Recommended Practice for Maintenance, Testing, and Replacement of Valve-Regulated Lead-Acid (VRLA) Batteries",
    "JEDEC Standard JESD22-B106: Resistance to Soldering Heat for Through-Hole Mounted Devices"
  ]
};
