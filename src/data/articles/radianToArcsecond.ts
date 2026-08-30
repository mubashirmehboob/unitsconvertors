import { CustomArticleData } from "./types";

export const radianToArcsecond: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "arcsecond",
  seoTitle: "Radian to Arcsecond Converter (rad to arcsec) | UnitsConvertors.com",
  metaDescription: "Convert radians to arcseconds (rad to \") with exact astronomical precision. Learn the parsec derivation (1 rad ≈ 206,265 arcsec), telescope resolution formulas, and tables.",
  h1: "Radian to Arcsecond Converter",
  introduction: [
    "Converting radians to arcseconds connects the theoretical SI standard of angular measurement with the observational precision required in modern astronomy, satellite geodesy, telescope optics, and semiconductor photolithography.",
    "While the radian (rad) is the natural unit of angle in calculus and physics derived from the ratio of circular arc length to radius, the arcsecond (symbol: \", arcsec, or second of arc) divides a single sexagesimal degree into 3,600 subdivisions, or 1/1,296,000th of a complete circle.",
    "Because a full circular rotation contains $2\\pi$ radians and $1,296,000$ arcseconds, converting radians to arcseconds requires multiplying the radian value by $648,000 / \\pi$, which yields approximately $206,264.806247$ arcseconds per radian. This fundamental constant ($206,265$) also forms the direct geometric definition of the parsec in astronomical distance measurements. This guide explains the exact mathematical derivation, telescope angular resolution calculations, worked examples, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert radians to arcseconds, multiply the angle in radians by 648,000 / π (approximately 206,264.80625). For example, a laser beam divergence of 0.0001 radians equals approximately 20.63 arcseconds.",
    formulaDisplay: "\\text{Arcseconds (\")} = \\text{Radians (rad)} \\times \\frac{648,000}{\\pi} \\approx \\text{Radians} \\times 206,264.80625",
    subtext: "1 Radian ≈ 206,264.80625 Arcseconds (\") | 1 Arcsecond ≈ 4.8481368 × 10⁻⁶ Radians"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI derived unit of plane angle. It is mathematically dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc whose length equals the circle's radius. A full circle spans exactly $2\\pi$ radians (approximately 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Arcsecond (\")",
    text: "An arcsecond (symbol: \", arcsec, or second of arc) is a subunit of the sexagesimal angular system equal to 1/60th of an arcminute or 1/3,600th of a degree. A full circle contains exactly 1,296,000 arcseconds. It is the primary unit for measuring telescope resolving power, stellar parallax, and fine alignment."
  },
  relationship: "A full circle equals $2\\pi$ radians and $360^\\circ \\times 3,600 = 1,296,000$ arcseconds. Equating these two values yields the conversion ratio: $1,296,000 / (2\\pi) = 648,000 / \\pi \\approx 206,264.806247096$ arcseconds per radian. In astronomy, this number ($206,265$) establishes that an object 1 Astronomical Unit (AU) wide subtends exactly 1 arcsecond at a distance of 1 parsec.",
  relationshipTitle: "Radian vs Arcsecond Scale Comparison",
  relationshipItems: [
    { label: "1 Arcsecond (1\")", value: "≈ 4.848137 × 10⁻⁶ rad" },
    { label: "1 Milliradian (1 mrad)", value: "≈ 206.2648 arcsec" },
    { label: "1 Microradian (1 µrad)", value: "≈ 0.206265 arcsec" },
    { label: "0.01 Radians", value: "≈ 2,062.65 arcsec" },
    { label: "0.1 Radians", value: "≈ 20,626.48 arcsec" },
    { label: "1 Radian (rad)", value: "≈ 206,264.81 arcsec" }
  ],
  formula: {
    text: "Multiply the angle in radians by 648,000 and divide by pi (π), or multiply directly by 206,264.806247.",
    math: "\\text{Angle (\")} = \\text{Angle (rad)} \\times \\frac{180 \\times 3600}{\\pi} = \\text{Angle (rad)} \\times \\frac{648,000}{\\pi}",
    subtext: "Inverse formula: Radians (rad) = Arcseconds (\") × (π / 648,000) ≈ Arcseconds × 4.8481368 × 10⁻⁶"
  },
  formulaTitle: "Radian to Arcsecond Mathematical Formula",
  practicalTip: {
    title: "The 206,265 Rule of Thumb",
    text: "For quick mental or field calculations, remember the constant 206,265. Multiplying any radian value by 206,265 provides arcseconds with greater than 99.999% precision, which is universally adopted by observational astronomers and optical engineers."
  },
  expertNote: {
    title: "Diffraction Limit & Angular Resolution",
    text: "Telescope diffraction limits are naturally calculated in radians via the Rayleigh criterion (θ = 1.22 λ / D, where λ is light wavelength and D is aperture diameter). Multiplying this result by 206,265 converts the theoretical optical resolution directly into arcseconds for observing deep-sky targets."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Diffraction Resolution of a 200 mm Telescope",
        subtitle: "A 200 mm (0.2 m) aperture astronomical telescope observes green light at a wavelength of 550 nm (5.5 × 10⁻⁷ m). Calculate its theoretical diffraction limit in radians and convert to arcseconds.",
        steps: [
          "Apply the Rayleigh criterion: θ (rad) = 1.22 × (5.5 × 10⁻⁷ m) / 0.2 m = 3.355 × 10⁻⁶ radians.",
          "Apply conversion factor: θ (\") = (3.355 × 10⁻⁶ rad) × (648,000 / π).",
          "Perform calculation: 3.355 × 10⁻⁶ × 206,264.806 = 0.6920 arcseconds.",
          "Final Result: The telescope has a theoretical resolving limit of approximately 0.692 arcseconds."
        ]
      },
      {
        title: "Example 2: Laser Pointer Beam Divergence",
        subtitle: "A precision alignment laser diode exhibits a half-angle beam divergence of 0.5 milliradians (0.0005 rad). Express this divergence in arcseconds.",
        steps: [
          "State the value: 0.0005 radians.",
          "Multiply by conversion factor: 0.0005 × 206,264.80625 = 103.1324 arcseconds.",
          "Final Result: The beam divergence is approximately 103.13 arcseconds (or about 1.72 arcminutes)."
        ]
      },
      {
        title: "Example 3: Space Telescope Pointing Stability",
        subtitle: "A satellite attitude control sensor detects an angular drift rate of 1.2 microradians (1.2 × 10⁻⁶ rad). Convert this pointing jitter to arcseconds.",
        steps: [
          "State value in radians: 1.2 × 10⁻⁶ rad.",
          "Multiply by constant: 1.2 × 10⁻⁶ × 206,264.806 = 0.2475 arcseconds.",
          "Final Result: The satellite pointing jitter corresponds to approximately 0.248 arcseconds."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Arcsecond Conversion Reference Table",
    headers: ["Radians (rad)", "Arcseconds (\")", "Arcminutes (')", "Degrees (°)", "Practical Application"],
    rows: [
      { fromVal: "1 µrad (10⁻⁶ rad)", toVal: "0.2063\"", extra: "0.0034'", extra2: "0.000057°", extra3: "Hubble Space Telescope fine guidance" },
      { fromVal: "4.848 µrad", toVal: "1.0000\"", extra: "0.0167'", extra2: "0.000278°", extra3: "Exact 1.0 arcsecond standard" },
      { fromVal: "10 µrad", toVal: "2.0626\"", extra: "0.0344'", extra2: "0.000573°", extra3: "Ground-based atmospheric seeing limit" },
      { fromVal: "100 µrad (0.1 mrad)", toVal: "20.6265\"", extra: "0.3438'", extra2: "0.005730°", extra3: "Laser rangefinder beam divergence" },
      { fromVal: "1 mrad (0.001 rad)", toVal: "206.2648\"", extra: "3.4377'", extra2: "0.057296°", extra3: "Rifle scope reticle mil mark" },
      { fromVal: "0.005 rad", toVal: "1,031.32\"", extra: "17.189'", extra2: "0.286479°", extra3: "Apparent solar/lunar radius" },
      { fromVal: "0.01745 rad", toVal: "3,600.00\"", extra: "60.000'", extra2: "1.000000°", extra3: "Exact 1.0 degree span" },
      { fromVal: "0.1 rad", toVal: "20,626.48\"", extra: "343.77'", extra2: "5.729578°", extra3: "Geodetic survey traverse segment" },
      { fromVal: "0.5 rad", toVal: "103,132.40\"", extra: "1,718.87'", extra2: "28.64789°", extra3: "Robotic arm joint displacement" },
      { fromVal: "1.0 rad", toVal: "206,264.81\"", extra: "3,437.75'", extra2: "57.29578°", extra3: "1.0 Radian fundamental unit" },
      { fromVal: "π/2 rad (1.5708 rad)", toVal: "324,000.00\"", extra: "5,400.00'", extra2: "90.00000°", extra3: "Exact right angle" }
    ]
  },
  applications: {
    title: "Scientific, Astronomical, & Industrial Applications",
    items: [
      {
        title: "Observational Astronomy & Parallax",
        text: "Astronomers convert mathematical parsec trigonometry angles from radians to arcseconds to measure distances to nearby stars (d = 1/p, where p is parallax in arcseconds)."
      },
      {
        title: "Optical Physics & Laser Engineering",
        text: "Diffraction integrals and Fourier optical formulas yield beam divergence in radians, which engineers convert to arcseconds for mirror gimbal calibration."
      },
      {
        title: "Satellite Attitude Determination & Orbit Control (AOCS)",
        text: "Star trackers measure celestial body orientations in radians and report pointing errors in arcseconds for high-resolution earth imaging."
      },
      {
        title: "Semiconductor Lithography & Metrology",
        text: "Wafer stepper alignment stages use laser interferometers calculating nanoscale angular deviations converted to arcseconds for sub-nanometer overlay accuracy."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Arcsecond Conversions",
    items: [
      "Multiplying by 3,600 instead of 206,265 (forgetting that 3,600 is the factor for degrees to arcseconds, not radians to arcseconds).",
      "Confusing arcseconds (angle, 1/3600°) with seconds of time (1/3600 hour, where 1 second of Earth rotation time equals 15 arcseconds).",
      "Using single prime (') for arcseconds instead of double prime (\") or arcsec notation.",
      "Losing floating-point precision on micro-radian values by rounding the conversion factor too early."
    ]
  },
  faqs: [
    {
      question: "How many arcseconds are in 1 radian?",
      answer: "There are approximately 206,264.80625 arcseconds in 1 radian (calculated as 648,000 / π)."
    },
    {
      question: "Why is 206,265 such an important number in astronomy?",
      answer: "Because 1 radian contains 206,264.806 arcseconds, an object spanning 1 Astronomical Unit (the Earth-Sun distance) at a distance of 206,265 AU subtends exactly 1 arcsecond. This distance is defined as 1 parsec (3.26 light-years)."
    },
    {
      question: "What is the formula to convert radians to arcseconds?",
      answer: "The exact formula is: Arcseconds (\") = Radians × (648,000 / π) = Radians × (180 × 3,600 / π)."
    },
    {
      question: "How do I convert 1 milliradian (0.001 rad) to arcseconds?",
      answer: "Multiply 0.001 by 206,264.80625: 0.001 × 206,264.80625 = 206.2648 arcseconds (approx. 3.44 arcminutes)."
    },
    {
      question: "How many radians are in 1 arcsecond?",
      answer: "1 arcsecond equals π / 648,000 radians, which is approximately 4.848136811 × 10⁻⁶ radians (4.848 microradians)."
    },
    {
      question: "What is the difference between an arcsecond and an arcminute?",
      answer: "An arcminute is 1/60th of a degree (60 arcseconds), while an arcsecond is 1/3,600th of a degree. There are 60 arcseconds in every arcminute."
    },
    {
      question: "How does telescope resolution relate to radians and arcseconds?",
      answer: "Diffraction formulas like the Rayleigh criterion compute angular resolution θ = 1.22 λ / D in radians. Multiplying by 206,265 gives the resolution in arcseconds."
    },
    {
      question: "What is the symbol for arcseconds?",
      answer: "The official symbol is the double prime mark (\"), or the abbreviation 'arcsec' or 'asec'."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Arcminute", from: "radian", to: "arcminute" },
    { label: "Degree to Arcsecond", from: "degree", to: "arcsecond" },
    { label: "Radian to Revolution", from: "radian", to: "revolution" }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Base and Derived Units.",
    "IAU (International Astronomical Union) Standards on Astrometry and Parallax.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
