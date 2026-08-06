import { CustomArticleData } from "./types";

export const radianToDegree: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "degree",
  seoTitle: "Radian to Degree Conversion (rad to °) | UnitsConvertors.com",
  metaDescription: "Convert radians to degrees (°) accurately using the formula (degrees = rad × 180 / π). Learn trigonometry, calculus angle formulas, worked examples, and FAQs.",
  h1: "Radian to Degree Conversion",
  introduction: [
    "The radian (rad) and the degree (°) are the two primary units of plane angle measurement. The radian is the official SI unit of plane angle, defined as the angle subtended at the center of a circle by an arc whose length equals the circle's radius. A full circular revolution equals $2\\pi$ radians (approximately $6.28318530718$ radians).",
    "In contrast, the degree divides a full circle into 360 equal sexagesimal parts. To convert radians to degrees, multiply the angle in radians by $180 / \\pi$ (approximately $57.29577951308$). For example, $\\pi$ radians equals exactly $180^\\circ$ (a straight line angle), and $\\pi/2$ radians equals $90^\\circ$ (a right angle).",
    "Converting radians to degrees is essential across physics, calculus, computer graphics, mechanical vibration analysis, robotics, and electrical AC circuit phase diagrams. This guide provides exact formulas, step-by-step conversion examples, reference tables, and practical applications."
  ],
  quickAnswer: {
    text: "To convert radians to degrees, multiply the radian value by 180 / π (approx. 57.29578). For example, 1 radian equals 1 × 57.29578 = 57.30 degrees (°).",
    formulaDisplay: "Degrees (°) = Radians (rad) × (180 / π) ≈ Radians × 57.29577951",
    subtext: "1 Radian ≈ 57.29577951° | π Radians = 180° | 2π Radians = 360°"
  },
  aboutSourceUnit: {
    title: "What is a Radian (rad)?",
    text: "A radian (symbol: rad) is the SI derived unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle at the center of a circle subtended by an arc equal in length to the radius."
  },
  aboutTargetUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and geography."
  },
  relationship: "A full circle equals $2\\pi$ radians or 360 degrees. Dividing 360 by $2\\pi$ gives the exact conversion ratio $180 / \\pi \\approx 57.29577951308^\\circ$ per radian.",
  relationshipTitle: "Fundamental Radian to Degree Equivalents",
  relationshipItems: [
    { label: "π / 6 rad (30° Angle)", value: "30.0°" },
    { label: "π / 4 rad (45° Diagonal)", value: "45.0°" },
    { label: "π / 3 rad (60° Corner)", value: "60.0°" },
    { label: "π / 2 rad (90° Right Angle)", value: "90.0°" },
    { label: "π rad (180° Straight Line)", value: "180.0°" },
    { label: "2π rad (360° Full Rotation)", value: "360.0°" }
  ],
  formula: {
    text: "Multiply the angle in radians by 180 and divide by pi (π).",
    math: "Angle (^\\circ) = \\text{Angle (rad)} × \\frac{180}{\\pi}",
    subtext: "Exact mathematical factor: 180/π. Approximate multiplier: 57.29577951308."
  },
  formulaTitle: "Radian to Degree Formula",
  practicalTip: {
    title: "Small Angle Approximation",
    text: "In physics and calculus, for small angles measured in radians ($\\theta < 0.1\\text{ rad}$ or $< 5.7^\\circ$), $\\sin(\\theta) \\approx \\theta$ and $\\tan(\\theta) \\approx \\theta$. This simplifies pendulum and optic equations."
  },
  expertNote: {
    title: "Why Calculus Requires Radians",
    text: "Derivatives of trigonometric functions require angles to be in radians: $\\frac{d}{dx}\\sin(x) = \\cos(x)$. If $x$ were in degrees, an awkward scaling factor of $\\pi/180$ would appear in every calculus derivative."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 1.5708 Radians (π/2) to Degrees",
        subtitle: "Convert π/2 radians to degrees.",
        steps: [
          "Identify radian value: 1.5707963 rad (π/2).",
          "Apply formula: Degrees = (π/2) × (180 / π).",
          "Cancel π: 180 / 2 = 90.",
          "Final Result: π/2 radians equals exactly 90 degrees (90°)."
        ]
      },
      {
        title: "Example 2: Convert 1 Radian to Degrees",
        subtitle: "Find the exact degree value of 1 full radian.",
        steps: [
          "Identify radian value: 1.0 rad.",
          "Apply formula: Degrees = 1.0 × (180 / π).",
          "Calculate: 180 / 3.14159265 = 57.29577951.",
          "Final Result: 1 radian equals approximately 57.30 degrees (57° 17' 45\")."
        ]
      },
      {
        title: "Example 3: Convert 2.5 Radians to Degrees",
        subtitle: "Convert 2.5 radians to degrees.",
        steps: [
          "Identify radian value: 2.5 rad.",
          "Apply formula: Degrees = 2.5 × (180 / π).",
          "Calculate: 2.5 × 57.29577951 = 143.2394487.",
          "Final Result: 2.5 radians equals approximately 143.24 degrees."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Degree Conversion Reference Matrix",
    headers: ["Radians (rad)", "Exact π Value", "Degrees (°)", "Geometric / Calculus Context"],
    rows: [
      { fromVal: "0.017453 rad", toVal: "π / 180", extra: "1.0°", extra2: "Single degree benchmark angle" },
      { fromVal: "0.523599 rad", toVal: "π / 6", extra: "30.0°", extra2: "sin(30°) = 0.5 standard triangle" },
      { fromVal: "0.785398 rad", toVal: "π / 4", extra: "45.0°", extra2: "Isosceles right triangle diagonal" },
      { fromVal: "1.047198 rad", toVal: "π / 3", extra: "60.0°", extra2: "Equilateral triangle interior angle" },
      { fromVal: "1.000000 rad", toVal: "1 rad", extra: "57.2958°", extra2: "1 unit radius arc length angle" },
      { fromVal: "1.570796 rad", toVal: "π / 2", extra: "90.0°", extra2: "Perpendicular right angle" },
      { fromVal: "2.094395 rad", toVal: "2π / 3", extra: "120.0°", extra2: "Obtuse triangle angle" },
      { fromVal: "3.141593 rad", toVal: "π", extra: "180.0°", extra2: "Straight line / opposite direction" },
      { fromVal: "4.712389 rad", toVal: "3π / 2", extra: "270.0°", extra2: "Three-quarter turn" },
      { fromVal: "6.283185 rad", toVal: "2π", extra: "360.0°", extra2: "Full circular rotation" }
    ]
  },
  applications: {
    title: "Physics & Engineering Applications",
    items: [
      {
        title: "Mechanical Vibrations & Wave Mechanics",
        text: "Angular frequency $\\omega$ in radians/second is converted into cyclical frequency (Hz) or rotational degrees per second."
      },
      {
        title: "Computer Graphics & 3D Game Engines",
        text: "Game physics engines perform matrix transformations in radians internally and display rotation properties in degrees to developers."
      },
      {
        title: "Electrical AC Power Circuit Analysis",
        text: "Voltage and current phasor phase angles $\\phi$ are converted between radians and degrees for power factor calculations."
      },
      {
        title: "Robotic Joint Kinematics",
        text: "Denavit-Hartenberg robot arm joint parameters calculate forward kinematics in radians and report servo positions in degrees."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Radians to Degrees",
    items: [
      "Multiplying by π / 180 instead of 180 / π when converting radians to degrees.",
      "Forgetting to switch scientific calculator setting from RAD mode to DEG mode.",
      "Omitting π when converting exact symbolic radians (e.g., converting 2π by treating it as 2 instead of 2 × 3.14159).",
      "Confusing angular velocity (rad/s) with total angular position (degrees)."
    ]
  },
  faqs: [
    {
      question: "How do you convert radians to degrees?",
      answer: "Multiply the radian value by 180 / π (approx. 57.29578). For example, 1.5708 rad × (180 / π) = 90 degrees."
    },
    {
      question: "What is 1 radian equal to in degrees?",
      answer: "1 radian equals approximately 57.2957795 degrees (or 57° 17' 45\")."
    },
    {
      question: "What is π radians in degrees?",
      answer: "π radians (approx. 3.14159 rad) equals exactly 180 degrees."
    },
    {
      question: "What is 2π radians in degrees?",
      answer: "2π radians (approx. 6.283185 rad) equals exactly 360 degrees (one full circle)."
    },
    {
      question: "What is π/2 radians in degrees?",
      answer: "π/2 radians equals exactly 90 degrees (a right angle)."
    },
    {
      question: "Why is 180/π used for converting radians to degrees?",
      answer: "Because 2π radians = 360 degrees. Dividing both sides by 2π yields 1 radian = 360 / 2π = 180 / π degrees."
    },
    {
      question: "What is 0.5 radians in degrees?",
      answer: "0.5 radians equals approximately 28.64789 degrees (0.5 × 57.29578)."
    },
    {
      question: "How do you convert radians to degrees in Python?",
      answer: "Use math.degrees(x) from the built-in math library, or calculate x * (180 / math.pi)."
    }
  ],
  relatedList: [
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" }
  ],
  references: [
    "BIPM SI Brochure: The Radian (SI Derived Unit of Plane Angle)",
    "ISO 80000-3: Space and Time Quantities — Plane Angle Units",
    "NIST Handbook of Mathematical Functions: Trigonometric Conversion Factors"
  ]
};
