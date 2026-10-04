import { CustomArticleData } from "./types";

export const milliampereToNanoampere: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "nanoampere",
  seoTitle: "Milliampere to Nanoampere Converter (mA to nA) | UnitsConvertors.com",
  metaDescription: "Convert Milliamperes to Nanoamperes (mA to nA) accurately. Master the 1,000,000 multiplier formula, worked calculation examples, conversion tables, and IoT sleep current tips.",
  canonicalUrl: "https://unitsconvertors.com/milliampere-to-nanoampere",
  h1: "Milliampere to Nanoampere Converter",
  introduction: [
    "The <strong>Milliampere (mA)</strong> and the <strong>Nanoampere (nA)</strong> are two essential decimal fractions of the SI base unit ampere, separated by six orders of magnitude (10⁶). In modern embedded systems engineering, battery life management, and Internet of Things (IoT) hardware design, devices cycle between active states operating in milliamperes and dormant deep-sleep modes consuming merely nanoamperes.",
    "Because the prefix <em>milli-</em> represents 10⁻³ and <em>nano-</em> represents 10⁻⁹, one milliampere contains exactly 1,000,000 nanoamperes (10⁶ nA). Converting milliamperes to nanoamperes requires multiplying the milliampere value by one million.",
    "This technical conversion guide provides the exact mathematical relationship, step-by-step manual calculations, engineering applications, a comprehensive reference table, common measurement errors, and clear answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Nanoamperes, multiply the current in milliamperes by 1,000,000 (10⁶). For example, 0.025 mA equals 25,000 nA, and 1.5 mA equals 1,500,000 nA.",
    formulaDisplay: "nA = mA × 1,000,000",
    subtext: "1 Milliampere (mA) = 1,000,000 Nanoamperes (nA) exactly."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The <strong>Milliampere</strong> (symbol: <strong>mA</strong>) is an SI decimal submultiple representing one thousandth of an ampere (10⁻³ A or 0.001 A). Milliamperes are standard across low-voltage electronics, consumer appliances, 4–20 mA industrial process instrumentation loops, and LED drive circuits."
  },
  aboutTargetUnit: {
    title: "What is a Nanoampere (nA)?",
    text: "The <strong>Nanoampere</strong> (symbol: <strong>nA</strong>) is an SI decimal submultiple representing one billionth of an ampere (10⁻⁹ A or 0.000000001 A). In semiconductor physics, nanoamperes quantify subthreshold gate leakage in CMOS transistors, dark current in optoelectronic receivers, and standby currents in real-time clocks (RTC)."
  },
  relationship: "1 Milliampere equals exactly 1,000,000 (10⁶) Nanoamperes. Conversely, 1 Nanoampere equals 0.000001 (10⁻⁶) Milliamperes.",
  relationshipTitle: "Milliampere to Nanoampere Metric Relationship",
  relationshipItems: [
    { label: "1 mA", value: "1,000,000 nA (10⁶ nA)" },
    { label: "0.1 mA", value: "100,000 nA (10⁵ nA)" },
    { label: "0.01 mA (10 µA)", value: "10,000 nA (10⁴ nA)" },
    { label: "0.001 mA (1 µA)", value: "1,000 nA (10³ nA)" },
    { label: "0.0001 mA", value: "100 nA (10² nA)" },
    { label: "0.000001 mA", value: "1 nA (10⁰ nA)" }
  ],
  formula: {
    text: "Multiply the electric current in milliamperes by 1,000,000 (10⁶) to determine the equivalent value in nanoamperes.",
    math: "I_{(nA)} = I_{(mA)} × 10^6",
    subtext: "To convert nanoamperes back to milliamperes, divide the value by 1,000,000 (or multiply by 10⁻⁶)."
  },
  formulaTitle: "Milliampere to Nanoampere Mathematical Equation",
  practicalTip: {
    title: "Six-Place Decimal Shift",
    text: "To convert milliamperes to nanoamperes mentally, shift the decimal point six places to the right. For example, 0.0042 mA becomes 4,200 nA."
  },
  expertNote: {
    title: "Dynamic Range in IoT Power Profiling",
    text: "Characterizing battery-operated edge devices requires measuring currents spanning from 50 mA during wireless radio transmission down to 150 nA during sleep mode—a dynamic range exceeding 300,000:1. Specialized autoranging source measure units (SMUs) prevent burden voltage resets during sleep-to-wake transitions."
  },
  examples: {
    title: "Step-by-Step Manual Calculation Examples",
    items: [
      {
        title: "Example 1: Microcontroller Sleep Mode Current",
        subtitle: "A low-power Bluetooth SoC draws an active current of 12 mA and drops to an idle quiescent current of 0.0035 mA. Express the idle current in nanoamperes.",
        steps: [
          "Identify the given quiescent current: I = 0.0035 mA.",
          "Apply conversion formula: I_(nA) = I_(mA) × 1,000,000.",
          "Perform multiplication: 0.0035 × 1,000,000 = 3,500 nA.",
          "Conclusion: 0.0035 mA equals 3,500 nA (or 3.5 µA)."
        ]
      },
      {
        title: "Example 2: Lithium Battery Self-Discharge Current",
        subtitle: "A primary coin cell experiences an internal self-discharge rate equivalent to 0.00018 mA. Convert this to nanoamperes.",
        steps: [
          "Starting value: I = 0.00018 mA.",
          "Multiply by 10⁶: 0.00018 × 10⁶ = 180 nA.",
          "Result: The battery self-discharge current is 180 nA."
        ]
      },
      {
        title: "Example 3: Low-Dropout (LDO) Voltage Regulator Quiescent Current",
        subtitle: "A high-efficiency nano-power LDO regulator specifies a no-load ground pin current of 0.00085 mA. Convert this specification to nanoamperes.",
        steps: [
          "Given parameter: I = 0.00085 mA.",
          "Calculate: 0.00085 × 1,000,000 = 850 nA.",
          "Final answer: The LDO ground current equals 850 nA."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Nanoampere Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Nanoamperes (nA)", "Microamperes (µA)", "Typical Circuit Operation"],
    rows: [
      { fromVal: "0.000001 mA", toVal: "1 nA", extra: "0.001 µA", extra2: "CMOS subthreshold leakage" },
      { fromVal: "0.00001 mA", toVal: "10 nA", extra: "0.01 µA", extra2: "Precision op-amp bias current" },
      { fromVal: "0.0001 mA", toVal: "100 nA", extra: "0.1 µA", extra2: "Real-time clock backup current" },
      { fromVal: "0.001 mA", toVal: "1,000 nA", extra: "1 µA", extra2: "Microcontroller deep sleep mode" },
      { fromVal: "0.01 mA", toVal: "10,000 nA", extra: "10 µA", extra2: "Low-power sensor polling state" },
      { fromVal: "0.1 mA", toVal: "100,000 nA", extra: "100 µA", extra2: "Low-frequency processor clocking" },
      { fromVal: "1 mA", toVal: "1,000,000 nA", extra: "1,000 µA", extra2: "Standard LED indicator light" },
      { fromVal: "5 mA", toVal: "5,000,000 nA", extra: "5,000 µA", extra2: "Optocoupler input diode" },
      { fromVal: "10 mA", toVal: "10,000,000 nA", extra: "10,000 µA", extra2: "Bluetooth LE transmission burst" },
      { fromVal: "20 mA", toVal: "20,000,000 nA", extra: "20,000 µA", extra2: "Industrial 4-20 mA current loop" }
    ]
  },
  applications: {
    title: "Engineering and Embedded Systems Applications",
    items: [
      {
        title: "Battery Life Modeling for IoT and Wearables",
        text: "Connected health monitors and environmental sensors remain in sleep mode for 99.9% of their operating life, drawing hundreds of nanoamperes, before waking for 10 milliseconds to transmit data at 15 milliamperes. Engineers convert sleep currents to milliamperes to calculate time-weighted average current and predict multi-year coin cell longevity."
      },
      {
        title: "Analog Sensor Signal Amplification",
        text: "Photodiodes, gas sensors, and radiation counters generate output currents in the nanoampere range. Precision transimpedance amplifiers (TIAs) convert these minute signals into robust 0–20 mA industrial telemetry outputs."
      },
      {
        title: "Energy Harvesting Power Management",
        text: "Indoor photovoltaic cells, thermoelectric generators, and piezoelectric harvesters gather microscopic energy quanta, generating output currents of only a few hundred nanoamperes under dim lighting. Converting to milliamperes helps design supercapacitor charging circuits."
      },
      {
        title: "PCB Cleanliness and Isolation Testing",
        text: "When qualifying printed circuit board assemblies for aerospace or medical use, contamination testing ensures that conformal coatings prevent surface leakage currents from exceeding 50 nA under humid conditions when powered by 24 mA system buses."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes and Calculation Errors",
    items: [
      "Confusing the Conversion Multiplier with 1,000: 1 mA equals 1,000 microamperes (µA), but 1,000,000 nanoamperes (nA). Using a factor of 1,000 results in an answer that is 1,000 times too small.",
      "Dividing Instead of Multiplying: Because nanoamperes are smaller units, the numerical value must increase. Dividing milliamperes by 10⁶ creates a 10⁻¹² magnitude error.",
      "Overlooking Instrument Shunt Resistance: Attempting to measure nanoampere sleep current on a digital multimeter's milliampere scale causes severe quantization error due to insufficient digit resolution.",
      "Assuming Quiescent Current is Constant Across Temperature: Semiconductor leakage currents increase exponentially with ambient temperature. An IC with 500 nA sleep current at 25°C may consume over 5,000 nA (0.005 mA) at 85°C."
    ]
  },
  faqs: [
      {
        question: "How many nanoamperes are in one milliampere?",
        answer: "There are exactly 1,000,000 (one million, or 10⁶) nanoamperes in one milliampere."
      },
      {
        question: "What is the formula to convert milliamperes to nanoamperes?",
        answer: "The formula is: Current in nA = Current in mA × 1,000,000 (or I_(nA) = I_(mA) × 10⁶)."
      },
      {
        question: "How do I convert nanoamperes back to milliamperes?",
        answer: "Divide the nanoampere value by 1,000,000 (or multiply by 10⁻⁶). For example, 250,000 nA / 1,000,000 = 0.25 mA."
      },
      {
        question: "What is the difference between mA, µA, and nA?",
        answer: "1 milliampere (mA) = 1,000 microamperes (µA) = 1,000,000 nanoamperes (nA). Each unit differs by a factor of 1,000 (10³)."
      },
      {
        question: "How do I convert 0.05 mA to nA?",
        answer: "Multiply 0.05 by 1,000,000: 0.05 × 1,000,000 = 50,000 nA (or 50 µA)."
      },
      {
        question: "Why do low-power microcontrollers specify sleep current in nA?",
        answer: "Modern ultra-low-power silicon processes achieve dormant sleep currents well under 1 µA (such as 350 nA). Expressing these tiny values in nanoamperes provides clean, practical integer values rather than decimals."
      },
      {
        question: "Can a standard multimeter measure nanoamperes accurately?",
        answer: "No. Standard digital multimeters usually have a lowest resolution of 0.1 µA (100 nA) and introduce significant burden voltage. An electrometer or specialized picoammeter is required."
      },
      {
        question: "How many electrons per second flow in one milliampere compared to one nanoampere?",
        answer: "1 milliampere represents approximately 6.2415 × 10¹⁵ electrons per second, whereas 1 nanoampere represents approximately 6.2415 × 10⁹ electrons per second."
      },
      {
        question: "How many nanoamperes is 4–20 mA industrial current loop signaling?",
        answer: "A standard 4–20 mA industrial control loop corresponds to a range of 4,000,000 nA (at 4 mA zero-scale) to 20,000,000 nA (at 20 mA full-scale)."
      },
      {
        question: "What is the symbol for the milliampere and nanoampere?",
        answer: "The symbol for milliampere is 'mA' (lowercase m, uppercase A) and for nanoampere is 'nA' (lowercase n, uppercase A)."
      }
    ],
  relatedList: [
    { label: "Milliampere to Picoampere", from: "milliampere", to: "picoampere" },
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" },
    { label: "Ampere to Nanoampere", from: "ampere", to: "nanoampere" },
    { label: "Microampere to Nanoampere", from: "microampere", to: "nanoampere" },
    { label: "Milliampere to Biot", from: "milliampere", to: "biot" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition, 2019).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Keithley Instruments (Tektronix): Low Level Measurements Handbook: Precision DC Current, Voltage, and Resistance Measurements.",
    "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems: Low-Power Design."
  ]
};
