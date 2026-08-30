import { CustomArticleData } from "./types";

export const literPerSecToFlowPerUnitArea: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "flow-per-unit-area",
  seoTitle: "Liter per Second to Flow per Unit Area Converter (L/s to L/s/m²)",
  metaDescription: "Convert liters per second to flow per unit area (L/s to L/s/m²). Understand the hydraulic flux relationship, membrane filtration equations, examples, and tables.",
  h1: "Liter per Second to Flow per Unit Area Converter",
  introduction: [
    "In fluid mechanics, chemical process engineering, and environmental water treatment, understanding the difference between total volumetric flow rate (Q) and hydraulic flux or flow per unit area (q = Q/A) is critical for designing pipelines, filter membranes, and packed absorption columns.",
    "While the liter per second (L/s) measures the total volume of fluid passing through an entire system per second, flow per unit area—expressed in liters per second per square meter (L/s/m² or L·s⁻¹·m⁻²)—quantifies the spatial distribution and superficial velocity of that liquid across an active cross-sectional or filtration surface.",
    "Under a standardized unit reference area of one square meter (A = 1 m²), 1 L/s directly corresponds to a flow per unit area of 1 L/s/m² (equivalent to a superficial velocity of 1 mm/s or 3,600 L/m²/h). This guide details the mathematical flux formulation, step-by-step sizing examples, filter bed dynamics, and comprehensive engineering reference tables."
  ],
  quickAnswer: {
    text: "Under a normalized reference area of 1 square meter, 1 liter per second equals 1 L/s/m². For any specific surface or cross-section, calculate flow per unit area by dividing total flow (L/s) by the cross-sectional area in square meters (q = Q / A).",
    formulaDisplay: "q (\\text{L/s/m}^2) = \\frac{Q (\\text{L/s})}{A (\\text{m}^2)}",
    subtext: "1 L/s/m² corresponds to a linear fluid superficial velocity of 0.001 m/s (1 mm/s) or 3,600 L/(m²·h)."
  },
  aboutSourceUnit: {
    title: "Understanding Total Volumetric Flow (L/s)",
    text: "The liter per second (symbol: L/s) is a standard metric unit representing bulk fluid volume displacement over time. It measures the aggregate volume of fluid transported through a pipe, channel, or pump regardless of the physical dimensions or surface geometry of the conduit."
  },
  aboutTargetUnit: {
    title: "Understanding Flow per Unit Area (L/s/m²)",
    text: "Flow per unit area (symbol: L/s/m² or L/(s·m²)), often referred to in chemical engineering and hydrogeology as hydraulic flux, areal flow rate, or superficial velocity, measures the volume rate of liquid moving through each unit area of a permeable medium, membrane, or conduit. It has base physical dimensions of length per time ([L]/[T]), as 1 L/s/m² = 0.001 m³/s/m² = 0.001 m/s = 1 mm/s."
  },
  relationship: "The relationship between total flow (Q in L/s) and flow per unit area (q in L/s/m²) is governed by the active cross-sectional or membrane area (A in m²): q = Q / A. When evaluating systems on a standardized per-square-meter basis (A = 1 m²), the numerical value is identical. For systems with arbitrary surface areas, dividing total flow rate by area yields the specific loading rate.",
  relationshipTitle: "Bulk Flow vs Hydraulic Loading Flux Relationship",
  relationshipItems: [
    { label: "1 L/s across 1 m²", value: "1.000 L/s/m² (1.0 mm/s superficial velocity)" },
    { label: "1 L/s across 2 m²", value: "0.500 L/s/m² (0.5 mm/s superficial velocity)" },
    { label: "1 L/s across 0.5 m²", value: "2.000 L/s/m² (2.0 mm/s superficial velocity)" },
    { label: "1 L/s/m² in LMH", value: "3,600 L/(m²·h) (Liters per m² per hour)" },
    { label: "1 L/s/m² in m/s", value: "0.001 m/s (10⁻³ m/s)" }
  ],
  formula: {
    text: "Divide the total flow rate in liters per second by the cross-sectional or active filtration area in square meters to determine the flow per unit area.",
    math: "q = \\frac{Q}{A} \\quad \\left[\\frac{\\text{L}}{\\text{s}\\cdot\\text{m}^2} = \\frac{\\text{L/s}}{\\text{m}^2}\\right]",
    subtext: "For a normalized unit area (A = 1 m²): q = Q × 1.0"
  },
  formulaTitle: "Volumetric Flow to Areal Flux Conversion Formula",
  practicalTip: {
    title: "Membrane Filtration Unit Translation",
    text: "Water treatment membrane specifications (ultrafiltration and reverse osmosis) frequently use 'LMH' (Liters per Meter-squared per Hour). To convert from L/s/m² to LMH, multiply by 3,600 (1 L/s/m² = 3,600 LMH)."
  },
  expertNote: {
    title: "Darcy's Law & Superficial Velocity",
    text: "In porous media and groundwater modeling, flow per unit area (L/s/m²) represents the Darcy flux or specific discharge ($v = -K \\cdot dh/dl$). Multiplying Darcy flux by media porosity ($\epsilon$) gives the actual pore interstitial fluid velocity ($v_p = v / \epsilon$)."
  },
  examples: {
    title: "Step-by-Step Practical Worked Examples",
    items: [
      {
        title: "Example 1: Rapid Sand Filter Bed Sizing",
        subtitle: "A drinking water treatment plant directs 25 L/s of pre-treated water across a rapid sand filter bed measuring 5 m by 4 m (Area = 20 m²). Determine the hydraulic loading rate in L/s/m².",
        steps: [
          "State total volumetric flow rate: Q = 25 L/s.",
          "Calculate filter bed surface area: A = 5 m × 4 m = 20 m².",
          "Apply the areal flow formula: q = Q / A = 25 / 20.",
          "Compute result: 25 / 20 = 1.25 L/s/m².",
          "Final Result: The filter operates at a hydraulic loading of 1.25 L/s/m² (or 4,500 LMH / 4.5 m/h)."
        ]
      },
      {
        title: "Example 2: Membrane Bioreactor (MBR) Module",
        subtitle: "An MBR membrane cassette with 250 m² of active membrane area filters an effluent flow of 3.5 L/s. Find the membrane flux in L/s/m².",
        steps: [
          "Identify total flow rate: Q = 3.5 L/s.",
          "Identify active membrane area: A = 250 m².",
          "Calculate flux: q = 3.5 / 250 = 0.014 L/s/m².",
          "Translate to LMH: 0.014 × 3,600 = 50.4 L/(m²·h).",
          "Final Result: The specific flux is 0.014 L/s/m² (50.4 LMH)."
        ]
      },
      {
        title: "Example 3: Trickling Biofilter Distributor",
        subtitle: "A wastewater trickling filter with a 10-meter diameter circular bed (Area ≈ 78.54 m²) receives a distributor feed of 15 L/s. Calculate the areal hydraulic application rate.",
        steps: [
          "State total flow: Q = 15 L/s.",
          "Bed surface area: A = π × (5 m)² ≈ 78.54 m².",
          "Compute areal loading: q = 15 / 78.54 = 0.19098 L/s/m².",
          "Final Result: The hydraulic application rate is approximately 0.191 L/s/m²."
        ]
      }
    ]
  },
  table: {
    title: "Flow Rate to Flow per Unit Area Reference Table",
    headers: ["Total Flow (L/s)", "Normalized Flux (1 m²)", "Flux over 5 m²", "Flux over 25 m²", "Superficial Velocity (1 m²)"],
    rows: [
      { fromVal: "0.1 L/s", toVal: "0.100 L/s/m²", extra: "0.020 L/s/m²", extra2: "0.004 L/s/m²", extra3: "0.10 mm/s" },
      { fromVal: "0.5 L/s", toVal: "0.500 L/s/m²", extra: "0.100 L/s/m²", extra2: "0.020 L/s/m²", extra3: "0.50 mm/s" },
      { fromVal: "1.0 L/s", toVal: "1.000 L/s/m²", extra: "0.200 L/s/m²", extra2: "0.040 L/s/m²", extra3: "1.00 mm/s" },
      { fromVal: "2.5 L/s", toVal: "2.500 L/s/m²", extra: "0.500 L/s/m²", extra2: "0.100 L/s/m²", extra3: "2.50 mm/s" },
      { fromVal: "5.0 L/s", toVal: "5.000 L/s/m²", extra: "1.000 L/s/m²", extra2: "0.200 L/s/m²", extra3: "5.00 mm/s" },
      { fromVal: "10.0 L/s", toVal: "10.00 L/s/m²", extra: "2.000 L/s/m²", extra2: "0.400 L/s/m²", extra3: "10.0 mm/s" },
      { fromVal: "25.0 L/s", toVal: "25.00 L/s/m²", extra: "5.000 L/s/m²", extra2: "1.000 L/s/m²", extra3: "25.0 mm/s" },
      { fromVal: "50.0 L/s", toVal: "50.00 L/s/m²", extra: "10.00 L/s/m²", extra2: "2.000 L/s/m²", extra3: "50.0 mm/s" },
      { fromVal: "100.0 L/s", toVal: "100.0 L/s/m²", extra: "20.00 L/s/m²", extra2: "4.000 L/s/m²", extra3: "100.0 mm/s" }
    ]
  },
  applications: {
    title: "Engineering Applications of Hydraulic Flux Calculations",
    items: [
      {
        title: "Membrane Filtration & Reverse Osmosis",
        text: "Designers use flow per unit area to evaluate flux decline, concentration polarization, and fouling rates across hollow fiber and spiral wound membrane modules."
      },
      {
        title: "Clarifier & Settling Basin Overflow Rates",
        text: "Wastewater clarifier performance is governed by the hydraulic surface overflow rate (m³/m²/day or L/s/m²), determining whether settling particles overcome upward fluid velocity."
      },
      {
        title: "Cooling Towers & Packed Scrubbers",
        text: "Chemical engineers size liquid distributor trays and packings by ensuring uniform liquid loading per unit area to prevent dry spots or flooding."
      },
      {
        title: "Geotechnical Drainage & Permeability Testing",
        text: "Civil engineers conducting constant-head permeameter tests convert drainage flow rates into Darcy velocities to determine soil hydraulic conductivity."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Hydraulic Flux Calculations",
    items: [
      "Failing to account for the total active surface area when scaling up from pilot laboratory flow rates.",
      "Confusing superficial velocity (flow / total area) with interstitial velocity (flow / void area).",
      "Mixing time units (e.g., confusing L/s/m² with L/h/m² or LMH, which differs by a factor of 3,600).",
      "Overlooking nonuniform flow distribution across large packed beds or multi-tube membrane arrays."
    ]
  },
  faqs: [
    {
      question: "What is the difference between L/s and L/s/m²?",
      answer: "Liters per second (L/s) is the total volumetric flow rate through an entire system. Liters per second per square meter (L/s/m²) is the flow rate normalized across a cross-sectional or filtration surface area (flux)."
    },
    {
      question: "How do you calculate flow per unit area from total flow?",
      answer: "Divide the total flow rate (L/s) by the cross-sectional area (m²): Flux (L/s/m²) = Total Flow (L/s) / Area (m²)."
    },
    {
      question: "What is 1 L/s/m² in linear velocity (m/s)?",
      answer: "Since 1 liter is 0.001 m³, 1 L/s/m² equals 0.001 m³/s/m² = 0.001 m/s (or exactly 1 millimeter per second)."
    },
    {
      question: "How do you convert L/s/m² to LMH (liters per square meter per hour)?",
      answer: "Multiply the L/s/m² value by 3,600 (seconds in an hour). For example, 0.02 L/s/m² × 3,600 = 72 LMH."
    },
    {
      question: "Why is hydraulic loading per unit area important in filtration?",
      answer: "Because filtration efficiency, pressure drop (head loss), and fouling rate directly depend on the velocity and volume of fluid passing through each unit of filter medium, not just total flow."
    },
    {
      question: "What is Darcy's flux?",
      answer: "Darcy flux (also called specific discharge) is the volumetric flow rate of fluid per unit cross-sectional area through a porous medium, expressed in units of velocity (m/s) or areal flow (L/s/m²)."
    },
    {
      question: "Can flow per unit area be used for air and gases?",
      answer: "Yes, face velocity or volumetric gas flux (such as CFM/ft² or L/s/m²) is commonly used in HVAC air filtration and cleanroom design."
    },
    {
      question: "What is the base factor for normalized flow per unit area?",
      answer: "For a standard reference area of 1 square meter, 1 L/s produces an areal flux of exactly 1 L/s/m²."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Mass Flux", from: "liter-per-sec", to: "mass-flux" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Million Gallons/Day", from: "liter-per-sec", to: "million-gallons-per-day" }
  ],
  references: [
    "Perry's Chemical Engineers' Handbook (9th Edition): Liquid-Solid Operations and Membrane Processes.",
    "Metcalf & Eddy: Wastewater Engineering: Treatment and Resource Recovery.",
    "Bird, Stewart, Lightfoot: Transport Phenomena (2nd Edition)."
  ]
};
