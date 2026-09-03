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
  // MANDATORY: Use HTML <strong>...</strong> for bold emphasis. Never use Markdown **...** syntax.
  const introParagraphs = [
    `In spherical geometry and physics, a <strong>solid angle</strong> measures the two-dimensional angular spread subtended by an object on the surface of a sphere as viewed from its center. While the <strong>steradian (sr)</strong> is the official SI coherent derived unit for solid angle, the <strong>square radian (rad²)</strong> is dimensionally equivalent (1 rad² = 1 sr).`,
    `A complete sphere encompasses 4π steradians (approximately 12.56637 sr), which is defined as <strong>one spat (sp)</strong>. The spat is an uncommon unit representing the whole sphere (4π sr), primarily of theoretical or historical interest; astronomers and optical engineers almost always use steradians, square degrees, square arcminutes, or square arcseconds.`,
    `To convert <strong>square radians to spats</strong>, divide the value in square radians by 4π (approximately 12.56637), or multiply by 1 / (4π) ≈ 0.0795775. For example, 1 square radian equals approximately 0.07958 spats, which corresponds to about 7.96% of a complete sphere.`
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
    formulaExplanation = `Because 1 spat (sp) represents the complete surface of a sphere (4π steradians, or approximately 41,252.96 square degrees), converting from spats to ${toPlural} (${toSym}) expands the value into standard regional solid angular subdivisions by multiplying by ${formattedRatio}.`;
  } else if (toUnit.id === "spat") {
    formulaExplanation = `To express a solid angle in spats (sp), the value is normalized against the complete 4π steradian spherical solid angle. Multiplying the input in ${fromPlural} by ${formattedRatio} determines the exact fractional proportion of the entire celestial sphere represented by the angle.`;
  } else if (fromUnit.id === "steradian" || toUnit.id === "steradian") {
    formulaExplanation = `The steradian (sr) is the SI base standard for solid angle. To convert between ${fromPlural} (${fromSym}) and ${toPlural} (${toSym}), the input is scaled by the spherical geometric ratio of ${formattedRatio}, derived from the constant relationship (180/π)² ≈ 3282.80635 square degrees per steradian.`;
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
    `Spherical Geometric Context: A solid angle of ${formattedTestInput} ${fromSym} corresponds to ${formattedBaseSr} steradians, which subtends approximately ${formattedFractionOfSphere}% of a complete sphere (4π steradians = 1 spat).`,
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

  // Conversion Table with Geometrically Accurate Fractional Contexts
  const tableValues = [0.001, 0.01, 0.1, 0.5, 1, 2, 3.14159, 4, 6.28318, 12.56637];
  const solidAngleContexts: Record<number, string> = {
    0.001: "≈ 0.00796% of full sphere",
    0.01: "≈ 0.07958% of full sphere",
    0.1: "≈ 0.79577% of full sphere",
    0.5: "≈ 3.97887% of full sphere",
    1: "≈ 7.95775% of full sphere",
    2: "≈ 15.91549% of full sphere",
    3.14159: "Quarter sphere (π sr = 0.25 sp)",
    4: "≈ 31.83099% of full sphere",
    6.28318: "Hemisphere (2π sr = 0.5 sp)",
    12.56637: "Complete sphere (4π sr = 1 sp)"
  };

  const conversionTable = tableValues.map(val => {
    const converted = performConversion(val, fromUnit, toUnit, category);
    return {
      value: val,
      converted: formatUnitValue(converted, formatOpts).html,
      context: solidAngleContexts[val] || ""
    };
  });

  // Short, Authoritative Technical Note (Replacing bloated textbook filler)
  const historyHeading = "Historical & Technical Note on Solid Angle Units";
  const historyText = `The steradian was adopted as an SI supplementary unit by the General Conference on Weights and Measures (CGPM) in 1960 and formally reclassified as a dimensionless derived unit (m²/m² = 1) in 1995.

The spat (symbol: sp, from the Latin <em>spatium</em>) was proposed as a unit for the whole sphere (4π sr), but it never gained widespread adoption in mainstream science. Modern physics, astronomy, and optical engineering rely primarily on steradians and square degrees.`;

  // Targeted, Conversion-Specific FAQs
  const faqs: { question: string; answer: string }[] = [
    {
      question: `What is a square radian?`,
      answer: `A square radian (rad²) can be used as a dimensional representation of solid angle. The SI named unit for solid angle is the steradian (sr), with 1 rad² dimensionally equivalent to 1 sr (1 rad² = 1 sr).`
    },
    {
      question: `How many spats are in one square radian?`,
      answer: `One square radian equals 1 / (4π) spat, or approximately 0.079577472 sp (about 7.96% of a complete sphere).`
    },
    {
      question: `How many steradians are in one spat?`,
      answer: `One spat equals exactly 4π steradians, approximately 12.566370614 sr. It represents the complete closed solid angle of an entire sphere.`
    },
    {
      question: `Is a spat an SI unit?`,
      answer: `No. The spat is a non-SI unit of solid angle. The coherent SI derived unit for solid angle is the steradian (sr).`
    },
    {
      question: `What is the difference between a square radian and a steradian?`,
      answer: `They are dimensionally equivalent for solid-angle calculations (1 rad² = 1 sr), but steradian (sr) is the official SI unit name recognized internationally for solid angle.`
    },
    {
      question: `How do I convert spats back to square radians?`,
      answer: `Multiply the value in spats by 4π (approximately 12.566370614). For example, 0.5 spats (a hemisphere) equals 0.5 × 4π = 2π ≈ 6.28319 rad².`
    },
    {
      question: `What is the exact conversion formula from ${fromName} to ${toName}?`,
      answer: `The formula is: Value in ${toPlural} = Value in ${fromPlural} × ${formattedRatio}. To reverse the calculation from ${toName} to ${fromName}, divide by ${formattedRatio} (or multiply by ${formattedReverseRatio}).`
    },
    {
      question: `Is solid angle considered a dimensionless quantity in the SI system?`,
      answer: `Yes. In the International System of Units (SI), the steradian is formally defined as m²/m² = 1, making it a dimensionless derived unit. The special unit name "steradian" is maintained in physics to clearly identify three-dimensional angular flux measurements.`
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
