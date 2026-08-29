import { CustomArticleData } from "./types";

export const decibelSplToBel: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "bel",
  seoTitle: "Decibel SPL to Bel Converter (dB SPL to B) | UnitsConvertors.com",
  metaDescription: "Convert Decibel Sound Pressure Level to Bels (dB SPL to B) with scientific precision. Learn the 10:1 logarithmic relationship, formulas, acoustic examples, and conversion tables.",
  h1: "Decibel SPL to Bel Converter",
  introduction: [
    "In physical acoustics, telecommunications, and acoustic equipment specifications, sound power and pressure levels are expressed using both the bel (B) and the decibel sound pressure level (dB SPL). Named in honor of Alexander Graham Bell, the bel represents a base-10 logarithmic ratio between physical acoustic quantities.",
    "Because the bel is a relatively large unit, modern acoustics primarily uses the decibel (one-tenth of a bel, prefixed with 'deci-'). Decibel sound pressure level (dB SPL) anchors this logarithmic scale to the airborne hearing threshold of 20 micropascals (20 µPa). To convert a dB SPL reading into bels, you divide the value by 10.",
    "This guide covers the acoustic physics behind the bel and decibel, mathematical formulas, step-by-step conversion examples, equipment noise rating standards (such as ISO 7779 sound power in bels), and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert Decibel SPL to Bels, divide the sound level by 10. For example, a loud industrial noise level of 90 dB SPL is equivalent to 9.0 Bels (B).",
    formulaDisplay: "B = dB SPL / 10",
    subtext: "1 Bel equals exactly 10 Decibels SPL relative to the standard acoustic reference baseline p₀ = 20 µPa."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is the standard logarithmic measure of effective root-mean-square (RMS) sound pressure in air relative to p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). Defined under ISO 80000-8, 0 dB SPL corresponds to the nominal human hearing threshold at 1 kHz, while 120 dB SPL represents the threshold of auditory pain."
  },
  aboutTargetUnit: {
    title: "Understanding the Bel (B)",
    text: "The bel (symbol: B) is the fundamental dimensionless logarithmic unit created by Bell System engineers in the 1920s to quantify transmission loss and signal ratios in telephony. In acoustics, 1 bel represents an order-of-magnitude (factor of 10) increase in acoustic sound power or sound intensity. Computer hardware acoustic standards (such as ISO 7779 and Blue Angel certifications) frequently report acoustic sound power emission levels (LWAd) in bels."
  },
  relationship: "The metric prefix 'deci-' designates one-tenth. Therefore, 1 bel equals exactly 10 decibels (1 B = 10 dB SPL). To convert dB SPL to bels, simply divide by 10: B = (dB SPL) / 10.",
  relationshipTitle: "Decibel SPL to Bel Acoustic Comparison",
  relationshipItems: [
    { label: "0 dB SPL", value: "0.0 B (Threshold of human hearing)" },
    { label: "30 dB SPL", value: "3.0 B (Quiet recording booth or quiet library)" },
    { label: "50 dB SPL", value: "5.0 B (Typical quiet office environment)" },
    { label: "70 dB SPL", value: "7.0 B (Vacuum cleaner or moderate road traffic at 10 m)" },
    { label: "85 dB SPL", value: "8.5 B (OSHA workplace hearing conservation threshold)" },
    { label: "100 dB SPL", value: "10.0 B (Heavy industrial press, gas lawnmower)" },
    { label: "120 dB SPL", value: "12.0 B (Threshold of acoustic pain)" }
  ],
  formula: {
    text: "Divide the decibel sound pressure level by 10 to obtain the acoustic level in bels.",
    math: "B = dB SPL / 10",
    subtext: "Where 1 B = 10 dB SPL relative to reference pressure p₀ = 20 µPa."
  },
  formulaTitle: "Decibel SPL to Bel Conversion Formula",
  practicalTip: {
    title: "Equipment Acoustic Ratings in Bels",
    text: "Computer server racks, cooling fans, and laser printers often publish acoustic sound power levels in bels (e.g., 6.4 B) rather than decibels. Multiplying by 10 gives the equivalent 64 dB sound power level."
  },
  expertNote: {
    title: "ISO 7779 & ECMA-74 Computer Acoustics",
    text: "International testing standard ISO 7779 mandates that declared sound power levels (LWAd) for information technology equipment be presented in bels (B) rather than decibels (dB) to avoid consumer confusion between sound power emissions (in bels) and perceived sound pressure levels (in dB SPL at the operator's position)."
  },
  examples: {
    title: "Step-by-Step dB SPL to Bel Calculation Examples",
    items: [
      {
        title: "Example 1: Server Room Acoustic Level",
        subtitle: "A data center rack produces a continuous ambient noise level of 74 dB SPL.",
        steps: [
          "Identify measured acoustic sound level: 74 dB SPL.",
          "Apply the conversion formula: B = 74 / 10.",
          "Perform the division: 74 / 10 = 7.4.",
          "Final Result: 74 dB SPL equals 7.4 Bels (B)."
        ]
      },
      {
        title: "Example 2: Lawn Mower Operational Noise",
        subtitle: "A gasoline-powered garden mower emits 96 dB SPL at operator ear level.",
        steps: [
          "Record measured noise level: 96 dB SPL.",
          "Divide by 10 to convert to bels: B = 96 / 10.",
          "Calculate: B = 9.6.",
          "Final Result: 96 dB SPL corresponds to 9.6 Bels (B)."
        ]
      },
      {
        title: "Example 3: Quiet Bedroom at Night",
        subtitle: "An acoustic survey records an ambient nighttime bedroom level of 28 dB SPL.",
        steps: [
          "Identify measured level: 28 dB SPL.",
          "Convert to bels: B = 28 / 10 = 2.8.",
          "Final Result: 28 dB SPL is equivalent to 2.8 Bels (B)."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Bel Conversion Table",
    headers: ["Sound Pressure Level (dB SPL)", "Level in Bels (B)", "Acoustic Noise Context & RMS Pressure"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "0.0 B", extra: "0.00002 Pa (20 µPa) - Nominal threshold of human hearing" },
      { fromVal: "10 dB SPL", toVal: "1.0 B", extra: "0.000063 Pa - Breathing sound, anechoic chamber baseline" },
      { fromVal: "20 dB SPL", toVal: "2.0 B", extra: "0.0002 Pa - Rustling leaves, recording studio background" },
      { fromVal: "30 dB SPL", toVal: "3.0 B", extra: "0.000632 Pa - Quiet whisper, rural area at night" },
      { fromVal: "40 dB SPL", toVal: "4.0 B", extra: "0.002 Pa - Quiet living room, library reading space" },
      { fromVal: "50 dB SPL", toVal: "5.0 B", extra: "0.006325 Pa - Moderate rainfall, quiet office setting" },
      { fromVal: "60 dB SPL", toVal: "6.0 B", extra: "0.02 Pa - Normal spoken conversation at 1 meter" },
      { fromVal: "70 dB SPL", toVal: "7.0 B", extra: "0.06325 Pa - Vacuum cleaner, city traffic at curb" },
      { fromVal: "80 dB SPL", toVal: "8.0 B", extra: "0.2 Pa - Food blender, busy highway traffic" },
      { fromVal: "85 dB SPL", toVal: "8.5 B", extra: "0.3557 Pa - OSHA 8-hour occupational noise limit" },
      { fromVal: "90 dB SPL", toVal: "9.0 B", extra: "0.6325 Pa - Heavy truck passing, power lawnmower" },
      { fromVal: "100 dB SPL", toVal: "10.0 B", extra: "2.0 Pa - Pneumatic jackhammer, dance club" },
      { fromVal: "110 dB SPL", toVal: "11.0 B", extra: "6.325 Pa - Live rock performance, car horn at 1 m" },
      { fromVal: "120 dB SPL", toVal: "12.0 B", extra: "20.0 Pa - Human threshold of acoustic pain, ambulance siren" },
      { fromVal: "130 dB SPL", toVal: "13.0 B", extra: "63.25 Pa - Jet aircraft takeoff at 100 m distance" },
      { fromVal: "140 dB SPL", toVal: "14.0 B", extra: "200.0 Pa - Deck of aircraft carrier (immediate damage)" }
    ]
  },
  applications: {
    title: "Industry Applications of Decibel SPL to Bel Conversions",
    items: [
      {
        title: "IT Hardware Noise Certification",
        text: "Stating server rack, hard drive, and cooling fan acoustic power ratings under ISO 7779, ECMA-74, and Blue Angel eco-labels."
      },
      {
        title: "Acoustic Engineering & Sound Power",
        text: "Converting between laboratory sound power metrics (in bels) and field sound pressure levels (in decibels) across machinery installations."
      },
      {
        title: "Telecommunications & Transmission",
        text: "Measuring broadband cable, optical fiber transmission loss, and audio signal attenuation in network switching centers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel SPL to Bel Conversions",
    items: [
      "Multiplying by 10 instead of dividing by 10 when converting dB SPL to bels (e.g., writing 80 dB SPL = 800 B instead of 8.0 B).",
      "Confusing acoustic sound power declared in bels (re 1 pW) with sound pressure level in bels (re 20 µPa).",
      "Attempting linear arithmetic with bels (e.g., assuming two 7 B machines combine to make 14 B instead of 7.3 B).",
      "Treating the bel as a linear SI unit rather than a dimensionless logarithmic ratio."
    ]
  },
  faqs: [
    {
      question: "How many decibels are in 1 bel?",
      answer: "There are exactly 10 decibels in 1 bel. The metric prefix 'deci-' indicates one-tenth (0.1), so 1 bel equals 10 dB."
    },
    {
      question: "Why is the decibel used much more frequently than the bel?",
      answer: "The bel represents a tenfold change in power, which is too coarse for most acoustic and audio measurements where small variations matter. The decibel provides a finer resolution that aligns closely with the smallest sound level changes distinguishable by the human ear (about 1 dB)."
    },
    {
      question: "Where is the bel still used in modern industry?",
      answer: "The bel is widely used in computing and electronics to declare sound power emission levels (LWAd) for hard disk drives, cooling fans, server enclosures, and office equipment under ISO 7779 and Blue Angel environmental certification standards."
    },
    {
      question: "What is the difference between sound power in bels and sound pressure in dB SPL?",
      answer: "Sound power (often stated in bels) is the total acoustic energy output generated by a source per second, independent of room acoustics or distance. Sound pressure (dB SPL) measures the local acoustic pressure amplitude at a specific location and distance from the sound source."
    },
    {
      question: "Can you add bels linearly when combining two sound sources?",
      answer: "No. Because the bel is a logarithmic unit, combining two identical sound sources adds 0.3 bels (equivalent to 3 dB), not double the numerical value. For example, two 6.0 B noise sources combine to produce 6.3 B, not 12.0 B."
    },
    {
      question: "Who was the bel named after?",
      answer: "The bel was named in honor of Alexander Graham Bell (1847–1922), the inventor of the telephone and pioneer in auditory science and telecommunications."
    },
    {
      question: "What is the formula to convert bels back into decibels SPL?",
      answer: "To convert bels into decibels SPL, multiply the value in bels by 10: dB SPL = B × 10."
    },
    {
      question: "Does 10 bels mean 10 times louder than 1 bel?",
      answer: "No. Because each bel represents a factor of 10 increase in acoustic power, a difference of 9 bels (from 1 B to 10 B) corresponds to an acoustic power increase of 10⁹ (one billion times)."
    }
  ]
};
