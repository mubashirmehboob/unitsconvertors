import { CustomArticleData } from "./types";

export const kilowattToHorsepowerMetric: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "horsepower-metric",
  seoTitle: "Kilowatt to Horsepower (Metric) Converter (kW to PS / cv)",
  metaDescription: "Convert kilowatts to metric horsepower (kW to PS / cv / pk) with exact engineering precision. Formulas, motor calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilowatt-to-horsepower-metric",
  h1: "Kilowatt to Metric Horsepower Converter",
  introduction: [
    "The kilowatt (kW) and metric horsepower (commonly abbreviated as PS from German 'Pferdestärke', cv from French 'cheval-vapeur', or pk from Dutch 'paardenkracht') are primary units used across continental Europe, Japan, and international automotive markets to measure engine power and motor capacity. While the kilowatt is the official International System of Units (SI) measure, metric horsepower remains the traditional standard for consumer vehicle ratings outside North America.",
    "Converting kilowatts to metric horsepower translates modern SI power into the metric gravitational system. By international standard (DIN 66036 and ISO), one metric horsepower is defined as the power required to raise a mass of 75 kilograms against Earth's standard gravitational acceleration (9.80665 m/s²) at a velocity of one meter per second (75 kgf·m/s). This evaluates to exactly 735.49875 Watts (0.73549875 kW). Therefore, one kilowatt equals approximately 1.359622 metric horsepower.",
    "This technical reference provides the exact conversion formula, worked step-by-step vehicle power calculations, comprehensive conversion tables, European automotive applications, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert kilowatts to metric horsepower (PS / cv), divide the kilowatt value by 0.73549875 (or multiply by approximately 1.359622). For example, a 110 kW engine produces approximately 149.56 metric horsepower (150 PS).",
    formulaDisplay: "PS = kW ÷ 0.73549875 = kW × 1.359622",
    subtext: "1 kilowatt is equal to approximately 1.359622 metric horsepower (PS / DIN)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an official decimal multiple of the SI unit Watt, equivalent to 1,000 Joules of energy transferred per second (1,000 J/s). As a coherent SI unit free from local gravitational variations, kilowatts represent the legally mandated standard for declaring vehicle power across the European Union (EU Directive 80/181/EEC) and most developed nations."
  },
  aboutTargetUnit: {
    title: "Understanding Metric Horsepower (PS / cv / pk)",
    text: "Metric horsepower (symbol: PS, cv, or hk) was created in nineteenth-century Europe to adapt James Watt's imperial concept to the metric decimal system. Defined as the work rate of 75 kilopond-meters per second (75 kgf·m/s = 75 × 9.80665 N·m/s = 735.49875 W), it is approximately 1.39% lower in power than imperial mechanical horsepower (745.7 W). It is extensively used by European and Asian car manufacturers."
  },
  relationship: "Because 1 metric horsepower equals exactly 0.73549875 kW, 1 kilowatt equals 1 / 0.73549875 ≈ 1.35962162 PS. A kilowatt produces nearly 36% more power than a single metric horsepower.",
  relationshipTitle: "Kilowatt to Metric Horsepower Equivalence",
  relationshipItems: [
    { label: "0.7355 kW", value: "1.0 PS (Base metric horsepower unit)" },
    { label: "1.0 kW", value: "1.360 PS (Standard 1 kW electrical generator)" },
    { label: "55.0 kW", value: "74.78 PS (Compact city hatchback rating)" },
    { label: "110.0 kW", value: "149.56 PS (Standard 150 PS European sedan)" },
    { label: "220.0 kW", value: "299.12 PS (300 PS sports performance vehicle)" }
  ],
  formula: {
    text: "Divide the power in kilowatts by 0.73549875 to determine the power in metric horsepower.",
    math: "PS = kW / 0.73549875",
    subtext: "Alternatively: PS = kW × 1.359622"
  },
  formulaTitle: "Kilowatt to Metric Horsepower Formula",
  practicalTip: {
    title: "Quick German DIN Estimation Rule",
    text: "Multiply the kilowatt rating by 1.36 to find PS in your head within 0.03% accuracy (e.g., 100 kW × 1.36 = 136 PS; exact: 135.96 PS)."
  },
  expertNote: {
    title: "DIN 70020 vs SAE Gross Horsepower",
    text: "Metric horsepower in Europe is measured strictly as net installed power under DIN 70020 / ECE regulations with all vehicle ancillaries (alternator, water pump, exhaust) connected, ensuring direct parity with modern ISO kW ratings."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Passenger Car Specification",
        subtitle: "Convert a turbocharged 1.5-liter engine rated at 110 kW into metric horsepower (PS).",
        steps: [
          "Identify the kilowatt rating: 110 kW.",
          "Apply the formula: PS = 110 ÷ 0.73549875.",
          "Calculate: 110 ÷ 0.73549875 = 149.5583 PS.",
          "Result: 110 kW corresponds to a 150 PS marketing rating (149.56 PS exact)."
        ]
      },
      {
        title: "Example 2: Commercial Delivery Van Turbodiesel",
        subtitle: "Convert an 85 kW light commercial van power output into metric horsepower.",
        steps: [
          "Identify power in kW: 85 kW.",
          "Multiply by 1.359622: 85 × 1.359622 = 115.568 PS.",
          "Result: 85 kW equals approximately 115.57 metric horsepower (115 PS class)."
        ]
      },
      {
        title: "Example 3: Electric Motorized Scooter",
        subtitle: "Convert an 11 kW maximum continuous electric motorcycle rating into PS.",
        steps: [
          "Identify value: 11 kW (European A1 license limit).",
          "Calculate: 11 × 1.359622 = 14.956 PS.",
          "Result: 11 kW equals approximately 14.96 PS (15 PS legal ceiling)."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Metric Horsepower Conversion Table",
    headers: ["Kilowatts (kW)", "Metric Horsepower (PS)", "Watts (W)", "Automotive / Engineering Application"],
    rows: [
      { fromVal: "0.7355 kW", toVal: "1.00 PS", extra: "735.5 W", extra2: "Base metric horsepower definition" },
      { fromVal: "1.00 kW", toVal: "1.36 PS", extra: "1,000 W", extra2: "Small metric power equipment" },
      { fromVal: "5.50 kW", toVal: "7.48 PS", extra: "5,500 W", extra2: "Industrial metric compressor" },
      { fromVal: "11.00 kW", toVal: "14.96 PS", extra: "11,000 W", extra2: "EU A1 motorcycle regulatory limit (15 PS)" },
      { fromVal: "35.00 kW", toVal: "47.59 PS", extra: "35,000 W", extra2: "EU A2 motorcycle license restriction (48 PS)" },
      { fromVal: "55.00 kW", toVal: "74.78 PS", extra: "55,000 W", extra2: "Entry-level European supermini (75 PS)" },
      { fromVal: "70.00 kW", toVal: "95.17 PS", extra: "70,000 W", extra2: "95 PS compact diesel vehicle" },
      { fromVal: "90.00 kW", toVal: "122.37 PS", extra: "90,000 W", extra2: "120 PS family crossover" },
      { fromVal: "110.00 kW", toVal: "149.56 PS", extra: "110,000 W", extra2: "150 PS standard European family car" },
      { fromVal: "140.00 kW", toVal: "190.35 PS", extra: "140,000 W", extra2: "190 PS executive saloon turbodiesel" },
      { fromVal: "180.00 kW", toVal: "244.73 PS", extra: "180,000 W", extra2: "Hot hatchback sports vehicle (~245 PS)" },
      { fromVal: "300.00 kW", toVal: "407.89 PS", extra: "300,000 W", extra2: "High-performance sports coupe (400+ PS)" }
    ]
  },
  applications: {
    title: "Practical Applications of kW to Metric Horsepower Conversion",
    items: [
      {
        title: "European and Asian Vehicle Registration and Taxation",
        text: "Automotive registration documents (like the German Fahrzeugschein) declare engine power officially in kilowatts, while insurance companies and road-tax tiers frequently evaluate brackets in PS."
      },
      {
        title: "International Automotive Journalism and Media",
        text: "Automotive journalists convert manufacturer technical press releases from kW into PS for German, French, Italian, and Japanese publications."
      },
      {
        title: "European Driver's License Categories (A1, A2 Restrictions)",
        text: "EU motorcycle licensing frameworks mandate strict maximum power limits in kilowatts (11 kW for A1, 35 kW for A2), which riders translate into metric horsepower (15 PS and 48 PS)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing metric horsepower (PS, 735.5 W) with imperial horsepower (hp, 745.7 W): PS numbers are slightly higher than imperial hp for the same kW rating.",
      "Dividing by 1.36 instead of multiplying: Because 1 kW is larger than 1 PS, the PS value is always numerically larger than the kW value.",
      "Assuming PS and BHP are identical: Brake horsepower (BHP) typically uses the imperial 745.7 W definition unless explicitly specified as metric DIN BHP."
    ]
  },
  faqs: [
    {
      question: "How many metric horsepower (PS) are in 1 kilowatt?",
      answer: "There are approximately 1.359622 metric horsepower in 1 kilowatt."
    },
    {
      question: "What is the formula to convert kilowatts to metric horsepower?",
      answer: "The formula is: PS = kilowatts ÷ 0.73549875 (or PS = kilowatts × 1.359622)."
    },
    {
      question: "How many kilowatts are in 1 metric horsepower?",
      answer: "There are exactly 0.73549875 kilowatts (735.49875 Watts) in 1 metric horsepower."
    },
    {
      question: "What is the difference between PS and HP?",
      answer: "PS (Pferdestärke) is metric horsepower based on 75 kgf·m/s (735.5 W), whereas HP is imperial mechanical horsepower based on 550 ft·lbf/s (745.7 W). 1 HP equals approximately 1.01387 PS."
    },
    {
      question: "How do I convert 150 kW to PS?",
      answer: "150 kW × 1.359622 = 203.94 PS (approx. 204 metric horsepower)."
    },
    {
      question: "How do I convert metric horsepower back to kilowatts?",
      answer: "Multiply the PS value by 0.73549875 (for example: 100 PS × 0.7355 = 73.55 kW)."
    },
    {
      question: "Why does Germany use PS while the UK uses BHP?",
      answer: "Germany adopted the metric system and standardized Pferdestärke (DIN 66036), whereas the UK historically used the imperial system and imperial mechanical brake horsepower (BHP)."
    },
    {
      question: "How many PS is a 110 kW car engine?",
      answer: "110 kW equals 149.56 PS, which is universally marketed across Europe as a 150 PS engine."
    }
  ],
  relatedList: [
    { label: "Horsepower (Metric) to Kilowatt", from: "horsepower-metric", to: "kilowatt" },
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" },
    { label: "Kilowatt to BTU per Hour", from: "kilowatt", to: "btu-per-hour" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" }
  ],
  references: [
    "DIN 66036: Leistungssymbole — Pferdestärke (PS).",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "EU Directive 80/181/EEC on the approximation of the laws of the Member States relating to units of measurement."
  ]
};
