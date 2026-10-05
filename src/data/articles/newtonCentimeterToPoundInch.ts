import { CustomArticleData } from "./types";

export const newtonCentimeterToPoundInch: CustomArticleData = {
  fromUnitId: "newton-centimeter",
  toUnitId: "pound-inch",
  seoTitle: "Newton-Centimeter to Pound-Inch Converter (N·cm to lb·in)",
  metaDescription: "Convert Newton-centimeters to pound-inches (N·cm to lb·in) instantly. Exact 0.0885075 factor, formula, torque screwdriver settings, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/torque/newton-centimeter-to-pound-inch",
  h1: "Newton-Centimeter to Pound-Inch Converter",
  introduction: [
    "The Newton-centimeter (N·cm) and the pound-inch (lb·in, commonly written as in·lb or inch-pound) are the two most popular torque units worldwide for low-range rotational mechanics. The Newton-centimeter is the prevailing metric unit across Europe and Asia for rating stepper motors, hobby servos, optical mounts, and miniature gearboxes. In the United States, precision assembly lines, aerospace instrumentation, and electronic enclosure manufacturing rely heavily on the pound-inch to calibrate torque screwdrivers and specify fastener tightening limits.",
    "Converting between Newton-centimeters and pound-inches is an essential daily calculation for mechanical designers and assembly technicians. Because one international avoirdupois pound-force equals 4.448221615 Newtons and one inch equals 2.54 centimeters exactly, one pound-inch produces 11.29848 Newton-centimeters of torque. Conversely, one Newton-centimeter equals approximately 0.0885075 pound-inches.",
    "Understanding this exact conversion prevents stripped threads in plastic bosses, avoids cracked printed circuit boards (PCBs), and ensures imported metric motion components match domestic assembly tooling. This guide details the mathematical derivation, torque screwdriver worked examples, an engineering conversion matrix, common mistakes, and expert assembly best practices."
  ],
  quickAnswer: {
    text: "To convert Newton-centimeters to pound-inches, multiply the torque value by 0.0885075 (or divide by 11.29848). For example, a 3D printer stepper motor delivering 50 N·cm of holding torque produces approximately 4.425 lb·in (inch-pounds).",
    formulaDisplay: "\\text{lb·in} = \\text{N·cm} \\times 0.0885075 = \\frac{\\text{N·cm}}{11.29848}",
    subtext: "1 Newton-centimeter equals approximately 0.0885075 pound-inches (1 lb·in ≈ 11.29848 N·cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is a metric submultiple unit of torque. It represents the turning moment resulting from one Newton of force applied at a right angle to a one-centimeter moment arm (1 N·cm = 1 N × 0.01 m = 0.01 N·m). It is the premier standard for small-scale rotational equipment, universally found in stepper motor datasheets, robotic actuator catalogs, and laboratory instrumentation."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in·lb) is an imperial unit of torque defined as one pound-force applied perpendicularly at a distance of one inch from the axis of rotation (1 lb·in = 1 lbf × 1 in = 1/12 lb·ft ≈ 0.112985 N·m). It is the primary unit used across North American electronics manufacturing, aerospace avionics assembly, precision torque screwdrivers, and small fastener engineering."
  },
  relationship: "One international inch is defined as exactly 2.54 centimeters, and one pound-force is defined as exactly 4.4482216152605 Newtons. Therefore, 1 lb·in = 4.4482216152605 N × 2.54 cm = 11.29848290276167 N·cm. Taking the reciprocal gives 1 N·cm = 1 / 11.2984829 ≈ 0.0885074579 lb·in.",
  relationshipTitle: "Low-Range Torque Benchmarks",
  relationshipItems: [
    { label: "1 N·cm", value: "0.0885 lb·in (Micro-servo control surface torque)" },
    { label: "11.30 N·cm", value: "1.0000 lb·in (Direct equivalence parity threshold)" },
    { label: "40 N·cm", value: "3.5403 lb·in (Standard M3 machine screw tightening torque)" },
    { label: "60 N·cm", value: "5.3104 lb·in (NEMA 17 high-torque extruder stepper)" },
    { label: "150 N·cm", value: "13.2761 lb·in (NEMA 23 CNC milling axis drive)" }
  ],
  formula: {
    text: "Multiply the torque value in Newton-centimeters by 0.0885075, or divide by 11.29848, to obtain the equivalent torque in pound-inches.",
    math: "\\tau_{(\\text{lb·in})} = \\tau_{(\\text{N·cm})} \\times 0.088507458 = \\frac{\\tau_{(\\text{N·cm})}}{11.298483}",
    subtext: "To convert pound-inches back to Newton-centimeters, multiply by 11.29848."
  },
  formulaTitle: "N·cm to lb·in Exact Conversion Formula",
  practicalTip: {
    title: "11-to-1 Field Rule of Thumb",
    text: "For quick mental estimation in the workshop, treat 11 N·cm as roughly 1 lb·in. Dividing your N·cm value by 11 gives an approximation with less than 2.5% error."
  },
  expertNote: {
    title: "Fastener Boss Cracking in Electronics",
    text: "Precision torque screwdrivers in North America are usually graduated in lb·in or oz·in, whereas consumer electronics CAD drawings often specify M2 and M2.5 screw limits in N·cm. Failing to convert correctly can easily cause an operator to apply 10 lb·in instead of 10 N·cm, over-torquing the fastener by a factor of 11.3 and fracturing the plastic boss."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Calibrating an Assembly Line Torque Screwdriver",
        subtitle: "A smartphone camera module assembly drawing specifies a lens bezel screw torque of 28 N·cm. Set the calibrated US torque screwdriver graduated in lb·in.",
        steps: [
          "Identify initial metric torque: 28 N·cm.",
          "Apply conversion factor: lb·in = 28 × 0.0885075.",
          "Multiply: 28 × 0.0885075 = 2.4782.",
          "Final Result: Set the torque screwdriver to 2.48 lb·in (inch-pounds)."
        ]
      },
      {
        title: "Example 2: NEMA 17 Stepper Motor Comparison",
        subtitle: "A robotics designer compares an imported metric stepper motor rated at 65 N·cm with a domestic US motor rated at 5.5 lb·in.",
        steps: [
          "Starting value: 65 N·cm.",
          "Divide by 11.2985: 65 ÷ 11.2985 ≈ 5.753.",
          "Compare: 5.75 lb·in exceeds the domestic motor's 5.5 lb·in rating by approximately 4.5%.",
          "Final Result: 65 N·cm equals approximately 5.75 lb·in."
        ]
      },
      {
        title: "Example 3: Aerospace Avionics Enclosure Screws",
        subtitle: "An aerospace specification limits M3 fastener torque to 45 N·cm to prevent stripping aluminum threads. Find the limit in lb·in.",
        steps: [
          "Starting value: 45 N·cm.",
          "Multiply by 0.0885075: 45 × 0.0885075 = 3.9828.",
          "Final Result: The fastener limit is approximately 3.98 lb·in."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Centimeter to Pound-Inch Conversion Table",
    headers: ["Newton-Centimeters (N·cm)", "Pound-Inches (lb·in)", "Fastener / Assembly Context"],
    rows: [
      { fromVal: "1 N·cm", toVal: "0.0885 lb·in", extra: "Micro-potentiometer adjustment dial" },
      { fromVal: "5 N·cm", toVal: "0.4425 lb·in", extra: "M1.6 watch & precision optical screws" },
      { fromVal: "10 N·cm", toVal: "0.8851 lb·in", extra: "M2 PCB standoff mounting screw" },
      { fromVal: "11.30 N·cm", toVal: "1.0000 lb·in", extra: "Exact 1 lb·in parity threshold" },
      { fromVal: "20 N·cm", toVal: "1.7701 lb·in", extra: "M2.5 electronics enclosure screw" },
      { fromVal: "35 N·cm", toVal: "3.0978 lb·in", extra: "NEMA 14 micro-stepper holding torque" },
      { fromVal: "50 N·cm", toVal: "4.4254 lb·in", extra: "Standard M3 machine screw in aluminum" },
      { fromVal: "65 N·cm", toVal: "5.7530 lb·in", extra: "NEMA 17 high-torque 3D printer motor" },
      { fromVal: "100 N·cm", toVal: "8.8507 lb·in", extra: "M4 machine screw or 1.0 N·m metric milestone" },
      { fromVal: "150 N·cm", toVal: "13.2761 lb·in", extra: "NEMA 23 CNC leadscrew motor" },
      { fromVal: "200 N·cm", toVal: "17.7015 lb·in", extra: "Heavy NEMA 23 milling stepper" },
      { fromVal: "300 N·cm", toVal: "26.5522 lb·in", extra: "High-torque industrial pick-and-place actuator" }
    ]
  },
  applications: {
    title: "Critical Engineering & Manufacturing Applications",
    items: [
      {
        title: "Electronics & PCB Standoff Fastening",
        text: "Automated torque drivers on surface-mount assembly lines prevent PCB trace fractures by tightening standoffs and thermal heatsinks to precise lb·in tolerances derived from metric N·cm specs."
      },
      {
        title: "Medical Diagnostic Equipment Assembly",
        text: "Surgical drills, dental tools, and diagnostic centrifuges use precision N·cm to lb·in conversions to verify that miniature brushless DC motors deliver sufficient driving torque without overheating."
      },
      {
        title: "Aerospace Avionics & Satellite Mechanisms",
        text: "Satellite deployment hinges and solar panel orientation motors require torque verification under extreme thermal environments, translating between metric actuator ratings and NASA imperial fastener standards."
      },
      {
        title: "Automated Screwdriver Tooling Calibration",
        text: "Calibration technicians certify electric and pneumatic torque screwdrivers using digital torque transducers that record values in either N·cm or lb·in depending on customer quality documentation."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting N·cm to lb·in",
    items: [
      "Confusing Pound-Inches with Pound-Feet: 1 lb·ft = 12 lb·in. Confusing the two results in applying 12 times too much torque, almost guaranteed to shear fine electronic screws.",
      "Confusing Pound-Inches with Ounce-Inches: 1 lb·in = 16 oz·in. A torque of 10 N·cm is about 0.885 lb·in, but 14.16 oz·in. Always check whether your US tool is scaled in pounds or ounces.",
      "Ignoring Friction & Plating Factors: Fastener tightening torque varies significantly depending on whether threads are dry, zinc-plated, or lubricated with threadlocker (Loctite).",
      "Treating kg·cm as N·cm: Many Asian servo datasheets list holding torque in kg·cm. Remember that 1 kg·cm = 9.80665 N·cm ≈ 0.86796 lb·in."
    ]
  },
  faqs: [
    {
      question: "How do I convert Newton-centimeters to pound-inches?",
      answer: "Multiply the Newton-centimeter value by 0.0885075, or divide it by 11.29848. For instance, a torque of 40 N·cm converts to 40 × 0.0885075 ≈ 3.54 lb·in."
    },
    {
      question: "How many Newton-centimeters are in one pound-inch?",
      answer: "There are approximately 11.29848 Newton-centimeters in one pound-inch (1 lb·in ≈ 11.2985 N·cm)."
    },
    {
      question: "What is 1 N·cm in pound-inches?",
      answer: "One Newton-centimeter equals approximately 0.0885075 pound-inches (0.0885 lb·in)."
    },
    {
      question: "What is the difference between lb·in and in·lb?",
      answer: "There is no physical difference. Both 'lb·in' (pound-inch) and 'in·lb' (inch-pound) denote the same unit of torque: one pound-force acting at a one-inch radius. Scientific bodies prefer 'lb·in' to maintain consistency with 'lb·ft'."
    },
    {
      question: "How do I convert N·cm to ounce-inches (oz·in)?",
      answer: "Multiply the N·cm value by 1.41612. Because there are 16 ounces in a pound, 0.0885075 lb·in × 16 = 1.41612 oz·in. For example, 10 N·cm equals approximately 14.16 oz·in."
    },
    {
      question: "What is 50 N·cm in pound-inches?",
      answer: "50 N·cm equals approximately 4.425 lb·in (50 × 0.0885075 = 4.4254 lb·in)."
    },
    {
      question: "Why is N·cm to lb·in conversion so important in electronics?",
      answer: "Electronics hardware commonly uses tiny M1.6, M2, and M3 screws. Their safe tightening limits are very small (typically 10 to 60 N·cm). Torque screwdrivers in US facilities are graduated in lb·in, so an accurate conversion prevents stripping screw heads or cracking plastic housings."
    },
    {
      question: "How does 1 N·m relate to lb·in?",
      answer: "One Newton-meter equals 100 Newton-centimeters, which equals approximately 8.85075 pound-inches (1 N·m ≈ 8.8508 lb·in)."
    },
    {
      question: "How do I convert 100 N·cm to lb·in?",
      answer: "100 N·cm converts to exactly 8.85075 lb·in."
    },
    {
      question: "What is the exact mathematical conversion ratio between N·cm and lb·in?",
      answer: "The exact ratio is 1 N·cm = 1 / (4.4482216152605 × 2.54) lb·in ≈ 0.088507457913 lb·in, derived directly from the legal definitions of the avoirdupois pound and international inch."
    }
  ],
  relatedList: [
    { label: "Newton-Centimeter to Newton-Meter", from: "newton-centimeter", to: "newton-meter" },
    { label: "Newton-Centimeter to Pound-Foot", from: "newton-centimeter", to: "pound-foot" },
    { label: "Pound-Inch to Newton-Centimeter", from: "pound-inch", to: "newton-centimeter" },
    { label: "Newton-Meter to Pound-Inch", from: "newton-meter", to: "pound-inch" }
  ],
  relatedArticles: [
    {
      title: "Pound-Inch to Newton-Centimeter Conversion Guide",
      description: "Convert imperial inch-pounds back to metric submultiples for overseas manufacturing.",
      from: "pound-inch",
      to: "newton-centimeter"
    },
    {
      title: "Newton-Meter to Pound-Inch Conversion Guide",
      description: "Convert coherent SI torque directly to imperial inch-pounds for precision tooling.",
      from: "newton-meter",
      to: "pound-inch"
    }
  ],
  references: [
    "ASME B107.14M: Hand Torque Tools",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "NASA-STD-5020: Requirements for Threaded Fastening Systems in Spaceflight Hardware",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
