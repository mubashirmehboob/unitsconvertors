/**
 * Authoritative Unit Conversion Reference Data
 * Grounded in BIPM SI Brochure (9th Edition), NIST SP 811, NIST SP 330, and ISO/IEC 80000.
 */

export interface ReferenceSection {
  id: string;
  title: string;
  shortTitle?: string;
  category?: string;
}

export const REFERENCE_SECTIONS: ReferenceSection[] = [
  { id: "introduction", title: "1. Introduction", shortTitle: "Introduction" },
  { id: "what-is-unit-conversion", title: "2. What Is Unit Conversion?", shortTitle: "Concept" },
  { id: "si-units", title: "3. International System of Units (SI)", shortTitle: "SI Units" },
  { id: "si-prefixes", title: "4. SI Prefixes (Quetta to Quecto)", shortTitle: "SI Prefixes" },
  { id: "length-conversion", title: "5. Length Conversion Factors", shortTitle: "Length" },
  { id: "area-conversion", title: "6. Area Conversion Factors", shortTitle: "Area" },
  { id: "volume-conversion", title: "7. Volume & Capacity Conversion Factors", shortTitle: "Volume" },
  { id: "mass-conversion", title: "8. Mass & Weight Conversion Factors", shortTitle: "Mass" },
  { id: "time-conversion", title: "9. Time Conversion Factors", shortTitle: "Time" },
  { id: "temperature-conversion", title: "10. Temperature Conversion Formulas", shortTitle: "Temperature" },
  { id: "speed-conversion", title: "11. Speed & Velocity Conversion Factors", shortTitle: "Speed" },
  { id: "acceleration-conversion", title: "12. Acceleration Conversion Factors", shortTitle: "Acceleration" },
  { id: "force-conversion", title: "13. Force Conversion Factors", shortTitle: "Force" },
  { id: "pressure-conversion", title: "14. Pressure Conversion Factors", shortTitle: "Pressure" },
  { id: "energy-conversion", title: "15. Energy & Work Conversion Factors", shortTitle: "Energy" },
  { id: "power-conversion", title: "16. Power Conversion Factors", shortTitle: "Power" },
  { id: "torque-conversion", title: "17. Torque Conversion Factors", shortTitle: "Torque" },
  { id: "frequency-conversion", title: "18. Frequency & Rotational Speed Conversion", shortTitle: "Frequency" },
  { id: "electrical-conversion", title: "19. Electrical Units Conversion", shortTitle: "Electrical" },
  { id: "radioactivity-conversion", title: "20. Radioactivity & Radiation Units", shortTitle: "Radioactivity" },
  { id: "metric-to-imperial", title: "21. Metric to Imperial & US Customary Reference", shortTitle: "Metric vs Imperial" },
  { id: "exact-vs-approximate", title: "22. Exact vs. Approximate Conversion Factors", shortTitle: "Exact vs Approx" },
  { id: "how-conversion-works", title: "23. How Conversion Factors Work", shortTitle: "Dimensional Analysis" },
  { id: "formula-examples", title: "24. Step-by-Step Conversion Formula Examples", shortTitle: "Worked Examples" },
  { id: "square-cubic-conversions", title: "25. Square & Cubic Unit Conversions", shortTitle: "Square & Cubic" },
  { id: "sig-figs-rounding", title: "26. Significant Figures & Rounding Precision", shortTitle: "Sig Figs & Rounding" },
  { id: "common-mistakes", title: "27. Common Unit Conversion Mistakes to Avoid", shortTitle: "Common Mistakes" },
  { id: "conversion-tools", title: "28. UnitsConvertors Interactive Tools Directory", shortTitle: "Tools Directory" },
  { id: "faq", title: "29. Frequently Asked Questions", shortTitle: "FAQs" },
  { id: "references", title: "30. Authoritative References & Standards", shortTitle: "References" },
];

export interface SiBaseUnit {
  quantity: string;
  name: string;
  symbol: string;
  definingConstant: string;
  definingValue: string;
  definitionSummary: string;
}

export const SI_BASE_UNITS: SiBaseUnit[] = [
  {
    quantity: "Time",
    name: "second",
    symbol: "s",
    definingConstant: "Hyperfine transition frequency of caesium-133 (Δν_Cs)",
    definingValue: "9 192 631 770 Hz",
    definitionSummary: "The duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the unperturbed caesium-133 atom."
  },
  {
    quantity: "Length",
    name: "meter",
    symbol: "m",
    definingConstant: "Speed of light in vacuum (c)",
    definingValue: "299 792 458 m/s",
    definitionSummary: "The distance travelled by light in vacuum in 1/299 792 458 of a second."
  },
  {
    quantity: "Mass",
    name: "kilogram",
    symbol: "kg",
    definingConstant: "Planck constant (h)",
    definingValue: "6.626 070 15 × 10⁻³⁴ J s (kg m² s⁻¹)",
    definitionSummary: "Defined by fixing the numerical value of the Planck constant h, tying mass directly to the quantum of action via Kibble balances and silicon sphere interferometry."
  },
  {
    quantity: "Electric current",
    name: "ampere",
    symbol: "A",
    definingConstant: "Elementary charge (e)",
    definingValue: "1.602 176 634 × 10⁻¹⁹ C (A s)",
    definitionSummary: "Defined by fixing the numerical value of the elementary charge e to exactly 1.602 176 634 × 10⁻¹⁹ coulombs, representing a flow of exactly 1/(1.602176634 × 10⁻¹⁹) electrons per second."
  },
  {
    quantity: "Thermodynamic temperature",
    name: "kelvin",
    symbol: "K",
    definingConstant: "Boltzmann constant (k)",
    definingValue: "1.380 649 × 10⁻²³ J/K (kg m² s⁻² K⁻¹)",
    definitionSummary: "Defined by fixing the numerical value of the Boltzmann constant k, relating macroscopic thermodynamic temperature directly to average microscopic thermal energy."
  },
  {
    quantity: "Amount of substance",
    name: "mole",
    symbol: "mol",
    definingConstant: "Avogadro constant (N_A)",
    definingValue: "6.022 140 76 × 10²³ mol⁻¹",
    definitionSummary: "One mole contains exactly 6.022 140 76 × 10²³ elementary entities (atoms, molecules, ions, electrons, or specified groups of particles)."
  },
  {
    quantity: "Luminous intensity",
    name: "candela",
    symbol: "cd",
    definingConstant: "Luminous efficacy of monochromatic radiation (K_cd)",
    definingValue: "683 lm/W at 540 × 10¹² Hz",
    definitionSummary: "The luminous intensity, in a given direction, of a source emitting monochromatic radiation of frequency 540 × 10¹² hertz with a radiant intensity of 1/683 watt per steradian."
  }
];

export interface SiDerivedUnit {
  quantity: string;
  name: string;
  symbol: string;
  inOtherUnits: string;
  inBaseUnits: string;
}

