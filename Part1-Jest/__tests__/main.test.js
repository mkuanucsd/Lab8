const formatVolumeIconPath = require("../assets/scripts/main");

describe("Check if formatVolumeIcon changes the icon on values", () => {
  outOfBounds();
  inBounds();
});

// Test for out of bound values (valid)
function outOfBounds() {
  test("Test less than 0 values", () => {
    expect(formatVolumeIconPath(-1)).toMatch(
      "./assets/media/icons/volume-level-0.svg"
    );
  });

  test("Test greater than 100 values", () => {
    expect(formatVolumeIconPath(101)).toMatch(
      "./assets/media/icons/volume-level-3.svg"
    );
  });
}

// Test for values in the bounds (valid)
function inBounds() {
  // Values between 100 and 66
  test("Test values between 100 and 66", () => {
    expect(formatVolumeIconPath(95)).toMatch(
      "./assets/media/icons/volume-level-3.svg"
    );
  });

  // Values between 65 and 34
  test("Test values between 65 and 34", () => {
    expect(formatVolumeIconPath(47)).toMatch(
      "./assets/media/icons/volume-level-2.svg"
    );
  });

  // Values between 33 and 1
  test("Test values between 33 and 1", () => {
    expect(formatVolumeIconPath(24)).toMatch(
      "./assets/media/icons/volume-level-1.svg"
    );
  });

  // Value is 0
  test("Test when value is 0", () => {
    expect(formatVolumeIconPath(0)).toMatch(
      "./assets/media/icons/volume-level-0.svg"
    );
  });
}
