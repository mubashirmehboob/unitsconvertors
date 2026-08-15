import { CustomArticleData } from "./types";

export const steradianToSpatArticle: CustomArticleData = {
  fromUnitId: "steradian",
  toUnitId: "spat",
  seoTitle: "Steradian to Spat Converter (sr to sp) - UnitsConvertors",
  metaDescription: "Convert steradians to spats (sr to sp) accurately. Learn the solid angle formula (sp = sr ÷ 4π), calculation steps, conversion tables, and FAQs.",
  h1: "Steradian to Spat Converter",
  introduction: [
    "Converting steradians (sr) to spats (sp) translates the standard SI unit of solid angle into whole-sphere fractional units. While the steradian is the standard SI derived unit for measuring solid angle, the spat represents the entire solid angle of a complete sphere.",
    "Because a complete sphere encompasses exactly 4π steradians (approximately 12.56637 sr), one spat equals 4π steradians. Converting steradians to spats requires dividing the steradian value by 4π (or multiplying by approximately 0.07957747).",
    "This reference explains the mathematical relationship between steradians and spats, details calculation steps with worked examples, provides a conversion reference table, and answers common solid-angle questions."
  ],
  quickAnswer: {
    text: "To convert steradians (sr) to spats (sp), divide the value by 4π (approximately 12.566371). For example, 12.56637 sr equals approximately 1.0 sp (12.56637 ÷ 4π ≈ 1.0 sp).",
    formulaDisplay: "Spats (sp) = Steradians (sr) ÷ 4π",
    subtext: "1 sr ≈ 0.07957747 sp (1 sp = 4π sr ≈ 12.566371 sr)."
  },
  aboutSourceUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a portion of the spherical surface having an area equal to r². A full sphere subtends exactly 4π steradians."
  },
  aboutTargetUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a non-SI unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. It is used as a simple way to express solid angles as fractions or percentages of full spherical coverage."
  },
  relationship: "One spat equals the complete solid angle of a sphere (4π steradians ≈ 12.566371 sr). Conversely, one steradian equals 1 / (4π) spat (≈ 0.07957747 sp).",
  relationshipTitle: "Steradian to Spat Unit Comparison",
  relationshipItems: [
    { label: "1 sr", value: "≈ 0.079577 sp (1 / 4π sp)" },
    { label: "π sr (≈ 3.14159 sr)", value: "= 0.25 sp (1/4 sphere)" },
    { label: "2π sr (≈ 6.28319 sr)", value: "= 0.50 sp (Hemisphere)" },
    { label: "4π sr (≈ 12.56637 sr)", value: "= 1.00 sp (Full Sphere)" }
  ],
  formula: {
    text: "Divide the solid angle in steradians by 4π (approximately 12.566370614) to determine the equivalent in spats.",
    math: "\\text{sp} = \\frac{\\text{sr}}{4\\pi} \\approx \\text{sr} \\times 0.07957747",
    subtext: "Where π ≈ 3.141592653589793."
  },
  practicalTip: {
    title: "Hemisphere Benchmark",
    text: "An unobstructed hemispherical field of view corresponds to 2π steradians. In spats, this equals exactly 2π ÷ 4π = 0.5 spat (half of the full sphere)."
  },
  expertNote: {
    title: "Direct Conversion Factor",
    text: "Multiplying by the reciprocal 1 / (4π) ≈ 0.0795774715 yields identical results to dividing by 4π."
  },
  examples: {
    title: "Step-by-Step Steradian to Spat Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Steradian to Spats",
        subtitle: "Express 1 sr as a fraction of a full sphere in spats.",
        steps: [
          "Identify known solid angle: 1.0 sr.",
          "Apply conversion formula: sp = 1.0 ÷ 4π.",
          "Calculate: 1.0 ÷ 12.566370614 ≈ 0.07957747 sp.",
          "Result: 1 steradian equals approximately 0.07958 spat (about 7.96% of a full sphere)."
        ]
      },
      {
        title: "Example 2: Hemispherical Solid Angle (2π sr)",
        subtitle: "Convert a hemispherical solid angle of 2π sr to spats.",
        steps: [
          "Identify known solid angle: 2π sr ≈ 6.283185 sr.",
          "Apply conversion formula: sp = 2π ÷ 4π.",
          "Calculate: 2π ÷ 4π = 0.50 sp.",
          "Result: 2π steradians equals exactly 0.5 spat."
        ]
      },
      {
        title: "Example 3: Optical Beam Angle (0.25 sr)",
        subtitle: "Convert a solid angle of 0.25 sr into spats.",
        steps: [
          "Identify known solid angle: 0.25 sr.",
          "Apply conversion formula: sp = 0.25 ÷ 4π.",
          "Calculate: 0.25 ÷ 12.566370614 ≈ 0.019894 sp.",
          "Result: 0.25 steradian equals approximately 0.01989 spat."
        ]
      }
    ]
  },
  table: {
    title: "Steradian to Spat Conversion Reference Table",
    headers: ["Steradians (sr)", "Spats (sp)", "Fraction of Sphere", "Geometric Equivalent"],
    rows: [
      { fromVal: "0.1 sr", toVal: "0.007958 sp", extra: "1 / 125.66 of sphere", extra2: "Narrow solid angle beam" },
      { fromVal: "0.5 sr", toVal: "0.039789 sp", extra: "1 / 25.13 of sphere", extra2: "Directional cone" },
      { fromVal: "1.0 sr", toVal: "0.079577 sp", extra: "1 / 12.57 of sphere", extra2: "Cone half-angle ≈ 32.8°" },
      { fromVal: "2.0 sr", toVal: "0.159155 sp", extra: "1 / 6.28 of sphere", extra2: "Broad emission cone" },
      { fromVal: "3.14159 sr (π)", toVal: "0.250000 sp", extra: "1/4 of sphere", extra2: "One quadrant" },
      { fromVal: "6.28319 sr (2π)", toVal: "0.500000 sp", extra: "1/2 of sphere", extra2: "Hemisphere" },
      { fromVal: "9.42478 sr (3π)", toVal: "0.750000 sp", extra: "3/4 of sphere", extra2: "Three quadrants" },
      { fromVal: "12.56637 sr (4π)", toVal: "1.000000 sp", extra: "Full sphere", extra2: "Complete sphere (1 spat)" }
    ]
  },
  applications: {
    title: "Applications of Steradian to Spat Conversion",
    items: [
      {
        title: "Photometric & Radiometric Geometry",
        text: "Relating directional radiation cones measured in steradians to total spherical emission envelopes."
      },
      {
        title: "Sky Coverage Calculations",
        text: "Expressing solid angles measured in steradians as fractions of the entire celestial sphere."
      },
      {
        title: "Optical Field Analysis",
        text: "Comparing sensor angular acceptance angles to full-sphere solid angles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Solid Angle Conversion",
    items: [
      "Multiplying by 4π instead of dividing: To convert steradians to spats, divide by 4π. Multiplication is used for the reverse conversion from spats to steradians.",
      "Confusing plane angle with solid angle: Steradians and spats measure 3D cones of solid angle, not 2D planar angles (radians or degrees).",
      "Using 2π instead of 4π for a full sphere: A complete sphere encompasses 4π steradians (1 spat), while 2π steradians represents a hemisphere."
    ]
  },
  faqs: [
    {
      question: "How many spats are in 1 steradian?",
      answer: "There are approximately 0.07957747 spats in 1 steradian (exact formula: 1 / 4π sp)."
    },
    {
      question: "What is the formula to convert steradians to spats?",
      answer: "The formula is: sp = sr ÷ 4π (or sp = sr × 0.07957747)."
    },
    {
      question: "How many steradians make up one complete spat?",
      answer: "Exactly 4π steradians (approximately 12.566371 sr) make up one complete spat."
    },
    {
      question: "What does 0.5 spat represent in steradians?",
      answer: "0.5 spat represents a hemisphere, which equals exactly 2π steradians (approximately 6.283185 sr)."
    },
    {
      question: "Why is a full sphere equal to 4π steradians?",
      answer: "A steradian is defined as surface area divided by radius squared (A/r²). Because the surface area of a sphere of radius r is 4πr², the total solid angle is 4πr² / r² = 4π steradians."
    },
    {
      question: "What is the difference between a steradian and a spat?",
      answer: "A steradian is the SI derived unit of solid angle, whereas a spat is a unit representing one complete spherical solid angle (equal to 4π steradians)."
    },
    {
      question: "How do I convert 4π steradians to spats?",
      answer: "Divide 4π by 4π: 4π ÷ 4π = 1.0 spat (representing the entire spherical solid angle)."
    },
    {
      question: "Is the spat an official SI unit?",
      answer: "No. The steradian is the official SI derived unit of solid angle, while the spat is a non-SI unit."
    }
  ],
  relatedList: [
    { label: "Spat to Steradian", from: "spat", to: "steradian" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" },
    { label: "Steradian to Square Radian", from: "steradian", to: "square-radian" },
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
