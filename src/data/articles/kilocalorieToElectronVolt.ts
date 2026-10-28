import { CustomArticleData } from "./types";

export const kilocalorieToElectronVolt: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "electron-volt",
  seoTitle: "Kilocalorie to Electron Volt Converter (kcal to eV)",
  metaDescription: "Convert kilocalories to electron volts (kcal to eV) with scientific precision. Discover macroscopic-to-quantum formulas, molar conversions, and tables.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-electron-volt",
  h1: "Kilocalorie to Electron Volt Converter",
  introduction: [
    "The kilocalorie (kcal) and the electron volt (eV) represent opposite ends of the energetic scale in modern physics and chemistry. While the kilocalorie measures macroscopic thermal and biochemical energies—such as heat capacity and nutritional fuel—the electron volt quantifies microscopic subatomic phenomena, such as atomic ionization potentials, photonic bandgaps, and chemical bond energies.",
    "Bridging the macroscopic world of laboratory calories and the quantum realm of electron volts requires calculating with fundamental physical constants. Under standard SI definitions, one thermochemical kilocalorie contains 4,184 Joules. Because one electron volt equals exactly 1.602176634 × 10⁻¹⁹ Joules (the elementary charge in Coulombs multiplied by one volt), one kilocalorie equals approximately 2.611447 × 10²² electron volts.",
    "This reference explains the fundamental relationship between kilocalories and electron volts, provides calculations for total energy and molar bond potentials, examines quantum applications, and supplies a comprehensive scientific conversion table."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to electron volts (eV), multiply the kilocalorie value by 2.611447 × 10²² (or multiply by 4,184 and divide by 1.602176634 × 10⁻¹⁹). For example, 1 kcal equals approximately 2.611 × 10²² eV.",
    formulaDisplay: "eV = kcal × (4,184 ÷ 1.602176634 × 10⁻¹⁹) ≈ kcal × 2.611447 × 10²²",
    subtext: "1 kilocalorie ≈ 2.611447 × 10²² eV; 1 electron volt ≈ 3.8293 × 10⁻²³ kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal) is a metric unit of thermal energy representing the heat required to raise the temperature of one kilogram of water by one degree Celsius under standard atmospheric pressure. Defined by NIST and international thermodynamic conventions as exactly 4,184 Joules (4.184 kJ), it is the standard unit in macroscopic food science, metabolic calorimetry, and reaction thermodynamics."
  },
  aboutTargetUnit: {
    title: "Understanding the Electron Volt (eV)",
    text: "The electron volt (symbol: eV) is a non-SI unit of energy accepted for use with SI units. It represents the kinetic energy gained or lost by a single elementary charge (such as an electron) when accelerated across an electric potential difference of one volt. Because the elementary charge e is defined as exactly 1.602176634 × 10⁻¹⁹ Coulombs, 1 eV equals exactly 1.602176634 × 10⁻¹⁹ Joules. It is the universal currency of quantum mechanics, semiconductor physics, and spectroscopy."
  },
  relationship: "The exact conversion between kilocalories and electron volts is anchored in the fundamental physical constant of the elementary charge: 1 kcal = 4,184 J, and 1 eV = 1.602176634 × 10⁻¹⁹ J. Dividing 4,184 by 1.602176634 × 10⁻¹⁹ gives 2.611447 × 10²² eV per kilocalorie. In molecular chemistry, 1 eV per molecule corresponds to approximately 23.0605 kcal per mole.",
  relationshipTitle: "Kilocalorie to Electron Volt Equivalence Values",
  relationshipItems: [
    { label: "1 kcal", value: "≈ 2.611447 × 10²² eV" },
    { label: "0.001 kcal (1 cal)", value: "≈ 2.611447 × 10¹⁹ eV" },
    { label: "10 kcal", value: "≈ 2.611447 × 10²³ eV" },
    { label: "100 kcal", value: "≈ 2.611447 × 10²⁴ eV" },
    { label: "1 kcal/mol (molecular)", value: "≈ 0.043364 eV/particle" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 4,184 to find total Joules, then divide by 1.602176634 × 10⁻¹⁹ to obtain electron volts.",
    math: "eV = (kcal * 4184) / 1.602176634e-19",
    subtext: "Multiplier: eV = kcal × 2.611447 × 10²²."
  },
  formulaTitle: "Kilocalorie to Electron Volt Conversion Formula",
  practicalTip: {
    title: "Molar Energy Conversion Rule (kcal/mol to eV)",
    text: "Chemists frequently convert molar bond enthalpies in kcal/mol to single-molecule excitation energies in eV. Use the relationship: 1 eV/particle ≈ 23.0605 kcal/mol. To find eV from kcal/mol, divide by 23.06; for example, a bond energy of 46.1 kcal/mol equals exactly 2.0 eV per molecule."
  },
  expertNote: {
    title: "Bridging Avogadro's Number and Elementary Charge",
    text: "The ratio between bulk energy (kcal/mol) and microscopic energy (eV) is governed by Faraday's constant: F = N_A × e = 96,485.33 C/mol. Converting 96,485.33 J/mol into kcal/mol yields 96,485.33 / 4,184 = 23.0605 kcal/mol per eV."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Total Bulk Energy Conversion",
        subtitle: "Convert 5 kcal of combustion heat into total electron volts.",
        steps: [
          "State the energy value: 5 kcal.",
          "Multiply by the total conversion factor: 5 × 2.611447 × 10²² = 1.305724 × 10²³ eV.",
          "Express in scientific notation: 1.306 × 10²³ eV.",
          "Result: 5 kcal corresponds to approximately 1.306 × 10²³ electron volts."
        ]
      },
      {
        title: "Example 2: Chemical Bond Dissociation Enthalpy",
        subtitle: "Convert the C-H bond dissociation energy of roughly 98 kcal/mol into eV per bond.",
        steps: [
          "State the molar enthalpy: 98 kcal/mol.",
          "Apply the molar conversion factor: 98 ÷ 23.0605 = 4.2497 eV.",
          "Round to three significant figures: 4.25 eV.",
          "Result: A carbon-hydrogen bond requires approximately 4.25 eV of localized energy to break."
        ]
      },
      {
        title: "Example 3: Small Laser Pulse Calorimetry",
        subtitle: "Convert 0.05 kcal of absorbed laser heat into electron volts.",
        steps: [
          "State the input: 0.05 kcal (50 cal).",
          "Calculate: 0.05 × 2.611447 × 10²² = 1.3057 × 10²¹ eV.",
          "Result: 0.05 kcal equals 1.306 × 10²¹ eV (or 1.306 × 10¹² GeV)."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to Electron Volt Conversion Table",
    headers: ["Kilocalories (kcal)", "Electron Volts (eV)", "Gigaelectron Volts (GeV)", "Joules (J)"],
    rows: [
      { fromVal: "0.001 kcal", toVal: "2.6114 × 10¹⁹ eV", extra: "2.6114 × 10¹⁰ GeV", extra2: "4.184 J" },
      { fromVal: "0.01 kcal", toVal: "2.6114 × 10²⁰ eV", extra: "2.6114 × 10¹¹ GeV", extra2: "41.84 J" },
      { fromVal: "0.1 kcal", toVal: "2.6114 × 10²¹ eV", extra: "2.6114 × 10¹² GeV", extra2: "418.4 J" },
      { fromVal: "0.5 kcal", toVal: "1.3057 × 10²² eV", extra: "1.3057 × 10¹³ GeV", extra2: "2,092 J" },
      { fromVal: "1 kcal", toVal: "2.6114 × 10²² eV", extra: "2.6114 × 10¹³ GeV", extra2: "4,184 J" },
      { fromVal: "2 kcal", toVal: "5.2229 × 10²² eV", extra: "5.2229 × 10¹³ GeV", extra2: "8,368 J" },
      { fromVal: "5 kcal", toVal: "1.3057 × 10²³ eV", extra: "1.3057 × 10¹⁴ GeV", extra2: "20,920 J" },
      { fromVal: "10 kcal", toVal: "2.6114 × 10²³ eV", extra: "2.6114 × 10¹⁴ GeV", extra2: "41,840 J" },
      { fromVal: "50 kcal", toVal: "1.3057 × 10²⁴ eV", extra: "1.3057 × 10¹⁵ GeV", extra2: "209,200 J" },
      { fromVal: "100 kcal", toVal: "2.6114 × 10²⁴ eV", extra: "2.6114 × 10¹⁵ GeV", extra2: "418,400 J" },
      { fromVal: "500 kcal", toVal: "1.3057 × 10²⁵ eV", extra: "1.3057 × 10¹⁶ GeV", extra2: "2,092,000 J" },
      { fromVal: "1,000 kcal", toVal: "2.6114 × 10²⁵ eV", extra: "2.6114 × 10¹⁶ GeV", extra2: "4,184,000 J" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to eV Conversion",
    items: [
      {
        title: "Photochemistry and Solar Energy",
        text: "Photochemists convert bulk solar thermal irradiance (in kcal/m²) into photon energies (in eV) to determine whether sunlight can surpass semiconductor bandgaps in silicon or perovskite solar cells."
      },
      {
        title: "Biochemical Reaction Kinetics",
        text: "Biophysicists studying enzyme catalysis translate ATP hydrolysis free energy (roughly 7.3 kcal/mol) into microscopic electron volts (~0.316 eV per molecule) to evaluate molecular motor mechanics."
      },
      {
        title: "Radiation Dosimetry and Particle Physics",
        text: "Health physicists measuring thermal energy deposited in tissue by particle beams convert calorimeter temperature changes in kcal into total particle kinetic energy in mega-electron volts (MeV) and giga-electron volts (GeV)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing bulk total energy with per-molecule molar energy: 1 kcal of total heat contains 2.61 × 10²² eV, but 1 kcal/mol represents 0.04336 eV per individual molecule.",
      "Incorrect exponent handling in calculations: Omitting the negative exponent on the elementary charge (1.602 × 10⁻¹⁹) leads to catastrophic numerical errors.",
      "Misidentifying small calories: A gram calorie has an exponent of 10¹⁹ eV, while a kilocalorie has an exponent of 10²² eV."
    ]
  },
  faqs: [
    {
      question: "How many electron volts are in 1 kilocalorie?",
      answer: "One kilocalorie equals approximately 2.611447 × 10²² electron volts (or 2.611 × 10¹³ GeV)."
    },
    {
      question: "How many kilocalories are in 1 electron volt?",
      answer: "One electron volt equals approximately 3.8293 × 10⁻²³ kilocalories (or 3.8293 × 10⁻²⁰ small calories)."
    },
    {
      question: "What is the formula to convert kcal to eV?",
      answer: "eV = kcal × 4,184 ÷ (1.602176634 × 10⁻¹⁹) ≈ kcal × 2.611447 × 10²²."
    },
    {
      question: "How do you convert kcal/mol into eV per molecule?",
      answer: "Divide the kcal/mol value by 23.0605 (or multiply by 0.043364). For example, 10 kcal/mol equals approximately 0.4336 eV per molecule."
    },
    {
      question: "Why is the electron volt so small compared to the kilocalorie?",
      answer: "The electron volt measures the energy of a single subatomic particle across one volt, whereas the kilocalorie measures macroscopic thermal energy across billions of trillions of atoms (Avogadro's number)."
    },
    {
      question: "How many electron volts are in 100 kcal?",
      answer: "100 kcal × 2.611447 × 10²² = 2.611447 × 10²⁴ electron volts."
    },
    {
      question: "What is the eV equivalent of the 7.3 kcal/mol released by ATP hydrolysis?",
      answer: "7.3 kcal/mol ÷ 23.0605 ≈ 0.3165 eV per hydrolyzed ATP molecule."
    },
    {
      question: "Is electron volt an official SI unit?",
      answer: "The electron volt is not an official SI base or derived unit (the Joule is the SI unit of energy), but it is explicitly accepted by the BIPM for use alongside SI units."
    }
  ],
  relatedList: [
    { label: "Electron Volt to Kilocalorie", from: "electron-volt", to: "kilocalorie" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Electron Volt to Joule", from: "electron-volt", to: "joule" },
    { label: "Kilocalorie to Erg", from: "kilocalorie", to: "erg" },
    { label: "Calorie to Electron Volt", from: "calorie", to: "electron-volt" }
  ],
  references: [
    "CODATA Internationally Recommended Values of the Fundamental Physical Constants (NIST).",
    "BIPM: The International System of Units (SI Brochure, 9th edition).",
    "IUPAC Compendium of Chemical Terminology (Gold Book): Electronvolt and Calorie."
  ]
};
