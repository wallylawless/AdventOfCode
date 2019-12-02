const calculateFuel = require("../fuelcalculator").calculateFuel
const calculateFuelforFuel = require("../fuelcalculator").calculateFuelforFuel

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

describe("fuel for fuel calculations", () => {
  describe("example cases", () => {
    it("calculates the fuel for the fuel for module of mass 14", () => {
      expect(calculateFuelforFuel(2)).toBe(0);
    })
    it("calculates the fuel for the fuel for module of mass 1969", () => {
      expect(calculateFuelforFuel(654)).toBe(312);
    })
    it("calculates the fuel for the fuel for module of mass 100756", () => {
      expect(calculateFuelforFuel(33583)).toBe(16763);
    })
  })
})