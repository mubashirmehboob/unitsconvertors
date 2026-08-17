import { CustomArticleData } from "./types";

export const coulombToAmpereHour: CustomArticleData = {
  fromUnitId: "coulomb",
  toUnitId: "ampere-hour",
  seoTitle: "Coulomb to Ampere-hour Converter (C to Ah)",
  metaDescription: "Convert Coulombs to Ampere-hours (C to Ah) with exact electric charge formulas, worked battery capacity calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/coulomb-to-ampere-hour",
  h1: "Coulomb to Ampere-hour Converter",
  introduction: [
    "Electric charge represents the fundamental physical property of matter that causes it to experience a force when placed in an electromagnetic field. In electrical engineering, physics, and electrochemical energy storage, charge measurements quantify the quantity of electricity transferred over time.",
    "The Coulomb (C) is the International System of Units (SI) coherent derived unit of electric charge, defined as the charge transported by a constant electric current of one ampere in one second (1 C = 1 A·s). In contrast, the Ampere-hour (Ah) is the standard commercial unit used globally to specify the energy capacity of rechargeable batteries, electric vehicle battery packs, and uninterruptible power supplies (UPS).",
    "This converter delivers mathematically exact conversions between Coulombs and Ampere-hours, step-by-step battery charge calculations, reference comparison tables, and practical electrochemical guidelines for engineers and technicians."
  ],
  quickAnswer: {
    text: "To convert Coulombs to Ampere-hours, divide the electric charge in Coulombs by 3,600 (the number of seconds in one hour). For example, 18,000 Coulombs equals exactly 5.0 Ampere-hours (Ah), and 3,600 C equals 1.0 Ah.",
    formulaDisplay: "Ah = C ÷ 3,600",
    subtext: "1 Coulomb is equal to approximately 0.000277778 Ampere-hour (2.77778 × 10⁻⁴ Ah)."
  },
  aboutSourceUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C, named after French physicist Charles-Augustin de Coulomb) is the SI unit of electric charge. Under the 2019 SI redefinition, the coulomb is defined by taking the fixed numerical value of the elementary charge e to be exactly 1.602176634 × 10⁻¹⁹ C. Therefore, one coulomb corresponds to approximately 6.241509074 × 10¹⁸ elementary charges (such as electrons or protons). One coulomb of charge passes through a conductor cross-section when one ampere flows for one second (1 C = 1 A·s)."
  },
  aboutTargetUnit: {
    title: "Understanding Ampere-hours (Ah)",
    text: "An Ampere-hour (symbol: Ah or A·h) is a non-SI unit of electric charge frequently used in electrochemistry and battery technology. It represents the total amount of charge transferred by a steady electric current of one ampere flowing continuously for a duration of one hour (3,600 seconds). One ampere-hour equals exactly 3,600 coulombs. Automotive lead-acid batteries, solar storage banks, and electric vehicle traction packs are rated in ampere-hours to denote their total charge delivery capacity."
  },
  relationship: "The relationship between coulombs and ampere-hours is determined by the time conversion between seconds and hours: 1 hour = 3,600 seconds. Because 1 C = 1 A·s and 1 Ah = 1 A × 3,600 s = 3,600 C, converting from coulombs to ampere-hours requires dividing by 3,600.",
  relationshipTitle: "Coulomb to Ampere-hour Common Benchmark Values",
  relationshipItems: [
    { label: "360 C", value: "0.1 Ah (Small IoT backup cell charge)" },
    { label: "1,800 C", value: "0.5 Ah (Power tool trigger burst charge)" },
    { label: "3,600 C", value: "1.0 Ah (Standard baseline unit relationship)" },
    { label: "36,000 C", value: "10.0 Ah (E-bike battery sub-module charge)" },
    { label: "360,000 C", value: "100.0 Ah (Standard 12V marine deep-cycle battery)" }
  ],
  formula: {
    text: "Divide the electric charge in Coulombs by 3,600 to find the equivalent charge capacity in Ampere-hours.",
    math: "Q_{(Ah)} = \\frac{Q_{(C)}}{3600} = Q_{(C)} \\times 2.777778 \\times 10^{-4}",
    subtext: "To convert ampere-hours back to coulombs, multiply the ampere-hour value by 3,600."
  },
  formulaTitle: "Coulomb to Ampere-hour Mathematical Formula",
  practicalTip: {
    title: "Quick Mental Division by 3.6",
    text: "To convert thousands of coulombs to ampere-hours rapidly, divide the kilocoulomb value by 3.6. For example, 72,000 C = 72 kC; dividing 72 by 3.6 gives exactly 20 Ah."
  },
  expertNote: {
    title: "Battery Charge vs. Energy Content",
    text: "Ampere-hours denote electric charge (capacity), not stored electrical energy. To calculate energy in Watt-hours (Wh), multiply the Ampere-hour capacity by the nominal battery pack voltage (V): Energy (Wh) = Capacity (Ah) × Voltage (V)."
  },
  examples: {
    title: "Step-by-Step C to Ah Worked Calculations",
    items: [
      {
        title: "Example 1: Drone Battery Charge Transfer",
        subtitle: "A drone flight controller draws 18,000 Coulombs during an inspection mission. Convert this charge to Ampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 18,000 C.",
          "Apply conversion formula: Q_(Ah) = 18,000 ÷ 3,600.",
          "Perform calculation: 18,000 ÷ 3,600 = 5.0.",
          "Result: 18,000 C equals exactly 5.0 Ah."
        ]
      },
      {
        title: "Example 2: Industrial Capacitor Bank Discharge",
        subtitle: "A pulse-welding supercapacitor delivers 54,000 Coulombs of charge during a cycle. Convert this to Ampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 54,000 C.",
          "Apply conversion formula: Q_(Ah) = 54,000 ÷ 3,600.",
          "Perform calculation: 54,000 ÷ 3,600 = 15.0.",
          "Result: 54,000 C equals exactly 15.0 Ah."
        ]
      },
      {
        title: "Example 3: Sensor Module Low-Power Logging",
        subtitle: "A remote environmental sensor consumes 900 Coulombs over 24 hours. Convert this to Ampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 900 C.",
          "Apply conversion formula: Q_(Ah) = 900 ÷ 3,600.",
          "Perform calculation: 900 ÷ 3,600 = 0.25.",
          "Result: 900 C equals 0.25 Ah (or 250 mAh)."
        ]
      }
    ]
  },
  table: {
    title: "Coulomb to Ampere-hour Reference Table",
    headers: ["Charge (Coulombs, C)", "Charge (Ampere-hours, Ah)", "Representative System / Scale"],
    rows: [
      { fromVal: "360 C", toVal: "0.1 Ah", extra: "Button cell memory backup capacity" },
      { fromVal: "900 C", toVal: "0.25 Ah", extra: "Wireless sensor beacon daily consumption" },
      { fromVal: "1,800 C", toVal: "0.5 Ah", extra: "Smartwatch lithium battery capacity" },
      { fromVal: "3,600 C", toVal: "1.0 Ah", extra: "Compact two-way radio battery pack" },
      { fromVal: "7,200 C", toVal: "2.0 Ah", extra: "Standard 18650 cylindrical Li-ion cell" },
      { fromVal: "18,000 C", toVal: "5.0 Ah", extra: "Cordless power tool battery pack" },
      { fromVal: "36,000 C", toVal: "10.0 Ah", extra: "Electric scooter auxiliary power pack" },
      { fromVal: "72,000 C", toVal: "20.0 Ah", extra: "Solar street lighting LiFePO4 battery" },
      { fromVal: "180,000 C", toVal: "50.0 Ah", extra: "Automotive starter battery charge delivery" },
      { fromVal: "360,000 C", toVal: "100.0 Ah", extra: "Off-grid solar storage deep-cycle battery" },
      { fromVal: "720,000 C", toVal: "200.0 Ah", extra: "Telecom DC power plant backup rack" },
      { fromVal: "1,800,000 C", toVal: "500.0 Ah", extra: "Commercial marine propulsion battery module" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Battery Management System (BMS) Coulomb Counting",
        text: "State-of-Charge (SoC) algorithms measure instantaneous current across precision shunts in amperes and integrate with respect to time to compute transferred coulombs, converting to Ampere-hours to display remaining battery life."
      },
      {
        title: "Electrochemical Plating & Anodizing",
        text: "Industrial electroplating processes rely on Faraday's laws of electrolysis, where the mass of deposited metal is proportional to total charge in Coulombs, converted to Ampere-hours for rectifier power scheduling."
      },
      {
        title: "Supercapacitor Sizing & Energy Buffers",
        text: "Capacitor charge storage obeys Q = C × V. Engineers converting Coulombs into Ampere-hours can directly evaluate whether a supercapacitor bank can replace a chemical battery for peak shaving."
      },
      {
        title: "Electric Vehicle (EV) Traction Sizing",
        text: "EV powertrain engineers convert motor charge consumption profiles from integrated coulombs into Ampere-hours to verify battery thermal limits and pack longevity under dynamic driving cycles."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Converting 3,600 C to Ah requires dividing by 3,600 (yielding 1 Ah), rather than multiplying into 12,960,000 Ah.",
      "Confusing capacity (Ah) with energy (Wh): Ampere-hours denote total electric charge, not energy. Stored energy requires multiplying Ah by the terminal voltage (V).",
      "Omitting integration time units: Forgetting that 1 Ah = 3,600 A·s (Coulombs), not 60 A·s (Ampere-minutes).",
      "Ignoring Peukert's effect: A battery's effective usable Ampere-hour capacity decreases at higher discharge currents compared to standard rated C-rates."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in one Ampere-hour?",
      answer: "There are exactly 3,600 Coulombs in one Ampere-hour (1 Ah = 3,600 C). This is derived from 1 Ampere flowing for 1 hour (3,600 seconds)."
    },
    {
      question: "What is the formula to convert Coulombs to Ampere-hours?",
      answer: "The formula is: Charge in Ah = Charge in C ÷ 3,600. For example, 7,200 C ÷ 3,600 = 2.0 Ah."
    },
    {
      question: "Why do batteries use Ampere-hours instead of Coulombs?",
      answer: "Ampere-hours provide a practical scale for human timeframes. Stating that a smartphone battery has a capacity of 4.0 Ah (or 4,000 mAh) is much easier to evaluate for runtime (e.g., drawing 1 A for 4 hours) than stating it holds 14,400 Coulombs."
    },
    {
      question: "What is Coulomb counting in battery management systems?",
      answer: "Coulomb counting is a technique where the BMS continuously measures current in amperes, integrates it over time (in seconds) to tally the total coulombs entering or leaving the cells, and converts this to Ampere-hours to track the State of Charge (SoC)."
    },
    {
      question: "How do I convert 10,000 Coulombs to Ampere-hours?",
      answer: "Divide 10,000 by 3,600: 10,000 ÷ 3,600 = 2.7778 Ah (or approximately 2,778 mAh)."
    },
    {
      question: "Is 1 Coulomb equal to 1 Ampere?",
      answer: "No. A Coulomb is a unit of electric charge (quantity), whereas an Ampere is a unit of electric current (rate of charge flow). One Ampere equals one Coulomb per second (1 A = 1 C/s)."
    },
    {
      question: "How do I calculate battery energy from Ampere-hours and Coulombs?",
      answer: "To find energy in Joules from Coulombs, multiply charge by voltage: E (J) = Q (C) × V. To find energy in Watt-hours from Ampere-hours, multiply capacity by voltage: E (Wh) = Q (Ah) × V."
    },
    {
      question: "How many electrons are transferred in one Ampere-hour?",
      answer: "Because one Coulomb contains approximately 6.2415 × 10¹⁸ electrons, one Ampere-hour (3,600 C) equals approximately 2.247 × 10²² electrons."
    }
  ],
  relatedList: [
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" },
    { label: "Coulomb to Milliampere-hour", from: "coulomb", to: "milliampere-hour" },
    { label: "Coulomb to Kilocoulomb", from: "coulomb", to: "kilocoulomb" },
    { label: "Coulomb to Megacoulomb", from: "coulomb", to: "megacoulomb" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV): General concepts in electrochemistry",
    "IEEE Std 485 - Recommended Practice for Sizing Lead-Acid Batteries for Stationary Applications"
  ]
};
