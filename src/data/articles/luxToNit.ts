import { CustomArticleData } from "./types";

export const luxToNit: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "nit",
  seoTitle: "Lux to Nit Engineering Calculation (lx to cd/m²) | UnitsConvertors.com",
  metaDescription: "Calculate Nits (cd/m²) from Lux using surface reflectance parameters. Learn Lambertian reflection formulas, display visibility standards, worked examples, and FAQs.",
  h1: "Lux to Nit Engineering Calculation",
  introduction: [
    "Lux (lx) and Nits (cd/m²) describe two opposite ends of the optical pathway. Lux quantifies incident illuminance—the density of luminous flux arriving at a target surface (lumens per square meter). In contrast, Nits (the non-SI name for candela per square meter, cd/m²) quantify luminance—the perceived surface brightness emitted or reflected off a surface toward an observer's eye.",
    "Because lux measures light falling onto a surface while nits measure light reflecting off it, there is no single universal conversion factor between lux and nits without specifying the surface reflectance factor ($R$, where $0 \le R \le 1$) and assuming ideal diffuse (Lambertian) scattering. For a perfect white Lambertian reflector ($R = 1.0$), luminance in nits ($L$) is calculated by dividing incident illuminance in lux ($E$) by $\pi$ ($\approx 3.14159$): $L = E / \pi \approx E \times 0.31831$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide covers surface reflectance properties, display screen ambient contrast ratios, tablet/smartphone outdoor legibility engineering, step-by-step calculations, and practical optical examples."
  ],
  quickAnswer: {
    text: "Lux measures incident light falling on a surface, while Nits (cd/m²) measure surface brightness reflected into the eye. Therefore, there is no fixed conversion factor between lux and nits. For a diffuse surface with reflectance R, Nits = (Lux × R) ÷ π. For a 100% reflective white surface (R = 1.0), 1 Lux produces approximately 0.3183 Nits.",
    formulaDisplay: "Nits = (lx × R) ÷ π ≈ lx × R × 0.31831",
    subtext: "For a perfect diffuse white surface (R = 1.0), 1 Lux equals ~0.3183 Nits."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance, defined as one lumen per square meter (1 lx = 1 lm/m²). It measures ambient light falling onto surfaces such as desks, display screens, or road signs."
  },
  aboutTargetUnit: {
    title: "Understanding the Nit (cd/m²)",
    text: "The Nit (symbol: nt) is the modern engineering term for Candela per Square Meter (1 nit = 1 cd/m²). It is the universal metric used to specify display screen peak brightness (OLED/LCD monitors, smartphones, automotive cockpits)."
  },
  relationship: "Lux and Nits are linked by surface reflectance and Lambertian scattering (1/π steradians). Reflected Luminance (nits) = (Incident Lux × Reflectance R) / π. Dark surfaces (low R) reflect far fewer nits than light surfaces under identical lux levels.",
  relationshipTitle: "Lux to Nit Ratios Across Common Surface Reflectance Values (at 500 Lux Ambient)",
  relationshipItems: [
    { label: "500 lx on White Paper (R = 0.85)", value: "135.28 nits (Standard printed document desk brightness)" },
    { label: "500 lx on Clean Concrete (R = 0.40)", value: "63.66 nits (Sidewalk / warehouse floor ambient brightness)" },
    { label: "500 lx on Green Grass (R = 0.20)", value: "31.83 nits (Park lawn landscape reflected luminance)" },
    { label: "500 lx on Dark Asphalt (R = 0.07)", value: "11.14 nits (Roadway surface night driving brightness)" },
    { label: "500 lx on Matte Black Paint (R = 0.04)", value: "6.37 nits (Acoustic panel / dark museum wall brightness)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Lux by the surface reflectance factor R (from 0.0 to 1.0) and divide by π (3.14159265).",
    math: "Nits (cd/m²) = (lx × R) / π",
    subtext: "For a 100% white diffuse surface (R = 1.0): Nits = lx × 0.31831."
  },
  formulaTitle: "Lux to Nit Reflection Formula",
  practicalTip: {
    title: "Smartphone Display Sunlight Legibility Rule",
    text: "For a screen to remain readable under ambient sunlight (10,000 lux), display luminance in nits must significantly exceed ambient diffuse reflection. Premium outdoor smartphones target 1,000 to 2,000 nits peak brightness."
  },
  expertNote: {
    title: "Lambertian Reflection Assumption",
    text: "The formula L = E·R/π assumes an ideal diffuse (Lambertian) surface that reflects light uniformly in all directions. Glossy screens or metallic mirror surfaces exhibit specular highlights governed by BRDF equations."
  },
  examples: {
    title: "Step-by-Step lx to nit Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Printed Book Page under Office Task Light",
        subtitle: "Calculate reflected brightness in nits for a white book page (reflectance R = 0.80) illuminated by 500 Lux desk lighting.",
        steps: [
          "Identify illuminance: 500 lx.",
          "Identify reflectance: R = 0.80.",
          "Multiply illuminance by reflectance: 500 × 0.80 = 400.",
          "Divide by π: 400 ÷ 3.14159 = 127.32.",
          "Final Result: The book page reflects approximately 127.32 Nits."
        ]
      },
      {
        title: "Example 2: Outdoor Highway Sign under Daylight",
        subtitle: "A retroreflective white road sign (effective R = 0.70) receives 10,000 Lux daylight illuminance. Calculate surface nits.",
        steps: [
          "Identify illuminance: 10,000 lx.",
          "Identify reflectance: R = 0.70.",
          "Calculate: (10,000 × 0.70) ÷ 3.14159 = 7,000 ÷ 3.14159 = 2,228.17.",
          "Final Result: The road sign exhibits a luminance of 2,228.17 Nits."
        ]
      },
      {
        title: "Example 3: Perfect 100% White Standard Reference Plane",
        subtitle: "Calculate nits for a 100% white diffuser plane (R = 1.0) receiving 300 Lux.",
        steps: [
          "Identify illuminance: 300 lx.",
          "Reflectance R = 1.0.",
          "Calculate: 300 × 0.31831 = 95.49.",
          "Final Result: 300 Lux produces 95.49 Nits."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Nit Reflection Reference Matrix (100% White vs 80% Paper vs 50% Gray)",
    headers: ["Incident Lux", "100% White (R=1.0)", "80% Paper (R=0.8)", "50% Gray (R=0.5)", "Environmental Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.318 nt", extra: "0.255 nt", extra2: "0.159 nt", extra3: "Full moon clear sky night surface ambient" },
      { fromVal: "10 lx", toVal: "3.183 nt", extra: "2.546 nt", extra2: "1.592 nt", extra3: "Streetlight walkway pavement illumination" },
      { fromVal: "50 lx", toVal: "15.915 nt", extra: "12.732 nt", extra2: "7.958 nt", extra3: "Residential living room relaxation ambient" },
      { fromVal: "100 lx", toVal: "31.831 nt", extra: "25.465 nt", extra2: "15.915 nt", extra3: "Warehouse storage aisle floor surface" },
      { fromVal: "300 lx", toVal: "95.493 nt", extra: "76.394 nt", extra2: "47.746 nt", extra3: "Classroom desk workspace environment" },
      { fromVal: "500 lx", toVal: "159.155 nt", extra: "127.324 nt", extra2: "79.577 nt", extra3: "Standard commercial office computer desk" },
      { fromVal: "1,000 lx", toVal: "318.310 nt", extra: "254.648 nt", extra2: "159.155 nt", extra3: "Precision electronics assembly workbench" },
      { fromVal: "10,000 lx", toVal: "3,183.099 nt", extra: "2,546.479 nt", extra2: "1,591.549 nt", extra3: "Full indirect outdoor daylight in open shade" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Nit Engineering Calculations",
    items: [
      {
        title: "Smartphone & Laptop Display Engineering",
        text: "Display optics engineers calculate ambient glare in nits by multiplying room lux by anti-reflective glass reflectance to maintain screen contrast."
      },
      {
        title: "Automotive Cockpit & HUD Visibility Standards",
        text: "Automotive engineers evaluate dashboard gauge visibility by calculating reflected nits off windshields under direct sunlight lux."
      },
      {
        title: "Architectural Traffic & Signage Ergonomics",
        text: "Transportation planners design highway signs to maintain target luminance in nits under nighttime headlight illuminance (lux)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Nits from Lux",
    items: [
      "Assuming 1 Lux directly equals 1 Nit: Lux and nits measure different phenomena; converting requires surface reflectance R and dividing by π.",
      "Forgetting the π factor: Omitting 1/π yields a 3.14x calculation error for Lambertian surface scattering.",
      "Ignoring surface color/reflectance: Black matte surfaces reflect under 5% of incident lux compared to white paper (80%+)."
    ]
  },
  faqs: [
    {
      question: "Is there a direct conversion factor between Lux and Nits?",
      answer: "No. Lux measures incident illuminance, while Nits measure reflected surface luminance. The calculation requires surface reflectance (R) and dividing by π."
    },
    {
      question: "What is the formula to calculate Nits from Lux?",
      answer: "The formula is: Nits = (Lux × Reflectance R) ÷ π. For a 100% white surface (R = 1.0), Nits = Lux ÷ 3.14159."
    },
    {
      question: "How many Nits does 1 Lux produce on a white surface?",
      answer: "On a 100% reflective white Lambertian surface, 1 Lux produces approximately 0.3183 Nits (1 ÷ π)."
    },
    {
      question: "What is the difference between a Nit and a Candela per square meter?",
      answer: "They are identical. 'Nit' is the modern industry term for Candela per Square Meter (1 nit = 1 cd/m²)."
    },
    {
      question: "Why do outdoor smartphones need 1,000+ Nits?",
      answer: "Sunlight illuminance can exceed 10,000 to 100,000 lux. Display luminance must reach 1,000+ nits to remain visible over reflected ambient glare."
    },
    {
      question: "How many Nits is 500 Lux on white paper?",
      answer: "Standard white paper has R ≈ 0.80. Nits = (500 × 0.80) ÷ 3.14159 = 400 ÷ 3.14159 ≈ 127.32 Nits."
    },
    {
      question: "What is a Lambertian surface?",
      answer: "An ideal matte surface that reflects light equally in all directions, causing surface luminance (nits) to equal E·R/π regardless of viewing angle."
    },
    {
      question: "How do I convert Nits back to Lux on a white surface?",
      answer: "For R = 1.0, multiply Nits by π (approx. 3.14159)."
    }
  ],
  relatedList: [
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Foot-Lambert", from: "lux", to: "foot-lambert" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "CIE 17.4: International Lighting Vocabulary — Luminance & Illuminance.",
    "ISO 9241-307: Ergonomics of Human-System Interaction — Display Requirements.",
    "IESNA Lighting Handbook (10th Edition): Surface Reflectance & Luminance."
  ]
};
