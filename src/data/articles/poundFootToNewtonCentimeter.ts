import { CustomArticleData } from "./types";

export const poundFootToNewtonCentimeter: CustomArticleData = {
  fromUnitId: "pound-foot",
  toUnitId: "newton-centimeter",
  seoTitle: "Pound-Foot to Newton-Centimeter Converter (lb·ft to N·cm)",
  metaDescription: "Convert pound-feet to Newton-centimeters (lb·ft to N·cm) with precision. Formula, 135.58179 factor, electric motor and actuator examples, tables, and FAQs.",
  h1: "Pound-Foot to Newton-Centimeter Converter",
  introduction: [
    "The pound-foot (lb·ft, or foot-pound) and the Newton-centimeter (N·cm) are rotational torque units that connect imperial mechanical systems with metric mechatronic engineering. The pound-foot is the standard unit used across North America for engine torque ratings, heavy drive shafts, and structural bolting. In contrast, the Newton-centimeter is the standard metric unit used in automation, stepper motors, collaborative robotics, and precision electric actuators.",
    "Converting pound-feet to Newton-centimeters is essential when integrating American mechanical gearboxes with metric servo drives or interpreting imported actuator specifications. Because one pound-foot equals exactly 1.3558179483314004 Newton-meters, and one Newton-meter contains exactly 100 Newton-centimeters, one pound-foot equals exactly 135.58179483314 Newton-centimeters. Converting from lb·ft to N·cm requires multiplying by 135.5818.",
    "This technical guide explains the dimensional relationships between imperial and metric torque units, presents worked mechatronic engineering examples, details an extensive reference table, and provides expert guidance on motor selection."
  ],
  quickAnswer: {
    text: "To convert pound-feet to Newton-centimeters, multiply the torque value by 135.5818 (or divide by 0.00737562). For example, a small gasoline engine developing 5 lb·ft of torque produces approximately 677.91 N·cm of rotational effort.",
    formulaDisplay: "\\text{N·cm} = \\text{lb·ft} \\times 135.5818",
    subtext: "1 pound-foot equals exactly 135.5817948 Newton-centimeters (N·cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or lbf·ft) is the US customary unit of rotational torque. Defined as the turning moment resulting from one pound-force exerted at a perpendicular lever arm of one foot (1 lb·ft = 1 lbf × 1 ft), it is standard for industrial machinery, automotive engines, and heavy fastener torque tooling."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is a derived metric unit of torque. Representing the rotational effort produced by one Newton of force applied at a one-centimeter radius (1 N·cm = 0.01 N·m), it is the primary torque rating in European and Asian stepper motor datasheets, medical robotics, and precision motion control systems."
  },
  relationship: "The exact conversion formula derives from the fundamental definitions of the pound-force, foot, and centimeter: 1 lb·ft = 4.4482216152605 N × 0.3048 m × 100 cm/m = 135.58179483314 N·cm. Conversely, 1 N·cm = 1 / 135.58179483314 ≈ 0.0073756215 lb·ft.",
  relationshipTitle: "Imperial to Metric Mechatronic Scale",
  relationshipItems: [
    { label: "0.10 lb·ft", value: "13.56 N·cm (Precision instrument servo holding torque)" },
    { label: "0.50 lb·ft", value: "67.79 N·cm (Industrial NEMA 23 stepper motor)" },
    { label: "1.00 lb·ft", value: "135.58 N·cm (12 lb·in / small power screwdriver)" },
    { label: "5.00 lb·ft", value: "677.91 N·cm (Light lawnmower engine output shaft)" },
    { label: "10.0 lb·ft", value: "1,355.82 N·cm (Automotive water pump & timing bolts)" }
  ],
  formula: {
    text: "Multiply the torque in pound-feet by 135.581795 to calculate the equivalent torque in Newton-centimeters.",
    math: "\\tau_{(\\text{N·cm})} = \\tau_{(\\text{lb·ft})} \\times 135.581795",
    subtext: "To convert Newton-centimeters back to pound-feet, divide by 135.581795 (or multiply by 0.00737562)."
  },
  formulaTitle: "lb·ft to N·cm Exact Formula",
  practicalTip: {
    title: "Quick Mental Calculation Trick",
    text: "To approximate N·cm from lb·ft mentally: multiply by 135 (or multiply by 100 and add one-third, e.g., 4 lb·ft → 4 × 135 = 540 N·cm; exact is 542.33 N·cm)."
  },
  expertNote: {
    title: "Scale Bridging in Motion Control",
    text: "Converting between lb·ft and N·cm involves a large scale jump (over two orders of magnitude). Always double-check decimal placement in automated motion control software to prevent servo motor command saturation."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial CNC Stepper Motor Sizing",
        subtitle: "A lead screw drive mechanism requires 1.75 lb·ft of torque. Convert this to N·cm for selecting a metric stepper motor.",
        steps: [
          "Identify target torque: 1.75 lb·ft.",
          "Multiply by conversion factor: N·cm = 1.75 × 135.581795.",
          "Calculate: 1.75 × 135.581795 = 237.2681.",
          "Final Result: 1.75 lb·ft equals approximately 237.27 N·cm (select a ~250 N·cm stepper motor)."
        ]
      },
      {
        title: "Example 2: Lawn Care 4-Stroke Engine Shaft Torque",
        subtitle: "A small utility engine develops 6.5 lb·ft of torque at 2,800 RPM. Express this in N·cm.",
        steps: [
          "Starting value: 6.5 lb·ft.",
          "Apply formula: 6.5 × 135.581795 = 881.2817.",
          "Final Result: 6.5 lb·ft converts to 881.28 N·cm."
        ]
      },
      {
        title: "Example 3: Electric Linear Actuator Worm Drive",
        subtitle: "Convert 0.85 lb·ft of worm drive input torque to Newton-centimeters.",
        steps: [
          "Starting value: 0.85 lb·ft.",
          "Multiply by 135.581795: 0.85 × 135.581795 = 115.2445.",
          "Final Result: 0.85 lb·ft equals 115.24 N·cm."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Foot to Newton-Centimeter Reference Table",
    headers: ["Pound-Feet (lb·ft)", "Newton-Centimeters (N·cm)", "Mechatronics & Machinery Application"],
    rows: [
      { fromVal: "0.1 lb·ft", toVal: "13.56 N·cm", extra: "Camera pan-tilt motorized head" },
      { fromVal: "0.25 lb·ft", toVal: "33.90 N·cm", extra: "Desktop 3D printer axis stepper" },
      { fromVal: "0.5 lb·ft", toVal: "67.79 N·cm", extra: "NEMA 23 CNC milling machine axis drive" },
      { fromVal: "1.0 lb·ft", toVal: "135.58 N·cm", extra: "High-power brushless DC gimbal actuator" },
      { fromVal: "2.0 lb·ft", toVal: "271.16 N·cm", extra: "Collaborative robotic gripper joint" },
      { fromVal: "3.0 lb·ft", toVal: "406.75 N·cm", extra: "Automated warehouse AGV steering actuator" },
      { fromVal: "5.0 lb·ft", toVal: "677.91 N·cm", extra: "Small 2-stroke handheld engine torque" },
      { fromVal: "7.5 lb·ft", toVal: "1,016.86 N·cm", extra: "Electric lawnmower spindle motor" },
      { fromVal: "10 lb·ft", toVal: "1,355.82 N·cm", extra: "Automotive engine timing cover fastener" },
      { fromVal: "15 lb·ft", toVal: "2,033.73 N·cm", extra: "Spark plug tightening specification" },
      { fromVal: "20 lb·ft", toVal: "2,711.64 N·cm", extra: "Oil drain plug tightening torque" },
      { fromVal: "50 lb·ft", toVal: "6,779.09 N·cm", extra: "Automotive suspension pivot bolt" }
    ]
  },
  applications: {
    title: "Key Mechatronic & Industrial Uses",
    items: [
      {
        title: "Mechatronic Sizing & Stepper Motor Matching",
        text: "Engineers designing automated packaging machines convert US customary mechanical drive torque requirements (lb·ft) into metric N·cm to select matching European or Asian stepper and brushless DC motors."
      },
      {
        title: "Industrial Robotics & Joint Actuators",
        text: "Robotic arm design teams convert payload and reach moment calculations from imperial lb·ft into N·cm to evaluate harmonic drive gear reducer life ratings."
      },
      {
        title: "Power Tool & Assembly Line Automation",
        text: "Automated electric nutrunners on manufacturing assembly lines convert legacy blueprint torque values from lb·ft into digital N·cm encoder feedback parameters."
      },
      {
        title: "Aerospace Control Surface Actuation",
        text: "Unmanned aerial vehicle (UAV) flight control systems convert aerodynamic hinge moment calculations (lb·ft) into metric N·cm servo torque limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Confusing N·cm with N·m: 1 lb·ft equals 1.3558 N·m, but 135.58 N·cm. Mixing up meters and centimeters results in a 100-fold scaling error.",
      "Confusing N·cm with oz·in: 1 lb·ft = 192 oz·in = 135.58 N·cm. Do not confuse imperial ounce-inches with metric Newton-centimeters.",
      "Neglecting Motor Efficiency Losses: When converting required mechanical load torque (lb·ft) to electric motor torque (N·cm), always account for gearbox and bearing efficiency (typically 75%–90%).",
      "Inverting the Ratio: Dividing by 135.58 instead of multiplying will yield a value over 18,000 times too small."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-feet to Newton-centimeters?",
      answer: "Multiply the pound-foot (lb·ft) value by 135.5818. For example, 2 lb·ft × 135.5818 = 271.16 N·cm."
    },
    {
      question: "How many Newton-centimeters are in 1 pound-foot?",
      answer: "There are exactly 135.58179483 Newton-centimeters in 1 pound-foot (1 lb·ft = 135.5818 N·cm)."
    },
    {
      question: "What is 1 lb·ft in N·m vs N·cm?",
      answer: "1 lb·ft equals 1.355818 N·m (Newton-meters) and 135.5818 N·cm (Newton-centimeters)."
    },
    {
      question: "How do I convert N·cm back to pound-feet?",
      answer: "Divide the N·cm value by 135.5818 (or multiply by 0.00737562). For example, 500 N·cm ÷ 135.5818 = 3.69 lb·ft."
    },
    {
      question: "What is 5 lb·ft in N·cm?",
      answer: "5 lb·ft equals approximately 677.91 N·cm (5 × 135.5818 = 677.909 N·cm)."
    },
    {
      question: "Why do stepper motor catalogs use N·cm?",
      answer: "Stepper motors used in 3D printers and automation produce small torque values. Using N·cm gives clear, whole numbers (e.g., 45 N·cm instead of 0.45 N·m or 0.332 lb·ft)."
    },
    {
      question: "How many ounce-inches are in 1 N·cm?",
      answer: "1 N·cm equals approximately 1.41612 ounce-inches (oz·in)."
    },
    {
      question: "What is 10 lb·ft in N·cm?",
      answer: "10 lb·ft equals approximately 1,355.82 N·cm (10 × 135.5818 = 1355.818 N·cm)."
    }
  ],
  relatedList: [
    { label: "Pound-Foot to Newton-Meter", from: "pound-foot", to: "newton-meter" },
    { label: "Newton-Meter to Newton-Centimeter", from: "newton-meter", to: "newton-centimeter" },
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" },
    { label: "Pound-Foot to Dyne-Centimeter", from: "pound-foot", to: "dyne-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Newton-Meter to Newton-Centimeter Conversion Guide",
      description: "Convert SI metric torque into centimeter-scale ratings for robotics and stepper motors.",
      from: "newton-meter",
      to: "newton-centimeter"
    },
    {
      title: "Pound-Foot to Newton-Meter Conversion Guide",
      description: "Convert imperial foot-pounds into SI Newton-meters for automotive specifications.",
      from: "pound-foot",
      to: "newton-meter"
    }
  ],
  references: [
    "ISO 80000-4: Quantities and Units — Part 4: Mechanics",
    "NEMA Standards Publication ICS 16: Motion/Position Control Motors and Controls",
    "ASME B107.300: Manual Torque Tools — Precision Standards",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
