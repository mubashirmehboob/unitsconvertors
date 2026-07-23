import { CustomArticleData } from "./types";

export const kilometerToMillimeter: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "millimeter",
  seoTitle: "Kilometer to Millimeter | km to mm Converter",
  metaDescription: "Convert kilometers to millimeters (km to mm) easily. Find the conversion math, step-by-step calculations, reference tables, and common errors to avoid.",
  h1: "Kilometer to Millimeter Converter",
  introduction: [
    "Imagine designing a high-speed fiber-optic network stretching across an entire province. Engineers plan the total path length in kilometers, but the individual cable thickness and splicing alignments require precision measured in millimeters. Converting kilometers (km) to millimeters (mm) is a critical task in telecommunications, advanced manufacturing, and geophysics.",
    "This reference guide provides a mathematically exact breakdown of the kilometer-to-millimeter transition. It details the precise scale factor, step-by-step worked examples, and key mistakes to avoid in engineering drafting."
  ],
  quickAnswer: {
    text: "One kilometer contains exactly 1,000,000 millimeters. This relationship is fixed and precise because there are exactly 1,000 meters in a kilometer, and each meter is defined as containing exactly 1,000 millimeters.",
    formulaDisplay: "1 km = 1,000,000 mm",
    subtext: "To convert kilometers to millimeters, multiply your kilometer value by 1,000,000, or shift the decimal point six spaces to the right."
  },
  aboutSourceUnit: {
    title: "About the Kilometer (km)",
    text: "The kilometer is an officially recognized SI derived unit of length. It represents larger physical spaces such as geographical ranges, navigation systems, and municipal boundaries. It is defined as exactly 1,000 meters and is symbolized by 'km'."
  },
  aboutTargetUnit: {
    title: "About the Millimeter (mm)",
    text: "The millimeter is a metric unit of length defined as one-thousandth of a meter. Symbolized by 'mm', it is used in scientific research, mechanical drafting, carpentry, and manufacturing to define precise clearance tolerances."
  },
  relationship: "Because the metric system relies on a base-10 structure, transitioning from larger to smaller units is straightforward. Since a kilometer consists of 1,000 meters and a meter consists of 1,000 millimeters, the direct formula is 1,000 × 1,000 = 1,000,000.",
  relationshipItems: [
    { label: "Kilometers to Millimeters", value: "1 km = 1,000,000 mm" },
    { label: "Millimeters to Kilometers", value: "1 mm = 0.000001 km" }
  ],
  formula: {
    text: "To find millimeters from kilometers, multiply the kilometer measurement by the scaling constant of 1,000,000.",
    math: "Millimeters (mm) = Kilometers (km) × 1,000,000",
    subtext: "Because this is a decimal system conversion, the final value is precise and contains no rounding errors."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Precision Telecommunications Cable Layout",
        subtitle: "Convert 0.12 kilometers of underground conduit into millimeters.",
        steps: [
          "State the starting value: 0.12 kilometers.",
          "Apply the multiplier: Multiply the starting value by 1,000,000.",
          "Complete the multiplication: 0.12 × 1,000,000 = 120,000.",
          "Final result: 0.12 kilometers is exactly equivalent to 120,000 millimeters."
        ]
      },
      {
        title: "Example 2: Geological Fault Slip Range",
        subtitle: "Convert a fault displacement of 0.004 kilometers to millimeters.",
        steps: [
          "State the starting value: 0.004 kilometers.",
          "Apply the multiplier: Multiply 0.004 by 1,000,000.",
          "Complete the arithmetic: 0.004 × 1,000,000 = 4,000.",
          "Final result: 0.004 kilometers is equivalent to exactly 4,000 millimeters."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Millimeter Reference Values",
    headers: ["Kilometers (km)", "Millimeters (mm)", "Scientific Notation"],
    rows: [
      { fromVal: "0.001", toVal: "1,000", extra: "1 × 10³ mm" },
      { fromVal: "0.01", toVal: "10,000", extra: "1 × 10⁴ mm" },
      { fromVal: "0.1", toVal: "100,000", extra: "1 × 10⁵ mm" },
      { fromVal: "0.5", toVal: "500,000", extra: "5 × 10⁵ mm" },
      { fromVal: "1", toVal: "1,000,000", extra: "1 × 10⁶ mm" },
      { fromVal: "2", toVal: "2,000,000", extra: "2 × 10⁶ mm" },
      { fromVal: "5", toVal: "5,000,000", extra: "5 × 10⁶ mm" },
      { fromVal: "10", toVal: "10,000,000", extra: "1 × 10⁷ mm" }
    ]
  },
  applications: {
    title: "Where This Conversion is Used",
    items: [
      {
        title: "Fiber-Optic & Utility Networks",
        text: "Designers mapping pipeline infrastructure use kilometers for overall runs, but use millimeter specifications to verify individual conduit widths and splice points."
      },
      {
        title: "Geology & Tectonics",
        text: "Seismologists track large tectonic plate boundaries in kilometers, but measure annual fault slip rates and localized crustal movements in millimeters."
      },
      {
        title: "Infrastructure & Drafting",
        text: "Rail line blueprints span across several kilometers, but the actual expansion gaps between rails and localized steel tolerances are planned down to the millimeter."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Inaccurate decimal shifting: Shifting the decimal point five spots instead of six results in an error of a factor of ten. Always verify that 1 km equals a full million millimeters.",
      "Early decimal rounding: In high-precision engineering, rounding intermediate metric values too early can cause misalignment in component assemblies.",
      "Misreading unit symbols: Do not mix up the abbreviation for micrometer (µm) with millimeter (mm). This can lead to significant scaling errors."
    ]
  },
  faqs: [
    {
      question: "How many millimeters are in one kilometer?",
      answer: "One kilometer contains exactly 1,000,000 millimeters (one million millimeters). This scale is defined by SI guidelines."
    },
    {
      question: "What is the formula to convert km to mm?",
      answer: "The formula is: Millimeters (mm) = Kilometers (km) × 1,000,000. Multiply your value by one million to complete the conversion."
    },
    {
      question: "How do I calculate km to mm manually?",
      answer: "Multiply your kilometer value by 1,000,000. You can also accomplish this by moving the decimal point six places to the right."
    },
    {
      question: "How many millimeters are in 0.25 kilometers?",
      answer: "0.25 kilometers is equivalent to exactly 250,000 millimeters."
    },
    {
      question: "Are millimeters and kilometers used together?",
      answer: "Yes, especially in mechanical and civil engineering projects where macro-scale layout runs are planned in kilometers but exact physical joints are built in millimeters."
    },
    {
      question: "What is the standard symbol for a millimeter?",
      answer: "The standard lowercase symbol is 'mm', written without any punctuation or capital letters."
    },
    {
      question: "How many millimeters is 1.5 kilometers?",
      answer: "1.5 kilometers equals exactly 1,500,000 millimeters."
    },
    {
      question: "Is this conversion factor exact?",
      answer: "Yes, the conversion factor is absolute and mathematically exact because both units belong to the standard decimal metric system."
    }
  ],
  relatedList: [
    { label: "Millimeter to Kilometer", from: "millimeter", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Kilometer to Micrometer", from: "kilometer", to: "micrometer" },
    { label: "Kilometer to Nanometer", from: "kilometer", to: "nanometer" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Hand", from: "kilometer", to: "hand" },
    { label: "Kilometer to Cubit", from: "kilometer", to: "cubit" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) SI Brochure.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO/IEC 80000 Space and Time Quantities."
  ]
};
