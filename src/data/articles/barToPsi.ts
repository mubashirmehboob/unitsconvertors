import { CustomArticleData } from "./types";

export const barToPsi: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "psi",
  seoTitle: "Bar to PSI Converter (bar to psi) - Tire & Pressure Calculator",
  metaDescription: "Convert bar to pounds per square inch (bar to PSI) with precision formulas. Features tire pressure charts, hydraulic calculations, worked examples, and FAQs.",
  h1: "Bar to PSI Converter",
  introduction: [
    "Converting bar to pounds per square inch (PSI) is one of the most frequent pressure conversions across automotive engineering, tire inflation, industrial hydraulics, aviation maintenance, and diving. While European and Asian manufacturers stamp vehicle placards, air compressor dials, and hydraulic valves in bar, American service stations, workshop tools, and North American consumer equipment predominantly read in PSI.",
    "One bar is defined metrologically as exactly 100,000 Pascals (100 kPa). One pound per square inch is defined as the pressure exerted by one pound-force over an area of one square inch, equaling approximately 6,894.76 Pascals. Consequently, one bar equals approximately 14.503774 PSI. To convert bar into PSI, multiply the bar value by 14.5038.",
    "This comprehensive guide provides the conversion formula, quick mental estimation techniques, step-by-step worked engineering problems, a detailed automotive tire pressure lookup table, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert bar to PSI, multiply the pressure value in bar by 14.5038. For example, a typical European car tire recommendation of 2.2 bar equals approximately 31.9 PSI (commonly rounded to 32 PSI).",
    formulaDisplay: "psi = bar × 14.5038",
    subtext: "Exact relationship: 1 bar = 100,000 Pa. 1 psi ≈ 6,894.757293 Pa.\nTherefore, 1 bar ≈ 14.50377377 psi, and 1 psi ≈ 0.06894757 bar."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa). Widely used throughout Europe and Asia for automotive tire pressures, scuba diving cylinders, and fluid power hydraulics, 1 bar closely approximates average sea-level atmospheric pressure (1.01325 bar)."
  },
  aboutTargetUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pounds per square inch (symbol: psi or lbf/in²) is an imperial and United States customary unit of pressure, defined as one pound of force applied perpendicularly to an area of one square inch. It is the primary pressure unit used in North America across consumer tire inflation, HVAC systems, plumbing codes, and industrial compressed gas storage."
  },
  relationship: "One bar equals approximately 14.503774 pounds per square inch (PSI). Conversely, 1 PSI equals approximately 0.06894757 bar. Therefore, pressure measured in PSI is roughly 14.5 times larger numerically than the same pressure expressed in bar.",
  relationshipTitle: "Bar to PSI Everyday Benchmarks",
  relationshipItems: [
    { label: "1.00 bar", value: "14.50 psi (Standard metric atmospheric reference)" },
    { label: "2.00 bar", value: "29.01 psi (Light compact car tire inflation)" },
    { label: "2.20 bar", value: "31.91 psi (Standard family sedan tire pressure - ~32 psi)" },
    { label: "2.50 bar", value: "36.26 psi (Loaded crossover or SUV tire pressure)" },
    { label: "6.20 bar", value: "89.92 psi (~90 psi - Standard workshop pneumatic tool line)" },
    { label: "200.00 bar", value: "2,900.75 psi (Standard 3,000 psi aluminum SCUBA cylinder)" }
  ],
  formula: {
    text: "Multiply the pressure in bar by 14.503774 to determine the equivalent pressure in pounds per square inch (PSI).",
    math: "\\text{psi} = \\text{bar} \\times 14.503774",
    subtext: "To convert PSI back to bar: bar = psi × 0.068948 (or divide by 14.503774)."
  },
  formulaTitle: "Bar to PSI Conversion Formula",
  practicalTip: {
    title: "The 15 Minus Half Rule for Mental Math",
    text: "For quick roadside estimates, multiply the bar value by 15 and subtract about 3.5%. For example, 2 bar × 15 = 30 psi (actual: 29.0 psi); 2.4 bar × 15 = 36 psi, minus 1 = 35 psi (actual: 34.8 psi). This approximation is accurate within 1 PSI for everyday tires."
  },
  expertNote: {
    title: "Gauge Pressure (psig / barg) vs. Absolute Pressure (psia / bara)",
    text: "Almost all consumer and workshop tire pressure gauges measure gauge pressure (relative to surrounding ambient air). A tire inflated to 2.2 bar gauge (barg) reads approximately 32 psig on an American tire gauge. In thermodynamic and gas compressibility equations, always add atmospheric baseline (1.013 bar or 14.7 psi) to convert to absolute pressure."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: European Car Tire Inflation (2.3 bar)",
        subtitle: "A driver in North America rents an imported German sedan. The tire inflation sticker specifies 2.3 bar cold. Convert this to PSI for an American gas station air pump.",
        steps: [
          "State starting pressure: 2.3 bar.",
          "Apply conversion formula: psi = 2.3 × 14.503774.",
          "Calculate: 2.3 × 14.503774 = 33.35868.",
          "Round to the nearest whole PSI for practical inflation: 33.4 psi (set inflator to 33 or 34 psi).",
          "Result: 2.3 bar corresponds to approximately 33.4 PSI."
        ]
      },
      {
        title: "Example 2: Workshop Air Compressor Cut-Out Switch (8.0 bar)",
        subtitle: "A garage air compressor is configured to stop pumping when the tank reaches 8.0 bar. Express this shut-off setting in PSI.",
        steps: [
          "Identify tank pressure: 8.0 bar.",
          "Apply formula: psi = 8.0 × 14.503774.",
          "Calculate: 8.0 × 14.503774 = 116.0302.",
          "Result: 8.0 bar equals approximately 116.03 PSI (commonly referred to as 116 psi)."
        ]
      },
      {
        title: "Example 3: Heavy Excavator Hydraulic System (280 bar)",
        subtitle: "A field technician checks the hydraulic relief pressure of a backhoe boom circuit rated at 280 bar. Convert this load to PSI.",
        steps: [
          "Identify hydraulic rating: 280 bar.",
          "Multiply: psi = 280 × 14.503774.",
          "Calculate: 280 × 14.503774 = 4,061.0567.",
          "Result: 280 bar equals approximately 4,061.06 PSI."
        ]
      }
    ]
  },
  table: {
    title: "Bar to PSI Conversion Table (Tire & Pressure Range)",
    headers: ["Bar (bar)", "PSI (psi)", "Kilopascals (kPa)", "Atmospheres (atm)", "Everyday / Technical Context"],
    rows: [
      { fromVal: "1.00 bar", toVal: "14.50 psi", extra: "100 kPa", extra2: "0.987 atm", extra3: "Nominal metric atmospheric reference" },
      { fromVal: "1.80 bar", toVal: "26.11 psi", extra: "180 kPa", extra2: "1.776 atm", extra3: "Vintage small car / trailer tire" },
      { fromVal: "2.00 bar", toVal: "29.01 psi", extra: "200 kPa", extra2: "1.974 atm", extra3: "Subcompact city car front tire" },
      { fromVal: "2.20 bar", toVal: "31.91 psi", extra: "220 kPa", extra2: "2.171 atm", extra3: "Standard family sedan cold tire (~32 psi)" },
      { fromVal: "2.30 bar", toVal: "33.36 psi", extra: "230 kPa", extra2: "2.270 atm", extra3: "Modern sedan highway tire pressure" },
      { fromVal: "2.40 bar", toVal: "34.81 psi", extra: "240 kPa", extra2: "2.369 atm", extra3: "Standard crossover / estate car tire (~35 psi)" },
      { fromVal: "2.50 bar", toVal: "36.26 psi", extra: "250 kPa", extra2: "2.467 atm", extra3: "Full-size SUV / minivan rear tire" },
      { fromVal: "3.00 bar", toVal: "43.51 psi", extra: "300 kPa", extra2: "2.961 atm", extra3: "Domestic water service booster" },
      { fromVal: "4.20 bar", toVal: "60.92 psi", extra: "420 kPa", extra2: "4.145 atm", extra3: "Compact temporary spare tire ('donut')" },
      { fromVal: "6.00 bar", toVal: "87.02 psi", extra: "600 kPa", extra2: "5.922 atm", extra3: "Road bicycle high-pressure tire" },
      { fromVal: "8.00 bar", toVal: "116.03 psi", extra: "800 kPa", extra2: "7.895 atm", extra3: "Workshop air compressor line cut-off" },
      { fromVal: "10.00 bar", toVal: "145.04 psi", extra: "1,000 kPa", extra2: "9.869 atm", extra3: "Heavy commercial truck air brake line" },
      { fromVal: "200.00 bar", toVal: "2,900.75 psi", extra: "20,000 kPa", extra2: "197.38 atm", extra3: "Commercial SCUBA diving tank" },
      { fromVal: "300.00 bar", toVal: "4,351.13 psi", extra: "30,000 kPa", extra2: "296.08 atm", extra3: "Carbon-fiber composite firefighter SCBA" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Automotive Tire Inflation and Fleet Management",
        text: "Automobile owners and tire service technicians routinely convert between bar and PSI when interpreting foreign vehicle owner manuals or setting air pressure on domestic tire service machines."
      },
      {
        title: "Industrial Hydraulics and Heavy Machinery",
        text: "Hydraulic systems on heavy machinery manufactured in Europe (e.g., Liebherr, Volvo) specify working pressures in bar, while American service manuals convert these to PSI for field diagnostics with local gauges."
      },
      {
        title: "Scuba Diving and Breathing Air Apparatus",
        text: "European dive tanks are rated in bar (e.g., 200 bar or 300 bar), while American dive shops and submersible pressure gauges (SPGs) read in PSI (e.g., 3,000 psi or 4,350 psi)."
      },
      {
        title: "HVAC and Refrigeration Diagnostics",
        text: "Refrigeration technician manifold sets often display dual concentric scales in bar and PSI to accommodate international refrigerants and condenser pressure specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using 14 instead of 14.5: Approximating 1 bar as 14 PSI causes an under-inflation error of nearly 4% (e.g., 2.5 bar × 14 = 35 psi instead of 36.3 psi), leading to increased tire tread wear and reduced fuel efficiency.",
      "Gauge pressure vs. Absolute pressure: Ensure whether specifications require gauge pressure (psig / barg) or absolute pressure (psia / bara). A standard tire gauge measures gauge pressure.",
      "Temperature effects on tire pressure: Always check tire pressures when tires are cold. Driving heats the tire, causing the pressure to rise by 0.2 to 0.3 bar (3 to 5 PSI) naturally.",
      "Confusing bar with millibar: 1 bar = 14.5038 PSI, whereas 1 millibar = 0.0145038 PSI."
    ]
  },
  faqs: [
    {
      question: "How many PSI are in 1 bar?",
      answer: "There are approximately 14.503774 pounds per square inch (PSI) in 1 bar. For everyday estimates, multiplying by 14.5 provides a very close approximation."
    },
    {
      question: "What is the formula to convert bar to PSI?",
      answer: "The formula is: psi = bar × 14.503774. For example, 2.2 bar × 14.503774 ≈ 31.91 psi."
    },
    {
      question: "How do you convert PSI back to bar?",
      answer: "To convert PSI to bar, multiply the PSI value by 0.06894757 (or divide by 14.503774). For example, 32 psi ÷ 14.503774 ≈ 2.21 bar."
    },
    {
      question: "What is 2.2 bar in PSI for car tires?",
      answer: "2.2 bar equals approximately 31.91 PSI. In automotive tire shops, this is universally rounded to 32 PSI."
    },
    {
      question: "What is 2.4 bar in PSI?",
      answer: "2.4 bar equals approximately 34.81 PSI (often rounded to 35 PSI)."
    },
    {
      question: "What is 2.5 bar in PSI?",
      answer: "2.5 bar equals approximately 36.26 PSI (commonly set to 36 PSI)."
    },
    {
      question: "What is 200 bar in PSI for a scuba diving tank?",
      answer: "200 bar equals approximately 2,900.75 PSI (standard fill for an aluminum 80 cubic foot diving cylinder, nominally called a 3,000 psi tank)."
    },
    {
      question: "What is 300 bar in PSI?",
      answer: "300 bar equals approximately 4,351.13 PSI. This is the fill pressure for high-pressure carbon fiber breathing air tanks."
    },
    {
      question: "Why do cars in Europe use bar while American cars use PSI?",
      answer: "Europe uses the metric system where the bar is standard for fluid and gas pressures, whereas the United States predominantly retains imperial and customary units, where pounds per square inch (PSI) is standard."
    }
  ],
  relatedList: [
    { label: "PSI to Bar", from: "psi", to: "bar" },
    { label: "Bar to Kilopascal", from: "bar", to: "kilopascal" },
    { label: "Bar to Megapascal", from: "bar", to: "megapascal" },
    { label: "Bar to Pascal", from: "bar", to: "pascal" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" }
  ],
  references: [
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "Tire and Rim Association (TRA) Year Book (Tire Pressure Standardization)",
    "SAE J2450: Quality Standards for Fluid Power and Pneumatic Systems"
  ]
};