export const SI_DERIVED_UNITS: SiDerivedUnit[] = [
  { quantity: "Plane angle", name: "radian", symbol: "rad", inOtherUnits: "m/m", inBaseUnits: "1 (dimensionless)" },
  { quantity: "Solid angle", name: "steradian", symbol: "sr", inOtherUnits: "m²/m²", inBaseUnits: "1 (dimensionless)" },
  { quantity: "Frequency", name: "hertz", symbol: "Hz", inOtherUnits: "1/s", inBaseUnits: "s⁻¹" },
  { quantity: "Force", name: "newton", symbol: "N", inOtherUnits: "—", inBaseUnits: "kg m s⁻²" },
  { quantity: "Pressure, stress", name: "pascal", symbol: "Pa", inOtherUnits: "N/m²", inBaseUnits: "kg m⁻¹ s⁻²" },
  { quantity: "Energy, work, heat", name: "joule", symbol: "J", inOtherUnits: "N m", inBaseUnits: "kg m² s⁻²" },
  { quantity: "Power, radiant flux", name: "watt", symbol: "W", inOtherUnits: "J/s", inBaseUnits: "kg m² s⁻³" },
  { quantity: "Electric charge", name: "coulomb", symbol: "C", inOtherUnits: "—", inBaseUnits: "A s" },
  { quantity: "Electric potential, electromotive force", name: "volt", symbol: "V", inOtherUnits: "W/A, J/C", inBaseUnits: "kg m² s⁻³ A⁻¹" },
  { quantity: "Capacitance", name: "farad", symbol: "F", inOtherUnits: "C/V", inBaseUnits: "kg⁻¹ m⁻² s⁴ A²" },
  { quantity: "Electric resistance", name: "ohm", symbol: "Ω", inOtherUnits: "V/A", inBaseUnits: "kg m² s⁻³ A⁻²" },
  { quantity: "Electric conductance", name: "siemens", symbol: "S", inOtherUnits: "A/V, 1/Ω", inBaseUnits: "kg⁻¹ m⁻² s³ A²" },
  { quantity: "Magnetic flux", name: "weber", symbol: "Wb", inOtherUnits: "V s, J/A", inBaseUnits: "kg m² s⁻² A⁻¹" },
  { quantity: "Magnetic flux density", name: "tesla", symbol: "T", inOtherUnits: "Wb/m², N/(A m)", inBaseUnits: "kg s⁻² A⁻¹" },
  { quantity: "Inductance", name: "henry", symbol: "H", inOtherUnits: "Wb/A", inBaseUnits: "kg m² s⁻² A⁻²" },
  { quantity: "Celsius temperature", name: "degree Celsius", symbol: "°C", inOtherUnits: "—", inBaseUnits: "K (interval)" },
  { quantity: "Luminous flux", name: "lumen", symbol: "lm", inOtherUnits: "cd sr", inBaseUnits: "cd sr" },
  { quantity: "Illuminance", name: "lux", symbol: "lx", inOtherUnits: "lm/m²", inBaseUnits: "cd sr m⁻²" },
  { quantity: "Activity of a radionuclide", name: "becquerel", symbol: "Bq", inOtherUnits: "1/s", inBaseUnits: "s⁻¹" },
  { quantity: "Absorbed dose, kerma", name: "gray", symbol: "Gy", inOtherUnits: "J/kg", inBaseUnits: "m² s⁻²" },
  { quantity: "Dose equivalent", name: "sievert", symbol: "Sv", inOtherUnits: "J/kg", inBaseUnits: "m² s⁻²" },
  { quantity: "Catalytic activity", name: "katal", symbol: "kat", inOtherUnits: "mol/s", inBaseUnits: "mol s⁻¹" }
];

export interface SiPrefix {
  prefix: string;
  symbol: string;
  factorExponent: number;
  multiplier: string;
  words: string;
  example: string;
}

export const SI_PREFIXES: SiPrefix[] = [
  { prefix: "quetta", symbol: "Q", factorExponent: 30, multiplier: "10³⁰", words: "Nonillion", example: "Mass of Earth ~ 5.972 Qg (quetragrams)" },
  { prefix: "ronna", symbol: "R", factorExponent: 27, multiplier: "10²⁷", words: "Octillion", example: "Mass of Jupiter ~ 1.898 Rg" },
  { prefix: "yotta", symbol: "Y", factorExponent: 24, multiplier: "10²⁴", words: "Septillion", example: "Total energy output of the Sun in a few weeks" },
  { prefix: "zetta", symbol: "Z", factorExponent: 21, multiplier: "10²¹", words: "Sextillion", example: "Volume of Earth's oceans ~ 1.35 ZL" },
  { prefix: "exa", symbol: "E", factorExponent: 18, multiplier: "10¹⁸", words: "Quintillion", example: "Exabyte (EB) scale data centers" },
  { prefix: "peta", symbol: "P", factorExponent: 15, multiplier: "10¹⁵", words: "Quadrillion", example: "Petawatt laser pulses; 1 light-year ~ 9.46 Pm" },
  { prefix: "tera", symbol: "T", factorExponent: 12, multiplier: "10¹²", words: "Trillion", example: "Terabyte (TB) SSD hard drives; 1 Tm ~ 6.7 AU" },
  { prefix: "giga", symbol: "G", factorExponent: 9, multiplier: "10⁹", words: "Billion", example: "Gigahertz (GHz) processor clocks; 1 GW power plant" },
  { prefix: "mega", symbol: "M", factorExponent: 6, multiplier: "10⁶", words: "Million", example: "Megawatt (MW) wind turbines; 1 MPa pressure" },
  { prefix: "kilo", symbol: "k", factorExponent: 3, multiplier: "10³", words: "Thousand", example: "Kilogram (kg); kilometer (km = 1000 m)" },
  { prefix: "hecto", symbol: "h", factorExponent: 2, multiplier: "10²", words: "Hundred", example: "Hectopascal (hPa) barometric pressure" },
  { prefix: "deca", symbol: "da", factorExponent: 1, multiplier: "10¹", words: "Ten", example: "Decaliter (dal) liquid measure" },
  { prefix: "deci", symbol: "d", factorExponent: -1, multiplier: "10⁻¹", words: "Tenth", example: "Deciliter (dL) blood test volumes" },
  { prefix: "centi", symbol: "c", factorExponent: -2, multiplier: "10⁻²", words: "Hundredth", example: "Centimeter (cm = 0.01 m)" },
  { prefix: "milli", symbol: "m", factorExponent: -3, multiplier: "10⁻³", words: "Thousandth", example: "Milligram (mg); millimeter (mm)" },
  { prefix: "micro", symbol: "µ", factorExponent: -6, multiplier: "10⁻⁶", words: "Millionth", example: "Micrometer (µm, cell biology); microsecond (µs)" },
  { prefix: "nano", symbol: "n", factorExponent: -9, multiplier: "10⁻⁹", words: "Billionth", example: "Nanometer (nm, semiconductor node sizes)" },
  { prefix: "pico", symbol: "p", factorExponent: -12, multiplier: "10⁻¹²", words: "Trillionth", example: "Picofarad (pF) capacitor values" },
  { prefix: "femto", symbol: "f", factorExponent: -15, multiplier: "10⁻¹⁵", words: "Quadrillionth", example: "Femtometer (fm, atomic nucleus radius ~ 1.7 fm)" },
  { prefix: "atto", symbol: "a", factorExponent: -18, multiplier: "10⁻¹⁸", words: "Quintillionth", example: "Attosecond laser physics" },
  { prefix: "zepto", symbol: "z", factorExponent: -21, multiplier: "10⁻²¹", words: "Sextillionth", example: "Charge of 6 electrons ~ 0.96 zC" },
  { prefix: "yocto", symbol: "y", factorExponent: -24, multiplier: "10⁻²⁴", words: "Septillionth", example: "Rest mass of a proton ~ 1.67 yg" },
  { prefix: "ronto", symbol: "r", factorExponent: -27, multiplier: "10⁻²⁷", words: "Octillionth", example: "Mass of one electron ~ 0.911 rg" },
  { prefix: "quecto", symbol: "q", factorExponent: -30, multiplier: "10⁻³⁰", words: "Nonillionth", example: "Energy of one radio photon ~ quectojoules" }
];

export interface ConversionFactorRow {
  fromUnit: string;
  fromSymbol: string;
  toUnit: string;
  toSymbol: string;
  factor: string;
  exact: boolean;
  notes: string;
}

