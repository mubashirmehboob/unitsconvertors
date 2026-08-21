import { CustomArticleData } from "./types";

export const kilometerPerHourToFootPerSecond: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "foot-per-second",
  seoTitle: "Kilometer per Hour to Foot per Second Converter (km/h to ft/s)",
  metaDescription: "Convert kilometers per hour to feet per second (km/h to ft/s) with precision. Formula, calculation steps, ballistics velocity tables, and aviation examples.",
  h1: "Kilometer per Hour to Foot per Second Converter",
  introduction: [
    "Converting kilometers per hour to feet per second translates metric road and wind speeds into customary imperial velocities commonly used in aerospace dynamics, civil ballistics, acoustic testing, and structural fluid simulations. While international highway systems measure speed in kilometers per hour, engineering aerodynamics and internal ballistics in the United States routinely compute velocities in feet per second.",
    "Because one international foot is standardized at exactly 0.3048 meters and one hour contains 3,600 seconds, one foot per second equals exactly 1.09728 kilometers per hour. Conversely, one kilometer per hour equals approximately 0.911344 feet per second. To convert kilometers per hour into feet per second, divide the velocity by 1.09728 (or multiply by approximately 0.911344). This guide details the exact mathematical formulas, practical conversion steps, worked engineering examples, and comprehensive velocity reference tables."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to feet per second, divide the speed by 1.09728 (or multiply by 0.911344). For example, 100 km/h equals approximately 91.13 ft/s.",
    formulaDisplay: "ft/s = (km/h) / 1.09728",
    subtext: "Exact factor: 1 ft/s = 1.09728 km/h.\n1 km/h = 1,000 / 1,097.28 ft/s ≈ 0.911344 ft/s."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer per Hour (km/h)",
    text: "The kilometer per hour is the standard metric measurement of speed, expressing how many kilometers an object covers in one hour. Used on roadways across Europe, Asia, Africa, and the Americas, 1 km/h corresponds to 0.27778 meters per second."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second (ft/s)",
    text: "The foot per second (fps or ft/s) is an imperial and US customary unit of speed indicating the distance in feet covered in one second. It is extensively applied in ballistics muzzle velocity measurements, fluid mechanics, and wind tunnel aerodynamic simulations."
  },
  relationship: "One kilometer per hour equals approximately 0.911344 feet per second, while one foot per second equals exactly 1.09728 kilometers per hour. Dividing any km/h measurement by 1.09728 converts it into feet per second.",
  relationshipTitle: "Kilometer per Hour to Foot per Second Milestones",
  relationshipItems: [
    { label: "Walking Speed (5 km/h)", value: "4.5567 ft/s" },
    { label: "Urban Speed Limit (50 km/h)", value: "45.5672 ft/s" },
    { label: "Highway Speed (100 km/h)", value: "91.1344 ft/s" },
    { label: "High-Speed Rail (300 km/h)", value: "273.4033 ft/s" },
    { label: "Exact 100 ft/s Benchmark", value: "109.728 km/h" }
  ],
  formula: {
    text: "Divide the speed in kilometers per hour by the exact factor 1.09728 to obtain feet per second (or multiply by 0.9113444).",
    math: "\\text{ft/s} = \\frac{\\text{km/h}}{1.09728}",
    subtext: "To convert feet per second back into kilometers per hour, multiply the ft/s value by 1.09728."
  },
  formulaTitle: "Kilometer per Hour to Foot per Second Formula",
  practicalTip: {
    title: "Quick 10% Subtraction Mental Estimate",
    text: "For a rapid mental calculation: subtract approximately 10% from the km/h value to estimate ft/s (e.g., 100 km/h minus 10% ≈ 90 ft/s, very close to the true 91.13 ft/s)."
  },
  expertNote: {
    title: "Accurate Ballistics & Collision Reconstruction",
    text: "Traffic accident investigators and forensic collision specialists convert vehicle telemetry in km/h into ft/s because braking distance calculations ($d = v^2 / 2g\\mu$) rely on gravitational acceleration $g$ measured in $\\text{ft/s}^2$ (32.174 ft/s²)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Urban Vehicle Speed (60 km/h)",
        subtitle: "Convert a city traffic speed of 60 km/h into feet per second for collision impact analysis.",
        steps: [
          "State input value: 60 km/h.",
          "Apply conversion factor: ft/s = 60 / 1.09728.",
          "Calculate: 60 / 1.09728 = 54.6807.",
          "Result: 60 km/h equals approximately 54.68 ft/s."
        ]
      },
      {
        title: "Example 2: Severe Gale Wind Velocity (90 km/h)",
        subtitle: "Convert a storm wind gust of 90 km/h into ft/s for structural wind-load pressure evaluation.",
        steps: [
          "Identify wind velocity: 90 km/h.",
          "Apply formula: ft/s = 90 / 1.09728.",
          "Calculate: 90 / 1.09728 = 82.0210.",
          "Result: 90 km/h corresponds to approximately 82.02 ft/s."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Foot per Second Reference Table",
    headers: ["Speed (km/h)", "Speed (ft/s)", "Speed (m/s)", "Practical Example"],
    rows: [
      { fromVal: "10 km/h", toVal: "9.1134 ft/s", extra: "2.7778 m/s", extra2: "Jogging pace" },
      { fromVal: "30 km/h", toVal: "27.3403 ft/s", extra: "8.3333 m/s", extra2: "Residential zone limit" },
      { fromVal: "50 km/h", toVal: "45.5672 ft/s", extra: "13.8889 m/s", extra2: "Urban boulevard speed" },
      { fromVal: "80 km/h", toVal: "72.9076 ft/s", extra: "22.2222 m/s", extra2: "Rural secondary road" },
      { fromVal: "100 km/h", toVal: "91.1344 ft/s", extra: "27.7778 m/s", extra2: "Expressway speed" },
      { fromVal: "120 km/h", toVal: "109.3613 ft/s", extra: "33.3333 m/s", extra2: "Motorway upper limit" },
      { fromVal: "150 km/h", toVal: "136.7017 ft/s", extra: "41.6667 m/s", extra2: "Fast intercity train" },
      { fromVal: "200 km/h", toVal: "182.2689 ft/s", extra: "55.5556 m/s", extra2: "High-speed sports car" },
      { fromVal: "300 km/h", toVal: "273.4033 ft/s", extra: "83.3333 m/s", extra2: "Commercial bullet train" },
      { fromVal: "1,000 km/h", toVal: "911.3444 ft/s", extra: "277.7778 m/s", extra2: "Aviation transonic test" }
    ]
  },
  applications: {
    title: "Key Engineering & Technical Applications",
    items: [
      {
        title: "Forensic Accident Reconstruction",
        text: "Investigators convert vehicular speeds into ft/s to calculate sightline reaction times, skid-mark stopping distances, and pedestrian impact dissipation energies."
      },
      {
        title: "Aerospace Wind Tunnel Testing",
        text: "Subsonic aerodynamic facilities calibrate scale-model flow sensors and Pitot probes by converting wind velocities between km/h and ft/s."
      },
      {
        title: "Civil Infrastructure & Ventilation Systems",
        text: "Tunnel ventilation engineers calculate emergency air circulation and smoke exhaust velocities by converting airflow speeds from km/h into ft/s."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.09728 instead of dividing, which inverts the conversion direction.",
      "Confusing ft/s (feet per second) with fps (frames per second in video editing).",
      "Using the international yard conversion ratio without accounting for the 3,600-second hour factor."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to ft/s?",
      answer: "Divide the speed in km/h by 1.09728 (or multiply by approximately 0.911344)."
    },
    {
      question: "How many feet per second is 100 km/h?",
      answer: "100 km/h equals exactly 100 / 1.09728 ≈ 91.1344 feet per second."
    },
    {
      question: "Why is the factor 1.09728 used for km/h to ft/s?",
      answer: "Because 1 foot = 0.3048 m, and 1 hour = 3600 seconds. Therefore, (0.3048 m × 3600 s) / 1000 m = 1.09728 km/h per ft/s."
    },
    {
      question: "What is 50 km/h in feet per second?",
      answer: "50 km/h equals approximately 45.57 ft/s."
    },
    {
      question: "How do you convert feet per second back to km/h?",
      answer: "Multiply the velocity in ft/s by 1.09728 (e.g., 60 ft/s × 1.09728 = 65.8368 km/h)."
    },
    {
      question: "Is 1 km/h faster or slower than 1 ft/s?",
      answer: "1 km/h is slightly slower than 1 ft/s. Specifically, 1 km/h ≈ 0.9113 ft/s, meaning 1 ft/s covers about 9.7% more distance each second."
    },
    {
      question: "How do you calculate stopping distance using ft/s?",
      answer: "In ft/s, stopping distance is calculated using the formula d = v² / (2 × 32.174 × μ), where v is speed in ft/s and μ is the pavement friction coefficient."
    },
    {
      question: "What is 1,000 km/h in ft/s?",
      answer: "1,000 km/h equals approximately 911.34 feet per second."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Meter per Second", from: "kilometer-per-hour", to: "meter-per-second" },
    { label: "Mile per Hour to Foot per Second", from: "mile-per-hour", to: "foot-per-second" },
    { label: "Meter per Second to Foot per Second", from: "meter-per-second", to: "foot-per-second" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI)",
    "ISO 80000-3: Quantities and Units — Space and Time"
  ]
};
