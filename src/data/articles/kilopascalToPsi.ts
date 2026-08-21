import { CustomArticleData } from "./types";

export const kilopascalToPsi: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "psi",
  seoTitle: "Kilopascal to PSI Converter (kPa to psi)",
  metaDescription: "Convert kilopascals to pounds per square inch (kPa to psi) with exact engineering accuracy. Formula, tire pressure conversion chart, worked examples, and FAQs.",
  h1: "Kilopascal to PSI Converter",
  introduction: [
    "Converting kilopascals (kPa) to pounds per square inch (psi, or $\\text{lbf/in}^2$) is one of the most common international pressure conversions across automotive service, aviation tire maintenance, industrial pneumatics, HVAC servicing, and hydraulic equipment manufacturing. While global automakers, building codes, and metric engineering standards document pressures in kilopascals, automotive tire gauges, air compressors, and pressure relief valves in the United States and North America are universally calibrated in PSI.",
    "The conversion between kilopascals and PSI stems from the exact mathematical relationship between the metric Newton per square meter ($1\\text{ N/m}^2 = 1\\text{ Pa}$) and the imperial pound-force per square inch. Under standard international definitions (where $1\\text{ lb} = 0.45359237\\text{ kg}$ and $g = 9.80665\\text{ m/s}^2$), one pound per square inch equals approximately 6,894.757 Pascals (6.894757 kPa). Consequently, one kilopascal equals approximately 0.1450377 PSI (or roughly 1/6.895 psi). To convert kilopascals to PSI, divide the kPa value by 6.894757 (or multiply by 0.145038).",
    "This comprehensive guide provides the exact conversion formula, mental math shortcuts, step-by-step automotive and industrial examples, a detailed tire pressure lookup table, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to PSI, divide the pressure value in kilopascals by 6.894757 (or multiply by 0.145038). For example, a common tire pressure of 240 kPa equals approximately 34.81 psi, and 100 kPa equals 14.50 psi.",
    formulaDisplay: "psi = kPa ÷ 6.894757 ≈ kPa × 0.145038",
    subtext: "1 kPa ≈ 0.1450377 psi.\n1 psi = 6.894757 kPa (6,894.757 Pa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official decimal multiple of the Pascal, defined as 1,000 Newtons per square meter (1,000 Pa). Widely used in international automotive engineering, metric tire inflation standards, barometric meteorology, and building services, it is the primary SI unit for moderate pressure."
  },
  aboutTargetUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pounds per square inch (symbol: psi or $\\text{lbf/in}^2$) is a unit of pressure in imperial and US customary systems, defined as one pound-force applied over an area of one square inch. Widely used across the United States for vehicle tires, plumbing supply lines, hydraulic circuits, and SCUBA diving tanks, 1 psi equals 6,894.76 Pa."
  },
  relationship: "One kilopascal equals approximately 0.1450377 PSI, and one PSI equals approximately 6.894757 kilopascals. Multiplying any kPa value by 0.145038 (or dividing by 6.894757) yields its equivalent in PSI.",
  relationshipTitle: "Kilopascal to PSI Pressure Benchmarks",
  relationshipItems: [
    { label: "10 kPa", value: "1.4504 psi (Low-pressure gas line)" },
    { label: "100 kPa", value: "14.5038 psi (1 bar baseline)" },
    { label: "101.325 kPa", value: "14.6959 psi (Standard sea-level atmosphere)" },
    { label: "200 kPa", value: "29.0075 psi (Compact car tire cold pressure)" },
    { label: "240 kPa", value: "34.8091 psi (Standard sedan / crossover tire)" },
    { label: "300 kPa", value: "43.5113 psi (Heavy-duty truck tire / pressure vessel)" }
  ],
  formula: {
    text: "Divide the pressure in kilopascals by 6.894757 (or multiply by 0.1450377) to calculate pounds per square inch.",
    math: "\\text{psi} = \\frac{\\text{kPa}}{6.894757} \\approx \\text{kPa} \\times 0.1450377",
    subtext: "To convert PSI back to kilopascals, multiply the psi value by 6.894757."
  },
  formulaTitle: "Kilopascal to PSI Formula",
  practicalTip: {
    title: "Mental Math 10% + 5% Rule",
    text: "To estimate PSI quickly without a calculator: take 10% of the kPa value and add roughly half of that (15% total), then subtract ~3% (e.g., 200 kPa: 10% = 20, plus half = 30 psi, minus 1 = 29 psi, very close to the exact 29.01 psi)."
  },
  expertNote: {
    title: "Tire Placard Interpretation (Cold Inflation)",
    text: "When reading automotive door-jamb placards with metric ratings (such as 220 kPa or 250 kPa), always measure tire pressure cold before driving. In PSI, 220 kPa equals 32 psi, and 250 kPa equals 36 psi."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Tire Inflation (230 kPa)",
        subtitle: "A vehicle owner's manual specifies a cold tire pressure of 230 kPa. Convert this value to PSI for a standard North American tire gauge.",
        steps: [
          "State starting pressure: 230 kPa.",
          "Apply conversion factor: psi = 230 ÷ 6.894757 (or 230 × 0.1450377).",
          "Calculate: 230 × 0.1450377 = 33.3587.",
          "Result: 230 kPa equals approximately 33.36 psi (commonly rounded to 33.5 or 34 psi on manual dial gauges)."
        ]
      },
      {
        title: "Example 2: Workshop Air Compressor Tank (600 kPa)",
        subtitle: "A shop pneumatic compressor cut-out switch is calibrated to 600 kPa. Express this pressure in PSI.",
        steps: [
          "Identify tank pressure: 600 kPa.",
          "Apply formula: psi = 600 ÷ 6.894757.",
          "Calculate: 600 ÷ 6.894757 = 87.0226.",
          "Result: 600 kPa equals approximately 87.02 psi."
        ]
      },
      {
        title: "Example 3: Domestic Plumbing Water Pressure (350 kPa)",
        subtitle: "A residential pressure-reducing valve maintains municipal water pressure at 350 kPa. Convert to PSI.",
        steps: [
          "State starting pressure: 350 kPa.",
          "Apply conversion: psi = 350 × 0.1450377.",
          "Calculate: 350 × 0.1450377 = 50.7632.",
          "Result: 350 kPa corresponds to approximately 50.76 psi."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to PSI Tire Pressure & Engineering Table",
    headers: ["Kilopascals (kPa)", "PSI (psi)", "Bar Equivalent", "Typical Real-World Context"],
    rows: [
      { fromVal: "50 kPa", toVal: "7.2519 psi", extra: "0.50 bar", extra2: "Low-pressure inflatable boat / pool toy" },
      { fromVal: "100 kPa", toVal: "14.5038 psi", extra: "1.00 bar", extra2: "1 Bar metric reference baseline" },
      { fromVal: "101.325 kPa", toVal: "14.6959 psi", extra: "1.013 bar", extra2: "Standard sea-level atmospheric pressure" },
      { fromVal: "150 kPa", toVal: "21.7557 psi", extra: "1.50 bar", extra2: "Bicycle wide mountain tire" },
      { fromVal: "200 kPa", toVal: "29.0075 psi", extra: "2.00 bar", extra2: "Compact car tire cold pressure (~29 psi)" },
      { fromVal: "220 kPa", toVal: "31.9083 psi", extra: "2.20 bar", extra2: "Standard passenger sedan tire (~32 psi)" },
      { fromVal: "240 kPa", toVal: "34.8091 psi", extra: "2.40 bar", extra2: "Crossover / SUV tire pressure (~35 psi)" },
      { fromVal: "260 kPa", toVal: "37.7098 psi", extra: "2.60 bar", extra2: "Loaded touring vehicle tire (~38 psi)" },
      { fromVal: "300 kPa", toVal: "43.5113 psi", extra: "3.00 bar", extra2: "Light truck / commercial van tire" },
      { fromVal: "420 kPa", toVal: "60.9158 psi", extra: "4.20 bar", extra2: "Compact temporary spare tire (donut)" },
      { fromVal: "600 kPa", toVal: "87.0226 psi", extra: "6.00 bar", extra2: "Road bicycle high-pressure tire" },
      { fromVal: "800 kPa", toVal: "116.0302 psi", extra: "8.00 bar", extra2: "Commercial air compressor supply line" }
    ]
  },
  applications: {
    title: "Primary Automotive & Industrial Applications",
    items: [
      {
        title: "Automotive Tire Maintenance & Import Servicing",
        text: "Automotive technicians convert manufacturer cold inflation pressures from metric kPa (listed on imported European and Asian vehicle door stickers) into PSI for domestic North American tire inflators."
      },
      {
        title: "Aviation Maintenance & Ground Support",
        text: "Commercial jetliner landing gear strut and tire maintenance procedures specify nitrogen charging limits in both kPa and PSI to avoid over-inflation at varying tarmac temperatures."
      },
      {
        title: "Pneumatic Tools & Industrial Air Piping",
        text: "Factory plant engineers size air compressor receiver tanks and set regulator valves by converting kPa sensor readouts into standard shop PSI pressure ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 6.895 instead of dividing: Converting kPa to PSI reduces the numeric value, so you must divide by 6.894757 (or multiply by 0.145038).",
      "Using the wrong approximation constant: Using 0.14 instead of 0.145 leads to a ~3.5% error in critical tire pressure calculations.",
      "Confusing gauge pressure (psig / kPag) with absolute pressure (psia / kPaa)."
    ]
  },
  faqs: [
    {
      question: "How do you convert kPa to PSI?",
      answer: "Divide the pressure value in kPa by 6.894757 (or multiply by 0.145038). For example, 240 kPa ÷ 6.894757 ≈ 34.81 psi."
    },
    {
      question: "How many PSI is 1 kPa?",
      answer: "1 kPa equals approximately 0.145038 PSI (1 / 6.894757 psi)."
    },
    {
      question: "What is 220 kPa in PSI for a car tire?",
      answer: "220 kPa equals approximately 31.91 PSI (commonly set to 32 psi on tire gauges)."
    },
    {
      question: "What is 250 kPa in PSI?",
      answer: "250 kPa equals approximately 36.26 PSI (250 × 0.145038 ≈ 36.26 psi)."
    },
    {
      question: "What is 200 kPa in PSI?",
      answer: "200 kPa equals approximately 29.01 PSI (200 ÷ 6.894757 ≈ 29.01 psi)."
    },
    {
      question: "How do you convert PSI back to kPa?",
      answer: "Multiply the PSI value by 6.894757. For example, 35 psi × 6.894757 ≈ 241.32 kPa."
    },
    {
      question: "What is 100 kPa in PSI?",
      answer: "100 kPa equals approximately 14.50 PSI (100 × 0.145038 ≈ 14.5038 psi)."
    },
    {
      question: "What is standard atmospheric pressure in kPa and PSI?",
      answer: "Standard sea-level atmospheric pressure is 101.325 kPa, which converts to approximately 14.696 PSI."
    }
  ],
  relatedList: [
    { label: "PSI to Kilopascal", from: "psi", to: "kilopascal" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" },
    { label: "Kilopascal to Atmosphere", from: "kilopascal", to: "atmosphere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Tire and Rim Association (TRA) Standards Yearbook: Metric and Customary Tire Inflation Tables.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
