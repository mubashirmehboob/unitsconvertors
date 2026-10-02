import { CustomArticleData } from "./types";

export const gallonPerMinToCfmUnit: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cfm-unit",
  seoTitle: "Gallon/min to CFM Converter (GPM to CFM) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to CFM (cubic feet per minute) accurately. Explore HVAC air-water balancing, cooling tower ratios, formulas, examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cfm-unit",
  h1: "Gallon/min to CFM Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic feet per minute (CFM) are the two cornerstone volumetric flow units in heating, ventilation, and air conditioning (HVAC) engineering. While GPM dictates hydronic water distribution through chillers, boilers, and cooling tower loops, CFM governs airflow volume circulating through ventilation ducts, air handling units (AHUs), and fan-coil plenums.",
    "Although GPM measures liquid flow and CFM typically measures air displacement, mechanical designers must constantly convert between them to balance sensible and latent heat transfer across hydronic coils. From a purely geometric volumetric perspective, one US gallon occupies 231 cubic inches, while one cubic foot contains 1,728 cubic inches. Consequently, exactly 7.480519 US gallons correspond to one cubic foot, giving an exact volumetric ratio of 1 GPM = 0.133681 CFM.",
    "To convert gallons per minute to CFM, divide the GPM value by 7.480519 (or multiply by approximately 0.133681). This specialized technical guide details the geometric volumetric relationship, practical HVAC heat exchanger balancing formulas, worked calculation examples, and a complete reference table."
  ],
  quickAnswer: {
    text: "To convert GPM to CFM, divide the flow rate by 7.480519 or multiply by 0.1336806. For example, 50 GPM equals approximately 6.68 CFM.",
    formulaDisplay: "CFM = GPM / 7.48051948 ≈ GPM × 0.133681",
    subtext: "1 CFM = 7.480519 GPM; 1 GPM ≈ 0.133681 CFM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the standard US customary measure for liquid throughput, defined as the movement of one US gallon (231 in³, or ~3.7854 liters) every sixty seconds. In commercial building engineering, GPM ratings specify hydronic chilled water distribution to air handling units, condenser water loops to cooling towers, and fire protection sprinkler delivery."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet per Minute (CFM)",
    text: "Cubic feet per minute represents the volumetric displacement of one cubic foot (~28.3168 liters) of fluid per minute. Regulated under ASHRAE standards, CFM is the benchmark unit for indoor air exchange rates, supply duct sizing, exhaust fan capacities, and cleanroom air change calculations."
  },
  relationship: "One cubic foot equals exactly 1,728 cubic inches, while one US gallon equals exactly 231 cubic inches. Therefore, 1 CFM equals 1,728 / 231 = 7.48051948 GPM. Inversely, 1 GPM equals 231 / 1,728 = 0.133680556 CFM.",
  relationshipTitle: "GPM to CFM Volumetric Equivalence",
  relationshipItems: [
    { label: "1 GPM", value: "0.133681 CFM" },
    { label: "5 GPM", value: "0.668403 CFM" },
    { label: "7.4805 GPM", value: "1.000000 CFM" },
    { label: "10 GPM", value: "1.336806 CFM" },
    { label: "50 GPM", value: "6.684028 CFM" },
    { label: "100 GPM", value: "13.368056 CFM" },
    { label: "500 GPM", value: "66.840278 CFM" }
  ],
  formula: {
    text: "Divide the flow rate in GPM by 7.480519, or multiply by 0.13368056, to determine CFM.",
    math: "\\text{CFM} = \\frac{\\text{GPM}}{7.48051948} = \\text{GPM} \\times \\frac{231}{1{,}728}",
    subtext: "Inverse formula: GPM = CFM × 7.48051948"
  },
  formulaTitle: "GPM to CFM Conversion Formula",
  practicalTip: {
    title: "The HVAC Thermal Rule of Thumb",
    text: "In standard air conditioning design (cooling water ΔT = 10°F, air ΔT = 20°F), engineers often remember the approximate 400 CFM per ton and 2.4 GPM per ton benchmarks, giving a thermal ratio of about 167 CFM of airflow for every 1 GPM of chilled water."
  },
  expertNote: {
    title: "Volumetric vs Heat Balance Distinction",
    text: "Engineers should distinguish between pure geometric volumetric conversion (1 GPM = 0.1337 CFM of fluid) and thermodynamic energy balancing across a water-to-air cooling coil (Q_sensible = 1.08 × CFM × ΔT_air = 500 × GPM × ΔT_water). Pure geometric conversion evaluates physical displacement."
  },
  examples: {
    title: "Step-by-Step GPM to CFM Worked Examples",
    items: [
      {
        title: "Example 1: Hydronic Chilled Water Coil Sizing",
        subtitle: "An air handler cooling coil circulates 24 GPM of chilled water. What is the pure volumetric displacement in CFM?",
        steps: [
          "State the water flow rate: Q = 24 GPM.",
          "Apply the conversion factor: CFM = 24 / 7.48051948.",
          "Calculate: 24 / 7.48051948 ≈ 3.20833.",
          "Final Result: 24 GPM equals approximately 3.21 CFM."
        ]
      },
      {
        title: "Example 2: Cooling Tower Basin Makeup Flow",
        subtitle: "A cooling tower requires 120 GPM of water makeup to replace evaporation and blowdown. Express this rate in CFM.",
        steps: [
          "Identify the flow rate: Q = 120 GPM.",
          "Multiply by 0.13368056: 120 × 0.13368056 ≈ 16.0417.",
          "Final Result: 120 GPM corresponds to approximately 16.04 CFM."
        ]
      },
      {
        title: "Example 3: Hydronic Snow Melt Manifold",
        subtitle: "A commercial pavement hydronic snow melt system circulates 65 GPM of glycol-water mixture. Convert this to CFM.",
        steps: [
          "State the pump flow: 65 GPM.",
          "Divide by 7.48051948: 65 / 7.48051948 ≈ 8.68924.",
          "Final Result: 65 GPM equals approximately 8.69 CFM."
        ]
      }
    ]
  },
  table: {
    title: "GPM to CFM Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "CFM (ft³/min)", "Liters/min (L/min)", "Cubic feet/sec (cfs)"],
    rows: [
      { fromVal: "5 GPM", toVal: "0.668 CFM", extra: "18.93 L/min", extra2: "0.0111 cfs" },
      { fromVal: "10 GPM", toVal: "1.337 CFM", extra: "37.85 L/min", extra2: "0.0223 cfs" },
      { fromVal: "20 GPM", toVal: "2.674 CFM", extra: "75.71 L/min", extra2: "0.0446 cfs" },
      { fromVal: "35 GPM", toVal: "4.679 CFM", extra: "132.49 L/min", extra2: "0.0780 cfs" },
      { fromVal: "50 GPM", toVal: "6.684 CFM", extra: "189.27 L/min", extra2: "0.1114 cfs" },
      { fromVal: "75 GPM", toVal: "10.026 CFM", extra: "283.91 L/min", extra2: "0.1671 cfs" },
      { fromVal: "100 GPM", toVal: "13.368 CFM", extra: "378.54 L/min", extra2: "0.2228 cfs" },
      { fromVal: "200 GPM", toVal: "26.736 CFM", extra: "757.08 L/min", extra2: "0.4456 cfs" },
      { fromVal: "500 GPM", toVal: "66.840 CFM", extra: "1,892.71 L/min", extra2: "1.1140 cfs" },
      { fromVal: "1,000 GPM", toVal: "133.681 CFM", extra: "3,785.41 L/min", extra2: "2.2280 cfs" }
    ]
  },
  applications: {
    title: "HVAC & Mechanical Engineering Applications",
    items: [
      {
        title: "Air Handler Water-to-Air Heat Exchanger Balancing",
        text: "Coordinating hydronic pipe flow rates (GPM) with air distribution volumes (CFM) across central commercial air handler heating and cooling coils."
      },
      {
        title: "Cooling Tower & Evaporative Condenser Design",
        text: "Balancing condenser water circulation loops rated in GPM with induced-draft cooling fan air movement rated in CFM."
      },
      {
        title: "Boiler Hydronics & Expansion Tank Sizing",
        text: "Calculating fluid volume expansion rates in cubic feet from circulating pump flow rates in gallons per minute."
      },
      {
        title: "Variable Refrigerant Flow (VRF) & Water-Source Heat Pumps",
        text: "Matching water-side heat recovery loops (GPM) with conditioned space air delivery requirements (CFM)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to CFM Conversions",
    items: [
      "Confusing volumetric displacement (1 GPM = 0.1337 CFM) with thermodynamic coil air-to-water ratios (typically ~150–200 CFM of air per GPM of water).",
      "Using the British Imperial gallon factor (6.2288 gal/ft³) instead of the US gallon factor (7.4805 gal/ft³).",
      "Multiplying by 7.4805 instead of dividing when converting from GPM to CFM.",
      "Overlooking air density variations when comparing CFM at non-standard temperatures and elevations."
    ]
  },
  faqs: [
    {
      question: "How many CFM are in 1 GPM?",
      answer: "There are approximately 0.133681 CFM in 1 GPM (exactly 231 / 1,728 cubic feet per minute)."
    },
    {
      question: "How many GPM are in 1 CFM?",
      answer: "There are exactly 7.48051948 GPM in 1 CFM (1,728 / 231 gallons per minute)."
    },
    {
      question: "What is the formula to convert GPM to CFM?",
      answer: "The formula is: CFM = GPM / 7.480519, or CFM = GPM × 0.1336806."
    },
    {
      question: "What is the difference between GPM and CFM in HVAC?",
      answer: "GPM measures liquid flow through hydronic pipes, chillers, and boilers, whereas CFM measures airflow through ventilation ducts and fans."
    },
    {
      question: "How do I convert 100 GPM to CFM?",
      answer: "Divide 100 by 7.480519 to obtain approximately 13.37 CFM."
    },
    {
      question: "How many GPM of water are needed per ton of cooling?",
      answer: "Under standard chiller conditions (ΔT = 10°F), approximately 2.4 GPM of water is required per ton of cooling."
    },
    {
      question: "How many CFM of air are needed per ton of cooling?",
      answer: "Standard commercial air conditioning design typically requires approximately 400 CFM of airflow per ton of cooling capacity."
    },
    {
      question: "Is CFM also called ft³/min?",
      answer: "Yes, 'CFM' is the standard American abbreviation for cubic feet per minute (ft³/min)."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic feet/min", from: "gallon-per-min", to: "cubic-feet-per-min" },
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Gallon/min to CMH", from: "gallon-per-min", to: "cmh-unit" },
    { label: "CFM to Gallon/min", from: "cfm-unit", to: "gallon-per-min" }
  ],
  references: [
    "ASHRAE Handbook: HVAC Systems and Equipment.",
    "Air Movement and Control Association (AMCA) Publication 201: Fans and Systems.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
