import { CustomArticleData } from "./types";

export const megapascalToPsi: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "psi",
  seoTitle: "Megapascal to PSI Converter (MPa to psi)",
  metaDescription: "Convert megapascals to pounds per square inch (MPa to psi) with exact engineering accuracy. Learn the 145.0377 conversion factor, concrete & steel tables, and FAQs.",
  h1: "Megapascal to PSI Converter",
  introduction: [
    "Converting megapascals (MPa) to pounds per square inch (psi, or $\\text{lbf/in}^2$) is an indispensable daily calculation across structural engineering, aerospace stress analysis, civil concrete design, high-pressure hydraulics, and petrochemical piping. While international ISO standards, Eurocodes, and scientific materials testing report compressive strength, yield stress, and modulus of elasticity in megapascals ($1\\text{ N/mm}^2$), American building codes (ACI, AISC), ASTM specifications, and domestic hydraulic equipment universally operate in PSI or kilopounds per square inch (ksi).",
    "The conversion between megapascals and PSI is based on standard international definitions ($1\\text{ lb} = 0.45359237\\text{ kg}$ and standard acceleration of gravity $g = 9.80665\\text{ m/s}^2$). Under these constants, one pound-force per square inch equals exactly 6,894.75729 Pascals (0.006894757 MPa). Consequently, one megapascal equals approximately 145.037738 PSI. To convert megapascals into PSI, multiply the MPa value by 145.0377 (or divide by 0.006894757).",
    "This comprehensive guide details the mathematical derivation, step-by-step structural and hydraulic examples (such as converting 30 MPa concrete or 250 MPa steel), an engineering lookup chart, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to PSI, multiply the value in megapascals by 145.0377 (or divide by 0.006894757). For example, a 30 MPa concrete strength equals approximately 4,351 psi, and 21 MPa hydraulic pressure equals approximately 3,046 psi.",
    formulaDisplay: "psi = MPa × 145.0377 ≈ \\frac{MPa}{0.006894757}",
    subtext: "1 MPa ≈ 145.037738 psi (1 N/mm²).\n1 psi = 0.006894757 MPa (6,894.757 Pa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official SI decimal multiple of the Pascal, defined as 1,000,000 Newtons per square meter ($10^6\\text{ Pa}$, equivalent to $1\\text{ N/mm}^2$). It is the universal standard for material mechanical properties, including tensile yield stress, compressive strength, and high hydraulic pressures."
  },
  aboutTargetUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pounds per square inch (symbol: psi or $\\text{lbf/in}^2$) is a unit of pressure and mechanical stress in imperial and US customary systems, defined as one pound-force applied over an area of one square inch. Widely used across the United States in construction, automotive, and industrial hydraulic applications, $1\\text{ ksi} = 1,000\\text{ psi} \\approx 6.895\\text{ MPa}$."
  },
  relationship: "One megapascal equals approximately 145.0377 PSI, and one PSI equals approximately 0.006894757 MPa ($1\\text{ ksi} = 1,000\\text{ psi} \\approx 6.89476\\text{ MPa}$). Multiplying any MPa value by 145.0377 yields its direct equivalent in PSI.",
  relationshipTitle: "Megapascal to PSI Materials & Hydraulic Benchmarks",
  relationshipItems: [
    { label: "0.1 MPa", value: "14.50 psi (1 bar atmospheric reference)" },
    { label: "1.0 MPa", value: "145.04 psi (1 N/mm² / Low hydraulic line)" },
    { label: "20.7 MPa", value: "3,000.0 psi (Standard 3,000 psi concrete / hydraulic circuit)" },
    { label: "30.0 MPa", value: "4,351.1 psi (Commercial building concrete grade)" },
    { label: "250.0 MPa", value: "36,259.4 psi (~36 ksi A36 structural steel yield)" },
    { label: "400.0 MPa", value: "58,015.1 psi (~58 ksi Grade 60 rebar yield)" }
  ],
  formula: {
    text: "Multiply the pressure or stress in megapascals by 145.0377 (or divide by 0.006894757) to obtain pounds per square inch.",
    math: "\\text{psi} = \\text{MPa} \\times 145.0377 \\approx \\frac{\\text{MPa}}{0.006894757}",
    subtext: "To convert PSI back to megapascals, multiply the PSI value by 0.006894757 (or divide by 145.0377)."
  },
  formulaTitle: "Megapascal to PSI Formula",
  practicalTip: {
    title: "Quick Mental Math: × 145 Rule",
    text: "To estimate PSI quickly from MPa: multiply by 150 and subtract roughly 3% (e.g., 20 MPa × 150 = 3,000, minus ~90 = 2,910 psi, very close to the true 2,900.8 psi). For ksi, divide MPa by 7 (e.g., 250 MPa ÷ 7 ≈ 35.7 ksi vs true 36.3 ksi)."
  },
  expertNote: {
    title: "ASTM Steel & ACI Concrete Specifications",
    text: "American structural standards specify steel in ksi ($1\\text{ ksi} = 1,000\\text{ psi}$) and concrete in psi (e.g., 4,000 psi concrete = 27.58 MPa; 50 ksi steel = 344.74 MPa). Converting MPa to psi ensures compliance with US building plan schedules."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Concrete Compressive Strength (35 MPa)",
        subtitle: "A high-rise column specifies a 28-day cylinder compressive strength of 35 MPa. Convert this rating to PSI for an American structural inspection report.",
        steps: [
          "State starting compressive strength: 35 MPa.",
          "Apply conversion multiplier: psi = 35 × 145.03774.",
          "Calculate: 35 × 145.03774 = 5,076.32.",
          "Result: 35 MPa equals approximately 5,076 psi (commonly specified as 5,000 psi mix class)."
        ]
      },
      {
        title: "Example 2: Structural Steel Yield Strength (250 MPa)",
        subtitle: "Convert European S235 / A36 mild structural steel yield strength of 250 MPa into PSI and ksi.",
        steps: [
          "Identify yield stress: 250 MPa.",
          "Apply formula: psi = 250 × 145.03774.",
          "Calculate: 250 × 145.03774 = 36,259.44.",
          "Result: 250 MPa corresponds to approximately 36,259 psi (36.26 ksi)."
        ]
      },
      {
        title: "Example 3: Heavy Excavator Hydraulic Line Pressure (28 MPa)",
        subtitle: "A mobile excavator hydraulic pump operates at 28 MPa. Convert this working pressure to PSI.",
        steps: [
          "State hydraulic pressure: 28 MPa.",
          "Apply conversion: psi = 28 × 145.03774.",
          "Calculate: 28 × 145.03774 = 4,061.06.",
          "Result: 28 MPa equals approximately 4,061 psi (4.06 ksi)."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to PSI Structural & Hydraulic Reference Table",
    headers: ["Megapascals (MPa)", "PSI (psi)", "KSI (ksi)", "Bar Equivalent", "Engineering / Construction Application"],
    rows: [
      { fromVal: "0.1 MPa", toVal: "14.50 psi", extra: "0.015 ksi", extra2: "1.0 bar", extra3: "Standard metric atmosphere" },
      { fromVal: "1.0 MPa", toVal: "145.04 psi", extra: "0.145 ksi", extra2: "10.0 bar", extra3: "Base megapascal (1 N/mm²)" },
      { fromVal: "5.0 MPa", toVal: "725.19 psi", extra: "0.725 ksi", extra2: "50.0 bar", extra3: "Heavy timber compression limit" },
      { fromVal: "20.0 MPa", toVal: "2,900.75 psi", extra: "2.901 ksi", extra2: "200.0 bar", extra3: "Standard 3,000 psi foundation concrete" },
      { fromVal: "27.6 MPa", toVal: "4,003.04 psi", extra: "4.003 ksi", extra2: "276.0 bar", extra3: "4,000 psi commercial slab concrete" },
      { fromVal: "35.0 MPa", toVal: "5,076.32 psi", extra: "5.076 ksi", extra2: "350.0 bar", extra3: "5,000 psi high-strength structural concrete" },
      { fromVal: "50.0 MPa", toVal: "7,251.89 psi", extra: "7.252 ksi", extra2: "500.0 bar", extra3: "Prestressed bridge girder concrete" },
      { fromVal: "250.0 MPa", toVal: "36,259.44 psi", extra: "36.259 ksi", extra2: "2,500.0 bar", extra3: "A36 / S235 structural steel yield strength" },
      { fromVal: "345.0 MPa", toVal: "50,038.02 psi", extra: "50.038 ksi", extra2: "3,450.0 bar", extra3: "50 ksi structural steel (A572 Grade 50)" },
      { fromVal: "415.0 MPa", toVal: "60,190.66 psi", extra: "60.191 ksi", extra2: "4,150.0 bar", extra3: "Grade 60 reinforcing steel rebar yield" },
      { fromVal: "700.0 MPa", toVal: "101,526.42 psi", extra: "101.526 ksi", extra2: "7,000.0 bar", extra3: "High-tensile alloy steel bolts (Grade 8.8)" }
    ]
  },
  applications: {
    title: "Primary Civil, Mechanical & Aerospace Applications",
    items: [
      {
        title: "Civil Infrastructure & Concrete Testing",
        text: "Quality assurance engineers convert 28-day concrete cylinder crush results from metric MPa into American ACI psi benchmarks (such as 3,000 psi, 4,000 psi, or 5,000 psi mix designs)."
      },
      {
        title: "Structural Steel Fabrication & Fasteners",
        text: "Structural engineers cross-reference international steel mill certificates (yield and tensile strengths in MPa) with US building design schedules specified in ksi."
      },
      {
        title: "High-Pressure Hydraulic Systems",
        text: "Piping designers size hydraulic hoses, flanged fittings, and relief valves by converting hydraulic pump MPa ratings into North American PSI ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 145 instead of multiplying: Converting from MPa to PSI increases the numeric value significantly.",
      "Confusing PSI with KSI: $1\\text{ ksi} = 1,000\\text{ psi}$. For example, 250 MPa is ~36,259 psi, which equals 36.26 ksi.",
      "Using 145 instead of 145.0377 in structural safety factor calculations (causes ~0.026% error)."
    ]
  },
  faqs: [
    {
      question: "How do you convert MPa to PSI?",
      answer: "Multiply the value in MPa by 145.0377 (or divide by 0.006894757). For example, 30 MPa × 145.0377 ≈ 4,351.13 psi."
    },
    {
      question: "How many PSI are in 1 MPa?",
      answer: "There are approximately 145.0377 PSI in 1 megapascal (exact ratio 1,000,000 / 6,894.757 psi)."
    },
    {
      question: "What is 30 MPa in PSI for concrete?",
      answer: "30 MPa equals approximately 4,351.13 PSI (commonly matching a 4,000–4,500 psi commercial concrete mix design)."
    },
    {
      question: "What is 250 MPa in PSI for structural steel?",
      answer: "250 MPa equals approximately 36,259.44 PSI (36.26 ksi, which is the standard yield strength of A36 structural steel)."
    },
    {
      question: "What is 20 MPa in PSI?",
      answer: "20 MPa equals approximately 2,900.75 PSI (close to a 3,000 psi design baseline)."
    },
    {
      question: "How do you convert PSI back to MPa?",
      answer: "Multiply the PSI value by 0.006894757 (or divide by 145.0377). For example, 3,000 psi × 0.006894757 ≈ 20.68 MPa."
    },
    {
      question: "What is 400 MPa in PSI and KSI?",
      answer: "400 MPa equals approximately 58,015.1 PSI, which equals 58.02 KSI (standard Grade 60 rebar yield strength)."
    },
    {
      question: "What is 100 MPa in PSI?",
      answer: "100 MPa equals approximately 14,503.77 PSI (14.50 ksi)."
    }
  ],
  relatedList: [
    { label: "PSI to Megapascal", from: "psi", to: "megapascal" },
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to Kilopascal", from: "megapascal", to: "kilopascal" },
    { label: "Megapascal to Pascal", from: "megapascal", to: "pascal" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" }
  ],
  references: [
    "American Concrete Institute (ACI) 318: Building Code Requirements for Structural Concrete.",
    "AISC 360: Specification for Structural Steel Buildings.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
