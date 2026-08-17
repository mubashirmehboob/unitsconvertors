import { CustomArticleData } from "./types";

export const coulombToMilliampereHour: CustomArticleData = {
  fromUnitId: "coulomb",
  toUnitId: "milliampere-hour",
  seoTitle: "Coulomb to Milliampere-hour Converter (C to mAh)",
  metaDescription: "Convert Coulombs to Milliampere-hours (C to mAh) with exact electric charge formulas, worked mobile battery calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/coulomb-to-milliampere-hour",
  h1: "Coulomb to Milliampere-hour Converter",
  introduction: [
    "Portable electronics, wearable monitors, and Internet of Things (IoT) hardware require accurate tracking of micro-scale electrical charge transfers to optimize battery life and charging cycles.",
    "The Coulomb (C) is the standard SI base derived unit of electric charge, equal to one ampere flowing for one second. The Milliampere-hour (mAh) is the universally recognized commercial unit for specifying the capacity of compact consumer batteries found in smartphones, tablets, flashlights, and wireless earbuds.",
    "This converter provides exact mathematical conversions between Coulombs and Milliampere-hours, step-by-step consumer electronics calculations, reference lookup tables, and design insights for embedded systems engineers."
  ],
  quickAnswer: {
    text: "To convert Coulombs to Milliampere-hours, divide the electric charge in Coulombs by 3.6 (or multiply by approximately 0.277778). For example, 18,000 Coulombs equals 5,000 mAh (a typical flagship smartphone battery), and 3.6 Coulombs equals exactly 1.0 mAh.",
    formulaDisplay: "mAh = C ÷ 3.6",
    subtext: "1 Coulomb is equal to exactly 0.277778 Milliampere-hour (1/3.6 mAh)."
  },
  aboutSourceUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C) is the International System of Units (SI) unit of electric charge, defined fundamentally through the elementary charge e = 1.602176634 × 10⁻¹⁹ C. One coulomb corresponds to the amount of charge carried by approximately 6.241509 × 10¹⁸ electrons or protons passing a boundary in one second with a steady current of one ampere (1 C = 1 A·s)."
  },
  aboutTargetUnit: {
    title: "Understanding Milliampere-hours (mAh)",
    text: "A Milliampere-hour (symbol: mAh or mA·h) is a thousandth of an ampere-hour (1 mAh = 0.001 Ah = 3.6 C). It indicates that a power source can deliver an electric current of one milliampere (0.001 A) for one hour (3,600 s), or 100 milliamperes for 0.01 hours, before being depleted. It is the gold-standard metric for small lithium-ion and lithium-polymer rechargeable cells."
  },
  relationship: "The relationship between coulombs and milliampere-hours is derived directly from time and sub-multiples: 1 mAh = (10⁻³ A) × (3,600 s) = 3.6 A·s = 3.6 C. Consequently, 1 C = 1 / 3.6 mAh ≈ 0.277778 mAh. Converting coulombs to milliampere-hours requires dividing the coulombs by 3.6.",
  relationshipTitle: "Coulomb to Milliampere-hour Common Benchmark Values",
  relationshipItems: [
    { label: "3.6 C", value: "1.0 mAh (Sub-micro energy harvesting packet)" },
    { label: "360 C", value: "100.0 mAh (Smart ring / hearing aid battery)" },
    { label: "1,800 C", value: "500.0 mAh (Smartwatch / TWS earbud case)" },
    { label: "14,400 C", value: "4,000.0 mAh (Standard modern smartphone cell)" },
    { label: "36,000 C", value: "10,000.0 mAh (Portable power bank rating)" }
  ],
  formula: {
    text: "Divide the electric charge in Coulombs by 3.6 to calculate the equivalent capacity in Milliampere-hours.",
    math: "Q_{(mAh)} = \\frac{Q_{(C)}}{3.6} = Q_{(C)} \\times 0.277778",
    subtext: "To convert milliampere-hours back to coulombs, multiply the milliampere-hour value by 3.6."
  },
  formulaTitle: "Coulomb to Milliampere-hour Mathematical Formula",
  practicalTip: {
    title: "The Factor of 3.6 Rule",
    text: "Remember the constant 3.6: Whenever converting between Coulombs and mAh, 3.6 is the magic conversion scalar. Coulombs to mAh requires dividing by 3.6, while mAh to Coulombs requires multiplying by 3.6."
  },
  expertNote: {
    title: "Capacitor Energy vs. Battery Capacity",
    text: "Supercapacitors are often rated in Farads and Coulombs (Q = C·V), while batteries are rated in mAh. Converting supercapacitor charge into mAh allows embedded designers to quickly compare the run-time autonomy of supercaps against rechargeable coin cells."
  },
  examples: {
    title: "Step-by-Step C to mAh Worked Calculations",
    items: [
      {
        title: "Example 1: Smartphone Fast-Charge Phase",
        subtitle: "A USB-C fast charger delivers 10,800 Coulombs into a smartphone battery. Convert this charge to Milliampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 10,800 C.",
          "Apply conversion formula: Q_(mAh) = 10,800 ÷ 3.6.",
          "Perform calculation: 10,800 ÷ 3.6 = 3,000.",
          "Result: 10,800 C equals 3,000 mAh."
        ]
      },
      {
        title: "Example 2: Wearable Heart-Rate Sensor Daily Draw",
        subtitle: "An optical fitness tracker draws 540 Coulombs over an 8-hour workout. Convert this to Milliampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 540 C.",
          "Apply conversion formula: Q_(mAh) = 540 ÷ 3.6.",
          "Perform calculation: 540 ÷ 3.6 = 150.",
          "Result: 540 C equals 150 mAh."
        ]
      },
      {
        title: "Example 3: IoT Sensor Wake-Up Cycle",
        subtitle: "A LoRaWAN environmental sensor consumes 18 Coulombs per transmission burst. Convert this to Milliampere-hours.",
        steps: [
          "Identify the charge in Coulombs: Q = 18 C.",
          "Apply conversion formula: Q_(mAh) = 18 ÷ 3.6.",
          "Perform calculation: 18 ÷ 3.6 = 5.0.",
          "Result: 18 C equals 5.0 mAh."
        ]
      }
    ]
  },
  table: {
    title: "Coulomb to Milliampere-hour Reference Table",
    headers: ["Charge (Coulombs, C)", "Charge (Milliampere-hours, mAh)", "Representative Electronics Device"],
    rows: [
      { fromVal: "3.6 C", toVal: "1.0 mAh", extra: "Microcontroller real-time clock backup" },
      { fromVal: "18 C", toVal: "5.0 mAh", extra: "Bluetooth LE beacon beaconing packet" },
      { fromVal: "90 C", toVal: "25.0 mAh", extra: "Wireless stylus rechargeable battery" },
      { fromVal: "180 C", toVal: "50.0 mAh", extra: "True Wireless Stereo (TWS) individual earbud" },
      { fromVal: "360 C", toVal: "100.0 mAh", extra: "Smart ring biometric sensor cell" },
      { fromVal: "1,080 C", toVal: "300.0 mAh", extra: "Fitness band / compact smartwatch battery" },
      { fromVal: "1,800 C", toVal: "500.0 mAh", extra: "Action camera remote control cell" },
      { fromVal: "3,600 C", toVal: "1,000.0 mAh", extra: "Compact drone / handheld walkie-talkie" },
      { fromVal: "7,200 C", toVal: "2,000.0 mAh", extra: "Standard handheld barcode scanner battery" },
      { fromVal: "14,400 C", toVal: "4,000.0 mAh", extra: "Standard 5G smartphone internal cell" },
      { fromVal: "18,000 C", toVal: "5,000.0 mAh", extra: "High-capacity flagship smartphone battery" },
      { fromVal: "36,000 C", toVal: "10,000.0 mAh", extra: "Pocket USB power bank capacity" },
      { fromVal: "72,000 C", toVal: "20,000.0 mAh", extra: "Airline-approved laptop portable power bank" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Consumer Mobile Battery Design",
        text: "Designers calculate battery fuel gauge registers where hardware charge integrator ICs measure coulombs across a current sense resistor and format the reading in mAh for operating system battery health displays."
      },
      {
        title: "IoT Power Budgeting & Energy Harvesting",
        text: "Solar or piezoelectric energy harvesters accumulate fractional coulombs in storage capacitors. Converting these values to mAh allows firmware developers to schedule sensor sleep-wake intervals accurately."
      },
      {
        title: "Medical Implant Battery Longevity",
        text: "Pacemakers and neurostimulators consume microcoulombs per pulse. Translating cumulative multi-year coulombs into battery mAh ratings determines the projected surgical replacement timeline."
      },
      {
        title: "USB Battery Charging Profiling",
        text: "USB Power Delivery (PD) analyzers measure instantaneous charge flow in Coulombs during constant-current/constant-voltage (CC/CV) phases and express cumulative charge delivered in mAh."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Confusing division factor: Dividing by 3,600 instead of 3.6 (which yields Ah instead of mAh, off by 1,000×).",
      "Assuming linear battery discharge voltage: mAh capacity reflects electric charge, but available energy (mWh) depends on the nominal voltage curve under varying discharge loads.",
      "Ignoring battery internal self-discharge: Stored mAh capacity gradually depletes over months even if zero coulombs are drawn externally.",
      "Neglecting temperature derating: Low ambient temperatures reduce accessible mAh capacity due to increased electrolyte internal resistance."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in one Milliampere-hour (mAh)?",
      answer: "There are exactly 3.6 Coulombs in 1 Milliampere-hour (1 mAh = 3.6 C). This is derived from 1 mA (0.001 A) flowing for 1 hour (3,600 seconds): 0.001 A × 3,600 s = 3.6 C."
    },
    {
      question: "What is the formula to convert Coulombs to Milliampere-hours?",
      answer: "The formula is: Capacity in mAh = Charge in C ÷ 3.6. For example, 14,400 C ÷ 3.6 = 4,000 mAh."
    },
    {
      question: "How many Coulombs are in a 5,000 mAh phone battery?",
      answer: "To convert 5,000 mAh to Coulombs, multiply by 3.6: 5,000 × 3.6 = 18,000 Coulombs (18 kC)."
    },
    {
      question: "What is the difference between mAh and Ah?",
      answer: "1 Ampere-hour (Ah) equals 1,000 Milliampere-hours (mAh). Therefore, a 5,000 mAh battery equals 5.0 Ah."
    },
    {
      question: "How do I calculate runtime from mAh and current?",
      answer: "Runtime in hours equals battery capacity in mAh divided by average current draw in mA: Runtime (hours) = Capacity (mAh) ÷ Current (mA)."
    },
    {
      question: "Why do phone manufacturers specify capacity in mAh rather than Coulombs?",
      answer: "Milliampere-hours directly correlate with device power draw in milliamperes. If a smartphone draws 250 mA on average, a 5,000 mAh battery provides roughly 5,000 ÷ 250 = 20 hours of operation."
    },
    {
      question: "How do I convert Coulombs to Watt-hours using mAh?",
      answer: "First convert Coulombs to mAh (divide by 3.6). Then multiply by nominal cell voltage (e.g., 3.7V for Li-ion) and divide by 1,000: Wh = (mAh × V) ÷ 1,000."
    },
    {
      question: "How many electrons are in 1 mAh of charge?",
      answer: "Because 1 C contains 6.2415 × 10¹⁸ electrons, 1 mAh (3.6 C) contains approximately 2.2469 × 10¹⁹ electrons."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Coulomb", from: "milliampere-hour", to: "coulomb" },
    { label: "Coulomb to Ampere-hour", from: "coulomb", to: "ampere-hour" },
    { label: "Ampere-hour to Milliampere-hour", from: "ampere-hour", to: "milliampere-hour" },
    { label: "Coulomb to Kilocoulomb", from: "coulomb", to: "kilocoulomb" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IEC 61960 - Secondary cells and batteries containing alkaline or other non-acid electrolytes - Secondary lithium cells and batteries for portable applications",
    "IEEE Std 1625 - Standard for Rechargeable Batteries for Multi-Cell Mobile Computing Devices"
  ]
};
