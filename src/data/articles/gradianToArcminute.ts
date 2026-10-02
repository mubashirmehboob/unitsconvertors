import { CustomArticleData } from "./types";

export const gradianToArcminute: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "arcminute",
  seoTitle: "Gradian to Arcminute Converter (grad to arcmin) | UnitsConvertors.com",
  metaDescription: "Convert gradians to arcminutes (grad to ' / MOA) with exact mathematical precision. Learn the 54-to-1 ratio, surveying derivations, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-arcminute",
  h1: "Gradian to Arcminute Converter",
  introduction: [
    "The gradian (grad, or gon) and the arcminute (arcmin, or minute of arc, symbol: ') represent two distinct historical approaches to high-precision angular resolution. The gradian is a decimal metric unit introduced in Revolutionary France, dividing a right angle into exactly 100 gradians and a complete circle into 400 gradians. Conversely, the arcminute belongs to the traditional sexagesimal (base-60) system, dividing a single degree into 60 equal subdivisions (21,600 arcminutes in a full circle).",
    "Because exactly one gradian equals 0.9 degrees (360 / 400 = 9/10), the relationship between gradians and arcminutes is a clean, exact whole integer: 0.9 × 60 = 54. Therefore, exactly 54 arcminutes are contained in one gradian.",
    "To convert gradians to arcminutes, simply multiply the gradian value by 54. Inversely, to convert from arcminutes to gradians, divide by 54 (or multiply by approximately 0.018519). This comprehensive technical guide details the governing conversion principles, precision surveying examples, and an authoritative lookup table."
  ],
  quickAnswer: {
    text: "To convert gradians to arcminutes, multiply the gradian value by 54. For example, 5 gradians equals exactly 270 arcminutes, and 100 gradians (a right angle) equals exactly 5,400 arcminutes.",
    formulaDisplay: "Arcminutes (') = Gradians × 54",
    subtext: "1 Gradian = 54 Arcminutes (54'); 1 Arcminute = 0.018519 Gradians (1/54 grad)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal unit of angular measurement. Designed during the metric reform of the 1790s, the gradian divides a quadrant into 100 grads, a straight line into 200 grads, and a full circle into 400 grads. It remains a standard unit in continental European land surveying, civil tunneling, and electronic total stations."
  },
  aboutTargetUnit: {
    title: "Understanding the Arcminute (arcmin / ')",
    text: "The arcminute (symbol: ', often abbreviated as MOA in ballistics and astronomy) is a sexagesimal subdivision of angular measurement equal to 1/60th of a degree (or 1/21,600th of a full circle). One arcminute corresponds to approximately 1.047 inches at a distance of 100 yards, making it an indispensable unit for telescope optical resolution, rifle scope adjustments, navigation charts, and geodetic triangulation."
  },
  relationship: "A full circle comprises 400 gradians and 21,600 arcminutes (360 × 60). Dividing 21,600 by 400 yields exactly 54. Therefore, 1 gradian equals precisely 54 arcminutes. Inversely, 1 arcminute equals 1/54 of a gradian (~0.0185185 grad).",
  relationshipTitle: "Gradian to Arcminute Exact Integer Scale",
  relationshipItems: [
    { label: "1 grad", value: "54.0' (0.90°)" },
    { label: "2 grad", value: "108.0' (1.80°)" },
    { label: "5 grad", value: "270.0' (4.50°)" },
    { label: "10 grad", value: "540.0' (9.00°)" },
    { label: "50 grad", value: "2,700.0' (45.00°)" },
    { label: "100 grad", value: "5,400.0' (90.00°, Right Angle)" },
    { label: "400 grad", value: "21,600.0' (360.00°, Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in gradians by 54 to obtain arcminutes.",
    math: "\\text{Arcminutes } (') = \\text{grad} \\times 54",
    subtext: "Inverse formula: grad = Arcminutes / 54 ≈ Arcminutes × 0.0185185"
  },
  formulaTitle: "Gradian to Arcminute Conversion Formula",
  practicalTip: {
    title: "Exact Two-Step Verification",
    text: "If you forget the factor 54, simply convert gradians to degrees by multiplying by 0.9, then multiply degrees by 60 to get arcminutes (0.9 × 60 = 54)."
  },
  expertNote: {
    title: "Geodetic Nautical Mile Connection",
    text: "Historically, 1 arcminute of latitude along Earth's meridian was defined as 1 nautical mile (1,852 meters). In the gradian system, 1 gradian represents exactly 54 nautical miles (approx. 100 kilometers under the original metric meridian standard)."
  },
  examples: {
    title: "Step-by-Step grad to arcmin Worked Examples",
    items: [
      {
        title: "Example 1: Total Station Precision Azimuth Shift",
        subtitle: "A land survey reading indicates an angular offset of 2.25 grads. Express this offset in arcminutes.",
        steps: [
          "State the angle in gradians: θ = 2.25 grad.",
          "Apply the conversion formula: Arcminutes = 2.25 × 54.",
          "Calculate: 2.25 × 54 = 121.5.",
          "Final Result: 2.25 grads equals exactly 121.5 arcminutes (121' 30\")."
        ]
      },
      {
        title: "Example 2: Optical Prism Deviation Angle",
        subtitle: "A laser prism deflects a beam by 0.15 grads. Find the angular deflection in arcminutes.",
        steps: [
          "Identify the angle: 0.15 grad.",
          "Multiply by 54: 0.15 × 54 = 8.1.",
          "Final Result: 0.15 grads corresponds to exactly 8.1 arcminutes (8' 06\")."
        ]
      },
      {
        title: "Example 3: Celestial Navigation Sight Cross-Bearing",
        subtitle: "A sextant angle of 18.0 grads is recorded. Express this angle in arcminutes.",
        steps: [
          "State the value: 18.0 grad.",
          "Multiply by 54: 18.0 × 54 = 972.",
          "Final Result: 18.0 grads is equal to exactly 972 arcminutes (16.2°)."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Arcminute Conversion Reference Table",
    headers: ["Gradians (grad)", "Arcminutes (')", "Degrees (°)", "Arcseconds (\")"],
    rows: [
      { fromVal: "0.10 grad", toVal: "5.4'", extra: "0.090°", extra2: "324\"" },
      { fromVal: "0.50 grad", toVal: "27.0'", extra: "0.450°", extra2: "1,620\"" },
      { fromVal: "1.00 grad", toVal: "54.0'", extra: "0.900°", extra2: "3,240\"" },
      { fromVal: "2.00 grad", toVal: "108.0'", extra: "1.800°", extra2: "6,480\"" },
      { fromVal: "5.00 grad", toVal: "270.0'", extra: "4.500°", extra2: "16,200\"" },
      { fromVal: "10.00 grad", toVal: "540.0'", extra: "9.000°", extra2: "32,400\"" },
      { fromVal: "25.00 grad", toVal: "1,350.0'", extra: "22.500°", extra2: "81,000\"" },
      { fromVal: "50.00 grad", toVal: "2,700.0'", extra: "45.000°", extra2: "162,000\"" },
      { fromVal: "100.00 grad", toVal: "5,400.0'", extra: "90.000°", extra2: "324,000\"" },
      { fromVal: "400.00 grad", toVal: "21,600.0'", extra: "360.000°", extra2: "1,296,000\"" }
    ]
  },
  applications: {
    title: "Practical Applications of grad to arcmin Conversions",
    items: [
      {
        title: "Telescope & Astronomical Instrument Alignment",
        text: "Converting European mount encoder readings in grads/gons into field of view and pointing error resolutions expressed in arcminutes."
      },
      {
        title: "Geodetic Triangulation & Baseline Traverses",
        text: "Harmonizing centesimal survey coordinates with traditional nautical and aeronautical navigation charts measured in degrees and minutes."
      },
      {
        title: "Laser Collimation & Optical Bench Testing",
        text: "Specifying angular beam divergence and optical mirror tilt tolerances in arcminutes from digital theodolite measurements."
      },
      {
        title: "Subterranean Mine Tunnel Breakthrough Audits",
        text: "Calculating transverse spatial drift over multi-kilometer boring alignments from angular deviations measured in grads."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Arcminute Conversions",
    items: [
      "Multiplying by 60 instead of 54 (confusing 1 gradian with 1 full degree).",
      "Confusing arcminutes (') with arcseconds (\"), which differ by a factor of 60.",
      "Dividing by 54 instead of multiplying when converting from gradians to arcminutes.",
      "Confusing the centesimal minute (c, equal to 0.01 grad) with the sexagesimal arcminute (equal to 1/54 grad)."
    ]
  },
  faqs: [
    {
      question: "How many arcminutes are in 1 gradian?",
      answer: "There are exactly 54 arcminutes in 1 gradian."
    },
    {
      question: "How many gradians are in 1 arcminute?",
      answer: "There are approximately 0.0185185 gradians in 1 arcminute (exactly 1/54 grad)."
    },
    {
      question: "What is the formula to convert gradians to arcminutes?",
      answer: "The formula is: Arcminutes = Gradians × 54."
    },
    {
      question: "Why does 1 gradian equal exactly 54 arcminutes?",
      answer: "Because 1 gradian equals 0.9 degrees, and each degree contains 60 arcminutes. Multiplying 0.9 by 60 yields exactly 54."
    },
    {
      question: "How do I convert 10 gradians to arcminutes?",
      answer: "Multiply 10 by 54 to get exactly 540 arcminutes (which equals 9 degrees)."
    },
    {
      question: "How many arcminutes are in a right angle?",
      answer: "A right angle is 100 gradians (90°), which equals 100 × 54 = 5,400 arcminutes."
    },
    {
      question: "What is the difference between an arcminute and a centesimal minute?",
      answer: "An arcminute is 1/60th of a degree (1/54 grad), whereas a centesimal minute (centigrad) is 1/100th of a gradian. A centesimal minute equals 0.54 arcminutes (32.4 arcseconds)."
    },
    {
      question: "How many arcminutes are in a full circle?",
      answer: "A full circle is 400 gradians (360°), which equals 400 × 54 = 21,600 arcminutes."
    }
  ],
  relatedList: [
    { label: "Gradian to Arcsecond", from: "gradian", to: "arcsecond" },
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Arcminute to Gradian", from: "arcminute", to: "gradian" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "National Geodetic Survey (NGS): Geodetic Glossary."
  ]
};