export const LENGTH_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Inch", fromSymbol: "in", toUnit: "Millimeter", toSymbol: "mm", factor: "25.4", exact: true, notes: "Defined exactly by the 1959 International Yard and Pound Agreement" },
  { fromUnit: "Inch", fromSymbol: "in", toUnit: "Meter", toSymbol: "m", factor: "0.0254", exact: true, notes: "Exact conversion factor" },
  { fromUnit: "Foot", fromSymbol: "ft", toUnit: "Meter", toSymbol: "m", factor: "0.3048", exact: true, notes: "12 inches = 0.3048 m exactly" },
  { fromUnit: "Yard", fromSymbol: "yd", toUnit: "Meter", toSymbol: "m", factor: "0.9144", exact: true, notes: "3 feet = 0.9144 m exactly" },
  { fromUnit: "Statute Mile", fromSymbol: "mi", toUnit: "Kilometer", toSymbol: "km", factor: "1.609344", exact: true, notes: "5,280 ft = 1,609.344 m exactly" },
  { fromUnit: "Nautical Mile", fromSymbol: "NM (nmi)", toUnit: "Meter", toSymbol: "m", factor: "1852", exact: true, notes: "Defined exactly by the First International Extraordinary Hydrographic Conference (1929)" },
  { fromUnit: "Nautical Mile", fromSymbol: "NM", toUnit: "Statute Mile", toSymbol: "mi", factor: "1.150779", exact: false, notes: "1852 / 1609.344 ≈ 1.150779448 mi" },
  { fromUnit: "Rod (Pole, Perch)", fromSymbol: "rd", toUnit: "Meter", toSymbol: "m", factor: "5.0292", exact: true, notes: "16.5 ft = 5.0292 m exactly" },
  { fromUnit: "Chain (Gunter's)", fromSymbol: "ch", toUnit: "Meter", toSymbol: "m", factor: "20.1168", exact: true, notes: "66 ft = 4 rods = 20.1168 m exactly" },
  { fromUnit: "Furlong", fromSymbol: "fur", toUnit: "Meter", toSymbol: "m", factor: "201.168", exact: true, notes: "660 ft = 10 chains = 1/8 mile exactly" },
  { fromUnit: "Mil (thou)", fromSymbol: "mil", toUnit: "Micrometer", toSymbol: "µm", factor: "25.4", exact: true, notes: "0.001 in = 25.4 µm exactly" },
  { fromUnit: "Astronomical Unit", fromSymbol: "au", toUnit: "Meter", toSymbol: "m", factor: "149597870700", exact: true, notes: "Defined exactly by the International Astronomical Union (IAU 2012)" },
  { fromUnit: "Light-Year", fromSymbol: "ly", toUnit: "Meter", toSymbol: "m", factor: "9.4607304725808 × 10¹⁵", exact: true, notes: "Distance light travels in 365.25 Julian days in vacuum" }
];

export const AREA_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Square Inch", fromSymbol: "sq in", toUnit: "Square Centimeter", toSymbol: "cm²", factor: "6.4516", exact: true, notes: "(2.54 cm)² = 6.4516 cm² exactly" },
  { fromUnit: "Square Foot", fromSymbol: "sq ft", toUnit: "Square Meter", toSymbol: "m²", factor: "0.09290304", exact: true, notes: "(0.3048 m)² = 0.09290304 m² exactly" },
  { fromUnit: "Square Yard", fromSymbol: "sq yd", toUnit: "Square Meter", toSymbol: "m²", factor: "0.83612736", exact: true, notes: "(0.9144 m)² = 0.83612736 m² exactly" },
  { fromUnit: "Acre", fromSymbol: "ac", toUnit: "Square Meter", toSymbol: "m²", factor: "4046.8564224", exact: true, notes: "43,560 sq ft = 4,046.8564224 m² exactly" },
  { fromUnit: "Acre", fromSymbol: "ac", toUnit: "Hectare", toSymbol: "ha", factor: "0.40468564224", exact: true, notes: "1 acre ≈ 0.4047 hectares" },
  { fromUnit: "Hectare", fromSymbol: "ha", toUnit: "Square Meter", toSymbol: "m²", factor: "10000", exact: true, notes: "100 m × 100 m = 10,000 m² exactly" },
  { fromUnit: "Square Mile", fromSymbol: "sq mi", toUnit: "Square Kilometer", toSymbol: "km²", factor: "2.589988110336", exact: true, notes: "640 acres = 2.589988110336 km² exactly" },
  { fromUnit: "Square Kilometer", fromSymbol: "km²", toUnit: "Hectare", toSymbol: "ha", factor: "100", exact: true, notes: "1 km² = 1,000,000 m² = 100 ha exactly" }
];

export const VOLUME_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Liter", fromSymbol: "L", toUnit: "Cubic Decimeter", toSymbol: "dm³", factor: "1", exact: true, notes: "1 L = 1 dm³ = 0.001 m³ exactly (1964 CGPM)" },
  { fromUnit: "Milliliter", fromSymbol: "mL", toUnit: "Cubic Centimeter", toSymbol: "cm³ (cc)", factor: "1", exact: true, notes: "1 mL = 1 cm³ exactly" },
  { fromUnit: "Cubic Meter", fromSymbol: "m³", toUnit: "Liter", toSymbol: "L", factor: "1000", exact: true, notes: "1 m³ = 1000 L exactly" },
  { fromUnit: "Cubic Foot", fromSymbol: "cu ft", toUnit: "Liter", toSymbol: "L", factor: "28.316846592", exact: true, notes: "(0.3048 m)³ × 1000 = 28.316846592 L exactly" },
  { fromUnit: "Cubic Foot", fromSymbol: "cu ft", toUnit: "Cubic Meter", toSymbol: "m³", factor: "0.028316846592", exact: true, notes: "Exact conversion factor" },
  { fromUnit: "Cubic Inch", fromSymbol: "cu in", toUnit: "Cubic Centimeter", toSymbol: "cm³", factor: "16.387064", exact: true, notes: "(2.54 cm)³ = 16.387064 cm³ exactly" },
  { fromUnit: "US Liquid Gallon", fromSymbol: "gal (US)", toUnit: "Liter", toSymbol: "L", factor: "3.785411784", exact: true, notes: "231 cu in = 3.785411784 L exactly" },
  { fromUnit: "Imperial (UK) Gallon", fromSymbol: "gal (imp)", toUnit: "Liter", toSymbol: "L", factor: "4.54609", exact: true, notes: "Defined exactly by UK Weights and Measures Act 1985" },
  { fromUnit: "US Liquid Quart", fromSymbol: "qt (US)", toUnit: "Liter", toSymbol: "L", factor: "0.946352946", exact: true, notes: "1/4 US gal = 0.946352946 L exactly" },
  { fromUnit: "US Liquid Pint", fromSymbol: "pt (US)", toUnit: "Liter", toSymbol: "L", factor: "0.473176473", exact: true, notes: "1/8 US gal = 0.473176473 L exactly" },
  { fromUnit: "US Fluid Ounce", fromSymbol: "fl oz (US)", toUnit: "Milliliter", toSymbol: "mL", factor: "29.5735295625", exact: true, notes: "1/128 US gal = 29.5735295625 mL exactly" },
  { fromUnit: "Imperial Fluid Ounce", fromSymbol: "fl oz (imp)", toUnit: "Milliliter", toSymbol: "mL", factor: "28.4130625", exact: true, notes: "1/160 Imp gal = 28.4130625 mL exactly" },
  { fromUnit: "US Cup (Traditional)", fromSymbol: "cup", toUnit: "Milliliter", toSymbol: "mL", factor: "236.5882365", exact: true, notes: "8 US fl oz = 236.5882365 mL (FDA nutrition uses 240 mL)" },
  { fromUnit: "Oil Barrel", fromSymbol: "bbl", toUnit: "Liter", toSymbol: "L", factor: "158.987294928", exact: true, notes: "42 US gallons = 158.987294928 L exactly" }
];

