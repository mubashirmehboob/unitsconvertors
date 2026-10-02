import { CustomArticleData } from "./types";

export const gradianToDegree: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "degree",
  seoTitle: "Gradian to Degree Converter (grad to deg) | UnitsConvertors.com",
  metaDescription: "Convert gradians to degrees (grad to °) accurately. Learn the exact 0.9 conversion factor, right-angle derivations, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-degree",
  h1: "Gradian to Degree Converter",
  introduction: [
    "The gradian (grad, or gon) and the degree (°) represent two of the most widely used angular measurement systems in the world. The sexagesimal degree traces its origin back over four millennia to ancient Babylonian astronomy, dividing a circular revolution into 360 degrees. In contrast, the centesimal gradian was created during the French Revolution in the 1790s to establish a decimal metric system for geometry, dividing a right angle into exactly 100 gradians and a complete circle into 400 gradians.",
    "Because a full circle contains 400 gradians and 360 degrees, the relationship between the two units is an exact, rational decimal: 360 / 400 = 9 / 10 = 0.9. Consequently, exactly one gradian equals 0.9 degrees (or 54 arcminutes).",
    "To convert gradians to degrees, simply multiply the gradian value by 0.9 (or divide by 10 and multiply by 9). Inversely, to convert from degrees to gradians, divide by 0.9 (or multiply by 10/9). This comprehensive guide explains the mathematical derivations, surveying examples, and an authoritative comparison table."
  ],
  quickAnswer: {
    text: "To convert gradians to degrees, multiply the gradian value by 0.9. For example, 100 gradians (a right angle) equals exactly 90 degrees.",
    formulaDisplay: "Degrees (°) = Gradians × 0.9 = Gradians × (9 / 10)",
    subtext: "1 Gradian = 0.9° (54 arcminutes); 1° = 1.111111 Gradians (10/9 grad)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal unit of plane angular measurement. Defined as 1/400th of a full circle or 1/100th of a right angle, it was engineered so that one gradian of latitude on Earth's meridian arc corresponded approximately to 100 kilometers under the original metric definition of the meter. Today, gradians are widely used across continental Europe (notably in France, Germany, and Switzerland) for topographic land surveying, mining geodesy, and total station civil engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Degree (°)",
    text: "The degree (also called the arc degree, symbol: °) is the most familiar unit of plane angle, dating back to ancient Mesopotamia. Defined as 1/360th of a full circle, the number 360 was chosen for its high composite divisibility (having 24 divisors) and close alignment with the 365-day solar calendar. A right angle contains exactly 90 degrees, and subdivisions follow the sexagesimal system into 60 arcminutes (') and 3,600 arcseconds (\")."
  },
  relationship: "A complete circle contains 400 gradians and 360 degrees. Therefore, 100 gradians equals exactly 90 degrees (a right angle). One gradian equals exactly 9/10 of a degree (0.9°). Conversely, 1 degree equals 10/9 gradians (1.111111 grad).",
  relationshipTitle: "Gradian to Degree Exact Scale",
  relationshipItems: [
    { label: "1 grad", value: "0.9000° (54 arcminutes)" },
    { label: "10 grad", value: "9.0000°" },
    { label: "50 grad", value: "45.0000°" },
    { label: "100 grad", value: "90.0000° (Right Angle)" },
    { label: "200 grad", value: "180.0000° (Straight Angle)" },
    { label: "300 grad", value: "270.0000°" },
    { label: "400 grad", value: "360.0000° (Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in gradians by 0.9 (or 9/10) to obtain degrees.",
    math: "\\text{Degrees } (^{\\circ}) = \\text{grad} \\times \\frac{360}{400} = \\text{grad} \\times 0.9",
    subtext: "Inverse formula: grad = Degrees / 0.9 = Degrees × (10 / 9) ≈ Degrees × 1.111111"
  },
  formulaTitle: "Gradian to Degree Conversion Formula",
  practicalTip: {
    title: "Simple Mental Math Shortcut",
    text: "To convert gradians to degrees in your head, subtract 10% of the value. For example, to convert 70 grads: 10% of 70 is 7; 70 - 7 = 63°. The result is exact and instantaneous."
  },
  expertNote: {
    title: "Decimal Subdivisions vs Arcminutes",
    text: "In the gradian system, subdivisions are purely decimal: 1 centigrad = 0.01 grad, and 1 centi-centigrad = 0.0001 grad (0.1 mgon). When converting 1 grad to sexagesimal degrees, 0.9° equals exactly 54 arcminutes (0.9 × 60' = 54'), with zero remaining arcseconds."
  },
  examples: {
    title: "Step-by-Step grad to deg Worked Examples",
    items: [
      {
        title: "Example 1: Survey Traverse Boundary Angle",
        subtitle: "A Swiss cadastral boundary plot records a corner boundary bearing of 124.50 grads. Convert this bearing to degrees.",
        steps: [
          "State the angle in gradians: θ = 124.50 grad.",
          "Apply the conversion formula: Degrees = 124.50 × 0.9.",
          "Calculate: 124.50 × 0.9 = 112.05.",
          "Final Result: 124.50 grads equals exactly 112.05° (or 112° 03' 00\")."
        ]
      },
      {
        title: "Example 2: Civil Roadway Curve Deflection",
        subtitle: "A highway horizontal curve deflection angle is designed as 35.0 grads. Express this in degrees.",
        steps: [
          "Identify the angle: 35.0 grad.",
          "Subtract 10%: 35.0 - 3.5 = 31.5.",
          "Final Result: 35.0 grads equals exactly 31.5° (31° 30' 00\")."
        ]
      },
      {
        title: "Example 3: Tunnel Boring Alignment Vector",
        subtitle: "An underground laser guidance sensor records an azimuth deviation of 0.80 grads. Convert this deviation to degrees.",
        steps: [
          "State the deviation: 0.80 grad.",
          "Multiply by 0.9: 0.80 × 0.9 = 0.72.",
          "Final Result: 0.80 grads corresponds to exactly 0.72° (43.2 arcminutes)."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Degree Conversion Reference Table",
    headers: ["Gradians (grad)", "Degrees (°)", "DMS (Deg Min Sec)", "Radians (rad)"],
    rows: [
      { fromVal: "1 grad", toVal: "0.90°", extra: "0° 54' 00\"", extra2: "0.0157 rad" },
      { fromVal: "5 grad", toVal: "4.50°", extra: "4° 30' 00\"", extra2: "0.0785 rad" },
      { fromVal: "10 grad", toVal: "9.00°", extra: "9° 00' 00\"", extra2: "0.1571 rad" },
      { fromVal: "25 grad", toVal: "22.50°", extra: "22° 30' 00\"", extra2: "0.3927 rad" },
      { fromVal: "50 grad", toVal: "45.00°", extra: "45° 00' 00\"", extra2: "0.7854 rad" },
      { fromVal: "75 grad", toVal: "67.50°", extra: "67° 30' 00\"", extra2: "1.1781 rad" },
      { fromVal: "100 grad", toVal: "90.00°", extra: "90° 00' 00\"", extra2: "1.5708 rad" },
      { fromVal: "150 grad", toVal: "135.00°", extra: "135° 00' 00\"", extra2: "2.3562 rad" },
      { fromVal: "200 grad", toVal: "180.00°", extra: "180° 00' 00\"", extra2: "3.1416 rad" },
      { fromVal: "400 grad", toVal: "360.00°", extra: "360° 00' 00\"", extra2: "6.2832 rad" }
    ]
  },
  applications: {
    title: "Everyday & Surveying Applications of grad to deg",
    items: [
      {
        title: "Total Station & Cadastral Mapping Import",
        text: "Converting European surveying datasets surveyed in gons/grads into American CAD and GIS packages operating in standard degrees."
      },
      {
        title: "Subterranean Mining & Railway Alignment",
        text: "Translating grade and curvature specifications between international tunneling joint ventures and domestic degree-based engineering drawings."
      },
      {
        title: "Scientific Calculator Angle Mode Adjustments",
        text: "Verifying whether engineering formulas were calculated in DEG mode (360° circle) or GRAD mode (400 grad circle) to avoid severe computational errors."
      },
      {
        title: "Artillery & Geodetic Coordinate Systems",
        text: "Interfacing NATO grid azimuths with continental European military artillery fire-control theodolites."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Degree Conversions",
    items: [
      "Multiplying by 0.9 instead of dividing when converting from degrees to grads.",
      "Confusing grads with radians: 100 grads is 90°, not 100 radians.",
      "Leaving scientific calculators in GRAD mode instead of DEG mode, introducing an automatic 10% angular error across all sine and cosine calculations.",
      "Confusing grad (400 per circle) with military mil (6,400 per circle)."
    ]
  },
  faqs: [
    {
      question: "How many degrees are in 1 gradian?",
      answer: "There are exactly 0.9 degrees in 1 gradian (equal to 54 arcminutes)."
    },
    {
      question: "How many gradians are in 1 degree?",
      answer: "There are approximately 1.111111 gradians in 1 degree (exactly 10/9 grads)."
    },
    {
      question: "What is the formula to convert gradians to degrees?",
      answer: "The formula is: Degrees = Gradians × 0.9 (or Degrees = Gradians × 9 / 10)."
    },
    {
      question: "Why does 1 gradian equal 0.9 degrees?",
      answer: "Because a full circle is divided into 400 gradians and 360 degrees. Dividing 360 by 400 simplifies to 9/10, or 0.9."
    },
    {
      question: "How do I convert 100 gradians to degrees?",
      answer: "Multiply 100 by 0.9 to get exactly 90 degrees (a right angle)."
    },
    {
      question: "Is a gradian the same as a grad and a gon?",
      answer: "Yes, 'gradian', 'grad', and 'gon' are completely synonymous names for the same centesimal angular unit."
    },
    {
      question: "Why were gradians invented?",
      answer: "Gradians were introduced during the French Revolution to make angular math decimal: 100 grads per right angle, 200 per straight angle, and 400 per circle."
    },
    {
      question: "How do I convert degrees to gradians?",
      answer: "Divide degrees by 0.9 (or multiply degrees by 10/9). For example, 45° / 0.9 = 50 grads."
    }
  ],
  relatedList: [
    { label: "Gradian to Radian", from: "gradian", to: "radian" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Gradian to Arcminute", from: "gradian", to: "arcminute" },
    { label: "Radian to Grad", from: "radian", to: "grad-angle" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "National Geodetic Survey (NGS): Geodetic Glossary."
  ]
};
