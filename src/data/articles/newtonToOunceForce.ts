import { CustomArticleData } from "./types";

export const newtonToOunceForce: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "ounce-force",
  seoTitle: "Newton to Ounce-force Converter (N to ozf)",
  metaDescription: "Convert newtons to ounces-force (N to ozf) accurately. Includes exact conversion formulas, step-by-step examples, precision motor torque context, and reference tables.",
  h1: "Newton to Ounce-force Converter",
  introduction: [
    "The newton (N) and ounce-force (ozf) are force units in the metric (SI) and U.S. Customary systems, respectively.",
    "While the newton is widely used for general engineering and physics, the ounce-force—and its rotational derivative, the ounce-force inch (ozf·in)—is a crucial unit for specifying small forces, low-torque stepper motors, precision actuators, and spring tensions.",
    "One newton equals approximately 3.5969431 ounces-force (or 1 ozf ≈ 0.27801385 N)."
  ],
  quickAnswer: {
    text: "To convert newtons to ounces-force, multiply the value by 3.5969431. For example, 10 N equals approximately 35.97 ozf.",
    formulaDisplay: "ozf = N × 3.5969431",
    subtext: "1 ounce-force equals 1/16th of a pound-force (1 lbf = 16 ozf) or ~0.27801385 N."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the official base SI unit of force, defined as the force required to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Ounce-force (ozf)",
    text: "The ounce-force (ozf) is a U.S. Customary unit equal to the force exerted by gravity on an avoirdupois mass of 1 ounce (1/16 lb or 0.028349523125 kg) under standard gravity (9.80665 m/s²), yielding exactly 0.27801385095378125 N."
  },
  relationship: "Since 1 pound-force (lbf) equals 16 ounces-force, and 1 lbf = 4.448221615 N, dividing 4.448221615 by 16 gives 1 ozf = 0.27801385 N. Inverting this yields 1 N = 1 / 0.27801385 ≈ 3.5969431 ozf.",
  relationshipTitle: "Newton vs Ounce-force Scale Comparison",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 3.5969431 ozf" },
    { label: "1 Ounce-force (ozf)", value: "0.27801385 N" },
    { label: "1 Pound-force (lbf)", value: "16 ozf (4.4482 N)" },
    { label: "1 Gram-force (gf)", value: "0.03527396 ozf" }
  ],
  formula: {
    text: "Multiply the force in newtons by 3.5969431 to obtain ounces-force.",
    math: "ozf = N × 3.5969431",
    subtext: "Alternatively: ozf = N × 16 × 0.22480894."
  },
  formulaTitle: "Newton to Ounce-force Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For a quick estimate, multiply the newton value by 3.6. For example, 5 N × 3.6 = 18 ozf (exact value is 17.98 ozf)."
  },
  expertNote: {
    title: "Precision Actuator & Servo Ratings",
    text: "Small RC servos, micro-stepper motors (e.g., NEMA 14, NEMA 17), and medical dosing pumps often express holding torque in ozf·in or N·cm. 1 N·cm equals approximately 1.41612 ozf·in."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 2.5 Newtons",
        subtitle: "Convert a mechanical spring force of 2.5 N into ounces-force.",
        steps: [
          "Identify the starting value in newtons: 2.5 N.",
          "Apply the conversion formula: ozf = 2.5 × 3.5969431.",
          "Perform the calculation: 2.5 × 3.5969431 = 8.9923578.",
          "Result: 2.5 N is equal to approximately 8.99 ozf."
        ]
      },
      {
        title: "Example 2: Micro Actuator Test (0.1 N)",
        subtitle: "Convert a micro-switch actuation force of 0.1 N into ozf.",
        steps: [
          "Identify the force value: 0.1 N.",
          "Multiply by 3.5969431: 0.1 × 3.5969431 = 0.359694.",
          "Result: 0.1 N corresponds to 0.36 ozf."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Ounce-force Quick Reference Table",
    headers: ["Newtons (N)", "Ounces-force (ozf)", "Pounds-force (lbf)", "Practical Benchmark"],
    rows: [
      { fromVal: "0.1 N", toVal: "0.3597 ozf", extra: "0.0225 lbf", extra2: "Membrane keypad button press" },
      { fromVal: "0.5 N", toVal: "1.7985 ozf", extra: "0.1124 lbf", extra2: "Micro switch latch force" },
      { fromVal: "1 N", toVal: "3.5969 ozf", extra: "0.2248 lbf", extra2: "Weight of ~102 gram object" },
      { fromVal: "2 N", toVal: "7.1939 ozf", extra: "0.4496 lbf", extra2: "Small solenoid pull" },
      { fromVal: "5 N", toVal: "17.9847 ozf", extra: "1.1240 lbf", extra2: "Handheld lever resistance" },
      { fromVal: "10 N", toVal: "35.9694 ozf", extra: "2.2481 lbf", extra2: "1 kg weight under Earth gravity (~9.81 N)" },
      { fromVal: "20 N", toVal: "71.9389 ozf", extra: "4.4962 lbf", extra2: "Small robotic arm grip" },
      { fromVal: "50 N", toVal: "179.8472 ozf", extra: "11.2404 lbf", extra2: "Automotive door handle pull" },
      { fromVal: "100 N", toVal: "359.6943 ozf", extra: "22.4809 lbf", extra2: "Bicycle handbrake tension" },
      { fromVal: "278 N", toVal: "1,000.0000 ozf", extra: "62.5000 lbf", extra2: "1 kilounce-force benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of N to ozf Conversion",
    items: [
      {
        title: "Robotics & Stepper Motor Specifications",
        text: "Small stepper motor spec sheets (NEMA 08, 11, 14, 17) list holding torque in ozf·in or N·cm."
      },
      {
        title: "Medical Device & Syringe Design",
        text: "Syringe plunger force and peristaltic dosing pump tension are measured in ounces-force."
      },
      {
        title: "Haptic Feedback & Touchscreen Switches",
        text: "Designing keyboard tactile feel, haptic vibration motors, and pushbutton actuation curves."
      },
      {
        title: "Precision Spring Manufacturing",
        text: "Calibrating micro compression and extension springs used in aerospace instruments and watches."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing ounce-force (ozf, force) with fluid ounce (fl oz, volume) or ounce-mass (oz, mass).",
      "Confusing ounce-force (ozf) with pound-force (lbf); 1 lbf contains 16 ozf.",
      "Rounding 3.5969 to 3.5 in precision electronics testing where a 2.7% error is unacceptable."
    ]
  },
  faqs: [
    {
      question: "How many ounces-force are in 1 newton?",
      answer: "One newton equals approximately 3.5969431 ounces-force (ozf)."
    },
    {
      question: "How many newtons are in 1 ounce-force?",
      answer: "One ounce-force equals exactly 0.27801385095 newtons."
    },
    {
      question: "What is the difference between oz and ozf?",
      answer: "Oz (ounce) is a unit of mass (28.3495 g), whereas ozf (ounce-force) is a unit of force (the weight of 1 oz mass at standard gravity)."
    },
    {
      question: "How many ounces-force make 1 pound-force?",
      answer: "There are exactly 16 ounces-force in 1 pound-force (lbf)."
    },
    {
      question: "How do I convert N·cm to ozf·in?",
      answer: "Multiply the torque in N·cm by 1.41612 to get ozf·in."
    },
    {
      question: "Why is ozf used in stepper motor datasheets?",
      answer: "In North America, holding torque for small motors is traditionally expressed in ozf·in because numbers fall in a convenient 10 to 200 range."
    },
    {
      question: "How can I estimate N to ozf mentally?",
      answer: "Multiply the newton value by 3.6. For example, 10 N × 3.6 = 36 ozf."
    },
    {
      question: "Is ounce-force an SI unit?",
      answer: "No, the ounce-force is a U.S. Customary unit derived from the avoirdupois pound."
    }
  ],
  relatedList: [
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" },
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Poundal", from: "newton", to: "poundal" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "ISO 80000-4: Quantities and units — Mechanics",
    "NEMA ICS 16: Motion/Position Control Motors, Controls, and Feedback Devices"
  ]
};
