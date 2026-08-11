import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Mechanical Engineering Calculators.
 * Scientifically rigorous, mathematically verified, practical, and clear.
 */

export const mechanicalBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 1. GEAR RATIO & VELOCITY CALCULATOR
  "gear-ratio": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Gear Ratio & Velocity Calculator | Output Speed & Torque Multiplier",
    metaDescription: "Calculate gear ratio, output RPM velocity, and torque multiplication between driver and driven gears using tooth counts and rotational speed.",
    canonicalUrl,
    introduction: {
      overview: "A gear ratio defines the mechanical velocity and torque relationship between two or more meshed gears in a gear train. In positive-displacement mechanical drives, the rotational speed of the driven gear is inversely proportional to its tooth count relative to the driving gear. Gear drives allow engineers to match high-speed prime movers like electric motors or internal combustion engines to heavy industrial loads requiring higher torque at lower rotational speeds.",
      applications: [
        "Determining gear reduction ratios for industrial speed reducers and gearboxes.",
        "Sizing automotive transmission differential ring and pinion gears.",
        "Calculating stepper motor step resolution adjustments in robotics and CNC axes.",
        "Verifying output drive shaft velocity in heavy machinery gear trains."
      ],
      industries: [
        "Automotive Engineering & Powertrain",
        "Industrial Automation & Gearbox Manufacturing",
        "Robotics & Mechatronics",
        "Mining & Heavy Machinery"
      ]
    },
    quickAnswer: "The output velocity of a driven gear is calculated using the formula N2 = N1 × (T1 / T2), where N1 is driver RPM, T1 is driver tooth count, and T2 is driven tooth count. For a 20-tooth driver gear spinning at 1,750 RPM meshed with a 60-tooth driven gear, the output speed is 583.33 RPM, representing a 3:1 speed reduction and 3:1 torque multiplication.",
    governingEquation: {
      formula: "N_2 = N_1 \\times \\left(\\frac{T_1}{T_2}\\right)",
      explanation: "The angular velocity ratio (N1/N2) between two meshed spur or helical gears is equal to the ratio of the number of teeth on the driven gear to the driving gear (T2/T1). Because teeth mesh without slipping, tangential velocity at the pitch line is identical for both gears.",
      variables: [
        { symbol: "N1", label: "Driver Speed", unit: "RPM", description: "Rotational velocity of the input driving gear." },
        { symbol: "T1", label: "Driver Tooth Count", unit: "Teeth", description: "Number of gear teeth on the input shaft driver gear." },
        { symbol: "T2", label: "Driven Tooth Count", unit: "Teeth", description: "Number of gear teeth on the output shaft driven gear." },
        { symbol: "N2", label: "Driven Speed", unit: "RPM", description: "Resulting output rotational velocity on the driven shaft." }
      ]
    },
    inputParameters: [
      {
        name: "rpmDriver",
        label: "Driver Speed (N1)",
        unit: "RPM",
        defaultValue: 1750,
        explanation: "Input rotational speed supplied by the electric motor, engine, or drive shaft."
      },
      {
        name: "teethDriver",
        label: "Driver Teeth (T1)",
        unit: "Count",
        defaultValue: 20,
        explanation: "Number of physical gear teeth cut into the drive pinion or gear."
      },
      {
        name: "teethDriven",
        label: "Driven Teeth (T2)",
        unit: "Count",
        defaultValue: 60,
        explanation: "Number of gear teeth on the driven mating gear attached to the load."
      }
    ],
    outputExplanation: {
      unit: "RPM",
      interpretation: "The output value represents the exact rotational speed of the driven gear shaft under zero-slip conditions.",
      designImpact: "Dictates load movement speed, shaft torque transmission, gear pitch line velocity, and dynamic tooth bending fatigue limits."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Driver Speed (N1)", value: 1750, unit: "RPM" },
        { label: "Driver Teeth (T1)", value: 20, unit: "Teeth" },
        { label: "Driven Teeth (T2)", value: 60, unit: "Teeth" }
      ],
      substitution: "Substitute N1 = 1750 RPM, T1 = 20, and T2 = 60 into N2 = N1 × (T1 / T2):",
      intermediateSteps: [
        "1. Identify driver speed N1 = 1750 RPM, driver teeth T1 = 20, and driven teeth T2 = 60.",
        "2. Compute the gear tooth ratio: T1 / T2 = 20 / 60 = 0.333333.",
        "3. Multiply driver speed by the tooth ratio: 1750 × 0.333333 = 583.333 RPM."
      ],
      finalResult: "583.33",
      unit: "RPM"
    },
    practicalExample: {
      scenarioTitle: "Conveyor Belt Drive Speed Reduction",
      industryContext: "An industrial packaging facility uses an electric motor operating at 1,750 RPM to drive a belt conveyor. The required conveyor head-shaft speed is approximately 580 RPM.",
      problemStatement: "Determine the output speed when a 20-tooth motor pinion drives a 60-tooth gear mounted directly on the conveyor drive roller.",
      engineeringSolution: "N2 = 1750 × (20 / 60) = 583.33 RPM. The 3:1 gear reduction drops the speed to 583.33 RPM while tripling the shaft torque available to move heavy box packages."
    },
    assumptions: [
      "Rigid gear teeth with negligible elastic bending deflection under normal operating load.",
      "Zero backlash loss and continuous tooth contact along the line of action.",
      "Incompressible lubrication film preventing metallic tooth contact."
    ],
    limitations: [
      "Does not account for efficiency losses from friction (typically 1-2% loss per gear mesh stage).",
      "Assumes parallel shafts for spur and helical gears; bevel or worm gear geometries require specific efficiency adjustments.",
      "Extreme dynamic shock loads may induce instantaneous phase lag due to torsional shaft compliance."
    ],
    commonMistakes: [
      "Inverting the gear ratio formula by placing driven teeth in the numerator instead of the denominator.",
      "Including idler gear teeth in overall gear ratio calculations for simple gear trains (idler gears change direction of rotation but do not alter speed ratio).",
      "Confusing gear pitch diameter ratio with module or diametral pitch numbers."
    ],
    bestPractices: [
      "Verify AGMA bending and contact stress ratings when selecting gear tooth counts and face widths.",
      "Maintain proper center distance tolerance to ensure correct backlash and prevent gear tooth binding.",
      "Ensure pitch line velocity stays within safe limits for the chosen lubrication method (splash vs forced oil spray)."
    ],
    faqs: [
      {
        question: "How do you calculate gear ratio from tooth counts?",
        answer: "Gear ratio is calculated by dividing the number of teeth on the driven gear by the number of teeth on the driver gear (Gear Ratio = Driven Teeth / Driver Teeth)."
      },
      {
        question: "Does gear ratio affect torque?",
        answer: "Yes. In an ideal gear drive (ignoring friction), output torque is multiplied by the inverse of the speed ratio. A 3:1 speed reduction increases output torque by a factor of 3."
      },
      {
        question: "Do idler gears change the overall gear ratio?",
        answer: "No. Idler gears located between the driver and final driven gear reverse the direction of rotation but do not affect the net speed or gear ratio of the train."
      },
      {
        question: "What is the difference between a speed reducer and a speed increaser?",
        answer: "A speed reducer has a smaller driver gear and a larger driven gear (ratio > 1:1), reducing speed and increasing torque. A speed increaser has a larger driver gear and smaller driven gear (ratio < 1:1), increasing speed and reducing torque."
      },
      {
        question: "Can gear ratio be determined from gear pitch diameters instead of teeth?",
        answer: "Yes. Because tooth pitch is identical for meshing gears, the ratio of pitch diameters (D2 / D1) is exactly equal to the ratio of tooth counts (T2 / T1)."
      },
      {
        question: "How does backlash affect gear ratio accuracy?",
        answer: "Backlash does not change the steady-state rotational speed ratio, but it introduces rotational lost motion during direction reversals."
      },
      {
        question: "Why are odd tooth counts or prime tooth counts used in gear design?",
        answer: "Non-integer ratios (hunting tooth ratios) distribute tooth wear evenly across all mating teeth, extending gear set operating lifespan."
      },
      {
        question: "What is gear mesh efficiency?",
        answer: "Precision spur and helical gear pairs generally operate at 97% to 99% mechanical efficiency per stage, with minor losses originating from sliding friction and oil churning."
      }
    ],
    standardsReferences: [
      { organization: "AGMA", code: "ANSI/AGMA 2001-D04", title: "Fundamental Rating Factors and Calculation Methods for Involute Spur and Helical Gear Teeth" },
      { organization: "ISO", code: "ISO 6336-1", title: "Calculation of load capacity of spur and helical gears" },
      { organization: "DIN", code: "DIN 3990", title: "Calculation of load capacity of spur and helical gears" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 2. SHAFT TORQUE & TORSIONAL STRESS CALCULATOR
  "shaft-torque": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Shaft Torque & Torsional Stress Calculator | Power to Torque",
    metaDescription: "Calculate transmitted shaft torque in Newton-meters from mechanical power in kilowatts and rotational speed in RPM.",
    canonicalUrl,
    introduction: {
      overview: "Rotating drive shafts in machinery transmit mechanical energy from power sources like electric motors or engines to driven loads. The rotational force exerted on the shaft is known as torque. Understanding the exact torque transmitted through a rotating shaft at a given operational speed is essential for sizing shaft diameters, selecting keyways and couplings, and preventing torsional shear fatigue failures.",
      applications: [
        "Sizing solid and hollow rotating drive shafts for industrial machinery.",
        "Selecting mechanical shaft couplings, keys, and spline connections.",
        "Evaluating torsional shear stress in motor output shafts.",
        "Designing automotive drive axles and industrial gearbox shafts."
      ],
      industries: [
        "Mechanical Drives & Transmission",
        "Automotive Powertrain Design",
        "Industrial Motor Manufacturing",
        "Marine Shafting Engineering"
      ]
    },
    quickAnswer: "Shaft torque is calculated from power and speed using the engineering formula Torque (N·m) = (Power in kW × 9549) / Speed in RPM. For a 15 kW motor rotating at 1,450 RPM, the transmitted shaft torque is 98.78 N·m.",
    governingEquation: {
      formula: "\\tau = \\frac{P_{\\text{kW}} \\times 9549}{N}",
      explanation: "Torque (τ in Newton-meters) is directly proportional to transmitted mechanical power (P in kW) and inversely proportional to rotational speed (N in RPM). The constant 9549 derives from converting kilowatts to Watts (× 1000) and RPM to radians per second (60 / 2π).",
      variables: [
        { symbol: "P_kW", label: "Transmitted Power", unit: "Kilowatts (kW)", description: "Mechanical power transmitted through the shaft." },
        { symbol: "N", label: "Shaft Speed", unit: "RPM", description: "Rotational speed of the shaft in revolutions per minute." },
        { symbol: "τ", label: "Shaft Torque", unit: "N·m", description: "Resulting rotational torque transmitted by the shaft." }
      ]
    },
    inputParameters: [
      {
        name: "powerKw",
        label: "Transmitted Power",
        unit: "Kilowatts (kW)",
        defaultValue: 15,
        explanation: "Continuous mechanical power rating transmitted by the rotating drive shaft."
      },
      {
        name: "speedRpm",
        label: "Shaft Speed",
        unit: "RPM",
        defaultValue: 1450,
        explanation: "Rotational operating speed of the shaft in revolutions per minute."
      }
    ],
    outputExplanation: {
      unit: "Newton-meters (N·m)",
      interpretation: "The calculated output is the continuous twisting moment exerted on the shaft cross-section.",
      designImpact: "Determines peak torsional shear stress, required minimum shaft diameter, keyway shear capacity, and shaft fatigue safety margins."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Transmitted Power", value: 15, unit: "kW" },
        { label: "Shaft Speed", value: 1450, unit: "RPM" }
      ],
      substitution: "Substitute P_kW = 15 kW and N = 1450 RPM into τ = (P_kW × 9549) / N:",
      intermediateSteps: [
        "1. Identify input power P = 15 kW and speed N = 1450 RPM.",
        "2. Multiply power by the metric constant 9549: 15 × 9549 = 143,235.",
        "3. Divide by rotational speed: 143,235 / 1450 = 98.7828 N·m."
      ],
      finalResult: "98.78",
      unit: "Newton-meters (N·m)"
    },
    practicalExample: {
      scenarioTitle: "Industrial Pump Motor Drive Shaft Sizing",
      industryContext: "An industrial centrifugal water pump is driven by a 15 kW 4-pole induction motor running at a rated full-load speed of 1,450 RPM.",
      problemStatement: "Calculate the continuous operating torque transmitted through the motor drive shaft to select a flexible shaft coupling.",
      engineeringSolution: "Torque τ = (15 × 9549) / 1450 = 98.78 N·m. Applying a standard 1.5 service factor for pump duty yields a design coupling rating requirement of at least 148.17 N·m."
    },
    assumptions: [
      "Shaft rotates at a constant steady-state speed without violent angular acceleration.",
      "Material operates strictly within its elastic torsional range below yield strength.",
      "Cross-section is solid circular and free of severe stress concentration notches."
    ],
    limitations: [
      "Formula computes mean continuous steady torque; transient motor starting torque can be 200-300% higher.",
      "Bending stresses from overhung loads (pulleys or sprockets) must be combined with torsional shear stress using ASME shaft design methods.",
      "Does not calculate torsional natural frequencies or resonant vibration critical speeds."
    ],
    commonMistakes: [
      "Entering power in Watts instead of Kilowatts when using the 9549 conversion constant.",
      "Neglecting motor starting current spikes that induce high peak transient torque.",
      "Sizing drive shafts based solely on torque while ignoring simultaneous bending loads from belt or gear drive tension."
    ],
    bestPractices: [
      "Apply appropriate service factors (1.25 to 2.0+) based on load shock characteristics.",
      "Calculate maximum torsional shear stress τ_max = (16 × T) / (π × d³) to verify material yield safety factors.",
      "Check shaft deflection and twist angle (typically limited to 1 degree per 20 diameters length)."
    ],
    faqs: [
      {
        question: "Where does the 9549 constant come from in the shaft torque equation?",
        answer: "The constant 9549 equals (1000 W/kW) × (60 s/min) / (2π rad/rev) ≈ 9549.296. It converts power in kW and speed in RPM into torque in N·m."
      },
      {
        question: "How does shaft speed affect torque for a fixed power level?",
        answer: "Torque is inversely proportional to speed. At a constant power output, doubling the shaft RPM reduces torque by 50%."
      },
      {
        question: "How do you calculate torsional shear stress in a solid round shaft?",
        answer: "Torsional shear stress is calculated using τ_shear = (16 × Torque) / (π × d³), where d is shaft diameter."
      },
      {
        question: "What is the difference between peak torque and continuous torque?",
        answer: "Continuous torque is the normal operating load the shaft handles indefinitely. Peak torque is the maximum short-term torque during motor startup or shock loading."
      },
      {
        question: "Why are hollow shafts often used instead of solid shafts?",
        answer: "In torsional loading, material near the outer surface carries the highest stress while material at the center carries almost none. Hollow shafts reduce weight while retaining high torsional stiffness."
      },
      {
        question: "How do keyways affect shaft torque capacity?",
        answer: "Keyways introduce stress concentration and reduce net shaft cross-sectional area, typically reducing allowable fatigue strength by 25% to 40%."
      },
      {
        question: "Can this formula be used for AC electric motors?",
        answer: "Yes, provided you use the motor's actual full-load shaft speed (e.g. 1450 or 1750 RPM) rather than synchronous speed (1500 or 1800 RPM)."
      },
      {
        question: "What is a shaft service factor?",
        answer: "A service factor is a multiplier applied to nominal torque (e.g. 1.5× for uniform load, 2.5× for heavy impact) to ensure safe operation under real-world conditions."
      }
    ],
    standardsReferences: [
      { organization: "ASME", code: "ASME B106.1M", title: "Design of Transmission Shafting" },
      { organization: "ISO", code: "ISO 1940-1", title: "Mechanical vibration — Balance quality requirements for rotors" },
      { organization: "DIN", code: "DIN 743", title: "Calculation of load capacity of shafts and axles" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 3. BELT LENGTH CALCULATOR
  "belt-length": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Belt Length Calculator | V-Belt & Flat Pulley Pitch Length",
    metaDescription: "Calculate open-loop V-belt or flat belt pitch length between two pulley centers using pulley pitch diameters and center distance.",
    canonicalUrl,
    introduction: {
      overview: "Belt drives are widely used in mechanical power transmission to connect two rotating shafts using pulleys. Determining the correct belt pitch length is a fundamental step when designing flat belt, V-belt, or synchronous timing belt drives. An accurately calculated belt length ensures proper tensioning, prevents belt slippage or excessive bearing radial loads, and facilitates standard commercial belt procurement.",
      applications: [
        "Sizing replacement V-belts for automotive accessories and HVAC blowers.",
        "Designing two-pulley open drive systems for agricultural machinery.",
        "Calculating timing belt pitch lengths for 3D printers and automation equipment.",
        "Optimizing pulley center distances to fit standard manufactured belt sizes."
      ],
      industries: [
        "HVAC & Industrial Fan Manufacturing",
        "Automotive Engine Accessories",
        "Agricultural Machinery",
        "General Industrial Power Transmission"
      ]
    },
    quickAnswer: "The open belt pitch length L is computed using L = 2C + 1.57(D + d) + (D - d)² / (4C), where C is center distance, D is large pulley diameter, and d is small pulley diameter. For a center distance of 1.2 m, large pulley diameter of 0.3 m, and small pulley diameter of 0.1 m, the required belt pitch length is approximately 3.036 m.",
    governingEquation: {
      formula: "L = 2C + 1.57(D + d) + \\frac{(D - d)^2}{4C}",
      explanation: "This formula represents the standard engineering approximation for open-loop two-pulley belt drives. It sums two straight span segments (approx. 2C), the arc contact wrapping around both pulleys (approx. π/2 × [D + d] ≈ 1.57[D + d]), and a geometric correction term for diameter mismatch.",
      variables: [
        { symbol: "C", label: "Center Distance", unit: "Meters (m)", description: "Distance between the centers of the two pulley shafts." },
        { symbol: "D", label: "Large Pulley Diameter", unit: "Meters (m)", description: "Pitch diameter of the larger pulley." },
        { symbol: "d", label: "Small Pulley Diameter", unit: "Meters (m)", description: "Pitch diameter of the smaller pulley." },
        { symbol: "L", label: "Belt Pitch Length", unit: "Meters (m)", description: "Total pitch circumference length of the belt." }
      ]
    },
    inputParameters: [
      {
        name: "centerDist",
        label: "Center Distance (C)",
        unit: "Meters (m)",
        defaultValue: 1.2,
        explanation: "Physical distance between the centers of the driver and driven pulley shafts."
      },
      {
        name: "largeDia",
        label: "Large Pulley Dia (D)",
        unit: "Meters (m)",
        defaultValue: 0.3,
        explanation: "Pitch diameter of the larger drive or driven pulley."
      },
      {
        name: "smallDia",
        label: "Small Pulley Dia (d)",
        unit: "Meters (m)",
        defaultValue: 0.1,
        explanation: "Pitch diameter of the smaller drive or driven pulley."
      }
    ],
    outputExplanation: {
      unit: "Meters (m)",
      interpretation: "Calculated total belt pitch length along the neutral pitch line of the belt.",
      designImpact: "Used to select standard commercial belt part numbers and establish take-up tension adjustment ranges."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Center Distance (C)", value: 1.2, unit: "m" },
        { label: "Large Pulley Dia (D)", value: 0.3, unit: "m" },
        { label: "Small Pulley Dia (d)", value: 0.1, unit: "m" }
      ],
      substitution: "Substitute C = 1.2 m, D = 0.3 m, and d = 0.1 m into L = 2C + 1.57(D + d) + (D - d)² / (4C):",
      intermediateSteps: [
        "1. Calculate straight term: 2 × 1.2 = 2.4 m.",
        "2. Calculate arc wrapping term: 1.57 × (0.3 + 0.1) = 1.57 × 0.4 = 0.628 m.",
        "3. Calculate correction term: (0.3 - 0.1)² / (4 × 1.2) = 0.04 / 4.8 = 0.008333 m.",
        "4. Sum all components: 2.4 + 0.628 + 0.008333 = 3.03633 m."
      ],
      finalResult: "3.036",
      unit: "Meters (m)"
    },
    practicalExample: {
      scenarioTitle: "HVAC Air Handling Blower Pulley Drive Setup",
      industryContext: "An HVAC technician is setting up a motor drive for an air handling blower unit with a 1.2 m shaft center distance, a 300 mm motor pulley, and a 100 mm blower pulley.",
      problemStatement: "Find the required V-belt pitch length to order the correct standard belt size.",
      engineeringSolution: "L = 2(1.2) + 1.57(0.3 + 0.1) + (0.3 - 0.1)² / (4 × 1.2) = 3.036 m (3,036 mm). The technician selects the nearest standard commercial belt and adjusts the motor slide base center distance accordingly."
    },
    assumptions: [
      "Open belt configuration with non-crossed belt path.",
      "Pulley diameters are measured at the neutral belt pitch line rather than outside diameter.",
      "Belt operates under proper installed tension without excessive sag."
    ],
    limitations: [
      "This formula is an engineering approximation; for exact trigonometric pitch length use L = 2C cos(θ) + π(D+d)/2 + θ(D-d).",
      "Does not apply directly to crossed-belt arrangements or multi-pulley serpentine drives.",
      "Does not account for belt stretch under full load operating tension."
    ],
    commonMistakes: [
      "Using pulley outside diameter (OD) instead of pitch diameter (PD), which underestimates belt pitch length.",
      "Forgetting to allow center distance adjustment range for belt installation and future stretch take-up.",
      "Mixing units (e.g. entering center distance in meters and pulley diameters in millimeters)."
    ],
    bestPractices: [
      "Always measure pulleys at the pitch line specified by the belt manufacturer (e.g. RMA or ISO standards).",
      "Provide a center distance take-up range of at least +1.5% to -3% of belt length for tension adjustment and installation ease.",
      "Verify the angle of contact on the smaller pulley is at least 120° to prevent belt slip."
    ],
    faqs: [
      {
        question: "What is the difference between pitch length and outside length for V-belts?",
        answer: "Pitch length is measured along the neutral tension line inside the belt cross-section, whereas outside length is measured around the outer surface. V-belts are specified by pitch length."
      },
      {
        question: "How do you calculate small pulley arc of contact?",
        answer: "Arc of contact θ (in degrees) is calculated approximately by θ ≈ 180° - 57.3 × (D - d) / C."
      },
      {
        question: "What happens if pulley center distance is too short?",
        answer: "A short center distance reduces the arc of contact on the small pulley, increasing the risk of belt slippage and reducing drive power capacity."
      },
      {
        question: "Can this formula be used for timing belts?",
        answer: "Yes, provided pitch diameters are used. For timing belts, the belt length must also equal an exact integer multiple of the tooth pitch."
      },
      {
        question: "What is the recommended center distance for a two-pulley belt drive?",
        answer: "A standard rule of thumb is that center distance C should be greater than the large pulley diameter D and less than 3 × (D + d)."
      },
      {
        question: "How much belt stretch should be anticipated?",
        answer: "Standard V-belts stretch about 0.5% to 1.5% during initial run-in, requiring tension re-checking after the first 24 hours."
      },
      {
        question: "What is a serpentine belt drive?",
        answer: "A serpentine drive uses a single continuous multi-ribbed belt to drive several accessories across multiple pulleys, requiring individual geometric segment calculations."
      },
      {
        question: "Why is pitch diameter different from outside diameter?",
        answer: "The pitch line is the plane inside the belt that maintains a constant length during bending. Pulley pitch diameter aligns with this neutral axis."
      }
    ],
    standardsReferences: [
      { organization: "ARPM/RMA", code: "RMA IP-20", title: "Specifications for Drives Using Classical V-Belts and Sheaves" },
      { organization: "ISO", code: "ISO 4184", title: "Belt drives — Classical and narrow V-belts — Lengths in datum system" },
      { organization: "DIN", code: "DIN 2215", title: "Endless V-belts — Dimensions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 4. BEARING L10 RATING LIFE CALCULATOR
  "bearing-life": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Bearing L10 Rating Life Calculator | ISO 281 Fatigue Life",
    metaDescription: "Calculate ISO 281 L10 bearing fatigue life rating in millions of revolutions using dynamic load capacity C and equivalent dynamic load P.",
    canonicalUrl,
    introduction: {
      overview: "The L10 rating life defines the basic fatigue lifespan of a group of identical rolling element bearings operating under uniform radial or axial load conditions. Defined by ISO 281 and ABMA standards, the L10 life represents the number of operating revolutions that 90% of a population of bearings will achieve or exceed before the first microscopic evidence of flaking or rolling-contact fatigue spalling occurs.",
      applications: [
        "Evaluating expected operational lifespan for deep groove ball bearings and roller bearings.",
        "Sizing electric motor end-shield bearings and pillow block bearing housings.",
        "Performing preventative maintenance scheduling for industrial fan shafts and gearboxes.",
        "Comparing bearing durability under varying radial and axial thrust loads."
      ],
      industries: [
        "Industrial Machinery & Equipment",
        "Electric Motor Manufacturing",
        "Automotive Wheel & Transmission Design",
        "Wind Turbine Shaft Systems"
      ]
    },
    quickAnswer: "Bearing basic rating life L10 in millions of revolutions is computed using L10 = (C / P)³, where C is basic dynamic load rating in kN and P is equivalent dynamic bearing load in kN. For a bearing with C = 25 kN operating under an equivalent load P = 5 kN, the L10 rating life is 125 million revolutions.",
    governingEquation: {
      formula: "L_{10} = \\left(\\frac{C}{P}\\right)^p",
      explanation: "Basic fatigue life L10 (in millions of revolutions) equals the dynamic load rating C divided by equivalent load P, raised to exponent p (p = 3 for ball bearings, p = 10/3 ≈ 3.333 for roller bearings).",
      variables: [
        { symbol: "C", label: "Dynamic Load Rating", unit: "kN", description: "Constant radial load a bearing can endure for 1 million revolutions (ISO 281)." },
        { symbol: "P", label: "Equivalent Dynamic Load", unit: "kN", description: "Combined radial and axial thrust load acting on the bearing." },
        { symbol: "p", label: "Life Exponent", unit: "Dimensionless", description: "Exponent value (3 for ball bearings, 3.333 for roller bearings)." },
        { symbol: "L10", label: "Rating Life", unit: "Millions Revs", description: "Fatigue life exceeded by 90% of bearings under identical conditions." }
      ]
    },
    inputParameters: [
      {
        name: "dynCapacity",
        label: "Dynamic Load Rating (C)",
        unit: "kilonewtons (kN)",
        defaultValue: 25,
        explanation: "Manufacturer catalog dynamic load rating C in kilonewtons."
      },
      {
        name: "equivLoad",
        label: "Equivalent Load (P)",
        unit: "kilonewtons (kN)",
        defaultValue: 5,
        explanation: "Net equivalent dynamic radial load P applied to the bearing in kilonewtons."
      }
    ],
    outputExplanation: {
      unit: "Millions of Revolutions",
      interpretation: "Total operating revolutions before 10% of bearings show subsurface rolling contact fatigue.",
      designImpact: "Used to convert revolutions into operating hours (L10h = [10^6 × L10] / [60 × RPM]) to establish maintenance replacement intervals."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Dynamic Load Rating (C)", value: 25, unit: "kN" },
        { label: "Equivalent Load (P)", value: 5, unit: "kN" }
      ],
      substitution: "Substitute C = 25 kN and P = 5 kN into L10 = (C / P)³:",
      intermediateSteps: [
        "1. Identify catalog load rating C = 25 kN and applied equivalent load P = 5 kN.",
        "2. Compute the load ratio C / P: 25 / 5 = 5.0.",
        "3. Cube the ratio for ball bearings (p = 3): 5.0³ = 125.0.",
        "4. The basic L10 fatigue rating life is 125 million revolutions."
      ],
      finalResult: "125",
      unit: "Revolutions (Millions)"
    },
    practicalExample: {
      scenarioTitle: "Electric Motor Shaft Bearing Lifespan Analysis",
      industryContext: "An electric motor running at 1,800 RPM uses a 6206 deep groove ball bearing with C = 25 kN. In service, belt drive tension creates an equivalent dynamic load P = 5 kN.",
      problemStatement: "Determine the expected L10 life in operating hours.",
      engineeringSolution: "L10 = (25 / 5)³ = 125 million revolutions. Operating hours L10h = (125 × 10⁶) / (60 min/hr × 1800 RPM) = 1,157.4 / 18 = 1,157,407 / 18 = 64,300 hours (approx. 7.3 years of continuous 24/7 service)."
    },
    assumptions: [
      "Proper ISO VG oil or grease lubrication forming a complete elastohydrodynamic oil film.",
      "Clean operating environment free of abrasive solid contamination or moisture ingress.",
      "Rigid housing alignment preventing angular misalignment beyond 2-10 arcminutes."
    ],
    limitations: [
      "Does not account for static overload permanent deformation (C0 static rating limits).",
      "Modified L10m life (ISO 281 Annex A) requires adjusting for contamination factors (e_c) and viscosity ratios (κ).",
      "Assumes operating temperature remains below lubricant thermal degradation limits."
    ],
    commonMistakes: [
      "Using static load rating C0 instead of dynamic load rating C in the L10 equation.",
      "Forgetting that roller bearings use p = 10/3 (3.333) rather than p = 3.",
      "Ignoring axial thrust loads when computing equivalent dynamic load P = X×Fr + Y×Fa."
    ],
    bestPractices: [
      "Calculate equivalent load P using ISO 281 radial and axial factors X and Y.",
      "Target an L10h life of at least 20,000 to 50,000 hours for industrial continuous duty machinery.",
      "Ensure minimum load requirements (typically 1-2% of C) are met to prevent roller skidding."
    ],
    faqs: [
      {
        question: "What does L10 life mean in bearing selection?",
        answer: "L10 life is the rating life associated with 90% reliability (meaning 90% of bearings survive this duration without fatigue flaking)."
      },
      {
        question: "How do you convert L10 revolutions into operating hours?",
        answer: "Operating hours L10h = (L10 in revolutions × 1,000,000) / (60 × RPM)."
      },
      {
        question: "Why is the load exponent 3 for ball bearings but 3.333 for roller bearings?",
        answer: "Ball bearings feature point contact (area scales as load^2/3), yielding p = 3. Roller bearings feature line contact (area scales linearly), yielding p = 10/3 ≈ 3.333."
      },
      {
        question: "How does doubling the load on a ball bearing affect its life?",
        answer: "Because life is inversely proportional to load cubed (1 / 2³ = 1/8), doubling the equivalent load reduces bearing life to 12.5% (1/8th) of its original value."
      },
      {
        question: "What is L50 or mean life?",
        answer: "L50 life is the median life achieved by 50% of bearings, typically about 5 times the L10 life value."
      },
      {
        question: "What is ISO 281 modified rating life (L10m)?",
        answer: "L10m modifies basic L10 life using a system adjustment factor a_ISO to account for fatigue load limits, oil contamination levels, and lubricant film thickness."
      },
      {
        question: "What causes premature bearing failure before L10 life is reached?",
        answer: "Contamination, inadequate lubrication, misalignment, excessive installation preloads, and stray electrical currents are the leading causes of early bearing failure."
      },
      {
        question: "What is the fatigue load limit Cu?",
        answer: "Cu is the load below which fatigue spalling will not occur under ideal ISO clean lubrication conditions."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 281", title: "Rolling bearings — Dynamic load ratings and rating life" },
      { organization: "ABMA", code: "ANSI/ABMA Std 9", title: "Load Ratings and Fatigue Life for Ball Bearings" },
      { organization: "DIN", code: "DIN ISO 281", title: "Rolling bearings — Dynamic load ratings and rating life" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 5. PULLEY SPEED RATIO CALCULATOR
  "pulley-speed-ratio": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Pulley Speed Ratio Calculator | Driver & Driven RPM",
    metaDescription: "Calculate output pulley RPM and speed reduction ratio in belt drive systems using driver diameter, driven diameter, and driver speed.",
    canonicalUrl,
    introduction: {
      overview: "In belt-driven power transmission systems, the relative rotational speeds of the driver and driven shafts depend on their effective pulley pitch diameters. Because a continuous drive belt travels at a uniform linear surface speed across both pulleys, the angular speed of each pulley is inversely proportional to its diameter. This simple yet critical relationship allows engineers to speed up or slow down driven machinery like fans, blowers, crushers, and machine tool spindles.",
      applications: [
        "Sizing replacement sheaves and pulleys for industrial air handlers and ventilation fans.",
        "Matching motor speed to desired pump impeller rotational velocity.",
        "Determining driven shaft RPM for agricultural machinery belt drives.",
        "Configuring step-pulley speed changers on drill presses and lathes."
      ],
      industries: [
        "HVAC & Building Services",
        "Agricultural Machinery",
        "Industrial Air Compressors",
        "Manufacturing Equipment"
      ]
    },
    quickAnswer: "The driven pulley output speed is computed using N2 = N1 × (D1 / D2), where N1 is driver RPM, D1 is driver pulley diameter, and D2 is driven pulley diameter. For a 0.1 m driver pulley running at 1,750 RPM driving a 0.2 m driven pulley, the driven shaft speed is exactly 875 RPM.",
    governingEquation: {
      formula: "N_2 = N_1 \\times \\left(\\frac{D_1}{D_2}\\right)",
      explanation: "Equal belt linear pitch speed v = π × D1 × N1 = π × D2 × N2 dictates that output RPM N2 equals input RPM N1 multiplied by the diameter ratio (D1 / D2). Speed ratio i is defined as D2 / D1.",
      variables: [
        { symbol: "N1", label: "Driver Speed", unit: "RPM", description: "Rotational speed of the driving motor shaft." },
        { symbol: "D1", label: "Driver Pulley Diameter", unit: "Meters (m)", description: "Pitch diameter of the driving pulley." },
        { symbol: "D2", label: "Driven Pulley Diameter", unit: "Meters (m)", description: "Pitch diameter of the driven shaft pulley." },
        { symbol: "N2", label: "Driven Speed", unit: "RPM", description: "Calculated output speed of the driven pulley shaft." }
      ]
    },
    inputParameters: [
      {
        name: "driverDiameter",
        label: "Driver Pulley Diameter (D1)",
        unit: "Meters (m)",
        defaultValue: 0.1,
        explanation: "Pitch diameter of the motor driver pulley."
      },
      {
        name: "drivenDiameter",
        label: "Driven Pulley Diameter (D2)",
        unit: "Meters (m)",
        defaultValue: 0.2,
        explanation: "Pitch diameter of the driven machine sheave."
      },
      {
        name: "driverRpm",
        label: "Driver Speed (N1)",
        unit: "RPM",
        defaultValue: 1750,
        explanation: "Input rotational speed supplied by the electric motor."
      }
    ],
    outputExplanation: {
      unit: "RPM",
      interpretation: "The computed output speed of the driven pulley shaft under zero belt-slip conditions.",
      designImpact: "Determines process equipment operating velocity, fan airflow rate (CFM), pump head pressure, and drive belt centrifugal tension."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Driver Pulley Dia (D1)", value: 0.1, unit: "m" },
        { label: "Driven Pulley Dia (D2)", value: 0.2, unit: "m" },
        { label: "Driver Speed (N1)", value: 1750, unit: "RPM" }
      ],
      substitution: "Substitute N1 = 1750 RPM, D1 = 0.1 m, and D2 = 0.2 m into N2 = N1 × (D1 / D2):",
      intermediateSteps: [
        "1. Identify driver diameter D1 = 0.1 m, driven diameter D2 = 0.2 m, and driver speed N1 = 1750 RPM.",
        "2. Compute the pulley diameter ratio: D1 / D2 = 0.1 / 0.2 = 0.5.",
        "3. Multiply driver speed by diameter ratio: 1750 × 0.5 = 875 RPM."
      ],
      finalResult: "875",
      unit: "RPM"
    },
    practicalExample: {
      scenarioTitle: "HVAC Supply Fan Speed Tuning",
      industryContext: "An air conditioning system supply fan requires a shaft speed of 875 RPM. The driving motor runs at 1,750 RPM with a 100 mm (0.1 m) motor sheave.",
      problemStatement: "Determine the required driven fan pulley pitch diameter.",
      engineeringSolution: "Rearranging N2 = N1 × (D1 / D2) yields D2 = D1 × (N1 / N2) = 0.1 m × (1750 / 875) = 0.2 m (200 mm). A 200 mm pitch diameter fan sheave provides the required 2:1 speed reduction."
    },
    assumptions: [
      "Zero belt creep or slippage between belt and pulley grooves.",
      "Pulley diameters are measured at the neutral belt pitch line.",
      "Shafts are parallel and aligned in the same rotational plane."
    ],
    limitations: [
      "Frictional V-belts typically exhibit 1% to 2% slip under full load; synchronous timing belts exhibit 0% slip.",
      "High linear belt speeds (> 30 m/s) generate centrifugal forces that reduce effective belt contact pressure.",
      "Does not account for belt thick bending losses on small pulleys."
    ],
    commonMistakes: [
      "Using pulley outside diameter (OD) instead of pitch diameter (PD).",
      "Forgetting that larger driven pulleys decrease output speed while smaller driven pulleys increase output speed.",
      "Exceeding maximum safe rim speed for cast iron sheaves (typically 33 m/s or 6,500 ft/min)."
    ],
    bestPractices: [
      "Always use pitch diameters provided in manufacturer sheave catalogs.",
      "Ensure minimum pulley diameter recommendations for the selected belt cross-section are met to avoid flex fatigue.",
      "Check laser pulley alignment (parallel offset and angular tilt) to prevent belt edge wear."
    ],
    faqs: [
      {
        question: "How do you calculate pulley ratio?",
        answer: "Pulley ratio is calculated by dividing driven pulley pitch diameter by driver pulley pitch diameter (Ratio = D2 / D1)."
      },
      {
        question: "How does pulley size affect output speed?",
        answer: "Increasing driven pulley diameter decreases output RPM. Decreasing driven pulley diameter increases output RPM."
      },
      {
        question: "What is belt creep?",
        answer: "Belt creep is minor localized sliding occurring as the elastic belt transitions between high-tension and low-tension sides of the pulley, causing a ~0.5-1% speed loss."
      },
      {
        question: "How do you calculate linear belt speed from pulley RPM?",
        answer: "Linear belt speed v = (π × D × N) / 60, where D is pulley diameter in meters and N is speed in RPM."
      },
      {
        question: "Why should small pulley diameters be limited?",
        answer: "Bending a belt around a pulley below its minimum recommended pitch diameter creates high internal bending stress and generates excessive heat, drastically shortening belt life."
      },
      {
        question: "Can this calculator be used for flat belts, V-belts, and timing belts?",
        answer: "Yes, the geometric relationship N1 × D1 = N2 × D2 applies to all continuous flexible drive media when pitch diameters are used."
      },
      {
        question: "What is a variable pitch sheave?",
        answer: "A variable pitch sheave allows manual or automatic adjustment of pulley flange spacing, effectively changing pitch diameter to adjust driven speed."
      },
      {
        question: "Does pulley ratio affect shaft torque?",
        answer: "Yes. Output torque equals input torque multiplied by the speed ratio (D2 / D1), neglecting friction losses."
      }
    ],
    standardsReferences: [
      { organization: "ARPM", code: "ARPM IP-20", title: "Classical V-Belts and Sheaves Standard" },
      { organization: "ISO", code: "ISO 1081", title: "Belt drives — V-belts and V-ribbed belts — Terminology" },
      { organization: "DIN", code: "DIN 2211", title: "Grooved pulleys for narrow V-belts" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 6. MECHANICAL POWER CALCULATOR
  "mechanical-power-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Mechanical Power Calculator | Torque & Speed to Watts",
    metaDescription: "Calculate mechanical shaft power in Watts or kilowatts from rotational torque in N·m and rotational speed in RPM.",
    canonicalUrl,
    introduction: {
      overview: "Mechanical power is the rate at which mechanical work is performed by a rotating shaft or engine. In rotating mechanical systems, power is the product of shaft torque and angular velocity. Calculating mechanical power is fundamental across mechanical engineering for sizing electric motors, internal combustion engines, gearboxes, and hydraulic drives, as well as evaluating energy transfer rates in rotating machinery.",
      applications: [
        "Determining required electric motor power output ratings for industrial machinery.",
        "Evaluating brake horsepower (BHP) during dynamometer testing.",
        "Calculating mechanical energy transfer in turbomachinery and pumps.",
        "Assessing power transmission capability in mechanical gearboxes and drives."
      ],
      industries: [
        "Industrial Electric Motor Drives",
        "Automotive Powertrain & Engine Testing",
        "Heavy Equipment & Hydraulics",
        "Power Generation & Turbines"
      ]
    },
    quickAnswer: "Mechanical power P in Watts is calculated using P = (2 × π × N × τ) / 60, where N is speed in RPM and τ is torque in N·m. For a shaft delivering 100 N·m of torque at 1,500 RPM, the mechanical power output is 15,707.96 Watts (15.71 kW).",
    governingEquation: {
      formula: "P = \\frac{2\\pi \\times N \\times \\tau}{60}",
      explanation: "Mechanical power P (in Watts) equals torque τ (in N·m) multiplied by angular velocity ω (in rad/s). Because ω = (2π × N) / 60 rad/s, substituting angular velocity yields P = (2π × N × τ) / 60.",
      variables: [
        { symbol: "τ", label: "Torque", unit: "Newton-meters (N·m)", description: "Rotational twisting torque exerted on the shaft." },
        { symbol: "N", label: "Rotational Speed", unit: "RPM", description: "Shaft rotational speed in revolutions per minute." },
        { symbol: "ω", label: "Angular Velocity", unit: "rad/s", description: "Rotational speed expressed in radians per second (2πN / 60)." },
        { symbol: "P", label: "Mechanical Power", unit: "Watts (W)", description: "Resulting rate of mechanical work output in Joules per second." }
      ]
    },
    inputParameters: [
      {
        name: "torque",
        label: "Torque (τ)",
        unit: "Newton-meters (N·m)",
        defaultValue: 100,
        explanation: "Continuous rotational torque transmitted by the shaft."
      },
      {
        name: "rpm",
        label: "Rotational Speed (N)",
        unit: "RPM",
        defaultValue: 1500,
        explanation: "Rotational speed of the shaft in revolutions per minute."
      }
    ],
    outputExplanation: {
      unit: "Watts (W)",
      interpretation: "The exact rate of mechanical work performed by the rotating shaft in Joules/second.",
      designImpact: "Used to specify motor power ratings (kW or HP), thermal cooling capacity requirements, and electrical power consumption."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Torque (τ)", value: 100, unit: "N·m" },
        { label: "Rotational Speed (N)", value: 1500, unit: "RPM" }
      ],
      substitution: "Substitute τ = 100 N·m and N = 1500 RPM into P = (2π × N × τ) / 60:",
      intermediateSteps: [
        "1. Convert RPM to angular velocity ω: ω = (2 × π × 1500) / 60 = 157.0796 rad/s.",
        "2. Multiply angular velocity by shaft torque: 157.0796 rad/s × 100 N·m = 15,707.96 W.",
        "3. Convert to kilowatts (kW): 15,707.96 / 1000 = 15.708 kW."
      ],
      finalResult: "15707.96",
      unit: "Watts (W)"
    },
    practicalExample: {
      scenarioTitle: "Electric Motor Mechanical Power Output Measurement",
      industryContext: "An engineer tests a 4-pole industrial induction motor on a dynamometer. At full load, the motor maintains 1,500 RPM while producing 100 N·m of torque.",
      problemStatement: "Calculate the mechanical shaft power output in kW to verify compliance with motor nameplate specifications.",
      engineeringSolution: "P = (2π × 1500 × 100) / 60 = 15,707.96 W = 15.71 kW. Comparing this to electrical input power allows calculating total motor efficiency."
    },
    assumptions: [
      "Shaft rotates at a constant uniform speed under steady-state mechanical loading.",
      "Torque measurement represents net shaft torque excluding parasitic bearing friction.",
      "Torsional acceleration is zero (dω/dt = 0)."
    ],
    limitations: [
      "Calculates pure mechanical output power; electrical input power depends on motor efficiency (P_elec = P_mech / η).",
      "Transient peak power during acceleration requires accounting for rotational inertia torque (τ_acc = I × α).",
      "Does not calculate fluid coupling or slip-induced heat generation."
    ],
    commonMistakes: [
      "Forgetting to divide by 60 when converting RPM to rad/s.",
      "Confusing mechanical power output (kW) with electrical power consumed (kVA or kW at power factor).",
      "Mixing imperial torque units (lb-ft) directly into metric Watt equations without prior unit conversion."
    ],
    bestPractices: [
      "Use SI base units (N·m and rad/s) for straightforward conversion directly to Watts.",
      "Account for drivetrain mechanical efficiency (gearboxes typically lose 1-3% per stage).",
      "Verify motor nameplate service factor (SF) when designing for peak overload conditions."
    ],
    faqs: [
      {
        question: "How do you convert mechanical power in Watts to Horsepower?",
        answer: "Divide mechanical power in Watts by 745.7 to convert to mechanical horsepower (1 HP = 745.7 W = 0.7457 kW)."
      },
      {
        question: "What is the relationship between power, torque, and RPM?",
        answer: "Power is directly proportional to both torque and rotational speed. Doubling either speed or torque doubles the mechanical power output."
      },
      {
        question: "What is angular velocity in rad/s?",
        answer: "Angular velocity (ω) measures rotational rate in radians per second, calculated as ω = (2π × RPM) / 60."
      },
      {
        question: "Why does an electric motor produce constant torque below base speed and constant power above base speed?",
        answer: "Below base speed, current limits define constant max torque. Above base speed (field weakening region), voltage limits cap power while torque drops inversely with speed."
      },
      {
        question: "What is the difference between brake horsepower and shaft horsepower?",
        answer: "Brake horsepower (BHP) is measured at the engine crankshaft using a brake dynamometer, whereas shaft horsepower (SHP) is measured downstream at the output shaft after minor drive losses."
      },
      {
        question: "How does mechanical efficiency affect power calculations?",
        answer: "Useful output power equals input power multiplied by mechanical efficiency (P_out = P_in × η)."
      },
      {
        question: "Can this formula be used for linear motion?",
        answer: "For linear motion, mechanical power equals force multiplied by velocity (P = F × v)."
      },
      {
        question: "What unit is 1 Watt equal to in physical terms?",
        answer: "One Watt equals 1 Joule per second (1 W = 1 J/s = 1 N·m/s)."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 60034-1", title: "Rotating electrical machines — Rating and performance" },
      { organization: "NEMA", code: "NEMA MG 1", title: "Motors and Generators Standard" },
      { organization: "ISO", code: "ISO 80000-4", title: "Quantities and units — Mechanics" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 7. ROTATIONAL KINETIC ENERGY CALCULATOR
  "rotational-kinetic-energy": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Rotational Kinetic Energy Calculator | E_rot = ½ I ω²",
    metaDescription: "Calculate stored rotational kinetic energy in Joules from moment of inertia I in kg·m² and angular velocity ω in rad/s.",
    canonicalUrl,
    introduction: {
      overview: "Rotational kinetic energy is the kinetic energy stored in a rigid body due to its rotation about an axis. Analogous to linear kinetic energy (½ m v²), rotational kinetic energy depends on the body's rotational inertia (moment of inertia I) and the square of its angular velocity (ω²). Quantifying stored rotational energy is essential when evaluating flywheels, rotating machinery rotors, engine crankshafts, centrifuges, and kinetic energy recovery systems (KERS).",
      applications: [
        "Determining kinetic energy stored in industrial flywheels and punch press flywheels.",
        "Calculating rotational energy in high-speed centrifuges and turbine rotors.",
        "Evaluating vehicle brake energy dissipation requirements for spinning wheels and drivelines.",
        "Analyzing energy storage in automotive kinetic energy recovery systems (KERS)."
      ],
      industries: [
        "Energy Storage & Flywheel Systems",
        "Automotive Racing & KERS Engineering",
        "Aerospace & Satellite Reaction Wheels",
        "Heavy Machinery & Metal Stamping"
      ]
    },
    quickAnswer: "Rotational kinetic energy E_rot in Joules is calculated using E_rot = ½ × I × ω², where I is moment of inertia in kg·m² and ω is angular velocity in rad/s. For a rotor with a moment of inertia of 2.5 kg·m² spinning at 50 rad/s (approx. 477 RPM), the stored rotational energy is 3,125 Joules (3.125 kJ).",
    governingEquation: {
      formula: "E_{\\text{rot}} = \\frac{1}{2} I \\omega^2",
      explanation: "Rotational kinetic energy E_rot (in Joules) is directly proportional to moment of inertia I (in kg·m²) and proportional to the square of angular velocity ω (in rad/s).",
      variables: [
        { symbol: "I", label: "Moment of Inertia", unit: "kg·m²", description: "Mass distribution resistance to angular acceleration about the axis." },
        { symbol: "ω", label: "Angular Velocity", unit: "rad/s", description: "Rotational speed expressed in radians per second." },
        { symbol: "E_rot", label: "Rotational Kinetic Energy", unit: "Joules (J)", description: "Stored mechanical energy in Joules (1 J = 1 N·m = 1 kg·m²/s²)." }
      ]
    },
    inputParameters: [
      {
        name: "inertia",
        label: "Moment of Inertia (I)",
        unit: "kg·m²",
        defaultValue: 2.5,
        explanation: "Mass moment of inertia of the rotating body around its spin axis."
      },
      {
        name: "omega",
        label: "Angular Velocity (ω)",
        unit: "rad/s",
        defaultValue: 50,
        explanation: "Rotational speed in radians per second (to convert from RPM, multiply RPM by π/30 ≈ 0.10472)."
      }
    ],
    outputExplanation: {
      unit: "Joules (J)",
      interpretation: "The total mechanical kinetic energy stored in the rotating body.",
      designImpact: "Determines flywheel energy storage capacity, machine spin-up time, braking system thermal absorption limits, and containment safety guarding."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Moment of Inertia (I)", value: 2.5, unit: "kg·m²" },
        { label: "Angular Velocity (ω)", value: 50, unit: "rad/s" }
      ],
      substitution: "Substitute I = 2.5 kg·m² and ω = 50 rad/s into E_rot = ½ × I × ω²:",
      intermediateSteps: [
        "1. Identify moment of inertia I = 2.5 kg·m² and angular velocity ω = 50 rad/s.",
        "2. Square the angular velocity: 50² = 2,500 rad²/s².",
        "3. Multiply by moment of inertia: 2.5 × 2,500 = 6,250.",
        "4. Multiply by 0.5: 0.5 × 6,250 = 3,125 Joules (3.125 kJ)."
      ],
      finalResult: "3125",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Punch Press Flywheel Kinetic Energy Calculation",
      industryContext: "A metal stamping punch press uses a steel flywheel with a moment of inertia I = 2.5 kg·m² operating at an angular speed ω = 50 rad/s (~477 RPM).",
      problemStatement: "Calculate the energy available in the flywheel to perform a metal shearing stroke.",
      engineeringSolution: "E_rot = 0.5 × 2.5 × 50² = 3,125 Joules. The motor must replenish this 3.125 kJ during the non-stamping portion of the press cycle to maintain continuous operating speed."
    },
    assumptions: [
      "Rigid body rotating around a fixed principal central axis of symmetry.",
      "Uniform structural density free from internal voids or mass imbalance.",
      "Constant moment of inertia during rotation without dynamic structural deformation."
    ],
    limitations: [
      "Applies to pure rotation about a fixed axis; rolling bodies (like vehicle wheels) require adding linear kinetic energy (½ m v² + ½ I ω²).",
      "High angular speeds generate hoop stress (σ = ρ × v²) that can cause catastrophic rotor burst before mechanical limits are reached.",
      "Does not calculate windage drag or bearing friction power losses."
    ],
    commonMistakes: [
      "Entering rotational speed in RPM instead of converting to rad/s (ω = RPM × π/30).",
      "Forgetting to square the angular velocity term in the calculation.",
      "Confusing mass moment of inertia I (kg·m²) with area moment of inertia J (m⁴)."
    ],
    bestPractices: [
      "Always convert RPM to rad/s before calculating rotational kinetic energy.",
      "Verify structural rotor hoop stress limits when operating flywheels at high rotational speeds.",
      "Balance rotating rotors according to ISO 1940 standards to prevent violent high-speed vibration."
    ],
    faqs: [
      {
        question: "How do you convert RPM to angular velocity in rad/s?",
        answer: "Multiply speed in RPM by (2π / 60) ≈ 0.1047198 to obtain angular velocity in radians per second (rad/s)."
      },
      {
        question: "Why does doubling rotational speed quadruple stored kinetic energy?",
        answer: "Because kinetic energy depends on the square of angular velocity (ω²), doubling speed (2ω) results in (2)² = 4 times the stored energy."
      },
      {
        question: "What is the difference between mass moment of inertia and area moment of inertia?",
        answer: "Mass moment of inertia I (kg·m²) measures resistance to rotational acceleration. Area moment of inertia J or I_area (m⁴) measures beam cross-sectional resistance to bending or torsion."
      },
      {
        question: "How is moment of inertia calculated for a solid uniform cylinder?",
        answer: "For a solid uniform cylinder of mass m and radius r rotating around its central axis, I = ½ × m × r²."
      },
      {
        question: "What is a flywheel energy storage system (FESS)?",
        answer: "FESS stores electrical energy as rotational kinetic energy in a high-speed rotor enclosed in a vacuum chamber with magnetic bearings, converting back to electricity via a motor-generator."
      },
      {
        question: "How do you calculate total kinetic energy for a rolling wheel?",
        answer: "Total kinetic energy equals linear kinetic energy plus rotational kinetic energy: E_total = ½ m v² + ½ I ω²."
      },
      {
        question: "What unit is 1 Joule in terms of mechanical energy?",
        answer: "One Joule equals 1 Watt-second (1 J = 1 W·s = 1 N·m = 1 kg·m²/s²)."
      },
      {
        question: "How do you convert Joules to Watt-hours (Wh)?",
        answer: "Divide kinetic energy in Joules by 3,600 to obtain energy in Watt-hours (1 Wh = 3,600 J)."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-4", title: "Quantities and units — Mechanics" },
      { organization: "NIST", code: "SP 811", title: "Guide for the Use of the International System of Units (SI)" },
      { organization: "DIN", code: "DIN 1304", title: "General letter symbols for physical quantities" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 8. FLYWHEEL ENERGY STORAGE CALCULATOR
  "flywheel-energy-storage": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Flywheel Energy Storage Calculator | Usable Kinetic Energy ΔE",
    metaDescription: "Calculate usable kinetic energy ΔE in Joules released or stored by a flywheel between maximum and minimum operational angular velocities.",
    canonicalUrl,
    introduction: {
      overview: "Flywheel energy storage systems store electrical or mechanical energy as rotational kinetic energy in a heavy or high-speed spinning rotor. Unlike stationary systems that discharge completely to zero speed, practical industrial and grid flywheels operate within a bounded speed range between a maximum operating velocity (ω_max) and a minimum baseline velocity (ω_min). This calculator determines the usable energy capacity released or absorbed during speed transitions.",
      applications: [
        "Sizing flywheel energy storage buffers for grid frequency regulation and uninterruptible power supplies (UPS).",
        "Calculating energy discharge capacity for punch presses and metal forging hammers.",
        "Evaluating regenerative braking recovery in hybrid locomotives and crane hoists.",
        "Designing mechanical pulse-power buffers for pulsed laser or welding equipment."
      ],
      industries: [
        "Grid Energy Storage & Power Quality",
        "Heavy Manufacturing & Stamping",
        "Rail Transportation & Transit Systems",
        "Defense & Pulse Power Engineering"
      ]
    },
    quickAnswer: "The usable kinetic energy ΔE released or absorbed by a flywheel operating between maximum velocity ω_max and minimum velocity ω_min is computed using ΔE = ½ × I × (ω_max² - ω_min²). For a flywheel with I = 10 kg·m² operating between 300 rad/s (~2,865 RPM) and 100 rad/s (~955 RPM), the usable energy capacity is 400,000 Joules (400 kJ or 111.1 Wh).",
    governingEquation: {
      formula: "\\Delta E = \\frac{1}{2} I \\left(\\omega_{\\text{max}}^2 - \\omega_{\\text{min}}^2\\right)",
      explanation: "Usable stored energy ΔE (in Joules) equals the difference between rotational kinetic energy at maximum speed (½ I ω_max²) and residual kinetic energy at minimum operating speed (½ I ω_min²). Depth of discharge is defined by 1 - (ω_min / ω_max)².",
      variables: [
        { symbol: "I", label: "Moment of Inertia", unit: "kg·m²", description: "Rotational mass moment of inertia of the flywheel rotor." },
        { symbol: "ω_max", label: "Max Angular Velocity", unit: "rad/s", description: "Maximum allowable operational angular velocity." },
        { symbol: "ω_min", label: "Min Angular Velocity", unit: "rad/s", description: "Minimum operational angular velocity at discharge floor." },
        { symbol: "ΔE", label: "Usable Stored Energy", unit: "Joules (J)", description: "Net usable kinetic energy absorbed or discharged." }
      ]
    },
    inputParameters: [
      {
        name: "inertia",
        label: "Moment of Inertia (I)",
        unit: "kg·m²",
        defaultValue: 10,
        explanation: "Mass moment of inertia of the flywheel assembly around its rotation axis."
      },
      {
        name: "wMax",
        label: "Max Angular Velocity (ω_max)",
        unit: "rad/s",
        defaultValue: 300,
        explanation: "Upper operational speed limit in radians per second (300 rad/s ≈ 2,865 RPM)."
      },
      {
        name: "wMin",
        label: "Min Angular Velocity (ω_min)",
        unit: "rad/s",
        defaultValue: 100,
        explanation: "Lower operational discharge threshold speed in radians per second (100 rad/s ≈ 955 RPM)."
      }
    ],
    outputExplanation: {
      unit: "Joules (J)",
      interpretation: "The net mechanical energy delivered during deceleration from ω_max to ω_min, or absorbed during acceleration.",
      designImpact: "Used to determine UPS backup power duration (seconds/minutes), grid frequency stabilization discharge pulses, and drive motor power demands."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Moment of Inertia (I)", value: 10, unit: "kg·m²" },
        { label: "Max Angular Velocity (ω_max)", value: 300, unit: "rad/s" },
        { label: "Min Angular Velocity (ω_min)", value: 100, unit: "rad/s" }
      ],
      substitution: "Substitute I = 10 kg·m², ω_max = 300 rad/s, and ω_min = 100 rad/s into ΔE = ½ × I × (ω_max² - ω_min²):",
      intermediateSteps: [
        "1. Compute square of maximum angular velocity: 300² = 90,000 rad²/s².",
        "2. Compute square of minimum angular velocity: 100² = 10,000 rad²/s².",
        "3. Subtract minimum squared speed from maximum: 90,000 - 10,000 = 80,000 rad²/s².",
        "4. Multiply by 0.5 and moment of inertia I: 0.5 × 10 × 80,000 = 400,000 Joules (400 kJ)."
      ],
      finalResult: "400000",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Industrial Uninterruptible Power Supply (UPS) Flywheel Sizing",
      industryContext: "A data center uses a flywheel-based rotary UPS to bridge a 15-second power outage before diesel backup generators start. The flywheel has I = 10 kg·m² and operates between 300 rad/s and 100 rad/s.",
      problemStatement: "Determine the average power the flywheel can deliver continuously during a 15-second emergency discharge window.",
      engineeringSolution: "Usable energy ΔE = 400,000 Joules (400 kJ). Average power = ΔE / time = 400,000 J / 15 s = 26,666.7 Watts (26.67 kW)."
    },
    assumptions: [
      "Rigid flywheel rotor operating well below material critical resonant speeds.",
      "Negligible aerodynamic windage drag losses (rotor operates in a vacuum or low-density gas).",
      "Symmetrical rotor mass distribution maintaining dynamic balance."
    ],
    limitations: [
      "Does not calculate electrical conversion losses in the motor-generator inverter (typically 92-96% round-trip efficiency).",
      "Operating below 33% maximum speed (ω_min < 0.33 ω_max) yields diminishing energy returns while requiring disproportionately high motor torque.",
      "Rotor tensile stress limits maximum peripheral velocity v = ω × r."
    ],
    commonMistakes: [
      "Assuming 100% of stored kinetic energy is usable (discharging to 0 RPM requires infinite torque at low speeds for constant power).",
      "Forgetting to convert RPM inputs to rad/s before squaring.",
      "Neglecting maximum rim speed tensile stress (hoop stress σ = ρ v²)."
    ],
    bestPractices: [
      "Design flywheel operating speed bounds so that ω_min is approximately 33% to 50% of ω_max (extracting 75% to 89% of total kinetic energy).",
      "Enclose high-speed carbon-fiber composite or steel flywheels in vacuum containment vessels to minimize windage loss and ensure safety.",
      "Use magnetic levitation bearings to eliminate mechanical friction standby standby losses."
    ],
    faqs: [
      {
        question: "Why don't flywheel systems discharge completely to 0 RPM?",
        answer: "To deliver constant power at lower speeds, torque must increase inversely with speed (T = P / ω). Below ~33% speed, required torque becomes impractically high for the motor-generator."
      },
      {
        question: "What percentage of energy is extracted if a flywheel drops from ω_max to 50% speed?",
        answer: "Extracting energy down to 50% speed (ω_min = 0.5 ω_max) yields 1 - (0.5)² = 1 - 0.25 = 75% of total stored kinetic energy."
      },
      {
        question: "How do carbon-fiber composite flywheels compare to steel flywheels?",
        answer: "Carbon-fiber composites have a much higher strength-to-density ratio (σ/ρ), allowing higher rim speeds (v > 1,000 m/s) and significantly higher energy density per kilogram."
      },
      {
        question: "How do you convert Joules to Kilowatt-hours (kWh)?",
        answer: "Divide energy in Joules by 3,600,000 (1 kWh = 3.6 × 10⁶ J = 3.6 MJ)."
      },
      {
        question: "What is round-trip efficiency for modern flywheel energy storage?",
        answer: "Modern vacuum-enclosed magnetic-bearing flywheel systems achieve round-trip AC-to-AC energy efficiencies between 85% and 92%."
      },
      {
        question: "How does rotor shape affect moment of inertia?",
        answer: "Mass concentrated at the outer rim (hollow rim flywheel) maximizes moment of inertia (I ≈ m r²) compared to a flat uniform disk (I = ½ m r²)."
      },
      {
        question: "What is flywheel standby loss?",
        answer: "Standby loss is parasitic energy lost to windage drag and bearing friction while holding speed, typically under 1% per hour in vacuum magnetic systems."
      },
      {
        question: "Can flywheels provide grid frequency regulation?",
        answer: "Yes. Flywheels respond to grid frequency variations in milliseconds, absorbing excess power during frequency surges and injecting power during frequency drops."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 1940-1", title: "Mechanical vibration — Balance quality requirements for rotors in a constant (rigid) state" },
      { organization: "DIN", code: "DIN 45670", title: "Flywheels — Dynamic Balancing and Rotational Limits" },
      { organization: "ASME", code: "ASME Boiler and Pressure Vessel Code Section VIII", title: "Rules for Construction of Unfired Pressure Vessels" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 9. SHAFT HORSEPOWER CALCULATOR
  "shaft-horsepower": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Shaft Horsepower Calculator | HP = (Torque × RPM) / 5252",
    metaDescription: "Calculate shaft horsepower (HP) from torque in lb-ft and rotational speed in RPM using the mechanical engineering formula HP = (Torque × RPM) / 5252.",
    canonicalUrl,
    introduction: {
      overview: "Shaft Horsepower (SHP) is the net mechanical power delivered to a rotating output shaft, taking into account drive transmission or friction losses incurred upstream. Expressed in imperial horsepower (HP = 550 ft-lb/s = 745.7 W), shaft horsepower is the industry standard for rating marine propulsion drives, internal combustion engines, automotive powertrains, agricultural PTO shafts, and industrial machinery drives.",
      applications: [
        "Determining net delivered horsepower to marine propeller shafts.",
        "Evaluating engine power output during dynamometer testing.",
        "Sizing agricultural tractor power take-off (PTO) shaft couplings.",
        "Assessing power transmission capabilities in industrial drivetrains."
      ],
      industries: [
        "Marine Engineering & Naval Architecture",
        "Automotive Powertrain & Engine Tuning",
        "Agricultural Machinery & Equipment",
        "Industrial Power Transmission"
      ]
    },
    quickAnswer: "Shaft horsepower HP is computed using HP = (Torque × RPM) / 5252, where torque is in pound-feet (lb-ft) and speed is in revolutions per minute (RPM). For a shaft transmitting 300 lb-ft of torque at 3,500 RPM, the shaft horsepower is 199.92 HP (approx. 200 HP).",
    governingEquation: {
      formula: "\\text{HP} = \\frac{\\tau_{\\text{lb-ft}} \\times N}{5252}",
      explanation: "Mechanical power HP equals torque τ (in lb-ft) multiplied by rotational speed N (in RPM), divided by the imperial derivation constant 5252 (derived from 33,000 ft-lb/min divided by 2π radians per revolution).",
      variables: [
        { symbol: "τ", label: "Torque", unit: "lb-ft", description: "Rotational twisting torque in pound-feet." },
        { symbol: "N", label: "Rotational Speed", unit: "RPM", description: "Shaft speed in revolutions per minute." },
        { symbol: "5252", label: "Derivation Constant", unit: "Dimensionless", description: "Standard imperial conversion constant (33,000 / 2π)." },
        { symbol: "HP", label: "Shaft Horsepower", unit: "HP", description: "Net output mechanical horsepower (1 HP = 550 ft-lb/s)." }
      ]
    },
    inputParameters: [
      {
        name: "torque",
        label: "Torque (τ)",
        unit: "pound-feet (lb-ft)",
        defaultValue: 300,
        explanation: "Measured shaft twisting torque in imperial pound-feet."
      },
      {
        name: "rpm",
        label: "Rotational Speed (N)",
        unit: "RPM",
        defaultValue: 3500,
        explanation: "Operating rotational speed in revolutions per minute."
      }
    ],
    outputExplanation: {
      unit: "Horsepower (HP)",
      interpretation: "The exact rate of imperial mechanical work output produced by the spinning shaft.",
      designImpact: "Used to size drive shaft cross-sections, universal joints, marine propeller blades, and gear reducer thermal ratings."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Torque (τ)", value: 300, unit: "lb-ft" },
        { label: "Rotational Speed (N)", value: 3500, unit: "RPM" }
      ],
      substitution: "Substitute τ = 300 lb-ft and N = 3500 RPM into HP = (Torque × RPM) / 5252:",
      intermediateSteps: [
        "1. Identify input torque τ = 300 lb-ft and rotational speed N = 3500 RPM.",
        "2. Multiply torque by RPM: 300 × 3500 = 1,050,000 lb-ft·RPM.",
        "3. Divide by the constant 5252: 1,050,000 / 5252 = 199.9238 HP."
      ],
      finalResult: "199.92",
      unit: "Horsepower (HP)"
    },
    practicalExample: {
      scenarioTitle: "Marine Propeller Shaft Power Rating",
      industryContext: "A commercial vessel diesel engine delivers 300 lb-ft of shaft torque at an engine speed of 3,500 RPM through a 1:1 direct drive coupling.",
      problemStatement: "Calculate the continuous shaft horsepower delivered to the marine propeller.",
      engineeringSolution: "HP = (300 × 3500) / 5252 = 199.92 HP. Subtracting 2% shaft line bearing losses yields 195.92 net brake horsepower at the propeller hub."
    },
    assumptions: [
      "Shaft rotates at a constant steady speed without sudden angular acceleration.",
      "Torque is measured in imperial pound-feet (lb-ft) rather than pound-inches (lb-in).",
      "Power represents mechanical shaft power excluding generator electrical losses."
    ],
    limitations: [
      "If torque is given in pound-inches (lb-in), the denominator constant changes to 63,025.",
      "Does not calculate engine fuel consumption or thermal efficiency.",
      "Indicated Horsepower (IHP) measured inside engine cylinders is higher than Shaft Horsepower due to piston friction."
    ],
    commonMistakes: [
      "Mixing pound-inches (lb-in) with 5252 instead of using the correct constant 63,025.",
      "Forgetting that torque and horsepower curves always cross at exactly 5,252 RPM when plotted on identical scale axes.",
      "Confusing Shaft Horsepower (SHP) with Electrical Horsepower or Metric Horsepower (PS / CV)."
    ],
    bestPractices: [
      "Verify torque unit scale before selecting the imperial conversion constant (5252 for lb-ft, 63025 for lb-in).",
      "Multiply shaft horsepower by 0.7457 to convert to kilowatts (kW).",
      "Account for drive transmission gear efficiency when calculating horsepower at driven machinery."
    ],
    faqs: [
      {
        question: "Why do horsepower and torque curves always cross at 5,252 RPM?",
        answer: "Because HP = (Torque × RPM) / 5252, substituting RPM = 5252 yields HP = Torque × 5252 / 5252 = Torque. Thus, numerical values for HP and lb-ft are identical at 5,252 RPM."
      },
      {
        question: "What is the difference between Brake Horsepower (BHP) and Shaft Horsepower (SHP)?",
        answer: "BHP is measured directly at the engine flywheel before any drivetrain components. SHP is measured further down the driveline at the final output shaft after gearbox friction losses."
      },
      {
        question: "How do you calculate horsepower if torque is in pound-inches (lb-in)?",
        answer: "Use the formula HP = (Torque_lb-in × RPM) / 63,025."
      },
      {
        question: "How do you convert imperial HP to metric horsepower (PS)?",
        answer: "1 imperial HP ≈ 1.01387 metric horsepower (PS or CV). 1 HP = 745.7 W, whereas 1 PS = 735.5 W."
      },
      {
        question: "What is Indicated Horsepower (IHP)?",
        answer: "Indicated Horsepower is the theoretical power generated by gas expansion inside engine combustion cylinders, uncorrected for internal mechanical friction."
      },
      {
        question: "What is power take-off (PTO) horsepower in tractors?",
        answer: "PTO horsepower is the mechanical power available at the tractor's rear rotating splined shaft to drive agricultural implements."
      },
      {
        question: "How does torque affect acceleration compared to horsepower?",
        answer: "Torque determines instantaneous wheel force (force = torque / radius), driving initial acceleration. Horsepower defines the rate at which work can be done at high RPM."
      },
      {
        question: "Can horsepower be calculated without torque?",
        answer: "If linear force and velocity are known, HP = (Force_lbs × Velocity_fps) / 550."
      }
    ],
    standardsReferences: [
      { organization: "SAE", code: "SAE J1349", title: "Engine Power Test Code — Spark Ignition and Compression Ignition" },
      { organization: "ISO", code: "ISO 14396", title: "Reciprocating internal combustion engines — Determination and method for measuring engine power" },
      { organization: "ABYC", code: "ABYC P-4", title: "Marine Inboard Engines and Transmissions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 10. TORQUE CONVERTER CALCULATOR
  "torque-converter-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Torque Converter Calculator | Metric Torque T = (P_kW × 9549) / N",
    metaDescription: "Calculate shaft torque in N·m from mechanical power in kilowatts (kW) and rotational speed in RPM using T = (P_kW × 9549) / N.",
    canonicalUrl,
    introduction: {
      overview: "Converting mechanical power and rotational speed into transmitted torque is a fundamental daily calculation in drive engineering. In SI metric units, shaft torque is directly computed from mechanical power in kilowatts (kW) and operating rotational speed in RPM using the standard metric conversion constant 9549 (derived from 60,000 / [2π × 1000]). This calculator determines transmitted torque across electric motors, gear reducers, and engine drive shafts.",
      applications: [
        "Determining output shaft torque for industrial electric gearmotors.",
        "Sizing flexible shaft couplings, keys, and spline connections.",
        "Evaluating torsional shear stress in drive shaft sizing calculations.",
        "Verifying mechanical load capacity for winches, hoists, and conveyors."
      ],
      industries: [
        "Industrial Drive & Gearbox Engineering",
        "Electric Motor & Automation Systems",
        "Material Handling & Conveyor Systems",
        "Heavy Machinery & Mining Drives"
      ]
    },
    quickAnswer: "Shaft torque T in Newton-meters (N·m) is calculated using T = (P_kW × 9549) / N, where P_kW is power in kilowatts and N is speed in RPM. For a 45 kW electric motor running at 1,450 RPM, the resulting shaft torque is 296.35 N·m.",
    governingEquation: {
      formula: "T = \\frac{P_{\\text{kW}} \\times 9549}{N}",
      explanation: "Torque T (in N·m) equals mechanical power P (in kW) multiplied by the metric conversion constant 9549 (60,000 / 2π), divided by rotational speed N (in RPM).",
      variables: [
        { symbol: "P_kW", label: "Mechanical Power", unit: "kW", description: "Shaft mechanical power in kilowatts." },
        { symbol: "N", label: "Rotational Speed", unit: "RPM", description: "Operating shaft rotational speed." },
        { symbol: "9549", label: "Metric Constant", unit: "Dimensionless", description: "Conversion factor (60,000 / 2π ≈ 9549.296)." },
        { symbol: "T", label: "Transmitted Torque", unit: "N·m", description: "Computed twisting moment exerted on the shaft." }
      ]
    },
    inputParameters: [
      {
        name: "powerKw",
        label: "Mechanical Power (P_kW)",
        unit: "kilowatts (kW)",
        defaultValue: 45,
        explanation: "Transmitted shaft power in metric kilowatts."
      },
      {
        name: "rpm",
        label: "Rotational Speed (N)",
        unit: "RPM",
        defaultValue: 1450,
        explanation: "Operating rotational speed in revolutions per minute."
      }
    ],
    outputExplanation: {
      unit: "Newton-meters (N·m)",
      interpretation: "The exact twisting torque exerted by the motor or engine on the output shaft.",
      designImpact: "Used directly to select coupling torque ratings, calculate shaft stress τ = 16T / πd³, and size shaft keyway shear areas."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Mechanical Power (P_kW)", value: 45, unit: "kW" },
        { label: "Rotational Speed (N)", value: 1450, unit: "RPM" }
      ],
      substitution: "Substitute P_kW = 45 kW and N = 1450 RPM into T = (P_kW × 9549) / N:",
      intermediateSteps: [
        "1. Identify transmitted power P = 45 kW and rotational speed N = 1450 RPM.",
        "2. Multiply power by constant 9549: 45 × 9549 = 429,705.",
        "3. Divide by rotational speed: 429,705 / 1450 = 296.3482 N·m."
      ],
      finalResult: "296.35",
      unit: "Newton-meters (N·m)"
    },
    practicalExample: {
      scenarioTitle: "Industrial Conveyor Motor Drive Shaft Torque Calculation",
      industryContext: "A bulk material handling belt conveyor is driven by a 45 kW 4-pole electric motor running at a full-load speed of 1,450 RPM.",
      problemStatement: "Determine the output torque to verify shaft coupling selection.",
      engineeringSolution: "T = (45 × 9549) / 1450 = 296.35 N·m. Applying a standard 1.5 conveyor service factor requires a coupling rated for at least 444.5 N·m."
    },
    assumptions: [
      "Power input is specified in metric kilowatts (1 kW = 1,000 W).",
      "Shaft rotates at steady operating speed under uniform loading.",
      "System operates within safe mechanical stress limits."
    ],
    limitations: [
      "If power is entered in Watts instead of kW, the formula must use 9.549 instead of 9549.",
      "Does not account for peak transient starting torques, which can reach 200-300% of full-load torque in direct-on-line motors.",
      "Calculates purely torsional load; overhung radial loads must be evaluated separately."
    ],
    commonMistakes: [
      "Entering power in Watts when using the 9549 constant.",
      "Confusing mechanical torque (N·m) with bending moment (N·m).",
      "Forgetting to apply appropriate application service factors when sizing drivetrain components."
    ],
    bestPractices: [
      "Always verify whether power input is in kW or Watts before applying conversion constants.",
      "Apply service factors between 1.25 and 2.5 depending on shock load severity.",
      "Check shaft stress safety factors against material shear yield strength (S_sy ≈ 0.577 S_y)."
    ],
    faqs: [
      {
        question: "Where does the metric torque constant 9549 come from?",
        answer: "Power P (kW) = (2π × N × T) / (60 × 1000). Rearranging for T gives T = P × (60,000 / 2π) / N. Since 60,000 / 2π = 9,549.296, the simplified constant is 9549."
      },
      {
        question: "How do you convert N·m to lb-ft?",
        answer: "Multiply torque in N·m by 0.73756 to convert to pound-feet (1 N·m = 0.73756 lb-ft)."
      },
      {
        question: "How does speed reduction in a gearbox affect output torque?",
        answer: "A gear reducer increases output torque in proportion to the reduction ratio (T_out = T_in × Ratio × Efficiency)."
      },
      {
        question: "What is full-load torque in electric motors?",
        answer: "Full-load torque is the continuous torque produced by an electric motor when operating at rated power and rated speed."
      },
      {
        question: "Why does torque decrease as RPM increases for a fixed power level?",
        answer: "Because P = Torque × Speed, power is constant when torque and speed are inversely proportional (as speed increases, required torque drops)."
      },
      {
        question: "What is breakdown torque in electric motors?",
        answer: "Breakdown torque is the maximum torque an AC induction motor can produce without stalling under abrupt overload."
      },
      {
        question: "How do you convert kW to HP?",
        answer: "Multiply power in kW by 1.341 to convert to imperial horsepower (1 kW = 1.341 HP)."
      },
      {
        question: "Can this formula be used for variable speed drives (VFD)?",
        answer: "Yes, provided the instantaneous power (kW) and instantaneous speed (RPM) at that operating operating point are known."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-4", title: "Quantities and units — Mechanics" },
      { organization: "IEC", code: "IEC 60034-1", title: "Rotating electrical machines — Rating and performance" },
      { organization: "AGMA", code: "AGMA 2001", title: "Fundamental Rating Factors and Calculation Methods for Involute Spur and Helical Gear Teeth" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 11. LEAD SCREW LINEAR SPEED CALCULATOR
  "lead-screw-speed": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lead Screw Speed Calculator | v = (Lead × RPM) / 60",
    metaDescription: "Calculate linear travel speed in mm/s or m/min for lead screws and ball screws from screw lead L in mm and rotational speed in RPM.",
    canonicalUrl,
    introduction: {
      overview: "Lead screws and ball screws convert rotational motion into high-precision linear motion in CNC machine tools, 3D printers, linear actuators, and automated positioning stages. The linear translation velocity of the screw nut depends directly on the screw lead (the axial distance advanced in one complete 360-degree revolution) and the rotational speed of the driving motor. This calculator computes linear feed speed.",
      applications: [
        "Determining CNC machine tool axis rapid traverse speeds and feed rates.",
        "Calculating print bed linear velocity in 3D printers.",
        "Sizing motorized linear actuators for industrial automation.",
        "Configuring stepper motor step pulse frequency for target linear speeds."
      ],
      industries: [
        "CNC Machine Tools & Automation",
        "Additive Manufacturing & 3D Printing",
        "Semiconductor Wafer Handling",
        "Medical Equipment Linear Stages"
      ]
    },
    quickAnswer: "Linear speed v in mm/s is calculated using v = (L × N) / 60, where L is screw lead in millimeters and N is rotational speed in RPM. For a lead screw with an 8 mm lead driven at 600 RPM, the linear speed is 80 mm/s (4.8 m/min).",
    governingEquation: {
      formula: "v = \\frac{L \\times N}{60}",
      explanation: "Linear velocity v (in mm/s) equals screw lead L (in mm/rev) multiplied by rotational speed N (in rev/min), divided by 60 seconds per minute.",
      variables: [
        { symbol: "L", label: "Screw Lead", unit: "mm/rev", description: "Axial distance traveled by the nut in one 360° rotation." },
        { symbol: "N", label: "Rotational Speed", unit: "RPM", description: "Rotational speed of the screw or nut." },
        { symbol: "60", label: "Time Conversion", unit: "s/min", description: "Conversion constant converting minutes to seconds." },
        { symbol: "v", label: "Linear Speed", unit: "mm/s", description: "Calculated linear translation velocity." }
      ]
    },
    inputParameters: [
      {
        name: "lead",
        label: "Screw Lead (L)",
        unit: "millimeters (mm)",
        defaultValue: 8,
        explanation: "Axial advance distance per single 360-degree rotation."
      },
      {
        name: "rpm",
        label: "Rotational Speed (N)",
        unit: "RPM",
        defaultValue: 600,
        explanation: "Rotational operating speed supplied by motor drive."
      }
    ],
    outputExplanation: {
      unit: "millimeters per second (mm/s)",
      interpretation: "The exact axial translation speed of the nut or driven carriage.",
      designImpact: "Determines axis cycle time, feed rate limits, stepper motor step rate requirement, and critical speed whip limits."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Screw Lead (L)", value: 8, unit: "mm" },
        { label: "Rotational Speed (N)", value: 600, unit: "RPM" }
      ],
      substitution: "Substitute L = 8 mm and N = 600 RPM into v = (L × N) / 60:",
      intermediateSteps: [
        "1. Identify screw lead L = 8 mm/rev and rotational speed N = 600 RPM.",
        "2. Calculate total linear distance per minute: 8 mm/rev × 600 rev/min = 4,800 mm/min.",
        "3. Convert to seconds: 4,800 / 60 = 80 mm/s."
      ],
      finalResult: "80",
      unit: "mm/s"
    },
    practicalExample: {
      scenarioTitle: "3D Printer Z-Axis Feed Rate Sizing",
      industryContext: "An FDM 3D printer uses a TR8x8 trapezoidal lead screw (8 mm lead) driven by a NEMA 17 stepper motor running at 600 RPM during rapid Z-axis repositioning.",
      problemStatement: "Calculate the rapid traverse velocity of the print bed in mm/s.",
      engineeringSolution: "v = (8 × 600) / 60 = 80 mm/s. The printer firmware must set Z-axis max speed to 80 mm/s to match this motor RPM limit."
    },
    assumptions: [
      "Rigid lead screw and nut assembly without mechanical backlash or axial slip.",
      "Motor rotates at uniform speed without missing steps.",
      "Screw speed remains below critical resonant whipping speed."
    ],
    limitations: [
      "Does not check lead screw critical speed (whipping frequency based on screw length and end fixity).",
      "Lead screw pitch equals lead only for single-start threads; multi-start threads have Lead = Pitch × Starts.",
      "High lead speeds generate frictional heat in Acme bronze/plastic nuts."
    ],
    commonMistakes: [
      "Confusing screw pitch with screw lead on multi-start threads (e.g., 2 mm pitch with 4 starts has an 8 mm lead).",
      "Exceeding critical whipping speed on long slender lead screws.",
      "Forgetting to divide by 60 when converting from mm/min to mm/s."
    ],
    bestPractices: [
      "Always verify thread start count: Lead = Pitch × Number of Starts.",
      "Check screw critical speed limit using DIN 69051 guidelines for long slender ball screws.",
      "Use ball screws instead of lead screws for high-speed continuous motion to eliminate sliding friction heating."
    ],
    faqs: [
      {
        question: "What is the difference between screw pitch and screw lead?",
        answer: "Pitch is the distance between adjacent thread crests. Lead is the axial distance advanced in one 360° turn. For single-start threads, Lead = Pitch. For multi-start threads, Lead = Pitch × Starts."
      },
      {
        question: "How do you calculate stepper motor pulse rate for a lead screw?",
        answer: "Pulse Rate (Hz) = (Linear Speed in mm/s × Microsteps per Rev) / Lead in mm."
      },
      {
        question: "What is lead screw whip?",
        answer: "Lead screw whip is violent lateral vibration occurring when the rotational speed reaches the screw's natural flexural resonant frequency."
      },
      {
        question: "How do you convert mm/s to meters per minute (m/min)?",
        answer: "Multiply speed in mm/s by 0.06 to convert to m/min (80 mm/s × 0.06 = 4.8 m/min)."
      },
      {
        question: "Why do ball screws achieve higher linear speeds than lead screws?",
        answer: "Ball screws use rolling ball bearings (efficiency > 90%), generating far less friction and heat than sliding Acme lead screw nuts (efficiency 20-50%)."
      },
      {
        question: "What is backdriving in lead screws?",
        answer: "Backdriving occurs when an axial push force on the nut causes the screw to rotate automatically, typical in high-lead or ball screw designs."
      },
      {
        question: "What is a self-locking thread?",
        answer: "A thread is self-locking when the lead angle is smaller than the friction angle (tan λ < μ), preventing axial forces from turning the screw."
      },
      {
        question: "How does screw diameter affect maximum speed?",
        answer: "Larger screw diameters increase lateral stiffness and critical whipping speed, permitting higher RPM over longer span lengths."
      }
    ],
    standardsReferences: [
      { organization: "DIN", code: "DIN 69051", title: "Ball Screws — Part 1: Terms and definitions" },
      { organization: "ASME", code: "ASME B1.5", title: "Acme Screw Threads" },
      { organization: "ISO", code: "ISO 3408-1", title: "Ball screws — Part 1: Vocabulary and designation" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 12. LEAD SCREW TORQUE CALCULATOR
  "lead-screw-torque": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lead Screw Torque Calculator | T = (F × Lead) / (2π × η)",
    metaDescription: "Calculate required drive torque in N·m to generate axial thrust force F using lead screw lead L in meters and mechanical efficiency η.",
    canonicalUrl,
    introduction: {
      overview: "Lead screws and ball screws convert input motor torque into linear thrust force to push or lift heavy mechanical loads. The driving torque required depends on the target axial thrust force, the screw lead, and the mechanical efficiency of the thread interface. Calculating required screw torque is essential for motor sizing, preventing motor stall, and designing linear positioning actuators.",
      applications: [
        "Sizing stepper or servo motors for CNC axis lead screw drives.",
        "Calculating drive torque for industrial scissor lifts and press actuators.",
        "Determining input torque for motorized valve positioning actuators.",
        "Assessing load lifting capacity of mechanical screw jacks."
      ],
      industries: [
        "Industrial Automation & Robotics",
        "CNC Machinery & Machine Tools",
        "Material Handling & Screw Jacks",
        "Medical Positioning Equipment"
      ]
    },
    quickAnswer: "Required drive torque T in Newton-meters (N·m) is calculated using T = (F × L) / (2 × π × η), where F is thrust force in Newtons, L is screw lead in meters, and η is mechanical efficiency. For an axial thrust of 1,500 N using a 0.005 m lead screw (5 mm lead) at 85% efficiency (η = 0.85), the required driving torque is 1.404 N·m.",
    governingEquation: {
      formula: "T = \\frac{F \\times L}{2\\pi \\times \\eta}",
      explanation: "Driving torque T (in N·m) equals axial force F (in N) multiplied by lead L (in m), divided by 2π radians and mechanical efficiency η (dimensionless).",
      variables: [
        { symbol: "F", label: "Axial Thrust Force", unit: "Newtons (N)", description: "Net axial linear load pushed or lifted by the screw nut." },
        { symbol: "L", label: "Screw Lead", unit: "Meters (m)", description: "Axial advance distance per 360° revolution (lead in mm / 1000)." },
        { symbol: "η", label: "Mechanical Efficiency", unit: "Dimensionless (0 to 1)", description: "Thread efficiency factor (0.85-0.95 for ball screws, 0.20-0.50 for lead screws)." },
        { symbol: "T", label: "Required Drive Torque", unit: "N·m", description: "Input torque required at the screw shaft to produce thrust F." }
      ]
    },
    inputParameters: [
      {
        name: "force",
        label: "Axial Thrust Force (F)",
        unit: "Newtons (N)",
        defaultValue: 1500,
        explanation: "Required linear pushing or pulling force."
      },
      {
        name: "lead",
        label: "Screw Lead (L)",
        unit: "Meters (m)",
        defaultValue: 0.005,
        explanation: "Screw lead in meters (e.g., 5 mm lead = 0.005 m)."
      },
      {
        name: "efficiency",
        label: "Efficiency (η)",
        unit: "Fraction (0 to 1)",
        defaultValue: 0.85,
        explanation: "Mechanical efficiency (0.85 for ball screw, 0.35 for Acme lead screw)."
      }
    ],
    outputExplanation: {
      unit: "Newton-meters (N·m)",
      interpretation: "The net continuous driving torque required at the screw input shaft to overcome load and thread friction.",
      designImpact: "Used to select motor torque ratings, gearbox reduction ratios, drive coupling sizes, and power supply current requirements."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Thrust Force (F)", value: 1500, unit: "N" },
        { label: "Screw Lead (L)", value: 0.005, unit: "m" },
        { label: "Efficiency (η)", value: 0.85, unit: "Fraction" }
      ],
      substitution: "Substitute F = 1500 N, L = 0.005 m, and η = 0.85 into T = (F × L) / (2π × η):",
      intermediateSteps: [
        "1. Compute numerator (ideal work per turn): 1500 N × 0.005 m = 7.5 N·m.",
        "2. Compute denominator: 2 × π × 0.85 = 5.3407.",
        "3. Divide numerator by denominator: 7.5 / 5.3407 = 1.4043 N·m."
      ],
      finalResult: "1.40",
      unit: "Newton-meters (N·m)"
    },
    practicalExample: {
      scenarioTitle: "CNC Axis Ball Screw Motor Sizing",
      industryContext: "A CNC milling machine axis requires 1,500 N of linear thrust force to cut steel. The axis uses a precision ground ball screw with a 5 mm lead (0.005 m) and an efficiency η = 0.85.",
      problemStatement: "Determine the required continuous motor driving torque.",
      engineeringSolution: "T = (1500 × 0.005) / (2π × 0.85) = 1.404 N·m. Adding acceleration torque for axis inertia (T_acc) yields the required motor holding torque."
    },
    assumptions: [
      "Constant uniform axial thrust force without severe shock loads.",
      "Lead screw thrust bearing friction is accounted for or minimal.",
      "Lead is entered in meters (mm divided by 1000)."
    ],
    limitations: [
      "Does not calculate bearing breakaway stiction torque or seal drag torque.",
      "Acceleration torque T_acc = J_total × α must be added during rapid velocity changes.",
      "Sliding lead screws (Acme) suffer efficiency drops at slow speeds due to boundary lubrication."
    ],
    commonMistakes: [
      "Entering lead in millimeters instead of meters, resulting in torque values 1,000 times too high.",
      "Assuming 100% efficiency (η = 1.0) for sliding lead screws.",
      "Neglecting axial thrust bearing drag torque."
    ],
    bestPractices: [
      "Use η = 0.85-0.90 for ball screws and η = 0.30-0.45 for Acme lead screws.",
      "Add 20% safety margin to motor continuous torque rating to prevent stall.",
      "Verify column buckling load limit (Euler column load) for long pushed screws."
    ],
    faqs: [
      {
        question: "Why do ball screws require significantly less torque than Acme lead screws?",
        answer: "Ball screws use rolling balls with rolling friction (η ≈ 85-95%), whereas Acme screws rely on sliding metal-on-metal or plastic contact (η ≈ 20-50%)."
      },
      {
        question: "How do you calculate acceleration torque for a lead screw axis?",
        answer: "Acceleration torque T_acc = J_total × α, where J_total is total system inertia reflected to motor shaft and α is angular acceleration in rad/s²."
      },
      {
        question: "What is backdriving torque?",
        answer: "Backdriving torque is the output torque generated at the screw shaft when an axial force is applied to the nut: T_back = (F × L × η_back) / (2π)."
      },
      {
        question: "How does screw lead affect required motor torque?",
        answer: "Larger screw leads require higher driving torque for the same thrust force, but produce higher linear travel speed per motor RPM."
      },
      {
        question: "What is breakaway torque?",
        answer: "Breakaway torque is the initial torque spike needed to overcome static friction (stiction) before sliding or rolling motion begins."
      },
      {
        question: "How do you convert N·m to oz-in for stepper motor sizing?",
        answer: "Multiply torque in N·m by 141.61 to convert to ounce-inches (1 N·m = 141.61 oz-in)."
      },
      {
        question: "What is Euler column buckling in lead screws?",
        answer: "Euler buckling is catastrophic structural bending failure occurring when slender lead screws are subjected to excessive axial compressive thrust."
      },
      {
        question: "How does preloading affect ball screw torque?",
        answer: "Preloading eliminates mechanical backlash but adds constant drag torque (typically 5-10% of rated drive torque)."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 3408-3", title: "Ball screws — Part 3: Acceptance conditions and tests" },
      { organization: "DIN", code: "DIN 103", title: "ISO Metric Trapezoidal Screw Threads" },
      { organization: "ASME", code: "ASME B1.5", title: "Acme Screw Threads Standard" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 13. SPRING FORCE (HOOKE'S LAW) CALCULATOR
  "spring-force-hookes-law": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Spring Force Calculator | Hooke's Law F = k · x",
    metaDescription: "Calculate spring restoring force in Newtons using Hooke's Law F = k · x from spring rate constant k in N/m and deflection displacement x in meters.",
    canonicalUrl,
    introduction: {
      overview: "Hooke's Law describes the linear elastic behavior of helical compression springs, extension springs, and flexible mechanical elements. Formulated by Robert Hooke in 1676, the law states that the restoring force exerted by an elastic body is directly proportional to its displacement or deflection from its free un-deformed equilibrium position, provided the material remains within its elastic limit.",
      applications: [
        "Determining spring force for vehicle suspension helical coil springs.",
        "Sizing compression springs for pressure relief valves and check valves.",
        "Calculating return spring forces in mechanical switches and actuators.",
        "Designing precision mechanical scale measuring mechanisms."
      ],
      industries: [
        "Spring Manufacturing & Component Design",
        "Automotive Chassis & Suspension",
        "Valves & Fluid Control Equipment",
        "Consumer Electronics & Switches"
      ]
    },
    quickAnswer: "Spring force F in Newtons is calculated using Hooke's Law F = k × x, where k is the spring rate constant in N/m and x is spring displacement in meters. For a spring with a spring rate of 2,500 N/m deflected by 0.04 m (40 mm), the resulting restoring force is 100 Newtons.",
    governingEquation: {
      formula: "F = k \\cdot x",
      explanation: "Restoring spring force F (in Newtons) equals the spring stiffness rate k (in N/m) multiplied by axial displacement or deflection x (in meters).",
      variables: [
        { symbol: "k", label: "Spring Rate Constant", unit: "N/m", description: "Stiffness or load required per unit deflection of the spring." },
        { symbol: "x", label: "Displacement / Deflection", unit: "Meters (m)", description: "Axial compression or extension distance from free length." },
        { symbol: "F", label: "Spring Force", unit: "Newtons (N)", description: "Resulting elastic restoring force exerted by the spring." }
      ]
    },
    inputParameters: [
      {
        name: "rate",
        label: "Spring Rate (k)",
        unit: "Newtons per meter (N/m)",
        defaultValue: 2500,
        explanation: "Linear spring stiffness rate k in N/m."
      },
      {
        name: "deflection",
        label: "Deflection (x)",
        unit: "Meters (m)",
        defaultValue: 0.04,
        explanation: "Compression or extension deflection distance in meters (e.g., 40 mm = 0.04 m)."
      }
    ],
    outputExplanation: {
      unit: "Newtons (N)",
      interpretation: "The elastic reaction force exerted by the spring resisting displacement.",
      designImpact: "Used to determine valve seating pressure, suspension load capacity, pre-charge force, and spring wire fatigue stress."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Spring Rate (k)", value: 2500, unit: "N/m" },
        { label: "Deflection (x)", value: 0.04, unit: "m" }
      ],
      substitution: "Substitute k = 2500 N/m and x = 0.04 m into F = k · x:",
      intermediateSteps: [
        "1. Identify spring rate k = 2500 N/m and deflection x = 0.04 m.",
        "2. Multiply spring rate by deflection: 2500 × 0.04 = 100 Newtons."
      ],
      finalResult: "100",
      unit: "Newtons (N)"
    },
    practicalExample: {
      scenarioTitle: "Pressure Relief Valve Compression Spring Design",
      industryContext: "A hydraulic safety relief valve uses a heavy coil spring with stiffness k = 2,500 N/m. The valve spool compresses the spring by 40 mm (0.04 m) to reach cracking pressure.",
      problemStatement: "Calculate the spring force holding the valve disc closed.",
      engineeringSolution: "F = 2500 N/m × 0.04 m = 100 N. The hydraulic pressure multiplied by the valve seat area must exceed 100 N to open the valve."
    },
    assumptions: [
      "Spring operates strictly within its elastic deformation limit without yielding or permanent set.",
      "Linear helical coil spring geometry maintaining constant stiffness throughout travel.",
      "Static or quasi-static spring deflection (ignoring surge wave propagation)."
    ],
    limitations: [
      "Does not apply once solid height is reached (coils touching).",
      "Non-linear springs (conical or variable pitch springs) exhibit changing spring rates k(x).",
      "High temperatures cause thermal spring relaxation and loss of pre-load force."
    ],
    commonMistakes: [
      "Entering deflection in millimeters without converting to meters.",
      "Exceeding spring yield strength causing permanent coil set.",
      "Confusing free spring length with deflected working spring length."
    ],
    bestPractices: [
      "Calculate spring rate k using wire diameter d, mean diameter D, shear modulus G, and active coils Na: k = (G × d⁴) / (8 × D³ × Na).",
      "Keep working stress below 45% of wire tensile strength for infinite fatigue life.",
      "Account for initial pre-load compression force when setting valve cracking points."
    ],
    faqs: [
      {
        question: "How do you convert spring rate from N/mm to N/m?",
        answer: "Multiply spring rate in N/mm by 1,000 to convert to N/m (e.g., 2.5 N/mm = 2,500 N/m)."
      },
      {
        question: "What is solid height in a compression spring?",
        answer: "Solid height is the overall axial length of a compression spring when loaded until all adjacent coils are touching."
      },
      {
        question: "How does combining springs in parallel affect total spring rate?",
        answer: "Springs in parallel add their rates directly: k_total = k1 + k2 + k3..."
      },
      {
        question: "How does combining springs in series affect total spring rate?",
        answer: "Springs in series reduce total stiffness: 1 / k_total = 1/k1 + 1/k2."
      },
      {
        question: "What material property determines spring stiffness?",
        answer: "Shear modulus of elasticity G (typically ~79 GPa for spring steel) dictates spring rate k."
      },
      {
        question: "What is spring stress relaxation?",
        answer: "Stress relaxation is the gradual loss of spring force over time when held at constant elevated temperature and deflection."
      },
      {
        question: "How do active coils affect spring rate?",
        answer: "Spring rate is inversely proportional to the number of active coils Na. Halving active coils doubles spring stiffness."
      },
      {
        question: "What is the Wahl correction factor in spring stress analysis?",
        answer: "The Wahl factor K_W accounts for internal curvature stress concentration and direct shear in helical spring wire."
      }
    ],
    standardsReferences: [
      { organization: "SMI", code: "SMI Handbook", title: "Handbook of Spring Design" },
      { organization: "DIN", code: "DIN 2089-1", title: "Helical compression springs made of round wire and rod — Calculation and design" },
      { organization: "ISO", code: "ISO 22705", title: "Springs — Measurement and test parameters" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 14. SPRING POTENTIAL ENERGY CALCULATOR
  "spring-potential-energy": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Spring Potential Energy Calculator | Elastic Energy U = ½ k x²",
    metaDescription: "Calculate stored elastic potential energy U in Joules for compressed or extended springs using U = ½ k x² from spring rate k and displacement x.",
    canonicalUrl,
    introduction: {
      overview: "Elastic potential energy is mechanical energy stored within an elastic body as a result of reversible compressive or tensile deformation. For linear Hookean springs, stored strain energy increases with the square of deflection displacement (x²). Calculating spring potential energy is vital across mechanical engineering for sizing impact energy absorbers, spring-driven catapult mechanisms, recoil buffers, and energy storage latch mechanisms.",
      applications: [
        "Calculating energy storage in spring-loaded safety latches and mechanisms.",
        "Determining impact energy absorption capacity for spring bumpers and buffers.",
        "Sizing vehicle suspension springs to absorb roadway impact energy.",
        "Analyzing strain energy in high-cycle valve train springs."
      ],
      industries: [
        "Spring Manufacturing & Engineering",
        "Automotive Crash & Suspension Design",
        "Aerospace Recoil & Latch Systems",
        "Consumer Product Design"
      ]
    },
    quickAnswer: "Stored elastic potential energy U in Joules is computed using U = ½ × k × x², where k is spring rate in N/m and x is deflection in meters. For a spring with k = 5,000 N/m compressed by 0.08 m (80 mm), the stored potential energy is 16 Joules.",
    governingEquation: {
      formula: "U = \\frac{1}{2} k x^2",
      explanation: "Stored elastic strain energy U (in Joules) equals half the spring rate k (in N/m) multiplied by the square of deflection displacement x² (in meters).",
      variables: [
        { symbol: "k", label: "Spring Rate Constant", unit: "N/m", description: "Linear spring rate or stiffness in Newtons per meter." },
        { symbol: "x", label: "Deflection Displacement", unit: "Meters (m)", description: "Axial compression or extension distance from free unloaded length." },
        { symbol: "U", label: "Elastic Potential Energy", unit: "Joules (J)", description: "Stored strain energy in Joules (1 J = 1 N·m)." }
      ]
    },
    inputParameters: [
      {
        name: "rate",
        label: "Spring Rate (k)",
        unit: "Newtons per meter (N/m)",
        defaultValue: 5000,
        explanation: "Spring rate stiffness constant in N/m."
      },
      {
        name: "displacement",
        label: "Displacement (x)",
        unit: "Meters (m)",
        defaultValue: 0.08,
        explanation: "Deflection displacement distance in meters (e.g., 80 mm = 0.08 m)."
      }
    ],
    outputExplanation: {
      unit: "Newton-meters or Joules (J)",
      interpretation: "The total elastic strain energy stored in the deformed spring structure.",
      designImpact: "Determines launch velocity in spring release mechanisms, buffer energy absorption capacity, and spring wire strain energy density."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Spring Rate (k)", value: 5000, unit: "N/m" },
        { label: "Displacement (x)", value: 0.08, unit: "m" }
      ],
      substitution: "Substitute k = 5000 N/m and x = 0.08 m into U = ½ × k × x²:",
      intermediateSteps: [
        "1. Identify spring rate k = 5000 N/m and displacement x = 0.08 m.",
        "2. Square the displacement: 0.08² = 0.0064 m².",
        "3. Multiply by spring rate: 5000 × 0.0064 = 32.",
        "4. Multiply by 0.5: 0.5 × 32 = 16 Joules."
      ],
      finalResult: "16",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Automotive Bumper Recoil Spring Buffer Energy Storage",
      industryContext: "An industrial rail cart bumper uses a heavy recoil coil spring with stiffness k = 5,000 N/m. An impact compresses the spring buffer by 80 mm (0.08 m).",
      problemStatement: "Determine the impact kinetic energy absorbed and stored by the spring buffer.",
      engineeringSolution: "U = 0.5 × 5000 N/m × (0.08 m)² = 16 Joules. The spring buffer absorbs 16 J of kinetic energy during impact deceleration."
    },
    assumptions: [
      "Spring deforms purely elastically within material yield limits.",
      "Linear constant spring rate k throughout deflection range.",
      "Zero internal friction energy loss between spring coils."
    ],
    limitations: [
      "Does not account for damping heat dissipation in hydraulic shock absorbers.",
      "Exceeding spring elastic limit causes permanent set, reducing stored potential energy capacity.",
      "High-speed spring release undergoes internal mass wave dynamics."
    ],
    commonMistakes: [
      "Forgetting to square the displacement term x².",
      "Entering displacement in millimeters without converting to meters.",
      "Confusing elastic potential energy U (Joules) with peak spring force F (Newtons)."
    ],
    bestPractices: [
      "Verify spring wire shear stress under maximum deflection to prevent permanent yield.",
      "Combine springs with dampers (dashpots) to dissipate stored potential energy without sustained oscillation.",
      "Use spring steel alloys (e.g., Chrome Silicon ASTM A401) for high energy storage density applications."
    ],
    faqs: [
      {
        question: "Why does doubling spring deflection quadruple stored potential energy?",
        answer: "Because potential energy depends on the square of displacement (x²), doubling displacement (2x) increases stored energy by (2)² = 4 times."
      },
      {
        question: "What happens to stored potential energy when a spring is released?",
        answer: "Stored potential energy converts into kinetic energy (½ m v²) of the propelled mass, minus minor internal acoustic and thermal friction losses."
      },
      {
        question: "How do you calculate launch velocity of an object released by a spring?",
        answer: "Equating strain energy to kinetic energy (½ k x² = ½ m v²) yields launch velocity v = x × √(k / m)."
      },
      {
        question: "How does spring potential energy relate to spring force?",
        answer: "Spring potential energy equals the area under the force-deflection curve: U = ∫ F dx = ∫ (k x) dx = ½ k x²."
      },
      {
        question: "What unit is 1 Joule in terms of spring work?",
        answer: "One Joule equals 1 Newton-meter of work done in deflecting the spring."
      },
      {
        question: "Can gas springs store higher potential energy density than coil springs?",
        answer: "Yes, nitrogen gas springs achieve significantly higher energy storage density per unit volume than steel coil springs."
      },
      {
        question: "What is resilient energy density?",
        answer: "Resilient energy density measures stored strain energy per unit volume of spring material (u = σ² / 4G for torsion wire springs)."
      },
      {
        question: "Does temperature affect spring energy storage?",
        answer: "Yes, elevated temperatures reduce material shear modulus G, lowering spring rate k and decreasing stored energy capacity."
      }
    ],
    standardsReferences: [
      { organization: "SMI", code: "SMI Handbook", title: "Handbook of Spring Design" },
      { organization: "DIN", code: "DIN 2089-2", title: "Helical extension springs — Calculation and design" },
      { organization: "ISO", code: "ISO 22705", title: "Springs — Measurement and test parameters" }
    ],
    internalLinks: {
      parentDiscipline: { id: "mechanical-calc", name: "Mechanical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })

};


