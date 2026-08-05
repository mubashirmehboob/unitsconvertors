import { CustomArticleData } from "./types";

export const newtonToSthene: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "sthene",
  seoTitle: "Newton to Sthene Converter (N to sn)",
  metaDescription: "Convert newtons to sthenes (N to sn) accurately. Learn MTS system physics history, exact 1:1 kilonewton equivalence, conversion formulas, and tables.",
  h1: "Newton to Sthene Converter",
  introduction: [
    "The newton (N) and the sthene (sn) are coherent units of force belonging to the SI system and the historical French MTS (metre-tonne-second) system of units, respectively.",
    "First introduced in France in 1919 and adopted by the Soviet Union in 1933, the sthene was designed for large-scale industrial mechanics. By definition, 1 sthene accelerates a mass of 1 metric tonne (1,000 kg) at a rate of 1 meter per second squared.",
    "Because 1 sthene equals exactly 1,000 newtons (1 kilonewton), converting newtons to sthenes requires simply dividing by 1,000."
  ],
  quickAnswer: {
    text: "To convert newtons to sthenes, divide the value by 1,000. For example, 5,000 N equals exactly 5 sthenes (5 sn).",
    formulaDisplay: "sn = N / 1,000",
    subtext: "1 sthene is mathematically identical to 1 kilonewton (1 sn = 1 kN = 1,000 N)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the standard SI derived unit of force. Defined by Newton's second law of motion (F = ma), 1 newton is the force necessary to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Sthene (sn)",
    text: "The sthene (symbol: sn, from Greek 'sthenos' meaning strength) is the unit of force in the metre-tonne-second (MTS) system of units. Defined as 1 tonne·m/s², 1 sthene equals exactly 1,000 N (1 kN). Associated MTS pressure units include the pieze (1 sthene/m² = 1 kPa)."
  },
  relationship: "Since 1 metric tonne equals 1,000 kg, 1 sthene (1 tonne·m/s²) equals 1,000 kg·m/s², which is exactly 1,000 newtons (1 kilonewton). Therefore, 1 N = 0.001 sn (10⁻³ sn).",
  relationshipTitle: "Newton vs Sthene System Benchmark",
  relationshipItems: [
    { label: "1 Newton (N)", value: "0.001 sn" },
    { label: "1 Sthene (sn)", value: "1,000 N (1 kN)" },
    { label: "1 Pieze (sthene/m²)", value: "1,000 Pa (1 kPa)" },
    { label: "1 Sthene in lbf", value: "≈ 224.8089 lbf" }
  ],
  formula: {
    text: "Divide the force in newtons by 1,000 to convert to sthenes.",
    math: "sn = N / 1,000",
    subtext: "Alternatively: sn = N × 10⁻³."
  },
  formulaTitle: "Newton to Sthene Conversion Formula",
  practicalTip: {
    title: "1:1 Kilonewton Rule",
    text: "Because 1 sthene equals exactly 1 kilonewton (1 sn = 1 kN), any value expressed in kilonewtons can be directly substituted as sthenes without numerical modification."
  },
  expertNote: {
    title: "History of the MTS System",
    text: "The MTS system was legally established in France in 1919 and used extensively in industrial engineering, naval architecture, and Soviet industry until it was officially superseded by the International System of Units (SI) in 1960."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 12,500 Newtons",
        subtitle: "Convert a mechanical press load of 12,500 N into sthenes.",
        steps: [
          "Identify the force in newtons: 12,500 N.",
          "Apply the conversion formula: sn = 12,500 / 1,000.",
          "Calculate: 12,500 / 1,000 = 12.5.",
          "Result: 12,500 N is equal to exactly 12.5 sthenes (12.5 sn)."
        ]
      },
      {
        title: "Example 2: Historical Soviet Blueprint (250,000 N)",
        subtitle: "Convert 250,000 N of structural thrust into sthenes.",
        steps: [
          "Identify the force: 250,000 N.",
          "Divide by 1,000: 250,000 / 1,000 = 250.",
          "Result: 250,000 N corresponds to 250 sn (250 kN)."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Sthene Quick Reference Table",
    headers: ["Newtons (N)", "Sthenes (sn)", "Kilonewtons (kN)", "Historical / Physics Context"],
    rows: [
      { fromVal: "100 N", toVal: "0.10 sn", extra: "0.10 kN", extra2: "Small mechanical actuator" },
      { fromVal: "500 N", toVal: "0.50 sn", extra: "0.50 kN", extra2: "Ergonomic pull force" },
      { fromVal: "1,000 N", toVal: "1.00 sn", extra: "1.00 kN", extra2: "1 sthene benchmark (1 tonne at 1 m/s²)" },
      { fromVal: "2,500 N", toVal: "2.50 sn", extra: "2.50 kN", extra2: "Light winch capacity" },
      { fromVal: "5,000 N", toVal: "5.00 sn", extra: "5.00 kN", extra2: "Industrial clamp force" },
      { fromVal: "10,000 N", toVal: "10.00 sn", extra: "10.00 kN", extra2: "Weight force of ~1 metric tonne on Earth (~9.81 kN)" },
      { fromVal: "25,000 N", toVal: "25.00 sn", extra: "25.00 kN", extra2: "Structural tie-down tension" },
      { fromVal: "50,000 N", toVal: "50.00 sn", extra: "50.00 kN", extra2: "Commercial elevator cable tension" },
      { fromVal: "100,000 N", toVal: "100.00 sn", extra: "100.00 kN", extra2: "Beam shear load benchmark" },
      { fromVal: "1,000,000 N (1 MN)", toVal: "1,000.00 sn", extra: "1,000.00 kN", extra2: "1 megasthene (1 Msn) / 1 MN" }
    ]
  },
  applications: {
    title: "Practical Applications of N to sn Conversion",
    items: [
      {
        title: "Historical Engineering & Archival Translation",
        text: "Translating French, Soviet, and European engineering documents published between 1919 and 1960 into modern SI newtons."
      },
      {
        title: "MTS Unit System Comparative Analysis",
        text: "Physics history and measurement science coursework analyzing coherent unit systems (CGS vs FPS vs MTS vs SI)."
      },
      {
        title: "Naval Architecture & Hydrodynamics Research",
        text: "Historical ship propulsion literature and dam hydraulic calculations specified in sthenes and piezes."
      },
      {
        title: "Structural Civil Engineering",
        text: "Because 1 sn = 1 kN, sthenes offer a direct conceptual match for civil engineers managing kilonewton structural loads."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing when converting N to sn.",
      "Confusing sthene (sn, force) with pieze (pz, pressure) or stere (st, volume).",
      "Treating sthene as a non-metric unit; the sthene was a fully metric unit derived from the metre and metric tonne."
    ]
  },
  faqs: [
    {
      question: "How many sthenes are in 1 newton?",
      answer: "One newton equals 0.001 sthenes (1/1,000th of a sthene)."
    },
    {
      question: "How many newtons are in 1 sthene?",
      answer: "There are exactly 1,000 newtons in 1 sthene."
    },
    {
      question: "Is 1 sthene equal to 1 kilonewton?",
      answer: "Yes, 1 sthene (sn) is mathematically identical to 1 kilonewton (1 kN = 1,000 N)."
    },
    {
      question: "What system of units does the sthene belong to?",
      answer: "The sthene belongs to the French metre-tonne-second (MTS) system of units, introduced in 1919."
    },
    {
      question: "What is the physical definition of a sthene?",
      answer: "A sthene is defined as the force required to accelerate a mass of 1 metric tonne (1,000 kg) at 1 meter per second squared."
    },
    {
      question: "Is the sthene still used today?",
      answer: "No, the MTS system was superseded by the SI system in 1960. Today, kilonewtons (kN) are used instead."
    },
    {
      question: "How many pounds-force equal 1 sthene?",
      answer: "One sthene equals approximately 224.80894 pounds-force (lbf)."
    },
    {
      question: "What was the pressure unit derived from the sthene?",
      answer: "The pieze (pz), defined as 1 sthene per square meter, which equals 1 kilopascal (1 kPa)."
    }
  ],
  relatedList: [
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Meganewton", from: "newton", to: "meganewton" },
    { label: "Newton to Ton-force Metric", from: "newton", to: "ton-force-metric" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" }
  ],
  references: [
    "French Law of July 2, 1919: Units of Measurement (MTS System)",
    "BIPM SI Brochure: History of Coherent Unit Systems",
    "ISO 80000-4: Quantities and units — Mechanics"
  ]
};
