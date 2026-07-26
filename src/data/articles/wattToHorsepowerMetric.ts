import { CustomArticleData } from "./types";

export const wattToHorsepowerMetric: CustomArticleData = {
  fromUnitId: "watt",
  toUnitId: "horsepower-metric",
  seoTitle: "Watt to Horsepower (Metric) Converter (W to PS)",
  metaDescription: "Convert Watts to Metric Horsepower (W to PS / ch) accurately. Learn the 735.49875 W conversion factor, automotive engine formulas, and FAQs.",
  h1: "Watt to Metric Horsepower Converter",
  introduction: [
    "The Watt (W) and Metric Horsepower (commonly abbreviated as PS from German Pferdestärke, ch from French cheval-vapeur, or pk from Dutch paardenkracht) are essential power units used in automotive engineering, vehicle testing, and industrial equipment specification throughout continental Europe, Japan, and South America.",
    "While the Watt is the international SI standard unit equal to one Joule per second, Metric Horsepower was historically defined in the metric system as the power required to lift a mass of 75 kilograms vertically against Earth's standard gravity at a velocity of one meter per second (75 kgf·m/s).",
    "By exact physical definition, one metric horsepower equals 735.49875 Watts (approximately 0.7355 kW). Converting Watts to Metric Horsepower requires dividing the power in Watts by 735.49875. This technical guide explains the physical derivation of metric horsepower, provides step-by-step automotive engine conversion examples, offers comprehensive conversion tables, and compares metric horsepower with imperial mechanical horsepower."
  ],
  quickAnswer: {
    text: "To convert Watts to Metric Horsepower (PS), divide the power value in Watts by 735.49875. For example, a 73,550 Watt (73.55 kW) engine rating converts to exactly 100 PS.",
    formulaDisplay: "PS = W ÷ 735.49875",
    subtext: "1 Watt is equal to approximately 0.001359622 Metric Horsepower."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the universal SI unit of power, quantifying energy flow at a rate of one Joule per second (1 J/s). It is used globally across electrical, mechanical, and thermodynamic physics."
  },
  aboutTargetUnit: {
    title: "Understanding Metric Horsepower (PS / ch)",
    text: "Metric Horsepower (symbol: PS, ch, pk, CV, or hk) is defined as 75 kilogram-force meters per second (75 kgf·m/s), which equates exactly to 735.49875 Watts (0.73549875 kW). It remains the official legal automotive power rating unit under DIN 70020 standards in Germany and across European, East Asian, and South American automotive markets."
  },
  relationship: "The exact metric relationship between watts and metric horsepower is 1 PS = 735.49875 W = 0.73549875 kW. Conversely, 1 W ≈ 0.0013596216 PS.",
  relationshipTitle: "Watt vs Metric Horsepower Scale Comparison",
  relationshipItems: [
    { label: "1 W", value: "0.001360 PS (Minimal electrical load)" },
    { label: "735.5 W", value: "1.0 PS (1 Metric Horsepower baseline)" },
    { label: "3,677.5 W", value: "5.0 PS (Small European scooter engine)" },
    { label: "73,550 W", value: "100.0 PS (Standard European hatchback car engine)" },
    { label: "367,749 W", value: "500.0 PS (High-performance European sports car)" }
  ],
  formula: {
    text: "Divide the power in Watts by 735.49875 to obtain the power in Metric Horsepower.",
    math: "PS = W / 735.49875",
    subtext: "To convert Metric Horsepower back to Watts, multiply the PS value by 735.49875."
  },
  formulaTitle: "Watt to Metric Horsepower Conversion Formula",
  practicalTip: {
    title: "Kilowatt to PS Quick Rule",
    text: "Since 1 kW = 1,000 W and 1 PS = 735.5 W, 1 kW equals approximately 1.3596 PS. Multiply kilowatts by 1.36 to estimate Metric Horsepower quickly."
  },
  expertNote: {
    title: "DIN 70020 Standard",
    text: "European automobile manufacturers (e.g., German DIN standards) quote vehicle power output in PS (Pferdestärke). 1 PS is about 1.4% smaller than 1 imperial mechanical hp (745.7 W)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Car Engine",
        subtitle: "Convert an 110,000 Watt (110 kW) engine power rating to Metric Horsepower (PS).",
        steps: [
          "Identify power in Watts: 110,000 W.",
          "Apply formula: PS = 110,000 ÷ 735.49875.",
          "Calculate: 110,000 ÷ 735.49875 = 149.558.",
          "Result: 110,000 Watts equals approximately 149.56 PS (commonly marketed as 150 PS)."
        ]
      },
      {
        title: "Example 2: German Electric Vehicle Motor",
        subtitle: "Convert a 220,000 Watt (220 kW) EV electric drive rating to Metric Horsepower.",
        steps: [
          "Identify power: 220,000 W.",
          "Divide by 735.49875: 220,000 ÷ 735.49875 = 299.117.",
          "Result: 220,000 Watts equals approximately 299.12 PS (marketed as 300 PS)."
        ]
      },
      {
        title: "Example 3: Motorcycle Engine Rating",
        subtitle: "Convert a 35,000 Watt motorcycle engine output into Metric Horsepower.",
        steps: [
          "Identify power: 35,000 W.",
          "Divide by 735.49875: 35,000 ÷ 735.49875 = 47.5867.",
          "Result: 35,000 Watts equals approximately 47.59 PS."
        ]
      }
    ]
  },
  table: {
    title: "Watt to Metric Horsepower Conversion Table",
    headers: ["Watts (W)", "Metric Horsepower (PS / ch)", "Kilowatt Equivalent (kW)"],
    rows: [
      { fromVal: "1 W", toVal: "0.001360 PS", extra: "0.001 kW" },
      { fromVal: "100 W", toVal: "0.135962 PS", extra: "0.1 kW" },
      { fromVal: "735.5 W", toVal: "1.000000 PS", extra: "0.7355 kW (1 Metric HP)" },
      { fromVal: "1,471 W", toVal: "2.000000 PS", extra: "1.471 kW" },
      { fromVal: "3,677.5 W", toVal: "5.000000 PS", extra: "3.6775 kW (Moped / scooter engine)" },
      { fromVal: "7,355 W", toVal: "10.00000 PS", extra: "7.355 kW" },
      { fromVal: "36,775 W", toVal: "50.00000 PS", extra: "36.775 kW (Economy motorcycle)" },
      { fromVal: "73,550 W", toVal: "100.0000 PS", extra: "73.55 kW (100 PS hatchback car)" },
      { fromVal: "147,100 W", toVal: "200.0000 PS", extra: "147.1 kW (200 PS sedan)" },
      { fromVal: "367,749 W", toVal: "500.0000 PS", extra: "367.75 kW (500 PS supercar)" }
    ]
  },
  applications: {
    title: "Applications of W to PS Conversion",
    items: [
      {
        title: "Automotive Homologation & Specification Sheets",
        text: "European Union regulation requires electric vehicle motor ratings in kilowatts/watts, but consumer brochures in Germany, France, and Japan list power in PS/ch alongside kW."
      },
      {
        title: "Dyno Testing & Engine Calibration",
        text: "Engine dynamometers calibrated in metric units measure torque and RPM to compute mechanical power in Watts, which software converts to PS for DIN power certification."
      },
      {
        title: "International Vehicle Import/Export",
        text: "Automotive importers convert engine ratings between kW/W, PS (metric horsepower), and imperial hp to ensure tax bracket compliance and accurate marketing."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Metric Horsepower (PS = 735.5 W) with Mechanical Horsepower (hp = 745.7 W): PS is approximately 1.39% smaller than imperial hp.",
      "Assuming 1 kW equals 1 PS: 1 kW actually equals 1.3596 PS. Confusing kW with PS leads to significant underestimation of motor power.",
      "Ignoring transmission losses when comparing engine brake power (BHP) in PS with wheel power."
    ]
  },
  faqs: [
    {
      question: "How many Watts are in 1 Metric Horsepower (PS)?",
      answer: "There are exactly 735.49875 Watts in 1 Metric Horsepower."
    },
    {
      question: "What is the abbreviation PS?",
      answer: "PS stands for Pferdestärke, the German word for metric horsepower. In French it is ch (cheval-vapeur), and in Dutch pk (paardenkracht)."
    },
    {
      question: "What is the formula to convert Watts to Metric Horsepower?",
      answer: "The formula is: PS = Watts ÷ 735.49875."
    },
    {
      question: "How many PS is 100 kW (100,000 W)?",
      answer: "100,000 Watts equals approximately 135.96 PS (100,000 ÷ 735.49875)."
    },
    {
      question: "Which is bigger: 1 hp or 1 PS?",
      answer: "1 Mechanical Horsepower (hp = 745.7 W) is larger than 1 Metric Horsepower (PS = 735.5 W) by about 1.39%."
    },
    {
      question: "How do I convert PS back to Watts?",
      answer: "Multiply the PS value by 735.49875 (e.g., 200 PS × 735.49875 = 147,099.75 W)."
    },
    {
      question: "Why do European cars list power in PS?",
      answer: "PS is the standard automotive metric under German DIN 70020 and European traditions established before SI units became mandatory."
    },
    {
      question: "How many PS is 1 Kilowatt?",
      answer: "1 Kilowatt (1,000 W) equals approximately 1.359622 PS."
    }
  ],
  relatedList: [
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" },
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Watt to BTU per Hour", from: "watt", to: "btu-per-hour" }
  ],
  references: [
    "DIN 70020: Automotive Engineering Power Ratings (Deutsches Institut für Normung).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "BIPM Le Système international d'unités (SI Brochure)."
  ]
};
