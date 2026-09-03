import { CustomArticleData } from "./types";

export const kilogramForceMeterToPoundFoot: CustomArticleData = {
  fromUnitId: "kilogram-force-meter",
  toUnitId: "pound-foot",
  seoTitle: "Kilogram-Force Meter to Pound-Foot Converter (kgf·m to lb·ft)",
  metaDescription: "Convert kilogram-force meters to pound-feet (kgf·m to lb·ft) accurately. Exact 7.23301 factor, automotive chassis and engine torque charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-force-meter-to-pound-foot",
  h1: "Kilogram-Force Meter to Pound-Foot Converter",
  introduction: [
    "The kilogram-force meter (symbol: kgf·m, often documented as m·kg) and the pound-foot (symbol: lb·ft, colloquially termed foot-pound or ft-lb) represent two widely utilized industrial torque measurements. The kilogram-force meter is the historical gravitational metric standard prevalent across Japanese (JIS), European, and Latin American heavy industries, while the pound-foot is the dominant imperial unit used across North American automotive, aerospace, and construction sectors.",
    "Converting kilogram-force meters to pound-feet is essential when servicing imported Asian vehicles, industrial diesel generators, or vintage European machinery with American tools. Because 1 kilogram-force equals approximately 2.20462 pounds-force and 1 meter equals 3.28084 feet, multiplying these components establishes that 1 kilogram-force meter equals approximately 7.233014 pound-feet. Inversely, 1 pound-foot equals approximately 0.138255 kilogram-force meters.",
    "This technical guide explains the mathematical conversion derivation, provides clear manual calculation steps, details realistic automotive and heavy equipment worked examples, includes a high-precision reference table, and outlines essential workshop calibration practices."
  ],
  quickAnswer: {
    text: "To convert kilogram-force meters to pound-feet, multiply the torque value by 7.233014 (or divide by 0.138255). For example, an automotive wheel lug nut specification of 10.5 kgf·m converts to approximately 75.95 lb·ft.",
    formulaDisplay: "\\text{lb·ft} = \\text{kgf·m} \\times 7.233014",
    subtext: "1 kilogram-force meter equals approximately 7.233014 pound-feet (ft-lb). 1 lb·ft equals 0.138255 kgf·m."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram-Force Meter (kgf·m)",
    text: "The kilogram-force meter (symbol: kgf·m or m·kg) is a metric gravitational unit of torque. It represents the rotational force produced when a mass of one kilogram is accelerated by standard gravity (9.80665 m/s²) acting at a perpendicular distance of one meter (1 kgf·m = 9.80665 N·m). It remains prominent in vintage and legacy Japanese, German, and Russian machinery manuals."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or ft-lb) is an imperial unit of torque defined as the turning moment resulting from one pound-force applied perpendicularly at a lever arm of one foot (1 lb·ft = 1.355818 N·m). It is the standard unit for engine torque output ratings, suspension hardware, and structural steel connections across the United States and Canada."
  },
  relationship: "The relationship between kilogram-force meters and pound-feet is derived from force and distance conversions. 1 kgf = 4.448222 / 9.80665 inverse = 2.2046226 lbf. 1 meter = 3.2808399 feet. Multiplying these quantities: 1 kgf·m = 2.2046226 lbf × 3.2808399 ft = 7.23301385 lb·ft. Dividing 1 by 7.233014 yields the inverse factor: 1 lb·ft = 0.13825495 kgf·m.",
  relationshipTitle: "Heavy Fastener & Drivetrain Scale (kgf·m to lb·ft)",
  relationshipItems: [
    { label: "1.0 kgf·m", value: "7.23 lb·ft (Small perimeter valve cover studs)" },
    { label: "5.0 kgf·m", value: "36.17 lb·ft (Brake caliper mounting bolts & spark plugs)" },
    { label: "10.0 kgf·m", value: "72.33 lb·ft (Standard passenger car wheel lug nuts)" },
    { label: "15.0 kgf·m", value: "108.50 lb·ft (Light truck wheel nuts & suspension arms)" },
    { label: "20.0 kgf·m", value: "144.66 lb·ft (Crankshaft main bearing cap bolts)" },
    { label: "30.0 kgf·m", value: "216.99 lb·ft (Crankshaft damper pulley bolt)" },
    { label: "50.0 kgf·m", value: "361.65 lb·ft (Commercial semi-truck axle spindle nut)" }
  ],
  formula: {
    text: "Multiply the torque value in kilogram-force meters by 7.233014 to calculate the torque in pound-feet.",
    math: "\\tau_{(\\text{lb·ft})} = \\tau_{(\\text{kgf·m})} \\times 7.233014",
    subtext: "Alternatively: Divide the kilogram-force meter value by 0.138255."
  },
  formulaTitle: "Kilogram-Force Meter to Pound-Foot Conversion Formula",
  practicalTip: {
    title: "Quick 7x Mental Estimation",
    text: "For quick approximations on the shop floor, multiply the kgf·m value by 7 and add roughly 3% (e.g., 10 kgf·m × 7 = 70; 70 + 2 = 72 lb·ft; exact is 72.33 lb·ft)."
  },
  expertNote: {
    title: "Torque Wrench Drive Size Guidelines",
    text: "When converting kgf·m to lb·ft, match the resulting torque to the appropriate drive size: use 3/8-inch drive wrenches for 10–75 lb·ft (1.4–10.4 kgf·m), and 1/2-inch drive wrenches for 50–250 lb·ft (6.9–34.5 kgf·m) to maintain tool accuracy within the middle 20%–100% of scale."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Toyota Wheel Lug Nut Specification",
        subtitle: "A classic Toyota Land Cruiser manual specifies a wheel lug nut torque of 11.5 kgf·m. Determine the correct setting on a foot-pound torque wrench.",
        steps: [
          "State the initial torque: 11.5 kgf·m.",
          "Apply the formula: lb·ft = 11.5 × 7.233014.",
          "Execute the calculation: 11.5 × 7.233014 = 83.17966 lb·ft.",
          "Round to common workshop setting: 83 lb·ft."
        ]
      },
      {
        title: "Example 2: Cylinder Head Bolts on a Diesel Engine",
        subtitle: "A marine diesel service manual indicates a final head bolt torque pass of 18.0 kgf·m. Convert this to pound-feet.",
        steps: [
          "Starting value: 18.0 kgf·m.",
          "Multiply by 7.233014: 18.0 × 7.233014 = 130.19425 lb·ft.",
          "Final Result: 18.0 kgf·m equals approximately 130.2 lb·ft (set torque wrench to 130 ft-lb)."
        ]
      },
      {
        title: "Example 3: Motorcycle Swingarm Pivot Shaft",
        subtitle: "Convert a swingarm nut torque specification of 8.2 kgf·m into pound-feet.",
        steps: [
          "Starting value: 8.2 kgf·m.",
          "Multiply by 7.233014: 8.2 × 7.233014 = 59.3107 lb·ft.",
          "Final Result: 8.2 kgf·m corresponds to 59.3 lb·ft."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram-Force Meter to Pound-Foot Reference Chart",
    headers: ["Kilogram-Force Meters (kgf·m)", "Pound-Feet (lb·ft / ft-lb)", "Newton-Meter (N·m)", "Practical Mechanical Application"],
    rows: [
      { fromVal: "1.0 kgf·m", toVal: "7.23 lb·ft", extra: "9.81 N·m", extra2: "Valve cover flange bolts" },
      { fromVal: "2.0 kgf·m", toVal: "14.47 lb·ft", extra: "19.61 N·m", extra2: "Engine thermostat housing" },
      { fromVal: "3.0 kgf·m", toVal: "21.70 lb·ft", extra: "29.42 N·m", extra2: "Engine oil drain plug & spark plugs" },
      { fromVal: "4.0 kgf·m", toVal: "28.93 lb·ft", extra: "39.23 N·m", extra2: "Brake caliper bracket bolts" },
      { fromVal: "5.0 kgf·m", toVal: "36.17 lb·ft", extra: "49.03 N·m", extra2: "Transmission bellhousing bolts" },
      { fromVal: "6.0 kgf·m", toVal: "43.40 lb·ft", extra: "58.84 N·m", extra2: "Engine motor mount bolts" },
      { fromVal: "7.0 kgf·m", toVal: "50.63 lb·ft", extra: "68.65 N·m", extra2: "Suspension ball joint castle nuts" },
      { fromVal: "8.0 kgf·m", toVal: "57.86 lb·ft", extra: "78.45 N·m", extra2: "Driveshaft U-joint flange bolts" },
      { fromVal: "9.0 kgf·m", toVal: "65.10 lb·ft", extra: "88.26 N·m", extra2: "Connecting rod bearing cap bolts" },
      { fromVal: "10.0 kgf·m", toVal: "72.33 lb·ft", extra: "98.07 N·m", extra2: "Standard passenger car wheel lug nuts" },
      { fromVal: "12.0 kgf·m", toVal: "86.80 lb·ft", extra: "117.68 N·m", extra2: "SUV wheel lug nuts (M14 studs)" },
      { fromVal: "15.0 kgf·m", toVal: "108.50 lb·ft", extra: "147.10 N·m", extra2: "Cylinder head bolts (intermediate pass)" },
      { fromVal: "20.0 kgf·m", toVal: "144.66 lb·ft", extra: "196.13 N·m", extra2: "Engine crankshaft main bearing caps" },
      { fromVal: "25.0 kgf·m", toVal: "180.83 lb·ft", extra: "245.17 N·m", extra2: "Front wheel hub spindle lock nut" },
      { fromVal: "30.0 kgf·m", toVal: "216.99 lb·ft", extra: "294.20 N·m", extra2: "Crankshaft harmonic damper bolt" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Japanese Domestic Market (JDM) Car Servicing",
        text: "Importers and tuners of vintage Japanese sports cars (Nissan Skyline, Toyota Supra, Mazda RX-7) work directly with original Japanese factory service manuals that specify torque exclusively in kgf·m. Converting to pound-feet enables accurate use of American click-type torque wrenches."
      },
      {
        title: "Commercial Heavy Equipment & Excavators",
        text: "Excavator slew ring bearings, boom pivot pins, and hydraulic pump mounting flanges on Komatsu and Kobelco machinery list torque in kgf·m on maintenance plates."
      },
      {
        title: "Agricultural Tractor Overhaul",
        text: "Kubota and Yanmar diesel engine tractors utilize kgf·m on cylinder heads and flywheel bolts. Technicians convert to pound-feet during in-chassis rebuilds."
      },
      {
        title: "Vintage Motorcycle Restoration",
        text: "Restorers of classic Honda, Kawasaki, Suzuki, and Yamaha street bikes convert kgf·m ratings on triple clamps, axles, and cylinder studs to foot-pounds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kgf·m to lb·ft",
    items: [
      "Confusing pound-feet with pound-inches: 1 kgf·m equals 7.23 lb·ft, but 86.8 lb·in. Setting an inch-pound wrench to 7.2 will leave the bolt dangerously loose, while setting a foot-pound wrench to 86.8 will snap the fastener.",
      "Using the 9.81 N·m factor by mistake: Multiplying by 9.81 converts kgf·m to Newton-meters, not pound-feet. Setting 98 on a foot-pound wrench for a 10 kgf·m bolt over-torques it by 35% (98 lb·ft vs 72.3 lb·ft).",
      "Ignoring torque wrench calibration limits: Click wrenches are inaccurate in the bottom 20% of their scale. Never use a 250 lb·ft wrench to measure a 20 lb·ft fastener.",
      "Overlooking thread lubrication conditions: Factory kgf·m specifications frequently stipulate engine oil on head bolt threads; dry assembly creates insufficient clamping tension."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilogram-force meters to pound-feet?",
      answer: "Multiply the kilogram-force meter value by 7.233014 (or divide by 0.138255). For example, 10 kgf·m × 7.233014 = 72.33 lb·ft."
    },
    {
      question: "Is kg·m the same as kgf·m?",
      answer: "Yes. In workshop literature, 'kg·m', 'm·kg', and 'kgf·m' all refer to kilogram-force meters."
    },
    {
      question: "What is 10 kgf·m in foot-pounds?",
      answer: "10 kgf·m equals approximately 72.33 lb·ft (ft-lb). This is the standard wheel lug nut torque for passenger cars."
    },
    {
      question: "How many foot-pounds are in 1 kgf·m?",
      answer: "There are approximately 7.233014 foot-pounds in one kilogram-force meter."
    },
    {
      question: "What is 5 kgf·m in lb·ft?",
      answer: "5 kgf·m equals approximately 36.17 lb·ft (5 × 7.233014 = 36.165 lb·ft)."
    },
    {
      question: "How do I convert pound-feet back to kilogram-force meters?",
      answer: "Multiply the pound-foot value by 0.138255 (or divide by 7.233014). For example, 100 lb·ft × 0.138255 = 13.83 kgf·m."
    },
    {
      question: "Why do Japanese manuals use kgf·m?",
      answer: "Japan historically followed the technical gravitational metric system based on the kilogram-force under standard Earth gravity before gradually transitioning to the SI Newton-meter."
    },
    {
      question: "What is the difference between ft-lb and lb·ft?",
      answer: "While often used interchangeably in workshops, 'lb·ft' (pound-foot) is the formal engineering unit for rotational torque, whereas 'ft-lb' (foot-pound) is the unit of mechanical work or energy."
    }
  ],
  relatedList: [
    { label: "Pound-Foot to Kilogram-Force Meter", from: "pound-foot", to: "kilogram-force-meter" },
    { label: "Kilogram-Force Meter to Newton-Meter", from: "kilogram-force-meter", to: "newton-meter" },
    { label: "Kilogram-Force Meter to Pound-Inch", from: "kilogram-force-meter", to: "pound-inch" },
    { label: "Pound-Foot to Newton-Meter", from: "pound-foot", to: "newton-meter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Foot to Kilogram-Force Meter Conversion Guide",
      description: "Step-by-step conversion factors from imperial foot-pounds to metric gravitational torque units.",
      from: "pound-foot",
      to: "kilogram-force-meter"
    },
    {
      title: "Kilogram-Force Meter to Newton-Meter Conversion Guide",
      description: "Convert legacy gravitational metric torque ratings to modern international SI Newton-meters.",
      from: "kilogram-force-meter",
      to: "newton-meter"
    }
  ],
  references: [
    "JIS B 0101: Screw Threads and Fasteners — Vocabulary and Torque Standards",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "ASME B107.300: Manual Torque Instruments and Calibration Verification",
    "SAE J429: Mechanical and Material Requirements for Externally Threaded Fasteners"
  ]
};
