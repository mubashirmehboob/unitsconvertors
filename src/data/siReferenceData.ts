/**
 * Authoritative SI Units & Metric Prefixes Reference Data
 * Grounded in:
 * - BIPM SI Brochure (9th Edition, 2019, with 2022 updates)
 * - BIPM 27th CGPM Resolution 3 (November 2022 - adoption of quetta, ronna, ronto, quecto)
 * - NIST Special Publication 811 (Guide for the Use of the International System of Units)
 * - NIST Special Publication 330 (The International System of Units - SI)
 * - ISO/IEC 80000 Quantities and Units series
 * - CODATA Internationally Recommended Values of the Fundamental Physical Constants
 */

export interface SiSection {
  id: string;
  title: string;
  shortTitle: string;
}

export const SI_SECTIONS: SiSection[] = [
  { id: "introduction", title: "1. Introduction to the SI", shortTitle: "Introduction" },
  { id: "what-is-si", title: "2. What Is the International System of Units?", shortTitle: "What Is SI?" },
  { id: "seven-base-units", title: "3. The Seven SI Base Units", shortTitle: "7 Base Units" },
  { id: "base-unit-details", title: "4. Deep Dive: Individual Base Unit Definitions", shortTitle: "Base Unit Details" },
  { id: "derived-units", title: "5. SI Derived Units with Special Names", shortTitle: "Derived Units" },
  { id: "dimensional-expressions", title: "6. Derived-Unit Dimensional Expressions", shortTitle: "Dimensional Expressions" },
  { id: "si-prefixes", title: "7. SI Prefixes (Quetta to Quecto: 10³⁰ to 10⁻³⁰)", shortTitle: "SI Prefixes" },
  { id: "prefix-examples", title: "8. Real-World Metric Prefix Examples", shortTitle: "Prefix Examples" },
  { id: "symbol-formatting-rules", title: "9. SI Unit Symbol & Formatting Rules", shortTitle: "Symbol & Style Rules" },
  { id: "si-vs-non-si", title: "10. SI versus Non-SI Units (Accepted & Deprecated)", shortTitle: "SI vs Non-SI" },
  { id: "common-metric-units", title: "11. Common Everyday Metric Units", shortTitle: "Everyday Metric" },
  { id: "engineering-units", title: "12. SI Units in Engineering & Mechanics", shortTitle: "Engineering SI" },
  { id: "electrical-units", title: "13. SI Units in Electrical Engineering", shortTitle: "Electrical SI" },
  { id: "physics-units", title: "14. SI Units in Physics & Astronomy", shortTitle: "Physics SI" },
  { id: "chemistry-units", title: "15. SI Units in Chemistry & Molecular Science", shortTitle: "Chemistry SI" },
  { id: "conversion-examples", title: "16. Step-by-Step SI Conversion Examples", shortTitle: "Conversion Examples" },
  { id: "common-mistakes", title: "17. Common SI Errors & Pitfalls", shortTitle: "Common Mistakes" },
  { id: "faq", title: "18. Frequently Asked Questions", shortTitle: "FAQs" },
  { id: "references", title: "19. Authoritative Standards & References", shortTitle: "References" },
];

export interface SiBaseUnitDetailed {
  name: string;
  symbol: string;
  quantity: string;
  dimensionSymbol: string;
  definingConstant: string;
  definingSymbol: string;
  definingValue: string;
  exactValueMath: string;
  formalDefinition: string;
  plainExplanation: string;
  historicalContext: string;
  realizationMethod: string;
}

export const SI_BASE_UNITS_DETAILED: SiBaseUnitDetailed[] = [
  {
    name: "second",
    symbol: "s",
    quantity: "Time",
    dimensionSymbol: "T",
    definingConstant: "Hyperfine transition frequency of caesium-133",
    definingSymbol: "\\Delta\\nu_{\\text{Cs}}",
    definingValue: "9 192 631 770 Hz",
    exactValueMath: "\\Delta\\nu_{\\text{Cs}} = 9\\,192\\,631\\,770\\text{ s}^{-1}",
    formalDefinition: "The second, symbol s, is the SI unit of time. It is defined by taking the fixed numerical value of the caesium frequency Δν_Cs, the unperturbed ground-state hyperfine transition frequency of the caesium-133 atom, to be 9 192 631 770 when expressed in the unit Hz, which is equal to s⁻¹.",
    plainExplanation: "One second is the exact duration of 9,192,631,770 periods of radiation corresponding to the transition between two hyperfine levels of an unperturbed caesium-133 atom at rest at a temperature of 0 K.",
    historicalContext: "Originally defined as 1/86,400 of a mean solar day. In 1960, it was briefly tied to the ephemeris year 1900. In 1967, the 13th CGPM adopted the atomic caesium frequency standard, which underpins modern GPS satellite synchronization.",
    realizationMethod: "Realized in national metrology institutes (such as NIST and BIPM) via atomic fountain clocks and optical lattice clocks that achieve frequency uncertainties below 1 part in 10¹⁶."
  },
  {
    name: "metre",
    symbol: "m",
    quantity: "Length",
    dimensionSymbol: "L",
    definingConstant: "Speed of light in vacuum",
    definingSymbol: "c",
    definingValue: "299 792 458 m/s",
    exactValueMath: "c = 299\\,792\\,458\\text{ m}\\cdot\\text{s}^{-1}",
    formalDefinition: "The metre, symbol m, is the SI unit of length. It is defined by taking the fixed numerical value of the speed of light in vacuum c to be 299 792 458 when expressed in the unit m/s, where the second is defined in terms of the caesium frequency Δν_Cs.",
    plainExplanation: "One metre is the distance that light travels in an absolute vacuum during a time interval of exactly 1/299,792,458 of a second. (Note: In US English, it is commonly spelled 'meter'.)",
    historicalContext: "In 1791, the French Academy of Sciences defined the metre as 1/10,000,000 of the distance from the North Pole to the equator through Paris. In 1889, it was materialized as a platinum-iridium bar. In 1960, it was redefined via krypton-86 wavelength, and in 1983, it was permanently linked to the speed of light.",
    realizationMethod: "Realized by measuring the time of flight of laser pulses or by interferometric wavelength measurements using frequency-stabilized lasers linked to the primary frequency standard."
  },
  {
    name: "kilogram",
    symbol: "kg",
    quantity: "Mass",
    dimensionSymbol: "M",
    definingConstant: "Planck constant",
    definingSymbol: "h",
    definingValue: "6.626 070 15 × 10⁻³⁴ J·s",
    exactValueMath: "h = 6.626\\,070\\,15 \\times 10^{-34}\\text{ kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-1}",
    formalDefinition: "The kilogram, symbol kg, is the SI unit of mass. It is defined by taking the fixed numerical value of the Planck constant h to be 6.626 070 15 × 10⁻³⁴ when expressed in the unit J·s, which is equal to kg·m²·s⁻¹, where the metre and the second are defined in terms of c and Δν_Cs.",
    plainExplanation: "Rather than relying on a physical metal cylinder that can slowly lose or gain atoms, the kilogram is now defined directly in terms of quantum mechanics via the Planck constant, connecting mechanical force and electrical power.",
    historicalContext: "In 1795, the gram was defined as the absolute weight of a cubic centimetre of pure water at 4 °C. From 1889 until May 20, 2019, the kilogram was uniquely defined by a single physical artifact: the International Prototype of the Kilogram (IPK, nicknamed 'Le Grand K'), stored in a vault in Sèvres, France.",
    realizationMethod: "Realized through two complementary primary methods: the Kibble balance (which balances gravitational force against magnetic force produced by electrical quantum standards) and the X-ray crystal density method (counting silicon-28 atoms in an enriched sphere)."
  },
  {
    name: "ampere",
    symbol: "A",
    quantity: "Electric current",
    dimensionSymbol: "I",
    definingConstant: "Elementary charge",
    definingSymbol: "e",
    definingValue: "1.602 176 634 × 10⁻¹⁹ C",
    exactValueMath: "e = 1.602\\,176\\,634 \\times 10^{-19}\\text{ A}\\cdot\\text{s}",
    formalDefinition: "The ampere, symbol A, is the SI unit of electric current. It is defined by taking the fixed numerical value of the elementary charge e to be 1.602 176 634 × 10⁻¹⁹ when expressed in the unit C, which is equal to A·s, where the second is defined in terms of Δν_Cs.",
    plainExplanation: "One ampere corresponds to a flow of exactly 1 / (1.602 176 634 × 10⁻¹⁹) elementary charges—approximately 6.241 509 × 10¹⁸ electrons—passing a given point in an electrical conductor every second.",
    historicalContext: "Before 2019, the ampere was defined conceptually by the magnetic force between two infinitely long, infinitely thin parallel conductors in a vacuum separated by one metre. This ideal geometry could never be physically built without approximations.",
    realizationMethod: "Directly realized using single-electron tunneling (SET) pumps, or indirectly with extraordinary precision using the Josephson effect (frequency to voltage) and quantum Hall effect (resistance standard)."
  },
  {
    name: "kelvin",
    symbol: "K",
    quantity: "Thermodynamic temperature",
    dimensionSymbol: "\\Theta",
    definingConstant: "Boltzmann constant",
    definingSymbol: "k",
    definingValue: "1.380 649 × 10⁻²³ J/K",
    exactValueMath: "k = 1.380\\,649 \\times 10^{-23}\\text{ kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}\\cdot\\text{K}^{-1}",
    formalDefinition: "The kelvin, symbol K, is the SI unit of thermodynamic temperature. It is defined by taking the fixed numerical value of the Boltzmann constant k to be 1.380 649 × 10⁻²³ when expressed in the unit J/K, which is equal to kg·m²·s⁻²·K⁻¹, where the kilogram, metre, and second are defined in terms of h, c, and Δν_Cs.",
    plainExplanation: "One kelvin is defined by fixing the energy per degree of thermal motion at the atomic scale. Absolute zero is 0 K. Water freezes at 273.15 K (0 °C). Importantly, the unit symbol is K, never written with a degree symbol (°K).",
    historicalContext: "In 1954, the 10th CGPM defined the kelvin as 1/273.16 of the thermodynamic temperature of the triple point of Vienna Standard Mean Ocean Water (VSMOW). The 2019 redefinition removed dependence on isotopic water compositions.",
    realizationMethod: "Realized across cryogenic, ambient, and high-temperature regimes using acoustic gas thermometry (measuring speed of sound in argon), Johnson noise thermometry, and spectral radiation pyrometry."
  },
  {
    name: "mole",
    symbol: "mol",
    quantity: "Amount of substance",
    dimensionSymbol: "N",
    definingConstant: "Avogadro constant",
    definingSymbol: "N_{\\text{A}}",
    definingValue: "6.022 140 76 × 10²³ mol⁻¹",
    exactValueMath: "N_{\\text{A}} = 6.022\\,140\\,76 \\times 10^{23}\\text{ mol}^{-1}",
    formalDefinition: "The mole, symbol mol, is the SI unit of amount of substance. One mole contains exactly 6.022 140 76 × 10²³ elementary entities. This number is the fixed numerical value of the Avogadro constant, N_A, when expressed in the unit mol⁻¹.",
    plainExplanation: "One mole is an exact counting number of elementary entities (atoms, molecules, ions, electrons, or other specified particles), equal to 602,214,076,000,000,000,000,000. It acts as the chemist's counting bridge between individual atoms and macroscopic grams.",
    historicalContext: "Historically, one mole was defined as the number of atoms in exactly 12 grams of pure unbound carbon-12 at rest in its ground state. The 2019 redefinition decoupled the mole from the mass of carbon-12.",
    realizationMethod: "Realized in analytical chemistry via gravimetry, coulometry, and isotope dilution mass spectrometry, enabling precise chemical stoichiometry and trace impurity calibrations."
  },
  {
    name: "candela",
    symbol: "cd",
    quantity: "Luminous intensity",
    dimensionSymbol: "J",
    definingConstant: "Luminous efficacy of 540 THz monochromatic radiation",
    definingSymbol: "K_{\\text{cd}}",
    definingValue: "683 lm/W (cd·sr/W)",
    exactValueMath: "K_{\\text{cd}} = 683\\text{ cd}\\cdot\\text{sr}\\cdot\\text{kg}^{-1}\\cdot\\text{m}^{-2}\\cdot\\text{s}^3",
    formalDefinition: "The candela, symbol cd, is the SI unit of luminous intensity in a given direction. It is defined by taking the fixed numerical value of the luminous efficacy of monochromatic radiation of frequency 540 × 10¹² Hz, K_cd, to be 683 when expressed in the unit lm/W, which is equal to cd·sr/W, or cd·sr·kg⁻¹·m⁻²·s³.",
    plainExplanation: "The candela measures the perceived optical power emitted by a light source in a particular direction, adjusted for the human eye's spectral sensitivity. The standard frequency of 540 THz corresponds to green-yellow light (wavelength ~555 nm) where the human eye has peak sensitivity.",
    historicalContext: "Originally based on standard wax candles, then on the glow of flame lamps, and in 1948 on blackbody radiation emitted by molten platinum at its freezing point (2045 K). In 1979, the 16th CGPM linked it to radiant power in watts.",
    realizationMethod: "Realized using absolute cryogenic radiometers measuring laser power in watts, coupled with calibrated photometer heads matching the CIE photopic standard observer curve V(λ)."
  }
];

