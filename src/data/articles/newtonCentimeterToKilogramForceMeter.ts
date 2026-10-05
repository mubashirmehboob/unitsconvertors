import { CustomArticleData } from "./types";

export const newtonCentimeterToKilogramForceMeter: CustomArticleData = {
  fromUnitId: "newton-centimeter",
  toUnitId: "kilogram-force-meter",
  seoTitle: "Newton-Centimeter to Kilogram-Force Meter Converter (N·cm to kgf·m)",
  metaDescription: "Convert Newton-centimeters to kilogram-force meters (N·cm to kgf·m) accurately. Exact standard gravity factor, formula, industrial examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/torque/newton-centimeter-to-kilogram-force-meter",
  h1: "Newton-Centimeter to Kilogram-Force Meter Converter",
  introduction: [
    "The Newton-centimeter (N·cm) and the kilogram-force meter (kgf·m, also written as m·kg or kilopond-meter, kp·m) represent two distinct metric perspectives on rotational torque. The Newton-centimeter is the modern SI submultiple unit used worldwide for precision mechatronics, stepper motor sizing, and miniature robotics. The kilogram-force meter is a classic gravitational metric unit historically utilized across European, Japanese, and Russian heavy engineering, automotive dynos, lifting hoists, and civil infrastructure.",
    "Converting from Newton-centimeters to kilogram-force meters bridges the gap between modern precision electronic actuators and legacy industrial power machinery. Because the kilogram-force is defined through standard Earth gravitational acceleration (g₀ = 9.80665 m/s²), one kilogram-force meter equals exactly 9.80665 Newton-meters, which equates to exactly 980.665 Newton-centimeters. Conversely, one Newton-centimeter corresponds to approximately 0.00101972 kilogram-force meters.",
    "Engineers frequently need this conversion when retrofitting older industrial milling machines, translating Japanese Industrial Standard (JIS) mechanical manuals, or interfacing modern electronic rotary actuators with heavy industrial winch systems. This guide provides the exact mathematical relationship, practical engineering examples, a reference conversion table, common calculation errors, and authoritative standards citations."
  ],
  quickAnswer: {
    text: "To convert Newton-centimeters to kilogram-force meters, divide the torque value by 980.665 (or multiply by 0.00101972). For example, a heavy industrial stepper motor producing 490 N·cm develops approximately 0.4997 kgf·m (roughly 0.5 kgf·m) of torque.",
    formulaDisplay: "\\text{kgf·m} = \\frac{\\text{N·cm}}{980.665} = \\text{N·cm} \\times 0.00101972",
    subtext: "1 Newton-centimeter equals approximately 0.00101972 kilogram-force meters (1 kgf·m = 980.665 N·cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is an SI derived submultiple unit of torque. It quantifies the moment resulting from one Newton of force applied at a perpendicular distance of one centimeter (1 N·cm = 1 N × 0.01 m = 0.01 N·m). It is the premier standard for small-scale motion control, commonly used in stepper motor datasheets, drone actuators, and optical mounts."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilogram-Force Meter (kgf·m)",
    text: "The kilogram-force meter (symbol: kgf·m or kp·m) is a gravitational metric unit of torque. It represents the rotational turning moment exerted by one kilogram of mass under standard gravitational acceleration (9.80665 m/s²) acting on a one-meter moment arm (1 kgf·m = 1 kgf × 1 m = 9.80665 N·m). It remains common in Japanese Industrial Standards (JIS) and legacy European machinery documentation."
  },
  relationship: "Standard gravitational acceleration is internationally defined as g₀ = 9.80665 m/s². One kilogram-force corresponds to exactly 9.80665 Newtons. Because one meter contains 100 centimeters, 1 kgf·m = 9.80665 N × 100 cm = 980.665 N·cm. Taking the reciprocal gives 1 N·cm = 1 / 980.665 kgf·m ≈ 0.001019716213 kgf·m.",
  relationshipTitle: "Torque Scale Benchmarks",
  relationshipItems: [
    { label: "10 N·cm", value: "0.0102 kgf·m (Miniature optical turret motor)" },
    { label: "98.07 N·cm", value: "0.1000 kgf·m (Metric servo torque milestone)" },
    { label: "490.33 N·cm", value: "0.5000 kgf·m (Mid-size industrial leadscrew drive)" },
    { label: "980.665 N·cm", value: "1.0000 kgf·m (Direct parity threshold)" },
    { label: "2500 N·cm", value: "2.5493 kgf·m (High-torque automated assembly cell drive)" }
  ],
  formula: {
    text: "Divide the torque value in Newton-centimeters by 980.665, or multiply by 0.00101972, to obtain the equivalent torque in kilogram-force meters.",
    math: "\\tau_{(\\text{kgf·m})} = \\frac{\\tau_{(\\text{N·cm})}}{980.665} = \\tau_{(\\text{N·cm})} \\times 0.0010197162",
    subtext: "To reverse the conversion from kilogram-force meters to Newton-centimeters, multiply by 980.665."
  },
  formulaTitle: "N·cm to kgf·m Exact Conversion Formula",
  practicalTip: {
    title: "1,000-to-1 Quick Estimation",
    text: "Because 980.665 is within 2% of 1,000, you can approximate kgf·m on the fly by simply dividing N·cm by 1,000 (shifting the decimal three places left). For example, 750 N·cm is approximately 0.75 kgf·m (actual: 0.765 kgf·m)."
  },
  expertNote: {
    title: "Beware of kg·cm vs kgf·m",
    text: "Be careful not to confuse kilogram-force meters (kgf·m) with kilogram-force centimeters (kgf·cm or kg·cm). One kgf·m equals 100 kgf·cm. While hobby RC servos quote holding torque in kg·cm (where 1 kg·cm ≈ 9.81 N·cm), industrial machinery uses kgf·m (where 1 kgf·m = 980.67 N·cm), a factor of 100 difference."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: CNC Machine Leadscrew Retrofit",
        subtitle: "A machine builder upgrades an older Japanese milling machine whose technical drawing specifies a feed axis torque of 0.85 kgf·m. The prospective replacement servo motor delivers 850 N·cm. Determine if the new motor satisfies the torque requirement.",
        steps: [
          "Convert motor torque to kgf·m: kgf·m = 850 ÷ 980.665.",
          "Calculate: 850 ÷ 980.665 = 0.86676 kgf·m.",
          "Compare: 0.867 kgf·m exceeds the required 0.85 kgf·m specification by approximately 2%.",
          "Final Result: 850 N·cm equals approximately 0.867 kgf·m."
        ]
      },
      {
        title: "Example 2: Industrial Valve Actuator Verification",
        subtitle: "An automated chemical control valve requires 1,470 N·cm of seating torque. Convert this value to kilogram-force meters for a legacy plant ledger.",
        steps: [
          "Starting value: 1,470 N·cm.",
          "Multiply by 0.00101972: 1,470 × 0.00101972 = 1.49898.",
          "Final Result: 1,470 N·cm corresponds to approximately 1.50 kgf·m."
        ]
      },
      {
        title: "Example 3: Robot Arm Wrist Joint Rating",
        subtitle: "A collaborative robot wrist joint develops a peak holding torque of 320 N·cm. Express this torque in kilogram-force meters.",
        steps: [
          "Starting value: 320 N·cm.",
          "Divide by 980.665: 320 ÷ 980.665 = 0.32631.",
          "Final Result: 320 N·cm equals approximately 0.326 kgf·m."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Centimeter to Kilogram-Force Meter Reference Table",
    headers: ["Newton-Centimeters (N·cm)", "Kilogram-Force Meters (kgf·m)", "Newton-Meters (N·m) Equiv.", "Industrial Context"],
    rows: [
      { fromVal: "10 N·cm", toVal: "0.0102 kgf·m", extra: "0.10 N·m", extra2: "Optical focus micro-stepper motor" },
      { fromVal: "50 N·cm", toVal: "0.0510 kgf·m", extra: "0.50 N·m", extra2: "Standard NEMA 17 3D printer motor" },
      { fromVal: "100 N·cm", toVal: "0.1020 kgf·m", extra: "1.00 N·m", extra2: "1.0 N·m metric milestone" },
      { fromVal: "200 N·cm", toVal: "0.2039 kgf·m", extra: "2.00 N·m", extra2: "Compact NEMA 23 leadscrew motor" },
      { fromVal: "500 N·cm", toVal: "0.5099 kgf·m", extra: "5.00 N·m", extra2: "Heavy NEMA 23 CNC milling drive" },
      { fromVal: "980.67 N·cm", toVal: "1.0000 kgf·m", extra: "9.81 N·m", extra2: "Exact 1.0 kgf·m parity threshold" },
      { fromVal: "1,500 N·cm", toVal: "1.5296 kgf·m", extra: "15.0 N·m", extra2: "Small industrial robot wrist joint" },
      { fromVal: "2,000 N·cm", toVal: "2.0394 kgf·m", extra: "20.0 N·m", extra2: "Automated warehouse AGV steering motor" },
      { fromVal: "3,000 N·cm", toVal: "3.0591 kgf·m", extra: "30.0 N·m", extra2: "Heavy-duty positioning rotary table" },
      { fromVal: "5,000 N·cm", toVal: "5.0986 kgf·m", extra: "50.0 N·m", extra2: "Industrial planetary gearbox output" },
      { fromVal: "7,500 N·cm", toVal: "7.6479 kgf·m", extra: "75.0 N·m", extra2: "Crane cable drum positioning brake" },
      { fromVal: "10,000 N·cm", toVal: "10.197 kgf·m", extra: "100 N·m", extra2: "Heavy industrial assembly spindle" }
    ]
  },
  applications: {
    title: "Engineering & Machinery Applications",
    items: [
      {
        title: "Japanese Machine Tool (JIS) Retrofits",
        text: "Maintenance engineers modernizing legacy Japanese lathes, milling centers, and wire EDMs regularly translate older JIS catalog specs in kgf·m into modern N·cm servo motor holding ratings."
      },
      {
        title: "Hoisting & Winch Drive Sizing",
        text: "Industrial lifting winches and crane drums often quote capacity in terms of kilograms lifted at a one-meter radius (kgf·m). Electric gearmotors rated in N·cm must be converted to ensure safe overhead hoist factors."
      },
      {
        title: "Automotive Dyno & Engine Testing Legacy Data",
        text: "Historical engine performance charts from European and Japanese automotive manufacturers frequently recorded brake torque in kgf·m, requiring conversion when comparing modern electronic throttle actuators."
      },
      {
        title: "Civil Construction Equipment Hydraulics",
        text: "Hydraulic rotary actuators for excavator attachments and valve turners use kgf·m in traditional plant maintenance documentation, while new electro-hydraulic proportional valves use metric N·cm feedback sensors."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting N·cm to kgf·m",
    items: [
      "Confusing kgf·m with kgf·cm (kg·cm): 1 kgf·m equals exactly 100 kgf·cm. Confusing the meter arm with the centimeter arm will cause an error of two orders of magnitude (100x).",
      "Using Local Gravity Instead of Standard Gravity: The legal definition of the kilogram-force is strictly fixed at g₀ = 9.80665 m/s² by CIPM standards, regardless of the local gravitational variation at your geographic elevation.",
      "Conflating Mass and Force: A kilogram is a unit of mass; a kilogram-force is the gravitational force exerted on that mass. In dynamic equations involving rotational acceleration (τ = Iα), always convert to coherent SI units (N·m).",
      "Multiplying Instead of Dividing: Because 1 kgf·m is nearly 1,000 times larger than 1 N·cm, the numerical value in kgf·m must be significantly smaller. Multiplying by 980.665 instead of dividing produces an error of nearly one million times."
    ]
  },
  faqs: [
    {
      question: "How do I convert Newton-centimeters to kilogram-force meters?",
      answer: "Divide the torque value in Newton-centimeters by 980.665, or multiply it by 0.00101972. For example, 1,000 N·cm divided by 980.665 yields approximately 1.0197 kgf·m."
    },
    {
      question: "How many Newton-centimeters are in one kilogram-force meter?",
      answer: "There are exactly 980.665 Newton-centimeters in one kilogram-force meter (1 kgf·m = 980.665 N·cm)."
    },
    {
      question: "What is 1 N·cm in kgf·m?",
      answer: "One Newton-centimeter is equal to approximately 0.00101972 kilogram-force meters (1.0197 × 10⁻³ kgf·m)."
    },
    {
      question: "What is the difference between kgf·m and kg·cm?",
      answer: "The difference lies in the length of the moment arm. One kilogram-force meter (kgf·m) uses a 1-meter lever arm, while one kilogram-force centimeter (kgf·cm or kg·cm) uses a 1-centimeter arm. Therefore, 1 kgf·m equals exactly 100 kgf·cm."
    },
    {
      question: "Where did the factor 980.665 come from?",
      answer: "One kilogram-force equals 9.80665 Newtons (based on standard Earth gravity g₀ = 9.80665 m/s²). Because 1 meter equals 100 centimeters, 1 kgf·m = 9.80665 N × 100 cm = 980.665 N·cm."
    },
    {
      question: "Is kilogram-force meter an official SI unit?",
      answer: "No. The kilogram-force meter is a non-SI metric gravitational unit. The International Committee for Weights and Measures (CIPM) replaced it with the coherent SI unit, the Newton-meter (N·m)."
    },
    {
      question: "What is 500 N·cm in kilogram-force meters?",
      answer: "500 N·cm converts to approximately 0.5099 kgf·m (500 ÷ 980.665 ≈ 0.50986 kgf·m)."
    },
    {
      question: "Is kgf·m the same as kp·m?",
      answer: "Yes. The kilopond-meter (kp·m) is an alternative name used in Germany and parts of Europe for the kilogram-force meter (1 kp·m = 1 kgf·m = 9.80665 N·m)."
    },
    {
      question: "How do I convert N·cm to kg·cm instead of kgf·m?",
      answer: "To convert N·cm to kilogram-force centimeters (kg·cm), divide by 9.80665 (or multiply by 0.10197). For example, 98 N·cm equals approximately 10 kg·cm."
    },
    {
      question: "Why do legacy Japanese machine tools use kgf·m?",
      answer: "Before international adoption of SI units under ISO standards, the Japanese Industrial Standards (JIS) widely specified engine torque and machine tool capacities in kgf·m because it provided intuitive visualization of kilograms lifted at a one-meter radius."
    }
  ],
  relatedList: [
    { label: "Newton-Centimeter to Newton-Meter", from: "newton-centimeter", to: "newton-meter" },
    { label: "Kilogram-Force Meter to Newton-Centimeter", from: "kilogram-force-meter", to: "newton-centimeter" },
    { label: "Newton-Centimeter to Pound-Foot", from: "newton-centimeter", to: "pound-foot" },
    { label: "Newton-Centimeter to Dyne-Centimeter", from: "newton-centimeter", to: "dyne-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Kilogram-Force Meter to Newton-Centimeter Conversion Guide",
      description: "Convert legacy gravitational torque specifications into modern metric stepper motor ratings.",
      from: "kilogram-force-meter",
      to: "newton-centimeter"
    },
    {
      title: "Newton-Centimeter to Newton-Meter Conversion Guide",
      description: "Convert submultiple metric torque to coherent SI base units for simulation and CAD.",
      from: "newton-centimeter",
      to: "newton-meter"
    }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition)",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "JIS Z 8202: Quantities and Units — Mechanics (Japanese Industrial Standards)",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
