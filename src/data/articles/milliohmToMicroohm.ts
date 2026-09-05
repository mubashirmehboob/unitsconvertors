import { CustomArticleData } from "./types";

export const milliohmToMicroohm: CustomArticleData = {
  fromUnitId: "milliohm",
  toUnitId: "microohm",
  seoTitle: "Milliohm to Microohm Converter (mΩ to µΩ)",
  metaDescription: "Convert milliohms to microohms (mΩ to µΩ) with exact SI metric formulas, contact resistance testing, 4-wire Kelvin calculations, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-resistance/milliohm-to-microohm",
  h1: "Milliohm to Microohm Converter",
  introduction: [
    "Electrical testing engineers, substation maintenance crews, and power electronics designers frequently convert resistance measurements between milliohms (mΩ) and microohms (µΩ). Both units are SI submultiples of the ohm (Ω), dedicated to quantifying low and ultra-low resistance conductive pathways where even tiny fractions of an ohm can cause substantial voltage drop, thermal dissipation, or power loss.",
    "The prefix 'milli' represents one-thousandth of an ohm (10⁻³ Ω), widely utilized for battery internal resistance, current-sensing shunts, and printed circuit board power traces. The prefix 'micro' represents one-millionth of an ohm (10⁻⁶ Ω), essential for measuring circuit breaker contact resistance (Ductor testing), massive copper busbar bolted joints, and aircraft lightning-protection bonding straps.",
    "Because the ratio between the milli (10⁻³) and micro (10⁻⁶) prefixes is three orders of magnitude (10³), converting milliohms to microohms is an exact multiplication by 1,000. For instance, a 15 mΩ current shunt contains exactly 15,000 µΩ.",
    "This engineering guide explains the conversion mechanics, provides step-by-step worked calculations, details 4-wire Kelvin measurement principles, and presents practical reference tables."
  ],
  quickAnswer: {
    text: "To convert milliohms (mΩ) to microohms (µΩ), multiply the milliohm value by 1,000. For example, 5 mΩ equals 5,000 µΩ, and 0.25 mΩ equals 250 µΩ.",
    formulaDisplay: "\\mu\\Omega = \\text{m}\\Omega \\times 1{,}000",
    subtext: "1 Milliohm is equal to exactly 1,000 Microohms (1 mΩ = 10³ µΩ)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliohm (mΩ)",
    text: "The milliohm (symbol: mΩ) is an SI submultiple equal to 0.001 ohms (10⁻³ Ω). It is standard in low-impedance electrical design, including power MOSFET on-resistance ($R_{DS(on)}$), small motor windings, battery pack internal ESR, and DC-DC converter output current sensing."
  },
  aboutTargetUnit: {
    title: "Understanding the Microohm (µΩ)",
    text: "The microohm (symbol: µΩ) is an SI submultiple equal to 0.000001 ohms (10⁻⁶ Ω). It characterizes ultra-low resistance metallic junctions, high-voltage switchgear contacts, spot welds, transformer tap changer contacts, and aerospace ground bonding paths."
  },
  relationship: "The relationship between milliohms and microohms is defined by the SI prefix ratio 10⁻³ / 10⁻⁶ = 10³ = 1,000. Exactly one thousand microohms make up one milliohm: 1 mΩ = 1,000 µΩ. Inversely, 1 µΩ = 0.001 mΩ (10⁻³ mΩ).",
  relationshipTitle: "Milliohm to Microohm Standard Equivalences",
  relationshipItems: [
    { label: "0.05 mΩ", value: "50 µΩ (High-voltage circuit breaker contact limit)" },
    { label: "0.10 mΩ", value: "100 µΩ (Substation bolted busbar joint standard)" },
    { label: "1.00 mΩ", value: "1,000 µΩ (100 A current-sensing precision shunt)" },
    { label: "2.50 mΩ", value: "2,500 µΩ (Aerospace lightning bonding strap maximum)" },
    { label: "10.00 mΩ", value: "10,000 µΩ (Power MOSFET channel R_DS(on))" },
    { label: "50.00 mΩ", value: "50,000 µΩ (Lithium battery cell internal ESR)" }
  ],
  formula: {
    text: "Multiply the resistance in milliohms by 1,000 to determine the resistance in microohms.",
    math: "R_{(\\mu\\Omega)} = R_{(\\text{m}\\Omega)} \\times 1{,}000 = R_{(\\text{m}\\Omega)} \\times 10^3",
    subtext: "To convert microohms back to milliohms, divide the microohm value by 1,000."
  },
  formulaTitle: "mΩ to µΩ Conversion Formula",
  practicalTip: {
    title: "3-Decimal Right Shift Rule",
    text: "To convert milliohms to microohms in your head, shift the decimal point three places to the right. For example, 0.045 mΩ becomes 45 µΩ, and 1.2 mΩ becomes 1,200 µΩ."
  },
  expertNote: {
    title: "Digital Low Resistance Ohmmeters (DLRO) & Ductor Testing",
    text: "Field technicians using digital low resistance ohmmeters (DLRO or Ductor testers) typically inject 10 A to 100 A of DC current to measure millivolt drops across contacts. Digital test sets often switch displays between mΩ and µΩ automatically based on the measured range, making quick mental conversion essential for field verification."
  },
  examples: {
    title: "Step-by-Step mΩ to µΩ Worked Calculations",
    items: [
      {
        title: "Example 1: Circuit Breaker Contact Resistance",
        subtitle: "A substation maintenance technician measures a vacuum circuit breaker contact resistance of 0.038 mΩ. Express this value in microohms.",
        steps: [
          "State the value in milliohms: R = 0.038 mΩ.",
          "Multiply by 1,000: 0.038 × 1,000.",
          "Compute: 0.038 × 1,000 = 38.",
          "Result: 0.038 mΩ equals exactly 38 µΩ (within the typical <50 µΩ specification)."
        ]
      },
      {
        title: "Example 2: Precision Current Shunt Resistor",
        subtitle: "A power meter uses a 2.0 mΩ current-sensing shunt resistor. What is this value in microohms?",
        steps: [
          "Identify the shunt resistance: R = 2.0 mΩ.",
          "Multiply by 1,000: 2.0 × 1,000.",
          "Compute: 2.0 × 1,000 = 2,000.",
          "Result: 2.0 mΩ equals 2,000 µΩ."
        ]
      },
      {
        title: "Example 3: Aircraft Airframe Bonding Strap",
        subtitle: "An aerospace lightning protection bonding strap specification permits a maximum resistance of 1.5 mΩ. Express this in microohms.",
        steps: [
          "Identify the maximum allowable resistance: R = 1.5 mΩ.",
          "Multiply by 1,000: 1.5 × 1,000.",
          "Compute: 1.5 × 1,000 = 1,500.",
          "Result: 1.5 mΩ equals 1,500 µΩ."
        ]
      }
    ]
  },
  table: {
    title: "Milliohm to Microohm Engineering Reference Table",
    headers: ["Milliohms (mΩ)", "Microohms (µΩ)", "Typical Application Context"],
    rows: [
      { fromVal: "0.01 mΩ", toVal: "10 µΩ", extra: "Solid copper busbar section" },
      { fromVal: "0.025 mΩ", toVal: "25 µΩ", extra: "Gas-insulated switchgear (GIS) contact" },
      { fromVal: "0.05 mΩ", toVal: "50 µΩ", extra: "High-voltage vacuum breaker contact limit" },
      { fromVal: "0.1 mΩ", toVal: "100 µΩ", extra: "Bolted electrical utility busbar joint" },
      { fromVal: "0.25 mΩ", toVal: "250 µΩ", extra: "Transformer tap changer contact" },
      { fromVal: "0.5 mΩ", toVal: "500 µΩ", extra: "Heavy-duty battery disconnect switch" },
      { fromVal: "1.0 mΩ", toVal: "1,000 µΩ", extra: "100 A current-sensing shunt" },
      { fromVal: "2.5 mΩ", toVal: "2,500 µΩ", extra: "Aircraft airframe lightning bonding strap" },
      { fromVal: "5.0 mΩ", toVal: "5,000 µΩ", extra: "Automotive battery module interconnect" },
      { fromVal: "10.0 mΩ", toVal: "10,000 µΩ", extra: "Power MOSFET on-resistance (R_DS(on))" },
      { fromVal: "25.0 mΩ", toVal: "25,000 µΩ", extra: "Lithium-ion 21700 cell internal ESR" },
      { fromVal: "100.0 mΩ", toVal: "100,000 µΩ", extra: "Automotive relay contact nominal resistance" }
    ]
  },
  applications: {
    title: "Low-Resistance Testing & Power Distribution Applications",
    items: [
      {
        title: "Substation Switchgear Contact Resistance Testing",
        text: "Maintenance specifications prescribe that high-voltage circuit breaker contacts must not exceed 50 µΩ (0.05 mΩ). Technicians convert DLRO readings between mΩ and µΩ to compare field measurements against manufacturer factory acceptance test (FAT) reports."
      },
      {
        title: "Electric Vehicle Battery Interconnect Validation",
        text: "Automated production lines laser-weld copper busbars between battery cells, measuring joint resistance in microohms (<20 µΩ) to prevent localized hotspots during fast charging."
      },
      {
        title: "Aerospace Lightning Bonding Verification",
        text: "FAA and military standards mandate that all structural metallic assemblies on aircraft have electrical bonding paths under 2.5 mΩ (2,500 µΩ) to safely conduct lightning currents without arcing."
      },
      {
        title: "Transformer Bushing and Tap Changer Audits",
        text: "Tap changer contacts degrade through arc erosion. Measuring resistance in microohms detects contact pitting before catastrophic thermal runaway occurs."
      }
    ]
  },
  pitfalls: {
    title: "Common Low-Resistance Measurement Traps",
    items: [
      "Neglecting 4-wire Kelvin connections: Test lead resistance (typically 100,000 to 300,000 µΩ) completely overwhelms microohm measurements unless separate current and potential leads are used.",
      "Thermoelectric voltages (Seebeck effect): Temperature differences between copper busbars and steel/brass meter clamps produce small voltages that distort DC microohm readings. Modern DLRO units reverse polarity automatically to cancel thermal EMF.",
      "Insufficient test current: Injecting only a few milliamperes cannot develop enough voltage across microohms for reliable meter resolution; 10 A to 100 A test sets are recommended.",
      "Prefix confusion: Multiplying by 1,000 converts mΩ to µΩ. Dividing by 1,000 converts µΩ back to mΩ."
    ]
  },
  faqs: [
    {
      question: "How do you convert milliohms to microohms?",
      answer: "Multiply the milliohm value by 1,000. For example, 0.05 mΩ × 1,000 = 50 µΩ."
    },
    {
      question: "How many microohms are in one milliohm?",
      answer: "There are exactly 1,000 microohms in 1 milliohm (1 mΩ = 1,000 µΩ = 10³ µΩ)."
    },
    {
      question: "How do you convert microohms back to milliohms?",
      answer: "Divide the microohm value by 1,000, or multiply by 0.001. For example, 250 µΩ ÷ 1,000 = 0.25 mΩ."
    },
    {
      question: "What is 1 mΩ in microohms?",
      answer: "1 mΩ is equal to exactly 1,000 microohms (1,000 µΩ)."
    },
    {
      question: "Why is circuit breaker contact resistance measured in microohms?",
      answer: "Circuit breakers carry thousands of amperes. A contact resistance of just 1 milliohm carrying 2,000 A would dissipate $P = I^2 R = (2000)^2 \times 0.001 = 4,000\text{ W}$ of heat, destroying the breaker. Contacts must be maintained below 50 µΩ."
    },
    {
      question: "What is 0.1 mΩ in microohms?",
      answer: "0.1 mΩ multiplied by 1,000 equals exactly 100 µΩ."
    },
    {
      question: "What is a Ductor tester?",
      answer: "A Ductor tester is the traditional industrial name for a high-current Digital Low Resistance Ohmmeter (DLRO) designed specifically to measure microohm-level contact resistances in switchgear."
    },
    {
      question: "What is the difference between mΩ and µΩ?",
      answer: "A milliohm (mΩ) is 10⁻³ Ω (0.001 Ω), while a microohm (µΩ) is 10⁻⁶ Ω (0.000001 Ω). A milliohm is 1,000 times larger than a microohm."
    }
  ],
  relatedList: [
    { label: "Microohm to Milliohm", from: "microohm", to: "milliohm" },
    { label: "Milliohm to Ohm", from: "milliohm", to: "ohm" },
    { label: "Microohm to Ohm", from: "microohm", to: "ohm" },
    { label: "Ohm to Microohm", from: "ohm", to: "microohm" },
    { label: "Ohm to Milliohm", from: "ohm", to: "milliohm" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "IEEE Std C37.09 - IEEE Standard Test Procedure for AC High-Voltage Circuit Breakers Rated on a Symmetrical Current Basis",
    "Megger - A Guide to Low Resistance Testing (DLRO Application Note)",
    "MIL-B-5087B - Bonding, Electrical, and Lightning Protection for Aerospace Systems"
  ]
};
