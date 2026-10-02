import { CustomArticleData } from "./types";

export const gradianToArcsecond: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "arcsecond",
  seoTitle: "Gradian to Arcsecond Converter (grad to arcsec) | UnitsConvertors.com",
  metaDescription: "Convert gradians to arcseconds (grad to \" / arcsec) with complete precision. Explore the exact 3,240 conversion factor, optical derivations, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-arcsecond",
  h1: "Gradian to Arcsecond Converter",
  introduction: [
    "The gradian (grad, or gon) and the arcsecond (arcsec, or second of arc, symbol: \") represent two essential angular units used in precision geodesy, optical metrology, and astronomical alignment. The gradian is a decimal metric unit created to replace base-60 angular measurements, dividing a right angle into 100 grads and a circle into 400 grads. Conversely, the arcsecond is a microscopic subdivision of the sexagesimal system, dividing a single degree into 3,600 arcseconds (1,296,000 arcseconds in a full circle).",
    "Because one gradian equals exactly 0.9 degrees and there are 3,600 arcseconds in a degree, the conversion between gradians and arcseconds is an exact whole integer: 0.9 × 3,600 = 3,240. Consequently, exactly 3,240 arcseconds are contained within one gradian.",
    "To convert gradians to arcseconds, multiply the gradian value by 3,240. Inversely, to convert from arcseconds to gradians, divide by 3,240 (or multiply by approximately 0.000308642). This technical reference details the mathematical principles, optical calibration examples, and a comprehensive conversion table."
  ],
  quickAnswer: {
    text: "To convert gradians to arcseconds, multiply the gradian value by 3,240. For example, 1 gradian equals exactly 3,240 arcseconds, and 100 gradians (a right angle) equals exactly 324,000 arcseconds.",
    formulaDisplay: "Arcseconds (\") = Gradians × 3,240",
    subtext: "1 Gradian = 3,240 Arcseconds (3,240\"); 1 Arcsecond ≈ 0.00030864 Gradians (1/3,240 grad)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal metric unit of angular measurement. Designed during the French Revolutionary metric overhaul of the 1790s, the gradian divides a right angle into 100 grads and a full circle into 400 grads. It is extensively utilized throughout Europe for cadastral land surveys, railway curve geometry, subterranean tunneling, and digital total station instruments."
  },
  aboutTargetUnit: {
    title: "Understanding the Arcsecond (arcsec / \")",
    text: "The arcsecond (symbol: \") is a sexagesimal unit of angular measurement equal to 1/3,600th of a degree (or 1/1,296,000th of a full circle). One arcsecond corresponds to the angle subtended by a US dime (0.7 inch) viewed from a distance of over 2.2 miles. It is the international standard for telescope angular resolution, stellar parallax, satellite attitude tracking, and precision mechanical alignment."
  },
  relationship: "A full circle contains 400 gradians and 1,296,000 arcseconds (360 × 3,600). Dividing 1,296,000 by 400 yields exactly 3,240. Therefore, 1 gradian equals precisely 3,240 arcseconds. Inversely, 1 arcsecond equals 1/3,240 of a gradian (~0.000308642 grad).",
  relationshipTitle: "Gradian to Arcsecond Exact Scale",
  relationshipItems: [
    { label: "0.01 grad (1 centigrad)", value: "32.40\"" },
    { label: "0.1 grad", value: "324.00\"" },
    { label: "1 grad", value: "3,240.00\" (54.0')" },
    { label: "10 grad", value: "32,400.00\" (9.0°)" },
    { label: "50 grad", value: "162,000.00\" (45.0°)" },
    { label: "100 grad", value: "324,000.00\" (90.0°, Right Angle)" },
    { label: "400 grad", value: "1,296,000.00\" (360.0°, Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in gradians by 3,240 to obtain arcseconds.",
    math: "\\text{Arcseconds } (\") = \\text{grad} \\times 3{,}240",
    subtext: "Inverse formula: grad = Arcseconds / 3,240 ≈ Arcseconds × 0.000308642"
  },
  formulaTitle: "Gradian to Arcsecond Conversion Formula",
  practicalTip: {
    title: "Two-Step Verification",
    text: "If you need to verify the calculation, convert gradians to degrees by multiplying by 0.9, then multiply by 3,600 to get arcseconds (0.9 × 3,600 = 3,240)."
  },
  expertNote: {
    title: "Centesimal Second vs Sexagesimal Arcsecond",
    text: "In European surveying literature, a centesimal second (symbol: cc, or centi-centigrad) is 1/10,000th of a gradian (0.0001 grad). In contrast, a sexagesimal arcsecond (\") is 1/3,240th of a gradian. One sexagesimal arcsecond equals approximately 3.0864 centesimal seconds."
  },
  examples: {
    title: "Step-by-Step grad to arcsec Worked Examples",
    items: [
      {
        title: "Example 1: High-Precision Total Station Collimation",
        subtitle: "A digital survey instrument reports an angular collimation error of 0.0025 grads. Express this error in arcseconds.",
        steps: [
          "State the error in gradians: θ = 0.0025 grad.",
          "Apply the conversion formula: Arcseconds = 0.0025 × 3,240.",
          "Calculate: 0.0025 × 3,240 = 8.1.",
          "Final Result: 0.0025 grads equals exactly 8.1 arcseconds (8.1\")."
        ]
      },
      {
        title: "Example 2: Laser Interferometer Mirror Tilt",
        subtitle: "An optical flat mirror is tilted by 0.05 grads during interferometer alignment. Convert this tilt into arcseconds.",
        steps: [
          "Identify the angle: 0.05 grad.",
          "Multiply by 3,240: 0.05 × 3,240 = 162.0.",
          "Final Result: 0.05 grads corresponds to exactly 162 arcseconds (2' 42\")."
        ]
      },
      {
        title: "Example 3: Geodetic Triangulation Misclosure",
        subtitle: "A baseline survey traverse records an angular closing error of 0.015 grads. Find the error in arcseconds.",
        steps: [
          "State the value: 0.015 grad.",
          "Multiply by 3,240: 0.015 × 3,240 = 48.6.",
          "Final Result: 0.015 grads equals exactly 48.6 arcseconds."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Arcsecond Conversion Reference Table",
    headers: ["Gradians (grad)", "Arcseconds (\")", "Arcminutes (')", "Degrees (°)"],
    rows: [
      { fromVal: "0.001 grad", toVal: "3.24\"", extra: "0.054'", extra2: "0.0009°" },
      { fromVal: "0.005 grad", toVal: "16.20\"", extra: "0.270'", extra2: "0.0045°" },
      { fromVal: "0.010 grad", toVal: "32.40\"", extra: "0.540'", extra2: "0.0090°" },
      { fromVal: "0.050 grad", toVal: "162.00\"", extra: "2.700'", extra2: "0.0450°" },
      { fromVal: "0.100 grad", toVal: "324.00\"", extra: "5.400'", extra2: "0.0900°" },
      { fromVal: "0.500 grad", toVal: "1,620.00\"", extra: "27.000'", extra2: "0.4500°" },
      { fromVal: "1.000 grad", toVal: "3,240.00\"", extra: "54.000'", extra2: "0.9000°" },
      { fromVal: "5.000 grad", toVal: "16,200.00\"", extra: "270.000'", extra2: "4.5000°" },
      { fromVal: "10.000 grad", toVal: "32,400.00\"", extra: "540.000'", extra2: "9.0000°" },
      { fromVal: "100.000 grad", toVal: "324,000.00\"", extra: "5,400.000'", extra2: "90.0000°" }
    ]
  },
  applications: {
    title: "High-Precision Applications of grad to arcsec",
    items: [
      {
        title: "Optical Bench & Autocollimator Alignment",
        text: "Translating digital theodolite survey readings into arcsecond angular tolerances required for satellite optics and laser mirrors."
      },
      {
        title: "Seismic Fault Tiltmeter Monitoring",
        text: "Converting crustal deformation angular changes from milligons or centigrads into standard geophysical arcseconds."
      },
      {
        title: "Spacecraft Star Tracker Calibration",
        text: "Harmonizing ground-based theodolite calibration data recorded in grads with satellite attitude determination software operating in arcseconds."
      },
      {
        title: "Micro-Geodesy & Large Hadron Collider Alignment",
        text: "Aligning particle accelerator superconducting magnets over multi-kilometer circumferences to sub-arcsecond precision."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Arcsecond Conversions",
    items: [
      "Multiplying by 3,600 instead of 3,240 (confusing 1 gradian with 1 full degree).",
      "Confusing centesimal seconds (cc = 0.0001 grad) with sexagesimal arcseconds (\").",
      "Dividing by 3,240 instead of multiplying when converting from gradians to arcseconds.",
      "Losing precision by rounding 3,240 to 3,200 during critical geodetic traverse audits."
    ]
  },
  faqs: [
    {
      question: "How many arcseconds are in 1 gradian?",
      answer: "There are exactly 3,240 arcseconds in 1 gradian."
    },
    {
      question: "How many gradians are in 1 arcsecond?",
      answer: "There are approximately 0.000308642 gradians in 1 arcsecond (exactly 1/3,240 grad)."
    },
    {
      question: "What is the formula to convert gradians to arcseconds?",
      answer: "The formula is: Arcseconds (\") = Gradians × 3,240."
    },
    {
      question: "Why does 1 gradian equal exactly 3,240 arcseconds?",
      answer: "Because 1 gradian equals 0.9 degrees, and each degree contains 3,600 arcseconds (60 × 60). Multiplying 0.9 by 3,600 yields exactly 3,240."
    },
    {
      question: "How do I convert 0.1 gradians to arcseconds?",
      answer: "Multiply 0.1 by 3,240 to get exactly 324 arcseconds."
    },
    {
      question: "How many arcseconds are in a right angle?",
      answer: "A right angle is 100 gradians (90°), which equals 100 × 3,240 = 324,000 arcseconds."
    },
    {
      question: "How many arcseconds are in a full circle?",
      answer: "A full circle is 400 gradians (360°), which equals 400 × 3,240 = 1,296,000 arcseconds."
    },
    {
      question: "What is the difference between an arcsecond and an arcminute?",
      answer: "An arcminute equals 60 arcseconds. In the gradian system, 1 gradian equals 54 arcminutes, which equals 54 × 60 = 3,240 arcseconds."
    }
  ],
  relatedList: [
    { label: "Gradian to Arcminute", from: "gradian", to: "arcminute" },
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Arcsecond to Gradian", from: "arcsecond", to: "gradian" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "National Geodetic Survey (NGS): Geodetic Glossary."
  ]
};
