import { CustomArticleData } from "./types";

export const centimeterToNanometer: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "nanometer",
  seoTitle: "Centimeter to Nanometer Converter | cm to nm",
  metaDescription: "Convert centimeters to nanometers (cm to nm) with exact SI precision. Explore the 10-million multiplier, worked examples, nanoscale table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-nanometer",
  h1: "Centimeter to Nanometer Converter",
  introduction: [
    "Converting centimeters (cm) to nanometers (nm) spans seven orders of magnitude, connecting macroscopic human-scale objects to the atomic and molecular domain. While centimeters are the standard for everyday product packaging, physical specimens, and laboratory glassware, nanometers are the universal benchmark for quantum mechanics, nanotechnology, semiconductor fabrication, and molecular biology.",
    "Because both centimeters and nanometers are defined as direct decimal fractions of the SI meter, their mathematical conversion is governed purely by powers of ten. One centimeter contains exactly 10,000,000 nanometers (10⁷ nm). This guide provides the exact conversion formula, manual calculation steps, practical nanotechnology applications, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "One centimeter is equal to exactly 10,000,000 nanometers (10⁷ nm). Conversely, one nanometer is equal to 0.0000001 centimeters (10⁻⁷ cm).",
    formulaDisplay: "1 cm = 10,000,000 nm",
    subtext: "To convert centimeters to nanometers, multiply the centimeter value by 10,000,000 (10⁷), or shift the decimal point seven places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a standard metric unit equal to one hundredth of a meter (10⁻² meters). Adopted internationally for everyday measurement, the centimeter provides a tangible reference point for human body dimensions, furniture, consumer electronics, and scientific lab equipment."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanometer (nm)",
    text: "The nanometer is an official SI unit of length equal to one billionth of a meter (10⁻⁹ meters) or one millionth of a millimeter. The prefix 'nano-' originates from the Greek word for dwarf. Nanometers are the indispensable standard for specifying wavelengths of visible light (380 to 750 nm), silicon microprocessor transistor gate lengths (such as 3 nm and 5 nm process nodes), DNA helix widths (approx. 2 nm), and virus diameters."
  },
  relationship: "Because 1 centimeter equals 0.01 meters (10⁻² m) and 1 nanometer equals 0.000000001 meters (10⁻⁹ m), dividing 10⁻² by 10⁻⁹ yields exactly 10,000,000 (10⁷) nanometers per centimeter.",
  relationshipItems: [
    { label: "Centimeters to Nanometers", value: "1 cm = 10,000,000 nm (exact)" },
    { label: "Nanometers to Centimeters", value: "1 nm = 10⁻⁷ cm (exact)" },
    { label: "Scientific Ratio", value: "1 cm = 10⁷ nm" }
  ],
  formula: {
    text: "To convert centimeters to nanometers, multiply the centimeter value by 10,000,000 (10⁷).",
    math: "Nanometers (nm) = Centimeters (cm) × 10,000,000 = Centimeters (cm) × 10⁷",
    subtext: "This conversion involves integer powers of ten; it is mathematically exact without any rounding error."
  },
  practicalTip: {
    title: "Scientific Notation Tip",
    text: "Because dealing with seven zeros can easily lead to typographical mistakes, express values using scientific notation: 1 cm = 1.0 × 10⁷ nm, and 0.02 cm = 2.0 × 10⁵ nm = 200,000 nm."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Silicon Wafer Die Feature",
        subtitle: "Convert a 0.0001 cm microcircuit feature into nanometers.",
        steps: [
          "State the starting length: 0.0001 cm.",
          "Apply the conversion factor: Multiply by 10,000,000 (10⁷).",
          "Perform calculation: 0.0001 × 10,000,000 = 1,000.",
          "Final result: 0.0001 cm is exactly equal to 1,000 nanometers (1 µm)."
        ]
      },
      {
        title: "Example 2: Optical Filter Wavelength Clearance",
        subtitle: "Convert a thin glass coating thickness of 0.00005 cm into nanometers.",
        steps: [
          "State the starting thickness: 0.00005 cm.",
          "Multiply by 10⁷: 0.00005 × 10,000,000 = 500.",
          "Conclusion: 0.00005 cm corresponds to 500 nanometers (the wavelength of green-cyan light)."
        ]
      },
      {
        title: "Example 3: Macroscopic 2 Centimeter Specimen",
        subtitle: "Convert a 2 cm laboratory quartz cuvette width to nanometers.",
        steps: [
          "Identify the starting length: 2 cm.",
          "Multiply by 10,000,000: 2 × 10,000,000 = 20,000,000.",
          "Final answer: 2 cm equals exactly 20,000,000 nanometers (2.0 × 10⁷ nm)."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Nanometer Reference Table",
    headers: ["Centimeters (cm)", "Nanometers (nm)", "Context / Common Application"],
    rows: [
      { fromVal: "0.0000001", toVal: "1", extra: "1 nm (atomic lattice spacing / carbon nanotube diameter)" },
      { fromVal: "0.000001", toVal: "10", extra: "10 nm (semiconductor transistor gate scale)" },
      { fromVal: "0.00005", toVal: "500", extra: "500 nm (visible light wavelength, cyan-green)" },
      { fromVal: "0.0001", toVal: "1,000", extra: "1,000 nm (1 micrometer, infrared boundary)" },
      { fromVal: "0.001", toVal: "10,000", extra: "10,000 nm (10 µm, red blood cell width)" },
      { fromVal: "0.01", toVal: "100,000", extra: "100,000 nm (0.1 mm, fine human hair width)" },
      { fromVal: "0.1", toVal: "1,000,000", extra: "1,000,000 nm (1 millimeter)" },
      { fromVal: "0.5", toVal: "5,000,000", extra: "5 millimeters" },
      { fromVal: "1", toVal: "10,000,000", extra: "Exactly 1 centimeter" },
      { fromVal: "5", toVal: "50,000,000", extra: "5 centimeters (optical lens diameter)" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Semiconductor Lithography & Chip Design",
        text: "Photolithography equipment uses extreme ultraviolet (EUV) light with wavelengths of 13.5 nm to print circuit patterns onto silicon wafers measuring 30 centimeters in diameter."
      },
      {
        title: "Optics & Spectroscopy",
        text: "Optical physicists convert spectrometer slit widths and diffraction grating spacings from centimeters into nanometers to determine light emission spectra and laser wavelengths."
      },
      {
        title: "Molecular Biology & Virology",
        text: "Biochemists measure electrophoresis gel lanes and cuvette path lengths in centimeters while characterizing protein complexes, DNA strands (2 nm diameter), and lipid nanoparticles in nanometers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Missing zeros when multiplying: Multiplying by 1,000,000 instead of 10,000,000 gives a tenfold error. Remember that 1 cm = 10 mm = 10,000 µm = 10,000,000 nm.",
      "Confusing nanometers with micrometers: One micrometer is 1,000 nanometers. Centimeters to micrometers uses 10,000; centimeters to nanometers uses 10,000,000.",
      "Dividing instead of multiplying: Dividing by 10,000,000 converts nanometers to centimeters, not centimeters to nanometers.",
      "Exponent sign errors: In scientific notation, 1 cm = 10⁷ nm (positive exponent), whereas 1 nm = 10⁻⁷ cm (negative exponent)."
    ]
  },
  faqs: [
    {
      question: "How many nanometers are in one centimeter?",
      answer: "There are exactly 10,000,000 (10 million) nanometers in one centimeter. This equals 10⁷ nanometers."
    },
    {
      question: "What is the formula to convert cm to nm?",
      answer: "The formula is: Nanometers = Centimeters × 10,000,000 (or Nanometers = Centimeters × 10⁷)."
    },
    {
      question: "How do you convert nanometers back to centimeters?",
      answer: "To convert nanometers to centimeters, divide by 10,000,000 or multiply by 10⁻⁷ (0.0000001). For instance, 50,000,000 nm divided by 10,000,000 equals 5 cm."
    },
    {
      question: "How many nanometers is 0.01 cm?",
      answer: "Multiplying 0.01 cm by 10,000,000 yields exactly 100,000 nanometers (which is also 100 micrometers or 0.1 millimeters)."
    },
    {
      question: "Why are light wavelengths measured in nanometers?",
      answer: "Visible light wavelengths range from roughly 380 nm (violet) to 750 nm (red). Using nanometers allows these physical wavelengths to be expressed in convenient, memorable three-digit numbers."
    },
    {
      question: "What is the official symbol for nanometers?",
      answer: "The official SI symbol is 'nm' in lowercase without punctuation."
    },
    {
      question: "What does the prefix nano- mean?",
      answer: "The prefix 'nano-' comes from the Greek 'nanos' meaning dwarf. In the metric system, it represents a factor of 10⁻⁹ (one billionth)."
    },
    {
      question: "Is this conversion mathematically exact?",
      answer: "Yes. Because both units are exact decimal multiples of the SI meter (10⁻² m and 10⁻⁹ m), the factor 10⁷ is mathematically exact."
    }
  ],
  relatedList: [
    { label: "Nanometer to Centimeter", from: "nanometer", to: "centimeter" },
    { label: "Centimeter to Micrometer", from: "centimeter", to: "micrometer" },
    { label: "Centimeter to Millimeter", from: "centimeter", to: "millimeter" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Meter to Nanometer", from: "meter", to: "nanometer" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-3 - Quantities and units — Space and time."
  ]
};
