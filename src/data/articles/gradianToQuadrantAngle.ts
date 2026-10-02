import { CustomArticleData } from "./types";

export const gradianToQuadrantAngle: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "quadrant-angle",
  seoTitle: "Gradian to Quadrant Converter (grad to quad) | UnitsConvertors.com",
  metaDescription: "Convert gradians to quadrants (grad to quad) with exact decimal precision. Master right-angle trigonometry, survey quadrant calculations, formulas, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-quadrant-angle",
  h1: "Gradian to Quadrant Converter",
  introduction: [
    "The gradian (grad, or gon) and the quadrant (quad) share an intimate historical and mathematical bond rooted in decimal metric geometry. Developed during the French Enlightenment, the gradian was explicitly designed around the quadrant: one quadrant (a 90-degree right angle) was partitioned into exactly 100 decimal gradians. Consequently, each gradian represents exactly 0.01 (one-hundredth) of a quadrant.",
    "Because a full circle contains exactly four quadrants and 400 gradians, converting between these two units is as simple as shifting a decimal point. Dividing any gradian value by 100 directly yields the equivalent measurement in quadrants.",
    "To convert gradians to quadrants, divide the gradian measurement by 100 (or multiply by 0.01). Conversely, multiply quadrants by 100 to determine gradians. This technical article explores the geometric derivations, cartographic surveying methods, worked examples, and an authoritative conversion reference table."
  ],
  quickAnswer: {
    text: "To convert gradians to quadrants, divide the gradian value by 100 (or multiply by 0.01). For example, 100 gradians equals exactly 1 quadrant (one right angle), and 50 gradians equals 0.5 quadrant (45 degrees).",
    formulaDisplay: "Quadrants (quad) = Gradians / 100 = Gradians × 0.01",
    subtext: "1 Gradian = 0.01 Quadrant; 1 Quadrant = 100 Gradians (exact integer definition); 4 Quadrants = 400 Gradians = 1 Circle."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon) is a metric unit of plane angle. Formulated during the 1790s metric reforms in France, the gradian replaced the ancient Babylonian sexagesimal 90-degree quadrant with a decimal 100-grad quadrant. A straight angle is 200 grads, and a full circle consists of 400 grads. It remains a standard unit in civil engineering and land surveying across several European nations."
  },
  aboutTargetUnit: {
    title: "Understanding the Quadrant (quad)",
    text: "The quadrant (symbol: quad) represents one-fourth of a circle, precisely defining a 90-degree right angle (π/2 radians). Widely used in Euclidean geometry, cartographic compass bearings, celestial navigation, and coordinate geometry, quadrants define the four 90-degree sectors of the Cartesian plane."
  },
  relationship: "By foundational metric definition, 1 quadrant contains exactly 100 gradians. Therefore, 1 gradian equals 1/100 of a quadrant (exactly 0.01 quad). Inversely, 1 quadrant equals 100 gradians. A straight angle represents 2 quadrants (200 grads), and a complete circular revolution represents 4 quadrants (400 grads).",
  relationshipTitle: "Gradian to Quadrant Exact Decimal Scale",
  relationshipItems: [
    { label: "1 grad", value: "0.01 quad" },
    { label: "10 grad", value: "0.10 quad" },
    { label: "25 grad", value: "0.25 quad" },
    { label: "50 grad", value: "0.50 quad (Half Quadrant / 45°)" },
    { label: "100 grad", value: "1.00 quad (Right Angle / 90°)" },
    { label: "200 grad", value: "2.00 quad (Straight Angle / 180°)" },
    { label: "300 grad", value: "3.00 quad (Three Right Angles / 270°)" },
    { label: "400 grad", value: "4.00 quad (Full Circle / 360°)" }
  ],
  formula: {
    text: "Divide the angle in gradians by 100, or multiply by 0.01, to determine quadrants.",
    math: "\\text{Quadrants (quad)} = \\frac{\\text{grad}}{100} = \\text{grad} \\times 0.01",
    subtext: "Inverse formula: grad = quad × 100"
  },
  formulaTitle: "Gradian to Quadrant Conversion Formula",
  practicalTip: {
    title: "The Two-Decimal Shift Method",
    text: "Because the conversion factor is exactly 0.01, you never need a calculator: simply move the decimal point two places to the left. For example, 137.5 grads becomes 1.375 quadrants instantly."
  },
  expertNote: {
    title: "Historical Origin of the Metric Gon",
    text: "The entire French metric angular system was designed around the quadrant. French scientists defined the meter as one ten-millionth of the distance from the North Pole to the Equator along the Paris meridian—meaning one quadrant of the Earth measured exactly 10,000,000 meters, and each gradian along the meridian subtended exactly 100 kilometers. Thus, 1 gradian = 0.01 quadrant is the core pillar of metric geodesy."
  },
  examples: {
    title: "Step-by-Step grad to quad Worked Examples",
    items: [
      {
        title: "Example 1: Survey Boundary Corner Angle",
        subtitle: "A land boundary legal description in France records a boundary corner turn of 85.0 grads. Convert this angle into quadrants.",
        steps: [
          "Identify the angle in gradians: θ = 85.0 grad.",
          "Apply the conversion formula: quad = grad / 100.",
          "Calculate: quad = 85.0 / 100 = 0.85 quad.",
          "Final Answer: 85.0 gradians equals exactly 0.85 quadrant (or 76.5 degrees)."
        ]
      },
      {
        title: "Example 2: Civil Engineering Slope Transition",
        subtitle: "A railway curve embankment banking transition traverses an angle of 35.5 grads. Express this angle in quadrants.",
        steps: [
          "Identify the input: 35.5 grad.",
          "Shift decimal two positions left: 35.5 × 0.01 = 0.355 quad.",
          "Final Answer: 35.5 gradians is equal to exactly 0.355 quadrant."
        ]
      },
      {
        title: "Example 3: Multi-Quadrant Azimuth Heading",
        subtitle: "A geodetic surveying traverse closes with an accumulated azimuth angle of 275 gradians. Convert this heading to quadrants.",
        steps: [
          "Identify the angle: 275 grad.",
          "Divide by 100: quad = 275 / 100 = 2.75 quad.",
          "Geometric breakdown: 2 full right angles (180°) plus 0.75 of the third quadrant (67.5°), totaling 247.5°.",
          "Final Answer: 275 gradians corresponds to exactly 2.75 quadrants."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Quadrant Conversion Table",
    headers: ["Gradians (grad)", "Quadrants (quad)", "Degree Equivalent", "Classification"],
    rows: [
      { fromVal: "1 grad", toVal: "0.01 quad", extra: "0.9°", extra2: "Sub-Quadrant Angle" },
      { fromVal: "10 grad", toVal: "0.10 quad", extra: "9.0°", extra2: "Acute Angle" },
      { fromVal: "25 grad", toVal: "0.25 quad", extra: "22.5°", extra2: "Quarter Quadrant" },
      { fromVal: "50 grad", toVal: "0.50 quad", extra: "45.0°", extra2: "Half Quadrant (Octant)" },
      { fromVal: "75 grad", toVal: "0.75 quad", extra: "67.5°", extra2: "Three-Quarter Quadrant" },
      { fromVal: "100 grad", toVal: "1.00 quad", extra: "90.0°", extra2: "First Quadrant (Right Angle)" },
      { fromVal: "150 grad", toVal: "1.50 quad", extra: "135.0°", extra2: "Obtuse Angle" },
      { fromVal: "200 grad", toVal: "2.00 quad", extra: "180.0°", extra2: "Second Quadrant (Straight Angle)" },
      { fromVal: "250 grad", toVal: "2.50 quad", extra: "225.0°", extra2: "Reflex Angle" },
      { fromVal: "300 grad", toVal: "3.00 quad", extra: "270.0°", extra2: "Third Quadrant" },
      { fromVal: "350 grad", toVal: "3.50 quad", extra: "315.0°", extra2: "Reflex Angle" },
      { fromVal: "400 grad", toVal: "4.00 quad", extra: "360.0°", extra2: "Complete Circle (4 Quadrants)" }
    ]
  },
  applications: {
    title: "Practical Applications of Gradians to Quadrants",
    items: [
      {
        title: "Cartographic Compass Quadrant Bearings",
        text: "Surveyors define bearings relative to cardinal quadrants (e.g., North 45° East). Converting gradian azimuths directly into quadrant fractions simplifies plotting lines within specific navigational quadrants."
      },
      {
        title: "Geodetic Earth Arc Calculations",
        text: "Because one quadrant of Earth's meridian was historical basis for 10,000 km, each quadrant directly corresponds to 10,000 km of meridian arc and 100 grads, making 1 grad = 100 km."
      },
      {
        title: "Architectural Drafting and CAD Orthogonal Layouts",
        text: "Right-angle structural wall intersections (1 quadrant) equal exactly 100 grads in French and Swiss BIM architectural modeling systems."
      },
      {
        title: "Trigonometric Domain Segmentation",
        text: "Evaluating trigonometric function signs (+ or - for sine, cosine, tangent) depends on the active quadrant (Quads I, II, III, IV), making gradian-to-quadrant conversion immediate."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Quadrant Conversions",
    items: [
      "Dividing by 90 instead of 100. A right angle is 90 degrees, but it is 100 grads. Always divide grads by 100 to get quadrants.",
      "Confusing quadrants with full turns. A quadrant is one-quarter of a circle (90°), not a full circle (360°). Four quadrants make one turn.",
      "Misplacing decimal positions. Because the factor is 0.01, ensure you shift two decimal places left (15 grad = 0.15 quad, not 1.5 quad)."
    ]
  },
  faqs: [
    {
      question: "How many quadrants are in 1 gradian?",
      answer: "There is exactly 0.01 quadrant in 1 gradian (1/100 of a quadrant). To convert any gradian value to quadrants, divide the gradian number by 100."
    },
    {
      question: "What is the formula to convert gradians to quadrants?",
      answer: "The conversion formula is Quadrants = Gradians / 100, or Quadrants = Gradians × 0.01. To convert quadrants back to gradians, multiply by 100."
    },
    {
      question: "How many gradians are in 1 quadrant?",
      answer: "There are exactly 100 gradians in 1 quadrant. This represents a 90-degree right angle (π/2 radians)."
    },
    {
      question: "Why are there 100 gradians in a quadrant?",
      answer: "The gradian was created during the French Revolution to introduce decimal measurement into geometry, replacing the sexagesimal 90-degree division with a base-10 100-grad quadrant."
    },
    {
      question: "How many quadrants make a full circle?",
      answer: "Exactly 4 quadrants make a full circular rotation (400 gradians or 360 degrees)."
    },
    {
      question: "How do I convert 250 gradians to quadrants?",
      answer: "Divide 250 by 100: 250 / 100 = 2.50 quadrants. This corresponds to 225 degrees or 5π/4 radians."
    },
    {
      question: "Is the conversion between gradian and quadrant exact?",
      answer: "Yes. The factor 0.01 is an exact decimal number. There is no rounding error or recurring fraction involved."
    },
    {
      question: "Where is the quadrant unit commonly used?",
      answer: "Quadrants are widely used in geometry, Cartesian coordinate analysis, compass quadrant bearings (N/S/E/W), and celestial navigation."
    }
  ],
  relatedList: [
    { label: "Quadrant to Gradian", from: "quadrant-angle", to: "gradian" },
    { label: "Gradian to Turn", from: "gradian", to: "turn-angle" },
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" },
    { label: "Gradian to Revolution", from: "gradian", to: "revolution" }
  ],
  references: [
    "BIPM: The International System of Units (SI) Brochure.",
    "ISO 80000-3: Space and Time Units.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
