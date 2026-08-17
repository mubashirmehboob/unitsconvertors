import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Physics Calculators (Part 2).
 * Adheres strictly to PHYSICS CALCULATOR ARTICLE TEMPLATE V1.0.
 */

export const physicsBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 9. ESCAPE VELOCITY CALCULATOR
  "escape-velocity": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Escape Velocity Calculator | Gravitational Escape Speed Solver",
    metaDescription: "Calculate celestial escape velocity (Ve = √(2·G·M / R)) in m/s from planetary mass and radius using Newtonian gravitational potential mechanics.",
    canonicalUrl,
    introduction: {
      overview: "Escape velocity represents the minimum unpowered ballistic speed required for an object to break free from the gravitational attraction of a massive celestial body without requiring additional continuous thrust. Derived by equating kinetic energy to the gravitational binding energy required to travel to infinite radial distance, escape velocity depends solely on the mass and radius of the attracting planet or star. Escape velocity calculations are essential in aerospace mission architecture, launch vehicle sizing, planetary atmosphere retention studies, and black hole event horizon physics.",
      applications: [
        "Determining launch vehicle delta-v requirements for lunar, interplanetary, and deep-space trajectories.",
        "Analyzing planetary atmospheric retention based on molecular Maxwell-Boltzmann thermal velocity distributions.",
        "Calculating escape thresholds from asteroids and dwarf planets for robotic sample-return landers.",
        "Evaluating gravitational binding dynamics in binary star systems and globular clusters."
      ],
      industries: [
        "Aerospace Engineering & Spaceflight Missions",
        "Astrophysics & Planetary Science",
        "Orbital Dynamics & Satellite Trajectory Planning",
        "Defense & Intercontinental Ballistics"
      ]
    },
    quickAnswer: "Escape velocity is calculated using Ve = √(2 × G × M / R). For Earth (mass M = 5.972 × 10²⁴ kg, radius R = 6,371,000 m), the escape velocity from the surface is approximately 11,185.98 m/s (11.19 km/s or 25,022 mph).",
    governingEquation: {
      formula: "V_e = \\sqrt{\\frac{2 \\times G \\times M}{R}}",
      explanation: "Escape velocity (Ve in meters per second) is derived from energy conservation (½·m·Ve² = G·M·m / R). It equals the square root of twice the gravitational constant (G = 6.67430 × 10⁻¹¹ m³/(kg·s²)) multiplied by the celestial body mass (M in kg) and divided by the radial distance from the body's center (R in meters).",
      variables: [
        { symbol: "Ve", label: "Escape Velocity", unit: "m/s", description: "Minimum speed required to escape to infinite distance." },
        { symbol: "G", label: "Gravitational Constant", unit: "m³/(kg·s²)", description: "Newtonian constant of gravitation (6.67430 × 10⁻¹¹ m³/(kg·s²))." },
        { symbol: "M", label: "Celestial Body Mass", unit: "Kilograms (kg)", description: "Total mass of the attracting planetary or stellar body." },
        { symbol: "R", label: "Radial Distance / Radius", unit: "Meters (m)", description: "Distance from the center of mass to the launch origin." }
      ]
    },
    inputParameters: [
      {
        name: "mass",
        label: "Celestial Mass (M)",
        unit: "Kilograms (kg)",
        defaultValue: 5.972e24,
        explanation: "The total mass of the celestial body in kilograms. Default baseline is Earth's mass (5.972 × 10²⁴ kg)."
      },
      {
        name: "radius",
        label: "Body Radius (R)",
        unit: "Meters (m)",
        defaultValue: 6371000,
        explanation: "The volumetric mean radius from the planetary center of mass to the surface in meters. Default baseline is Earth's mean radius (6,371,000 m)."
      }
    ],
    outputExplanation: {
      unit: "m/s",
      interpretation: "The required initial ballistic velocity relative to the center of mass to achieve an open parabolic escape trajectory (eccentricity e = 1).",
      designImpact: "Governs rocket propellant staging mass ratios via the Tsiolkovsky rocket equation and defines deep-space injection delta-v budgets."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Celestial Mass (M)", value: 5.972e24, unit: "kg" },
        { label: "Body Radius (R)", value: 6371000, unit: "m" }
      ],
      substitution: "Substitute G = 6.67430 × 10⁻¹¹ m³/(kg·s²), M = 5.972 × 10²⁴ kg, and R = 6,371,000 m into Ve = √(2·G·M / R):",
      intermediateSteps: [
        "1. Compute the numerator product: 2 × G × M = 2 × (6.67430 × 10⁻¹¹) × (5.972 × 10²⁴) ≈ 7.97178888 × 10¹⁴ m³/s².",
        "2. Divide by the radius R: (7.97178888 × 10¹⁴) / 6,371,000 m ≈ 125,126,179.25 m²/s².",
        "3. Take the square root: Ve = √(125,126,179.25) ≈ 11,185.98 m/s.",
        "4. Convert to kilometers per second: 11,185.98 m/s ≈ 11.186 km/s."
      ],
      finalResult: "11185.98",
      unit: "m/s"
    },
    practicalExample: {
      scenarioTitle: "Interplanetary Mars Probe Earth Departure Staging",
      industryContext: "An aerospace mission engineering team calculates the trans-Mars injection burn for an exploratory robotic rover launched from Earth.",
      problemStatement: "Determine the total velocity required to escape Earth's gravity well from low Earth orbit (LEO at an altitude of 300 km, where R = 6,671,000 m).",
      engineeringSolution: "Ve_orbit = √(2 × 6.6743e-11 × 5.972e24 / 6,671,000) = √(7.97179e14 / 6,671,000) = √(1.19499e8) ≈ 10,931.57 m/s (10.93 km/s). Because the spacecraft already travels at circular orbital speed v_circ = 7,726 m/s, the booster rocket only needs to provide Δv = 10,932 - 7,726 ≈ 3,206 m/s of additional delta-v."
    },
    assumptions: [
      "Spherically symmetric celestial body treated as an idealized point mass (Newtonian shell theorem).",
      "Ballistic unpowered trajectory with zero atmospheric aerodynamic drag.",
      "Two-body problem neglecting third-body gravitational perturbations from the Sun or Moon."
    ],
    limitations: [
      "Real launch vehicles do not reach escape velocity in a single blast at sea level; they apply continuous thrust through the atmosphere into parking orbit.",
      "Near compact massive objects (black holes or neutron stars), General Relativistic Schwarzschild equations must replace classical Newtonian formulas.",
      "Does not account for Earth's rotational velocity boost (up to 465 m/s eastward assist at the equator)."
    ],
    commonMistakes: [
      "Entering radius in kilometers instead of meters, resulting in an output error of a factor of √1000 ≈ 31.62.",
      "Confusing circular orbital velocity (v_circ = √(GM/R)) with escape velocity (Ve = √(2GM/R) = √2 × v_circ).",
      "Assuming an object must travel at escape velocity at all times (a rocket with infinite fuel could ascend to infinity at a constant 1 m/s)."
    ],
    bestPractices: [
      "Remember the fundamental geometric relationship: Escape Velocity = √2 × Circular Orbital Velocity (Ve ≈ 1.414 × v_circ).",
      "Launch eastward near the equator to harness Earth's tangential rotational velocity (v_rot = 465.1 m/s × cos(latitude)).",
      "Use CODATA 2018 standard value for the universal gravitational constant: G = 6.67430 × 10⁻¹¹ m³/(kg·s²)."
    ],
    faqs: [
      {
        question: "Why is escape velocity exactly √2 times the circular orbital speed at the same altitude?",
        answer: "Circular orbital speed is derived by setting gravitational force equal to centripetal force (GMm/r² = mv²/r, giving v_circ = √(GM/r)). Escape velocity requires total mechanical energy to equal zero (½mv² - GMm/r = 0, giving Ve = √(2GM/r)). Comparing the two formulas shows Ve = √2 × v_circ ≈ 1.414 × v_circ."
      },
      {
        question: "Does the mass of the escaping spacecraft affect the required escape velocity?",
        answer: "No. In the energy equation ½·m·Ve² = G·M·m/R, the spacecraft mass (m) cancels from both sides, proving that an astronaut, a subatomic proton, and a 100-ton rocket all require the exact same escape velocity."
      },
      {
        question: "What are the escape velocities of other solar system bodies?",
        answer: "The Moon: 2.38 km/s; Mars: 5.03 km/s; Venus: 10.36 km/s; Jupiter: 59.5 km/s; the Sun (from surface): 617.5 km/s."
      },
      {
        question: "How does escape velocity explain why the Moon has no atmosphere while Earth does?",
        answer: "Thermal gas molecules have average kinetic speeds given by Maxwell-Boltzmann distributions. On the Moon (Ve = 2.38 km/s), gases like water vapor, nitrogen, and oxygen easily exceed escape velocity over geological time and escape into space. Earth's higher escape velocity (11.19 km/s) permanently retains heavier atmospheric gases."
      },
      {
        question: "What is the escape velocity from the surface of a black hole?",
        answer: "At the event horizon of a black hole (the Schwarzschild radius, R_s = 2GM/c²), the escape velocity equals the speed of light (c ≈ 300,000 km/s). Inside the event horizon, escape velocity exceeds the speed of light, making escape impossible."
      },
      {
        question: "Does the launch direction affect the escape velocity magnitude in a vacuum?",
        answer: "In a pure two-body vacuum system, any radial or tangential launch direction pointing above the planetary horizon will allow escape with the same speed Ve, producing parabolic trajectory paths."
      },
      {
        question: "What is the Oberth effect and how does it relate to escape velocity?",
        answer: "The Oberth effect states that rocket engine burns are most energy-efficient at high speeds deep within a gravitational well. Firing thrusters at high orbital speeds generates much greater kinetic energy gain (ΔKE = m·v·Δv) than burning the same fuel in deep space."
      },
      {
        question: "What standard CODATA value is used for the Newtonian gravitational constant?",
        answer: "The Committee on Data for Science and Technology (CODATA 2018) recommends the universal gravitational constant as G = 6.67430(15) × 10⁻¹¹ m³/(kg·s²)."
      }
    ],
    standardsReferences: [
      { organization: "CODATA / NIST", code: "CODATA 2018", title: "Fundamental Physical Constants — Newtonian Constant of Gravitation G" },
      { organization: "IAU", code: "IAU SOFA", title: "Standards of Fundamental Astronomy — Celestial Mechanics Models" },
      { organization: "NASA", code: "SP-8005", title: "Solar System Planetary and Astrodynamic Constants" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 10. UNIVERSAL GRAVITATIONAL FORCE CALCULATOR
  "gravitational-force": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Universal Gravitational Force Calculator | Newton's Gravity Law Solver",
    metaDescription: "Calculate gravitational attraction force in Newtons (F = G·m₁·m₂ / r²) between two point masses using Newton's Law of Universal Gravitation.",
    canonicalUrl,
    introduction: {
      overview: "Newton's Law of Universal Gravitation states that every particle of matter in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers of mass. As one of the four fundamental interactions of physics, universal gravitation governs planetary orbits, ocean tidal dynamics, satellite orbit maintenance, and large-scale cosmological structures.",
      applications: [
        "Calculating mutual orbital attraction forces between planets, moons, and artificial satellites.",
        "Predicting ocean tidal forces generated by lunar and solar gravitational gradients.",
        "Modeling orbital perturbations and trajectory insertions for deep space probes.",
        "Calibrating micro-gravitational field survey meters for geophysical mineral exploration."
      ],
      industries: [
        "Aerospace & Orbital Mechanics",
        "Astrophysics & Planetary Astronomy",
        "Geodesy & Geophysical Exploration",
        "Oceanography & Marine Tidal Power"
      ]
    },
    quickAnswer: "Newton's Universal Gravitational Force is calculated as F = G × (m₁ × m₂) / r². For Earth (m₁ = 5.972 × 10²⁴ kg) and a 70 kg person at Earth's surface (r = 6,371,000 m), the mutual gravitational attraction force is approximately 687.40 Newtons.",
    governingEquation: {
      formula: "F = G \\times \\frac{m_1 \\times m_2}{r^2}",
      explanation: "Gravitational force (F in Newtons) is proportional to the product of masses (m₁ and m₂ in kilograms) multiplied by the gravitational constant (G = 6.67430 × 10⁻¹¹ m³/(kg·s²)) and divided by the square of the center-to-center distance (r in meters).",
      variables: [
        { symbol: "F", label: "Gravitational Force", unit: "Newtons (N)", description: "Mutual attractive force acting between the two masses." },
        { symbol: "G", label: "Gravitational Constant", unit: "m³/(kg·s²)", description: "Universal Newtonian constant (6.67430 × 10⁻¹¹ m³/(kg·s²))." },
        { symbol: "m1", label: "Mass 1", unit: "Kilograms (kg)", description: "Mass of the primary attracting celestial body or object." },
        { symbol: "m2", label: "Mass 2", unit: "Kilograms (kg)", description: "Mass of the secondary attracting object." },
        { symbol: "r", label: "Distance", unit: "Meters (m)", description: "Center-to-center separation distance between the two bodies." }
      ]
    },
    inputParameters: [
      {
        name: "m1",
        label: "Mass 1 (m₁)",
        unit: "Kilograms (kg)",
        defaultValue: 5.972e24,
        explanation: "The mass of the primary body in kilograms. Default baseline is Earth's mass (5.972 × 10²⁴ kg)."
      },
      {
        name: "m2",
        label: "Mass 2 (m₂)",
        unit: "Kilograms (kg)",
        defaultValue: 70,
        explanation: "The mass of the secondary body in kilograms. Default baseline is a human mass (70 kg)."
      },
      {
        name: "r",
        label: "Center Distance (r)",
        unit: "Meters (m)",
        defaultValue: 6371000,
        explanation: "The center-to-center radial separation distance in meters. Default baseline is Earth's mean radius (6,371,000 m)."
      }
    ],
    outputExplanation: {
      unit: "Newtons (N)",
      interpretation: "The mutual attractive Newtonian force pulling both masses toward one another along their line of centers.",
      designImpact: "Determines orbital ephemerides, station-keeping propellant requirements for communication satellites, and structural weight loads."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Mass 1 (m₁)", value: 5.972e24, unit: "kg" },
        { label: "Mass 2 (m₂)", value: 70, unit: "kg" },
        { label: "Center Distance (r)", value: 6371000, unit: "m" }
      ],
      substitution: "Substitute G = 6.67430 × 10⁻¹¹ m³/(kg·s²), m₁ = 5.972 × 10²⁴ kg, m₂ = 70 kg, and r = 6,371,000 m into F = G·m₁·m₂ / r²:",
      intermediateSteps: [
        "1. Compute the product of the two masses: m₁ × m₂ = (5.972 × 10²⁴ kg) × 70 kg = 4.1804 × 10²⁶ kg².",
        "2. Multiply by gravitational constant G: G × (m₁·m₂) = (6.67430 × 10⁻¹¹) × (4.1804 × 10²⁶) ≈ 2.7901261 × 10¹⁶ N·m².",
        "3. Square the center-to-center distance: r² = (6,371,000 m)² ≈ 4.0589641 × 10¹³ m².",
        "4. Divide numerator by squared distance: F = (2.7901261 × 10¹⁶) / (4.0589641 × 10¹³) ≈ 687.398 N (approx. 687.40 N)."
      ],
      finalResult: "687.40",
      unit: "Newtons (N)"
    },
    practicalExample: {
      scenarioTitle: "International Space Station (ISS) Orbital Gravitational Force",
      industryContext: "An orbital flight dynamics officer calculates Earth's gravitational retention force acting on the 420,000 kg International Space Station orbiting at an altitude of 420 km (r = 6,791,000 m).",
      problemStatement: "Determine the exact gravitational attraction force exerted by Earth on the ISS in orbit.",
      engineeringSolution: "F = (6.6743e-11 × 5.972e24 × 420,000) / (6,791,000)² = (1.67407e20) / (4.61177e13) ≈ 3,630,000 N (3.63 MN). This force provides the centripetal acceleration holding the ISS in its 92.6-minute circular orbit."
    },
    assumptions: [
      "Both bodies are treated as spherically symmetric mass distributions or point particles (Newton's shell theorem).",
      "Distances are measured strictly between centers of mass, not surface-to-surface.",
      "Static instantaneous Newtonian gravity without general relativistic spacetime curvature corrections."
    ],
    limitations: [
      "In strong gravitational fields (near neutron stars or black holes), Einstein's General Theory of Relativity must be used.",
      "Does not capture planetary oblateness (J2 gravitational zonal harmonics due to Earth's equatorial bulge).",
      "Assumes zero intervening matter shielding (gravitational force cannot be shielded or blocked)."
    ],
    commonMistakes: [
      "Measuring distance r from the surface of a planet rather than from its center of mass.",
      "Entering distance in kilometers instead of SI meters (r must be in meters to cancel G's units).",
      "Assuming the smaller mass exerts less force on the larger mass (Newton's Third Law guarantees both forces are identical in magnitude and opposite in direction)."
    ],
    bestPractices: [
      "Always add the planet's radius to orbit altitude to obtain total center-to-center distance: r = R_planet + altitude.",
      "Use double-precision floating point numbers when computing with large celestial exponents (10²⁴ to 10⁻¹¹).",
      "For multi-body satellite dynamics, sum vector forces from the Sun, Moon, and Earth: F_net = Σ (G·M_i·m / r_i² · r̂_i)."
    ],
    faqs: [
      {
        question: "Why is gravity an inverse-square law (1/r²)?",
        answer: "Gravitational flux radiates isotropically in three-dimensional space across the surface area of an expanding sphere (Area = 4πr²). As distance doubles, the surface area quadruples, causing the gravitational field intensity to drop to ¼ of its original strength."
      },
      {
        question: "Does a 70 kg person exert the same gravitational force on Earth as Earth exerts on the person?",
        answer: "Yes. By Newton's Third Law of Motion, the mutual gravitational attraction is an action-reaction pair: the person pulls upward on Earth with exactly 687.40 N, but because Earth has a huge mass (5.972 × 10²⁴ kg), Earth's resulting acceleration (a = F/M ≈ 1.15 × 10⁻²² m/s²) is unmeasurably small."
      },
      {
        question: "How does Newton's law of gravitation derive local surface gravity g?",
        answer: "Setting F = m·g equal to F = G·M·m/R² cancels the object mass m, yielding surface gravitational acceleration: g = G·M / R². For Earth, g = (6.6743e-11 × 5.972e24) / (6371000)² ≈ 9.81 m/s²."
      },
      {
        question: "Can gravitational force be negative (repulsive)?",
        answer: "In classical Newtonian physics, gravitational mass is always positive, making gravity strictly an attractive force. Repulsive gravitational effects in cosmology (dark energy / cosmic acceleration) are modeled via the cosmological constant Λ in Einstein's field equations."
      },
      {
        question: "Why are astronauts weightless in orbit if gravity at ISS altitude is 90% of Earth's surface gravity?",
        answer: "Astronauts are not outside Earth's gravity; at 420 km altitude, gravity is about 8.65 m/s² (88% of surface gravity). They experience weightlessness because the ISS and everything inside it are in perpetual free fall toward Earth while moving sideways fast enough to match Earth's curvature."
      },
      {
        question: "What is Newton's Shell Theorem?",
        answer: "Newton proved mathematically that a spherically symmetric body attracts external objects gravitationally as if all of its mass were concentrated at its exact geometric center point, and that inside a hollow spherical shell, net gravitational force is everywhere zero."
      },
      {
        question: "Who first measured the universal gravitational constant G experimentally?",
        answer: "Henry Cavendish first measured the gravitational constant G in 1798 using a sensitive torsion balance balance in his famous 'weighing the Earth' experiment."
      },
      {
        question: "What is the gravitational force between two 1 kg masses separated by 1 meter?",
        answer: "F = G × (1 × 1) / (1)² = 6.6743 × 10⁻¹¹ Newtons, illustrating why gravitational attraction is imperceptible between everyday small objects."
      }
    ],
    standardsReferences: [
      { organization: "CODATA / NIST", code: "CODATA 2018", title: "Fundamental Physical Constants — Newtonian Constant of Gravitation G" },
      { organization: "ISO", code: "ISO 80000-4:2019", title: "Quantities and units — Part 4: Mechanics" },
      { organization: "IAU", code: "IAU Resolution B1", title: "Standard Astrodynamic Constants and Celestial Ephemeris References" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 11. MECHANICAL WORK CALCULATOR
  "work-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Mechanical Work Calculator | Force, Displacement & Angle Work Solver",
    metaDescription: "Calculate mechanical work in Joules (W = F × d × cos(θ)) from applied force magnitude, displacement distance, and vector angle in classical mechanics.",
    canonicalUrl,
    introduction: {
      overview: "Mechanical work is defined as the measure of energy transfer that occurs when a force acts upon an object over a displacement distance. In classical Newtonian physics, work is the scalar dot product of the force vector and the displacement vector (W = F · d = F × d × cos(θ)). Only the component of force acting parallel to the direction of motion performs work; forces perpendicular to displacement (such as normal support forces or centripetal forces) perform zero mechanical work. Work calculations are foundational in machine design, hydraulic actuator sizing, engine dyno testing, and biomechanics.",
      applications: [
        "Sizing electric winch and hoist motor torque requirements for vertical lifting loads.",
        "Calculating energy expenditure and mechanical work output in hydraulic press cylinders.",
        "Determining work done against frictional resistance in conveyor belt transport systems.",
        "Analyzing human musculoskeletal energy expenditure during ergonomic lifting tasks."
      ],
      industries: [
        "Mechanical Design & Automation",
        "Heavy Equipment & Material Handling",
        "Automotive & Powertrain Testing",
        "Ergonomics & Biomechanical Engineering"
      ]
    },
    quickAnswer: "Mechanical work is calculated using W = F × d × cos(θ). For an applied force of 100 Newtons acting over a displacement of 15 meters aligned parallel to the motion (θ = 0°, cos(0°) = 1), the total mechanical work performed is 1,500 Joules (1.5 kJ).",
    governingEquation: {
      formula: "W = F \\times d \\times \\cos(\\theta)",
      explanation: "Work (W in Joules) equals the magnitude of applied force (F in Newtons) multiplied by linear displacement (d in meters) and the cosine of the angle (θ in degrees) between the force vector and the direction of displacement. 1 Joule equals 1 Newton-meter (N·m) = 1 kg·m²/s².",
      variables: [
        { symbol: "W", label: "Mechanical Work", unit: "Joules (J)", description: "Total energy transferred to or from the system by the force." },
        { symbol: "F", label: "Applied Force", unit: "Newtons (N)", description: "Magnitude of the applied mechanical force vector." },
        { symbol: "d", label: "Displacement", unit: "Meters (m)", description: "Linear distance moved along the displacement path." },
        { symbol: "θ", label: "Angle (theta)", unit: "Degrees (°)", description: "Angle between the applied force vector and displacement direction." }
      ]
    },
    inputParameters: [
      {
        name: "force",
        label: "Applied Force (F)",
        unit: "Newtons (N)",
        defaultValue: 100,
        explanation: "The magnitude of the applied force in Newtons. Default baseline is 100 N."
      },
      {
        name: "distance",
        label: "Displacement (d)",
        unit: "Meters (m)",
        defaultValue: 15,
        explanation: "The linear displacement distance traveled by the object in meters. Default baseline is 15 meters."
      },
      {
        name: "angle",
        label: "Angle (θ)",
        unit: "Degrees (°)",
        defaultValue: 0,
        explanation: "The angle between the force vector and displacement vector in degrees. Default baseline is 0° (force aligned with motion)."
      }
    ],
    outputExplanation: {
      unit: "Joules (J)",
      interpretation: "The net mechanical work done on the object, representing energy added (positive work) or extracted (negative work) by the force.",
      designImpact: "Used to determine energy consumption ratings for electric actuators, battery discharge requirements, and mechanical heat dissipation."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Applied Force (F)", value: 100, unit: "N" },
        { label: "Displacement (d)", value: 15, unit: "m" },
        { label: "Angle (θ)", value: 0, unit: "°" }
      ],
      substitution: "Substitute F = 100 N, d = 15 m, and θ = 0° into W = F × d × cos(θ):",
      intermediateSteps: [
        "1. Identify input values: Force F = 100 N, Distance d = 15 m, Angle θ = 0°.",
        "2. Evaluate the trigonometric angle cosine: cos(0°) = 1.0.",
        "3. Multiply force by displacement: 100 N × 15 m = 1500 N·m.",
        "4. Multiply by cosine factor: W = 1500 N·m × 1.0 = 1500 Joules (1.5 kJ)."
      ],
      finalResult: "1500",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Warehouse Pallet Jack Pulling Force Analysis",
      industryContext: "A logistics facility worker pulls a manual pallet jack with a loaded mass across a concrete floor over a distance of 25 meters, pulling the handle with a force of 150 N at an angle of 30° above the horizontal floor.",
      problemStatement: "Calculate the total mechanical work performed by the worker during this transport operation.",
      engineeringSolution: "W = F × d × cos(θ) = 150 N × 25 m × cos(30°) = 3,750 × 0.866025 ≈ 3,247.59 Joules (3.25 kJ)."
    },
    assumptions: [
      "The applied force remains constant in magnitude and direction over the entire displacement distance.",
      "The displacement occurs along a straight linear path.",
      "The object is treated as a rigid body with negligible elastic flexure."
    ],
    limitations: [
      "For varying forces (such as springs where F = kx), work must be computed by integration: W = ∫ F(x) dx = ½·k·x².",
      "Does not capture internal thermal friction losses occurring within complex gearboxes or drive linkages.",
      "Torque work in rotational shafts requires rotational formula: W = τ × θ_radians."
    ],
    commonMistakes: [
      "Entering trigonometric angles in radians into formulas requiring degrees.",
      "Forgetting that perpendicular forces (θ = 90°, cos(90°) = 0) do zero work (e.g., carrying a heavy box horizontally at constant speed does zero work against gravity).",
      "Ignoring negative signs when opposing forces like friction do negative work (θ = 180°, cos(180°) = -1)."
    ],
    bestPractices: [
      "Always resolve the force vector into components parallel (F·cos θ) and perpendicular (F·sin θ) to displacement.",
      "Remember that static forces holding an object stationary perform zero mechanical work because displacement is zero (d = 0).",
      "To find power output, divide total work done by the time duration required: P = W / t."
    ],
    faqs: [
      {
        question: "Why does carrying a heavy box horizontally at constant speed do zero work against gravity?",
        answer: "The gravitational force pulls vertically downward while the displacement is purely horizontal (angle θ = 90°). Because cos(90°) = 0, the mechanical work done against gravity is exactly zero (W = F × d × 0 = 0)."
      },
      {
        question: "What is the physical meaning of negative mechanical work?",
        answer: "Negative work occurs when a force opposes the direction of displacement (90° < θ ≤ 180°, where cos θ < 0), such as kinetic friction or braking forces. Negative work removes kinetic energy from the object and dissipates it as heat."
      },
      {
        question: "How is mechanical work related to the Work-Energy Theorem?",
        answer: "The Work-Energy Theorem establishes that the net mechanical work done on an object by all combined external forces equals its net change in kinetic energy: W_net = ΔKE = ½·m·(v_final² - v_initial²)."
      },
      {
        question: "What is the difference between 1 Joule of work and 1 Newton-meter of torque?",
        answer: "Although both share the units N·m, work is a scalar quantity representing energy transfer where force and displacement are collinear (dot product). Torque is a vector quantity representing rotational twisting moment where force and lever arm are perpendicular (cross product)."
      },
      {
        question: "How do you calculate work done by a variable spring force?",
        answer: "By Hooke's Law (F = kx), the force increases linearly with stretch x. Integrating work yields W = ∫₀ˣ (kx) dx = ½·k·x², representing the elastic strain energy stored in the spring."
      },
      {
        question: "How does mechanical work relate to electric energy?",
        answer: "One Joule of mechanical work is exactly equivalent to one Watt-second (1 W·s) of electrical energy. Converting 1 kilowatt-hour (kWh) of electricity produces 3,600,000 Joules of mechanical work at 100% efficiency."
      },
      {
        question: "Can a force perform work if the object does not move?",
        answer: "No. If displacement d = 0, mechanical work is identically zero (W = F × 0 = 0), regardless of how much force is applied (e.g., pushing firmly against a brick wall)."
      },
      {
        question: "What international standard defines units and symbols for mechanical work and energy?",
        answer: "ISO 80000-5:2019 defines standard symbols, equations, and SI units (Joule) for mechanical work, heat, and thermodynamics."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics & Energy" },
      { organization: "NIST", code: "SP 330", title: "The International System of Units (SI) — Mechanical Derived Units" },
      { organization: "ASME", code: "ASME PTC 19.1", title: "Test Uncertainty — Energy and Power Measurements" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 12. MECHANICAL POWER CALCULATOR
  "mechanical-power": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Mechanical Power Calculator | Work Done & Time Duration Power Solver",
    metaDescription: "Calculate mechanical power output in Watts (P = W / t) or horsepower from work done in Joules and elapsed time duration in classical dynamics.",
    canonicalUrl,
    introduction: {
      overview: "Mechanical power is the time rate at which mechanical work is performed or energy is transferred within a system. Measured in Watts (where 1 Watt = 1 Joule per second) or imperial horsepower (where 1 hp ≈ 745.7 Watts), power quantifies how rapidly a prime mover, electric motor, internal combustion engine, or hydraulic cylinder can accomplish a given quantity of work. Sizing mechanical power is critical in powertrain selection, pump and fan sizing, drivetrain thermal dissipation, and industrial energy efficiency management.",
      applications: [
        "Sizing electric motor kilowatt ratings for industrial conveyors, hoists, and cranes.",
        "Evaluating internal combustion engine brake horsepower (BHP) on dynamometers.",
        "Calculating hydraulic pump fluid power delivery in heavy mobile machinery.",
        "Determining human athlete peak power output in sports biomechanics performance testing."
      ],
      industries: [
        "Industrial Automation & Electric Drives",
        "Automotive & Powertrain Engineering",
        "Pumping & Fluid Power Systems",
        "Sports Performance & Exercise Physiology"
      ]
    },
    quickAnswer: "Mechanical power is calculated using P = W / t, where W is work done in Joules and t is time in seconds. For 1,500 Joules of work performed over a time duration of 5 seconds, the mechanical power output is 300 Watts (0.3 kW or 0.402 hp).",
    governingEquation: {
      formula: "P = \\frac{W}{t}",
      explanation: "Power (P in Watts) equals mechanical work (W in Joules) divided by elapsed time duration (t in seconds). For continuous force acting at constant velocity, power can also be expressed as P = F × v.",
      variables: [
        { symbol: "P", label: "Mechanical Power", unit: "Watts (W)", description: "Rate of doing work or transferring mechanical energy." },
        { symbol: "W", label: "Work Done", unit: "Joules (J)", description: "Total mechanical energy transferred during the interval." },
        { symbol: "t", label: "Time Duration", unit: "Seconds (s)", description: "Elapsed time over which the work is performed." }
      ]
    },
    inputParameters: [
      {
        name: "work",
        label: "Work Done (W)",
        unit: "Joules (J)",
        defaultValue: 1500,
        explanation: "The total mechanical work performed or energy transferred in Joules. Default baseline is 1,500 J."
      },
      {
        name: "time",
        label: "Time Duration (t)",
        unit: "Seconds (s)",
        defaultValue: 5,
        explanation: "The elapsed time duration in seconds. Default baseline is 5 seconds."
      }
    ],
    outputExplanation: {
      unit: "Watts (W)",
      interpretation: "The continuous rate of mechanical energy delivery in Joules per second.",
      designImpact: "Used to select standard industrial motor frame sizes (e.g., NEMA / IEC motor ratings), electrical breaker sizing, and thermal cooling requirements."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Work Done (W)", value: 1500, unit: "J" },
        { label: "Time Duration (t)", value: 5, unit: "s" }
      ],
      substitution: "Substitute W = 1500 J and t = 5 s into the power equation P = W / t:",
      intermediateSteps: [
        "1. Identify input parameters: Work W = 1500 J, Time t = 5 s.",
        "2. Verify SI unit compatibility: Joules (J) and seconds (s).",
        "3. Divide work by time: P = 1500 J / 5 s = 300 J/s.",
        "4. Convert to SI derived units: 1 J/s = 1 Watt (W), giving P = 300 W (0.30 kW)."
      ],
      finalResult: "300",
      unit: "Watts (W)"
    },
    practicalExample: {
      scenarioTitle: "Freight Elevator Motor Kilowatt Sizing",
      industryContext: "An elevator engineering team sizes the traction drive motor required to lift a 2,000 kg loaded elevator car vertically by 15 meters in 10 seconds at constant velocity.",
      problemStatement: "Calculate the net mechanical power output required from the motor during the lift, ignoring friction.",
      engineeringSolution: "First compute the work done against gravity: W = m × g × h = 2,000 kg × 9.81 m/s² × 15 m = 294,300 Joules. Next compute power: P = W / t = 294,300 J / 10 s = 29,430 Watts (29.43 kW or 39.46 hp). Applying a 1.25 mechanical drive safety and friction factor requires a standard 37 kW (50 hp) industrial motor."
    },
    assumptions: [
      "The rate of work performed is uniform and constant over the specified time interval.",
      "Zero friction and thermal losses within the idealized mechanical transmission.",
      "Time duration is positive and non-zero (t > 0)."
    ],
    limitations: [
      "Calculates average power over time t; instantaneous peak power during initial acceleration surges may be significantly higher.",
      "Does not model motor electrical efficiency (η = P_mechanical / P_electrical).",
      "For rotational drive shafts, power is calculated via rotational torque: P = τ × ω."
    ],
    commonMistakes: [
      "Confusing energy (Joules, kilowatt-hours) with power (Watts, horsepower). Energy is total work; power is the speed of performing that work.",
      "Entering time in minutes or hours without converting to seconds (1 min = 60 s; 1 hr = 3600 s).",
      "Confusing metric horsepower (PS / CV ≈ 735.5 W) with imperial mechanical horsepower (hp ≈ 745.7 W)."
    ],
    bestPractices: [
      "Always convert power to kilowatts (kW) for electrical grid load planning: kW = Watts / 1000.",
      "When sizing prime movers, always divide mechanical output power by system efficiency: P_input = P_output / η.",
      "For continuous heavy industrial service, apply standard service factors (typically 1.15 to 1.50) to prevent motor thermal overheating."
    ],
    faqs: [
      {
        question: "What is the exact physical definition of 1 Watt of power?",
        answer: "One Watt (1 W) is the standard SI derived unit of power defined as the rate of energy transfer or work performed at one Joule per second (1 W = 1 J/s = 1 N·m/s = 1 kg·m²/s³)."
      },
      {
        question: "How do you convert Watts into mechanical horsepower (hp)?",
        answer: "Divide the power in Watts by 745.69987 (1 hp ≈ 745.7 W). For example, 7,457 Watts equals exactly 10.0 imperial horsepower."
      },
      {
        question: "How does power relate to force and velocity?",
        answer: "Because Work W = F × d, substituting into P = W / t yields P = F × (d / t) = F × v. Thus, instantaneous mechanical power equals force multiplied by velocity."
      },
      {
        question: "What is the difference between peak power and continuous power?",
        answer: "Continuous power is the rate of work a motor can maintain indefinitely without thermal overheating. Peak power is the transient maximum power output deliverable for short bursts (typically 5 to 30 seconds) during heavy starting loads."
      },
      {
        question: "How does rotational power relate to torque and RPM?",
        answer: "In rotating machinery, power is calculated as P = τ × ω = τ × (2π × RPM / 60), where τ is torque in N·m. In imperial units: Horsepower = (Torque in lb-ft × RPM) / 5252."
      },
      {
        question: "Why do two machines doing the same total work have different power ratings?",
        answer: "Power depends on speed. Lifting a 1,000 kg weight 10 meters takes 98.1 kJ of work. Machine A doing it in 10 seconds outputs 9.81 kW; Machine B doing it in 100 seconds outputs only 0.981 kW."
      },
      {
        question: "Who was the Watt unit named after?",
        answer: "The Watt was named in honor of Scottish engineer James Watt (1736–1819) for his pioneering improvements to the steam engine and his original definition of horsepower."
      },
      {
        question: "What standard defines electrical motor efficiency and power ratings?",
        answer: "IEC 60034-30-1 defines international energy efficiency classes (IE1 through IE4) for industrial three-phase electric induction motors."
      }
    ],
    standardsReferences: [
      { organization: "ISO / IEC", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics & Energy" },
      { organization: "NEMA", code: "NEMA MG 1", title: "Motors and Generators — Power Ratings and Efficiency Standards" },
      { organization: "IEEE", code: "IEEE Std 112", title: "Standard Test Procedure for Polyphase Induction Motors and Generators" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 13. WORK-ENERGY THEOREM CALCULATOR
  "work-energy-theorem-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Work-Energy Theorem Calculator | Change in Kinetic Energy Solver",
    metaDescription: "Calculate net mechanical work done (W = ½·m·(vf² - vi²)) in Joules from mass and initial vs final velocities using the Work-Energy Theorem.",
    canonicalUrl,
    introduction: {
      overview: "The Work-Energy Theorem is a fundamental principle of classical Newtonian mechanics stating that the net work performed on an object by all combined external forces is strictly equal to the resulting change in the object's kinetic energy (W_net = ΔKE). This foundational relationship bridges force-displacement dynamics with energy conservation, allowing engineers to determine stopping distances, vehicle acceleration work, projectile penetration resistance, and mechanical brake dissipation without needing to resolve complex time-dependent acceleration profiles.",
      applications: [
        "Calculating vehicle braking energy absorption and emergency stopping distances.",
        "Evaluating kinetic energy changes during aircraft catapult takeoff and carrier arrestor landing.",
        "Analyzing projectile penetration energy dissipation in ballistic armor plating.",
        "Determining work required to accelerate conveyor belts and heavy industrial machinery from rest."
      ],
      industries: [
        "Automotive & Transportation Safety",
        "Aerospace & Carrier Aviation Dynamics",
        "Defense & Ballistic Armor Testing",
        "Industrial Machinery & Conveying Systems"
      ]
    },
    quickAnswer: "The Work-Energy Theorem states that W = ½ × m × (v_f² - v_i²). For a 10 kg mass accelerated from an initial velocity of 2 m/s to a final velocity of 10 m/s, the net mechanical work done on the object is 480 Joules.",
    governingEquation: {
      formula: "W = \\frac{1}{2} \\times m \\times (v_f^2 - v_i^2)",
      explanation: "Net work (W in Joules) equals half the product of object mass (m in kg) and the difference between the square of the final velocity (v_f² in m²/s²) and the square of the initial velocity (v_i² in m²/s²).",
      variables: [
        { symbol: "W", label: "Net Mechanical Work", unit: "Joules (J)", description: "Total work done by all net external forces." },
        { symbol: "m", label: "Object Mass", unit: "Kilograms (kg)", description: "Inertial mass of the moving body." },
        { symbol: "vi", label: "Initial Velocity (v_i)", unit: "m/s", description: "Starting velocity prior to work application." },
        { symbol: "vf", label: "Final Velocity (v_f)", unit: "m/s", description: "Ending velocity after work application." }
      ]
    },
    inputParameters: [
      {
        name: "m",
        label: "Object Mass (m)",
        unit: "kg",
        defaultValue: 10,
        explanation: "The mass of the accelerated object in kilograms. Default baseline is 10 kg."
      },
      {
        name: "vi",
        label: "Initial Velocity (v_i)",
        unit: "m/s",
        defaultValue: 2,
        explanation: "The initial velocity of the object before the force acts. Default baseline is 2 m/s."
      },
      {
        name: "vf",
        label: "Final Velocity (v_f)",
        unit: "m/s",
        defaultValue: 10,
        explanation: "The final velocity of the object after the force acts. Default baseline is 10 m/s."
      }
    ],
    outputExplanation: {
      unit: "Joules (J)",
      interpretation: "The net mechanical work done on the object, corresponding to positive energy added during acceleration or negative energy extracted during braking.",
      designImpact: "Used to size brake thermal dissipation capacities, calculate engine acceleration work, and design crash energy absorption structures."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Object Mass (m)", value: 10, unit: "kg" },
        { label: "Initial Velocity (v_i)", value: 2, unit: "m/s" },
        { label: "Final Velocity (v_f)", value: 10, unit: "m/s" }
      ],
      substitution: "Substitute m = 10 kg, v_i = 2 m/s, and v_f = 10 m/s into W = 0.5 × m × (v_f² - v_i²):",
      intermediateSteps: [
        "1. Square the final velocity: v_f² = (10 m/s)² = 100 m²/s².",
        "2. Square the initial velocity: v_i² = (2 m/s)² = 4 m²/s².",
        "3. Compute velocity squared difference: (v_f² - v_i²) = 100 - 4 = 96 m²/s².",
        "4. Multiply by mass and 0.5: W = 0.5 × 10 kg × 96 m²/s² = 5 × 96 = 480 Joules."
      ],
      finalResult: "480",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Automotive Highway Braking Energy Dissipation",
      industryContext: "An automotive brake systems engineer sizes front ceramic brake rotors for a 1,500 kg passenger sedan decelerating from 30 m/s (108 km/h) to 10 m/s (36 km/h) on a highway ramp.",
      problemStatement: "Calculate the net mechanical work done by the braking system and the thermal energy absorbed by the rotors.",
      engineeringSolution: "W = 0.5 × 1,500 kg × (10² - 30²) = 750 × (100 - 900) = 750 × (-800) = -600,000 Joules (-600 kJ). The brakes perform -600 kJ of work on the car, converting 600 kJ of mechanical kinetic energy directly into thermal heat in the brake rotors."
    },
    assumptions: [
      "Rigid body translational motion without internal rotational degrees of freedom.",
      "The mass remains constant throughout the velocity transition.",
      "Non-relativistic velocities (v ≪ c)."
    ],
    limitations: [
      "Applies only to net work (the sum of all applied, frictional, and gravitational forces); individual forces may do different amounts of work.",
      "Does not account for energy lost to acoustic sound or plastic deformation unless treated as non-conservative work components.",
      "For rolling vehicles, wheel rotational inertia contributes additional kinetic energy (½·I·ω²)."
    ],
    commonMistakes: [
      "Squaring the difference in velocities (v_f - v_i)² instead of computing the difference of the squares (v_f² - v_i²). (10 - 2)² = 64 ≠ 100 - 4 = 96.",
      "Entering speeds in km/h or mph without converting to m/s.",
      "Ignoring negative signs during deceleration (negative work indicates energy removal)."
    ],
    bestPractices: [
      "Always compute (v_f² - v_i²) term-by-term: never compute (v_f - v_i)².",
      "Combine with F_avg × d = ΔKE to directly calculate average stopping distance without needing acceleration time: d = ΔKE / F_brake.",
      "In vehicle dynamics, account for 5%–10% additional effective mass representing rotational inertia of drivetrain wheels and axles."
    ],
    faqs: [
      {
        question: "Why is (v_f² - v_i²) NOT equal to (v_f - v_i)²?",
        answer: "Algebraically, (v_f - v_i)² expands to v_f² - 2·v_f·v_i + v_i², which includes a cross-product term. The Work-Energy Theorem integrates force over displacement (∫ v dv = ½v²), which rigorously yields the difference of individual squares (v_f² - v_i²)."
      },
      {
        question: "How is the Work-Energy Theorem derived mathematically from Newton's Second Law?",
        answer: "Starting with W = ∫ F dx, substitute F = m·(dv/dt). Using the chain rule dx = v dt, W = ∫ m·(dv/dt)·(v dt) = m ∫ v dv. Integrating from v_i to v_f yields W = ½·m·v_f² - ½·m·v_i² = ΔKE."
      },
      {
        question: "What does a negative work result indicate in the Work-Energy Theorem?",
        answer: "Negative work indicates that the net external force acted in the direction opposite to motion, reducing the object's kinetic energy (deceleration or braking)."
      },
      {
        question: "Does the Work-Energy Theorem apply when forces vary with position?",
        answer: "Yes. The theorem holds true universally for both constant and variable forces (such as springs, gravitational fields, or non-linear aerodynamic drag)."
      },
      {
        question: "How do conservative versus non-conservative forces affect the Work-Energy Theorem?",
        answer: "Work from conservative forces (like gravity or springs) can be expressed as changes in potential energy (-ΔPE). Thus, W_non-conservative = ΔKE + ΔPE = ΔE_mechanical."
      },
      {
        question: "How do you calculate required stopping distance using the Work-Energy Theorem?",
        answer: "Set braking work (F_brake × d) equal to initial kinetic energy (½·m·v_i²). Solving for distance yields d = (m·v_i²) / (2·F_brake)."
      },
      {
        question: "Can the Work-Energy Theorem be applied to multi-body systems?",
        answer: "Yes, by summing the work done on all individual masses and accounting for internal conservative and dissipative interactions between components."
      },
      {
        question: "What ISO standard covers mechanical energy and kinetic quantities?",
        answer: "ISO 80000-4:2019 defines physical quantities, derived units, and mathematical symbols for classical mechanics and energy theorems."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-4:2019", title: "Quantities and units — Part 4: Mechanics" },
      { organization: "SAE", code: "SAE J299", title: "Stopping Distance Test Procedure for Motor Vehicles" },
      { organization: "ASME", code: "ASME B20.1", title: "Safety Standard for Conveyors and Related Equipment" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 14. TORQUE & ANGULAR ACCELERATION CALCULATOR
  "torque-angular-acceleration-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Torque & Angular Acceleration Calculator | Rotational Dynamics Solver",
    metaDescription: "Calculate rotational torque in Newton-meters (τ = I × α) from mass moment of inertia and angular acceleration using Newton's Second Law for Rotation.",
    canonicalUrl,
    introduction: {
      overview: "Newton's Second Law for Rotation establishes the fundamental relationship governing rotational dynamics: the net external torque applied to a rigid body rotating about a fixed axis is directly proportional to its mass moment of inertia and the resulting angular acceleration (τ = I × α). Analogous to linear force (F = m·a), torque represents the rotational twisting effort required to change a body's angular velocity. Calculating rotational torque is critical in servo motor sizing, robotics joint design, flywheel spin-up, and turbine rotor balancing.",
      applications: [
        "Sizing servomotor and stepper motor peak torque for high-speed robotic arm joints.",
        "Calculating drive torque required to spin up industrial flywheels and centrifuge rotors.",
        "Evaluating braking torque for wind turbine emergency aerodynamic and disc brake stops.",
        "Analyzing torsional shaft stresses in marine propulsion shafts and automotive drivetrains."
      ],
      industries: [
        "Robotics & Mechatronics Engineering",
        "Wind Energy & Turbomachinery",
        "Industrial Automation & Servo Drives",
        "Automotive & Powertrain Dynamics"
      ]
    },
    quickAnswer: "Rotational torque is calculated using τ = I × α. For a rotating mass with a moment of inertia of 2.5 kg·m² undergoing an angular acceleration of 4 rad/s², the required net torque is 10 Newton-meters (10 N·m).",
    governingEquation: {
      formula: "\\tau = I \\times \\alpha",
      explanation: "Net torque (τ in Newton-meters) equals the mass moment of inertia (I in kg·m²) multiplied by angular acceleration (α in radians per second squared). In rotational mechanics, moment of inertia (I = ∫ r² dm) represents rotational inertia.",
      variables: [
        { symbol: "τ", label: "Torque", unit: "Newton-meters (N·m)", description: "Rotational twisting effort applied about the axis of rotation." },
        { symbol: "I", label: "Moment of Inertia", unit: "kg·m²", description: "Rotational mass moment of inertia about the spin axis." },
        { symbol: "α", label: "Angular Acceleration", unit: "rad/s²", description: "Rate of change of rotational angular velocity over time." }
      ]
    },
    inputParameters: [
      {
        name: "i",
        label: "Moment of Inertia (I)",
        unit: "kg·m²",
        defaultValue: 2.5,
        explanation: "The mass moment of inertia about the rotation axis in kg·m². Default baseline is 2.5 kg·m²."
      },
      {
        name: "alpha",
        label: "Angular Acceleration (α)",
        unit: "rad/s²",
        defaultValue: 4,
        explanation: "The angular acceleration in radians per second squared (rad/s²). Default baseline is 4 rad/s²."
      }
    ],
    outputExplanation: {
      unit: "Newton-meters (N·m)",
      interpretation: "The net rotational torque required to produce the specified angular acceleration on the rotating body.",
      designImpact: "Dictates gearbox reduction ratios, motor continuous and stall torque specifications, keyway shear stresses, and shaft diameters."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Moment of Inertia (I)", value: 2.5, unit: "kg·m²" },
        { label: "Angular Acceleration (α)", value: 4, unit: "rad/s²" }
      ],
      substitution: "Substitute I = 2.5 kg·m² and α = 4 rad/s² into the rotational torque equation τ = I × α:",
      intermediateSteps: [
        "1. Identify input variables: Moment of inertia I = 2.5 kg·m², Angular acceleration α = 4 rad/s².",
        "2. Verify SI unit consistency: kg·m² and rad/s².",
        "3. Multiply moment of inertia by angular acceleration: τ = 2.5 kg·m² × 4 rad/s² = 10 (kg·m²/s²).",
        "4. Convert to SI derived units: 1 kg·m²/s² = 1 N·m, resulting in τ = 10 N·m."
      ],
      finalResult: "10",
      unit: "Newton-meters (N·m)"
    },
    practicalExample: {
      scenarioTitle: "Industrial CNC Indexing Rotary Table Motor Sizing",
      industryContext: "A robotics design team sizes a brushless direct-drive torque motor for a rotary indexing table with a total moment of inertia (table + steel fixture + workpiece) of 2.5 kg·m².",
      problemStatement: "Determine the torque required to accelerate the table from rest to 120 RPM (12.566 rad/s) in 3.14 seconds (α = 4.0 rad/s²).",
      engineeringSolution: "τ_accel = I × α = 2.5 kg·m² × 4.0 rad/s² = 10.0 N·m. Adding 2.0 N·m of bearing seal friction yields a total required motor torque of 12.0 N·m."
    },
    assumptions: [
      "Rigid body rotation about a fixed principal axis of symmetry.",
      "Moment of inertia remains constant during rotation.",
      "The angular acceleration vector aligns coaxially with the rotation axis."
    ],
    limitations: [
      "For 3D rotations about non-principal axes, the full 3×3 inertia tensor matrix (τ = [I] · α + ω × ([I]·ω)) with gyroscopic precession must be used.",
      "Does not capture torsional shaft wind-up flexure in highly elastic couplings.",
      "Requires converting RPM/s or degrees/s² into radians/s² prior to calculation."
    ],
    commonMistakes: [
      "Entering angular acceleration in degrees/s² or RPM/s without converting to radians/s² (1 rev = 2π radians ≈ 6.28318 rad).",
      "Using mass (kg) instead of mass moment of inertia (kg·m²).",
      "Confusing rotational torque (τ = I·α in N·m) with rotational kinetic energy (KE = ½·I·ω² in Joules)."
    ],
    bestPractices: [
      "Convert angular speed from RPM to rad/s using ω = RPM × (2π / 60) ≈ RPM × 0.10472.",
      "Calculate moment of inertia for standard shapes accurately (e.g., solid cylinder I = ½·m·r²; hollow cylinder I = ½·m·(r_outer² + r_inner²)).",
      "In high-dynamic servo systems, ensure motor-to-load inertia ratio (I_load / I_motor) is kept under 5:1 to 10:1 for stable tuning."
    ],
    faqs: [
      {
        question: "What is the rotational equivalent of mass in linear physics?",
        answer: "Mass moment of inertia (I) is the rotational analog of mass. While mass measures resistance to linear acceleration (F = ma), moment of inertia measures resistance to angular acceleration (τ = Iα) and depends on both mass and how far that mass is distributed from the axis of rotation (I = ∫ r² dm)."
      },
      {
        question: "How do you convert angular acceleration from RPM/second to rad/s²?",
        answer: "Multiply the angular acceleration in RPM/s by (2π / 60) ≈ 0.1047198. For example, accelerating by 600 RPM in 1 second is 600 RPM/s = 600 × 0.10472 = 62.83 rad/s²."
      },
      {
        question: "What is the formula for the moment of inertia of a solid cylinder rotating about its central axis?",
        answer: "For a uniform solid cylinder or disc of mass m and radius r, the mass moment of inertia is I = ½·m·r²."
      },
      {
        question: "What is the Parallel Axis Theorem (Steiner's Theorem)?",
        answer: "The Parallel Axis Theorem states that the moment of inertia about any axis parallel to an axis through the center of mass is I_parallel = I_cm + m·d², where d is the perpendicular distance between the two axes."
      },
      {
        question: "How does torque relate to lever arm distance and applied force?",
        answer: "Torque produced by a physical force is τ = F × r × sin(θ), where r is the lever arm distance from the pivot and θ is the angle between force and lever arm. Torque is maximized when force is perpendicular (θ = 90°)."
      },
      {
        question: "What is the relationship between torque, power, and angular velocity?",
        answer: "Mechanical power delivered by a rotating shaft is P = τ × ω, where τ is torque in N·m and ω is angular velocity in rad/s. In kilowatts: P(kW) = (Torque(N·m) × RPM) / 9549."
      },
      {
        question: "How does rotational kinetic energy relate to moment of inertia?",
        answer: "Rotational kinetic energy is given by KE_rot = ½·I·ω², analogous to linear kinetic energy KE = ½·m·v²."
      },
      {
        question: "What standard covers motor and drivetrain torque and inertia measurements?",
        answer: "ISO 80000-4:2019 defines mechanical quantities and symbols for rotational dynamics, torque, and moment of inertia."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-4:2019", title: "Quantities and units — Part 4: Mechanics — Rotational Dynamics" },
      { organization: "AGMA", code: "ANSI/AGMA 6001-E08", title: "Design and Selection of Components for Enclosed Gear Drives" },
      { organization: "IEEE", code: "IEEE Std 141", title: "Recommended Practice for Electric Power Distribution in Industrial Plants — Motor Acceleration" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 15. SOUND WAVE INTENSITY CALCULATOR
  "sound-wave-intensity-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Sound Wave Intensity Calculator | Acoustic Power & Distance Solver",
    metaDescription: "Calculate acoustic sound wave intensity in W/m² (I = P / (4π·r²)) and decibel sound level from acoustic source power and radial distance.",
    canonicalUrl,
    introduction: {
      overview: "Sound wave intensity is the time-averaged rate of acoustic energy transmitted per unit surface area perpendicular to the direction of sound propagation. Emitted from an omnidirectional isotropic acoustic point source in a free field, acoustic sound waves expand outward spherically. Consequently, sound intensity diminishes with the square of the distance from the source under the geometric Inverse-Square Law. Sizing sound intensity and sound pressure levels is critical in architectural acoustics, environmental noise control, industrial OSHA hearing conservation, and audio loudspeaker design.",
      applications: [
        "Evaluating environmental noise compliance for industrial manufacturing plants near residential zones.",
        "Sizing concert arena loudspeaker arrays and public address audio coverage.",
        "Calculating OSHA occupational noise exposure zones around heavy machinery and gas turbines.",
        "Designing architectural acoustic enclosures and noise abatement sound barriers."
      ],
      industries: [
        "Acoustical & Architectural Engineering",
        "Environmental Noise & Urban Planning",
        "Audio Systems & Loudspeaker Design",
        "Occupational Health & Safety (OSHA)"
      ]
    },
    quickAnswer: "Acoustic sound wave intensity from an isotropic point source is calculated as I = P / (4π × r²). For an acoustic sound power of 50 Watts at a radial distance of 5 meters, the acoustic intensity is approximately 0.159 W/m² (corresponding to a sound intensity level of ~112 dB SIL).",
    governingEquation: {
      formula: "I = \\frac{P}{4\\pi \\times r^2}",
      explanation: "Sound intensity (I in Watts per square meter, W/m²) equals total acoustic radiated sound power (P in Watts) divided by the surface area of a sphere of radius r (4π × r² in m²). Sound Intensity Level (SIL in decibels) is derived as L_I = 10 × log₁₀(I / I₀), where I₀ = 10⁻¹² W/m² (the standard human threshold of hearing).",
      variables: [
        { symbol: "I", label: "Sound Wave Intensity", unit: "W/m²", description: "Acoustic power flux per unit area perpendicular to propagation." },
        { symbol: "P", label: "Acoustic Sound Power", unit: "Watts (W)", description: "Total sound energy emitted per second by the source." },
        { symbol: "r", label: "Radial Distance", unit: "Meters (m)", description: "Distance from the acoustic point source to the receiver." }
      ]
    },
    inputParameters: [
      {
        name: "p",
        label: "Acoustic Power (P)",
        unit: "Watts (W)",
        defaultValue: 50,
        explanation: "Total sound power emitted by the acoustic source in Watts. Default baseline is 50 Watts (representing a loud industrial siren or small jet exhaust)."
      },
      {
        name: "r",
        label: "Distance (r)",
        unit: "Meters (m)",
        defaultValue: 5,
        explanation: "Radial distance from the sound source to the observation point in meters. Default baseline is 5 meters."
      }
    ],
    outputExplanation: {
      unit: "W/m²",
      interpretation: "The acoustic energy flux density passing through a one-square-meter area at the specified distance.",
      designImpact: "Used to determine required hearing protection levels (NRR), noise barrier transmission loss ratings, and compliance with municipal noise ordinances."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Acoustic Power (P)", value: 50, unit: "W" },
        { label: "Distance (r)", value: 5, unit: "m" }
      ],
      substitution: "Substitute P = 50 W and r = 5 m into the spherical sound intensity equation I = P / (4π × r²):",
      intermediateSteps: [
        "1. Square the distance: r² = (5 m)² = 25 m².",
        "2. Compute spherical surface area: 4π × r² = 4 × π × 25 = 100π ≈ 314.159265 m².",
        "3. Divide acoustic power by spherical area: I = 50 W / 314.159265 m² ≈ 0.159155 W/m².",
        "4. Round to practical engineering precision: I ≈ 0.159 W/m²."
      ],
      finalResult: "0.159",
      unit: "W/m²"
    },
    practicalExample: {
      scenarioTitle: "Industrial Gas Turbine Exhaust Noise Perimeter Assessment",
      industryContext: "An environmental engineering firm assesses noise levels from an un-silenced power plant gas turbine exhaust radiating 50 Watts of acoustic sound power into a free field.",
      problemStatement: "Calculate the acoustic sound intensity and decibel sound intensity level (SIL) at a boundary fence line located 50 meters away.",
      engineeringSolution: "At r = 50 m: Area = 4π × (50)² = 31,415.93 m². Intensity I = 50 / 31,415.93 ≈ 0.0015915 W/m². In decibels: SIL = 10 × log₁₀(0.0015915 / 10⁻¹²) = 10 × log₁₀(1.5915 × 10⁹) = 10 × 9.2018 ≈ 92.02 dB. Because 92 dB exceeds the 85 dB OSHA 8-hour exposure limit, acoustic silencer baffles must be installed."
    },
    assumptions: [
      "Isotropic point source radiating uniformly in all directions in a 3D spherical free field (full 4π steradians).",
      "Zero atmospheric absorption or thermal gradient refraction.",
      "No acoustic reflections from ground surfaces, walls, or nearby structures (pure anechoic free field)."
    ],
    limitations: [
      "If the source rests on a reflective ground plane (hemispherical radiation), the area is 2π·r² instead of 4π·r² (doubling the intensity by +3 dB).",
      "Does not model atmospheric high-frequency air attenuation (which dissipates sound over large distances > 100 m).",
      "Near-field acoustic wave effects (within 1–2 wavelengths of a large vibrating panel) deviate from point-source inverse-square laws."
    ],
    commonMistakes: [
      "Confusing acoustic sound power (Watts) with electrical power consumed by an amplifier/speaker (a 1,000 W electrical amplifier typically converts only 10 to 50 W into actual acoustic sound energy due to 1%–5% transducer efficiency).",
      "Using the 4π free-field formula for indoor rooms where reverberation and wall reflections dominate.",
      "Forgetting that doubling distance reduces sound intensity by a factor of 4 (a 6 dB drop in sound level)."
    ],
    bestPractices: [
      "For outdoor ground-mounted sound sources, use hemispherical radiation (Area = 2π·r²) or add a directivity factor Q (Q = 2 for flat ground, Q = 4 for wall-ground corner).",
      "Convert intensity to decibels for human auditory perception using SIL = 10 × log₁₀(I / 10⁻¹²).",
      "Apply A-weighting (dBA) adjustments to account for human ear frequency sensitivity differences across the audible spectrum (20 Hz to 20 kHz)."
    ],
    faqs: [
      {
        question: "What is the standard reference threshold of human hearing (I₀)?",
        answer: "The internationally standardized reference threshold of human hearing is I₀ = 1.0 × 10⁻¹² W/m² (1 picowatt per square meter) at 1,000 Hz, corresponding to 0 dB Sound Intensity Level (SIL)."
      },
      {
        question: "Why does sound intensity drop by 6 dB every time distance from a point source is doubled?",
        answer: "Because intensity follows the inverse-square law (I ∝ 1/r²), doubling distance (r → 2r) quarters the intensity (I → I/4). In decibels: ΔL = 10 × log₁₀(1/4) = 10 × (-0.602) ≈ -6.02 dB."
      },
      {
        question: "What is the difference between sound power, sound intensity, and sound pressure?",
        answer: "Sound Power (Watts) is the total acoustic energy output of the source regardless of environment. Sound Intensity (W/m²) is the directional energy flow per unit area at a specific distance. Sound Pressure (Pascals) is the local atmospheric pressure fluctuation detected by a microphone or eardrum."
      },
      {
        question: "How does hemispherical sound radiation over a reflective ground plane change the formula?",
        answer: "When sound radiates above a hard reflective ground plane (hemisphere), energy cannot travel downward, concentrating the sound into half the volume. The formula becomes I = P / (2π × r²), which doubles the intensity (+3 dB)."
      },
      {
        question: "What is the acoustic threshold of pain for human ears in W/m² and dB?",
        answer: "The threshold of human acoustic pain is approximately 1.0 W/m² to 10 W/m², corresponding to 120 dB to 130 dB Sound Intensity Level."
      },
      {
        question: "How efficient are typical audio loudspeakers at converting electrical Watts to acoustic Watts?",
        answer: "Most conventional dynamic cone loudspeakers have an acoustic efficiency of only 1% to 4%. A loudspeaker drawing 100 Watts of electrical power typically radiates only 1 to 4 Watts of actual acoustic sound power, with the remaining 96%–99% lost as heat in the voice coil."
      },
      {
        question: "How does wind and temperature gradients affect outdoor sound propagation?",
        answer: "Wind shears and temperature inversions refract (bend) sound waves downward or upward, creating acoustic shadow zones upwind and focusing sound over much greater distances downwind."
      },
      {
        question: "What ISO standard defines measurement and determination of sound power levels?",
        answer: "ISO 3744 and ISO 9614 define engineering methods for determining sound power levels of noise sources using sound pressure and sound intensity measurements."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 9614-1", title: "Acoustics — Determination of sound power levels of noise sources using sound intensity" },
      { organization: "ISO", code: "ISO 80000-8:2020", title: "Quantities and units — Part 8: Acoustics" },
      { organization: "ANSI / ASA", code: "ANSI/ASA S1.18", title: "Template Method for Ground Impedance and Outdoor Sound Propagation" }
    ],
    internalLinks: {
      parentDiscipline: { id: "physics-calculators", name: "Physics" },
      relatedTools,
      relevantUnitCategories
    }
  })
};
