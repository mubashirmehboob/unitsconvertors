import { CustomArticleData } from "./types";

export const footPerSecondToKilometerPerHour: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Foot per Second to Kilometer per Hour (ft/s to km/h)",
  metaDescription: "Convert feet per second to kilometers per hour (ft/s to km/h) with exact precision. Learn the official 1.09728 factor, ballistics and automotive formulas, and tables.",
  h1: "Foot per Second to Kilometer per Hour Converter",
  introduction: [
    "Converting feet per second to kilometers per hour connects the primary velocity metric of American ballistics, rocketry, and fluid mechanics with the standard metric speed unit displayed on vehicles and highways worldwide. Whether analyzing projectile flight, aerodynamic test tunnels, or sporting events, converting feet per second (ft/s or fps) to kilometers per hour (km/h) is a standard daily calculation.",
    "Because 1 international foot is defined as exactly 0.3048 meters and 1 hour contains 3,600 seconds, the conversion factor is an exact finite decimal: 1 ft/s = 1.09728 km/h. This means feet per second and kilometers per hour are remarkably close in magnitude—1 ft/s is just 9.7% faster than 1 km/h. This article details the mathematical derivation, worked conversion examples, practical applications, and reference tables."
  ],
  quickAnswer: {
    text: "One foot per second (1 ft/s) is equal to exactly 1.09728 kilometers per hour. To convert feet per second to kilometers per hour, multiply the ft/s value by 1.09728.",
    formulaDisplay: "km/h = ft/s × 1.09728",
    subtext: "An exact mathematical factor derived from 0.3048 meters per foot multiplied by 3.6."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an imperial and US customary unit quantifying the linear distance in feet traveled in one second. It is the primary velocity metric for ammunition chronographs, missile test ranges, air duct velocities, and stream gauging in the United States."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is the predominant metric unit of speed worldwide, accepted for use alongside the SI system. Used by highway authorities, meteorologists, and rail networks globally, 1 km/h represents 1,000 meters traveled in 3,600 seconds."
  },
  relationship: "Because 1 foot equals 0.3048 meters and 1 m/s equals 3.6 km/h, multiplying 0.3048 by 3.6 yields 1.09728 km/h per ft/s. The two units are nearly 1:1, with 1 ft/s being approximately 9.73% faster than 1 km/h.",
  relationshipTitle: "Near 1-to-1 Scale Relationship",
  relationshipItems: [
    { label: "1.0 ft/s", value: "1.09728 km/h (Exact defined factor)" },
    { label: "10 ft/s", value: "10.9728 km/h (Jogging pace)" },
    { label: "50 ft/s", value: "54.864 km/h (Urban car speed limit)" },
    { label: "88 ft/s", value: "96.56064 km/h (Exact 60 mph highway speed)" },
    { label: "100 ft/s", value: "109.728 km/h (Highway driving speed)" }
  ],
  formula: {
    text: "Multiply the velocity in feet per second by 1.09728 to find the speed in kilometers per hour.",
    math: "km/h = ft/s × 1.09728",
    subtext: "To convert kilometers per hour back to feet per second, divide by 1.09728 (or multiply by approximately 0.911344)."
  },
  formulaTitle: "Foot per Second to Kilometer per Hour Formula",
  practicalTip: {
    title: "Quick Mental Approximation",
    text: "Because 1.09728 is close to 1.1, you can estimate km/h in your head by adding 10% to the ft/s value. For example, 50 ft/s + 5 = 55 km/h (exact is 54.864 km/h)."
  },
  expertNote: {
    title: "Ballistics Chronograph Conversion",
    text: "American ammunition manufacturers list muzzle velocities in ft/s (e.g., a 9mm round at 1,150 ft/s). Multiplying by 1.09728 quickly reveals that this bullet travels at 1,261.87 km/h—well above the speed of sound."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Professional Sprinter (36 ft/s)",
        subtitle: "Convert a top sprinting speed of 36 ft/s into kilometers per hour.",
        steps: [
          "Identify velocity: 36 ft/s.",
          "Apply formula: km/h = 36 × 1.09728.",
          "Calculate: 36 × 1.09728 = 39.50208 km/h.",
          "Result: 36 ft/s equals approximately 39.50 km/h (close to Usain Bolt's peak sprint speed)."
        ]
      },
      {
        title: "Example 2: Handgun Muzzle Velocity (1,000 ft/s)",
        subtitle: "Convert a bullet speed of 1,000 ft/s into km/h.",
        steps: [
          "Identify velocity: 1,000 ft/s.",
          "Multiply: 1,000 × 1.09728 = 1,097.28 km/h.",
          "Result: 1,000 ft/s equals exactly 1,097.28 km/h."
        ]
      },
      {
        title: "Example 3: Storm Wind Gust (120 ft/s)",
        subtitle: "Convert an extreme wind gust of 120 ft/s into kilometers per hour.",
        steps: [
          "Identify velocity: 120 ft/s.",
          "Multiply: 120 × 1.09728 = 131.6736 km/h.",
          "Result: 120 ft/s equals approximately 131.67 km/h (Category 1 hurricane force)."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Kilometer per Hour Conversion Table",
    headers: ["Feet per Second (ft/s)", "Kilometers per Hour (km/h)", "Everyday & Technical Context"],
    rows: [
      { fromVal: "1 ft/s", toVal: "1.10 km/h", extra: "Slow walking pace" },
      { fromVal: "3 ft/s", toVal: "3.29 km/h", extra: "Casual strolling speed" },
      { fromVal: "5 ft/s", toVal: "5.49 km/h", extra: "Brisk fitness walk" },
      { fromVal: "10 ft/s", toVal: "10.97 km/h", extra: "Moderate running speed" },
      { fromVal: "20 ft/s", toVal: "21.95 km/h", extra: "City bicycle cruising speed" },
      { fromVal: "30 ft/s", toVal: "32.92 km/h", extra: "Suburban school zone speed limit" },
      { fromVal: "50 ft/s", toVal: "54.86 km/h", extra: "Urban arterial roadway speed (~34 mph)" },
      { fromVal: "88 ft/s", toVal: "96.56 km/h", extra: "Highway speed limit (exactly 60 mph)" },
      { fromVal: "100 ft/s", toVal: "109.73 km/h", extra: "Fast motorway traffic speed (~68 mph)" },
      { fromVal: "250 ft/s", toVal: "274.32 km/h", extra: "Takeoff speed of a commercial airliner" },
      { fromVal: "1,125 ft/s", toVal: "1,234.44 km/h", extra: "Speed of sound at sea level (Mach 1)" },
      { fromVal: "3,000 ft/s", toVal: "3,291.84 km/h", extra: "High-power rifle projectile (Mach ~2.7)" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to km/h Conversions",
    items: [
      {
        title: "International Ammunition & Ballistics Marketing",
        text: "Arms manufacturers convert US ballistic testing chronographs (measured in ft/s) to km/h for European, Asian, and military NATO metric documentation."
      },
      {
        title: "Aviation & Aerodynamic Research",
        text: "Flight engineers cross-reference low-speed wind tunnel testing data (recorded in ft/s) with international airport ground speeds (reported in km/h)."
      },
      {
        title: "Meteorology & Extreme Weather Reporting",
        text: "Meteorologists convert tornado anemometer measurements and wind tunnel damage thresholds from ft/s to km/h for international public weather warnings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1.09728 instead of multiplying (1 ft/s is faster than 1 km/h, so the km/h value must always be slightly larger).",
      "Confusing km/h with miles per hour (mph); 88 ft/s is exactly 60 mph, but converts to 96.56 km/h.",
      "Rounding 1.09728 to 1.0 in precision ballistics or avionics, which causes a cumulative ~9.7% calculation error."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to kilometers per hour?",
      answer: "Multiply the feet per second value by exactly 1.09728. For example, 100 ft/s × 1.09728 = 109.728 km/h."
    },
    {
      question: "Is 1 ft/s faster than 1 km/h?",
      answer: "Yes, 1 ft/s is slightly faster than 1 km/h. Specifically, 1 ft/s equals 1.09728 km/h, making it roughly 9.73% faster."
    },
    {
      question: "What is 88 ft/s in km/h?",
      answer: "88 ft/s equals exactly 96.56064 km/h (this is equivalent to exactly 60 mph)."
    },
    {
      question: "What is 1,000 ft/s in km/h?",
      answer: "1,000 ft/s equals exactly 1,097.28 km/h."
    },
    {
      question: "How do you convert km/h back to ft/s?",
      answer: "Divide the speed in km/h by 1.09728 (or multiply by approximately 0.911344). For example, 100 km/h / 1.09728 = 91.1344 ft/s."
    },
    {
      question: "Why is 1.09728 an exact conversion factor?",
      answer: "Because 1 foot is defined as exactly 0.3048 meters and 1 hour contains 3,600 seconds. 0.3048 × 3,600 / 1,000 = 1.09728 km/h."
    },
    {
      question: "What is the speed of sound in ft/s and km/h?",
      answer: "At standard sea level (20 °C), sound travels at approximately 1,125.33 ft/s, which converts to approximately 1,234.8 km/h."
    },
    {
      question: "How do you quickly estimate ft/s to km/h without a calculator?",
      answer: "Add 10% to the ft/s number. For example, 80 ft/s + 8 = 88 km/h (the exact value is 87.78 km/h), providing an estimate accurate to within 0.25%."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Foot per Second", from: "kilometer-per-hour", to: "foot-per-second" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" },
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "ISO 80000-3: Space and Time Units and Standards",
    "SAE International - Standard J670: Vehicle Dynamics Terminology"
  ]
};
