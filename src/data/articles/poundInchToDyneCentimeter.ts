import { CustomArticleData } from "./types";

export const poundInchToDyneCentimeter: CustomArticleData = {
  fromUnitId: "pound-inch",
  toUnitId: "dyne-centimeter",
  seoTitle: "Pound-Inch to Dyne-Centimeter Converter (lb·in to dyn·cm)",
  metaDescription: "Convert pound-inches to dyne-centimeters (lb·in to dyn·cm) accurately. 1,129,848 factor, physics formulas, micro-torque examples, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/pound-inch-to-dyne-centimeter",
  h1: "Pound-Inch to Dyne-Centimeter Converter",
  introduction: [
    "The pound-inch (symbol: lb·in, often written as in-lb) and the dyne-centimeter (symbol: dyn·cm) bridge two vastly different measurement domains: practical imperial workshop torque and foundational centimeter-gram-second (CGS) physics. While the pound-inch is commonly encountered on North American assembly benches for electronics and small machinery, the dyne-centimeter measures ultra-subtle rotational moments in physical laboratories, surface tension rheology, galvanometer movements, and micro-electromechanical systems (MEMS).",
    "Converting pound-inches to dyne-centimeters requires scaling across unit systems. One Newton-meter equals exactly 10,000,000 (10^7) dyne-centimeters. Because 1 pound-inch equals 0.112984829 Newton-meters, multiplying by 10^7 establishes that 1 pound-inch equals exactly 1,129,848.29 dyne-centimeters. Inversely, 1 dyne-centimeter equals approximately 8.85075 × 10^-7 pound-inches.",
    "This reference guide presents the exact mathematical derivation, demonstrates scientific conversions between imperial specifications and CGS laboratory data, provides an extensive reference table, and details the primary scientific applications of micro-torque."
  ],
  quickAnswer: {
    text: "To convert pound-inches to dyne-centimeters, multiply the torque value by 1,129,848.29 (or 1.12985 × 10^6). For example, a delicate 2 lb·in mechanical spring torque converts to approximately 2,259,697 dyn·cm.",
    formulaDisplay: "\\text{dyn·cm} = \\text{lb·in} \\times 1{,}129{,}848.29",
    subtext: "1 pound-inch equals approximately 1,129,848.29 dyne-centimeters. 1 dyn·cm equals 8.85075 × 10^-7 lb·in."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in-lb) is an imperial and US customary unit of torque representing one pound-force acting perpendicularly at a radius of one inch (1 lb·in = 1 lbf × 1 in = 0.112984829 N·m). It is the standard torque rating for consumer electronics, automotive interior trim, precision firearms, and light bicycle components."
  },
  aboutTargetUnit: {
    title: "Understanding the Dyne-Centimeter (dyn·cm)",
    text: "The dyne-centimeter (symbol: dyn·cm) is the standard unit of torque in the centimeter-gram-second (CGS) system of units. It is defined as the moment resulting from a force of one dyne acting at a radial distance of one centimeter (1 dyn·cm = 1 dyn × 1 cm = 10^-7 N·m). Because one dyne is a minute force (10^-5 Newtons, or roughly the weight of a mosquito), dyne-centimeters quantify infinitesimal torques in rheological viscometers, torsion balances, and magnetic dipole experiments."
  },
  relationship: "The relationship between pound-inches and dyne-centimeters follows directly from SI and CGS definitions. 1 pound-force equals 444,822.16 dynes, and 1 international inch equals 2.54 centimeters. Multiplying these gives: 1 lb·in = 444,822.16 dyn × 2.54 cm = 1,129,848.29 dyn·cm (1.12984829 × 10^6 dyn·cm). Inverting this value yields 1 dyn·cm ≈ 8.8507458 × 10^-7 lb·in.",
  relationshipTitle: "Torque Orders of Magnitude (lb·in vs dyn·cm)",
  relationshipItems: [
    { label: "0.01 lb·in", value: "11,298 dyn·cm (Galvanometer hairspring restoring torque)" },
    { label: "0.10 lb·in", value: "112,985 dyn·cm (Miniature mechanical watch escapement)" },
    { label: "1.00 lb·in", value: "1,129,848 dyn·cm (Smartphone casing micro-fastener)" },
    { label: "5.00 lb·in", value: "5,649,241 dyn·cm (Bicycle computer mount & optical bracket)" },
    { label: "10.0 lb·in", value: "11,298,483 dyn·cm (Terminal strip electrical screw)" },
    { label: "25.0 lb·in", value: "28,246,207 dyn·cm (Firearm scope ring clamp screw)" }
  ],
  formula: {
    text: "Multiply the torque value in pound-inches by 1,129,848.29 to obtain the torque in dyne-centimeters.",
    math: "\\tau_{(\\text{dyn·cm})} = \\tau_{(\\text{lb·in})} \\times 1{,}129{,}848.29",
    subtext: "In scientific notation: dyn·cm = lb·in × 1.1298483 × 10^6."
  },
  formulaTitle: "Pound-Inch to Dyne-Centimeter Conversion Formula",
  practicalTip: {
    title: "Scientific Notation Shortcut",
    text: "Because the conversion factor is approximately 1.13 million, multiply your pound-inch value by 1.13 and append 10^6 (e.g., 3 lb·in × 1.13 × 10^6 ≈ 3.39 × 10^6 dyn·cm)."
  },
  expertNote: {
    title: "CGS System in Modern Laboratories",
    text: "Although modern engineering uses the SI system (Newton-meters and Newton-centimeters), older viscometers (such as Brookfield dials) and polymer physics literature frequently publish fluid yield stress and spring constants in dyn·cm. Converting to pound-inches allows workshop fabrication of matching test fixtures."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Rotational Viscometer Spring Calibration",
        subtitle: "A rotational viscometer spring has a full-scale deflection torque of 0.065 lb·in. Express this value in dyne-centimeters for rheological calculation.",
        steps: [
          "State the initial torque: 0.065 lb·in.",
          "Apply the conversion factor: dyn·cm = 0.065 × 1,129,848.29.",
          "Calculate: 0.065 × 1,129,848.29 = 73,440.14 dyn·cm.",
          "Final Result: 0.065 lb·in equals approximately 73,440 dyn·cm (or 7.344 × 10^4 dyn·cm)."
        ]
      },
      {
        title: "Example 2: Precision Optical Rotary Stage",
        subtitle: "Convert a friction torque limit of 1.25 lb·in into dyne-centimeters.",
        steps: [
          "Starting value: 1.25 lb·in.",
          "Multiply by 1,129,848.29: 1.25 × 1,129,848.29 = 1,412,310.36 dyn·cm.",
          "Final Result: 1.25 lb·in equals approximately 1.412 × 10^6 dyn·cm."
        ]
      },
      {
        title: "Example 3: Miniature Electric Motor Detent Torque",
        subtitle: "A small stepper motor exhibits a detent torque of 0.40 lb·in. Determine its equivalent in dyne-centimeters.",
        steps: [
          "Starting value: 0.40 lb·in.",
          "Multiply by 1,129,848.29: 0.40 × 1,129,848.29 = 451,939.32 dyn·cm.",
          "Final Result: 0.40 lb·in corresponds to 451,939 dyn·cm (4.52 × 10^5 dyn·cm)."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Inch to Dyne-Centimeter Reference Table",
    headers: ["Pound-Inches (lb·in)", "Dyne-Centimeters (dyn·cm)", "Scientific Notation", "Newton-Meter (N·m)"],
    rows: [
      { fromVal: "0.01 lb·in", toVal: "11,298 dyn·cm", extra: "1.130 × 10^4 dyn·cm", extra2: "0.00113 N·m" },
      { fromVal: "0.05 lb·in", toVal: "56,492 dyn·cm", extra: "5.649 × 10^4 dyn·cm", extra2: "0.00565 N·m" },
      { fromVal: "0.10 lb·in", toVal: "112,985 dyn·cm", extra: "1.130 × 10^5 dyn·cm", extra2: "0.01130 N·m" },
      { fromVal: "0.25 lb·in", toVal: "282,462 dyn·cm", extra: "2.825 × 10^5 dyn·cm", extra2: "0.02825 N·m" },
      { fromVal: "0.50 lb·in", toVal: "564,924 dyn·cm", extra: "5.649 × 10^5 dyn·cm", extra2: "0.05649 N·m" },
      { fromVal: "1.00 lb·in", toVal: "1,129,848 dyn·cm", extra: "1.130 × 10^6 dyn·cm", extra2: "0.11298 N·m" },
      { fromVal: "2.00 lb·in", toVal: "2,259,697 dyn·cm", extra: "2.260 × 10^6 dyn·cm", extra2: "0.22597 N·m" },
      { fromVal: "3.00 lb·in", toVal: "3,389,545 dyn·cm", extra: "3.390 × 10^6 dyn·cm", extra2: "0.33895 N·m" },
      { fromVal: "5.00 lb·in", toVal: "5,649,241 dyn·cm", extra: "5.649 × 10^6 dyn·cm", extra2: "0.56492 N·m" },
      { fromVal: "10.0 lb·in", toVal: "11,298,483 dyn·cm", extra: "1.130 × 10^7 dyn·cm", extra2: "1.12985 N·m" },
      { fromVal: "15.0 lb·in", toVal: "16,947,724 dyn·cm", extra: "1.695 × 10^7 dyn·cm", extra2: "1.69477 N·m" },
      { fromVal: "20.0 lb·in", toVal: "22,596,966 dyn·cm", extra: "2.260 × 10^7 dyn·cm", extra2: "2.25970 N·m" },
      { fromVal: "25.0 lb·in", toVal: "28,246,207 dyn·cm", extra: "2.825 × 10^7 dyn·cm", extra2: "2.82462 N·m" }
    ]
  },
  applications: {
    title: "Scientific & Industrial Applications",
    items: [
      {
        title: "Fluid Viscometry & Rheology",
        text: "Rotational viscometers measure the torque required to spin a spindle immersed in fluid. Older laboratory models calibrate internal beryllium-copper springs in dyne-centimeters, requiring conversion when correlating with mechanical drive specs in pound-inches."
      },
      {
        title: "Magnetic Dipole & Torsion Balance Experiments",
        text: "Physics research instruments measuring magnetic susceptibility, gravitational constants, or electrostatic attraction utilize delicate quartz fibers calibrated in dyn·cm."
      },
      {
        title: "Horology & Precision Escapement Testing",
        text: "High-end mechanical watch movements rely on hairspring balance wheels exerting torque measured in dyne-centimeters or microNewton-meters to maintain chronometer accuracy."
      },
      {
        title: "Micro-Electromechanical Systems (MEMS)",
        text: "Silicon micromirrors, miniature gyroscopes, and micro-actuators in aerospace guidance systems produce electrostatic and piezoelectric torque measured in dyne-centimeters."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in CGS Torque Conversions",
    items: [
      "Losing track of decimal places: Because 1 lb·in equals over 1.12 million dyn·cm, human errors in scientific notation exponents (e.g., writing 10^5 instead of 10^6) produce 10-fold errors.",
      "Confusing dyne-centimeters with ergs: While dimensionally identical (1 dyn × 1 cm = 1 erg), the erg represents scalar energy or work, whereas the dyne-centimeter represents vector rotational torque.",
      "Conflating dyne with gram-force: A dyne is roughly 1/981 of a gram-force. 1 gf·cm is approximately 980.665 dyn·cm.",
      "Overlooking instrument temperature drift: Laboratory hairsprings calibrated in dyn·cm are temperature sensitive; temperature variations alter spring modulus."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-inches to dyne-centimeters?",
      answer: "Multiply the pound-inch value by 1,129,848.29. For example, 2 lb·in × 1,129,848.29 = 2,259,697 dyn·cm."
    },
    {
      question: "How many dyne-centimeters are in 1 pound-inch?",
      answer: "There are exactly 1,129,848.29 dyne-centimeters in one pound-inch."
    },
    {
      question: "What is a dyne-centimeter in Newton-meters?",
      answer: "1 dyne-centimeter equals 10^-7 Newton-meters (0.0000001 N·m). 1 N·m equals 10^7 dyne-centimeters."
    },
    {
      question: "Is dyne-centimeter an SI unit?",
      answer: "No. The dyne-centimeter is the coherent unit of torque in the CGS (centimeter-gram-second) system. The official SI unit is the Newton-meter (N·m)."
    },
    {
      question: "How do I convert dyn·cm to lb·in?",
      answer: "Multiply the dyne-centimeter value by 8.850746 × 10^-7 (or divide by 1,129,848.29). For example, 1,000,000 dyn·cm = 0.885 lb·in."
    },
    {
      question: "Why are dyne-centimeters used in viscometry?",
      answer: "Liquid shear resistance creates extremely tiny frictional torques on rotating spindles. Dyne-centimeters allow researchers to express these subtle forces without clumsy negative decimal powers."
    },
    {
      question: "What is 0.5 in-lb in dyn·cm?",
      answer: "0.5 in-lb equals approximately 564,924 dyn·cm (0.5 × 1,129,848.29 = 564,924.1 dyn·cm)."
    },
    {
      question: "What is the difference between an erg and a dyne-centimeter?",
      answer: "An erg is the CGS unit of scalar energy or work (force along displacement). A dyne-centimeter is the CGS unit of vector torque (force perpendicular to a lever arm)."
    }
  ],
  relatedList: [
    { label: "Pound-Inch to Newton-Meter", from: "pound-inch", to: "newton-meter" },
    { label: "Pound-Inch to Newton-Centimeter", from: "pound-inch", to: "newton-centimeter" },
    { label: "Newton-Meter to Dyne-Centimeter", from: "newton-meter", to: "dyne-centimeter" },
    { label: "Pound-Foot to Dyne-Centimeter", from: "pound-foot", to: "dyne-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Inch to Newton-Meter Conversion Guide",
      description: "Convert imperial inch-pounds to standard international metric Newton-meters.",
      from: "pound-inch",
      to: "newton-meter"
    },
    {
      title: "Newton-Meter to Dyne-Centimeter Conversion Guide",
      description: "Explore the relationship between SI and CGS torque units in physical science.",
      from: "newton-meter",
      to: "dyne-centimeter"
    }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Historical CGS Units",
    "ASTM D2196: Standard Test Methods for Rheological Properties of Non-Newtonian Materials",
    "ISO 80000-4: Quantities and units — Mechanics",
    "CRC Handbook of Chemistry and Physics: Conversion Factors for Torque and Energy"
  ]
};
