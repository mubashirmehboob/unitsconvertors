import { CustomArticleData } from "./types";

export const squareCentimeterToSquareInch: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-inch",
  seoTitle: "Square Centimeter to Square Inch Converter - cm² to in²",
  metaDescription: "Convert square centimeters to square inches (cm² to in²) accurately. Learn the 6.4516 division formula, screen size and PCB area calculations, examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-inch",
  h1: "Square Centimeter to Square Inch Converter",
  introduction: [
    "In electronic hardware engineering, mechanical component design, consumer display manufacturing, and additive 3D printing, surface measurements frequently transition between square centimeters (cm²) and square inches (in²). While global electronics datasheets, polymer resin specifications, and laboratory test coupons are documented in square centimeters, consumer product displays, hydraulic piston bore ratings, and manufacturing tooling in North America are specified in square inches.",
    "Because area is a two-dimensional geometric quantity, converting square centimeters to square inches requires squaring the exact international inch definition. Established by international treaty in 1959, 1 inch equals exactly 2.54 centimeters. Squaring this value establishes that one square inch contains exactly 6.4516 square centimeters. Consequently, one square centimeter equals approximately 0.1550003 square inches."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square inches, divide the square centimeter value by 6.4516 (or multiply by approximately 0.155). For example, 100 cm² equals approximately 15.5 square inches.",
    formulaDisplay: "Square Inches (in²) = Square Centimeters (cm²) ÷ 6.4516",
    subtext: "1 square inch is equal to exactly 6.4516 square centimeters (1 cm² ≈ 0.155 in²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the surface of a square with sides of one centimeter ($10^{-2}\\text{ m}$). Equal to 0.0001 square meters or 100 square millimeters, it is the primary international unit for measuring printed circuit board surface areas, smartphone display panels, skin contact patches, and packaging labels."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Inch (in²)",
    text: "The square inch (symbol: in² or sq in) is an imperial and US customary unit of area representing the space enclosed by a square with sides of one inch (2.54 centimeters). Equal to 1/144 of a square foot or exactly 6.4516 square centimeters, it is the standard unit for pressure calculations (pounds per square inch, PSI), small mechanical gaskets, engine cylinder piston heads, and 3D printer build beds."
  },
  relationship: "The relationship between square centimeters and square inches is derived from the legal definition of the international inch: 1 in = 2.54 cm. Squaring both sides yields $(1\\text{ in})^2 = (2.54\\text{ cm})^2 = 6.4516\\text{ cm}^2$. Inverting this relationship reveals that 1 square centimeter equals exactly $1 / 6.4516 \\approx 0.15500031$ square inches.",
  relationshipTitle: "Exact Mathematical Area Relationship",
  relationshipItems: [
    { label: "1 Square Inch (in²)", value: "Exactly 6.4516 Square Centimeters (cm²)" },
    { label: "1 Square Centimeter (cm²)", value: "≈ 0.15500031 Square Inches (in²)" },
    { label: "100 Square Centimeters (cm²)", value: "≈ 15.5000 Square Inches (in²)" },
    { label: "1 Square Foot (ft²)", value: "929.0304 cm² (144 in²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square inches, divide the square centimeter value by 6.4516 (or multiply by 0.15500031).",
    math: "\\text{Area (in}^2\\text{)} = \\frac{\\text{Area (cm}^2\\text{)}}{6.4516} = \\text{Area (cm}^2\\text{)} \\times 0.15500031",
    subtext: "To convert square inches back to square centimeters: Area (cm²) = Area (in²) × 6.4516"
  },
  formulaTitle: "Square Centimeter to Square Inch Conversion Formula",
  practicalTip: {
    title: "The 15.5% Mental Shortcut",
    text: "Because 1 cm² is approximately 0.155 in², you can estimate square inches mentally by dividing by 6.45 or taking about 15.5% of the cm² value. For example, 200 cm² is roughly 200 × 0.155 = 31.0 in² (exact: 31.0001 in²)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Smartphone Display Active Viewable Area",
        subtitle: "A 6.7-inch smartphone has an active screen measuring 7.1 cm wide by 15.5 cm tall, covering 110.05 cm². Express this display area in square inches.",
        steps: [
          "State active area: 110.05 cm².",
          "Apply conversion formula: in² = cm² ÷ 6.4516.",
          "Calculate: 110.05 ÷ 6.4516 ≈ 17.0578.",
          "Conclusion: The smartphone screen offers approximately 17.06 square inches of active display surface."
        ]
      },
      {
        title: "Example 2: Multilayer Printed Circuit Board (PCB) Footprint",
        subtitle: "A computer graphics card PCB measures 11 cm by 24 cm, yielding a substrate area of 264 cm². What is the board area in square inches?",
        steps: [
          "Given: 264 cm².",
          "Multiply by 0.15500031: 264 × 0.15500031 ≈ 40.9201.",
          "Conclusion: The graphics card substrate measures approximately 40.92 square inches."
        ]
      },
      {
        title: "Example 3: Automotive Disc Brake Pad Contact Surface",
        subtitle: "A high-performance ceramic brake pad friction lining has a surface area of 75 cm². Determine the contact area in square inches.",
        steps: [
          "Identify value: 75 cm².",
          "Calculate: 75 ÷ 6.4516 ≈ 11.6250.",
          "Conclusion: The brake pad contact area is approximately 11.63 square inches."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Inch Quick Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Inches (in²)", "Square Millimeters (mm²)", "Square Feet (ft²)"],
    rows: [
      { fromVal: "1 cm²", toVal: "0.1550 in²", extra: "100 mm²", extra2: "0.00108 ft²" },
      { fromVal: "5 cm²", toVal: "0.7750 in²", extra: "500 mm²", extra2: "0.00538 ft²" },
      { fromVal: "6.4516 cm²", toVal: "1.0000 in²", extra: "645.16 mm²", extra2: "0.00694 ft²" },
      { fromVal: "10 cm²", toVal: "1.5500 in²", extra: "1,000 mm²", extra2: "0.01076 ft²" },
      { fromVal: "25 cm²", toVal: "3.8750 in²", extra: "2,500 mm²", extra2: "0.02691 ft²" },
      { fromVal: "50 cm²", toVal: "7.7500 in²", extra: "5,000 mm²", extra2: "0.05382 ft²" },
      { fromVal: "100 cm²", toVal: "15.5000 in²", extra: "10,000 mm²", extra2: "0.10764 ft²" },
      { fromVal: "250 cm²", toVal: "38.7501 in²", extra: "25,000 mm²", extra2: "0.26910 ft²" },
      { fromVal: "500 cm²", toVal: "77.5002 in²", extra: "50,000 mm²", extra2: "0.53820 ft²" },
      { fromVal: "1,000 cm²", toVal: "155.0003 in²", extra: "100,000 mm²", extra2: "1.07639 ft²" }
    ]
  },
  expertNote: {
    title: "Hydraulic Power Mechanics: Computing Cylinder Force (Pounds vs. Newtons)",
    text: "In hydraulic actuator engineering, cylinder output force depends directly on piston surface area ($F = P \\times A$). When hydraulic fluid pressure is supplied in pounds per square inch (PSI) while an imported actuator's piston diameter is measured in centimeters (e.g., a 10 cm diameter piston gives $A = \\pi \\times 5^2 \\approx 78.54\\text{ cm}^2$), engineers must divide by 6.4516 to obtain $12.17\\text{ in}^2$. Multiplying 2,000 PSI by $12.17\\text{ in}^2$ yields 24,340 pounds-force (lbf). Forgetting to convert cm² to in² leads to completely mismatched hydraulic system forces."
  },
  applications: {
    title: "Practical Electronics, Hydraulics & 3D Printing Scenarios",
    items: [
      {
        title: "Consumer Electronics Displays and Tablets",
        text: "Product marketing teams and optical engineers translate display panel viewable areas measured in square centimeters to square inches to help consumers compare screen real estate across different aspect ratios."
      },
      {
        title: "Hydraulic and Pneumatic Cylinder Actuator Sizing",
        text: "Fluid power engineers convert metric piston bore areas (cm²) into square inches to calculate clamping force in pounds-force from industrial hydraulic pump pressures calibrated in PSI."
      },
      {
        title: "Desktop 3D Printer Build Bed Sizing",
        text: "Makers and additive manufacturing technicians convert heated build plate dimensions (e.g., 22 cm × 22 cm = 484 cm² = 75.02 in²) into square inches to evaluate model print limits against imperial design specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 2.54 instead of 6.4516: 2.54 is the linear inch-to-centimeter factor. Area requires $(2.54)^2 = 6.4516$. Dividing by 2.54 gives a number more than 2.5 times too large.",
      "Multiplying instead of dividing: Converting from a small unit (cm²) to a larger unit (in²) must always produce a smaller numerical value.",
      "Confusing diagonal screen size with screen area: A 6-inch phone screen has a diagonal of 6 inches, but its surface area is around 14 to 16 square inches depending on the aspect ratio (19.5:9 vs 16:9).",
      "Approximating as 0.15 instead of 0.155: Truncating to 0.15 introduces a 3.2% calculation error in engineering component batches."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square inches?",
      answer: "To convert square centimeters (cm²) to square inches (in²), divide the square centimeter value by 6.4516, or multiply by approximately 0.155. For example, 50 cm² divided by 6.4516 equals approximately 7.75 square inches."
    },
    {
      question: "How many square centimeters are in 1 square inch?",
      answer: "There are exactly 6.4516 square centimeters in 1 square inch (2.54 cm × 2.54 cm)."
    },
    {
      question: "What is 100 cm² in square inches?",
      answer: "100 square centimeters equals approximately 15.50 square inches (100 ÷ 6.4516 ≈ 15.50003 in²)."
    },
    {
      question: "What is 10 cm² in square inches?",
      answer: "10 square centimeters equals approximately 1.55 square inches (10 ÷ 6.4516 ≈ 1.5500 in²)."
    },
    {
      question: "How do I convert square inches back to square centimeters?",
      answer: "To convert square inches back to square centimeters, multiply the square inch value by 6.4516. For instance, 10 in² × 6.4516 = 64.516 cm²."
    },
    {
      question: "What is 1 cm² in square inches?",
      answer: "1 square centimeter equals approximately 0.15500031 square inches."
    },
    {
      question: "Why is 1 square inch equal to 6.4516 cm²?",
      answer: "Because 1 inch is legally defined as exactly 2.54 centimeters. A square with sides of 1 inch has an area of 2.54 cm × 2.54 cm = 6.4516 square centimeters."
    },
    {
      question: "How many square inches are in a square foot?",
      answer: "There are exactly 144 square inches in a square foot (12 inches × 12 inches)."
    },
    {
      question: "What is 500 cm² in square inches?",
      answer: "500 square centimeters equals approximately 77.50 square inches (500 ÷ 6.4516 ≈ 77.5002 in²)."
    }
  ],
  relatedList: [
    { label: "Square Inch to Square Centimeter", from: "square-inch", to: "square-centimeter" },
    { label: "Square Centimeter to Square Foot", from: "square-centimeter", to: "square-foot" },
    { label: "Square Centimeter to Square Millimeter", from: "square-centimeter", to: "square-millimeter" },
    { label: "Square Inch to Square Millimeter", from: "square-inch", to: "square-millimeter" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>, Special Publication 811.",
    "IPC-2221B. <em>Generic Standard on Printed Board Design</em>.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
