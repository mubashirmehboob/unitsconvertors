import { CustomArticleData } from "./types";

export const gradianToMilAngle: CustomArticleData = {
  fromUnitId: "gradian",
  toUnitId: "mil-angle",
  seoTitle: "Gradian to Mil (Angle) Converter (grad to mil) | UnitsConvertors.com",
  metaDescription: "Convert gradians to angular mils (grad to mil / NATO mil) with exact mathematical accuracy. Explore the 1-to-16 ratio, artillery formulas, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/angle/gradian-to-mil-angle",
  h1: "Gradian to Mil (Angle) Converter",
  introduction: [
    "The gradian (grad, or gon) and the angular mil (mil) are two specialized angular units extensively utilized in continental European geodetic surveying, military artillery ballistics, and tactical defense mapping. While the gradian is a centesimal metric unit dividing a circular rotation into 400 grads (100 grads per right angle), the military mil is an angular subdivision designed for rapid field range estimation and artillery gun laying.",
    "Under the international NATO standard, a full circle is divided into exactly 6,400 mils. Because a full circle also contains exactly 400 gradians, the conversion ratio between them is an exact, clean integer: 6,400 / 400 = 16. Therefore, exactly sixteen mils constitute one gradian.",
    "To convert gradians to angular mils, simply multiply the gradian value by 16. Inversely, to convert from mils to gradians, divide by 16 (or multiply by 0.0625). This technical reference details the military ballistics derivations, practical rangefinding examples, and a complete conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert gradians to mils, multiply the gradian value by 16. For example, 10 gradians equals exactly 160 mils, and 100 gradians (a right angle) equals exactly 1,600 mils.",
    formulaDisplay: "Mils (mil) = Gradians × 16",
    subtext: "1 Gradian = 16 Mils; 1 Mil = 0.0625 Gradians (1/16 grad); 400 grad = 6,400 mils."
  },
  aboutSourceUnit: {
    title: "Understanding the Gradian (grad / gon)",
    text: "The gradian (symbol: grad or gon, ISO 80000-3) is a centesimal metric unit of angular measurement introduced during the French Revolution. Standardized on decimal multiples, the gradian divides a quadrant into 100 grads, a straight line into 200 grads, and a full circle into 400 grads. It remains the legal cadastral surveying standard in France, Germany, Switzerland, and many continental European mapping agencies."
  },
  aboutTargetUnit: {
    title: "Understanding the Angular Mil (mil)",
    text: "The angular mil (symbol: mil) is a specialized unit of angle used by military forces worldwide for artillery fire direction, mortar aiming, and optical reticle range estimation. Derived from the milliradian (where 1 mrad subtends roughly 1 meter at a distance of 1,000 meters), the NATO standard rounds the true mathematical circle (2,000π ≈ 6,283.185 mrad) to exactly 6,400 mils per circle to facilitate clock-like binary division."
  },
  relationship: "A full circle contains exactly 400 gradians and 6,400 NATO military mils. Dividing 6,400 by 400 gives exactly 16 mils per gradian. Inversely, 1 mil equals 1/16 of a gradian (exactly 0.0625 grad). A 100-grad right angle contains exactly 1,600 mils.",
  relationshipTitle: "Gradian to Mil Exact Integer Ratio",
  relationshipItems: [
    { label: "1 grad", value: "16 mils" },
    { label: "5 grad", value: "80 mils" },
    { label: "10 grad", value: "160 mils" },
    { label: "25 grad", value: "400 mils" },
    { label: "50 grad", value: "800 mils" },
    { label: "100 grad", value: "1,600 mils (Right Angle)" },
    { label: "200 grad", value: "3,200 mils (Straight Line)" },
    { label: "400 grad", value: "6,400 mils (Full Circle)" }
  ],
  formula: {
    text: "Multiply the angle in gradians by 16 to obtain mils.",
    math: "\\text{Mils (mil)} = \\text{grad} \\times 16",
    subtext: "Inverse formula: grad = mils / 16 = mils × 0.0625"
  },
  formulaTitle: "Gradian to Mil (Angle) Conversion Formula",
  practicalTip: {
    title: "The 1:16 Multiplication Rule",
    text: "Because the factor is exactly 16, multiplying is straightforward: double the gradian value four times (×2, ×2, ×2, ×2). For example, 15 grads: 30 -> 60 -> 120 -> 240 mils."
  },
  expertNote: {
    title: "NATO (6400) vs Warsaw Pact (6000) Mil Standards",
    text: "The 1:16 ratio applies strictly to the NATO standard of 6,400 mils per circle. The former Soviet/Warsaw Pact standard used 6,000 mils per circle (1 grad = 15 mils). Always verify which military doctrine applies when analyzing legacy defense datasets."
  },
  examples: {
    title: "Step-by-Step grad to mil Worked Examples",
    items: [
      {
        title: "Example 1: Tactical Artillery Quadrant Elevation",
        subtitle: "A French army artillery fire-control computer outputs a barrel quadrant elevation of 45.0 grads. Convert this elevation into NATO mils.",
        steps: [
          "State the elevation in gradians: θ = 45.0 grad.",
          "Apply the conversion formula: Mils = 45.0 × 16.",
          "Calculate: 45.0 × 16 = 720.",
          "Final Result: 45.0 grads equals exactly 720 mils."
        ]
      },
      {
        title: "Example 2: Observation Post Azimuth Bearing",
        subtitle: "A forward observer using a European metric compass records an enemy bunker azimuth of 135.5 grads. Express this in mils.",
        steps: [
          "Identify the bearing: 135.5 grad.",
          "Multiply by 16: 135.5 × 16 = 2,168.",
          "Final Result: 135.5 grads corresponds to exactly 2,168 mils."
        ]
      },
      {
        title: "Example 3: Mortar Trajectory Deflection Correction",
        subtitle: "A wind drift correction requires an adjustment of 1.25 grads. Find the correction in mils.",
        steps: [
          "State the correction: 1.25 grad.",
          "Multiply by 16: 1.25 × 16 = 20.",
          "Final Result: 1.25 grads equals exactly 20 mils."
        ]
      }
    ]
  },
  table: {
    title: "Gradian to Mil Conversion Reference Table",
    headers: ["Gradians (grad)", "Mils (NATO mil)", "Degrees (°)", "Radians (rad)"],
    rows: [
      { fromVal: "1 grad", toVal: "16 mil", extra: "0.90°", extra2: "0.0157 rad" },
      { fromVal: "2 grad", toVal: "32 mil", extra: "1.80°", extra2: "0.0314 rad" },
      { fromVal: "5 grad", toVal: "80 mil", extra: "4.50°", extra2: "0.0785 rad" },
      { fromVal: "10 grad", toVal: "160 mil", extra: "9.00°", extra2: "0.1571 rad" },
      { fromVal: "20 grad", toVal: "320 mil", extra: "18.00°", extra2: "0.3142 rad" },
      { fromVal: "25 grad", toVal: "400 mil", extra: "22.50°", extra2: "0.3927 rad" },
      { fromVal: "50 grad", toVal: "800 mil", extra: "45.00°", extra2: "0.7854 rad" },
      { fromVal: "100 grad", toVal: "1,600 mil", extra: "90.00°", extra2: "1.5708 rad" },
      { fromVal: "200 grad", toVal: "3,200 mil", extra: "180.00°", extra2: "3.1416 rad" },
      { fromVal: "400 grad", toVal: "6,400 mil", extra: "360.00°", extra2: "6.2832 rad" }
    ]
  },
  applications: {
    title: "Defense & Geodetic Applications of grad to mil",
    items: [
      {
        title: "Artillery Fire Direction & Gun Laying",
        text: "Translating topographic survey benchmarks established in grads/gons into artillery sight reticle bearings formatted in NATO mils."
      },
      {
        title: "Military Compass & Forward Observer Bearings",
        text: "Converting optical sighting azimuths between European metric compass dials (400 grads) and military lensatic compasses (6,400 mils)."
      },
      {
        title: "Direct-Fire Reticle Rangefinding (Mil-Dot)",
        text: "Calculating target distances using the mil relation formula (Width in meters × 1,000 / Mils = Range in meters) from theodolite angular measurements."
      },
      {
        title: "Tactical Defense GIS & Joint Operations",
        text: "Interfacing French and European military topographic maps with NATO STANAG standard digital battle management software."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Gradian to Mil Conversions",
    items: [
      "Confusing NATO mils (6,400 per circle, factor 16) with Warsaw Pact mils (6,000 per circle, factor 15) or Swedish streck (6,300 per circle).",
      "Dividing by 16 instead of multiplying when converting from gradians to mils.",
      "Confusing angular mils with linear mils (1/1000th of an inch, used in wire and sheet metal thickness).",
      "Assuming 1 mil equals 1 gradian (1 gradian is 16 times larger than 1 mil)."
    ]
  },
  faqs: [
    {
      question: "How many mils are in 1 gradian?",
      answer: "There are exactly 16 NATO military mils in 1 gradian."
    },
    {
      question: "How many gradians are in 1 mil?",
      answer: "There are exactly 0.0625 gradians in 1 mil (1/16 grad)."
    },
    {
      question: "What is the formula to convert gradians to mils?",
      answer: "The formula is: Mils = Gradians × 16."
    },
    {
      question: "How many mils are in a right angle?",
      answer: "A right angle is 100 gradians (90°), which equals exactly 100 × 16 = 1,600 mils."
    },
    {
      question: "How many mils are in a full circle?",
      answer: "Under the NATO military standard, a full circle contains exactly 6,400 mils (which equals 400 gradians or 360 degrees)."
    },
    {
      question: "Why does 1 gradian equal exactly 16 mils?",
      answer: "Because 1 full circle is defined as 6,400 mils and 400 gradians. Dividing 6,400 by 400 yields exactly 16."
    },
    {
      question: "How do I convert 50 gradians to mils?",
      answer: "Multiply 50 by 16 to get exactly 800 mils (which corresponds to 45 degrees)."
    },
    {
      question: "What is the difference between a true milliradian and a NATO mil?",
      answer: "A true mathematical circle contains 2,000π ≈ 6,283.185 milliradians. NATO rounded this to 6,400 mils for convenient binary division (divisible by 2, 4, 8, 16, 32, 64)."
    }
  ],
  relatedList: [
    { label: "Gradian to Degree", from: "gradian", to: "degree" },
    { label: "Gradian to Radian", from: "gradian", to: "radian" },
    { label: "Mil (Angle) to Gradian", from: "mil-angle", to: "gradian" },
    { label: "Gradian to Arcminute", from: "gradian", to: "arcminute" }
  ],
  references: [
    "NATO STANAG 4119: Adoption of a Standard Artillery Cross-Section and Mil.",
    "US Army Field Manual FM 3-25.26: Map Reading and Land Navigation.",
    "ISO 80000-3: Quantities and units — Part 3: Space and time."
  ]
};
