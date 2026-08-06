import { CustomArticleData } from "./types";

export const degreeToRadian: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "radian",
  seoTitle: "Degree to Radian Conversion (° to rad) | UnitsConvertors.com",
  metaDescription: "Convert degrees to radians accurately using the exact formula (rad = ° × π / 180). Includes step-by-step calculations, unit circle values, worked examples, and FAQs.",
  h1: "Degree to Radian Conversion",
  introduction: [
    "The sexagesimal degree (°) and the SI derived radian (rad) represent the two most important angular measurement standards in mathematics, physics, and engineering. While degrees divide a full rotational circle into 360 equal parts for historical and practical convenience, radians measure angles directly through arc length along a unit circle.",
    "Because one full revolution equals 360 degrees or $2\\pi$ radians, converting from degrees to radians involves multiplying the angle in degrees by $\\pi / 180$ (approximately $0.01745329252$). This fundamental constant scales arbitrary circle subdivisions into pure dimensionless ratios suitable for calculus, trigonometric derivatives, and physics equations.",
    "Understanding the relationship between degrees and radians is essential for engineers, software developers, land surveyors, and physics students working with wave mechanics, rotational dynamics, or computer graphics transformations."
  ],
  quickAnswer: {
    text: "To convert degrees to radians, multiply the degree value by π (approximately 3.14159) and divide by 180. Alternatively, multiply degrees by 0.01745329252. For example, 90° equals π / 2 radians, or approximately 1.570796 radians.",
    formulaDisplay: "Radians (rad) = Degrees (°) × (π / 180) ≈ Degrees × 0.01745329",
    subtext: "1 Degree = 0.01745329252 Radian | 180 Degrees = π Radians (~3.14159 rad)"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of plane angle measurement defining 1/360th of a full circle. Originating from ancient Babylonian astronomy, the degree divides rotations into 60 arcminutes and 3600 arcseconds, widely used in geometry, navigation, and geography."
  },
  aboutTargetUnit: {
    title: "What is a Radian (rad)?",
    text: "The radian (symbol: rad) is the standard SI unit for measuring plane angles. One radian is defined as the central angle subtended by an arc whose length equals the radius of the circle. A complete circle equals 2π radians (approximately 6.283185 rad)."
  },
  relationship: "A full circular turn equals 360 degrees or 2π radians. Dividing both quantities by 180 establishes the fundamental identity: 180° = π rad. Therefore, 1 degree equals exactly π / 180 radians (~0.01745329 rad).",
  relationshipTitle: "Key Unit Circle Exact Angle Equivalents",
  relationshipItems: [
    { label: "30° Angle", value: "π / 6 rad ≈ 0.523599 rad" },
    { label: "45° Angle", value: "π / 4 rad ≈ 0.785398 rad" },
    { label: "60° Angle", value: "π / 3 rad ≈ 1.047198 rad" },
    { label: "90° Right Angle", value: "π / 2 rad ≈ 1.570796 rad" },
    { label: "180° Straight Angle", value: "π rad ≈ 3.141593 rad" },
    { label: "360° Full Turn", value: "2π rad ≈ 6.283185 rad" }
  ],
  formula: {
    text: "Multiply the angle in degrees by π and divide the result by 180.",
    math: "Angle (rad) = Angle (°) × \\frac{\\pi}{180}",
    subtext: "For decimal approximation, multiply degrees by 0.01745329252."
  },
  formulaTitle: "Degree to Radian Mathematical Formula",
  practicalTip: {
    title: "Programming Language Trigonometry Tip",
    text: "Most standard programming libraries (such as JavaScript Math.sin, Python math.sin, or C++ std::sin) require angle inputs in radians. Always convert input degrees using rad = deg * (Math.PI / 180) before passing them to trigonometric functions."
  },
  expertNote: {
    title: "Dimensionless Property of Radians",
    text: "Because a radian is defined as arc length divided by radius (m/m), it is a dimensionless ratio. In dimensional analysis, radians simplify physics equations like angular velocity (ω = dθ/dt in rad/s) without extra scaling factors."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 45 Degrees to Radians",
        subtitle: "Find the exact and decimal radian equivalent of a standard 45° diagonal angle.",
        steps: [
          "Identify degree value: 45°.",
          "Apply formula: rad = 45 × (π / 180).",
          "Simplify fraction: 45 / 180 = 1 / 4.",
          "Exact fraction: π / 4 radians.",
          "Decimal calculation: 45 × 0.01745329252 = 0.785398 rad."
        ]
      },
      {
        title: "Example 2: Convert 120 Degrees to Radians",
        subtitle: "Calculate radians for an obtuse angle of 120°.",
        steps: [
          "Identify degree value: 120°.",
          "Apply formula: rad = 120 × (π / 180).",
          "Simplify fraction: 120 / 180 = 2 / 3.",
          "Exact fraction: 2π / 3 radians.",
          "Decimal calculation: 120 × 0.01745329252 = 2.094395 rad."
        ]
      },
      {
        title: "Example 3: Convert 270 Degrees to Radians",
        subtitle: "Determine radians for a three-quarter revolution angle.",
        steps: [
          "Identify degree value: 270°.",
          "Apply formula: rad = 270 × (π / 180).",
          "Simplify fraction: 270 / 180 = 3 / 2.",
          "Exact fraction: 3π / 2 radians.",
          "Decimal calculation: 270 × 0.01745329252 = 4.712389 rad."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Radian Conversion Reference Matrix",
    headers: ["Degrees (°)", "Exact Fraction (rad)", "Decimal Radians (rad)", "Geometric / Practical Description"],
    rows: [
      { fromVal: "1°", toVal: "π / 180", extra: "0.017453 rad", extra2: "Single degree unit offset" },
      { fromVal: "15°", toVal: "π / 12", extra: "0.261799 rad", extra2: "Earth rotation per hour (longitude)" },
      { fromVal: "30°", toVal: "π / 6", extra: "0.523599 rad", extra2: "First standard unit circle angle" },
      { fromVal: "45°", toVal: "π / 4", extra: "0.785398 rad", extra2: "Isosceles right triangle acute angle" },
      { fromVal: "60°", toVal: "π / 3", extra: "1.047198 rad", extra2: "Equilateral triangle interior angle" },
      { fromVal: "90°", toVal: "π / 2", extra: "1.570796 rad", extra2: "Perpendicular right angle" },
      { fromVal: "120°", toVal: "2π / 3", extra: "2.094395 rad", extra2: "Hexagon interior angle" },
      { fromVal: "180°", toVal: "π", extra: "3.141593 rad", extra2: "Straight line / half revolution" },
      { fromVal: "270°", toVal: "3π / 2", extra: "4.712389 rad", extra2: "Three-quarter circular rotation" },
      { fromVal: "360°", toVal: "2π", extra: "6.283185 rad", extra2: "Complete circular rotation" }
    ]
  },
  applications: {
    title: "Real-World Engineering & Scientific Applications",
    items: [
      {
        title: "Software & Game Development",
        text: "Graphics frameworks like WebGL, Three.js, and Unity perform 3D matrix transformations, Euler angle conversions, and quaternions using radians."
      },
      {
        title: "Mechanical & Robotics Engineering",
        text: "Calculating robotic arm torque, angular velocity (rad/s), and centrifugal acceleration requires converting joint motor degrees into radians."
      },
      {
        title: "Calculus & Mathematical Analysis",
        text: "Derivatives of trigonometric functions like d/dx(sin x) = cos x hold true only when x is measured in radians."
      },
      {
        title: "Physics & Orbital Mechanics",
        text: "Keplerian orbit calculations, wave phase shifts, and harmonic oscillation equations utilize radians as standard angular units."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Radians",
    items: [
      "Mixing up multiplying by π/180 with 180/π (180/π is used for converting radians back to degrees).",
      "Forgetting that programming functions like Math.sin() expect radians, leading to erroneous calculation results.",
      "Rounding π prematurely to 3.14 instead of using high-precision constants, accumulating rounding errors in multi-step calculations.",
      "Confusing sexagesimal arcminutes or arcseconds with decimal fractions of a degree before converting to radians."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to radians?",
      answer: "Multiply the degree value by π and divide by 180. For example, to convert 60°: 60 × (π / 180) = π / 3 ≈ 1.0472 radians."
    },
    {
      question: "Why are radians used instead of degrees in calculus?",
      answer: "Radians link angle size directly to arc length on a circle, ensuring that limits like lim(x→0) sin(x)/x = 1 hold true without introducing arbitrary conversion factors like 180/π into derivative formulas."
    },
    {
      question: "How many radians are in a full 360-degree circle?",
      answer: "There are exactly 2π radians in a full 360-degree circle, which equals approximately 6.283185307 radians."
    },
    {
      question: "What is 1 degree equal to in radians?",
      answer: "1 degree equals exactly π / 180 radians, or approximately 0.0174532925 radians."
    },
    {
      question: "How do you convert degrees to exact fraction radians with π?",
      answer: "Divide the degree number by 180 and reduce the fraction to its lowest terms, then attach the symbol π. For example, 135 / 180 reduces to 3/4, giving 3π/4 radians."
    },
    {
      question: "What is 90 degrees in radians?",
      answer: "90 degrees equals π / 2 radians, which is approximately 1.570796 radians."
    },
    {
      question: "What is 180 degrees in radians?",
      answer: "180 degrees equals exactly π radians, approximately 3.14159265 radians."
    },
    {
      question: "Is a radian larger than a degree?",
      answer: "Yes, 1 radian is approximately 57.2958 degrees, making one radian significantly larger than one degree."
    }
  ],
  relatedList: [
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" },
    { label: "Degree to Arcsecond", from: "degree", to: "arcsecond" },
    { label: "Radian to Degree", from: "radian", to: "degree" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) SI Brochure: The Radian as an SI Derived Unit",
    "NIST Special Publication 330: The International System of Units (SI) Angular Units",
    "ISO 80000-3: Quantities and Units — Space and Time"
  ]
};