export interface SiDerivedUnit {
  name: string;
  symbol: string;
  quantity: string;
  expressedInOtherSI: string;
  expressedInBaseUnits: string;
  dimensionalFormula: string;
  significance: string;
}

export const SI_DERIVED_UNITS_SPECIAL: SiDerivedUnit[] = [
  {
    name: "radian",
    symbol: "rad",
    quantity: "Plane angle",
    expressedInOtherSI: "m/m = 1",
    expressedInBaseUnits: "m·m⁻¹ = 1 (dimensionless)",
    dimensionalFormula: "1",
    significance: "Standard SI unit for angular measure; ratio of subtended arc length to radius."
  },
  {
    name: "steradian",
    symbol: "sr",
    quantity: "Solid angle",
    expressedInOtherSI: "m²/m² = 1",
    expressedInBaseUnits: "m²·m⁻² = 1 (dimensionless)",
    dimensionalFormula: "1",
    significance: "Three-dimensional angular measure; full sphere contains 4π steradians."
  },
  {
    name: "hertz",
    symbol: "Hz",
    quantity: "Frequency",
    expressedInOtherSI: "—",
    expressedInBaseUnits: "s⁻¹",
    dimensionalFormula: "T⁻¹",
    significance: "Number of periodic cycles or oscillations occurring per second."
  },
  {
    name: "newton",
    symbol: "N",
    quantity: "Force, weight",
    expressedInOtherSI: "—",
    expressedInBaseUnits: "kg·m·s⁻²",
    dimensionalFormula: "M·L·T⁻²",
    significance: "Force required to accelerate a 1 kilogram mass at a rate of 1 metre per second squared."
  },
  {
    name: "pascal",
    symbol: "Pa",
    quantity: "Pressure, stress",
    expressedInOtherSI: "N/m²",
    expressedInBaseUnits: "kg·m⁻¹·s⁻²",
    dimensionalFormula: "M·L⁻¹·T⁻²",
    significance: "Force of one newton evenly applied perpendicularly over an area of one square metre."
  },
  {
    name: "joule",
    symbol: "J",
    quantity: "Energy, work, heat",
    expressedInOtherSI: "N·m, W·s",
    expressedInBaseUnits: "kg·m²·s⁻²",
    dimensionalFormula: "M·L²·T⁻²",
    significance: "Work done by a force of one newton moving an object through a displacement of one metre."
  },
  {
    name: "watt",
    symbol: "W",
    quantity: "Power, radiant flux",
    expressedInOtherSI: "J/s, V·A",
    expressedInBaseUnits: "kg·m²·s⁻³",
    dimensionalFormula: "M·L²·T⁻³",
    significance: "Rate of energy transfer or work performed at one joule per second."
  },
  {
    name: "coulomb",
    symbol: "C",
    quantity: "Electric charge",
    expressedInOtherSI: "A·s",
    expressedInBaseUnits: "s·A",
    dimensionalFormula: "T·I",
    significance: "Quantity of electricity conveyed in one second by a steady current of one ampere."
  },
  {
    name: "volt",
    symbol: "V",
    quantity: "Electric potential difference, electromotive force",
    expressedInOtherSI: "W/A, J/C",
    expressedInBaseUnits: "kg·m²·s⁻³·A⁻¹",
    dimensionalFormula: "M·L²·T⁻³·I⁻¹",
    significance: "Difference in electric potential between two points that carries 1 watt of power per ampere."
  },
  {
    name: "farad",
    symbol: "F",
    quantity: "Capacitance",
    expressedInOtherSI: "C/V",
    expressedInBaseUnits: "kg⁻¹·m⁻²·s⁴·A²",
    dimensionalFormula: "M⁻¹·L⁻²·T⁴·I²",
    significance: "Capacitance of a conductor that holds 1 coulomb of charge with a potential of 1 volt."
  },
  {
    name: "ohm",
    symbol: "Ω",
    quantity: "Electric resistance, impedance",
    expressedInOtherSI: "V/A",
    expressedInBaseUnits: "kg·m²·s⁻³·A⁻²",
    dimensionalFormula: "M·L²·T⁻³·I⁻²",
    significance: "Electrical resistance between two points when 1 volt produces a current of 1 ampere."
  },
  {
    name: "siemens",
    symbol: "S",
    quantity: "Electric conductance, admittance",
    expressedInOtherSI: "1/Ω, A/V",
    expressedInBaseUnits: "kg⁻¹·m⁻²·s³·A²",
    dimensionalFormula: "M⁻¹·L⁻²·T³·I²",
    significance: "Reciprocal of electrical resistance; ease with which electric current passes."
  },
  {
    name: "weber",
    symbol: "Wb",
    quantity: "Magnetic flux",
    expressedInOtherSI: "V·s, J/A",
    expressedInBaseUnits: "kg·m²·s⁻²·A⁻¹",
    dimensionalFormula: "M·L²·T⁻²·I⁻¹",
    significance: "Magnetic flux that, linking a circuit of 1 turn, produces an electromotive force of 1 volt as it drops to zero in 1 second."
  },
  {
    name: "tesla",
    symbol: "T",
    quantity: "Magnetic flux density, magnetic B-field",
    expressedInOtherSI: "Wb/m², N/(A·m)",
    expressedInBaseUnits: "kg·s⁻²·A⁻¹",
    dimensionalFormula: "M·T⁻²·I⁻¹",
    significance: "Field strength that produces 1 newton of force per metre of conductor carrying 1 ampere."
  },
  {
    name: "henry",
    symbol: "H",
    quantity: "Inductance",
    expressedInOtherSI: "Wb/A, V·s/A",
    expressedInBaseUnits: "kg·m²·s⁻²·A⁻²",
    dimensionalFormula: "M·L²·T⁻²·I⁻²",
    significance: "Inductance of a closed circuit that induces an electromotive force of 1 volt when current varies at 1 ampere per second."
  },
  {
    name: "degree Celsius",
    symbol: "°C",
    quantity: "Celsius temperature",
    expressedInOtherSI: "K − 273.15",
    expressedInBaseUnits: "K",
    dimensionalFormula: "\\Theta",
    significance: "Common temperature scale with identical degree interval size to the kelvin: 1 °C interval = 1 K interval."
  },
  {
    name: "lumen",
    symbol: "lm",
    quantity: "Luminous flux",
    expressedInOtherSI: "cd·sr",
    expressedInBaseUnits: "cd·sr",
    dimensionalFormula: "J",
    significance: "Total quantity of visible light emitted per second across a solid angle of 1 steradian by a 1 candela source."
  },
  {
    name: "lux",
    symbol: "lx",
    quantity: "Illuminance",
    expressedInOtherSI: "lm/m²",
    expressedInBaseUnits: "m⁻²·cd·sr",
    dimensionalFormula: "L⁻²·J",
    significance: "Luminous flux of 1 lumen distributed uniformly over an illuminated surface of 1 square metre."
  },
  {
    name: "becquerel",
    symbol: "Bq",
    quantity: "Activity of a radionuclide",
    expressedInOtherSI: "—",
    expressedInBaseUnits: "s⁻¹",
    dimensionalFormula: "T⁻¹",
    significance: "Rate of radioactive decay equal to exactly one spontaneous nuclear transformation per second."
  },
  {
    name: "gray",
    symbol: "Gy",
    quantity: "Absorbed dose, kerma",
    expressedInOtherSI: "J/kg",
    expressedInBaseUnits: "m²·s⁻²",
    dimensionalFormula: "L²·T⁻²",
    significance: "Radiation dose where 1 joule of ionizing energy is absorbed per 1 kilogram of matter."
  },
  {
    name: "sievert",
    symbol: "Sv",
    quantity: "Dose equivalent, effective biological dose",
    expressedInOtherSI: "J/kg",
    expressedInBaseUnits: "m²·s⁻²",
    dimensionalFormula: "L²·T⁻²",
    significance: "Biologically weighted ionizing radiation dose taking relative biological effectiveness into account."
  },
  {
    name: "katal",
    symbol: "kat",
    quantity: "Catalytic activity",
    expressedInOtherSI: "—",
    expressedInBaseUnits: "mol·s⁻¹",
    dimensionalFormula: "T⁻¹·N",
    significance: "Enzymatic or chemical catalytic activity that converts substrate at a rate of 1 mole per second."
  }
];

