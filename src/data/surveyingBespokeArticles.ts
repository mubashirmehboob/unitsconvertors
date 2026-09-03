import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * SURVEYING & GIS CALCULATOR BESPOKE ARTICLES (V1.0 Template Specification)
 * 
 * Strict Rewrite Standards:
 * - 100% domain-specific surveying and GIS technical explanations.
 * - Zero generic engineering filler ("industrial manufacturing", "thermal behavior", "operating regimes").
 * - Pure geodetic, surveying, cartographic, and GIS terminology.
 * - Exactly 8 comprehensive, calculator-specific FAQs with complete answers.
 * - Rigorous mathematical formulations and worked step-by-step examples reproducing calculator outputs.
 */

export const surveyingBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  // 1. DEGREE TO DMS CALCULATOR
  "degree-to-dms-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Degree to DMS Calculator | Surveying & GIS Angular Conversion",
    metaDescription: "Convert decimal degrees into Degrees, Minutes, and Seconds (DMS), DMM, and total arcseconds for land surveying, geodetic coordinates, boundary mapping, and GIS spatial layers.",
    canonicalUrl,
    introduction: {
      overview: "The Degree to DMS Calculator performs bi-directional transformation between floating-point Decimal Degrees (DD) and the sexagesimal Degrees, Minutes, and Seconds (DMS) angular measurement system. In land surveying, boundary retracement, geodesy, and GIS database compilation, angular coordinates are frequently gathered from optical total stations and cadastral deed records in sexagesimal notation (D° M' S\"), while digital spatial engines and GNSS receivers process coordinates natively in decimal degrees. This calculator resolves decimal angular values into integer arc degrees, arcminutes, fractional arcseconds, Degrees Decimal Minutes (DMM), and total cumulative arcseconds.",
      applications: [
        "Converting total station horizontal and vertical angle readouts into decimal formats for CAD parcel drawing.",
        "Translating cadastral deed boundary bearings (e.g., N 45° 52' 21\" E) into spatial GIS polygon attribute tables.",
        "Formatting GNSS satellite navigation waypoints between decimal degrees and nautical/aviation DMM standards.",
        "Computing total cumulative arcseconds for geodetic curvature deflections and astronomical azimuth corrections.",
        "Standardizing legacy paper topographic survey field books into modern spatial database layers."
      ],
      industries: [
        "Cadastral & Land Surveying",
        "Geographic Information Systems (GIS)",
        "Civil Infrastructure Engineering",
        "Cartography & Topographic Mapping",
        "Geodetic Science & Satellite Navigation",
        "Mining & Hydrographic Surveying"
      ]
    },
    quickAnswer: "The Degree to DMS Calculator converts decimal degrees into sexagesimal notation by isolating the integer degree D = ⌊DD⌋, multiplying the remainder by 60 to extract arcminutes M = ⌊(DD - D) × 60⌋, and multiplying the residual minute fraction by 60 to obtain arcseconds S = ((DD - D) × 60 - M) × 60. With a default input of 179.35°, the calculator produces 179° 21' 0\" (179 degrees, 21 minutes, 0 seconds), equivalent to 10,761 arcminutes and 645,660 total arcseconds.",
    governingEquation: {
      formula: "D = \\lfloor DD \\rfloor, \\quad M = \\lfloor (DD - D) \\times 60 \\rfloor, \\quad S = \\left((DD - D) \\times 60 - M\\right) \\times 60",
      explanation: "The base-60 sexagesimal decomposition partitions an arc degree into 60 arcminutes and each arcminute into 60 arcseconds (3,600 arcseconds per degree). The floor function ⌊ ⌋ extracts the whole integer unit at each stage, while the decimal remainder cascades to the next finer subdivision.",
      variables: [
        { symbol: "DD", label: "Decimal Degrees", unit: "° (deg)", description: "Total angular measure in continuous decimal format" },
        { symbol: "D", label: "Degrees", unit: "° (deg)", description: "Integer component representing whole angular degrees (0° to 360°)" },
        { symbol: "M", label: "Arcminutes", unit: "' (arcmin)", description: "Sexagesimal subdivisions representing 1/60th of an arc degree (0 to 59)" },
        { symbol: "S", label: "Arcseconds", unit: "\" (arcsec)", description: "Sexagesimal subdivisions representing 1/3600th of an arc degree (0.00 to 59.99)" },
        { symbol: "S_{total}", label: "Total Arcseconds", unit: "\" (arcsec)", description: "Cumulative angular displacement expressed entirely in arcseconds: DD × 3600" }
      ]
    },
    inputParameters: [
      {
        name: "decimalDegree",
        label: "Decimal Degrees (DD)",
        unit: "Arc Degrees (°)",
        defaultValue: 179.35,
        explanation: "Continuous floating-point angular coordinate or traverse angle to be decomposed into sexagesimal units. Represents geodetic latitude, longitude, azimuth, or deflection angle."
      }
    ],
    outputExplanation: {
      unit: "Total Arcseconds (\") / DMS / DMM / DD",
      interpretation: "The calculator outputs the complete multi-format representation including DMS (179° 21' 0\"), DMM (179° 21.0'), Decimal Degrees (179.35°), total minutes (10,761'), and total arcseconds (645,660\"). In field boundary surveying, 1 arcsecond of latitude corresponds to approximately 30.87 meters (101.3 feet) on the WGS84 ellipsoid.",
      designImpact: "Selecting the correct angular format prevents catastrophic coordinate shifts when importing field data into ArcGIS, QGIS, AutoCAD Civil 3D, or total station controllers."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Decimal Degrees (DD)", value: 179.35, unit: "°" }
      ],
      substitution: "D = \\lfloor 179.35 \\rfloor = 179^\\circ, \\quad M = \\lfloor (179.35 - 179) \\times 60 \\rfloor = \\lfloor 21.0 \\rfloor = 21', \\quad S = (21.0 - 21) \\times 60 = 0.00''",
      intermediateSteps: [
        "Step 1: Extract integer degree component: D = ⌊179.35⌋ = 179°",
        "Step 2: Multiply fractional degree (0.35°) by 60: 0.35 × 60 = 21.0 arcminutes",
        "Step 3: Extract integer arcminutes: M = ⌊21.0⌋ = 21'",
        "Step 4: Multiply fractional arcminutes (0.0) by 60: 0.0 × 60 = 0.00 arcseconds",
        "Step 5: Compute total arcseconds: 179.35 × 3,600 = 645,660.00\""
      ],
      finalResult: "179° 21' 0\" (Total Arcseconds: 645,660\")",
      unit: "Total Arcseconds (\")"
    },
    practicalExample: {
      scenarioTitle: "Cadastral Boundary Traverse Conversion for GIS Ingestion",
      industryContext: "A licensed land surveyor is transcribing a highway right-of-way easement boundary bearing from a modern GNSS rover receiver displaying 179.35° azimuth into a municipal parcel fabric database requiring standard DMS notation.",
      problemStatement: "Convert the geodetic azimuth 179.35° into standard surveyor's DMS notation and determine the total cumulative arcseconds for geodetic closure balancing.",
      engineeringSolution: "Isolating the whole degrees gives 179°. Multiplying 0.35° by 60 yields exactly 21.0 arcminutes with 0.00 arcseconds remainder. The bearing is documented as 179° 21' 00\" with a cumulative angular value of 645,660 arcseconds."
    },
    assumptions: [
      "Angular values follow standard Euclidean or geodetic sexagesimal circle geometry (360° per revolution).",
      "One arc degree contains exactly 60 arcminutes; one arcminute contains exactly 60 arcseconds (3,600 arcseconds per degree).",
      "Positive angles represent North/East coordinates or clockwise clockwise azimuths unless designated by negative hemisphere prefixes."
    ],
    limitations: [
      "The conversion is purely geometric and does not apply map projection scale factors (grid vs ground distance).",
      "Floating-point rounding at the 6th decimal place corresponds to ~0.11 meters of ground resolution at the equator; field boundary monuments require appropriate sig-fig controls.",
      "Hemispheric indicators (N/S/E/W) must be assigned based on the specific coordinate reference system (CRS)."
    ],
    commonMistakes: [
      "Confusing decimal minutes (DMM) with arcseconds (e.g., treating 45° 30.5' as 45° 30' 05\" instead of 45° 30' 30\").",
      "Ignoring the negative sign on Southern or Western hemisphere coordinates during manual floor division.",
      "Assuming mathematical display precision (e.g. 8 decimals) represents field total station angular accuracy (typically 1\" to 5\").",
      "Entering commas or typographic quotes instead of clean numeric values in batch GIS conversion scripts."
    ],
    bestPractices: [
      "Always verify whether your GIS software expects signed decimal degrees (e.g. -122.45°) or cardinal DMS strings (122° 27' 00\" W).",
      "Preserve at least 6 decimal places in decimal degree coordinates to maintain sub-meter positional fidelity (~0.11 m resolution).",
      "Maintain consistent angular units when integrating total station raw angle files (.RAW / .FBK) with GNSS vectors.",
      "Cross-check azimuth quadrant designations when converting between surveyor quadrant bearings and azimuths."
    ],
    faqs: [
      {
        question: "What does the Degree to DMS Calculator calculate?",
        answer: "The Degree to DMS Calculator converts continuous decimal degrees into sexagesimal Degrees (°), Minutes ('), and Seconds (\") notation, Degrees Decimal Minutes (DMM), total cumulative minutes, and total arcseconds for land surveying and GIS workflows."
      },
      {
        question: "What is the mathematical formula used for Degree to DMS conversion?",
        answer: "The whole degree is extracted via D = ⌊DD⌋. The arcminute is calculated by M = ⌊(DD - D) × 60⌋, and the arcseconds are computed from S = ((DD - D) × 60 - M) × 60. Total arcseconds equal DD × 3600."
      },
      {
        question: "What units are supported by this surveying calculator?",
        answer: "The calculator accepts Decimal Degrees (° or DD) and computes Degrees (°), Arcminutes ('), Arcseconds (\"), Degrees Decimal Minutes (DMM), Total Arcminutes, and Total Arcseconds (\")."
      },
      {
        question: "How do I convert a decimal degree value like 179.35° into DMS?",
        answer: "Take the whole number 179 as degrees. Multiply the remaining 0.35 by 60 to get 21.0 arcminutes. Since there is no remaining fraction, arcseconds equal 0. The final result is 179° 21' 0\"."
      },
      {
        question: "What is the physical ground distance of 1 arcsecond in surveying?",
        answer: "On the surface of the Earth along a meridian of latitude, 1 arcdegree is approximately 111.13 km (69 miles), 1 arcminute is approximately 1.852 km (1 nautical mile), and 1 arcsecond is approximately 30.87 meters (101.3 feet)."
      },
      {
        question: "Can this calculator be used for GPS coordinates and GIS mapping?",
        answer: "Yes. GPS receivers and GIS software (such as QGIS and ArcGIS) alternate between decimal degrees and DMS. This calculator allows instant cross-verification between GPS waypoint formats and cadastral survey notes."
      },
      {
        question: "What is the difference between DMS and DMM format?",
        answer: "DMS divides minutes into integer seconds (e.g., 179° 21' 0\"), whereas DMM (Degrees Decimal Minutes) expresses minutes with a decimal fraction (e.g., 179° 21.000'), which is standard in marine GPS navigation."
      },
      {
        question: "How accurate is the calculated result compared to field surveying instruments?",
        answer: "The mathematical calculation is exact to double-precision floating point limits. In field surveying, high-precision total stations measure angles to 1 to 5 arcseconds (0.00027° to 0.00138°), while geodetic GNSS baselines resolve fractions of an arcsecond."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 19111:2019", title: "Geographic information — Referencing by coordinates" },
      { organization: "OGC", code: "OGC 06-121r3", title: "OpenGIS Implementation Standard for Geographic information — Simple feature access" },
      { organization: "EPSG", code: "IOGP EPSG Guidance Note 7-2", title: "Coordinate Conversions and Transformations including Formulas" },
      { organization: "BIPM", code: "SI Brochure 9th Ed.", title: "Non-SI units accepted for use with the International System of Units (plane angle: degree, minute, second)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "surveying-gis-calc", name: "Surveying & GIS" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 2. DEGREE TO DECIMAL DEGREE CALCULATOR
  "degree-to-decimal-degree-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Degree to Decimal Degree Calculator | Surveying Sexagesimal Solver",
    metaDescription: "Convert Degrees, Minutes, and Seconds (DMS) into exact Decimal Degrees (DD) for GPS navigation, geodetic survey adjustments, GIS layer creation, and CAD mapping.",
    canonicalUrl,
    introduction: {
      overview: "The Degree to Decimal Degree Calculator converts sexagesimal angle components—Degrees (°), Minutes ('), and Seconds (\")—into unified, high-precision Decimal Degrees (DD). Cadastral survey plats, historic land patents, legal property deeds, and optical theodolite observations record angles in discrete degree-minute-second integers. Modern Geographic Information Systems (GIS), GNSS post-processing software, and coordinate geometry (COGO) routines require continuous decimal degree floating-point inputs for trigonometric geodesy and spatial distance computations.",
      applications: [
        "Transforming optical total station horizontal circle readings (DMS) into decimal degrees for least-squares traverse adjustments.",
        "Ingesting deed calls and metes-and-bounds legal descriptions into GIS property boundary parcel fabrics.",
        "Converting nautical chart coordinates and aeronautical waypoints into GIS shapefile attribute fields.",
        "Preparing coordinate data for spatial projection conversions (e.g., converting WGS84 DMS to UTM Grid Easting/Northing).",
        "Calibrating field GNSS base station coordinates against published National Geodetic Survey (NGS) benchmark datasheets."
      ],
      industries: [
        "Land & Boundary Surveying",
        "GIS & Geospatial Analytics",
        "Civil Highway & Municipal Engineering",
        "Geodesy & Satellite Positioning",
        "Urban Land Administration & Registry",
        "Hydrographic & Marine Surveying"
      ]
    },
    quickAnswer: "The Degree to Decimal Degree Calculator transforms sexagesimal coordinates into decimal degrees using the exact relationship DD = D + (M / 60) + (S / 3600). With default inputs of 45° Degrees, 52' Minutes, and 21\" Seconds, the calculator computes 45.872500 Decimal Degrees (°).",
    governingEquation: {
      formula: "DD = D + \\frac{M}{60} + \\frac{S}{3600}",
      explanation: "Each sexagesimal arcminute represents exactly 1/60th of an arc degree, and each arcsecond represents exactly 1/3600th of an arc degree (1/60th of an arcminute). Summing the integer degrees with the fractional contributions yields the normalized decimal degree value.",
      variables: [
        { symbol: "DD", label: "Decimal Degrees", unit: "° (deg)", description: "Normalized continuous angular output for spatial software" },
        { symbol: "D", label: "Degrees", unit: "° (deg)", description: "Whole integer degree component (0° to 360°)" },
        { symbol: "M", label: "Arcminutes", unit: "' (arcmin)", description: "Integer arcminute subdivision (0 to 59)" },
        { symbol: "S", label: "Arcseconds", unit: "\" (arcsec)", description: "Arcsecond subdivision including decimal seconds (0.00 to 59.99)" }
      ]
    },
    inputParameters: [
      {
        name: "degrees",
        label: "Degrees (D)",
        unit: "Arc Degrees (°)",
        defaultValue: 45,
        explanation: "The integer component of the sexagesimal angle or coordinate, representing full 1/360th circle increments."
      },
      {
        name: "minutes",
        label: "Minutes (M)",
        unit: "Arcminutes (')",
        defaultValue: 52,
        explanation: "The arcminute component, where each unit is equal to 1/60th of a degree (equivalent to 1 nautical mile of latitude)."
      },
      {
        name: "seconds",
        label: "Seconds (S)",
        unit: "Arcseconds (\")",
        defaultValue: 21,
        explanation: "The arcsecond component, where each unit represents 1/3600th of a degree (~30.87 meters of latitude)."
      }
    ],
    outputExplanation: {
      unit: "Decimal Degrees (°)",
      interpretation: "The computed value of 45.8725° represents the exact normalized angular measure. In spatial GIS databases, this value is stored as a double-precision float (IEEE 754) to eliminate cumulative truncation errors during spatial coordinate transformations.",
      designImpact: "Using unified decimal degrees enables direct calculation of chord distances, spherical law of cosines, Haversine formulas, and datum transformations without complex string parsing."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Degrees (D)", value: 45, unit: "°" },
        { label: "Minutes (M)", value: 52, unit: "'" },
        { label: "Seconds (S)", value: 21, unit: "\"" }
      ],
      substitution: "DD = 45 + \\frac{52}{60} + \\frac{21}{3600} = 45 + 0.8666667 + 0.0058333 = 45.872500^\\circ",
      intermediateSteps: [
        "Step 1: Divide arcminutes by 60: 52 / 60 = 0.8666667°",
        "Step 2: Divide arcseconds by 3600: 21 / 3600 = 0.0058333°",
        "Step 3: Sum fractional contributions: 0.8666667° + 0.0058333° = 0.8725000°",
        "Step 4: Add integer degrees: 45° + 0.8725000° = 45.872500°"
      ],
      finalResult: "45.872500 Decimal Degrees (°)",
      unit: "Decimal Degrees (°)"
    },
    practicalExample: {
      scenarioTitle: "Converting Cadastral Boundary Deed Calls into GIS Point Features",
      industryContext: "A GIS surveyor is digitizing an older property deed stating a corner monument located at Latitude 45° 52' 21\" N into a municipal web GIS system that requires coordinates formatted in decimal degrees.",
      problemStatement: "Calculate the exact decimal degree latitude coordinate from the given DMS call.",
      engineeringSolution: "Dividing 52 minutes by 60 yields 0.866667°, and dividing 21 seconds by 3,600 yields 0.005833°. Adding these to 45° produces 45.872500° N, ready for immediate shapefile or GeoJSON coordinate attribution."
    },
    assumptions: [
      "Input angles adhere to standard base-60 sexagesimal division (60' per degree, 60\" per minute).",
      "Input minutes and seconds are within valid standard ranges (0 ≤ M < 60 and 0 ≤ S < 60).",
      "Directional signs (positive for North/East, negative for South/West) are applied uniformly to the final decimal degree result."
    ],
    limitations: [
      "The conversion is strictly angular and does not account for ellipsoidal height or geoid undulation.",
      "Field instrument precision governs real-world accuracy: 1 arcsecond is ~30.9 m, 0.1 arcsecond is ~3.09 m, and 0.01 arcsecond is ~30.9 cm on the Earth's surface.",
      "Southern latitudes and Western longitudes require a leading negative sign after converting positive DMS components."
    ],
    commonMistakes: [
      "Applying a negative sign to minutes and seconds independently when converting negative coordinates (e.g. -122° 15' 30\" must be calculated as -(122 + 15/60 + 30/3600) = -122.258333°, not -122 + 15/60 + 30/3600 = -121.741667°).",
      "Entering decimal minutes into the seconds field or vice-versa.",
      "Truncating decimal degrees to 3 or 4 decimal places, which causes 10 to 100 meters of positional drift in GIS mapping.",
      "Confusing grid convergence angles with true geodetic north bearings."
    ],
    bestPractices: [
      "Maintain a minimum of 6 decimal places (e.g., 45.872500°) to ensure centimeter-level geospatial precision (~0.11 m resolution).",
      "Always verify hemisphere conventions before importing coordinates into spatial databases.",
      "Check source deeds for whether angles are referenced to Magnetic North, True Astronomic North, or State Plane Grid North.",
      "Use automated validation scripts for large coordinate batch conversions to verify that minutes and seconds do not exceed 59.999."
    ],
    faqs: [
      {
        question: "What does the Degree to Decimal Degree Calculator calculate?",
        answer: "The calculator converts sexagesimal Degrees (°), Minutes ('), and Seconds (\") into unified Decimal Degrees (DD) for GIS mapping, GPS receivers, and geodetic surveying computations."
      },
      {
        question: "What is the formula to convert DMS to Decimal Degrees?",
        answer: "The exact formula is DD = D + (M / 60) + (S / 3600), where D is integer degrees, M is arcminutes, and S is arcseconds."
      },
      {
        question: "What units does this calculator use?",
        answer: "Inputs are Arc Degrees (°), Arcminutes ('), and Arcseconds (\"). The primary output is Decimal Degrees (DD or °)."
      },
      {
        question: "How do I convert 45° 52' 21\" into decimal degrees?",
        answer: "Divide 52 by 60 to get 0.866667°. Divide 21 by 3600 to get 0.005833°. Add both fractions to 45°: 45 + 0.866667 + 0.005833 = 45.872500°."
      },
      {
        question: "How many decimal places are required for surveying precision in decimal degrees?",
        answer: "At the equator, 4 decimal places (~0.0001°) provides ~11.1 meters resolution; 5 decimal places (~0.00001°) gives ~1.11 meters; 6 decimal places (~0.000001°) gives ~0.11 meters (11 cm); and 7 decimal places gives ~1.1 cm, which is standard for land boundary surveying."
      },
      {
        question: "How do I handle negative coordinates such as Western longitudes?",
        answer: "Convert the positive DMS values first using DD = D + (M/60) + (S/3600), then apply the negative sign to the entire result: -(D + M/60 + S/3600). For example, 122° 25' 36\" W becomes -122.426667°."
      },
      {
        question: "Why do GIS and mapping software prefer decimal degrees over DMS?",
        answer: "Decimal degrees are stored as standard floating-point numbers, allowing instant trigonometric calculations (sin, cos, distance, bearings) and spatial spatial indexing without complex text parsing of degree/minute/second symbols."
      },
      {
        question: "How accurate is the conversion compared to total station field measurements?",
        answer: "The mathematical calculation is exact. A field measurement taken with a 1-second total station corresponds to approximately 0.0002778 decimal degrees, which is fully preserved by using 6 or more decimal digits."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 19111:2019", title: "Geographic information — Referencing by coordinates" },
      { organization: "OGC", code: "OGC 06-121r3", title: "OpenGIS Implementation Standard for Geographic information — Simple feature access" },
      { organization: "EPSG", code: "IOGP EPSG Guidance Note 7-2", title: "Coordinate Conversions and Transformations including Formulas" },
      { organization: "NIST", code: "NIST SP 811", title: "Guide for the Use of the International System of Units (SI) - Plane Angle Units" }
    ],
    internalLinks: {
      parentDiscipline: { id: "surveying-gis-calc", name: "Surveying & GIS" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 3. DECIMAL DEGREE TO DMS CALCULATOR
  "decimal-degree-to-dms-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Decimal Degree to DMS Calculator | GIS Coordinate Format Converter",
    metaDescription: "Convert DMS coordinate components into exact Decimal Degrees (DD) for GIS databases, AutoCAD Civil 3D, GNSS positioning, and cadastral survey analysis.",
    canonicalUrl,
    introduction: {
      overview: "The Decimal Degree to DMS Calculator bridges the gap between field surveying coordinate notations and digital geospatial data processing. Civil engineering design software (such as AutoCAD Civil 3D, MicroStation OpenSite, and Bentley InRoads) and geographic information systems (ArcGIS, QGIS, PostGIS) require decimal degree angular parameters for geodetic projection transformations. This tool transforms discrete sexagesimal Degrees (°), Minutes ('), and Seconds (\") into standardized decimal degree values with sub-millimeter angular precision.",
      applications: [
        "Converting field survey coordinate lists (DMS) for direct import into QGIS and ArcGIS attribute tables.",
        "Validating boundary traverse survey closures using decimal degree trigonometric COGO functions.",
        "Exporting total station control station coordinates into GPS machine control guidance files for civil grading.",
        "Translating land parcel easement descriptions from legal deeds into municipal GIS spatial databases.",
        "Verifying GNSS RTK reference station coordinates against state geodetic survey monuments."
      ],
      industries: [
        "Geographic Information Systems (GIS)",
        "Land & Cadastral Surveying",
        "Civil Infrastructure & Roadway Design",
        "Urban Planning & Zoning Administration",
        "Cartography & Spatial Mapping",
        "Precision Agriculture & Construction Guidance"
      ]
    },
    quickAnswer: "The Decimal Degree to DMS Calculator calculates exact decimal degrees from sexagesimal components using DD = D + (M / 60) + (S / 3600). With default input values of 122° Degrees, 25' Minutes, and 36\" Seconds, the calculator computes 122.426667 Decimal Degrees (°).",
    governingEquation: {
      formula: "DD = D + \\frac{M}{60} + \\frac{S}{3600}",
      explanation: "Sexagesimal coordinates divide an arc degree into 60 arcminutes and 3,600 arcseconds. The formula computes the fractional contribution of minutes (M/60) and seconds (S/3600) and sums them with the integer degrees to produce the unified decimal degree value.",
      variables: [
        { symbol: "DD", label: "Decimal Degrees", unit: "° (deg)", description: "Unified continuous decimal degree coordinate for GIS spatial calculations" },
        { symbol: "D", label: "Degrees", unit: "° (deg)", description: "Whole integer arc degree component (0° to 360°)" },
        { symbol: "M", label: "Arcminutes", unit: "' (arcmin)", description: "Sexagesimal arcminute component (0 to 59)" },
        { symbol: "S", label: "Arcseconds", unit: "\" (arcsec)", description: "Sexagesimal arcsecond component (0.00 to 59.99)" }
      ]
    },
    inputParameters: [
      {
        name: "degrees",
        label: "Degrees (D)",
        unit: "Arc Degrees (°)",
        defaultValue: 122,
        explanation: "Integer degree value of the coordinate or angular measurement (e.g. 122° longitude or 34° latitude)."
      },
      {
        name: "minutes",
        label: "Minutes (M)",
        unit: "Arcminutes (')",
        defaultValue: 25,
        explanation: "Arcminute component, representing 1/60th of an arc degree (~1 nautical mile of latitude)."
      },
      {
        name: "seconds",
        label: "Seconds (S)",
        unit: "Arcseconds (\")",
        defaultValue: 36,
        explanation: "Arcsecond component, representing 1/3600th of an arc degree (~30.87 meters of latitude)."
      }
    ],
    outputExplanation: {
      unit: "Decimal Degrees (°)",
      interpretation: "The output value of 122.426667° is the standardized decimal degree equivalent of 122° 25' 36\". This format is universally accepted across spatial database engines (PostGIS, Oracle Spatial, SpatiaLite) and Web Map Services (WMS/WFS).",
      designImpact: "Proper conversion ensures seamless overlay of cadastral property lines over high-resolution orthophotography and LiDAR point clouds without systematic rotational or offset errors."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Degrees (D)", value: 122, unit: "°" },
        { label: "Minutes (M)", value: 25, unit: "'" },
        { label: "Seconds (S)", value: 36, unit: "\"" }
      ],
      substitution: "DD = 122 + \\frac{25}{60} + \\frac{36}{3600} = 122 + 0.4166667 + 0.0100000 = 122.426667^\\circ",
      intermediateSteps: [
        "Step 1: Divide arcminutes by 60: 25 / 60 = 0.4166667°",
        "Step 2: Divide arcseconds by 3600: 36 / 3600 = 0.0100000°",
        "Step 3: Combine fractional portions: 0.4166667° + 0.0100000° = 0.4266667°",
        "Step 4: Add integer degrees: 122° + 0.4266667° = 122.426667°"
      ],
      finalResult: "122.426667 Decimal Degrees (°)",
      unit: "Decimal Degrees (°)"
    },
    practicalExample: {
      scenarioTitle: "Ingesting Geodetic Survey Benchmark Coordinates into a City GIS",
      industryContext: "A municipal survey department is migrating paper survey monument index cards into an enterprise GIS geodatabase. Monument #BM-104 has a published longitude of 122° 25' 36\" W.",
      problemStatement: "Convert the published DMS longitude into signed decimal degrees for spatial database storage.",
      engineeringSolution: "Using the formula DD = 122 + (25/60) + (36/3600) gives 122.426667°. Because the benchmark is located in the Western Hemisphere, a negative sign is assigned, yielding -122.426667° longitude for spatial database point feature creation."
    },
    assumptions: [
      "Input angles are referenced to standard 360° sexagesimal circular coordinates.",
      "Minutes are within 0 to 59 and seconds are within 0 to 59.999.",
      "The underlying geodetic datum (e.g., WGS84, NAD83, ETRS89) is preserved during the conversion."
    ],
    limitations: [
      "The conversion changes the numerical format only and does not perform geodetic datum transformations (e.g. NAD27 to NAD83).",
      "Display precision should match the source measurement instrument (e.g. 1\" precision corresponds to ~5 decimal places).",
      "Meridian convergence and grid scale factors must be accounted for when projecting decimal degrees to local plane coordinates (e.g., State Plane or UTM)."
    ],
    commonMistakes: [
      "Entering seconds in base-10 decimal format instead of sexagesimal seconds (e.g., treating 36\" as 0.36 minutes).",
      "Forgetting to apply a negative sign to Southern latitude or Western longitude coordinates when entering data into GIS software.",
      "Truncating calculations prematurely, leading to several meters of positional discrepancy on boundary lines.",
      "Mixing up Latitude (North/South, Y-axis) and Longitude (East/West, X-axis) in GIS attribute column mapping."
    ],
    bestPractices: [
      "Store decimal degree coordinates as double-precision floating-point numbers in GIS and database schemas.",
      "Always document the horizontal datum (e.g. WGS84, NAD83-2011) alongside the converted decimal degree coordinates.",
      "Maintain at least 6 decimal places (e.g., 122.426667°) to preserve centimeter-level ground accuracy (~0.11 m).",
      "Cross-verify imported points against aerial imagery or known benchmark monuments to catch hemisphere and quadrant swap errors."
    ],
    faqs: [
      {
        question: "What does the Decimal Degree to DMS Calculator calculate?",
        answer: "The Decimal Degree to DMS Calculator converts sexagesimal Degrees (°), Minutes ('), and Seconds (\") into exact continuous Decimal Degrees (DD) for GIS databases, CAD software, and GNSS coordinate workflows."
      },
      {
        question: "What formula is used to calculate Decimal Degrees from DMS?",
        answer: "The formula is DD = D + (M / 60) + (S / 3600), dividing arcminutes by 60 and arcseconds by 3,600 before adding them to the whole degrees."
      },
      {
        question: "What units does this calculator support?",
        answer: "Inputs are Arc Degrees (°), Arcminutes ('), and Arcseconds (\"). The output is provided in Decimal Degrees (DD or °)."
      },
      {
        question: "How is 122° 25' 36\" converted to decimal degrees?",
        answer: "Divide 25 by 60 to get 0.416667°. Divide 36 by 3600 to get 0.010000°. Summing with 122 gives 122 + 0.416667 + 0.010000 = 122.426667°."
      },
      {
        question: "Why is 1 arcsecond equal to 1/3600 of a degree?",
        answer: "Because an arc degree is divided into 60 arcminutes, and each arcminute is further divided into 60 arcseconds (60 × 60 = 3,600 arcseconds per degree)."
      },
      {
        question: "How should Western longitudes and Southern latitudes be formatted in GIS?",
        answer: "In GIS software (such as QGIS, ArcGIS, and Google Earth), Western longitudes and Southern latitudes are expressed as negative decimal degrees (e.g., 122° 25' 36\" W is -122.426667°)."
      },
      {
        question: "What ground distance does 0.000001 decimal degrees represent?",
        answer: "At the equator along a meridian of latitude, 0.000001° (1 microdegree) corresponds to approximately 0.111 meters (11.1 centimeters or 4.37 inches)."
      },
      {
        question: "How accurate is the result for land boundary surveys?",
        answer: "The mathematical calculation is exact to double-precision floating point limits. Maintaining 6 or 7 decimal places ensures the full precision of 1-arcsecond optical theodolite and RTK GNSS field measurements is preserved."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 19111:2019", title: "Geographic information — Referencing by coordinates" },
      { organization: "OGC", code: "OGC 06-121r3", title: "OpenGIS Implementation Standard for Geographic information — Simple feature access" },
      { organization: "EPSG", code: "IOGP EPSG Guidance Note 7-2", title: "Coordinate Conversions and Transformations including Formulas" },
      { organization: "NIST", code: "NIST SP 811", title: "Guide for the Use of the International System of Units (SI)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "surveying-gis-calc", name: "Surveying & GIS" },
      relatedTools,
      relevantUnitCategories
    }
  })
};
