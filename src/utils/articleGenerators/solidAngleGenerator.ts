import { Category, Unit } from "../../types";
import {
  FormatOptions,
  SEOArticle,
  formatUnitValue,
  performConversion,
  getStringHash
} from "../conversionEngine";

/**
 * High-Precision, Domain-Specific Generator for Solid Angle & Spherical Geometry Converters
 */
export function generateSolidAngleContent(
  category: Category,
  fromUnit: Unit,
  toUnit: Unit,
  formatOpts: FormatOptions = { precision: 9, useSigFigs: false, notation: "auto" }
): SEOArticle {
  const fromName = fromUnit.name;
  const fromPlural = fromUnit.plural;
  const fromSym = fromUnit.symbol;
  const toName = toUnit.name;
  const toPlural = toUnit.plural;
  const toSym = toUnit.symbol;

  const pairKey = `${fromUnit.id}-to-${toUnit.id}`;
  const hash = getStringHash(pairKey);

  // Exact 1-unit conversion ratios calculated through conversionEngine
  const unitRatio = performConversion(1, fromUnit, toUnit, category);
  const formattedRatio = formatUnitValue(unitRatio, formatOpts).html;
  const reverseRatio = performConversion(1, toUnit, fromUnit, category);
  const formattedReverseRatio = formatUnitValue(reverseRatio, formatOpts).html;

  // SEO Title & Meta Description
  const title = `Free ${fromName} to ${toName} Converter - ${fromSym} to ${toSym} Solid Angle`;
  const metaDescription = `Convert ${fromPlural.toLowerCase()} to ${toPlural.toLowerCase()} (${fromSym} to ${toSym}) accurately. Explore spherical geometry formulas, steradians, spats, square degrees, and astronomical field-of-view applications.`;

  // Human-Grade Technical Introduction
  const introParagraphs = [
    `In spherical geometry, astrophysics, radiometry, and optical engineering, a **solid angle** measures the two-dimensional angular spread subtended by an object on the surface of a sphere as viewed from its center. Translating **${fromPlural}** (${fromSym}) to **${toPlural}** (${toSym}) enables precise mathematical comparisons between three-dimensional angular fields of view, telescope sensor apertures, and omnidirectional radiant emissions.`,
    `Unlike planar angles (such as radians and degrees) that quantify divergence between two intersecting lines in a two-dimensional plane, solid angles quantify three-dimensional cones, pyramids, or irregular patches projected onto a spherical surface. The standard coherent derived unit of solid angle in the International System of Units (SI) is the **steradian (sr)**. One steradian is defined as the solid angle that cuts out an area equal to the square of the sphere's radius ($A = r^2$) on the spherical surface, making the solid angle of an entire sphere exactly **$4\\pi$ steradians** (approximately 12.56637 sr), also defined as **1 spat (sp)**.`,
    `Astronomers and optical physicists frequently express smaller fields of view in angular area units, including **square degrees (deg²)**, **square arcminutes (arcmin²)**, and **square arcseconds (arcsec²)**. For instance, the entire celestial sphere encompasses approximately 41,252.96 square degrees. This guide details the exact geometrical relationship between ${fromName} and ${toName}, outlines step-by-step conversion calculations, provides a verified reference table, and explains practical applications across observational astronomy, radiometry, and antenna radiation patterns.`
  ];
  const introduction = introParagraphs.join("\n\n");

  // Mathematical Formula Section
  const formulaHeadings = [
    `Solid Angle Conversion Formula: ${fromSym} to ${toSym}`,
    `How to Calculate ${toPlural} from ${fromPlural}`,
    `Spherical Geometry Equation: ${fromName} to ${toName}`,
    `Mathematical Relationship Between ${fromSym} and ${toSym}`
  ];
  const formulaSectionHeading = formulaHeadings[hash % formulaHeadings.length];

  let formulaExplanation = "";
  if (fromUnit.id === "spat") {
    formulaExplanation = `Because 1 spat (sp) represents the complete surface of a sphere ($4\\pi$ steradians, or approximately 41,252.96 square degrees), converting from spats to ${toPlural} (${toSym}) expands the value into standard regional solid angular subdivisions by multiplying by ${formattedRatio}.`;
  } else if (toUnit.id === "spat") {
    formulaExplanation = `To express a solid angle in spats (sp), the value is normalized against the complete $4\\pi$ steradian spherical solid angle. Multiplying the input in ${fromPlural} by ${formattedRatio} determines the exact fractional proportion of the entire celestial sphere represented by the angle.`;
  } else if (fromUnit.id === "steradian" || toUnit.id === "steradian") {
    formulaExplanation = `The steradian (sr) is the SI base standard for solid angle. To convert between ${fromPlural} (${fromSym}) and ${toPlural} (${toSym}), the input is scaled by the spherical geometric ratio of ${formattedRatio}, derived from the constant relationship $(180/\\pi)^2 \\approx 3282.80635$ square degrees per steradian.`;
  } else {
    formulaExplanation = `Converting between ${fromPlural} (${fromSym}) and ${toPlural} (${toSym}) is a direct geometric proportion. Multiply your value in ${fromPlural} by the scale factor of ${formattedRatio} to determine the equivalent measure in ${toPlural}.`;
  }

  const formulaMath = `1 ${fromSym} = ${formattedRatio} ${toSym}`;

  // Step-by-Step Solver for 10 units
  const testInput = 10;
  const baseSrVal = testInput * fromUnit.factor;
  const finalConvertedVal = performConversion(testInput, fromUnit, toUnit, category);
  const formattedTestInput = formatUnitValue(testInput, formatOpts).html;
  const formattedBaseSr = formatUnitValue(baseSrVal, formatOpts).html;
  const formattedFinalVal = formatUnitValue(finalConvertedVal, formatOpts).html;

  const fractionOfSphere = (baseSrVal / (4 * Math.PI)) * 100;
  const formattedFractionOfSphere = formatUnitValue(fractionOfSphere, { precision: 4, useSigFigs: false, notation: "auto" }).html;

  const stepByStep: string[] = [
    `Start with the initial solid angle measurement: ${formattedTestInput} ${fromSym}.`,
    `Convert ${fromPlural} to the SI coherent base unit of Steradians (sr) using the source factor (${formatUnitValue(fromUnit.factor, formatOpts).html} sr/${fromSym}): ${formattedTestInput} × ${formatUnitValue(fromUnit.factor, formatOpts).html} = ${formattedBaseSr} sr.`,
    `Convert from steradians to the target unit (${toPlural}) by dividing by the target factor (${formatUnitValue(toUnit.factor, formatOpts).html} sr/${toSym}): ${formattedBaseSr} / ${formatUnitValue(toUnit.factor, formatOpts).html} = ${formattedFinalVal} ${toSym}.`,
    `Spherical Geometric Context: A solid angle of ${formattedTestInput} ${fromSym} corresponds to ${formattedBaseSr} steradians, which subtends approximately ${formattedFractionOfSphere}% of a complete sphere ($4\\pi$ steradians = 1 spat).`,
    `Final Result: ${formattedTestInput} ${fromSym} is exactly equivalent to ${formattedFinalVal} ${toSym}.`
  ];

  // Worked Examples
  const exampleValues = [1, 2, 5, 10];
  const exampleHeadings = [
    `Practical Solid Angle Examples`,
    `Real-World Spherical Geometry Calculations`,
    `Sample Calculations: ${fromSym} to ${toSym}`,
    `Solved Solid Angle Conversion Problems`
  ];
  const examplesHeading = exampleHeadings[hash % exampleHeadings.length];

  const exampleDescriptions: Record<number, string> = {
    1: `Single standard unit baseline (useful for calibrating detector field of view or luminous intensity projections).`,
    2: `Intermediate angular area (typical for wide-angle camera lenses, hemispherical radiation lobes, or sensor cones).`,
    5: `Broad angular spread (equivalent to substantial sectors of a hemisphere or wide telescope survey swaths).`,
    10: `Large spherical sector (approaching full omnidirectional spherical coverage).`
  };

  const exampleItems = exampleValues.map(val => {
    const converted = performConversion(val, fromUnit, toUnit, category);
    const formattedConverted = formatUnitValue(converted, formatOpts).html;
    return {
      input: val,
      output: formattedConverted,
      explanation: `${val} ${fromSym} × ${formattedRatio} = ${formattedConverted} ${toSym}. ${exampleDescriptions[val] || ""}`
    };
  });

  // Conversion Table with Astronomically & Geometrically Accurate Contexts
  const tableValues = [0.001, 0.01, 0.1, 0.5, 1, 2, 3.14159, 4, 6.28318, 12.56637];
  const solidAngleContexts: Record<number, string> = {
    0.001: "Narrow optical sensor aperture / Deep space telescope focal area",
    0.01: "Planetary disk solid angle / High-magnification microscope field",
    0.1: "High-resolution astrophotography frame / Laser beam divergence cone",
    0.5: "Astronomical constellation bounding region / Camera lens field of view",
    1: "Standard 1-unit baseline / 1 sr cone (~65.54° apex angle)",
    2: "Wide-angle fish-eye lens coverage / Directional floodlight lobe",
    3.14159: "Quarter sphere solid angle (π steradians = 0.25 spat)",
    4: "Broad diffuse emitter radiation cone / Wide parabolic antenna beam",
    6.28318: "Complete hemisphere solid angle (2π steradians = 0.5 spat)",
    12.56637: "Complete celestial sphere (4π steradians = 1 spat = 41,252.96 deg²)"
  };

  const conversionTable = tableValues.map(val => {
    const converted = performConversion(val, fromUnit, toUnit, category);
    return {
      value: val,
      converted: formatUnitValue(converted, formatOpts).html,
      context: solidAngleContexts[val] || "Standard solid angular aperture reference"
    };
  });

  // Historical and Scientific Significance Section
  const historyHeadings = [
    `Historical Evolution of Solid Angle & Spherical Geometry Units`,
    `Origins of the Steradian, Spat, and Square Degree`,
    `How Solid Angles Shaped Modern Astrophysics & Photometry`,
    `The Scientific Principles of Three-Dimensional Angular Measurement`
  ];
  const historyHeading = historyHeadings[hash % historyHeadings.length];

  const historyText = `The mathematical study of solid angles dates back to the 18th century through the work of Swiss polymath Johann Heinrich Lambert, who formulated the photometric laws of radiant emission and spherical projection. In 1772, Lambert demonstrated that the solid angle subtended by a surface on a sphere governs the concentration of light and radiant flux.

In the 19th century, German mathematician Carl Friedrich Gauss formalized the concept of total spherical curvature and Gaussian surface integrals, laying the foundation for electrodynamics (Gauss's Law, where electric flux over a closed surface equals charge enclosed divided by permittivity, intrinsically linked to $4\\pi$ steradians).

The term **steradian** was formally introduced in 1884, derived from the Greek *stereos* (meaning "solid") and *radius*. In 1960, the General Conference on Weights and Measures (CGPM) established the steradian (symbol: sr) as a supplementary SI unit, and in 1995 reclassified it as a dimensionless derived SI unit ($m^2/m^2 = 1$). In astronomy, the **spat** (symbol: sp) was defined as the solid angle of an entire sphere ($4\\pi$ sr), while square degrees, square arcminutes, and square arcseconds remain the primary angular area units used by modern space observatories such as the Hubble Space Telescope, Kepler, and the James Webb Space Telescope (JWST) to map deep cosmic survey fields.`;

  // Specialized, Non-Generic Solid Angle FAQs
  const faqs: { question: string; answer: string }[] = [
    {
      question: `What is the difference between a planar angle and a solid angle?`,
      answer: `A planar angle (measured in radians or degrees) is two-dimensional and quantifies the rotational separation between two lines intersecting at a single vertex in a plane. A solid angle (measured in steradians, spats, or square degrees) is three-dimensional and quantifies the area that a cone, pyramid, or spatial object projects onto the surface of a surrounding sphere as viewed from its center.`
    },
    {
      question: `What is a steradian in simple terms?`,
      answer: `A steradian (symbol: sr) is the SI unit of solid angle. If you imagine a sphere with a radius of $r$, a solid angle of 1 steradian projects an area of exactly $r^2$ onto the sphere's surface. A cone with a solid angle of 1 steradian has an apex angle of approximately 65.54 degrees (1.144 radians).`
    },
    {
      question: `What is a spat, and how many steradians are in one spat?`,
      answer: `A spat (symbol: sp) is the solid angle corresponding to an entire sphere. Because the surface area of a sphere is $4\\pi r^2$, dividing by $r^2$ yields exactly $4\\pi$ steradians (approximately 12.566370614 sr) in 1 spat. It is also equivalent to approximately 41,252.96 square degrees.`
    },
    {
      question: `How many square degrees are in the entire celestial sky?`,
      answer: `There are exactly $4\\pi \\times (180/\\pi)^2 = 129,600/\\pi \\approx 41,252.96$ square degrees in a complete sphere (or 1 spat). This number is fundamental in observational astronomy for calculating celestial survey coverage and telescope field of view.`
    },
    {
      question: `How do square arcminutes and square arcseconds relate to square degrees?`,
      answer: `Just as 1 degree equals 60 arcminutes and 3,600 arcseconds, solid angular areas scale quadratically: 1 square degree ($1\\text{ deg}^2$) equals $(60)^2 = 3,600$ square arcminutes ($\text{arcmin}^2$) and $(3,600)^2 = 12,960,000$ square arcseconds ($\text{arcsec}^2$). Astronomers use square arcminutes and square arcseconds to measure small celestial objects like galaxies, nebulae, and high-resolution telescope detector footprints.`
    },
    {
      question: `What is the relationship between lumens, candelas, and steradians in lighting?`,
      answer: `In photometry, luminous flux (lumens, lm) equals luminous intensity (candelas, cd) multiplied by the solid angle (steradians, sr) through which light is emitted: $\\text{Lumens} = \\text{Candelas} \\times \\text{Steradians}$. A light source emitting 1 candela uniformly in all directions ($4\\pi$ steradians) produces a total luminous flux of $4\\pi \\approx 12.57$ lumens.`
    },
    {
      question: `What is the formula to convert ${fromName} to ${toName}?`,
      answer: `The formula is: Value in ${toPlural} = Value in ${fromPlural} × ${formattedRatio}. To reverse the calculation from ${toName} to ${fromName}, divide by ${formattedRatio} (or multiply by ${formattedReverseRatio}).`
    },
    {
      question: `What is the solid angle of the Sun or Moon as viewed from Earth?`,
      answer: `Both the Sun and the Moon subtend an angular diameter of roughly 0.5 degrees (30 arcminutes) in the sky. Applying the spherical cone solid angle formula $\\Omega = 2\\pi(1 - \\cos(\\theta/2))$ yields a solid angle of approximately $6 \\times 10^{-5}$ steradians (or about 0.2 square degrees), which is roughly 1/200,000th of the entire sky.`
    },
    {
      question: `Is solid angle considered a dimensionless quantity in the SI system?`,
      answer: `Yes. In the International System of Units (SI), the steradian is formally defined as $m^2/m^2 = 1$, making it a dimensionless derived unit. However, the special unit name "steradian" (sr) is maintained in scientific practice to distinguish three-dimensional angular flux measurements from pure dimensionless ratios.`
    },
    {
      question: `How do astronomers use solid angle measurements in deep-space surveys?`,
      answer: `Astronomers measure survey areas in solid angle units (such as square degrees or steradians) to calculate galaxy spatial densities, cosmological large-scale structure clustering, and cosmic microwave background (CMB) temperature fluctuations across the celestial sphere.`
    }
  ];

  return {
    title,
    metaDescription,
    introduction,
    formulaSection: {
      heading: formulaSectionHeading,
      text: formulaExplanation,
      formula: formulaMath
    },
    stepByStep,
    examples: {
      heading: examplesHeading,
      items: exampleItems
    },
    conversionTable,
    faqs,
    historySection: {
      heading: historyHeading,
      text: historyText
    }
  };
}
