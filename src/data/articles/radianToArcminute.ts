import { CustomArticleData } from "./types";

export const radianToArcminute: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "arcminute",
  seoTitle: "Radian to Arcminute Conversion (rad to ') | UnitsConvertors.com",
  metaDescription: "Convert radians to arcminutes (') accurately using the formula (arcminutes = rad × 10,800 / π). Learn astronomy, optics resolution, worked examples, and FAQs.",
  h1: "Radian to Arcminute Conversion",
  introduction: [
    "The radian (rad) and the arcminute (symbol: ', prime mark, also known as minute of arc or MOA) span the analytical SI unit of plane angle and the fine sexagesimal angular subdivision. While a full circle contains $2\\pi$ radians (approximately $6.28318530718$ rad), it contains $21,600$ arcminutes ($360^\\circ \\times 60$).",
    "Converting radians to arcminutes requires multiplying the angle in radians by $10,800 / \\pi$ (approximately $3,437.746770784$). For example, $1$ radian equals approximately $3,437.75$ arcminutes, and a small angular offset of $0.001$ radians corresponds to roughly $3.44$ arcminutes.",
    "Radian-to-arcminute conversions are indispensable in astronomy, optical telescope diffraction limit calculations, missile guidance, and rifle scope elevation click adjustments. This guide details conversion formulas, optical rangefinding examples, lookup tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert radians to arcminutes, multiply the radian value by 10,800 / π (approx. 3,437.74677). For example, 0.01 radians equals 0.01 × 3,437.75 = 34.38 arcminutes (34.38').",
    formulaDisplay: "Arcminutes (') = Radians (rad) × (10,800 / π) ≈ Radians × 3,437.74677",
    subtext: "1 Radian ≈ 3,437.74677 Arcminutes (') | π Radians = 10,800 Arcminutes | 2π Radians = 21,600 Arcminutes"
  },
  aboutSourceUnit: {
    title: "What is a Radian (rad)?",
    text: "A radian (symbol: rad) is the SI derived unit of plane angle, defined as the ratio of subtended arc length to circle radius ($1\\text{ rad} = 1\\text{ m/m}$)."
  },
  aboutTargetUnit: {
    title: "What is an Arcminute (')?",
    text: "An arcminute (symbol: ', prime mark) is a unit of angle equal to 1/60th of a degree or 1/21,600th of a full circle. In rifle optics, 1 MOA equals approximately 1.047 inches at 100 yards."
  },
  relationship: "A full circle equals $2\\pi$ radians or 21,600 arcminutes. Simplifying $21,600 / 2\\pi$ gives the exact factor $10,800 / \\pi \\approx 3,437.746770784$ arcminutes per radian.",
  relationshipTitle: "Fundamental Radian to Arcminute Equivalents",
  relationshipItems: [
    { label: "0.001 rad (1 milliradian)", value: "3.438' (Arcminutes)" },
    { label: "0.01 rad Step Angle", value: "34.377' (Arcminutes)" },
    { label: "0.1 rad Large Beam Offset", value: "343.775' (Arcminutes)" },
    { label: "π / 180 rad (1° Degree)", value: "60' (Arcminutes)" },
    { label: "1.0 rad Unit Angle", value: "3,437.747' (Arcminutes)" },
    { label: "π rad (180° Straight Angle)", value: "10,800' (Arcminutes)" }
  ],
  formula: {
    text: "Multiply the angle in radians by 10,800 and divide by pi (π).",
    math: "Angle (') = \\text{Angle (rad)} × \\frac{10,800}{\\pi}",
    subtext: "Exact mathematical factor: 10,800/π. Decimal multiplier: 3,437.746770784."
  },
  formulaTitle: "Radian to Arcminute Conversion Formula",
  practicalTip: {
    title: "Milliradian (mrad) to MOA Shortcut",
    text: "In long-range shooting, marksmen convert between milliradians (mrad) and arcminutes (MOA). Since 1 rad ≈ 3,437.75 MOA, 1 mrad (0.001 rad) = 3.43775 MOA. A quick field approximation is: 1 mrad ≈ 3.44 MOA."
  },
  expertNote: {
    title: "Subtended Arc Length Rule",
    text: "For an angle $\\theta$ in radians, subtended arc length $s = r \\cdot \\theta$. When converted to arcminutes ('), $s = r \\cdot (\\theta_{\\text{arcmin}} / 3,437.75)$. At 100 yards, 1 arcminute subtends $3,600 \\text{ inches} / 3,437.75 = 1.047197 \\text{ inches}$."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Convert 0.005 Radians to Arcminutes",
        subtitle: "Calculate arcminutes for a laser beam divergence of 0.005 rad.",
        steps: [
          "Identify radian value: 0.005 rad.",
          "Apply formula: Arcminutes = 0.005 × (10,800 / π).",
          "Calculate: 0.005 × 3,437.74677 = 17.1887.",
          "Final Result: 0.005 radians equals approximately 17.19 arcminutes (17.19')."
        ]
      },
      {
        title: "Example 2: Convert π/180 Radians (1°) to Arcminutes",
        subtitle: "Convert π/180 radians to arcminutes.",
        steps: [
          "Identify radian value: π/180 rad.",
          "Apply formula: Arcminutes = (π/180) × (10,800 / π).",
          "Cancel π: 10,800 / 180 = 60.",
          "Final Result: π/180 radians equals exactly 60 arcminutes (60')."
        ]
      },
      {
        title: "Example 3: Convert 0.1 Radians to Arcminutes",
        subtitle: "Convert 0.1 radians to arcminutes.",
        steps: [
          "Identify radian value: 0.1 rad.",
          "Apply formula: Arcminutes = 0.1 × (10,800 / π).",
          "Calculate: 0.1 × 3,437.74677 = 343.7747.",
          "Final Result: 0.1 radians equals approximately 343.77 arcminutes."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Arcminute Conversion Reference Table",
    headers: ["Radians (rad)", "Exact π Value", "Arcminutes (')", "Degrees Equivalent", "Practical Context"],
    rows: [
      { fromVal: "0.000291 rad", toVal: "π / 10,800", extra: "1.0'", extra2: "0.01667°", extra3: "1 arcminute benchmark angle" },
      { fromVal: "0.001000 rad", toVal: "1 mrad", extra: "3.4378'", extra2: "0.05730°", extra3: "1 milliradian reticle step" },
      { fromVal: "0.008727 rad", toVal: "π / 360", extra: "30.0'", extra2: "0.5000°", extra3: "Apparent angular diameter of Sun and Moon" },
      { fromVal: "0.017453 rad", toVal: "π / 180", extra: "60.0'", extra2: "1.0000°", extra3: "One degree angular span" },
      { fromVal: "0.100000 rad", toVal: "0.1 rad", extra: "343.775'", extra2: "5.7296°", extra3: "5.7-degree optical sweep angle" },
      { fromVal: "0.261799 rad", toVal: "π / 12", extra: "900.0'", extra2: "15.0000°", extra3: "1 hour Earth axial rotation angle" },
      { fromVal: "1.000000 rad", toVal: "1 rad", extra: "3,437.747'", extra2: "57.2958°", extra3: "Unit radius arc length angle" },
      { fromVal: "1.570796 rad", toVal: "π / 2", extra: "5,400.0'", extra2: "90.0000°", extra3: "Perpendicular right angle" },
      { fromVal: "3.141593 rad", toVal: "π", extra: "10,800.0'", extra2: "180.0000°", extra3: "Straight line angle" },
      { fromVal: "6.283185 rad", toVal: "2π", extra: "21,600.0'", extra2: "360.0000°", extra3: "Complete circular revolution" }
    ]
  },
  applications: {
    title: "Optical & Navigational Applications",
    items: [
      {
        title: "Astronomy & Optical Telescope Resolution",
        text: "Diffraction limits ($\theta = 1.22 \\lambda / D$) calculated in analytical radians are converted into arcminutes and arcseconds for observational reporting."
      },
      {
        title: "Laser Pointer Divergence & Targeting",
        text: "Industrial laser diode beam divergence parameters specified in milliradians are converted to arcminute footprint diameters."
      },
      {
        title: "Long-Range Marksmanship Optics",
        text: "Shooters translate windage and elevation holdovers between mrad scope reticles and MOA dial turrets."
      },
      {
        title: "Celestial & Marine Navigation",
        text: "Sextant sight reduction algorithms compute spherical trigonometry in radians and output geographical position lines in arcminutes (nautical miles)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Radians to Arcminutes",
    items: [
      "Dividing by 3,437.75 instead of multiplying when converting radians to arcminutes.",
      "Confusing arcminutes (angle, symbol ') with minutes of time or arcseconds (\").",
      "Confusing milliradians (mrad = 0.001 rad) with radians.",
      "Forgetting that 1 arcminute equals 60 arcseconds."
    ]
  },
  faqs: [
    {
      question: "How do you convert radians to arcminutes?",
      answer: "Multiply the radian value by 10,800 / π (approx. 3,437.74677). For example, 0.01 rad × (10,800 / π) = 34.38 arcminutes."
    },
    {
      question: "How many arcminutes are in 1 radian?",
      answer: "There are approximately 3,437.74677 arcminutes in 1 radian."
    },
    {
      question: "How many arcminutes are in π radians?",
      answer: "There are exactly 10,800 arcminutes in π radians (180 degrees × 60)."
    },
    {
      question: "How many arcminutes are in 2π radians?",
      answer: "There are exactly 21,600 arcminutes in 2π radians (360 degrees × 60)."
    },
    {
      question: "How many MOA (arcminutes) is 1 mrad (milliradian)?",
      answer: "1 mrad (0.001 rad) equals approximately 3.43775 MOA (arcminutes)."
    },
    {
      question: "What is the symbol for arcminute?",
      answer: "The symbol for arcminute is the prime mark ('), as in 30' (30 arcminutes)."
    },
    {
      question: "What is 0.1 radians in arcminutes?",
      answer: "0.1 radians equals approximately 343.77 arcminutes."
    },
    {
      question: "Why is 10,800/π used to convert radians to arcminutes?",
      answer: "Because 2π radians = 21,600 arcminutes. Dividing 21,600 by 2π yields 10,800 / π."
    }
  ],
  relatedList: [
    { label: "Degree to Arcminute", from: "degree", to: "arcminute" },
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Degree to Arcsecond", from: "degree", to: "arcsecond" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "International Astronomical Union (IAU) Standards for Astronomical Units",
    "ISO 80000-3: Space and Time Quantities — Plane Angle Units",
    "NIST Handbook 44: Specifications and Tolerances for Angle Measuring Devices"
  ]
};
