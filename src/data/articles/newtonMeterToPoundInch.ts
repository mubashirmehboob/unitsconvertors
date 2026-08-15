import { CustomArticleData } from "./types";

export const newtonMeterToPoundInch: CustomArticleData = {
  fromUnitId: "newton-meter",
  toUnitId: "pound-inch",
  seoTitle: "Newton-Meter to Pound-Inch Converter (N·m to lb·in)",
  metaDescription: "Convert Newton-meters to pound-inches (N·m to lb·in) accurately. Formula, 8.8507458 factor, step-by-step small fastener examples, torque charts, and FAQs.",
  h1: "Newton-Meter to Pound-Inch Converter",
  introduction: [
    "The Newton-meter (N·m) and the pound-inch (lb·in, often written as in-lb or inch-pound) are standard units of rotational torque used to specify tightening limits for small to medium fasteners. While the Newton-meter is the standard metric measurement across international engineering, the pound-inch is the preeminent imperial unit used in North America for low-torque assemblies, consumer electronics, firearm optics mounting, carbon-fiber bicycle frames, and aircraft instrument panels.",
    "Converting Newton-meters to pound-inches is vital when dealing with precision calibrated torque drivers. One pound-foot equals 12 pound-inches, and since 1 lb·ft equals 1.3558179483314 N·m, one pound-inch equals exactly 0.1129848290276167 N·m. Consequently, one Newton-meter equals approximately 8.85074579 pound-inches. Converting from N·m to lb·in requires multiplying the metric value by 8.850746.",
    "This reference guide presents the exact mathematical conversion formula, provides worked examples for delicate composite and electrical assemblies, offers a comprehensive reference table, and clarifies proper tool selection to prevent thread damage."
  ],
  quickAnswer: {
    text: "To convert Newton-meters to pound-inches, multiply the torque value by 8.850746 (or divide by 0.112985). For instance, a carbon bicycle stem bolt specified at 5 N·m converts to 44.25 lb·in (inch-pounds).",
    formulaDisplay: "\\text{lb·in} = \\text{N·m} \\times 8.850746",
    subtext: "1 Newton-meter equals exactly 8.85074579 pound-inches (in-lb)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Meter (N·m)",
    text: "The Newton-meter (symbol: N·m) is the standard derived SI unit of torque. It quantifies the turning moment resulting from one Newton of force applied at a right angle to a moment arm of one meter (1 N·m = 1 N × 1 m). For small components, fractions of a Newton-meter (or 1 to 10 N·m) are standard for M3 through M8 fasteners across robotics, automotive sensors, and electronics."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in-lb) is a US customary unit of torque. It represents the rotational force produced by one pound-force exerted at a radial distance of one inch (1 lb·in = 1 lbf × 1 in = 1/12 lb·ft). It is the standard unit for low-range torque screwdrivers and precision click wrenches used in telecommunications, gunsmithing, aerospace wiring, and composite assembly."
  },
  relationship: "Because there are 12 inches in a foot and 1 lb·ft equals 1.3558179483 N·m, the conversion factor is exactly: 1 lb·in = 1.3558179483 / 12 = 0.1129848290276 N·m. Inverting this factor reveals that 1 N·m = 1 / 0.1129848290276 ≈ 8.85074579 lb·in.",
  relationshipTitle: "Low-Torque Precision Scale (N·m vs lb·in)",
  relationshipItems: [
    { label: "0.5 N·m", value: "4.43 lb·in (Smartphone casing & circuit board M2 screws)" },
    { label: "1.0 N·m", value: "8.85 lb·in (Rifle scope ring screws & plastic electrical terminals)" },
    { label: "5.0 N·m", value: "44.25 lb·in (Carbon fiber bicycle handlebars & M5 faceplate bolts)" },
    { label: "10 N·m", value: "88.51 lb·in (Automotive plastic intake manifold & valve cover studs)" },
    { label: "20 N·m", value: "177.01 lb·in (Small engine oil drain plug & coolant water pump bolts)" }
  ],
  formula: {
    text: "Multiply the torque in Newton-meters by the factor 8.8507458 to obtain the torque in pound-inches.",
    math: "\\tau_{(\\text{lb·in})} = \\tau_{(\\text{N·m})} \\times 8.8507458",
    subtext: "Alternatively: Divide the Newton-meter value by 0.11298483."
  },
  formulaTitle: "N·m to lb·in Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Tip",
    text: "To approximate N·m to lb·in mentally: multiply by 9, then subtract 1.5% from the result (e.g., 6 N·m × 9 = 54; 54 - 0.8 ≈ 53.2 lb·in; exact is 53.10 lb·in)."
  },
  expertNote: {
    title: "Never Use a 1/2-Inch Drive Wrench for Inch-Pound Fasteners",
    text: "Most 1/2-inch drive torque wrenches have an operating range starting at 20–30 lb·ft (240–360 lb·in). Attempting to torque a 5 N·m (44.25 lb·in) bolt with a heavy foot-pound wrench will almost invariably strip the threads or fracture composite materials before the wrench clicks."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Carbon Fiber Bicycle Seatpost Clamp",
        subtitle: "A bicycle frame manual indicates a max torque limit of 6.2 N·m for the seatpost clamp. Convert to lb·in.",
        steps: [
          "Identify initial metric torque: 6.2 N·m.",
          "Multiply by conversion factor: lb·in = 6.2 × 8.8507458.",
          "Calculate: 6.2 × 8.8507458 = 54.8746.",
          "Final Result: 6.2 N·m converts to 54.87 lb·in (or approx 55 in-lb)."
        ]
      },
      {
        title: "Example 2: Scope Ring Mount on a Precision Rifle",
        subtitle: "Optics manufacturer recommends 1.8 N·m on Torx T15 ring screws. Determine the inch-pound driver setting.",
        steps: [
          "Starting value: 1.8 N·m.",
          "Apply formula: 1.8 × 8.8507458 = 15.9313.",
          "Final Result: 1.8 N·m corresponds to 15.93 lb·in (set precision driver to 16 in-lb)."
        ]
      },
      {
        title: "Example 3: Automotive Transmission Valve Body",
        subtitle: "Convert a transmission solenoid valve bolt spec of 11 N·m into pound-inches.",
        steps: [
          "Starting value: 11 N·m.",
          "Multiply by 8.8507458: 11 × 8.8507458 = 97.3582.",
          "Final Result: 11 N·m equals approximately 97.36 lb·in."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Meter to Pound-Inch Precision Reference Table",
    headers: ["Newton-Meters (N·m)", "Pound-Inches (lb·in / in-lb)", "Practical Low-Torque Application"],
    rows: [
      { fromVal: "0.5 N·m", toVal: "4.43 lb·in", extra: "Micro-electronics M2 screws in laptops & drones" },
      { fromVal: "1.0 N·m", toVal: "8.85 lb·in", extra: "Plastic casing fasteners & electrical contact lugs" },
      { fromVal: "2.0 N·m", toVal: "17.70 lb·in", extra: "Rifle optic base mounting screws (Weaver/Picatinny)" },
      { fromVal: "3.0 N·m", toVal: "26.55 lb·in", extra: "Bicycle shifter and brake lever clamp bolts" },
      { fromVal: "4.0 N·m", toVal: "35.40 lb·in", extra: "Bicycle stem 4-bolt faceplate hardware" },
      { fromVal: "5.0 N·m", toVal: "44.25 lb·in", extra: "Standard carbon component maximum safety limit" },
      { fromVal: "6.0 N·m", toVal: "53.10 lb·in", extra: "Bicycle seatpost collar & derailleur cable clamp" },
      { fromVal: "8.0 N·m", toVal: "70.81 lb·in", extra: "Motorcycle plastic fairing & reservoir clamp bolts" },
      { fromVal: "10 N·m", toVal: "88.51 lb·in", extra: "Automotive engine valve cover M6 perimeter bolts" },
      { fromVal: "12 N·m", toVal: "106.21 lb·in", extra: "Thermostat housing & water outlet gasket bolts" },
      { fromVal: "15 N·m", toVal: "132.76 lb·in", extra: "Oil pan gasket M6 perimeter flange bolts" },
      { fromVal: "20 N·m", toVal: "177.01 lb·in", extra: "Spark plugs in aluminum heads (14.75 lb·ft)" },
      { fromVal: "25 N·m", toVal: "221.27 lb·in", extra: "Upper transition range to foot-pound wrenches (18.44 lb·ft)" }
    ]
  },
  applications: {
    title: "Primary Industry & Trade Uses",
    items: [
      {
        title: "Bicycle Mechanics & Carbon Fiber Components",
        text: "Modern road and mountain bicycles utilize lightweight carbon fiber frames and cockpits that require strict torque ceilings between 4 and 7 N·m (35 to 62 lb·in) to prevent catastrophic carbon delamination."
      },
      {
        title: "Firearm Gunsmithing & Optics Mounting",
        text: "Rifle scopes, red dot sights, and Picatinny rails require precise clamping torque in inch-pounds (typically 15–25 lb·in) to maintain zero under recoil without crushing delicate optical tubes."
      },
      {
        title: "Aerospace Avionics & Wire Harness Clamps",
        text: "Aviation maintenance technicians follow structural blueprints requiring inch-pound calibrated torque screwdrivers for electrical junction blocks, terminal strips, and composite fairing screws."
      },
      {
        title: "Electronics & Medical Device Assembly",
        text: "Automated torque screwdrivers in medical manufacturing ensure fluidic manifolds and implantable casing screws are torqued within tight tolerances (0.2–1.5 N·m / 2–13 lb·in)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Working with Pound-Inches",
    items: [
      "Confusing lb·in with lb·ft: 1 lb·ft = 12 lb·in. Setting 50 lb·ft on a bolt requiring 50 lb·in will deliver 600 lb·in (67.8 N·m), shearing the bolt instantly.",
      "Using the Wrong Torque Wrench Range: Torque wrenches are most accurate between 20% and 100% of their full scale. Do not use a 200 lb·in wrench to measure a 5 lb·in fastener.",
      "Overlooking Thread Pitch and Fastener Grade: A grade 8.8 M6 bolt and a grade 12.9 M6 bolt have vastly different yield limits; always consult the specific engineering drawing.",
      "Failure to Re-Zero Calibration: Leaving mechanical spring-type inch-pound torque wrenches under tension will fatigue the internal spring and ruin calibration accuracy."
    ]
  },
  faqs: [
    {
      question: "How do I convert Newton-meters to pound-inches?",
      answer: "Multiply the Newton-meter (N·m) value by 8.850746. For example, 5 N·m × 8.850746 = 44.25 lb·in (inch-pounds)."
    },
    {
      question: "Is pound-inch the same as inch-pound?",
      answer: "Yes, 'pound-inch' (lb·in) and 'inch-pound' (in-lb) refer to the same physical unit of rotational torque. Engineering standards prefer lb·in, but tool manufacturers and mechanics frequently use in-lb."
    },
    {
      question: "What is 5 N·m in inch-pounds?",
      answer: "5 N·m equals approximately 44.25 lb·in (in-lb). This is one of the most common torque settings for bicycle handlebar stems and seat collars."
    },
    {
      question: "How many inch-pounds are in 1 foot-pound?",
      answer: "There are exactly 12 inch-pounds in 1 foot-pound (1 lb·ft = 12 lb·in = 1.35582 N·m)."
    },
    {
      question: "What is 10 N·m in lb·in?",
      answer: "10 N·m equals approximately 88.51 lb·in (10 × 8.850746 = 88.5075 lb·in)."
    },
    {
      question: "Why do small fasteners specify torque in lb·in instead of lb·ft?",
      answer: "Small fasteners (under 8mm or 5/16-inch diameter) require low torque values that would register as small decimals in foot-pounds (e.g., 30 lb·in = 2.5 lb·ft). Using pound-inches gives whole numbers for finer adjustment on precision torque screwdrivers."
    },
    {
      question: "What tool should I use for torque measurements under 10 N·m?",
      answer: "Use a 1/4-inch drive precision torque screwdriver or a low-range 1/4-inch click-type torque wrench calibrated specifically in lb·in (or 1–10 N·m)."
    },
    {
      question: "How do I convert 15 in-lb to N·m?",
      answer: "To convert in-lb to N·m, divide by 8.850746 (or multiply by 0.112985): 15 in-lb ÷ 8.850746 = 1.69 N·m."
    }
  ],
  relatedList: [
    { label: "Pound-Inch to Newton-Meter", from: "pound-inch", to: "newton-meter" },
    { label: "Newton-Meter to Pound-Foot", from: "newton-meter", to: "pound-foot" },
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" },
    { label: "Newton-Meter to Newton-Centimeter", from: "newton-meter", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Foot to Pound-Inch Conversion Guide",
      description: "Step-by-step conversion factors, torque driver calculations, and fastener tightening rules.",
      from: "pound-foot",
      to: "pound-inch"
    },
    {
      title: "Newton-Meter to Pound-Foot Conversion Guide",
      description: "Convert heavy automotive and structural fastener torque ratings from metric to imperial.",
      from: "newton-meter",
      to: "pound-foot"
    }
  ],
  references: [
    "ASME B107.300: Torque Instruments and Calibration Verification",
    "ISO 6789: Assembly Tools for Screws and Nuts — Hand Torque Tools",
    "SAE J2270: Applications for Threaded Fasteners in Fluid Power Systems",
    "NIST Handbook 44: Specifications and Tolerances for Measuring Devices"
  ]
};