export interface SiPrefix {
  name: string;
  symbol: string;
  exponent: number;
  factorText: string;
  decimalText: string;
  wordUS: string;
  yearAdopted: number;
  etymology: string;
  scaleContext: string;
}

export const SI_PREFIXES_ALL: SiPrefix[] = [
  {
    name: "quetta",
    symbol: "Q",
    exponent: 30,
    factorText: "10³⁰",
    decimalText: "1 000 000 000 000 000 000 000 000 000 000",
    wordUS: "One nonillion",
    yearAdopted: 2022,
    etymology: "From Greek/Latin deca/ten (10³⁰ = (10³)¹⁰), altered to start with 'q'",
    scaleContext: "Mass of planet Jupiter is approximately 1.9 Quettagrams (Qg)."
  },
  {
    name: "ronna",
    symbol: "R",
    exponent: 27,
    factorText: "10²⁷",
    decimalText: "1 000 000 000 000 000 000 000 000 000",
    wordUS: "One octillion",
    yearAdopted: 2022,
    etymology: "From Greek ennea/nine (10²⁷ = (10³)⁹), altered to start with 'r'",
    scaleContext: "Mass of planet Earth is approximately 5.972 Ronnagrams (Rg)."
  },
  {
    name: "yotta",
    symbol: "Y",
    exponent: 24,
    factorText: "10²⁴",
    decimalText: "1 000 000 000 000 000 000 000 000",
    wordUS: "One septillion",
    yearAdopted: 1991,
    etymology: "From Greek okto/eight (10²⁴ = (10³)⁸)",
    scaleContext: "Total mass of Earth's oceans is roughly 1.4 Yottagrams (Yg)."
  },
  {
    name: "zetta",
    symbol: "Z",
    exponent: 21,
    factorText: "10²¹",
    decimalText: "1 000 000 000 000 000 000 000",
    wordUS: "One sextillion",
    yearAdopted: 1991,
    etymology: "From Latin septem/seven (10²¹ = (10³)⁷)",
    scaleContext: "Global digital data sphere exceeds 120 Zettabytes (ZB)."
  },
  {
    name: "exa",
    symbol: "E",
    exponent: 18,
    factorText: "10¹⁸",
    decimalText: "1 000 000 000 000 000 000",
    wordUS: "One quintillion",
    yearAdopted: 1975,
    etymology: "From Greek hexa/six (10¹⁸ = (10³)⁶)",
    scaleContext: "Exascale supercomputers compute at over 1 ExaFLOPS (10¹⁸ floating point ops/sec)."
  },
  {
    name: "peta",
    symbol: "P",
    exponent: 15,
    factorText: "10¹⁵",
    decimalText: "1 000 000 000 000 000",
    wordUS: "One quadrillion",
    yearAdopted: 1975,
    etymology: "From Greek penta/five (10¹⁵ = (10³)⁵)",
    scaleContext: "One light-year is approximately 9.46 Petametres (Pm)."
  },
  {
    name: "tera",
    symbol: "T",
    exponent: 12,
    factorText: "10¹²",
    decimalText: "1 000 000 000 000",
    wordUS: "One trillion",
    yearAdopted: 1960,
    etymology: "From Greek teras/monster or tetra/four",
    scaleContext: "High-capacity computer hard drives commonly store 2 to 24 Terabytes (TB)."
  },
  {
    name: "giga",
    symbol: "G",
    exponent: 9,
    factorText: "10⁹",
    decimalText: "1 000 000 000",
    wordUS: "One billion",
    yearAdopted: 1960,
    etymology: "From Greek gigas/giant",
    scaleContext: "Modern processor clock rates operate in the 2 to 5 Gigahertz (GHz) range."
  },
  {
    name: "mega",
    symbol: "M",
    exponent: 6,
    factorText: "10⁶",
    decimalText: "1 000 000",
    wordUS: "One million",
    yearAdopted: 1960,
    etymology: "From Greek megas/great",
    scaleContext: "Large commercial wind turbines produce 2 to 15 Megawatts (MW) of electrical power."
  },
  {
    name: "kilo",
    symbol: "k",
    exponent: 3,
    factorText: "10³",
    decimalText: "1 000",
    wordUS: "One thousand",
    yearAdopted: 1795,
    etymology: "From Greek chilioi/thousand",
    scaleContext: "One kilometre (km) is 1,000 metres; 1 kilogram (kg) is 1,000 grams."
  },
  {
    name: "hecto",
    symbol: "h",
    exponent: 2,
    factorText: "10²",
    decimalText: "100",
    wordUS: "One hundred",
    yearAdopted: 1795,
    etymology: "From Greek hekaton/hundred",
    scaleContext: "Atmospheric pressure is commonly measured in hectopascals (1 hPa = 100 Pa = 1 mbar)."
  },
  {
    name: "deca",
    symbol: "da",
    exponent: 1,
    factorText: "10¹",
    decimalText: "10",
    wordUS: "Ten",
    yearAdopted: 1795,
    etymology: "From Greek deka/ten",
    scaleContext: "One decanewton (daN) = 10 newtons, often used as an industrial load rating."
  },
  {
    name: "deci",
    symbol: "d",
    exponent: -1,
    factorText: "10⁻¹",
    decimalText: "0.1",
    wordUS: "One tenth",
    yearAdopted: 1795,
    etymology: "From Latin decimus/tenth",
    scaleContext: "One decilitre (dL) is 100 mL, commonly used in medical blood chemistry tests."
  },
  {
    name: "centi",
    symbol: "c",
    exponent: -2,
    factorText: "10⁻²",
    decimalText: "0.01",
    wordUS: "One hundredth",
    yearAdopted: 1795,
    etymology: "From Latin centum/hundred",
    scaleContext: "Width of a standard fingernail is approximately 1 centimetre (cm = 0.01 m)."
  },
  {
    name: "milli",
    symbol: "m",
    exponent: -3,
    factorText: "10⁻³",
    decimalText: "0.001",
    wordUS: "One thousandth",
    yearAdopted: 1795,
    etymology: "From Latin mille/thousand",
    scaleContext: "Thickness of a credit card is roughly 0.76 millimetres (mm)."
  },
  {
    name: "micro",
    symbol: "µ",
    exponent: -6,
    factorText: "10⁻⁶",
    decimalText: "0.000 001",
    wordUS: "One millionth",
    yearAdopted: 1960,
    etymology: "From Greek mikros/small",
    scaleContext: "Diameter of human red blood cells is approximately 7 to 8 micrometres (µm)."
  },
  {
    name: "nano",
    symbol: "n",
    exponent: -9,
    factorText: "10⁻⁹",
    decimalText: "0.000 000 001",
    wordUS: "One billionth",
    yearAdopted: 1960,
    etymology: "From Greek nanos/dwarf",
    scaleContext: "Diameter of a double-helix DNA strand is about 2 nanometres (nm)."
  },
  {
    name: "pico",
    symbol: "p",
    exponent: -12,
    factorText: "10⁻¹²",
    decimalText: "0.000 000 000 001",
    wordUS: "One trillionth",
    yearAdopted: 1960,
    etymology: "From Italian piccolo/small or Spanish pico",
    scaleContext: "Radius of a helium atom is approximately 31 picometres (pm)."
  },
  {
    name: "femto",
    symbol: "f",
    exponent: -15,
    factorText: "10⁻¹⁵",
    decimalText: "0.000 000 000 000 001",
    wordUS: "One quadrillionth",
    yearAdopted: 1964,
    etymology: "From Danish/Norwegian femten/fifteen",
    scaleContext: "Diameter of a proton is approximately 1.7 femtometres (fm)."
  },
  {
    name: "atto",
    symbol: "a",
    exponent: -18,
    factorText: "10⁻¹⁸",
    decimalText: "0.000 000 000 000 000 001",
    wordUS: "One quintillionth",
    yearAdopted: 1964,
    etymology: "From Danish/Norwegian atten/eighteen",
    scaleContext: "Attosecond laser pulses allow physicists to photograph electron movement in atoms."
  },
  {
    name: "zepto",
    symbol: "z",
    exponent: -21,
    factorText: "10⁻²¹",
    decimalText: "0.000 000 000 000 000 000 001",
    wordUS: "One sextillionth",
    yearAdopted: 1991,
    etymology: "From Latin septem/seven (10⁻²¹ = (10⁻³)⁷)",
    scaleContext: "Electric charge of an electron is approximately 0.16 zeptocoulombs (zC)."
  },
  {
    name: "yocto",
    symbol: "y",
    exponent: -24,
    factorText: "10⁻²⁴",
    decimalText: "0.000 000 000 000 000 000 000 001",
    wordUS: "One septillionth",
    yearAdopted: 1991,
    etymology: "From Greek okto/eight (10⁻²⁴ = (10⁻³)⁸)",
    scaleContext: "Rest mass of a proton is roughly 1.67 yoctograms (yg)."
  },
  {
    name: "ronto",
    symbol: "r",
    exponent: -27,
    factorText: "10⁻²⁷",
    decimalText: "0.000 000 000 000 000 000 000 000 001",
    wordUS: "One octillionth",
    yearAdopted: 2022,
    etymology: "From Greek ennea/nine (10⁻²⁷ = (10⁻³)⁹), altered to start with 'r'",
    scaleContext: "Rest mass of an electron is approximately 0.911 rontograms (rg) or 0.000911 yg."
  },
  {
    name: "quecto",
    symbol: "q",
    exponent: -30,
    factorText: "10⁻³⁰",
    decimalText: "0.000 000 000 000 000 000 000 000 000 001",
    wordUS: "One nonillionth",
    yearAdopted: 2022,
    etymology: "From Greek/Latin deca/ten (10⁻³⁰ = (10⁻³)¹⁰), altered to start with 'q'",
    scaleContext: "Mass-energy equivalent of 1 bit of stored data or high-energy cosmic neutrino (~0.05 qg)."
  }
];

