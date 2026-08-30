import { CustomArticleData } from "./types";

export const radianToQuadrantAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "quadrant-angle",
  seoTitle: "Radian to Quadrant Converter (rad to quad) | UnitsConvertors.com",
  metaDescription: "Convert radians to quadrants (rad to quad) accurately. Learn the trigonometric formula (quad = rad × 2/π), Cartesian plane quadrant mapping, and tables.",
  h1: "Radian to Quadrant Converter",
  introduction: [
    "Converting radians to quadrants links the continuous angular variables of calculus and analytical geometry with the four discrete orthogonal sectors of the Cartesian coordinate plane and modern digital IQ constellation diagrams.",
    "While the radian (rad) is the base SI unit of plane angle defined by arc length on a unit circle, a quadrant (symbol: quad) represents one-fourth ($1/4$) of a complete circular turn, corresponding to exactly 90 degrees or $\\pi/2$ radians.",
    "Because one quadrant equals $\\pi/2$ radians (approximately 1.5707963 rad), converting radians to quadrants requires multiplying the radian value by $2 / \\pi$ (or dividing by $\\pi/2$, which equals multiplying by approximately $0.63661977$). This conversion is essential for quadrant determination in multi-argument arctangent functions (`atan2`), surveyor quadrant bearings, and quadrature phase-shift keying (QPSK) demodulation. This guide provides exact formulas, Cartesian worked examples, comparison tables, and practical applications."
  ],
  quickAnswer: {
    text: "To convert radians to quadrants, multiply the angle in radians by 2 / π (or divide by 1.5707963). For example, π radians equals exactly 2.0 quadrants (180 degrees).",
    formulaDisplay: "\\text{Quadrants (quad)} = \\text{Radians (rad)} \\times \\frac{2}{\\pi} = \\frac{\\text{Radians}}{\\pi / 2} \\approx \\text{Radians} \\times 0.6366198",
    subtext: "1 Radian ≈ 0.6366198 Quadrants | 1 Quadrant = π/2 Radians (90°) | 4 Quadrants = 2π Radians (360°)"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI derived unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc whose length equals the circle's radius. One complete circle spans $2\\pi$ radians (≈ 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Quadrant (quad)",
    text: "A quadrant (symbol: quad) is a geometric unit of angle representing one-fourth ($1/4$) of a complete revolution, equal to exactly 90 degrees, $\\pi/2$ radians, or 100 gradians. It defines the four 90-degree regions (I, II, III, IV) of the 2D Cartesian plane."
  },
  relationship: "A full circle equals $2\\pi$ radians and 4 quadrants. Dividing 4 by $2\\pi$ simplifies to the conversion ratio $2 / \\pi \\approx 0.63661977237$ quadrants per radian. Conversely, 1 quadrant equals $\\pi/2 \\approx 1.57079632679$ radians.",
  relationshipTitle: "Radian vs Quadrant Angle Comparison",
  relationshipItems: [
    { label: "π/4 Radians (45° Diagonal)", value: "0.500000 quad" },
    { label: "1.0 Radian (≈ 57.30°)", value: "≈ 0.636620 quad" },
    { label: "π/2 Radians (90° Right Angle)", value: "1.000000 quad" },
    { label: "π Radians (180° Half Turn)", value: "2.000000 quads" },
    { label: "3π/2 Radians (270° Three-Quarter)", value: "3.000000 quads" },
    { label: "2π Radians (360° Full Circle)", value: "4.000000 quads" }
  ],
  formula: {
    text: "Multiply the angle in radians by 2 and divide by pi (π), or multiply directly by 0.636619772.",
    math: "\\text{Quadrants} = \\text{Angle (rad)} \\times \\frac{2}{\\pi} = \\frac{\\text{Angle (rad)}}{\\pi / 2}",
    subtext: "Inverse formula: Radians (rad) = Quadrants × (π / 2) ≈ Quadrants × 1.570796327"
  },
  formulaTitle: "Radian to Quadrant Conversion Formula",
  practicalTip: {
    title: "Cartesian Quadrant Identification Rule",
    text: "To determine which Cartesian quadrant an angle θ (in radians) belongs to, take `floor(θ / (π/2)) mod 4`: 0 corresponds to Quadrant I (0 to π/2 rad), 1 to Quadrant II (π/2 to π rad), 2 to Quadrant III (π to 3π/2 rad), and 3 to Quadrant IV (3π/2 to 2π rad)."
  },
  expertNote: {
    title: "Trigonometric Sign Rules by Quadrant",
    text: "Converting radians to quadrants immediately reveals function signs via the 'All Students Take Calculus' (ASTC) mnemonic: Quadrant I (all positive), Quadrant II (sine positive), Quadrant III (tangent positive), and Quadrant IV (cosine positive)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Complex Number Polar Angle Mapping",
        subtitle: "A vector signal analysis yields a phase angle of 2.35619 radians (3π/4 rad). Convert this angle to quadrants to verify its location in the Cartesian complex plane.",
        steps: [
          "State given angle: 2.35619 radians (3π/4 rad).",
          "Apply conversion formula: Quadrants = (3π/4) × (2/π).",
          "Simplify fraction: (3/4) × 2 = 6/4 = 1.5 quadrants.",
          "Final Result: The angle equals 1.5 quadrants (135°), placing it midway through Quadrant II."
        ]
      },
      {
        title: "Example 2: 1.0 Radian Standard Arc Conversion",
        subtitle: "Convert 1.0 radian into quadrants to understand what portion of a right angle it spans.",
        steps: [
          "State value: 1.0 radian.",
          "Multiply by conversion factor: 1.0 × (2 / π) = 0.6366198 quadrants.",
          "Final Result: 1.0 radian equals approximately 0.637 quadrants (or ~63.7% of a 90-degree right angle)."
        ]
      },
      {
        title: "Example 3: Orthogonal Beam Deflection",
        subtitle: "An optical beam steering mirror deflects through 5.49779 radians (7π/4 rad). Convert this rotation into quadrants.",
        steps: [
          "State angle: 5.49779 radians (7π/4 rad).",
          "Multiply: (7π/4) × (2/π) = 14/4 = 3.5 quadrants.",
          "Final Result: The mirror deflection spans 3.5 quadrants (315°), landing in Quadrant IV."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Quadrant Conversion Reference Table",
    headers: ["Radians (rad)", "Quadrants (quad)", "Degrees (°)", "Gradians (grad)", "Cartesian Region"],
    rows: [
      { fromVal: "0 rad", toVal: "0.0000 quad", extra: "0.00°", extra2: "0.00 grad", extra3: "Positive X-axis" },
      { fromVal: "π/6 rad (0.5236)", toVal: "0.3333 quad (1/3)", extra: "30.00°", extra2: "33.33 grad", extra3: "Quadrant I (0° to 90°)" },
      { fromVal: "π/4 rad (0.7854)", toVal: "0.5000 quad (1/2)", extra: "45.00°", extra2: "50.00 grad", extra3: "Quadrant I bisector" },
      { fromVal: "1.0 rad", toVal: "0.6366 quad", extra: "57.30°", extra2: "63.66 grad", extra3: "Quadrant I" },
      { fromVal: "π/2 rad (1.5708)", toVal: "1.0000 quad", extra: "90.00°", extra2: "100.0 grad", extra3: "Positive Y-axis" },
      { fromVal: "3π/4 rad (2.3562)", toVal: "1.5000 quad", extra: "135.00°", extra2: "150.0 grad", extra3: "Quadrant II bisector" },
      { fromVal: "π rad (3.1416)", toVal: "2.0000 quads", extra: "180.00°", extra2: "200.0 grad", extra3: "Negative X-axis" },
      { fromVal: "5π/4 rad (3.9270)", toVal: "2.5000 quads", extra: "225.00°", extra2: "250.0 grad", extra3: "Quadrant III bisector" },
      { fromVal: "3π/2 rad (4.7124)", toVal: "3.0000 quads", extra: "270.00°", extra2: "300.0 grad", extra3: "Negative Y-axis" },
      { fromVal: "7π/4 rad (5.4978)", toVal: "3.5000 quads", extra: "315.00°", extra2: "350.0 grad", extra3: "Quadrant IV bisector" },
      { fromVal: "2π rad (6.2832)", toVal: "4.0000 quads", extra: "360.00°", extra2: "400.0 grad", extra3: "Complete circular revolution" }
    ]
  },
  applications: {
    title: "Trigonometry, Surveying, & Digital Communications",
    items: [
      {
        title: "Programming & Math Libraries (`atan2`)",
        text: "Software algorithms evaluate `atan2(y, x)` in radians and divide by π/2 to determine exact quadrant branching for inverse kinematics."
      },
      {
        title: "Surveyor Quadrant Bearings",
        text: "Civil surveyors convert geodetic azimuth angles from radians into quadrant bearings (e.g., North 45° East) relative to cardinal axes."
      },
      {
        title: "Digital Quadrature Modulation (QPSK / QAM)",
        text: "Telecommunication receivers decode continuous phase demodulation signals (radians) into discrete phase quadrants to recover transmitted binary symbols."
      },
      {
        title: "Robotic Joint Orthogonal Limits",
        text: "Industrial robotic controllers monitor arm sweep limits against 90-degree orthogonal quadrant zones to prevent mechanical collisions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Quadrant Conversions",
    items: [
      "Multiplying by π/2 instead of 2/π (or dividing by π/2), causing a ~2.47× error.",
      "Confusing Cartesian quadrant numbering (I: 0–1 quad, II: 1–2 quads, III: 2–3 quads, IV: 3–4 quads) with cardinal compass quadrants.",
      "Forgetting that 1 quadrant equals 90 degrees or 100 gradians, not 60 degrees (which is a sextant).",
      "Failing to normalize angles greater than 2π (4.0 quadrants) using modulo arithmetic."
    ]
  },
  faqs: [
    {
      question: "How many quadrants are in 1 radian?",
      answer: "One radian equals 2 / π quadrants, which is approximately 0.636619772 quadrants (about 63.7% of a 90-degree right angle)."
    },
    {
      question: "How many radians are in 1 quadrant?",
      answer: "There are exactly π/2 radians in 1 quadrant, which is approximately 1.570796327 radians (equal to 90 degrees or 100 gradians)."
    },
    {
      question: "What is the formula to convert radians to quadrants?",
      answer: "The formula is: Quadrants = Radians × (2 / π) = Radians / (π / 2) ≈ Radians × 0.636619772."
    },
    {
      question: "How many quadrants make up a full circle?",
      answer: "There are exactly 4 quadrants in a complete circle (4 × 90° = 360°, or 4 × π/2 = 2π radians)."
    },
    {
      question: "How many quadrants is π radians?",
      answer: "π radians equals exactly 2.0 quadrants (180 degrees or a straight line angle)."
    },
    {
      question: "How many quadrants is 2π radians?",
      answer: "2π radians equals exactly 4.0 quadrants (360 degrees or one full turn)."
    },
    {
      question: "What is the difference between a quadrant and a sextant?",
      answer: "A quadrant represents 1/4 of a circle (90 degrees or π/2 radians), whereas a sextant represents 1/6 of a circle (60 degrees or π/3 radians)."
    },
    {
      question: "How do quadrants relate to gradians?",
      answer: "1 quadrant equals exactly 100 gradians (gons). Thus, 4 quadrants equal 400 gradians."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Sextant", from: "radian", to: "sextant-angle" },
    { label: "Degree to Quadrant", from: "degree", to: "quadrant-angle" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "BIPM: The International System of Units (SI) Guide.",
    "NIST Guide to Coordinate Systems and Trigonometric Constants.",
    "IEEE Standard 754 for Floating-Point Arithmetic (Standard math library implementations)."
  ]
};
