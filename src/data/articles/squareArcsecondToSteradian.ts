import { CustomArticleData } from "./types";

export const squareArcsecondToSteradianArticle: CustomArticleData = {
  fromUnitId: "square-arcsec",
  toUnitId: "steradian",
  seoTitle: "Square Arcsecond to Steradian Converter (arcsec² to sr) | UnitsConvertors.com",
  metaDescription: "Convert square arcseconds to steradians (arcsec² to sr) with high precision. Learn the exact geometric formula, telescope pixel flux examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcsec-to-steradian",
  h1: "Square Arcsecond to Steradian Converter",
  introduction: [
    "Converting square arcseconds (arcsec² or sq arcsec) to steradians (sr) connects micro-scale astronomical resolution with the coherent SI unit of solid angle. While astrophysicists, spectrograph designers, and planetary scientists measure telescope detector pixel pitches, double star orbits, and atmospheric seeing disks in square arcseconds, optical radiative transfer equations and photometric equations require solid angles expressed in steradians.",
    "Because one degree equals 3,600 arcseconds and one radian contains 648,000/π arcseconds, one steradian (which equals one square radian) encompasses (648,000/π)² or 419,904,000,000/π² square arcseconds (approximately 4.254517 × 10¹⁰ arcsec²). Converting square arcseconds to steradians requires multiplying by π²/419,904,000,000 (approximately 2.350443 × 10⁻¹¹ sr). Understanding this conversion is critical for translating astronomical surface brightness into physical spectral radiance, flux density, and photon count rates."
  ],
  quickAnswer: {
    text: "To convert square arcseconds (arcsec²) to steradians (sr), multiply the square arcsecond value by π² / 419,904,000,000 (approximately 2.350443 × 10⁻¹¹, or divide by 42,545,170,296). For example, 1,000,000 square arcseconds equals approximately 2.3504 × 10⁻⁵ steradians.",
    formulaDisplay: "Solid Angle (sr) = Area (arcsec²) × (π / 648,000)² ≈ Area (arcsec²) × 2.350443 × 10⁻¹¹",
    subtext: "1 arcsec² ≈ 2.350443 × 10⁻¹¹ sr | 1 sr ≈ 42,545,170,296 arcsec² ≈ 3,282.806 deg²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (symbol: arcsec² or sq arcsec) is an angular area unit defined as a square measuring 1 arcsecond by 1 arcsecond (1/3,600 of a degree per side, or 1/12,960,000 of a square degree). It is the premier standard in optical astronomy for telescope pixel scales, resolving power limits, and night sky background surface brightness."
  },
  aboutTargetUnit: {
    title: "About the Steradian (sr)",
    text: "The steradian (symbol: sr) is the SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a sphere of radius r by a surface area of r² on the sphere's surface. A complete closed sphere contains exactly 4π steradians (approximately 12.56637 sr)."
  },
  relationship: "One radian contains exactly 180 × 3,600 / π = 648,000 / π arcseconds (approximately 206,264.80625 arcsec). Squaring this conversion ratio establishes that 1 steradian (1 rad²) equals exactly 419,904,000,000 / π² square arcseconds (≈ 42,545,170,296.15 arcsec²). Inverting this ratio yields the exact conversion factor: π² / 419,904,000,000 ≈ 2.350443 × 10⁻¹¹ steradians per square arcsecond.",
  relationshipTitle: "Geometric Derivation & High-Precision Ratio",
  relationshipItems: [
    { label: "1 arcsec² in sr", value: "≈ 2.350443 × 10⁻¹¹ sr" },
    { label: "1 sr in arcsec²", value: "≈ 42,545,170,296 arcsec² (4.255 × 10¹⁰)" },
    { label: "1 arcmin² in arcsec²", value: "3,600 arcsec²" },
    { label: "Full Sphere (4π sr)", value: "≈ 5.346384 × 10¹¹ arcsec²" }
  ],
  formula: {
    text: "Multiply the area in square arcseconds by π² / 419,904,000,000 (or divide by 42,545,170,296) to calculate the equivalent solid angle in steradians.",
    math: "\\Omega\\text{ (sr)} = \\text{Area (arcsec}^2\\text{)} \\times \\left(\\frac{\\pi}{648,000}\\right)^2 = \\text{Area (arcsec}^2\\text{)} \\times \\frac{\\pi^2}{419,904,000,000}",
    subtext: "Inverse formula: Area (arcsec²) = Ω (sr) × (419,904,000,000 / π²)"
  },
  formulaTitle: "Square Arcsecond to Steradian Conversion Formula",
  practicalTip: {
    title: "Telescope Pixel Flux Conversion Tip",
    text: "To convert pixel surface brightness from Janskys per beam or Janskys per pixel into physical radiance (W·m⁻²·Hz⁻¹·sr⁻¹), multiply the flux per pixel by the number of pixels per steradian, which is $1 / (\\Omega_{\\text{pixel}} \\times 2.350443 \\times 10^{-11})$. For a 0.2 arcsec pixel, $\\Omega_{\\text{pixel}} = 0.04\\text{ arcsec}^2 = 9.4018 \\times 10^{-13}\\text{ sr}$."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hubble Space Telescope Detector Pixel",
        subtitle: "A high-resolution camera pixel on Hubble spans 0.04 square arcseconds (0.2\" × 0.2\"). Calculate its solid angle in steradians.",
        steps: [
          "State starting area: 0.04 arcsec².",
          "Identify conversion factor: 1 arcsec² ≈ 2.350443 × 10⁻¹¹ sr.",
          "Multiply: 0.04 × 2.350443 × 10⁻¹¹ sr.",
          "Calculate: 9.4018 × 10⁻¹³ sr.",
          "Conclude: The camera pixel covers 9.4018 × 10⁻¹³ steradians."
        ]
      },
      {
        title: "Example 2: Atmospheric Seeing Disk",
        subtitle: "A ground-based telescope observing under 1.2 arcsecond seeing has a stellar core disk spanning 1.13 square arcseconds. Convert to steradians.",
        steps: [
          "Identify area: 1.13 arcsec².",
          "Apply formula: 1.13 × 2.350443 × 10⁻¹¹ sr.",
          "Compute result: 2.6560 × 10⁻¹¹ sr.",
          "Final Result: The seeing disk subtends 2.656 × 10⁻¹¹ steradians."
        ]
      },
      {
        title: "Example 3: One Square Arcminute",
        subtitle: "A deep-sky aperture covers 3,600 square arcseconds (1 square arcminute). Convert to steradians.",
        steps: [
          "State area: 3,600 arcsec².",
          "Multiply: 3,600 × 2.350443 × 10⁻¹¹ sr.",
          "Calculate: 8.4616 × 10⁻⁸ sr.",
          "Result: 3,600 square arcseconds equals 8.4616 × 10⁻⁸ steradians."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcsecond to Steradian Conversion Reference Table",
    headers: ["Square Arcseconds (arcsec²)", "Steradians (sr)", "Square Arcminutes (arcmin²)", "Scientific Notation"],
    rows: [
      { fromVal: "1 arcsec²", toVal: "0.000000000024 sr", extra: "0.000278 arcmin²", extra2: "2.3504 × 10⁻¹¹ sr" },
      { fromVal: "10 arcsec²", toVal: "0.000000000235 sr", extra: "0.002778 arcmin²", extra2: "2.3504 × 10⁻¹⁰ sr" },
      { fromVal: "100 arcsec²", toVal: "0.000000002350 sr", extra: "0.027778 arcmin²", extra2: "2.3504 × 10⁻⁹ sr" },
      { fromVal: "1,000 arcsec²", toVal: "0.000000023504 sr", extra: "0.277778 arcmin²", extra2: "2.3504 × 10⁻⁸ sr" },
      { fromVal: "3,600 arcsec² (1 arcmin²)", toVal: "0.000000084616 sr", extra: "1.000000 arcmin²", extra2: "8.4616 × 10⁻⁸ sr" },
      { fromVal: "10,000 arcsec²", toVal: "0.000000235044 sr", extra: "2.777778 arcmin²", extra2: "2.3504 × 10⁻⁷ sr" },
      { fromVal: "50,000 arcsec²", toVal: "0.000001175222 sr", extra: "13.88889 arcmin²", extra2: "1.1752 × 10⁻⁶ sr" },
      { fromVal: "100,000 arcsec²", toVal: "0.000002350443 sr", extra: "27.77778 arcmin²", extra2: "2.3504 × 10⁻⁶ sr" },
      { fromVal: "1,000,000 arcsec²", toVal: "0.000023504431 sr", extra: "277.7778 arcmin²", extra2: "2.3504 × 10⁻⁵ sr" },
      { fromVal: "12,960,000 arcsec² (1 deg²)", toVal: "0.000304617420 sr", extra: "3,600.000 arcmin²", extra2: "3.0462 × 10⁻⁴ sr" },
      { fromVal: "100,000,000 arcsec²", toVal: "0.002350443054 sr", extra: "27,777.78 arcmin²", extra2: "2.3504 × 10⁻³ sr" },
      { fromVal: "1,000,000,000 arcsec²", toVal: "0.023504430539 sr", extra: "277,777.8 arcmin²", extra2: "2.3504 × 10⁻² sr" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "James Webb & Hubble Pixel Radiometry",
        text: "Converting detector pixel solid angles from arcsec² to steradians to derive absolute surface brightness and calibrate spectrometer slit throughput."
      },
      {
        title: "Interferometric Radio Astronomy Synthesized Beams",
        text: "Calculating the solid angle of radio telescope synthesized dirty beams (e.g., ALMA, VLA) to convert flux density in Janskys per beam into brightness temperature in Kelvin."
      },
      {
        title: "Cosmological Point Source Confusion Limits",
        text: "Modeling the probability of source overlap within high-resolution optical and infrared imaging beams."
      },
      {
        title: "Laser Satellite Communication Uplink Beams",
        text: "Sizing ground-to-space optical communication beam divergence angles down to micro-steradian solid angle cones."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcsec² to sr",
    items: [
      "Using linear conversion: Dividing by 206,265 instead of $(206,265)^2 = 42,545,170,296$. Omitting the square causes an error of more than five orders of magnitude.",
      "Confusing square arcseconds with square arcminutes: One square arcminute contains 3,600 square arcseconds. Multiplying by $8.46 \\times 10^{-8}$ instead of $2.35 \\times 10^{-11}$ produces an error factor of 3,600.",
      "Truncating negative exponents in software: Forgetting that the factor is $10^{-11}$, not $10^{-8}$ or $10^{-9}$.",
      "Confusing radius with diameter: For a circular telescope beam of diameter $\\theta$ arcseconds, the solid angle is $\\pi (\\theta / 2)^2 \\times 2.350443 \\times 10^{-11}\\text{ sr}$, not $\\pi \\theta^2$."
    ]
  },
  faqs: [
    {
      question: "How many steradians are in 1 square arcsecond?",
      answer: "There are approximately 2.350443 × 10⁻¹¹ steradians in 1 square arcsecond (or exactly π² / 419,904,000,000 sr)."
    },
    {
      question: "What is the formula to convert square arcseconds to steradians?",
      answer: "The formula is: Solid Angle (sr) = Area (arcsec²) × (π / 648,000)², which simplifies to Area (arcsec²) × (π² / 419,904,000,000) or Area (arcsec²) ÷ 42,545,170,296."
    },
    {
      question: "How many square arcseconds are in 1 steradian?",
      answer: "There are approximately 42,545,170,296 square arcseconds in 1 steradian (exactly 419,904,000,000 / π² arcsec²)."
    },
    {
      question: "What is the solid angle of a 1 arcsecond seeing disk in steradians?",
      answer: "A circular disk with a 1 arcsecond diameter covers an area of $\\pi \\times (0.5)^2 \\approx 0.7854\\text{ arcsec}^2$, which corresponds to approximately $1.846 \\times 10^{-11}\\text{ steradians}$."
    },
    {
      question: "How does a square arcsecond relate to a square degree?",
      answer: "Because 1 degree equals 3,600 arcseconds, 1 square degree contains exactly $3,600 \\times 3,600 = 12,960,000$ square arcseconds. Therefore, 1 square arcsecond equals 1/12,960,000 of a square degree."
    },
    {
      question: "Why is the conversion factor so small?",
      answer: "An arcsecond is 1/3,600 of a degree (about 4.85 micro-radians). Squaring such a minute angle creates an exceptionally small fractional area compared to 1 full steradian."
    },
    {
      question: "What is 1,000,000 square arcseconds in steradians?",
      answer: "1,000,000 square arcseconds equals approximately 2.3504 × 10⁻⁵ steradians ($10^6 \\times 2.350443 \\times 10^{-11}\\text{ sr}$)."
    },
    {
      question: "How many square arcseconds are in 1 square arcminute?",
      answer: "One square arcminute contains exactly 3,600 square arcseconds ($60 \\times 60 = 3,600$)."
    },
    {
      question: "How many square arcseconds cover the entire celestial sphere?",
      answer: "A complete sphere encompasses 4π steradians, which equals approximately 5.346384 × 10¹¹ square arcseconds (or exactly 1,679,616,000,000 / π arcsec²)."
    },
    {
      question: "Is the steradian an exact SI unit?",
      answer: "Yes, the steradian is the official coherent SI derived unit of solid angle ($m^2 / m^2$)."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" },
    { label: "Square Arcsecond to Square Arcminute", from: "square-arcsec", to: "square-arcmin" },
    { label: "Square Arcsecond to Square Degree", from: "square-arcsec", to: "square-degree" },
    { label: "Square Arcsecond to Spat", from: "square-arcsec", to: "spat" },
    { label: "Square Arcsecond to Square Radian", from: "square-arcsec", to: "square-radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI), 9th Edition — Derived Units and Steradian.",
    "International Astronomical Union (IAU): Sky Coordinate and Pixel Photometry Conventions.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