export interface FormattingRule {
  ruleNumber: number;
  title: string;
  category: string;
  explanation: string;
  correctExample: string;
  incorrectExample: string;
  whyItMatters: string;
}

export const SI_FORMATTING_RULES: FormattingRule[] = [
  {
    ruleNumber: 1,
    title: "Case Sensitivity of Unit Symbols",
    category: "Capitalization",
    explanation: "Unit symbols derived from proper names are capitalized (W, J, Pa, N, V, Hz, C, K, A, Ω). All other symbols are lowercase (m, s, kg, cd, mol). Unit names when spelled out are always in lowercase in English (watt, newton, kelvin, pascal, metre), except at the start of a sentence or in 'degree Celsius'.",
    correctExample: "50 kW, 100 J, 20 m, 5 kg",
    incorrectExample: "50 KW, 100 j, 20 M (M means mega-), 5 Kg",
    whyItMatters: "'KW' is an error because 'K' is kelvin, not kilo. 'm' is metre, while 'M' is mega (10⁶) or molar concentration."
  },
  {
    ruleNumber: 2,
    title: "The Kelvin Has No Degree Symbol",
    category: "Temperature",
    explanation: "Thermodynamic temperature in the SI is expressed in kelvins, symbol K. It must never be written with a degree symbol (°K) or called 'degrees Kelvin'. Degrees are only used for degree Celsius (°C) and angle (°).",
    correctExample: "298.15 K, an increase of 5 K",
    incorrectExample: "298.15 °K, 298.15 deg K",
    whyItMatters: "The 13th CGPM (1967) formally abolished the term 'degree Kelvin' and symbol '°K'. Kelvin is an absolute thermodynamic unit, not an arbitrary interval scale."
  },
  {
    ruleNumber: 3,
    title: "Required Space Between Number and Unit Symbol",
    category: "Spacing",
    explanation: "A non-breaking space must always separate the numerical value from the unit symbol. The only exception is for plane angle superscripts (degree °, minute ', second '').",
    correctExample: "25 kg, 100 m, 20 °C, 50 % (NIST style) or 50%",
    incorrectExample: "25kg, 100m, 20°C, 25 k g",
    whyItMatters: "The numerical value and unit symbol form a mathematical product. Omitting the space causes automated parsers and screen readers to fail."
  },
  {
    ruleNumber: 4,
    title: "Unit Symbols Never Take a Plural 's'",
    category: "Pluralization",
    explanation: "Unit symbols are mathematical entities, not grammatical abbreviations. They remain identical in singular and plural. When unit names are spelled out in full text, English plurals apply.",
    correctExample: "5 kg (symbol) or 5 kilograms (full name); 10 s or 10 seconds",
    incorrectExample: "5 kgs, 10 ms (this actually means 10 milliseconds!)",
    whyItMatters: "Adding an 's' creates ambiguity: '10 ms' denotes 10 milliseconds, whereas the author intended 10 metres."
  },
  {
    ruleNumber: 5,
    title: "No Periods After Unit Symbols",
    category: "Punctuation",
    explanation: "Do not put a full stop (period) after a unit symbol unless the symbol occurs at the natural end of a sentence.",
    correctExample: "The pipe length is 15 m and weighs 80 kg.",
    incorrectExample: "The pipe length is 15 m. and weighs 80 kg.",
    whyItMatters: "Unit symbols are invariant algebraic notations, not abbreviations like 'etc.' or 'approx.'"
  },
  {
    ruleNumber: 6,
    title: "Compound Prefixes Are Forbidden",
    category: "Prefixes",
    explanation: "Only one prefix may be attached to a unit. Double prefixes must never be used.",
    correctExample: "1 nm (nanometre), 1 pF (picofarad), 1 Gg (gigagram)",
    incorrectExample: "1 mµm (millimicrometre), 1 µµF (micromicrofarad), 1 kkg (kilokilogram)",
    whyItMatters: "BIPM explicitly forbids compound prefixes to eliminate transcription confusion and math errors."
  },
  {
    ruleNumber: 7,
    title: "Multiplication and Division of Units",
    category: "Mathematical Operations",
    explanation: "To indicate the multiplication of units, use a half-high dot (·) or a space. To indicate division, use a solidus (/), a horizontal division bar, or negative exponents. Never use more than one solidus without parentheses.",
    correctExample: "N·m or N m; m/s or m·s⁻¹; W/(m·K) or W·m⁻¹·K⁻¹",
    incorrectExample: "W/m/K (ambiguous order of operations), N-m (hyphen suggests subtraction)",
    whyItMatters: "Expressions like 'W/m/K' violate algebraic syntax because it is unclear whether it means (W/m)/K or W/(m/K)."
  },
  {
    ruleNumber: 8,
    title: "Prefix Applies to the Entire Unit",
    category: "Prefix Power Rules",
    explanation: "When a unit with a prefix is raised to an exponent, the exponent applies to the whole unit including the prefix.",
    correctExample: "1 km² = (10³ m)² = 10⁶ m² = 1 000 000 m²; 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³",
    incorrectExample: "Treating 1 km² as 10³ m² (1 000 m² is off by a factor of 1 000!)",
    whyItMatters: "Failure to square or cube the metric prefix causes 1000× or 1,000,000× engineering errors in civil and fluid designs."
  }
];

