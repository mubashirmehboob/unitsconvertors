import { CustomArticleData } from "./types";

export const kilometerToLeague: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "league",
  seoTitle: "Kilometer to League Converter | km to lea",
  metaDescription: "Convert kilometers to leagues (km to lea) with high accuracy. Explore the land league definition, manual formula, conversion table, and FAQs.",
  h1: "Kilometer to League Converter",
  introduction: [
    "Converting kilometers (km) to leagues (lea) connects modern scientific distance measurements with an ancient geographic and maritime unit of travel. While the kilometer is the universally adopted metric standard for national transit systems, civil aviation routes, and global cartography, the league remains an important historical reference in classical literature, early territorial claims, maritime history, and colonial land grants across Europe and the Americas.",
    "This metrological guide provides a clear and mathematically rigorous breakdown of the kilometer-to-league conversion. It covers the international definition of the statute land league, demonstrates step-by-step manual calculations, analyzes historical contexts, and presents an authoritative conversion table for historians, cartographers, and students."
  ],
  quickAnswer: {
    text: "One kilometer is equal to approximately 0.20712 leagues. Conversely, one standard international land league (statute league) is defined as exactly 4.828032 kilometers (or exactly 3 statute miles / 4,828.032 meters).",
    formulaDisplay: "1 km = 0.20712 lea",
    subtext: "To convert kilometers to leagues, divide the kilometer value by 4.828032 (or multiply kilometers directly by 0.20712373)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is the standard decimal unit of length for geographic scale in the International System of Units (SI). Equivalent to 1,000 meters, it is defined through the universal physical constant of the speed of light in a vacuum ($299,792,458\\text{ m/s}$). The kilometer is utilized by transportation departments, geodetic survey agencies, and satellite navigation systems globally to express overland distances, transit corridors, and administrative boundaries."
  },
  aboutTargetUnit: {
    title: "Understanding the League (lea)",
    text: "The league is an ancient unit of distance that historically represented the distance an adult person (or an army marching column) could walk in one hour. In the Anglo-American tradition, the land league (or statute league) was standardized as exactly three statute miles (15,840 feet, 5,280 yards, or 24 furlongs). Following the International Yard and Pound Agreement of 1959, which established the international statute mile as exactly 1,609.344 meters, the international land league was fixed at exactly 4,828.032 meters (4.828032 kilometers)."
  },
  relationship: "The kilometer and the international statute league share an exact mathematical ratio defined by the statutory mile ($1\\text{ mi} = 1.609344\\text{ km}$). Because one land league equals exactly 3 statute miles ($3 \\times 1.609344\\text{ km} = 4.828032\\text{ km}$), one kilometer contains exactly 1 / 4.828032 = 0.207123730746 leagues.",
  relationshipItems: [
    { label: "Kilometers to Leagues", value: "1 km ≈ 0.20712373 lea" },
    { label: "Leagues to Kilometers", value: "1 lea = 4.828032 km (4,828.032 m)" },
    { label: "Statute Miles per League", value: "1 land league = 3 statute miles (15,840 ft)" },
    { label: "Nautical Leagues (Marine)", value: "1 nautical league = 3 nautical miles (5.556 km)" }
  ],
  formula: {
    text: "To convert kilometers to leagues, divide the distance in kilometers by 4.828032. Alternatively, multiply the kilometer value directly by 0.20712373.",
    math: "Leagues (lea) = Kilometers (km) / 4.828032",
    subtext: "Using 4.828032 as the divisor yields the standard international land league (3 statute miles)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a Long-Distance March",
        subtitle: "Convert a 25-kilometer overland military march into leagues.",
        steps: [
          "Identify the starting distance: 25 kilometers.",
          "Apply the standard statute league divisor: Divide 25 by 4.828032.",
          "Perform the arithmetic: 25 / 4.828032 = 5.178093 leagues.",
          "State the final result: 25 kilometers is equal to approximately 5.18 leagues."
        ]
      },
      {
        title: "Example 2: Analyzing Historical Spanish Land Grants",
        subtitle: "Convert a 14.484096-kilometer boundary line into leagues.",
        steps: [
          "Identify the starting distance: 14.484096 kilometers (9 statute miles).",
          "Apply the exact league divisor: 14.484096 / 4.828032 = 3.0000 leagues.",
          "State the final result: 14.484096 kilometers equals exactly 3.0 leagues."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to League Conversion Reference Table",
    headers: ["Kilometers (km)", "Leagues (lea)", "Statute Miles Equivalent", "Meters Equivalent"],
    rows: [
      { fromVal: "1", toVal: "0.2071", extra: "0.62137 mi", extra2: "1,000 m" },
      { fromVal: "2", toVal: "0.4142", extra: "1.24274 mi", extra2: "2,000 m" },
      { fromVal: "4.828032", toVal: "1.0000", extra: "3.00000 mi (1 League)", extra2: "4,828.032 m" },
      { fromVal: "5", toVal: "1.0356", extra: "3.10686 mi", extra2: "5,000 m" },
      { fromVal: "10", toVal: "2.0712", extra: "6.21371 mi", extra2: "10,000 m" },
      { fromVal: "14.484096", toVal: "3.0000", extra: "9.00000 mi (Historic Territorial Sea Limit)", extra2: "14,484.096 m" },
      { fromVal: "20", toVal: "4.1425", extra: "12.42742 mi", extra2: "20,000 m" },
      { fromVal: "24.14016", toVal: "5.0000", extra: "15.00000 mi", extra2: "24,140.16 m" },
      { fromVal: "50", toVal: "10.3562", extra: "31.06856 mi", extra2: "50,000 m" },
      { fromVal: "100", toVal: "20.7124", extra: "62.13712 mi", extra2: "100,000 m" },
      { fromVal: "500", toVal: "103.5619", extra: "310.68560 mi", extra2: "500,000 m" },
      { fromVal: "1,000", toVal: "207.1237", extra: "621.37119 mi", extra2: "1,000,000 m" }
    ]
  },
  applications: {
    title: "Practical Real-World Applications",
    items: [
      {
        title: "Historical Cartography & Maritime Territorial Limits",
        text: "In historical international maritime law, a nation's territorial waters were traditionally defined as extending one league (three nautical or statute miles) from the coastline—commonly known as the 'cannon-shot rule'. Maritime historians and international lawyers convert metric bathymetric charts to leagues to study historical treaty boundaries."
      },
      {
        title: "Colonial Land Grants & Archival Research",
        text: "In the southwestern United States and Latin America, historical Spanish and Mexican land grants (such as the *sitio de ganado mayor*) defined rancho perimeters in leagues (specifically the Spanish *legua* of 5,000 varas, approx. 4.19 km). Historical geographers convert modern metric coordinates to leagues to evaluate original patent boundaries."
      },
      {
        title: "Literary Analysis & Classical Geography",
        text: "In classic literature, such as Jules Verne's *Twenty Thousand Leagues Under the Sea* and Tolkien's Middle-earth narratives, long overland and underwater travels are recorded in leagues. Translating kilometers to leagues helps students and readers conceptualize the true physical scale of these journeys."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the land league with the nautical (marine) league: The land league is 3 statute miles (4.828032 km), whereas the nautical league is 3 nautical miles (5.556 km). Always confirm whether the context is terrestrial or maritime.",
      "Misinterpreting historical variations of the league: Historical leagues varied significantly by country. For instance, the French metric *lieue* was exactly 4.0 km, the Spanish *legua* was approximately 4.19 km, and the English statute league is 4.828032 km.",
      "Assuming the league measures depth: In literature such as *Twenty Thousand Leagues Under the Sea*, the league denotes horizontal distance traveled, not vertical depth (Earth's total diameter is only ~12,742 km).",
      "Approximating 1 league as 5 kilometers: While 5 km is a rough rule of thumb, it introduces an error of over 3.5% (approx. 172 meters per league). Always use 4.828032 km for accurate calculations."
    ]
  },
  faqs: [
    {
      question: "How many leagues are in one kilometer?",
      answer: "There are approximately 0.20712 leagues in one kilometer. This is derived by dividing 1 kilometer by 4.828032 kilometers (the exact length of an international land league)."
    },
    {
      question: "What is the formula to convert kilometers to leagues?",
      answer: "The formula is: Leagues = Kilometers / 4.828032. Alternatively, you can multiply kilometers by 0.20712373."
    },
    {
      question: "How many kilometers are in one standard league?",
      answer: "One standard international land league equals exactly 4.828032 kilometers (or 4,828.032 meters), which corresponds to exactly 3 statute miles."
    },
    {
      question: "What is the difference between a land league and a marine league?",
      answer: "A land league equals 3 statute miles (4.828032 km), while a marine (nautical) league equals 3 nautical miles (5.556 km)."
    },
    {
      question: "Why was a league defined as 3 miles?",
      answer: "The league was traditionally defined as the distance an average person could walk in one hour under normal terrain conditions."
    },
    {
      question: "How do I convert 100 kilometers to leagues?",
      answer: "Divide 100 by 4.828032. The calculation gives 100 / 4.828032 = 20.7124 leagues."
    },
    {
      question: "What did Jules Verne mean by 20,000 leagues?",
      answer: "Jules Verne used the French metric league (4 kilometers per league). 20,000 leagues equaled 80,000 kilometers, representing the total distance traveled by the submarine Nautilus around the globe."
    },
    {
      question: "What is the abbreviation for league?",
      answer: "The standard abbreviation for the league is 'lea', written in lowercase without periods."
    },
    {
      question: "Are leagues still used in official modern measurement?",
      answer: "No. The league is considered an obsolete historical unit and has been replaced by the kilometer and nautical mile in modern science and navigation."
    },
    {
      question: "How many furlongs are in a league?",
      answer: "There are exactly 24 furlongs in one statute league (3 miles × 8 furlongs per mile = 24 furlongs)."
    }
  ],
  relatedList: [
    { label: "League to Kilometer", from: "league", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Mile to League", from: "mile", to: "league" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) Special Publication 811.",
    "BIPM SI Brochure (9th Edition) - International System of Units.",
    "British Weights and Measures Act of 1824."
  ]
};