export const MASS_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Pound (Avoirdupois)", fromSymbol: "lb", toUnit: "Kilogram", toSymbol: "kg", factor: "0.45359237", exact: true, notes: "Defined exactly by 1959 International Yard and Pound Agreement" },
  { fromUnit: "Pound (Avoirdupois)", fromSymbol: "lb", toUnit: "Gram", toSymbol: "g", factor: "453.59237", exact: true, notes: "Exact metric mass value" },
  { fromUnit: "Ounce (Avoirdupois)", fromSymbol: "oz", toUnit: "Gram", toSymbol: "g", factor: "28.349523125", exact: true, notes: "1/16 lb = 28.349523125 g exactly" },
  { fromUnit: "Stone", fromSymbol: "st", toUnit: "Kilogram", toSymbol: "kg", factor: "6.35029318", exact: true, notes: "14 lb = 6.35029318 kg exactly" },
  { fromUnit: "Metric Ton (Tonne)", fromSymbol: "t", toUnit: "Kilogram", toSymbol: "kg", factor: "1000", exact: true, notes: "Megagram = 1000 kg exactly" },
  { fromUnit: "Short Ton (US)", fromSymbol: "ton (US)", toUnit: "Kilogram", toSymbol: "kg", factor: "907.18474", exact: true, notes: "2,000 lb = 907.18474 kg exactly" },
  { fromUnit: "Long Ton (Imperial)", fromSymbol: "ton (UK)", toUnit: "Kilogram", toSymbol: "kg", factor: "1016.0469088", exact: true, notes: "2,240 lb = 1,016.0469088 kg exactly" },
  { fromUnit: "Troy Ounce", fromSymbol: "oz t", toUnit: "Gram", toSymbol: "g", factor: "31.1034768", exact: true, notes: "Precious metals standard; 480 grains exactly" },
  { fromUnit: "Carat (Metric)", fromSymbol: "ct", toUnit: "Milligram", toSymbol: "mg", factor: "200", exact: true, notes: "0.2 g = 200 mg exactly (gemstones standard)" },
  { fromUnit: "Grain", fromSymbol: "gr", toUnit: "Milligram", toSymbol: "mg", factor: "64.79891", exact: true, notes: "1/7000 lb = 64.79891 mg exactly (ballistics & pharmacy)" },
  { fromUnit: "Slug", fromSymbol: "slug", toUnit: "Kilogram", toSymbol: "kg", factor: "14.5939029", exact: false, notes: "1 lbf / (1 ft/s²) ≈ 14.593902937 kg" }
];

export const TIME_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Minute", fromSymbol: "min", toUnit: "Second", toSymbol: "s", factor: "60", exact: true, notes: "60 seconds exactly" },
  { fromUnit: "Hour", fromSymbol: "h", toUnit: "Second", toSymbol: "s", factor: "3600", exact: true, notes: "60 min × 60 s = 3,600 s exactly" },
  { fromUnit: "Day (Civil)", fromSymbol: "d", toUnit: "Second", toSymbol: "s", factor: "86400", exact: true, notes: "24 h × 3,600 s = 86,400 s exactly" },
  { fromUnit: "Week", fromSymbol: "wk", toUnit: "Second", toSymbol: "s", factor: "604800", exact: true, notes: "7 days = 604,800 s exactly" },
  { fromUnit: "Fortnight", fromSymbol: "fn", toUnit: "Day", toSymbol: "d", factor: "14", exact: true, notes: "14 days = 1,209,600 s exactly" },
  { fromUnit: "Julian Year", fromSymbol: "a_j", toUnit: "Day", toSymbol: "d", factor: "365.25", exact: true, notes: "Astronomical standard: 31,557,600 s exactly" },
  { fromUnit: "Gregorian Mean Year", fromSymbol: "a_g", toUnit: "Day", toSymbol: "d", factor: "365.2425", exact: true, notes: "Calendar mean: 31,556,952 s exactly" },
  { fromUnit: "Common Calendar Year", fromSymbol: "yr", toUnit: "Day", toSymbol: "d", factor: "365", exact: true, notes: "Standard civil non-leap year: 31,536,000 s" }
];

export const SPEED_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Kilometer per Hour", fromSymbol: "km/h", toUnit: "Meter per Second", toSymbol: "m/s", factor: "0.277778", exact: false, notes: "1000 m / 3600 s = 1/3.6 m/s (1 m/s = 3.6 km/h exact)" },
  { fromUnit: "Mile per Hour", fromSymbol: "mph", toUnit: "Kilometer per Hour", toSymbol: "km/h", factor: "1.609344", exact: true, notes: "Exact conversion factor" },
  { fromUnit: "Mile per Hour", fromSymbol: "mph", toUnit: "Meter per Second", toSymbol: "m/s", factor: "0.44704", exact: true, notes: "1609.344 / 3600 = 0.44704 m/s exactly" },
  { fromUnit: "Foot per Second", fromSymbol: "ft/s", toUnit: "Meter per Second", toSymbol: "m/s", factor: "0.3048", exact: true, notes: "Exact conversion factor" },
  { fromUnit: "Knot", fromSymbol: "kn", toUnit: "Kilometer per Hour", toSymbol: "km/h", factor: "1.852", exact: true, notes: "1 nautical mile per hour = 1.852 km/h exactly" },
  { fromUnit: "Knot", fromSymbol: "kn", toUnit: "Meter per Second", toSymbol: "m/s", factor: "0.514444", exact: false, notes: "1852 / 3600 = 463/900 ≈ 0.514444 m/s" },
  { fromUnit: "Speed of Light in Vacuum", fromSymbol: "c", toUnit: "Meter per Second", toSymbol: "m/s", factor: "299792458", exact: true, notes: "Fundamental SI physical constant" },
  { fromUnit: "Mach (Standard Sea Level, 15°C)", fromSymbol: "M", toUnit: "Meter per Second", toSymbol: "m/s", factor: "340.29", exact: false, notes: "Acoustic speed in dry air at 288.15 K; varies with temperature" }
];

export const ACCELERATION_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Standard Gravity", fromSymbol: "g₀", toUnit: "Meter per Second Squared", toSymbol: "m/s²", factor: "9.80665", exact: true, notes: "Defined standard acceleration of gravity by 3rd CGPM (1901)" },
  { fromUnit: "Standard Gravity", fromSymbol: "g₀", toUnit: "Foot per Second Squared", toSymbol: "ft/s²", factor: "32.174049", exact: false, notes: "9.80665 / 0.3048 ≈ 32.174048556 ft/s²" },
  { fromUnit: "Foot per Second Squared", fromSymbol: "ft/s²", toUnit: "Meter per Second Squared", toSymbol: "m/s²", factor: "0.3048", exact: true, notes: "Exact conversion factor" },
  { fromUnit: "Gal", fromSymbol: "Gal", toUnit: "Meter per Second Squared", toSymbol: "m/s²", factor: "0.01", exact: true, notes: "1 cm/s² = 0.01 m/s² exactly (geophysics standard)" }
];

export const FORCE_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Newton", fromSymbol: "N", toUnit: "Dyne", toSymbol: "dyn", factor: "100000", exact: true, notes: "10⁵ dynes exactly" },
  { fromUnit: "Pound-Force", fromSymbol: "lbf", toUnit: "Newton", toSymbol: "N", factor: "4.4482216152605", exact: true, notes: "0.45359237 kg × 9.80665 m/s² = 4.4482216152605 N exactly" },
  { fromUnit: "Kilogram-Force (Kilopond)", fromSymbol: "kgf (kp)", toUnit: "Newton", toSymbol: "N", factor: "9.80665", exact: true, notes: "1 kg × 9.80665 m/s² = 9.80665 N exactly" },
  { fromUnit: "Kip", fromSymbol: "kip (klbf)", toUnit: "Kilonewton", toSymbol: "kN", factor: "4.4482216", exact: true, notes: "1,000 lbf = 4.4482216152605 kN exactly" },
  { fromUnit: "Poundal", fromSymbol: "pdl", toUnit: "Newton", toSymbol: "N", factor: "0.138254954376", exact: true, notes: "1 lb × 1 ft/s² = 0.138254954376 N exactly" }
];

