import { CustomArticleData } from "./types";

export const ohmToMegohm: CustomArticleData = {
  fromUnitId: "ohm",
  toUnitId: "megohm",
  seoTitle: "Ohm to Megohm Converter (Ω to MΩ)",
  metaDescription: "Convert Ohms to Megohms (Ω to MΩ) with exact electrical resistance formulas, worked insulation examples, high-voltage testing tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/ohm-to-megohm",
  h1: "Ohm to Megohm Converter",
  introduction: [
    "In electrical power systems, high-voltage equipment, and precision analog instrumentation, resistance values frequently reach into millions of ohms. These large resistances are critical for electrical insulation integrity, electrostatic discharge (ESD) protection, and ultra-low bias current amplifiers.",
    "The Ohm (Ω) is the foundational SI unit of resistance, while the Megohm (MΩ) represents one million ohms (10⁶ Ω). Industrial megohmmeter ('Megger') testing, printed circuit board surface resistivity measurements, and high-voltage divider networks are universally specified in megohms.",
    "This converter provides exact mathematical conversions between Ohms and Megohms, worked electrical engineering examples, insulation testing benchmark tables, and practical design guidance for electrical and electronics professionals."
  ],
  quickAnswer: {
    text: "To convert Ohms to Megohms, divide the resistance value in Ohms by 1,000,000 (or multiply by 0.000001 / 10⁻⁶). For example, a 10,000,000 Ω insulation measurement equals 10 MΩ, and 470,000 Ω equals 0.47 MΩ.",
    formulaDisplay: "MΩ = Ω ÷ 1,000,000",
    subtext: "1 Ohm is equal to exactly 0.000001 Megohm (10⁻⁶ MΩ)."
  },
  aboutSourceUnit: {
    title: "What is an Ohm (Ω)?",
    text: "The Ohm (symbol: Ω) is the SI derived unit of electrical resistance. Defined by Georg Simon Ohm's discovery, one ohm represents the resistance that permits one ampere of electric current to flow under an applied potential difference of one volt (1 Ω = 1 V / 1 A). In mechanical SI units, 1 Ω = 1 kg·m²·s⁻³·A⁻²."
  },
  aboutTargetUnit: {
    title: "Understanding Megohms (MΩ)",
    text: "The Megohm (symbol: MΩ) is a decimal multiple of the ohm equal to 1,000,000 ohms (10⁶ Ω). Megohms are used to quantify high-impedance electrical boundaries where current flow must be strictly suppressed to microamperes or nanoamperes, such as cable insulation, transformer windings, piezoelectric sensors, and ESD ground straps."
  },
  relationship: "The metric relationship between ohms and megohms is governed by the SI prefix 'mega' (10⁶): 1 MΩ = 1,000,000 Ω = 1,000 kΩ. Consequently, 1 Ω = 10⁻⁶ MΩ = 0.000001 MΩ.",
  relationshipTitle: "Ohm to Megohm Benchmark Scale",
  relationshipItems: [
    { label: "100,000 Ω", value: "0.1 MΩ (High-gain feedback loop)" },
    { label: "1,000,000 Ω", value: "1.0 MΩ (ESD wrist strap safety resistor)" },
    { label: "10,000,000 Ω", value: "10.0 MΩ (Digital Multimeter input impedance)" },
    { label: "100,000,000 Ω", value: "100.0 MΩ (Minimum cable insulation threshold)" },
    { label: "1,000,000,000 Ω", value: "1,000.0 MΩ (1 GΩ / High-voltage insulator)" }
  ],
  formula: {
    text: "Divide the resistance in Ohms by 1,000,000 to obtain the equivalent value in Megohms.",
    math: "R_{(M\\Omega)} = \\frac{R_{(\\Omega)}}{1000000} = R_{(\\Omega)} \\times 10^{-6}",
    subtext: "To convert megohms back to ohms, multiply the megohm value by 1,000,000."
  },
  formulaTitle: "Ohm to Megohm Conversion Formula",
  practicalTip: {
    title: "6-Decimal Left Shift Rule",
    text: "To convert ohms to megohms quickly in your head, shift the decimal point six places to the left. For instance, 4,700,000 Ω becomes 4.7 MΩ, and 2,200,000 Ω becomes 2.2 MΩ."
  },
  expertNote: {
    title: "DMM 10 MΩ Input Impedance Standard",
    text: "Standard bench and handheld digital multimeters (DMMs) feature an internal input resistance of 10,000,000 Ω (10 MΩ) in DC voltage mode. This high resistance ensures minimal circuit loading when measuring sensitive voltage divider nodes."
  },
  examples: {
    title: "Step-by-Step Ω to MΩ Worked Examples",
    items: [
      {
        title: "Example 1: ESD Wrist Strap Safety Resistor",
        subtitle: "Convert a 1,000,000 Ω static dissipation resistor to megohms.",
        steps: [
          "Identify value in Ohms: R = 1,000,000 Ω.",
          "Apply conversion formula: R_(MΩ) = 1,000,000 ÷ 1,000,000.",
          "Evaluate: 1,000,000 ÷ 1,000,000 = 1.0.",
          "Result: 1,000,000 Ω equals exactly 1.0 MΩ (1M0)."
        ]
      },
      {
        title: "Example 2: Motor Winding Insulation Test",
        subtitle: "A megohmmeter measures 45,000,000 Ω across motor phase insulation. Convert to megohms.",
        steps: [
          "Identify value in Ohms: R = 45,000,000 Ω.",
          "Apply conversion formula: R_(MΩ) = 45,000,000 ÷ 1,000,000.",
          "Evaluate: 45,000,000 ÷ 1,000,000 = 45.0.",
          "Result: 45,000,000 Ω equals 45 MΩ (Passes NEMA standard minimum)."
        ]
      },
      {
        title: "Example 3: Low-Current Bias Resistor",
        subtitle: "Convert a 470,000 Ω resistor to megohms.",
        steps: [
          "Identify value in Ohms: R = 470,000 Ω.",
          "Apply conversion formula: R_(MΩ) = 470,000 ÷ 1,000,000.",
          "Evaluate: 470,000 ÷ 1,000,000 = 0.47.",
          "Result: 470,000 Ω equals 0.47 MΩ (also written as 470 kΩ)."
        ]
      }
    ]
  },
  table: {
    title: "Ohm to Megohm High-Resistance Reference Table",
    headers: ["Resistance (Ω)", "Resistance (MΩ)", "Typical Industry Application"],
    rows: [
      { fromVal: "100,000 Ω", toVal: "0.1 MΩ", extra: "Audio pre-amp high-impedance load" },
      { fromVal: "220,000 Ω", toVal: "0.22 MΩ", extra: "Cathode bias in vacuum tube audio" },
      { fromVal: "470,000 Ω", toVal: "0.47 MΩ", extra: "Mains bleed-off discharge resistor" },
      { fromVal: "1,000,000 Ω", toVal: "1.0 MΩ", extra: "Standard ESD grounding lead safety limit" },
      { fromVal: "2,200,000 Ω", toVal: "2.2 MΩ", extra: "Oscilloscope 10× passive probe divider" },
      { fromVal: "4,700,000 Ω", toVal: "4.7 MΩ", extra: "Photomultiplier tube dynode string" },
      { fromVal: "10,000,000 Ω", toVal: "10.0 MΩ", extra: "Digital multimeter DC voltage input" },
      { fromVal: "20,000,000 Ω", toVal: "20.0 MΩ", extra: "Low-leakage electrolytic capacitor test" },
      { fromVal: "50,000,000 Ω", toVal: "50.0 MΩ", extra: "Industrial power cable insulation limit" },
      { fromVal: "100,000,000 Ω", toVal: "100.0 MΩ", extra: "Transformer core dielectric integrity" },
      { fromVal: "500,000,000 Ω", toVal: "500.0 MΩ", extra: "Substation high-voltage bus insulator" },
      { fromVal: "1,000,000,000 Ω", toVal: "1,000.0 MΩ", extra: "Ceramic high-voltage stand-off insulator" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Motor & Transformer Insulation Testing",
        text: "IEEE 43 guidelines dictate applying 500V or 1000V DC to verify winding insulation. Results in the tens of millions of ohms (20 MΩ to 100 MΩ) confirm healthy dielectric conditions free from moisture ingress."
      },
      {
        title: "Electrostatic Discharge (ESD) Protection",
        text: "ESD wristbands and bench mats integrate a 1,000,000 Ω (1 MΩ) resistor. This safely drains static charges without exposing personnel to lethal shock hazards if mains voltage is accidentally touched."
      },
      {
        title: "High-Voltage Divider Probes",
        text: "Oscilloscope 100:1 high-voltage probes employ a 99 MΩ series resistance paired with a 1 MΩ instrument input to measure kilovolt waveforms safely."
      },
      {
        title: "Gas Sensor & Ionization Detectors",
        text: "Smoke detectors and chemical sensor interfaces measure picoampere ionization currents flowing through air gaps with resistances exceeding 100 MΩ."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Prefix letter case errors: Writing 1 mΩ (milliohm = 10⁻³ Ω) instead of 1 MΩ (megohm = 10⁶ Ω) creates a 1,000,000,000× (one billion fold) error.",
      "Parallel surface leakage during measurement: Touching test leads with bare fingers introduces human body resistance (~50 kΩ to 100 kΩ) in parallel, falsifying 10 MΩ measurements.",
      "Humidity and PCB contamination: Flux residue on high-impedance circuit boards can drop surface resistance from 100 MΩ to under 1 MΩ.",
      "Voltage coefficient of resistance: High-value carbon resistors change resistance under applied voltage; precision measurements require specialized metal oxide or thick film resistors."
    ]
  },
  faqs: [
    {
      question: "How many Ohms are in a Megohm?",
      answer: "There are exactly 1,000,000 Ohms in 1 Megohm (1 MΩ = 10⁶ Ω = 1,000 kΩ). Conversely, 1 Ohm equals 0.000001 Megohm (10⁻⁶ MΩ)."
    },
    {
      question: "What is the formula to convert Ohms to Megohms?",
      answer: "The formula is: Resistance in MΩ = Resistance in Ω ÷ 1,000,000 (or R in Ω × 10⁻⁶). For example, 2,200,000 Ω ÷ 1,000,000 = 2.2 MΩ."
    },
    {
      question: "What is the difference between mΩ and MΩ?",
      answer: "Lower-case 'm' indicates milliohms (10⁻³ Ω = 0.001 Ω), used for ultra-low resistances like shunt resistors. Capital 'M' indicates megohms (10⁶ Ω = 1,000,000 Ω), used for high-resistance insulation and op-amp inputs. They differ by a factor of 1,000,000,000."
    },
    {
      question: "Why do ESD wrist straps have a 1 Megohm resistor?",
      answer: "A 1 MΩ (1,000,000 Ω) resistor limits current to a safe 0.12 mA at 120V or 0.23 mA at 230V mains voltage if the wearer touches live wiring, preventing electrocution while still bleeding off static electricity in milliseconds."
    },
    {
      question: "What is a good insulation resistance reading in megohms?",
      answer: "According to IEEE and NEMA standards, a general rule of thumb for clean, dry electrical equipment is 1 MΩ per 1,000 rated volts plus 1 MΩ. For a 480V motor, any reading above 5 MΩ is acceptable, while new equipment typically measures 50 MΩ to 1,000+ MΩ."
    },
    {
      question: "How do I convert 10 megohms to ohms?",
      answer: "Multiply 10 by 1,000,000: 10 × 1,000,000 = 10,000,000 Ω (10 million ohms)."
    },
    {
      question: "What does 1M0 or 4M7 mean on a resistor?",
      answer: "1M0 represents 1.0 Megohm (1,000,000 Ω), and 4M7 represents 4.7 Megohms (4,700,000 Ω). The letter 'M' acts as both the prefix and the decimal point in RKM code."
    },
    {
      question: "How does air humidity affect megohm measurements?",
      answer: "High humidity forms a microscopic moisture film across insulator surfaces. This creates parallel conductive paths that significantly lower measured resistance unless guarded probes and dry enclosures are used."
    }
  ],
  relatedList: [
    { label: "Ohm to Kilohm", from: "ohm", to: "kilohm" },
    { label: "Kilohm to Megohm", from: "kilohm", to: "megohm" },
    { label: "Ohm to Gigaohm", from: "ohm", to: "gigaohm" },
    { label: "Ohm to Milliohm", from: "ohm", to: "milliohm" },
    { label: "Kilohm to Ohm", from: "kilohm", to: "ohm" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "IEEE Std 43 - IEEE Recommended Practice for Testing Insulation Resistance of Electric Machinery",
    "IEC 60062 - Marking codes for resistors and capacitors",
    "ANSI/ESD S20.20 - Protection of Electrical and Electronic Parts, Assemblies and Equipment"
  ]
};
