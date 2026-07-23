import { CustomArticleData } from "./types";

export const meterToCubit: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "cubit",
  seoTitle: "Meter to Cubit Converter - m to ct",
  metaDescription: "Convert meters to cubits (m to ct) with high precision. See the ancient biblical and Egyptian conversion factors, manual formulas, and FAQs.",
  h1: "Meter to Cubit Converter",
  introduction: [
    "The meter is the standard SI unit of length, while the cubit is an ancient unit once used across Egypt, Mesopotamia, and other early civilizations. Converting meters to cubits is useful when studying historical texts, archaeology, or traditional architecture.",
    "This reference guide provides a scientifically accurate breakdown of the meter-to-cubit conversion. It includes the exact conversion factor established by international standardizers, details manual calculation steps, provides worked examples, and addresses common mistakes in analyzing historical and archaeological records."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 2.187226597 cubits (based on the standard English cubit of 18 inches). Conversely, one standard international cubit is defined as exactly 18 inches, which is exactly 0.4572 meters (or 45.72 centimeters).",
    formulaDisplay: "1 m = 2.187226597 ct",
    subtext: "To convert meters to cubits, divide the metric value by 0.4572, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the SI base unit of length, defined in modern quantum physics by the speed of light in a vacuum. Light covers exactly one meter in a duration of 1/299,792,458 of a second. This absolute definition guarantees that the meter is stable, highly reproducible, and independent of any physical artifact."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubit (ct)",
    text: "The cubit, historically modeled after the distance from the elbow to the tip of the middle finger, was first used in ancient Egypt around 3000 BCE. While cubits varied across kingdoms (e.g., the Egyptian Royal Cubit was around 52.4 cm), the standard English cubit was standardized at exactly 18 inches. Under the International Yard and Pound Agreement of 1959, which fixed the inch, the standard cubit was locked at exactly 45.72 centimeters (or 0.4572 meters), linking archaeological records directly to the metric system."
  },
  relationship: "The standard cubit is a fraction of the meter. Because a standard cubit contains exactly 18 inches, and each inch is exactly 0.0254 meters, a cubit is equal to exactly 18 × 0.0254 = 0.4572 meters.",
  relationshipItems: [
    { label: "Meters to Cubits", value: "1 m = 2.187226597 ct" },
    { label: "Cubits to Meters", value: "1 ct = 0.4572 m" }
  ],
  formula: {
    text: "To find cubits from meters manually, divide your metric value by 0.4572. Alternatively, multiply the meter value by the decimal factor of 2.187226597.",
    math: "Cubits (ct) = Meters (m) / 0.4572",
    subtext: "Using 0.4572 as the divisor guarantees that your calculations align precisely with the standard 18-inch cubit definition."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Analyzing Biblical Text Description",
        subtitle: "Convert Noah's Ark length of 137.16 meters into standard cubits.",
        steps: [
          "Identify the starting length: 137.16 meters.",
          "Apply the standard formula: Divide the meter value by 0.4572.",
          "Perform the division: 137.16 / 0.4572 = 300.",
          "State the final result: 137.16 meters is exactly equal to 300 standard cubits (matching the biblical dimensions of Noah's Ark)."
        ]
      },
      {
        title: "Example 2: Analyzing Archaeological Ruins",
        subtitle: "Convert 5 meters of an ancient temple wall excavation to standard cubits.",
        steps: [
          "Identify the starting length: 5 meters.",
          "Apply the multiplier: Multiply 5 by 2.187226597.",
          "Perform the arithmetic: 5 × 2.187226597 = 10.936132995.",
          "State the final result: 5 meters is equivalent to approximately 10.94 standard cubits."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Cubit Reference Table",
    headers: ["Meters (m)", "Cubits (ct)", "Imperial Inches Equivalent"],
    rows: [
      { fromVal: "0.5", toVal: "1.0936", extra: "Approx. 19.7 inches" },
      { fromVal: "1.0", toVal: "2.1872", extra: "Approx. 39.4 inches" },
      { fromVal: "2.0", toVal: "4.3745", extra: "Approx. 78.7 inches" },
      { fromVal: "4.572", toVal: "10.0000", extra: "Exactly 180 inches (15 feet)" },
      { fromVal: "5.0", toVal: "10.9361", extra: "Approx. 196.9 inches" },
      { fromVal: "10.0", toVal: "21.8723", extra: "Approx. 393.7 inches" },
      { fromVal: "45.72", toVal: "100.0000", extra: "Exactly 1,800 inches (150 feet)" },
      { fromVal: "137.16", toVal: "300.0000", extra: "Exactly 5,400 inches (450 feet)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Archaeological Excavations",
        text: "Archaeologists excavating ancient Near-Eastern ruins discover foundations built in local cubits. Converting modern metric measurements back to cubits allows researchers to identify the mathematical planning used by ancient architects."
      },
      {
        title: "Biblical & Historical Studies",
        text: "The Bible and other historical texts describe structures like Solomon's Temple in cubits. Converting these measurements to meters helps students and theologians visualize the actual dimensions of these historic structures."
      },
      {
        title: "Art & Architecture History",
        text: "Historians studying classical proportions use cubit conversions to analyze early sculptures and column structures, showing how bodily proportions formed early design principles."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Assuming a single cubit standard exists: The Egyptian Royal Cubit (approx. 52.4 cm) and Roman Cubit (approx. 44.4 cm) differ from the standard English cubit (45.72 cm). Always verify which historical standard applies to your excavation or text.",
      "Early decimal rounding: Rounding the divisor to 0.46 simplifies mental calculations, but introduces an error of over 0.61%. Always use 0.4572 for precise architectural work.",
      "Assuming the cubit is a modern unit of commerce: The cubit is an ancient unit, but its standard reference is internationally anchored to the metric system for precise consistency."
    ]
  },
  faqs: [
    {
      question: "Are cubits still used today?",
      answer: "No. The cubit is considered an obsolete unit and is no longer used in daily construction or science, but remains highly relevant in historical, archaeological, and biblical studies."
    },
    {
      question: "How many inches are in a standard cubit?",
      answer: "There are exactly 18 inches in a standard English/international cubit."
    },
    {
      question: "How do I convert meters to cubits manually?",
      answer: "To convert meters to cubits manually, divide the meter value by 0.4572. For example, 10 meters divided by 0.4572 is approximately 21.87 cubits."
    },
    {
      question: "What is the Egyptian Royal Cubit?",
      answer: "The Egyptian Royal Cubit was a historic standard length measuring approximately 52.4 to 52.5 centimeters, which is longer than the standard 18-inch English cubit."
    },
    {
      question: "How many cubits was Noah's Ark?",
      answer: "According to the Book of Genesis, Noah's Ark was exactly 300 cubits long, 50 cubits wide, and 30 cubits high. In standard cubits, this equals 137.16 meters long, 22.86 meters wide, and 13.72 meters high."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 0.4572 applies to all decimal values. For instance, 1.5 meters is equal to approximately 3.28 cubits."
    },
    {
      question: "What is the abbreviation for the cubit unit?",
      answer: "The standard abbreviation for the cubit is 'ct', written in lowercase without any punctuation."
    },
    {
      question: "Why was the cubit modeled after the forearm?",
      answer: "The cubit was modeled after the forearm because it was a highly accessible personal ruler for carpenters and brickmasons in early human civilizations before the advent of standardized metal tapes."
    }
  ],
  relatedList: [
    { label: "Cubit to Meter", from: "cubit", to: "meter" },
    { label: "Meter to Kilometer", from: "meter", to: "kilometer" },
    { label: "Meter to Centimeter", from: "meter", to: "centimeter" },
    { label: "Meter to Millimeter", from: "meter", to: "millimeter" },
    { label: "Meter to Micrometer", from: "meter", to: "micrometer" },
    { label: "Meter to Nanometer", from: "meter", to: "nanometer" },
    { label: "Meter to Mile", from: "meter", to: "mile" },
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Meter to Foot", from: "meter", to: "foot" },
    { label: "Meter to Inch", from: "meter", to: "inch" },
    { label: "Meter to Nautical Mile", from: "meter", to: "nautical-mile" },
    { label: "Meter to Rod", from: "meter", to: "rod" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Meter to Hand", from: "meter", to: "hand" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "Ancient Metrology and Surveying Standards (Egyptian Antiquities Authority).",
    "The Oxford Companion to Archaeology."
  ]
};
