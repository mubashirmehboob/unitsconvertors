import { CustomArticleData } from "./types";

export const kilometerToRod: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "rod",
  seoTitle: "Kilometer to Rod Converter | km to rd",
  metaDescription: "Convert kilometers to rods (km to rd) with exact precision. Includes the official conversion formula, manual calculation steps, conversion table, and FAQs.",
  h1: "Kilometer to Rod Converter",
  introduction: [
    "Converting kilometers (km) to rods (rd) bridges modern metric road and land measurements with traditional Anglo-American land-surveying units. While the kilometer is the global standard for geographic distance, civil infrastructure, and transportation networks, the rod remains a foundational legal unit in historic property deeds, agricultural fence boundaries, and municipal rights-of-way throughout North America and the United Kingdom.",
    "This technical guide explains the mathematical and physical relationship between kilometers and rods. You will find the exact conversion coefficient defined under international metrology standards, step-by-step manual calculation procedures, worked practical examples, and an extensive reference table for land surveying and real estate analysis."
  ],
  quickAnswer: {
    text: "One kilometer is equal to approximately 198.83878 rods. Conversely, one standard international rod is defined as exactly 0.0050292 kilometers (or 5.0292 meters).",
    formulaDisplay: "1 km = 198.83878 rd",
    subtext: "To convert kilometers to rods, multiply the kilometer value by 1,000 and divide by 5.0292 (or multiply kilometers directly by 198.8387815)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is a standard decimal multiple of the meter within the International System of Units (SI). Defined as exactly 1,000 meters, it represents the primary unit for measuring geographical distances, transportation infrastructure, and territorial boundaries in almost every country worldwide. The baseline meter itself is physically anchored to the universal speed of light in a vacuum ($1/299,792,458$ of a second), ensuring that the kilometer is entirely invariant, reproducible, and internationally recognized."
  },
  aboutTargetUnit: {
    title: "Understanding the Rod (rd)",
    text: "The rod (also historically termed a pole or perch) is a traditional unit of length in the British Imperial and US Customary systems. Originating in medieval England as the length of a wooden measuring staff used to align plowing oxen, it was formally standardized as 16.5 feet (5.5 yards, or 1/4 of a chain). Under the International Yard and Pound Agreement of 1959, the rod was legally fixed at exactly 5.0292 meters, establishing an exact mathematical bridge between historic cadastral surveys and modern metric cartography."
  },
  relationship: "The kilometer and the rod share an exact mathematical ratio defined through the international foot. Because one kilometer equals 1,000 meters and one rod equals exactly 5.0292 meters, one kilometer contains exactly 1,000 / 5.0292 = 198.838781516 rods.",
  relationshipItems: [
    { label: "Kilometers to Rods", value: "1 km ≈ 198.8387815 rd" },
    { label: "Rods to Kilometers", value: "1 rd = 0.0050292 km (5.0292 m)" },
    { label: "Rods per Mile", value: "1 statute mile = 320 rd (1.609344 km)" },
    { label: "Rods per Chain", value: "1 chain = 4 rd (20.1168 m)" }
  ],
  formula: {
    text: "To convert kilometers to rods, multiply the distance in kilometers by 1,000 to obtain meters, then divide by the exact rod length of 5.0292 meters. Alternatively, multiply the kilometer value directly by 198.8387815.",
    math: "Rods (rd) = (Kilometers (km) × 1,000) / 5.0292",
    subtext: "Using the fractional divisor 5.0292 preserves precision when interpreting legal land surveys and deed boundaries."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Surveying an Agricultural Easement",
        subtitle: "Convert a 2.5-kilometer rural utility corridor into rods.",
        steps: [
          "Identify the starting measurement: 2.5 kilometers.",
          "Convert kilometers to meters: 2.5 × 1,000 = 2,500 meters.",
          "Apply the exact rod divisor: 2,500 / 5.0292 = 497.09695 rods.",
          "State the final result: 2.5 kilometers is equal to approximately 497.10 rods."
        ]
      },
      {
        title: "Example 2: Interpreting a Boundary Line on Topographic Maps",
        subtitle: "Convert a 0.75-kilometer fence line into rods.",
        steps: [
          "Identify the starting measurement: 0.75 kilometers.",
          "Convert kilometers to meters: 0.75 × 1,000 = 750 meters.",
          "Apply the exact rod divisor: 750 / 5.0292 = 149.12909 rods.",
          "State the final result: 0.75 kilometers is equal to approximately 149.13 rods."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Rod Conversion Reference Table",
    headers: ["Kilometers (km)", "Rods (rd)", "Meters Equivalent", "Statute Mile Equivalent"],
    rows: [
      { fromVal: "0.01", toVal: "1.9884", extra: "10 m", extra2: "0.00621 mi" },
      { fromVal: "0.05", toVal: "9.9419", extra: "50 m", extra2: "0.03107 mi" },
      { fromVal: "0.1", toVal: "19.8839", extra: "100 m", extra2: "0.06214 mi" },
      { fromVal: "0.201168", toVal: "40.0000", extra: "201.168 m", extra2: "0.125 mi (1 Furlong)" },
      { fromVal: "0.5", toVal: "99.4194", extra: "500 m", extra2: "0.31069 mi" },
      { fromVal: "1", toVal: "198.8388", extra: "1,000 m", extra2: "0.62137 mi" },
      { fromVal: "1.609344", toVal: "320.0000", extra: "1,609.344 m", extra2: "1.00000 mi (Exactly 1 Mile)" },
      { fromVal: "2", toVal: "397.6776", extra: "2,000 m", extra2: "1.24274 mi" },
      { fromVal: "5", toVal: "994.1939", extra: "5,000 m", extra2: "3.10686 mi" },
      { fromVal: "10", toVal: "1,988.3878", extra: "10,000 m", extra2: "6.21371 mi" },
      { fromVal: "25", toVal: "4,970.9695", extra: "25,000 m", extra2: "15.53428 mi" },
      { fromVal: "50", toVal: "9,941.9391", extra: "50,000 m", extra2: "31.06856 mi" }
    ]
  },
  applications: {
    title: "Practical Real-World Applications",
    items: [
      {
        title: "Cadastral Surveying & Land Title Research",
        text: "Professional surveyors and title searchers frequently encounter metes-and-bounds deed descriptions written in rods, perches, or poles. When reconciling historical deed maps with modern metric GPS coordinates, converting kilometers to rods allows surveyors to verify ancient perimeter calls."
      },
      {
        title: "Agricultural Fencing & Pasture Layout",
        text: "Agricultural wire fencing and livestock enclosure panels are traditionally sold and installed in 40-rod (one-furlong, or 660-foot) increments. Ranch managers planning perimeter fencing from metric satellite imagery convert kilometers to rods to calculate roll counts and post spacing."
      },
      {
        title: "Canal, Pipeline, & Rail Right-of-Way Management",
        text: "Historic railroad corridors and canal towpaths across the eastern United States and Canada were legally established with standard widths and alignments defined in rods (such as 4-rod or 66-foot easements). Modern infrastructure engineers convert metric alignment data back to rods to verify right-of-way compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing rods with yards or chains: A rod is exactly 5.5 yards (16.5 feet), whereas a chain is 4 rods (66 feet) and a yard is 3 feet. Mistaking rods for yards produces an error of over 450%.",
      "Treating poles and perches as different units: In historical English land measurement, the terms 'rod', 'pole', and 'perch' refer to the exact same physical length (16.5 feet or 5.0292 meters).",
      "Premature rounding of the conversion factor: Using 200 instead of 198.8388 introduces a cumulative error of nearly 6 rods (approx. 30 meters) for every 5 kilometers surveyed.",
      "Overlooking US Survey Foot discrepancies: For very large cadastral surveys in the United States, historical deeds may have referenced the US Survey Foot (1200/3937 m) rather than the International Foot, creating a small difference of 2 parts per million."
    ]
  },
  faqs: [
    {
      question: "How many rods are in one kilometer?",
      answer: "There are approximately 198.83878 rods in one kilometer. This is derived by taking 1,000 meters and dividing by the exact international rod length of 5.0292 meters."
    },
    {
      question: "What is the exact formula to convert kilometers to rods?",
      answer: "The formula is: Rods = (Kilometers × 1,000) / 5.0292. Alternatively, you can multiply the kilometer value directly by 198.8387815."
    },
    {
      question: "What is the physical origin of the rod measurement?",
      answer: "The rod originated in medieval England as the length of a wooden measuring stick used to control teams of oxen during plowing. It was later standardized as 5.5 yards or 16.5 feet."
    },
    {
      question: "Are rods, poles, and perches the same measurement?",
      answer: "Yes. In traditional land surveying, 'rod', 'pole', and 'perch' are interchangeable terms that all denote a linear distance of 16.5 feet (5.0292 meters)."
    },
    {
      question: "How many rods are in a standard statute mile?",
      answer: "There are exactly 320 rods in one statute mile. Because one mile is 1.609344 kilometers, 1.609344 × 198.8387815 equals exactly 320 rods."
    },
    {
      question: "Why do modern land surveyors still use rods?",
      answer: "Surveyors use rods when reviewing historical property deeds and boundary descriptions created before the widespread adoption of modern metric and decimal-foot standards."
    },
    {
      question: "How do I convert 5 kilometers to rods?",
      answer: "Multiply 5 by 1,000 to get 5,000 meters, then divide by 5.0292. The calculation yields 5,000 / 5.0292 = 994.1939 rods."
    },
    {
      question: "What is the relationship between a rod and a chain?",
      answer: "There are exactly 4 rods in one standard Gunter's chain (66 feet). Therefore, 1 chain equals 4 rods, and 80 chains equal one statute mile (320 rods)."
    },
    {
      question: "What is the standard abbreviation for a rod?",
      answer: "The standard abbreviation is 'rd'. In historical deeds, it is sometimes written as 'r.', 'p.' (pole/perch), or spelled out fully."
    },
    {
      question: "How many meters is one rod?",
      answer: "One standard international rod is legally defined as exactly 5.0292 meters (16.5 international feet × 0.3048 meters per foot)."
    }
  ],
  relatedList: [
    { label: "Rod to Kilometer", from: "rod", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Meter to Rod", from: "meter", to: "rod" },
    { label: "Mile to Rod", from: "mile", to: "rod" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) Special Publication 811.",
    "BIPM SI Brochure (9th Edition) - Quantities and Units of Length.",
    "British Weights and Measures Act of 1824."
  ]
};
