import { CustomArticleData } from "./types";

export const milliliterToCubicInch: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "cubic-inch",
  seoTitle: "Milliliter to Cubic Inch Converter - mL to in³",
  metaDescription: "Convert milliliters to cubic inches (mL to in³ or cu in). Exact conversion formula (1 in³ = 16.387 mL), step-by-step calculations, automotive & hydraulic tables.",
  h1: "Milliliter to Cubic Inch Converter",
  introduction: [
    "In automotive powertrain design, hydraulic cylinder sizing, mechanical engineering, and aerospace manufacturing, converting small liquid capacities from metric milliliters to cubic inches (in³ or cu in) is a standard calculation. While international automotive engineering, chemical dosing, and laboratory test instruments operate in milliliters (mL or cc), American muscle car engine displacements (e.g., 302, 350, 427 cu in), fluid pump displacement ratings, and pneumatic piston chambers are historically calibrated in cubic inches.",
    "Because exactly one cubic inch contains 16.387064 milliliters (cubic centimeters), converting between them is exact, consistent, and standardized under international treaty. This comprehensive guide details the conversion formula, calculation steps, engine displacement benchmarks, reference conversion tables, and real-world mechanical applications."
  ],
  quickAnswer: {
    text: "To convert milliliters to cubic inches, divide the volume in milliliters by 16.387064 (or multiply by 0.0610237). For example, a 500 mL fluid capacity equals approximately 30.51 cubic inches.",
    formulaDisplay: "1 in³ = 16.387064 mL | Volume (in³) = Volume (mL) ÷ 16.387064",
    subtext: "One international cubic inch equals exactly (2.54 cm)³ = 16.387064 cm³ (mL). Dividing 1 by 16.387064 yields approximately 0.0610237 cubic inches per milliliter."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L) or 1 cubic centimeter (1 cm³ / cc). It is the premier global standard for chemical laboratory measurements, clinical pharmaceuticals, beverage bottling, and fluid mechanics research."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Inch (in³ / cu in)",
    text: "The cubic inch (symbol: in³ or cu in) is a unit of volume in the imperial and US customary measurement systems defined as the volume of a cube measuring exactly 1 inch (2.54 cm) on each side. Equal to exactly 16.387064 milliliters (0.016387064 liters / 0.554113 US fluid ounces), it is the traditional benchmark for combustion engine displacement, hydraulic pump displacement (CID), and HVAC duct sizing."
  },
  relationship: "One international inch is defined as exactly 2.54 centimeters. Cubing this length yields $(2.54\\text{ cm})^3 = 16.387064\\text{ cm}^3$, which equals exactly 16.387064 milliliters. Dividing any volume in milliliters by 16.387064 converts it directly into cubic inches. Inversely, 1 milliliter represents approximately 0.06102374 cubic inches.",
  relationshipTitle: "Metric to US Customary Volume Ratio: mL vs in³",
  relationshipItems: [
    { label: "1 Cubic Inch (in³)", value: "exactly 16.387064 Milliliters (mL / cm³)" },
    { label: "1 Milliliter (mL)", value: "approx. 0.06102374 Cubic Inches (in³)" },
    { label: "1 Liter (1,000 mL)", value: "approx. 61.02374 Cubic Inches (in³)" },
    { label: "1 US Fluid Ounce", value: "approx. 1.80469 Cubic Inches (29.5735 mL)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 16.387064 to calculate cubic inches, or multiply by 0.06102374.",
    math: "Volume in Cubic Inches (in³) = Volume in Milliliters (mL) ÷ 16.387064",
    subtext: "Alternatively: Volume in Cubic Inches (in³) = Volume in Milliliters (mL) × 0.06102374"
  },
  formulaTitle: "Milliliter to Cubic Inch Conversion Formula",
  practicalTip: {
    title: "The 61 Cubic Inches per Liter Rule",
    text: "To estimate quickly, remember that 1,000 mL (1 liter) equals approximately 61.02 cubic inches. Multiply the number of liters by 61 to get engine displacement in cubic inches. For example, a 5.0 L (5,000 mL) engine is 5 × 61 ≈ 305 cu in (exact: 302–305 CID)."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Motorcycle Engine Cylinder Displacement",
        subtitle: "A high-performance single-cylinder motorcycle engine has a swept capacity of 450 mL (450 cc). Express this displacement in cubic inches.",
        steps: [
          "State the given volume: Volume = 450 mL.",
          "Apply the conversion formula: Volume (in³) = Volume (mL) ÷ 16.387064.",
          "Substitute the value: Volume (in³) = 450 ÷ 16.387064.",
          "Perform the division: Volume (in³) = 27.4607 in³.",
          "Conclude: The engine displacement equals approximately 27.46 cubic inches."
        ]
      },
      {
        title: "Example 2: Hydraulic Fluid Pump Displacement",
        subtitle: "A hydraulic gear pump discharges 82 mL of fluid per revolution. Convert this pump displacement into cubic inches per revolution (CIR).",
        steps: [
          "State the initial volume: Volume = 82 mL.",
          "Multiply by the factor: 82 × 0.06102374.",
          "Calculate the product: 82 × 0.06102374 = 5.0039 in³.",
          "Conclude: The pump displacement is approximately 5.00 cubic inches per revolution."
        ]
      },
      {
        title: "Example 3: Combustion Chamber Pre-Ignition Bowl Volume",
        subtitle: "A racing piston top cavity has a measured fluid capacity of 18.5 mL. Find the cavity volume in cubic inches.",
        steps: [
          "Identify the volume: Volume = 18.5 mL.",
          "Set up the equation: Volume (in³) = 18.5 ÷ 16.387064.",
          "Compute the result: 18.5 ÷ 16.387064 = 1.1289 in³.",
          "Conclude: The combustion bowl volume is approximately 1.13 cubic inches."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Cubic Inch Conversion Table",
    headers: ["Milliliters (mL / cc)", "Cubic Inches (in³)", "Liters (L)", "Automotive / Engineering Benchmark"],
    rows: [
      { fromVal: "16.39 mL", toVal: "1.000 in³", extra: "0.0164 L", extra2: "Exact definition of 1.0 Cubic Inch" },
      { fromVal: "50 mL", toVal: "3.051 in³", extra: "0.0500 L", extra2: "50 cc moped engine cylinder" },
      { fromVal: "125 mL", toVal: "7.628 in³", extra: "0.1250 L", extra2: "125 cc standard commuter bike" },
      { fromVal: "250 mL", toVal: "15.256 in³", extra: "0.2500 L", extra2: "250 cc motocross engine" },
      { fromVal: "500 mL", toVal: "30.512 in³", extra: "0.5000 L", extra2: "Single cylinder in a 4.0L V8 (500 cc per cyl)" },
      { fromVal: "1,000 mL", toVal: "61.024 in³", extra: "1.0000 L", extra2: "1.0 Liter engine displacement (61 CID)" },
      { fromVal: "2,000 mL", toVal: "122.047 in³", extra: "2.0000 L", extra2: "2.0 Liter inline-4 cylinder engine (122 CID)" },
      { fromVal: "3,000 mL", toVal: "183.071 in³", extra: "3.0000 L", extra2: "3.0 Liter V6 engine (183 CID)" },
      { fromVal: "5,000 mL", toVal: "305.119 in³", extra: "5.0000 L", extra2: "5.0 Liter V8 engine (Ford 302 / GM 305 CID)" },
      { fromVal: "5,700 mL", toVal: "347.835 in³", extra: "5.7000 L", extra2: "5.7 Liter V8 engine (Chevy 350 / Hemi 345 CID)" }
    ]
  },
  applications: {
    title: "Automotive, Hydraulics & Pneumatics Applications",
    items: [
      {
        title: "Automotive Engine Displacement & Compression Ratios",
        text: "Engine builders measure cylinder head combustion chamber volume (cc / mL) using burettes and convert to cubic inches to calculate exact static compression ratios ($CR = (V_d + V_c)/V_c$)."
      },
      {
        title: "Hydraulic Pump & Motor Displacement Ratings",
        text: "Fluid power engineers convert metric pump delivery specifications (mL/rev or cc/rev) to cubic inches per revolution (CID/rev) when matching pumps to American hydraulic actuators."
      },
      {
        title: "Pneumatic Piston Stroke & Actuator Sizing",
        text: "Automation designers calculate air cylinder stroke volume (mL) and convert to cubic inches to determine standard air consumption requirements (SCFM) at specific operational cycle rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using linear inch conversion factors (2.54) instead of volume ($2.54^3 = 16.387$): Converting volume requires cubing the linear ratio.",
      "Confusing cubic inches with fluid ounces: 1 US fluid ounce is 29.574 mL (~1.805 in³), while 1 cubic inch is 16.387 mL.",
      "Rounding the factor too heavily: Using 16 instead of 16.387 introduces a 2.4% error, which skews engine compression calculations."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in 1 cubic inch?",
      answer: "There are exactly 16.387064 milliliters (cubic centimeters) in one cubic inch."
    },
    {
      question: "What is the formula to convert mL to in³?",
      answer: "The formula is: Volume in in³ = Volume in mL ÷ 16.387064 (or Volume in mL × 0.06102374)."
    },
    {
      question: "How many cubic inches is 1,000 mL (1 liter)?",
      answer: "1,000 mL (1 liter) is equal to approximately 61.0237 cubic inches (61.02 cu in)."
    },
    {
      question: "How many cubic inches is a 500 mL bottle?",
      answer: "500 mL is equal to approximately 30.512 cubic inches (500 ÷ 16.387064 = 30.512 in³)."
    },
    {
      question: "How do I convert cubic inches back to milliliters?",
      answer: "To convert cubic inches to milliliters, multiply the cubic inch value by 16.387064 (for example, 10 in³ × 16.387 = 163.87 mL)."
    },
    {
      question: "How many cubic inches are in a 5.0-liter engine?",
      answer: "A 5.0-liter (5,000 mL) engine has an internal swept displacement of approximately 305.12 cubic inches (often historically designated as a 302 or 305 CID engine)."
    },
    {
      question: "What is the symbol for cubic inch and milliliter?",
      answer: "Cubic inch is abbreviated as 'in³' or 'cu in', and milliliter is symbolized as 'mL'."
    },
    {
      question: "Is a cubic inch larger than a fluid ounce?",
      answer: "No, a US fluid ounce is larger: 1 US fl oz = 29.574 mL (approx. 1.805 in³), whereas 1 cubic inch = 16.387 mL."
    }
  ],
  relatedList: [
    { label: "Cubic Inch to Milliliter", from: "cubic-inch", to: "milliliter" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" },
    { label: "Milliliter to Cubic Centimeter", from: "milliliter", to: "cubic-centimeter" },
    { label: "Liter to Cubic Inch", from: "liter", to: "cubic-inch" }
  ],
  references: [
    "NIST Handbook 44 — Specifications and Tolerances: Volume",
    "Society of Automotive Engineers (SAE) — Engine Displacement Standards",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