export const PRESSURE_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Kilopascal", fromSymbol: "kPa", toUnit: "Pascal", toSymbol: "Pa", factor: "1000", exact: true, notes: "1 kPa = 1,000 Pa exactly" },
  { fromUnit: "Megapascal", fromSymbol: "MPa", toUnit: "Pascal", toSymbol: "Pa", factor: "1000000", exact: true, notes: "1 MPa = 1,000,000 Pa = 1 N/mm² exactly" },
  { fromUnit: "Bar", fromSymbol: "bar", toUnit: "Pascal", toSymbol: "Pa", factor: "100000", exact: true, notes: "1 bar = 100,000 Pa = 100 kPa exactly" },
  { fromUnit: "Millibar", fromSymbol: "mbar", toUnit: "Hectopascal", toSymbol: "hPa", factor: "1", exact: true, notes: "1 mbar = 100 Pa = 1 hPa exactly (meteorology)" },
  { fromUnit: "Pound per Square Inch", fromSymbol: "psi (lbf/in²)", toUnit: "Pascal", toSymbol: "Pa", factor: "6894.757293168", exact: true, notes: "4.4482216152605 N / (0.0254 m)² ≈ 6,894.757 Pa" },
  { fromUnit: "Pound per Square Inch", fromSymbol: "psi", toUnit: "Bar", toSymbol: "bar", factor: "0.06894757", exact: false, notes: "1 bar ≈ 14.503774 psi" },
  { fromUnit: "Standard Atmosphere", fromSymbol: "atm", toUnit: "Pascal", toSymbol: "Pa", factor: "101325", exact: true, notes: "Standard atmospheric pressure defined at sea level" },
  { fromUnit: "Standard Atmosphere", fromSymbol: "atm", toUnit: "Bar", toSymbol: "bar", factor: "1.01325", exact: true, notes: "101,325 / 100,000 = 1.01325 bar exactly" },
  { fromUnit: "Torr", fromSymbol: "Torr", toUnit: "Pascal", toSymbol: "Pa", factor: "133.322368", exact: false, notes: "1/760 standard atmosphere = 101,325 / 760 Pa ≈ 133.3223684 Pa" },
  { fromUnit: "Millimeter of Mercury (0°C)", fromSymbol: "mmHg", toUnit: "Pascal", toSymbol: "Pa", factor: "133.3224", exact: false, notes: "Conventional metric manometric unit ≈ 133.322387415 Pa" },
  { fromUnit: "Inch of Mercury (32°F)", fromSymbol: "inHg", toUnit: "Pascal", toSymbol: "Pa", factor: "3386.389", exact: false, notes: "Aviation altimeter setting in US: 1 inHg ≈ 3,386.389 Pa" }
];

export const ENERGY_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Kilojoule", fromSymbol: "kJ", toUnit: "Joule", toSymbol: "J", factor: "1000", exact: true, notes: "1,000 J exactly" },
  { fromUnit: "Watt-Hour", fromSymbol: "Wh", toUnit: "Joule", toSymbol: "J", factor: "3600", exact: true, notes: "1 W × 3,600 s = 3,600 J exactly" },
  { fromUnit: "Kilowatt-Hour", fromSymbol: "kWh", toUnit: "Megajoule", toSymbol: "MJ", factor: "3.6", exact: true, notes: "3.6 × 10⁶ J = 3.6 MJ exactly" },
  { fromUnit: "Thermochemical Calorie", fromSymbol: "cal_th", toUnit: "Joule", toSymbol: "J", factor: "4.184", exact: true, notes: "Defined exactly by NIST and US NBS" },
  { fromUnit: "International Table Calorie", fromSymbol: "cal_IT", toUnit: "Joule", toSymbol: "J", factor: "4.1868", exact: true, notes: "Defined by Fifth International Conference on Properties of Steam (1956)" },
  { fromUnit: "Food Calorie (Kilocalorie)", fromSymbol: "kcal (Cal)", toUnit: "Kilojoule", toSymbol: "kJ", factor: "4.184", exact: true, notes: "Nutrition Calorie = 1,000 thermochemical calories" },
  { fromUnit: "British Thermal Unit (IT)", fromSymbol: "BTU_IT", toUnit: "Joule", toSymbol: "J", factor: "1055.05585262", exact: true, notes: "Defined exactly based on the IT calorie and international pound" },
  { fromUnit: "Electron-Volt", fromSymbol: "eV", toUnit: "Joule", toSymbol: "J", factor: "1.602176634 × 10⁻¹⁹", exact: true, notes: "Elementary charge e × 1 V exactly (2019 SI redefinition)" },
  { fromUnit: "Erg", fromSymbol: "erg", toUnit: "Joule", toSymbol: "J", factor: "10⁻⁷", exact: true, notes: "1 dyn cm = 10⁻⁷ J exactly (CGS system)" },
  { fromUnit: "Foot-Pound Force", fromSymbol: "ft·lbf", toUnit: "Joule", toSymbol: "J", factor: "1.3558179483314", exact: true, notes: "0.3048 m × 4.4482216152605 N ≈ 1.355818 J exactly" }
];

export const POWER_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Kilowatt", fromSymbol: "kW", toUnit: "Watt", toSymbol: "W", factor: "1000", exact: true, notes: "1,000 W exactly" },
  { fromUnit: "Megawatt", fromSymbol: "MW", toUnit: "Kilowatt", toSymbol: "kW", factor: "1000", exact: true, notes: "10⁶ W = 1,000 kW exactly" },
  { fromUnit: "Mechanical Horsepower (Imperial)", fromSymbol: "hp", toUnit: "Watt", toSymbol: "W", factor: "745.69987158227022", exact: true, notes: "550 ft·lbf/s ≈ 745.7 W (automotive & industrial in US/UK)" },
  { fromUnit: "Metric Horsepower (PS, cv, ch)", fromSymbol: "PS (hpM)", toUnit: "Watt", toSymbol: "W", factor: "735.49875", exact: true, notes: "75 kgf·m/s = 735.49875 W exactly" },
  { fromUnit: "Electric Horsepower", fromSymbol: "hp_e", toUnit: "Watt", toSymbol: "W", factor: "746", exact: true, notes: "Defined exactly as 746 W for electric motors in the US" },
  { fromUnit: "BTU per Hour", fromSymbol: "BTU/h", toUnit: "Watt", toSymbol: "W", factor: "0.29307107", exact: false, notes: "1055.05585262 J / 3600 s ≈ 0.29307107 W" },
  { fromUnit: "Ton of Refrigeration", fromSymbol: "TR", toUnit: "Kilowatt", toSymbol: "kW", factor: "3.516853", exact: false, notes: "12,000 BTU/h ≈ 3.516853 kW (HVAC capacity standard)" }
];

export const TORQUE_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Pound-Foot", fromSymbol: "lbf·ft", toUnit: "Newton-Meter", toSymbol: "N·m", factor: "1.3558179483314", exact: true, notes: "Exact conversion factor (torque must not be expressed in joules)" },
  { fromUnit: "Pound-Inch", fromSymbol: "lbf·in", toUnit: "Newton-Meter", toSymbol: "N·m", factor: "0.1129848290276", exact: true, notes: "1/12 lbf·ft ≈ 0.1129848 N·m exactly" },
  { fromUnit: "Kilogram-Force Meter", fromSymbol: "kgf·m", toUnit: "Newton-Meter", toSymbol: "N·m", factor: "9.80665", exact: true, notes: "1 kg × 9.80665 m/s² × 1 m = 9.80665 N·m exactly" },
  { fromUnit: "Newton-Meter", fromSymbol: "N·m", toUnit: "Pound-Foot", toSymbol: "lbf·ft", factor: "0.737562149", exact: false, notes: "1 N·m ≈ 0.737562 lbf·ft" }
];

