import { CustomArticleData } from "./types";

export const squareCentimeterToSquareKilometer: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-kilometer",
  seoTitle: "Square Centimeter to Square Kilometer Converter - cm² to km²",
  metaDescription: "Convert square centimeters to square kilometers (cm² to km²). Learn the 10¹⁰ scale relationship, map scale area calculations, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-kilometer",
  h1: "Square Centimeter to Square Kilometer Converter",
  introduction: [
    "In cartography, satellite remote sensing, environmental geology, and geographic information systems (GIS), analysts frequently bridge the physical dimensions of paper maps, photographic prints, and sensor detectors in square centimeters (cm²) with terrestrial landscapes measured in square kilometers (km²). Whether calculating how many square kilometers of ground terrain correspond to a square centimeter on a topographic map or scaling laboratory soil erosion samples to entire river catchments, understanding this ten-billion-to-one ratio is vital.",
    "Because area expands with the square of linear distance, moving from centimeters to kilometers encompasses two major metric scaling jumps. Since one kilometer contains 1,000 meters and each meter contains 100 centimeters, 1 linear kilometer equals 100,000 centimeters ($10^5\\text{ cm}$). Squaring this factor reveals that 1 square kilometer contains exactly ten billion ($10^{10}$) square centimeters. Consequently, one square centimeter equals $10^{-10}$ square kilometers."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square kilometers, divide the square centimeter value by 10,000,000,000 (10¹⁰), or multiply by 10⁻¹⁰ (0.0000000001). For example, 50,000,000,000 cm² equals exactly 5 km².",
    formulaDisplay: "Square Kilometers (km²) = Square Centimeters (cm²) ÷ 10,000,000,000",
    subtext: "1 square kilometer is equal to exactly 10,000,000,000 square centimeters (1 cm² = 10⁻¹⁰ km²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the space enclosed by a square with sides of one centimeter. Equal to 0.0001 square meters ($10^{-4}\\text{ m}^2$) or 100 square millimeters, it is the standard laboratory, printing, and cartographic map-sheet measurement unit for small physical surfaces."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is the SI derived unit for measuring extensive land areas, defined as the surface enclosed by a square whose sides measure exactly one kilometer (1,000 meters). Equivalent to 1,000,000 square meters, 100 hectares, or approximately 247.105 acres, it is the benchmark metric unit for regional zoning, national geography, and climate modeling."
  },
  relationship: "The mathematical ratio between square centimeters and square kilometers is governed by metric exponentiation: 1 km = 1,000 m = 100,000 cm ($10^5\\text{ cm}$). Squaring both linear dimensions gives $(1\\text{ km})^2 = (100,000\\text{ cm})^2 = 10,000,000,000\\text{ cm}^2 = 10^{10}\\text{ cm}^2$. Inverting this relationship establishes that 1 square centimeter equals exactly $10^{-10}$ square kilometers (0.0000000001 km²).",
  relationshipTitle: "Ten-Billion Metric Scale Equivalence",
  relationshipItems: [
    { label: "1 Square Kilometer (km²)", value: "Exactly 10,000,000,000 cm² (10¹⁰ cm²)" },
    { label: "1 Square Centimeter (cm²)", value: "Exactly 10⁻¹⁰ km² (0.0000000001 km²)" },
    { label: "1 Hectare (ha)", value: "100,000,000 cm² (10⁸ cm² = 0.01 km²)" },
    { label: "1 Square Meter (m²)", value: "10,000 cm² (10⁻⁶ km²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square kilometers, divide the square centimeter value by 10,000,000,000 (or multiply by 10⁻¹⁰).",
    math: "\\text{Area (km}^2\\text{)} = \\frac{\\text{Area (cm}^2\\text{)}}{10,000,000,000} = \\text{Area (cm}^2\\text{)} \\times 10^{-10}",
    subtext: "To convert square kilometers back to square centimeters: Area (cm²) = Area (km²) × 10,000,000,000"
  },
  formulaTitle: "Square Centimeter to Square Kilometer Conversion Formula",
  practicalTip: {
    title: "Scientific Notation and the Two-Step Metric Jump",
    text: "When performing manual calculations with large cm² numbers, convert square centimeters to square meters first by dividing by 10,000, then divide square meters by 1,000,000 to reach square kilometers. For example: 500,000,000 cm² ÷ 10,000 = 50,000 m²; 50,000 m² ÷ 1,000,000 = 0.05 km²."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Topographic Map Scale Area Translation",
        subtitle: "On a 1:50,000 scale topographic map, a nature reserve polygon measures 16 square centimeters. Determine the actual ground surface area represented in square kilometers.",
        steps: [
          "Determine linear ground scale: 1 cm on map = 50,000 cm on ground = 500 m = 0.5 km.",
          "Determine area scale factor: (0.5 km/cm)² = 0.25 km² per cm² of map area.",
          "Alternative via direct cm²: 16 cm² on map represents 16 × (50,000)² = 16 × 2,500,000,000 = 40,000,000,000 ground cm².",
          "Convert ground cm² to km²: 40,000,000,000 ÷ 10,000,000,000 = 4.0 km².",
          "Conclusion: 16 cm² on the map represents 4.0 square kilometers of terrestrial terrain."
        ]
      },
      {
        title: "Example 2: Industrial Manufacturing Facility Ground Footprint",
        subtitle: "A semiconductor fabrication cleanroom complex spans 2,500,000,000 square centimeters of built floor space. Convert this area into square kilometers.",
        steps: [
          "State area in cm²: 2,500,000,000 cm².",
          "Apply formula: Area (km²) = cm² ÷ 10¹⁰.",
          "Calculate: 2,500,000,000 ÷ 10,000,000,000 = 0.25 km².",
          "Conclusion: The cleanroom facility covers 0.25 square kilometers (25 hectares or 250,000 m²)."
        ]
      },
      {
        title: "Example 3: Urban Pavement Runoff Catchment",
        subtitle: "An urban drainage zone measures 10,000,000,000 cm². What is this area in square kilometers?",
        steps: [
          "Given: 10,000,000,000 cm².",
          "Calculate: 10,000,000,000 ÷ 10,000,000,000 = 1.0.",
          "Conclusion: 10 billion square centimeters equals exactly 1.0 square kilometer."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Kilometer Quick Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Kilometers (km²)", "Square Meters (m²)", "Hectares (ha)"],
    rows: [
      { fromVal: "1,000,000 cm²", toVal: "0.0001 km²", extra: "100 m²", extra2: "0.01 ha" },
      { fromVal: "10,000,000 cm²", toVal: "0.0010 km²", extra: "1,000 m²", extra2: "0.10 ha" },
      { fromVal: "100,000,000 cm²", toVal: "0.0100 km²", extra: "10,000 m²", extra2: "1.00 ha" },
      { fromVal: "500,000,000 cm²", toVal: "0.0500 km²", extra: "50,000 m²", extra2: "5.00 ha" },
      { fromVal: "1,000,000,000 cm²", toVal: "0.1000 km²", extra: "100,000 m²", extra2: "10.00 ha" },
      { fromVal: "2,500,000,000 cm²", toVal: "0.2500 km²", extra: "250,000 m²", extra2: "25.00 ha" },
      { fromVal: "5,000,000,000 cm²", toVal: "0.5000 km²", extra: "500,000 m²", extra2: "50.00 ha" },
      { fromVal: "10,000,000,000 cm²", toVal: "1.0000 km²", extra: "1,000,000 m²", extra2: "100.00 ha" },
      { fromVal: "25,000,000,000 cm²", toVal: "2.5000 km²", extra: "2,500,000 m²", extra2: "250.00 ha" },
      { fromVal: "50,000,000,000 cm²", toVal: "5.0000 km²", extra: "5,000,000 m²", extra2: "500.00 ha" }
    ]
  },
  expertNote: {
    title: "Cartographic Scaling Rule: The Square of the Representative Fraction",
    text: "When converting map measurements in cm² to terrestrial area in km², never multiply the map area directly by the map's linear scale. For a map with representative fraction $1 : S$ (for example, $1:25,000$ where $S = 25,000$), the area ratio scales as $S^2$. Therefore, $1\\text{ cm}^2$ on a $1:25,000$ map represents $(25,000\\text{ cm})^2 = 625,000,000\\text{ cm}^2 = 0.0625\\text{ km}^2$ on the earth's surface. Applying linear scaling directly to area leads to enormous errors."
  },
  applications: {
    title: "Practical GIS, Cartography & Environmental Scenarios",
    items: [
      {
        title: "Cartographic Topographic Map Interpretation",
        text: "Geographers use planimeters to trace lake or forest perimeters on printed topographic maps in square centimeters, applying the squared scale factor to determine geographic coverage in square kilometers."
      },
      {
        title: "Satellite Imaging Sensor Apertures and Ground Footprints",
        text: "Earth observation engineers relate the physical area of focal plane array detector chips measured in square centimeters to the terrestrial ground swath width and orbital imaging coverage measured in square kilometers."
      },
      {
        title: "Hydrological Catchment Sediment Deposition Modeling",
        text: "Hydrologists scale laboratory rainfall simulation trays measured in square centimeters up to regional watershed catchments measured in square kilometers to predict sedimentation rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing linear centimeters per kilometer (100,000) with area centimeters per square kilometer (10,000,000,000): Forgetting to square the 100,000 factor causes a 100,000-fold error.",
      "Dividing by 1,000,000 instead of 10,000,000,000: 1,000,000 is the number of square meters in a square kilometer, not square centimeters.",
      "Losing zeros during manual division: Working with 10 decimal places requires careful scientific notation ($10^{-10}$) or converting first to square meters.",
      "Applying linear map scales directly to area measurements: Failing to square the scale denominator on paper map measurements."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square kilometers?",
      answer: "To convert square centimeters (cm²) to square kilometers (km²), divide the square centimeter value by 10,000,000,000 (10¹⁰), or multiply by 0.0000000001 (10⁻¹⁰). For example, 20,000,000,000 cm² equals 2 km²."
    },
    {
      question: "How many square centimeters are in 1 square kilometer?",
      answer: "There are exactly 10,000,000,000 (ten billion) square centimeters in 1 square kilometer (100,000 cm × 100,000 cm = 10¹⁰ cm²)."
    },
    {
      question: "Why are there 10 billion square centimeters in a square kilometer?",
      answer: "There are 100 centimeters in a meter and 1,000 meters in a kilometer, giving 100,000 linear centimeters per kilometer. Squaring this value: 100,000 × 100,000 = 10,000,000,000 square centimeters."
    },
    {
      question: "What is 1,000,000,000 cm² in square kilometers?",
      answer: "1,000,000,000 square centimeters (one billion cm²) equals 0.1 square kilometers (10 hectares or 100,000 square meters)."
    },
    {
      question: "What is 100,000,000 cm² in square kilometers?",
      answer: "100,000,000 square centimeters (100 million cm²) equals 0.01 square kilometers, which is exactly 1 hectare (10,000 m²)."
    },
    {
      question: "How do I convert square kilometers back to square centimeters?",
      answer: "To convert square kilometers back to square centimeters, multiply the square kilometer value by 10,000,000,000. For instance, 0.5 km² × 10¹⁰ = 5,000,000,000 cm²."
    },
    {
      question: "How many square centimeters are in a hectare?",
      answer: "One hectare (0.01 square kilometers) contains exactly 100,000,000 (one hundred million) square centimeters."
    },
    {
      question: "On a 1:50,000 map, how many km² does 1 cm² represent?",
      answer: "On a 1:50,000 scale map, 1 linear cm equals 500 meters (0.5 km). Therefore, 1 cm² on the map represents (0.5 km)² = 0.25 square kilometers on the ground."
    },
    {
      question: "What is 1 square centimeter in square kilometers in scientific notation?",
      answer: "1 cm² equals exactly 1.0 × 10⁻¹⁰ square kilometers."
    }
  ],
  relatedList: [
    { label: "Square Kilometer to Square Centimeter", from: "square-kilometer", to: "square-centimeter" },
    { label: "Square Centimeter to Square Meter", from: "square-centimeter", to: "square-meter" },
    { label: "Square Centimeter to Hectare", from: "square-centimeter", to: "hectare" },
    { label: "Square Meter to Square Kilometer", from: "square-meter", to: "square-kilometer" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "United States Geological Survey (USGS). <em>Map Scales and Topographic Mapping Guidelines</em>.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
