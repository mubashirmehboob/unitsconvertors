import { CustomArticleData } from "./types";

export const kilometerToChain: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "chain",
  seoTitle: "Kilometer to Chain Converter | km to ch",
  metaDescription: "Convert kilometers to chains (km to ch) with high precision. Discover Gunter's surveying formula, manual calculation steps, conversion table, and FAQs.",
  h1: "Kilometer to Chain Converter",
  introduction: [
    "Converting kilometers (km) to chains (ch) connects modern metric spatial data with Gunter's surveying chain, a pivotal measurement standard in Anglo-American land tenure. While kilometers represent the international baseline for road networks, geographic positioning, and municipal boundary definitions, chains remain the foundational legal framework for millions of rural property deeds, railway rights-of-way, and public land survey systems across North America, the UK, Australia, and New Zealand.",
    "This engineering and land-surveying guide provides an accurate breakdown of the kilometer-to-chain conversion. It presents the exact mathematical conversion ratio established under international treaty, outlines manual calculation procedures, works through practical field examples, and supplies a comprehensive conversion chart."
  ],
  quickAnswer: {
    text: "One kilometer is equal to approximately 49.70970 chains. Conversely, one standard international chain (Gunter's chain) is defined as exactly 0.0201168 kilometers (or 20.1168 meters).",
    formulaDisplay: "1 km = 49.70970 ch",
    subtext: "To convert kilometers to chains, multiply kilometers by 1,000 and divide by 20.1168 (or multiply kilometers directly by 49.7096954)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is a recognized multiple of the meter in the International System of Units (SI), equal to 10³ (1,000) meters. Governed by the fundamental physical constant of the speed of light in a vacuum ($c = 299,792,458\\text{ m/s}$), the kilometer serves as the primary metric unit for global transportation, geodetic positioning, civil infrastructure projects, and national mapping agencies worldwide."
  },
  aboutTargetUnit: {
    title: "Understanding the Chain (ch)",
    text: "The chain (specifically Gunter's chain) is a traditional unit of length in the British Imperial and US Customary measurement systems. Invented in 1620 by English mathematician Edmund Gunter, the chain was designed specifically to simplify land area calculations: a chain contains exactly 100 links and measures 66 feet (22 yards, or 4 rods). Because 10 square chains equal exactly 1 acre (43,560 square feet), Gunter's chain became the standard instrument for the US Public Land Survey System (PLSS). Under the 1959 International Yard and Pound Agreement, the international chain is defined as exactly 20.1168 meters."
  },
  relationship: "The kilometer and Gunter's chain share an exact mathematical relationship based on the international yard definition ($1\\text{ yd} = 0.9144\\text{ m}$). Because one chain contains 22 yards ($20.1168\\text{ m}$) and one kilometer contains 1,000 meters, one kilometer contains exactly 1,000 / 20.1168 = 49.709695379 chains.",
  relationshipItems: [
    { label: "Kilometers to Chains", value: "1 km ≈ 49.7096954 ch" },
    { label: "Chains to Kilometers", value: "1 ch = 0.0201168 km (20.1168 m)" },
    { label: "Chains per Mile", value: "1 statute mile = 80 ch (1.609344 km)" },
    { label: "Links per Chain", value: "1 chain = 100 links (7.92 in / 0.201168 m each)" }
  ],
  formula: {
    text: "To convert kilometers to chains, multiply the kilometer value by 1,000 to convert to meters, then divide by the exact chain length of 20.1168 meters. Alternatively, multiply the kilometer value directly by 49.7096954.",
    math: "Chains (ch) = (Kilometers (km) × 1,000) / 20.1168",
    subtext: "Using 20.1168 as the divisor provides exact mathematical alignment with historic cadastral parcel boundaries."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Retracing a Section Boundary in the US PLSS",
        subtitle: "Convert a 1.609344-kilometer section line into chains.",
        steps: [
          "Identify the starting distance: 1.609344 kilometers (1 statute mile).",
          "Convert kilometers to meters: 1.609344 × 1,000 = 1,609.344 meters.",
          "Apply the exact chain divisor: 1,609.344 / 20.1168 = 80.0000 chains.",
          "State the final result: 1.609344 kilometers equals exactly 80 chains."
        ]
      },
      {
        title: "Example 2: Wildland Fire Perimeter Assessment",
        subtitle: "Convert a 3.5-kilometer wildfire control line into chains.",
        steps: [
          "Identify the starting distance: 3.5 kilometers.",
          "Convert kilometers to meters: 3.5 × 1,000 = 3,500 meters.",
          "Apply the exact chain divisor: 3,500 / 20.1168 = 173.98393 chains.",
          "State the final result: 3.5 kilometers is equal to approximately 173.98 chains."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Chain Conversion Reference Table",
    headers: ["Kilometers (km)", "Chains (ch)", "Meters Equivalent", "Statute Mile Equivalent"],
    rows: [
      { fromVal: "0.0201168", toVal: "1.0000", extra: "20.1168 m", extra2: "0.01250 mi" },
      { fromVal: "0.05", toVal: "2.4855", extra: "50 m", extra2: "0.03107 mi" },
      { fromVal: "0.1", toVal: "4.9710", extra: "100 m", extra2: "0.06214 mi" },
      { fromVal: "0.201168", toVal: "10.0000", extra: "201.168 m", extra2: "0.12500 mi (1 Furlong)" },
      { fromVal: "0.5", toVal: "24.8548", extra: "500 m", extra2: "0.31069 mi" },
      { fromVal: "1", toVal: "49.7097", extra: "1,000 m", extra2: "0.62137 mi" },
      { fromVal: "1.609344", toVal: "80.0000", extra: "1,609.344 m", extra2: "1.00000 mi (Exactly 1 Mile)" },
      { fromVal: "2", toVal: "99.4194", extra: "2,000 m", extra2: "1.24274 mi" },
      { fromVal: "5", toVal: "248.5485", extra: "5,000 m", extra2: "3.10686 mi" },
      { fromVal: "10", toVal: "497.0970", extra: "10,000 m", extra2: "6.21371 mi" },
      { fromVal: "25", toVal: "1,242.7424", extra: "25,000 m", extra2: "15.53428 mi" },
      { fromVal: "50", toVal: "2,485.4848", extra: "50,000 m", extra2: "31.06856 mi" }
    ]
  },
  applications: {
    title: "Practical Real-World Applications",
    items: [
      {
        title: "Public Land Survey System (PLSS) Boundary Recovery",
        text: "In the United States and Canada, township and section grids were established in 80-chain by 80-chain square miles (640-acre sections). Land surveyors integrating metric RTK GPS coordinates convert kilometer traverses into chains to locate original stone markers and corner monuments."
      },
      {
        title: "Wildland Firefighting & Incident Command",
        text: "The National Wildfire Coordinating Group (NWCG) in the United States and forestry services internationally measure fire spread rates and fireline construction in chains per hour (e.g., 1 chain/hour ≈ 20.1 m/hr). Incident commanders convert metric aerial infrared perimeter scans to chains for resource deployment."
      },
      {
        title: "Railroad Right-of-Way & Track Maintenance",
        text: "Historical rail networks across the United Kingdom, Commonwealth countries, and North America cataloged mileposts and track segments using miles and chains (e.g., Mile 42, Chain 35). Modern civil engineering rail contractors convert kilometer alignment files to chains to cross-reference legacy track charts."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing Gunter's chain with Ramsden's engineer chain: Gunter's chain is 66 feet (20.1168 m), whereas Ramsden's engineer chain is 100 feet (30.48 m). Standard legal cadastral records almost exclusively reference Gunter's chain.",
      "Assuming 1 chain equals 100 feet: A chain is divided into 100 links, but the total length is 66 feet. Each individual link measures exactly 7.92 inches (0.201168 meters).",
      "Approximating the conversion factor as 50 chains/km: Using 50 instead of 49.7097 introduces an error of nearly 3 chains (approx. 60 meters) over a 10-kilometer project.",
      "Overlooking US Survey Foot differences in legacy deeds: In some state plane coordinate systems, older US survey feet ($1200/3937\\text{ m}$) may produce a 2-ppm variance compared to international chains."
    ]
  },
  faqs: [
    {
      question: "How many chains are in one kilometer?",
      answer: "There are approximately 49.70970 chains in one kilometer. This value is derived by dividing 1,000 meters by 20.1168 meters (the exact length of Gunter's chain)."
    },
    {
      question: "What is the formula to convert kilometers to chains?",
      answer: "The formula is: Chains = (Kilometers × 1,000) / 20.1168. Alternatively, you can multiply the kilometer value directly by 49.7096954."
    },
    {
      question: "Why is a chain defined as 66 feet?",
      answer: "English mathematician Edmund Gunter established the 66-foot length in 1620 because 10 square chains equal exactly 1 acre (43,560 square feet), simplifying land area calculations."
    },
    {
      question: "How many chains are in one statute mile?",
      answer: "There are exactly 80 chains in one standard statute mile (5,280 feet / 66 feet = 80 chains)."
    },
    {
      question: "Why do forestry and wildfire crews use chains?",
      answer: "Wildland fire agencies use chains because fire spread rate in chains per hour directly relates to acreage burned per hour, allowing incident commanders to estimate potential fire growth quickly."
    },
    {
      question: "How many links are in a chain?",
      answer: "A standard Gunter's chain contains exactly 100 metal links. Each individual link is 7.92 inches (0.201168 meters) long."
    },
    {
      question: "How do I convert 10 kilometers to chains?",
      answer: "Multiply 10 by 1,000 to get 10,000 meters, then divide by 20.1168. The calculation gives 10,000 / 20.1168 = 497.0970 chains."
    },
    {
      question: "What is the abbreviation for chain?",
      answer: "The standard abbreviation for the chain is 'ch'. It is written in lowercase without periods."
    },
    {
      question: "How many rods make up one chain?",
      answer: "There are exactly 4 rods in one chain. Since a rod is 16.5 feet, 4 × 16.5 feet = 66 feet (1 chain)."
    },
    {
      question: "What is the difference between an engineer's chain and Gunter's chain?",
      answer: "Gunter's chain is 66 feet long (100 links of 7.92 inches), used for land deeds and acre calculation. An engineer's chain is 100 feet long (100 links of 1 foot)."
    }
  ],
  relatedList: [
    { label: "Chain to Kilometer", from: "chain", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
    { label: "Mile to Chain", from: "mile", to: "chain" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) Handbook 44.",
    "US Bureau of Land Management (BLM) - Manual of Surveying Instructions.",
    "National Wildfire Coordinating Group (NWCG) Standards for Wildland Fire Resource Management."
  ]
};
