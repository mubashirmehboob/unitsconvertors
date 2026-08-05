import { CustomArticleData } from "./types";

export const newtonToTonForceUs: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "ton-force-us",
  seoTitle: "Newton to Ton-force US Converter (N to tonf US)",
  metaDescription: "Convert newtons to US short tons-force (N to tonf US) accurately. Exact conversion factors, formulas, heavy engineering examples, and load tables.",
  h1: "Newton to Ton-force US Converter",
  introduction: [
    "The newton (N) and the US ton-force (tonf US, also called short ton-force) are key measurements of heavy force used in engineering and heavy industry.",
    "While the newton is the standard SI metric unit, the short ton-force is widely used in the United States to rate hydraulic presses, crane hoisting capacities, pile driving equipment, and structural load ratings.",
    "One US ton-force equals exactly 2,000 pounds-force (2 kips) or 8,896.44323 newtons (~8.896 kN). Converting newtons to US tons-force requires dividing by 8,896.44323."
  ],
  quickAnswer: {
    text: "To convert newtons to US tons-force, divide the value by 8,896.44323 (or multiply by 0.0001124045). For example, 88,964 N equals exactly 10 tonf (US).",
    formulaDisplay: "tonf (US) = N / 8,896.44323",
    subtext: "1 US ton-force = 2,000 lbf = 8,896.443 N = 8.89644 kN."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the base SI derived unit of force, named after Sir Isaac Newton. Defined by F = ma, 1 newton accelerates a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the US Ton-force (tonf US)",
    text: "The US ton-force (tonf US), or short ton-force, is a U.S. Customary unit equal to the force exerted by standard Earth gravity on a mass of 1 US short ton (2,000 lbs or 907.18474 kg). It equals exactly 8,896.443230521 N."
  },
  relationship: "Because 1 US short ton equals 2,000 pounds-mass and 1 lbf equals 4.448221615 N, multiplying 2,000 by 4.448221615 yields 8,896.443230521 N per tonf (US). Inverting this gives 1 N = 0.00011240447 tonf (US).",
  relationshipTitle: "Newton vs US Ton-force Heavy Load Scale",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 0.00011240 tonf (US)" },
    { label: "1 Kilonewton (kN)", value: "≈ 0.11240447 tonf (US)" },
    { label: "1 US Ton-force (tonf US)", value: "8,896.4432 N (8.8964 kN)" },
    { label: "100 Kilonewtons (100 kN)", value: "≈ 11.24045 tonf (US)" }
  ],
  formula: {
    text: "Divide the force in newtons by 8,896.44323 to convert to US tons-force.",
    math: "tonf (US) = N / 8,896.44323",
    subtext: "If using kilonewtons: tonf (US) = kN / 8.89644323."
  },
  formulaTitle: "Newton to US Ton-force Conversion Formula",
  practicalTip: {
    title: "Kilonewton Shortcut",
    text: "To estimate US tons-force from kilonewtons (kN), divide kN by 8.9. For example, 89 kN / 8.9 ≈ 10 tonf US (exact answer: 10.004 tonf US)."
  },
  expertNote: {
    title: "US vs Metric vs UK Ton-force Distinctions",
    text: "Be careful to distinguish between the US short ton-force (2,000 lbf = 8,896 N), the Metric ton-force (1,000 kgf = 9,807 N), and the Imperial long ton-force (2,240 lbf = 9,964 N)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 500,000 Newtons",
        subtitle: "Convert a hydraulic press rating of 500,000 N (500 kN) to US tons-force.",
        steps: [
          "Identify the force in newtons: 500,000 N.",
          "Apply the formula: tonf (US) = 500,000 / 8,896.44323.",
          "Calculate: 500,000 / 8,896.44323 = 56.2022.",
          "Result: 500,000 N equals approximately 56.20 tonf (US)."
        ]
      },
      {
        title: "Example 2: Crane Winch Capacity (89,000 N)",
        subtitle: "Convert an 89,000 N winch pull force to US tons-force.",
        steps: [
          "Identify the input value: 89,000 N.",
          "Divide by 8,896.44323: 89,000 / 8,896.44323 = 10.004.",
          "Result: 89,000 N is approximately 10 tonf (US)."
        ]
      }
    ]
  },
  table: {
    title: "Newton to US Ton-force Quick Reference Table",
    headers: ["Newtons (N)", "Kilonewtons (kN)", "US Tons-force (tonf US)", "Heavy Industry Context"],
    rows: [
      { fromVal: "8,896 N", toVal: "8.896 kN", extra: "1.000 tonf (US)", extra2: "2,000 lbf benchmark" },
      { fromVal: "20,000 N", toVal: "20.0 kN", extra: "2.248 tonf (US)", extra2: "Small excavator bucket break" },
      { fromVal: "44,482 N", toVal: "44.48 kN", extra: "5.000 tonf (US)", extra2: "5 short ton shop press" },
      { fromVal: "88,964 N", toVal: "88.96 kN", extra: "10.000 tonf (US)", extra2: "Commercial tow truck winch" },
      { fromVal: "222,411 N", toVal: "222.41 kN", extra: "25.000 tonf (US)", extra2: "Medium industrial stamping press" },
      { fromVal: "444,822 N", toVal: "444.82 kN", extra: "50.000 tonf (US)", extra2: "50-ton hydraulic ram" },
      { fromVal: "889,644 N", toVal: "889.64 kN", extra: "100.000 tonf (US)", extra2: "100-ton bridge crane capacity" },
      { fromVal: "2,224,111 N", toVal: "2,224.11 kN", extra: "250.000 tonf (US)", extra2: "Heavy forging press" },
      { fromVal: "4,448,222 N", toVal: "4,448.22 kN", extra: "500.000 tonf (US)", extra2: "500-ton pile driving ram" },
      { fromVal: "8,896,443 N", toVal: "8,896.44 kN", extra: "1,000.000 tonf (US)", extra2: "1,000 short ton heavy benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of N to tonf US Conversion",
    items: [
      {
        title: "Hydraulic Press & Machinery Ratings",
        text: "Industrial press capacities in North America are rated in short tons-force (e.g., 50-ton press), requiring conversion from newtons produced by metric hydraulic cylinders."
      },
      {
        title: "Heavy Crane & Rigging Specs",
        text: "Hoisting equipment specs cross-reference metric lifting limits in kN with US short tons-force."
      },
      {
        title: "Pile Driving & Geotechnical Engineering",
        text: "Deep foundation load capacity testing reports ultimate bearing resistance in short tons-force."
      },
      {
        title: "Mining & Heavy Excavation Equipment",
        text: "Bucket breakout force and cable shovel pull ratings bridge SI metric and US Customary standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US short ton-force (8,896 N) with metric ton-force (9,807 N) or UK long ton-force (9,964 N).",
      "Treating ton-force as mass rather than force in dynamic acceleration equations.",
      "Dividing by 2,000 instead of 8,896 when starting from newtons."
    ]
  },
  faqs: [
    {
      question: "How many US tons-force are in 1 newton?",
      answer: "One newton equals approximately 0.00011240447 US tons-force (tonf US)."
    },
    {
      question: "How many newtons are in 1 US ton-force?",
      answer: "One US ton-force equals exactly 8,896.443230521 newtons (~8.896 kilonewtons)."
    },
    {
      question: "What is the difference between short ton-force and metric ton-force?",
      answer: "1 US short ton-force equals 8,896 N (2,000 lbf), whereas 1 metric ton-force equals 9,807 N (2,204.6 lbf)."
    },
    {
      question: "How many pounds-force are in 1 US ton-force?",
      answer: "There are exactly 2,000 pounds-force (or 2 kips) in 1 US ton-force."
    },
    {
      question: "How do I convert kilonewtons (kN) to US tons-force?",
      answer: "Divide the kN value by 8.89644. For example, 88.96 kN / 8.89644 = 10 tonf US."
    },
    {
      question: "Why is it called a 'short' ton?",
      answer: "In the U.S. Customary system, a short ton is 2,000 lbs, as opposed to the Imperial long ton of 2,240 lbs."
    },
    {
      question: "What unit is larger: 1 kN or 1 US ton-force?",
      answer: "1 US ton-force (~8.896 kN) is nearly 9 times larger than 1 kilonewton."
    },
    {
      question: "Is US ton-force recognized in SI standards?",
      answer: "No, the US ton-force is a U.S. Customary unit. The official SI unit for heavy forces is the kilonewton (kN) or meganewton (MN)."
    }
  ],
  relatedList: [
    { label: "Newton to Ton-force Metric", from: "newton", to: "ton-force-metric" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Meganewton", from: "newton", to: "meganewton" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "AISC Manual of Steel Construction",
    "ISO 80000-4: Quantities and units — Mechanics"
  ]
};
