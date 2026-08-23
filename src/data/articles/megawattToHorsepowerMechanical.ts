import { CustomArticleData } from "./types";

export const megawattToHorsepowerMechanical: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "horsepower-mechanical",
  seoTitle: "Megawatt to Horsepower (Mechanical) Converter (MW to hp)",
  metaDescription: "Convert megawatts to mechanical horsepower (MW to hp) with exact engineering precision. Marine propulsion, locomotive power formulas, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-horsepower-mechanical",
  h1: "Megawatt to Mechanical Horsepower Converter",
  introduction: [
    "The megawatt (MW) and mechanical horsepower (hp, also known as imperial or electric horsepower) are heavy-duty power units used worldwide to rate large industrial prime movers, marine propulsion engines, diesel-electric freight locomotives, power generation turbines, and mining equipment. While the megawatt is the official International System of Units (SI) metric measure, mechanical horsepower remains the standard unit of rating across American heavy machinery and naval architecture.",
    "Converting megawatts to mechanical horsepower bridges large-scale electrical generation metrics with imperial mechanical propulsion ratings. By legal and physical standard, one mechanical horsepower is defined as 550 foot-pounds per second, which equals exactly 745.699872 Watts (0.000745699872 MW). Consequently, one megawatt equals exactly 1,000,000 ÷ 745.699872 ≈ 1,341.02209 mechanical horsepower.",
    "This engineering reference explains the physical conversion formula, provides step-by-step locomotive and marine engine calculations, presents a comprehensive industrial conversion table, explores naval and heavy mechanical applications, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to mechanical horsepower (hp), divide the megawatt value by 0.000745699872 (or multiply by approximately 1,341.022). For example, a 3.3 MW diesel locomotive engine delivers approximately 4,425.37 mechanical horsepower.",
    formulaDisplay: "hp = MW ÷ 0.000745699872 = MW × 1,341.02209",
    subtext: "1 megawatt is equal to approximately 1,341.022 mechanical horsepower (imperial standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an SI decimal multiple equal to 1,000,000 Watts (10⁶ W) or 1,000,000 Joules of energy transferred per second (1 MJ/s). It is universally utilized to specify electrical generator output, high-voltage transmission capacities, marine gas turbines, and massive industrial electric drives."
  },
  aboutTargetUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical horsepower (symbol: hp or hp(I)), also called imperial horsepower, was standardized by James Watt as 33,000 ft·lb/min (550 ft·lbf/s). Based on standard gravity (9.80665 m/s²), it equals exactly 745.6998715822702 Watts. It is the premier standard for rating high-horsepower reciprocating engines, aircraft gas turbines, and heavy equipment in the United States."
  },
  relationship: "Because 1 mechanical horsepower = 745.699872 W (0.0007457 MW), 1 megawatt equals 1,000,000 / 745.699872 ≈ 1,341.02209 hp. One megawatt delivers roughly 1,341 times the power of a single mechanical horsepower.",
  relationshipTitle: "Megawatt to Mechanical Horsepower Equivalence",
  relationshipItems: [
    { label: "0.0007457 MW", value: "1.0 hp (1 HP electric workshop motor)" },
    { label: "0.7457 MW", value: "1,000.0 hp (Heavy marine auxiliary generator)" },
    { label: "1.0 MW", value: "1,341.02 hp (Standard 1 MW utility generator)" },
    { label: "3.3 MW", value: "4,425.37 hp (North American freight locomotive engine)" },
    { label: "25.0 MW", value: "33,525.55 hp (Naval warship gas turbine engine)" }
  ],
  formula: {
    text: "Divide the power in megawatts by 0.000745699872 to obtain mechanical horsepower.",
    math: "hp = MW / 0.000745699872",
    subtext: "Alternatively: hp = MW × 1,341.02209"
  },
  formulaTitle: "Megawatt to Mechanical Horsepower Formula",
  practicalTip: {
    title: "Quick 1,340× Mental Shortcut",
    text: "Multiply the megawatt rating by 1,340 to estimate mechanical horsepower with less than 0.08% error (e.g., 2 MW × 1,340 = 2,680 hp; exact: 2,682.04 hp)."
  },
  expertNote: {
    title: "Shaft Horsepower (SHP) vs Electrical Megawatts",
    text: "In marine propulsion and turboprop aircraft, power delivered to the propeller shaft is designated Shaft Horsepower (shp). 1 shp equals 1 mechanical hp (745.7 W). In turbo-electric ships, electrical MW is converted to shp via propulsion motor efficiency (typically 95–97%)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diesel-Electric Freight Locomotive",
        subtitle: "Convert a 3.3 MW continuous diesel engine output into mechanical horsepower.",
        steps: [
          "Identify the megawatt value: 3.3 MW.",
          "Apply the conversion factor: hp = 3.3 × 1,341.02209.",
          "Calculate: 3.3 × 1,341.02209 = 4,425.3729 hp.",
          "Result: 3.3 MW corresponds to a standard 4,400 hp class North American locomotive (4,425.37 hp exact)."
        ]
      },
      {
        title: "Example 2: Marine Container Ship Two-Stroke Engine",
        subtitle: "Convert an 80 MW ultra-large container vessel main engine capacity into horsepower.",
        steps: [
          "Identify power in MW: 80 MW.",
          "Multiply by 1,341.022: 80 × 1,341.022 = 107,281.77 hp.",
          "Result: 80 MW equals approximately 107,282 mechanical horsepower."
        ]
      },
      {
        title: "Example 3: Industrial Aeroderivative Gas Turbine",
        subtitle: "Convert a 30 MW LM2500 industrial gas turbine output into mechanical hp.",
        steps: [
          "Identify power: 30 MW.",
          "Calculate: 30 ÷ 0.0007457 = 40,230.66 hp.",
          "Result: 30 MW equals approximately 40,231 mechanical horsepower."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Mechanical Horsepower Conversion Table",
    headers: ["Megawatts (MW)", "Mechanical Horsepower (hp)", "Kilowatts (kW)", "Industrial / Marine Propulsion Application"],
    rows: [
      { fromVal: "0.10 MW", toVal: "134.10 hp", extra: "100 kW", extra2: "Commercial heavy standby generator" },
      { fromVal: "0.50 MW", toVal: "670.51 hp", extra: "500 kW", extra2: "Mining haul truck secondary drive" },
      { fromVal: "0.75 MW", toVal: "1,005.77 hp", extra: "750 kW", extra2: "1,000 HP industrial water pumping station" },
      { fromVal: "1.00 MW", toVal: "1,341.02 hp", extra: "1,000 kW", extra2: "1 MW base industrial prime mover benchmark" },
      { fromVal: "2.00 MW", toVal: "2,682.04 hp", extra: "2,000 kW", extra2: "Harbor escort tugboat propulsion engine" },
      { fromVal: "3.00 MW", toVal: "4,023.07 hp", extra: "3,000 kW", extra2: "4,000 HP heavy freight locomotive" },
      { fromVal: "5.00 MW", toVal: "6,705.11 hp", extra: "5,000 kW", extra2: "Offshore supply vessel propulsion drive" },
      { fromVal: "10.00 MW", toVal: "13,410.22 hp", extra: "10,000 kW", extra2: "High-speed passenger ferry gas turbine" },
      { fromVal: "25.00 MW", toVal: "33,525.55 hp", extra: "25,000 kW", extra2: "Naval destroyer aeroderivative turbine" },
      { fromVal: "50.00 MW", toVal: "67,051.10 hp", extra: "50,000 kW", extra2: "Large cruise ship electric propulsion pods" },
      { fromVal: "75.00 MW", toVal: "100,576.66 hp", extra: "75,000 kW", extra2: "100,000 HP nuclear submarine propulsion" },
      { fromVal: "100.00 MW", toVal: "134,102.21 hp", extra: "100,000 kW", extra2: "Heavy industrial power plant shaft output" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to Mechanical Horsepower Conversion",
    items: [
      {
        title: "Marine Engineering and Naval Architecture",
        text: "Shipbuilders convert electrical generator capacities in megawatts into shaft horsepower (shp) to size propulsion shafts, reduction gearboxes, and fixed-pitch propellers."
      },
      {
        title: "Railroad Locomotive Specification",
        text: "Rail manufacturers design traction alternators in megawatts and convert ratings into tractive horsepower for railroad fleet purchasing specifications."
      },
      {
        title: "Heavy Open-Pit Mining Equipment",
        text: "Mining engineers convert ultra-class electric drive haul truck and hydraulic shovel electric drive ratings between megawatts and horsepower."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 0.7457 instead of multiplying by 1,341: Because 1 MW equals over 1,341 horsepower, the hp value must be vastly larger than the MW value.",
      "Confusing mechanical horsepower (745.7 W) with metric horsepower (735.5 W): Metric horsepower produces ~1.4% higher numbers.",
      "Neglecting gearbox and drivetrain losses: A 10 MW gas turbine driving an alternator with 97% efficiency produces 9.7 MWe (13,008 electrical hp)."
    ]
  },
  faqs: [
    {
      question: "How many mechanical horsepower are in 1 megawatt?",
      answer: "There are approximately 1,341.022 mechanical horsepower in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to mechanical horsepower?",
      answer: "The formula is: hp = megawatts ÷ 0.000745699872 (or hp = MW × 1,341.02209)."
    },
    {
      question: "How many megawatts are in 1,000 horsepower?",
      answer: "1,000 mechanical horsepower equals approximately 0.745699872 megawatts (745.7 kW)."
    },
    {
      question: "How do I convert 3 MW to mechanical horsepower?",
      answer: "3 MW × 1,341.022 = 4,023.07 mechanical horsepower."
    },
    {
      question: "How do I convert horsepower back to megawatts?",
      answer: "Multiply the horsepower value by 0.000745699872 (for example: 10,000 hp × 0.0007457 = 7.457 MW)."
    },
    {
      question: "What is the difference between MW and mechanical hp?",
      answer: "The megawatt is an SI decimal metric unit (1,000,000 Watts), whereas mechanical horsepower is an imperial unit based on 550 foot-pounds per second (745.699872 Watts)."
    },
    {
      question: "How many horsepower is an 80 MW container ship engine?",
      answer: "An 80 MW marine engine generates approximately 107,282 mechanical horsepower."
    },
    {
      question: "What is shaft horsepower (shp) in megawatts?",
      answer: "Shaft horsepower is identical in physical value to mechanical horsepower (1 shp = 745.7 W = 0.0007457 MW)."
    }
  ],
  relatedList: [
    { label: "Horsepower (Mechanical) to Megawatt", from: "horsepower-mechanical", to: "megawatt" },
    { label: "Megawatt to Horsepower (Metric)", from: "megawatt", to: "horsepower-metric" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" },
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
