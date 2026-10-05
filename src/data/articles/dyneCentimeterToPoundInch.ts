import { CustomArticleData } from "./types";

export const dyneCentimeterToPoundInch: CustomArticleData = {
  fromUnitId: "dyne-centimeter",
  toUnitId: "pound-inch",
  seoTitle: "Dyne-Centimeter to Pound-Inch Converter (dyn·cm to lb·in)",
  metaDescription: "Convert dyne-centimeters to pound-inches (dyn·cm to lb·in) with instant precision. Exact factor, formula, electronics and MEMS examples, charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/torque/dyne-centimeter-to-pound-inch",
  h1: "Dyne-Centimeter to Pound-Inch Converter",
  introduction: [
    "The dyne-centimeter (dyn·cm) and the pound-inch (lb·in, commonly written as in·lb or inch-pound) are specialized torque units used in high-precision mechanical assemblies and scientific research. The dyne-centimeter is the coherent unit of torque and rotational work in the centimeter-gram-second (CGS) metric system, extensively employed in micro-electromechanical systems (MEMS), galvanometer coils, watch balance hairsprings, and atomic force microscopy. The pound-inch is the primary imperial unit in North America for low-range torque screwdrivers, avionics hardware, and electronic enclosure assembly.",
    "Converting from dyne-centimeters to pound-inches requires translating microscopic CGS physical moments into imperial fastener specifications. Because one dyne equals 10⁻⁵ Newtons and one centimeter equals 10⁻² meters, one dyne-centimeter equals exactly 10⁻⁷ Newton-meters. Comparing this with the pound-inch (1 lb·in ≈ 0.1129848 N·m) shows that one pound-inch contains approximately 1,129,848.3 dyne-centimeters. Conversely, one dyne-centimeter is equivalent to approximately 8.85075 × 10⁻⁷ pound-inches.",
    "Engineers and technicians routinely perform this conversion when translating micro-actuator torque test curves into US assembly torque screwdriver limits, preventing stripped threads in delicate aerospace and medical electronics. This guide provides the complete mathematical relationship, step-by-step worked examples, reference conversion charts, common mistakes, and expert manufacturing recommendations."
  ],
  quickAnswer: {
    text: "To convert dyne-centimeters to pound-inches, multiply the torque value by 8.85075 × 10⁻⁷ (or divide by 1,129,848). For example, 1,000,000 dyn·cm equals approximately 0.8851 lb·in (inch-pounds).",
    formulaDisplay: "\\text{lb·in} = \\text{dyn·cm} \\times 8.85075 \\times 10^{-7} = \\frac{\\text{dyn·cm}}{1{,}129{,}848}",
    subtext: "1 dyne-centimeter equals approximately 8.85075 × 10⁻⁷ pound-inches (1 lb·in ≈ 1,129,848 dyn·cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne-Centimeter (dyn·cm)",
    text: "The dyne-centimeter (symbol: dyn·cm) is the standard CGS metric unit of torque and moment of force. It represents the rotational turning effect produced by one dyne of force acting perpendicularly at a radius of one centimeter (1 dyn·cm = 1 dyn × 1 cm = 10⁻⁷ N·m = 1 erg). It is universally applied across micro-fluidics, semiconductor MEMS devices, and precision horology."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in·lb) is an imperial unit of torque defined as one avoirdupois pound-force applied perpendicularly at a distance of one inch from the axis of rotation (1 lb·in = 1 lbf × 1 in = 1/12 lb·ft ≈ 0.112985 N·m). It is the premier standard for precision torque screwdrivers, electronics assembly lines, and aerospace instrumentation."
  },
  relationship: "One international inch is defined as exactly 2.54 centimeters, and one pound-force is defined as exactly 4.4482216152605 Newtons. In the CGS system, 1 N = 100,000 dynes. Therefore: 1 lb·in = 4.4482216152605 N × 100,000 dyn/N × 2.54 cm = 1,129,848.290276167 dyn·cm. Taking the reciprocal yields 1 dyn·cm = 1 / 1,129,848.29 ≈ 8.85074579133 × 10⁻⁷ lb·in.",
  relationshipTitle: "Low-Range Torque Scale Comparison",
  relationshipItems: [
    { label: "10,000 dyn·cm", value: "0.00885 lb·in (Galvanometer needle movement)" },
    { label: "100,000 dyn·cm", value: "0.08851 lb·in (Micro-servo actuator / 1 N·cm)" },
    { label: "1,000,000 dyn·cm", value: "0.88507 lb·in (Precision camera gimbal motor)" },
    { label: "1,129,848 dyn·cm", value: "1.00000 lb·in (Direct 1 lb·in parity threshold)" },
    { label: "5,000,000 dyn·cm", value: "4.42537 lb·in (Standard NEMA 17 3D printer motor)" }
  ],
  formula: {
    text: "Multiply the torque in dyne-centimeters by 8.85075 × 10⁻⁷, or divide by 1,129,848, to obtain the equivalent torque in pound-inches.",
    math: "\\tau_{(\\text{lb·in})} = \\tau_{(\\text{dyn·cm})} \\times 8.8507458 \\times 10^{-7} = \\frac{\\tau_{(\\text{dyn·cm})}}{1{,}129{,}848.3}",
    subtext: "To convert pound-inches back to dyne-centimeters, multiply by 1,129,848.3."
  },
  formulaTitle: "dyn·cm to lb·in Exact Conversion Formula",
  practicalTip: {
    title: "1.13 Million Quick Estimation",
    text: "For rapid shop floor calculations, treat 1.13 million dyn·cm as roughly 1 lb·in. Dividing your dyn·cm value (in millions) by 1.13 yields a result accurate to within 0.15%."
  },
  expertNote: {
    title: "Ounce-Inches vs Pound-Inches",
    text: "Many precision torque screwdrivers and miniature electric motors in North America are graduated in ounce-inches (oz·in) rather than pound-inches. Because 1 lb·in = 16 oz·in, 1 oz·in ≈ 70,615.5 dyn·cm. Always verify whether your torque driver scale is in pounds or ounces."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Precision Optical Gimbal Motor",
        subtitle: "A micro-motor datasheet lists a stall torque of 2,400,000 dyn·cm. Convert this rating to pound-inches for a US drone gimbal specification sheet.",
        steps: [
          "State initial torque: 2,400,000 dyn·cm.",
          "Apply conversion factor: lb·in = 2,400,000 × 8.85075 × 10⁻⁷.",
          "Multiply: 2,400,000 × 0.000000885075 = 2.12418.",
          "Final Result: 2,400,000 dyn·cm equals approximately 2.12 lb·in."
        ]
      },
      {
        title: "Example 2: Watch Mechanism Escapement Torque",
        subtitle: "A chronometer escapement test rig measures a friction torque of 45,000 dyn·cm. Express this torque in pound-inches.",
        steps: [
          "Starting value: 45,000 dyn·cm.",
          "Divide by 1,129,848: 45,000 ÷ 1,129,848 ≈ 0.039828.",
          "Final Result: 45,000 dyn·cm corresponds to approximately 0.0398 lb·in."
        ]
      },
      {
        title: "Example 3: Miniature Machine Screw Fastening",
        subtitle: "A cleanroom torque driver calibrator registers a peak tightening moment of 850,000 dyn·cm on an M2 standoff. Find the equivalent in pound-inches.",
        steps: [
          "Starting value: 850,000 dyn·cm.",
          "Multiply by 8.85075 × 10⁻⁷: 850,000 × 8.85075 × 10⁻⁷ = 0.75231.",
          "Final Result: 850,000 dyn·cm equals approximately 0.752 lb·in."
        ]
      }
    ]
  },
  table: {
    title: "Dyne-Centimeter to Pound-Inch Reference Table",
    headers: ["Dyne-Centimeters (dyn·cm)", "Pound-Inches (lb·in)", "Ounce-Inches (oz·in) Equiv.", "Application Context"],
    rows: [
      { fromVal: "10,000 dyn·cm", toVal: "0.00885 lb·in", extra: "0.1416 oz·in", extra2: "Analog galvanometer needle movement" },
      { fromVal: "50,000 dyn·cm", toVal: "0.04425 lb·in", extra: "0.7081 oz·in", extra2: "Watch balance wheel spring" },
      { fromVal: "100,000 dyn·cm", toVal: "0.08851 lb·in", extra: "1.4161 oz·in", extra2: "Micro-servo actuator (1 N·cm)" },
      { fromVal: "500,000 dyn·cm", toVal: "0.44254 lb·in", extra: "7.0806 oz·in", extra2: "Camera lens zoom iris mechanism" },
      { fromVal: "1,000,000 dyn·cm", toVal: "0.88507 lb·in", extra: "14.161 oz·in", extra2: "Small pan-tilt camera gimbal" },
      { fromVal: "1,129,848 dyn·cm", toVal: "1.00000 lb·in", extra: "16.000 oz·in", extra2: "Exact 1.0 lb·in parity threshold" },
      { fromVal: "2,000,000 dyn·cm", toVal: "1.77015 lb·in", extra: "28.322 oz·in", extra2: "Compact NEMA 14 stepper motor" },
      { fromVal: "5,000,000 dyn·cm", toVal: "4.42537 lb·in", extra: "70.806 oz·in", extra2: "Standard NEMA 17 3D printer motor" },
      { fromVal: "10,000,000 dyn·cm", toVal: "8.85075 lb·in", extra: "141.61 oz·in", extra2: "1.0 N·m SI metric baseline" },
      { fromVal: "15,000,000 dyn·cm", toVal: "13.2761 lb·in", extra: "212.42 oz·in", extra2: "NEMA 23 CNC leadscrew motor" },
      { fromVal: "20,000,000 dyn·cm", toVal: "17.7015 lb·in", extra: "283.22 oz·in", extra2: "Heavy NEMA 23 milling stepper" },
      { fromVal: "30,000,000 dyn·cm", toVal: "26.5522 lb·in", extra: "424.84 oz·in", extra2: "Industrial pick-and-place actuator" }
    ]
  },
  applications: {
    title: "Key Industry & Manufacturing Applications",
    items: [
      {
        title: "Micro-Electronics & Semiconductor Assembly",
        text: "Cleanroom manufacturing of hard drive read/write head assemblies and semiconductor probe cards uses precision torque drivers calibrated in lb·in to match CGS micro-torque specifications."
      },
      {
        title: "Medical Surgical Robotics & Implant Tooling",
        text: "Dental implant handpieces, orthopedic bone screw drivers, and endoscopic articulation mechanisms convert dyn·cm sensor signals into lb·in limits to guarantee safe tissue clamping forces."
      },
      {
        title: "Aerospace Avionics & Satellite Mechanisms",
        text: "Satellite deployment hinges, solar array drive assemblies, and aircraft cockpit indicators translate between CGS research test data and US customary manufacturing standards."
      },
      {
        title: "Torque Screwdriver & Tool Calibration",
        text: "Metrology laboratories calibrate electronic and mechanical torque screwdrivers using digital torque testers capable of toggling between dyn·cm, oz·in, and lb·in units."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting dyn·cm to lb·in",
    items: [
      "Confusing Pound-Inches with Pound-Feet: 1 lb·ft = 12 lb·in. Confusing the two units leads to a 12x error in applied torque, which can easily snap small electronics screws.",
      "Confusing Pound-Inches with Ounce-Inches: 1 lb·in = 16 oz·in. A torque of 1,000,000 dyn·cm is approximately 0.885 lb·in, but 14.16 oz·in. Always confirm whether your torque screwdriver scale uses pounds or ounces.",
      "Misplacing the Decimal Point: The multiplier is approximately 8.85 × 10⁻⁷. A dropped zero or misplaced exponent results in a 10x or 100x over- or under-torqued condition.",
      "Conflating dyn·cm with N·cm: 1 N·cm = 100,000 dyn·cm. Failing to recognize the difference between Newtons and dynes produces a 100,000x calculation error."
    ]
  },
  faqs: [
    {
      question: "How do I convert dyne-centimeters to pound-inches?",
      answer: "Multiply the torque value in dyne-centimeters by 8.85075 × 10⁻⁷, or divide it by 1,129,848. For example, 2,000,000 dyn·cm divided by 1,129,848 yields approximately 1.77 lb·in."
    },
    {
      question: "How many dyne-centimeters are in one pound-inch?",
      answer: "There are approximately 1,129,848.3 dyne-centimeters in one pound-inch (1 lb·in ≈ 1.13 × 10⁶ dyn·cm)."
    },
    {
      question: "What is 1 dyn·cm in pound-inches?",
      answer: "One dyne-centimeter equals approximately 8.85075 × 10⁻⁷ pound-inches (0.000000885075 lb·in)."
    },
    {
      question: "What is the difference between lb·in and oz·in?",
      answer: "One pound equals 16 ounces, so one pound-inch (lb·in) equals exactly 16 ounce-inches (oz·in). For microscopic torques, oz·in often provides more convenient whole numbers than lb·in."
    },
    {
      question: "How do I convert dyn·cm to ounce-inches (oz·in)?",
      answer: "Multiply the dyn·cm value by 1.41612 × 10⁻⁵ (or divide by 70,615.5). For example, 1,000,000 dyn·cm equals approximately 14.16 oz·in."
    },
    {
      question: "What is 1,000,000 dyn·cm in pound-inches?",
      answer: "1,000,000 dyn·cm equals approximately 0.8851 lb·in (inch-pounds)."
    },
    {
      question: "Is in·lb the same as lb·in?",
      answer: "Yes. Both 'lb·in' (pound-inch) and 'in·lb' (inch-pound) denote the exact same rotational torque unit: one pound-force applied at a one-inch radius. Scientific bodies prefer 'lb·in'."
    },
    {
      question: "Why do electronics assembly drawings use lb·in?",
      answer: "In North America, commercial torque screwdrivers and assembly line calibration standards are manufactured and certified in lb·in or oz·in to comply with ASME B107 fastener standards."
    },
    {
      question: "How does 10,000,000 dyn·cm convert to lb·in?",
      answer: "10,000,000 dyn·cm equals 1 Newton-meter, which converts to approximately 8.85075 lb·in."
    },
    {
      question: "What is the exact conversion ratio between dyn·cm and lb·in?",
      answer: "The exact relationship is derived from 1 lb·in = 4.4482216152605 N × 100,000 dyn/N × 2.54 cm = 1,129,848.290276167 dyn·cm. Taking the reciprocal gives approximately 8.85074579133 × 10⁻⁷ lb·in."
    }
  ],
  relatedList: [
    { label: "Dyne-Centimeter to Newton-Meter", from: "dyne-centimeter", to: "newton-meter" },
    { label: "Dyne-Centimeter to Pound-Foot", from: "dyne-centimeter", to: "pound-foot" },
    { label: "Pound-Inch to Dyne-Centimeter", from: "pound-inch", to: "dyne-centimeter" },
    { label: "Dyne-Centimeter to Newton-Centimeter", from: "dyne-centimeter", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Inch to Dyne-Centimeter Conversion Guide",
      description: "Convert imperial inch-pounds into CGS units for micro-engineering and horology.",
      from: "pound-inch",
      to: "dyne-centimeter"
    },
    {
      title: "Dyne-Centimeter to Newton-Meter Conversion Guide",
      description: "Convert micro-scale CGS torque into coherent SI base units.",
      from: "dyne-centimeter",
      to: "newton-meter"
    }
  ],
  references: [
    "ASME B107.14M: Hand Torque Tools",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "NASA-STD-5020: Requirements for Threaded Fastening Systems in Spaceflight Hardware",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
