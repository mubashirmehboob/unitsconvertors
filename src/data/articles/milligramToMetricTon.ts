import { CustomArticleData } from "./types";

export const milligramToMetricTon: CustomArticleData = {
  fromUnitId: "milligram",
  toUnitId: "metric-ton",
  seoTitle: "Milligram to Metric Ton Converter - mg to t",
  metaDescription: "Convert milligrams to metric tons (mg to t) with exact SI decimal formulas, mineral assay worked examples, conversion tables, and step-by-step guidance.",
  canonicalUrl: "https://unitsconvertors.com/milligram-to-metric-ton",
  h1: "Milligram to Metric Ton Converter",
  introduction: [
    "The milligram (mg) and the metric ton (t, commonly spelled tonne) represent opposite extremes of the International System of Units (SI). While the milligram measures minute masses such as active pharmaceutical ingredients, fine chemical reagents, and atmospheric aerosols, the metric ton is the universal industrial benchmark for bulk commodities, ocean freight, agricultural harvests, and civil infrastructure materials.",
    "Because both units belong entirely to the decimal metric system, converting milligrams to metric tons involves an exact power of ten without fractional rounding. One metric ton equals exactly 1,000 kilograms, 1,000,000 grams, or 1,000,000,000 milligrams (one billion milligrams). Dividing by one billion or shifting the decimal point nine places to the left provides the exact equivalent in metric tons."
  ],
  quickAnswer: {
    text: "To convert milligrams to metric tons, divide the milligram value by 1,000,000,000 (10⁹), or multiply by 10⁻⁹ (0.000000001). For example, 50,000,000 milligrams equals 0.05 metric tons.",
    formulaDisplay: "Metric Tons (t) = Milligrams (mg) ÷ 1,000,000,000",
    subtext: "1 metric ton equals exactly 1,000,000,000 milligrams (1 mg = 10⁻⁹ t)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligram (mg)",
    text: "The milligram (symbol: mg) is an SI metric unit of mass defined as one-thousandth of a gram (10⁻³ g) or one-millionth of a kilogram (10⁻⁶ kg). It represents the worldwide standard for high-precision measurement in medicine, biochemical research, forensic toxicology, and analytical chemistry. For example, a standard vitamin D supplement tablet contains 0.025 mg to 0.05 mg of cholecalciferol, and pure ambient air quality thresholds measure particulate matter in micrograms and milligrams per cubic meter."
  },
  aboutTargetUnit: {
    title: "Understanding the Metric Ton (t / Tonne)",
    text: "The metric ton (symbol: t), legally termed the tonne in international standards and officially accepted for use alongside SI base units, equals exactly 1,000 kilograms (10³ kg or 10⁶ g). It matches the mass of exactly one cubic meter of pure water at its maximum density (3.98°C). The metric ton is the worldwide currency for cargo shipping, mineral extraction, grain trading, concrete production, and carbon offset reporting."
  },
  relationship: "The relationship between milligrams and metric tons is governed by standard SI decimal prefixes: 'milli-' indicates 10⁻³ of a gram, and the tonne represents 10⁶ grams. Consequently, the span between them is exactly 10⁶ ÷ 10⁻³ = 10⁹ (one billion). Exactly one billion milligrams compose one metric ton, and one milligram is equal to 0.000000001 metric tons.",
  relationshipTitle: "SI Decimal Span: 9 Orders of Magnitude",
  relationshipItems: [
    { label: "1 Metric Ton (t)", value: "1,000,000,000 Milligrams (mg)" },
    { label: "1 Kilogram (kg)", value: "1,000,000 Milligrams (mg)" },
    { label: "1 Gram (g)", value: "1,000 Milligrams (mg)" },
    { label: "1 Milligram (mg)", value: "0.000000001 Metric Tons (10⁻⁹ t)" }
  ],
  formula: {
    text: "To convert mass from milligrams to metric tons, divide the milligram number by 1,000,000,000 (10⁹), or multiply by 0.000000001 (10⁻⁹).",
    math: "\\text{Mass (t)} = \\frac{\\text{Mass (mg)}}{1{,}000{,}000{,}000} = \\text{Mass (mg)} \\times 10^{-9}",
    subtext: "To reverse the conversion: Mass (mg) = Mass (t) × 1,000,000,000"
  },
  formulaTitle: "Milligram to Metric Ton Conversion Formula",
  practicalTip: {
    title: "The Nine-Place Decimal Shift",
    text: "Because the relationship is an exact power of ten, you can execute this conversion without a calculator by shifting the decimal point nine places to the left: 2,500,000,000 mg becomes 2.5 t; 450,000,000 mg becomes 0.45 t; and 50,000,000 mg becomes 0.05 t."
  },
  examples: {
    title: "Worked Industry & Laboratory Calculation Examples",
    items: [
      {
        title: "Example 1: Precious Metal Ore Concentration Assay",
        subtitle: "A gold mining exploration sample yields 15,000,000 milligrams of recoverable gold from a large processing test lot. Express this gold mass in metric tons.",
        steps: [
          "Identify the starting milligram mass: 15,000,000 mg.",
          "Apply the SI formula: t = mg ÷ 1,000,000,000.",
          "Calculate: 15,000,000 ÷ 1,000,000,000 = 0.015 t.",
          "Conclusion: 15 million milligrams of gold equals exactly 0.015 metric tons (15 kg)."
        ]
      },
      {
        title: "Example 2: Industrial Wastewater Heavy Metal Compliance",
        subtitle: "An environmental audit measures a factory's annual zinc discharge at 820,000,000 milligrams. Convert this environmental output into metric tons for government reporting.",
        steps: [
          "State value: 820,000,000 mg.",
          "Shift decimal nine places left: 820,000,000 × 10⁻⁹ = 0.82 t.",
          "Conclusion: The annual zinc discharge equals exactly 0.82 metric tons."
        ]
      },
      {
        title: "Example 3: Bulk Agricultural Vitamin Premix Batch",
        subtitle: "A livestock feed manufacturer mixes 4,500,000,000 milligrams of pure synthetic vitamin E into an animal feed silo. Convert the additive mass into metric tons.",
        steps: [
          "State value: 4,500,000,000 mg.",
          "Divide by 10⁹: 4,500,000,000 ÷ 1,000,000,000 = 4.5 t.",
          "Conclusion: The batch contains exactly 4.5 metric tons of vitamin E premix."
        ]
      }
    ]
  },
  table: {
    title: "Milligram to Metric Ton Conversion Table",
    headers: ["Milligrams (mg)", "Metric Tons (t)", "Kilograms (kg)", "Grams (g)"],
    rows: [
      { fromVal: "1,000,000 mg", toVal: "0.001 t", extra: "1 kg", extra2: "1,000 g" },
      { fromVal: "10,000,000 mg", toVal: "0.010 t", extra: "10 kg", extra2: "10,000 g" },
      { fromVal: "50,000,000 mg", toVal: "0.050 t", extra: "50 kg", extra2: "50,000 g" },
      { fromVal: "100,000,000 mg", toVal: "0.100 t", extra: "100 kg", extra2: "100,000 g" },
      { fromVal: "250,000,000 mg", toVal: "0.250 t", extra: "250 kg", extra2: "250,000 g" },
      { fromVal: "500,000,000 mg", toVal: "0.500 t", extra: "500 kg", extra2: "500,000 g" },
      { fromVal: "750,000,000 mg", toVal: "0.750 t", extra: "750 kg", extra2: "750,000 g" },
      { fromVal: "1,000,000,000 mg", toVal: "1.000 t", extra: "1,000 kg", extra2: "1,000,000 g" },
      { fromVal: "2,500,000,000 mg", toVal: "2.500 t", extra: "2,500 kg", extra2: "2,500,000 g" },
      { fromVal: "5,000,000,000 mg", toVal: "5.000 t", extra: "5,000 kg", extra2: "5,000,000 g" }
    ]
  },
  expertNote: {
    title: "Parts-Per-Million (ppm) and Metric Ton Equivalence",
    text: "In geochemistry, environmental science, and metallurgy, concentration is frequently defined in parts per million (ppm). Because one metric ton contains exactly one million grams (or one billion milligrams), 1 milligram of contaminant or solute per kilogram of material is exactly equal to 1 gram per metric ton (1 g/t = 1 mg/kg = 1 ppm). This exact mathematical alignment makes the metric ton the foundational denominator for global mining assays."
  },
  applications: {
    title: "Real-World Engineering and Environmental Scenarios",
    items: [
      {
        title: "Mining Geochemistry & Ore Grade Estimation",
        text: "Assay laboratories quantify trace gold, silver, and rare-earth element concentrations by translating milligram lab readings into grams per metric ton (g/t) of raw rock."
      },
      {
        title: "Environmental Toxicology & Industrial Permitting",
        text: "Regulatory compliance officers convert airborne flue-gas particulate readings (measured in mg/m³) to cumulative annual emission totals in metric tons."
      },
      {
        title: "Pharmaceutical Bulk Chemical Synthesis",
        text: "Contract development and manufacturing organizations (CDMOs) scale up micro-gram and milligram bench chemistry to multi-tonne active pharmaceutical ingredient reactor batches."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Counting six zeros instead of nine: Dividing by 1,000,000 converts milligrams to kilograms, not metric tons. You must divide by 1,000,000,000.",
      "Conflating metric tons with US short tons or UK long tons: A metric ton is 1,000 kg (approx. 2,204.62 lb), whereas a US ton is 2,000 lb (907.18 kg) and an imperial ton is 2,240 lb (1,016.05 kg).",
      "Floating-point rounding errors in spreadsheets: Dividing very small milligram values by 10⁹ in spreadsheet software can trigger underflow errors if columns are not formatted for scientific notation.",
      "Confusing the metric ton symbol 't' with the imperial 'ton': In international trade documentation, ensure 't' or 'tonne' is explicitly cited to avoid contractual discrepancies."
    ]
  },
  faqs: [
    {
      question: "How do I convert milligrams to metric tons?",
      answer: "To convert milligrams to metric tons (tonnes), divide the milligram number by 1,000,000,000 (one billion), or multiply by 10⁻⁹. For instance, 250,000,000 mg divided by 1,000,000,000 equals 0.25 metric tons."
    },
    {
      question: "How many milligrams are in one metric ton?",
      answer: "There are exactly 1,000,000,000 (one billion) milligrams in one metric ton. This follows directly from the SI definitions: 1 tonne = 1,000 kilograms = 1,000,000 grams = 1,000,000,000 milligrams."
    },
    {
      question: "What is 1,000,000 mg in metric tons?",
      answer: "One million milligrams (which equals 1 kilogram) is equal to 0.001 metric tons (one-thousandth of a tonne)."
    },
    {
      question: "Is a metric ton the same as a tonne?",
      answer: "Yes, 'metric ton' and 'tonne' refer to the exact same unit of mass equaling 1,000 kilograms. 'Tonne' is the official spelling recognized by the International Bureau of Weights and Measures (BIPM), while 'metric ton' is customary in American English."
    },
    {
      question: "How does a metric ton compare to a US short ton?",
      answer: "A metric ton (1,000 kg or 2,204.62 pounds) is approximately 10.2% heavier than a US short ton (907.18 kg or 2,000 pounds). Therefore, 1 metric ton equals approximately 1.1023 US tons."
    },
    {
      question: "What is 500,000,000 mg in metric tons?",
      answer: "Five hundred million milligrams equals exactly 0.5 metric tons (half a tonne), which corresponds to 500 kilograms or approximately 1,102.31 pounds."
    },
    {
      question: "How do I convert metric tons back to milligrams?",
      answer: "To convert metric tons back to milligrams, multiply the metric ton figure by 1,000,000,000 (10⁹). For example, 0.04 metric tons × 1,000,000,000 = 40,000,000 milligrams."
    },
    {
      question: "Why is the milligram to metric ton ratio important in mining?",
      answer: "Mineral assays quantify valuable metals in milligrams per kilogram of ore, which is mathematically identical to grams per metric ton (g/t). This 1:1 relationship allows geologists to calculate deposit value directly from drill core assays."
    },
    {
      question: "How many milligrams are in 0.01 metric tons?",
      answer: "0.01 metric tons equals exactly 10,000,000 milligrams (10 million mg, or 10 kilograms)."
    },
    {
      question: "Can I use scientific notation for this conversion?",
      answer: "Yes, scientific notation is ideal for this calculation. Since 1 mg = 10⁻⁹ t, you simply express a value like 3.4 × 10⁷ mg by subtracting 9 from the exponent: 3.4 × 10⁷ × 10⁻⁹ = 3.4 × 10⁻² t (0.034 t)."
    }
  ],
  relatedList: [
    { label: "Gram to Metric Ton", from: "gram", to: "metric-ton" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" },
    { label: "Milligram to Kilogram", from: "milligram", to: "kilogram" },
    { label: "Milligram to US Ton", from: "milligram", to: "us-ton" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "International Organization for Standardization (ISO). <em>ISO 80000-4: Quantities and Units — Mechanics</em>.",
    "Society for Mining, Metallurgy & Exploration (SME). <em>Mineral Commodity Market and Assay Standards Handbook</em>."
  ]
};
