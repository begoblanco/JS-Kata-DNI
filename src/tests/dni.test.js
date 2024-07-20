import { describe, expect, it } from "vitest";
import { DNI } from "./src/js/DNI.js"; // Adjust the path if necessary

describe("DNI Class", () => {
  it("should return 'T' for the number 0", () => {
    // Given
    const dni = new DNI(0);
    const expected = "T";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should return 'R' for the number 1", () => {
    // Given
    const dni = new DNI(1);
    const expected = "R";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should return 'W' for the number 2", () => {
    // Given
    const dni = new DNI(2);
    const expected = "W";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should return 'A' for the number 3", () => {
    // Given
    const dni = new DNI(3);
    const expected = "A";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should return 'G' for the number 4", () => {
    // Given
    const dni = new DNI(4);
    const expected = "G";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should return 'E' for the number 22", () => {
    // Given
    const dni = new DNI(22);
    const expected = "E";

    // When
    const result = dni.letterCalculator();

    // Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("should throw an error for a number out of range", () => {
    // Given
    const invalidNumber = -1;
    const expectedError = "Not a valid number";

    // When & Then
    expect(() => new DNI(invalidNumber)).toThrow(expectedError);
  });

  it("should throw an error for a non-numeric input", () => {
    // Given
    const invalidInput = "ABC";
    const expectedError = "Not a valid number";

    // When & Then
    expect(() => new DNI(invalidInput)).toThrow(expectedError);
  });
});
