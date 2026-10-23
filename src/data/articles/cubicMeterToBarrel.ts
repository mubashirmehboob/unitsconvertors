import { CustomArticleData } from "./types";

export const cubicMeterToBarrel: CustomArticleData = {
  fromUnitId: "cubic-meter",
  toUnitId: "barrel",
  seoTitle: "Cubic Meter to Oil Barrel Converter (m³ to bbl) - UnitsConvertors",
  metaDescription: "Convert cubic meters to standard oil barrels (m³ to bbl) with petroleum precision. Learn the 6.2898 conversion factor, pipeline flow, tankers, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/cubic-meter-to-barrel",
  h1: "Cubic Meter to Oil Barrel Converter",
  introduction: [
    "Converting liquid hydrocarbon volume between cubic meters and standard petroleum barrels is one of the most critical daily operations across the global energy sector, offshore oil production, pipeline transportation, and international commodity trading. While domestic customs manifests in Europe, Asia, and Latin America mandate cubic meters (m³) for pipeline metering and refinery accounting, international crude oil benchmark pricing (such as Brent and West Texas Intermediate) is quoted exclusively in barrels (bbl).",
    "Under international petroleum metrology established by the American Petroleum Institute (API) and ASTM International, one standard oil barrel (bbl) is legally defined as exactly 42 US liquid gallons. At standard reference conditions (60 degrees Fahrenheit or 15 degrees Celsius), this equals exactly 158.987294928 liters, or 0.158987294928 cubic meters. Dividing one cubic meter (1,000 liters) by 0.158987295 liters reveals that one cubic meter contains approximately 6.289811 standard barrels of oil. To convert cubic meters to oil barrels, multiply by 6.289811, or divide by 0.158987.",
    "This technical article explains the historical and engineering framework connecting metric cubic meters to the 42-gallon oil barrel, examines pipeline flow metering and tanker deadweight cargo sizing, provides step-by-step worked examples, and presents a complete petroleum conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert cubic meters to standard oil barrels (bbl), multiply the volume in cubic meters by 6.289811 (or divide by 0.158987). For example, 1 m³ equals approximately 6.29 barrels of oil, and a 10,000 m³ refinery crude storage tank holds approximately 62,898.11 barrels.",
    formulaDisplay: "Oil Barrels (bbl) = Cubic Meters (m³) × 6.289811",
    subtext: "1 m³ ≈ 6.289811 bbl | 1 Oil Barrel = 0.158987294928 m³ (Exact) | 1 bbl = 42 US Gallons = 158.987 L"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Meter (m³)",
    text: "The cubic meter (symbol: m³) is the SI coherent derived unit of volume. Geometrically equal to the space occupied by a cube measuring one meter on each side, it contains exactly 1,000 liters or 1,000,000 cubic centimeters. In international petroleum logistics, European gas and oil transit pipelines, and modern automated fiscal transfer meters, the cubic meter serves as the foundational metric engineering unit."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Oil Barrel (bbl)",
    text: "The standard oil barrel (symbol: bbl) is the universal volume unit utilized in petroleum production, refining, and commodities trading. Tracing its origins to the 1860s oil boom in Pennsylvania, where 40-gallon whiskey barrels were filled with an extra two gallons of crude to guarantee volume against transit leakage, it was formally standardized at exactly 42 US gallons (158.987 liters). It must not be confused with the 31.5-gallon beer barrel or the 55-gallon steel industrial chemical drum."
  },
  relationship: "Because one standard oil barrel holds roughly 159 liters and a cubic meter holds 1,000 liters, one cubic meter holds slightly more than 6.28 barrels. Converting from cubic meters to barrels multiplies the numerical value by approximately 6.29.",
  relationshipTitle: "Cubic Meter to Oil Barrel Volume Equivalents",
  relationshipItems: [
    { label: "0.158987 m³", value: "= 1.000 Oil Barrel (exact 42 US gallons / 158.987 L)" },
    { label: "1.0 m³", value: "≈ 6.290 Oil Barrels (1,000 liters)" },
    { label: "10.0 m³", value: "≈ 62.898 Oil Barrels" },
    { label: "100.0 m³", value: "≈ 628.981 Oil Barrels" },
    { label: "1,000.0 m³", value: "≈ 6,289.811 Oil Barrels (small refinery storage tank)" },
    { label: "5,000.0 m³", value: "≈ 31,449.054 Oil Barrels (pipeline injection batch)" },
    { label: "10,000.0 m³", value: "≈ 62,898.108 Oil Barrels (floating roof storage tank)" },
    { label: "318,000.0 m³", value: "≈ 2,000,000 Oil Barrels (Very Large Crude Carrier - VLCC)" }
  ],
  formula: {
    text: "Multiply the volume in cubic meters by the petroleum conversion factor 6.289811 to calculate standard 42-gallon oil barrels, or divide by 0.158987295.",
    math: "V_{bbl} = V_{m^3} \\times 6.28981077 = \\frac{V_{m^3}}{0.158987294928}",
    subtext: "To convert oil barrels back to cubic meters: V_{m^3} = V_{bbl} × 0.158987294928"
  },
  formulaTitle: "Conversion Formula: m³ to Oil Barrels",
  practicalTip: {
    title: "Field Approximation Rule",
    text: "For quick mental estimation in refinery terminals or offshore platforms, multiply cubic meters by 6.3. For example, 100 m³ is roughly 630 barrels (exact: 628.98 bbl), an error of less than 0.16 percent."
  },
  expertNote: {
    title: "Standard Temperature & Pressure (ASTM Table 54)",
    text: "Crude petroleum expands and contracts significantly with temperature changes. Fiscal custody transfer contracts require volumes to be corrected to standard conditions: either 15 degrees Celsius (metric standard) or 60 degrees Fahrenheit (US standard). Always apply the appropriate Volume Correction Factor (VCF) from ASTM D1250 when measuring bulk shipments."
  },
  examples: {
    title: "Upstream & Downstream Petroleum Engineering Examples",
    items: [
      {
        title: "Example 1: Offshore Platform Daily Production",
        subtitle: "A production platform in the North Sea records a 24-hour crude oil output of 4,500 cubic meters through its fiscal ultrasonic flow meters. What is the daily output in barrels?",
        steps: [
          "State daily volume: 4,500 m³.",
          "Apply conversion factor: 1 m³ = 6.289811 bbl.",
          "Multiply: 4,500 × 6.289811 = 28,304.149 bbl.",
          "Result: The platform produced approximately 28,304 barrels of oil per day (BPD)."
        ]
      },
      {
        title: "Example 2: Crude Oil Supertanker (VLCC) Cargo Sizing",
        subtitle: "A Very Large Crude Carrier (VLCC) loads 318,000 cubic meters of light sweet crude oil at a Persian Gulf export terminal. Determine the cargo volume in barrels.",
        steps: [
          "State loaded volume: 318,000 m³.",
          "Calculate: 318,000 × 6.289811 = 2,000,159.8 bbl.",
          "Result: The supertanker holds approximately 2,000,160 barrels (nominally a 2-million-barrel cargo)."
        ]
      },
      {
        title: "Example 3: Refinery Crude Distillation Unit (CDU) Charge Rate",
        subtitle: "An oil refinery schedules a crude distillation unit processing capacity of 650 cubic meters per hour. What is the throughput in barrels per day?",
        steps: [
          "Convert hourly rate to daily cubic meters: 650 m³/h × 24 h = 15,600 m³/day.",
          "Multiply by 6.289811: 15,600 × 6.289811 = 98,121.05 bbl/day.",
          "Result: The unit operates at an approximate charge rate of 98,121 barrels per day."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Meter to Standard Oil Barrel Conversion Reference",
    headers: ["Cubic Meters (m³)", "Oil Barrels (bbl)", "Liters Equivalent", "Metric Tonnes Crude (approx)", "Petroleum Asset Benchmark"],
    rows: [
      { fromVal: "0.159 m³", toVal: "1.000 bbl", extra: "159 L", extra2: "0.134 t", extra3: "One standard 42-gallon oil barrel" },
      { fromVal: "1.0 m³", toVal: "6.290 bbl", extra: "1,000 L", extra2: "0.840 t", extra3: "One cubic meter bulk tote" },
      { fromVal: "5.0 m³", toVal: "31.449 bbl", extra: "5,000 L", extra2: "4.200 t", extra3: "Small field test separator batch" },
      { fromVal: "10.0 m³", toVal: "62.898 bbl", extra: "10,000 L", extra2: "8.400 t", extra3: "Vacuum truck tanker load" },
      { fromVal: "50.0 m³", toVal: "314.491 bbl", extra: "50,000 L", extra2: "42.000 t", extra3: "Rail tank car capacity" },
      { fromVal: "100.0 m³", toVal: "628.981 bbl", extra: "100,000 L", extra2: "84.000 t", extra3: "Marginal oil well weekly production" },
      { fromVal: "500.0 m³", toVal: "3,144.905 bbl", extra: "500,000 L", extra2: "420.000 t", extra3: "Inland fuel oil barge compartment" },
      { fromVal: "1,000.0 m³", toVal: "6,289.811 bbl", extra: "1,000,000 L", extra2: "840.000 t", extra3: "Small petroleum terminal tank" },
      { fromVal: "5,000.0 m³", toVal: "31,449.054 bbl", extra: "5,000,000 L", extra2: "4,200.000 t", extra3: "Regional pipeline batch injection" },
      { fromVal: "10,000.0 m³", toVal: "62,898.108 bbl", extra: "10,000,000 L", extra2: "8,400.000 t", extra3: "Refinery external floating roof tank" },
      { fromVal: "50,000.0 m³", toVal: "314,490.539 bbl", extra: "50,000,000 L", extra2: "42,000.000 t", extra3: "Aframax class tanker cargo" },
      { fromVal: "159,000.0 m³", toVal: "1,000,079.912 bbl", extra: "159,000,000 L", extra2: "133,560.000 t", extra3: "Suezmax crude carrier load" },
      { fromVal: "318,000.0 m³", toVal: "2,000,159.825 bbl", extra: "318,000,000 L", extra2: "267,120.000 t", extra3: "Full Very Large Crude Carrier (VLCC)" }
    ]
  },
  applications: {
    title: "Industry Applications for m³ to Oil Barrel Conversions",
    items: [
      {
        title: "International Fiscal Custody Transfer",
        text: "Cross-border crude oil pipelines crossing Europe, Central Asia, and China meter volume in cubic meters at border stations, then convert to barrels for billing against Brent or WTI futures contracts."
      },
      {
        title: "Refinery Yield Optimization",
        text: "Refinery schedulers balance incoming crude deliveries rated in barrels against internal product balances for gasoline, diesel, jet fuel, and naphtha recorded in cubic meters."
      },
      {
        title: "Maritime Tanker Chartering & Bill of Lading",
        text: "Marine surveyors take ullage measurements in cargo tanks in meters to calculate volume in cubic meters, then convert to barrels and gross long tons on the official bill of lading."
      },
      {
        title: "Government Royalty & Taxation Auditing",
        text: "National ministries of petroleum audit oil concession fields by converting cubic meter pipeline telemetry data into barrels to verify severance tax and royalty payments."
      }
    ]
  },
  pitfalls: {
    title: "Common Petroleum Conversion Pitfalls",
    items: [
      "Confusing standard 42-gallon oil barrels with 55-gallon industrial steel drums: A standard oil barrel (bbl) is 42 US gallons (158.99 L), whereas a common steel drum is 55 US gallons (208.20 L). Treating a 55-gallon drum as an oil barrel causes a 31 percent volumetric error.",
      "Neglecting temperature and pressure correction factors: Crude oil expands by roughly 0.08 to 0.10 percent per degree Celsius. Volume at 30°C in the desert is considerably larger than at standard 15°C.",
      "Conflating volume (barrels) with mass (metric tonnes): The mass of a barrel of crude oil depends directly on its API gravity. Light sweet crude (~35° API) yields roughly 7.3 to 7.5 barrels per metric tonne, whereas heavy sour crude (~20° API) yields only 6.5 to 6.8 barrels per tonne.",
      "Confusing oil barrels (bbl) with beer barrels (bbl): An American beer barrel is legally defined as 31 US gallons (117.35 L), not 42 gallons."
    ]
  },
  faqs: [
    {
      question: "How many barrels of oil are in one cubic meter?",
      answer: "There are approximately 6.289811 standard oil barrels (bbl) in one cubic meter. This value is calculated by dividing 1,000 liters by 158.987295 liters (the volume of 42 US gallons)."
    },
    {
      question: "What is the formula to convert cubic meters to oil barrels?",
      answer: "The formula is: Oil Barrels = Cubic Meters × 6.289811. Alternatively, divide the cubic meter volume by 0.158987295."
    },
    {
      question: "Why does an oil barrel equal 42 US gallons?",
      answer: "In the 1860s in Titusville, Pennsylvania, early oil producers used standard 40-gallon whiskey barrels. To account for evaporation and leakage during rough wagon transit over dirt roads, they added an extra two gallons as a generous allowance, establishing the 42-gallon standard."
    },
    {
      question: "Why is the abbreviation for barrel written as bbl?",
      answer: "The most widely accepted historical explanation is that the early Standard Oil Company painted their 42-gallon barrels blue to distinguish them from competitor casks, leading to the designation blue barrel or bbl."
    },
    {
      question: "How do I convert oil barrels back to cubic meters?",
      answer: "Multiply the number of oil barrels by 0.158987295, or divide by 6.289811. For example, 100 barrels multiplied by 0.158987 equals approximately 15.90 cubic meters."
    },
    {
      question: "How many cubic meters are in a 2-million-barrel supertanker cargo?",
      answer: "A 2,000,000-barrel VLCC cargo equals 2,000,000 × 0.158987295 ≈ 317,975 cubic meters (nominally 318,000 cubic meters)."
    },
    {
      question: "How many barrels are in 1,000 cubic meters?",
      answer: "One thousand cubic meters equals 1,000 × 6.289811 = 6,289.81 standard oil barrels."
    },
    {
      question: "How much does a barrel of crude oil weigh?",
      answer: "A standard barrel of crude oil weighs approximately 130 to 140 kilograms (287 to 309 pounds), depending on its specific gravity and API rating."
    },
    {
      question: "What is the difference between a 42-gallon barrel and a 55-gallon drum?",
      answer: "A 42-gallon barrel (158.99 L) is the standard commercial unit of volume for trading crude oil and wholesale refined fuels. A 55-gallon drum (208.20 L) is a physical shipping container commonly used for lubricants, solvents, and specialty chemicals."
    },
    {
      question: "How do I convert pipeline flow from m³/h to barrels per day (BPD)?",
      answer: "To convert cubic meters per hour (m³/h) to barrels per day (BPD), multiply the m³/h flow rate by 150.955 (since 24 hours × 6.289811 = 150.95546). For example, 100 m³/h equals approximately 15,096 BPD."
    }
  ],
  relatedList: [
    { label: "Cubic Meter to Gallon (US)", from: "cubic-meter", to: "gallon-us" },
    { label: "Cubic Meter to Liter", from: "cubic-meter", to: "liter" },
    { label: "Cubic Meter to Cubic Foot", from: "cubic-meter", to: "cubic-foot" },
    { label: "Oil Barrel to Cubic Meter", from: "barrel", to: "cubic-meter" },
    { label: "Oil Barrel to Gallon (US)", from: "barrel", to: "gallon-us" }
  ],
  references: [
    "American Petroleum Institute (API) — Manual of Petroleum Measurement Standards (MPMS)",
    "ASTM D1250 — Standard Guide for Use of the Petroleum Measurement Tables",
    "BIPM — The International System of Units (SI Brochure, 9th Edition)"
  ]
};
