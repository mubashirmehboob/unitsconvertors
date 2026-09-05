import { CustomArticleData } from "./types";

export const megohmToKilohm: CustomArticleData = {
  fromUnitId: "megohm",
  toUnitId: "kilohm",
  seoTitle: "Megohm to Kilohm Converter (MΩ to kΩ)",
  metaDescription: "Convert megohms to kilohms (MΩ to kΩ) with exact SI prefix conversion formulas, circuit design calculations, reference tables, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/megohm-to-kilohm",
  h1: "Megohm to Kilohm Converter",
  introduction: [
    "Electrical engineers, electronic technicians, and circuit designers regularly translate component impedance values between megohms (MΩ) and kilohms (kΩ). Both units are decimal multiples of the fundamental SI unit of electrical resistance, the ohm (Ω). While kilohms dominate general-purpose analog circuit design, filtering, and biasing networks, megohms describe ultra-high impedances such as sensor interfaces, insulation barriers, and leakage paths.",
    "The prefix 'mega' signifies 10⁶ (one million), while 'kilo' represents 10³ (one thousand). Because the difference between the two prefixes is three orders of magnitude (10³), converting megohms to kilohms is a clean, exact multiplication by 1,000. For instance, a 2.2 MΩ bias resistor is equivalent to exactly 2,200 kΩ.",
    "This technical guide details the conversion mechanics between megohms and kilohms, provides step-by-step engineering calculations, highlights standard resistor decade values (E12, E24, E96), and features comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert megohms (MΩ) to kilohms (kΩ), multiply the megohm value by 1,000. For example, 1.5 MΩ equals 1,500 kΩ, and 0.47 MΩ equals 470 kΩ.",
    formulaDisplay: "\\text{k}\\Omega = \\text{M}\\Omega \\times 1{,}000",
    subtext: "1 Megohm is equal to exactly 1,000 Kilohms (1 MΩ = 10³ kΩ)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megohm (MΩ)",
    text: "The megohm (symbol: MΩ) is a decimal multiple of the ohm, representing 1,000,000 ohms or 1,000 kilohms. It is primarily specified where current flow must be severely constrained, such as in high-voltage divider probes, insulation resistance testers, gate pulldown resistors for high-impedance MOSFETs, and electrometer amplifier inputs."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilohm (kΩ)",
    text: "The kilohm (symbol: kΩ) represents 1,000 ohms (10³ Ω). It is the most ubiquitous impedance unit in small-signal electronic design, appearing constantly in operational amplifier feedback loops, RC timing circuits, pull-up/pull-down bus terminators (e.g., I²C 4.7 kΩ), and transistor biasing."
  },
  relationship: "The relationship between megohms and kilohms is defined by the SI prefix ratio 10⁶ / 10³ = 10³ = 1,000. Exactly one thousand kilohms make up one megohm: 1 MΩ = 1,000 kΩ. Inversely, 1 kΩ = 0.001 MΩ (10⁻³ MΩ).",
  relationshipTitle: "Megohm to Kilohm Standard Equivalences",
  relationshipItems: [
    { label: "0.01 MΩ", value: "10 kΩ (Standard I²C pull-up / General bias)" },
    { label: "0.10 MΩ", value: "100 kΩ (Op-amp input divider resistor)" },
    { label: "0.47 MΩ", value: "470 kΩ (Class-A tube grid leak resistor)" },
    { label: "1.00 MΩ", value: "1,000 kΩ (ESD wrist strap safety resistance)" },
    { label: "2.20 MΩ", value: "2,200 kΩ (High-pass RC sensor coupling)" },
    { label: "10.00 MΩ", value: "10,000 kΩ (DMM DC voltage input impedance)" }
  ],
  formula: {
    text: "Multiply the resistance in megohms by 1,000 to determine the resistance in kilohms.",
    math: "R_{(\\text{k}\\Omega)} = R_{(\\text{M}\\Omega)} \\times 1{,}000 = R_{(\\text{M}\\Omega)} \\times 10^3",
    subtext: "To convert kilohms back to megohms, divide the kilohm value by 1,000."
  },
  formulaTitle: "MΩ to kΩ Conversion Formula",
  practicalTip: {
    title: "3-Decimal Right Shift Rule",
    text: "To convert megohms to kilohms in your head, simply move the decimal point three places to the right. For example, 0.68 MΩ becomes 680 kΩ, and 4.7 MΩ becomes 4,700 kΩ."
  },
  expertNote: {
    title: "Resistor Color Codes and Decade Marking",
    text: "On 4-band and 5-band color-coded resistors, the difference between a kilohm and a megohm rating is simply an adjustment of the multiplier band. For example, a 1 kΩ resistor has bands Brown-Black-Red (1-0-×10² Ω), while a 1 MΩ resistor has bands Brown-Black-Green (1-0-×10⁵ Ω)."
  },
  examples: {
    title: "Step-by-Step MΩ to kΩ Worked Calculations",
    items: [
      {
        title: "Example 1: Audio Tube Amplifier Grid-Leak Resistor",
        subtitle: "A vintage guitar amplifier schematic specifies a 0.47 MΩ grid-leak resistor on the input 12AX7 pre-amp tube. Express this value in kilohms.",
        steps: [
          "State the value in megohms: R = 0.47 MΩ.",
          "Multiply by 1,000: 0.47 × 1,000.",
          "Compute: 0.47 × 1,000 = 470.",
          "Result: 0.47 MΩ equals exactly 470 kΩ."
        ]
      },
      {
        title: "Example 2: Multimeter Input Loading Analysis",
        subtitle: "A bench multimeter with a 10 MΩ DC input impedance is used to probe a high-impedance voltage divider. What is its input resistance in kilohms?",
        steps: [
          "Identify the megohm rating: R = 10 MΩ.",
          "Apply the conversion factor: 10 × 1,000.",
          "Compute: 10 × 1,000 = 10,000.",
          "Result: 10 MΩ equals 10,000 kΩ."
        ]
      },
      {
        title: "Example 3: Low-Frequency RC Timing Circuit",
        subtitle: "An ultra-low power oscillator requires an RC timing network with a resistance of 2.2 MΩ. What is this value in kilohms?",
        steps: [
          "Identify the resistance: R = 2.2 MΩ.",
          "Multiply by 1,000: 2.2 × 1,000.",
          "Compute: 2.2 × 1,000 = 2,200.",
          "Result: 2.2 MΩ equals 2,200 kΩ."
        ]
      }
    ]
  },
  table: {
    title: "Megohm to Kilohm Standard Decade Table",
    headers: ["Megohms (MΩ)", "Kilohms (kΩ)", "Typical Electronic Application"],
    rows: [
      { fromVal: "0.01 MΩ", toVal: "10 kΩ", extra: "Microcontroller general-purpose pull-up" },
      { fromVal: "0.022 MΩ", toVal: "22 kΩ", extra: "Audio pre-amplifier collector load" },
      { fromVal: "0.047 MΩ", toVal: "47 kΩ", extra: "Bipolar transistor base bias network" },
      { fromVal: "0.1 MΩ", toVal: "100 kΩ", extra: "Operational amplifier inverting input bias" },
      { fromVal: "0.22 MΩ", toVal: "220 kΩ", extra: "Capacitor bleeder discharge network" },
      { fromVal: "0.47 MΩ", toVal: "470 kΩ", extra: "Vacuum tube input grid resistor" },
      { fromVal: "1.0 MΩ", toVal: "1,000 kΩ", extra: "Electrostatic discharge (ESD) wrist strap" },
      { fromVal: "2.2 MΩ", toVal: "2,200 kΩ", extra: "Piezoelectric sensor charge amp feedback" },
      { fromVal: "3.3 MΩ", toVal: "3,300 kΩ", extra: "CMOS high-voltage gate discharge" },
      { fromVal: "4.7 MΩ", toVal: "4,700 kΩ", extra: "Photomultiplier voltage divider stage" },
      { fromVal: "10.0 MΩ", toVal: "10,000 kΩ", extra: "DMM high-impedance DC voltage input" },
      { fromVal: "20.0 MΩ", toVal: "20,000 kΩ", extra: "Low-leakage electrolytic capacitor quality test" }
    ]
  },
  applications: {
    title: "Practical Circuit Design Applications",
    items: [
      {
        title: "BOM & Component Sourcing Standardization",
        text: "Bill of materials (BOM) management systems often consolidate passive component inventories in kilohms (e.g., listing a 1 MΩ resistor as 1000k) to simplify relational database queries."
      },
      {
        title: "High-Impedance Sensor Interface Design",
        text: "Piezoelectric transducers and pH sensors output microscopic currents, requiring transimpedance amplifiers with feedback resistances ranging from 500 kΩ to 10 MΩ (500 kΩ to 10,000 kΩ)."
      },
      {
        title: "SPICE Simulation Netlists",
        text: "In SPICE circuit simulators (LTspice, PSpice), 'M' stands for milli (10⁻³), while 'MEG' represents mega (10⁶). Engineers converting between MΩ and kΩ must enter values correctly (e.g., 1MEG or 1000k) to prevent simulation errors."
      },
      {
        title: "Low-Power RTC Crystal Oscillator Circuits",
        text: "Real-time clock (RTC) crystal oscillator circuits often incorporate a feedback bias resistor between 5 MΩ and 15 MΩ (5,000 kΩ and 15,000 kΩ) across the inverter gate."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering & Simulation Traps",
    items: [
      "SPICE syntax traps: In SPICE netlists, '1M' means 1 milliohm (10⁻³ Ω), NOT 1 megohm. To model a 1 MΩ resistor in SPICE, you must enter '1MEG' or '1000k'.",
      "Confusing metric prefixes: 1 MΩ is 1,000 kΩ, not 100 kΩ. Always verify the three-decimal shift.",
      "Parasitic parallel capacitance: Above 100 kΩ and 1 MΩ, tiny stray circuit board capacitances (1–2 pF) create unintended high-frequency poles, rolling off circuit bandwidth.",
      "Surface contamination: Solder flux and fingerprint oils on PCBs can conduct microamperes, effectively creating a 500 kΩ to 2,000 kΩ leak across a 10 MΩ resistor."
    ]
  },
  faqs: [
    {
      question: "How do you convert megohms to kilohms?",
      answer: "Multiply the value in megohms by 1,000. For example, 2.2 MΩ × 1,000 = 2,200 kΩ."
    },
    {
      question: "How many kilohms are in a megohm?",
      answer: "There are exactly 1,000 kilohms in 1 megohm (1 MΩ = 1,000 kΩ = 10³ kΩ)."
    },
    {
      question: "How do you convert kilohms back to megohms?",
      answer: "Divide the value in kilohms by 1,000, or multiply by 0.001. For example, 470 kΩ ÷ 1,000 = 0.47 MΩ."
    },
    {
      question: "Why do SPICE simulators use MEG instead of M?",
      answer: "Early SPICE engines were case-insensitive and used 'M' for milli (10⁻³). To avoid confusion, 'MEG' was established for mega (10⁶). Writing 1M in SPICE evaluates to 1 milliohm, while 1000k or 1MEG evaluates to 1 megohm."
    },
    {
      question: "What is 0.1 MΩ in kΩ?",
      answer: "0.1 MΩ multiplied by 1,000 equals exactly 100 kΩ."
    },
    {
      question: "What is 10 MΩ in kΩ?",
      answer: "10 MΩ multiplied by 1,000 equals exactly 10,000 kΩ."
    },
    {
      question: "What is the difference in resistance between a 1 kΩ and a 1 MΩ resistor?",
      answer: "A 1 MΩ resistor has 1,000 times higher electrical resistance than a 1 kΩ resistor (1,000,000 Ω vs. 1,000 Ω)."
    },
    {
      question: "Can I replace a 1 MΩ resistor with two 500 kΩ resistors?",
      answer: "Yes. Connecting two 500 kΩ resistors in series yields an equivalent resistance of exactly 500 kΩ + 500 kΩ = 1,000 kΩ = 1.0 MΩ."
    }
  ],
  relatedList: [
    { label: "Megohm to Ohm", from: "megohm", to: "ohm" },
    { label: "Kilohm to Megohm", from: "kilohm", to: "megohm" },
    { label: "Megohm to Gigaohm", from: "megohm", to: "gigaohm" },
    { label: "Kilohm to Ohm", from: "kilohm", to: "ohm" },
    { label: "Ohm to Kilohm", from: "ohm", to: "kilohm" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure)",
    "IEC 60063 - Preferred number series for resistors and capacitors",
    "Analog Devices - Technical Article: High Impedance Circuit Design Considerations",
    "IEEE Standard 100 - Authoritative Dictionary of IEEE Standards Terms"
  ]
};
