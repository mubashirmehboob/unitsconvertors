import { CustomArticleData } from "./types";

export const knotToFootPerSecond: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "foot-per-second",
  seoTitle: "Knot to Foot per Second Converter (kn to ft/s) - UnitsConvertors",
  metaDescription: "Convert knots to feet per second (kn to ft/s) accurately. Master the 1.68781 multiplier, naval carrier catapult launches, wind drift calculations, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/knot-to-foot-per-second",
  h1: "Knot to Foot per Second Converter",
  introduction: [
    "Converting knots to feet per second translates maritime navigation speeds, ocean current measurements, and aviation airspeeds into the standard velocity unit of the Imperial and U.S. customary engineering systems. While naval vessels and aircraft operate using knots, American aerodynamic wind tunnels, projectile ballistics models, aircraft carrier catapult launch systems, and coastal civil engineering specifications frequently calculate dynamic flow forces in feet per second.",
    "One knot represents one international nautical mile per hour, corresponding to exactly 1,852 meters per 3,600 seconds. In the U.S. customary system, one international foot is defined as exactly 0.3048 meters. Dividing the meter-per-second equivalent of one knot (approximately 0.514444 m/s) by 0.3048 reveals that one knot equals exactly 1,852 divided by 1,097.28 feet per second, or approximately 1.687810 ft/s.",
    "To convert knots to feet per second, multiply the speed in knots by approximately 1.68781 (or divide by 0.592484). For example, 10 knots equals approximately 16.88 ft/s, and 60 knots equals approximately 101.27 ft/s. This technical guide explains the conversion derivation, provides worked examples in naval aviation and ballistics, and features a detailed reference conversion table."
  ],
  quickAnswer: {
    text: "To convert knots to feet per second, multiply the speed in knots by 1.68781 (or divide by 0.592484). For example, 15 knots equals approximately 25.32 ft/s, and 30 knots equals approximately 50.63 ft/s.",
    formulaDisplay: "ft/s = kn × 1.68781",
    subtext: "1 knot = 1,852 / 1,097.28 ft/s ≈ 1.687810 ft/s | 1 ft/s ≈ 0.592484 kn"
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is an internationally recognized speed unit equal to one nautical mile per hour (1.852 km/h). Standardized across the globe, it serves as the foundational velocity measurement for maritime transport, naval warships, ocean weather forecasting, and aviation flight plans."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an engineering unit of speed in the U.S. customary and British Imperial systems, measuring the distance in feet traveled in one second. It is the primary velocity metric for American aerospace engineering, ballistics, fluid mechanics, and structural wind loading."
  },
  relationship: "One knot is equal to approximately 1.687810 feet per second. Conversely, one foot per second equals approximately 0.592484 knots. Multiplying any knot speed by 1.68781 converts it directly into feet per second.",
  relationshipTitle: "Knot to Foot per Second Operational Milestones",
  relationshipItems: [
    { label: "1 Knot (Gentle drift)", value: "1.6878 ft/s" },
    { label: "10 Knots (Harbor approach speed)", value: "16.8781 ft/s" },
    { label: "30 Knots (Container ship cruising speed)", value: "50.6343 ft/s" },
    { label: "60 Knots (Storm wind gust)", value: "101.2686 ft/s" },
    { label: "150 Knots (Carrier catapult launch speed)", value: "253.1715 ft/s" },
    { label: "500 Knots (High-speed jet cruise)", value: "843.9049 ft/s" }
  ],
  formula: {
    text: "Multiply the velocity in knots by the exact ratio 1,852 / 1,097.28 (approximately 1.687810) to obtain feet per second.",
    math: "\\text{ft/s} = \\text{kn} \\times \\frac{1,852}{1,097.28} \\approx \\text{kn} \\times 1.687810",
    subtext: "To convert feet per second back to knots, multiply the ft/s value by 0.592484 (or divide by 1.687810)."
  },
  formulaTitle: "Knot to Foot per Second Mathematical Formula",
  practicalTip: {
    title: "Add 70% Mental Approximation",
    text: "For a rapid mental estimate: add 70% to the knot value (or multiply by 1.7). For example, 20 knots + 70% (14) = 34 ft/s (very close to the exact 33.76 ft/s). For 50 knots: 50 × 1.7 = 85 ft/s (exact is 84.39 ft/s)."
  },
  expertNote: {
    title: "Aircraft Carrier Catapult Launch Dynamics",
    text: "Naval catapult officers (shooters) verify aircraft launch weights and wind over deck in knots, but steam and electromagnetic catapult acceleration profiles (EMALS) are programmed in feet per second squared ($ft/s^2$) with end velocities measured in feet per second. Converting launch target speeds from knots (e.g., 150 kn) to feet per second (253.2 ft/s) ensures adequate wing lift at the deck edge."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Aircraft Carrier Catapult End Speed",
        subtitle: "A naval strike fighter requires a takeoff airspeed of 145 knots at the end of the catapult stroke. Convert this velocity into feet per second.",
        steps: [
          "State starting velocity: 145 knots.",
          "Apply conversion multiplier: ft/s = 145 × 1.687810.",
          "Calculate: 145 × 1.687810 ≈ 244.7325.",
          "Result: 145 knots equals approximately 244.73 feet per second."
        ]
      },
      {
        title: "Example 2: Marine Storm Wind Gust Crosswind",
        subtitle: "A crosswind gust of 45 knots strikes a bridge tower under construction. Convert this gust velocity into ft/s for structural wind shear calculations.",
        steps: [
          "Identify wind speed: 45 kn.",
          "Multiply by 1.68781: 45 × 1.68781 ≈ 75.9515.",
          "Result: 45 knots equals approximately 75.95 feet per second."
        ]
      },
      {
        title: "Example 3: Hydrographic River Current Survey",
        subtitle: "An estuarine tidal current is measured at 4.2 knots during spring tide ebb. Express this velocity in feet per second.",
        steps: [
          "State starting value: 4.2 kn.",
          "Multiply by 1.68781: 4.2 × 1.68781 ≈ 7.0888.",
          "Result: 4.2 knots equals approximately 7.09 feet per second."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Foot per Second Reference Table",
    headers: ["Speed (kn)", "Speed (ft/s)", "Speed (mph)", "Maritime & Engineering Context"],
    rows: [
      { fromVal: "1 kn", toVal: "1.6878 ft/s", extra: "1.1508 mph", extra2: "Slow tidal drift" },
      { fromVal: "3 kn", toVal: "5.0634 ft/s", extra: "3.4523 mph", extra2: "Typical human walking pace" },
      { fromVal: "5 kn", toVal: "8.4390 ft/s", extra: "5.7539 mph", extra2: "Marina speed limit" },
      { fromVal: "10 kn", toVal: "16.8781 ft/s", extra: "11.5078 mph", extra2: "Harbor pilot vessel speed" },
      { fromVal: "15 kn", toVal: "25.3171 ft/s", extra: "17.2617 mph", extra2: "Bulk carrier cruising speed" },
      { fromVal: "20 kn", toVal: "33.7562 ft/s", extra: "23.0156 mph", extra2: "Modern container ship cruise" },
      { fromVal: "30 kn", toVal: "50.6343 ft/s", extra: "34.5234 mph", extra2: "High-speed passenger ferry" },
      { fromVal: "40 kn", toVal: "67.5124 ft/s", extra: "46.0312 mph", extra2: "Gale-force ocean winds" },
      { fromVal: "60 kn", toVal: "101.2686 ft/s", extra: "69.0468 mph", extra2: "Severe storm wind threshold" },
      { fromVal: "100 kn", toVal: "168.7810 ft/s", extra: "115.0779 mph", extra2: "Aviation light aircraft cruise" },
      { fromVal: "150 kn", toVal: "253.1715 ft/s", extra: "172.6169 mph", extra2: "Carrier aircraft takeoff speed" },
      { fromVal: "250 kn", toVal: "421.9525 ft/s", extra: "287.6948 mph", extra2: "Terminal airspeed limit under 10k ft" }
    ]
  },
  applications: {
    title: "Engineering & Maritime Applications",
    items: [
      {
        title: "Naval Aviation & Catapult Stroke Design",
        text: "Naval engineers convert carrier departure airspeeds from knots to ft/s to calculate the required launch stroke length, steam accumulator pressure, and arresting gear energy absorption."
      },
      {
        title: "Civil Bridge & Port Structural Aerodynamics",
        text: "Coastal structural engineers convert marine weather station wind reports from knots into ft/s to calculate dynamic stagnation pressure ($q = 0.5 \\rho v^2$) on suspension bridges and gantry cranes."
      },
      {
        title: "Exterior Ballistics & Marine Gunfire Drift",
        text: "Naval artillery firing computers convert surface wind velocity measured in knots into ft/s crosswind vectors to apply projectile lead angle corrections."
      },
      {
        title: "Tidal Hydrokinetic Turbine Placement",
        text: "Ocean energy researchers convert acoustic doppler current profiles from knots into ft/s to model water flow kinetic power density through underwater turbine blades."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing statute miles per hour with knots: 1 knot equals 1.6878 ft/s, whereas 1 mph equals 1.4667 ft/s. Using the mph factor causes an underestimation of about 15%.",
      "Multiplying by 0.5925 instead of 1.6878: Multiplying by 0.5925 converts ft/s to knots, not knots to ft/s. Knots must be multiplied by ~1.6878.",
      "Assuming a nautical mile equals 5,280 feet: A statute mile is 5,280 feet, but an international nautical mile is approximately 6,076.12 feet.",
      "Rounding the conversion factor too aggressively: Using 1.6 instead of 1.6878 introduces a cumulative 5.2% error in high-velocity aerospace calculations."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to feet per second?",
      answer: "Multiply the velocity in knots by 1.68781: ft/s = kn × 1.68781."
    },
    {
      question: "How many feet per second are in one knot?",
      answer: "There are approximately 1.687810 feet per second in one knot (exact ratio: 1,852 / 1,097.28)."
    },
    {
      question: "What is 10 knots in feet per second?",
      answer: "10 knots multiplied by 1.68781 equals approximately 16.88 feet per second."
    },
    {
      question: "What is 30 knots in feet per second?",
      answer: "30 knots multiplied by 1.68781 equals approximately 50.63 feet per second."
    },
    {
      question: "What is 60 knots in feet per second?",
      answer: "60 knots multiplied by 1.68781 equals approximately 101.27 feet per second."
    },
    {
      question: "Which unit is faster, 1 knot or 1 foot per second?",
      answer: "1 knot is faster. Moving at 1 knot covers approximately 1.69 feet every second, whereas 1 foot per second is only about 0.59 knots."
    },
    {
      question: "How many feet are in a nautical mile?",
      answer: "There are exactly 6,076.11549 feet in one international nautical mile (1,852 meters ÷ 0.3048 m/ft)."
    },
    {
      question: "How do you convert feet per second back to knots?",
      answer: "Multiply the value in feet per second by 0.592484 (or divide by 1.68781): kn = ft/s × 0.592484."
    },
    {
      question: "What is 100 knots in feet per second?",
      answer: "100 knots multiplied by 1.68781 equals approximately 168.78 feet per second."
    },
    {
      question: "Why do catapult launches use feet per second?",
      answer: "Aircraft carrier catapult runways are measured in feet (typically around 300 to 330 feet), making acceleration and speed calculations in feet per second practical for deck operations."
    }
  ],
  relatedList: [
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" },
    { label: "Knot to Mile per Hour", from: "knot", to: "mile-per-hour" },
    { label: "Knot to Mach", from: "knot", to: "mach" },
    { label: "Foot per Second to Knot", from: "foot-per-second", to: "knot" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units",
    "U.S. Navy Naval Air Systems Command — Aircraft Launch and Recovery Equipment Manual",
    "ISO 80000-3:2019 — Quantities and Units — Part 3: Space and Time"
  ]
};
