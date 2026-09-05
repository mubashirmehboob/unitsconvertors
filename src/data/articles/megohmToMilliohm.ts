import { CustomArticleData } from "./types";

export const megohmToMilliohm: CustomArticleData = {
  fromUnitId: "megohm",
  toUnitId: "milliohm",
  seoTitle: "Megohm to Milliohm Converter (MΩ to mΩ)",
  metaDescription: "Convert megohms to milliohms (MΩ to mΩ) with exact SI prefix formulas, nine-decade impedance ratios, worked engineering examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/megohm-to-milliohm",
  h1: "Megohm to Milliohm Converter",
  introduction: [
    "Electrical resistance encompasses an enormous dynamic range across modern engineering, from the fractional-milliohm impedances of high-current battery busbars to the multi-megohm barriers of dielectric insulation. Converting megohms (MΩ) to milliohms (mΩ) spans nine orders of magnitude (10⁹), bridging the gap between near-perfect electrical insulation and near-ideal electrical conductors.",
    "The megohm represents one million ohms (10⁶ Ω), while the milliohm represents one-thousandth of an ohm (10⁻³ Ω). Because the difference between the two prefixes is 10⁹, exactly one billion milliohms comprise a single megohm. For example, a 1 MΩ ESD grounding resistor contains 1,000,000,000 mΩ.",
    "This engineering guide explains the mathematical derivation connecting these two opposite ends of the resistance spectrum, demonstrates automated test equipment (ATE) dynamic range calculations, provides step-by-step worked examples, and offers clear reference tables."
  ],
  quickAnswer: {
    text: "To convert megohms (MΩ) to milliohms (mΩ), multiply the megohm value by 1,000,000,000 (10⁹). For example, 0.001 MΩ (1 kΩ) equals 1,000,000 mΩ, and 1 MΩ equals 1,000,000,000 mΩ.",
    formulaDisplay: "\\text{m}\\Omega = \\text{M}\\Omega \\times 1{,}000{,}000{,}000",
    subtext: "1 Megohm is equal to exactly 1,000,000,000 Milliohms (1 MΩ = 10⁹ mΩ)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megohm (MΩ)",
    text: "The megohm (symbol: MΩ) is a decimal multiple of the ohm, defined as 1,000,000 ohms (10⁶ Ω). It is standard in high-voltage testing, insulation diagnostics (IEEE 43), electrometer amplification, and electrostatic discharge protection where current flow must be restricted to microamperes or nanoamperes."
  },
  aboutTargetUnit: {
    title: "Understanding the Milliohm (mΩ)",
    text: "The milliohm (symbol: mΩ) is a submultiple of the ohm equal to 0.001 ohms (10⁻³ Ω). Milliohms quantify low-resistance components such as current-sensing shunts, printed circuit board power planes, battery internal series resistance (ESR), switch contacts, and motor winding DC resistance."
  },
  relationship: "The relationship between megohms and milliohms spans nine powers of ten: 10⁶ / 10⁻³ = 10⁹ = 1,000,000,000. Exactly one billion milliohms equal one megohm: 1 MΩ = 10⁹ mΩ. Inversely, 1 mΩ = 10⁻⁹ MΩ = 0.000000001 MΩ.",
  relationshipTitle: "Megohm to Milliohm Dynamic Range Scale",
  relationshipItems: [
    { label: "0.000001 MΩ", value: "1,000 mΩ (1.0 Ω baseline)" },
    { label: "0.000010 MΩ", value: "10,000 mΩ (10 Ω precision resistor)" },
    { label: "0.001000 MΩ", value: "1,000,000 mΩ (1.0 kΩ pull-up resistor)" },
    { label: "0.010000 MΩ", value: "10,000,000 mΩ (10 kΩ general-purpose bias)" },
    { label: "0.100000 MΩ", value: "100,000,000 mΩ (100 kΩ op-amp divider)" },
    { label: "1.000000 MΩ", value: "1,000,000,000 mΩ (1.0 MΩ ESD safety resistor)" }
  ],
  formula: {
    text: "Multiply the resistance in megohms by 1,000,000,000 (10⁹) to determine the value in milliohms.",
    math: "R_{(\\text{m}\\Omega)} = R_{(\\text{M}\\Omega)} \\times 1{,}000{,}000{,}000 = R_{(\\text{M}\\Omega)} \\times 10^9",
    subtext: "To convert milliohms back to megohms, divide the milliohm value by 1,000,000,000 (or multiply by 10⁻⁹)."
  },
  formulaTitle: "MΩ to mΩ Conversion Formula",
  practicalTip: {
    title: "9-Decimal Right Shift Rule",
    text: "To convert megohms to milliohms, move the decimal point nine places to the right. For example, 0.005 MΩ becomes 5,000,000 mΩ, and 0.000002 MΩ becomes 2,000 mΩ."
  },
  expertNote: {
    title: "Instrumentation Dynamic Range & Kelvin Connections",
    text: "While megohm measurements require guarded triaxial shielding to suppress pA surface leakage currents, milliohm measurements require 4-wire Kelvin test probes to eliminate test lead resistance. Automated test equipment (ATE) switching between these modes must handle dynamic impedance spans exceeding 120 dB."
  },
  examples: {
    title: "Step-by-Step MΩ to mΩ Calculations",
    items: [
      {
        title: "Example 1: ATE Calibration Reference Range",
        subtitle: "A digital source-measure unit (SMU) measures a 0.002 MΩ test resistor. Convert this measurement into milliohms for comparison with a low-resistance standard.",
        steps: [
          "State the value in megohms: R = 0.002 MΩ.",
          "Multiply by 10⁹: 0.002 × 1,000,000,000.",
          "Compute: 0.002 × 1,000,000,000 = 2,000,000.",
          "Result: 0.002 MΩ equals exactly 2,000,000 mΩ (2 kΩ)."
        ]
      },
      {
        title: "Example 2: ESD Safe Ground Path",
        subtitle: "Convert a 1.0 MΩ static drain resistor into milliohms to evaluate dynamic range in a simulation engine.",
        steps: [
          "Identify the value: R = 1.0 MΩ.",
          "Multiply by 10⁹: 1.0 × 1,000,000,000.",
          "Compute: 1.0 × 10⁹ = 1,000,000,000.",
          "Result: 1.0 MΩ equals exactly 1,000,000,000 mΩ."
        ]
      },
      {
        title: "Example 3: Precision Voltage Divider Leg",
        subtitle: "A high-impedance voltage divider leg is specified as 0.05 MΩ. What is this value in milliohms?",
        steps: [
          "Identify the resistance: R = 0.05 MΩ.",
          "Multiply by 1,000,000,000: 0.05 × 1,000,000,000.",
          "Compute: 0.05 × 10⁹ = 50,000,000.",
          "Result: 0.05 MΩ equals 50,000,000 mΩ (50 kΩ)."
        ]
      }
    ]
  },
  table: {
    title: "Megohm to Milliohm Reference Table",
    headers: ["Megohms (MΩ)", "Milliohms (mΩ)", "Engineering Context"],
    rows: [
      { fromVal: "0.000001 MΩ", toVal: "1,000 mΩ", extra: "1.0 Ω baseline standard" },
      { fromVal: "0.00001 MΩ", toVal: "10,000 mΩ", extra: "10 Ω power resistor" },
      { fromVal: "0.0001 MΩ", toVal: "100,000 mΩ", extra: "100 Ω transmission line terminator" },
      { fromVal: "0.001 MΩ", toVal: "1,000,000 mΩ", extra: "1.0 kΩ pull-up resistor" },
      { fromVal: "0.0047 MΩ", toVal: "4,700,000 mΩ", extra: "4.7 kΩ I²C bus pull-up" },
      { fromVal: "0.01 MΩ", toVal: "10,000,000 mΩ", extra: "10 kΩ general bias resistor" },
      { fromVal: "0.047 MΩ", toVal: "47,000,000 mΩ", extra: "47 kΩ op-amp feedback resistor" },
      { fromVal: "0.1 MΩ", toVal: "100,000,000 mΩ", extra: "100 kΩ ADC input impedance" },
      { fromVal: "0.5 MΩ", toVal: "500,000,000 mΩ", extra: "500 kΩ audio volume control" },
      { fromVal: "1.0 MΩ", toVal: "1,000,000,000 mΩ", extra: "1.0 MΩ ESD personnel safety resistor" },
      { fromVal: "2.0 MΩ", toVal: "2,000,000,000 mΩ", extra: "2.0 MΩ sensor amplifier input" },
      { fromVal: "10.0 MΩ", toVal: "10,000,000,000 mΩ", extra: "10.0 MΩ DMM DC voltage probe" }
    ]
  },
  applications: {
    title: "Multi-Decade Electrical Engineering Applications",
    items: [
      {
        title: "ATE System Scaling & Normalization",
        text: "Semiconductor automated test systems (ATE) use single floating-point math engines to model resistances spanning milliohms (DUT ground plane) to megohms (DUT gate leakage)."
      },
      {
        title: "Battery Management System (BMS) Modeling",
        text: "BMS firmware tracks battery pack isolation resistance in megohms (high-voltage isolation from chassis) while simultaneously measuring individual cell internal ESR in milliohms."
      },
      {
        title: "Printed Circuit Board Contamination vs. Trace Resistance",
        text: "PCB quality engineers compare copper trace resistance (typically 5 to 50 mΩ) against surface isolation resistance between adjacent traces (ideally >10 MΩ)."
      },
      {
        title: "Relay & Contactor Health Monitoring",
        text: "Substation diagnostic crews verify closed contact resistance in milliohms (<5 mΩ) and open contact dielectric isolation in megohms (>100 MΩ)."
      }
    ]
  },
  pitfalls: {
    title: "Common Measurement & Notation Traps",
    items: [
      "Case confusion (mΩ vs. MΩ): Lowercase 'm' denotes milli (10⁻³), whereas uppercase 'M' denotes mega (10⁶). Mistaking one for the other creates an erroneous factor of 1,000,000,000.",
      "SPICE simulator netlist errors: In SPICE, '1m' is 1 milliohm, while '1MEG' is 1 megohm. Entering '1M' for a megohm resistor will mistakenly simulate a 1 milliohm dead short.",
      "Lead resistance in milliohm measurements: Milliohm readings cannot be taken with standard 2-wire multimeter leads (which add 100–500 mΩ of lead resistance); 4-wire Kelvin sensing is required.",
      "Floating ground leakage: High megohm readings are extremely sensitive to capacitive pickup and humidity, whereas milliohm readings are sensitive to thermoelectric voltages (Seebeck effect)."
    ]
  },
  faqs: [
    {
      question: "How do you convert megohms to milliohms?",
      answer: "Multiply the megohm value by 1,000,000,000 (10⁹). For example, 0.005 MΩ × 1,000,000,000 = 5,000,000 mΩ."
    },
    {
      question: "How many milliohms are in one megohm?",
      answer: "There are exactly 1,000,000,000 milliohms (one billion milliohms) in 1 megohm (1 MΩ = 10⁹ mΩ)."
    },
    {
      question: "How do you convert milliohms back to megohms?",
      answer: "Divide the milliohm value by 1,000,000,000, or multiply by 10⁻⁹ (0.000000001). For example, 2,000,000 mΩ ÷ 10⁹ = 0.002 MΩ."
    },
    {
      question: "Why is there such a large difference between MΩ and mΩ?",
      answer: "They use different SI prefixes: 'mega' represents 10⁶ (1,000,000), while 'milli' represents 10⁻³ (0.001). The difference is 10⁶ ÷ 10⁻³ = 10⁹ (one billion)."
    },
    {
      question: "What does 1 mΩ measure compared to 1 MΩ?",
      answer: "1 mΩ is an ultra-low resistance typical of battery shunts or closed switch contacts. 1 MΩ is a high resistance typical of safety insulation or ESD ground straps."
    },
    {
      question: "What is 0.001 MΩ in milliohms?",
      answer: "0.001 MΩ (which is 1,000 Ω or 1 kΩ) multiplied by 1,000,000,000 equals exactly 1,000,000 mΩ."
    },
    {
      question: "Why do engineers use both units in power systems?",
      answer: "Power systems require measuring both paths: low resistance in milliohms along intended conductors to minimize heat loss (I²R), and high resistance in megohms across insulation to prevent ground faults."
    },
    {
      question: "What is 10 MΩ in milliohms?",
      answer: "10 MΩ multiplied by 10⁹ equals 10,000,000,000 mΩ (ten billion milliohms)."
    }
  ],
  relatedList: [
    { label: "Megohm to Ohm", from: "megohm", to: "ohm" },
    { label: "Megohm to Microohm", from: "megohm", to: "microohm" },
    { label: "Milliohm to Megohm", from: "milliohm", to: "megohm" },
    { label: "Milliohm to Ohm", from: "milliohm", to: "ohm" },
    { label: "Ohm to Milliohm", from: "ohm", to: "milliohm" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "Keithley Instruments - Low Level Measurements Handbook: Precision DC Current, Voltage, and Resistance",
    "IEEE Std 43-2013 - Recommended Practice for Testing Insulation Resistance of Electric Machinery"
  ]
};
