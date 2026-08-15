import { CustomArticleData } from "./types";

export const poundFootToDyneCentimeter: CustomArticleData = {
  fromUnitId: "pound-foot",
  toUnitId: "dyne-centimeter",
  seoTitle: "Pound-Foot to Dyne-Centimeter Converter (lb·ft to dyn·cm)",
  metaDescription: "Convert pound-feet to dyne-centimeters (lb·ft to dyn·cm) accurately. Exact CGS conversion factors, formulas, laboratory physics examples, tables, and FAQs.",
  h1: "Pound-Foot to Dyne-Centimeter Converter",
  introduction: [
    "The pound-foot (lb·ft, or foot-pound) and the dyne-centimeter (dyn·cm) represent opposite ends of the mechanical measurement spectrum. The pound-foot is a macroscale unit of torque widely used in North American automotive engineering, civil construction, and heavy industrial machinery. In contrast, the dyne-centimeter is the fundamental unit of torque in the Centimeter-Gram-Second (CGS) physical measurement system, commonly employed in precision scientific research, geophysics, fluid rheology, and microscale physics.",
    "Converting pound-feet to dyne-centimeters connects macroscale imperial engineering measurements with high-precision scientific modeling. Because one pound-foot equals exactly 1.3558179483314004 Newton-meters, and one Newton-meter equals exactly $10^7$ dyne-centimeters (10,000,000 dyn·cm), one pound-foot equals exactly 13,558,179.483314 dyne-centimeters ($1.35581795 \\times 10^7\\text{ dyn·cm}$). Converting from lb·ft to dyn·cm involves multiplying by 13,558,179.48.",
    "This reference guide explains the dimensional physics linking US customary and CGS units, provides worked examples for laboratory dynamometers and geophysics seismic moment calculations, and includes a comprehensive conversion reference table."
  ],
  quickAnswer: {
    text: "To convert pound-feet to dyne-centimeters, multiply the torque value by 13,558,179.48 (or $1.355818 \\times 10^7$). For example, 1 pound-foot of torque equals approximately 1.356 × 10^7 dyn·cm (13.56 million dyne-centimeters).",
    formulaDisplay: "\\text{dyn·cm} = \\text{lb·ft} \\times 1.355818 \\times 10^7",
    subtext: "1 pound-foot equals exactly 13,558,179.4833 dyne-centimeters."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or lbf·ft) is the US customary unit of torque. Defined as the turning moment resulting from one pound-force exerted perpendicular to a lever arm of one foot (1 lb·ft = 1 lbf × 1 ft = 1.355818 N·m), it is the primary rating for American automotive engines, industrial gearboxes, and structural bolting tools."
  },
  aboutTargetUnit: {
    title: "Understanding the Dyne-Centimeter (dyn·cm)",
    text: "The dyne-centimeter (symbol: dyn·cm) is the coherent unit of torque and energy in the CGS metric system. Representing one dyne of force exerted at a radius of one centimeter ($1\\text{ dyn·cm} = 1\\text{ dyn} \\times 1\\text{ cm} = 10^{-7}\\text{ N·m} = 1\\text{ erg}$), it is standard in laboratory rheology, polymer viscoelasticity, and seismic moment calculations."
  },
  relationship: "The exact conversion formula combines imperial force and length definitions with CGS scaling: $1\\text{ lb·ft} = 4.4482216152605\\text{ N} \\times 0.3048\\text{ m} \\times 10^7\\text{ dyn·cm/N·m} = 13,558,179.483314\\text{ dyn·cm}$. Conversely, $1\\text{ dyn·cm} \\approx 7.37562149 \\times 10^{-8}\\text{ lb·ft}$.",
  relationshipTitle: "Imperial to CGS Scale Benchmark",
  relationshipItems: [
    { label: "0.001 lb·ft", value: "13,558 dyn·cm (Precision instrument balance hairspring)" },
    { label: "0.10 lb·ft", value: "1,355,818 dyn·cm (1.36 × 10^6 dyn·cm / miniature servo)" },
    { label: "1.00 lb·ft", value: "13,558,179 dyn·cm (1.36 × 10^7 dyn·cm / hand screwdriver)" },
    { label: "10.0 lb·ft", value: "135,581,795 dyn·cm (1.36 × 10^8 dyn·cm / small engine bolt)" },
    { label: "100 lb·ft", value: "1,355,817,948 dyn·cm (1.36 × 10^9 dyn·cm / car wheel lug nut)" }
  ],
  formula: {
    text: "Multiply the torque in pound-feet by 13,558,179.48 (or $1.35581795 \\times 10^7$) to calculate the equivalent torque in dyne-centimeters.",
    math: "\\tau_{(\\text{dyn·cm})} = \\tau_{(\\text{lb·ft})} \\times 1.35581795 \\times 10^7",
    subtext: "To convert dyne-centimeters back to pound-feet, multiply by $7.3756215 \\times 10^{-8}$ (divide by 13,558,179.48)."
  },
  formulaTitle: "lb·ft to dyn·cm Exact Formula",
  practicalTip: {
    title: "Scientific Notation Formatting",
    text: "Because the conversion factor exceeds 13.5 million, always express intermediate and final calculations in scientific notation (e.g., $15\\text{ lb·ft} = 15 \\times 1.3558 \\times 10^7 = 2.0337 \\times 10^8\\text{ dyn·cm}$)."
  },
  expertNote: {
    title: "Seismic Moment & Tectonic Fault Modeling",
    text: "In geophysics and seismology, earthquake rupture energy is quantified as scalar seismic moment ($M_0$), historically documented in dyne-centimeters ($10^{20}$ to $10^{30}$ dyn·cm). Converting structural test load data from lb·ft into CGS dyn·cm allows direct comparison with simulated tectonic shear stresses."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Torsion Rig Calibration",
        subtitle: "A calibration torque arm applies 0.25 lb·ft of torque to a polymer rheometer. Convert this to dyn·cm.",
        steps: [
          "Identify initial torque: 0.25 lb·ft.",
          "Multiply by conversion factor: $\\text{dyn·cm} = 0.25 \\times 13,558,179.48$.",
          "Calculate: $0.25 \\times 13,558,179.48 = 3,389,544.87$.",
          "Final Result: 0.25 lb·ft equals approximately $3.39 \\times 10^6\\text{ dyn·cm}$ (3,389,545 dyn·cm)."
        ]
      },
      {
        title: "Example 2: Small Hand Tool Tightening Torque",
        subtitle: "Convert 2.5 lb·ft of torque on a calibrated mechanical dial into dyne-centimeters.",
        steps: [
          "Starting value: 2.5 lb·ft.",
          "Apply formula: $2.5 \\times 1.35581795 \\times 10^7 = 3.38954 \\times 10^7$.",
          "Final Result: 2.5 lb·ft equals $33,895,449\\text{ dyn·cm}$ ($3.39 \\times 10^7\\text{ dyn·cm}$)."
        ]
      },
      {
        title: "Example 3: Wind Tunnel Scale Model Moment",
        subtitle: "Aerodynamic pitching moment on a scale aircraft wing is measured at 12 lb·ft. Express this in dyn·cm.",
        steps: [
          "Starting value: 12 lb·ft.",
          "Multiply: $12 \\times 13,558,179.48 = 162,698,153.8$.",
          "Final Result: 12 lb·ft equals approximately $1.63 \\times 10^8\\text{ dyn·cm}$."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Foot to Dyne-Centimeter Reference Table",
    headers: ["Pound-Feet (lb·ft)", "Dyne-Centimeters (dyn·cm)", "Scientific & Physics Application"],
    rows: [
      { fromVal: "0.01 lb·ft", toVal: "135,582 dyn·cm (1.36 × 10⁵)", extra: "Precision mechanical balance pivot" },
      { fromVal: "0.05 lb·ft", toVal: "677,909 dyn·cm (6.78 × 10⁵)", extra: "Galvanometer heavy coil deflection" },
      { fromVal: "0.10 lb·ft", toVal: "1,355,818 dyn·cm (1.36 × 10⁶)", extra: "Fluid rheometer spindle shear torque" },
      { fromVal: "0.50 lb·ft", toVal: "6,779,090 dyn·cm (6.78 × 10⁶)", extra: "Rotational viscometer calibration standard" },
      { fromVal: "1.00 lb·ft", toVal: "13,558,179 dyn·cm (1.36 × 10⁷)", extra: "Base imperial torque unit conversion" },
      { fromVal: "2.00 lb·ft", toVal: "27,116,359 dyn·cm (2.71 × 10⁷)", extra: "Laboratory benchtop stirrer motor" },
      { fromVal: "5.00 lb·ft", toVal: "67,790,897 dyn·cm (6.78 × 10⁷)", extra: "Small drone propeller aerodynamic drag" },
      { fromVal: "10.0 lb·ft", toVal: "135,581,795 dyn·cm (1.36 × 10⁸)", extra: "Acoustic horn driver diaphragm torque" },
      { fromVal: "25.0 lb·ft", toVal: "338,954,487 dyn·cm (3.39 × 10⁸)", extra: "Small engine crankshaft starting moment" },
      { fromVal: "50.0 lb·ft", toVal: "677,908,974 dyn·cm (6.78 × 10⁸)", extra: "Automotive suspension arm pivot bolt" },
      { fromVal: "100 lb·ft", toVal: "1,355,817,948 dyn·cm (1.36 × 10⁹)", extra: "Passenger car wheel lug nut specification" }
    ]
  },
  applications: {
    title: "Key Scientific & Laboratory Uses",
    items: [
      {
        title: "Fluid Rheology & Viscometric Testing",
        text: "Polymer research laboratories converting mechanical drive inputs (lb·ft) into CGS dyn·cm to analyze shear rates and non-Newtonian fluid behaviors in cone-and-plate viscometers."
      },
      {
        title: "Geophysics & Seismology Fault Dynamics",
        text: "Seismic engineers modeling tectonic fault slip friction convert laboratory rock shear test data (lb·ft) into dyne-centimeters for seismic moment ($M_0$) computations."
      },
      {
        title: "Aerospace Scale-Model Wind Tunnel Testing",
        text: "Aeronautical engineers convert aerodynamic balance moments recorded in lb·ft into CGS units when applying non-dimensional fluid flow scaling laws."
      },
      {
        title: "Acoustic Transducer & Speaker Engineering",
        text: "High-power acoustic driver design involves converting voice coil magnetic rotational moments between imperial tooling standards and physical CGS magnetic field equations."
      }
    ]
  },
  pitfalls: {
    title: "Common CGS Conversion Pitfalls",
    items: [
      "Floating-Point Rounding in Software: Multiplying large numbers ($1.3558 \\times 10^7$) can cause floating-point truncation if variables are declared as standard single-precision floats; use 64-bit double precision.",
      "Conflating dyn·cm with ergs: While $1\\text{ dyn·cm} = 1\\text{ erg}$, dyn·cm is a vector torque unit, whereas the erg is a scalar energy unit.",
      "Forgetting the 10^7 Metric Factor: Converting 1 lb·ft to N·m gives 1.3558; forgetting the $10^7$ factor when moving to dyn·cm causes a ten-million-fold underestimation.",
      "Confusing lb·in with lb·ft: 1 lb·in = 1,129,848.29 dyn·cm (approx 1.13 × 10^6 dyn·cm), exactly 1/12 of 1 lb·ft."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-feet to dyne-centimeters?",
      answer: "Multiply the pound-foot (lb·ft) value by 13,558,179.48 ($1.355818 \\times 10^7$). For example, 2 lb·ft × 13,558,179.48 = 27,116,358.96 dyn·cm."
    },
    {
      question: "How many dyne-centimeters are in 1 pound-foot?",
      answer: "There are exactly 13,558,179.483314 dyne-centimeters in 1 pound-foot ($1.355818 \\times 10^7\\text{ dyn·cm}$)."
    },
    {
      question: "What is the relationship between pound-feet, N·m, and dyn·cm?",
      answer: "1 pound-foot equals exactly 1.355818 Newton-meters (SI) and 13,558,179.48 dyne-centimeters (CGS)."
    },
    {
      question: "How do I convert dyn·cm back to pound-feet?",
      answer: "Divide the dyn·cm value by 13,558,179.48 (or multiply by $7.3756215 \\times 10^{-8}$). For example, $5 \\times 10^7\\text{ dyn·cm} \\div 13,558,179.48 = 3.69\\text{ lb·ft}$."
    },
    {
      question: "Why do scientists use dyne-centimeters instead of pound-feet?",
      answer: "The dyne-centimeter is a coherent CGS metric unit derived directly from grams, centimeters, and seconds. It integrates seamlessly into electromagnetic, thermodynamic, and fluid dynamic equations without requiring imperial conversion constants."
    },
    {
      question: "How many dyne-centimeters are in 1 pound-inch?",
      answer: "1 pound-inch (lb·in) equals exactly 1,129,848.29 dyne-centimeters ($1.129848 \\times 10^6\\text{ dyn·cm}$)."
    },
    {
      question: "What is 10 lb·ft in dyn·cm?",
      answer: "10 lb·ft equals approximately $1.3558 \\times 10^8\\text{ dyn·cm}$ (135,581,795 dyn·cm)."
    },
    {
      question: "Is dyne-centimeter equivalent to the erg?",
      answer: "Dimensionally, $1\\text{ dyn·cm} = 1\\text{ erg} = 10^{-7}\\text{ Joules}$. However, the erg is used for scalar energy and work, while dyn·cm is reserved for rotational torque."
    }
  ],
  relatedList: [
    { label: "Pound-Foot to Newton-Meter", from: "pound-foot", to: "newton-meter" },
    { label: "Newton-Meter to Dyne-Centimeter", from: "newton-meter", to: "dyne-centimeter" },
    { label: "Pound-Foot to Newton-Centimeter", from: "pound-foot", to: "newton-centimeter" },
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" }
  ],
  relatedArticles: [
    {
      title: "Newton-Meter to Dyne-Centimeter Conversion Guide",
      description: "Convert SI metric torque to CGS units for microscale physics and MEMS device analysis.",
      from: "newton-meter",
      to: "dyne-centimeter"
    },
    {
      title: "Pound-Foot to Newton-Meter Conversion Guide",
      description: "Convert imperial foot-pounds into SI Newton-meters for international automotive specifications.",
      from: "pound-foot",
      to: "newton-meter"
    }
  ],
  references: [
    "IUPAC Compendium of Chemical Terminology (Gold Book): CGS and SI Units",
    "ISO 80000-4: Quantities and Units — Part 4: Mechanics",
    "CRC Handbook of Chemistry and Physics: Conversion Factors and Fundamental Constants",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
