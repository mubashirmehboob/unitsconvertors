import { CustomArticleData } from "./types";

export const dyneToMicronewton: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "micronewton",
  seoTitle: "Dyne to Micronewton Converter (dyn to µN) | UnitsConvertors.com",
  metaDescription: "Convert dynes to micronewtons (dyn to µN) accurately. Explore the exact 1-to-10 CGS to SI micro-force relationship, formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/force/dyne-to-micronewton",
  h1: "Dyne to Micronewton Converter",
  introduction: [
    "The dyne (dyn) and the micronewton (µN) are two precision units used to quantify microscopic forces in nanotechnology, cell biophysics, colloid science, and aerospace micro-propulsion. While the dyne is the classic centimeter-gram-second (CGS) unit of force, the micronewton is the standard decimal submultiple of the SI unit, the newton.",
    "Because one newton contains exactly 100,000 dynes (10⁵ dyn) and one micronewton equals one-millionth of a newton (10⁻⁶ N), the mathematical relationship between the two is remarkably simple: one dyne equals exactly ten micronewtons (10 µN).",
    "To convert from dynes to micronewtons, simply multiply the value in dynes by 10. This technical reference provides the physical derivation, direct calculation steps, real-world micro-scale examples, and a comprehensive conversion table."
  ],
  quickAnswer: {
    text: "To convert dynes to micronewtons, multiply the dyne value by 10. For example, 15 dynes equals exactly 150 µN.",
    formulaDisplay: "µN = dyn × 10",
    subtext: "1 Dyne (dyn) = 10 Micronewtons (µN); 1 Micronewton = 0.1 Dynes."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the coherent unit of force in the centimeter-gram-second (CGS) metric system, originally proposed in 1873. Defined as the force required to accelerate a mass of one gram at a rate of one centimeter per second squared (1 dyn = 1 g·cm/s²), it equals exactly 10⁻⁵ newtons (0.00001 N). Because of its delicate magnitude, the dyne has long served as a reference unit in liquid surface tension, microfluidic shear stresses, and capillary flow mechanics."
  },
  aboutTargetUnit: {
    title: "Understanding the Micronewton (µN)",
    text: "The micronewton is an official SI decimal fraction representing one-millionth of a newton (10⁻⁶ N, or 0.000001 N). On Earth, one micronewton corresponds to the weight force exerted on a microscopic mass of approximately 101.97 micrograms. Physicists and engineers use micronewtons to calibrate atomic force microscopy (AFM) probes, measure colloidal optical trapping forces, evaluate gecko-inspired dry adhesives, and characterize space satellite attitude-control micro-thrusters."
  },
  relationship: "One dyne equals exactly 10 micronewtons (10 µN). Conversely, one micronewton equals exactly 0.1 dynes (1/10 dyn). Converting dynes to micronewtons is an exact single-digit decimal shift to the right.",
  relationshipTitle: "Dyne to Micronewton Scale Breakdown",
  relationshipItems: [
    { label: "0.1 Dynes", value: "1 µN" },
    { label: "0.5 Dynes", value: "5 µN" },
    { label: "1 Dyne (dyn)", value: "10 µN" },
    { label: "5 Dynes", value: "50 µN" },
    { label: "10 Dynes", value: "100 µN" },
    { label: "50 Dynes", value: "500 µN" },
    { label: "100 Dynes", value: "1,000 µN (1 mN)" }
  ],
  formula: {
    text: "Multiply the force in dynes by 10 to obtain the force in micronewtons.",
    math: "\\mu\\text{N} = \\text{dyn} \\times 10",
    subtext: "Inverse formula: dyn = µN / 10 = µN × 0.1"
  },
  formulaTitle: "Dyne to Micronewton Conversion Formula",
  practicalTip: {
    title: "Simple Mental Shift",
    text: "Because 1 dyn = 10 µN, converting is as simple as adding a zero or shifting the decimal point one place to the right (e.g., 4.2 dyn becomes 42 µN)."
  },
  expertNote: {
    title: "Atomic Force Microscopy & Optical Tweezers",
    text: "In modern biophysics research, molecular motor forces (kinesin, myosin) and DNA stretching tensions are typically measured in piconewtons (pN) and nanonewtons (nN), while whole-cell adhesion and micro-cantilever deflections are quantified in micronewtons (µN). Converting historical CGS literature from dynes into micronewtons bridges classical biomechanics with modern SI nanotechnology standards."
  },
  examples: {
    title: "Step-by-Step dyn to µN Worked Examples",
    items: [
      {
        title: "Example 1: Satellite Colloid Thruster Output",
        subtitle: "An ultra-precision space satellite attitude colloid electrospray thruster outputs 3.8 dynes of continuous thrust. Express this in micronewtons.",
        steps: [
          "State the force in dynes: F = 3.8 dyn.",
          "Apply the conversion formula: µN = dyn × 10.",
          "Calculate: 3.8 × 10 = 38.",
          "Final Result: 3.8 dynes equals exactly 38 µN."
        ]
      },
      {
        title: "Example 2: AFM Micro-Cantilever Adhesion",
        subtitle: "An atomic force microscope measures an adhesive pull-off force of 0.65 dynes between a silicon tip and a polymer substrate. Find the force in micronewtons.",
        steps: [
          "Identify the measured force: 0.65 dyn.",
          "Multiply by 10: 0.65 × 10 = 6.5.",
          "Final Result: 0.65 dynes corresponds to exactly 6.5 µN."
        ]
      },
      {
        title: "Example 3: Bio-Adhesive Micro-Spatula Peel Force",
        subtitle: "A biomimetic gecko-inspired adhesive pad records a shear detachment force of 42.5 dynes. Convert this to micronewtons.",
        steps: [
          "Identify the given value: 42.5 dyn.",
          "Multiply by 10: 42.5 × 10 = 425.",
          "Final Result: 42.5 dynes is equal to exactly 425 µN (0.425 mN)."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Micronewton Conversion Table",
    headers: ["Dynes (dyn)", "Micronewtons (µN)", "Millinewtons (mN)", "Newtons (N)"],
    rows: [
      { fromVal: "0.1 dyn", toVal: "1 µN", extra: "0.001 mN", extra2: "1 × 10⁻⁶ N" },
      { fromVal: "0.5 dyn", toVal: "5 µN", extra: "0.005 mN", extra2: "5 × 10⁻⁶ N" },
      { fromVal: "1 dyn", toVal: "10 µN", extra: "0.010 mN", extra2: "1 × 10⁻⁵ N" },
      { fromVal: "2 dyn", toVal: "20 µN", extra: "0.020 mN", extra2: "2 × 10⁻⁵ N" },
      { fromVal: "5 dyn", toVal: "50 µN", extra: "0.050 mN", extra2: "5 × 10⁻⁵ N" },
      { fromVal: "10 dyn", toVal: "100 µN", extra: "0.100 mN", extra2: "1 × 10⁻⁴ N" },
      { fromVal: "25 dyn", toVal: "250 µN", extra: "0.250 mN", extra2: "2.5 × 10⁻⁴ N" },
      { fromVal: "50 dyn", toVal: "500 µN", extra: "0.500 mN", extra2: "5 × 10⁻⁴ N" },
      { fromVal: "100 dyn", toVal: "1,000 µN", extra: "1.000 mN", extra2: "1 × 10⁻³ N" },
      { fromVal: "500 dyn", toVal: "5,000 µN", extra: "5.000 mN", extra2: "5 × 10⁻³ N" }
    ]
  },
  applications: {
    title: "Practical Applications of dyn to µN Conversions",
    items: [
      {
        title: "Spacecraft Precision Station-Keeping",
        text: "Calibrating ultra-low disturbance space satellite micro-thrusters (such as FEEP and cold gas thrusters) for gravitational wave observatories like LISA."
      },
      {
        title: "Nanotechnology & Scanning Probe Microscopy",
        text: "Converting cantilever spring deflection forces and tip-sample van der Waals interactions from legacy CGS units into modern micronewtons."
      },
      {
        title: "Cell Mechanics & Cytoskeletal Research",
        text: "Measuring the mechanical forces exerted by migrating mammalian cells, cardiac myocytes, and cellular focal adhesions."
      },
      {
        title: "MEMS Sensor & Micro-Actuator Design",
        text: "Determining electrostatic and electrothermal restoring forces in micro-mirrors, silicon accelerometers, and micro-switches."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Micronewton Conversions",
    items: [
      "Dividing by 10 instead of multiplying by 10. Remember that 1 dyne is ten times larger than 1 micronewton.",
      "Confusing micronewtons (µN = 10⁻⁶ N) with millinewtons (mN = 10⁻³ N), leading to a 1,000-fold discrepancy.",
      "Misinterpreting the Greek symbol 'µ' (mu) as 'm' (milli) in technical documentation.",
      "Applying gravitational acceleration conversions unnecessarily to absolute physical units."
    ]
  },
  faqs: [
    {
      question: "How many micronewtons are in 1 dyne?",
      answer: "There are exactly 10 micronewtons in 1 dyne (1 dyn = 10 µN)."
    },
    {
      question: "How many dynes equal 1 micronewton?",
      answer: "Exactly 0.1 dynes equal 1 micronewton (1 µN = 0.1 dyn)."
    },
    {
      question: "What is the formula to convert dynes to micronewtons?",
      answer: "The formula is: Micronewtons (µN) = Dynes (dyn) × 10."
    },
    {
      question: "Is a dyne larger or smaller than a micronewton?",
      answer: "A dyne is larger. One dyne equals 10 micronewtons (10⁻⁵ N vs 10⁻⁶ N)."
    },
    {
      question: "How do I convert 7.5 dynes to micronewtons?",
      answer: "Multiply 7.5 by 10 to obtain exactly 75 µN."
    },
    {
      question: "What is the symbol for micronewton?",
      answer: "The official SI symbol is µN (using the Greek letter mu), often written as uN in plain-text systems."
    },
    {
      question: "How many micronewtons are in 1 newton?",
      answer: "There are exactly 1,000,000 micronewtons (10⁶ µN) in 1 newton."
    },
    {
      question: "Where are micronewtons used in engineering?",
      answer: "Micronewtons are used in atomic force microscopy, cell biology, MEMS sensor design, and satellite micro-propulsion ion thruster testing."
    }
  ],
  relatedList: [
    { label: "Dyne to Millinewton", from: "dyne", to: "millinewton" },
    { label: "Dyne to Newton", from: "dyne", to: "newton" },
    { label: "Micronewton to Dyne", from: "micronewton", to: "dyne" },
    { label: "Newton to Micronewton", from: "newton", to: "micronewton" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics."
  ]
};
