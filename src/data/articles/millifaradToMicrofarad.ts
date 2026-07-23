import { CustomArticleData } from "./types";

export const millifaradToMicrofarad: CustomArticleData = {
  fromUnitId: "millifarad",
  toUnitId: "microfarad",
  seoTitle: "Millifarad to Microfarad Converter - mF to µF",
  metaDescription: "Easily convert Millifarads to Microfarads (mF to µF). Learn the mathematical formula, see step-by-step calculations, and review common applications.",
  h1: "Millifarad to Microfarad Converter",
  introduction: [
    "Converting Millifarads (mF) to Microfarads (µF) is a common task in electronic circuit design, particularly when analyzing high-capacitance power supplies, audio crossovers, and motor run capacitors. Because both units are subdivisions of the Farad, converting between them is simple but crucial to prevent component matching errors.",
    "This calculator provides instantaneous conversions from Millifarads to Microfarads. Below, we explain the conversion math, walk through practical worked examples, and discuss typical applications where these high-capacity storage components are found."
  ],
  quickAnswer: {
    text: "To convert Millifarads to Microfarads, multiply the Millifarad value by 1,000. For example, a 10 Millifarad capacitor holds exactly 10,000 Microfarads of capacitance.",
    formulaDisplay: "1 mF = 1,000 µF",
    subtext: "Simply multiply the capacitance by 1,000 or shift the decimal point three places to the right."
  },
  aboutSourceUnit: {
    title: "About the Millifarad",
    text: "The Millifarad (symbol: mF) is a metric submultiple representing one-thousandth of a Farad (10⁻³ F). It is commonly used to rate heavy-duty electrolytic filter capacitors. These are often found in large audio amplifiers, DC motor drives, and rectifying power stages."
  },
  aboutTargetUnit: {
    title: "About the Microfarad",
    text: "The Microfarad (symbol: µF or uF) is a smaller metric subdivision representing one-millionth of a Farad (10⁻⁶ F). It is the most popular unit of measurement for everyday electronics, used in line filters, bypass arrays, decoupling caps, and timing networks."
  },
  relationship: "The relationship between Millifarads and Microfarads is governed by standard SI prefixes. Because 'milli-' means one-thousandth and 'micro-' means one-millionth, one Millifarad contains exactly one thousand microfarads.",
  relationshipTitle: "Understanding Their Relationship",
  relationshipItems: [
    { label: "Millifarads (mF) to Microfarads (µF)", value: "Multiply by 1,000" },
    { label: "Microfarads (µF) to Millifarads (mF)", value: "Divide by 1,000" }
  ],
  formula: {
    text: "To calculate this yourself, multiply your starting millifarad value by 1,000. This scales the larger millifarad down to its microfarad equivalent.",
    math: "Capacitance in µF = Capacitance in mF × 1,000",
    subtext: "For manual conversions, shift the decimal point three places to the right."
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
        subtitle: "A massive subwoofer stiffening circuit is rated at 22 Millifarads. Convert this rating to Microfarads.",
        steps: [
          "Identify the capacitance in Millifarads: 22 mF.",
          "Write down the conversion formula: µF = mF × 1,000.",
          "Multiply the value: 22 × 1,000 = 22,000.",
          "Conclude the calculation: 22 Millifarads is exactly equal to 22,000 µF."
        ]
      },
      {
        title: "Example 2: DC Ripple Smoothing Choke",
        subtitle: "An industrial AC-DC rectifying stage requires 4.7 Millifarads of filter capacitance. Convert this value to Microfarads.",
        steps: [
          "Identify the capacitance: 4.7 mF.",
          "Apply the multiplier: 4.7 × 1,000 = 4,700.",
          "Verify the calculation: 4.7 Millifarads is equivalent to 4,700 µF."
        ]
      }
    ]
  },
  table: {
    title: "Millifarad to Microfarad Reference Table",
    headers: ["Millifarads (mF)", "Microfarads (µF)", "Typical Circuit Roles"],
    rows: [
      { fromVal: "0.1", toVal: "100", extra: "Medium power line filter" },
      { fromVal: "0.47", toVal: "470", extra: "SMPS voltage regulator output" },
      { fromVal: "1", toVal: "1,000", extra: "Standard switching rectifier stage" },
      { fromVal: "2.2", toVal: "2,200", extra: "Consumer audio power decoupling" },
      { fromVal: "4.7", toVal: "4,700", extra: "High-power DC rectifying filter" },
      { fromVal: "10", toVal: "10,000", extra: "Industrial power supply decoupling" },
      { fromVal: "47", toVal: "47,000", extra: "Heavy-duty electric motor starter filter" },
      { fromVal: "100", toVal: "100,000", extra: "Power factor correction capacitor bank" }
    ]
  },
  expertNote: {
    title: "Tolerance and Ripple Current",
    text: "Capacitors in this range are usually electrolytic. In addition to matching the microfarad rating, ensure the capacitor can handle the peak ripple current of your power supply, otherwise it may overheat and degrade prematurely."
  },
  applications: {
    title: "Practical Capacitance Scenarios",
    items: [
      {
        title: "Switch-Mode Power Supplies (SMPS)",
        text: "SMPS units smooth out high-frequency rectified pulses using large electrolytic capacitors, frequently rated around 1 to 5 Millifarads (1,000 to 5,000 µF), to provide clean DC power to computers."
      },
      {
        title: "Heavy-Duty Motor Starters",
        text: "Industrial AC motors rely on large starter capacitors to shift the electrical phase. These components are usually rated in microfarads but are frequently scaled in millifarads during power simulations."
      },
      {
        title: "Automotive Stiffening Capacitors",
        text: "High-performance car audio systems use large power caps rated around 10 to 50 Millifarads (10,000 to 50,000 µF) to prevent vehicle headlights from dimming during high-volume bass hits."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Since a Millifarad is larger than a Microfarad, your converted value in µF must always be larger than your starting value in mF.",
      "Symbol confusion: Do not confuse Millifarads (mF) with Megafarads (MF). The lowercase letter 'm' represents milli, while the capital letter 'M' represents mega. A Megafarad capacitor is physically impossible with current technology."
    ]
  },
  faqs: [
    {
      question: "How do I convert Millifarads to Microfarads?",
      answer: "To convert Millifarads to Microfarads, multiply the Millifarad value by 1,000. For example, 4.7 mF multiplied by 1,000 equals 4,700 µF."
    },
    {
      question: "What is the difference between mF and µF?",
      answer: "The abbreviation mF stands for Millifarad (one-thousandth of a Farad), while µF (or uF) stands for Microfarad (one-millionth of a Farad). One Millifarad is exactly 1,000 times larger than one Microfarad."
    },
    {
      question: "What is the formula to convert mF to µF?",
      answer: "The formula is: µF = mF × 1,000. Simply multiply your Millifarad value by 1,000."
    },
    {
      question: "Does 1 Millifarad equal 1,000 Microfarads?",
      answer: "Yes, exactly. One Millifarad contains precisely 1,000 Microfarads."
    },
    {
      question: "How many microfarads are in half a Millifarad?",
      answer: "There are exactly 500 microfarads in 0.5 Millifarads (0.5 × 1,000)."
    },
    {
      question: "How do I convert Microfarads back to Millifarads?",
      answer: "To perform the reverse conversion, divide the Microfarad value by 1,000. For instance, 2,200 µF divided by 1,000 is 2.2 mF."
    },
    {
      question: "Why do some schematics use MFD instead of µF?",
      answer: "Vintage schematics or manufacturer datasheets from older factories often used MFD or mfd because Greek letters like µ were not available on early typesetting machines. These almost always mean microfarads, not millifarads."
    },
    {
      question: "Can I convert decimal Millifarads to Microfarads?",
      answer: "Yes, the exact same multiplier applies. For example, 0.047 mF multiplied by 1,000 equals 47 µF."
    }
  ],
  relatedList: [
    { label: "Microfarad to Millifarad", from: "microfarad", to: "millifarad" },
    { label: "Millifarad to Farad", from: "millifarad", to: "farad" },
    { label: "Millifarad to Nanofarad", from: "millifarad", to: "nanofarad" },
    { label: "Millifarad to Picofarad", from: "millifarad", to: "picofarad" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>.",
    "BIPM (Bureau International des Poids et Mesures). <em>The International System of Units (SI) Brochure</em>.",
    "IEEE Standards Association. <em>Standard Letters and Symbols for Electrical and Electronics Engineering</em>."
  ]
};
