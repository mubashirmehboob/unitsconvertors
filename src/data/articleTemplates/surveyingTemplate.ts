import { CalculatorCategoryArticleTemplate, ArticleGeneratorContext } from "./types";
import { EngineeringArticleData } from "../engineeringArticlesEngine";

/**
 * SURVEYING & GIS CALCULATOR ARTICLE TEMPLATE V1.0
 * 
 * Category-specific template for all Surveying & GIS calculators.
 * Implements domain-specific geodetic, spatial, cartographic, and surveying content.
 * Guarantees zero generic industrial/thermal filler and exactly 8 complete FAQs.
 */
export const surveyingArticleTemplate: CalculatorCategoryArticleTemplate = {
  categoryId: "surveying-gis-calculators",
  categoryName: "Surveying & GIS",

  generateArticle: (ctx: ArticleGeneratorContext): EngineeringArticleData => {
    const { tool, discipline, canonicalUrl, calculatedOutput, outputFormatted, relatedTools, relevantUnitCategories } = ctx;

    // Build input descriptions
    const inputDescriptions = tool.inputs.map(inp => ({
      name: inp.name,
      label: inp.label,
      unit: inp.unit,
      defaultValue: inp.defaultValue,
      explanation: `Input parameter representing ${inp.label.toLowerCase()} measured in ${inp.unit}. In surveying, geodesy, and GIS operations, this parameter determines spatial coordinates, angle subdivisions, or boundary geometry in the target coordinate reference system.`
    }));

    // Build variables list for equation table
    const equationVariables = [
      ...tool.inputs.map(inp => ({
        symbol: inp.name.charAt(0).toUpperCase() + inp.name.slice(1, 3),
        label: inp.label,
        unit: inp.unit,
        description: `Surveying input variable for ${inp.label.toLowerCase()} in geodetic calculation.`
      })),
      {
        symbol: "Res",
        label: tool.name.replace(" Calculator", ""),
        unit: tool.outputUnit,
        description: `Computed surveying output parameter representing ${tool.outputUnit} in the specified spatial framework.`
      }
    ];

    // Format given inputs
    const givenInputs = tool.inputs.map(inp => ({
      label: inp.label,
      value: inp.defaultValue,
      unit: inp.unit
    }));

    const resultDisplay = outputFormatted || (calculatedOutput !== null ? calculatedOutput.toString() : "Calculated Output");

    return {
      title: `${tool.name} | Surveying & GIS Engineering Tool`,
      metaDescription: `${tool.name} calculates ${tool.outputUnit} for land surveying, geodesy, cartography, and GIS spatial data processing using ${tool.formula}.`,
      canonicalUrl,
      introduction: {
        overview: `${tool.name} is a dedicated surveying and geospatial analysis tool used in field land measurement, topographic surveying, geodetic positioning, boundary mapping, and GIS spatial data processing. In modern cadastral surveying, engineering infrastructure development, and GIS layer management, accurate angular transformations and coordinate calculations are essential to align field total station observations, GNSS satellite vectors, and spatial database tables with legal boundary deeds and geographic coordinate reference systems (CRS).`,
        applications: [
          "Land surveying, cadastral boundary measurements, and metes-and-bounds deed parcel calculations.",
          "Topographic survey data processing, contour generation, and digital elevation model (DEM) alignment.",
          "Geographic Information System (GIS) spatial layer preparation, coordinate transformations, and attribute georeferencing.",
          "Coordinate-based measurements, total station traverse adjustments, and COGO (coordinate geometry) routines.",
          "Civil construction staking, highway right-of-way alignment, and parcel fabric validation."
        ],
        industries: [
          "Cadastral & Land Surveying",
          "Geographic Information Systems (GIS)",
          "Civil & Infrastructure Engineering",
          "Cartography & Topographic Mapping",
          "Geodetic Science & Satellite Navigation",
          "Urban Planning & Land Administration"
        ]
      },
      quickAnswer: `${tool.name} calculates ${tool.outputUnit} using the mathematical relationship ${tool.formula}. With standard default inputs of ${givenInputs.map(g => `${g.label} = ${g.value} ${g.unit}`).join(", ")}, the calculator computes ${resultDisplay} ${tool.outputUnit}.`,
      governingEquation: {
        formula: tool.formula,
        explanation: `The mathematical formulation computes ${tool.outputUnit} based on standardized geometric and geodetic coordinate relationships. Each input variable contributes to resolving the final spatial angular or distance parameter without cumulative numerical drift.`,
        variables: equationVariables
      },
      inputParameters: inputDescriptions,
      outputExplanation: {
        unit: tool.outputUnit,
        interpretation: `The primary calculated output of ${resultDisplay} ${tool.outputUnit} represents the resolved surveying parameter in the target geodetic and spatial coordinate framework.`,
        designImpact: "Precise numerical computation ensures spatial data integrity across CAD drawings, GIS databases, and field instrument controllers, preventing costly boundary disputes and construction alignment discrepancies."
      },
      stepByStepExample: {
        givenInputs,
        substitution: `${tool.formula} with default surveying parameters`,
        intermediateSteps: [
          `Step 1: Identify given field inputs: ${givenInputs.map(g => `${g.label} = ${g.value} ${g.unit}`).join(", ")}`,
          `Step 2: Apply the governing mathematical relationship: ${tool.formula}`,
          `Step 3: Execute numerical subdivision or geometric calculation according to sexagesimal and geodetic rules`,
          `Step 4: Compute final resolved surveying output: ${resultDisplay} ${tool.outputUnit}`
        ],
        finalResult: `${resultDisplay} ${tool.outputUnit}`,
        unit: tool.outputUnit
      },
      practicalExample: {
        scenarioTitle: `Surveying & GIS Field Calculation: ${tool.name}`,
        industryContext: "A licensed professional land survey crew is compiling field traverse observations and GNSS coordinate data for a municipal infrastructure corridor and parcel boundary survey.",
        problemStatement: `Compute the resulting ${tool.outputUnit} for field records using the input parameters ${givenInputs.map(g => `${g.label} = ${g.value} ${g.unit}`).join(", ")}.`,
        engineeringSolution: `Applying the governing formula ${tool.formula} yields ${resultDisplay} ${tool.outputUnit}, which is recorded directly into the survey field book and GIS feature dataset.`
      },
      assumptions: [
        "Measurements are provided in consistent, compatible angular or linear surveying units.",
        "Coordinates and angles use standard Euclidean geometric or geodetic ellipsoidal conventions.",
        "Calculations assume standard 360° circle geometry with positive conventions for North/East azimuths."
      ],
      limitations: [
        "Map projection scale factors and grid-to-ground distance distortions are not automatically applied.",
        "Instrument measurement uncertainty in the field must be considered alongside mathematical floating-point precision.",
        "Geodetic datum transformations (e.g. NAD27 to NAD83 / WGS84) require specialized ellipsoid parameters."
      ],
      commonMistakes: [
        "Mixing up decimal minutes (DMM) and sexagesimal seconds (DMS) during coordinate transcription.",
        "Omitting negative signs for Southern latitudes or Western longitudes when entering spatial coordinates.",
        "Assuming displayed mathematical precision (e.g. 8 decimal places) equals instrument measurement accuracy in the field.",
        "Confusing true astronomic north, magnetic north, and State Plane grid north azimuths."
      ],
      bestPractices: [
        "Always verify the active coordinate reference system (CRS) and horizontal datum before importing calculated values.",
        "Preserve at least 6 decimal places for decimal degree coordinates to ensure sub-meter spatial resolution (~0.11 m).",
        "Document all source measurement metadata and coordinate conventions in field traverse notes.",
        "Cross-check critical parcel and control point computations using independent surveying software or COGO checks."
      ],
      faqs: [
        {
          question: `What does the ${tool.name} calculate?`,
          answer: `${tool.name} calculates ${tool.outputUnit} for land surveying, geodesy, and GIS mapping using the mathematical relationship ${tool.formula}.`
        },
        {
          question: `What formula does the ${tool.name} use?`,
          answer: `The calculator evaluates ${tool.formula}, transforming input parameters into standardized ${tool.outputUnit} according to geometric and geodetic rules.`
        },
        {
          question: `What units are supported by this surveying calculator?`,
          answer: `The tool natively supports ${tool.inputs.map(i => i.unit).join(", ")} as inputs and generates results in ${tool.outputUnit}.`
        },
        {
          question: `How do I use the ${tool.name}?`,
          answer: `Enter your known surveying parameters (${tool.inputs.map(i => i.label).join(", ")}) into the input fields; the calculator automatically updates and resolves the output in real time.`
        },
        {
          question: `How does changing ${tool.inputs[0]?.label || "an input parameter"} affect the result?`,
          answer: `Because the calculation is directly governed by ${tool.formula}, adjusting ${tool.inputs[0]?.label || "the input value"} proportionally updates the resulting ${tool.outputUnit} across all coordinate formats.`
        },
        {
          question: "Can this calculator be used for field land surveying or GIS data compilation?",
          answer: "Yes. It is designed for field calculations, total station angle conversion, GPS waypoint formatting, and GIS layer coordinate preparation."
        },
        {
          question: "What are the most common errors when using this calculator?",
          answer: "Common mistakes include entering incorrect unit formats (such as treating decimal minutes as seconds) and forgetting to apply negative signs to Western or Southern hemisphere coordinates."
        },
        {
          question: "How accurate is the calculated result compared to field surveying instruments?",
          answer: "The mathematical calculation is exact to IEEE double-precision floating-point limits. In the field, physical accuracy is determined by the total station or GNSS receiver specifications."
        }
      ],
      standardsReferences: [
        { organization: "ISO", code: "ISO 19111:2019", title: "Geographic information — Referencing by coordinates" },
        { organization: "OGC", code: "OGC 06-121r3", title: "OpenGIS Implementation Standard for Geographic information — Simple feature access" },
        { organization: "EPSG", code: "IOGP EPSG Guidance Note 7-2", title: "Coordinate Conversions and Transformations including Formulas" },
        { organization: "BIPM", code: "SI Brochure 9th Ed.", title: "Non-SI units accepted for use with the International System of Units (plane angle units)" }
      ],
      internalLinks: {
        parentDiscipline: { id: discipline.id, name: discipline.name },
        relatedTools,
        relevantUnitCategories
      }
    };
  }
};
