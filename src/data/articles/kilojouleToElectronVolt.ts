import { CustomArticleData } from "./types";

export const kilojouleToElectronVolt: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "electron-volt",
  seoTitle: "Kilojoule to Electron Volt Converter (kJ to eV)",
  metaDescription: "Convert kilojoules to electron volts (kJ to eV) with exact CODATA quantum precision. Scientific formulas, step-by-step examples, atomic tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-electron-volt",
  h1: "Kilojoule to Electron Volt Converter",
  introduction: [
    "The kilojoule (kJ) and the electron volt (eV) are standard units of energy that connect macroscopic thermodynamics with microscopic quantum physics. While the kilojoule operates at macroscopic, human, and chemical scales (such as enthalpy of reaction per mole), the electron volt is the indispensable unit of particle physics, atomic transitions, and semiconductor electronics.",
    "Converting kilojoules to electron volts involves scaling energy across twenty-one orders of magnitude. By international CODATA standards, one electron volt is defined as the kinetic energy gained by a single electron accelerated across an electric potential difference of one volt, which equals exactly 1.602176634 × 10⁻¹⁹ Joules. Consequently, one kilojoule contains approximately 6.241509 × 10²¹ electron volts (6.24 sextillion eV).",
    "This guide provides the exact scientific formula, step-by-step calculations, an atomic and quantum energy reference table, practical physics applications, and answers to common questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to electron volts, multiply the kilojoule value by 1,000 and divide by the fundamental elementary charge constant 1.602176634 × 10⁻¹⁹ (or multiply by 6.241509074 × 10²¹). For example, 1 kJ equals approximately 6.2415 × 10²¹ eV.",
    formulaDisplay: "eV = (kJ × 1,000) ÷ (1.602176634 × 10⁻¹⁹) = kJ × 6.241509 × 10²¹",
    subtext: "1 kilojoule is equal to approximately 6.241509 × 10²¹ electron volts (eV)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an official SI decimal multiple of the Joule representing 1,000 Joules of energy. In chemistry, molar enthalpies (kJ/mol) quantify bond dissociation energies and chemical reaction heats across Avogadro's number (6.022 × 10²³) of particles."
  },
  aboutTargetUnit: {
    title: "Understanding the Electron Volt (eV)",
    text: "The electron volt (symbol: eV) is a non-SI unit accepted for use with the SI in particle physics, quantum mechanics, and solid-state electronics. Defined as the kinetic energy gained or lost by a single elementary charge accelerated through an electric potential difference of one volt (1 eV = 1.602176634 × 10⁻¹⁹ J), it provides a natural scale for photon energies, semiconductor bandgaps, and nuclear decay."
  },
  relationship: "Because 1 eV is exactly 1.602176634 × 10⁻¹⁹ Joules, 1 Joule contains 6.241509074 × 10¹⁸ eV. One kilojoule (1,000 Joules) contains 1,000 times that amount: 6.241509074 × 10²¹ electron volts.",
  relationshipTitle: "Kilojoule to Electron Volt Scale",
  relationshipItems: [
    { label: "1.602 × 10⁻²² kJ", value: "1 eV (fundamental quantum scale)" },
    { label: "1.602 × 10⁻¹⁶ kJ", value: "1 MeV (1 Million electron volts / nuclear reaction scale)" },
    { label: "1.602 × 10⁻¹³ kJ", value: "1 GeV (1 Giga electron volt / proton rest mass energy)" },
    { label: "1.602 × 10⁻¹⁰ kJ", value: "1 TeV (1 Tera electron volt / LHC collision scale)" },
    { label: "1 kJ", value: "6.2415 × 10²¹ eV (approx. 6.24 sextillion eV)" }
  ],
  formula: {
    text: "Multiply the energy in kilojoules by 1,000 to obtain Joules, then divide by the exact elementary charge constant 1.602176634 × 10⁻¹⁹ C.",
    math: "eV = (kJ * 1000) / 1.602176634e-19",
    subtext: "Alternatively: eV = kJ × 6.241509074460763 × 10²¹"
  },
  formulaTitle: "Kilojoule to Electron Volt Conversion Formula",
  practicalTip: {
    title: "Molar Conversion Connection",
    text: "To convert chemical bond energies from kJ/mol to eV/particle, divide the kJ/mol value by Faraday's constant / Avogadro's constant: 1 eV/particle ≈ 96.4853 kJ/mol (e.g., 400 kJ/mol ÷ 96.485 ≈ 4.15 eV/molecule)."
  },
  expertNote: {
    title: "Exact SI Definition Since 2019",
    text: "Under the 2019 redefinition of SI base units, the elementary charge e is defined as an exact invariant constant: e = 1.602176634 × 10⁻¹⁹ C. Consequently, the conversion between Joules and electron volts is completely exact."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Total Laser Pulse Energy to Quantum Yield",
        subtitle: "Convert a high-intensity research laser pulse energy of 0.05 kilojoules (50 J) into electron volts.",
        steps: [
          "Identify energy in kilojoules: 0.05 kJ.",
          "Convert to Joules: 0.05 × 1,000 = 50 J.",
          "Apply the formula: eV = 50 ÷ (1.602176634 × 10⁻¹⁹).",
          "Calculate: 50 ÷ 1.602176634 × 10⁻¹⁹ = 3.12075 × 10²⁰ eV.",
          "Result: 0.05 kJ equals approximately 3.121 × 10²⁰ electron volts."
        ]
      },
      {
        title: "Example 2: Macro Chemical Enthalpy to Electron Volts",
        subtitle: "Convert 2.5 kilojoules into electron volts.",
        steps: [
          "Identify value in kJ: 2.5 kJ.",
          "Multiply by 6.241509 × 10²¹: 2.5 × 6.241509 × 10²¹ = 1.560377 × 10²² eV.",
          "Result: 2.5 kJ equals approximately 1.5604 × 10²² eV."
        ]
      },
      {
        title: "Example 3: Particle Accelerator Beam Energy",
        subtitle: "A synchrotron ring stores 120 kJ in its circulating particle beam. Convert to eV.",
        steps: [
          "Identify energy in kJ: 120 kJ.",
          "Calculate: 120 × 6.241509 × 10²¹ = 7.48981 × 10²³ eV.",
          "Result: 120 kJ equals approximately 7.490 × 10²³ eV."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Electron Volt Conversion Table",
    headers: ["Kilojoules (kJ)", "Electron Volts (eV)", "Scientific Notation", "Physical Realm"],
    rows: [
      { fromVal: "1.602 × 10⁻²² kJ", toVal: "1.00 eV", extra: "1.00 × 10⁰ eV", extra2: "Silicon semiconductor bandgap (~1.1 eV)" },
      { fromVal: "1.602 × 10⁻¹⁹ kJ", toVal: "1,000.00 eV", extra: "1.00 × 10³ eV (1 keV)", extra2: "Diagnostic medical X-ray photon" },
      { fromVal: "1.602 × 10⁻¹⁶ kJ", toVal: "1,000,000.00 eV", extra: "1.00 × 10⁶ eV (1 MeV)", extra2: "Nuclear gamma ray photon / alpha particle" },
      { fromVal: "1.602 × 10⁻¹³ kJ", toVal: "1.00 × 10⁹ eV", extra: "1.00 × 10⁹ eV (1 GeV)", extra2: "Proton rest mass energy (~0.938 GeV)" },
      { fromVal: "1.602 × 10⁻¹⁰ kJ", toVal: "1.00 × 10¹² eV", extra: "1.00 × 10¹² eV (1 TeV)", extra2: "CERN Large Hadron Collider proton beam" },
      { fromVal: "0.001 kJ", toVal: "6.2415 × 10¹⁸ eV", extra: "6.24 × 10¹⁸ eV", extra2: "1 Joule of mechanical energy" },
      { fromVal: "0.01 kJ", toVal: "6.2415 × 10¹⁹ eV", extra: "6.24 × 10¹⁹ eV", extra2: "Energy to illuminate small laser pointer" },
      { fromVal: "0.1 kJ", toVal: "6.2415 × 10²⁰ eV", extra: "6.24 × 10²⁰ eV", extra2: "Capacitor bank pulse" },
      { fromVal: "1.0 kJ", toVal: "6.2415 × 10²¹ eV", extra: "6.24 × 10²¹ eV", extra2: "Base 1 kilojoule unit" },
      { fromVal: "10.0 kJ", toVal: "6.2415 × 10²² eV", extra: "6.24 × 10²² eV", extra2: "Kinetic energy of baseball thrown at 90mph" },
      { fromVal: "100.0 kJ", toVal: "6.2415 × 10²³ eV", extra: "6.24 × 10²³ eV", extra2: "Avogadro's number of ~1 eV particles" },
      { fromVal: "1,000.0 kJ", toVal: "6.2415 × 10²⁴ eV", extra: "6.24 × 10²⁴ eV", extra2: "1 Megajoule (MJ)" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to eV Conversion",
    items: [
      {
        title: "Photovoltaic Solid-State Physics",
        text: "Solar cell researchers convert solar irradiance spectra (measured in kJ/m²) to electron volts (eV) to match bandgap energy levels in silicon and perovskite materials."
      },
      {
        title: "High-Energy Particle Physics",
        text: "Physicists at accelerator laboratories calculate total stored beam energy in kilojoules and particle interaction collision energies in TeV or GeV."
      },
      {
        title: "Plasma and Fusion Research",
        text: "Tokamak fusion experiments translate total heating input from RF antennas (in kJ and MJ) into average plasma particle temperatures expressed in kilo-electron volts (keV)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Forgetting to multiply by 1,000 when starting with kilojoules rather than Joules before applying the elementary charge constant.",
      "Confusing single-particle energies (eV) with molar energies (kJ/mol): 1 eV/molecule equals 96.485 kJ/mol, not 1.602 × 10⁻²² kJ/mol.",
      "Losing exponent precision during calculator entry when handling 10²¹ scientific notation."
    ]
  },
  faqs: [
    {
      question: "How many electron volts are in 1 kilojoule?",
      answer: "There are approximately 6.241509 × 10²¹ electron volts (6.24 sextillion eV) in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kilojoules to electron volts?",
      answer: "The formula is: eV = (kilojoules × 1,000) ÷ 1.602176634 × 10⁻¹⁹ (or eV = kilojoules × 6.241509 × 10²¹)."
    },
    {
      question: "How many kilojoules are in 1 electron volt?",
      answer: "There are exactly 1.602176634 × 10⁻²² kilojoules (1.602176634 × 10⁻¹⁹ Joules) in 1 electron volt."
    },
    {
      question: "How do I convert kJ/mol to eV/particle?",
      answer: "Divide the kJ/mol value by Faraday's constant (96.4853). For example, 386 kJ/mol ÷ 96.4853 ≈ 4.0 eV per molecule."
    },
    {
      question: "Why is the electron volt so small compared to the kilojoule?",
      answer: "The electron volt represents the work done on a single subatomic electron, while the kilojoule represents macroscopic energy capable of lifting large physical objects."
    },
    {
      question: "How many electron volts are in 1 Joule?",
      answer: "There are approximately 6.241509 × 10¹⁸ electron volts in 1 Joule."
    },
    {
      question: "Is the conversion factor between Joules and eV exact?",
      answer: "Yes. Since the 2019 SI revision, the elementary charge e is defined as exactly 1.602176634 × 10⁻¹⁹ Coulombs, making the conversion exact."
    },
    {
      question: "How do I convert eV back to kJ?",
      answer: "Multiply the eV value by 1.602176634 × 10⁻²² (or multiply by 1.602176634 × 10⁻¹⁹ and divide by 1,000)."
    }
  ],
  relatedList: [
    { label: "Electron Volt to Kilojoule", from: "electron-volt", to: "kilojoule" },
    { label: "Kilojoule to Erg", from: "kilojoule", to: "erg" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" }
  ],
  references: [
    "CODATA Recommended Values of the Fundamental Physical Constants (2018/2022).",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Reference on Constants, Units, and Uncertainty: Elementary charge."
  ]
};
