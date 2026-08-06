import { CustomArticleData } from "./types";

export const degreeToQuadrantAngle: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "quadrant-angle",
  seoTitle: "Degree to Quadrant Conversion (° to quad) | UnitsConvertors.com",
  metaDescription: "Convert degrees to quadrants (quad) accurately using the formula (quadrants = ° / 90). Learn 2D Cartesian geometry, trigonometry quadrants, worked examples, and FAQs.",
  h1: "Degree to Quadrant Conversion",
  introduction: [
    "The degree (°) and the quadrant (symbol: quad) represent fundamental angular units dividing circular geometry. While a degree divides a full circle into 360 sexagesimal parts, a quadrant represents one-fourth ($1/4$) of a full circle rotation, equal to exactly 90 degrees.",
    "In Cartesian coordinate systems, the 2D plane is divided into four cardinal quadrants (Quadrant I, II, III, and IV). Converting degrees to quadrants involves dividing the angle in degrees by 90 (or multiplying by $1/90 \\approx 0.01111111111$). For example, a $180^\\circ$ straight angle equals $180 / 90 = 2.0$ quadrants.",
    "Converting degrees to quadrants is essential in analytical geometry, astronomical quadrant instruments, surveying bearing calculations, and trigonometric sign determination ($+, -$ for sine, cosine, and tangent). This guide covers conversion formulas, worked examples, reference tables, and practical applications."
  ],
  quickAnswer: {
    text: "To convert degrees to quadrants, divide the degree value by 90. For example, 270 degrees equals 270 / 90 = 3.0 quadrants.",
    formulaDisplay: "Quadrants (quad) = Degrees (°) ÷ 90 = Degrees × 0.01111111",
    subtext: "1 Degree = 0.01111111 Quadrant | 90 Degrees = 1 Quadrant | 360 Degrees = 4 Quadrants"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and geography."
  },
  aboutTargetUnit: {
    title: "What is a Quadrant (quad)?",
    text: "A quadrant (symbol: quad) is a unit of plane angle equal to 90 degrees ($\pi/2$ radians or 100 gradians), representing a right angle or one-quarter of a full circular turn."
  },
  relationship: "A full circle contains 360 degrees or 4 quadrants. Dividing degrees by 90 converts any angle into a quadrant count.",
  relationshipTitle: "Key Degree to Quadrant Equivalents",
  relationshipItems: [
    { label: "45° Half Quadrant", value: "0.5 quad" },
    { label: "90° First Quadrant Boundary", value: "1.0 quad" },
    { label: "180° Second Quadrant Boundary", value: "2.0 quads" },
    { label: "270° Third Quadrant Boundary", value: "3.0 quads" },
    { label: "360° Fourth Quadrant / Full Circle", value: "4.0 quads" },
    { label: "720° Two Full Circles", value: "8.0 quads" }
  ],
  formula: {
    text: "Divide the angle in degrees by 90.",
    math: "Angle (quad) = \\frac{\\text{Angle }(^\\circ)}{90}",
    subtext: "Decimal multiplier formula: Quadrants = Degrees × 0.01111111111."
  },
  formulaTitle: "Degree to Quadrant Formula",
  practicalTip: {
    title: "Trigonometric Function Sign Rule (ASTC)",
    text: "In standard Cartesian quadrants: Quadrant I ($0^\\circ-90^\\circ$, 0–1 quad): All functions positive. Quadrant II ($90^\\circ-180^\\circ$, 1–2 quads): Sine positive. Quadrant III ($180^\\circ-270^\\circ$, 2–3 quads): Tangent positive. Quadrant IV ($270^\\circ-360^\\circ$, 3–4 quads): Cosine positive."
  },
  expertNote: {
    title: "Historical Quadrant Instrument",
    text: "Before modern sextants were invented, mariners and astronomers used the navigational quadrant—a $90^\\circ$ arc instrument—to measure star and sun altitude angles above the horizon."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 135 Degrees to Quadrants",
        subtitle: "Calculate quadrants for an obtuse angle of 135°.",
        steps: [
          "Identify degree value: 135°.",
          "Apply formula: quad = 135 / 90.",
          "Simplify fraction: 135 / 90 = 1.5.",
          "Final Result: 135° equals 1.5 quadrants."
        ]
      },
      {
        title: "Example 2: Convert 450 Degrees to Quadrants",
        subtitle: "Find quadrants for an angle exceeding one full circle (450°).",
        steps: [
          "Identify degree value: 450°.",
          "Apply formula: quad = 450 / 90.",
          "Calculate: 450 / 90 = 5.0.",
          "Final Result: 450° equals 5.0 quadrants (1 full circle + 1 quadrant)."
        ]
      },
      {
        title: "Example 3: Convert 30 Degrees to Quadrants",
        subtitle: "Convert a 30° acute angle into fractional quadrants.",
        steps: [
          "Identify degree value: 30°.",
          "Apply formula: quad = 30 / 90.",
          "Simplify fraction: 30 / 90 = 1 / 3 ≈ 0.333333.",
          "Final Result: 30° equals 0.333333 quadrants (1/3 quad)."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Quadrant Conversion Reference Matrix",
    headers: ["Degrees (°)", "Quadrants (quad)", "Cartesian Region / Boundary", "Trigonometric Characteristics"],
    rows: [
      { fromVal: "1°", toVal: "0.011111 quad", extra: "Inside Quadrant I", extra2: "All trig functions positive" },
      { fromVal: "30°", toVal: "0.333333 quad", extra: "Inside Quadrant I", extra2: "sin(30°) = 0.5" },
      { fromVal: "45°", toVal: "0.500000 quad", extra: "Quadrant I Bisector", extra2: "sin(45°) = cos(45°)" },
      { fromVal: "90°", toVal: "1.000000 quad", extra: "Boundary Q1 / Q2 (Y-axis)", extra2: "cos(90°) = 0, sin(90°) = 1" },
      { fromVal: "135°", toVal: "1.500000 quad", extra: "Inside Quadrant II", extra2: "sin positive, cos negative" },
      { fromVal: "180°", toVal: "2.000000 quad", extra: "Boundary Q2 / Q3 (X-axis)", extra2: "sin(180°) = 0, cos(180°) = -1" },
      { fromVal: "225°", toVal: "2.500000 quad", extra: "Inside Quadrant III", extra2: "tan positive, sin/cos negative" },
      { fromVal: "270°", toVal: "3.000000 quad", extra: "Boundary Q3 / Q4 (Y-axis)", extra2: "sin(270°) = -1, cos(270°) = 0" },
      { fromVal: "315°", toVal: "3.500000 quad", extra: "Inside Quadrant IV", extra2: "cos positive, sin negative" },
      { fromVal: "360°", toVal: "4.000000 quad", extra: "Full Rotation Boundary", extra2: "Complete circular period" }
    ]
  },
  applications: {
    title: "Analytical Geometry & Navigational Uses",
    items: [
      {
        title: "Cartesian Analytic Geometry",
        text: "Mathematicians and developers use quadrant ranges (0–1, 1–2, 2–3, 3–4 quads) in atan2(y, x) programming functions to resolve four-quadrant inverse tangents."
      },
      {
        title: "Surveying Quadrant Bearings",
        text: "Land surveyors express directional bearings in quadrant form (e.g., N 45° E in Quadrant I, S 30° W in Quadrant III)."
      },
      {
        title: "Astronomy & Celestial Instruments",
        text: "Historical astronomical quadrants measured star zenith distances across a $90^\\circ$ arc."
      },
      {
        title: "Robotic End-Effector Kinematics",
        text: "Industrial robot joint limits are monitored in quadrant intervals to prevent physical workspace collision."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Quadrants",
    items: [
      "Multiplying by 90 instead of dividing by 90 when converting degrees to quadrants.",
      "Confusing Cartesian quadrant numbering (I, II, III, IV) with navigational compass bearings (0° to 360° clockwise).",
      "Forgetting that 1 quadrant equals 100 gradians or $\\pi/2$ radians.",
      "Assuming 1 quadrant is 60 degrees (60 degrees is a sextant angle)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to quadrants?",
      answer: "Divide the angle in degrees by 90. For example, 180° / 90 = 2.0 quadrants."
    },
    {
      question: "How many degrees are in 1 quadrant?",
      answer: "There are exactly 90 degrees in 1 quadrant (equal to a right angle)."
    },
    {
      question: "How many quadrants are in a full circle?",
      answer: "A full 360-degree circle contains exactly 4 quadrants."
    },
    {
      question: "What is 270 degrees in quadrants?",
      answer: "270 degrees equals exactly 3.0 quadrants."
    },
    {
      question: "What is 45 degrees in quadrants?",
      answer: "45 degrees equals 0.5 quadrants (half a quadrant)."
    },
    {
      question: "What are the four quadrants of a circle?",
      answer: "Quadrant I (0°–90°, 0–1 quad), Quadrant II (90°–180°, 1–2 quads), Quadrant III (180°–270°, 2–3 quads), and Quadrant IV (270°–360°, 3–4 quads)."
    },
    {
      question: "Is a quadrant equal to a right angle?",
      answer: "Yes, a quadrant angle of 90 degrees represents a right angle."
    },
    {
      question: "What is 1 degree in quadrants?",
      answer: "1 degree equals 1/90th of a quadrant, or approximately 0.01111111 quadrants."
    }
  ],
  relatedList: [
    { label: "Degree to Sextant", from: "degree", to: "sextant-angle" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Radian", from: "degree", to: "radian" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and Time (Quadrant Angle Unit)",
    "NIST Handbook of Mathematical Functions: Cartesian Coordinates and Quadrants",
    "American Practical Navigator (Bowditch): Navigational Quadrants"
  ]
};
