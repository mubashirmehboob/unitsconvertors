import { CustomArticleData } from "./types";

export const barToPascal: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "pascal",
  seoTitle: "Bar to Pascal Converter (bar to Pa)",
  metaDescription: "Convert bar to Pascals (bar to Pa) with exact 100,000× metric precision. Discover formula derivations, step-by-step calculation examples, lookup charts, and FAQs.",
  h1: "Bar to Pascal Converter",
  introduction: [
    "Converting bar to Pascals (Pa) is a fundamental calculation in fluid mechanics, HVAC engineering, meteorology, process automation, and thermodynamics. While the bar is widely used on pressure gauge dials, compressed air receivers, and hydraulic components due to its convenient human-scale magnitude, the Pascal is the coherent base unit of pressure in the International System of Units (SI).",
    "Because both units belong directly to the metric system, their relationship is exact and defined by treaty. One bar is defined as exactly 100,000 Pascals (10⁵ Pa, or 100 kPa). To convert any measurement in bar into Pascals, simply multiply the bar value by 100,000 (or shift the decimal point five positions to the right).",
    "This technical guide explains the mathematical conversion, provides step-by-step worked engineering problems, presents an industrial reference table, highlights common calculation mistakes, and answers key technical questions."
  ],
  quickAnswer: {
    text: "To convert bar to Pascals, multiply the pressure value in bar by 100,000. For example, a water supply pressure of 3 bar equals exactly 300,000 Pascals (300 kPa).",
    formulaDisplay: "Pa = bar × 100,000",
    subtext: "Exact definition: 1 bar = 100,000 Pa = 100 kPa = 0.1 MPa.\n1 Pa = 0.00001 bar (10⁻⁵ bar)."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure introduced in 1909 by British meteorologist William Napier Shaw. Defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa), it approximates normal atmospheric pressure at sea level (1.01325 bar) and is widely used across mechanical engineering, automotive tires, diving tanks, and hydraulics."
  },
  aboutTargetUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the coherent SI-derived unit of pressure and stress, named after 17th-century French polymath Blaise Pascal. One Pascal is defined as a perpendicular force of one Newton distributed evenly over an area of one square meter (1 N/m²). Because 1 Pa is relatively small (about the weight of a dollar bill resting flat on a table), technical applications frequently use kilopascals and megapascals."
  },
  relationship: "The relationship between bar and Pascal is exact and fixed by definition: 1 bar = 100,000 Pascals (10⁵ Pa). Conversely, 1 Pascal equals exactly 0.00001 bar (10⁻⁵ bar). Converting from bar to Pascals requires scaling by a factor of 100,000.",
  relationshipTitle: "Bar to Pascal Physical Benchmarks",
  relationshipItems: [
    { label: "0.01 bar", value: "1,000 Pa (1 kPa - HVAC duct static air pressure)" },
    { label: "0.10 bar", value: "10,000 Pa (10 kPa - Low-pressure vacuum line)" },
    { label: "1.00 bar", value: "100,000 Pa (Standard metric atmospheric reference)" },
    { label: "2.50 bar", value: "250,000 Pa (Typical passenger car tire pressure)" },
    { label: "6.00 bar", value: "600,000 Pa (Industrial workshop pneumatic main)" },
    { label: "10.00 bar", value: "1,000,000 Pa (1 MPa - High-pressure steam pipe)" }
  ],
  formula: {
    text: "Multiply the pressure in bar by 100,000 to determine the equivalent pressure in Pascals.",
    math: "\\text{Pa} = \\text{bar} \\times 100\\,000",
    subtext: "To convert Pascals back to bar, divide the Pascal value by 100,000 (or multiply by 0.00001)."
  },
  formulaTitle: "Bar to Pascal Conversion Formula",
  practicalTip: {
    title: "The 5-Zero Multiplication Rule",
    text: "Because 1 bar equals 100,000 Pa, converting an integer value in bar to Pascals is as simple as appending five zeros (e.g., 2 bar = 200,000 Pa; 15 bar = 1,500,000 Pa). For decimal numbers, move the decimal point five places to the right (e.g., 1.25 bar = 125,000 Pa)."
  },
  expertNote: {
    title: "SI Coherence in Computational Fluid Dynamics (CFD)",
    text: "While engineering instrumentation and P&ID diagrams specify pipeline operating pressures in bar, finite element analysis (FEA) and CFD solver algorithms strictly demand input values in SI base units (Pascals: N/m² or kg·m⁻¹·s⁻²) to maintain dimensional consistency across Navier-Stokes equations."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Passenger Vehicle Tire Pressure (2.4 bar)",
        subtitle: "A vehicle tire placard recommends a cold inflation pressure of 2.4 bar. Convert this gauge pressure into Pascals for aerodynamic drag simulations.",
        steps: [
          "State the initial pressure: 2.4 bar.",
          "Apply the conversion formula: Pa = 2.4 × 100,000.",
          "Calculate: 2.4 × 100,000 = 240,000.",
          "Result: 2.4 bar equals exactly 240,000 Pascals (240 kPa)."
        ]
      },
      {
        title: "Example 2: Commercial Espresso Machine Extraction (9.0 bar)",
        subtitle: "A professional commercial espresso group head pumps hot water through tamped coffee grounds at 9.0 bar. Express this extraction pressure in Pascals.",
        steps: [
          "Identify starting value: 9.0 bar.",
          "Apply conversion: Pa = 9.0 × 100,000.",
          "Multiply: 9.0 × 100,000 = 900,000.",
          "Result: 9.0 bar corresponds to exactly 900,000 Pascals (900 kPa)."
        ]
      },
      {
        title: "Example 3: Industrial High-Pressure Gas Manifold (160 bar)",
        subtitle: "A compressed natural gas filling manifold operates at 160 bar. Convert this value to Pascals.",
        steps: [
          "Identify manifold pressure: 160 bar.",
          "Apply formula: Pa = 160 × 100,000.",
          "Calculate: 160 × 100,000 = 16,000,000.",
          "Result: 160 bar equals exactly 16,000,000 Pascals (16 MPa)."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Pascal Conversion Table",
    headers: ["Bar (bar)", "Pascals (Pa)", "Kilopascals (kPa)", "PSI Equivalent", "Practical Context"],
    rows: [
      { fromVal: "0.01 bar", toVal: "1,000 Pa", extra: "1.0 kPa", extra2: "0.145 psi", extra3: "Air ventilation duct static pressure" },
      { fromVal: "0.05 bar", toVal: "5,000 Pa", extra: "5.0 kPa", extra2: "0.725 psi", extra3: "Medical suction regulator low setting" },
      { fromVal: "0.10 bar", toVal: "10,000 Pa", extra: "10.0 kPa", extra2: "1.450 psi", extra3: "Low-pressure fuel gas delivery" },
      { fromVal: "0.50 bar", toVal: "50,000 Pa", extra: "50.0 kPa", extra2: "7.252 psi", extra3: "Automotive engine intake manifold boost" },
      { fromVal: "1.00 bar", toVal: "100,000 Pa", extra: "100.0 kPa", extra2: "14.504 psi", extra3: "100 kPa metric atmospheric baseline" },
      { fromVal: "1.50 bar", toVal: "150,000 Pa", extra: "150.0 kPa", extra2: "21.756 psi", extra3: "Domestic hydronic heating circuit" },
      { fromVal: "2.00 bar", toVal: "200,000 Pa", extra: "200.0 kPa", extra2: "29.008 psi", extra3: "Residential municipal tap water pressure" },
      { fromVal: "3.00 bar", toVal: "300,000 Pa", extra: "300.0 kPa", extra2: "43.511 psi", extra3: "Irrigation sprinkler system supply" },
      { fromVal: "6.00 bar", toVal: "600,000 Pa", extra: "600.0 kPa", extra2: "87.023 psi", extra3: "Factory compressed air tool line" },
      { fromVal: "10.00 bar", toVal: "1,000,000 Pa", extra: "1,000.0 kPa", extra2: "145.038 psi", extra3: "Commercial fire suppression standpipe" },
      { fromVal: "25.00 bar", toVal: "2,500,000 Pa", extra: "2,500.0 kPa", extra2: "362.594 psi", extra3: "CO2 industrial refrigeration high side" },
      { fromVal: "200.00 bar", toVal: "20,000,000 Pa", extra: "20,000.0 kPa", extra2: "2,900.755 psi", extra3: "Standard industrial oxygen cylinder fill" }
    ]
  },
  applications: {
    title: "Common Engineering Applications",
    items: [
      {
        title: "Thermodynamic Simulations and Academic Research",
        text: "Physical modeling software (such as ANSYS Fluent, OpenFOAM, and COMSOL) requires pressure parameters entered in pure SI Pascals ($N/m^2$). Engineers convert plant measurements logged in bar directly into Pascals."
      },
      {
        title: "HVAC and Building Service Systems",
        text: "Chilled water circuits, boiler feeds, and balancing valves are marked in bar on external gauges, but structural stress load checks on flanges and welded joints are evaluated in Pascals."
      },
      {
        title: "Aeronautical and Meteorological Instruments",
        text: "While barometric pressure reports historically utilize millibar, sensor data acquisition boards output raw digital signals calibrated to integer Pascals for flight computer air data calculations."
      },
      {
        title: "Industrial Pneumatics and Actuator Design",
        text: "Pneumatic cylinder force calculations follow $F = P \\times A$. To calculate force directly in Newtons, designers convert the air supply pressure from bar into Pascals before multiplying by the piston area in square meters."
      }
    ]
  },
  pitfalls: {
    title: "Common Errors to Avoid",
    items: [
      "Confusing bar with millibar: 1 bar equals 100,000 Pa, whereas 1 millibar (mbar) equals 100 Pa. Confusing the two introduces a 1,000-fold error.",
      "Gauge pressure vs. Absolute pressure: Gauge pressure ($P_{gauge}$) measures pressure relative to atmospheric ambient. Absolute pressure ($P_{abs}$) requires adding atmospheric pressure (approximately 1.013 bar, or 101,325 Pa) before thermodynamic calculations.",
      "Mishandling decimal places: Multiplying by 100,000 requires moving the decimal five places right, not four or six.",
      "Assuming 1 bar equals 1 atmosphere: 1 bar is exactly 100,000 Pa, whereas 1 standard atmosphere is 101,325 Pa (a 1.325% difference)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 bar?",
      answer: "There are exactly 100,000 Pascals in 1 bar (1 bar = 100,000 Pa). This is an exact definition agreed upon in international metrology."
    },
    {
      question: "What is the formula to convert bar to Pascals?",
      answer: "The formula is: Pa = bar × 100,000. For example, 2.5 bar × 100,000 = 250,000 Pa."
    },
    {
      question: "How do you convert Pascals back to bar?",
      answer: "To convert Pascals to bar, divide the pressure in Pascals by 100,000 (or multiply by 0.00001). For example, 500,000 Pa ÷ 100,000 = 5 bar."
    },
    {
      question: "What is 1 bar in kilopascals (kPa)?",
      answer: "1 bar equals exactly 100 kPa (100,000 Pa ÷ 1,000 = 100 kPa)."
    },
    {
      question: "What is 1 bar in megapascals (MPa)?",
      answer: "1 bar equals exactly 0.1 MPa (100,000 Pa ÷ 1,000,000 = 0.1 MPa)."
    },
    {
      question: "Is 1 bar equal to atmospheric pressure?",
      answer: "1 bar is very close to standard atmospheric pressure, but not identical. Standard sea-level atmosphere is defined as 101,325 Pa (1.01325 bar). Thus, 1 bar is roughly 1.3% lower than 1 atm."
    },
    {
      question: "Why was the bar created if the Pascal already existed?",
      answer: "The Pascal is very small (1 N/m²), resulting in inconveniently large numbers for daily engineering and meteorology. The bar provided an intuitive, human-scale metric unit close to atmospheric pressure."
    },
    {
      question: "What is 6 bar in Pascals for workshop air tools?",
      answer: "6 bar equals exactly 600,000 Pascals (or 600 kPa)."
    }
  ],
  relatedList: [
    { label: "Bar to Kilopascal", from: "bar", to: "kilopascal" },
    { label: "Bar to Megapascal", from: "bar", to: "megapascal" },
    { label: "Bar to PSI", from: "bar", to: "psi" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Bar to Atmosphere", from: "bar", to: "atmosphere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "BS EN ISO 5167: Measurement of fluid flow by means of pressure differential devices"
  ]
};
