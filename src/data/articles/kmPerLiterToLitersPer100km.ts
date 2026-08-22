import { CustomArticleData } from "./types";

export const kmPerLiterToLitersPer100km: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "liters-per-100km",
  seoTitle: "Kilometers per Liter to Liters per 100km Converter (km/L to L/100km)",
  metaDescription: "Convert Kilometers per Liter to Liters per 100 Kilometers (km/L to L/100km) instantly. Understand the 100 / (km/L) inverse formula, calculation steps, lookup tables, and FAQs.",
  h1: "Kilometers per Liter to Liters per 100km Converter",
  introduction: [
    "Kilometers per liter (km/L) and liters per 100 kilometers (L/100km) are the two primary metric metrics used worldwide to express automotive fuel economy. While both rely on the International System of Units (SI) for distance and volume, they approach vehicle efficiency from opposite mathematical angles.",
    "Kilometers per liter measures distance per volume (an economy metric where higher numbers indicate better efficiency), whereas liters per 100 kilometers measures fuel volume consumed over a fixed distance of 100 km (a consumption metric where lower numbers denote superior efficiency). Because of this reciprocal relationship, converting between them requires dividing the number 100 by the given value.",
    "Understanding this conversion helps motorists, vehicle importers, and transport engineers compare vehicle specifications across different regions, evaluate real-world trip costs, and interpret multi-standard onboard trip computer displays."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter (km/L) to Liters per 100 Kilometers (L/100km), divide 100 by the km/L value. For example, a vehicle achieving 15 km/L consumes exactly 6.67 L/100km.",
    formulaDisplay: "L/100km = 100 ÷ (km/L)",
    subtext: "Note: This is an inverse conversion. As km/L increases, L/100km decreases."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (km/L) expresses the total distance in kilometers that a motor vehicle can travel using one liter of fuel. It is widely used across Japan, India, Brazil, Mexico, and parts of Southeast Asia. Because it measures distance per unit of fuel, higher values correspond directly to better fuel economy."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) is the standard consumption metric adopted across the European Union, Canada, Australia, New Zealand, and most international regulatory bodies under UNECE standards. It measures the precise volume of fuel in liters burned to travel a distance of 100 kilometers. In this system, lower numbers represent greater efficiency."
  },
  relationship: "Because km/L measures distance per unit volume and L/100km measures volume consumed per fixed 100 km distance, the two units are exact mathematical reciprocals scaled by a factor of 100. The relationship is expressed as: (100 km) / (X km/L) = (100 / X) L/100km.",
  relationshipTitle: "km/L to L/100km Efficiency Benchmarks",
  relationshipItems: [
    { label: "8 km/L", value: "12.50 L/100km — Heavy commercial vehicle / V8 performance truck" },
    { label: "12 km/L", value: "8.33 L/100km — Midsize crossover / All-wheel drive SUV" },
    { label: "15 km/L", value: "6.67 L/100km — Standard compact sedan / Urban commuter" },
    { label: "20 km/L", value: "5.00 L/100km — Efficient turbocharged subcompact / Mild hybrid" },
    { label: "25 km/L", value: "4.00 L/100km — Full hybrid / High-efficiency diesel hatchback" }
  ],
  formula: {
    text: "Divide 100 by the fuel efficiency value in kilometers per liter to find the consumption in liters per 100 kilometers.",
    math: "L/100km = 100 / (km/L)",
    subtext: "To convert in reverse from L/100km back to km/L, use the identical reciprocal formula: km/L = 100 / (L/100km)."
  },
  formulaTitle: "km/L to L/100km Mathematical Formula",
  practicalTip: {
    title: "Mental Math Rule",
    text: "To quickly convert km/L to L/100km in your head, divide 100 by your mileage: 10 km/L is exactly 10 L/100km, 20 km/L is exactly 5 L/100km, and 25 km/L is exactly 4 L/100km."
  },
  expertNote: {
    title: "Linear Fuel Cost Calculation",
    text: "Transport planners and fleet managers prefer L/100km because it scales linearly with fuel expenditure and CO2 emissions. For instance, traveling 500 km in a vehicle rated at 6 L/100km always requires exactly 30 liters of fuel (5 × 6 = 30 L), allowing instantaneous budget forecasting."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Kei Car City Mileage",
        subtitle: "Convert a Japanese fuel rating of 22 km/L into European L/100km consumption.",
        steps: [
          "State the given mileage: 22 km/L.",
          "Apply the reciprocal formula: L/100km = 100 ÷ 22.",
          "Perform the division: 100 ÷ 22 = 4.54545...",
          "Round to two decimal places: 22 km/L equals approximately 4.55 L/100km."
        ]
      },
      {
        title: "Example 2: Mid-Size Crossover Highway Travel",
        subtitle: "Convert a highway economy rating of 14.5 km/L to L/100km.",
        steps: [
          "State the given mileage: 14.5 km/L.",
          "Apply the formula: L/100km = 100 ÷ 14.5.",
          "Perform the division: 100 ÷ 14.5 = 6.89655...",
          "Round to two decimal places: 14.5 km/L equals approximately 6.90 L/100km."
        ]
      },
      {
        title: "Example 3: Heavy Commercial Delivery Van",
        subtitle: "Convert a commercial fleet rating of 8.2 km/L into L/100km.",
        steps: [
          "State the given mileage: 8.2 km/L.",
          "Apply the formula: L/100km = 100 ÷ 8.2.",
          "Perform the division: 100 ÷ 8.2 = 12.1951...",
          "Round to two decimal places: 8.2 km/L equals approximately 12.20 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to Liters per 100km Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "Liters per 100km (L/100km)", "Efficiency Assessment"],
    rows: [
      { fromVal: "5 km/L", toVal: "20.00 L/100km", extra: "Very High Consumption (Heavy Truck / Towing)" },
      { fromVal: "8 km/L", toVal: "12.50 L/100km", extra: "High Consumption (Full-Size SUV / V8)" },
      { fromVal: "10 km/L", toVal: "10.00 L/100km", extra: "Moderate Consumption (Midsize Crossover)" },
      { fromVal: "12 km/L", toVal: "8.33 L/100km", extra: "Average Consumption (Family Sedan)" },
      { fromVal: "14 km/L", toVal: "7.14 L/100km", extra: "Good Economy (Compact Hatchback)" },
      { fromVal: "16 km/L", toVal: "6.25 L/100km", extra: "Very Good Economy (Subcompact)" },
      { fromVal: "18 km/L", toVal: "5.56 L/100km", extra: "High Efficiency (Mild Hybrid / Diesel)" },
      { fromVal: "20 km/L", toVal: "5.00 L/100km", extra: "Excellent Efficiency (Modern Full Hybrid)" },
      { fromVal: "25 km/L", toVal: "4.00 L/100km", extra: "Outstanding Efficiency (Eco Hybrid)" },
      { fromVal: "30 km/L", toVal: "3.33 L/100km", extra: "Ultra Efficient (Plug-in Hybrid in Sustained Mode)" }
    ]
  },
  applications: {
    title: "Everyday & Professional Applications",
    items: [
      {
        title: "Cross-Border Automotive Trade",
        text: "Automotive dealerships importing pre-owned vehicles from Japan (measured in km/L) to European or Australian markets convert specifications into L/100km to comply with statutory energy labeling regulations."
      },
      {
        title: "Fleet Operating Budgeting",
        text: "Logistics coordinators convert manufacturer km/L specifications into L/100km to directly multiply by planned monthly fleet distance and calculate exact fuel purchasing volumes."
      },
      {
        title: "Digital Cluster Display Configuration",
        text: "Drivers adjusting digital instrument clusters when driving across national borders convert between km/L and L/100km to understand their current instantaneous and average fuel usage."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Because the relationship is inverse, multiplying km/L by 100 produces an incorrect, nonsensical result.",
      "Misinterpreting improvement directions: A higher km/L number represents better economy, but a higher L/100km number indicates worse economy (higher fuel consumption).",
      "Confusing with US MPG: While both km/L and US MPG measure distance per volume, 1 km/L equals approximately 2.352 US MPG, not 1 US MPG."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/L to L/100km?",
      answer: "Divide 100 by the kilometers per liter rating: L/100km = 100 / (km/L). For example, 16 km/L converted is 100 / 16 = 6.25 L/100km."
    },
    {
      question: "What is 15 km/L in L/100km?",
      answer: "15 km/L equals approximately 6.67 L/100km (100 ÷ 15 = 6.6667)."
    },
    {
      question: "Why does the conversion formula divide by 100?",
      answer: "Because L/100km evaluates fuel burned over a 100 km trip, you determine how many single-kilometer fuel portions are needed for 100 km, leading to 100 ÷ (km/L)."
    },
    {
      question: "Is 20 km/L considered good fuel economy?",
      answer: "Yes, 20 km/L (equivalent to 5.00 L/100km or about 47.04 US MPG) represents excellent fuel economy typical of efficient hybrids and modern diesel cars."
    },
    {
      question: "How many L/100km is 12 km/L?",
      answer: "12 km/L equals approximately 8.33 L/100km (100 ÷ 12 = 8.3333)."
    },
    {
      question: "Which number is better: higher km/L or higher L/100km?",
      answer: "Higher km/L is better because you travel further per liter. For L/100km, lower is better because you burn less fuel per 100 km."
    },
    {
      question: "What is 10 km/L in L/100km?",
      answer: "10 km/L equals exactly 10.00 L/100km (100 ÷ 10 = 10)."
    },
    {
      question: "How do I convert 25 km/L to L/100km?",
      answer: "Divide 100 by 25 to get 4.00 L/100km."
    }
  ],
  relatedList: [
    { label: "L/100km to km/L", from: "liters-per-100km", to: "km-per-liter" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "km/L to L/km", from: "km-per-liter", to: "liters-per-km" }
  ],
  references: [
    "International Organization for Standardization (ISO 7111) — Road Vehicles: Fuel Consumption Measurement",
    "United Nations Economic Commission for Europe (UNECE Regulation No. 101) — Uniform Provisions on Fuel Consumption",
    "Japanese Ministry of Land, Infrastructure, Transport and Tourism (MLIT) — JC08 & WLTC Fuel Economy Standards"
  ]
};
