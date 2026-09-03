import { CustomArticleData } from "./types";

export const kilogramForceMeterToNewtonMeter: CustomArticleData = {
  fromUnitId: "kilogram-force-meter",
  toUnitId: "newton-meter",
  seoTitle: "Kilogram-Force Meter to Newton-Meter Converter (kgf·m to N·m)",
  metaDescription: "Convert kilogram-force meters to Newton-meters (kgf·m to N·m) with exact 9.80665 gravity factor, automotive torque tables, step-by-step examples, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-force-meter-to-newton-meter",
  h1: "Kilogram-Force Meter to Newton-Meter Converter",
  introduction: [
    "The kilogram-force meter (symbol: kgf·m, also frequently written as m·kg or kg·m) and the Newton-meter (symbol: N·m) are two fundamental metric units of torque and rotational moment. While the kilogram-force meter represents the traditional gravitational metric standard historically favored across European machinery, Japanese automotive engineering (JIS), and maritime shipbuilding, the Newton-meter is the internationally mandated derived unit of torque in the modern International System of Units (SI).",
    "Converting kilogram-force meters to Newton-meters is one of the most common requirements for mechanics, structural engineers, and machine operators working with imported service manuals or vintage equipment. The conversion factor is mathematically tied to the standard acceleration of Earth's gravity: exactly 9.80665 m/s². Consequently, 1 kilogram-force meter equals exactly 9.80665 Newton-meters, while 1 Newton-meter equals approximately 0.1019716 kilogram-force meters.",
    "This engineering guide provides the exact conversion formulas, presents realistic worked examples from automotive cylinder head torquing and heavy equipment maintenance, offers a comprehensive torque conversion table, and explains proper tool calibration procedures."
  ],
  quickAnswer: {
    text: "To convert kilogram-force meters to Newton-meters, multiply the torque value by 9.80665. For example, a vintage Japanese engine head bolt specified at 8.5 kgf·m converts to approximately 83.36 N·m.",
    formulaDisplay: "\\text{N·m} = \\text{kgf·m} \\times 9.80665",
    subtext: "1 kilogram-force meter equals exactly 9.80665 Newton-meters (based on standard Earth gravity gn = 9.80665 m/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram-Force Meter (kgf·m)",
    text: "The kilogram-force meter (symbol: kgf·m, m·kg, or kilopond-meter, kp·m) is a gravitational metric unit of torque. It defines the turning moment resulting from a mass of one kilogram accelerated by Earth's standard gravity (1 kgf = 9.80665 N) acting at a perpendicular radius of one meter (1 kgf·m = 1 kgf × 1 m). Although superseded by SI standards, kgf·m remains widespread in legacy Japanese, Russian, French, and German technical documentation."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton-Meter (N·m)",
    text: "The Newton-meter (symbol: N·m) is the coherent SI unit of torque or moment of force. It quantifies the rotational effect of one Newton of force applied perpendicularly at the end of a one-meter moment arm (1 N·m = 1 N × 1 m). Because the Newton is an absolute force unit independent of local gravitational variation, the Newton-meter is the universal legal measurement unit across international manufacturing and modern automotive specifications."
  },
  relationship: "The relationship between kilogram-force meters and Newton-meters is defined by the definition of the kilogram-force: 1 kgf = 1 kg × gn = 9.80665 N, where gn is the standard gravitational acceleration adopted by the 3rd CGPM in 1901. Therefore, 1 kgf·m = 9.80665 N × 1 m = 9.80665 N·m. Dividing 1 by 9.80665 provides the reciprocal factor: 1 N·m = 0.1019716212977928 kgf·m.",
  relationshipTitle: "Standard Automotive & Mechanical Torque Equivalencies",
  relationshipItems: [
    { label: "1.0 kgf·m", value: "9.81 N·m (Engine valve cover & small oil pan bolts)" },
    { label: "3.5 kgf·m", value: "34.32 N·m (Spark plugs & brake caliper guide pins)" },
    { label: "7.0 kgf·m", value: "68.65 N·m (Passenger vehicle suspension arm pivot bolts)" },
    { label: "10.0 kgf·m", value: "98.07 N·m (Passenger vehicle wheel lug nuts)" },
    { label: "15.0 kgf·m", value: "147.10 N·m (Diesel engine cylinder head bolts)" },
    { label: "25.0 kgf·m", value: "245.17 N·m (Crankshaft pulley damper hub bolts)" }
  ],
  formula: {
    text: "Multiply the torque value in kilogram-force meters by 9.80665 to calculate the equivalent torque in Newton-meters.",
    math: "\\tau_{(\\text{N·m})} = \\tau_{(\\text{kgf·m})} \\times 9.80665",
    subtext: "Alternatively: Divide the kilogram-force meter value by 0.1019716."
  },
  formulaTitle: "Kilogram-Force Meter to Newton-Meter Conversion Formula",
  practicalTip: {
    title: "Quick 10x Mental Calculation",
    text: "To approximate N·m quickly in the workshop: multiply the kgf·m value by 10 and subtract 2% (e.g., 8 kgf·m × 10 = 80; 80 - 1.6 = 78.4 N·m; exact is 78.45 N·m, which is accurate within 0.1%)."
  },
  expertNote: {
    title: "Gravitational Metric vs SI Absolute",
    text: "The kilogram-force meter is based on mass under Earth gravity, meaning its theoretical torque would vary slightly on other celestial bodies or at varying altitudes. The Newton-meter is based purely on mass and acceleration (F = ma), making it scientifically consistent worldwide."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Motorcycle Cylinder Head Bolts",
        subtitle: "A vintage Honda CB750 service manual lists a final cylinder head torque of 3.8 kgf·m. Convert this specification into Newton-meters for a modern digital torque wrench.",
        steps: [
          "State the initial torque: 3.8 kgf·m.",
          "Apply the formula: N·m = 3.8 × 9.80665.",
          "Perform the multiplication: 3.8 × 9.80665 = 37.26527 N·m.",
          "Round to common workshop tolerance: 37.3 N·m."
        ]
      },
      {
        title: "Example 2: Commercial Truck Wheel Lug Nuts",
        subtitle: "An imported Isuzu truck manual calls for 55 kgf·m on rear dual wheel nuts. Determine the torque in N·m.",
        steps: [
          "Starting value: 55 kgf·m.",
          "Multiply by 9.80665: 55 × 9.80665 = 539.36575 N·m.",
          "Final Result: 55 kgf·m corresponds to approximately 539.4 N·m."
        ]
      },
      {
        title: "Example 3: Flywheel Mounting Bolts",
        subtitle: "Convert a flywheel bolt specification of 12.5 kgf·m into Newton-meters.",
        steps: [
          "Starting value: 12.5 kgf·m.",
          "Multiply by 9.80665: 12.5 × 9.80665 = 122.5831 N·m.",
          "Final Result: 12.5 kgf·m equals approximately 122.58 N·m."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram-Force Meter to Newton-Meter Reference Table",
    headers: ["Kilogram-Force Meters (kgf·m)", "Newton-Meters (N·m)", "Pound-Foot Equivalent (lb·ft)", "Typical Automotive Application"],
    rows: [
      { fromVal: "0.5 kgf·m", toVal: "4.90 N·m", extra: "3.62 lb·ft", extra2: "Small intake manifold & vacuum line clamps" },
      { fromVal: "1.0 kgf·m", toVal: "9.81 N·m", extra: "7.23 lb·ft", extra2: "Valve cover & oil pan perimeter flange bolts" },
      { fromVal: "2.0 kgf·m", toVal: "19.61 N·m", extra: "14.47 lb·ft", extra2: "Thermostat housing & water pump bolts" },
      { fromVal: "3.0 kgf·m", toVal: "29.42 N·m", extra: "21.70 lb·ft", extra2: "Spark plugs & oil pressure sender units" },
      { fromVal: "4.0 kgf·m", toVal: "39.23 N·m", extra: "28.93 lb·ft", extra2: "Brake caliper bracket mounting bolts" },
      { fromVal: "5.0 kgf·m", toVal: "49.03 N·m", extra: "36.17 lb·ft", extra2: "Exhaust manifold to cylinder head studs" },
      { fromVal: "6.0 kgf·m", toVal: "58.84 N·m", extra: "43.40 lb·ft", extra2: "Engine motor mount through-bolts" },
      { fromVal: "7.5 kgf·m", toVal: "73.55 N·m", extra: "54.25 lb·ft", extra2: "Suspension control arm bushing bolts" },
      { fromVal: "10.0 kgf·m", toVal: "98.07 N·m", extra: "72.33 lb·ft", extra2: "Passenger car wheel lug nuts (M12 studs)" },
      { fromVal: "12.0 kgf·m", toVal: "117.68 N·m", extra: "86.80 lb·ft", extra2: "SUV & light truck wheel lug nuts (M14 studs)" },
      { fromVal: "15.0 kgf·m", toVal: "147.10 N·m", extra: "108.50 lb·ft", extra2: "Cylinder head bolts (intermediate torque pass)" },
      { fromVal: "20.0 kgf·m", toVal: "196.13 N·m", extra: "144.66 lb·ft", extra2: "Crankshaft main bearing cap bolts" },
      { fromVal: "25.0 kgf·m", toVal: "245.17 N·m", extra: "180.83 lb·ft", extra2: "Front wheel hub axle spindle nuts" },
      { fromVal: "30.0 kgf·m", toVal: "294.20 N·m", extra: "216.99 lb·ft", extra2: "Crankshaft harmonic balancer central bolt" },
      { fromVal: "50.0 kgf·m", toVal: "490.33 N·m", extra: "361.65 lb·ft", extra2: "Heavy commercial truck axle hub nuts" }
    ]
  },
  applications: {
    title: "Major Industry & Trade Uses",
    items: [
      {
        title: "Vintage Japanese Vehicle Restoration",
        text: "Service manuals for Toyota, Datsun/Nissan, Mazda, Honda, and vintage motorcycles originally specified all torque in kgf·m or m·kg. Modern mechanics convert these directly into Newton-meters to set modern ISO-calibrated torque wrenches."
      },
      {
        title: "Heavy Equipment & Industrial Machinery",
        text: "Construction machinery from Komatsu, Hitachi, and Kobelco frequently documents major chassis, hydraulic cylinder pins, and track tensioners in kilogram-force meters in older fleet records."
      },
      {
        title: "Marine Diesel & Power Generation Engines",
        text: "Large marine two-stroke and four-stroke propulsion engines built under legacy licenses often retain kgf·m values on bearing clearances, connecting rod bolts, and cylinder head studs."
      },
      {
        title: "Agricultural Equipment & Tractors",
        text: "Tractors from Kubota, Yanmar, and European manufacturers provide service schedules with dual kgf·m and N·m ratings that technicians convert when testing fastener clamp loads."
      }
    ]
  },
  pitfalls: {
    title: "Critical Conversion Errors to Avoid",
    items: [
      "Assuming 1 kgf·m = 1 N·m: They are not equal. 1 kgf·m is almost 10 times larger than 1 N·m (9.81 N·m). Tightening a bolt specified at 10 kgf·m to 10 N·m leaves it dangerously loose (under-torqued by 90%).",
      "Using an imprecise 10x factor for critical engine fasteners: While multiplying by 10 is acceptable for mental checks, using 10 instead of 9.80665 on cylinder head bolts creates a 2% over-torque error, which can exceed yield limits on torque-to-yield (TTY) fasteners.",
      "Confusing kgf·m with kgf·cm: 1 kgf·m equals 100 kgf·cm (and 1 kgf·cm equals 0.0980665 N·m). Small engine covers frequently use kgf·cm; misinterpreting the unit will snap bolts.",
      "Overlooking thread lubrication requirements: European and Japanese engine manuals frequently mandate dipping cylinder head bolt threads and washer faces in clean engine oil prior to torque application."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilogram-force meters to Newton-meters?",
      answer: "Multiply the kilogram-force meter (kgf·m) value by 9.80665. For example, 10 kgf·m × 9.80665 = 98.07 N·m."
    },
    {
      question: "Why is the conversion factor 9.80665?",
      answer: "Because 1 kilogram-force is defined as the force exerted by standard gravity on a 1-kilogram mass (1 kgf = 1 kg × 9.80665 m/s² = 9.80665 Newtons). Multiplying by a 1-meter lever arm produces 9.80665 N·m."
    },
    {
      question: "Is kg·m the same as kgf·m?",
      answer: "Yes. In automotive and mechanical shop manuals, 'kg·m', 'm·kg', and 'kgf·m' all refer to the same unit: the kilogram-force meter."
    },
    {
      question: "What is 10 kgf·m in Newton-meters?",
      answer: "10 kgf·m equals approximately 98.07 N·m (10 × 9.80665 = 98.0665 N·m), which is the standard torque for most passenger vehicle wheel lug nuts."
    },
    {
      question: "How do I convert Newton-meters back to kilogram-force meters?",
      answer: "Divide the Newton-meter value by 9.80665 (or multiply by 0.101972). For example, 100 N·m / 9.80665 = 10.197 kgf·m."
    },
    {
      question: "What is 5 kgf·m in N·m?",
      answer: "5 kgf·m equals approximately 49.03 N·m (5 × 9.80665 = 49.033 N·m)."
    },
    {
      question: "Can I use 10 as a quick conversion factor?",
      answer: "Multiplying by 10 provides a quick mental estimate that is roughly 2% higher than the exact value (e.g., 7 kgf·m × 10 = 70 N·m vs 68.65 N·m exact). For critical engine internals, always use 9.80665."
    },
    {
      question: "What is the difference between kgf·m and lb·ft?",
      answer: "1 kgf·m equals approximately 7.233 lb·ft, because 1 kgf = 2.20462 lbf and 1 meter = 3.28084 feet (2.20462 × 3.28084 = 7.233)."
    }
  ],
  relatedList: [
    { label: "Newton-Meter to Kilogram-Force Meter", from: "newton-meter", to: "kilogram-force-meter" },
    { label: "Kilogram-Force Meter to Pound-Foot", from: "kilogram-force-meter", to: "pound-foot" },
    { label: "Kilogram-Force Meter to Pound-Inch", from: "kilogram-force-meter", to: "pound-inch" },
    { label: "Kilogram-Force Meter to Newton-Centimeter", from: "kilogram-force-meter", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Newton-Meter to Kilogram-Force Meter Conversion Guide",
      description: "Convert modern SI torque specifications back to legacy Japanese and European gravitational metric units.",
      from: "newton-meter",
      to: "kilogram-force-meter"
    },
    {
      title: "Kilogram-Force Meter to Pound-Foot Conversion Guide",
      description: "Step-by-step conversion factors between metric gravitational torque and imperial foot-pounds.",
      from: "kilogram-force-meter",
      to: "pound-foot"
    }
  ],
  references: [
    "BIPM: Resolution of the 3rd CGPM (1901) on the Standard Value of Gravity",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "JIS B 0101: Japanese Industrial Standard for Screw Threads and Fasteners",
    "ASME B107.300: Manual Torque Instruments and Calibration Verification"
  ]
};
