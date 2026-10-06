import { CustomArticleData } from "./types";

export const galAccelerationToMilePerHourSecond: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "mile-per-hour-second",
  seoTitle: "Gal to MPH/s Converter (Gal to mph/s) | UnitsConvertors.com",
  metaDescription: "Convert gal (Gal) to miles per hour per second (mph/s) with exact acceleration formulas, automotive dynamics, transit braking examples, and tables.",
  h1: "Gal to MPH/s Converter",
  introduction: [
    "The gal (symbol: Gal) and the mile per hour per second (mph/s) quantify rate of velocity change across two foundational technical domains: geophysical seismology and North American transportation engineering. The gal is the primary acceleration unit of the centimetre-gram-second (CGS) system, defined as exactly 1 centimeter per second squared (1 cm/s² or 0.01 m/s²). The mile per hour per second expresses how many miles per hour a vehicle gains or sheds each second, serving as the standard operational acceleration metric across United States highway engineering, vehicle testing, and rail transit networks.",
    "Bridging the gap between Gal and mph/s is critical for transit authorities and infrastructure operators across seismically active regions of the United States. Agencies such as California's BART, Los Angeles Metro, and commuter rail systems integrate USGS ShakeMap accelerometers reporting in Gal with automated train control (ATC) algorithms calibrated in mph/s. When trackbed sensors register severe shaking, automated systems initiate emergency brake applications measured in mph/s to bring high-speed trains to a controlled standstill.",
    "This engineering guide provides the exact mathematical derivation linking the gal to mph/s, illustrates practical automotive and railway calculations, supplies reference tables, and resolves common questions on unit conversion."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to miles per hour per second (mph/s), divide by 44.704 (or multiply by approximately 0.0223694). For example, a ground acceleration of 100 Gal equals approximately 2.2369 mph/s.",
    formulaDisplay: "\\text{mph/s} = \\frac{\\text{Gal}}{44.704} = \\text{Gal} \\times 0.02236936",
    subtext: "1 mph/s equals exactly 44.704 Gal (0.44704 m/s²). 1 Gal equals approximately 0.0223694 mph/s."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, named in honor of Galileo Galilei) is defined as exactly 1 cm/s² (10⁻² m/s²). In seismology and earthquake engineering, strong-motion accelerograms and peak ground acceleration (PGA) are reported in Gal. Standard Earth surface gravity equals approximately 980.665 Gal."
  },
  aboutTargetUnit: {
    title: "Understanding the Mile per Hour per Second (mph/s)",
    text: "The mile per hour per second (symbol: mph/s) is the customary American unit for vehicle acceleration and deceleration. An acceleration rate of 1 mph/s means a vehicle's speed increases by one mile per hour every second. Because 1 mph equals exactly 0.44704 meters per second, 1 mph/s equals exactly 0.44704 m/s² (or 44.704 Gal)."
  },
  relationship: "The relationship between Gal and mph/s is based on the international yard and pound agreement of 1959, which defines 1 mile as exactly 1,609.344 meters. Because 1 hour contains 3,600 seconds, 1 mph/s equals 1,609.344 / 3,600 = 0.44704 m/s². Since 1 Gal = 0.01 m/s², exactly 44.704 Gal make up 1 mph/s. Therefore, 1 Gal equals 1 / 44.704 ≈ 0.02236936 mph/s.",
  relationshipTitle: "Gal to MPH/s Exact Dimensional Equivalents",
  relationshipItems: [
    { label: "1 Gal", value: "0.022369 mph/s (Exact factor 1 / 44.704)" },
    { label: "10 Gal", value: "0.223694 mph/s (Light perceptible seismic vibration)" },
    { label: "44.704 Gal", value: "1.000000 mph/s (Exact 1.0 mph/s benchmark)" },
    { label: "100 Gal", value: "2.236936 mph/s (Moderate earthquake shaking / transit acceleration)" },
    { label: "134.112 Gal", value: "3.000000 mph/s (Standard maximum subway service braking)" },
    { label: "250 Gal", value: "5.592341 mph/s (Severe earthquake shaking / passenger car braking)" },
    { label: "980.665 Gal", value: "21.936851 mph/s (Standard Earth gravity, 1.0 g)" }
  ],
  formula: {
    text: "Divide the acceleration in Gal by 44.704 to obtain miles per hour per second (mph/s). Alternatively, multiply by 0.02236936.",
    math: "a_{(\\text{mph/s})} = \\frac{a_{(\\text{Gal})}}{44.704} = a_{(\\text{Gal})} \\times 0.02236936",
    subtext: "44.704 is an exact conversion constant derived from (1,609.344 m/mi ÷ 3,600 s/h ÷ 0.01 m/Gal)."
  },
  formulaTitle: "Gal to MPH/s Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Field Estimations",
    text: "Because 44.704 is close to 45, you can approximate mph/s in the field by multiplying the Gal value by 2 and dividing by 90 (or dividing by 45). For example, 90 Gal ÷ 45 ≈ 2.0 mph/s (exact: 2.013 mph/s, less than 1% error)."
  },
  expertNote: {
    title: "Transit Vehicle Dynamic Deceleration Envelopes",
    text: "In US transit rail operations (such as New York City Subway, BART, and Washington Metro), emergency brake rates are specified in mph/s (typically 2.5 to 3.2 mph/s). Seismometers mounted along tunnels and aerial guideways trigger automated slowdown alerts at 50 Gal (~1.12 mph/s) and emergency brake stops at 100 Gal (~2.24 mph/s) to prevent train derailment on misaligned tracks."
  },
  examples: {
    title: "Step-by-Step Engineering Calculations",
    items: [
      {
        title: "Example 1: Rail Transit Trackside Seismometer Trigger",
        subtitle: "A trackbed seismic sensor along an elevated transit line registers a peak horizontal acceleration pulse of 85 Gal. What is this acceleration in miles per hour per second?",
        steps: [
          "Identify the recorded Gal value: a = 85 Gal.",
          "Apply the conversion formula: a(mph/s) = a(Gal) ÷ 44.704.",
          "Calculate: 85 ÷ 44.704 = 1.901396 mph/s.",
          "Result: 85 Gal equals approximately 1.9014 mph/s (or ~0.85 m/s²)."
        ]
      },
      {
        title: "Example 2: Electric Vehicle 0-to-60 Benchmark Translation",
        subtitle: "A performance electric car test records an initial launch acceleration of 380 Gal on a telemetry pad. Express this initial launch rate in mph/s.",
        steps: [
          "State the launch acceleration: a = 380 Gal.",
          "Divide by 44.704: 380 ÷ 44.704.",
          "Compute: 380 ÷ 44.704 = 8.500358 mph/s.",
          "Result: 380 Gal equals approximately 8.5004 mph/s (an acceleration from 0 to 60 mph in roughly 7.06 seconds)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to MPH/s",
    headers: ["Acceleration (Gal)", "Acceleration (mph/s)", "Transportation & Seismic Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.02237", extra: "Micro-seismic background motion" },
      { fromVal: "10.0", toVal: "0.22369", extra: "Gentle elevator or passenger train roll" },
      { fromVal: "25.0", toVal: "0.55923", extra: "Mild passenger transit vehicle service brake" },
      { fromVal: "44.704", toVal: "1.00000", extra: "Exact 1.0 mph/s benchmark definition" },
      { fromVal: "50.0", toVal: "1.11847", extra: "Moderate transit acceleration (0.5 m/s²)" },
      { fromVal: "100.0", toVal: "2.23694", extra: "Rapid transit standard service brake rate (1.0 m/s²)" },
      { fromVal: "134.112", toVal: "3.00000", extra: "Heavy transit emergency brake application" },
      { fromVal: "200.0", toVal: "4.47387", extra: "Brisk passenger car acceleration (0 to 60 mph in 13.4 s)" },
      { fromVal: "400.0", toVal: "8.94775", extra: "Sports car acceleration (0 to 60 mph in 6.7 s)" },
      { fromVal: "980.665", toVal: "21.93685", extra: "Standard Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Transportation and Seismic Applications",
    items: [
      {
        title: "Automated Transit Train Protection (ATP)",
        text: "Rail transit systems in California and the Pacific Northwest convert seismic sensor inputs in Gal into mph/s deceleration profiles to program emergency stopping commands before seismic shear waves arrive."
      },
      {
        title: "Automotive Dynamometer and Track Testing",
        text: "US vehicle testing laboratories convert metric accelerograph records into mph/s to evaluate passenger jerk, traction control, and ABS stopping performance."
      },
      {
        title: "Theme Park Roller Coaster Dynamics",
        text: "Ride designers evaluate launch catapult accelerations and braking zone deceleration rates, converting G-force and CGS metric data into mph/s for operational control PLC firmware."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 44.704 instead of dividing: Multiplying converts mph/s to Gal. To convert Gal to mph/s, you must divide by 44.704 (or multiply by 0.022369).",
      "Confusing mph/s with km/h/s: 1 mph/s equals 1.609344 km/h/s. Using 0.036 instead of 0.022369 creates a 37.9% error.",
      "Assuming 1 Gal is equivalent to 1 mph/s: 1 mph/s is nearly 45 times larger than 1 Gal. Confusing the two will critically skew vehicle dynamics calculations.",
      "Ignoring the difference between velocity and acceleration: An acceleration of 2.24 mph/s changes speed by 2.24 mph only if sustained for one second. Peak ground acceleration (PGA) in earthquakes is momentary."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to mph/s?",
      answer: "Divide the acceleration in Gal by 44.704, or multiply by approximately 0.02236936. For example, 100 Gal ÷ 44.704 = 2.2369 mph/s."
    },
    {
      question: "What is 1 Gal in mph/s?",
      answer: "1 Gal is equal to approximately 0.0223694 miles per hour per second (mph/s)."
    },
    {
      question: "How many Gal make up 1 mph/s?",
      answer: "Exactly 44.704 Gal make up 1 mph/s. This exact value comes from the international definition of the mile (1,609.344 meters) and the hour (3,600 seconds)."
    },
    {
      question: "How do you convert mph/s back to Gal?",
      answer: "Multiply the mph/s value by 44.704. For example, a transit deceleration of 3.0 mph/s equals 3.0 × 44.704 = 134.112 Gal."
    },
    {
      question: "What does an acceleration of 1 mph/s mean?",
      answer: "1 mph/s means a vehicle's speed increases by one mile per hour for each second of elapsed time. In SI units, this is equal to exactly 0.44704 m/s²."
    },
    {
      question: "How many mph/s is Earth's gravity (1.0 g)?",
      answer: "Standard Earth gravity of 980.665 Gal (9.80665 m/s²) equals approximately 21.9369 mph/s (or about 32.174 ft/s²)."
    },
    {
      question: "What is a typical emergency train brake rate in mph/s?",
      answer: "In North American passenger rail transit, emergency braking rates typically range between 2.5 and 3.2 mph/s (roughly 112 to 143 Gal or 1.12 to 1.43 m/s²)."
    },
    {
      question: "Why do US transportation engineers use mph/s?",
      answer: "Speed limits, vehicle speedometers, and railway speed signals in the United States are calibrated in miles per hour (mph). Expressing acceleration in mph/s gives drivers and operators an intuitive understanding of speed gained or lost per second."
    },
    {
      question: "How many Gal is an acceleration of 0 to 60 mph in 6 seconds?",
      answer: "Accelerating from 0 to 60 mph in 6 seconds represents an average acceleration rate of 10 mph/s, which equals 10 × 44.704 = 447.04 Gal (roughly 0.456 g or 4.47 m/s²)."
    }
  ],
  relatedList: [
    { label: "Gal to KM/h/s", from: "gal-acceleration", to: "kilometer-per-hour-second" },
    { label: "Gal to Foot/sec²", from: "gal-acceleration", to: "foot-per-second-squared" },
    { label: "Mile/hour/sec to Foot/sec²", from: "mile-per-hour-second", to: "foot-per-second-squared" },
    { label: "Gal to Standard Gravity (g)", from: "gal-acceleration", to: "gravity-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Special Publication 811: Guide for the Use of the International System of Units",
    "American Public Transportation Association (APTA) - Standard for Rail Transit Vehicle Braking Performance",
    "Society of Automotive Engineers (SAE) - J1455: Environmental Practices for Electronic Equipment Design in Heavy-Duty Vehicle Applications",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)"
  ]
};