export interface NonSiAcceptedUnit {
  name: string;
  symbol: string;
  quantity: string;
  valueInSi: string;
  notes: string;
}

export const NON_SI_ACCEPTED_UNITS: NonSiAcceptedUnit[] = [
  {
    name: "minute",
    symbol: "min",
    quantity: "Time",
    valueInSi: "1 min = 60 s",
    notes: "Accepted worldwide for everyday use, commerce, and aviation."
  },
  {
    name: "hour",
    symbol: "h",
    quantity: "Time",
    valueInSi: "1 h = 60 min = 3 600 s",
    notes: "Accepted universally alongside the SI second."
  },
  {
    name: "day",
    symbol: "d",
    quantity: "Time",
    valueInSi: "1 d = 24 h = 86 400 s",
    notes: "Civil calendar day. (Astronomical sidereal days require explicit qualification.)"
  },
  {
    name: "astronomical unit",
    symbol: "au",
    quantity: "Length",
    valueInSi: "1 au = 149 597 870 700 m",
    notes: "Defined exactly by the International Astronomical Union (IAU) in 2012."
  },
  {
    name: "degree (angle)",
    symbol: "°",
    quantity: "Plane angle",
    valueInSi: "1° = (π / 180) rad ≈ 0.017 453 rad",
    notes: "No space between numerical value and degree symbol (e.g., 45°)."
  },
  {
    name: "minute of arc",
    symbol: "'",
    quantity: "Plane angle",
    valueInSi: "1' = (1/60)° = (π / 10 800) rad",
    notes: "Common in astronomy, geodesy, and marine navigation."
  },
  {
    name: "second of arc",
    symbol: "''",
    quantity: "Plane angle",
    valueInSi: "1'' = (1/60)' = (π / 648 000) rad",
    notes: "Used in optical astronomy and high-precision geodesy."
  },
  {
    name: "hectare",
    symbol: "ha",
    quantity: "Area",
    valueInSi: "1 ha = 10 000 m² = 1 hm² = 0.01 km²",
    notes: "Standard metric land measurement unit throughout global agriculture."
  },
  {
    name: "litre",
    symbol: "L or l",
    quantity: "Volume",
    valueInSi: "1 L = 1 dm³ = 10⁻³ m³ = 1 000 cm³",
    notes: "Both 'L' and 'l' are approved; 'L' is strongly preferred in English to avoid confusion with numeral 1."
  },
  {
    name: "tonne (metric ton)",
    symbol: "t",
    quantity: "Mass",
    valueInSi: "1 t = 10³ kg = 1 Mg = 1 000 kg",
    notes: "Equal to 1 megagram (Mg); widely used in heavy logistics, shipping, and civil construction."
  },
  {
    name: "dalton",
    symbol: "Da",
    quantity: "Mass (atomic/molecular)",
    valueInSi: "1 Da ≈ 1.660 539 066 60(50) × 10⁻²⁷ kg",
    notes: "Unified atomic mass unit (u); 1/12 the mass of an unbound carbon-12 atom at rest."
  },
  {
    name: "electronvolt",
    symbol: "eV",
    quantity: "Energy",
    valueInSi: "1 eV = 1.602 176 634 × 10⁻¹⁹ J",
    notes: "Kinetic energy acquired by an electron passing through an electric potential difference of 1 volt."
  },
  {
    name: "decibel",
    symbol: "dB",
    quantity: "Logarithmic ratio",
    valueInSi: "Dimensionless (logarithmic)",
    notes: "Used in acoustics, telecommunications, signal-to-noise ratio, and RF engineering."
  }
];

export interface DomainSiApplication {
  domain: string;
  disciplineSlug: string;
  description: string;
  units: {
    quantity: string;
    unitName: string;
    symbol: string;
    baseUnitEquivalent: string;
    realWorldUse: string;
  }[];
}

