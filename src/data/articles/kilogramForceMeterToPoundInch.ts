import { CustomArticleData } from "./types";

export const kilogramForceMeterToPoundInch: CustomArticleData = {
  fromUnitId: "kilogram-force-meter",
  toUnitId: "pound-inch",
  seoTitle: "Kilogram-Force Meter to Pound-Inch Converter (kgf·m to lb·in)",
  metaDescription: "Convert kilogram-force meters to pound-inches (kgf·m to lb·in) accurately. 86.79617 factor, precision fastener calculations, torque tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-force-meter-to-pound-inch",
  h1: "Kilogram-Force Meter to Pound-Inch Converter",
  introduction: [
    "The kilogram-force meter (symbol: kgf·m or m·kg) and the pound-inch (symbol: lb·in, also commonly called in-lb or inch-pound) represent two primary units used when measuring low to moderate rotational moments and fastener tightening specifications. While the kilogram-force meter is the historical gravitational metric standard prevalent in Japanese (JIS) and European industrial manuals, the pound-inch is the prevailing imperial unit for delicate assemblies across North American aerospace, electronics, and small-engine industries.",
    "Converting kilogram-force meters to pound-inches is standard practice when assembling small automotive covers, motorcycle engine casings, and precision machinery using inch-pound calibrated torque drivers. Because one kilogram-force meter equals approximately 7.233014 pound-feet and there are 12 inches in a foot, multiplying by 12 demonstrates that 1 kilogram-force meter equals approximately 86.796166 pound-inches. Conversely, 1 pound-inch equals approximately 0.01152125 kilogram-force meters.",
    "This technical guide details the conversion mathematical derivation, provides manual calculation steps, highlights realistic mechanical engineering examples, includes a precision reference table, and answers common trade questions regarding torque wrench selection."
  ],
  quickAnswer: {
    text: "To convert kilogram-force meters to pound-inches, multiply the torque value by 86.79617 (or divide by 0.01152125). For example, a small motorcycle engine cover bolt rated at 0.8 kgf·m converts to approximately 69.44 lb·in (in-lb).",
    formulaDisplay: "\\text{lb·in} = \\text{kgf·m} \\times 86.79617",
    subtext: "1 kilogram-force meter equals approximately 86.796166 pound-inches. 1 pound-inch equals 0.01152125 kgf·m."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram-Force Meter (kgf·m)",
    text: "The kilogram-force meter (symbol: kgf·m, m·kg, or kp·m) is a gravitational metric unit of torque defined as the rotational moment of one kilogram-force applied perpendicularly at a radius of one meter (1 kgf·m = 9.80665 N·m). It is widely found in vintage Japanese motorcycle shop manuals, European machinery documentation, and marine equipment specifications."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in-lb) is an imperial unit of torque representing one pound-force exerted at a radial lever arm of one inch (1 lb·in = 1 lbf × 1 in = 1/12 lb·ft = 0.112985 N·m). It is the standard rating for low-range torque screwdrivers and precision click wrenches used on electronics, firearms, carburetors, and bicycle components."
  },
  relationship: "The relationship between kilogram-force meters and pound-inches combines metric gravitational force with imperial linear dimensions. 1 kgf = 2.2046226 lbf. 1 meter = 39.3700787 inches. Multiplying these values: 1 kgf·m = 2.2046226 lbf × 39.3700787 in = 86.796166 lb·in. Dividing 1 by 86.796166 yields the reciprocal factor: 1 lb·in = 0.011521246 kgf·m.",
  relationshipTitle: "Low-to-Moderate Torque Scale (kgf·m vs lb·in)",
  relationshipItems: [
    { label: "0.10 kgf·m", value: "8.68 lb·in (Miniature electronic enclosure screws)" },
    { label: "0.25 kgf·m", value: "21.70 lb·in (Carburetor float bowl screws & plastic fittings)" },
    { label: "0.50 kgf·m", value: "43.40 lb·in (Bicycle handlebar stem faceplate bolts)" },
    { label: "0.75 kgf·m", value: "65.10 lb·in (Motorcycle clutch spring retaining bolts)" },
    { label: "1.00 kgf·m", value: "86.80 lb·in (Automotive valve cover perimeter flange bolts)" },
    { label: "1.50 kgf·m", value: "130.19 lb·in (Thermostat housing & water pump pulley bolts)" },
    { label: "2.00 kgf·m", value: "173.59 lb·in (Spark plugs in aluminum cylinder heads)" }
  ],
  formula: {
    text: "Multiply the torque in kilogram-force meters by 86.79617 to calculate the torque in pound-inches.",
    math: "\\tau_{(\\text{lb·in})} = \\tau_{(\\text{kgf·m})} \\times 86.79617",
    subtext: "Alternatively: Divide the kilogram-force meter value by 0.01152125."
  },
  formulaTitle: "Kilogram-Force Meter to Pound-Inch Conversion Formula",
  practicalTip: {
    title: "Quick 87x Mental Multiplier",
    text: "To approximate in your head on the shop floor, multiply the kgf·m value by 87 (e.g., 0.5 kgf·m × 87 = 43.5 lb·in; exact is 43.40 lb·in, providing error under 0.2%)."
  },
  expertNote: {
    title: "Translating kgf·cm to lb·in",
    text: "Older Japanese manuals frequently express low torque in kgf·cm (kilogram-force centimeters). Because 1 kgf·m = 100 kgf·cm, 1 kgf·cm equals 0.86796 lb·in. To convert kgf·cm directly to lb·in, multiply by 0.868 (or divide by 1.152)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Motorcycle Crankcase Side Cover",
        subtitle: "A vintage Yamaha manual specifies 0.9 kgf·m for M6 aluminum side cover bolts. Convert this specification into pound-inches for an inch-pound torque wrench.",
        steps: [
          "State the initial torque: 0.9 kgf·m.",
          "Apply the conversion formula: lb·in = 0.9 × 86.79617.",
          "Perform the calculation: 0.9 × 86.79617 = 78.11655 lb·in.",
          "Round to common workshop setting: 78 lb·in (in-lb)."
        ]
      },
      {
        title: "Example 2: Automatic Transmission Valve Body Solenoid",
        subtitle: "Convert a transmission valve body solenoid torque specification of 1.15 kgf·m into pound-inches.",
        steps: [
          "Starting value: 1.15 kgf·m.",
          "Multiply by 86.79617: 1.15 × 86.79617 = 99.8156 lb·in.",
          "Final Result: 1.15 kgf·m corresponds to approximately 99.8 lb·in (set tool to 100 in-lb)."
        ]
      },
      {
        title: "Example 3: Small Engine Carburetor Flange",
        subtitle: "A small diesel engine manual designates 0.45 kgf·m on the carburetor flange studs. Determine the torque in pound-inches.",
        steps: [
          "Starting value: 0.45 kgf·m.",
          "Multiply by 86.79617: 0.45 × 86.79617 = 39.0583 lb·in.",
          "Final Result: 0.45 kgf·m equals approximately 39.1 lb·in."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram-Force Meter to Pound-Inch Reference Chart",
    headers: ["Kilogram-Force Meters (kgf·m)", "Pound-Inches (lb·in / in-lb)", "Pound-Feet (lb·ft)", "Newton-Meter (N·m)", "Practical Application"],
    rows: [
      { fromVal: "0.1 kgf·m", toVal: "8.68 lb·in", extra: "0.72 lb·ft", extra2: "0.98 N·m", extra3: "Instrument cluster & gauge screws" },
      { fromVal: "0.2 kgf·m", toVal: "17.36 lb·in", extra: "1.45 lb·ft", extra2: "1.96 N·m", extra3: "Carburetor float bowl cover" },
      { fromVal: "0.3 kgf·m", toVal: "26.04 lb·in", extra: "2.17 lb·ft", extra2: "2.94 N·m", extra3: "Bicycle disc rotor bolts" },
      { fromVal: "0.4 kgf·m", toVal: "34.72 lb·in", extra: "2.89 lb·ft", extra2: "3.92 N·m", extra3: "Bicycle stem faceplate bolts" },
      { fromVal: "0.5 kgf·m", toVal: "43.40 lb·in", extra: "3.62 lb·ft", extra2: "4.90 N·m", extra3: "Motorcycle plastic fairing screws" },
      { fromVal: "0.6 kgf·m", toVal: "52.08 lb·in", extra: "4.34 lb·ft", extra2: "5.88 N·m", extra3: "Motorcycle oil filter cover bolts" },
      { fromVal: "0.7 kgf·m", toVal: "60.76 lb·in", extra: "5.06 lb·ft", extra2: "6.86 N·m", extra3: "Engine oil pan M6 perimeter bolts" },
      { fromVal: "0.8 kgf·m", toVal: "69.44 lb·in", extra: "5.79 lb·ft", extra2: "7.85 N·m", extra3: "Motorcycle clutch spring bolts" },
      { fromVal: "0.9 kgf·m", toVal: "78.12 lb·in", extra: "6.51 lb·ft", extra2: "8.83 N·m", extra3: "Valve cover perimeter bolts" },
      { fromVal: "1.0 kgf·m", toVal: "86.80 lb·in", extra: "7.23 lb·ft", extra2: "9.81 N·m", extra3: "Thermostat housing flange" },
      { fromVal: "1.2 kgf·m", toVal: "104.16 lb·in", extra: "8.68 lb·ft", extra2: "11.77 N·m", extra3: "Water pump housing bolts" },
      { fromVal: "1.5 kgf·m", toVal: "130.19 lb·in", extra: "10.85 lb·ft", extra2: "14.71 N·m", extra3: "Spark plugs in aluminum heads" },
      { fromVal: "2.0 kgf·m", toVal: "173.59 lb·in", extra: "14.47 lb·ft", extra2: "19.61 N·m", extra3: "Intake manifold plenum studs" },
      { fromVal: "2.5 kgf·m", toVal: "216.99 lb·in", extra: "18.08 lb·ft", extra2: "24.52 N·m", extra3: "Oil drain plug in cast aluminum pan" },
      { fromVal: "3.0 kgf·m", toVal: "260.39 lb·in", extra: "21.70 lb·ft", extra2: "29.42 N·m", extra3: "Brake caliper guide pin bolts" }
    ]
  },
  applications: {
    title: "Primary Industry & Trade Uses",
    items: [
      {
        title: "Vintage Japanese Motorcycle Restoration",
        text: "Classic motorcycle engines (Honda CB series, Yamaha RD, Suzuki GS, Kawasaki Z) feature aluminum alloy cases tapped for soft M6 threads. Service manuals specify casing torque between 0.7 and 1.2 kgf·m, which mechanics convert to 60–104 lb·in."
      },
      {
        title: "Small Agricultural Engines & Tillers",
        text: "Rotary tillers and small single-cylinder diesel engines from Kubota and Yanmar provide valve cover and carburetor specifications in kilogram-force meters that must be converted for American inch-pound tools."
      },
      {
        title: "Industrial Sewing Machine & Textile Assembly",
        text: "High-speed industrial sewing machines and automated loom gearboxes built in Japan and Europe mandate precise kgf·m clamp forces on needle bar clamps and timing cams."
      },
      {
        title: "Marine Outboard Carburetor & Fuel Systems",
        text: "Servicing Tohatsu, Suzuki, and Yamaha marine outboards requires converting low kgf·m specs on fuel pumps, reed valves, and float bowls to avoid stripping aluminum castings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kgf·m to lb·in",
    items: [
      "Confusing lb·in with lb·ft: 1 kgf·m equals 86.8 lb·in, but only 7.23 lb·ft. Setting 86.8 on a foot-pound torque wrench will deliver 1,041.6 lb·in (117.7 N·m), shearing small bolts instantly.",
      "Conflating kgf·m with kgf·cm: Japanese manuals frequently switch between kgf·m (meter) and kgf·cm (centimeter). 1 kgf·cm is only 0.868 lb·in. Confusing the two causes an 87-fold error.",
      "Using a 1/2-inch drive torque wrench: Fasteners requiring under 200 lb·in should always be tightened with a 1/4-inch drive torque wrench calibrated specifically in inch-pounds.",
      "Leaving torque wrenches under tension: Dialing a spring-loaded inch-pound wrench to 80 lb·in and leaving it stored in a toolbox weakens the calibration spring over time."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilogram-force meters to pound-inches?",
      answer: "Multiply the kilogram-force meter (kgf·m) value by 86.79617 (or divide by 0.01152125). For example, 1 kgf·m × 86.79617 = 86.80 lb·in."
    },
    {
      question: "How many inch-pounds are in 1 kilogram-force meter?",
      answer: "There are approximately 86.796166 inch-pounds (lb·in) in one kilogram-force meter."
    },
    {
      question: "What is 0.8 kgf·m in inch-pounds?",
      answer: "0.8 kgf·m equals approximately 69.44 lb·in (0.8 × 86.79617 = 69.4369 lb·in). This is a very common torque for motorcycle M6 engine case bolts."
    },
    {
      question: "Is pound-inch identical to inch-pound?",
      answer: "Yes, 'pound-inch' (lb·in) and 'inch-pound' (in-lb) refer to the exact same physical unit of rotational moment."
    },
    {
      question: "How do I convert kgf·cm to lb·in?",
      answer: "Multiply the kgf·cm value by 0.867962 (or divide by 1.152125). For example, 100 kgf·cm = 86.80 lb·in."
    },
    {
      question: "What is 1.5 kgf·m in pound-inches?",
      answer: "1.5 kgf·m equals approximately 130.19 lb·in (1.5 × 86.79617 = 130.194 lb·in)."
    },
    {
      question: "What tool should I use for torque values between 20 and 200 lb·in?",
      answer: "Use a dedicated 1/4-inch drive click-type torque wrench or a precision torque screwdriver calibrated in inch-pounds."
    },
    {
      question: "How do I convert pound-inches back to kilogram-force meters?",
      answer: "Multiply the pound-inch value by 0.01152125 (or divide by 86.79617). For example, 50 lb·in × 0.01152125 = 0.576 kgf·m."
    }
  ],
  relatedList: [
    { label: "Pound-Inch to Kilogram-Force Meter", from: "pound-inch", to: "kilogram-force-meter" },
    { label: "Kilogram-Force Meter to Pound-Foot", from: "kilogram-force-meter", to: "pound-foot" },
    { label: "Kilogram-Force Meter to Newton-Meter", from: "kilogram-force-meter", to: "newton-meter" },
    { label: "Pound-Foot to Pound-Inch", from: "pound-foot", to: "pound-inch" }
  ],
  relatedArticles: [
    {
      title: "Pound-Inch to Kilogram-Force Meter Conversion Guide",
      description: "Step-by-step conversion factors from imperial inch-pounds to metric gravitational torque units.",
      from: "pound-inch",
      to: "kilogram-force-meter"
    },
    {
      title: "Kilogram-Force Meter to Pound-Foot Conversion Guide",
      description: "Convert heavy chassis and automotive torque specifications between metric and imperial scales.",
      from: "kilogram-force-meter",
      to: "pound-foot"
    }
  ],
  references: [
    "JIS B 0101: Screw Threads and Fasteners — Vocabulary and Torque Standards",
    "ISO 6789-1: Hand torque tools — Requirements and test methods for design and manufacturing",
    "ASME B107.300: Manual Torque Instruments",
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices"
  ]
};
