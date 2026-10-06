import { CustomArticleData } from "./types";

export const galAccelerationToKilometerPerHourSecond: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "kilometer-per-hour-second",
  seoTitle: "Gal to KM/h/s Converter (Gal to km/h/s) | UnitsConvertors.com",
  metaDescription: "Convert gal (Gal) to kilometers per hour per second (km/h/s) with exact acceleration formulas, high-speed rail dynamic examples, and conversion tables.",
  h1: "Gal to KM/h/s Converter",
  introduction: [
    "The gal (symbol: Gal) and the kilometer per hour per second (km/h/s) represent acceleration across two distinct operational disciplines: geophysical seismology and transportation vehicle dynamics. Defined in the centimetre-gram-second (CGS) system, one gal is defined as exactly 1 centimeter per second squared (1 cm/s² or 0.01 m/s²). The kilometer per hour per second measures the rate of speed change in kilometers per hour gained or lost each second, making it an intuitive operational metric for high-speed rail, automotive testing, and automated transit systems.",
    "Converting from Gal to km/h/s is especially relevant in modern rail engineering and automated earthquake early warning (EEW) systems. High-speed rail corridors (such as Japan's Shinkansen, France's TGV, and European high-speed lines) monitor trackbed seismometers calibrated in Gal. When ground vibrations exceed designated safety thresholds (typically 80 to 120 Gal), wayside systems automatically trigger emergency deceleration protocols, evaluated in km/h/s, to halt 300 km/h trains before derailment can occur.",
    "This technical guide explains the exact mathematical derivation connecting the CGS gal to km/h/s, demonstrates practical vehicle dynamics and rail safety calculations, provides reference tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to kilometers per hour per second (km/h/s), multiply by exactly 0.036. For example, a ground acceleration of 100 Gal converts to exactly 3.6 km/h/s.",
    formulaDisplay: "\\text{km/h/s} = \\text{Gal} \\times 0.036 = \\frac{\\text{Gal} \\times 3.6}{100}",
    subtext: "0.036 is an exact conversion factor (1 Gal = 0.01 m/s² and 1 m/s² = 3.6 km/h/s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, named after Galileo Galilei) is the CGS unit of acceleration equal to 1 cm/s² (0.01 m/s²). It is the universal standard for reporting earthquake peak ground acceleration (PGA) in civil seismology and geophysics. Earth's surface gravity equals approximately 980.665 Gal."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilometer per Hour per Second (km/h/s)",
    text: "The kilometer per hour per second (symbol: km/h/s) expresses acceleration in practical automotive and railway engineering terms. An acceleration of 1 km/h/s means a vehicle's speedometer reading increases by 1 km/h every second. Because 1 km/h equals 1/3.6 m/s (~0.2778 m/s), 1 km/h/s equals exactly 5/18 m/s² (approximately 0.2778 m/s² or 27.78 Gal)."
  },
  relationship: "The relationship between Gal and km/h/s derives directly from the definition of the meter and the hour. Because 1 Gal = 0.01 m/s² and 1 m/s² = 3.6 km/h/s, multiplying 0.01 by 3.6 yields exactly 0.036 km/h/s per Gal. Inversely, 1 km/h/s equals exactly 100 / 3.6 = 27.7777... Gal (250/9 Gal).",
  relationshipTitle: "Gal to KM/h/s Exact Conversion Equivalents",
  relationshipItems: [
    { label: "1 Gal", value: "0.0360 km/h/s (Exact mathematical factor)" },
    { label: "10 Gal", value: "0.3600 km/h/s (Light perceptible shaking)" },
    { label: "50 Gal", value: "1.8000 km/h/s (Typical comfortable city bus braking rate)" },
    { label: "80 Gal", value: "2.8800 km/h/s (Typical high-speed rail seismic warning trigger)" },
    { label: "100 Gal", value: "3.6000 km/h/s (Automotive emergency braking onset, 1.0 m/s²)" },
    { label: "250 Gal", value: "9.0000 km/h/s (Severe structural shaking, 2.5 m/s²)" },
    { label: "980.665 Gal", value: "35.3040 km/h/s (Standard 1.0 g terrestrial gravity equivalent)" }
  ],
  formula: {
    text: "Multiply the acceleration in Gal by 0.036 to obtain the acceleration in kilometers per hour per second (km/h/s).",
    math: "a_{(\\text{km/h/s})} = a_{(\\text{Gal})} \\times 0.036",
    subtext: "0.036 is an exact conversion factor derived from (0.01 m/s² × 3,600 s / 1,000 m)."
  },
  formulaTitle: "Gal to KM/h/s Conversion Formula",
  practicalTip: {
    title: "Quick Decimal and Multiplication Shortcut",
    text: "To convert Gal to km/h/s in your head, multiply the number by 36 and move the decimal point three places to the left (or divide by 100 and multiply by 3.6). For example: 50 Gal × 3.6 = 180, then 180 ÷ 100 = 1.8 km/h/s."
  },
  expertNote: {
    title: "Railway UrEDAS Seismic Brake Triggering",
    text: "The Urgent Earthquake Detection and Alarm System (UrEDAS) deployed along Japan's Shinkansen network uses P-wave and S-wave seismographs calibrated in Gal. When trackside sensors register horizontal ground acceleration surpassing 80 to 120 Gal (2.88 to 4.32 km/h/s), the traction power substations cut line voltage, and emergency disc and eddy-current brakes apply a deceleration of roughly 4.0 to 4.5 km/h/s (110 to 125 Gal) to safely stop trains."
  },
  examples: {
    title: "Step-by-Step Engineering Calculations",
    items: [
      {
        title: "Example 1: High-Speed Rail Trackbed Alarm Verification",
        subtitle: "A borehole accelerometer along an intercity rail alignment registers a transverse ground acceleration pulse of 120 Gal. What is the equivalent rate of speed change in km/h/s?",
        steps: [
          "Identify the measured ground acceleration: a = 120 Gal.",
          "Apply the exact conversion formula: a(km/h/s) = a(Gal) × 0.036.",
          "Compute: 120 × 0.036 = 4.32 km/h/s.",
          "Result: 120 Gal equals exactly 4.32 km/h/s (equivalent to 1.2 m/s²)."
        ]
      },
      {
        title: "Example 2: Passenger Ride Comfort Comparison",
        subtitle: "An automated people mover transit carriage experiences an abrupt lateral platform jerk producing a peak lateral acceleration of 25 Gal. Express this lateral acceleration in km/h/s.",
        steps: [
          "State the recorded value: a = 25 Gal.",
          "Multiply by 0.036: 25 × 0.036 = 0.90 km/h/s.",
          "Result: 25 Gal corresponds to an acceleration rate of exactly 0.90 km/h/s (0.25 m/s²)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to KM/h/s",
    headers: ["Acceleration (Gal)", "Acceleration (km/h/s)", "Vehicle & Structural Dynamics Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.036", extra: "Precise dimensional definition baseline" },
      { fromVal: "5.0", toVal: "0.180", extra: "Subtle vehicle body roll or gentle curve transition" },
      { fromVal: "10.0", toVal: "0.360", extra: "Elevator comfortable start/stop acceleration" },
      { fromVal: "25.0", toVal: "0.900", extra: "Gentle passenger train acceleration rate" },
      { fromVal: "50.0", toVal: "1.800", extra: "City bus service braking rate (0.50 m/s²)" },
      { fromVal: "100.0", toVal: "3.600", extra: "Nominal rapid transit acceleration / moderate earthquake" },
      { fromVal: "200.0", toVal: "7.200", extra: "Brisk passenger car acceleration (2.0 m/s²)" },
      { fromVal: "300.0", toVal: "10.800", extra: "Emergency transit brake rate (3.0 m/s²)" },
      { fromVal: "500.0", toVal: "18.000", extra: "Violent earthquake ground motion / heavy vehicle braking" },
      { fromVal: "980.665", toVal: "35.304", extra: "Standard Earth gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Transportation Applications",
    items: [
      {
        title: "High-Speed Rail Earthquake Safety Systems",
        text: "Rail transit operators translate trackbed accelerograph readings in Gal into equivalent braking velocity decay rates (km/h/s) to verify stopping distance envelopes during major seismic disturbances."
      },
      {
        title: "Electric Vehicle (EV) Powertrain Acceleration Benchmarks",
        text: "Automotive engineers evaluate electric traction motor torque ramp-up curves, converting laboratory dynamometer accelerations into km/h/s to model 0 to 100 km/h sprint times."
      },
      {
        title: "Elevator and Cableway Passenger Comfort Standards",
        text: "ISO 18738 standards specify vertical and lateral elevator vibration limits. Sensor logs recorded in Gal are converted into km/h/s or m/s² to assess ride quality compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3.6 instead of multiplying: 1 m/s² equals 3.6 km/h/s. Because 1 Gal = 0.01 m/s², the multiplier is 0.01 × 3.6 = 0.036. Dividing produces a severe 77-fold calculation error.",
      "Confusing KM/h/s with meters per second squared (m/s²): 1 km/h/s is roughly 0.278 m/s², not 1.0 m/s². 100 Gal is exactly 1.0 m/s², which equals 3.6 km/h/s.",
      "Neglecting duration in velocity calculations: An acceleration of 3.6 km/h/s (100 Gal) only changes vehicle speed by 3.6 km/h if sustained for a full second. Transient seismic pulses typically last only fractions of a second.",
      "Confusing km/h/s with mph/s: 1 km/h/s equals approximately 0.6214 mph/s. Do not interchange metric and imperial velocity rates."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to km/h/s?",
      answer: "Multiply the acceleration in Gal by exactly 0.036. For example, 50 Gal × 0.036 = 1.8 km/h/s."
    },
    {
      question: "What is 1 Gal in km/h/s?",
      answer: "1 Gal equals exactly 0.036 kilometers per hour per second (km/h/s)."
    },
    {
      question: "Why is the conversion factor exactly 0.036?",
      answer: "1 Gal is defined as 0.01 m/s². To convert m/s to km/h, multiply by 3.6 (3,600 seconds per hour ÷ 1,000 meters per kilometer). Therefore, 0.01 × 3.6 = 0.036 exactly."
    },
    {
      question: "How do you convert km/h/s back into Gal?",
      answer: "Divide the km/h/s value by 0.036, or multiply by 27.7778 (250/9). For example, a vehicle accelerating at 7.2 km/h/s corresponds to 7.2 ÷ 0.036 = 200 Gal."
    },
    {
      question: "What does an acceleration of 3.6 km/h/s mean?",
      answer: "3.6 km/h/s means the vehicle increases its velocity by 3.6 kilometers per hour every second. This is exactly equal to 1.0 m/s² (or 100 Gal)."
    },
    {
      question: "How does 1.0 g compare to km/h/s?",
      answer: "Standard Earth gravity (9.80665 m/s² or 980.665 Gal) equals approximately 35.304 km/h/s."
    },
    {
      question: "What is a typical acceleration rate for a passenger car in km/h/s?",
      answer: "A standard passenger car accelerating from 0 to 100 km/h in 10 seconds has an average acceleration of 10 km/h/s (roughly 278 Gal or 2.78 m/s²)."
    },
    {
      question: "Why do railway engineers use km/h/s instead of Gal?",
      answer: "Train drivers and railway signaling systems monitor speeds in kilometers per hour (km/h). Describing braking and acceleration rates in km/h/s directly conveys how much speed the train sheds each second, whereas Gal is primarily a geophysical unit."
    },
    {
      question: "How many Gal is an emergency train brake rate of 4.5 km/h/s?",
      answer: "4.5 km/h/s divided by 0.036 equals exactly 125 Gal (or 1.25 m/s²), which represents a firm, passenger-safe emergency stop."
    }
  ],
  relatedList: [
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" },
    { label: "Gal to MPH/s", from: "gal-acceleration", to: "mile-per-hour-second" },
    { label: "Kilometer/hour/sec to Meter/sec²", from: "kilometer-per-hour-second", to: "meter-per-second-squared" },
    { label: "Gal to Standard Gravity (g)", from: "gal-acceleration", to: "gravity-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "International Union of Railways (UIC) - UIC Code 544-1: Brakes - Braking performance",
    "Japanese Railway Technical Research Institute (RTRI) - Early Earthquake Warning Systems for High-Speed Railways (UrEDAS)",
    "ISO 18738-1: Measurement of lift ride quality - Part 1: Lifts (elevators)"
  ]
};
