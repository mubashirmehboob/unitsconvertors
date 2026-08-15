import { CustomArticleData } from "./types";

export const spatToSteradianArticle: CustomArticleData = {
  fromUnitId: "spat",
  toUnitId: "steradian",
  seoTitle: "Spat to Steradian Converter (sp to sr) - UnitsConvertors",
  metaDescription: "Convert spats to steradians (sp to sr) accurately. Learn the solid angle formula (sr = sp × 4π), calculation steps, conversion tables, and FAQs.",
  h1: "Spat to Steradian Converter",
  introduction: [
    "Converting spats (sp) to steradians (sr) translates spherical fractional angles into standard SI units of solid angle. The spat describes a complete spherical solid angle, while the steradian is the International System of Units (SI) derived unit used across optical physics, radiometry, and geometry.",
    "Because the surface area of a sphere of radius r is 4πr², one complete sphere subtends exactly 4π steradians (approximately 12.56637 sr). Converting spats to steradians requires multiplying the spat value by 4π.",
    "This reference explains the mathematical definition connecting spats to steradians, demonstrates step-by-step conversion calculations, provides a numerical reference table, and answers common questions regarding solid-angle measurements."
  ],
  quickAnswer: {
    text: "To convert spats (sp) to steradians (sr), multiply the spat value by 4π (approximately 12.566371). For example, 1 spat equals approximately 12.56637 steradians (1 × 4π = 12.56637 sr).",
    formulaDisplay: "Steradians (sr) = Spats (sp) × 4π",
    subtext: "1 sp = 4π sr ≈ 12.566370614 sr (1 sr ≈ 0.07957747 sp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (sp) is a unit of solid angle equal to the solid angle of a complete sphere, or 4π steradians. It is used as a simple way to express fractions or multiples of full spherical coverage."
  },
  aboutTargetUnit: {
    title: "Understanding the Steradian (sr)",
    text: "The steradian (sr) is the SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a surface patch with an area equal to r². It forms the baseline for radiometric and photometric quantities such as radiant intensity (W/sr) and luminous intensity (candela = lumen/sr)."
  },
  relationship: "One spat represents a full sphere and equals exactly 4π steradians (≈ 12.566370614 sr). A hemisphere (0.5 sp) equals exactly 2π steradians (≈ 6.2831853 sr).",
  relationshipTitle: "Spat to Steradian Scaling",
  relationshipItems: [
    { label: "0.25 sp (1/4 Sphere)", value: "= π sr (≈ 3.14159 sr)" },
    { label: "0.50 sp (Hemisphere)", value: "= 2π sr (≈ 6.28319 sr)" },
    { label: "0.75 sp (3/4 Sphere)", value: "= 3π sr (≈ 9.42478 sr)" },
    { label: "1.00 sp (Full Sphere)", value: "= 4π sr (≈ 12.56637 sr)" }
  ],
  formula: {
    text: "Multiply the solid angle in spats by 4π (approximately 12.566370614) to obtain steradians.",
    math: "\\text{sr} = \\text{sp} \\times 4\\pi \\approx \\text{sp} \\times 12.566370614",
    subtext: "Where π ≈ 3.141592653589793."
  },
  practicalTip: {
    title: "Omnidirectional Radiation Integration",
    text: "An isotropic source radiating uniformly in all directions emits across a total solid angle of 1 spat (4π steradians). Multiplying intensity per steradian by 4π gives total emitted flux."
  },
  expertNote: {
    title: "Definition from Spherical Area",
    text: "Because solid angle Ω = A / r², and the surface area of a full sphere is A = 4πr², the full spherical solid angle is Ω = 4πr² / r² = 4π steradians (1 spat)."
  },
  examples: {
    title: "Step-by-Step Spat to Steradian Calculations",
    items: [
      {
        title: "Example 1: Converting 1 Spat to Steradians",
        subtitle: "Convert 1 full sphere (1 spat) to SI steradians.",
        steps: [
          "Identify solid angle: 1.0 sp.",
          "Apply conversion formula: sr = 1.0 × 4π.",
          "Calculate: 1.0 × 12.566370614 ≈ 12.56637 sr.",
          "Result: 1 spat equals exactly 4π steradians (approximately 12.56637 sr)."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (0.5 sp)",
        subtitle: "Convert an unobstructed sky hemisphere (0.5 sp) to steradians.",
        steps: [
          "Identify solid angle: 0.5 sp.",
          "Apply conversion formula: sr = 0.5 × 4π.",
          "Calculate: 0.5 × 4π = 2π ≈ 6.2831853 sr.",
          "Result: 0.5 spat equals exactly 2π steradians (approximately 6.28319 sr)."
        ]
      },
      {
        title: "Example 3: Fractional Celestial Sector (0.05 sp)",
        subtitle: "Convert 0.05 spat (5% of a sphere) into steradians.",
        steps: [
          "Identify solid angle: 0.05 sp.",
          "Apply conversion formula: sr = 0.05 × 4π.",
          "Calculate: 0.05 × 12.566370614 ≈ 0.628319 sr.",
          "Result: 0.05 spat equals approximately 0.6283 steradians (or π / 5 sr)."
        ]
      }
    ]
  },
  table: {
    title: "Spat to Steradian Conversion Reference Table",
    headers: ["Spats (sp)", "Steradians (sr)", "Exact Value (sr)", "Sphere Fraction"],
    rows: [
      { fromVal: "0.01 sp", toVal: "0.125664 sr", extra: "π / 25 sr", extra2: "1% of sphere" },
      { fromVal: "0.05 sp", toVal: "0.628319 sr", extra: "π / 5 sr", extra2: "5% of sphere" },
      { fromVal: "0.10 sp", toVal: "1.256637 sr", extra: "2π / 5 sr", extra2: "10% of sphere" },
      { fromVal: "0.25 sp", toVal: "3.141593 sr", extra: "π sr", extra2: "One quadrant (25%)" },
      { fromVal: "0.50 sp", toVal: "6.283185 sr", extra: "2π sr", extra2: "Hemisphere (50%)" },
      { fromVal: "0.75 sp", toVal: "9.424778 sr", extra: "3π sr", extra2: "Three-quarters of sphere (75%)" },
      { fromVal: "1.00 sp", toVal: "12.566371 sr", extra: "4π sr", extra2: "Full sphere (100%)" },
      { fromVal: "2.00 sp", toVal: "25.132741 sr", extra: "8π sr", extra2: "Two complete spheres" }
    ]
  },
  applications: {
    title: "Applications of Spat to Steradian Conversion",
    items: [
      {
        title: "Radiometry & Photometry",
        text: "Converting total spherical emissions into steradians for flux, intensity, and radiance calculations."
      },
      {
        title: "Optical Field Geometry",
        text: "Relating spherical angular fractions to standard SI solid-angle metrics."
      },
      {
        title: "Detector Coverage Analysis",
        text: "Evaluating sensor angular coverage in steradians from fractional spherical values."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Converting sp to sr",
    items: [
      "Dividing by 4π instead of multiplying: To convert spats to steradians, multiply by 4π. Division by 4π is used for the reverse conversion from steradians to spats.",
      "Using 2π instead of 4π for 1 spat: 1 spat represents a full sphere (4π sr), whereas 2π sr represents a hemisphere.",
      "Historical unit confusion: The name 'spat' was historically proposed as an astronomical distance unit (10¹² m); in modern solid-angle geometry, it strictly denotes a full sphere (4π sr)."
    ]
  },
  faqs: [
    {
      question: "How many steradians are in 1 spat?",
      answer: "There are exactly 4π steradians in 1 spat, which equals approximately 12.566370614 steradians."
    },
    {
      question: "What is the formula to convert spats to steradians?",
      answer: "The formula is: sr = sp × 4π ≈ sp × 12.566370614."
    },
    {
      question: "How many steradians is 0.5 spat?",
      answer: "0.5 spat equals 2π steradians, which is approximately 6.2831853 steradians (representing a hemisphere)."
    },
    {
      question: "What does 1 spat represent geometrically?",
      answer: "1 spat represents the total solid angle of a complete sphere, enclosing the full 3D angular space surrounding a central point."
    },
    {
      question: "Why is 1 spat equal to 4π steradians?",
      answer: "Because a steradian is defined as surface area divided by radius squared (A/r²), and a complete sphere has a surface area of 4πr². Thus, 4πr² / r² = 4π steradians."
    },
    {
      question: "How do I convert steradians back to spats?",
      answer: "To convert steradians to spats, divide the steradian value by 4π (sp = sr ÷ 4π)."
    },
    {
      question: "How many steradians is 0.25 spat?",
      answer: "0.25 spat equals exactly π steradians (approximately 3.14159265 sr), representing one quarter of a sphere."
    },
    {
      question: "Is the spat an official SI unit?",
      answer: "No. The spat is a non-SI unit of solid angle, whereas the steradian is the official SI unit."
    }
  ],
  relatedList: [
    { label: "Steradian to Spat", from: "steradian", to: "spat" },
    { label: "Spat to Square Degree", from: "spat", to: "square-degree" },
    { label: "Spat to Square Radian", from: "spat", to: "square-radian" },
    { label: "Steradian to Square Degree", from: "steradian", to: "square-degree" }
  ],
  references: [
    "BIPM — SI Brochure (9th Edition), for the definition of the steradian as the SI unit of solid angle",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