export const DOMAIN_SI_APPLICATIONS: DomainSiApplication[] = [
  {
    domain: "Engineering & Mechanics",
    disciplineSlug: "mechanical-calculators",
    description: "Mechanical, civil, structural, and materials engineering rely on coherent derived SI units to calculate stresses, torques, thermal conduction, and dynamic fluid flows.",
    units: [
      {
        quantity: "Stress & Pressure",
        unitName: "megapascal",
        symbol: "MPa",
        baseUnitEquivalent: "10⁶ kg·m⁻¹·s⁻² (1 N/mm²)",
        realWorldUse: "Structural steel yield strength (e.g., ASTM A36 = 250 MPa; concrete compressive strength = 30 MPa)."
      },
      {
        quantity: "Elastic (Young's) Modulus",
        unitName: "gigapascal",
        symbol: "GPa",
        baseUnitEquivalent: "10⁹ kg·m⁻¹·s⁻²",
        realWorldUse: "Stiffness of structural materials (structural steel is ~200 GPa; titanium alloy is ~110 GPa)."
      },
      {
        quantity: "Torque & Moment of Force",
        unitName: "newton-metre",
        symbol: "N·m",
        baseUnitEquivalent: "kg·m²·s⁻²",
        realWorldUse: "Automotive engine output (e.g., 400 N·m) and structural fastener tightening specifications."
      },
      {
        quantity: "Dynamic Viscosity",
        unitName: "pascal-second",
        symbol: "Pa·s",
        baseUnitEquivalent: "kg·m⁻¹·s⁻¹",
        realWorldUse: "Hydraulic fluids, lubricants, and CFD aerodynamic boundary layer simulations."
      },
      {
        quantity: "Thermal Conductivity",
        unitName: "watt per metre-kelvin",
        symbol: "W/(m·K)",
        baseUnitEquivalent: "kg·m·s⁻³·K⁻¹",
        realWorldUse: "Building insulation design (fiberglass ~0.04 W/(m·K)) and copper heat sinks (~400 W/(m·K))."
      },
      {
        quantity: "Specific Heat Capacity",
        unitName: "joule per kilogram-kelvin",
        symbol: "J/(kg·K)",
        baseUnitEquivalent: "m²·s⁻²·K⁻¹",
        realWorldUse: "Thermodynamic heat exchangers (water specific heat = 4 184 J/(kg·K))."
      }
    ]
  },
  {
    domain: "Electrical & Electronics Engineering",
    disciplineSlug: "electrical-calculators",
    description: "Electrical systems operate with 100% coherence across Ohm's law, Faraday's law, and Maxwell's equations without arbitrary scaling constants.",
    units: [
      {
        quantity: "Electric Potential Difference",
        unitName: "volt",
        symbol: "V",
        baseUnitEquivalent: "kg·m²·s⁻³·A⁻¹",
        realWorldUse: "Grid distribution voltages (120 V, 230 V, 11 kV, 400 kV) and microchip logic levels (1.2 V, 3.3 V)."
      },
      {
        quantity: "Electric Resistance",
        unitName: "ohm",
        symbol: "Ω",
        baseUnitEquivalent: "kg·m²·s⁻³·A⁻²",
        realWorldUse: "Circuit resistors, transmission line resistance, and grounding grid safety impedance."
      },
      {
        quantity: "Capacitance",
        unitName: "farad",
        symbol: "F",
        baseUnitEquivalent: "kg⁻¹·m⁻²·s⁴·A²",
        realWorldUse: "Filter capacitors, power factor correction banks, and supercapacitors (1 µF to 3 000 F)."
      },
      {
        quantity: "Inductance",
        unitName: "henry",
        symbol: "H",
        baseUnitEquivalent: "kg·m²·s⁻²·A⁻²",
        realWorldUse: "Transformers, switch-mode power supplies, motor windings, and RF chokes (1 nH to 10 H)."
      },
      {
        quantity: "Magnetic Flux Density",
        unitName: "tesla",
        symbol: "T",
        baseUnitEquivalent: "kg·s⁻²·A⁻¹",
        realWorldUse: "Medical MRI diagnostic scanners (1.5 T to 7 T) and Earth's geomagnetic field (~30 to 60 µT)."
      },
      {
        quantity: "Electric Conductance",
        unitName: "siemens",
        symbol: "S",
        baseUnitEquivalent: "kg⁻¹·m⁻²·s³·A²",
        realWorldUse: "Electrolyte solution purity monitoring and MOSFET transconductance."
      }
    ]
  },
  {
    domain: "Physics & Astronomy",
    disciplineSlug: "physics-calculators",
    description: "Fundamental physics ties gravitational, electromagnetic, and quantum phenomena together through invariant SI units.",
    units: [
      {
        quantity: "Linear Momentum",
        unitName: "kilogram-metre per second",
        symbol: "kg·m/s",
        baseUnitEquivalent: "kg·m·s⁻¹ (also N·s)",
        realWorldUse: "Particle accelerator collisions and rocket propulsion specific impulse."
      },
      {
        quantity: "Angular Momentum / Action",
        unitName: "joule-second",
        symbol: "J·s",
        baseUnitEquivalent: "kg·m²·s⁻¹",
        realWorldUse: "Quantum spin states and Planck's quantum of action (h)."
      },
      {
        quantity: "Radioactive Activity",
        unitName: "becquerel",
        symbol: "Bq",
        baseUnitEquivalent: "s⁻¹",
        realWorldUse: "Nuclear medicine isotope dosages (e.g., Technetium-99m) and environmental radon levels."
      },
      {
        quantity: "Absorbed Radiation Dose",
        unitName: "gray",
        symbol: "Gy",
        baseUnitEquivalent: "m²·s⁻² (J/kg)",
        realWorldUse: "Radiation oncology cancer treatment protocols."
      },
      {
        quantity: "Radiation Equivalent Dose",
        unitName: "sievert",
        symbol: "Sv",
        baseUnitEquivalent: "m²·s⁻² (J/kg weighted)",
        realWorldUse: "Radiological occupational safety and cosmic ray astronaut exposure limits."
      }
    ]
  },
  {
    domain: "Chemistry & Molecular Science",
    disciplineSlug: "chemistry-calculators",
    description: "Chemical stoichiometry and thermodynamics bridge submicroscopic atomic interactions to macroscopic masses and reaction enthalpies.",
    units: [
      {
        quantity: "Amount of Substance",
        unitName: "mole",
        symbol: "mol",
        baseUnitEquivalent: "mol",
        realWorldUse: "Chemical reaction balance, titration stoichiometry, and reagent preparation."
      },
      {
        quantity: "Molar Mass",
        unitName: "kilogram per mole (or g/mol)",
        symbol: "kg/mol (g/mol)",
        baseUnitEquivalent: "kg·mol⁻¹",
        realWorldUse: "Water has a molar mass of 0.018 015 kg/mol (18.015 g/mol); sodium chloride is 58.44 g/mol."
      },
      {
        quantity: "Amount Concentration (Molarity)",
        unitName: "mole per cubic metre (or mol/L)",
        symbol: "mol/m³ (mol/L)",
        baseUnitEquivalent: "mol·m⁻³",
        realWorldUse: "Standard chemical reagent solution concentrations (1 mol/L = 1 000 mol/m³)."
      },
      {
        quantity: "Molar Enthalpy",
        unitName: "joule per mole (or kJ/mol)",
        symbol: "J/mol",
        baseUnitEquivalent: "kg·m²·s⁻²·mol⁻¹",
        realWorldUse: "Standard heats of combustion, lattice energies, and chemical bond dissociation energies."
      },
      {
        quantity: "Catalytic Activity",
        unitName: "katal",
        symbol: "kat",
        baseUnitEquivalent: "mol·s⁻¹",
        realWorldUse: "Clinical enzyme assays (1 kat represents 1 mole of substrate converted per second)."
      }
    ]
  }
];

export interface WorkedConversionExample {
  title: string;
  scenario: string;
  startingValue: string;
  targetUnit: string;
  governingFormula: string;
  stepByStep: string[];
  finalResult: string;
  commonTrap: string;
}

export const WORKED_SI_EXAMPLES: WorkedConversionExample[] = [
  {
    title: "Example 1: Atmospheric Pressure (kPa to Pa and bar)",
    scenario: "Converting standard sea-level atmospheric pressure from kilopascals to base SI pascals and commercial bar.",
    startingValue: "101.325 kPa",
    targetUnit: "Pa and bar",
    governingFormula: "1\\text{ kPa} = 10^3\\text{ Pa}, \\quad 1\\text{ bar} = 10^5\\text{ Pa} = 100\\text{ kPa}",
    stepByStep: [
      "Step 1: Identify the SI prefix 'kilo-' which signifies multiplication by 10³ (1 000).",
      "Step 2: Multiply 101.325 by 1 000: 101.325 × 1 000 Pa = 101 325 Pa.",
      "Step 3: Convert to bar using 1 bar = 100 000 Pa: 101 325 / 100 000 = 1.01325 bar."
    ],
    finalResult: "101.325 kPa = 101 325 Pa = 1.01325 bar",
    commonTrap: "Never abbreviate pascal as 'pa' (lowercase p). The symbol must be capitalized 'Pa' because it honors Blaise Pascal."
  },
  {
    title: "Example 2: Vehicle Velocity (km/h to m/s)",
    scenario: "Converting a highway speed of 108 km/h into coherent base SI units (metres per second) for braking physics calculations.",
    startingValue: "108 km/h",
    targetUnit: "m/s",
    governingFormula: "v_{\\text{m/s}} = v_{\\text{km/h}} \\times \\frac{1\\,000\\text{ m}}{1\\text{ km}} \\times \\frac{1\\text{ h}}{3\\,600\\text{ s}} = \\frac{v_{\\text{km/h}}}{3.6}",
    stepByStep: [
      "Step 1: Write down the dimensional conversion ratio: 1 km = 1 000 m, and 1 hour = 3 600 s.",
      "Step 2: Combine the factors: (1 000 m) / (3 600 s) = 1 / 3.6.",
      "Step 3: Divide 108 by 3.6: 108 / 3.6 = 30 m/s exactly."
    ],
    finalResult: "108 km/h = 30 m/s",
    commonTrap: "Confusing whether to multiply or divide by 3.6. Since a second is much shorter than an hour, the number of metres travelled in one second is smaller than the number of kilometres in an hour."
  },
  {
    title: "Example 3: Density Conversion (g/cm³ to kg/m³)",
    scenario: "Converting the density of pure liquid water (1.000 g/cm³) into coherent SI base units (kg/m³) for fluid mechanics.",
    startingValue: "1.000 g/cm³",
    targetUnit: "kg/m³",
    governingFormula: "\\rho_{\\text{kg/m}^3} = \\rho_{\\text{g/cm}^3} \\times \\frac{1\\text{ kg}}{1\\,000\\text{ g}} \\times \\left(\\frac{100\\text{ cm}}{1\\text{ m}}\\right)^3 = \\rho_{\\text{g/cm}^3} \\times 1\\,000",
    stepByStep: [
      "Step 1: Convert mass from grams to kilograms: 1 g = 10⁻³ kg.",
      "Step 2: Convert volume from cm³ to m³: 1 cm = 10⁻² m, so 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³.",
      "Step 3: Combine the ratios: (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1 000 kg/m³.",
      "Step 4: Multiply 1.000 by 1 000: 1.000 × 1 000 = 1 000 kg/m³."
    ],
    finalResult: "1.000 g/cm³ = 1 000 kg/m³",
    commonTrap: "Assuming 1 m³ contains only 100 cm³. A cubic metre contains 100 × 100 × 100 = 1 000 000 cm³."
  },
  {
    title: "Example 4: Electrical Energy (Kilowatt-hour to Megajoules)",
    scenario: "Converting utility billing energy of 25 kWh into SI derived units (megajoules).",
    startingValue: "25 kWh",
    targetUnit: "MJ",
    governingFormula: "1\\text{ kWh} = (1\\,000\\text{ W}) \\times (3\\,600\\text{ s}) = 3\\,600\\,000\\text{ J} = 3.6\\text{ MJ}",
    stepByStep: [
      "Step 1: Expand 1 kilowatt to 1 000 watts = 1 000 J/s.",
      "Step 2: Expand 1 hour to 3 600 seconds.",
      "Step 3: Multiply: 1 000 J/s × 3 600 s = 3 600 000 J = 3.6 MJ.",
      "Step 4: Multiply 25 by 3.6 MJ: 25 × 3.6 = 90 MJ."
    ],
    finalResult: "25 kWh = 90 MJ (90 000 000 J)",
    commonTrap: "Writing 'kW/h' instead of 'kWh'. Energy is power multiplied by time (kW · h), never power divided by time."
  }
];

