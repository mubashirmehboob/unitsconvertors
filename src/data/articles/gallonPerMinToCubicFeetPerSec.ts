import { CustomArticleData } from "./types";

export const gallonPerMinToCubicFeetPerSec: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cubic-feet-per-sec",
  seoTitle: "Gallon/min to Cubic feet/sec Converter (GPM to cfs) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to cubic feet per second (GPM to cfs / cusec) with exact hydrological formulas, 448.83 rule, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cubic-feet-per-sec",
  h1: "Gallon/min to Cubic feet/sec Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic feet per second (cfs, often historically abbreviated as cusec) are the two primary flow rate units in American water resources engineering. While mechanical engineers and water utility operators size water meters, fire sprinkler grids, and booster pumps in gallons per minute, civil engineers, hydrologists, and the US Geological Survey (USGS) model open channel rivers, stormwater drainage, and canal diversions in cubic feet per second.",
    "The mathematical link between GPM and cfs is governed by time and volume geometry. One cubic foot contains exactly 7.480519 US liquid gallons (1,728 / 231). Because there are 60 seconds in a minute, one cubic foot per second is equivalent to 7.480519 × 60 = 448.831169 gallons per minute.",
    "To convert gallons per minute to cubic feet per second, divide the GPM value by 448.831169 (or multiply by approximately 0.002228009). This technical guide details the governing conversion principles, the classic 449 rule of thumb, practical stormwater drainage calculations, and an authoritative reference table."
  ],
  quickAnswer: {
    text: "To convert GPM to cfs, divide the flow rate by 448.831169 (or multiply by 0.002228). For example, 450 GPM equals approximately 1.0026 cfs.",
    formulaDisplay: "cfs = GPM / 448.831169 = GPM × 0.002228009",
    subtext: "1 cfs = 448.831169 GPM; 1 GPM ≈ 0.002228 cfs."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the benchmark liquid flow metric in US commercial plumbing and industrial process engineering. Defined as the movement of one US liquid gallon (231 cubic inches, or ~3.785412 liters) per sixty seconds, GPM is standard across the American Water Works Association (AWWA), NFPA fire codes, and the Hydraulic Institute (HI) for rating centrifugal and positive displacement pumps."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet per Second (cfs / cusec)",
    text: "The cubic foot per second is the foundational unit of open-channel hydraulics and surface water hydrology in the United States. Representing one cubic foot (~28.3168 liters or 7.4805 gallons) of fluid passing a cross-section every second, cfs is used by the USGS to report stream flows, by state water boards for water rights allocations, and by civil designers for storm sewer and bridge culvert sizing."
  },
  relationship: "One cubic foot per second equals exactly 448.8311688 gallons per minute (7.4805195 gal/ft³ × 60 s/min). Inversely, 1 GPM equals approximately 0.002228009 cfs. Roughly 449 GPM corresponds to 1 cfs.",
  relationshipTitle: "GPM to cfs Ratio Comparison",
  relationshipItems: [
    { label: "1 GPM", value: "0.002228 cfs" },
    { label: "100 GPM", value: "0.222801 cfs" },
    { label: "225 GPM", value: "0.501302 cfs (~0.5 cfs)" },
    { label: "448.83 GPM", value: "1.000000 cfs" },
    { label: "1,000 GPM", value: "2.228009 cfs" },
    { label: "5,000 GPM", value: "11.140046 cfs" },
    { label: "10,000 GPM", value: "22.280093 cfs" }
  ],
  formula: {
    text: "Divide the flow rate in GPM by 448.831169, or multiply by 0.002228009, to calculate cubic feet per second.",
    math: "\\text{cfs} = \\frac{\\text{GPM}}{448.831169} \\approx \\text{GPM} \\times 0.002228009",
    subtext: "Inverse formula: GPM = cfs × 448.831169"
  },
  formulaTitle: "GPM to cfs Conversion Formula",
  practicalTip: {
    title: "The Classic '449' Field Rule of Thumb",
    text: "Hydrologists and civil engineers frequently use 449 GPM ≈ 1 cfs for mental calculations. Dividing GPM by 450 gives a quick estimate with less than a 0.26% error (e.g., 900 GPM / 450 = 2 cfs, versus exact 2.005 cfs)."
  },
  expertNote: {
    title: "Water Rights and Acre-Feet Connections",
    text: "In Western US water rights law, continuous stream diversions are issued in cfs. A continuous flow of 1 cfs equals approximately 1.9835 acre-feet per day, or about 724 acre-feet per year. Converting pump capacity in GPM into cfs is the first step toward validating legal water appropriation limits."
  },
  examples: {
    title: "Step-by-Step GPM to cfs Worked Examples",
    items: [
      {
        title: "Example 1: Stormwater Detention Pond Inflow",
        subtitle: "A commercial site parking lot drainage system discharges into a detention pond at peak 2,250 GPM. Express this inflow in cfs.",
        steps: [
          "State the inflow rate: Q = 2,250 GPM.",
          "Apply the conversion factor: cfs = 2,250 / 448.831169.",
          "Calculate: 2,250 / 448.831169 ≈ 5.01302.",
          "Final Result: 2,250 GPM equals approximately 5.01 cfs."
        ]
      },
      {
        title: "Example 2: Municipal Well Discharge Evaluation",
        subtitle: "A deep drinking water production well yields 650 GPM during a drawdown pump test. Convert this yield to cfs.",
        steps: [
          "Identify the pump yield: Q = 650 GPM.",
          "Multiply by 0.002228009: 650 × 0.002228009 ≈ 1.448206.",
          "Final Result: 650 GPM corresponds to approximately 1.45 cfs."
        ]
      },
      {
        title: "Example 3: Irrigation Canal Offtake Sizing",
        subtitle: "An agricultural siphon tube draws 180 GPM from an irrigation ditch. Find the discharge in cfs.",
        steps: [
          "Identify the flow rate: 180 GPM.",
          "Divide by 448.831169: 180 / 448.831169 ≈ 0.401042.",
          "Final Result: 180 GPM corresponds to approximately 0.401 cfs."
        ]
      }
    ]
  },
  table: {
    title: "GPM to cfs Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Cubic feet/sec (cfs)", "Liters/sec (L/s)", "Cubic feet/min (CFM)"],
    rows: [
      { fromVal: "10 GPM", toVal: "0.0223 cfs", extra: "0.63 L/s", extra2: "1.34 CFM" },
      { fromVal: "50 GPM", toVal: "0.1114 cfs", extra: "3.15 L/s", extra2: "6.68 CFM" },
      { fromVal: "100 GPM", toVal: "0.2228 cfs", extra: "6.31 L/s", extra2: "13.37 CFM" },
      { fromVal: "200 GPM", toVal: "0.4456 cfs", extra: "12.62 L/s", extra2: "26.74 CFM" },
      { fromVal: "448.83 GPM", toVal: "1.0000 cfs", extra: "28.32 L/s", extra2: "60.00 CFM" },
      { fromVal: "500 GPM", toVal: "1.1140 cfs", extra: "31.55 L/s", extra2: "66.84 CFM" },
      { fromVal: "1,000 GPM", toVal: "2.2280 cfs", extra: "63.09 L/s", extra2: "133.68 CFM" },
      { fromVal: "2,000 GPM", toVal: "4.4560 cfs", extra: "126.18 L/s", extra2: "267.36 CFM" },
      { fromVal: "5,000 GPM", toVal: "11.1400 cfs", extra: "315.45 L/s", extra2: "668.40 CFM" },
      { fromVal: "10,000 GPM", toVal: "22.2801 cfs", extra: "630.90 L/s", extra2: "1,336.81 CFM" }
    ]
  },
  applications: {
    title: "Hydraulic Engineering Applications of GPM to cfs",
    items: [
      {
        title: "Storm Sewer & Culvert Hydraulic Modeling",
        text: "Converting commercial rooftop and site pump runoff data from GPM into cfs for EPA SWMM and HEC-RAS hydraulic channel modeling."
      },
      {
        title: "Environmental Stream Gauging & In-Stream Flow",
        text: "Comparing industrial cooling water plant discharges recorded in GPM against regulated minimum in-stream flow limits reported by the USGS in cfs."
      },
      {
        title: "Irrigation Canal & Flume Diversions",
        text: "Translating Parshall flume stage-discharge curves in cfs into farm pump flow ratings specified in GPM."
      },
      {
        title: "Water Well Capacity & Drawdown Testing",
        text: "Reconciling hydrogeological aquifer transmissivity test yields with regional water district allocations measured in cfs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to cfs Conversions",
    items: [
      "Confusing cfs (cubic feet per second) with CFM (cubic feet per minute), resulting in a 60x calculation error.",
      "Dividing by 7.48 instead of 448.83, neglecting to convert the time base from minutes to seconds.",
      "Multiplying by 448.83 instead of dividing when converting from GPM to cfs.",
      "Using the UK imperial gallon instead of the US liquid gallon."
    ]
  },
  faqs: [
    {
      question: "How many cfs are in 1 GPM?",
      answer: "There are approximately 0.002228 cfs in 1 GPM (1 / 448.831169 cfs)."
    },
    {
      question: "How many GPM are in 1 cfs?",
      answer: "There are exactly 448.831169 GPM in 1 cfs (7.48051948 gal/ft³ × 60 s/min)."
    },
    {
      question: "What is the formula to convert GPM to cfs?",
      answer: "The formula is: cfs = GPM / 448.831169, or cfs = GPM × 0.002228009."
    },
    {
      question: "What is the 449 rule of thumb?",
      answer: "Hydrologists commonly remember that 448.83 GPM (roughly 449 GPM) equals 1 cfs. Dividing GPM by 450 provides a rapid field estimate with less than 0.3% error."
    },
    {
      question: "How do I convert 1,000 GPM to cfs?",
      answer: "Divide 1,000 by 448.831169 to obtain approximately 2.228 cfs."
    },
    {
      question: "Is cfs the same as cusec?",
      answer: "Yes, 'cusec' is an older British Commonwealth and American engineering abbreviation for cubic foot per second (1 cusec = 1 cfs)."
    },
    {
      question: "How does 1 cfs relate to acre-feet per day?",
      answer: "A continuous flow of 1 cfs for 24 hours equals approximately 1.9835 acre-feet (nearly 2 acre-feet per day)."
    },
    {
      question: "Why do hydrologists prefer cfs over GPM?",
      answer: "Because stream cross-sections are measured in square feet and flow velocity in feet per second, multiplying area (ft²) by velocity (ft/s) directly gives cfs (ft³/s) without unit conversions."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic feet/min", from: "gallon-per-min", to: "cubic-feet-per-min" },
    { label: "Gallon/min to Cubic meter/sec", from: "gallon-per-min", to: "cubic-meter-per-sec" },
    { label: "Cubic feet/sec to Gallon/min", from: "cubic-feet-per-sec", to: "gallon-per-min" },
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" }
  ],
  references: [
    "USGS Water-Supply Paper 2175: Measurement and Computation of Streamflow.",
    "American Water Works Association (AWWA) M33: Flowmeters in Water Supply.",
    "Federal Highway Administration (FHWA) HDS-5: Hydraulic Design of Highway Culverts."
  ]
};
