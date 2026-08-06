import { CustomArticleData } from "./types";

export const degreeToTurnAngle: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "turn-angle",
  seoTitle: "Degree to Turn Conversion (° to turn) | UnitsConvertors.com",
  metaDescription: "Convert degrees to turns accurately using the formula (turn = ° / 360). Learn rotational dynamics, geometry definitions, worked examples, and FAQs.",
  h1: "Degree to Turn Conversion",
  introduction: [
    "The degree (°) and the turn (symbol: turn, also designated as revolution, full circle, or cycle) represent two widely recognized units of plane angle. While degrees divide a complete rotation into 360 equal parts, a turn represents one full $360^\\circ$ rotation.",
    "In ISO 80000-3 terminology, the turn is recommended as a natural dimensionless unit for measuring large angular displacements and cyclical phenomena. Converting degrees to turns involves dividing the angle in degrees by 360 (or multiplying by $1/360 \\approx 0.00277777778$). For example, a $90^\\circ$ right angle equals $0.25$ turns (a quarter turn).",
    "Converting between degrees and turns is common in kinematics, robotics motion planning, electrical generator frequency calculations, propeller slip analysis, and mathematical topology. This guide provides formulas, step-by-step conversion examples, reference tables, and practical applications."
  ],
  quickAnswer: {
    text: "To convert degrees to turns, divide the degree value by 360. For example, 180 degrees equals 180 / 360 = 0.5 turns (half turn).",
    formulaDisplay: "Turns (turn) = Degrees (°) ÷ 360 = Degrees × 0.00277778",
    subtext: "1 Degree = 0.0027777778 Turn | 360 Degrees = 1 Full Turn"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and engineering."
  },
  aboutTargetUnit: {
    title: "What is a Turn?",
    text: "A turn (symbol: turn, cycle, or rev) is a unit of plane angle equal to 360 degrees, $2\\pi$ radians, or 400 gradians, representing one complete rotation around a central axis."
  },
  relationship: "One full turn equals 360 degrees. Dividing any degree angle by 360 converts it directly into a decimal or fractional turn count.",
  relationshipTitle: "Key Degree to Turn Angular Equivalents",
  relationshipItems: [
    { label: "45° Angle", value: "0.125 turn (1/8 turn)" },
    { label: "90° Right Angle", value: "0.25 turn (1/4 turn)" },
    { label: "180° Straight Angle", value: "0.5 turn (1/2 turn)" },
    { label: "270° Three-Quarter Angle", value: "0.75 turn (3/4 turn)" },
    { label: "360° Complete Rotation", value: "1.0 turn (1 full turn)" },
    { label: "720° Double Rotation", value: "2.0 turns (2 full turns)" }
  ],
  formula: {
    text: "Divide the angle in degrees by 360.",
    math: "Angle (turn) = \\frac{\\text{Angle }(^\\circ)}{360}",
    subtext: "Decimal multiplier formula: Turns = Degrees × 0.00277777778."
  },
  formulaTitle: "Degree to Turn Conversion Formula",
  practicalTip: {
    title: "Valve Stem Turn Ratio Rule",
    text: "Industrial multi-turn gate valves specify closing travel in total turns (e.g., 12 full turns). A handwheel rotation of $1,800^\\circ$ corresponds to $1,800 / 360 = 5.0$ turns."
  },
  expertNote: {
    title: "Tau (τ) Notation Connection",
    text: "In modern mathematics, tau ($\\tau = 2\\pi \\approx 6.283185$) represents the ratio of a circle's circumference to its radius. One turn equals $\\tau$ radians or $360^\\circ$, simplifying angle formulas."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 270 Degrees to Turns",
        subtitle: "Find the fractional turn equivalent of 270°.",
        steps: [
          "Identify degree value: 270°.",
          "Apply formula: turn = 270 / 360.",
          "Simplify fraction: 270 / 360 = 3 / 4 = 0.75.",
          "Final Result: 270° equals 0.75 turns (3/4 turn)."
        ]
      },
      {
        title: "Example 2: Convert 1,260 Degrees to Turns",
        subtitle: "Calculate turns for a multi-rotation shaft spin of 1,260°.",
        steps: [
          "Identify degree value: 1,260°.",
          "Apply formula: turn = 1,260 / 360.",
          "Calculate: 1,260 / 360 = 3.5.",
          "Final Result: 1,260° equals 3.5 turns."
        ]
      },
      {
        title: "Example 3: Convert 60 Degrees to Turns",
        subtitle: "Convert 60° into fractional turns.",
        steps: [
          "Identify degree value: 60°.",
          "Apply formula: turn = 60 / 360.",
          "Simplify fraction: 60 / 360 = 1 / 6 ≈ 0.166667.",
          "Final Result: 60° equals 0.166667 turns (1/6 turn)."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Turn Conversion Reference Table",
    headers: ["Degrees (°)", "Turns (turn)", "Fraction of Turn", "Practical & Kinematic Description"],
    rows: [
      { fromVal: "1°", toVal: "0.002778 turn", extra: "1 / 360 turn", extra2: "Single degree incremental step" },
      { fromVal: "15°", toVal: "0.041667 turn", extra: "1 / 24 turn", extra2: "1 hour of Earth diurnal rotation" },
      { fromVal: "30°", toVal: "0.083333 turn", extra: "1 / 12 turn", extra2: "30-degree sector" },
      { fromVal: "45°", toVal: "0.125 turn", extra: "1 / 8 turn", extra2: "Eighth turn / octagonal step" },
      { fromVal: "90°", toVal: "0.25 turn", extra: "1 / 4 turn", extra2: "Quarter turn / perpendicular right angle" },
      { fromVal: "180°", toVal: "0.5 turn", extra: "1 / 2 turn", extra2: "Half turn / straight line rotation" },
      { fromVal: "270°", toVal: "0.75 turn", extra: "3 / 4 turn", extra2: "Three-quarters turn" },
      { fromVal: "360°", toVal: "1.0 turn", extra: "1 turn", extra2: "One full turn (full revolution)" },
      { fromVal: "720°", toVal: "2.0 turns", extra: "2 turns", extra2: "Two full turns" },
      { fromVal: "1,800°", toVal: "5.0 turns", extra: "5 turns", extra2: "Five full turns" }
    ]
  },
  applications: {
    title: "Engineering & Applied Applications",
    items: [
      {
        title: "Robotics & Actuator Position Control",
        text: "Servo drives convert target joint positions expressed in degrees into multi-turn lead screw pitch turns."
      },
      {
        title: "Electrical Generator Phase Frequency",
        text: "AC synchronous generator rotors generate 1 electrical cycle per mechanical turn (for 2-pole machines)."
      },
      {
        title: "Threaded Fastener Installation",
        text: "Torque-angle tightening specifications require bolt heads to be rotated a set number of degrees or fractional turns beyond snug torque."
      },
      {
        title: "Wind Turbine Yaw Mechanism Tracking",
        text: "Turbine nacelle yaw motors track wind direction changes by counting total degrees or turns to avoid twisting internal cables."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Turns",
    items: [
      "Multiplying by 360 instead of dividing by 360 when converting degrees to turns.",
      "Confusing turn (360°) with quadrant (90°) or sextant (60°).",
      "Omitting negative signs for counter-clockwise rotation in directional kinematics.",
      "Rounding recurring decimals prematurely (e.g., 60° = 0.166667 turns)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to turns?",
      answer: "Divide the degree value by 360. For example, 90° / 360 = 0.25 turns."
    },
    {
      question: "How many degrees are in 1 turn?",
      answer: "There are exactly 360 degrees in 1 full turn."
    },
    {
      question: "What is 180 degrees in turns?",
      answer: "180 degrees equals exactly 0.5 turns (half a turn)."
    },
    {
      question: "Is a turn the same as a revolution?",
      answer: "Yes, 'turn' and 'revolution' are identical terms for a complete 360-degree rotation."
    },
    {
      question: "What fraction of a turn is 90 degrees?",
      answer: "90 degrees equals 1/4th of a turn (0.25 turns)."
    },
    {
      question: "What is 720 degrees in turns?",
      answer: "720 degrees equals 2.0 full turns."
    },
    {
      question: "How many radians are in 1 turn?",
      answer: "There are 2π radians (approximately 6.283185 radians) in 1 turn."
    },
    {
      question: "What is 1 degree in turns?",
      answer: "1 degree equals 1/360th of a turn, or approximately 0.00277778 turns."
    }
  ],
  relatedList: [
    { label: "Degree to Revolution", from: "degree", to: "revolution" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Quadrant", from: "degree", to: "quadrant-angle" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and Time (Turn Unit Standard)",
    "NIST Special Publication 330: Standard Units for Angular Motion",
    "IEEE Standard 100: Dictionary of Terms in Automation and Control"
  ]
};
