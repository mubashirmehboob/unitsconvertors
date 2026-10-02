import { CustomArticleData } from "./types";

export const radianToGradAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "grad-angle",
  seoTitle: "Radian to Grad Converter (rad to grad) | UnitsConvertors.com",
  metaDescription: "Convert radians to grads (rad to grad / gon) accurately. Learn the exact 200/π ratio, calculus to surveying angle formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/radian-to-grad-angle",
  h1: "Radian to Grad Converter",
  introduction: [
    "The radian (rad) and the grad (also termed the gradian or gon) represent two distinct mathematical approaches to angular measurement. The radian is the natural, dimensionless SI unit of angle, defined by arc length on a unit circle and essential throughout calculus, differential equations, and rotational physics. In contrast, the grad is a decimal metric unit introduced in Revolutionary France to harmonize angular geometry with the base-10 metric system.",
    "A complete circular revolution encompasses exactly 2π radians and 400 grads, making a right angle equal to π/2 radians (approx. 1.570796 rad) or exactly 100 grads. Consequently, the conversion between radians and grads is governed by the exact ratio 200/π.",
    "To convert radians to grads, multiply the radian value by 200/π (approximately 63.661977). This authoritative mathematical reference details the analytical derivations, practical surveying and physics examples, and an extensive angular reference table."
  ],
  quickAnswer: {
    text: "To convert radians to grads, multiply the radian value by 200/π (approximately 63.661977). For example, 1 radian equals approximately 63.66 grads, and π radians equals exactly 200 grads.",
    formulaDisplay: "grad = rad × (200 / π) ≈ rad × 63.661977",
    subtext: "π rad = 200 grad (180°); 1 rad ≈ 63.661977 grad; 1 grad ≈ 0.015708 rad."
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian is the coherent derived unit of plane angle in the International System of Units (SI). Defined as the angle subtended at the center of a circle by an arc whose length equals the circle's radius (θ = s/r), the radian is naturally dimensionless (m/m). It simplifies mathematical analysis because derivatives of trigonometric functions like sin(x) and cos(x) require no arbitrary scaling coefficients only when x is in radians."
  },
  aboutTargetUnit: {
    title: "Understanding the Grad (grad / gon)",
    text: "The grad (symbol: grad or gon, originally grade in French) was established in 1795 as part of the metric reform. Designed to eliminate the ancient Babylonian base-60 degree system, the grad divides a right angle into exactly 100 grads, a straight line into 200 grads, and a full circle into 400 grads. Grads are widely utilized in continental European geodetic surveying, civil land mapping, mining alignment, and electronic total stations."
  },
  relationship: "A full circle equals 2π radians and 400 grads. Therefore, π radians equals exactly 200 grads. One radian equals 200/π ≈ 63.6619772 grads, and 1 grad equals π/200 ≈ 0.015707963 radians.",
  relationshipTitle: "Radian to Grad Proportional Ratio",
  relationshipItems: [
    { label: "0.1 rad", value: "6.3662 grad" },
    { label: "π/4 rad (0.7854 rad)", value: "50.0000 grad (45°)" },
    { label: "1 rad", value: "63.6620 grad" },
    { label: "π/2 rad (1.5708 rad)", value: "100.0000 grad (90°, Right Angle)" },
    { label: "π rad (3.1416 rad)", value: "200.0000 grad (180°, Straight)" },
    { label: "2π rad (6.2832 rad)", value: "400.0000 grad (Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in radians by 200/π (or approximately 63.661977) to determine the angle in grads.",
    math: "\\text{grad} = \\text{rad} \\times \\frac{200}{\\pi} \\approx \\text{rad} \\times 63.66197724",
    subtext: "Inverse formula: rad = grad × (π / 200) ≈ grad × 0.01570796"
  },
  formulaTitle: "Radian to Grad Conversion Formula",
  practicalTip: {
    title: "Exact Pi Substitution Technique",
    text: "When radians are expressed as a fraction of π (such as π/3 or 3π/4), simply replace π with 200. For instance, (3π/4) radians becomes 3 × 200 / 4 = 150 grads instantly, with zero floating-point rounding error."
  },
  expertNote: {
    title: "Nomenclature: Grad vs Gradian vs Gon",
    text: "ISO 80000-3 officially designates this unit as the 'gon'. In English-speaking engineering it is commonly called the 'grad' or 'gradian'. On scientific calculators (Casio, Texas Instruments, HP), the 'GRAD' or 'G' angle mode corresponds exactly to 400 grads per circle."
  },
  examples: {
    title: "Step-by-Step rad to grad Worked Examples",
    items: [
      {
        title: "Example 1: Converting a Unit Circle Angle (π/3 rad)",
        subtitle: "Convert an equilateral triangle internal corner angle of π/3 radians into grads.",
        steps: [
          "State the angle in radians: θ = π/3 rad.",
          "Apply the Pi substitution rule: replace π with 200 grads.",
          "Calculate: 200 / 3 = 66.666667.",
          "Final Result: π/3 radians equals exactly 66.67 grads (66⅔ gon, or 60°)."
        ]
      },
      {
        title: "Example 2: Civil Surveying Theodolite Angle",
        subtitle: "A digital theodolite software module outputs an azimuth of 1.25 radians. Convert this to grads.",
        steps: [
          "State the input angle: θ = 1.25 rad.",
          "Multiply by 200/π: 1.25 × (200 / 3.14159265).",
          "Calculate: 1.25 × 63.66197724 ≈ 79.57747.",
          "Final Result: 1.25 radians corresponds to approximately 79.58 grads."
        ]
      },
      {
        title: "Example 3: Robotics Joint Rotation",
        subtitle: "An industrial robotic arm actuator rotates through 2.50 radians. Express this rotation in grads.",
        steps: [
          "State the rotation: 2.50 rad.",
          "Multiply by 63.661977: 2.50 × 63.661977 ≈ 159.1549.",
          "Final Result: 2.50 radians equals approximately 159.15 grads."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Grad Conversion Reference Table",
    headers: ["Radians (rad)", "Grads (grad / gon)", "Degrees (°)", "Turns (rev)"],
    rows: [
      { fromVal: "0.10 rad", toVal: "6.37 grad", extra: "5.73°", extra2: "0.0159 rev" },
      { fromVal: "π/6 rad (~0.524 rad)", toVal: "33.33 grad", extra: "30.00°", extra2: "0.0833 rev" },
      { fromVal: "π/4 rad (~0.785 rad)", toVal: "50.00 grad", extra: "45.00°", extra2: "0.1250 rev" },
      { fromVal: "1.00 rad", toVal: "63.66 grad", extra: "57.30°", extra2: "0.1592 rev" },
      { fromVal: "π/3 rad (~1.047 rad)", toVal: "66.67 grad", extra: "60.00°", extra2: "0.1667 rev" },
      { fromVal: "π/2 rad (~1.571 rad)", toVal: "100.00 grad", extra: "90.00°", extra2: "0.2500 rev" },
      { fromVal: "2.00 rad", toVal: "127.32 grad", extra: "114.59°", extra2: "0.3183 rev" },
      { fromVal: "3π/4 rad (~2.356 rad)", toVal: "150.00 grad", extra: "135.00°", extra2: "0.3750 rev" },
      { fromVal: "π rad (~3.142 rad)", toVal: "200.00 grad", extra: "180.00°", extra2: "0.5000 rev" },
      { fromVal: "2π rad (~6.283 rad)", toVal: "400.00 grad", extra: "360.00°", extra2: "1.0000 rev" }
    ]
  },
  applications: {
    title: "Practical Applications of Radian to Grad Conversions",
    items: [
      {
        title: "European Land & Cadastral Surveying",
        text: "Converting mathematical trajectory algorithms programmed in radians into total station field theodolite readouts displayed in grads/gons."
      },
      {
        title: "Civil Tunneling & Laser Boring Guidance",
        text: "Translating computer-aided subterranean navigation vectors into centesimal grads to align tunnel boring machines (TBMs)."
      },
      {
        title: "Scientific Calculator Software Modes",
        text: "Ensuring accurate angular translation between calculus functions (RAD mode) and European survey coordinate calculators (GRAD mode)."
      },
      {
        title: "Geodesy & Artillery Gun Laying",
        text: "Harmonizing orbital geodetic satellite coordinates with European military and boundary survey benchmarks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Grad Conversions",
    items: [
      "Confusing grads (400 per circle) with degrees (360 per circle), which creates an 11.1% angular discrepancy.",
      "Accidentally using 180/π (degree factor) instead of 200/π (grad factor).",
      "Setting scientific calculators to DEG mode when calculating gradian functions.",
      "Rounding π prematurely to 3.14, leading to compounding errors in multi-mile survey traverses."
    ]
  },
  faqs: [
    {
      question: "How many grads are in 1 radian?",
      answer: "There are approximately 63.661977 grads in 1 radian (exactly 200 / π grads)."
    },
    {
      question: "How many radians are in 1 grad?",
      answer: "There are approximately 0.01570796 radians in 1 grad (exactly π / 200 radians)."
    },
    {
      question: "What is the formula to convert radians to grads?",
      answer: "The formula is: Grads = Radians × (200 / π) ≈ Radians × 63.661977."
    },
    {
      question: "How many grads are in a full circle?",
      answer: "There are exactly 400 grads (400 gon) in a full circle (2π radians or 360 degrees)."
    },
    {
      question: "What is a right angle in radians and grads?",
      answer: "A right angle is exactly π/2 radians (approx. 1.5708 rad), which equals exactly 100 grads (90 degrees)."
    },
    {
      question: "Is grad the same as gon?",
      answer: "Yes, 'grad' and 'gon' are interchangeable names for the centesimal angle unit equal to 1/400th of a circle."
    },
    {
      question: "How do I convert π radians to grads?",
      answer: "Multiply π by 200/π: the π values cancel out, giving exactly 200 grads (180 degrees)."
    },
    {
      question: "Why do European surveyors use grads instead of degrees?",
      answer: "Because 100 grads per right angle simplifies decimal math (e.g., 100 grads, 1 centigrad, 0.0001 grads) compared to base-60 degrees, arcminutes, and arcseconds."
    }
  ],
  relatedList: [
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" },
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Degree to Radian", from: "degree", to: "radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "National Geodetic Survey (NGS): Geodetic Glossary."
  ]
};
