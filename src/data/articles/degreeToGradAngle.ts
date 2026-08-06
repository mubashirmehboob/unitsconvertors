import { CustomArticleData } from "./types";

export const degreeToGradAngle: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "grad-angle",
  seoTitle: "Degree to Grad Conversion (° to grad) | UnitsConvertors.com",
  metaDescription: "Convert degrees to grads (gon) accurately using the formula (grad = ° × 10/9). Learn metric angle history, surveying methods, worked examples, and FAQs.",
  h1: "Degree to Grad Conversion",
  introduction: [
    "The degree (°) and the grad (also designated as gradian, gon, or grade) represent sexagesimal and metric frameworks for measuring plane angles. While degrees divide a circle into 360 sexagesimal parts, grads divide a full circle into 400 metric parts.",
    "Originally introduced during the decimalization of French weights and measures, the grad was defined so that a right angle contains exactly 100 grads. Converting degrees to grads requires multiplying the degree angle by $10 / 9$ (or $1.11111111111$). This simple integer ratio means 9 degrees equals exactly 10 grads.",
    "Grads are widely used across European land surveying, civil engineering geodetics, mining alignment, and electronic total stations. This guide covers conversion formulas, practical surveying examples, lookup tables, and essential calculator mode tips."
  ],
  quickAnswer: {
    text: "To convert degrees to grads, multiply the degree value by 10/9 (or 1.11111111111). For example, 90 degrees equals 90 × (10/9) = 100 grads (grad or gon).",
    formulaDisplay: "Grads (grad) = Degrees (°) × (10 / 9) = Degrees × 1.11111111111",
    subtext: "1 Degree = 1.11111111111 Grad | 9 Degrees = 10 Grads | 360 Degrees = 400 Grads"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and geography."
  },
  aboutTargetUnit: {
    title: "What is a Grad (grad/gon)?",
    text: "A grad (symbols: grad, gon, or ᵍ) is a metric unit of plane angle equal to 1/400th of a full turn or 1/100th of a right angle. One grad equals 0.9 degrees or $\pi/200$ radians."
  },
  relationship: "A full circle equals 360 degrees or 400 grads. Reducing 400/360 yields the exact ratio 10/9. Thus, 1 degree equals 1.11111111111 grads.",
  relationshipTitle: "Key Degree to Grad Angular Equivalents",
  relationshipItems: [
    { label: "9° Base Conversion Step", value: "10 grad (gon)" },
    { label: "45° Diagonal Angle", value: "50 grad" },
    { label: "90° Right Angle", value: "100 grad" },
    { label: "180° Straight Angle", value: "200 grad" },
    { label: "270° Three-Quarter Turn", value: "300 grad" },
    { label: "360° Complete Circle", value: "400 grad" }
  ],
  formula: {
    text: "Multiply the angle in degrees by 10 and divide by 9.",
    math: "Angle (grad) = Angle (°) × \\frac{10}{9}",
    subtext: "Exact fraction factor: 10/9. Decimal multiplier: 1.11111111111."
  },
  formulaTitle: "Degree to Grad Conversion Formula",
  practicalTip: {
    title: "Calculator Mode Verification",
    text: "When performing trigonometric calculations on scientific calculators, ensure the angle mode (DEG vs GRAD/GON) matches your source data. Evaluating sin(90) in GRAD mode gives 0.9877 instead of 1.0."
  },
  expertNote: {
    title: "Decimal Subdivision Convenience",
    text: "In the grad system, sub-angles are written in pure metric decimals: 1 centigrad = 0.01 grad and 1 milligrad = 0.001 grad, avoiding sexagesimal minutes and seconds conversions."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 36 Degrees to Grads",
        subtitle: "Calculate grads for a 36° angle.",
        steps: [
          "Identify degree value: 36°.",
          "Apply formula: grad = 36 × (10 / 9).",
          "Calculate: (36 / 9) × 10 = 4 × 10 = 40.",
          "Final Result: 36° equals 40 grads."
        ]
      },
      {
        title: "Example 2: Convert 180 Degrees to Grads",
        subtitle: "Convert a straight angle of 180° into grads.",
        steps: [
          "Identify degree value: 180°.",
          "Apply formula: grad = 180 × (10 / 9).",
          "Calculate: (180 / 9) × 10 = 20 × 10 = 200.",
          "Final Result: 180° equals 200 grads."
        ]
      },
      {
        title: "Example 3: Convert 54 Degrees to Grads",
        subtitle: "Find grads for a 54° angle.",
        steps: [
          "Identify degree value: 54°.",
          "Apply formula: grad = 54 × (10 / 9).",
          "Calculate: (54 / 9) × 10 = 6 × 10 = 60.",
          "Final Result: 54° equals 60 grads."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Grad (Gon) Conversion Reference Table",
    headers: ["Degrees (°)", "Grads (grad/gon)", "Fraction of Circle", "Surveying & Mapping Context"],
    rows: [
      { fromVal: "1°", toVal: "1.1111 grad", extra: "1 / 360 turn", extra2: "Single degree step" },
      { fromVal: "9°", toVal: "10 grad", extra: "1 / 40 turn", extra2: "Fundamental 10-grad integer unit" },
      { fromVal: "18°", toVal: "20 grad", extra: "1 / 20 turn", extra2: "Pentagon interior sub-angle" },
      { fromVal: "36°", toVal: "40 grad", extra: "1 / 10 turn", extra2: "Decagon central angle" },
      { fromVal: "45°", toVal: "50 grad", extra: "1 / 8 turn", extra2: "Half right angle" },
      { fromVal: "90°", toVal: "100 grad", extra: "1 / 4 turn", extra2: "Perpendicular right angle" },
      { fromVal: "180°", toVal: "200 grad", extra: "1 / 2 turn", extra2: "Straight line / opposite azimuth" },
      { fromVal: "270°", toVal: "300 grad", extra: "3 / 4 turn", extra2: "Three-quarter turn" },
      { fromVal: "360°", toVal: "400 grad", extra: "1 full turn", extra2: "Complete circular revolution" }
    ]
  },
  applications: {
    title: "Industry & Geodetic Uses",
    items: [
      {
        title: "European Geodetic Land Surveying",
        text: "Professional land surveyors in France, Germany, Switzerland, and Scandinavia record horizontal and vertical angles in grads (gon)."
      },
      {
        title: "Civil Engineering Tunnel & Bridge Alignment",
        text: "Laser guidance systems for tunnel boring machines (TBM) utilize grad subdivisions for millimetric alignment control."
      },
      {
        title: "Mining & Topographic Mapping",
        text: "Underground mine surveying maps express slope pitch and gallery drift bearings in grads."
      },
      {
        title: "GIS & Satellite Coordinate Reference Systems",
        text: "Geospatial software converts coordinate azimuths between degrees, grads, and radians."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Grads",
    items: [
      "Using 9/10 instead of 10/9 when converting degrees to grads (9/10 converts grads to degrees).",
      "Assuming 'grad' and 'gradian' are different units—they are identical terms for the exact same 400-per-circle unit.",
      "Confusing grad (angle) with radian (angle) or gram (mass).",
      "Forgetting to convert DMS (degrees, minutes, seconds) to decimal degrees before multiplying by 10/9."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to grads?",
      answer: "Multiply the degree value by 10 and divide by 9. For example, 45° × (10/9) = 50 grads."
    },
    {
      question: "How many grads are in 1 degree?",
      answer: "There are exactly 1.11111111111 (10/9) grads in 1 degree."
    },
    {
      question: "How many grads are in a right angle?",
      answer: "There are exactly 100 grads in a 90-degree right angle."
    },
    {
      question: "Are grad and gradian the same thing?",
      answer: "Yes, 'grad', 'gradian', and 'gon' are identical names for the metric angular unit equal to 1/400th of a full circle."
    },
    {
      question: "What is 180 degrees in grads?",
      answer: "180 degrees equals exactly 200 grads."
    },
    {
      question: "What is 360 degrees in grads?",
      answer: "360 degrees equals exactly 400 grads."
    },
    {
      question: "Why does 9 degrees equal 10 grads?",
      answer: "Because 360 degrees = 400 grads. Dividing both numbers by 40 simplifies to 9 degrees = 10 grads."
    },
    {
      question: "How do you switch a calculator from GRAD to DEG?",
      answer: "Press the 'DRG' or 'MODE' button on your calculator until the screen display changes from 'GRAD' or 'G' to 'DEG' or 'D'."
    }
  ],
  relatedList: [
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "BIPM SI Brochure: Non-SI Units Accepted for Use (Gradian/Gon)",
    "ISO 80000-3: Space and Time Plane Angle Units",
    "FGDC Land Surveying Coordinate Reference Standards"
  ]
};
