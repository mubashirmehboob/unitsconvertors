import { CustomArticleData } from "./types";

export const megapascalToBar: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "bar",
  seoTitle: "Megapascal to Bar Converter (MPa to bar)",
  metaDescription: "Convert megapascals to bar (MPa to bar) with exact metric precision. Learn the 10× multiplier formula, hydraulics and pressure vessel examples, tables, and FAQs.",
  h1: "Megapascal to Bar Converter",
  introduction: [
    "Converting megapascals (MPa) to bar is one of the most frequently performed calculations in hydraulic engineering, industrial pneumatics, power generation, petrochemical plant piping, and SCUBA diving gas management. While scientific documentation, structural materials testing, and international engineering standards specify stress and pressure in megapascals ($1\\text{ N/mm}^2$), European pressure gauges, relief valves, and hydraulic equipment nameplates display working pressures in bar.",
    "Because both units belong to the coherent metric measurement system, the conversion between megapascals and bar is exact and direct. One megapascal is defined as exactly 1,000,000 Pascals, and one bar is defined as exactly 100,000 Pascals. Consequently, one megapascal equals exactly 10 bar. To convert megapascals into bar, simply multiply the megapascal value by 10 (or move the decimal point one place to the right).",
    "This comprehensive guide details the conversion formula, step-by-step industrial hydraulic examples (including SCUBA tank and high-pressure hydraulic circuit calculations), an engineering lookup table, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to bar, multiply the value in megapascals by 10. For example, a SCUBA tank pressure rating of 20 MPa equals exactly 200 bar, and 35 MPa equals 350 bar.",
    formulaDisplay: "bar = MPa × 10",
    subtext: "Exact relationship: 1 MPa = 10 bar = 1,000 kPa = 1,000,000 Pa.\n1 bar = 0.1 MPa (100 kPa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official SI decimal multiple of the Pascal, representing 1,000,000 Pascals ($10^6\\text{ N/m}^2$, identical to $1\\text{ N/mm}^2$). It is the primary international unit for high-pressure hydraulics, rock mechanics, and material tensile strength."
  },
  aboutTargetUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa). Widely used in mechanical engineering, compressed gas storage, scuba diving, and process plant instrumentation, 1 bar represents approximately standard sea-level atmospheric pressure (1.01325 bar)."
  },
  relationship: "The relationship between megapascals and bar is exact by metric definition: 1 MPa = 10 bar, and 1 bar = 0.1 MPa. Converting from MPa to bar requires simply scaling the number by a factor of 10.",
  relationshipTitle: "Megapascal to Bar Pressure Benchmarks",
  relationshipItems: [
    { label: "0.1 MPa", value: "1.0 bar (Standard metric atmospheric baseline)" },
    { label: "1.0 MPa", value: "10.0 bar (Steam boiler / Compressed air main)" },
    { label: "10.0 MPa", value: "100.0 bar (Industrial hydraulic return line)" },
    { label: "20.0 MPa", value: "200.0 bar (Standard 3,000 psi SCUBA cylinder fill)" },
    { label: "30.0 MPa", value: "300.0 bar (High-pressure composite air cylinder)" },
    { label: "70.0 MPa", value: "700.0 bar (Hydrogen fuel cell vehicle storage tank)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 10 to obtain the equivalent pressure in bar.",
    math: "\\text{bar} = \\text{MPa} \\times 10",
    subtext: "To convert bar back to megapascals, divide the bar value by 10 (or multiply by 0.1)."
  },
  formulaTitle: "Megapascal to Bar Formula",
  practicalTip: {
    title: "The 1-Decimal Right Shift Rule",
    text: "Because 1 MPa equals 10 bar, simply move the decimal point one position to the right to convert MPa to bar (e.g., 2.5 MPa becomes 25.0 bar, and 21 MPa becomes 210 bar)."
  },
  expertNote: {
    title: "European Hydraulic Industry Standard",
    text: "In European mechanical design standards (DIN/ISO), pump and motor maximum continuous pressures are specified in bar (e.g., 250 bar or 350 bar), whereas FEA stress calculations on casing walls are performed in MPa (25 MPa / 35 MPa fluid pressure)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: SCUBA Diving Tank Fill Pressure (23.2 MPa)",
        subtitle: "A modern aluminum diving cylinder is hydrostatically charged to a working pressure of 23.2 MPa. Convert to bar for a European diving regulator pressure gauge.",
        steps: [
          "Identify starting cylinder pressure: 23.2 MPa.",
          "Apply conversion formula: bar = 23.2 × 10.",
          "Calculate: 23.2 × 10 = 232.",
          "Result: 23.2 MPa equals exactly 232.0 bar."
        ]
      },
      {
        title: "Example 2: Industrial Hydraulic Power Pack (31.5 MPa)",
        subtitle: "A CNC press brake hydraulic power unit operates at 31.5 MPa. Convert this value to bar.",
        steps: [
          "State starting pressure: 31.5 MPa.",
          "Apply formula: bar = 31.5 × 10.",
          "Calculate: 31.5 × 10 = 315.",
          "Result: 31.5 MPa equals exactly 315.0 bar."
        ]
      },
      {
        title: "Example 3: Common-Rail Diesel Injection Pressure (180 MPa)",
        subtitle: "A heavy commercial diesel engine common-rail injection system operates at peak load at 180 MPa. Convert to bar.",
        steps: [
          "State injection pressure: 180 MPa.",
          "Apply conversion: bar = 180 × 10.",
          "Calculate: 180 × 10 = 1,800.",
          "Result: 180 MPa corresponds to exactly 1,800 bar."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Bar Conversion Table",
    headers: ["Megapascals (MPa)", "Bar (bar)", "PSI Equivalent", "Kilopascals (kPa)", "Engineering Application"],
    rows: [
      { fromVal: "0.1 MPa", toVal: "1.0 bar", extra: "14.50 psi", extra2: "100 kPa", extra3: "Atmospheric reference baseline" },
      { fromVal: "0.6 MPa", toVal: "6.0 bar", extra: "87.02 psi", extra2: "600 kPa", extra3: "Standard factory compressed air line" },
      { fromVal: "1.0 MPa", toVal: "10.0 bar", extra: "145.04 psi", extra2: "1,000 kPa", extra3: "Commercial building water booster" },
      { fromVal: "2.5 MPa", toVal: "25.0 bar", extra: "362.59 psi", extra2: "2,500 kPa", extra3: "CO2 refrigeration high-side" },
      { fromVal: "7.0 MPa", toVal: "70.0 bar", extra: "1,015.26 psi", extra2: "7,000 kPa", extra3: "Natural gas pipeline transmission" },
      { fromVal: "10.0 MPa", toVal: "100.0 bar", extra: "1,450.38 psi", extra2: "10,000 kPa", extra3: "Standard hydraulic system baseline" },
      { fromVal: "20.0 MPa", toVal: "200.0 bar", extra: "2,900.75 psi", extra2: "20,000 kPa", extra3: "Standard SCUBA diving tank" },
      { fromVal: "30.0 MPa", toVal: "300.0 bar", extra: "4,351.13 psi", extra2: "30,000 kPa", extra3: "Carbon fiber breathing air cylinder" },
      { fromVal: "35.0 MPa", toVal: "350.0 bar", extra: "5,076.32 psi", extra2: "35,000 kPa", extra3: "Excavator hydraulic arm system" },
      { fromVal: "70.0 MPa", toVal: "700.0 bar", extra: "10,152.64 psi", extra2: "70,000 kPa", extra3: "Automotive hydrogen storage tank" },
      { fromVal: "200.0 MPa", toVal: "2,000.0 bar", extra: "29,007.55 psi", extra2: "200,000 kPa", extra3: "Diesel common rail injection pressure" }
    ]
  },
  applications: {
    title: "Primary Hydraulic and Industrial Applications",
    items: [
      {
        title: "High-Pressure Hydraulic Systems",
        text: "Hydraulic system technicians check analog bar pressure gauges against MPa specification manuals when adjusting main relief valve pressures on industrial machinery."
      },
      {
        title: "Compressed Gas & Breathing Apparatus (SCBA/SCUBA)",
        text: "Dive shops and fire service technicians fill composite and steel breathing air cylinders to 200 bar (20 MPa) or 300 bar (30 MPa) based on cylinder stampings."
      },
      {
        title: "Hydrogen Vehicle Fuel Storage",
        text: "Fuel cell electric vehicles (FCEVs) store compressed gaseous hydrogen at 70 MPa (700 bar), requiring accurate conversion across dispensing nozzles and vehicle tanks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 10 instead of multiplying: Converting MPa to bar increases the numeric value by a factor of 10.",
      "Confusing bar with millibar: 1 MPa = 10 bar = 10,000 mbar.",
      "Overlooking gauge vs absolute pressure: In high-pressure hydraulics (>100 bar), the 1 bar difference between gauge (barg) and absolute (bara) is <1%, but remains vital for precision instrumentation."
    ]
  },
  faqs: [
    {
      question: "How many bar are in 1 megapascal?",
      answer: "There are exactly 10 bar in 1 megapascal (1 MPa = 10 bar)."
    },
    {
      question: "What is the formula to convert MPa to bar?",
      answer: "The formula is: bar = MPa × 10."
    },
    {
      question: "What is 20 MPa in bar?",
      answer: "20 MPa equals exactly 200 bar (20 × 10 = 200 bar)."
    },
    {
      question: "What is 35 MPa in bar?",
      answer: "35 MPa equals exactly 350 bar (35 × 10 = 350 bar)."
    },
    {
      question: "How do you convert bar back to MPa?",
      answer: "Divide the pressure in bar by 10 (or multiply by 0.1). For example, 250 bar ÷ 10 = 25.0 MPa."
    },
    {
      question: "What is 70 MPa in bar?",
      answer: "70 MPa equals exactly 700 bar (the standard pressure for automotive hydrogen storage tanks)."
    },
    {
      question: "Is 1 bar equal to 0.1 MPa?",
      answer: "Yes, exactly. By definition, 1 bar = 100,000 Pa = 0.1 MPa."
    },
    {
      question: "What is 100 bar in MPa?",
      answer: "100 bar equals exactly 10 MPa (100 ÷ 10 = 10 MPa)."
    }
  ],
  relatedList: [
    { label: "Bar to Megapascal", from: "bar", to: "megapascal" },
    { label: "Megapascal to Kilopascal", from: "megapascal", to: "kilopascal" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "ISO 19880-1: Gaseous hydrogen — Fuelling stations."
  ]
};
