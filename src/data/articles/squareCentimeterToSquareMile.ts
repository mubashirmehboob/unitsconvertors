import { CustomArticleData } from "./types";

export const squareCentimeterToSquareMile: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-mile",
  seoTitle: "Square Centimeter to Square Mile Converter - cm² to mi²",
  metaDescription: "Convert square centimeters to square miles (cm² to mi²). Learn the 25.9 billion scaling factor, cartographic photo scales, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-mile",
  h1: "Square Centimeter to Square Mile Converter",
  introduction: [
    "In aerial photogrammetry, geospatial mapping, environmental conservation, and remote sensing, researchers often connect small physical measurements taken from photographs, satellite sensor plates, and paper maps in square centimeters (cm²) to vast geographic regions measured in imperial square miles (mi²). Whether calculating the terrestrial footprint represented by a square centimeter on a USGS quadrangle map or scaling laboratory watershed runoff samples to regional river basins, bridging metric centimeters with imperial square miles is a key analytical skill.",
    "Because area scales with the square of linear distance, moving from centimeters to statute miles involves an immense numerical ratio. Since one international mile equals exactly 1,609.344 meters (160,934.4 centimeters), squaring this length indicates that one square mile contains exactly 25,899,881,103.36 square centimeters (nearly 25.9 billion cm²). Consequently, one square centimeter equals approximately $3.86102 \\times 10^{-11}$ square miles."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square miles, divide the square centimeter value by 25,899,881,103.36 (or multiply by approximately 3.86102 × 10⁻¹¹). For example, 100,000,000,000 cm² equals approximately 3.861 square miles.",
    formulaDisplay: "Square Miles (mi²) = Square Centimeters (cm²) ÷ 25,899,881,103.36",
    subtext: "1 square mile is equal to exactly 25,899,881,103.36 square centimeters (1 cm² ≈ 3.861 × 10⁻¹¹ mi²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the space enclosed by a square with sides of one centimeter ($10^{-2}\\text{ m}$). Equivalent to 0.0001 square meters ($10^{-4}\\text{ m}^2$) or 100 square millimeters, it is the primary unit for physical photographic prints, laboratory microscope samples, electronic displays, and printed map sheets."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Mile (mi²)",
    text: "The square mile (symbol: mi² or sq mi) is an imperial and US customary unit of area defined as the area enclosed by a square with sides of one statute mile (5,280 linear feet or 1,609.344 meters). Equal to 640 acres, 27,878,400 square feet, or approximately 2.589988 square kilometers, it is standard for expressing municipal jurisdictions, county boundaries, wildlife preserves, and large agricultural ranches in the United States and the United Kingdom."
  },
  relationship: "The mathematical ratio between square centimeters and square miles derives from the 1959 International Yard and Pound Agreement: 1 statute mile = 1,609.344 m = 160,934.4 cm. Squaring both sides yields $(1\\text{ mi})^2 = (160,934.4\\text{ cm})^2 = 25,899,881,103.36\\text{ cm}^2$. Inverting this relationship reveals that 1 square centimeter equals approximately $3.861021585 \\times 10^{-11}$ square miles.",
  relationshipTitle: "25.9-Billion Scale Equivalence",
  relationshipItems: [
    { label: "1 Square Mile (mi²)", value: "Exactly 25,899,881,103.36 cm² (≈ 25.9 billion cm²)" },
    { label: "1 Square Centimeter (cm²)", value: "≈ 3.86102 × 10⁻¹¹ mi² (0.00000000003861 mi²)" },
    { label: "1 Square Kilometer (km²)", value: "≈ 0.386102 Square Miles (10¹⁰ cm²)" },
    { label: "1 Acre (ac)", value: "40,468,564.224 cm² (1/640 mi²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square miles, divide the square centimeter value by 25,899,881,103.36 (or multiply by 3.86102 × 10⁻¹¹).",
    math: "\\text{Area (mi}^2\\text{)} = \\frac{\\text{Area (cm}^2\\text{)}}{25,899,881,103.36} = \\text{Area (cm}^2\\text{)} \\times 3.861021585 \\times 10^{-11}",
    subtext: "To convert square miles back to square centimeters: Area (cm²) = Area (mi²) × 25,899,881,103.36"
  },
  formulaTitle: "Square Centimeter to Square Mile Conversion Formula",
  practicalTip: {
    title: "The Square Kilometer Bridge",
    text: "For simplified manual estimation: convert square centimeters to square kilometers first by dividing by 10,000,000,000 (10¹⁰), then multiply the resulting km² by 0.3861 to get square miles. For example, 50,000,000,000 cm² = 5 km²; 5 × 0.3861 = 1.9305 square miles."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Aerial Photographic Terrain Mapping",
        subtitle: "On an aerial survey photograph printed at 1:20,000 scale, a forested parcel covers 25 square centimeters on the photographic print. Determine the real-world surface area in square miles.",
        steps: [
          "Determine linear ground scale: 1 cm on photo = 20,000 cm on ground = 200 m.",
          "Determine area on ground in cm²: 25 cm² × (20,000)² = 25 × 400,000,000 = 10,000,000,000 cm² (1,000,000 m² = 1 km²).",
          "Convert ground cm² to square miles: 10,000,000,000 ÷ 25,899,881,103.36 ≈ 0.386102.",
          "Conclusion: The 25 cm² photographic area corresponds to approximately 0.386 square miles (about 247 acres)."
        ]
      },
      {
        title: "Example 2: Industrial Manufacturing Complex Footprint",
        subtitle: "A massive automotive assembly complex occupies 75,000,000,000 square centimeters of developed ground. Express this area in square miles.",
        steps: [
          "State area: 75,000,000,000 cm².",
          "Apply conversion formula: Area (mi²) = 75,000,000,000 ÷ 25,899,881,103.36.",
          "Calculate: 75,000,000,000 ÷ 25,899,881,103.36 ≈ 2.895766.",
          "Conclusion: The complex encompasses approximately 2.896 square miles."
        ]
      },
      {
        title: "Example 3: Regional Water Reservoir Surface Survey",
        subtitle: "A regional lake has an estimated surface area of 129,500,000,000 cm². Convert this area to square miles.",
        steps: [
          "Given: 129,500,000,000 cm².",
          "Calculate: 129,500,000,000 ÷ 25,899,881,103.36 ≈ 5.00002.",
          "Conclusion: The reservoir surface area equals approximately 5.00 square miles."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Mile Quick Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Miles (mi²)", "Square Kilometers (km²)", "Acres (ac)"],
    rows: [
      { fromVal: "1,000,000,000 cm²", toVal: "0.0386 mi²", extra: "0.1000 km²", extra2: "24.71 ac" },
      { fromVal: "5,000,000,000 cm²", toVal: "0.1931 mi²", extra: "0.5000 km²", extra2: "123.55 ac" },
      { fromVal: "10,000,000,000 cm²", toVal: "0.3861 mi²", extra: "1.0000 km²", extra2: "247.11 ac" },
      { fromVal: "25,899,881,103 cm²", toVal: "1.0000 mi²", extra: "2.5899 km²", extra2: "640.00 ac" },
      { fromVal: "50,000,000,000 cm²", toVal: "1.9305 mi²", extra: "5.0000 km²", extra2: "1,235.53 ac" },
      { fromVal: "75,000,000,000 cm²", toVal: "2.8958 mi²", extra: "7.5000 km²", extra2: "1,853.29 ac" },
      { fromVal: "100,000,000,000 cm²", toVal: "3.8610 mi²", extra: "10.0000 km²", extra2: "2,471.05 ac" },
      { fromVal: "200,000,000,000 cm²", toVal: "7.7220 mi²", extra: "20.0000 km²", extra2: "4,942.11 ac" },
      { fromVal: "258,998,811,034 cm²", toVal: "10.0000 mi²", extra: "25.8999 km²", extra2: "6,400.00 ac" },
      { fromVal: "500,000,000,000 cm²", toVal: "19.3051 mi²", extra: "50.0000 km²", extra2: "12,355.27 ac" }
    ]
  },
  expertNote: {
    title: "Photogrammetry Sizing: Scale Factor Squaring",
    text: "In aerial mapping and satellite reconnaissance, analysts must rigorously remember that the photo-to-ground area scale is the square of the linear focal ratio. For an aerial photo with scale $1:S$, 1 square centimeter on film or paper represents $S^2$ square centimeters on the ground. For instance, at $1:24,000$ scale (USGS standard), $1\\text{ cm}^2$ on the photo equals $(24,000)^2 = 576,000,000\\text{ cm}^2$. Dividing by $25,899,881,103$ yields $0.02224\\text{ mi}^2$ (or 14.23 acres). Neglecting to square the scale introduces an immense mathematical error."
  },
  applications: {
    title: "Practical Cartography, Aviation & Environmental Scenarios",
    items: [
      {
        title: "Aerial Photography and Drone Photogrammetry",
        text: "Photogrammetrists measure surface areas of wildfires, flood inundation zones, and crop parcels on high-resolution orthomosaic prints in square centimeters and scale to square miles for emergency federal disaster reports."
      },
      {
        title: "Cartographic Map Planimeter Calculations",
        text: "Geographers use digital rolling planimeters to trace wildlife habitats on printed USGS topographic maps in square centimeters, converting to square miles to track animal migration corridor ranges."
      },
      {
        title: "Ecological Watershed Soil Sampling Scaling",
        text: "Soil scientists evaluate sedimentation runoff collected in laboratory test trays measured in square centimeters and extrapolate the findings across expansive regional river basins cataloged in square miles."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 160,934 instead of 25,899,881,103: 160,934.4 is the linear number of centimeters in a mile, not the number of square centimeters in a square mile.",
      "Forgetting to square the photographic scale denominator: When calculating terrestrial area from printed aerial photos, one must square the scale factor.",
      "Misplacing decimal places in large numbers: Working with billions of cm² requires scientific notation to avoid omitting zeros.",
      "Confusing statute square miles with nautical square miles: One nautical square mile equals $(1,852\\text{ m})^2 \\approx 34,299,040,000\\text{ cm}^2$, roughly 32% larger than a statute square mile."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square miles?",
      answer: "To convert square centimeters (cm²) to square miles (mi²), divide the square centimeter value by 25,899,881,103.36, or multiply by approximately 3.86102 × 10⁻¹¹. For example, 50,000,000,000 cm² equals approximately 1.931 square miles."
    },
    {
      question: "How many square centimeters are in 1 square mile?",
      answer: "There are exactly 25,899,881,103.36 square centimeters in 1 square statute mile (160,934.4 cm × 160,934.4 cm)."
    },
    {
      question: "How can I estimate cm² to mi² quickly?",
      answer: "First convert cm² to square kilometers by dividing by 10,000,000,000 (10¹⁰), then multiply by 0.3861. For instance, 10 billion cm² = 1 km² ≈ 0.3861 mi²."
    },
    {
      question: "What is 10,000,000,000 cm² in square miles?",
      answer: "10,000,000,000 square centimeters (1 square kilometer) equals approximately 0.3861 square miles."
    },
    {
      question: "What is 1 square centimeter in square miles in scientific notation?",
      answer: "1 square centimeter equals approximately 3.86102 × 10⁻¹¹ square miles."
    },
    {
      question: "How many acres are in 1 square mile?",
      answer: "There are exactly 640 acres in 1 square mile."
    },
    {
      question: "How do I convert square miles back to square centimeters?",
      answer: "To convert square miles back to square centimeters, multiply the square mile value by 25,899,881,103.36. For example, 2 mi² equals approximately 51,799,762,207 cm²."
    },
    {
      question: "How many square kilometers are in 1 square mile?",
      answer: "One square mile equals approximately 2.589988 square kilometers (2,589,988.11 square meters)."
    },
    {
      question: "Why is the conversion factor nearly 26 billion?",
      answer: "Because 1 statute mile equals 160,934.4 centimeters. Squaring this value: 160,934.4 × 160,934.4 = 25,899,881,103.36 square centimeters."
    }
  ],
  relatedList: [
    { label: "Square Mile to Square Centimeter", from: "square-mile", to: "square-centimeter" },
    { label: "Square Centimeter to Square Kilometer", from: "square-centimeter", to: "square-kilometer" },
    { label: "Square Centimeter to Acre", from: "square-centimeter", to: "acre" },
    { label: "Square Kilometer to Square Mile", from: "square-kilometer", to: "square-mile" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>, Special Publication 811.",
    "United States Geological Survey (USGS). <em>Topographic Map Symbols and Measurement Standards</em>.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
