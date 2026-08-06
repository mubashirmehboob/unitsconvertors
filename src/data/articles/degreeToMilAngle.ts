import { CustomArticleData } from "./types";

export const degreeToMilAngle: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "mil-angle",
  seoTitle: "Degree to Mil (Angle) Conversion (° to mil) | UnitsConvertors.com",
  metaDescription: "Convert degrees to angular mils (NATO angular mil = ° / 0.05625 = ° × 17.77778). Learn artillery targeting, reticle rangefinding, worked examples, and FAQs.",
  h1: "Degree to Mil (Angle) Conversion",
  introduction: [
    "The degree (°) and the angular mil (symbol: mil or ₥) are two essential angular units used in military ballistics, navigation, and long-range optics. While a degree divides a full circle into 360 sexagesimal parts, the NATO angular mil divides a full circle into exactly 6,400 military mils.",
    "The angular mil originated as a trigonometric approximation of a milliradian ($1/1,000$th of a radian). In exact mathematics, $2\\pi$ radians $\\approx 6,283.185$ true milliradians per circle. To simplify map reading and artillery calculations, military forces rounded this value: NATO standardizes 6,400 mils per circle, where $1\\text{ mil} = 360^\\circ / 6,400 = 0.05625^\\circ$.",
    "Converting degrees to angular mils requires dividing degrees by 0.05625 or multiplying by $17.77777778$ ($6,400 / 360$). For example, a $90^\\circ$ right angle equals exactly 1,600 angular mils. This guide details conversion formulas, reticle rangefinding rules, step-by-step examples, and practical field reference tables."
  ],
  quickAnswer: {
    text: "To convert degrees to NATO angular mils, multiply the degree value by 17.77777778 (or divide by 0.05625). For example, 10 degrees equals 10 × 17.77778 = 177.78 angular mils.",
    formulaDisplay: "Angular Mils (mil) = Degrees (°) ÷ 0.05625 = Degrees × 17.77777778",
    subtext: "1 Degree = 17.77777778 Mils | 1 Mil = 0.05625 Degree | 360 Degrees = 6,400 Mils (NATO)"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle rotation, standard across geometry, navigation, and survey mapping."
  },
  aboutTargetUnit: {
    title: "What is an Angular Mil (mil)?",
    text: "An angular mil (symbol: mil, ₥) is a military unit of angular measurement. NATO defines 6,400 mils per full circle ($1\\text{ mil} = 0.05625^\\circ$). At 1,000 meters distance, 1 mil subtends approximately 1 meter of target height."
  },
  relationship: "A full circle contains 360 degrees or 6,400 NATO angular mils. Dividing 6,400 by 360 yields the exact scale factor of 17.77777778 mils per degree.",
  relationshipTitle: "Key Angular Equivalents Between Degrees and NATO Mils",
  relationshipItems: [
    { label: "1° Degree", value: "17.78 mils (17.777778 mil)" },
    { label: "5° Field Sector", value: "88.89 mils" },
    { label: "45° Diagonal Angle", value: "800 mils" },
    { label: "90° Right Angle", value: "1,600 mils" },
    { label: "180° Straight Angle", value: "3,200 mils" },
    { label: "360° Full Circle", value: "6,400 mils" }
  ],
  formula: {
    text: "Multiply the angle in degrees by 17.77777778, or divide by 0.05625.",
    math: "Angle (mil) = \\frac{\\text{Angle }(^\\circ)}{0.05625} = \\text{Angle }(^\\circ) × \\frac{6,400}{360}",
    subtext: "Exact fraction factor: 160/9 ≈ 17.77777778 mils per degree."
  },
  formulaTitle: "Degree to Angular Mil Formula",
  practicalTip: {
    title: "Mil-Dot Rangefinding Formula",
    text: "Because 1 mil subtends 1 meter at 1,000 meters, snipers and forward observers use the mil-dot reticle formula: Distance to Target (meters) = [Target Size (meters) × 1,000] / Target Size in Mils."
  },
  expertNote: {
    title: "NATO vs Swedish vs Warsaw Pact Mil Definitions",
    text: "While NATO standardizes 6,400 mils per circle ($1\\text{ mil} = 0.05625^\\circ$), former Warsaw Pact nations used 6,000 mils per circle ($1\\text{ mil} = 0.06^\\circ$), and Sweden used 6,300 mils ($1\\text{ mil} \\approx 0.05714^\\circ$). Always verify the national military standard."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 15 Degrees to Angular Mils",
        subtitle: "Calculate NATO angular mils for a 15° compass bearing deflection.",
        steps: [
          "Identify degree value: 15°.",
          "Apply formula: mil = 15 × (6,400 / 360).",
          "Calculate: 15 × 17.77777778 = 266.67.",
          "Final Result: 15° equals 266.67 NATO angular mils."
        ]
      },
      {
        title: "Example 2: Convert 45 Degrees to Angular Mils",
        subtitle: "Find angular mils for a 45° elevation angle.",
        steps: [
          "Identify degree value: 45°.",
          "Apply formula: mil = 45 / 0.05625.",
          "Calculate: 45 / 0.05625 = 800.",
          "Final Result: 45° equals 800 NATO angular mils."
        ]
      },
      {
        title: "Example 3: Convert 1.5 Degrees to Angular Mils",
        subtitle: "Convert a small scope sight correction of 1.5° into angular mils.",
        steps: [
          "Identify degree value: 1.5°.",
          "Apply formula: mil = 1.5 × 17.77777778.",
          "Calculate: 1.5 × 17.77777778 = 26.67.",
          "Final Result: 1.5° equals 26.67 angular mils."
        ]
      }
    ]
  },
  table: {
    title: "Degree to NATO Angular Mil Conversion Reference Matrix",
    headers: ["Degrees (°)", "NATO Mils (mil)", "Warsaw Pact Mils (6000)", "Tactical & Ballistic Context"],
    rows: [
      { fromVal: "0.05625°", toVal: "1.0 mil", extra: "0.9375 mil", extra2: "1 meter subtended height at 1,000 meters" },
      { fromVal: "1°", toVal: "17.78 mil", extra: "16.67 mil", extra2: "Single degree compass sector" },
      { fromVal: "5°", toVal: "88.89 mil", extra: "83.33 mil", extra2: "Binocular reticle measurement sector" },
      { fromVal: "10°", toVal: "177.78 mil", extra: "166.67 mil", extra2: "Artillery battery azimuth arc" },
      { fromVal: "15°", toVal: "266.67 mil", extra: "250.00 mil", extra2: "1 hour solar hour angle" },
      { fromVal: "30°", toVal: "533.33 mil", extra: "500.00 mil", extra2: "Mortar coverage quadrant" },
      { fromVal: "45°", toVal: "800.00 mil", extra: "750.00 mil", extra2: "Maximum ballistic range elevation angle" },
      { fromVal: "90°", toVal: "1,600.00 mil", extra: "1,500.00 mil", extra2: "Perpendicular quadrant angle" },
      { fromVal: "180°", toVal: "3,200.00 mil", extra: "3,000.00 mil", extra2: "Reverse direction azimuth" },
      { fromVal: "360°", toVal: "6,400.00 mil", extra: "6,000.00 mil", extra2: "Complete circular perimeter" }
    ]
  },
  applications: {
    title: "Military & Tactical Applications",
    items: [
      {
        title: "Artillery & Mortar Fire Control",
        text: "Forward observers and gun crews calculate gun azimuth and elevation quad-angles in angular mils for pin-point long-range fire control."
      },
      {
        title: "Sniper Rifle Mil-Dot Reticles",
        text: "Optical scope reticles calibrated in MRAD/mils allow marksmen to estimate target distance and apply windage and bullet drop holds."
      },
      {
        title: "Military Map Navigation",
        text: "Military compasses (e.g., Cammenga lensatic compasses) feature dual degree (360) and mil (6,400) dial rings for land navigation."
      },
      {
        title: "Naval Gunfire & Defense Systems",
        text: "Naval fire control radars translate angular search degrees into high-speed servo drive mil signals."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Angular Mils",
    items: [
      "Mixing up NATO 6,400 mils per circle with former Soviet/Warsaw Pact 6,000 mils per circle or true mathematical milliradians (6,283.185 mrad).",
      "Using 0.05625 as a multiplier instead of a divisor (degrees / 0.05625 = mils).",
      "Confusing angular mils (angle measurement) with circular mils (area measurement used for wire cross-sections).",
      "Forgetting that 1 mil equals approximately 3.4377 arcminutes."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to angular mils?",
      answer: "Multiply degrees by 17.77777778 (or divide by 0.05625). For example, 45° × 17.77778 = 800 NATO angular mils."
    },
    {
      question: "How many angular mils are in a degree?",
      answer: "There are exactly 17.77777778 (160/9) NATO angular mils in 1 degree."
    },
    {
      question: "How many mils are in a 360-degree circle?",
      answer: "In the NATO military standard, a full 360-degree circle contains exactly 6,400 angular mils."
    },
    {
      question: "What is 90 degrees in mils?",
      answer: "90 degrees equals exactly 1,600 NATO angular mils."
    },
    {
      question: "Why do military forces use mils instead of degrees?",
      answer: "Mils provide much finer angular resolution than degrees, and 1 mil subtends approximately 1 unit of length at 1,000 units of range (e.g., 1 meter at 1,000 meters), making distance and target size math simple."
    },
    {
      question: "What is the difference between NATO mils and Warsaw Pact mils?",
      answer: "NATO standardizes 6,400 mils per circle (1 mil = 0.05625°), whereas former Warsaw Pact forces standardized 6,000 mils per circle (1 mil = 0.06°)."
    },
    {
      question: "What is 1 mil equal to in degrees?",
      answer: "In the NATO system, 1 angular mil equals exactly 0.05625 degrees (or 3.375 arcminutes)."
    },
    {
      question: "Is an angular mil the same as a milliradian (mrad)?",
      answer: "They are very close. A true milliradian is 1/1,000th of a radian (6,283.185 mrad per circle). NATO rounded 6,283.185 up to 6,400 for convenient binary division."
    }
  ],
  relatedList: [
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" }
  ],
  references: [
    "NATO STANAG 4627: Fire Control Angular Measurement Standards (Mils)",
    "US Army Field Manual FM 3-25.26: Map Reading and Land Navigation",
    "ISO 80000-3: Plane Angle Quantities and Military Units"
  ]
};
