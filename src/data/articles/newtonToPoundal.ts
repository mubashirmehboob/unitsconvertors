import { CustomArticleData } from "./types";

export const newtonToPoundal: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "poundal",
  seoTitle: "Newton to Poundal Converter (N to pdl)",
  metaDescription: "Convert newtons to poundals (N to pdl) accurately. Learn the FPS absolute system of force, conversion formula, step-by-step examples, and physics tables.",
  h1: "Newton to Poundal Converter",
  introduction: [
    "The newton (N) and the poundal (pdl) are coherent, absolute units of force belonging to the SI (metric) system and the Foot-Pound-Second (FPS) system, respectively.",
    "Unlike gravitational force units such as the pound-force or kilogram-force, both the newton and the poundal are defined independently of Earth's gravity based on mass and acceleration (F = ma).",
    "One newton equals approximately 7.23301387 poundals. Converting between them allows physicists and educators to translate mechanics problems between the SI metric system and the classical FPS system."
  ],
  quickAnswer: {
    text: "To convert newtons to poundals, multiply the value by 7.23301387. For example, 10 N equals approximately 72.33 pdl.",
    formulaDisplay: "pdl = N × 7.23301387",
    subtext: "1 poundal accelerates a 1-pound mass at 1 foot per second squared (1 pdl = 1 lb·ft/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the standard SI unit of force. Defined by Sir Isaac Newton's second law, 1 N is the force necessary to accelerate a mass of 1 kilogram at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Poundal (pdl)",
    text: "The poundal is the coherent unit of force in the absolute Foot-Pound-Second (FPS) system, introduced by James Thomson in 1879. It is defined as the force required to accelerate a 1-pound mass at 1 foot per second squared (1 pdl = 1 lb·ft/s²)."
  },
  relationship: "Because 1 kg = 2.20462262 lb and 1 m = 3.2808399 ft, multiplying these conversions (2.20462262 × 3.2808399) reveals that 1 N = 7.23301387 pdl. Conversely, 1 pdl = 1 / 7.23301387 ≈ 0.13825495 N.",
  relationshipTitle: "Newton vs Poundal Physics Scale Benchmark",
  relationshipItems: [
    { label: "1 Newton (N)", value: "≈ 7.2330139 pdl" },
    { label: "1 Poundal (pdl)", value: "≈ 0.1382550 N" },
    { label: "1 Pound-force (lbf)", value: "32.174048 pdl" },
    { label: "1 Kilonewton (kN)", value: "≈ 7,233.0139 pdl" }
  ],
  formula: {
    text: "Multiply the force in newtons by 7.23301387 to obtain the equivalent force in poundals.",
    math: "pdl = N × 7.23301387",
    subtext: "To reverse: N = pdl × 0.13825495."
  },
  formulaTitle: "Newton to Poundal Conversion Formula",
  practicalTip: {
    title: "FPS vs Imperial Distinctions",
    text: "The poundal is an absolute unit (1 pdl = 1 lb·ft/s²), whereas the pound-force (lbf) is a gravitational unit (1 lbf ≈ 32.174 pdl). Do not confuse pdl with lbf."
  },
  expertNote: {
    title: "Coherent System Symmetry",
    text: "The relationship between N and pdl mirrors the relationship between metric SI and Imperial FPS units of mass and length, making pdl ideal for theoretical mechanics problems where gravitational variation must be avoided."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 15 Newtons",
        subtitle: "Calculate the equivalent force in poundals for an experimental input of 15 N.",
        steps: [
          "Identify the starting force in newtons: 15 N.",
          "Apply the conversion factor: pdl = 15 × 7.23301387.",
          "Perform the multiplication: 15 × 7.23301387 = 108.4952.",
          "Result: 15 N is equal to approximately 108.50 pdl."
        ]
      },
      {
        title: "Example 2: Small Mechanical Force (0.5 N)",
        subtitle: "Convert a force of 0.5 N into poundals.",
        steps: [
          "Identify the force value: 0.5 N.",
          "Multiply by 7.23301387: 0.5 × 7.23301387 = 3.6165.",
          "Result: 0.5 N corresponds to 3.62 pdl."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Poundal Quick Reference Table",
    headers: ["Newtons (N)", "Poundals (pdl)", "Equivalent Pounds-force (lbf)", "Physics Context"],
    rows: [
      { fromVal: "0.1 N", toVal: "0.7233 pdl", extra: "0.0225 lbf", extra2: "Micro-actuator force" },
      { fromVal: "0.5 N", toVal: "3.6165 pdl", extra: "0.1124 lbf", extra2: "Small spring tension" },
      { fromVal: "1 N", toVal: "7.2330 pdl", extra: "0.2248 lbf", extra2: "1 kg mass at 1 m/s²" },
      { fromVal: "2 N", toVal: "14.4660 pdl", extra: "0.4496 lbf", extra2: "Laboratory friction force" },
      { fromVal: "5 N", toVal: "36.1651 pdl", extra: "1.1240 lbf", extra2: "Small tool trigger force" },
      { fromVal: "10 N", toVal: "72.3301 pdl", extra: "2.2481 lbf", extra2: "1 kg weight under Earth gravity (~9.81 N)" },
      { fromVal: "20 N", toVal: "144.6603 pdl", extra: "4.4962 lbf", extra2: "Handgrip push force" },
      { fromVal: "50 N", toVal: "361.6507 pdl", extra: "11.2404 lbf", extra2: "Small motor thrust" },
      { fromVal: "100 N", toVal: "723.3014 pdl", extra: "22.4809 lbf", extra2: "Pedal resistance force" },
      { fromVal: "1,000 N (1 kN)", toVal: "7,233.0139 pdl", extra: "224.8089 lbf", extra2: "1 kilonewton structural force" }
    ]
  },
  applications: {
    title: "Practical Applications of N to pdl Conversion",
    items: [
      {
        title: "Theoretical & Classical Mechanics",
        text: "Physics curricula and academic textbooks use poundals to teach absolute force concepts in non-metric units without introducing local gravity g."
      },
      {
        title: "Historical Engineering Literature",
        text: "Analyzing British and American scientific engineering papers published between 1880 and 1960."
      },
      {
        title: "Aerodynamics & Wind Tunnel Testing",
        text: "Converting historical FPS aerodynamic force data to SI newtons for computer modeling."
      },
      {
        title: "Physics Simulator Software",
        text: "Validating cross-system dynamic engines that permit toggling between FPS absolute units and SI metric units."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing poundal (pdl) with pound-force (lbf); 1 lbf equals 32.174 pdl.",
      "Assuming poundal depends on local gravity; like the newton, the poundal is an absolute mass-acceleration unit.",
      "Truncating the conversion factor to 7.2 too early in theoretical physics proofs."
    ]
  },
  faqs: [
    {
      question: "How many poundals are in 1 newton?",
      answer: "There are approximately 7.23301387 poundals (pdl) in 1 newton."
    },
    {
      question: "What is a poundal?",
      answer: "A poundal is the unit of force in the absolute Foot-Pound-Second (FPS) system, defined as the force required to accelerate 1 pound of mass at 1 foot per second squared."
    },
    {
      question: "Is poundal an absolute or gravitational unit?",
      answer: "The poundal is an absolute unit of force, meaning its value does not change with local gravitational variation."
    },
    {
      question: "How does a poundal compare to a pound-force (lbf)?",
      answer: "1 pound-force (lbf) equals approximately 32.174048 poundals (pdl), because Earth's standard gravity is ~32.174 ft/s²."
    },
    {
      question: "How do I convert poundals to newtons?",
      answer: "Multiply the poundal value by 0.13825495 (or divide by 7.23301387)."
    },
    {
      question: "Why was the poundal invented?",
      answer: "It was created in 1879 to eliminate local gravity (g) from Imperial engineering equations, creating a system symmetrical to the metric system."
    },
    {
      question: "Is the poundal commonly used today?",
      answer: "It is rarely used in commercial industry today, having been superseded by the newton in SI contexts and the pound-force in Imperial contexts."
    },
    {
      question: "What is 1 poundal in dynes?",
      answer: "1 poundal equals approximately 13,825.5 dynes."
    }
  ],
  relatedList: [
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Dyne", from: "newton", to: "dyne" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Ounce-force", from: "newton", to: "ounce-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" }
  ],
  references: [
    "Thomson, James (1879). 'On the Metric System of Units of Force'. British Association for the Advancement of Science",
    "ISO 80000-4: Quantities and units — Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
