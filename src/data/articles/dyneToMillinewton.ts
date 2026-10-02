import { CustomArticleData } from "./types";

export const dyneToMillinewton: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "millinewton",
  seoTitle: "Dyne to Millinewton Converter (dyn to mN) | UnitsConvertors.com",
  metaDescription: "Convert dynes to millinewtons (dyn to mN) accurately. Learn the exact 100-to-1 CGS to SI force ratio, conversion formula, worked examples, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/force/dyne-to-millinewton",
  h1: "Dyne to Millinewton Converter",
  introduction: [
    "The dyne (dyn) and the millinewton (mN) are two closely aligned metric units designed for measuring delicate, small-magnitude physical forces. The dyne is the traditional centimeter-gram-second (CGS) unit, whereas the millinewton is the standard decimal submultiple of the coherent SI unit, the newton.",
    "Because one newton equals 100,000 dynes (10⁵ dyn) and one millinewton equals one thousandth of a newton (10⁻³ N), the relationship between these two units is straightforward and exact: one millinewton equals exactly one hundred dynes (100 dyn). Conversely, one dyne equals exactly one hundredth of a millinewton (0.01 mN).",
    "To convert from dynes to millinewtons, divide the value in dynes by 100 (or multiply by 0.01). This technical reference provides the physical derivation, clear conversion steps, realistic laboratory examples, and a comprehensive conversion table."
  ],
  quickAnswer: {
    text: "To convert dynes to millinewtons, divide the dyne value by 100 or multiply by 0.01. For example, 750 dynes equals exactly 7.5 mN.",
    formulaDisplay: "mN = dyn / 100 = dyn × 0.01",
    subtext: "1 Millinewton (mN) = 100 Dynes (dyn); 1 Dyne = 0.01 mN."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "Introduced in 1873 by the British Association for the Advancement of Science, the dyne is the base unit of force in the CGS metric system. It is defined as the force required to accelerate a mass of one gram at a rate of one centimeter per second squared (1 dyn = 1 g·cm/s²). Equal to exactly 10⁻⁵ newtons, the dyne has long been a staple in measuring surface tension (dyn/cm or mN/m), capillary action, adhesive peeling forces, and micro-electromechanical contact pressures."
  },
  aboutTargetUnit: {
    title: "Understanding the Millinewton (mN)",
    text: "The millinewton is an official decimal fraction of the newton in the International System of Units (SI). Equal to one-thousandth of a newton (10⁻³ N, or 0.001 N), one millinewton represents the gravitational force exerted on approximately 101.97 milligrams of mass on Earth's surface. Scientists and engineers use millinewtons globally for satellite micro-propulsion ion thrusters, atomic force microscopy (AFM) cantilever deflections, tactile sensor calibration, and micro-fluidic surface tensions."
  },
  relationship: "One millinewton equals exactly 100 dynes. Inversely, one dyne equals exactly 0.01 millinewtons (10⁻² mN). Converting dynes to millinewtons is an exact two-place decimal shift to the left.",
  relationshipTitle: "Dyne to Millinewton Scale Comparison",
  relationshipItems: [
    { label: "1 Dyne (dyn)", value: "0.01 mN" },
    { label: "10 Dynes", value: "0.10 mN" },
    { label: "50 Dynes", value: "0.50 mN" },
    { label: "100 Dynes", value: "1.00 mN" },
    { label: "500 Dynes", value: "5.00 mN" },
    { label: "1,000 Dynes", value: "10.00 mN" },
    { label: "100,000 Dynes", value: "1,000.00 mN (1 N)" }
  ],
  formula: {
    text: "Divide the force in dynes by 100, or multiply by 0.01, to obtain the force in millinewtons.",
    math: "\\text{mN} = \\frac{\\text{dyn}}{100} = \\text{dyn} \\times 0.01",
    subtext: "Inverse formula: dyn = mN × 100"
  },
  formulaTitle: "Dyne to Millinewton Conversion Formula",
  practicalTip: {
    title: "Surface Tension Equivalence Note",
    text: "In surface chemistry, surface tension is often stated in dyn/cm. Because 1 dyn = 0.01 mN and 1 cm = 0.01 m, the units cancel out: 1 dyn/cm is numerically identical to 1 mN/m (e.g., water's surface tension is 72.8 dyn/cm = 72.8 mN/m at 20°C)."
  },
  expertNote: {
    title: "Laboratory Modernization",
    text: "Modern digital force gauges, tensiometers, and microbalances universally report values in millinewtons (mN) according to ISO and ASTM standards. When updating legacy laboratory protocols from CGS dynes, simply shifting the decimal point two places to the left ensures full SI compliance."
  },
  examples: {
    title: "Step-by-Step dyn to mN Worked Examples",
    items: [
      {
        title: "Example 1: Liquid Droplet Surface Tension Force",
        subtitle: "A ring tensiometer measures a detachment pull force of 225 dynes on an experimental surfactant. Convert this to millinewtons.",
        steps: [
          "State the initial force in dynes: F = 225 dyn.",
          "Apply the conversion formula: mN = dyn / 100.",
          "Calculate: 225 / 100 = 2.25.",
          "Final Result: 225 dynes equals exactly 2.25 mN."
        ]
      },
      {
        title: "Example 2: CubeSat Plasma Thruster Thrust",
        subtitle: "A miniature satellite cold-gas thruster generates 4,800 dynes of impulse thrust. Express this in millinewtons.",
        steps: [
          "Identify the thrust value: 4,800 dyn.",
          "Multiply by 0.01: 4,800 × 0.01 = 48.0.",
          "Final Result: 4,800 dynes corresponds to exactly 48 mN."
        ]
      },
      {
        title: "Example 3: Insect Locomotion Adhesion",
        subtitle: "A biomechanical study records a beetle footpad adhesive force of 85 dynes. Find the equivalent in millinewtons.",
        steps: [
          "Identify the measured force: 85 dyn.",
          "Divide by 100: 85 / 100 = 0.85.",
          "Final Result: 85 dynes is equal to exactly 0.85 mN."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Millinewton Conversion Table",
    headers: ["Dynes (dyn)", "Millinewtons (mN)", "Micronewtons (µN)", "Grams-force (gf)"],
    rows: [
      { fromVal: "10 dyn", toVal: "0.10 mN", extra: "100 µN", extra2: "0.0102 gf" },
      { fromVal: "25 dyn", toVal: "0.25 mN", extra: "250 µN", extra2: "0.0255 gf" },
      { fromVal: "50 dyn", toVal: "0.50 mN", extra: "500 µN", extra2: "0.0510 gf" },
      { fromVal: "100 dyn", toVal: "1.00 mN", extra: "1,000 µN", extra2: "0.1020 gf" },
      { fromVal: "250 dyn", toVal: "2.50 mN", extra: "2,500 µN", extra2: "0.2549 gf" },
      { fromVal: "500 dyn", toVal: "5.00 mN", extra: "5,000 µN", extra2: "0.5099 gf" },
      { fromVal: "1,000 dyn", toVal: "10.00 mN", extra: "10,000 µN", extra2: "1.0197 gf" },
      { fromVal: "2,500 dyn", toVal: "25.00 mN", extra: "25,000 µN", extra2: "2.5493 gf" },
      { fromVal: "5,000 dyn", toVal: "50.00 mN", extra: "50,000 µN", extra2: "5.0986 gf" },
      { fromVal: "10,000 dyn", toVal: "100.00 mN", extra: "100,000 µN", extra2: "10.1972 gf" }
    ]
  },
  applications: {
    title: "Practical Applications of dyn to mN Conversions",
    items: [
      {
        title: "Microfluidics & Surface Chemistry",
        text: "Translating Du Noüy ring and Wilhelmy plate tensiometer readings between traditional dynes and modern SI millinewtons for surfactant formulations."
      },
      {
        title: "Aerospace Micro-Propulsion",
        text: "Specifying satellite attitude control thruster thrusts (gridded ion engines, electrospray, and cold-gas thrusters) in millinewtons from dynamic vacuum test dynes."
      },
      {
        title: "Biophysics & Cellular Mechanics",
        text: "Quantifying single-cell contractile forces, optical tweezer trapping forces, and cell-substrate adhesion strengths."
      },
      {
        title: "Precision Tactile Sensors & MEMS",
        text: "Calibrating haptic feedback motors, capacitive touch membrane thresholds, and micro-electromechanical relays."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Millinewton Conversions",
    items: [
      "Inverting the conversion by multiplying by 100 instead of dividing, resulting in an answer two orders of magnitude too large.",
      "Confusing millinewtons (mN = 10⁻³ N) with meganewtons (MN = 10⁶ N). The lowercase 'm' versus uppercase 'M' represents a factor of 10⁹.",
      "Confusing millinewtons (mN) with micronewtons (µN), which differ by a factor of 1,000.",
      "Misinterpreting surface tension units (dyn/cm vs mN/m) and applying unnecessary conversion factors when the ratio is already 1:1."
    ]
  },
  faqs: [
    {
      question: "How many millinewtons are in 1 dyne?",
      answer: "There are exactly 0.01 millinewtons in 1 dyne (1 dyn = 0.01 mN)."
    },
    {
      question: "How many dynes equal 1 millinewton?",
      answer: "Exactly 100 dynes equal 1 millinewton (1 mN = 100 dyn)."
    },
    {
      question: "What is the formula to convert dynes to millinewtons?",
      answer: "The formula is: Millinewtons (mN) = Dynes (dyn) / 100, or mN = dyn × 0.01."
    },
    {
      question: "Is 1 dyn/cm equal to 1 mN/m?",
      answer: "Yes, exactly. Because 1 dyne is 0.01 mN and 1 centimeter is 0.01 m, the two factors cancel, making 1 dyn/cm = 1 mN/m."
    },
    {
      question: "How do I convert 350 dynes to millinewtons?",
      answer: "Divide 350 by 100 to get exactly 3.5 mN."
    },
    {
      question: "What is the difference between mN and MN?",
      answer: "Lowercase 'm' stands for milli (10⁻³ newtons), while uppercase 'M' stands for mega (10⁶ newtons). They differ by one billion times."
    },
    {
      question: "Why do scientists use millinewtons instead of dynes?",
      answer: "The millinewton is part of the coherent International System of Units (SI), ensuring seamless dimensional consistency with joules, watts, and pascals."
    },
    {
      question: "How much mass exerts 1 millinewton of weight under Earth gravity?",
      answer: "Under standard gravity (9.80665 m/s²), a mass of approximately 101.97 milligrams exerts a gravitational force of 1 mN."
    }
  ],
  relatedList: [
    { label: "Dyne to Micronewton", from: "dyne", to: "micronewton" },
    { label: "Dyne to Newton", from: "dyne", to: "newton" },
    { label: "Millinewton to Dyne", from: "millinewton", to: "dyne" },
    { label: "Newton to Millinewton", from: "newton", to: "millinewton" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics."
  ]
};