export const ELECTRICAL_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Kilovolt", fromSymbol: "kV", toUnit: "Volt", toSymbol: "V", factor: "1000", exact: true, notes: "10³ V" },
  { fromUnit: "Millivolt", fromSymbol: "mV", toUnit: "Volt", toSymbol: "V", factor: "0.001", exact: true, notes: "10⁻³ V" },
  { fromUnit: "Milliampere", fromSymbol: "mA", toUnit: "Ampere", toSymbol: "A", factor: "0.001", exact: true, notes: "10⁻³ A" },
  { fromUnit: "Microampere", fromSymbol: "µA", toUnit: "Ampere", toSymbol: "A", factor: "10⁻⁶", exact: true, notes: "10⁻⁶ A" },
  { fromUnit: "Kilohm", fromSymbol: "kΩ", toUnit: "Ohm", toSymbol: "Ω", factor: "1000", exact: true, notes: "10³ Ω" },
  { fromUnit: "Megohm", fromSymbol: "MΩ", toUnit: "Ohm", toSymbol: "Ω", factor: "1000000", exact: true, notes: "10⁶ Ω" },
  { fromUnit: "Microfarad", fromSymbol: "µF", toUnit: "Farad", toSymbol: "F", factor: "10⁻⁶", exact: true, notes: "10⁻⁶ F" },
  { fromUnit: "Picofarad", fromSymbol: "pF", toUnit: "Farad", toSymbol: "F", factor: "10⁻¹²", exact: true, notes: "10⁻¹² F" },
  { fromUnit: "Millihenry", fromSymbol: "mH", toUnit: "Henry", toSymbol: "H", factor: "0.001", exact: true, notes: "10⁻³ H" },
  { fromUnit: "Ampere-Hour", fromSymbol: "Ah", toUnit: "Coulomb", toSymbol: "C", factor: "3600", exact: true, notes: "1 A × 3,600 s = 3,600 C exactly" },
  { fromUnit: "Milliampere-Hour", fromSymbol: "mAh", toUnit: "Coulomb", toSymbol: "C", factor: "3.6", exact: true, notes: "3,600 / 1,000 = 3.6 C exactly (battery rating standard)" }
];

export const RADIOACTIVITY_FACTORS: ConversionFactorRow[] = [
  { fromUnit: "Curie", fromSymbol: "Ci", toUnit: "Becquerel", toSymbol: "Bq", factor: "3.7 × 10¹⁰", exact: true, notes: "37 GBq exactly (historically the activity of 1 g of radium-226)" },
  { fromUnit: "Millicurie", fromSymbol: "mCi", toUnit: "Megabecquerel", toSymbol: "MBq", factor: "37", exact: true, notes: "37 MBq exactly" },
  { fromUnit: "Rutherford", fromSymbol: "Rd", toUnit: "Becquerel", toSymbol: "Bq", factor: "10⁶", exact: true, notes: "1 MBq = 10⁶ disintegrations per second exactly" },
  { fromUnit: "Rad (Absorbed Dose)", fromSymbol: "rad", toUnit: "Gray", toSymbol: "Gy", factor: "0.01", exact: true, notes: "100 erg/g = 0.01 J/kg = 0.01 Gy exactly" },
  { fromUnit: "Rem (Dose Equivalent)", fromSymbol: "rem", toUnit: "Sievert", toSymbol: "Sv", factor: "0.01", exact: true, notes: "0.01 Sv exactly" }
];

export interface MetricImperialComparison {
  category: string;
  metricUnit: string;
  imperialUnit: string;
  relationship: string;
  practicalExample: string;
}

export const METRIC_IMPERIAL_COMPARISONS: MetricImperialComparison[] = [
  {
    category: "Short Distance",
    metricUnit: "1 centimeter (cm)",
    imperialUnit: "0.3937 inches (in)",
    relationship: "1 in = 2.54 cm exactly",
    practicalExample: "A standard 30 cm ruler is approximately 11.81 inches (slightly shorter than 12 in)."
  },
  {
    category: "Human Height & Rooms",
    metricUnit: "1 meter (m)",
    imperialUnit: "3.2808 feet (ft) / 39.37 in",
    relationship: "1 m = 3 ft 3.37 in",
    practicalExample: "A 6-foot person is 1.8288 meters tall (183 cm)."
  },
  {
    category: "Driving Distances",
    metricUnit: "1 kilometer (km)",
    imperialUnit: "0.62137 miles (mi)",
    relationship: "1 mi = 1.609344 km exactly",
    practicalExample: "100 km/h on a highway corresponds to 62.14 mph."
  },
  {
    category: "Land & Real Estate",
    metricUnit: "1 hectare (ha)",
    imperialUnit: "2.47105 acres (ac)",
    relationship: "1 ha = 10,000 m² ≈ 2.47 acres",
    practicalExample: "A typical international football (soccer) pitch is roughly 0.7 hectares (~1.7 acres)."
  },
  {
    category: "Groceries & Shipping",
    metricUnit: "1 kilogram (kg)",
    imperialUnit: "2.20462 pounds (lb)",
    relationship: "1 lb = 0.45359237 kg exactly",
    practicalExample: "A 50 lb checked airline suitcase limit equals 22.68 kg (typically rounded to 23 kg)."
  },
  {
    category: "Beverages & Fuel",
    metricUnit: "1 liter (L)",
    imperialUnit: "0.26417 US gal / 0.21997 Imp gal",
    relationship: "1 US gal = 3.78541 L; 1 Imp gal = 4.54609 L",
    practicalExample: "A 2-liter soda bottle contains about 0.528 US gallons (or 67.6 US fluid ounces)."
  },
  {
    category: "Tire Pressure",
    metricUnit: "1 bar / 100 kPa",
    imperialUnit: "14.5038 psi",
    relationship: "1 psi ≈ 6.89476 kPa",
    practicalExample: "A passenger vehicle tire inflated to 32 psi equals 2.206 bar (220.6 kPa)."
  },
  {
    category: "Body Temperature",
    metricUnit: "37.0 °C",
    imperialUnit: "98.6 °F",
    relationship: "T(°F) = (T(°C) × 1.8) + 32",
    practicalExample: "A fever of 38.5 °C equals 101.3 °F."
  }
];

export interface WorkedExample {
  title: string;
  problem: string;
  fromValue: string;
  targetUnit: string;
  formula: string;
  steps: string[];
  finalAnswer: string;
  keyTakeaway: string;
}

export const WORKED_EXAMPLES: WorkedExample[] = [
  {
    title: "Example 1: Velocity Conversion (Highway Speed)",
    problem: "Convert an automobile speed of 65.0 miles per hour (mph) into meters per second (m/s) using exact unit cancellation.",
    fromValue: "65.0 mph",
    targetUnit: "m/s",
    formula: "v (m/s) = v (mph) × (1,609.344 m / 1 mi) × (1 h / 3,600 s) = v (mph) × 0.44704 m/s",
    steps: [
      "Identify the exact statutory relationship: 1 mile = 1,609.344 meters (1959 international agreement).",
      "Identify the exact time relationship: 1 hour = 60 minutes × 60 seconds = 3,600 seconds.",
      "Formulate the unit cancellation factor: (1,609.344 m / 1 mi) × (1 h / 3,600 s) = 0.44704 (m/s) / (mi/h).",
      "Multiply by the given speed: 65.0 × 0.44704 m/s = 29.0576 m/s.",
      "Apply significant figures: Since the input 65.0 has 3 significant figures, round to 29.1 m/s."
    ],
    finalAnswer: "65.0 mph = 29.1 m/s (or 29.0576 m/s unrounded)",
    keyTakeaway: "Because 1 mi = 1609.344 m and 1 h = 3600 s are exact definitions, the conversion factor 0.44704 has infinite significant figures and does not restrict the output precision."
  },
  {
    title: "Example 2: Area Conversion (Residential Lot Sizing)",
    problem: "A residential building parcel measures 8,500 square feet (sq ft). Convert this area into square meters (m²).",
    fromValue: "8,500 sq ft",
    targetUnit: "m²",
    formula: "Area (m²) = Area (sq ft) × (0.3048 m / 1 ft)² = Area (sq ft) × 0.09290304 m²",
    steps: [
      "Begin with the linear unit definition: 1 foot = 0.3048 meter exactly.",
      "Square the entire ratio including the unit: (1 ft)² = (0.3048 m)².",
      "Calculate the area factor: 1 sq ft = 0.3048 × 0.3048 m² = 0.09290304 m² exactly.",
      "Multiply: 8,500 × 0.09290304 = 789.67584 m².",
      "Apply significant figures (assuming 2 or 3 sig figs in 8,500): Report as 790 m² (or 789.7 m² for practical surveying)."
    ],
    finalAnswer: "8,500 sq ft = 789.68 m² (rounded to 2 decimal places)",
    keyTakeaway: "Never multiply by the linear factor (0.3048). Area conversions always require squaring the linear conversion factor."
  },
  {
    title: "Example 3: Non-Linear Temperature Offset (Oven Baking)",
    problem: "A recipe instructs baking sourdough bread at 450 °F. Convert this temperature to Celsius (°C) and Kelvin (K).",
    fromValue: "450 °F",
    targetUnit: "°C and K",
    formula: "T(°C) = (T(°F) - 32) × (5/9); T(K) = T(°C) + 273.15",
    steps: [
      "Subtract the 32 °F zero-point offset first: 450 - 32 = 418.",
      "Multiply by the exact ratio 5/9: 418 × (5/9) = 2,090 / 9 ≈ 232.222... °C.",
      "Round for practical kitchen appliance dials: 232 °C (or 230 °C commercial setting).",
      "Convert to thermodynamic Kelvin: 232.222 + 273.15 = 505.372... K ≈ 505.4 K."
    ],
    finalAnswer: "450 °F = 232.2 °C = 505.4 K",
    keyTakeaway: "Because temperature scales have displaced zero baselines, simple scaling factors fail; subtracting or adding the offset must occur in the correct mathematical order."
  }
];

