import { CustomArticleData } from "./types";

export const psiToPascal: CustomArticleData = {
  fromUnitId: "psi",
  toUnitId: "pascal",
  seoTitle: "PSI to Pascal Converter (psi to Pa)",
  metaDescription: "Convert PSI to Pascal (psi to Pa) with exact 6,894.76× engineering precision. Learn conversion formulas, fluid mechanics examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/psi-to-pascal",
  h1: "PSI to Pascal Converter",
  introduction: [
    "Converting pounds per square inch (PSI) to Pascals (Pa) is a fundamental calculation in mechanical engineering, aerospace propulsion, fluid mechanics, acoustics, and civil structures. While PSI is the primary pressure unit in the United States and across Imperial industrial tooling, the Pascal is the coherent base unit of pressure and mechanical stress in the International System of Units (SI).",
    "One pound per square inch is defined as the force of one pound-force (4.4482216152605 N) exerted uniformly over an area of one square inch (0.00064516 m²). Dividing this exact force by the area yields approximately 6,894.757293 Pascals (commonly rounded to 6,894.76 Pa). To convert PSI to Pascals, multiply the PSI value by 6,894.757293.",
    "This technical guide explains the physical derivation between Imperial and SI pressure units, provides step-by-step calculation examples for pipeline flow and pneumatic pressure, presents a detailed engineering conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert PSI to Pascals, multiply the pressure value in PSI by 6,894.757293 (or approximately 6,894.76). For example, 1 PSI equals approximately 6,894.76 Pa, and standard atmospheric pressure of 14.696 PSI equals exactly 101,325 Pa.",
    formulaDisplay: "Pa = psi × 6,894.757293",
    subtext: "1 psi = 6,894.757293 Pa | 1 Pa = 0.0001450377 psi | Coherent SI derived unit"
  },
  aboutSourceUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pound-force per square inch (symbol: psi or lb/in²) is the standard unit of pressure in the Imperial and US Customary systems. Widely used on North American automotive tire gauges, air compressors, hydraulic pumps, and oil refinery manifolds, it represents 1 lbf distributed over 1 in²."
  },
  aboutTargetUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the derived SI unit of pressure and mechanical stress, named after 17th-century French polymath Blaise Pascal. Defined as a perpendicular force of one Newton distributed evenly over an area of one square meter (1 N/m²), it is the mandatory standard across physics, finite element analysis, and computational fluid dynamics."
  },
  relationship: "One PSI equals approximately 6,894.757293 Pascals (approx. 6.89476 kPa). Conversely, 1 Pascal equals approximately 0.0001450377 PSI. Converting from PSI to Pascals scales the value by nearly 7,000 due to the difference between one square inch and one square meter.",
  relationshipTitle: "PSI to Pascal Physical Benchmarks",
  relationshipItems: [
    { label: "0.01 psi", value: "68.95 Pa (Building ventilation plenum draft)" },
    { label: "0.145 psi", value: "1,000 Pa (1 kPa - Low pressure test)" },
    { label: "1.00 psi", value: "6,894.76 Pa (Base conversion ratio)" },
    { label: "5.00 psi", value: "34,473.79 Pa (Low-pressure steam line)" },
    { label: "14.696 psi", value: "101,325 Pa (Standard sea-level atmospheric pressure)" },
    { label: "32.00 psi", value: "220,632.23 Pa (Typical passenger vehicle tire inflation)" },
    { label: "90.00 psi", value: "620,528.16 Pa (Industrial pneumatic air tool supply)" },
    { label: "150.00 psi", value: "1,034,213.59 Pa (Commercial fire sprinkler header)" }
  ],
  formula: {
    text: "Multiply the pressure in PSI by 6,894.757293 to find the equivalent pressure in Pascals.",
    math: "\\text{Pa} = \\text{psi} \\times 6\\,894.757293",
    subtext: "To convert Pascals to PSI: divide by 6,894.757293 (or multiply by 0.0001450377)."
  },
  formulaTitle: "PSI to Pascal Mathematical Formula",
  practicalTip: {
    title: "The 7,000 Approximation Rule",
    text: "For rapid mental estimates on the job site, multiply PSI by 7,000, then subtract 1.5%. For example, 10 psi × 7,000 = 70,000 Pa; subtracting 1.5% gives roughly 68,950 Pa (exact is 68,947.6 Pa). This mental approximation is accurate within 0.02%."
  },
  expertNote: {
    title: "Finite Element Analysis (FEA) Stress Calculations",
    text: "Engineering design blueprints in the United States often report material yields in PSI or kpsi (thousands of psi). However, FEA software solvers (such as ANSYS, Abaqus, and NASTRAN) compute constitutive equations strictly in SI Pascals (N/m²). Converting accurately prevents catastrophic structural dimensioning errors."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Tire Inflation Pressure",
        subtitle: "A vehicle tire pressure monitoring system (TPMS) reports an inflation pressure of 32.0 PSI. Convert this pressure to Pascals for aerodynamic rolling resistance simulation.",
        steps: [
          "State starting pressure: 32.0 psi.",
          "Apply formula: Pa = psi × 6,894.757293.",
          "Calculate: 32.0 × 6,894.757293 = 220,632.23 Pa.",
          "Result: 32.0 psi corresponds to approximately 220,632 Pa (or 220.63 kPa)."
        ]
      },
      {
        title: "Example 2: Pneumatic Shop Air System",
        subtitle: "A factory compressed air regulator delivers 90.0 PSI to an automated assembly robot. Express this pressure in Pascals.",
        steps: [
          "Record pressure: 90.0 psi.",
          "Calculate: 90.0 × 6,894.757293 = 620,528.16 Pa.",
          "Conclusion: 90.0 psi equals approximately 620,528 Pa (620.53 kPa)."
        ]
      },
      {
        title: "Example 3: Low-Pressure Differential Sensor",
        subtitle: "A cleanroom differential pressure sensor measures 0.050 PSI. Convert this value to Pascals.",
        steps: [
          "State value: 0.050 psi.",
          "Multiply: 0.050 × 6,894.757293 = 344.74 Pa.",
          "Result: 0.050 psi equals 344.74 Pa."
        ]
      }
    ]
  },
  table: {
    title: "PSI to Pascal Engineering Conversion Table",
    headers: ["PSI (psi)", "Pascal (Pa)", "Kilopascals (kPa)", "Bar (bar)", "Industrial & Everyday Context"],
    rows: [
      { fromVal: "0.1 psi", toVal: "689.48 Pa", extra: "0.689 kPa", extra2: "0.007 bar", extra3: "Light natural gas burner line" },
      { fromVal: "0.5 psi", toVal: "3,447.38 Pa", extra: "3.447 kPa", extra2: "0.034 bar", extra3: "Residential gas meter regulator" },
      { fromVal: "1.0 psi", toVal: "6,894.76 Pa", extra: "6.895 kPa", extra2: "0.069 bar", extra3: "1 psi exact physical benchmark" },
      { fromVal: "2.0 psi", toVal: "13,789.51 Pa", extra: "13.79 kPa", extra2: "0.138 bar", extra3: "Inflatable boat buoyancy tube" },
      { fromVal: "5.0 psi", toVal: "34,473.79 Pa", extra: "34.47 kPa", extra2: "0.345 bar", extra3: "Low-pressure steam heating boiler" },
      { fromVal: "10.0 psi", toVal: "68,947.57 Pa", extra: "68.95 kPa", extra2: "0.689 bar", extra3: "Water pressure booster cut-in" },
      { fromVal: "14.696 psi", toVal: "101,325 Pa", extra: "101.33 kPa", extra2: "1.013 bar", extra3: "Standard atmosphere at sea level" },
      { fromVal: "20.0 psi", toVal: "137,895 Pa", extra: "137.90 kPa", extra2: "1.379 bar", extra3: "Bicycle cruiser tire" },
      { fromVal: "30.0 psi", toVal: "206,843 Pa", extra: "206.84 kPa", extra2: "2.068 bar", extra3: "Sedan tire cold inflation" },
      { fromVal: "50.0 psi", toVal: "344,738 Pa", extra: "344.74 kPa", extra2: "3.447 bar", extra3: "Municipal water main feed" },
      { fromVal: "100.0 psi", toVal: "689,476 Pa", extra: "689.48 kPa", extra2: "6.895 bar", extra3: "Workshop pneumatic compressor line" },
      { fromVal: "150.0 psi", toVal: "1,034,214 Pa", extra: "1,034.2 kPa", extra2: "10.34 bar", extra3: "High-pressure commercial piping" }
    ]
  },
  applications: {
    title: "Engineering Applications",
    items: [
      {
        title: "Fluid Mechanics & CFD Simulations",
        text: "Piping friction loss and boundary layer formulas (such as the Darcy-Weisbach equation) require dynamic and static pressures expressed strictly in Pascals."
      },
      {
        title: "Aerospace Propulsion & Rocketry",
        text: "Rocket engine chamber pressures designed in PSI (e.g., 300 to 3,000 psi) are translated to Pascals when solving Navier-Stokes equations and thermodynamic thrust equations."
      },
      {
        title: "Structural Material Stress Analysis",
        text: "Stress tensors and von Mises failure criteria are calculated in Pascals (N/m²) to compare against structural steel tensile yield ratings originally recorded in PSI."
      },
      {
        title: "HVAC & Cleanroom Certification",
        text: "Low-range differential pressure transducers calibrated in fractions of a PSI are converted to Pascals to verify air balance and room pressurization standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes",
    items: [
      "Confusing Pascals (Pa) with kilopascals (kPa): 1 psi is approximately 6,894.76 Pa, but 6.895 kPa.",
      "Conflating gauge pressure (psig) with absolute pressure (psia) before converting to absolute Pascals.",
      "Rounding the factor to 6,895 too early in high-precision aerospace or hydrostatic calculations.",
      "Multiplying by 0.000145 instead of dividing when converting from Pascals to PSI."
    ]
  },
  faqs: [
      {
        question: "How many Pascals are in 1 PSI?",
        answer: "There are approximately 6,894.757293 Pascals in 1 PSI. This derives from 1 pound-force (4.448222 N) divided by 1 square inch (0.00064516 m²)."
      },
      {
        question: "How do you convert PSI to Pascal?",
        answer: "To convert PSI to Pascal, multiply the PSI value by 6,894.757293 (or roughly 6,894.76): <strong>Pa = psi × 6,894.757293</strong>. For example, 10 psi equals approximately 68,948 Pa."
      },
      {
        question: "How do you convert Pascals to PSI?",
        answer: "Divide the Pascal value by 6,894.757293 (or multiply by 0.0001450377): <strong>psi = Pa ÷ 6,894.757293</strong>. For example, 100,000 Pa equals approximately 14.504 psi."
      },
      {
        question: "What is 14.7 PSI in Pascals?",
        answer: "Standard atmospheric sea-level pressure of 14.6959 PSI equals exactly 101,325 Pascals (101.325 kPa)."
      },
      {
        question: "Why is 1 PSI so much larger than 1 Pascal?",
        answer: "One Pascal represents 1 Newton distributed over a whole square meter (about the weight of a sheet of paper). One PSI concentrates roughly 4.45 Newtons onto a tiny square inch (1/1,550 of a square meter), producing nearly 6,895 times more pressure."
      },
      {
        question: "What is 30 PSI in Pascals?",
        answer: "Thirty PSI equals approximately 206,842.7 Pascals (or roughly 206.84 kPa / 2.07 bar)."
      },
      {
        question: "How many kilopascals is 1 PSI?",
        answer: "One PSI equals approximately 6.89476 kilopascals (kPa). Divide the Pascal value (6,894.76 Pa) by 1,000."
      },
      {
        question: "What is the difference between psia, psig, and Pa?",
        answer: "Psia is absolute PSI referenced to vacuum. Psig is gauge PSI referenced to ambient air. Pa is the SI unit of pressure, which can be expressed in absolute or gauge terms."
      }
    ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "ISO 80000-4: Quantities and Units — Part 4: Mechanics",
    "ASME B40.100: Pressure Gauges and Gauge Attachments",
    "BIPM: The International System of Units (SI Brochure, 9th Edition)"
  ]
};
