import { CustomArticleData } from "./types";

export const barToMegapascal: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "megapascal",
  seoTitle: "Bar to Megapascal Converter (bar to MPa)",
  metaDescription: "Convert bar to megapascals (bar to MPa) with exact 0.1× metric precision. Learn the conversion formula, hydraulic engineering examples, tables, and FAQs.",
  h1: "Bar to Megapascal Converter",
  introduction: [
    "Converting bar to megapascals (MPa) is an essential everyday calculation in hydraulic machinery design, high-pressure piping, structural mechanics, and materials engineering. In European mechanical workshops, manufacturing plants, and heavy equipment operations, analog pressure gauges, relief valves, and pump specifications are predominantly stamped in bar. In contrast, international engineering standards (ISO/EN), finite element analysis (FEA) software, and metallurgical yield strength ratings express stress and fluid loads in megapascals ($1\\text{ N/mm}^2$).",
    "Because both units are defined within the coherent metric system, their relationship is exact. One bar is defined as exactly 100,000 Pascals, while one megapascal is defined as 1,000,000 Pascals. Therefore, one bar equals exactly 0.1 megapascals (or 1 megapascal equals 10 bar). To convert bar to megapascals, simply divide the value in bar by 10 (or move the decimal point one place to the left).",
    "This technical guide explains the conversion formula, step-by-step worked engineering problems, a high-pressure reference chart, common conversion mistakes, and answers to technical questions."
  ],
  quickAnswer: {
    text: "To convert bar to megapascals, divide the pressure value in bar by 10 (or multiply by 0.1). For example, a hydraulic system pressure of 250 bar equals exactly 25 MPa.",
    formulaDisplay: "MPa = bar ÷ 10",
    subtext: "Exact definition: 1 bar = 0.1 MPa = 100 kPa = 100,000 Pa.\n1 MPa = 10 bar."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals. Widely utilized in mechanical engineering, commercial diving cylinders, and fluid power hydraulics across Europe and Asia, 1 bar represents roughly standard sea-level atmospheric pressure (1.01325 bar)."
  },
  aboutTargetUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official SI decimal multiple of the Pascal, representing 1,000,000 Pascals ($10^6\\text{ N/m}^2$, identical to $1\\text{ N/mm}^2$). It is the primary international unit for high-pressure hydraulics, rock mechanics, and material tensile strength."
  },
  relationship: "The relationship between bar and megapascals is exact by metric definition: 1 bar = 0.1 MPa, and 1 MPa = 10 bar. Converting from bar to MPa requires simply scaling the number by a factor of 0.1 (or dividing by 10).",
  relationshipTitle: "Bar to Megapascal Pressure Benchmarks",
  relationshipItems: [
    { label: "1.0 bar", value: "0.1 MPa (Standard metric atmospheric reference)" },
    { label: "10.0 bar", value: "1.0 MPa (Steam boiler / Compressed air main)" },
    { label: "100.0 bar", value: "10.0 MPa (Industrial hydraulic return line)" },
    { label: "200.0 bar", value: "20.0 MPa (Standard 3,000 psi SCUBA cylinder fill)" },
    { label: "350.0 bar", value: "35.0 MPa (Heavy excavator hydraulic system rating)" },
    { label: "700.0 bar", value: "70.0 MPa (Hydrogen fuel cell vehicle storage tank)" }
  ],
  formula: {
    text: "Divide the pressure in bar by 10 (or multiply by 0.1) to obtain the equivalent pressure in megapascals.",
    math: "\\text{MPa} = \\frac{\\text{bar}}{10} = \\text{bar} \\times 0.1",
    subtext: "To convert megapascals back to bar, multiply the MPa value by 10."
  },
  formulaTitle: "Bar to Megapascal Conversion Formula",
  practicalTip: {
    title: "The 1-Decimal Left Shift Rule",
    text: "Because 1 bar equals 0.1 MPa, simply move the decimal point one position to the left to convert bar to MPa (e.g., 250 bar becomes 25.0 MPa, and 315 bar becomes 31.5 MPa)."
  },
  expertNote: {
    title: "Material Yield Strength vs. Hydraulic Fluid Pressure",
    text: "When performing hoop stress calculations for hydraulic cylinders using Barlow's formula ($\\sigma = P \\cdot D / (2t)$), input fluid pressures measured in bar must first be converted into MPa so that the resulting wall stress aligns directly with material yield strength expressed in $\\text{N/mm}^2$ (MPa)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hydraulic Press Relief Valve Setting (210 bar)",
        subtitle: "An industrial hydraulic stamping press has its main circuit relief valve adjusted to 210 bar. Express this pressure setting in megapascals for the machine maintenance log.",
        steps: [
          "State starting pressure: 210 bar.",
          "Apply conversion formula: MPa = 210 ÷ 10.",
          "Calculate: 210 ÷ 10 = 21.0.",
          "Result: 210 bar equals exactly 21.0 MPa."
        ]
      },
      {
        title: "Example 2: Breathing Air SCBA Cylinder Fill (300 bar)",
        subtitle: "A carbon-composite self-contained breathing apparatus (SCBA) tank used by firefighters is charged to 300 bar. Convert this value to megapascals.",
        steps: [
          "Identify cylinder pressure: 300 bar.",
          "Apply formula: MPa = 300 ÷ 10.",
          "Calculate: 300 ÷ 10 = 30.0.",
          "Result: 300 bar equals exactly 30.0 MPa."
        ]
      },
      {
        title: "Example 3: Common-Rail Diesel Fuel Injection (1,800 bar)",
        subtitle: "A modern commercial common-rail diesel injection system reaches 1,800 bar during peak acceleration. Convert this to megapascals.",
        steps: [
          "Identify injection pressure: 1,800 bar.",
          "Divide by 10: MPa = 1,800 ÷ 10.",
          "Calculate: 1,800 ÷ 10 = 180.0.",
          "Result: 1,800 bar corresponds to exactly 180.0 MPa."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Megapascal Conversion Table",
    headers: ["Bar (bar)", "Megapascals (MPa)", "Kilopascals (kPa)", "PSI Equivalent", "Typical Application"],
    rows: [
      { fromVal: "1.0 bar", toVal: "0.10 MPa", extra: "100 kPa", extra2: "14.50 psi", extra3: "Atmospheric reference baseline" },
      { fromVal: "6.0 bar", toVal: "0.60 MPa", extra: "600 kPa", extra2: "87.02 psi", extra3: "Factory compressed air tool line" },
      { fromVal: "10.0 bar", toVal: "1.00 MPa", extra: "1,000 kPa", extra2: "145.04 psi", extra3: "Commercial building water booster" },
      { fromVal: "25.0 bar", toVal: "2.50 MPa", extra: "2,500 kPa", extra2: "362.59 psi", extra3: "CO2 refrigeration high side" },
      { fromVal: "50.0 bar", toVal: "5.00 MPa", extra: "5,000 kPa", extra2: "725.19 psi", extra3: "Natural gas transmission piping" },
      { fromVal: "100.0 bar", toVal: "10.00 MPa", extra: "10,000 kPa", extra2: "1,450.38 psi", extra3: "Light hydraulic machine system" },
      { fromVal: "160.0 bar", toVal: "16.00 MPa", extra: "16,000 kPa", extra2: "2,320.60 psi", extra3: "Mobile agricultural tractor hydraulics" },
      { fromVal: "200.0 bar", toVal: "20.00 MPa", extra: "20,000 kPa", extra2: "2,900.75 psi", extra3: "Standard SCUBA diving cylinder" },
      { fromVal: "250.0 bar", toVal: "25.00 MPa", extra: "25,000 kPa", extra2: "3,625.94 psi", extra3: "Industrial CNC machine clamping circuit" },
      { fromVal: "350.0 bar", toVal: "35.00 MPa", extra: "35,000 kPa", extra2: "5,076.32 psi", extra3: "Heavy excavator arm hydraulic circuit" },
      { fromVal: "700.0 bar", toVal: "70.00 MPa", extra: "70,000 kPa", extra2: "10,152.64 psi", extra3: "Hydrogen vehicle fuel tank test" },
      { fromVal: "2,000.0 bar", toVal: "200.00 MPa", extra: "200,000 kPa", extra2: "29,007.55 psi", extra3: "High-pressure diesel common rail" }
    ]
  },
  applications: {
    title: "Key Hydraulic and Engineering Applications",
    items: [
      {
        title: "Fluid Power and Mobile Hydraulics",
        text: "Hydraulic pump and valve manufacturers (such as Bosch Rexroth, Parker, and Eaton) specify component pressure ratings in bar on nameplates, while mechanical engineers use MPa when calculating cylinder wall thickness and tensile yield margins."
      },
      {
        title: "Compressed Gas Storage and Diving",
        text: "Breathing air compressors and dive shops charge diving cylinders to 200 bar or 300 bar, while pressure vessel certification standards (DOT/UN/ISO) certify hydrostatic burst testing in megapascals (e.g., 30 MPa test pressure)."
      },
      {
        title: "Hydrogen and Alternative Fuels",
        text: "Automotive hydrogen refueling stations dispense gas at 700 bar, which engineers translate to 70 MPa when modeling composite fuel tank stress distributions."
      },
      {
        title: "Petrochemical and Refinery Piping",
        text: "Pipeline engineers convert hydrostatic pressure test data from field gauges marked in bar into megapascals to verify adherence to ASME B31.3 piping codes."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 10 instead of dividing: Converting bar to MPa decreases the numerical value by a factor of 10. Multiplying produces a value that is 100 times too large.",
      "Confusing bar with millibar: 1 bar = 0.1 MPa, whereas 1 millibar (mbar) = 0.0001 MPa.",
      "Gauge pressure versus absolute pressure: In high-pressure applications (> 50 bar), the 1 bar difference between gauge (barg) and absolute (bara) represents a small percentage, but for regulatory compliance reports, always verify whether values indicate gauge or absolute pressure.",
      "Decimal placement in safety valves: When setting a 31.5 MPa relief valve, ensure the technician sets the test bench gauge to 315 bar, not 31.5 bar."
    ]
  },
  faqs: [
    {
      question: "How many megapascals are in 1 bar?",
      answer: "There are exactly 0.1 megapascals in 1 bar (1 bar = 0.1 MPa). This is an exact metric definition."
    },
    {
      question: "What is the formula to convert bar to MPa?",
      answer: "The formula is: MPa = bar ÷ 10 (or MPa = bar × 0.1)."
    },
    {
      question: "How do you convert MPa back to bar?",
      answer: "Multiply the MPa value by 10. For example, 25 MPa × 10 = 250 bar."
    },
    {
      question: "What is 200 bar in MPa?",
      answer: "200 bar equals exactly 20 MPa (200 ÷ 10 = 20 MPa)."
    },
    {
      question: "What is 350 bar in MPa?",
      answer: "350 bar equals exactly 35 MPa (350 ÷ 10 = 35 MPa)."
    },
    {
      question: "What is 700 bar in MPa for hydrogen storage?",
      answer: "700 bar equals exactly 70 MPa (700 ÷ 10 = 70 MPa)."
    },
    {
      question: "Why is the bar to MPa conversion so simple?",
      answer: "Both units are decimal multiples of the Pascal: 1 bar = 100,000 Pa and 1 MPa = 1,000,000 Pa. The ratio between them is exactly 1:10."
    },
    {
      question: "Is 10 bar equal to 1 MPa?",
      answer: "Yes, exactly. 10 bar equals 1.0 MPa (1,000,000 Pa)."
    }
  ],
  relatedList: [
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Bar to Kilopascal", from: "bar", to: "kilopascal" },
    { label: "Bar to PSI", from: "bar", to: "psi" },
    { label: "Bar to Pascal", from: "bar", to: "pascal" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "ISO 4413: Hydraulic fluid power — General rules and safety requirements for systems and their components",
    "ASME Boiler and Pressure Vessel Code (BPVC), Section VIII"
  ]
};
