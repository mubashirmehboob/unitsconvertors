import { CustomArticleData } from "./types";

export const newtonToTonForceMetric: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "ton-force-metric",
  seoTitle: "Newton to Ton-force Metric Converter (N to tonf m)",
  metaDescription: "Convert newtons to metric tons-force (N to tonf m) accurately. Exact gravitational conversion factors, formulas, heavy engineering examples, and load tables.",
  h1: "Newton to Ton-force Metric Converter",
  introduction: [
    "The newton (N) and metric ton-force (tonf m, or tonne-force) measure heavy mechanical loads in SI and metric engineering frameworks.",
    "One metric ton-force equals the weight force exerted by Earth's standard gravity on a 1,000-kilogram mass (1 metric tonne), making 1 tonf (m) equal to exactly 9,806.65 newtons (~9.80665 kN).",
    "Converting newtons to metric tons-force requires dividing by 9,806.65 (or dividing kilonewtons by 9.80665). This guide details the exact math, physical standards, practical examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert newtons to metric tons-force, divide the value by 9,806.65 (or multiply by 0.0001019716). For example, 98,066.5 N equals exactly 10 tonf (m).",
    formulaDisplay: "tonf (m) = N / 9,806.65",
    subtext: "1 metric ton-force = 1,000 kgf = 9,806.65 N = 9.80665 kN."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the base SI unit of force, named after Sir Isaac Newton. It is defined as the force necessary to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Metric Ton-force (tonf m)",
    text: "The metric ton-force (tonf m), also known as tonne-force or megapond (Mp), is a gravitational metric unit equal to the force exerted by standard Earth gravity (9.80665 m/s²) on a mass of 1 metric tonne (1,000 kg), yielding exactly 9,806.65 N."
  },
  relationship: "Because 1 metric ton-force equals 1,000 kgf and 1 kgf = 9.80665 N, 1 tonf (m) equals exactly 9,806.65 N (9.80665 kN). Inverting this gives 1 N = 1 / 9,806.65 ≈ 0.0001019716 tonf (m).",
  relationshipTitle: "Newton vs Metric Ton-force Scale Comparison",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 0.00010197 tonf (m)" },
    { label: "1 Kilonewton (kN)", value: "≈ 0.10197162 tonf (m)" },
    { label: "1 Metric Ton-force (tonf m)", value: "9,806.65 N (9.80665 kN)" },
    { label: "100 Kilonewtons (100 kN)", value: "≈ 10.19716 tonf (m)" }
  ],
  formula: {
    text: "Divide the force in newtons by 9,806.65 to convert to metric tons-force.",
    math: "tonf (m) = N / 9,806.65",
    subtext: "If working in kilonewtons: tonf (m) = kN / 9.80665."
  },
  formulaTitle: "Newton to Metric Ton-force Conversion Formula",
  practicalTip: {
    title: "Kilonewton Mental Rule",
    text: "To estimate metric tons-force from kilonewtons (kN) quickly, divide by 10. For example, 100 kN / 10 ≈ 10 tonf m (exact answer: 10.197 tonf m)."
  },
  expertNote: {
    title: "Megapond (Mp) Terminology",
    text: "In older German and Central European engineering texts, the metric ton-force was termed the megapond (Mp). 1 megapond is identical to 1 metric ton-force (1 Mp = 1 tonf m = 9,806.65 N)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 250,000 Newtons",
        subtitle: "Convert an industrial crane test load of 250,000 N (250 kN) to metric tons-force.",
        steps: [
          "Identify the force in newtons: 250,000 N.",
          "Apply the conversion formula: tonf (m) = 250,000 / 9,806.65.",
          "Calculate: 250,000 / 9,806.65 = 25.4929.",
          "Result: 250,000 N equals approximately 25.49 tonf (m)."
        ]
      },
      {
        title: "Example 2: Structural Press Capacity (98,066.5 N)",
        subtitle: "Convert a hydraulic press reading of 98,066.5 N to metric tons-force.",
        steps: [
          "Identify the load: 98,066.5 N.",
          "Divide by 9,806.65: 98,066.5 / 9,806.65 = 10.",
          "Result: 98,066.5 N equals exactly 10 tonf (m)."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Metric Ton-force Quick Reference Table",
    headers: ["Newtons (N)", "Kilonewtons (kN)", "Metric Tons-force (tonf m)", "Heavy Industry Benchmark"],
    rows: [
      { fromVal: "9,807 N", toVal: "9.807 kN", extra: "1.000 tonf (m)", extra2: "Weight of 1 metric tonne under Earth gravity" },
      { fromVal: "20,000 N", toVal: "20.00 kN", extra: "2.039 tonf (m)", extra2: "Small excavator winch pull" },
      { fromVal: "50,000 N", toVal: "50.00 kN", extra: "5.099 tonf (m)", extra2: "Commercial vehicle tow winch" },
      { fromVal: "98,067 N", toVal: "98.07 kN", extra: "10.000 tonf (m)", extra2: "10 metric tonne overhead crane capacity" },
      { fromVal: "250,000 N", toVal: "250.00 kN", extra: "25.493 tonf (m)", extra2: "Heavy hydraulic stamping press" },
      { fromVal: "500,000 N", toVal: "500.00 kN", extra: "50.986 tonf (m)", extra2: "50-tonne bridge girder load" },
      { fromVal: "980,665 N", toVal: "980.67 kN", extra: "100.000 tonf (m)", extra2: "100 metric tonne structural test ram" },
      { fromVal: "2,500,000 N", toVal: "2,500.00 kN", extra: "254.929 tonf (m)", extra2: "Heavy forging press" },
      { fromVal: "5,000,000 N", toVal: "5,000.00 kN", extra: "509.858 tonf (m)", extra2: "Deep pile foundation proof load" },
      { fromVal: "9,806,650 N", toVal: "9,806.65 kN", extra: "1,000.000 tonf (m)", extra2: "1,000 metric tonne heavy structural benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of N to tonf m Conversion",
    items: [
      {
        title: "International Heavy Crane & Rigging Specs",
        text: "European and Asian crane manufacturers rate boom lift capacities in metric tonnes-force, requiring conversion from SI sensors calibrated in kN."
      },
      {
        title: "Marine & Ship Anchor Testing",
        text: "Shipyard bollard pull tests and anchor chain proof loads are published in metric tons-force."
      },
      {
        title: "Hydraulic Machinery & Injection Molding",
        text: "Injection molding machine clamping force is rated in metric tons-force across international manufacturing markets."
      },
      {
        title: "Civil Engineering Load Testing",
        text: "Bridge load ratings, foundation pile testing, and concrete pre-stressing jack loads in metric nations utilize metric tons-force."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing metric ton-force (9,807 N) with US short ton-force (8,896 N); metric ton-force is ~10.2% larger.",
      "Conflating metric ton-mass (1,000 kg) with metric ton-force (9,806.65 N) in dynamic physics equations.",
      "Using rounded gravity (10 m/s²) instead of 9.80665 m/s² in certified structural proof calculations."
    ]
  },
  faqs: [
    {
      question: "How many metric tons-force are in 1 newton?",
      answer: "One newton equals approximately 0.00010197162 metric tons-force (tonf m)."
    },
    {
      question: "How many newtons are in 1 metric ton-force?",
      answer: "One metric ton-force equals exactly 9,806.65 newtons (9.80665 kilonewtons)."
    },
    {
      question: "What is the difference between metric ton-force and US short ton-force?",
      answer: "1 metric ton-force = 9,806.65 N (~2,204.6 lbf), whereas 1 US short ton-force = 8,896.44 N (2,000 lbf)."
    },
    {
      question: "How do I convert kilonewtons (kN) to metric tons-force?",
      answer: "Divide the kN value by 9.80665. For example, 98.0665 kN / 9.80665 = 10 tonf (m)."
    },
    {
      question: "Is megapond (Mp) the same as metric ton-force?",
      answer: "Yes, 1 megapond (Mp) is identical to 1 metric ton-force (9,806.65 N)."
    },
    {
      question: "How many kilograms-force (kgf) make 1 metric ton-force?",
      answer: "There are exactly 1,000 kilograms-force in 1 metric ton-force."
    },
    {
      question: "Why is metric ton-force deprecated in modern SI standards?",
      answer: "Because it depends on Earth's gravitational acceleration. Modern SI standards strictly recommend using kilonewtons (kN) or meganewtons (MN)."
    },
    {
      question: "How many pounds-force equal 1 metric ton-force?",
      answer: "One metric ton-force equals approximately 2,204.6226 pounds-force (lbf)."
    }
  ],
  relatedList: [
    { label: "Newton to Ton-force US", from: "newton", to: "ton-force-us" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Meganewton", from: "newton", to: "meganewton" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" },
    { label: "Newton to Sthene", from: "newton", to: "sthene" }
  ],
  references: [
    "CGPM Resolution 2 of 1901: Standard acceleration due to gravity",
    "BIPM SI Brochure: Non-SI units accepted for use with SI",
    "ISO 80000-4: Quantities and units — Mechanics"
  ]
};
