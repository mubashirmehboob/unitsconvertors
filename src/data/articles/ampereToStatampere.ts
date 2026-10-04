import { CustomArticleData } from "./types";

export const ampereToStatampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "statampere",
  seoTitle: "Ampere to Statampere Converter (A to statA) | UnitsConvertors.com",
  metaDescription: "Convert Amperes to Statamperes (A to statA). Master the 2,997,924,580 cgs-esu conversion ratio, formula, worked physics examples, and Gaussian electromagnetism.",
  canonicalUrl: "https://unitsconvertors.com/ampere-to-statampere",
  h1: "Ampere to Statampere Converter",
  introduction: [
    "The <strong>Ampere (A)</strong> is the standard SI base unit of electric current, whereas the <strong>Statampere (statA)</strong>, also called the electrostatic unit of current (esu/s), is the fundamental current unit in the centimeter-gram-second electrostatic system (cgs-esu) and Gaussian unit framework. In theoretical electrodynamics, plasma physics, and astrophysical modeling, equations are frequently formulated in Gaussian cgs units where Coulomb's constant is dimensionless and equal to 1.",
    "Because the statampere is tied directly to the defined speed of light in vacuum (c = 299,792,458 m/s, or 29,979,245,800 cm/s in cgs), exactly one ampere corresponds to 2,997,924,580 statamperes (approximately 2.997925 × 10⁹ statA). Converting amperes to statamperes requires multiplying the current in amperes by this fundamental constant.",
    "This technical article explains the physical basis of the cgs-esu system, provides exact conversion formulas, worked step-by-step physics calculations, comprehensive conversion tables, and answers to common questions."
  ],
  quickAnswer: {
    text: "To convert Amperes to Statamperes, multiply the current value in amperes by 2,997,924,580 (or roughly 2.997925 × 10⁹). For example, 1 A equals 2,997,924,580 statA, and 0.001 A (1 mA) equals 2,997,924.58 statA.",
    formulaDisplay: "statA = A × 2,997,924,580",
    subtext: "1 Ampere = 2,997,924,580 Statamperes (c/10 where c is speed of light in cm/s)."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The <strong>Ampere</strong> (symbol: <strong>A</strong>) is the SI base unit of electric current. Defined by the 26th General Conference on Weights and Measures (CGPM) in 2019, the ampere is quantified by taking the elementary charge <em>e</em> to be exactly 1.602176634 × 10⁻¹⁹ coulombs. One ampere equals one coulomb of charge flowing per second (1 C/s)."
  },
  aboutTargetUnit: {
    title: "What is a Statampere (statA)?",
    text: "The <strong>Statampere</strong> (symbol: <strong>statA</strong> or <strong>esu/s</strong>) is the unit of electric current in the cgs electrostatic system (esu) and the Gaussian system. It is defined as one statcoulomb (Franklin) of charge flowing per second. One statcoulomb is the amount of charge that repels an identical charge placed 1 centimeter away in vacuum with a force of exactly 1 dyne."
  },
  relationship: "1 Ampere equals exactly 2,997,924,580 Statamperes (c/10, where c is the speed of light in cm/s). Conversely, 1 Statampere equals approximately 3.335641 × 10⁻¹⁰ Amperes.",
  relationshipTitle: "Ampere to Statampere Conversion Relationship",
  relationshipItems: [
    { label: "1 A", value: "2,997,924,580 statA (≈ 2.998 × 10⁹ statA)" },
    { label: "0.1 A", value: "299,792,458 statA" },
    { label: "0.01 A", value: "29,979,245.8 statA" },
    { label: "0.001 A (1 mA)", value: "2,997,924.58 statA" },
    { label: "0.000001 A (1 µA)", value: "2,997.92 statA" },
    { label: "1 statA", value: "≈ 3.335641 × 10⁻¹⁰ A" }
  ],
  formula: {
    text: "Multiply the electric current in amperes by 2,997,924,580 to determine the equivalent current in statamperes.",
    math: "I_{(statA)} = I_{(A)} × 2,997,924,580",
    subtext: "To convert statamperes back to amperes, divide by 2,997,924,580 (or multiply by approximately 3.335641 × 10⁻¹⁰)."
  },
  formulaTitle: "Ampere to Statampere Mathematical Equation",
  practicalTip: {
    title: "Speed of Light Approximation",
    text: "For quick calculations in theoretical physics, remember that 1 A is approximately 3 × 10⁹ statA (differing by less than 0.07%). Simply multiply the ampere value by 3 billion."
  },
  expertNote: {
    title: "Dimensionality in Gaussian vs SI Electrodynamics",
    text: "In SI units, electric current is a fundamental base dimension [I]. In the cgs-esu system, charge has the dimensions [M^(1/2) L^(3/2) T^(-1)], meaning statampere has the mechanical dimensions [M^(1/2) L^(3/2) T^(-2)]. This eliminates the vacuum permittivity factor ε₀ from Coulomb's law."
  },
  examples: {
    title: "Step-by-Step Physics Calculation Examples",
    items: [
      {
        title: "Example 1: Converting 0.5 Amperes",
        subtitle: "A laboratory plasma discharge tube operates at a steady current of 0.5 A. Express this current in statamperes for a Gaussian theoretical simulation.",
        steps: [
          "State given current in amperes: I = 0.5 A.",
          "Apply conversion relationship: I_(statA) = I_(A) × 2,997,924,580.",
          "Multiply: 0.5 × 2,997,924,580 = 1,498,962,290 statA.",
          "Conclusion: 0.5 Amperes equals 1,498,962,290 statA (approximately 1.499 × 10⁹ statA)."
        ]
      },
      {
        title: "Example 2: Laser Wakefield Electron Injection Current",
        subtitle: "An ultra-fast electron bunch carries a peak current of 25 A. Convert this current to statamperes.",
        steps: [
          "Identify initial current: I = 25 A.",
          "Calculate: 25 × 2,997,924,580 = 74,948,114,500 statA.",
          "Result: 25 A equals 74,948,114,500 statA (≈ 7.495 × 10¹⁰ statA)."
        ]
      },
      {
        title: "Example 3: Relativistic Beam Leakage Current",
        subtitle: "A particle accelerator Faraday cup collects a microampere beam of 0.000004 A (4 µA). Find the value in statamperes.",
        steps: [
          "Given parameter: I = 4 × 10⁻⁶ A.",
          "Computation: 0.000004 × 2,997,924,580 = 11,991.70 statA.",
          "Final answer: 4 µA corresponds to approximately 11,991.70 statA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Statampere Conversion Reference Table",
    headers: ["Current in Amperes (A)", "Current in Statamperes (statA)", "Scientific Notation (statA)", "Notes & Context"],
    rows: [
      { fromVal: "0.000001 A (1 µA)", toVal: "2,997.92 statA", extra: "2.998 × 10³ statA", extra2: "Microampere level" },
      { fromVal: "0.00001 A (10 µA)", toVal: "29,979.25 statA", extra: "2.998 × 10⁴ statA", extra2: "Precision detector current" },
      { fromVal: "0.0001 A (0.1 mA)", toVal: "299,792.46 statA", extra: "2.998 × 10⁵ statA", extra2: "Sub-milliampere range" },
      { fromVal: "0.001 A (1 mA)", toVal: "2,997,924.58 statA", extra: "2.998 × 10⁶ statA", extra2: "1 Milliampere benchmark" },
      { fromVal: "0.01 A (10 mA)", toVal: "29,979,245.8 statA", extra: "2.998 × 10⁷ statA", extra2: "LED operating current" },
      { fromVal: "0.1 A", toVal: "299,792,458 statA", extra: "2.998 × 10⁸ statA", extra2: "Fractional ampere" },
      { fromVal: "0.5 A", toVal: "1,498,962,290 statA", extra: "1.499 × 10⁹ statA", extra2: "Benchtop circuit current" },
      { fromVal: "1 A", toVal: "2,997,924,580 statA", extra: "2.998 × 10⁹ statA", extra2: "1 Ampere SI base unit" },
      { fromVal: "5 A", toVal: "14,989,622,900 statA", extra: "1.499 × 10¹⁰ statA", extra2: "Appliance current draw" },
      { fromVal: "10 A", toVal: "29,979,245,800 statA", extra: "2.998 × 10¹⁰ statA", extra2: "Household circuit breaker" }
    ]
  },
  applications: {
    title: "Theoretical Physics and Electrodynamics Applications",
    items: [
      {
        title: "Theoretical Plasma Physics",
        text: "In classical and relativistic plasma physics, textbooks (such as Jackson's Classical Electrodynamics) frequently utilize Gaussian cgs units. Converting measured laboratory currents from amperes to statamperes is required to apply theoretical dispersion relations and Debye shielding formulations."
      },
      {
        title: "Astrophysical Magnetic Field Calculations",
        text: "Astrophysicists model magnetic reconnection and synchrotron radiation in interstellar space using Gaussian cgs formulations. Cosmic ray flux and current densities are converted between amperes and statamperes to model galactic magnetic dynamos."
      },
      {
        title: "Historical Scientific Literature",
        text: "Foundational papers in 19th- and 20th-century physics by Maxwell, Lorentz, Einstein, and Bohr were authored in electrostatic cgs units. Modern researchers convert historic experimental values from statamperes to amperes to reproduce early atomic physics experiments."
      },
      {
        title: "Atomic and Molecular Quantum Chemistry",
        text: "Hartree atomic units and cgs-esu units share fundamental dimensional ties. Microscopic electron current distributions across molecular orbitals are often analyzed in esu units prior to conversion into macroscopic SI amperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls and Misconceptions",
    items: [
      "Confusing Statamperes (cgs-esu) with Abamperes (cgs-emu): The statampere is the electrostatic unit (1 A ≈ 3 × 10⁹ statA), while the abampere (or Biot) is the electromagnetic unit (1 A = 0.1 abA). Mixing up these systems introduces a 10¹⁰ magnitude error.",
      "Approximating Speed of Light as 3.0 × 10⁸ m/s in High-Precision Metrology: While 3 × 10⁹ is convenient, precise work requires the exact factor 2,997,924,580 based on the SI definition of the speed of light.",
      "Overlooking Dimensional Differences: In cgs-esu, electrical units do not have an independent current dimension; they are expressed purely in terms of centimeters, grams, and seconds.",
      "Misidentifying Unit Symbols: The statampere is designated as 'statA' or 'esu/s', whereas the statcoulomb is 'statC' or 'Fr' (Franklin)."
    ]
  },
  faqs: [
      {
        question: "How many statamperes are in one ampere?",
        answer: "There are exactly 2,997,924,580 statamperes in one ampere, derived from the speed of light in cm/s divided by 10."
      },
      {
        question: "What is the formula to convert amperes to statamperes?",
        answer: "The formula is: Current in statA = Current in A × 2,997,924,580 (or I_(statA) ≈ I_(A) × 2.997925 × 10⁹)."
      },
      {
        question: "Why does the speed of light appear in the conversion factor?",
        answer: "In the cgs unit system, the ratio between electromagnetic units (emu) and electrostatic units (esu) equals the speed of light in vacuum (c). Because 1 abampere = 10 amperes and 1 abampere = c statamperes (2.99792458 × 10¹⁰ statA), 1 ampere equals c / 10 = 2,997,924,580 statamperes."
      },
      {
        question: "What is another name for the statampere?",
        answer: "The statampere is also known as the electrostatic unit of current (esu/s), or Franklin per second (Fr/s)."
      },
      {
        question: "How do I convert statamperes back to amperes?",
        answer: "To convert statamperes back to amperes, divide by 2,997,924,580, or multiply by approximately 3.335641 × 10⁻¹⁰."
      },
      {
        question: "Is the statampere an SI unit?",
        answer: "No. The statampere is a non-SI unit belonging to the centimeter-gram-second electrostatic system (cgs-esu) and the Gaussian unit system."
      },
      {
        question: "Are statamperes still used today?",
        answer: "Yes, primarily in theoretical physics, relativistic electrodynamics, plasma physics, and astrophysical journal publications."
      },
      {
        question: "How many statamperes are in 1 milliampere?",
        answer: "1 milliampere (0.001 A) equals exactly 2,997,924.58 statamperes (approximately 3 million statA)."
      },
      {
        question: "What is the difference between statampere and abampere?",
        answer: "Statampere belongs to the electrostatic cgs system (1 A ≈ 3 × 10⁹ statA), whereas abampere belongs to the electromagnetic cgs system (1 abampere = 10 A = 1 Biot)."
      },
      {
        question: "How many elementary charges per second make up one statampere?",
        answer: "One statampere equals approximately 2.08194 × 10⁹ elementary charges (electrons) per second."
      }
    ],
  relatedList: [
    { label: "Ampere to Biot", from: "ampere", to: "biot" },
    { label: "Ampere to Abampere", from: "ampere", to: "abampere" },
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Milliampere to Statampere", from: "milliampere", to: "statampere" },
    { label: "Ampere to Nanoampere", from: "ampere", to: "nanoampere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition, 2019).",
    "John David Jackson: Classical Electrodynamics (3rd Edition), Appendix on Units and Dimensions, John Wiley & Sons.",
    "NIST Reference on Constants, Units, and Uncertainty: Speed of Light in Vacuum (c).",
    "IEC 60050: International Electrotechnical Vocabulary - Chapter 112: Quantities and Units."
  ]
};
