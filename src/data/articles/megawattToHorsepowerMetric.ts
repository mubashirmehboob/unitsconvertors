import { CustomArticleData } from "./types";

export const megawattToHorsepowerMetric: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "horsepower-metric",
  seoTitle: "Megawatt to Horsepower (Metric) Converter (MW to PS / cv)",
  metaDescription: "Convert megawatts to metric horsepower (MW to PS / DIN hp) with exact engineering precision. Marine, rail, and industrial power formulas, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-horsepower-metric",
  h1: "Megawatt to Metric Horsepower Converter",
  introduction: [
    "The megawatt (MW) and metric horsepower (PS, cv, or DIN horsepower) are high-capacity power units used across continental Europe, Asia, and global heavy industries to specify marine propulsion engines, high-speed electric trains, stationary power generation turbines, and industrial compressor stations. While the megawatt is the official International System of Units (SI) measure, metric horsepower remains widely referenced in technical literature and international commercial specifications.",
    "Converting megawatts to metric horsepower translates modern SI power into the European gravitational metric power scale. By international definition (DIN 66036 and ISO standards), one metric horsepower represents 75 kilopond-meters per second (75 kgf·m/s), which equates to exactly 735.49875 Watts (0.00073549875 MW). Consequently, one megawatt equals exactly 1,000,000 ÷ 735.49875 ≈ 1,359.62162 metric horsepower.",
    "This technical guide details the conversion formula, provides step-by-step high-speed rail and marine engine sizing calculations, presents a comprehensive industrial lookup table, explores international engineering applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to metric horsepower (PS / cv), divide the megawatt value by 0.00073549875 (or multiply by approximately 1,359.622). For example, a 10 MW high-speed electric train produces approximately 13,596.22 metric horsepower (PS).",
    formulaDisplay: "PS = MW ÷ 0.00073549875 = MW × 1,359.62162",
    subtext: "1 megawatt is equal to approximately 1,359.622 metric horsepower (PS / DIN standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an official SI decimal multiple of the Watt, representing 1,000,000 Joules of energy transferred per second (1 MJ/s). It is the universal standard for rating utility electrical generators, large gas turbines, industrial electric arc furnaces, and electric locomotive traction systems."
  },
  aboutTargetUnit: {
    title: "Understanding Metric Horsepower (PS / cv)",
    text: "Metric horsepower (symbol: PS from German 'Pferdestärke', cv from French 'cheval-vapeur') is defined as the work rate of 75 kgf·m/s (735.49875 Watts). Widely adopted in Germany, France, Italy, Japan, and international maritime shipping, metric horsepower is approximately 1.39% lower in physical power than imperial mechanical horsepower (745.7 W)."
  },
  relationship: "Because 1 metric horsepower equals exactly 0.00073549875 MW, 1 megawatt equals 1 / 0.00073549875 ≈ 1,359.62162 PS. A megawatt delivers nearly 1,360 times the output of a single metric horsepower.",
  relationshipTitle: "Megawatt to Metric Horsepower Equivalence",
  relationshipItems: [
    { label: "0.0007355 MW", value: "1.0 PS (Base metric horsepower unit)" },
    { label: "0.7355 MW", value: "1,000.0 PS (1,000 PS industrial marine engine)" },
    { label: "1.0 MW", value: "1,359.62 PS (1 MW utility generation unit)" },
    { label: "9.28 MW", value: "12,617.29 PS (TGV / ICE high-speed train power)" },
    { label: "50.0 MW", value: "67,981.08 PS (Cruise ship propulsion pod capacity)" }
  ],
  formula: {
    text: "Divide the power in megawatts by 0.00073549875 to calculate metric horsepower.",
    math: "PS = MW / 0.00073549875",
    subtext: "Alternatively: PS = MW × 1,359.62162"
  },
  formulaTitle: "Megawatt to Metric Horsepower Formula",
  practicalTip: {
    title: "Quick 1,360× Mental Rule",
    text: "Multiply the megawatt value by 1,360 for an instant mental estimate of metric PS with less than 0.03% error (e.g., 5 MW × 1,360 = 6,800 PS; exact: 6,798.11 PS)."
  },
  expertNote: {
    title: "European Rail Traction Power Ratings",
    text: "European high-speed trainsets (such as the French TGV and German ICE 3) list continuous traction converter power in megawatts (e.g., 8.0 MW or 9.6 MW) while legacy rail timetables and enthusiasts frequently convert to PS (~10,877 PS to ~13,052 PS)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Electric Trainset",
        subtitle: "Convert an 8.8 MW high-speed passenger train traction system into metric horsepower (PS).",
        steps: [
          "Identify the megawatt value: 8.8 MW.",
          "Apply the conversion formula: PS = 8.8 × 1,359.62162.",
          "Calculate: 8.8 × 1,359.62162 = 11,964.67 PS.",
          "Result: 8.8 MW equals approximately 11,965 metric horsepower (12,000 PS class)."
        ]
      },
      {
        title: "Example 2: Commercial Two-Stroke Marine Diesel",
        subtitle: "Convert a 60 MW container ship main engine power into metric horsepower.",
        steps: [
          "Identify power in MW: 60 MW.",
          "Multiply by 1,359.622: 60 × 1,359.622 = 81,577.30 PS.",
          "Result: 60 MW corresponds to approximately 81,577 metric horsepower (PS)."
        ]
      },
      {
        title: "Example 3: Heavy Gas Turbine Compressor Drive",
        subtitle: "Convert a 25 MW pipeline natural gas compressor turbine into PS.",
        steps: [
          "Identify power: 25 MW.",
          "Calculate: 25 ÷ 0.0007355 = 33,990.54 PS.",
          "Result: 25 MW equals approximately 33,991 metric horsepower."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Metric Horsepower Conversion Table",
    headers: ["Megawatts (MW)", "Metric Horsepower (PS)", "Kilowatts (kW)", "European / Heavy Industry Application"],
    rows: [
      { fromVal: "0.10 MW", toVal: "135.96 PS", extra: "100 kW", extra2: "Small industrial generator unit" },
      { fromVal: "0.50 MW", toVal: "679.81 PS", extra: "500 kW", extra2: "European regional diesel railcar engine" },
      { fromVal: "0.7355 MW", toVal: "1,000.00 PS", extra: "735.5 kW", extra2: "1,000 PS metric prime mover benchmark" },
      { fromVal: "1.00 MW", toVal: "1,359.62 PS", extra: "1,000 kW", extra2: "1 MW base metric generation unit" },
      { fromVal: "2.00 MW", toVal: "2,719.24 PS", extra: "2,000 kW", extra2: "European diesel-electric freight shunter" },
      { fromVal: "3.00 MW", toVal: "4,078.86 PS", extra: "3,000 kW", extra2: "Marine coastal tanker main engine" },
      { fromVal: "5.00 MW", toVal: "6,798.11 PS", extra: "5,000 kW", extra2: "Electric passenger ferry propulsion" },
      { fromVal: "10.00 MW", toVal: "13,596.22 PS", extra: "10,000 kW", extra2: "High-speed electric passenger trainset" },
      { fromVal: "20.00 MW", toVal: "27,192.43 PS", extra: "20,000 kW", extra2: "Offshore oil platform gas turbine" },
      { fromVal: "40.00 MW", toVal: "54,384.86 PS", extra: "40,000 kW", extra2: "Fast naval frigate gas turbine" },
      { fromVal: "70.00 MW", toVal: "95,173.51 PS", extra: "70,000 kW", extra2: "Ultra-large crude carrier (VLCC) engine" },
      { fromVal: "100.00 MW", toVal: "135,962.16 PS", extra: "100,000 kW", extra2: "Heavy industrial power turbine output" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to Metric Horsepower Conversion",
    items: [
      {
        title: "European High-Speed Rail Engineering",
        text: "Rail vehicle manufacturers (such as Alstom and Siemens) declare train traction power in megawatts on technical homologation documents, converting to PS for marketing."
      },
      {
        title: "Maritime Engine Manufacturing (MAN & WinGD)",
        text: "Major European two-stroke marine engine manufacturers list test-bed power figures in megawatts under ISO 3046 standards and provide customer ratings in PS / DIN hp."
      },
      {
        title: "Industrial Gas Turbine and Pipeline Compressor Drives",
        text: "Mechanical engineers convert pipeline gas compressor turbine capacities between ISO megawatts and metric horsepower when specifying European cross-border gas pipelines."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing metric horsepower (PS, 735.5 W) with imperial horsepower (hp, 745.7 W): 1 MW produces 1,359.62 PS vs 1,341.02 imperial hp.",
      "Dividing by 1,360 instead of multiplying: Because 1 MW equals over 1,359 PS, the PS value is always much higher than the MW value.",
      "Assuming continuous and peak ratings are identical: Gas turbines and electric train converters have 1-hour peak MW ratings that exceed continuous baseline PS ratings."
    ]
  },
  faqs: [
    {
      question: "How many metric horsepower (PS) are in 1 megawatt?",
      answer: "There are approximately 1,359.622 metric horsepower in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to metric horsepower?",
      answer: "The formula is: PS = megawatts ÷ 0.00073549875 (or PS = MW × 1,359.62162)."
    },
    {
      question: "How many megawatts are in 1,000 PS?",
      answer: "1,000 metric horsepower (PS) equals exactly 0.73549875 megawatts (735.5 kW)."
    },
    {
      question: "How do I convert 5 MW to PS?",
      answer: "5 MW × 1,359.622 = 6,798.11 metric horsepower (PS)."
    },
    {
      question: "How do I convert metric horsepower back to megawatts?",
      answer: "Multiply the PS value by 0.00073549875 (for example: 10,000 PS × 0.0007355 = 7.355 MW)."
    },
    {
      question: "What is the difference between MW and PS?",
      answer: "The megawatt is the SI decimal unit (10⁶ Watts), while PS is the metric gravitational power unit based on 75 kgf·m/s (735.49875 Watts)."
    },
    {
      question: "How many PS is an 8 MW electric train?",
      answer: "An 8 MW locomotive delivers approximately 10,876.97 metric horsepower (approx. 10,880 PS)."
    },
    {
      question: "Why do some marine specs use PS and others use kW/MW?",
      answer: "ISO standards mandate power in kW/MW, but historical maritime contracts and Asian/European shipyards frequently list metric PS for customer familiarity."
    }
  ],
  relatedList: [
    { label: "Horsepower (Metric) to Megawatt", from: "horsepower-metric", to: "megawatt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" },
    { label: "Kilowatt to Horsepower (Metric)", from: "kilowatt", to: "horsepower-metric" }
  ],
  references: [
    "DIN 66036: Leistungssymbole — Pferdestärke (PS).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition."
  ]
};
