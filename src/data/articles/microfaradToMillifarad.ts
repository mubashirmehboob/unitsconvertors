import { CustomArticleData } from "./types";

export const microfaradToMillifarad: CustomArticleData = {
  fromUnitId: "microfarad",
  toUnitId: "millifarad",
  seoTitle: "Microfarad to Millifarad Converter - µF to mF",
  metaDescription: "Convert Microfarads to Millifarads (µF to mF) with ease. Read about capacitive reactance, worked calculations, and standard bypass capacitor roles.",
  h1: "Microfarad to Millifarad Converter",
  introduction: [
    "Converting Microfarads (µF) to Millifarads (mF) is a common task in electronic circuit design, particularly when analyzing high-capacitance power supplies, audio crossovers, and motor run capacitors. Because both units are subdivisions of the Farad, converting between them is simple but crucial to prevent component matching errors.",
    "This calculator provides instantaneous conversions from Microfarads to Millifarads. Below, we explain the conversion math, walk through practical worked examples, and discuss typical applications where these high-capacity storage components are found."
  ],
  quickAnswer: {
    text: "To convert Microfarads to Millifarads, divide the Microfarad value by 1,000. For example, a 10,000 Microfarad capacitor holds exactly 10 Millifarads of capacitance.",
    formulaDisplay: "1 µF = 0.001 mF",
    subtext: "Simply divide the capacitance by 1,000 or shift the decimal point three places to the left."
  },
  aboutSourceUnit: {
    title: "About the Microfarad",
    text: "The Microfarad (symbol: µF or uF) is a smaller metric subdivision representing one-millionth of a Farad (10⁻⁶ F). It is the most popular unit of measurement for everyday electronics, used in line filters, bypass arrays, decoupling caps, and timing networks."
  },
  aboutTargetUnit: {
    title: "About the Millifarad",
    text: "The Millifarad (symbol: mF) is a metric submultiple representing one-thousandth of a Farad (10⁻³ F). It is commonly used to rate heavy-duty electrolytic filter capacitors. These are often found in large audio amplifiers, DC motor drives, and rectifying power stages."
  },
  relationship: "The relationship between Microfarads and Millifarads is governed by standard SI prefixes. Because 'milli-' means one-thousandth and 'micro-' means one-millionth, one Millifarad contains exactly one thousand microfarads.",
  relationshipTitle: "Understanding Their Relationship",
  relationshipItems: [
    { label: "Microfarads (µF) to Millifarads (mF)", value: "Divide by 1,000" },
    { label: "Millifarads (mF) to Microfarads (µF)", value: "Multiply by 1,000" }
  ],
  formula: {
    text: "To calculate this yourself, divide your starting microfarad value by 1,000. This scales the smaller microfarad up to its millifarad equivalent.",
    math: "Capacitance in mF = Capacitance in µF ÷ 1,000",
    subtext: "For manual conversions, shift the decimal point three places to the left."
  },
  formulaTitle: "Why the Formula Works",
  practicalTip: {
    title: "Vintage Documentation Quirks",
    text: "In older electronics schematics from the mid-20th century, engineers occasionally used the abbreviation 'mfd' or 'MFD' to mean microfarads, rather than millifarads. If you are restoring vintage gear and see '100 MFD', it is almost certainly 100 Microfarads (µF) rather than 100 Millifarads, as physical millifarad-scale capacitors did not exist at that time."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Power Audio Filter Bank",
        subtitle: "A massive subwoofer stiffening circuit is rated at 22,000 Microfarads. Convert this rating to Millifarads.",
        steps: [
          "Identify the capacitance in Microfarads: 22,000 µF.",
          "Write down the conversion formula: mF = µF ÷ 1,000.",
          "Divide the value: 22,000 ÷ 1,000 = 22.",
          "Conclude the calculation: 22,000 Microfarads is exactly equal to 22 mF."
        ]
      },
      {
        title: "Example 2: DC Ripple Smoothing Choke",
        subtitle: "An industrial AC-DC rectifying stage requires 4,700 Microfarads of filter capacitance. Convert this value to Millifarads.",
        steps: [
          "Identify the capacitance: 4,700 µF.",
          "Apply the division: 4,700 ÷ 1,000 = 4.7.",
          "Verify the calculation: 4,700 Microfarads is equivalent to 4.7 mF."
        ]
      }
    ]
  },
  table: {
    title: "Microfarad to Millifarad Reference Table",
    headers: ["Microfarads (µF)", "Millifarads (mF)", "Typical Circuit Roles"],
    rows: [
      { fromVal: "100", toVal: "0.1", extra: "Medium power line filter" },
      { fromVal: "470", toVal: "0.47", extra: "SMPS voltage regulator output" },
      { fromVal: "1,000", toVal: "1", extra: "Standard switching rectifier stage" },
      { fromVal: "2,200", toVal: "2.2", extra: "Consumer audio power decoupling" },
      { fromVal: "4,700", toVal: "4.7", extra: "High-power DC rectifying filter" },
      { fromVal: "10,000", toVal: "10", extra: "Industrial power supply decoupling" },
      { fromVal: "47,000", toVal: "47", extra: "Heavy-duty electric motor starter filter" },
      { fromVal: "100,000", toVal: "100", extra: "Power factor correction capacitor bank" }
    ]
  },
  expertNote: {
    title: "Tolerance and Ripple Current",
    text: "Capacitors in this range are usually electrolytic. In addition to matching the millifarad rating, ensure the capacitor can handle the peak ripple current of your power supply, otherwise it may overheat and degrade prematurely."
  },
  applications: {
    title: "Practical Capacitance Scenarios",
    items: [
      {
        title: "Switch-Mode Power Supplies (SMPS)",
        text: "SMPS units smooth out high-frequency rectified pulses using large electrolytic capacitors, frequently rated around 1,000 to 5,000 Microfarads (1 to 5 mF), to provide clean DC power to computers."
      },
      {
        title: "Heavy-Duty Motor Starters",
        text: "Industrial AC motors rely on large starter capacitors to shift the electrical phase. These components are usually rated in microfarads but are frequently scaled in millifarads during power simulations."
      },
      {
        title: "Automotive Stiffening Capacitors",
        text: "High-performance car audio systems use large power caps rated around 10,000 to 50,000 Microfarads (10 to 50 mF) to prevent vehicle headlights from dimming during high-volume bass hits."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Since a Microfarad is smaller than a Millifarad, your converted value in mF must always be smaller than your starting value in µF.",
      "Symbol confusion: Do not confuse Millifarads (mF) with Megafarads (MF). The lowercase letter 'm' represents milli, while the capital letter 'M' represents mega. A Megafarad capacitor is physically impossible with current technology."
    ]
  },
  faqs: [
    {
      question: "How do I convert Microfarads to Millifarads?",
      answer: "To convert Microfarads to Millifarads, divide the Microfarad value by 1,000. For example, 4,700 µF divided by 1,000 equals 4.7 mF."
    },
    {
      question: "What is the difference between µF and mF?",
      answer: "The abbreviation µF (or uF) stands for Microfarad (one-millionth of a Farad), while mF stands for Millifarad (one-thousandth of a Farad). One Millifarad is exactly 1,000 times larger than one Microfarad."
    },
    {
      question: "What is the formula to convert µF to mF?",
      answer: "The formula is: mF = µF ÷ 1,000. Simply divide your Microfarad value by 1,000."
    },
    {
      question: "Does 1,000 Microfarads equal 1 Millifarad?",
      answer: "Yes, exactly. One Millifarad contains precisely 1,000 Microfarads."
    },
    {
      question: "How many millifarads are in half a Microfarad?",
      answer: "There are exactly 0.0005 millifarads in 0.5 Microfarads (0.5 ÷ 1,000)."
    },
    {
      question: "How do I convert Millifarads back to Microfarads?",
      answer: "To perform the reverse conversion, multiply the Millifarad value by 1,000. For instance, 2.2 mF multiplied by 1,000 is 2,200 µF."
    },
    {
      question: "Why do some schematics use MFD instead of µF?",
      answer: "Vintage schematics or manufacturer datasheets from older factories often used MFD or mfd because Greek letters like µ were not available on early typesetting machines. These almost always mean microfarads, not millifarads."
    },
    {
      question: "Can I convert decimal Microfarads to Millifarads?",
      answer: "Yes, the exact same division applies. For example, 47 µF divided by 1,000 equals 0.047 mF."
    }
  ],
  relatedList: [
    { label: "Millifarad to Microfarad", from: "millifarad", to: "microfarad" },
    { label: "Microfarad to Farad", from: "microfarad", to: "farad" },
    { label: "Millifarad to Farad", from: "millifarad", to: "farad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>.",
    "IEEE Standards Association. <em>Standard Letters and Symbols for Electrical and Electronics Engineering</em>."
  ]
};
