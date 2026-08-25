import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke technical articles for Navigation & Marine Calculators.
 * Adheres strictly to the Engineering/Astronomy/Navigation Calculator Article Template V1.0.
 */

export const navigationBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  // 1. DEGREE TO COMPASS POINT CALCULATOR
  "degree-to-compass-point-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Degree to Compass Point Calculator | Navigation Bearing to Compass Points",
    metaDescription: "Convert navigation bearing angles in arc degrees (0° to 360°) to standard 32-point mariner compass points (1 pt = 11.25°) using the exact Point Index = (Bearing mod 360) ÷ 11.25 formula.",
    canonicalUrl,
    introduction: {
      overview: "Navigational course orientation, maritime dead reckoning, and meteorological observations rely on angular azimuth bearings measured clockwise from True North (000° to 360°). While modern digital gyrocompasses, GPS receivers, and electronic chart display and information systems (ECDIS) quantify direction in decimal arc degrees (°), traditional nautical seamanship, weather reporting (wind direction), lookout bearings, and helm orders historically and practically express headings in compass points.\n\nThe traditional mariner's compass rose divides the full 360-degree horizon into 32 equal compass points. Because a complete circular horizon encompasses 360 arc degrees, each individual compass point subtends an exact angular sector of 360° ÷ 32 = 11.25° (equivalent to 11 degrees and 15 arcminutes, or 11° 15′). A bearing is systematically converted into a numerical compass point index by normalizing the bearing modulo 360° and dividing by 11.25°: Point Index = (Bearing mod 360) ÷ 11.25.\n\nUnderstanding the mathematical mapping between continuous angular degrees and discrete compass points (including the 4 cardinal directions, 4 intercardinal/ordinal directions, 8 half-winds, and 16 quarter-winds or by-points) is essential across commercial maritime shipping, naval operations, aeronautical navigation, sailing, and coastal search and rescue.",
      applications: [
        "Converting continuous gyrocompass azimuth degrees into traditional 32-point helm orders and lookout bearings.",
        "Translating meteorological wind direction degrees (e.g., 225° SW) into nautical weather log entries.",
        "Facilitating traditional 'boxing the compass' navigation drills for maritime cadets and naval watchstanders.",
        "Standardizing vessel-to-vessel VHF radio traffic and collision avoidance relative bearing communications."
      ],
      industries: [
        "Commercial Maritime Shipping & Merchant Marine",
        "Naval Defense & Coast Guard Operations",
        "Meteorology, Climatology & Physical Oceanography",
        "Aeronautical & General Aviation Navigation"
      ]
    },
    quickAnswer: "The Degree to Compass Point Calculator converts any azimuth bearing angle in arc degrees (0° to 360°) into the standard 32-point mariner's compass index using the governing formula: Point Index = (Bearing mod 360) ÷ 11.25. With the default input of 225°, the calculation yields exactly 20.00 Compass Points (pt), corresponding to Southwest (SW). Each compass point spans exactly 11.25° (11° 15′), meaning Point 0 is North (0°), Point 8 is East (90°), Point 16 is South (180°), Point 20 is Southwest (225°), and Point 24 is West (270°).",
    governingEquation: {
      formula: "\\text{Point Index (pt)} = \\frac{\\text{Bearing (°)} \\bmod 360}{11.25}",
      explanation: "The compass point index is obtained by taking the navigation bearing angle in decimal arc degrees, wrapping it into the [0°, 360°) circular domain via the modulo operator, and dividing by the angular width of one compass point (11.25°). Integer index values (0 to 31) represent exact named compass points, while fractional values indicate positions between named points (e.g., half-points and quarter-points).",
      variables: [
        {
          symbol: "Point Index",
          label: "Compass Point Index",
          unit: "Compass Points (pt)",
          description: "Numerical index representing the position on the 32-point compass rose [0 to 32), where 0 = North, 8 = East, 16 = South, 20 = Southwest, and 24 = West."
        },
        {
          symbol: "Bearing",
          label: "Bearing Angle (B)",
          unit: "Arc Degrees (°)",
          description: "Azimuth course angle measured clockwise from True North [0° to 360°)."
        },
        {
          symbol: "11.25",
          label: "Point Angular Width",
          unit: "Degrees/Point (°/pt)",
          description: "Constant angular spacing of one compass point on a 32-point rose (360° ÷ 32 = 11.25° = 11° 15′)."
        }
      ]
    },
    inputParameters: [
      {
        name: "bearing",
        label: "Bearing Angle (B)",
        unit: "Arc Degrees (°)",
        defaultValue: 225,
        explanation: "The horizontal azimuth direction or course heading measured clockwise from True North (000° to 360°). The default value is 225°, representing the Southwest (SW) intercardinal heading."
      }
    ],
    outputExplanation: {
      unit: "Compass Points (pt)",
      interpretation: "The position along the traditional 32-point nautical compass circle. Integer multiples of 1.0 represent named points (cardinal, intercardinal, half-winds, and by-points).",
      designImpact: "Navigators, watch officers, and automated autopilot systems use compass points to correlate electronic heading data with lookout sightings, historical nautical charts, and standardized meteorological wind bands."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Bearing Angle (B)", value: 225, unit: "°" }
      ],
      substitution: "Substitute Bearing = 225° into the governing conversion formula Point Index = (Bearing mod 360) ÷ 11.25:",
      intermediateSteps: [
        "1. Identify the input azimuth bearing: Bearing = 225°.",
        "2. Normalize within the circular domain: 225° mod 360° = 225°.",
        "3. Divide by the 32-point angular increment (11.25° per point):",
        "   225 ÷ 11.25 = 20.00 Compass Points (pt).",
        "4. Correlate with the 32-point compass rose:",
        "   - Point 0: North (0°)",
        "   - Point 4: Northeast (45°)",
        "   - Point 8: East (90°)",
        "   - Point 12: Southeast (135°)",
        "   - Point 16: South (180°)",
        "   - Point 20: Southwest (225° — SW).",
        "5. Conclude: 225° corresponds exactly to 20.00 points (Southwest / SW)."
      ],
      finalResult: "20.00",
      unit: "Compass Points (pt)"
    },
    practicalExample: {
      scenarioTitle: "Maritime Lookout Sighting & Course Alteration",
      industryContext: "A commercial cargo container vessel is navigating coastal waters. The bridge watch officer receives a radar azimuth contact report of a tug and tow at bearing 123.75° True and must record the lookout contact in standard compass point notation.",
      problemStatement: "Convert the radar bearing angle of 123.75° into its exact compass point index and identify the corresponding named nautical point.",
      engineeringSolution: "Apply the governing equation Point Index = (123.75 mod 360) ÷ 11.25: 123.75 ÷ 11.25 = 11.00 Compass Points. Index 11 corresponds exactly to 'Southeast by East' (SEbE), positioned one point (11.25°) north of Southeast (135° / Point 12) and three points south of East (90° / Point 8). The officer logs the contact as bearing SEbE."
    },
    assumptions: [
      "The compass rose is based on the traditional 32-point mariner's division where 360° is divided into 32 equal sectors of 11.25° (11° 15′).",
      "Bearings are measured in a planar clockwise horizontal coordinate system starting from North at 000° (000° = 360°).",
      "Input angles are referenced to True North (or Gyro North) unless an explicit magnetic declination correction has already been applied."
    ],
    limitations: [
      "Does not automatically compute vessel magnetic deviation (caused by shipboard ferrous metal or electronics) or regional magnetic variation (declination).",
      "Discretizes continuous decimal bearings into a 32-point index; high-precision navigation (ECDIS/GNSS) requires maintaining full degree precision (e.g., 225.4°).",
      "Assumes horizontal surface bearing geometry and does not apply to 3D spherical azimuths or vertical sextant altitudes."
    ],
    commonMistakes: [
      "Assuming 1 compass point equals 10° instead of the exact mathematical value of 11.25° (11° 15′).",
      "Confusing the 16-point meteorological wind rose (22.5° increments) with the full 32-point nautical mariner's compass (11.25° increments).",
      "Treating navigation bearings like Cartesian trigonometric angles (which start at East and measure counter-clockwise) rather than navigation azimuths (which start at North and measure clockwise).",
      "Forgetting that 360° wraps back to Point 0 (North), leading to index off-by-one errors when computing course differentials across the northern meridian."
    ],
    bestPractices: [
      "Always confirm whether the bearing is referenced to True North (°T), Magnetic North (°M), or Ship's Head / Relative Bearing (°R) before converting to compass points.",
      "Memorize the 4 cardinal points (N, E, S, W = 0, 8, 16, 24 pt) and 4 intercardinal points (NE, SE, SW, NW = 4, 12, 20, 28 pt) as rapid mental benchmarks.",
      "Use fractional points (e.g., 20.5 pt = SW 1/2 W) when describing intermediate headings in traditional logbooks.",
      "Cross-check compass point conversions against standard nautical pilot charts and radar plotting sheets during dead reckoning calculations."
    ],
    faqs: [
      {
        question: "What does this Degree to Compass Point calculator calculate?",
        answer: "This calculator converts horizontal azimuth angles in decimal arc degrees (0° to 360°) into the standard 32-point nautical compass index (0 to 32 pt) using the relationship 1 compass point = 11.25° (11° 15′)."
      },
      {
        question: "How many degrees are in one compass point?",
        answer: "There are exactly 11.25 degrees (11° 15′) in one standard nautical compass point. This value is derived by dividing the full 360-degree circle by 32 equal compass points (360° ÷ 32 = 11.25°)."
      },
      {
        question: "What is the formula to convert degrees to compass points?",
        answer: "The formula is: Point Index = (Bearing mod 360) ÷ 11.25. For example, for a 90° bearing (due East), 90 ÷ 11.25 = 8.00 Compass Points."
      },
      {
        question: "What are the 4 cardinal, 4 intercardinal, and 8 half-wind compass points?",
        answer: "The 4 Cardinal points are North (0° / 0 pt), East (90° / 8 pt), South (180° / 16 pt), and West (270° / 24 pt). The 4 Intercardinal (ordinal) points are NE (45° / 4 pt), SE (135° / 12 pt), SW (225° / 20 pt), and NW (315° / 28 pt). The 8 Half-winds are NNE (22.5° / 2 pt), ENE (67.5° / 6 pt), ESE (112.5° / 10 pt), SSE (157.5° / 14 pt), SSW (202.5° / 18 pt), WSW (247.5° / 22 pt), WNW (292.5° / 26 pt), and NNW (337.5° / 30 pt)."
      },
      {
        question: "What are quarter-winds (by-points) on a 32-point compass?",
        answer: "Quarter-winds (often called 'by-points') are the 16 intermediate points spaced 11.25° apart that complete the 32-point rose. Examples include North by East (NbE = 11.25° / 1 pt), Northeast by North (NEbN = 33.75° / 3 pt), Northeast by East (NEbE = 56.25° / 5 pt), and East by North (EbN = 78.75° / 7 pt)."
      },
      {
        question: "What does 'boxing the compass' mean?",
        answer: "'Boxing the compass' is the traditional maritime practice of naming all 32 points of the compass in clockwise order starting from North (N, NbE, NNE, NEbN, NE, NEbE, ENE, EbN, E...) all the way around to North by West (NbW) and back to North."
      },
      {
        question: "How do fractional compass points work?",
        answer: "When a bearing does not fall precisely on an 11.25° increment, it is expressed as a fractional point or fractional half/quarter point. For instance, 230.625° equals Point 20.5, which in traditional mariner's notation is 'Southwest half West' (SW 1/2 W)."
      },
      {
        question: "What is the difference between 16-point and 32-point compass systems?",
        answer: "A 16-point compass divides the circle into 22.5° increments (cardinals, intercardinals, and half-winds) and is widely used in meteorology for general wind direction reports. A 32-point compass adds the 16 quarter-winds (11.25° increments) for fine nautical steering and helm commands."
      },
      {
        question: "Does this conversion account for magnetic variation (declination)?",
        answer: "This calculator performs the geometric conversion from angular degrees to compass points. If your input bearing is Magnetic (°M), the output is in Magnetic Compass Points; if your input is True (°T), the output is in True Compass Points. To convert between Magnetic and True bearings, apply local magnetic variation (declination) before or after."
      },
      {
        question: "Why do modern ships still use compass points alongside digital degree readouts?",
        answer: "Compass points provide an immediate, unambiguous verbal notation for lookout reporting (e.g., 'vessel broad on the starboard bow, two points abaft the beam'), wind direction logging, and emergency manual steering when digital screens or electrical bus power are unavailable."
      }
    ],
    standardsReferences: [
      {
        organization: "IMO",
        code: "SOLAS Chapter V",
        title: "International Convention for the Safety of Life at Sea: Safety of Navigation & Magnetic Compass Standards"
      },
      {
        organization: "NGA",
        code: "Pub. 9 (Bowditch)",
        title: "The American Practical Navigator: An Epitome of Navigation (Compass Points and Azimuths)"
      },
      {
        organization: "IHO",
        code: "Publication S-52 / S-57",
        title: "Specifications for Chart Content and Display Aspects of ECDIS (Navigational Symbols and Bearings)"
      },
      {
        organization: "USCG",
        code: "COMDTINST M16672.2D",
        title: "Navigation Rules and Regulations: International and Inland Nautical Guidelines"
      }
    ],
    internalLinks: {
      parentDiscipline: { id: "navigation-marine-calculators", name: "Navigation & Marine" },
      relatedTools: relatedTools.slice(0, 6),
      relevantUnitCategories
    }
  })
};
