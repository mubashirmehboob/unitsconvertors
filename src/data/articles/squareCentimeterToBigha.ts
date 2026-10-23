import { CustomArticleData } from "./types";

export const squareCentimeterToBigha: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "bigha",
  seoTitle: "Square Centimeter to Bigha Converter - cm² to Bigha",
  metaDescription: "Convert square centimeters to bigha (cm² to bigha) with standard cadastral factors, regional land measurement distinctions, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-bigha",
  h1: "Square Centimeter to Bigha Converter",
  introduction: [
    "In South Asian civil engineering, real estate title verification, agricultural property development, and cadastral land records, surveyors often bridge metric scientific data with traditional agrarian units. Architectural blueprints, concrete footing specs, and precision laboratory soil sampling plots are drafted in metric square centimeters (cm²), whereas land registries, agricultural deeds, and inheritance records across India, Bangladesh, and Nepal use the bigha.",
    "Because the bigha originated as a customary land measurement unit prior to metrication, its standardized legal baseline in modern digital land revenue records corresponds to the standard Pucca Bigha of 2,529.285 square meters (3,025 square yards or 27,225 square feet). Since one square meter contains exactly 10,000 square centimeters, one standard bigha comprises 25,292,850 square centimeters. Converting square centimeters to bigha requires dividing the measured area by 25,292,850."
  ],
  quickAnswer: {
    text: "To convert square centimeters to standard bigha, divide the square centimeter value by 25,292,850. For example, 50,585,700 cm² equals exactly 2.0 standard bighas.",
    formulaDisplay: "Bigha = Square Centimeters (cm²) ÷ 25,292,850",
    subtext: "1 standard bigha equals 25,292,850 cm² (approximately 2,529.285 square meters or 0.625 acres)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of surface area representing the planar area inside a square with sides of one centimeter (0.01 m). Equal to 0.0001 square meters (10⁻⁴ m²), it provides the precision needed for architectural finishing specifications, horticultural test plots, pavement core analyses, and structural cross-sections."
  },
  aboutTargetUnit: {
    title: "Understanding the Bigha",
    text: "The bigha is a traditional unit of land measurement widely used across Northern and Eastern India, Bangladesh, and Nepal. While regional historical definitions varied between states, state revenue departments and cadastral digitization portals (such as Bhulekh) commonly standardize the Pucca Bigha at 2,529.285 square meters (equivalent to 3,025 square yards, 27,225 square feet, or 20 biswas). It is the customary benchmark for agricultural property sales and rural development zoning."
  },
  relationship: "The conversion between square centimeters and the standard bigha is rooted in metric land standardization. One legal bigha equals 2,529.285 square meters. Because each square meter contains $(100\\text{ cm})^2 = 10,000\\text{ cm}^2$, multiplying 2,529.285 m² by 10,000 cm²/m² yields 25,292,850 square centimeters per bigha. Therefore, 1 square centimeter equals approximately $3.953685 \\times 10^{-8}$ bighas.",
  relationshipTitle: "Cadastral Conversion: cm² to Standard Bigha",
  relationshipItems: [
    { label: "1 Standard Bigha", value: "25,292,850 Square Centimeters (cm²)" },
    { label: "0.5 Bigha (10 Biswas)", value: "12,646,425 Square Centimeters (cm²)" },
    { label: "0.1 Bigha (2 Biswas)", value: "2,529,285 Square Centimeters (cm²)" },
    { label: "1,000,000 cm² (100 m²)", value: "≈ 0.039537 Bigha" },
    { label: "1 Square Centimeter (cm²)", value: "≈ 3.953685 × 10⁻⁸ Bigha" }
  ],
  formula: {
    text: "To convert area from square centimeters to standard bighas, divide the square centimeter value by 25,292,850.",
    math: "\\text{Area (bigha)} = \\frac{\\text{Area (cm}^2\\text{)}}{25,292,850} = \\text{Area (cm}^2\\text{)} \\times 3.953685 \\times 10^{-8}",
    subtext: "To convert bighas to square centimeters: Area (cm²) = Area (bigha) × 25,292,850"
  },
  formulaTitle: "Square Centimeter to Bigha Mathematical Formula",
  practicalTip: {
    title: "Two-Step Calculation via Square Meters",
    text: "Because dividing directly by 25,292,850 can be cumbersome on hand calculators, convert in two intuitive steps: first divide cm² by 10,000 to obtain square meters (m²), then divide the result by 2,529.285 to get bighas. For example, 75,878,550 cm² becomes 7,587.855 m², which divided by 2,529.285 equals exactly 3.0 bighas."
  },
  examples: {
    title: "Cadastral and Agricultural Land Survey Examples",
    items: [
      {
        title: "Example 1: Agronomy Field Trial Enclosure",
        subtitle: "A crop research institute partitions an agricultural research station measuring 101,171,400 square centimeters. Express this field area in standard bighas for local revenue reporting.",
        steps: [
          "State the area: 101,171,400 cm².",
          "Apply the standard formula: bigha = cm² ÷ 25,292,850.",
          "Calculate: 101,171,400 ÷ 25,292,850 = 4.0 bighas.",
          "Conclusion: The trial station measures exactly 4.0 standard bighas."
        ]
      },
      {
        title: "Example 2: Commercial Greenhouse Parcel",
        subtitle: "A commercial horticultural enterprise constructs a high-density polyhouse spanning 37,939,275 square centimeters. Determine the parcel footprint in bighas.",
        steps: [
          "Convert cm² to m²: 37,939,275 ÷ 10,000 = 3,793.9275 m².",
          "Divide by square meters per bigha: 3,793.9275 ÷ 2,529.285 = 1.5 bighas.",
          "Conclusion: The polyhouse footprint covers exactly 1.5 bighas."
        ]
      },
      {
        title: "Example 3: Solar Installation Border Survey",
        subtitle: "A rural micro-grid substation boundary is recorded in digital drone survey CAD drawings as 63,232,125 square centimeters. Convert this measurement to bighas.",
        steps: [
          "State value: 63,232,125 cm².",
          "Divide by 25,292,850: 63,232,125 ÷ 25,292,850 = 2.5 bighas.",
          "Conclusion: The substation land boundary encompasses 2.5 bighas."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Standard Bigha Reference Table",
    headers: ["Square Centimeters (cm²)", "Standard Bigha", "Square Meters (m²)", "Biswa (1/20 Bigha)"],
    rows: [
      { fromVal: "1,264,643 cm²", toVal: "0.050 bigha", extra: "126.46 m²", extra2: "1.0 biswa" },
      { fromVal: "2,529,285 cm²", toVal: "0.100 bigha", extra: "252.93 m²", extra2: "2.0 biswas" },
      { fromVal: "6,323,213 cm²", toVal: "0.250 bigha", extra: "632.32 m²", extra2: "5.0 biswas" },
      { fromVal: "12,646,425 cm²", toVal: "0.500 bigha", extra: "1,264.64 m²", extra2: "10.0 biswas" },
      { fromVal: "18,969,638 cm²", toVal: "0.750 bigha", extra: "1,896.96 m²", extra2: "15.0 biswas" },
      { fromVal: "25,292,850 cm²", toVal: "1.000 bigha", extra: "2,529.29 m²", extra2: "20.0 biswas" },
      { fromVal: "50,585,700 cm²", toVal: "2.000 bighas", extra: "5,058.57 m²", extra2: "40.0 biswas" },
      { fromVal: "75,878,550 cm²", toVal: "3.000 bighas", extra: "7,587.86 m²", extra2: "60.0 biswas" },
      { fromVal: "101,171,400 cm²", toVal: "4.000 bighas", extra: "10,117.14 m²", extra2: "80.0 biswas" },
      { fromVal: "126,464,250 cm²", toVal: "5.000 bighas", extra: "12,646.43 m²", extra2: "100.0 biswas" }
    ]
  },
  expertNote: {
    title: "Regional Bigha Variations: Pucca vs. Kachha Bigha",
    text: "While 25,292,850 cm² (2,529.285 m²) represents the standard Pucca Bigha prevalent in legal registrations across Uttar Pradesh, Rajasthan, and Haryana, significant regional differences exist. In parts of western Uttar Pradesh, a 'Kachha Bigha' is used informally, measuring one-third of a Pucca Bigha (843.09 m² or 8,430,950 cm²). In West Bengal and Assam, a bigha is traditionally 1,337.8 m² (14,400 sq ft or 13,378,038 cm²). Always verify the specific state land revenue code before finalizing deed registrations."
  },
  applications: {
    title: "Civil Surveying, Property, and Agronomy Applications",
    items: [
      {
        title: "Land Record Digitization & Bhulekh Portals",
        text: "Government land record modernization programs convert high-resolution aerial photogrammetry grids (measured in cm²) into digitized bigha parcel parcels for online mutation records."
      },
      {
        title: "Agro-Industrial Warehouse Facility Planning",
        text: "Industrial civil engineers convert structural architectural CAD slab areas into bighas to verify floor-area-ratio (FAR) compliance with rural municipal development bylaws."
      },
      {
        title: "Agricultural Solar Farm Boundary Assessment",
        text: "Solar developers convert photovoltaic tracking racking footprints from equipment vendor metric sheets into rural bigha lease agreements with local farming landholders."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming all bighas are identical: A standard Pucca Bigha is 2,529.285 m², but Bengal bighas (1,337.8 m²) and Himachal bighas (approx 800 m²) differ substantially. Applying the wrong regional multiplier produces major property discrepancies.",
      "Forgetting to square the linear conversion factor: Linear meters to centimeters require a factor of 100, but area requires 10,000 (100 × 100). Dividing by 2,529.285 without accounting for the 10,000 cm²/m² factor causes a 10,000-fold error.",
      "Confusing bigha with biswa: One bigha contains 20 biswas. Dividing by biswa values instead of bigha values produces a 20-fold area error.",
      "Rounding fractional remainders prematurely: Land transactions involve valuable real estate where decimal points translate to significant physical ground area. Maintain at least six decimal places in intermediate calculations."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to bigha?",
      answer: "To convert square centimeters (cm²) to standard bighas, divide the square centimeter value by 25,292,850. For example, 50,585,700 cm² divided by 25,292,850 equals exactly 2 bighas."
    },
    {
      question: "How many square centimeters are in one standard bigha?",
      answer: "One standard Pucca Bigha contains exactly 25,292,850 square centimeters. This is derived from 2,529.285 square meters multiplied by 10,000 cm² per square meter."
    },
    {
      question: "What is the easiest way to calculate cm² to bigha?",
      answer: "The easiest way is a two-step method: first divide the square centimeters by 10,000 to get square meters, then divide that result by 2,529.285 to get standard bighas."
    },
    {
      question: "What is the difference between a Pucca Bigha and a Kachha Bigha?",
      answer: "A Pucca Bigha is the standardized legal unit equal to 2,529.285 square meters (25,292,850 cm²). A Kachha Bigha is an informal rural unit used in parts of northern India equal to one-third of a Pucca Bigha (843.09 m² or 8,430,950 cm²)."
    },
    {
      question: "How many bighas is 10,000,000 square centimeters?",
      answer: "Ten million square centimeters equals approximately 0.3954 standard bighas (or about 7.9 biswas), corresponding to 1,000 square meters."
    },
    {
      question: "How many square centimeters are in one biswa?",
      answer: "Since one standard bigha contains 20 biswas, one biswa contains 25,292,850 ÷ 20 = 1,264,642.5 square centimeters (126.46 m²)."
    },
    {
      question: "How many bighas are in one hectare?",
      answer: "One hectare contains 10,000 square meters (100,000,000 cm²). Dividing 10,000 by 2,529.285 shows that one hectare equals approximately 3.9537 standard bighas."
    },
    {
      question: "How do I convert bigha back to square centimeters?",
      answer: "Multiply the bigha value by 25,292,850. For example, 1.5 bighas multiplied by 25,292,850 equals 37,939,275 square centimeters."
    },
    {
      question: "Does the value of a bigha vary between Indian states?",
      answer: "Yes. While government revenue portals frequently use the Pucca Bigha (2,529.285 m²), West Bengal standardizes bigha at 1,337.8 m², and parts of Himachal Pradesh and Uttarakhand define it near 800 m²."
    },
    {
      question: "Is bigha recognized by the International System of Units (SI)?",
      answer: "No. The bigha is a traditional non-SI customary unit. However, it remains a legally recognized land measurement unit in state revenue records throughout South Asia."
    }
  ],
  relatedList: [
    { label: "Bigha to Square Centimeter", from: "bigha", to: "square-centimeter" },
    { label: "Square Meter to Bigha", from: "square-meter", to: "bigha" },
    { label: "Square Centimeter to Hectare", from: "square-centimeter", to: "hectare" },
    { label: "Square Centimeter to Kanal", from: "square-centimeter", to: "kanal" }
  ],
  references: [
    "Department of Land Resources, Government of India. <em>Digital India Land Records Modernization Programme (DILRMP)</em>.",
    "Survey of India. <em>Cadastral Survey and Land Revenue Measurement Manual</em>.",
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition."
  ]
};
