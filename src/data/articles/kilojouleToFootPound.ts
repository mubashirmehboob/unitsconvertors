import { CustomArticleData } from "./types";

export const kilojouleToFootPound: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "foot-pound",
  seoTitle: "Kilojoule to Foot-Pound Converter (kJ to ft-lb)",
  metaDescription: "Convert kilojoules to foot-pounds (kJ to ft-lb / ft·lbf) with exact mechanical precision. Calculation formulas, step-by-step examples, engineering tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-foot-pound",
  h1: "Kilojoule to Foot-Pound Converter",
  introduction: [
    "The kilojoule (kJ) and the foot-pound (ft-lb or ft·lbf) are standard units of energy and mechanical work that connect the modern metric SI system with the imperial engineering system. While kilojoules represent the global scientific benchmark for thermal, kinetic, and chemical work, foot-pounds remain widely utilized across North American mechanical engineering, automotive performance, ballistics, and structural design.",
    "Converting kilojoules to foot-pounds is an exact physical translation between metric and imperial gravitational units. By international standard definition (ISO 80000-4 and NIST), one foot-pound is the mechanical work performed by a force of one pound-force acting through a linear distance of one foot, which equals approximately 1.355818 Joules. Consequently, one kilojoule (1,000 Joules) equals approximately 737.562 foot-pounds.",
    "This engineering guide provides the exact conversion formulas, worked step-by-step calculation examples, a detailed mechanical conversion lookup table, practical automotive and structural applications, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to foot-pounds, multiply the kilojoule value by 1,000 and divide by 1.355818 (or multiply by approximately 737.562). For example, 1 kilojoule equals approximately 737.56 foot-pounds.",
    formulaDisplay: "ft-lb = (kJ × 1,000) ÷ 1.355818 = kJ × 737.56215",
    subtext: "1 kilojoule is equal to approximately 737.562 foot-pounds (ft·lbf)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an official decimal multiple of the SI derived unit of energy, the Joule. One kilojoule represents 1,000 Joules of mechanical work, defined as the energy transferred when a force of 1,000 Newtons moves an object over a distance of one meter (1 kJ = 1,000 N·m = 1,000 kg·m²/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot-Pound (ft-lb / ft·lbf)",
    text: "The foot-pound (symbol: ft-lb or ft·lbf), formally known as the foot-pound-force, is an imperial and US customary unit of work and energy. Defined as the mechanical work done when a force of one pound-force (lbf) moves an object through a linear distance of one foot (0.3048 m × 4.448222 N ≈ 1.355818 J), it is widely used in automotive flywheel ratings, impact testing, and ballistics."
  },
  relationship: "Because 1 foot-pound equals exactly 0.3048 m × 0.45359237 kg × 9.80665 m/s² = 1.3558179483314 Joules (0.001355818 kJ), 1 kilojoule equals 1,000 / 1.35581795 = 737.562149... foot-pounds.",
  relationshipTitle: "Kilojoule to Foot-Pound Mechanical Equivalence",
  relationshipItems: [
    { label: "0.001356 kJ", value: "1 ft-lb (lifting 1 lb by 1 foot)" },
    { label: "1 kJ", value: "737.562 ft-lb" },
    { label: "1.356 kJ", value: "1,000 ft-lb (heavy rifle muzzle energy)" },
    { label: "10 kJ", value: "7,375.62 ft-lb" },
    { label: "100 kJ", value: "73,756.21 ft-lb (vehicle impact kinetic energy)" }
  ],
  formula: {
    text: "Multiply the energy in kilojoules by 1,000 to obtain Joules, then divide by 1.355818 to find foot-pounds.",
    math: "ft_lb = (kJ * 1000) / 1.3558179",
    subtext: "Alternatively: ft-lb = kJ × 737.56215"
  },
  formulaTitle: "Kilojoule to Foot-Pound Conversion Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "For rapid estimation in the shop, multiply the kilojoule value by 740 and subtract a fraction of a percent (e.g., 2 kJ × 740 = 1,480 ft-lb; actual exact value: 1,475.12 ft-lb)."
  },
  expertNote: {
    title: "Energy (ft-lb) vs Torque (lb-ft)",
    text: "In US customary practice, mechanical engineers distinguish energy (foot-pounds, ft-lb) from rotational torque (pound-feet, lb-ft). While both have the same dimensional units (force × distance), energy is a scalar quantity, whereas torque is a vector cross product."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Kinetic Energy at Highway Speed",
        subtitle: "Convert a passenger car kinetic energy of 450 kilojoules into foot-pounds.",
        steps: [
          "Identify the kilojoule value: 450 kJ.",
          "Apply the formula: ft-lb = 450 × 737.56215.",
          "Calculate: 450 × 737.56215 = 331,902.97 ft-lb.",
          "Result: 450 kJ is equivalent to approximately 331,903 foot-pounds."
        ]
      },
      {
        title: "Example 2: Pile Driver Impact Hammer Energy",
        subtitle: "Convert a construction drop-hammer rating of 25 kJ into foot-pounds.",
        steps: [
          "Identify the energy in kJ: 25 kJ.",
          "Multiply by 1,000: 25,000 Joules.",
          "Divide by 1.355818: 25,000 ÷ 1.355818 = 18,439.05 ft-lb.",
          "Result: 25 kJ equals approximately 18,439.1 ft-lbs."
        ]
      },
      {
        title: "Example 3: Sporting Equipment Impact Rating",
        subtitle: "Convert a baseball bat strike energy of 1.2 kJ into foot-pounds.",
        steps: [
          "Identify the energy: 1.2 kJ.",
          "Multiply by 737.562: 1.2 × 737.562 = 885.07 ft-lb.",
          "Result: 1.2 kJ equals approximately 885.1 foot-pounds."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Foot-Pound Conversion Table",
    headers: ["Kilojoules (kJ)", "Foot-Pounds (ft-lb)", "Equivalent Joules", "Mechanical Application"],
    rows: [
      { fromVal: "0.001356 kJ", toVal: "1.00 ft-lb", extra: "1.356 J", extra2: "Lifting 1 lb weight by 1 foot" },
      { fromVal: "0.01 kJ", toVal: "7.38 ft-lb", extra: "10.00 J", extra2: "Airsoft pellet muzzle energy" },
      { fromVal: "0.1 kJ", toVal: "73.76 ft-lb", extra: "100.00 J", extra2: "Heavy hammer strike on an anvil" },
      { fromVal: "0.5 kJ", toVal: "368.78 ft-lb", extra: "500.00 J", extra2: "9mm handgun muzzle energy" },
      { fromVal: "1.0 kJ", toVal: "737.56 ft-lb", extra: "1,000.00 J", extra2: "Base 1 kilojoule unit" },
      { fromVal: "2.0 kJ", toVal: "1,475.12 ft-lb", extra: "2,000.00 J", extra2: "Standard hunting rifle projectile energy" },
      { fromVal: "5.0 kJ", toVal: "3,687.81 ft-lb", extra: "5,000.00 J", extra2: ".338 Lapua Magnum cartridge" },
      { fromVal: "10.0 kJ", toVal: "7,375.62 ft-lb", extra: "10,000.00 J", extra2: "Heavy forge press impact" },
      { fromVal: "20.0 kJ", toVal: "14,751.24 ft-lb", extra: "20,000.00 J", extra2: "Structural crash cushion testing" },
      { fromVal: "50.0 kJ", toVal: "36,878.11 ft-lb", extra: "50,000.00 J", extra2: "Elevator safety brake dissipation" },
      { fromVal: "100.0 kJ", toVal: "73,756.21 ft-lb", extra: "100,000.00 J", extra2: "Automotive crash test barrier load" },
      { fromVal: "1,000.0 kJ", toVal: "737,562.15 ft-lb", extra: "1,000,000.00 J", extra2: "1 Megajoule (MJ)" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to Foot-Pound Conversion",
    items: [
      {
        title: "Automotive Dynamics and Crash Safety",
        text: "Automotive safety engineers convert impact energy measured in kilojoules by European NCAP test sensors into foot-pounds for US FMVSS compliance reports."
      },
      {
        title: "Geotechnical and Foundation Engineering",
        text: "Civil engineers evaluating dynamic pile driving calculate hammer energy in kilojoules from hydraulic actuators and translate to foot-pounds to determine soil bearing capacity."
      },
      {
        title: "Materials Science Charpy Impact Testing",
        text: "Metallurgists testing fracture toughness on Charpy and Izod pendulum machines convert fracture energy from Joules/kilojoules to foot-pounds across international standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.3558 instead of dividing: Because 1 foot-pound is roughly 1.36 Joules, 1 kilojoule equals over 737 foot-pounds.",
      "Confusing mechanical foot-pounds (ft·lbf) with poundal-feet: 1 foot-pound equals 32.174 foot-poundals.",
      "Conflating energy (scalar ft-lb) with torque (vector lb-ft): Torque represents rotational effort, while energy represents accumulated work."
    ]
  },
  faqs: [
    {
      question: "How many foot-pounds are in 1 kilojoule?",
      answer: "There are approximately 737.562 foot-pounds (ft·lbf) in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kilojoules to foot-pounds?",
      answer: "The formula is: ft-lb = (kilojoules × 1,000) ÷ 1.355818 (or ft-lb = kilojoules × 737.56215)."
    },
    {
      question: "How many kilojoules are in 1 foot-pound?",
      answer: "There are approximately 0.001355818 kilojoules (1.355818 Joules) in 1 foot-pound."
    },
    {
      question: "How do I convert 10 kJ to foot-pounds?",
      answer: "10 × 737.56215 = 7,375.62 foot-pounds."
    },
    {
      question: "What is the difference between ft-lb of energy and lb-ft of torque?",
      answer: "Foot-pounds (ft-lb) measure work or energy (a scalar quantity equal to force multiplied by distance). Pound-feet (lb-ft) measure torque (a rotational moment or vector cross-product)."
    },
    {
      question: "How do I convert foot-pounds back to kilojoules?",
      answer: "Multiply the foot-pound value by 0.001355818 (or multiply by 1.355818 and divide by 1,000)."
    },
    {
      question: "How many foot-pounds are in 1 Megajoule (1,000 kJ)?",
      answer: "1,000 kJ equals approximately 737,562.15 foot-pounds."
    },
    {
      question: "Is foot-pound a metric or imperial unit?",
      answer: "The foot-pound is an imperial and US customary unit based on feet, pounds-mass, and standard gravitational acceleration."
    }
  ],
  relatedList: [
    { label: "Foot-Pound to Kilojoule", from: "foot-pound", to: "kilojoule" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" },
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
