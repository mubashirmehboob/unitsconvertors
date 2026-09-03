import { CustomArticleData } from "./types";

export const kilogramForceMeterToDyneCentimeter: CustomArticleData = {
  fromUnitId: "kilogram-force-meter",
  toUnitId: "dyne-centimeter",
  seoTitle: "Kilogram-Force Meter to Dyne-Centimeter Converter (kgf·m to dyn·cm)",
  metaDescription: "Convert kilogram-force meters to dyne-centimeters (kgf·m to dyn·cm) accurately. Exact 9.80665 × 10^7 factor, physics formulas, CGS tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-force-meter-to-dyne-centimeter",
  h1: "Kilogram-Force Meter to Dyne-Centimeter Converter",
  introduction: [
    "The kilogram-force meter (symbol: kgf·m or m·kg) and the dyne-centimeter (symbol: dyn·cm) represent two fundamentally distinct metric measurement paradigms: industrial gravitational mechanics and classical centimeter-gram-second (CGS) physics. The kilogram-force meter was the dominant mechanical torque unit across 20th-century Japanese, European, and Soviet industrial engineering, whereas the dyne-centimeter is the baseline rotational unit in laboratory rheology, astrophysics, geomagnetic dipole studies, and micro-electromechanical systems (MEMS).",
    "Converting kilogram-force meters to dyne-centimeters translates macroscopic mechanical machine moments into micro-physics and CGS research equations. Because one Newton-meter equals exactly 10^7 (10,000,000) dyne-centimeters and one kilogram-force meter equals exactly 9.80665 Newton-meters, multiplying these values reveals that 1 kilogram-force meter equals exactly 98,066,500 dyne-centimeters (9.80665 × 10^7 dyn·cm). Inversely, 1 dyn·cm equals approximately 1.01972 × 10^-8 kgf·m.",
    "This reference guide presents the exact mathematical derivation connecting gravitational metric forces to CGS units, details step-by-step scientific calculations, includes a high-precision reference table across multiple orders of magnitude, and outlines key scientific applications."
  ],
  quickAnswer: {
    text: "To convert kilogram-force meters to dyne-centimeters, multiply the torque value by 98,066,500 (or 9.80665 × 10^7). For example, a small mechanical actuator torque of 0.01 kgf·m converts to exactly 980,665 dyn·cm.",
    formulaDisplay: "\\text{dyn·cm} = \\text{kgf·m} \\times 98{,}066{,}500",
    subtext: "1 kilogram-force meter equals exactly 98,066,500 dyne-centimeters (9.80665 × 10^7 dyn·cm). 1 dyn·cm equals 1.01972 × 10^-8 kgf·m."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram-Force Meter (kgf·m)",
    text: "The kilogram-force meter (symbol: kgf·m, m·kg, or kp·m) is a gravitational metric unit of torque representing the rotational moment of one kilogram of mass accelerated by standard gravity (gn = 9.80665 m/s²) at a radius of one meter (1 kgf·m = 9.80665 N·m). It remains widely referenced in vintage automotive factory service manuals, marine propulsion specifications, and heavy crane machinery blueprints."
  },
  aboutTargetUnit: {
    title: "Understanding the Dyne-Centimeter (dyn·cm)",
    text: "The dyne-centimeter (symbol: dyn·cm) is the coherent unit of torque and angular moment in the centimeter-gram-second (CGS) system of units. It is defined as the moment created by one dyne of force acting at a perpendicular radius of one centimeter (1 dyn·cm = 1 dyn × 1 cm = 10^-7 N·m). It is utilized throughout academic physics to describe torsional fiber balances, molecular dipoles, and fluid shear viscosity."
  },
  relationship: "The relationship between kilogram-force meters and dyne-centimeters is derived from standard acceleration and CGS base definitions: 1 kgf = 9.80665 × 10^5 dynes. 1 meter = 100 centimeters. Multiplying these values: 1 kgf·m = (9.80665 × 10^5 dyn) × 100 cm = 98,066,500 dyn·cm (9.80665 × 10^7 dyn·cm, exact). The inverse factor is: 1 dyn·cm = 1 / 98,066,500 ≈ 1.019716213 × 10^-8 kgf·m.",
  relationshipTitle: "Orders of Magnitude Comparison (kgf·m vs dyn·cm)",
  relationshipItems: [
    { label: "0.001 kgf·m", value: "98,067 dyn·cm (Galvanometer restoring hairspring)" },
    { label: "0.01 kgf·m", value: "980,665 dyn·cm (Precision optical reticle adjustment)" },
    { label: "0.10 kgf·m", value: "9,806,650 dyn·cm (Small DC gearmotor output shaft)" },
    { label: "1.00 kgf·m", value: "98,066,500 dyn·cm (Automotive valve cover perimeter bolt)" },
    { label: "5.00 kgf·m", value: "490,332,500 dyn·cm (Spark plug & brake caliper guide pin)" },
    { label: "10.0 kgf·m", value: "980,665,000 dyn·cm (Automotive wheel lug nut clamp torque)" }
  ],
  formula: {
    text: "Multiply the torque in kilogram-force meters by 98,066,500 to obtain the torque in dyne-centimeters.",
    math: "\\tau_{(\\text{dyn·cm})} = \\tau_{(\\text{kgf·m})} \\times 98{,}066{,}500",
    subtext: "In scientific notation: dyn·cm = kgf·m × 9.80665 × 10^7."
  },
  formulaTitle: "Kilogram-Force Meter to Dyne-Centimeter Conversion Formula",
  practicalTip: {
    title: "Quick 10^8 Mental Estimation",
    text: "Because 98,066,500 is approximately 10^8 (100 million) minus 2%, you can multiply your kgf·m value by 100 million and subtract 2% (e.g., 0.5 kgf·m × 10^8 = 50,000,000; minus 2% = 49,000,000 dyn·cm; exact is 49,033,250 dyn·cm)."
  },
  expertNote: {
    title: "CGS Torque vs Scalar Work (Ergs)",
    text: "In the CGS system, one dyne-centimeter is dimensionally equivalent to one erg (1 dyn × 1 cm = 1 erg). However, torque is a vector cross product (r × F), whereas work or energy is a scalar dot product (F · d). By convention, always write rotational moments as dyn·cm, reserving ergs for energy or work."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Torsion Wire Calibration",
        subtitle: "A calibration weight fixture applies a moment of 0.004 kgf·m to a quartz torsion fiber. Express this torque in dyne-centimeters.",
        steps: [
          "State the initial torque: 0.004 kgf·m.",
          "Apply the conversion factor: dyn·cm = 0.004 × 98,066,500.",
          "Perform the calculation: 0.004 × 98,066,500 = 392,266 dyn·cm.",
          "Express in scientific notation: 3.923 × 10^5 dyn·cm."
        ]
      },
      {
        title: "Example 2: Industrial Viscometer Drive Gear",
        subtitle: "Convert a drive shaft torque rating of 0.025 kgf·m into dyne-centimeters for fluid shear stress analysis.",
        steps: [
          "Starting value: 0.025 kgf·m.",
          "Multiply by 98,066,500: 0.025 × 98,066,500 = 2,451,662.5 dyn·cm.",
          "Final Result: 0.025 kgf·m corresponds to approximately 2.452 × 10^6 dyn·cm."
        ]
      },
      {
        title: "Example 3: Small Mechanical Escapement Spring",
        subtitle: "Convert a torque of 0.0015 kgf·m into dyne-centimeters.",
        steps: [
          "Starting value: 0.0015 kgf·m.",
          "Multiply by 98,066,500: 0.0015 × 98,066,500 = 147,099.75 dyn·cm.",
          "Final Result: 0.0015 kgf·m equals approximately 1.471 × 10^5 dyn·cm."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram-Force Meter to Dyne-Centimeter Reference Table",
    headers: ["Kilogram-Force Meters (kgf·m)", "Dyne-Centimeters (dyn·cm)", "Scientific Notation", "Newton-Meters (N·m)"],
    rows: [
      { fromVal: "0.001 kgf·m", toVal: "98,067 dyn·cm", extra: "9.807 × 10^4 dyn·cm", extra2: "0.00981 N·m" },
      { fromVal: "0.005 kgf·m", toVal: "490,333 dyn·cm", extra: "4.903 × 10^5 dyn·cm", extra2: "0.04903 N·m" },
      { fromVal: "0.01 kgf·m", toVal: "980,665 dyn·cm", extra: "9.807 × 10^5 dyn·cm", extra2: "0.09807 N·m" },
      { fromVal: "0.02 kgf·m", toVal: "1,961,330 dyn·cm", extra: "1.961 × 10^6 dyn·cm", extra2: "0.19613 N·m" },
      { fromVal: "0.05 kgf·m", toVal: "4,903,325 dyn·cm", extra: "4.903 × 10^6 dyn·cm", extra2: "0.49033 N·m" },
      { fromVal: "0.10 kgf·m", toVal: "9,806,650 dyn·cm", extra: "9.807 × 10^6 dyn·cm", extra2: "0.98067 N·m" },
      { fromVal: "0.20 kgf·m", toVal: "19,613,300 dyn·cm", extra: "1.961 × 10^7 dyn·cm", extra2: "1.96133 N·m" },
      { fromVal: "0.50 kgf·m", toVal: "49,033,250 dyn·cm", extra: "4.903 × 10^7 dyn·cm", extra2: "4.90333 N·m" },
      { fromVal: "1.00 kgf·m", toVal: "98,066,500 dyn·cm", extra: "9.807 × 10^7 dyn·cm", extra2: "9.80665 N·m" },
      { fromVal: "2.00 kgf·m", toVal: "196,133,000 dyn·cm", extra: "1.961 × 10^8 dyn·cm", extra2: "19.6133 N·m" },
      { fromVal: "5.00 kgf·m", toVal: "490,332,500 dyn·cm", extra: "4.903 × 10^8 dyn·cm", extra2: "49.0333 N·m" },
      { fromVal: "10.0 kgf·m", toVal: "980,665,000 dyn·cm", extra: "9.807 × 10^8 dyn·cm", extra2: "98.0665 N·m" }
    ]
  },
  applications: {
    title: "Scientific Research & Applied Physics",
    items: [
      {
        title: "Rotational Viscometry & Fluid Rheology",
        text: "Older Brookfield and Haake rotational viscometer manuals express torsion calibration springs in dyne-centimeters. Converting mechanical drive test fixtures from kgf·m to dyn·cm ensures fluid viscosity measurements remain consistent."
      },
      {
        title: "Astrophysical & Geomagnetic Measurements",
        text: "Magnetic dipole moments and planetary rotational perturbation calculations in classical astronomical literature use CGS units, requiring conversion when interfacing with modern metric mechanical systems."
      },
      {
        title: "Torsion Pendulum & Fiber Physics",
        text: "Cavendish-type gravitational experiments and quartz fiber shear modulus tests quantify tiny restoring moments in dyne-centimeters."
      },
      {
        title: "Micro-Actuator & Nanotechnology Research",
        text: "Electrostatic micro-motors and piezoelectric rotational stages are characterized in CGS units in academic solid-state physics journals."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Gravitational-to-CGS Conversions",
    items: [
      "Missing exponent powers: Converting kgf·m to dyn·cm involves an eight-digit factor (almost 10^8). A dropped zero results in a 90% calculation error.",
      "Conflating dyne-centimeters with ergs: Never report a torque as ergs; the erg is exclusively reserved for energy and work.",
      "Confusing kgf·m with gf·cm: 1 kgf·m is 100,000 times larger than 1 gram-force centimeter (gf·cm). 1 gf·cm is 980.665 dyn·cm.",
      "Assuming dyne-centimeters are an SI unit: The dyne-centimeter belongs to the CGS system. For SI publications, convert to Newton-meters (N·m) or Newton-centimeters (N·cm)."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilogram-force meters to dyne-centimeters?",
      answer: "Multiply the kilogram-force meter (kgf·m) value by 98,066,500 (or 9.80665 × 10^7). For example, 1 kgf·m × 98,066,500 = 98,066,500 dyn·cm."
    },
    {
      question: "How many dyne-centimeters are in 1 kilogram-force meter?",
      answer: "There are exactly 98,066,500 dyne-centimeters in one kilogram-force meter."
    },
    {
      question: "What is 1 dyn·cm in kgf·m?",
      answer: "1 dyn·cm equals approximately 1.019716 × 10^-8 kgf·m (0.000000010197 kgf·m)."
    },
    {
      question: "Why is the factor 98,066,500?",
      answer: "1 kgf = 9.80665 × 10^5 dynes, and 1 meter = 100 centimeters. Multiplying (9.80665 × 10^5) × 100 gives 98,066,500 dyn·cm."
    },
    {
      question: "Is dyne-centimeter an SI unit?",
      answer: "No. It is the coherent torque unit in the CGS (centimeter-gram-second) system. The official SI unit is the Newton-meter (N·m)."
    },
    {
      question: "What is 0.1 kgf·m in dyn·cm?",
      answer: "0.1 kgf·m equals exactly 9,806,650 dyn·cm (9.80665 × 10^6 dyn·cm)."
    },
    {
      question: "What is the difference between dyn·cm and N·m?",
      answer: "1 Newton-meter equals exactly 10,000,000 (10^7) dyne-centimeters. 1 dyn·cm = 10^-7 N·m."
    },
    {
      question: "What is the difference between dyn·cm and gf·cm?",
      answer: "1 gram-force centimeter (gf·cm) equals 980.665 dyn·cm. A dyne is 1/980.665 of a gram-force."
    }
  ],
  relatedList: [
    { label: "Kilogram-Force Meter to Newton-Meter", from: "kilogram-force-meter", to: "newton-meter" },
    { label: "Kilogram-Force Meter to Newton-Centimeter", from: "kilogram-force-meter", to: "newton-centimeter" },
    { label: "Pound-Inch to Dyne-Centimeter", from: "pound-inch", to: "dyne-centimeter" },
    { label: "Newton-Meter to Dyne-Centimeter", from: "newton-meter", to: "dyne-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Kilogram-Force Meter to Newton-Meter Conversion Guide",
      description: "Convert legacy gravitational metric torque ratings into modern standard SI Newton-meters.",
      from: "kilogram-force-meter",
      to: "newton-meter"
    },
    {
      title: "Newton-Meter to Dyne-Centimeter Conversion Guide",
      description: "Understand the mathematical connection between SI and CGS torque units in physical science.",
      from: "newton-meter",
      to: "dyne-centimeter"
    }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Historical CGS Units",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "CRC Handbook of Chemistry and Physics: Units and Conversion Factors",
    "ASTM D2196: Rheological Properties of Non-Newtonian Materials by Rotational Viscometer"
  ]
};
