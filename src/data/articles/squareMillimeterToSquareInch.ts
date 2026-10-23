import { CustomArticleData } from "./types";

export const squareMillimeterToSquareInch: CustomArticleData = {
  fromUnitId: "square-millimeter",
  toUnitId: "square-inch",
  seoTitle: "Square Millimeter to Square Inch Converter - mm² to sq in",
  metaDescription: "Convert square millimeters to square inches (mm² to sq in) with exact 645.16 decimal formulas, mechanical engineering examples, worked calculations, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-millimeter-to-square-inch",
  h1: "Square Millimeter to Square Inch Converter",
  introduction: [
    "In precision mechanical engineering, CNC machining, additive manufacturing, aerospace fastening, and hydraulic fluid power, engineers and machinists continuously bridge the metric and imperial measurement systems. While metric blueprints, microchip dies, laser beam spot profiles, and ISO metric fastener thread root areas are measured in square millimeters (mm²), American machine tooling, pneumatic valve orifices, SAE bolt tensile stress areas, and pressure ratings (pounds per square inch, or psi) are specified in square inches (sq in or in²).",
    "Because area expands quadratically relative to linear distance, converting square millimeters to square inches is governed by the international definition of the inch. Under the 1959 International Yard and Pound Agreement, one international inch is defined as exactly 25.4 millimeters. Squaring this dimension reveals that $(25.4\\text{ mm})^2 = 645.16\\text{ mm}^2$ inside one square inch. Because 25.4 is an exact definition, 645.16 is mathematically exact with zero rounding error. Converting square millimeters to square inches requires dividing the measured area by 645.16."
  ],
  quickAnswer: {
    text: "To convert square millimeters to square inches, divide the square millimeter value by 645.16 (or multiply by approximately 0.001550003). For example, 1,290.32 mm² equals exactly 2.0 square inches.",
    formulaDisplay: "Square Inches (sq in) = Square Millimeters (mm²) ÷ 645.16",
    subtext: "1 square inch equals exactly 645.16 square millimeters (1 mm² ≈ 0.001550003 sq in)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI-derived metric unit of planar area equal to the space enclosed within a square measuring one millimeter (0.001 m) on each side. Equal to 0.01 square centimeters or 10⁻⁶ square meters, it is the worldwide engineering standard for defining electrical conductor cross-sections, tensile test specimens, hydraulic orifice ports, and additive manufacturing layer slices."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Inch (sq in / in²)",
    text: "The square inch (symbol: sq in or in²) is an imperial and US customary unit of planar area equal to the space bounded by a square measuring one international inch (25.4 mm) on each side. Equal to 1/144 of a square foot or 6.4516 square centimeters (0.00064516 m²), the square inch is the primary engineering unit in North America for fluid pressure calculations (psi = lbf/in²), hydraulic cylinder piston areas, and mechanical structural stress analysis."
  },
  relationship: "The mathematical relationship between square millimeters and square inches is an exact international constant: 1 in = 25.4 mm. Squaring both sides yields $(1\\text{ in})^2 = (25.4\\text{ mm})^2 = 645.16\\text{ mm}^2$. Inverting this relationship shows that 1 square millimeter equals approximately $0.0015500031$ square inches ($1/645.16\\text{ in}^2$).",
  relationshipTitle: "Exact Geometric Constant: mm² to sq in",
  relationshipItems: [
    { label: "1 Square Inch (sq in)", value: "Exactly 645.16 mm²" },
    { label: "0.5 Square Inch", value: "Exactly 322.58 mm²" },
    { label: "0.25 Square Inch", value: "Exactly 161.29 mm²" },
    { label: "0.1 Square Inch", value: "Exactly 64.516 mm²" },
    { label: "1 Square Millimeter (mm²)", value: "≈ 0.001550003 Square Inch" }
  ],
  formula: {
    text: "To convert area from square millimeters to square inches, divide the square millimeter value by 645.16, or multiply by 0.0015500031.",
    math: "\\text{Area (sq in)} = \\frac{\\text{Area (mm}^2\\text{)}}{645.16} = \\text{Area (mm}^2\\text{)} \\times 0.0015500031",
    subtext: "To convert square inches back to square millimeters: Area (mm²) = Area (sq in) × 645.16"
  },
  formulaTitle: "Square Millimeter to Square Inch Conversion Formula",
  practicalTip: {
    title: "The 645 Rule for Quick CNC Workshop Estimates",
    text: "For rapid mental calculations at a machine shop bench, divide square millimeters by 645. For example, 3,225 mm² divided by 645 gives approximately 5.0 square inches (exact is 4.9988 sq in). When coding CNC paths or calculating hydraulic piston forces, always use the exact decimal value 645.16."
  },
  examples: {
    title: "Step-by-Step Mechanical & Hydraulic Calculation Examples",
    items: [
      {
        title: "Example 1: Hydraulic Actuator Piston Bore Area",
        subtitle: "A metric hydraulic cylinder has a bore cross-sectional area of 5,026.55 square millimeters (corresponding to an 80 mm diameter piston). Express this bore area in square inches to calculate cylinder force in pounds (lbf) under 3,000 psi hydraulic pressure.",
        steps: [
          "State the cross-sectional area: 5,026.55 mm².",
          "Apply the conversion formula: sq in = mm² ÷ 645.16.",
          "Calculate: 5,026.55 ÷ 645.16 ≈ 7.79117 sq in.",
          "Conclusion: The hydraulic piston area equals approximately 7.791 square inches."
        ]
      },
      {
        title: "Example 2: High-Strength Metric Fastener Tensile Area",
        subtitle: "An ISO Property Class 10.9 M16 structural bolt has a nominal thread tensile stress area of 157 square millimeters. Convert this tensile stress area into square inches for SAE fastener comparison.",
        steps: [
          "State value: 157 mm².",
          "Multiply by 0.0015500031: 157 × 0.0015500031 ≈ 0.24335 sq in.",
          "Conclusion: The M16 bolt tensile stress area equals approximately 0.243 square inches."
        ]
      },
      {
        title: "Example 3: Microfluidic Flow Channel Nozzle Aperture",
        subtitle: "A fluid dispensing needle features a precision laser-cut orifice with a cross-sectional area of 32.258 square millimeters. Find its area in square inches.",
        steps: [
          "State value: 32.258 mm².",
          "Divide by 645.16: 32.258 ÷ 645.16 = 0.05 sq in.",
          "Conclusion: The dispensing orifice measures exactly 0.05 square inches."
        ]
      }
    ]
  },
  table: {
    title: "Square Millimeter to Square Inch Reference Table",
    headers: ["Square Millimeters (mm²)", "Square Inches (sq in)", "Square Centimeters (cm²)", "Square Feet (sq ft)"],
    rows: [
      { fromVal: "10 mm²", toVal: "0.0155 sq in", extra: "0.10 cm²", extra2: "0.000108 sq ft" },
      { fromVal: "50 mm²", toVal: "0.0775 sq in", extra: "0.50 cm²", extra2: "0.000538 sq ft" },
      { fromVal: "100 mm²", toVal: "0.1550 sq in", extra: "1.00 cm²", extra2: "0.001076 sq ft" },
      { fromVal: "250 mm²", toVal: "0.3875 sq in", extra: "2.50 cm²", extra2: "0.002691 sq ft" },
      { fromVal: "500 mm²", toVal: "0.7750 sq in", extra: "5.00 cm²", extra2: "0.005382 sq ft" },
      { fromVal: "645.16 mm²", toVal: "1.0000 sq in", extra: "6.45 cm²", extra2: "0.006944 sq ft" },
      { fromVal: "1,000 mm²", toVal: "1.5500 sq in", extra: "10.00 cm²", extra2: "0.010764 sq ft" },
      { fromVal: "2,500 mm²", toVal: "3.8750 sq in", extra: "25.00 cm²", extra2: "0.026910 sq ft" },
      { fromVal: "5,000 mm²", toVal: "7.7500 sq in", extra: "50.00 cm²", extra2: "0.053820 sq ft" },
      { fromVal: "10,000 mm²", toVal: "15.5000 sq in", extra: "100.00 cm²", extra2: "0.107639 sq ft" }
    ]
  },
  expertNote: {
    title: "Pressure Metrology: The Direct Link Between MPa and PSI",
    text: "Mechanical engineers frequently convert between megapascals (MPa) and pounds per square inch (psi). One megapascal is 1 newton per square millimeter ($1\\text{ N/mm}^2$). Because $1\\text{ lbf} \\approx 4.44822\\text{ N}$ and $1\\text{ in}^2 = 645.16\\text{ mm}^2$, dividing 645.16 by 4.44822 yields approximately 145.038. Thus, $1\\text{ N/mm}^2 = 1\\text{ MPa} \\approx 145.038\\text{ psi}$. Understanding that $645.16\\text{ mm}^2$ equals $1\\text{ in}^2$ is the foundation for all structural stress and hydraulic conversions between SI and imperial units."
  },
  applications: {
    title: "Hydraulics, Aerospace, and Mechanical Machining Applications",
    items: [
      {
        title: "Fluid Power Hydraulic Cylinder Sizing",
        text: "Hydraulic systems engineers convert piston areas from metric CAD bore specifications in mm² into square inches to calculate total thrust force (Force = Pressure × Area) in pounds-force."
      },
      {
        title: "Fastener Tensile & Shear Stress Verification",
        text: "Structural aerospace engineers convert fastener root shank shear areas in mm² into square inches to verify bolt allowable shear capacities under AISC and ASME specifications."
      },
      {
        title: "Pneumatic Valve Orifice & Flow Coefficient (Cv)",
        text: "Automation engineers calculate valve seat port discharge areas in mm² before converting to square inches to model airflow coefficients and pneumatic cylinder stroke transit times."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 25.4 instead of 645.16: 25.4 is the linear millimeter per inch factor. Planar area requires squaring: $(25.4)^2 = 645.16$. Dividing by 25.4 yields a result that is 25.4 times too large.",
      "Confusing square inches with square centimeters: 1 square inch equals 6.4516 cm², not 6.4516 mm². Remember that $1\\text{ cm}^2 = 100\\text{ mm}^2$, so $6.4516 \\times 100 = 645.16\\text{ mm}^2$.",
      "Using truncated multipliers like 0.00155: Multiplying by 0.00155 introduces cumulative rounding errors of over 0.0002% on large surfaces. Use $1 / 645.16$ or $0.0015500031$ for high precision.",
      "Conflating circular mils with square millimeters: Circular mils are calculated from $(d_{\\text{mils}})^2$, whereas square inches are calculated from $w \\times h$. One square inch equals $1,273,239.5$ circular mils."
    ]
  },
  faqs: [
    {
      question: "How do I convert square millimeters to square inches?",
      answer: "To convert square millimeters (mm²) to square inches (sq in), divide the square millimeter value by 645.16, or multiply by 0.0015500031. For example, 1,290.32 mm² divided by 645.16 equals exactly 2.0 square inches."
    },
    {
      question: "How many square millimeters are in one square inch?",
      answer: "There are exactly 645.16 square millimeters in one international square inch. This is derived from squaring the exact linear definition of an inch: (25.4 mm)² = 645.16 mm²."
    },
    {
      question: "What is 100 square millimeters in square inches?",
      answer: "100 square millimeters equals approximately 0.1550 square inches (about 5/32 of a square inch)."
    },
    {
      question: "What is 645.16 mm² in sq in?",
      answer: "645.16 square millimeters equals exactly 1.0 square inch."
    },
    {
      question: "Why is the conversion factor 645.16 exact?",
      answer: "By international metrological treaty since 1959, 1 inch is defined as exactly 25.4 millimeters. Because 25.4 is exact, squaring it yields 25.4 × 25.4 = 645.16 with zero rounding or truncation."
    },
    {
      question: "How do I convert square inches back to square millimeters?",
      answer: "To convert square inches back to square millimeters, multiply the square inch value by 645.16. For example, 3.5 sq in multiplied by 645.16 equals 2,258.06 mm²."
    },
    {
      question: "What is 1,000 mm² in square inches?",
      answer: "1,000 square millimeters equals approximately 1.5500 square inches."
    },
    {
      question: "What is the relationship between N/mm² and psi?",
      answer: "One newton per square millimeter (1 N/mm² = 1 MPa) equals approximately 145.038 pounds per square inch (psi). This relationship stems directly from 645.16 mm² per square inch divided by 4.44822 N per pound-force."
    },
    {
      question: "How many square millimeters are in 0.5 square inches?",
      answer: "0.5 square inches equals exactly 322.58 square millimeters."
    },
    {
      question: "Can I convert mm² to sq in using square centimeters?",
      answer: "Yes. First divide mm² by 100 to get square centimeters (cm²), then divide that result by 6.4516 to obtain square inches."
    }
  ],
  relatedList: [
    { label: "Square Inch to Square Millimeter", from: "square-inch", to: "square-millimeter" },
    { label: "Square Millimeter to Square Centimeter", from: "square-millimeter", to: "square-centimeter" },
    { label: "Square Millimeter to Square Foot", from: "square-millimeter", to: "square-foot" },
    { label: "Square Millimeter to Square Meter", from: "square-millimeter", to: "square-meter" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Refinement of Values for the Yard and the Pound</em>, 1959.",
    "International Organization for Standardization (ISO). <em>ISO 80000-3: Space and Time</em>.",
    "American Society of Mechanical Engineers (ASME). <em>ASME B1.1 Unified Inch Screw Threads Standards</em>."
  ]
};
