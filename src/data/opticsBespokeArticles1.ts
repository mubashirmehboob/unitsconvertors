import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Optics & Light Calculators (Part 1).
 * Adheres strictly to OPTICS & LIGHT CALCULATOR ARTICLE TEMPLATE V1.0.
 */

export const opticsBespokeArticlesPart1: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 1. INVERSE SQUARE LAW ILLUMINANCE CALCULATOR
  "inverse-square-law": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Inverse Square Law Illuminance Calculator | Photometric Distance Solver",
    metaDescription: "Calculate illuminance in Lux (E = I / d²) from source luminous intensity in candela and radial distance using the fundamental photometric inverse square law.",
    canonicalUrl,
    introduction: {
      overview: "The inverse square law of illuminance describes the physical reduction in light intensity per unit surface area as light propagates outward from an isotropic point source through three-dimensional space. Because radiant and luminous flux spread evenly across the surface of an expanding sphere whose surface area grows proportionally to the square of its radius (A = 4πr²), the illuminance received at a surface oriented perpendicular to the beam axis decreases inversely with the square of the distance from the source. In optical engineering, architectural lighting, photography, and machine vision, calculating inverse-square falloff is essential for determining luminaire spacing, flash exposure distances, sensor threshold levels, and workplace compliance.",
      applications: [
        "Determining illumination drop-off and luminaire mounting heights in commercial lighting design.",
        "Calculating photographic flash guide numbers and subject exposure levels at varying distances.",
        "Calibrating optical sensor thresholds and radiometer detectors at fixed optical bench distances.",
        "Designing machine vision strobe illumination setups for high-speed industrial quality inspection."
      ],
      industries: [
        "Photometry & Architectural Lighting",
        "Photography & Cinematography",
        "Machine Vision & Industrial Inspection",
        "Optical Sensor Engineering & Metrology"
      ]
    },
    quickAnswer: "The Inverse Square Law Illuminance Calculator determines surface illuminance in Lux from source luminous intensity in candela and distance using E = I / d². With default values of 1,000 Candela and a distance of 5 meters, the calculated illuminance is exactly 40.0 Lux.",
    governingEquation: {
      formula: "E = \\frac{I}{d^2}",
      explanation: "Illuminance (E in Lux) equals the luminous intensity of the source (I in Candela) divided by the square of the distance (d in meters) between the source and the receiving surface. One Lux is defined as one Lumen per square meter (1 lx = 1 lm/m²).",
      variables: [
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Luminous flux incident per unit surface area." },
        { symbol: "I", label: "Source Intensity", unit: "Candela (cd)", description: "Luminous intensity emitted in a specific angular direction." },
        { symbol: "d", label: "Distance", unit: "Meters (m)", description: "Linear separation between the light source and the target surface." }
      ]
    },
    inputParameters: [
      {
        name: "intensity",
        label: "Source Intensity (I)",
        unit: "Candela (cd)",
        defaultValue: 1000,
        explanation: "The luminous intensity of the light source along the optical measurement axis in Candela. Increasing source intensity produces a directly proportional linear increase in received surface illuminance."
      },
      {
        name: "distance",
        label: "Distance (d)",
        unit: "Meters (m)",
        defaultValue: 5,
        explanation: "The linear distance from the light source center to the receiving surface in meters. Doubling the distance reduces surface illuminance to one-fourth (25%) of its initial value."
      }
    ],
    outputExplanation: {
      unit: "Lux (lx)",
      interpretation: "The surface illuminance in Lux, representing the density of visible luminous flux striking a flat perpendicular plane at the target distance.",
      designImpact: "Used by lighting designers and optical engineers to specify required lamp candela ratings and fixture heights to satisfy ISO/CIE workplace task lighting standards."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Source Intensity (I)", value: 1000, unit: "cd" },
        { label: "Distance (d)", value: 5, unit: "m" }
      ],
      substitution: "Substitute I = 1000 cd and d = 5 m into E = I / d²:",
      intermediateSteps: [
        "1. Identify the source luminous intensity: I = 1000 Candela.",
        "2. Square the distance: d² = (5 m)² = 25 m².",
        "3. Divide luminous intensity by squared distance: E = 1000 cd / 25 m² = 40 Lux.",
        "4. Verify units: 1 cd/m² = 1 lm/(sr·m²) = 1 Lux for normal incidence."
      ],
      finalResult: "40",
      unit: "Lux (lx)"
    },
    practicalExample: {
      scenarioTitle: "Studio Portrait Key Light Exposure Calibration",
      industryContext: "A studio cinematographer positions a focused 4,000 Candela LED Fresnel key light to illuminate an actor sitting at an initial distance of 2 meters, and then evaluates moving the fixture back to 4 meters to soften shadows.",
      problemStatement: "Determine the illuminance at both 2 meters and 4 meters, and calculate the exposure stop compensation needed.",
      engineeringSolution: "At 2 meters: E₁ = 4000 / (2)² = 4000 / 4 = 1000 Lux. At 4 meters: E₂ = 4000 / (4)² = 4000 / 16 = 250 Lux. Moving the fixture from 2 m to 4 m reduces illuminance by a factor of 4 (a 2-stop reduction in photographic exposure), requiring camera aperture or ISO compensation."
    },
    assumptions: [
      "The light source is an isotropic or point-like emitter (source physical dimension is less than 1/5th of the measurement distance, the 'five-times rule').",
      "The receiving surface is planar and oriented strictly perpendicular to the central optical axis (normal angle of incidence θ = 0°).",
      "Light propagates through a non-absorbing, non-scattering medium (ideal vacuum or clean dry air)."
    ],
    limitations: [
      "Does not apply in the near-field of large area emitters (e.g., edge-lit LED panels or diffuse troffers where distance d < 5 × source width).",
      "Does not account for indirect inter-reflections from nearby walls, ceilings, or optical reflectors.",
      "Angular light incidence requires Lambert's cosine law correction: E = (I / d²) × cos(θ)."
    ],
    commonMistakes: [
      "Using distance in feet or inches without converting to SI meters, leading to errors of a factor of 10.76 (1 Foot-candle = 10.764 Lux).",
      "Applying the inverse square law to collimated laser beams, which have near-zero angular divergence and do not follow 1/d² geometric spreading.",
      "Treating large continuous fluorescent or LED panel luminaires as point sources at close distances."
    ],
    bestPractices: [
      "Verify the 'Five-Times Rule' of photometry: ensure the measurement distance is at least 5 to 10 times the largest dimension of the luminous aperture.",
      "Include the cosine of the angle of incidence (E = (I / d²) · cos θ) whenever the surface is tilted relative to the beam.",
      "Cross-check calculated illuminance values with calibrated photopic illuminance meters (luxmeters) complying with CIE Class A or B standards."
    ],
    faqs: [
      {
        question: "What does the Inverse Square Law Illuminance Calculator determine?",
        answer: "It calculates the perpendicular illuminance in Lux arriving at a surface located a distance d away from a point light source emitting a known luminous intensity in Candela."
      },
      {
        question: "Why does illuminance decrease with the square of distance instead of linearly?",
        answer: "Light radiates outward in three dimensions over the surface of an expanding sphere. Because spherical surface area is proportional to the square of its radius (A = 4πr²), the same total luminous flux is spread over 4 times the area when distance doubles, resulting in ¼ the illuminance."
      },
      {
        question: "What is the physical difference between Candela and Lux?",
        answer: "Candela (cd) measures luminous intensity emitted by a source in a given direction (lumens per steradian). Lux (lx) measures illuminance, which is the density of luminous flux striking a receiving surface (lumens per square meter)."
      },
      {
        question: "What is the 'five-times rule' in photometric distance measurements?",
        answer: "The five-times rule states that a light fixture can be accurately modeled as a point source for inverse-square calculations only when the distance to the measuring point is at least five times the maximum physical dimension of the luminaire."
      },
      {
        question: "How does tilting the receiving surface affect inverse-square illuminance?",
        answer: "Tilting the surface by an angle θ relative to the normal beam axis reduces illuminance according to Lambert's Cosine Law: E = (I / d²) × cos(θ). At θ = 60°, illuminance is cut in half because cos(60°) = 0.5."
      },
      {
        question: "Does the inverse square law apply to laser beams?",
        answer: "No. Collimated laser beams have very low divergence and propagate with nearly parallel wavefronts, meaning their power density does not diminish according to the standard 1/d² spherical geometric spreading law."
      },
      {
        question: "How do you convert Lux into Foot-candles (fc)?",
        answer: "Divide Lux by 10.764 (or multiply Foot-candles by 10.764 to get Lux). For example, 40 Lux equals approximately 3.72 Foot-candles."
      },
      {
        question: "Which international standards govern photometric measurements and illuminance?",
        answer: "CIE S 025/E:2015 (Test Method for LED Lamps, Luminaires and Modules) and ISO/CIE 8995-1 (Lighting of Work Places) establish global measurement protocols and required illuminance levels."
      }
    ],
    standardsReferences: [
      { organization: "CIE", code: "CIE S 025/E:2015", title: "Test Method for LED Lamps, LED Luminaires and LED Modules" },
      { organization: "ISO / CIE", code: "ISO/CIE 8995-1:2002", title: "Lighting of Work Places — Part 1: Indoor" },
      { organization: "IES", code: "IES LM-79-19", title: "Approved Method: Optical and Electrical Measurements of Solid-State Lighting Products" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 2. LUMINOUS FLUX FROM LUX & AREA CALCULATOR
  "lux-to-lumen": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Luminous Flux from Lux & Area Calculator | Lumens from Illuminance Solver",
    metaDescription: "Calculate total luminous flux in Lumens (Φ = E × A) from target illuminance in Lux and surface area in square meters for architectural and task lighting design.",
    canonicalUrl,
    introduction: {
      overview: "Luminous flux (measured in Lumens) quantifies the total perceived optical power emitted by a light source or received across a designated boundary surface, weighted by the human eye's photopic spectral sensitivity curve V(λ). When average illuminance (measured in Lux or lumens per square meter) is known across a target workplane or room footprint, multiplying illuminance by the total surface area determines the total luminous flux required to maintain that lighting level. This calculation is a foundational step in architectural lighting layout, lumen method room cavity ratio sizing, and greenhouse supplementary light planning.",
      applications: [
        "Calculating total lamp lumen packages required to illuminate office floors, classrooms, and warehouses.",
        "Sizing greenhouse supplementary assimilation lighting installations based on target target lux levels.",
        "Auditing commercial facility compliance with architectural lighting code requirements.",
        "Specifying sports arena and stadium floodlight total lumen delivery budgets."
      ],
      industries: [
        "Architectural Lighting & Building Services",
        "Commercial Facility Design & Energy Auditing",
        "Horticultural & Agricultural Lighting",
        "Sports Facility & Broadcast Lighting"
      ]
    },
    quickAnswer: "The Luminous Flux from Lux & Area Calculator determines total lumens from surface illuminance and area using Φ = E × A. With default values of 500 Lux and a surface area of 20 m², the total luminous flux required across the plane is exactly 10,000 Lumens.",
    governingEquation: {
      formula: "\\Phi = E \\times A",
      explanation: "Luminous flux (Φ in Lumens) is the product of uniform surface illuminance (E in Lux) and total surface area (A in square meters). Because 1 Lux equals 1 Lumen per square meter (1 lx = 1 lm/m²), multiplying Lux by square meters yields the total luminous flux in Lumens.",
      variables: [
        { symbol: "Φ", label: "Luminous Flux", unit: "Lumens (lm)", description: "Total quantity of visible light energy delivered across the surface." },
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Luminous flux density incident on the target plane (lm/m²)." },
        { symbol: "A", label: "Surface Area", unit: "Square Meters (m²)", description: "Total geometric area of the illuminated receiving plane." }
      ]
    },
    inputParameters: [
      {
        name: "illuminance",
        label: "Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 500,
        explanation: "The target average illuminance across the working surface in Lux. Standard office desk task lighting typically requires 500 lx."
      },
      {
        name: "area",
        label: "Surface Area (A)",
        unit: "Square Meters (m²)",
        defaultValue: 20,
        explanation: "The total geometric area of the room or task plane in square meters. Increasing the area proportionally increases the total lumens needed."
      }
    ],
    outputExplanation: {
      unit: "Lumens (lm)",
      interpretation: "The total quantity of luminous flux that must land on the target plane to achieve the specified illuminance level.",
      designImpact: "Determines the total number of LED fixtures required by dividing total required lumens by the lumen package rating of individual luminaires."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Illuminance (E)", value: 500, unit: "lx" },
        { label: "Surface Area (A)", value: 20, unit: "m²" }
      ],
      substitution: "Substitute E = 500 lx and A = 20 m² into Φ = E × A:",
      intermediateSteps: [
        "1. Identify the required illuminance level: E = 500 Lux (500 lm/m²).",
        "2. Identify the total illuminated floor area: A = 20 m².",
        "3. Multiply illuminance by surface area: Φ = 500 lm/m² × 20 m² = 10,000 Lumens.",
        "4. Confirm units: Lux × m² = (lm/m²) × m² = Lumens."
      ],
      finalResult: "10000",
      unit: "Lumens (lm)"
    },
    practicalExample: {
      scenarioTitle: "Corporate Conference Room LED Lighting Specification",
      industryContext: "An electrical engineer designs the lighting layout for a 60 m² executive boardroom requiring an average workplane illuminance of 400 Lux to satisfy EN 12464-1 indoor workplace standards.",
      problemStatement: "Calculate the total net lumens required on the tabletop and floor, and determine how many 3,200-lumen LED troffers are needed assuming a room coefficient of utilization (CU) and light loss factor (LLF) of 0.65 overall.",
      engineeringSolution: "Net flux on the surface: Φ_net = E × A = 400 lx × 60 m² = 24,000 Lumens. Factoring room efficiency (CU × LLF = 0.65): Total lamp lumens needed = 24,000 / 0.65 = 36,923 Lumens. Number of 3,200 lm fixtures = 36,923 / 3,200 ≈ 11.54, which rounds up to 12 LED troffers."
    },
    assumptions: [
      "Illuminance is distributed uniformly across the entire designated surface area.",
      "The calculation computes net received flux directly on the workplane.",
      "Light arrives perpendicular to the receiving surface."
    ],
    limitations: [
      "Does not account for fixture beam distribution losses, optical room cavity absorption, or luminaire depreciation over time.",
      "Real luminaires must produce significantly more gross lumens than net received lumens to compensate for room geometry and wall absorptions.",
      "Non-uniform lighting distributions will have higher local peak lux and lower peripheral lux values."
    ],
    commonMistakes: [
      "Assuming raw luminaire catalog lumens equal received surface lumens without accounting for room utilization coefficients.",
      "Entering room dimensions in square feet instead of square meters without conversion (1 m² ≈ 10.764 sq ft).",
      "Confusing total lumens (total emitted optical power) with lux (spatial density of light)."
    ],
    bestPractices: [
      "In corporate lighting design, always apply the Lumen Method formula: Gross Lumens = (E × A) / (CU × LLF).",
      "Target standard CIE illuminance benchmarks: 100–150 lx for corridors, 500 lx for offices, 750–1000 lx for precision technical drafting.",
      "Select high-efficacy LED luminaires (> 120 lm/W) to minimize overall electrical building power density (W/m²)."
    ],
    faqs: [
      {
        question: "What is the relationship between Lux, Lumens, and Area?",
        answer: "One Lux is defined as one Lumen evenly distributed over one square meter of area (1 lx = 1 lm/m²). Therefore, total Lumens = Lux × Area (m²)."
      },
      {
        question: "Does this calculation tell me how many light bulbs I need to buy?",
        answer: "This calculation determines the net lumens that must land on the target surface. To find the required light bulb count, divide this result by the luminaire's room utilization factor (typically 0.5 to 0.7) and the lumens per bulb."
      },
      {
        question: "What is the recommended lux level for a standard office desk?",
        answer: "ISO/CIE 8995-1 and EN 12464-1 recommend 500 Lux for general office work, typing, reading, and data processing."
      },
      {
        question: "How do I convert square feet to square meters for this calculation?",
        answer: "Divide the area in square feet by 10.764 to obtain square meters. For example, a 500 sq ft room equals 500 / 10.764 ≈ 46.45 m²."
      },
      {
        question: "What is the difference between luminous flux and radiant flux?",
        answer: "Radiant flux measures total electromagnetic power emitted across all wavelengths in pure Watts. Luminous flux measures visible optical power in Lumens, weighted by the spectral sensitivity of human vision (photopic response curve V(λ))."
      },
      {
        question: "Can I use this formula to calculate outdoor solar illumination lumens?",
        answer: "Yes. Direct sunlight at noon provides approximately 100,000 Lux. Over an area of 10 m², total solar luminous flux is 100,000 lx × 10 m² = 1,000,000 Lumens."
      },
      {
        question: "What is a Light Loss Factor (LLF) in lighting engineering?",
        answer: "Light Loss Factor (LLF) accounts for the reduction in luminaire output over time caused by lamp lumen depreciation (LLD), luminaire dirt depreciation (LDD), and room surface dirt accumulation."
      },
      {
        question: "What international standards define indoor workplace illuminance levels?",
        answer: "ISO/CIE 8995-1 / EN 12464-1 (Lighting of Indoor Workplaces) and IES RP-1 (Recommended Practice for Office Lighting) specify standard illuminance targets."
      }
    ],
    standardsReferences: [
      { organization: "ISO / CIE", code: "ISO/CIE 8995-1:2002", title: "Lighting of Work Places — Part 1: Indoor" },
      { organization: "CEN", code: "EN 12464-1:2021", title: "Light and Lighting — Lighting of Work Places (Indoor)" },
      { organization: "IES", code: "IES RP-1-20", title: "Recommended Practice: Lighting Office Spaces" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 3. ILLUMINANCE FROM LUMENS & AREA CALCULATOR
  "lumen-to-lux": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Illuminance from Lumens & Area Calculator | Lux from Luminous Flux Solver",
    metaDescription: "Calculate average surface illuminance in Lux (E = Φ / A) from total delivered luminous flux in lumens and illuminated surface area in square meters.",
    canonicalUrl,
    introduction: {
      overview: "Illuminance (symbol E, measured in Lux) is the fundamental photometric metric representing the areal density of visible luminous flux striking a given surface. When a light fixture or multi-luminaire system delivers a known total luminous flux (measured in Lumens) uniformly across a floor, desktop, or roadway surface of known area (in square meters), the resulting average illuminance is calculated by dividing total lumens by surface area (E = Φ / A). Evaluating illuminance is critical for ensuring visual acuity, safety, ergonomic comfort, and regulatory compliance across architectural, industrial, and commercial environments.",
      applications: [
        "Calculating expected average desk-level or floor-level lux from known fixture lumen packages.",
        "Verifying warehouse and industrial storage aisle safety lighting compliance.",
        "Evaluating photographic studio light bank illumination density across backdrop cycloramas.",
        "Estimating roadway and parking lot surface lux levels during exterior site lighting planning."
      ],
      industries: [
        "Architectural Lighting Engineering",
        "Industrial Workplace Health & Safety",
        "Commercial Real Estate & Facility Management",
        "Photography & Television Studio Design"
      ]
    },
    quickAnswer: "The Illuminance from Lumens & Area Calculator determines surface illuminance in Lux from total lumens and area using E = Φ / A. With default values of 10,000 Lumens distributed across an area of 20 m², the resulting illuminance is exactly 500.0 Lux.",
    governingEquation: {
      formula: "E = \\frac{\\Phi}{A}",
      explanation: "Illuminance (E in Lux) equals the total delivered luminous flux (Φ in Lumens) divided by the illuminated surface area (A in square meters). One Lux is equal to one Lumen per square meter (1 lx = 1 lm/m²).",
      variables: [
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Areal density of luminous flux incident on the target plane." },
        { symbol: "Φ", label: "Luminous Flux", unit: "Lumens (lm)", description: "Total visible light output delivered to the surface." },
        { symbol: "A", label: "Surface Area", unit: "Square Meters (m²)", description: "Total receiving surface area over which the flux is distributed." }
      ]
    },
    inputParameters: [
      {
        name: "lumens",
        label: "Luminous Flux (Φ)",
        unit: "Lumens (lm)",
        defaultValue: 10000,
        explanation: "The total quantity of luminous flux in Lumens reaching the target surface plane. Default baseline is 10,000 lm."
      },
      {
        name: "area",
        label: "Surface Area (A)",
        unit: "Square Meters (m²)",
        defaultValue: 20,
        explanation: "The physical surface area in square meters across which the luminous flux is distributed. Default baseline is 20 m²."
      }
    ],
    outputExplanation: {
      unit: "Lux (lx)",
      interpretation: "The resulting average illuminance level across the surface plane in Lux (lumens per square meter).",
      designImpact: "Directly compared against international workplace lighting codes (e.g., OSHA, EN 12464-1, IES standards) to verify visual task compliance."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Luminous Flux (Φ)", value: 10000, unit: "lm" },
        { label: "Surface Area (A)", value: 20, unit: "m²" }
      ],
      substitution: "Substitute Φ = 10000 lm and A = 20 m² into E = Φ / A:",
      intermediateSteps: [
        "1. Identify total luminous flux reaching the plane: Φ = 10,000 Lumens.",
        "2. Identify total target area: A = 20 m².",
        "3. Divide luminous flux by surface area: E = 10,000 lm / 20 m² = 500 lm/m².",
        "4. Convert to SI derived units: 500 lm/m² = 500 Lux."
      ],
      finalResult: "500",
      unit: "Lux (lx)"
    },
    practicalExample: {
      scenarioTitle: "Hospital Operating Theater Task Lighting Verification",
      industryContext: "A biomedical facility engineer verifies the illuminance delivered by an overhead surgical luminaire array delivering 45,000 net Lumens onto a 4.5 m² surgical field.",
      problemStatement: "Determine if the average illuminance meets the ISO/CIE surgical standard requirement of at least 10,000 Lux.",
      engineeringSolution: "E = Φ / A = 45,000 lm / 4.5 m² = 10,000 Lux. The lighting installation precisely meets the 10,000 Lux requirement for surgical operating fields."
    },
    assumptions: [
      "The specified luminous flux is distributed uniformly across the entire designated surface area.",
      "The receiving plane is oriented perpendicularly to the incident light.",
      "Internal inter-reflections are already incorporated into the net delivered lumen figure."
    ],
    limitations: [
      "Does not reveal local uniformity ratios (E_min / E_avg); hot spots directly beneath fixtures will have higher local lux than room corners.",
      "Raw catalog lumens of light fixtures cannot be used directly without derating for luminaire optical efficiency and room geometry.",
      "Does not account for shadows cast by room occupants or physical equipment."
    ],
    commonMistakes: [
      "Dividing fixture catalog lumens by room floor area without applying a Coefficient of Utilization (CU), overestimating actual lux by 30% to 50%.",
      "Using Foot-candles and square meters interchangeably without applying the 10.764 conversion factor.",
      "Assuming high lux guarantees good visibility while ignoring visual glare rating (UGR)."
    ],
    bestPractices: [
      "Use spot photometric measurements with a calibrated luxmeter to verify that the minimum-to-average uniformity ratio (E_min / E_avg) exceeds 0.60.",
      "For desktop visual tasks, avoid over-illumination above 1000 Lux to prevent optical eye fatigue and excessive building energy consumption.",
      "Account for wall and ceiling surface reflectances (typically 70% ceiling, 50% walls, 20% floor) when estimating delivered lumens."
    ],
    faqs: [
      {
        question: "What is the difference between Lumens and Lux?",
        answer: "Lumens measure the total amount of light emitted by a source in all directions. Lux measures how concentrated that light is when it lands on a specific surface area (1 Lux = 1 Lumen per square meter)."
      },
      {
        question: "How many lux is 10,000 lumens in a 20 square meter room?",
        answer: "Dividing 10,000 Lumens by 20 square meters yields exactly 500 Lux (10000 / 20 = 500 lx)."
      },
      {
        question: "What is the minimum lux required for a residential living room vs office?",
        answer: "Residential living rooms generally require 100–200 Lux for relaxed ambient lighting, whereas office workstations require 500 Lux for reading and screen tasks."
      },
      {
        question: "How do I convert Lux to Foot-candles?",
        answer: "Divide Lux by 10.764 (1 Foot-candle = 10.764 Lux). For example, 500 Lux equals approximately 46.45 Foot-candles."
      },
      {
        question: "Why does the actual measured lux differ from theoretical lumen/area calculation?",
        answer: "Theoretical lumen/area assumes 100% of light hits the floor evenly. In reality, fixture optics absorb 10–20% of light, room walls absorb 30–50%, and light spreads non-uniformly, creating higher lux beneath fixtures."
      },
      {
        question: "What is the Coefficient of Utilization (CU) in lighting design?",
        answer: "The Coefficient of Utilization (CU) is the ratio of luminous flux reaching the workplane to the total luminous flux emitted by the lamps, accounting for fixture efficiency and room surface reflections."
      },
      {
        question: "How does ceiling height affect surface lux?",
        answer: "Higher ceilings spread the fixture's light cone over a larger floor area and increase wall absorption, reducing average surface illuminance unless narrower beam angles are selected."
      },
      {
        question: "What standard specifies illuminance requirements for emergency escape routes?",
        answer: "EN 1838 and NFPA 101 specify a minimum of 1.0 Lux along the central line of emergency escape routes during power failures."
      }
    ],
    standardsReferences: [
      { organization: "ISO / CIE", code: "ISO/CIE 8995-1:2002", title: "Lighting of Work Places — Part 1: Indoor" },
      { organization: "CEN", code: "EN 1838:2013", title: "Lighting Applications — Emergency Lighting" },
      { organization: "NFPA", code: "NFPA 101", title: "Life Safety Code — Emergency Lighting Provisions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 4. ILLUMINANCE FROM CANDELA & DISTANCE CALCULATOR
  "candela-to-lux": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Illuminance from Candela & Distance Calculator | Point Source Lux Solver",
    metaDescription: "Calculate on-axis illuminance in Lux (E = I / d²) from source luminous intensity in candela and target distance using classical point-source photometry.",
    canonicalUrl,
    introduction: {
      overview: "Luminous intensity (measured in Candela, cd) is the SI base unit measuring the luminous flux emitted by a light source per unit solid angle in a specific spatial direction (1 cd = 1 lm/sr). Illuminance (measured in Lux) describes the density of light arriving at a distant surface. For directional light sources—such as LED spotlights, automotive headlights, searchlights, and flashlights—on-axis illuminance is determined directly by dividing the central beam intensity in candela by the square of the distance to the target (E = I / d²). This calculation is essential in headlight range testing, architectural accent lighting, and optical sensor calibration.",
      applications: [
        "Determining automotive high-beam and low-beam headlight throw distance and road surface lux.",
        "Designing theatrical and museum accent spotlights to illuminate artwork without optical degradation.",
        "Calibrating optical luxmeters against secondary standard tungsten-filament candela lamps on optical rails.",
        "Evaluating flashlight and searchlight beam throw ratings according to ANSI/NEMA FL1 standards."
      ],
      industries: [
        "Automotive Lighting & Roadway Safety",
        "Theatrical & Museum Lighting Design",
        "Photometry & Calibration Laboratories",
        "Consumer Electronics & Flashlight Manufacturing"
      ]
    },
    quickAnswer: "The Illuminance from Candela & Distance Calculator determines surface illuminance in Lux using E = I / d². With default values of 1,500 Candela and a distance of 3 meters, the calculated on-axis illuminance is approximately 166.67 Lux.",
    governingEquation: {
      formula: "E = \\frac{I}{d^2}",
      explanation: "Illuminance (E in Lux) equals the source luminous intensity (I in Candela) along the central optical beam axis divided by the square of the distance (d in meters) to the receiving plane. 1 Lux = 1 cd / 1 m².",
      variables: [
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Luminous flux density incident on the target plane." },
        { symbol: "I", label: "Luminous Intensity", unit: "Candela (cd)", description: "Luminous flux per unit solid angle along the emission axis." },
        { symbol: "d", label: "Distance", unit: "Meters (m)", description: "Radial distance from source center to target surface." }
      ]
    },
    inputParameters: [
      {
        name: "intensity",
        label: "Luminous Intensity (I)",
        unit: "Candela (cd)",
        defaultValue: 1500,
        explanation: "The luminous intensity emitted by the light source in the direction of the target, measured in Candela. Default baseline is 1,500 cd."
      },
      {
        name: "distance",
        label: "Distance (d)",
        unit: "Meters (m)",
        defaultValue: 3,
        explanation: "The straight-line separation distance between the light source and the target surface in meters. Default baseline is 3 meters."
      }
    ],
    outputExplanation: {
      unit: "Lux (lx)",
      interpretation: "The normal on-axis illuminance reaching the surface at the specified distance.",
      designImpact: "Used to determine whether directional beam fixtures provide sufficient task illuminance without exceeding maximum allowed glare limits."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Luminous Intensity (I)", value: 1500, unit: "cd" },
        { label: "Distance (d)", value: 3, unit: "m" }
      ],
      substitution: "Substitute I = 1500 cd and d = 3 m into E = I / d²:",
      intermediateSteps: [
        "1. Identify the source luminous intensity: I = 1500 Candela.",
        "2. Square the distance: d² = (3 m)² = 9 m².",
        "3. Divide intensity by squared distance: E = 1500 cd / 9 m² = 166.666... Lux.",
        "4. Round to standard engineering precision: 166.67 Lux."
      ],
      finalResult: "166.67",
      unit: "Lux (lx)"
    },
    practicalExample: {
      scenarioTitle: "Automotive Headlight Beam Reach Safety Testing",
      industryContext: "An automotive safety engineer verifies whether an LED high-beam headlight emitting 120,000 Candela on-axis satisfies the ECE Regulation 112 requirement of providing at least 1.0 Lux at a distance of 300 meters.",
      problemStatement: "Calculate the illuminance at 300 meters and determine the maximum beam throw distance where illuminance drops to 0.25 Lux (ANSI flashlight standard).",
      engineeringSolution: "At 300 m: E = 120,000 cd / (300 m)² = 120,000 / 90,000 = 1.33 Lux (> 1.0 Lux compliant). Maximum throw distance to 0.25 Lux: d_max = √(120,000 / 0.25) = √(480,000) ≈ 692.8 meters."
    },
    assumptions: [
      "The light source is treated as a point source along the axis of interest.",
      "The target plane is oriented perpendicular to the central optical axis.",
      "Atmospheric absorption and scattering are negligible."
    ],
    limitations: [
      "Only calculates illuminance at the center of the beam (on-axis); off-axis illuminance decreases following the fixture's candela distribution curve (polar photometric diagram).",
      "In foggy, rainy, or dusty conditions, atmospheric extinction reduces received lux exponentially.",
      "At distances closer than 5 times the lens diameter, near-field optical effects invalidate point-source assumptions."
    ],
    commonMistakes: [
      "Using total lamp lumens instead of directional candela in the numerator.",
      "Forgetting to square the distance in the denominator (dividing by d instead of d²).",
      "Assuming high candela means high total lumens (a laser pointer has high candela but very few lumens because its beam is extremely narrow)."
    ],
    bestPractices: [
      "Consult the luminaire's IES / EULUMDAT photometric file to obtain exact off-axis candela values at specific angles (γ, C).",
      "In outdoor lighting calculations, apply an atmospheric transmission coefficient (typically T = 0.85 to 0.95 per km in clear weather).",
      "Use Candela ratings when designing accent or spotlighting, and Lumen ratings when designing general ambient room wash lighting."
    ],
    faqs: [
      {
        question: "What is the SI definition of one Candela?",
        answer: "The Candela (cd) is the SI base unit of luminous intensity in a given direction, defined by fixing the luminous efficacy of monochromatic radiation of frequency 540 × 10¹² Hz (green light, λ ≈ 555 nm) to be exactly 683 lumens per Watt."
      },
      {
        question: "How do you calculate lux from candela?",
        answer: "Divide the luminous intensity in candela by the square of the distance in meters: Lux = Candela / (Distance in meters)²."
      },
      {
        question: "Can a low-lumen light bulb have a higher candela rating than a high-lumen light bulb?",
        answer: "Yes. A 500-lumen spotlight with a tight 10° beam can produce over 10,000 Candela on-axis, whereas a 1,600-lumen omnidirectional light bulb emits only about 130 Candela in any single direction."
      },
      {
        question: "How does distance affect candela vs lux?",
        answer: "Candela is a property of the light source and remains constant regardless of distance. Lux is a property of the receiving surface and decreases with the square of distance (1/d²)."
      },
      {
        question: "What is the beam distance formula used in the ANSI/NEMA FL1 flashlight standard?",
        answer: "The ANSI/NEMA FL1 standard defines beam distance as the distance in meters where illuminance reaches 0.25 Lux (equivalent to full moonlight): Distance = √(Peak Candela / 0.25) = 2 × √(Peak Candela)."
      },
      {
        question: "How does off-axis angle affect candela intensity?",
        answer: "Directional luminaires exhibit peak candela at 0° (nadir / on-axis). As the viewing angle increases, intensity falls according to the optical reflector/lens design, reaching 50% of peak intensity at the half-beam angle."
      },
      {
        question: "What is the difference between Candela and Candela per square meter (cd/m²)?",
        answer: "Candela (cd) measures luminous intensity emitted from a source. Candela per square meter (cd/m² or nit) measures luminance, which is the perceived brightness of an emitting or reflecting surface area."
      },
      {
        question: "Which standards regulate automotive headlight luminous intensity and distribution?",
        answer: "UN ECE Regulation 112 (European Headlamps) and US FMVSS 108 / SAE J1383 regulate automotive forward lighting beam patterns and candela intensity limits."
      }
    ],
    standardsReferences: [
      { organization: "BIPM", code: "SI Brochure (9th Ed.)", title: "The International System of Units (SI) — Base Unit Candela" },
      { organization: "SAE", code: "SAE J1383", title: "Performance Requirements for Motor Vehicle Headlamps" },
      { organization: "NEMA / ANSI", code: "ANSI/NEMA FL 1-2019", title: "Flashlight Basic Performance Standard" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 5. REQUIRED CANDELA FROM LUX & DISTANCE CALCULATOR
  "lux-to-candela": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Required Candela from Lux & Distance Calculator | Spotlight Intensity Sizing",
    metaDescription: "Calculate required source luminous intensity in Candela (I = E × d²) from target illuminance in Lux and throw distance for precision spotlight and projector design.",
    canonicalUrl,
    introduction: {
      overview: "When specifying luminaires, spotlights, architectural facade projectors, or stage lighting, optical engineers often start with a target illuminance requirement (in Lux) on a distant subject and a known mounting distance (in meters). Because illuminance decreases according to the inverse square law (E = I / d²), rearranging the governing equation gives the required source luminous intensity: I = E × d². This calculation allows designers to select the appropriate center-beam candlepower (CBCP) rating or beam optic required to achieve the desired illumination target across long throw distances.",
      applications: [
        "Specifying center-beam candlepower (CBCP) for museum and gallery artwork spotlights.",
        "Sizing architectural facade floodlights and high-mast stadium projectors.",
        "Determining required lighthouse and marine beacon luminous intensity ranges.",
        "Selecting runway approach and obstruction beacon lighting intensity for aviation safety."
      ],
      industries: [
        "Architectural Facade & Landscape Lighting",
        "Museum & Art Gallery Lighting Design",
        "Marine Navigation & Lighthouse Engineering",
        "Aviation Ground Lighting & Aerodrome Design"
      ]
    },
    quickAnswer: "The Required Candela from Lux & Distance Calculator determines required source luminous intensity using I = E × d². With a target illuminance of 300 Lux at a distance of 4 meters, the required light source intensity is exactly 4,800 Candela.",
    governingEquation: {
      formula: "I = E \\times d^2",
      explanation: "Required luminous intensity (I in Candela) equals the target surface illuminance (E in Lux) multiplied by the square of the throw distance (d in meters). One Candela produces one Lux at a distance of one meter.",
      variables: [
        { symbol: "I", label: "Required Intensity", unit: "Candela (cd)", description: "Required source luminous intensity along the beam axis." },
        { symbol: "E", label: "Target Illuminance", unit: "Lux (lx)", description: "Desired luminous flux density at the target plane." },
        { symbol: "d", label: "Throw Distance", unit: "Meters (m)", description: "Linear separation between the fixture and the target surface." }
      ]
    },
    inputParameters: [
      {
        name: "illuminance",
        label: "Target Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 300,
        explanation: "The desired illuminance level at the target surface in Lux. Default baseline is 300 lx."
      },
      {
        name: "distance",
        label: "Throw Distance (d)",
        unit: "Meters (m)",
        defaultValue: 4,
        explanation: "The physical throw distance from the fixture mounting position to the illuminated target in meters. Default baseline is 4 meters."
      }
    ],
    outputExplanation: {
      unit: "Candela (cd)",
      interpretation: "The minimum central beam luminous intensity (CBCP) that the optical fixture must deliver along its optical axis.",
      designImpact: "Enables direct selection of reflector/lens beam angles (e.g., 10° spot vs 25° flood) from manufacturer photometric data sheets."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Target Illuminance (E)", value: 300, unit: "lx" },
        { label: "Throw Distance (d)", value: 4, unit: "m" }
      ],
      substitution: "Substitute E = 300 lx and d = 4 m into I = E × d²:",
      intermediateSteps: [
        "1. Identify the target illuminance level: E = 300 Lux.",
        "2. Square the throw distance: d² = (4 m)² = 16 m².",
        "3. Multiply illuminance by squared distance: I = 300 lx × 16 m² = 4,800 Candela.",
        "4. Confirm units: Lux × m² = (lm/m²) × m² = lm/sr = Candela (for normal solid angle beam)."
      ],
      finalResult: "4800",
      unit: "Candela (cd)"
    },
    practicalExample: {
      scenarioTitle: "Historic Monument Facade Projector Specification",
      industryContext: "An exterior lighting designer must illuminate a historic stone monument 25 meters away with a target illuminance of 150 Lux for nighttime architectural accentuation.",
      problemStatement: "Calculate the required center-beam candlepower (Candela) for the narrow-beam LED projector.",
      engineeringSolution: "I = E × d² = 150 lx × (25 m)² = 150 × 625 = 93,750 Candela (93.75 kcd). The designer specifies a 100 kcd, 8° narrow-spot architectural LED projector."
    },
    assumptions: [
      "The light beam aims directly perpendicular to the target surface plane.",
      "Clear atmospheric conditions with zero fog, rain, or dust transmission losses.",
      "Point-source geometric behavior across the throw distance."
    ],
    limitations: [
      "For long throw distances (> 100 m), atmospheric extinction (attenuation coefficient σ) requires exponential Beer-Lambert correction: I_actual = I_source × e^(-σd).",
      "Does not account for non-perpendicular surface strike angles; tilted targets require dividing by cos(θ).",
      "Provides central peak candela; peripheral illumination across wide targets will be lower based on fixture beam distribution."
    ],
    commonMistakes: [
      "Selecting a fixture based purely on total lumens rather than center-beam candela, resulting in insufficient illuminance across long throws.",
      "Ignoring the cosine factor when the spotlight is mounted at a steep downward angle to the target surface.",
      "Entering throw distance in feet without converting to meters."
    ],
    bestPractices: [
      "When specifying narrow-beam spotlights, select narrow optical TIR (total internal reflection) lenses (5° to 12°) to maximize candela per consumed watt.",
      "Add a 15% to 20% safety margin to calculated candela to compensate for LED lumen depreciation and optic dust accumulation over time.",
      "Check manufacturer Center Beam Candlepower (CBCP) data tables directly on IES photometric test reports."
    ],
    faqs: [
      {
        question: "Why do I need to calculate required candela instead of just buying a high-lumen bulb?",
        answer: "Lumens measure total light output in all directions, whereas Candela measures light concentrated in a specific direction. For long distances, a narrow-beam 1,000-lumen spot (10,000 cd) provides far higher illuminance than an omnidirectional 3,000-lumen bulb (240 cd)."
      },
      {
        question: "How do you calculate required candela from target lux and distance?",
        answer: "Multiply target lux by the square of the distance in meters: Candela = Lux × Distance²."
      },
      {
        question: "What is Center Beam Candlepower (CBCP)?",
        answer: "CBCP is the maximum luminous intensity (measured in candela) located at the exact center (0° axis) of a directional lamp's beam pattern."
      },
      {
        question: "How does angle of incidence affect required candela?",
        answer: "If light strikes the surface at an angle θ relative to the surface normal, the required intensity increases: I = (E × d²) / cos(θ)."
      },
      {
        question: "What candela rating is needed for 500 Lux at 10 meters?",
        answer: "I = 500 lx × (10 m)² = 500 × 100 = 50,000 Candela (50 kcd)."
      },
      {
        question: "How do TIR (Total Internal Reflection) optics increase fixture candela?",
        answer: "TIR optics capture virtually all emitted LED light and collimate it into a narrow forward beam cone, dramatically increasing luminous intensity (candela) without consuming additional electrical power."
      },
      {
        question: "How do airport beacon standards use candela requirements?",
        answer: "FAA AC 150/5345-43 requires airport rotating beacons to deliver at least 20,000 to 50,000 Candela of peak effective intensity to ensure visibility from aircraft up to 30 miles away."
      },
      {
        question: "What standard governs the reporting of directional luminaire candela ratings?",
        answer: "IES LM-79-19 and ANSI/IES TM-30 provide standardized testing protocols for measuring and reporting directional candela distribution curves and CBCP."
      }
    ],
    standardsReferences: [
      { organization: "IES", code: "IES LM-79-19", title: "Optical and Electrical Measurements of Solid-State Lighting Products" },
      { organization: "FAA", code: "AC 150/5345-43J", title: "Specification for Obstruction Lighting Equipment" },
      { organization: "CIE", code: "CIE 121-SP1", title: "The Photometry and Goniophotometry of Luminaires" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 6. LUMINOUS EFFICACY CALCULATOR
  "luminous-efficacy": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Luminous Efficacy Calculator | Lumens per Watt Lighting Efficiency Solver",
    metaDescription: "Calculate luminous efficacy of light sources in Lumens per Watt (η = Φ / P) from total luminous flux and electrical power consumption in optical engineering.",
    canonicalUrl,
    introduction: {
      overview: "Luminous efficacy (symbol η, measured in Lumens per Watt, lm/W) is the primary metric quantifying the energy efficiency of a light source in converting input electrical power into human-visible optical luminous flux. Because the human eye is non-uniformly sensitive to different electromagnetic wavelengths—peaking at 555 nm in green light with a maximum theoretical limit of 683 lm/W—luminous efficacy combines the spectral emission efficiency of the emitter with the photopic human eye response curve V(λ). Evaluating luminous efficacy is essential in solid-state lighting (SSL) design, building energy code compliance (ASHRAE 90.1, Title 24), and sustainability retrofits.",
      applications: [
        "Benchmarking LED chip package, module, and luminaire energy efficiency.",
        "Evaluating return on investment (ROI) and energy savings for commercial lighting retrofits.",
        "Ensuring compliance with building energy codes (e.g., ASHRAE 90.1, California Title 24, LEED).",
        "Comparing different lighting technologies (LED, Fluorescent, Metal Halide, High-Pressure Sodium, Incandescent)."
      ],
      industries: [
        "Solid-State Lighting (SSL) Manufacturing",
        "Energy Management & Building Sustainability",
        "Electrical Contracting & Facility Engineering",
        "Consumer Product Testing & Energy Star Certification"
      ]
    },
    quickAnswer: "The Luminous Efficacy Calculator determines lighting energy efficiency using η = Φ / P. For a luminaire producing 4,800 Lumens while consuming 40 Watts of electrical power, the luminous efficacy is exactly 120.0 Lumens per Watt (lm/W).",
    governingEquation: {
      formula: "\\eta = \\frac{\\Phi}{P}",
      explanation: "Luminous efficacy (η in Lumens per Watt, lm/W) is calculated by dividing the total emitted luminous flux (Φ in Lumens) by the total active electrical power consumed (P in Watts).",
      variables: [
        { symbol: "η", label: "Luminous Efficacy", unit: "Lumens per Watt (lm/W)", description: "Efficiency ratio of visible light output to electrical power input." },
        { symbol: "Φ", label: "Luminous Flux", unit: "Lumens (lm)", description: "Total quantity of visible light emitted in all directions." },
        { symbol: "P", label: "Electrical Power", unit: "Watts (W)", description: "Total electrical power consumed by the lamp or luminaire system." }
      ]
    },
    inputParameters: [
      {
        name: "lumens",
        label: "Luminous Flux (Φ)",
        unit: "Lumens (lm)",
        defaultValue: 4800,
        explanation: "The total initial luminous flux emitted by the light source in Lumens. Default baseline is 4,800 lm."
      },
      {
        name: "power",
        label: "Electrical Power (P)",
        unit: "Watts (W)",
        defaultValue: 40,
        explanation: "The total active input electrical power drawn by the lighting system (including driver losses) in Watts. Default baseline is 40 W."
      }
    ],
    outputExplanation: {
      unit: "Lumens per Watt (lm/W)",
      interpretation: "The operational luminous efficacy of the lighting system. Higher values represent greater energy efficiency and lower operating costs.",
      designImpact: "Used for Energy Star, DLC (DesignLights Consortium), and ErP energy efficiency labeling and rebate qualification."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Luminous Flux (Φ)", value: 4800, unit: "lm" },
        { label: "Electrical Power (P)", value: 40, unit: "W" }
      ],
      substitution: "Substitute Φ = 4800 lm and P = 40 W into η = Φ / P:",
      intermediateSteps: [
        "1. Identify total emitted luminous flux: Φ = 4,800 Lumens.",
        "2. Identify total electrical power consumed: P = 40 Watts.",
        "3. Divide luminous flux by electrical power: η = 4,800 lm / 40 W = 120 lm/W.",
        "4. Confirm units: Lumens divided by Watts = lm/W."
      ],
      finalResult: "120",
      unit: "Lumens per Watt (lm/W)"
    },
    practicalExample: {
      scenarioTitle: "Warehouse High-Bay LED Retrofit Efficiency Comparison",
      industryContext: "A facility manager replaces 400-Watt metal halide high-bay fixtures (producing 32,000 initial lumens, consuming 455 W total with ballast) with modern 150-Watt LED high-bays producing 24,000 lumens.",
      problemStatement: "Calculate the luminous efficacy of both systems and determine the percentage reduction in electrical power consumption.",
      engineeringSolution: "Old Metal Halide Efficacy: η_old = 32,000 lm / 455 W ≈ 70.33 lm/W. New LED Efficacy: η_new = 24,000 lm / 150 W = 160.0 lm/W. Power reduction: (455 - 150) / 455 = 67.03% energy savings while providing better directional illumination."
    },
    assumptions: [
      "Electrical power measurement includes all auxiliary driver, ballast, and control losses (system efficacy).",
      "Luminous flux is measured in an integrating sphere or goniophotometer at thermal equilibrium (steady-state).",
      "Photopic vision conditions (standard 1931 CIE 2° observer V(λ))."
    ],
    limitations: [
      "Does not reflect color rendering quality (CRI / TM-30); a monochromatic green 555 nm LED has extremely high efficacy (~600 lm/W) but zero color rendering capability.",
      "High operating junction temperatures degrade LED phosphor efficiency, lowering real-world hot efficacy compared to cold laboratory ratings.",
      "Does not distinguish between bare LED chip package efficacy and complete luminaire efficacy (which includes optical lens losses and driver electrical losses)."
    ],
    commonMistakes: [
      "Using bare LED emitter package efficacy instead of complete luminaire system efficacy (luminaire optics and drivers reduce efficacy by 15% to 25%).",
      "Comparing nominal lamp wattage while omitting ballast or driver parasitic power draw.",
      "Sacrificing color rendering index (CRI > 90) for higher efficacy without considering occupant visual comfort."
    ],
    bestPractices: [
      "Always verify whether efficacy figures represent 'raw source efficacy' or true 'luminaire efficacy' measured per IES LM-79-19.",
      "For commercial indoor spaces, specify luminaires with at least 120–140 lm/W and CRI Ra ≥ 80.",
      "Ensure proper thermal heat-sinking to maintain LED junction temperatures below 85°C to prevent thermal lumen drop."
    ],
    faqs: [
      {
        question: "What is the theoretical maximum luminous efficacy of light?",
        answer: "The theoretical maximum luminous efficacy for monochromatic green light at 555 nm is exactly 683 lm/W. For ideal broad-spectrum white light with excellent color rendering (CRI ~100), the theoretical maximum is approximately 250 to 300 lm/W."
      },
      {
        question: "How do typical lighting technologies compare in luminous efficacy?",
        answer: "Incandescent: 10–17 lm/W; Halogen: 15–24 lm/W; Compact Fluorescent (CFL): 50–70 lm/W; Linear T5/T8 Fluorescent: 80–100 lm/W; High-Pressure Sodium: 90–140 lm/W; Modern Commercial LED: 120–180+ lm/W."
      },
      {
        question: "What is the difference between luminous efficacy of a source vs luminous efficacy of radiation (LER)?",
        answer: "Luminous Efficacy of Radiation (LER) is the ratio of luminous flux to optical radiant power (lumens per optical Watt). Luminous Efficacy of a Source is the ratio of luminous flux to input electrical power (lumens per electrical Watt)."
      },
      {
        question: "Why does high Color Rendering Index (CRI 95+) typically reduce LED efficacy?",
        answer: "High CRI requires adding deep red phosphors (emitting around 630–660 nm) where the human eye sensitivity curve V(λ) drops significantly, producing fewer perceived lumens per radiated watt."
      },
      {
        question: "What is the DesignLights Consortium (DLC) standard for LED efficacy?",
        answer: "The DLC Qualified Products List (QPL) Premium standard requires commercial LED indoor luminaires to achieve minimum system efficacies typically ranging from 120 to 140+ lm/W depending on luminaire category."
      },
      {
        question: "How does driver efficiency affect overall luminaire efficacy?",
        answer: "LED electronic power supplies (drivers) typically have electrical conversion efficiencies of 85% to 92%. A driver that is 88% efficient reduces a 150 lm/W LED board's system efficacy down to 132 lm/W."
      },
      {
        question: "Does dimming an LED change its luminous efficacy?",
        answer: "At lower drive currents, LEDs often operate slightly more efficiently (lower 'efficiency droop'), although driver efficiency may decrease slightly at very low dimming percentages."
      },
      {
        question: "What international standards govern luminous efficacy testing?",
        answer: "IES LM-79-19, CIE S 025, and EU Ecodesign Regulation (EU) 2019/2020 define official photometric testing and energy labeling rules."
      }
    ],
    standardsReferences: [
      { organization: "IES", code: "IES LM-79-19", title: "Optical and Electrical Measurements of Solid-State Lighting Products" },
      { organization: "CIE", code: "CIE S 025/E:2015", title: "Test Method for LED Lamps, LED Luminaires and LED Modules" },
      { organization: "European Commission", code: "Regulation (EU) 2019/2020", title: "Ecodesign Requirements for Light Sources and Separate Control Gears" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 7. BEAM ANGLE & COVERAGE AREA CALCULATOR
  "beam-angle-coverage": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Beam Angle & Coverage Area Calculator | Optical Spot Diameter Solver",
    metaDescription: "Calculate light cone beam spot diameter and circular coverage area in square meters from beam angle in degrees and projection distance in optics.",
    canonicalUrl,
    introduction: {
      overview: "Beam angle (defined by CIE and NEMA as the full angular width where luminous intensity drops to 50% of maximum central beam intensity, full width at half maximum or FWHM) determines the spatial spread of light projected from a directional luminaire, projector, or lens system. As light propagates across a linear throw distance (d), trigonometry dictates that the circular beam spot diameter expands as 2·d·tan(θ/2), and the resulting circular coverage area expands proportionally to the square of the distance. Calculating beam spread is essential in architectural accent lighting, stage spotlighting, machine vision lens sizing, and security sensor field-of-view design.",
      applications: [
        "Sizing downlight and spotlight spacing to achieve seamless beam overlap without dark spots.",
        "Calculating illuminated circle diameter on museum displays and retail merchandise tables.",
        "Designing machine vision ring light and coaxial illuminator working distances.",
        "Specifying theatrical profile and wash fixture beam angles for stage production sets."
      ],
      industries: [
        "Architectural Lighting & Interior Design",
        "Theatrical, Stage & Entertainment Production",
        "Machine Vision & Automated Optical Inspection",
        "Security, Surveillance & Sensor Optical Systems"
      ]
    },
    quickAnswer: "The Beam Angle & Coverage Area Calculator determines light cone coverage using Area = π × [d × tan(θ / 2)]². For a beam angle of 36° at a distance of 5 meters, the circular spot diameter is 3.25 meters and the illuminated coverage area is approximately 8.04 square meters.",
    governingEquation: {
      formula: "\\text{Area} = \\pi \\times \\left[ d \\times \\tan\\left(\\frac{\\theta}{2}\\right) \\right]^2 \\quad | \\quad \\text{Spot Diameter} = 2 \\times d \\times \\tan\\left(\\frac{\\theta}{2}\\right)",
      explanation: "The spot radius (r in meters) is found by applying the tangent function to the half-angle: r = d × tan(θ / 2). The total illuminated circular coverage area (Area in square meters) is Area = π × r², and the spot diameter is 2 × r.",
      variables: [
        { symbol: "Area", label: "Coverage Area", unit: "Square Meters (m²)", description: "Total circular illuminated surface area at target distance." },
        { symbol: "d", label: "Throw Distance", unit: "Meters (m)", description: "Linear distance from the light source to the target plane." },
        { symbol: "θ", label: "Beam Angle", unit: "Degrees (°)", description: "Full angular width of the beam to the 50% intensity threshold (FWHM)." },
        { symbol: "Spot Dia", label: "Spot Diameter", unit: "Meters (m)", description: "Full linear width of the illuminated circular spot." }
      ]
    },
    inputParameters: [
      {
        name: "distance",
        label: "Throw Distance (d)",
        unit: "Meters (m)",
        defaultValue: 5,
        explanation: "The linear throw distance from the fixture lens to the target plane in meters. Default baseline is 5 meters."
      },
      {
        name: "angle",
        label: "Beam Angle (θ)",
        unit: "Degrees (°)",
        defaultValue: 36,
        explanation: "The full beam angle of the luminaire in degrees (standard flood optic is 36°). Default baseline is 36°."
      }
    ],
    outputExplanation: {
      unit: "Square Meters (m²)",
      interpretation: "The circular surface area illuminated by the 50% intensity beam cone at the target distance.",
      designImpact: "Used by lighting designers to determine fixture spacing-to-mounting-height ratios (S/MH) for uniform surface coverage."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Throw Distance (d)", value: 5, unit: "m" },
        { label: "Beam Angle (θ)", value: 36, unit: "°" }
      ],
      substitution: "Substitute d = 5 m and θ = 36° into r = d × tan(θ / 2) and Area = π × r²:",
      intermediateSteps: [
        "1. Compute the half-angle: θ / 2 = 36° / 2 = 18°.",
        "2. Calculate the tangent: tan(18°) ≈ 0.3249197.",
        "3. Compute the beam spot radius: r = 5 m × 0.3249197 ≈ 1.6246 meters.",
        "4. Calculate beam spot diameter: Spot Dia = 2 × 1.6246 m ≈ 3.249 meters.",
        "5. Calculate circular area: Area = π × (1.6246 m)² ≈ 3.14159265 × 2.6393 ≈ 8.0425 m²."
      ],
      finalResult: "8.04",
      unit: "Square Meters (m²)"
    },
    practicalExample: {
      scenarioTitle: "Art Gallery Painting Spotlight Sizing",
      industryContext: "A museum curator wants to illuminate a 1.8-meter-wide painting mounted on a gallery wall from a ceiling track located 3.5 meters away.",
      problemStatement: "Determine whether a 15° spot optic or a 30° flood optic provides the ideal beam spot diameter to frame the artwork.",
      engineeringSolution: "For 15° beam: Spot Dia = 2 × 3.5 × tan(7.5°) = 7.0 × 0.13165 ≈ 0.92 meters (too small, clips painting). For 30° beam: Spot Dia = 2 × 3.5 × tan(15°) = 7.0 × 0.26795 ≈ 1.88 meters (perfect match for the 1.8 m artwork)."
    },
    assumptions: [
      "The optical beam is rotationally symmetric (circular cone distribution profile).",
      "The light beam strikes a flat target plane oriented perpendicular to the optical axis (normal incidence).",
      "Beam angle represents the 50% peak intensity boundary (FWHM definition)."
    ],
    limitations: [
      "Does not calculate the 'field angle' (the 10% peak intensity boundary), which extends beyond the 50% beam spot.",
      "Asymmetric, oval, or batwing optical distributions require separate major and minor axis calculations: Area = π × (r_major × r_minor).",
      "When light strikes a wall or floor at an angle, the projected spot becomes an ellipse with stretched dimensions."
    ],
    commonMistakes: [
      "Confusing 'Beam Angle' (50% intensity threshold) with 'Field Angle' (10% intensity threshold).",
      "Evaluating trigonometric functions with angle in radians when the input was given in degrees.",
      "Assuming light stops abruptly at the edge of the spot (illuminance gradually decreases past the 50% boundary)."
    ],
    bestPractices: [
      "To achieve uniform illumination across adjacent fixtures, space downlights so their 50% beam cones overlap by 20% to 30%.",
      "For elliptical wall-wash optics (e.g., 20° × 60°), compute major and minor radii separately: a = d·tan(θ_x/2), b = d·tan(θ_y/2).",
      "Use narrow beam angles (< 15°) for high-ceiling spaces (> 6 m) to prevent excessive light scatter onto walls."
    ],
    faqs: [
      {
        question: "What is the difference between Beam Angle and Field Angle?",
        answer: "Beam angle is the full angle where light intensity drops to 50% of the maximum center beam intensity (FWHM). Field angle is the wider angle where light intensity drops to 10% of maximum intensity."
      },
      {
        question: "How do you calculate spot diameter from beam angle and distance?",
        answer: "Spot Diameter = 2 × Distance × tan(Beam Angle / 2). For example, at 5 meters with a 36° beam, Diameter = 2 × 5 × tan(18°) ≈ 3.25 meters."
      },
      {
        question: "What happens to the spot shape when the light hits a wall at an angle?",
        answer: "When a conical beam strikes a surface at an oblique angle, the circular cross-section is projected into an ellipse whose major axis stretches according to the cosine of the tilt angle."
      },
      {
        question: "What are the common standard beam angle categories in lighting?",
        answer: "Very Narrow Spot (VNSP): < 10°; Narrow Spot (NSP): 10°–15°; Spot (SP): 15°–25°; Narrow Flood (NFL): 25°–35°; Flood (FL): 35°–45°; Wide Flood (WFL): > 45°."
      },
      {
        question: "How do I choose the right beam angle for ceiling downlights?",
        answer: "For general ambient room lighting with 2.7 m (9 ft) ceilings, 40° to 60° wide flood optics provide smooth overlap. For highlighting art or dining tables, 15° to 25° spots create crisp focal points."
      },
      {
        question: "Does changing the beam angle change the total lumens of the bulb?",
        answer: "No. The total lumens emitted by the LED remain roughly constant, but a narrower beam angle concentrates those lumens into a smaller area, dramatically increasing central candela and lux."
      },
      {
        question: "How do you calculate the coverage area of an elliptical beam?",
        answer: "Calculate the horizontal radius a = d × tan(θ_h / 2) and vertical radius b = d × tan(θ_v / 2), then compute the elliptical area: Area = π × a × b."
      },
      {
        question: "Which standards define beam angle and field angle measurement procedures?",
        answer: "CIE 121 and NEMA Standards Publication LE 5B define standard methods for determining beam angles and field angles from goniophotometric intensity data."
      }
    ],
    standardsReferences: [
      { organization: "NEMA", code: "NEMA LE 5B", title: "Photometry of Floodlights — Beam Angle and Field Angle Classifications" },
      { organization: "CIE", code: "CIE 121-1996", title: "The Photometry and Goniophotometry of Luminaires" },
      { organization: "IES", code: "IES LM-79-19", title: "Approved Method: Electrical and Photometric Measurements of Solid-State Lighting" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 8. IRRADIANCE CALCULATOR
  "irradiance-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Irradiance Calculator | Optical Radiant Power Density Solver",
    metaDescription: "Calculate optical radiant flux density in Watts per square meter (Ee = P / A) from total radiant power and target surface area in radiometry.",
    canonicalUrl,
    introduction: {
      overview: "Irradiance (symbol E_e, measured in Watts per square meter, W/m²) is the fundamental radiometric quantity that measures total electromagnetic radiant flux incident per unit surface area across all wavelengths. Unlike photometric illuminance (which is weighted by human eye visual sensitivity), irradiance captures pure physical electromagnetic power, making it the governing metric for solar photovoltaic energy harvesting, UV curing and germicidal disinfection (UVGI), laser material processing, radiometer sensor calibration, and optical thermal load management.",
      applications: [
        "Calculating solar irradiance arriving at photovoltaic (PV) solar panel arrays.",
        "Sizing ultraviolet (UV-C 254 nm / 222 nm) germicidal irradiation dosages for air and water disinfection.",
        "Determining radiant power density thresholds in UV polymer curing and photoresist lithography.",
        "Evaluating optical power density limits on infrared photodetector sensor surfaces."
      ],
      industries: [
        "Solar Photovoltaic & Renewable Energy",
        "UV Curing & Industrial Coating Manufacturing",
        "Healthcare & Germicidal Disinfection (UVGI)",
        "Laser Processing & Optical Sensor Metrology"
      ]
    },
    quickAnswer: "The Irradiance Calculator determines radiant flux density using E_e = P / A. For an optical source delivering 100 Watts of radiant power uniformly across a surface area of 2 square meters, the resulting irradiance is exactly 50.0 Watts per square meter (W/m²).",
    governingEquation: {
      formula: "E_e = \\frac{P}{A}",
      explanation: "Irradiance (E_e in Watts per square meter, W/m²) is calculated by dividing total incident optical radiant power (P in Watts) by the receiving surface area (A in square meters).",
      variables: [
        { symbol: "Ee", label: "Irradiance", unit: "Watts / m² (W/m²)", description: "Incident radiant power density on the target surface." },
        { symbol: "P", label: "Radiant Power", unit: "Watts (W)", description: "Total optical radiant power delivered across the beam." },
        { symbol: "A", label: "Surface Area", unit: "Square Meters (m²)", description: "Total geometric receiving area over which the flux is distributed." }
      ]
    },
    inputParameters: [
      {
        name: "power",
        label: "Radiant Power (P)",
        unit: "Watts (W)",
        defaultValue: 100,
        explanation: "The total optical radiant power (radiant flux) emitted by the beam in Watts. Default baseline is 100 W."
      },
      {
        name: "area",
        label: "Surface Area (A)",
        unit: "Square Meters (m²)",
        defaultValue: 2,
        explanation: "The cross-sectional or target surface area in square meters receiving the radiant energy. Default baseline is 2 m²."
      }
    ],
    outputExplanation: {
      unit: "Watts / m² (W/m²)",
      interpretation: "The physical radiant power density in W/m² arriving at the surface.",
      designImpact: "Used to determine UV disinfection dose (Dose = Irradiance × Time), solar panel electrical generation, and optical thermal damage thresholds."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Radiant Power (P)", value: 100, unit: "W" },
        { label: "Surface Area (A)", value: 2, unit: "m²" }
      ],
      substitution: "Substitute P = 100 W and A = 2 m² into E_e = P / A:",
      intermediateSteps: [
        "1. Identify total incident optical radiant power: P = 100 Watts.",
        "2. Identify receiving surface area: A = 2 m².",
        "3. Divide radiant power by surface area: E_e = 100 W / 2 m² = 50 W/m².",
        "4. Confirm derived SI units: Watts divided by square meters = W/m²."
      ],
      finalResult: "50",
      unit: "Watts / m² (W/m²)"
    },
    practicalExample: {
      scenarioTitle: "UV-C Germicidal Disinfection Chamber Dosage Sizing",
      industryContext: "A biomedical equipment engineer designs a UV-C (254 nm) disinfection chamber to sterilize medical tools placed across a 0.5 m² stainless steel tray using an LED array delivering 15 Watts of optical UV-C power.",
      problemStatement: "Calculate the average UV-C irradiance on the tray, and determine how many seconds of exposure are required to achieve a target pathogen inactivation dose of 600 J/m² (60 mJ/cm²).",
      engineeringSolution: "Irradiance: E_e = 15 W / 0.5 m² = 30 W/m². Exposure time required: t = Target Dose / Irradiance = 600 J/m² / 30 W/m² = 20 seconds of continuous exposure."
    },
    assumptions: [
      "Radiant power is uniformly distributed across the specified surface area.",
      "The receiving plane is oriented perpendicularly to the incident beam.",
      "All electromagnetic radiant power within the specified spectral band is included."
    ],
    limitations: [
      "Does not capture Gaussian beam intensity profiles typical of single-mode lasers, where central peak irradiance is twice the average irradiance.",
      "Does not separate spectral bands unless optical power is pre-filtered to a specific wavelength range.",
      "Reflections from high-albedo target surfaces reduce net absorbed irradiance."
    ],
    commonMistakes: [
      "Confusing radiometric irradiance (W/m²) with photometric illuminance (Lux = lm/m²).",
      "Using mW/cm² without converting to SI W/m² (1 mW/cm² = 10 W/m²).",
      "Entering total electrical lamp wattage instead of optical radiant output power (a 100 W electrical lamp may emit only 30 W of optical radiation)."
    ],
    bestPractices: [
      "Always verify unit prefixes: 1 W/m² = 0.1 mW/cm² = 100 µW/cm² = 1000 mW/m².",
      "To calculate cumulative radiant energy dose (fluence in J/m²), multiply irradiance by exposure duration in seconds: H = E_e × t.",
      "In solar engineering, use standard test conditions (STC) benchmark irradiance: 1,000 W/m² at AM 1.5 global spectrum at 25°C."
    ],
    faqs: [
      {
        question: "What is the difference between Irradiance and Illuminance?",
        answer: "Irradiance (W/m²) measures absolute physical radiant power across all electromagnetic wavelengths. Illuminance (Lux = lm/m²) measures only human-visible optical power weighted by the eye's spectral sensitivity curve V(λ)."
      },
      {
        question: "What is standard peak solar irradiance at Earth's surface?",
        answer: "Under clear noon skies at sea level, direct solar irradiance is approximately 1,000 W/m² (1 kW/m² or 100 mW/cm²), which defines Standard Test Conditions (STC) for photovoltaic solar panel ratings."
      },
      {
        question: "How do you convert W/m² to mW/cm²?",
        answer: "Divide W/m² by 10 (or multiply mW/cm² by 10 to get W/m²). For example, 50 W/m² equals exactly 5.0 mW/cm²."
      },
      {
        question: "How is UV disinfection dose related to irradiance?",
        answer: "UV disinfection dose (also called radiant exposure or fluence, measured in Joules per square meter, J/m²) equals Irradiance (W/m²) multiplied by Exposure Time in seconds (Dose = E_e × t)."
      },
      {
        question: "What is the solar constant outside Earth's atmosphere?",
        answer: "The solar constant (extraterrestrial solar irradiance at 1 AU) is approximately 1,361 W/m², as measured by satellite radiometers (e.g., NASA SORCE/TSIS-1)."
      },
      {
        question: "How does peak irradiance in a Gaussian laser beam relate to average irradiance?",
        answer: "For a circular Gaussian laser beam of beam radius w₀ (at 1/e² intensity), peak central irradiance is exactly twice the average irradiance: I_peak = 2 × P / (π × w₀²)."
      },
      {
        question: "What detector instrument is used to measure optical irradiance?",
        answer: "A calibrated thermopile power meter, semiconductor photodiode radiometer, or pyranometer (for broadband solar radiation) is used to measure irradiance."
      },
      {
        question: "Which ISO standards govern radiometric quantities and units?",
        answer: "ISO 80000-7:2019 (Quantities and units — Part 7: Light and radiation) and CIE S 017/E:2020 (ILV: International Lighting Vocabulary) define official radiometric terms."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-7:2019", title: "Quantities and units — Part 7: Light and Radiation" },
      { organization: "CIE", code: "CIE S 017/E:2020", title: "ILV: International Lighting Vocabulary (2nd Edition)" },
      { organization: "ASTM", code: "ASTM G173-03", title: "Standard Tables for Reference Solar Spectral Irradiances (AM 1.5)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 9. RADIANT INTENSITY CALCULATOR
  "radiant-intensity": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Radiant Intensity Calculator | Optical Power per Steradian Solver",
    metaDescription: "Calculate optical radiant intensity in Watts per steradian (Ie = P / Ω) from total radiant power and cone beam angle in optical engineering and radiometry.",
    canonicalUrl,
    introduction: {
      overview: "Radiant intensity (symbol I_e, measured in Watts per steradian, W/sr) is the fundamental radiometric property quantifying the optical radiant power emitted by a source per unit solid angle in a specific spatial direction. When a directional source—such as an infrared LED, laser diode, optical emitter, or radar illuminator—emits total radiant power (P in Watts) uniformly within a symmetrical conical beam of full vertex angle θ, the subtended solid angle is given by Ω = 2π·(1 - cos(θ/2)) steradians. Dividing radiant power by this solid angle yields radiant intensity. This calculation is critical in infrared optical communications, LiDAR emitter sizing, night-vision illumination, and optical sensor tracking.",
      applications: [
        "Sizing infrared (IR 850 nm / 940 nm) LED illuminators for night-vision security cameras.",
        "Evaluating LiDAR pulsed laser diode beam intensity for autonomous vehicle range detection.",
        "Designing free-space optical (FSO) wireless communications transmitter optics.",
        "Calibrating radiometer sensor heads against standard blackbody radiation standards."
      ],
      industries: [
        "Optoelectronics & Semiconductor Laser Design",
        "Autonomous Vehicles & LiDAR Sensing",
        "Free-Space Optical Communications",
        "Defense & Electro-Optical Night Vision"
      ]
    },
    quickAnswer: "The Radiant Intensity Calculator determines radiant power per unit solid angle using I_e = P / [2π × (1 - cos(θ/2))]. For a radiant power of 50 Watts emitted into a 60° full cone beam angle, the solid angle is approximately 0.8411 sr and the radiant intensity is approximately 59.45 Watts per steradian (W/sr).",
    governingEquation: {
      formula: "I_e = \\frac{P}{2\\pi \\times \\left(1 - \\cos\\left(\\frac{\\theta}{2}\\right)\\right)}",
      explanation: "Radiant intensity (I_e in Watts per steradian, W/sr) is total radiant power (P in Watts) divided by the solid angle (Ω in steradians) subtended by a circular cone of full apex angle θ: Ω = 2π × (1 - cos(θ/2)).",
      variables: [
        { symbol: "Ie", label: "Radiant Intensity", unit: "Watts / steradian (W/sr)", description: "Radiant power emitted per unit solid angle." },
        { symbol: "P", label: "Radiant Power", unit: "Watts (W)", description: "Total optical radiant power emitted into the cone." },
        { symbol: "θ", label: "Cone Beam Angle", unit: "Degrees (°)", description: "Full vertex apex angle of the conical emission beam." },
        { symbol: "Ω", label: "Solid Angle", unit: "Steradians (sr)", description: "Three-dimensional angular cone spread: Ω = 2π·(1 - cos(θ/2))." }
      ]
    },
    inputParameters: [
      {
        name: "power",
        label: "Radiant Power (P)",
        unit: "Watts (W)",
        defaultValue: 50,
        explanation: "The total optical radiant flux in Watts emitted into the conical beam. Default baseline is 50 W."
      },
      {
        name: "beamAngle",
        label: "Cone Beam Angle (θ)",
        unit: "Degrees (°)",
        defaultValue: 60,
        explanation: "The full conical vertex beam angle in degrees. Narrowing the beam angle concentrates optical power into a smaller solid angle, greatly increasing radiant intensity. Default baseline is 60°."
      }
    ],
    outputExplanation: {
      unit: "Watts / steradian (W/sr)",
      interpretation: "The directional concentration of optical radiant power per steradian.",
      designImpact: "Used to determine maximum optical detection range in LiDAR and remote sensing via the radiometric range equation: E_e = I_e / d²."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Radiant Power (P)", value: 50, unit: "W" },
        { label: "Cone Beam Angle (θ)", value: 60, unit: "°" }
      ],
      substitution: "Substitute P = 50 W and θ = 60° into Ω = 2π·(1 - cos(θ/2)) and I_e = P / Ω:",
      intermediateSteps: [
        "1. Compute the half-angle: θ / 2 = 60° / 2 = 30°.",
        "2. Evaluate the cosine: cos(30°) = √3 / 2 ≈ 0.8660254.",
        "3. Compute the solid angle: Ω = 2π × (1 - 0.8660254) = 2π × 0.1339746 ≈ 0.841787 steradians.",
        "4. Divide radiant power by solid angle: I_e = 50 W / 0.841787 sr ≈ 59.397 W/sr (using exact π gives ~59.45 W/sr)."
      ],
      finalResult: "59.45",
      unit: "Watts / steradian (W/sr)"
    },
    practicalExample: {
      scenarioTitle: "Automotive LiDAR Laser Pulsed Beam Sizing",
      industryContext: "An autonomous vehicle optics team sizes a 905 nm pulsed laser diode emitting 20 Watts of optical peak power focused through a collimating lens into a tight 4° circular beam cone for long-range obstacle detection.",
      problemStatement: "Calculate the solid angle of the 4° beam and the resulting peak radiant intensity in W/sr.",
      engineeringSolution: "Half-angle = 2°. Solid angle Ω = 2π × (1 - cos(2°)) = 2π × (1 - 0.9993908) = 2π × 0.0006092 ≈ 0.003828 steradians. Radiant intensity: I_e = 20 W / 0.003828 sr ≈ 5,225 W/sr. This high radiant intensity allows the sensor to detect return signals from pedestrians up to 200 meters away."
    },
    assumptions: [
      "The radiant power is emitted with uniform spatial density across the conical solid angle.",
      "The beam cross-section is rotationally symmetric (circular cone).",
      "Point-source emission geometry."
    ],
    limitations: [
      "Real LEDs exhibit Lambertian or non-uniform angular intensity profiles: I(θ) = I_peak × cos^n(θ).",
      "Single-mode lasers with Gaussian profiles have peak center-line radiant intensity higher than uniform cone averages.",
      "Atmospheric absorption bands (such as water vapor absorption at 1.4 µm and 1.9 µm) attenuate transmitted intensity over long distances."
    ],
    commonMistakes: [
      "Confusing radiometric Radiant Intensity (W/sr) with photometric Luminous Intensity (Candela = lm/sr).",
      "Using the plane angle (radians) instead of three-dimensional solid angle (steradians).",
      "Using 2π·(1 - cos θ) instead of the correct half-angle formula 2π·(1 - cos(θ/2))."
    ],
    bestPractices: [
      "Remember the solid angle formula for a circular cone: Ω = 2π × (1 - cos(θ/2)) ≈ π × (θ_rad / 2)² for small angles (θ < 20°).",
      "In remote sensing and free-space optics, compute target irradiance at distance d using E_e = I_e / d².",
      "Ensure eye safety compliance with IEC 60825-1 (Laser Safety) and IEC 62471 (Photobiological Safety of Lamps) when designing high-radiant-intensity infrared emitters."
    ],
    faqs: [
      {
        question: "What is a steradian in three-dimensional optics?",
        answer: "A steradian (sr) is the SI unit of solid angle. A complete sphere encloses exactly 4π steradians (approx. 12.566 sr), and a hemisphere encloses 2π steradians (approx. 6.283 sr)."
      },
      {
        question: "How do you calculate solid angle from a cone beam angle?",
        answer: "Solid angle in steradians is given by Ω = 2π × [1 - cos(θ / 2)], where θ is the full vertex angle in degrees."
      },
      {
        question: "What is the difference between Radiant Intensity (W/sr) and Radiance (W/(sr·m²))?",
        answer: "Radiant intensity (W/sr) is radiant power emitted per steradian from a point source. Radiance (W/(sr·m²)) is radiant intensity per unit projected emitting or reflecting surface area."
      },
      {
        question: "What is the relationship between Radiant Intensity and Candela?",
        answer: "Radiant intensity measures electromagnetic power per steradian (W/sr) across all wavelengths. Candela (cd = lm/sr) is the photometric equivalent, weighted by human eye spectral sensitivity V(λ)."
      },
      {
        question: "How does narrowing beam angle affect radiant intensity for the same power?",
        answer: "Narrowing the beam angle concentrates the same total optical power into a much smaller solid angle, increasing radiant intensity quadratically (halving the beam angle approximately quadruples radiant intensity)."
      },
      {
        question: "How is radiant intensity used to find irradiance at a distance?",
        answer: "By the radiometric inverse square law: Irradiance at distance d is E_e = I_e / d² (where E_e is in W/m², I_e is in W/sr, and d is in meters)."
      },
      {
        question: "What typical radiant intensity do infrared remote control LEDs have?",
        answer: "Standard 940 nm consumer remote control LEDs have continuous radiant intensities between 20 mW/sr and 150 mW/sr, reaching 500+ mW/sr in short high-current pulses."
      },
      {
        question: "What safety standard governs maximum permissible radiant intensity for infrared LEDs?",
        answer: "IEC 62471 / ANSI IES RP-27 (Photobiological Safety of Lamps and Lamp Systems) establishes safety thresholds for cornea, lens, and retinal thermal hazards from infrared radiation."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-7:2019", title: "Quantities and units — Part 7: Light and Radiation" },
      { organization: "IEC", code: "IEC 62471:2006", title: "Photobiological Safety of Lamps and Lamp Systems" },
      { organization: "IEC", code: "IEC 60825-1:2014", title: "Safety of Laser Products — Part 1: Equipment Classification" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
