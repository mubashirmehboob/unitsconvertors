import { CustomArticleData } from "./types";

export const newtonToMicronewton: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "micronewton",
  seoTitle: "Newton to Micronewton Converter (N to µN) | UnitsConvertors.com",
  metaDescription: "Convert Newtons to Micronewtons (N to µN) accurately. Explore the SI prefix factor, force equations, micro-propulsion applications, and conversion tables.",
  h1: "Newton to Micronewton Converter",
  introduction: [
    "The newton (N) is the base coherent unit of mechanical force in the International System of Units (SI). While macroscopic engineering systems routinely operate in newtons or kilonewtons, advanced micro-scale physics and precision nanotechnology require much smaller measurement scales.",
    "The micronewton (symbol: µN) represents exactly one-millionth of a newton (10⁻⁶ N). It serves as an essential unit for quantifying ultra-low thrust vectors in spacecraft attitude control, cantilever deflection in atomic force microscopy, and delicate molecular cell mechanics.",
    "To convert any force measurement from newtons to micronewtons, multiply the value by 1,000,000 (µN = N × 10⁶). This technical reference provides the exact mathematical relationship, step-by-step worked examples, common calculation pitfalls, and a complete engineering conversion table."
  ],
  quickAnswer: {
    text: "To convert newtons to micronewtons, multiply the force in newtons by 1,000,000. For instance, a force of 0.00045 N equals exactly 450 µN.",
    formulaDisplay: "µN = N × 1,000,000",
    subtext: "1 Newton = 1,000,000 Micronewtons (10⁶ µN); 1 Micronewton = 0.000001 Newtons (10⁻⁶ N)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the SI derived unit of force, named after Sir Isaac Newton in recognition of his fundamental laws of classical mechanics. Formally defined through Newton's second law (F = ma), one newton is the exact force required to accelerate a one-kilogram mass at a rate of one meter per second squared (1 N = 1 kg·m/s²). Under standard terrestrial gravity (g = 9.80665 m/s²), a mass of roughly 101.97 grams exerts one newton of downward gravitational force."
  },
  aboutTargetUnit: {
    title: "Understanding the Micronewton (µN)",
    text: "The micronewton is an SI metric submultiple of the newton, combining the standard SI prefix 'micro-' (representing 10⁻⁶ or one-millionth) with the newton. One micronewton corresponds to the force required to accelerate a 1-milligram mass at 1 m/s², or a 1-gram mass at 1 mm/s². In the CGS system, one micronewton is equivalent to exactly 0.1 dyne."
  },
  relationship: "Because the micronewton is smaller than the newton by a factor of one million (10⁶), converting from newtons to micronewtons shifts the decimal point six places to the right. Multiply newtons by 1,000,000 to obtain micronewtons.",
  relationshipTitle: "Newton vs Micronewton Scale Comparison",
  relationshipItems: [
    { label: "1.0 N", value: "1,000,000 µN (10⁶ µN)" },
    { label: "0.01 N", value: "10,000 µN (10⁴ µN)" },
    { label: "0.001 N (1 mN)", value: "1,000 µN (10³ µN)" },
    { label: "0.0001 N", value: "100 µN" },
    { label: "0.000001 N (1 µN)", value: "1 µN" }
  ],
  formula: {
    text: "Multiply the force magnitude in newtons by 1,000,000 to determine the equivalent force in micronewtons.",
    math: "\\text{µN} = \\text{N} \\times 1{,}000{,}000",
    subtext: "Scientific notation: µN = N × 10⁶ | Inverse formula: N = µN × 10⁻⁶"
  },
  formulaTitle: "Newton to Micronewton Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To quickly convert from newtons (N) to micronewtons (µN) without a calculator, shift the decimal point six positions to the right. For example, 0.000025 N becomes 25 µN."
  },
  expertNote: {
    title: "Micro-Propulsion & CubeSat Attitude Control",
    text: "In aerospace engineering, cold-gas and electrospray micro-thrusters designed for CubeSats and deep-space interferometers (such as LISA Pathfinder) generate continuous thrust outputs strictly measured between 0.1 µN and 500 µN to achieve sub-nanometer spacecraft position stability."
  },
  examples: {
    title: "Step-by-Step N to µN Worked Examples",
    items: [
      {
        title: "Example 1: Atomic Force Microscope Cantilever Load",
        subtitle: "Convert a measured AFM cantilever probe contact force of 0.000018 N into micronewtons.",
        steps: [
          "State the given value in newtons: F = 0.000018 N.",
          "Apply the standard conversion equation: µN = N × 1,000,000.",
          "Compute the product: 0.000018 × 1,000,000 = 18.",
          "Final Result: 0.000018 N equals 18 micronewtons (18 µN)."
        ]
      },
      {
        title: "Example 2: Satellite Ion Thruster Pulse",
        subtitle: "A colloid thruster produces a precision impulse force of 0.00035 Newtons. Express this in micronewtons.",
        steps: [
          "Identify the input force: 0.00035 N.",
          "Multiply by 10⁶: 0.00035 × 1,000,000 = 350.",
          "Final Result: The thruster delivers exactly 350 µN of force."
        ]
      },
      {
        title: "Example 3: Biophysical Cellular Traction Force",
        subtitle: "Convert a cell traction force of 0.0000024 Newtons to micronewtons.",
        steps: [
          "Identify the measurement: 0.0000024 N.",
          "Perform calculation: 0.0000024 × 1,000,000 = 2.4.",
          "Final Result: 0.0000024 N corresponds to 2.4 µN."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Micronewton Reference Table",
    headers: ["Newtons (N)", "Micronewtons (µN)", "Scientific Notation", "Physical / Engineering Application"],
    rows: [
      { fromVal: "0.000001 N", toVal: "1 µN", extra: "1.0 × 10⁰ µN", extra2: "Optical tweezers trapping photon force" },
      { fromVal: "0.000005 N", toVal: "5 µN", extra: "5.0 × 10⁰ µN", extra2: "Single living cell adherence tension" },
      { fromVal: "0.00001 N", toVal: "10 µN", extra: "1.0 × 10¹ µN", extra2: "AFM tip scanning on biological sample" },
      { fromVal: "0.00005 N", toVal: "50 µN", extra: "5.0 × 10¹ µN", extra2: "Electrospray colloid micro-thruster output" },
      { fromVal: "0.0001 N", toVal: "100 µN", extra: "1.0 × 10² µN", extra2: "MEMS electrostatic comb drive actuation" },
      { fromVal: "0.0005 N", toVal: "500 µN", extra: "5.0 × 10² µN", extra2: "Gravitational force on a 51 µg particle" },
      { fromVal: "0.001 N", toVal: "1,000 µN", extra: "1.0 × 10³ µN", extra2: "1 millinewton (weight of ~0.1 mg mass)" },
      { fromVal: "0.005 N", toVal: "5,000 µN", extra: "5.0 × 10³ µN", extra2: "Gecko seta adhesion micro-force" },
      { fromVal: "0.01 N", toVal: "10,000 µN", extra: "1.0 × 10⁴ µN", extra2: "Ultra-fine wire bonding pull force" },
      { fromVal: "0.1 N", toVal: "100,000 µN", extra: "1.0 × 10⁵ µN", extra2: "Small spring flexure test load" },
      { fromVal: "1.0 N", toVal: "1,000,000 µN", extra: "1.0 × 10⁶ µN", extra2: "Standard 1 Newton base unit force" }
    ]
  },
  applications: {
    title: "Practical Applications of Newton to Micronewton Conversions",
    items: [
      {
        title: "Nanotechnology & Atomic Force Microscopy",
        text: "Scientists use micronewtons and nanonewtons to calibrate AFM cantilevers, mapping surface topography and molecular stiffness without damaging soft specimens."
      },
      {
        title: "Spacecraft Micro-Propulsion & Formation Flying",
        text: "Aerospace engineers convert thrust specifications from newtons into micronewtons to model drag-free control systems on scientific space missions."
      },
      {
        title: "Cell Mechanics & Molecular Biophysics",
        text: "Biomedical researchers quantify cellular migration, extracellular matrix remodeling, and micro-pipette aspiration forces in micronewtons."
      },
      {
        title: "MEMS Sensor & Actuator Design",
        text: "Micro-electromechanical engineers simulate electrostatic and piezoelectric force responses in micronewtons during chip-scale sensor design."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting N to µN",
    items: [
      "Dividing by 1,000,000 instead of multiplying by 1,000,000 when converting from newtons to micronewtons.",
      "Confusing the metric prefix 'micro-' (µ, 10⁻⁶) with 'milli-' (m, 10⁻³) or 'nano-' (n, 10⁻⁹).",
      "Miscounting zeros when translating between standard decimal notation and scientific exponents.",
      "Confusing micronewtons (µN) with dynes (1 µN = 0.1 dyn; 1 dyn = 10 µN)."
    ]
  },
  faqs: [
    {
      question: "How many micronewtons are in 1 newton?",
      answer: "There are exactly 1,000,000 micronewtons in 1 newton (1 N = 10⁶ µN)."
    },
    {
      question: "What is the formula to convert newtons to micronewtons?",
      answer: "The formula is: Micronewtons (µN) = Newtons (N) × 1,000,000."
    },
    {
      question: "How do I convert 0.00005 Newtons to micronewtons?",
      answer: "Multiply 0.00005 by 1,000,000: 0.00005 × 1,000,000 = 50 µN."
    },
    {
      question: "What is the official symbol for micronewton?",
      answer: "The official SI symbol is µN, combining the Greek letter mu (µ) for micro with the capital letter N for newton. In plain text ASCII, it is sometimes written as uN."
    },
    {
      question: "How does a micronewton compare to a dyne?",
      answer: "One micronewton equals exactly 0.1 dyne (1 µN = 10⁻⁵ N = 0.1 dyn). Conversely, 1 dyne equals 10 micronewtons."
    },
    {
      question: "How many micronewtons are in 1 millinewton?",
      answer: "There are exactly 1,000 micronewtons in 1 millinewton (1 mN = 1,000 µN)."
    },
    {
      question: "What mass on Earth exerts 1 micronewton of weight force?",
      answer: "Under standard gravity (9.80665 m/s²), an object with a mass of approximately 0.10197 milligrams (101.97 micrograms) exerts 1 micronewton of downward force."
    },
    {
      question: "Why do scientists use micronewtons instead of newtons?",
      answer: "In nanotechnology, micro-robotics, and cell biology, forces are extremely tiny. Using micronewtons allows researchers to write clean, readable whole numbers instead of lengthy decimals like 0.000015 N."
    }
  ],
  relatedList: [
    { label: "Micronewton to Newton", from: "micronewton", to: "newton" },
    { label: "Newton to Millinewton", from: "newton", to: "millinewton" },
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
