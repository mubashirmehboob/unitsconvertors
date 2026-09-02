import { CustomArticleData } from "./types";

export const cubicMeterToCubicYard: CustomArticleData = {
  fromUnitId: "cubic-meter",
  toUnitId: "cubic-yard",
  seoTitle: "Cubic Meters to Cubic Yards Converter (m³ to yd³) | UnitsConvertors.com",
  metaDescription: "Convert cubic meters to cubic yards (m³ to yd³) with exact formulas, step-by-step calculations, concrete/earthwork worked examples, and conversion tables.",
  h1: "Cubic Meters to Cubic Yards Converter",
  introduction: [
    "Converting cubic meters to cubic yards bridges the gap between metric civil engineering specifications and US customary bulk material procurement for commercial construction, earthmoving, and landscape architecture.",
    "A cubic meter (m³) is the standard SI derived unit of volumetric measurement, defined by a cube with edges measuring one meter. In contrast, a cubic yard (yd³, often referred to simply as a 'yard' in trade) is an imperial and US customary volumetric unit defined by a cube with one-yard edges (3 feet or 36 inches), equivalent to exactly 27 cubic feet.",
    "Because one meter equals approximately 1.09361 yards, a cubic meter is larger than a cubic yard. Exactly 1 cubic meter equals approximately 1.30795 cubic yards (or 1 / 0.764554858). To convert cubic meters to cubic yards, multiply the cubic meter figure by 1.30795062 (or divide by 0.76455486). This guide provides the exact mathematical relationship, practical site examples for ready-mix concrete and topsoil grading, conversion tables, and common calculation mistakes to avoid."
  ],
  quickAnswer: {
    text: "To convert cubic meters to cubic yards, multiply the cubic meter value by 1.30795 (or divide by 0.764555). For instance, 10 cubic meters of excavated soil equals approximately 13.08 cubic yards.",
    formulaDisplay: "\\text{Cubic Yards (yd}^3\\text{)} = \\text{Cubic Meters (m}^3\\text{)} \\times 1.30795062 = \\frac{\\text{Cubic Meters}}{0.76455486}",
    subtext: "1 m³ ≈ 1.30795 yd³ | 1 yd³ = 0.764554858 m³ | 1 m³ ≈ 35.3147 ft³ | 1 yd³ = 27 ft³"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Meter (m³)",
    text: "The cubic meter (symbol: m³) is the coherent SI unit of volume, corresponding to a cube with 1-meter sides. Widely used worldwide in structural engineering, civil infrastructure, water resource management, and international freight, 1 cubic meter equals exactly 1,000 liters, approximately 35.3147 cubic feet, or roughly 1.30795 cubic yards."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Yard (yd³)",
    text: "The cubic yard (symbol: yd³ or cu yd) is an imperial and US customary unit of volume representing a three-dimensional cube measuring 3 feet (1 yard or 36 inches) on each side. It is the dominant commercial unit across North America for specifying poured concrete batches, bulk aggregates, gravel, mulches, landfill volumes, and heavy earthmoving excavation."
  },
  relationship: "One international yard is defined as exactly 0.9144 meters. Cubing this value yields 1 yd³ = (0.9144 m)³ = 0.764554857984 m³. Taking the reciprocal gives 1 m³ = 1 / 0.764554857984 ≈ 1.307950619314 yd³. Therefore, any cubic meter volume is converted to cubic yards by multiplying by 1.30795062.",
  relationshipTitle: "Cubic Meter vs Cubic Yard Volumetric Equivalence",
  relationshipItems: [
    { label: "1 Cubic Meter (m³)", value: "≈ 1.307951 yd³" },
    { label: "1 Cubic Yard (yd³)", value: "0.764555 m³" },
    { label: "5 Cubic Meters (m³)", value: "≈ 6.539753 yd³" },
    { label: "10 Cubic Meters (m³)", value: "≈ 13.079506 yd³" },
    { label: "20 Cubic Meters (m³)", value: "≈ 26.159012 yd³" },
    { label: "100 Cubic Meters (m³)", value: "≈ 130.795062 yd³" }
  ],
  formula: {
    text: "Multiply the volume in cubic meters by 1.30795062, or divide by 0.764554858.",
    math: "\\text{Volume (yd}^3\\text{)} = \\text{Volume (m}^3\\text{)} \\times 1.30795062 = \\frac{\\text{Volume (m}^3\\text{)}}{0.76455486}",
    subtext: "Inverse formula: Volume (m³) = Volume (yd³) × 0.764554858"
  },
  formulaTitle: "Cubic Meter to Cubic Yard Conversion Formula",
  practicalTip: {
    title: "On-Site Mental Estimation Rule",
    text: "For quick site estimates when ordering materials, add approximately 30.8% to your cubic meter volume to get cubic yards (or multiply by 1.3). For example, 50 m³ is approximately 50 + 15 = 65 yards (exact: 65.40 yd³). Always add standard 5% to 10% spillage and compaction allowances for concrete and earthwork orders."
  },
  expertNote: {
    title: "Density & Compaction in Earthwork Takeoffs",
    text: "When converting excavation volumes from metric CAD models (m³) to US trucking capacities (yd³), distinguish between in-situ bank volume, loose excavated volume, and compacted fill volume. Swell factors can increase loose hauling volume by 15% to 30% depending on soil composition."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Ready-Mix Concrete Slab Pour",
        subtitle: "A structural foundation drawing specifies 38.5 cubic meters of reinforced concrete. Convert this quantity into cubic yards to order from a US ready-mix concrete supplier.",
        steps: [
          "Identify the design volume: 38.5 m³.",
          "Apply the conversion factor: Volume (yd³) = 38.5 × 1.30795062.",
          "Perform calculation: 38.5 × 1.30795062 = 50.3561 yd³.",
          "Include 5% waste/spillage buffer: 50.3561 × 1.05 = 52.87 yd³.",
          "Final Order: Approximately 50.36 net cubic yards (or round up to 53 yards for delivery trucks)."
        ]
      },
      {
        title: "Example 2: Commercial Earthwork Excavation Trench",
        subtitle: "An excavator contractor moves 250 cubic meters of clay subsoil. Convert this quantity to cubic yards for hauling disposal truck load calculations.",
        steps: [
          "State starting volume: 250 m³.",
          "Multiply by conversion factor: 250 × 1.30795062 = 326.9877 yd³.",
          "Final Result: 250 cubic meters equals 326.99 cubic yards of earthwork."
        ]
      },
      {
        title: "Example 3: Landscape Topsoil Bulk Delivery",
        subtitle: "A municipal park design requests 12 cubic meters of enriched organic compost. Calculate the equivalent volume in cubic yards.",
        steps: [
          "State volume: 12 m³.",
          "Multiply by 1.30795062: 12 × 1.30795062 = 15.6954 yd³.",
          "Final Result: 12 cubic meters equals approximately 15.70 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Meter to Cubic Yard Conversion Reference Table",
    headers: ["Cubic Meters (m³)", "Cubic Yards (yd³)", "Cubic Feet (ft³)", "Liters (L)", "Common Construction Equivalent"],
    rows: [
      { fromVal: "0.5 m³", toVal: "0.6540 yd³", extra: "17.66 ft³", extra2: "500 L", extra3: "Small garden bed or footpath repair" },
      { fromVal: "1.0 m³", toVal: "1.3080 yd³", extra: "35.31 ft³", extra2: "1,000 L", extra3: "Standard bulk bag / utility aggregate" },
      { fromVal: "2.0 m³", toVal: "2.6159 yd³", extra: "70.63 ft³", extra2: "2,000 L", extra3: "Residential driveway edge footing" },
      { fromVal: "5.0 m³", toVal: "6.5398 yd³", extra: "176.57 ft³", extra2: "5,000 L", extra3: "Small ready-mix concrete mini-truck load" },
      { fromVal: "7.5 m³", toVal: "9.8096 yd³", extra: "264.86 ft³", extra2: "7,500 L", extra3: "Standard full transit mixer truck capacity" },
      { fromVal: "10.0 m³", toVal: "13.0795 yd³", extra: "353.15 ft³", extra2: "10,000 L", extra3: "Residential house foundation strip footings" },
      { fromVal: "20.0 m³", toVal: "26.1590 yd³", extra: "706.29 ft³", extra2: "20,000 L", extra3: "Large swimming pool excavation backfill" },
      { fromVal: "50.0 m³", toVal: "65.3975 yd³", extra: "1,765.73 ft³", extra2: "50,000 L", extra3: "Commercial parking lot paving subbase" },
      { fromVal: "100.0 m³", toVal: "130.7951 yd³", extra: "3,531.47 ft³", extra2: "100,000 L", extra3: "Bulk retention pond earthworks project" },
      { fromVal: "250.0 m³", toVal: "326.9877 yd³", extra: "8,828.67 ft³", extra2: "250,000 L", extra3: "Commercial building foundation slab" },
      { fromVal: "500.0 m³", toVal: "653.9753 yd³", extra: "17,657.34 ft³", extra2: "500,000 L", extra3: "Major highway bridge abutment pour" }
    ]
  },
  applications: {
    title: "Civil Engineering, Ready-Mix Concrete, & Landscape Supply",
    items: [
      {
        title: "Ready-Mix Concrete Ordering",
        text: "Converting BIM structural concrete schedules specified in cubic meters (m³) into cubic yards (yd³) for regional ready-mix dispatch centers."
      },
      {
        title: "Heavy Earthmoving & Trench Excavation",
        text: "Translating digital cut-and-fill terrain survey volumes from metric GIS terrain models to US dump truck capacities (10 to 14 yd³ per tandem haul)."
      },
      {
        title: "Bulk Landscape Material Distribution",
        text: "Procuring commercial topsoil, crushed limestone aggregate, and wood mulch measured in yards from metric architectural site plans."
      },
      {
        title: "International Freight & Maritime Logistics",
        text: "Converting cargo container volumetric limits and break-bulk stowage space between international metric manifests and US terminal yardage rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting m³ to yd³",
    items: [
      "Multiplying by 0.764555 instead of 1.30795 (or dividing by 1.30795), which incorrectly reduces the volume.",
      "Confusing linear yard conversion (1 m = 1.0936 yd) with volumetric cubic conversion (1 m³ = 1.09361³ = 1.30795 yd³).",
      "Omitting waste, spillage, and compaction factors (typically 5% to 10%) when placing concrete or aggregate orders.",
      "Confusing square yards (surface area) with cubic yards (three-dimensional volume) on shallow slab takeoffs."
    ]
  },
  faqs: [
    {
      question: "How many cubic yards are in 1 cubic meter?",
      answer: "There are approximately 1.30795062 cubic yards in 1 cubic meter. To convert m³ to yd³, multiply the cubic meter figure by 1.30795."
    },
    {
      question: "Which is bigger: 1 cubic meter or 1 cubic yard?",
      answer: "One cubic meter is larger than one cubic yard. 1 m³ equals approximately 1.31 yd³ (about 30.8% larger by volume)."
    },
    {
      question: "What is the formula to convert cubic meters to cubic yards?",
      answer: "The formula is: Cubic Yards (yd³) = Cubic Meters (m³) × 1.30795062, or Cubic Yards = Cubic Meters ÷ 0.76455486."
    },
    {
      question: "How do I convert 10 cubic meters of concrete to cubic yards?",
      answer: "Multiply 10 by 1.30795062, which yields 13.08 cubic yards of concrete."
    },
    {
      question: "How many cubic feet are in a cubic meter and a cubic yard?",
      answer: "One cubic yard contains exactly 27 cubic feet (3 ft × 3 ft × 3 ft), whereas one cubic meter contains approximately 35.3147 cubic feet."
    },
    {
      question: "How many liters are in one cubic yard?",
      answer: "One cubic yard equals 0.764554858 cubic meters, which corresponds to exactly 764.555 liters (compared to 1,000 liters in 1 m³)."
    },
    {
      question: "How many cubic yards fit in a standard ready-mix concrete truck?",
      answer: "A standard US concrete transit mixer typically carries between 8 and 10 cubic yards (approximately 6.1 to 7.6 cubic meters) per load."
    },
    {
      question: "Why do US construction companies measure concrete in cubic yards rather than meters?",
      answer: "US building codes, material specifications, batching plants, and delivery trucks traditionally operate on the US Customary System where cubic yards (27 ft³) are standard."
    }
  ],
  relatedList: [
    { label: "Cubic Yard to Cubic Meter", from: "cubic-yard", to: "cubic-meter" },
    { label: "Cubic Meter to Cubic Foot", from: "cubic-meter", to: "cubic-foot" },
    { label: "Cubic Foot to Cubic Yard", from: "cubic-foot", to: "cubic-yard" },
    { label: "Cubic Meter to Board Foot", from: "cubic-meter", to: "board-foot" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ASTM C94 / C94M: Standard Specification for Ready-Mixed Concrete.",
    "BIPM: The International System of Units (SI) — Derived Units for Volume."
  ]
};
