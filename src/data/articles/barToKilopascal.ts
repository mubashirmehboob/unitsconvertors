import { CustomArticleData } from "./types";

export const barToKilopascal: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "kilopascal",
  seoTitle: "Bar to Kilopascal Converter (bar to kPa)",
  metaDescription: "Convert bar to kilopascals (bar to kPa) with exact 100× metric precision. Learn the conversion formula, automotive and HVAC calculation examples, tables, and FAQs.",
  h1: "Bar to Kilopascal Converter",
  introduction: [
    "Converting bar to kilopascals (kPa) is one of the most common calculations in modern automotive maintenance, building HVAC systems, refrigeration diagnostics, and pneumatic engineering. Both units share metric roots and are widely used across Europe, Asia, and international industry standards. While tire pressure gauges, air compressor tanks, and gas regulators often display pressure in bar, vehicle manuals, building codes, and international technical specifications express pressure in kilopascals.",
    "Because both units are strictly defined within the metric system, their relationship is exact. One bar is defined as exactly 100,000 Pascals, and one kilopascal equals 1,000 Pascals. Consequently, one bar equals exactly 100 kilopascals. To convert bar into kilopascals, simply multiply the bar value by 100 (or move the decimal point two places to the right).",
    "This guide provides the exact conversion formula, worked step-by-step calculation examples, an industrial reference table, common practical mistakes, and answers to frequently asked technical questions."
  ],
  quickAnswer: {
    text: "To convert bar to kilopascals, multiply the value in bar by 100. For example, a car tire pressure of 2.3 bar equals exactly 230 kPa.",
    formulaDisplay: "kPa = bar × 100",
    subtext: "Exact definition: 1 bar = 100 kPa = 0.1 MPa = 100,000 Pa.\n1 kPa = 0.01 bar."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals. Widely used on European pressure gauges, hydraulic test sets, diving cylinders, and compressor tanks, 1 bar represents approximately average sea-level atmospheric pressure (1.01325 bar)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official SI decimal multiple of the Pascal, representing 1,000 Pascals ($1\\text{ kN/m}^2$). It is the standard pressure unit for automotive tire pressure labeling worldwide, weather reports in Canada and Australia, building ventilation standards, and refrigeration thermodynamics."
  },
  relationship: "The mathematical relationship between bar and kilopascal is exact: 1 bar equals exactly 100 kPa, and 1 kPa equals exactly 0.01 bar. Converting between them requires only scaling by a factor of 100.",
  relationshipTitle: "Bar to Kilopascal Engineering Benchmarks",
  relationshipItems: [
    { label: "0.01 bar", value: "1.0 kPa (HVAC building ventilation differential)" },
    { label: "0.50 bar", value: "50.0 kPa (Low-pressure turbocharger boost)" },
    { label: "1.00 bar", value: "100.0 kPa (Standard metric atmospheric baseline)" },
    { label: "2.20 bar", value: "220.0 kPa (Compact sedan tire inflation specification)" },
    { label: "6.00 bar", value: "600.0 kPa (Industrial assembly line compressed air)" },
    { label: "16.00 bar", value: "1,600.0 kPa (Refrigerant R410A condensing pressure)" }
  ],
  formula: {
    text: "Multiply the pressure in bar by 100 to obtain the equivalent pressure in kilopascals.",
    math: "\\text{kPa} = \\text{bar} \\times 100",
    subtext: "To convert kilopascals back to bar, divide the kPa value by 100 (or multiply by 0.01)."
  },
  formulaTitle: "Bar to Kilopascal Conversion Formula",
  practicalTip: {
    title: "The 2-Decimal Right Shift Rule",
    text: "Because 1 bar equals 100 kPa, converting bar to kPa is simply a matter of shifting the decimal point two digits to the right. For example, 2.4 bar becomes 240 kPa, and 0.35 bar becomes 35 kPa."
  },
  expertNote: {
    title: "Automotive Tire Pressure Standards",
    text: "Vehicle door jamb stickers in modern vehicles list recommended cold tire pressures in both kPa and bar (e.g., 220 kPa / 2.2 bar or 250 kPa / 2.5 bar). Technicians using digital inflators calibrated in kPa can instantly set their tool by multiplying the bar specification by 100."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Tire Inflation (2.2 bar)",
        subtitle: "A driver checks their vehicle door jamb sticker, which lists a front tire pressure of 2.2 bar. Convert this value to kilopascals for a digital inflator gauge.",
        steps: [
          "State starting tire pressure: 2.2 bar.",
          "Apply conversion formula: kPa = 2.2 × 100.",
          "Calculate: 2.2 × 100 = 220.",
          "Result: 2.2 bar equals exactly 220 kPa."
        ]
      },
      {
        title: "Example 2: Domestic Boiler System Pressure (1.5 bar)",
        subtitle: "A home central heating combi-boiler gauge reads an internal water loop pressure of 1.5 bar. Convert this to kilopascals.",
        steps: [
          "Identify gauge reading: 1.5 bar.",
          "Apply formula: kPa = 1.5 × 100.",
          "Calculate: 1.5 × 100 = 150.",
          "Result: 1.5 bar corresponds to exactly 150 kPa."
        ]
      },
      {
        title: "Example 3: Heavy Duty Truck Air Brake Circuit (8.5 bar)",
        subtitle: "A commercial vehicle dual-circuit air brake reservoir charges to a governor cut-out pressure of 8.5 bar. Convert this to kilopascals.",
        steps: [
          "Identify tank pressure: 8.5 bar.",
          "Multiply by 100: kPa = 8.5 × 100.",
          "Calculate: 8.5 × 100 = 850.",
          "Result: 8.5 bar equals exactly 850 kPa."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Kilopascal Conversion Table",
    headers: ["Bar (bar)", "Kilopascals (kPa)", "Pascals (Pa)", "PSI Equivalent", "Typical Application"],
    rows: [
      { fromVal: "0.05 bar", toVal: "5.0 kPa", extra: "5,000 Pa", extra2: "0.725 psi", extra3: "Residential gas burner manifold" },
      { fromVal: "0.10 bar", toVal: "10.0 kPa", extra: "10,000 Pa", extra2: "1.450 psi", extra3: "Medical suction canister regulator" },
      { fromVal: "0.50 bar", toVal: "50.0 kPa", extra: "50,000 Pa", extra2: "7.252 psi", extra3: "Automotive engine boost pressure" },
      { fromVal: "1.00 bar", toVal: "100.0 kPa", extra: "100,000 Pa", extra2: "14.504 psi", extra3: "Standard metric atmospheric baseline" },
      { fromVal: "1.50 bar", toVal: "150.0 kPa", extra: "150,000 Pa", extra2: "21.756 psi", extra3: "Residential hydronic heating loop" },
      { fromVal: "2.00 bar", toVal: "200.0 kPa", extra: "200,000 Pa", extra2: "29.008 psi", extra3: "Municipal potable water service" },
      { fromVal: "2.20 bar", toVal: "220.0 kPa", extra: "220,000 Pa", extra2: "31.908 psi", extra3: "Standard passenger car tire pressure" },
      { fromVal: "2.50 bar", toVal: "250.0 kPa", extra: "250,000 Pa", extra2: "36.259 psi", extra3: "Loaded SUV or crossover tire pressure" },
      { fromVal: "3.00 bar", toVal: "300.0 kPa", extra: "300,000 Pa", extra2: "43.511 psi", extra3: "Commercial building water booster" },
      { fromVal: "6.00 bar", toVal: "600.0 kPa", extra: "600,000 Pa", extra2: "87.023 psi", extra3: "Industrial workshop compressed air line" },
      { fromVal: "8.50 bar", toVal: "850.0 kPa", extra: "850,000 Pa", extra2: "123.282 psi", extra3: "Commercial truck pneumatic brake reservoir" },
      { fromVal: "10.00 bar", toVal: "1,000.0 kPa", extra: "1,000,000 Pa", extra2: "145.038 psi", extra3: "Steam piping isolation valve test" }
    ]
  },
  applications: {
    title: "Everyday and Industrial Use Cases",
    items: [
      {
        title: "Automotive and Fleet Maintenance",
        text: "Service technicians cross-reference manufacturer technical service bulletins written in kilopascals against shop inflator gauges that read in bar."
      },
      {
        title: "HVAC and Refrigeration Diagnostics",
        text: "HVAC technicians read refrigerant suction and discharge pressures on analog manifold gauges marked in bar, then convert to kPa when recording compliance logs."
      },
      {
        title: "Municipal and Industrial Plumbing",
        text: "Plumbers measure mains water supply pressure in bar (typically 2 to 4 bar) and convert to kPa (200 to 400 kPa) when matching specifications for pressure-reducing valves (PRVs)."
      },
      {
        title: "Pneumatics and Factory Automation",
        text: "Automated assembly line actuators require precise compressed air regulator settings, often supplied in bar and recorded in engineering documentation in kPa."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of 100: Multiplying by 1,000 converts bar to millibar or megapascals to kPa, resulting in an answer ten times too high.",
      "Confusing bar with millibar: 1 bar = 100 kPa, whereas 1 millibar (mbar) = 0.1 kPa.",
      "Gauge pressure vs. absolute pressure: Pressure gauges indicate gauge pressure (relative to atmospheric pressure). When performing gas law calculations, add 101.3 kPa to gauge readings to obtain absolute pressure.",
      "Rounding errors with imperial units: Remember that the bar-to-kPa conversion is exact (×100), whereas conversions involving PSI are irrational approximations."
    ]
  },
  faqs: [
    {
      question: "How many kilopascals are in 1 bar?",
      answer: "There are exactly 100 kilopascals in 1 bar (1 bar = 100 kPa)."
    },
    {
      question: "What is the formula to convert bar to kPa?",
      answer: "The formula is: kPa = bar × 100. For example, 2.5 bar × 100 = 250 kPa."
    },
    {
      question: "How do you convert kilopascals back to bar?",
      answer: "Divide the kPa value by 100 (or multiply by 0.01). For example, 300 kPa ÷ 100 = 3 bar."
    },
    {
      question: "What is 2.2 bar tire pressure in kPa?",
      answer: "2.2 bar equals exactly 220 kPa (2.2 × 100 = 220 kPa)."
    },
    {
      question: "What is 2.5 bar in kPa?",
      answer: "2.5 bar equals exactly 250 kPa (2.5 × 100 = 250 kPa)."
    },
    {
      question: "What is 1 bar in Pascals?",
      answer: "1 bar equals exactly 100,000 Pascals (since 1 kPa = 1,000 Pa, 100 kPa × 1,000 = 100,000 Pa)."
    },
    {
      question: "Is 100 kPa equal to 1 bar?",
      answer: "Yes, exactly. 100 kPa is the exact definition of 1 bar in the metric system."
    },
    {
      question: "Why do cars use both bar and kPa for tire pressures?",
      answer: "Different regions favor different units: European service stations often use bar gauges, while vehicle safety regulations in North America and Asia mandate kilopascals as the primary metric standard."
    }
  ],
  relatedList: [
    { label: "Bar to Pascal", from: "bar", to: "pascal" },
    { label: "Bar to Megapascal", from: "bar", to: "megapascal" },
    { label: "Bar to PSI", from: "bar", to: "psi" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "Tire and Rim Association (TRA) Standards and Metric Labeling Guidelines",
    "ASHRAE Handbook - Fundamentals (HVAC Systems and Pressure Standards)"
  ]
};
