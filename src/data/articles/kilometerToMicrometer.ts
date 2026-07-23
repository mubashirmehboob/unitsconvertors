import { CustomArticleData } from "./types";

export const kilometerToMicrometer: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "micrometer",
  seoTitle: "Kilometer to Micrometer Converter | km to µm",
  metaDescription: "Convert kilometers to micrometers (km to µm) with absolute precision. Learn the official decimal multipliers, step-by-step math, tables, and FAQs.",
  h1: "Kilometer to Micrometer Converter",
  introduction: [
    "What links macroscopic geographic scales with microscopic, high-precision engineering? Converting kilometers (km) to micrometers (µm) represents a transition of nine orders of magnitude. This calculation is essential in advanced fiber-optic layout design, cleanroom semiconductor wafer mapping, and geological particulate tracking.",
    "This reference guide provides a highly detailed explanation of the kilometer-to-micrometer relationship. It outlines the official conversion equations, step-by-step arithmetic examples, and standard pitfalls to avoid during technical drafting."
  ],
  quickAnswer: {
    text: "One kilometer contains exactly 1,000,000,000 micrometers (one billion micrometers). This exact relationship is established because one kilometer contains 1,000 meters, and each meter is defined as exactly 1,000,000 micrometers.",
    formulaDisplay: "1 km = 1,000,000,000 µm",
    subtext: "To change kilometers to micrometers, multiply the value by one billion (1,000,000,000), or shift the decimal point nine places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is an internationally accepted SI derived unit of length. Symbolized by 'km', it represents longer spans such as geographic boundaries, flight corridors, and transport routes. One kilometer is defined as exactly one thousand meters."
  },
  aboutTargetUnit: {
    title: "Understanding the Micrometer (µm)",
    text: "The micrometer, historically known as the micron and symbolized by 'µm', is an SI unit of length equal to one-millionth of a meter. It is standard for measuring micro-electronics, cellular structures, thin-film layers, and fine airborne dust particles."
  },
  relationship: "The kilometer is a decimal multiple of the meter, and the micrometer is a decimal submultiple. Combined, their scale transition factor is calculated as 1,000 × 1,000,000 = 1,000,000,000.",
  relationshipItems: [
    { label: "Kilometers to Micrometers", value: "1 km = 1,000,000,000 µm" },
    { label: "Micrometers to Kilometers", value: "1 µm = 0.000000001 km" }
  ],
  formula: {
    text: "To convert kilometers to micrometers, multiply your kilometer value by the decimal scale constant of 1,000,000,000.",
    math: "Micrometers (µm) = Kilometers (km) × 1,000,000,000",
    subtext: "Due to the size of this multiplier, scientific notation is often preferred to keep engineering reports readable."
  },
  examples: {
    title: "Precision Calculation Examples",
    items: [
      {
        title: "Example 1: Splicing Precision in Fiber Optic Lines",
        subtitle: "Convert a 0.05-kilometer section of optical cable into micrometers.",
        steps: [
          "Identify the starting distance: 0.05 kilometers.",
          "Apply the formula: Multiply 0.05 by 1,000,000,000.",
          "Calculate the product: 0.05 × 1,000,000,000 = 50,000,000.",
          "State the final result: 0.05 kilometers is exactly equal to 50,000,000 micrometers."
        ]
      },
      {
        title: "Example 2: Particle Dispersion Scale",
        subtitle: "Convert a localized plume corridor of 0.0035 kilometers to micrometers.",
        steps: [
          "Identify the starting distance: 0.0035 kilometers.",
          "Apply the formula: Multiply 0.0035 by 1,000,000,000.",
          "Calculate the product: 0.0035 × 1,000,000,000 = 3,500,000.",
          "State the final result: 0.0035 kilometers is equivalent to 3,500,000 micrometers."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Micrometer Conversion Reference",
    headers: ["Kilometers (km)", "Micrometers (µm)", "Scientific Notation"],
    rows: [
      { fromVal: "0.0001", toVal: "1,000,000", extra: "1 × 10⁶ µm" },
      { fromVal: "0.001", toVal: "10,000,000", extra: "1 × 10⁷ µm" },
      { fromVal: "0.01", toVal: "100,000,000", extra: "1 × 10⁸ µm" },
      { fromVal: "0.1", toVal: "1,000,000,000", extra: "1 × 10⁹ µm" },
      { fromVal: "0.5", toVal: "5,000,000,000", extra: "5 × 10⁹ µm" },
      { fromVal: "1", toVal: "10,000,000,000", extra: "1 × 10¹⁰ µm" }
    ]
  },
  applications: {
    title: "Advanced Applications",
    items: [
      {
        title: "Fiber-Optic Core Alignment",
        text: "Long-haul fiber paths are mapped across several kilometers, but the individual glass cores (only 9 to 50 micrometers wide) must be aligned with extreme precision during installation."
      },
      {
        title: "Semiconductor Semiconductor Fabrication",
        text: "Cleanroom layouts measure stepper stage distances in kilometers over lifetime operation, but exposure steps and lithography alignments are tracked down to the micrometer level."
      },
      {
        title: "Geology & Particulate Modeling",
        text: "Ecology research tracks volcanic ash cloud drift across kilometers while analyzing the chemical structures and health impacts of individual micro-particles."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Decimal placement error: Shifting the decimal point by eight spaces instead of nine will result in a 90% calculation error. Always count zeros carefully when multiplying.",
      "Confounding symbols: Make sure not to mix up the symbol for micrometer (µm) with nanometer (nm), which can cause a thousand-fold calibration error.",
      "Early rounding issues: Working with fractional kilometers requires maintaining full precision in scientific calculations before expressing the final micrometer results."
    ]
  },
  faqs: [
    {
      question: "How many micrometers are in one kilometer?",
      answer: "One kilometer contains exactly 1,000,000,000 micrometers (one billion micrometers)."
    },
    {
      question: "What is the formula to convert km to µm?",
      answer: "The formula is: Micrometers (µm) = Kilometers (km) × 1,000,000,000. Multiply the kilometer value by one billion."
    },
    {
      question: "How do I calculate km to micrometers manually?",
      answer: "Multiply the kilometer number by 1,000,000,000. For manual calculations, shift the decimal point nine places to the right."
    },
    {
      question: "What is the standard abbreviation for the micrometer?",
      answer: "The official SI symbol is 'µm', utilizing the Greek letter mu (µ) followed by lowercase 'm'."
    },
    {
      question: "Are a micrometer and a micron the same thing?",
      answer: "Yes. The term 'micron' is an older name for the micrometer. While still common in engineering, the official SI term is micrometer."
    },
    {
      question: "How many micrometers is 0.01 kilometers?",
      answer: "0.01 kilometers is equivalent to exactly 10,000,000 micrometers (ten million micrometers)."
    },
    {
      question: "Does this conversion contain any fractional parts?",
      answer: "No. Because both units belong to the base-10 metric system, the conversion factor is exactly one billion, without any fractions or rounding errors."
    },
    {
      question: "Why do engineers convert kilometers to micrometers?",
      answer: "It allows high-precision industries to calibrate macro-scale stage travel with microscopic component sizes."
    }
  ],
  relatedList: [
    { label: "Micrometer to Kilometer", from: "micrometer", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Kilometer to Millimeter", from: "kilometer", to: "millimeter" },
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
    "International Standard ISO 80000-3 - Quantities and units - Space and time.",
    "BIPM SI Brochure - Rules for SI units and prefixes.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units."
  ]
};
