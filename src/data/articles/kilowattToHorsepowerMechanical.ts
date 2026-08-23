import { CustomArticleData } from "./types";

export const kilowattToHorsepowerMechanical: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "horsepower-mechanical",
  seoTitle: "Kilowatt to Horsepower (Mechanical) Converter (kW to hp)",
  metaDescription: "Convert kilowatts to mechanical horsepower (kW to hp) with exact engineering precision. Detailed formulas, motor calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilowatt-to-horsepower-mechanical",
  h1: "Kilowatt to Mechanical Horsepower Converter",
  introduction: [
    "The kilowatt (kW) and the mechanical horsepower (hp, also called imperial horsepower) are two primary units used worldwide to measure mechanical power output, electric motor ratings, automotive engine performance, and industrial machinery capacity. While the kilowatt is the official metric standard in the International System of Units (SI), mechanical horsepower remains deeply entrenched across North America, the UK, and global automotive and aerospace engineering.",
    "Converting kilowatts to mechanical horsepower is essential for automotive engineers, HVAC technicians, pump manufacturers, and electricians. By international engineering convention, one mechanical horsepower equals exactly 550 foot-pounds-force per second (550 ft·lbf/s), which corresponds to 745.699872 Watts or approximately 0.745699872 kilowatts. Consequently, one kilowatt equals approximately 1.341022 mechanical horsepower.",
    "This technical guide details the conversion formula, provides practical step-by-step motor and engine sizing calculations, presents a comprehensive conversion table across practical power ranges, explores industrial applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert kilowatts to mechanical horsepower (hp), divide the kilowatt value by 0.745699872 (or multiply by approximately 1.341022). For example, a 75 kW electric motor produces approximately 100.58 mechanical horsepower.",
    formulaDisplay: "hp = kW ÷ 0.745699872 = kW × 1.341022",
    subtext: "1 kilowatt is equal to approximately 1.341022 mechanical horsepower (imperial standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an official decimal multiple of the SI unit of power, the Watt, representing 1,000 Watts (10³ W) or 1,000 Joules of energy transferred per second (1 kJ/s). Widely used in power generation, electric vehicle powertrains, heavy industrial drives, and building electrical loads, the kilowatt provides a universal, coherent measure of power without gravitational dependencies."
  },
  aboutTargetUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical horsepower (symbol: hp or hp(I)), also referred to as imperial horsepower, was standardized by James Watt as the rate of performing work equal to 33,000 foot-pounds per minute (550 ft·lbf/s). Based on standard gravitational acceleration (9.80665 m/s²), 1 mechanical horsepower is legally and physically defined as exactly 745.6998715822702 Watts (approx. 0.7457 kW). It is the predominant rating unit for combustion engines and electric motors in the United States."
  },
  relationship: "Because 1 mechanical horsepower equals exactly 0.745699872 kW, 1 kilowatt equals 1 / 0.745699872 ≈ 1.34102209 hp. A kilowatt is roughly 34.1% larger in power output than a single mechanical horsepower.",
  relationshipTitle: "Kilowatt to Mechanical Horsepower Equivalence",
  relationshipItems: [
    { label: "0.7457 kW", value: "1.0 hp (1 HP electric workshop motor)" },
    { label: "1.0 kW", value: "1.341 hp (Small generator or power tool)" },
    { label: "7.457 kW", value: "10.0 hp (Industrial hydraulic pump drive)" },
    { label: "74.57 kW", value: "100.0 hp (Compact automobile engine)" },
    { label: "150.0 kW", value: "201.15 hp (Modern electric vehicle motor output)" }
  ],
  formula: {
    text: "Divide the power in kilowatts by 0.745699872 to obtain mechanical horsepower.",
    math: "hp = kW / 0.745699872",
    subtext: "Alternatively: hp = kW × 1.341022"
  },
  formulaTitle: "Kilowatt to Mechanical Horsepower Formula",
  practicalTip: {
    title: "Quick 4/3 Mental Approximation",
    text: "Because 1 kW is roughly 1.333 hp, you can quickly estimate horsepower by multiplying the kilowatt value by 4 and dividing by 3 (add about 1% for exactness). For example: 30 kW × 4/3 = 40 hp (actual exact value: 40.23 hp)."
  },
  expertNote: {
    title: "Mechanical (Imperial) vs Metric Horsepower (PS / cv)",
    text: "Be careful not to confuse mechanical horsepower (745.7 W) with metric horsepower (735.5 W, used in Germany as PS and France as cv). An 80 kW motor delivers 107.28 mechanical hp, but 108.77 metric PS."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Electric Vehicle Powertrain Rating",
        subtitle: "Convert a 150 kW dual-motor EV power rating into mechanical horsepower.",
        steps: [
          "Identify the kilowatt rating: 150 kW.",
          "Apply the conversion factor: hp = 150 ÷ 0.745699872.",
          "Calculate: 150 ÷ 0.745699872 = 201.1533 hp.",
          "Result: 150 kW is equivalent to approximately 201.15 mechanical horsepower."
        ]
      },
      {
        title: "Example 2: Industrial Water Pump Motor",
        subtitle: "Convert a 37 kW industrial centrifugal pump motor into horsepower.",
        steps: [
          "Identify power in kW: 37 kW.",
          "Multiply by 1.341022: 37 × 1.341022 = 49.6178 hp.",
          "Result: 37 kW corresponds to a standard 50 hp motor frame (49.62 hp exact)."
        ]
      },
      {
        title: "Example 3: Diesel Generator Continuous Output",
        subtitle: "Convert an 18.5 kW backup diesel generator capacity into mechanical hp.",
        steps: [
          "Identify power: 18.5 kW.",
          "Calculate: 18.5 ÷ 0.7457 = 24.81 hp.",
          "Result: 18.5 kW equals approximately 24.81 mechanical horsepower (25 hp class)."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Mechanical Horsepower Conversion Table",
    headers: ["Kilowatts (kW)", "Mechanical Horsepower (hp)", "Watts (W)", "Equipment / Industrial Application"],
    rows: [
      { fromVal: "0.37 kW", toVal: "0.50 hp", extra: "370 W", extra2: "Small bench drill press / sump pump" },
      { fromVal: "0.75 kW", toVal: "1.01 hp", extra: "750 W", extra2: "Standard 1 HP workshop motor (0.746 kW)" },
      { fromVal: "1.50 kW", toVal: "2.01 hp", extra: "1,500 W", extra2: "Heavy air compressor / table saw" },
      { fromVal: "3.00 kW", toVal: "4.02 hp", extra: "3,000 W", extra2: "Commercial pressure washer" },
      { fromVal: "5.50 kW", toVal: "7.38 hp", extra: "5,500 W", extra2: "Small agricultural pump / ventilation fan" },
      { fromVal: "7.50 kW", toVal: "10.06 hp", extra: "7,500 W", extra2: "10 HP industrial CNC spindle" },
      { fromVal: "11.00 kW", toVal: "14.75 hp", extra: "11,000 W", extra2: "Commercial refrigeration screw compressor" },
      { fromVal: "22.00 kW", toVal: "29.50 hp", extra: "22,000 W", extra2: "30 HP hydraulic power unit" },
      { fromVal: "55.00 kW", toVal: "73.76 hp", extra: "55,000 W", extra2: "Subcompact tractor PTO shaft" },
      { fromVal: "75.00 kW", toVal: "100.58 hp", extra: "75,000 W", extra2: "100 HP automotive engine benchmark" },
      { fromVal: "110.00 kW", toVal: "147.51 hp", extra: "110,000 W", extra2: "Midsize passenger sedan engine" },
      { fromVal: "200.00 kW", toVal: "268.20 hp", extra: "200,000 W", extra2: "High-performance sports EV drivetrain" }
    ]
  },
  applications: {
    title: "Practical Applications of kW to Mechanical Horsepower Conversion",
    items: [
      {
        title: "Automotive Engine and EV Powertrain Benchmarking",
        text: "Global automakers manufacture vehicles rated in kilowatts under UNECE and ISO standards, converting figures to mechanical horsepower for North American window stickers and consumer marketing."
      },
      {
        title: "Industrial Electric Motor Sizing (NEMA vs. IEC Standards)",
        text: "Electrical engineers convert European IEC metric motor frame outputs (in kW) into North American NEMA ratings (in hp) to ensure equivalent torque and thermal performance in machine retrofits."
      },
      {
        title: "Marine and Agricultural Engine Specification",
        text: "Tractor power take-off (PTO) shafts, boat outboard motors, and heavy construction equipment utilize mechanical horsepower to verify compatibility with existing hydraulic implements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 0.7457 instead of dividing: Because 1 kW is larger than 1 hp, the horsepower number must always be numerically higher than the kilowatt number.",
      "Confusing mechanical horsepower (745.7 W) with metric horsepower (735.5 W): Using the metric factor produces a ~1.4% error.",
      "Confusing electrical power input with mechanical power output: A motor consuming 10 kW electrical input at 90% efficiency delivers only 9 kW mechanical output (12.07 hp)."
    ]
  },
  faqs: [
    {
      question: "How many mechanical horsepower are in 1 kilowatt?",
      answer: "There are approximately 1.341022 mechanical horsepower in 1 kilowatt."
    },
    {
      question: "What is the formula to convert kilowatts to mechanical horsepower?",
      answer: "The formula is: hp = kilowatts ÷ 0.745699872 (or hp = kilowatts × 1.341022)."
    },
    {
      question: "How many kilowatts are in 1 mechanical horsepower?",
      answer: "There are exactly 0.745699872 kilowatts (745.699872 Watts) in 1 mechanical horsepower."
    },
    {
      question: "How do I convert 100 kW to mechanical horsepower?",
      answer: "100 kW × 1.341022 = 134.10 mechanical horsepower."
    },
    {
      question: "What is the difference between mechanical hp and metric hp?",
      answer: "Mechanical horsepower equals 745.699872 Watts (550 ft·lbf/s), while metric horsepower (PS/cv) equals 735.49875 Watts (75 kgf·m/s). Mechanical horsepower is roughly 1.39% more powerful than metric horsepower."
    },
    {
      question: "How do I convert horsepower back to kilowatts?",
      answer: "Multiply the horsepower value by 0.745699872 (for example: 200 hp × 0.7457 = 149.14 kW)."
    },
    {
      question: "Why do electric vehicle manufacturers use both kW and hp?",
      answer: "Kilowatts are the official SI unit for electrical and mechanical power used globally in engineering, while horsepower is familiar to consumers evaluating vehicle performance."
    },
    {
      question: "How many hp is a 7.5 kW motor?",
      answer: "7.5 kW ÷ 0.7457 = 10.06 hp, which corresponds to a standard 10 HP industrial motor rating."
    }
  ],
  relatedList: [
    { label: "Horsepower (Mechanical) to Kilowatt", from: "horsepower-mechanical", to: "kilowatt" },
    { label: "Kilowatt to Horsepower (Metric)", from: "kilowatt", to: "horsepower-metric" },
    { label: "Kilowatt to BTU per Hour", from: "kilowatt", to: "btu-per-hour" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "IEEE Standard 100: The Authoritative Dictionary of IEEE Standards Terms."
  ]
};
