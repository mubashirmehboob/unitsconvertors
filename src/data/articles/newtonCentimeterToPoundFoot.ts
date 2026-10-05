import { CustomArticleData } from "./types";

export const newtonCentimeterToPoundFoot: CustomArticleData = {
  fromUnitId: "newton-centimeter",
  toUnitId: "pound-foot",
  seoTitle: "Newton-Centimeter to Pound-Foot Converter (N·cm to lb·ft)",
  metaDescription: "Convert Newton-centimeters to pound-feet (N·cm to lb·ft) with precision. Accurate conversion factor, formula, robotic actuator examples, charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/torque/newton-centimeter-to-pound-foot",
  h1: "Newton-Centimeter to Pound-Foot Converter",
  introduction: [
    "The Newton-centimeter (N·cm) and the pound-foot (lb·ft) bridge the gap between miniature metric mechatronics and heavy-duty imperial mechanical engineering. The Newton-centimeter is the standard metric derived submultiple used globally to quantify holding and stall torque in stepper motors, precision camera gimbals, robotic joints, and miniature actuators. The pound-foot (often referred to colloquially in North American automotive circles as the foot-pound) is the standard US customary unit for vehicle engine torque, structural bolting, and industrial machinery.",
    "Converting from Newton-centimeters to pound-feet requires crossing between two distinct measurement philosophies: the decimal metric system based on Newtons and centimeters, and the imperial gravitational system based on pounds-force and feet. Because one international foot equals exactly 0.3048 meters and one pound-force equals 4.448221615 Newtons, one pound-foot equals approximately 135.5818 Newton-centimeters. Conversely, one Newton-centimeter is equivalent to approximately 0.00737562 pound-feet.",
    "Engineers and technicians frequently encounter this conversion when integrating metric motors into US-built automation cells, comparing overseas robotic manipulator specifications against domestic tooling limits, or sizing imperial fasteners for metric actuator brackets. This guide details the mathematical relationship, step-by-step conversion examples, reference tables, and critical precautions when working across measurement systems."
  ],
  quickAnswer: {
    text: "To convert Newton-centimeters to pound-feet, multiply the torque value by 0.00737562 (or divide by 135.5818). For example, a heavy-duty NEMA 23 stepper motor delivering 200 N·cm produces approximately 1.475 lb·ft of torque.",
    formulaDisplay: "\\text{lb·ft} = \\text{N·cm} \\times 0.00737562 = \\frac{\\text{N·cm}}{135.5818}",
    subtext: "1 Newton-centimeter equals approximately 0.00737562 pound-feet (1 lb·ft ≈ 135.5818 N·cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is an SI derived submultiple of torque. It corresponds to the rotational turning effect produced by one Newton of force applied perpendicularly at the tip of a one-centimeter lever arm (1 N·cm = 1 N × 0.01 m = 0.01 N·m). It is the premier standard for small-scale rotational hardware, widely featured in stepper motor catalogs, servo datasheets, and laboratory rotary equipment."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound-Foot (lb·ft)",
    text: "The pound-foot (symbol: lb·ft or lbf·ft) is the US customary and British imperial unit of torque. Defined as the moment of one avoirdupois pound of force exerted perpendicular to a one-foot moment arm (1 lb·ft = 1 lbf × 1 ft = 1.355818 N·m), it is the primary benchmark for automotive engines, commercial torque wrenches, and structural steel assembly."
  },
  relationship: "One international foot contains exactly 30.48 centimeters, and one pound-force equals exactly 4.4482216152605 Newtons. Combining these definitions reveals that 1 lb·ft = 4.4482216152605 N × 30.48 cm = 135.58179483314 N·cm. Taking the mathematical reciprocal yields 1 N·cm ≈ 0.00737562149 lb·ft.",
  relationshipTitle: "Torque Cross-System Scale Points",
  relationshipItems: [
    { label: "10 N·cm", value: "0.0738 lb·ft (Small optical mount adjuster)" },
    { label: "50 N·cm", value: "0.3688 lb·ft (Standard 3D printer NEMA 17 stepper)" },
    { label: "135.58 N·cm", value: "1.0000 lb·ft (Direct equivalence baseline)" },
    { label: "250 N·cm", value: "1.8439 lb·ft (High-torque industrial NEMA 23 stepper)" },
    { label: "500 N·cm", value: "3.6878 lb·ft (Heavy collaborative robotic joint)" }
  ],
  formula: {
    text: "Multiply the torque in Newton-centimeters by 0.00737562, or divide by 135.5818, to calculate the torque in pound-feet.",
    math: "\\tau_{(\\text{lb·ft})} = \\tau_{(\\text{N·cm})} \\times 0.0073756215 = \\frac{\\tau_{(\\text{N·cm})}}{135.58179}",
    subtext: "To reverse the conversion from pound-feet to Newton-centimeters, multiply by 135.5818."
  },
  formulaTitle: "N·cm to lb·ft Conversion Formula",
  practicalTip: {
    title: "Quick Mental Approximation",
    text: "For rapid field estimates, remember that 135 N·cm is roughly 1 lb·ft. You can divide your N·cm value by 135 to get a fast ballpark figure within 0.4% accuracy."
  },
  expertNote: {
    title: "Terminology: Pound-Foot vs Foot-Pound",
    text: "While automotive technicians frequently say 'foot-pounds', rigorous engineering standards (ASME, NIST, SAE) preserve 'pound-foot' for torque (a rotational vector quantity) to distinguish it from the 'foot-pound' of work and energy (a scalar dot product)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: NEMA 23 Stepper Motor Imperial Rating",
        subtitle: "A machine builder imports a metric NEMA 23 stepper motor rated at 180 N·cm of holding torque. Calculate its rating in pound-feet for a US equipment catalog.",
        steps: [
          "State the initial torque: 180 N·cm.",
          "Apply the conversion factor: lb·ft = 180 × 0.00737562.",
          "Carry out the multiplication: 180 × 0.00737562 = 1.3276.",
          "Final Result: 180 N·cm corresponds to approximately 1.33 lb·ft."
        ]
      },
      {
        title: "Example 2: Robotic Arm Wrist Joint Sizing",
        subtitle: "A collaborative robot wrist joint develops a peak operational torque of 350 N·cm. Determine the equivalent load in pound-feet.",
        steps: [
          "Starting value: 350 N·cm.",
          "Divide by the divisor: 350 ÷ 135.5818.",
          "Calculate: 350 ÷ 135.5818 ≈ 2.5815.",
          "Final Result: 350 N·cm equals approximately 2.58 lb·ft."
        ]
      },
      {
        title: "Example 3: Precision Valve Actuator Torque",
        subtitle: "A chemical pipeline dosing valve requires 45 N·cm of seating torque. Express this torque in pound-feet.",
        steps: [
          "Starting value: 45 N·cm.",
          "Apply the conversion formula: 45 × 0.00737562 = 0.3319.",
          "Final Result: 45 N·cm equals approximately 0.332 lb·ft."
        ]
      }
    ]
  },
  table: {
    title: "Newton-Centimeter to Pound-Foot Reference Table",
    headers: ["Newton-Centimeters (N·cm)", "Pound-Feet (lb·ft)", "Pound-Inches (lb·in) Equiv.", "Engineering Context"],
    rows: [
      { fromVal: "10 N·cm", toVal: "0.0738 lb·ft", extra: "0.885 lb·in", extra2: "Optical focus micro-actuator" },
      { fromVal: "25 N·cm", toVal: "0.1844 lb·ft", extra: "2.213 lb·in", extra2: "Small NEMA 14 stepper motor" },
      { fromVal: "50 N·cm", toVal: "0.3688 lb·ft", extra: "4.425 lb·in", extra2: "Standard NEMA 17 3D printer motor" },
      { fromVal: "75 N·cm", toVal: "0.5532 lb·ft", extra: "6.638 lb·in", extra2: "High-torque NEMA 17 extruder drive" },
      { fromVal: "100 N·cm", toVal: "0.7376 lb·ft", extra: "8.851 lb·in", extra2: "1.0 N·m metric milestone" },
      { fromVal: "135.58 N·cm", toVal: "1.0000 lb·ft", extra: "12.000 lb·in", extra2: "Exact 1.0 lb·ft parity point" },
      { fromVal: "150 N·cm", toVal: "1.1063 lb·ft", extra: "13.276 lb·in", extra2: "Compact CNC router axis motor" },
      { fromVal: "200 N·cm", toVal: "1.4751 lb·ft", extra: "17.701 lb·in", extra2: "Standard industrial NEMA 23 motor" },
      { fromVal: "300 N·cm", toVal: "2.2127 lb·ft", extra: "26.552 lb·in", extra2: "High-power NEMA 23 stepper motor" },
      { fromVal: "400 N·cm", toVal: "2.9502 lb·ft", extra: "35.403 lb·in", extra2: "Automated guided vehicle steering drive" },
      { fromVal: "500 N·cm", toVal: "3.6878 lb·ft", extra: "44.254 lb·in", extra2: "Heavy cobot joint actuator" },
      { fromVal: "1000 N·cm", toVal: "7.3756 lb·ft", extra: "88.507 lb·in", extra2: "10 N·m heavy-duty rotary stage" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Industrial Automation Cross-Specification",
        text: "System integrators purchasing European or Asian robotic components with N·cm holding torque specs must translate ratings into lb·ft to coordinate with North American factory torque verification tools."
      },
      {
        title: "Structural Actuator Bracket Engineering",
        text: "Mounting plates, pillow blocks, and fastener shear points designed under US customary building codes require moment loads expressed in lb·ft to calculate reaction forces."
      },
      {
        title: "Aerospace Drone Actuator Certification",
        text: "Flight control surfaces designed in the US often require actuator hinge moments documented in lb·ft, even when the flight-control servos are procured with metric N·cm ratings."
      },
      {
        title: "Torque Wrench Calibration Across Standards",
        text: "Metrology laboratories test and calibrate dual-scale torque wrenches that measure low-range imperial torque (lb·ft) alongside submultiple metric torque meters."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting N·cm to lb·ft",
    items: [
      "Confusing Pound-Feet with Pound-Inches: 1 lb·ft equals 12 lb·in. Confusing the two causes an order-of-magnitude error (12x). If your torque value seems 12 times too large or small, verify your length unit.",
      "Conflating Foot-Pounds of Energy with Torque: While mathematically dimensioned as force times distance, energy is a scalar measured in joules or foot-pounds, while torque is a rotational vector measured in pound-feet.",
      "Misidentifying kg·cm as N·cm: Many imported RC servos are rated in kg·cm. Remember that 1 kg·cm ≈ 9.80665 N·cm. Neglecting this factor understates the torque by nearly a factor of ten.",
      "Assuming Integer Accuracy: The conversion ratio involves irrational cross-system definitions. Retain at least four significant digits during intermediate calculations to avoid compounding rounding errors."
    ]
  },
  faqs: [
    {
      question: "How do I convert Newton-centimeters to pound-feet?",
      answer: "Multiply the torque value in Newton-centimeters by 0.00737562, or divide it by 135.5818. For instance, 100 N·cm × 0.00737562 = 0.7376 lb·ft."
    },
    {
      question: "How many Newton-centimeters are in one pound-foot?",
      answer: "There are approximately 135.5818 Newton-centimeters in one pound-foot (1 lb·ft ≈ 135.5818 N·cm)."
    },
    {
      question: "What is 1 N·cm in pound-feet?",
      answer: "One Newton-centimeter is equal to approximately 0.00737562 pound-feet (7.3756 × 10⁻³ lb·ft)."
    },
    {
      question: "Why is the number in pound-feet so much smaller than in Newton-centimeters?",
      answer: "A pound-foot represents a much larger magnitude of torque than a Newton-centimeter. One foot is 30.48 times longer than a centimeter, and one pound-force is approximately 4.45 times greater than a Newton. Consequently, it takes over 135 N·cm to equal a single lb·ft."
    },
    {
      question: "What is the difference between lb·ft and lb·in?",
      answer: "A pound-foot (lb·ft) uses a one-foot moment arm, while a pound-inch (lb·in) uses a one-inch arm. Because there are 12 inches in a foot, 1 lb·ft equals exactly 12 lb·in. For low-torque stepper motors, lb·in is often more convenient than lb·ft."
    },
    {
      question: "How do I convert 50 N·cm to lb·ft?",
      answer: "Multiply 50 by 0.00737562: 50 × 0.00737562 ≈ 0.3688 lb·ft (or 4.425 lb·in)."
    },
    {
      question: "Is it correct to say foot-pounds instead of pound-feet for torque?",
      answer: "In common American conversation, 'foot-pound' is widely understood. However, standard engineering bodies (such as NIST and ASME) officially recommend 'pound-foot' to avoid confusion with the foot-pound unit of mechanical work and energy."
    },
    {
      question: "Can I use this conversion for torque wrenches?",
      answer: "Yes. If an assembly manual specifies a low-torque fastener in N·cm, converting to lb·ft allows you to check whether it falls within the calibrated range of your fractional imperial torque wrench."
    },
    {
      question: "How do I convert N·cm to ounce-inches (oz·in)?",
      answer: "To convert N·cm to ounce-inches, multiply by 1.41612. For example, 50 N·cm equals approximately 70.8 oz·in."
    },
    {
      question: "What is the exact conversion formula between N·cm and lb·ft?",
      answer: "Using standard SI definitions: lb·ft = N·cm × 0.01 ÷ 1.3558179483314004. This yields the exact multiplier of approximately 0.00737562149277."
    }
  ],
  relatedList: [
    { label: "Newton-Centimeter to Newton-Meter", from: "newton-centimeter", to: "newton-meter" },
    { label: "Newton-Centimeter to Pound-Inch", from: "newton-centimeter", to: "pound-inch" },
    { label: "Pound-Foot to Newton-Centimeter", from: "pound-foot", to: "newton-centimeter" },
    { label: "Newton-Meter to Pound-Foot", from: "newton-meter", to: "pound-foot" }
  ],
  relatedArticles: [
    {
      title: "Pound-Foot to Newton-Centimeter Conversion Guide",
      description: "Convert imperial foot-pound wrench and engine specs into metric stepper motor ratings.",
      from: "pound-foot",
      to: "newton-centimeter"
    },
    {
      title: "Newton-Centimeter to Pound-Inch Conversion Guide",
      description: "Explore the most common conversion for precision mechatronics and small electronic fasteners.",
      from: "newton-centimeter",
      to: "pound-inch"
    }
  ],
  references: [
    "ASME B107.300: Manual Torque Tools — Precision and Calibration",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "SAE J2723: Automotive Engine Power and Torque Certification"
  ]
};
