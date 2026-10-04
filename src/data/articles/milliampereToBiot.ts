import { CustomArticleData } from "./types";

export const milliampereToBiot: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "biot",
  seoTitle: "Milliampere to Biot Converter (mA to Bi) | UnitsConvertors.com",
  metaDescription: "Convert Milliamperes to Biots (mA to Bi) instantly. Master the 10,000 division formula, Biot-Savart electromagnetic law context, worked examples, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/milliampere-to-biot",
  h1: "Milliampere to Biot Converter",
  introduction: [
    "The <strong>Milliampere (mA)</strong> is an SI decimal submultiple representing one thousandth of an ampere (10⁻³ A), whereas the <strong>Biot (Bi)</strong>, historically known as the <strong>abampere (abA)</strong>, is the fundamental current unit in the centimeter-gram-second electromagnetic system (cgs-emu). Named after French physicist Jean-Baptiste Biot, the Biot quantifies electromagnetic force interactions between conductors.",
    "By definition, 1 Biot equals exactly 10 amperes, which corresponds to 10,000 milliamperes (1 Bi = 10,000 mA). Consequently, 1 milliampere equals exactly 0.0001 Biot (10⁻⁴ Bi). Converting milliamperes to Biots is calculated by dividing the milliampere measurement by 10,000 (or multiplying by 0.0001).",
    "This technical guide explains the conversion relationship, manual calculation methods, practical examples, reference tables, cgs-emu historical physics, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Biots, divide the current in milliamperes by 10,000 (or multiply by 0.0001). For example, 50,000 mA equals 5 Bi, and 2,500 mA equals 0.25 Bi.",
    formulaDisplay: "Bi = mA / 10,000",
    subtext: "1 Milliampere (mA) = 0.0001 Biot (Bi) exactly; 1 Biot = 10,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The <strong>Milliampere</strong> (symbol: <strong>mA</strong>) is an SI decimal submultiple representing one thousandth of an ampere (10⁻³ A or 0.001 A). It is the universal current unit across consumer electronics, microcontroller I/O pins, sensor interfaces, and 4–20 mA industrial process control loops."
  },
  aboutTargetUnit: {
    title: "What is a Biot (Bi)?",
    text: "The <strong>Biot</strong> (symbol: <strong>Bi</strong>), identical to the <strong>abampere</strong> (abA), is the fundamental current unit in the electromagnetic cgs (emu) system. Defined via Ampère's force law, two parallel, infinitely long conductors spaced 1 centimeter apart in vacuum carrying 1 Biot experience a mutual electromagnetic force of 2 dynes per centimeter."
  },
  relationship: "1 Biot equals exactly 10,000 Milliamperes. Conversely, 1 Milliampere equals exactly 0.0001 (10⁻⁴) Biot.",
  relationshipTitle: "Milliampere to Biot Metric Scaling",
  relationshipItems: [
    { label: "1 mA", value: "0.0001 Bi (10⁻⁴ Bi)" },
    { label: "10 mA", value: "0.001 Bi (10⁻³ Bi)" },
    { label: "100 mA", value: "0.01 Bi (10⁻² Bi)" },
    { label: "1,000 mA (1 A)", value: "0.1 Bi (10⁻¹ Bi)" },
    { label: "5,000 mA (5 A)", value: "0.5 Bi" },
    { label: "10,000 mA (10 A)", value: "1.0 Bi" }
  ],
  formula: {
    text: "Divide the electric current in milliamperes by 10,000 (or multiply by 0.0001) to determine the equivalent value in Biots.",
    math: "I_{(Bi)} = \\frac{I_{(mA)}}{10,000} = I_{(mA)} × 10^{-4}",
    subtext: "To convert Biots back to milliamperes, multiply the value in Biots by 10,000."
  },
  formulaTitle: "Milliampere to Biot Conversion Formula",
  practicalTip: {
    title: "Four-Place Decimal Shift",
    text: "To convert milliamperes to Biots mentally, shift the decimal point four places to the left. For example, 3,500 mA becomes 0.35 Bi."
  },
  expertNote: {
    title: "Historical Significance of the Biot",
    text: "Before the international standardization of the SI system in 1960, the Biot (or abampere) was the international scientific reference standard for precision galvanometer calibration, as electromagnetic torque could be weighed directly on a current balance."
  },
  examples: {
    title: "Step-by-Step Manual Calculation Examples",
    items: [
      {
        title: "Example 1: Industrial Actuator Solenoid Current",
        subtitle: "A pneumatic valve solenoid draws a continuous actuation current of 850 mA. Express this current in Biots.",
        steps: [
          "Identify initial current value: I = 850 mA.",
          "Apply conversion formula: I_(Bi) = I_(mA) / 10,000.",
          "Perform division: 850 / 10,000 = 0.085 Bi.",
          "Result: 850 mA equals exactly 0.085 Biots."
        ]
      },
      {
        title: "Example 2: Power Amplifier Quiescent Current",
        subtitle: "An audio amplifier bias circuit conducts a quiescent current of 4,200 mA (4.2 A). Convert this to Biots.",
        steps: [
          "State starting current: I = 4,200 mA.",
          "Multiply by 0.0001: 4,200 × 0.0001 = 0.42 Bi.",
          "Conclusion: 4,200 mA equals 0.42 Biots."
        ]
      },
      {
        title: "Example 3: Precision Laboratory Galvanometer",
        subtitle: "An antique tangent galvanometer registers a deflection corresponding to 25 mA. Convert this to Biots.",
        steps: [
          "Given parameter: I = 25 mA.",
          "Calculation: 25 / 10,000 = 0.0025 Bi.",
          "Final answer: 25 mA corresponds to 0.0025 Biots."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Biot Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Biots (Bi)", "Abamperes (abA)", "Amperes (A)"],
    rows: [
      { fromVal: "10 mA", toVal: "0.001 Bi", extra: "0.001 abA", extra2: "0.01 A" },
      { fromVal: "50 mA", toVal: "0.005 Bi", extra: "0.005 abA", extra2: "0.05 A" },
      { fromVal: "100 mA", toVal: "0.01 Bi", extra: "0.01 abA", extra2: "0.1 A" },
      { fromVal: "250 mA", toVal: "0.025 Bi", extra: "0.025 abA", extra2: "0.25 A" },
      { fromVal: "500 mA", toVal: "0.05 Bi", extra: "0.05 abA", extra2: "0.5 A" },
      { fromVal: "1,000 mA", toVal: "0.1 Bi", extra: "0.1 abA", extra2: "1.0 A" },
      { fromVal: "2,000 mA", toVal: "0.2 Bi", extra: "0.2 abA", extra2: "2.0 A" },
      { fromVal: "5,000 mA", toVal: "0.5 Bi", extra: "0.5 abA", extra2: "5.0 A" },
      { fromVal: "10,000 mA", toVal: "1.0 Bi", extra: "1.0 abA", extra2: "10.0 A (1 Biot standard)" },
      { fromVal: "50,000 mA", toVal: "5.0 Bi", extra: "5.0 abA", extra2: "50.0 A" }
    ]
  },
  applications: {
    title: "Electromagnetic Physics and Engineering Applications",
    items: [
      {
        title: "Magnetostatic Coil and Solenoid Modeling",
        text: "In electromagnetic physics, the Biot-Savart law in cgs-emu units relates magnetic induction directly to current without the permeability constant factor μ₀ / 4π. When analyzing small electromagnets and coils driven by milliampere-range supplies, researchers convert currents to Biots for simplified calculation."
      },
      {
        title: "Electrodynamic Historical Literature and Archives",
        text: "Scientific publications from the late 19th and early 20th centuries documented electrolysis experiments, cathode tube currents, and early radio transmitter circuits using Biots and abamperes. Modern researchers convert between milliamperes and Biots to reproduce these historical experiments."
      },
      {
        title: "Electromagnetic Current Balance Calibration",
        text: "Metrology laboratories historically determined the absolute value of the ampere using Rayleigh current balances. The torque between stationary and movable coils carrying milliampere currents was evaluated directly in Biots through mechanical weight measurements."
      },
      {
        title: "Comparative Electrodynamics Education",
        text: "Physics university curricula use the Biot and cgs-emu system to teach students how unit choices impact Maxwell's equations and why the SI system introduced the permeability of free space constant (μ₀)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing by 1,000 Instead of 10,000: 1 A = 0.1 Bi, meaning 1,000 mA = 0.1 Bi. Dividing milliamperes by 1,000 converts to amperes, not Biots.",
      "Confusing the Biot (cgs-emu) with the Statampere (cgs-esu): The Biot is a large unit (1 Bi = 10,000 mA), whereas the statampere is an extremely small unit (1 statA ≈ 0.0000003336 mA). Mixing them up causes an error of 10 orders of magnitude.",
      "Multiplying Instead of Dividing: Because the Biot is 10,000 times larger than the milliampere, converting from milliamperes to Biots must decrease the numerical value.",
      "Assuming the Biot is Obsolete in Academic Literature: While SI amperes dominate commercial engineering, theoretical physics, plasma physics, and astrophysical monographs frequently retain cgs-emu and Gaussian units."
    ]
  },
  faqs: [
      {
        question: "How many Biots are in one milliampere?",
        answer: "There are exactly 0.0001 (one ten-thousandth, or 10⁻⁴) Biots in one milliampere."
      },
      {
        question: "How many milliamperes are in one Biot?",
        answer: "There are exactly 10,000 milliamperes in one Biot (1 Bi = 10 A = 10,000 mA)."
      },
      {
        question: "What is the formula to convert milliamperes to Biots?",
        answer: "The formula is: Current in Bi = Current in mA / 10,000 (or Bi = mA × 0.0001)."
      },
      {
        question: "How do I convert Biots back to milliamperes?",
        answer: "Multiply the Biot value by 10,000. For example, 0.4 Bi × 10,000 = 4,000 mA."
      },
      {
        question: "Is a Biot the same as an abampere?",
        answer: "Yes. The Biot (Bi) and the abampere (abA) are identical names for the exact same cgs-emu unit of electric current."
      },
      {
        question: "How do I convert 500 mA to Biots?",
        answer: "Divide 500 by 10,000: 500 / 10,000 = 0.05 Bi."
      },
      {
        question: "Why was the unit named Biot?",
        answer: "It was named in honor of Jean-Baptiste Biot, the French physicist who, along with Félix Savart, formulated the Biot-Savart law describing magnetic fields generated by electric currents."
      },
      {
        question: "Is the Biot part of the International System of Units (SI)?",
        answer: "No. The Biot belongs to the centimeter-gram-second electromagnetic system (cgs-emu). The SI base unit is the ampere."
      },
      {
        question: "How many Biots is 20 mA (industrial loop full scale)?",
        answer: "20 mA / 10,000 = 0.002 Bi (or 2 × 10⁻³ Bi)."
      },
      {
        question: "How many statamperes equal one Biot?",
        answer: "One Biot equals exactly 29,979,245,800 statamperes (approximately 3 × 10¹⁰ statA), which is the speed of light in cm/s."
      }
    ],
  relatedList: [
    { label: "Ampere to Biot", from: "ampere", to: "biot" },
    { label: "Milliampere to Statampere", from: "milliampere", to: "statampere" },
    { label: "Milliampere to Nanoampere", from: "milliampere", to: "nanoampere" },
    { label: "Milliampere to Ampere", from: "milliampere", to: "ampere" },
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition, 2019).",
    "IEC 60050: International Electrotechnical Vocabulary - Chapter 112: Quantities and Units (cgs units).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "James Clerk Maxwell: A Treatise on Electricity and Magnetism, Oxford Clarendon Press."
  ]
};
