import { CustomArticleData } from "./types";

export const spatToSquareRadianArticle: CustomArticleData = {
  fromUnitId: "spat",
  toUnitId: "square-radian",
  seoTitle: "Spat to Square Radian Converter (sp to rad²) - UnitsConvertors",
  metaDescription: "Convert spats to square radians (sp to rad²) accurately. Learn the solid angle formula (rad² = sp × 4π), calculation steps, conversion tables, and FAQs.",
  h1: "Spat to Square Radian Converter",
  introduction: [
    "Converting spats (sp) to square radians (rad²) expresses whole-sphere solid angles in square radian units commonly used in mathematical physics and spherical calculus.",
    "A full sphere encompasses a solid angle of 1 spat, which equals exactly 4π steradians. Because 1 steradian is dimensionally equivalent to 1 square radian (1 sr = 1 rad²), 1 complete spat equals exactly 4π square radians (approximately 12.5663706 rad²).",
    "This reference explains the mathematical definition of square radians, provides worked conversion examples, includes a numerical reference table, and answers common questions regarding solid-angle geometry."
  ],
  quickAnswer: {
    text: "To convert spats (sp) to square radians (rad²), multiply the spat value by 4π (approximately 12.566371). For example, 1 spat equals approximately 12.56637 rad² (1 × 4π = 12.56637 rad²).",
    formulaDisplay: "Square Radians (rad²) = Spats (sp) × 4π",
    subtext: "1 sp = 4π rad² ≈ 12.566370614 rad² (1 rad² ≈ 0.07957747 sp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. It represents the total 3D spherical space surrounding a central origin."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) expresses solid angle directly in terms of radians squared. Because a steradian is defined as the solid angle that subtends an area equal to r² on a sphere of radius r, 1 steradian is dimensionally identical to 1 square radian."
  },
  relationship: "One spat equals exactly 4π square radians (≈ 12.566370614 rad²). A hemisphere (0.5 sp) equals exactly 2π square radians (≈ 6.2831853 rad²).",
  relationshipTitle: "Spat to Square Radian Scaling",
  relationshipItems: [
    { label: "0.25 sp (1/4 Sphere)", value: "= π rad² (≈ 3.14159 rad²)" },
    { label: "0.50 sp (Hemisphere)", value: "= 2π rad² (≈ 6.28319 rad²)" },
    { label: "0.75 sp (3/4 Sphere)", value: "= 3π rad² (≈ 9.42478 rad²)" },
    { label: "1.00 sp (Full Sphere)", value: "= 4π rad² (≈ 12.56637 rad²)" }
  ],
  formula: {
    text: "Multiply the solid angle in spats by 4π (approximately 12.566370614) to determine square radians.",
    math: "\\text{rad}^2 = \\text{sp} \\times 4\\pi \\approx \\text{sp} \\times 12.566370614",
    subtext: "Where 1 rad² = 1 sr."
  },
  practicalTip: {
    title: "Spherical Surface Area Connection",
    text: "On a unit sphere of radius r = 1, the total surface area is 4π. Because solid angle equals surface area divided by radius squared, the total solid angle of the sphere is 4π square radians (1 spat)."
  },
  expertNote: {
    title: "Dimensional Equivalence",
    text: "In SI derived unit definitions, the steradian (sr) is a special name for m² / m², which can also be written as rad². While steradian is the standard SI term, square radian is often used in mathematical physics when emphasizing angular calculus."
  },
  examples: {
    title: "Step-by-Step Spat to Square Radian Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Spat to Square Radians",
        subtitle: "Express 1 complete spherical spat in square radians.",
        steps: [
          "Identify solid angle: 1.0 sp.",
          "Apply conversion formula: rad² = 1.0 × 4π.",
          "Calculate: 1.0 × 12.566370614 ≈ 12.56637 rad².",
          "Result: 1 spat equals exactly 4π square radians (approximately 12.56637 rad²)."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (0.5 sp)",
        subtitle: "Convert the visible sky hemisphere (0.5 sp) to square radians.",
        steps: [
          "Identify solid angle: 0.5 sp.",
          "Apply conversion formula: rad² = 0.5 × 4π.",
          "Calculate: 0.5 × 4π = 2π ≈ 6.2831853 rad².",
          "Result: 0.5 spat equals exactly 2π square radians (approximately 6.28319 rad²)."
        ]
      },
      {
        title: "Example 3: Fractional Sector (0.15 sp)",
        subtitle: "Convert 0.15 spat (15% of a sphere) into square radians.",
        steps: [
          "Identify solid angle: 0.15 sp.",
          "Apply conversion formula: rad² = 0.15 × 4π.",
          "Calculate: 0.15 × 12.566370614 ≈ 1.884956 rad².",
          "Result: 0.15 spat equals approximately 1.88496 square radians (0.6π rad²)."
        ]
      }
    ]
  },
  table: {
    title: "Spat to Square Radian Conversion Reference Table",
    headers: ["Spats (sp)", "Square Radians (rad²)", "Exact Value (rad²)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.01 sp", toVal: "0.125664 rad²", extra: "π / 25 rad²", extra2: "1% of sphere" },
      { fromVal: "0.05 sp", toVal: "0.628319 rad²", extra: "π / 5 rad²", extra2: "5% of sphere" },
      { fromVal: "0.10 sp", toVal: "1.256637 rad²", extra: "2π / 5 rad²", extra2: "10% of sphere" },
      { fromVal: "0.25 sp", toVal: "3.141593 rad²", extra: "π rad²", extra2: "One quadrant (25%)" },
      { fromVal: "0.50 sp", toVal: "6.283185 rad²", extra: "2π rad²", extra2: "Hemisphere (50%)" },
      { fromVal: "0.75 sp", toVal: "9.424778 rad²", extra: "3π rad²", extra2: "Three-quarters of sphere (75%)" },
      { fromVal: "1.00 sp", toVal: "12.566371 rad²", extra: "4π rad²", extra2: "Full sphere (100%)" }
    ]
  },
  applications: {
    title: "Applications of Spat to Square Radian Conversion",
    items: [
      {
        title: "Mathematical Physics & Calculus",
        text: "Using square radian notation when evaluating surface integrals over spherical domains."
      },
      {
        title: "Radiometry & Optics",
        text: "Expressing total spherical flux integrations in terms of radiant intensity over solid angles."
      },
      {
        title: "Solid-Angle Unit Conversion",
        text: "Converting whole-sphere quantities into radian-based solid-angle expressions."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Spat to Square Radian Conversion",
    items: [
      "Dividing by 4π instead of multiplying: To convert spats to square radians, multiply by 4π. Division by 4π is used for the reverse conversion from square radians to spats.",
      "Confusing radian with square radian: The radian (rad) is a 1D plane angle unit, whereas the square radian (rad²) is a 2D solid angle unit.",
      "Assuming square radians differ in magnitude from steradians: 1 square radian is mathematically identical to 1 steradian (1 rad² = 1 sr)."
    ]
  },
  faqs: [
    {
      question: "How many square radians are in 1 spat?",
      answer: "There are exactly 4π square radians in 1 spat, which equals approximately 12.566370614 square radians."
    },
    {
      question: "What is the formula to convert spats to square radians?",
      answer: "The formula is: rad² = sp × 4π ≈ sp × 12.566370614."
    },
    {
      question: "How many square radians is 0.5 spat?",
      answer: "0.5 spat equals 2π square radians, which is approximately 6.2831853 square radians (representing a hemisphere)."
    },
    {
      question: "Is 1 square radian equal to 1 steradian?",
      answer: "Yes. 1 square radian (1 rad²) is identical in dimension and magnitude to 1 steradian (1 sr)."
    },
    {
      question: "Why does 1 spat equal 4π rad²?",
      answer: "Because the surface area of a unit sphere (r = 1) is 4π. Solid angle equals area divided by radius squared, giving a total of 4π square radians."
    },
    {
      question: "How do I convert square radians back to spats?",
      answer: "To convert square radians to spats, divide by 4π (sp = rad² ÷ 4π)."
    },
    {
      question: "How many square radians is 0.25 spat?",
      answer: "0.25 spat equals exactly π square radians (approximately 3.14159265 rad²)."
    },
    {
      question: "Why is square radian used alongside steradian?",
      answer: "Steradian is the official SI name for solid angle, while square radian is often used in mathematical derivations to explicitly show angular dimensions."
    }
  ],
  relatedList: [
    { label: "Spat to Steradian", from: "spat", to: "steradian" },
    { label: "Spat to Square Degree", from: "spat", to: "square-degree" },
    { label: "Steradian to Square Radian", from: "steradian", to: "square-radian" },
    { label: "Square Radian to Spat", from: "square-radian", to: "spat" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian as a dimensionless derived unit (m²/m²)",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
