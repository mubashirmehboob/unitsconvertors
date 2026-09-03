import { CustomArticleData } from "./types";

export const poundInchToPoundFoot: CustomArticleData = {
  fromUnitId: "pound-inch",
  toUnitId: "pound-foot",
  seoTitle: "Pound-Inch to Pound-Foot Converter (lb·in to lb·ft)",
  metaDescription: "Convert pound-inches to pound-feet (lb·in to lb·ft) with exact 1/12 math, wrench conversion tables, step-by-step automotive examples, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/pound-inch-to-pound-foot",
  h1: "Pound-Inch to Pound-Foot Converter",
  introduction: [
    "The pound-inch (symbol: lb·in, also referred to as in-lb or inch-pound) and the pound-foot (symbol: lb·ft, frequently called ft-lb or foot-pound) are the two primary units of torque and rotational moment utilized in imperial and US customary engineering. Both units share the pound-force as their unit of load, differing solely in the length of the moment arm applied to the rotational center.",
    "Because there are exactly 12 inches in an international foot, the relationship between these two units is mathematically exact: 1 pound-foot equals precisely 12 pound-inches, and 1 pound-inch equals exactly one-twelfth (1/12 ≈ 0.0833333) of a pound-foot. Converting from pound-inches to pound-feet requires dividing the inch-pound figure by 12.",
    "This guide explains the physical distinction between the two units, provides simple mental math techniques, details worked examples across automotive and structural trades, and highlights critical safety rules to prevent catastrophic over-torquing on small fasteners."
  ],
  quickAnswer: {
    text: "To convert pound-inches to pound-feet, divide the pound-inch value by 12 (or multiply by 0.083333). For instance, 120 lb·in divided by 12 equals exactly 10 lb·ft.",
    formulaDisplay: "\\text{lb·ft} = \\frac{\\text{lb·in}}{12}",
    subtext: "1 pound-foot equals exactly 12 pound-inches (in-lb). 1 pound-inch equals 0.083333 pound-feet."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in-lb) is an imperial unit of torque representing the rotational moment of one pound-force applied perpendicularly at a radius of one inch. It is the industry standard measurement for light-duty fasteners, small mechanical linkages, aluminum motorcycle crankcases, bicycle components, and firearm actions where subtle torque adjustments are necessary."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or ft-lb) is the fundamental imperial unit of torque representing one pound-force applied at a radius of one foot (12 inches). It is universally employed across North American heavy industry, automotive repair, civil engineering, and equipment maintenance to quantify engine torque output, chassis fastener specifications, and structural steel bolt tensions."
  },
  relationship: "The relationship between pound-inches and pound-feet is rooted in the linear measurement conversion between feet and inches: 1 foot equals 12 inches. Applying a force of 1 lbf at a distance of 1 foot produces 1 lb·ft. Moving that force to a 1-inch radius produces only 1/12 of that turning moment. Therefore, 1 lb·ft = 12 lb·in, and 1 lb·in = 1/12 lb·ft ≈ 0.0833333 lb·ft.",
  relationshipTitle: "Torque Range Transition Scale (lb·in to lb·ft)",
  relationshipItems: [
    { label: "12 lb·in", value: "1.00 lb·ft (Direct unit definition equivalency)" },
    { label: "36 lb·in", value: "3.00 lb·ft (Light mechanical linkages & intake clamps)" },
    { label: "60 lb·in", value: "5.00 lb·ft (Small aluminum engine covers & oil pan corners)" },
    { label: "120 lb·in", value: "10.00 lb·ft (Valve cover perimeter bolts & thermostat housings)" },
    { label: "180 lb·in", value: "15.00 lb·ft (Small engine spark plugs & water pump pulleys)" },
    { label: "240 lb·in", value: "20.00 lb·ft (Lower threshold for standard 3/8-inch foot-pound wrenches)" },
    { label: "360 lb·in", value: "30.00 lb·ft (Brake caliper bracket bolts & front hub hardware)" }
  ],
  formula: {
    text: "Divide the torque value in pound-inches by 12 to determine the torque in pound-feet.",
    math: "\\tau_{(\\text{lb·ft})} = \\frac{\\tau_{(\\text{lb·in})}}{12}",
    subtext: "Alternatively: Multiply the pound-inch value by 0.0833333."
  },
  formulaTitle: "Pound-Inch to Pound-Foot Conversion Formula",
  practicalTip: {
    title: "Simple Mental Division by 12",
    text: "To divide by 12 in your head, divide by 6 first, then divide the result in half. For example: 84 lb·in / 6 = 14; 14 / 2 = 7 lb·ft."
  },
  expertNote: {
    title: "Tool Selection Threshold (20 Foot-Pounds)",
    text: "Standard 3/8-inch and 1/2-inch drive click-type torque wrenches lose significant accuracy below 15–20 lb·ft (180–240 lb·in). When tightening fasteners with torque ratings below 20 lb·ft, always use a dedicated 1/4-inch drive or 3/8-inch drive torque wrench calibrated in pound-inches."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Engine Valve Cover",
        subtitle: "A service manual specifies 84 lb·in for the perimeter bolts on a cylinder head cover. Determine the setting in lb·ft.",
        steps: [
          "State the initial torque: 84 lb·in.",
          "Apply the division formula: lb·ft = 84 / 12.",
          "Execute the calculation: 84 / 12 = 7.",
          "Final Result: 84 lb·in equals exactly 7.0 lb·ft."
        ]
      },
      {
        title: "Example 2: Transmission Oil Pan Fasteners",
        subtitle: "A workshop bulletin calls for 132 in-lb on an automatic transmission oil pan flange. Convert this to foot-pounds.",
        steps: [
          "Starting value: 132 lb·in.",
          "Divide by 12: 132 / 12 = 11.",
          "Final Result: 132 in-lb equals exactly 11.0 lb·ft."
        ]
      },
      {
        title: "Example 3: Small Aluminum Water Pump Housing",
        subtitle: "Convert a torque spec of 216 lb·in into pound-feet for an engine cooling system repair.",
        steps: [
          "Starting value: 216 lb·in.",
          "Divide by 12: 216 / 12 = 18.",
          "Final Result: 216 lb·in equals exactly 18.0 lb·ft."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Inch to Pound-Foot Reference Chart",
    headers: ["Pound-Inches (lb·in / in-lb)", "Pound-Feet (lb·ft / ft-lb)", "Newton-Meter Equivalent", "Typical Automotive & Mechanical Application"],
    rows: [
      { fromVal: "12 lb·in", toVal: "1.00 lb·ft", extra: "1.36 N·m", extra2: "Instrument cluster & dashboard fasteners" },
      { fromVal: "24 lb·in", toVal: "2.00 lb·ft", extra: "2.71 N·m", extra2: "Small electrical terminal box studs" },
      { fromVal: "36 lb·in", toVal: "3.00 lb·ft", extra: "4.07 N·m", extra2: "Air filter housing clamp bolts" },
      { fromVal: "48 lb·in", toVal: "4.00 lb·ft", extra: "5.42 N·m", extra2: "Bicycle seatpost clamp hardware" },
      { fromVal: "60 lb·in", toVal: "5.00 lb·ft", extra: "6.78 N·m", extra2: "Motorcycle plastic fairing & cowl screws" },
      { fromVal: "72 lb·in", toVal: "6.00 lb·ft", extra: "8.13 N·m", extra2: "Carburetor body to intake manifold bolts" },
      { fromVal: "84 lb·in", toVal: "7.00 lb·ft", extra: "9.49 N·m", extra2: "Valve cover perimeter bolts (stamped steel)" },
      { fromVal: "96 lb·in", toVal: "8.00 lb·ft", extra: "10.85 N·m", extra2: "Engine oil pickup tube flange bolt" },
      { fromVal: "108 lb·in", toVal: "9.00 lb·ft", extra: "12.20 N·m", extra2: "Automatic transmission pan bolts" },
      { fromVal: "120 lb·in", toVal: "10.00 lb·ft", extra: "13.56 N·m", extra2: "Engine thermostat housing flange bolts" },
      { fromVal: "144 lb·in", toVal: "12.00 lb·ft", extra: "16.27 N·m", extra2: "Engine water pump housing mounting bolts" },
      { fromVal: "180 lb·in", toVal: "15.00 lb·ft", extra: "20.34 N·m", extra2: "Spark plugs in aluminum cylinder heads" },
      { fromVal: "240 lb·in", toVal: "20.00 lb·ft", extra: "27.12 N·m", extra2: "Intake manifold upper plenum bolts" },
      { fromVal: "300 lb·in", toVal: "25.00 lb·ft", extra: "33.90 N·m", extra2: "Oil drain plug in cast aluminum oil pan" },
      { fromVal: "360 lb·in", toVal: "30.00 lb·ft", extra: "40.67 N·m", extra2: "Brake caliper guide pin bolts" }
    ]
  },
  applications: {
    title: "Common Trade & Workshop Applications",
    items: [
      {
        title: "Automotive Engine & Transmission Rebuilding",
        text: "Automotive service manuals alternate between pound-inches and pound-feet depending on fastener diameter. Mechanics convert between the two scales when transitioning from perimeter gasket hardware (70–120 lb·in) to internal drivetrain fasteners."
      },
      {
        title: "Aircraft General Aviation Maintenance",
        text: "FAA and military technical orders frequently express structural fairing and electrical terminal torque in pound-inches. Certified technicians convert to pound-feet when verifying dual-scale ground calibration standards."
      },
      {
        title: "Motorcycle & Powersports Engine Repair",
        text: "Dirt bikes and motorcycles utilize lightweight magnesium and aluminum cases. Crankcase cover screws and clutch spring retainers are designated in pound-inches (or low pound-feet) to prevent stripped threads in soft alloys."
      },
      {
        title: "HVAC & Commercial Refrigeration Equipment",
        text: "Compressor terminal plates, refrigerant line service valves, and fan motor mounts demand accurate torque conversion to ensure hermetic seals without warping copper flanged fittings."
      }
    ]
  },
  pitfalls: {
    title: "Critical Torque Conversion Errors",
    items: [
      "Multiplying instead of dividing: Dividing 120 lb·in by 12 yields 10 lb·ft. Accidentally multiplying 120 by 12 produces 1,440 lb·ft, an enormous mathematical error that causes complete confusion.",
      "Attempting to set 5 lb·ft on a heavy 1/2-inch drive wrench: Most 1/2-inch wrenches start at 25 or 30 lb·ft and cannot measure low values. Always use an inch-pound wrench for values under 15–20 lb·ft.",
      "Confusing ft-lb (energy) with lb·ft (torque): While mathematically equivalent in dimensions, foot-pounds technically measure mechanical work or energy, whereas pound-feet represents rotational moment.",
      "Applying dry torque to lubricated bolts: Thread anti-seize or motor oil reduces thread friction, meaning a fastener tightened to 10 lb·ft wet will develop the bolt tension of roughly 14–15 lb·ft dry."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-inches to pound-feet?",
      answer: "Divide the pound-inch value by 12. For example, 120 lb·in / 12 = 10 lb·ft. Alternatively, multiply the pound-inch value by 0.083333."
    },
    {
      question: "Is inch-pound to foot-pound the same conversion?",
      answer: "Yes. 'Inch-pound' (in-lb) to 'foot-pound' (ft-lb) is identical to pound-inch (lb·in) to pound-foot (lb·ft). Dividing by 12 gives the correct result."
    },
    {
      question: "What is 72 inch-pounds in foot-pounds?",
      answer: "72 inch-pounds equals exactly 6 foot-pounds (72 / 12 = 6 lb·ft)."
    },
    {
      question: "How many foot-pounds is 100 in-lb?",
      answer: "100 inch-pounds equals 8.33 foot-pounds (100 / 12 = 8.333 lb·ft)."
    },
    {
      question: "Can I convert 15 ft-lb to inch-pounds?",
      answer: "Yes, multiply the foot-pound value by 12: 15 lb·ft × 12 = 180 lb·in."
    },
    {
      question: "Why are some torque specs written in in-lb instead of ft-lb?",
      answer: "Small bolts requiring under 15 to 20 lb·ft are written in in-lb so mechanics can read whole numbers on precision 1/4-inch drive torque wrenches rather than struggling with tiny fractions or decimals."
    },
    {
      question: "What is 150 inch-pounds in foot-pounds?",
      answer: "150 inch-pounds equals 12.5 foot-pounds (150 / 12 = 12.5 lb·ft)."
    },
    {
      question: "What tool should I use for torque below 15 lb·ft?",
      answer: "Use a dedicated 1/4-inch or 3/8-inch drive torque wrench calibrated in inch-pounds (such as a 20–200 in-lb or 20–250 in-lb wrench) for maximum precision."
    }
  ],
  relatedList: [
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" },
    { label: "Pound-Inch to Newton-Meter", from: "pound-inch", to: "newton-meter" },
    { label: "Pound-Foot to Newton-Meter", from: "pound-foot", to: "newton-meter" },
    { label: "Pound-Inch to Kilogram-Force Meter", from: "pound-inch", to: "kilogram-force-meter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Foot to Pound-Inch Conversion Guide",
      description: "Step-by-step guidance on multiplying foot-pounds by 12 for small fastener torque wrenches.",
      from: "pound-foot",
      to: "pound-inch"
    },
    {
      title: "Pound-Inch to Newton-Meter Conversion Guide",
      description: "Convert precision imperial torque specifications into standard metric Newton-meters.",
      from: "pound-inch",
      to: "newton-meter"
    }
  ],
  references: [
    "ASME B107.300: Torque Instruments and Fastener Standards",
    "ISO 6789: Hand Torque Tools — Requirements and Test Methods",
    "SAE J429: Mechanical and Material Requirements for Externally Threaded Fasteners",
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices"
  ]
};
