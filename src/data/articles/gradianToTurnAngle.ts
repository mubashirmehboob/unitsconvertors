import { CustomArticleData } from "./types";

export const gradianToTurnAngle: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "turn-angle",
  seoTitle: "Gradian to Turn Converter (grad to turn) | UnitsConvertors.com",
  metaDescription: "Convert gradians to turns (grad to turn) with exact decimal precision. Discover rotational circle formulas, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-turn-angle",
  h1: "Gradian to Turn Converter",
  introduction: [
    "The gradian (grad, or gon) and the turn (also called a full circle, revolution, or cycle) represent two systematic methods of measuring rotational displacement. The gradian is a centesimal metric angle unit developed in France to align circular division with decimal mathematics, dividing a full revolution into exactly 400 gradians. The turn, designated as a fundamental unit of angle in ISO 80000-3, treats one complete revolution as a unit value of 1.",
    "Because a complete circular rotation contains exactly 400 gradians and corresponds to exactly 1 turn, the mathematical ratio between them is clean and decimal: 1 / 400 = 0.0025. Therefore, one gradian is precisely one four-hundredth of a turn, or 0.0025 turn.",
    "To convert gradians to turns, divide the gradian value by 400, or multiply by 0.0025. Conversely, multiplying turns by 400 yields gradians. This technical guide outlines the rotational mechanics, worked engineering calculations, practical rotational applications, and a complete conversion reference table."
  ],
  quickAnswer: {
    text: "To convert gradians to turns, divide the gradian value by 400 (or multiply by 0.0025). For instance, 100 gradians (a right angle) equals exactly 0.25 turn, and 200 gradians equals exactly 0.5 turn.",
    formulaDisplay: "Turn (turn) = Gradians / 400 = Gradians × 0.0025",
    subtext: "1 Gradian = 0.0025 Turn; 1 Turn = 400 Gradians; 1 Right Angle = 100 grad = 0.25 turn."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon) is an angular measurement unit introduced alongside the metric system. It divides a right angle into 100 decimal parts called grads, making a straight angle 200 grads and a full circle 400 grads. It is widely applied across land surveying, geodesy, and civil engineering across continental Europe, eliminating non-decimal sexagesimal arithmetic in field calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Turn (turn / cycle / rev)",
    text: "The turn (symbol: turn, also termed a complete revolution or cycle) represents one full 360-degree rotation. Widely utilized in kinematics, electric motor specification, rotational dynamics, and computer graphics, the turn simplifies fractional rotation by representing half a circle as 0.5 turn and a quarter turn (right angle) as 0.25 turn."
  },
  relationship: "A complete circle corresponds to 400 gradians and exactly 1 turn. This yields an exact decimal ratio: 1 grad = 1/400 turn = 0.0025 turn. Inversely, 1 turn = 400 grad. A right angle is 100 grad or 0.25 turn, while a straight angle is 200 grad or 0.5 turn.",
  relationshipTitle: "Gradian to Turn Exact Ratio",
  relationshipItems: [
    { label: "1 grad", value: "0.0025 turn" },
    { label: "10 grad", value: "0.025 turn" },
    { label: "50 grad", value: "0.125 turn (1/8 turn)" },
    { label: "100 grad", value: "0.25 turn (Quadrant / Right Angle)" },
    { label: "200 grad", value: "0.5 turn (Half Turn / Straight Angle)" },
    { label: "300 grad", value: "0.75 turn (3/4 turn)" },
    { label: "400 grad", value: "1.0 turn (Full Circle)" }
  ],
  formula: {
    text: "Divide the angle in gradians by 400, or multiply by 0.0025, to calculate turns.",
    math: "\\text{Turn (turn)} = \\frac{\\text{grad}}{400} = \\text{grad} \\times 0.0025",
    subtext: "Inverse formula: grad = turn × 400"
  },
  formulaTitle: "Gradian to Turn Conversion Formula",
  practicalTip: {
    title: "Quarter Turn Decimal Shortcut",
    text: "Remember that every 100 gradians represents exactly one quarter turn (0.25 turn). To quickly estimate turns from grads, divide by 100 and then divide by 4."
  },
  expertNote: {
    title: "Decimal Alignment in Mechatronics",
    text: "In industrial automation and robotic joint control, measuring rotation in turns eliminates cumulative rounding errors associated with irrational pi radians. Converting European geodetic coordinates (in grads) to mechanical actuator revolutions (in turns) requires only a single exact multiplication by 0.0025."
  },
  examples: {
    title: "Step-by-Step grad to turn Worked Examples",
    items: [
      {
        title: "Example 1: Surveying Theodolite Azimuth to Full Turns",
        subtitle: "A digital surveying theodolite records an azimuth sweep of 160 grads. Determine how many fractional turns this rotation represents.",
        steps: [
          "Identify the given angle: θ = 160 grad.",
          "Apply the conversion formula: Turn = grad / 400.",
          "Perform calculation: Turn = 160 / 400 = 0.40 turn.",
          "Final Answer: 160 gradians equals exactly 0.4 turn (or two-fifths of a complete circle)."
        ]
      },
      {
        title: "Example 2: Industrial Rotary Actuator Positioning",
        subtitle: "A precision indexing table rotates through 75 gradians during an automated assembly cycle. Express this movement in turns.",
        steps: [
          "Identify the input: 75 grad.",
          "Multiply by 0.0025: Turn = 75 × 0.0025 = 0.1875 turn.",
          "Fractional representation: 0.1875 = 3/16 of a full turn.",
          "Final Answer: 75 gradians corresponds to exactly 0.1875 turn."
        ]
      },
      {
        title: "Example 3: Multi-Revolution Drilling Alignment",
        subtitle: "A deep borehole drill rig tool rotates through 1,800 gradians. Calculate the total number of full turns executed.",
        steps: [
          "Identify total angle: 1,800 grad.",
          "Divide by 400: Turn = 1,800 / 400 = 4.5 turns.",
          "Interpretation: The tool made 4 complete revolutions plus an additional half turn (200 grads).",
          "Final Answer: 1,800 gradians equals 4.5 complete turns."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Turn Conversion Table",
    headers: ["Gradians (grad)", "Turns (turn)", "Fractional Turn", "Geometric Equivalent"],
    rows: [
      { fromVal: "1 grad", toVal: "0.0025 turn", extra: "1/400 turn", extra2: "0.9°" },
      { fromVal: "10 grad", toVal: "0.025 turn", extra: "1/40 turn", extra2: "9°" },
      { fromVal: "25 grad", toVal: "0.0625 turn", extra: "1/16 turn", extra2: "22.5°" },
      { fromVal: "50 grad", toVal: "0.125 turn", extra: "1/8 turn", extra2: "45° (Octant)" },
      { fromVal: "75 grad", toVal: "0.1875 turn", extra: "3/16 turn", extra2: "67.5°" },
      { fromVal: "100 grad", toVal: "0.25 turn", extra: "1/4 turn", extra2: "90° (Right Angle)" },
      { fromVal: "150 grad", toVal: "0.375 turn", extra: "3/8 turn", extra2: "135°" },
      { fromVal: "200 grad", toVal: "0.50 turn", extra: "1/2 turn", extra2: "180° (Straight Angle)" },
      { fromVal: "250 grad", toVal: "0.625 turn", extra: "5/8 turn", extra2: "225°" },
      { fromVal: "300 grad", toVal: "0.75 turn", extra: "3/4 turn", extra2: "270°" },
      { fromVal: "350 grad", toVal: "0.875 turn", extra: "7/8 turn", extra2: "315°" },
      { fromVal: "400 grad", toVal: "1.00 turn", extra: "1 turn", extra2: "360° (Full Circle)" },
      { fromVal: "800 grad", toVal: "2.00 turn", extra: "2 turns", extra2: "720° (Two Circles)" }
    ]
  },
  applications: {
    title: "Practical Applications of Gradians to Turns",
    items: [
      {
        title: "Robotics and Servomotor Calibration",
        text: "Servo drives frequently specify angular position in normalized turns (0.0 to 1.0) or encoder ticks per turn. Converting topographic gradian survey targets directly into servo turns ensures seamless robotic orientation."
      },
      {
        title: "Geodesy and Civil Engineering",
        text: "Cadastral maps in Germany and Switzerland define parcel boundaries in grads. Converting cumulative boundary polygon angles into turns allows surveyors to verify polygon closure checks (where sum of exterior angles equals 1 turn)."
      },
      {
        title: "Rotary Tooling and CNC Machining",
        text: "Multi-axis CNC mills and rotary indexing chucks programmed for angular divisions benefit from turn fractions to prevent accumulated machine tool gear backlash."
      },
      {
        title: "Computer Graphics and Game Physics",
        text: "Normalized turn angles [0, 1) eliminate periodic trigonometric boundary wraps when interpolating rotations between metric European simulation engines."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Turn Conversions",
    items: [
      "Dividing grads by 360 instead of 400. Remember that a full circle contains 400 grads, so you must divide by 400 to obtain turns.",
      "Confusing turns with revolutions per minute (RPM). A turn is a static angular displacement unit, whereas RPM is an angular velocity.",
      "Over-rounding small gradian angles. Because 1 grad is 0.0025 turn, rounding to two decimal places (0.00) loses all measurement value. Maintain at least four decimal places."
    ]
  },
  faqs: [
    {
      question: "How many turns are in 1 gradian?",
      answer: "There are exactly 0.0025 turns in 1 gradian (1/400 of a turn). To convert any gradian value to turns, simply divide by 400 or multiply by 0.0025."
    },
    {
      question: "What is the formula to convert gradians to turns?",
      answer: "The conversion formula is Turn = Gradians / 400, or Turn = Gradians × 0.0025. To reverse the calculation, Gradians = Turn × 400."
    },
    {
      question: "How many gradians are in a quarter turn?",
      answer: "There are exactly 100 gradians in a quarter turn (0.25 turn). This corresponds to a 90-degree right angle or one quadrant."
    },
    {
      question: "Why does a full circle have 400 gradians but 1 turn?",
      answer: "The gradian was designed as a decimal metric unit where a right angle is 100 grads, making a full circle 400 grads. The turn defines one full 360-degree rotation as 1 single unit."
    },
    {
      question: "Is a turn the same as a revolution?",
      answer: "Yes. In plane geometry and physics, a turn, revolution, and complete cycle are synonymous terms for a full 360-degree circular rotation."
    },
    {
      question: "How do I convert 200 gradians to turns?",
      answer: "Divide 200 by 400: 200 / 400 = 0.5 turn. This represents a half-circle rotation, equal to 180 degrees or π radians."
    },
    {
      question: "Can turn values be greater than 1?",
      answer: "Yes. When describing multi-turn rotations (such as screw threads, drill shafts, or coiled wire), values exceed 1. For example, 1,200 grads equals 3.0 turns."
    },
    {
      question: "Is the conversion between gradian and turn exact?",
      answer: "Yes. The factor 0.0025 (1/400) is an exact rational terminating decimal. No irrational approximations or rounding are required."
    }
  ],
  relatedList: [
    { label: "Turn to Gradian", from: "turn-angle", to: "gradian" },
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" },
    { label: "Gradian to Revolution", from: "gradian", to: "revolution" },
    { label: "Gradian to Quadrant", from: "gradian", to: "quadrant-angle" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Space and time.",
    "NIST Guide to the SI: Units of Plane Angle.",
    "Bureau International des Poids et Mesures (BIPM) Non-SI Units."
  ]
};
