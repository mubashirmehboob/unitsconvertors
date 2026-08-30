import { CustomArticleData } from "./types";

export const radianToMilAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "mil-angle",
  seoTitle: "Radian to Mil (Angle) Converter (rad to mil) | UnitsConvertors.com",
  metaDescription: "Convert radians to angular mils (NATO military mils & milliradians) accurately. Learn artillery targeting formulas (1 rad ≈ 1,018.59 NATO mils), reticle optics, and tables.",
  h1: "Radian to Mil (Angle) Converter",
  introduction: [
    "Converting radians to angular mils connects theoretical trigonometric trajectory equations with the tactical aiming reticles, artillery gunnery tables, and long-range optical scopes used by defense forces and precision shooters worldwide.",
    "While the radian (rad) is the pure SI base unit for angular measure, the angular mil (symbol: mil or ₥) is an operational unit designed for rapid distance and target sizing calculations without electronic computers.",
    "The standard NATO military mil divides a full circle into exactly 6,400 mils, approximating the true mathematical milliradian ($2,000\\pi \\approx 6,283.185$ mrad per circle). Consequently, converting radians to NATO mils requires multiplying by $3,200 / \\pi \\approx 1,018.591636$, whereas converting to true SI milliradians (mrad) is a direct multiplication by 1,000. This guide provides exact conversion formulas, optical reticle ranging math, comparison tables across international standards, and worked examples."
  ],
  quickAnswer: {
    text: "To convert radians to NATO angular mils, multiply the angle in radians by 3,200 / π (approximately 1,018.5916). For example, 0.1 radians equals approximately 101.86 NATO mils (or exactly 100.0 true milliradians).",
    formulaDisplay: "\\text{NATO Mils (₥)} = \\text{Radians (rad)} \\times \\frac{3,200}{\\pi} \\approx \\text{Radians} \\times 1,018.5916",
    subtext: "1 Radian ≈ 1,018.5916 NATO Mils | 1 Radian = 1,000 True Milliradians (mrad) | 6,400 NATO Mils = 360°"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI derived unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc whose length equals the circle's radius. One complete circle equals $2\\pi$ radians (≈ 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Angular Mil (₥ / mil)",
    text: "The angular mil (symbol: mil or ₥) is a unit of angle used in military ballistics, mortar elevation, and sniper reticles. The NATO standard defines a full circle as 6,400 mils. At 1,000 meters distance, 1 milliradian subtends an arc width of exactly 1 meter."
  },
  relationship: "A full circle equals $2\\pi$ radians. The NATO military system divides the circle into 6,400 equal parts so that gunners can quickly divide circles into quadrants (1,600 mils) and eighths (800 mils). Equating $2\\pi\\text{ rad} = 6,400\\text{ mils}$ gives the conversion factor: $6,400 / (2\\pi) = 3,200 / \\pi \\approx 1,018.5916358\\text{ mils}$ per radian.",
  relationshipTitle: "Radian vs Angular Mil Scale Comparison",
  relationshipItems: [
    { label: "1 Milliradian (True mrad)", value: "1.000000 mrad (0.001 rad)" },
    { label: "1 NATO Angular Mil", value: "≈ 0.000981748 rad (0.9817 mrad)" },
    { label: "1 Degree (1°)", value: "≈ 17.777778 NATO mils" },
    { label: "0.1 Radians", value: "≈ 101.8592 NATO mils" },
    { label: "1.0 Radian (rad)", value: "≈ 1,018.5916 NATO mils" },
    { label: "π/2 Radians (90°)", value: "1,600.0000 NATO mils" }
  ],
  formula: {
    text: "Multiply the angle in radians by 3,200 and divide by pi (π) for NATO mils, or multiply by 1,000 for true milliradians.",
    math: "\\text{Angle (NATO mils)} = \\text{Angle (rad)} \\times \\frac{6,400}{2\\pi} = \\text{Angle (rad)} \\times \\frac{3,200}{\\pi}",
    subtext: "Inverse formula: Radians (rad) = NATO Mils × (π / 3,200) ≈ NATO Mils × 0.0009817477"
  },
  formulaTitle: "Radian to Angular Mil Conversion Formula",
  practicalTip: {
    title: "The Mil-Relation Rangefinding Rule",
    text: "The mil relation states: Range (meters) = Target Size (mm) / Angle (mils). For example, if a 1.8-meter (1,800 mm) tall target spans 3 mils on a rifle scope reticle, the range to target is: 1,800 / 3 = 600 meters."
  },
  expertNote: {
    title: "International Military Mil Standards",
    text: "Different armed forces rounded the true circle (6,283.19 mrad) differently for easy mental arithmetic: NATO forces use 6,400 mils/circle (1 rad ≈ 1,018.59 mils); the former Soviet/Warsaw Pact standard used 6,000 mils/circle (1 rad ≈ 954.93 mils); and Sweden historically used 6,300 mils/circle (1 rad ≈ 1,002.68 mils)."
  },
  examples: {
    title: "Step-by-Step Practical Military & Optical Worked Examples",
    items: [
      {
        title: "Example 1: Ballistic Trajectory Elevation Correction",
        subtitle: "A computerized fire-control ballistic solver calculates that an artillery shell trajectory requires an elevation adjustment of 0.045 radians. Convert this correction to NATO mils for the gunner's azimuth display.",
        steps: [
          "State given angle in radians: 0.045 rad.",
          "Apply conversion factor: Mils = 0.045 × (3,200 / π).",
          "Perform calculation: 0.045 × 1,018.591636 = 45.8366 mils.",
          "Final Result: The gunner adjusts the elevation by approximately 45.8 NATO mils (₥)."
        ]
      },
      {
        title: "Example 2: Sniper Rifle Scope Turret Adjustment",
        subtitle: "A long-range shooter detects a crosswind drift angle of 2.5 milliradians (0.0025 rad). Convert this angle to NATO mils.",
        steps: [
          "State value: 0.0025 radians.",
          "Multiply: 0.0025 × 1,018.5916 = 2.5465 NATO mils.",
          "Final Result: The windage correction equals approximately 2.55 NATO mils (or exactly 2.50 true mrad)."
        ]
      },
      {
        title: "Example 3: Mortar Compass Azimuth Quadrant",
        subtitle: "A forward observer calls in a defensive fire sector spanning a right angle (π/2 radians = 1.570796 rad). Express this sector in NATO military mils.",
        steps: [
          "State angle: π/2 radians.",
          "Apply formula: (π/2) × (3,200 / π) = 3,200 / 2 = 1,600 mils.",
          "Final Result: The 90-degree sector spans exactly 1,600 NATO mils."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Angular Mil Conversion Reference Table",
    headers: ["Radians (rad)", "NATO Mils (₥)", "True Milliradians (mrad)", "Degrees (°)", "Tactical Application"],
    rows: [
      { fromVal: "0.0001 rad", toVal: "0.1019 ₥", extra: "0.1000 mrad", extra2: "0.00573°", extra3: "Sub-MOA rifle grouping" },
      { fromVal: "0.0009817 rad", toVal: "1.0000 ₥", extra: "0.9817 mrad", extra2: "0.05625°", extra3: "Exact 1.0 NATO mil definition" },
      { fromVal: "0.001 rad", toVal: "1.0186 ₥", extra: "1.0000 mrad", extra2: "0.05730°", extra3: "1 meter at 1,000 meters" },
      { fromVal: "0.01 rad", toVal: "10.1859 ₥", extra: "10.000 mrad", extra2: "0.57296°", extra3: "Tactical reticle holdover" },
      { fromVal: "0.01745 rad", toVal: "17.7778 ₥", extra: "17.453 mrad", extra2: "1.00000°", extra3: "Exact 1.0 degree conversion" },
      { fromVal: "0.05 rad", toVal: "50.9296 ₥", extra: "50.000 mrad", extra2: "2.86479°", extra3: "Direct-fire tank gun bracket" },
      { fromVal: "0.1 rad", toVal: "101.859 ₥", extra: "100.00 mrad", extra2: "5.72958°", extra3: "Artillery battery fan angle" },
      { fromVal: "0.5 rad", toVal: "509.296 ₥", extra: "500.00 mrad", extra2: "28.6479°", extra3: "Perimeter defensive sector" },
      { fromVal: "1.0 rad", toVal: "1,018.59 ₥", extra: "1,000.0 mrad", extra2: "57.2958°", extra3: "1.0 Radian SI unit standard" },
      { fromVal: "π/2 rad (1.5708)", toVal: "1,600.00 ₥", extra: "1,570.8 mrad", extra2: "90.0000°", extra3: "Exact quadrant (90°)" },
      { fromVal: "π rad (3.1416)", toVal: "3,200.00 ₥", extra: "3,141.6 mrad", extra2: "180.000°", extra3: "Exact half circle (180°)" },
      { fromVal: "2π rad (6.2832)", toVal: "6,400.00 ₥", extra: "6,283.2 mrad", extra2: "360.000°", extra3: "Full circular compass rose" }
    ]
  },
  applications: {
    title: "Defense, Optical, & Ballistics Applications",
    items: [
      {
        title: "Artillery & Mortar Fire Control",
        text: "Ballistic trajectories solved in differential radians are converted to military mils for gun tube elevation and traversing handwheel settings."
      },
      {
        title: "Sniper Reticle Ranging (Mil-Dot Scopes)",
        text: "Marksmen use mil-dot reticles to calculate target distances by comparing observed subtensions with known target dimensions."
      },
      {
        title: "Military Land Navigation & Compasses",
        text: "Prismatic lensatic compasses graduated in 6,400 mils allow commanders to navigate and direct direct-fire support with higher resolution than degrees."
      },
      {
        title: "Laser Rangefinders & Target Designators",
        text: "Electro-optical targeting pods translate internal gimbal angular encoders (radians) to mil reticle overlays on head-up displays (HUDs)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Mil Conversions",
    items: [
      "Confusing NATO mils (6,400/circle) with true SI milliradians (6,283.19/circle), introducing a 1.8% systematic error.",
      "Confusing angular mils with linear mils (1 mil in manufacturing = 1/1,000 inch = 0.0254 mm).",
      "Using the wrong national military standard (e.g., using Russian 6,000-mil optics with NATO 6,400-mil fire control tables).",
      "Confusing mils with Minutes of Angle (MOA, where 1 mil ≈ 3.438 MOA)."
    ]
  },
  faqs: [
    {
      question: "How many NATO mils are in 1 radian?",
      answer: "There are approximately 1,018.5916 NATO military mils in 1 radian (calculated as 3,200 / π)."
    },
    {
      question: "What is the difference between a NATO mil and a true milliradian?",
      answer: "A true milliradian (mrad) is 1/1,000th of a radian (6,283.19 mrad in a circle). A NATO mil rounds this circle to 6,400 parts for convenient military arithmetic, making 1 NATO mil ≈ 0.9817 mrad (about 1.8% smaller)."
    },
    {
      question: "What is the formula to convert radians to NATO mils?",
      answer: "The formula is: NATO Mils = Radians × (3,200 / π) ≈ Radians × 1,018.591636."
    },
    {
      question: "How many mils are in a complete 360-degree circle?",
      answer: "Under the NATO military standard, there are exactly 6,400 mils in a complete circle. Under the Warsaw Pact standard, there are 6,000 mils, and in pure geometry, there are 2,000π ≈ 6,283.19 milliradians."
    },
    {
      question: "How many degrees is 1 NATO mil?",
      answer: "1 NATO mil equals 360 / 6,400 = 0.05625 degrees (or 3.375 arcminutes)."
    },
    {
      question: "How do I convert radians to true milliradians (mrad)?",
      answer: "Simply multiply the radian value by 1,000 (e.g., 0.05 radians = 50.0 mrad)."
    },
    {
      question: "Why do snipers and artillery use mils instead of degrees?",
      answer: "Because 1 milliradian subtends almost exactly 1 meter at 1,000 meters range (or 1 yard at 1,000 yards), allowing instant mental distance calculations without trigonometry."
    },
    {
      question: "How many mils is a right angle (90 degrees)?",
      answer: "A 90-degree right angle (π/2 radians) equals exactly 1,600 NATO mils."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Degree to Mil (Angle)", from: "degree", to: "mil-angle" },
    { label: "Radian to Arcminute", from: "radian", to: "arcminute" },
    { label: "Radian to Revolution", from: "radian", to: "revolution" }
  ],
  references: [
    "NATO STANAG 4119: Adoption of a Standard Artillery Gun Direction Computer System.",
    "US Army Field Manual FM 3-22.91: Mortar Gunnery and Fire Direction.",
    "BIPM: The International System of Units (SI) — Derived Units."
  ]
};
