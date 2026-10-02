import { CustomArticleData } from "./types";

export const radianToCircularMilAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "circular-mil-angle",
  seoTitle: "Radian to Circular Mil Angle Converter | UnitsConvertors.com",
  metaDescription: "Convert radians to circular mil angle units accurately. Explore trigonometric circle derivations, formulas, step-by-step calculations, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/radian-to-circular-mil-angle",
  h1: "Radian to Circular Mil Angle Converter",
  introduction: [
    "The radian (rad) and the circular mil angle represent two specialized approaches to circular division and angular measurement. The radian is the fundamental, dimensionless SI unit of plane angle, derived directly from the relationship between circular radius and arc length (θ = s/r) and applied universally across analytical trigonometry, kinematics, and wave mechanics. In specialized electrical winding, optics, and circular cross-sectional engineering, the circular mil angle provides an index for rotational and angular orientation.",
    "Within angular conversion matrices based on standard circle geometry, one radian represents approximately 57.29578 angular units (equal to the ratio 180/π). Conversely, one circular mil angular unit corresponds to exactly π/180 radians (approximately 0.017453 radians).",
    "To convert radians to circular mil angle units, multiply the radian value by 180/π (approximately 57.29578). This technical reference details the mathematical formulation, practical engineering examples, and an authoritative conversion table."
  ],
  quickAnswer: {
    text: "To convert radians to circular mil angle units, multiply the radian value by 180/π (approximately 57.2957795). For example, 1 radian equals approximately 57.30 circular mil angle units, and π radians equals exactly 180 units.",
    formulaDisplay: "Circular Mil Angle = rad × (180 / π) ≈ rad × 57.29578",
    subtext: "1 Radian ≈ 57.29578 Circular Mil Angle units; 1 Circular Mil Angle = 0.017453 Radians (π/180 rad)."
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian is the coherent derived unit of plane angle in the International System of Units (SI). One radian is defined as the angle created when an arc along the circumference of a circle has a length equal to the radius of the circle. Because an entire circle has a circumference of 2πr, a full circle contains exactly 2π radians (~6.283185 rad). The radian is the only angle unit that allows direct, unscaled differentiation and integration of trigonometric functions in calculus."
  },
  aboutTargetUnit: {
    title: "Understanding the Circular Mil Angle",
    text: "The circular mil angle is an angular indexing metric adapted from electrical conductor cross-sectional geometry. In standard angular conversion frameworks, the circular mil angle unit aligns with single-degree circular arc increments (360 divisions per full circle), allowing electrical motor winders, magnetics designers, and optical instrumentation engineers to compute rotary displacement relative to circular conductor winding slots."
  },
  relationship: "A full circle consists of 2π radians and 360 angular divisions. Therefore, 1 radian equals 180/π ≈ 57.2957795 circular mil angle units. Inversely, 1 circular mil angle unit equals π/180 ≈ 0.017453293 radians.",
  relationshipTitle: "Radian to Circular Mil Angle Scale",
  relationshipItems: [
    { label: "0.1 rad", value: "5.7296 units" },
    { label: "0.5 rad", value: "28.6479 units" },
    { label: "1.0 rad", value: "57.2958 units" },
    { label: "π/2 rad (1.5708 rad)", value: "90.0000 units (Right Angle)" },
    { label: "π rad (3.1416 rad)", value: "180.0000 units (Straight Angle)" },
    { label: "2π rad (6.2832 rad)", value: "360.0000 units (Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in radians by 180/π (approximately 57.2957795) to determine the circular mil angle value.",
    math: "\\text{Circular Mil Angle} = \\text{rad} \\times \\frac{180}{\\pi} \\approx \\text{rad} \\times 57.2957795",
    subtext: "Inverse formula: rad = Circular Mil Angle × (π / 180) ≈ Circular Mil Angle × 0.0174533"
  },
  formulaTitle: "Radian to Circular Mil Angle Formula",
  practicalTip: {
    title: "Pi Factor Simplification",
    text: "When converting angles given in multiples of π (such as π/4 or 2π/3), simply substitute 180 in place of π. For example, 2π/3 radians becomes 2 × 180 / 3 = 120 circular mil angle units."
  },
  expertNote: {
    title: "Area vs Angular Distinction",
    text: "While a 'circular mil' (cmil) is traditionally a unit of area equal to the area of a circle with a diameter of one-thousandth of an inch (10⁻⁶ in²), the 'circular mil angle' is an angular coordinate subdivision used in motor stator slot pitch and rotary coil indexing."
  },
  examples: {
    title: "Step-by-Step rad to Circular Mil Angle Worked Examples",
    items: [
      {
        title: "Example 1: Converting a Known Arc Angle (π/4 rad)",
        subtitle: "Convert an angle of π/4 radians into circular mil angle units.",
        steps: [
          "State the angle: θ = π/4 rad.",
          "Apply the formula: Circular Mil Angle = (π/4) × (180 / π).",
          "Cancel π: 180 / 4 = 45.",
          "Final Result: π/4 radians equals exactly 45 circular mil angle units."
        ]
      },
      {
        title: "Example 2: Armature Winding Pitch Displacement",
        subtitle: "A motor coil winder rotates through 0.75 radians. Express this angular increment.",
        steps: [
          "Identify the angle in radians: θ = 0.75 rad.",
          "Multiply by 180/π: 0.75 × 57.2957795 ≈ 42.9718.",
          "Final Result: 0.75 radians equals approximately 42.97 circular mil angle units."
        ]
      },
      {
        title: "Example 3: Optical Rotary Encoder Position",
        subtitle: "An encoder reads a cumulative shaft rotation of 3.20 radians. Convert this to circular mil angle units.",
        steps: [
          "State the shaft rotation: 3.20 rad.",
          "Multiply by 57.2957795: 3.20 × 57.2957795 ≈ 183.3465.",
          "Final Result: 3.20 radians corresponds to approximately 183.35 circular mil angle units."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Circular Mil Angle Reference Table",
    headers: ["Radians (rad)", "Circular Mil Angle", "Gradians (grad)", "Turns (rev)"],
    rows: [
      { fromVal: "0.10 rad", toVal: "5.73 units", extra: "6.37 grad", extra2: "0.0159 rev" },
      { fromVal: "0.50 rad", toVal: "28.65 units", extra: "31.83 grad", extra2: "0.0796 rev" },
      { fromVal: "π/4 rad (~0.785 rad)", toVal: "45.00 units", extra: "50.00 grad", extra2: "0.1250 rev" },
      { fromVal: "1.00 rad", toVal: "57.30 units", extra: "63.66 grad", extra2: "0.1592 rev" },
      { fromVal: "π/2 rad (~1.571 rad)", toVal: "90.00 units", extra: "100.00 grad", extra2: "0.2500 rev" },
      { fromVal: "2.00 rad", toVal: "114.59 units", extra: "127.32 grad", extra2: "0.3183 rev" },
      { fromVal: "3π/4 rad (~2.356 rad)", toVal: "135.00 units", extra: "150.00 grad", extra2: "0.3750 rev" },
      { fromVal: "π rad (~3.142 rad)", toVal: "180.00 units", extra: "200.00 grad", extra2: "0.5000 rev" },
      { fromVal: "4.00 rad", toVal: "229.18 units", extra: "254.65 grad", extra2: "0.6366 rev" },
      { fromVal: "2π rad (~6.283 rad)", toVal: "360.00 units", extra: "400.00 grad", extra2: "1.0000 rev" }
    ]
  },
  applications: {
    title: "Practical Applications of Radian to Circular Mil Angle Conversions",
    items: [
      {
        title: "Electric Motor Stator & Rotor Coil Winding",
        text: "Translating trigonometric flux angle formulas in radians into circular stator coil pitch and slot indexing positions."
      },
      {
        title: "Precision Rotary Actuators & Stepper Motors",
        text: "Converting computer-generated kinematic trajectories into step subdivisions on circular rotary index tables."
      },
      {
        title: "Optical Slit & Aperture Alignment",
        text: "Calibrating polarizing prism rotation mounts and diffraction grating angle adjusters from analytical laser wave radians."
      },
      {
        title: "Robotic Joint Kinematic Calibration",
        text: "Translating inverse kinematic forward-vector solutions into angular servo position registers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Circular Mil Angle Conversions",
    items: [
      "Confusing circular mil area (area of a 0.001-inch wire) with circular mil angular coordinates.",
      "Inverting the conversion formula, multiplying by π/180 instead of 180/π.",
      "Omitting the factor of π when converting fractional radian expressions (e.g., mistaking π/2 for 0.5 radians).",
      "Assuming the unit divides a circle into 6,400 parts (which applies to military NATO mils, not circular mil angular coordinates)."
    ]
  },
  faqs: [
    {
      question: "How many circular mil angle units are in 1 radian?",
      answer: "There are approximately 57.29578 circular mil angle units in 1 radian (exactly 180 / π)."
    },
    {
      question: "How many radians are in 1 circular mil angle unit?",
      answer: "There are approximately 0.01745329 radians in 1 circular mil angle unit (exactly π / 180 radians)."
    },
    {
      question: "What is the formula to convert radians to circular mil angle units?",
      answer: "The formula is: Circular Mil Angle = Radians × (180 / π) ≈ Radians × 57.29578."
    },
    {
      question: "How many circular mil angle units are in a full circle?",
      answer: "There are exactly 360 circular mil angle units in a complete circle (2π radians)."
    },
    {
      question: "How do I convert π radians to circular mil angle units?",
      answer: "Multiply π by 180/π to get exactly 180 circular mil angle units."
    },
    {
      question: "Is this the same as military mils?",
      answer: "No. Military mils divide a circle into 6,400 mils (NATO standard) or 6,000 mils (Russian standard), whereas this circular mil angle unit divides a circle into 360 parts."
    },
    {
      question: "What is a right angle in this conversion?",
      answer: "A right angle is π/2 radians (~1.5708 rad), which equals exactly 90 circular mil angle units."
    },
    {
      question: "Why is 57.2958 degrees equal to 1 radian?",
      answer: "Because a full circle contains 360 degrees and 2π radians. Dividing 360 by 2π (or 180 by π) yields 57.2957795."
    }
  ],
  relatedList: [
    { label: "Radian to Grad", from: "radian", to: "grad-angle" },
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "IEEE Standard 100: Authoritative Dictionary of IEEE Standards Terms.",
    "ISO 80000-3: Quantities and units — Part 3: Space and time."
  ]
};
