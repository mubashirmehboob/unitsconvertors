import { CustomArticleData } from "./types";

export const newtonMeterToNewtonCentimeter: CustomArticleData = {
  fromUnitId: "newton-meter",
  toUnitId: "newton-centimeter",
  seoTitle: "Newton-Meter to Newton-Centimeter Converter (N·m to N·cm)",
  metaDescription: "Convert Newton-meters to Newton-centimeters (N·m to N·cm) instantly. Exact 100x decimal scale factor, formula, robotics and servo examples, tables, and FAQs.",
  h1: "Newton-Meter to Newton-Centimeter Converter",
  introduction: [
    "The Newton-meter (N·m) and the Newton-centimeter (N·cm) are metric units of rotational torque belonging to the International System of Units (SI). Both units measure the moment of force, differing only in the length scale of the radial moment arm. While the Newton-meter is the coherent SI base derived unit for large mechanical assemblies and engines, the Newton-centimeter is the standard metric unit for small electric motors, RC servo actuators, precision optical mounts, and miniature robotics.",
    "Converting Newton-meters to Newton-centimeters is straightforward because the metric system relies on powers of ten. Since one meter contains exactly 100 centimeters (1 m = 100 cm), one Newton of force applied at one meter produces one hundred times the torque of that same force applied at one centimeter. Therefore, 1 Newton-meter equals exactly 100 Newton-centimeters (1 N·m = 100 N·cm).",
    "This guide provides the exact scaling formulas, explains when to use N·cm over N·m in mechatronic sizing, presents worked precision motor examples, and provides a clear conversion table for robotics and electronics designers."
  ],
  quickAnswer: {
    text: "To convert Newton-meters to Newton-centimeters, multiply the torque value by 100 (shift the decimal point two places to the right). For example, a robotic stepper motor delivering 0.45 N·m produces exactly 45 N·cm of holding torque.",
    formulaDisplay: "\\text{N·cm} = \\text{N·m} \\times 100",
    subtext: "1 Newton-meter equals exactly 100 Newton-centimeters."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Meter (N·m)",
    text: "The Newton-meter (symbol: N·m) is the coherent SI unit for torque and moment of force. Defined as one Newton of force acting perpendicularly at a radius of one meter (1 N·m = 1 N × 1 m), it is the primary standard for industrial machinery, automotive engines, structural bolts, and wind turbines."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is a submultiple SI metric unit of torque. It represents the rotational moment produced by one Newton of force acting at a one-centimeter lever arm (1 N·cm = 1 N × 0.01 m = 0.01 N·m). It is the predominant torque rating found in stepper motor datasheets (NEMA 14, NEMA 17, NEMA 23), hobby RC servos, 3D printers, and dental handpieces."
  },
  relationship: "Because the centimeter is defined as $10^{-2}$ meters (0.01 m), the relationship is exact and invariable: 1 N·m = 100 N·cm. Conversely, 1 N·cm = 0.01 N·m ($10^{-2}\\text{ N·m}$).",
  relationshipTitle: "Metric Torque Scaling Comparison",
  relationshipItems: [
    { label: "0.01 N·m", value: "1.00 N·cm (Micro drone coreless servo motor)" },
    { label: "0.10 N·m", value: "10.0 N·cm (Miniature 3D printer extruder stepper)" },
    { label: "0.45 N·m", value: "45.0 N·cm (Standard NEMA 17 3D printer axis motor)" },
    { label: "1.00 N·m", value: "100 N·cm (NEMA 23 industrial CNC stepper motor)" },
    { label: "5.00 N·m", value: "500 N·cm (Heavy collaborative robotic joint actuator)" }
  ],
  formula: {
    text: "Multiply the torque value in Newton-meters by 100 to obtain the equivalent torque in Newton-centimeters.",
    math: "\\tau_{(\\text{N·cm})} = \\tau_{(\\text{N·m})} \\times 100",
    subtext: "To convert Newton-centimeters back to Newton-meters, divide by 100 (multiply by 0.01)."
  },
  formulaTitle: "N·m to N·cm Exact Formula",
  practicalTip: {
    title: "Instant Decimal Conversion",
    text: "Because the factor is exactly 100, simply move the decimal point two digits to the right to go from N·m to N·cm (e.g., 0.28 N·m becomes 28 N·cm)."
  },
  expertNote: {
    title: "Mechatronics Datasheet Conventions",
    text: "Stepper motor manufacturers (such as Moons', Lin Engineering, and StepperOnline) frequently switch between N·m, N·cm, and oz·in. Using N·cm avoids fractional decimals like '0.045 N·m', making motor holding torque graphs easier to read."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: 3D Printer NEMA 17 Stepper Motor",
        subtitle: "A NEMA 17 stepper motor datasheet specifies a holding torque of 0.59 N·m. Express this in N·cm.",
        steps: [
          "Identify initial metric torque: 0.59 N·m.",
          "Multiply by the scale factor: N·cm = 0.59 × 100.",
          "Calculate: 0.59 × 100 = 59.0.",
          "Final Result: 0.59 N·m equals exactly 59 N·cm of holding torque."
        ]
      },
      {
        title: "Example 2: Surgical Robot Articulated Joint",
        subtitle: "A precision brushless DC joint motor develops a peak stall torque of 1.45 N·m. Convert to N·cm.",
        steps: [
          "Starting value: 1.45 N·m.",
          "Apply formula: 1.45 × 100 = 145.0.",
          "Final Result: 1.45 N·m equals 145 N·cm."
        ]
      },
      {
        title: "Example 3: Miniature Dial Indicator Spring",
        subtitle: "A metrology dial return spring exerts 0.035 N·m of preload torque. Find the value in N·cm.",
        steps: [
          "Starting value: 0.035 N·m.",
          "Multiply by 100: 0.035 × 100 = 3.5.",
          "Final Result: 0.035 N·m equals exactly 3.5 N·cm."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Meter to Newton-Centimeter Reference Table",
    headers: ["Newton-Meters (N·m)", "Newton-Centimeters (N·cm)", "Robotics & Electronics Application"],
    rows: [
      { fromVal: "0.01 N·m", toVal: "1 N·cm", extra: "Micro RC helicopter tail rotor servo" },
      { fromVal: "0.05 N·m", toVal: "5 N·cm", extra: "Pan-tilt camera gimbal stabilization motor" },
      { fromVal: "0.10 N·m", toVal: "10 N·cm", extra: "Optical lens focusing actuator" },
      { fromVal: "0.25 N·m", toVal: "25 N·cm", extra: "Compact NEMA 14 stepper motor" },
      { fromVal: "0.40 N·m", toVal: "40 N·cm", extra: "Standard desktop 3D printer axis drive" },
      { fromVal: "0.50 N·m", toVal: "50 N·cm", extra: "High-torque NEMA 17 stepper motor (48mm body)" },
      { fromVal: "0.75 N·m", toVal: "75 N·cm", extra: "Laser cutter galvo mirror positioning motor" },
      { fromVal: "1.00 N·m", toVal: "100 N·cm", extra: "Entry-level NEMA 23 CNC milling axis" },
      { fromVal: "1.50 N·m", toVal: "150 N·cm", extra: "Robotic arm elbow joint servomotor" },
      { fromVal: "2.00 N·m", toVal: "200 N·cm", extra: "Heavy industrial CNC router ballscrew motor" },
      { fromVal: "3.00 N·m", toVal: "300 N·cm", extra: "Automated warehouse AGV steering motor" },
      { fromVal: "5.00 N·m", toVal: "500 N·cm", extra: "Collaborative robot base joint gearbox" }
    ]
  },
  applications: {
    title: "Primary Mechatronic & Engineering Uses",
    items: [
      {
        title: "3D Printing & Desktop CNC Motion Control",
        text: "Stepper motor selection for Cartesian, CoreXY, and Delta 3D printers relies on N·cm holding torque specs to ensure rapid accelerations without skipped steps."
      },
      {
        title: "RC Servos & Drone Gimbal Actuators",
        text: "Hobby and commercial drone actuators specify stall torque in N·cm or kg·cm to calculate aerodynamic surface deflection authority at high flight speeds."
      },
      {
        title: "Medical Devices & Dental Tools",
        text: "Surgical drills, dental handpieces, and infusion pump motors operate at low torque thresholds measured in Newton-centimeters to prevent tissue damage or structural failure."
      },
      {
        title: "Optical & Precision Metrology Positioning",
        text: "Piezoelectric and voice coil rotational stages quantify positioning torque in N·cm to maintain sub-micron angular stability."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting N·m to N·cm",
    items: [
      "Dividing Instead of Multiplying: Because a centimeter is smaller than a meter, a given torque will have a larger numerical value in N·cm. Dividing by 100 yields a result 10,000 times too small.",
      "Confusing N·cm with N·mm: 1 N·m = 1,000 N·mm. Ensure you are not confusing millimeter-based engineering drawings with centimeter-based motor catalogs.",
      "Confusing N·cm with kg·cm: 1 kg·cm ≈ 9.80665 N·cm. A 10 kg·cm hobby servo actually delivers approximately 98 N·cm (almost 1 N·m).",
      "Overlooking Dynamic vs Holding Torque: Holding torque at zero RPM is higher than dynamic running torque at high step rates. Always inspect torque-speed curves."
    ]
  },
  faqs: [
    {
      question: "How do I convert N·m to N·cm?",
      answer: "Multiply the Newton-meter (N·m) value by 100. For example, 0.45 N·m × 100 = 45 N·cm."
    },
    {
      question: "How many N·cm are in 1 N·m?",
      answer: "There are exactly 100 Newton-centimeters in 1 Newton-meter (1 N·m = 100 N·cm)."
    },
    {
      question: "What is 1 N·cm in N·m?",
      answer: "1 N·cm equals exactly 0.01 N·m (divide N·cm by 100)."
    },
    {
      question: "Why do stepper motor datasheets use N·cm?",
      answer: "Stepper motors for desktop 3D printers and automation typically produce between 0.1 and 3.0 N·m. Using N·cm allows whole numbers (10 to 300 N·cm) rather than decimal fractions, making ratings easier to read and compare."
    },
    {
      question: "How do I convert N·cm to kg·cm?",
      answer: "Divide the N·cm value by 9.80665 (or multiply by 0.101972). For example, 98 N·cm ÷ 9.80665 ≈ 10 kg·cm."
    },
    {
      question: "How do I convert N·cm to ounce-inches (oz·in)?",
      answer: "Multiply N·cm by 1.41612. For example, 50 N·cm × 1.41612 = 70.81 oz·in."
    },
    {
      question: "What is 0.5 N·m in N·cm?",
      answer: "0.5 N·m equals exactly 50 N·cm."
    },
    {
      question: "Is Newton-centimeter an official SI unit?",
      answer: "Yes, the Newton-centimeter is an approved SI metric derived submultiple unit, formed by combining the coherent unit Newton with the SI prefix 'centi-' on the meter."
    }
  ],
  relatedList: [
    { label: "Newton-Meter to Dyne-Centimeter", from: "newton-meter", to: "dyne-centimeter" },
    { label: "Newton-Meter to Pound-Inch", from: "newton-meter", to: "pound-inch" },
    { label: "Newton-Meter to Pound-Foot", from: "newton-meter", to: "pound-foot" },
    { label: "Pound-Foot to Newton-Centimeter", from: "pound-foot", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Newton-Meter to Dyne-Centimeter Conversion Guide",
      description: "Convert SI torque to CGS units for micro-electromechanical systems and scientific instruments.",
      from: "newton-meter",
      to: "dyne-centimeter"
    },
    {
      title: "Newton-Meter to Pound-Inch Conversion Guide",
      description: "Convert metric torque into imperial inch-pounds for precision drivers and fasteners.",
      from: "newton-meter",
      to: "pound-inch"
    }
  ],
  references: [
    "ISO 80000-4: Quantities and Units — Mechanics",
    "BIPM SI Brochure: The International System of Units (9th Edition)",
    "NEMA Standards Publication ICS 16: Motion/Position Control Motors and Controls",
    "IEEE Standard 100: Dictionary of Electrical and Electronic Terms"
  ]
};
