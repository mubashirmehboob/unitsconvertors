import { CustomArticleData } from "./types";

export const jouleToElectronVolt: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "electron-volt",
  seoTitle: "Joule to Electron Volt Converter (J to eV)",
  metaDescription: "Convert Joules to electron volts (J to eV) with quantum physics precision. Learn the exact CODATA constant 1.602176634×10⁻¹⁹ J, formula, tables, and FAQs.",
  h1: "Joule to Electron Volt Converter",
  introduction: [
    "The Joule (J) and the electron volt (eV) are key units for quantifying work, kinetic energy, and electrostatic potential across physics and chemistry. While the Joule is the macroscopic SI unit of energy, the electron volt is the fundamental microscopic unit used in subatomic particle physics, quantum mechanics, photonics, and semiconductor technology.",
    "Converting Joules to electron volts bridges human-scale physical work with subatomic particle interactions. By exact CODATA fundamental physical constant definition, one electron volt is defined as the kinetic energy gained by an elementary charge (such as an electron) accelerated through an electric potential difference of one volt: 1 eV = 1.602176634 × 10⁻¹⁹ Joules. Therefore, converting Joules to electron volts requires dividing the Joule value by 1.602176634 × 10⁻¹⁹ (or multiplying by approximately 6.241509 × 10¹⁸).",
    "This guide explains quantum energy scaling, provides the mathematical conversion formula, walks through subatomic particle calculations, presents a reference conversion table across eV, keV, MeV, and GeV, and answers particle physics questions."
  ],
  quickAnswer: {
    text: "To convert Joules to electron volts, divide the energy in Joules by 1.602176634 × 10⁻¹⁹ (or multiply by 6.241509 × 10¹⁸). For example, 1 Joule equals approximately 6.2415 × 10¹⁸ eV.",
    formulaDisplay: "eV = J ÷ 1.602176634 × 10⁻¹⁹",
    subtext: "One Joule is equal to approximately 6,241,509,074,460,762,000 electron volts (6.241509 × 10¹⁸ eV)."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the coherent SI unit of energy, equal to 1 Newton-meter or 1 Watt-second. In macroscopic physics, 1 Joule is a modest quantity of energy. However, in atomic and nuclear physics, a single Joule is an immense amount of energy—equivalent to the kinetic collision energy of trillions of subatomic particles."
  },
  aboutTargetUnit: {
    title: "Understanding the Electron Volt (eV)",
    text: "The electron volt (symbol: eV) is a non-SI unit accepted for use with the SI in high-energy and atomic physics. Defined as E = e × V, where 'e' is the elementary electric charge (1.602176634 × 10⁻¹⁹ C) and V is 1 Volt, 1 eV represents the microscopic energy shift of an individual electron crossing a 1V potential drop."
  },
  relationship: "The conversion between Joules and electron volts relies on the exact elementary charge constant e: 1 eV = 1.602176634 × 10⁻¹⁹ J. Conversely, 1 J ≈ 6.24150907446 × 10¹⁸ eV.",
  relationshipTitle: "Joule vs Electron Volt Scale Comparison",
  relationshipItems: [
    { label: "1.602 × 10⁻¹⁹ J", value: "1 eV (Electron moving across 1 Volt potential)" },
    { label: "3.204 × 10⁻¹⁹ J", value: "2 eV (Energy of a visible red photon ~620nm)" },
    { label: "1.602 × 10⁻16 J", value: "1 keV (1,000 eV / X-ray photon energy)" },
    { label: "1.602 × 10⁻¹³ J", value: "1 MeV (1,000,000 eV / Nuclear gamma ray)" },
    { label: "1 J", value: "6.2415 × 10¹⁸ eV (Macroscopic energy scale)" }
  ],
  formula: {
    text: "Divide the energy in Joules by the elementary charge constant (1.602176634 × 10⁻¹⁹ J/eV).",
    math: "eV = J / (1.602176634 * 10^-19)",
    subtext: "To convert electron volts back to Joules, multiply the eV value by 1.602176634 × 10⁻¹⁹."
  },
  formulaTitle: "Joule to Electron Volt Conversion Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "When performing calculations in software or scientific calculators, use exponent notation: divide by 1.602176634e-19 or multiply by 6.241509074e18."
  },
  expertNote: {
    title: "CODATA 2018 Fundamental Constant",
    text: "In the 2019 redefinition of the SI base units, the elementary charge e was fixed at exactly 1.602176634 × 10⁻¹⁹ Coulombs. This makes the conversion between Joules and electron volts an exact mathematical constant without experimental uncertainty."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Visible Light Photon Energy",
        subtitle: "Convert a green photon energy of 3.97 × 10⁻¹⁹ Joules into electron volts.",
        steps: [
          "Identify the energy in Joules: 3.97 × 10⁻¹⁹ J.",
          "Apply the formula: eV = (3.97 × 10⁻¹⁹) ÷ (1.602176634 × 10⁻¹⁹).",
          "Calculate: 3.97 ÷ 1.602176634 = 2.4778.",
          "Result: 3.97 × 10⁻¹⁹ J equals approximately 2.48 eV."
        ]
      },
      {
        title: "Example 2: Semiconductor Bandgap Energy",
        subtitle: "Convert a silicon semiconductor crystal bandgap of 1.794 × 10⁻¹⁹ Joules into eV.",
        steps: [
          "Identify the energy: 1.794 × 10⁻¹⁹ J.",
          "Divide by 1.602176634 × 10⁻¹⁹: 1.794 ÷ 1.602176634 = 1.1197.",
          "Result: 1.794 × 10⁻¹⁹ J equals approximately 1.12 eV."
        ]
      },
      {
        title: "Example 3: Medical X-Ray Photon Energy",
        subtitle: "Convert a diagnostic X-ray energy pulse of 8.01 × 10⁻¹⁵ Joules into keV.",
        steps: [
          "Identify the energy: 8.01 × 10⁻¹⁵ J.",
          "Divide by 1.602176634 × 10⁻¹⁹ J/eV: 8.01 × 10⁻¹⁵ ÷ 1.602176634 × 10⁻¹⁹ = 50,000 eV.",
          "Convert eV to keV: 50,000 ÷ 1,000 = 50 keV.",
          "Result: 8.01 × 10⁻¹⁵ J equals 50 keV."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Electron Volt Conversion Table",
    headers: ["Joules (J)", "Electron Volts (eV)", "Metric Prefix Equivalent", "Physical Context"],
    rows: [
      { fromVal: "1.602 × 10⁻¹⁹ J", toVal: "1.000 eV", extra: "1 eV", extra2: "Electron accelerated by 1 Volt" },
      { fromVal: "3.204 × 10⁻¹⁹ J", toVal: "2.000 eV", extra: "2 eV", extra2: "Red laser diode photon energy" },
      { fromVal: "1.602 × 10⁻¹8 J", toVal: "10.00 eV", extra: "10 eV", extra2: "Ultraviolet ionization threshold" },
      { fromVal: "1.602 × 10⁻¹6 J", toVal: "1,000 eV", extra: "1 keV", extra2: "Soft X-ray photon" },
      { fromVal: "1.602 × 10⁻¹3 J", toVal: "1,000,000 eV", extra: "1 MeV", extra2: "Nuclear beta decay energy" },
      { fromVal: "1.602 × 10⁻¹⁰ J", toVal: "1,000,000,000 eV", extra: "1 GeV", extra2: "Proton rest mass energy (~0.938 GeV)" },
      { fromVal: "1.602 × 10⁻⁷ J", toVal: "1,000,000,000,000 eV", extra: "1 TeV", extra2: "Large Hadron Collider collision beam" },
      { fromVal: "1 J", toVal: "6.2415 × 10¹⁸ eV", extra: "6.24 EeV", extra2: "Macroscopic 1 Newton-meter work" }
    ]
  },
  applications: {
    title: "Applications of J to eV Conversion",
    items: [
      {
        title: "Semiconductor Physics & Photovoltaics",
        text: "Engineers express electronic bandgaps, solar cell absorption thresholds, and diode work functions in eV, converting from spectrometer Joules to design microchips."
      },
      {
        title: "Particle Physics & Accelerators",
        text: "Facilities like CERN measure subatomic particle rest masses, kinetic collisions, and decay products in electron volts (MeV/GeV/TeV) rather than infinitesimal fractions of a Joule."
      },
      {
        title: "Spectroscopy & Quantum Chemistry",
        text: "Atomic energy levels, electron orbital transition lines, and laser emission wavelengths are converted from Joules (E = hν) into eV for energy level diagrams."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Mixing up exponents: 1 eV = 1.602 × 10⁻¹⁹ J (negative exponent) whereas 1 J = 6.2415 × 10¹⁸ eV (positive exponent).",
      "Forgetting metric prefixes: Remember 1 keV = 1,000 eV, 1 MeV = 1,000,000 eV, 1 GeV = 1,000,000,000 eV, and 1 TeV = 1,000,000,000,000 eV.",
      "Treating eV as a voltage unit: The electron volt is a unit of ENERGY, not voltage. Volts measure electric potential; electron volts measure potential energy."
    ]
  },
  faqs: [
    {
      question: "How many electron volts are in 1 Joule?",
      answer: "There are approximately 6.241509 × 10¹⁸ electron volts (6.2415 quintillion eV) in 1 Joule."
    },
    {
      question: "What is the exact value of 1 eV in Joules?",
      answer: "By international CODATA 2018 definition, 1 eV equals exactly 1.602176634 × 10⁻¹⁹ Joules."
    },
    {
      question: "What is the formula to convert J to eV?",
      answer: "The formula is: eV = J ÷ 1.602176634 × 10⁻¹⁹."
    },
    {
      question: "Why do physicists use electron volts instead of Joules?",
      answer: "Atomic and particle energies are extremely small (~10⁻¹⁹ J). Electron volts provide convenient numbers (like 1.1 eV or 2.5 eV) instead of long decimals with many zeros."
    },
    {
      question: "How do I convert eV back to Joules?",
      answer: "Multiply the eV value by 1.602176634 × 10⁻¹⁹ (e.g., 5 eV × 1.602176634 × 10⁻¹⁹ = 8.01088 × 10⁻¹⁹ J)."
    },
    {
      question: "What is a keV, MeV, and GeV?",
      answer: "These are metric multiples: 1 keV (kiloelectron volt) = 10³ eV; 1 MeV (megaelectron volt) = 10⁶ eV; 1 GeV (gigaelectron volt) = 10⁹ eV; 1 TeV (teraelectron volt) = 10¹² eV."
    }
  ],
  relatedList: [
    { label: "Joule to Erg", from: "joule", to: "erg" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" }
  ],
  references: [
    "CODATA Internationally Recommended Values of the Fundamental Physical Constants 2018.",
    "BIPM SI Brochure: Non-SI units accepted for use with the International System of Units.",
    "IUPAC Gold Book - Electronvolt Definition."
  ]
};
