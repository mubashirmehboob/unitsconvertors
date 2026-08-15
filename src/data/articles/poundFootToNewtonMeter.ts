import { CustomArticleData } from "./types";

export const poundFootToNewtonMeter: CustomArticleData = {
  fromUnitId: "pound-foot",
  toUnitId: "newton-meter",
  seoTitle: "Pound-Foot to Newton-Meter Converter (lb·ft to N·m)",
  metaDescription: "Convert pound-feet to Newton-meters (lb·ft to N·m) with precision. Formula, exact 1.3558179 factor, automotive dynamometer examples, charts, and FAQs.",
  h1: "Pound-Foot to Newton-Meter Converter",
  introduction: [
    "The pound-foot (lb·ft, frequently referred to in automotive contexts as the foot-pound) and the Newton-meter (N·m) are the standard engineering units used to quantify rotational torque. The pound-foot is the prevailing imperial unit in the United States across the automotive, civil construction, heavy machinery, and aerospace sectors. The Newton-meter is the internationally recognized coherent derived unit of torque in the International System of Units (SI).",
    "Converting pound-feet to Newton-meters is an everyday task when configuring metric torque wrenches for American vehicles, translating US engine dynamometer horsepower and torque curves for global markets, or assembling structural steel building frames adhering to ISO standards. Because one international avoirdupois pound-force is defined as exactly 4.4482216152605 Newtons and one international foot is exactly 0.3048 meters, one pound-foot equals exactly 1.3558179483314004 Newton-meters (commonly rounded to 1.355818 N·m).",
    "This guide provides the exact conversion formulas, worked vehicle maintenance and aerospace examples, an extensive reference table, and vital practical advice on fastener lubrication factors."
  ],
  quickAnswer: {
    text: "To convert pound-feet to Newton-meters, multiply the torque value by 1.355818 (or divide by 0.737562). For example, tightening wheel lug nuts to 100 lb·ft equals approximately 135.58 N·m of torque.",
    formulaDisplay: "\\text{N·m} = \\text{lb·ft} \\times 1.355818",
    subtext: "1 pound-foot equals exactly 1.3558179483 Newton-meters."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or lbf·ft) is the US customary and British imperial unit of torque. It represents the rotational turning moment created by one pound-force acting perpendicular to a pivot at a distance of one foot (1 lb·ft = 1 lbf × 1 ft). It is standard across North American powertrain ratings, industrial bolting tooling, and machinery handbooks."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton-Meter (N·m)",
    text: "The Newton-meter (symbol: N·m) is the SI coherent derived unit of torque and moment of force. Defined as one Newton of force applied perpendicularly at the end of a one-meter radial moment arm (1 N·m = 1 N × 1 m = 1 kg·m²/s²), it serves as the global standard for mechanical engineering, robotics, and international vehicle manufacturing."
  },
  relationship: "The exact conversion factor is based on the definitions of the international yard and pound: 1 lb·ft = 4.4482216152605 N × 0.3048 m = 1.3558179483314 N·m. Conversely, 1 N·m = 1 / 1.3558179483314 ≈ 0.7375621493 lb·ft.",
  relationshipTitle: "Imperial to SI Torque Equivalence",
  relationshipItems: [
    { label: "1.0 lb·ft", value: "1.356 N·m (Light mechanical linkage adjustment)" },
    { label: "15 lb·ft", value: "20.34 N·m (Engine spark plugs & oil drain plugs)" },
    { label: "80 lb·ft", value: "108.47 N·m (Passenger car wheel lug nut specification)" },
    { label: "150 lb·ft", value: "203.37 N·m (Truck suspension control arm pivot bolts)" },
    { label: "400 lb·ft", value: "542.33 N·m (Heavy V8 truck engine peak output torque)" }
  ],
  formula: {
    text: "Multiply the torque in pound-feet by the conversion factor 1.35581795 to calculate the equivalent torque in Newton-meters.",
    math: "\\tau_{(\\text{N·m})} = \\tau_{(\\text{lb·ft})} \\times 1.35581795",
    subtext: "Alternatively: Divide the pound-foot figure by 0.73756215."
  },
  formulaTitle: "lb·ft to N·m Mathematical Formula",
  practicalTip: {
    title: "Quick Mental Arithmetic Trick",
    text: "For fast shop-floor estimates without a calculator: add one-third (33.3%) to the pound-foot value and add another 2% (e.g., 90 lb·ft → 90 + 30 = 120; 120 + 2 = 122 N·m; exact is 122.02 N·m)."
  },
  expertNote: {
    title: "Terminology: 'Pound-Foot' vs 'Foot-Pound'",
    text: "While mechanics frequently say 'foot-pounds', metrology standards (NIST SP 811 and SAE J1701) specify 'pound-foot' for torque and reserve 'foot-pound' for energy (work). This distinction prevents conflating rotational vectors with scalar energy quantities."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Setting a Metric Torque Wrench for Wheel Lugs",
        subtitle: "An American pickup truck repair manual specifies 140 lb·ft for wheel lug nuts. Convert to N·m for a metric torque wrench.",
        steps: [
          "Record initial value: 140 lb·ft.",
          "Multiply by conversion factor: N·m = 140 × 1.35581795.",
          "Perform calculation: 140 × 1.35581795 = 189.8145.",
          "Final Result: 140 lb·ft equals approximately 189.81 N·m (set wrench to 190 N·m)."
        ]
      },
      {
        title: "Example 2: Muscle Car Engine Dyno Torque",
        subtitle: "A high-performance V8 engine produces 450 lb·ft of peak torque on a dyno. Convert this to Newton-meters.",
        steps: [
          "Starting value: 450 lb·ft.",
          "Apply formula: 450 × 1.35581795 = 610.118.",
          "Final Result: 450 lb·ft converts to 610.12 N·m of crankshaft torque."
        ]
      },
      {
        title: "Example 3: Cylinder Head Bolt Final Pass",
        subtitle: "A heavy equipment engine requires 85 lb·ft on the final head bolt pass. Determine the metric equivalent.",
        steps: [
          "Starting value: 85 lb·ft.",
          "Multiply by 1.35581795: 85 × 1.35581795 = 115.2445.",
          "Final Result: 85 lb·ft equals 115.24 N·m."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Foot to Newton-Meter Reference Table",
    headers: ["Pound-Feet (lb·ft)", "Newton-Meters (N·m)", "Practical Automotive & Industrial Context"],
    rows: [
      { fromVal: "5 lb·ft", toVal: "6.78 N·m", extra: "Bicycle crank arm & small bracket bolts" },
      { fromVal: "10 lb·ft", toVal: "13.56 N·m", extra: "Engine oil pan & transmission pan M6 bolts" },
      { fromVal: "15 lb·ft", toVal: "20.34 N·m", extra: "Automotive spark plugs in aluminum heads" },
      { fromVal: "25 lb·ft", toVal: "33.90 N·m", extra: "Brake caliper guide pins & differential cover bolts" },
      { fromVal: "50 lb·ft", toVal: "67.79 N·m", extra: "Shock absorber lower mounting bolts" },
      { fromVal: "75 lb·ft", toVal: "101.69 N·m", extra: "Subcompact car wheel lug nuts (M12 studs)" },
      { fromVal: "90 lb·ft", toVal: "122.02 N·m", extra: "Midsize sedan / crossover wheel lug nuts" },
      { fromVal: "100 lb·ft", toVal: "135.58 N·m", extra: "Full-size sedan & SUV wheel lug nuts" },
      { fromVal: "140 lb·ft", toVal: "189.81 N·m", extra: "Heavy-duty truck lug nuts (Ford F-150 / Chevy 1500)" },
      { fromVal: "200 lb·ft", toVal: "271.16 N·m", extra: "Front-wheel-drive axle spindle nut" },
      { fromVal: "300 lb·ft", toVal: "406.75 N·m", extra: "Heavy diesel engine main bearing cap bolts" },
      { fromVal: "500 lb·ft", toVal: "677.91 N·m", extra: "Commercial semi-truck wheel lug nuts" },
      { fromVal: "1,000 lb·ft", toVal: "1,355.82 N·m", extra: "High-torque industrial hydraulic flanged pipe bolts" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Automotive Maintenance & Racing Teams",
        text: "Mechanics working with imported European tools on American muscle cars or domestic drag racing vehicles regularly convert between lb·ft and N·m when tuning suspensions, transmissions, and engine assemblies."
      },
      {
        title: "Engine & Chassis Dynamometer Testing",
        text: "Engine builders testing horsepower and torque curves on dynos convert imperial lb·ft output figures into metric N·m for international homologation and FIA competition compliance."
      },
      {
        title: "Structural Steel Joint Assembly",
        text: "Ironworkers and structural inspectors verifying high-strength ASTM A325 and A490 structural bolts convert imperial bolt tensioning charts into metric tooling settings on international construction jobsites."
      },
      {
        title: "Wind Turbine & Heavy Industrial Gearboxes",
        text: "Field service technicians servicing multi-megawatt wind turbine planetary gearboxes convert US manufacturer torque specs into metric calibrated hydraulic torque wrench settings."
      }
    ]
  },
  pitfalls: {
    title: "Crucial Torque Mistakes to Avoid",
    items: [
      "Confusing lb·ft with lb·in: If a specification calls for 30 lb·in (e.g., valve covers) and you apply 30 lb·ft, you will exert 360 lb·in (40.7 N·m) and shear the fastener instantly.",
      "Dividing Instead of Multiplying: Dividing lb·ft by 1.35582 instead of multiplying yields a metric value 45% too low, resulting in loose fasteners that can back out during operation.",
      "Ignoring Thread Lubrication: The specified conversion applies to dry fastener torque. If applying thread sealant, anti-seize, or motor oil, torque must generally be reduced by 20% to prevent over-stretching the bolt.",
      "Using Torque Wrench at Extreme Limits: Torque wrenches lose precision at the bottom 20% of their scale. Always select a wrench where the target value sits in the middle 50% to 80% range."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-feet to Newton-meters?",
      answer: "Multiply the pound-foot (lb·ft) value by 1.355818. For example, 80 lb·ft × 1.355818 = 108.47 N·m."
    },
    {
      question: "What is 100 lb·ft in N·m?",
      answer: "100 lb·ft equals approximately 135.58 N·m (100 × 1.355818 = 135.5818 N·m)."
    },
    {
      question: "Is lb·ft the same as foot-pounds?",
      answer: "In common automotive and mechanical parlance, yes, they are treated as identical. Technically, engineering standards recommend using 'pound-foot' for torque and 'foot-pound' for work or energy."
    },
    {
      question: "What is 50 lb·ft in N·m?",
      answer: "50 lb·ft equals approximately 67.79 N·m (50 × 1.355818 = 67.7909 N·m)."
    },
    {
      question: "How do I convert 150 lb·ft to N·m for truck wheel lugs?",
      answer: "Multiply 150 by 1.355818: 150 × 1.355818 = 203.37 N·m."
    },
    {
      question: "Why do some torque wrenches show both lb·ft and N·m?",
      answer: "Modern dual-scale torque wrenches include both scales etched on opposite sides of the barrel to allow mechanics to service both domestic (imperial) and imported (metric) vehicles without manual math."
    },
    {
      question: "How many lb·ft are in 1 N·m?",
      answer: "1 N·m equals approximately 0.737562 lb·ft (1 ÷ 1.355818 = 0.737562 lb·ft)."
    },
    {
      question: "What is the formula to calculate engine horsepower from lb·ft?",
      answer: "Horsepower = (Torque in lb·ft × Engine RPM) / 5252. At 5,252 RPM, horsepower and torque in lb·ft are always mathematically equal."
    }
  ],
  relatedList: [
    { label: "Newton-Meter to Pound-Foot", from: "newton-meter", to: "pound-foot" },
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" },
    { label: "Pound-Foot to Kilogram-Force Meter", from: "pound-foot", to: "kilogram-force-meter" },
    { label: "Pound-Foot to Newton-Centimeter", from: "pound-foot", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Newton-Meter to Pound-Foot Conversion Guide",
      description: "Reverse conversion equations, SI torque principles, and metric fastener tightening charts.",
      from: "newton-meter",
      to: "pound-foot"
    },
    {
      title: "Pound-Foot to Pound-Inch Conversion Guide",
      description: "Convert heavy foot-pound torque into precision inch-pounds for low-torque assemblies.",
      from: "pound-foot",
      to: "pound-inch"
    }
  ],
  references: [
    "SAE J1701: Torque-Tension Relationship for Threaded Fasteners",
    "ASME B107.300: Manual Torque Tools — Precision & Calibration Standards",
    "ISO 80000-4: Quantities and Units — Part 4: Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)"
  ]
};