export interface SiMistake {
  id: string;
  errorTitle: string;
  badUsage: string;
  correctUsage: string;
  explanation: string;
  realWorldImpact: string;
}

export const COMMON_SI_MISTAKES: SiMistake[] = [
  {
    id: "kelvin-degree",
    errorTitle: "Writing '°K' Instead of 'K'",
    badUsage: "T = 293.15 °K or 293.15 deg K",
    correctUsage: "T = 293.15 K",
    explanation: "The kelvin is an absolute thermodynamic temperature scale with natural zero at absolute zero. The 13th CGPM in 1967 officially dropped the degree symbol.",
    realWorldImpact: "Immediate rejection in peer-reviewed scientific journals and automated academic grading systems."
  },
  {
    id: "case-capitalization",
    errorTitle: "Incorrect Prefix or Symbol Case (kW vs KW, mm vs Mm)",
    badUsage: "50 KW, 10 mm vs 10 Mm, 2 Kg",
    correctUsage: "50 kW, 10 mm (millimetres), 10 Mm (megametres), 2 kg",
    explanation: "Prefixes and symbols are case-sensitive: 'k' is kilo (10³), while 'K' is kelvin. 'm' is milli (10⁻³) or metre, while 'M' is mega (10⁶). 'KW' is completely meaningless in the SI.",
    realWorldImpact: "Confusion between 'mm' (millimetre = 10⁻³ m) and 'Mm' (megametre = 10⁶ m) is an error of 10⁹ (one billion)."
  },
  {
    id: "plural-s",
    errorTitle: "Adding 's' to Unit Symbols (kgs, sec, amp)",
    badUsage: "5 kgs, 10 secs, 15 amps",
    correctUsage: "5 kg, 10 s, 15 A (or write out '5 kilograms, 10 seconds, 15 amperes')",
    explanation: "Unit symbols are mathematical operators, not linguistic abbreviations. Adding 's' can alter the meaning: '10 ms' denotes 10 milliseconds, not 10 metres.",
    realWorldImpact: "Software parsing errors in automated engineering scripts and data ingestion pipelines."
  },
  {
    id: "missing-space",
    errorTitle: "Omitting the Required Space Between Number and Symbol",
    badUsage: "100m, 25kg, 37°C",
    correctUsage: "100 m, 25 kg, 37 °C (exception: angular 45°)",
    explanation: "NIST and BIPM standards mandate a space between the numerical value and the unit symbol, treating them as an algebraic product (100 times 1 metre).",
    realWorldImpact: "OCR and screen reader failures for visually impaired users; regex parsing bugs."
  },
  {
    id: "mass-vs-weight",
    errorTitle: "Confusing Mass (kg) with Weight or Force (N)",
    badUsage: "Weight = 70 kg",
    correctUsage: "Mass = 70 kg; Weight = 70 kg × 9.80665 m/s² ≈ 686.5 N",
    explanation: "Mass is an invariant intrinsic quantity of matter in kilograms. Weight is the gravitational force acting on that mass, measured in newtons (N = kg·m/s²).",
    realWorldImpact: "Catastrophic structural and aerospace sizing errors when calculating thrust-to-weight ratios or orbital trajectories."
  },
  {
    id: "compound-prefixes",
    errorTitle: "Using Double or Compound Prefixes",
    badUsage: "1 mµm, 1 µµF, 1 kkg",
    correctUsage: "1 nm (nanometre), 1 pF (picofarad), 1 Mg or 1 t (megagram/tonne)",
    explanation: "BIPM explicitly forbids combining two prefixes. Always use the single standard prefix that represents the combined exponent.",
    realWorldImpact: "Obsolete notation from early 20th-century radio engineering that causes misinterpretation of schematic component values."
  }
];

export interface SiFaqItem {
  question: string;
  answer: string;
}

export const SI_FAQS: SiFaqItem[] = [
  {
    question: "What are the seven base units of the International System of Units (SI)?",
    answer: "The seven SI base units are: the second (s) for time, the metre (m) for length, the kilogram (kg) for mass, the ampere (A) for electric current, the kelvin (K) for thermodynamic temperature, the mole (mol) for amount of substance, and the candela (cd) for luminous intensity. All other physical quantities in science and engineering are derived as mathematical combinations of these seven fundamental units."
  },
  {
    question: "Why were the SI units redefined in 2019?",
    answer: "On May 20, 2019 (World Metrology Day), the BIPM enacted a historic revision that redefined all seven SI base units in terms of fixed, invariant fundamental constants of nature (such as the Planck constant, speed of light, elementary charge, and Boltzmann constant). This completely eliminated reliance on human-made physical artifacts—such as the platinum-iridium International Prototype of the Kilogram—ensuring that measurement standards remain perfectly stable across time and throughout the universe."
  },
  {
    question: "Why is the kelvin written as 'K' without a degree symbol?",
    answer: "The kelvin is the SI unit of thermodynamic temperature and is an absolute unit starting at absolute zero (0 K). The 13th General Conference on Weights and Measures (CGPM) in 1967 officially abolished the degree symbol ('°K') and the name 'degree Kelvin'. In contrast, the Celsius scale uses the degree symbol (°C) because it is an offset relative scale where 0 °C corresponds to the freezing point of water (273.15 K)."
  },
  {
    question: "Are SI unit symbols case-sensitive?",
    answer: "Yes, SI unit symbols are strictly case-sensitive. Symbols derived from proper names of scientists are capitalized (W for James Watt, N for Isaac Newton, Pa for Blaise Pascal, J for James Prescott Joule, V for Alessandro Volta), whereas other units are lowercase (m for metre, s for second, kg for kilogram). Furthermore, metric prefixes are case-dependent: lowercase 'm' means milli (10⁻³), whereas uppercase 'M' means mega (10⁶). Lowercase 'k' means kilo (10³), whereas uppercase 'K' represents kelvin."
  },
  {
    question: "What are the newest SI prefixes added in 2022?",
    answer: "In November 2022, the 27th CGPM adopted four new prefixes to meet the growing needs of data science and astronomy: quetta (Q, 10³⁰) and ronna (R, 10²⁷) for extremely large quantities, and ronto (r, 10⁻²⁷) and quecto (q, 10⁻³⁰) for subatomic measurements. For example, Earth's mass is roughly 6 ronnagrams (Rg), and an electron's mass is approximately 0.911 rontograms (rg)."
  },
  {
    question: "What is the difference between an SI base unit and a derived unit?",
    answer: "An SI base unit is one of seven mutually independent units chosen by international convention as the foundation of the measurement system. A derived unit is formed algebraically by combining base units through multiplication and division according to physical laws. For example, velocity is length divided by time (m/s), force is mass times acceleration (N = kg·m/s²), and pressure is force divided by area (Pa = N/m² = kg/(m·s²))."
  },
  {
    question: "Is the litre (or liter) an official SI unit?",
    answer: "The litre (symbol L or l) is not an SI base unit or a coherent derived unit; the coherent SI unit for volume is the cubic metre (m³). However, the litre (1 L = 1 dm³ = 0.001 m³) is formally classified by BIPM as a non-SI unit accepted for use with the SI due to its universal practical importance in trade, medicine, chemistry, and daily life."
  },
  {
    question: "Why should there always be a space between the number and the unit symbol?",
    answer: "International metrology standards (ISO 80000, BIPM SI Brochure, and NIST SP 811) state that a number and its unit represent an algebraic product (e.g., 25 kg means 25 multiplied by 1 kg). Therefore, a non-breaking space is mandatory (e.g., '25 kg', '100 m', '20 °C'). The only exception is for plane angle superscripts (such as 45°, 30', 15''), which attach directly to the number."
  },
  {
    question: "Why is the kilogram the only SI base unit that has a prefix?",
    answer: "For historical reasons dating back to the late 18th-century French metric system, the gram was originally defined as the mass of one cubic centimetre of water. Because a gram was too small for practical trade and commerce, a one-kilogram artifact was cast. When the modern SI was established in 1960, the kilogram was retained as the base unit for coherence with mechanical units like the newton and joule. However, prefixes are always attached to the root word 'gram' (e.g., milligram, microgram, gigagram), never to 'kilogram' (no 'microkilograms')."
  },
  {
    question: "What is the difference between mass and weight in the SI?",
    answer: "In the SI, mass is an intrinsic, invariant property of matter measured in kilograms (kg). Weight is a gravitational force exerted on that mass by a celestial body, measured in newtons (N = kg·m/s²). An astronaut with a mass of 70 kg on Earth still has a mass of 70 kg on the Moon, but their weight decreases from approximately 686 N on Earth to roughly 113 N on the Moon due to lunar gravity."
  }
];

