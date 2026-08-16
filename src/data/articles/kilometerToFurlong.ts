import { CustomArticleData } from "./types";

export const kilometerToFurlong: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "furlong",
  seoTitle: "Kilometer to Furlong Converter | km to fur",
  metaDescription: "Convert kilometers to furlongs (km to fur) with exact precision. Includes the official conversion formula, manual calculation steps, conversion table, and FAQs.",
  h1: "Kilometer to Furlong Converter",
  introduction: [
    "Converting kilometers (km) to furlongs (fur) bridges modern metric distance metrics with one of the most enduring units of Anglo-Saxon agrarian and sporting history. While the kilometer is the universally accepted standard for civil transportation, geography, and international athletics, the furlong remains the premier measurement unit in thoroughbred horse racing across the English-speaking world, as well as a prominent historic fixture in agricultural cadastral surveys.",
    "This technical metrology guide provides an exact mathematical and operational framework for converting kilometers to furlongs. It details the international standard definitions, demonstrates manual calculation procedures with worked examples, highlights practical applications in sports and land records, and provides an authoritative reference conversion table."
  ],
  quickAnswer: {
    text: "One kilometer is equal to approximately 4.97097 furlongs. Conversely, one standard international furlong is defined as exactly 0.201168 kilometers (or 201.168 meters).",
    formulaDisplay: "1 km = 4.97097 fur",
    subtext: "To convert kilometers to furlongs, multiply the kilometer value by 1,000 and divide by 201.168 (or multiply kilometers directly by 4.97096954)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is a fundamental decimal multiple of the meter in the International System of Units (SI), equal to 1,000 meters. Established during the French metric reforms and currently realized through the invariant speed of light in a vacuum ($299,792,458\\text{ m/s}$), the kilometer is used across road transportation networks, national topographic databases, athletic road races, and aerial navigation outside of nautical airspace."
  },
  aboutTargetUnit: {
    title: "Understanding the Furlong (fur)",
    text: "The furlong is a traditional unit of length in the British Imperial and US Customary systems, derived from the Old English words 'furh' (furrow) and 'lang' (long). Historically, it represented the distance a medieval team of oxen could plow across a field without pausing for rest. In 1593, English statute formally standardized the furlong as 220 yards (660 feet, 40 rods, or 10 Gunter's chains), which represents exactly one-eighth ($1/8$) of a statute mile. Under the International Yard and Pound Agreement of 1959, the furlong is defined as exactly 201.168 meters."
  },
  relationship: "The kilometer and the furlong share an exact mathematical ratio through the international yard definition ($1\\text{ yd} = 0.9144\\text{ m}$). Because one furlong contains 220 yards ($201.168\\text{ m}$) and one kilometer contains 1,000 meters, one kilometer contains exactly 1,000 / 201.168 = 4.9709695379 furlongs.",
  relationshipItems: [
    { label: "Kilometers to Furlongs", value: "1 km ≈ 4.97096954 fur" },
    { label: "Furlongs to Kilometers", value: "1 fur = 0.201168 km (201.168 m)" },
    { label: "Furlongs per Mile", value: "1 statute mile = 8 fur (1.609344 km)" },
    { label: "Furlongs per Chain", value: "1 fur = 10 chains (660 ft / 201.168 m)" }
  ],
  formula: {
    text: "To convert kilometers to furlongs, multiply the kilometer value by 1,000 to convert to meters, then divide by the exact furlong length of 201.168 meters. Alternatively, multiply the kilometer value directly by 4.97096954.",
    math: "Furlongs (fur) = (Kilometers (km) × 1,000) / 201.168",
    subtext: "Using 201.168 as the divisor provides exact mathematical fidelity when evaluating thoroughbred racecourses and historical farm deeds."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a Metric Racecourse Distance",
        subtitle: "Convert a 2.4-kilometer European thoroughbred race (the Prix de l'Arc de Triomphe) into furlongs.",
        steps: [
          "Identify the starting distance: 2.4 kilometers.",
          "Convert kilometers to meters: 2.4 × 1,000 = 2,400 meters.",
          "Apply the exact furlong divisor: 2,400 / 201.168 = 11.93033 furlongs.",
          "State the final result: 2.4 kilometers is approximately 11.93 furlongs (roughly 12 furlongs or 1.5 miles)."
        ]
      },
      {
        title: "Example 2: Sizing an Agricultural Land Tract",
        subtitle: "Convert a 0.804672-kilometer field perimeter into furlongs.",
        steps: [
          "Identify the starting distance: 0.804672 kilometers (0.5 statute miles).",
          "Convert kilometers to meters: 0.804672 × 1,000 = 804.672 meters.",
          "Apply the exact furlong divisor: 804.672 / 201.168 = 4.0000 furlongs.",
          "State the final result: 0.804672 kilometers equals exactly 4 furlongs."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Furlong Conversion Reference Table",
    headers: ["Kilometers (km)", "Furlongs (fur)", "Meters Equivalent", "Statute Mile Equivalent"],
    rows: [
      { fromVal: "0.1", toVal: "0.4971", extra: "100 m", extra2: "0.06214 mi" },
      { fromVal: "0.201168", toVal: "1.0000", extra: "201.168 m", extra2: "0.12500 mi (1/8 Mile)" },
      { fromVal: "0.402336", toVal: "2.0000", extra: "402.336 m", extra2: "0.25000 mi (1/4 Mile)" },
      { fromVal: "0.5", toVal: "2.4855", extra: "500 m", extra2: "0.31069 mi" },
      { fromVal: "0.804672", toVal: "4.0000", extra: "804.672 m", extra2: "0.50000 mi (1/2 Mile)" },
      { fromVal: "1", toVal: "4.9710", extra: "1,000 m", extra2: "0.62137 mi" },
      { fromVal: "1.207008", toVal: "6.0000", extra: "1,207.008 m", extra2: "0.75000 mi (3/4 Mile)" },
      { fromVal: "1.609344", toVal: "8.0000", extra: "1,609.344 m", extra2: "1.00000 mi (Exactly 1 Mile)" },
      { fromVal: "2", toVal: "9.9419", extra: "2,000 m", extra2: "1.24274 mi" },
      { fromVal: "2.01168", toVal: "10.0000", extra: "2,011.68 m", extra2: "1.25000 mi (Kentucky Derby Distance)" },
      { fromVal: "5", toVal: "24.8548", extra: "5,000 m", extra2: "3.10686 mi" },
      { fromVal: "10", toVal: "49.7097", extra: "10,000 m", extra2: "6.21371 mi" }
    ]
  },
  applications: {
    title: "Practical Real-World Applications",
    items: [
      {
        title: "Equestrian Racing & Thoroughbred Track Profiling",
        text: "In horse racing across the United States, Great Britain, Ireland, and Canada, thoroughbred race distances are classified in furlongs (e.g., 6-furlong sprints, the 10-furlong Kentucky Derby, and the 12-furlong Belmont Stakes). Equine veterinarians, trainers, and sports analysts convert metric GPS tracking data to furlongs to evaluate fractional split times."
      },
      {
        title: "Historical Agricultural Land Titling",
        text: "In historical English open-field agriculture and early North American homestead patents, farm plots were laid out in strips of one furlong (660 ft) in length by one chain (66 ft) in width, comprising exactly one acre. Land title researchers convert metric survey plans back to furlongs to interpret historical boundary grants."
      },
      {
        title: "Urban Grid Planning & Historical Cartography",
        text: "Numerous 19th-century planned cities across North America and Australia established city blocks measuring one furlong (220 yards or 201.168 meters) on a side, creating exactly eight blocks per statute mile. Urban historians and geographers convert metric municipal GIS data to furlongs to reconstruct original town plats."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 furlong equals 200 meters: While 200 meters is a convenient mental approximation in racing, the true international furlong is 201.168 meters. Over a 10-kilometer distance, this approximation introduces an error of over 14 meters.",
      "Confusing furlongs with chains or rods: Remember the hierarchy: 1 furlong = 10 chains = 40 rods = 220 yards = 660 feet.",
      "Misinterpreting fractional racing distances: In thoroughbred racing, an 8.5-furlong race is 1 mile and 1/16th (1,709.928 meters), not 850 meters.",
      "Mixing statute and nautical measurements: The furlong is strictly a statute land-survey and equestrian unit; it is not related to the nautical mile or nautical cable."
    ]
  },
  faqs: [
    {
      question: "How many furlongs are in one kilometer?",
      answer: "There are approximately 4.97097 furlongs in one kilometer. This is calculated by dividing 1,000 meters by 201.168 meters (the exact length of an international furlong)."
    },
    {
      question: "What is the formula to convert kilometers to furlongs?",
      answer: "The formula is: Furlongs = (Kilometers × 1,000) / 201.168. Alternatively, you can multiply the kilometer value directly by 4.97096954."
    },
    {
      question: "What is the origin of the word furlong?",
      answer: "The word 'furlong' comes from the Old English 'furh' (furrow) and 'lang' (long), representing the distance a team of oxen could plow across a field without stopping to rest."
    },
    {
      question: "How many furlongs are in one statute mile?",
      answer: "There are exactly 8 furlongs in one statute mile (5,280 feet / 660 feet = 8 furlongs). Therefore, 1 furlong equals exactly 0.125 miles."
    },
    {
      question: "How many meters is one furlong?",
      answer: "One international furlong is legally defined as exactly 201.168 meters (660 international feet × 0.3048 meters per foot)."
    },
    {
      question: "Why is horse racing measured in furlongs?",
      answer: "Horse racing adopted the furlong in 16th-century England because traditional racecourses were laid out across open agricultural fields measured in furlong furrow lengths."
    },
    {
      question: "How long is a 10-furlong horse race in kilometers?",
      answer: "A 10-furlong race (such as the Kentucky Derby) equals 10 × 201.168 meters = 2,011.68 meters, or approximately 2.012 kilometers (1.25 statute miles)."
    },
    {
      question: "How do I convert 5 kilometers to furlongs?",
      answer: "Multiply 5 by 1,000 to get 5,000 meters, then divide by 201.168. The calculation gives 5,000 / 201.168 = 24.8548 furlongs."
    },
    {
      question: "What is the standard abbreviation for furlong?",
      answer: "The standard abbreviation for the furlong is 'fur', written in lowercase without punctuation."
    },
    {
      question: "How many chains make up a furlong?",
      answer: "There are exactly 10 Gunter's chains in one furlong (10 × 66 feet = 660 feet = 1 furlong)."
    }
  ],
  relatedList: [
    { label: "Furlong to Kilometer", from: "furlong", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Mile to Furlong", from: "mile", to: "furlong" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) Special Publication 811.",
    "BIPM SI Brochure (9th Edition) - Units of Measurement.",
    "British Weights and Measures Act of 1824 and English Statute of 1593 (35 Eliz. I, c. 6)."
  ]
};
