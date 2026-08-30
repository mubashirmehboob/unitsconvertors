import { CustomArticleData } from "./types";

export const radianToRevolution: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "revolution",
  seoTitle: "Radian to Revolution Converter (rad to rev) | UnitsConvertors.com",
  metaDescription: "Convert radians to revolutions (rad to rev/turn) accurately. Master the rotational mechanics formula (rev = rad / 2π), motor RPM conversions, tables, and worked examples.",
  h1: "Radian to Revolution Converter",
  introduction: [
    "Converting radians to revolutions bridges the theoretical mathematics of angular kinematics with the practical specifications of mechanical engineering, electric motor nameplates, gearbox ratios, and rotary encoder data.",
    "While the radian (rad) is the official SI unit for angle in calculus and vector physics (defined by arc length equal to radius), the revolution (symbol: rev, also referred to as a turn, cycle, or full rotation) represents one complete $360^\\circ$ rotation.",
    "Because one complete circle contains exactly $2\\pi$ radians (approximately 6.2831853 rad), converting radians to revolutions requires dividing the angle in radians by $2\\pi$ (or multiplying by $1 / (2\\pi) \\approx 0.159154943$). This relationship is the mathematical foundation for converting angular velocity in radians per second (rad/s) to rotational frequency in revolutions per minute (RPM). This guide presents the exact mathematical formulas, practical motor and turbine examples, conversion tables, and real-world engineering applications."
  ],
  quickAnswer: {
    text: "To convert radians to revolutions, divide the angle in radians by 2π (or multiply by 0.1591549). For example, 10 radians equals 10 / (2π) ≈ 1.59155 revolutions.",
    formulaDisplay: "\\text{Revolutions (rev)} = \\frac{\\text{Radians (rad)}}{2\\pi} \\approx \\text{Radians} \\times 0.159154943",
    subtext: "1 Radian ≈ 0.1591549 rev | 2π Radians = 1 Full Revolution (360°)"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI derived unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc equal in length to its radius. One complete revolution contains $2\\pi$ radians (≈ 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Revolution (rev)",
    text: "A revolution (symbol: rev, or turn) represents one full $360^\\circ$ rotation of a circular body around its central axis. It is the primary metric for specifying shaft speed (revolutions per minute, RPM), gearbox reductions, engine cycles, and rotary machinery."
  },
  relationship: "One complete revolution spans 360 degrees or $2\\pi$ radians. Therefore, dividing any angular displacement in radians by $2\\pi$ (≈ 6.283185307) yields the equivalent number of full rotations: $1\\text{ rad} = 1 / (2\\pi) \\approx 0.159154943\\text{ rev}$.",
  relationshipTitle: "Radian vs Revolution Angle Scale Comparison",
  relationshipItems: [
    { label: "π/2 Radians (90° Quarter Turn)", value: "0.250000 rev" },
    { label: "1.0 Radian (≈ 57.30°)", value: "≈ 0.159155 rev" },
    { label: "π Radians (180° Half Turn)", value: "0.500000 rev" },
    { label: "2π Radians (360° Full Turn)", value: "1.000000 rev" },
    { label: "10 Radians (≈ 572.96°)", value: "≈ 1.591549 rev" },
    { label: "100 Radians (≈ 5,729.58°)", value: "≈ 15.915494 rev" }
  ],
  formula: {
    text: "Divide the angle in radians by 2π (approximately 6.283185307), or multiply by 0.159154943.",
    math: "\\text{Revolutions (rev)} = \\frac{\\text{Angle (rad)}}{2\\pi} \\approx \\text{Angle (rad)} \\times 0.159154943",
    subtext: "Inverse formula: Radians (rad) = Revolutions (rev) × 2π ≈ Revolutions × 6.283185307"
  },
  formulaTitle: "Radian to Revolution Conversion Formula",
  practicalTip: {
    title: "Converting Angular Velocity (rad/s) to RPM",
    text: "To convert angular speed from radians per second (rad/s) to revolutions per minute (RPM), multiply by 60 / (2π) ≈ 9.549297. For example, 100 rad/s × 9.5493 = 954.93 RPM."
  },
  expertNote: {
    title: "Why Calculus & Physics Prefer Radians",
    text: "In rotational dynamics formulas like torque power (P = τ · ω) and kinetic energy (E_k = ½ I ω²), the angular velocity ω must be expressed in radians per second (rad/s), not revolutions per second, to avoid carrying an artificial factor of 2π through every derivation."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Electric Servo Motor Shaft Displacement",
        subtitle: "An automated CNC ball-screw motor rotates through a total angular displacement of 75.4 radians during a machining cycle. Calculate the total number of spindle revolutions.",
        steps: [
          "State given angle: 75.4 radians.",
          "Apply conversion formula: rev = 75.4 / (2π).",
          "Perform calculation: 75.4 / 6.2831853 = 12.00028 revolutions.",
          "Final Result: The motor completed exactly 12.0 revolutions."
        ]
      },
      {
        title: "Example 2: Laboratory Centrifuge Rotor Run",
        subtitle: "A blood centrifuge accelerates for 5 seconds, accumulating 3,141.6 radians of angular movement. How many full revolutions did the rotor complete?",
        steps: [
          "State value: 3,141.6 rad.",
          "Multiply by reciprocal constant: 3,141.6 × 0.159154943 = 500.001 rev.",
          "Final Result: The centrifuge rotor completed approximately 500 revolutions."
        ]
      },
      {
        title: "Example 3: Wind Turbine Blade Rotation",
        subtitle: "A wind turbine blade sweeps through 4.712 radians (3π/2 rad) during a grid synchronization test. Express this angular rotation in revolutions.",
        steps: [
          "State angle: 4.71239 radians (1.5π rad).",
          "Divide by 2π: (1.5π) / (2π) = 1.5 / 2 = 0.75 rev.",
          "Final Result: The turbine blade swept through 0.75 revolutions (a three-quarter turn)."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Revolution Conversion Reference Table",
    headers: ["Radians (rad)", "Revolutions (rev / turn)", "Degrees (°)", "Gradians (grad)", "Mechanical Meaning"],
    rows: [
      { fromVal: "π/6 rad (0.5236 rad)", toVal: "0.0833 rev (1/12)", extra: "30.00°", extra2: "33.33 grad", extra3: "Clock 1-hour hand jump" },
      { fromVal: "π/4 rad (0.7854 rad)", toVal: "0.1250 rev (1/8)", extra: "45.00°", extra2: "50.00 grad", extra3: "One-eighth turn" },
      { fromVal: "1.0 rad", toVal: "0.1592 rev", extra: "57.30°", extra2: "63.66 grad", extra3: "1.0 Radian arc standard" },
      { fromVal: "π/2 rad (1.5708 rad)", toVal: "0.2500 rev (1/4)", extra: "90.00°", extra2: "100.0 grad", extra3: "Quarter turn (right angle)" },
      { fromVal: "2.0 rad", toVal: "0.3183 rev", extra: "114.59°", extra2: "127.3 grad", extra3: "Double radian rotation" },
      { fromVal: "π rad (3.1416 rad)", toVal: "0.5000 rev (1/2)", extra: "180.00°", extra2: "200.0 grad", extra3: "Half turn (straight angle)" },
      { fromVal: "3π/2 rad (4.7124 rad)", toVal: "0.7500 rev (3/4)", extra: "270.00°", extra2: "300.0 grad", extra3: "Three-quarter rotation" },
      { fromVal: "2π rad (6.2832 rad)", toVal: "1.0000 rev", extra: "360.00°", extra2: "400.0 grad", extra3: "One complete revolution" },
      { fromVal: "10 rad", toVal: "1.5915 rev", extra: "572.96°", extra2: "636.6 grad", extra3: "Multi-turn shaft travel" },
      { fromVal: "4π rad (12.566 rad)", toVal: "2.0000 rev", extra: "720.00°", extra2: "800.0 grad", extra3: "Four-stroke engine cycle" },
      { fromVal: "100 rad", toVal: "15.9155 rev", extra: "5,729.58°", extra2: "6,366.2 grad", extra3: "High-speed rotor burst" }
    ]
  },
  applications: {
    title: "Mechanical Engineering & Control Systems Applications",
    items: [
      {
        title: "Electric Motor & Drive Engineering",
        text: "Motor control algorithms (FOC/vector control) integrate electromagnetic phase angles in radians and output shaft positions to mechanical engineers in revolutions or RPM."
      },
      {
        title: "Gearbox & Transmission Sizing",
        text: "Mechanical designers translate input angular displacement (radians) through planetary gear reduction ratios to calculate output shaft revolutions."
      },
      {
        title: "Robotics & Multi-Axis Motion Control",
        text: "Kinematic solvers convert joint rotation angles in radians into actuator motor encoder turn counts to execute precise path trajectories."
      },
      {
        title: "Automotive Engine Dynamics",
        text: "Crankshaft angular positions are computed in radians during combustion cycle modeling and displayed in crankshaft revolutions (720° per 4-stroke cycle)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Revolution Conversions",
    items: [
      "Multiplying by 2π instead of dividing, producing a value ~40 times larger than the true answer.",
      "Confusing angular displacement (radians or rev) with rotational speed (rad/s or RPM), forgetting the time factor (60 seconds/minute).",
      "Omitting parentheses when calculating in code: writing `rad / 2 * Math.PI` instead of `rad / (2 * Math.PI)`.",
      "Assuming 1 radian equals 1 revolution (1 radian is only ≈ 0.159 rev or 57.3°)."
    ]
  },
  faqs: [
    {
      question: "How many revolutions are in 1 radian?",
      answer: "One radian equals 1 / (2π) revolutions, which is approximately 0.159154943 revolutions (about 15.9% of a full turn)."
    },
    {
      question: "How many radians make up 1 full revolution?",
      answer: "One full revolution contains exactly 2π radians, which is approximately 6.283185307 radians (360 degrees)."
    },
    {
      question: "What is the formula to convert radians to revolutions?",
      answer: "The formula is: Revolutions (rev) = Radians / (2π) = Radians × 0.159154943."
    },
    {
      question: "How do I convert radians per second (rad/s) to RPM (revolutions per minute)?",
      answer: "Multiply the rad/s value by 60 / (2π) ≈ 9.549297. For example, 100 rad/s × 9.5493 = 954.93 RPM."
    },
    {
      question: "Is a revolution the same as a turn?",
      answer: "Yes. In mathematics and engineering, 'revolution', 'turn', 'cycle', and 'full circle' are synonymous terms representing a 360-degree (2π radian) rotation."
    },
    {
      question: "How many revolutions is 2π radians?",
      answer: "2π radians equals exactly 1.0 full revolution (360 degrees)."
    },
    {
      question: "Why do engineers use revolutions instead of radians on machinery?",
      answer: "Revolutions provide an intuitive, countable metric for human operators (e.g., counting shaft rotations or reading tachometers in RPM), whereas radians are preferred in mathematical formulas."
    },
    {
      question: "How many revolutions is π radians?",
      answer: "π radians equals exactly 0.5 revolutions (a half turn or 180 degrees)."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Turn", from: "radian", to: "turn-angle" },
    { label: "Degree to Revolution", from: "degree", to: "revolution" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "NIST Guide for the Use of the International System of Units (SP 811).",
    "IEEE Standard 100: Standard Dictionary of Electrical and Electronics Terms."
  ]
};
