import { CustomArticleData } from "./types";

export const megapascalToPascal: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "pascal",
  seoTitle: "Megapascal to Pascal Converter (MPa to Pa)",
  metaDescription: "Convert megapascals to Pascals (MPa to Pa) with exact SI metric precision. Master the 1,000,000× multiplier formula, structural engineering examples, tables, and FAQs.",
  h1: "Megapascal to Pascal Converter",
  introduction: [
    "Converting megapascals (MPa) to Pascals (Pa) is a fundamental calculation across materials science, structural engineering, rock geomechanics, high-pressure hydraulics, and theoretical physics. While material yield strengths, concrete compressive specifications, and structural finite element analysis (FEA) outputs are presented in megapascals for numerical conciseness, dimensional physical equations, base SI stress formulas, and fluid mechanics derivations require values in base Pascals ($1\\text{ N/m}^2$).",
    "Because both units belong to the coherent International System of Units (SI), the conversion between megapascals and Pascals is exact. The SI prefix 'mega-' represents a multiplication factor of one million ($10^6$ or 1,000,000). Consequently, one megapascal equals exactly 1,000,000 Pascals (or $1\\text{ N/mm}^2$). To convert megapascals into Pascals, multiply the megapascal value by 1,000,000 or shift the decimal point six places to the right.",
    "This comprehensive guide details the exact mathematical formula, material testing calculation examples, an engineering stress reference table, real-world structural applications, and answers to common metric conversion questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to Pascals, multiply the value in megapascals by 1,000,000 (or $10^6$). For example, a structural steel yield strength of 250 MPa equals 250,000,000 Pa, and 1 MPa equals exactly 1,000,000 Pa.",
    formulaDisplay: "Pa = MPa × 1,000,000 = MPa × 10^6",
    subtext: "Exact SI factor: 1 MPa = 1,000,000 Pa = 1 N/mm² = 1,000 kPa.\n1 Pa = 0.000001 MPa (10⁻⁶ MPa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official decimal multiple of the Pascal, defined as 1,000,000 Pascals ($10^6\\text{ N/m}^2$, identical to $1\\text{ N/mm}^2$). It is the universal standard across civil, mechanical, and materials engineering for specifying concrete compressive strength, tensile yield strength of metals, and rock fracture toughness."
  },
  aboutTargetUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "Named in honor of Blaise Pascal, the Pascal (symbol: Pa) is the coherent derived SI unit of pressure and mechanical stress, defined as one Newton applied perpendicularly per square meter ($1\\text{ N/m}^2$). It serves as the base standard in all fundamental equations of physics, fluid dynamics, and thermodynamics."
  },
  relationship: "The relationship between megapascals and Pascals is exact: 1 MPa = 1,000,000 Pa ($10^6$ Pa), and 1 Pa = 0.000001 MPa ($10^{-6}$ MPa). Converting between them involves scaling by a factor of one million with zero rounding error.",
  relationshipTitle: "Megapascal to Pascal Stress Scale Milestones",
  relationshipItems: [
    { label: "0.1 MPa", value: "100,000 Pa (1 bar / atmospheric baseline)" },
    { label: "1 MPa", value: "1,000,000 Pa (1 N/mm² / base megapascal)" },
    { label: "30 MPa", value: "30,000,000 Pa (Standard structural concrete grade)" },
    { label: "250 MPa", value: "250,000,000 Pa (Structural mild steel yield point)" },
    { label: "500 MPa", value: "500,000,000 Pa (High-strength rebar / alloy steel)" },
    { label: "1,000 MPa (1 GPa)", value: "1,000,000,000 Pa (Ultra-high strength titanium alloy)" }
  ],
  formula: {
    text: "Multiply the pressure or stress in megapascals by 1,000,000 to obtain the equivalent value in Pascals.",
    math: "\\text{Pa} = \\text{MPa} \\times 1{,}000{,}000 = \\text{MPa} \\times 10^6",
    subtext: "To convert Pascals back to megapascals, divide the Pascal value by 1,000,000 (or multiply by $10^{-6}$)."
  },
  formulaTitle: "Megapascal to Pascal Formula",
  practicalTip: {
    title: "The 6-Decimal Right Shift Rule",
    text: "Because multiplying by 1,000,000 is equivalent to moving the decimal point six places to the right, you can convert MPa to Pa instantly: 3.5 MPa becomes 3,500,000 Pa, and 0.25 MPa becomes 250,000 Pa."
  },
  expertNote: {
    title: "Dimensional Equivalence: 1 MPa = 1 N/mm²",
    text: "In structural design calculations, $1\\text{ MPa} = 1\\text{ N/mm}^2$ because $1\\text{ m}^2 = 1{,}000{,}000\\text{ mm}^2$. Working in $\\text{N/mm}^2$ allows engineers to directly calculate cross-sectional load capacities without unit conversion."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Structural Concrete Compressive Strength (28 MPa)",
        subtitle: "A standard foundation concrete mix has a 28-day characteristic compressive strength of 28 MPa. Convert this value to base Pascals.",
        steps: [
          "State starting compressive strength: 28 MPa.",
          "Apply conversion formula: Pa = 28 × 1,000,000.",
          "Calculate: 28 × 1,000,000 = 28,000,000.",
          "Result: 28 MPa equals exactly 28,000,000 Pa ($2.8 \\times 10^7\\text{ Pa}$)."
        ]
      },
      {
        title: "Example 2: Mild Steel Yield Strength (250 MPa)",
        subtitle: "Convert a standard A36 structural steel yield strength of 250 MPa to Pascals for an FEA simulation input deck.",
        steps: [
          "Identify yield stress: 250 MPa.",
          "Apply formula: Pa = 250 × 10^6.",
          "Calculate: 250 × 1,000,000 = 250,000,000.",
          "Result: 250 MPa equals 250,000,000 Pa ($2.5 \\times 10^8\\text{ Pa}$)."
        ]
      },
      {
        title: "Example 3: Heavy Hydraulic Cylinder Pressure (35 MPa)",
        subtitle: "An excavator hydraulic arm operates at an extreme peak relief pressure of 35 MPa. Convert to Pascals.",
        steps: [
          "State hydraulic pressure: 35 MPa.",
          "Apply conversion: Pa = 35 × 1,000,000.",
          "Calculate: 35 × 1,000,000 = 35,000,000.",
          "Result: 35 MPa corresponds to exactly 35,000,000 Pa (350 bar)."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Pascal Engineering Stress Table",
    headers: ["Megapascals (MPa)", "Pascals (Pa)", "Bar Equivalent", "Engineering / Materials Context"],
    rows: [
      { fromVal: "0.1 MPa", toVal: "100,000 Pa", extra: "1.0 bar", extra2: "Standard metric atmospheric pressure" },
      { fromVal: "1 MPa", toVal: "1,000,000 Pa", extra: "10.0 bar", extra2: "Base megapascal (1 N/mm²)" },
      { fromVal: "5 MPa", toVal: "5,000,000 Pa", extra: "50.0 bar", extra2: "Masonry brick compressive strength" },
      { fromVal: "20 MPa", toVal: "20,000,000 Pa", extra: "200.0 bar", extra2: "Residential residential slab concrete" },
      { fromVal: "35 MPa", toVal: "35,000,000 Pa", extra: "350.0 bar", extra2: "Commercial bridge deck high-strength concrete" },
      { fromVal: "50 MPa", toVal: "50,000,000 Pa", extra: "500.0 bar", extra2: "Heavy pre-stressed structural concrete" },
      { fromVal: "100 MPa", toVal: "100,000,000 Pa", extra: "1,000.0 bar", extra2: "Structural aluminum 6061-T6 yield threshold" },
      { fromVal: "250 MPa", toVal: "250,000,000 Pa", extra: "2,500.0 bar", extra2: "A36 / S235 structural steel yield strength" },
      { fromVal: "400 MPa", toVal: "400,000,000 Pa", extra: "4,000.0 bar", extra2: "High-yield reinforcing rebar (Grade 60)" },
      { fromVal: "1,000 MPa", toVal: "1,000,000,000 Pa", extra: "10,000.0 bar", extra2: "1 Gigapascal / Ultra-high strength maraging steel" }
    ]
  },
  applications: {
    title: "Key Engineering & Materials Applications",
    items: [
      {
        title: "Finite Element Analysis (FEA) Modeling",
        text: "Simulation solvers (such as ANSYS, Abaqus, and Nastran) formulate constitutive stiffness matrices in base SI units ($N$, $m$, $Pa$). Engineers convert material data from MPa to Pa when using base SI unit systems."
      },
      {
        title: "Civil Infrastructure & Concrete Design",
        text: "Structural engineers calculate maximum beam deflection and moment capacity by converting concrete cylinder compression test ratings from MPa into Pascals ($N/m^2$)."
      },
      {
        title: "Geotechnical Rock Mechanics & Mining",
        text: "Unconfined compressive strength (UCS) of deep subterranean granite and basalt formations is tested in MPa and converted to Pa for hydrostatic underground stress models."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000,000 instead of multiplying: Converting MPa to Pa increases the numerical magnitude by six orders.",
      "Confusing MPa ($10^6\\text{ Pa}$) with kPa ($10^3\\text{ Pa}$) or GPa ($10^9\\text{ Pa}$).",
      "Miscounting zeros in numerical solvers: 1 MPa is $1{,}000{,}000\\text{ Pa}$ ($1\\text{e}6\\text{ Pa}$), not $100{,}000\\text{ Pa}$."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in one megapascal?",
      answer: "There are exactly 1,000,000 Pascals in one megapascal (1 MPa = 10⁶ Pa)."
    },
    {
      question: "What is the formula to convert MPa to Pa?",
      answer: "The formula is: Pa = MPa × 1,000,000."
    },
    {
      question: "Is 1 MPa equal to 1 N/mm²?",
      answer: "Yes, exactly. Because 1 square meter contains 1,000,000 square millimeters, 1 MPa (1,000,000 N/m²) equals exactly 1 N/mm²."
    },
    {
      question: "What is 30 MPa in Pascals?",
      answer: "30 MPa equals exactly 30,000,000 Pascals (30 × 1,000,000 = 30,000,000 Pa)."
    },
    {
      question: "How do you convert Pascals back to megapascals?",
      answer: "Divide the Pascal value by 1,000,000 (or multiply by 0.000001). For example, 50,000,000 Pa ÷ 1,000,000 = 50 MPa."
    },
    {
      question: "What is 250 MPa in Pascals?",
      answer: "250 MPa equals 250,000,000 Pascals (the standard yield strength of structural steel)."
    },
    {
      question: "How many kilopascals are in 1 megapascal?",
      answer: "There are exactly 1,000 kilopascals in 1 megapascal (1 MPa = 1,000 kPa = 1,000,000 Pa)."
    },
    {
      question: "How many bar are in 1 megapascal?",
      answer: "There are exactly 10 bar in 1 megapascal (1 MPa = 10 bar = 1,000,000 Pa)."
    }
  ],
  relatedList: [
    { label: "Pascal to Megapascal", from: "pascal", to: "megapascal" },
    { label: "Megapascal to Kilopascal", from: "megapascal", to: "kilopascal" },
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" },
    { label: "Kilopascal to Pascal", from: "kilopascal", to: "pascal" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure).",
    "ASTM A36 / A36M: Standard Specification for Carbon Structural Steel.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
