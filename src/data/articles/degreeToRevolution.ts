import { CustomArticleData } from "./types";

export const degreeToRevolution: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "revolution",
  seoTitle: "Degree to Revolution Conversion (° to rev) | UnitsConvertors.com",
  metaDescription: "Convert degrees to revolutions (rev/turn) accurately using the formula (rev = ° / 360). Learn rotational dynamics, motor speed calculations, worked examples, and FAQs.",
  h1: "Degree to Revolution Conversion",
  introduction: [
    "The degree (°) and the revolution (symbol: rev, also known as turn, full circle, or cycle) represent rotational angle measurements across geometry, mechanical engineering, and motor control. While degrees divide a single turn into 360 sexagesimal increments, a revolution represents one complete $360^\\circ$ rotation.",
    "Converting degrees to revolutions involves dividing the angle in degrees by 360 (or multiplying by $1/360 \\approx 0.00277777778$). For example, a $180^\\circ$ turn corresponds to $180 / 360 = 0.5$ revolutions (half a turn), whereas a $720^\\circ$ rotation equals exactly 2 full revolutions.",
    "Understanding the conversion between degrees and revolutions is essential in motor shaft velocity (RPM), CNC machining indexing, engine crankshaft cycles, wind turbine rotor tracking, and planetary orbit calculations. This guide covers formulas, step-by-step examples, reference tables, and practical applications."
  ],
  quickAnswer: {
    text: "To convert degrees to revolutions, divide the degree value by 360. For example, 90 degrees equals 90 / 360 = 0.25 revolutions (quarter turn).",
    formulaDisplay: "Revolutions (rev) = Degrees (°) ÷ 360 = Degrees × 0.00277778",
    subtext: "1 Degree = 0.0027777778 Revolution | 360 Degrees = 1 Full Revolution"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angular measurement defining 1/360th of a complete circle rotation, standard across geometry, navigation, and engineering."
  },
  aboutTargetUnit: {
    title: "What is a Revolution (rev)?",
    text: "A revolution (symbol: rev, turn, cycle, or r) is a unit of angle equal to one full $360^\\circ$ rotation around an axis ($2\\pi$ radians or 400 gradians)."
  },
  relationship: "One complete revolution equals 360 degrees. Dividing degrees by 360 converts partial or multi-turn degree angles into fractional or whole revolution counts.",
  relationshipTitle: "Key Rotational Angle Equivalents",
  relationshipItems: [
    { label: "45° Diagonal Angle", value: "0.125 rev (1/8 turn)" },
    { label: "90° Right Angle", value: "0.25 rev (1/4 turn)" },
    { label: "180° Half Circle", value: "0.5 rev (1/2 turn)" },
    { label: "270° Three-Quarter Circle", value: "0.75 rev (3/4 turn)" },
    { label: "360° One Full Turn", value: "1.0 rev (1 turn)" },
    { label: "720° Two Full Turns", value: "2.0 rev (2 turns)" }
  ],
  formula: {
    text: "Divide the angle in degrees by 360.",
    math: "Angle (rev) = \\frac{\\text{Angle }(^\\circ)}{360}",
    subtext: "Equivalent decimal multiplier: Degrees × 0.00277777778."
  },
  formulaTitle: "Degree to Revolution Conversion Formula",
  practicalTip: {
    title: "4-Stroke Engine Crankshaft Rule",
    text: "In a four-stroke internal combustion engine, one complete thermodynamic cycle (intake, compression, power, exhaust) requires $720^\\circ$ of crankshaft rotation, which equals exactly 2.0 revolutions."
  },
  expertNote: {
    title: "Stepper Motor Indexing Precision",
    text: "Industrial microstepping motors divide 1 revolution ($360^\\circ$) into thousands of discrete microsteps (e.g., a 1.8°/step motor produces 200 full steps per revolution)."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 540 Degrees to Revolutions",
        subtitle: "Calculate revolutions for a motor shaft turn of 540°.",
        steps: [
          "Identify degree value: 540°.",
          "Apply formula: rev = 540 / 360.",
          "Simplify fraction: 540 / 360 = 1.5.",
          "Final Result: 540° equals 1.5 revolutions (1.5 turns)."
        ]
      },
      {
        title: "Example 2: Convert 1,080 Degrees to Revolutions",
        subtitle: "Determine full revolutions for an acrobat spin of 1,080°.",
        steps: [
          "Identify degree value: 1,080°.",
          "Apply formula: rev = 1,080 / 360.",
          "Calculate: 1,080 / 360 = 3.0.",
          "Final Result: 1,080° equals 3.0 full revolutions."
        ]
      },
      {
        title: "Example 3: Convert 45 Degrees to Revolutions",
        subtitle: "Convert a 45° angle into fractional revolutions.",
        steps: [
          "Identify degree value: 45°.",
          "Apply formula: rev = 45 / 360.",
          "Simplify fraction: 45 / 360 = 1 / 8 = 0.125.",
          "Final Result: 45° equals 0.125 revolutions (1/8 turn)."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Revolution Conversion Reference Table",
    headers: ["Degrees (°)", "Revolutions (rev)", "Exact Turn Fraction", "Mechanical & Motor Engineering Context"],
    rows: [
      { fromVal: "1°", toVal: "0.002778 rev", extra: "1 / 360 rev", extra2: "Single degree incremental rotary position" },
      { fromVal: "30°", toVal: "0.083333 rev", extra: "1 / 12 rev", extra2: "Clock hour hand 1-hour sweep angle" },
      { fromVal: "45°", toVal: "0.125 rev", extra: "1 / 8 rev", extra2: "Octagonal indexing rotary step" },
      { fromVal: "90°", toVal: "0.25 rev", extra: "1 / 4 rev", extra2: "Quarter turn / perpendicular indexing" },
      { fromVal: "180°", toVal: "0.5 rev", extra: "1 / 2 rev", extra2: "Half turn reversal" },
      { fromVal: "270°", toVal: "0.75 rev", extra: "3 / 4 rev", extra2: "Three-quarter rotary sweep" },
      { fromVal: "360°", toVal: "1.0 rev", extra: "1 rev", extra2: "Single complete revolution" },
      { fromVal: "720°", toVal: "2.0 rev", extra: "2 rev", extra2: "Four-stroke IC engine complete thermodynamic cycle" },
      { fromVal: "1,440°", toVal: "4.0 rev", extra: "4 rev", extra2: "Four full revolutions" },
      { fromVal: "3,600°", toVal: "10.0 rev", extra: "10 rev", extra2: "Ten full motor shaft rotations" }
    ]
  },
  applications: {
    title: "Engineering & Dynamic Applications",
    items: [
      {
        title: "Rotational Speed & RPM Calculations",
        text: "Engineers convert angular position in degrees into total revolutions to calculate rotational speeds in revolutions per minute (RPM)."
      },
      {
        title: "CNC Machining & Rotary Indexing Tables",
        text: "Automated CNC mills convert g-code rotary axis degree commands (A/B/C axes) into lead screw revolutions."
      },
      {
        title: "Electric Motor Encoder Feedback",
        text: "Optical quadrature encoders measure motor shaft angular displacement in degrees and accumulate total revolution counts."
      },
      {
        title: "Athletics & Action Sports",
        text: "Skateboarding, snowboarding, and gymnastics track spin tricks by degree terms (e.g., '1080 spin' = 3 full revolutions)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Revolutions",
    items: [
      "Multiplying by 360 instead of dividing by 360 when converting degrees to revolutions.",
      "Confusing angular speed (degrees/second) with accumulated position (revolutions).",
      "Forgetting that negative angles represent counter-clockwise rotation in standard mathematical conventions.",
      "Truncating long decimal fractions for non-terminating turn fractions (e.g., 30° = 0.08333... rev)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to revolutions?",
      answer: "Divide the angle in degrees by 360. For example, 180° / 360 = 0.5 revolutions."
    },
    {
      question: "How many degrees are in 1 revolution?",
      answer: "There are exactly 360 degrees in 1 full revolution."
    },
    {
      question: "What is 90 degrees in revolutions?",
      answer: "90 degrees equals 0.25 revolutions (one quarter turn)."
    },
    {
      question: "What is 720 degrees in revolutions?",
      answer: "720 degrees equals 2.0 full revolutions."
    },
    {
      question: "Is a turn the same as a revolution?",
      answer: "Yes, 'turn', 'revolution', 'cycle', and 'full circle' are synonymous terms representing a 360-degree rotation."
    },
    {
      question: "How do you convert RPM to degrees per second?",
      answer: "Multiply RPM by 360 degrees and divide by 60 seconds (or multiply RPM by 6). For example, 10 RPM = 60 degrees per second."
    },
    {
      question: "What fraction of a revolution is 45 degrees?",
      answer: "45 degrees equals 1/8th of a revolution, or 0.125 rev."
    },
    {
      question: "What is 1,080 degrees in revolutions?",
      answer: "1,080 degrees equals 3.0 full revolutions."
    }
  ],
  relatedList: [
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and Time (Rotational Units)",
    "NEMA Standards Publication MG 1: Motors and Generators",
    "IEEE Standard 100: Dictionary of IEEE Standards Terms"
  ]
};