export interface ConversionMistake {
  id: string;
  title: string;
  description: string;
  example: string;
  correctMethod: string;
}

export const COMMON_MISTAKES: ConversionMistake[] = [
  {
    id: "gallon-confusion",
    title: "1. Confusing US Liquid Gallons with UK Imperial Gallons",
    description: "A US liquid gallon is defined as 231 cubic inches (~3.785 L), whereas an Imperial gallon is defined as exactly 4.54609 liters. An Imperial gallon is approximately 20.1% larger than a US gallon.",
    example: "Assuming a car achieving '40 mpg' in the United Kingdom achieves the same fuel efficiency as '40 mpg' in the United States. 40 mpg (UK) is actually only 33.3 mpg (US).",
    correctMethod: "Always determine whether the source specifies US Customary (3.78541 L) or British Imperial (4.54609 L) measurements before calculating fuel economy or liquid transfer."
  },
  {
    id: "square-cube-linear",
    title: "2. Forgetting to Square or Cube Area and Volume Factors",
    description: "Because 1 meter equals 100 centimeters, students frequently assume 1 cubic meter equals 100 cubic centimeters. In reality, volume scales with the third power: (100 cm)³ = 1,000,000 cm³.",
    example: "Calculating concrete volume by multiplying cubic feet by 0.3048 rather than (0.3048)³ = 0.0283168.",
    correctMethod: "Always raise both the numeric factor and the unit to the dimension's power: 1 yd³ = (3 ft)³ = 27 ft³."
  },
  {
    id: "mass-vs-weight",
    title: "3. Conflating Mass (Pound-Mass) and Force (Pound-Force)",
    description: "In metric, mass (kg) and force (N) use distinct unit names. In imperial engineering, 'pound' can designate either mass (lbm) or force (lbf), leading to critical errors in rocket science, structural analysis, and aerodynamics.",
    example: "Using F = m·a directly with pound units without dividing by the gravitational constant g_c = 32.174 lbm·ft/(lbf·s²).",
    correctMethod: "Specify lbm for mass or lbf for force. In metric SI, maintain strict separation: mass in kilograms (kg), force in newtons (N = kg·m/s²)."
  },
  {
    id: "temperature-offset",
    title: "4. Applying Scalar Ratios to Temperature Readings Instead of Intervals",
    description: "Converting an absolute temperature (e.g. 20 °C) requires subtracting or adding the 32 °F offset. However, converting a temperature change or heat transfer gradient (ΔT = 20 °C) must NOT add 32.",
    example: "Saying a temperature rise of 10 °C equals a rise of (10 × 1.8) + 32 = 50 °F. The actual temperature rise is 10 × 1.8 = 18 °F.",
    correctMethod: "Use T(°F) = (T(°C) × 1.8) + 32 for points on a thermometer. Use ΔT(°F) = ΔT(°C) × 1.8 for temperature differences and thermal coefficients."
  },
  {
    id: "false-precision",
    title: "5. Spurious False Precision & Over-Rounding",
    description: "Entering a rough measurement like '4 inches' into a digital calculator and quoting the answer as '10.16000000 centimeters' implies measurement precision down to nanometers that does not exist.",
    example: "Quoting a speed of 'about 60 mph' as exactly '96.56064 km/h' instead of ~97 km/h or ~100 km/h.",
    correctMethod: "Follow significant figure rules. A calculated result can never be more precise than the least precise measured quantity entered into the calculation."
  },
  {
    id: "ounce-mass-volume",
    title: "6. Mixing Avoirdupois Ounces (Weight) with Fluid Ounces (Volume)",
    description: "An avoirdupois ounce is a unit of mass equal to 28.3495 grams. A fluid ounce is a unit of capacity equal to 29.5735 milliliters (US) or 28.4131 mL (UK). They only equal each other for pure water under specific temperature conditions.",
    example: "Measuring 8 ounces of honey (density ~1.42 g/mL) in a liquid measuring cup and expecting it to weigh 8 dry ounces. 8 fluid ounces of honey weighs over 11.3 dry ounces.",
    correctMethod: "Use scales for dry mass (ounces / grams) and graduated cylinders or measuring jugs for fluid volume (fluid ounces / milliliters)."
  },
  {
    id: "prefix-confusion",
    title: "7. Conflating Decimal SI Prefixes with Binary IEC Prefixes",
    description: "In the metric SI system, 1 kilobyte (kB) is 1,000 bytes, and 1 megabyte (MB) is 1,000,000 bytes (10⁶). In computer memory architecture, binary multiples are 1 kibibyte (KiB) = 1,024 bytes and 1 mebibyte (MiB) = 1,048,576 bytes (2²⁰).",
    example: "Buying a 1 Terabyte (10¹² B) storage drive and observing your operating system display approximately 931 GiB.",
    correctMethod: "Distinguish between decimal SI prefixes (kB = 10³, MB = 10⁶, GB = 10⁹) used by drive makers and network engineers, and binary IEC prefixes (KiB = 2¹⁰, MiB = 2²⁰, GiB = 2³⁰) used in RAM architecture."
  }
];

export interface ReferenceFaq {
  question: string;
  answer: string;
}

