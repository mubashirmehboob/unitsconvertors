import { CustomArticleData } from "./types";

export const kilogramToMetricTon: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "metric-ton",
  seoTitle: "Kilogram to Metric Ton Converter - kg to t (Tonnes)",
  metaDescription: "Convert kilograms to metric tons (kg to t) instantly. Learn the clean 1,000 division formula, industrial cargo calculation examples, and tonnes conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-metric-ton",
  h1: "Kilogram to Metric Ton Converter",
  introduction: [
    "The kilogram and the metric ton (officially known as the tonne in SI terminology) are the primary units used globally to quantify heavy mass, industrial materials, and commercial cargo. Accepted worldwide under the International System of Units (SI), both units operate on clean decimal multiples of ten, allowing seamless scaling between everyday weights and massive industrial quantities.",
    "Because one metric ton is defined as exactly 1,000 kilograms (one megagram or $10^6$ grams), converting kilograms to metric tons requires simply dividing by 1,000. This calculation is indispensable for maritime shipping manifests, civil engineering aggregate orders, agricultural harvest yields, and industrial recycling operations."
  ],
  quickAnswer: {
    text: "To convert kilograms to metric tons, divide the kilogram value by 1,000 (or multiply by 0.001). For example, 4,500 kilograms is equal to exactly 4.5 metric tons.",
    formulaDisplay: "1 kg = 0.001 t (Metric Ton)",
    subtext: "Divide any mass in kilograms by 1,000 (or shift the decimal point 3 places to the left) to find the equivalent metric tons."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Derived from the fixed numerical value of the Planck constant, the kilogram is the global foundation for all mass measurement, ranging from standard laboratory calibrations to heavy transport cargo weights."
  },
  aboutTargetUnit: {
    title: "Understanding the Metric Ton (t / Tonne)",
    text: "The metric ton (symbol: t, also spelled 'tonne' and mathematically identical to one megagram, 1 Mg) is a non-SI unit accepted for use with the SI. Equal to exactly 1,000 kilograms or 2,204.62262 pounds, the metric ton is the global standard for measuring ocean shipping containers, raw mineral extraction, structural steel fabrication, and crop production."
  },
  relationship: "The relationship between kilograms and metric tons is exact by definition: 1 metric ton = 1,000 kilograms = 1,000,000 grams. Conversely, 1 kilogram equals exactly 0.001 metric tons ($10^{-3}\\text{ t}$).",
  relationshipTitle: "Kilograms vs. Metric Tons Scaling",
  relationshipItems: [
    { label: "1 Metric Ton (t)", value: "1,000 Kilograms (kg)" },
    { label: "1 Kilogram (kg)", value: "0.001 Metric Tons (t)" },
    { label: "1 Metric Ton (t)", value: "2,204.62 Pounds (lbs)" },
    { label: "10,000 Kilograms (kg)", value: "10 Metric Tons (t)" }
  ],
  formula: {
    text: "To convert mass from kilograms to metric tons, divide the kilogram value by 1,000.",
    math: "Mass in Metric Tons (t) = Mass in Kilograms (kg) / 1,000",
    subtext: "Or: t = kg × 0.001"
  },
  formulaTitle: "Kilogram to Metric Ton Conversion Formula",
  practicalTip: {
    title: "Shipping & Logistics Tip: Decimal Shift",
    text: "To convert kilograms to tonnes in your head, simply move the decimal point three places to the left. For example, a shipping pallet weighing 1,250.0 kg becomes exactly 1.25 metric tons."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Shipping Container Freight Weigh-In",
        subtitle: "A 20-foot intermodal shipping container holds 18,450 kilograms of industrial machinery. Convert this payload into metric tons for a cargo bill of lading.",
        steps: [
          "Identify the weight in kilograms: 18,450 kg.",
          "Apply the formula: t = 18,450 / 1,000.",
          "Perform the division: 18,450 / 1,000 = 18.45 t.",
          "Conclude the calculation: The container payload equals exactly 18.45 metric tons."
        ]
      },
      {
        title: "Example 2: Civil Construction Concrete Aggregate",
        subtitle: "A ready-mix concrete batching plant orders 125,000 kilograms of gravel aggregate. Calculate the order in metric tons.",
        steps: [
          "Identify the weight in kilograms: 125,000 kg.",
          "Multiply by 0.001: 125,000 × 0.001 = 125 t.",
          "Conclude the calculation: The concrete plant ordered exactly 125 metric tons of gravel."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Metric Ton Reference Table",
    headers: ["Kilograms (kg)", "Metric Tons (t / Tonnes)", "Pounds Equivalent", "Industrial / Practical Application"],
    rows: [
      { fromVal: "100", toVal: "0.10", extra: "220.46 lbs", extra2: "One metric quintal (light agricultural sack)" },
      { fromVal: "500", toVal: "0.50", extra: "1,102.31 lbs", extra2: "Small bulk builder's bag of sand" },
      { fromVal: "1,000", toVal: "1.00", extra: "2,204.62 lbs", extra2: "Standard 1 metric ton bulk aggregate bag" },
      { fromVal: "1,500", toVal: "1.50", extra: "3,306.93 lbs", extra2: "Average compact passenger car curb weight" },
      { fromVal: "2,000", toVal: "2.00", extra: "4,409.25 lbs", extra2: "Full-size SUV or light commercial van" },
      { fromVal: "5,000", toVal: "5.00", extra: "11,023.11 lbs", extra2: "Commercial flatbed truck payload" },
      { fromVal: "10,000", toVal: "10.00", extra: "22,046.23 lbs", extra2: "Medium-duty construction excavator" },
      { fromVal: "25,000", toVal: "25.00", extra: "55,115.57 lbs", extra2: "Loaded 40-foot intermodal shipping container" },
      { fromVal: "50,000", toVal: "50.00", extra: "110,231.13 lbs", extra2: "Commercial heavy freight tractor-trailer rig" }
    ]
  },
  expertNote: {
    title: "Metric Ton vs. US Short Ton vs. Imperial Long Ton",
    text: "Always clarify which 'ton' is being referenced:\n• 1 Metric Ton (tonne, t) = 1,000 kg = 2,204.62 lbs.\n• 1 US Short Ton (ton) = 907.185 kg = 2,000 lbs.\n• 1 Imperial Long Ton (lton) = 1,016.05 kg = 2,240 lbs.\nIn international maritime trade, 'ton' almost always implies the 1,000 kg metric ton."
  },
  applications: {
    title: "Major Industries Using Kilogram to Metric Ton Conversions",
    items: [
      {
        title: "Maritime Freight & Ocean Shipping",
        text: "The International Maritime Organization (IMO) SOLAS regulations mandate verified gross mass (VGM) declarations for all shipping containers in metric tons."
      },
      {
        title: "Mining & Heavy Civil Construction",
        text: "Extraction rates for iron ore, coal, asphalt, and crushed aggregate are recorded and invoiced in metric tons, converting from truck scale kilograms."
      },
      {
        title: "Agriculture & Crop Commodity Markets",
        text: "Global wheat, corn, soybean, and coffee harvest yields and import/export quotas are globally quoted in metric tons (tonnes per hectare)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kg to Metric Tons",
    items: [
      "Multiplying instead of dividing: Because the metric ton is 1,000 times larger than a kilogram, converting kg to tonnes must always result in a smaller number.",
      "Confusing metric tons with US short tons: A metric ton (1,000 kg / 2,205 lbs) is roughly 10% heavier than a US short ton (907 kg / 2,000 lbs).",
      "Spelling confusion ('ton' vs 'tonne'): In Britain and international standards, 'tonne' specifically denotes the 1,000 kg metric unit, while 'ton' may refer to the imperial 2,240 lb long ton."
    ]
  },
  faqs: [
    {
      question: "How many kilograms are in one metric ton?",
      answer: "There are exactly 1,000 kilograms in one metric ton (1 t = 1,000 kg)."
    },
    {
      question: "What is the formula to convert kg to metric tons?",
      answer: "The formula is: Mass in Metric Tons (t) = Mass in Kilograms (kg) / 1,000 (or kg × 0.001)."
    },
    {
      question: "How many metric tons is 5,000 kg?",
      answer: "5,000 kg is equal to exactly 5 metric tons (5,000 / 1,000 = 5 t)."
    },
    {
      question: "What is the difference between a ton and a tonne?",
      answer: "'Tonne' (or metric ton) is equal to 1,000 kg (2,204.6 lbs). 'Ton' without qualification in the US means a short ton of 2,000 lbs (907.18 kg)."
    },
    {
      question: "How many metric tons is 2,500 kg?",
      answer: "2,500 kg equals exactly 2.5 metric tons (2.5 tonnes)."
    },
    {
      question: "What is the official symbol for a metric ton?",
      answer: "The official SI-recognized symbol for the metric ton (tonne) is a lowercase 't'."
    },
    {
      question: "How do I convert metric tons back to kilograms?",
      answer: "Multiply the metric ton value by 1,000 to find the equivalent mass in kilograms."
    },
    {
      question: "How many pounds are in one metric ton?",
      answer: "One metric ton equals exactly 2,204.62262185 pounds (approx. 2,204.62 lbs)."
    }
  ],
  relatedList: [
    { label: "Kilogram to US Ton", from: "kilogram", to: "us-ton" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Metric Ton", from: "gram", to: "metric-ton" },
    { label: "Kilogram to Stone", from: "kilogram", to: "stone" }
  ],
  references: [
    "International Maritime Organization (IMO) - SOLAS Verified Gross Mass (VGM) Regulations",
    "BIPM - The International System of Units (SI Brochure, 9th Edition)",
    "ISO 80000-4: Quantities and Units - Mechanics: Non-SI Units Accepted for Use"
  ]
};
