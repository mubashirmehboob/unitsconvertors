import { CustomArticleData } from "./types";

export const pascalToMegapascal: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "megapascal",
  seoTitle: "Pascal to Megapascal Converter (Pa to MPa)",
  metaDescription: "Convert Pascals to megapascals (Pa to MPa) instantly. Learn the exact 10⁻⁶ conversion factor, formula, calculation steps, materials testing examples, and FAQs.",
  h1: "Pascal to Megapascal Converter",
  introduction: [
    "The Pascal (Pa) and megapascal (MPa) are key metric units used to quantify mechanical pressure, tensile strength, yield stress, and hydraulic force. While the Pascal measures baseline physical pressure at the single-unit level, the megapascal is the primary unit used by structural engineers, metallurgists, and geologists to express large forces.",
    "Because the megapascal is a decimal multiple within the International System of Units (SI), converting Pascals to megapascals is direct and exact. One megapascal contains exactly 1,000,000 Pascals (10⁶ Pa). Converting Pa to MPa requires dividing the Pascal value by 1,000,000 or moving the decimal point six places to the left.",
    "This guide explains the exact formula, step-by-step conversion examples, a reference table for materials science, practical industrial applications, and answers to common pressure measurement questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to megapascals, divide the pressure value in Pascals by 1,000,000 (or multiply by 0.000001). For example, 5,000,000 Pa equals 5 MPa, and 30,000,000 Pa equals 30 MPa.",
    formulaDisplay: "MPa = Pa ÷ 1,000,000",
    subtext: "One Pascal is equal to exactly 0.000001 megapascal (10⁻⁶ MPa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the base derived unit of pressure in the SI system, defined as one Newton per square meter (1 N/m²). Named after Blaise Pascal, it represents an extremely small unit of physical stress. For instance, the ambient atmospheric pressure at sea level is over 101,000 Pascals, making the unmultiplied Pascal cumbersome for heavy structural calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is a decimal multiple of the Pascal, where the prefix 'mega-' denotes one million (10⁶). In engineering and physics, 1 MPa is equivalent to 1 Newton per square millimeter (1 N/mm²). Megapascals are widely used in civil engineering, metallurgy, geophysics, and fluid power systems to define concrete compressive strength, steel tensile limits, and high-pressure hydraulic ratings."
  },
  relationship: "The mathematical relationship between Pascals and megapascals is defined exactly by metric scaling: 1 MPa = 1,000,000 Pa, and 1 Pa = 0.000001 MPa. The conversion is entirely linear and exact.",
  relationshipTitle: "Pascal vs Megapascal Mechanical Stress Scale",
  relationshipItems: [
    { label: "1 Pa", value: "0.000001 MPa (Base SI pressure)" },
    { label: "100,000 Pa", value: "0.1 MPa (1 bar / atmospheric baseline)" },
    { label: "1,000,000 Pa", value: "1 MPa (Low-strength concrete stress)" },
    { label: "25,000,000 Pa", value: "25 MPa (Standard structural concrete rating)" },
    { label: "250,000,000 Pa", value: "250 MPa (Structural steel yield strength)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 1,000,000 to convert to megapascals.",
    math: "MPa = Pa / 1000000",
    subtext: "To convert megapascals back to Pascals, multiply the MPa value by 1,000,000."
  },
  formulaTitle: "Pascal to Megapascal Formula",
  practicalTip: {
    title: "Scientific Notation Shortcut",
    text: "In scientific notation, 1 Pascal equals 1 × 10⁻⁶ MPa. To convert Pa to MPa, shift the decimal point six places to the left (e.g., 40,000,000 Pa = 40.0 MPa)."
  },
  expertNote: {
    title: "Equivalence to N/mm²",
    text: "Because 1 m² = 1,000,000 mm², 1 MPa = 1,000,000 N / 1,000,000 mm² = 1 N/mm². Structural engineers frequently use MPa and N/mm² interchangeably in load calculations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Structural Concrete Compressive Test",
        subtitle: "Convert a concrete lab crushing test result of 35,000,000 Pa to megapascals.",
        steps: [
          "Identify starting pressure: 35,000,000 Pa.",
          "Apply conversion formula: MPa = Pa ÷ 1,000,000.",
          "Calculate: 35,000,000 ÷ 1,000,000 = 35.",
          "Result: 35,000,000 Pa equals exactly 35 MPa."
        ]
      },
      {
        title: "Example 2: High-Pressure Hydraulic Pump",
        subtitle: "Convert a hydraulic fluid pressure rating of 21,000,000 Pa to megapascals.",
        steps: [
          "Identify pressure in Pascals: 21,000,000 Pa.",
          "Divide by 1,000,000: 21,000,000 ÷ 1,000,000 = 21.",
          "Result: 21,000,000 Pa equals 21 MPa."
        ]
      },
      {
        title: "Example 3: Structural Steel Yield Point",
        subtitle: "Convert a steel specification of 400,000,000 Pa to megapascals.",
        steps: [
          "Identify starting stress: 400,000,000 Pa.",
          "Apply formula: 400,000,000 ÷ 1,000,000 = 400.",
          "Result: 400,000,000 Pa equals 400 MPa."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Megapascal Conversion Table",
    headers: ["Pascals (Pa)", "Megapascals (MPa)", "Engineering & Real-World Context"],
    rows: [
      { fromVal: "1,000 Pa", toVal: "0.001 MPa", extra: "HVAC system air pressure" },
      { fromVal: "100,000 Pa", toVal: "0.1 MPa", extra: "Approximate atmospheric pressure (1 bar)" },
      { fromVal: "500,000 Pa", toVal: "0.5 MPa", extra: "Commercial building water pipe pressure" },
      { fromVal: "1,000,000 Pa", toVal: "1 MPa", extra: "High-pressure gas line threshold" },
      { fromVal: "5,000,000 Pa", toVal: "5 MPa", extra: "Low-density plastic material yield limit" },
      { fromVal: "20,000,000 Pa", toVal: "20 MPa", extra: "Residential foundation concrete rating" },
      { fromVal: "35,000,000 Pa", toVal: "35 MPa", extra: "High-strength bridge deck concrete" },
      { fromVal: "70,000,000 Pa", toVal: "70 MPa", extra: "Compressed hydrogen storage tank pressure" },
      { fromVal: "250,000,000 Pa", toVal: "250 MPa", extra: "Structural steel (Grade A36) yield strength" },
      { fromVal: "1,000,000,000 Pa", toVal: "1,000 MPa", extra: "Ultra-high strength titanium alloys (1 GPa)" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to MPa Conversion",
    items: [
      {
        title: "Civil Engineering & Construction",
        text: "Building materials like concrete, brick, and mortar are rated in megapascals (e.g., C25/30 concrete). Converting sensor readings from Pascals to MPa ensures compliance with building codes."
      },
      {
        title: "Mechanical & Aerospace Engineering",
        text: "Finite Element Analysis (FEA) software calculates stress distributions in Pascals before converting peak stresses to MPa for easy comparison against material yield strength charts."
      },
      {
        title: "Geophysics & Rock Mechanics",
        text: "Tectonic pressure in the Earth's crust and borehole fluid dynamics involve immense forces. Expressing pressure in MPa simplifies subterranean geological models."
      },
      {
        title: "High-Pressure Hydraulics",
        text: "Industrial machinery, excavator arms, and aircraft flight control actuators operate at pressures between 10 MPa and 70 MPa. Pressure sensor outputs in Pascals are converted to MPa for pilot and operator displays."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing megapascal (MPa) with kilopascal (kPa): Remember that 1 MPa = 1,000 kPa = 1,000,000 Pa.",
      "Miscounting zeros when shifting decimal places: Moving six places left is required when converting Pa to MPa.",
      "Symbol capitalization errors: Megapascal is written as 'MPa' (capital M, capital P, lowercase a). Using 'mPa' represents millipascals (0.001 Pa), which is off by a factor of one billion.",
      "Mixing imperial and metric units: Do not confuse MPa with PSI (1 MPa ≈ 145.038 PSI)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals equal one megapascal?",
      answer: "There are exactly 1,000,000 Pascals in one megapascal. The metric prefix 'mega-' signifies one million."
    },
    {
      question: "What is the formula to convert Pa to MPa?",
      answer: "The formula is: MPa = Pa ÷ 1,000,000. You can also multiply the Pascal value by 1 × 10⁻⁶ (0.000001)."
    },
    {
      question: "Is 1 MPa equal to 1 N/mm²?",
      answer: "Yes, exactly. One megapascal is equal to 1 Newton per square millimeter (1 N/mm²), which is why it is extensively used in structural engineering."
    },
    {
      question: "What is the difference between mPa and MPa?",
      answer: "Lowercase 'mPa' stands for millipascal (0.001 Pa), while uppercase 'MPa' stands for megapascal (1,000,000 Pa). Capitalization is critical in SI metric units."
    },
    {
      question: "How do I convert MPa back to Pa?",
      answer: "To convert megapascals back to Pascals, multiply the MPa value by 1,000,000 (e.g., 20 MPa × 1,000,000 = 20,000,000 Pa)."
    },
    {
      question: "How many PSI are in 1 MPa?",
      answer: "One megapascal is equal to approximately 145.038 pounds per square inch (PSI)."
    },
    {
      question: "What is standard atmospheric pressure in MPa?",
      answer: "Standard atmospheric pressure (101,325 Pa) equals approximately 0.101325 MPa (or about 0.1 MPa)."
    },
    {
      question: "Why do engineers prefer MPa over Pa?",
      answer: "Because structural forces and material strengths involve millions of Pascals, using MPa avoids writing long, unwieldy strings of zeros."
    },
    {
      question: "Is megapascal an official SI unit?",
      answer: "Yes. Megapascal is an officially recognized decimal multiple of the SI base unit for pressure (the Pascal)."
    }
  ],
  relatedList: [
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Kilopascal to Megapascal", from: "kilopascal", to: "megapascal" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" }
  ],
  references: [
    "International Organization for Standardization (ISO) 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "ASTM E380 - Standard Practice for Use of the International System of Units (SI).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
