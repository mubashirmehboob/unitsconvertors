import { CustomArticleData } from "./types";

export const squareMillimeterToSquareMile: CustomArticleData = {
  fromUnitId: "square-millimeter",
  toUnitId: "square-mile",
  seoTitle: "Square Millimeter to Square Mile Converter - mm² to sq mi",
  metaDescription: "Convert square millimeters to square miles (mm² to sq mi) with exact mathematical ratios, GIS remote sensing examples, conversion formulas, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/square-millimeter-to-square-mile",
  h1: "Square Millimeter to Square Mile Converter",
  introduction: [
    "In geographic information systems (GIS), aerospace cartography, satellite remote sensing, and environmental geoscience, analysts often translate sub-millimeter image resolutions into imperial regional land survey boundaries. High-resolution LiDAR camera sensor pixels, laser scan beam footprints, and laboratory precipitation collector apertures are dimensioned in square millimeters (mm²), whereas territorial jurisdictions, national parks, wildlife refuges, and regional water watersheds in the United States and the United Kingdom are charted in square miles (sq mi or mi²).",
    "Because area scales with the square of linear length, converting between the metric millimeter and the imperial statute mile requires bridging metric-imperial definitions across enormous dimensional orders. Under the 1959 International Yard and Pound Agreement, one international statute mile is defined as exactly 1,609.344 meters, which equals exactly 1,609,344 millimeters. Squaring this distance reveals that one square mile contains exactly 2,589,988,110,336 square millimeters (approximately 2.59 × 10¹² mm²). Converting square millimeters to square miles requires dividing by 2,589,988,110,336."
  ],
  quickAnswer: {
    text: "To convert square millimeters to square miles, divide the square millimeter value by 2,589,988,110,336 (or multiply by 3.86102 × 10⁻¹³). For example, 2,589,988,110,336 mm² equals exactly 1.0 square mile.",
    formulaDisplay: "Square Miles (sq mi) = Square Millimeters (mm²) ÷ 2,589,988,110,336",
    subtext: "1 square mile equals exactly 2,589,988,110,336 mm² (approx 2.59 trillion mm²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI-derived metric unit of planar area equal to the space enclosed by a square measuring one millimeter (0.001 m) on each side. Equal to $10^{-6}$ square meters or 0.01 square centimeters, it is the primary worldwide unit for microscopic mechanical engineering, electronic conductor cross-sections, and precision digital sensor arrays."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Mile (sq mi / mi²)",
    text: "The square mile (symbol: sq mi or mi²) is an imperial and US customary unit of land area equal to the space bounded by a square measuring one international statute mile (5,280 feet or 1,609.344 meters) on each side. Equal to 640 acres or approximately 2.589988 square kilometers, the square mile is the legal standard for county land surveys, township grids, wilderness conservation reserves, and population density figures across North America."
  },
  relationship: "The mathematical relationship between square millimeters and square miles is established through international legal metrology. By treaty, 1 international mile = 1,609.344 meters = 1,609,344 millimeters. Squaring both dimensions produces $(1,609,344\\text{ mm})^2 = 2,589,988,110,336\\text{ mm}^2$ in one square mile. Thus, 1 square millimeter equals approximately $3.861021585 \\times 10^{-13}$ square miles.",
  relationshipTitle: "International Standard Area Equivalence: mm² to sq mi",
  relationshipItems: [
    { label: "1 Square Mile (sq mi)", value: "2,589,988,110,336 mm² (≈ 2.59 × 10¹² mm²)" },
    { label: "0.5 Square Mile (320 acres)", value: "1,294,994,055,168 mm²" },
    { label: "0.1 Square Mile (64 acres)", value: "258,998,811,034 mm²" },
    { label: "1,000,000,000,000 mm² (1 km²)", value: "≈ 0.386102 Square Mile" },
    { label: "1 Square Millimeter (mm²)", value: "≈ 3.861022 × 10⁻¹³ Square Mile" }
  ],
  formula: {
    text: "To convert area from square millimeters to square miles, divide the square millimeter value by 2,589,988,110,336, or multiply by 3.861021585 × 10⁻¹³.",
    math: "\\text{Area (sq mi)} = \\frac{\\text{Area (mm}^2\\text{)}}{2,589,988,110,336} = \\text{Area (mm}^2\\text{)} \\times 3.8610216 \\times 10^{-13}",
    subtext: "To convert square miles back to square millimeters: Area (mm²) = Area (sq mi) × 2,589,988,110,336"
  },
  formulaTitle: "Square Millimeter to Square Mile Conversion Formula",
  practicalTip: {
    title: "Two-Step Conversion via Square Meters",
    text: "Because dividing directly by 2.59 trillion is cumbersome, convert through square meters: first divide mm² by 1,000,000 to get square meters, then divide that result by 2,589,988.11 to find square miles. For example, 5,179,976,220,672 mm² becomes 5,179,976.22 m², which equals exactly 2.0 square miles."
  },
  examples: {
    title: "Step-by-Step Aerospace & GIS Calculation Examples",
    items: [
      {
        title: "Example 1: Satellite Aerial Sensor Coverage Sector",
        subtitle: "A digital orthophoto reconnaissance mosaic covers an agricultural floodplain measuring 6,474,970,275,840 square millimeters. Express this surveyed region in square miles for regional county records.",
        steps: [
          "Identify the surface area: 6,474,970,275,840 mm².",
          "Apply the conversion formula: sq mi = mm² ÷ 2,589,988,110,336.",
          "Calculate: 6,474,970,275,840 ÷ 2,589,988,110,336 = 2.5 sq mi.",
          "Conclusion: The surveyed agricultural floodplain spans exactly 2.5 square miles."
        ]
      },
      {
        title: "Example 2: Regional Drone LiDAR Topographic Flight Line",
        subtitle: "An environmental mapping drone completes a high-density point cloud survey covering 1,035,995,244,134 square millimeters. Convert this surveyed swath to square miles.",
        steps: [
          "State value: 1.035995 × 10¹² mm².",
          "Multiply by 3.861022 × 10⁻¹³: 1.035995 × 10¹² × 3.861022 × 10⁻¹³ = 0.40 sq mi.",
          "Conclusion: The drone flight line covers exactly 0.40 square miles (256 acres)."
        ]
      },
      {
        title: "Example 3: Solar Energy Collector Footprint",
        subtitle: "A planned desert solar thermal facility incorporates reflector mirror assemblies totaling 1,942,491,082,752 mm². Find the collector area in square miles.",
        steps: [
          "State value: 1,942,491,082,752 mm².",
          "Divide by 2,589,988,110,336: 1,942,491,082,752 ÷ 2,589,988,110,336 = 0.75 sq mi.",
          "Conclusion: The solar reflector field covers exactly 0.75 square miles (480 acres)."
        ]
      }
    ]
  },
  table: {
    title: "Square Millimeter to Square Mile Reference Table",
    headers: ["Square Millimeters (mm²)", "Square Miles (sq mi)", "Acres (ac)", "Square Kilometers (km²)"],
    rows: [
      { fromVal: "258,998,811,034 mm²", toVal: "0.100 sq mi", extra: "64.0 ac", extra2: "0.259 km²" },
      { fromVal: "517,997,622,067 mm²", toVal: "0.200 sq mi", extra: "128.0 ac", extra2: "0.518 km²" },
      { fromVal: "647,497,027,584 mm²", toVal: "0.250 sq mi", extra: "160.0 ac", extra2: "0.647 km²" },
      { fromVal: "1,294,994,055,168 mm²", toVal: "0.500 sq mi", extra: "320.0 ac", extra2: "1.295 km²" },
      { fromVal: "1,942,491,082,752 mm²", toVal: "0.750 sq mi", extra: "480.0 ac", extra2: "1.942 km²" },
      { fromVal: "2,589,988,110,336 mm²", toVal: "1.000 sq mi", extra: "640.0 ac", extra2: "2.590 km²" },
      { fromVal: "5,179,976,220,672 mm²", toVal: "2.000 sq mi", extra: "1,280.0 ac", extra2: "5.180 km²" },
      { fromVal: "7,769,964,331,008 mm²", toVal: "3.000 sq mi", extra: "1,920.0 ac", extra2: "7.770 km²" },
      { fromVal: "10,359,952,441,344 mm²", toVal: "4.000 sq mi", extra: "2,560.0 ac", extra2: "10.360 km²" },
      { fromVal: "12,949,940,551,680 mm²", toVal: "5.000 sq mi", extra: "3,200.0 ac", extra2: "12.950 km²" }
    ]
  },
  expertNote: {
    title: "Geodetic Standards: International Mile vs. US Survey Mile",
    text: "While the international statute mile is defined as exactly 1,609.344 meters (yielding 2,589,988,110,336 mm²), the historical US Survey Mile was defined as 5,280 × (1200/3937) meters ≈ 1,609.3472 meters. Squaring the US survey foot produced an area of 2,589,998,470,320 mm² (a difference of about 10.36 m² per square mile). On December 31, 2022, the National Geodetic Survey (NGS) and NIST officially retired the US Survey Foot in favor of the international standard."
  },
  applications: {
    title: "Aerospace, Environmental Modeling, and Cartography Applications",
    items: [
      {
        title: "Satellite Sensor Ground Footprint Scaling",
        text: "Aerospace systems analysts convert focal plane detector array pixel areas in mm² into cumulative Earth surface coverage recorded in square miles for defense and weather tracking."
      },
      {
        title: "Large-Scale Agricultural Watershed Modeling",
        text: "Hydrological engineers convert laboratory rain gauge catchment apertures from mm² to square miles to forecast total runoff volumes across river basins."
      },
      {
        title: "Wildfire Burn Scar Remote Sensing",
        text: "Forestry geomatics technicians convert infrared satellite pixel detections into total forest area consumed in square miles for emergency federal disaster assistance."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by the linear mile factor: 1 mile = 1,609,344 mm. Dividing area by this 1D length factor introduces an error factor of 1,609,344.",
      "Conflating square miles with square kilometers: 1 square mile is approximately 2.59 square kilometers. Using the metric 10¹² factor produces results 2.59 times too large.",
      "Double-precision numerical truncation: Dealing with numbers exceeding 2.5 trillion requires 64-bit IEEE 754 floating-point precision to avoid catastrophic cancellation in GIS databases.",
      "Confusing square miles with acres: 1 square mile equals 640 acres. Dividing by 4,046.86 m² converts to acres, not square miles."
    ]
  },
  faqs: [
    {
      question: "How do I convert square millimeters to square miles?",
      answer: "To convert square millimeters (mm²) to square miles (sq mi), divide the square millimeter value by 2,589,988,110,336, or multiply by 3.86102 × 10⁻¹³. For example, 5,179,976,220,672 mm² divided by 2,589,988,110,336 equals exactly 2.0 square miles."
    },
    {
      question: "How many square millimeters are in one square mile?",
      answer: "There are exactly 2,589,988,110,336 square millimeters in one international square mile. This is calculated by squaring the linear millimeter length of a mile: (1,609,344 mm)²."
    },
    {
      question: "What is 1,000,000,000,000 mm² in square miles?",
      answer: "One trillion square millimeters (1 square kilometer) equals approximately 0.3861 square miles."
    },
    {
      question: "How many acres are in one square mile?",
      answer: "There are exactly 640 acres in one square mile."
    },
    {
      question: "What is the two-step method to convert mm² to sq mi?",
      answer: "First divide the square millimeter figure by 1,000,000 to convert to square meters, then divide that result by 2,589,988.11 to find square miles."
    },
    {
      question: "How do I convert square miles back to square millimeters?",
      answer: "Multiply the square mile value by 2,589,988,110,336. For instance, 0.5 sq mi multiplied by 2,589,988,110,336 equals 1,294,994,055,168 mm²."
    },
    {
      question: "Why is the conversion number so large?",
      answer: "Because a mile is a large geographic distance (1,609,344 millimeters). Squaring that distance to calculate planar area squares the millimeter multiplier into trillions."
    },
    {
      question: "Is square mile an SI unit?",
      answer: "No, the square mile is an imperial and US customary unit of area. The SI standard unit for geographic area is the square kilometer (km²) or square meter (m²)."
    },
    {
      question: "What is the scientific notation factor for mm² to sq mi?",
      answer: "In scientific notation, 1 mm² equals approximately 3.861022 × 10⁻¹³ square miles."
    },
    {
      question: "Does the US Survey foot retirement affect this conversion?",
      answer: "Yes, NIST officially decommissioned the US survey foot in December 2022. All modern conversions utilize the international definition (1 foot = 0.3048 m, 1 mile = 1,609.344 m)."
    }
  ],
  relatedList: [
    { label: "Square Mile to Square Millimeter", from: "square-mile", to: "square-millimeter" },
    { label: "Square Millimeter to Square Kilometer", from: "square-millimeter", to: "square-kilometer" },
    { label: "Square Millimeter to Square Yard", from: "square-millimeter", to: "square-yard" },
    { label: "Square Millimeter to Square Foot", from: "square-millimeter", to: "square-foot" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Deprecation of the United States Survey Foot</em>, Federal Register Notice.",
    "International Organization for Standardization (ISO). <em>ISO 80000-3: Space and Time</em>.",
    "National Geodetic Survey (NGS). <em>Geodetic Glossary and Cadastral Survey Guidelines</em>."
  ]
};
