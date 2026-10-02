import { CustomArticleData } from "./types";

export const gallonPerMinToCubicFeetPerMin: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cubic-feet-per-min",
  seoTitle: "Gallon/min to Cubic feet/min Converter (GPM to CFM) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to cubic feet per minute (GPM to CFM) with exact volumetric formulas, engineering calculations, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cubic-feet-per-min",
  h1: "Gallon/min to Cubic feet/min Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic feet per minute (CFM or ft³/min) are two foundational volumetric flow rate units in United States customary engineering. While GPM is the standard metric for liquid handling in plumbing, municipal water systems, chemical dosing, and fire protection hydraulics, CFM is the benchmark unit for airflow, ventilation, compressed air, and gas transfer.",
    "Both units measure volume flowing over a one-minute duration. The physical conversion depends strictly on the geometric definition of the US liquid gallon, established by Congress in 1836 as exactly 231 cubic inches. Since a standard cubic foot contains 1,728 cubic inches (12³), exactly 7.480519 US gallons fit inside one cubic foot.",
    "To convert from gallons per minute to cubic feet per minute, multiply the GPM value by 231/1728 (approximately 0.133681) or divide by 7.480519. This technical guide outlines the exact geometric derivations, provides step-by-step calculations for civil and mechanical engineers, and includes an authoritative conversion table."
  ],
  quickAnswer: {
    text: "To convert GPM to CFM, divide the flow rate by 7.480519 or multiply by 0.1336806. For example, 100 GPM equals approximately 13.368 CFM.",
    formulaDisplay: "CFM = GPM × (231 / 1,728) = GPM / 7.480519 ≈ GPM × 0.133681",
    subtext: "1 CFM = 7.480519 GPM; 1 GPM ≈ 0.133681 CFM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the primary unit of liquid volumetric flow in the United States, defined as the displacement of one US liquid gallon (231 in³, or ~3.785412 liters) per sixty seconds. Widely mandated in American Society of Plumbing Engineers (ASPE) standards and National Fire Protection Association (NFPA) fire pump codes, GPM quantifies pump capacities, residential water supply lines, cooling tower loops, and industrial fluid pipelines."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet per Minute (CFM)",
    text: "Cubic feet per minute represents the volumetric displacement of one standard cubic foot (1,728 in³, or ~28.3168 liters) per minute. Although most commonly recognized in HVAC ductwork design and industrial blower specifications under ASHRAE guidelines, CFM is equally valid for liquid flows when interfacing with detention pond volumes, stormwater runoff hydrographs, and hydraulic settling basins."
  },
  relationship: "Because one US gallon equals exactly 231 cubic inches and one cubic foot equals 1,728 cubic inches, one cubic foot contains exactly 1,728 / 231 = 7.48051948 US gallons. Inversely, 1 GPM equals 231 / 1,728 = 0.133680555 CFM.",
  relationshipTitle: "GPM to CFM Volumetric Ratio",
  relationshipItems: [
    { label: "1 GPM", value: "0.133681 CFM" },
    { label: "7.4805 GPM", value: "1.000000 CFM" },
    { label: "10 GPM", value: "1.336806 CFM" },
    { label: "50 GPM", value: "6.684028 CFM" },
    { label: "100 GPM", value: "13.368056 CFM" },
    { label: "500 GPM", value: "66.840278 CFM" },
    { label: "1,000 GPM", value: "133.680556 CFM" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 231/1728 (or 0.13368056), or divide by 7.480519, to determine the flow rate in cubic feet per minute.",
    math: "\\text{CFM} = \\text{GPM} \\times \\frac{231}{1{,}728} = \\frac{\\text{GPM}}{7.48051948}",
    subtext: "Inverse formula: GPM = CFM × 7.48051948"
  },
  formulaTitle: "GPM to CFM Conversion Formula",
  practicalTip: {
    title: "Quick 7.5 Divisor Rule of Thumb",
    text: "For quick job-site estimates, divide GPM by 7.5. For instance, a 150 GPM sump pump moves about 20 CFM (exact calculation is 20.05 CFM, representing less than a 0.3% margin of error)."
  },
  expertNote: {
    title: "US Liquid Gallon vs Imperial Gallon Notice",
    text: "This conversion applies strictly to the US liquid gallon (231 in³ = 3.785 L). The British Imperial gallon is defined as exactly 4.54609 liters (approx. 277.42 in³), yielding 6.2288 imperial gallons per cubic foot. Using the imperial constant on US projects creates an erroneous 16.7% volume deficit."
  },
  examples: {
    title: "Step-by-Step GPM to CFM Worked Examples",
    items: [
      {
        title: "Example 1: Stormwater Sump Pump Sizing",
        subtitle: "A basement drainage pit pump is rated for 180 GPM. Determine the pumping capacity in cubic feet per minute.",
        steps: [
          "State the given liquid flow rate: Q = 180 GPM.",
          "Apply the conversion formula: CFM = 180 / 7.48051948.",
          "Calculate: 180 / 7.48051948 ≈ 24.0625.",
          "Final Result: 180 GPM equals approximately 24.06 CFM."
        ]
      },
      {
        title: "Example 2: Industrial Cooling Water Basin Recharge",
        subtitle: "A factory cooling loop delivers 750 GPM of chilled water into a rectangular reservoir. Convert this delivery to CFM.",
        steps: [
          "Identify the flow rate: Q = 750 GPM.",
          "Multiply by the volumetric factor 0.13368056: 750 × 0.13368056 ≈ 100.2604.",
          "Final Result: 750 GPM corresponds to approximately 100.26 CFM."
        ]
      },
      {
        title: "Example 3: Fire Protection Hydrant Flow Test",
        subtitle: "A municipal fire hydrant flow test measures a pitot discharge of 1,250 GPM. Express this flow in CFM.",
        steps: [
          "State the hydrant discharge: 1,250 GPM.",
          "Divide by 7.48051948: 1,250 / 7.48051948 ≈ 167.0988.",
          "Final Result: 1,250 GPM equals approximately 167.10 CFM."
        ]
      }
    ]
  },
  table: {
    title: "GPM to CFM Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Cubic feet/min (CFM)", "Cubic feet/sec (cfs)", "Liters/min (L/min)"],
    rows: [
      { fromVal: "5 GPM", toVal: "0.668 CFM", extra: "0.0111 cfs", extra2: "18.93 L/min" },
      { fromVal: "10 GPM", toVal: "1.337 CFM", extra: "0.0223 cfs", extra2: "37.85 L/min" },
      { fromVal: "25 GPM", toVal: "3.342 CFM", extra: "0.0557 cfs", extra2: "94.64 L/min" },
      { fromVal: "50 GPM", toVal: "6.684 CFM", extra: "0.1114 cfs", extra2: "189.27 L/min" },
      { fromVal: "75 GPM", toVal: "10.026 CFM", extra: "0.1671 cfs", extra2: "283.91 L/min" },
      { fromVal: "100 GPM", toVal: "13.368 CFM", extra: "0.2228 cfs", extra2: "378.54 L/min" },
      { fromVal: "250 GPM", toVal: "33.420 CFM", extra: "0.5570 cfs", extra2: "946.35 L/min" },
      { fromVal: "500 GPM", toVal: "66.840 CFM", extra: "1.1140 cfs", extra2: "1,892.71 L/min" },
      { fromVal: "750 GPM", toVal: "100.260 CFM", extra: "1.6710 cfs", extra2: "2,839.06 L/min" },
      { fromVal: "1,000 GPM", toVal: "133.681 CFM", extra: "2.2280 cfs", extra2: "3,785.41 L/min" }
    ]
  },
  applications: {
    title: "Engineering Applications of GPM to CFM Conversions",
    items: [
      {
        title: "Hydraulic Detention Basin & Reservoir Sizing",
        text: "Civil engineers calculate retention tank filling intervals by converting municipal pumping rates in GPM to basin geometry dimensions measured in cubic feet."
      },
      {
        title: "Wastewater Treatment Clarifier Design",
        text: "Translating influent pumping rates from GPM into volumetric residence chamber flows in CFM to determine settling velocities and hydraulic retention times."
      },
      {
        title: "Irrigation & Agricultural Water Deliveries",
        text: "Matching agricultural well pump discharge rates in GPM against canal acre-foot storage allocations measured in cubic feet."
      },
      {
        title: "Multiphase Pipeline Flow Modeling",
        text: "Comparing liquid water and gas volumetric flow rates in industrial stripping columns and petrochemical scrubber towers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to CFM Calculations",
    items: [
      "Confusing CFM (cubic feet per minute) with cfs (cubic feet per second), leading to a 60-fold calculation error.",
      "Using the UK imperial gallon factor (6.2288 gal/ft³) instead of the US gallon factor (7.4805 gal/ft³).",
      "Multiplying by 7.4805 instead of dividing when converting from GPM to CFM.",
      "Failing to account for temperature and water density changes when computing high-temperature mass flow balances."
    ]
  },
  faqs: [
    {
      question: "How many CFM are in 1 GPM?",
      answer: "There are approximately 0.133681 CFM in 1 GPM (exactly 231 / 1,728 ft³/min)."
    },
    {
      question: "How many GPM are in 1 CFM?",
      answer: "There are exactly 7.48051948 GPM in 1 CFM (1,728 / 231 gallons)."
    },
    {
      question: "What is the formula to convert GPM to CFM?",
      answer: "The formula is: CFM = GPM / 7.480519, or CFM = GPM × 0.133681."
    },
    {
      question: "Why does 1 cubic foot equal 7.48 gallons?",
      answer: "Because 1 cubic foot contains 1,728 cubic inches (12 × 12 × 12) and 1 US liquid gallon is legally defined as exactly 231 cubic inches. Dividing 1,728 by 231 yields 7.480519."
    },
    {
      question: "How do I convert 500 GPM to CFM?",
      answer: "Divide 500 by 7.480519 to obtain approximately 66.84 CFM."
    },
    {
      question: "Is CFM only used for air and gas?",
      answer: "While CFM is most widely used for airflow in HVAC, it is fundamentally a volumetric unit (ft³/min) valid for any fluid, including water, slurry, and oil."
    },
    {
      question: "What is the difference between CFM and cfs?",
      answer: "CFM measures cubic feet per minute, while cfs measures cubic feet per second. Exactly 60 CFM equals 1 cfs."
    },
    {
      question: "Can I use 7.5 as a rough divisor?",
      answer: "Yes, dividing GPM by 7.5 yields a rapid approximation with less than 0.3% error, which is suitable for field estimates."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic feet/sec", from: "gallon-per-min", to: "cubic-feet-per-sec" },
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Gallon/min to CFM", from: "gallon-per-min", to: "cfm-unit" },
    { label: "Cubic feet/min to Gallon/min", from: "cubic-feet-per-min", to: "gallon-per-min" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "ASHRAE Handbook: Fundamentals (American Society of Heating, Refrigerating and Air-Conditioning Engineers).",
    "NFPA 20: Standard for the Installation of Stationary Pumps for Fire Protection."
  ]
};
