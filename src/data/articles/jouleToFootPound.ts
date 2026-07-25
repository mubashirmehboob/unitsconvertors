import { CustomArticleData } from "./types";

export const jouleToFootPound: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "foot-pound",
  seoTitle: "Joule to Foot-Pound Converter (J to ft-lb)",
  metaDescription: "Convert Joules to foot-pounds (J to ft-lb) accurately. Learn the exact 1.3558179 J factor, conversion formula, step-by-step calculations, tables, and FAQs.",
  h1: "Joule to Foot-Pound Converter",
  introduction: [
    "The Joule (J) and the foot-pound (ft-lb or ft-lbf) are key units used to measure mechanical work, kinetic energy, and torque energy. The Joule is the metric standard unit in the International System of Units (SI), whereas the foot-pound force is the traditional unit in the United States customary and British Imperial measurement systems.",
    "Converting Joules to foot-pounds is essential across automotive engineering, mechanical design, ballistics, robotics, and structural testing. By official international definition based on standard Earth gravity (9.80665 m/s²), one foot-pound force equals exactly 1.3558179483314004 Joules (commonly rounded to 1.3558179 J). Therefore, converting Joules to foot-pounds requires dividing the Joule value by 1.3558179 (or multiplying by approximately 0.737562).",
    "This comprehensive guide details the mechanical definitions, presents the step-by-step conversion formula, provides practical automotive and ballistics examples, offers a reference table, and resolves common mechanical engineering questions."
  ],
  quickAnswer: {
    text: "To convert Joules to foot-pounds, divide the energy in Joules by 1.3558179 (or multiply by 0.737562). For example, 10 Joules equals approximately 7.38 foot-pounds, and 100 Joules equals approximately 73.76 foot-pounds.",
    formulaDisplay: "ft-lb = J ÷ 1.3558179",
    subtext: "One Joule is equal to approximately 0.737562 foot-pounds."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the SI base derived unit of energy, work, and quantity of heat. Defined as 1 Newton of force acting through a distance of 1 meter (1 J = 1 N·m), it measures mechanical impact, electrical energy, and thermal dissipation across global engineering applications."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot-Pound (ft-lb)",
    text: "The foot-pound force (symbol: ft-lb, ft·lbf, or ft-lbs) is a traditional imperial unit of work and energy. It represents the work performed when a force of one pound-force (lbf) moves an object across a linear distance of one foot (1 ft-lb = 1 lbf × 1 ft). It is widely used in North America for specifying engine torque capacity, firearm muzzle energy, and fastener torque specifications."
  },
  relationship: "The exact relationship between Joules and foot-pounds relies on standard gravitational acceleration: 1 ft-lb = 1.3558179483314 J. Conversely, 1 J ≈ 0.737562149 ft-lb.",
  relationshipTitle: "Joule vs Foot-Pound Mechanical Energy Scale",
  relationshipItems: [
    { label: "1 J", value: "0.73756 ft-lb (Lifting 1 lb by ~8.8 inches)" },
    { label: "1.3558 J", value: "1 ft-lb (Lifting 1 lb by exactly 1 foot)" },
    { label: "10 J", value: "7.3756 ft-lb (Small pneumatic solenoid stroke)" },
    { label: "100 J", value: "73.7562 ft-lb (Passenger car wheel lug nut torque specification)" },
    { label: "1,000 J", value: "737.562 ft-lb (0.738 kft-lb / High-performance engine torque output)" }
  ],
  formula: {
    text: "Divide the energy value in Joules by 1.3558179 to calculate equivalent foot-pounds.",
    math: "ft-lb = J / 1.3558179",
    subtext: "To convert foot-pounds back to Joules, multiply the ft-lb value by 1.3558179."
  },
  formulaTitle: "Joule to Foot-Pound Formula",
  practicalTip: {
    title: "Quick Estimation Rule",
    text: "For rapid mental estimation, multiply Joules by 0.74 to approximate foot-pounds (e.g., 50 J × 0.74 = 37 ft-lb, very close to the exact 36.88 ft-lb)."
  },
  expertNote: {
    title: "Energy vs Torque Distinctions",
    text: "In mechanics, energy (work) and torque share identical scalar dimensions (N·m and ft-lbf). However, energy is a scalar quantity (Joules), while torque is a vector cross-product (Newton-meters)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Lug Nut Torque Energy",
        subtitle: "Convert 135.58 Joules of mechanical tightening work into foot-pounds.",
        steps: [
          "Identify the energy in Joules: 135.58 J.",
          "Apply the formula: ft-lb = 135.58 ÷ 1.3558179.",
          "Calculate: 135.58 ÷ 1.3558179 = 99.9987.",
          "Result: 135.58 Joules equals approximately 100 foot-pounds."
        ]
      },
      {
        title: "Example 2: Small Caliber Kinetic Energy",
        subtitle: "Convert a projectile impact kinetic energy of 271.16 Joules into foot-pounds.",
        steps: [
          "Identify the energy: 271.16 J.",
          "Divide by 1.3558179: 271.16 ÷ 1.3558179 = 200.00.",
          "Result: 271.16 J equals exactly 200 ft-lb."
        ]
      },
      {
        title: "Example 3: Drop-Weight Impact Testing",
        subtitle: "Convert 50 Joules of lab impact hammer energy into foot-pounds.",
        steps: [
          "Identify the energy: 50 J.",
          "Divide by 1.3558179: 50 ÷ 1.3558179 = 36.8781.",
          "Result: 50 J equals approximately 36.88 ft-lb."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Foot-Pound Conversion Table",
    headers: ["Joules (J)", "Foot-Pounds (ft-lb)", "Practical Engineering Context"],
    rows: [
      { fromVal: "1 J", toVal: "0.7376 ft-lb", extra: "Lifting 1 lb weight by ~8.85 inches" },
      { fromVal: "1.3558 J", toVal: "1.0000 ft-lb", extra: "Lifting 1 lb weight by 1 foot" },
      { fromVal: "5 J", toVal: "3.6878 ft-lb", extra: "Hand tool mechanism trigger pull" },
      { fromVal: "10 J", toVal: "7.3756 ft-lb", extra: "Air rifle projectile energy" },
      { fromVal: "25 J", toVal: "18.4391 ft-lb", extra: "Small electric screwdriver torque" },
      { fromVal: "50 J", toVal: "36.8781 ft-lb", extra: "Bicycle pedal crank arm force" },
      { fromVal: "100 J", toVal: "73.7562 ft-lb", extra: "Passenger car lug nut torque spec" },
      { fromVal: "250 J", toVal: "184.391 ft-lb", extra: "Standard .22 LR muzzle energy" },
      { fromVal: "500 J", toVal: "368.781 ft-lb", extra: "9mm handgun muzzle energy" },
      { fromVal: "1,000 J", toVal: "737.562 ft-lb", extra: "1 Kilojoule (~0.74 kft-lb)" },
      { fromVal: "2,000 J", toVal: "1,475.12 ft-lb", extra: "5.56mm rifle muzzle energy" }
    ]
  },
  applications: {
    title: "Applications of J to ft-lb Conversion",
    items: [
      {
        title: "Automotive & Mechanical Tooling",
        text: "Engineers and mechanics convert torque wrenches calibrated in Newton-meters / Joules to foot-pounds to comply with North American service manual specifications."
      },
      {
        title: "Ballistics & Sports Shooting",
        text: "Ballistics laboratories measure bullet velocity and calculate kinetic energy in Joules (E = ½mv²), converting to foot-pounds for North American ammunition tables."
      },
      {
        title: "Material Impact Testing (Charpy / Izod)",
        text: "Pendulum impact testing equipment measures material fracture toughness energy absorption in Joules, converting to ft-lb for ASTM specification sheets."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.3558 instead of dividing: Remember 1 foot-pound is larger than 1 Joule, so the value in ft-lb must be smaller than in J.",
      "Confusing foot-pounds with inch-pounds: 1 ft-lb = 12 in-lb. Do not confuse foot-pound ratings with smaller inch-pound torque tools.",
      "Confusing torque vector (N·m) with scalar work energy (J): While mathematically equal in magnitude, torque and work represent distinct physical concepts."
    ]
  },
  faqs: [
    {
      question: "How many foot-pounds are in 1 Joule?",
      answer: "There are approximately 0.73756215 foot-pounds in 1 Joule (1 ÷ 1.3558179)."
    },
    {
      question: "What is the exact conversion factor between Joules and foot-pounds?",
      answer: "By international gravitational standard definition, 1 foot-pound equals exactly 1.35581794833 Joules."
    },
    {
      question: "What is the formula to convert J to ft-lb?",
      answer: "The formula is: ft-lb = J ÷ 1.3558179."
    },
    {
      question: "Is 100 Joules equal to 73.76 ft-lb?",
      answer: "Yes. Dividing 100 J by 1.3558179 yields approximately 73.7562 ft-lb."
    },
    {
      question: "How do I convert foot-pounds back to Joules?",
      answer: "To convert foot-pounds to Joules, multiply the ft-lb value by 1.3558179 (e.g., 50 ft-lb × 1.3558179 = 67.79 J)."
    },
    {
      question: "Is Newton-meter (N·m) equal to Joule (J)?",
      answer: "In terms of dimensional energy magnitude, 1 N·m equals 1 Joule (1 J = 1 N·m)."
    }
  ],
  relatedList: [
    { label: "Joule to Erg", from: "joule", to: "erg" },
    { label: "Joule to Electron Volt", from: "joule", to: "electron-volt" },
    { label: "Joule to BTU", from: "joule", to: "btu" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "ASTM E23: Standard Test Methods for Notched Bar Impact Testing of Metallic Materials."
  ]
};