export const REFERENCE_FAQS: ReferenceFaq[] = [
  {
    question: "What is unit conversion?",
    answer: "Unit conversion is the mathematical process of expressing a measured physical quantity in terms of a different unit of measurement while keeping the actual physical magnitude unchanged. It relies on identity ratios (conversion factors equal to 1) so that the numerical value changes in inverse proportion to the size of the chosen unit."
  },
  {
    question: "What is a conversion factor?",
    answer: "A conversion factor is a numerical multiplier or fraction that relates one unit to another for the same physical dimension. Because both the numerator and denominator represent the exact same physical quantity (such as 1 inch / 25.4 mm), multiplying any measurement by a conversion factor is mathematically equivalent to multiplying by unity (1), leaving the physical reality intact."
  },
  {
    question: "What are SI units?",
    answer: "SI units belong to the International System of Units (Système International d'Unités), the internationally adopted scientific metric framework established by the General Conference on Weights and Measures (CGPM) and administered by the BIPM. Since the historic 2019 redefinition, the SI is founded upon seven fundamental physical constants of nature rather than physical artifact prototypes."
  },
  {
    question: "What are the seven SI base units?",
    answer: "The seven SI base units are: the second (s) for time, the meter (m) for length, the kilogram (kg) for mass, the ampere (A) for electric current, the kelvin (K) for thermodynamic temperature, the mole (mol) for amount of substance, and the candela (cd) for luminous intensity. All other physical units (like newtons, joules, and volts) are derived from these seven base units."
  },
  {
    question: "What is the difference between metric and Imperial units?",
    answer: "The metric system (SI) is a decimal-based measurement system where units scale consistently by powers of ten using standard prefixes (kilo, centi, milli). Imperial and US Customary systems evolved historically from traditional British units, featuring irregular subdivisions (12 inches in a foot, 3 feet in a yard, 16 ounces in a pound, 5,280 feet in a mile). Today, all US Customary and Imperial units are legally defined by exact metric equivalents."
  },
  {
    question: "Are all conversion factors exact?",
    answer: "No. Some conversion factors are mathematically exact by international legal definition, such as 1 inch = 25.4 millimeters, 1 pound = 0.45359237 kilograms, and 1 yard = 0.9144 meters. Other conversion factors are irrational or approximate, such as converting between miles and nautical miles (~1.150779 mi), or temperature conversions involving recurring fractions like 5/9."
  },
  {
    question: "How do I convert between units?",
    answer: "To convert between units, multiply the given measurement by a conversion factor structured as a fraction where the original unit is in the opposite position (numerator vs. denominator) so that it cancels out algebraically, leaving only the desired target unit. For affine scales like temperature, first subtract or add any baseline zero offsets before multiplying by the scaling factor."
  },
  {
    question: "Why are square and cubic conversions different?",
    answer: "Square (area) and cubic (volume) conversions differ from linear conversions because geometric dimensions multiply together. If 1 meter equals 100 centimeters linearly, a square meter equals (100 cm) × (100 cm) = 10,000 cm², and a cubic meter equals (100 cm) × (100 cm) × (100 cm) = 1,000,000 cm³. The conversion factor must always be raised to the power of the dimension."
  },
  {
    question: "How are Celsius and Fahrenheit converted?",
    answer: "Celsius and Fahrenheit have different zero points and different degree sizes. Water freezes at 0 °C (32 °F) and boils at 100 °C (212 °F). To convert Celsius to Fahrenheit, multiply by 9/5 (1.8) and add 32: °F = (°C × 1.8) + 32. To convert Fahrenheit to Celsius, first subtract 32 and then multiply by 5/9: °C = (°F - 32) × 5/9."
  },
  {
    question: "What are SI prefixes?",
    answer: "SI prefixes are standardized prefixes attached to SI units to represent decimal multiples and submultiples from 10³⁰ (quetta, Q) down to 10⁻³⁰ (quecto, q). They eliminate the need for unwieldy long strings of zeros in scientific and technical calculations, providing a universal shorthand across physics, computing, engineering, and chemistry."
  }
];

export interface ReferenceSource {
  title: string;
  organization: string;
  description: string;
  citation: string;
}

export const AUTHORITATIVE_REFERENCES: ReferenceSource[] = [
  {
    title: "The International System of Units (SI Brochure)",
    organization: "Bureau International des Poids et Mesures (BIPM)",
    description: "The official international standard defining the SI base units, derived units, prefixes, and governing rules (9th Edition, updated with 2022 CGPM resolutions).",
    citation: "BIPM (2019/2022), 'Le Système international d'unités / The International System of Units', 9th Edition, Sèvres, France."
  },
  {
    title: "Guide for the Use of the International System of Units (SI)",
    organization: "National Institute of Standards and Technology (NIST)",
    description: "Authoritative US reference publication covering correct SI usage, style conventions, and Appendix B comprehensive conversion factor tables.",
    citation: "Thompson, A. and Taylor, B. N., NIST Special Publication 811, 2008 Edition, Gaithersburg, MD."
  },
  {
    title: "NIST SP 330: The International System of Units (SI)",
    organization: "National Institute of Standards and Technology (NIST)",
    description: "US official translation and adaptation of the BIPM SI Brochure, detailing base physical definitions and national metrology policies.",
    citation: "NIST Special Publication 330, US Department of Commerce."
  },
  {
    title: "ISO/IEC 80000: Quantities and Units (Parts 1 to 14)",
    organization: "International Organization for Standardization (ISO) / IEC",
    description: "Harmonized international standard series detailing mathematical notation, physical dimensions, binary prefixes (IEC 80000-13), and derived quantities across all engineering branches.",
    citation: "ISO/IEC 80000:2009-2022, International Standards for Quantities and Units."
  },
  {
    title: "CODATA Recommended Values of Fundamental Physical Constants",
    organization: "Committee on Data for Science and Technology (CODATA)",
    description: "Internationally agreed values for fundamental physical constants (speed of light, Planck constant, elementary charge, Boltzmann constant, Avogadro constant).",
    citation: "CODATA Task Group on Fundamental Constants, International Science Council."
  },
  {
    title: "IEEE/ASTM SI 10: American National Standard for Metric Practice",
    organization: "IEEE / ASTM International",
    description: "Standard for application of the metric system in American industry, engineering drawings, construction, and manufacturing.",
    citation: "IEEE/ASTM SI 10-2016 (ANSI approved), Standard for Use of the International System of Units (SI)."
  }
];

export interface InternalToolLink {
  name: string;
  category: string;
  route: string;
  type: "category" | "converter" | "calculator";
  description: string;
}

export const INTERNAL_TOOL_LINKS: InternalToolLink[] = [
  { name: "Length Converter", category: "length", route: "/length-conversion", type: "category", description: "Convert meters, feet, inches, kilometers, miles, and nautical units." },
  { name: "Weight & Mass Converter", category: "weight-mass", route: "/weight-conversion", type: "category", description: "Convert kilograms, pounds, ounces, grams, stones, and metric tonnes." },
  { name: "Area Converter", category: "area", route: "/area-conversion", type: "category", description: "Calculate square meters, acres, hectares, square feet, and square miles." },
  { name: "Volume Converter", category: "volume", route: "/volume-conversion", type: "category", description: "Convert liters, US gallons, imperial gallons, cubic meters, and fluid ounces." },
  { name: "Temperature Converter", category: "temperature", route: "/temperature-conversion", type: "category", description: "Convert Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur with exact formulas." },
  { name: "Pressure Converter", category: "pressure", route: "/pressure-conversion", type: "category", description: "Convert pascals, bar, psi, atmospheres, and millimeters of mercury." },
  { name: "Energy Converter", category: "energy", route: "/energy-conversion", type: "category", description: "Convert joules, kilowatt-hours, calories, BTUs, and electron-volts." },
  { name: "Power Converter", category: "power", route: "/power-conversion", type: "category", description: "Convert watts, kilowatts, mechanical horsepower, and metric horsepower." },
  { name: "Speed Converter", category: "speed", route: "/speed-conversion", type: "category", description: "Convert m/s, km/h, mph, knots, Mach numbers, and feet per second." },
  { name: "Torque Converter", category: "torque", route: "/torque-conversion", type: "category", description: "Convert newton-meters, pound-feet, pound-inches, and kilogram-force meters." },
  { name: "Acceleration Converter", category: "acceleration", route: "/acceleration-conversion", type: "category", description: "Convert m/s², ft/s², standard gravity (g₀), and gals." },
  { name: "Force Converter", category: "force", route: "/force-conversion", type: "category", description: "Convert newtons, pound-force, dynes, kilogram-force, and kips." },
  { name: "Electric Resistance Converter", category: "electric-resistance", route: "/electric-resistance-conversion", type: "category", description: "Convert ohms, kilohms, megohms, and milliohms." },
  { name: "Voltage Converter", category: "voltage", route: "/voltage-conversion", type: "category", description: "Convert volts, millivolts, kilovolts, and microvolts." },
  { name: "Electric Current Converter", category: "electricity", route: "/electricity-conversion", type: "category", description: "Convert amperes, milliamperes, kiloamperes, and microamperes." },
  { name: "Capacitance Converter", category: "capacitance", route: "/capacitance-conversion", type: "category", description: "Convert farads, microfarads, nanofarads, and picofarads." },
  { name: "Inductance Converter", category: "inductance", route: "/inductance-conversion", type: "category", description: "Convert henries, millihenries, microhenries, and nanohenries." },
  { name: "Electric Charge Converter", category: "electric-charge", route: "/electric-charge-conversion", type: "category", description: "Convert coulombs, ampere-hours, and milliampere-hours." },
  { name: "Radioactivity Converter", category: "radioactivity", route: "/radioactivity-conversion", type: "category", description: "Convert becquerels, curies, rutherfords, and grays." },
  { name: "Engineering Calculators Hub", category: "engineering-calculators", route: "/calculators", type: "calculator", description: "Explore specialized electrical, mechanical, civil, and physics calculators." }
];
