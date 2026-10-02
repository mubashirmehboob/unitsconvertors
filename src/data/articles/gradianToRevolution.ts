import { CustomArticleData } from "./types";

export const gradianToRevolution: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "revolution",
  seoTitle: "Gradian to Revolution Converter (grad to rev) | UnitsConvertors.com",
  metaDescription: "Convert gradians to revolutions (grad to rev / r) accurately. Explore the exact 400-to-1 ratio, rotary engineering formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-revolution",
  h1: "Gradian to Revolution Converter",
  introduction: [
    "The gradian (grad, or gon) and the revolution (rev, or full turn) represent two distinct perspectives on circular measurement. The gradian is a fractional metric unit devised during the French Revolution, dividing a full circular rotation into 400 equal gradian divisions (with 100 gradians forming a right angle). In contrast, the revolution is the fundamental whole-cycle rotational unit used in mechanical engineering, electric motor design, and orbital physics to represent one complete 360-degree rotation.",
    "Because one complete circular revolution contains exactly 400 gradians, the mathematical relationship is exact: 1 revolution = 400 gradians. Consequently, exactly one gradian represents one four-hundredth of a revolution (1/400 rev, or exactly 0.0025 rev).",
    "To convert gradians to revolutions, divide the gradian value by 400 (or multiply by 0.0025). Inversely, to convert from revolutions to gradians, multiply by 400. This practical engineering guide outlines the direct formulas, rotary machinery examples, and an authoritative conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert gradians to revolutions, divide the gradian value by 400 or multiply by 0.0025. For example, 100 gradians equals exactly 0.25 revolutions (one quarter turn), and 400 gradians equals 1 full revolution.",
    formulaDisplay: "Revolutions (rev) = Gradians / 400 = Gradians × 0.0025",
    subtext: "1 Revolution = 400 Gradians; 1 Gradian = 0.0025 Revolutions (1/400 rev)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal metric unit of angular measurement. Introduced in France in the 1790s, it standardizes angular division on base-10 multiples: 100 grads per quadrant, 200 grads per straight line, and 400 grads per circle. It is extensively used in European land surveying, civil tunneling, and rotary theodolite instrumentation."
  },
  aboutTargetUnit: {
    title: "Understanding the Revolution (rev / r)",
    text: "The revolution (symbol: rev, or r) is the primary unit of complete rotational displacement in mechanical engineering and physics. Representing a full 360-degree rotation of an object back to its initial orientation, revolutions are the basis for rotational speed (revolutions per minute, RPM), internal combustion engine cycles, centrifuge ratings, and satellite orbital periods."
  },
  relationship: "One complete revolution equals exactly 400 gradians. Inversely, one gradian equals exactly 1/400th of a revolution (0.0025 rev). Four right angles (4 × 100 grad) make one complete revolution.",
  relationshipTitle: "Gradian to Revolution Direct Equivalence",
  relationshipItems: [
    { label: "1 grad", value: "0.0025 rev" },
    { label: "50 grad", value: "0.1250 rev (1/8 turn)" },
    { label: "100 grad", value: "0.2500 rev (1/4 turn, Right Angle)" },
    { label: "200 grad", value: "0.5000 rev (1/2 turn, Straight Angle)" },
    { label: "300 grad", value: "0.7500 rev (3/4 turn)" },
    { label: "400 grad", value: "1.0000 rev (Full Revolution)" },
    { label: "800 grad", value: "2.0000 rev" }
  ],
  formula: {
    text: "Divide the angle in gradians by 400, or multiply by 0.0025, to obtain revolutions.",
    math: "\\text{Revolutions (rev)} = \\frac{\\text{grad}}{400} = \\text{grad} \\times 0.0025",
    subtext: "Inverse formula: grad = rev × 400"
  },
  formulaTitle: "Gradian to Revolution Conversion Formula",
  practicalTip: {
    title: "Quarter-Turn Reference Rule",
    text: "Remember that every 100 grads equals exactly 0.25 revolutions (one quarter turn). For example, 350 grads is 3 full quarter-turns plus half a quarter-turn: 3 × 0.25 + 0.125 = 0.875 revolutions."
  },
  expertNote: {
    title: "Rotational Speed vs Angular Position",
    text: "In industrial machinery, rotary encoders frequently output angular position in grads or degrees, which programmable logic controllers (PLCs) aggregate into total cumulative revolutions (RPM) for spindle tracking and tool positioning."
  },
  examples: {
    title: "Step-by-Step grad to rev Worked Examples",
    items: [
      {
        title: "Example 1: CNC Rotary Index Table Rotation",
        subtitle: "A machine tool indexer rotates through 250 grads. Determine the rotational displacement in revolutions.",
        steps: [
          "State the angular displacement: θ = 250 grad.",
          "Apply the conversion formula: rev = 250 / 400.",
          "Calculate: 250 / 400 = 0.625.",
          "Final Result: 250 grads equals exactly 0.625 revolutions (5/8 of a turn)."
        ]
      },
      {
        title: "Example 2: Multi-Turn Valve Handwheel Position",
        subtitle: "A pipeline gate valve handwheel is turned through 1,600 grads. How many complete revolutions does this represent?",
        steps: [
          "Identify the total angle: 1,600 grad.",
          "Divide by 400: 1,600 / 400 = 4.0.",
          "Final Result: 1,600 grads equals exactly 4.0 complete revolutions."
        ]
      },
      {
        title: "Example 3: Stepper Motor Micro-Step Indexing",
        subtitle: "A stepper motor indexes by 20 grads during an optical alignment procedure. Express this in revolutions.",
        steps: [
          "State the input: 20 grad.",
          "Multiply by 0.0025: 20 × 0.0025 = 0.05.",
          "Final Result: 20 grads corresponds to exactly 0.05 revolutions (1/20th of a turn)."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Revolution Conversion Reference Table",
    headers: ["Gradians (grad)", "Revolutions (rev)", "Degrees (°)", "Radians (rad)"],
    rows: [
      { fromVal: "10 grad", toVal: "0.0250 rev", extra: "9.00°", extra2: "0.1571 rad" },
      { fromVal: "25 grad", toVal: "0.0625 rev", extra: "22.50°", extra2: "0.3927 rad" },
      { fromVal: "50 grad", toVal: "0.1250 rev", extra: "45.00°", extra2: "0.7854 rad" },
      { fromVal: "100 grad", toVal: "0.2500 rev", extra: "90.00°", extra2: "1.5708 rad" },
      { fromVal: "150 grad", toVal: "0.3750 rev", extra: "135.00°", extra2: "2.3562 rad" },
      { fromVal: "200 grad", toVal: "0.5000 rev", extra: "180.00°", extra2: "3.1416 rad" },
      { fromVal: "250 grad", toVal: "0.6250 rev", extra: "225.00°", extra2: "3.9270 rad" },
      { fromVal: "300 grad", toVal: "0.7500 rev", extra: "270.00°", extra2: "4.7124 rad" },
      { fromVal: "350 grad", toVal: "0.8750 rev", extra: "315.00°", extra2: "5.4978 rad" },
      { fromVal: "400 grad", toVal: "1.0000 rev", extra: "360.00°", extra2: "6.2832 rad" }
    ]
  },
  applications: {
    title: "Mechanical & Industrial Applications of grad to rev",
    items: [
      {
        title: "Rotary Indexing Tables & Machine Tools",
        text: "Translating European engineering part specifications formatted in centesimal grads into machine tool rotary spindle revolutions."
      },
      {
        title: "Industrial Multi-Turn Actuator Setup",
        text: "Calibrating motorized pipeline valve position limit switches between total rotations and fractional gradian angles."
      },
      {
        title: "Tachometer & Rotary Speed Sensor Calibration",
        text: "Converting pulse counts per revolution into fractional gradian velocity curves in automated test benches."
      },
      {
        title: "Astronomical & Radar Pedestal Slew Positioning",
        text: "Tracking cumulative antenna azimuth revolutions during continuous tracking passes from angular encoder outputs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Revolution Conversions",
    items: [
      "Dividing by 360 instead of 400 (confusing degrees with gradians).",
      "Multiplying by 400 instead of dividing when converting from gradians to revolutions.",
      "Confusing revolutions (cycles) with radians (2π per revolution).",
      "Ignoring whole-turn integer counts when unwinding multi-turn rotary encoders."
    ]
  },
  faqs: [
    {
      question: "How many revolutions are in 1 gradian?",
      answer: "There are exactly 0.0025 revolutions in 1 gradian (1 / 400 rev)."
    },
    {
      question: "How many gradians are in 1 full revolution?",
      answer: "There are exactly 400 gradians in 1 full circular revolution."
    },
    {
      question: "What is the formula to convert gradians to revolutions?",
      answer: "The formula is: Revolutions = Gradians / 400, or Revolutions = Gradians × 0.0025."
    },
    {
      question: "How many revolutions are in 100 gradians?",
      answer: "100 gradians equals exactly 0.25 revolutions (one quarter turn, or 90 degrees)."
    },
    {
      question: "How many revolutions are in 200 gradians?",
      answer: "200 gradians equals exactly 0.5 revolutions (one half turn, or 180 degrees)."
    },
    {
      question: "How do I convert revolutions to gradians?",
      answer: "Multiply revolutions by 400. For example, 2.5 rev × 400 = 1,000 grads."
    },
    {
      question: "Is a revolution the same as a turn?",
      answer: "Yes, 'revolution', 'turn', 'cycle', and 'full circle' are synonymous terms for a complete 360-degree rotation."
    },
    {
      question: "Why does 1 revolution equal 400 grads instead of 360?",
      answer: "Because the gradian system was specifically designed as a decimal metric unit where a right angle is 100 grads. Since a circle has four right angles, a full revolution is 4 × 100 = 400 grads."
    }
  ],
  relatedList: [
    { label: "Gradian to Turn", from: "gradian", to: "turn-angle" },
    { label: "Gradian to Quadrant", from: "gradian", to: "quadrant-angle" },
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Revolution to Gradian", from: "revolution", to: "gradian" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "IEEE Standard 100: Authoritative Dictionary of IEEE Standards Terms."
  ]
};
