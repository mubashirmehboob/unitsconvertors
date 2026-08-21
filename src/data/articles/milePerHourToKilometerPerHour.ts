import { CustomArticleData } from "./types";

export const milePerHourToKilometerPerHour: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Mile per Hour to Kilometer per Hour Converter (mph to km/h)",
  metaDescription: "Convert miles per hour to kilometers per hour (mph to km/h) instantly. Exact 1.609344 conversion factor, driving speed limit tables, and mental math tips.",
  h1: "Mile per Hour to Kilometer per Hour Converter",
  introduction: [
    "Converting miles per hour to kilometers per hour is one of the most essential velocity conversions in international travel, automotive engineering, cross-border freight logistics, and global sports telemetry. While drivers in the United States and the United Kingdom follow speed limits and vehicle dashboards calibrated in miles per hour, virtually the entire rest of the world governs road transport in kilometers per hour.",
    "Under the international measurement conventions established in 1959, one international statute mile is defined as exactly 1.609344 kilometers. Because time remains identical (1 hour = 1 hour), one mile per hour equals exactly 1.609344 kilometers per hour. To convert miles per hour to kilometers per hour, multiply the speed value by 1.609344 (or divide by approximately 0.621371). This guide provides the exact mathematical relationship, step-by-step conversion examples, practical travel conversion techniques, and comprehensive speed limit tables."
  ],
  quickAnswer: {
    text: "To convert miles per hour to kilometers per hour, multiply the speed in mph by 1.609344. For example, 60 mph equals exactly 96.56 km/h.",
    formulaDisplay: "km/h = mph × 1.609344",
    subtext: "Exact conversion factor: 1 mph = 1.609344 km/h.\n1 km/h ≈ 0.621371 mph."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary speed unit representing the distance in international statute miles covered in one hour. Widely used across the US, UK, and British Overseas Territories, 1 mph equals 0.44704 m/s."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour (km/h or kph) is the standard metric speed unit recognized globally by the SI framework. It measures the distance in kilometers covered in one hour, where 1 km/h equals 1,000 meters per 3,600 seconds (~0.2778 m/s)."
  },
  relationship: "One mile per hour equals exactly 1.609344 kilometers per hour, and one kilometer per hour equals approximately 0.621371 miles per hour. Multiplying any mph speed by 1.609344 produces its exact metric equivalent.",
  relationshipTitle: "Mile per Hour to Kilometer per Hour Benchmarks",
  relationshipItems: [
    { label: "Residential Zone (20 mph)", value: "32.1869 km/h" },
    { label: "Urban Limit (30 mph)", value: "48.2803 km/h (~50 km/h)" },
    { label: "Standard US Highway (60 mph)", value: "96.5606 km/h" },
    { label: "UK Motorway Limit (70 mph)", value: "112.6541 km/h" },
    { label: "Exact 100 mph Milestone", value: "160.9344 km/h" }
  ],
  formula: {
    text: "Multiply the velocity in miles per hour by the exact factor 1.609344 to find kilometers per hour.",
    math: "\\text{km/h} = \\text{mph} \\times 1.609344",
    subtext: "To convert kilometers per hour back to miles per hour, divide the value by 1.609344 (or multiply by ~0.621371)."
  },
  formulaTitle: "Mile per Hour to Kilometer per Hour Formula",
  practicalTip: {
    title: "Fibonacci Sequence Mental Math Shortcut",
    text: "Because the golden ratio (1.618) is very close to 1.609344, consecutive Fibonacci numbers approximate the conversion: 30 mph ≈ 50 km/h, 50 mph ≈ 80 km/h, and 80 mph ≈ 130 km/h."
  },
  expertNote: {
    title: "Exact Legal Definition",
    text: "Since the 1959 agreement between the US, UK, Canada, Australia, New Zealand, and South Africa, 1 yard is fixed at 0.9144 meters, making 1 mile = 1,760 yards = 1,609.344 meters, making 1.609344 an exact terminating decimal."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: US Interstate to Canadian Highway (65 mph)",
        subtitle: "Convert a US speed limit of 65 mph to km/h for driving across the Canadian border.",
        steps: [
          "Identify speed limit: 65 mph.",
          "Apply conversion constant: km/h = 65 × 1.609344.",
          "Calculate: 65 × 1.609344 = 104.60736.",
          "Result: 65 mph equals approximately 104.61 km/h (typically posted as 100 or 105 km/h)."
        ]
      },
      {
        title: "Example 2: Sports Car Acceleration Test (120 mph)",
        subtitle: "Convert a quarter-mile trap speed of 120 mph into km/h for an international automotive review.",
        steps: [
          "State velocity: 120 mph.",
          "Multiply by 1.609344: 120 × 1.609344 = 193.12128.",
          "Result: 120 mph equals exactly 193.12 km/h."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Kilometer per Hour Reference Table",
    headers: ["Speed (mph)", "Speed (km/h)", "Speed (m/s)", "Road Sign / Common Context"],
    rows: [
      { fromVal: "10 mph", toVal: "16.0934 km/h", extra: "4.4704 m/s", extra2: "Parking lot / school lane" },
      { fromVal: "20 mph", toVal: "32.1869 km/h", extra: "8.9408 m/s", extra2: "UK residential zone (20 zone)" },
      { fromVal: "30 mph", toVal: "48.2803 km/h", extra: "13.4112 m/s", extra2: "UK built-up area (~50 km/h)" },
      { fromVal: "40 mph", toVal: "64.3738 km/h", extra: "17.8816 m/s", extra2: "Suburban ring road" },
      { fromVal: "50 mph", toVal: "80.4672 km/h", extra: "22.3520 m/s", extra2: "Single carriageway speed" },
      { fromVal: "60 mph", toVal: "96.5606 km/h", extra: "26.8224 m/s", extra2: "Standard US national speed" },
      { fromVal: "70 mph", toVal: "112.6541 km/h", extra: "31.2928 m/s", extra2: "UK motorway / US freeway" },
      { fromVal: "80 mph", toVal: "128.7475 km/h", extra: "35.7632 m/s", extra2: "Texas / Nevada interstate limit" },
      { fromVal: "100 mph", toVal: "160.9344 km/h", extra: "44.7040 m/s", extra2: "High-speed performance test" },
      { fromVal: "150 mph", toVal: "241.4016 km/h", extra: "67.0560 m/s", extra2: "Supercar high-speed cruising" }
    ]
  },
  applications: {
    title: "Key Industry & Everyday Applications",
    items: [
      {
        title: "International Tourism & Rental Vehicles",
        text: "Drivers crossing international borders (e.g., US to Canada/Mexico or UK to continental Europe) convert speedometer units to avoid traffic violations and navigate speed camera zones."
      },
      {
        title: "Global Automotive Manufacturing & OBD-II Telemetry",
        text: "Engine control modules (ECUs) and diagnostic scan tools toggle between imperial and metric vehicle speed sensor (VSS) pulses using the exact 1.609344 constant."
      },
      {
        title: "Aviation & Weather Broadcasting",
        text: "Ground vehicle support crews, airport operations, and television meteorologists convert hurricane wind gusts and surface speeds between British/US and metric viewers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using 1.6 instead of the exact 1.609344, which causes a 0.58% error (almost 1 km/h off at 100 mph).",
      "Confusing statute miles (1.609344 km) with nautical miles (1.852 km).",
      "Dividing by 1.609344 instead of multiplying when converting mph to km/h."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to km/h?",
      answer: "Multiply the speed in miles per hour by 1.609344 (or divide by approximately 0.621371)."
    },
    {
      question: "What is 60 mph in km/h?",
      answer: "60 mph equals exactly 96.56064 km/h."
    },
    {
      question: "What is 70 mph in km/h?",
      answer: "70 mph equals exactly 112.65408 km/h."
    },
    {
      question: "How do you convert km/h back to mph?",
      answer: "Divide the speed in km/h by 1.609344 (or multiply by approximately 0.621371)."
    },
    {
      question: "What is 30 mph in km/h?",
      answer: "30 mph equals exactly 48.28032 km/h (commonly rounded to 50 km/h in European road equivalents)."
    },
    {
      question: "What is 100 mph in km/h?",
      answer: "100 mph equals exactly 160.9344 km/h."
    },
    {
      question: "Why does 1 mile equal 1.609344 kilometers?",
      answer: "By international agreement in 1959, 1 inch was defined as exactly 25.4 mm. Multiplying by 12 inches/foot and 5,280 feet/mile produces exactly 1,609.344 meters (1.609344 km)."
    },
    {
      question: "What is 45 mph in km/h?",
      answer: "45 mph equals exactly 72.42048 km/h."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Mile per Hour", from: "kilometer-per-hour", to: "mile-per-hour" },
    { label: "Mile per Hour to Meter per Second", from: "mile-per-hour", to: "meter-per-second" },
    { label: "Mile per Hour to Knot", from: "mile-per-hour", to: "knot" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "ISO 80000-3: Quantities and Units — Space and Time"
  ]
};