export interface AuthoritativeReference {
  title: string;
  organization: string;
  description: string;
  url: string;
  citation: string;
}

export const SI_AUTHORITATIVE_REFERENCES: AuthoritativeReference[] = [
  {
    title: "The International System of Units (SI Brochure, 9th Edition)",
    organization: "Bureau International des Poids et Mesures (BIPM)",
    description: "The definitive global authority on the SI, defining base units, derived units, prefixes, and rules of notation.",
    url: "https://www.bipm.org/en/publications/si-brochure",
    citation: "BIPM (2019; updated 2022). Le Système international d'unités (SI), 9th English edition."
  },
  {
    title: "BIPM Resolution 3 of the 27th CGPM (2022): On the Extension of the Range of SI Prefixes",
    organization: "General Conference on Weights and Measures (CGPM)",
    description: "Official resolution introducing quetta (10³⁰), ronna (10²⁷), ronto (10⁻²⁷), and quecto (10⁻³⁰).",
    url: "https://www.bipm.org/en/committees/cg/cgpm/27-2022/resolution-3",
    citation: "27th CGPM Resolutions, BIPM, Versailles, November 2022."
  },
  {
    title: "Guide for the Use of the International System of Units (NIST SP 811)",
    organization: "National Institute of Standards and Technology (NIST)",
    description: "Comprehensive US guidance on SI unit conventions, capitalization, typography, and conversion factors.",
    url: "https://www.nist.gov/pml/special-publication-811",
    citation: "Thompson, A. and Taylor, B. N. (2008). NIST Special Publication 811, 2008 Edition."
  },
  {
    title: "The International System of Units (SI) (NIST SP 330)",
    organization: "National Institute of Standards and Technology (NIST)",
    description: "The official English translation and US interpretation of the BIPM SI Brochure.",
    url: "https://www.nist.gov/pml/special-publication-330",
    citation: "NIST Special Publication 330 (2019 Edition), US Department of Commerce."
  },
  {
    title: "ISO/IEC 80000: Quantities and Units (Parts 1–14)",
    organization: "International Organization for Standardization (ISO) / IEC",
    description: "International standard defining mathematical signs, symbols, coherent units, and dimensional analysis across science and industry.",
    url: "https://www.iso.org/standard/30669.html",
    citation: "ISO/IEC 80000 series (2019–2022). Quantities and units."
  },
  {
    title: "CODATA Recommended Values of the Fundamental Physical Constants",
    organization: "Committee on Data for Science and Technology (CODATA)",
    description: "Internationally agreed values of fundamental physical constants underpinning the 2019 SI redefinition.",
    url: "https://physics.nist.gov/cuu/Constants/",
    citation: "Tiesinga, E., Mohr, P. J., Newell, D. B., and Taylor, B. N. (2021). Reviews of Modern Physics, 93(2)."
  }
];

export interface InternalToolLink {
  name: string;
  route: string;
  category: string;
  description: string;
}

export const SI_INTERNAL_LINKS: InternalToolLink[] = [
  {
    name: "Unit Conversion Reference",
    route: "/resources/unit-conversion-reference",
    category: "Reference Guide",
    description: "Comprehensive conversion factors across 14 measurement domains, imperial units, and dimensional formulas."
  },
  {
    name: "Length Converter",
    route: "/length-conversion",
    category: "SI Base: Metre",
    description: "Convert metres, kilometres, millimetres, feet, inches, miles, and astronomical units."
  },
  {
    name: "Mass & Weight Converter",
    route: "/weight-conversion",
    category: "SI Base: Kilogram",
    description: "Convert kilograms, grams, milligrams, metric tonnes, pounds, ounces, and atomic mass units."
  },
  {
    name: "Temperature Converter",
    route: "/temperature-conversion",
    category: "SI Base: Kelvin",
    description: "Convert thermodynamic kelvins, degrees Celsius, Fahrenheit, and Rankine with step-by-step shifts."
  },
  {
    name: "Pressure Converter",
    route: "/pressure-conversion",
    category: "SI Derived: Pascal",
    description: "Convert pascals, kilopascals, megapascals, bar, psi, torr, and standard atmospheres."
  },
  {
    name: "Energy Converter",
    route: "/energy-conversion",
    category: "SI Derived: Joule",
    description: "Convert joules, kilojoules, kilowatt-hours, calories, electronvolts, and British thermal units."
  },
  {
    name: "Power Converter",
    route: "/power-conversion",
    category: "SI Derived: Watt",
    description: "Convert watts, kilowatts, megawatts, metric horsepower, mechanical horsepower, and BTU/hr."
  },
  {
    name: "Electric Resistance Converter",
    route: "/electric-resistance-conversion",
    category: "SI Derived: Ohm",
    description: "Convert ohms, kilohms, megohms, and microohms with precision impedance analysis."
  },
  {
    name: "Capacitance Converter",
    route: "/capacitance-conversion",
    category: "SI Derived: Farad",
    description: "Convert farads, millifarads, microfarads, nanofarads, and picofarads."
  },
  {
    name: "Inductance Converter",
    route: "/inductance-conversion",
    category: "SI Derived: Henry",
    description: "Convert henrys, millihenrys, microhenrys, and nanohenrys."
  },
  {
    name: "Electric Charge Converter",
    route: "/electric-charge-conversion",
    category: "SI Derived: Coulomb",
    description: "Convert coulombs, ampere-hours, milliampere-hours, and faradays."
  },
  {
    name: "Radioactivity Converter",
    route: "/radioactivity-conversion",
    category: "SI Derived: Becquerel",
    description: "Convert becquerels, kilobecquerels, curies, millicuries, and rutherfords."
  },
  {
    name: "Electrical Calculators Hub",
    route: "/calculators/electrical-calculators",
    category: "Engineering Calculator",
    description: "Ohm's law, voltage drop, power factor, capacitor reactance, and AC circuit calculations."
  },
  {
    name: "Mechanical Calculators Hub",
    route: "/calculators/mechanical-calculators",
    category: "Engineering Calculator",
    description: "Torque, horsepower, thermal stress, beam deflection, and Reynolds number calculations."
  },
  {
    name: "Physics Calculators Hub",
    route: "/calculators/physics-calculators",
    category: "Engineering Calculator",
    description: "Kinematics, gravitational acceleration, momentum, orbital velocity, and wave optics."
  },
  {
    name: "Engineering Calculators Hub",
    route: "/calculators",
    category: "Engineering Directory",
    description: "Access our centralized library of 75+ professional engineering and scientific calculators."
  }
];
