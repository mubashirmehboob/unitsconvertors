import { CustomArticleData } from "./types";

export const newtonToKilonewton: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "kilonewton",
  seoTitle: "Newton to Kilonewton Converter (N to kN)",
  metaDescription: "Convert newtons to kilonewtons (N to kN) accurately. Learn SI metric prefix scaling, step-by-step calculation examples, and engineering load tables.",
  h1: "Newton to Kilonewton Converter",
  introduction: [
    "The newton (N) and kilonewton (kN) are direct SI metric units of force, related by a standard decimal multiplier of 1,000.",
    "While the newton is ideal for measuring small to moderate forces such as hand tool pressure or mechanical friction, the kilonewton is the standard unit used in structural engineering, rock mechanics, automotive crash testing, and heavy equipment capacity ratings.",
    "Converting newtons to kilonewtons requires simply dividing the newton value by 1,000 (shifting the decimal point three places to the left)."
  ],
  quickAnswer: {
    text: "To convert newtons to kilonewtons, divide the force value by 1,000. For example, 5,000 N equals exactly 5 kN.",
    formulaDisplay: "kN = N / 1,000",
    subtext: "The prefix 'kilo-' denotes a multiplier of 1,000 (10³). Therefore, 1 kN = 1,000 N."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the base SI unit of force, named after Sir Isaac Newton. It is defined as the force required to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²). It forms the foundational building block for all mechanical measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilonewton (kN)",
    text: "The kilonewton (kN) is a multiple SI unit equal to 1,000 newtons (10³ N). It is used globally in civil engineering, architecture, geological sampling, safety harness ratings, and vehicle safety testing to express large force quantities concisely."
  },
  relationship: "Because 'kilo-' signifies 1,000 in the metric prefix convention, 1 kilonewton equals 1,000 newtons. Consequently, 1 newton equals 0.001 kilonewtons (10⁻³ kN). Moving between N and kN involves a straightforward shift of decimal places.",
  relationshipTitle: "Newton vs Kilonewton SI Prefix Scale",
  relationshipItems: [
    { label: "1 Newton (N)", value: "0.001 kN" },
    { label: "1 Kilonewton (kN)", value: "1,000 N" },
    { label: "1 Meganewton (MN)", value: "1,000 kN (1,000,000 N)" },
    { label: "1 Kilonewton in lbf", value: "≈ 224.8089 lbf" }
  ],
  formula: {
    text: "Divide the force in newtons by 1,000 to convert to kilonewtons.",
    math: "kN = N / 1,000",
    subtext: "Alternatively: kN = N × 10⁻³."
  },
  formulaTitle: "Newton to Kilonewton Formula",
  practicalTip: {
    title: "Three-Decimal Shift Rule",
    text: "To convert from N to kN instantaneously in your head, shift the decimal point three positions to the left. For instance, 12,500 N becomes 12.5 kN."
  },
  expertNote: {
    title: "Fall Protection & Safety Engineering",
    text: "Personal fall arrest equipment (harnesses, lanyards, anchors) is rated in kilonewtons under EN 365 and OSHA standards. For example, a standard safety anchor must withstand a minimum peak load of 12 kN to 22 kN (~12,000 N to 22,000 N)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 7,500 Newtons",
        subtitle: "Convert a hydraulic jack press force of 7,500 N into kilonewtons.",
        steps: [
          "Identify the force in newtons: 7,500 N.",
          "Divide by 1,000: kN = 7,500 / 1,000.",
          "Calculate: 7,500 / 1,000 = 7.5.",
          "Result: 7,500 N is equal to exactly 7.5 kN."
        ]
      },
      {
        title: "Example 2: Concrete Compression Strength (350,000 N)",
        subtitle: "Convert a concrete cylinder test load of 350,000 N to kN.",
        steps: [
          "Identify the force value: 350,000 N.",
          "Divide by 1,000: 350,000 / 1,000 = 350.",
          "Result: 350,000 N corresponds to 350 kN."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Kilonewton Quick Reference Table",
    headers: ["Newtons (N)", "Kilonewtons (kN)", "Pounds-force (lbf)", "Practical Benchmark"],
    rows: [
      { fromVal: "100 N", toVal: "0.1 kN", extra: "22.48 lbf", extra2: "Small mechanical actuator" },
      { fromVal: "500 N", toVal: "0.5 kN", extra: "112.40 lbf", extra2: "Ergonomic push/pull force" },
      { fromVal: "1,000 N", toVal: "1.0 kN", extra: "224.81 lbf", extra2: "Weight of ~102 kg under Earth gravity" },
      { fromVal: "2,500 N", toVal: "2.5 kN", extra: "562.02 lbf", extra2: "Light trailer winch tension" },
      { fromVal: "5,000 N", toVal: "5.0 kN", extra: "1,124.04 lbf", extra2: "Standard carabiner gate rating" },
      { fromVal: "10,000 N", toVal: "10.0 kN", extra: "2,248.09 lbf", extra2: "Compact car curb weight force (~1 metric ton)" },
      { fromVal: "22,000 N", toVal: "22.0 kN", extra: "4,945.80 lbf", extra2: "OSHA structural fall anchor minimum rating" },
      { fromVal: "50,000 N", toVal: "50.0 kN", extra: "11,240.45 lbf", extra2: "Commercial elevator cable tension" },
      { fromVal: "100,000 N", toVal: "100.0 kN", extra: "22,480.89 lbf", extra2: "Civil engineering beam shear benchmark" },
      { fromVal: "1,000,000 N", toVal: "1,000.0 kN", extra: "224,808.94 lbf", extra2: "1 Meganewton (1 MN)" }
    ]
  },
  applications: {
    title: "Practical Applications of N to kN Conversion",
    items: [
      {
        title: "Civil & Structural Engineering",
        text: "Building codes present structural column loads, foundation bearing capacities, and wind shear forces in kilonewtons."
      },
      {
        title: "Safety Equipment Certification",
        text: "Rock climbing hardware, industrial rigging slings, and fall-arrest harnesses are certified and stamped in kilonewtons (e.g., 24 kN)."
      },
      {
        title: "Automotive Safety & Crash Testing",
        text: "Dummy load sensors record seatbelt restraint and barrier impact forces in kilonewtons during NCAP crash testing."
      },
      {
        title: "Geotechnical Engineering",
        text: "Soil bearing capacity, rock anchor tension, and pile driving resistance are conventionally reported in kilonewtons."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing when converting N to kN.",
      "Confusing kilonewton (kN, force) with kilopascal (kPa, pressure) or kilowatt (kW, power).",
      "Forgetting that 1 kN is equal to ~102 kg of weight force under Earth's gravity, not 1,000 kg."
    ]
  },
  faqs: [
    {
      question: "How many kilonewtons are in 1 newton?",
      answer: "One newton equals 0.001 kilonewtons (1/1,000th of a kilonewton)."
    },
    {
      question: "How many newtons are in 1 kilonewton?",
      answer: "There are exactly 1,000 newtons in 1 kilonewton."
    },
    {
      question: "How many pounds-force equal 1 kN?",
      answer: "One kilonewton equals approximately 224.8089 pounds-force (lbf)."
    },
    {
      question: "How do I convert N to kN instantly?",
      answer: "Divide by 1,000 by moving the decimal point three places to the left. For example, 15,000 N becomes 15 kN."
    },
    {
      question: "How much weight force is 1 kN on Earth?",
      answer: "1 kN corresponds to the gravitational weight force of approximately 101.97 kilograms (or ~224.8 lbs) on Earth."
    },
    {
      question: "Is kilonewton an official SI unit?",
      answer: "Yes, kilonewton is a standard SI unit formed by combining the prefix 'kilo-' (10³) with the base unit newton (N)."
    },
    {
      question: "Why do structural engineers use kN instead of N?",
      answer: "Structural loads are very large. Expressing 500,000 N as 500 kN simplifies blueprints, reports, and calculations."
    },
    {
      question: "What is the symbol for kilonewton?",
      answer: "The correct symbol is 'kN' (lowercase 'k' for kilo, uppercase 'N' for Newton)."
    }
  ],
  relatedList: [
    { label: "Newton to Meganewton", from: "newton", to: "meganewton" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" },
    { label: "Newton to Ton-force US", from: "newton", to: "ton-force-us" },
    { label: "Newton to Ton-force Metric", from: "newton", to: "ton-force-metric" }
  ],
  references: [
    "BIPM - SI Brochure: The International System of Units (9th Edition)",
    "ISO 80000-4: Quantities and units — Mechanics",
    "EN 365: Personal protective equipment against falls from a height"
  ]
};
