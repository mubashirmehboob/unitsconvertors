import { Category, Unit } from "../types";
import { performConversion } from "./conversionEngine";
import { EngineeringTool } from "../data/calculatorsData";

/**
 * Detects whether a unit conversion pair (fromUnit -> toUnit in category) is an Identity (1:1) Reference Conversion.
 * An identity conversion satisfies ALL of the following:
 * - Input value = Output value for all test inputs
 * - Conversion factor = exactly 1 (or factor ratio = 1)
 * - No mathematical computation, no offset, no scaling, no logarithmic change, no unit transformation
 * - Only the reference, standard, notation, or measurement context changes.
 */
export function isIdentityUnitConversion(
  fromUnit: Unit | undefined,
  toUnit: Unit | undefined,
  category: Category | undefined
): boolean {
  if (!fromUnit || !toUnit || !category) return false;

  // Test across multiple non-zero, decimal, and negative values to verify identity transformation f(x) = x
  const testValues = [1, 10, 100, -5, 0.25, 42.5];

  for (const testVal of testValues) {
    try {
      const outputVal = performConversion(testVal, fromUnit, toUnit, category);
      if (isNaN(outputVal) || !isFinite(outputVal)) {
        return false;
      }
      // Numerical value must strictly equal the input value (within double-precision epsilon 1e-9)
      if (Math.abs(outputVal - testVal) > 1e-9) {
        return false;
      }
    } catch {
      return false;
    }
  }

  // If category has a custom formula, check if custom formula yielded exact identity for all test inputs
  if (category.customFormula) {
    return true;
  }

  // If standard linear conversion, verify factor ratio is 1
  if (fromUnit.factor && toUnit.factor) {
    const ratio = fromUnit.factor / toUnit.factor;
    if (Math.abs(ratio - 1) > 1e-9) {
      return false;
    }
  }

  return true;
}

/**
 * Detects whether an Engineering Calculator is an Identity (1:1) Reference Tool.
 * An identity tool satisfies ALL of the following:
 * - Explicit flag `isIdentityReference === true`
 * - OR output value numerically equals input value across all test inputs with factor = 1
 */
export function isIdentityEngineeringTool(tool: EngineeringTool | undefined): boolean {
  if (!tool) return false;

  // 1. Explicit property check
  if ((tool as any).isIdentityReference === true) {
    return true;
  }

  // 2. Data-driven evaluation check
  if (!tool.inputs || tool.inputs.length === 0) return false;

  try {
    const calcFn = tool.calculate as any;
    if (!calcFn) return false;

    // Check if output always equals main input variable for single-input tools
    if (tool.inputs.length === 1) {
      const inpName = tool.inputs[0].name;
      const testValues = [1, 10, 100, -5, 42.5];

      const isIdentity = testValues.every(val => {
        const inputObj = { [inpName]: val };
        let res = calcFn(inputObj);
        if (typeof res !== "number" || isNaN(res)) {
          res = calcFn(val);
        }
        return typeof res === "number" && !isNaN(res) && Math.abs(res - val) < 1e-9;
      });

      if (isIdentity) return true;
    }
  } catch {
    return false;
  }

  return false;
}
