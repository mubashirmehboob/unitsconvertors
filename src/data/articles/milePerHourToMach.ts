import { CustomArticleData } from "./types";

export const milePerHourToMach: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "mach",
  seoTitle: "Mile per Hour to Mach Converter (mph to Mach)",
  metaDescription: "Convert miles per hour to Mach numbers (mph to M) accurately. Sound speed variations with temperature and altitude, supersonic regimes, and worked examples.",
  h1: "Mile per Hour to Mach Converter",
  introduction: [
    "Converting miles per hour to Mach numbers translates customary land and air velocities into the dimensionless speed ratio that defines aerodynamic compressibility in fluid dynamics, military aviation, and rocketry. The Mach number ($M$) represents the ratio of an object's speed to the local speed of sound in the surrounding medium.",
    "Under standard atmospheric conditions at sea level (dry air at 20°C / 68°F), the speed of sound is approximately 343 meters per second, which corresponds to approximately 767.27 miles per hour (1,234.8 km/h). At standard International Standard Atmosphere (ISA) temperature of 15°C (59°F), the speed of sound is 340.29 m/s (761.2 mph), and in the cold upper troposphere at 36,000 feet (−56.5°C), it drops to approximately 660 mph (295 m/s). In standard reference calculations (343 m/s), converting miles per hour to Mach requires dividing the speed in mph by 767.269. This guide provides exact conversion formulas, aerodynamic flight regimes, step-by-step examples, and comprehensive altitude lookup tables."
  ],
  quickAnswer: {
    text: "To convert miles per hour to Mach numbers under standard room-temperature conditions (343 m/s), divide the speed in mph by 767.269. For example, 600 mph equals approximately Mach 0.78.",
    formulaDisplay: "M = mph / 767.269",
    subtext: "Standard sea-level sound speed (20°C): 1 Mach = 767.269 mph (343 m/s).\nHigh-altitude cruise sound speed (36,000 ft, −56.5°C): 1 Mach ≈ 660.1 mph (295 m/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary speed unit measuring statute miles (1,609.344 m) traveled per hour. It is widely used in North American and British automotive transportation, domestic flight tracking, and surface meteorology."
  },
  aboutTargetUnit: {
    title: "Understanding the Mach Number (M)",
    text: "Named after Austrian physicist Ernst Mach, the Mach number is a dimensionless quantity representing the speed of a fluid or moving body divided by the local speed of sound ($a = \\sqrt{\\gamma R T}$). It characterizes subsonic ($M < 0.8$), transonic ($0.8 \\le M < 1.2$), supersonic ($1.2 \\le M < 5.0$), and hypersonic ($M \\ge 5.0$) flight regimes."
  },
  relationship: "Under standard conditions (343 m/s at 20°C), Mach 1 equals approximately 767.269 mph. Dividing any speed in miles per hour by 767.269 gives its Mach number under standard ambient atmospheric temperature.",
  relationshipTitle: "Mile per Hour to Mach Flight Regimes",
  relationshipItems: [
    { label: "Commercial Jetliner (550 mph)", value: "Mach 0.717 (Subsonic)" },
    { label: "Boeing 747 Cruise (600 mph)", value: "Mach 0.782 (Transonic onset)" },
    { label: "Sound Barrier at Sea Level (767.27 mph)", value: "Mach 1.000 (Sonic boom)" },
    { label: "Concorde Cruise (1,354 mph)", value: "Mach 1.765 (Supersonic)" },
    { label: "Hypersonic Boundary (3,836 mph)", value: "Mach 5.000 (Hypersonic)" }
  ],
  formula: {
    text: "Divide the speed in miles per hour by the local speed of sound (767.269 mph at sea level / 20°C) to calculate the Mach number.",
    math: "M = \\frac{\\text{mph}}{767.269}",
    subtext: "To convert Mach back to miles per hour, multiply the Mach number by the local speed of sound in mph (e.g., M × 767.269)."
  },
  formulaTitle: "Mile per Hour to Mach Calculation Formula",
  practicalTip: {
    title: "Rule of Thumb for Jet Airliners",
    text: "Commercial airliners cruise around 550–600 mph, which corresponds to Mach 0.75–0.85 at high altitudes where the speed of sound is colder and slower (~660 mph)."
  },
  expertNote: {
    title: "Temperature-Dependent Speed of Sound",
    text: "The speed of sound in an ideal gas depends solely on absolute temperature ($a = \\sqrt{\\gamma R T}$, where $\\gamma = 1.4$ for air and $R = 287.05\\text{ J/(kg}\\cdot\\text{K)}$), not on barometric air pressure."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Transonic Airliner Cruise (575 mph)",
        subtitle: "Convert a commercial airliner cruise speed of 575 mph into a sea-level standard Mach number.",
        steps: [
          "State velocity: 575 mph.",
          "Apply conversion constant: M = 575 / 767.269.",
          "Calculate: 575 / 767.269 = 0.7494.",
          "Result: 575 mph corresponds to approximately Mach 0.75."
        ]
      },
      {
        title: "Example 2: F-22 Raptor Supercruise (1,450 mph)",
        subtitle: "Calculate the Mach number of a fighter aircraft cruising at 1,450 mph at standard sea level conditions.",
        steps: [
          "State velocity: 1,450 mph.",
          "Divide by sound speed: M = 1,450 / 767.269.",
          "Calculate: 1,450 / 767.269 = 1.8898.",
          "Result: 1,450 mph equals approximately Mach 1.89 (supersonic flight)."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Mach Number Reference Table",
    headers: ["Speed (mph)", "Mach Number (at 20°C)", "Mach Number (at 36,000 ft)", "Flight Regime"],
    rows: [
      { fromVal: "100 mph", toVal: "Mach 0.130", extra: "Mach 0.151", extra2: "Subsonic (Light aircraft)" },
      { fromVal: "300 mph", toVal: "Mach 0.391", extra: "Mach 0.454", extra2: "Subsonic (Turboprop)" },
      { fromVal: "500 mph", toVal: "Mach 0.652", extra: "Mach 0.757", extra2: "Subsonic (Regional jet)" },
      { fromVal: "600 mph", toVal: "Mach 0.782", extra: "Mach 0.909", extra2: "Transonic (Widebody airliner)" },
      { fromVal: "767 mph", toVal: "Mach 1.000", extra: "Mach 1.162", extra2: "Sonic barrier (Sea level)" },
      { fromVal: "1,000 mph", toVal: "Mach 1.303", extra: "Mach 1.515", extra2: "Supersonic (Fighter jet)" },
      { fromVal: "1,350 mph", toVal: "Mach 1.760", extra: "Mach 2.045", extra2: "Mach 2 Concorde cruise" },
      { fromVal: "2,200 mph", toVal: "Mach 2.867", extra: "Mach 3.333", extra2: "SR-71 Blackbird cruise" },
      { fromVal: "3,836 mph", toVal: "Mach 5.000", extra: "Mach 5.811", extra2: "Hypersonic boundary" },
      { fromVal: "17,500 mph", toVal: "Mach 22.808", extra: "Mach 26.511", extra2: "Low Earth Orbit re-entry" }
    ]
  },
  applications: {
    title: "Primary Aerospace & Defense Applications",
    items: [
      {
        title: "Supersonic Aerodynamics & Shockwave Modeling",
        text: "Aerospace engineers use Mach numbers to predict critical Mach numbers ($M_{crit}$), wave drag divergence, and oblique shock wave angles across wing airfoils."
      },
      {
        title: "Avionics Air Data Computers (ADC)",
        text: "Aircraft Mach meters sample Pitot dynamic pressure and static pressure ($q/p_0$) to calculate indicated Mach numbers directly in cockpit instrumentation."
      },
      {
        title: "Spacecraft Atmospheric Re-entry",
        text: "Engineers model thermal protection tile heating during hypersonic spacecraft atmospheric entries (Mach 20–25) where ionization and plasma sheaths form."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Misconceptions",
    items: [
      "Assuming the speed of sound is constant at all altitudes (it drops from 767 mph at sea level to 660 mph in the cold upper atmosphere).",
      "Treating Mach as a unit with dimensions like 'Machs per hour' (Mach is a dimensionless ratio).",
      "Confusing indicated airspeed (IAS) with True Airspeed (TAS) when computing Mach numbers at high altitudes."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to Mach?",
      answer: "Divide the speed in mph by the local speed of sound in air (767.269 mph at standard sea level / 20°C)."
    },
    {
      question: "How fast is Mach 1 in mph?",
      answer: "At standard sea level temperature (20°C / 68°F), Mach 1 is approximately 767.27 mph. At 36,000 feet (−56.5°C), Mach 1 is approximately 660.1 mph."
    },
    {
      question: "What is 600 mph in Mach?",
      answer: "At standard sea level, 600 mph is approximately Mach 0.78. At high cruising altitude (36,000 ft), 600 mph corresponds to Mach 0.91."
    },
    {
      question: "What is Mach 2 in mph?",
      answer: "At standard sea level, Mach 2 equals approximately 1,534.54 mph (2 × 767.269 mph)."
    },
    {
      question: "What is hypersonic speed in mph?",
      answer: "Hypersonic flight begins at Mach 5, which corresponds to approximately 3,836 mph (6,174 km/h) at standard sea level."
    },
    {
      question: "Why does the speed of sound decrease at high altitude?",
      answer: "The speed of sound depends directly on air temperature ($a \\propto \\sqrt{T}$). Because the troposphere cools with altitude (down to −56.5°C at 36,000 ft), the speed of sound decreases accordingly."
    },
    {
      question: "How fast was the Concorde in mph and Mach?",
      answer: "The Concorde supersonic airliner cruised at Mach 2.04 at 60,000 feet, which corresponded to a ground true airspeed of approximately 1,354 mph (2,179 km/h)."
    },
    {
      question: "How do you convert Mach back to mph?",
      answer: "Multiply the Mach number by the speed of sound in mph (e.g., Mach 1.5 × 767.269 = 1,150.90 mph at sea level)."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Mach", from: "kilometer-per-hour", to: "mach" },
    { label: "Meter per Second to Mach", from: "meter-per-second", to: "mach" },
    { label: "Mile per Hour to Kilometer per Hour", from: "mile-per-hour", to: "kilometer-per-hour" }
  ],
  references: [
    "NASA Glenn Research Center: Mach Number and Speed of Sound Equations",
    "ICAO Standard Atmosphere (Doc 7488/3)"
  ]
};
