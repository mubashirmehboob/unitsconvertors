import { CustomArticleData } from "./types";

export const newtonMeterToDyneCentimeter: CustomArticleData = {
  fromUnitId: "newton-meter",
  toUnitId: "dyne-centimeter",
  seoTitle: "Newton-Meter to Dyne-Centimeter Converter (N·m to dyn·cm)",
  metaDescription: "Convert Newton-meters to dyne-centimeters (N·m to dyn·cm) accurately. Exact 10^7 conversion factor, CGS physics formulas, MEMS examples, tables, and FAQs.",
  h1: "Newton-Meter to Dyne-Centimeter Converter",
  introduction: [
    "The Newton-meter (N·m) and the dyne-centimeter (dyn·cm) are units of rotational torque and mechanical moment. The Newton-meter is the standard coherent unit of the International System of Units (SI), whereas the dyne-centimeter is the fundamental unit of torque in the Centimeter-Gram-Second (CGS) system of physical units.",
    "Converting Newton-meters to dyne-centimeters is commonplace in micro-electromechanical systems (MEMS), biophysical cell mechanics, quartz crystal microbalance sensors, surface tension torsion balances, and astronomical instrumentation. Because one Newton equals exactly $10^5$ dynes (100,000 dyn) and one meter equals $10^2$ centimeters (100 cm), one Newton-meter equals exactly $10^7$ dyne-centimeters (10,000,000 dyn·cm). Converting from N·m to dyn·cm involves multiplying by 10,000,000.",
    "This technical guide explains CGS and SI dimensional relationships, provides step-by-step conversion methods, highlights microscale sensor and torsion wire physics applications, and offers an extensive reference table."
  ],
  quickAnswer: {
    text: "To convert Newton-meters to dyne-centimeters, multiply the torque value by 10,000,000 ($10^7$). For example, a delicate micro-galvanometer movement exerting $2 \\times 10^{-4}$ N·m develops exactly 2,000 dyn·cm of restoring torque.",
    formulaDisplay: "\\text{dyn·cm} = \\text{N·m} \\times 10^7",
    subtext: "1 Newton-meter equals exactly 10,000,000 (10^7) dyne-centimeters."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Meter (N·m)",
    text: "The Newton-meter (symbol: N·m) is the SI base derived unit of torque. Formed from the SI base units of mass, length, and time as $1\\text{ N·m} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$, it quantifies rotational moments across all scales of mechanical and electrical engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Dyne-Centimeter (dyn·cm)",
    text: "The dyne-centimeter (symbol: dyn·cm) is the coherent unit of torque and energy in the CGS metric system. Defined as one dyne of force exerted at a one-centimeter radius ($1\\text{ dyn·cm} = 1\\text{ dyn} \\times 1\\text{ cm} = 1\\text{ g}\\cdot\\text{cm}^2/\\text{s}^2 = 1\\text{ erg}$), it is used in scientific research, viscoelastic rheology, and microscale physics where SI values would be unwieldy fractions."
  },
  relationship: "Derived through CGS base unit definitions ($1\\text{ N} = 10^5\\text{ dyn}$ and $1\\text{ m} = 10^2\\text{ cm}$): $1\\text{ N·m} = (10^5\\text{ dyn}) \\times (10^2\\text{ cm}) = 10^7\\text{ dyn·cm} = 10,000,000\\text{ dyn·cm}$. Conversely, $1\\text{ dyn·cm} = 10^{-7}\\text{ N·m} = 0.0000001\\text{ N·m}$.",
  relationshipTitle: "SI to CGS Micro-Torque Scale",
  relationshipItems: [
    { label: "0.0000001 N·m", value: "1.0 dyn·cm (Torsion balance fiber deflection)" },
    { label: "0.0001 N·m", value: "1,000 dyn·cm (Precision analog galvanometer coil torque)" },
    { label: "0.001 N·m", value: "10,000 dyn·cm (Micro-stepping motor for camera zoom lens)" },
    { label: "0.1 N·m", value: "1,000,000 dyn·cm (Miniature precision brushless motor)" },
    { label: "1.0 N·m", value: "10,000,000 dyn·cm (Base SI torque unit = 10^7 dyn·cm)" }
  ],
  formula: {
    text: "Multiply the torque in Newton-meters by 10,000,000 ($10^7$) to calculate the torque in dyne-centimeters.",
    math: "\\tau_{(\\text{dyn·cm})} = \\tau_{(\\text{N·m})} \\times 10^7",
    subtext: "To convert dyne-centimeters back to Newton-meters, multiply by $10^{-7}$ (divide by 10,000,000)."
  },
  formulaTitle: "N·m to dyn·cm Exact Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "In physics and MEMS equations, express values using scientific notation: add 7 to the exponent of the Newton-meter value (e.g., $3.5 \\times 10^{-5}\\text{ N·m} \\rightarrow 3.5 \\times 10^{-5+7} = 3.5 \\times 10^2 = 350\\text{ dyn·cm}$)."
  },
  expertNote: {
    title: "Dimensional Equivalence with the Erg",
    text: "In CGS scalar physics, 1 dyne-centimeter is dimensionally identical to 1 erg ($1\\text{ erg} = 1\\text{ dyn}\\cdot\\text{cm}$). However, when referring to torque or torsional moments, standards require writing 'dyn·cm' rather than 'erg' to preserve the vector nature of the quantity."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Torsion Pendulum Hairspring",
        subtitle: "A precision horological balance spring generates $4.2 \\times 10^{-4}$ N·m of restoring torque. Convert to dyn·cm.",
        steps: [
          "Identify initial torque: $4.2 \\times 10^{-4}\\text{ N·m}$ (0.00042 N·m).",
          "Apply conversion equation: $\\text{dyn·cm} = 0.00042 \\times 10^7$.",
          "Calculate: $0.00042 \\times 10,000,000 = 4,200$.",
          "Final Result: $4.2 \\times 10^{-4}\\text{ N·m}$ equals exactly 4,200 dyn·cm."
        ]
      },
      {
        title: "Example 2: MEMS Micro-Mirror Actuator",
        subtitle: "An electrostatic MEMS comb-drive applies $1.5 \\times 10^{-6}$ N·m of torque. Express this in dyne-centimeters.",
        steps: [
          "Starting value: $1.5 \\times 10^{-6}\\text{ N·m}$.",
          "Multiply by $10^7$: $1.5 \\times 10^{-6} \\times 10^7 = 1.5 \\times 10^1 = 15$.",
          "Final Result: $1.5 \\times 10^{-6}\\text{ N·m}$ converts to 15 dyn·cm."
        ]
      },
      {
        title: "Example 3: Fluid Viscometer Spindle Drag",
        subtitle: "A rotational viscometer records a viscous drag torque of 0.025 N·m. Determine the reading in dyn·cm.",
        steps: [
          "Starting value: 0.025 N·m.",
          "Multiply by $10^7$: $0.025 \\times 10,000,000 = 250,000$.",
          "Final Result: 0.025 N·m equals 250,000 dyn·cm ($2.5 \\times 10^5\\text{ dyn·cm}$)."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Meter to Dyne-Centimeter Reference Table",
    headers: ["Newton-Meters (N·m)", "Dyne-Centimeters (dyn·cm)", "Scientific & Physics Application"],
    rows: [
      { fromVal: "0.0000001 N·m (10⁻⁷ N·m)", toVal: "1 dyn·cm", extra: "Cavendish torsion balance fiber sensitivity limit" },
      { fromVal: "0.000001 N·m (10⁻⁶ N·m)", toVal: "10 dyn·cm", extra: "Microfluidic lab-on-a-chip magnetic bead rotation" },
      { fromVal: "0.00001 N·m (10⁻⁵ N·m)", toVal: "100 dyn·cm", extra: "MEMS optical LiDAR scanning mirror resonance" },
      { fromVal: "0.0001 N·m (10⁻⁴ N·m)", toVal: "1,000 dyn·cm", extra: "Mechanical wristwatch escapement wheel impulse" },
      { fromVal: "0.001 N·m (1 mN·m)", toVal: "10,000 dyn·cm", extra: "Quartz crystal microbalance surface shear torque" },
      { fromVal: "0.01 N·m (10 mN·m)", toVal: "100,000 dyn·cm", extra: "Cone-and-plate rheometer low-shear polymer test" },
      { fromVal: "0.05 N·m", toVal: "500,000 dyn·cm", extra: "Hard disk drive voice coil head actuator pivot" },
      { fromVal: "0.10 N·m", toVal: "1,000,000 dyn·cm", extra: "Precision miniature DC coreless dental motor" },
      { fromVal: "0.50 N·m", toVal: "5,000,000 dyn·cm", extra: "Compact laboratory magnetic stirrer motor" },
      { fromVal: "1.00 N·m", toVal: "10,000,000 dyn·cm", extra: "Base SI coherent torque unit (10⁷ dyn·cm)" },
      { fromVal: "5.00 N·m", toVal: "50,000,000 dyn·cm", extra: "Small electric drill spindle output torque" }
    ]
  },
  applications: {
    title: "Scientific & Microscale Applications",
    items: [
      {
        title: "MEMS & Nanotechnology Device Design",
        text: "Micro-electromechanical gyroscopes, accelerometer torsion springs, and micromirror arrays are modeled in CGS dyn·cm to keep mathematical matrices within manageable integer orders of magnitude."
      },
      {
        title: "Rheology & Polymer Viscometry",
        text: "Rotational viscometers and dynamic mechanical analysis (DMA) instruments quantify shear stresses and fluid resistance torques in dyne-centimeters when testing complex polymer solutions."
      },
      {
        title: "Horology & Mechanical Watchmaking",
        text: "Balance wheel inertia, hairspring torque curves, and mainspring power delivery are historically calculated and documented in dyne-centimeters by Swiss and German master watchmakers."
      },
      {
        title: "Biophysics & Cellular Torsion",
        text: "Optical tweezers and magnetic torque tweezers measure the torsional twisting stiffness of individual DNA molecules and flagellar bacterial motors using fractions of dyn·cm."
      }
    ]
  },
  pitfalls: {
    title: "Common CGS Conversion Pitfalls",
    items: [
      "Mixing Up Exponents: 1 N·m is $10^7$ dyn·cm (not $10^5$ or $10^6$). Remember that both force ($10^5$) and length ($10^2$) undergo conversion: $10^5 \\times 10^2 = 10^7$.",
      "Calling dyn·cm 'ergs' in Vector Calculations: While $1\\text{ erg} = 1\\text{ dyn}\\cdot\\text{cm}$, the term erg is reserved for scalar work or thermal energy, not torsional moments.",
      "Losing Negative Exponents in Microscale Values: When converting small values like $5 \\times 10^{-6}$ N·m, double-check that adding 7 yields $5 \\times 10^1 = 50\\text{ dyn·cm}$.",
      "Confusing dyn·cm with dyn·mm: 1 N·m equals $10^8$ dyn·mm (100,000,000 dyn·mm)."
    ]
  },
  faqs: [
    {
      question: "How do I convert Newton-meters to dyne-centimeters?",
      answer: "Multiply the Newton-meter (N·m) value by 10,000,000 ($10^7$). For example, 0.002 N·m × 10,000,000 = 20,000 dyn·cm."
    },
    {
      question: "How many dyne-centimeters are in 1 Newton-meter?",
      answer: "There are exactly 10,000,000 ($10^7$) dyne-centimeters in 1 Newton-meter."
    },
    {
      question: "What is the relationship between dyne-centimeters and ergs?",
      answer: "Dimensionally, 1 dyne-centimeter equals 1 erg ($1\\text{ dyn·cm} = 1\\text{ erg} = 10^{-7}\\text{ Joules}$). In physics convention, 'erg' is used for energy, while 'dyn·cm' is used for torque."
    },
    {
      question: "Why is the dyne-centimeter still used today?",
      answer: "The dyne-centimeter is widely used in specialized scientific fields like cellular biophysics, MEMS design, surface tension rheology, and mechanical watchmaking, where measurements are too microscopic to express conveniently in Newton-meters."
    },
    {
      question: "How do I convert dyn·cm back to N·m?",
      answer: "Multiply the dyn·cm value by $10^{-7}$ (or divide by 10,000,000). For example, 50,000 dyn·cm ÷ 10,000,000 = 0.005 N·m."
    },
    {
      question: "How many dyne-centimeters are in 1 pound-foot?",
      answer: "1 pound-foot equals approximately 13,558,179.48 dyne-centimeters (1.355818 × 10^7 dyn·cm)."
    },
    {
      question: "What is 1 N·cm in dyne-centimeters?",
      answer: "1 N·cm equals exactly 100,000 ($10^5$) dyne-centimeters."
    },
    {
      question: "Is dyne-centimeter part of the SI system?",
      answer: "No. The dyne-centimeter belongs to the CGS (centimeter-gram-second) metric system, which predates the modern SI system."
    }
  ],
  relatedList: [
    { label: "Newton-Meter to Newton-Centimeter", from: "newton-meter", to: "newton-centimeter" },
    { label: "Pound-Foot to Dyne-Centimeter", from: "pound-foot", to: "dyne-centimeter" },
    { label: "Newton-Meter to Pound-Inch", from: "newton-meter", to: "pound-inch" },
    { label: "Newton-Meter to Pound-Foot", from: "newton-meter", to: "pound-foot" }
  ],
  relatedArticles: [
    {
      title: "Pound-Foot to Dyne-Centimeter Conversion Guide",
      description: "Convert imperial torque measurements to CGS units for microscale laboratory analysis.",
      from: "pound-foot",
      to: "dyne-centimeter"
    },
    {
      title: "Newton-Meter to Newton-Centimeter Conversion Guide",
      description: "Step-by-step metric torque conversions for robotics, RC servos, and stepper motors.",
      from: "newton-meter",
      to: "newton-centimeter"
    }
  ],
  references: [
    "IUPAC Compendium of Chemical Terminology (Gold Book): CGS and SI Units",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "CRC Handbook of Chemistry and Physics: Conversion Factors and Fundamental Constants",
    "NIST Guide for the Use of the International System of Units (SI) — SP 811"
  ]
};
