import { CustomArticleData } from "./types";

export const megapascalToKilopascal: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "kilopascal",
  seoTitle: "Megapascal to Kilopascal Converter (MPa to kPa)",
  metaDescription: "Convert megapascals to kilopascals (MPa to kPa) with exact SI metric precision. Learn the × 1000 multiplier formula, hydraulic engineering examples, tables, and FAQs.",
  h1: "Megapascal to Kilopascal Converter",
  introduction: [
    "Converting megapascals (MPa) to kilopascals (kPa) is a routine calculation in mechanical design, heavy fluid hydraulics, high-pressure piping networks, civil geotechnics, and automotive engineering. While bulk material properties, yield limits, and hydraulic circuit ratings are expressed in megapascals to maintain compact numbers, field sensor outputs, digital pressure transducers, and HVAC building systems are calibrated in kilopascals.",
    "Because both units belong to the coherent metric SI decimal framework, converting megapascals to kilopascals is exact, intuitive, and involves zero rounding error. The prefix 'mega-' represents $10^6$ (1,000,000), while the prefix 'kilo-' represents $10^3$ (1,000). Consequently, one megapascal equals exactly 1,000 kilopascals. To convert megapascals into kilopascals, simply multiply the megapascal value by 1,000 (or shift the decimal point three places to the right).",
    "This comprehensive guide details the conversion formula, step-by-step industrial hydraulic examples, an engineering pressure lookup chart, practical cross-disciplinary applications, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to kilopascals, multiply the pressure value in megapascals by 1,000. For example, a hydraulic line pressure of 25 MPa equals exactly 25,000 kPa, and 1 MPa equals 1,000 kPa.",
    formulaDisplay: "kPa = MPa × 1,000",
    subtext: "Exact relationship: 1 MPa = 1,000 kPa = 1,000,000 Pa.\n1 kPa = 0.001 MPa (10⁻³ MPa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official SI decimal multiple of the Pascal, defined as 1,000,000 Pascals ($10^6\\text{ Pa}$, equivalent to $1\\text{ N/mm}^2$). It is the standard metric unit for high-pressure hydraulics, rock mechanics, and the tensile and compressive strength of materials."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official SI decimal multiple equal to 1,000 Pascals ($10^3\\text{ Pa}$). It is the recognized standard for intermediate pressures, including building duct pressures, vehicle tire inflation, municipal water piping, and atmospheric meteorology."
  },
  relationship: "The relationship between megapascals and kilopascals is exact: 1 MPa = 1,000 kPa, and 1 kPa = 0.001 MPa. Converting between them requires multiplying or dividing by 1,000.",
  relationshipTitle: "Megapascal to Kilopascal Pressure Benchmarks",
  relationshipItems: [
    { label: "0.1 MPa", value: "100 kPa (1 bar / atmospheric benchmark)" },
    { label: "1.0 MPa", value: "1,000 kPa (Low hydraulic circuit pressure)" },
    { label: "5.0 MPa", value: "5,000 kPa (High-pressure waterjet cleaning)" },
    { label: "20.0 MPa", value: "20,000 kPa (Standard industrial hydraulic circuit)" },
    { label: "35.0 MPa", value: "35,000 kPa (Excavator / mobile heavy machinery hydraulic limit)" },
    { label: "100.0 MPa", value: "100,000 kPa (Common-rail diesel fuel injection)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 1,000 to determine the equivalent value in kilopascals.",
    math: "\\text{kPa} = \\text{MPa} \\times 1{,}000",
    subtext: "To convert kilopascals back to megapascals, divide the kPa value by 1,000 (or multiply by 0.001)."
  },
  formulaTitle: "Megapascal to Kilopascal Formula",
  practicalTip: {
    title: "The 3-Decimal Right Shift Rule",
    text: "Because multiplying by 1,000 corresponds to moving the decimal point three places to the right, you can perform conversions instantly in your head: 4.8 MPa becomes 4,800 kPa, and 0.35 MPa becomes 350 kPa."
  },
  expertNote: {
    title: "Sensor Calibration in Industrial Automation",
    text: "While hydraulic schematics write relief valve settings in MPa (e.g., 21 MPa), programmable logic controllers (PLCs) often read 4–20 mA pressure transmitters configured in kPa (21,000 kPa). Always ensure engineering units match between HMI displays and control loop registers."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Mobile Crane Hydraulic System (28 MPa)",
        subtitle: "A mobile crane hydraulic pump delivers an operating pressure of 28 MPa. Convert this value to kilopascals for digital telemetry sensor calibration.",
        steps: [
          "State starting hydraulic pressure: 28 MPa.",
          "Apply conversion formula: kPa = 28 × 1,000.",
          "Calculate: 28 × 1,000 = 28,000.",
          "Result: 28 MPa equals exactly 28,000 kPa."
        ]
      },
      {
        title: "Example 2: Natural Gas Transmission Pipeline (7.5 MPa)",
        subtitle: "A high-pressure interstate natural gas pipeline operates at 7.5 MPa. Convert this to kPa for regional distribution monitoring.",
        steps: [
          "Identify pipeline pressure: 7.5 MPa.",
          "Apply formula: kPa = 7.5 × 1,000.",
          "Calculate: 7.5 × 1,000 = 7,500.",
          "Result: 7.5 MPa corresponds to exactly 7,500 kPa (75 bar)."
        ]
      },
      {
        title: "Example 3: Low-Pressure Pneumatic Actuator (0.6 MPa)",
        subtitle: "A manufacturing assembly robot specifies an air line pressure of 0.6 MPa. Convert to kilopascals.",
        steps: [
          "State pressure: 0.6 MPa.",
          "Apply conversion: kPa = 0.6 × 1,000.",
          "Calculate: 0.6 × 1,000 = 600.",
          "Result: 0.6 MPa equals exactly 600 kPa (6.0 bar / ~87 psi)."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Kilopascal Conversion Table",
    headers: ["Megapascals (MPa)", "Kilopascals (kPa)", "Bar Equivalent", "PSI Equivalent", "Application Context"],
    rows: [
      { fromVal: "0.1 MPa", toVal: "100 kPa", extra: "1.0 bar", extra2: "14.50 psi", extra3: "1 Bar atmospheric reference" },
      { fromVal: "0.5 MPa", toVal: "500 kPa", extra: "5.0 bar", extra2: "72.52 psi", extra3: "Municipal high-pressure water main" },
      { fromVal: "1.0 MPa", toVal: "1,000 kPa", extra: "10.0 bar", extra2: "145.04 psi", extra3: "Industrial steam supply line" },
      { fromVal: "2.5 MPa", toVal: "2,500 kPa", extra: "25.0 bar", extra2: "362.59 psi", extra3: "CO2 industrial refrigeration high-side" },
      { fromVal: "5.0 MPa", toVal: "5,000 kPa", extra: "50.0 bar", extra2: "725.19 psi", extra3: "Light hydraulic press" },
      { fromVal: "10.0 MPa", toVal: "10,000 kPa", extra: "100.0 bar", extra2: "1,450.38 psi", extra3: "Medium industrial hydraulics" },
      { fromVal: "21.0 MPa", toVal: "21,000 kPa", extra: "210.0 bar", extra2: "3,045.79 psi", extra3: "Standard 3,000 psi hydraulic circuit" },
      { fromVal: "35.0 MPa", toVal: "35,000 kPa", extra: "350.0 bar", extra2: "5,076.32 psi", extra3: "Heavy construction equipment hydraulic system" },
      { fromVal: "50.0 MPa", toVal: "50,000 kPa", extra: "500.0 bar", extra2: "7,251.89 psi", extra3: "High-pressure hydrostatic pressure testing" },
      { fromVal: "100.0 MPa", toVal: "100,000 kPa", extra: "1,000.0 bar", extra2: "14,503.77 psi", extra3: "Ultra-high pressure waterjet cutting" }
    ]
  },
  applications: {
    title: "Key Industrial and Engineering Applications",
    items: [
      {
        title: "Industrial Fluid Power & Hydraulic Circuits",
        text: "Designers specify hydraulic pumps and cylinder ratings in MPa, while pressure transmitters in PLC loops transmit data formatted in kPa for digital precision."
      },
      {
        title: "Oil and Gas Wellhead Engineering",
        text: "Wellhead blowout preventer (BOP) test pressures recorded in MPa are converted to kPa when logging subsea manifold telemetry."
      },
      {
        title: "Automotive Fuel Injection Systems",
        text: "Modern common rail direct injection (GDI and CRDi) systems operate between 150 and 250 MPa (150,000 to 250,000 kPa), requiring accurate conversion for ECU diagnostic scan tools."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying: Converting MPa to kPa increases the numerical value by 1,000.",
      "Confusing MPa with GPa: 1 GPa = 1,000 MPa = 1,000,000 kPa.",
      "Misplacing the decimal point when converting fractional MPa values (e.g., 0.05 MPa = 50 kPa, not 5 kPa)."
    ]
  },
  faqs: [
    {
      question: "How many kilopascals are in 1 megapascal?",
      answer: "There are exactly 1,000 kilopascals in 1 megapascal (1 MPa = 1,000 kPa)."
    },
    {
      question: "What is the formula to convert MPa to kPa?",
      answer: "The formula is: kPa = MPa × 1,000."
    },
    {
      question: "What is 25 MPa in kilopascals?",
      answer: "25 MPa equals exactly 25,000 kPa (25 × 1,000 = 25,000 kPa)."
    },
    {
      question: "What is 10 MPa in kPa?",
      answer: "10 MPa equals exactly 10,000 kPa."
    },
    {
      question: "How do you convert kPa back to MPa?",
      answer: "Divide the kPa value by 1,000 (or multiply by 0.001). For example, 7,500 kPa ÷ 1,000 = 7.5 MPa."
    },
    {
      question: "What is 0.5 MPa in kPa?",
      answer: "0.5 MPa equals exactly 500 kPa (0.5 × 1,000 = 500)."
    },
    {
      question: "How many bar is 1 MPa?",
      answer: "1 MPa equals exactly 10 bar (which is 1,000 kPa = 1,000,000 Pa)."
    },
    {
      question: "What is 35 MPa in kilopascals and bar?",
      answer: "35 MPa equals exactly 35,000 kPa, which equals 350 bar."
    }
  ],
  relatedList: [
    { label: "Kilopascal to Megapascal", from: "kilopascal", to: "megapascal" },
    { label: "Megapascal to Pascal", from: "megapascal", to: "pascal" },
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "NFPA T2.24.1 R1: Hydraulic Fluid Power — Pressure Rating of Components."
  ]
};
