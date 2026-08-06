import { CustomArticleData } from "./types";

export const degreeToGradian: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "gradian",
  seoTitle: "Degree to Gradian Conversion (° to grad) | UnitsConvertors.com",
  metaDescription: "Convert degrees to gradians (gon) accurately using the formula (grad = ° × 10/9). Learn metric angle history, surveying applications, worked examples, and FAQs.",
  h1: "Degree to Gradian Conversion",
  introduction: [
    "The degree (°) and the gradian (grad, also known as gon or grade) represent two distinct decimal and sexagesimal frameworks for measuring plane angles. While degrees divide a circle into 360 parts based on traditional astronomical systems, gradians divide a full circle into 400 metric units.",
    "Introduced during the French Revolution alongside the metric system, the gradian was designed so that a right angle equals exactly 100 gradians. Converting degrees to gradians requires multiplying the degree angle by $10 / 9$ (or $1.11111111111$). This simple ratio makes mental conversion straightforward: 9 degrees equals exactly 10 gradians.",
    "Gradians remain widely used in European land surveying, civil engineering, geodetic surveying, and military artillery targeting. This comprehensive guide covers conversion formulas, practical surveying examples, comparison tables, and essential reference values."
  ],
  quickAnswer: {
    text: "To convert degrees to gradians, multiply the angle in degrees by 10/9 (or 1.11111111111). For example, a 90° right angle equals 90 × (10/9) = 100 gradians (grad or gon).",
    formulaDisplay: "Gradians (grad) = Degrees (°) × (10 / 9) = Degrees × 1.11111111111",
    subtext: "1 Degree = 1.11111111111 Gradians | 9 Degrees = 10 Gradians | 360 Degrees = 400 Gradians"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a standard unit of angular measurement representing 1/360th of a full rotation. It is subdivided sexagesimally into 60 arcminutes and 3600 arcseconds."
  },
  aboutTargetUnit: {
    title: "What is a Gradian (grad/gon)?",
    text: "A gradian (symbols: grad, gon, or ᵍ) is a metric unit of angle equal to 1/400th of a full turn or 1/100th of a right angle. One gradian equals 0.9 degrees or π/200 radians."
  },
  relationship: "A full circle equals 360 degrees or 400 gradians. Reducing the ratio 400/360 yields 10/9. Thus, 1 degree equals exactly 1.11111111111 gradians, and 9 degrees equals 10 gradians.",
  relationshipTitle: "Key Angular Equivalents Between Degrees and Gradians",
  relationshipItems: [
    { label: "9° Base Ratio", value: "10 grad (gon)" },
    { label: "45° Diagonal Angle", value: "50 grad" },
    { label: "90° Right Angle", value: "100 grad" },
    { label: "180° Straight Angle", value: "200 grad" },
    { label: "270° Three-Quarter Turn", value: "300 grad" },
    { label: "360° Full Revolution", value: "400 grad" }
  ],
  formula: {
    text: "Multiply the angle in degrees by 10 and divide by 9, or multiply by 1.11111111111.",
    math: "Angle (grad) = Angle (°) × \\frac{10}{9}",
    subtext: "Exact fraction multiplier: 10/9. Decimal multiplier: 1.11111111111."
  },
  formulaTitle: "Degree to Gradian Conversion Formula",
  practicalTip: {
    title: "Surveying Total Station Mode Check",
    text: "When taking field measurements with total stations or surveying equipment, ensure the instrument's angle unit setting (DEG vs GON/GRAD) matches your project specifications to prevent systematic 10% errors in boundary calculations."
  },
  expertNote: {
    title: "Why Gradians Simplify Map Calculations",
    text: "In the French metric mapping system, 1 centigrade of latitude along a meridian was originally defined to equal exactly 1 kilometer. Thus, 100 gon from equator to pole spanned 10,000 km, aligning geography with metric distance."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 45 Degrees to Gradians",
        subtitle: "Find the gradian equivalent of a 45° angle.",
        steps: [
          "Identify degree value: 45°.",
          "Apply formula: grad = 45 × (10 / 9).",
          "Calculate: (45 / 9) × 10 = 5 × 10 = 50.",
          "Final Result: 45° equals 50 gradians."
        ]
      },
      {
        title: "Example 2: Convert 135 Degrees to Gradians",
        subtitle: "Calculate gradians for an obtuse angle of 135°.",
        steps: [
          "Identify degree value: 135°.",
          "Apply formula: grad = 135 × (10 / 9).",
          "Calculate: (135 / 9) × 10 = 15 × 10 = 150.",
          "Final Result: 135° equals 150 gradians."
        ]
      },
      {
        title: "Example 3: Convert 22.5 Degrees to Gradians",
        subtitle: "Convert a decimal degree value into gradians.",
        steps: [
          "Identify degree value: 22.5°.",
          "Apply formula: grad = 22.5 × 1.11111111111.",
          "Calculate: 22.5 × (10 / 9) = 225 / 9 = 25.",
          "Final Result: 22.5° equals 25 gradians."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Gradian (Gon) Conversion Reference Table",
    headers: ["Degrees (°)", "Gradians (grad/gon)", "Fraction of Full Circle", "Surveying & Structural Context"],
    rows: [
      { fromVal: "1°", toVal: "1.1111 grad", extra: "1 / 360 turn", extra2: "Single degree incremental step" },
      { fromVal: "9°", toVal: "10 grad", extra: "1 / 40 turn", extra2: "Exact 10-gon fundamental unit" },
      { fromVal: "18°", toVal: "20 grad", extra: "1 / 20 turn", extra2: "Pentagon interior sub-angle" },
      { fromVal: "30°", toVal: "33.3333 grad", extra: "1 / 12 turn", extra2: "Hexagonal structural sector" },
      { fromVal: "45°", toVal: "50 grad", extra: "1 / 8 turn", extra2: "Half right angle diagonal" },
      { fromVal: "60°", toVal: "66.6667 grad", extra: "1 / 6 turn", extra2: "Equilateral triangle corner" },
      { fromVal: "90°", toVal: "100 grad", extra: "1 / 4 turn", extra2: "Perpendicular right angle (Quadrant)" },
      { fromVal: "180°", toVal: "200 grad", extra: "1 / 2 turn", extra2: "Straight line rotation" },
      { fromVal: "270°", toVal: "300 grad", extra: "3 / 4 turn", extra2: "Three-quarter revolution" },
      { fromVal: "360°", toVal: "400 grad", extra: "1 full turn", extra2: "Complete circular rotation" }
    ]
  },
  applications: {
    title: "Practical Industry Applications",
    items: [
      {
        title: "Land Surveying & Geodesy",
        text: "European land surveyors utilize total stations set to gradians (gon) due to convenient metric subdivision into centigon and milligon."
      },
      {
        title: "Civil & Highway Engineering",
        text: "Road gradient curves and railway embankment slope alignments in European design standards specify deflection angles in gradians."
      },
      {
        title: "Artillery & Military Targeting",
        text: "Certain European defense forces employ gon units for compass azimuth navigation and mortar trajectory elevation settings."
      },
      {
        title: "CAD & Civil 3D Modeling",
        text: "Geospatial software supports unit transformations between degrees, gradians, and radians for international GIS dataset alignment."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Gradians",
    items: [
      "Confusing the gradian (400 per circle) with the degree (360 per circle) on scientific calculators set to 'GRAD' mode instead of 'DEG'.",
      "Using 9/10 instead of 10/9 when converting degrees to gradians (9/10 is used for converting gradians to degrees).",
      "Assuming 'gon' is a different unit than 'gradian'—they are identical names for the exact same metric angular measurement.",
      "Failing to convert arcminutes and arcseconds into decimal degrees before multiplying by 10/9."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to gradians?",
      answer: "Multiply the degree value by 10 and divide by 9. For example, 90° × (10/9) = 100 gradians."
    },
    {
      question: "What is a gradian (gon)?",
      answer: "A gradian (or gon) is a metric unit of angular measurement equal to 1/400th of a full turn or 1/100th of a right angle."
    },
    {
      question: "How many gradians are in a right angle?",
      answer: "There are exactly 100 gradians in a 90-degree right angle."
    },
    {
      question: "Why was the gradian created?",
      answer: "The gradian was created during the French Revolution to align angular measurement with the decimal metric system, where a right angle contains 100 metric parts."
    },
    {
      question: "Are gon and gradian the same unit?",
      answer: "Yes, 'gon' and 'gradian' (also known as grade) are completely identical terms for the same metric angle unit."
    },
    {
      question: "What is 45 degrees in gradians?",
      answer: "45 degrees equals exactly 50 gradians."
    },
    {
      question: "What is 180 degrees in gradians?",
      answer: "180 degrees equals exactly 200 gradians."
    },
    {
      question: "What does GRAD mean on a scientific calculator?",
      answer: "GRAD sets the calculator's trigonometric functions to evaluate angles in gradians (where a right angle is 100) rather than degrees (90) or radians (π/2)."
    }
  ],
  relatedList: [
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "BIPM Metric System Historical Archives: The Grade/Gradian Unit Definition",
    "ISO 80000-3: Quantities and Units — Space and Time (Plane Angle Units)",
    "FGDC Geospatial Positioning Accuracy Standards for Land Surveying"
  ]
};
