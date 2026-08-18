import { CustomArticleData } from "./types";

export const kilogramToMicrogram: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "microgram",
  seoTitle: "Kilogram to Microgram Converter - kg to µg",
  metaDescription: "Convert kilograms to micrograms (kg to µg or mcg) with our precision metric calculator. Learn the 10⁹ conversion factor, formula, trace analysis, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-microgram",
  h1: "Kilogram to Microgram Converter",
  introduction: [
    "The kilogram and the microgram represent opposite ends of the practical mass spectrum in the International System of Units (SI). While the kilogram is the macroscopic SI base unit used for measuring gross body mass, commercial commodities, and industrial supplies, the microgram ($10^{-6}\\text{ g}$ or $10^{-9}\\text{ kg}$) is the standard unit for quantifying trace chemical compounds, potent hormonal therapeutics, atmospheric particulates, and biochemical toxins.",
    "Because the SI metric system scales seamlessly using powers of ten, converting kilograms to micrograms involves multiplying by one billion ($10^9$ or $1,000,000,000$). Understanding this nine-order-of-magnitude shift is critical for clinical toxicologists, environmental biochemists, and pharmaceutical formulation scientists."
  ],
  quickAnswer: {
    text: "To convert kilograms to micrograms, multiply the kilogram value by 1,000,000,000 (or $10^9$). For example, 0.000005 kilograms equals exactly 5,000 micrograms.",
    formulaDisplay: "1 kg = 1,000,000,000 µg (10⁹ µg)",
    subtext: "Multiply any mass in kilograms by 1,000,000,000 (or shift the decimal 9 places right) to get the value in micrograms (µg)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the primary base unit of mass in the International System of Units (SI). Standardized internationally via the universal Planck constant, the kilogram serves as the benchmark reference mass for commerce, engineering dynamics, logistics, and medical body weights."
  },
  aboutTargetUnit: {
    title: "Understanding the Microgram (µg / mcg)",
    text: "The microgram (symbol: µg, or 'mcg' in clinical pharmacy) is an SI-derived unit of mass equal to one-millionth of a gram ($10^{-6}\\text{ g}$) or one-billionth of a kilogram ($10^{-9}\\text{ kg}$). It is the primary unit for micro-dosing highly potent medications (such as levothyroxine, fentanyl, and vitamin B12), atmospheric pollution (PM2.5 / PM10), and water pollutant limits."
  },
  relationship: "In the SI metric hierarchy: $1\\text{ kg} = 1,000\\text{ g} = 1,000,000\\text{ mg} = 1,000,000,000\\text{ µg}$. One kilogram contains exactly one billion ($10^9$) micrograms. Conversely, 1 microgram equals $0.000000001\\text{ kg}$ ($10^{-9}\\text{ kg}$).",
  relationshipTitle: "Kilograms vs. Micrograms Metric Hierarchy",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "1,000,000,000 Micrograms (µg)" },
    { label: "1 Microgram (µg)", value: "10⁻⁹ Kilograms (0.000000001 kg)" },
    { label: "1 Gram (g)", value: "1,000,000 Micrograms (µg)" },
    { label: "1 Milligram (mg)", value: "1,000 Micrograms (µg)" }
  ],
  formula: {
    text: "To convert kilograms to micrograms, multiply the mass in kilograms by 1,000,000,000 (or $10^9$).",
    math: "Mass in Micrograms (µg) = Mass in Kilograms (kg) × 1,000,000,000",
    subtext: "Or: µg = kg × 10⁹"
  },
  formulaTitle: "Kilogram to Microgram Conversion Formula",
  practicalTip: {
    title: "Clinical Symbol Safety: 'mcg' vs. 'µg'",
    text: "In hospital charting and handwritten medical prescriptions, the Greek letter mu ('µ') can be easily misread as 'm' (milligram), leading to a catastrophic 1,000-fold overdose. Joint Commission safety guidelines strongly recommend writing 'mcg' or 'micrograms' in clinical documentation."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Thyroid Hormone Batch Compounding",
        subtitle: "A pharmaceutical laboratory synthesizes 0.00025 kilograms of synthetic levothyroxine powder. Calculate how many 50 µg tablets can be produced.",
        steps: [
          "Identify the bulk mass in kilograms: 0.00025 kg.",
          "Apply the conversion formula: µg = 0.00025 × 1,000,000,000.",
          "Perform the multiplication: 0.00025 × 10⁹ = 250,000 µg.",
          "Divide by individual tablet dose: 250,000 µg / 50 µg = 5,000 tablets.",
          "Conclude the calculation: 0.00025 kg equals 250,000 µg (enough for 5,000 tablets)."
        ]
      },
      {
        title: "Example 2: Environmental Soil Heavy Metal Sample",
        subtitle: "A 1.0 kg soil core sample contains 0.000015 kg of arsenic. Express the arsenic mass in micrograms to calculate parts per billion (ppb).",
        steps: [
          "Identify the contaminant mass: 0.000015 kg.",
          "Multiply by 10⁹: 0.000015 × 1,000,000,000 = 15,000 µg.",
          "Conclude the calculation: The sample contains 15,000 micrograms (15,000 µg/kg or 15 ppm)."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Microgram Reference Table",
    headers: ["Kilograms (kg)", "Micrograms (µg / mcg)", "Biochemical / Clinical Context"],
    rows: [
      { fromVal: "0.000000001", toVal: "1", extra: "Trace DNA extract from a single cell sample" },
      { fromVal: "0.000000025", toVal: "25", extra: "Daily therapeutic Vitamin D3 dose (1,000 IU)" },
      { fromVal: "0.0000001", toVal: "100", extra: "Standard daily adult Levothyroxine tablet" },
      { fromVal: "0.0000004", toVal: "400", extra: "Standard daily Folic acid dietary supplement" },
      { fromVal: "0.000001", toVal: "1,000", extra: "1 milligram (1,000 µg)" },
      { fromVal: "0.00001", toVal: "10,000", extra: "10 milligrams (10,000 µg)" },
      { fromVal: "0.0001", toVal: "100,000", extra: "100 milligrams (100,000 µg)" },
      { fromVal: "0.001", toVal: "1,000,000", extra: "1 gram (one million micrograms)" },
      { fromVal: "0.01", toVal: "10,000,000", extra: "10 grams (ten million micrograms)" },
      { fromVal: "1", toVal: "1,000,000,000", extra: "1 kilogram (one billion micrograms)" }
    ]
  },
  expertNote: {
    title: "Understanding Parts Per Billion (ppb)",
    text: "Because 1 kilogram equals 1,000,000,000 micrograms ($10^9\\text{ µg}$), a concentration of 1 microgram of contaminant per 1 kilogram of water or soil is exactly equivalent to 1 part per billion (1 ppb = 1 µg/kg). This direct mathematical symmetry is the backbone of environmental toxicology."
  },
  applications: {
    title: "Key Scientific Applications of kg to µg Conversions",
    items: [
      {
        title: "Clinical Endocrinology & Micro-Dosing",
        text: "Hormones, monoclonal antibodies, and potent cardiac glycosides require microgram-level precision to establish effective therapeutic windows without toxicity."
      },
      {
        title: "Environmental Toxicology & Water Quality",
        text: "EPA and WHO regulatory standards for heavy metals (such as lead, mercury, and cadmium) in drinking water are defined in micrograms per liter or micrograms per kilogram."
      },
      {
        title: "Atmospheric Aerosol & Air Pollution Monitoring",
        text: "Clean air monitoring stations capture airborne particulate matter (PM2.5 and PM10) on bulk filtration membranes, calculating atmospheric pollutant mass in micrograms."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in kg to µg Calculations",
    items: [
      "Confusing micrograms (µg) with milligrams (mg): A milligram is $10^{-3}\\text{ g}$, whereas a microgram is $10^{-6}\\text{ g}$. Mixing them up introduces a 1,000-fold error.",
      "Miscounting zeros in decimal conversions: When multiplying small decimals like 0.000002 kg, always use scientific notation ($2 \\times 10^{-6} \\times 10^9 = 2,000\\text{ µg}$) to avoid transcription mistakes.",
      "Using ambiguous symbols: Avoid writing 'ug' in medical charts where 'u' might be confused with a digit; use 'µg' or 'mcg'."
    ]
  },
  faqs: [
    {
      question: "How many micrograms are in one kilogram?",
      answer: "There are exactly 1,000,000,000 (one billion or 10⁹) micrograms in one kilogram (1 kg = 10⁹ µg)."
    },
    {
      question: "What is the formula to convert kg to µg?",
      answer: "The formula is: Mass in Micrograms (µg) = Mass in Kilograms (kg) × 1,000,000,000 (or kg × 10⁹)."
    },
    {
      question: "How many micrograms is 0.001 kg (1 gram)?",
      answer: "0.001 kg (1 gram) equals exactly 1,000,000 micrograms (one million µg)."
    },
    {
      question: "What is the difference between µg and mcg?",
      answer: "'µg' is the official SI abbreviation for microgram, while 'mcg' is the accepted medical abbreviation used in prescribing to avoid confusing 'µ' with 'm' (milligram)."
    },
    {
      question: "How many micrograms is 0.00005 kg?",
      answer: "0.00005 kg equals 50,000 micrograms (0.00005 × 1,000,000,000 = 50,000 µg or 50 mg)."
    },
    {
      question: "How do I convert micrograms back to kilograms?",
      answer: "Divide the microgram value by 1,000,000,000 (or multiply by 10⁻⁹ / 0.000000001) to find the mass in kilograms."
    },
    {
      question: "What is the relation between kg, mg, and µg?",
      answer: "1 kilogram = 1,000,000 milligrams = 1,000,000,000 micrograms. Each step differs by a factor of 1,000."
    },
    {
      question: "Why is 1 µg per kg equal to 1 ppb?",
      answer: "Because 1 kg contains 10⁹ (one billion) micrograms, 1 µg in 1 kg represents 1 part per billion (ppb)."
    }
  ],
  relatedList: [
    { label: "Kilogram to Milligram", from: "kilogram", to: "milligram" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Microgram", from: "gram", to: "microgram" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - SI Units Brochure: Prefix Definitions",
    "Institute for Safe Medication Practices (ISMP) - List of Error-Prone Abbreviations, Symbols, and Dose Designations",
    "U.S. Environmental Protection Agency (EPA) - Trace Contaminant Measurement Standards in Soil and Water"
  ]
};
