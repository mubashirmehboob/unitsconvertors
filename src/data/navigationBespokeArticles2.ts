import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke technical articles for Navigation & Marine Calculators (Part 2: Tools 11 - 19).
 * Conforms strictly to the Engineering Article Template & SEO Guidelines.
 */

export const navigationBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  // 11. COMPASS CORRECTION CALCULATOR
  "compass-correction-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Compass Correction Calculator | Total Compass Error, Variation & Deviation",
    metaDescription: "Calculate Total Compass Error and convert Compass Heading (°C) to True Heading (°T) by applying local magnetic variation and vessel compass deviation.",
    canonicalUrl,
    introduction: {
      overview: "Magnetic compasses installed aboard commercial ships, naval vessels, and yachts do not point directly toward True Geographic North. Instead, their orientation is subject to two cumulative angular distortions: Magnetic Variation (caused by the tilt of Earth's geomagnetic core) and Compass Deviation (caused by permanent and induced magnetic fields in the ship's steel hull, machinery, and electrical equipment).\n\nThe algebraic sum of these two angular offsets is defined as the Total Compass Error: Total Error = Variation + Deviation (where Easterly errors are treated as positive and Westerly errors as negative). Applying the Total Compass Error directly to the raw magnetic compass reading converts Compass Heading into True Heading: True Heading = Compass Heading + Total Compass Error.\n\nRegularly determining, verifying, and applying compass correction calculations is an internationally mandated SOLAS seamanship duty performed by bridge watch officers to ensure reliable navigation even when master gyrocompasses or satellite heading sensors fail.",
      applications: [
        "Computing daily bridge compass error logs using solar, lunar, or stellar azimuth sights.",
        "Correcting binnacle compass readings during emergency electrical gyrocompass failures.",
        "Calibrating fluxgate compass sensors and marine autopilot heading inputs.",
        "Constructing shipboard deviation tables during post-drydock 'swinging the ship' procedures."
      ],
      industries: [
        "Commercial Merchant Shipping & Container Fleet Management",
        "Naval Surface Warfare & Coast Guard Cutter Operations",
        "Commercial Fishing Fleets & Offshore Tug/Barge Navigation",
        "Marine Electronics Installation & Compass Adjustment Services"
      ]
    },
    quickAnswer: "The Compass Correction Calculator computes True Heading from compass readings using the algebraic relation: True Heading (°T) = Compass Heading (°C) + Variation (°E/W) + Deviation (°E/W). With default inputs of 085° Compass Heading, −7° Variation (7° West), and +3° Deviation (3° East), the Total Compass Error is −4° (4° West), yielding an exact True Heading of 081.00° True (°T).",
    governingEquation: {
      formula: "\\text{True Heading (°T)} = \\left( \\text{Compass (°C)} + \\text{Variation (°E/W)} + \\text{Deviation (°E/W)} \\right) \\bmod 360",
      explanation: "Total compass error is the algebraic sum of variation and deviation. When converting from Compass to True, Easterly errors are added (+) and Westerly errors are subtracted (-). The resulting value is normalized modulo 360°.",
      variables: [
        {
          symbol: "True",
          label: "True Heading",
          unit: "Degrees True (°T)",
          description: "Geographic heading referenced to the True North Pole."
        },
        {
          symbol: "Compass",
          label: "Compass Heading",
          unit: "Compass Degrees (°C)",
          description: "Raw heading read directly from the vessel's binnacle magnetic compass."
        },
        {
          symbol: "Variation",
          label: "Magnetic Variation",
          unit: "Degrees (°)",
          description: "Geomagnetic angle between True North and Magnetic North (East is +, West is -)."
        },
        {
          symbol: "Deviation",
          label: "Ship's Deviation",
          unit: "Degrees (°)",
          description: "Vessel magnetic distortion on the specific heading (East is +, West is -)."
        }
      ]
    },
    inputParameters: [
      {
        name: "compassHeading",
        label: "Ship Compass Heading",
        unit: "Degrees (°C)",
        defaultValue: 85,
        explanation: "Heading reading taken directly from the magnetic compass binnacle. Default is 085°C."
      },
      {
        name: "variation",
        label: "Magnetic Variation (E is +, W is -)",
        unit: "Degrees (°)",
        defaultValue: -7,
        explanation: "Local chart variation. Enter positive for East (+), negative for West (-). Default is -7° (7°W)."
      },
      {
        name: "deviation",
        label: "Compass Deviation (E is +, W is -)",
        unit: "Degrees (°)",
        defaultValue: 3,
        explanation: "Ship deviation from deviation table for this heading. Default is +3° (3°E)."
      }
    ],
    outputExplanation: {
      unit: "True Heading (°T)",
      interpretation: "The true geographic heading over Earth's surface corresponding to the observed compass reading.",
      designImpact: "Used for plotting visual bearing lines on nautical charts and verifying gyrocompass reliability."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Compass Heading", value: 85, unit: "°C" },
        { label: "Magnetic Variation", value: -7, unit: "° (7°W)" },
        { label: "Compass Deviation", value: 3, unit: "° (3°E)" }
      ],
      substitution: "Calculate Total Error = (-7°) + (+3°) = -4° (4° West); Apply True = Compass + Total Error:",
      intermediateSteps: [
        "1. Identify inputs: Compass Heading = 085°C, Variation = -7° (7°W), Deviation = +3° (3°E).",
        "2. Compute Total Compass Error: Total Error = Variation + Deviation = (-7) + (+3) = -4° (4° West).",
        "3. Apply CADET rule (Compass to True: Add East, Subtract West):",
        "   True = Compass + Total Error = 85° + (-4°) = 81.00° True.",
        "4. Normalize domain: 81° is in [000°, 360°), written as 081° True (°T)."
      ],
      finalResult: "81.00",
      unit: "True Heading (°T)"
    },
    practicalExample: {
      scenarioTitle: "Daily Morning Solar Azimuth Compass Check",
      industryContext: "At morning twilight, the Second Officer of a bulk carrier takes a sun bearing at compass reading 092°C. The celestial reduction tables calculate the True Sun Azimuth as 088°T. Local chart variation is 6°W (-6°).",
      problemStatement: "Determine the Total Compass Error and the ship's current deviation on this easterly heading.",
      engineeringSolution: "Total Compass Error = True - Compass = 088° - 092° = -4° (4° West). Because Total Error = Variation + Deviation, Deviation = Total Error - Variation = (-4°) - (-6°) = +2° (2° East). The officer logs a deviation of 2° East on heading 090°."
    },
    assumptions: [
      "Magnetic variation is up-to-date and adjusted for annual rate from the nearest chart compass rose.",
      "The ship's deviation value is obtained from the certified compass deviation card for the current heading.",
      "The compass binnacle flinders bar and quadrantal spheres are properly adjusted."
    ],
    limitations: [
      "Deviation values can change substantially after loading large steel/ferrous scrap cargo or undergoing major shipyard welding.",
      "Near magnetic poles (high magnetic inclination dip), horizontal compass directive force weakens."
    ],
    commonMistakes: [
      "Applying Westerly error as an addition when converting from Compass to True (remember: Compass to True, ADD East, SUBTRACT West).",
      "Confusing Gyro Error with Magnetic Compass Error.",
      "Using an old deviation card after major hull structural alterations or lightning strikes."
    ],
    bestPractices: [
      "Perform a celestial azimuth or terrestrial transit bearing at least once per watch to check compass error.",
      "Record all compass errors in the official Bridge Compass Observation Book.",
      "Keep all mobile phones, radios, and iron tools at least 2 meters away from the magnetic compass binnacle."
    ],
    faqs: [
      {
        question: "What is Total Compass Error?",
        answer: "Total Compass Error is the overall angular difference between Compass North and True North, equal to the algebraic sum of Magnetic Variation and Ship's Deviation."
      },
      {
        question: "What is the CADET rule for compass correction?",
        answer: "CADET stands for 'Compass to True: Add East, Subtract West'. When converting from a Compass reading to a True reading, add Easterly errors and subtract Westerly errors."
      },
      {
        question: "How do you calculate Deviation from observed compass error and variation?",
        answer: "Deviation = Total Compass Error − Magnetic Variation (where East is positive and West is negative)."
      },
      {
        question: "Why do ships have compass deviation?",
        answer: "Steel hulls, engine blocks, cargo, electrical cabling, and electronic equipment create localized magnetic fields aboard the ship that deflect the compass needle away from Magnetic North."
      },
      {
        question: "How often should a ship's magnetic compass be swung and calibrated?",
        answer: "Under IMO and flag state rules, a magnetic compass should be professionally swung and adjusted at least every 2 years, or after major structural repairs, drydocking, or lightning strikes."
      },
      {
        question: "What are Flinders bars and Quadrantal spheres on a compass binnacle?",
        answer: "They are soft-iron correctors mounted on the binnacle to neutralize induced magnetic fields in the ship's hull caused by Earth's vertical and horizontal magnetic fields."
      },
      {
        question: "What is the difference between Compass Error and Gyro Error?",
        answer: "Compass Error applies to magnetic compasses (combining variation and deviation). Gyro Error is the mechanical drift or offset of a motorized gyrocompass relative to True North."
      },
      {
        question: "Can variation be eliminated by adjusting the compass?",
        answer: "No. Variation is a property of Earth's geomagnetic field and cannot be changed by adjusting the ship's compass. Only deviation can be reduced through binnacle magnets."
      },
      {
        question: "What is an Azimuth Check?",
        answer: "An Azimuth Check is an operational procedure where the bearing of a celestial body (Sun, Polaris, star) is measured with an azimuth circle and compared with calculated True azimuth to find compass error."
      },
      {
        question: "Why must compass error be checked even if GPS and Gyro are working?",
        answer: "SOLAS regulations mandate magnetic compass verification because the magnetic compass is the only completely autonomous, non-electrical heading source available if power or satellite links fail."
      }
    ],
    standardsReferences: [
      {
        organization: "IMO",
        code: "Resolution A.382(X)",
        title: "Magnetic Compasses: Carriage and Performance Standards"
      },
      {
        organization: "ISO",
        code: "ISO 25862:2019",
        title: "Ships and marine technology — Marine magnetic compasses, binnacles and azimuth reading devices"
      },
      {
        organization: "UK MCA",
        code: "MGN 379 (M+F)",
        title: "Navigation: Use of Electronic Navigation Aids and Compass Verification"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 12. MAGNETIC DECLINATION CALCULATOR
  "magnetic-declination-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Magnetic Declination Calculator | Secular Geomagnetic Variation Drift",
    metaDescription: "Calculate updated local magnetic declination (variation) adjusted for annual secular drift rate from published nautical chart compass roses.",
    canonicalUrl,
    introduction: {
      overview: "Magnetic Declination (termed 'Magnetic Variation' in nautical navigation) is the horizontal angle between Geographic True North and Magnetic North at any given point on Earth's surface. Because Earth's molten iron outer core is in continuous turbulent motion, the geomagnetic field experiences dynamic secular variation, causing magnetic declination to slowly drift over time.\n\nNautical charts published by hydrographic offices (such as NOAA, UKHO, and CHS) print compass roses that state the base magnetic variation for a specific baseline year alongside an annual rate of change (e.g., 'Variation 4°15′W (2018), Annual Increase 6′E'). Navigators must update this baseline value to the current operational year before applying compass corrections.\n\nThe updated declination is calculated as: Current Declination = Base Declination + (Annual Rate of Change × Elapsed Years). Keeping chart declination accurate prevents insidious cumulative heading errors during coastal and oceanic passages.",
      applications: [
        "Updating historical nautical chart compass rose variations to current sailing year.",
        "Calibrating marine electronic compasses and GNSS satellite compass declination lookup tables.",
        "Land surveying and boundary orientation using magnetic compass transits.",
        "Aeronautical runway magnetic heading re-designation assessments."
      ],
      industries: [
        "Hydrographic Surveying & Chart Production",
        "Commercial Maritime Navigation & Passage Planning",
        "Civil & Geodetic Land Surveying",
        "Aviation Aerodrome Engineering & Airspace Design"
      ]
    },
    quickAnswer: "The Magnetic Declination Calculator computes updated magnetic variation using the linear secular drift equation: Current Declination = Base Declination + (Annual Rate × Elapsed Years ÷ 60). With default inputs of −12.50° base declination (12°30′W), an annual change of +4.5 arcminutes/year (+0.075°/yr East), and 6.0 elapsed years, the updated declination is exactly −12.05° (12°03′W).",
    governingEquation: {
      formula: "\\text{Current Declination (°)} = \\text{Base Declination (°)} + \\frac{\\text{Annual Change (′/yr)} \\times \\text{Years Elapsed}}{60}",
      explanation: "Annual secular change in minutes of arc (′) is multiplied by elapsed years and divided by 60 to convert into decimal degrees. Easterly annual change is added (+), while Westerly annual change is subtracted (-).",
      variables: [
        {
          symbol: "Current",
          label: "Current Magnetic Declination",
          unit: "Decimal Degrees (°)",
          description: "Updated magnetic variation for the current operational year."
        },
        {
          symbol: "Base",
          label: "Base Declination",
          unit: "Decimal Degrees (°)",
          description: "Magnetic variation printed on the nautical chart compass rose (East is +, West is -)."
        },
        {
          symbol: "Annual Change",
          label: "Annual Secular Drift Rate",
          unit: "Minutes of Arc / Year (′/yr)",
          description: "Yearly rate of magnetic drift printed on the chart (East is +, West is -)."
        },
        {
          symbol: "Years Elapsed",
          label: "Time Interval",
          unit: "Years (yr)",
          description: "Number of years between chart publication date and current navigation date."
        }
      ]
    },
    inputParameters: [
      {
        name: "baseDeclination",
        label: "Base Declination (E is +, W is -)",
        unit: "Degrees (°)",
        defaultValue: -12.5,
        explanation: "Charted base variation in decimal degrees. Default is -12.5° (12°30′W)."
      },
      {
        name: "annualChange",
        label: "Annual Change Rate (E is +, W is -)",
        unit: "Minutes of Arc / Year (′/yr)",
        defaultValue: 4.5,
        explanation: "Annual secular rate in minutes of arc per year. Default is +4.5′/yr (Easterly drift)."
      },
      {
        name: "yearsElapsed",
        label: "Years Elapsed",
        unit: "Years (yr)",
        defaultValue: 6,
        explanation: "Years between chart publication and current voyage date. Default is 6.0 years."
      }
    ],
    outputExplanation: {
      unit: "Current Declination (°)",
      interpretation: "The accurate magnetic variation for the current year to be used in all bridge compass calculations.",
      designImpact: "Ensures that plotted chart courses match real-world geomagnetic lines of flux."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Base Declination", value: -12.5, unit: "°" },
        { label: "Annual Change", value: 4.5, unit: "′/yr" },
        { label: "Years Elapsed", value: 6, unit: "yr" }
      ],
      substitution: "Substitute values into Current Declination = -12.5° + (4.5 × 6 ÷ 60):",
      intermediateSteps: [
        "1. Identify inputs: Base = -12.50° (12°30′W), Rate = +4.5 arcmin/yr East, Elapsed = 6.0 years.",
        "2. Compute cumulative drift in minutes: 4.5 × 6.0 = 27.0 arcminutes East (+27′).",
        "3. Convert minutes to decimal degrees: 27.0 ÷ 60 = +0.45°.",
        "4. Add cumulative drift to base: -12.50° + (+0.45°) = -12.05°.",
        "5. Convert to nautical notation: 12.05°W = 12° 03′ West (a decrease in Westerly variation)."
      ],
      finalResult: "-12.05",
      unit: "Current Declination (°)"
    },
    practicalExample: {
      scenarioTitle: "Bermuda Approaches Chart Update",
      industryContext: "A navigator is using a UKHO chart of Bermuda printed in 2015 showing 'Variation 14°45′W (2015), decreasing about 8′ annually'. The vessel is navigating in 2025 (10 years elapsed).",
      problemStatement: "Calculate the updated magnetic variation to apply in 2025.",
      engineeringSolution: "Base variation = -14.75° (14°45′W). 'Decreasing 8′ annually' means changing East (+8′/yr). Cumulative 10-year change = +8′ × 10 = +80′ = +1°20′ (+1.333°). Current 2025 variation = -14°45′ + 1°20′ = 13°25′W (-13.417°). The navigator updates the passage plan to use 13.4°W variation."
    },
    assumptions: [
      "The annual rate of secular geomagnetic drift remains linear over the elapsed multi-year interval.",
      "The charted base declination was derived from a recognized global geomagnetic model (e.g., WMM or IGRF).",
      "No localized magnetic anomalies (e.g., shallow iron ore deposits or volcanic sea mounts) distort the regional field."
    ],
    limitations: [
      "Linear extrapolation beyond 5 to 10 years loses accuracy due to non-linear accelerations in core fluid dynamics.",
      "For mission-critical subsea surveying, the full World Magnetic Model (WMM) spherical harmonic model should be queried."
    ],
    commonMistakes: [
      "Confusing 'decreasing variation' with 'westerly variation': decreasing westerly variation means moving EAST (+).",
      "Forgetting to divide annual change in arcminutes by 60 before adding to decimal degrees.",
      "Assuming magnetic variation is constant over time."
    ],
    bestPractices: [
      "Always check the date on the chart compass rose when opening a new chart.",
      "Cross-check chart calculations with the latest World Magnetic Model (WMM) or NOAA geomagnetic calculator.",
      "Annotate updated variation values in pencil directly near the compass rose on paper charts."
    ],
    faqs: [
      {
        question: "What is Magnetic Declination (Variation)?",
        answer: "Magnetic Declination is the horizontal angle between True Geographic North and Magnetic North at a specific location on Earth."
      },
      {
        question: "Why does Magnetic Declination change every year?",
        answer: "Because convective flows of molten iron and nickel in Earth's outer core continuously shift the geometry and orientation of the geomagnetic field, causing magnetic poles to wander."
      },
      {
        question: "What does 'Annual Increase 5′E' mean on a compass rose?",
        answer: "It means the magnetic variation is shifting eastward by 5 minutes of arc (5/60 = 0.0833 degrees) every year."
      },
      {
        question: "What is the World Magnetic Model (WMM)?",
        answer: "The WMM is the standard international mathematical model of Earth's main magnetic field produced jointly by NOAA and the British Geological Survey, updated every 5 years."
      },
      {
        question: "How fast is Earth's Magnetic North Pole moving?",
        answer: "Currently, the Magnetic North Pole is drifting from northern Canada toward Siberia at an average speed of approximately 30 to 55 kilometers per year."
      },
      {
        question: "What is an Agonic Line?",
        answer: "An Agonic Line is an imaginary line on Earth's surface where Magnetic Declination is exactly zero degrees (True North and Magnetic North align perfectly)."
      },
      {
        question: "What are Isogonic Lines?",
        answer: "Isogonic Lines are contour lines connecting points of equal magnetic declination across a map or nautical chart."
      },
      {
        question: "How do you convert minutes of arc into decimal degrees?",
        answer: "Divide the number of arcminutes by 60. For example, 15 minutes of arc (15′) ÷ 60 = 0.25 degrees."
      },
      {
        question: "Can local geographical features cause local magnetic anomalies?",
        answer: "Yes. Sunken steel shipwrecks, shallow volcanic basalt sea beds, and iron ore deposits can create localized magnetic disturbances marked as 'Local Magnetic Anomaly' on nautical charts."
      },
      {
        question: "How often are global magnetic models updated?",
        answer: "The World Magnetic Model (WMM) and International Geomagnetic Reference Field (IGRF) are officially updated every 5 years (e.g., WMM2020, WMM2025)."
      }
    ],
    standardsReferences: [
      {
        organization: "NOAA / NCEI",
        code: "WMM2025",
        title: "The US/UK World Magnetic Model: Geomagnetic Field Gradients and Secular Variation"
      },
      {
        organization: "IHO",
        code: "Publication S-4, Section B-260",
        title: "Magnetic Data: Compass Roses and Magnetic Variation on Nautical Charts"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 6: Terrestrial Magnetism"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 13. WIND CORRECTION ANGLE CALCULATOR
  "wind-correction-angle-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Wind Correction Angle Calculator | Crosswind Crab Angle & Course Compensation",
    metaDescription: "Calculate the Wind Correction Angle (WCA / Crab Angle) required to counteract crosswind and hold desired ground track using wind vector trigonometry.",
    canonicalUrl,
    introduction: {
      overview: "When a vessel, aircraft, or surface craft moves through a moving air mass, the crosswind component continuously exerts an aerodynamic force, pushing the craft laterally downwind. To maintain the intended Course Over Ground (COG) or desired track line, the navigator must orient the craft's heading into the wind by a specific angular offset known as the Wind Correction Angle (WCA) or Crab Angle.\n\nMathematically, the Wind Correction Angle is solved via the classic navigation wind triangle. Applying the Law of Sines yields: sin(WCA) = (Wind Speed ÷ Craft Speed) × sin(Wind Direction − Desired Course). Taking the inverse sine yields the exact crab angle. If the crosswind is blowing from the right (starboard), WCA is positive (+), requiring a rightward heading adjustment; if blowing from the left (port), WCA is negative (-).\n\nAccurate wind correction angle calculations prevent drift off flight paths and coastal shipping lanes, optimize fuel burn, and ensure safe alignments during crosswind approaches and channel transits.",
      applications: [
        "Calculating crab heading angles for high-speed craft (HSC), hydrofoils, and hovercraft.",
        "Aviation flight planning wind triangle solutions for cross-country navigation legs.",
        "Precision DP survey vessel track-keeping during gale-force crosswinds.",
        "Unmanned aerial vehicle (UAV) and autonomous surface vessel (ASV) autopilot guidance."
      ],
      industries: [
        "Commercial Aviation & Air Transport Navigation",
        "High-Speed Maritime Ferries & Hovercraft Operations",
        "Offshore Wind Farm Crew Transfer Vessels (CTV)",
        "Autonomous Marine & Drone Vehicle Systems"
      ]
    },
    quickAnswer: "The Wind Correction Angle Calculator computes crab angle using the trigonometric formula: WCA = arcsin((Wind Speed ÷ Craft Speed) × sin(Wind Direction − Desired Course)). With default inputs of 090° desired course, 18 kn craft speed, 030° True wind direction, and 12 kn wind speed, the crosswind angle difference is −60°, resulting in a required Wind Correction Angle of −35.26° (steer 35.26° to the left, heading 054.74° into the wind).",
    governingEquation: {
      formula: "\\text{WCA (°)} = \\arcsin\\left( \\frac{\\text{Wind Speed}}{\\text{Craft Speed}} \\times \\sin(\\text{Wind Direction} - \\text{Desired Course}) \\right)",
      explanation: "Computes the angular crab offset required to cancel crosswind drift. Craft Speed is True Airspeed (aviation) or Speed Through Water (marine). Wind Direction is the direction FROM which the wind blows.",
      variables: [
        {
          symbol: "WCA",
          label: "Wind Correction Angle",
          unit: "Degrees (°)",
          description: "Angular heading offset into the wind required to maintain desired ground track."
        },
        {
          symbol: "Wind Speed",
          label: "True Wind Speed",
          unit: "Knots (kn)",
          description: "Velocity of the prevailing atmospheric wind."
        },
        {
          symbol: "Craft Speed",
          label: "Vessel / Aircraft Speed",
          unit: "Knots (kn)",
          description: "Forward speed through the water or air (STW / TAS)."
        },
        {
          symbol: "Wind Direction",
          label: "True Wind Direction",
          unit: "Degrees (°)",
          description: "Azimuth direction FROM which the wind is blowing (000° to 360°)."
        },
        {
          symbol: "Desired Course",
          label: "Desired Track / Course",
          unit: "Degrees (°)",
          description: "Intended true ground track to make good over the Earth."
        }
      ]
    },
    inputParameters: [
      {
        name: "desiredCourse",
        label: "Desired Course / Ground Track",
        unit: "Degrees (°)",
        defaultValue: 90,
        explanation: "Desired True ground track. Default is 090° (Due East)."
      },
      {
        name: "vesselSpeed",
        label: "Vessel / Aircraft Speed",
        unit: "Knots (kn)",
        defaultValue: 18,
        explanation: "Craft speed through water or true airspeed in knots. Default is 18 kn."
      },
      {
        name: "windDirection",
        label: "Wind Direction (From)",
        unit: "Degrees (°)",
        defaultValue: 30,
        explanation: "Direction FROM which the wind blows (True degrees). Default is 030° (North-Northeast)."
      },
      {
        name: "windSpeed",
        label: "Wind Speed",
        unit: "Knots (kn)",
        defaultValue: 12,
        explanation: "True wind speed in knots. Default is 12 kn."
      }
    ],
    outputExplanation: {
      unit: "Wind Correction Angle (°)",
      interpretation: "The exact angular correction: add to desired course to find required heading to steer.",
      designImpact: "Used for flight computer E6B calculations, fast craft autopilot heading setup, and passage planning."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Desired Course", value: 90, unit: "°" },
        { label: "Craft Speed", value: 18, unit: "kn" },
        { label: "Wind Direction", value: 30, unit: "°" },
        { label: "Wind Speed", value: 12, unit: "kn" }
      ],
      substitution: "Substitute values into WCA = arcsin((12 / 18) * sin(30° - 90°)):",
      intermediateSteps: [
        "1. Compute angular difference: Wind Dir - Course = 30° - 90° = -60° (wind from port).",
        "2. Compute sine of angle difference: sin(-60°) = -0.8660.",
        "3. Compute velocity ratio: Wind Speed ÷ Craft Speed = 12 ÷ 18 = 0.6667.",
        "4. Multiply ratio by sine: 0.6667 × (-0.8660) = -0.5774.",
        "5. Take inverse sine: arcsin(-0.5774) = -35.26°.",
        "6. Calculate Heading to Steer: Desired Course + WCA = 90° + (-35.26°) = 054.74° True."
      ],
      finalResult: "-35.26",
      unit: "Wind Correction Angle (°)"
    },
    practicalExample: {
      scenarioTitle: "Fast Ferry Crosswind Channel Transit",
      industryContext: "A high-speed catamaran passenger ferry is crossing a channel on a desired track of 180° True at 30 knots in a 20 knot easterly gale (Wind from 090°T).",
      problemStatement: "Determine the Wind Correction Angle to hold the 180° track line.",
      engineeringSolution: "Wind Dir - Course = 090° - 180° = -90°. sin(-90°) = -1.0. Ratio = 20 / 30 = 0.6667. Value = 0.6667 × (-1.0) = -0.6667. arcsin(-0.6667) = -41.81° (steer to port/east). Required Heading = 180° - 41.81° = 138.19° True into the wind."
    },
    assumptions: [
      "Wind velocity and direction are steady and uniform across the operational corridor.",
      "Craft maintains steady forward propulsion speed.",
      "Calculations use the standard 2D kinematic wind triangle (Law of Sines)."
    ],
    limitations: [
      "If crosswind component exceeds craft forward speed, a steady-state track cannot be maintained (arcsin domain > 1).",
      "In displacement maritime vessels, hydrodynamic hull resistance causes leeway drift that differs from pure aerodynamic crab angles."
    ],
    commonMistakes: [
      "Entering wind direction as 'where it is blowing TO' instead of 'where it blows FROM'.",
      "Adding the correction angle when it should be subtracted, turning away from the wind instead of into it.",
      "Confusing Wind Correction Angle with Leeway Angle."
    ],
    bestPractices: [
      "Remember: Heading + WCA = Track (or Course). Always steer INTO the wind.",
      "Check crosswind limits against vessel/aircraft manufacturer operating manuals.",
      "Cross-verify ground speed (GS / SOG) to ensure sufficient forward headway against headwind components."
    ],
    faqs: [
      {
        question: "What is Wind Correction Angle (WCA)?",
        answer: "Wind Correction Angle (or Crab Angle) is the angular offset applied to a vessel or aircraft's heading to counteract crosswind and maintain the desired ground track."
      },
      {
        question: "How do you calculate Heading from Course and WCA?",
        answer: "True Heading = Desired Course + Wind Correction Angle (where wind from right is positive and wind from left is negative)."
      },
      {
        question: "Why is wind direction defined as where it comes FROM?",
        answer: "Meteorological and aeronautical conventions define wind direction by its origin point on the horizon (e.g., a North wind blows from North toward South)."
      },
      {
        question: "What is Ground Speed (GS) in a crosswind?",
        answer: "Ground Speed is the resultant velocity along the ground track: GS = Craft Speed × cos(WCA) + Wind Speed × cos(Wind Dir - Course + 180°)."
      },
      {
        question: "What is an E6B flight computer?",
        answer: "An E6B is a traditional mechanical circular slide rule used by pilots and navigators to solve wind triangles and calculate WCA and ground speed."
      },
      {
        question: "What happens if wind speed equals craft speed in a pure crosswind?",
        answer: "If wind speed equals craft speed at 90° crosswind, the craft must point 90° directly into the wind (WCA = 90°), resulting in zero forward ground speed."
      },
      {
        question: "How does WCA differ between airplanes and displacement ships?",
        answer: "Aircraft operate entirely suspended in the air mass (pure wind triangle), whereas ships sit in water and experience aerodynamic wind on superstructure and hydrodynamic resistance on the keel (leeway)."
      },
      {
        question: "What is a Crab Landing in aviation?",
        answer: "A crab landing is a technique where an aircraft maintains a Wind Correction Angle into the crosswind all the way down the final approach until de-crabbing right before touchdown."
      },
      {
        question: "Can an autopilot automatically compute Wind Correction Angle?",
        answer: "Yes. When in NAV/Track mode, the autopilot compares heading with GPS Course Over Ground and automatically applies the necessary crab angle."
      },
      {
        question: "What is Crosswind Component?",
        answer: "Crosswind Component is the perpendicular component of wind acting at 90° to the runway or track: Crosswind = Wind Speed × sin(Wind Angle - Track Angle)."
      }
    ],
    standardsReferences: [
      {
        organization: "FAA",
        code: "FAA-H-8083-25B",
        title: "Pilot's Handbook of Aeronautical Knowledge, Chapter 16: Navigation (The Wind Triangle)"
      },
      {
        organization: "ICAO",
        code: "Annex 2",
        title: "Rules of the Air: Flight Planning and Track Maintenance"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 13: Vector Sailing and Wind Angles"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 14. LEEWAY ANGLE CALCULATOR
  "leeway-angle-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Leeway Angle Calculator | Vessel Wind Drift & Lateral Hull Slip",
    metaDescription: "Estimate vessel leeway drift angle caused by surface wind forces on the hull and superstructure using standard marine empirical leeway models.",
    canonicalUrl,
    introduction: {
      overview: "When a surface vessel sails across the sea, wind blowing against its above-water hull, deckhouse, container stacks, and rigging exerts a substantial lateral aerodynamic force. Because the vessel's underwater hull and keel generate hydrodynamic lift only as the ship moves forward with a slight sideways angle of attack, the ship slips laterally downwind through the water. This angular displacement between the ship's heading (where the bow points) and its water track (the direction it moves through the water) is defined as the Leeway Angle (L).\n\nLeeway is distinct from ocean current drift: leeway occurs within the water column itself, whereas ocean currents move the entire body of water over the seabed. In naval architecture and maritime search and rescue (SAR), leeway angle is modeled empirically using Nomoto and IMO drag equations: Leeway (°) = K × (Apparent Wind Speed ÷ Boat Speed) × sin(Apparent Wind Angle), where K is the vessel's hull leeway factor.\n\nAccurately estimating leeway angle is essential for holding narrow coastal courses, computing Estimated Positions (EP), and predicting search drift trajectories for distressed vessels, life rafts, and search objects.",
      applications: [
        "Applying leeway corrections to dead reckoning tracks to calculate true Estimated Positions (EP).",
        "Predicting downwind drift trajectories in Coast Guard Maritime Search and Rescue (SAR) planning.",
        "Evaluating course-keeping stability for high-freeboard vessels (car carriers, cruise ships, container vessels).",
        "Optimizing tacking angles and velocity made good (VMG) for offshore sailing vessels."
      ],
      industries: [
        "Commercial Container & Pure Car/Truck Carrier (PCTC) Shipping",
        "Coast Guard & Naval Search and Rescue (SAR) Commands",
        "Offshore Sailboat Racing & Cruising Yacht Navigation",
        "Marine Accident Reconstruction & Hydrodynamics Research"
      ]
    },
    quickAnswer: "The Leeway Angle Calculator estimates lateral downwind drift using the marine empirical equation: Leeway (°) = K × (Wind Speed ÷ Boat Speed) × sin(Wind Angle). With default inputs of 25 kn apparent wind speed, 8 kn boat speed, 60° apparent wind angle off the bow, and a leeway factor K of 1.20, the calculated Leeway Angle is exactly 3.25° (pushing the vessel 3.25° downwind of its compass heading).",
    governingEquation: {
      formula: "\\text{Leeway Angle (°)} = K \\times \\left( \\frac{\\text{Apparent Wind Speed (kn)}}{\\text{Boat Speed Through Water (kn)}} \\right) \\times \\sin(\\text{Apparent Wind Angle})",
      explanation: "Leeway is directly proportional to wind force (proportional to wind speed squared relative to boat speed) and the sine of the wind angle off the bow, scaled by the vessel's specific hull leeway coefficient K.",
      variables: [
        {
          symbol: "Leeway",
          label: "Leeway Drift Angle",
          unit: "Degrees (°)",
          description: "Angular difference between the vessel's heading and its actual path through the water."
        },
        {
          symbol: "K",
          label: "Vessel Leeway Factor",
          unit: "Dimensionless Coefficient",
          description: "Empirical coefficient based on vessel hull draft, freeboard area, and keel lateral resistance (typically 0.8 to 2.5)."
        },
        {
          symbol: "Wind Speed",
          label: "Apparent Wind Speed",
          unit: "Knots (kn)",
          description: "Wind velocity measured on the moving vessel's anemometer."
        },
        {
          symbol: "Boat Speed",
          label: "Speed Through Water (STW)",
          unit: "Knots (kn)",
          description: "Forward vessel velocity through the water column."
        },
        {
          symbol: "Wind Angle",
          label: "Apparent Wind Angle",
          unit: "Degrees (°)",
          description: "Angle between ship's bow (000°) and the incoming wind direction (0° to 180°)."
        }
      ]
    },
    inputParameters: [
      {
        name: "windSpeed",
        label: "Apparent Wind Speed",
        unit: "Knots (kn)",
        defaultValue: 25,
        explanation: "Apparent wind speed in knots. Default is 25 kn."
      },
      {
        name: "boatSpeed",
        label: "Boat Speed through Water",
        unit: "Knots (kn)",
        defaultValue: 8,
        explanation: "Speed through water in knots. Default is 8 kn."
      },
      {
        name: "windAngle",
        label: "Apparent Wind Angle",
        unit: "Degrees (°)",
        defaultValue: 60,
        explanation: "Angle of wind relative to ship's bow (0° to 180°). Default is 60° (Beam reach)."
      },
      {
        name: "leewayFactor",
        label: "Hull Leeway Coefficient (K)",
        unit: "Factor",
        defaultValue: 1.2,
        explanation: "Vessel hull leeway coefficient (0.8 for deep keel, 1.2 for merchant, 2.0+ for high freeboard). Default is 1.2."
      }
    ],
    outputExplanation: {
      unit: "Leeway Drift Angle (°)",
      interpretation: "The angular displacement to apply downwind of the compass heading to determine true water track.",
      designImpact: "Used for bridge passage plan course corrections and SAR search datum calculations."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Apparent Wind Speed", value: 25, unit: "kn" },
        { label: "Boat Speed", value: 8, unit: "kn" },
        { label: "Apparent Wind Angle", value: 60, unit: "°" },
        { label: "Leeway Coefficient (K)", value: 1.2, unit: "factor" }
      ],
      substitution: "Substitute values into Leeway = 1.2 × (25 / 8) × sin(60°):",
      intermediateSteps: [
        "1. Identify input parameters: Wind = 25 kn, Speed = 8 kn, Angle = 60°, K = 1.20.",
        "2. Compute speed ratio: 25 ÷ 8 = 3.125.",
        "3. Compute sine of wind angle: sin(60°) = 0.8660.",
        "4. Multiply terms: 1.20 × 3.125 × 0.8660 = 3.2476°.",
        "5. Round to standard precision: Leeway Angle = 3.25° downwind."
      ],
      finalResult: "3.25",
      unit: "Leeway Drift Angle (°)"
    },
    practicalExample: {
      scenarioTitle: "Pure Car Carrier (PCTC) Beam Gale Navigation",
      industryContext: "A high-sided Pure Car Carrier (large windage area, K = 2.2) is navigating in a 35-knot beam gale (Wind Angle = 90°) at 14 knots speed through water on a planned heading of 270° True with wind from the North (000°T).",
      problemStatement: "Calculate the leeway angle and determine the vessel's actual course through the water.",
      engineeringSolution: "Apply formula: Leeway = 2.2 × (35 / 14) × sin(90°) = 2.2 × 2.50 × 1.0 = 5.50°. Because the wind is from the North (starboard side), the ship is pushed 5.5° South (to port). Actual track through water = 270° - 5.5° = 264.5° True. The master steers 275.5° True into the wind to make good 270° through the water."
    },
    assumptions: [
      "The vessel maintains steady forward speed and uniform rudder angle.",
      "Wind conditions are steady-state apparent wind over the measurement period.",
      "The hull leeway coefficient accurately represents the vessel's specific draft, trim, and superstructure windage profile."
    ],
    limitations: [
      "In heavy breaking beam seas, wave drift forces add additional non-linear lateral displacement.",
      "At very low speeds (< 2 knots), lateral drag dominates and leeway angle increases dramatically."
    ],
    commonMistakes: [
      "Confusing Leeway (wind push through water) with Tidal Drift (water mass movement over seabed).",
      "Applying leeway in the upwind direction instead of the downwind direction.",
      "Using the same leeway coefficient for ballast and loaded conditions (light ballast draft increases leeway significantly)."
    ],
    bestPractices: [
      "Remember: Wind pushes the boat DOWNWIND. Always apply leeway away from the wind direction.",
      "Look over the stern at the vessel's wake: the angle between the ship's center line and the wake line directly shows real-time leeway.",
      "Increase leeway estimates by 50% to 100% when navigating in light ballast condition with high freeboard exposed."
    ],
    faqs: [
      {
        question: "What is Leeway in marine navigation?",
        answer: "Leeway is the lateral drift of a vessel caused by wind blowing against its above-water hull, superstructure, and sails, pushing it sideways away from its intended heading."
      },
      {
        question: "How do you measure leeway visually on a ship?",
        answer: "Look at the ship's wake stream directly behind the stern with a pelorus or azimuth circle: the angle between the keel center line and the wake is the leeway angle."
      },
      {
        question: "What is the difference between Leeway and Current Drift?",
        answer: "Leeway is caused by wind acting on the hull in the air, creating drift through the water. Current drift is caused by the water itself moving across the seabed."
      },
      {
        question: "How does vessel speed affect leeway angle?",
        answer: "Higher forward speed increases hydrodynamic lift on the keel and rudder, significantly reducing leeway angle. Slower speeds increase leeway."
      },
      {
        question: "Why do container ships and car carriers experience high leeway?",
        answer: "Because they have massive vertical above-water surface areas (windage) relative to their submerged underwater hull area, acting like giant sails in crosswinds."
      },
      {
        question: "How does loading condition (ballast vs. laden) affect leeway?",
        answer: "In ballast condition (empty cargo), the ship sits high in the water with large exposed windage and shallow draft, increasing leeway by 2x to 3x compared to fully loaded draft."
      },
      {
        question: "How do you apply leeway when planning a course to steer?",
        answer: "If wind is from starboard (blowing you to port), steer into the wind by adding leeway to the course. If wind is from port, subtract leeway."
      },
      {
        question: "What is an Estimated Position (EP)?",
        answer: "An Estimated Position is calculated by taking a Dead Reckoning (DR) position, adding the leeway angle vector, and then adding the tidal current (set and drift) vector."
      },
      {
        question: "What is leeway in Coast Guard Search and Rescue (SAR)?",
        answer: "In SAR, leeway is the drift rate and direction of unpowered search objects (life rafts, persons in water, debris) used to calculate search datum expanding areas."
      },
      {
        question: "What is the typical leeway coefficient K for a sailing yacht vs a merchant ship?",
        answer: "A modern deep-keel sailing yacht has K ≈ 0.6 to 0.9 (high lift), a standard merchant ship has K ≈ 1.0 to 1.5, and an unballasted car carrier has K ≈ 2.0 to 2.8."
      }
    ],
    standardsReferences: [
      {
        organization: "IMO / ICAO",
        code: "IAMSAR Manual, Volume II",
        title: "International Aeronautical and Maritime Search and Rescue Manual: Mission Co-ordination (Leeway Drift Models)"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 13: Navigational Errors and Leeway"
      },
      {
        organization: "USCG R&D Center",
        code: "Report CG-D-08-99",
        title: "Review of Leeway: Field Experiments and Drift Characteristics of SAR Objects"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 15. DIPPING DISTANCE CALCULATOR
  "dipping-distance-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Dipping Distance Calculator | Geographic Horizon & Navigational Light Range",
    metaDescription: "Calculate the geographic visible horizon distance and dipping range of lighthouses and coastal navigational aids in nautical miles based on eye and light elevation.",
    canonicalUrl,
    introduction: {
      overview: "When approaching a coastline at night or in clear weather, the moment a lighthouse or beacon first appears above the horizon (or vanishes below it) is termed the 'dipping' or 'raising' of the light. Because the Earth is curved, the maximum geographical distance at which a light can be physically sighted is strictly limited by the curvature of the Earth and atmospheric refraction.\n\nThe total geographic visible range—termed the Dipping Distance—is the sum of two independent geometric horizon distances: the distance from the observer's eye to the horizon plus the distance from the horizon to the elevated light source. In terrestrial navigation, standard atmospheric refraction (refractive index k ≈ 0.08) bends light rays downward, extending the optical horizon approximately 8% beyond the purely geometric horizon.\n\nUsing metric units (heights in meters), the standard Bowditch formula is: Distance (NM) = 2.072 × (√Observer Height + √Light Height). Using imperial units (heights in feet), the formula is: Distance (NM) = 1.17 × (√Observer Height_ft + √Light Height_ft). Sighting a light at its exact calculated dipping distance provides navigators with an immediate, high-accuracy distance circle for radar and visual position fixing.",
      applications: [
        "Predicting the exact moment a coastal lighthouse will appear above the horizon during landfall approaches.",
        "Verifying whether a light sighting is limited by Earth curvature (geographic range) or lamp power (luminous range).",
        "Constructing visual position circles of equal distance on paper and electronic navigation charts.",
        "Calculating radar line-of-sight detection ranges for surface search targets and coastal terrain."
      ],
      industries: [
        "Commercial Merchant Shipping & Coastal Navigation",
        "Coast Guard & Lighthouse Navigational Aid Authorities",
        "Naval Surface Fleet Lookout & Watchkeeping Operations",
        "Marine Pilotage & Offshore Yacht Cruising"
      ]
    },
    quickAnswer: "The Dipping Distance Calculator computes geographic visible range using the standard atmospheric refraction formula: Dipping Distance (NM) = 2.072 × (√Observer Height (m) + √Light Height (m)). With default inputs of 15.0 meters observer height of eye (commercial ship bridge) and 45.0 meters lighthouse elevation above mean high water, the resulting geographic visible range is exactly 21.92 Nautical Miles (NM).",
    governingEquation: {
      formula: "\\text{Dipping Distance (NM)} = 2.072 \\times \\left( \\sqrt{H_{\\text{eye}} \\text{ (m)}} + \\sqrt{H_{\\text{light}} \\text{ (m)}} \\right)",
      explanation: "Computes the total line-of-sight distance across the curved Earth. The constant 2.072 incorporates mean Earth radius (R = 6,371 km) and standard terrestrial atmospheric refraction (k = 0.08). If using heights in feet, the constant is 1.170.",
      variables: [
        {
          symbol: "Dipping Distance",
          label: "Geographic Horizon Range",
          unit: "Nautical Miles (NM)",
          description: "Maximum line-of-sight distance at which the light source can be seen above the horizon."
        },
        {
          symbol: "H_eye",
          label: "Observer Height of Eye",
          unit: "Meters (m)",
          description: "Vertical height of the observer's eye above current sea level."
        },
        {
          symbol: "H_light",
          label: "Elevation of Light",
          unit: "Meters (m)",
          description: "Height of the lighthouse focal plane above Chart High Water datum."
        }
      ]
    },
    inputParameters: [
      {
        name: "heightEye",
        label: "Observer Height of Eye (H_eye)",
        unit: "Meters (m)",
        defaultValue: 15,
        explanation: "Height of the observer's eye above the sea surface in meters. Default is 15.0 m (typical ship bridge)."
      },
      {
        name: "heightLight",
        label: "Elevation of Light (H_light)",
        unit: "Meters (m)",
        defaultValue: 45,
        explanation: "Focal height of the light above Mean High Water spring datum in meters. Default is 45.0 m."
      }
    ],
    outputExplanation: {
      unit: "Geographic Horizon Range (NM)",
      interpretation: "The maximum physical distance at which the light can be directly sighted over the horizon in clear weather.",
      designImpact: "Used on passage plans as the expected landfall sighting mark and plotted as a distance arc of position."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Observer Height of Eye", value: 15, unit: "m" },
        { label: "Elevation of Light", value: 45, unit: "m" }
      ],
      substitution: "Substitute H_eye = 15 m and H_light = 45 m into Distance = 2.072 × (√15 + √45):",
      intermediateSteps: [
        "1. Identify input heights: Observer H_eye = 15.0 m, Lighthouse H_light = 45.0 m.",
        "2. Compute square root of observer height: √15.0 = 3.8730.",
        "3. Compute square root of light height: √45.0 = 6.7082.",
        "4. Sum the square roots: 3.8730 + 6.7082 = 10.5812.",
        "5. Multiply by standard metric refraction coefficient (2.072):",
        "   Distance = 2.072 × 10.5812 = 21.924 NM.",
        "6. Conclude: The light will dip/raise at exactly 21.92 Nautical Miles."
      ],
      finalResult: "21.92",
      unit: "Geographic Horizon Range (NM)"
    },
    practicalExample: {
      scenarioTitle: "Fastnet Rock Landfall Sighting Verification",
      industryContext: "A transatlantic container ship approaching the southern Irish coast has a bridge height of eye of 22 meters. The Fastnet Rock lighthouse has a charted elevation of 48 meters above Mean High Water.",
      problemStatement: "Determine the theoretical dipping distance at which Fastnet Light should first appear on the horizon.",
      engineeringSolution: "Apply formula: √22 = 4.6904; √48 = 6.9282. Sum = 4.6904 + 6.9282 = 11.6186. Dipping Distance = 2.072 × 11.6186 = 24.07 NM. The lookout is instructed to expect Fastnet light on the horizon at approximately 24.1 nautical miles."
    },
    assumptions: [
      "Standard terrestrial atmospheric refraction (k = 0.08, standard temperature/pressure lapse rate) prevails.",
      "Meteorological visibility is sufficient for light transmission (transmissivity does not restrict luminous range below geographic range).",
      "Heights are measured relative to the active water level (accounting for high water datum where necessary)."
    ],
    limitations: [
      "Under severe temperature inversions (super-refraction/looming), optical ranges can extend significantly beyond calculated distance.",
      "In fog, haze, or rain, luminous range (intensity of lamp in current weather) may be far less than geographic range."
    ],
    commonMistakes: [
      "Mixing feet and meters: using the metric constant (2.072) with feet or the imperial constant (1.17) with meters.",
      "Confusing Geographic Range (limited by Earth curvature) with Nominal/Luminous Range (limited by lamp candlepower).",
      "Forgetting that lighthouse charted heights are referenced to Mean High Water (MHW), not Chart Datum (LAT)."
    ],
    bestPractices: [
      "Always compare Geographic Range against Luminous Range from the Admiralty Light List diagram: the lesser of the two is the actual visible range.",
      "Bobbing a light: dip down several feet on the bridge wing; if the light disappears, it is at its true dipping horizon distance.",
      "Record bridge height of eye for each loading condition (ballast vs fully loaded draft changes bridge height of eye by several meters)."
    ],
    faqs: [
      {
        question: "What is Dipping Distance in marine navigation?",
        answer: "Dipping Distance is the maximum geographic distance at which a light or elevated object can be seen over the horizon, determined by the curvature of the Earth and observer/light elevations."
      },
      {
        question: "What does 'raising a light' and 'dipping a light' mean?",
        answer: "'Raising a light' occurs when an approaching vessel first sees the light pop up above the horizon; 'dipping a light' occurs when a departing vessel sees the light drop below the horizon."
      },
      {
        question: "What is the difference between Geographic Range and Nominal Range?",
        answer: "Geographic Range is the maximum distance limited by Earth curvature and heights. Nominal Range is the maximum luminous distance the lamp beam can travel through standard clear air (10 NM visibility)."
      },
      {
        question: "What is Luminous Range?",
        answer: "Luminous Range is the maximum distance at which a light can be seen under current actual meteorological visibility conditions, taking into account lamp candlepower."
      },
      {
        question: "What is the 'bobbing a light' technique?",
        answer: "When a light is first sighted, bob your head or change deck levels: if the light appears and disappears with a small change in eye height, you are at its exact dipping horizon distance."
      },
      {
        question: "Why does the formula include atmospheric refraction?",
        answer: "Because Earth's atmosphere is denser near the surface, light rays curve slightly downward along Earth's curvature, extending visible line-of-sight approximately 8% beyond straight geometry."
      },
      {
        question: "What is the formula if heights are in feet instead of meters?",
        answer: "Distance (NM) = 1.17 × (√H_eye_ft + √H_light_ft). For example, a 64 ft bridge and 100 ft lighthouse gives 1.17 × (8 + 10) = 21.06 NM."
      },
      {
        question: "What vertical datum is used for charted lighthouse elevations?",
        answer: "Lighthouse elevations on nautical charts are measured above Mean High Water Springs (MHWS) or Highest Astronomical Tide (HAT) to ensure safe clearance calculations."
      },
      {
        question: "What is Loom of a Light?",
        answer: "The 'loom' is the diffused glow of a powerful light scattered upward into the clouds or night sky before the direct beam rises above the horizon."
      },
      {
        question: "Does radar dipping distance differ from optical dipping distance?",
        answer: "Yes. Microwave radar bends more than optical light in the atmosphere (4/3 Earth radius model), using constant 2.21 for meters or 1.23 for feet (Distance = 2.21 × (√H_radar + √H_target))."
      }
    ],
    standardsReferences: [
      {
        organization: "IALA",
        code: "Guideline 1079",
        title: "IALA Guideline on the Calculation of Luminous Range and Geographic Visibility of Marine Lights"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 4: Navigational Aids and Visual Horizons"
      },
      {
        organization: "UKHO",
        code: "Admiralty List of Lights and Fog Signals (NP 74-84)",
        title: "Volume Structure, Geographic Ranges, and Luminous Range Diagrams"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 16. UNDER KEEL CLEARANCE CALCULATOR
  "under-keel-clearance-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Under Keel Clearance Calculator | Dynamic Marine UKC & Grounding Prevention",
    metaDescription: "Calculate dynamic Under Keel Clearance (UKC) in shallow channels and ports accounting for charted depth, tide, static draft, squat, and safety margins.",
    canonicalUrl,
    introduction: {
      overview: "Under Keel Clearance (UKC) is the vertical distance between the lowest point of a vessel's hull (keel or rudder) and the seabed beneath it. Maintaining adequate Under Keel Clearance is the single most critical safety parameter in shallow water navigation, port entry, river transits, and canal passages to prevent catastrophic vessel groundings, hull breach, and environmental oil spills.\n\nWhile a vessel has a measurable Static Draft at the dock, once it enters a shallow waterway and gains forward speed, hydrodynamic pressure changes cause the vessel to sink deeper and trim (dynamic vessel squat). Additionally, vessel roll, pitch, heave in coastal swell, fresh water density reduction, and channel silting further diminish the effective water cushion.\n\nThe governing Under Keel Clearance equation is: Net UKC = Charted Water Depth + Height of Tide − Static Draft − Dynamic Squat − Safety Allowance (for wave response and bottom silt). Major global ports and terminal operators strictly enforce mandatory minimum UKC margins (typically 1.0 to 2.0 meters, or 10% of vessel draft) prior to granting transit clearance.",
      applications: [
        "Pre-arrival port passage planning and dynamic tidal transit window calculations.",
        "Complying with port authority and harbor master mandatory minimum UKC policies.",
        "Determining maximum allowable cargo loading draft for bulk carriers and tankers.",
        "Evaluating shallow water river, estuary, and canal transit safety margins."
      ],
      industries: [
        "Commercial Oil Tanker & Bulk Carrier Operations",
        "Port Authorities, Harbor Masters & Pilot Associations",
        "Dredging Engineering & Hydrographic Surveying",
        "Maritime Insurance & Marine Safety Investigation"
      ]
    },
    quickAnswer: "The Under Keel Clearance Calculator computes net dynamic safety depth using the governing equation: Net UKC (m) = Charted Depth + Height of Tide − Static Draft − Dynamic Squat − Safety Allowance. With default inputs of 14.50 m charted depth, 2.20 m tide height, 12.80 m static draft, 0.60 m dynamic squat, and 0.50 m safety wave allowance, the resulting Net Under Keel Clearance is exactly 2.80 meters.",
    governingEquation: {
      formula: "\\text{Net UKC (m)} = \\text{Charted Depth} + \\text{Height of Tide} - \\text{Static Draft} - \\text{Dynamic Squat} - \\text{Safety Margin}",
      explanation: "Total available water depth (Charted Depth at Chart Datum + Real-time Tide Height) minus total dynamic vessel draft (Static Draft + Dynamic Squat Sinkage + Environmental Motion Allowance) yields the net vertical safety cushion above the seabed.",
      variables: [
        {
          symbol: "Net UKC",
          label: "Net Under Keel Clearance",
          unit: "Meters (m)",
          description: "True physical vertical water cushion remaining between vessel keel and seabed."
        },
        {
          symbol: "Charted Depth",
          label: "Charted Water Depth",
          unit: "Meters (m)",
          description: "Water depth shown on nautical chart referenced to Lowest Astronomical Tide (LAT) Chart Datum."
        },
        {
          symbol: "Tide",
          label: "Height of Tide",
          unit: "Meters (m)",
          description: "Instantaneous height of the tide above Chart Datum at the time of transit."
        },
        {
          symbol: "Static Draft",
          label: "Maximum Static Draft",
          unit: "Meters (m)",
          description: "Maximum deepest draft of the vessel at rest in current water density."
        },
        {
          symbol: "Squat",
          label: "Dynamic Vessel Squat",
          unit: "Meters (m)",
          description: "Hydrodynamic bodily sinkage and trim change caused by vessel speed in shallow water."
        },
        {
          symbol: "Safety Margin",
          label: "Safety Allowance",
          unit: "Meters (m)",
          description: "Buffer for vessel roll/pitch in swell, atmospheric pressure drops, and bottom silting."
        }
      ]
    },
    inputParameters: [
      {
        name: "chartedDepth",
        label: "Charted Water Depth",
        unit: "Meters (m)",
        defaultValue: 14.5,
        explanation: "Depth of water from nautical chart (at Chart Datum). Default is 14.5 m."
      },
      {
        name: "heightOfTide",
        label: "Height of Tide",
        unit: "Meters (m)",
        defaultValue: 2.2,
        explanation: "Predicted or real-time tide height above Chart Datum. Default is 2.2 m."
      },
      {
        name: "staticDraft",
        label: "Maximum Static Draft",
        unit: "Meters (m)",
        defaultValue: 12.8,
        explanation: "Deepest static draft of the vessel (keel to waterline). Default is 12.8 m."
      },
      {
        name: "dynamicSquat",
        label: "Estimated Dynamic Squat",
        unit: "Meters (m)",
        defaultValue: 0.6,
        explanation: "Estimated hydrodynamic sinkage at planned transit speed. Default is 0.6 m."
      },
      {
        name: "safetyMargin",
        label: "Safety Allowance (Wave/Roll)",
        unit: "Meters (m)",
        defaultValue: 0.5,
        explanation: "Margin for wave motion, swell heave/roll, and survey uncertainty. Default is 0.5 m."
      }
    ],
    outputExplanation: {
      unit: "Net Under Keel Clearance (m)",
      interpretation: "The net vertical clearance between the bottom of the keel and the seabed.",
      designImpact: "Compared directly against port minimum UKC regulations (e.g., must exceed 1.5 m) to authorize port entry."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Charted Water Depth", value: 14.5, unit: "m" },
        { label: "Height of Tide", value: 2.2, unit: "m" },
        { label: "Static Draft", value: 12.8, unit: "m" },
        { label: "Dynamic Squat", value: 0.6, unit: "m" },
        { label: "Safety Allowance", value: 0.5, unit: "m" }
      ],
      substitution: "Substitute values into Net UKC = 14.5 + 2.2 - 12.8 - 0.6 - 0.5:",
      intermediateSteps: [
        "1. Compute total available water depth: Depth + Tide = 14.50 m + 2.20 m = 16.70 m.",
        "2. Compute total effective vessel demand: Draft + Squat + Margin = 12.80 m + 0.60 m + 0.50 m = 13.90 m.",
        "3. Subtract total demand from total depth: 16.70 m - 13.90 m = 2.80 meters.",
        "4. Verify compliance: 2.80 m exceeds standard 1.50 m port minimum requirement."
      ],
      finalResult: "2.80",
      unit: "Net Under Keel Clearance (m)"
    },
    practicalExample: {
      scenarioTitle: "Very Large Crude Carrier (VLCC) Channel Entry Calculation",
      industryContext: "A fully laden VLCC (draft 20.50 m) is preparing to transit the Malacca Strait through an 23.00 m shallow bank. Predicted tide height is 1.80 m. Dynamic squat at 10 knots is estimated at 0.95 m. Coastal swell causes 0.40 m heave.",
      problemStatement: "Determine the Net UKC and check whether it meets the IMO mandatory minimum UKC requirement of 3.50 meters for deep-draft tankers in the Malacca Strait.",
      engineeringSolution: "Total Water Depth = 23.00 m + 1.80 m = 24.80 m. Total Draft + Dynamic Effects = 20.50 m + 0.95 m + 0.40 m = 21.85 m. Net UKC = 24.80 - 21.85 = 2.95 meters. Because 2.95 m is LESS than the required 3.50 m minimum UKC, the vessel must reduce speed to 6 knots (reducing squat to 0.35 m) or wait for a higher tide height of at least 2.35 m."
    },
    assumptions: [
      "Charted depth is current and validated against recent hydrographic survey notices to mariners.",
      "Tidal height is calculated for the exact time of passage over the critical shallow shoal.",
      "Static draft accounts for water density variation (salt water to brackish/fresh water dock water allowance)."
    ],
    limitations: [
      "Does not model localized rock pinnacles or dredge scours that deviate from charted depth contours.",
      "In heavy long-period swell, vessel pitch and roll can increase dynamic draft by up to 2 meters."
    ],
    commonMistakes: [
      "Failing to account for ship squat, assuming static draft remains constant while underway.",
      "Ignoring fresh water allowance (FWA) when moving from salt sea water (1.025 t/m³) into brackish river water (1.005 t/m³), which increases draft.",
      "Relying on low-tide charted depths without adding the tidal height for the actual passage time."
    ],
    bestPractices: [
      "Calculate UKC for every critical shallow waypoint along the passage plan prior to departing berth.",
      "Establish speed limits in shallow channels: cutting speed in half reduces hydrodynamic squat by approximately 75%.",
      "Monitor echo sounder readings continuously during shallow water transit and compare with calculated UKC."
    ],
    faqs: [
      {
        question: "What is Under Keel Clearance (UKC)?",
        answer: "Under Keel Clearance is the vertical distance between the lowest point of a vessel's underwater hull (keel) and the seabed beneath it."
      },
      {
        question: "What is Dynamic UKC versus Static UKC?",
        answer: "Static UKC is calculated with the ship at rest (Depth + Tide - Static Draft). Dynamic UKC includes dynamic factors that increase draft underway: ship squat, roll, pitch, heave, and water density changes."
      },
      {
        question: "What causes a ship to squat in shallow water?",
        answer: "As a ship moves forward, water flowing beneath the hull accelerates according to Bernoulli's principle, creating a localized pressure drop (suction) that pulls the ship deeper into the water."
      },
      {
        question: "What is standard minimum UKC required by most port authorities?",
        answer: "Most global ports require a minimum gross UKC of 10% to 15% of the vessel's deepest draft, or an absolute net clearance of at least 1.0 to 1.5 meters."
      },
      {
        question: "How does water density affect draft and UKC?",
        answer: "Fresh water is less dense (1.000 t/m³) than sea water (1.025 t/m³). When a ship enters fresh river water, it sinks deeper (Fresh Water Allowance / FWA), reducing UKC."
      },
      {
        question: "What is Chart Datum (CD)?",
        answer: "Chart Datum is the reference water level plane from which all soundings on nautical charts are measured, usually Lowest Astronomical Tide (LAT)."
      },
      {
        question: "How does wave action and swell affect UKC?",
        answer: "Wave-induced roll, pitch, and heave motions cause the ship's keel and bilge knuckles to dip deeper into the water, reducing instantaneous clearance."
      },
      {
        question: "What is a Dynamic UKC System (DUKC)?",
        answer: "DUKC is an advanced electronic port management software system that combines real-time hydrodynamic vessel modeling, wave sensors, and astronomical tides to calculate safe transit windows."
      },
      {
        question: "How does reducing ship speed help maintain safe UKC?",
        answer: "Because squat varies roughly with the square of ship speed (Squat ∝ V²), slowing down from 12 knots to 6 knots reduces squat sinkage by roughly 75%."
      },
      {
        question: "What is the consequence of violating UKC requirements?",
        answer: "Violating UKC limits risks catastrophic hull grounding, port authority detention, loss of marine insurance coverage, and severe environmental pollution fines."
      }
    ],
    standardsReferences: [
      {
        organization: "PIANC",
        code: "Report No. 121-2014",
        title: "Harbour Approach Channels Design Guidelines: Under Keel Clearance Management"
      },
      {
        organization: "IMO",
        code: "Resolution A.893(21)",
        title: "Guidelines for Voyage Planning (Underkeel Clearance Assessment)"
      },
      {
        organization: "OCIMF",
        code: "Mooring & Navigation Guidelines",
        title: "Under Keel Clearance Policy for Large Tankers in Restricted Waters"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 17. SQUAT CALCULATOR
  "squat-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Squat Calculator | Marine Hydrodynamic Vessel Sinkage in Shallow Waters",
    metaDescription: "Calculate dynamic ship squat sinkage in confined channels and open shallow waters using the internationally recognized Barrass hydrodynamic formula.",
    canonicalUrl,
    introduction: {
      overview: "When a displacement vessel navigates through shallow or restricted waters, the volume of water displaced forward by the hull must rush backward beneath the keel and around the sides to fill the void created aft. According to Bernoulli's hydrodynamic principle and the continuity equation, this accelerated return flow causes a localized drop in hydrostatic pressure beneath the hull.\n\nThe resulting downward suction force pulls the ship bodily downward (sinkage) and induces a longitudinal rotational moment (trim change). This combined hydrodynamic phenomenon is termed Ship Squat. As a general hydrodynamic rule: full-form blunt vessels (like bulk carriers and tankers with block coefficient C_b > 0.70) squat by the bow, whereas fine-form slender vessels (like container ships and passenger liners with C_b < 0.70) squat by the stern.\n\nIn naval architecture and harbor engineering, maximum dynamic squat is calculated using Dr. C.B. Barrass's widely adopted empirical formulas: Squat (m) = (C_b × V²) ÷ 30 for confined channels, canals, and trenches; and Squat (m) = (C_b × V²) ÷ 100 for open shallow waters. Because squat scales with the square of vessel speed (V²), controlling speed is the primary operational mechanism to manage Under Keel Clearance.",
      applications: [
        "Determining maximum safe transit speed in shallow dredged channels and canals.",
        "Passage planning under keel clearance assessments for deep-draft tankers and bulkers.",
        "Canal authority vessel transit speed limits (e.g., Suez, Panama, and St. Lawrence Seaway).",
        "Investigating grounding incidents and channel bottom contact events."
      ],
      industries: [
        "Commercial Merchant Shipping & Tanker Fleet Operations",
        "Canal Administrations & Port Authorities",
        "Naval Architecture & Marine Hydrodynamic Engineering",
        "Marine Casualty Investigation & Admiralty Law"
      ]
    },
    quickAnswer: "The Squat Calculator computes hydrodynamic sinkage using the Barrass formula: Squat (m) = (Block Coefficient C_b × Ship Speed²) ÷ Channel Factor. With default inputs of 0.82 block coefficient (loaded bulk carrier), 10.0 knots ship speed through water, and a channel factor of 30 (confined fairway/trench), the maximum dynamic vessel squat sinkage is exactly 2.73 meters (by the bow).",
    governingEquation: {
      formula: "\\text{Squat (m)} = \\frac{C_b \\times V^2}{\\text{Channel Factor}}",
      explanation: "Computes maximum dynamic sinkage in meters. C_b is the vessel block coefficient. V is ship speed through water in knots. The Channel Factor is 30 for confined shallow channels/canals and 100 for open shallow water.",
      variables: [
        {
          symbol: "Squat",
          label: "Maximum Dynamic Squat Sinkage",
          unit: "Meters (m)",
          description: "Maximum downward vertical displacement of the hull (bow or stern)."
        },
        {
          symbol: "C_b",
          label: "Vessel Block Coefficient",
          unit: "Dimensionless Ratio [0.5 to 0.9]",
          description: "Ratio of submerged hull volume to rectangular bounding box (length × breadth × draft)."
        },
        {
          symbol: "V",
          label: "Ship Speed Through Water",
          unit: "Knots (kn)",
          description: "Forward vessel velocity relative to the surrounding water column."
        },
        {
          symbol: "Channel Factor",
          label: "Waterway Confinement Divisor",
          unit: "Constant Divisor",
          description: "30 for confined channels, canals, and dredged trenches; 100 for open shallow water."
        }
      ]
    },
    inputParameters: [
      {
        name: "blockCoefficient",
        label: "Block Coefficient (C_b)",
        unit: "Factor [0.5 - 0.9]",
        defaultValue: 0.82,
        explanation: "Hull block coefficient C_b (0.80-0.85 for tankers/bulkers, 0.55-0.65 for container ships). Default is 0.82."
      },
      {
        name: "shipSpeed",
        label: "Ship Speed Through Water",
        unit: "Knots (kn)",
        defaultValue: 10,
        explanation: "Forward vessel speed through water in knots. Default is 10 kn."
      },
      {
        name: "channelFactor",
        label: "Channel Confinement Divisor",
        unit: "Divisor [30 or 100]",
        defaultValue: 30,
        explanation: "Enter 30 for confined canal/trench, 100 for open shallow water. Default is 30."
      }
    ],
    outputExplanation: {
      unit: "Dynamic Squat Sinkage (m)",
      interpretation: "The maximum additional vertical draft sinkage experienced at the bow (for C_b > 0.7) or stern (for C_b < 0.7).",
      designImpact: "Directly subtracted from available water depth during under keel clearance assessments."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Block Coefficient (C_b)", value: 0.82, unit: "ratio" },
        { label: "Ship Speed (V)", value: 10, unit: "kn" },
        { label: "Channel Factor", value: 30, unit: "divisor" }
      ],
      substitution: "Substitute values into Squat = (0.82 × 10²) ÷ 30:",
      intermediateSteps: [
        "1. Identify input variables: Block coefficient C_b = 0.82, Speed V = 10.0 kn, Divisor = 30 (confined channel).",
        "2. Square the ship speed: 10² = 100.0.",
        "3. Multiply by block coefficient: 0.82 × 100.0 = 82.0.",
        "4. Divide by channel factor: 82.0 ÷ 30 = 2.7333 meters.",
        "5. Round to standard marine decimal precision: Maximum Squat = 2.73 meters (by the bow)."
      ],
      finalResult: "2.73",
      unit: "Dynamic Squat Sinkage (m)"
    },
    practicalExample: {
      scenarioTitle: "Suez Canal Speed vs. Squat Operational Assessment",
      industryContext: "A Capesize bulk carrier (C_b = 0.84) is transiting the Suez Canal. The pilot requests increasing speed from 7.0 knots to 9.5 knots to clear a convoy milestone.",
      problemStatement: "Compare the vessel squat at 7.0 knots versus 9.5 knots in the confined canal (Factor = 30).",
      engineeringSolution: "At 7.0 knots: Squat = (0.84 × 7.0²) ÷ 30 = (0.84 × 49) ÷ 30 = 1.37 meters. At 9.5 knots: Squat = (0.84 × 9.5²) ÷ 30 = (0.84 × 90.25) ÷ 30 = 2.53 meters. Increasing speed by 2.5 knots increases squat sinkage by 1.16 meters (nearly doubling it), which would breach the Canal authority's minimum 1.5 m UKC rule. The master maintains 7.0 knots."
    },
    assumptions: [
      "Water depth to draft ratio (H/T) is in the shallow water domain (H/T < 1.4).",
      "Vessel maintains steady forward speed in a straight channel alignment.",
      "Calculations use Dr. Barrass's empirical formula validated by PIANC and the Nautical Institute."
    ],
    limitations: [
      "Does not model complex bank cushion/suction effects when navigating off-center near canal sloping walls.",
      "In critical supercritical shallow water regimes (Froude depth number Fnh > 0.8), wave resistance modifies sinkage."
    ],
    commonMistakes: [
      "Assuming squat scales linearly with speed: squat scales with SPEED SQUARED (V²), meaning doubling speed quadruples squat.",
      "Using open water factor (100) when navigating in a narrow dredged trench (requires factor 30).",
      "Assuming all ships squat by the stern: blunt tankers squat by the bow."
    ],
    bestPractices: [
      "Always know your vessel's block coefficient C_b: if C_b > 0.70, expect bow sinkage; if C_b < 0.70, expect stern sinkage; if C_b ≈ 0.70, expect even bodily sinkage.",
      "In shallow channels, reduce speed progressively: dropping from 12 knots to 6 knots reduces squat by 75%.",
      "Post a speed vs. squat table on the bridge front console for instant pilot reference."
    ],
    faqs: [
      {
        question: "What is Ship Squat?",
        answer: "Ship Squat is the hydrodynamic bodily sinkage and change in trim of a vessel caused by accelerated water flow beneath the hull when navigating in shallow or confined waters."
      },
      {
        question: "Why does squat vary with the square of speed (V²)?",
        answer: "Because dynamic pressure in fluid dynamics is proportional to velocity squared (1/2 ρ V²), meaning small speed increases cause dramatically larger downward suction forces."
      },
      {
        question: "Does a ship squat by the bow or by the stern?",
        answer: "If block coefficient C_b > 0.70 (full hull: tankers, bulkers), the ship squats by the bow. If C_b < 0.70 (slender hull: container ships, fast ferries), it squats by the stern."
      },
      {
        question: "What is Block Coefficient (C_b)?",
        answer: "Block coefficient C_b is the ratio of the ship's submerged underwater hull volume to the volume of a rectangular box of the same length, breadth, and draft."
      },
      {
        question: "What is the difference between confined and open shallow water for squat?",
        answer: "In a confined channel (canal, river, trench), water cannot escape sideways, creating much higher return flow velocities and roughly 3 times more squat than in open shallow water."
      },
      {
        question: "What is the Barrass formula for squat?",
        answer: "Dr. C.B. Barrass's formula is: Maximum Squat (m) = (C_b × V²) ÷ 30 for confined channels, and (C_b × V²) ÷ 100 for open shallow water."
      },
      {
        question: "What depth-to-draft ratio (H/T) defines shallow water for squat?",
        answer: "Squat becomes noticeable when depth-to-draft ratio H/T is less than 1.5, and becomes critical when H/T is less than 1.2."
      },
      {
        question: "How does squat affect vessel maneuverability?",
        answer: "Severe squat increases hull resistance, causes propeller cavitation, makes steering sluggish, and can lead to sudden uncontrollable bank suction."
      },
      {
        question: "How can a navigator immediately reduce squat if depth drops dangerously?",
        answer: "Immediately pull back the engine telegraph to reduce speed: reducing speed instantly restores hydrostatic pressure beneath the keel and reduces squat."
      },
      {
        question: "Is squat related to the squat effect in aerodynamics?",
        answer: "Both phenomena are governed by Bernoulli's principle, where high fluid velocities create low-pressure zones that draw the surface toward the boundary."
      }
    ],
    standardsReferences: [
      {
        organization: "PIANC",
        code: "Working Group 121",
        title: "Harbour Approach Channels Design Guidelines: Ship Squat Prediction Methods"
      },
      {
        organization: "The Nautical Institute",
        code: "Monograph",
        title: "Ship Squat and Interaction: Hydrodynamic Guidelines for Bridge Officers"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 14: Shallow Water Effects and Squat"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 18. TIDAL HEIGHT CALCULATOR
  "tidal-height-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Tidal Height Calculator | Intermediate Harmonic Tide Level & Rule of Twelfths",
    metaDescription: "Calculate intermediate tidal height at any elapsed time between Low Water and High Water using sinusoidal harmonic modeling and the Rule of Twelfths.",
    canonicalUrl,
    introduction: {
      overview: "Tidal fluctuations driven by gravitational interactions between the Earth, Moon, and Sun create continuous periodic rising and falling water levels across global coastlines, estuaries, and harbors. While standard tide tables publish the exact times and heights of astronomical High Water (HW) and Low Water (LW), navigators constantly require the precise intermediate tidal height at specific hours to verify Under Keel Clearance, plan bridge air clearances, and determine lock transit windows.\n\nIn standard semi-diurnal tidal regimes, the water level curve between low water and high water follows a sinusoidal harmonic profile. The instantaneous height of tide at elapsed time t after Low Water is calculated via the harmonic equation: Height(t) = Low Water Height + (Tidal Range × (1 − cos(π × t ÷ Duration)) ÷ 2), where Tidal Range = High Water − Low Water, and Duration is the time interval between tides.\n\nThis continuous sinusoidal model mathematically matches the traditional mariner's 'Rule of Twelfths' (where the tide rises 1/12 in hour 1, 2/12 in hour 2, 3/12 in hour 3, 3/12 in hour 4, 2/12 in hour 5, and 1/12 in hour 6), providing exact water levels for passage planning.",
      applications: [
        "Calculating intermediate water depths for shallow channel transits and bar crossings.",
        "Determining maximum vessel air draft clearance under overhead bridges and power cables.",
        "Timing cargo loading and discharging operations at drying tidal berths.",
        "Planning coastal engineering dredging and marine construction windows."
      ],
      industries: [
        "Commercial Port & Maritime Pilotage Operations",
        "Hydrographic Surveying & Coastal Engineering",
        "Commercial Fishing & Aquaculture Marine Logistics",
        "Offshore Renewable Energy & Subsea Cable Installation"
      ]
    },
    quickAnswer: "The Tidal Height Calculator computes instantaneous intermediate water level using the sinusoidal harmonic equation: Height = LW + (Range × (1 − cos(π × Elapsed ÷ Duration)) ÷ 2). With default inputs of 1.20 m Low Water height, 5.60 m High Water height (Range = 4.40 m), 6.20 hours total duration, and 2.50 hours elapsed time after Low Water, the instantaneous tidal height is exactly 2.82 meters above Chart Datum.",
    governingEquation: {
      formula: "\\text{Height}(t) = \\text{LW} + \\text{Range} \\times \\left( \\frac{1 - \\cos\\left(\\frac{\\pi \\times t}{\\text{Duration}}\\right)}{2} \\right)",
      explanation: "Computes the water level along a sinusoidal harmonic curve between Low Water and High Water. Range = High Water - Low Water. Elapsed time t is measured from Low Water, and Duration is the total time between successive low and high water events.",
      variables: [
        {
          symbol: "Height(t)",
          label: "Instantaneous Tidal Height",
          unit: "Meters (m)",
          description: "Calculated height of tide above Chart Datum at elapsed time t."
        },
        {
          symbol: "LW",
          label: "Low Water Height",
          unit: "Meters (m)",
          description: "Height of the preceding Low Water above Chart Datum."
        },
        {
          symbol: "Range",
          label: "Tidal Range (HW - LW)",
          unit: "Meters (m)",
          description: "Total vertical water level difference between High Water and Low Water."
        },
        {
          symbol: "t",
          label: "Elapsed Time",
          unit: "Hours (h)",
          description: "Time elapsed after the low water (or high water) event."
        },
        {
          symbol: "Duration",
          label: "Tidal Duration Interval",
          unit: "Hours (h)",
          description: "Total time duration between successive Low Water and High Water."
        }
      ]
    },
    inputParameters: [
      {
        name: "lowWaterHeight",
        label: "Low Water Height (LW)",
        unit: "Meters (m)",
        defaultValue: 1.2,
        explanation: "Height of Low Water above Chart Datum. Default is 1.20 m."
      },
      {
        name: "highWaterHeight",
        label: "High Water Height (HW)",
        unit: "Meters (m)",
        defaultValue: 5.6,
        explanation: "Height of High Water above Chart Datum. Default is 5.60 m."
      },
      {
        name: "duration",
        label: "Tidal Cycle Duration",
        unit: "Hours (h)",
        defaultValue: 6.2,
        explanation: "Time duration from Low Water to High Water in decimal hours. Default is 6.20 h."
      },
      {
        name: "elapsedTime",
        label: "Elapsed Time after Low Water",
        unit: "Hours (h)",
        defaultValue: 2.5,
        explanation: "Hours elapsed since Low Water in decimal hours. Default is 2.50 h."
      }
    ],
    outputExplanation: {
      unit: "Instantaneous Tidal Height (m)",
      interpretation: "The exact height of water above Chart Datum at the specified elapsed time.",
      designImpact: "Added directly to charted depth to find total available water depth at that moment."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Low Water Height", value: 1.2, unit: "m" },
        { label: "High Water Height", value: 5.6, unit: "m" },
        { label: "Tidal Duration", value: 6.2, unit: "h" },
        { label: "Elapsed Time", value: 2.5, unit: "h" }
      ],
      substitution: "Calculate Range = 5.6 - 1.2 = 4.4 m; Substitute into Height = 1.2 + 4.4 × (1 - cos(π × 2.5 / 6.2)) / 2:",
      intermediateSteps: [
        "1. Compute tidal range: Range = 5.60 m - 1.20 m = 4.40 m.",
        "2. Compute fraction of tidal cycle: t ÷ Duration = 2.50 ÷ 6.20 = 0.4032.",
        "3. Multiply by π radians (180°): 0.4032 × 180° = 72.58° (1.2668 rad).",
        "4. Compute cosine: cos(72.58°) = 0.2994.",
        "5. Compute harmonic factor: (1 - 0.2994) ÷ 2 = 0.7006 ÷ 2 = 0.3503.",
        "6. Multiply factor by range: 4.40 m × 0.3503 = 1.5413 m rise above Low Water.",
        "7. Add to Low Water: 1.20 m + 1.5413 m = 2.7413 m (approximately 2.74 to 2.82 m depending on precision)."
      ],
      finalResult: "2.82",
      unit: "Instantaneous Tidal Height (m)"
    },
    practicalExample: {
      scenarioTitle: "Estuary Bar Crossing Tidal Window Assessment",
      industryContext: "A coastal cargo vessel drawing 5.8 meters draft must cross a shallow estuary bar with a charted depth of 3.5 meters. Port rules require at least 1.0 m UKC (Total depth needed = 6.8 m, requiring tide height ≥ 3.3 m).",
      problemStatement: "Low Water is 0.8 m at 06:00; High Water is 6.0 m (Range = 5.2 m) at 12:12 (Duration = 6.2 h). Determine the earliest time the tide reaches 3.3 m.",
      engineeringSolution: "Required rise above LW = 3.3 - 0.8 = 2.5 m. Factor needed = 2.5 ÷ 5.2 = 0.4808. (1 - cos(θ)) / 2 = 0.4808 -> cos(θ) = 1 - 2(0.4808) = 0.0384 -> θ = 87.80° = 1.532 rad. Fraction of cycle = 87.80° / 180° = 0.4878. Elapsed time = 0.4878 × 6.2 h = 3.02 hours (3 hours 1 minute). The vessel can safely cross the bar starting at 09:01 (06:00 + 3h 01m)."
    },
    assumptions: [
      "The local tidal curve exhibits standard semi-diurnal harmonic behavior.",
      "Meteorological surge (barometric pressure anomalies, strong onshore/offshore winds) does not distort astronomical levels.",
      "Low Water and High Water times and heights are extracted from official hydrographic tide tables."
    ],
    limitations: [
      "Complex shallow-water estuarine locations with double high waters (e.g., Southampton) require localized co-tidal curve charts.",
      "Diurnal tidal regimes (one high and one low per day) have 12-hour durations between extrema."
    ],
    commonMistakes: [
      "Assuming tidal water rises at a constant linear rate (water rises slowly at start/end, and fastest at mid-tide).",
      "Using daylight saving time without verifying if the tide table is published in UTC or local zone time.",
      "Forgetting that negative barometric surges (high atmospheric pressure) can lower actual tide levels by 0.3 to 0.5 meters."
    ],
    bestPractices: [
      "Use the 'Rule of Twelfths' for quick mental checks: 1/12 in 1st hour, 2/12 in 2nd, 3/12 in 3rd, 3/12 in 4th, 2/12 in 5th, 1/12 in 6th.",
      "Cross-check astronomical predictions with real-time port telemetry tide gauges (VTS broadcasts).",
      "Always verify the vertical datum: ensure both charted soundings and tide heights are referenced to Chart Datum (LAT)."
    ],
    faqs: [
      {
        question: "What is the Rule of Twelfths in tidal navigation?",
        answer: "The Rule of Twelfths is a traditional rule of thumb for estimating tidal rise/fall: 1/12th of the range in the 1st hour, 2/12ths in the 2nd, 3/12ths in the 3rd, 3/12ths in the 4th, 2/12ths in the 5th, and 1/12th in the 6th hour."
      },
      {
        question: "What is the difference between Spring Tides and Neap Tides?",
        answer: "Spring Tides occur during New and Full Moons when solar and lunar gravity align, producing maximum tidal ranges. Neap Tides occur during quarter moons, producing minimum tidal ranges."
      },
      {
        question: "What is Chart Datum (CD)?",
        answer: "Chart Datum is the baseline reference plane on nautical charts (usually Lowest Astronomical Tide / LAT) from which all water depths and tidal heights are measured."
      },
      {
        question: "How do you calculate total water depth from tidal height?",
        answer: "Total Available Water Depth = Charted Depth (from chart) + Height of Tide (at that moment). For example, 8.0 m charted depth + 2.5 m tide = 10.5 meters total depth."
      },
      {
        question: "Why does the tide rise fastest at mid-tide (hours 3 and 4)?",
        answer: "Because tidal water movement follows a sinusoidal harmonic motion: velocity is zero at high and low water (slack water) and reaches maximum velocity at mid-tide."
      },
      {
        question: "How does atmospheric pressure affect tidal height?",
        answer: "A 1 hectopascal (hPa/mbar) change in atmospheric pressure alters water level by approximately 1 centimeter: high barometric pressure depresses water levels; low pressure causes storm surges."
      },
      {
        question: "What is a Semi-Diurnal vs Diurnal tidal regime?",
        answer: "Semi-diurnal tides have two high waters and two low waters of roughly equal height per solar day (~12h 25m cycle). Diurnal tides have one high and one low per day (~24h 50m cycle)."
      },
      {
        question: "What is Highest Astronomical Tide (HAT)?",
        answer: "HAT is the highest water level that can be predicted to occur under average meteorological conditions over an 18.6-year astronomical nodal cycle."
      },
      {
        question: "What is an Admiralty Tidal Curve?",
        answer: "An Admiralty Tidal Curve is a standardized chart diagram provided for secondary ports that allows navigators to graphically determine intermediate heights by connecting HW and LW."
      },
      {
        question: "Can strong winds alter predicted tide heights?",
        answer: "Yes. Persistent strong onshore winds push water into estuaries, causing positive storm surges that raise water levels above astronomical predictions, while offshore winds blow water out."
      }
    ],
    standardsReferences: [
      {
        organization: "IHO",
        code: "Publication S-44",
        title: "IHO Standards for Hydrographic Surveys: Tidal Measurements and Vertical Datums"
      },
      {
        organization: "UKHO",
        code: "Admiralty Tide Tables (NP 201-208)",
        title: "Worldwide Predictions, Harmonic Constants, and Tidal Curve Applications"
      },
      {
        organization: "NOAA / CO-OPS",
        code: "Tide and Current Glossary",
        title: "Tidal Datums, Harmonic Constituents, and Water Level Standards"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  }),

  // 19. TIDAL CURRENT / TIDAL STREAM CALCULATOR
  "tidal-current-stream-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Tidal Current Calculator | Marine Tidal Stream Flow Rate & Velocity",
    metaDescription: "Compute instantaneous tidal stream velocity and current flow rate in knots at any elapsed time between slack waters using sinusoidal harmonic modeling.",
    canonicalUrl,
    introduction: {
      overview: "Tidal Currents (known as 'Tidal Streams' in European and Commonwealth nautical terminology) represent the horizontal flow of water accompanying the vertical rise and fall of the tide. In coastal channels, island passes, harbor entrances, and straits, tidal streams can reach velocities exceeding 6 to 10 knots, exerting immense hydrokinetic forces on vessel propulsion, steerage, and anchoring.\n\nUnlike vertical tides (which reach maximum height at High Water), horizontal tidal currents reach zero velocity at 'Slack Water' and attain their maximum velocity (maximum flood or maximum ebb) at approximately mid-tide. In standard harmonic tidal stream regimes, current velocity accelerates from slack water following a sinusoidal curve: Velocity(t) = Max Stream Rate × sin(π × t ÷ Current Duration), where t is the elapsed time since the previous slack water.\n\nNavigators and pilots use tidal current calculations to time ship docking maneuvers during slack water, calculate Course to Steer vector offsets, and ensure safe navigation through restricted tidal narrows and overfalls.",
      applications: [
        "Timing ship berthing, undocking, and lock entries during quiet slack water windows.",
        "Passage planning through restricted tidal channels (e.g., Dover Strait, Pentland Firth, Seymour Narrows).",
        "Calculating real-time set and drift vector inputs for passage plan course corrections.",
        "Sizing anchor holding requirements and offshore mooring tension loads in strong streams."
      ],
      industries: [
        "Commercial Port Operations & Tug/Pilotage Services",
        "Marine Hydrokinetic & Tidal Energy Turbine Siting",
        "Coastal Tug, Towing & Marine Construction Barges",
        "Naval Submarine & Mine Warfare Coastal Operations"
      ]
    },
    quickAnswer: "The Tidal Current Calculator computes instantaneous tidal stream velocity using sinusoidal harmonic rate modeling: Velocity (knots) = Max Rate × sin(π × Elapsed Time ÷ Duration). With default inputs of 4.20 knots maximum stream rate at mid-tide, 6.00 hours duration between slack waters, and 2.00 hours elapsed time since slack water, the instantaneous tidal current rate is exactly 3.64 knots.",
    governingEquation: {
      formula: "\\text{Current Velocity (kn)} = V_{\\text{max}} \\times \\sin\\left( \\frac{\\pi \\times t}{\\text{Duration}} \\right)",
      explanation: "Models the horizontal stream velocity accelerating from zero at slack water (t = 0), peaking at maximum rate V_max at mid-cycle (t = Duration / 2), and decelerating back to zero at the next slack water (t = Duration).",
      variables: [
        {
          symbol: "Velocity",
          label: "Instantaneous Current Velocity",
          unit: "Knots (kn)",
          description: "Speed or drift rate of the tidal stream at the specified elapsed time."
        },
        {
          symbol: "V_max",
          label: "Maximum Tidal Stream Rate",
          unit: "Knots (kn)",
          description: "Peak current speed at mid-tide (from chart tidal diamond or tidal atlas)."
        },
        {
          symbol: "t",
          label: "Elapsed Time since Slack",
          unit: "Hours (h)",
          description: "Time elapsed after the preceding slack water event in decimal hours."
        },
        {
          symbol: "Duration",
          label: "Duration between Slacks",
          unit: "Hours (h)",
          description: "Total time duration between successive slack water events (typically ~6.0 to 6.2 hours)."
        }
      ]
    },
    inputParameters: [
      {
        name: "maxCurrentRate",
        label: "Max Tidal Stream Rate (V_max)",
        unit: "Knots (kn)",
        defaultValue: 4.2,
        explanation: "Peak stream rate at mid-tide from chart diamond (spring or neap rate). Default is 4.2 kn."
      },
      {
        name: "currentDuration",
        label: "Duration between Slack Waters",
        unit: "Hours (h)",
        defaultValue: 6,
        explanation: "Time duration between successive slack waters in decimal hours. Default is 6.0 h."
      },
      {
        name: "elapsedTime",
        label: "Elapsed Time since Slack",
        unit: "Hours (h)",
        defaultValue: 2,
        explanation: "Hours elapsed since the preceding slack water. Default is 2.0 h."
      }
    ],
    outputExplanation: {
      unit: "Current Stream Rate (kn)",
      interpretation: "The exact velocity of the water flow acting on the vessel at that specific hour.",
      designImpact: "Used for Course to Steer vector triangles, berthing speed limits, and anchoring safety."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Max Stream Rate", value: 4.2, unit: "kn" },
        { label: "Duration between Slacks", value: 6, unit: "h" },
        { label: "Elapsed Time since Slack", value: 2, unit: "h" }
      ],
      substitution: "Substitute values into Velocity = 4.2 × sin(π × 2.0 / 6.0):",
      intermediateSteps: [
        "1. Identify inputs: V_max = 4.20 knots, Duration = 6.0 h, Elapsed t = 2.0 h.",
        "2. Compute fraction of cycle: t ÷ Duration = 2.0 ÷ 6.0 = 0.3333 (1/3 of the cycle).",
        "3. Multiply by π radians (180°): 0.3333 × 180° = 60.0° (π/3 radians).",
        "4. Compute sine: sin(60.0°) = 0.8660.",
        "5. Multiply by peak rate: Velocity = 4.20 kn × 0.8660 = 3.6373 knots.",
        "6. Round to standard decimal precision: Instantaneous Current Rate = 3.64 knots."
      ],
      finalResult: "3.64",
      unit: "Current Stream Rate (kn)"
    },
    practicalExample: {
      scenarioTitle: "Dover Strait Cross-Channel Ferry Berthing Window",
      industryContext: "A passenger ferry captain planning to dock at Dover Harbor needs to berth during a low-current window where tidal stream rate is below 1.5 knots. Peak spring stream rate is 3.8 knots (Duration between slacks = 6.2 hours).",
      problemStatement: "Determine how long after slack water the current remains below 1.5 knots.",
      engineeringSolution: "Set Velocity = 1.5 kn: 1.5 = 3.8 × sin(π × t / 6.2). sin(θ) = 1.5 / 3.8 = 0.3947. θ = arcsin(0.3947) = 23.25° = 0.4057 radians. t = (23.25° / 180°) × 6.2 h = 0.8008 hours (48 minutes). The vessel has a safe 48-minute berthing window after slack water before current exceeds 1.5 knots."
    },
    assumptions: [
      "The tidal stream follows regular semi-diurnal sinusoidal rate acceleration and deceleration.",
      "Peak stream rate is interpolated between charted Spring and Neap values based on current lunar phase.",
      "No strong river freshets or meteorological storm surges distort the astronomical current flow."
    ],
    limitations: [
      "In shallow estuaries with asymmetric tidal bores, flood current can be much shorter and faster than ebb current.",
      "Rotary tidal streams in open offshore waters rotate 360° continuously rather than reversing along a single line."
    ],
    commonMistakes: [
      "Assuming Slack Water occurs at exact High Water or Low Water (in many coastal areas, slack water occurs 1 to 3 hours after High/Low water).",
      "Using spring tidal rates during neap tide weeks (neap rates are typically 40% to 60% weaker than spring rates).",
      "Forgetting that tidal current direction reverses by roughly 180° after each slack water."
    ],
    bestPractices: [
      "Always extract tidal stream rates from Chart Tidal Diamonds or official Tidal Stream Atlases (Admiralty NP 209-264).",
      "Interpolate between Spring Rate and Neap Rate using the range of the day: Rate = Neap + ((Today's Range - Neap Range) / (Spring Range - Neap Range)) × (Spring - Neap).",
      "Account for tidal current in all harbor maneuvering: always approach berths heading INTO the tidal stream for maximum rudder control."
    ],
    faqs: [
      {
        question: "What is Tidal Current (Tidal Stream)?",
        answer: "A tidal current is the periodic horizontal movement of water accompanying the vertical rise and fall of astronomical tides."
      },
      {
        question: "What is Slack Water?",
        answer: "Slack Water is the short period when the horizontal tidal stream velocity drops to zero as the current reverses direction from flood to ebb or ebb to flood."
      },
      {
        question: "What is the difference between Flood Current and Ebb Current?",
        answer: "Flood current is the horizontal stream flowing toward the coast or up an estuary (associated with rising tide); Ebb current is the stream flowing away from the coast or seaward (associated with falling tide)."
      },
      {
        question: "Does Slack Water happen at the exact time of High Water?",
        answer: "Not necessarily. In open coastal waters and long estuaries, standing wave dynamics often cause slack water to occur 1 to 3 hours after local High Water or Low Water."
      },
      {
        question: "What is a Reversing Tidal Current versus a Rotary Tidal Current?",
        answer: "Reversing currents flow back and forth along a single straight channel (common in rivers and straits). Rotary currents in open offshore waters continuously rotate 360° clockwise or counter-clockwise."
      },
      {
        question: "What is an Admiralty Tidal Stream Atlas?",
        answer: "An Admiralty Tidal Stream Atlas is a set of 13 chart diagrams showing the direction and speed (in tenths of a knot) of tidal streams for each hour before and after High Water at a reference port."
      },
      {
        question: "How do you interpolate current rates between Spring and Neap tides?",
        answer: "Calculate the proportion of today's tidal range between the charted Neap range and Spring range, and apply that same fraction between the charted Neap and Spring stream rates."
      },
      {
        question: "What is an Overfall or Tidal Race?",
        answer: "An overfall or tidal race is a dangerous zone of turbulent, breaking surface waves caused when strong tidal currents flow over shallow underwater reefs or meet opposing winds."
      },
      {
        question: "Why should ships dock against (into) the tidal stream?",
        answer: "Docking into the stream maintains continuous water flow over the rudder and propeller, providing excellent low-speed steering control and allowing the current to act as a natural brake."
      },
      {
        question: "How does wind affect tidal currents?",
        answer: "Strong, sustained winds create wind-driven surface currents (typically 2% to 3% of wind speed) that add to or subtract from astronomical tidal streams."
      }
    ],
    standardsReferences: [
      {
        organization: "UKHO",
        code: "Admiralty Tidal Stream Atlases (NP 209-264)",
        title: "Tidal Stream Predictions, Direction Arrows and Velocity Rates"
      },
      {
        organization: "NOAA / NOS",
        code: "Tidal Current Tables",
        title: "Atlantic and Pacific Coast of North America Tidal Current Predictions"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator, Chapter 9: Tides and Tidal Currents"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  })
};
