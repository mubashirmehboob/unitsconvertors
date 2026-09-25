import { CustomArticleData } from "./types";

export const gigawattToHorsepowerMechanical: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "horsepower-mechanical",
  seoTitle: "Gigawatt to Horsepower (Mechanical) Converter (GW to hp)",
  metaDescription: "Convert gigawatts to mechanical horsepower (GW to hp) with imperial and SI precision. Formula, calculation steps, lookup tables, and utility FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-horsepower-mechanical",
  h1: "Gigawatt to Horsepower (Mechanical) Converter",
  introduction: [
    "The gigawatt (GW) and mechanical horsepower (hp, imperial horsepower) represent power across the SI metric and imperial engineering systems. While the gigawatt is the standard metric for bulk utility power plants, continental transmission grids, and national energy statistics, mechanical horsepower remains deeply entrenched in North American mechanical engineering, turbine manufacturing, and heavy propulsion systems.",
    "Converting gigawatts to mechanical horsepower bridges macro-level electric generation with large-scale mechanical shaft power. By standard international definition, one mechanical horsepower equals exactly 550 foot-pounds per second, which converts to approximately 745.699872 watts. Because one gigawatt represents one billion watts (10⁹ W), one gigawatt equals 1,000,000,000 ÷ 745.699872 ≈ 1,341,022.09 mechanical horsepower.",
    "This technical engineering guide provides the exact conversion formula, walks through step-by-step turbine sizing calculations, presents a grid-scale horsepower reference table, details industrial applications, and answers common conversion questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to mechanical horsepower (hp), multiply the gigawatt value by 1,341,022.09 (or divide by 7.457 × 10⁻⁷). For example, a 1.2 GW nuclear generating station delivers approximately 1,609,226.5 hp of equivalent mechanical shaft power.",
    formulaDisplay: "hp = GW × 1,341,022.09",
    subtext: "1 gigawatt is approximately equal to 1,341,022 mechanical horsepower (approx. 1.341 million hp)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an official SI multiple equal to one billion watts (1,000,000,000 Joules per second). It is used globally to specify national power generation capacities, regional transmission networks, and the nameplate output of major hydroelectric dams and nuclear stations."
  },
  aboutTargetUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical horsepower (symbol: hp), also known as imperial horsepower, is an imperial unit of power defined as the capacity to lift 550 pounds at a rate of one foot per second (550 ft·lbf/s). It equals approximately 745.699872 watts and is widely used for rating industrial pumps, compressors, diesel engines, and heavy steam turbines."
  },
  relationship: "Because 1 GW = 1,000,000,000 W and 1 mechanical hp = 745.699872 W, one gigawatt equals 10⁹ ÷ 745.699872 ≈ 1,341,022.09 hp. Conversely, 1 hp = 745.699872 × 10⁻⁹ GW ≈ 0.0000007457 GW.",
  relationshipTitle: "Gigawatt to Horsepower Mechanical Equivalence",
  relationshipItems: [
    { label: "0.0007457 GW", value: "1,000 hp (Large industrial motor / compressor)" },
    { label: "0.01 GW", value: "13,410.22 hp (Large naval gas turbine or pump station)" },
    { label: "0.1 GW", value: "134,102.21 hp (Aeroderivative gas turbine fleet)" },
    { label: "0.5 GW", value: "670,511.04 hp (Heavy utility steam turbine generator)" },
    { label: "1.0 GW", value: "1,341,022.09 hp (Commercial base-load nuclear power station)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 1,341,022.09 to obtain mechanical horsepower.",
    math: "hp = GW * 1341022.09",
    subtext: "Or divide GW by 0.000000745699872"
  },
  formulaTitle: "Gigawatt to Horsepower (Mechanical) Formula",
  practicalTip: {
    title: "The 1.34 Million Rule",
    text: "For fast mental calculations, remember that 1 GW is approximately 1.34 million horsepower (1.341 million hp). Multiply gigawatts by 1.34 to get millions of horsepower (e.g., 2 GW ≈ 2.68 million hp)."
  },
  expertNote: {
    title: "Mechanical vs Metric Horsepower",
    text: "Mechanical horsepower (hp = 745.7 W) is distinct from metric horsepower (PS/cv = 735.5 W). When converting 1 GW, mechanical hp yields 1,341,022 hp, whereas metric hp yields 1,359,622 PS—a discrepancy of 18,600 horsepower that must be accounted for in precision engineering contracts."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hydroelectric Dam Shaft Rating",
        subtitle: "Convert a 1.8 GW hydroelectric power station's output into mechanical horsepower.",
        steps: [
          "Identify the power value: 1.8 GW.",
          "Apply the conversion factor: hp = 1.8 × 1,341,022.09.",
          "Calculate: 1.8 × 1,341,022.09 = 2,413,839.76 hp.",
          "Result: 1.8 GW equals approximately 2,413,840 mechanical horsepower."
        ]
      },
      {
        title: "Example 2: Supercritical Steam Turbine Train",
        subtitle: "Determine the horsepower delivered by an 0.65 GW utility steam turbine.",
        steps: [
          "State the capacity: 0.65 GW.",
          "Multiply: 0.65 × 1,341,022.09 = 871,664.36 hp.",
          "Result: 0.65 GW equals approximately 871,664 mechanical horsepower."
        ]
      },
      {
        title: "Example 3: Offshore Wind Farm Cumulative Shaft Power",
        subtitle: "Convert an 0.4 GW offshore wind farm's cumulative rotor power into horsepower.",
        steps: [
          "State the capacity: 0.4 GW.",
          "Calculate: 0.4 × 1,341,022.09 = 536,408.84 hp.",
          "Result: 0.4 GW equals approximately 536,409 mechanical horsepower."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to Mechanical Horsepower Conversion Table",
    headers: ["Gigawatts (GW)", "Mechanical Horsepower (hp)", "Megawatts (MW)", "Engineering Reference"],
    rows: [
      { fromVal: "0.001 GW", toVal: "1,341.02 hp", extra: "1 MW", extra2: "Heavy mining haul truck fleet" },
      { fromVal: "0.01 GW", toVal: "13,410.22 hp", extra: "10 MW", extra2: "Marine container ship main engine" },
      { fromVal: "0.05 GW", toVal: "67,051.10 hp", extra: "50 MW", extra2: "Gas turbine industrial mechanical drive" },
      { fromVal: "0.10 GW", toVal: "134,102.21 hp", extra: "100 MW", extra2: "High-speed rail corridor tractive peak" },
      { fromVal: "0.25 GW", toVal: "335,255.52 hp", extra: "250 MW", extra2: "Major utility peaker turbine array" },
      { fromVal: "0.50 GW", toVal: "670,511.04 hp", extra: "500 MW", extra2: "Coal-fired turbine generator shaft" },
      { fromVal: "0.75 GW", toVal: "1,005,766.57 hp", extra: "750 MW", extra2: "Supercritical thermal generation unit" },
      { fromVal: "1.00 GW", toVal: "1,341,022.09 hp", extra: "1,000 MW", extra2: "Standard commercial nuclear power unit" },
      { fromVal: "1.21 GW", toVal: "1,622,636.73 hp", extra: "1,210 MW", extra2: "Iconic cinematic energy benchmark" },
      { fromVal: "2.00 GW", toVal: "2,682,044.18 hp", extra: "2,000 MW", extra2: "Hoover Dam full generation capacity" },
      { fromVal: "5.00 GW", toVal: "6,705,110.45 hp", extra: "5,000 MW", extra2: "Major multi-dam river basin cascade" },
      { fromVal: "22.50 GW", toVal: "30,173,000.00 hp", extra: "22,500 MW", extra2: "Three Gorges Dam total turbine power" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to hp Conversion",
    items: [
      {
        title: "Turbine Rotor Mechanical Stress Modeling",
        text: "Mechanical engineers convert electrical generator output in gigawatts into shaft torque and horsepower to calculate torsional shear stress on turbine coupling bolts."
      },
      {
        title: "Pumped-Storage Pumping Head Specifications",
        text: "Civil and hydraulic engineers size reversible pump-turbines by converting electrical grid pumping requirements in gigawatts into hydraulic brake horsepower."
      },
      {
        title: "Heavy Propulsion and Fleet Electrification",
        text: "Naval architects and rail engineers compare grid electrical feeds in gigawatts with cumulative mechanical horsepower ratings for high-speed rail lines and nuclear icebreakers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 GW produces over 1.34 million horsepower, so the horsepower figure is always vastly larger than the gigawatt number.",
      "Confusing mechanical horsepower with metric horsepower: Mechanical hp uses 745.7 W, while metric hp (PS) uses 735.5 W. Using the wrong standard introduces a 1.4% error.",
      "Ignoring generator efficiency: Mechanical shaft horsepower must always exceed electrical gigawatt output by generator losses (η ≈ 98.5% to 99%)."
    ]
  },
  faqs: [
    {
      question: "How many mechanical horsepower are in 1 gigawatt?",
      answer: "There are approximately 1,341,022.09 mechanical horsepower (imperial hp) in 1 gigawatt."
    },
    {
      question: "What is the formula to convert gigawatts to mechanical horsepower?",
      answer: "The formula is: hp = gigawatts × 1,341,022.09 (or hp = GW × 10⁹ ÷ 745.699872)."
    },
    {
      question: "How do I convert mechanical horsepower back to gigawatts?",
      answer: "Divide the horsepower value by 1,341,022.09 (or multiply by 7.45699872 × 10⁻⁷)."
    },
    {
      question: "What is the difference between mechanical hp and metric hp?",
      answer: "Mechanical horsepower equals 550 ft·lbf/s (≈ 745.70 W), whereas metric horsepower (PS or cv) equals 75 kgf·m/s (≈ 735.50 W). 1 GW equals 1,341,022 mechanical hp versus 1,359,622 metric hp."
    },
    {
      question: "How much horsepower is 1.21 GW?",
      answer: "1.21 GW equals approximately 1,622,637 mechanical horsepower."
    },
    {
      question: "How many megawatts equal 1 million horsepower?",
      answer: "1,000,000 mechanical horsepower equals approximately 745.7 megawatts (0.7457 GW)."
    },
    {
      question: "Why do turbine manufacturers quote both MW/GW and hp?",
      answer: "Electric utility clients buy power in MW and GW, while mechanical drivetrain, gearbox, and bearing manufacturers design components according to horsepower and torque ratings."
    },
    {
      question: "What is electrical horsepower?",
      answer: "Electrical horsepower is defined exactly as 746 watts (used for electric motors in the USA). In electrical horsepower, 1 GW equals 1,000,000,000 ÷ 746 ≈ 1,340,482.5 hp."
    }
  ],
  relatedList: [
    { label: "Horsepower (Mechanical) to Gigawatt", from: "horsepower-mechanical", to: "gigawatt" },
    { label: "Gigawatt to Horsepower (Metric)", from: "gigawatt", to: "horsepower-metric" },
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" }
  ],
  references: [
    "ASME PTC 6 - Steam Turbines Performance Test Codes.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
