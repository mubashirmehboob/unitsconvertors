import { CustomArticleData } from "./types";

export const radianToSextantAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "sextant-angle",
  seoTitle: "Radian to Sextant Converter (rad to sextant) | UnitsConvertors.com",
  metaDescription: "Convert radians to sextant angles accurately. Learn the mathematical formula (sextants = rad × 3/π), celestial navigation instrument history, and tables.",
  h1: "Radian to Sextant Converter",
  introduction: [
    "Converting radians to sextant angles connects the foundational SI unit of mathematical angle with the classical geometry of equilateral triangles, hexagonal crystal symmetry, and the double-reflection optical instruments of marine celestial navigation.",
    "While the radian (rad) is the base SI unit of plane angle derived from circular arc length, a sextant angle (symbol: sext or sextant) represents one-sixth ($1/6$) of a complete circular turn, corresponding to exactly 60 degrees or $\\pi/3$ radians.",
    "Because one sextant equals $\\pi/3$ radians (approximately 1.0471976 rad), converting radians to sextants requires multiplying the radian value by $3 / \\pi$ (or dividing by $\\pi/3$, which equals multiplying by approximately $0.95492966$). This guide details the mathematical derivation, celestial navigation instrument optics, hexagonal indexing examples, and complete conversion tables."
  ],
  quickAnswer: {
    text: "To convert radians to sextant angles, multiply the angle in radians by 3 / π (or divide by 1.0471976). For example, π radians equals exactly 3.0 sextant angles (180 degrees).",
    formulaDisplay: "\\text{Sextants} = \\text{Radians (rad)} \\times \\frac{3}{\\pi} = \\frac{\\text{Radians}}{\\pi / 3} \\approx \\text{Radians} \\times 0.9549297",
    subtext: "1 Radian ≈ 0.9549297 Sextants | 1 Sextant = π/3 Radians (60°) | 6 Sextants = 2π Radians (360°)"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI derived unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc whose length equals the radius. One complete circle spans $2\\pi$ radians (≈ 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Sextant Angle (sextant)",
    text: "A sextant angle (symbol: sext or sextant) is an angular unit representing one-sixth ($1/6$) of a complete revolution, equal to exactly 60 degrees, $\\pi/3$ radians, or 2/3 of a right angle. It is named after the astronomical sextant instrument whose physical frame spans a 60-degree arc."
  },
  relationship: "A complete circular revolution equals $2\\pi$ radians and 6 sextant angles. Dividing 6 by $2\\pi$ simplifies to the exact conversion ratio $3 / \\pi \\approx 0.95492965855$ sextants per radian. Conversely, 1 sextant angle equals exactly $\\pi/3 \\approx 1.0471975512$ radians.",
  relationshipTitle: "Radian vs Sextant Angle Scale Comparison",
  relationshipItems: [
    { label: "π/6 Radians (30° Half Sextant)", value: "0.500000 sextant" },
    { label: "1.0 Radian (≈ 57.30°)", value: "≈ 0.954930 sextant" },
    { label: "π/3 Radians (60° Full Sextant)", value: "1.000000 sextant" },
    { label: "π/2 Radians (90° Quadrant)", value: "1.500000 sextants" },
    { label: "π Radians (180° Half Turn)", value: "3.000000 sextants" },
    { label: "2π Radians (360° Full Circle)", value: "6.000000 sextants" }
  ],
  formula: {
    text: "Multiply the angle in radians by 3 and divide by pi (π), or multiply directly by 0.954929659.",
    math: "\\text{Sextants} = \\text{Angle (rad)} \\times \\frac{3}{\\pi} = \\frac{\\text{Angle (rad)}}{\\pi / 3}",
    subtext: "Inverse formula: Radians (rad) = Sextants × (π / 3) ≈ Sextants × 1.047197551"
  },
  formulaTitle: "Radian to Sextant Conversion Formula",
  practicalTip: {
    title: "1 Radian is Nearly 1 Sextant",
    text: "Notice that 1 radian (57.2958°) is extremely close to 1 sextant (60.0°). Specifically, 1 radian equals approximately 0.955 sextants (within 4.5% of unity), making mental estimations very straightforward."
  },
  expertNote: {
    title: "Why the Navigation Sextant Measures 120° on a 60° Arc",
    text: "While the physical frame of a marine sextant spans a 60-degree arc (one-sixth of a circle, hence 'sextant'), the principle of double reflection allows the index mirror and horizon glass to measure sight angles up to 120 degrees (two sextant angles or 2π/3 radians)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Hexagonal CNC Rotary Indexing Fixture",
        subtitle: "A multi-axis CNC machine indexes a hexagonal bolt head through an angular increment of 1.0472 radians (π/3 rad). Convert this movement to sextant units.",
        steps: [
          "State given angle: 1.047198 radians (π/3 rad).",
          "Apply conversion factor: Sextants = (π/3) × (3/π).",
          "Perform calculation: (π/3) × (3/π) = 1.0000 sextant.",
          "Final Result: The spindle indexed by exactly 1.0 sextant angle (60 degrees)."
        ]
      },
      {
        title: "Example 2: Celestial Altitude Sight Angle",
        subtitle: "A navigator's mathematical ephemeris calculates the true altitude of Polaris above the horizon as 0.785398 radians (π/4 rad = 45°). Convert this altitude to sextants.",
        steps: [
          "State value: π/4 radians (0.785398 rad).",
          "Multiply: (π/4) × (3/π) = 3/4 = 0.75 sextants.",
          "Final Result: The celestial altitude is exactly 0.75 sextants (or three-quarters of a sextant angle)."
        ]
      },
      {
        title: "Example 3: Full Circle Equilateral Segment Division",
        subtitle: "Express a complete 360-degree revolution (2π radians) in sextant units.",
        steps: [
          "State total angle: 2π radians.",
          "Multiply: 2π × (3/π) = 6.0000 sextants.",
          "Final Result: A complete circle comprises exactly 6 sextant units."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Sextant Conversion Reference Table",
    headers: ["Radians (rad)", "Sextants (sext)", "Degrees (°)", "Quadrants (quad)", "Geometric Feature"],
    rows: [
      { fromVal: "π/12 rad (0.2618)", toVal: "0.2500 sext (1/4)", extra: "15.00°", extra2: "0.1667 quad", extra3: "One hour of Earth rotation" },
      { fromVal: "π/6 rad (0.5236)", toVal: "0.5000 sext (1/2)", extra: "30.00°", extra2: "0.3333 quad", extra3: "Half-sextant angle" },
      { fromVal: "π/4 rad (0.7854)", toVal: "0.7500 sext (3/4)", extra: "45.00°", extra2: "0.5000 quad", extra3: "Octant (45° angle)" },
      { fromVal: "1.0 rad", toVal: "0.9549 sext", extra: "57.30°", extra2: "0.6366 quad", extra3: "1.0 Radian arc angle" },
      { fromVal: "π/3 rad (1.0472)", toVal: "1.0000 sext", extra: "60.00°", extra2: "0.6667 quad", extra3: "Exact sextant / Equilateral angle" },
      { fromVal: "π/2 rad (1.5708)", toVal: "1.5000 sexts", extra: "90.00°", extra2: "1.0000 quad", extra3: "Right angle (quadrant)" },
      { fromVal: "2π/3 rad (2.0944)", toVal: "2.0000 sexts", extra: "120.00°", extra2: "1.3333 quad", extra3: "Marine sextant optical max" },
      { fromVal: "π rad (3.1416)", toVal: "3.0000 sexts", extra: "180.00°", extra2: "2.0000 quads", extra3: "Straight line (half turn)" },
      { fromVal: "4π/3 rad (4.1888)", toVal: "4.0000 sexts", extra: "240.00°", extra2: "2.6667 quads", extra3: "Two-thirds full circle" },
      { fromVal: "5π/3 rad (5.2360)", toVal: "5.0000 sexts", extra: "300.00°", extra2: "3.3333 quads", extra3: "Five-sixths turn" },
      { fromVal: "2π rad (6.2832)", toVal: "6.0000 sexts", extra: "360.00°", extra2: "4.0000 quads", extra3: "Complete circular revolution" }
    ]
  },
  applications: {
    title: "Navigation, Crystallography, & Mechanical Tooling",
    items: [
      {
        title: "Celestial Marine Navigation",
        text: "Navigators calculate celestial positions using spherical trigonometry in radians and convert to sextant angles to calibrate index mirror sight arms."
      },
      {
        title: "Hexagonal Crystal Lattice Geometry",
        text: "Materials scientists model hexagonal close-packed (HCP) atomic structures and 6-fold symmetric crystal axes spanning 60° (π/3 rad) sextant sectors."
      },
      {
        title: "Rotary Indexing Tables & Machine Tooling",
        text: "Manufacturing engineers program 6-station rotary indexing tables, dividing 2π radians into six discrete 1.0-sextant dwell increments."
      },
      {
        title: "Honeycomb & Hexagonal Mesh Design",
        text: "Structural engineers evaluate load distribution across 60-degree truss joints and hexagonal cellular cores modeled from trigonometric angles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Sextant Conversions",
    items: [
      "Multiplying by π/3 instead of 3/π (or dividing by π/3), resulting in a ~1.1× inversion error.",
      "Confusing a sextant (1/6 circle, 60°, π/3 rad) with an octant (1/8 circle, 45°, π/4 rad) or a quadrant (1/4 circle, 90°, π/2 rad).",
      "Confusing the physical 60° frame arc of a navigation sextant with its 120° effective double-reflection measuring capacity.",
      "Rounding the constant (3/π ≈ 0.95493) prematurely in high-precision aerospace or optics applications."
    ]
  },
  faqs: [
    {
      question: "How many sextants are in 1 radian?",
      answer: "One radian equals 3 / π sextants, which is approximately 0.954929659 sextants (about 95.5% of a 60-degree sextant angle)."
    },
    {
      question: "How many radians are in 1 sextant angle?",
      answer: "There are exactly π/3 radians in 1 sextant angle, which is approximately 1.047197551 radians (equal to 60 degrees)."
    },
    {
      question: "What is the formula to convert radians to sextants?",
      answer: "The formula is: Sextants = Radians × (3 / π) = Radians / (π / 3) ≈ Radians × 0.954929659."
    },
    {
      question: "How many sextants make up a full circle?",
      answer: "There are exactly 6 sextants in a complete circular turn (6 × 60° = 360°, or 6 × π/3 = 2π radians)."
    },
    {
      question: "How many sextants is π radians?",
      answer: "π radians equals exactly 3.0 sextants (180 degrees or a straight angle)."
    },
    {
      question: "How many sextants is 2π radians?",
      answer: "2π radians equals exactly 6.0 sextants (360 degrees or one full rotation)."
    },
    {
      question: "Why is it called a sextant?",
      answer: "The name 'sextant' comes from the Latin 'sextans' (one-sixth), because the physical instrument's arc spans one-sixth of a circle (60 degrees)."
    },
    {
      question: "What is the difference between a quadrant, a sextant, and an octant?",
      answer: "A quadrant is 1/4 of a circle (90° or π/2 rad), a sextant is 1/6 of a circle (60° or π/3 rad), and an octant is 1/8 of a circle (45° or π/4 rad)."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Quadrant", from: "radian", to: "quadrant-angle" },
    { label: "Degree to Sextant", from: "degree", to: "sextant-angle" },
    { label: "Radian to Revolution", from: "radian", to: "revolution" }
  ],
  references: [
    "Bowditch, N.: The American Practical Navigator (NIMA Pub No. 9).",
    "BIPM: The International System of Units (SI) — Plane Angle Units.",
    "ISO 80000-3: Space and Time — Angular Units and Quantities."
  ]
};
