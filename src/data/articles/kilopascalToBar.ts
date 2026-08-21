import { CustomArticleData } from "./types";

export const kilopascalToBar: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "bar",
  seoTitle: "Kilopascal to Bar Converter (kPa to bar)",
  metaDescription: "Convert kilopascals to bar (kPa to bar) with exact decimal precision. Master the 0.01 multiplier formula, automotive and hydraulic examples, tables, and FAQs.",
  h1: "Kilopascal to Bar Converter",
  introduction: [
    "Converting kilopascals (kPa) to bar is an everyday calculation across European industrial automation, automotive tire calibration, HVAC refrigerant monitoring, and hydraulic machinery. While both units stem from the metric framework and measure pressure or mechanical stress, they serve distinct technical tiers: kilopascals quantify moderate distributed forces, whereas the bar provides a compact, intuitive metric scale scaled closely to Earth's atmospheric pressure.",
    "By international metrological definition, one bar is defined as exactly 100,000 Pascals (100 kPa). Consequently, one kilopascal equals exactly 0.01 bar (or 1/100 of a bar). To convert kilopascals into bar, simply divide the pressure value by 100 or multiply by 0.01. Because both units share a coherent decimal relationship, the conversion produces an exact decimal shift with zero rounding error.",
    "This comprehensive guide details the mathematical relationship, step-by-step conversion examples, an industrial reference table, practical engineering applications, and answers to frequently asked technical questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to bar, divide the value in kilopascals by 100 (or multiply by 0.01). For example, 250 kPa equals exactly 2.5 bar, and standard atmospheric pressure of 101.325 kPa equals 1.01325 bar.",
    formulaDisplay: "bar = kPa ÷ 100 = kPa × 0.01",
    subtext: "Exact conversion factor: 1 kPa = 0.01 bar (exact decimal shift).\n1 bar = 100 kPa."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official decimal multiple of the coherent SI unit of pressure, the Pascal, equal to 1,000 Pascals (1,000 N/m²). It is the standard pressure unit in global building codes, automotive engineering, aerodynamics, and international meteorology."
  },
  aboutTargetUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa). Introduced by British meteorologist William Napier Shaw in 1909, the bar closely matches standard atmospheric pressure at sea level (1.01325 bar) and is widely used across diving, pneumatics, petrochemical piping, and fluid hydraulics."
  },
  relationship: "The relationship between kilopascals and bar is exact by metric definition: 1 bar = 100 kPa, meaning 1 kPa = 0.01 bar. Converting between the two requires shifting the decimal point two places to the left.",
  relationshipTitle: "Kilopascal to Bar Pressure Scale Milestones",
  relationshipItems: [
    { label: "10 kPa", value: "0.10 bar (Low-pressure industrial blower)" },
    { label: "50 kPa", value: "0.50 bar (Turbocharger boost threshold)" },
    { label: "100 kPa", value: "1.00 bar (Exact metric bar baseline)" },
    { label: "101.325 kPa", value: "1.01325 bar (Standard sea-level atmosphere)" },
    { label: "250 kPa", value: "2.50 bar (Automobile tire pressure)" },
    { label: "1,000 kPa", value: "10.00 bar (Municipal fire main pressure)" }
  ],
  formula: {
    text: "Divide the pressure in kilopascals by 100 (or multiply by 0.01) to obtain the pressure in bar.",
    math: "\\text{bar} = \\frac{\\text{kPa}}{100} = \\text{kPa} \\times 0.01",
    subtext: "To convert bar back to kilopascals, multiply the bar value by 100."
  },
  formulaTitle: "Kilopascal to Bar Conversion Formula",
  practicalTip: {
    title: "The 2-Decimal Left Shift Rule",
    text: "Because dividing by 100 is equivalent to moving the decimal point two places to the left, you can convert kPa to bar instantly in your head: 220 kPa becomes 2.20 bar, and 35 kPa becomes 0.35 bar."
  },
  expertNote: {
    title: "Gauge vs. Absolute Pressure Distinction",
    text: "Ensure whether your equipment measures gauge pressure (barg / kPag) or absolute pressure (bara / kPaa). Ambient atmospheric air is 0 kPag (0 barg), but 101.325 kPaa (1.01325 bara)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automobile Tire Inflation",
        subtitle: "A vehicle door jamb placard recommends 230 kPa. Convert this setting to bar for a European service station inflator.",
        steps: [
          "Identify starting value: 230 kPa.",
          "Apply conversion formula: bar = 230 ÷ 100.",
          "Calculate: 230 × 0.01 = 2.30.",
          "Result: 230 kPa equals exactly 2.30 bar."
        ]
      },
      {
        title: "Example 2: Industrial Compressor Tank Rating",
        subtitle: "An air compressor reservoir operates at 850 kPa. Express this working pressure in bar.",
        steps: [
          "State starting pressure: 850 kPa.",
          "Apply formula: bar = 850 / 100.",
          "Calculate: 850 ÷ 100 = 8.5.",
          "Result: 850 kPa equals exactly 8.50 bar."
        ]
      },
      {
        title: "Example 3: Domestic Water Line Pressure",
        subtitle: "A municipal water pressure regulator delivers 450 kPa to a commercial building. Convert to bar.",
        steps: [
          "Identify water line pressure: 450 kPa.",
          "Apply formula: bar = 450 × 0.01.",
          "Calculate: 450 × 0.01 = 4.5.",
          "Result: 450 kPa equals exactly 4.50 bar."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to Bar Conversion Table",
    headers: ["Kilopascals (kPa)", "Bar (bar)", "PSI Equivalent", "Typical Application"],
    rows: [
      { fromVal: "10 kPa", toVal: "0.10 bar", extra: "1.450 psi", extra2: "HVAC ventilation duct pressure" },
      { fromVal: "50 kPa", toVal: "0.50 bar", extra: "7.252 psi", extra2: "Low-pressure fuel delivery" },
      { fromVal: "100 kPa", toVal: "1.00 bar", extra: "14.504 psi", extra2: "Standard metric baseline" },
      { fromVal: "101.325 kPa", toVal: "1.01325 bar", extra: "14.696 psi", extra2: "1 Standard atmosphere (sea level)" },
      { fromVal: "200 kPa", toVal: "2.00 bar", extra: "29.008 psi", extra2: "Light passenger car tire" },
      { fromVal: "250 kPa", toVal: "2.50 bar", extra: "36.259 psi", extra2: "SUV / performance tire pressure" },
      { fromVal: "300 kPa", toVal: "3.00 bar", extra: "43.511 psi", extra2: "Residential boiler safety relief" },
      { fromVal: "500 kPa", toVal: "5.00 bar", extra: "72.519 psi", extra2: "Municipal water main supply" },
      { fromVal: "800 kPa", toVal: "8.00 bar", extra: "116.030 psi", extra2: "Workshop pneumatic air tool line" },
      { fromVal: "1,000 kPa", toVal: "10.00 bar", extra: "145.038 psi", extra2: "Commercial steam pipeline" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Automotive Maintenance & Tire Pressure",
        text: "European and Asian car manufacturers provide recommended tire pressures in both kPa and bar on chassis placards. Mechanics convert between these units when setting digital tire inflators."
      },
      {
        title: "Hydraulic and Pneumatic System Design",
        text: "Pneumatic logic components and air cylinders specify operational limits in bar, while sensor datasheets output signals calibrated in kPa."
      },
      {
        title: "HVAC & Refrigeration Circuits",
        text: "Refrigerant pressure-enthalpy gauges and manifold gauges in Europe display saturation pressures in bar, while thermodynamic property tables list saturation values in kPa."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 100 instead of dividing: Converting kPa to bar decreases the numerical value by a factor of 100.",
      "Confusing bar with millibar: 1 bar = 1,000 mbar, whereas 1 kPa = 10 mbar.",
      "Overlooking gauge vs. absolute pressure: Adding 1.01325 bar is required when converting gauge readings (kPag) to absolute (bara)."
    ]
  },
  faqs: [
    {
      question: "How many bar are in 1 kilopascal?",
      answer: "There is exactly 0.01 bar in 1 kilopascal (1 kPa = 0.01 bar)."
    },
    {
      question: "What is the formula to convert kPa to bar?",
      answer: "The formula is: bar = kPa ÷ 100 (or bar = kPa × 0.01)."
    },
    {
      question: "How do I convert 250 kPa to bar?",
      answer: "Divide 250 by 100: 250 ÷ 100 = 2.50 bar."
    },
    {
      question: "Is 100 kPa equal to 1 bar?",
      answer: "Yes, exactly. By definition, 1 bar is equal to 100,000 Pascals, which is exactly 100 kPa."
    },
    {
      question: "What is standard atmospheric pressure in bar and kPa?",
      answer: "Standard sea-level atmospheric pressure is 101.325 kPa, which converts to exactly 1.01325 bar."
    },
    {
      question: "How do you convert bar back to kPa?",
      answer: "Multiply the pressure in bar by 100. For example, 6 bar × 100 = 600 kPa."
    },
    {
      question: "Is bar an official SI unit?",
      answer: "The bar is a non-SI metric unit accepted for use with the SI framework due to its widespread use in engineering and fluid mechanics."
    },
    {
      question: "What is 300 kPa in bar?",
      answer: "300 kPa equals exactly 3.00 bar (300 ÷ 100 = 3)."
    }
  ],
  relatedList: [
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" },
    { label: "Kilopascal to Millibar", from: "kilopascal", to: "millibar" },
    { label: "Kilopascal to Atmosphere", from: "kilopascal", to: "atmosphere" },
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
