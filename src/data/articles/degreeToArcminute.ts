import { CustomArticleData } from "./types";

export const degreeToArcminute: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "arcminute",
  seoTitle: "Degree to Arcminute Conversion (° to ') | UnitsConvertors.com",
  metaDescription: "Convert degrees to arcminutes (') accurately using the formula (arcminutes = ° × 60). Includes sexagesimal angle rules, astronomy and navigation uses, worked examples, and FAQs.",
  h1: "Degree to Arcminute Conversion",
  introduction: [
    "The degree (°) and the arcminute (symbol: ', also written as MOA or minute of arc) form the primary subdivisions of sexagesimal angular measurement. Inherited from ancient Babylonian sexagesimal astronomy, one degree contains exactly 60 arcminutes.",
    "Because a full circle contains 360 degrees, a circle encompasses 21,600 arcminutes ($360 \\times 60$). Converting degrees to arcminutes simply requires multiplying the angle in degrees by 60. For example, half a degree ($0.5^\\circ$) equals 30 arcminutes.",
    "Arcminutes are indispensable in astronomy, celestial navigation, optical lens manufacturing, geodesy, and rifle optics (MOA adjustments). This guide details conversion formulas, decimal degree breakdowns, practical targeting examples, and comprehensive lookup tables."
  ],
  quickAnswer: {
    text: "To convert degrees to arcminutes, multiply the degree value by 60. For example, 2.5 degrees equals 2.5 × 60 = 150 arcminutes (150').",
    formulaDisplay: "Arcminutes (') = Degrees (°) × 60",
    subtext: "1 Degree = 60 Arcminutes (') | 1 Arcminute = 1/60th Degree (0.01666667°)"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of angle representing 1/360th of a full circle. It serves as the base unit for geography (latitude/longitude), geometry, and navigation."
  },
  aboutTargetUnit: {
    title: "What is an Arcminute (')?",
    text: "An arcminute (symbol: ', prime mark) is a unit of angular measurement equal to 1/60th of a degree (1' = 0.01666667°). In rifle ballistics, 1 Minute of Angle (MOA) subtends approximately 1.047 inches at 100 yards distance."
  },
  relationship: "One degree is divided sexagesimally into 60 arcminutes. Converting from degrees to arcminutes scales whole or decimal degrees into smaller angular units for high precision.",
  relationshipTitle: "Sexagesimal Degree and Arcminute Subdivisions",
  relationshipItems: [
    { label: "0.1° Decimal Step", value: "6' (Arcminutes)" },
    { label: "0.25° Quarter Degree", value: "15' (Arcminutes)" },
    { label: "0.5° Half Degree (Sun/Moon Diameter)", value: "30' (Arcminutes)" },
    { label: "1° Full Degree", value: "60' (Arcminutes)" },
    { label: "15° Hourly Rotation Angle", value: "900' (Arcminutes)" },
    { label: "90° Right Angle", value: "5,400' (Arcminutes)" }
  ],
  formula: {
    text: "Multiply the angle in degrees by 60.",
    math: "Angle (') = Angle (°) × 60",
    subtext: "Formula for decimal degrees: Arcminutes = Degrees × 60."
  },
  formulaTitle: "Degree to Arcminute Formula",
  practicalTip: {
    title: "Ballistics MOA Rule of Thumb",
    text: "In marksmanship, 1 MOA (1 arcminute) subtends roughly 1.047 inches at 100 yards, 2.094 inches at 200 yards, and 10.47 inches at 1000 yards. This linear approximation simplifies scope turret adjustments."
  },
  expertNote: {
    title: "Celestial Navigation Link to Nautical Miles",
    text: "By international definition, 1 arcminute of latitude along any Earth meridian equals exactly 1 nautical mile (1.852 km). Therefore, 1 degree of latitude spans 60 nautical miles."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 0.75 Degrees to Arcminutes",
        subtitle: "Calculate arcminutes for 0.75°.",
        steps: [
          "Identify degree value: 0.75°.",
          "Apply formula: Arcminutes = 0.75 × 60.",
          "Calculate: 0.75 × 60 = 45.",
          "Final Result: 0.75° equals 45 arcminutes (45')."
        ]
      },
      {
        title: "Example 2: Convert 12.5 Degrees to Arcminutes",
        subtitle: "Determine arcminutes for a compass heading variance of 12.5°.",
        steps: [
          "Identify degree value: 12.5°.",
          "Apply formula: Arcminutes = 12.5 × 60.",
          "Calculate: 12.5 × 60 = 750.",
          "Final Result: 12.5° equals 750 arcminutes (750')."
        ]
      },
      {
        title: "Example 3: Convert 0.05 Degrees to Arcminutes",
        subtitle: "Find arcminutes for a small optical tilt angle of 0.05°.",
        steps: [
          "Identify degree value: 0.05°.",
          "Apply formula: Arcminutes = 0.05 × 60.",
          "Calculate: 0.05 × 60 = 3.",
          "Final Result: 0.05° equals 3 arcminutes (3')."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Arcminute Conversion Reference Matrix",
    headers: ["Degrees (°)", "Arcminutes (')", "Exact Fraction (°)", "Practical / Nautical Context"],
    rows: [
      { fromVal: "0.0167°", toVal: "1'", extra: "1 / 60°", extra2: "1 Nautical Mile latitude distance on Earth" },
      { fromVal: "0.1°", toVal: "6'", extra: "1 / 10°", extra2: "Fine optical beam deflection angle" },
      { fromVal: "0.25°", toVal: "15'", extra: "1 / 4°", extra2: "Quarter degree astronomical offset" },
      { fromVal: "0.5°", toVal: "30'", extra: "1 / 2°", extra2: "Apparent angular diameter of Sun and Moon" },
      { fromVal: "1°", toVal: "60'", extra: "1°", extra2: "60 Nautical Miles on terrestrial meridian" },
      { fromVal: "5°", toVal: "300'", extra: "5°", extra2: "Standard binocular field of view angle" },
      { fromVal: "10°", toVal: "600'", extra: "10°", extra2: "Hand span at arm's length angular width" },
      { fromVal: "15°", toVal: "900'", extra: "15°", extra2: "1 hour of Earth diurnal rotation angle" },
      { fromVal: "45°", toVal: "2,700'", extra: "45°", extra2: "Diagonal right angle subdivision" },
      { fromVal: "90°", toVal: "5,400'", extra: "90°", extra2: "5,400 Nautical Miles equator to pole distance" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Astronomy & Telescope Optics",
        text: "Astronomers measure the apparent angular sizes of planets, nebulae, and binary star separations in arcminutes and arcseconds."
      },
      {
        title: "Marine Navigation & Geodesy",
        text: "Sextant altitude readings and chart coordinates express latitude and longitude position lines in degrees and arcminutes."
      },
      {
        title: "Rifle Optics & Ballistics (MOA)",
        text: "Shooters use Minute of Angle (MOA) scope dials to adjust bullet drop elevation and windage drift corrections."
      },
      {
        title: "Ophthalmology & Visual Acuity",
        text: "Optometrists define standard human 20/20 visual acuity as the ability to resolve details separated by 1 arcminute."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Arcminutes",
    items: [
      "Dividing by 60 instead of multiplying by 60 when converting degrees to arcminutes.",
      "Confusing the single prime mark (') used for arcminutes with quotation marks (\") used for arcseconds.",
      "Confusing arcminutes (angle) with minutes of time (15° = 1 hour of time = 60 minutes of time).",
      "Assuming MOA subtends exactly 1 inch at 100 yards (true 1 MOA is 1.047 inches)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to arcminutes?",
      answer: "Multiply the degree value by 60. For example, 2° × 60 = 120 arcminutes."
    },
    {
      question: "How many arcminutes are in a degree?",
      answer: "There are exactly 60 arcminutes in 1 degree."
    },
    {
      question: "What is the symbol for arcminutes?",
      answer: "The symbol for arcminute is the prime mark ('), as in 30' (30 arcminutes)."
    },
    {
      question: "Is MOA the same as an arcminute?",
      answer: "Yes, MOA stands for 'Minute of Angle', which is identical to an arcminute."
    },
    {
      question: "How many arcminutes are in a full circle?",
      answer: "A full 360-degree circle contains 21,600 arcminutes (360 × 60)."
    },
    {
      question: "How far is 1 arcminute on Earth?",
      answer: "Along a meridian of latitude, 1 arcminute corresponds to exactly 1 nautical mile (1.852 kilometers or 6,076 feet)."
    },
    {
      question: "What is 0.5 degrees in arcminutes?",
      answer: "0.5 degrees equals exactly 30 arcminutes (30')."
    },
    {
      question: "How do you convert degrees, minutes, seconds (DMS) to arcminutes?",
      answer: "Multiply degrees by 60, add minutes, and add seconds divided by 60. For example, 1° 15' 30\" = (1 × 60) + 15 + (30 / 60) = 75.5 arcminutes."
    }
  ],
  relatedList: [
    { label: "Degree to Arcsecond", from: "degree", to: "arcsecond" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Revolution", from: "degree", to: "revolution" }
  ],
  references: [
    "IAU Working Group on Nomenclature: Units of Angle in Astronomy",
    "NIST Handbook 44: Specifications and Tolerances for Angle Measuring Devices",
    "ISO 80000-3: Quantities and Units — Space and Time"
  ]
};
