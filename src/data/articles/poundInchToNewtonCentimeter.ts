import { CustomArticleData } from "./types";

export const poundInchToNewtonCentimeter: CustomArticleData = {
  fromUnitId: "pound-inch",
  toUnitId: "newton-centimeter",
  seoTitle: "Pound-Inch to Newton-Centimeter Converter (lb·in to N·cm)",
  metaDescription: "Convert pound-inches to Newton-centimeters (lb·in to N·cm) accurately. Exact 11.29848 factor, electronics & micro-fastener examples, charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/pound-inch-to-newton-centimeter",
  h1: "Pound-Inch to Newton-Centimeter Converter",
  introduction: [
    "The pound-inch (symbol: lb·in, also commonly designated in-lb) and the Newton-centimeter (symbol: N·cm) are high-precision torque units primarily used for micro-mechanisms, printed circuit board assemblies, optical equipment, and miniature electro-mechanical actuators. Both units scale rotational moment down to fine levels where standard foot-pounds and Newton-meters produce inconvenient fractional values.",
    "Converting pound-inches to Newton-centimeters bridges North American precision instrumentation with metric micro-assembly standards. Because one Newton-meter contains exactly 100 Newton-centimeters and 1 pound-inch equals 0.112984829 Newton-meters, multiplying by 100 demonstrates that 1 pound-inch equals exactly 11.2984829 Newton-centimeters. Conversely, 1 N·cm equals approximately 0.08850746 pound-inches.",
    "This technical guide explains the relationship between miniature metric and imperial torque measurements, provides step-by-step conversion calculations for robotics and optical housings, offers a full precision conversion chart, and shares essential trade guidance for micro-torque driver calibration."
  ],
  quickAnswer: {
    text: "To convert pound-inches to Newton-centimeters, multiply the torque value by 11.29848 (or divide by 0.0885075). For example, a delicate optical mount tightened to 5 lb·in converts to approximately 56.49 N·cm.",
    formulaDisplay: "\\text{N·cm} = \\text{lb·in} \\times 11.29848",
    subtext: "1 pound-inch equals exactly 11.2984829 Newton-centimeters. 1 N·cm equals approximately 0.08850746 lb·in."
  },
  aboutSourceUnit: {
    title: "Understanding the Pound-Inch (lb·in)",
    text: "The pound-inch (symbol: lb·in or in-lb) is an imperial unit of torque representing the turning moment of one pound-force exerted at a radial lever arm of one inch (1 lb·in = 1 lbf × 1 in). It serves as the primary low-torque specification unit in US aerospace, firearms manufacturing, consumer appliances, and automotive interior assemblies."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton-Centimeter (N·cm)",
    text: "The Newton-centimeter (symbol: N·cm) is a sub-multiple metric unit of torque defined as one Newton of force applied at a radius of one centimeter (1 N·cm = 1 N × 0.01 m = 0.01 N·m). It is widely favored across Europe and Asia for micro-stepper motors, medical surgical implants, miniature gearbox ratings, and drone gimbal assemblies."
  },
  relationship: "Because there are 100 centimeters in a meter, 1 N·m = 100 N·cm. Given that 1 lb·in = 0.112984829 N·m, we multiply by 100: 1 lb·in = 0.112984829 × 100 = 11.2984829 N·cm. Inverting this factor reveals that 1 N·cm = 1 / 11.2984829 ≈ 0.088507458 lb·in.",
  relationshipTitle: "Micro-Torque Scale Breakdown (lb·in vs N·cm)",
  relationshipItems: [
    { label: "1.0 lb·in", value: "11.30 N·cm (Miniature smartphone housing & sensor screws)" },
    { label: "2.5 lb·in", value: "28.25 N·cm (Optical lens reticle ring retainers)" },
    { label: "5.0 lb·in", value: "56.49 N·cm (Drone motor stator mounting & micro servos)" },
    { label: "10.0 lb·in", value: "112.98 N·cm (Precision instrument dial knobs & M3 hardware)" },
    { label: "25.0 lb·in", value: "282.46 N·cm (Firearm optics base screws & electronic terminals)" },
    { label: "50.0 lb·in", value: "564.92 N·cm (Bicycle handlebar stem faceplate hardware)" }
  ],
  formula: {
    text: "Multiply the torque in pound-inches by 11.298483 to calculate the torque in Newton-centimeters.",
    math: "\\tau_{(\\text{N·cm})} = \\tau_{(\\text{lb·in})} \\times 11.298483",
    subtext: "Alternatively: Divide the pound-inch value by 0.08850746."
  },
  formulaTitle: "Pound-Inch to Newton-Centimeter Conversion Formula",
  practicalTip: {
    title: "Quick 11x Mental Multiplier",
    text: "To approximate N·cm in the field without a calculator, multiply the pound-inch value by 11 and add 3% (e.g., 4 lb·in × 11 = 44; plus ~1.2 = 45.2 N·cm; exact is 45.19 N·cm)."
  },
  expertNote: {
    title: "Tool Scaling in Micro-Assembly",
    text: "Micro-torque screwdrivers are typically graduated in either N·cm or cN·m (centiNewton-meters, where 1 N·cm = 1 cN·m). Do not confuse N·cm with mN·m (milliNewton-meters, where 1 N·cm = 10 mN·m). Always verify the prefix on digital torque driver readouts."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Precision Gimbal Motor Stator",
        subtitle: "A drone camera gimbal assembly instruction specifies 3.5 lb·in on M2.5 titanium bolts. Convert this specification to N·cm for a metric screwdriver.",
        steps: [
          "State the initial torque: 3.5 lb·in.",
          "Apply the conversion factor: N·cm = 3.5 × 11.298483.",
          "Calculate: 3.5 × 11.298483 = 39.54469 N·cm.",
          "Final Result: 3.5 lb·in corresponds to 39.54 N·cm (set driver to 39.5 N·cm)."
        ]
      },
      {
        title: "Example 2: Medical Diagnostic Monitor Mount",
        subtitle: "Convert a mechanical hinge pivot resistance specification of 18 lb·in into N·cm.",
        steps: [
          "Starting value: 18 lb·in.",
          "Multiply by 11.298483: 18 × 11.298483 = 203.3727 N·cm.",
          "Final Result: 18 lb·in equals approximately 203.37 N·cm."
        ]
      },
      {
        title: "Example 3: Rifle Optics Turret Cap Screws",
        subtitle: "A precision shooting manual designates 8 lb·in for scope turret lock screws. Convert to Newton-centimeters.",
        steps: [
          "Starting value: 8 lb·in.",
          "Multiply by 11.298483: 8 × 11.298483 = 90.38786 N·cm.",
          "Final Result: 8 lb·in equals approximately 90.39 N·cm."
        ]
      }
    ]
  },
  table: {
    title: "Pound-Inch to Newton-Centimeter Reference Chart",
    headers: ["Pound-Inches (lb·in / in-lb)", "Newton-Centimeters (N·cm)", "Newton-Meter (N·m)", "Practical Assembly Context"],
    rows: [
      { fromVal: "0.5 lb·in", toVal: "5.65 N·cm", extra: "0.056 N·m", extra2: "Optical reticle adjustment screws" },
      { fromVal: "1.0 lb·in", toVal: "11.30 N·cm", extra: "0.113 N·m", extra2: "Hearing aid and smartwatch casings" },
      { fromVal: "2.0 lb·in", toVal: "22.60 N·cm", extra: "0.226 N·m", extra2: "Printed circuit board M2 standoffs" },
      { fromVal: "3.0 lb·in", toVal: "33.90 N·cm", extra: "0.339 N·m", extra2: "Smartphone frame structural screws" },
      { fromVal: "4.0 lb·in", toVal: "45.19 N·cm", extra: "0.452 N·m", extra2: "Miniature stepper motor faceplate" },
      { fromVal: "5.0 lb·in", toVal: "56.49 N·cm", extra: "0.565 N·m", extra2: "Drone motor stator to arm bolts" },
      { fromVal: "7.5 lb·in", toVal: "84.74 N·cm", extra: "0.847 N·m", extra2: "Micro-potentiometer lock nuts" },
      { fromVal: "10 lb·in", toVal: "112.98 N·cm", extra: "1.130 N·m", extra2: "Electrical terminal strip M3 screws" },
      { fromVal: "15 lb·in", toVal: "169.48 N·cm", extra: "1.695 N·m", extra2: "Scope ring clamp M3.5 screws" },
      { fromVal: "20 lb·in", toVal: "225.97 N·cm", extra: "2.260 N·m", extra2: "Robotic arm joint servo mounts" },
      { fromVal: "25 lb·in", toVal: "282.46 N·cm", extra: "2.825 N·m", extra2: "Carburetor float bowl assembly" },
      { fromVal: "30 lb·in", toVal: "338.95 N·cm", extra: "3.390 N·m", extra2: "Bicycle disc brake rotor M5 bolts" },
      { fromVal: "40 lb·in", toVal: "451.94 N·cm", extra: "4.519 N·m", extra2: "Bicycle brake lever bar clamps" },
      { fromVal: "50 lb·in", toVal: "564.92 N·cm", extra: "5.649 N·m", extra2: "Handlebar stem 4-bolt faceplates" }
    ]
  },
  applications: {
    title: "Precision Industry Applications",
    items: [
      {
        title: "Consumer Electronics & Micro-Assembly",
        text: "Automated torque drivers on automated pick-and-place lines are programmed in N·cm to secure camera modules, lithium-ion battery brackets, and titanium smartphone chassis screws without damaging internal flex cables."
      },
      {
        title: "Medical Robotics & Surgical Tooling",
        text: "Surgical robotics, endoscopy articulators, and orthopedic prosthetic joints utilize miniature fasteners rated in Newton-centimeters to ensure consistent bio-mechanical clamping forces."
      },
      {
        title: "Aerospace Drone & Satellite Subsystems",
        text: "CubeSat frames and UAV camera gimbals require micro-torque verification. Converting between inch-pounds on American aerospace blueprints and N·cm on imported brushless motors is routine."
      },
      {
        title: "Horology & Optical Instrumentation",
        text: "Specialized watchmaking and laser positioning mounts utilize torque screwdrivers calibrated down to fractions of a Newton-centimeter to avoid distorting delicate crystal lenses."
      }
    ]
  },
  pitfalls: {
    title: "Mistakes to Avoid in Micro-Torque Work",
    items: [
      "Confusing N·cm with N·m: 1 N·m equals 100 N·cm. Setting a tool to 50 N·m when 50 N·cm (4.4 lb·in) was intended will deliver 100 times the required torque, violently destroying micro-components.",
      "Misinterpreting centiNewton-meters (cN·m): 1 cN·m is identical to 1 N·cm. Ensure you do not accidentally divide or multiply by 100 again.",
      "Using uncalibrated friction clutches: Micro-torque screwdrivers require regular quarterly calibration. Minor mechanical spring drift can alter clamping torque by 20% or more.",
      "Overlooking driver bit fitment: In micro-screws (M1 to M2.5), using a slightly incorrect Torx or Phillips bit will strip the fastener head long before the driver reaches target torque."
    ]
  },
  faqs: [
    {
      question: "How do I convert pound-inches to Newton-centimeters?",
      answer: "Multiply the pound-inch value by 11.298483 (or divide by 0.0885075). For example, 10 lb·in × 11.298483 = 112.98 N·cm."
    },
    {
      question: "How many Newton-centimeters are in 1 pound-inch?",
      answer: "There are exactly 11.2984829 Newton-centimeters in 1 pound-inch."
    },
    {
      question: "Is N·cm the same as cN·m?",
      answer: "Yes. 1 Newton-centimeter (N·cm) equals exactly 1 centiNewton-meter (cN·m), because both represent one hundredth of a Newton-meter (0.01 N·m)."
    },
    {
      question: "What is 5 lb·in in N·cm?",
      answer: "5 lb·in equals approximately 56.49 N·cm (5 × 11.298483 = 56.4924 N·cm)."
    },
    {
      question: "How do I convert N·cm to lb·in?",
      answer: "Multiply the N·cm value by 0.08850746 (or divide by 11.298483). For example, 100 N·cm × 0.08850746 = 8.85 lb·in."
    },
    {
      question: "Why do electronics use N·cm instead of N·m?",
      answer: "Electronics fasteners require tiny torque levels that would be written as awkward decimals in N·m (e.g., 0.25 N·m). Expressing it as 25 N·cm provides clear whole numbers for operator dials and driver displays."
    },
    {
      question: "What is 20 lb·in in Newton-centimeters?",
      answer: "20 lb·in equals 225.97 N·cm (20 × 11.298483 = 225.9697 N·cm)."
    },
    {
      question: "What tool measures torque in Newton-centimeters?",
      answer: "Precision electric torque screwdrivers, micrometer-dial torque drivers, and digital torque analyzers calibrated for low-range electronics and robotics."
    }
  ],
  relatedList: [
    { label: "Pound-Inch to Newton-Meter", from: "pound-inch", to: "newton-meter" },
    { label: "Pound-Inch to Dyne-Centimeter", from: "pound-inch", to: "dyne-centimeter" },
    { label: "Newton-Meter to Newton-Centimeter", from: "newton-meter", to: "newton-centimeter" },
    { label: "Pound-Foot to Newton-Centimeter", from: "pound-foot", to: "newton-centimeter" }
  ],
  relatedArticles: [
    {
      title: "Pound-Inch to Newton-Meter Conversion Guide",
      description: "Step-by-step conversion factors and torque driver calibration for small fastener assemblies.",
      from: "pound-inch",
      to: "newton-meter"
    },
    {
      title: "Newton-Meter to Newton-Centimeter Conversion Guide",
      description: "Convert standard SI torque ratings to precision metric micro-fastener values.",
      from: "newton-meter",
      to: "newton-centimeter"
    }
  ],
  references: [
    "ISO 6789-1: Hand torque tools — Requirements and test methods for design and manufacturing",
    "ASME B107.300: Manual Torque Instruments",
    "IPC-A-610: Acceptability of Electronic Assemblies (Fastener Installation Standards)",
    "NIST Special Publication 330: The International System of Units (SI)"
  ]
};
