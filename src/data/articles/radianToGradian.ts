import { CustomArticleData } from "./types";

export const radianToGradian: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "gradian",
  seoTitle: "Radian to Gradian Conversion (rad to grad) | UnitsConvertors.com",
  metaDescription: "Convert radians to gradians (gon) accurately using the formula (grad = rad × 200 / π). Learn metric surveying angle formulas, worked examples, and FAQs.",
  h1: "Radian to Gradian Conversion",
  introduction: [
    "The radian (rad) and the gradian (symbols: grad, gon, or ᵍ) represent the analytical SI framework and the metric decimal system for measuring plane angles. While a full circle contains $2\\pi$ radians (approximately $6.28318530718$ rad), a full circle in the metric gradian system contains exactly 400 gradians.",
    "Converting radians to gradians requires multiplying the angle in radians by $200 / \\pi$ (approximately $63.66197723676$). This means a right angle of $\\pi/2$ radians equals exactly 100 gradians, and $\\pi$ radians equals 200 gradians.",
    "Converting radians to gradians is common in European land surveying, geodetic satellite calculations, civil engineering total stations, and mathematical unit transformations. This guide details conversion formulas, surveying examples, reference tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert radians to gradians, multiply the radian value by 200 / π (approx. 63.66198). For example, π/2 radians (1.5708 rad) equals 100 gradians (grad/gon).",
    formulaDisplay: "Gradians (grad) = Radians (rad) × (200 / π) ≈ Radians × 63.66197724",
    subtext: "1 Radian ≈ 63.66197724 Gradians | π Radians = 200 Gradians | 2π Radians = 400 Gradians"
  },
  aboutSourceUnit: {
    title: "What is a Radian (rad)?",
    text: "A radian (symbol: rad) is the SI derived unit of plane angle, defined as the ratio of arc length to radius ($1\\text{ rad} = 1\\text{ m/m}$)."
  },
  aboutTargetUnit: {
    title: "What is a Gradian (grad/gon)?",
    text: "A gradian (symbols: grad, gon, grade) is a metric unit of plane angle equal to 1/400th of a full circle or 1/100th of a right angle ($1\\text{ grad} = 0.9^\\circ$)."
  },
  relationship: "A full circle equals $2\\pi$ radians or 400 gradians. Simplifying $400 / 2\\pi$ yields the exact conversion factor $200 / \\pi \\approx 63.66197723676$ gradians per radian.",
  relationshipTitle: "Fundamental Radian to Gradian Equivalents",
  relationshipItems: [
    { label: "π / 10 rad (18° Angle)", value: "20.0 grad (gon)" },
    { label: "π / 4 rad (45° Diagonal)", value: "50.0 grad" },
    { label: "π / 2 rad (90° Right Angle)", value: "100.0 grad" },
    { label: "π rad (180° Straight Angle)", value: "200.0 grad" },
    { label: "3π / 2 rad (270° Angle)", value: "300.0 grad" },
    { label: "2π rad (360° Full Circle)", value: "400.0 grad" }
  ],
  formula: {
    text: "Multiply the angle in radians by 200 and divide by pi (π).",
    math: "Angle (grad) = \\text{Angle (rad)} × \\frac{200}{\\pi}",
    subtext: "Exact mathematical factor: 200/π. Decimal multiplier: 63.66197723676."
  },
  formulaTitle: "Radian to Gradian Conversion Formula",
  practicalTip: {
    title: "Surveying Total Station Mode Check",
    text: "Before importing CAD alignment vectors, confirm whether your total station records angular observations in radians or gradians (gon). A 1.0 rad angle recorded as 1.0 gon produces a massive $57.3^\\circ$ directional error."
  },
  expertNote: {
    title: "Decimal Subdivision Consistency",
    text: "Because 100 gradians equals $\\pi/2$ radians, sub-angles in gradians use pure decimal fractions (centigrads and milligrads), integrating seamlessly with SI metric computations."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert π/2 Radians to Gradians",
        subtitle: "Convert π/2 radians to gradians.",
        steps: [
          "Identify radian value: 1.5707963 rad (π/2).",
          "Apply formula: Gradians = (π/2) × (200 / π).",
          "Cancel π: 200 / 2 = 100.",
          "Final Result: π/2 radians equals exactly 100 gradians."
        ]
      },
      {
        title: "Example 2: Convert 1 Radian to Gradians",
        subtitle: "Calculate gradians for 1 full radian.",
        steps: [
          "Identify radian value: 1.0 rad.",
          "Apply formula: Gradians = 1.0 × (200 / π).",
          "Calculate: 200 / 3.14159265 = 63.66197724.",
          "Final Result: 1 radian equals approximately 63.662 gradians."
        ]
      },
      {
        title: "Example 3: Convert 3.14159 Radians (π) to Gradians",
        subtitle: "Find gradians for a straight angle (π radians).",
        steps: [
          "Identify radian value: π rad.",
          "Apply formula: Gradians = π × (200 / π).",
          "Cancel π: 200.",
          "Final Result: π radians equals exactly 200 gradians."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Gradian Conversion Reference Matrix",
    headers: ["Radians (rad)", "Exact π Value", "Gradians (grad/gon)", "Surveying & Mathematical Description"],
    rows: [
      { fromVal: "0.015708 rad", toVal: "π / 200", extra: "1.0 grad", extra2: "1 centesimal degree benchmark" },
      { fromVal: "0.157080 rad", toVal: "π / 20", extra: "10.0 grad", extra2: "Base 10 grad angle step" },
      { fromVal: "0.314159 rad", toVal: "π / 10", extra: "20.0 grad", extra2: "18-degree angle equivalent" },
      { fromVal: "0.785398 rad", toVal: "π / 4", extra: "50.0 grad", extra2: "Half right angle (45° equivalent)" },
      { fromVal: "1.000000 rad", toVal: "1 rad", extra: "63.6620 grad", extra2: "Unit radius arc angle" },
      { fromVal: "1.570796 rad", toVal: "π / 2", extra: "100.0 grad", extra2: "Perpendicular right angle" },
      { fromVal: "3.141593 rad", toVal: "π", extra: "200.0 grad", extra2: "Straight line angle" },
      { fromVal: "4.712389 rad", toVal: "3π / 2", extra: "300.0 grad", extra2: "Three-quarter turn" },
      { fromVal: "6.283185 rad", toVal: "2π", extra: "400.0 grad", extra2: "Complete circular revolution" }
    ]
  },
  applications: {
    title: "Geodesy & Engineering Applications",
    items: [
      {
        title: "Geodetic Satellite Orbit Transformations",
        text: "Satellite tracking software converts orbital inclination vectors expressed in SI radians into European geodetic surveying grads."
      },
      {
        title: "Civil Engineering Tunnel Boring & Topography",
        text: "Underground tunnel alignment lasers convert trigonometric calculus output in radians to electronic total station grad readings."
      },
      {
        title: "CAD Geospatial Coordinate Software",
        text: "GIS software converts spatial angle fields between radians, degrees, and gradians for global map projection."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Radians to Gradians",
    items: [
      "Multiplying by π / 200 instead of 200 / π when converting radians to gradians.",
      "Confusing gradian (400 per circle) with degree (360 per circle).",
      "Treating 'gon' and 'gradian' as different units—they are identical.",
      "Omitting π when calculating exact fractions of π radians."
    ]
  },
  faqs: [
    {
      question: "How do you convert radians to gradians?",
      answer: "Multiply the radian value by 200 / π (approx. 63.66198). For example, 1.5708 rad × (200 / π) = 100 gradians."
    },
    {
      question: "How many gradians are in 1 radian?",
      answer: "There are approximately 63.66197724 (200 / π) gradians in 1 radian."
    },
    {
      question: "How many gradians are in π radians?",
      answer: "There are exactly 200 gradians in π radians."
    },
    {
      question: "How many gradians are in 2π radians?",
      answer: "There are exactly 400 gradians in 2π radians (one full circle)."
    },
    {
      question: "What is π/2 radians in gradians?",
      answer: "π/2 radians equals exactly 100 gradians (a right angle)."
    },
    {
      question: "Are gradian and gon the same?",
      answer: "Yes, 'gradian', 'grad', and 'gon' are identical names for the metric angular unit equal to 1/400th of a full circle."
    },
    {
      question: "What is 1.0 radian in gradians?",
      answer: "1.0 radian equals approximately 63.662 gradians."
    },
    {
      question: "Why is 200/π used for converting radians to gradians?",
      answer: "Because 2π radians = 400 gradians. Dividing both sides by 2π gives 1 radian = 400 / 2π = 200 / π gradians."
    }
  ],
  relatedList: [
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Arcminute", from: "radian", to: "arcminute" },
    { label: "Degree to Radian", from: "degree", to: "radian" }
  ],
  references: [
    "BIPM SI Brochure: Non-SI Units Accepted for Use (Gradian/Gon)",
    "ISO 80000-3: Space and Time Quantities — Plane Angle Units",
    "NIST Special Publication 330: Fundamental Physical Constants and Unit Conversion Ratios"
  ]
};
