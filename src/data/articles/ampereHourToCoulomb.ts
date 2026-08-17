import { CustomArticleData } from "./types";

export const ampereHourToCoulomb: CustomArticleData = {
  fromUnitId: "ampere-hour",
  toUnitId: "coulomb",
  seoTitle: "Ampere-hour to Coulomb Converter (Ah to C)",
  metaDescription: "Convert Ampere-hours to Coulombs (Ah to C) with exact electric charge formulas, worked battery capacity calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/ampere-hour-to-coulomb",
  h1: "Ampere-hour to Coulomb Converter",
  introduction: [
    "Battery specifications and energy storage ratings are standardly denoted in Ampere-hours. However, physical modeling, electrochemical simulations, and electrostatic calculations require quantities expressed in base SI units.",
    "The Ampere-hour (Ah) is the universal commercial measure of electric battery charge capacity, representing a steady current of one ampere flowing for one hour (3,600 seconds). The Coulomb (C) is the coherent International System of Units (SI) unit of electric charge (1 C = 1 A·s).",
    "This converter provides exact mathematical conversions between Ampere-hours and Coulombs, step-by-step battery charge calculations, reference comparison tables, and practical electrochemical engineering guidelines."
  ],
  quickAnswer: {
    text: "To convert Ampere-hours to Coulombs, multiply the value in Ampere-hours by 3,600 (the number of seconds in one hour). For example, a 5.0 Ah power tool battery stores exactly 18,000 Coulombs (18 kC), and a 1.0 Ah cell holds 3,600 C.",
    formulaDisplay: "C = Ah × 3,600",
    subtext: "1 Ampere-hour is equal to exactly 3,600 Coulombs (3.6 kC)."
  },
  aboutSourceUnit: {
    title: "Understanding Ampere-hours (Ah)",
    text: "An Ampere-hour (symbol: Ah or A·h) is a unit of electric charge used worldwide to rate energy storage devices like lead-acid automotive batteries, lithium-ion EV battery packs, and solar battery banks. An Ampere-hour represents the charge delivered by a constant electric current of one ampere flowing uninterrupted for one hour (3,600 seconds), corresponding to exactly 3,600 coulombs."
  },
  aboutTargetUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C, named after French physicist Charles-Augustin de Coulomb) is the SI base derived unit of electric charge. Under the 2019 SI redefinition, the coulomb is defined by taking the fixed numerical value of the elementary charge e to be 1.602176634 × 10⁻¹⁹ C. One coulomb corresponds to the electric charge transferred by a current of one ampere in one second (1 C = 1 A·s), which equals approximately 6.241509 × 10¹⁸ elementary electron charges."
  },
  relationship: "The relationship between ampere-hours and coulombs is dictated by time conversion: 1 hour = 3,600 seconds. Because 1 Coulomb = 1 Ampere-second (A·s), 1 Ampere-hour = 1 A × 3,600 s = 3,600 Coulombs. The conversion is linear and exact.",
  relationshipTitle: "Ampere-hour to Coulomb Common Benchmark Values",
  relationshipItems: [
    { label: "0.1 Ah", value: "360 C (Small wearable sensor battery)" },
    { label: "1.0 Ah", value: "3,600 C (Standard baseline battery unit)" },
    { label: "2.0 Ah", value: "7,200 C (18650 cylindrical Li-ion cell)" },
    { label: "5.0 Ah", value: "18,000 C (Cordless power tool battery pack)" },
    { label: "100.0 Ah", value: "360,000 C (12V RV / Marine deep-cycle battery)" }
  ],
  formula: {
    text: "Multiply the charge capacity in Ampere-hours by 3,600 to find the equivalent charge in Coulombs.",
    math: "Q_{(C)} = Q_{(Ah)} \\times 3600",
    subtext: "To convert coulombs back to ampere-hours, divide the coulomb value by 3,600."
  },
  formulaTitle: "Ampere-hour to Coulomb Mathematical Formula",
  practicalTip: {
    title: "Quick 3.6 × 10³ Rule",
    text: "To convert Ah to Coulombs mentally: Multiply the Ah rating by 3.6 to get the value in Kilocoulombs (kC), then add three zeros for Coulombs. For example, 10 Ah × 3.6 = 36 kC = 36,000 C."
  },
  expertNote: {
    title: "BMS Hardware Fuel Gauge Shunts",
    text: "Battery Management Systems (BMS) calculate state-of-charge by sampling shunt voltages at microsecond intervals, accumulating Coulombs (A·s), and dividing by 3,600 to report Ampere-hours to the master control unit."
  },
  examples: {
    title: "Step-by-Step Ah to C Worked Calculations",
    items: [
      {
        title: "Example 1: E-Bike Battery Charge Delivery",
        subtitle: "A 14.0 Ah electric bicycle battery pack is fully charged. Calculate the total charge stored in Coulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 14.0 Ah.",
          "Apply conversion formula: Q_(C) = 14.0 × 3,600.",
          "Perform calculation: 14.0 × 3,600 = 50,400.",
          "Result: 14.0 Ah equals exactly 50,400 Coulombs (50.4 kC)."
        ]
      },
      {
        title: "Example 2: 12V Automotive Starter Battery",
        subtitle: "An automotive starting battery has a rated capacity of 60.0 Ah. Convert this capacity to Coulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 60.0 Ah.",
          "Apply conversion formula: Q_(C) = 60.0 × 3,600.",
          "Perform calculation: 60.0 × 3,600 = 216,000.",
          "Result: 60.0 Ah equals exactly 216,000 Coulombs (216 kC)."
        ]
      },
      {
        title: "Example 3: Wireless IoT Sensor Coin Cell",
        subtitle: "A lithium coin cell is rated at 0.22 Ah (220 mAh). Convert this capacity to Coulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 0.22 Ah.",
          "Apply conversion formula: Q_(C) = 0.22 × 3,600.",
          "Perform calculation: 0.22 × 3,600 = 792.",
          "Result: 0.22 Ah equals exactly 792 Coulombs."
        ]
      }
    ]
  },
  table: {
    title: "Ampere-hour to Coulomb Reference Table",
    headers: ["Capacity (Ampere-hours, Ah)", "Electric Charge (Coulombs, C)", "Scale / Common Application"],
    rows: [
      { fromVal: "0.1 Ah", toVal: "360 C", extra: "Hearing aid / button cell charge" },
      { fromVal: "0.5 Ah", toVal: "1,800 C", extra: "Smartwatch internal battery" },
      { fromVal: "1.0 Ah", toVal: "3,600 C", extra: "Handheld walkie-talkie battery" },
      { fromVal: "2.0 Ah", toVal: "7,200 C", extra: "Standard 18650 Li-ion cell" },
      { fromVal: "3.0 Ah", toVal: "10,800 C", extra: "High-drain 21700 vape / power cell" },
      { fromVal: "5.0 Ah", toVal: "18,000 C", extra: "Heavy-duty cordless drill pack" },
      { fromVal: "10.0 Ah", toVal: "36,000 C", extra: "Electric kick-scooter battery pack" },
      { fromVal: "20.0 Ah", toVal: "72,000 C", extra: "Solar perimeter security battery" },
      { fromVal: "50.0 Ah", toVal: "180,000 C", extra: "Compact passenger car starter battery" },
      { fromVal: "100.0 Ah", toVal: "360,000 C", extra: "Off-grid LiFePO4 solar battery bank" },
      { fromVal: "200.0 Ah", toVal: "720,000 C", extra: "Heavy commercial truck dual battery pack" },
      { fromVal: "500.0 Ah", toVal: "1,800,000 C", extra: "Marine electric propulsion battery bank" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Battery Management System (BMS) Calibration",
        text: "Automotive BMS algorithms integrate current sensors in Coulombs (A·s) and convert to Ah to update the state of charge (SoC) displayed on the vehicle dashboard."
      },
      {
        title: "Supercapacitor vs. Battery Hybrid Systems",
        text: "Engineers converting battery capacity (Ah) into Coulombs can directly size matching supercapacitors (Q = C·V) for regenerative braking energy absorption."
      },
      {
        title: "Electroplating Tank Current Control",
        text: "Plating shop rectifiers schedule power in Ampere-hours to ensure the precise number of Coulombs are passed to deposit target metal coating thicknesses."
      },
      {
        title: "Photovoltaic Charge Controller Logging",
        text: "Solar MPPT charge controllers log daily charge transfer in Ampere-hours, while internal microcontrollers compute battery state equations in Coulombs."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting 5 Ah to Coulombs requires multiplying by 3,600 (18,000 C), not dividing into 0.00138 C.",
      "Confusing charge with energy: Ah × 3,600 yields Coulombs (charge), not Joules (energy). Finding Joules requires multiplying Coulombs by cell voltage (E = Q × V).",
      "Omitting the hour-to-second factor: Using 60 (minutes) instead of 3,600 (seconds) creates a 60× calculation error.",
      "Ignoring temperature capacity loss: A battery rated at 100 Ah at 25°C may only deliver 70 Ah (252,000 C) at -20°C."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in one Ampere-hour?",
      answer: "There are exactly 3,600 Coulombs in one Ampere-hour (1 Ah = 3,600 C). This is derived from 1 Ampere flowing for 1 hour (3,600 seconds)."
    },
    {
      question: "What is the formula to convert Ampere-hours to Coulombs?",
      answer: "The formula is: Charge in Coulombs = Capacity in Ah × 3,600. For example, 2.5 Ah × 3,600 = 9,000 C."
    },
    {
      question: "How many Coulombs are in a 100 Ah battery?",
      answer: "A 100 Ah battery stores 360,000 Coulombs of charge (100 × 3,600 = 360,000 C, or 360 kC)."
    },
    {
      question: "How do I convert Coulombs to Joules using battery voltage?",
      answer: "Energy in Joules equals charge in Coulombs multiplied by battery voltage: Energy (J) = Charge (C) × Voltage (V). For a 12V 100 Ah battery (360,000 C), stored energy is 360,000 × 12 = 4,320,000 Joules (4.32 MJ)."
    },
    {
      question: "What is the difference between an Ampere and an Ampere-hour?",
      answer: "An Ampere (A) measures the instantaneous rate of electric current flow. An Ampere-hour (Ah) measures total accumulated electric charge over time (1 Ah = 1 A flowing for 1 hour)."
    },
    {
      question: "How many electrons are in 1 Ampere-hour?",
      answer: "Since 1 Coulomb contains 6.2415 × 10¹⁸ electrons, 1 Ampere-hour (3,600 C) contains approximately 2.2469 × 10²² electrons."
    },
    {
      question: "How do I convert Ampere-hours to Milliampere-hours?",
      answer: "Multiply Ampere-hours by 1,000: 1 Ah = 1,000 mAh. For example, 4.5 Ah equals 4,500 mAh."
    },
    {
      question: "Why is the Coulomb the SI unit instead of the Ampere-hour?",
      answer: "The International System of Units (SI) derives units from fundamental SI base units (seconds, meters, kilograms, amperes). The Coulomb is defined directly as 1 A·s, maintaining dimensional coherence without non-decimal time constants."
    }
  ],
  relatedList: [
    { label: "Coulomb to Ampere-hour", from: "coulomb", to: "ampere-hour" },
    { label: "Ampere-hour to Milliampere-hour", from: "ampere-hour", to: "milliampere-hour" },
    { label: "Ampere-hour to Kilocoulomb", from: "ampere-hour", to: "kilocoulomb" },
    { label: "Ampere-hour to Megacoulomb", from: "ampere-hour", to: "megacoulomb" },
    { label: "Ampere-hour to Faraday", from: "ampere-hour", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV): Secondary cells and batteries",
    "IEEE Std 485 - Recommended Practice for Sizing Lead-Acid Batteries for Stationary Applications"
  ]
};
