import { CustomArticleData } from "./types";

export const degreeToArcsecond: CustomArticleData = {
  fromUnitId: "degree",
  toUnitId: "arcsecond",
  seoTitle: "Degree to Arcsecond Conversion (° to \") | UnitsConvertors.com",
  metaDescription: "Convert degrees to arcseconds (\") accurately using the formula (arcseconds = ° × 3600). Learn astronomical resolution, parallax measurement, worked examples, and FAQs.",
  h1: "Degree to Arcsecond Conversion",
  introduction: [
    "The degree (°) and arcsecond (symbol: \", also written as arcsec or second of arc) form the base and fine units of sexagesimal angular measurement. One degree is divided into 60 arcminutes, and each arcminute is subdivided into 60 arcseconds, yielding exactly 3,600 arcseconds per degree.",
    "A full 360-degree circle contains $1,296,000$ arcseconds ($360 \\times 3,600$). Converting degrees to arcseconds requires multiplying the degree value by 3,600. For instance, a small angular deviation of $0.001^\\circ$ equals 3.6 arcseconds.",
    "Arcseconds are fundamental to observational astronomy, space telescope resolution, stellar parallax distance calculations (parsecs), semiconductor photolithography, and high-precision structural alignment. This guide details conversion formulas, astronomical examples, comparison tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert degrees to arcseconds, multiply the angle in degrees by 3,600. For example, 0.5 degrees equals 0.5 × 3,600 = 1,800 arcseconds (1,800\").",
    formulaDisplay: "Arcseconds (\") = Degrees (°) × 3,600",
    subtext: "1 Degree = 3,600 Arcseconds (\") | 1 Arcsecond = 1/3600th Degree (0.00027778°)"
  },
  aboutSourceUnit: {
    title: "What is a Degree (°)?",
    text: "A degree (symbol: °) is a unit of plane angle representing 1/360th of a full circle rotation, widely used in geometry, navigation, and geography."
  },
  aboutTargetUnit: {
    title: "What is an Arcsecond (\")?",
    text: "An arcsecond (symbol: \", double prime mark) is a unit of angular measurement equal to 1/3,600th of a degree or 1/60th of an arcminute. It measures extremely fine angular spans in astronomy and micro-positioning."
  },
  relationship: "One degree contains 60 arcminutes or 3,600 arcseconds. Multiplying degrees by 3,600 transforms macro angular measures into micro arcsecond values.",
  relationshipTitle: "Degree to Arcsecond Subdivisions",
  relationshipItems: [
    { label: "0.001° Micro Step", value: "3.6\" (Arcseconds)" },
    { label: "0.01° Fine Step", value: "36\" (Arcseconds)" },
    { label: "0.1° Tenth Degree", value: "360\" (Arcseconds)" },
    { label: "1° Whole Degree", value: "3,600\" (Arcseconds)" },
    { label: "15° Hourly Rotation", value: "54,000\" (Arcseconds)" },
    { label: "90° Right Angle", value: "324,000\" (Arcseconds)" }
  ],
  formula: {
    text: "Multiply the angle in degrees by 3,600.",
    math: "Angle (\") = Angle (°) × 3,600",
    subtext: "Formula for decimal degrees: Arcseconds = Degrees × 3,600."
  },
  formulaTitle: "Degree to Arcsecond Formula",
  practicalTip: {
    title: "Parsec Definition Connection",
    text: "By definition, one parsec (parallax second) is the distance at which 1 Astronomical Unit (1 AU, ~149.6 million km) subtends an angle of exactly 1 arcsecond (1\" ≈ 3.2616 light-years)."
  },
  expertNote: {
    title: "Atmospheric Seeing Limits",
    text: "Ground-based optical telescopes are limited by atmospheric turbulence ('seeing'), which typically blurs star images to 0.5 to 1.5 arcseconds resolution unless adaptive optics or space telescopes (e.g., Hubble, JWST) are used."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 0.25 Degrees to Arcseconds",
        subtitle: "Find the arcsecond equivalent of 0.25°.",
        steps: [
          "Identify degree value: 0.25°.",
          "Apply formula: Arcseconds = 0.25 × 3,600.",
          "Calculate: 0.25 × 3,600 = 900.",
          "Final Result: 0.25° equals 900 arcseconds (900\")."
        ]
      },
      {
        title: "Example 2: Convert 0.005 Degrees to Arcseconds",
        subtitle: "Calculate arcseconds for a telescope pointing variance of 0.005°.",
        steps: [
          "Identify degree value: 0.005°.",
          "Apply formula: Arcseconds = 0.005 × 3,600.",
          "Calculate: 0.005 × 3,600 = 18.",
          "Final Result: 0.005° equals 18 arcseconds (18\")."
        ]
      },
      {
        title: "Example 3: Convert 2.5 Degrees to Arcseconds",
        subtitle: "Convert 2.5° into arcseconds.",
        steps: [
          "Identify degree value: 2.5°.",
          "Apply formula: Arcseconds = 2.5 × 3,600.",
          "Calculate: 2.5 × 3,600 = 9,000.",
          "Final Result: 2.5° equals 9,000 arcseconds (9,000\")."
        ]
      }
    ]
  },
  table: {
    title: "Degree to Arcsecond Conversion Reference Table",
    headers: ["Degrees (°)", "Arcseconds (\")", "Arcminutes (')", "Astronomical & Optical Context"],
    rows: [
      { fromVal: "0.000278°", toVal: "1\"", extra: "0.0167'", extra2: "Stellar parallax angle of a star 1 parsec away" },
      { fromVal: "0.001°", toVal: "3.6\"", extra: "0.06'", extra2: "JWST infrared angular resolution limit" },
      { fromVal: "0.01°", toVal: "36\"", extra: "0.6'", extra2: "Jupiter angular diameter at opposition (~45\")" },
      { fromVal: "0.05°", toVal: "180\"", extra: "3'", extra2: "Human naked eye resolution limit (~1' to 3')" },
      { fromVal: "0.1°", toVal: "360\"", extra: "6'", extra2: "Micro-positioning rotary stage alignment tolerance" },
      { fromVal: "0.5°", toVal: "1,800\"", extra: "30'", extra2: "Full Moon / Sun angular diameter" },
      { fromVal: "1°", toVal: "3,600\"", extra: "60'", extra2: "One whole degree angular span" },
      { fromVal: "5°", toVal: "18,000\"", extra: "300'", extra2: "Orion constellation belt angular span" },
      { fromVal: "15°", toVal: "54,000\"", extra: "900'", extra2: "1 hour of Earth axial rotation angle" },
      { fromVal: "90°", toVal: "324,000\"", extra: "5,400'", extra2: "Right angle zenith-to-horizon span" }
    ]
  },
  applications: {
    title: "High-Precision Field Applications",
    items: [
      {
        title: "Astronomical Research & Space Observatories",
        text: "Space telescopes measure binary star orbits, exoplanet transit astrometry, and galactic movements in milli-arcseconds (mas)."
      },
      {
        title: "Semiconductor Lithography & Wafer Steppers",
        text: "Silicon wafer photolithography tools align microchip masks with sub-arcsecond angular accuracy."
      },
      {
        title: "Geodetic Surveying & Satellite Laser Ranging",
        text: "Geodetic satellites track tectonic plate motion and Earth orientation parameters (EOP) measured in arcseconds."
      },
      {
        title: "Optical Prism & Laser Alignment",
        text: "Precision optical beam splitters, retroreflectors, and laser interferometers specify surface wedge angles in arcseconds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Degrees to Arcseconds",
    items: [
      "Dividing by 3600 instead of multiplying by 3600 when converting degrees to arcseconds.",
      "Confusing arcseconds (angle, symbol \") with seconds of time (where 15 arcseconds = 1 second of time).",
      "Using single prime (') instead of double prime (\") to denote arcseconds.",
      "Failing to account for atmospheric seeing when interpreting theoretical telescope diffraction limits."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees to arcseconds?",
      answer: "Multiply the degree value by 3,600. For example, 0.5° × 3,600 = 1,800 arcseconds."
    },
    {
      question: "How many arcseconds are in 1 degree?",
      answer: "There are exactly 3,600 arcseconds in 1 degree."
    },
    {
      question: "What is the symbol for arcseconds?",
      answer: "The symbol for arcseconds is the double prime (\"), as in 15\" (15 arcseconds)."
    },
    {
      question: "How many arcseconds are in a full 360-degree circle?",
      answer: "A full circle contains 1,296,000 arcseconds (360 × 3,600)."
    },
    {
      question: "What is the relationship between arcseconds and parsecs?",
      answer: "One parsec is defined as the distance at which an object has a parallax angle of 1 arcsecond across a 1 AU baseline."
    },
    {
      question: "What is 1 arcsecond equal to in degrees?",
      answer: "1 arcsecond equals 1/3,600th of a degree, or approximately 0.0002777778 degrees."
    },
    {
      question: "What is 0.1 degrees in arcseconds?",
      answer: "0.1 degrees equals exactly 360 arcseconds (360\")."
    },
    {
      question: "What is the angular size of the Moon in arcseconds?",
      answer: "The Moon has an average apparent angular diameter of approximately 0.5 degrees, which equals 1,800 arcseconds."
    }
  ],
  relatedList: [
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" },
    { label: "Degree to Radian", from: "degree", to: "radian" },
    { label: "Degree to Gradian", from: "degree", to: "gradian" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" }
  ],
  references: [
    "International Astronomical Union (IAU) Standards for Astronomical Units",
    "NIST Special Publication 330: Units of Measure for High-Precision Alignment",
    "ISO 80000-3: Space and Time Quantities"
  ]
};
