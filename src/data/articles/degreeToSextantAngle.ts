import { CustomArticleData } from "./types";

export const degreeToSextantAngle: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "sextant-angle",
  seoTitle: "Degree to Sextant Conversion (° to sextant) | UnitsConvertors.com",
  metaDescription: "Convert degrees to sextant angles accurately using the formula (sextants = ° / 60). Learn celestial navigation history, geometry, worked examples, and FAQs.",
  h1: "Degree to Sextant Conversion",
  introduction: [
    "The degree (°) and the sextant angle (symbol: sext or sextant) are units of angular measure derived from geometry and classical celestial navigation. While a degree divides a circle into 360 sexagesimal parts, a sextant angle represents one-sixth ($1/6$) of a full turn, equal to exactly 60 degrees.",
    "The sextant instrument gets its name from its physical frame, which forms an arc of one-sixth of a circle ($60^\\circ$). Because of double-reflection optics in its mirrors, a $60^\\circ$ physical arc can measure sight angles up to $120^\\circ$. Converting degrees to sextant angles involves dividing the degree angle by 60 (or multiplying by $1/60 \\approx 0.01666666667$).",
    "For example, an equilateral triangle's interior angles of $60^\\circ$ each correspond to exactly 1.0 sextant angle, while a $180^\\circ$ straight angle equals 3.0 sextant angles. This guide details conversion formulas, celestial navigation optics, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert degrees to sextant angles, divide the degree value by 60. For example, 120 degrees equals 120 / 60 = 2.0 sextant angles.",
    formulaDisplay: "Sextant Angles (sext) = Degrees (°) ÷ 60 = Degrees × 0.01666667",
    subtext: "1 Degree = 0.01666667 Sextant Angle | 60 Degrees = 1 Sextant Angle | 360 Degrees = 6 Sextant Angles"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and geography."
  },
  aboutTargetUnit: {
    title: "What is a Sextant Angle (sext)?",
    text: "A sextant angle (symbol: sext) is a unit of plane angle equal to 60 degrees ($\pi/3$ radians or 66.6667 gradians), corresponding to one-sixth of a full $360^\\circ$ rotation."
  },
  relationship: "A full circle contains 360 degrees or 6 sextant angles ($360 / 60 = 6$). Dividing degrees by 60 expresses any angle in terms of sextant angle units.",
  relationshipTitle: "Key Degree to Sextant Angle Equivalents",
  relationshipItems: [
    { label: "30° Half Sextant Angle", value: "0.5 sext" },
    { label: "60° One Sextant Angle", value: "1.0 sext" },
    { label: "120° Two Sextant Angles", value: "2.0 sexts" },
    { label: "180° Three Sextant Angles", value: "3.0 sexts" },
    { label: "240° Four Sextant Angles", value: "4.0 sexts" },
    { label: "360° Complete Circle", value: "6.0 sexts" }
  ],
  formula: {
    text: "Divide the angle in degrees by 60.",
    math: "Angle (sext) = \\frac{\\text{Angle }(^\\circ)}{60}",
    subtext: "Decimal multiplier formula: Sextants = Degrees × 0.01666666667."
  },
  formulaTitle: "Degree to Sextant Angle Formula",
  practicalTip: {
    title: "Double Reflection Mirror Principle",
    text: "In a marine sextant, the index mirror rotates through half the angle of the observed light ray. Consequently, a physical $60^\\circ$ arc (1 sextant angle) measures a total sight angle up to $120^\\circ$ (2 sextant angles)."
  },
  expertNote: {
    title: "Equilateral Geometry Constant",
    text: "In planar geometry, an equilateral triangle features three equal interior angles of $60^\\circ$ each (1 sextant angle), and six equilateral triangles tile a 2D plane around a central point ($6 \\times 60^\\circ = 360^\\circ$)."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 180 Degrees to Sextant Angles",
        subtitle: "Find sextant angles for a straight angle of 180°.",
        steps: [
          "Identify degree value: 180°.",
          "Apply formula: sext = 180 / 60.",
          "Calculate: 180 / 60 = 3.0.",
          "Final Result: 180° equals 3.0 sextant angles."
        ]
      },
      {
        title: "Example 2: Convert 90 Degrees to Sextant Angles",
        subtitle: "Convert a right angle of 90° into sextant angles.",
        steps: [
          "Identify degree value: 90°.",
          "Apply formula: sext = 90 / 60.",
          "Simplify fraction: 90 / 60 = 1.5.",
          "Final Result: 90° equals 1.5 sextant angles."
        ]
      },
      {
        title: "Example 3: Convert 15 Degrees to Sextant Angles",
        subtitle: "Convert a 15° acute angle into fractional sextant angles.",
        steps: [
          "Identify degree value: 15°.",
          "Apply formula: sext = 15 / 60.",
          "Simplify fraction: 15 / 60 = 0.25.",
          "Final Result: 15° equals 0.25 sextant angles (quarter sextant)."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Sextant Angle Conversion Reference Matrix",
    headers: ["Degrees (°)", "Sextant Angles (sext)", "Fraction of Circle", "Geometric & Navigational Context"],
    rows: [
      { fromVal: "1°", toVal: "0.016667 sext", extra: "1 / 360 turn", extra2: "Single degree increment" },
      { fromVal: "15°", toVal: "0.250000 sext", extra: "1 / 24 turn", extra2: "1 hour of Earth diurnal rotation" },
      { fromVal: "30°", toVal: "0.500000 sext", extra: "1 / 12 turn", extra2: "Half sextant angle / 30-degree arc" },
      { fromVal: "60°", toVal: "1.000000 sext", extra: "1 / 6 turn", extra2: "One sextant angle / equilateral corner" },
      { fromVal: "90°", toVal: "1.500000 sext", extra: "1 / 4 turn", extra2: "One and a half sextant angles (right angle)" },
      { fromVal: "120°", toVal: "2.000000 sext", extra: "1 / 3 turn", extra2: "Two sextant angles / optical measurement limit" },
      { fromVal: "180°", toVal: "3.000000 sext", extra: "1 / 2 turn", extra2: "Three sextant angles (straight line)" },
      { fromVal: "240°", toVal: "4.000000 sext", extra: "2 / 3 turn", extra2: "Four sextant angles" },
      { fromVal: "300°", toVal: "5.000000 sext", extra: "5 / 6 turn", extra2: "Five sextant angles" },
      { fromVal: "360°", toVal: "6.000000 sext", extra: "1 full turn", extra2: "Six sextant angles (complete revolution)" }
    ]
  },
  applications: {
    title: "Optical & Navigational Applications",
    items: [
      {
        title: "Celestial Navigation Instrument Design",
        text: "Navigational sextants, octants ($45^\\circ$), and quintants ($72^\\circ$) are built on fractional circle frame geometry."
      },
      {
        title: "Hexagonal Crystal Tiling",
        text: "Crystallography and solid-state physics analyze hexagonal crystal lattice symmetries structured around $60^\\circ$ (1 sextant) bonds."
      },
      {
        title: "Structural Truss Engineering",
        text: "Warren bridge trusses and triangular space frames utilize $60^\\circ$ equilateral member joints for optimal load distribution."
      },
      {
        title: "Computer Graphics & Hex Grid Mapping",
        text: "Game developers build hexagonal tile maps with $60^\\circ$ vertex direction vectors."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Sextant Angles",
    items: [
      "Multiplying by 60 instead of dividing by 60 when converting degrees to sextant angles.",
      "Confusing a sextant angle ($60^\\circ$) with an octant angle ($45^\\circ$) or quadrant angle ($90^\\circ$).",
      "Confusing the physical frame arc ($60^\\circ$) with the double-reflected optical sight range ($120^\\circ$).",
      "Confusing sextant angle ($60^\\circ$) with arcminutes (where 1 degree = 60 arcminutes)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to sextant angles?",
      answer: "Divide the degree value by 60. For example, 120° / 60 = 2.0 sextant angles."
    },
    {
      question: "How many degrees are in 1 sextant angle?",
      answer: "There are exactly 60 degrees in 1 sextant angle."
    },
    {
      question: "How many sextant angles are in a full circle?",
      answer: "A full 360-degree circle contains exactly 6 sextant angles."
    },
    {
      question: "Why is it called a sextant angle?",
      answer: "The term comes from the Latin 'sextans' meaning one-sixth, because 60 degrees is one-sixth of a full 360-degree circle."
    },
    {
      question: "What is 180 degrees in sextant angles?",
      answer: "180 degrees equals exactly 3.0 sextant angles."
    },
    {
      question: "What is 90 degrees in sextant angles?",
      answer: "90 degrees equals 1.5 sextant angles."
    },
    {
      question: "How many radians are in 1 sextant angle?",
      answer: "There are π/3 radians (approximately 1.047198 radians) in 1 sextant angle."
    },
    {
      question: "What is 1 degree in sextant angles?",
      answer: "1 degree equals 1/60th of a sextant angle, or approximately 0.01666667 sextant angles."
    }
  ],
  relatedList: [
    { label: "Degree to Quadrant", from: "degree", to: "quadrant-angle" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and Time (Sextant Unit Standard)",
    "American Practical Navigator (Bowditch): The Sextant and Double Reflection Principles",
    "NIST Handbook of Mathematical Functions: Polygon Angle Geometry"
  ]
};
