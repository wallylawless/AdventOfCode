const calculateFuel = require("../fuelcalculator")

describe("puzzle 1", () => {
  describe("example cases", () => {
    it("calculates the correct fuel for mass 12", () => {
      expect(calculateFuel(12)).toBe(2);
    })
    it("calculates the correct fuel for mass 14", () => {
      expect(calculateFuel(14)).toBe(2);
    })
    it("calculates the correct fuel for mass 1969", () => {
      expect(calculateFuel(1969)).toBe(654);
    })
    it("calculates the correct fuel for mass 100756", () => {
      expect(calculateFuel(100756)).toBe(33583);
    })
  })
})