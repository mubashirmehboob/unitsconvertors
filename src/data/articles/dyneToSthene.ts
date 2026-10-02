import { CustomArticleData } from "./types";

export const dyneToSthene: CustomArticleData = {
  fromUnitId: "dyne",
  toUnitId: "sthene",
  seoTitle: "Dyne to Sthene Converter (dyn to sn) | UnitsConvertors.com",
  metaDescription: "Convert dynes to sthenes (dyn to sn) with historical and mathematical accuracy. Discover CGS to MTS force relationships, formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/force/dyne-to-sthene",
  h1: "Dyne to Sthene Converter",
  introduction: [
    "The dyne (dyn) and the sthene (sn) are two metric force units originating from historical variants of the metric system. The dyne was established in 1873 as the cornerstone of the centimeter-gram-second (CGS) system for laboratory physics. In contrast, the sthene was introduced in France in 1919 as the primary industrial force unit in the metre-tonne-second (MTS) system, specifically designed for heavy civil, naval, and mechanical engineering.",
    "By definition, one sthene is the force required to accelerate a mass of one metric tonne (1,000 kilograms) at a rate of one meter per second squared. This makes one sthene exactly equal to 1,000 newtons (1 kilonewton). Since one dyne equals 10⁻⁵ newtons, exactly one hundred million dynes (10⁸ dyn) constitute one sthene.",
    "To convert from dynes to sthenes, divide the dyne value by 100,000,000 (or multiply by 10⁻⁸). This article explores the historical CGS and MTS metric systems, details the exact mathematical formulas, demonstrates step-by-step conversions, and provides an authoritative reference table."
  ],
  quickAnswer: {
    text: "To convert dynes to sthenes, divide the value in dynes by 100,000,000 (10⁸) or multiply by 1 × 10⁻⁸. For example, 250,000,000 dynes equals exactly 2.5 sn.",
    formulaDisplay: "sn = dyn / 100,000,000 = dyn × 10⁻⁸",
    subtext: "1 Sthene (sn) = 100,000,000 Dynes (1 kN = 1,000 N); 1 Dyne = 0.00000001 sn."
  },
  aboutSourceUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the fundamental unit of force in the centimeter-gram-second (CGS) metric system. Formulated by the British Association for the Advancement of Science in 1873, one dyne is defined as the force that accelerates a one-gram mass by one centimeter per second squared (1 dyn = 1 g·cm/s²). Equal to exactly 10⁻⁵ newtons (0.00001 N), the dyne remains a familiar unit in fluid dynamics, interfacial surface tension (dyn/cm), and micro-mechanical research."
  },
  aboutTargetUnit: {
    title: "Understanding the Sthene (sn)",
    text: "The sthene is the coherent unit of force in the metre-tonne-second (MTS) metric system, legally adopted in France in 1919 and used widely in the Soviet Union and parts of continental Europe during the mid-twentieth century. Derived from the Greek word 'sthenos' (meaning strength or force), one sthene accelerates a mass of one metric tonne (1,000 kg) at 1 m/s² (1 sn = 1 t·m/s²). Because 1 sn equals exactly 1,000 newtons (1 kN), it served as an intuitive industrial precursor to the modern kilonewton."
  },
  relationship: "One sthene equals exactly 100,000,000 dynes (10⁸ dyn), identical in magnitude to one kilonewton (1 kN). Conversely, one dyne equals exactly 10⁻⁸ sthenes (0.00000001 sn). Converting between these units involves a direct eight-order-of-magnitude decimal shift.",
  relationshipTitle: "Dyne to Sthene Scale Breakdown",
  relationshipItems: [
    { label: "1 Dyne (dyn)", value: "0.00000001 sn (10⁻⁸ sn)" },
    { label: "100,000 Dynes", value: "0.001 sn (1 N)" },
    { label: "1,000,000 Dynes (1 Mdyn)", value: "0.01 sn (10 N)" },
    { label: "10,000,000 Dynes (10 Mdyn)", value: "0.1 sn (100 N)" },
    { label: "100,000,000 Dynes (100 Mdyn)", value: "1.0 sn (1,000 N = 1 kN)" },
    { label: "1,000,000,000 Dynes (1 Gdyn)", value: "10.0 sn (10,000 N = 10 kN)" }
  ],
  formula: {
    text: "Divide the force in dynes by 100,000,000, or multiply by 10⁻⁸, to obtain the force in sthenes.",
    math: "\\text{sn} = \\frac{\\text{dyn}}{100{,}000{,}000} = \\text{dyn} \\times 10^{-8}",
    subtext: "Inverse formula: dyn = sn × 100,000,000"
  },
  formulaTitle: "Dyne to Sthene Conversion Formula",
  practicalTip: {
    title: "Equivalence to Kilonewtons",
    text: "Remember that 1 sthene is numerically and dimensionally identical to 1 kilonewton (1 sn = 1 kN = 1,000 N). If your calculator or reference software includes kilonewtons, you can use the exact same calculation steps."
  },
  expertNote: {
    title: "Historical MTS System Context",
    text: "The MTS system was designed by French engineers who found the CGS dyne and erg far too small for civil construction and waterworks, and preferred tonnes over grams. In 1960, the 11th CGPM adopted the International System of Units (SI), superseding both MTS and CGS systems with the newton (N)."
  },
  examples: {
    title: "Step-by-Step dyn to sn Worked Examples",
    items: [
      {
        title: "Example 1: Translating Historical French Sluice Gate Load",
        subtitle: "A mid-twentieth-century French hydro-engineering archive records a hydraulic gate closure thrust of 650,000,000 dynes. Express this in sthenes.",
        steps: [
          "Identify the thrust in dynes: F = 650,000,000 dyn.",
          "Apply the conversion formula: sn = dyn / 100,000,000.",
          "Calculate: 650,000,000 / 100,000,000 = 6.5.",
          "Final Result: 650,000,000 dynes equals exactly 6.5 sthenes (6.5 kN)."
        ]
      },
      {
        title: "Example 2: Pneumatic Cylinder Test Output",
        subtitle: "A high-pressure pneumatic test cylinder delivers 18,000,000 dynes of thrust. Convert this to sthenes.",
        steps: [
          "State the value: 18,000,000 dyn.",
          "Multiply by 10⁻⁸: 18,000,000 × 0.00000001 = 0.18.",
          "Final Result: 18,000,000 dynes equals 0.18 sn (180 N)."
        ]
      },
      {
        title: "Example 3: Locomotive Coupler Proof Load",
        subtitle: "A European railway vintage coupler was proof-tested to 2,400,000,000 dynes. Express the load in sthenes.",
        steps: [
          "Identify the test load: 2,400,000,000 dyn.",
          "Divide by 100,000,000: 2,400,000,000 / 100,000,000 = 24.0.",
          "Final Result: 2.4 billion dynes corresponds to exactly 24 sthenes (24 kN)."
        ]
      }
    ]
  },
  table: {
    title: "Dyne to Sthene Conversion Table",
    headers: ["Dynes (dyn)", "Sthenes (sn)", "Kilonewtons (kN)", "Newtons (N)"],
    rows: [
      { fromVal: "1,000,000 dyn", toVal: "0.01 sn", extra: "0.01 kN", extra2: "10 N" },
      { fromVal: "5,000,000 dyn", toVal: "0.05 sn", extra: "0.05 kN", extra2: "50 N" },
      { fromVal: "10,000,000 dyn", toVal: "0.10 sn", extra: "0.10 kN", extra2: "100 N" },
      { fromVal: "50,000,000 dyn", toVal: "0.50 sn", extra: "0.50 kN", extra2: "500 N" },
      { fromVal: "100,000,000 dyn", toVal: "1.00 sn", extra: "1.00 kN", extra2: "1,000 N" },
      { fromVal: "250,000,000 dyn", toVal: "2.50 sn", extra: "2.50 kN", extra2: "2,500 N" },
      { fromVal: "500,000,000 dyn", toVal: "5.00 sn", extra: "5.00 kN", extra2: "5,000 N" },
      { fromVal: "1,000,000,000 dyn", toVal: "10.00 sn", extra: "10.00 kN", extra2: "10,000 N" },
      { fromVal: "5,000,000,000 dyn", toVal: "50.00 sn", extra: "50.00 kN", extra2: "50,000 N" },
      { fromVal: "10,000,000,000 dyn", toVal: "100.00 sn", extra: "100.00 kN", extra2: "100,000 N" }
    ]
  },
  applications: {
    title: "Practical Applications of dyn to sn Conversions",
    items: [
      {
        title: "Historical Engineering Archive Digitization",
        text: "Converting mid-twentieth-century French, Russian, and Eastern European civil and naval engineering documentation into modern SI units."
      },
      {
        title: "Hydroelectric Dam & Sluice Gate Restorations",
        text: "Analyzing vintage structural calculation notes where hydraulic forces were documented in sthenes or piezes (sn/m²)."
      },
      {
        title: "Comparative Metrology & History of Science",
        text: "Educational and research studies comparing the base units of the CGS (centimeter-gram-second) and MTS (metre-tonne-second) metric frameworks."
      },
      {
        title: "Structural Material Fracture Analysis",
        text: "Translating microscopic laboratory CGS material shear test measurements into macroscopic MTS-compatible structural loads."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Dyne to Sthene Conversions",
    items: [
      "Confusing the sthene (1,000 N) with the newton (1 N), producing a 1,000-fold calculation error.",
      "Miscounting zeros when dividing by 100,000,000 instead of shifting the decimal 8 places.",
      "Confusing the sthene (force) with the pieze (pressure in MTS, 1 pz = 1 sn/m² = 1 kPa).",
      "Assuming the sthene is an imperial unit rather than an official historical metric unit."
    ]
  },
  faqs: [
    {
      question: "How many sthenes are in 1 dyne?",
      answer: "There are exactly 0.00000001 sthenes in 1 dyne (1 × 10⁻⁸ sn)."
    },
    {
      question: "How many dynes equal 1 sthene?",
      answer: "Exactly 100,000,000 dynes (10⁸ dyn) equal 1 sthene (sn)."
    },
    {
      question: "What is the formula to convert dynes to sthenes?",
      answer: "The formula is: Sthenes (sn) = Dynes (dyn) / 100,000,000, or sn = dyn × 10⁻⁸."
    },
    {
      question: "What is a sthene?",
      answer: "A sthene (symbol: sn) is the metric unit of force in the metre-tonne-second (MTS) system, defined as the force needed to accelerate 1 metric tonne at 1 m/s² (1 sn = 1,000 N)."
    },
    {
      question: "Is 1 sthene equal to 1 kilonewton?",
      answer: "Yes, exactly. One sthene equals 1,000 newtons, which is exactly 1 kilonewton (1 sn = 1 kN)."
    },
    {
      question: "Where was the sthene used historically?",
      answer: "The sthene was legally used in France (1919–1961), the Soviet Union, and parts of continental Europe for heavy industrial, civil, and naval engineering."
    },
    {
      question: "Why was the sthene replaced?",
      answer: "In 1960, the International System of Units (SI) unified global measurement around the newton (N), making older CGS and MTS force units obsolete."
    },
    {
      question: "How do I convert 50 million dynes to sthenes?",
      answer: "Divide 50,000,000 by 100,000,000 to get exactly 0.5 sn."
    }
  ],
  relatedList: [
    { label: "Dyne to Kilonewton", from: "dyne", to: "kilonewton" },
    { label: "Dyne to Newton", from: "dyne", to: "newton" },
    { label: "Sthene to Dyne", from: "sthene", to: "dyne" },
    { label: "Sthene to Newton", from: "sthene", to: "newton" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "Loi du 2 avril 1919 sur les unités de mesure (Journal officiel de la République française).",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics."
  ]
};
