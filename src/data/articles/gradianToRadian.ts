import { CustomArticleData } from "./types";

export const gradianToRadian: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "radian",
  seoTitle: "Gradian to Radian Converter (grad to rad) | UnitsConvertors.com",
  metaDescription: "Convert gradians to radians (grad to rad / gon) accurately. Learn the exact π/200 conversion formula, surveying to calculus calculations, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-radian",
  h1: "Gradian to Radian Converter",
  introduction: [
    "The gradian (grad, or gon) and the radian (rad) represent the primary decimal and mathematical angular units in modern science. While the gradian is a decimal metric unit originating in French geodetic surveying—dividing a circle into 400 grads and a right angle into 100 grads—the radian is the coherent SI unit of plane angle, defined strictly by circular arc length and fundamental to all mathematical calculus, rotary mechanics, and dynamic wave equations.",
    "A full circular turn encompasses 400 gradians and 2π radians. This makes the ratio between them exact: 2π / 400 = π / 200. Consequently, exactly one gradian equals π/200 radians (approximately 0.01570796 rad).",
    "To convert gradians to radians, multiply the gradian value by π/200 (or approximately 0.01570796). Conversely, to convert from radians to gradians, multiply by 200/π (approx. 63.661977). This technical reference details the exact mathematical proofs, analytical surveying transformations, worked examples, and an authoritative conversion table."
  ],
  quickAnswer: {
    text: "To convert gradians to radians, multiply the gradian value by π/200 (approximately 0.015708). For example, 100 gradians (a right angle) equals exactly π/2 radians (approx. 1.5708 rad).",
    formulaDisplay: "Radians (rad) = Gradians × (π / 200) ≈ Gradians × 0.01570796",
    subtext: "200 grad = π rad (180°); 1 grad ≈ 0.015708 rad; 1 rad ≈ 63.661977 grad."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal metric unit of angular measurement introduced during the French Revolution. Designed to replace base-60 Babylonian degrees with base-10 metric logic, the gradian divides a quadrant (right angle) into exactly 100 grads, a straight line into 200 grads, and a complete circle into 400 grads. It remains widely used across continental European civil engineering, tunnel excavation, and geodetic land surveying."
  },
  aboutTargetUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian is the coherent derived unit of plane angle in the International System of Units (SI). Defined as the angle subtended at the center of a circle by an arc equal in length to its radius (θ = s/r), the radian is naturally dimensionless (meters per meter). It is the only angle unit that satisfies fundamental calculus identities without extraneous conversion constants (such as d/dx [sin x] = cos x)."
  },
  relationship: "A full circle comprises 400 gradians and 2π radians, meaning 200 gradians equals exactly π radians. Therefore, 1 gradian equals π/200 radians (~0.015707963 rad). Conversely, 1 radian equals 200/π gradians (~63.6619772 grad).",
  relationshipTitle: "Gradian to Radian Exact Equivalence",
  relationshipItems: [
    { label: "1 grad", value: "0.015708 rad (π/200)" },
    { label: "10 grad", value: "0.157080 rad (π/20)" },
    { label: "50 grad", value: "0.785398 rad (π/4, 45°)" },
    { label: "100 grad", value: "1.570796 rad (π/2, 90°)" },
    { label: "200 grad", value: "3.141593 rad (π, 180°)" },
    { label: "400 grad", value: "6.283185 rad (2π, 360°)" }
  ],
  formula: {
    text: "Multiply the angle in gradians by π/200 (or approximately 0.015707963) to obtain radians.",
    math: "\\text{rad} = \\text{grad} \\times \\frac{\\pi}{200} \\approx \\text{grad} \\times 0.015707963",
    subtext: "Inverse formula: grad = rad × (200 / π) ≈ rad × 63.661977"
  },
  formulaTitle: "Gradian to Radian Conversion Formula",
  practicalTip: {
    title: "Exact Pi Reduction Method",
    text: "When performing analytical math, write the gradian value over 200 and simplify the fraction against π. For example, 150 grads becomes 150π / 200 = 3π / 4 radians directly, preserving absolute mathematical precision."
  },
  expertNote: {
    title: "Software & Trigonometric Libraries",
    text: "Programming languages (such as JavaScript, Python, C++, and MATLAB) define trigonometric functions (sin, cos, tan) exclusively in radians. When processing raw survey data captured in gradians or gons, you must multiply by Math.PI / 200 before passing coordinates into math library routines."
  },
  examples: {
    title: "Step-by-Step grad to rad Worked Examples",
    items: [
      {
        title: "Example 1: Total Station Topographic Horizontal Angle",
        subtitle: "A land surveyor records a horizontal boundary angle of 75.0 grads. Convert this angle into radians for spatial analysis software.",
        steps: [
          "State the angle in gradians: θ = 75.0 grad.",
          "Apply the conversion factor: rad = 75.0 × (π / 200).",
          "Calculate: 75.0 × (3.14159265 / 200) ≈ 1.178097.",
          "Final Result: 75.0 grads equals approximately 1.1781 radians (exactly 3π/8 rad)."
        ]
      },
      {
        title: "Example 2: Right-Angle Verification (100 grads)",
        subtitle: "Confirm the radian value of a 100-grad right angle.",
        steps: [
          "State the value: 100 grad.",
          "Multiply by π/200: 100 × (π / 200) = π / 2.",
          "Calculate: π / 2 ≈ 1.570796.",
          "Final Result: 100 grads is exactly π/2 radians (approx. 1.5708 rad)."
        ]
      },
      {
        title: "Example 3: Micro-Deflection in Laser Tunneling",
        subtitle: "A laser alignment target detects a deviation of 0.40 grads. Convert this angular shift to radians.",
        steps: [
          "Identify the deviation: 0.40 grad.",
          "Multiply by 0.01570796: 0.40 × 0.01570796 ≈ 0.006283.",
          "Final Result: 0.40 grads equals approximately 0.006283 radians (2π/1000 rad)."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Radian Conversion Reference Table",
    headers: ["Gradians (grad)", "Radians (rad)", "Exact π Expression", "Degrees (°)"],
    rows: [
      { fromVal: "1 grad", toVal: "0.0157 rad", extra: "π / 200", extra2: "0.90°" },
      { fromVal: "10 grad", toVal: "0.1571 rad", extra: "π / 20", extra2: "9.00°" },
      { fromVal: "25 grad", toVal: "0.3927 rad", extra: "π / 8", extra2: "22.50°" },
      { fromVal: "50 grad", toVal: "0.7854 rad", extra: "π / 4", extra2: "45.00°" },
      { fromVal: "75 grad", toVal: "1.1781 rad", extra: "3π / 8", extra2: "67.50°" },
      { fromVal: "100 grad", toVal: "1.5708 rad", extra: "π / 2", extra2: "90.00°" },
      { fromVal: "150 grad", toVal: "2.3562 rad", extra: "3π / 4", extra2: "135.00°" },
      { fromVal: "200 grad", toVal: "3.1416 rad", extra: "π", extra2: "180.00°" },
      { fromVal: "300 grad", toVal: "4.7124 rad", extra: "3π / 2", extra2: "270.00°" },
      { fromVal: "400 grad", toVal: "6.2832 rad", extra: "2π", extra2: "360.00°" }
    ]
  },
  applications: {
    title: "Scientific & Geodetic Applications of grad to rad",
    items: [
      {
        title: "GIS & Spatial Database Software Integration",
        text: "Converting European cadastral theodolite datasets recorded in grads/gons into radians required by geographic coordinate projection engines."
      },
      {
        title: "Subterranean Tunnel Guidance & Laser Boring",
        text: "Translating digital theodolite survey traverses into vector rotation matrices implemented in guidance software."
      },
      {
        title: "Computer Graphics & 3D Matrix Transformations",
        text: "Importing architectural model azimuths specified in grads into WebGL and game engine rotation quaternions operating in radians."
      },
      {
        title: "Robotics & Kinematic Coordinate Control",
        text: "Ensuring mechanical joint angle commands converted from European machinery specifications operate accurately in radian-based trajectory planners."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Radian Conversions",
    items: [
      "Using π/180 (the degree-to-radian factor) instead of π/200, introducing an 11.1% calculation error.",
      "Inverting the conversion formula, multiplying by 200/π instead of π/200.",
      "Omitting the constant π and multiplying simply by 1/200.",
      "Passing gradian angles directly into programming language math libraries without first converting to radians."
    ]
  },
  faqs: [
    {
      question: "How many radians are in 1 gradian?",
      answer: "There are approximately 0.01570796 radians in 1 gradian (exactly π / 200 radians)."
    },
    {
      question: "How many gradians are in 1 radian?",
      answer: "There are approximately 63.661977 gradians in 1 radian (exactly 200 / π grads)."
    },
    {
      question: "What is the formula to convert gradians to radians?",
      answer: "The formula is: Radians = Gradians × (π / 200) ≈ Gradians × 0.01570796."
    },
    {
      question: "How many radians are in 100 gradians?",
      answer: "100 gradians is a right angle (90°), which equals exactly π/2 radians (approximately 1.570796 rad)."
    },
    {
      question: "How many radians are in 200 gradians?",
      answer: "200 gradians is a straight angle (180°), which equals exactly π radians (approximately 3.141593 rad)."
    },
    {
      question: "Why do programmers need to convert gradians to radians?",
      answer: "Because standard programming language mathematical libraries (Math.sin, Math.cos) expect angles exclusively in radians."
    },
    {
      question: "Is gradian an official SI unit?",
      answer: "The radian is the official coherent SI unit of angle. The gradian (or gon) is recognized by ISO 80000-3 as an accepted non-SI metric unit."
    },
    {
      question: "How do I convert radians to gradians?",
      answer: "Multiply radians by 200/π. For example, 1 rad × (200 / π) ≈ 63.66 grads."
    }
  ],
  relatedList: [
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Radian to Grad", from: "radian", to: "grad-angle" },
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Degree to Radian", from: "degree", to: "radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "National Geodetic Survey (NGS): Geodetic Glossary."
  ]
};
