import { CustomArticleData } from "./types";

export const kilogramToImperialTon: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "imperial-ton",
  seoTitle: "Kilogram to Imperial Ton Converter - kg to lton",
  metaDescription: "Convert kilograms to imperial tons (long tons) with exact formulas, worked freight calculations, conversion tables, and maritime cargo guidelines.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-imperial-ton",
  h1: "Kilogram to Imperial Ton Converter",
  introduction: [
    "International shipping manifests, maritime freight charters, and heavy industrial metallurgy in Commonwealth jurisdictions frequently specify payload capacities in imperial tons—also known historically as long tons or British tons. In contrast, standard metric supply chains weigh commodities in kilograms.",
    "Because an imperial ton is defined as exactly 2,240 avoirdupois pounds, it equals approximately 1,016.047 kilograms—making it heavier than both the US short ton (907.185 kg) and the metric tonne (1,000 kg). Converting kilograms to imperial tons accurately is vital for dry-bulk vessel loading, crane rigging, and commodity trade contracts."
  ],
  quickAnswer: {
    text: "To convert kilograms to imperial tons (long tons), divide the kilogram figure by 1,016.0469088, or multiply by approximately 0.0009842065. For example, 10,000 kilograms equals approximately 9.842 imperial tons.",
    formulaDisplay: "Imperial Tons (lton) = Kilograms (kg) ÷ 1,016.0469",
    subtext: "1 imperial ton equals exactly 2,240 pounds or 1,016.0469088 kilograms."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the foundational base unit of mass in the International System of Units (SI). Under the 2019 General Conference on Weights and Measures (CGPM) redefinition, the kilogram is defined by fixing the numerical value of the Planck constant h to 6.62607015 × 10⁻³⁴ J·s. It serves as the worldwide benchmark for scientific measurement, industrial processing, and international consumer trade."
  },
  aboutTargetUnit: {
    title: "Understanding the Imperial Ton (lton)",
    text: "The imperial ton (symbol: lton, ton, or long ton) is an imperial unit of mass equal to 20 imperial hundredweight (cwt) of 112 pounds each, establishing an exact definition of 2,240 avoirdupois pounds (1,016.0469088 kg). Widely used across the United Kingdom, Commonwealth ports, naval architecture, and bulk shipping charter parties, the imperial ton represents significant bulk capacity in naval displacement and raw material haulage."
  },
  relationship: "The relationship between kilograms and imperial tons stems from the international avoirdupois pound definition (1 lb = 0.45359237 kg). Since one imperial ton contains exactly 2,240 pounds: 1 lton = 2,240 × 0.45359237 kg = 1,016.0469088 kg. Therefore, one kilogram equals approximately 0.0009842065 imperial tons.",
  relationshipTitle: "Mass Equivalence and Comparison Across Ton Standards",
  relationshipItems: [
    { label: "1 Imperial Ton (Long Ton)", value: "1,016.0469 kg (2,240 lb)" },
    { label: "1 Metric Ton (Tonne)", value: "1,000 kg (2,204.62 lb)" },
    { label: "1 US Short Ton", value: "907.1847 kg (2,000 lb)" },
    { label: "1 Kilogram (kg)", value: "≈ 0.0009842 imperial tons" }
  ],
  formula: {
    text: "To convert mass from kilograms into imperial tons, divide the kilogram value by 1,016.0469088 (or multiply by 0.0009842065).",
    math: "\\text{Mass (lton)} = \\frac{\\text{Mass (kg)}}{1,016.0469088} = \\text{Mass (kg)} \\times 0.0009842065",
    subtext: "To convert imperial tons back to kilograms: Mass (kg) = Mass (lton) × 1,016.0469088"
  },
  formulaTitle: "Kilogram to Imperial Ton Formula",
  practicalTip: {
    title: "Quick Estimation Rule",
    text: "Because an imperial ton (1,016 kg) is roughly 1.6% heavier than a metric tonne (1,000 kg), you can estimate imperial tons by dividing kilograms by 1,000 (to get metric tonnes) and then subtracting about 1.6%. For example, 50,000 kg ≈ 50 tonnes - 0.8 ≈ 49.2 imperial tons (exact: 49.21 lton)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Bulk Grain Vessel Loading",
        subtitle: "A grain silo loads 125,000 kilograms of malting barley into a bulk carrier chartered under UK long-ton contracts. Calculate the shipment in imperial tons.",
        steps: [
          "Identify cargo mass in kilograms: 125,000 kg.",
          "Apply the conversion formula: lton = kg ÷ 1,016.0469088.",
          "Calculate: 125,000 ÷ 1,016.0469088 ≈ 123.0258.",
          "Conclusion: The grain shipment equals approximately 123.03 imperial tons."
        ]
      },
      {
        title: "Example 2: Steel Billet Export Consignment",
        subtitle: "A foundry produces structural steel billets with a certified scale weight of 45,720 kilograms. Convert this batch to imperial long tons.",
        steps: [
          "State given mass: 45,720 kg.",
          "Divide by 1,016.0469: 45,720 ÷ 1,016.0469088 ≈ 44.9979.",
          "Conclusion: The steel batch weighs almost exactly 45.00 imperial tons."
        ]
      },
      {
        title: "Example 3: Heavy Machinery Rigging Check",
        subtitle: "A mobile harbour crane is rated for a safe working load of 35 imperial tons. An excavator weighs 34,500 kilograms. Verify if the lift is within crane capacity.",
        steps: [
          "Convert excavator mass: 34,500 ÷ 1,016.0469088 ≈ 33.955 lton.",
          "Compare: 33.955 lton is below the 35.0 lton safety threshold.",
          "Conclusion: The 34,500 kg lift corresponds to 33.96 imperial tons, within operational limits."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Imperial Ton Quick Reference Table",
    headers: ["Kilograms (kg)", "Imperial Tons (lton)", "Pounds (lb)", "Metric Tonnes (t)"],
    rows: [
      { fromVal: "500 kg", toVal: "0.4921 lton", extra: "1,102.3 lb", extra2: "0.500 t" },
      { fromVal: "1,000 kg", toVal: "0.9842 lton", extra: "2,204.6 lb", extra2: "1.000 t" },
      { fromVal: "1,016 kg", toVal: "1.0000 lton", extra: "2,240.0 lb", extra2: "1.016 t" },
      { fromVal: "2,500 kg", toVal: "2.4605 lton", extra: "5,511.6 lb", extra2: "2.500 t" },
      { fromVal: "5,000 kg", toVal: "4.9210 lton", extra: "11,023.1 lb", extra2: "5.000 t" },
      { fromVal: "10,000 kg", toVal: "9.8421 lton", extra: "22,046.2 lb", extra2: "10.000 t" },
      { fromVal: "25,000 kg", toVal: "24.6052 lton", extra: "55,115.6 lb", extra2: "25.000 t" },
      { fromVal: "50,000 kg", toVal: "49.2103 lton", extra: "110,231.1 lb", extra2: "50.000 t" },
      { fromVal: "100,000 kg", toVal: "98.4207 lton", extra: "220,462.3 lb", extra2: "100.000 t" },
      { fromVal: "250,000 kg", toVal: "246.0516 lton", extra: "551,155.7 lb", extra2: "250.000 t" }
    ]
  },
  expertNote: {
    title: "Maritime Naval Displacement and Charter Parties",
    text: "Historical maritime treaties, such as the Washington Naval Treaty, defined warship standard displacement strictly in long tons (2,240 lb). Modern dry bulk maritime charter parties frequently quote demurrage and freight rates per long ton. Mistaking imperial long tons for metric tonnes on a 60,000-tonne Panamax bulker introduces a cargo deficit of over 960 tonnes—an error worth tens of thousands of dollars in ocean freight."
  },
  applications: {
    title: "Practical Industrial & Maritime Applications",
    items: [
      {
        title: "Maritime Freight Charter Agreements",
        text: "Shipping agents handling coal, iron ore, and scrap metal charters across Commonwealth routes convert weighbridge kilogram measurements into imperial long tons to align billing with contractual charter terms."
      },
      {
        title: "Naval Architecture and Ship Stability",
        text: "Naval architects calculating deadweight tonnage (DWT) and hydrostatic displacement for older vessel retrofits convert modern tank sounding measurements in kilograms to imperial long tons."
      },
      {
        title: "Heavy Metallurgy and Scrap Recycling",
        text: "Metal recyclers and blast furnace operators trade heavy melting steel scrap (HMS 1/2) in gross or long tons, converting certified metric scale tickets into imperial tons for settlement."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing the three 'tons': An imperial ton (2,240 lb = 1,016.05 kg) is 12% heavier than a US short ton (2,000 lb = 907.18 kg) and 1.6% heavier than a metric tonne (1,000 kg). Always verify which ton a contract specifies.",
      "Dividing by 1,000 instead of 1,016.05: Dividing by 1,000 produces metric tonnes, not imperial tons. This overstates payload count by 1.6%.",
      "Using rounded conversion factors in freight: For large cargo consignments of thousands of tonnes, using 1,016 kg instead of 1,016.0469 kg creates cumulative mass discrepancies.",
      "Conflating gross tonnage with mass: Gross tonnage (GT) in shipping is a unit of internal enclosed volume (100 cubic feet per register ton), not a measurement of physical mass."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilograms to imperial tons?",
      answer: "To convert kilograms (kg) to imperial tons (lton), divide the kilogram figure by 1,016.0469088, or multiply by 0.0009842065. For example, 5,000 kg divided by 1,016.0469 equals approximately 4.921 imperial tons."
    },
    {
      question: "What is an imperial ton in kilograms?",
      answer: "An imperial ton (also called a long ton or UK ton) is equal to exactly 1,016.0469088 kilograms (2,240 avoirdupois pounds)."
    },
    {
      question: "What is the difference between an imperial ton and a metric ton?",
      answer: "A metric ton (tonne) is exactly 1,000 kilograms (2,204.62 pounds). An imperial ton is 2,240 pounds (1,016.05 kilograms), making the imperial ton approximately 16.05 kg (about 1.6%) heavier than the metric ton."
    },
    {
      question: "What is the difference between a long ton and a short ton?",
      answer: "A long ton (imperial ton) is 2,240 pounds (1,016.05 kg), common in the UK and traditional shipping. A short ton (US ton) is 2,000 pounds (907.18 kg), standard in the United States."
    },
    {
      question: "How many kilograms are in 10 imperial tons?",
      answer: "10 imperial tons equals exactly 10,160.47 kilograms (10 × 1,016.0469 kg)."
    },
    {
      question: "How do I convert imperial tons back to kilograms?",
      answer: "To convert imperial tons back to kilograms, multiply the imperial ton value by 1,016.0469088. For example, 2.5 imperial tons × 1,016.0469 = 2,540.12 kg."
    },
    {
      question: "Is the imperial ton still used today?",
      answer: "Yes. While metric tonnes are official internationally, imperial long tons remain actively used in maritime cargo charters, naval displacement specifications, and traditional scrap metal trading in the UK and former Commonwealth nations."
    },
    {
      question: "What is the symbol for imperial ton?",
      answer: "The imperial ton is commonly abbreviated as 'lton' (long ton), 'ton (UK)', or simply 'ton' in regions where imperial measures prevail."
    },
    {
      question: "How many pounds are in an imperial ton?",
      answer: "There are exactly 2,240 avoirdupois pounds in one imperial ton (20 hundredweight of 112 pounds each)."
    }
  ],
  relatedList: [
    { label: "Kilogram to US Ton", from: "kilogram", to: "us-ton" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Imperial Ton to Kilogram", from: "imperial-ton", to: "kilogram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices</em>.",
    "Brodie, Peter. <em>Commercial Shipping Handbook</em>. Informa Law from Routledge."
  ]
};
